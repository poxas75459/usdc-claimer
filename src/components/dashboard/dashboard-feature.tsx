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
    "23cYGwQGkyhPj78p8DvCtY9VPjjLuohnLqsTdgtpgyJCKedWrQx3dtZHdKNm2nKPzEAJFrgH8HE4Mb8D2uxh3Gwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41mUMzNQci2CvoZURpueqKVptkMyfkv3nWncGuU3XgfhMC5pa4hthyKpSJEAFarsC6AUU3JLvcKHTTfsKAuiRM1v",
  "key1": "ey6rM6KQ9zHEijh5icizWDhoPyFRuPxqeR15an4GkAdqHLFHtJJeCqMoS7vP4htxisCFzcV2TNQ3zJBsh2nAKpN",
  "key2": "5CQKywHHSC5fSKd3ntHdQ6CEzfJSBHgG6tUJ4QpLiaBCzfMKuxNRjDaHp3fSfNrbivX263Vv2ok8LCnaLG3AvNtV",
  "key3": "wCnjf8vZcaWSQVRa9fgemuBaXppQT8Yoc1crc6gDPzPR2QSkW9uvLcCVA5WpLPaZUqRcscpUcqCbKffUk6PfKEu",
  "key4": "2Ex2nA4zD7wt9rnP7STnivHEzuxHdrDb9hieKVJQYwdHSZ5oJz65HLvH6FK6fuzPmqx7boEJ1tKSzDEqm2LuaxqR",
  "key5": "C2mZToYwhyjEMZhcxUmyxf7sZ5i4f9uVVCs2QFAr9rtyZeqmjhNuQbj9hvGwjHkjGPGo5MCz1m2vRBLs7fPc4eR",
  "key6": "4wBrKYJgmCFtWrBJogPTGmq2gxN3ustkPRWocjXvxDFdsPswBHTkLAhbSepZ4CqdYFwSZGUCrqYjW9gcuZsghrtG",
  "key7": "VB1CoEQ8AuBoGjQEnDtiDtjaddCWWGRAg6sVHQSm9pWTWco4BuD4sXSjat4krrgixh3BsWPyw2vfCNdgY6Z2LaS",
  "key8": "56TkYaX3Pght9Mppo42AdsaLeqrttrVNR66kZe3XFWRdFzaMAUVD9ko7w6VWA3dhc1KXrhzGAvCHjwsYqSjR3iMn",
  "key9": "4ReG7BsMJT87E4WtFWZXLSyoUmSzYfLEA8DfYrka6FKhP8tGGzad8aH98eUxBfnzV3HKsPYaQwQjXFRou1A64unX",
  "key10": "5NZ4Zjd5exxW8rPPCw5YfmAiwLbCKbMJSYHiT2qXGfK22z2MtTFwDmNJTCGj2hyVPGBQmDCaUinN5xgzibock2uD",
  "key11": "GrZxnz1CeSvuSECkn1WxXQdeoE7PtEUhKnmaVie19TkKqibDFsCmnu6miynq3DdCZgjctZ1TdGYHzkqRpaxBqs3",
  "key12": "5jKFzjkMxZp9CQ5sq4JtAfaMaswpX4MBzsz3hUj94ek2ohhCeyrXdbDcJ1xCWeWWZFQARTHQufdm8VXP7D26NSW9",
  "key13": "5Rc5GXTxjDx2t4BapqVb73aSAYQZKS1bMN3L899n9Zb9JKwN7m5qjs6WzrRX9foC33ovvUr2ZXyCi9qP7SBmz3WM",
  "key14": "3XiebnT5dNtGL9BTf6nN459bDQdWG3Z2TQFR1LK54fzCSpCsQ9QaULsmxDHjCU5gQPnB6eKo28iZ3c8ZkZCQHEF6",
  "key15": "56DZ4ooffUGZ9nokBY8cKWs4kZ9eYDytjuPZ61i6LnhKfW9ebxsH8pbe4utyjid1BWrNrTLjPnosWjekTCU2XBAM",
  "key16": "26mv4ikCMr9jj8wijk3Sbz33W22stDpn1BVVzbMjaGNRJESufLcqRw8yRqkR8oPeZffqB5EbPVDrdwHSsQmWpeTt",
  "key17": "2igh9Yhs9T1N4NgWuJRwef5pkQKXjnW5LDVSLFVtDQerZKzVpV46JZZFCiy3QSaJ57JmWRLSkqtWjXASZhrLcNrs",
  "key18": "2grsBr46AepXvdTwaLRMBK8M4eqWGfoRdQkXTi4tUgQmwxLYBHDVxw41y8s5ryrQnCYWWFeR12qJkVisWCDKMRsU",
  "key19": "35p4mvS7oKbA9fjQq1DuvDLRjsPGASVFrhywam9nGXJHTgR5hcBSP6NB9B3P9XaCs9yJxAtLgnj4ANFt5L3tmywz",
  "key20": "3Hs325pVxn7WBmGez9onqF1bGbhYN24uExYzKorpoTsQU47Jm5oi8Uj6U32GoQLRU1CmV4pm4d6iBAsj6A34xoKc",
  "key21": "5bcKpnwiYeehQvdWdWWHPZoReTTQbQHu8hryzCk9XeW9VHF5SSYhGWYAtNriV1hUgrmU25wD83CU1iGMBepCTy8s",
  "key22": "4hbSDk5vggrM9YSf7MJ2ZsrwgGi9WmHNfkHHwAU9zFNZMTrpMUEtyc1r5urhVPy7Jfj9s1JkUQFjZoBvMAAYDDSa",
  "key23": "37uHqyGnaTZTtLriXfUGPgzs2eTxq8cuynDKuY9dA3Ag9F3Vc4i5nbBGi9f9gXVPPu1C8n2gUyHr2N9AamY3L2U7",
  "key24": "AUTf3JMWtqHRjsc9EpfmyXdRtqH7eF1QV6X8we6ndsSGWg7NLJCbvHQ95jCmEqvm48NkB1g2BEqrbvHNyE2SRz7",
  "key25": "2dUuRcA9J7WxTihXEeYGoVETPoRJS8YAh9McoKErtr5CfKsNcCi6KyHbvp4zAicMpwsk6kgyseDbqpHiSxemNYWF",
  "key26": "2p8zZwp6WhfBmE43xVFjMAGtzW4g6kuhY9oRtv7L6phFGsCgG7eHkZYRuDwMXZ2LVGhKA872HGmZ5gcAnNS7Wc46",
  "key27": "4W8tML3sv15sRncGiXe3mQLBBpP1XJXGFBnrXaipuMc1Jj19Zdkd4tNtZQo96gR1ffH7T1GFVDEmRSoNz7iWNm2J",
  "key28": "59Bg3uVRJtFUBcAjDZNcLweWyQL8SBE54QBeriVeFcW2XRGuvRsVQ1dsUw8Tk3LHioXGv2DZuqzKXeQdzgXSkoXB",
  "key29": "3UrBt1xTuCyexNaxvo3CSUNznHrXpRXVur1Ud9LY7QAnU5G4pEVHCtdG7kzGz5yvjbseMvCRVYsxbNJgLZDZAZKh",
  "key30": "4a2GKBd1ZKM2EfbzPxrGp2GzjfApbBpDTNmdG8JExdvFb9qEcnZD4FfzRhMrsQVJgmLe26CJNCTrVzXH4NM1kVFG",
  "key31": "3V8Jsv5CDf8YQhkNrJ4BDqaCWirTJ91bUtznpFfRDCSp9c9ioP5rCq3RSeJEA3F6UQKjWPn1zTutj3LaSbYi5Cob",
  "key32": "5qTSxndv1T719vov7sFtQRvFLtPQbfpsTJGqKPo1W5JnS5qJe9UMZojQzQrA4ZHdvVdBexALqSq2auSgRMw1fobj",
  "key33": "5FFjkYbBok2ZB5V1JuqFVnF2PH7YsmVcQmG2xpfMUa3W2cFdDa1Wvu8NuY9EG9coe2kjyJGDZPFFqEQJsm1RVX3z",
  "key34": "5a4X6Eq33AXZ92CWyTAMFBFtGf88WNoMzwSQp3gZxFfVT5WYsnfgduEQM3NJc87RQAg8ZL96ebJ6hNQadbJfdWVh",
  "key35": "2jgdk2PrhYa3nGWfmGqz4nn73EdxPnJd3gRZZvCJXRJy8eE6cYQ5sgNWKJs8B6yVCrHyroQrMjE6cWMHg8Topsj1",
  "key36": "5Xjw7qBURAJv1qtLRPLipZASSRNk3EYntmWmF3Ddp4cRVqa9Jk7Ume7A8ZYBXK7Nd4YBBuNRtzgVY8y54B9FxatZ",
  "key37": "2jgvaDCo2dFEzRDfZuazkcSu8NH9fiqo9SE62GDbMgzFCGh8cqUqpVmGoNjFHJQcyrfHi1Uwj7TVHNiqPc6LHfEa",
  "key38": "bbLdfAKa6wkVwk5LBCF8p34tdk18yAEA9d5L9y7Jq5hdKc8HMNDhxgSmzTyheixtdogsiWMjgZTR7jYJJ91rEmB",
  "key39": "3SC3hkJjEERfghjC4FUjML2Lf3e7WsAvj99aGbsDky9BYuo2f7cxdSv8K77x7Wed2Si95NXGSVV51q6PcWyAgs7F",
  "key40": "6HbLas6sedfE5ib9ZsWAkBBF87FZRa6DCP5uoFBUcxVkVnDPAw3u25cEfgGjvhv91cf2zKphcjyhVWFeT48k6wm",
  "key41": "5i3CLspnhTtHrz92rQM96zRdfR5c7RDpMoqNp8dZ8c7sg3koN5mHVzb5JT3m97ckMSKJwVJRL6JhWQZnNdkm6vno",
  "key42": "CCfQUKNvPnjbVhRbxQv8877B1vSs9zDVidxL1yHsebmwEeiuGipGeRC3Q6HbPYGAxDEaJAfvBiGo5aDwqy6jFPN",
  "key43": "4Z3NqdZmiKkhgyvVBeZLxvz8fcedeeFC4WG758LHMsEDFZXPmvBbwxZ7khNyVaFvqX3fCT3KB4jhpye489k9W9mf",
  "key44": "3o8AN7sCaj9AvqdAQb7YccoWxFw8pumWaZ8S6hBGyPHwChiVYNecimvrftFHU89HfrMqri4xxSVMApVp1GFfqqZQ",
  "key45": "5PRxshtPQLuzsKpedyFbaZdkqHPApjxujCnQ3pDVCKJPnsB8fB4bwLzcBFwCUeoxM4Cdpo8Vgi1hemsZFTUPKhsF",
  "key46": "4XHFW45HXyr2iBdASsRL5opxdfh8J7gwkcXB6hM2cM8wCmV8vpCFLL9pKr4HnkBxNU2wXC4jifbcdShQhU4UjMtS",
  "key47": "hyXMj4xkRTBvfAP8o1KZemtyP9z8qSxJfvFF1ZHe5wVKbp88jkHeYqjZ7y6pjsjT66HvkGt5MHE6szs2aSguZB5"
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
