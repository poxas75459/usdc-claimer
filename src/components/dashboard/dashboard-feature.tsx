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
    "5dDMMgPbGYEQa8Drm4hLFxiEcYqB8hzsohnKPy2vzj9zvbQiMGHBnUBr6z77c6UfXarJ2R4uTjhg4TM97z8yFstN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MMBUMUqaKsCAXsF95BkKVjP1hafYnC5mSYgoGctEhozMtnpt8UtTGyt2LRYTs3Zk9bFfaCQ5FQ9Ptr9Euaf9RSf",
  "key1": "3nzz7isAPiW6iXEM6SQU8xCtcyPhaEu7qKD1XFFiNBQDWV4pNohrb76TKXk2GzLv1sFGBy4szD7rt9ewsias5d27",
  "key2": "24k3GpRxNMyu7R7STAX1abkgoBwV7b3YRLzubFkkYCeqaLUYUytTihFSSV16xq9qC9HJW7BCF1Cf3P4T3ntJsyZh",
  "key3": "5eTp4KA186zZgfmUoUYjWjf48JoTpUxP2Zy5vnJq2vrn5FQgYAi27apLgXSM9iGifEUX7jVKu8ZJEfSMngLABeLg",
  "key4": "4SedLeUYaCnuBBP2EKTKLkP4PTR2ZjhaVdBeqLKMMQ7Wy1Q24ZX3imQjCoeS1nZUG1N231DUUeHirNxJcmEAk8kX",
  "key5": "UBdNoE3DCnbwmuxmuEAQon23SBRHaqJYY32LBjqKwiNVs3pwVCWXpMiH8RU71wGgzX165dWmovZWtZZdWjS71VL",
  "key6": "3a9akVXLZJnq6gtpXak846r2QcjH7TBSQNS2Uy3DdGkDog4HzgpYuizRZwbbz9AV29udYPrNCXrDSUMvKSVoTN8n",
  "key7": "b3r1NkwvFUF8XsTqxEZg8gnqo1JL41oNEccFTYzyi26WEr75u1AXpt19Jp7UkBKDMdewx7YtMoK5EmywaHsQhRU",
  "key8": "BL3FWx2ebD8QpZWoJnf4sWB5ffbNkfK4TVZF24CFuFkcjYyZmX5s65nzZdLfPnJacTup8UwV1RiiAMzT8T3xYTC",
  "key9": "3UVpXoQtxWXUmxGWMXvXaZik7VNDjTEPorMZZfF3W1YCuLgeRVyRf9qVD6gaE1cCZpMrNyZuR964ALP7tJg38Dr4",
  "key10": "58pWUP3gCaK4oj3Fabp7t1CyT69WPsZor73iQHySwqk8XEaswP8Ak6iWEx7thaxBAGNo37nhE3q5NANBSUAbRmQD",
  "key11": "2Zh62MnYGG9MbdAxb2MMKgaA4ah9tbFdaoBGX3jqV3DWmj1KxKdDjbWuTadGA5zzhYFNWTQ5MvBybzJnd1Xbnz4G",
  "key12": "5gikry7TddUtmKU4uTFhFyNigkcvwhYpWnjprkzsXvzVecm2W6ZhQmQir1iFcRkXJL9PCxwMT94349fTedWbftpv",
  "key13": "M1QypwYfzLRwMQewboDro7dbS6GGMTnFTDaoqLLTHwbFmKpgaAF2b5dTRJ9PuNA1gxM9ERAyzePLnGcPekuMKwD",
  "key14": "61BTj3htV48n9deQV9wzB1Z2uEGt1dhJkrcvGRmdjhMHcC2qDbkVUNuwEUAfrYiiXQP1wPbJMxSSMbra4aqMYQf4",
  "key15": "o5gWV7eSaTwhBuk6wee4tQnZMWMbGRYmUDorBYdkxexGp464Xr7jK9pANWjJXWedAzKFnVt7zVVHTqSyvZaqWLz",
  "key16": "3oBsHjApVh1QJq8eCeECfgSMJ3gE3HndiJKNR8vNjc7LoCC1AawGqFKa755NcbpWMRUxFRn7GTDY1NYxDaDLoLD2",
  "key17": "4681JwzJeJtjszaMeXYGrpqnN96XNKvvRFJT9tfp7ua6HCVY5HcnRHPubKDtcRKnzNw6huoLbJ9fzaLSMfwByGyz",
  "key18": "2fLQNsZegnJXA51u1Tu9i7aMJWMRKhvAAzHMbaxhGtzF12i5reVBKaCpZhppNGhtXeDvR3HUQuxja1mxF85AquFg",
  "key19": "4SbEGPQA3YUEv7cpiGnoDH4oEmB2mJpgEsc5CK4u8mjRaAFKnmxXmD4238E4151i52ympUS6sT6SHajoavtrRGZx",
  "key20": "38VkFSVwvoLkEikhN4VxRZg1cUaFtij54Z2DNNRcz2dgJTKRSFtfaxqzjM1F2ji5ceFCKuFHiyFnZq7utm7Q44ni",
  "key21": "3ZW61TJRpdFtMsqpPTjn2bAQPaHwqfxnmBn3rMqdjF6sNKoCqdskzjuQorCvh2uVTpzJemNRT7AXmkajNbnTz8gi",
  "key22": "VNKAmGNNCVzbx6Pk5s9K1crnfhYSKHT2SGCaHMLCU8SRSTn5W6NUTNX1Hs5U7odzq4Q2YB1Upusgi3bZS1TPe7e",
  "key23": "3WBtwnkLcPHzX7szJFngFyrDwX9BBWGgqmL19qMJKNpRcgDNnaev2gGBVna3TZbhgDbC8wA6Cu9WLG2UzWfKMqXs",
  "key24": "X7hEKL1LEJcHbpSCEi5qhpUEgrSAX5eirwJa5LFpdHZKQ6W4UkqEPXmRxvg4uJ9eRckydoxd5vL5dT6mNTUhq6X",
  "key25": "26MtHmG1hvFUzMbvKmVnFY4KNM8NmdyUJnh9NGV2HuGsYNJZx9qdvbqLt6VhAYNS7rNgDpi9TFiTj5CASgHanwHp",
  "key26": "2WrGxUc5yhhCqR2BeqGnTBphj3HR3U7pnzzFwa43quFyF8u35HNWvJ5UyENZdfX9x3FuVxKEmoJocURqri8zihTd",
  "key27": "5yxTuPiRqrvfDeN4q2LUbdwZQayYHxuHFzUSH1MmKVyXPpAmBAVwVwG79uGu9VBW3knovQUyUKhSAqbmyHbHyDSM",
  "key28": "3EX5gjAkRkUuT86JXDgRKBNj4yyPd3cfz8Jvhj3WqZxPCxHUUK2FCBwnjqerEa8pcmuD9byZWU6xcbqMwzAxA3ur",
  "key29": "LQ7Ksiy5a3fMAf5kzj9Zt46WAXdZr6Tg8KspY2HEEtsyDUuFvHw3rnst7abj7rcWvjWB6bTH8CKNzWJG6ZAAw91",
  "key30": "4zQxdqvLdcQxZVh2TgWStiGBJtQp2tEGiye4ZCt5ThTbFNub4DcziaoyD49h5reXpoZAMpt1CRb7qjvjf91q98BS",
  "key31": "RQwg1AabJTFZWt78UDXg4kNYHQtmwTACFXsRhZhMYQJMQNw6rur7TFrgsMZMRM1TsdavcSpgr4UctgdPBdWwLXQ",
  "key32": "4XhZui824mUHD9r4FHHxBASSFtfBJpbhA9M1Bo6rSwSTEPjbckGAaS1wqqpN7e5r9trWSS5PEZRfTMZojiSKLyra",
  "key33": "5ySHGVAstZGZTx9oMki3mv2XS7mu9ihgRC8GbV9Lma8XLpgvvYy3DxydzcW7fUMMQ8XJCySgvrGvvLEF9onH4K5F",
  "key34": "5u4cnHS3WeZUSUjnYdkpfaG991CwspMCxi59tHKdCnBJHrKPgVUiZoc8G5MofZizAfZAVvNDh3UXhJgd6qJBAe6L"
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
