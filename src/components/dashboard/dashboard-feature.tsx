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
    "2jdGXkvemh6ruf7dUUrbfarHsEnyXQiyW5FBg5ETUcDkBhwqZYFSGpNyVjc8vxZNhYxysMrTdDK76JeyTan31fML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kzD2YuMraNziEfzFhuE8JsT5UYVHK5z6eNzDSvD4UdKjNbSHCfoDGhSShpYN8qjhwYzQoXU74t16cmmnCYT22aW",
  "key1": "5NBZmg6pxzvuJrRedm1WvbniMRphHLvBKYEGUUdCXchAzhRCKuQQv9xgD8o9teXT1DPTBtgcj9iMpjcctFS3Xv3d",
  "key2": "2pVvpLcWUGR8dhmuLH4N5SbcDvVHUWskziuvgSkDKUhMLyL8EWGQL8Eq9cKu337rAkQRJPNkawmVwhRZxg5d3mua",
  "key3": "MaSfp1FydR4xjaA2AyqSpKh8Acx2gxUDYSZh4zYY3iV3oDyTBhurEjAcadifETdY6T7hhafW9168i2pN4LvZ1H8",
  "key4": "61Qo2RYQFJaocoJEVExmJ54NhnGkVxXZCyj5E49B2aJ7nJFAQ6uKA9K2oPQFsmYcqsMV2puXAo1UYM5eNTKuMy81",
  "key5": "4nhacCbJr5YgUhxRP7LVLeUfE4EV4CtcAcADWi6ESRkUiYFXNjZRkV4t2ya1zdVwb4w2NhkeRsiAfkTP2wDDrks6",
  "key6": "3aWWjq6quz9HNWPBaN3FCs5A7QJMvS8cZJK9eMRs5eddzGUNDupqkKT8J3h4bXVZoqZ8e2LKuKuGdeYqNecGNFZa",
  "key7": "TiqUmE6x4WLUa2zpBUimvMqWXVCxfPpLtR95dXsH7x9t5jzrvxqnkYS13mqXKFZLunCMh7QvZHSfn3TWKggQzyT",
  "key8": "HbFGmUMnCpBfcgALFoJ8PSN6g2yJ93TpzCSfm5t56E9Ana281bpAFAobHHNeTNVcqCatDr4Ms6GcRCyPNDZTtJU",
  "key9": "KaqtnZARWwSnzetQdBzJb4ubNUnSrQpQZYgu9KHaHX1KVEoaC2E7TvsGNQurzakcDrML4sPhUKwb2V1BRZFTWpf",
  "key10": "grm6VpMxwMJsL49yNhHo9nmQ2BNptJQyo1B7VJkWKvivs8bV63CHiozeoyc2PHv356zvCPNgjoUwEL7x3Zg4hoN",
  "key11": "urbKSYggPdAxFjbpSsw2NfJXCDjk9zbLitG79CxYwJbFTXAwZEaRV5DZT27R2ZNQQwnKiKt777z6KHPp3ka8s5z",
  "key12": "3kzVp7hJw5niJDFA2XQFJuxY2a7yrCw62TrEV5omzQdAGk1oc8fDMCEN49BLGeGaHNxjdydF13HMUGSuFVyyoGu8",
  "key13": "39ZSZYEDFDoihqsEHizZCMdv2QCY1APmpAnTzLj1FBmUdNPmN3ttpVmLtyxMdH5918qpoY8yg8hZgypBrvruxjWS",
  "key14": "3dGenoPmayWNzLUpDuwBpCNh77pQo5ec8vskEwn6tfxPHaJQwyN7qUGNofMD9fkX1iSYDN5vBrPb4Be5jfR7mrDV",
  "key15": "4XdF97mrN8m7FXPh1zXg9VqiW9dTw513wmuY2FkujmDyYxgDmeWsuyMrQgAxLVGZjwz7pEY8TGCauHjaZ12pJTrv",
  "key16": "YKpFraPm5pHBdPhtnn9tEDW9h5yPnSurMPfKvTsZJbNM3VyxiuYT5giqnX84FKoqh6wCwGnzB5Jm13UMdujYcLw",
  "key17": "3nXDGNoXzroZ6r6Vi5L74vAwBba6AT3ZuMytDic4ii9DYQvZRUZyYUPy89xTsjg3TRgDYdp3P9xdpzgiawumsD2d",
  "key18": "45Hu6UqK4PzVALXpeSBMoHiDqrnZGMe8zHuB979SmucvgQNbdrxvJXqwE5mTErQyefDVVMJ3MaDhV3caKfi1htVW",
  "key19": "HL3KHyJUko5pJzMoHuooNVtJdniC7QovtmGsGpVJqTk6ehK1pCEoxcx82b6oip53Ywav6bNkf5o42WUq4SLMYs6",
  "key20": "3HX3fbEzNfDSKM7AY9QohKp2j6NCPTwgDXLrLLsAqrM1sQYqrA7yDUTNH742BM2AemMLsySJxZM8ATSbGJ1QHhCr",
  "key21": "3tGRi4UM4X8yomRNNvQJWTfEDcYQazpymxCpxmfbrTXfhvc1SddWHpnBQ7kjL7YTpgq5bUj9NLw2Ln7CmBesygKz",
  "key22": "51Tvcms59iKa4De523vWE3W6gpTy2o2jBpW6anSotHiD9eQ8HLAgdHGgzMgzKAPapkAW2rnbBPHZxXXGhvy9Rk6j",
  "key23": "2xQ2VAMXjgxXnXhvK5MNxV31zC2mPKvCVWffSCBoEYmeThJdwwTNrG5Z25M9SQHhjgsdf4X2ed7vL1wkv5Hxn5Ki",
  "key24": "8u5JdoM2JaHHkD6iPFLyzCpb7347pM2Fb27LTKsKBkGfCMTXRc2gXLpCGU5SJg7J32yofS9qznjCJjBzvQFj6JJ",
  "key25": "7NiuMweLg7dLLs9AFMw6tKWk1JKhVP9h6iguYDcJS6MmnhCyZqmoUpoxAnHQuj9LVP7zS94Wf37d5LgSCEJ7CKj",
  "key26": "3CGhFBhEfaKkHVc1czpbSo9Yp8wQpA15tY7zxEzdYXRa92n84DrdpCHzNqz6Pn8xKQxca2ckaWGf9KTY6n7Te413",
  "key27": "2Zxg1c7KxzDnModFTAC9QiVaenofAs7h1z3Cm5Ebpaf1XVopyJbn3wV1aJG4awDx6uESzL84KmeD59c9FKMtNKJ",
  "key28": "376qEFzCsnMdyeanhgpNqD4Cyr4MbG5FjNpxtgqedz4Zp8US43VNBfBNuZPfXEcUzb8ZieHcLUkMJhyGNYwNC8BB",
  "key29": "3XFKBWw9uhXB6M8n8u3LQUFp1MGBRinCPozTdtDKKZGK6rQChcAA4QsjAcwsXmgeB32Qv2ngSzutsGzfXcyb2pkw",
  "key30": "4iqVJmFmFw22VWC4tfe58JKV36EFCwsjQiMsqQ39qkD7wMN3zf22kNwuR98KnRSEjbFYYKrky4ELavpPXoZoauMC",
  "key31": "vUzfUxeJviqpxXzogh8X3gEx2AveUfemKVU4LZcNVhj6HCW6NntoyQNr55X9yPHmepmakQtvpnmoAc9jyH62Bfe",
  "key32": "26zkXmNzjwVaXZsDz4pMLdDrmYJ5w4Wa9Vwpx7VxB9iwq9P97SWEegz2v8aBYaTLXyte8aWbyWDhbYH665smF48e",
  "key33": "5Y1e8ZDS6quoccDwynbDgz6M8XsHdbh2pLAUaZkUeQmQoe3SFcwTGp8AnQC72onYr3S3KxJnhqCdGGstKrD7hBZA",
  "key34": "32h1dwA1RVmbFDHheivbLQRBspD4wiBHrqWAFjoY5XWSfE2e2FkBf8chV5u5ywJjSpN45uS6UYNDQikUucRuTf2Q",
  "key35": "KQnD61ENdaWRRpBdBXFzCKuJtUmemjfmgrwYgTW5XPwhN5ThV7G4g2rEXrhHWk6ykjzCN2m2SpiabA81b26HYhb",
  "key36": "YekwVQX248f2j85fgz7gcVrth23F2F7WWCPHYePmVFS56iNXLmgvn7wGMZUTaeWJFciGRxuTrw2mz85JvjP55JJ",
  "key37": "r6wMVAagmCitLgGjAExdg3e7F8iqUPD9EGSDhq9er8DG2zm7bhypgZLL5rpKSKsekuhSHUXQ2SkCwEsapJDAUoQ",
  "key38": "4F2bSjkJkqqXHLMNV9BwAN2asN1siPCxf8J6uMsgw8ug2MTfzQneiEKJ4GSsXwVSZx2BpD1mLJRyRQewJE8rxzPT",
  "key39": "5wETcgwgjFUeaionYVpsLHXBrfzMdebiyA6qsUi8B72aYhf7HJEVH9ZNUgUcoxRTqQCGxKoF5d5wzmBSaWZ9zFuB",
  "key40": "4H74x62RCTiZGR9HnrvYyHFqQDk9UbmYqFt2cyu18n3kXejQBFLviAZJSr1GmrGXYxDDfvMwxrVqs68KMCiQQdwP",
  "key41": "5k5va8ZgSFv9Ear5wCqyZ4uVYXxzEmABJBNrVH823ke2r1kxQbag8yt45fqwXPwqbpWdwvuC8RMmJvRCSxVqMazH",
  "key42": "2oxLgSecfiJrxPTqACLuwNY34ABE56dBgniQ75Sc7hwmZ6zCBeXW76gxUFdZGPgMYy8Ao1Dipzv9nhDk9hDJyGX5",
  "key43": "3fBxSJknhdWW36AEzJvMGNXhqFGHxwXEDHnMBwBNcJvN2t6JPxYJ1Tt81MbK1xpen4SrmF2dSWdjaP7cDnCpZ9EY",
  "key44": "45rqX9C6iZp3zk6x8pV32EafFH8ycDgxzPWLdXhGnUY8MoqdedEJ4qD5tyQqSz7gfATg9CNVgJDRY2KqCDYizWK5",
  "key45": "28fbUeJ85etonmHEQkz5bgqMnZdtNJEmagZCUBDupt4KrjCQUgTdndc84tB6DUqCKLu1r5ai8vmLQU7cv7jkBDyr"
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
