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
    "5Tbqq93VUQaZUCNbM4PDeiacBazhyUZffLthxdTYbYD2kw9NPVhz5USyvZKgdFdmeQg6VJmCAab4VFJTAGNJK8eq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36FpTGDJfeFxXKZ81ZQUbYr8DMEmEaQuqMJ428kf23PrCPkodbmBCULTSwuPCqgZb4iDFhahFWHwRjGPbPSxaLBK",
  "key1": "4xVonUzmgyV6xakZou8wFjVYkhtEq6nTSWFRadWTHM63bgA56cf8JcXRnhLbqfnCr5HkJbrgmUWoSG3537vHvGj5",
  "key2": "4hWCERxNo6eBNoE5ojMxEt1poY1v7oMJbiY8EUQkxKu3ZMNoMDBgwhbD8LhKg6CHYg5urVGxYjPfbsAgiHXFMrhg",
  "key3": "5D9gcKd4qZpodSxwaZriL2sK69FFSS6GDL8H9ztMF3BUNNbMj8knJRahYYiTKoFZ68MZ9teS76cNzY1QfuyAJaKX",
  "key4": "3Auk2WPyb4bpTfheoFMZE5TKKURETcjy9f3QAExzAd67EXMcMdeRhmvZ6totrdjuHMARavEcMXFj2DdBeP1xrUni",
  "key5": "3X7tjASEoRhWnNjK89hR77wh2RR8mNuZa58Xcd3yMyttnCJ2g69vYm3K1Vh9WKty9xLiM2zjKLX37eMNet9ENMU7",
  "key6": "5oPsDZmQ4Yp8CRJijUzWxJW5pyELrTzNBHGh52B9SuvWCbg34F29QBNiHwHeTGd98B3ndkeahUhgX4mxtxE5eqM4",
  "key7": "5hiCsuA4xiZxPZAgyLsvxYMaLrBZUmBWuMTJHdW22znVhcJQ4SwTMbU6tyGJRj1VrQfPvQi2HjyNvK7b7WRSASAZ",
  "key8": "ArgrV4KHpcyUqnc4Gz7JpAYn33RfHoKC1YHhN13NefZcEeg2viMX6hgtJRs2iitjRetsWsehDACFXDYbJv5zTcX",
  "key9": "4HLtzYhJ3qsEf38oiwpa3m69SZu3NuZBWiWtG3MHAraPV5EDoTUi6HkGmLTnbKjGxzkfqBBvbtok6tRw9fz8iGzn",
  "key10": "5mfYgeDtFw7NR6xPkG2rnjMvf77m1HiPrVMUEM5dNSYniU3zX7j8yCw6LMFZonZKCLXQy2ikAAkCsYcXfJT4cjFC",
  "key11": "2J8CBqDfhJMGfa1qCdPb91Cs5ur9Aw1eXXw3a3CameVCS4WzL6n84vyFiTDz1TLDd1RbbPsdvJXeVrk9TAWDUU65",
  "key12": "64zK9LpUZbtV5SqjERSeEhhDjsDfprs2SMFGs6XrVJZwzHAZsXMx99idu6S51oyJXLhawBvHMDodj4MDcJjiG3NQ",
  "key13": "3P3Qa4Y1KcqUwH4T8uC774qygeZ5bHLKVy1cHWZzwd9K4RT4NUcqToTgZSdECHskirpB3WPrAaqsgBQnBKkk8xcm",
  "key14": "2jhNP2yuEZ7ndVy17Vaa4DadoE4wehJ8nCAQ4uHDFgLbDfEUExLDgFemMLHcfHKQTs3ajtqaX41wg7xGbRNJes7i",
  "key15": "3raxuCLCN5SwhWmJDvcevMnvMpVHbSsp7NcZr8YkGUVZnkn2FvFcXFHf2LJSMVXPWW2DzcpdhY1aRebA4jwXk7kV",
  "key16": "12MEi9nxj6GZbJamgscC9XVJC7ket2fMAUXQrj7R1sXCeVBi5rFaBsa9DTbvrfMgwqyE2f8uRc72Yr9dNcUPQuY",
  "key17": "2vzZmng7N1sjMmtLHdQUCcMtq8F3geisqguD9sEQZ5sdFYGC374bJS8HkJmPd8RM92UYqm7LAs7yegbxJ2EeFDcY",
  "key18": "3X9FgT1vCF3WFbRZBppbawEk5RiacFGQoSRwW66q1nNnTBtFVSbRNzoDUB3XkyJ18rwyxiVbDqNyD6msrhuxr77e",
  "key19": "7f58rpLaAL16pr9prZJbDc8JADeWwyA1BH9PpZjWv1SQWGPebqVyYQNLJUahNudn6aSPWD3Ncz5tgXcTmjRFSxB",
  "key20": "V8dSZvNaqZzBP3aunaKE8ojAMFu6zvuhq133iRXpUPn74m8N5JNTb4sDrspRaNEZ4mYwEqoZYMirc3Hscq2fxQz",
  "key21": "443a6vZZbHPVkU3ZuwzKau4expGdzCcJjG8Htb89pCsagEi81RDkkeUFA7iQBGtLtrtaDr4sFt6cKisDY6baGogC",
  "key22": "4yzkycLsxBBf21dfaBZDpeGKMrP7jkNdxLJR5qSLhoKy65TrC9NuVE5GjRV6WxjTKtAQHe8Q24FGBpXV2qv12STQ",
  "key23": "58hLoY2BMt8WCuihcNHPG24621ZJgFuHkCFYrdvxviqbqT39DvBwrEGsJkGTgPWidVUWKNuSFDSzLuoWB13FQgo",
  "key24": "3PR39r8cgTcqM6DRht7xRTTaNUqkDUSyLND1GkKqFw9hzA7vghwnyxX4mz9VZo6uWQPMxwDfYVb97toq1cbNLST9",
  "key25": "pWnyadmufeZtsHh1TuP9rRKYM5r6uhYPYUV4m4TXWpoDRVdH28fc3V4rmGWAQjVfJbJ95YgdvZxjhfEWQbhqqz6",
  "key26": "228JSYTurYtGsRMQH7G3pJR1KyvGCoGeeMFMJNR6vgDFW8WFW8ySQiStCsQCc4mUaNHeZFLoct2LEkL6E93nDwxp",
  "key27": "3S2PfZmkj5wh6HoxPzbVUEEZEQ6QwMjn3bjbfXQQ8FTDwoQiV3VReTRmNpxqB8LwhgzQFaPCsUj8cn9YtrDe3sZ3",
  "key28": "ZxCHLXtz6rJRHgxB1zJTxjqsecQxXB4AuZ1kS2krBbkUXP48vzkcojqaAzPs2EX22CfukaH9mvCghEiQeWUYELa",
  "key29": "5KdmgmfBoQt8NsDkigqTz2LKs3hTSb2JKPH7dothRndbMv2gw9cvKcoymDHEs27Hn7body5tDqorKNDWyQx8JM4b"
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
