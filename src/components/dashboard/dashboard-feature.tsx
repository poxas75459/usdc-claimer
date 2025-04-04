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
    "334iQXiGACoz5NKm82LngfqykDbLbuDV83R91FSqnpdWjzYv5TCTgxtmbtS1GFstqcD6kiTBjjYgFKNvVih3XVWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kNUaWjBiyD58eF5a2DJzQk2ecYbK8ga1ofdfjQqE1wo392KzKK466HM3ySrESfX3Eg99KmMiQSbm3njnCAdZUwj",
  "key1": "4h9TZC3e2G9GZzteZiYRXUdvafJhW3saDPECR81mwSmLoHiacWcsGuKDg2jDJ1gqCHNGitjAg2iegLr7nnwQ2tZ1",
  "key2": "4FkAweRjKNcLtRjUNcXqGciYMko3Cx5GuuMMSejxMSZc2qHAManuywR2cPEtUqCXoYs7WpDFrKGdMyvbLxYAg27i",
  "key3": "5KsjpRQfFi5HXMibC5n45GLNoBpBM3Jxp2rcqPZxQfDUw1EgF4Y5cB5bGSQDtp2yGKBj8MS3ScGWfLWZWLSYtQ4J",
  "key4": "LEsUFWPjLCX8PiznHY3Y6gRxFeUcmSaXdnKky7xuTGqSNARAmXCYNnVPnAeBBqWyU727s7WTXjFZqmGY7jK8ntC",
  "key5": "38As25721gsbEwhcUgsCPe9jK7edUzLfvfz8CMmyMvqjuSmfHBgJXebuF93xExG6VZNFrUojR3WxewpedUguDZX8",
  "key6": "2HpxkRBZqvQUvAKZ3G3yAndqJTswRo137onyWpDnriSc1KQcE1CedfoxuF896Aimsgw2pXNvCyxa8No4qVonFuTQ",
  "key7": "3FHQaAmbuUZr9sqxkbmh16efrZ314xQ7xTDDfVYhWhWMg386HBisCg7cxehAank88Uf2DSLH5KxQe1oucJgdkA5S",
  "key8": "3yETDysMzTdsozAji6SX9fhe6rwxHJebn2naQDj9DuyhZ7eVUq8Z4WVbL3evSd4ciYbLAkcx43KYPsKEijqx82jx",
  "key9": "5fmhbKaNTexCRPoumbQB17YLsFtsceKRBAWTZuWXfnDZ7sKypp2Sx821XA1tN21xAaergvNZ8WtkqmQnykchNz2m",
  "key10": "5zuKtNwkGswdeYJATymr47RK5Vo1GL3xQhSTJM9KfpicNQRv6W2oa7fGPihqiqUSXJcrQJmHBbXA4YCCC216hzKn",
  "key11": "5usZpe34nm9KQdyWtTXRPtpyF7bqgHhjHAhVnjTuHqyytnQTwRzxx6cmUvMu81o4iq7oatuDykWrw5fcJp74auDY",
  "key12": "3T8UaeYJZkBwzxsUPwZjC4SJSwZofTmyqB3F17ZwQQwQt2HgyB2KaRbQi9pDs7Z3qq9R8c1HwUFAQUyvXcE2H3Pu",
  "key13": "2SKLqaY313eQ3NS3qaLTyd3CzFMG7tdVMrZsqsxENvaoDHjJLMPVWwjLgYXgbxmeoXjx39KA6BK5k7zF5iwz78gc",
  "key14": "3Ad4aqzTAhn7aefkDnoB8ziSoSFyiURgfcoxCBWgFr3jrKBF4QUVao8xcyTCVLv9AsZqVubsR7QWB2f44mjX1fay",
  "key15": "uyWPJFfd1F1UyfPq9j39cpKUYCKK48ErjurUn2PEpwd5UysWBDQPxoauBHWLQEdy8LXAg1ezfXLByGCPw5YVKtA",
  "key16": "22yojrkbKjkNe2pSMVHeHvFp6p1UAecq9nMpUwGN7LP3DBn6SRL3y8us6E3be5SiSf2fAEdVKSW6qrRxiUDdr6Ns",
  "key17": "5oWHG4S48uPFxMbp4vF89bmyPLemXPFJUua9WU3omDt6u73HihhdfEjgdR7UB3W2kiqNgzXEnEKbK5F2ysg6nHRG",
  "key18": "4QzcLwvJBWSF7w1Pp4d59kBqZZGJtJWKkwgykzQwsPSkH3NECQeed94wVYmvL7bCYg3BWdJmNytMR5eSSTN5NM5v",
  "key19": "EPGw4FZyb4nG5QhJWh7g4BCYHDwGT8sGuibkseHcTt9jCrcgRXpJVQfLbbLaJbzxxXyHWs77mTKiuSYgLodifJB",
  "key20": "4Ctr3Ap9ZRJ316qZMFVrgJdbvMeC1yTMkYBvadLG3TBPCvFYGVQ5gSKoeEFBQvFJBvempAXij5BGbWJsfjwRP4Xa",
  "key21": "4LCAqYGb4h1daB16LgpakQzLwkzNmyNNj8LbEHiUYQGvSU2T5vmvREx7UJMKDKA7esBLo1FTfEs34hoAyc8RL4P7",
  "key22": "rGKoUZoP5NP9wGn4CKEGcR1ih4WNCQKgow4CLm5FbMx4F66v6q88sDu1d8kWG4ikJDKRGbX4xqAF6KZvT3d3FFE",
  "key23": "2TfB65xj4A3cThMeZARL1x1kaqJPrAn5nk7QJZFS5Apk4d7vveQUnmrLiYYZrsUSk2pDv6o9QnbBzNk9m8Jx85aY",
  "key24": "3q4aSKsVEwUYSYs2htcG2iK21zLRTAbb4asviCw6Ts9iRvDwVJgBawzjhGxZ1RkvPGPBX9hxFi3fKgTJZwMmAV59",
  "key25": "3vhQ9n5prz7kYJcTiuAfJ4WeNDa2Lny5tQv7WyNKCVzU9s7dQYShfXmPd8thVboBJBpS1u3FUEoPNcNds3CFfVzz",
  "key26": "35o63PoWNcEvG9Ud6cG5Cx37ARPYYNzokxEtwp2CWMD1NbBAu1cVthzXfRoFgYdnDWB3zdjtH6wMiag3sLA6PKdN",
  "key27": "3y4cUuL6QqGNGmcg91EQstHtW6hqHotqRccYZh5oP1ZMHxxbq2xznxGmmabMCQwKjG27RyNCHu9pjGnLnmVrxcPd",
  "key28": "2FAM8oiiH9kiaLHRMf8cuLnVgwSBAT6PTjVtvTGjCU2YPErQWkq5B2qFqMvjDDjkQ8FpejuYbsUogMktnGutmLAx",
  "key29": "5Fy8wEP91ujkN4tBKqjFWkf9DxqzcuCKNoBdaPFGrj6Aj7xtjg168RwWj7mCAPMSwE3YdvEfedppVP9N3odYyPYH",
  "key30": "48T97nWmqSHCiiVkEwL8A3GzAqt12AG24ouc7DckufWqLk9svWXfwms1QURkmq7aVdbFqnNLRSX767sUGfGcBWtH",
  "key31": "2BC2LZzG9L1eYHF1gMnprBatuY7LUnFTqaCgEw6ayvzg5U4zaPHHzQQoy1MyKfQR7VqVbtqXK5Tokjhx3P8Cs5Zs",
  "key32": "2Q93jS9kmtoVQiPzmUj5yE5Kc5XRN8iTgxh331sRcWdZgxN2uhUXWf4ZPuePLeXZm9McTBRnrrNrL4VuTbBX2p2X"
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
