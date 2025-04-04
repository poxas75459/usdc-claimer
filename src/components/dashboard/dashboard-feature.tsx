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
    "3QBianw6QY3MEMFsCec7anxvf85CLdsRDWVBzehjrohYcgdu8dS6tfdy3zqydPHkS8PetWxMYAiFouYMQLvLGvVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32qGhWHf8ahBTRc8KoFs5Zw1c33Sr3ZT9ZsQ14qHW6nJ6kkmVvntvgzFYKEUp6BVi2QWm1f8YztDCM1WVENvNsB6",
  "key1": "4vwpuoHNZNAREBguT7KUe2AxPdiHRyUDSzyFqEMULEPgq3Y9WM4DfbzhgazgJko7kE7MAB4DET6UhARAokjMFAPC",
  "key2": "2SN3sAH7a7RiW9egA3Qv32DB6Mua6zBPUeTdhdm2nPfMkKU1icA5kaJgzgzDZetT71PTZbKYmU77eWFDgTjEwDUT",
  "key3": "4zB9kDZGHECjZvFDbnRjo81YQ9DADLrqL7M438ViP184EXR5mpwmgdavzoJBNkVASHW3a6BT8AWgB5n3wfNJdqf8",
  "key4": "53kw9SXpyztgfktuEgVAxZVrccmrRZdeYMhUpmefEQr8bt2UtBSqjdwV9DafLL1oAMHAFbHGxrtUu2Fy111SDpoD",
  "key5": "3ete2tjszeqFgY4iXpQTEpUiBuEB5TzcnQMW764pgmMmHRqBd8ssvSNYaYMKG4tfhrppYDgZ5L9ZnywcUbZWPo6b",
  "key6": "3bhvfGw73Dzo1Td73fgmvNmeFM8Pb3ZC6ewVsdvPkYjQT7gbaYuvsvzJHPCx6Fe4MGqnNbaUUJrr3F17nFP4NsMC",
  "key7": "4bFqfMbP2CVJxHpFXdkhPdGEKCHPnYyKCpPfbZwtSrmD8prPePizzCukkdAWb8Vm4c5y3eMcEk9t2GrKANS8jD51",
  "key8": "5NGhp5F5JgqdCtQoG3XQgMgFK2zohWsr3517gqLtZrZefJdUuR8kfxAwDn8DCvyZAtT2Y4sMTCbmyRmxw6dQEr6N",
  "key9": "2UZAXoHdukuugrJH7mm3kTLLYNzGi34z4oXZddaf9GGhsXsRYBGnp9bJ3q9VMhBnYN4MrZbfcLNuJqJSEBEcbpWu",
  "key10": "4hLrGAWWnJoZfVBs4rsFnmygqEsG3LCKmZXe7ojgKGZgqf3ad1i99DU6p4av3Dc9drbAczhebFf6oCcHkcLnReBe",
  "key11": "2X3LKbmwGxBWvWbm7L3aE3PBdEsQGaAUs2kEGMojHZ8bec99hRYvM2f7JJewS75yYGxN7NfoWTx5BfYWGtGAo1rw",
  "key12": "48zMfShn5W2wS21pyDvoySEvdzWP4CFKYYuTd4rdw2HfthCURi4YUSGdtaTGeRHhKYeumU4kxCwk6MDnzi2sVYfj",
  "key13": "325tgnr4a9bWFZEYji8e6ajStkvTZaSErmqmgDvkgPEMg8aU5MTeqGAkkHkBPQkhAQ6CjL8gcMZNgVVFyZpD9CUA",
  "key14": "2E7sGDFkGtCaqsBwbfHxB9QwBPPNW4itZtT4kUnNPRcnfSVXfjn9ooxWnNfDZzwb6TT9gbAxp3rrQovvfRRKd3Wc",
  "key15": "3UiWRPGUn8L8DcVG9UpLiZC5mAHPrLhNyM5Z9EPBnX5N5kF1zj2kf7p4mVKPdL3RshVrCdMGtdKkDD3QD1excFTf",
  "key16": "4A3Upc5aPH1Xuf4nwLZ8XVTcLdqpytxHhrJq74h4Z1cecUVAGpw8J8Xad49U638wZvf1KcyD6dqkjoyDNC8MUHED",
  "key17": "5PAZkL282kt6FjFSpGAyxwFPFbqWqbpsGmdPkUP8Yq7kbw2TXmhG9VkrtDRG5y1MsisLBc7oKKGtBt4DwWx2WyRY",
  "key18": "2pV4BdChdUGJ1eF95Lr8GxwniHSEqJZXujoPkuUan366vZDaHpwzWjnf5rX6mDFosu2NBjTmbnhwrNkDVHfaFq52",
  "key19": "4JN9dokSWjqg3BvuwWR25pv8YQXziP2GaoSbZU4oyDm5UpRy4XtreYZvwCbwrpbY4JG4LresVLaktdyoA1AMakaf",
  "key20": "21hA8yspPb2ukhgJ9SkdRezjAQhXYYnFc51v1mdLWaibZL6rfadpBBRHEGHEQ5QEq8kCXKEXbBcUZeMySbn4PqSb",
  "key21": "229ruiAwARa8iNGXVpzte1MjNQXQujiRVuAVyqh3UoZNWEyrzvFBMYdXG7JscEPAaDvYy9VSo5EgyU8p3xCXqL5k",
  "key22": "3uqmAQ35oAjRsKKRkRBWhUMVFizZWbm9TxQWKDqwXJ9wTXK5TDYFGvEvvcZohiHX2T1Zmj4bvdk9w11HUjCpq1zx",
  "key23": "46DXCgziKmEgh2mzuKwzFDCNcGDtxG5dy5bXa5Syr3XUGJCZbbDCRonvWhAUXXyiTehAi7dcsutqGAK7vnRFe4ww",
  "key24": "roSfMbsvxP1mzwrEctK8AhcXUMn38ffAHAzSNYw3m44qfjMSPg8eJeRKEmtZEHGpKksSc2umZLaQiF5P63j2Znq",
  "key25": "3zuiVt3no5MuMZtJtCLub4fvmsGwgvvecBSwL2iRc9UWqZdj8FkSGjHhfAZNyp3wTbnZTxy4UDFW22QxKRJPpj1r"
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
