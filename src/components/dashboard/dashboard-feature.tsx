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
    "5WFjymsGxmKs1fhiRQZMRj6Yn1c62s5yKrRywQiLU5m5QXNtZK18PTgLMdTpooHsaDBFhmqnke8srjojLGhWhkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j27RK286Fagk9AozKyacYe12PXveUKQRTc9nojYZv1g6HT1KUwQhP1JydjhWLtrW4ZunsQLxFd3PCJ8mervrxUD",
  "key1": "3oxpWkWJucBvcQUKVMHPgne7FWQBosX9Hy66DbzodPdaCEs6WzZhmeWqtccBVyZ18qtPUG5yWHyvy3rY1vMM9JsR",
  "key2": "2FThHRg9ej7sStNQ4kNaijgGASX8hBURU3T6wRicrb5B42SY7G7uJzvBKfyaz2mo7qxMFdd33GaoCASZviY1GdDo",
  "key3": "5XuHmrAT9xX3HWwkQUqDh3YUzLdExoYQQSKKEqZujJEaW2g8jtJZDEYjdtkeUvNTsWHux53nrQjp7y7xj5Uizp32",
  "key4": "VRWxeJ1n8sgLG4wKWrWr1YF373pkEeUA79yQT7kpC3bSKi2RzCEfHTDghPDKbzoGV4ZrogdT7jukocEZz2tBMGW",
  "key5": "2WUAcNz77S35SdFL6HgCyrdsWBPHDGMopTF4haAGVrQ1zFBYFL6MHz8zu4qVQM3XD3ogzgu9ohnNu2TKaPc3RsWW",
  "key6": "5siqKXBoyBg1zFpRxkCQGoq8wjKTAwixuvqXQGZ6526RwoFPWemHwH5MV7CJVsC2DTbfLd3SifaVzxJ3gD9QHVQL",
  "key7": "yf9fDy3dnpeUNozg4EpnucSi7ZkbkNGYPZAWrchoD6NMqUi62753ti8wLLrKk8eLsDKz3UJvMQo8tqHMA9uBLvd",
  "key8": "3gVkqoFPBrPQfCHtEf4JLkAnrtk1Nu5cNpMc1MSYbmoNvv9EFYP7EEm2CYhKVNU1yuaA12xQaxW1jzbb396B3eHz",
  "key9": "gxF8mshD5a5ejs69RH3YatXyKRuxXZrSLZ6twXocWY83vAVC8h7rNSRMCuoa57vaJTkkHGzy38Lt1t94iL69aV9",
  "key10": "4ao4npsYRWedhcURBJLWWn92sXsKwNNLhAJ3z5Ujph8GqzdWMmkTFRyKzAjCQ4ceffzpW19ZX2TniTdmMdTx6Vz7",
  "key11": "4jKinZ3G6jHdc6cnPNY9B8LccTDmXgKn7fiY7XjTzYARJ9RcHe6o6T6ZpBsmXaPpDJke7M5pGLeHuX8TjnwuDpD2",
  "key12": "49Y4cH4johV8nFXjDzn4chNvxz8JXgAGq6u4b5D6hTw1F6SoHVFMTpN53S1nMcxhnwyikZPVghWejwtj2fomEdYQ",
  "key13": "422fkKSWtZAhJxuXmbrcKsznvi43f9PtXTBzYBhn18UVjWJV8yxCpqmFT8V8QxFaXtSgPkhfUTuDLVAbxkiy5o6Q",
  "key14": "UmUbiBz8UTqahBBfLDnZWbVQ4nfUDu9QfCz4PG2LYsrK4FEorh7nqZEFQh33bQTEGqXyxxkPj4a9bDJkKAnSStr",
  "key15": "49o4xPt2bTjK7DV4DsTif94n3LDayvSQwjsgHypJZXoxT7AKeFd9pgpcs9mEVUuHGp7G9WVRDN8MES7ngegEFdAo",
  "key16": "2w4jBUYkig8R3sa4SY97dE5Pq7LsvdpchcCn9dc8xp6eqw6FdiLJibw9jYbZxwYDQguSy5B6dTdAiUxpEPouXUBU",
  "key17": "MdHyoFigtoCaFW9Fdf6UrRP8ZCqmnaJtRQ2JAgETfNWWDToFc4beJrE8Cnw6h3qkMn7Y8hx7d1n8YB3mh1dLxyC",
  "key18": "674EcXfoV8uq4XUVbCxgSvtGxYb7sxJyRtJ4LbP24trooMG95krYteXartGFyMBtJPD3zGTFbRdN9jb3Tw4Qk77Z",
  "key19": "4cKrKMctcDkXx3kNq9idLuULghaYj7ZfEoSdeYytQ4Yrqyfb9oTU8meAWL4ifn6uErCensNa3yu3wgdUGcV2F9WD",
  "key20": "rinNifi2FB2m5r4y8HKmwBWv4RHJ14YFzhPf9UqKJQQwEi98hDyDSD5VHL9zBtGCorAPN3vJF18ZVVgDvVetftk",
  "key21": "5zGgediJ2zaUhsMpdgc8KDyBj1PZgXMw9U8XmMXo8EYBbNp3LYpHPKnXRWMciu44xLNmHvTvd5Po1HiCBF2LbZni",
  "key22": "4FgFPKuRvLN2HX9dz4rqiwkBzwrdZAZtb3R1y8PXsXfhRdaM92vj7EEDVFcD8kh4hV6rPhLAdxjAnfGmEv41U4FX",
  "key23": "3CrLAvwwH7v5cbgabr5xRkFVL31QZLGYapZABHBcexcaqgiA4dREjGnSFJmSktJHd4TA4qfcJCfjC1GaiWm4MQuF",
  "key24": "4c79bJRWgNkFJmq58Ytf1xAMEPB8GPnN5E4k1hdznCHHnNZxRDmSKeGzKfdXf2SnAjLv5ycxHeqnKkifY3GzYgTa",
  "key25": "9R7EhR9BBS5NRzH9ibZFE1Rn579HsthWSWnaggwoLbtzYuo2eDycWUWB6mwfXBqygxFBdJ1rXKHvAmWxjjue7m6",
  "key26": "2L12cW5hgRsUw8Z7frxVDe95fvWgnwCrVynmwm1fDJzffQzt9VvanUmCvigbWaEGA952vY9R2LmdKXJhsP8UfxQe"
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
