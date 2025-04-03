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
    "21pWe9NqfBNFxygRJUw737UtBQj4yActDkQy4aXo874kQ264TX9fc3bHZQW5VBxv9SN8jS6FUbpZFk858twBgsCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55748rvuHDDZKZq3nXpdb7UktfXMmot8sAXmCdkKdF9euKwmKWG74X9jXTsrcjRGS1UJ3JVjzna1UCKKaAEVTpyU",
  "key1": "hGQQkCN88J3126SbUFiPh7yR1StuuGEMv5Ut7yoXt2m3SgcXo1FuhcWvH1wLjY71SvgeGQdTwiadTWe6CovrSk4",
  "key2": "46BVdCzJfynEseGWUJFoYuW1Hn6offnyVQZb8NgZVswyn6LRBt5YaNtNp6nJHfYiAhMMFAUyJ3E9L6sudXXHpZVb",
  "key3": "WATo49UQKYB3LJwgWd7fgP14xKD43auMhXoY22stH5gkp9gGjZavCKaBk5vetgtS5KUDLMaFthwRBKN1P4Rr3XA",
  "key4": "2VZkvGmM6xYyyyYrJHmcVjcgUHBHuuMMQVpRRvQDLWQioMw8z7xraeuT2kRmKx1iANPLnQ8s4KL6vrmr7LWbYg8W",
  "key5": "4gCGFKR5QFLzXz3GivtzttrirFUaYwJT6FER6pgamwYJALTiyDuSmn8eeSCLpLc6mbHcpVpxiQGWCT9mx91Zw7CR",
  "key6": "5hDbdVA3rTuzHFpD7gzS1SnHU5rQMxqYyRNPX41JCNegTQu1vaoP5B5w38aPgt2e8ARoR7z7p9Z93BUAEbxtGhHn",
  "key7": "3F4M8XZa13ehzrmj2aHhNVkmK9HUQJB3ei5uoAL2ZckqeGaS31favGN9RKxNvYeK9PceLvSkUs1ixDm6v2xD52vn",
  "key8": "5fCFzAwNCFeF8GeoLCGCbsGnmy8ig3irhW5EmGpvx5XWWu4Kn9Syt5NCgzgHq1CfxxUhqtbrjRN3GMMWjgyAWMZD",
  "key9": "4a9PVHHdi7PyxtR5vANjpevAscB22rQym3KHctaxin4kTZAr7QuBhafYKCbcBQYyy2oTs8wPLXicRhvezgLd13Fz",
  "key10": "2mpGS4nTPPPP6hoNHiyCgM3TU4DogjY97GJvzuKciJVGn7fgiVThtx91JhERF24jGzmw7ReeeZTmWNRp1nns7oS5",
  "key11": "3o7niWDpvwS5qA1MUdR16k3xBi91ozDKmUsUDvjt2AHmgb2rzCoNXTTrqV1jHiwGJiLRKrcDJYcMfND6sMguajiN",
  "key12": "57gQKgnkUFSdpwVPd4judrHYJkDc9Wd71rHdBQM2Arrrv629xhJ493qdmaVD73UjGRYUiRH9nxfeNVoTRQ1usEbo",
  "key13": "2gCEpi4GdEEyxtEEwMovKacjQjLoLEP2BYqW72dsVZJfuqgveTeUVVgsTofrds3YmiCQEvesH7UXUrTQbygt5v4U",
  "key14": "2HYH8o5CqmQkA6vBy6fUewMFX7gQD4A1rqkUwhHAVQgGQ1GeuqkpiefbBMY4CKtpw1tv4Z12hhcUEeaQVe7TkVvj",
  "key15": "4hb7oJb8iiguzubfGRttKfXQpcaW8Enfmuukf2AqHp4Jc327wWcc1stXvdLb23wcrwDVx32Ltzv2uGrjQkb62Kke",
  "key16": "3D5cL5xZZ3keJeb8ggx4QrcFc3tSy5dT6DhE31qEvkbhNekV1arBBzHqx6XzHR451DC6WajKgecoTPeTRq63FeVB",
  "key17": "pzgnBSTE9oqTUQLmt4YmWUKXaWPgEVZYfo5EJ6gGcP2GggNCMMNbR4xbBnaNDeAoWUW8dujaB7hWBZVJL7gkGmy",
  "key18": "ohe3guBirPdqhUq11GHkgwRUhZ7VhmmuVDKJXK2RdFkAxxpJ3hyNynWJMYwtrnoUiDuYDrXy62TXKBQzMjWH2wH",
  "key19": "46vuPEJzaaRuw6HQNjPy6b5euNJj51MQaHWD1csUqecD2f4E32kbJvNA8zqRVmVeGnVD4GDjAWxbBHC1vrfRNTG5",
  "key20": "2xpnftAbDZ9zSTmjJMMfFVwKS2wCz188W8B1TeEAW3CpNCkpeHk97i6P9uvKajmSj3TxBkk6V4h9vgDMFkEWDnQv",
  "key21": "4HY7eUW7aFYsAvWd8ptPZou1npzhTxaksV9k4LYP2fWcL3XrcfjRSn53AW4Rwnomg5x525czm33Yd3yi9JKVoJeq",
  "key22": "24MJSFuNneNaKDghK7ww3chTDkdwsj89Uc4TCKUi3CvT9umRjEBtcMvBuM8n8CAgAwJNsWhLxUPiUrmwVtZwyenF",
  "key23": "3vMcTZntYQzsSyRKgjRrJtTpakCRvWpmEV2UsKWbVZhoEheQWRjoLYYCrLNbuD7FKL3Rdc4dmwNj4tsgg7Q9z7pd",
  "key24": "39tBZGHcVmBzMtDKgYKBVzqU2qgTmQC6AizdtsUu9aCFFxULDT1TXsj5LAuzLGKgF8U81MmuRfAHsjLyS7nygJq1",
  "key25": "3VFLsNaLUNGZPtsoSr2PgcZrVR37WgzwABeYn7eQeRpXWRKYAyNUdN71EpdYtwYkCDo5g4wW88m2Sf2N2KPzDsKQ"
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
