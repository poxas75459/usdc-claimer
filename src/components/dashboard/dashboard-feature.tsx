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
    "5z7hk82WsZvLx8GYRY7N4Fr7fR1eBasJgtW6YRuY3FMwpm43bHeyqMhF7MHbG1c63QEpsdRpQvwZuYz1qrN1V5QD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uQHcX2pDfTGGd7rAGovBpqwH7j28pnFbMizrAxxX3mMrj86Hm7N7tzbWXBZe2iqF75jUd7X7h6RFhUpCyF1LB5S",
  "key1": "qAtjZuxFwXVXX9pK26vBaiJDtNX9XvQpQbBNy3GFrFvD5dHmNN4rBzC8Vvh1sNmF2pob2V8ComRoLmuY1xjBsWZ",
  "key2": "ZHMk5QChvH7TSoor1DbNe3pDsUPhcy47BBtyFW5x96ZPbh1jxPppaibnopcxWPYMGoe2DqMWXzWeWej89L928Mg",
  "key3": "UVH1QNXuoeUfBNV9X1uoEWsBkLAvEk6v3dKPyKV4qFrBYscVauP86DZQBuwYzWnLvdyxrzJHYCfcGkkYocCrdjN",
  "key4": "2S9u1iU32cLiQnD224zPqJNq6RhPvYejukkyMxG5MK7xwnVd7SPVgxidDm1x2GY8PSoGfw8hsyrZ2qZUdb42WwM",
  "key5": "4h2Q6EUC8K3yAAt89Ttz2JE4JA2qpp6Sbuar1XBt8hubp8wPQ6vLGyozF4djtEBE75negLbuM78Ycex9P2FeGtuq",
  "key6": "2wPFR2LjMXeif8mB99LVo11D6Zc49pJiWiDiXikMwsR25bh4S7JmsPj5PJkmrGsvafjP8h1zpc16Coxwb1aALK9L",
  "key7": "3xT9Up3Qf9JPWdbm9ZgduiMM3Hpn2ZMrSfBTutUHsMxumLqBMSsqXXUyHRdk3PPbU76QTJDtVeY8tKdMXrjpYYQK",
  "key8": "4broMLskM13zASaimQAF1FyyezEYtYKdZnqrRwiWmjHrzrxJR2iiZydjzctoJKXDDpd2s2h76c43jUx4akxc7Sv3",
  "key9": "3bty1bhn8ec8uR4XBj92iLhVwVPpZQoyLiGA7myyPt4mR8wkzHfz6rMJW9Nf8BSRwJ2v9NUnyx2N1RdwN4txfF8A",
  "key10": "4gJGyJa81AZNiWs12aCVkDJDhiG3EePGZUZfi2UmdQdPZpfFLWirw2tbn2CofvwYUv3CzuLuA5CMXQ9UprEkqcgd",
  "key11": "5MrB6L9Y1ZgH2XMupvB56MgSSRuZTyEi6juQ7oFJWAEcsdVoeKCPUHqzE9LoTNNto4PfVRs4ekDaT8CdC7We84Uz",
  "key12": "5Xyf1sXJ9PHpcC8poBhhNjfgdffLdTkT1Mo5jeagyj8obfAu5THv7qhMnipU1cQVMTzuxCV1HkHBNpUNiFjhYM7S",
  "key13": "ZYfmqHsvama2EYzYR1SEZz5RDcwuKXF4kFWoMcZSHGAvtRST5QNNBPjSAVS8eLPcep35A1YoEbF6VLHtr17SPGk",
  "key14": "2vsYNtrw17CnaHV38YtnjQbqjZFP5vkD3KidRSfUdxTqVZwVPNJa6cQHPLnoNq2uqjrL9v6jSQGadyZLm8iNP7Pq",
  "key15": "48GEh5CqV6Rfg8pc1coTPVoosPMsDmS3TZx72g6AD7qYDCFQgNyahy99EUnunKMZmZjdeEXgaF2QoqaWxp1YC8Cc",
  "key16": "h7m4WbwJ7Joz3QreL3fKvEoe3XYYWkkgCFSZeeC7KZjnw6DB5PD68x8RWiWJpvEjwusce1DFAgSXQYFj2a1No62",
  "key17": "48DhBTfUSWKn9G68c9SMCPS7wLT878zAiFkz3Dox2VYHzanhK79mTggcTLBSf6i9qWsdbeSzBzAtVAayZ7RfoBiS",
  "key18": "3fDbufG6ZdCLpPRxxtAEyCP3EErfTW8ztff2vwG7HtGvBe1si3SMsrTYxvkZWSLXJaCJXVUETSa735bHj61RTyZc",
  "key19": "4AofEA5TmbReiHyaYveqiNChyf5GPdn3EFb7wrWMJHmgwEYojrR4CnG9JgYfT8rrpxf3LDLK5FdRmJhDDtXf5MhR",
  "key20": "62hhXtYFn6S2YFt7DrJN8nzWQJgMJd8PNTiXpDHRTT79cBve6wY93W4EbuLkBZcDBom9uvP8kMYRgU6Wfonw7CcS",
  "key21": "352RKPKJU1UN5sdanavYbzH6p95wFRzs75d6zPPY1QSBE7BHcXCZ58LBkN6Lhv3fsXwuLrzgjfCcUnNBbNnMiiNF",
  "key22": "3yJN4nWoVcjC2SPsdGLNctVJjVXXB2Ky1KscM8wbVV446xhp7MwZZzeMJJ2PcbhAy19jzpdzV3arxkYW7vqtWU66",
  "key23": "5yf5VB56WyZ1g86SEqAGevvibf4Kzg74bXuJ2hGx8tv9MBUxr26Yv4rdebWjpMB5NDNBgYnytX6Dokin9cHugwib",
  "key24": "5d2oJdrupsVPUg4vJVTQkMfi4GBf9UuwhW6KXfQY3fQKttWHUX81omtQxZ9N2dTL4oAUcsTn1LXTpyV7LtgsXzXV",
  "key25": "4hS9HssQDknEpiT2dirtLXDU5ujR8Qzc9efEwDd2YVGzTeHZy5CVYJuyEUvyPJQRHcawY7ietRND8DmP57Pj1vex",
  "key26": "afXS62FXMPWFMrrGiCBMuvSRdUkpJkXeQTL6UBTJ9UUdqyR9ivgiNjoUnecL8ERBWfUMsmjooaHi5XFW9CfX9oJ"
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
