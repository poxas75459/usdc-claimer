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
    "3GkgHtYR322iRqenbHkdyLwg3adZ1khRC2bf7fz2bUwwiwxFwYoVdaAhrm66BUhhkv5o2ufYgAyykNJwZzayYZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Et9BMVorx1DAyeWcqMPSXpHUixXWSopbPBXsp231NXbCbYCYBfxddXyin38UJrVnxNoQHkC2G4tNGU7N9pS6QKL",
  "key1": "3JRMQYsxuE1YcYj8KHjzViBFpVK66fvL368pzp1JTtZhhRYRCU33tpLmMVqVVxysNPBtvThBMNgRrmQf1P9Qa3Vi",
  "key2": "5eYdTEF8LCdLQjBbetkva3fLja323ihiUVXYbs6tK64SZV7j4CvihppDvkKdRzA9mx4rswRz6N1ZMHGdUPosZMJ",
  "key3": "9MWKMDaSTgB9AcXH3Fw3kYQY2BmP3rjHr3WLT2UqQmLJmbdR8F6YTyvvhrsGsfT7XFoLxgKdgwZg1dCWxhNhCvT",
  "key4": "4addM9nxfaNFMvwMpMSqpyBJtxynYqfsLZjy3doVF4dVQPXW4cG1Xjg2NHy8zqguXea3gKXnuKfFLvYsPRx6wkdz",
  "key5": "2UxzfmJJkKhn64nvewsa8DYnFYErzY7gCy9SFmhwKTpcV1tRx5BTgvGCNc5ZUcMfuGfVBWaXtVyZMTkCeYqPLkk7",
  "key6": "5qpDjGzH5d65AZkR3v2VgxWUMZ1wmBoCyDDpVA8zNgDJfCRYUExiRvbFAqkdNPvvwVsadcjgojDRb2y6F7DpwkbC",
  "key7": "BDJZCtN2tGLPPpVXCMjHFCAVyU6MTxrLYXkUcemuHUoYczY28xBNC82MKJSA9xVPaok1KBhVw3m3NYJHB4KoVqY",
  "key8": "5V9utBB7zyC6czw3nNVW25vCrmU3tAPYqEKFxPUQhrnbqjt3qcfSeSL8cQbrBHfGt6VLCzfpFehSKmHeSF5Rqjap",
  "key9": "2xN2Y9LoVfyKnFXhS26HQd5mrANAmAWMnLoPH5ah6BbeCABfBVSZCqm5mW24UAvj8kRfTKwioXj8sVmdDh2cX9aa",
  "key10": "2ZycrXcEFRg5VFoZZMUcHAZSHUdW5Au8P7FPMvHLHqoxWSKPP79m21naxSBZVyzSHbcSYYPDG3dt8eVWqGLConL4",
  "key11": "GA4XCVRz3LD3Te35M3iSvKMtk3H7PfgNPNb8WrBfFYbL5icgeUK8kChVJRpcz5ypKWAgL3qqB59t8oGzDBVuH8D",
  "key12": "Yxcfrst9qNqMB7iZFUohVLS2FWF49Efjc8mBqkZkrrW9uy9JyijLvtWsmLZzwiTMUwNrznbahcwWzMAaAM4zMgF",
  "key13": "37E3UgvpMXGY1usfQzAc8ZjnKM4Up7zFhj5GHo1bpSbAXxbcRuLZoxUZhdUTxHfpvyfaFQ2tQshtn3BJxCeoyzeh",
  "key14": "4cpxFraG6pzKRaMgzRhKuhTZz99gnBoWSVzwG6ayEPYQNB3dtPGtwBtby7W2m8zyHFcSphjNhN4osauUSDJ8yDyd",
  "key15": "NbE8Pp8pLkUVfJ7xxyNL3CxS5FbyxotYgr4fSwtFUtXeq6b31QMbmMiUYcrheSxU4aJF3feGAKGxZZyRmLHKC3L",
  "key16": "4XKma6bqi3Ymw1Sda3zicG5rR1Dx8iUqZGqJa5ob4XeVXvdtsQYyecLgd4bpZihkhe9n6m13XfjUUL1kyMMFNbvQ",
  "key17": "7cRENnNMCQ8DoTji2cVJM8rTgyLGKc3icHWjH6Nmn4Lffje4WejCnw1Pei1vMmGXe1qmULm5ssDwwdQjvQTUBkN",
  "key18": "5BzcWRgS3Rt4EZvUjAk2yban61PeWLfMBxCVxbhCT8bkfWHjyvijYKmicQtoUBgTBpM7jsreUULKg6uJwZG63n6H",
  "key19": "61iauoPZqNcwPKSzHmkqM42piW1suSCFLUDgxuB5VixbGTN6PuJbnaUswqZywYwyzrLhgs3un1EswPypfd6x8zFM",
  "key20": "2DPEetveHZCWDmqnaBd5WWg1Z9eqo9kbAQfu37A6vuQ3daabKbg9EB7LLfgtNBUNKdEvqsA8yYWcVW9TKsrXXv6A",
  "key21": "35hR46iL2o1z7VH6t2FH3Ur7KkzkH9Ga9XDFFWXjKoj3Lndo7vx6ayiaBNtsBkwq3xtiNsoEUgG5G3Miq62FRHSh",
  "key22": "nG2pGVmLGikvpuK3JYFD66udytoru4gMrGupAkbshv7dfsdhKZ72DpgqeTSiD7gztUSekFi86UK191BubaMxMvm",
  "key23": "GCkhFpi3GkKsKgFSCXQR8JMSmrpWzRpMyU95s9Qd9YpjhWD8K7je7ZynPRoERsoB2w8KrEPk6dSpHLmKgX9wJqS",
  "key24": "5DB9k9gQuB9vDtLAw3gsXXhov8bXuFmUxXgpheHDjWHD35G4cMRx6oRF3zJ2DUmGsrvwh4My42h8uz2oMkmMoThq",
  "key25": "2Bi5noUB8DBdorj3AsztV6BatZMzBng8s9ZE7c4fjpLc89WHRtFDtBqN7tJxQ2aDixmbpDdMGnhNf4wH21ZVoP75",
  "key26": "5sUeZr7dQx26ehzWdKamMdk6sEJwJuK3HCTRVMrFMVF5moYdjCXpFXh3Xk4zXZ4VWWmGa5h9RYWpCASrdAwS74U3",
  "key27": "4HXrnn23y2LXJKUHPZ748RSFMwdHno6RMNBhqFVqHZAyUEh6xz78UnHX5vczG6XA3izeyv8e62nitV1AZRJtTev",
  "key28": "4WSmSZN3a4Zg1jbWjXWjYJ3wvhU7X7tWhykPuDU4p5X3U7yZFesHbgcco1qrbtyh8cJUFJ5m1oYrdwa1RuTYdQdU",
  "key29": "X3Qr1hqh3dd3MLEAVnVs6LeUdT1gb8DQQpEYftYUiXScY36CxiSKLs3gPVZLYtvumr6UkJV6sR2u7g2pFKjvRUY",
  "key30": "2nmSYZrjPhzEeBsS7Qz9jFzVCH3fmeSuhM9YCWoumyfWTCWNvkUTecqantmX4PNiFM3MRBTFUt1X9WJW2isDjs9R",
  "key31": "5QYiK8P651tJBatv6SR9HCtnmAujpr883m4nLSzPobMrD7U7nbyVdsrYapDd7xKvPB5kp3CSm6XG44KTSb4F1Nph"
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
