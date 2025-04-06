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
    "Q5cxgH8dNpQETkDRVRKt4W5WaWrstxV1T27tz8uTaM6ACiLqJcLBZYFH6LbREuU4DQCjsWeuHc5c5tyGm78QH4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QqcuFa1yJcDgW16nQuSktLsFtGRcVqspPiP6noP3c434FaK75JCRUmoNrsQqkZXR2b4149PkBTMEAKjLeAGfBuj",
  "key1": "336nv7gn7zeMYATBfbrN6XtgsGQWfesuZroVYEuCbpev974zWsvTG7DG78mLcLL837otiHkTHj4s1mirHDWiJZJe",
  "key2": "hKUrAysqx6tAX4Vfd2fopUVTsbTLWBobL8tJyFwWCWGrtQjzSQJYZsdiwMNvoqz1bGuCjgxPfGYHyaKLgEwRFSx",
  "key3": "2qKsFV1ocrjgoFwiTgQYBbKMM3cihzaGExYMaef62B5ZB8cLiHWhzU76t6yYUzWjT1DFDogRUDzKjFkymd7Urw7U",
  "key4": "3LQdZMW7VhHqx28pSWqAaFfjgJ7N1dH6vhYT1xJjLjqYygUZnAUQDENzyLyT5Myh2ptreZBpTcWeZSsbF7xF93rx",
  "key5": "3wabwk2D4xbZng5SZL7D5oPQpgQCjGDoFUN8s1gDm4P5DMvte4PS4JtLjGtrinYWo2ZxKn39CCwu8j3Knvuf2Qxd",
  "key6": "4kn5LxzG3dgvNeodJ7zpMqgWhnumTT1aNDtivJhYo62yi2ifrRZzcK37qjJi1q3E9UuMjtoqvzskrUUFoDC7qt3w",
  "key7": "eSfxUtjjww6zygbVWskTBXYGFuPEYxhKMyTdM9DGs1rkMWeZjoRVMWMThipYByPSm5PEo26jgSyEVNUMPtYHmUJ",
  "key8": "2EeMKbLDY5kNydowCyEXHzXKe5WUW9Pf39on2ZJPjeCa8k4Taaf6BMapCVkJkWip9weAj3R1QRxFt1TccGho4LjQ",
  "key9": "3Qg6SLgKudiHxn1LWw5yGP4uFWnqT6KMYRN2ut8vsTmG8hQyr82cNkUvDafwiRtVK6aexw5nXe1JXWja1Xc121WM",
  "key10": "5nMvKnmmmiN6T6fnashBt4nct2TY1cAbsTCkUmLJMgubbv783gra7GZmXjsj6jeL3MsfVA9VT1akPfKSSyWf5ykh",
  "key11": "59PsPW348VuFb9yiadX9RxWVV1RPANwikJWXck81VS9bwHxqzatqMqs1hKRGKypKtkdxfbQKgCzoa5CNtyqrneSb",
  "key12": "bS3UwTJfx4X8qbe32mEjsCgZcS48SCvj6wsqXuq16Zm2eVptHi1At5DwgpiFNvQiZPwabgZJBac2xN3vhEbwLqp",
  "key13": "3PKWeS5YfYSHKqbqiCg8Kq3gfskpMx2v9a847jvgEJF5xPjh1NvgUjT6ATXHRzBg4eLfxapDcYHbZNMa8kwU7zx4",
  "key14": "29yg31uEHzyBUXoY5dkQ9CrF6uc6ggEkFKguaW6HPwFJqfDHbrLZVXtCpNrY7d98bzAhJ3Tm6t2ybT3ze9AXBjdg",
  "key15": "2n26qwdRLDddvYHHbjLDxwdtpuCLSg18GrkqebHAs6C7ECK9134YpLqGwqxkarVbpLdxNDEnU65DCUGMzcC2SZf7",
  "key16": "MUULPUioNMHRaUTFDebdpaV6onEGFA2gzgA56kxxSd5QtsWobpvT2EWFbjzHwHgZJ3bTPPQT1BT635eVrGZNQNu",
  "key17": "2zZf3ApjaWw2HfDKsJzLgidNFro1bYt9s2s5UNuJRHz3saoW4GSefNzhJZFhbegfnWzdgxb5zbwduDWcoQ1yCJcs",
  "key18": "32JJBF6XHWZNvZhjY5WYtGodM7a1rAdjiNouLwJjh8VtsyEjfbvQEyrW5YNwvo8gZsQkNMbqz8xKe2wKePX75Cu7",
  "key19": "zV7NeabPqaZz58CtwgBg5DVTG7WGdXD7mwNtNSRvu3vvs7YbwUWmZ4haMYRZrhoV3bTSD2MuzPLPkqDM8gzRjmm",
  "key20": "3iyMyyyXo63nLijJaPLzg84EYR84p35kv3pMQYq5CwkCTj8kCH1V2NKTVYZhdEfADZALFFFBa4xKNb8qP9avouRS",
  "key21": "3P8sdRBTVUovoFj4fsTSFYTgAgZ6vKocvPrDLipL4SbaR7dnpMKJco1qe9QLPkcbmR4Hb2F1YLnGke5ykZbA8m4y",
  "key22": "3keCwnLfrtw9jfHbyG8W5rPP9wyQAPLe7MbPsCcSXbEJ3xqPh5ipVZt6F7La3DDHyFHB172WN7a43Dwaa5MwFkTA",
  "key23": "5EVfnwabR3yafo2A9vCPHMtG29yUCwxVopHaEb9bebYumPPmM8vtUApTwtTvgVsKLDGzCgXZ8KkzEBTMBHATEwAv",
  "key24": "3WQmZtwutZVXkQaseuZxJxG2XAqxkhjZCCKT813fxuCudBK4chkZxVxhpmHyd8G6R7vgAN3bXHVDYRcKisvtBL9Y",
  "key25": "5f5pCCcMHaeBogpHXXvk3jmTkG7JyHfHehjAGQEv3f91bxa9vGchVymFjg4E1Jfdsx2P5DbH7o4TGES4d4mBkRPG",
  "key26": "3uJAjrAcJNmdPpaw66vw9tdfpwageiXKMXm1EGqvu3XXdFPW8FCyXCuVefAYE24JNnaFo3sfJ93aakPuquoPJr8X"
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
