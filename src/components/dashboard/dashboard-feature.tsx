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
    "2qd4AtYWbz2tAREgn6UTZ8fZhh77gAhBvR6zhqFiZHHT8UD7DLRZyJKJfZ1NiK5vkjdU6FoK4yx63gmJjjdW982E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zMH5UvTSzMfYd11UG9WqRaiHodXCWxBaN13A8bkxVoBoaG6JdPwiuDunfTHctDnrCXqJzbp65FWUuKAJKS3kKi8",
  "key1": "5urtUk2qMLRWYD5D85qoaXnNaA6udWk8e6Yr7rnJ2m7ztfEiMNjWcQH7YHJ7CcKhTLUjFMkcHYXYLWCicMa7NXTw",
  "key2": "4z17mysWPJQhuH1pzoWsu7U7jhkKZqzQQfXD7kuMq4CZJs9TLSv8i8zYebFNg3Xv534fnKr112sznMuVYqyvoict",
  "key3": "4YuViBxMpG5aPgEesqJ24EDyhrF3yi9czW6pfgEDFXVD88aCEhCHAntcD2voD6ngRkxvV8QB3S5xRbVtpMd2sCw9",
  "key4": "vi6e4CrGJimqGnhHkaLp6cLHrT73t3mzG1fGQSnm2yhVqW31233YmTNfFDEnPQJrz9UqxjdCLWsDYVb7msGUgwL",
  "key5": "m9gXdF3ECL3LHyRcTfg8ghDG4EKgQ7qF7UXPyCR5BwncmuTdZWPJTVfTtyCWN152LhaSr4yNLo85YDhpFe1mEyj",
  "key6": "3AYerKsMdjQ1azTAsNFSdpfpRc8pBnkfGSckCep1Ytw67arY6uZNQsFLYTqFyJ8SKiRnP9mFnPvdGyzbXh7jkYKf",
  "key7": "z4BvQ26vuvntsmcGdWjC9m7UqY5nRkjhagQJSdShaDBgAyf2CuDbGPPdi73SH7Q26pm5j1dCAFU7PERiXgjMYHo",
  "key8": "33iCQhiYMjKLcakHaj7XHVkRtVDaqvnJe8D5W5EmXaPwxT2anMXUJ4WFE7jamZProzNu8D7uNK4cc9n6dns2yHfQ",
  "key9": "5vHh3Rs2WSx14adyptweNgs99YsYpanTsMjaAYaHt9RqJKgXk9W4HhBF5YeH3QZxjbSMr2aDaSgvWsAh6ognjANA",
  "key10": "5LcwtL8QXc1xa2kRrwv9Z9ZbHRrvE9eMxL9y3AqhFZeLNMShyqYZYbMnyLTmAx92pjSU7ded6jUpZGHX6M5JYakx",
  "key11": "ZFMoX9De1NEMULbByNfFGSvWXzJX2Dt7gU2RrFn8x78KdoX57Se9eFFdVYyaE5vtt2nxQ6qRnJsx5E6qcvo543C",
  "key12": "5Q9yNdnSJacSnWYUzoSGeGBDx5GJC6e92ehin4HLQJ1xWX4scC7Um3kyTj64hYvitdKHw4Abst894dkWMh4ojAv7",
  "key13": "2K8DpbjcwW7J3gEXx4vazEw6hR3evtxxNmf4zpGCW4LQTW9ho3RRCq4d92jFwSGSat9n7rVzPYXaehrDskkzf8f",
  "key14": "5Dc38Br895Umat3vjYptzwvBKEoQ8ZxitRWYp84QBVxTfB4qtZqbPXyMUcaD4w7BXGrzm9PYn37LtMMdgEKAvm9e",
  "key15": "64JTcG9vk2s9z5JNMoXn16aB2J7ntm7P25ieGyPD2xWkZTtLrkrjsQwoS8mMAhaBPfpLbKj4vbLugKGJP6drJ6Za",
  "key16": "3ko9kvD1simFGNym13gGDzaF2zDAURDhvRmKBidp9eVfvekAk8PybWJfBwg63T9ksCe6RQ1kxayjnAUq2prRJePk",
  "key17": "5rpnyt1rWxvxNszVNCFtTqpjByVTn2gfwf4dZns7vCxrgVQfkeTRdV6napEBtKVFL4hcZyodajk8p4rKwratBKKS",
  "key18": "ugn769h95g4gCrC4psphUwEnZrh9k5Nz6UXrb3fMv3ZbsxgfEzgYNnWiTwGoNghWjufkSpH4SixRrEE7cG62A3v",
  "key19": "3unVtBHCGQTNJrU23owX3TwZRAgbyeycJrnoeQArUhWcMMfgUYx9FQcJ1Vt7fDT8xqfRYVjrjqzX4xxd7arBC8im",
  "key20": "4TcBxHz665WRr7AD4uxFm1MxYWWZ34gwoufhqzPr8amvx5Z4VKAhdYPSNAMPDU3xCGfv247EAU2tdQRagDufgSLA",
  "key21": "2Czjnaj7TDkvMCYF1cWWA1iveTmLxNrFW7CnGaSPtN6yNMJoE5s6kv23eZhULzQNzVvXjHmJt2F4SPcRpQXDfqa",
  "key22": "Hz7t6YCXZjUdpUvKWH4qbaXTyhdQA481BjF1sBxA7if6JtTacfSK4rkB2DJDdLQy2AxzyUz9AQgMWWFTL9tt8Sc",
  "key23": "4hD5BecS7zWHzbRQzQYiQbfhsR1uP6nPJAPnrJh87GDLWbgeFZgTnNwKcShForPgNG8AtrNfpydL6xhDPKasqBXe",
  "key24": "5EqmNvGoKGGXhSBzvsuM1LPWUk8EAUxBh4R4a6KMCx6qr11s2Xfb8dhsMYrhf5aWrK92cUg1QRsaQFVQRuceE56g",
  "key25": "3QSvvCyAUuxFXvUY3uabhM2kK3iMnxW2PNhWoxiwxX8jeo6PeiyKpBxfENS3yVnURrizXshujcnYzKbVrBBQrRiv",
  "key26": "4FmWHVS4hVpHzayfnX6LHrkGvw92MyoCRBndNRK7zRreMmb1cYBeSs9T3USWbkVij6kJBHYK12XddPPB1beLcdKH",
  "key27": "4ESdKjFLZaY5WjTPCK8ApEwU4t4Twe3Q4T9TRhyzPuZpxQoFbivfVVQzFFMSfLMeKtzsDVMJHc6fb4HmuSaubiDH",
  "key28": "5um16uX8ih4GXN2T6pSh6kEYDWRD8sVW8fBaZLZFrdQMkCx6ha5wLKp8Jj8QMYDL7NQz538VRfebzE2T73HUD2WV",
  "key29": "4qDuDgNBjEMpGuFkbCobrkgTzqxVe2pmLzA5RfK4S3XVbsqXy5CJ2iC6AXWLmbbe3NuSpKZwY2yjjBEZ4L145D2M",
  "key30": "4EzayruczBgSNuWbyTGRqD3BQ179RJFe6zHZYaZD9ojikoYrmg2snVjBNT4ZWEtWw1jhSexjsNpZ8G2Mnu6MFFq2",
  "key31": "5YTKDFVN5CiANjmfk17fDin3MJMvw96sQRtxRyRmGvzh7YRhcArtJ2kqTRM3CiGASum4LTDf68DMh6gt59UbvYac",
  "key32": "3ygSbZgE5Tq5FztM3gr6TYT1sQqTPD1TXNzwhyW8MFzR6XKQQXjGoYCjNkjJqobXgBHYJMqij8p5YQYPgU8uhtyc",
  "key33": "zAWaVerG9vCFMJTJCKQpTPdJh9N7mJmeVmNpjvdNavnMgaKw1fhbrEp1ycYAkMK8kdXXpBhmMd4p5XdajNBak2M",
  "key34": "5NBdApkYwmcc7dnpR4w1rSYKMQwwFSenYrnLFe6RsXnJp7d6RSo89wcvGxjCWFkQjMVRYwqh8hKzGYBiMWdXfpvP",
  "key35": "5Q9q66gPHZWxKi3rZYn9KTTtHAaFUD4LSyByQH85fHgwSnUPP8p8CK5dzqnMeNM8MXMWsPLtvgo3EK4taizC1KR",
  "key36": "3sMQtj9cvVsxArQMViofWm9zxUUk6bsCfYco4Fp16U9VThfXfd6k7fDDqGfyqXqGUQQ7dqRajSSdmofsuovS4MKK",
  "key37": "25Sq3o3ue317KwKWqV3XxUh1BhaVvFEHbZv2CQL1BGpGBPiMsH8cF8pBPeKinw15rL2gXfdYzMyHcossXwxo8QoZ",
  "key38": "3ZJCsyZPf7Qj3F3pGgMHfWEthAT2CQeo3bz496Cr2zGRZAKzT4V4TbpGnd6SvrLJX5jmx89pMTci8QWw7YoHUdbP",
  "key39": "5ExVASYiS3X7PuCy5f7VByCVFo4ZmffAduFFyq6GTSrHJLgFwgckWKDvUe6kCjLEjLRnajzu9CgB2kRdLobFLTmH",
  "key40": "3dwKseCToxjJgL64ceAg5BLoKLaDymjFj1P2ZbB1eGwJFBCqq4QP96Sn17pnvTvBu4vm8nKbToKCUeQpsVVisfuy",
  "key41": "27Gxs3kNXFK1iy5GSXmCBLoBa4AHFt2as3nfzrk9Zc5MoPCs27WY7aBxhY8UYqE9z58sXVRtXPdtYxFUeURvQoeU",
  "key42": "cRDEHCxFMRcrFwA2E5yhSbykoppfsq5TEMnYBcPNVhxNc1YsD7f675NxXB4vNuqA23fBd1gVaf3PaHSHbohAvCM",
  "key43": "2JYRB8RorFnK5swZ4D6KwJ9CKxKeZATfATwdAWGW9XDahy18tz4C6wPrJtzQEP6EqMaYFxDDviVw98YvNEqsjY13"
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
