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
    "5b7o1EfSm3g7eYdzEKXg4n4TCykuVLXvqJEb16BpJzmsPdFSrehcUbxNdRU3Z4CwEehrChTnBC2cyLpdS2eWLzV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TCXKo7vwmrjjVpnKGkCwfFsjSE6Wp7nMo8jJBGqKviZqtoSybn5sNvroZuEqnZewWHuinydhR6j9nnRV3V14NnD",
  "key1": "kQXSARvS6XpkLdmyRE9wr2B3c1nDiXTvLsRBdsJhPJafQB5bYk39G7kpoEkvZ1ncnsMiCLzp6tbtcoEQKeCcFBM",
  "key2": "4B5E4ihdMsniS5d8DbDZjQAsw8s9UWzcrxR9FztdUn12PgpjDT48WkgyDYgP6aDRSsFNYXxEXmfsia6mRKTZ61RY",
  "key3": "3JfAXx4dXBvAxKDkizdTzT6iNvuhx1zR81aiBDWN5zJyWYQ749rDkxBDBzGjSeQcaiTorRQ4SNpTSLWu5w2hUeR9",
  "key4": "2BZSy1u4p8QPFQw7tWxF9CM7igP35qQp48hfc2jXJ6ehuCHecgHXGvMrFh7vXMePoqSrgN7kwxBxhw6sskXrNNVA",
  "key5": "3yZb1zooGFSQzyCyRqqTR17g7z3AijG3sWQg6A51BKW57kft6eLJkviidbMdTy1SbnVFsvUEUWLHXVWBUnXF8Bm8",
  "key6": "2HZDYMC1gYi3KFSyjFHtDfUPsLj18uiHMp5BExLyHRxqPW9w1fGxjMjjS8gWZJQhkVXfF8vJCZZt5taYhB2fzonq",
  "key7": "3aAoiR7gGZwtNZ486AQhLo2BCieyDyAZP5WVkAJuLAHQkqbzTqAub1tL183zJAi1QcfYxjv9GVLoLanUSBmkccht",
  "key8": "ct9X5YDzQVfQSLgA6uiixJ5bSXUgSgBDztFs2NWNvLR4KWNHCE6AWNdDhSuTpd9yDSAYCnK44rzKT6NqWBAt9aY",
  "key9": "4RsvytYnn3nRihsyF52tJq1SfUGzL4qqjDFktHY2N3PMpHSTrZZDKpmiPDbCoVD8iEepFuqMqVcSxuRk4xmQEcFg",
  "key10": "3PuaZvzFU1tDSCom46Z6EtL42sx1omzfzQbH296ZnbmzFVHbFrWafmBgAdAEZ3vmc88BLDtGRRzc4FaYyit5WqFG",
  "key11": "5n5drV45rrEsh2emsxjuu9zcekEKjh2yjQYK5YLtJ1AfQMms56ti8riWtdGyQTepnKZP6RrTefvnE4qKRKBPSSqr",
  "key12": "31KhpGdTrN4UKTPwNeeYP3iLJhAcL7E7aNzQ4yiJ6zvBLQQL5tt9zWa4Nh8KeGtdh75oPXDrH48ajeUiyWqpZkTN",
  "key13": "3EX8pqZ5So46GfScze3SPb916RC2Z1cLtV9bYPXh8DSPEmEcxMnrdWEoaDSDufZXE3QGg49KSwUQdX3c5QT5ig8Y",
  "key14": "5mNe1t8hBBXqN3wbMdZPCeRkWjMCbMeNWH4qKyWsJpm8x37kBJcsDZwZXauA8fpNqY29jLhzKYgPAwmiXRFBXt37",
  "key15": "5aDD5QE2mir8ZdwJ2fEpeU6jeAsubrcztNgfSezx3q7YAqxhBfAurR2KLeqPXtyKfmJg3kWL6Kbykk7Qk7m2MqRf",
  "key16": "3DoTxbigbhKJgtwGBWSRd72aaRRsX8y8v2TzYCBAi3ssNZtkUWcvxSgVbGafHsf9oBLsJR5gBxjKMtbNtgWzYpzD",
  "key17": "2xEStRSEmfxghuewRXM3QQBfHazUVjUyMxSfD3dRFxrRgRa787etnzRUuZavzi74Vr5DXWQcuZQcPDP3ZqQ1vsf4",
  "key18": "3niVLPqBFKWu2YqE31MdQ4UQ1AKbSWVREVSPMQKxb4LA6L3xja1Q6YbjKxzTyiSw2vWg8CSw9SQhRYkzK4tzwYZP",
  "key19": "2Z5J3suyE6VGy4nZkjx974rBbVG3UUKgwYW5M9iAEuAGEDNdshHsmi7Qn4XPEuaREBxLszRhb8P6mct4L5aSMchY",
  "key20": "5xaBmZmEWRXwbstjwRtcnCJptWEuPnUo9PgyVEF9LtBBeL2AfunFyRomZXGaJ4ApLTP9z1qhSypXigFMhKQAstGm",
  "key21": "4gVkT7CwJUPuga15Eo4ECDu7PddYTfqc641NmdtS2EshMw8R415cQTdYQMUHG9dkstndpp8itsw3YXK13wfnAkiS",
  "key22": "vEUC2ScVxb45XqZYr7ZZD65aWwkd8QPt3ABtacfDm1cigRs9sE8okyoFbeh3og41c5JPnbo3NBLoAG71aYXbGan",
  "key23": "2neqRgZsjWVRafDQrcVQ5ddVZN598GuPMcZhY5GEMatiRQHuAX8SLXnn68YHEh4V3oP9s9bhfu3vzgMwvUPmsYxH",
  "key24": "3Kb7uwhB7U3LXwtN9yad1q2BjL7jyq3e9312qSA5JA6TG1PU4fDwGiqY9tgsGF9DfnYWjCjawe97RxtHq4Z67Lju",
  "key25": "54FcQFRFMpZGiYwaFe13e4WCnFRe8BRtoXXhowyTTg83t1fazZHZ4wnGtTtfqVEXyv7aoTrX8ZCUB7ivkx8UwnPv",
  "key26": "37TMrDApGkHJkv3GACStBiVqUEvbRKEPz1AqrTDsw8FZjrh7dSx4AmZsuDwAo7TSfGAMGJavi7LLUUgvUcCjj5t2",
  "key27": "VdYLGGg7BtvqW6q1Z3qESZe6uqRgajbwAdGSyQ4H23Jvt3V77dnHYbrbkscekxk9fnuCJWVuQKbcq9FA9v3VyyS",
  "key28": "3J2aT8XbUQg1TrbTXSAtoQMzCD3VCbvi9uaB8csAU3VXwkPm42MQj5BEhtL7LxUZR6wLL4c7eXmbrLs6uXdcNkYe",
  "key29": "3ro3mQNTYT6QZG2UA6FKnHQtPTRpw1xSpfZ7AEGASyWiExcYAhCZVFfvKT7Qx4DYLpvFcNGjuF8EPaYA7RuFJNH5"
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
