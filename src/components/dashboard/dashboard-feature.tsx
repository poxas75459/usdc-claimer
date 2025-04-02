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
    "2bJLgbc4Zn7FHoqGy1qNTGS7awMyusFzRviQWUQkJ8vGiAPDsQWs9q6AKwjnH5qPgMXbvJ9shrzgbg1zTHsgXRnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55GB9as51wJrPJL4onVidBkeqXhgBcZYVr8HGYWJeCx5wcbkyFqs7fwfXxKGso82aJBawmPf2SEfPTc5knP97BUF",
  "key1": "j5wMU86PzgDruSSKn2HZg5TQwSCGP7cMgtUiwdHCe1UgWjhXbwYPRc8XJ4CyrA27DZPEWuCJtVGmT12tzS8tBAH",
  "key2": "haRnEbZC2XD42JJsdza7JGtZXhtMjuiXPdVHnvWc42qKbPA6MESarNxyeTVptXDLEsPYmnqCw6BQrf9ftBXhLRp",
  "key3": "4Pov7Ymhdyzxg8kYBoCWVzLBYyeWsBwsdUMVu7i8goXd9R4Na61kQzoUfewSQmHPfDZgt2SKXr8Tq9BcBnAwVRT8",
  "key4": "657G1YPX2h2VopHpySL9RrnVP68mAW9ANHv5anrCzqM9yMqZUNVzYiAb6r2VqLiiwXcBD1fcHA3gL8XobPR2YddK",
  "key5": "36uthJNAk16FGLoEt5k7y2AjQPcJhayajptSWK64uGmYSLV3g92Pi6vYB5RHuDyFv6vWp5ZdaM6zGJQgeKTmhLiz",
  "key6": "uMx9dxNCALZD5g4NPdSgfxuLYePnZfFsYhzNPptF65g3HWyyDSiwicDtig2eXNCnuUuq4V2VfzYuFh5xLYa8p2R",
  "key7": "3JfKFo1i5kJY3EV6Z5KKMfFqoQvxkbcS3ynQLk4s3yXHLBVN7oXQC1vrN9esPF9RfGUMuYtKWwPJ72ovbeLExUMq",
  "key8": "3jF8n14Xt1XNzESoB4CHmLDD2jHzaJFo8eQaZVK1tw9XSpLKq1UALC7phZP8ixgYi4w6Rf7rNgXmCoPCNJGRVz3n",
  "key9": "3ZdQhyzXnCnmzTqJf7b9T7VL46Hcw6MAwB5dod1xsg3mbMFNfRs4BZYcuqD6DCe4LDgGtufvetoh9xLwYQP6NuNJ",
  "key10": "t4UGFbKLFUteQZLt1M6QxEG5s1VWxDQMsmrKF7k1T66Myt6qZcTAA4ANRAymFLRuitELbWag3LMdjH4d4ZpFoxD",
  "key11": "GbJtdNBq3Ysc4EvUCoN6FVmX6eQRPs1JYufvfgFZYPd8JRcvwyo9vbVehxDQy1GQMv6yiEuVTqPTNEtkDTBuHSQ",
  "key12": "65XGUJs6HXJp2AdctM1wnHM64eKeKqTtRCxKbZahB6LGxohmm7BFzPkGmCFYnqwRkYKFcCR3FJ2PyuUuozyK7bH7",
  "key13": "3z935xvvKMu6WHPk4XKPyS8ynTjx1Nk2jwgDzkUxvXcNBop7GwaDJMh3VkK32ibMK3ZR7jT6u1KFWuNPWwNSsJJ9",
  "key14": "3mx2cE5jXirRV7eWeBbXoM2T4kkTa1ZwuQZUkc627jxaRf2UYLW5BvwXEm5H2LupZYJHGasNibpyHjv9tMMjBAwj",
  "key15": "4NdbThacnmDjGvezjyjEi9n3kQYhyPZSnHXxbyTzt9sERqTrPAaSzfAuk4Rfrccw5avnU4McNsYGVeKH6WrLF54d",
  "key16": "2BTQUx1NwSREQehS8i4byuS73vUYoM6YwhZQTSoKiPyZ41ujYEdTK1TnFUta3g8jxNxvN4fgdJey89JYcbhCm4yY",
  "key17": "3VfKby5VCEZcosToEvLWqB1MVurtj24SoAUAK34RJFLQk29dPEcndHHNzMne9SFFM72vvs757G36i27TjhFDHVda",
  "key18": "3NKU3h2zJ9w3aXgHwnUw9KidP4TbsC1H3zYQnATnfCb8rkg5GF4gXJ6U1rzQmL63LarQ97kessoGxaeVcUUyc78k",
  "key19": "4D1tehVCRVbeU5SEfyYg7Wi2niqW2rWYR3mimYydQVCxDWKLFrhxZCvMxNpWXncLZdFe1TxXDYMUEcr9GcKWCrvp",
  "key20": "2B2ubt3AmcLeS2XmcCd6WGLijyXbcXzoAKCaLDpAmiH3mMBsmki6roYbTY7gRk1dtcG9LW8PcMBCgtKUCSSksBG5",
  "key21": "rV7VDZFe9LA62LUTEjUJ26ymaw536RqcDR6P3JWhxVeZBtebEeFw1PGpZjs8ggMm7woD18DTNQL9pqogMwDZxR9",
  "key22": "4eDeMoRughbhPc8nWevGFiqYarPuQ7HzsqbuQWiPr3XEgJiCbU1F2Acb6YwchXjbbybe1XMzvwpHf1w5PXQRA598",
  "key23": "63QQQARaKPsimru4farUr3oXMniSYmYAdxto3Zm5auhEUM7uZtkT2nLrzJUqvsCzfApD8daZxg7WtwjgSX8GRRQf",
  "key24": "4bTpWrEyy5Q6x9t9st8qBtHrPpvfvArZSh7tHNUtrV4KdpcpPQE4THMCaPjJFb7rb1UWxUb5AqapGWPCwuMVPxL",
  "key25": "4qAamtyYA4SFRQwBJRLg2dWTGUmqcFK8LhdPqkeKTH8rtbz4dcBfvgBDTDTigFe5ApavLukDeNQZGAU8hQcXz2hV",
  "key26": "3NyNzxgBexygMW2nhMyUVFtU41ceVy2JDQoKbmSLLKHwidzwCzRBv47K4QovSjsp3BwUCr5KhW3YGUwk11G8c3P9",
  "key27": "2UbLWbqmjen9dFtHymTqLqjfr97mKNGTSLJSfiQmRkrPzze8rbDaHjthe2bY5SDPny72dmLgjERwnArSbF8HgJBd",
  "key28": "3JZLNGeRh8EjJBZACfEsBfmpf1StjfAHmQQyLcJ6HxGMr8sSFkgANV7MHfEdYhXt7YVbpGuQswEfJKWbKfYHZkrv"
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
