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
    "5kdbWjUvV6aC5mba7bBeghHb1RNNXV9VrN9FwtnershJibpRuFc3sq8SEQHngFEcYz7UreFxDGovmespGFVFBAh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bLe57nF832DXqQ8oXis9zk8JWi2F66z99gzp1URMDVCB7VMre59QdkmXvqz1wFDuANnhjgVCTCzzw3qN9SQsYqt",
  "key1": "3X38NjCxLUn2CftVcfxQ6QKgr7iqWEh7gDH8oVMwMyDQotsaVCEFeqAyGAKXbASAtqVw5t7FAbkEhhhQKkzGxC1X",
  "key2": "2AAGj6R4A3Jp27YLq3Rrz6aCrJz8hhdNKStjzct8FtChDmTdRJfohknig6yXuSQtHVHcjJyL41JxW9f6hFprRnok",
  "key3": "22n7JBSiBA4Lz7sKDLChvVNFBttceNbb9BCWjSXACGctcQBo52Mu6rQThywgeCiMbcWZM12ej51dePyTdG2E7X9q",
  "key4": "2btFsSWJPphVnGDuAJJYNc9GBAgQJNXiNqaBhyZpfmUVkDcfvvrg433KeEAuXkNgmcoFfoLQAo2G1QfyVHH3muhS",
  "key5": "23agMdLitu5bjhXjZ4CfytGu5PTkPHrEiWjwYvUEnRXjFo4u1SehzbXzPtfQDLTpgvEbvfBpWi8VuMZMvetafvi3",
  "key6": "4GDpaFMiHtcq7b7dz8ta8QugshkjAYvXWNMjSw8rgJ8o8jSu5DiPzAbTprrs5mk1FL8xgSZFLAemnPyY4i2ZEFB2",
  "key7": "5rUX29LCpwia1DEaMG94W3mqPHxxL8gvn19fcduFpUquaTN3vZE1m2mpg2kHHWuc3B7okDjdHCSSnrLxoVpurHyT",
  "key8": "KLyt9gvPdZAEEVXoyi6S3yjM9Re3UZyXVNXBgi1JQAEJ3fZqvGxpXCykR5dARSLGPBoqSkmj3xN1V952MPDW6Kg",
  "key9": "4YLp2SKUcpdJffhX4bPpSZqxy1RTQ7y3FRGwmNGwksJhzQm1NAh6aZGcvJiHG2Hhv91L7LYhzsYyvbYAoMBEPaG",
  "key10": "3oJ8MLbJBeWgxDJde9PPdaKtV78L8cJ5YQUPCNnnDf1E58hysbkbkUH6rPhGoQhWYceHJEdwdUhm8BRHtnNYyFUn",
  "key11": "BTKgcNKDRQFyMXbD92TeT7mig8nqannqJCrKK4SoBNeK9BRunjZ6i3VQcjz1JcJxpzcsSmDiKZuEZ7c5WbvY4bL",
  "key12": "5VW1jG7mKEao9QMJ4rKEcQVP9X2WJ2vy1i37WQFX4Y7Av98xPxTqoHqHhgbn5wbFzXuLTbhuXhxCQWMMF7CGxbw7",
  "key13": "5j12Gqc9ui25bHU5yAz1ubn7UChe8jubCX4FaQjDXjrEejFfiod11Y4uueuk7mqPYjibZ9cgnBbztZG6LXeSzBPW",
  "key14": "3UDETsEyAQ1CUzoo2zte5jRa3sGpBrNNrTxJ4kZfqmksXZ3yUy1MAip8D1XipF3MpUCGMfuwJZ9teiKsmffyQjHW",
  "key15": "4Co4JTxrqCPMde1x8njM5AipwKurFQZ5uHBW3cEazxsNRkA7P3TVH4Xikyz3t8z3GiGwFJBsUzwXYCTSBBt3eb8q",
  "key16": "5sZ4qQSbspNcGyJdks3WoLppqGZNqhyMtKEBjEtkiM4czTTfiWe1AF33ZCh5eo3bU9HwQpAh1acWgrDFZMppZfTZ",
  "key17": "5QNkyYrKDLoCXCABqR68avukAsJPr6wGWytS3MRoJNWKXCLr9Cue9TAfHvqHhHskTK6TJrTcykbAWsGeEbUNusrX",
  "key18": "4jrSEiGJjzSgqB9ggneC2Au2JXU2MwmheURMuGmVKRzqpUyAYBem6oVPP4wMe6f72e1fYUq3Xshh6snxHsWLwL7",
  "key19": "4TiWRF3KGYDbA7bW6v31RsMjAE1y62WPYjNS5j6n26VVju3Ypiu9DNXTMRFaqkxC37N6R3SnWK9nQT2yNgQg1Vrt",
  "key20": "2SaDA2FPhJh7zos15LDQTL8mfmpm8UbKVM2ZXbJ133HbR73tMd8PQusZ8T8KMZe4iAq29JBbgt5EiETACyTJNR47",
  "key21": "3TKZCHanVC5PffxAjLYybgtZytpMvXmYKidmUb1NAhJydgLd5R7qa4K6KZtfaUauWWM3gEUFQLi8z65Gaq3E2DnY",
  "key22": "4S7b4mLXCBLNwGUvXusSeA9KM85GjddG1GbbmKWtHJ1EtTaBmzBAmWqdaY8DrqindPy8zyHMJMtDbKGjskQhGp8e",
  "key23": "2fphtjuWYHmEp6gwWyzJe9pmtV48fBaGwEkts9Qcx5LKNUpvmZznwaSmsjK1x4xfxzvPH9gY2p4ZEi7vFf6LW77u",
  "key24": "476d2uNbZyemJCWdixEjgzue8fTJDrZYMCzXPEVe6jrBjD36XhJN2XAgA6mrNwoxdjmvVDfupiMkSkx3A2wd2Vhk",
  "key25": "3wjKp6KL8Gv5faSQi1KsdQYke2PaUr7meQvNSBHzniKTdCpRAbUyyYQm9xbrgy3ShL1rBMBgGWbV9cweTfHU9YbR",
  "key26": "hhDQdEixnV8cfNBuLHEux2yceALaFG3mYhZjmvwgtbgcUvBs9U4FfaFWChuLqLmBcpHpQN7gmA2VG9qJNxtZH5K",
  "key27": "w9TwEm37sJpi2UCJoFWbGsVDFaAKBuYSZJqvKrEhfJSRRhr1eVvubDogTpdoh7PzvCjsjrSiadq3ULcGgq7ArPb",
  "key28": "2GjizLhkU88NtVFmiKCqmqT6yiEhe6FHYbE9wuAzEXu4aAUc9cie6FxM5X7jKEKr6j42N3HnfRPxTpNkmtT8ZsmR",
  "key29": "PE9h2xpupSjxDXWtqFdeN4G8r8q52YV3zS4JbHfdNQwJ9Pf9aePkkE8ASFtX32y1jbfgtqCpBLY7fTR9F8e5yoy"
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
