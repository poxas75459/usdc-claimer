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
    "5E4mnGwfE7fKqAUFM5H7f7f6ph4gdmVBr9kz2pAwr9phruxZhuA48mjB4FVPmsYT2Zqn569fwhJtG1rwZK4WYEEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZmGu5BMUspN2MrXrKu2qEwZixodPPUF3kNLZC46LGQpUDaAPSgDgTeAztssALAbPxyCmsottXX8KohwMuLNWB43",
  "key1": "4v114RX2kZ6SJ2gJMshHruA7p3886UsZGCN1AGFbWRfdomj58jmspN9RANHq3nXoRfLcE4LvKoZBySGvKxJR2GAD",
  "key2": "5bP3cn2cR11tq8fvdhpBYZd15x532T1uM9SaMvMCr7L6a2NSmihueJUDW2nyyYRXworDk5ebynswURdeH6Lw3whr",
  "key3": "5GEBEDFyxGgJyUEyjN6JGgdPzTqedKPZ6BGsRurTvmz3djaakQ6U166PDrKtnsVosGeygQeSU5Qpgj42ftg8UckM",
  "key4": "65oLBTY4bKDRCoJ63AZAZwXxgHmUJ973NyhXQQLBkix8WUkCoohmbsNfh8JJKQ7h1PfTaoVE6LGTwkAESbdnkdQf",
  "key5": "2b5A48QijpeJqSZE8oQQma7vPQjtr1XPnEkihfUJ5gtTna6htjAJSAbQ2hzV3uuqnTPSSrtyoYArvigKUYSLTwZJ",
  "key6": "2s9ZoTfD4ZXMU1s6s8A72pqZ12bDS3cgXng9Gi26qe51WyzhByUsyzRzWq5GCZCumxzhpjiiaaCvnc2JjA3rX8SX",
  "key7": "N9vCSadQSy8orBEVAnJdcKi2FMpY7AhVZ9vti9oD5yYEmV3kNzZrhRCTYyEHWQWeWrw6GN9522WjEVGw8tE6DA8",
  "key8": "CDtHhsivSfrngK8xg9r7EdCTyvt9LaPAMYZBMmtK3u4wrQncUhC62FduYwKJ71ZjTSPu8nGYMCoDDKmU7vtnhWk",
  "key9": "5Pg48tzDpSwT9GtAyGBKAkYiHZYdd9WzYaaeC9pNLjgaqqxJCUKuUjCCbf5TM4zsoad3D97dFQZomNiKBnyzM8qm",
  "key10": "55RG5VP5pEEPUXMQZ6ZiP1RCchx3D6BsN9R6kUyuMeFjmzicvaojKBF2Zit5dXhMRvMpez1W1H2xrx4XFYoQRChq",
  "key11": "i9fR1tmGfpxGMCiP9ch9CfDxidM9iXirbvH1n7sfnWBQpShnQPA4fH6xjqnNNZBJDjyKV6vD3VEgGkYqGGD94MH",
  "key12": "4ZSJWaueSt6qd4NjBixzy8etxfCqeo1h94EuxXGwVufcdpmKFAYqPK74pgb8PQffD6qk6EhoRtLK1o5qpnGQVX2m",
  "key13": "4kUGh7YBJqrZ8pXRDtT4jdJ3GHLBTo6iao9bwTaVymuSpgXWhsSbCNVdZFEG9uvjy4X7mNRQ17vhG9MBJmLuXvDY",
  "key14": "44GwnpGy7W5EwwXGSrRjMvUHSvk7SWpJiHcb8H1wKKKKd6JqE6m1GnR32qrF95WhTgegqRsmzZKPjJ3pmDq1sha7",
  "key15": "3gScZa9i35bkXvwF4zJydSryk6TKCwmYVTUaa87SixGgLGJ5R9UvfiS6Q2hsk9YY7AQhrWLhNVaSk1MKefFBSJ9C",
  "key16": "47yPtsztx6rNTqUUwebunQtTjani88qTTNgYmvnwr1hVvvLXEm5J5dqZmVNV5QwJEcEFnBvk3tY1MRjHTLmAGaX4",
  "key17": "3uTzkCqFRueXbE7SoXSu3KtCb5GqBuZMjSuTrENbbMyhDqpbaYz5a24U5c8R74mRMSPWjzKXqJzBi4JG5vVtpnbn",
  "key18": "4eLq1w7cgRxbgeZ1uskht2fYMmXCrRzypSSyXMJ1nARohNYxrSmmR8PdSR8bssdKSVx2keNYA6rDmtVhZp649yvw",
  "key19": "2sww6DHYntxaFXT9jRQ2fsnULaC2z9riXHGo3kLQwU7EoP3CckMUckjupwNcjRAC6JrXP2Mqq9GWBqfXVczKb44E",
  "key20": "5dZ7FypE1Z3jLyEsuoi9VJwDY7sppdpEZtYivVaK86htGuahXpZr3qXScXZakGti2KgUZq7USK5f2wiMjanEo2HJ",
  "key21": "2kWSVdsWq3ThxYGfvsdnYV3Wxbd8FZcVwH1mCjfqBpdFwmDx4ttKFaADfguv5JHfrq5RrKvapFRSkmWfRqDUkCDA",
  "key22": "5xYQi6siefmhhqzigcqHEYeipxWhqzmMJcrQA2EUz9SsLDtJpZ2mHQkzCbuuLbtV9jjwt6i7gZdkRKUMugND8i1Q",
  "key23": "3v1HERgDM6YAectDEMo56gn2EZ2JTXZALKY7k5VGvYSF151SKRozXDhBzNU5UaDHcvxbKzBqo3LiiqYPrPaMk4Yu",
  "key24": "4TzEZHD4y4r6bJP4MDfyvvigQRqsoQrev7R5W3WXgkS8D5r2fpNMPnqDHHQprwB6JDQXarc91bDw7Dn2SfhwijMf",
  "key25": "M9JqmixAp2HLWTAV1dR3FWKQsr6oKBbe9BfHyuPsKXWUdWSLNTY6DbY35nC8RbCPQD3U2mCFkW37z61JGhmhuG5",
  "key26": "ihUMPR8G44CFVWtBozBTbn5L6J34K7yL9e7HKoYiMMX9xWHb6HZfR7LVoJi6NVV5hA4NMiGddDuFAZBcqxbPVAL",
  "key27": "5og8C6cw9XHxC62u371gbdMWBA4sbtaaJ5d91pKjyfSUsch4pt9BVo3kEjUWn9NdZXUoDDk3yGZysKtuJ4yF8S87",
  "key28": "5z5NEdAdCLchisLsa8dxba4mrFbuFMN2LxtJ6jQVSnjrXdyAWPBzSZwtZm5AHnsV2BqRGvBrJP3DwY8RghCrcSYJ",
  "key29": "33oKYAv11w1aETgUYWuSxCUk7bZzWyp1utaZpsd27KCibmPz6mXJHpkhqPFhSUhXQYZCYDn88545KRYGAD4qYJbZ",
  "key30": "4JnZDYjwQehnyf6PjPjyiffXSa9hStG574GzxCoqTfbVUh9VXjqnLTw9gtePZAjJJye3w5eaLvksFRxiA5knwfYX",
  "key31": "3uRQh3cAw1QFpT9tVH2Fr6waRm1NKAUXSNEaCjrqdXbsqAF8p26CUQ6gFhQ5X1CSMr98s9qJMqgmuQL62GHhhbxC",
  "key32": "4K4LTNEuMMDV9oZGeujXJb9itmpeaRw1qnsBbmKHRemYivEad49xsr2sZrD6ArvMECtYqkagutECtTCWfKTjuPyw",
  "key33": "DDMma1pnRBGuyEQVXFaPeKDe5EqfWiXhyEoP1idEe6ELXtvGjz1m98ZRs7MVcAthfjekUdq3NYW1HAsk8HcTKpZ",
  "key34": "2M6SzX222AHuELbrB9JK2x1tQfTXZAJvpLvZuHoWKmY6fyaCUraMXkVJdekjmfAmRzCWhKLyoNFSnUhsRNxeDYKV",
  "key35": "4T5BNnAoQybR9r7xMaiYGEkaKRM5oybTW7Wj7B3qgQUHusSXbb97yMGmFgMH9Xw9WMGN4MAKBqdPV2JAbToPnNFx",
  "key36": "3SxwpR91RQtZ5hoxaPwFMDxrRHH2AmFu8YY8PjgqXD9P3QsvyMJDvsLqHSjdXgUdUXF4iMhYiLG5pmPbYmrcF4T6",
  "key37": "36ET2fNjA3fY7GAsXz7dJGAZx3o3Qs1Gzemwm2rKDDV1Tj3eKnfcRfWUVvuoMPqwWSGb8pQR6Nzj18YbjkYDP3Kq"
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
