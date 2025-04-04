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
    "3dVp87ytpQUtapPmxeqG3Hiy24WzdLChBwnxzcxF4SYi2eVMxbNNxLG8Nw7H93RJWU3ChR3RjfwWXQnQNTf8cfL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "swSATuvuLPyfhH9WBxpQsAj8YStAeypswJvmUyBS3ccz6akBYEjDWuGH9zGtGZoSCBMamdfEv8GZ5PXkkWFEwLF",
  "key1": "3wzgVHZdRgaFHCU3dkZoTvsRJrUnHQkFGQecAvpKqxpdMXcv1kTJFuBcS31cR46G8Syh9LRJLqjkBXNzR6r2fMqS",
  "key2": "3cVD4qorEvmcCQM5CJZMGJWQ266dKfqjecFaz3BUVw7UaVy5PtfHxffqmrK4eKkgg8GTAVq37nBumR48aiWGQrJY",
  "key3": "2nJBUNmR3bfRm5vJumKpd8HgNZ3y1FVdjEGAEykmZz3vPQcbDomf1MspDoApEDvRHt8wtVuFZwz7QhHFkxxULWF8",
  "key4": "5vctvmqhVp68Z8Wivp6t7jcE7eBeqYPdXRRHAgdx85NuHM2QFBSZsiDYsT3Y5vbX5RAUfkBzo1vQDEbM4ReyLUyQ",
  "key5": "uwbu8d73ewFr4kUdvU34NxDf1niyRy5ASRVRhkkiJ4GbpWHphyktdbNbdwZRmfVw1baMXjosU9T3GTEpZzczvnx",
  "key6": "3bqnNC9yoXw5jpHe15v4MzYZVXjG5186wxcBu2spRsLUdCtmDatUsFc2H6YMshtDvyptWZtsoBoQKyCbBGk2dSHc",
  "key7": "4Z6U8ewbNz3iRMtuHYh6SUr5KxTj1aKp8a9MAH7vYkWQHPqCmUeCDv8JUsSyWetg7WdELMUKwsfZjq71Ymnk5Luv",
  "key8": "3jPRqJxhxnfSrPqzaqeBLgRvU1K81ELx9uiWwQ3puXbisvkomGvXXcuHNhY8c2cadgXvk2Hj1tW6WPJqkDfAYwaf",
  "key9": "4tLZnrmShLDMG7HGnuLgz4kyfZx4ciHJCYyif5bebM2M3Uot3b5pUUfCx8HHZkiBWYKSD6yhRppNiVSajKJHJtc",
  "key10": "3XwAPDuojkppEUcgVYhcFi2HtE7n6qVEa7tHgJ5tiCrZNrBc2HQ5EUZwFpqDtysMgupEvHVe8g3NgU1j5CHrisL",
  "key11": "4yhbrWefw38Mo5nQGNN7U6Dv5JZQTP8wHpycycBmoqSV1rz1RnGBuQxVrUMZPtpU89PXHxaFBKC4fCdSKVXyP964",
  "key12": "5NFfALgssxFzgHJddxsqzMcRF9me2vrHMkqoMqSpNGBFJL3H84RZrfFKhkx61cwrM1AFLr3pn5AT8JmeREVJLmqB",
  "key13": "35gsH7gszp1mwXaHjpJFNxjr8gxTmi9cLreDKBSm3PKQXqjQN61CRM89JVVFPVsjPazwNShic4fesQCWikmnfCbV",
  "key14": "56iKzrPoRVyUdUWmeBH7hAnfMDLBRAUJDo73Ex4fEGxcmbv3VWoR6bMi1HBkhmBoMe3bnxAABcP5kR9yotm1vWzh",
  "key15": "5gY7J3UFUV4cELs6xnkupXshcz6fQU2cL1g3jZZoVgbSjUKSJrYVnoe83NDJAwfgAeVEFDHbk76jo6BF7MHbuqnC",
  "key16": "3GnRVWWRVnFUWU1zJ91yZPDJHjSnV6bt8U2kn7TgUVTfVHjqUG6A2GGLuu5hiMVLGibqm9w63TCpntFB5qMmChL1",
  "key17": "5JeXUwbn5efnsyc8DY1GzvfacFM8DD4QpfMEQbsqjoYQhwZ5t7f14LAp24avdFfsycNQ55KrneW1ctTUf82bBbk1",
  "key18": "5Do145SEJpH53c89TUjDfwEcCHNkzPDwToNavhmMuSo8C3SXa5uA8HwRnniFEZvKsPwNDZTUArUKWb4YDE1geqCV",
  "key19": "5GyXbdszLxxP8FYriJZkDP4dzGzV16jE7Dik2qWWEgYd6kw4ZgvnKH2goGNbzmFkbPEx4FLWeJeCgQHbcrpyfXEY",
  "key20": "3wfenhoMhkefDFPWnJs1HXWgEgVor6HdiM4zUfEMifUvQsM76rGtrPPt8LQLyEiW8YBsurv2jZQVvYH6n1TsAUFy",
  "key21": "4FXiFJsVz366JnJvUJJkp7CuVFeSp2S87X8GSJFQYY4sHNbb4upQyZfA7SyCkySB7vMKYYe9ErzsR83Cb6BNm297",
  "key22": "4nMMYDa933YLo9YfbXMXoEHWg43TguZDr4Ss5seghFokaYCNCx5DQfaL3aGaMibmnHjJcUggdb97k6yG8Mp1wUd8",
  "key23": "5kp1dG2NZhE2iH9NaiUWemMfh4rGpDQMNc9X9RTg9RX6tCs8xWjhsnrwf7wC7eGtLC4zqjpskbguMvFiaKMQJsHL",
  "key24": "2SGHyyg8cZEWZEPbBGyi82js9xk2GVtimWGe3D6uyaKEKEa8z7aaJfhV8FqvVxGZdHFxqJdrpeKMLLWaowJEMYhd",
  "key25": "3HNDcWbpYSTqQbsiMZyprK4Gngu1CUnDAxBBt75Gi6eC82MeBcyGMCRvtk1CM9FKK9ifHcJG5geufedbDx4b2bBj",
  "key26": "4Gt6coRWKugPJeP4JiiNFbtVXzaUUX4Jd8hWMGfUxHrHYJwueh8UeRumTFdaGpYdjXZKGvJoGMFzmZ2QSV2qL2Mt",
  "key27": "khkKPcZEjAVhBj8M21GWBFKKk5iaZ8WwpPexstnHK9TovPAnWoZta9LNBWpQyU8QgCfyj6CQPKopnpXyZwui6yj",
  "key28": "2VsbK3rKxJ8kQKgyi9Qd48UfrmsfTUPPQ3FQA8PQWn53X9s9xna1HLeLNZ5Fbp4t43FwtZZi33cPDi1w7XG2oFqE",
  "key29": "2Y4ytLXH5HnNitCzbG8HYTzywTq3ZB7K3QqDxSFqKgrJdSfZ7zc82hPAh8LLPBhr8dW9ho8NM2n5YbieXXsAopFU",
  "key30": "5kCAh5PGz98eRiiigLQkteVASmswSdmJJiFdP7bPxRGGhwcutqdFkYrMGuJ1Rah98y73zr788fp2gZKq6PpqveD6",
  "key31": "5L5TNBmjc5GrYCWeJXK8kWJ7bFswbe2W2XPjLpVhaPbyY2cXYQ58hnuNPNaFqkfzGo66D2LxzvijYjUcYLrZDrgk",
  "key32": "4bw8UDh8VZ8ZnXTL8Bnu4NhTnWHxJoa1VL9Z9RSJZArK3e9mAWEQxx3Se3ntBtwwUr79X5tVTuwymgo6tGGxNuHK",
  "key33": "zNTdyrmsfa5D7XFxTWA1mxBMUsuguef9CG1C3M4rqcB2KtfyQF11VoozzCXWgVixg5RwA7cqAXxHm8t2sbtb5nj",
  "key34": "2LWfTm632phgHhdtfCdmH69FTVJdnhtobwgSzFqdjzndnUKnuWxRT7YLFQCDDAvLzjzCuXzqNHTFtNgcaBsw26gM",
  "key35": "668aryVh6e67jMJG5J6mRnC1inMYMNMavanJajk9bZM6CDzPLBMxFi2YgionKtZWt8PNVgq6tVmQg3ChVXwMLbZg",
  "key36": "UBLZaoUjMVDhRQz1DoCeGwh4P4NH4hppNDUjw7ga3KDetzwG6mYNwaxWLK6mDW2UK4Uiu9g76WqWwhfU8y3vkxS",
  "key37": "2XcqdAnHKEoQ5Jc8UD6foxPrcZa8EMk4oDsvCMG2nVCiiXZ1Midqu4HR5eiGkboeTVxmuWt2ipm3VsQD4VR2H3Nx",
  "key38": "3Mm4BGkeuT1dZM5VmCXuz8WzXGpzRCbdZpnmZZLYBFLZ1zbNJ65skZTCUy3Ztf188gAze5DzEx4upVfm6rd7rx1c",
  "key39": "mCuojky28fMuWBMi4HCLsUxK6anfG39EaZ9LDr9GBewV8AezTPJAb2doGZuVyc3QnQZhJYDWpSD3C8yKmzuF4RZ"
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
