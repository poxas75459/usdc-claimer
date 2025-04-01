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
    "M3grSswxVGpUn4FqWyav7M3EzE9NGcfCq7nW3rMqzqFRBuTZPA2wq2CsJpifzLLmkm7ukvf2JRUPaiCmn6uHWXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pigWkkQ1KKW8Qa4WT8yitWSvCZheBZoTxK1541ni3giQvKmnf2vyBXoA8Wc4GM3GcSwpDyjnFgqkJtaMUCeCK7u",
  "key1": "3VJnYAKDCCwMGFM797oeJtVCG6ZiYUWaHqbuPCB9FgUzJAcFZNiCH8fPFTw7hRFdWHwB84fdFnHB6jP4Jr2SBz3K",
  "key2": "NPHBbyQ8zPReZhoge6V7Ytp7kLKf42BK5hkwmePymvH2wy28TYwEvHvLqVCdhVXUgaDNQNVXJc9DnN5NpcMuocd",
  "key3": "5VpSp6UqTd53k6sc5LUCw1ZKiK3hNw6gS9ogQkFWZ3hswDDYB3pWFZpSCrR9M8aLF9o1J6qH3y3H8kh9M9Hu4mZV",
  "key4": "4zAVVVnppsbpD1269PHCxLFVZmdFiLceg9qufZWwjp7dLRK5h2jJd9JFUgkZdrWLNX5ZxbKhKcVQDAiHaUX8sRcM",
  "key5": "3u81R62Paa9sdwDvWJMGmoJTLqLsdYxxZvd8TQg1YCH4cL4wZsoZbFM8iRicvkBSYtjFUeoB2siFPq6rNmzkyo8B",
  "key6": "3Bhw6V5dK5jmKYRA52XMqXEkkzP8Pjt6ap4kp4n3RQaWD9HqAR73AVCFcvkHgeiQX5qMk1EZTfjVpMc7nJZAGsUs",
  "key7": "5cUmitmTqtCRpJn3tdacoJcs65YKk9B9mgNJbuaQRkCsJz1YRoWTKUvydGNaYKB6vmZFeSVkPEVV5T54eMnsmPFq",
  "key8": "5RineUSUQ5WQhAKby51mcoF4gnE2oJ5XM18iYXZK5ARWJeTTrMk1J5zYQ4fdNDrbuayPToLzUp79GGRqv3mvkXg2",
  "key9": "3mnhuP3ce7LiaqH8L9yZV4XdDX8WMj3U8zW7URoFvMXKRFBfAVEteiJkp2iZZ4gson7Sq8Np7jK3p5X3KzJnEmyf",
  "key10": "WVUhm8uveRPkK5oPgufp79NpiCbQ7hKhXHFDnkMsGqT9Z38JtKpvb6xqxeifPTdp62QgvLmBPLEqvWAGG2kANtN",
  "key11": "2VXwVCD4A4og7ZzfYqxzpqBWtHjDwhZqQrMYNWo3czoKN5uytkmjRjxa5Htc37iKKyXvoto8RpmLMhqJd8XgavYw",
  "key12": "SmKrZAZ76DqVfn7CiZVPR5b4yzbfLiRQUqVZ6bCAHy6CSXR6GBD8PXFYP2J7pUv6TBxjXDs6M8AQVoPgo1z1QGL",
  "key13": "5Tsn9dgRKfHn6zgquSVtp2iYNKrSWSgJBzLT5ZPFhJmhWTdmuy7bZwFteZPkx6Vafo3ui8cYY8PHvt9JXuLJ3f18",
  "key14": "5kHVhyMtPvQUKyQKAub9U48tUbgXA6yAG15x4TVzEPvDc5oYCG96dCWXPKNjqWuteM4W5sKmWFC7ptaUUt6waSFW",
  "key15": "2ztqSvjVgLYViDCpBXSYAiWgWzok6VQCT4gHtkqspiPt1ji99WMLxu7u3rmAET2odkzyQgnmusSKvYyharSc8Mnj",
  "key16": "3C9qJCUx7uG4CSyZWfejQzfUEDdd1HqfK5d8KtJcxXVcySa1UYguaCGqZqPGGuWDvfsK5RrHWAPcJ8yEu21KkZc3",
  "key17": "56Gd3N551YaTRC94cCZr3te26F2prYsoVVUZznZeAuMh2hoX56T1vrcic1emPQNYrHYappMz6amuvKxptDVk2dee",
  "key18": "5bQt17v5Hkhrw6dok3qphbjWntLmyTaE7z29pC1pr6Cid3Pgg29r8XW2LdLfX4hCKcJCJhwM4vAnqS4mGUU2vhTJ",
  "key19": "3rzp9xnQjcRUjSZTLBYabh3vKd1nnZEj48oAB8WzXSxQSyGQLNvp712gQPd76jWGrCt5Er4qeJjGsDiy68sNULo6",
  "key20": "C8i9i4pPiXMq85Mu36nE27j1Ct4KZzwbqAsn97difRf79j658iC41oCE9cc2xZcgPyUXiRS526FjdXhjJgab6cP",
  "key21": "5fVS86geJdWTR59afAGS663XQpGTgcsLcGF1xWq5VFMoDawjJVsBQVCYLuv3aJDU3iwPrXMyvDGnQX2HivK3Jfqk",
  "key22": "23ZUnHdHzdvC4DjbTP3qzvArmDGyzrdaRBexRwAZb61g4AixRL3GcLAPEhMacSqagrELPoYNYuLBBs1muZiJwXuq",
  "key23": "123GQrUuyp3o8LRr2BYvQN4vDKBiwPcQMHj1pQsgBHuSZs3jMmyvTvFizT4cmNLyDqRK438sbUY8XpMAkYKCyuht",
  "key24": "AWRa1zLvU5PCJxgBG3YmYJNc9KQyAqUUk3vf76Fex3vkWQEZnrNG4VpSLsNh4dco9QGpt8ZjzPTjbFQWYRwPHje",
  "key25": "ZBhUJbxWN5tSXEcbeBL288tRWpS6HDu1qJoCysrtEyVp22z43V5A43CkQKvcz1dwGnBCiE2RVWYFbWZRcq7Ab2u",
  "key26": "66BYJm4Y63sWLee2CXGZCoUhxanbPsoVQYxTVJCpiikP59VYecNys8dMUreH6U9zN7QyA8RSGVxVejpvhmE3e55e",
  "key27": "3nqH5iXXWH8w93Ug3febSNLfurYRixEw84TQ5NUC24eKDSSLETz1V2Xp3eX1pS5nGhkJiYyaFfBXzr6vjbSeKAdz",
  "key28": "3aAfPALXP3QW9s2BUtB6j3gL3Pyp9msa6TVMLT1CNboZbqcuAi5pUfidJ8vfbaQGMrGiAm6LhLzwQ3J86731SPC2",
  "key29": "5MdAeMpWF71UZemegrE177A6YTM9azyqg82wibE3Bv8fMTitTspKkrE4gsQwyoZ4yFoAXW1kNnD75wWNjjS8wPmh"
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
