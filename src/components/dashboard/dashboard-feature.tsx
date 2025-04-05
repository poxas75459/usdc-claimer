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
    "G6xdh85rw7Y52vFiFXWudFB2oLougWyDu2EfVVQZnZMsWMTTs9psGZj37HDvXTeNZKyoEHhxNtnDPy9VserSnKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ojk5uxpbmKjk2uW21Rtj1GHb39gcmEpMKSr6Sc6hDEoAUKhhnV8xtocYtKQUEpsGGyCDjgrU3Bkf1qmUmrAvPQr",
  "key1": "3TqrC9C9YCkCr2Zx1rKd3o9v3k6y4Y2QM2JiRWRv7nwg94wKTDnE16nhgRAbA25r3g32gGpTYoVGLivCNvVFX8Gv",
  "key2": "4otSwj265GGxCjZWKwurK6DhHYezjzi8LegfA2qP1EjwovJTpWgKesrBx7PdWitTFxMAJr5XvphRVRsu9suFwR16",
  "key3": "3GRvwWfUvdfnEByBmEcHmHxA4J4ca7N25Ffxfzt9T9o7WFvFB2zEW3raDnf8S52vE6S1atV8FXVX9K41b5vCzJT6",
  "key4": "5Fq7HjGhmFxYTz4x4ocXQqJSxUXVSdzKaoNrtbR22cW9nUPTfooRF8oFvUFxR9EkRiSqc6VgQ7pWogV44TAkNjUq",
  "key5": "4EVGYCNUahDVNgWXa4MYpcdPJ6H7QqvoewWDrzGRnED2Qwdzt7L3BowKkzCCezBqB3eY7gdHTdKgZ9eYMHDgf8t4",
  "key6": "28fxqLMMhNwBEVzKwiXT1ZKxPnXFPCzoAhZngPqcMJni4Wk7RLDyCWxbz6PKhnY38gogx2gsEkHtEhtEa56Gg82d",
  "key7": "DvnVdkEyQpk75CMDASjoBwQx4trKDrHevqMQvP3j5NXxS9ftpAqv4DLW9ZRFELZs8de8tMvxnhh2Edds3ZVNyDy",
  "key8": "wpLwHsKrCPQL6oRn8sFMvqZZ7P6d1jZkvGxW5d7ztackowQ3fQXmNdD1ST1rUoK5SYE1aDEHXy5t9qgPp2znGXh",
  "key9": "473oTokq3F5YC7casrzHUL8fLWKr3UzggEBijMr4LisisZX4BVFdDiKY98HWm4SpF6hgzmjVBjujP9t9FEjgK1ML",
  "key10": "3Y18LUX3HZ9xgm5hBPi9Dmhd3RArF8HE5hhzRQEtVst17P6BMuAUDB7qTyLwbW1vHaNPxKBYSKPrV7UGFaRA7oqc",
  "key11": "5RLc5Q7TGQvxAbaR3w2BA257ETPdkfV8v2kgYR78MSjQB6GVDczbSnDzEWLtWYz4yYye4aRZnKeFHJRerPmYNomq",
  "key12": "4XZcTsDH3k4A5RKDSFZDCj5KpTc4vyqfqqD6XgmrAzCkqQkXCEpkvxDa16YNPtGE3tfCEyYtGVwu9frqSfZgh2iX",
  "key13": "3xA8wSnU6p1frYKUXE955gSnWR19Uym683FCkxHzzYTDwN9W2c2jJUjtdpqQd3EBxLBvmu9PHE4XnbVKEJaX2bki",
  "key14": "2J2j7XCBXpDFPsPK5MEevCu1wd2iGFrQVjjp6FUJamA3QELEPZu2H4muo8mHr7DqU6vo6ptadfr22KGqQs5oSQH7",
  "key15": "3Mgh5C3Jek7CH34bKoZn2xS4DSt9yYjySCYkV7cjwmbCzowMdweUAux7ui4nLn3x3ACPoiX6tG2yPzgWXGnj3WsX",
  "key16": "2ch9kG3N16iKN7osrLbaeD8G7gx4bb1GH6TzbhF3XewvxE1xSdLoRmcAjPnHsixPiYU3sVv4CbrtWHCjLdPaedFE",
  "key17": "4WLVSgj2UT6dWFyUv6FigBo18DuJw2b18vzDAU2Yrf6p2avj8Fzmb2AeEgrBiRp8VqqU5TBT9fh9bLUPSZC4JjNY",
  "key18": "3PLYZo6yWYqP5kpZ9E14wygmZwndNb2THKm1z134XwSYwQVHLB2AVG7nzK2EiXhWm4ftSLbJ7LFv6kEBp5wpat8w",
  "key19": "8DwLjUJaoq9Bf15wXF7sokjivpCu4QnJRxYroX3Utt6AymnvDxuznRkYdGniuAPm3w4fyN39UALJWEhEKfmkQkv",
  "key20": "3owybAYf8gCvmZbk3VMzrT64h2ErBKqZa6y8CwvHbZVe6yz2ipNoDk8ZLCBtmU7G1JrRyPNzhrtaneJJszjrUW5A",
  "key21": "4JNkJMPXoveR2cR41aASFpoQvwdcLdaRibvuRCsm8rB73UmNJ1JqMjrDtro2sGjP5VHQjiUWmnpZb8tZ8VLUrK8s",
  "key22": "5XFaShwisf5PYr8ocFbB5v2PhbacqUEjFsXdfoPBxvz1iR9HyenApH2nFBXveLN7xavVhfbFYaHpHTDGmV61RWeL",
  "key23": "3MYHvx48J631opE4pSxvh3wH1kfpYf8ug9UfQCvKB3r5uXgi9Q8MiJFM6qmFFUX1bkqcUaCSN5PP6p2aiAREmFYt",
  "key24": "5DHNDF9sCkQZGzUV8emfN8roax7idPKMx4XUPQr45HHGx5ZGfgrkPBS9QoX2uNUBU59twgxGumv7rZ1ifBqNevWw",
  "key25": "bzcUKud9H2XhB2nDxhx9KD6ipXuny7APSW9sP6bNBiBfGUre9M7uL4Sno3LjJ3qcACJNBwipM8x5BumAFwaAUNd",
  "key26": "3H6GL5ZYTWu5V9are1cVxMQj3zAarqynngzcd8vsATZASvxrWcawYeiyY1Gx2XcLjhQz8AgYoJniNSP97Wbd2Anu"
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
