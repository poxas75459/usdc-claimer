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
    "5FFj4QhnnUfsVZojcHYS6NvEfzFHxc13pSjdkxcYiw8fQN4zuqHXPHweXY8VwKe7xYfxez16c6ay61shX5bPyyB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1wYsozLHY1pP8bEdpxU3Eqo99KsgVRDQJVEZzsgVcR27f1X9BvrgwrHU7svb8c1ccgijRUAC6HkLeT9PNJw33HW",
  "key1": "3i7TipAEhazvdTSo6hMkpRs6ixBemny5Xxq3vwDAWoV59bU3SCKVmNqN2CJqC4k8R1zuBCfFMpoqnDmtqju8xhaz",
  "key2": "2xwtS5S37U9yRD2bxr5wfTv4u7Y6MgR9sHVuUKfUY2r3YUJZTkADpXb7Kfbwm6k5Kq4GhAhqxHfXL9kk5DA1ptVX",
  "key3": "3xzvnhAgeocAYpJTPrHz82Jn7PZ35fTbY46VAcKzry4Qjstx4qWcZsbFEoU74X1hcSN3gq5VunT3Bj9mDpC9ZiiS",
  "key4": "4g4euvmyrAaf7mcSe7igQS9Rscs2SWgJit5XdpisbyBeChhNnnJA3a35xojqe5V7AaJ3N1swsvgdD3ub5VWyvUBt",
  "key5": "dmXNEuqYQ1PnCwXFLiCfWzYV2mCfseGycs3MAGZKczSUdq7pijTgYyeEW8cqs1J9en6yBFoD9jXGKeUMWhL4qcN",
  "key6": "3YKh5Rj6k28naxb1MocecZprLNv1TF2VwyJFCAUbVxc3HeivMwiag2LSHLRbgK9SsCJWnP8ctnRSJBXZLLSP3fp4",
  "key7": "3U1ujAgWy99zu2v8AjnneP5dyZt45uyEjuZkhfhaTby8kSJPfyxeu6ajgua2eEFirV71pyRCR5Usy5yTqNQgJ4ud",
  "key8": "UEzKK9vvhWYafucM6XG4ok23xKqEFiL8g73cCezzUjC2k8Hefo5byZPJce6dh1Ez3XtVPBQW2bSMfxyy9mnCQ4x",
  "key9": "cWE91CGjczcXcEBkGqvjwyreSCbfWaEfT38YofwVdVw6E4ciLwpLoCR2mPKmgC4ipYTpKnkU4apqYxuRksN4rmb",
  "key10": "5DwVb8sSWWEKYNcS8RddjunDHTnyem6n8dVoVNAekRoS9tbzogE3Zm1xJJv7H7qmR4zWLdbzmnZrNUE6xoJ7tA2g",
  "key11": "5k9yPqfox8qG6U5o9fwAk19nU5cvtEr52Ft2M54c4cSiVpfmyJs8Vfdnir8EboHLWFeAceTHSm1ehzECfceSWuZN",
  "key12": "2PWcBb4t2fK698Fm2G6qX9wC4gH2N2jioXs2vnZfqvzTfKQgrzE4on84UrWMfMWAerSwK7TiLBBdEKqUao74avgu",
  "key13": "3e8h5D2jjpiWvYKK4LToUJCsNsTrReQemkupH9PYCGNZF6caaVfio5XG1QajFEfDQLJBe98frLSXjeoA9TVZRiMG",
  "key14": "5NU4jAoubSXwNqi8ZU3ffPfLng5bDeNk2UvGfEFdPqkUy3xVaj5CHxSi7Tqjh3zMq4DPyEYPPnS98g5rAGZgV2QD",
  "key15": "2kX81UXB58cHj8qm49tn2CVVqZ2wDPrspTYhfhQxCXYan8gCoJqw1cj9mX4aTmTcVuqDvUuDKwqggRheFubBuCdu",
  "key16": "4eGTq8iH3zq7Ykj1ye4jpFDGCHeMr7CN6STxFDdSRasHek3fXutU1RfKZQ76Vf7F76C8kYgZ2vz87yyDuyXXZ5JF",
  "key17": "2NEcDBR3yebLQ12S1V2qH6PzJZSxMFUsQjtiShWHZUkcDqhE5fvJRP4bfwBfdZgdJMEFYydWiEq6JG64sVXf98hu",
  "key18": "NUFcNtBic7AwsNQpNiQDGY3YLQTGFjyY2jDFwoCP3W3LxiBySbEZvhEuB2kT4v5StdL4GSeBKhae1XA1HKMATnw",
  "key19": "2HArDUmr7RXenxsuHjKUVcxKg68o5bN217fARzb3KGyVaNr6EvaBPFNZNPekWBtQjnCDpu9vsgcmH3d1tG1PCU6W",
  "key20": "5P8kv68GzoDmuG1XLG4AzgtkTb6SR1K2LGvtSF9utoFgWGNoRvm3tTEpdRyQCa7fyKHo5ARpmPXMMGf869tR2e1a",
  "key21": "3fDKcPruxDCWFaLtXyE3fVRKuy7qKGzsR5Ef1EHUCvoVQtAjBQEx9EPq4VE9viD2Dj1BFfKaZv8ZiUAKjGbNfrw9",
  "key22": "3dnzavKLdVRdSGEWpbKQVJoLc3eKNYee2SbNH8YaP4K7asHtt4BpTspwykwjAKcLfYsJM4joMmVopmn5Didb9C9d",
  "key23": "2BDujte9xNVjNBkHgXDPsDerD27mEvZPTApKnenANZdpmA84fHNEJYyYxjAFAgwnjv8BMuNQqS63i6fMjuQTKqvh",
  "key24": "3Kne8UB1ocfipUP4GKTTtsBSt8obYWnfpQXnGepmbcANwSzftW6ffHRknBowPwZBDaTqvTTDvP8SKdZK4pKxNhiM",
  "key25": "3GKsNQGXQhEarwnDDMv2MbhcEDZYqgo4esU3Lk6PdDXE8zQy5Z4uZQCpgdq4SWVXKK7DiL9pgyVLbLA7zHKAj9gu",
  "key26": "4uLKtUx2tjey5DU5RBABNtDWW4sQzdfi1MkjsNAoBPyjx4LwdkkUQ9dedE4CzLKGFrRBoqbZ2PqyYkvj2CnmnHQC",
  "key27": "2XuJWpJCZkFSZVC8BgGF7Z6x6jayWKCC8bQSJxPHQbmpQ2fnNH4hRrSajzH3YHpP4jd1qPa4Ck2K1N24ibgHjibR",
  "key28": "51fPzy93JnmJad5cmRShpx45QR5fAJJ6wTK2Kvdwsgz9muqHQqSwfDvVsYDpE7S3pR6CfWA6GHJVvPaaBA8GpvwU",
  "key29": "Lv9sepcNRSPFdCMMA4UXLdfkXrN9EBY7b8RB2FJdrsWpg7bJQEv3UaaTaUciEZQh69ssSwwSLGTYwTMS8AGgZvX",
  "key30": "2DeMRaRZMVK4Ud3dy6ZCnwKwMBy3mZCByrHU9L81Q152w3fbuq1DW55a4AvgE5qkVKVidrqGsUDCJRWp8wuAXJYK",
  "key31": "5vbApL85WPa4dcNHpdcKZnPyWbRsRCRofGhxLMkSfYAb23QsMN41aoaPQGLkZE7sZpZhwDoRJdFTCk4qw244vzEv",
  "key32": "4qkR3WgzwzrTbgENnGwF7Wk4yAKUgigtamPBAampvXBCm4nP3iW68zwk7PNHUF8Y91gVnkvy6pdPdfLsBGXPApqY",
  "key33": "4XiUxcBykbH9opSS7jcdKb5qZdYhHMwHtGkScoWPyMF5Vskd6Kmnzdt8b9n5JuPBqkU5BHbbskrnEbo3wmFm32n2",
  "key34": "5FFrE4kdBViG77LxrNKFf75CE7vZbPHQF239jNKWixai6dx11R4is8wo4Z4BiTqo3oFqmazGrUc4j7qiZCZdUeo6",
  "key35": "3PUyd6UKLX7ooxLxwKGmLFqtPVqrM619R7WS2Tw8XNzUSwkj6jsGgY7ZBVWy2FCZLJ6za37smG9BVTPnK7rCWbMM",
  "key36": "i4t3AwhHiFGR1v6Y16FMu4PyEYfR9rbp1L6H2AmDuwDLzcRUTr7F47WVsY2sSbANWTB1WA85aERCHfU8tPuTJQw",
  "key37": "6hZGk369f43dUR8H8gowjZtUnDbpHWYnt3JEcrKgQ1879YtpaMSvWxCBe2jo6Ynwr4n2Wteq6axcSumLd8aCVEc",
  "key38": "2WpRjpD5L4eFdjx7kdTuYzpKKWU6WYGE1vqynbcyRZeDzcG8myVkodv3HaAwS1p7jDhjiqUMh5YcdERGugnRWBmN",
  "key39": "4dv1axquseKoRSE4pQXnuk4po5sGZgHVrWZeo5cgvZDRz4PB3u41BgrXz2a6WyqBtV2NQPkRWtULKVnbxotpAGtV",
  "key40": "qkdP9mspgfAHB6j4zXyBEVy6wkhAjEsv7MPS6UBpNTt7XEcMEYu2Vc7Wuaqc5q7sc8ESX2vK8Zpup2CW6Lpkff6",
  "key41": "3o96NPz2yY54djusbmnctknKF14Hxrkq9Wua5Z9pJeZsvKsuSLsntE7UTZUkSmiwG5qKuiTguyNm21GJtF5Ncrpe",
  "key42": "b9VEqoDSNwrtrf6gJHiNWsXLnBXr5XuxYouWXdWSPBGP97YGnNhopuucGnuAnFyhiQh8uzjtxFqaLqdp6Jq4hei"
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
