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
    "57GWjJBhe13MqZHZ9TUXdfbPPRohUnZiTacprDrkfyQmeutZBeqHX1UHQ1mqJtmYWqycBsMvNRdxpWj2b6LeQ5ZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QE2UsFbXZnPtjmk6unEWjSXrAHRd6G8viT85dSeHm7BVWtviGSJSRWoAxXvnXuf47wejQ9NB5cmc6r8RDrDmtUq",
  "key1": "4L8SxTWKFdinCK6WN2eb6Xg9oL9a6mWD5k3ddTEUxJKaHsBki2exk8PvMHg9S9nK4SBTxX8dPME69rnjUt2EbtVR",
  "key2": "2omWeCajA4S6BsMxsgotJqz3DiSt69Nqek6qBJHU46g6JYcFXfrnrqjJHfm2MsnpxDFAgvmiT79M45zQ91R4WUa5",
  "key3": "32tyh6Wd3QxoaMYTDKdgJWDuSGcwjjGUoyXCYQw9iEK6tHvNvbqvWWWankCwHruJMzaeM9WhX9oVjzr8yyBq6T9J",
  "key4": "2LoMiPVyZFS6svf39SwDcj7K4ZendScARRrRYkmdJjwaQxKe9Ffp51cwRy5WjEA17w41AWj4XBtQCu9yfy5Af9dC",
  "key5": "5BoeycNN5TTnKZQtwR1ZTU8MsQTU7tCEyhXD832eSLvWzb2gwfUxRdw8X4dqoWeKx2Js5unQGBbLUvyd7pznGjNz",
  "key6": "5jnBhFzxhSnYERuGmUFA1XphdFVfDQXrrgijk4B4xgvHQxt8uBfzrzfJkPAHWFpkgLuLNj4TsyTnivR8EFwWZEMC",
  "key7": "5fC8Ab9SQC5zTTwWGiNHyscC1NcDbDBmkQkDBS61Bdc9LPyoG1ey81K4w5yTSAS4nBbq9U5ZqAjW7Qskxkt4VTG9",
  "key8": "3X3f8NM24KgBCxN8PGGipQhbBwC3cjDvKPAzbrY68EdX51A48Qp8mo3KjxzAamf2QUzt49bqp7tSms8Cu4nPj4xJ",
  "key9": "5oDi1fSP7c2Wgzcu5xrREQEGeyR3THTKv7SaEyJK5HHCHF2HqTaP4xZPXFjTRyZwxiVyKQs5ZWfybGNkdmujnSJQ",
  "key10": "4vjkryxsfQuKuVLAgjMJLLvCbXNjyTghTui6YesV1BDKYVk2aos49wGYnQedCt4661sWeTT9hTvy5XKY9r22bDje",
  "key11": "2op6xjbtVztbcUbjk2nbUE11qcAqroW1miqELimTDC4JAQAFNXPZBXzPuHTf428zWpPGVGAZNei1GSgGUvQQDP7a",
  "key12": "4K7bpfKXvvRzBxcX5ERQW3LZAtEJG56LGpUkqeZkL4F85PSwFMVkzGFwqkCFuPhhXyyHd3uaCdMLGDkQdL5qaDU9",
  "key13": "3ehcEE1HfDcPLEx9BpYx4Dn8CY46Pxvk1r43LUHgpPVYTpSfbbm7Gfr8iJDXorfEhjQ5Vyx85Fu4L9HQUPEFK5eM",
  "key14": "3tzTUTS3hWGWjMcPzmxsfXA5SQ1AjwvnoR2DJCiRDwVXSDR5ckyd5Vsr7qGpojahuNYLi32HsCyrdkyrxyzGyj91",
  "key15": "2Y5tq5yxDFyR4xA7FEVMDRekxu2HyQ7KnR7FKfQaWXgxaKLnhoeZyuKqnwhoFr7uqz6ZjpwtofwWB3SS2aqDt1Qo",
  "key16": "5cqpwVv6m4bcZFgPKwrZoGQ7sbNf4MeQTCQwfCiZwh4uhZwbf9qyZehVwsNdZtoLmHLSemZDzG8gT7w8S4UiCf99",
  "key17": "2BEK3hceck5saLreRhE7QR8UwrP1eUafB2covT1KPdms2ntmAyUxP5eXMMtx1q7gnNL8hzD6m26F9yGW2vv5qF3A",
  "key18": "5F19yp6sipVMHkAZ5YSZw98jvx3YGeY6o3V9JEVQ5M97FbzstgWULPoV9x4YZY7TUn2EgFRDjhaXabd8o6EaFUQJ",
  "key19": "EJCKUvudE9uRkayN5MWR6HAT2HH1ubZE72dmbzucSQBhtsKUVUugrk9bkas6GTPiLXsw9dafBmHSotM4mo9o17Z",
  "key20": "4V5khbofhtaaWY3GsTsuj4XejJDAFcdAdoKhCYLCvGYhjvwASsmC68XSzFmz9nmBnt2KTX1UMgoNeNJMmXLu8uj2",
  "key21": "5Ffeq2tAqWFXrqPrzE2ubAoUJWbXDoQsvgvb2mmNGrZYuqA2ke46nQTXXU1pcEFj7ohkCRdeSdzmKuYmKosF6Efh",
  "key22": "2pr1ai6QJ8iFh1xNpZfGYmce9g87NCciTWVxDYGADyXjhSDNYDy8ixetUQMUNNDGjeje8hvyZ9omQ7Px7GDYGJJ9",
  "key23": "47Pv4fHMYzcYjs2ZeKKaH2KnDX66jpLBAFJFkJ12KHvrYK3mWgCvi254Lb9em8XQgbEwLm4WSso3ZU6ADti3kdCq",
  "key24": "2rxtythCXBKWvZo3mfgW2iadMw3Gyz5tRZDMZm3fwyKxcqNY31eNoFWprTkwdhPk2j9fBdwKL9TS8Nh9Nf6xEYFi",
  "key25": "2m9hrqsVAGLs5c1huqnwChWddBq7jaBp6JotBhsJQxDmj39tjd6n7sDnwKfUAWSDFXuQBvURLbdPNKUGvRkcS3pQ"
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
