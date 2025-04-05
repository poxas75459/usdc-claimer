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
    "7e5ymurNqQAYu82n3HgWTuZMiqUfWQAXbp2oAhw76ushMvjZjRVPagZuchT8BSzg3tQrQtFmomt34JY8KXE5Kah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54j4WviB3edk3iZ1JKFrgnRCtvJwsHJzajgrrNtXxN7oCaXb34Yx47mu3Ny3bFrxMvH3KmFGoic2Abjq4cQhC8PW",
  "key1": "gEnX5UWrooDbLSYhjBjRn9gKMVg2vQkm8b28FDqsZi3FiVdTjk5acEbjAKxST4wJw6m2bxq1Z95Z6YUk14WuRVs",
  "key2": "4nb1n5Po6J97qzXtFiMVe7CQQ6AkTZPhGkjXVpePTQzDuLC6pkCo2fToERukuJ7cn9cRk54fDDGrPkNJnYnQ1Y3j",
  "key3": "fL1V35w47o6Y6BxL7gUJEoGJddExxfZJRc1pnEXuu3dzkxcge6HmNdPcC5EGWj84LefT29hx91nx5HJgwkmzecV",
  "key4": "2pGb6xCapitGFCdt5WHkr8HYew2ZpfTViMjL3LJUEU5hq1HFDht1F2Zuq91nU8kAhH1Jf6fWYaXWVVJR3x6UuBFG",
  "key5": "25wrY2yVcLZK4cZBAX3fq9gfL6YwNc18gfwCLSQAcg9V9driNX2XPh5SNPvvw7CMVYpsR6QB5QopuYWaoiVHDyGb",
  "key6": "3uRNegHXQ5LngpPX6ffHwTt77yjEgiLTH2ux8GqJptNY8vFNoynyLsabPTZsA2ZHmXZyr3kF3JxcBApDgVotrZqW",
  "key7": "21fsyUc6HFrHhpfzn9RifR7nMyjGoFPYF8KvaLK6F4byw6pFzY19U7TDsvZGuC2V61wkd4jnDVt9cBDFYUNgEGRi",
  "key8": "32juj6gMGY6iLgd2eieyxC4qNAnEGoqLryyvNpB2TcNax9reyYAUpzQ58zSuQUpu1pMLpW3BMSvpkKce27EJFxFK",
  "key9": "4TC6G8tzCJYXeGbfKZ71cZVSc8CT3vKMYnB2y3tWrrdSRQH9rtbQEyN6FB2HikiijxVs8HFhxFXbpEVHD5bBcQDt",
  "key10": "3V3qvmNihQBf3nTCmFBjZGWA5MVA3pyXq4DkJfeJCGL4frFb4HfVRM7pJxCXMWeixUL3vAdRXedQZDxEPapRFm2U",
  "key11": "4NyXNjJieA6sLYTTbaZKDo2knqbjT9G8zd8E7QfovryRcDxSqUo68iVDSJ5NBkPv2hok1pE4QcWg5XzaAx7fLpNc",
  "key12": "2t4h8m9uEMvoexLFZftDR3URKghnJxRo4hsMB5oXft6QRVuN7xFJvcw7P5358jN6usLRQQ63WLbn4YyBkWvsBxUR",
  "key13": "tvVLrcoDQthFCQcCwQsEXW2PmRGXeMRgpRSYUh1JTa5J6F7KmgMW7bvF7RWyYWaUJCfhPnEELPsRSkvTgUNCSK7",
  "key14": "2ajFzSRp7z4wBnanNb89umW3g6B7G8CHAUdcnoNFh2xQ9R3ddUzj5KNYemi9fRKDzKy41znffbtMNUDw3ry9S9zP",
  "key15": "4Hfkwnwnan9KZFfFyA6Rd4UhE8G5bXy9yjTQHX8JtZ2bdwm3AiaktV7Zb1YL6FPhq6pw25yBW8rYPrZZ5ht6y9oM",
  "key16": "3SYdJ8vvF3m2xBwZviZmWrsuwkK9bYkoX8zA9gYBs52udUiktcBGPYQvhQYyrKK5AdkgxTdfbGTmdxpX5Xk9HDX5",
  "key17": "28aq9CBq9zHTWrDWMbdtejWPbcMuUngW5uCgG7dYAyc1hnVNrK4fR9hxMeQ9jqKw32EC5bLG4vz4PHkuG8xqFr9X",
  "key18": "4rdoHppNd8SYKKiE82GwP8mTvuQWTkn1iyPS3CH1AbpDcufZeKBpWtERCxpPDySqwFeNy9xnhxqCbXLHjDjJKJhV",
  "key19": "4qjUqdVyvmUT7HvzfYeEA3yhh1C3RGdi1sK6G8GkHyE1ckDemuaFEN1riPaHVMEghBSa7Ma8kGzTQ8qhmbxqmXs6",
  "key20": "54jPjJPmZHBVhsFoPAHJwY5UsWJe548gZjoto7JX1Szf7bTYu8ujZCjW5RBgKz53FRXeBAeD6mtErKE6rH9NzzdB",
  "key21": "4fHtF31qaeLSWarym4DA4iCRopGan9FDPLFS21U8sFtCdB2jjmhQYznCDLuyhr1jTmY54zmjXBHWPJatM6Hof1RA",
  "key22": "2AZjmic2BgoHNdwPJ4ruFfRmHRhbwC8Zzh4HJhMtA4tVye1cbpT2xNsfPmsk97PAJDXVFGUNxAhjABskevfavPWZ",
  "key23": "5mWFEkU6CJAwnMeeikmqxLudH9G6C1sT9EruxNReSXmmNaadkqKpQSVyJrVr8t5bfktKb3K9nt8vR47oJKiQKPRh",
  "key24": "5YKAcYHY3EjNHtGqF3e39pRRfBkn6YbExduHYP6z5t23bqGkAQMRDKKzvrsKC9LQ42BmBnEgNNHSQ77AEhKAeqAS",
  "key25": "5L7TUxxzw8bi6JAPtAwb1KGxy6LbaiUbeuQJdrf9f7Tx7cr162N89KRNHTktcoEe2oxkHxFZ3oYdhnAYNDoreP9B",
  "key26": "3cucxVYUsLC8Vs2AT9GSiviMKmuYjUqDDBepiePkbbrguDcYZ2AcYmrZAtkjnYe5aPq3ysoY6Pppku4VgueZh3Ln"
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
