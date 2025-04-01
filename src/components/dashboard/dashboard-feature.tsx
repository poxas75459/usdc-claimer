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
    "CR4pZCRGXgbvHSZxGFkaXAhx6bfFXwxqbpw8ZeJ49SZaYbnZaUXnhsULVCJFUMwYxqbDK7u524Y2ccr1Zr3F3pm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VXEFfe2ov6owTqDavzTDUHWjFE71TGdCFpDbrV6DmUZhAnDeRAku7teLuqz6dVSH8YLqekXX3aFVcwVEUTkUR5U",
  "key1": "2619cQDMKcUxWHwN44oVbJMj97Y9wbYY755mXLysbAW92cXG68TjcmCphT33eFNKDaS6xPkaBKhtT45o61462RZ4",
  "key2": "4Lp2hNejQ8qnXWfxyg5m6V7seC3Ev1irWuv7Hs8xsMpd22DSZWAKGyXDD9Q5F17rGbFsAMFV613QrPCpuxHvW7xj",
  "key3": "Vgzy6ua6UpAUpEbQdAJvzU45ndqP72RB2wRgmpTFRAbbji19rsTQ3gwUpxRkdCX8azaGdjP1Y3dE3kPvsQEALmk",
  "key4": "41SMmHkYFALprNcGVTWH6Lpc7pTBPk8YUCKLgZHUiKAd9sFXA4NGz3k9gLr56Q74mhHGmxxGtsFThinHM7XPgU5W",
  "key5": "2Q2TcGAqdEtBzN4HubwtW2CuUFqkAxkbLa4KdcBjeagoFD9iRNCAfAZDMEFD2UQdhbZNP5PS5PZjzNBHpVqZ98TW",
  "key6": "5hqxMJkD3yNmocBm2sSjVMbgCe8XhKDBBQoxp3zbsPijx4rdJVaa1mD1555QeszNPVhCxAsuDn4hNKFZWSMuyj84",
  "key7": "3BHtRTVPAKBg6RFyj81ovd7rXWaDicV1JAU9JswKJH37uRhJfqTU5p6fYXpq8kYnt9UhWPvxuG4WjnGcY96e1YQ",
  "key8": "ePcHoYDjvekoriLZyGS2UtoTq7pbMTsWUUsbiFwr9yVfJy64wuxyLLE1h1scK4TsTw9kaTx5mYt7RzWmDK9knR8",
  "key9": "4Z7KgdYGE6Uc6uWwq1kL7dhP3383CkxR5ytiPTAYGPHpLLoCRhRdmdyUbgCjVn9z68DwXYSMP9eDe7xZHwMkyxhP",
  "key10": "3y6mkQF4zYA1bD2VtoCf7MrRmAFb8vd6W86RK75tmRnmZ497Qtsj8ULzGwWzQG3dzhSR8Utpm4tGkSJT3BAX2joH",
  "key11": "5izqpRV7YzmtCYc8rHj3vbvazyBeqey8hQUbTxSamdRdfoBswZPFUbGPXB3Tf8LgP7dnXgX3pm7RPidBJ2xejtLh",
  "key12": "2u8d9ta5V3wDzsKv6RN1kQdJh7G4vBz3XZ4B8EBE5F2c82GaYyLkuX8wSshE59RF1JhA9oke4CeTNjGryzZx82dv",
  "key13": "3vQ1ZPc1mHu4xJJvG5uS8ma6opRSG5qXZcNM6Ammwc6cXzPU8ndRJdWSyd4cgAfSg1tPChi61CMc2FAh9rKmNqoB",
  "key14": "2XXwHcVA5xCwDhzEAtrBdAcw8DsYuf5bsMGYCDP5x6z4KpPFjyrADRgwohu3uZJohz4vr1UZ9fjnc8F7PzY7dULr",
  "key15": "4FgaAwxXmkfaMMVVNeWQC4gZzorJ2HSp7q6FQcYy8pXNkDeHqjhpVsPxBYwee6nvaZVxCq2NZh4ysLWRbKBDSjXu",
  "key16": "4rqPryRWYTqLcnpCACFCaVSrKFPdducou9Ff4dChsLPKKRNZ8kWNvQmcwVZSTKV4H6zNtJvFzKEj6qrTXrxNsUCV",
  "key17": "2toMjb1hHWG3GnESMMsN8cBHtHoDxhygXHJKL75HEkV7AyvwQcGSmpwDqnogneJAMMKSUxfymqAyXbsCx1fQqGY",
  "key18": "EcT4R42zKEuouffUsqGecHLwzroJYDYtZuYbdfjmmJmakpM7rk5NXb7aDJtuNCPSXfbbJF7a6Xcz87szqJzQqzF",
  "key19": "2ifV4EpEwYx8xXSMrEdMbfrc1T89osyrdCnd5LjrQU8NUnSrNWrUVNp754c3iBZr1SsmEaLDfdQs1w1x2CHiDZRB",
  "key20": "4bT6Q2kbPcNcZeYe44PAYkEMXLGEteam3s4ivfuUUM4oN8KzrnWVnezMrj6yo1MK7zudHBAMV57GSudjm2RqDVLY",
  "key21": "4sdfoQz9m14tasc2cpQbMiA9cUuNLqwKNRfKwSoXwfgUmXQtT22wnELLjeLmFwX3FDps5GMbLeqhirzooHksZjE",
  "key22": "i2gWPpdpSYUkt6kHrfn9RqdKSAzE67U62hQ4YYdsna2N652ASPietK1aUFADt3qR8z7aW4xnZ6KXruRvYoZJ1Bj",
  "key23": "3vXJTpVDZf9PZvRe8MfrTFzfBbXBzKVrF8QuHm248mgjwabTMquf2auqeL8HmATwy9BfXK3DZGWvRwoojKyMtV5r",
  "key24": "2QSw1RRELJvEmmmLuw7WvFvYVk4oNvryixLUqJrygvTXooSNjxeR5cJM85KZ9UVaMV9wC95vYTZwt5Z523tQ3Z7a",
  "key25": "2roZZvwBqf28vsyHQfayitDDoHdKKnSrE48YbJkWQaDeZXMtYd9efaDaGzgDWAtyBgzRbfWdLwmASGxWQ1eqibQX",
  "key26": "3TqBGFTFEJ4QnzvHHETRbhWHftb1yDvq2uqBmQbDRD7EB7BGqsE3HVSYpaCeBUs6cveWLMh1pBiqGRNs88Rqd32W",
  "key27": "2bVhTWzqh5d7xCTjfD248RRaURXXBpkfHWu2AKv5qsFwJmTk5HLP5dkjJfJAwneMPuvP4z1aeRfZu3yo1f3CdcPt",
  "key28": "51HPuYR9EEF4t8s5JYsU3RVAL29pokqF62BWPk1DctKJQLs3V3KKroLfyCSrHwGiUxJJgRjbaVxsVJG2yuEDtqjz",
  "key29": "5tgaQuACESjG2tx9DwiM2BiBuasVbhBRDhDLPcptD1k8HXhjtBn3Y4oh5ZgyDMVNAEikSL84S4gvadAzxdjqwsDD",
  "key30": "377TjjCDQVXNmx72QtoUGhrcbt5woignaj7WTb56PHv5Ej6Kgz9BBcrdji6dtP5BVHPSvxEfvgBXgcPQ6tCmCPAD",
  "key31": "2e7XF2Ue2GMtAherJatFFvCPD7tksaLuH4Q1LpbpFcyHgED3pt1sG1zXxshy7vFUmu1E5bMwzPNgGa1HSJ3J192a",
  "key32": "2fqEktmj4WXCyjqrT8i9ucdM2V9GkP3rVvH3UkaAbPeSVFy7kP47dPzfuGRdYjuJoDvc68aw7MjBT2ybrkzwT7jE",
  "key33": "5w6FpKt5BSWvs8QL3CubgXB2o5Yk4J3m1pfnvThCkX33hn3KEndn22HpqdxXeRwuLJ7zuZvsb3JEqudVAyUXqwYr",
  "key34": "24euRKTVnQwryH1Vx5unPM9gUe3H5LFUNeUEvtVJc9sxdqchgPAb9ZEsoHYDB9nnpKAMGMZVm2poRmRbQq48BxF4",
  "key35": "3F6GR3jmbNEuYdMq3xrLQC9fVpPjPJhP3FE8xA3g6y3VdCbmFQaGVrSPSdauvWQkToGkMGcJBXpN88YHjgTitmw9",
  "key36": "2b3fCLNYgY7BFnzxf4E7WpV9SpBBhqcmeFHiioToJjdqDGD3LJEAovUwecU5BaFuS8hV8V1qXDhqeuJfwm1cZJeF",
  "key37": "4v82JGydeWY5aZbAkzc7twce7GRn5D8vk4uWpJz7qtruFxdqABzVtqmZRHU4kk2pLDbEAtsr8Lx2cK2a864aRnT4",
  "key38": "3c7mK71vyPaJfPqR1rwRxZFH24eJQGMWhuxkX1SiBg6yTQjzv6Pt8xJokWH6SQizrpNuJpB1yBFANp9CWNq9FXNr",
  "key39": "2bhEeqUbFPg42dd9QJtWdcKfd9KTSR7sTvEh6kGTZKQj8c72mhhvdC1jQuiv8nLzLU814A448nxbGStQU1THawRp",
  "key40": "aVgQSG2sXzHm8TzokdHRRtvpfRsxoVEdFjuRLHPqPXLE7bCfZLxZDJG5yRAhxxVWEpjXi5gWq4cRfH6ApYKJoMg",
  "key41": "4UCQXTMWSrQCHxDfp6HewJWv1kHucZnGMBXGWFhuXR4kuQPiEEJ31WbMt7JE99ius7jXtedWpTzA8kYJyuLYfnvw",
  "key42": "4a8VWtiD9RznnjjvKgipSK5GtHmssjyJRPpFG1a9qN2CtFG7DerMLvnFBt6wTqTRsahNsvxv3LPz5Q9k8X866uY4",
  "key43": "4hiFtksJe1ApM4sUcfaEQQ5y9gTbDXVvPsiPi9M9iGFh2UhZiLLmxwFHLnSFcgy9Dd89eTfW5sQcGjSfvY6hpLjD",
  "key44": "21coEWbMQT4VyqvHyNrfaaa2NbjSrfh6B5QAi28SoJYVJ2VaifiquixykwTsKXUPWPfhAjvks7HwdaCbAFWmSbng",
  "key45": "4VhH4JvZYcXMqhUZ7qAZFRDJbEuFT4dKBE9ferZmrLZymhVZtj3r7NGFD6qtrzrj9D7p9w8DV6K32RcjQXoVsAuU",
  "key46": "4kxbTjKDTyxSjZPnRYjwbJd3pwvLi1MYffWJsFEZ8PW8cxtxw9JwtpVeiK8J3qQpQFMSRE8tpeoSSCZWyfdsQpKu",
  "key47": "sbXvFddChmZhyQEmFsT3GuMnXz6gSHCEyWTUZfFbDcf5cBYds65j54r9b8665JFiTkM11La9TJiBaz66Py4NnW1",
  "key48": "5Pmkgnhp8dZaEoRdvkcJQBkefmNpZnrDBkUkvkgiuVSa68RSD7pjSp2NajJRusWnvfxFSWjQb5FFEiiKpVEAQYQs",
  "key49": "5muwV4Gkf1A2afwPvxaokQuHsGojz5peqjXSBpKqsdu1PTTFTvMFtmQVYKvsShfV2E3S1i8f7DAAKFtvyboxNqAw"
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
