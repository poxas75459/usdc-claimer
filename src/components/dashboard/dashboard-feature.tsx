/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4CSJfKeZ19pssj9wNQeJKZt1reJ3dACAtdREt9NDVXhuPMsYAYFEi9KTdxkwfg9D2AdfdmnBHcyDg9uax5cVYtDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26pBDQqUxCpWddVZdw9ynULDgX8FjakyHYnmTfoJu2xEwVuQNXU6g86fv8fmYGYD8nLwwJ14LGtDKvxXXCPimUaj",
  "key1": "5xXpFZXfaBzhE4hcYuHWenFwU9hSRXSTnz354ermJRaaCMaXGmdtXsnmu4YTAXJ7My3WEqfwsPZpwfmTeN1vDYQX",
  "key2": "eEcTrmB6tNK4a2FNFwHmYbHJTq3uHprjvFzSTwU3Z7PfT5LFdPa94gm55UxS6Ti9DNDWbtutXHzjnyS7wtEngPE",
  "key3": "5k1kgoKrqgzhANxhFgWpb6S78hE2UPq5jeCAR12DwvbV3u69ZqsEGvnth97RregMD1Dxo3Lp2VBSCsLSirVRxGxL",
  "key4": "mvtiZDp9ZnfEeiKeZsQ4ejfFbF3Xch6YHJ9Kjjb6cdzYvEynJrCbABt2twkrNUwpL1T5mLRsygo8vC8r3d7NyZA",
  "key5": "5jJm5c2qvy9MAhrRqzc4T5zij8AbbxGh5ae49NJ31pyet98yAZdUpvjRY5rw4JJ1vXtLGyrmiWAoQeVXhtpT7Urs",
  "key6": "3bBAoZXZnsEJtKFHspP8xjTzP6XdsKx7EDWEEZSKL1Wv5PTYcycJnQmgibGhkTgceW9ngzcrJcqp2idb4osSudo6",
  "key7": "4z4EH4EissJKCo1xjYrpFsU5hsNSP4Zqg4qU6qG8ydws5b1T3o2vj8Sp2iyWfP8WiLhhRQ6fNoKTb3u89bGB64V1",
  "key8": "ad9kEYcv1CB4fYFh3QiMCNPqaziJ8ex4cubDTv25dYuVKuNayygXUgtSFaDxcpZgbk9Vnr1wrpkJeLozjbCUzDZ",
  "key9": "pShH4Vce5wWpqRp4AL8xqv6QLaSiF15t2wMkArKFk3bcJqEhnpmqf2H24UhBd5hrcUE8ndmhgh5J4JBZd6P6yn4",
  "key10": "4QCipxaesYNyCS3CLZtN2rdJbbBQv9fhs1WyNZMrz4AuaYxFKViaBnWf3Bxs5t6vJtkwVGiAS7coiHdM38LuyyE7",
  "key11": "4Vrz3y33sLTRexJ1KkqhBLavvG87VTjWPKaVqwsLEoBEmVxdYN1aLnTRQhikPntcCU2FbaaaMRAEEGGf9p2eM8YN",
  "key12": "4mbDohgcK2SgryDtx33au6AUKD5poVj5vvAqKXpStfaKmUHUzRJFKwFZmsfYpRq1u4SbdZoRhMRy2GZZvfwHoFHc",
  "key13": "PJeF9w5uqRchDVkWXdzhzTQcVLKfTTX7dnDD3bob5t5RHA6JZU4ywfEzsuH5ZQb9ziRZobtcUJa3XwaDEzs2H2g",
  "key14": "2phdHgFaGHYe6NaHEWswjmj6Ha1fRNf5kuNHQ3tDMonX7mmdRZ1gtqWhPGqzvz3zYmPQk5jbkSKnmnHDoGgECdnH",
  "key15": "4gXXqdCtCc7ALwn512fK3YjM24jSsoMDjxjbhjK1urCafYXjyLkkr8uvTxh8h5dPCVHMX2hkz2W51gH9jgqSkgGL",
  "key16": "2hMin3ndf5Pc6MQZf6KMMSwEkn829RGbx2UPgyzMdNrqiqVnHJdZ84WihTtCEzRDZNv4ingL6bD7TW7b6FUbtCxX",
  "key17": "59aUCJVDTGMQ9kkh5AEZaXyUfCemKa2cvANtqGNcvwWTxmS41CegXxXhsoaKppqtAFdhYwnbhvLVYyyMHWg5BWMb",
  "key18": "2nm6wjzZKFCX7WgRZ69J225HxmqrXAnfrC8Fz1Hg1czZNBoDMQPAbG8qhkxzH5kaiaZ2YhpymakrM8hctFyY4cBy",
  "key19": "65umoLSzoHpyFzGJSGuZEoaoRnh71kfS9gptido4tEkBo2kp6WGeptDYrGm2QMwbfRb2veBpinrgitZz4zCJq5XF",
  "key20": "121xHonURXhuUXCqkcNtjkxHnTjSvefGoLzBRvAbQWQ9dR6Vf7raGJ5BdnV2AnSmutTZjG6jQDCKxdUXpK6EgX2E",
  "key21": "3jZzHJheWR8NxjHyXu77cnAXkme4bkxy13TtCY1iWXjpFejbPN5wCiJNd4EESRPD4VzyzmTHTVbh8rUShTzXeAVK",
  "key22": "2KLiRFmVB1LHaxjYRZ6bwSreRF1L3YD1ogzRBa3SpsDXVB7mELe1tdzWus1uvQaV88SzCSfLQEgJKt4L6qJW8GSk",
  "key23": "3ZrTyECAv3wjuQwdZaTamt3iWfjXitym63iiveTVoeXkb43p5mqcQmjnrga38G6H1W2Q1Hwne1R1QFLUpfJ98p6q",
  "key24": "vxTx8jherig7V3hLLyCEs64TXJ1HDLgD1hGZgXLMs4WSzigLn3T5CX1wZ1ML9trKdUgipbv9FwQqpto15N8TfpK",
  "key25": "1b8ExTK6RKzFVsffzBjH9GTmB6MkTKfgkbFXK8AnF7g7TDjyX3rEGAcSrsXeLizpJaJkswwbGGEC7j6qMpw6UFZ",
  "key26": "43ZStCqkkUKWu6kDAczzcXjsrAaVQ3itChmBC5eJyobHzphrjKysuVcsfRbRyLXSJ1faDmC216zEDa8z26xHaTW8",
  "key27": "2N4NKD2ertYKDpf9T3dveU7DTGMYUyq7MYq23cHavAWKJAcFkFAm6RrZRtrT3JcgYXbHov6qupbQ5FjHCqPVTqPw",
  "key28": "3hq7y2bfYuartfCcYrUdsMH8K7zTofa1KswNg98whRQoK36RETDqpBkKkZaAkBo6fPRmTSz4HtviojU3UskxfKj6",
  "key29": "4HYbspGwtH8h5MofjpLsjwjvoSCLEAXuYjFZUbSoWrn8p68vUNbwgSF2qfRvA6xRMYX8szupYfHXsYhNK213AaTX",
  "key30": "52EawcmhVWb7dfhE9PN1G9J24SAAAVbTCo5k7YBHuCWVYbrHaZUMKmQox8SALSoWJ648yW8xfyvCXLomtAgRKPLZ",
  "key31": "2sESxWvNopX7b4mxpELeFP6XLXrynunSgiuPHHodLFUuQX5DzxuvfYtxYmvToqXxorJYUCzVqC5iJmUig2Xr2Bwx",
  "key32": "28aDDwufWZa5DNdr4p1C1AoAq7kWGvgy8L2X8Ajn21vXDEzGTeotgbLe6SYMhfHx6SkUCAXFcgZBHv7yii2SN9pF",
  "key33": "38qHWoeAFvbHgDxSvrjLqF2fmfe99h1hCXaEuskmRSNmuU4yyZoJ8PzPPXF5HS9RPmsF8JDtUKRwDBwpvUF8SvU8"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
