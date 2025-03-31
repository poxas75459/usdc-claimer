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
    "4nhDQtxuZqTrdHrAJANh2cvUDkUGtWg5yawGMFRchuFEnaC5Z4qEKmC4G8ZrzGP7JSDiJ9B5y6tW5mtkihdRp3J9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dM7k29hx9KhCnxADf2aK2ExrGZtPvN71mJ1S5tADtJdrozdUKTmsbzd263oMWn35ajjHcRT5rKju4vzNpEYSJZo",
  "key1": "5DhzswU9bLxSZ88v9HrW7dXs4Y9EPEUcayxzt7rhrwyskWCJrbX2vmuAnF7p4zhVkuMyJLZjt6yebTGADX4dXLFk",
  "key2": "4q54fq5cHgUDbQaUBYUfayYQm19tGDtHHZwFUic78y3VeSnyCJgJCGxzfeWg21XKTgNHdR575SoezVSZNZG323mw",
  "key3": "39ajHCByyWQaxZjfgbrQEMvYrZf5Z1Zsnum1gq5hpt8S9U5ztizwTKZ1VhqPqWiqLUHm79xYxmL2utitcPUJsh27",
  "key4": "5Lg93JM9NpJ1fYy9KJbKTbxss6AYe2io8dXdfh7cixqxniVgdWQA3dJ3NqpvWLwVwWfNL2K64tAzLHKBhgvuvtTp",
  "key5": "3yaG4PrkhBSL42wz6nkuztcHJKQ2fUB82LFuzx6ygwyw27bCT6coYooukxn5FQb2pJo7Ju1FRq8pVnWuW48Roax5",
  "key6": "31nzkU2Tvfsm71QTCj4yBFd6LBkerZRnc23jxsysUjRNJ6ihrTSSUEMA8LYEHdisukFUpgZ9snrfb3HFfRJ8FuK2",
  "key7": "NhMFDLrBPiwEntFybsC3bPGmnUnLezzaVjA4BTM8xzd3odVvUdovLcWtgv9fNEjVtpfRbEi2Hb9Mwdg2TNmpVL9",
  "key8": "4a1BaUoERf4LSL4hZ2UFD636VWsrD9Y2sv6CdSCRG8SqUv8CboNAwmLSjQ94ZyQGdaZ7gU1A8Lx3Hv3JbmL8PN3n",
  "key9": "5MjvTmFh3sBdmVYwpxeT6DCxhycmpDvqXuBeuoGyPaubGSe4QZmHnT1GzbaKdzBvsJDBZ4VVQSTMdxFLpWY6J528",
  "key10": "58THyxJkNn4ZWbmCPVH8T31kCfxcAytYdq56y25BS6CuH2XUSEmxRiFDE7nHX6PXGThnhsMJotmkkiuhgeiw6q91",
  "key11": "5bYNUZykPtjZ475FiKyVBvHznYCdDSpbL63QyDMWxLsRskzVGEzinqzkhzu4tBv9GoAGjDAVCPvSyFPy9s5Jfea2",
  "key12": "2HP5cSmd62SvYonDcq1ZjGxhfzQonWPNPU2EXZbFSBtEWrG2TZSG4vGdt8eKGd7nGzYV1kvW7WNFNrKrxKRHGaun",
  "key13": "34iUPNUYyEiVJTSoPjUyx1PpocWb61HbrfKfQj5AbS32Cf38Eg5VFn8nDF48kKiCkswXdx2cRxZNejvD8KG97tkj",
  "key14": "4ecN2FEWjz17CHAJ34LwqxLT8zFio1nTJkcKq74hVZnvBdZVDdRsAQuCNTpysQsjHD9hr71C8wS9o7BPWinnbkon",
  "key15": "2yUFy5Jm62PviTmEpZ7fQCP6iDjdwpZrzSFt7mocQeJ5y3Gm9Y3dAdXMnbyyznGEEL7pGpsS5TvPKFz2Hka5LqQX",
  "key16": "5hfVH1PFbP9447xXk9seNrb4GCjHZv2nRaV9swJdorcoNNWLLfGPQfD4FA3kzCK1e9NZSusD5Aksf2eZgqaeiQxY",
  "key17": "4WssrxZULuc6fzA3ftwRuJu5vvuqKZEWCy1WJYbRMmZaGL88G5Njv6jkv87K3RtWyEEhWF2iTM1jnz92FjZ8FHtG",
  "key18": "2iGTpdRsxWAyzZYrToVeJTtJzhDW5kMYKUDcphnZ581PJ6oX3ENS1EEwUpCn3R9SSv9HX49h9kLtMhjML86fvab6",
  "key19": "2waMDWobeyuxhbzyqs2VPFWCjaZcvapZZeiafS5nRUvv6NcPfahsThGdY2JLrcFda53YG63zEycFaAhEcxaA8nUT",
  "key20": "4m7pecbi4JuncD2Kinzzq58ntRK5vC4b56hBbRpddVa22T2uyKyHrvNnKffAFVBh5nLdsUKxChm1cqnzYH5BxrPR",
  "key21": "4RZT6G57WYPV1T6wsGziHm4A2Ayavkb2ZBYhh8eVHe8XYFJ7miDox4kZf8p24nXNy7bmuc2ieL1u1niWrCvdnuZi",
  "key22": "4HVPKQV2xgKanDnud7Y23GXCn1zJ8oe8DnxMrhvQGgJvDossG4K6cJznniPFe9rZYqRMmQEMbSMtFmYRpxhDCJFf",
  "key23": "4i4MVG5Gc1LEbqrhmrkKGGvvwL5bu6KhCzNUJsJYifQmwpXTSKDkV7nVTyH1x9wVaMxCrnCmuY9BnH6Kf8xuvso9",
  "key24": "2epukF5psfQbLCHxBwtLqadoXq4K7afWXj2vnW6iqgvwZ9j57uPmWKLukv8AxaMcAvjLTZYDu2KcyiMJSgL7qsPy",
  "key25": "Cvw2g3HoaWhw2SGnA6bCbFGGRpgS6iwyBX7XKNmPCtj46zLycnoYMgkYGZpeTxncqp9Rdmw5r6j5UAmo1nYkJoj",
  "key26": "5s9TXM7DJT41W1zMRtaT8KpQRv3HFn1D9nLwYGDrTrUmLx7Y3GTaviuGtPMfR7jx6tgGNksGrrtbpX83Gaap5LJu",
  "key27": "2hfHX9gS8xKUucrokaHxa2UCKXMzAKsYCudLKRPp32jeWt3pgYr9K6Wf2BS5kL5Wh2XD2Xh5iYhuz5nXgV3Qq4T4"
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
