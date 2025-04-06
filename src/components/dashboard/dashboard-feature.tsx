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
    "4NKaNVWZN6gXxBMnt82nKnwXSnZRcsUcjzrFJCLWTWDLLZn6vwSozMkdd1DForcVXH9pqM383b1CsPe2ntxMiKvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LxruxoahqbfpHtHp6cSJR9sFgiqNLhV484pFpaAVx8Nj4mLZurqFwsgFZHwwZrBb9vBiqP6KfY7dk2E4jtn4YZM",
  "key1": "3S5vs5i5mEGRkzF72Kx3kaStvP1PpxwspJTecK5Cbnvc6S24nAwtGVC2ukLwYv5RDohw2XU1YPBGfL5gm6EYPM9x",
  "key2": "PTdtnLHVibkPsbYx8ESvQxT1ZZM2KCoGC4eyK7nS8pcSQfTqVSAm73Dpf2FYZpipuDpeX1YnQka8NnHADZMeLch",
  "key3": "5yPbcVG5psjfn1WKoVeseBZVjVGLtmFQrFdbC8SFQ2GJo4NgeZdAzNdwjZmsyF7B26AU1vq5ArqsRTMUmSBx2g2C",
  "key4": "4YdYV5r1AnQ1tzHMFvmN6fEqwgmQNMTtEEMxyvcStVjvxUW4HAgjmE2rpg5PTs5YDLbG4tYS8gYsKjtPjyZP4WDs",
  "key5": "2vtUUnSjtARJ8ATwrATMMYHmWkhzZcMyPzeJUJh7wZgwBDK46b4VsBwMT2jsiTpoYYNpwhWb6WVHVKKbXCxuddYi",
  "key6": "26rXtyndY4Hh3JwcTEBcgU7yewfAaNsRAYdTmRddjoceoEPiKB9Sc67EcKR9tqLvui3VF96k3jsNQ4JMBqJsWEp7",
  "key7": "4vbLsUw7m1b5ufsLqxvSTUGgzRtFTeeeGGeMqbK3zL513ECX4FgSAaGoBgqTiVievBi24g7UBriQ9jL8tbvRUz1g",
  "key8": "3pNWpAaVAsVVuqB4PgRtodrvFW9NXrM46ehwwhuBo79y1sC6cjvM2ihXq6Z8gypq2wCjL5b3Btgpc7hx29qiDABt",
  "key9": "2KMzDf8LKwWcqg4rdmdHQqFNUeapzZDJMs7Bi2uzp6UJwAewC4xxcFAPJswG7JZAtKqq22kzxqktcUSfZQ8TxMgT",
  "key10": "2GqPqc5g8T7CCR8LmqzbUQFVfmhWAvByWXDKHkVQAKaKBejrFX7m9ykVqXzMh6MSJyvWCiwKYtzBvsAPRNPSmtW1",
  "key11": "4oQk6kSFhDZJcxp7BsB6AvGHDzdpioNKZGMFdyF5oZbeKwLcQFQGYwxcYsVLgaK9Q3VaJYRvThjzzyxEQRm6kbwW",
  "key12": "euahbk28hxVXZCabXrc1NymMrAZBaPB8hFwa3AtEVnFsEyuvFdEzjAeMGnkp6u2BVGUNtQ3xasDmJLkxy6eDiKZ",
  "key13": "4VxCn6Hcv9gTKqauE77NaawNUnGeKrAo8y59sver1A8MqNUbZivtrdR4bxNWmY6xF1kFX1H7vwweYBruXSUdytAg",
  "key14": "5zGqE6eTMsbMRdJFbJRY6PdAdSUfpLwYscPPWbWKybufTTbX38NHmkUUoLm3Ac9hXKjJnLwzQpKTaSYBpy8x9SYZ",
  "key15": "4eQjY3WqxGzzthpRniQiZRw928LY7gL3dTHFA4EFqMSzMwaGMy9pVPVyT5kxbj8wURmt4cwM32GtGX68gneUch1P",
  "key16": "2NChyutrvHh8RXY1TE3brrBwQ82P3gbZ9E1SpuodsNfvJtrnQrkjxZsRp8RDNhd2KKrmh1ZtzMaocfTJQZ1ivnUG",
  "key17": "5FyGMN7R52JHsqdWmMACMo2EkA1pcp4BteNmZ87uQnDnbEatuh1mY6SEFYxnfMkFLyPGLsNLbGRsZJ6yFGbf28Hf",
  "key18": "puT3f7dXvyZqLD5G3U7Vw6VKQNBwbYmDK14L2g2ftZYEfzCe8xcFuGcSkfLJ6CZjvRMwGsck2op37a4VfizBPGV",
  "key19": "5BWw3E7xh7d8ShQpywidBnemb6URhiPVUXiYQuhAj2nWYSSz3FTjxJ8KappxiK3YKsdnuc2cmkKMvrjMjgmzjcxu",
  "key20": "2FCANNwkdBpt3EXXqRTtoDvGs12wyqWH7nu9syN9drmW94PekEC9VD2hPafr5DMVqG1561jcFFRjrug89u3VpenT",
  "key21": "SWpCCTAPuux4B7Tp9NVbkr1uJ6Lhv9mJ4avjrodgSSMFxUMy42cXXcr2iYnudza1tSR8dEnq8TfjXtK6hDVPr72",
  "key22": "548ERERKndvdMAuvvavrSWk8maMRiGdWxXzFPUT7Bx4ZU34VnysW5FWJXFHphfoLfaH7gJbNJsPUfGzoQNFHES1B",
  "key23": "Znb3SMq1JbsLXE6ULehorozBPdgodQHn7yDK2jzQzbprpPQWFMPF6VHf3YG5AamVHK2UeJ8Y3B5hXCGins4bu9K",
  "key24": "36UQWAuBYKocdpZNR1wG9Gj8wPu2PSAGEXtLc2jQUtBXFgWjLQAXijPymckRaW3BZr9PyaeWbMq1hrQPiNBGPyme",
  "key25": "3r4fHG8msKwu6FYzSCTXwsSfqsvnq3GKFfMD3mnEztNxsFohTA2xNaAkaxrFHcYUBiF53zU721o1DT8Ga9dgffNc",
  "key26": "3at6fLCT2dqXEujV8dfsAvC74dje1jRg9yTx5Xk4qrYTQU1WpZSsGwGBLxUYCtAop3hNBguNE5j3iB5beHrk1tVf",
  "key27": "376fuXviFjDMse3bR6jKb1U4LNTD1v7d5dDcfaf3cRzcG5F9pZsugGkc73xd2GnneWrRQSgZMTkmbhYJVCJ5XvTQ",
  "key28": "2nXmmto4Z8RNmjkCkDQmkLVHcpiNY74LHCWEbac2c9pXk3o4HtmBJA8GZmRZsiQotqtpK3NUe23JiDso5JYbAYev",
  "key29": "44wcbYvkunMUjKNQVyFTeugSsh8thqWfNsieDZi1ctpWdRNXFNFfrpJyCqoG4tfGUR3VECUZx55fpahcymcmxyvi",
  "key30": "uwPYJKzRTKtzc7AHwgiyGuHTwwojtCNdHfjrMaXeyo1s3C9BBJLo9edrxvt8AiuJc3MiJeJwjSw9tok99Fsx89m"
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
