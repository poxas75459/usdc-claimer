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
    "5L2roh33te566KUB3EUQMYt1Cz63rPgpY87rsKsMCGd9iC2fGMU7KHc7uRwPbmucZst2frHKAtABUQrUBrZy8Xjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bUxZELYtbnPcLnbqRvfNa9iV2c82sBy8ESV3c7yfV9wBawjtntYY1B4C1gKkNgu2ZWKrifeLHnvb1wCn8Aenawv",
  "key1": "2ZmM6vfGEGDNL15wVzB98JD6Lm2v5qk6C6baGm34yQvjuPk5z5rwGQAaQtHJcB4gdVjeTU8RBnnsWWJhPXwSgzXg",
  "key2": "2dxRMrP1kFDpBLo3rmAL6knCkZtjSHGZ2HAn2aMYebdbNGCuezSox1hnQB5F1jMgjjdsyZ9dURuPdB1onJonMKTP",
  "key3": "VbAxvSEAh5ejHvwsTsLJNAXwwESuaNHX9my1fcYfxD9gpwrSTUAFaJjN6tDeGwieQDTrvdWMvxCJ3QahJYVd8hp",
  "key4": "3eFRTRnoLJFiZXijeKSgN2TLCNQNqiyH2jGMx7amCb8wYiJmdLxQavWJVGrseVeAYQe9m7n1ddpTt89pK2GDcPqa",
  "key5": "4FJBrDFpjooDm74wmZ6ytY9BQS5UqXxsumAvDEjLMFdbJ5uyTSZLktirwyBA6NZ68JAeVTyMoek285gfJrtsjyQj",
  "key6": "3JJ2CJS7ME2q9rgTo5taCT487wtTpa6d8faEjWtoPn7HREs1qUGYFunm4WH6BPr4t31viWfQdC98QBicyWoZD4Mv",
  "key7": "3UVeZ5e661QePYR1udPApnJ1MuK53WcENYTwrX28Cxvxq5Ang4cSf47UL98yomtJhuYbxgpstAwMA8mNWn7k2rSh",
  "key8": "2Lsk5U3jytqamwNU7ukfs65YFYjHTAddWSGUeBmHo3wb7cjBqwxuq3dUAr4c6QS1jtHz3n3sGqGYR3bkeTGEjzNX",
  "key9": "3tiZqQZShygSQ6emYTcJWszjRd1gkKZMXzffssDr9NB9DPmxWoBHChdyaEDJqH5ZJPdpKZCYF2mQraExRccwemz6",
  "key10": "2CWebBDgV6dte9FJDsUF5RrY2HLbJbnfWGS3tbvZRgs7E8KGTwM3HerbBof7vWu6Gph8GtrLmPAYFo5Hzz89h7xP",
  "key11": "9R9VeGrkWogBRyik2gr6VoTy8NScw6e1a67pHVz71iNKhnLUsNTBd6Q4bNuxMUS1sPwv776hH9T8z8qUgb7dPHj",
  "key12": "5yadE1qEkXLVbwGgaDypj3TBF5qPy8Q4oiA52CYSuDagXuGbNt5ihBagNCFJjjmfrsGkhmA5Kz9bsujDsyk9QSP2",
  "key13": "bbKwufG4YNFCG8uEDBVs7mVqQCgsbz73BzNJrTMHSqSUgRHjGf23E73h386RnHAmYDFUaXbe5AVXcrD1bGTABqy",
  "key14": "84vnwMihomo5o5aKuUHi2cZvFYEMcUNbRjpQrKUVig8VjGH3PKAnHbEzY6Xfi4Da86RDA9L4QAdKse5KyjeUVCr",
  "key15": "ZvokRne8kXqiwodBjTBLmLmPsprcCZc892AqRpJrMeurK9mwHSw4EzRL2dik8o1bnY398w7yJQDewJvqkMx9ZfC",
  "key16": "2Qq8Gu93K9PKnXiMiqvJhMR86AG1mx1VY6gSPqfXYrT8zoVrFDq63aXS6Ljr4oa4zHdPSHaou82tRRsU9rvuNc7L",
  "key17": "2nDQ3Gb2rk2hnzHXEn9PFsGqtG6BZK1saThJEyTavRoQYBX7drtx8eATSduxi8CAgeqsEc1TBcB7ySsW2Z6V6XKx",
  "key18": "3GzoGfz3W23hsJby5sWM8NwnuApZ8o4ohehTpvAAEMG85YDNw3YCDrmpKcoMUCfzSfZPpkUKuNFf4RdzXZnbuLiS",
  "key19": "5kALUFPYRMZrNySoPxjkD6inVrqBfZ9w4LifCSB5hyb22Tw2uy2kCFRK8q2CgoXm18sTesFkWvJ96GyFauTVbzto",
  "key20": "4LpxCcR3R77tbug7gtmhyJ4US8B6npRuWcHpzmowqEh45Az2hTsdFFFYTtjRxJ9Pzis19PwcfjpMt2FtFVTdLzqL",
  "key21": "5s3vxEARG1rBKPKwLw16FJmHXUSpTCTxuvF6CtdJhSt5wLz9S1cajC9xLQ1bEYf7pNGT7CafwAkFJPEXrBCA1dUD",
  "key22": "4N1n8QgH8rXbPBdTjzMEtZ5xq5CgfDH6nauNhKsbHqoPWh5PqUp4nWA5bcMJMW14Me82tgzXuR2k4ghbrPqoMo9L",
  "key23": "tjLLMiCjK2Cs8QzaCFvTHKpnw6ZQxx6db3xYzBRcLUgcupcPoUadrfiPcHatCgK2v56i1kZAEH3rxjMJJkZe1He",
  "key24": "2n3jy4673opAwYLDmUKG1bbpbfSsEM5uh4qmMczara1uyWWdF6UXkPzpfU6GpKYAeYKAcJFcSwmwFwrNN2FHjpLc",
  "key25": "4am5phff1TCMu8vD4f6LtnbfkDnvA64ahqvqERvBPfLDoX6hFQayWibDC7pc6Hj4wJQheEN9E5nncpjjJmxWnCTL",
  "key26": "4gmD4cR7YZrHQghxzgyhcTEaSupwkXjCPqMwAiM6vqkfiWs7EJXaYZx9xobihxXft12iVjEV4c8zEvFiavas3cF6",
  "key27": "4EDJnmpfJ89H1XaofF1mT9kRvgLgbvkhxJWSx8RMGk23Z67sjRJ2QFDM4vomjqg79Yz8C9BTQuoXvazGeHnTrQsM",
  "key28": "3ULMWwPPmPvBtp8i1HdkdEqWxUQEeRwpztTt832W2acRW7MtKNj5ZWgeZzdevKXERUFdLkF2kciycCZo9Kcwn3MG",
  "key29": "2MNKc8ppZHpeUwktxXZtfAgGFvJKTF61dvNVU7JsQzctjp1gxwthhfexK3VvzzCp3wqpgxj93cX3zohY4VJrS4DK",
  "key30": "ur5sVSEudVA6HTS1Qig5yauXqkg1ksD6JWtkFDsZLKnsowWMJHYhGU94su24JDUBb8MVfMXdUN9Bg2xuJLnR3Kr",
  "key31": "3wishJ43Us4v1HekjeMGE2Fz4DWmkx1JzW6UsBkonGY6pJcKnSTJC1zbMTC2k3aET6rUmEE5QDGu8C2rwtKHkAWQ",
  "key32": "2sfTqACSup11y4crFqSi8ALgH7kPWQR8poDDR2nBqm9Ed19UoaYRcwK6oHVsBLXMNW3WX2kdnZbSg1LXS1XSqjbf"
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
