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
    "268Fj5Kw8geA8zcovYuHE1MCEnuAdjrfKSTSMnnDr1SfqtVHNHQJitGvAp38ae2Jnsn5AQGDgGtoaznvnrf7Hebd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w95Rd2EDgB7ECRgpDRspKMySJ4oyjD79BEVoAfp3pqnB9ZE9RLNj3GhnE7L65Ggbk88AjPF1eFs6bqyG2CTPubM",
  "key1": "3pbZHF11aVeKXbLXeSZsWrcWHv1u2GMwVmDrn77J3ddhHToV5zo7oSz1CvJj7PDnLjqiN9bic4K8ncyPzDK1P548",
  "key2": "2kpmpn5Drz5M71ZF3NXK4FRiBCT1ACCwxASeKaSDamwgwakKebgEtCyJdBa7hmu1hZ5sNByY1SX6p3wA97UFEQut",
  "key3": "2pHNyVwQDE7X9P72mmnd6pzgUmJYBhfaRJVBxgXqPd8z1v5E6n429NBojC4cnGb4CQP9qTYRSAsveugAdApNssQr",
  "key4": "2nfBgxW7tkgueDyfN8qPrDaN4Nr8bFRj23JeveME4ZYSWwLcRmS5BkM9XMkh5SrZG23RJ1oy6KGr1vX5GfYEr4QE",
  "key5": "vosNzTPVLnZP3Btjhxay7QH2zQUERYTkug4F21wZZN6ZpRHuvvc1whQ2oZ2XLr2a1zTUADonTjwHHT6g2Y6cKZF",
  "key6": "3YbknbMtajZxkJ7PfwArYzCJAj5R7vQUcDXCZZqcW8bjmh5HZmcF94NiteCXqyS2VSMMM4dukn2NNnq4SckWwaSu",
  "key7": "4reH81f15jdhPG7SBTDeAd2rL3RUeqEF6x5b7nXXdfngrD87zUWxEeo1Y7nuFicyktvnDMCauybdzoupiSFa3JWw",
  "key8": "3JHFiwSDHkHABkRoqE4VfWtRUd9T4358QXc8X4FEoh93pxeWPANVw1kuHmRSL8Qp9qDzwbnkEF3E289YKV6X9oUz",
  "key9": "3FhTnVPNFGDAZYGYjY2j6hCfszgJM2Thq9z3iimnqUndvtcevKJLTS4Q92hNSL1X2zT8qBoPevJxkbchpr6yviDW",
  "key10": "2A6wWHoDTanJuUJKtmZVFpainQFBuoNto24j2B3X3frxTxyXTehSrSxtptReSTNgSvTqrY4pbor2GsDpzfNRC6cd",
  "key11": "7JsBKKEi8JJrpT7issWMXA3G1XkkHxsX7YK9xkn2LcYfvECZk2r81myBJQFFqrZVUo8ZHVLJUUyvF7AVco3b2Q8",
  "key12": "4vXiWQr8hwZyg2sgMbW1YbNu51j89N9x5K7MDzvpricNoL7dcyuKg42pSz3B9wPqrgjEDQMkjjAKwaQxdJRRo3fC",
  "key13": "3fHKJ9vhbPVrCi6HzUc4iew27rSLNGdncmXarpYk9fHc8WWbFZ7LQQ9QhY7Kxhy8Na8QQHLcFt6r9WqbmdBskwvL",
  "key14": "4Xna9V7BxF5ANn5j5naHa63vMpeXibtqRXMy5FHUBrHET7kg2GxAsC1JvHm1NsugzmBVdUaMgdeubZ8bgG4Qj9Yp",
  "key15": "2MdNEW4oDazJGa9LLKQeNA1y5UpqQ6SsHVEuTZseCDSmgeHp9jJvQVFU9eWFxDMo1Ds79GyYvCe9acfB5Cqt9C1D",
  "key16": "4JqVMfugNvjX4mLxus51gWWZmoQXf1fBhk4j8yywnXee4egJRrKVEVibNEi8duE5MHvBVgsgA5Lh8sj2dfigLTDS",
  "key17": "zrEkd1XPXpojTGyk1cQrAreisRbrAL2tD7xk5jpAsKs7wL4s5qqjvfe3weLxVTVJJPPKAnihVQVdp3tLofVxaKr",
  "key18": "2kULwunvmaBy6DbaPWvjQPfCrc8SMko1LX9ZskRuJgEJAeTueKABUCaKPkeCxsvSYqgGDL7QkNsMcAAbZG99z2Ca",
  "key19": "4kYZuDXFkN9ajK7jjubi7eTshyh9EpvJavjfF35EkvZ33zAJhLqo9B2jB7eTgdcweP9rfJpY3UqJPLgT7Y8pncU1",
  "key20": "NY7rmyMPFtgbEEQQoy3UuwPLL5RLAkkeXtPpU8tTLKA1zPEoT9EnLu1iQ6wJJoCJMmMzXUh7Nd2FDLmkZh1WbUt",
  "key21": "crjwysBKR8BKLVB7c7rc56viXPmaqLezkYLE5ZZHdor8MmRsLgkVs41XYa4uiVNs3B8JJxuKkLbem7dpHuNdbKr",
  "key22": "21kArqUwL4Em5XKhrVzNsc96pTFmrhWJefSiVZW6VRjqmV1tgFgyWHLKFXofxQ8Cvwwf773AF94DVc3U4sSzfLn3",
  "key23": "4tVGHnhrnk9gPLZgq731a7Zv2J4ibohrMFGCRvVWmmb9S2V2f4oA97y9NWbzZSeqxPQkHdSa43xKcvZGsSF1y2Zx",
  "key24": "4tqQC2fFY3FiEqkBGkJ7GxeimyhxWViyhaRLXkPmqvh3b1a6DinNw2RxHuBmmqtZLkF5NUTEgSPaqocBExo6epGM",
  "key25": "462Az5ZkHyeoGgrwocKLGybuaYAcG5ucTLywgi9Ex1AK9zKyDnNDb8yBb9NPNjia3rBkp2AF3Bo4zUTatpyGC1iB",
  "key26": "5SuQTVpLUMpBWS8T4DE7nDUAaCrZ3HQesqsyCaNqB2m1eCiMzQS8TLkBmxQGGiEsJdE4hwPd43y2Rt5QgbxxVKLH",
  "key27": "3tL2T2NsnaYeMWMnS3D14NTQCFDHCf4ZMFDvzHas4DBYYmy9de1qHb9cwCFGDiRiSxQvhrkggHqUgAa24tkVmYqf",
  "key28": "dB2SkjxTCkF1VrFopLADc33oK9M71nbS2M1pXDsa5bJEtHLycR2Rb15NBWPVfgpTT2P3UTKUsw7RzVtFy4wBAD9",
  "key29": "bNQJrtJY5osfWNPrJfbQrdwC9cgGMvujWtWNqtyq9B9PmR9xqVp8wNAaiVwgQCGhSpCExRUhifK9uueT1egpJGs",
  "key30": "63PF8JRprfp9Xj91NNCy1NiD6AjZce3kdzpcGpiCNfR6UHUSXohRJTKEu7eCkrv3sySsBZJQF29MbqVj4dF7HCnj",
  "key31": "dk1dTeE4h5KAtkaBoTs3Rc9gzQeb4foCYvhekjUFvjFYAqDXMFMbqrrdBUb2Wp3yNe8mGjBXdPNxhxTsrouAJ4E",
  "key32": "4s9oBgBfSRs3qZctbyX72ELzfoGDaLn9dtELtB9kodEKYLooNv3QoCABA2HSxpbgs8u5L2Uudm6HNvRqV8fJfHCR",
  "key33": "5vabPWQMTxQBVgWhv2RetSp58BpJoK6P573cyAbJW1eDKw8ZkTNHwT7cQUQoZZVUnYJyM1C1gB6m8kYRjpkjniaW",
  "key34": "4gQeAsZcD9eSW72cb4ZCh2Gw4f3KghztStNbpHpAZvuqJnR5Y3kDRhepParsEXwgpTGGaQnVyAY4Y2v6NNa5k2bJ",
  "key35": "5t5tzUL6GLfkXFXrxL54xBPhzKdcK78W5hm2KcV2d6EMtK14ePUS7XmUhJ3sD2bzVHvAEVWonyHkUVUPwAcEuQ7c",
  "key36": "5vLDSBtFgMgfeF5WYkchyduHa2URaWAWDjjoE3SsmLmY1Tj2uSxLpxh4C7JgQ2w1Aq9FbkKnbXuGPcA1n2BcSkxw"
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
