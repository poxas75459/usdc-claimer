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
    "2y283DYbBVXn24ATRRaxY7mrmW7B7gNYCwHZjbuyzYT4vpiJBBhAV9Cxt4jBPFrPLM2kjEMeUzR7FzbBsqaTaH4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zoNoL5f1szUoFrCj8gzCfyort78PqB9kxzMp7WPe8RxY7CENsHAYHdjCzFuDgYR2tjaKmHibkkM1wQfW4BwcD7a",
  "key1": "4LCwdg84mCP8Nb1eW2jSSE8htwxfP3iPRqQzpnn1k1NevFvhcSDvpiecrQe4hNXs3kvm5B3y9hfwUT6hDVhC14hQ",
  "key2": "2bcBf8SeoDWrgtqLBo5S3umy8AdHMNNaNvUe9VfQH7ZTQf7YANeT4FfURVvo21977z433R5X5UVfJWEpW5fSNFxd",
  "key3": "PV5ZjA9CRfGwKkJ3m3UCNfsFweqia4kirjaUeiGUydpzrF1S7mjwPSFWcNwRDmJTwWdaA38joFTjcKaLbKk3w81",
  "key4": "4HNWvmKNeCiDt4W9nXidJYyNrrRmKnBu7bBSc5P9i8qsmF33VpHzXQ4tafPWPLpxXmGv3U6tWX85bUkd2LgbCffV",
  "key5": "5AWcPevLDtEigaR6Dhxs5WK5EQ9qfh7ZVydAiCRJsPjpoQ9FavDQXcvgxrjV2x5FF4LUBnYSDJqPsRE9goeLCeWT",
  "key6": "4NVQA87yUP7omiEYxnVkR56nWwJiQhysYixFf2TkXoCrnrg9yYvEoHhnNYv1Uk52wDKBhzprq7gC1vvCVeQtJWs7",
  "key7": "3BozKhfaDc9rYkQQ2WkZsCNRKAN9WAAPt6X6CLUuNSR6qrRgCWgD8LfWtCke8pMa8BoYUs7gTKFCqKWowwaooTnz",
  "key8": "3T3HHdHJhBuE2vNyf6hJR85mGSBHfWdJ7j7S9idyb7Tdjw2BjgzrokVQFHgk2qzhBSsHugP1sta4UaaXsk8JQCmd",
  "key9": "4E95BsFivo4KkFcFLz8a7y6QRR23uUiVu53GTs3Jyt1yBLbGLZQHu5VhwEYZrQMiA4sYKhUR1pSVc1gx55tJy9F1",
  "key10": "4d4UjGn6JXvrj2ShyXXebhfujZ6QnsQq1sik3W9RdTbF9uAvgwV1mRqtwR7Nf19zcpAosNTmgXJBHfWKoVirRdiT",
  "key11": "4BwPcDXu7o2DXPXFE12Dzg2Uz7qJSymH5uDtkxVi7YqqKp434SnJXDHcjoKAFGoC2Qj6Km2VqeowHTFYThqgvu8M",
  "key12": "5piCNfviPbum9EHWsCimASPB36mqVuugjWbh9hKyjhNU8cCA3G6bM4G385rNbWYL5QcuENvria7two6ghHYWsbjP",
  "key13": "2sTtFQfJxdTFQdpG5xRxCjAz4ckCtLkH3dA22YALN7UEiECGTn3HveyoSLXg7V68XkutVgi9CJgKBfZqgUfNE7b4",
  "key14": "2ibuQrGyV3qJcZ9VT3uRQeHEXjsUnpYNSNeSkMEgAA7sZguUrqJ8S2MnVrQFVHj9C6XTBz6L57KpHBZL2SNTMeG9",
  "key15": "5QCJbdroNaid1AeNN63azRUs6jHr1ZBevi9co4kGTZBBPeH6Q7uKcVKqphvFZEoj6ojqTCxpU7HpCkVBwhPhiYvp",
  "key16": "5Ea6dRjZx7kcT8kb4EW6xwZ8cuy3yFpGh2HcTNPL8unXjq551vTrK3Te6WB3QGWTCMnFHoghAn5ifPzfWKFio5Bs",
  "key17": "3FJCwUxg8EjQkhsS4HQTaPNj6K5e98Z2G1EpCUG74DtmAhd3pPK6TcaFoNZajNppDf9ubsJLstHpdk3YL3CsyFD6",
  "key18": "5sswdFH6SRyeqoNaLw5GbEw7AVbCUcfvQY6gux8DVQnqU3rK5nyGLUvRj1M95Lr3Xx8comR1xarJUr9Une3CnXQf",
  "key19": "3hSsQZ6rFJpMV7tP9hZAWUnFV92W14n3f4JSTPJMiaR29mXJUy7myp3h1zyGcLsbXkJ3Y6AdQkopUTSaC7BAvUHd",
  "key20": "2D5PZWVotyJMrKBFWhth76FioWgVfmZbBRFVi8ZD8SUpbKu2wHsf7fK8iSy14HMKZWQDwibTi4hJSb48s6WMoj3m",
  "key21": "3D72FRQSTRzEaL3Z2kCQpf5ZxxpJuB4xLAikbqMGaERPTjiowvvzbyP73wC9WjHLn79eFxn4UTU3MvkxccLsJkDY",
  "key22": "29xaX7Di8VtoNrXwD6mH2sUA1b66s2ucztYxP4YatvDnxXh6oG2vfp1e81h3tKGkDWohpsLMLniRFkDvqa8JCVU7",
  "key23": "8eytUw7nNJk7FfSMQDEnuuxRWPaLSsYVHGCv7Fgp6fdLtAY4JrUYDvgsrg7k4RTRYKrNeDbghod4DcQpVc8oFuH",
  "key24": "2CZqJJBkbsdkxohUjLNEUZWEKCBtLZTSsDZuvZ2t3pvTRqCu1xieNsNwgt8zeRDsBxkkREDDnVryv1JJoBMua3Nn",
  "key25": "2D6iUGvz6yn4UkcuS7dQnB8nbyjXF8VxqLVyd8WEsZ53QX5WZukPSnkgcbg4ouHqjLxQUjEEnyAGiZFMGfD2iaXB",
  "key26": "4PMRikU9zwB4VZbLWfbSV1ouXX65qpNPkxoLb16psizxwBNzP3Fp4EEDjq1BXRE9no2WA6ayLZjJyKAByTSXkwka",
  "key27": "3oT4BrLnJPTxRuFwsu2aKy93evyYpt62eFYrq4SfxFb6Ua8PCciQn6DgrfyLVZz6knEsHv6LwZk31sKthqvu85RK",
  "key28": "61rFNacDxqgAYD4cegJVNqh5mysBjxdLRtPqgxd2BeKcYZcvdVWjSjy6JKfwTsADTQD1ATn9Gud7Yut8ETPvEQyC",
  "key29": "3WtiubJ8uR4cFpBydsiLnLPEzMTMq43yxjjo82MfyD9SM3JGUtBuoZZ9tU4Hz9fJGfgiMXaZ9pCMpGLHkQTdaaq6",
  "key30": "4VKk6ny6ah56MX5NLtDCZwHMRrmTVgqWpmWkYSHyoE4Z2Ry87xyXM6wkDwprq7WXWp8fRVePzfDRoPjPEhBLXhUa",
  "key31": "5ce4bTsP1t5Dq2pC93HRqeympQ6K8WqcEbXQqgSEZPykhTnfHjTxnCxF9wXqWS5wzLPGbMgpodb3cT6sxSZt7aqU",
  "key32": "2ggfX5XVzWMWujFdNAPVG54YMa91H9scdyabhbfDfkyAdLr3hxemqpUhGb1u6hcfyYkmFasH19rXYXaKb561oK5L",
  "key33": "4PJtQjJLapr6TMrTkDTmfBHLaVUbtdYio4qX1ao2h7ABEJGHHCenxjsVn89bgtPCLyueuPPdfrKAJdrjmvtyM2QC",
  "key34": "3poPJbkDgXaPv8NdzABB7krDG1s1AYx7CCkcXBgxb4cevytG5oEyDkDRaxHmR4pmDGJVobNasGpf7LdcB7b3q4GW",
  "key35": "LCGzaKua8K3i9JfqFHHa9yGgBLeEyBrnwNrKRtnosygH52VpQNRffc2tVzDqfnufWgLYfMrPw6jF13pfLQZXLFM",
  "key36": "4y5PxnJD1v6d9roEWgQrwBTDBrDzfZc7oiWmzhBmzmajUYXcozzbPqaTt6oxd4VkU4AfqjCXEhZeZQjFu3ZQStHn",
  "key37": "fCiHJJJYf24SUyeX3XP5h2RxLeqgkExSMTCWJSdvtU4GTgnWgV1AdWRPViXaKih6pWAckmg7cf95WmdkTBLHdvH"
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
