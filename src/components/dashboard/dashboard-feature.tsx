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
    "2yDxYokdYe8yvdjULqCpH2DC1Ya4GrVDtgVbUBiHvaE6zmxURkHFqi9vkw2eGVRec1R9DV9jjMg9EGF3qJHyGH4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fTh17tkoBAtTVMyHb5PJfBnRbkd2jUfx2mwrjMDaXxUSZx6vGWyxQqpUUzs7sdwW4Liear79XfMUoygsoupFAe4",
  "key1": "2AxzDaSQYbrC5NYc5QKbS9PAUETL5tzcFoWB63kNaoFeDtKKE4Z54EfrRmS3UQh7bzUqDa5YHmNjNYsvbye5qvnU",
  "key2": "2vH49mqtwhBYQ5Ltz6yKUVpmjSqjvtpNCKK9w5zQck6f6GUJyFx6mGG9xacJLJrDNFVtv4EdLeSVYr4WnFEqTyto",
  "key3": "5Yqecjw2VRKvu7N61nVpPNGHrtubbTFXAoReHEQmMMqg8dBgGfccoGR8DPebDbWCDak7gaoBxW92pRuGsxC1ydJf",
  "key4": "5uTFYiTSBsZ2vYRf2cRGeuofZHQvTESGEHGkpwTexLsneshKh7Jj3GozhFiJcoCQdwxRqTVpxJ8vPrKdkoYkEBhU",
  "key5": "4jEHJ7zHSuqjaMv7qKS5gfMSWLADckFPMHtgs6HFNKwAxgxzRVPkN8aE726WcVXMjDUcPpYFfTvtWy9ZdGFTLh2y",
  "key6": "5f1JmvFmosMFe8wjbahc6Br6rSP7cNGTUd44s2PmaEXDwPdgey4xGPKNaW7UYMsCKbMGN2vi1D2uq8g5sAAJEJVs",
  "key7": "38eu7aDEahaYiB98mRmo1CECvcw8D7mUkFJo8PxToyuRZB3TGJXX8v8JwSeHiBdDzomK4E7eiLvoLxYEkmNMUjPi",
  "key8": "5rEtbEYCHaagKC81ipoZNtKbacjSb594kE1EYQyVnZ29eZQdP34AAkzgEK9c8WhUYT8jptfGaCMNcHh4ApKqZeUM",
  "key9": "2B6gWpK36R4qUuR9v3G4rEE9FCtEbEJXmFHWhEvveHuos27fmCiiek2DoRadtVcC8HaBqyHRYRquAEpPjebmvfzb",
  "key10": "4pFTXg5oiHuNX5a71tMhsa44EdiLAjKcti99Tsff4rB8P4eWJNmoAVdjUSMjRw767eT4c7dFqfna9t5g92iVpNwQ",
  "key11": "A22YaGHyJsr19GAiMGgQBHCv8zcVZFwXymy2wxgzFxEzWTftHpkQh5Gngz2vFwB9ZJLM7amdtohM786vUZZQjdN",
  "key12": "2wTvoKxFnLHdzBAPVB4n8dXS6JxqULyDH9TSCphmLxSfJiPt43LN4fvFR7y4PRhUPFxw72KhjPbj84WcSPwdA1nj",
  "key13": "4H9kApivUV7EGaYKHYVXwL7QTuSU74qusGSf6Mv19rKpDnjihWDTpzikfwMX1vZ9FPfqpF2dh6iMWoPrqBVRQYGw",
  "key14": "3m1Bb1rUsxDUcEPAWUwX2QmvVRKA4GmaY7CRTViRtBbK23VqqerHncAY4KgaoE31RVLmBpQKqsJc8H6jhdt43vrx",
  "key15": "gZojH7Zfx65rAsuzB4mNWni3rNJca25go16UnEaR6iAtU7HWTooXJ6C2avEtWU1m9rkNCakE2SmBZmpADniPYSu",
  "key16": "4MNKi69F2JfwBDm3e5DXortfnR7AiG2j9G9ehGDziGh2NrYNnGzZfmKBv1KTT5gBDyrHQ1UWYy26uEgigM52W9xz",
  "key17": "yLvVLM1YbP3VwaXb2QfPrZFrj6Q3ehTv5oudxC4jvcxdiLTdfiU1Bjqj7AEUEt2h5oGxXroTQVeku5gH7eAynAR",
  "key18": "4y5JwCh4Bim1SzWphbFEX5EMdpgX2vxqxujSNBvHdSkRZJgHPYjUhFgXaKC2dPK3z3Hp5UpKkyBkUexRottUVoh5",
  "key19": "yEpaFWxUCVg8iC3J3cfu9vfrfdGWn8dTxR89TK62jP1k3Aox3ae43NNLfbYeLfkx8GiAnJMxcXtPcHuG9KJcXsR",
  "key20": "2Dq3kRJrAm6vdfJqjrrWyivS6GKaknsY1YgxB8HUJqLCJqkZZNprX1o2QwsZ6HvqzVThAvr6jH6vvUZKgLSs1Hsd",
  "key21": "3becTQ8ULqFtTVMBhCUBkj9tWwFFwsSc9SBKMVtasCwri8CzJ6uiTN1jD2QZTwSDRamTLbrEAFMNmzvJrrfjbJqq",
  "key22": "58ZRDvcMfoqRJXpZkHQkcqRKpgwD6tamAGsTLGg7bUUuSP17baQ5jiZQurzQJFLnV6nEzuho97N32FUDsfi7QEs3",
  "key23": "52Q4XsRYohGd7KUdGpp4qCPAB4i167ncGn2eQZ75wnGMhT7Q8eff8jZhkQcMioQqKfFRyGg97oY7FgAykaYcypqG",
  "key24": "5zuZjK9uJmZuhTZSXtpmRvnhxSZjisbVnWz4JcCa2jWsa581MMYhsDuswEoB1AypSKgvuLcNNFjrKiCVg9mvEGCq",
  "key25": "4D5oZAwMrAeQt9MGoCbPEK4rrKcPCF9Cx7vn9AdpV7MkmTzRX8XSCR2orNNTCtsmBvEdZT1L9F9GXKzB3fRiTHHN",
  "key26": "34HNGX7XYz4qbHvifjGMZHiyNDEpDYE5sQdqCVyMkr4iCZh3fofSmotvJucabZBAfVhve5VUSkADCYvWUuqT5fbQ",
  "key27": "5a9oEc5VVB1wcT5GR9WY6pAVnm6sfbhWZSickHpmd7u8qykAQ5yA71STJ4Fc3rHpK1Gd6F74fBPZ4KBXXwQCP544",
  "key28": "65GMBACyH9vKWjhc6xjiANLZw4W9NQyFoTBFVE5hzd4yw7aDq2E9wRwVzLj8HXpT35kKGZvKJfUqggTDYWWYjaPG",
  "key29": "TqYEdQiRyptnopctp5sSf6DUzquXrb25AwRFWRcw1ZZCKu8MseeGsAhUenkvydpMziUzqpYY3NjNyHvpDmXnZv2",
  "key30": "4Wvfeb7Eoc3u1ZeaKPLdZrUeEX8AJ8jpNAUc6WKKHoHZvnXJWPSfRwR6Ff6UqSLMHYiNAXqsvsYBM5T4EobR4TCw",
  "key31": "3dU61EkGmZcYHAFT5ehpeAx86SRq4np2JjfXX5eUmXgGm7GkDQCH4ZrvtkUArxHz9qE16TcvemFFeNufdBZvoswM",
  "key32": "3hVBV11yZbzXVJi97aRs2Kx8TdRqrJyF6YWSvg3SzJUkjsiEn7fdmXt3xXiHYuCCJ9HMoxCnZ2T4JFUAqWTVrjx1",
  "key33": "2cnmxXsjQBVH8GTgfZb9fTgDBqoFNsUwqQakQhooiTajf5hAP6zzG3cMAEdgqhh5FrKKcChGomUo3CFPWYXirwJ1",
  "key34": "4UFoYZEAyu6Bnv4RmP2wCwVqfSN4E3UfCZJ1U34XfQqmZPtYRQ9oHcHMtxj367p7urnpeNXwPEat84BEufaAffR5",
  "key35": "5ETn4BrAKngX7DwXAudoPyEi1PFjUJFYNo1JNC51PiwJHJXBwqkxCT4Q9ZBhbPyB2Jk42aFZNz1zc54MTFM2TGB5"
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
