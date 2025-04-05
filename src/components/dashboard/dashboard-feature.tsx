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
    "4WwdsgpKUPv7yMR2RDUbZWUjMbgPqyDxJGf6jXSZmu4qdageX2Kcu5mqmKsAuYPNifvWjDVVE7y9MnKHe5W1buCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i8pHM74XKi3ABDULDyFJmvj9urvPazjwSkriQjCaJ9Q4V2S5pwf4bLS4uruKC8iZLCur3t3WUKpZrcKiVbuGyG9",
  "key1": "4RWXCVP9m7KFaqrV9M32eCiipuDHDDKE9gs3hTyrufhs1dHqbYJvsXuGW9QuvHmYZHBGKwmMkEqRWDv69RQe1cEB",
  "key2": "59EU6kJgZ1SXkBo8fcCJA5LXDK6GVWiMxBxnd6usoLG6YTbbBUPRTHGsmkkEMnamGLMS975nXLArivBR7QVSTQ9Z",
  "key3": "5aJrysNKSv6hEvSqoTfmEH7MWvJPSieW9EF2UJwEvStJubbEw7dswqzW5WrbaLzVmQ4oJzzBZN8hSCXVtuwMTypy",
  "key4": "4MgQUx6e62C2Vi4ZMv6FqfL8xKMQe1ST7kci4fMTCmti54Zs8Jrd2WYseXEpccEFfQ67aTX3gWG8fGdJqGBNvBk9",
  "key5": "5szBzbA4LbB5kUTVRRn7fDGfVEjzGiz58hm4TqRuzwxWeVYvB2PCA8321HCxJWZfsGMS2uoKRLtYMpgxw6pgzaxh",
  "key6": "64KbYczeeHgULTmhK15NoMmFZN8nt16ph14bBHF1isz7WyyFxen5nAbQsveBqQEvJ2yGUEku8xCLWCqJYzW1tjaT",
  "key7": "4WuMQHvey4K7MekdJZ2iBGPytqoWsbGG6FHUeYVzNByCZVvgXJLj3X39kjPyLZXQk7jpBHRa5c5FCyKGXaPaJ8qC",
  "key8": "5Kj6TNprJFpFjjQijkMEeMb83KgrDsMki6f6qSUkSXtY7syEAvLqJUxgf95GDDiy7mcXd19rVr95DaAD4dBq5ADH",
  "key9": "2Wx8mqh7jvJ6nZ4JUv91u58VE2bKCGqk9Cv8h2T3P7aB8cGMqEE4xQ3SzriRbjvmTjzAR9kqoMmhKBF4u7AVdC2L",
  "key10": "2fPvhX3jRCoaBWbmwceQMR6s7CjMzeB7iKMEkZPNzpHf8XArjWPmS4KRgx5TZzd4JedtUbhtFZChpkPP8yyFiR2C",
  "key11": "3r1w8AW3gHnkRoH3T6arxLwL5mKhrb2GictRC2Ku5fmTW5UvDSiGaVkdRdQhabzVA1BVH7BCUQUwxz1Uj5mHb7h3",
  "key12": "5Q8ff2m7KbT7XcPEiuLDbModCygEsgdrwxJC2tqyrCBKLcY7TPiDkLhhVe1CpB7n7ipSpy9ACwsmFWSFVWxeS1hf",
  "key13": "4Yr3Wsi3WLcYyLPVGbVDB9Mja2Xmm8rchRC1jMRfxsfL13rGUEyN9AH9XhrDW7Ncy6Fd4FSotV6JoZwNdVfFgRu7",
  "key14": "61tqyLAwEHutjaNB5z6BKzg6RL5t2BXR8PpsjJ6Vak8NjSwP1S9gxCKuZtgvR8mxj28Dh6RSr4UMGsfgGkPmqT4f",
  "key15": "mQwJYA2MDaKovAKH5FqziEiGDe5dbvcSeuBtSNFhkCVsB9yCHafxZNdQvKeBCsboScuUQnvrR8iBdPwpBWPNJxi",
  "key16": "2FaVSyPkejUZ1Tgd82rV7pzHeesj3R2yASSPxnvuzZvavQcN8XfLHX9ZkYzqQnzmCGHa2jdUHDFRHJjzEyB64WkE",
  "key17": "R9y4ieWLsRq6bF9fDiif4hHJBTWySvM7A7aAcH6YMNL99pyPohL8mgRKFR57KmzEbA45pEXtmwNGBJHN4tV8MvM",
  "key18": "Hd7exaN6AUgsKUEmCQVaAdWAGB1pcUxfsrF5yKiRJ2WopBuF97AgGq975VZmwfH5dJkzMCh6iK8PPn4js9KEWxL",
  "key19": "5s1BTBvNxkpAyDFFAHXJFteTgw5Gf9XwMQqp3ejh5GgJ9Nxvdehri4nMY3kdycxtpJXKMWfACUEUuDcYi6VGwM82",
  "key20": "WeHGgx1GVoqcuskjXJNY65TUJQcSvpPUyb8EaXahxP2YTeTD1jCJFWcuNHdNCfj2ddzj4DRvXw8eqF5L3tyoZeA",
  "key21": "4NmEufyQCAiM4dwSHrd6E4QgrkGi79JkVMfZnbMoMYm1sxjmV2gQMNa8NrE2AajhVneSNsdYZZNTPnGmD1kpwUtK",
  "key22": "SFzkWJ883eQ3PxrrfZ3CuVtx9KXvMxdGA71jPemvfqdQwcLd9FFWQEQGcrjw3JqqQRiX5oLubYxiySY581tEk4U",
  "key23": "4NHzEwkeMNQD9xNFkD3dwNVibLexKmoQXhCqYUNUDXXRVZrQPZwmK5JwtE4bMoPGevKC6zWsY1Cbn3XHLeZgKL5g",
  "key24": "qxEeSsun5i2xSFdgKhj6mKJq6rxzjn5ii3X24yyBALo8For4ni1eNPdRC9UqZp8trcbwJ667AfSJhXTFaURrXTt",
  "key25": "3N6jjPTQhoiscXh4R2hXhNnwQqkhgC4GuDnBUMCKE11DXR5hparv5KpoFLiRK6L1vNaxxPTxZSC1WQij2JwjRZVh"
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
