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
    "4hzpzRfmVybawU7VZymao2prEg3JjovovkNk3mfHtfcapPEJB3AEmtAbLY8KNowhChUyt2r66vS3dGsw7D3tgCav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YHnFiKt5k4esNEb7cVXsnYUhmgqZRRyLbwmwcZ2hQvWbNc4eyX8CcqDL6gRNsiof46Qvd4cF3iE9hr5SdSqeRFM",
  "key1": "2D8TkzAhxj9rtm8ENR1pydR8SdSa9J1UUNQTG8hBEa8z6XLH77zzT7HzrHBhbXk6E2XLwgMgyzaX5tQpoXrfPqV8",
  "key2": "41VYYeruLJCMpuCokpK5Un9vL3AJz91UBJoXML2w5bfL77tLjjG6KEbhsqvw7RwMFhP4a3eLBgqh4AW2iFFEQ3N4",
  "key3": "3USpGPxpFSEXaQeFJq1dw7htYXWnRYsBL1zdJHjYtaUfSAMEpwPSkgpwfJ68iE3ieFSwf18KByLQQNC5nnJeo7PR",
  "key4": "2NqCcQ6SUYv6Bk71Q96fNyojdZgWXoaZDqKkhb6XGY8pA7iiLuEtKfMdUigLL9gc58SotoZwfrLVvMCCm3hk5eTb",
  "key5": "5H1TNxRxbb44An6MucgbvRPsK83MCiznVMQLgWXNoC1ccHyqZJV5vG4TszLyFeEFtvxPJoav67kiN6FX44EjkxJs",
  "key6": "XUN6VwEQf9P97J3gNYLxdRh1zrUNS6Keke8rpTuoCChK8pcAG932JQXsYChSVASQ3de9jfHtegbQgJ2iUnyPFf3",
  "key7": "2LF5fidnDbQx2U5qpSkBVy3c1TPeTkx5mcsL8R7keHznUQK8482X7B5JsLpGu3MiQaASrQTiuknW2DvuD5DKaF8D",
  "key8": "2xemyU4AVnVaWq7tDXUyVykcavtT93wk8V3kZcK1Dn9yKRMkRovew6V6UmxzVmerip3tSUq4bXqNfutBjJiKd23K",
  "key9": "57bcAVDFV1LHQngSAsPQFhwgpReZ1jVLKkYR82iNC65xZbmkrpho9fmYBe46jKyeh5PYVXLg7jc64mHNVLG1H3yD",
  "key10": "25eRuJgFMTy81M7pF5QSfg6DyrPvSZswhg3EZhM1UNSXsweMaZW7oktxNBmVajbwEuQGTnBAxoT3aKoysRUi94Y4",
  "key11": "4mn5T2PTWGi7gDZmZt52pyjA7CokdRHLChHbS69Y2wtG7g15dkZBVE5Qznw5nDfnYJzndMvQeByXiNwv3RmWChz5",
  "key12": "4yoe9WgcNJ3mPzzMZJPtexL5dxFrPsUxTaDB215vHjPawPRwh3H2wzYHZ3GBTWhfaJfvygCfTgDDrW9zcWsyPeC",
  "key13": "36Pa6X6eYyD5X2FTd2g4xuoZE7mtDxoLxYRqALosCFxjjvQSZRLqxdXcy46CB7fpm3ftY4sKGVqSvE4APiMeTKJD",
  "key14": "3RSfmBtud8iD8Js4STSDjpMPFoWd8ocSY8rk9YuhMHgusY4PtLGhJTfrKxzweBXC5NZBtTQLch1F6zsJeZGnuzYt",
  "key15": "2ioQpGdVDqWnsdoTX685fyGBLQqGktTYLCGJKFQowtnMdSVNZbUtQL2JrNetWFkdGQywLcjvejJmeoagdcfH7Lsg",
  "key16": "2ZtYZ4wRrxKgK649M12hYXXqdFYmeniHMx6HKkes6mnv8ChcEwqK45ux5C8GEYnKpCKjQHPfA165ZkqYpE2jqMTD",
  "key17": "4F6weMjguHwdk8ExTycywvwV1ZFSw4spus2cBX7ue1n72dKZN5mkFL8vZPwPm5epv5XHaDkwsN8u6BS13YJinRQj",
  "key18": "2cYAXwEdyeewAGdhFykk5tgJTmt2zPSLkBZkGhTUAedNSWebMUHgvWWzrTFHHFcnNtKW943JjXwFuL9ioeFytCd3",
  "key19": "353B6WB6aLxTtQvKYmzcqke4hiLGubH3r48VwvKzv4f1ConGFjPawhE74vp6tLYNe3yZbpwhvT39hk9Rwa6tGwLq",
  "key20": "6gATNMY2f8M6hmTN1r8DbsG8Xw4hhNA7ENwRVKiPSnAWBLpDaJEvaHiHpZXN6Yxw4o1Un7ajkryEs2n7z7FXxJL",
  "key21": "57efjUKVhXhRhqH94cTQSve5EmmwFEzb2VH52Lswy1WmT4amaruHTVgm4PB45naDGa4zaW9BBAZhj2bjPKb8bk3a",
  "key22": "AdVQ3qu6BKSMvSbB6gCVwbwstr1fTLRJqdGpyQAiL4KsGYG94FdNG6Wpywh8KtipryvwPU6TXtLcFH4B2tNSpk4",
  "key23": "2rLwvfJRMb5gmZx8QmX3fRjwxtcEWLwX6Y5nf2vaqvmjS8c4Q6WM7ySjwkxqRh5tGyTd6F5tm4kGHWeJA28R8CCf",
  "key24": "gyNBqNhpkM3ReyNEPAKccbjoYYCPx4w5gvGTfTJmMxW8Aw1MvPSXBMGEZHNTSoTdeqvT87zN8v3V1kNp2jM3Rv6",
  "key25": "E32Bi8HUZm9u1AdwLT3hbNkzWicSzDE7LFbJumM5tB5P63v94VNmpLswqUA7vAimCwRQnb7ivKcmzDEr5X9xTRa",
  "key26": "mhEN2QVSM94WvrGqQUpLAZ67fg26kLmAvJ81iKFEV81fEmVtD4DDS4rQuzrYpTyk5zx6cyjJGBqFz1sJGZFXmWR",
  "key27": "3QrzcN3pMDeY7jY96ESkFkajH62xjddJiSHJReeo4wkz2q5Z9P2rdRmEXhRV4Vy1eLzEdYTZVnW31kKu52XRmhkB",
  "key28": "if3fbU4MA9cCN3KBF6tkQCm2741CJBByh5YjAZ1iKjnuCeSMvgLGssRxDe3hjpwTjgSsXH83NzSWo5SjGzusdNq",
  "key29": "4Mgd1ajoXmnpDF9k1zRUsWVf7UjhLVYqp5ejA27p2eghyTRms21gbz8zfFiWQuJZ5DSQBpxoAfw5NxDBfhqWiweS",
  "key30": "G4vz2N9TrFApqAZXtcgsw1qdy3jJbiYC9wv9tEb3NRwi2Pb9Z57W9CseXv4d9dB5ouzHoNi6yZt6V9Zcq2F87Ft",
  "key31": "2BuLh4bTMW86TuL1SPefmJLLokMkpJ5ZjbE3uVZB3vJy411fR41UKyN3WiJVxKV5MgVzBDScFo9DJZdVPPHyvum9",
  "key32": "3tdXHkuvfUNmnMpCj9ntVsD7KYgRP3ztCQZxkCKGUfiu1Z2zB8Utpxv2mR32Y85q1Un9L8NNybeWv12F3Yj4xhA8",
  "key33": "Coe4PcMjoE4CaLBKhE2UvPZUuSkzX8tP2XgAUtoeoDoyaPcLo26wZfwXaoMEXbA5JfeDNwwjH66SSR64SQAwtow",
  "key34": "Pfvj1pYdGr5BfvqZXPTF35qgFCAG2kXCwdX8C8WZcjWApTL8XyPWHzBdLypS7foiTm8orkCJgeC4WUw6kzZNWZ1",
  "key35": "4DnvsMkFzk65uDkxmSisvLFbEkjeLTnmQMLUa5qRTjzaEXZwoiPZmrqUmTpYr3agmDZZ895Bs5kfQqy7XTBDhLGa",
  "key36": "3dhE3Y4vgzSNQMhJNgrZ8UBtZjYbcrgrwTda5TUb1h4pLiCV8st6AmBxPFx95fBAfxBQwTxZrQnSLHLDEZfcPXyJ",
  "key37": "RPy4uvqXdVKjmdfS7Wy5mhKE64SeYyk7hbiGwFVZ1GAKhbnmMeiWR9LbdcbQ25pCy8nr9WoM5iy8uEsPnHEaJjt",
  "key38": "4oogw3aB7PT6E9gYRMNs1cXV9QLsKoL7Prh3dAjuRQ5dwYzuV8dyEpwANXAWo23VtfiRbLgUL5FLAUdjiAxb2Scp",
  "key39": "4QU5AhFrPfK9yddN7vnCCU9nQP516aty6iBq3UVToEiLxE5F6c5XhiModNsu41XEVyG7ku7aXwozqAbZERWNnkXt",
  "key40": "3o9oeaSq4c1Zbdj4e2zej8t6gG3pcgvKT7UhWgXt6ciznmoWe9Uf5QmnWAwEFRAgqeqiFHcdiUucnuwKBpV33oJA",
  "key41": "2zYSx3X7oxqoTFvheqxnB97CT6nxRunAhnF1vZ2hBrufGXZHdzJj4z2E9SvcC5CTFDCAfd6JTMEZaeomCmtMaZCs",
  "key42": "4eCw2uMe5ESSR7kx9UVPj4m1cnaRtyvyXD1pUkYUBrCzHLQJ2xYbJSA5HZBQWUpQGHsMgDYzcivjaFYAdaLiuzVy",
  "key43": "67Df61yXP8VZ66QaeyNraepoT5s2idw9SwHfnsqPkoRQVGiqjJVLWBqQACw7RxsNyboLrfAJLe94jCH5CFJBj2SN",
  "key44": "2mUiyWDUU6reb9GY6ibzFzBPErEyTZQr9PTYEoDxaD6fSAyMHoFr1hjzLfaSFxz1TY8Nk1k6KCBJZvqAdyM1APT7",
  "key45": "3ycDGTRvhBqLi54TDoktD1F8B5d8TrxmerJEDhzXV69oiRjV2XjKj2ZrQZcTVjifBe3kQR5yDSVj1b5kHC9fyWJQ",
  "key46": "3M3GTaxVAqhsS2NN61rFuzXb1TQrsFX7yQR8j7v74j9SiPeZYVWpjDvdEoZYNUxGnLed5YBrGXZAAQJb3cpobbow"
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
