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
    "46ZFsDF6yHa5cNRFEZvVQWDPZJu4KveVvF5W1DnPwUW3CExDJQxCei6Mc9TABFLhfaNbKrBMGt6BbPJReEZqN6g4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jje76fa2jPxysUCR1CDRZxaitKzFP7keGjqckDQsMKG3DnP77pr3rEghLEuNe92dkCyweuDHGvuBkcKoGwHT2AE",
  "key1": "31SzWj8cdNj8ZUXBrc5rLJMe4sTsChpgMWqtsZfMBkfk9C7XvrbXkXuT5JdodGmPCxtjBa5uyhPvMkoupd14ZSum",
  "key2": "4pKGje27sqY97ZLpPxbFbb2QTddCwLyRFncfc2aGeYRmVpz9M7shMnSN1bB5MLvuXzixr4gESxSsLNgqT7Ht7PMg",
  "key3": "2t9jZKErTZxWWGVqokr8CbedRUP6Q4WYYmDUVKLNrf62DsExkznuf7oz6crV4KbmtDDjZQDm3dutw1SXHjJj1Eoi",
  "key4": "4ZWbbwt8N8kBfBozA2azMowqJEyR1eB36dAgNqoA7cjA5YjV7QR6YAoHsdRL9LeeL86oXC1PiAbre4yt9RJvxN9q",
  "key5": "3e2hJ1qubK5DH4CV33EK3is4fDKRDsEbgNpHszoHecpBNBACGgYa8t1Vj5nvKZsVN16DzepmfesVaWxRLsHXgeL3",
  "key6": "5WLpa3DY34bYe5jy5hWNNyJ14m2SzV6AznMoAEYhUMrFTHrgaMV2GxSLrGxJm3Aks5xwUN5JsXe4RdbwRsV6f9WK",
  "key7": "Q7KFrp2t1NZ2S1w4iBWbNiDP6RXdT4UbUim15b8QQiaRySPko9KkNnmiVMJNPU6y1k4hT2Uz9MqCod2CMMusaLN",
  "key8": "sCCiYxGbMbevFR5G8CnQirUq9hDegaMU9Y1HQqtdKKkdEskPJXeLJoWM8uH12ooWQQAjuZ6PC2hbxYxDrdV52Eg",
  "key9": "5NSUGssQ3a9pbh964MyeYYKBFw5V3QVpsL1AEBPjaSfQnzAz2oV4FZmmCJVZGymMmxGDRXgJ41SmYPdYiNWHPwTE",
  "key10": "2jzG1zNTAvr4ADL57c8hZhWum4oErtYjuFVec52FjWMcYggEEdvvsRLbqYVxnZMPRb34xwPzRqNP5wbsFisR2W69",
  "key11": "2bB1uVYFDR2ZeLJ66mkrRAYeMD1fchS5P9urj2J79dLV7mN2pMTji9jLKpbijg2eaeXqyJbTa5YdYKnFYfnfKECj",
  "key12": "bNDebohPv8D2tHE9AbNmur28UkJuV4HKK8tHiU9Lfgh5LRZ55GA4RdaY14QJ1N91Sxwie8shGRhFWXVNWa4AX5N",
  "key13": "2jeiuiv4ARtWBcEaKGb9TQNqMJ3ZGZrPRg5MVegsSuucjTtBt1e99EeQZE1soYFK4C7EPY8raDY3Ei7U3NUfgofA",
  "key14": "CmmFQb97uRtSQykwATzaRH7fY9RZGd3ZhSELB1j47Pt3HUtvJdEPt91UrG2DDihmbmnj6PUeuYKgCwZCWHKNojS",
  "key15": "5snZYs3zWnykFqncTiF6yDAMD3M2tZ1ucop6wRo7jFUckZbyBjgA6aSFWg1s1E6UTZboefDzknwp5GEwrRsSDf91",
  "key16": "2hWvqmcKaCAJ5y5K97GYXA8eLWXDTCPTQ1EvLAdaX4W3nZiVwi6svxq7HJ1W7izLXVJVVU3ff7LBw6h2Qi57bLDi",
  "key17": "3CsjhSkcjQMAYr4SW3fGznNRQZaEj2wYQEFLWgVjJAKN6T2zUVZcNhwRdW5WsWJi9ENVEsf7gcWBQ6umKoewsmgg",
  "key18": "5tuwdv5sFoFodFUZoyqwNDxE29HnANdzAgwky3RaSwMrfBiqNW43oKUAQzWAQAXW8mtx4HKnPcDHmjJZ14HSBrz7",
  "key19": "2hnVYUaCxCVY8hVY6TQFtJCDy9JyR3oz9kKEDF5ESVfMmMZUe3kSUC5axwXU5MhCuc7KnsdhU7XRqeaeWXuGQAPP",
  "key20": "3G8tPU6tM3L7LAEd1p2k7ktWbjvEewW5Vw6m5bs2v9DDFcbvssWCCyS7NP4u1wiVnLazk1bSrQUqzozL94VWFkfn",
  "key21": "5V7j6Yk8EtRpjjrQ3TqbLeL76TFQieEjjfkk5wR8xDvto4Ges6pvqjj7nnt6WbaxJ5vVPaabQRijxAZ1mxNJRUd",
  "key22": "35CE4dttvEGqZQDsqBBC5drTYHmsv1S78KxqCiquq7VpFKp32sRNh23HuhmKhB6nPF7tzmtPTQNebNDQZJQEeeCY",
  "key23": "64FhbyrwxPaBodH5R47a19gUTHhFouyhmvRXLFvXakfnYYEckd2VAv9EukamJaK1T8GkPY9cZ6nd2Wzc4YZK6qVJ",
  "key24": "3Wn3Frv1TeMckKYsA3SiXF3qyLyoymAhb22TYJJBEdQYHkBoFZjrhtyuUmySUE8qZkh9YNnu26j35zjPqjLMWGSE",
  "key25": "4rxd8AXdazQpmjvTsGrgdZVNb2vjqJMPfV55iufkmm4PiLsMcG5658EF3bKT8AdYMHYtBnjd9cULGpEZG4ahPE1E",
  "key26": "4WaNnrprBh7hhuG45NNHt2BwD1tg7XD6812NjVSdu87RNQfcaY8xUvpkcfwGUxyHFEHUnFa6e8tYB7kM1DVj6RYQ",
  "key27": "4N8ZP9J8oQuhdXPejmvrzrv1VtyabyK1HqLzqUC7CZmRmHCC3hsLAEMrRdKMLKrm1YqKPw3cP2DoaHeyHWLZeHrx",
  "key28": "4jmSEMTfSaYTaydkakRLGVoBKZKBXcoLH39RNfQhVYiBQG8eEKUJykUpTQtLmQ2DS7FfbRUCBPSzUTCoeY2dTTbB",
  "key29": "EkZUSFBwUcCAMbHWL5E3wwES5gmdb4UpNfAfbQPG7PMWuBP8x8MG82tBXdN3pfsPps6aKmCkCvaGMVCYD8eqW7m",
  "key30": "3chmFhwGSPWHp3obV9YsyKTbhB395KNcCgbt4ik7UKjscWuRErvqe9QyehAzsGkLnt3AbG1547G4KNJDJgTWNeHU",
  "key31": "5ED2HTaTSun5G1s6ZLmV88Wm6XWsXAMTP74P5rzDSYJ1fo1QzbSg95amdvryUna67ksecmbCGhcb9kbrRgtDSPCQ",
  "key32": "4SwHqZh1Y25vGCtCiGohF1PzkyE2rK3x2MB7JDAuY3JGAVCSXBfcKF6SPMqHQ8crgBoNAEiHnu6ZaLGq5CHZfjub",
  "key33": "3TPfqvkh9Q1hkgNNxrDk42J6ihHvrqBSk8HoFtXMrkzGLSZY97NdRgoWBF4N8nQDh8PFsHDbuN2x3boSybfqgAXk",
  "key34": "4yBUKHwjEYhoZLVnaBGqa7Hw3JCTaLRLhu2BjmibT37DPCRhdCtJrQHEGDAd1hhzwtwm2KJcgVMCieq62a57sJNy",
  "key35": "4UqHjnkR7d9jEMwU2DyifeZfPimfLxZCcikDxNrc87JdhAQLLkYA2iMRszMVUpPNxyqhKbbU7ysSCCg8U2cB2KYF"
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
