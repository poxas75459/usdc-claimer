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
    "3No4LT3YU62ZKYruUad3CNtUHSFV64ryv7qDEH1rjgQEkLAFr9WnuykZGUe8Ch6uemVgmhksqDCEUT3ecp7uTweP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61tj88MTb3i3H488GUL7GozpuDL9drVgA2r8pUGietkf1XM3ZRYryNkmgUNMHw6cmBUFBJAwiyQkjgTqzoCKb6sZ",
  "key1": "EBCDcLwd3zTfYZCA5QtYLJf45GPPnmQXEYUB39X35rn5edhY8bXFsR4RtjDcGuLVQSVSZspSFhZm4vcf8YgT5Un",
  "key2": "2qVerGXWuhuyAy6uAnZ31oMkS6gj7H7VYvpJ2DWtxLAtByp4GxUUq9Vj18xLb28qCCTeNc7MUijq3n49Ty2bpdCR",
  "key3": "4EfmTzUrfS645ce9ntNpddZQeGZiAGvhHbTD29eE6habGwZHB32vum1eUagvwuqvbBkmCU44V7osvLMuEMWxJC3d",
  "key4": "2kQRr3mAuRkFovwrCtggBPFqmwY94Ma5RdKvbotF6kcLBsdQWt6CGBpkwERYizegXNgJiLHYD6aGgrgzLoWM2HC5",
  "key5": "3bVZxwxVFsKiBH5WCMt5GAvvQpZrChr1yMThfv6NyooXSKLki9WcFWaGkskZcTgFcw5ugRbEW52aCuVPmr161zGt",
  "key6": "5iPbMtjMLdVsbUTUBiCSjJNDTnrCEZHhuzc3iFpg8YmT6korLVZarnoQw2cGYbkkMmHBezcTRYGB7gZAVxP33uEd",
  "key7": "5E8XUYNH9AZRCAW7jXdBVsH3RaYZK3kRr7s6weTzqUhUNECvVkuEYxNokgr2SvgcNUH7sAeXBt85YMMrGaZtmxU2",
  "key8": "35xFipwxThnGFdPmk3K6PYtyHKkPbTXqMHHgeqaWHn1Lx3tLXKf5CCMyQvySbt7KcfGfZ5yuWXZkTku756jhczyW",
  "key9": "4Q6FkPVUMXLqujYQUGA3oUCYb4fn1894Dh3phMSKCNbZHRaucpxNrDV3jnxBxDTDsgDsPSqt1YMpnetNc2epq3DL",
  "key10": "5iCstB62tWeXHiDzrwGLF8arfVb3bLWtkRM4gP8AjsQnZKntFiqgK2A98A3Qqnhpu9hhVPRuKwdcUaNcDXB5vWDZ",
  "key11": "WhX7axgVvgm7qG7GFXtVcyEQSHhZZqL8XWNH2PBEYVFn4k5AQ8eeAZZcpFQ3USf5tJMb9Vxn68sZmX7wRLmUCzh",
  "key12": "46THkhino9dkfezHZitW5ZtJc1LCArBFMzLFRCPiSy3UJ64NwN2FouxzEY5mUrboMLWjMSCXo7j371oUSZ48wBve",
  "key13": "3fJEMsN9EBoj2mcXN8NhjGDCsuLe6ZXEKYrSvdYLo7CCCqpNfDX4y8BGr64JtV7iVmfhf6ukLHZDZYjpoe68jxL4",
  "key14": "67NbvwuuxXk9PphcejgrKvejuc8pSFP9B6cTasg9sBgHDQsnSJcfcBvzEMYERtemgJNPsJz6MJrWsxCRFX5Pa7L6",
  "key15": "Tqrr9MdwbUHTEcm6MWRxV5ZhYsL7wEwsNA1LTATXU9W8MCrrwafyGPXubf7JM6UmJGMWHSoDbfnahbzxYmQxdmQ",
  "key16": "2zJ12nX4s65caooro2RVRomuzEHZY68V7jnQxMNv2sJfweQDyv3pVt2kdW8BGpJsHmShzArbcUQYPJsCBGTXMk7u",
  "key17": "4JS3VCYZADCH5r5e3zNqZMKEQgDJ4K4TCtsait92ouZqYSJzeBZ2tKLpm1szB2fHoHAvjePEbuHup4FkspH7DV3j",
  "key18": "4s675PNL649V7KWtdWoV6DxCR7yftBVeLqN4y7QZ9wtz1fztXXY7sVXiqVtkJzyXvGZFToCXeTLaRRqugnhQRAjm",
  "key19": "5uT2qEYAUuVQyUdgANXDXjREbUK41bfY86JdKFkDUwzsP1BmtDc9CJYC49BmH9mY6ZScQosTrZ5yXpeZZqzNERAs",
  "key20": "J5Uet2cG6gve661zUKYBHGCBPz5pgCAuXzqgqQPnac7p4Yjs7tNoNfDM4bLoSqNCMTtNUrnQh3GF86kY79Msq2T",
  "key21": "4QQQBAfDWxSerB9r26vEqSHbK8WEfBFU8TFaUKvASubVD1X283gYFJ9AxWgvv8qmVCETzG17khL5AjYmALGvKVhr",
  "key22": "4cEEMZc3URPeTX8sjNSEJNpqsZPqQ1bRVFrt3ukigmLMNPshN5JjpX2b47mFRjnBSYTThbmeR2bCJcekfvCoCyQm",
  "key23": "4fo6pUYnR7KwP6cSy92CHiAC3jqcZNcwZdw3Td7zFYAP5pw8f3pvAgsnZ7TfY53xUNGUWBFKbBLLsb6a3smJCvK3",
  "key24": "3uob5WMVSZiHGtCwQ2ikgUCHpvdR21pjc75Krkj1mAEPGPYc1L7mHJ52KdQu5qWCWHWW3jps6N4LNuaVh1KC2kLb",
  "key25": "4yhLtAgjQYTX3gvopdTg8QmbeXgjp5yV7YbJLNQCXuYnkk5B4FxcZHKTv5ZLJi3PaMDwx1tsae36AC5svNaYVtks",
  "key26": "4Q8RtxZPaNysYJutfS8s2naYGT9CbVLVvNX1Pq3yXjqWwtZh1wG5VvtWEDTUycBs7FpBDLurMXh3fjZSjRd9qLsc",
  "key27": "4y8uQZycx41tdqMitgdLstA54aygFvXZQk3kmHrCdLYmHG6J1fuCAeMSqu1Tq33cfx7AGPboDEWmqqza9UxZavjE",
  "key28": "56GbcVjioEHq49m9VaKS5FiGMnYZJyS8STjr8sBVne36s9SHFzexyW2gHTZDMaUH4xFefjTE2tdsQ8HbcUBaPShU",
  "key29": "25A3Txu9X6KPNJYdzR3vvL9o4KvAnpN2EcDFqcZ6GtrBaMVsJyw1xJe7owY5QUTWPNUaG7HXdeMHWtgisrM78kEi",
  "key30": "4ph67WdKp9QTFz1M6LssgAGb6qyzwSkAFmdAKB4pBKpBGVj6fBa4oZn4ZAG28g8MBohP8aZ6seKvRJdUWEm3h7LH",
  "key31": "qRayXzfTSGYeHLscNjF3iX2cZPwp7yc2odSzwYeVSfxugNBoLSkoa13UfYM1QMtveHy145iCHxk7Y4xoMdkrf2z",
  "key32": "5J2Xnp3CaUEL9AHpGsZZ5Csmuw99HzrwucWpqEuzzQ6BVc7HGstVW9BWitDwTwvNWkZQhpE5o7zkJcYgaRqqRCaL"
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
