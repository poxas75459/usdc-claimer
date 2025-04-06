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
    "3PupZs1GHtcgAbrfLiQWVYCBDLJcBQV7jcc6SNWnPoDWXDacQvsa4XG83FCorECSQujUY4hgK7vQAHqjU26RRcEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WVDb9qDqm1agoxxWmV9pZU2np4VwavB727h265Xz8ShKRVY1ywgbpwWpUtNB7KPmMkcjMCRyVhuoa2eEygYbp92",
  "key1": "4oZY88NZ1prv5yX4XR91jWF1Az8RCKRawC7SQHnJvGGrEo1V7X26WbjLs4DYZJMZdU9KeX81UizbMJB7vyGJ2f8J",
  "key2": "4UPTafh14s5BzuwLxX4fv5UomngDSvuaX7YFmv6AJEkcWHAY8BJu5LjGB5QxkYu5bxtG8NSHe5SCibmMrhpFWvyE",
  "key3": "5ZLsackQKr4QPPT13iQdZZNKHhAYpxpRWc6LgJTuBUeuuuE6ZEvFpYRG1MofnKnT51fYTt3TVTh6yuBpBkhvfAL9",
  "key4": "5By6FMwNWADuM5C8dbsnEzpeTM6ZB4wfs7t2Pu17VajHduazx4Z51Gc1qNyK4j4u3YFGYBdDNKgDDDieDavPZdTw",
  "key5": "39CEa82zjAqHBxLzhpHaD7RKCHgboY6AVGhkN3DQJAncgDJmHTxYg5TTPNv3RAh8kWxHXPSC5Hc6ds93KsiG2rw3",
  "key6": "4JNrXFCMSjAy77mfoMe5PFDHs33jgX1FXg2kbVhWNXibxAecRZ9nHkutZXCZYJNt8Q6qf2j5hhHCPhiznJXELycX",
  "key7": "53G4kPT6EVJFzTCeC4gtL2pbnEj9rKacW8GXgt8Nzh296n6YuQ2e3SZ547NMZhbzx42wTPxbUa5ULPAMUzTfCJpZ",
  "key8": "4mN7GrcMUcUMACrYnHzhjjSQtzr4zdfQhBwJ3X4jkwHoKhAzKETrFEttPAFZdN5tQ6S9hXFaeSgg7n3xJXrtVXLy",
  "key9": "5qAB28Yz9onmAeic5sN6M8a6XnQSBxX4QZ66URdNTSgrVipuGp2eyMfFnXDyDGjX8vebjfFxSYvcrc2QKo5SSaM9",
  "key10": "4PyCAEMmh4k99BvFgMZvgCgKvsMSUgvZaLmiXTJoeZXFz6pUQY62LpVjUfqcBM1F4BnnkN84G771wbEFDVg2actv",
  "key11": "42QW9fiY1Dad6e9Qdbep6ZMRktbzKtwygjN1GbvHPaQ3iofJ3kUCRWxKg6417b9iRczX4oPF77Zdpa4Ry7TNB1ov",
  "key12": "2dJWrjywvsa175UAqq9dpUawQ7w1piFYg8LTmrx6jqw8F9u8LGcoDZeHpZP9ziiiGGdMDuxJ4YC2MsKfc8LSAFmv",
  "key13": "24WL2Ac6SCRoozL9o3YZN1UkCuXie9RfWzFzthXZJAp9hDyjDFGCN9sJFxzBqMxVwAtHdmRb4b4meswMqD3pAVpZ",
  "key14": "3YTZwWFa17K4ug9BS39vF6gjrBmRdni6djjHjzZ1RZqHZCiGaxuyJWp7aMCGyCLWT85zmTfVvwQQv7G4EuCxdTf2",
  "key15": "5LpnbYkJB6dygdHK7d3bd17VM91FcHccDKrZn1rjoPTyGM2YjdxQSiM56TZdR4xurnZ1X3ijFa4d85EMsGxyo2fi",
  "key16": "37UrKPrzrUJHijKeNbY2RkrfbnAFVd3bqRfiCZFhxCZZKaJBuxqxxun8U7iajdh52JKPDexjWn91sZHaXwH1B8Cw",
  "key17": "5s6mtCQfjPYpAzSeoKDrWyNf1Fhbvns6dqqhQ2EDcjdMVUzViegF1zXbhqWD83My9ts6WAxMQSrddiiKn53VQ47V",
  "key18": "5k3rcX84oE6VGVNvDJeWkH4BmXwKq6b3jnMvh9dYAj5zj8ZuqCsqY1go8WXUdrcRWmX41mugm6J2ezTQZeSnyB17",
  "key19": "4gZxQyuPPyCUMEgNEdD68rESz49rEsMR2gXDtBhSQjuPMxYoAYR9Nu2HsnqebBHyuibe8LbswXQDQvN5QhZy3W7X",
  "key20": "iD8VeiVczixE9qbebyvtbC4549m1535RLQ4j5uJ3JismUxS9ys8n5igMPREr8meoW6tL3b2S4STprQLa71BNzob",
  "key21": "2APD7MQXTYFj4ymqKHDJhiAA1P4Nk5M2gTghfvi52sU481eLLNkM199paBtRLRst7JZaRRZsMRAmZ2eGhpQwXG7E",
  "key22": "4hsvXuWsCtDQyxsWdv932nt2TeQEixo4ZkaEJiuHdu9Y918EB56dErLSmEiGwcpLhC49PkJjceA5jgauL7wedBBZ",
  "key23": "aMQ6m7ThMAQFc2arY7F26f53moYxfC6eJRovkKhx94Lom4DQAypFaxEsViv61f25voq58HgtigFC81GXBSZdWFx",
  "key24": "4WF3uAS2Ce7NaMzzXkF84A9rL6JaZmVjw1SEiaNKvKm15UDTKYixPEkgzZUvaStB9eEWWi2rtVu2wpifbw5Bdt4t"
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
