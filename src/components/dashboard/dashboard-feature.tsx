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
    "2FDAW7wXXBMmX2PJFhQBGVHa1c277koXxgna9M2wfT2eXMci9c8N6VXAnVCqs2THcpu3xkb3VopYnQhiwvFMgA8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uvPXfFpxdngCUFANRzfBC4N4fqjmYZupGB2ecEZznUD8n2S79MfC5u8BceRMCBec8r7WKt6jjSXgL1tWj2indq8",
  "key1": "3AcMPTMSh5yVG7LdASVMLWus2P5PFREisELV3L4nok8DWHynF3sqkfcfAKLMSoDcbTTBd9czcoyy5b1YTRNA6JT8",
  "key2": "4mtYh8Kp9ooyyww4ELaEwcd6yK54GUtRaQe4Pp5hSGbjGrpcXaHyh5Dxp1WhTMz9McaZWNaaneV5MGqZMsqyShr6",
  "key3": "4kbaui9WecJkJQdbd7j6ptFWmXFRCxSyXQ5GnPQM7ftd2kpSaukkAP5Q66vhNPwPXQF1QRgeUGS7dDVP1TeoMtsq",
  "key4": "3uKnptc46vwaPovZg64dBtoEDhRFhY3SgZCzXXZxX8zvt6eXom2QXhYejRvfNXQQnP6oce5cCc6JTSiFMetHQ9mP",
  "key5": "24Na7SW9T8n6P7eyPxazEkRsfbYNDiFeZxX8m4iZQmgZcoHN72Cp9L9br3E1crZY3FeLw3D3sXfCvu5D4U3rK56E",
  "key6": "528YV4zQ2pBr7oP1yU4vAd2oEXppSNSYLXAp2yV9mhbaPZRVg3mWki2svRRZh24iMrVyPJUmQugscr1dTwsTri5d",
  "key7": "tS5yFQ5FvJgD9eXh83f34pNsNPrF9emLFa41cLk1QBdrtEZPgvW17q4Ro4ykWzA8p1BGwMJQZ6rZ4peLS47YPKR",
  "key8": "3omKJFTgWYAmieNFsfjfM6azVqhdcrDHxFtCUw8LjXBaCv91tpzkQteevyjtmLNJ2zbsD7F1ygxt2TeiMPTnq6mk",
  "key9": "2CDSHFhDV4HB3Zt66bnTzxMvJANLBvcxKNDjvjW8QUXK715DDfrQhBqMGSDtY6BEsxDVCE4tEzs5ERjaXkv1HB9k",
  "key10": "3amype5PztmnM8MwY13LfsXtQ44jtWzoaVcT2TXasJQMQ5LsV2TzvPmpCc35vZCwxusra6qj8HsfKD6m8aQHAomC",
  "key11": "52B2dKU5SUqDk4cw1jbEY3HZ6pqQJMHfaddhvjTdv9zboyAGsEbxq1JCcWJPuFikCgxauc9K64CsyjWnqWQ3oFPm",
  "key12": "4zYUvKFvSBCoGYKFzcFAnbSgcVwHAPnZC2eLo3RTohxARoWS84ac7z7THsVHWQhRVDJPqsbqNQQR7NgF11SKpUD3",
  "key13": "2H1ha3YUHaujxfG3aUKxdvGeXdkLh8hVBBFq8fxNT72MWuPZHgPMQZcmGtKNedqfBfSTmBjQ8TZNH4mC1V5aYZhQ",
  "key14": "32Fa4bed6rxWtyX1a7iwu8wGGqD4CnhXUwuob2rZbvspYQKKsMuv7jhyfhxPbTPnZ1xqjDZznUMf3xWeWAWjy4PW",
  "key15": "4A8ybV9v2ingooV7bkc5L4G1Lf9sr9oUapXaSdKTnbY5R45z5pJTw6BNWhd2B8Lu9a9JACEU3FW61u86wSuuzPYY",
  "key16": "4DEmBShmhD4hNUijtNtpe8jjb652LCDo4mihwq2LCFwZfEppAukmKwSS5QtxWi4uWWFetjqshGSrSBtTfRHBZ3QH",
  "key17": "sVzuqAXmV2bDNTkhmdHMJdBWHsuYiRs6YNtTNan9zRBxempGLK2pDufQDeuh3uuvaw2LNXzHYbbLkKruM9Jcpj9",
  "key18": "33TJiuXgjA4bGkLjLgbejKZuF7djVpBZFJyMHebAKwsX6KwG41rL2sBmKGcWMKws3jepDCEoejtJVaNkQUEC23ds",
  "key19": "5T7aCzxpAAXjDVJkDke9HotxBKbpeYYyCL4MUAHKNKDtqitqwqAu86uH747rbM67YRzoDHrpyee2Bb4TPiHg5fhf",
  "key20": "4rUJEqzJaqmti9JbUjuoo69iobcmd619Z6GEWUCkVJPL5xdrB9W4croWVJXzaqkHnUJTR161ZHDK13XRATyWj3Yh",
  "key21": "33Ti1anMfj9oeoWyGg8rp2d4o4bV5zXuiWwiNpKFXNs8RsxiD1PC4bEGjcriu5vSZu2Yi9DJaSaEFoih6NGgHceq",
  "key22": "2JBWHqh9GCFh6a3FD8eFAcxhE3YpK1gS5D6K2P7NrmaD8zioEWoCSvN2d1FPQhq2gbVih2Z37XttSFZ2c8fUZhkP",
  "key23": "4nkHMn9sB8rjs6xuUAaLDZE6pfDuBbhXRbVPi8hJGReKwvfV5whoS8W6aK3EW8JhYJ4gRTTG4fMoUJrdi4TwxUts",
  "key24": "5Vn4LXkiDXD4TEzh5S4zVaqqEG21EsavyLJkLBcaqneYVyJhQzkq7uNtxKPmTiuTEyHF32Lhjg4pE5zSLCmnQhcK",
  "key25": "3kL6AubWmet56dYbHSBSSpYLVG8ESWe5iUj5RoejzmKMgkp7PNCcbYMwXU7zh6F1bdrzNKub2NZKqA1d3ycnqK72",
  "key26": "3yBHZQffddAAoyqKsp36brTavuhGjNFBHFKbdgNqMgHwqZvqAb859kDvtmDFVa9DdrDNJVEq4DcSvju2kCWgp3Xy"
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
