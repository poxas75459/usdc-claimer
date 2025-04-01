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
    "3PdyG8TBJyTPhGWZJs3sWW5Pc7J5RBM8ZxCJ4dtUpcEFJvp5nywsat9qoHpc3frzwGSfG2yp5Mrtfeqs8ihPXkUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5csJq1AYEPMw4PSvk9NvjPaXDs4u1NmDg1fRV6u2D7qBR2KrgkXJRoPMjQD7kNiTBn12wEZSVhj8r2XhLr9RCrpp",
  "key1": "43Sv8DPuxEUfNoePdGAtM5NxsakGPkVrCJQ5MVYESxQD7Uhvz9T8yZ12WEzjQYQGFx5Sx6csawPogGmjmspCnpxz",
  "key2": "4sPUtziAyUpTBHxR68LBPNDiGNeJTejipvLQYiw27NzpHyLWjb7ep1vpQmMoN5pbq2o288nufLniyRTGFXc5gPAC",
  "key3": "5WUuC7SiWwUcZ622nKKTomXLS3Uz5p5aQQJzGQiyRuBsbTTQndbuW9epsY6bLzX1vSjxdY2jg252SieZru8tb9h4",
  "key4": "4w9uETWtteSkaeoXJGuhubFhJXfoLBUajiT4WP3oK3sfeHT8hB6rRxuzwY6APtKN9CkSMPKH23dURuvDDAw2CPo1",
  "key5": "5ogc6n5fh8KVxfNyA9ke5NLrvyNPzrDYbr27bWc5bGKpvp1v48nYabARbYRV4B2bndTywW1G66GXPaYYvPUkHfhT",
  "key6": "wLu5RvVL52CC2MzVoCzxYohrWLjRLFGjtdxqRkzhc5n4kzaxYGi65GU5FWX5r5ABvFQjdhFKmvSNtVU3Z8kDHZz",
  "key7": "3RV16T6VThrU5nFzJS1Pj6wrzdx9h7nsGuxzdybHtjogKqr6MkVD5eY7ozTrFrwYYbrpyoNkZANeD9fFCkZHY5f3",
  "key8": "5NP1hh9DPKWWfm6JoksU7S3xSTrsEQzWdSDgNCiT53DUyXmiWWYkE6PqWDLT6YT7aAHMgY9v5QnqRyzdtJPBy6PW",
  "key9": "4qiWZ7FuNpzr3rv4nFvdYgi4neDA7DQww7RxGyx5S1K28VWH2gQAJV9281ofZuftBCJkXSeWUUe4fTFaU82LWHiu",
  "key10": "5gGhqFZbNjcZhoM1VLMe8TjP5uhkNTmEpzW164BvzFPvi6AQtQxPMYQSU8v1YzkM9W8TheuzdtRNbJvng8nrD7Ux",
  "key11": "4Wm1QYAbxq7SyCaWBYrTFWfkryz7S1VXJDmzvRoD9SqjefMiUqofaQK1x6r5uv7Wnt38MDERoba7k24xfVejedgW",
  "key12": "3d5S4rgFHB2EaVuJUoij42zMkpKqiBkqHHHV3odCUwZAhSkAgVFZyaPNVMXgbgakGcM94UAtxGhx2Ddoob2mgizh",
  "key13": "2YUyLL7zSv8ZPh1VMZ5h4fiHuPHdT6iqrAUPLCNhZ5svGtC5ja1A91FYXVpePbrTD8rm2F4FnTES6ANnLUWo6vjp",
  "key14": "3EkoPKhk8XDtuL7zeBo5azJqpvL9kCQEU4e9tQGnTPXm2TySPXspWdc53u6ZcQR2C6GabK54S4u6JekaGj2Wgvs8",
  "key15": "5XzcazNcaM82N6XXpLpWGxD8NGt2SV4uCNgeAxqTCQNeVTKLC8w6GL6tKg1Vspw94R3nD7HBWjAXz2aWN1ovryGs",
  "key16": "4b5Bie4bBLLYQkAFCngkWYwks9ofKyu9mpH7LR7ZL7XroFBLGMphQCXYfTUk2y7q3eJ7PceZRCZdv11UcCqaEg5E",
  "key17": "5VeKGU9z5N4eGvnEnRvLRifBdSZ3kKZugp3MixQ24WJtsZN7UXVPoRektjyNz18i76HvbVT5nC7UeZzta8QrnNJ8",
  "key18": "2Wi2a5ZDf4ryEXtU7VrgpiMn6HWarp9Qnqxh6Y981z9D23aCNDHgJEAJpj8di8rpY6XfGRA29eb1QWUveByJNhag",
  "key19": "3WgGhb6fWZwfGpSi3YcKokXdueCppbWavkVumH21iv4zFK3SUdkCthWMEBVyP85Hnz4qzHUA75ytmZyomUd2UUmB",
  "key20": "4CKZh3HbuVNWXdWr27TgVd9XRC3L8Q11hxDsLiNTL6uvPt94TerEupMZw7N2onZvvUBb8RXfPCbw9Suz5Eckcc3r",
  "key21": "21fvNDE7u7bHhA8KmsgqKZBgVV8PGEbuCHDH6nTsAENexuvGQ6CURvGZJSrhfH2jgZ1dAjgwnBssRsqpq8haQgsB",
  "key22": "3DKBX8vrXoy3AAeLLey3yW4B1sNvk1KipMTn2zhSyB3mYCuEYkGgiwSeJnPxAtEtEHRfSC8LdhzCQteGF3u8HnEf",
  "key23": "4RwAZ8vfGMKExcNVfjoedp7tKhu7QEuPRn5kmsbJX8aJ281Qgfvv5P6wMhRznzqtMnZWXUJzDZFyWMMKmowcBkWP",
  "key24": "4nyCV6qWruung4zrWSfNP5BDJZt1A2e5AXDxBh1sca5VBZS98N2uXvfFzijjygvaGFqf1NAyEDhjUzM5vxFehThF"
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
