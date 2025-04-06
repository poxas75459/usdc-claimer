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
    "2VWfgeQ1gaRHUuFPjaUC1a4e8TPizMixz7p53LU8ECaMLwvMobjmqeANi2n7ssEiArcmnQ7j8WdLuuP8EgaBU7iR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PmCT4EuMfGUXC75hMDVGdKNwnMRzucduqtMCnriwe3B5zJMraGax1oWychoo9kjPy46sbCpBELeB1EZpneHen6y",
  "key1": "2foQ8oqMZ4ydEgpgTwqSdJxRdfFFy3AW9bcjDe3ek7NxdPjJpXq4UaejaJXCW663x4ro9LW26SiSYZtfyE7tTqby",
  "key2": "3XrF72upr8rEUex1j8dVKijhhBrpeGJKqC63inLoVSWttGATdB7jE1k4eULh1Rk8LGQsUrVZyfD8Dtd29Dm7DoUD",
  "key3": "3sTL1GrK6QVZCmp8i8ycdQBveM3CD3FdsDiYeWpenYCf3DfPqs6ih54baZZndUB2AziUFXB551Eu3QYvnoe4F5j4",
  "key4": "5cGcWvpaXjxiN7sTGmpWSSH69Y9pzXDwLf7r1pcX3o9Ho4WwX1W9UeSku9GQSPhj2fjrAmiRfNDkr4d7eoFpFw5Y",
  "key5": "62Gva2u1fbJcXk5Tv7GHPmhP7gC7ACuGeBPLVF98zao4QNeuh493bqnEHaxyR3h8dyD8xLUuUYQk3uBMPHMWXBG9",
  "key6": "4vd8enYf2nu1E26ain4rKHYbsv6LaQq1dNDcWod34WH2ZACGVso81wmwG6kw8fytgqJtTpYKRLxGdvqv8AjUwKuc",
  "key7": "2v1JGEr7aA7pKq88osngHYrwQjrCKRsNnYkk6NwCL8K3c38iC22r3AGLGvDZf51fpPtfQgV4s5uHhRi21mePV9PR",
  "key8": "3L7q1xnFFDBVZ5CDHV8EMeZRnq3aEQPatDM7p3XXtuSc96W7Xr7iTHosNNtQWSs7Arzxox7yz5Aa2g7ff3NVWK4A",
  "key9": "38tcEPyPTePz8izijbaiooXMgcyzTQKFs4wG6zD4W8fH7a9bRbwKtnpipih4MtzRj1yoWeARL9PAmc5FeUgBq8vA",
  "key10": "23Y9jfJYCs9CYcnGC9ZFbd8AQJrhXCutAWXECb3WXyF61uVNchDEYizWAV8rPsji3zK1iDUjknUYMRB3Lckz8nb8",
  "key11": "2ucYjDvN8iPYr4Yuto9rXgbJSkpWgwA7Mgo9Q7Wg4EVE8MvJjzzxXWVwbgyTN91RbZCu5GYUfjWyqNu8buvRndFP",
  "key12": "3ZpGEN9x8NwN5EJLM1jHVthvjyNprEJuHWJRhe5RPdTbXWNrT8mJfqYyLJK6PrDdUg8iqKpQgSeQKHKJJLi7H1jb",
  "key13": "37eM6RkgxmkQpqFVFYPRQHBkCVba4HPBVnGJ8gdYxhrHsCCmDr2pTEknYx4ZyF8pcdD5bTDzxFQRv1jxygzs6K1g",
  "key14": "5qRSGLACjk6CweJr35tCQbNR8CnA7RYe1ag4QwosvzLx7sfisnS87CNxs6bpiZjGQnJufojQWQPwzSFbnuRhc3PG",
  "key15": "5Df1JrhnhwaUV9ZySRu45zz43ZbAquUN1x2KWuXAcqA6MmCUxYPZFdHYqLbxVcehENSE8ozDa1LtAASZStKj7MWo",
  "key16": "4LqakkKBp2cKMmUTaaL58ALkrUNGGwXM5Rp7V4axY5iGn75HLWvf1KmM61fumD1zYDzDpJTwfN17zKNSMeWXJipi",
  "key17": "2GWPBUaLMB4gJPDDv1paSvTVmj3vgwJKCiQvea7Jh8roBJmrQw4TvLtvckPSVR75wBM8SnN9pzhE8njgSvPXrzAD",
  "key18": "4s8xZKoX7Xb24o8RRfsw4GrbQ3SfPJxHQ4aVzHYHJLE8YNYdzyLE9bUN93t4aSzr422C2TS8swepwAAo6YbTKCHj",
  "key19": "eRcHrPikVF3JhK1dy7vYCTMSjWNvoLs3Xgwx4aY5SAVmN89jNTrr8aC2HnNLM1JtLdj5LMHRyniU2tjFGsTkvJm",
  "key20": "3Dq9mrthhstCisPZYyV4ysy3ZBhmnp4uLYMUcybXy9mtkiy9whqzChT1gzsoYNvGnnFfNVL7C9UnRXy5jYY4Jm9D",
  "key21": "4K7ZD9o8AwMsUAqUFHp4WhWfvgVNX7wpjrXta8DqfCc6APptSSiMUiEUL7FuQScJHn8gzWVWfiRWYAtm4d1buCcE",
  "key22": "2G2stTGpX8uXpacpDepRbFr5B59HpMXg6vqREQQ8i2qMDAjkKEaet93EKLVJ6bK4UmTFLf7yeXaMb7F2xktANt8G",
  "key23": "dXHJStyEBhhLL2HbLB3xZCVvtsU96TUsN567hRoQ1nqcF82cBJUTniKuzDPco41Cm1z3yaH9ymBkyu72oetJxHu",
  "key24": "528jdwonLRwYvBCCVoKGuKwuZKx8iavsjKBhTGGrxu8qf2hwNnq4ojVyYRDxQTAEe2SS1NS62YReKVyNeN41Kafj",
  "key25": "21UPsExk3AtAjcEFRdBHYuDW1x8vhQuTUuwXWg72Nz1kc73sCp3tGg6vAeJk331MyQzjfm1LW2dnimtWph5iwpFX",
  "key26": "56XZmnbUko1RaPVVjaCdGQm9FuJ26XbMpP9iE63qx6hqtzjryC7RMGaprAsxfP86349RTeEZy3L1jtC97sQLJNhG",
  "key27": "5r4ACmFyinpEzB8M42vKucw1V1a6PghP8m1yadr1KsgDL28dSsmDCi1ZrtfCDGDt83eXWrdPjCkQexAqbSnFLn5x"
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
