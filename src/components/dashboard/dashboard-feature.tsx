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
    "4ZiCPqdWSYH7hFhkxdo6ERVtmFHZXL46rSnuRBQVA4gzcUqrewEJttUUDPvf2J6AxBLv9uht56CxMYAxRPubaR8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w5jn14UnXJa35PfYviBko5RjtDRm1urZjD6ud4psGqQufbqPWkduCWvJ1a2tayBMG1pfQjLL3WiARPZaUr6Kcbf",
  "key1": "35eLZ3xxdvhosAhvcrfT8EoTArVyQJ8NVkMdffMxWh3aci2teVw8JyBYitoPYeqguVLEDrAZYKSiCD5WSqTDTTaa",
  "key2": "3jpjSjqCLdawctX9voqnHcvGXxTcqoMGQi3fYJ1pevJi9tZFWTyVAjZfUxR6iQQWumafbbNMXJvvqSWn6Nc9wj7i",
  "key3": "24prnZZdJTduRXp1s5c8CwJGynJbp6wTxGD9B9D2wUUTSB3Yw23ZXe2B9Ur87DsaefcMZDpSspVH4RwxiS8eXYgP",
  "key4": "5Fnk5MMkbyc3bahNkLWQQVQbL55oy6QqfttAUAeVWTfehnbNnK2ag4p1PgkWPhDqyXXXx7naamJSc3CHLhT4uqbz",
  "key5": "37Qt3Y4Ya4SboFbLxrsHAyFa8bKdCKEoL6U5jQXGwgNJ86D8ZbdLs2KK7eHvWsNNGnVkGumPRAgidpenpAtZAeCf",
  "key6": "575SwuEyZTJkhwZGA1J35jb8cfkfC7DmmSkaWJCauP8qZzvuwhja7eeL9P8FnNLUvyEj4fVtzDkBzZ44S9FodQLN",
  "key7": "2B9JJaBs4FSUBKwbsTQRs7jCSMZiowWpp9yuG2NfXHGmxnZ78YV1xS1XWprm1s1KPTrtNKPJ1E3aUmqvmWdGQXVu",
  "key8": "4E1JZwWuu8VPEA8FJsGGB5VdpqTGPENogwuZ8fPYxUef9AE4a54GnUvJh2ga3ooJ3t3ENM8FNPKMhMFvwWgHp5ZA",
  "key9": "4gMwj2MFjSsLFciecUJoDPbu2P2FCkrS1Gk7rF6wQwYBWVttsFaSz1y7B1RhV6MfojktvEoYvE9B6cwSTzHpsrFD",
  "key10": "5RSu1TmygaVx6Tq9x9F2PrH4LNhg4QRy2MicgdyY4hHSyuP48G2Kbp4vaHawcG37ZH6ZaoEaQ4g5ceqpVYLV8pKF",
  "key11": "4BmLaHDEbfHscvBrYp4BskYag8NoMUXeeAxVP7ivMtsTGUN1tK1nFEwcTyzrLsvpgJvNhPr3nbKaZiFd3GeJncv4",
  "key12": "3LXhVEuX1GnXkULBah2dw6A824g4JdSGDd6WxQomNvLkHZDTbm2UP7Y7U5sDSG9XDqqYxuLUJobiFUMwRtK3MNYC",
  "key13": "3cjynT2n7TJMoUkRcAnveFBaUQuNNx59Sy9RiCipT4zB3Rn3LeixnNcpiHonANrLRZ1D3qtBHCcG7WHy4SM2k6eb",
  "key14": "2L9S7ccNPdNE7mw2ArskCt91dddSedEqjsAzTqJkse3NqbxbAowWTM7wwkCzLbkSby9hT7JU9vyDGGxiyF3Xy5Ut",
  "key15": "3qcujQ6bdRdsQWqTy9JAcCHdds8qn87m5xtV5dFp6Dg7ifxWho1kZjCfnpTqBXer5c6Lbz4mx4hrHvd9w6Z5ADsC",
  "key16": "Y6eQhpV91djGSWEcvRsa3Rs141d5tDFvcFvarT8HHnjsGJAGtPUXBFWfdL4xMiSit82wwZ2DKA9mwNdYC44Ufej",
  "key17": "2dYqpirLMC9Wd3UUnrxqAFEZmiAeLnPTWdbmBbFpgqcRpGKjkaYvpeqX3sy8TFs1bv91ySq65jKiKCpREXdW28LQ",
  "key18": "5zaHiqc8Jh484JpZz7RGrykQPkGn5nXn6MUp7uhgmagtERxjn8BhaPnEvD38EvcbhMMGvSGDYWAeez3iCqqKmwN4",
  "key19": "26c3z7Xgjkgr4aJx3W3QBQxspVCrmzjLYoHP6o5ux3YiMm9XhF3zEHEHwbq3mAjxz59M4UDBJuAMH1oJ4MVvUJmW",
  "key20": "4RRPDcDVusE6tVec9f3EjEANu6XXU7W5PrmVbtENzQJSRj7WyyhtmJ4AkxAJurvN2zEPng8s2UXpdMXPcsDM7Hs8",
  "key21": "48JaBAF4tYo1Cqq3C9vxrSgWuAAGTcu86tmqSRfDkGW9foUeyeJjukWqnfBj1ZNnMZBpa1DUqs6fBCKPcDq2zcna",
  "key22": "5uNV2N7bfP5pKqqqYeqGrm5PckKcx9L1aT4ykWG6WVk5nzNaCXmizPXU1RmLz6AfJwDgURQxK2jGjDZe6jyaQSKv",
  "key23": "3rb2AyCi2BN5r6bEa7tn1SZRNFcKUFZRfYytasQFMHJiPCP2fbbuwNxVQ3jRfx5e3z9CStPr4QPYUYNvjimYW9aZ",
  "key24": "3abrcwGa2Bu6v3VPdoRaUwahVgSSAbombnKTKnD6EYivrEoxJryUCK891r6smvCtz6mMzewMqd3AEt6h1BZqd3yH",
  "key25": "2RXe2TAFqTSeqc1nXuXTiFtqUMpsTkeRZ14HBjgtcQkusoq7p1WHAgqW1hf8RPcgB7yFMdQNBnru49fu4egsaSLh",
  "key26": "3RYieaNdmxM2PPmsvCAEom1mD3jqu1w9Zw9GhWJohWH7jFCyb4yn4wammuqAEX6r9nnEjQWFubr7VTEwibDh4ewP",
  "key27": "3JFPLFg6mXJjinjkD6bMHpKVY6dWoC3YWDeNG9CYZW4nppgYXSMYn87mwcgmFn5tupUHWgTPYiFxnQmsUC2Zb6BZ",
  "key28": "3TwqAtkf9TXPrhhn1NjHWK346gUwQVzH1abVL7fbHRquG9dnoSe265MYvBGUv82TpBtEj1BTXJXEjTGeQLTDXhSi",
  "key29": "5bW2N3MbQMTYM9vRggUXLNHGvmca2ZddajJveLzsx3bt5ne1QBdnEyeR264faReP75Sc677iJpSuVSaDHzz7UwtL"
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
