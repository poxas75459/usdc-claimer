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
    "4Xe8RT3SD4U2PHLHzGTJKuYd2dkY8VEhG3TsXsmxD9gj2WQ4XyYVmBumS9FTFpauMnhZ15KjvBaYyAFW9JgwfUK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3peJyTxyqqVGzEvgHyX4daRgCenFjqA6o4bbYsVbgQucBxU7dqMvbcERAEfoLdY9zdauQNeWXQjcNFjeDCZ26zhp",
  "key1": "56Pg1Cv4tiUMTb7cen2r64kyPZNirDbsKkR7DXD2xSfSsBXQMbLjUVD3ZG8nutrdoqPGRzfPCiNo3RyKkr3pNDR2",
  "key2": "4kiWnBx1hUrZPPJ4r7oAPSWV4gwgXVjfy5vANsCQ2V2t8pkLKwp8GPH1uWg4X4NA26bqu8QKpEpvxt7WpzXuhuVy",
  "key3": "4RYssRTnxx4K36rMtC1ZXQRZLr66bPSouv45wc6KJvwJTm4izVBo84jkS2NDuSsLCrgkFsqXvbCftagne7hBXWB9",
  "key4": "2D5SXjJhxwsHm7pBJfzbfna8DXi6RDZT5aw6NRppo52kepmwGY31jcc1JTvWcVeM6eFCbiRNVm2JjDRNWtH6VSa5",
  "key5": "2iU46vgQ4eqpDgLXrWgwLocx9cmpsgJtGX9p8oJ2KKzbifnbgoAB5RPGcc3Sj3jnf1RjyzXwH9sSBaAXiYLAixtN",
  "key6": "5TGw6v2yS9go3bp9EE4yVPLT5Gnj6Vibc41c4SMeFKh1nLnAKYt3GnGs92VSAr6Y4kQ7oSyQvdpB5m26QuZvgVUB",
  "key7": "Z32rm6FQo939Dru6nvpBMYvVF4TaPR9qvohqPEBUoSDqw4hSTsrVLsyWtjgkCCTYQbaYmcp5jCJQv47XSzzMuCG",
  "key8": "62pAdYTqhxqe6QPfKp3UCRDyftQeN2AyaJxyzf7v56ebvd1CzEmz9CP8uaK4hmUbcS9okGE3QyMjqPB43CZk6daL",
  "key9": "8dU1h37CL34c4Hz8vG2HSHdwsdpy5yyBaPHTtmVxuywwJmzVbdtVgfLmccc54b4UCTQ8SVnQ4xwjSzMMhQ1Cr2X",
  "key10": "2HcxXPBmeu6h19byyLsoccgm8hLQaBcBKKeR8wHXUHw7HF2CjfjK2bMWanrUJ74D7LSRVk3t8iKhDfyCszzWyLxS",
  "key11": "617dnYKnncj7zcCpAZ4GqdYi8zKmans6b2RLtmMkA1iSRQLRKtk8drfz76TeJbSv5w7Er7mfhqxxK7sLsmL2Xkvj",
  "key12": "5cK2kC5XqBEUPxyWQtvQ72Nk2XJB2GPL4DevWUzKGc2PgTQT9Q4PJJaURhjpX88n1NNJ8rJfGHuKJg8e3oTHRs11",
  "key13": "3uwe2e2uozMutbgvrahTw3tCYdaoZofPxCiBvk7bh9mMC9DRXG61AP4V1uPbzXu27E7a8VYwKi3k8Bnwu44swSDY",
  "key14": "pMARTeANphb7cwAMiigB2d1ug4AtEZaVL47HjNvGxwcwd3heu9nXPCBBDr3qFMvqAcYXjhTPgMqEzCuwvEywcRH",
  "key15": "3vZqBX4n7JF8ttZTgDS4yRZHTWz7Na49599NzNseSqN4VUiQgLpPtg4i9V34o6x2kjxy3WQ1182T3aDdEPhmjeMe",
  "key16": "tCezjxkFCSEjRwrGfEq7LqwtKnhEKD6uDsAKxp9kyPGBUUsmw2mnmD5xYJcsAViqfzvRPHVPf3vCLuWjWjXk6xN",
  "key17": "WvQG6NbKuG4q497LE4EgypuQLhragZphPaPWL48NRk6UtP4CjVoc1a7V8awoZbpfWDm3c62ATvZM5Cf6NR4HvoH",
  "key18": "5YXPwQrNLBKvcPqWHUnBwhcx5Y2tpVgjX7mhKaaWer8GMKswsmsN7tPa572D24FRJnoumuQwZ2AMrBijjs14JqcS",
  "key19": "wpKugfaMRCXJCmWAtzCR2TNMCETqgXjPC83VmbxAywbsMMTwhZB7DgDwUTCQeD4aiDXWVkd8iQkUxr8Ym8fFJTt",
  "key20": "h5o3U9GC9jPf7gLSsWfWZUfhkhzxzAjDV43izkDHWzJao5bpjFU72VMgZXApmMTfDYMd1rbiEFeRmFAc4C2sgT9",
  "key21": "4b5Q23qstGev224ZEZMMCHdLUejeNoVimWTyAR6GFrcjdk1ZZQwCyL3hfsGoBZXuRenCk1QUhiyXAw1aX12aFis4",
  "key22": "4YggiyjhcieQm4uj9oehg5KEB4MDFtUPE5SAaeEgtr5MMp8h775W8kQJri95f4s2L2GM3mLwF5bjyBkCQJJcgSNC",
  "key23": "21ojd5Y2ipGXdN41xnzSvSWDuMg61UZbkuMKvvpHEZESjJU3GeW3FERWsi5PTCReoP5epWPtDEU1cYVmcDf7bKnE",
  "key24": "3xLsDCDGkrqAgdC7wytpndHjsLgxYW612gshWpR2GqZpEFiK1HgGQsNVUqcck2tbvxWE3PhTD2aqUkUbd1cJmPYr"
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
