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
    "3ii4UaDHBYRyZ4qu2ZrqdGhi7qnjFXA8nyc8Vhg9BPBzq5Ap4cYpwp3sNYavTqFYzKZWjwkVnu8UtinQHnHoUNeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F3W9mQEU6iWG1MmBTwYQS1cutXRFRrJGKKvBaPusGffY9sPoJD9EAbmipLiu1xgbA8JVEUicDb9ZosyWrzNasYt",
  "key1": "5UhrTagteT3kbuvoz1C4DfaMzYxVwuY5zEt42M8uUoAH9tJgsZVpF2cVhB6LAE9aUC71xfx4fn4synqX3Jdz6JqH",
  "key2": "3sRcKE1pzFaM5Rz6bupdDi7HuHkC8YVHWSnGy1pcdsWgyjzpkLGnX72uEpQBrsz5D4dHE4nif81km7V8FkjbmJqW",
  "key3": "5tQ5sQvRaQr5Kx7YZg5UFR1ee4WA9vU9MiwhwhXYdEXPV2sxuQPhSXaMUopk9PUNtQpUoyyDYFGSYQB2eo11jV3T",
  "key4": "UV4uGfHVgHDWQvToXP3rfcVHk3h1dx6LZFjK6HuaAMNovJ6wKPGFK8sqEs8wjyqLth2ysePpTCx38UGHSahZAPu",
  "key5": "5G68eBADcSvEJHnn59VJ5qXLCnxQHKX6NJKKryMYHX7g5JD45z3g4bEcku9VeHABEhiNbCtENEupM65ovXUfYCWP",
  "key6": "3gaB26ReMvYVWZ9zvyfNwGBzistD64ucmKr5kRMEnpwKKAAM3xLAesN5XgBvXnQ15kjfRaB2ZSXrgowuFAkiuBAz",
  "key7": "YhtpDvtY47qrv5Y6JPPMWp8geGnScQX8C6SK8mqkvNFuaQ7ELDv4nXVkSStiNh6zcqN5b1G9s3PBuF7y6GJCho1",
  "key8": "4J6bpwP7VjLQ1vnfDTcJm1TeEBK36iGDffttgFrStDkubs3qYBsgarZHxzQkwDsZBQvTE6DxS7EJZ8s12PuRMJD3",
  "key9": "3nMUdbmmvqFo3oCuPdWPvKVAL386YATjZFX8XppWVh5NhJkqmWjzWxPbK6B69kEUbPo4pdfPNeXvW58PHLG6dyxb",
  "key10": "3oJotrmYt3SnAD7yD9oBHqzKk5rx5AFNCFAsDhnf4KMbSJWqbqqbgQsVV9WmVQLpa2WtVayyoVaKiA3osR3g5LVb",
  "key11": "2LUfJbCyRCdPBcZBf2jtkM2hQdwr6KZ897sQ17fZvFGDvVf7pPvYBh2JP2A3MfsyWLjXUM3X5y1spLXoWQCtQP8B",
  "key12": "7FGdvPt2djaAUkKtnmU5SAn3u2rYYhANLrV1q46bSYCynNRPtq4pTu2Jen6QS1VPv8CDxuGDqZq8jJb2pbAZZbv",
  "key13": "4wSpu6hE8ieNUg3Atu32pabXZZShqN8AtuFYnupLzCCBhJbN3BsQi92AZXrQpdzCVG8fApau8jsEeWgbTGBLJpwJ",
  "key14": "4agmcDVaLsgqQ7Qr9TATDNn6SEcMspkpjo4aGZwfDZKLwTCdqRXPBg8eYzggPCqw68j31onWTZ2n3STdZvyMChGb",
  "key15": "39Gmm6PCXJSshrnV99kcGTY96AQWZe2G6r5E198HyhqsdvPna5NWCMK3Lpx3Bo9FjiQ3t2bvVkGdNWoZbppwej9g",
  "key16": "4yVKCh9CW6Quik2ExJfCCWmqihquC6YoUQPKCToVM2rNayyFepB2Yuz5oV6hxrzuVkKKxjW9zppdqBrWhPZJ3Hn5",
  "key17": "4zNQBbpcCymobHxv1Rux748WHJSgbRNjFB93bnv9exdx3c8kt6xFwF5PEFwbCBwS7K1qYnW5fWGeqdsCUbpe5NTG",
  "key18": "2kdReqn3bvF1974Q8q4Uxz5dbkdDvAiQDCSwQrKuhJDfkaYvoLgXzMnqeRDZsTxy41UYp4uJwqx62odZTuYANfDH",
  "key19": "5kpb8fhBKtKPTz2yxZ2HreVkqdt2Lj5NrnonRBoW272utnHGR5XvEP7Gt9JQH49hBbKcZtBPgvpnBuvCGeiHaBz4",
  "key20": "U81rqdJfYqkR1969NtfBQ5dXDkU8xxtT2e6hFPc76bGdEkZkXhrXgoCeWTSBPeqgchqsdMfTiBnr2Ge4EHdK7PY",
  "key21": "4NxJET5j1jniCraHdcup3g98CJA7aok9ZLUyrQ5jtAdAdUdsLMMcg1aNH3N1Yt8FREiehSip7txHLYVUVk8sSnCn",
  "key22": "4FDxiwDCkctT9Fqp5M6JR1FeDa6zL7e3nWPHxrhWdDQDjBxuRjtNrUrNjDuDWV32ArVedKGPP3GwxtP9RDMae3GF",
  "key23": "4QVDDeGGbhR3Qz2dtWywNiuzdGomM6JiScu1Ua1cUL7e3u8R6S8nwegmkTHBrbHgYGjn1WfUWoQH5XsHRWUDKaF2",
  "key24": "3aMHgLAfTy1WH9Ts59gYi94suHwkqoD3bPYYViLoLtmPMjHmXuYbcSA1dkx75XHxi9XLJUmcwDgQp2Ee1fdRGNHP",
  "key25": "3rwchCbveXZizjjiGuFnjEfuf4dqKsbmwsVtmSCsKicc6uzrNgBcQKn14o6cfA6ePQrLxqFUi4W5WQJuQCQmXMpz"
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
