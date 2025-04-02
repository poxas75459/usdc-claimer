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
    "3smGWNqnPAp5P4WmsyicV1bjKwjK6Ybshy4wGmsS4eYz3KKUu9aj7egB4Ui8a49kA8Q31fXj9MidbRX5ma4V3FDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fei1vTj39bqPFbjpngVKe7NioE4jakd3pUHmhvFFtx8NHy8ZkW9ZMrmfEZWoCveaSQ65sv2Y2qsvHxUDqnAM6xR",
  "key1": "2sFaGzuutqzgS9TdEA7mg2fGiTeBgWKQ8VKF4YRAnbWHmWEQpeG9tHSHoyD4pqDbk3LNsEaonj4rU1goe4dWf79d",
  "key2": "6553cajutAgcCj72o3SYM5Fq2nri5yWKGT9VhQeYBDNPQMrLhpxLaQpKn5UKFVpuxG3j8NrZJggom9bYkdiF7PXn",
  "key3": "3zP7RDc1Re5PBWDjYD7PHeAPzR6eWCowWdxyzCXLFgczW4jwPzEsEfditKMfy9XbB8BTQirRytQRotZ1rsAE3j8H",
  "key4": "4BgUTWhkR6rFDbFnbMVge2CTUGM45E49FsyQyQmQJUKF1igBT6mQPDZkuuJCr754rD1kso5x85boNNhfpvfgWkiZ",
  "key5": "489329FbVwd361ZBso8m6NwEHT3XY2DdtxT6tzT7Y6rAhfiQJA3Zv49c6XDYreYR4EvupuEa8uocSxuiepwgYGG3",
  "key6": "36YEWq7CRrxxXp5rQ4R9nLoBaWKva8mAxfV1S1nXME6Wy3vGC6rKaTjxbRguea2ajzEYqtG8hmmBPGwDQGkHd611",
  "key7": "3kQMookUzHoUVp35JJPMJtVWDPnvAUHZ5zUeXTi331ywGCLXrRDC15oV3nu4qzt2NpsU8FhoTKafU7Gu8d4AWuVp",
  "key8": "4NVXZ2WUtDnsBiwQQBWeXzUguReCCqj5ADAXsaSm1xcWfKXhQqVJr8As4DA5nQp4ytqqoKgV3GYXYRuD6AuenM42",
  "key9": "55cHPNeR8BwpNev8DjRLHRSbxrXrCwXLSu8sfnTQKR541wppKgKvghkVEWUAUT8Jhv9vQRe7Ftf88oKHBqrQ7C3S",
  "key10": "4nGLL9jFTdYftrYYFYgodkxcznM4R3oc5WiUGZoHCFNTF4eXC3ZG3TTZM9NZhX1t2ykHcPrDGW6zwAQU5yC8Hkp6",
  "key11": "1dGtJj6BM1eDdB7xRKeXtS8UajDBA4cTW8B1KeRwJUqEn7bZoXkaiuQMZ8QQtpmoiqZJ45ep1fdgR6jrjE97uof",
  "key12": "2SvCKyeD8UAcJMAw4y9dBFi9ZXnVEQ2j9UcKUwU6Lqpk8dRMzzuS2tLBCEuHVhcM6Nrp4y2pnUHoXsPBQDBztbtz",
  "key13": "2yLPUwuaY3dL6G1pop3N7pjjvGkEoWKdCna1sCGW3cznpi4rhfwGuWUWDEQVJDPBT5NzZKoeXQG8pSFvcUQYeHRH",
  "key14": "2nv64iJ5eoWAV8NVYcdKfdX8BVJKLu8MCQn6LkA1xXDR5n1sjJKE1m7q3h9VtcMnBgbqydGso5bXrdqu8WZ7hzpa",
  "key15": "5W2iMz2njBWWiWkYu48AjHHoQojRPVCYEJ2ZbYFBeah7rgc9rmskzmMvKLLQP3R8UG2HouYcmvivNuyvf1kbBwrY",
  "key16": "3cGuaCjTm1nU8p4MW5qbMx7u7LLDpZ4DLv8PbZgN5pigBnW1LvNB2CHDtY2HQMszjnnkBPkNz1ryV37i8fuQoxfH",
  "key17": "4zyFg8zpdMdubHpPs8rKgNf3CPm8qFESZsjTBj6Dw9A61EHCbBPspx2FB47mtymZFnr1nFkRBdwu5iLpdvg68Z6T",
  "key18": "5u4SKqrcHYwyEfnKxBYpMsNWxQhUfy39mdStYmnDJtJYYEgADkQ21JKPwGEEAUt4Dn3EFSi3GYLYC9ATyFfFwF8J",
  "key19": "3e5XQLNcFLnCAsHiVD5nS26pLreJPpXk8nqurjRmv4BdhYvT7JzcVa3tZ4cgWWfLvy7xrwtVbMoxFR15B4sinn75",
  "key20": "28uUcwhrnXt9Gh1335zpqtoGNmFof2qxRcGUs4ZS1Lj7vBATveBrVxfLHVziga5Za54EyrNgxhsbBaHTa2QHYJCX",
  "key21": "2ETqKejH4E61xTLvckNmVY1kbwQJnMDgZ3Qy7BMHmFUaEboZCzxXenu48XUr7iErZZVHeRynEX2CQfJeQCrz1FAz",
  "key22": "4qyyaC6yuJ1q2YY57xFUpscf645xZS7JaK2JVeoqwkdCnqqWZnRyebvydesDzNXsmrgEDzH7FyivH6CwBRDzuBJi",
  "key23": "5obLVcNpwmdJKXcPCVMg7my39A45msC2LKB87EkaeqSSqgVww2nJzhQvXeUJPJHFKPLonZxvxUC2SVAguyLNkGQ9",
  "key24": "e6fmDQYMPMLcEo72aWnMvSkzrVtCQFQYbaRC1NFAQZafxqfkojtVjDpCRZiTLaowq5PdoZkwoKsZSGiRs4yrU8h",
  "key25": "yZnvycEXAYrWvsmpMZymHdSy6gUS2oR4ZFKqEzJPd2NMWyVDPNzWwhviyHRcNUAYLLnxJyo7SFNUd1ctWY8read",
  "key26": "2NFkh49D6BtgAjcW3aMUwaVSxxuwGFPEKLTRfnDitPR2Exvi5QQ6pBAcfGxTKzad1vupJLJRjS9i53tpb8NDRk1D",
  "key27": "3b93ELMdmTVaYNWnLLez4JLVyD8AfPm8q2LnDx2Li37MzoS6ZTJCVET7XrGkdS7vdwLVQbsjqNjMpRXegRNf9Pub",
  "key28": "477HNWhmRxv4W3n4Vipkefe8nwdFxEUfUVYxTZzYAgnxSFLJYE6B4eAqciuD7XnCHqWdzsSSfd6YGY6dUjzrhHwm",
  "key29": "4jhPPSvN1q5PdYdKfMdZj9D59Ms5DgifDoNaciSB2rUqwT3DQYpYKxHuW1aiw1hTo4eDtQ2GkdiCVmdjQAvEAHdf",
  "key30": "4uHsBpEZPXZ3RxgsN7PDYekmhmhAJHLUMupLhuiasnHYVyyrZuB472DNiotzcCr1oKCYWDsygJjSGbxxis89yXwG",
  "key31": "2BC3xdKeKP4fCcdXt65ZXJajQVg4kESZxCP5sJujAwtnLaA4efDRmB9fHJS4axE45dao6in9y2hKJQyJPkHmZfPK",
  "key32": "3yXQkw1JxaHu7GekvgN7WyhWkFnkjjBqB7DfTVZrQyyrm6SGMLNGoJqeK2RsBjdXiJVHxAySB1kFhsokUDcp3zsq",
  "key33": "4pzwiLyycckiY4ZrA14wzxUAcM2cT4Ezw2qgf8VrJN9G7hvfR1Qz4B9xb5WcDHYHKhNWNCLmUHsKk19rMxLZcdyS",
  "key34": "3Bv84hgpJg7dUY6pcUYaXyjAXKMo4X4SedabDyxm5P7XUzY5g71UCKNLpU85MbZAt96sNnwhy5723rh3Fv4ooeZp",
  "key35": "2e8Gxc9h8RWkd5ABZa2ULuMaSAnakkqXQGWWsmX88LfAfW9teErCX2qPxEm3CTsD1unHuStUBCZPhwubD6Y637rf",
  "key36": "3JyZFjEsCSDJf5JCyyQtkgN9WtEPmVk7LsKN6yF9VABrGyQqtSW6E6g1YJdhREQmBnKfWRb78TMaZYiEuqY9bRXN",
  "key37": "3qBHXa36PJQHv46Qh7xVwPQMDNGPts7Z7g73MtMNbGqhCydbEMghsPTtsNKpR9z3diFZvVyczQojmka1hAS6RWCK",
  "key38": "3ZNfdCt51xhbVisCNnPGfUCctCthKPEgGDGATaKSZk2yhzfXG1wBKNz9he6h5uMFLY7EctJz7wZBJzaqQE9r2FnV",
  "key39": "5P7BPiHh5HA361RDrajWS8Tuu6kxzEPZhN7tUvufqJw6Y4hRtg9pHe41pcP75kPberds7TzLnJZL85GR5W2Fqds",
  "key40": "296FnaNKhf6tSYyD7pf4PgUWHScBtXEiuCeJE1mwGp1dxqTmKUM4Mwidy5LkJR8v9sCuQyWbFR1Rs2uezNEdkFRX",
  "key41": "3TkHMcCmZK6e3WWokYxxQZxZHjdj68VZ7ezoMTb88hqhbWwHYhpovE2U5e145i2uw6RBgwasY1y8RStV5yDw2goF",
  "key42": "23E2jzp2zgdJ7UHAsWdDoZ2HVr6poacotRRxXQKgMjZ1ZqZc27Zvrrs5GK7rbvc3DpKoZqPB11fFfBMoKmdfqJHq"
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
