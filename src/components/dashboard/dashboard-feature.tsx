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
    "2PWQRvnePnA4FqtrrdoBqkJjhUJmdK3Eb4TYBMk9hVsNGCvNd91AEs46F1rE1qUd38cyvxNrcz1suAUiqUMHq7kE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LidtCfhdimJn1SfYsDdet8H7Rvg81fKALHskvytXjogMTUkAyrEimvcyRHUAxFXZ2QTQaKGVJBuk3t8RptbBQ6n",
  "key1": "41DBCkUJpDDMAhApbTYfQPVEZL8wEHHVnqQEy4WUsRVM39i9bu6nMdvLX8fb5XD4CdqBKbxM3ZDdy7rcjyXtBA2E",
  "key2": "4sd1ZFqcjPCVpbx6t4ZCzDKtfAUx6yDpPP9GdTNTTU55S7h4NtXSYYevVM5oTo4Ttd9ejp6Vc22ZrX8Pd9BWG5mS",
  "key3": "swky9fnKbuyx6HgoxXSHFfDYneD2wBMndUGQYLnirjuodnGD1SxxPKzxBUjhbaZkusmuNzfdMRfJf8y2TghyTV6",
  "key4": "egWMKuSHhWVq2dp5vEPvex35bnJzp5q5Po9ivieBsfB7HVNqR7uZGCM4Jkq8DxJqMm7MYrxFwteCYMrJaaAM7Ee",
  "key5": "4jDhc2GxT4Z7Zu2ZR4vo5ZktFXMVeQMLsshFnKxJrSn2UrjA4j1SjY8xwomRocjrmpbhKK4kKJhPwYgo19JjJ53a",
  "key6": "4h6hDyxn2QMriUjyU3EE5YH8qa9eZQHRySGEBuqEGXVvmuLPLU4tUGa13v7tnHw4QurNHJXxKKngkaHUn7df5SXu",
  "key7": "51hR1sDNGrPzt6SmdYqU3WuZVJARzKKHA1Gv53FbQ8EqZbBL3gXNDcZnBpp88g714BSrWjmjkUz553XEpQpguguX",
  "key8": "5NaRqd7oKcb5SQtQPiaGtvKCtKbQ4WsKpoCt567EUqPC6acmvKJ4c3LqLZLgNVkN6Jy1AdeSoPbJaDVzfNcBoAqA",
  "key9": "4P2Zj8opZgfcLfSt6iDh3s5PzU7NkEM6WZGGrRuq164t71onnQsFKkPdEATmvUZe6dfcB8eLSxNcHA5z6yoW9Qmj",
  "key10": "2q7BryjYtNjJHV8zFoY4zCZWx5A264cX9SKniAHrUWDFBbfuQENeD6kCDFnmWN1gPCavknZFxBHribYF5daJUvpt",
  "key11": "4bSWmTfNNA2Z6W5RnnBDkuML6h1SnToSVAQD5KCZcmctHB6CmNVZ5QAdBjLh3ionwcw1mKr9SDm3WateWbgTqanY",
  "key12": "5C8bGvABPgAFPqLvmQJGd3k5nmQAt3NZ6RkQfAELynFMH2FYMmPZkKwUEjU1R5bumMCXHhFQn8WzNyRbL16mE9gU",
  "key13": "4Grvkf6cbb4RwsEZWGKVhSYiKHCifH2BmyorRqLmzi6F5joFDbyY9ncbgANkQMUycyrdWMbFnfeUL3tQqLJrExc6",
  "key14": "4oDkpD6k2Vz8TLpewJ8zNPNdLy9rJdnD4EFXvgRzDXEK3J3tzC4NZvFPHykuMNSnAY6DSnsScKf6VLgtGGTfxqjk",
  "key15": "3BmuEAcxKcq97JJzXNy7CpmeYYFeHgpx9GFAb4brdBs1njAHnptgymqSVVBbVrXH4tJNmLtU9XQx5DtKgWgoub4S",
  "key16": "ASRTrHbNSJ23nKUUFo1oPAnijHPciF1sii26imKFhbe412ut8LhywVdiMUnVshDRPfVG6gqRHm8JaQ4nMgrvnq7",
  "key17": "4etfvmCK3nKArbENht7Es9Y4kaASo7vvr1RgQJcRHsEjjBtJnhZ5PQsH1Y67WJ7vefkK1B2M75q9zcrXGXRREikK",
  "key18": "4ZgdgCBpbfiQwvMRhggq5QJfgms5ZdiXb5MbVhG5Bp4UbWeh8mDhJKyF1ZBgywb3jx4KZoVpz7gQXupe5yjWDMdz",
  "key19": "4ejjV6smWHVebTPJvN16r3BJou1tRyUiPU99hryfMLLCFsSpz6e7teCP7eqxGYooNC21vXPE9C8poz4N8VUdtQLj",
  "key20": "EQge1ZnR8zgknJvzR1UXtznXBRPkBEdJGHBQHgeqN2wsyUjpkUNdM1K84kHi4dJbi6E63psrDxbEV2P2d6vipMe",
  "key21": "5tnpHpRoD1hWfbAGzEGXdaRQF3MrBJ4ZKQDqbmmCf3j5QY4pCjJg8N3YsdTn9tpVFx26DNKbVYQCzd42kQzPnHda",
  "key22": "3SN9cH45f6Kex2rdwzgtZSammwFzYtjrJqnyxushGpp49vz7w1EGeUkf9zVg6WypjBb9u5UrzafExDJQMcudbCp7",
  "key23": "2PA1pGeCxpFC3A9w7SehHJNNCiKZ25v6gzNd3d4XdPuKFFVjHG2f8ZbQCAW4RtCfPkES1qB5hF6HdK8igkogmRJZ",
  "key24": "32vYETuES5A7nmxZgZq5b578rc2Akadm4sCgNfgvhDjwTbFwgmPHj1HvtyDGehJssX3NjjxpZzdoSkFLa5SjmzWC",
  "key25": "3oUsnqsRYW62QsSU3UCig5WeuWMEARzr8LrswBqVRkNmu6hhzT6sTotHQ5Qhp526oFSRZamezi23VBGHQQu4wmkh",
  "key26": "3neEM8Momoc64TP4489pSJ9ZeBiGPNwVmfWYDaaAB8Z8ZzyeuFc3srfT2oWqtZQfEbgL7xeWobgYj2Ss52ChWi1h",
  "key27": "51odEdXFJexyeYc2ynUfA631sCof7isUeUViw2C56UyjTEpnPpoS6zNRWvjTX48EzNX72jsU3myF9eto3jGYJxzM",
  "key28": "2xqsYtTLURN69fo3dDD52qpcppY9rgF2rLihm5UmNUoBsu1L8gCPR5AEko6XdFSvdcBkpL9vSusuzPN3v7gS8naC",
  "key29": "26beXF3WkC6yvTFy3tiYQbayML61rY8mnubAaRvfDux9HGumg1QbxHvphsGDJqzbc14QMGY753W6b3o2XdFaXY9W",
  "key30": "2wiDfsurwuQ95XaKsq9Vn5WEo1nU1pPjGDfkF7TVn68zCkaHz6kmb2B2nLWqoPxf4PQcCYrV8Dfc6nKgzFNqrTaz",
  "key31": "2HUH9KJHVdQNYtnXYqxbDhA736b5DRpDxwdiqMgCpqWpyUSMTDT7zAPGgvkYvXsxyHHwnQasxLBRr5tAhU3mDm6z",
  "key32": "54fFJFV7Nsb27JPh9nZE8DYYwBT68JtfWVo4p9e1JvhsMT3AgWNY4UEALAGkF6FWkUKH5Auxb6bkpT5qMrSmekPw",
  "key33": "3ew19nq9eqiLTq3y4mFSbvR75js6ZxCKmTSddjy364zDxrmTj1TimyUwMvrnLkbM3Tt3rBtF132mYUHBDfKzwhMs",
  "key34": "28SkXSEFGgv8CTSBqFWVTBf3D4XHbZ535CJAyWu6vMAPDdhoJB6jrEkn2V8ep2mDdBtXJXYnh2zT9RQQ1azrk9KJ",
  "key35": "5wneMWmoXR4bRdQRem3ExLGZYtZnnXE97qPvWEUG9M28yeFnDzFfvWkWAtXsrjEjQ6ZAxJdKhLKAGJGLp4Fqf51j",
  "key36": "2fWzXdf6viM2EuKRPNuqKDkqBw9wmB5S3yshrRBcmcMgYRpMFpZPqY3Fm6zXnx9z9Dr5o5cYX3Ht1qDxyNTUjxyU",
  "key37": "2Dfc4NNwucJMmeb75yZYXUVuo9XNa9X7wpyabVhuEn5X2v92kjdyQR4771iQV4cwwLHDqJfW9JqFyu2uCXt7L3ZF",
  "key38": "2B7UWe6aA3irSHnENetKPK2FABusdEsRfanWbhmFXshp7CtM6yuZe1FjJJiHay6eT88iDuDUiXCD31G7EQByRqPb",
  "key39": "4nHZoDygyDUMgULJx7xTqSXyUaPksC3yzyMKTV6Y5wPdQyde7Hf5HQQNVsRtzoS2GZ8VsrxhX1tp86ezTyXBMyNS",
  "key40": "24HF66iYsy5qV5TqVyN3dxFjuuMiEWAcoyQa8LDLFcZ5RHyj62pv4Dkzp6dptp273hPDnArSChkMAg7vmQBuKZQj",
  "key41": "2dXvbPQz7G1D1nM2nTTqGaLJmncM6HZvwNzk4pTnLrzSbeYiAAdJ7yATnfg2YHV1RYMijFTebEPZB5S8nAzsj8jz",
  "key42": "3cVL9kGrHEKZSwU2arabz68hqcvJNMbayRdAJGeMcTqpEx3MD79HwofpdGn5Nn32fe2D8dW9fbHYeHjUTQpXQfDt"
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
