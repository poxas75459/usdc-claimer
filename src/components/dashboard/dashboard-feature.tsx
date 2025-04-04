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
    "5odp4aKvBudDwhc9SH8GWGrZLdRyZJa7C1hX3bJuREEjvHiH4En1ZXL5PYE6rDfuyhzKgq124LZjhTCvdyA28R8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "395dZY75uB1LNxNEbCWU98sspzydrujZWQsV3EWaV1PpVTGCGeRmnBVvHzA4pDPZjtKF7Vsoj1i2CRfupyYzar2h",
  "key1": "2XrmYpowG7pbkDNJtbvZ8tvMv6dBrJUotHFN4Z2eGoJRkUviquKjxEChEiJbnD1aomynPnEmXdqGCJ8yc71gHE3E",
  "key2": "2hJZBnbsxmFCLYqw9M92pvkh5xoWMeJrJruQVbEfYgHA6MUPAdpvfz9s69pkoqWxJ8MCEtAUfEHt92LkoRN7BFpM",
  "key3": "5hMx6GJdj3W9SDQXK4LCrmvDQMFV6UTEdxQN5UWcHsJz4ShaGN4NwuHofEVtm6t4SXSRNXdFkJhCEPwFtiG4WUPf",
  "key4": "4mYq41WKqnbGStwhs4ZR4NCZvdj2ft1S6BunLgXeezLowniGKTMfGydAi3kpu3sCKoCcpY3pg49RNSGQGfCj1L8g",
  "key5": "3i43WjvTehWMQmcjHDNb9f4Ee2zgZVX2RpWzUCHCoiFq29W9pEQgCgFyZSDkKxn8oJEWCd7Q21av9DRb8yjbbETw",
  "key6": "2Xe733RG9kehtogKgftNdkuJWBtgKW1VEutak9BJ4xneqGY96xJKFr5T6cyuRbuFeS1sesdZqDzaTGVTAigwNNxx",
  "key7": "3WbbJSNc9c8sBoQYB17WEurUJeJfp7BhmSh91n6MVstp1S3vKFAyzXwyrryGad3uUsQaJy1cwzCFDKfeUH6iushr",
  "key8": "9RerurYR6hWLxZv6tGRgzb1dtyinBjp49rVsnuQLX3cX6EzbGpahqD6BfGnWSZd9L59Us5dJZrnUsE7Vj4CGNp1",
  "key9": "fh4EERprWgH4XEBt4LMobxcFAwgqZAwbDNYLhMusrE5QiU9KJGbUyabZDTozAeFsWhumTyh4xA8W16GadJ84V4y",
  "key10": "4B4PAXTak7U1F2Aav8yEU4CWg84dqBbUDH6RAnsR7DPtQL3g5pPz7asbzRUq9KvSPwqvxJkdHJAHzTvVbUsKEmUt",
  "key11": "3tGyE89G4Fob8cLg6pZGAMLSFsuZGoDkaYHFRHuuEwmbvqihChJvTM1YYErboUmWRMdEXfzrnyfJKdqs4HUN9WL8",
  "key12": "ZswuQ2cATz52ep1PFWZrjLktD4hkfNJSdf61qmbsoqebCwAVR21dSEBJD9ydfj2xbgBZfj3S899QxAVeiaVRQk9",
  "key13": "cmrpoRxfx6iujdbhHECceVnH9KcJabekXr5NDiBTwzLru2zqQTDJwkxwM4MmwhADR9eQnzXU8i5APpYxmPoR1Zi",
  "key14": "5RExSN2suzAT4vTfPNZxLacKUHcVyvmFbixuNNxJD9oDC8tiJGqSqUDVGruBi9WHq3GYatGjYKLY2U64ou9CiwEC",
  "key15": "4yE78fGAAPm2xbHD21RahTwPVRDEzYSLQ9VT4AKwfRuHFP28P8mpB8MDybntChkUSkna992Yg9JhCvyu9cHEvdgu",
  "key16": "2EyTfm4YqfSCdJaE1y2w5vxFYLfppddeC4gBqxFLwagAsY5cN8Kg5tcYHRHJmNxsc9XTMpuqzU9vuC9WedMJECBE",
  "key17": "49pkVZBsjwTEct1F7BLWZkuNKfgoZNM1ennGRSu5PEjQEny6e8ga8E55xpdEzSgLh3JvdyysuzEaSHRs6rt54JMJ",
  "key18": "47rvRqnzjefGwBMkUt1owKi8dpH7fzaLNrUboHFSc2vbKsdLYereMFYtc3vaM5Br1kZixccnT58SPKpZGFw6uNgD",
  "key19": "41WhF1q4MBUbr1z4pj5PR9EJAtLgwmaTDPPBP8JzfTncWF9PSU6pTCwWUCBEb6Wf9gJmWdx9sTJp7vPbfUukgsVN",
  "key20": "24GgVtuRKqVDR2zTCYNqR56Bn8cm67jXYCKjdByYMg9diRJ3jaxbhEbqkj2hePD48qV2Ltk557MFH4KtSDkStSZH",
  "key21": "2HpXQPjPbhho3hkSjAAAgXu1iH2Fqof5qXkCCvEuKHg58sNYFBwWjEowV47JaHbyfrzoDV9exE9AxvMhK6UUQstB",
  "key22": "3kbfciLpyhDSnPAHGfV7dd2gojk2nZFguq1JMjoiqfKvmdfiiAkAp6cp3Q874gS1cMRZwApHYETmNrkkc4PaCQVi",
  "key23": "dUpw9W4yi4HTyDyBtz7k5EsNA3VYfm9ifJ1QMrJhCmijC8bBkLNJEb7mnMYXkVsceU2nM31pVKDS6ymNC2FFE4q",
  "key24": "ud9VVuuUy7A6MyCS1vdDH7RxfgpPr8RF6tH9KFfkTNcBDP5SspPx3ecGzVEzdUR6CwEtCL5jSkAtU5oeEgVuTFN",
  "key25": "5iEg4ZG6tnX8M3wJWbAiyxfLyU1yagWwhS13ZV6b5PZG4yScVpLm2TYjsknprSfgt4sRFpSjSGzJMcvC8q2x5egk",
  "key26": "518gWX4CX74nScykTdMDuCZxufyDRPCX8fz77funs947zj8uiUETL2QNEz7MFex3q1SHKu4M4ApUoRFaxVENrt3a",
  "key27": "52XFrJhXL1YrYZYa9myvF3Uqi5G3SiLjnm8a15GnMHvPBDzTS3pt3W9by52AvJPLeTuSN8ZpdAYXGsVgguAe1XJr",
  "key28": "3k9uusHeabKjQhMgf1ZmW5qZdwcn5KyHzomwRdaM13UjLxZWVuhtodu12y2V5GUbKqCuNaeSbyncB8jjgkme9TBL",
  "key29": "64qDDSuHTAJZTw48o7BAwL51ZNVgYLPC3HvtVaz2dfjP3p5h5mxksdmSfQ6VmaekJDuvK5421YoKvtVMnG7MMXbP",
  "key30": "5ZscY6j4wAU7aSb4vykiPQ3SnWaxQ9fqAuLb5ZRrjfJbCtHHCqrCGCDHcxwQz3s9GCToHxhempTPhdzmc1d64n7J",
  "key31": "fmQkhKRDsqwV8qUN2kY3nLiQSq7RALwXhPssWjmtbRQ3iNu6X68RP4j1WhCFcu46Er5JVx17XJN7xjNvrxwKnJK"
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
