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
    "5ebBY3fzyhcRA6vkYEa1mvK9wWKS8gzm1iCiyfD7EyddRuyf7bh3wALKcAp62xA7jjtRcQKCH7WtRWUXnHsNjSxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eq2qt1FbBhqd7Q9p4aESAupYVa1aPBir2F6dbP6hxidPhRiggWMuPb6BAQEhXWjQLhwpSRWJpLnibtEUoyctuiJ",
  "key1": "EnJ7pjqc6Z19FvcFU4bRS3gD6e2gAJasGm4Y2tLbrpYdNqXoxAmni5ZTJ7NXUxJa7CiGqmx7aHUSbLqF2GJ1suz",
  "key2": "e4XaAZNKsFuasiSybuxMD3RiEwERTqXYiQbBJ3oEt2NmTa9VrcTmbYStBs7wiuExm72LT67jv8kyg5Lpk1rCXiP",
  "key3": "4CjoNFegxeTHcV1SC7zzg1f64vJgxkA2NGbKDQ7ffAqqDngYmARbfVak9EAjKDDrSEfTWvukioeBwySrLSn6rHhv",
  "key4": "4aSqjaC93VX2neoxWqSfthFsVizkgoKEfmKq7RNkg4a3zZsCuRvxbyAHi1DonwaSP4VH41vu6tp6xXCukn6G7HQf",
  "key5": "56d6iVAAqYYgcSoEftBkoETyUroVcq4xLk8uXiNAEKiPnCr3dHGFfrbXiJUPUAd7QjfkcZPNvPGg9HXK3tZLZMyG",
  "key6": "57cGVucNit8ddGtZfYqQsVFX8gPuA4WWduhkCHEYju7KcyfGq389e5H4VsCH2w6LugFSfyYK4KPEfST9ebwGgSTQ",
  "key7": "5hYjBSbMLKKqEGVssqqtwCLG418KQTAZqssKYigMjQfaoSdHG9jBizrYkZTXYjgVd73b3KiBZpMG7TpB1KvstM3t",
  "key8": "m21xtcC5crh1Lp4Jj6CW3oQRiwiCUdpb4xXH42DfCrZnjEM65upDnot1mb9U4DA8nGwsg8wGJSFeNXobppXz9mm",
  "key9": "4zbiZyxUVoehe9nixiwvELepiaJGNcM7MkdPBNBj7avQaE3iB1oXEk4GdNrf2tMz2JDkHnbpvax1ZwhKb4mtHVZr",
  "key10": "2ff2YLeJr9TReFVaeuxoBaUmbTMgWSmagnCXeJdYa7xeaLnWoRnKFXUEnSpqNwtGibULUtd4YVuy7KCwwWXkSMNb",
  "key11": "44q33DFRJYCRdr3syY9LKsmLeU2oVuE37gzaCo1qoFoUvo6KqugFcMwgkwk5zdBiUbK9N6xcphnmyW6jCfsHfHUY",
  "key12": "5nncqajhs7FKbyqg3Q9sdMGxifoo9r71LqSutgrPeJ298nFJZYuLPPbtobhEpmJ43QLEgRaxh2fuyoWP4WfLtdRu",
  "key13": "48655iFdMyJ7hymhutVjzNtTZ9PSK2ndY5t5zDYE358xRy6aaTf6sbypXA2wpn3QBfrBiY4okHEtxRkD3GPPgrnc",
  "key14": "2ee1VEneafcAi1uDKbouLwcoXXwmF31gu9UKc1cTSiov2YGaXdEdSpkt7FoXand51K7KcHdB8293qQ3QC8hAXwpQ",
  "key15": "5BzqhJLYjKtF8hM56QXfa5Jy3Tdp9PAKwgp2FdgGJFbrrp7iuBQSMV1P9bYTFzdmf9qQ6o3SErsNEkstNgourCao",
  "key16": "q47HE45q1qFbGwpfGC83ALaLuczrcuUuEgo1krBk6cZKrR6X4dCzrEmNkiaMeZpd9UQw2KvzeUGqrRpZt9X6Tux",
  "key17": "SVWpTWzF7HhyQqiHsJRJ8P2FhdVfnc6uCX63TahqhAh8BZmK573dChu15MifscnDhvXqr4G81Gbp7aKx567UU1T",
  "key18": "36Ao9fQY4UAbrkaV1MzkRd2xWosRhQgsi7f8STeDYZNHtGMg7DbdhreVtAe4N2HpiEmboryNZdHeVyxsQNWQK4DN",
  "key19": "491mFQuRpYppHtZjHtjffhJfyx2qyexidhCnE9P8vvmzRwg4DTp4SfskUqAKPK4fYCd3V8Y7uGoF4mWLWbJC9SQT",
  "key20": "4jQ2wT8nFKp9iYNa4abYzvBcVUhUszSVhGfKu5MXiSwBEkR9BoKTecNgFF7Ym37gtaNqTDdE5YGLf343UVUXkjKu",
  "key21": "318juYmb4XunJZWgMyUPAepTugjdXyRpqi74777UuC3RWJ38ZorHypHsXQhPmXPwz54fti6TfAziPzuhV8kXtyiN",
  "key22": "hXRjeVJosLxotfPmQrHUo7x7fLcJBaRTNwe3CYStMUdMD9vbEKoH3v9DAeyD7DU6y5Yui17eAxfzdGPzssyF4yp",
  "key23": "5iPZ3D6RX8hysYEqWshbvBojkAujHJYyCnm1RJmErA5Hhmy7FjVoQXhrJ8EfPBf57tUfJSwKuVGL2UYZTdeQrWh",
  "key24": "5EXkgYX891xYdYmQaXndqr4ABHxQRfbTy5kZX3ehJLJ8wZv5XtyWEqJ49S5KFnzyvSYnoPZ8UgNdSeJarrdQc3Sc",
  "key25": "2Nd4JCiRDSvbxS4n5jjbCsz6iBnvYq9WBprdybzfnbXRLj6EGvVKVbK4oJm46zGBigoJpYfUbiM2BgHt4sGcSsXA",
  "key26": "4BafXrZBUJbCnnGwgS3L19Kdx7ZUL4h8SsdJ5ouehA4WoZqKfJCmcqjeaV3pTFjn2A3eTE7WZu3D7cTJVHcL3Ckz",
  "key27": "4wZZkiEiykcHkG5Vs6XZvLdGLwnamE6LXtCm4C7aguMzsMz8d4N3oQFS7ExAUeh3fpFbVihtbvTypHXS89aFUyDc",
  "key28": "o3utD6CTWVUCacgFRLhz7h4ahZvh5NS8oS2bdJRTTYMea4ft7yWgVQj4cugnZEjgREshnsosYFsAFyKZCccsHt8"
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
