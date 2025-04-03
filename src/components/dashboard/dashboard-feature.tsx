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
    "4esm7McVTWfxbS4HjEJyea3ixM3oMQRgiqppvjCUh1pJ1pWmyaqhRUZAbUMzge82nSeSfA9WberBzsbSbRrhz4QS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NDcQMkR2w33naWaGdeF3rHoGM8KHQyMQoT3t94ZpavCFGwosh3wmD6myoGxQDLQB9MWpsPCxA3Zif2X3SiwJeQK",
  "key1": "2h8eiNLYd4Pm4VdiRcBvyykwbKZq67QmXhUW3HL5CUwnwQWvHW3iqArLrDJnMdffZR8FVXVxPWtkEqfuJC4gT3Xv",
  "key2": "m4BHSMn57tzKdXi7G9EoZYcH8tNPEugufrLkvyBUd3JVF9Lmy6QhP9K79QNPq3QDEcLpKTbCdJnNDgoczPLvW8Z",
  "key3": "3oRwX5HBRW1X2gHGaToNayNv7T93HDpNTjayCfsJowCgvuMbG672NgAXXqs1QDURNqW9wmku2JpHKPGNJuBBC4xT",
  "key4": "JBBEVQP8kqQZmguUJ5EyqqZyCLNuxz7Q44QtF3SNgcwEjH87FxHZMFxoiFMpunM1cxUnXJRcCVWiDus3wJ6PwK9",
  "key5": "67CGWJnPsXoihGEXv5hLm3L3criWC7kf9HRZSp96NAivXytk94BUQGh49F9Kq4yVYcgcmb82VwNozuKVfhFTQwNB",
  "key6": "5kG2gpZ8PbfaD1DyG29aMefA1U8g1b2eSqJpgmjiQhgPM1Fm9C9ieKn5PXozpS7sEsibJhGE43SwkBp24hgEpmH8",
  "key7": "54EBkX88zmDZfUcQNWSVEbfSz4NMiVNfCY3F1rTZ46Ts2YCnyEKHspR46GYqtg1kVAwCCyF29XVWuWrYsGTuww9W",
  "key8": "3EkCSS2br3LHg526Wu6aMjYbGmZcPG7t3gcfPNUxuacFVuQpqFHDDB6AFU35ANV48mAaHz8XkNqNSwrhPfVLbqAZ",
  "key9": "2xw93PwcAd77cHsCjmtXEfNPQ3o81MXeVsMW2qaxXMHBxBA4waVsXsGvjmUSysAYHBeyaWRnLsj7jjiH66K4ENsk",
  "key10": "4DEVT2p989aRSpHWGnHar8mhsbKsi2dub5G9LpcWwzsMHMPuDwSbERo3JApzZP2ZET45VRag71yyMcjxhJG6XDAv",
  "key11": "oHoEP31oaptbASmmaBUWWpsxgvSgxtZFXTMafpqjdB8WZuREp6AnxU5rTi41mwu2Wask5fvnt9TpZWA9AZtMzqm",
  "key12": "2Fo4X2YR1pY8kGmxrYazYLi833Q8w7Mn6cuLcB9BLvieC7Egpueyq6wW69nPPtzP75G1fQVJUBq8gACFQxHsMUUJ",
  "key13": "2EJLPEVLXZi2gXHdjK7fGiD7CnfCufVzmw2Q4xtgRA1E2KDz9Kh4wUTpjM32AKfmPsAieCBYPsputwd4Hc4NHf2H",
  "key14": "3Lpxc1ZSuEQ6Y7nCCukve1B89zzm2GDwttYpwL7Rx86Y7feyzSreXseERo31q6Me9TdJ7gGV6h43ynEtCi8RJnhu",
  "key15": "2qBSNofyhYyR2qMZTvscPZW33gtq7dFxaEQFzVAoXTPFj7VN8pVpuCK5kLrDygXxuu7g3n98k7nCbjv9fFj96Fes",
  "key16": "5yHq8qh879a8XtiavkSfMgvQb8S9UVdQbcCiMhGkz8NaZvyoF8DmEcGrsngVWTpFRtprF2MA8TNwoUokH9YbUrBM",
  "key17": "574T8rkVMvBEZnPgi2oavuNh9mqmEmDAXJQhUn2ACuf414qsy1fHPt25qqppGVvThatv23ZPubnXJs9mxbSG7GZp",
  "key18": "4QNeWcN4snB6JHjZqsM5Kw79EzEGBaPDL5m67a6o9iJ1dLdUQtYHjDxsKsnrNoyS9qcqotAPiPPfSikE7LWNW8pK",
  "key19": "4grYFJxdi81LrV8V9KEzBj5vzNQQKr33zsfM3jfUGXPgVc7fVwHZ6TyW5q5SEdzfo6YB7mDfdxpRqn1EuE4Hw8KG",
  "key20": "2wu1ysoGwcmS1bzVd25pRnqKYc25uRGS46hfnFLiaAfqykc5L2bVi5jkvE58KqmRtNXCMGbd9URwYBnZ18SzYVew",
  "key21": "3YNucWeCDHqKw71GwmEZVJGtbSKqb7TgBkFTbygGpEdF4SCpvoHkATd5RR1u1iApUm4QFqkN8UN2cnpaUBz2tV1e",
  "key22": "3TvLKzausij4meommXZPcp2YizKj4wPBe6DbTjGn1y2jHTZ5pKo28RdtNibd2C3szXxV4p2KpsvimPxLQoBkEgv",
  "key23": "3kEsYmK4tSVpmsAt33DSx8eH7nEF2Vba3nkDdkw4fegy2dvbEsfCub79qrpi2DZGfXD8A4oDMgJKxyV52TVNF9xS",
  "key24": "YBHotQUqrvW2BhcGK9rvDjz8115BgLCsefgnUZcVMgP6SWGZkFs64ztXHz5dYHLDNZaRxiDzqH3C9jqm6j5zK22",
  "key25": "2grXywX1ojeUA6toz9d1Unx9UHoez83uSFpYHc42Tp1frojUSASXML2oTKurN3PTRy3NZYyMb4ZDYFaRgiYHAEmW",
  "key26": "3jXPgeza2NoPFNpLVeKC9qrzwMb28twDzigzmjtgq4Ci7H9Xhb9BW9VFqAkk2UCJ9KLj1ZrBE7wLtKdFvukj1sUY",
  "key27": "61ddvc1g1aDpjADyr5rye5SqSEi85Sr6wXAhDrpDn92nxJtiNeWjxmqxVJMRjtbnFxqUsfJ8PBkQpAAHSuy8eqRV",
  "key28": "5r6KwppDmArkqBNmkJt35WCSv5qEuQ5WPwcZoodZyTDm7WVZiyPFC5qi3L4chWpkTDPz4Z3wPpEK2EAJaVMTfxQ4",
  "key29": "43o3B5eQrDxfxidSXwShwu2FuQu73xzskZAWR2T8zSmaqevFe6XAYE582As6aPVgZMPZgJfze9udjvvDWRXG3q2Y"
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
