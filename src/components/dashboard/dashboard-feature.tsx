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
    "fQomGikHJ1uCUBur77RRWvtQkXEot28yNaFULrYyPturiPVKMCCVQfHYDki84aGxDWgfwwr8PdLe2EcC8jiapD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fvtkLoZi8PDp8CZK7V58Wja41TopwB5UDF8ZverjY2kMXjN7Hv2F7DSvUs6XFARGxba2JyJLgDHSQsEzg4mjgBU",
  "key1": "4fWkxRxLnxWvgpt9BGH7S8e8HY24N2xc12MRDwqauKqzymHdDKR64xQ57B9Z5HJmS7tkcdkMoNByMeKSVLemweCM",
  "key2": "616kcLthHkk25TDJKeMph8qTR1Sfcks7jnP3kmG33r2aZSHqBb4td78FBC2QkcViESwEb7LwJ4fYqAKTr8eQUdYR",
  "key3": "41jF6PWrFF7swwbXcbnRy22anSxLAH8qZwFiWd3AfLa18SXVFg5NAKeBnSVoati5BUajpXML9qA1ND5mRCS3NLXE",
  "key4": "iABXrazREZUvY5T6emyhYTHjb1Woafxwpyis7zZHojV8DgTaEx1YtGfgsGfcehwWbn7KLru6mAwvYaomp8TvJe7",
  "key5": "58ohj914agtQGjGPriCmW6Yr1pjMMq7WrxwD9GJxkdgrD6XYn3PqCP6nRvR7dT5UGNxhF6VPNUS6F2JRbDHM2TrR",
  "key6": "4FfSssREpUKRQmiF2uJh486U8CsfS3esEahk5xVWwtL12KHGT3n97Kx2V11qoANC2oBnCDGwY25ECno5n14kXs4h",
  "key7": "3d2d52EnCDtgoFfnbPLVqtRQuzBKZBFeBcK1ZCPtoRGK935yP4FLoHdwWLCKT89xbH91dAuKk7hq7LwPmpsDbgdJ",
  "key8": "Q1ECxfJ9zatd6A1DZCb3J7VCUufBxPu4NxfRqzFwfNPi5xpKQXi4o2Q89qcxrXPwzm6FcmWgrCnCbg8saveTnEb",
  "key9": "66eW2KEv8JiSh3wF9SJFW6RdYVWYsKxxyECimaCFKtFNzThjJHKz89ux5pZMVNp5VvcDe5aabodT82Fjpjfdt1yV",
  "key10": "4NgcGc8wecmU2A4htJPxYUbV2PrZu2BnAEwPFsT9ZRQu1rfu7juTQH6VaE3EHqJbqxu9U3LmU7175y1KL7TuVsuf",
  "key11": "kNA78n1GMnkbD7Tvg6ZPgJ4xW1AhTEyV9H7Ku8c4sBByQxgu8bKUrT1QYXrCSnFBW6saxrf1p64zvDTuuvDGDR1",
  "key12": "pBcNNqWkmTFBVnVxe5V9BEF1DabZacwGiBotvvnE6X91NjcEcTndyVNdfxmGqY1STtEvkkjUkoBdkzLp5TYoepP",
  "key13": "UFVjxna9vWKxwLUuCUuM4nd3C1FAodikYzWTYYAesFHxMVLjcLDh7XYnyP4VkChGwXi9WtcmBx3Q3C4i8GmEPPy",
  "key14": "kuuh7eaiPnCZvLivZTXqQk49YLXUnpTiqomoDNvrBHq9oqadhhV5VjbPnxKMX9Xy74D6ssQ1tZU5cHVZQpu6hVn",
  "key15": "3ttswowmT2yvbDthw28dDcu9cXvvsQNVGochH6avTvr9YLhU3jppnyPCm6eWzXC6LS3Jasb7wzP3ifoVJCU1HK5a",
  "key16": "5yruLVk6V146fVEVpPGLwhQbD8M77LrimqJGycBav2mvfmHYxKUaihbV9c5TujJ7xog9Mfzm9SGiT2UJbEpAh2Zm",
  "key17": "SPhCbecZTSj3HRWfSMG3te498rjBCdVNDBDKEACW4U8WGQnDTtLRYxXmgWNsLa7ZjipqMFkScAHyHmCa3eK7EwR",
  "key18": "2NatQ1bdKcTZijQnvMPcKcDZujQf6GAZG821xjQmBWM4xDJhfUhTubYrL6oqaVKzJtMcu6tghfQ5LegVYhGzWg8R",
  "key19": "3o7mGpeYeFUJrTFb8bb3X5dJjSP1LbYmEJZpz4xUVXESrbijj46Wcia8KtEmeXhB63xEJ7A4yM6uW2Y6EfyFe7uS",
  "key20": "4JcZv4k3AnPaorUZ6VJvsbnMgjfN44smgpW6sa3BdW3VcpsFTRXXLSzq4s95sKbZAMtdD3HqPeDbQmAkLmGLPn37",
  "key21": "4Wn1bkBeQ9TXZDzm6Z2otAyKjDC95kN7abktrNiwUnAVHvJot8cZFharniAvpcC22huLiVGgojTye6RpxcZummET",
  "key22": "31bUXuPH5qRSWf2Xb4gq6VmGpxu7EBpLepdqgXv4Z5DC3SAjPrpnLvWtpDQwja2owkGnA6tM4xbBqbXRGuzLRsY",
  "key23": "5f9vr3oYSXtpwUPPWsDRZrHJPfddmCipydHqyNaPbhTDkuwB7fvpdQyzgMaMqGj6EH7g9ePLbKXq1XRGxbLyRY1Q",
  "key24": "5o2eQyrKLQDt66ARq7cs1smxqSjTXLsTsUBnttQEfsBLE1HWNP92k9uTLmPeCA7mmzvSsMdMdGrHAecKA5ffPMT7",
  "key25": "4KkvYuCobtEMVepEMEAWiRVhH65ZwEyt6XQdCemauBjHDskE8JDQ8JD4HhhaXB7JdPheSmbCVZrEV1Dcrb6ZvEgM",
  "key26": "3a76Sy7Vvep2LWegEFBEZnzibfMhVjSJft3GddQaNgc3RgcdXHPAJWJJAUY57enZ18V1KWT2y5EhKYBK59mXjiZA",
  "key27": "38LqjKMJipofWmXD9YpmqwbScKzxpZLMzdDStGJrNX7nfWGUMxgG7WmKsVxoXvFUcoMaqmdPTqn7WuqqXKWoYG1G",
  "key28": "3w18eCZrHBtFFnXZGty9yCf6ecHaAm825f8wjnQYAzh9hLYgHUnNkRjRhLQBJ7BLEFa4LBPM1riTHEBEkxSirFQm",
  "key29": "3Qpy63QpFBueoh4a5FB9rumpey2x7cXENX9m4CSWwHu1TJabqFZuUwz8heqrJy8ExBF9RRKKdhWsKcPMKimsWhb2",
  "key30": "2DCa66D4yVWWGy3QC2ATSRRu4k3bDAxztWvVDfYhYkF95seH2Qy1ULWqLeJphD8FtNVRdYcYkDEnqGWnvRDaEbsK",
  "key31": "7SbnuPwg7o1KY34knVXR2hzeXVYqHBEwdQ1x77ZhybWNJYdHQKFXAuZRHux67ssBEQREHQJrJ9rgvbhnLc6iAkf",
  "key32": "22fjhjWdrtw7daTzdnxaTbXGG2HTuuDqRpWqRN2LvhUoz6n1ywFnoSp4sMyctveyYRVW4jymHP1L2CKAK2WEyPxm",
  "key33": "4Wa69eoakcE4wRRvVZpUwbJzk9eVgxZCUN4i9xcQdJHdSWhv9qznMdxPYcmfmTkg8FwntsPXGPfJhwzVx6XoX8dB",
  "key34": "4dxxPAyPUPV3ZNcxwfAUoMswQPwqeL1U7hGm6ff9oYZyCz93dxm8bAnqrp5SbDkaU4pPPrcXFp1QUAAPt4rc9VXw",
  "key35": "njxyJBgn1RbKWpXWtFpPW316sEyiMzwyy4wiXBNpkMh1vizbiTKKjaNQYgaTj6oyc1VuMgbxQ5nHFjgFsEaVTnU",
  "key36": "61ghqDoiWa4cg2nN9buf1e9dqQq7dnmN3hY2fCzEfxxWBqj82jgxGNeiyYJPfHGUssjVPHwdQ17jW1kH4uAtnFyL",
  "key37": "ysgCSuPjcm2WUycMNy5F2WS1NhFB1ibnqTgN15AUppR38aSdieKi9AJAVkBaminutMqGTBPzbLwZkehhGVgX2H9",
  "key38": "4eHYZER9kDMsAFyqShb8329EQh7S4zpZPyexEd9cQAr9KxyU895hQXguiWDidSd8otmgSrthgSnYJ8YL48tPaNzv",
  "key39": "3m54n22yQdLm3VLK5ccp4bpZV3XiwH2WSgg6D7SVq4jQpAKmGPB63jPvDrZN8ftFQfBSU9G5Ufw3RidrSdcWroYp",
  "key40": "5a7uZqXo9YZGFf6EN9HctCs4sH76k7CwLxm1hGFWC6DooGKEQ7vdVansMyLhUT9KxgspyYqAP2d5yjHVb5L3Hqyv",
  "key41": "3zvXtyUv65W1q3rFN84tBiTHfnmVCenGzCuUYjExh3quh1YVoiZ8om4nEtGLRUmSmcxbdApummSBcu7YeMNHdjmT",
  "key42": "2zJMGYbigMcoKeMLiSLtVbVWH2qXSyWS8PF8caugnyxe3SsdY9CwAcDsmvLNnEvFtKgNgG6SpA5dvwho9CteetSn"
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
