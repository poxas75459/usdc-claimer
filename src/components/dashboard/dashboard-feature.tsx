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
    "4dPJKnnpDYrdX5qABHNTVtHr7og9jANn4dDDnGTnvBs59CjKzZ9y4Uz2yLq8MU2qReopVSiNooDYx17QcCc5TbAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4stjDb91bDivnYgy2q7uQYJFtecVzVgnGAUCFA2f8k9bYvC19H9ys1wcHpvAQWcEyUfn4WSe7dWpbWZREuWs2w5j",
  "key1": "42qcfMaimKqiphak8gwdr8Bd4AYMSEaJ2mzZpQM1H8mMBKGf14GYFUf66UzihC7HsL4FRJu2EkF2MsvrrGF8eRom",
  "key2": "vRfdVnRQDwPGu5fq8wW8oXbzXngKAD8S9A3A2THDgjewM5ZTcqUQf4CjbK5DmQtfHAkAs1Bh83dQAL6hfhjRGmS",
  "key3": "4iyx62knvhWAYrFrgxYYm5Ty9h7UM5WKygy5n2fvuVwJ63NdJ7hiYfckme9DQFBUo2L784dzTvK43tsWsmCvkvKr",
  "key4": "652jRpTgH9msx6WyHUuUSsc4A1YKzvQLsjV4wimMYtn5q5V8c2G2sXddChAS3j5fkAnPmp7eYovf6hoPRmhARBMX",
  "key5": "3jqGDuEXeAMg21vdkcaRRcvbZ8g6nTvvjGkkyrS6htQ4GH6EMSdRH63KrwCj7DJ69MSCd2NsPt2STfcHJ8WwMiqr",
  "key6": "2zFMHuRgq3wCNxkHbxosj9R29yhd89PEMCrQXw5dLHstfyn4iq3QABsfqV1Px1bts48T44B1R71uJFWK2W19vtgA",
  "key7": "5RtiQ2vcND9wVYGtCpmrj62WaZphwfLkHPnQNM2Nbpo1FxzoShLgaXnxpuSRKdiuHpSTgFcmTDG3pGeGVMT82ZL6",
  "key8": "3YcCNa2ETpb6t7C8g3AYvofibHXyQtiwHhLLhGTSNnzFoMD1FQj42gvWLmbnk2Aj9k3QLBn89B1QBUHkitVtAnKR",
  "key9": "2AQnzpY1jjEVHnggrMQnDx9WfzPazV5XxXamNeGE3UrdvqJ1U99khF1apFF6joEYzyb9QtSUUoo1KC9TAZHNQtnV",
  "key10": "A18Mtf7XD8stELDnNyL9urtRfjPSkNtXg9HcLUo82TNCffbLnBUDYqirBf1dEFPTz6ZFXoiUwT7nDVqKZZBGLQc",
  "key11": "2sW1ve9Zx7UedApR56F5MLqXinxnSNK9byD1SHedYia8eDoVwD5GjDPc1f8tG6CVpjU5PybDb4GzRDrojuf2a6sJ",
  "key12": "3G1mwJ2SFbj1at7swDVh9RANe8eudofbjMyLKnDTAiXJne3dJh5bTXZHDb3v4ysMshwLbhpkYiG3ZAc8mDYtupap",
  "key13": "65wvqUAfrFS2GLLWXgtFfYgpaJaZcBnYGw8g9jCD3eAfwpNTM58nTSkDc4RKwy13NWR54sz9SKS6GKCXffiJqnjp",
  "key14": "5RM61de2n6UWZ8j9qUhnezaUhFHfLh4GsFdx8EpGCrZUMDf25kasKTp66S94yKdmNZqPGLrGopxWPkSo5EzBQqSq",
  "key15": "3VeWeNRJYdyXxew8o7mP4RTQtw39vW73oiSsWkZuCuk3Bt955HGhtSmFxxrEk8gdctEqrgCzvPNTuDwdWxHGmdm3",
  "key16": "4McM4TGzongg3VQY6i9EmiNMXoQx4WMPUxmjTdYUL34zAavyhG7pKdAYreCQPZyd2hZZQwtie6tD2yVi8f6kLjMD",
  "key17": "2MuAL9mMvcSKBHDxdfUwkfgpkKSmDxwysRAhPBikD1kKX3t9z1A5xAjiLnCbYXsiTGH8GvVkprJNnVDkA5QNp4s5",
  "key18": "3uGDMs36PpZrBrXUfYpmHi6EpoFdvE7hAFTB316h1466pdp2atti69441xmV27t2VA7jB3pKSVaC8EG2wsixsQ5Y",
  "key19": "5yRgueLh6YDm4ZrkFqr2e2qPw76xDDLNsj2TEB2SNjUPcEeZPoY1EjHrMmKg5BmJbUMgKMu9rG6srr1wgA3U8Q9h",
  "key20": "5xwGfyxy4WryEWRUkUSwvjiKvTwCsJv1kaZe2NtqNKZJg4hAoq8jow2VKvP9nt6YQiC5jsMUj3PfNorZ465mQckE",
  "key21": "5riQFLjZqiVvuW7UCc65DHTc12aQv6BwGq7DLBpmNMN4TGvNCwphXYXvSjmfcBEikMRwJj3DHYBEs4wDh2NwTNWy",
  "key22": "2j4L6cUKzjM3yLPVQu4BtZ1ApVq8kWUkCp4un8kkdkt9juubijQBDKn3sfD9QfiH3FQW6bBnYG887YvZRBkNtTwR",
  "key23": "4F6RqoX4bBpyr6cgExVkM4r7UgfSTuf9pioyFWpSstkVFxfeSyaRmnPdQqXLFMBMGoKzFQfNvNAt3tqrrZPkokwm",
  "key24": "3A3m1dpxDsrtAPVj9deoz5FhN83buH6ezLiHu4uMwGcP8n8hR2f45eemrL6pecSKcwoJiHKT5c6bzzoxC5EEEpV4",
  "key25": "47XWp9Qgr6THbFj76EqAi5W5tckC2wjDmeYr6dB495HTDpHit9URWCMr3HaLTZv5wQ8i4k53cMg21uz6rqnRcorb",
  "key26": "5D7uRnP42g28N7PeD2Z6wxcZecS6yDeCzN2n3cYrgtBZTQ8VK87Ky4CFwE76VxFoph5d4eoujXSa5wvJn3PwLSgs",
  "key27": "cynowLavVxHkpEYXkjG6NyyoZCmiKGJj72mXKZXr9huGVtnNUF9QLdqnC6Li3qQWxazrjjESosXChbAzPPubfJh",
  "key28": "3WzJv7A1YruqsFWssSFZ4VKf74USBqptCU6AhZKuuFoj35h51A4p4L4kaX736GVhwyMWpBBG7cjaTWpL6omYpSor",
  "key29": "66kBb28eLzWre912LXreZwm1PQ4zQVBcwKw37i8jf8mk4Y2Po6VZSe2FdkecQfkS3NgnqsSt5N8uNGBZZKjf82HF",
  "key30": "4oUFd3BhLeghpdd1orz1LNQiwzf4S2nF4JKSFcMhPuBvuRRaa1Dayw9JFj1s3DxvED3RG97UoKGt5kVGfzSW6Kqj",
  "key31": "3pf2Yrqvdr1cnwXA9vuTjTnmcWBrs9Lyft3nxrTdJU7SChdYg4avSRcvJ8vTQsioMi2ibRaVdTDkVSty57buPxUq",
  "key32": "5Ser9amb9msTQQELGREbtEeMyyzhEHWyA1P4kiUxkjtd2y14xMNZmhEFEExmcZBtcS6YK6aoChHo9qqkyWsDBFkJ",
  "key33": "5zf7mYzDQxgYMLtUkt7Vh5FYoEaBW6nT7JvpPzLyaWDhBbwvbM21eLTedZGPB6UmAvZREHUD6fanS2y3TZXqQ5rG",
  "key34": "4P9dLqdENvGWZhAxB7DzdX6cMoErprGsbdpXTjbEJ5w1BpKcphL9WKgEr2QtQC8b5VeuNxUoyXg7aqUoxhzc9fr2",
  "key35": "4vUMzgBxJCaKhUTFM6ScW2CeDuoNb9saVW4ojXvL19ghmyr8cvqXmF8bEhwZBgMRniRfAxmTcYfEmAbBu5tYxKpe",
  "key36": "45ENDp5vaYV6EV8dT742xzuu22CeX77oUegePpHCBZEetRb19C1r6az4TKbfH23XbC3BiPA25uipNEPJ35A4xwYA",
  "key37": "4XVCWPSpv1YoqKLwuaXZbFLCbh7AJevLHJSLv3AceZHN7xxT6B6W1YeQ2nugJVG81PtV5RMGQfL1aeQN3mdkdQGN",
  "key38": "4mYNy1Whiex5Nqo6Qq3tSUTSACHxkxGstC4k1hKZybryZ8cXmYCoac7SpfF8kgUEcTrWv5gXqp1qQvgrJozmVJRR",
  "key39": "3QRE43MJ6vgH7DjtgBRBigzXFuQEJZMN1GqWCD7mSnS1qtnu7fUKxMGHzGe8zh8UnLmq1e817Z8m12M3ew6jvuYS",
  "key40": "aVrYxzsaJTfFwLNTkR7pTodNQaxRNUwpjBUNw8Nhiuq1kpYhVXWqSV4iNNy58geocg13CV3gaEFyJkhnKuY8zKA",
  "key41": "cHFxz3JcLutb5DUBYQX4NxFtWXigTK7VkseTF1bjPiF6iVdDmXcNMYTayxkcTGTcFjsUN6o7xaVtdrggw3sezuE"
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
