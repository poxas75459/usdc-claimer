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
    "5i6yP4GoyraFSnUknUi1bvgUUw5CqHbszQ4gZ7xebMzcbipM3gPpbGwcaK7DLJXUMhzv1M1enuCwYhznAv5Tn8j9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J984cNmHnFEmSExcbTib356iw2bfZsi9XtNXzRnHa84dTSZPVJMwrJ39zrkWuPYdWQGeFGFfu1kd9oJV9H8Zi8R",
  "key1": "3YmPkuhrLcnmLzQPt3979Xh5iqaVZRu4t7SKX12uHPZjoq3p1YPkYhuEb6xd1qUZEyJYsxtLMme7jP3LEzqVAwAv",
  "key2": "5jaPvMk57ukMZaaZAeCZ2PVacc6jLTzycfW7B5v4EjRytee2NgPk57vytCfgoLFGPqWShAEKd3BnBUL43jReuhPy",
  "key3": "pqshBgJrS67YT1dmDdyixzWivB4ZkA7xtxT1SzSsSSvf6MzjyeeuyNqvNWW8KXN7MRrPDKKBK1htVWbny87eu5m",
  "key4": "4QVzKQCDPH8yuX1ytMS6z3Pp26o8aPCKQrjRmpGzZpJMu63eSmQa8zn2tDjU7N3Gw2bxHbFy5NL8g6sY9oQS3f67",
  "key5": "hmAZ69ZzoTPF1Qeghg3HaojjPCj3qgsomVpcScr133KQvw3jd1U4bB82S8K3CNKkrpHRU32csdvrfBLp9dUHXJe",
  "key6": "hmKDUMz5QbCYjZG6REFvJW8yXmM425PzKwzDzdYLDXiarPt3o1v35kKyar1yX8rwJJb2qq4ybgQUM2psVL4Prj8",
  "key7": "2iGtVD79JzxhKTqnz1BCLsyuKLKAuc1rtyy63Jvn122oA4U2UQAQUVJq34XJ75zJakFHhBpFWcHD9UF7DxWpNXF5",
  "key8": "3TXApHbuxiPXh81Czm6YwiKDkMz6KxHbbWbcX6cFLPojuk1x2XtkaepJhk7C474i9DryzcraP9UDHTLR7aUB3dxV",
  "key9": "vNq8cWQKtCFWnV6fGSu7DoMsnf4oBE2ihwNNQaHGLahuaP1je7cVyevgK39Qr3eG4ZFoDtuWRojHvMvzjqWogHk",
  "key10": "2FioNNC1uP2gurSUeFhrvgWkhopgsGnv8CWBz4DoBXpnchSTAndtV49jUX8DZFDMGrqh6ZkUKSTXS4SjohVNteoG",
  "key11": "XGYgyBr7XTuNL9SUG3JmHfBaETKhwbtEYxUBuFdQA5ynZTSTqpLkRMGQrv6k1TYNxuLV6SMcsNDvpR2YwraHpnx",
  "key12": "3p6L1NZCiYU3E9BwKBszERh3uZhyXoWaGBw1e5uV2V7Zftyho6od9haF8fe5dpg8dMyDhBTCHurQqq85LVUnaEXj",
  "key13": "5WparC7vp5QEUwFneazbUBU6vi1wLLjf55XgVKAda2m26e2ZYxSY1qGAbCoLe7Yj8N6nNTkEsH7iXSczoS6s3AeL",
  "key14": "5Baydrz7QS1kgHq76AQVFUgprXzFy3HaxtSTKniWMkBDHx7ryExbgLHFdSrC8XLLTmPNWhFiSnLqNaPPznh6KWVN",
  "key15": "3Jmuh1oQeFzq9Qtavy89QeHoSJMjkhTtwCqgEN4ymuMhEBuy2SxPFLzjqtY4J3ALkcJncc3WqauAUM8JoRpBe6PK",
  "key16": "3J43v3NtkDxSMFLk2TA62K9BSCEJzrZPfhPMd1BLvkt1gQ9nWckMRSGkx3TpjH9jCANwC5zXCEz7yU5wFqgeG3fz",
  "key17": "4CZ2H5BgguQi6oBUgyomrzVf9dRCheBjnb9sUzfkkDLsCYg1hrXM7LLABG6VGMtL4fhWZksL1SrVJB2P7D8JGCqv",
  "key18": "4ZqQVnns7HZPxoqBJ6ceCTAZtais73XAb4vfn4jqowLFZuEfGKpN6fbAHZHTW8pUAM7ZT8pjCmqJENtK3Twg5b5B",
  "key19": "4M9vpHrnsKgNbXakVhYR1yXcfhY84EQiKvJAPvffLrapJCr6WawVis3RohAYaoUiJ1MVUtjP6tjLMFMVWMhHUe4J",
  "key20": "2Jo3RCrFfmm8v7HfPAhwBhgDih9B9WWsHnm97MdDb3XHWELzhqjkkut88qanoMaPh48BtDbUqXGafzXWXg3KiBZx",
  "key21": "4tqdaMwcrWD4ipL3axPPkbn85A91MXLMMgLSrVgZXhewKBCPmxEeRjmsksWBwJ9SyDdtwHiKGsW63kuzHWekWZrZ",
  "key22": "597XZnrLX71izqThcxP6hQQfVSPtiWwg2KyR8GGDPFxDeEAu7TUH1mctPdkirSBhmNKdyiesPwm4cP3C1xZhfNTa",
  "key23": "3UZzDWbvAYGcFt2gt54KytmRhicVJGwBAJwUXTvhr8D7uGE8VN8cs4y488pUPdoXBYy8nw8QzfL2shmMbieg16xo",
  "key24": "3J9fQGPZUoFRaXAPzmz6S8eoNjsWzkdZaK8kH5A4Vjm6xUqbsh5FLBwAG6yk6EEqTJLxqRKVxfSGtVrqjMjgrncH",
  "key25": "3n4ikZKZEJKz9tU4WuXC5MVbgSz8vy9nPfKJci7Fk4N1DDxHSgsmm9cmegDDpjjfEQEZzoP7MYktFtpWVnwuEFk7",
  "key26": "3BWoTDQPQdhFcTcjy2HQ2TQ4LohtfPa3BWrpzfrYH5izHTsP6Y4qNkB29RZaQ1uiNBdo1He1uuKTC6awfRECNn3j",
  "key27": "4mmRgjuZHCRFD99JR8T79bZfmRt3jUo667QyDR56aZAiwpZd1fzCfMBXtF2SuyKDpPdi2rP76oHmd4e2DYEP67oT"
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
