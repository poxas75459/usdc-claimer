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
    "2atwK9iSpzwAGcbdGEqAjJJ1WzNqtXEzuCf7j3NRKxqNUVfxGnU3ANxioexdxLf2xRYLHTYEwc8h1vGk8NmHAHsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aaCkc3otyBzi6517hXFSt1Sbh4H9Yq1ABBoJP3fYxzYifaPvdVF5vWCvdwd1MK212fok4NuPttj8NWDoL9tBZpe",
  "key1": "4HHZwpC5v8dod9b4ubvRK1Ztt5NLSWXg2h6k5LFeA1ARPMEeUv5nVT6YRn5EzBeUS1CFiQiWwBkWxrT7mdRoz2iU",
  "key2": "4Cin4byyPbstpvDeiq4Gzsdp4KmBGaauHcqrbxPNvMNSRMW6zg5MmLrUJ8LS51QpbSC86wzVWtxwhfrgHEfGD8qR",
  "key3": "5RAKjvqmR2dPrts9f7kV9jRb9gGKfyv1fUh1p3x6YgDNkcKHJjUZfvBj6tPUBmwzc6sHPjEjbfjxvfqVDS5jJvBd",
  "key4": "2wMSDfjQD5S7K2r3Y8AAX5aRGJx7Dr4mWgzC987PvTh6zZibJV5zKmu6z3r4tFFXemJuen7rC3gSPpu8Zzu1QUfA",
  "key5": "3iNff8VZobS551pKniJnryiwDL6FGD16QmmDzyqkEevFCN3UPoaaYCCQSMrQDc9Me9oNj4L8o9iBjfnom4enD2xG",
  "key6": "49qQmsyv4zNKLfgpgAqtC3Y77WgKxK63cMxhx9ZMe36rhnpNDMS8u22m7Eujg3JdCnyTkqrR1BjpNkrdBUq8Auoz",
  "key7": "3yqTP3XAc7BF2toWbToRtNCdMne5RMZiGsw2UHGMPkfdDiN91YmXnxdYoFNkAQsNufMDyyGZTgzA7WNFhYPeFT4S",
  "key8": "2doSRWJx9GG5uvdtaC47ea9sBUdr6H2LRXTXhdiB3eTxuusateWT5xXUM8EdFs66EFxBdg4oekRUhmjnRVKrt5an",
  "key9": "2gwduPvRWUeSJwDTGGyiZ2uS5RZhQEf1UtVE2wGMig6dLiqJk3riU7PzjewMuusF84RLDRDPKn5SFoYDGegrCbJ3",
  "key10": "5Dn2nZaCQGm6G1ediXH7EFeVzbkxkzp4TmFpUwSvuZoCBp2iEdcpGKxVSJDdV1EXziUqH3t912mCVsBSr3S3ersf",
  "key11": "HpZE845s34YTQ8vAhGTMi8CFQ8E1bCLQJAxtu6JWKgjqvmTaQmPXxGLmjGz6J4CJi7m8eQYPUugUGXJHthdqBQR",
  "key12": "46RjmnZPTNaWMfumRQLRVAMb6MSRu1tCyamJXxMw674xVMXu7DZXDg6qc8fbb8ncKBHALZTjwdMiwMmRA4xxiSpH",
  "key13": "MxtXVHtSBRj1aawrbjiK43S5izHo4zSHT7WdECEQXmT3ig1FtoHNeXY8jGUKYfnWj8qYDkpoaywbcZUbTgagbg1",
  "key14": "2khhD64jT1FjqprdJCjX7XxEayNryG3Zu7KdV1CsNoisij3GDvnHzkRtKNnURjwMb6inXmPRYhAjy9P5sk6uaXjq",
  "key15": "2FvWzguc4tiU6Uc2LVUDiyTFkYtAybQqeiLnFeqV9gWEoG42RGUgSyauoed2rMwGj9qs8sfuNUPKH6gWGf6R6x4H",
  "key16": "5WGV6GoyPzR4CSQ1YcMz4AzYxRizRGo2m4JTjQ6882ENRQi382gYAXHYB5c21EcRWaqCJPABhM1VEJhQNVMgu5HU",
  "key17": "5AkZbSMRF9ueEv4ffv6zaNB7PKRGo2asMZq6XHx8UGP7ifhVqrdcGea2QgqYcqgozsYcUNHn9tV77fKHvCTVtABU",
  "key18": "8UrBRQYUQonSDDADx7VMW2nfZsCaqBgZYJ1x9ctMzoKxQd2T1pQ4AcX2y7ke1czKXxhYq22o2DSyCWP6RbmX6sq",
  "key19": "4zXyA7UX5qrtxYtp88MiYN9a9x7XHvGbRMbVkJVWiHdhPFdtvDEPVykGXZ7xs3DgpPcPtbUYQhD414ak8Fg8FBKf",
  "key20": "4yxwoN716gkDH93VSMfcz4GsAS7gVgKDbTYTD6r7p2PsrivrsBBEdWTFUkhNfApCi21VpQg6rchVQ99jsgEP6vJs",
  "key21": "4zsi9LYn7BrAAwjc1QP2JfUybr2nyMDTAaXaU9s3DqXSJNHCZmWoZcUd2TpFoaQjnNrujGDiczXXkZnS44zvGDJ8",
  "key22": "BV88YL1Bbuz6EbLhraogqqj9MkPQax2AXgNgYmA9iEBT5Nzs6tp5TfWQgXZTWfg6ZYhX7XxN4LyrUKqWp2w3wxZ",
  "key23": "5M8j3ti1HYcbEvR9tyHu1AQrnTw6edC16F4R5iECwnHRA8mf2qFqDAG9TAn6D9muYuKgD1urUR5eDmNPahzdkKJf",
  "key24": "MxjZpidHkC53GxRn9ZnGtJioKbrNzmegn5VebAVNecQPpsy4f1pm1bt8KRdAGMgHa7oR8W43PKP5R6UpWbWHsHF",
  "key25": "2PUMvhm1e4rohDJWeKmDTvdsKJuyToaRnNfnyo5c65ZD5W2vXQ31q7aXMgPCYo1WS4zdY1skxBqkKkVxm6XM4nme",
  "key26": "35u8rNmDhqRagix3cHmPRhEeEwFwx7A59qL86yhmsLMq51iZ9QFfy393gouwpZkH1E8iV9HLx2bKe5m7B3wryjA6",
  "key27": "4bcMgFURkPjyMdp28EsjDoxWC4wwJ92FP6gPnFMquf6Umou9KhCWR5HFU49qC8V1Dit6aTUhSReZExVrhxQdP6K7",
  "key28": "3HGay4TXocJBEAsUbDFr26hQbNHe75J4ZhN8E1ZEVctwbpGngtxFVHUPZLNVR7aJtrG2QF1jAxErcxJDkpDSFLRT",
  "key29": "3XCTzCi9HLyiYwpgZ28TLx6f7WTLVP4h9XnjhPr7yU5s1XDrqqhyQpkV13naPp2iZbffmwWD71Y6LXHdDnYkQp5B",
  "key30": "5r8Yy9CW9qzwZA332tz8sNfFH3BPZ9pTUFF3LFxqwM4HKznVKLcX4nBiU88iLbkTYgRP5jiTc3G5cafH7Bhsbrdt",
  "key31": "4U7cBWBxLPpP5tkPr1qeKgoXfAT1mkfxke9nZQqDKjxBrBW4mnakwVQBKdrid62s3USshB2wvaNgoATNmMpL83Hv",
  "key32": "4WBUbr76nPCh1fDSit7pd1GrYYwDYfjUrY7kSjwUWrqMgZgFLVtKutVnSaa52sPN5L8tteVxh9w5uo4nHJgibtHa",
  "key33": "uhiBBnRoWKgYNWC7KXV1EULkbUQVstn6s5NGtxzWx2KwqJcUxTfuVSu9fVtMczTGx64Qr1KYA8E5CgoJEFTUG2Z",
  "key34": "5VzEwYG2gWEYCBX3NiE7jHSHrFXKYk3pP4NNcLNcnrka1HaNZA1sdXBdzDQyS3e3Q1295YQ9XrFSSHFG7rG3pzm8",
  "key35": "tW3T7ZnVKqm7kSWag8CrNmZm8nQhvgGiwhETR5fHz9BhDZMkVySLXKaeHULHHj7BQE2CWpqztHhDm8EApFKSTdK",
  "key36": "2omtsHbf8nCuutNLRH7Y8xwGYCPCxdHGeMxokMeBPKAZeLJCbuHiJHnhg61Mp9YDhN4j8vf1FZdG8vVGc2NTSJa8",
  "key37": "7bTFWJiTCQtyb4oP4DERzGFWrcrHBiZQfdFactCsJGmBMae6ss6TiGXuxyFpND79kFsojYmtD7ogNDf2YRZi2A9",
  "key38": "5pmZSQ966eRCx18fVw3YVBcVDPkJ9wA25C2FCrHDLor8RFXFcHwThyNcU7QWZryVATR6UHDEwN5i9oneYMsa6duA",
  "key39": "2iynkymCU9U4FwyEjNQRgwHX9rV6m48y3jRAQdDSCBtzHkhRJqjghZ7C7WBigR8AXRXqDFH1Dirn33xjdVPj7iHc",
  "key40": "USiwRJrcgBuQoTjwqG3cBPVKPastU5eFyX4pMvC7mNVAvugLAtgz6wMm31waej7fARhr4pkEYGNGBMknTtQVr7L",
  "key41": "3cpchBcbjbqsAsq6zTnZ6Xepata3wsKAjhbDFn5KHbTipyU54FoBfRWHr7TrSHHJyS2LxxmA42U96UGCe4AF3KaE",
  "key42": "3TTnfp2MCcz1ichK5pBkRn47TNwJtBjsKMDSdkw4kikZrjiYj56PgYk3NbySQzu7bAD2QNdW9imG5YRbWrJT4r3K",
  "key43": "3xTi4z8qLe86Vs8DrWY6zhXMuEL91CYyjJuK3rmeGxwcm5999KbsFo9zmmpHU62dsaK3ET4Mpw3RRUK6iATgrPji",
  "key44": "LVLSt16veM1jrwcgHHgsrbLTt3GcaFj1Aa59ekLkRDaKjJSXX52tXJYXoqRNQh94p5wj6j2Cke18YcDHtF5pSRe",
  "key45": "2AqGJbRJDKrK2UrFSGJRq7gxE7U5TqG3iWDoVn1Tciy5HPQ4qhv2hZfcu71PwxkV5HkxYt2ooGkG845kXa4HG2qC",
  "key46": "4EBmyZxQrfpWf9YUWgpjCiS78qBCsu7Q447UJZwv8cCQBx5p1XyM4LQtujxYAMDKoZj43f2i8r4XWK9gGK1S5Kpo",
  "key47": "4UsjAfBPzQwosBMQEwcDQeVurbXHuQjhitWLi15znwB1Ct5FHp96YkMGoWvBNG2igoHe3b3Eguw1q3BJU68PihQu"
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
