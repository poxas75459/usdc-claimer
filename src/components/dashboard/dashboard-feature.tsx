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
    "RVFkUHDcSmDzA6W2BCvevdM5qzVVNt7TCfcmRM9ukqPVir1vDiegFwaRDVXs8JDjNB5h6A6yk1oPt324XotQAR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f6EYVSGDqcBMZXpAhTrJUFhXrLLYRNv7dhSVTtiXJA9JUs76MtPRyaR7WxnXfMFJMD3iJ8MYW2RFu3URJojHTZV",
  "key1": "3KKriRNeMJ76yrLnaSNr2KN1mzxWvRdo7oTtELKPELQEQCNEVnLkUiMLvHWmmby8hEwV42s31QSG1V5v8ZF6CNvX",
  "key2": "3LQjmHF8zMvy49zxnQRuo4iJo9fmaDwZvz7bMfw1YYT7M4zAqkMgeN18DPeqQQ6cd99fSX6WELnfV9tS4KZcgUn3",
  "key3": "4yoa98NxAqWNPiMAzwjZQy2nLSD9H45Xo5iPhYCAViPXqnqweSxkszNWHUmQebCqQWhQzra5mtMi9f9u4dX2T8A7",
  "key4": "KXrDYFtBJw4Kuxp1VQmA2MVPCo3k3Ncywb1AsTgJnB2je9xpyK7kEmxoo9oCJpcSjD7mttDLC6NgPV7jX7FjDEi",
  "key5": "4pDqYCDnJYnAXTUpfaWHzhrMHzKQ43RWtQMut3jzeampw1XZLLwz4VwGCGdnJnPyQzoPdpSXHemoz66PAzwmsJkV",
  "key6": "53NZ2YTGZNNVNJTWsG8JhBFCTcYZRABywu7zCPjkteZkXNTFN4MvoXUgmZ6Ukqwwm94Xv2Pdyehw89shxvuBrbqV",
  "key7": "5aPi6SptAmkaKDH5BrBLfzDoc6yVPu2gQt1NctanzJa4RVJUwuBLELGubRx6mB9MWbvQsbhJoinmVWJifUsq9fPH",
  "key8": "ujdYSn9pE2mQiP65WtdRH71x51vNDwpxY6GoB1U2wfFCDif1BsDkkXUqYwR5WHux5g1QTsjNi4zJMAj45s7Ay3J",
  "key9": "64LinqBoK1SmA5hTtV2N5PeYtAxA82bFN9f3Ahe1JaVRv4HXQ6PGnCmaDE2oqPUtjzyENvF3CBLxEjoW5B6NS7DL",
  "key10": "5NKWf3WZinycWkiThq7RrfkLyGePdSjLbeyVJofXKgtHpN2wfEvzPu59tP7PHWKFZ1ZY4nc6s2XVWPbv1RUYPgEG",
  "key11": "36GgJ89fm4GUgM94XWtbLPXpYdMcN3VW7o2TPoG78ZbgccU6qvRSMQdm6yxeYWbfG9CJFJ9pKLETr4epokRVNF1J",
  "key12": "4sncaZQsK6kWiRWEPf98cuKPnvoUn8cLMEUWKXjsttG9PsSUUwX8ker74jb9F2gFeuWNnM22eCxuxfUnGX4YGnRr",
  "key13": "4RmExhjCpMkw4hoH1fhiHvvvC26851MZRzSREmCb2VPAttiF6wCvLL4eqUqFstxTZG2X7jQfP8451YK4x5UFY5bp",
  "key14": "Ko6rUyQJAkQvPH7wXHbjRXgdZgRw1DJgTJ3mMx78pj2tEQWH2uxgBtn8WwFsMiMVd5XZ5MQdAFjKMbC9Hm5rGsb",
  "key15": "2K6AoPzTDducxHRKgVCtBoyt7QR5JKG8cmz9HMhEVf6d6BfUU1DmK8Vo5u5b1fQZGYJPUrznkgtF5U9ZKunTHNc2",
  "key16": "21gYS46Ti1XH1thwDCBCtBz8T39tErWvS3SGNdJR8kBQNwaAcehjKBu9u6CDAqVTpkhs7DTeXiJcsK3mU5qGmiFg",
  "key17": "VRK9W1v6PNVDMXKMXcc21NntYJ6wXZqFVFcVmj3jKd6auWYepLXAZqFHf6XVung7SdCKDNaxkKyw6daBSQCDdXK",
  "key18": "3hVzsvqQVrWCADCKATognirSgby4zaDm7Ko2btSNSRk8QmcaEre7SJySL8ujjUxgpyNGf74U5GD912nEkBSQ9Taw",
  "key19": "5zFzNpdUzcHMMQjdZFd9vFYouwB3usEqrrBfgMP5vkayFLTKE86t21owQQo43NKtiXuzjFnmqa6XDx1H9nLDboyg",
  "key20": "3us4SeiYr26s6u3KBfqiCPfpJDVRaKzosiAcEavGsur8zvkdKvFZMfiiTqmzBc3YG5C7LyoctsEHjMPPqAQs7Mab",
  "key21": "P4iSKXcgpcw68QZp6z9kv5fsYzyrxzUFYtdoqtDffsfdoVwgLQSGHJwMDeVfeoAg3oRpGnnKcLSvQkV2fE7B3ut",
  "key22": "5Xcvmq1Te9MhdGt1LjN9EQyJoSZZUP9BBeZeLMhMMMbhmGaW5fqa55BDMAjNoCGrXRdYB1PRfogf9TXkBMLJUWhU",
  "key23": "2fURT8bHjkx5SWkyRXDoR9XXVq3vsDv9mXmQyaMej6r1hMtkZjNeJuSs1fAR9qB6fR5G7p713SW9pA2xjTNQNqeR",
  "key24": "Zq5JyjLh1BYuaszznU4WPxAVjJAryaNFmpAyJ7tAAxy6XBjpXXczT5F3om3QL4L1dtHZDBPdgsgVW6q5deUP9Yk",
  "key25": "4Lnysyin3QGnJJHLxBaxEoYaddXykXRw1wVZVyZDkwa7SfZBT2QDLjjB5AKru8HhHzTpEYDEB6vN48CjK3RPAFTj",
  "key26": "4wp7s3MaYfUbfTwTAqL4LFc9NrTGasFacomGyw8fp8RcKuobBuLpBDkDN1PDj4aj2J7uCNiRyyBjs3oSctFbRZ1h",
  "key27": "4LeVJYc1WZEQGQUTZHfGTvspsCJESv66kQkdDCwdq6moukSZgUpEEQnR3aAHFyGS7Behtp2QHVgwnhJEEKtK2VuT",
  "key28": "2WXGS7SxwsbYBhyZogzQxSgA3dmnqh8GnRdzhXwsByT6aAkyK36gXhmvkFiuPCy1rCs1quRzKnWPn2YZaGsYMj6J",
  "key29": "xHUefg7zh3QNFJLvaKiS944uYLm7LSZYzNDbrqBJrhwzsD8bEDbnALzNLm3hiwLYJdzFzmmmp8ZDw3nD5homNFy",
  "key30": "59GNcdY4Gacj1YsN5iQTzmMvFPeY4pjzuNow941sskXXA5MwZ1WfgWbvobZW2isoXr4duG3fi2HbMubsx1s2zRrz",
  "key31": "4a1s1vjDrpo94GvEVB6kVKBNyePpq8NWSr22A9sttTSvJAeoPSCTatKN5TK3cshxEKrt76hAK1Qpr4Qg7iZjZ4QA",
  "key32": "31c9fPP9tL3dWHKiyE2xuatSG7akVwSKiiMisvgeLxbznigCQyerUv24ngGm2mQH6udJ428UP25u7ytzBgdhVuXa",
  "key33": "58AZXhWqr7HmpQDygkUuun882yg9j7jc3Cn78THZu899ssYth1njW4dhBis7qN6C1dRz4fHp5q1X7ZaSMVj4GMgS",
  "key34": "46XSyLppEQtutMBkh945oRR7s1yDXUW5ZVFXPYs7KUNHG2wiVi2cDnyE9S8dmKbLySjkDRq9aiskHZyETG7TEjFA",
  "key35": "5TpuuhQQ18wQox6P5kwKDN6qd6dWS9PWwp72czFKNB4hVBwxipkboUwhNqqm3z5TGPFU1CZ9jqsCRT12TnFFFGm4",
  "key36": "3jYdQMGdbhHVhZ2SJud5wgxrrvbbbjA8zhYthdm4W7bmDufyRXQXY5VgS3roxxZSFumykMtc58gxL7QLUSh57dRn",
  "key37": "3RcHfvVtcCKeyc21rmrXhyAjWJzXeaGkZreAG7Rr8YGpxgDAfHurASJqycs4Q1G9HrXDPDTBKtM2yPtYFa9xBvFd",
  "key38": "4bA9V73hJMZwfF57kKkqYQ9uNnAKtxXd7uwK5Bng49uCZxAHKEiMAYfwRp9N54zvsf7ADaJZnvA5QLX3NFBCdhPX",
  "key39": "4cSqSscef5NLuCcfqeXRAHWjBPfZrB1izu7XZp7QeuKd9avDyGHemUxsh3FdtvsrWpdZ7QxCXSdHiBEywhNBUiwW",
  "key40": "2TFtDUTgjGXFAC7twc5FPq22mBa5MCkd58Aj6kKtTn1MLe8M9wD5TtowPcd1AxjTbtLseid6EshSf51TdbrGDs6W"
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
