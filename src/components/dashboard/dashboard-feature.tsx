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
    "4Ke7Y7ntd2qmWdcNBigRQGxUGRuRaUuUGDCtqvSD6gKpnuwjCq8QkMcoWDWzs1pZ1PWxJtHroNSkCBmub1fN63B8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s7ZnzFpAz58NFqJx4GnmckaZ1LvzR64TeU9fzjTyjMXXAVJKkuHvn67n9EVNBakh7rfkjhtyj7rcsfQ6od1eR5B",
  "key1": "4FQm4rvjvTPEStSRAY5hSY3qgpu92KBtRiEfPpa1xx4kQue3dSZSTfxQoqjudp5PH7a3LV5CPpTmXnLnc1PKPXk7",
  "key2": "4S22Sizg4aX6CHHsWv6UoJc9MxuFVKoC3Th2LsNfzikYLr54xsfRQMnG1mCahtHfrh5d6pFGFeMCyMAXC3Yrmc3H",
  "key3": "27m4PfCFWiEX5EtCWfZy7mYqKLP1jTEYjo2JefcApFHmRzSwPvxRz7okNL17JfSwrZWXF6Z1qyXikcYBRWk6D1vB",
  "key4": "2o1v6TsYKyFwBpMEp74KvEh6onBXsJmrUuAVs58N7iZanV9DJdNE68FkXPFK1uLehYe5dMxg6xgaGohAd6UQc5Wd",
  "key5": "2C2GrpCm8crXozAnpWauwxTa38UX9jdN4o2GTb8Ex6ave3BFVWVcHCtNQSgcKh7tS45LhoRQA6yjcbDi19ehRqC7",
  "key6": "2FNbsESF766WMsrbbKaVy7iJVAXtiDCSxRqqpfaHYBUvhtDTkQKnQZf1LCSrqVMV4L4j1XhXyWextGv4NPFBX8Mz",
  "key7": "2PhztHmkf8MsTPwvdJjnJsb9R8BH5HbJmauxoW6shBEpHUqkS4TVdoDZUC3zWH1zYusCczGmvr11xSNXJE3uchwG",
  "key8": "4n6wRFsJTspNP2r9TXF7kM5MrSq2Fn2bSYrakaiU9gvJ8SC4gNp7SC4mGM88iUvbjNP5xXMCDcboamPGK5BntUMx",
  "key9": "3FpxSZEqQ5NJsBDj5xAA23NHfF77v71jFRChjnLQbKj635eSEBJm98UWEfUtBiifC8dHSGMWXQDa758VgH3gb4h9",
  "key10": "328Nqryudv98FjQqM1hEHjcLEHWBEVxf9i6eyzt5qKJZsKdLNo9xj8aCz6xipxJNjZ9ypHDHYmfF2b1bLyC9jnVi",
  "key11": "3Q6FsNe7jZihV4kCjb8udEWLzdHfZmFdxvvD7JdoLXUJZ6vqNuhMXZF7KzWvBRkZTtKHD7HzyNHbe1ZLu1VkY6du",
  "key12": "5RZW9Bf6C2ArtaoU49mG4rV1DR5wk42q6JicHvXnnignnpj9A5Wq81TBxVrsbjKGaFDSeeQ6qaU4viKVcgVwfQ3F",
  "key13": "ydUiSmWB1N7mMPCQLeridy79EJyPvtVDLaoULLJAiKqGRB58zueLY6gajn2V7XVnE3t8yGzS4TfjAp2gtTKg1WP",
  "key14": "4pTEcGBa8Czudnz6QUy1rDmTGFbKNs1Wp8x3JtqhCQfW9vczQ6GcvpuctD89PWzYvQvmvGL23xGZAMtSTeJPHZd4",
  "key15": "5LeADAnxEzLco957BFoNYzW8mgZy3MmLwMros5p7c1NQWQwaNAE7FZVXaq8Xp84UyPMcXSgwrCTtRGaRzfhZCMMq",
  "key16": "3dj2uNpvvqo9GSaxJpNWnncESuJ3PJB225D9uoS5Tvn9HmiYS4pvarKZYhcTcYSYDP9xu9fRBMFRKUMyyChYbgzH",
  "key17": "XJuWZFzhYjgDootNowihc4vMcvf994Hdos8pCFC1QUHqAcTMe4HQ7oKbozrzBDApFQZ287ZzkwgjYYjEbJmdSS2",
  "key18": "jc5cH3B4b8oWLP2J92g6VmDvTv6Lj2TFkaTcdfJTN33SxcQvbz1Jev8XxyDxLme3XLAWKhpsCZu1rTQTFfkXEeg",
  "key19": "37FAc3gr73jW2osnAZ2nQBpHtujLh1QAJCLk45kHebDHLJXn1mXJEmhg6onaA1Q3PDbS9aXchwF1W4exgQpm1psR",
  "key20": "5FqutuRtv4BYEva28Jsbmz8udvX4iTzYEguyocdM49MSTNNpu1AkXmV7qFuZeU3tKcLJVn7oR2eFDdw7cpHDF9gp",
  "key21": "3c2wFsG8LzVBC3ExqBGEmh1JbEnP2FtDKvKqoGt34gAJXhRWAsNhVcptKTnVcHdZ4Pk2QnYjRJQBwG4n5iN6ujgy",
  "key22": "5PEyxsbqLAfCxmXhyDeachMcTmb9ECktydFuoxTyhbQYSWzRAse5oNwJwPWG75SsdiesvmBJaz24dkb615JCW2ZL",
  "key23": "2Co8LmXNHF7HkRK7HcKjbg7d1tKwqMWTEcUoCCucqTxugS1xMk3qv7SHtpfwByUoJTVgd8vZogSE4GjnEKRWxNuw",
  "key24": "4pTHnYsDJLhA229RXb2G1bGZco27ZJCWgcP1GK9QmpaNbayYXo8ZGkD8kTxrGUWtCkBj2T91U9ZdqsAhR3QP5kME",
  "key25": "4y58gnhTDBAkgXNtCF1fCsjjCsgVDq6HCkwaPAmN1ZovztVTnmAkpAhEFeXDqQN6hbfQyEYeU9xEaHcikySCFFxp",
  "key26": "2e9h8C41UoxZkAqKv27i8zqjPD57PgfEiXronYLQZGtVmcm9ragPqsCDzwN4dzxiHyrwh7e8CLbrgd7soDMyCj7P",
  "key27": "5CyVujRqscLrwU4Wgh9vSdK1AJFbqDDNYiywjJW6eV7AEn37LrGUmFr2JmXae5d9GGVfyiYHhwJcwywgiS5pfRoT"
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
