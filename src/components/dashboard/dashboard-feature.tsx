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
    "2mzTc9sFgATwabKCZLmByYQr517uG4QiapqC4C4VYeBeyYhByRWB1fP76QKGDkoAyLPubWzQzT7mfjani5ngj2m1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LQSFCzW9y9duSYQRykRb4etTej1QFqdH2NXqd3kQBzDhm5pJKc13uu4wrMtK3NVWuZEPuGDGXyGzzAwMDS8MrX5",
  "key1": "4ZqtfTZ2DLu6DhJYy53Sha8ee9n16CJttHKcGEoHNcJffRzsFKRLUtAeXTQ8ybpJRKfLsoNe4QNg4wXZrs9k3Fi1",
  "key2": "5HBm5b8R6Fkq9HE9Kufi6qtTDKCettwBh9k8zc6Vn2m34cMcLKfG4qmNdqz893upjJX9KQtZx3tDVr2TiAueujy4",
  "key3": "22yRsghid5e55cqHz6mSaKKoVaoKCtKQNJm3vNyt4VR6eRUgiwjHh83zPu7T5rR2KgVqkFSbd1UYejbCjKn6dP4U",
  "key4": "29M7t14eNHv7bEYQzghiEiMKttCAJJQoXCXGJTeAPWcco71wCzLJWGy3YuWuGx9Kzq6UUVtAqZsSMU3WXQana5Sx",
  "key5": "2CVNnuY2htVYLsCMLALYxMcfnYaZu4G6ek8tHaGy5bMg53P3XUhnudNfQoG1CnAmzaf28YxuPwfTnXA13ZLnDFw9",
  "key6": "3QMH1oaBDLjGvcMLzitxerExSuCKwnz2r7GyxiTMBrDUQfDjfUsn45umXautZbD16mzXm3LyZtqoZsXfsxe9gDLS",
  "key7": "2vNdyH3vP66HApuePx4aHMnm7yiUwMFYsAANzFhmqtp62bwSJuvnTz4k5a3vyVJVqoxdsn8CVkU9sxcveuwZQBvf",
  "key8": "2JVb97cGa5U4tuWYVw7DRbQAEQxnMyRY5uhTW7hnAr43keuYX9pLhFWhvXmq7g8mNczVgi7VFVzJZ6ZWxEDwSL2s",
  "key9": "5udpGr5QAySHBkeEaY5kHGsfiq9oJiTVSL7YyyTXChvXHSDLYSJ2yBTWLYZdE8W7J8cfCKoUE8FBhaJihmbGqSrP",
  "key10": "4qvYtUkQxRwkWFoWShKtUnFwDDL4BML6xREcViwDDALU4BtEJ6dpBoksT4CfKMH7DUQxWuo9rBwuzHnPHYmoogez",
  "key11": "4gUC34G69CoDPCuUEFZxEbSu2C97Pito9T6fbTSuF1xaFtyuDYNVwGRTUF1RBqK49oMXUE96hvESF78Tmu3qkEBj",
  "key12": "3QBEuHBx2dBE4CjRAboKbhFPxKHDRNTbPp4yvytBoz7vt9K7ppeEyQwm1DiVqGxbXLGYskYh7FTcbW6SX3x5pnPk",
  "key13": "ENvthFKGUnuVbQMxLsecRNmKitpxSPLiyysn3619nVTHUiuus1tzsvhZy3J8G5eQkF9vrzpkzAaE3sHYvz6dR6d",
  "key14": "cLH5C8cH82vJRbqWW1ppTJdPjfqcG4HvhEeSbKr4s6N2iaoz3Wf3qzkT7Ay6dsu3Zyj58j2Aifp7xPTBBhLrzH7",
  "key15": "5Fk5CEZS1XqC7CYh9uRkW6CEHKXCR7DCW1ZQYyy82KkeN6rQJzKXDnG2Zf9QzrxkrS8DFDyhzXbVCKjpsBPqJdfL",
  "key16": "39oaGLGyc2u8b6DWAR2z9nQnDCeNWWiVwnyYEDSLCH3wZQUqK9k66XshhhJjSkmCwZmfS1dBBQHqTmgjk1LAy3i1",
  "key17": "C7SG6WZCqYNeiEmiC3zXQdUC9wSNXgdcdWiRYbCHH3GXia9mQGKxtyhQmWovccppuPS965FpoBBwUhBNLs5gbKE",
  "key18": "5t6yEFHqQX4yToAgHoB4kDUPmofG3TEnA5YTFiJVgcX2HYWQDHJ3ruCujJrxgWiomBAJJZwaSpfx2ipmZYrt7tuz",
  "key19": "3r9y3Rixe7YyPE3xtzWJ1kMXRPkcBqgy8EcVoZKTJnyHjSjrFAq3x4rEww4NHzef6f4UHLPPLkNi7bmSjRkhCiZP",
  "key20": "52PAVQ9QfaHoTUmWkVtTpgbwduzQhXfKw27GWZPjyzCacMR4yeVup3yvYBySTPHS3mU4h8qCZBV7QqVutYKZAXY3",
  "key21": "2JuHU1LZ1jHmJ74Ybrksfe9Gn1YLdcywLdhuGxDak2kPE2yGuhhNBsWoo6PeaPumU6i9H5uKZtADCgf9WqRWxFwA",
  "key22": "5gF76isnphuti9SJYPVQBU682D1EJBXxrJUY3yj9C25e2MrJRKaQZNTCxLk6KoEapYCLuWuxT6M2HrJ8n1GmJTvt",
  "key23": "2z9zv31pXYmrFeNGZK7GPrECpf9QtMzCtQGyhrgKRs7EjKhpxvA9bj2gW1Poa1am9QnUXGFLgxTPqKCBXZZjLExK",
  "key24": "TvHhbjQU5RZrFwUTR5pWQkxfkqieqYnUGV6R2iWMR8UmfbfTa5ZvrtZdSDBKp4iwxvzdFM9DeSDcTBX4i3MYsrC",
  "key25": "39MSiaSC9oRLEvByGUWAYCxZk4LSyCQCpzSfAAS2Q8csqp9xdD1KM9Q55yGQVnwGRaiTG2o4AFKbGVRgYKvxzPfy",
  "key26": "39X7a8oRJSqiFfhNGLxZwABh3WSPL8v3NaX9JxRk2Boun9aSzp1PK2RqTUTE5FQ9jx4u1ZuSRsDutWPjkqZcAMEd",
  "key27": "5BpXXzUrHY2aD5NUt1HLYVVzTwhvJ1g4KoscLQfde9WGfVrYTrH6CMgskMAZaFhHGycocUMzBvdegxoLPE14T79a",
  "key28": "2eztA2k9oNth1VXTnN3bbKZHzxA2S6StWbgfWWz2DDTK9EMCVSek1dEKzkpK7GhwUwA6KsuGt8u7DCCYG93rjCHC",
  "key29": "fXfVR1JAmFBkoLPc31hg7WLvZoHyCDrfs9ThR9me3K7UMbc8icYXT8PcP6E5McgBwVecMKtk5oXfmxTMUooHxrh",
  "key30": "4dstEyhqaLRW87qA4Qx9DgNrWEazG8U2uGFLSm64aRYeZmtdua8w43134nvg5qUx9YuUo7K7tAMJEFqgKq6rmyGG"
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
