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
    "3prApkkg5fBiyAmvYAwBCjuKyPbkhMauj1iWhGv6h52ziAZUPcFua7hWo4mVMvTsfir5ZJ9pruU5Y8BhJaTnYcri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zMjdpYYAXBBQx2RZcY94XDzFrNc75g2shwGyDpFFgk1xApxZe4xoCiTpKQQmSz8ZibQ3opSJFRYp65j7yxoLCHW",
  "key1": "3HpSc8zPpBst64Ptr7U5bY3bPGJ2KaNcYmBAT9zdz6bHdCh3VLYDRX6oevfZHJf9nz9LMtzz3LTx2NbUxvhYHCZL",
  "key2": "4NSVQqfxgCxCh22oF21gcP23kuyGoWF5Ue1LYJfMooVhBGwNVTseb2fYMWqzHaTk9uN5cXoVGvTYrff11Gp6QdEN",
  "key3": "5mSZYNbwmRhwd3h6P4nHAjeSVenib8vTVjVdeSdxj7umtTubyzC8Jvj4iHvzSBRXneq1GQRKQkSkeHJkfJtUBXmE",
  "key4": "25JUSnVK2hFF5hH3urHW3ULFPGrWbbczZqSnUrJnZ5WSPiSXbAKXFcVKZ97dJ3KgHmCiHQjTF2gxsiXSGgsrhNoA",
  "key5": "y5xaToEj1yze42LVKWCkdeUrAWHGjdT3pU1mVrbQCjbHmgBzwvE4WEFgcQY2TS4ix6GGYv3WLAtzdAgw8rDbpTu",
  "key6": "5jXvkbPp2zXHwqfMpT8V5ifNKVXNqVEtXsCZNE8NBMoiyNQuCYBRh8Lir6jRADgh9jkrAJh3pTAw4nvsh7duWp8M",
  "key7": "5WHeDxDzupJDtB6GmLEiNbWUFEdbGFVdwCwPaSVyUcZQdZH9F36n2MLAJxoqB5QFhDV5huPZ8nd1mxfgjmSffYvE",
  "key8": "36zsGndzP5mKj7XaWLJxv9pgdXBDPJPnvsC5zyBLZHetGNzry4DNFHChnqtqrbSDhF8QqFBQ3RWZtLCyYBvNfT78",
  "key9": "4WiML3UDpJjENn95Me3Bu1hRra5c5cqT51wuw6wwUedqUb6Rp4YuJXc4CYqqXcLWECeNxpnt1VngJBKzMjLQXGdn",
  "key10": "5uNEQZ13eg1LFoMoGgh7htFPXFgx6BA8urLK1YtpYSndXEhjws7MpGMmcuyQia6CEDWKwtF9QD3MWb4GZTu1JdGz",
  "key11": "yy5BAdPmeFyM2hD5o1zEimvTxjzhgXfQ89tvZBD6Fuc3VH3LKY1s1fd3KahTXCVuVRSNG1tvwsVGq2m9Bjz7SEe",
  "key12": "51Datcn2YvN4sjnSPE1u8DKgTtf6h2ciZBf6CfefyiQboptjxuSq1v98YLPt51he32WWBMMZ6uCKTWGhAVQgz2Kn",
  "key13": "yAruwqjayEN7x9XkZ1NM1htfoXqEw1SNy6hVRMDwMfPE9PXBTBXpPVSM4WsJ6oZkBnqpxseatiXtgT5r317UZzs",
  "key14": "a3B4yqyqLuH7ZFnxG5aotSHroK9u31kjd6vfesJQWq1GYVCBy4UWvLPwwsgSdWkCY5yjqcQqQJkNUkHoh2b9oYq",
  "key15": "4cSQSzFQuhFJorMsir4XVM1MxvESTDMm8NUHy6877vTHqR5MbeLo6Esa26ZWfVp7AAx2UJba9ZxAukdnfgXEhzrM",
  "key16": "5DYDdbiGQajs5HtbhVG2wUt8z5nfGJRW8BgaGh2w7AMreG8RWy6ZqJ2AZRxGDaakbCWpTY8Fuh3yboVGNDWVCu5C",
  "key17": "5nquVVeWoN6yAd7asTg6MyKi1ts8yewHmBE6Buo8bYBtSCukyqPQbUpsb2BDcMfrjUhDNdq9rosDDz9p2Sw2CmRt",
  "key18": "bk4J7LdqEXQRNiU7zc1LzBVe5SCw5etTugtTTSt9a62gmcNi4hMQjQZRoPZNP1SKT1FUzrM9JPb58YobtpZRo5r",
  "key19": "2dpv9Jtem6UUjNjRfbb1RkeYSSRKT3cntHE8dMuf9vhjaCopjv8YHuiJvnMP6BMfCHtRYn4bfpT2KSKC6bsAUWkj",
  "key20": "5LZ1J34ckcP6FpNsJ5RnHkA14tARnhAR5t6uSRqdkbv4gZGNyxTZUdpmueAjSJg2bqHLVCjh1Kf3QwfPfTXtx64T",
  "key21": "4RUEzW24s5CzbipS4euQR3CWG5jFigLz5houUSntF3Y1NT56DP1jw434PBtg9h4QYoD9yW9EpGq66SRbQ3SAH7Pb",
  "key22": "3aHg3SP9sGeThRJBLCnnBZS1fchdgbN2A5LTQeRnKCCRA78HLxvJRkVTmQDrq3BPdR1vqmqjbNbEWXh2ybUnQSnf",
  "key23": "2hrzEfxCV6WgUmxeC5vv5QqmEMnKFzv52JQHhYhmHqEV3mynM4JtJgBHMhoWnaYoCawXXAdhLeP2E5GUY6Y8Ft5N",
  "key24": "5FWsnsVb7WDgHpVi7Gk2owBHe9kEPVhSWhHfjfvCk6CwXRFrBKsXFn7SP21Y7KS87fuknxnmSKRsDczHSAsWk6uL",
  "key25": "3tMBHkk1CvLy1EpTyw649FHcsmS52A4Rtgf4CwkbcaWn5N5QVJ2ckhNPBwrFsvidgsqX6cFddsH7agSYhj4sYzU2",
  "key26": "2JnA8zwSUf35Q5bRMHQrrnF2yoFiQJVgETur7hQSy4ozykKAZUhWzs3naYKGLCwuxNwKuinSnN7JRvaDq5jS3V89",
  "key27": "BWmox9REMnEUem1t3Mz3iBUwsYWBDmk2dxDKSP9wuhy8S7vu9rYmfNxn63F4aDQZBRjTMGZkrnT3JLCBKWz41aR",
  "key28": "48VzX7K2ibSN4cdYbuefApgcEHYUDAffzvnDfUSRUNDznyfA6G21nZGJzw87JuiVWPBouPGm9fpCnoAxoP7PRZk4",
  "key29": "2foeGByHqEZBwKp95ZUgzGDmKTjUampY3UtwyehWkTrQ5ugKEdUGg2QHSN8cpQh3dVJduAWkq9TVRwn7tofHkK67",
  "key30": "49vy5grT91b2VCrqMxhR54uEEb97ueVQfJppyJRPymXZpZYji47hpDi9UXJ7vZXtfFGJHdSzHCVTmagTf9XJto3h",
  "key31": "4G7GimZcuTqN2SeCsPe3fYXRS7B85TA2atMv2DCWqK28Nhb4SKoE4ERNAbtsqgJk3eRCtzrBkfSoVbgPYFrD4Uoz",
  "key32": "4h9SxPP3UUBoL3YsHDnDV3La2viRKRBvrUkLT43A3LJVwJ3R1q2aYmRt74SsMEugJYm37a82HpXDXfvT8UTfKhok",
  "key33": "TNibAAzQ2KRiSoxririZWtfsdGpKUJ2Gjz2u7btJpZmSxw6AVc9rFTtqoJgpGUHwXunjmkFgiHxq3SsnmKLjUGR",
  "key34": "4cXjkyfKDyYFXeRukiq4RJeNkn4H6pmKdtCrjLZQ5T4jStSCjxNvZuiTDscRDJBLfmfnVR3xaYaj5BpZ51NmgWNY",
  "key35": "4aV5ev2CzogX5DyTFeA1Di4r2QUT6nxWJgdd642n1u2FzzU9EjQzggXu5jfjXicBSDnArBSxKMEaGhiazDzKg4ZB",
  "key36": "5vp5rJPJEXWCaRBCdo8XGcUzYaRE8zB1Uk1EMVMzVfaKTBgfvpxjfasMZ4yQnmu1jVvjUs9VReUmLcspiycZU9UU",
  "key37": "3qrgPnhdGsQc9cc43rTBr89a7rrZ3BpouBRqHsLtDCPLjC7CTXJ8orBBFiBdjMovRKM6Cnokha2RuDYk3m5CWxv5",
  "key38": "CJGWDdJADU2gdW3p3QJx3CDAWcDe85ayFT4hFQYMJ1x8r3b4xFDNApZTUNugxhbN2dJdKrigiHhMrHGJYRoiwa2",
  "key39": "4dsoX9xxLKfQZkXNiz1hzibSaexeShDb31vNgDnVFvBGio6Qh1YprqrXBKWFgU2sF2g3mGX2BjYVPLnGDzQxs3hJ",
  "key40": "3MRsfRFgdP6fV6t3Rt1s1n3T1hkz7ewAVvst6eaHwGWNULu9AMufjFexZvpRbvdos4nTcw2gWtnHnqfBA8KAhHvf"
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
