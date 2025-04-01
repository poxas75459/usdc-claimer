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
    "4ErHk8ba1JgvMqcZ5Tix4dPgrCXoBr86HZnpe91tYJSncr9JZzExkttvnwwKd5dgrPjTTEdJzEeGwMTUEK3EKx1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EczXDx8ydi6jqsEW4izXg7ESTEUroogQiaMxmcHBBt4jEQ7VecGs3hq7EtxVydrf1Hj4TXR3pGpD4VmNVNG4bv9",
  "key1": "5HQ5ThnXaDodixJo98brBCWNojJiFPhgP7kUXg26gy2SxktPm9dgBDYVTL1DDdPMiwrkTeJwTnbhqAohB3ta3Dvj",
  "key2": "258E7eBYmkyy1tgXUp2c4oGHRgnozLuNizw8cCG9saHDxfVEVKdbsvFad6TW3zbH7c2M93698kdATXMH6JAszoPu",
  "key3": "3cotZK5SvTSALRYFMnzw4EKvBuGZwRaDbDjzjRRGkgKzwMx94nxXPzN7Tq5zZKVcBND3Wacjman5aR41LapQXrZn",
  "key4": "5NibZgKTLWTkoqKN1Z3b9uG8hdvJoe5zbmFWBLBNRnJzdc3efvZBpXf44Mn9RbTkt821EF8CkHAQckHfiu6iWkSS",
  "key5": "3jmuewLP6SY87ogpPUFTVDA1HHfUvACGkU6m1jjBKU1E3HAx4jax67TXtNCWZWLQLoubn4EKCjpsRiotMK3NgZDj",
  "key6": "3pXK4ySKFm7QzmW3TCshfiUyhBs397FmpcMtqAXrec7VPmDZXchrjSrErVJxtrJfJB9UG62EXckV1tbYVq1mPSdQ",
  "key7": "2Giwgy32YomLkdbxtXJuYRkt54mM9ajDVY2QNfwqQ1PvnXo79N77bzs4XTJyaTXnLu6Ejqf6QEJSswWVkMUXoCCQ",
  "key8": "3SKmUNUtcRwRJEWHkQ5pwaML8niNAcmkSjQUmxc3xTC8jRuoQQjzbj15aEiukYfGt2LDfzz2gYE4MvcZQQoEtto8",
  "key9": "5kNT3T2b6djPtHNecmi3D6jh7eYs1sVL6chnTk2MWgWpz9g54Xg7eAP2Y2tjqUfB9bYksVLEWvR9tnk15zk6ZLq2",
  "key10": "2tJEL5feuADtJoKMRN7HLWLjgrc9bFrRb4gj8qL5hpbWFCCD72vSRf79DNv5rEPJGRwffDvQvosVRZ6eqxaEmjLc",
  "key11": "3hx3wRCLE9ujT9ttyqNRFHtzTztK2zbz36HPGDeVsEP5GSY9TwPHxV6VoYQfgx3a8S5d5tsf8DbsbFpSWJsf1BxU",
  "key12": "2X5rh5E83Hm2PRnhwgdbPAbeouLmcLMwApR7D7iZUxW2cVo8gdYowdCh9kXUXyJ2SS3ZHjveGAFjWQ7G9MAbRns9",
  "key13": "3DGFfcYvSsF1EYYHQ6NCrPiY7dPhc3wmb4nm1tBquhsupWYnJWUMuvJmoshZRTdwPHBMas7Sv1UBz83oRqx3voE4",
  "key14": "398WFinJYCKdomPFjghfM63Vyu3mpieNrG2QMjGfr1DwcAq3gaECyS1iJyHkk1EtiLJPsQGSA1U5tXSy6ni5SVMw",
  "key15": "53Nrxr1WhD7x6S2C1jYnXXeC5V3tKNCQfHiDup7YwJv9cMAvJANcrdKvwTFvKVTfjfYFqZupVncBBTWBdCy7d172",
  "key16": "2F8YJfFk4iDpUD5MY1h7jRRgHxpzARJJw4jCq6HfhZLGXi8djB8wBJL6nigovW2fUUEHx7fwAiAhwWxRAUY2urD6",
  "key17": "2yrBTJCLw2hVGSx2J4u2r74TZr78q9o4zxiyyRooukZGHv22Kd3id7xvbmtCr5gVETDMYJw93djzkS12VBLQhNKx",
  "key18": "3buAWke6deWfdDsQF311hm2JkNfg7XpafMGhLwvDf3FEsVZK19QzUkc7aJEHbxjhBo49fqCEQN5z253vunT8Gn2x",
  "key19": "s51tAUHtZnTwvqGHwV7Hg2hWZxCx2LPUKHpMDxFipfnp3Sayqwk6oZMrpwPSLcfuKtLWFshXxu5nMQNv27gZjd6",
  "key20": "3GEwbo9woivABXdTxZmHv8vw8fmtkJdGELeYvLEZDC1gLLqCwcP1PNq45XEhVh2zP2JcFLTr9ERxs8PMmcvXifzQ",
  "key21": "3PQiYc7koY7Lm2dTrLsWNQ7zmkbJ8E1Mkv1GtvohHpuBEA7r4iAixwVBSrwn7VioatpqhdTBaSf2p6khMAHnMzuc",
  "key22": "4MCcAQnnJwoGjvU3scjZWzWYho2t24ps4BAjBwo6i2d3esJ2VSwmbX8jE4tu3LvV3nUmigRz3nXatV4RwAMvy1SC",
  "key23": "WXhVwUAzEGdLb1D7X6dfR5Fr2rWNWLgv6C44itRLBc3WyWqEYTvQUMiysVgA3RrDjmEE7sjbiCnUtnDx9K7JvbB",
  "key24": "5D5hFisD49oTNFk1tmNYTFcwrKdt9kqaa6AUScTH9kuZpgTCY44N64E3CHeJNwaAFy4gxk4MNNQAvZaMLXRA6aes",
  "key25": "5v3MECZYAjsZ3Un2Pkaq8NSuJnPMMD32NrAKGkTKGrTovBc6wuuxvR5rMHsrL9eJ1WwLDLzVAiNXHoSjyaY2LDx6",
  "key26": "39ziDQe273W9rsxYk8Tep3efpQkwjARrAJeCwMPw5LvN7FXKJN1RgWDgkyVRm83o2ugHi5ZKXrEtaHufbB7LJ14W"
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
