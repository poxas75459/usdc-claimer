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
    "31HHMJW1X7rZn1FHomwHTQzGnwvueKEwSqLbSgBtq269wXJ1rgbj8pm7NBweRvTxkPAbQrD5WBtdii8BxwR87k18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bA3x52LNw3fK2BE84oPpmr1uRWH6DBYfzwLwHcqVMWj9EgKXGkUiHH5pakzzE6pPw9xyCsHJkkXs6KZ6Xge41gQ",
  "key1": "7m2hphkvwsFLy36Rh7TiBYHkZkh7oqX8ZV511tYfqLq3hVZmw6msWq5a6Xpdssb1CqHDeyFFxS8C71F17ZWzwMc",
  "key2": "4zWVQ3f7noVUsTxPzB5uaFPF6iMosJpZ8gQtwsYMgC9LDZcdVmn66gGGkz35ytcfPYNZU6xj7m6fmqgx61irPdFg",
  "key3": "3GRWYyQVSnbAfd14UnPfQZy1kFcFQxr1zFGQGczoQAr2H3odwap6enrThPZ13PpsZgvVWEQMXM53PfmxJDQrfbxk",
  "key4": "4cAjn6gPMPETwkeBSvoA73VmimqfjasFGXkEwmriRyccbTQqPTh5jMDrJcY8TF59DSV4zjzeEoviwhwbHjuqQ1hx",
  "key5": "3zpp2qgHuX7jheAfJt47yPbRosZqCg6HXrJ9Ga1XSfHoMoDShqieFe6G7PHnQuPiDMEtPzuuxAHTwSD9c6ZPi3Qp",
  "key6": "4rkNzfNX7DsL6AqgnHGfGUHd3Q4wbqApRcVVohJPYZA5nyPSAwJnFmNU5AhDHLtaSsdErg1TiMbbvP5JkLzi6yUB",
  "key7": "26p3JBQQY9pDQK5hDmJtFwp8rHQQ98ft1XSi1mVGJHfX2BS3mCXmJVTndBtVdM8tiJztn4U2b51csH7HQ6kZLZe3",
  "key8": "2hyjQxTHfEjp4131Fbv5XUf3Zg2toxH4i7d3BcCMLkJyZQV6qogAzVbDCEePcLHZf33D9Jg54cHw84Um2EEUPpK9",
  "key9": "DWxae9A2v1MvLgghx9vM6HzobrPy5wu86yhBnWffB5R1B4fPxW4zceFJLm5riGoVyWkN9eqUfjpsYM3AdZxVjV4",
  "key10": "4ayCxKsA6FMjuX1JNGxuDNLvpDVpvToSgEoiCSJnJLbBJfrXepTXrmB82W1JFTvE3HDnwYeYjriEW6SuK5DHf46H",
  "key11": "4okHifeBb2S5aY2CU9NAptFEf9CKj3bRcCFToGLNYTERyf7H27cTs4ApqHqELq3ARxZPLK6ZDQeupbwHBzZWzMtb",
  "key12": "21Nd7ECV6fe6274JtGVqS7JMb8HoVqqTx9gQ8knUBz5sQtcD8rmubapLYMs44XgRJjQXBtPiXpDMz8VqbE1WJgME",
  "key13": "4Ruu5U716KhANyHXhn68hp5Fhkzb6SxzegJNtZ5vGzBkUXhvAN1uKajaEj5WEkjNE4gSUPxGVQT65fGoitwrYtsS",
  "key14": "5C11sDMvoMJhDpMnCiBZeFXo2cYeoA1owBfCXcM7Kvo2XW9yRKYYoAQ1eG37gwtYFA2bBzUF6nqE76oBE7MV27ch",
  "key15": "4UHzJ1umB5kZGNpJDLDBPKsp6YzpqDB3wA2HXRHKE6Ws2G1dXNKC11Az1osUKVegvcLvRu9y2PhoxmmPwPyA6dGC",
  "key16": "99uGGmkp6ER7nFVeN5gyE1DwJFS5aFYESHtjcFzNeVgNMsGhMhZGYkgLSo74fh3widFqnyca2s6xqRY2WUkiGLN",
  "key17": "43vSuyJ6DZnQr5pskeYdNnRmefn8QLJG298fagHRhfyx1PXpQV5gjE5U25GxDqayVngT3Ht85gRZFhhDGJ61oGLk",
  "key18": "4DLsAqNDfeXkmQHUp1Tzyez7QZY2h1UBNUmz8dG4Ebj8DJBsBRnRJcvjkkouokrjJ6dZEemLEFPWZaUkNeUWhhGZ",
  "key19": "4mgwHqqBBHFpPvXNDWZLxwSD7j9JwZz1Woy4cdx9pam9hmvjqmgZZRomHwuBdwXLvjbi6vQwUhGaEEhGBMsHquch",
  "key20": "5hGqK7o9HJuiDTDYumfHMvb2aufUKiVTCVoXeHyLRZgRDv4Juz47maxYJYBSEZcKxUqmhYiS49jrtXWoS2xjVDYc",
  "key21": "4nfdrehYUFzgUt4LLKL2de9SqZWG7A58uyQjg1JxXgQHyBichfMHFiPjC6PqnL6zr9ij3T4bSkrvaHPWW5PLUzL9",
  "key22": "4pfwuSH68JsniQWE5ZZTdQJ3ocfbCfcn7X17ooYToayFsoz95HmkCnZoLPWoYcrDgPan694cWNPMHf8hCCi5M2Ke",
  "key23": "wub9cu1a2zxCMLzPLcsQV36hDJfbrpUgWrRgUp3ZtyfjY42mAkek3jN7noeCPRQFKDCQuT77wbrFYaKKxptkqoZ",
  "key24": "2nKwoH9uCHVGDLPh7uwFuzaRb1VjEtJcSGsFhczENSktjZiYY96WiYb8BsFsoH3d9vhzqhAZqFDHibWbM7cBBJvs",
  "key25": "38FPKjHYtYBpLdeJQrGDx1Ka2foVTFqaw9h3DNpi1ze5Ny58DXiTGqzUZMbhcjudDcmNrZpb1YRrLCm74p8i58y4",
  "key26": "57Bhr2MLSU1zBokP1nn5n3F7PDRgoMPZazbJkLiTJUUhffL2XzPrtJ7mnKGuq1UgoVyqBDTUtdbtqAsMiwQdsf81"
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
