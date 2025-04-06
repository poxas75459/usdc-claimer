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
    "4Q7UWpDfYjb6EF3QcrfTKkMQvXrb2Ubgjun8aYnWKepMDUbgSgY2shbQtkv6QW8HXxm2gNCQGWeMnaPgce6RXLVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26o6TgivViLWnXmsYR66vmetQGDtX5JAeAqkdx9GoDQNFHV1AHxhvZ3xqD2UXmZxfuh87KEcwKLs613MkYNEyeXQ",
  "key1": "5SzwyEnMjrxj9dyiMxEJFP4PgAuG1iMNsZPfq9yoBhSZHGcx6Kqh3soUaiZsxytgwYyBVcQnWD3f4dj8iX59B3fG",
  "key2": "55S8QdFBQKSido9GSXa9oTVv49FCxdhiZExgr8tjZWeCqH9VEovGXwn2cap8CqV3La1bhrCTQtE19Jpt2c4d2YLU",
  "key3": "3XnqZNVzmotAAUjqZEpeozZYaQpnbBdT7nauVgcMThbeGYpzkNHT1rhhicfUcasqdk6pQxzYBi8T2asox14YVax8",
  "key4": "28n63FbJVtyMczMuX4fzX5sPCypYQajtmWEMJ3UgxmzPh4AM6zk49B2x28L4d7J4m7D1jbotzBBNj9vxBXxdPWzG",
  "key5": "4HgjZKcbxCiptFDjW4cRzyWyAQFrBDW7DkXeQjeSqNBspQKmBzJqxSQZEi9diXjX5emLKB7A3uncwiavHF8xBKom",
  "key6": "2b4rt3jPVRnb1eEy3Zg6XmaxWyBQM8xEzz9i7GQSAYvjTR9rjyzNZNX2B6aq83A23G9HiKENdkZHFAMh6AWXkNqF",
  "key7": "vn1iTWc3gxaunMMMSd5cr2bU98B4NhaSgyCdVSYaxSWUDqbWHMMz4VaS8FSwfverz8n1rNsAY3EPvtWDko94W5Y",
  "key8": "PxstLLfp6KdhwyeB5bzhUMQMDBAV8LGLVuTmygMHRDgLfhknmgYZkKLChViwkBGrBFDR4fG58FSqecNouk6r3pv",
  "key9": "2cMkUuReDv95XgCUURJvjtBi7AZBeJNqcHRCMsfmoGZsvmAPDXJnYJNe6VeDLTjbPjGeF2kLQcJgR8Ke41VEQHea",
  "key10": "5bFFZYn6ij9w5fXofq79xwAg9Xaq7WPsdnmam3ENe5o8XvHkrhHpTY3QvuixuxaKeKmbGV6XfwJP2auAkzyz3wWZ",
  "key11": "3nWVmZscCmFr2xwvXM1Xaf5jKTGk7ydrKarRz22NXnG3wbadrx4VLzMjpikaef86L77N8GXauBWhEocAfD9Zt5dv",
  "key12": "Y5hFmAaWVtRpX9isMM1UaEaPR4MHXt2LPjov6E37gaVM1ZSTsWJkKMHgv5FJAg6LFmaHDuXm44nbfMzBQ2y3ujZ",
  "key13": "2C8wT2EyRjVnG7uNgjSeqE7kXJGG2PdB7q4tkgRr2J6Pgx48yMqRqwRvLs4QeTKgQXxdTC4erRrLYF5m3tNmrrsN",
  "key14": "oDsF5FtL8fVSjbysDfTc7gQW73mSBHgaJeFf7Fk142CE9GforrZcLLhF3iNsjewLDbzZLaRqSsWtMzq7spqKZZH",
  "key15": "5hk7EA6a7DgPAL7kz8uWghqKojb7nEjogpZ5t3RuRJE1HkjhmvPUYnbAnhpPXwTpNU5QdnKHFL9vj11aJs9M7rgJ",
  "key16": "2ovshBuENNBKo5HXEMxsHmUnECXi65Cdprf7Wh47bqkNNdLKzeeud6svRTbRqrFTHzpPnwjtnuFLP6FAV4DczvNb",
  "key17": "v4Nc4V9j3agkRYkZL6xje7bckx81BCXeH3oZrrY5eeJ9QC4Jh7vktPwFzLNm8nFL18NWTkyZJDwm6HzYHtrov3k",
  "key18": "5a3R4asVxYzVqWz2P2si3WZGnSvjKvmNBDAJDQut2gC45Z4bVCR76BwTdzSomSRtkbEXp7yJcCRadhb9TUdDxJxK",
  "key19": "2vPSdeQJ7AcFxcDV9SZ7WTwkDbkwdi53KRaJodrUsKc7zXzZBxcGJxukoqkfjEQf6yF17y1mUGSZp4oWheZoZVwQ",
  "key20": "3iUidtnPFBAyb76zLHSV64QZWTghyzAE9EBytwWMicjLxPvFYFytC86hEBxpvhVLHVKMFG4wt92qj1tgpuuGosjF",
  "key21": "5rzghgKXoRj3B25Snzr1S1yFJGcS74VpX5TApoctACsQ8vaynrgU7CudyRYLE1AmA1HxoXuyZpqeaAvxCunNVMZ7",
  "key22": "4VjNCpcq17AEGMoT7oZJ2W1tHkfhRv55fQ85uGpC1WBCCfFt4c1k6ZUxUknwCH9ADz2ZWPbXMrVjBUEmAYxNzJFo",
  "key23": "5Qr1ieWEwgk7NSWNXrWxSCretWaNKgizywiFWZZFaisGYMRD9LuRqDjCvnPWv52bdCdqRfifK3CaaSb7dYfnzZGK",
  "key24": "3dqMq1dEUBUoiEEjgc8L9NLxUe8KJLiPLEny9U7cY9TvuwyKDVBk1wMGrKtnf6AgVGypzzP2qooQXykRsfqqbcbn",
  "key25": "5CFEdBSVQ1WHwLgvaqBTNFq8NrBkTvQYexNBvdkUm5TwEvbFhf1VyLc6mU4nrHsjL5HBc5KFW93EDTDhPMpWKSYd",
  "key26": "21yqMgxoM5iiUWiytiSxQqcg23K23B3Xb6YEc9xvxWjR5HUAdNow4gvwewJYpHfVXqJfaeLb6oxmWikwduRZNTBM",
  "key27": "3rNAb7xHj3qJD7EgMiTkj6ZQAzqwdfGsshybAeiLsocyWU5gK67tsanWx9H1Ws58CCxeVhMotYAk8jDNa59qM5bd",
  "key28": "2PgrdZP49H8FCgD3iCB2YTEGvrZzQTWd23M1zAm7cEhamjYUGSfYzzFE8BLUWWFV2AwLkXgi1Smt8xF9Cye1PGMw",
  "key29": "5Jv5mmbF9YDn3y2Eg8Vb6WYPVFS6ecRDWckNuup4X4EtNqPXrCf5SQT9W8b2RUyHQMkoRgnCrNMyUPUY5GctggZD",
  "key30": "67jkqwknxy5qyz9v5P6QBeqn9DjaaVhUnFgvmtPnFG2A959wce7h5H7M7egdLPTZEy9EbExvwHMBcskZKT5jXdhE",
  "key31": "3KBR5TBrcuRo4XXxSDs3bVE73F4p6AJCuEnGh7ovugbJry6ety5CsRH85crRfca3wHxLKpDVLgkrevyEYo62yq12",
  "key32": "3vBcgDHqq6S7s9wLVTLDRwuYe9wigg9dSsApVEuFf1z5b9Khtg1p1ZbVCdDzRExa6ZxwfgsYoW7JJ4bBPa9qifDV",
  "key33": "4vaX64qNCoMyRxUkoH3GfEcLWbWYrHBugUqEDkv4hfm4gBnhtWSRfpKNFAFdP5Ef1BQuoeB8BaJYxrmD9rxdmuu1",
  "key34": "3VrV9pAksebuz75CoBsseLZJvQDvSwyArGjgJiR6frcDPeb8jhEabF4cS3b7ULsnxxRSaKRxvxAwixi2GY6Tajjp",
  "key35": "4kmCyuPrVQ4n8TH5Ab3BPWrKZh7BgmY2h6zrDiH9MZwe1kMKh3P6eNKpiH9EQcEPNUSZPXYUDh4tp9VAzszLMvcE",
  "key36": "52SJVEKzXT1z8EJ46oVCgJdFgi8aiJ8jzryUfgdmeC4J4Y6SR1riistDBSQMV47T3kXDck1raR7u6k6riEXyWNph",
  "key37": "3FEE9WFcFNeV7yU4Md8A1yNm8g3atP911jrWe3Ejcvdi2M61e8Mjoi8bCqFsP2NRaJWCfoL5X99cTH4CqhRdqnkG",
  "key38": "4HmhtdYTAXQ4VNjGew1xZKH8XrWehXi6jZsu7PdqWXuz456JqoRRgok892Mwx7k47o7nhqPoeHaQn4gsS42ENnQo",
  "key39": "2mvaimtWG1XfpGtjZRER9wMmG9B7wg7sSbPvgLQA71eAs8dHMxtdF8axqLPsT4Crd4kAVJqn52Jo6hJhYWPwzUuG",
  "key40": "3gCLiySg5KYHZNoJ9pBN57yhBBQZNpfDDPhUYwMzpcjeJgs7xNjJoAb4jN5og7V6i725LWbdwszbdtpWh66N2khU",
  "key41": "2oJQrqfWQa6mVx2e21NZDhgYN9nKoGoz7hSnVauAePwLQE6Po2WfmFhd83fQsJc8YVX13DEAehr8wfid31CgAh1i"
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
