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
    "4Dw3198weynyswVCUQz55NJtMEUWJgiRKnomg9hsFpUfx9KPPTUDESg1AdnZbr53JoSRobScs8Mqes5HTKSPb1uv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kkqqxTrk7JYxUWpCbfWV16Dpf2MMCNnNPEKYHEGoRVTSMB76ffAbG7akEDKrBQPRn1fDKBLVEt7U1zpiQAvj6DU",
  "key1": "2tSTutxB4zBnNfB3vPQmzbcU6aKWKdAJ2J47jyvTnvocJH2s9vnYq8zRHuMkL3ADozxy1S2ZroF3WAa9sYeMoGbi",
  "key2": "2BtGs9v3CZQCDSVXUHueinWjUa7u1VxoHQkUBQRn1QJnSPtd75yqUFpp6qv79B3JWXzFn3cpXDE8qkCMpLEWV4uN",
  "key3": "5WKn5ZALCU9jwHQqjuZMyUwx9fZRArt8k8Zt218CZW5cAWA6fcrnCezWeWA36C6vr7njFzijffdHt6GFB9iHA5v6",
  "key4": "2pB54bwPKAZLd5TbtgeiQiqk8wWoxtesCYH8DPhfNgT5kJ8yvBA5cr4BFWmrAAkTVLLdcfDoEWCwThVFy37T9bhj",
  "key5": "3rpidiZyCyVMUe8oTCX7w9RyT3QevvSfQJeAU4dgfwpGo9W5oHd6pYU359tDg9QwWGXy1GjdwJLGnjpt19fnJ1Xn",
  "key6": "388UYZDpZTvD59JQnpe1MsLAzzdC8va1U3cxaYn7egcVLMb48aYkQ8gMzHFzVq3chQeUgmP1ZBqEixftn62LTvNh",
  "key7": "2Ftbowgyi1MkdpzyEVWQ2uRKDBGSnt39KjBP5tzAmHBTZsqjQ2qEy1b52ds81CcKxEkUGVE3pNNM414AM9hWyRXe",
  "key8": "4mbNLgibFXrCgHfdfY8ySwPcFST7vjoMhzS5MJsUdndJLkVobHiLzU3yWsZbU1SYJ2ZhHCzxgspNbxhFq7DoaESq",
  "key9": "57XT9MPcqrQwgNByMqEvyQ5KGMkJDSvT2Qeu5gkRkJ5nSWny1juui6jWoHF5VcmU9XJjT7ATP6wUouoSLATM47TC",
  "key10": "4r2GQeENRS4PsLTBHCom4WHdNcD4v1LRuAuZbPZxuSt27r9LT2Jqn2qJMNZEBzAvBn7dJbZpPnTH76KMTwdCpDny",
  "key11": "4n3hf2kwDqLbdBzzoooVbPJdrkfvjZzb7eeWemVzsDT112ykwwZHW2nNk7YBtjjtwzpoJSms2UFHMkYXnaYj68di",
  "key12": "5KamgAfy2zY68WNoScYWUxKXf3pnxKgGspcTANMpisudF8avSg5XJ5BTEGSTX16M9Py697xMqUDW935Vabr8FKds",
  "key13": "41QoTans8K5aPP1fbGqGA5UZLc4Sxe8b17Hxd4pNHshoGDTGtaebDs83Nh9aFk1xm7SozMNAtjWZ9TmseLX1ZH2R",
  "key14": "2weuHDoPSc43AcG1mnM98WZUMpif2VAUaU5kZKUQiarnGzP4xDZyvgFqZrCDdLiv8ntwhRUqZF2e7FVs1NZ6rH1F",
  "key15": "5TYjJmEHqtwf9GcTpHJ7pxbgKkzQBQRiU7BBcfHbh3H3DbFSPVpV13sbPfU7up7An1GF1DNBR8tNn57LHnLzh4wV",
  "key16": "4rgfTtpGqxLNzPR9ZC47b3ttfBxfu4b9KXos7jXnSaYkRPAA9661o2Kun4TbD3efEYxHhWEupRdFgrhSg94ZVENN",
  "key17": "zK6koD2M5eAX9bXU6n2PxQLoLQSxC2ND7RZ4uwszc5NLZ2b3W6BVVSybVBEsPSW18PfhdcXuW4jo2YHQqhrtMgG",
  "key18": "41yHhY8JrxSJBZkZDGqogbKUpKgicZYqake2omXxxGfNByEkDQsKTUUvsTfggeDSm3Ms57pohQykQGtdsoHKm2yK",
  "key19": "67R92X8wsJz8ir5LcUrVQkGnRNy3eHK5kvmVi3iREyGuXNARA28csbSzxK74CisdekEqhWE5YPXWRjHaVs7F9brt",
  "key20": "3oVQ3urLTZYF1kQ2oW418h94RGwxoLCxRXRUnBGoKwSjtek5DiuDJN5amP37i6CykHJ3om3sbuWb9tAwBiPY6Ww8",
  "key21": "5vSKusGepQ4FL89qUWsJ1t6P6wbq4GaBkrYAhe7bbcV7bB14rR6CYZ5t5TXvpSNxAwZHU4UPe5X47FeGv4npu6Li",
  "key22": "3kfcVYrRyTZAeycLqwgXexmR931V4cmHNToemaDTAySncRArCMQYsWQKZjLwqRqz7vVUT3napa5SUJaT5Qy5vd4c",
  "key23": "5Cy3zR6RviPPP2cK4HkRzidXm9C1VG2aqb8D8mjZeE7WpkQeLYffsNJT9nMX5wxFtT6N1qss6LTWP64pQQuQ2mgG",
  "key24": "3VKdzitQb6TyxTMgNar2YVUUpfjWjZYuzBGQkNQ7pvh8Fpyo8Nqmo9eUDSySGrcQ9NFULxgV7bKWW4uM6cSKxxpA",
  "key25": "3LAWWHdEwBUsqJ26HsybDEqcP9dhKhTxJmXPuq13yDbhvTFXVE2Buqzje6aJ2JFwfdk6E822H1M7xyMoZnn3cnn7"
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
