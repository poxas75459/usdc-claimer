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
    "3ACR8gAjXLfbY9u9PwtTG3YehG3Fb76fFMampAbXnCd8SWxcTKSckNb1afP2g4EtD8RCECkGEJCNT2ZhBY6pWaWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JUid8au1mhQTZohsLQdEijMNUzuMbAy5hejgyH4qmiN3kncdg1CASFskTdYd6cex3SDPKTTpdmLgc9zLP4GBeR8",
  "key1": "GG6mhtDJovkdNfmXqEcnfUKPXNELafSj5rA26xB1sr2J872Aerb5XH3Kh7RiXAEbhX6cs5WD62qHAMSSLNcj9gm",
  "key2": "2ssKrSG5gRmX1s1X8JzSeasHhJCLrfaJEyjnuRLSVJyvftgpT5D39MqNBBEaQuyKhJYybw5UPm2hGpJ4jS5yZFLY",
  "key3": "3sEd5AU11nCXG96VYs7f4cjRYPxHxeYYRgqiotPN1VN2xerKLjwbx3e82dRaWZcsiNsWZ3zqe5KrPjBrqZcV9dzW",
  "key4": "2ZkU73zwDbQLBTGfPKA36gjxomz1wY4m5bEoXp9oyoXHQdUz2FfRu2HpPmN8VsJu5pHrsb55QrMaRhJtoc3cAfgJ",
  "key5": "4uvX1sLckNB5itos7P3vHV27dba4qmKU3XaPEjBzKiAvsTLkuVpJL3ynQZ2N4AgYCpUnGeA52ztwfLHx5kfSt7pB",
  "key6": "66Dq7Y9uM1BoYFrLW57QwnPioj6uK98FZ4ctZVx6gyg83EHY7hF5Qe9B7Au3bL9BSA45EDwgUBEYE3dSTUMmLGjg",
  "key7": "KfUBkWwBC1utmp488hV7eiQ5JEGDR43knjXeXmvnNoVSXJHriEBFtWZF9ZrPZxLuBp3NMeiBCVVay9nRK8tAb1P",
  "key8": "4kPsGtzVn4EqzBVf8QGbAVwwTAUiNZ1MVvA6uzs11GUGqd1hWBdp5huAdH2C4dkCg8ZdSEFtVMr2vJBkHGovCF41",
  "key9": "4Spfy3fsq2gY2D9uHMFUab1iTN2vFV78gVjqvygZcFCK88rHFXbdzRzpEn89uf5iqw5HGe7fE6iLKBEQzeTZR94o",
  "key10": "58J2Fk9NLtJYvUkXZJjaPgbrBr1YezgFMsReF4TFEoUQKsCxpGkVCiiqmNvtAgg8zgLpipbaAyiZ3NzK7AvhLHRn",
  "key11": "3KCwjktZf8t63YN4fpBMDcHHdfrB7gGBQiqYkyvKxyQ3pkk8u4yc4HaRzJJp3pCAnS94uMG25gk3g59WuwgqQ8fJ",
  "key12": "5ZYKYjgjcioHpQRUonJDPK3KoEDkq1PQnHHjctRrJfHX4qXiSPQanJ7peWLmGCyUctogTcYFYSQzVCzPhjMsFenR",
  "key13": "291pLYbLpda2PTe5yNS33BVhENDJZLt7FJXBXX2s5d46VoxuPPtpnoNfnvH1rAjjFn4meLSGd1DyyYJF3uoaBvr9",
  "key14": "5MKxER484fCWE3bLPRzw2pv31hNYo9iKpC4VxhFgQDo4pQMJopvU2vnwVZNc4TMuhvf2v5aFCZihbgsRYcnaLKyt",
  "key15": "2eZRcJtmLyiUgdb29GwRiDH9Vpv8peMX7UiZwiXM7xppDTmayZPrxP7EZNAe72BnDrE3W2amZwZNs9Sfo9TJVo5r",
  "key16": "4rb2g4X1hn4ZWQKbFucT3kjTzF146hdQ8rD367vSdqwyhEdcQEMjz8Mh9F3KLA3Q1YsAZbD4zsbtx6EZSTsjgv1X",
  "key17": "QjMkxktuxKXS5Sp2MhxiTHeA2KRixWukP93vnt8fuG68PqZmAECtmQ5QJ7hdvdWwWipNsjtszzwcedYpWFJNRXr",
  "key18": "4qxfPCw3GEJz3LxAP5RdmugVGpDmjSFXkSYfBik7yxxmUYbW9JoYZAtDqvaDdtNLGBWi1i5tr3aDxUHBfQpM3Kkv",
  "key19": "4ToLJezjLn8L6p7DvLCfBpa97ZNWCn7wa7ba3yTjUBosshXc8ev6Lky6HZqPxExozZ7RjeMTxoSA1cwFfkQvVWLa",
  "key20": "4XMCp5GY4kXR3YWZQrDtTi4uDnwnBywb2cMUjihCL37QHKd7iocWmP4ipNVpJ6MtWp1mxLKeaq1yD2fJcEEjFAb4",
  "key21": "4tXJo8qkYPMEfYAkmrKYcU6vZeLXxUQMzW8YzPNHnzze44A4aKG3N36qif8EwdvezFdYGHwGNRaTo8fjvkgdzKnU",
  "key22": "2LSMbac9CEUQvJuQUSdEqZuM5VaP1opfCAByxwgPNGVi3wQJTqkmfnhy3BQxz4JPVik99gXcuPegpd5ZUVozYeL5",
  "key23": "2PQHdtLs9GqJcQZ8RnFWNtV6PnJFZXBvaWF8TqHWw9FTSSAAfUJD3z8zcpxhMnA94HxcB4mResLErXB4vwZE8E6o",
  "key24": "2vaGaNHUbmJHs6DyJgYF4QhTKZ1QCB2rnrfYRZ8Nvyh6Yyk1QcnVsBxXYmJswYKP1tKTNTdscCyfn6HewaCGngqP",
  "key25": "5LYfcyCip3tvxRU5ppnRF8s9wDg1mYwy4uWjXs7ZKYjJUhsXCBK1DR7ZJnmhkWwPWuAm2vBaWBGRChsTycXwjkV3",
  "key26": "3hnJ58nS5nmoymtHqFFeJzrQAkyfufiqkfyTjBzjumDeUJ1MLgQmfQYx9gDBgKi7daFruTeJsujpFrfyj1584UxP",
  "key27": "s31sxNky3WHuqSaBajmavSkY3q24N4cKQFsQF35H3CBqydYwQ3eaGn7VTR6afYcqGxwbjR7JLBhptj1yPgWwDwB",
  "key28": "4cdHz3QFe1vycWTG7yBQWKmCT9vy6PHEoHKzeuR3ZTwjckrMFqvhxjWteACC8arrco51tqv2NUbGMjDZVJE5gx5c",
  "key29": "2c8VSGxS5GHNdt1zpBE5YqRGbqfASa7dWmjWskdh9P6qfkjGjDxEU9ykThLQ1F9g2ywKFpakDD3qVoTDTmfmyncp"
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
