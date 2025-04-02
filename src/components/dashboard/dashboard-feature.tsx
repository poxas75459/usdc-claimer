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
    "3w89nQSoah8ohkgQpzSvxHXMPmSqtsrJ1Vu6krrMqAsbhKr7qNXBRW9bX7AbuAKRq98gd6DbSj9jnEbYhHE44HUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qa5BCgEuKFbNjXfXFruxbdjYmZ2fDxQmWMAK45CdqkLmvRoEBrXb7d4nF1HNzwt6WLcL3LfWT5KmjCBfW71Be8m",
  "key1": "3rZqmizWBZJbp6CJqsW14FWsQrU11MoxsXMjGuTuDGvZcPEY4NCPb2Fxvq5QSZoVPdMrQcbW35WKxgVMAxu4S9oa",
  "key2": "2RN6VcLpawGC8Tk4xaKWv2RVymDfQyZUHRr6iZCkGau62ZtVbULDX7oZWbJJ6coyodozZUM3GmUYvrVsencUsgPE",
  "key3": "3MztkBfkxiBSe6SAhV1MtZ84GfJBpWW5suTGHa16PEkPD2nEY2dEbw8LsmqCqrfokUbLCqx2SMKBWKRkHTqN2TWh",
  "key4": "2V4WKm3bLsZsc7rA3fdyetT71kdJtbq6zFBgHR5jdPuZe7oeG56rj94TEsG8GcpXnvXa2wmRmtzn6Qzoqd48JcM6",
  "key5": "3AP3ZzdwhQHrutYq1kX5y36Bt436XcvKeh4R2MmSai2pun7yUSt1BoyLCTkkJB6EC1fnrkACfDJugGLQqjPGjzj1",
  "key6": "SLywQWXX1uXHn9NAkQwF7jbcHjc3oT1nLAiFDAs25zMgndKnYZKSrrJkTsBizRoVLSNRLCnD5X966HY4d5WRgLp",
  "key7": "4ptE5orfCh8F4CmbHEntAKiY5uzHf6J5F1DfuerbkwWg4PCZPDTEbwXJWj2efmGE6geVuMAvTZknPYY2EsGMzrR5",
  "key8": "4wpBUR2YH9Kq4XmuM1grpnero1k8MFdCDzoHoY21C5Bq255a62NyExPgUKWR5kzU9GGBEn7AwecAaK4CUsQkVcm2",
  "key9": "3Uw1myALziRW54MENfiCh58F9AiQSZsmWGyS1CSKLjanfmcCuzvsnMuCtvfDJaxZ7xGJ8RPeNf1U7uEmqQ8r6D56",
  "key10": "EAYm1rZSQHG9VBDBHCw851mBvdr52tfRMC4iRvM4WRonv6h8fmJnVCySpUaibV33YCZQcRfzg41yc2zZyFtomRY",
  "key11": "TZHvQTmqYKDus35Q21ip8TyjZ2GMx7KiXsRx1YT954n6QQWtcFxXmG5Aj8r189p2iQqRC3imfUTwzMtmSNjYoib",
  "key12": "41n3rRThRjQUavVz7tHWVjcg7ZykUixKqJ3Vee1WjhFMPK5p5X3igJibftD1fqWfWTNZNDSGgQGqeKrgKtMLymXD",
  "key13": "62ew3nFgEQzNeeiYGtyVKoyhxHjqsjMV3NNPKMmq1Ddq2ABYZ86VUhJuNdjweCKUNnPYXSBkauMFzraKcNFSrt3C",
  "key14": "5FNuDYq1BuF3vFoNJYNqCEkYCCzEva1sPXphYLYWwfujzoaWJCHX4usSGRdHBKyJhbyuTgUwjHuXHM2HKRf6YNAe",
  "key15": "3xwLEy6DEyEn1tQAvLvchyjWNRH5WZrhKMyyMH9dqWdZrrBfjHQYqrVx5ym982zVXbG4amiUGsWxK3x4vjYgUgbu",
  "key16": "2SFkXXFuPrQLYQcbQXjKH8tXfU299VtwnXiBR1WpWJoSmStHuz2ALEZEbj6WgR9MsC5deyZskftQ4d4wqwR8sSDY",
  "key17": "448G4Ftv9iygMt3ZpU5W6qTgGWMV1DQWHggQpqvD8PVTKP4zE1KfX8GxJUuhLiFT3s8DwY5LNaKSrAFkwNpDmYiY",
  "key18": "2MEdHNNo3uG4Q41bvoDnncuW6hjGwdHZBmVSXGmq1hzN3reEDGJygaCvTXvKPtWv3RqSZ8aNV3xyWfgEXmuSpLcN",
  "key19": "5x3kYxPmpecKVe93ViC5LjqQfmGrAauPjct5eMWxn6vLtiZPtnq4afM6Bd6EwpptJhweJU71vkS7e9wysAdA3Hib",
  "key20": "DsdTGPjvzu7Cu3YcgaYtzQArrRWkhUd5tGiGZUSb9AVFips6QsTAJQ3J3JoYvqVd9P5uda4Th7LdkgdWvwUmSVP",
  "key21": "3YhTYq85bCzX2p6yWXTQvXA5pZqPQW9o9iV2HGi5spiwH5ktJne8PZHYcycNsAyuFyC1ifcmUSoq4CupSYU7q6jQ",
  "key22": "EAM2k1tZ2Mqj1yLGSUT7H6pUA1qR5NcN3pudTjMeB3HCeoH62YSpgADnhkAVfAYbsDS6MpVbnDHHStDg6EhZxXa",
  "key23": "4W4QdoVvce5VJ8k2wHEyp3ntB4qfkzgPrzt15tDzox2CevSL34cPz3BLogjLN7aBbpn9yM4299w6NcNkEfbWsYbq",
  "key24": "4ESpjtbpxmmaGzLFsvaPmamLc2axBfqSxJDSFTM5sQ7xki41E1eyxGwjZnuQinFu2uoKL9abeCaC1J8aXCRZreRc",
  "key25": "24GqH7BDZpGbPvGP6ego7oM8FxhNxCXSLJBk8kuTyRV1N5r8t8DvkdkRrneyspCVgc6a9M6stfCYUq8xUapWw3Nq",
  "key26": "4Wjw9Rdj8KVqudvHtr1BqjaXe12bkLbZRiaPS2yMxQ1aHiUWjMhdkmrQPyGnYum8SQ8ve4ZkHpv9GTC6YK7A6QLc",
  "key27": "33Vjxp3kJtxqnvH4YxyuPZMamcBnEspPAzZang6URCfJHKG4H82BM7qgPNFLEcnikDzb8RycuMN117SJaGDhPHg1",
  "key28": "4YTnRPShVz4woe9cv22CyZR8wC692wkspmAQNSak5rcFcVF8UqP2bvktkyv5VUPPFrrrf3q1EmEKoSjE3hu6Q8FC",
  "key29": "3WM54KQUZdVPGMFvTwxKY6Ju3BK9RMsS5Uux39h8xuJ88jMd6B9zmAPBcY6NtrnEhZENgKfTSHEUCiQGHShdawVk",
  "key30": "2GMfgRirk4Viymho7bzGHbu84NujwbeoSgFGmUxQpgwpsN5mY41YJ3JLotfWZoX9PZEpdApVzYEQGiJ6rBi9dU5u",
  "key31": "21RzAP9pNq3z2wkggmF6dVnuqFohsn4cFGpFwdxmjLPpGYwrABqVbEyoqx2nxvYNtJ6dQaJM1r6rCqyj15pdKdDW",
  "key32": "1NXjdXJLMRiDYP71ZHVpgJviQfmwxf2ayCSWiEXzY48xmUSr2nV4PtNWE2WVAsTMW3BoT3yMmDT5NGKDuzADXgP",
  "key33": "45j55JrhVZ34JdYKKYqbVyGkMTuP8iuXKQoGHhe8JA676N4Cip9LTT9SA4MGzgpe3dJxYoEdSopbZ2aWY6D497sz",
  "key34": "2GN3KwewZH2dAK7UMsjo3c9pmrChzRe9zzE3FD5D2Tc2kPrBkJsBftRy7QE6j48PqXFbH9J1rPiEJgCWcwf6h6YQ"
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
