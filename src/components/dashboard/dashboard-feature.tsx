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
    "4TzfnV4M8ThnEVJ2jhPgvHMzvGH8yuVr68Txz24KP7iJ9pXJpXyM5e3LBm4NKFcvLURpccrX65LGBdmGh56arxn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iokFPAmGpFLnoph5CHP4wYLz5Dc18AyKuNXLqXP4twGSxyFZfVD2vBU26S8TsDC31Dm2igQ5KT2DZ7mGWjtY8eA",
  "key1": "2pwUSme46H2e3iYNWehWf84VWtDcmx6xAGsPvP1GvWG9RaN4vSDJvVbaXCgej3iRpDpPoMBd4rheGFquBuvLw4jA",
  "key2": "4edYHhTf2q5jhbyL9GELJC6QteFMukVnZxfw5UWbFxdcCWuHYtTLDeKnkmZ9pfbBsr5RqYFLEFud6i22tS8vc63c",
  "key3": "LCv1MG89jsZwf9LnCFBtgPixCaJQXbwxMywYqEQm2k71JzHFP9vUgTyxkEYKRRnLcSY8mrthZYoFd14Uy5zNs8Z",
  "key4": "273aC1XnyuVmx6hpvS6ySwUeiaww1WNkAST5h7VDZPamLuagFrLARFWUs6KN6DoUTpCyWz74eVMnuLKTWK9PvuU8",
  "key5": "44eyuC2oeSpqnNnKxWRSU56GBRspMa3moW5Zpfkjm1VFM52JRQ3TC1qHG3vMAnfk3qqHBcm5nHZrwiGFqg8z7z1K",
  "key6": "56PcK2jHZGsdFpSFTpyMwZz6DKBaZdRvkVJ9U9ZwyhxdKRYNdeduW48vpzS34ckEDqfQuqA93WNN5Adpp8YwASZZ",
  "key7": "i8SmVsp6ypby5Fa32aHMVhdMEscC8b2ttBYuxm3eDKwVKPQ9TdcwvEJNsPcypxPSaiukgLHSQoxZ3sRuGtHVPzm",
  "key8": "4GC97ER96oaYi25ADsUg2P4S5LMGYhHyes4vKFBiSRLeE1j3itBvWwyRjbzmZL1S9uzDtrYjAFNjYxbnhvLUdcad",
  "key9": "n69CmSxPf2Q4c2iDxfwHGBD4iqXu1M5CQFpyAGVLWJwMShX4zZzJYHospWFJUkYtxDBHPmVaL76kBhWSrngFbjb",
  "key10": "2CYUbG9qiCvxhVr92p13uLHH8jqsMPaBBhRrhHiLbhXqRbPNkxWBp8RvGYJNQjM551qKqdDe1HiPDEddfLqK2ERt",
  "key11": "2PM7XqeFstpio5nF67e4N3xRkFQJwiaNNDL3Qu7GJscy3sjaekHgMRbHEH1cbX5LPkKrKz5oUxVRzySc5wtn7ikC",
  "key12": "3Hh3yZEwwVUkfALg7NbXzZRcFCMiJ6d2LV4PzDA4jJ3GZKhCSvcxSUAYsnUDoAcDSRSBirqWUrB69v1qkbd7ng9v",
  "key13": "xLLL3sTdL2L7X92XUwZ5QXPrrZViL4ig5tbj995uvtuQsvYosW9J4KyN7q88mvBotadSWZzq423Avi9BL9wMwuC",
  "key14": "zuVBXvCGDcDhNxPnBmSyXMMRbcHfYDXv8aHh5PTgRrm4Fc6SsBvy7rfy7sX1TMLujXV2zABhdLxtD3p8TvJPCE6",
  "key15": "5xcF4popqEbLwMjbFcGKKWeeD8iw3go3qBsz3qawSYXG9DEW4NsYGL2KBpXWoMwaHPCa2B5qucbXsMpaJ8WMVRoE",
  "key16": "5wvjwX4dvaNKFwpFRUSzQfJFHsZWiL5GJjZXWkaB51AkSu4X4nzP5DNLWHphfH9iMutzaqArgJXwE2e1QP2H8rmu",
  "key17": "4Bi15wr2V9enuXUFYvCCsftYMvSA1ozAR1gRMubVowWcRgWVLdGMTe76g6KDxaWgekAXpnALJ7L3JfFqB1z3oYLS",
  "key18": "qJMh3HNNS9zWeWMkHVEiHwPoij6me1m3FXAk1Jpfasb9xK7yS6V6298LAV1WhEVGZQpEN7un4aaytL5XVxJfmKa",
  "key19": "3y4iHfRrFVZ4N1SSUpABANHBAxpbiYERm9uUxzBtCqr6n1UTrP4bwKSEvKpB3WnbCrHXntj64PGhw3M62dRrwDS3",
  "key20": "2gMATZatGAxTsxTFjFi1fCsyySsjr2ok2tXSD3UL3LQMCjnx9y8XU6XcSGDMiXcBz4LkKFpwRDK98QKACh2J95Zy",
  "key21": "5JS9LyDnw61BQ4T7aTZvs2vZvNN259xySnMa9tUDAzvuYzwx3LFd3pCwYMPiUFqfS9cHdh4QaQnNcot2gWkBp8zJ",
  "key22": "3k7SgByiKf9GWf9g45t8TFSuEJM8JC6fP2VubcTCLxrH6piAduH37zTw7b7Sm2wcxoKQfk2CXRmCDYeppwvmAuES",
  "key23": "5MxYVryjLnVeuR6sxmAbc2MY9e72JtQZBL6hBPSxn2Dz6ddzVaCh7nfeagpiszQEayUrty4FTSF9dYGcVyjyJZhH",
  "key24": "3tDJZPRrbvjAgvqnoAQocVNCroL6woASh8p1HXf6715q9YGoyHUDJnVDQDg4ePixfPKexyVFzJvE29wqosVeX65s",
  "key25": "D39DR1ekSv2tQRVwXNk8jM81ZwUQtmd5vqvybWG8FNfp8BJz1T3gW5wv7i7kW34YHv6G2WmtyLiYWJJo3h7tTa2",
  "key26": "251CeivTDJ6rzZ661x2Uea9ZFenGtF1S7m12G4KeqEqEZcSTXqQ47sT2iKNWNjn14NUboBnqCq4JePM1sjZ36q2x",
  "key27": "4humMHN31d2mR8mFtT9ifvaj6UsYmWYMfKUrxrjVX6TqzjaZZ98VXpSJ7EWweFfTPzps14VvXcVHXHje6bhMxXnx",
  "key28": "B6j7z5FDdM3h9pRu5e9AWEofMLv38rAQJJNhuomBMV2K5YmVHsLGVNnQrti7fYDLobaTmfG6sP4vaggNxwZH2Vz",
  "key29": "5wPznBiT217YkiD24g3zs522UVd9uLD5SU5iJmGtSkFe49jScUVxZ27pjMKEZjLF7v2jDxuWfMxGNFsa2qGfSA8d",
  "key30": "52XYnTZP73HqWhxMxhtwCZbNVnnhY1mFaSMAa8LJ2169Wb5GJyconSuWkMFEpx2BToWqaBHnUsPJQy1si6gzb8HU",
  "key31": "4D3vmsPBQvZSjAMZeRL71oVfh5d61C4ZH7c4A6phwXLPw9agWcr6wVx2pGWoTkorgH9cQsK5MPyYGnh8TR66h9oD",
  "key32": "2yVELAbxo2jj8sBCgHQHAhaZxsiB2HXLP7NH6Z7dbhLGD3MNrMXsYfhtQfVsqv7cQKDec1LqfQb7k9rj2gQH4Eim",
  "key33": "5PV5D8X9Zy5AmrdRjqof4pF9AkbF9DDFFw6pbRjyDEggXjopiWC6KS3ddbj87HtaNCmAB6PF9j9aeyQDBH1Qr7GD",
  "key34": "2muFifetEKYuUXJkAgR26wZ8EjFML9VBX9Svcw9B8x16yHJDHRBCZkFxx3uTD1xLKtuUsW5XhZYN22AA3eLFVTsZ",
  "key35": "3aguCnEEYtKi6nTnVwmuQ8S6XYRSUtwZTVktNLWGXsaQyPoyfposp2QJQV6QwZYHmkPQUMZGjiTq6FovWEFuw7ga",
  "key36": "2t6tBy98kqn5SuHEq477jhWNpGvAP6mSv4CT6UVgwAkPmBVwJpJhePva6UovDmpiJozsDC9TKdpcFVAnJRWXsxCz",
  "key37": "5fqmn66qyosYAQf6FU2z8mcXa8KdCXRWFKRNSraUQhygYtvNN6GMmmYBvUhBJPbJhJxCp5YX7EMQxsY2d4e51uTS",
  "key38": "5CfjR7EBnCZMzGoox7m74jJ1C5X5NBkufb8voHTcpS6FwNyGDqQiEWfDcPz2unQv4D7VHvrQUQ2kJSjQuS5SMB55",
  "key39": "5QjbJXsMtuzeL8J69bycswQYY4ygdJit8ppmL3p1NpzpoaUrD2Lsc4D1pNEfruSNMPypc5B84kAyti6Zzk8Qeoqm",
  "key40": "66MscEszyUdRxrU61Hgjpw6t5ymo8NrpSGx41iZe3b9hFLq2sVh18Ug63qgMPNeVbvfMWavE5QYvXedjLw5cG2iQ",
  "key41": "DNyA89b4MUs4xFLDUiH5gqPbJdzzWTqzGxuKPB6BzhPcR1xGoR24oZZDGEeuozc2yUgEVwKfnAnYLgtFCyD3Soe",
  "key42": "3LSJSk2jJQynqy85ZZDE4GvJFffiUJ7PvYWLsHZZBQgTTT9ydJjLVZrVxg4tgzwBGjYkGFCfeLpsJuUh7vo5abF6",
  "key43": "2nVSJk1ZQGkBirMMjw1PwEjkZNaBf3DNrjPRTADo1JM23S43mVYWF81YSPP7if3LWk4RuVpgcYvTS3z4y8F4mC7X",
  "key44": "3J45MFqaUyYeAdkwcSumW2tQuzSZgBrPC8n3HGofnpM2471FszY2Gw8R5BQSE8fxyY7TPyUVj4nvzu4jHfnov5yP"
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
