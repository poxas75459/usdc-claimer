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
    "38JuafhVM3pDF43temeyqAuMNk2n37ZZrokrWJHwS8xjRPpdYESYGRiKq4YGUzPtQPYBPG3GW9Xyz9qDEDr3ZQdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32as2iPcEkwomGo2oqcgP3z8HhEqYzPVGoSnMS6YaEUoppbFc2mk2SnabCEhJFyifm3fvf1cjj2ZGphdhrkDpJjn",
  "key1": "3mmAAcMsqDonqQvLv1BMr8wbicfuoHc3MK9cNzoqGiWYdpJEC2jZCcNbe1wk6sAxKPAYhJtyTyYU7w9RtH47WnD8",
  "key2": "2nKindHq4Z9wByB9DXSjCQBezGBvKogrNMWeGLZnXu61JwCnuuQpxDXxbwZ1Edg3rPXMvHaGSkDjfhEQ2HYpTWXy",
  "key3": "62v88BfCFHwz7FXDh2FLdfKr8dCnia7UyvJP1Pk2TsBgUaUDywkfLf6BVn3QgAjCukKuYn1DLRxyR3qgjq4wsfMJ",
  "key4": "4XD45JkgJaYqSkFzweSiXukXyPz35SMsa2gsScm2fTTDa7w64oKwiA9Svm3hMn1xgZ3Thaqdcdx4aZxHcx9xvPW4",
  "key5": "4SKwwQBFr3BJe5VYaBHkxhA47woj9yQsBWHo4qae3dFMaEpMXf14FF3zXGMRtzPqX53bkgmBCPqEPMaNfGQMt3YX",
  "key6": "38hcYHttend6YRSCzcmcCkzoCzi9qR5etyCgTvVsuf2vDXCNhp14mFCMP41NpwKbCimopuyyZyad1gXYV1RqYnDm",
  "key7": "2d8xg5xPkZB9htCGGExKwkkd4Abu9eVQxmvwqxxeHnZ9EBouPXdKBzEcW8eTX9RUwGZpaY2fSNVQVf6eC8wknTuM",
  "key8": "3chxx844inuBkFdxuehjC1qtQZDLjKSEZ5AkhDxCuJAf61zXiCWN4kEGMgXZNc9TTUu1G9iyg4taxcDFoYtyn1s5",
  "key9": "3bASQam2VCFryZa5pYJFkN9DLcF9QcN3nzPfS5bD2RaA75piCCxanirR4R1roCwtwGWtNcxV5viD1iRx9oH6QFau",
  "key10": "8MJCPA9VsikPYAj9oVLiiG6KuAr1f94FEZYdCK1j8wvMBLfAbj32eowck76W67PCxJgXE64aLK38uiQtwU3LeVj",
  "key11": "2rRq9Dk9cV17R4eQKdt1Xf6qYmnzTU2rrJcUXinRYfUT2VR293MMp2cbBKXiczz8ggwSbDM9qfBNjYiSjfgjzVaL",
  "key12": "29dXk4YmjUa51tDth2WRpN7AUpxuHrrq75y4rfN2V9p3i3u6rY31guEoWEWVorAEAJQxa1B1MvuDaTKGZAq1nypP",
  "key13": "WWPNa6cpzRKwVU4iFrznWw4n8MMYqGLo8mbprXSvuzgt6f2fbFEWr1Tg686oYcyn2AGeaXVbShf1swddVeD1FrH",
  "key14": "CSgtbTbJoLGfhq6mJWkF6fQM2ZFHpxW7c6DFgX2rN19JwmsEGhHFtaqD9hLDMqf5UE2MTu8dsGPQstkmA2yG7SU",
  "key15": "5iYscC2widWW687QYhY6eKKP7nsWSUzDfaiA8buG6PkXskNoMGMRA5dXtnuHTVKzUtNPm4s3SwaZDBKsT8Sm9dH2",
  "key16": "4n9VyHGwJZacPNMbh1qPrn4LrPrkjhcbEAFSHSwsAtpxRZqDWsc13iWgLkerGcJr3zV1nACR8FUsmynieAKGMVFi",
  "key17": "5fTPR35TuFfuDWmbpj24n5RhY9rX9x28QAXNecUa68JueobYxko3E3QoAvWX4C8WxSDggVEEwzwtnqphwYNrA6y9",
  "key18": "3Ao3BFL8KF7wg8H8oR3oQijUpPRtYr7TgCyrL68YRGNTV84CSWv4d49XzQmGDHmuGmj4xAsh3VtiT6Km6PY5qySF",
  "key19": "5XmezqC9SdYY6qjxLo9H38f5ArbgoKTdNtep5HQtadKDJXuvbz2941XA5GF1QLUthvcrVXZHm58RHqgx9rfhcVa1",
  "key20": "4hvtPQ4XqE5LDxZ1uK7uaZtVunhmrLknm5zXJurksa2C4wwUY6drrQKJdP86T2ooRHgHohWFnJMKvrWafknxDj8e",
  "key21": "3tPPHqozBBnrcoS3sKNdP86YZouhW7xGpvqMAnaqWhmfhd6AA3Z6GYF4C7NHmpvCzFQQwbsjZ4xPNU5cYpmmBkGt",
  "key22": "2PEABrwqTUiXjf3b9v6PmucTWCHqGdXkc3oPFVYJEAmB9Y8uRktt4MSdQr1VXtLjQyaWg5CKgixDwSsaerjM3Foq",
  "key23": "4ZqPUq1Sy6Z9gV8VZ6K1Fn7pP4gitKLZDumRcouoiYkR1P6pE3ChoSLCjE2onnaEmRm8yhrzxxesZaeUVc2CE85p",
  "key24": "3upej13wR5WWuNnEipae6ZefassqrxZxU7A9CyefjCadiMHYVUDvDqJYcJ3SUcMeYUybQrXpQpE7EdpF47dQsxAX",
  "key25": "23SnV2xHnDqW2sEUhnXyMJUBzafjetGJohEbL2kce3FNpt9gpFFBFk7MxRg9KEdbdk5G9sBv73f9GY4Fk8pfhEhc",
  "key26": "Q5ith62kk7oCMoyCb7Atc2ZazCDPuTTsRkwzciJ7yajfRMZ3soDfZB2cHVtgkzJmhTw6fqjZVyfWWWznDHj3wb3",
  "key27": "2WxM4L1wTH26srBPvioPGq3E2AgWCqJrj5fYD4qWfo5XVRswtkC4vc87JqxQTQ8hxCr5sYsEGzasnt8K9zGsS5kf",
  "key28": "61cEnUzFbqQEtgxcD35WvxaKBum8Xdg9i5MLmB7znypCn2xrHN6JazQaHEKn9FpffuAAkjez3juiqqKa8ZY5tXRn",
  "key29": "TFq5Ksb8B6kDKgxnoKDdyEhC84yZexJ1wcBRBfwS3UcEGpsP9922u4HVCYA8zpxV134kiJEPapQVDHV6egGqFhs",
  "key30": "4RdEh5UCeCmYXzHj7uSxzNs2o8b7wgKBncBAwdCpvV7tZSmwwDKg4cq1Eawu4QK3gZ9nfRZa8F3TRhpPgLjmgudB",
  "key31": "59CLtGZLRiBLEZrSmNfWoPzdZeJLyvuSvajtHDqBWNSUN8aCSgQnCf7bryNN7DXmnRLsD81eGDLoVVwgYq32x2CC",
  "key32": "2qCNwtLPSQDHnzG8yGq1t4WZxE29WMsaWEaptQG4vPoPRZacLtCmueuKBYF7qNfdHaaPhJcSaZ1NHhpgMr16C81V",
  "key33": "3e9wEAYyQrtTcbc3HawVv9LEmZJPaf2dKPby7kPsjNj9vxYCCeUdSYZ479mcTWgHuHW6UjdnjcG1PWcv21q2Wb7M",
  "key34": "2WGd44g7JEfA9u79uyYLwQWGZGNki9UgV6CbfuGkhz843xN8mJyEHAFD7x7efUcLeorw7JdBV5yrKZznDesAP3eT",
  "key35": "y8h7txusEqrU2U48AZtjSSd9vtaCi1ojZ2UpvigwVfEj87HxnAVKFBSk548n9tmZZMuiPSXJx9aFHuhTyasyi2m",
  "key36": "4KgtGfLhU2pMshmQwWXznvaJ9Gpvf5Cs1c9kUxACz1n8FZ97t6A6rTYWcsJQzijnAAjyfWmwXaF9Np3AA9SKvp3G",
  "key37": "4bKum4rVpcZCs8e1CE8UCnRNqZWFaoXwyMYmgxCPyZqszvbLPkq3zVQiWEUrj5gbp5EsLgRRMBCF6kBsVsfcWZ6V",
  "key38": "4v4tpcnZgHJhyGhLre2b2LrGmGDeu15omd6Ns1G7Nm4CY4phtmvtVzEz55WA9qH1auDUsNWA8V36iBj5Z4Enf3RX",
  "key39": "3yDJAcNThngvVwYu5WudcLfMo5LpnW9yZGtTBf4caNxZ17AixM2Jwz7hrrKyq7FJzekv8KMNXVQnW6V5LitaKBpA",
  "key40": "4BnPfbDeLFNTbxozqcWKgeDejnckkd86DLsoNpahMEKUN3dozpgrR4VcP7i6XoAb5jmuzdDGW9Q7ZWjXKAKSNwGS",
  "key41": "5zggHakMNeVRj7JcRBSXmGxvtRNTP5ucveBEcH15KNDSTwuepqbgvudX2P2iTCzSSdki46pWUTG6WETif315mXmo",
  "key42": "48dfMCmwwGG3y8LXit3YY6cfSY5nLWxuDyyy1ef213cmry5vSgarniLNAfP8XQsJRM4PVb2D5QN7Sbu6BR9J1Ezb",
  "key43": "2NjeEegGqVqc7g16ZeftgjTJKGeA5oFYchXwvgYmWQhyh5iwVAGmP3dDiusXZcRSWDMKrKsatwZSa8fa6QCW95My",
  "key44": "5hVkLiajtJRLJf6saGL3gBeiyAkGvRvZsMQntSQR8N3DkUkyKe7MrWmrpgikD76V9r79hNzNYHoJ9MhbRMJNSGU5"
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
