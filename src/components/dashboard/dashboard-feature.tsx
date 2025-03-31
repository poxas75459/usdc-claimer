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
    "5NT5BZ4jQj9vGMTHZV27ZGBJARJkLgYze1MbUPivMvPMLW5WeuYJ3jg4HMz2amMKxK2MbcH3VKC76iPDosATAwde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hbQsm7AFupZbMqiSG5iT9TnCqiPWUUAUjveNzXrSUDQ9buFqat19uSzv7oqtnhBADVZ1szGdKJSGfmyRNAPoYaZ",
  "key1": "3qJ2jmPP7e9j7NuQYXeZYkRfoGS9z2cnoysXrkWCp4F6XpsZkHJt8qVcSHiNwDB1emEcQZqAYtSLZKGKTE4pYoMs",
  "key2": "qa9L7pHeSRvH614FMr1nyAYxPb3skjyU3T5Qim6xpfVt2ionWBqFM9qZuX3FhJsQaMoHN6da3Vp5zUMPJ9hK3LQ",
  "key3": "K2mnAebxNKxxFwBbajL9Xez3cWgDkrRiw1WgzgRo7xk8uKZuHXPJRT3aFpcgzqScndeoE5n8KKtwQBuJqcL6kAt",
  "key4": "ECb6So4zT8N3qRFnbtidREknFgFE8mYX8ogdfwBHqBjc6kX2YKUj9FKHeEthhee6RNUQTTTgoMv7WSrfFAPrjzt",
  "key5": "kg14DMJcKVdNGGkJ5Z3ky9YCMgrycWGLEwCsWKPAtHsTgKyS7wN4GFv5j7CmUiZJZScFLNHA3Lb6QGvdjUBLxXj",
  "key6": "2NEe7Cfd1uwGw8JcrEyfRoeNtWYV7U5oTW1Er924nV7sxkshzMKKqy1ZGWy3Mj9Zn4XB8mQbwwCVaJpvbZAQRN2f",
  "key7": "28aXqoysLcPQ7qSZNaZv2cwiWFzKKAgKiSMgryjY7xw6QgPJ4mnN12zeRkQXYvrNDRksV2uwLCdz9TxyXXSADpBN",
  "key8": "4FKhb7jbSo4hr2pfywv6CkdtDp3RU5hKbHcA3AAnmoe3WAauBuRpMQwHxNu7n1L7ZL3sB2pDq97c1VKnSDfAuquK",
  "key9": "2PCTiohxS3GaEgGavHjppnxBNLLynKv39BT6vCHZu8YP7btnwqYVx36UVdkZgDdvuK6aJCHGsXd3fnatBvtuwuuy",
  "key10": "2HnhNKxCCsBNChEnrLoZ1ksPCWux3vtmbaGMzQ9CzBtQDacpNudBeoM4RJi8T5uJtFiUtSokZRPaGbGutir7z6YV",
  "key11": "49WWLBfTKzhi66aRiwqPTvivbCXt2KQsCk7FwifRBquxyTEGH2v7iEyERCCptLywn28QAHL6AvJAnSa85nmzuj2j",
  "key12": "2CB5SdUfmdmBGgzDaKeMW6bCcXvfsR73duXo6haBpcQT6kUTf3SH1CvEYpqd8v5tZq3bvL5grkEGFbjDYrSr8Uto",
  "key13": "QV9Msun1ffBCE1ou9VFxjJtmr8qFY9iJ1E3SR9ByFxPpM7ABv5w3BbRGL8YdwHkaAKCPQYdEZ1oGNjwQnGvEcLi",
  "key14": "4C9Uo5Rhfovgt97UQMkFYmXZmYg87yq2DQVsBypgKSRwTF35HCLaZRNzA2hfZnCQp5ewd6czstYWP22qK6CLaa38",
  "key15": "R9KJcmfBNbs2KcWmmucq8h3GLGDYUcUFAWcjnvLNqTkqzPufAAU5tJm9eRgWNFNimAtkpP5xNrpLcpi7RCJ4mUf",
  "key16": "49qoFD7oVdYCGk4qzWdQca3WtsuAZ2pZXQUQ9gXFpMYT5F4FvqyDPRaWEDB4ppyncxLzNDDvQDmkaKhh49NkN3rF",
  "key17": "127xWyLYAewxtfCexhtdJQUhggrjdFBHhE5ye2vUwdc66LpLHjTB1svoaFQX5VQS4bvj3HFdy8oPzBQMfVQ2E7T8",
  "key18": "SySjVRz6GDGw9Gvk4XKg3WGh24HUavxdFoueuDBu5Qg1qVmvA3o1mSkcWxhexaFK3sMuYDLcRwUc5caJdAVKFcV",
  "key19": "4jZ6dcQjR4NBMfwwT19py3W4sv1qm5RQUR6yzHzDJfN3eKWnfVNW4wqLwQU8sTJ81uGtpPzEgLKb9At8y38NEfPk",
  "key20": "4He8dhKPZwdkL8tNefhR21TwFe1v9Fp1u9SDbrdaTcymyjtzPcTpuXSzsewijdSM2bzZUAEXCpbz2AxWfYuv1c79",
  "key21": "QKn9xNizsAEwCyEXEjKFFFXuYR7vztWbZ2cR9CEzYUDGYD66vjfnc5c2rkeQvaYSH3M5iK7v4q2gPGrerkrN48S",
  "key22": "3M7RjKmwm76rdUCwh4iX6oTkmvuGA53iLg1r2VtgjQEvPHUkk3i92QvJ6ooXK941NFwiYb6Hsij2jXonPzv14GpW",
  "key23": "5LNvCtd1cYBU9KhKU1La89cok6Uf473Cn2Pt8BPtss3mgMpKLJzeprm5d2QmX3P5X8FFn426USFHD9KZ4fCimUyz",
  "key24": "cWu8WcFAoYTwcgyR1HnP5HyKUbwpGnd7HcjBmkPWFpt6GECYMfSQpRkHcZidf2KFA9SCejLX5u69ZD1YBun2YVv",
  "key25": "UNwXV7vVHDBubQQRyfaBRq8rXT6PkGvaYgJ3Xr3C7RM8UBWUYGmF1JVHKtniCzDuSNE5jHV4nEhThNHCCcPiRWx",
  "key26": "uCqqdhM37ga1ZHj3NMeXoybFvdgmGBNkXJyzTTYPReW9Y7NJ71VbjHRhvaGhmxZhSDAyq9ab9QL6KN2vUKyB1ga",
  "key27": "gnDrAErDftZSJs1VwAiim7gqzjPKSnn26WFc5ggAwEKEMqYZ3szpyuADsWnsFp1Hd5DRWRWF4LkuwwZ5hz8bYxx"
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
