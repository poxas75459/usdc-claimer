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
    "2BTXgDkhUVgGnJFFwBf5VfUjxiG2utuANK2va8MUSem8w6SU2y2hXJm1GxWCzJc8bHp3RVAAgHg1BBYfNHjLXBwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37NWA7gnaLsM3ShQj7Hf6gPB66idDJSRHk3T3a4ECZH1hPRNZbgaKCt2xQFJX9AVjoh5nVLrSvNxE4SmezS2bS1W",
  "key1": "4vgpQFgabJu6VU5CjrXXNbnysgu5uzBapdViyFpctWpkVGGdo7d3m8g3GjUzP2JeXAWe6yejoPyz5R1FK6mgYsYP",
  "key2": "4jrn9PRT9zmMyFHMVNQ9qg4tJLJXTQHmRAqkioUYCh1kjTkeoXkvfJSpPQ1v7vCZXUyuTkEMNVfqZ8hbZBHySEtj",
  "key3": "2pmRG9kLZ3n5cxyCi63Vnt5CDkA6RBM2KJ2zkEfHXRNJrsZ1B2wWexZh742uuU3YjDuwMjADrcuW5VkSvLvW9V8E",
  "key4": "2LBgNcp7zEzZnB6EqqhWQQtPA6vh5EF9EAxcbYt16Ys5Sovj4PxEoe14KMRUiQw6yDnUMBJSeFPC4g989tRkDYdR",
  "key5": "23r3GvxyTXpYsT4jSF7WDcpMvAW4FxnpbXhP2Bv1SyoqXTtxQxQB48mapeuZiQkLr3GHn5vQrbtAHw5Lg5URefp8",
  "key6": "2juBgCsHBpBrFKdF1feM7ALe4E8FPpkMQk2AV4YoAT916T8CPcvzdoaNBui3nU7aiNFJJd7tjm128S9XZA8sw8xD",
  "key7": "4MSZkt9j8MrguZVnr5MnNg4oVzUxX5iJpkH3rtgy5WaYMqKmFP945RXkURaNqLmPiDJb4JfqJeMreouUGaTm8zWE",
  "key8": "567TWT6DjxeYT78pEhLr1ADpbrtPRhwQiRFUdTVCnWqiaJFfc3pEgc6uXV5U1H5ZENwtWatNJbvLwpUDasMNYqDK",
  "key9": "4trKY9bss3nCs5U5hjMTktrbVrHQWESnwujyVs1Up19uYf8wzYWToRu53j7eQgj7XijcFvGcCWcM1BvdzztVtVni",
  "key10": "5YGgNXEC2m8HN7fShEQEynSP3gR56jv9oE1AgtRrEjijvu5CdwnRfaYkAo79UWhDxa1f5xYViBCHnhxz26v335Uy",
  "key11": "2TwjcXrZadsjoBqtY9bdmEciehSABdMj93UA2kz6urnp7TYzqH3fMJKM8sXPdnemHFbpRq6HtnVDqUkro4kRUfVA",
  "key12": "4yq2r9ku47MG5MK6pwX3t42ewuqTCsutKqXbmLhCMUGR5VoM9zq8VRS1wHHehtuKSXYCGAVZ4SoYoemYouHNarqF",
  "key13": "4NrS76jC6hsANJT87one8WSKvNW67sKPw3fFzXqb1GbB8ipAYPz6auDLMiuMLedZC3hBZX3ub6WN611SGyaosMrR",
  "key14": "229h7q3k6a9BVh4eTjK8ZUCFQC7AE9w6h6p23QETaT3pjjQJPzCPiooC6hhXZzxJd5YjBrj9kwRs3DFd74wPu3xS",
  "key15": "zJweuBzZSMPcmvNbkAJiRSCgApqwpjiiEcKi8xWx3XS4jdmx5s8JzPR4DPhVT5TxmNu8XJhZ1pQwmXMQfSpCBoh",
  "key16": "54CWUdeKm787UfJ8BcYDiktMYLz76iumXGiQdZh45roSp4rUq1mVPaTbsc9ZYAgVe3Gg8f2tjKTeX9X4APvMn13F",
  "key17": "2jzrEMVcNZq1nzvmJF1qz7GU9xuoT6oaKsdtM2JsZj7rfxSzs1JjK2jaeNCsDcvNWPzuAcBBrNcLdTKK2W1y5hWA",
  "key18": "25Co5mMhtdJum4fU9poo4uYyDPiECRKnUpKSTsZrBd8YVG8aNtt7YNXewCd72VbrPCC1KbUjsrSVzshrtLySfkrE",
  "key19": "2CujDY5xSkejqeBk5FCn2jXem64Xv4Rj96931A6cSnJ1FrA2YTZmJVmoUL7zjB519Nvprrug9eqkbq5qxtiHCzMc",
  "key20": "x53VbfZLUEE4x6867xXshiPfo5EXJvGbAJQyBva6Q2LRGGwftHDvUcHerXsL3PQd2aJGLBxjBA7dJaHdr1i8Ptx",
  "key21": "2nrKcaQn89r43kr1oxDq2usoMziTHo5CqAYiN5zRCHRyfs7BNBP3gK98MFWV589J3DhBDDwKoukRprKKnFo8GChw",
  "key22": "VGuHKoMB6srT41gVA1MAuaCmKcqahQJdozTV3xdcUtoTHG1CuoEsEDrBBK9KYojMUF7y6U5YoWV3RLBdseUutUq",
  "key23": "4WHTVaXHTg8dGfP5uj792PKCQ8ofb3n2qo7Kq7Kfctbx5JYy2SRdPdwNn1c9nvzXAMj8kCZjF24ZBUXDsR2YQM1Z",
  "key24": "kbbSAHVqJCuLVgmZis8qWMBXzV4GATT5awZJoUBG3jr8VpU6gdR6vfFG7sTYftAqFRQqvmLkx99mGohrcYhi2f4",
  "key25": "3hwXGKK7dz3vYWTSSUeUJu4fSCh5EyjaHRCeFwH3AVENvaejfaDEaoxnNMG33emCHYCXqyWvLq32Uqhv7m6AZHqS",
  "key26": "5QXVfvMki3tzLCyfMTHK2AHENEe2UZYy5n3kz333WEbSPqwDMscLdq7B6vMw5LEbt1z6Y2WqKYoEkBPMgMzFZ3zw",
  "key27": "32bj6VHouJRXJWtvB59KFcDmuCELfhnvEpBhEMqcjQqKypmF1HKmtpaHhP93v4aQCznxoVXW1UTKLM6DKsRDK2qo",
  "key28": "4SY4BGzS6D3a85Tj67QJxsVrnuvjGVdmyGTU2jpBW4NVCUKbspx8TUMHMKqkwxpkY2nmhHeo6zgpc7TxaA8ZmYhe",
  "key29": "3vutWd8NkL4LFj8TQ4Wue7YrTzuyuKMfUk5fcFq3bJKzMPaZXj6xtQpctU5YPSLoTLngj8NYmUzFXGoRwrdD7DYX",
  "key30": "3Bn8Z6Y5d2BGRCrP5CQKxtcNqedsWKuRcdU2t6jintDzppfbxvSsHxzhonkW41Cknmrpu3fzB2rfDN9oezKWkxhL",
  "key31": "3dZsAtg4DgVSSTa8u1rDxLm1zgJgkWQU8LRrHQQZDZtF28LHjGMLzztaeLB5aRg6gcRvGozw2Je8j47PKGEH86Fd",
  "key32": "3V7erjhby2UcsAvaySoKUniD2oJ7NRVSD9M2JM2CJ7SsBNZ1aPQD1GjEQ3tgPZEeXDe2ayWoNXYgaP5JE98oS1Kt",
  "key33": "2vGzaD7K7Tbby58yHf21hLT2qEx8Ztf9SvFXPRivG9QM8vk2TkY2qzKmcmxTHNnFBqSieMbRARtMsLGfFniu5hbM",
  "key34": "3eSxAWdzjtrsrAHsi237DjQZa3HZ3KZcrohTb29YUKZuW9dgVHHFRJyNoj1nmMjH59ZHsf2LDgRaeDKDwUA1Rjee"
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
