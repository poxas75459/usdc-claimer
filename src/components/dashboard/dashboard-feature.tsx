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
    "eGom8AKd3VZJxAvRtbjvgYEq56ciAM2g9Mk5HDyxs9asLhzx63mQZmYCi69TBhvmZD6C8NDMD5g231wa1fyBDcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TQvEAeA5LY9KDg4MeyT24wf3Tf3HKm9V8ZmJ7J5jeszdaeYL9EQ8Wkq3ZDbZYHkV5kcmuVqihz67yDTxHF457B7",
  "key1": "4D2ztyMb4qzjFsAhgqgcFBJNdemtBp8WTBw8j7CXbQ86ygH5FatoYAwTgKtwJM6qUYbYXyQ9yeNuVEz2FaRoFV89",
  "key2": "zWD1y9R9FRutZhDgzWwHmUuq7fbLfZgGAj7dkdNeNnU1VdaEdhUVs5vwQKcksztXtiaw7vhwJAqVoJybC6PH16R",
  "key3": "5PKdtrexQRCQT1g1Xn65hBXKBBtAQtb3PpXWG4TMFUgZpPLLnDQWLjtzwKGKDUStKowQNfgvEUAZ5GnVxKgxAutK",
  "key4": "5YxcxWLndSCNdNwfUzVoBse8jEWTh5KcZV1x9PhWheK36rnHLASvqyghgcYXY1wKdcn8WKrihjeUHPKm4v7VdPUS",
  "key5": "48dEvfEy55fpXNr1xSqBU8wBhZs7ZgBMEKxyvti9BR23fwySKPW5spF1DqfaR8rSKPwVatycgegKHneRf4QXxpxY",
  "key6": "2ykSsWy5TiMymwHJZdfr373awTjVvjP3kYSgeAWxQpoiUp5xTfXmRJJK6SsRVmdskk9fRsb3L9DsZJtK1S21vVar",
  "key7": "2bi7j6VE8Mod3HrN8ipgASNpguBp7vKhsLc8xWrYci3Z8irRDvkmpy9tJGewNtPP9ptYzhQUBcjHsHwHuFTangx9",
  "key8": "PaQSBS7HWPrb4mbPEhew5DAuyXai5TQ1DkoYsM4XEcHS4JJqC8GwuCRcG5ZfjGL6EioB6CfMV55TvvyQH9cCtzQ",
  "key9": "2kmX3m5V5C17dqdCB7cHYTDSdmr31VtoT3vptJpN9ut2rxPeYUj4e19XjGFRVRywnY7czGCJ6hU7fTMZJmmxUe2k",
  "key10": "5A2FtgJexD8a2XYXLJEZkkyA5KAbBwNakMNL88Kr3JGewfjG7V3ntwey9fpgwe3N86ML44b9KwLtRXoVNnBtY6GD",
  "key11": "42KsEwPtFg1sc2SQVu9hKxcAfiFr6L1y2CARr3b5o2nrCQAtR5d6RE4CbvpbnTBWXmfcqu13gguYEXD8nu8gxZjw",
  "key12": "hT4jWn3in2jjHgsjybHynK92hgmcMCwSvvDrrskhkKmeqdNdcAx1YNNo3AAKoBvkdXbm4rztcMzxHMsBVJGT1uC",
  "key13": "6tbMUfhX1K1nhBcMzpsevT5j6LLt14Kfh6WMvFMV5GWHyKJokNmnW7MUwuz9oZbhHBhPG2fumCK3Ljw9VoEYf9X",
  "key14": "58J1T5toWndmctR5MRNf6RPPd3x2HXuu3LzZVjJbBFrPWsCexaM7mLXek9udtHszPw77HzGmg5Ys9ks4cePgb6CT",
  "key15": "3wTHi9J1Qhq4Hjp5YRkwamBrHPdp4xG6UyLirS1BHN3tJS3PnDZwpA21h6NmGncijhn4sxwvWoQCQ7VvH96QnY96",
  "key16": "5ddwn2zLdnnmrqMmFeGhFrR9vYCnsngrK76LzLHyCyX8GWyWf2D33XVSo4kt8W5112jNxZktD7a2AoJbR9a72kqL",
  "key17": "4UNtroBoqM2VxhupaP5E5bMJhcrmWsa4jRqVvZpG7gDymjzU7kscR92xpFWtksbVGwYdMHh1DwGAxt4n9AVpLJRy",
  "key18": "2ufZJ5iMVCgmmXv3gDhRbMB1uZB98aJyAQrd11J5DpRXEMDnXnnqsV3hZQ3tnWoxcZ5RvYF6wwGWeTSUMnDuamP6",
  "key19": "2pqHQL7HAPRPcRvkv5ztFi17vxATicSUa3y7Ddj7AgNRbmN9jXxaYRJmYuMx3JVUxLY3wLZvRnpas9iYorocM8Uy",
  "key20": "61Z5xe88D5pLLGdHRKfTQpPf2cfDFsdWMLbWwtpLhY4Grsr46TXt1xad9SKjF46fE43NWjcovuvhgZi65Bkhgo95",
  "key21": "2xpc9rwjPQQWkYAsGRL1qspM9f8aoUPEjPR85Uf9gGL2haRjiKBV75Fhr2ACZxFQkGQXBqcF1tonCgBemfPpYeYy",
  "key22": "4pRdGsRAZAKkMD59mHDAmQc7aLxhhpyfHoS7rjefudbmdjLEovQhogyojk3A5mJkxgdeJPd3pWB5sD73xNzk4Ls9",
  "key23": "3PKySRmLusvaDcBwVsdisXMrTjA5UyzGsymGsgtEesRRCbFfQBzfS4BXA4mePyXhedZistycFykPKf7P8ZRvGvYN",
  "key24": "2AtDSsSrzrtcwpWgSGNVWr5JxHecu2rdvzJAYBA96Q3b7bAfZvFSXQKZdQw3MqX2vmwwsMptzqYo9Hnup5JZdtWA",
  "key25": "2USSjPaVtRoqjv3dPfC4EAvb2asXVWa5rmAUcpwnfvdQHv3CRpBb5U9nsYv7zVaCRQ6GoRFsZkKFRUAsokLeJ2Gw",
  "key26": "2ijh7SHKq7r9fhFFTKYdYLwUf3vnpQZEVmhV5SNSs4uknambvGzixZtLYTnVqjyULmsDv5dQRT3SzVZKEGpJhKhz",
  "key27": "2nDLQcAH2nYFWAkv2yGmF9WSVYEqmxPxC3bNYZifnGLqhEy7wgZiLoT57LFVQbFKMP9qir9n6ChjJ5c2W46jpBbT",
  "key28": "X26RKMNSkxMJPV1TmDgfHA5HivS84Qbf5TNhRnV9FBsZk2WKfzRP3BT1mE5UryYCdd5zm5Ctd3VFNix3pATFG3T",
  "key29": "3HZja7fpAVxpDvgxRDWMTk8fZWAfLFbkyi9Pih9y8qh5YCXxEs3tQTANtRJoywSERwWQVTHoPsxc8kNKpMNgt3Ar",
  "key30": "5BuGUSbRYwjQvVVuLXCNoqoa3ZiZS1rdVvxKmNiirKuujeCdYqeJ47wiiEKPinPXgStdpytowZkHkbAXrGhnTUr5",
  "key31": "sRT4WUhapwuq7CTQoHXY3a1MDWndzt5b5PyrFw1yVvpb5BZWDz62fucYyR9mzHEPhAeFHUb6C1uZgaCwxrB36kX",
  "key32": "3ZUQcsRr74vKyJdngdAJcSgpCYQk29CWNHHnPUDaa69oZgd8voC4DJRCmpWgQvHtLXi2ybAs38jetB2YpsTKzx2H",
  "key33": "2PpDKXJmpdYvD9THGiEer1HSf2Pg7LxWnUmXpKqwizLQLehwJk9bvTpvjebYK7eQnwLVT52dhPLJEgK5FAa2h8MW",
  "key34": "4Mdb84rSWwY69Bn8L1baWcfQyqhDbofahAGB4qF8xxxUTAwY9jBQYLKWFxvjFp4DnRziEkvdsT9CoKXhzvZB4spz",
  "key35": "3mJdhVhsy7fUFkeFKh98MCQxzZn7y5fLZK8doJdnv5cheQ3oeB2N49MN62PzuPaEZSVu1jPEwiqnfAyubGcs6tmB",
  "key36": "4RFtpJCesjvdnFao9fzopkorL7imnwEsx74H1ChLLajgU7jpFDNW6kjrmw81iFGQSmRFWfDcYqEXFqmRUhiDi992",
  "key37": "4DXFdSipkNdAHy1P2wPhYxmD9ZXJYgXu9GS4oqWAjsvuaUUkEcnwXH9G4Fws1Deax7YR1gW1usTPGN8HZ8D31WUK",
  "key38": "5bt8seaGtddA3wvy8R3BPFqGj6ChyHEhR4eDnA9eb7mCFPdP23En8AEJRLdteJugE17sqmAjWx2ALXnqpxNHwzK8",
  "key39": "fPkWhLeLbcrkCa8prvBJwK6P9Xc7F4iGkt2dUz7o7W2fhtLW2HbPoApGDsePkNUchyHRSAavMqU2Z8UQcGeeaGg",
  "key40": "3kz47cPwKDni1FngvKFeqXSiTcwLKXaW86owAnoNffdSr5SEJBvbxomyKr5ixb6ChkjxJBXFpo6CsNjP1oKpKYL",
  "key41": "39xDQJLzWj31rffmqszwfutC8vLQJVGpt8d55MJGgtjba7a5w4GQytfauSC8ASVCZFCAhbLD2ezi5n3jjAZV8xJz",
  "key42": "4v6h7ZiAPtBT83WLivWuoyaeXMLbcBFTnXmaqPSUnyyyPaW73PnmR1CqYa2sk74VwKCU2ohhuKvtfr3S18rfgVXw",
  "key43": "67LLpBK5LpG6sZs21Hz7puNYHzUziK793kCoCUyEwCu8FjnA6rUaT55Nz1izgRt2CA6Mw4Z44MRRv93oa83AJGT8",
  "key44": "3g3HK5EqSE6z6xJBr2gRLRJhSmuWAdMTei9VZzzFXWRzbZPLSghAbkK3iBCBiCA1NbUrMjtBhPHprxf6SShXceaH"
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
