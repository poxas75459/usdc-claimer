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
    "4e7eAWc3QMWqnLQQzXbcuWjtw8ejh8pFVuPjKbdij96E99umwWBJ2B9zk1FqVaa1EdzCYQs3B6vY3WVzPUCGx6mE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YaahkHxupFmUZY8VGfSyxC56FFJAh9ToiBQLQBqVgqyv8bDyofWsQRACSQgkVduho9MkQi2nAHw4b22fCATk6C3",
  "key1": "2wdQV4iJuSh1en1MwGtmqEehcMyZ11UFmCBgWb5uMU5fZ4QoBLfmvzkLz3cxejX3HFuQKbLzuTunXW8avZBw9UNW",
  "key2": "59f5MJLPxp6ZvchCUgwP7nQyuUpqvvTdYSACVqZPcxgvhhvWRjzgduhE9wWdB3BbkqMk5SiBdj92bZFucVJSjDxk",
  "key3": "41bnK5NKNckQ5tDTUQ3Xr2DL4bo2r5JK9rqAdjX2i7DtaJg3U3NwJt67AsSF63aw2MQCz5eeQE293QqF86uiw6YQ",
  "key4": "4PqfYNt1vnQfvHhv78PDwBRn81eabU69QDp4zunLka8VXHQobXPyNvxfCw3gJGQPThrVEVk7cM4AzBmzsVvQxHXj",
  "key5": "2v6zD9LBgd36b4Sh2FyxBhyKWHtgJqAzHxXMJjKTpoMt4qmJkE3eFsvN1fiqgxr64yv7GEFp8STFXjyDmzx1Aetz",
  "key6": "VsEkoN5AeRHueg1gjXS6QiCVJyjuSq9wXAk8HfDXQhfXmmJqMvG4xz2mcPvA6yEtpcE6Ccaq6QutAMVxuF6PiJW",
  "key7": "3NdVHY7PAe17W3dCU6bE1J9HDmEzL7iKD6g5zf4Tfea8Lsp3zPmQErasapaFxDmpJ1oPKpmStZjKJQ7xkY4hNTou",
  "key8": "5Ri2WuSirDgHQqwWuxLQrXKnHvRhxd2VfzFgmw7VK1rbSNxyorg4i1KAHUDQ4ye4NKiD7oAvBdhPDq79612tP5tp",
  "key9": "4LaFnmP7Edy2dcFydFW2R15gxRJsUtG855td4rqRn1A5hytQ1kbXZoSZq9jNRtggkdKHqbaHy1TMHqk5uHXsQpy4",
  "key10": "y15iRas1FsLfHFsNHThXZk6CYkEdq4vKXyaeeuEQJrQavABGxLkTGn8RyrBtK2qxWbaRU6oKQfj3XkByqyWVNVo",
  "key11": "3upGYkKmhNcYyMSbi6RXajTgDDEwhCorMUBJeRHFqPaQ4uQuasWHmUuhQ7CZkC883dFpqFuDmvmVXCtLqNXXyoBw",
  "key12": "34UFQBiH6Aoqh8oocAtGQ3xRuuKGzTEQDh22Yo1NTWmtBQaEPwy4kSsTcn3Lhgdydmzj47hZc1YkUbGF9vrmC1Vn",
  "key13": "2nJJ7oSsdmG5GThBFebbNkaiZRGboMBXPakFyLuxpNc1YgoUQe8vXnZTFvNfTEuSEQk3hcDsM8DomhzpNpnxjBCQ",
  "key14": "CuQffNYPQkBCzL2zTiwSRwp6Nwv48EgLUU6J2sYZWwpBckeDE3Sffz1BD2Q29PurNGTKLk3BE19KDxDjVeMbBk5",
  "key15": "4sPyeKCj2bfZJpTMvQ33g9pjELNDmHjRFimbBc4JWrbJ5oqffab4cd9sWR8wG9CrYNTKupjuRsgecYqNA9Ecg2nd",
  "key16": "5gcaqYgPJAY4DHF1EKLqXqCnS2nKZTw8ABkzgm3VZ9YmoAq6SGgawCiZNYVvJ7xnAE4CL9Hb9W8WWFfnLVbFBtEX",
  "key17": "65Z8RhFppwnqU2hQ5jkjH6SxC4rtaznvRXY5LJpgeuUwgGxSuwpH1n85QSCcJN4my16PHvcfHD5eHT4RcFvPFzit",
  "key18": "42whAa41tFdr27t9NtC4zAoJnhYAgobqrjLQTS84gomgMFwxh5fqSnDQ8LTYYrpFGBtCoc3HDJXEU2ENAEex4Zz7",
  "key19": "3oFmSUpSzoLCzoJK8fg6kiSU8oPq5QkQfEKbejXqMJgYMzh5t5GRW6nxmsWBFD2wpdVj1DCgBAzQgT6t3ntmg5bf",
  "key20": "5dBWgs9FeKiyooUrcsTyYS8YqLhRrDmQGjs6y84RgA6iqQA7uKxNKDcUXHhdDBJcw2YWYqNUFLbszne2P3aszMup",
  "key21": "2SorStbCbLtBc3LqgXmJ3E3vrZ4PycNg3T6vUXf5yBRTMwDUW6s9MzrhZ3dq9CarS5geqGqNSyQARxCt3RxyeyS",
  "key22": "zq7HnnYkzyq1hgoswEmV7dyss8bLn2tYZhoDapZsZ2xEH4JbWYMKPiWaBMoLCkVG9bsmsxVykWZoUMMkSdvrZHE",
  "key23": "4JYq8hTbaMTfHfkY6F51rjHmcjNmzG5R3bbSdSojcNpHL11YgmiPGDapNtGMfPREF7CAX93a8MZXteJ5tbqBauS2",
  "key24": "MRcmb8o4rw9yCTbC6eeZz4mT3RcZTTyPxKzj2WKWTGAuD6p8Q7N3Zm6vnxMgf4HQ43ycq5HxtsTLQ3TiJNUwL8E",
  "key25": "dC1bi3ESw53qrBpLM9YzzEyTGyj2r5QUSSYKmqWKCkcnWW6j82esPbSSR8mL6iGspm9DMTDHwi5enWADHBmrSQA"
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
