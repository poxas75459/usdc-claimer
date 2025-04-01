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
    "2wixGw64dMKicVJAYRdu1LKxQNoLJyJdFTNwG7UsG9r6mtDC2GGX6b3UswvowNJzwHm1qDhnn2kJ3Vms3CCuMxyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mRjx8FizCmGTPW2rACL5KBMYFR3kyCNvgNkwnZ2bT8aubX2717RTQyHqCS6ARmyWiNsm6NeThT7xCoU8fXrG85n",
  "key1": "czW6aL6PtniEPqP1LmA5zyCrD95qfVNDuxsQMHiroydiEXCZyMJtpS5ixRQvqgheEemYZz1HoLDMhSHgwYfRmj9",
  "key2": "2L7AKU96khiHY2XUH95H8s4o3k1azVoM53rHYvETu6mQiYsWrLHzNeJPGFFiU7FsQruHh85NASp5dV2sqeqEuJ7i",
  "key3": "2S6iYit5LFqBiPVsS8MB3npU32wJf6XfgjDNdpxcudKpmxHFqJDBCGvyWiZf4D8g7jwaYvqbWZ76pEoVjcjBoF8n",
  "key4": "575hWjB5BRDpNVfD8qFe4ebwbxkbZEF1H6FovuofKiLXsfmoevuis1Ukz7MUzJaoUaEyDeiq1zBa1dUPBsu4j6ir",
  "key5": "4ZDkuTSA7UoFK35HAWaQjQKuMzX1VCgHtLpQWpZL4s5rKWzN93qeJRJ2dETDLwyYxRi1dsGGPX9H16vHrdCCwYAb",
  "key6": "5PfreidphAgvVr8VtRL7JaM8wERJZKAWCsVUWMMe7dSbU8FCkFG1pkKECg6rR22s9GDWaS4vqAYX4RuH1homEd4J",
  "key7": "6317BMTqjzRpKaNDak9n8zhA3TpKDHPJtAev7xQeQkLYSbV7nJEFZMjukzxs6JGp62WQXBoaJSpqdr4yfVwYFYqb",
  "key8": "5pQ5u19Dfc3gzYn67EJnhVpaLMCSqLTg6qQ4ybsiGRZ7ze7czokYfzZ8VfcqnfzZAAAmLytcrX9Dy5s7R41U2GcL",
  "key9": "2DXZKYPar4LNR11BRjVpRmkMEqTpHnh5wwPkRGrw2kpmKj58V5yFCMDbCC5yBB2zvFro5UvpQh6MhzqvjES1GqGy",
  "key10": "26MLaV5UHDgXfiXz5g5wxnNyMHRbdpF2Dabo1Ad5NqcfjzTuDveUrVc4Ggy7gur8k4eZ2TFEJm7bwXQr5jU32rkv",
  "key11": "2RyA58oL2pMvHvh8qiFDM1WffRrR6wn67tZHWWuM74mh9khH8xLhAwo1o4NyQkpiYvw6bVRvUyX4CGyqi1c7iZiV",
  "key12": "3Cxm8gYBqdJQDRdQmSz3AGYDDyYKzyhwWG2H2bUKieHiuEgDFmLxyCx7iXKpKjh1TEjmo2h6g3KT1kcVSxsvVsSR",
  "key13": "b7fCfbLeKdea9Gh96ocgEd2yaPyDRv12F2H5n92QtHz4kk9Amvvh8xF3yrq5sDkJcSgb7jSkzx7DgvJhAXJruYw",
  "key14": "4MxnJjiySeevSeGi2TNQtUshC27E2uZtd4xThgBTiDRGfJM9Wf2htpGteeRSuGzZVufFDwDQysHUjpGJGVsuZbWu",
  "key15": "5a4Hwd7JDqXeTRhNCokkRNxBmYCygAsBcCE98Xwtv9UkvEwA8es9Vc7JbRM2LY3EqrJzSruLuJBAiw8tutS9CW7q",
  "key16": "4Ro5MGU6WPTTS5UggdPG8brnJ9C2VzCxSvRzSu7Wm365SAkrvcRLe8STW1tXfWbrex5cPsesNJEzCEB4NLdQDkC2",
  "key17": "L6M6qTV8QCRRvDrCzzLSb4oHPCq7E6n7EvuBYdus4LVqJ1e3NcxXUPnNZbsv65yCkNstctKtTf6UXjkbnStMF3F",
  "key18": "2tUpUbHSjTTpTiV4KBnsNtMD2fY2iPuUnTwjQjL6cmzv4siVeDXfDo5WCaz7x9tmunhhFWnhs3iSp4tJ99FzChRf",
  "key19": "so12y2Rmnps1wXrNDimMH9GXsaa6w68E2W94WFEg4huQVb7vV1q6xVSqcSzv4sWhrT6QZbGxhDgkZFDhGQRouEc",
  "key20": "CPnR4nM9ZRPLLiASWyHWaH9r6635LmYnavzGd5X95XCLyzDiVzZ467YAeLLtm49WTRBx35Z46eivfYPD3EC5dFE",
  "key21": "4YRHQy5Dxn6mUBr7cFmhzdSRj62acaB2411fvicH8aU2bvBA8aGh1RLijXjKhTzq1SxvBd9oTfB8MWsnNSL4MCBh",
  "key22": "5YbwQCjn41hfgQGyvM3HT16np3pcun2sTwLEBbCegcJ8zBtGfdaAApaCBA6yQ8jiQzzp5FHh5s9PSYCfuW4Lvy8y",
  "key23": "63KNUByChH7AKX7DzgtyogJXfqHWW3ihVe9urTQCRm9TJfAJFnis34PRrwTmdQYjVqphXmZyLPgi1xWAunwzY9BQ",
  "key24": "4X87QgJs794Bc6oKvn4EiMP9N4T5A87HKJa6kYmUfLwYerAGuYyZyPxJ1fpzV1oAvMnSXXLttgY288d4jLxBRKq8",
  "key25": "4fWntLX595XbpPVvWacZQMt4oLzeqdRmh6jFi2jGzXNiJdWteG2cYoGPS5ao9r6izX2WWVuMkGi3KLTsGUqL4tXQ",
  "key26": "63NnPMC3zRfh8Qcjxs9a3JWtaF6mEfrS42WP8voaoym8vSN2PCRhHgBaBGRJpTkhshvYRp6dNmAWo6sDEjcJaJSF",
  "key27": "7pKHWPsHK2DDQVSNwaQUSchNfMWMZtwgL2TH8ZbC2qrRASfTnnM6WcKBfQw8qdiiHrdE1rAKaofmt8PuFKU3qEu",
  "key28": "2fz8zyiEnE69DuzoNQxTFTWD4EWGEjg7wZzA3Mcv2QaLKwtSMhQd7fatDXUfhWK7P7UTCohcgGQjh5T64F31MyBg",
  "key29": "mrZh5ADuZkjUAdFfR9dMTjWtNR3GRRs7jJ2stV3FrDCb4t7qoUi4uX2CVJce57wTAmkZzB5TnGgb7yrWmtgsphN",
  "key30": "Hxbf7kEfjFk8qdMj6JB3xpj9RxqmhfBDAgBkE2h45UiMY46zV1qXd87CdrEAu3DcoYLTdK52qFyLjNayVjDjo1E"
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
