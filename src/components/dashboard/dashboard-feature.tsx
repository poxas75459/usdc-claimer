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
    "31cMbEgDF8yHT1X42gvUaQrGnZAY5VjvVxUV3yUqNU6BZ8UBf5k6k7eTQM9NMSJgeTeMSf575zKCYKuNp8i16MRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BAoVjP9qgUVHim8ny9Dh6Wq4ntXMDcsj5NVkauN7mx27YH3ddqHALVMDMTV867zHaeN3qn4fMcNSQ84PvZFs3xM",
  "key1": "39HH8Z5V3oqECAoMj4nGwx9uUJQmFgG6wGHwJR8YdeGb5hX8fvhbVS7q2Asdmz1rXPCFnTVGotbySszqUSy4FUDw",
  "key2": "37yfvMmGnFSSfKSB6BzMV36TMwsPxMRio1cz8DtXDWtqtHKzB6EbBwbAgwe4uGzvM3oB3Lp5zthg3n22aKcFcmqT",
  "key3": "VoAeLrPrvHFXccwDY1v4qTqxntLUTQfH3iBzi1pRZMQoZ6CnTiL6HG4BwKFW2J1awiFUDwEbfr8mCteLgCb1YZU",
  "key4": "5UhCqYuiMHVZPZC2cZyFpzMaY6uUA2WhXPnKLR9Qi1nCeh7SLRywXqhh4JRc5oCYF7CuQtUtsET6cFh8LZFvNAVS",
  "key5": "2bQPz1c6yVWrzNj8ugwyK2a6hifDqaYKc96cHpVDZLnPsh47NYEfVkpByNMXXLeBRCPXAW11Zp3gPgPfx3BnSEa2",
  "key6": "4oTRDYMwdhvBSJzps1dJ5BREPX3VWXsAFZvFwu4SFKDvjMowUc1BH4iHHNV8188tbKawmH7YxxUNn29zJhESfan2",
  "key7": "2fbSwkybNkeFLuBF4gst1S7K7xgtJwM4Qy7ssdqpVDbBB9dUFsEKo5V6Z4LyvdZm47vqJvx9RtWzWxtw5odiK2ta",
  "key8": "3wUM9cjPBm7Pz7dfoHYRpSeErXSWpCW9FgQLpaeB5CHMr4Vwn1hFQVH283WQW4B6icQfWohrqJQJTeqwz47iJH6S",
  "key9": "2LPBk6yJoH1C6Th8zboiChG8wjw29g2vVNMiaMj3CS22UJSJYK9PGragFVYRvJq4r77ZDH7dmR7xCgjtT3K9GKkU",
  "key10": "eaeBnY6PvtcG5K87mwPzkYum7qwKmZcVeidgoYB2XP4PYnEatHMG5gdM5mXAwchSirSMtqaUiYeycfjUPYBAk5m",
  "key11": "2s2aXm4pH7ocVxyanFu6dJxTHLtoxP9Xpneiei2CsVebyZPPJC3t31es8f4XCWmvDViLWcG8d1NJTbWRDSadGE9J",
  "key12": "wfHqKWL5XTGnZRTuyua3ah6syMi8PmBEkAGQZ3TAyB9ucvvYLaegiQjcW5PD9ice6q33dxv7z3MzmpBWdTP2Nt2",
  "key13": "4MqBwEyK1wgWv4DAiiZkiCSW2GDERFeBF2e8A8Nht8u93iUWQrymqcpP1AYff5y41Ghj6shGRAzucfN1rFHrZAj8",
  "key14": "5o3LbuSGWek3cA6593n7WYh81vnFH1AnDbztNs4VHFA7WereQuA7fXn5sP5wGwDZ8ap1Lje4HPaJZ8vcsqxnJDbu",
  "key15": "VrzPCtNbMJhbirAJQtvhdvj4KY2BUAPAJLzXkTEWY8EetpuR24myg7UNGEreHKVbp7jKPf6uCXch4xrbFi93g9X",
  "key16": "4cv9aq4wENx7H6tvhMiHSUvGYn7qsW2wvBJJHhgBg8GrWkJSdSNNYZgBeiB44HpSHyYKWKE8U16abgt73SVXF7Gb",
  "key17": "2YSPKfTmvZcYsP1faGDgn9eFEvG9W5jdNFBRhxRHqwbussBwEnbkor78HFoFtpVUAn3H3Qs575e6TtxH3VRz7rAc",
  "key18": "5astENdz2k3M6qEgTtBUzGdJr8bkBXgz2PXVbYb4RQwEAQ3PPf7ru1AUgqnm1EWemr6EDZkotKofYHcvfefhAkbs",
  "key19": "5nPP9ynPyphE8c84DiUHjcQcX5mmL4D6J7DY9RwB9AuAZxZ4BZgPippFgtUVJoitvzmPAdEeHB3csVWGTqGDJ7vQ",
  "key20": "4BjFUEFMBbvBbvLnHiEWTu88rhcQ6Y3Bnw36oqqPaNZGPcNieTHitomGhYuxFTNL68BkssiFtjgq2GCf4iPnB42c",
  "key21": "2MnbZ3zS8DzsfdzrZXabLoKdDYHXmgQjv8SuQFV9mA6fMejmG5G7bZfkAdtaLjdKhAFNL1HgtYcRsQsPYKNaBgYj",
  "key22": "4LA2oXV2gLwk5eAdvCHjALEh7fhmWjBHDZ2q7ZG89HhkPstteMKQeumXBBV9bVWPZeTYYLrKBSoY1fkYqmxhUQta",
  "key23": "5DDkjVTqCoj1x8s498827sn1zs3Ma1NAxBqo8GjtktgKvYg2Q8QAThPqZ1YgRDK4bsY7J1paK3pEdAyScAXg96X3",
  "key24": "3DQ7wDJjrNuxvxYiVEuKPqU7F23GTwsmA8hesvkH1eiAmKENDbemFDj7ET8RVzC1NZguyJjVfr1TnVLiXKERhjuX",
  "key25": "23vSwuLm82S9ARb8FeQFBfTxJzJqVnBBeg66YDrxGhsrDxdWchRPEE7xMjRQ7uzPzFwBx395s14aGKAkNtcXLgRx",
  "key26": "5XAXgfCSgGZmZDE67pmnPJvitKeau5cqj2BmXkk6HU8XdzH8FEzgUprc97GTtWP3xVCBq3U86tUptq8ZA9HMLjwE"
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
