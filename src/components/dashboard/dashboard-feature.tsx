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
    "2ozzzUTmN5sMj2G3db7rkokj7Tnfxef2nvxLbtanrPRfC2wHh7Ash5hmUTuuduKM8CRcWn4xdFq7AKUnLbmpfKdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oCyaYXhdRhECDxBMF5xgA7ma5Bir29DLKaUeFKzLttAuGAJCgsMpNjuAErFvpShHgg6BnNrXoDxjLdoq95VAYRz",
  "key1": "2hRYTWa46ZcKeS4vU653ShtDxbf3sARynEoYR59DFpxemepaCrXzwopMgpQQGGEX7LNorMj2oAwo3G8pBmpdbSGV",
  "key2": "dxx1ycimUKHS65wP3cf5xv3YQkmjtRSn4HUpSEMumpHHuVWssguJf2bEYxAi9CPj2qUtwfMnkb8iam6pmyqJ9RL",
  "key3": "5ziUX9DhcTmRKvoSVtMMjX4kMFxJAkAY2mL5VHLwMcuUK9dMXB6D26JxKK7BUvpWNSDJHwibQW9G61Z5mTcVE8fn",
  "key4": "3nH9MCqo62UuGKUBWPjP1CPwbzwJnbFCKjzZ3N8ekdPff23zvnB9myPaEgHL5LY1fVKnUtUUvF1J47pLHR4SBEgd",
  "key5": "EMLnycaPdE9wq4izfbAczPV6LBzS8RpJf1QD8HMhGjtcxeehx2baCYfL5HNX3m7hakeiwKwVXSBqY4U4Bd3HEcc",
  "key6": "3NWL1937JQJuxaR7VshjkyhQLX3zEcQAvpvywxaFXTbAautdpgfedvP8Ahp1Kmk791N9kWWz8GZfNNSSqcLNUGgs",
  "key7": "62JrQvKDk5JgzPJPK7DbxM1iPgkvR3sSa4ACKcmmExTUf2WiohSPeAoPiRmcUDJe2ZvWmzK2VcSsbt2kWSbfQ6BB",
  "key8": "EMjrcA9y3hiLKqfM1o25cxv3q4oYCeak6Lc93PiEG61jHh7hEgnHwqMys2u9S9QRbgbAebhpZQxHh3SyijkDqjU",
  "key9": "2oCnSSSqJu8pMfzy1PkbaxMFYrffP2DkSKMDfTeXrBTcA5bnU5YJBLXuJcupLkGTQmLpb2f3TUsrEMcoQCSPd3Lr",
  "key10": "kiUTQh9MXQANStoPKFefodtRGkz3rU1EMamJXqhher5AKHr6faWjTv2ejUCUSvMpx8nQwneLBVzmdaZ3umSFMCr",
  "key11": "2HbUAMtvzFg29sADvt1wsFtqdcKBMnLjP548uypvW8X3Kg76sjw59QHGD7f1R7QbHzS7PJcwuGoiVSPjfNmfqDP",
  "key12": "5Ye7tqhWzRFiNreHVdGZBfdZYh25GjEstisBVmkD4PxgeVY3JL3VAhyoJSbrP99T6imC9ADm2Z4MNVbLoyQ3hmkJ",
  "key13": "gzHigN9GexAbxDx6V9fayfsAG1ZLzgBiKscUrt6nJhxobZ44hN2o1qnargsj98xWbLpqQtnRMgqhJxGxstGbxaR",
  "key14": "2D3sD23Yk2ZdUzujhovqBinDGqRtVXuTUHrU4Svjg1HxKAsEnadfz9cRuqm4QzQLjDA4zDiXcdZK4GcHFiUx4WVf",
  "key15": "4N3fVtGfxzqdBQyQqiH4cvo5wCKECSW2Gt891c6Lzmby1PttEXxvir4PqDoPVUahffbzDV5bfhJxmxjP26RTbH5V",
  "key16": "3u1VDLLP4tEZBY21DjuPyz1XH8ak6SuqBcRAZhy38N91eCyZXdAMUm3vU4pjiazmG1Lkqt5eYFYJRuWSDQwLnMTN",
  "key17": "5hsb5cVAh1h8jiua3uyM1MygsqFgx8F2yqDyXPP219aVeJSdsFWpCsDibz6P3KdAfaifkT2GJL6NZskr2LABMKiN",
  "key18": "2VMeeZnbUafp3iubtWQyAczv959KMppsS7A5cwaDhiK6TxgDFNaTXr4shCUq3cn3dEuU9H3d8Piu1o3EstxCWZiA",
  "key19": "4LK3kVQ8DLpnrhuB2yJzdWTE8q1BYsEogNFtZN1eWW3WXYizaEMNuKCTmcxXhPZUwNehLVuPhedKFSUB4t5VMUR9",
  "key20": "3iL5fAkoLZwse7QsLr1QukqZgn9XHFVT67x6G26WxyFhVyV3ArURFpZbn26tJQY67DFxNNshRBDG29bHvHVQSnur",
  "key21": "2CZuQWAD4rjNCmHLrnD789RuvFt5i9ia64LoFUuTay9ix2cmtcUzjGGW1SGuEeTi2pKR1GQ4GYyArYPPTFcsoYWj",
  "key22": "4koyXE1TphAUJtYs3ycPC7bxwaESGtU4mUU9ZxnRy53wXE9hRijDDtXWtXgjzJRRcnEjagczCRtQ9xxDbbczehK5",
  "key23": "3zDkdiQAf7GuxsJ3vXpjNHYxjofjGxCdkr9tymk88aBwdvKYgsNViNjoH9M24utbMX3GYzemnkopFezR5UsHbjws",
  "key24": "5Vc4jgq3nUhGBS8LPtjkE2x3MVpGigjNqcEhreaWa3excoafxA7C1D1JBoGtWToiR6UADA8QoQCoYu8cHVRoG6Da",
  "key25": "5dMz3nGgaZgxTWLsRxybn5MNivkLRmfYRyt5i9C7wD9vyWmzSR8XNRBSzUaykhfQg9j1GexKCp4rkf29epMrKpZh",
  "key26": "4Qx1YiZT3XXKvoB81hYJMYRCaiRFgNKXFkFpcW61KZYVS8ZkTED3CZnDmPQPbAgFeAddDjA4cx3GRGyJJoCAo1Ze",
  "key27": "3yzcVxxdQwUkfeeREvQcsWDrJuynDMSGv8Lf7ojWyh9NUT2HCTbexDkaadSY3MqsviwWCGPoZcnbS384fUTXiyNH",
  "key28": "3MoDeq8CTDBvhuosNR8tsF5eisVgvikmF1x1cc9fUbJNF5iKKUKiFTmZcK7PacZ2EdxbApKcD8rQKrCGHrfbcGto",
  "key29": "3wkfS4E7yruSW3ZztAZXWXCC4BbtLu55dSHjveBtEsQT2pPhMBZULDu9eARKzNq2Tp61y9hq4Un8X3iJ1wcAdieE",
  "key30": "3k1aH44poUSveppBgw1u1fVGHQHRGPAMtb57DKiUMjozifyHkcSwdUEGvvULZz3d54bupT8WQoWYSvM6ecYeqbUB",
  "key31": "3Av2sZFUVzVSR1K9pvNX78gHccaJA48xCFLhmSDGzzBqFYi1aSFQqaLqhYjtJTNE1tqpTvjugeUznwUWvyZxxVmQ",
  "key32": "4sAoNTVEJxUnPaSmTqhqqXK7MeRfsXPyvMMQaC1ZzywnsrCqTtFnUBX7Ep2u6DqGdywnUsF4741zuf2TWXZ7GCYC",
  "key33": "3i3oH4XpFJjT6vTHZKKnwAvYCkjhcTNwezGfQA7mM7aBwsFBWJGojZudx1BDEekiUfVwMMmiyDLs1vnxnjQR9n59",
  "key34": "2mY1X6JQYtJKdJQpJBr9eSLRiTP4NXsHvKu1b1eJZ8UehiY1zeQ6JuY5rNwBzga8j1P77YuREEi6QFJUjRZrP2Zr"
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
