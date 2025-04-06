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
    "4kiVun1qeTUk4iQyNDbXNahQYrsRgrY2Ayx1LXiabwn3psaL19SqsqUaC4Mdu9JYrzeJGXgY65oywxYiUeb4zKGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y7jmFjhWzAxZ1QesFRMXZte4YFy5vkKoesdVpEbQ1Vj2hQWxKoDXJPvJoBgy7UpVefiLejoz7q6PYETR4hLAUnD",
  "key1": "3dJ7ToTW6bTfFsB1ugSJ8jM4S92TEmCwity3WCMc4yQ73fTKGAfASqUN1mGZ7rvNqJqkLXDPN6gBRcZyV5FqxNDJ",
  "key2": "3uQuJ1QzyqqewKXdbFcH8d6qxvSA33S6YqnKQEYmzNWduGeHc47zm3sawU5R4xUKKYmiUo1DbBo74jMfm6muaQxW",
  "key3": "oPa2yNbxbd2omzGzrq7DNy5cEzFjfNh4wFvdb5Y3cmubqhcfSWh7SiAGgjPixtNbekxrdJba2jPk9EDtZZydQ23",
  "key4": "2miG7dNC3fiLSWTSAgMfVB4DDqdY9NtaskWgccSnoTDNkCpLVFVpe5C1iKDHaE2cZZ4pkAFqxMS619ssaYKMnr2",
  "key5": "5ZzWjY6j4GC6vDFwbwbDMdFAHYcsCcu83rsU8VZWM2yvLC8gyCVrvhi3ucn1LTJLRyc4MvJWBZFFCMyaX5Y8m6yM",
  "key6": "4d2oR8fFdopMkYjjxktwSppKMcDGAJ22PiywUCAR6TALvyup14arVTdgJv4WUqmjr5KFPjxuQKxKrHorxE61v7cj",
  "key7": "AVGhXhcw1eZoWkrWQovLLpRwQs5xK9KSxqhQnZwFR9k2SJp2PAZka2cxBSBziNtUocT7EDSGS59LS9pGxJ9qynj",
  "key8": "BtqSUyJ8kYzZioNwa9WPDVyGQL6MRoGDTicxHHCK3zZBPL9h7mP9Dix8R99xDT7RigQNEGikqJU41vCg9trH1xi",
  "key9": "4L1F34C1VCStomB4XpmMxbNr5hJDrkRHwd2coaoDgNZ6B3zKrNXp5K4EvwvafFpwP3ZKPJWPXRSSnbjJkMY7kKM9",
  "key10": "4at5dzHYKpyXbsxak7u2B812PQP1ECo1aVQMnGFhnDnykNmodEE25TDsn3WRCJMi8T49WwG9vHmkD8AsDjAKCBgh",
  "key11": "oXPtQPMa1ffWE5Gs2DjhD2vLn3d1eYP556mXAYmKuJNnZfLAVyJq1G3oQsECC241B1YqRnFjPVY4fpzNJRi6gTn",
  "key12": "4q3bHrNj66KpD6doRHhjMcrdbamMJZh4NQ41jyYHjKXUcmujNUoYdzJ6RWJCyn5MHwGVsmstB7p3jGi4EUPSZF27",
  "key13": "2YWTRagxJ8QQTk1wvZ9BK1KRySWWKZERA5U8ZU9BA4jXBqNyZs9kYwSgB4QiBPLPscYEJSuFvFGb1gKRaRtQamD8",
  "key14": "TrD7BCUb3XyaqaGK8TqvyacPhToNa9rhsQtazAU4rxs3rBCZ6ntNCfPe1pPLoDLG1HC2xiaUrDP5DRL6GtBCfbC",
  "key15": "271UiSZkUfB4cwgZBEaRHomDGrxqSeU76Cu1Ftb2K2Nj5uEnPb2T7hp2D213arQJxXY9YydAYMZAPY78oQPigchM",
  "key16": "4tnrahNCyjR7RsxaHShcQU2pCtYdfMdvsBY5VngK2i5B5kqsVaEtd3TXF7tDx2vnEduvEckXydYQRfM8gPkmdh69",
  "key17": "4aRtpR3DjCS8dEwaSuQtDCD4QBJmUepCXnvstdCA2cn6dmMvQVDFdXrA9iCES8aL2nQG6v2NWyT7V6wgi99ajie6",
  "key18": "4sSUvJEcmmkFDhuC2hqN8ga5V24ejgFkWHTGYhjhSt1YvQS6RceppsdddkQVNvp4WD4L9dtrKRVwoLb3jx4N8qMP",
  "key19": "5HBz15Y2wjo5SK75bye6BU3hhGyQVqW2Vbs14LnLSj4D2bZnNioSbuFTt4Qe6xuGM49gyLEG19BoYSzs5eXT3bb5",
  "key20": "2U9kKnpSr17oGKi2BGFaXnNXyixMX4gRMaNNCZGrK3zu8pBEjEzK29Yh5KmB9k5sC4nQEKs5qNNUJYsboB9ZkpZS",
  "key21": "2CLYpjqQBPZ6onwo9CkNiTmdFAqHw2466joCHoaSBKVHGYaYEk7STjMdk3fkLtvq77quWXWW81fH4Cy9cQ9PPzJ3",
  "key22": "2kz73x1KtyM8rev3T2DimL8MQpgN4jVVb4XDG68FdrSAiDNM97YEp2FTuigC82HRr9EhMniD9fvgBjPXQFP3EHnL",
  "key23": "3jKiKZSxbU5RpDBqKtFFiryBhSqvmtJPx5EXgp5YuodSeFp5UH7tc5ocb1exNcTuu9Uu7qBba4VtB7E7v5SiQJ6x",
  "key24": "4oDPjEvpq5oxGBb74Cbkr5okEVwVp9Ehc5QEVWH2d4hRCBYxYGpLqy6Sro9GLWny2UPiWJPNJRUmR2DEw6WdQvAW",
  "key25": "33ibpTVQhZs8yGkz6nXrmULfrPE9k1Zh9iFjXM6vTo8mGFaLjCfGrqJWXbHbF5gt555njiAnbZzmzSD1g5ZDYbN1",
  "key26": "61ZARoV4v8APDh1bfdeR8xpw2abU6fbC7KVKWTTqpDoVWetU2JPLPKhdRR5G2pA6aUhWLTJKDq7ANxuNS2Rmeprn",
  "key27": "4JrmY4ba9Gma3JiMuoBozamcjHRsRncDnnVfpj5sKEH3FcufrMc1BEhvSCPWg9GAGvNLgVGiKPzsXgmpWYKmB5gq",
  "key28": "4mz9WJT6LcNGjfM4uhbuUvQzyL1GHqLfUyviV3iaHwSWdgYbNxLcrkV5cgsqiaqXSeeG45NnZtXC96A4iyEhNBgu"
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
