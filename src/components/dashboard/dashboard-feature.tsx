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
    "JSF7oQoS9GxVeGXPvuDDWKiGgARvZhDKtMinvSuDBf2W4cfGvhbknsU3SW5ANyRaYfsfoVkix5YZ1BVY6nFiG3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vpUdkjLAV8JoYV4wZb7DxDqAVhwYp2pBVzdnkw6U9qazfZg5coAdkUww5W7XjCqa8sKRrE6nLNDdSoHEraf6Uno",
  "key1": "2wqPSKwrfHgb2WxkCWgo3sHRPwpwXVmxc1k9nUkAzjBuqFfjGEoMVZUAkSCvtFDGobj24fYqYAaPL8bDurRJKuwY",
  "key2": "22SzZPNY6stWFfNydAsXuppcyi2S3RyUozgBZ6PJj7CeZzccKptQhM71HDct4EhK4dqLkbucjMpqe3qjrYxJ9kim",
  "key3": "3YsiJdFCtuBZXZHQbZKHrmV9gNeBqBo1EufQJA4aimgw33JpXamxR5mVsv55LRGcKuJ6o7Yp9Hi4vRDxqYTpv4v7",
  "key4": "22wR1hDHvgWja5bXYFqyUTYWYSVnAiTAjBg7ms2U4e15y72eEMdnG9yJAmz3WpVnodVY1qEkBY2LAc29rwRbuMNP",
  "key5": "VQTaQHcP4zsNaNUEPrNoJ9a5waCCjuL6NdjcZif6pCMVxLXaavfNQxbiJjbUYvvmskJQS1nPtNE3Xn6PnqWeddJ",
  "key6": "35z7cNDocMuGucppSYLny2FCsKiofkCs4sr9kDwXMx24zcxvKJMq9pHjCHrpDDfXZZmd9Y1LYFcgA76riV9MCRzs",
  "key7": "us2nKMQ4KtCCEUwMqhCBYFGbQBTNuEy46Ca5gFUsTvid2NobtFGV2p8kBnSCoQ2voodTPGLE2Lq6sNe5atP7ZP6",
  "key8": "2YuZWpiHSoANrh8FWxQ6Wd9QHtqXkLRZT5saCoc832oVMyXbhRcgJZFsdCdqaX3JcKSW1FLbE2oeWKfSH7P98y8b",
  "key9": "59sLHizzULLoVPgLQTWn3Fjy7wqb22vVqNmUQNCKtrZFjuPWNDAKU5gfw5A4Pwka9jKY2o5eYxNpnH5UQJnaba5v",
  "key10": "sYhzH7rTTaEk6y1eAthAkjKfrSkH5nGS12VKVRziEtNocfDYBdwUg8q6SxBtcDsduH89D5N4PTC3ECN7gZHjmRA",
  "key11": "5HXhrawZyx62ctzVkUAgXiGHHvduBZQd5ERisKhE1ERkqRSLf8ucHt6wMortKUXAWBNaMKbRaGecJkzd4AgBhZ4H",
  "key12": "2dozNcrPFEUeNT4SWoLDYu7tcqQyK5YEZ4s7mtjMCpzro5mVspDFPD8kEB2XE6zfEiyKRqiicJwAi4Wnn5qmFpUa",
  "key13": "2zfykXsQDnkZfRus6XZbJPhPwhD9XrMyhfAc4DBsiAfFnD3XNBMfyv5Q6H8n2UE3UPrdoHeK5X3G1R2wcXHHqLja",
  "key14": "4ewFzhRSRaYU7FBBjb8dxoReL2omLkUSYFeqHSV4nnY71LrHiREXgxVucmzZvd3jXPvkK3hY4w6gXfvKcv4WQHcT",
  "key15": "poHEiHmSFPPuH3kjqwFgMJMDSuLgcCuQoBtV8LbXgcCq9ycXh1cja4AyJXtKEQ3b9CUr5cB5o2eeLrGu3azacbM",
  "key16": "YzQFD9VNcoANb1eyAmg8aP3i3siYA7izTYPBWUTgxGQrJpPBY9d5aGsQiJNTr5VthatVD6DQfb8z1buDvkqaEmE",
  "key17": "5rm6HYc9BLsEEZjdGrJtHh47z1DPUU1SYBEa5ktSH81ww54TmoH727WyukCSMHp1juAALadn1bxFfiC7JK6mp935",
  "key18": "2Dzy5LBZK3tSqioo23TeuPnXVcjaaStLPgchfuL8ZwXAtaxhwP26rdhEM7zQzqkreGzzbpVh6hi81QnMPZWcVWWX",
  "key19": "4zyYMHek5iGuVToUiX7C9N9C2VM1JLpYfQRt7PF2gwg1xknfc6AYpyvtJES5hVebQxRkTMFuJVqnAio8N6VLFqVc",
  "key20": "5G2MzPKFuNuYMZZL8DbTARh28NMrGyCFqBDLXt2h2K86gaK7cFvUdgsdeoT5uzgbbrsc5CrgapJueuX1UsSbcSUs",
  "key21": "64HgeQxZX1pqQLbiJoVBgJj6MKJqEsY6sVTSdUFBP7YjmCiAQeR51bedbe2BsjSssGXvirceMz7uuEm6pdWPNij1",
  "key22": "5bdqMPBTHsYGZ6j5soadxJAEGpiKQBh3MLhP6L1gCSxGbuCxbH7yYRh8Ne2SApcEPFGXCRBkpg1ojAo1SXmxjvKS",
  "key23": "q8bwDoxC7yEs4uAVe4Zde6687xGPaYsJB3eKF7isSuxQsEjYi8a7He6rnPNPvd8bjDo1M7Ji2EN1wFDyZy1Z8bJ",
  "key24": "3cw2mxoMZT95Z15MMJCLU9QhHrG75wRdPvqsHbB8NR4yzWFDgZgC8ASW8ZpCM5SqNAZBKtWVek12Jhi2r6nxVeEC",
  "key25": "5624rKy4oewMEdA276XnJNXcyuvZqA7BxPFNwfCa6xxeWJkyQ5NeNCzZw3nrgz1QLmKHADxC6xK76YDvCGCskkMf",
  "key26": "2g5QZEqYhB4MR2tkn5KezAVG7ogAXdW2xmqvFk6Ch3oUuKBS5TJ75fZfYVvZM7UMpRbvuagPsFCrdoLHtNvwZkM6",
  "key27": "4JAtr112zxfAyyto6rsKo5FWEPWEznSD7XwfXHs69Hs8jGrD4BB2roYw9XGM1BjhGdUWWfuKb24sQfvEAwb9z18x"
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
