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
    "3AoNXw1LNmerM5GD91pbpwYWH6nFShBtvTyFh3vWcHH5wKYWGpqJdSdt6CWWYUBUSLaD9mZeBd5dEfi1i4BYT5fd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NFWdMjjRifuznbUDRTxQHCPNWkmsWTWGbgXcX7qArU2E9HzVwTrGgBM18nCnDb6LscG5uYC35cqQE4nbsudydDj",
  "key1": "hpdKWZUwHXog53Pimf7SWTkKosnScaGjcfLvZ4J9r2Em9zbH4YrJSuGysAGV8tMCz8qYQQ92STi1emUkLYJmWRo",
  "key2": "5NzoSD4qaKSunT2rC1iPfo6fDtRxkjm2iujQ9BCz9gNLixPJ7DYnTnAVG5BdXmyAL4a2PeM5PFudJ5TXoih9ZKQB",
  "key3": "SDfzhwwQLhJjdt1JQAcnTcjAAZhpqSpPwszMrRLqAk7AG6gTx4djDj3ckpmuAnp3TNx1k7SgMPw5dEe7Cbet3Kp",
  "key4": "48YQKiLQmwwqcLxawwpiP46vnBem6jtP52amM1oeXubeLFJMRXbx49QZR9kwHc7KM5L3BNrAcZEzDFnmh2FaH3Qz",
  "key5": "cm6Cg6KDMkJqQNunmxRQe68DedLgjfHQ58fcC9kPdWXBhPqLSjkVjcihnB1SepsF6KTgvAJwFmmQNuwCiTojVsV",
  "key6": "5SfnPJLAbjTwt7eX2LopGJwuREkPymaWyn35jBhbACKSQFxdHe32gF5WA9LvHMjHNTYPWQeKaZp9zAihU2FqnKpb",
  "key7": "5Cywpa3Zky4QcXK6RjuWPUak2R2zg8RXgD1R3tzkP8tRb64e3vG7TW4TSwHBCjnSNwkFx5FXpuWCepHGBjr1bfsJ",
  "key8": "4te3UU2mSekMkrpLeAGFMK8NjCJYRHgbGFNKwfwL8aRJGCBpD2JRAaLDpEdNZW81y7wHPyX9kVJzPLKEsL521c8r",
  "key9": "4144zmrrfHA8EpH9Y1hUWx3maPTuZR3g7qgPkcoZaR3oKernfEtAUhudBDKRGJsXmSb3HKgomLx5PPhPzR6HSrXh",
  "key10": "2c6DdyXUGTjhNgwCFpgPUVp6Le5xWFzUwEBJHzVq46tGz9NNv1T4cQbgUz4W1ageYZXzDfP9qa4miw6B4XeALtKU",
  "key11": "UQEQrrcJCeSFd7kGwFa78aXQBYiNF8MMFfrpd4c5Uigzi9h4EhFj9CCVRarLaPtBSXfYGFntxqxX21Zjnoh6wHr",
  "key12": "4ds7kG8QH4YugV6u6n8WprePDkL35ywPSiGYHiz7tJkV1ZsYZEVgeAG3cjKbNWArHAeob5wGQaBWRwF8Mfo6g3R3",
  "key13": "szWrVYKoTvNTG8hXa2BndM22QCVw9QZyWhwH4ThTTeuTYQjX1EQQk9ADgduGbxSWX7SKK5HQzo3EwFFPSDQ1cPz",
  "key14": "31KSkBCS3eVvfn3BMjMEFQM3bUjpkgmRVFnYXw4aHQcYTepxMNMhnSks5CyjzEomyuNSA5dempYuB8vuYS6T55Cc",
  "key15": "4bgJ645DWTDQMkCWfWN6An35ZqbQd7t1F8PewvvYfAXqB5pFNYnhWqUGaHo9ZogDwwMchWHqUHz6W397nB5z9AiH",
  "key16": "62oczoCC1oVoL4kETnsobYj9y2BLTiMHz4b3cwrGaovbosuzrgkMT2W72GPPbfunF5u5PEn7oWwvadXTenPmvByz",
  "key17": "98k1h1wcH4884uwsShAFBzusZdcjNcbd5b9GT9BoAtT7dy44Bd9RSidXxSjDSfPkicPf4JAY5PZGqm8kvkarAKj",
  "key18": "4hMNbvd974BoEyVgxvFYD4VqnefezSCSsry5autLsdW3PCcEP27ckmxKhsjDX8u1GwKgTNHTQ3Fc4p65wHpAS3tZ",
  "key19": "3s8rRBF7GeQ7qNDk1MnC9L5ZEVvjAC8QcQkFN7PTbzEhpzHQRVJLgohr3yMTKqoHMcsXdB3XuE8QdNQaRyx28wNA",
  "key20": "5FtWgnFTjqY59BhWY7ZbYcXv3XGvFnTirhS5dwYgzvhmHLQHa8ypfujF5CzvdiPp7cyUv4TDiyRtthAHZcCqYSQz",
  "key21": "2ppDBNBGUT32zcje9G21693yq1UBLXGrEv3M6344XRfXxZjzBHJgsJCWJz2VKNPpNz9UiuapQ7TCDmhp5KyTnt2W",
  "key22": "2qLorVerwpt4LrEpH1Tb3iydTpdexjqCJRNB19qM2jpn4MxFjUtjZKB6YxMpB44pxAqzMCN6wiKYpvqvDWaLqbgL",
  "key23": "4RBLeMVtYLdW1TX86S19VhG7ZFWtHx52GtAAMVXSf6jnQArJrhDPCsHRj8hXXRCsGy5JZnwddTo1UBCN91VMFoo6",
  "key24": "4D1iAWu5Bt5HktdYa6UJfaBBVdaNwGYqjhUbGxVt8nHkQmBLstNQXcEyAZoET4MF95eugedGM3SjvkVX3oH4mz9M",
  "key25": "4626VybhSu5fjk1qWJFkXMHFavErjqx4vusDHzFmPzhUW1gouZZgSXr4ZPWseTocUfri95D3TB7DJfModDZyWJrS"
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
