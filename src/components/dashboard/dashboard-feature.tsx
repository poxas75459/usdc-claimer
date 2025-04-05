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
    "5PW19Gv6tesV1jr59196GgBGnXKA3jbLZqBSwnjSprGXJ6LY7QbYrw8zZ9pAksHM5cxtSoCehPjX5xNpnzn8ekrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27DFnoDL29mCyezAv2uVFGtTrP4a1cRmqUgaDS6JB7QPMLafksAHXC8adFX9Xe5nnN4nnQ23W9qH8J9ZrWM6fEtj",
  "key1": "5hkRXjnr5gNke1PY6LoorYptVX3jkV7pjFc66EjuB7KoLixjB353XTrrvUVhu5zrDoniM7Cy5Yfz6rHWDarbAVPq",
  "key2": "364GTxBNsxtJrBokYNrx9ENFqKmwqWKiSzStxoNvgAVsZ3RMCfm7NWpS4kgXqALzouimwXELqtsYpW2adp2ED1Qs",
  "key3": "pDtBts6ayqJH3MN4LE7EpZwsTXCQuUW3mVFaoB5G4r45RFLFiUP7D1MJ3c6dcDpuwqCkXq4tGqeLtrQKvbt6pdE",
  "key4": "5WnoR4ErWv82j9VpR2VhVjuARPYVuhbzsCZWd7k6XesgoBPnQxh1wJ4DUSh938EDTn9N3QSnAMZ7bkCdvqxtEz44",
  "key5": "5ppW1nQdNUhHdLiYVer8TdA9eteci4QWCtxM7J8dhouctZgrKVQkFwBnnXB66xKY6XuzTc9X4S1hp94Ztm28xh28",
  "key6": "5HVL7EcJTP4QyHuFLKCLnpa2Jp1jg1A27Ru5oNbth1WuQCkVLpjiTfyrsGsN2Mx6ZUyhPCKsz3eWi88cxkhSJRQ5",
  "key7": "fb1Poki9nC1ZjF3YgX7GDUa4tExfFSf35zfYffTCyP7B7DjqmhsRxqv76QRo21Gj9thSodgMfxTm8bgTHwbNwpt",
  "key8": "3xm6w9UL3564YkkZzVJEpyE8Y5mksq1q4gvXEieigS1qoReJbx62GhxFi5RzA1e3gwcm55SXqD3JQ68BE63dUvYy",
  "key9": "4329Sv7e8b89hxrGYMuRnsi5SogGBK4zsfYSnPnZrcYyDdX6PMXs6AS97xFGoQ3hUHNdsn4buS1yjyXsSmvuWy7x",
  "key10": "L1pQ6SAAo876XFTnwY54nkBGHfrNS8ZCzrAkyJBfuagCtGtqsXTA1aisB2EB3ackCoVXCYNYu9aQocZaHeLaqgQ",
  "key11": "5k6RBPdnJvRfPHEX4dnsP9kxE1PJFmvmzz8zAkHgZz4o9jZdGuttAHZBH3cCsmKy6NvedCYeNVKU5c8FFmvGEEP1",
  "key12": "2Yuz5kLvXGLj6vwUD9UaqbzSj3nKimm9xdt44MoBE3y4iJrqSCdZa57bj1iSjNSHuJh5ELT5CSixmJgTMK5v5oHb",
  "key13": "3boixRyKhQia5T4hpEYKTWasKSLvaqfmzFXiRrsduUqjgFMtF6PZTjrhZ1B5SX8VVarm9A4umtiXbYL2Somw7PXU",
  "key14": "4Zfrd3kiUF5nuKAw6gZHUxWcJee2vTd61QVthZBtXwXxL73Gi3ao4UD8WHfYcJSWMS9C91ZmSJdwErscCKGdJP8U",
  "key15": "4nAD1mNjT5ogPeJrqbq4ZrwU6hy3VmXy1zVtqf57wAjN8t9vj6C8PuZbpPSpB8MkpXz3Wd8pTiADhFXvQQDuph5v",
  "key16": "49hGXHEFEYaydCn8qi4u4XbVArnZ75keZ4yvb4SPnRdpy5bip5iLjK2RGMW1subWQeGEUweM3tC5JiWp6B5nXTNV",
  "key17": "LEovYeuWZQ2LVp37CoZx6av2iJVzdU1cFpCfKK5hUk3KDpDXR1WsMH9LuEeuDhdYq6tDKk88UXVxsELh6EDJrLy",
  "key18": "mi92YgJPCs5kCawGpUw97jzuYs7AUQ5p9KSVND99SUgzBwcnnSTnwovQUEXjHeSLBXusNBSzXvtcTHcqAgE8d2p",
  "key19": "4667RFG9fKdnXHxd3DE4hJTdyR7sECZ6CeNMEyB2CPsFkDzeNGh14eEHeMUbG15pbcen9Peo5EThvY2bZ4WUPN5f",
  "key20": "5XWXjL5PiQYGLWkLrw61TfeeFGLdyNBYHLgPchEefUX4JmneBRgHErm2BAaYWgWFYVBarnd2LyBLdFBWEReZbAsb",
  "key21": "5G48xq4hzY4xN3HftMFkwskz347gmxCi9R87EmEijYZWSp9cDYfkRw7BBrGekmxR2ddvBEKaNnsXkR8QDUnAi8Ef",
  "key22": "31ENdNCnchvv9HtQAQTCARCfZTLWCftywEgQWb68qPetphB1SpiXrocyoFJ4kBDfHfAtLyRWNWU4wALpY1j4zuZg",
  "key23": "397j3f5UhafVZY1CYYvN78uSXBDX2myjbSiKUmtSTywV1UkRJkATfXx1hMBJhfkkVf2fiKkvmRdgFE4US29yGwuA",
  "key24": "PoiDsxSEDrB1rjSRSzLuzjSx4BohKjhiHEQhzTtUaD2hj3BASmErNHJhCrvCr1CNwdy2Tv8uituei9WZjHk8xKm",
  "key25": "38JnJETXY4QHfLf7Vh1rM4WjcisdBFgCTbMRnt1AhuXVyFa8v4JvFJShobqhE4iGkQnMJ4zAidTGN26ASdEMLe9s",
  "key26": "62EwvHeGThR76TVjXLNQbfAP96AL4iJge76rhMHKuJrK6j7wuMSoF8XPCC8yXN7H4sqf177vQbW6CJYaZuH3tPUr",
  "key27": "323ntxyHJxhrPuQSS56qg25uVNB9Fk5mTR2WCHzRYHu9ESk8usGTBQKYXyi86jf4CqbyxuwzHyPRrNYxZZjTtbKh",
  "key28": "4FN3XK4K7LPjiujdMQuxSEGVcBiVzLBuS2SWMoWxXshGL3JR6x58y55vZY6zN6NBGo4iAkVunC9QGp3s66VZgBMR",
  "key29": "2ZoBi8CcRGp3ExMjdBr9PCBz7bwSr95GhHuVRoziZYymb56bk7rXUoaq7TXMgi83HitSSVBLfTbLbMctnBsG2NRc",
  "key30": "49T98oQLpNkrbFPShM2Unusha72D3SmBNFhxe8823xqBfg1vpLM6cTYbm81VVyvKAe8EUP22Bmis4EL5HEKimBDQ",
  "key31": "439EhkLYsUF6cnh7zkyMWNRRR8SdPkMLw3i1HX6SzKJMECmQMNoBKV6DdSGbBRn6AE7PLPrapdavf4ZU8B3i2N6g",
  "key32": "f24ZttWpfSwLT23UPvtWdvMVhRuvwWrTX28meob6WQaPm91shLo26BSh5mfZA7eFSpxT3VW3zta1yzHD2DPbDc4",
  "key33": "ShNe7YBqcFXd7sQj4AxiibELiAu5qqPUEv8fqmYwaqqoiSqXoJsWLMbkzrzx8sRCwMEdpVxsg6fYGPEgQhL5pwS",
  "key34": "4G2G4jDdatJa74NGjR9Jf1YEr4G8ZmtSW8z13nv2KmBfncQQH2surv2LdKNRuHxGUEqANgveyjVCDLTJaUQs8ZuW",
  "key35": "5fJn1Cp6khp67Abz9jCDU9wk7MUYvL7PH2Lbrs2x7dYv9Y7185E2BxH8xZ5i5VRnKu9yNLaVChQ98jUDmmcMDyv6",
  "key36": "4FNuF6T6AWe8eYw27EiG5m1gAeHwVprHuMwZrvDtEkeZYbFydUPqxhQno93qsUM4KHvDNYBt6164TszHsHN93Qge",
  "key37": "hkmCLWvHqt3B39iWmeiwsySULmoQTfUwjFtXLGq4dvKaFUBABpqn3gBjND8KhLHuxPbfkpRzUFuAe6pZP4GRkCV",
  "key38": "4T9FQYt6D3Lo7xME8ZJbwDXVgvKsN3GvRMjsByQMwR3VkDE2RR3fVHf4hn4wVf8588nqcmNjsz8zpdpMuUCerq3X",
  "key39": "4poNyJYrPrs6HFG2XxKwME7GBh35zCdkafSGo37NdbWdJJ72SZa6BrU6YKJgdm3Jo7nThg7ZgJmURkQdRZRqKB7z",
  "key40": "SeWiXdz4RYKh2REJTWZWbkcapiCu8Z5MwbJX7MTREGqM1EKHA3vafxvYzk9G1ds83SaxFyByBPE9r7YLTtiXX3E",
  "key41": "5CHau9ze4D6aacxpXyJw3Dv8XwbS7UFQ4nKQwMhQQFH1Vc4dtmezjJvVPv4DQoRTohrTV8Z8YrqB57G2uR6yKVmc",
  "key42": "4dGocHPNXriaecsSwnY8LV1rHXKyFCmQyRZhpSxauHrWmEHf4bQUSuungNmFL9kSQcnfCjhKy6KkV1fE33iTGgjL",
  "key43": "3g4XeJARmjTaqQKRMbmE225DWmnmt9FWuE8KXcG8MmobDB7p4skAM5yByZEJFf6hnixRAxMMhde8arXMrqBSq7Lr"
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
