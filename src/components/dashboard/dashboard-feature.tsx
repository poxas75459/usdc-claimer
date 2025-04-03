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
    "57smg2HoibdECKZ3H9xsMQ36bRpXqQD9qYXogXNQcxns2Zg8PnFqKJKBewjTX11PaJzErLcKMpDEXNk4SzD6jQqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sYfaU8Z6xs6TAGNKcqRLA4agUqNEmZkdUnNSXLRVbY9pmCQ2E9J5ucAvDzFLvzrNWnUJLdwcGnuKPSRp7iXyuKE",
  "key1": "2RorhwedeHZTpfjXXLPe6kTXVCL5Tpb7QVhMkmjifWBwAyMK2BnfVYmerEkZTnypAYuxsZqPHGEVU3YrwXfFtMYV",
  "key2": "W7QoopUBxha2X3zmmsGLrhWEVfZcgmDUb26FZdtkVQy6P86ogJM659VSYsJqiZJWK1h7rLEnJTe59vQgAUFEF2d",
  "key3": "3FsrNq8JagF9WUPMcMrcLQjJRhqsh9MREd2LYhM3WVHSQndP3tHERe6CUX4wuntZ8edPhU313sfQs1ZHtXRx9YAS",
  "key4": "5srFoD2a8HA3rSGtus2UAy6yQShXv71N4r6eC6zDXPNfKdRv5vderCfht9KpTa5hk8Bo6C1NhojabBA48WpewP6Y",
  "key5": "364UNGCkCY9YCGkFZ4MptJwrWCRoSijax8FuMYZd1FQppJeDR7dGe2Qj9vYo59zaHWphnsXuzJx6WsrntPeBR13j",
  "key6": "3zUFmJWiBL6VwyEtAMmkt9XqQmc4Gkhq3qrpZe2AXjq9X6NFphbC4v7qFG7N4YeAd3dtiNgLa5QXfVJ2L5ZDyU35",
  "key7": "2y7rojSVjHmogfeYBiE2PWBGnHj1nJKuisVcFNwtawijgQYd9rhvGwW1aaRQRHXkpei6Xkcc3XKpMDmoMAeaNsBB",
  "key8": "4jHwDiHtvAtB4ztJCf2sMPtrNJFHvtF2dwChmV3kP84fXbCKrAEzPfxiM5cnC9cu8LccynjW6xHv476ci9U8MjB5",
  "key9": "4cRcFukkcCAeGmp9sPsHQUXjWnsFcaCeMEVS1xwoT7uqyNWNQWCidqJdEvEQHs6UWqeixkthoX6vR8i4DsKMDyd8",
  "key10": "UVnJkeHzcnLW1Q2pocLUtVJzMApyiosg47feCH2XQLEnAdaXQ7YzuEH1crdS887MXxachecvADzWUNii83BEtBB",
  "key11": "2mRhgGfUZoSiusaWLeupEDJUEQ3ZTgoPX3iyr2H5aR5BbnsEHat8FiJXANFUuaxMo1xcDYunWN1CFza4iA8ugGTY",
  "key12": "5c53RMoa6gELqRk2K8RBGDoch6y6C7pCYYbZTz4gTVyxzgK15m54aeUc6ZRxqD6WigdFXJjtTU6Nt5tKma8DnNHr",
  "key13": "39wA94MvZx88gMk4fEjRZ44VnDNNntb464SsxRVgfqnLUZmMcfhbqcKbwNAVSzukYHLVqmsBoPbHLFKxnbdCmc1h",
  "key14": "41KN745Nz6H2z2MXB1p1NZDLHeXCSFCq7zuyEpunynNo7bKhAzgxrRMgnwC9ZGPMAAroxYZrtXvwmk8CsaZB1z6v",
  "key15": "cNo8qW8d8UYvF66HjkjuSh44PUFwdZfi9xyyFFLYcrKvAaDx8Sv3JfbigYG4S9AGduxk4sYrxqChFd2vYrpbr4Q",
  "key16": "ZsALH7cs9t3gRAtZnH5sdwxhjCwx98aX7AXwBKE8wX9erebdFU6HvRgx29nvdDojoxqqXgywyirnrc7N85nho3E",
  "key17": "5ScCo99AseV5HrbGBH87aFMUKVQqYDHW4uMurDdZtGLd7YZWtzQG3GivdqbGfVJr1nXkZG2XysBCBJ8arUutsjzs",
  "key18": "3siP9jbsQ4PQqHDpjXiEoWnG6YgQNAbCi8N1PKs7pHzn9YnyXaj8d6SqoD5jLfabhG1BK9hMAqSfkJg1b8MvKBo5",
  "key19": "3aGfpjWfdZmcLXnpiastYDrhh34v7aJiPz94F3skZAUGf2EYwvumzqj5yVjz15o9AaQfwU81uFMPQ6oUi5yWmdMx",
  "key20": "5o7PcTWMjFpB5smBi67dSDKMJ7ta9xPnHSmDNSqaGX8bCgZheRDXM3jyD4jxzxfWSQFhjQoSCvhjMobzFHbeAeD5",
  "key21": "4HuWTscSnVQ6LdcYBYKg8K6kYHTMASeb8T8C7WSgJb3rrpuky4sjoM3gjBKYaaBMHkRS1GP38HYMG7FfxxEtPeuR",
  "key22": "4bCyesvFCZXg2SgM5sifM6nC5i3L6Fn4JzwSXcHimcGFfTESeoDUe1qKCySGa5VW6cDUAxvgGVzSk5cBRzHXQVd5",
  "key23": "2yEfqnWyRkHsZugeUboyAvBoKr3JdrJHms5bMxkm5yPn4GJR7Sr7RFVG1rPvvupzaMMuRiwphBu6YFwApLuWaGJd",
  "key24": "44WeHuiu4wZKcpu4HwaMs4x6NYMb6ic4NRjGMH3J1K1DpEiBe4Y38bGADa58uJ6ZfPmga8orVYq9i9fVPeR9g9Zf",
  "key25": "5hbERpnqGJf1ugjc1Ed5bYYQ8ehgTM6Xezcyfx2MNPRj5Udf8hxRPYuLZbmWt3Afrv7WZsjgEaNFX7jp6fp8BPff",
  "key26": "d382MqNqqNpcVNd4qoh3zeWB6aDnqPdYK7JyR1dLU841KGtYf9V33HntdXj33qeRCrKSwEAbs5G38TZvBS9SkBR",
  "key27": "4pEQETYj8HBMVrkJ1X1g2GF3EeeYAxP2oiGaq59g7kAWxCMftgzMjrJ6TLK82BEGpkdHP5Ui4tC2ScQi5JjXZ9dG",
  "key28": "5RXGsJmb2AnoFNQZBegWcSUTdaHSUkUm63bmF4N6LWSUsoNPbwjQqyEf6phFBrc34eGM2ikPnMpjqZt5Ysq77DSJ",
  "key29": "2BPZSYCHVALAv4fbHWNXbEgupK7gAtiFRU3hMCXzj89PgoyNQo5rzNgm9JzYg72zM96CdTdFhj3R8WVuxcGWhQmV",
  "key30": "5L6kbuvWyjWUBziQoRUWtnV7qFSW32sRVxM8JAXY84o3FYRwNzNCpD9tEUoL5fACQzd6rzHBBHB8sZ3T9fMiahU9",
  "key31": "3Q41w6hYRjseNvowNMV9XxoR11JbYMAQUuymtRVsb6FCxWASNTVM1JjQLRCCcwrWacjT9bzeMgRFiXZF4S6e6oHL",
  "key32": "4Jn8Hjiv24okd4jspBPCHCC8H6km1h9ZuRdERWGCg65cd8zk45M5qj75unhzaTP9fxdAA1hYHJSkN8enGbge3aed",
  "key33": "S8EUmpkvPnCzakQBSrKrLHFc5ymVHjvfpYCj3o1tgnjZpjhfgpzX9WKMEhSomWQak6CBuKqfbxP52Hhgn1Y6Jsj",
  "key34": "5fq3DNDWgVAh83ALRbLdzugEG6SgnvRSAGSSbXH8cq4iEsCSqPLLMyDihGZqGgMEzh3rYK5CVLFjJSBwN2t7f7W4",
  "key35": "3MRt9oHRXijTfa7apaSZzTGVkASnTo2P8pNaRnpakQvcURmYDGNhSDni2JwCkfwhh55j5UCLfXJhJHr3s5KguwyA",
  "key36": "3rEFzoaS8KMcePmbgujiRVgvhv99GbWhJofoCiMQXSGwxzJaBWCyoaPjNGZT5QdKvFn3GTrkunSk7xHAGhuvqFUs",
  "key37": "rzpJdjmB3cbDqmKJ3xX49g5pnbsqbaRh4xpWJofAhwM1oV37L7kCVadsANky39mnpF6G5wUHua8BWJT9shc7wzM",
  "key38": "idZyLycTqDpy9ov7kTnhhV1puJh9b8aeWBnWwhCYhhZHcBQm9ddUWxaT4nB4FzukpZV9oaqiUdoKMUqpEh21ogS",
  "key39": "2xXjo7iVn9ZvtWDTouiatu6RpN1r26Z8fFa2pariUhDy3a8PGSb9rX9FxxXu1ixDMoUDErzpfcJjJsz6XcGup5KL",
  "key40": "Dnjppb8M7Fa2WqFEassbumS29WQZdSfUKKRchED7eGCupfPkktRmkvVS8rxgjutrDa6m44ZE2FCzpcqkaxRaqdn",
  "key41": "u6V1rRddGM65x2XxvzswbRtc5QQMP3nGHj4mMEQmTDEjww4PhADJo39CXTZEBRS4VDGykW7Zv5YvMRJbU57anWA",
  "key42": "Dqinbsi47CPpAJpsaqWD1wNGHrs6HQMSa9Q2oY5be1Lzkfi4wF5P9Yi7R4afacmpsqZwBhWeAji5RkKk3y7SU6g",
  "key43": "qdd2dVEvhQ2odhtJsuUambMtwq5aJukegdaz8QKntxRSwbGSsMeGNsoj4488JoEhR9D7jCMoffGJ1wPrJFsfXy1",
  "key44": "4z2gNPbUgmNNWtWtptuN9knzQ14EWsAt9kX4D19Rwx2PBVHntg6viwwtLgEusQEeSjmUDwvFNJ9URQbk2LAmcRbY",
  "key45": "KYHzWaH8ndv9bCN5Tu9t95mSfGXadKhjBwV2bwibTCPytCawHTq2MWqW543shyRniHEC4Nyczfpwmw8DJk5tYkx"
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
