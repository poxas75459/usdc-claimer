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
    "23hVU9PWcMG8qdRLE9GgDKshtVzQ43u4P61K8HSyxW9GGohEFkz1vTZt7EJtBLGmTF83XTZYVucnpTTzA1MLJAAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nu2rT1imENUDxR4YWfD2aBjXVu17oGKGvmHjaU2ZNNiLBiyiHM64oauW9PgKupKF3NfBjTtx8oZv29GbpYSqR5V",
  "key1": "51C52jYJq6nBtafJnbxD2C5ThS6xqfPUqTSY9eooj76z3y2wdit2tZxdHAcAWtGbtV31L6F28c2Ys9mNRghr9576",
  "key2": "28KpPbicwUc9sAoX8fcxJeonS819CkVo2igYoBtVCnqBLySjrcwL4pZ2utfnCvcdqo9iwUSc5yk2P79CXT3XxxDZ",
  "key3": "66T2XPAQYQTgVSzyhGzVh6S2U1pKGfm2sfwB1x3iR7FGX3NETKD4udcJQoQTBRqck53JQqV1Mbt6fEH6NariMB7f",
  "key4": "5QFJYrp5GopswHqW7ScdyzMJ1FFziM4nT3vYDsWSzpXn5LvWYG5XYU88C6oufNBgfPgPqcTZqkAD45yAzhQCsiEw",
  "key5": "LhRiH7hAcT87ULoguD39wurT3ifs8ANuam3eMyWLKnarLsUbZSJw8vD31ryef8mSBT4wBGLBBHYrqNQoT9c3Xy1",
  "key6": "LucpxX9mi7pgX1XA519XJa5GhnRBEDwT1KG6iL3wQrSByCmUi5wmqRySxnvLXxoWVWUpTNzB4y3bCMtpGro8sUm",
  "key7": "47mTeXvxiqJKEo3TUjJkQik2GP1EsM16nvpt2952uLBBHGMDGWoao8mfsuHFMBe6PtjPDEKouWXkAo4NSgaq8sW7",
  "key8": "5tJ1rVCfyRGmvKuCZzijtRrS8qikvhGrDUgGNAg96zD6qWjoFyeyH4SF5WK85nK5rxnyo8YJQYrmU6BZQBsQ5B68",
  "key9": "MidAF9Hczs8oTX8NMBZLrjA4o8Snzq6KzCVbR6sM86ZhpFWqRJjgJZjJKWNJrfDaz6zsCjoVR2Yybwp9zxcjsEH",
  "key10": "3c7PgWKxnxgcEDAxoQjuv1PVD2gefHVYi6NbG9bpJDkgBVt3QbTPyY1EwbqUsq8K7EmUTBGmdCz8EMhPvbi1JfXk",
  "key11": "38vAMdTHVeWgn58XqHN38bquetRK5Wi6tD9hyR1f9aaEw8JTFP6wpPUAtAzwtf3aycrxEjGksaxStoXyo4KxPQjS",
  "key12": "5GRDoVjNrUv3c4DLPY1ZgNaHpKMkNTKo2UyRdNYRex8S3m6NgsyxEyrqj531z3BCHVp82b9Ja9RHmA3QL35gmHuz",
  "key13": "5zHk5v3BsoeJZ6mSpQVx6bzySkDMGJjMhaK8EVo6rE4YPMdQwPRjQVxbFLdrE6kwDPtH5Zx1sD5v9KG1EoTCnjdd",
  "key14": "3riZb83KAYM7anyCuormoHCNTuwFhCcEpkDhmgwqvow2YrS699McmXzzfkq5asoUnU36ZXMECCoQaUh28qLkFLGy",
  "key15": "5geCxwhzzSrptDMkZ33qUX4sZur3gcrVeFbAmtK1zaCNTcG9nhsvj5uMBVbLZ7PKWfCe4psS6LxWEEnjsdwghSJX",
  "key16": "3i4o666RSCEuDTpK8mCQUH7gJ7qcBdCQLuSD5MaMyuFY6L7WsXwzyjNRkskecBHVGPUEpNtVu2TNNmgmxRPLFD9S",
  "key17": "4L5Lr95RQobJro8LnNx9kFL3ELefWFmK8vUiTzphkq8yBi3jshFuYUtbtjYt3A4YFxQsTbrUCg6HvX7fxXqoD4Hk",
  "key18": "3FKwqv5oCPM2iip8E4KTjiWT9bG3jxtMbgpxatg5WBu4W3u4Kp3aAbCpypNuuxoE7wZvcqit7aZBHx9KAtUx4oty",
  "key19": "24fsCVXKDXUEZQWbrL7bqajTEvyCNbq3pspBiZmcXwMdtFLtsvdmzi9zYp2Km95xfepJyB7rRwLdH2XJEyMCWLpG",
  "key20": "2ogCpCRKJETa8MxxV6Hd8TC7LrwKuMGdtMMtVXFVjvGjedKjNfDNeUKy9jRBjddUpspLKSGQGB5MQfEFhK8NcR9d",
  "key21": "25QrcjeRv2NAATrY37k5yDS7NJ81V91ukS8qc6syp41siP2wynR8GL9oEqbK2qzgK8jFLETAuTrWqSmUSX2BE43Q",
  "key22": "2Q3HyubyJQoPPShkVqE6jEjdRXaWsFpYhNW5gnezL7enrdTNnnsQkcy4XeskuuEisKsUqmkdy2TfVhYbNwSX28G6",
  "key23": "26avQqmKH2XcYtm15cFMe21nGhg8srJQ6mTkM8RGy7QpKDVPpZT9oxhnUkw548KWwirRetjGs5KYGHVciMyaH4cV",
  "key24": "2fxwaKqLv4drDZWPc5svXHmseLLHdEb3TVH5ncS98Tpra4ia1CSqdEsTM4pXaH1GreZ4Ne5ZLAerGLdf6Ea1GvEg",
  "key25": "tSDoH44G7adnZ86LWmLR7wGCpuz4LwKfWKfYjpViV1PV6JGyRW8kUHMh7bjyDDHfcb1GKZZSrtPfzAgW9LTRsS2",
  "key26": "4CJzgTA9v3qne3p68euzZKAy4DqxEFVhYYYjbkFyXfBGmPbaatqumkY9cqE8mEM4vFUHkyPf9GzCXf5Agh5ZcKrY",
  "key27": "2yFFFMDB28gL8m92DsF4pWuYhVR1GzRFYNjdhmBtWdKcXeD3DJuPr3yUEaAUPCW3BHV3jC2zHMLoTBPSPvDGuUsm"
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
