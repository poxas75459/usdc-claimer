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
    "pRx7pQM6dw5kDpYroBaWoBTXPerYGReBKfFse68y8jdWqwQzm8PgCMSMTwJZaDhAhgJDL3xZuEdNgSbCAHgyM8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "224Aq4THBeLwiNZEGt4uB69Df9x5umN28J9PQ4Uy1G3g4KEKujntCzVXHmZucQaX4yknTLXfHWgSKUD69pPrqeyR",
  "key1": "5FHXW1RLUHJ96PNGmTxuTeb5BDASM671uk2g4jGCmUrhU699RQaxwnUUcv3rSMDmL1hRAe2RmM9b1u619WhEoy3c",
  "key2": "2YLvmyqfdGP5dUXtN6q3hzHY1K4QLuEYZXYcwx9GqV1Viiy4TAz7kv97Edib6qoDRYHt6HnJ2cSCp2EgUC2wQ8fb",
  "key3": "2qWFJq41CsAvB5izcNfW5hYKKUTuZWftc34fD5JAPgL53nsfeGrocJWmPpMJbykFo8MVtC2zBr1HGCQ4TYufnZ9w",
  "key4": "3d4atJ4sUCJRDF49KkuNeXAX5rg1yUXkrbogE2hya48CkM1zw8UhVzw3HLCXxdbHdKfGTPbHeXWvRMuRFFm41MXt",
  "key5": "3MhQ1iWfSU8pBvEjRvj3prop2HbjesonTvrYRGtR2uCzsWhXgftLqWKnZyQCZMoYDn1Zsy69khMdLgAsF5zVj2rs",
  "key6": "4gCjuhUA5c2X4Xt3R9t8WXeKiD9FBUHRd2duyTcXHKZ4eUnHCeA4Y8CqSxNa44K3WPw3ickoCnBndRrwfTvWb3aM",
  "key7": "5q13StNUTwP6irCKmCpJ2PaLSmyPVv8DV7AQ2dQTXBZY8WfjJvDB43k6yJiLBaFAeHPkEASbNPhQYH5W5BupNhVx",
  "key8": "5gkxdVoGqitnjrAbGJpArxFrHWKcCjZsxguz7qRiKpasLYztPWYfFzhEgojmY3LoYTF2exiBBgGAjr4GH13WLTc2",
  "key9": "5a8P5VNhJdLAkREfTUE7f2jQJnsauhy5tCn9RaB2bVAyRmxAsn3zS9Hz75KdQqyxQ2TBSap4k8bezhxDwYz3KvUD",
  "key10": "4pohH2mMUQWJa82a5HqV54WyvNvySoq6sJt2LLAWjFzw1J1J4gJv5uTFyBRVvBwWRztAHeh3AF3GSZzMNzixBkm2",
  "key11": "2ZHyVS23owb35KqprbSReCAuWruV4oKyiMB49RX7VUTJ1EfZraGVkn95fiA29B5EdseBjD1sGBWhCwnsGqZW6t7v",
  "key12": "5bbjq4DTZyaf5xiFZmDGRg2YUUYKBnA1V3xZHUP6PbckXadi7Uzdju1nv1hW2cexgJJaNPEMxo5hiiJ7ZN3JFPFU",
  "key13": "5b1ojNQ3wsdTucNhXuFZRYaUYjQeXGfjbW3AuCuvxLmibmLBnoPZtECy6NBzJa366MjChkHS9YvSJxQTFSjeYTgE",
  "key14": "3npU5FLpe8TYedW8DDJkmZw4P9yd1NXuFXCwRHimTEx3DqFimDkYB8vX2oxhujKQrQgWY14uNB4eBUx96S5VPEHj",
  "key15": "3pjeyGWjwF2eyuSvUERcg8gDY6A1cM491knGNmacLF1v24EjMwPQJ47Fj3dF1FdSBY7moZd4KWHYvP5i5SEkGgJV",
  "key16": "N87YmTnEYnEsJuArwC8WMyafYDcs8hcH5Rr89EAuQaGPfEzuSvSUYNN84ZHGD6jfmyGAKnvpDxjWefd4usa9Aoy",
  "key17": "4A937BwjJ82DAQCux3V3Gx4BVF7xdVTLPA9FYoFUYFoXgv2G1irsMAwxUARoNSjgAeZvVxRiqd8DmfYgDGfUSRhk",
  "key18": "57JnNKLYWGQDp2iupAmz6EvGK6YAj88d2JHg1M6deeCwc6rCmpo5REH3pxP825QwJEL4RBu6p8qu1aNjVPtx3sHR",
  "key19": "3BV3C9Nbsqu5W6iUi1mbjX9CBD3GPkccxb9vDZAFDV9MNY92QSppfoUphTd3rK6MEatBxzgTv1DCHqk811dD3AAi",
  "key20": "5oMqLAZz61twS2jXomvyVTUCVi14Fe9BPGaALLExnXB23tStdkbAufKV2U8dSucJHLEqS9UG7u8dHS2xFDgYXeQ7",
  "key21": "Se9i5S5yBCjHpJykwxd5HJqD43JFdtgE4hWif8ToCYfeNeQApe1mSmrWAeBTbYLjpsQdFJAqcE2j2WvkBaRbALX",
  "key22": "xQkAMWUGToPZDpDSxdZApxV6LHYde4SWeP13acCMEJqoqQvRXFx8qzT3zm7frNHC4Ymuc9qvF9EwJpAnF5GFP5m",
  "key23": "2EXtr2sanNhFKy1wKDUKjezzNin9RGvPej2anQR3TekeuGHJhwYFp8AKbVcSmb2dR2f8ZfWTkALZPJVJ8LmxnWn6",
  "key24": "54acjRKyNkwokXL73oHeHEMFKDxjnKV1Jdzu2HepkAVQJzrtUDRPviGwoKWWfkG9y4gB5yfHjQZPUA6jBiCMvtah",
  "key25": "5eFz28WwR3WK7pSmbi7RFrfkuPjxNdkq5nu2iMRiDTHnrZFfmZr87zX1q6gZQnYhM2DTvAMEzYYismeUNLpQqGv7",
  "key26": "4FKbKKVjCVuaCbcAQYBcmWVGkyc6mkxztBfiW67wavAnE3P2esCaW9iiRuxcZHbbhYgE4KnYRTGCbTiSHAPmXpkD",
  "key27": "4nuuYBRdj8r16DwUNhop72NUkzpPGCQiNdqyWVkinuoYCtznC9k6iZ4sqBWiKGCYifx86QG5hHi9mffQFnLUAeEc",
  "key28": "279VJMG9fTFZkjcRPai1uDG6rqr1qjUQcQgZj1eAGJeZ6szvTUbtxCmgdcYxQWMJ7SxrF7H36LC6XDgciMQugcym",
  "key29": "5tqxiAC7qTsTPJEjU8gVGSF64HKz5ViTPqWnRAk6H9x5SieebPQBTtFkBKcqqZjbfLosJ361kST3NaJ4tEvx2KcD",
  "key30": "3L4gXzVgy6Kab2qTDWnceG357o5ZnrC2TvSkB9y2x4H6TshMwZG9SnoxizfHthDC1GhHTkrvV3SQDnJyE75shPb",
  "key31": "5MGpzk2qXdTA5uppEQxsv82sswcGQpsei4HcL9ZnQCWmqbYxXySXPgj1oS5D1SbJ9vFaeeMTihZjryq218BRSf5i",
  "key32": "2KJ2qKfFR2XnR1RD5v7wP1qkW55c263Y6vNE29gD6T8EP7c4T9gGKYvvWRVYF9ZjLJFxAji4Jqu7upQQ8wJfmuG5",
  "key33": "3HWh1mzbQUPMsRDeZdAsBsCmVGXwXYtRUPrnN7EccN7tVDx5Aqex5qBKGdPyvnwbQXa4SQDadoa174WXegaKPpgD",
  "key34": "2T7Y2m5bBporvsjbwjejh6AGQuXZ2JwUU46RYKj4zX3z1K7qypvvqudLTDYwaEAqJithDw6jZt9XJs2Nqh5XLeWH",
  "key35": "3yNcdTnGb9KTZoeL8pKs3qgShcbVCvjGZVphBPdLTDjoZqb4yac8qF1bFx4Q8o4CmisDRDvonQCaxKagjGEMQKnz",
  "key36": "2sdVzKbgWmoktsjgCBYK2FwLYZjuf9AaZwaakPJHRJR81jajv3Cwu3GjE9qhnCsbWxk8HJnLwX1xNfD5kvCY5K27",
  "key37": "tHiPL6Nvovx5X1aUhPwfBV8bn2jCA9HWL63u9wFdJjLd6rsSv7bfvH93VR1gdPf8JDmfEK7pr2ZNKaPgSumF5Nj",
  "key38": "2jBwmTWMtsTXdrjnJfbxAfm87bFXQ4Bgz4fkJrBNo4oGJfzVW3jkiYMdgRujWiRGCvYWQS3cydmiiWDXMXGCJCLg",
  "key39": "4ABLLfB4idqypJy5SKxuqeoBrcFUyUHWz7jgtvCTqoqBXqh7raxZFZnHJ2YxHgqYZMGX3z5txGYfg8pWEC38ZsUM",
  "key40": "y12HT3PzHfgjjN4Uq8EoWyFcF9x5EPrGCXe87bmQaS4uFtjukJp7RHrFVnGAg4iaWGUAGbwtAXrosfz7dUPx3W2",
  "key41": "3ntyniJQjLkjamrSbsHWQgwr3pUjWnA19ac5gDyuPknfLFMjyMnAbtDZQ6o8ijiTf4zvf1hmUB22X1yDPcppDdW8",
  "key42": "MKXWrQqmneVDcykeqaQZ1RuNMJxZLTiq7CoZP483ogdL2TUuktED9X1ms4And67mzcr8yJw2pLH3G5diSPhg2rL",
  "key43": "5jk4NvEPYznSFMANhSMmZff5WFh1xNFZDioA424ApSPtcx82gbK99NMFoAJf2BdzLTA6QcVwrAJJoo1oSjV3SNJb",
  "key44": "NDxjNAfZZiqfPdu8pSd4PwYAfPsLdwhAzLKo3KhhoNzv4rsSG3y2dK9d7avDtwX81UUY3b8myiSPTjJCna3Ubiy",
  "key45": "5vj7HrZU9y9Hyfoz9uqC1pZA9UFgH7Px832y7dn5xE9STXygsmabzdFK7vDQjfvzLfHskD2hYr4DxSseqs2Fm75Q",
  "key46": "2cjqmsAhNQdxvVwcRThwSBHHY1ZnoTeNFe8AfEUoPj6HPwWjgcK9dFfpdnyDtaZKFGxWeBPn1KBAm7XZCfQ2X5dt"
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
