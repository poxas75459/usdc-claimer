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
    "5BgEXy1MD1RUQ3nAgL8Cp1Ft8frSnGYCoPTK1WRL9cJV1wxpBvQauVFKR8841FasW82ENWLYifMLt3kkzGpdo8jH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MpSWxhxam4fZt4Er413Vz5BvXZqTKobQ6CXBuYo1JSKyJQ94Ag9dgnwnxoM9GSD8QdebaLQVbsLw5BJbdhufvXR",
  "key1": "5JMsSqbatvMRamcchoTCCmT6EGw1Nuz5NUp39hRipCbRGBHvZmfgjRp5UUti84noyd5VCSfWgV4TkXsKsDtrzpoP",
  "key2": "2xkMreU9JBuJUL6ccXvDKiyeq3xEq9mjML6TdpJGCAT65Nbi3oDgGZw3yUUDQixKwBpxguCzWrJMBogT8EFqigob",
  "key3": "2CFvYL2aRomQgYcnwpE5hRHGoLkS9CsoPXCkjQ6D6AbRjawiaN6yELCrZujUrrNABE1Hxw1rTGkMUEap5jU6MazV",
  "key4": "5edSpgQ6PH4P66R1Z15CNNo11jezkgjCYaoPUavyFV6XnLTFcXQKYwxJEktJtAwkQmnGE8u35659WXBnzGuvMzEL",
  "key5": "4xnqqtWSA5tMS96Ai9fp1aVMmQE5Wcx3bf4yuXcwgv4nztR3WnueVQKWpxrQPfUt6qdoqqXpYJ7RrdjbWAAcAVHG",
  "key6": "5rEqDNLpeXWmERAGDrnjkRuELzTEALquxKrnGkdfKswsGrRLzv4sW4c5JzbMavdF1nKwpyAzCsnjhwYshrNQK6Ci",
  "key7": "UA6mPN6KaFTVJ8CmAMBAd2iLTL94sveNeCvSARpKQLqp9NffjpBuYtve3TMH96dyAWn5rFnNd5vhSJoHhPS9x8f",
  "key8": "4pLZVME9aDoiBjBQCURUUcp3FuLErAkS2zadgZN3q9DLn2P9Y42GDmEZ2aAsZ84eFm4jYvFNhaGsfCc6MzbfHf5P",
  "key9": "wkEAZbnuYdDfdg6oDCn2oKhVdM7MHdiZSFF7NbUDkKCnh9tPiGiv4fDEYtQ2xBe3fFh2e8W1TwSxpCVo4pirYg9",
  "key10": "4EiZpqztcZphiBseb67YrVEaVFCDFSoYWcqSHL3MArjWddCJZGjJHXCQEYwzCNuF6BRqPyfcwXk4tGFGJG9zo7cQ",
  "key11": "jE3h1uhwxxtwW1MJBmgqUQerEQrrCadeGqgUwK2DFBjoM5s9hRBjfQSvGY93PKY1rDwAAe6xcrk5zrs3EuraCVV",
  "key12": "2SA7Vzi4fbzq5aTVYFK5tPsh4U261kvayDDm4TvDe9eha7uyESG5jCw4GZX7FpPxjwqiATdJ9inGHAqvB35nG2dp",
  "key13": "5m6bPuNAUtr9MXf5hsEgNDvKfeSmEBNmqcfJXs68soAwphwMRYcnybJJKTg1S5jT4YEti3NDWVnqWEGzrrMZwjdb",
  "key14": "2qzHcBiPMF5UDWjsiFFo2RvUrZxmoAn23LoxKzJmN7mpSNMkhkVeiffMLurNMC46MzQron8zfvT2e9dfvCAWUKr7",
  "key15": "jbehBxWm7v4ti1cykWZkUEwmF5FLCsvDoQnyBwsHtSVNPaxyj5oBUXyshPY8nT2Z4YXAYRJmAxS3dSBrd2LUMEr",
  "key16": "4FJG7284GixTQk9b3Ap1hqLTZYx3siB2GGk7KMRhsnUHf73T4soE1QM7XdDUdKB1KVy4Cd1xZMuphLxgDmJxLuzT",
  "key17": "5kumgTyAjTBAth3WE98UMGrpBEmH4JurC917YTJz7aJkdGzHBPvcgb4wpqPA1Rrry8uA4evojjomm25XJzHmC8db",
  "key18": "3RtnHvsQJqtEjQtrYKnbJ9wabgHmG8tE41p3piUocgUUhuSLm6h6rs6F2XTPZnV7CsymxczM6g3qvkefJiE3om9S",
  "key19": "4Sw3f8nxUmNiSkhdtAA4dZNmeER8TxD8ybrrkWJx4MWDJF289N4KrBUwLZAbtj3uf1kzaZ2QVHHrgphbq7ApR1gC",
  "key20": "2vHLU2uGBptif3hxdaRjeMCs6DRHe8vhgeGdKi1oZ9uDpmU6UTDtcdSszM4ugyo1JfJphCaxtW1XyAF2PNJd7m9b",
  "key21": "3MB8QZLyVmuBVywYhsNg9HVXpR7UY77Pe76GYW3E8GhFjgXqdk2nFXWnKVMKtw5Eqg93FE9RcRfZw9QXf93yWci2",
  "key22": "3uUemZLACwTWL9m7fXJNzTqSWouNTJMPXvYuq3H2uhSt6BKbcfgVVYJPtaEDyw6DyzMahZ5eNTPMz13L2kQo9imF",
  "key23": "4rEP2YDoUFWjJxRDA5xUvLLMx3rrPYAN4XgWQE3BAurH1YZgEYeTPHhrEraP8FhSDU5bJiFs4enn2MzrnQH6d3mf",
  "key24": "23dUXVNWyXYBs4XW6NtvibMiKPypCyLd6nNm1f3qJW3TjgRjAq2jCurRAYP5XwsESHvHDPFhhDURus89d1315APn",
  "key25": "4p2d8Xjfsjsp9XqtYg4wVEGDmaP4oNdgkRbNQRVaV6R4W2qtbH5RMw9iJE3nEpPgGCmJ2oeLa59NnG7FnVyP1zST",
  "key26": "4DYBk8WU6AYPxUP7nBF5wqWxghirAeR6AAxCJwM6T4KvVhWwdqbAYrQ4Vene3KuqMVSFxR2nzN2QT76akYwNJ3kn",
  "key27": "2JzUnkiL1oegExdjCq7LnkUGpxm9EdBBtXG6gFho5wmNTQaRw8VVCV12DBZRcA4o4vVgrTQ8kBhscJteDcUcuiUq"
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
