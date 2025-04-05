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
    "3UPtoU6RoCcRc4DvgpazDWaEfGweN2ZNRt28UsuyrMBDdERt9EMorY9WrVJgoUVD9csxVZizz7GvNgsp5jNBVVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qHgy8UqfDr2BTv7gwYzLJF1kF2MzPr1RViYCco6wugKHXivd4Wdcsw1fYvmeXAHjHH88H1tnzJiQUK2AuXLJVRv",
  "key1": "39o2Sanq6AQiwFECmtvbtLne1dH64FzLRMxg88Y4MaAaP1Zi6rDoMQVNXDYNr75tjbyhtw9kU1HBNwqModyJg4Wu",
  "key2": "56he2WKHPowxBtesqY5mEFAFEKyvXfeDSx734H8trz8ALNRqhkreUnn21mSgj2h8phrLUT6BAGPKFGFFV7gJnPyW",
  "key3": "5gkxACiBAA3uXvPKpKzPcrfhaqYztVZbD94jaCSonSWUGvN1sVX8BqRfq1dtSA79aSNytD8QtH6wJhKCMdqnhu34",
  "key4": "iZFWUmDuuuE355yA1vLXAs6QoonCBF7vhWtVg8o2p7UAQvS1RHeUHMzkxpCTVpRGZp1g7UuiChShoXA5m7HL2EL",
  "key5": "21eZxLVuui4ycWwVtxWZKNmFASp7zACc4jabcFfXDh8z753STXg6kVtxxVytsGp1WRUTstHZZoFHtf4FPrF3Ekzj",
  "key6": "28ARWaAytahZTXEo9xhAz9kBWFJ3JHQrYwQ7DoX73bUchLuuVwSA16DhjMb3kAp5iCuDBwAQf5jA9wVaQc3RHmjz",
  "key7": "4QNjWPJbiZ3qRNmzP6mZ4tjJMgUvRNWNqQ89LmAeWFnMxiKwcksdbAue3Jsifh1ZnYkN21Q7WxybhFgpjBW7owfC",
  "key8": "5bJcua4He51REweBmypfEMkfiU2rzx8NApcsdKQtof2DnxWDMaEzJyd4d7mCozKnT1hsnXRqYFsjGrgTPMdha741",
  "key9": "59fr6JSyb5yXUDumSSZp29JS8vsg3391QjvaNJpc1yRijq4PjXHwLA3xr7ToRPC8zNNUCeUJsztcnQASubczBCYE",
  "key10": "2MxKa2f1Fg3PWeiwJfq3r38HZx5vXVpQfhA1dDkwc1siqsP5vitC9F3iyWBJCr4oYzoZzBiE2FTXDsefSR3NMiCH",
  "key11": "31k3kz2TmuTjrTRYcPXqApBTNx3o4vq9SnocJC9D3Wc7WE9fCSKBb3dP8Zi3B5VeDBNkk1LT71kuBdCpMi8RveT1",
  "key12": "7NsyLXzELxHVyzzX3DHbFeVGzdBvrUeaftxTZ4FdYHKh4WVQ1iVpT6QSdhh5eaTR5TEHe4puBoW8NGEpnPtfG2f",
  "key13": "5bxZCseAZyTPGgfvgbF9BMkiXarjbtMoHQAtcQEWMZ22Z9ebfivVFAsAEuqa8bLxLgZ6PDnWD9RrwDQZXWMWB1iy",
  "key14": "35mADKmJr1nmKccuzfs8v1Tu788ordjbPLWBFYvEdefM3RhGrMyLWuuYqWnGpxL751tk4usRiyL8Wzecz1mqD4BT",
  "key15": "TuPXFutjtZewUzboeZV3NdijCyziXo9Gb9b3iyFY3q7ExqX4wTqJFrRR6tsqHKCivnA8fxENMC6dVkbsRnP9BYV",
  "key16": "2ig6bT97caB1JAN5mnqpB2hatEiYTXAFfgNAE9JvcsSdiTeF9pg2CPx4n7gvo6dWDmRsmAGBTLSuN6kTjukwGMn4",
  "key17": "2SQD8hywwX9kCgPiLJRVZdWW8hqQFraXGT32e66m3Ep28BHinL8Hd8G8zpYv4guyoarKPwcCuaLPfHJ1xH7e9qhz",
  "key18": "5z7ZoyZAVYbruUYmVzWkpxKC2guczB4AnFhkEtKmErTtKWfLfEh8mSRhhcXzJHDQJdXzLavaUhvDNvVvqd9eqphg",
  "key19": "F9S9kcYtpW9jHiMS9FDTyvD9FN2dttRGXqGJfaJpk7pYPT3C3YF7ri9DYDtoLxCHvAmHvH6hEiaxQFppYQuQf6L",
  "key20": "2ANouVWaAMvohaBCx7YkuNUrZT9uUHKpTEbn3sB5b6QMTpRuRsbrg6SCeUPqwnXWDK5tG1QHFPrXfEbmrQccRRq5",
  "key21": "2dKrGHpQTzUUct9mUDBXN18uxApTpXM22D5AzHV32hkgUduBWRCHQnm2EVMhXKZE2h7kvFzV4keEcHYKnkqnifkn",
  "key22": "2P4UutF1eeR5hmeBJTs9tDo6HPHjcJXkhBMq7ngJS8fLuyyHc3te8y1iwdUExzfp4wDeP9f7MZwLZjsYtLdFDbsz",
  "key23": "4NcR2KANAhvRdjEVMWsCUbNEx97eeDc56sxqxPH3kJiawBCv5KVAKWrr146nDDjJ7FBmvxYtfbcDgwW43GfGqG2t",
  "key24": "5VUSKMbo7BJ5iA93f57AxVynSLnzRTkCuWiVXSNSEpPu7YMLuH7HANMTzxZyb9Aa2SGU974CvLrS4nEtDL3VH8Gj",
  "key25": "2USV4wA9btXXooa9AVrHu1pE2pLHK6UgYgi4YKe1YeHWXihw3sqCg1Nsr4RT6qQpFj1fpgvbMr3KHTiDRiQsYxDk",
  "key26": "256jQAYazjoADc2HszaX7Q57NxuPsprRSKqFeMKQZ1SNSn6DYPN6UfvuFpZhSYXZMKBoaZfnJa3ur1HQDcQ91Uoc",
  "key27": "usU4Rr9FnDvhzoHBwYK82zTufpW9ZwNF58sQBCPnnc7xPAaHhrHtfv9Tcce5yg3S3j1VcP6969uBaYuUjNa5fkm",
  "key28": "2KHDw5NCwirK4cPUHhgs5MFd6csdbXKC9P8rTv95VGt1gaVr1GzVuE9xX8wk7qyEDzv5FfeUkhfbyq8JGpvWZfnL",
  "key29": "5LuRxuBziszKRocLDRos1rSp43agzPeXxk7Yb28uiCXQTEMG22NrmQrT7GWUwZns4xszGSA4q8Nj6m8TWbHNKezs",
  "key30": "3EhqetBE9NAX2ZqU9EPynWrXaSVgH4EnrqapcptRXX5GoDvTe1yzAJ5AJjXFJKUxCS2sfRvt6TJwf3jndxatpMQC",
  "key31": "4pRXDKqCDEggCYVpJBj9vfXPVcmHvqdz6xceJhXJ3QdHGys6zCNqg6wpyphvnK3NirMvBLW6Wf3vGbK5JNx14z68",
  "key32": "2zr8Ebs1trMYtirfdH3c7dyxnVrd4sSwmP3TemfZTHjyiNHa3CpXhjM1oWLaSSr4SA22AvNM9Q9XAQobZXQZ9TDN",
  "key33": "2qACKwHhabEi2AjdbrhygvoKxAgVpjnhdBDJDYuSb2h8QyeLfSZCwAZAmnEXbiSRnuZ42MRoNrJoW8akuwcPLBz3",
  "key34": "2QP7EMmakLY8ACLGR4UFJ5YyC9ep3EwHLgkqZGBSFXyXqrp2YutVJakvfQdFo9td2m5UobMZXmERXH92HRkk4vG3"
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
