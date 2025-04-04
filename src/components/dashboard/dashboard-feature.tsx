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
    "4pHNjVt2RmudNPy6Fht2uyZF9BbDgYqdJ1KoSkqgMBbnQSwmEbwqq7Yo2rJhRabUPsk5rQDUc6Qax5FjvcBjRE5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fsBztKCoMyRWAiAcTTUaPZHgVsySWbmcPAGPG4RS4sV4YiRarkybBQQ5b8eQQkxKjmp2NiTo1SGmpAcdPyUD8e3",
  "key1": "5AeigR5VBu4iHtePyMr7DtswsNeDLZjKZrVRu9z3bwe5sSDh5MxKpzQUJrrPu9U7JCb7Ab9ce96sLfjTuR1jMCUS",
  "key2": "EHDasy786NadgDxZjwPEhxMMXfwgKemeefiWDpySrnWPPz43Qi17ceceHyCs4ymiM1oC3TxxvUCDmR6bAavqZuJ",
  "key3": "3TkiGvCyjnJdnYFF5q26Rzw1GPK1dwnKNu5Y6YRouAZ8R1XhxdEp2vPQXTB3JSjJNCA8NNdZU6YdtFgANpbWiN3U",
  "key4": "4YPQoLUTFHgTxo9GKGzog2ArHgMkeEtXpNCmdX31THndNizUtjuaL86qfnhWS2dZnbdN994ybFyAX7Rd3ZwZeDfH",
  "key5": "3Whcv9s8ktUn9eApkzfs3eEbvVC6sQG3Ru6HgtMfyHtQb3vvA4GhoN5XE18GQH4xNw8svtTwoD1rEq6YWJW1RRAZ",
  "key6": "5gSod73kDQTHVnZPctZ43URTdYSd9vY2qa1NSwRW3B9r64iVPQVXPDTSUtxTWkiQbme4a2P4BmpFYbo1T4b2gAsh",
  "key7": "3z7GDW1FXTZeQjV81CGRs4hyMV4YBC1YwLPRiZGLEBKNKiRgtRuoKjRMvBDLi8UUzdErcALx8vGPKyxq81QbCUq9",
  "key8": "5qQrM8ZSQzP7A1Vz3ezBHqrXFnL3eAQYMWWBqQM5zMcrhxhoFEjf7FKoG5W8nmgZBptdQMtiFCA65puTZQESCsf5",
  "key9": "xjf3XSu14XVSiUjV4f3pY7APuxJLok5GdYL8bnRvxKgeTsJD7XMzTsDcwGRdHZCmYeusVmUecJQLbMhfSs5Joev",
  "key10": "3884NK63aP1tQKgN4qzopHaZDrtLnahPDALtwt9988bo8EzBXNFK3uXif2funuP8HdWZaMcWLnDVm5usJebMpDYg",
  "key11": "4TDex6sGjrLdE43YeWeVefyBMNvcSYBYGF1zor1df5ByoFLw5gpZuTNiagcsuqPw9JAyBTrKNjxmEdS7tquusS3n",
  "key12": "3pT1dDr3KSWczysvAnRENMhAN1FjCS9eSyZgz5Ypz2SE9VgUDionPMmuyc7UxgR4r3JP9Wn7AWxybn4zF94odJfd",
  "key13": "3C3ewBHinMMXp2nx1YJgerd96hafpqvqR6fvVL15HzyaEVU1v2spdU8Dh3UnmEjE5Ca5PP3adzDRYk1cixMoJTPp",
  "key14": "2DKgcFTyVr7d3oX3xzuEtUE29Yo9iWL7ch65G2FAqnJPTi5T3Z8zbGvQ5FhDGe8596RvDZvdVMvoGWtUwEmb5mbQ",
  "key15": "3ms4UTmwkb1fZKWwQhdpVH8m1sRZEyk822mF85fqrtCqmPnkpdfwMHuV3iXhfLKQYrDtgBq2SLsEsoJkxx4wV6UV",
  "key16": "2GeS7fZGp1fZwE1WvGLaqHBNEmuwNHGJtqzp72mwcpLJZ8UaLGRkRPZ8esu2W5i8EZfzbt4TZLf5yULvgkrPB2Cg",
  "key17": "5eL89R8mQwSdeRMVYJcdQDTzdCeEhbERkkfSV7W9zcVfsiyuyskcrQhywyFskGg22Wh8AZdkjayhpEN9EqLk222w",
  "key18": "3yow3CrXVxpX6g3SwcDuuT6fEdrKrJi53E8PWKxtJcCVYxoexRWi6XJ8YFYFc6LoVmkLHmtcSED6Mf8fPtJ9dCUZ",
  "key19": "D1bz3LQePEh3stMxZtWXnhCHYQz9xtCnyGe5rFmv7dXiJU7MCaMEVD7zaBZrpgZTj9kDmYKh8VyuaLmNmNwZtLh",
  "key20": "2G5JcQHsYv57zGCmNBFZBcndXikhrHU35vwaqVVMg5u5RR7yvBHYDLG4pPRpGJDgaDWBHexxKPyMxBTQfpa6jmY5",
  "key21": "3vmhFMAyvoiz9fHZk8on9YLwsDuPAaE8husRewhodC85ZFCcy8RxXQ31F4WVP1vVttK59hqNypE2bKV94GdU1jFz",
  "key22": "k5zQX6qoW6ZU5izzZzFa3cmDXUrNthbs8NQStdKr9JFxMBshgbKHHBGTMEEpRR1HmvymhLa9UPuVMttWK2HZqq9",
  "key23": "37Qe4hqzFkNqGZCSnVtfZCdx9Cr4qWDEtikgMSp8CyBRYWdEa6nh4ugJLtGjkfgyjCy8wqDCPAxEfP1JGxoFPEwS",
  "key24": "4exheGYCshDeHmJNax2TQ4M5D5BJLyJm9ZeDrh4upgzga52EhJJxQZEW2DvBi5eXdGv74b2ST7dd391gQQGvUMAJ",
  "key25": "315p8Mqzou4Fsz292uViy4JGmNPnsMZQEb1HFJmyCGoN8B8cFX49Moq5P4oXH83DpRaSJZW1z4CBWSaPkYg7DAg5"
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
