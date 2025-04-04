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
    "4GWm2jogUvQKL3Qm8r8zGkfCsC71rjrwrFwrYyf8h7o3FusGufWL1o6KkruVNigtxmRzufM9wTCqFZZxZY6F2Wit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67iVMBwABrnrcz5wQeQZM3AWcnkBpTAn8oryWG3rxwQc7ufXhx8brQckvam3V6Wh8cfDZU9VLimYhyCUpS8iUG3J",
  "key1": "J1sRucghcPck629WxQYeTAV1RiJVu2K89qkSCeKVaNrcZC51uC9EDKgu6LrMGZzKGXxFqsKJRMErasz7AGqDLYY",
  "key2": "Y37UuXruLADkZ1q8G5aXpDiHmCd8UciG6CbhdUMAAx3Lz5GGCqesS8tdKJ268AFPMRxACmip2ZReN3vKR9jPiEy",
  "key3": "4cM7n2NqVFGJQbbrBvabktgHpqPDmnyeH2AB1McgHju3KTt7Y1nHyu3RtAvJBhsyQKcMruTPxoCxsH22f11o2Ugs",
  "key4": "3JcEU21LmnckstEMJsZnfbYkuV32SLyAXCAq5pBsUyvU5go1sDrxCtZPxqqVPqmD6qt2N2n1LnP2TzcwmMsTuEdr",
  "key5": "5PqvbE4QxP1m3FiFdCQQVCWoVwq4CYc3PeVJLudx8tXg1YhBHLzPeA1wtwjyjS4yDrSGMr96LWdPkLmUwnDiurLr",
  "key6": "5MJEquCedKtfK3fFsWsvQ8ipZhVAqm1aVtf5dE1XW9Wybw2m5kegohFiQ7tqpTcyZbsTVWEdwkCnvV2z95izR3xi",
  "key7": "5tpgC1vedx7tLXdskeP1if6wq87CxnuvEbFYTAtnYR35vTwDBHo2vwDZS2WyG4psQeXAXcBafCtiup7NQ5NmSC5a",
  "key8": "a3qDqnfzqso6C7dLXiKU2HiKmr9LXoKUeLfwboPchAeQu5nNZYahsLWV34cc7tzLULG66sAeB7hcKwNMdZtivAD",
  "key9": "5DSquAeRwrP993tQjrpDMeDHXzCrWsipLRA7g8NUKD4zcSXNP2EgkLJ8g64muWSfvizexqeTuQ4krW9xQRTvFTsa",
  "key10": "jNyhQzE1pLrJwP8D1ArZbAt3WMw6NobGCSNGJPYke86sWKUmH8ZvtL2Aaqssv5AhyzA5JBjqdyP7iK9xk1a3iUX",
  "key11": "5QfZB1m897SxRznXhEHSDJVXP7cpK9vu4WZUaTa2ZmRmDwpWe29erRhXo1LLVB7b6L5DHCwXypk58hmjFoP6eyEr",
  "key12": "c8HKqBbRerf7aVontNwDCh8fyx1bZr5nupEPmFBNChjfLwGFLoReSRhLexpAhsotxpVjB9rgzxtge3X9XspUsJt",
  "key13": "4oPs6WQkM9wT5G6LSXfc2uLG1HKddGLTeKnqeQ3FT2JpQvESYzvDoER4DpQhLNRv1Z19PRGPDqbHnH6KAiaWNHzi",
  "key14": "4frYeNopiT6XhQxYKgRy7kzThs5XuuXynbnhhCSKKTVskT38GP7xhiF3yHKiHyky1hpFGqaQHCLeeDvMphJsedup",
  "key15": "2QQnBxyZtAutWZeFg6TVVfcVSazkn4yq6ZWPBYDZvP6u1B1aTibE9cH4Bg7vhbS3PfDTJjwhyMgTWis4u5odjpNr",
  "key16": "F6zsrFgHsabhYeEb2khbQFucXE8voPzH91a74kccTQpiJ1KoLdUYBjKc3mdP8HGSHYMh23V71QNC97PxNJ2ykED",
  "key17": "5BnQtCmbiCv1up7bbCfpqNJbKxyVUSmqFrFazgtwMHaev1FkuJhaNxtKyaVz75qN7Nab1NkWLPrpmfFLzq9ZMvME",
  "key18": "4iHVQTCd6phu2zdD3ed1jn8hsKYJMvxsxFS1uwAWu7HkSBpUsWUTWiJz6cLQhz9cWrg7CSqdFvC99mNUF7P2ktjT",
  "key19": "4Ya5p55N7QG7u6d91A4jPPxDhvnangeqEjBfmYt57nHsCsnKLr9oW3LLiuYvXUj2x1PdBBoTP2j8FNZ3ixZR7hxD",
  "key20": "2kv1hNpAhFFREsCkM3YL9J7DGrmNAGXujzpDU32wVR5gwY3ZcCyQ3G4WriR4kpQ7FEJR32ZsYqeLfiv1xpuxxeVT",
  "key21": "38CZmeEaazAksMcaCh6o6NhySL4un8Nrt2Quu5MwDgDTeRgS7seyzZ7dnHPW6LdmwUzWp6Xq2noqekUmVk5e4HjM",
  "key22": "47f8eFG2fRjddMQHva7xindEbEdix5iSTWLvwXNwS2tADhKAxRpWPRUvzVSkCZTGjffL9SjzA6k9irm6yEEgizW3",
  "key23": "61xUDc97CWHiVqC8RKeyvApm7NWyfREwhZYCJopnGLohbAubgFEBxYNocJ2zkNeK6wQwzsDgSP1fZ6XyurihAYjR",
  "key24": "3Z24j4LjPzcc5D7iiheX82CCTJqDy6e6bXDH3BWSA2njGy18iTFeN9tUiYjzkPTFDS4ZLDA4NXjfyvuYPj83hz4B",
  "key25": "5WdztToksGCW5F2xDq46nVKjfzCo4KMB8SRvA87ACKuSYX6Z1xQepAZB1D9zAqXyjgJymzJetDWvDFzi2A6TWzZi",
  "key26": "5ycrVgbzmKPGnkrpYUmxnKCgwZNrqQhCE2fBr28zZ1H7c4rsdTQnH2Uhn4yGH3bZXP54XBjda8AAi4ELM2qsx4dT",
  "key27": "4mVQkBnXNWTD6Pm4ti9XYTEXcntrQBBpDkzQtqPybNUyo4BtG8bCtQ8eMqVBC5SKHSsXsXVpp9aTZSVTHdvj47D8",
  "key28": "gB6gk49dsyj6wdoMMEpdtjsEg1c8fgaaNBrnxZJUV2GMotpZZSDGjL68uuGF6GgEh6PtmKfRst47rw5aBHGyS3R",
  "key29": "2AUt51VDsoei6xe4wWxenGZaCYbjVsbkETXggHUHTjNj5tx6BQC2AwkVUcxvNv4u3hwjQxWiP9wfugSFSnB5E7Ng",
  "key30": "39cHdNa6UwQCLg7qNxYUx3ARFrKLvbh72R1Me8DTyBNEfd7exdEVfLdXUzMxTfT1fqLuBcTir2fjwXpLqmxh6a1g",
  "key31": "3jQ1m1sdMB48oFkiEURxTgKkfShvubyzUzKkWYKmuP7xv5HDcgsZVdPBGE452UFDdbTZR4YAgsYkPxQE5y3xb9Bh",
  "key32": "5Pm12Y6BCBD8UkAc7MzQTzyw2pfYqzfsdvZhaRZ8eKEMWo5upWawiCubHGExHz5uXmgNGhXBvW6cRmUoHFyCgjmd",
  "key33": "4RDh8oUa2oN8YauHr1oSQrbibt74mucGPdJ9U2eWML5QiF8EP1vwsxyAqdPsBEyCWnk5NzJ8pWJHDsG8y1SqcpsJ",
  "key34": "fDA3pHoxPTZrGQSLPTEFeg7YDSSJkp6is7tnMWJafZwdZC2dUsEoueJ1nMFHDNc8ZudnycZUUp1GUq2cQMBQz7o",
  "key35": "5stYris4nVP6K52ZozPCJ7EW3VCnf3vbkntgE1xpLdFwpNzDDy7tAmwA34cwENqKAbwaoUsA29Z6KPCWyShSGDVj",
  "key36": "62vfmAF6AVZcMnGnkap9c6wKUwNJvnAkBZrSNAhaHFphbpjawTd5z6exKEaQSqaR1mfANFvNU54ZXxNhAsUMyiRk"
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
