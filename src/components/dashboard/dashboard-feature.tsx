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
    "5XdmgreucxM8VnCUBbjzpw5LhCwKJmG6HF1A7PffjVeFeaf9YWcj5THMuD4da2m1ZqxPc54GCVCt5XU5T5srktTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qSiM33CLacCeDV84WvC2EMCuWNTbi9K6gRJvPfD9arnfy1Vp8WpQTcEPAra6jTX62zYerCr6hcFuvxxVRvUwobv",
  "key1": "5kVRhyQBzGLok44S1phAa6nDKtswvZX6Ji8421wSRr7ZFFFZAwvVdpN1NcdduA7nrTt2DdLWzipyDZ4hCbsbucmy",
  "key2": "5LJZ7Wh9LvC4W56QgpSZWhafuTJba5KBZxSdKmWfobC7NeYphKBcCDA5hpeP9ukFYDca24w35P9gQs5wquN8MCUx",
  "key3": "5WjPDWFZ9ot1dCwPkqNi2MvCCmjPp2ErYVkBq67VFeNLgN3KDRvbkyxkht4N7ubcsxEsVfK9uhvJJhAJufSz3tr5",
  "key4": "5cTgfkabXsXda5ME8kmc3cnMDwdFc3H4vzdPfMVXM9bi8W4apP1pLjJcbqudQUwyprfmHiP33eAmxp33FhdRWtRM",
  "key5": "4UsCWh1EF2Rdc1uheyPKGNDybMUzBbwKkd38g7WwkS6aTYuV34hsTktc8rnNXKVWgqk5hsXmrHP2CstWHGYpbGtJ",
  "key6": "bd4j6AmjMnKNfvK4stiVsia3oQF9J9Tdn7AaQHuZ3FjRRh8X9BRvZPQkGNdDJxAhWVqwv43cEMU329dwE4ec7Dq",
  "key7": "5pP5taRm8xN24q4CYF6CRtHDSiggPGSexzGjEX96jnERvzeNjUYRR8qjkRueLxZs6CxNpExXSNaVyRZPe171s9nj",
  "key8": "2fk4tZUpWmkS8rVn8QinVWkr7GDVr5bN6MPAbYe45vjJoWQzH4iaQRCMHnsy8RZ4AUMFek9r8yLKcFpnx5emvgZw",
  "key9": "37pGCH2Z5V1XZdZnSuv2fQ2vqtacCeHUU4FpWU2ZsuzZSNGBHXtu51qSp5uxFebQzcTgR44FznMJfcaRLfWTS2U8",
  "key10": "eNTN2qR86HmzgdVFu3oeuomFYpg6oFsX25y5EARsK5gKMV9CDAFZGF3QTBAAtEDvZFgL2YBDqbi36daGyKwjJhL",
  "key11": "3ExbyugNC3zMmYVEayNQsMWkKaSsqoewyVpWcxBydiK3hWnRawXkHcMak13ynov3LStNJPYL3K1etiPTwwZWQyre",
  "key12": "3Akc7jpMdYjQ1Yu4YsgHE31qNSJopKXP88jsg4669DhqV34EfeAsCz9h19E4gs3yHeNJRKhZoA5dis7Joy1Dc2SC",
  "key13": "23Wqb3pWaC8Kxvvy1SE5S3T8T8FRSi7sBEhAEGjvCLP4f3z2guuatPyJwMR1UgrqaYbp7XjzoFfvQasdhKqMotMu",
  "key14": "5abGvZSp17kUW37LQvV4ccMTaKDAeUdRx7GJNV1dcowgAACnHTmpxhH7p9awPrkHxQAx9AKH2WD8GSD3NZnEmPdG",
  "key15": "cpwqPijVYfG6LAvVMpCbq9cGXgkoSs4Pu7qYfrzzTYkn4fE8bNnA1cT7gCiP9scPJVgWaJjyBiCbWD4WkBPXFYZ",
  "key16": "4xz6S2HsgfBU6Wyq2RuiXNi2sijCpBvGhuM2VYfmK1xL5dXKYrGe4zDghczLXAHdDfFQh2tJbk2AP7eoSvgs7hpV",
  "key17": "2eRo6kf6da9iayTx14jHaLFhBRc73cTxHym989ype28ZmzwymLHxR9sGLKXsHW1ZUu7c8Qf6bD29d4nHgL3LmZwL",
  "key18": "23SdesRB3EWVN2SZneUg5XCs8MGuuL4eRrFG4GFNFjL4pzp4TjTJgpwhb544hcDUksPxdM4ThUanKpWvK6TMU3Q7",
  "key19": "UTJnXnbRegDhYPchkZ3Popt1i8dEczdSCzBtb7WQQHpagVn3oFwqQTF3tLKczVXGjBDfH9MWahemTnCAyH6Mans",
  "key20": "dpvoQ3Vutmtb7UpFYy79z25fN9EHvDCiyGyuShwYHgpT8rD2ch4zkFwbU2axgH9Tqp6YsNa8bNRLCWTE7cvxTuz",
  "key21": "5vFQmoWRpuZeTY7KjajBf9K2of5Bg9BiNrnP7mRW2nJxVGGopEEWLtjF45dpb97CHxParCBYeDdLygLYTeEE888q",
  "key22": "3XiLjiN74gz7aCcrxBkvTwSnjaEkFNKqQbFbMHf7UotsyxozLH1XyTCoR2tjEVhqHacyLmsqSdWKix8BRWxesWo4",
  "key23": "2ddScihLHEgxjDc7WnozfNiANmGsaXmnTJKWZaE1pcmdyNLtZkbiNpaCVKWmETj2LVqXgY3Rc4LJGs2BCZecs8Mc",
  "key24": "5BEE9jdvNjUZQWpJ64kw6stnN5WwkbhmHW8p1CzNkT6SbgvyLWseiRvyATQ3UPBnPofFQjjjxKuEdhL8VJrWyvW8"
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
