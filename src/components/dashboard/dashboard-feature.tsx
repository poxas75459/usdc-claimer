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
    "Ffbte1VAUnHNduMd8JSM6bJxggV62FaREPr4gnhxVvcEzN4SgqrTU1KTPmbiJExuJLCDkEBVYdKa7eSuT4ihbPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CjMJgWK3VnviuZBXemcPmz457PhHeEjF6GjiABSkYKUGxxChneiWZtX5JJ8HadBnQnB21CppybCqMAZA3BoRLXg",
  "key1": "2Kx5y12U4KoyZ6LZauRay8oqzYKLe6U2JNyc57wQiBcyzSGnp1tSkBaP8jchGAeHEfaTNo8Fww4hsJ7ETWYc9FzP",
  "key2": "eGvMbCjeWnsqQZXxBFZsXqfE11g2WGhWyZ5TXMv2x7ZtRU4HWPLDJwKuwAo6KTxsVbfzeofBKhviVkA3HH4bfzY",
  "key3": "66VcwN52is9iPwBJjnCtEVnxFTdSt259CwSeerQ1aCpLaKMt31Fh8ALN49MvxKiYUfo9oPcQktSP6imP61U37auA",
  "key4": "21ZfH2h8HHAoUj5n7rC1L3EerLs3kSNEBG8a28s77CsySnWuPM35eckqsnABw1FkdzWSGLoApHy5Ti4XzYWJMdz7",
  "key5": "4gCWJp5VHut7vA8sT54v8zkh9XekkL1y7kHbUdK5h8pTkbrBWEDVTi4z1d66QN5549H3XkLgckzCiK9aCwA8yFXV",
  "key6": "4K2AvQF6hQhfGuSkE5mAqzPbwCE7MqMZ2ke2xUQj96R9SmYDWqnryRu1oD4pnSU4LLZDmMC4SHeQxiNzcqSbmJMs",
  "key7": "4oo4CTv6pL5vp4pB9eiNZQ8tus1EKhsGWDwDxzGtEnCSpendbnkoHMbDqzNCBprZjw8ynBzWMSE7L9CYYMmuR6uC",
  "key8": "2dyF1zRQmpeUbKY8P9Wn6bD7CmTm2WwYQZ3w3YQieYfi1kpjSysP4RWsED7CSwf4RZsRGQ8WA6ayycZMt4BbtUKt",
  "key9": "5L8zqcyubv6ZsHTSvmVbAc4Zr96FNivxYHKc2GjPfoJfpkjSiGSnbWcZcnQuCfYNBwUEe4ekY8dEod83bThN9x34",
  "key10": "3oXUTufJAPwdTSbBSR7emNqjfeDxSSGRyvh167Kh2TUkmwrzkJptzMTVYP52csJoFsJhP5rC2fCEryTXCg4Ui7wj",
  "key11": "4fQQm17GqaaH5FCVW68q3n1S8kS9P4Y7JA5Tot7Ad4LdwbN8gVCuteqk3bwU36E7z8onBxB63a9LYXHrVj8wLoUi",
  "key12": "ep6SmSdfWDW7y9eCWKFQPyNE3LzYc2vfbY4pmEf7Dook4wVFdD7ZzAFRotPDMVkKCvpkVD8KdeFYX6Ujmvw7pxY",
  "key13": "2qR7skqvEERskahviEcTPmDznNafju3JbHgJ9KDC3X85YirE7YEbUd5GaZAEkfS5yGoiqczhcTXHJWdTBDTgGsRv",
  "key14": "5CkTn16W6v78LTGbaFZRsbRcLeHevnYbxcft8WDWyXPER11JHdzPSNom2rKxzxA9qqv9phVYDL66mrVUKSSVmG6q",
  "key15": "2RMVvoQR5NztMeSMjeKQfJTdiv1AY3j5PCXh6nbF4LAu97rRGkZ6KXL2qV5ZKm5WcHxScSZDtPHRngYWPfTn7GHU",
  "key16": "12552zjGdKRfgYTuaXXPBLzF81r9LGfu7hcmWc8oKSAFT5zC9LWStDtuQAdbXYT8xKWp4YCDAtfJfyQhTq9KhaPd",
  "key17": "5fDKwMmrz9M85KasCRrxNNT4jaN7kXeUKaHtpn9Bk521Wq5P8xsVfFDrYT3fDcNWBtrhS1XnaVv6GeD84hJvfap7",
  "key18": "3dEkEbgQQbd2n74z7FS15HJquJZvQoZxbYKksxiUkCFYX1XpxsAu6bJJeDLDqG2qTRRKwb4BtqcFTnWqrcgmCoso",
  "key19": "5kW3awMoJ5UnP28x8kCET3SWzZX8mjcAHjJcvwUzPhPZ4fA8h8jwz82M3xZjjFekzm1AZfqynfSpQWuWcAacgQnZ",
  "key20": "2KGczxCTb8ZAtagjsbQvnsgnGHJt6BZdRLX6R3mwzSwM3VFhSQUtokxnf4YAmacyvYtFypGi6vnTVA5pS2i8Pwvw",
  "key21": "4pd5wQvLQuArQdbW1YCVrUSQ1s8wQw2tQ7HhkW4rfA42EQEznfjwYNoeRWEUdzdYCwhaECKy5WNKkENSPmjxEp1x",
  "key22": "4pAKDDzZ1Y4ZJ7AZzBjxoniKB7DwRwuWDhkAgmanw4PD761ZCxgymJxnxJob5RQvNQRYQdgBiJLMZqyy8pR9U8Wa",
  "key23": "3dVr8z2uBzxUuyxXqmDFF8dmDtw1ruw6T7VZGbCrJMM4gDwBtBZzoBmMRgDJ56GJhediiuJGUGM9mgBH63p1Nu18",
  "key24": "yupNrp1HoiywdopFRszkHiJw5CGNgxR2KjUJU43TKgFWLytqAQSuYc1Ksm3fHHJKESoXcni3JLyeDHUCvSq5oKb",
  "key25": "4BPW2nSMoW4YMPzpuTjTtnvQLGqwv3GNzdALafukPcGop7FncZ6tM4ho2jhxgypaQQ1bRpJY9bSLNWuLncwPrYu4",
  "key26": "36pC8Ss6vvWueBVdVcGFQi3Pfo51eNeKPKvkgPPwFADr7R7tiZ8PCEi43XX5HGG4xEzsDiJKpj8t2LLNZMYageAS",
  "key27": "4NevWRVePTbyY2ytGZpAiihUxBAAxgvUYBBo8HLwRgeZezAbcT7s4rg6wUeVPecpzYwX8Rgq73p1ci68Uoe2MYTt",
  "key28": "4BjossMTWCGjnmyi7siSB1rkfVgaFHeDepTdubFnud4bhpeUKwLkX2FTKozKEMcYN46NynRG567aSU6N3YhbQqby",
  "key29": "28bzvQwVk8aNBoZCgj8bKWW6msVmf1Uy9wnv1oWcak8oKCmEhUGv2RTSKT2zLoj3qe8zXnmPCVht4GFDmo7Fhqbn",
  "key30": "kbw8tNeZWwqEK7bcb975hMbeK1bcfKrLCLux6eQuUZiMUR1AyTVvcvfgkEEMhZENR6e11egbvEG6jjBk3C4LbER",
  "key31": "2FLUANyb2E5KwzkevATTydxPfAHNjq1LC9h2U2o5UvXvSLuYofBJaFE1iGvAcwgSEPohLC5MmJ4e7x4yGhrY7aUc",
  "key32": "4ELWexZdPi5ZNfueaym5QQQqH5N8HfmGsEkr4aLLpEAJE1gNpMWnNzV8JGxQfvJ1s9esuVHLFhrNZCmzynqkWyYM",
  "key33": "3hQYcF5WotfUxn6QGTmbc1tmrRZ8abrtJ6SLCM65cy6dHFyY15GyF8ubbetCRUoJgBFzmw8HabuezW2EzZaFoy2F",
  "key34": "4EfbfTpyz1X7XoCqVLfvhYhBX8LsCtAYR47Q61XT9CQNJFqFMjYTu7BT53xFJHm3CvcxRhEekgDLXbShRMpyc9TF",
  "key35": "duxzeNsVv56FF19v3DzN9J4KbbYbVWTMwvp9HAsqT95KtQhM5RhHuA1yhcZiU4gQ5QMBj7Qi12pB6d7XEaWDdM8",
  "key36": "54Dv5UBjjrpqPkg1zWwGydD9vSknuNTWH1isdqPQpC6sJqnMsCBKw8onnEyjHqoedUaquSevpD2AvTBxDjsmgeAR",
  "key37": "5nY8zeoZ8fJCaZNrFYgqMudC8vQR1XLhCBzu4kiW59gTd9p26WXw729b45CgHaBGUutpMGLQ2HrMPU3EJYqtijqu",
  "key38": "3oCko2dkJS8SefJVWVF9RK58MYTLf527h9eJA5iHF2vkYguHadtSGEykv2Eu8rUZvVgyK7nK8YRWhkMeZvVTuyBf",
  "key39": "3EfZ1FabydfS7xDMyYBjWkz1Zmbm6AL9T39CyaK9UxWfu4Em8h63BfHkTuVULXnXaK5BRthni2wFedpCBoQvM8n8",
  "key40": "2BfWJgA7Eh1x1iADWE9EGYzotFbsEF3gEo8jNTdVMcJG43dhHXgZeAo5a8oWECKDoYKo22T8iJdHXJHDTy6WNKEF",
  "key41": "5FWZT31jJjD3H55ngks5q2kSJsmnBUzFGuGNw4X6Q6sDdw6mKVGq6wXkjsuhMWCk3aFzXsETGeth2BJyYy1gCb7E",
  "key42": "3LGsp2B9RkLGiGJoChazSh6yVd3xhahacmN8d4BAToZYpN9rcbXct5MCtK4Vq2drF7GzXvZHnyWe9Hi6M46vVJTD",
  "key43": "di7AXzfmHCAA5D3XcZhrCfGt65Ky2hsttgy3NHzN9DZe4xaF4gpmYpvgzA8WkR97VzPfcpjySeg2naXRLwa4bVK",
  "key44": "2EMczdKDMKA2pA6LRcJ17PkYFWanTdJ8f5JSEArHRFeR7XbEwcXJUNQ4Xfx37XSVNrNybntFFA2KMjUqnZfZ4Uvk",
  "key45": "62m5pj5akyhDfDH6f5b33nhRANCL14XmyCoHMZngbyesHMFF9PWxnwYBBb6mW6bHHSK73uCAYgttbp5kbUAWNJau"
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
