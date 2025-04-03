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
    "cwE71FQHxse5cxhhzszDJrSRU5wmX39Gv1sgmDZPCXSgTJGCbN4mpGnsvuCZhwP3BTrGY3LRifUi7WgBSekNMgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YrcYSfvcm48JZY7kiuktKX7xoZworp8FtqnPFyaAFrvg3rCjJRyDzXDRBpG4nzcLSuoGJ6YxWtr3DtD9VtXSCdg",
  "key1": "4R5eYF2CkaiRvGLsh93g4VqSyQZGkvU9nRYnLEi2GnjTih2TvUDZr3dTBD7B32QfBz8pFDRbKDHdx1a3DUZ4g1a1",
  "key2": "5r1x4MeiUsHBakSxnfXUqsXEejcV1XNKhsNDNw6puta4EP4iuBnpsvzumQqU54pZn11mhA2xnUA6c38DtxwWnxKP",
  "key3": "38crWtYVDbz3hP4R6YfRfXFhkc2nT1ng4yA7rcimrZTHgBujGFZX5CziDr9P12MDetG1Wie9ySY3DAfgTyXexH8Q",
  "key4": "3RuTsSYVLv1vqFeBJAJx7GsT19pYieF7x9gVuXQwFmVAA4qhHc1NXs9RKpLNkrShRrbKhBnWikDBc8hHaaJDh4aM",
  "key5": "4aUDNvvA32pgyucUALJvPV1yEU89KLqnQogoXepnYhFNqnJuVGzW9tfjnv3hYZCYjzjCTLD45qGWdjdKmaiJEGg4",
  "key6": "4E7MYu3KLuowNfxZhutqq2Z9YdMwAsyifeMhYfGGknEaqx82ZiMfUFggvrx2jwYzoyVinkYuMq6sVhvM3RwbE6bM",
  "key7": "4Wu8CougUvxbuPcS1u2bJcQgxv1cMPsCuFpXr4wKxGGQHPuagfDSRrE6s4u3bzmS68onMbBbfwgA8SpF96TGzm8D",
  "key8": "5kfKrDPUf49VppgEJKs1DeMcMchX5NsiEmfHyDXkzR3QsmvUkcqidtaHieWruPWa6uEEGwx76K8uTUT7vsygNwEP",
  "key9": "64z4YqNnQLXWjgJemr7hx6Hxa4DbFr56Jy3rexjunnzac6SjgtSeRuEfWxFFN5ZwL4ZCnrmtkFs1Uqi4xBqmsFsJ",
  "key10": "2FsqCtha66vST1MDnp2C4Zf4PqDSFQdyM6ogQznmvt8atUZbvZ9u6z337kBMdtB84J55KiD1KstTDpLXpmLTeMUp",
  "key11": "5N1yd16X8qDXhKkiXzxYCGUCbESzqKXVsYe5hCqQG6WoZpdCzb5yteSiQELWxJgWZDAXkyriyS88SBbnoPaMKwvs",
  "key12": "E7bfRZeyCSJDiAebjZ57nVFjPigCE53SR1opqujYUJPUE13RvGVs3wtKKSQVEfwUX9qF9pcSYKuj44g8kKkNYk4",
  "key13": "2EeswfpBAfi9WdGToKQ6haTfDJn3L6xYtX1mrHhz29heEAnocdCrwDFhKn27GeQWV7n15Q4rf4yJF4QAKRFRfWiV",
  "key14": "2iWmiEybm26J2XPm8Hg5MCxJJBGnXXFCXUWuNbVLARQvLqxANy6tXkxyjEZ1UVUvRTdH9BVi2vcadv6h2FXvyZyR",
  "key15": "2MF4WWetDawGP8ZYhfviTkM7oCD1ZUdvg6W5CLFhJ2uuKdghFmKe3AKTJxTfchu3PG5xDr8weigVgR5wR99mvP2V",
  "key16": "24ZiKKz7T9wrCEh5CSkYBo9nBc9JnQvhpzxugn8sxV81SH2TPcR9cpwNbEfLpjQN2wRwvug1EyEJDPnpZo7u9kJr",
  "key17": "3u57paMuMdTKUhoELSdAHFtqqmAYiabpxCjbPYDM181VrvjvFNdMSpThKDEG9gR7B4L5F3jKqswQuQzkQiKops4G",
  "key18": "ytNao5mYRzeoeLEqXGizmTvnvfQrrvx1XTAnJwu1Siw7kSFWzyNfL2tmsAmeLshWhzgUpg9g5MKHgFZREeSMvDv",
  "key19": "2KCh4ZoV4WGFP5MbQnzEmjCj2ymk8EYi2potVivVvt97YJy4ogNaj39K8dtgJKQDu1PVmdzY2F3uM1RDfk7mqqxH",
  "key20": "3Rsj345UjZ9AnbNEpUntgEEQpHWwXoPNtP839e553izQa9AdhxLkthveqhVnt2nm48dgjiTet8NczV9GfFYnNGmb",
  "key21": "4uCvcZZQiCs1EP1XqeRgbUizThru3J261R5LbY4ne9KkEL7m7ZCtF7wgMU4su3hdW3LtHjTzft2RRDEoRmuKoWvD",
  "key22": "5ckLYYUTxM7gZcVvFqXnWmDdbabjVMJboa8DY2xTkKGupUrveR9ig66zkq8ija2ANrxoGS8SHviqWWzQzDhA74gS",
  "key23": "4zNnMxJXuyPu2Bv2qaabin1RUxyz3uFVyRQ97nCU2VZPsVKf9E7ZbghDiqckTo5V6G26ZXfDavygDJYTa58V167D",
  "key24": "4Dv3TJczeLqQhvvMGN9KdvsbZ9ADAUWHziH8jEMdx3BPUbpxh8VYxhrW1DRePc1gDjgVVb24t3S2R2hShDjxG2d5",
  "key25": "5mQgb8ShQ4tQidAWzdbZprNmLNMttpAEcGLX4qhrFif1WAVLGJewSczy3NNbnuaBYEH2M5QxZewSXMpyVuzaa5EJ",
  "key26": "3X6rQskVZj5etaio4r7j5XaFErqQoE2vSqcrkeCjJKWjMuj3XVWxW2Hjgefzw6KXr2cALnXzyVup6JzFM1qZQbAt",
  "key27": "rbFR63zA8bnZ1w5So9b8zs8Df4XkCfxah1oRntSy7S3xa1dHPSEbY4PYF7PD3tN5mRYfm7z2kaQ7fTJVxnfJxqL"
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
