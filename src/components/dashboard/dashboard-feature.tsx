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
    "btwXwfVoNZCR4K5c5msC8Wwmg3rMa1Ahvorh6rCJNtyN2C8eQcUwV3SqJSmkkXk8uxDpUY3onhJYz9Vwt2HFgWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5THYrVKwtrAVU5C7e3Nix1h7dkRJZa35NBesJJGnku4AJbXnptC3sgKDUfGH9GKmAKmaKqW6BTraW2EM67n8ReGH",
  "key1": "3k1NtBkz8MHZP5SFYtr3VDZ6AFqywNFJC9E7pbG8QmVnp6MeZkqcjCVMWkEzG9Cw2BAUUZ6Y7Q48dDHABuQDgheu",
  "key2": "4yB3kiNGyp8o3WTEyC9j2a4jKWjPxrHYPiG9vkL7nhps7q4TRRKib9u3KCcERUN3JAJfwW33bgWszyETAo5nvGsC",
  "key3": "2swpzGbtSARShjZt8Q64bzEpkxGiCvJTLWYp8bzu2TffLaAVvpTM28tP3qwnQgdb5eP4b57Kw7mpnb1bAonUqdeD",
  "key4": "2PTCkMua51xqQ7YB5xnJmzqZuFRFUPDoGrGa3se5RCebJUFr8yzLWr5o1NB4FDeS7QkCa9xM3Cc1ARg6xo3W44rc",
  "key5": "4HKDgBXiGng166rB7qkG4PxURoRAuHF4icttm8uitY9gngxxqaeM6G5vyzFC62pFXHUL9uKVJQkqe3g3YdtUFRS3",
  "key6": "4BNMDMcQFGeT5UaGKRTaunaKz5F6aMvuu1D7be3dzfiFmwMhJu2qY6htBqj7pA5U4yEUwLgRPa5JVHP9xADohtY2",
  "key7": "4iF5bAxbeaiQRzaSE6cCoh9BoiGprTA9bTUDwGYSCXYiK95kYbcoYMApjiARVL1gxdnMZ2HEdJFTbW4vpcj379PD",
  "key8": "HnnxW1dAud7g7jyevgNqwG6KhsCKpQJjv2bPX7JpcmbJKTeZdEBQKGPhxadzfDqrBGbySQFDkUH96j1dy94F8zX",
  "key9": "3ismSZJLbKuFZGmrrZ6fXE2UzF2tKcT1QgtyDE6AafWmDxMQybQMoYWQwKVZe6eB7HPwmb3EaZgwQuhWrEnVdsjL",
  "key10": "2hrsMpKvdL4XiueLdY9z1UxqaXZbbYPXtYBF4nJmJEZP1Vayq2emUe1rH9NMb3h1WEbP3v1MxdZqjTiqjmGbDn5x",
  "key11": "fM1Cp8S1QuVbbHr81k2qTWoah2Eg8qbmV4zZzTDweXScg2rx3XnWoSSd7aPFG4fxL1VxPRTudXvcE68cWSvpBTT",
  "key12": "7G1eCQuBQxWVhsPpcMbxrzRt1TdJZvjPp2PYGgjKjdDQR3HUCeJ1Saj95AtP14gKGCxG9XkNUAs1M2D5M3GnaGa",
  "key13": "311gW932p8eHqAGMSdzDVwZ2dVLxLjoaEwD1Mdt73fUzRtWcHdgPk2aUk3xqwqXPUwrRstKbLASnkNAzXkzmfXXG",
  "key14": "3g8u9YqzEuHdaxCadCtjbYQMM4MMsKPjx1vHorGfVwgwfmZGdX19HnzW8Pp3cFwMFdMcTxiiiqKvR71MnuCAZW6t",
  "key15": "5YCJpGBkYTv5QwFH2GSVMUCEpp5qe8oFF3TW7N6BpghMMAJFisiUoU1UqYKsCyQbnGJ8Ko1WzeREamR1XYCjYVbi",
  "key16": "bDYFxLKzTdA8KEGJqNT5ZUgbNbSjWYNmgLPvkCmiLSq4YPYWRqt7YD3H8DXpBaQ6RkXneCCdySc9nkiTnj7ZEsP",
  "key17": "2FaQdRYq1PexAfnA1t79y1pmAGAyp67JvDZgs8c61HXGK46dnqs9zXBzFhnYKtKYqeT99qfF443FCFMnydn15RKt",
  "key18": "5XofXQda2S9ReyCxxDRLybaK72DprzzUh9QFjx2zCr7tLe5Uqy3jwaRkic6XXAb9TcdbrQfLKEC7Qi59j9h38j7t",
  "key19": "sUHEyLU2C9rUXjoLSzvrwcTnMpfgMQp5WNzS9oMcwBYqWcsT58xbN4tgS6DZNT3HrXz8dUuSET6ThYqkqiUBBdQ",
  "key20": "4StdYt6Z12vmYL2eV4uY5KGwdtev4viQjPKBsCBRRpiKyA2pbTTEF5VzC9AB5yWsEXCbquJLn4Uisu6X1yDFiV9g",
  "key21": "5tMUGLQw8ofRDv4tSLhDKpVfSySbJtfZNUPKt45cSkWBZPcwbLEpWV7vqzDTEsnSVaZSjGTWG3rMcaGryovrc1cs",
  "key22": "uHQksqZ6Ax1Ym5eVefq2SXyE7jdRWmUvYneXGAdqnL2V8uPWQAx1KD5tWSvcvStN4h18Eqxow3iaEyANtLTD9JS",
  "key23": "2tGXa2LprW7ThrDRZEQqsdNJiALRcAsBCakcjhcQ2REyxiPfBpaB1VCegxYDvwBEjCgAuK5cjgttsdP685b47pqC",
  "key24": "3YbNHja9ThcXLhNKdMSEDbThJZvBfu1KoBkxBgX3BRWAX4HR3Q62MvHX5HRz5S5ZDxcjk7qjJHH3iyudzXPnmqt3",
  "key25": "3LtBXxooPabuLZKJBSJpj1Fy5Kq8xQmzBGAr1sAEcdQLJo1SnHK47XofaiPDp8YXrCFUQhv2cWvz7oCpRjCb57AG",
  "key26": "2nvGsts2Xvncir4G9wUuoKpmnCBPCGroAthNr7vbrk1sZzKsouDPc9QtoppgLkVmAcwPPqkupNv3v6E8ugaDoev5",
  "key27": "5gwtyA57QuiTXSAibnAbWAWd8p8KiN5bgKypE7pY9CzvDh6fVQ9VWZEhoGymZSrZw9q5WNBV1xnmgBSwzFN5gyfb",
  "key28": "3AnjpYRwt1CeThPzsnVctxHvckFBcTiXDRq4ES5iwcWdUvr5tLGBGo9EjbHqdgS2pc2jHW2b1tq5oc4r3jPP3UhB",
  "key29": "3AwkUfJ35q1Wr8H314MQ8n12vU4MZWqoV3ifYHiVPZL6tgEpZ9rCZv3QAzvcB2Y9PhTqFFyxTEV7wL1LrojGwq7H",
  "key30": "3AjXe1ocQeKkVQR3t21HDdUcTjVRY1MUCq4p4GfqzTbbP6SQRXrxL7mfSrrfvQ1FSqxKE2BJoXKy7qvoENWvpVpT",
  "key31": "2TJLNL3k1muH4qSsW31JuWGs8cGvTMksUAtT5CiDbjuRWVEC5oWzUkJB35wGt4rttm9phJQZgrnyXagmaiXQt4RP",
  "key32": "b6BLeapct8pEoPEJoaQqyFcrskDxh6QW9GcdLW7urm8Nd881ro9w7yx1fvA29Mn1gS2MdiXo2m8tUqDrek8oqCF",
  "key33": "3Kw2KqkWgv8ZDDHauH2k8L3XJtu6W9EpUypCdf8s7eUsuGZQ8sDUWNrerD4CK87ZuxGhBrUWuCP4WsoPizhCNkiD",
  "key34": "21qp3AkPZYomkCuxyTCzUXBSvhCGmM6ZUcPUBAgruw7LmXeRDsaAGMj4dsQs88uEoRZwJGd958A8vJU1xmLuCycH",
  "key35": "4afN4D1vLQjJyQ1hnBUS3XEa3WSERECZPUobBSrgdWrrKR2JHfiPAHHHBPUYswDVZHNgWBqaJvSU1RXjdMqqTPaD"
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
