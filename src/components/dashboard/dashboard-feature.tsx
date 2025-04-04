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
    "3exSVmwRVWnq7mCGT96uzdzMysLHWtsMpRhhWh1YmKYMQNhTAdUPd862qctrrVBBQen7x4pxd18raueGrc7b7No"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UbqKYJW7xk75NA1g9G4FzoJaueXfvfhDfz1ccPEp1iwNCccCdqGudrsajdw3GcWqMX9UWZvCwWArNQ4KFX6dEkB",
  "key1": "tm3pcHw1nwPjeWxt5P6dMFjXA4uM7HkmikM8BpVsoAopFirUvwHNDkfAZKweF7qTSYMjfYkAG5xbzRF7RNtvNz2",
  "key2": "2NSrAJLTZ1DWGhX66gTpFWm3nQ1Ss7657YZagjrYxaWGBkvW16svnPxJz6CLc4GzYmebiuQYrxSKxghhqaVx4Vec",
  "key3": "HonAtDLYhz6aJNkeoVHkbXryu62Kz4HVVkHGZP9xF3hDTNPCRQLUbmk5y6QhW6TCkKMFgzcp5vs1FvT97Hhnyci",
  "key4": "4JwAGc98cXuUsKqEDXLZV5RnCc3f4tGDsm7VwFsF9YjPXZaC2AJN9hhrjCnrr1i4EFjgNrCVC8DpArCfHCX2uGC5",
  "key5": "uDe2q5Jgs7VMdg2uBBoqxkcBJQkftsbdDQc9MHiwf1JzJYU5pX2E8AwjpQEQmGWm5fE3y7NwpwA7DmyBcNtmWdY",
  "key6": "32fccaX9aUKTKK2sPB9Z1xz61cMhmuhiVxNQaoBrKsqYtwaZGKe5BxqFdDfunh6mCocQLuSbXK6zpkox823qSkSx",
  "key7": "RCoBgdj5A7s3jWFYsYUkhQCYJJJArpxg3sRxMSqZ3VMHAj5vvP2RETKmeFCYQPpZreVjdicddTkTF5sNn4ZNEau",
  "key8": "4g2v5S9sFqXVBNVNqknGxVdxWvGXozitgm31kbP5BYV1VuL8FMkrhujry8ADBikfujxXsXU86KrmtA4RcotMc17y",
  "key9": "5UuRDej1f8jMq2NARqMB6bNKeDSew3L2Ni6Nh8uHFDid4kCjvJ3g4HChTGGnun94tVYa8qJ7ZS4Z9QY9u5dmPvrz",
  "key10": "2JqUGt6GcfiAvu1y9ztSVzAEUE6kqakHj43ZmWLDpHvp9hs3G2pBtZZsFq8HLSdAmX4yQ7vMoTuTEL1c4DMt7Fty",
  "key11": "XzV2BUJ4PtPnH4kd6i8ktMQDUWFZxt4ACS74ir2umFsGL7WF1cXxoctoTnJ8MV4Wk6UvViqvDY52pQpRHjqhJTF",
  "key12": "3tD6cw483cdAWEGZ826HkUpxYTJtmYbbgmywKyoZVLXbhtbXmC6XiTkSnhXRbAuWopb8DpdjJFp3ugeHydDRfRfn",
  "key13": "3PSR3wFd87BjpFjWL3XHR7gDkJxNTK3pHhMcT1gocPR8uPsetTZTJCpWLHvfkTRfFD8UFXLUsB4CmRK6FLkFnAMN",
  "key14": "4UNypEDoAHD8qvwZwh4Hsuxn1nDFPyBsp5pHFgvUos5MZoJVidjwTsEwicyxBeS1n6LX3x316TUfSFfi7MZnBZ1N",
  "key15": "2oPzWeeQToCsfmEyVJLwMhUgLRjjQUgZxAdBg6T6d1ZAqmxLmWAuR1PmH3ebuFdMSyk64D5MpjgYNieRYP7zR7tj",
  "key16": "5VRL6wEdKbrZ8gEtMZpwEeffcM3TwBRvW1rihjhJyg9gmbscBgCZ63Cvz3mL26FAJrfKZvbUd7xm7sjaVXawYYbo",
  "key17": "hu41PbDmoaWfsf1Mv8x1z9Xxezrcr63V9bms3qSpRCw5T7SHcBAL2n13jgmSpB5QRLZT6WBAZ2N1CVfxufktjdP",
  "key18": "UKJMN4tNFfYNRGsEL6W6KafqP88bSmoiagXoMPqi8UjZZjRZcMJ4W8teBMKSpECpXp1HivS3AxYrt1We922JBUJ",
  "key19": "4Qz7pqXg3ft4FtY39xZicJj67ztnz57s7gP7tuEKRgrgCeqtKdfbU8yZZrfRMnwvRKt2QkdsTynoFt8pLBBwv8Bg",
  "key20": "4hXDDTSAFjFJq1HCDy88G6rR7XW1o1A5xDtgKmC7oS6Pi7jQiYdstRfbvfgi5FxD8QDgsqrkGUayVeo1kZbmh3gZ",
  "key21": "5VwL6b5V9ap1151TZgbLSnPEqjdw8TRz5yDaDxug93785ZEDvzjGjgY4yK5YN8SWpDVgQLGN9KaRTcXAT7MZoCEz",
  "key22": "sNRgfHVbt6jbCfXkjUGZ952uqYkQTKhmTi3PmRYC8agx2xqN7v7yFdDS3F3J74tyMwDvdmkN6PQFdmphKgbz1w8",
  "key23": "2iXuU6r92pbjfDAJ4edCqPpPzLx1CE3syT19L6iAykW8dePvVirw5KQ4CK9CjYdbje65Lk7rg7QETS7BoS1sicx",
  "key24": "31eK2UrP5Kcvro1ccEKMJYLcFFYqbJkDHeUrLALkrwJy6GKPUzJ2B5mAqSpHkxQYwgPp72J93gbARkXcWjM5KyrT",
  "key25": "22LJExqrRmmgq3aJiXfEhnLtzH8p55Qz1Cxswb8nmE17udTGt2oh2NRtXaA3WUtm7zBx3RpHjqVkXCCkaR8s1EgS",
  "key26": "4hKXu9JNtkMqzeVzNuXjAVphAaFdjrEQbe2BEpRexKY3XVCrUheudmdQEVHGxsRLUPVpGNLcmt1o2SGPinYfU32q"
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
