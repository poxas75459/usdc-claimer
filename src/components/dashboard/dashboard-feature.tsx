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
    "3FfQEqpnWNgrmLyPTRVxxZT1Zs43BYLJeoC8DMSG4Ad95HqScHKtZufJ1QDq5SexeiEs566DbmmMfGSRLYYBFLVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y3B6Eyp7wtwdYiSY4XjG4arrY6TtD1DYiJpcdLxtvdujeLThf4gZ3dgDxdZJwkoC5qkqUc9xjVsatKMvy6BnvYN",
  "key1": "2dPYkkKgmApiP5TbvqSarsVs7zmB9peKbo2Wb2zrsdXPZQAgdX9J5Xuw1JVam1yWLydBBHzCMyUSpGcV9okSzKGF",
  "key2": "4zA4ohJVVWQk82VedLKQVo7Xf8TjysoS3YB6R3bAJQ1zUX7fakHB7V5h5WLQnBJZMMa5F31s3whGmDtV6nuiNzLU",
  "key3": "4wAommtTawj9sQArko1LfTT8jh6kzPNEhf6rmztVwmdEPS7KGfFXqRDRSff6MMAM4AZ8CRLnft73t8eiTewxk86v",
  "key4": "3Mg1F39PBFX1aXKrxPTN3L3rhAexAU4M8qJ7S8MteW3XWgjNL5TwtRoGRqeR6vurUKyM1czt6jzyErjYLqfXYT3B",
  "key5": "4Ddqb6hpoD3MQD3eAF754qEsFbpVthtc6skXW29uHhXjaCu63o5s4fhi84Z5MWABXJd9KKuPbu6uarmDZ8wF6iRR",
  "key6": "1M7R7Bxv3mfUiXRFn2DxPgP8eFAdwQf9MRv1mCMryr98kJsuAknNBzSqJLYPbQx6sACGj469uJJrezrScJhCpo5",
  "key7": "5M9FfxpkKq1rBScT7p7ii9qTG74fSiKgdbmQL9PGF76wfeVfJZqZ6KbaQGhdCGBLFf52ESPiYcZSK3FCYDvKf12Z",
  "key8": "3UdYNhXqXvaaEawDXbC6VQyYv5aPDsxvKAsxvQhFJC7CWCpENCvF7GhN6ixyvhJNY2mWm1z5ebPjFQrquPVNAJ6s",
  "key9": "4R5MtSAdzFQK765hoE4nAcNFh7vMPPbYZp2kmiLfoamLQxuyzBYMZcbYoGvL1ohNEy8ub6zZoFdnQ93ZsyEgPy3V",
  "key10": "W4XNY7UScwom8x6k35qwrdso8H5sK3zbzPjSQ8RxfkTfvFPqChHASwUAcAXdv4MJ7hxfeGuHr9Xcsrpjo2QewDv",
  "key11": "2qjj1Mx3Qfo7NCchd9j2NgEWjFDSjbVnjnH2jrAK96CoACYagp9pbQ4nDNEAzzhtqo79VpUypYnnMMuZneJQ2K4N",
  "key12": "4gxdsqT555StvvFii1y8RsU71bhDzuw3Tj6n7u89G5iLjF4Kr9QoN4x4YitC4UgK2dHRFZzu79Ej7BnszD5fRst4",
  "key13": "5TvxFrcLYpTvfqfm4z68a2oqAfKqvLsgDpbeiChMt5N8g21y1DkCJML727XuLQet7DhWH7DKQyBx8KWoS9wMsvUf",
  "key14": "5pMBD4UvCS1nCofW33RXuTHBUZN8FrPW2hCTKcDBa7G46tx8rug131eQKLvQTqX3456xVXsX86RuYRfJFhrLja4q",
  "key15": "2s8RZfCRG2s7nvyiYKTCzhJLybYZ7kKACAoH4QNiuq5f314y71EqL192sk8vtnsqh23WB8DLs5xiqHsz1RvLNUsT",
  "key16": "4KSXQcLFpuPu6gj6DS1GecfwUpxwabhkymwrwmxwgpEqobArzrLhyNUM4CKRcQCRcyTeiRrY9A67QJbwfZhS3dhH",
  "key17": "3EiSzakbq3aqdf17sWSRyg6AfnAN8gk1JU4NdoMWd6cprirN9VgYv6agGcr84B6bSc6UJL5nk7358ZeKLu5tE15p",
  "key18": "5AaebZJyGMdhjKW3CQ64amvQ2eQtFxv6PhwMovjLBbA36WnMooVtGq52nLRLiChAx56QaTJr8txye8KXT7ZCvFic",
  "key19": "4TicwUEqwTi6qYEk8FL1Yd4hN7WEY81EwctkwcwGRyzryACC5HDraP2Tcaxyx2BgSGDKbHyspoBEpkN7KG6J8nUh",
  "key20": "3LqJnUxRBVSTzyPrVhK6Ro2uJ3RwsyninSYzBUfA1ZYuxjnUqckoj6ZUC6ki9CG6fLjQ7jBV3Y7ePpqBQMSruaE7",
  "key21": "4J6BUUpFBjtEiBRARZYydDSNJ9gdqbeamt4MChAZyAQmc8ohYgFRDsLKxuWTV6Uk5e92pADcRxm6jynLtkben7t9",
  "key22": "2NwB9TLrhRaozpLP2h63zwJBFZQg1vvvU4xqtz4WB8RWnTbvSovkCys3U2Cz4ahKY8qGCvzNaxvem6xEFy21EhbR",
  "key23": "2By498cqKavomK2gyVUXLbBFFELKEJp9kQVjpnByNLU7nKiPnsmmixumSYYDgGExpDKZWGwh8BaPgDxwgdE74SMh",
  "key24": "4EwWS7MJ33jtQT4L62gdysZKUEpaWFdWoMVeQDwMd8wUYsJnW2dax2RqnVchzrRPVHu18nGjzRPbnhy5zFy8f3MM",
  "key25": "TmWhxYtGHnVxKauRDJpLFrEMVd2D7oxwoDsnbjEcxgNVTMckw3EPoMdeRTh5Bb5c2xFXQLhg1qHbZCW3dYN8wZV",
  "key26": "5Kxymotr3uwfa2Yib6zVBopCZJMofk8PPMpXXH9TMuVF6VYCQ44hVqUvJ5WXLvx7AD1KXfUxmPDusFXGGXg1pctB",
  "key27": "4uR1SNMW52Mra2LUhUqunoghNQLzkmSmRd9gEALp3U5QLvojow1egWJpX1ukebFPTd4hVDAScakNVttNFqis1MLj",
  "key28": "4DU7Htfpr7vBm5UV8tenw1Sp35zQLQW7txEby4VBCgtb3qgG5ZEPb1uoAhHRLaFhNWcMGJpmrbeRU9NLrxYiJKM1",
  "key29": "5TH1cZyeAyjE1KVdkvor9kLTpArRV5bffEuayLuERd57nfhaGgQe33qtriQefcYLivMnsDn2qCacpW6q5tfGkuc6",
  "key30": "ybKQP6zW8zkjpy23LCUr8L8suS3f9spjukTxTB3yncVpVJZDaHUmDKdCXoC7wD1wQoWxXFxZi5PV16s53qAVfk2",
  "key31": "2LHRxQS7PWnngLAVe1xAHi4CpSJTdpjcvszAyPQ3DkaScBmeeNqLUDV48LWMMqoVPihyyK1qnpfDhCku5WvF4dvA",
  "key32": "2wfrCgUzjonxfsFjvQdXcwx1Q1C7mbhtdk6Hzp2EY7EQDfTaJmZPxLSr8R38eL3UtWbXcHgd62gEjt4bdATohpDX",
  "key33": "5Emac1qGubqk3NXesYaVeeZn61Ke4HP8AYJze46j7nkD4ZvZCpXei3M7C97ii1X2nca1R2SrkTkTCBHntQUwFneX",
  "key34": "2zELamb6PuAeduAbuPSAzwHtsubRN26XZDHso9KrWnGw9V3hqqaZtuMHrso7CS6wd3xbLcozJXjNJqoEJujCxXD5",
  "key35": "oaAjgB4XN8Sd8ABJqHJgWX4GWScFGhaBAr2LnDAHrPbRLiuiWKwNS29D8rvHS4fQwUFgGG3gTazgGyYpAS5Hjfg",
  "key36": "2hsk2V9S2Fj5yfautWnEnus1b75faYoRB7zRguNHRzw7Q4iehS2fA7xW6WihYndzGX4vUPXnWBNQbvXeMThpmgwi",
  "key37": "1eLnAQpStpVLja2ACoZXrEKbSqe65AjoPiuWZSykiFQKKY7LXhDmCGScCyWkLrYJRVaH6u6yzZZPXqadQWU1mkZ",
  "key38": "HMcY4LF3jawtbHhsUe2HYPbxDmapYZnGqSrF8sRexmAxZR9hZce9mQt4TPDWUrrvSN6K6EPsYa4SEMPPaZeMYgL",
  "key39": "42UDohvqZwJtubPMg5gADLuNfkR3RLLxezCo8G4rpS7RRqhVmAuVP6QNdioq2rQVsmJ7x2yaSq43Toq8bBtdRPP7",
  "key40": "tvChG7HsGdxYMbXf2xGa2hKpWG554EtdYSjiSiP6TpWCTKF25JvxyJMUy5NqK5dk219R5MW7FEHra79DMWL1vCV",
  "key41": "4fAYkFRxxxak8iJy65qmE1HzxXJF98mAn3RVYgNekjYbaTd1WMw5Nn61FQnhSAKVE4nbeF4dFc8eKniFJUEmqgYm",
  "key42": "627T143KRCJgTFFPZG6NBpMX6ekRo7K2PTzPsQ5UXdmDyvK1pg2vhEBq2ujjrjnmzwELbDnHGd5LZtw4VoquTL1h",
  "key43": "3Sx1egdGCprtGP8YUftNqX2qo2Fq8xMiHWHwuMtS5GgAwPt3rQtb3XZA3JRrKCrn8fYHkhTidegGhUQNcBRS7UUM"
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
