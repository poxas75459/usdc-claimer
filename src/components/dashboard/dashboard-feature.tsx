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
    "3WXNFc9SGXdDHSTZy7uXHGBe6ZWF1QZCkS51B3q3JWjCv8PadR6L8ifBDdVxgQqNqFNwWHfNZAd4WUEt1cK7bupL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MF61Rcy8vRXyQ7k7nQSX6B7dBLncf8Gjve5GwGyCYfBhWYGQE1FDDao5Xd9sPF6CicGS5NPRkyMxHjFVe6Gfx1Z",
  "key1": "ceVoKQugDoqfSpddEb9XPQ1cxhMSvCovFKrfR9YNydYPB3wb2o6mHrJMw5yThZKYcPsPVmV6xLGo2tNJBZwDJoB",
  "key2": "kz98qhs6nLW8pRf9wzCC8QHCAkYFHNgbuQvaxmcFNBVqjpWovqLki6KZH6yjvqkTheRwniCCLQt2XSLUaQqgunD",
  "key3": "61V6xvdzESc84xj7bGuot3WeXy9uzKhwtudzmuTpjFBfUGbEdBMYdtSDTCkFkDHG62tT6mxhZUNaYvQ2hi4wvRXR",
  "key4": "2dX4uh5aN9RkK47eQNNcESicF9btCQH1ZLkHWSN6F7KkvZavPqiZSFvJxF2t8RCdKzAMtHYqzxRyPJtjWK8LNrVP",
  "key5": "3YzAPxHRjJjU9mxmu2kZz9NDajxjybtWS9KfouRnXqUhj6xSs4YyAHC7PfHv42yKdtwmQihPPkPaeuwAtNzLjYn6",
  "key6": "2r1pbkjMfcxquGpmu5K39uTLMNnyL3FNLhZMu4RiHJLaCt3aix9CDEizmQGU3t3ovff9dXdAozMsTmng1YYyq9fy",
  "key7": "5zsnHES9YCBTkJPSPdk3o1Rn1j49PqJ6RCRa7SFiYA9nap7tXxdJpfp6ofVWn6wDxyoWtp73s6bBu9Ke9HwfGTAs",
  "key8": "2MUp5xiA2ZFLbJMbsgditsdBWxxMLhXXragYAbAfA22HNwKvLJhMBCGcaEErMRAPNb3MhXgbG67EKLSnEkuuP5RF",
  "key9": "575NUtmfvxicEA8RPZFj2SzysfqX1PdFrwZZeRJ231KRpXZUYRRrwcvcHjFzr1RxM1Nc5nzkMSrGGnFtZHJpgJvv",
  "key10": "572TXsmZXZNWE3fnUeDyJqNdvV5eFqu9xgbmV3TkPjHbPWwTcvidgDSkhwV2xAENWUBiASam7BDzv1iHQWKwRovr",
  "key11": "5sNvZu6ozteJWEsayZAU1iKenFwx97nHu2LJ18dcRxdcAzgtxWCxyD5Wf3S2UMjMRAjkCYqga2Bm3kJdk8sjZFBq",
  "key12": "1267fTcG3RUK3pEVgepA6yFr5qFfBkJ7VN2sJ7eToE4guboqaSb1xzZELbnDTkcviGtBZcBYZ9CKJdyFcLRoNUk4",
  "key13": "6uzYXA8GTvA8UPXwf845bhWB1U6UEjFgDK2HBUQj4CXfNRcx2RwugYcHvB3LJrkjN6LJsUUFe5Y8VVaqUjTQzn7",
  "key14": "2ek4LzNAW9bGff3aVe5pDq7zzf61nyVGrzEbRe4CqAhbzJqBLasLgj84RqM8fgzMYdx3HCZYjP48JfvNDDuFx9TT",
  "key15": "3rxn3MMJygWfk5sqXRLXBWncAcCgnKkDfMNearrErZJV8RtDv1TqQ5cgpqxRH3ftcFRc5yddHPEUsZ73KjLjFdjs",
  "key16": "4Mg8KQszNU6D6wxP8HdP13G7VWv3Bg1UqA4RMeX3sHVWtpy2yqMJPQ43iVqB4PSURiPFqUeDjS8Rwi63Hw3HwsWu",
  "key17": "225SGwxa9Na6WoMgAmY5ThgYWZSGLmv2nH7XSd8kryTm4DMTnV3naYsTZXcNwHy4sXVLPtempF1oeYoZmtrhpJ8N",
  "key18": "32Vq1xH9JdZDDS2L97GxzRK7PngTsrZAeu3iHZvUYzumDCPhPHJasqe11XgRCbWg8k7fgY2guq2dVWPgZGbSWU3Y",
  "key19": "2kpbRERna5XALaTnPaZHQFGkE8TF1tUYoY9PwKzFxXXCVyGeyPJFZGWhnL1m44eLY8F1FBcVDiCouVNKT6kULSos",
  "key20": "2NwX1mMT4gg5ioz4mm1Lc5t3WD4DBhwabM72rtwSafsAtjVM4NVKuzjJWsk6Aa518Dqhh2Svk5gPVTfQPNdHvs95",
  "key21": "26S5Dd4DiR1oJw2Z3U1bqFjFSqhDjoJXBRt4dgVLmQBro9VoztDYbbhfcRgTP4Sc94b9qEMJCuvhunkbTbdLUbgC",
  "key22": "2n1GXLVmhMTNrCnGtECzMbDeJC5ejnCb71ENPsYdQF8GNwhMGDiHD88eRV7T4QTP9nQc5K8qNqQPBJiFCWjNH4G4",
  "key23": "48xgsYjszsBMwiZx1DD5QHzTeVdUx5Add9C28xDUUG41ZoYNCK6GJCQCoZr6BL8Z4zj2DuB6TpGUCrZiSa2omJrd",
  "key24": "57d9HYRDSYFeRV4zuim743eUJijKHu6HGXxSKNoFD9JM9pewi8aMw7JvCYrpKaehLDp5yzur23vZum2q5wTyaLb9"
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
