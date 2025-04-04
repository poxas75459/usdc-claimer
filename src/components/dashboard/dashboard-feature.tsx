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
    "5LwGH7fAFWJ8J1w9Te4pvWtYiP6C45mgp2SojcPFAQ77chbVQuhMztzyrLeWc9W387orf3Q1dCZxVE9JEMSvstkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TAUhUqnzpX3rPAULKjoCQ9AJY9cyZ3mRWp1KLSu52uvaTzAPzyZESHJLgWQgbLpwmkMkMUpJhSJnA8YWa2KvfMm",
  "key1": "31hHMMSBnBG21Z3HsoFJR9cmXRVbAxfwPmFaQtYmEFBdzcNaYhCYVNRtbSwzMfzumDtfYNLJw7ME3ySNjm6o9FbZ",
  "key2": "25JgaQDxjaUZA6tvEpvCRamqHHPTPm3FVKJS875vasTNxnyYypVervuBYhCU7wfUxSuMs8rGmAeHy7wAv4PZfeJU",
  "key3": "5dn5KkT7YkyFeDHFyeLr1DXs7xTL4gy9ytr9WqxM3K1Pqh2Xse1AhxyjGxToiR7Y4vYar2asjGb4E9peuTsRHHLE",
  "key4": "PL3h5tZEozSoGp1Y7keThg6CaERwyCM2qK2ExDm1wzcb3N4YJbmWAjaZe3B8hPqSSgRK3ncrLXC6fSm8aTzUjZC",
  "key5": "MTFUGcCHnthf3U9uGVqreUhuj2yG2jpX5sC8pzeghds6hjgzpdmEq3a9ubqpZG8pMJf8m8BZZirZemiqRVPLLDN",
  "key6": "5xHHhq26ajrB96hxEt1tTLDkrGh4xzBfQj8yWPXr5igCg2Sy6JZzVd27rMSsZ3oP7Q35vhAhA38BNN6g2yJrzRsM",
  "key7": "2hXarsKkzSi7w9ZSRFGbEKPuVoWCkLY5PW2Rxm39BsNeNpRUvk2aNoQtRURFUq4TXGpqkGxFmBnRQEh7ABHDM6Go",
  "key8": "26z1VLSv3oqecjhPs2m18MEkD9ADQHvLdtxcVC2ayNzAufCxQY2zSCFXJNohyaopR7L4yG22NpiY5fMYd18UxRp9",
  "key9": "3nuFv1oCY2YfwKUA8LhpGpdN1PqMPLNv5D8YXkmvi5sRGRzSvKSWtTTqSCpAPFNPUqzfUuuAc9Qib8tUiNkiMRg",
  "key10": "2GLAJTpbc26MtRxyqsgjGYEHoviRbVDRS7gP81fjbvb4EcdBT1GqWGoLb5d3QVza1QqTiA6CgQnKhvChPMMxJfjN",
  "key11": "5ySAb1YjHXhWGyDMgukyeffiYRpneJDz7RftJ4npqgg4br4gMmU1kmXQ3oEjhQVGQEt5yPMUkEE5W3uYPQodgxMK",
  "key12": "3ZiDfgsK9jLwnjsGmxLXhDe2C7L8DdAWLwR7hjA5KzQGLz3QyY3ybwXCCCkSWnz1Xpn4csyyNvn3CrHnkEhdZZoS",
  "key13": "5LyYrQn353qt9ZjrxhHyeDkeVEXtd2cG8apALcHijLiehnfhyvto3HGRGKb94xkpVYcEp8cUc9SFbKpHMmKYUhFi",
  "key14": "5u5953KnPnK6KdKWgzPEyU5Wfio5vSHevFeRqyTZj1McZ27vzjYzqsnuMLyPoBFXeTuAJNZionWKmRVLP7XnRWpJ",
  "key15": "3Cxvy2KxNtNGiPB6zrd8eKhAGosZeJhvsMn7J5UVt6nCY4bEz1UzeQAiz31j68oDmnrhEpXus38nEmUwQw9fTvBv",
  "key16": "mCy8N6ZD953s5iiJTrzZZuzFbVDKh6XAxqW2E9YaHSuhaaj7HxWkzeSQXGPcbyjb6HBvxz7sEDX9DuWon8xdTNU",
  "key17": "2rjkZRkeXDN4GnAp8niifDXdhwTbMk7qTQakdkRywizhPadC6o1RdTsEJdrfNJthEF6rjgM8hwcbtQQKjmD9mRy6",
  "key18": "3dXU8cPe3N742tY8rfqegQusQ83mkATXNkj927a2JVPgBGqux5hnDb8HcisqJdsZ6w4BjwcAq7JZ2bEc7d8vaGzE",
  "key19": "2N2U8fkwPsGmhMu3ksX2vxZUJ9f5nFTiwnV8eRiKHu1WaKnHkzdtsJhwCkj6M8WHzQXE5VigLRvy3mY77WGA8vjU",
  "key20": "3qvrPJv3VHpmfQbPjzkKTShAKLRr4TAJgU6FtM5EKjq459QxUo1T9JsyQtxvyH7Dwd2YUondh3Qd2Yo3hMB4YGwt",
  "key21": "4pER2UEcDv1JiWmF83a7nKhcpX7MDb73vYroLVc9zQwksq18ACrGvnBUVTvvgxFWbBkT367jjCD5MpqvLepSvQxg",
  "key22": "5VQyp3AKBQsTUPBFJ5eddRkGjryUXdy2LsZoQcvzcaUXMRL1MnAUk5csFuvYw96PdoetPvh4u6eK9BouKmfErmub",
  "key23": "3zHxrh8TANZHiTEgMC6dpSFzzWZ6fKkTXMFaALbuWaWW4WFRdXYuRxi6XyE8DLPUnV9QsHtC8HAZuFN272LznRMo",
  "key24": "631yA5NRRPPRJxATWb8XBVnfrE5vuDGkFHM6dLX9KKt6V6D6c94s2UZLsLqENcTzARJfhqvPigVmwoYLWzh2wXch"
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
