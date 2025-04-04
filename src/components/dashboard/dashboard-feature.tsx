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
    "5GoXxHGcNbnCYCFZXQ7hCoeuW6ebZojfAY9LBVXZorKyJ7SUQjZAfph9tvJ8ZfKbYuPrRSKcC8fTSKrDhAAfF7mf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NgRNgcZp2eTqotkN3yVoNmPrPXFoCE358fZ7FUWexHerTn7yyzCja4uTGbn2AKWRBsVMWHKwCpEidH4mHFLFn7T",
  "key1": "4Kt1WkYAGst2BP7PqyBjttXnHw8tVEsbrBQZ3E1otDtKqMZpxzb8QPL6p94LtbUperWhJc4CmwKwiDZyrNoet5qu",
  "key2": "MCaEsrY5Zxd5fxSpLJQWw9TV9YLg4dqMjfjG6uouQCw2LbyPGXhMPfw1FRyMUtBFGiRJ3JdQik1pjAQor9aL8MJ",
  "key3": "19RAnjNcFrxvMPmKxk3DxK9froNuMDPT95Ky6rGQFr8bueecgNWdLKCFKxnMzYkm9UYL9sqA5Bmkomyvoeb865t",
  "key4": "4N1D94cCYqzVrXC65VUnEDBWfRsj2PHYjoyv5EnJBZixWDHPxxEpvSXM87iduHwpsFUqvnFDxuKC3pHhRLBZAU7x",
  "key5": "2kCYYqFV9QiZvpu1hbLAYC34UuQaA1m8piaFUkF642kfBokVe2Dy57Gz52Ax6mrCJ9zcCnLK5kej6HxCaad6r8nN",
  "key6": "VHMrTgg75bcEq4wMbMqvfJrkNBZmeAp6FDF9WJzo8K8f44Qyw4JVQjAm5wYMUNHBEZTw962XPYGBW4MVe9K8owX",
  "key7": "3pP2ZUZNgafs6Uuam8AuZUvmrqjcFW3rG7pfc9Pony4Mebf9Hea9EetvqNtZVEeanDLfU7Yv3zSamtYPebrM96Bk",
  "key8": "2miXLiu1kVuzJgozFhkgu7MPcFYgPWRazVNahmiCJRHzFDy8WPF62Cj6vAadH3Do6KdvrX3CRVc9P1ZjWm4jBL15",
  "key9": "2PYEFZvHpT44uKepjTtTVRhBG8xG7P8PLprDD9ysRdgrCU9CcDFP27is1ejztDCLRMEUTvrHTRwqccNjZpfLr7hb",
  "key10": "9QdyRgm5pSXrD5yZHbq74JNusu6vqvT18Ht8uvBYhMTMPaPP321FuYhosdLeicDhRPHA4FzjoRK1kQyHponvi3Z",
  "key11": "2EaM2kHGFQ15gN1y1X8rcnZULUzE9jVZoXtLcU5zJNnFzd2Pyt5dRn3fPjLTuovwdmVYrkwfH766EU7Ason1NMMC",
  "key12": "4BGMpzBBPPpLbhSeU2s2YfSSBTnjKD4HZtnxML4LGdj1EvYa6rDqiPxRQW5vPKUe3M7zjzwoKcPjzFxBn7r7YJt",
  "key13": "5bDVxadJffhpkTwi6rzRbDBg29WgqC5m6xUwG5C7TGZWPMkVCvHorYfEBJutVU1AxP4H9X1TZax4NSDdA8zeYQF4",
  "key14": "5jG8JVEFCyKpfpMasBLXt2qJaAj9mXVy1ERYS1uEcdLBghFjADTCePzKqhmPifw6cLEisVnEgP4iSkCf4W98a3NC",
  "key15": "4UHyUY6ddmwM6342fX77WwfvRVSdx3JHDSDAzXz6sU5AGVk7N67wcMYLiF5o8cnWaU9fp7MBiANB4WFermPc8Wvm",
  "key16": "5rbssDorJ4LAUsAVc5fRfWiRkjv2UmLwG77idsqNRean8vVQ9AeaGw9cfum7FrYdQk973rEccbsVFUoxsAXFuFQn",
  "key17": "4a2A79tAMTjpSgqhEgFqj14P5QDgV3L8qRC4krgLvWGVjwL4Q6HMdrdzBY3hAbcTuiFjMY5XD1eSTjKC7K5CxMS6",
  "key18": "3YL3Kat4T4d8fB66w24n2J81PGGM64xpSmR7PFx6zMLL7Dz6znumCmRfmCNmcoL5RPgnQjfpc5xWFis7rkSxN88b",
  "key19": "5QNf1FBPevDkG9Wg6HkJmKJNWEornZQWtfgzNjfQRziuh4uQRr2EJ2CJVwePjr5knpe5LSzhea6zavSPiT55BA9W",
  "key20": "4dvnsxNeQvJW9fG41N4DiEdezGGyNrMVd6h6KWsbwFcgJr9sijfgBZ8QzhBm3G7yxaQbjWaEjN6H3RPbja2XkveE",
  "key21": "5Cqt2vPR1yoAMpeqn9YqwaL3Qu7rGSTM2Ymq84dwf3eZhxuzHaFu9DkTe3Gz3A7bfadzA14YoRnw7weVbbKYHC5Z",
  "key22": "4wRGMr36T5iKRBjVW68Kzp1x1UE9HwbSNQb34yDg8Hd5rDH9xHJ9MozKfJzsrNUaNFY48p8WMbDkf2hgnRKUVern",
  "key23": "2fGRgMd4enWgVSU82Lzt7xS5UJ4jGGSVnDjQPnhNA856q9EH4a4YaMyZK984iwC62u1jM7fTR1JBwtSr5WvEUHZd",
  "key24": "31HdnUZE1muSWub6BUjg2JcFApQLZ3YZXf5k3UYYRN3Jjp9M5jN7XGF1FXq2r7sGdpKuwnXbjRJ5koQKSW2DJm3C",
  "key25": "5jaMkeT25hfFVJ13x2A8ppTtsA8KRazp7amMMURCdWefzs3f4RodP54aCGnPYbg611mVzWHS8NB8Ydm5tGf1NP7p",
  "key26": "e3LbTAqKzvagTwafVUkHn4zqyYXuGtce6KJqNiSZe6QiQc3C7PxB26oQXbBSuvhwVk3oNeqe3jkduL47wHkQ3Q7",
  "key27": "3SagsngMg82jfjihVW2ov8j9o1YvLvE3AftdiPC2BwNEDPWD4b1Ek5vLoZgokA8BFYkEVhe3XxsPTyfEgMXdgoap",
  "key28": "2Vgd4GQ583yMXDa7rWwF4nbSN5pnqFeTRVCqJAMfjshwhptkJddQg4nHa1YsbXFAEM24KoqeEHsL3nxnSpzheHgJ",
  "key29": "ykLVsZLPraeXHrSNDxY8o2CVemBZBQrjUzx2LtA81ZRCyb6BqMRwn3WJha8DyDmncRivdphLqmuquJGqgQ2tmAq",
  "key30": "63xx453HApUQEEZMTfTLkhY6vFGEGAExtKSRbmmPaBYzeHRBfWLN74jPkmSxHtfHS1ta2meRYNsJWbs8ToXdfyeq",
  "key31": "2aYkvFzn7p97ZpgiWtrfjR35xcRwU27hPBZjLdWtEKuKGQMEJSvTJz27kbbCZCCAuF1kdmhLarZ9sgJ3umoP28wb",
  "key32": "5v47TR3mcVu9rLPFopPzXWF5Uh8MJzzR3W7Y7crrvmbEUuZpSp2fm8xGUH9EuikaPZEvh6jZTPtxLE15JwVgPgfu",
  "key33": "5ey8cLWNantqNYXZtQayLFtknw9c4nW2ABwSmcbqFWDwMDjnpr8mVofXnTKi3FqXoRcZZLxui4E3w6UJcMgsqMi7",
  "key34": "5dS7sznNbtSfWELpWZxpkwJcadd7nm8hcW8zmiu6j21XLyQ2ngQrRucvncZ19FtMzjk3w1NVG6pPeCDt5ycQWtuQ",
  "key35": "3iMrcciBPfTYZFsFhmtbNw4dxfd1vowzzFxJXvGmYzdJyWzUWAdPu7cMzfWsGsyjmVUYLYfprbAoWpKFMGr8Bvqu",
  "key36": "8Q2gbvFxhBM9kSyfS2ejN4GazPvaJQXzHvp9XWqp5wmERFAUxJgZ3LYHYDo3WZMsGJq6yAhcdBdemKiSUtPwZp9",
  "key37": "29byiDsWwPGWNhwnCMQ3ZQVrPrnfUyVQgjzo7kdHLGg1tj8Zt8oG3zf37Pq7YAT74TXuRaK69g29qgRnBhyBAGgS"
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
