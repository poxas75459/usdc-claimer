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
    "3Tcw6KDbpSPwErz1Lr7MJi1aE2iXokAbp89kVsEjEyfAy1nqt3E9wqRujzr1C4SJKphQgBgqKHax1bCiwQydKZ8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hdKncdGUbYM8tMqYiFVoKwrbHMWEzFdjuheXDyzV1cCJt7mnNPw7ugLbpKaDofJmC6Sa9J3MVmwD63Zb9XUM3yB",
  "key1": "VXXy1nvzpmviukP7HDCPLeSVA7Zw7duXPTmmEZKaWpL8yz7tEeycKsXUeXBjLThtMXZMstfTj2m4VCULYtQpD9a",
  "key2": "3VZ1P21notBNpdRJqyZy9K6BK3CmCy4QDJpjdRuHz6csiQxiKwpmLJoLUaP8AN8epFTNuv7iYGDeP8B5Stsgf8cy",
  "key3": "2XKpZxBpsBvUAf97ac3TyYvVPtAnXtVmRdzcFd1dNjcdAE5Zc71cT2jSbzVLZeRWQnYqT1mkMsKfiYQFe7sLV6BY",
  "key4": "2NxaXEauAWHQQ1EmXoRxLuhhWjHCvH37oipN1p6JFu8owEHEgTSDHv5R1FHAN4uGLpUDsHjd7KfXsy9UqZNNzGq9",
  "key5": "3x6yi6CHe6qeDfG52hBtTUcTy5yYtzJ5mYyuQouu6fqPrFow65H61JMtuv3nXXxHQJ48UBVcf9n7WhnddsMCKFNF",
  "key6": "4NUWS6M6Ut2iCtQiv6cjkQgv8qzF7cF5xzhr556TV53JuWwF5p14EDm3fSws7hRcgkQoLn441VUpaXKxkyFZCXa2",
  "key7": "5TrmW4Hz7sbFRkbKvBQ5W444L7PQsGF8wqWFzXJgjAJQVqvVuLz8KscZW9KFGecb14hbMSsiUbZpZRs7pu4CweXx",
  "key8": "4MuU3qq6qpGg813v4kHRjJz8fi5AokhT2V5dG5LF3ocb7fnc1bE455NUVVgSzGDNutFbJEtt8AXzyJgfAUUMko2T",
  "key9": "2JwC4E9WD41KqM7g2JrYDoiz9LPQbRVDBT8SikWGBfbKVBkZPY8JBw7cAR4rPipdDZVempkzWTYPp7frJSxXfmk",
  "key10": "3LFsbch3pKKeRnh4wCLGVEEdngRnNEd8khemVP5g96HbZ4MWMdicmY8hioRx6SnaZQhWfViehpYmrR1MPjtTZREN",
  "key11": "31Nes16xNQhuqfyQ4H4qy7VNop84bQokLEc1LjiJCggT7qf51z7QDyd58y3hHRBMibeTQyXw4P29j7HUTmZR88Cs",
  "key12": "3LSChzr68CpSWqBa9TrJmcQfJhxcPq3CxrRHSHmAEJh4kQtG4eZ3dzYyhddQfr7kHhz2wiVpkATaNG1Q8qtbH3ht",
  "key13": "TePiqd74WUkkpTRb3xAyvHJnj1FSQpAe7pWq7F48LCozH6B1gcdm5WJrhuc1tBZpaMPG3mxN1iJBSfzAbh6WzQL",
  "key14": "2d1UgUNB2s5dozW6hWgPZjMBLyvB8H6FfR6TinLtdJCY3T22wjdsamqq21BKptT3usgSbC37skSfc4f6rSezMqA",
  "key15": "25wENNgU8yGAaSiZo58pnLyNkL5iZ4FJ6asi67bBqDiHbP8dyDgjaPeP8mviNcZGbNyF4LiYVWxaxnupWhqm4z9a",
  "key16": "4Jb5YLRpiNiZw2YNr4jSR4aDMiLZKL8ELsXgZgMWCgeCzLnp1Hc8SQvfzLKu7pukVXLCHfdzszRkpeqo3xPhU4ry",
  "key17": "4ErUxHSnaJQpLgwEkNtc8TdYazGUgUSsYAk83wtd6ynbZxhccCxrvrquW6J7czv7DnuSBSeSKN9NAzv9STG1eBNQ",
  "key18": "5LbCJEvFtFC45RdHbwB4vKrjc6wC6AUcicbCSLqsnC71DPmrXzrC5DTRJzLjggRCeB6cWbAGxm6JQ7EHD7bPzEfp",
  "key19": "65kjNYxhXRS9jERHrb168gZvP9r3qcH9wi2ABnfGYFXSoB3yjUftk7sCRCpasDNEjsqrYRL1XttqAnjTp7FBkzTN",
  "key20": "5AbEiQvpQtkeYFthUJooM2PPPDZo6QU8NYri1dD2Atq6sKamVCfdrg9AgxTm2sVEUwbBaw3PDaMLWt6eCTQ8PxVm",
  "key21": "2egeGMqGccG4ed1G8WYzYPauRWTYmoTV4KVoJJkbTGXXJdC2fx5RgfiHosZSG5E7sgxgyLHeFDh6T4TUe6fR6Bgc",
  "key22": "27vwaQ5BLdc552iFNmdc2HWeAUzuiFbRL6Vmo8hCPzVMxfHFC9eARgi9sFsQFao2PCxk3w5jstZmtzVfEG4DLNzc",
  "key23": "29dmk9uVN1mDU4dZnwKyTo2P7c96EFrLokgxVZmHVSVfjYSCzzHy8hajj23XUcF9ojco5uHkxQcLxVuJyd3HVJUQ",
  "key24": "2Dx7VAqJGhC1qVXcnhR1L6SVa9TRwKK8QL3tgF1tuAY4xuGgPr3KT8CSTsdtDRTDYoDZm5UZDidPZmCVRmzwWrhi",
  "key25": "h8mUWjdRFH2XffP4p5LTCFJZh8JonRcLuA5Wze74EqYS4hbY3JS7et5iwrKBod5zR3pNjsLyHxT1n1yMAD18DJh",
  "key26": "f4hCiQJpsZk2GsqndqHyix9dd98vzroPCgD8hAcHkEQ3oLjJKB3kGZU5Go1Sb9hKKXnz4Fzcs8cjkXCJ2ngHR6z",
  "key27": "42otyBYiogZ8Bj86hPEUvaPdnVYD4Hn7w9yEy1M7WKJrSvFNUJxbiNQPAqYoTWMDgu8uRZXL28ApwCujFsuDaaZV",
  "key28": "NDZTxuFBZkyQizDNMdGrCgZh755ooP3zzminXYi8w2nUGbgqoDejhU2XbJb1EwoRtsZPiixACYPcQWxdbrzBCUZ",
  "key29": "2UYTsqPSBM8WKD5j8FTqZt9xp4A6oaSZrcgxqpixzTHZQEMivqb1xQqR6ckjJTBTwnFK8hfT9pyzXeaaEtquWAby",
  "key30": "LngaLPnwRMt8viPRrRFX9G262zhyRsJYmDPqica3JgynXPfkanZACy4U3RBdJAn7XHUwvQmRwsJkmZvfLrMwosB"
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
