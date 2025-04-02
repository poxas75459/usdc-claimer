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
    "5XpaWp22QNYWFJufesz7hvu4SSxWeg9SxGraqZY9fsYR7y5ympvZxdjthePiJusph8KXmoZURYk6kbMrybBea2f3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vbzqmBAaHsK7wjJcuTsuM5TQvPv4VR34sALA2Y21KthVcjH1gE54voywCqy4193aN6kTFc2j27i9ohcZ9xPwdsc",
  "key1": "3xb9eiqMmD5isCPU57BFcdsWWXkZgMEKYmf6oLjm7g7pufFeTgSGp1p3mWmyqtc2DMnHDr261h3vrwcWf9Jsibkt",
  "key2": "5wnHs4QVHKj4yTaRR1KdpS77fKwWHHhDc3en1b7HJMSQmhch3zik3M7WCh5efFMJVMtXuLu7o8HKcbPKFsp5VFgx",
  "key3": "4goV65JhbKq6JPaqEu73aiDrvT4wovVZdJoPeLikvR2WZzm8TcF7eePxon8zG9CxzEqAEfTMY7TiNHYmuSvbYrok",
  "key4": "3i1hqiQp2Luk77ayXKg1veEhJqeCheQuYdeffPpmKv5pBXZ7Eo73xwGZoPbedWzhmSaGjhuKpX3ubiQo41EcQ99s",
  "key5": "3byTMQ42cv6dJ33xuzdKJqzawg3dh2HstBR89jQGmuXgHccJuPBqy2fFfW3fm6KZ4fvvrK5Ucq2weKJYAYswM5jA",
  "key6": "2zxcGgq4DggZ2AL8gRwg5XERqJRiVdSmPoFe8csqUnEjGLEPqgGNhABKW2g6eMGFy8uvrbBMXGJ1e2EibU1untKD",
  "key7": "reVWsteHq5nbDmkDkdvnYePBha5u3T3aGMtxWkZWJMifS7AHxGJQccJPEvoMeBjVKcECPDf54owrZaissZUYnuZ",
  "key8": "4ZeJ8Hs6RFzRZPfUGzTzoasybAHiMwMd9SPKEzvHmGWED7pqJ6JomdKvuMZ9oQx9b6xyR2q8vM741yxHQcT8B8Tj",
  "key9": "51NvMz3iRgZqHnwmib6yhuZKBRD6T3pApoqDT6V1kxwBnsRNKFARRqLjSLbQtmYz4wspevJLhre766wyeRShSTF6",
  "key10": "59vKVk8YwYtysqmmQbr7Z3Jbr4iK3HoHNAfK6JvjojJxtMuHHpCh6tm5JesMEnw12WKyGMbkWfvRNZiuyZp8A1bF",
  "key11": "4xRf1qQo5jX2LSLhxUm6HjFmC948nuDFCUCREXXk7MRNVZER2kRw2Cq6b3DEUn8rpavxutMjhLNrYMRqdyDmzFkS",
  "key12": "4NV8aGw4JrF2GjH5Z1hLTFYKH9JMRZd2xQnQkr9txxYK7pC3zhibvyMY6Cze6HwgYgVQntbZWLwvC5xgbHyhebPK",
  "key13": "5ZjnhRjZQzdS5BDUvV7gPgRKQPnzf16zumk4HCcno5ot4qnZs9mJbBKPXAmesZCURAJrqtiQYU4GkBzDsDoWnFbY",
  "key14": "2BDq3uDJgKN4JUP2VUBqepcFDeFmd5hvJQQduNdBzHerZmyWjnpc6zdhVQKxTN2HF6yjC5G7KV1GUjzxTM7X6iNk",
  "key15": "5wrxWpQU57cHnJrAjFRi6X5BBavvyreeWzdrqVGHyNPP6myEBtoHqcK41ju45Vy9gPydCiZ2cvDoteG3Pj7jRYMW",
  "key16": "3p4LuCe45yBCw6pWc3s7WNB9jgEoUGhkDKfpNSqnF5hfMpPFL8vYtvwjA9YZpXwBaoJc84CFDh8KvU7QxmcGfS2x",
  "key17": "5fS6yEZtmmsTMJSZb5tSb8RraBB8JHXxZEqHaqP14hUcpCdBNuXbNUjS4P3hYVG4zonFUFZ3i7Expw9CYaFst2vW",
  "key18": "5rMciWQabUmjCYczhDvRbDYWMk5RKHVRdvz1fNjaWHx6JXidPwmfKgekwv1x8pyx6skKCRiRfKHTTQWTCREVhDzo",
  "key19": "RVtkyCyCQUEGT2NuTUduYzNPhuZCq7fEcu7QD9SxGUKzUzj6L3Tjo1dX2dTe3Zx6iJ6KRDJgBYHZ5DGjmw1k94S",
  "key20": "3bapaDboSapkut97SQzyNeZX5DhD5BuKjUjQfTCo7xZd8KPk6iSXupkgJrVME3GiTGiNCNPVGZNWfxyboEJEpvo8",
  "key21": "3X42TvGvNejGBv3DtNYzJf2sBFdPpeuHEYuBhwZkkhk42MowTYNoyZQQ5zq6AvY3QXRzZT2JKufMCk5QaCdXAVxC",
  "key22": "3prqHEF67bvmERiuevUN5oNhZXSBwQZneEJUrcsxvXEhHGAVzkMtpCouHYJG1hXApdj6RARm9HBkqZgVZCPCzbYd",
  "key23": "63qHAGDtfdUDSdRnnvxUXExZ23p5RajJdHCkYNTars8necR4QP8fxbXxVUAbLmUntwuyUqvZUjC2x7uvnn93ZS5i",
  "key24": "4MymkuUXRC36AKk9Y4DysGy2LxE373jj7hzcNhX9WWdVcd9anQMbkK7i7hD6cq7TdKToUwpAPYcy7WqPkVLBVNzu"
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
