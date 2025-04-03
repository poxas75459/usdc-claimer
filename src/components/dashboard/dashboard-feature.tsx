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
    "362Mgz8ALxcFffUZKj5XxZ1CEA8SZHfEVsiSqJUGAYFoib35xuc9nHiWBJkH1g5guor8JEVbN5NPHL73wqoixTSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "648cTohMunRnjHmovKveW8yrrWY4bgnNQDsei5gNu3boNFBqGGAyCLLpqGuBnXvaGYDaWogYTCwmzLXteXby4CV6",
  "key1": "2BzaPUtW8ko2AZC6XvX7vmW8PT58FzKfVoXLNk2vKw5C2h66X9GQkzusw1YvV61y4FuUF9bCuf1zfGQoYZ83nnFo",
  "key2": "kP29W7kG6Mu9jEASK5vUQmsbwzjdEyfBznDjgX456rMXw8juBctDeg57mmsR4tAt8YhHJCHrmkb5QkrC3AAjWTg",
  "key3": "dwm5B8Rpc4uh1kSWy8QD8VUZsNs6UrjgkL67VGxAWb4wPgEtrLdLmD84ybLrYVfYgN1g4SSswUPvyAG6qyHuiMa",
  "key4": "4zF38StTEFuPvR8Bm2kZ2fxcvgEvd6uZpnijjUNsacspJM6AiGpmSCKwycfCtQMtq34HqSrc6aw6SKsd9Uwms9RB",
  "key5": "4Gs7MLsJQUscY4yUTTGkJw2SS4WVVRjpuV83LfFxcMaxSyaT7q1ok88uGGzeYnY7AKS5REjNFKyraZQyurxUZ1dQ",
  "key6": "3uXMT3g4AnivsBvTTrS66N3NmXD31j7uDwYYiyqzfcnimNGYskfjyeEzwsD8CUMHqHcWdZhsv8KcVaFdPySgi4jU",
  "key7": "56J2pC6nhquLkkBA4fR8PBjWExPsdoy3KGos9dpYrutCJJgKLL2oMPPEHGW8sGb3b7V4aT58XUyuGWNcrCWt3APg",
  "key8": "HKaELkgMoPmvEBi37bNzjPnVyCfNwdV7BeD7FxkuL5eyreFkEwgR2vi3DcRbpWHWao4Pf8eeofwbPQxaq1JDBR9",
  "key9": "4zAn6dRB72cJAWuJQ6k5rJbCCX9RuH58wR4rVRjBDsxZCuwh79BVtezXqX8RNcbhebEAHYsZ7ENjaXrMUg8uXmYz",
  "key10": "3R6JbYFTAbcWEGSvUxqqxwENqagobtKVZx5rTFKjgm8HqS7kTqzobPr9QQbYpzbh3rHa5WTJf5dEuREiBBoAXUPK",
  "key11": "659SaE6WoM382nM7WXDrzt9314mZ5Veu1bZvCtT5WAypwkwwjGHhMtxb3ZNBP74J7Eibf5oAmrcr9YdJvFSuDLYe",
  "key12": "YDQk31eXj9ytQqVTrqKDkGn3JHYnQnUrPMNbs7ThutJyTL81qAeK3Yqy4zPJigqXukNSrnFsjhEPT4BBCCPu8KG",
  "key13": "4nXfwvrU4r3eQatJA3osg67C4pjvfbRMXP1PGfsUkxd3SUsMREnzUNzuwLmsnwjUR1LtW2Mc38YpsUJnWj7GvusE",
  "key14": "4mQsLUAHfmVpGHUKpCnWQJhrFLgUKJbJqf9q95TCwe6nTqVYy5vpf4Tsj4tTp7SuMtY6XKv97F6x6VfLiHpUwCmj",
  "key15": "3uy3nfcx1oST4APZ5hVDA7z5anx1AwqAoYZP1hnhbaAtHaGSa45TTJF4oLXZnYnLvwx7mhz5Fyeb8JLeR1dgJWTU",
  "key16": "Y7m52BdprwQqSaJunooELdFCTUV2uaQAS7tHfpth6572qLqi6YJt5hqRQHLirnPFStYQNaWudQX5AiqeMcnkqZM",
  "key17": "2HZuUzLhXThJpypap1e7iGN8bwA6bztXXmqeEhxL6AMJ6SizqBD3tyq14oNDHVc8W3L3vrEFEHcE6MyE6xTCSfYV",
  "key18": "4DUcpEw1ggcR9GX4w1BLW8RNiswRoiTEyEFnVZFQRSQf6WSJUjcAdViqDuLSQ52HM9EJ5PVb895sYbnAhukGJaN6",
  "key19": "3abQXpGVH3aKUYR7A9ogxFZpD3pNdqN9anHCBvjwXDMFbDHdMQTxfS8cRzvtXrjSBxi9cW5rVFcPVQ5b5phC2oDM",
  "key20": "eqfRe6bJwCg5wUGWEQpHgifuJJBXiQiVDFhZxuXutRbi9aaLgBddfeJ9pDWk7wVXQaaibmekirRm2DZcA6QScki",
  "key21": "2sToamZuKRYEfKzWjEJ51jTwrG4kG59G13g7QZHUW2axpkQLeggKgPyLVUBPXmXugbzwvnH7A9ovfiB87HUeq2Xv",
  "key22": "3NmUPKMGNHcK2DEwrD9FpaN7eYS9SsqAScQpRhkZWCc32kRDz3ucofGJydefLrBiTLvJcYmJoHnFQXNProBK1gj8",
  "key23": "35cFvAvfFbigJgw7qaWDSjYcbcL6M7YWB4S6NzJTUycy1EoLFeWsJkbTnDp9EWGhYMC5xjcBXeMTeibXukCQ1hPv",
  "key24": "5Ar7EBMR2LAoTkYWpCsm7uaDVu7vBvQRzeTFVAhMo2co3ianyKLRrjZQGLBDS3PCLBdSxZfbE1MrJDKA8ASZLnDK",
  "key25": "5kcEKKYx4BsNt4nczaesJm25VEACojL9D9GP2o9hvJ7ZPgtbjcEyVDzrenZqZP42inz2qLd9vVthDztRzt4RQWnS",
  "key26": "42EXYWFyRZim9r7rcpHtKXR4ThvoLnzjrS5pb2aVgMFffC4TEN15Vvpe9JwoBzSNehJAwCbTcjG6AtTRdeqMzwFt",
  "key27": "2aREYttCFTu853JLXB8b3apqwWQrpwzPFiWTjo8jfg2Vtt75g9zs78WVMajEzW2S16mBXkD2rhGsxKxrmcSyRBnw",
  "key28": "4nGLCW3Dzye4dZAmSZPQUQXNff1GZU6SxdrpqQP7qA8BYxHstDRyQZ7jNupsGybDE8B6crgT1816PBS8PAvt5itX",
  "key29": "2dmUQkHbZ1APeHRzNaqoE7KnaPQTpDfugVbYSCc7EYSkuTiGdre9HAc8cEVueTtNhs27WeFDFQ9XVJdSRoi1tgr9",
  "key30": "42poXVHChw86Sz91NWyG1JUXUTqhrtnvsDBm7wHxrFff1WotaUv1A9nV56sTPa1FsRsz2qzkxP6qAaDL7iTd957a",
  "key31": "3KXUT1Xrj46pfYnCo4g7V2hs91dPC2NjxQQhxRJFLYc5mGwKjcqk1zJd2iwgF1uHyi6gQyTPJFGDSXydfELKRy26",
  "key32": "2jodXcjq75XNfwfk14zLPFXz8AtsZZ4YRMCszvyQwLvud6ABwe4XnjrbphnK7odzEhA9srMGvpqfrcuX3C3aDGtY",
  "key33": "27VPJPYKWoN5N8SvxHpCi2FMbaG3hM4kRHYxMPsAxouNKrsjDVLVVsXhEbR4PPYLTK46jW9A8Kzju4Hfi8cNNCeQ",
  "key34": "4nedcai2cR9pPAmsULk7G2fUpbjpJYSFrPUjtWhF7utSSkdTy5aVPpxQGbhLMa7H9x6ykjrn63bZurfxhXbk4PwE",
  "key35": "CETLaNVWhFpsqGQdT9iUSnFkPdJqvaX97Mh2kVL3wb6iNvWHBbxKdro12tSk5wuWDYUdjuZRQgZzKVQbpi23J7s"
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
