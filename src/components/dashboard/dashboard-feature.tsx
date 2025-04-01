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
    "2PMTVYpVwn7Ti3CsBWsjBt1bqQC6GS8oxQfP9ms3jaAvsF7DGtkJgo3dnpFVV2mb1VYDVs4V28Rea4b8xkA6n77H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5htHGn6prekcB1h48MBPCaFEtu2uxwx3TFeHJ7E45PiJFqV1TaYnGZnKJkt8jL6PduWUUrm851qWvwzr4P3HB2C1",
  "key1": "3KJz1Jg4R3mXAP1v7zPPBedQ8Epq8LUUJ7RfpXv1yW6ZUoUe6uXiZMN8YmRuEcmhkXTpc2KymfgP4V3XwCtcdjRQ",
  "key2": "5vss6kzXT9tHQnD73xJor6W44E8CRYuoQW6rP1uw16Cc7aHbM1c78yeQgHx6bvXrJV5T7B5KRor1BsaYdCTUAVND",
  "key3": "3yUoU987dLXrzUusnc8CxnDA9bLJB4pNDkvesKEz28nX3iu3D7iiTkHxudqdCn9PbB11gEfX148dvPH7VTHe37Ju",
  "key4": "Bkc2fVfwxaz4TeyoTf9M87pRUsKxwz9YBLBMSSyBc1LxThCbX5wiWP9RLMmM59BwQ1uaP6iP2gYPBrmdrymXfdD",
  "key5": "5dAfzegY6UzvzBZD78tUTHBfmSFi5LLf5QNP6fUHJvpF1X7f8S81gWyFPnUWvG3TzK9tmeTkJUbFyaZEDnoz8qSP",
  "key6": "655ojq99LWFyvX2AJsB3hzd9sr3LxA6UyShNbGeGTzAscKxoBdtdZcPDDU4uA3JSQGW8psVMQ4UCNgo1mZ1JjJHF",
  "key7": "bGrqWqwG1RmGgBC1LoE8xQ82AzatWHTS4vBrgMPesPX6netcYTpXp6Cm51CqxjP5Pakhtxq9nYUPycSjxoTXsLA",
  "key8": "2wS75RjraYaFJHKWsDZfdFdCWMqRd8VXAwiNjZCtWAjSMzgim296vowsLiuHskUzKBxVF4BhQJ2MzM9jhyN5GHsj",
  "key9": "4cYEoYVFidvp7WEZ9pwkszjkRUUbmWezSiVZ2o2QtFa73P42PGd4KsodiCSt46g9LBLu4B8oPJHfBRqwM9ePZ9RQ",
  "key10": "3EHukDig7MoyekUaMwkoMAj8DMotivqctoxRHTjNtErKEGWQGNBPLCpuKtA5hAL8NL99u9jUQ398NoBcH6LyXTaD",
  "key11": "5HEBSBym6iqxg8YUi3jj5H1d3uGQJy5E7ZvPALhS4WSKNn1xyqpVcbeAJiwi1RXJhvxJxDYKuYkEDuxdABrmm9ay",
  "key12": "2kFEzvhAjixm33nqK5JE4ko2Xqaw3DRPGiSawvEcxms6L7679KRUNthj5yNAX81Tw6jBQARjvozhrxaEE3Jeq2SX",
  "key13": "ZHryKRUmQMwPwCmF32i2GTwR1CNruZTyajRAkDUsPgJ7ESZcSmLKok88HHy4Bp4cHgTQMVQ6fcMDvHzCgDWF5jP",
  "key14": "598kDDJTqqtPoVBfNCRoxXe5FJTY2W9FtjYXuEUiFwThoFYvyns98FRNPvfA3VuwXr82PaNiMVffE5zHdke4PatJ",
  "key15": "4oiX1R16SBP6jtffUtbYuj14ZwtNetqM1QDiNzETFS2wsKWyhERpQY2bHNcEp5JzGfTaf7itmetFfUQLAahCYF6f",
  "key16": "4LfC8Yix6sUghQopJCavAr5YvLxK8JCLBiSnnUS814R2W1XhK88k8n44cSqoyXsJkwpTyRNfPPCxspVUdwXuXkV8",
  "key17": "49dQZoQc9EGaSpUGgn9Xuja8BMrZYjcRmjFGKVDMdVRAQB5Sx1pN8KypDxL65wgeXzaCGAnasH4fSpR7HNbz85FN",
  "key18": "2Pv7QzH2F8b32ZVZ4ACQpJrxG5xAMa4LHg3ZerKt3JFv2tAbDxdgCHLxf86xUnc6N4LLxTRcBy8zstUxnNwjKAtK",
  "key19": "4yGFdwsFf5XzU4CYyNVhtp35skBv564zSHS3pbhLdZrFpmn24FDq2tuN5RKT8PLvm2TAMpHLD4jDqNJMYx3EUKCd",
  "key20": "3XW5TBPWJBtKu6yribyZjLkgSLffWhwMqwd5Dh3wmWT2LGuUt1bkP19KQURvSwKbKrqzEFWfBcfSHUchoUWCQkXz",
  "key21": "8ve9sStrrGvxZLJnzYoPN8NJw118kBpFHFxwgLturYJVU5H4ipzSbL3BuZoMKYeJBsmUobYfNZcgKSAz3ufgMGg",
  "key22": "3rHocDQpTT7ymWpZ13Y4jJoDsQV1ceaihRX8eejQKHDjrZnAGLyuw4sEJFjcj7k2e7Gy846dRbqPqKGzttCQx4nV",
  "key23": "4V9b3xMVDcpAjbHWWFM5ssUx37tXLEu3krwAisqDxQ1CnAkSrQuTZrkqckTNuT7XbQz6N5QU2mGbE7g279YzAGyA",
  "key24": "2NZbvAGtK76m8F16BtNBmKAVyUCoG8J3NuV2hG4kDA8ZmY2jJfV7MTy6GMKsY8R6WiXQNdVaAmMCoLrA97pZzxk3",
  "key25": "a9T6Z396BKgDKsu55ps3bGA4r222NTJTL6cX6rhXfa75pGhEc2yyEevEdJnRgfL7xJEqKLddUx9aYzXP3ZRye8F",
  "key26": "5AQRzmWydKv7bqP8rNDfDN5619gxScdkbc3v72kp8ZFF26KiGdVJf5XAKezWAE9m9vw1etAiv7ELWNxTKaVtS34W",
  "key27": "41PmE9QbTCErK15gKd4gocZmhmsa3vb9zanYksxWYaqasjuPNknu345LVzx9jbt5MdKPTRrzyhuEgKWLXencReeX",
  "key28": "5zpQvJiHrKkkiq36NzR8e9hjVAMP1DkWLWM2d7gan28g5haA3zaJS9bq3CXEeopNXdJyTFg1BgnxQ9XfjwzjaNRJ",
  "key29": "523pTXxHXfEvCcnb1t5bD9Ltrf1DmcGQAYhkfebeSyD6u9hfyEwDcXDkNq9yBmiTJv3tto1Znn98Vghi9nRmXSkJ",
  "key30": "4xarugRFDtNMvusEMqUoAS8QacFg9fd2Mo1bR4GLbFjBiwGJEcZB4s2vynne4yhHUJ32sZUsfoodb1PhxA7sEHfu",
  "key31": "3U42tUmBDMkQDKfc7Tx9EtrtyG5rQWL9oQ89tyVZEhC8KfTFzoR51D5HA9iwB7mGEHEtu5zwXz56hrBb7pTXjPvE",
  "key32": "HhBCjBifpBX7RNn1Et78WQxnfjvzyUPnUsuVvtCCnHq7AgWZ3o26371Rq2WoofZ5rCw9EhEZTxMS8e6LaJZtWTs"
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
