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
    "5dgn2ny14MeaeaJzNYyFeRXwZxT85ZP8JkiLjD2JBP44ZyXRJQHTXphDHDj4sp2kjossaUneNc3MY3TthVNSAVje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3btsmNamsf4RAzZsVs8vjes1eDP9kjJmtprKx83nkqdKu4Z2N68xyWR4jirFvXeYZrU9MXfeLNKQp5kpwcbGSucZ",
  "key1": "3Bb1eaQ2qAQmzb8FM1tcN8k5YPFvMnkkvcuXgSu8A6uT7S1A6XTTRuMnfVgkkwJkPR2cJNZxMCianPiTpQHL18QP",
  "key2": "3SL28TCCh7N5JbTm2KvFxih2XQe3TSV3d85XFd9ujqVGYcxeBkjJg5fBrAd9UGP5N1Z7psAGr1YfJw3JYmeGtd8Z",
  "key3": "5gHbgnenrTHgtjqz2yuovSpFG9i7Zw7oPbvEWKyqS1vWVGcgEQdLC7hsg4GbgWWZwgQdgH3Y2j63fFcr7SSqdF69",
  "key4": "4DJcZNbfDLgXj5R9maozJ5nEpKpZmTH9xGQZ6t5ZJRh5izn1HcTZbwkxWud1j2LGNG1YgnekJ6248RsAGYghsNPY",
  "key5": "3psZCCPdEK2NCMq939p4jxebHmDvREMpF16BLVj8u75rYnZ2wSMs8j3LYDonDuJBfjodx46Tp1Qrr1JsGKvtz6CQ",
  "key6": "5aVH8HHEb6fTYcYBHX5TAgry5vgZhSCBUV2zZgj72EGvWRaxCwy8BxTXtwSCxkb17FB3J417ChCffbPC6VhettFo",
  "key7": "4qbd6ZTyTCgcWofo7tfdewPWzJPEhbCXzmmEGnYHDMZ3ZXaeEVySzUPkJCvy3oUV5WiGLG8uGtxa9PeZNoJzz1aQ",
  "key8": "3N6gJAgmUVCtHnV37Pf9ehfqAc5pucMMdFYVPTeU8ffjoBqhSkmNUAFeHR7escCeqf5eq5Bb528Wp6UW1WvT6dX4",
  "key9": "4Uu2ZWZ2rnuDWcumGwqKEJp9YzprdE4sBfZDf5NBJ1cg6uvftUEeH75HsgnDDRMfg84zfxbev7fNm68GHg14UQxa",
  "key10": "zVk8YxvkamDWT2ohqKYwL1Fh56ePp6RknmePXrKCxWapWn2cwvYYYMKvoSUidCrJTPEMTmCiN5eiVXpW9HGtEBA",
  "key11": "3rbBEsr86T6pfnP5ZLU44xJWZtDUyCdSNC6jQ9DHDa96GnMX4K6prHjWGheNtmA6HLEMEbbu6uZqAstg22H4o6Zo",
  "key12": "2oC9Xtgoa9dVxtnGwHHzvVwUPN9ooeX6A4GHYzHom2PpRUadVcVrow96wMJY4UCXg2qK5A9yEYxxHbKrX2cPceqg",
  "key13": "4SvVjndVJkSE6CiDzNaSNxitn1vcjeH6kburjJdTHAdLrxYah6jwrWm89jgZ4EDZJ8uikTCRGyZqdXzpsaHtxQqe",
  "key14": "FYt1m2mWeaMvZDMvCh6sPVgLBaMD8SdnPVWww6f1kENQdiajahqCTz7J8RSaybgj6sS8yLcPseNDNCQRx2odczG",
  "key15": "bQhGMTVdLA6zoMgTmSiZE6wei6CXSGx7JB4gAjEYonAmLmp2MXrY7z69CzVh1NP1jU1BSAMD2MhqwjjUqKVuNcx",
  "key16": "xJ3qykADaFzM1ecgAXWkKcPT45tAnPshrm2Fp5wYtiBaU1vtRodUQor43WP4vGSTLyUzhizZuS72yjwmKxwCxQt",
  "key17": "2nsA92Aum7BHzCE79GvSJ7Rr2Bz5dNEfdR8nLq6FPWcWWGFnxNybJg6QA5QqpajgFhahagSTKjaaM9XJ2GoFx5Q6",
  "key18": "5JqgzDWSjCqbeYYSyjBP1ftk3KAY12HSUr119Hyn2ShK9aRUz27r57aXxNn8G8bk5zhFJgtLjo2auZKMXZq8Xrmf",
  "key19": "2PvQ1jjRAHD1H2wMr8BAx3zN3BRYNWSyYFizjZAEobuz5R6nQsArTPZ5MhQ3H5YasFmjCsKgxAuwUiMXdPGGcZmg",
  "key20": "2pvhww6a9qkyLo2GQrTP1X2ZM3uGch2beRezowurgxn8djT8TvgAURLG78NxZnWsSydACPKbduJmf2M7SGK5MSmD",
  "key21": "3jBWEeVapZYx4QJrohoT93ZSvQ6XwLx9U9BgatoCex7ta2TrybRFvNMgXERwMzG4heMDm5sF6ux8V7pJCAY87Fj5",
  "key22": "jeMDizjRPEoUSWLbqPFzNAQnEJSWQ6rdSGgnJTRZZXhsXUqadLdropYK9La2j6A2eLyrNpGi3XJycoB3uj2FQPb",
  "key23": "2e34VUV53majVCYShtVi2Y18dxtniQBY3kNLhAd4RoEk4GLURK11jihTnSkogqvq3AZXCMWGSS89e9c5WN4F9reG",
  "key24": "8LzPHXMaMkCbJWxTVverLgQbPiSqsXZ7FoRKH1oLzDS8gNszRgyeHbjCmBJzqftXQJe9ngbnUDniYhhMr61aFh3",
  "key25": "3ZHCyH4RnNsJdaz1U7EQ89uK8ehYHPdm9zXGXygc5XcMiREDifD9vm5gSZXGPwUzDWCmpNKGhHSknQthvtUkjJ8b",
  "key26": "37FgoX7MzzBZ7i5WDvfYDqGbVzHovUSHbJDYqa2eDGnDpqZRzDj9P22WAAJxT69aKi2Nymzddmopvu6cAEg6EVLv",
  "key27": "4rrZUZAJSN2tZmNUDiXak87dRDCC1JEsx96zcKCi4GAkSS3NaeHB1epCu3sxNHtYn5TdvzdPPTRmAn84bNKyBmcX"
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
