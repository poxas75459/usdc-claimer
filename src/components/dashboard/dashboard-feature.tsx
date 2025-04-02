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
    "3J6SUF5zPCgCiiLZjZ6WxkyY8vmAUA5NHJPYNa8JTvXbDDNd51dpEDZdaGKsPWrPfgy3opqN74CGJZge1kWBdzyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sGcqFjEepucqmuLFd8gkCYG5moXghBH3uJ12ij8PkeUzJMma8svmzLgFv9JdRs6caKEp9318sH5WuWBuSChqrKt",
  "key1": "4DHpVWL6d817bEAFBb4A1v7XYJbM75a7Y3JEYjtnXNCA78kkQ75F64XoG6kYG7q3tDd3Uh1ntJA5tJ6NBH7HE82F",
  "key2": "3Ygz6GEA9reuFm9s7LBB2MscPUnk9CrBVxXjMnoW8yBZ7Rp9VCrpcAymxn5MBe5qvMf4qF8GQx4h8CUKKqFW2W8W",
  "key3": "29o1N4tExyWqnELRdwJSzy3dC5K24YqhsviagbTvREtbEoev2avMMvrV4Am3dhbkSK7FELB6XfxTMVwbrBmTqacK",
  "key4": "3UwwEwxbf3Pn1ZgJQQn8ccNW8z2fTPGSQ3sBug2aqtkErgtEyAnjQ8gpeMdtgzi13Qt5pFUJVyJqEsi3gdad4GPn",
  "key5": "3YnrhqSS4QbkV23Bb3viYpz8zBe5Ta1ARxHUYqRgKE54zdjWqNcgMosNKaYdwLiJup7yVqNmJJwSzWGuLk29jk7C",
  "key6": "3GGYswptqimNJzLdptEjy3SKPXfb1DSSRjhpUiByyfz1S4CMMa6gDHsuzv9GnuMxQnHQUvH7jpXXGMtzGiYbPShg",
  "key7": "5shGDqU5jY6AgbFbT6wWwLqKE8MXBCJmLQGKzwq7LYbpXaTo7UyND5vuPA4BZcSrG54sVcW86qCX1HyfXuNyGQrH",
  "key8": "2YJX8bRFk7xE8Xd9pa3zMzsVe5zEeB9nNo4w3koBgx4xVGD2zswdFzmLsNptfksSEv93rCk9FYqL6MCJn7b2aLhT",
  "key9": "5jn61DYunuaSS7ckhdEctkstJZnjbBpizqhgWZWJipbXHUcHK2Su8d51Yaadf3LbtDXKwCFRec2GWKnMdoFY2ToF",
  "key10": "4CJSEn1Zk6fP45oQ7p1ynGPBcrEATaft1JqcxS7mLf4axZoKBuycpvVQJfJcsN5iFWx74iRhqU692vndB6Xh93oq",
  "key11": "4DUMCFPg5GbRb25fXCmtnuXV3FnbLK8zoWqUvVJkoKFtWm1kNahppUPZiqcRCMGFEjQAUjxS8gfBpekgfabxKMta",
  "key12": "4n6ewfzWXBt9Pp3dCC58Rt6LqH5ohytH9d6XNyqRa7GLZ2GKCeubLhnVd1Lx1cbhjrKMg2jvJ3UiEHjMxxSD6dby",
  "key13": "4zH8ECruxj9RfjAstfhtGPjan1quRSGJ7ND2qqJQtMoQBBBsdtGTuFVV5RmZfoWhXpoiwk15PoxPdi6LxEyqk7B2",
  "key14": "4YwtpMS8JTRBJ4RRcar4777krP9caqXdKGKAEcyQH6pmMB2XPzvHnW7SBKtQWnBtqeuiFgYcPBcQJJkxSHkbsaWH",
  "key15": "5sXVxZJeF1dE5audt4UzEEdAbNvKFykt5m9zVnHWpFSmWmGYCNhGApNwb1ZdCF4CfirUoitGcKzfpL9yvuzMUGL",
  "key16": "43zNje7CJyzDRPMDDM3uFSqCa5k8rYjsAcnApRTWkezT9kmiCbZg5j6rrdxCTUY4Z5qPVydy7uCmHe83GicCrm5r",
  "key17": "52XztFG3C69FTEPRwNAkkYNiW61tFSc4S2RwbMwuMEXS2jkQ1Krj9kp3KzpDxQWmxCtgLNXsSwRipcEgLcVUdPt8",
  "key18": "5R52nmwN1VZMeRrKm4zvNsyxsbtzgK5ixnovkjxsvi9CoGpbpwGLgSHSJPNuhbKkEQpnfoxgvcc822vHv1f3G1Df",
  "key19": "KxD4ZJxYaXVqqR91ewwbVoHWaT3G1XxJei7REScFpYUYKvea9KNT7E8iy8Stcit8hbXQ29oLHBeY9g1YrNERWxb",
  "key20": "2ZZqsXM5rQeRTcDzJWmAMBgWK3dDLFsWAgAqjqMMEeeEniBogxdUBMuWZf8WL4dbT2tqEPnJ4tpaWQWtqyrBHepU",
  "key21": "CF37GgFVpXWpzuorCRSiT6HMGPGtCaZCrnmNGam8UYa56ZEdwV4uZMZYPrCDkWTiRoAht6sF1L8k4EwkMPyiRca",
  "key22": "5ib9vsGTJJNW34mKg1nbyGnEFQZQTRuKwqVvDHzrymQA5xDk5Hh9ewBR6jDyWrvqqFH3w6hb4wDCvjQv93yBWjDD",
  "key23": "2Uqs7g2Tz5TAF2969QZqbBo4eC5uGPsftAvYYKfJjxNwm2NQkRcjcLR6FACAx8YYHtAKJfSkgTDpgh67qr5gQKB3",
  "key24": "5Y88kZsfwSFDma5WTQML3PUbb5Vn3WMEMumsX6bomx5L4vLGFPNrQ1tbeZBS7qmp3kbF9yZEikyWhNYG1sjhNrPy",
  "key25": "3vu1rkirGNwQWRFc2S67fXWPzEb9SxZMXVo3VNR8ESevdyTkb8Ur2y31Xf33LUvxTaaPsfh3rfqm3MCJddtHuHQi",
  "key26": "4fEhLqYPHanJD5MsBsorts2KeKuAJ4Qu3tRsoat2YJq8aRs9rLxMkLKcCzHGDEtVQuzT27TFBMDENHYqLf3P6wkn",
  "key27": "647wpiC2sGfALp1vsvZwhZ6vzNDBqC9vs1TmV3hyfv7xchwceoCVfvw9ba65HSePjzKXhX12HpVczL95KkbrFBiE"
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
