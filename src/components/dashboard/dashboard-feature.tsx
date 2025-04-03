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
    "2PM4fwzirMzqrzzWrN95zai74ymCAsHq9qqXLFLWofdqdEukxPcSnRoseZG7pUWvhruM8X8pP43nBK4uYPoWfxBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4beVp6Xt7GMzbdMiPPuVq1nJEY6gbiKaN81K7zGbB8yBzbxRWtySA7uURFc3ByPczTd6Lv7JsHenLjPyfqejE64J",
  "key1": "8LJy3XwC2rBdGD8Q57EWvJo3Q1c29aqBD5byMH5R96g3ZyyQpgMm2hNPWn8QKGqfoEwQuAXH9kKNy9VcoCrPtRb",
  "key2": "5duxC2ZZ74o9UGADb4bcwD1Ewj9i25wc81D4sKa2icF2ZaFVK7h9RGXLt3bnaQZBeehj1gii2w68MhGyBKghoXAT",
  "key3": "4bJnizD34qLq2HwRnwXPQBvkeVv84ZPHNA9q8RV9gAZcec3HRJrd6NMxEzWHTjcGGxKEG6pcQD4oDkZXW6c4ReY5",
  "key4": "KweqengCr92JKaPTURJzGu992Qp88b3N84Z9PZtURamsb6kSFXeHzL6YAHfpkR1ew7XbbFaNSZ8tfqnyhFETX7M",
  "key5": "5S92dGQ83JEVE3fJDiH2xS8o2KUXc8A5zGQ9Cm9jVupaUpDEfnyvM6qDj8ERetCDhhrTo6qF7anebycGfJn3FUiq",
  "key6": "2AEYD3eYAMEfHd6A9scRHXUky5fsoKw2eXDqqUZdnh7i346oT9dBKyicXYzAwfZdqxWHiFfStYpWMevaWeKFkmEY",
  "key7": "2mXVK8aqMsCqQFLcLJSsaznd9h5xf3x6r6NvLkAFUdg1CH7kw4rdhFJjJKrVma7VKQCVh2LyvVeDMd7h3qVfpT7N",
  "key8": "2LhyZqd9DoXySVEGhL5vBcXMCzfpjYmKfEDWRXQtJvrEN5LRHk1biwh4NiP8Hhmd7CsrYvu8KkviqvjLL531vcR",
  "key9": "5Jk67C5CHr8f3jVMw8nHwBAbRsTcgdbw6ktYz2quJNWXCF3r2QGGzyYjJRh2tYfbF4GS1NYvKVgZA9H8RaQzmMqc",
  "key10": "2HqhpwhHSggXJ9aGJPeyPwbpSL1shnCKrjLLT2KyWiVW9yp2zx8aNa6jGFCG98FU445o5MZzdsSuFYdtsP9tm4j5",
  "key11": "4ZdL2b5fRm3BEQUhb18upCN2ZWTGGVD36hfYp5pzewHLuGsHojHBddRsjN9LiMCgh4iY91Qv5pv19fQFLm8kGJbg",
  "key12": "U5p64NHMadocvt3heuDi6qqPQzp8qomzAqyiNnNZBR8SZFVcYTbSBc3bdVwNUDphDraE6adcUu5a7XuHXmczhji",
  "key13": "26riGKPmi16Nv5VeTrCapXe2hS7qKP3QGn6xkyDzKSUPqePBUqfCDjEwwFVuY9qG1RVAAhELat6y3c64ZxszJddr",
  "key14": "2ZuAXtwYtBt2CDEksteM6xP65BSej1HLivP99dmTVyf1thUZ1p9Lfoq6EcD5BjNbMddtSQCHj7HShbhtJNwethNu",
  "key15": "3uarGJkepz2eM8zywdM2ejbFRbmeB95oMsAT2tLgLDvsieXPmNk6UQhuiqGPQFqYzNLXxZ4fLRrCqfuni6WBkqAz",
  "key16": "3n6b9DkVBwfZbdqhiXKxD5MFYmMV69oDcrdph5Lf8JQP2hsMU5iDBaXpUbiuAaqx7FaMmCk2GnZNfqcikSKnPW2s",
  "key17": "JDjQuMetBRyq6i1B84aG8kfpr5L9Tiw99jRFZeExsUPAEnp1EKEkjEi8yFzGLGqp6wL6rShTDDQ43maXbth3uU1",
  "key18": "5VEPqrH5dhpEeZpi39dz8BCKEw3Fdvir9mVBrJ5jc3ffMVuayABg5ewMxkxAKfg6adVMKJVpoE9rBDR1T6Ro9pCv",
  "key19": "4EUd8aD95P2JJtm6hAxsC1H9RrJxqQCA8q2tp4TPue9bgQDjSF7LvGQJfCWSBvtkRaRqKmy4cnkDFdz4hvuYULFV",
  "key20": "5HLNp5rxjMwrb1P4v8bZSKPYtQRkYTmBKqacCn3o4sxDyLQWvqUN5QEH8Uhrc1Kzwta8mHLuF4yDfsfRL9D5ht4h",
  "key21": "2kgNW9pSamafhETBfTc3RrUqzaAZTY3BfFWe8cAKJVJ3xMMTM4sDZKQoXRAm9AcaJrBtPnaDx1HWZjjSiaqmtkR4",
  "key22": "33gG8nHhSDEVC6rEEiGQxAtPHRs9zMVQRSEGu2AR8oyEod1LiXhFYjugKta3iV2rAiLD3F85BtzK7pWGYf75EvPN",
  "key23": "suF1Y9jZxL88SHkX35voKDPc9AP1hD2Eow8GNPLgTj1oAKQsWqMUzSdYNvGELik1Nb4Vy3cQsWfwpBhKVd94t1k",
  "key24": "bUPvxc9V3tT9ETdue4HvGLkj1CjvWG7Z9JhWPTMPHJ2RFwtUMSuFuLPsM9NnBvEUMx1vd4MAta1MXYyhzLhPwcF",
  "key25": "57xRxNsfWGoxJXyxrZBN2dkMpXNagoK66eAp1MukYrfr7GkDyfWFeR3AxDYvjHGR54RcmSxkkpPMYSwGFES2bimP",
  "key26": "2FyZ2WAjwZjfRvWrivwYt6GYqz2m2iegQRhy6jfkWqcv6m53HKBaywbfffPLPdCuDC7D19zYNTzCZzFm3jJc5Az4",
  "key27": "53fYs4WSrojJ5xgKkqMADhGVhZ5FpE1RTcCSGMaUdNpN8e7MBFTpbRcznA33anSxVGiG3sGbjG1fqpb4Smr42Snz",
  "key28": "3RrQwnFjonaBNxxSMVtPVuS6pA2Bi7LgbyfzRAfNEWJDPZ3thJWQ5N5KXva4WRamoGZiD57UrxWyFHQcfRALBE4U",
  "key29": "4wMUKkKcYE1rnsUdK7PpsKVXtnSC4CvRT1RUKiNQjqYQFpv6JyjxwadZwEbSuE6i5SAY1fyqTUdACGr5CLmcGqE5",
  "key30": "yGeBabKGcqfdoo77bdPKQuD9V45bip4mzzXt1Hh9B7SnyVNsNfEmT4WCpMpvEcxtiaieSoiBkJXmgz4XCFYQbRa"
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
