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
    "5Jc61v1h7oSm3ezAqHi2Z4caoupATUsbqobuJhxMUFrAZ2UGMiXRrf6Yzy683aXvctZytPCMB12cJkXgiv1RhCJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YbsxPsSsWmiNdG1MsqWiiAdQZ3hF9A2c16w58MueDaSV8nQUS3dbP1dHzwff8jeMx8ieBmVCMH1tDM1Bug4GVhh",
  "key1": "36kCnupGg3ugsucYtTEz115VzotMtaCQixMc99JZL9HGy6yKbNP9ehfAyeX9YaDKxNAR1wL3gZWBMJt5mTUzZRk2",
  "key2": "3oEy1ExjyHnexKTZGqjZZf6pzbEdcjuoyXRbQu13gvvNa1JcTrTKcHTnCgmThc8Q5gpxvJGJnyDJCQGSCqhaBQVw",
  "key3": "5hjk8KNmrVUgcfRK5EvJ71EBXUskmgFRYhuvGgSwGYTpkPsW29myLSYnbEasxA1tD4X2nxKmyp63rHkZzFxfgqFU",
  "key4": "59Vcf31QfmPPbUCUSdec17rvENmNLNnsnsgALSa4JHK9Tvm4igJhbWJdoQn6uMRHBoinifbkprt5MHxgaXmLqgJ9",
  "key5": "51pxCddcdJnKnkfdFbvMdCgCszmTNbypgFPiNHNFfapi13w8ftpSZn2PLYFMgxESHWQSUjUXa2Us9uykm68cQRkX",
  "key6": "2tHUhu2hnDWTAQdMcsEuZUhgxbcdHbN8Ei6raSctU4g2MjnFzM1yCWbMddwmQ6bEgN8GDL5y115Ne3rTq5m7Snzv",
  "key7": "4AKa88KRNPqvGs7TLsz34NZuuLHDR8uHohidr9RJbxQZ9GihgURDGWTgfsXBCxuVwqP8sZTD2zgCxSzLoyiwnre4",
  "key8": "3C9JUhMoPpTtZoZSaUA2V9WkMh5pHvYuZ8gFWU8doUotiL6axVA92ZgAUbGkWcPdz1W43gHHFFQuBwsuRkARum7S",
  "key9": "MdaQranPojrPWKACcwNT1yBddtuRR4PUsP4fpLb7pRUTQK9gKp2ucGj7xgNFsqFdDHUgXuQ8C8hgzPBUK9hvJih",
  "key10": "3EF1vVbgCsKPwTWHLXAjvzvmWByg3CwtGRMiBTjDdznPq9kjU2Yeco7RMuvvX8AKNeYTh26ZoKWoPRo8ASNfLanR",
  "key11": "2rfSzE33NcAcmpwwCyE6pxPS6mayZ6D7QaSyfLU5LcdEaKLqXTR38jwpRxsG1DNDxUb5ae1NUBeFRTVMpW7d79kP",
  "key12": "23mxWPxN6VBuTNPWVoTGVQXYFbKvbWXDe6VNWuN7F4sm1i5sKx9Yj2vdCzCK2tzuMMwmg1koapJEWuY29F8LPNLM",
  "key13": "2ai97QibCumeVZe8mr65FyHSR8dTiNCQ6bomGZhBAMvuPhYXfHwbmFc7UBJgRcCThYrTX33qJV1134NzpQ81LDTg",
  "key14": "cBTKpULCyYf5ugmqEwYzZ2CnEb84bjcMLmeP4FNe9R4w84a9LErFVRpsJNocEFxTVvEDMbxhNVqegQYfTAraegy",
  "key15": "2hugsw93wssEpk3M9QfTqcsgKpk5UP6yVdSZ4zEzHctZduJXr5J9g4Z2HyfSPSj4L7uHUn6fCk5WVHfsCifnkbZE",
  "key16": "583pzJNK7vVsJY5LwKb7Bo5gRNgw4xCoaRVuyUay1hLgHVpsKuT1Lg3oY4eRBU7BnnkSJwYZMM9FRfbTQqqnYhVA",
  "key17": "5SJWmcENoLg4z6VCjK1jPKYnAVW9QBPrwNs6J6nfLWCuVcvzrJSkuygEEWdho7FJxVbpqBJWVSoXWntLiwLaiiBb",
  "key18": "63tC22z6WaGX3DF4PGwFxBfqL4P3ko5a6G8zrsSVjmUvEas7rW7X1Tx46Bjy1wNXzJS9tm1o26imsxhqBBaYPK5Y",
  "key19": "2thSh16Lz1ukVb6e87B5mcM9hCd6vAe2gk2hDNJKHidWSEbMzi8o7PYTBHfgXN867ZYBGiH4Fmgad9Ct6YLPqkVA",
  "key20": "4A6iMDUPnDKQGGWFDqJpNCNnKTN8gGpi8F9EcemrpkYhHDL67iYYjcsNbGGcbpkwxkd7tYtNiTP9AkAvJHRnD8kD",
  "key21": "ANhCf6KRBtJhPustkWYeFUwtqgJdvDqPovsDzjuVnq4Xn8wDZ3f6nd3aKafL2oqrNpzMgDwerWEBaCUSn4huiTi",
  "key22": "4rFpff9zfRC3a9Z2usmWVLhrgGpB4wPA22LTU1jd6nxC8xxKxkvdunT1bG8PFHpSkev8x8Qxrosd5jrMkbmWum4r",
  "key23": "t8qSkVAVaUJ8WRW3EV3Ry4hrjbL9VqGBfiMTVZiAY1LQqUHqgCVNgz5EHfLLz4acKodwDEktQ2E9KXyVmDjby6N",
  "key24": "56hszLHKZm9uT1acUxJ6dJYhPAAPPYp6VxdCp8hrLDMsRg9mZPNPPZBw4W6WAvQbhTMukYsfGDcPFnDEVPtfTHzU",
  "key25": "471A9UpNB88BesrMo2Anb2arEoXupMrVrzqmPAACA7eFM61HiymEiYoaAnBBX5Woi2mk7NQMpYYbuFHPjP1f1rPw",
  "key26": "487rbwsTQgp7p8muJ17u6m2T6M7ZePLXNL61nXhF8dC3tgeS9TDLLAntE1dYqKTjZ9BMJ8eDPEYyVaCY2QBcbBe4",
  "key27": "2hrKAidt8RyE48x4zwspSLNUNzwBBhxrbZXLQLEL7uwJ8b3FCiv6rS8Dji3uEuZmpDm2yM9sYJNGkcUWjWfUzuD2",
  "key28": "1hokVKphEqdMMdJeoSMn3tQ2hDuk1mwq4vjS8NHscugXjEvqMfHqhdWoH7pCpho4Kr7fLwaXuyYav4BAao2fAoA",
  "key29": "45Re992bpXQQjBuvtaGJXbddJt1BCgXsCNGE4ANh4J6MSRLQsFkzjxp6enoqzjUTHZ4EWtKu6aXyb8SoueifPsBq",
  "key30": "3pEcyda7fxHLMa6ETdoRXCZgDVcq7BM4ayfJoNqof4sqQ2mhJfbhnq8PpWBUqDrcaKsZaKFBEd3vdkdgiZuCHJru",
  "key31": "4hmZ4cJcbM8g8qUC6MU39X78QqHMpWdQyi6BUKfpK9ZSjchfo6XJzAgVhnKw8Xoachwut6X4KEXLN3CnYe9rSouK",
  "key32": "BpVr7S2FQ8XHZYA6QRjk68zAPmMBTFu9o7EXRGgQR2QToSMxruB4pD7hb6u7DyW1Ym1qU3odcK4WuZkjLDnU6qv"
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
