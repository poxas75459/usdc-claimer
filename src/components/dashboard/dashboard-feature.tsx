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
    "5PLoJyTKeMKV2DA2dLTnwFSfD1G5kNyfKBtm2F7VWJZUCH6PyJgDqfs4c8JoLiQB98rQEXa38GhBvxGGkESAU1ZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M66NGNR3YSeCrcBAFM77evvJEzTLJ1haVoU7pG54H1C4qKzuSDNg9Cf1KGWVJY8dexSLDYnMd93HVJpcq2HsUJ7",
  "key1": "4JVBGnMzPTF31vnfdZptXWjgzSteoaNNENmR3eN8HsbFC1Q57M2UvGomQxyRSYVnyZq8ieBQKVHayx28G9jbwDhD",
  "key2": "5AtqFxJenQywAPZsTHHcRo8dL5Ks749XoMPzKjvQ6BufbCx6oBCoCTaXLSLhXJUFCwEC589R7uRJS2arqRe3Kfwu",
  "key3": "3nRue1JKDFkYBZe2U7NeCyb334RR8M8WFBUAKJhEHaWgkZ2vRnDzVf5dCk5GaMEzcxuDGXcmB9jqMERntE31YbXC",
  "key4": "5xZJTFitHTwbRXHaxQrQ37HMvmQksEUwo2rBUna52E4bPJw6NTBjHGJD8m1aYxCnD2D2fYWjm2sVBJZQJHWyCkgx",
  "key5": "5fxrqZGBivyHsdf1N7TA5virUVQvByErq3CkpwL6Sn41FRe7BeeEmTWvBz9fF9att5SuPHXTVsWATjsEdMoBYiap",
  "key6": "2QuQMhG3etmTGPqxkJBd71KvEAaZHsGyWejdzJzMQ3SJ5phzg9Q9J7W7EW4M9fsL9x1WmveUaZdYw6pbTMZUaBtB",
  "key7": "2MiqsQpEKjGQsNmE1ZGmgZWvfxACLChb5GiSyr2FyXipQAPHncQgiSDhpqU6CsPGbouVbmZL8qxnxSp3FpTGPGuA",
  "key8": "541pXqfq1RW2Ed1vc4QkyMZAt75zrKhggM3K9sFYxv6QagNbMkCxbFjndWt7fAZ1gAuUgC9fRCqgSnjtFKCTharM",
  "key9": "4QHjqnjK3VNtJ92mdPkyfty1SCDqeo99SULkBnHp6344jU6QiMeXXmKtPXhxcx44XjW3SQ6w9jutFWqhS1xvDVSd",
  "key10": "55YJPq8iRvks9dvAz5Ye2entYs8jzpmxN72rXRwnfUQMtAQ8wi6MiGAvZZhQ5i3ySXh7wJbEWxUR1WKxZHjV9hAm",
  "key11": "4Q5Kd7w9gdBxRroqZhFAo72jCRFZ2NTyoryGn97Dx57uo3q436bBNWWxERAMFUv79A2339Bm483X7gqvcut9FxNN",
  "key12": "3VFAyaaPscCn1P5K9Tq2cgQK4Nyp1HULBGsVinFKzpjpipYt3Zp7oB58sFtQr3qPHenkQbgZyxp5pKFXBCxDam8R",
  "key13": "3jKfiBS1fmoeeZjX5XMq6RmfFfQhS87E5yMHUY3kNyQYF8UbZvw1Vr49sTZ5Widmjc6Nd1XNrZC91nNBuNpRGY6X",
  "key14": "4qiTkYg3cbJui4Q7f7KW55Rr2q9VwsSbRynHpim49U2PTtXP8cTHkuaniwKn9Jvgg1otLVYm6Lyt9jwdUcvMtRVZ",
  "key15": "5YMx7n7wcYX9ZBcBDySaG5se29Qbyd8xYYe2nBZh6eNStdkNCv3tvHco2K4UXV9HADM4kpJPwSGbWHAfsd9dno6K",
  "key16": "44p8BZSUh7sXxUZ2EvGSqy6hmvVRSUZz5Bsy29jJN1UsJ589pzWL8YehnrNPYvbdRhhWS7abMpdGaswyoBzZr3Wx",
  "key17": "3vBfBjG7qicJnGgySYnPAzXeYi4XkyRfe4aBjreyWqjGicAGdmTLNLP8Q6H8TywxsPXeq86nPqPQuVK9wrE5fKcP",
  "key18": "2w93ymk16LVjjXntVaZypGJ7z6YUJCgZvBt5dmJYa5cZXLcKvaPwKncE9wMvamsfqNyDqNngRAXLLU32YnSY4C6x",
  "key19": "5c12QyKVdvjBBcpuPGFnaUmVxp7Uh6Qsu1t3D2T7Kp13mBEg8vLxyX1pQQhXs4kyXWCUg6jF8Q5yQRSUnkuxfYiT",
  "key20": "37KoFPSBp3vKadru9wqJEBWdfRgoSrf7KqimhunNpt2rNncdACx7w12EbRVHv35F3UVP9JQApyKshEKnPNzrLPzT",
  "key21": "3aK8t5YUehwSeLxt3FPriCJJWWbtR8huv6mHyQLv246ctZJYbhpA6E77fVZfMNyoHP5TUm2wjRW1iYq1xz7o6kD6",
  "key22": "5J1ycBUZk6EeyKYSeV7yDteswoyeaUpLypQzPG4PvmPe6iuJaB7r5P8x4CBN7oHk8A1XaxTXcSpkyaXsVeVfsUeu",
  "key23": "3THtdZB4WvW2a2Heopo6qkcRuUx8nX7dN7TXXzJuooS7U7vGrZ8YC3Wca9aJBy2xP5EqfGnqU7GaobhHEVNiNgUQ",
  "key24": "5PecfcvUAqiuLLusnphsDnZhKw9VRTQTZCAVeR3ufLmjYe55dySbYHzb11NiKyVWKpr5h6WCPHbBtj91gh25smJW",
  "key25": "2jwrw1cLp5hQkgJZtDCUCji3mG48uBdgsETevShvgnv1aV81vbyB691AUaJbFVvPbPEvmeVgyueAaCDFpM8ayzBz",
  "key26": "vgN1QGfVmnF9vE2ebqCzWSpP1x2oG7uya6NidQWZh55juUB212imjAFqnguStPzHQcgYHKkaBLfGKfteHqmDNyg",
  "key27": "5cRXi3KsSTKcYRLzunU5efMSbwsRA3fzVJn7jr2XgTEaoskTTfi4AesHvKL9cMNhmjgG5kQBz7Zp7DBG5u5o5S8h",
  "key28": "2VW4rs2jyRwRAPU3JfqfTtzatyvupRzP5wGtJy2Sx4b4xHsNmk9dvrmsAkwpRb5eaW7CeNcfqAbuLYrrBR6MV8aa"
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
