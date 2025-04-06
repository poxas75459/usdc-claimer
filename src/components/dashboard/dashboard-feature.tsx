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
    "3HcW8eZQ4o1ixLAPmuPCddNYtHUAxzn7SQBgWbssKi6UPkUWF6JjdDqXZdhY4Wga7o6Y1qtXd7crbAqfqSdFBvvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cr4MqF4QXWC94VQLkXEmBBEkiUsFQ2veQ9CLo4TQ9QqQYezyECJUvsGt6D5sYg72ysz3XFCTwZ6M3C6tnjRRQtj",
  "key1": "4VxjL48ZvtYCep4ZmX3GKtnnLJNzzE9hakccGAAP73SVj3JsGJrZscJpHQF8CRfn7Jx95idoAcma6pozSZMh4D4k",
  "key2": "3ZBhGDntG6bXJQw9LRynjB2zHYUvhjN1Cg2SSfQXfpQTaDCY6ut43kABb6UvuACVTPk7B2cKBi1RUyuGbUjumZFk",
  "key3": "3oViMG1wSCzBjHju6TFKoEgShJSUiVrBXCawfNk9TxpiCH2ChtjkxDQk3RwQsf4STPyFR9waX38qtiUmxMPejFzM",
  "key4": "2788k3NwUi37649fWnB9JDyBGkzbAHKDjog5Dx9yWnTB1oZm63cDqZDURJzGk4EcNGSkHp9dqAqW6FfqNCvEPUDu",
  "key5": "2Em2sdAwb2unvGJhkq25aZrBtPh34BV83tdogmov6bDeC8bYhGs7GizTsEJLxzGtJr9mqejeSmG6DBBuMv9N7GRj",
  "key6": "64JGaVELWKydmNwuejoPeR4JCyJtwbDvG8J7VEEieWx3cg9bHkezQj4eGB6Zm11Wjy8NfGAWCnR3Dqik2gKBdNsz",
  "key7": "5c44pg6nL7zoYTVnjrqQJn3vypowMzxbasNPZQRdv2PaXtHdqc9cSMV1aZFyeFc3SxM4DUAFVSHACd63ZbJRG5nK",
  "key8": "5UgoxhscfiSewQmCLEUjML6kRPuG18DgQPeTzYfxqXCn7tQFe1MzSaSdouB53xF41ZPBF2phjaAFJuha776fHEtr",
  "key9": "5pS8xW9QjNKVXiVW21s6VGyJXq7PjhQyTTc9ixvTZxiPsNsMUAwCkz4p9veaxp7GKH8mDPuGauDLMQJCcThQPzKY",
  "key10": "5QGr6p987WNDujEPLtg8CFJvVxhx7Fhj5TNRDxEjieEzGyGCGrantarrKpUvBB7oeQSTdCUpWg9KjMyqQMn7AjRJ",
  "key11": "5wCskvSTKEDerokZ9yf23TTV9XaMeWH1HGiXJ1nneJyZCq7hguT6fNgGrN4BXKpzRjLpk5FXvREiBfCQgxHD1SUN",
  "key12": "2RZVB1Tds5fQ4ibNaa71wWXBpHNtshNiKdFq4aQNpFHcmbU8uDHbix7R6mU8c26aJdXQ7HcdeyaXhgG6wYUtGZcf",
  "key13": "42bGcS9hvPw3hncWDsKa2H2DbBTJAzcLkQqtoUaExApH9XHnzYmCsr9s2SdFUiDfwMTgNkSiau1NtZvfEsm7VEWd",
  "key14": "VDnNmP4jpEjLQFoZnoUVKfY1QJC5E9QGZPsLW5j9FXtxw2XgTAn5EsJWmHKhxF8yVuyduQFShBU814z6ku2ico3",
  "key15": "4b1XDAKTfh5FraX9uefa32HVojw1fe5M8Hqoi47ADfv8VxsZZe9atdc9NgKmDksnuH5dVmAynMkTQ9tfxLTPPQR8",
  "key16": "Qu7PFcSHSZ1gSJEh4grccypXKG2YyY9pZZw31F6Fdn83NS8mpUVkpzPiMka2nEA5po9WiwHrtjUWemk9JLABHff",
  "key17": "BdtYusTdjMBq9PMmbxyypSpQL4orRHZ6EfVQzbnNM9GMWLBAqJrbJdKTaWFk6aPJvWnQuQH3XE9HrKwQtNL6v5S",
  "key18": "45RXNY9aWasCoGkEL9TrxLjeAkVnKv8S9njyA86dhhdMmqrX7EeCpxrtTrW7FMBnMQETQMwPNCzw5589gq5SbgXj",
  "key19": "4gvrepAEou1MXf4TGRHu3sA4PhudfhRxJYAoxKp4ZeDrJ2LMkknidHtpSik5JChAYi6Xm8Uavh3zDBr8Y3bg59Gx",
  "key20": "32jEMY6dnfDudcezEGTFNM6mE5GCmbLJ131aAq8JNS94fx5LfjLTuQFYT5Y3r8mJpGZhJ3enzeefQtRcphPtM9xv",
  "key21": "4x39XKSDQom9HhoP5r4w3BYGZhi8CUcGjSio1SMTca8xJet7zTfEDgXmU8G22hNmBUKNjfBidsjtzrqmdzh7HHJB",
  "key22": "PUFS7krJNLcgro5rhjmoTQJCZ5oDkkxeNVp7LG3GSygJD6cWre5Nk82Hkxzne3KjYdqiMbqfDSheycVzAjpx8tc",
  "key23": "BZhQVwHgyFSFKYNaqGby1WK7qJcjZGauM77TAEvFpDHgyGwJsWCcXrXbNnnRUZaGAuukGjpFyvxsHuS5s2m6ckr",
  "key24": "2LJHXUYPiJH4dg83vGCdt6hV7HTEFKXkipxKRRHzg7abw5sYiQZC5ZRwQBDr3h7NrEjnG3cZq7LEoMmqYPxTLoo6",
  "key25": "62XHBrpU7HaoLF2UdmGYmsAV43kFTpRAKCY5x7f8ZgDsoF9G1hcRQKJmC2PdfUBoSvQbxDcButu2zmVAvo7DYut4",
  "key26": "4UJfnuYRLS6SPHXa5rGVTf5kU1KwkuqSRV3dihTeozXGavNRb9ZgXR9xpfmMbYyy5bWCiH9w7isvSzKegj8vpXg2",
  "key27": "4Jebt7P9M9v241VJoMqEjvums2mdL2Kv33Ho67yehNhPkeHDvAMB4fwq7GRXKT6uE3GztfVaQ2fkYojURd3zLHRp",
  "key28": "4kv1ZDvT6nZYKLy2e868N7RHbADyRJVE7wgRWuwH2zkLAiuPiL8wUzG3pR76rvk3tGA6uBhB3QfuNjQpGaQpy3js",
  "key29": "WnAHrVR7gJL8PPcT63tqYiSgHxqrQCrjvYjS5NfPtqfBDNiidEuR1WC8KF9mt63SNnzy9J4mH631r1ngQcsTcsv",
  "key30": "wx9idXVWrLWSeJc6bypsQj1wFeJhWuoq3U3dtuZjUyjNoUfjxqsvDzB1sjUWKWfwG1oJsTo1vFkqVzLAFzGHJy3",
  "key31": "3pThzEQfBH59jeyUNmFXmpZ1hgumxe6Jxc7eShbJK7v7oP89JfDwnFaqe1w7nNRVAKB1WPwxR5zzNZ8n9NKBjprA",
  "key32": "2xNRmXrrUaijHN9j29bt8iiCXJsiYXtvbMYecJAfVyu3ps9R3rb5fmnkSuxCwL1ScGsdQv1ATfB8vDFZNjz38Hsr",
  "key33": "4ybnhrAsLd9dvUugs81QhYLh8CCGe63VyMTTYqhwi1edvCSN5KkRKsFQyTs64yxVFDiDQjKNQCmHx3jHMtzVtRdD",
  "key34": "4qRrSacopTrXbPczoZZmxvRzLHyi6BnVgHUknjKTcxckJu5TTn8fGJuCMx6dyhbtpXTybRSauJkQPBEx86Z3DrnC",
  "key35": "GU4fm4KGw6ftS8xX7YbGCfazDcuaUbAhCBLhg9vpfhzMscL2tsNPBgM849ZSjvWE6EBTArfLXRgPkTVHN9N4eoF",
  "key36": "5y6rX1gwxoqF6Axt7ntoKjR8JvBPQJ8tDpHwoyKhENSyJQEqEvM1AMgNkr9UjqDFZNR143d9bMAshwagwSWJq46c",
  "key37": "56C4nExqGmXoCXE9RMPGZfgcTNAh8v7mJqV5AS4uRzMKDtC9SEVPZhGFbhi1uFfNUqwPoWtP9kafX21gY38XxSYB",
  "key38": "fbkc9WWTysQfaGWKejembwpA22PUYcMqz3Qpv3uboWUyxiXB9acgdJESYAAeQYezLckfV1dYvq5e5E173wLQoiZ",
  "key39": "4BSSPfKCkcE5RUrnbAdCnHLWvQQFyXAQzGLMTSAqBpwadZmKJZL5BUu4qMgASD3gtaXJ286Ej8dMVFJKNCVsm1ns",
  "key40": "s4ya4vrcgooh74A93TeKK3FgsXmkawWUZKKYS8WmQ3r5MdTmt72V116a5KQRExNbygecxGbuPcbThYw2sDBvjVY",
  "key41": "4qZ4d9xUh6WYPtxwvMsooDnojvibt2zs3wEcGT3Hkyi2LPmjZeZG6KQxkGHANT3m7w9ex489ePYtKjyqdxEYbqM1",
  "key42": "AnmrbET1fzQEikojqquQgD2kkMGcruo18KtoK4sX6atbSvGj1BwUsHfRL8uggnECzrz7Stoyd8N7Chs9Tbyn8Fx",
  "key43": "3FJYk4AVcbRz71ng2ieHQdJ7VS4nUbrAziK7jGeoThf8BFTERdBDUmDizXHV6ab8S99Zr65F3Reyr9Z7x7yeM8sC"
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
