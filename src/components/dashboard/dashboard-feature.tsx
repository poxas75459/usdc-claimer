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
    "4RJBZ5jXGcEAJAGp8PYzKRi2CWpnCR4naMXskzvcYkJMZ5xNqPHJ53cQEeXb1f6yaW3f3R3hX9ZLcueiVjTx4cw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EVjY75hgNaT5baXQfbX77gyBpiFa94Ldx39k45zErhP67hqujYiHASKeeA92eyeJmyxRKRuAyi5oddX8q7LKaS8",
  "key1": "2PtRFoUpQkiFzz44foUz2ktqWtq2SJtFZP6sg1KuwukTVqWXJQNMiEPzZzPTjSHGF8SF3hSuEveMAFJPttPdftgw",
  "key2": "2CoLmL8k6DnC9ncr2MJUNcy5cXSgK5MjwMUujq8eHs3mUSePLQiaKGcyjoZsTa4fNgrsW2DRk9z33vXf452VdBJB",
  "key3": "4g3GKFZGyAcReGmepof8zd6xfyZrjYGgYG4ibp4KsozfLdCBYXgVWP1sRrM4Gwjyjj7DuzE2E1izNfe9qpLeUQvD",
  "key4": "2CNU13v6XA1Q3UYvVzHnEdo9gdfknEN7kc3teQKWCUwYZqJT1fUvvNox83xznFFGQjG87JAoNkhBX8GPrg9yckVP",
  "key5": "5PP4fDaAhmjZR5N1LjMcZRr1aYTM17iaudbCfjaLcpH7sfSWk81SgtkG9cwpCEw1LVuPv9V4sHjZTq9gEYhAUuAM",
  "key6": "25TDSJMkKJgyvKUsQ9sHLxXuAvq4z1ByWbk1fsLLFkNcGWJ1uHDk6SHtKefzSC3th24w7tR8y7pXntCh2TTXqLCt",
  "key7": "5r5skYS8GMFH8LW5k7LsQNNpY5oc7h988tUCJrijju6SSbccTc3gp678RdUM4dZvYeZGMT1ZQzn4GDuxrTCEB8X9",
  "key8": "5xC1E6YYQsPURR2BnVC3QSdfYgNhnoHTAvNrT9G7F8i4AAEvXb2GXHH29G9dQk8LBmkirp2ub1zYq8SPRk3WFxDR",
  "key9": "2UfdASwdugqTP8LiV2CyZt83aSb73gN4BZSR3toiPGgtgTnqiAKiAMtsTiwoiyunekq5s4oNuFquwJhS1muzjmwW",
  "key10": "4xMG35oBUx1AudUeZy4GbEfC1L5dwbwppY7t2oVLQazu3Bge2ZFXArwimmEwHqi9hQpzcA5upx7bSeRKyxbUj6Fm",
  "key11": "5NR2CQEcAJcC2gCSzhfCaYG1VfmyF9wkB2VqJqTpiANLsmSpcttB3yZJGebbFaJHyri8ehv4Zz5omHdbNcapqget",
  "key12": "2bcWFCWtJ11WYmeGsE2NMTitutYfzHTK9Hcnhvs8u7ioqTp5DeaHXczpfvpR2uaw6VNaV3KupUfQcBht8BX3JoUQ",
  "key13": "t6ZbFGx5oiB2aSkHJSaqKVFiQHJLUwRvkcfeRRitCk6bHUnhHtLF6P1EdDVrHmgaqRevGDjBPPeV9yQ8nmiJDd7",
  "key14": "4extvTpmeJLwZoSVdcgfWXDgnB1hCFYNkrmWfKrQPMsjo9V2LJXPi8rQ2zjCM7zhrUvRarXh4QsWyptd16nkTA1p",
  "key15": "5cNkCs8DG7jRkZmjZedWdycMjg7vousUR4mXaQzepk7CSrg9P85ugqT8NsedHCZZVXGajtmoMpCLMS3GZnnU4dW3",
  "key16": "2jPCEoDAyoM75LbUYdqv3fVqMwNrSv5EdjE2zGrNUqEBkSohC2vUc9fYjhoSBYDTcjomcqDa94vFpH2dXzG7yUqm",
  "key17": "4NGHADsTEbw5KTktsk9EuqX6oQMrJp6a4txbaY3DsAfBvvSRFtJXbmhUvmZtJTRNfvTNG9M1yvSYm25UT5waX2RK",
  "key18": "5nfiBvTiN9ce1vynHCKyna3A5LLtftDKgxrgt1P44QMhLxAQKh9ZVTD1aS9uc8T3QtLVCNgZyXm5bQ2VoWPqGeX1",
  "key19": "4DmN26HnVwyf6TcqoUjFLataBhWkAMxUjuvwfCR8utvybb7AkQy6x27xu8QEFcB9b4wCAfVu86WrGk6kwk3ytnWJ",
  "key20": "3dsGWGKUTJxZnEqpZhoPgqyFRpECX35xfum9R52dFwREYkCrASNUveKEq71LDXcVEAH8npAL21EsjK7rshNqEddX",
  "key21": "5GYwJzspR5B4YZmXnFY9seD7vZJ46UA6cJNs7mVGWWcGcQGBwVzrbXvKz74oPTwsHNQxG7ozYCwsHyhjhBQyEP7u",
  "key22": "5JfKjcsf8MmRSmwqrm41oUCbb2dDpb7SefYWh1fQX8EyggXHA2d9241eJFchhG9wPHHDyjXemns3K2rRecXHqRXm",
  "key23": "3nuzJvreLYjPisuvBAp4JUCqEjL7JVvQUYsyC8LkhaiaFittLjLoNKcmACuAbxbse5CPS1TeSHhQ7C7jeHBCjXQ2",
  "key24": "hiGVFjMLBwvQSEazCF85diEamBVE4h4jYc7mbb1pPEb43Xjp3oVz5kS33KdEZHNFf6jBgRbY29LBhbbxoB8dQdy",
  "key25": "3Rjzq6MDNFCNGKsUo1PDEsbywXA4prL7pVwaYJQvszhSMcGW1LEX7iaWjZA1EKFtGRyTB49nu4SMbU4f4J9cYgdg",
  "key26": "5NYfcrgpLEcMXgzVRdg2PbEVJ5Uu4jCbHXchfCfGYsZAPbVeX8QNMR1MprAxXN5EQjUkvdVVFXwXig2fwzjWCtwg",
  "key27": "3zjtpXA4b1yYZR8c9A8iiFUwWaLuUo6YriFrJp6jAy6kPM3JPA1gw7XNoF8Ch1Y2fqhMKdSnVg8235YxTJ14ceX9",
  "key28": "2Q6VocvPLkLp9YKwiuW4cnR7J26ZPVqUR5CW4TxYsk68HBby4UxtNH4yNkyzeEMfpsGzYBcLaSSMmFmP8whNcmXz",
  "key29": "jqWPgf7ZbsXZPckUyLG39RfZxt8NAbDTp7edsk1nD8e959Lfnxy2BuZssLhG8HVGpWx22TxYNyt3kuCoR4FdAC6",
  "key30": "8MKwjJE4VU218Wtdteg1QMQtgfpozLNNHhAGanZe5MvyUHqgBK12T9gvaDDFxzJMsbXPjXToyNVaPiaCaiqVb6g",
  "key31": "5a4trkFweJBmG2tpzzuRXVb3zdcnW5CpL89CMAqprD6KBiW2931oPjLKi3vH5rfZz3UJhfkZd4kUqHGhUQtyVKpu",
  "key32": "587Kmy26EmhApoug1iNNHgjoJCAj58xmbF6zuT7n4BfnvvCX7RK9uEjPJ3HZEndnYH78drcawjTRyzLBCsGwrxGw",
  "key33": "3Yf6tsxhsPwVfK6eLqQFzKo7K53HMt9P1w43A3ANEAXb87M8jssFJgkjWJbodt92JvDCKYeQDysQakbxCo9UVkc9"
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
