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
    "4RFkBoW91HYawRmaGWYaQiLL3Gj49gz3AZzxjg6VQkCQUuALR99A2xsR51FkD5VJcCeMa7RRQ1KYbeR7mKgS56rY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i69F1hiJwcTns5ohV1NkxPZCxBXtyZJFWh7beK1W4A8XQuttySR9s7NsJxueM7rPdSUPym4pw1rUuhPuoKG4Sd1",
  "key1": "5bVtUtxGnTJdUJ5UaEAMRnWE2yvpky24RX2ary3ciR6zHcmeSo2we3dM3qxUAGTTy1tW6ch6tbm4ASQS6f1qQGaa",
  "key2": "6JaNAJcwZPSpnGVCDguAaugBdXZ486i97Jm2jNgDykm4zsCHSpfdYmAnKrbdqdCXZtCgmKGzj3pJrZTpxAoKXBi",
  "key3": "2FGgqBQcVxS87fCWNTgLZvxg4HAUxb2ymG2WrMAU9rnWu82v843MMnrFF8XeAWNefFNZJgM86n6nFNn8Fi9hChPm",
  "key4": "3CvXxzxKNWreVaXZB94ZCKA9e2C3UHXar7zjCb2ywqxxx4fr1hRh8GhWMbsZQioA3wJQm6zJzwQHPipRDqQy2cS3",
  "key5": "3rHi7zpJN8fXrAQZUsRoeUbjUqBcA6k5fyv9Uj82WGPApzmfqtfochicN1x5Ecx9ZdUGfhiiU21upzKhtaaKtTZX",
  "key6": "CZVrkSgKKj5PmapgYjidfjo9dVzwMFJJRfyhZr5J9YAHpgx67bQggtrZBh2VgAAfn88zN1kb9ynuTde4djStrUK",
  "key7": "2kDd4GzqWZkAGW89nvW1R9u3aQ2YSKmbZmungmXUgDawjH4gNBKwc3kKPkJZqVNK1w1z9GF2EYSn3USAq582UjgQ",
  "key8": "2dNKy1H125CCkkPGr9kgGrntPHRo1Ed4sD3MJbGeesruR3DLHaWvkKGJ2TrPUJNwcEf9Za6FHnH4rjS84dqybF91",
  "key9": "3PQj2XmUENCDZC92MjMfyMgD2DMoVq7dQNDHpKCLYdQaozkHbT4XtSY8ZCTRSecegTaXcAPCSLDKvir65ShiU8Mz",
  "key10": "66mfxKMt957VvYVjPbxrhAC42teHoFvGh3TaymK26v5DfzsGWf1KxmSDvQs9wWj1q3HqJLsKU9nwUJuSoqFmgmHf",
  "key11": "5y9okKrnGV7heb6m2ifFqgyweSVyc8W1ywdvwjoACkNNibveeTGYmDsz3gBxjzGSTkejc9XPD7GNNvE5UxWHjUdi",
  "key12": "QWFPtzeYhVqSHogyB6smxVQLUE3inDmynvxXW9o4ufAnmna7uK37A18LdGc3uLxc8UyNQctBtbc31p9LRKnAQ38",
  "key13": "cZ9nj5pobM89Q3NwneaziNjQgyPMzwbb8441yg6VeEdoQSEDB8E8hkybf21Ky5qJnps95RZHZD1gEj56dBiE5At",
  "key14": "bejRFrYTt18MvjYBiZPTAPWRS1dmhUuPWJvcuzLT6gnrZc8hvtEcsDV9jaYeat86hBsq1iMByQE1MP7uGDrSJgR",
  "key15": "5xArhBz6ttWRMG9ZM7uP2B4vURuxRhzV5JYTdJT2WDmw7J4ZFcooC5XuuuAUUxpNMjb4hyiMdVgq3EdmzSAw4DnA",
  "key16": "2gHSfB45KwKgRYNJFocHGCT7HGDHXV3fMNTfAdhPvbygHTbdUdU3SmLFjbuULDzeLyBAjMswDv7juzvtJrzVK5fH",
  "key17": "54JXGS33ssKMDNo9RGF2P8GZ5uJkmoReEHeGvTdYaWJzUScMAuPgvxCqBsazcWLYzgbRv8ZegjRzrEoZuaYZiKTz",
  "key18": "2aLzUuqkDCyujyGNKvceqpntmmbDAzwQUTutyfsToKJSv8VriUCjNJtTzYuyd3rCzZ9WNEhXWJ9jVE16x9y4gnY9",
  "key19": "5PYXC3qjzQu25nGAXLXaMesvBT53tJiYw3mATG8bq1emrRakfJjYyRG6XkQFveEfaKAPupMGSAVsY85ez2vUaNJ8",
  "key20": "CydDtEhwfbtRgvVR5MAvoWy3douDnpNEUfS73tRxVUzg8rbjXEfJGm5TWw9LHyiKoR7YfW5H6n7oEwnJEQxKR7x",
  "key21": "2d9jSLDdgTUZXBXFNQ2WZaiYJGYvVGEvukDaMrEN3SyCVoZkEiNsPhWiUdge7ChAM3joLxEvwxZjoPJeSpjJSvq7",
  "key22": "3FRgvVpavo93wwrgLWRwtWJfEejDQ2q2vGA4z4jncmAcswMtuRnEmQhzzK2FrQuY2jbLEpWQvq6AGs3TVwFdCRNn",
  "key23": "32JeCNzZtQ1kFEkcJ3rJTY7N9YKinveBiiEBq6vyswmKDxDWnw5aXcAU9kQuuGFwpwFpVjD2UbKFomvPUtfbbqdX",
  "key24": "4WuzzcqjsW7sdhoHSAAFLYx4AZ9XuGc8RSVMpmJvdoSbgfsEuqh8SDr9BweqroAR7Pt7G1p1bKMKb4ezGpKQeubh",
  "key25": "5s9VqCWEK9S3mdc3wGtTKiDVWbz9EBNfgdyVvg4mU846X49hBZUPBgaFQd779uxbzYDRa7CyxgRkmt3mgQ6Vm3wC",
  "key26": "3g3kZNDqZhyLiPznj2qkdbVHBZixpRWLF6Ft5DTZqLV3FgKGBdydEggWWpNetPHKvDmYdVqyGeLDaUzGmt3p2Ys6",
  "key27": "5iYN86tfknFFkR4ea8mnpHMgLCCKjHNMR9diwY1WLZDFsMmDRMN37TeEsVDErp9wcrmCDr1unjvD16fPZf8WA5D3",
  "key28": "3Mv7KheBZt883MvD3RKNtpHwApaZKjJTPg72HBjTDeXWZGrj6APZJgMDgRH8HmprJEzaMMspToSbFDCmw49BxrTw",
  "key29": "41uN6UkMwjUdoYfqb8283RSczDjeHyrCuHURkxarz2wuN4Bqpvo4HqSPWXc7Y1xEZ4cajkDWQE18YQ1Cn4GUT7ji",
  "key30": "4X6nhg8rmRCn7xi8mvgpch3qeKibR6m4avXxkam5AVYN3jYnf6q1Aink8CBhCVw7sJjC9Qf5NnyfMM34w9QoZoKi",
  "key31": "4ZpGfooqspSyxrDM7WQaCR1ZdG9R5SQhtdEfk71pYnnzRg7uKdhkncPCUuacotbXkUv6NP7uZ85fXiGY5PiFhTHC",
  "key32": "2Gvpgnx8Z2PQER5KWs7qp7CBmk1LK4TjhKRYKLfXZrZ8gaJC7ZnsfWbVCDvKEPWxqP9DoLbWurW5xgXSWeKauceD",
  "key33": "FoqwseSEWgpFBqN9w5arULdkgg1FTythCkYDGnKXQs8r4akqvpHLiu3KCygtqh3ZJ9vRwTsyjK3ZEyWPNUHVHCZ",
  "key34": "5zeTKSXkmRfZNgEnR1veCs1rxBGCFgBQ65uJ2gshFrCEMUQeLD3o7iKzva3wfmCZUfbkTTvunx1FDnKLQuPoTTMB",
  "key35": "324MeUSNZiktn2LDr71W5JmdhpxJjGWAfSquMcfhBNTWfPR72nMPQ9RF2QXXTe53zrDjJ6rmUwKxJqrdjDtJB5e7",
  "key36": "5APDto72qrPXgMk8KfKi4FZAREiyg4BwfmoKpSjGykJHu8ELeB6rfU9s9gprkbsXZjKEPWnrx9aG1e5TJsKjnuHe"
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
