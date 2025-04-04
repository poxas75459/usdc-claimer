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
    "VAizx311TTmJ2uKCyRUZRMkMW7Bx72djmV12buGUjsBD1o44GHo4XoY4MDMCsP3m5qooBYVzTxMNFuW8drrDZ9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mFRmYTfQKQwJxc4VSpJFRfXZDNm1xKs6rkwLJX7JHmcQRHpDzzz2S9oQuaPU5ndWiYH2MGP2YCaMw1h8FbZeNqV",
  "key1": "4wym3tKSh8EXvRkiaUeS3ur7nmS2eXQuoH93JM7UceKZef4bQqan4VT6ELzy425Hz1wYaqP3pQtQDsxsm4cqmJgM",
  "key2": "3rc9ZxphvhQgdAvMn2rLUw5Dy5y2kPzT2CkgaPucmYcHTafLWNgBP7S16RusDH21dHA46bhex67YV1eBm5rpLK9Q",
  "key3": "5ZWgVWx9qWTS1wv9fkn56TSokL58E7ZYvxxBe4t3YSTgPnXXzb3rQjDtLkiYsL8JcdLUokvZrm6qi4ALSz9HvBok",
  "key4": "2aBZhBfcMBAEh86EdojSEj6R2YEo5mZNupD1SMEqtygXCdASPTBGNVsQ6k4FW5X4Qe73R1hsTdFviyiGyfak6cN5",
  "key5": "KY5aWj9MxyhGDAqNz9kJFG9VEDJqf5HKUvmQuPmmYbYZDRq2NeCL8gKJFBVLasZiQFYsYtkr3HrL2dGzjMbNB4e",
  "key6": "2nRNmLCYRv3H839qVDNj7X8JYZW28gR7i2H8x6Dhsp6AAdgijptjzjJqUjizMTE8VEVWxC3kuNTQgDs9W3Ak2mx1",
  "key7": "5a4Muhes8gL83bAkhGTsRq4YS3obKPqN1Pe7K1r6dbDyWvePmiaBxH4QX2i8UYn5KQQPEUnz1tBJdDeYHPiQvZgs",
  "key8": "58PTTH1TNZ6ijZkGwzMepupXc9G4mH4CseyR6vtmP5fvtc2aZSEVwgTBXWrTDHUFL7XTj792tnNUozvgVc6zFgbK",
  "key9": "2hWcdHp1e5HQmajx6FYeVDFgp5dWd6D1LmWPwHnCMAWYzudGVfYdKTrqKZQEPSFLxRBSFZtk3VbqRdxnYnyiQaJq",
  "key10": "4aP9pxnFLtkN1v3pEgPk5rcXCpoBW3YY5faeFQQ63hmABRuwpNsNtHz6jaAbZhVgDJcPF4uo9d36QB6f5a7by7GW",
  "key11": "4xGepQ8zfNpmUr6CUwLGLnSZ5xp4nmwJ45LBnbvtLNfwLA5LKeMqtxUw99FmZy7Ftbtdk1Mpek69ZVVe8i3SuENq",
  "key12": "5GmXiaEcQYngT1k9sG673WHSu5a8HuBcwHg6wB5r4BGpjnqPktpqir95pFUQt9cB2zWkX6JrsBDprPCsvxKTpUmb",
  "key13": "R2MG5Htr2vPBPkf1mYxyhPnwA1GxCvuLEKbS7jHNDFSKzqiSbjoyvpfkjUTjXi6Nj6DVjo3ZjsBeMVNLWTjKRem",
  "key14": "2QbsHWaT3pNwvwhgc8UWfEvXYrsnTvdHH2rLmXmkytqqkNYDrriSRQVFdN9J9DZKkCHh8qSsV19VaXBGzBfQjNXr",
  "key15": "zo2SdxnVFdETPNDC6WYVV84oVVy2h29dBwt3hsfsXsvmoX7GoF3misvrhCmCnyNPpkqF5VSDddqZ79iFLFf248w",
  "key16": "5JCAscwqHrNrVSW9V3dqSxAqroQj8GYMt9k99k5KmA1E5jqsWZymJfdce8gUV8UQmtmSAVRqwEcpEHMFo8BWFc5o",
  "key17": "4VTSvWXdafLVADXeStetpFSSsLpXhHuTNDRqP9UcV1WFj2zjc527HTXbcweDjzRB8ULZBTFdJGRzdyebpqkas6iR",
  "key18": "2ei8GtNLr2GGtct4Zv5YJnMiakDAiAsLKSoxTbY5eVLMHRyW6uvtgrbtA8eeHoV54vGpWzyF1uYozVkZ86aFhrz",
  "key19": "4GU7r9ENFS5YPpqWTqPvh4HzkDKPsZH3ajSM3msNUpe7nTGq9VhkBMiWTkcq7XVGPSyxHFABzEbeqDNxXRyp7W3v",
  "key20": "5SpX8GCJ372vmSu29NLQ134K4CsAGwJmivby3YB2NyyMRCUeZmhGpSemrDNpYGWJHrUmcHRioz7mzxcmsz3mBEEX",
  "key21": "4opU8HeFepGXuxMYw2qbwXMg1RHxLAvVX3tM38JE2fKYeXHkGEqgMjyHvRktMNVkv7gXXxxSKDSbZsix2QHtqik9",
  "key22": "4FzGCVAQD3UYhVh7ovmTEBCTRaJCM1N2AHWEMoXcYHoph1q2g3iU1xdsKmWw7rqiN4f8deN1hx17R8NZXiXA32W4",
  "key23": "1764noNxt2mh62XyhecL5xFepu43FimSbzJNCLs1jZ8zgdVa5rM5gvSzYMGkbYM9vDxEL6yjANyZx8E9f57Kbwd",
  "key24": "5Z9zGUgxZEMoDMYGJJMGTGWCRj2ucNkRyuQRXjz23y76BUhVCRPRzdSoCdHoQTWysuXpmSabRWL7A9J9HnnEwfqE",
  "key25": "5Nst7bGieGqTcCdjnTXRg475Jm64HT5hqCyvT1Ccd9m2jBmW5WuQWXp1kgjykaiekUJpUa76VS6vj9P7AEkAZBFz",
  "key26": "5JVnj6gtEUSNzcoJuKubUHYrfMxKcBRmER2Ap41Cy17KsHKjqNu9RWvxJbdVVCJjMS7HCHGY1pwQkH69k2Am1mgU",
  "key27": "3fgPEukb8EJ2ctLTiybdEWSbpEYJZcLFSMxxiz4akcdQyJGiaWfq6cAc58zCuQxNJxwiwr6bxZ6y9iGde5J15e6Y",
  "key28": "5j2abahkjTASSSLKFioGTnf5BzQvnjTagEJzLBr7UP2W9AJcVD7gahGSaV5YfMLUTZ897truAw8PHu1hR1K7okFk",
  "key29": "4ELQ42NkuCcNUxp9m5bDqdJt4aKv7cs2FNWRFtUnmgPB27Rd5UFDHFyUp7mebaQHMLPDrZFNGzZ97jjY5qZHeQXN",
  "key30": "vjxJAMUqUGtN7tYMMwno7niogT1WqmP55MyzQj4aHfkz2senPpSkqPZXw41JPECqTiqgsTgxS7WYpzToTCkme8L",
  "key31": "2wvHBgTPygQPQUYX8ExgWRDCNrvoazGcNstPttNRupTBtK6SAi33Q5b6BwnHk8ik64EnhTvxdFKey7Rxi2nZnvJj",
  "key32": "EL5azmNEUw5S5PzHmUr5iHx36Bkm8Yzgy7b6uiXSEtHHyhTxZhpHxN14PKAuPoAtDhqtfXD3hHJ6J47dRfXmWWA",
  "key33": "23TvCopEPKdHxvGeGV8vuSRjPozE7YopJCbBoL9PccnrkUi6SfgqHDmvzaqqdx4s2vaG4GwupC28hN8zqzFem7BY",
  "key34": "CV2R6QnfxEvFngirSVSj9dhUtoFopKtZnwr4saFUmo3y6EFmTBAh4cKVcMLqzFmiPPd5JCSaMsjR2epjn24UAoc",
  "key35": "22tbpG5zeqwhu1zFtQRMiZSaTz4oS8R9btQ527atBA6bSbFLTLi2ikFdsMVTWe68efQNPGBVQmbMdcKS1m34cEnm",
  "key36": "4Qf3r2rC1ravuhXtPZwAw3ARXtNsZRvRCShU3zGgEuq4e3E92gKsD3xE4VbPdCfqh52us2Bt8KUNeNXkFY1bfGzG",
  "key37": "vxw5AyyoMjkJCpqLPe2ed73BN5DEh791BGMv3rzQYdZrG78jz4TknxBzEJtTBwcCWTebzX87gFo5TiPJiujj83z",
  "key38": "5fyTG2kiyoVWKjHCdMuFV2TRojPwp2dssM5k9mCf5BYkSVUGBLzZkwF2N56zwzBGwiHZMScCAzeiLHyXVoVYL9BE",
  "key39": "3aKa289saLzckc5hbviqkDVRzb9cHHYzq5pfdGAyN7TMhMbMRoicAtkZmguYsh8Fq3zRMJdFfYNHKcxkBRdVBkMu",
  "key40": "2roqe7j9vqpHVMw5bYYcKLaAtwfVRpGyzyae6fR8nHa4KCP39gYU98djG2SMMnyqkL5Bp2kohENzMY1DeDULzbXk",
  "key41": "45DrJdgU5ZT7hqiRq6JBeGps1FPLSfMq1MCmHgWQUmgkmHKyfYqYxhJiweYaQ1BQyCFJdV9ViB6iFhzieDfTLifq",
  "key42": "3TYvRXTCNzf5vZPahwbUfv87rb1tKN3uDq8f4kQMSEVRZnATUPsRXtf7Tmhrfry4fbg6Y1t5r6iBRL6CRDRnzQyt",
  "key43": "4zVmavftUywe1wSsNNnVabNEYfYnRZPBnwQm6WHbGqLzE1pvgWZQG9zLzsxmzagBkJPCuHqAuMTxfowAMQWvfgcm",
  "key44": "3C6z7p9VYyDp5DmBk4wtqyKpnRQjP5SfpLRXwhMt6z7yi57jT9N3qUu5Tx5rJtmryqcapdsHueXkvBnyTjBNrFSD"
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
