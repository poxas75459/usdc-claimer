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
    "n26mV51PG9a4KpEfKPmEGDRh5KVwbhBcCqoQN5wah3c4M62EsGqGm7HhdLzmB6ZybxFGfSa7HBPFH5WoHkQYiJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iKt95Y9tEvCca1wMzvHC9mwCpFSWH2Vpbfj24bxUqgrVR8XmY49sppzXoWXveXQEbhxt2sR5zbo2gLa8RckVkt1",
  "key1": "5JVUSrfynDrYNSCT6NjQispfK7kRmDH9UWxt995vQ6zGjkKzyDa7XyLiaCaA6cbVLcQpzdNTS4iwaJmdaqpCXpo9",
  "key2": "5m9ebHxTkeZGuL7DVHGy8WJ4KHCu4Cd4byXPif3kydZvJN5hEUatr6Jo7jh3bxUQvupis2Ury4EeQHfeRtoio9FS",
  "key3": "62GDuDnt6QbXPWbRjHkhckn1zoUHT3gD1Lzraz1oTJfhcgBtnkN1YuGLUQEKZRJVW9UpKMCHqyFc6WJ2cxEPtX2o",
  "key4": "5LVAxrk5wBTRjNKw9FBJiK4ZjKvjkmaz2yvpq49Md3bQTA1rsfKWcqvrEy5nuhHky82aff1HiBSBJxNLPA5BmCh",
  "key5": "TQjYXgUXaPzF6taCMVDYCsvWToqhJ2YRomJJpX3sTQHrdb6Tya9yo3XsNrgKnMWpoD7t19FU1o2hvRruzGdt68t",
  "key6": "3Yhg4JqhjV4GxS3cfakBMvNsUjrq1D1PQnYxMpkZSxLEhbxHhjBKjVJbN4UfcZMPnWxckbkprQpsyLQL2U9n7zLU",
  "key7": "EYMjWfL75UN75hCQBhoJMsxRSvyZ6ZZwbtjpgGHLvPxwdb7oWATx1PER1iuMPrY4URCwSZnMqK27kDqdMumYSwp",
  "key8": "3UyUwtknCspa2t736QCNJtiRZPhzrk6YpfACfE6uX8Dem7hBfEKuev98dJbyPLE3QyLH35GqsCvAxrDf2MfMEvqX",
  "key9": "5F2Y7kHoWgyUsAJAL9KixNkpXbSignM7ktgyxyC8v8TyzVmbxxERffU859ybVPHXxvk4hrfnMLRVXdihP3FhAHBY",
  "key10": "21B1XKzmtHGyqFpncMk32ngY8fTsEFgZtNEfbWEPTQfWbn9g5QSs8axA4nqAoMf8nyrSqvAfMK7VyBohsgBepSvK",
  "key11": "3yu2WuAAZEncBB7j2u3EVpR7X6ZNMU3ZjmWGaYN2NHpXxEmbd9yfuF9HYvgMcStmzZBk4GLELCoUqQr8B3NThGKT",
  "key12": "4b7qShLTNHhy3LHeGgtqZcXaSmTBxT2hNWrniVgbavK59fE2auiubVbwF8Dy1ACwsTw4y3gircRFWNbidbudAxC7",
  "key13": "55yP9haSUhyJDo2dCLzaqdbdLc5mX8xyc9Rk3PX7KUD5XYpuK7hH21eS77pGWXRvovotH4vy9SR1UreHWEGAqf2v",
  "key14": "3WD69qqWTw1b9w6Z4R9bMDMZ32rB5eh9PDRDUczUJJoTTpVG7FitAngBvVAke6ex9FQdKAjh55rGpzECBGB7qAKq",
  "key15": "5a3LZZhrW8Jmey4aEsBmRF83Xa5LtNpcC5nkpDRGLYPy4Vj4q9A2nLeEBhr4SwDE3yB77uQueuANRA6s51xmwaYh",
  "key16": "4EPWQ611ACdbc3GHmyTJMzWJLM6WNYmhmrFYxNjd1jkSp7NRPghzEpRMFZ3ZgdZxKaxiKbJuk4EhoSKx95naWcL3",
  "key17": "66XBWcHqV7VTF36FvbnCopVnDBjudHJJhCWoyvkTtwUwfDEsg3eH1ryPQFEPHByouQ6ZHUovK5eTrFoupV4Js5Lf",
  "key18": "MVZiy12qTD3eDNafQ3pLKxahZGabQAuVHFEJAV5uSzJjuQtQL5WWEqRbEhay7Q58KLAJv9nkVgZ8MDWJV7fuzbW",
  "key19": "52XqajCC7H41uWSjJTqeCSyjJZqebrHiSguKsxgyvxfdomXERwrEoKY42zppypVzVb3GkU59Jx1vDiPqvFR8Heno",
  "key20": "3RhU4xpWNHvYwSyeCsfFbhczC2GUoaFVHcN8SMTt86JWKZV8qF1FncPkJu1rH1dRbBtRyZzeM1VsJhbfuaDnjbxt",
  "key21": "2uVh5EqYHJFGpVtTGrMY6Bv2C6muoohiNNz9wRTCj1TR18dtqGgNCmmeCqvCCNMiAu1EyCL9zwcWZAv2rqqGSZPi",
  "key22": "28wd9AWuek51Cn7Fo1Tpva6uxVggVhBV9JPkgxmP1a5QPecb7VvC5Xx4fRH1yW6JLs5ecPQ5PU6MQuaXg55t2Ufa",
  "key23": "3ven166LmAnxJCPK1qc1icaNwcvC5ArCUBHNRLJGGs8mZHANuLUTfC5p7edtF1amQELEeFt9Wru4VQoRc4NN81Gm",
  "key24": "4EnR26SB2VuwurQLo4qDnf9uZ5gNtaQxZUwWrvoLCpoHU63eHZEZFardQR9hcS2jLML82Hvt6mSvRBZspdFtLBcn",
  "key25": "3gHHZFtSGnehWwhtbECMjkWk5unHsFoTwqTCJpar7bSTGMAMk231gDZ6rdyPbTyTSHJsQ25ssC121avhZrzLsaA4"
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
