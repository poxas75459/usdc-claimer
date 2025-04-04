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
    "4WVFCY1LoYi7mtpurgMnbzukUyhfBjrb72vr4SxBfw3uZFER4X5WT73kdF8jEcadCnSm2HxTkoNVjVXitfy5bRTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sp7d62wtNxMA8oavSD7ZAGSEZ4RKvA1ggpCU3vtcHzJyfPAHJU7zNuyvkBQiqig1VeSRbMLzY2CyzXxeTtXbTxs",
  "key1": "4WrJXt79XdhLDBzV8dUr9o4dCwFGvVshQ3deFgaJup331PzB3p7cHwv6KkYCfEe9hzaKebuz25XbTZXieHcknT1h",
  "key2": "4wKHXqsiHJwNZcXtX7VGmnomNuf1WubWA5otbbjbnirsSkFvJGgCrjPRF8tem8P188gTLCc5ts6M5MbS8KCvKkYb",
  "key3": "4MqaKA8XaJFKZzECa3VT9SUz5MzhEAvQBcCBCKq4EkwZ43Y7QcrQE1HRNTU9XjYsDGoh7BeC6JrdxPw6cELMrQGa",
  "key4": "3p7Vb8nNG5ht7MrSTrMcRmB5WpniiiPRpn3kmubzHa42ThmSsX8fiwbbqiH2b6TjZmRx6FHwQuHsQnRbo8j9TE7L",
  "key5": "MKurd5wAVDuTNJt2Zvr3MdLRDD5atFcaJ1Ey8SLdMEFZ5bWbPkvQybTNSAXSY6rEXkaXirJtcMiG6tEnUEiHPrk",
  "key6": "4PFPCEotxTJLgfFS3hsN9mhJJL73NvMPJmdsZaDwU4QZk943ynNzAUVxWsGQFHfQzMtcpf1t7tNRMpDe5xGwF3u4",
  "key7": "3mpUzoC7SyyxHnfKHQ12zemVNcZp3gwDQvzt2dSVQP4VuwsZnrMhyWSS9jeFyQ1EPpZmfk8QANX5ghSxN34JVrGN",
  "key8": "374vik36YK8swJn5CHDePyhyASQXxbwjWD8nWEgVAKuTUTavcdQAagLx48hvoeLZrysoW1ggJ5kU6XZXNrSE2DUL",
  "key9": "5vczZm5W7VLBEgVR5TT9pVts7Ctr654HuwD5GqEXxWMTzdkmbak6wTee1LemDpoZpTzXRri2WPbGWWQqZ6uwNumm",
  "key10": "3tEejWSbC8qYzWf3D37dJkCViCN1XiXqPYCwtYRKrUEpab3WtKCQ6nhp18NGLH6KGJi8skuFfbXuZnDHZ7H3nKpp",
  "key11": "5k9FGNDd7Mcvq3tGfK3gFtUf5BfKvvDoBRw8pzkpPiWHJaXEPrvMXVvhh4mk7RJAQV5oeLD7bJNVv2XpxEDi6W1y",
  "key12": "bLTEJysYdmg2BF2H9mR8VbHQzsJSCtGdzJkFNUmj5gh5U7wbydayY7QcRP3uFdqeXGUdRkfYQpBLvbbB8QE6Bus",
  "key13": "5HFgikiePMohmr2nTU2ZKtdLsaqZMXTvHmiQWnufaEBZ6SLUqYYdCepfHuLRt9C8FfMEPb1XPZXkHHYCvraGcsaU",
  "key14": "5SAT7TGzPiT5fvkqn8LJtdgeBe6pH9PsZpuGHpRZytA8u2cjcThmR1Sof7SZ85ozJGoNjdDn5pVjcJx5a17cFTzi",
  "key15": "26o466KUPjWaXtxvN2xa1shFLNSqJCmfro7Yyj7feNeT8mxvhrziZK16VcGWvAqq9zn2ENZEQFFWvbPiiJA1Jjt2",
  "key16": "wtzHbrhDnb67bNe7YtadKPwrZFiGYb51wxhmLsWrs43xdvcqNRcaDEs4315GBPinihoKnViyhP3gFs1rsZdeqqg",
  "key17": "PjR6Zuspur4UryK1UxQFdu8Ao3MgnN5HMwp5EdNhQ7NdTtbCseA5F8McypqY4Zp8Raz8DvWZqwoG4Gp2riQY9Ne",
  "key18": "fG1jfQqheP1GrGga8nBqHcBcUj1mVAymGPr9zQbTz9eV5EicJdgQtCfGEMTxvPQ44ERuTTqKp6D4mYk3Wf1Qsxs",
  "key19": "2jdbjQk8AT728ZpPMXt39AeojwpJxJ2gRt8iD5qNxqACMcjYxsdzQ2tUErLdHz6PzxpCg5zCigwNaKaNSg5y7yJ1",
  "key20": "3ZNqvVXvbxcNb1SNtr2uzBasZvNQS2cLu5E9uioUB27AqnWTzE94s68zqpArrF3r5rh5yLsPtfWgoYfB6Qh1Pzrr",
  "key21": "4LoSKiFyW9PS8N1FMeTRBufppFdohH8psV8taoHm3ceGbYMdHHJYX18VvZRQo9VRXdCrP1fR87KPpD4yuiBVBsNW",
  "key22": "apJbSP21yphGPuiaSpNK6ksJdT4tRsxJkoMTnYUN6RpDJSZ2hf1VwExjHECZ5vx8Eyvy9eRuCtjznqwB88nEkH2",
  "key23": "7H2Z2JTVRcVa1G8LnEpFwm9AHgsXi3kgyoToAxhx9FLRPwNNCyH2TPPQ8tAoL6ZBNmoNR1fhGgeub3ruQ9XqWAC",
  "key24": "5UB1uFGbdhQAaUZEVpzW6Kbjz5J1NbUsNSFT65xfLSGiHd6mHt9Pp6GBfvUcCFYioxhk3MNrshm2bscCEaBZugXp",
  "key25": "45nuMCyjQkoaFwS17DjVuYxBYtGD34P5Ws6CpY3C3YSHW81VHNyQG52z1DEiANB8cbg6WxwowvaAJRKpvW4WVbLV"
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
