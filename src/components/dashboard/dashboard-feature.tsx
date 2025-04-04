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
    "59QopCeMNzgFCRBGiTXd4qyaCmarsNskMWho7LZRHKiVjwuUcrrQVgpJAtdopNWuJWSHNVjPQyb5yXUnsPGsVDVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53AWfWoFprvwmpEmkvfUhLeaxaJk1c3gi1a7Pj6HvzLdj5dF1ux8LyNGWhfyEnufAfzDnEsg8dGYWi7ifUsujEXC",
  "key1": "aKFeLfYNJ6qQseSB9Akn43B6XRG7DzXyeQrwePG6QcDLmsa9nUzoegxAwYDM1vy2p979YHdYodLUDU1RSBEoCGC",
  "key2": "5yCsNfjdEPqTf2teFW49FZ4M4WgN3Bw7DFHbm6mCxgiiSMx338KzDkKSAdMo151SaxXMtDR2pvPQDgAxQMrjb389",
  "key3": "3TWsp1TNkefFPQd5f6vFzTwo9Rn8t3HD65JSrqewircpBnDjNFc5jQBvN95LxPzwqiD8JfKTRbJxw9SnucJBiy9K",
  "key4": "NKeX8PtPvi6HM6Tbsau6Rw4egivQDUETdHfJY3d9LN3xRMAJSds4iwBqeggZN9rEsVuVNxyBsb5SyYzuGFDLZ5U",
  "key5": "66BQCgNBHX5Bpq5YeZdiKRj4C2gNe638EFGEWZPULH4nTduiTWfBM99y1xN96iqsiRPyu8zypXDq1XjukVhEvKGX",
  "key6": "LLLd4Gtv8RfYRNLkPxroqvHcgveArcymnWJ7SfTNK2igkpZ9odrDQs5kzfo7hAxWHYkkKkW8kZbm9xHkfnXAmP8",
  "key7": "3BXzvMpJioku8ffsrA2TCiyKLAbqeV2b1gFBuBEuZUoiymi1oAXC4kVuw2LfnfJB5xEiq4AVvndjkxShfyjhGefs",
  "key8": "5eJcvKgf54jRGTojbKh1geJ1F3K6JfTchHRuo2ubd7Ve1jE9bRem81MY3BqC3LyeEUEiY8iF7ZJYhR7Wtc7QEe4T",
  "key9": "2LG8TMrsr4ZPJZrt3WKaSq4Bk9315u8GYAQLkbPGfffsNarU1arV7m2Lb7mi4VGxRYS7yvxzPZXi8Rta45rTyM3x",
  "key10": "5TmMM4wng2vVPoAx8orYp4ACVSaXNWVNzcAgkMkKWbNoX77CdceWe2iMeiSbt1KCkztg96x3D7PDD5FSjG3d5PCC",
  "key11": "4yReZ1rb7SkRvD5czqScxJQCRUm4XyejjShxjxmHAheDDBdFDVvyULugm2YEok34qcdtXp9bx59UuW43arTEFJcv",
  "key12": "5fYGSmdouXQBYZbm9pQrZZ6BvkkYnRRvSbXmMmWrxyu2AM7mpxHbkQyAis5LVMCQm3JYaechtSC5v3DSykww3G8i",
  "key13": "2Da5ob49hqXffoPD1DFuVvpryDWYtWXAgLHaZ4yngZp4rypucD2ygAzQEDrR1CgSEWPfTBmNHA3evuctHpLKMuYe",
  "key14": "2Coj2bZBpEJR41G651ub4XiqHws81MkFpoXunJKAvp2YeN58cv6T9cdTYjFg6S23K63kK5QkX3gZuqSU427FKSLW",
  "key15": "r2kfemgbXpkcJ3RwzX1YN9TRB9duyT8ZXPsTg1rMFePPWiKaTGW2zXwt5wpYUs6Z1bRjQhMvn29oXoLWBKReXck",
  "key16": "2iWVMtDCoYwygpVUu8u8Cp1wqmuSTnk929wfitWX8mPNwQFR1PT5W9NGHCopVShJ4siwzwrVcbBdnDpofmEQW5S7",
  "key17": "26DyXajSDvqBhUmFPGN5KvwhSE7BaUHgZt4J76QL8kY5op16snLJxKPh4EohRsoUhF3NEj7CDStVQvr382gRKX3T",
  "key18": "5fZWj1Unxie12R3ftasSTtEhQgv8UYyFux7SZmr2dHHcbTw39W28HFLjCXztBLefZmot1TnqKRueHmdRPPumQC7r",
  "key19": "VnCuvdBNsHu5AWpJCS6YP39gMNEYek8YDfoiDQdgr7fSt2wV2C6K1E9aEpecutRixF2YPRw9YY4U5AV5mDUCPxp",
  "key20": "8sX4pg3RDbqVhUxw1Vv8Qr7pZyYV5WQyYuLkCv1QB769haH1hW77NhsBanQ9GjBEvtyFESWxVV6YbYn9p4Ee6aC",
  "key21": "23nTgeTDi5uwFYcYghf7VaWv1kHHURGmDtporVekbF5EKEM8A5DoqhLL15yv8vn3PvGeSHRAr1FFCV2tfVpgARbo",
  "key22": "2mDyPgAvLdNaPKtrp6G1ejLbf7Zp1HFyoN5tK7yn2fViWTLXPHqRG4J3BhNND7FNDy59xX6dNnwjJUEuxain9Ci7",
  "key23": "3sATZ7K83TeaPCzxJS4NWuDDdKYhLE395ehQxtRTAA9jHeiBriTnBiiYMBpmYNqv17cy8k5RrBUqbVnhrXg9mMGe",
  "key24": "2VWSoX3edz95aqBkXyoPtetcYKeDtcwsna7QoRF8San1KqNgQteLLCKUxLQi9Mj7peAcC2KRCNgLCqXqvu4SDqqs",
  "key25": "5EHQemvNPpmEn6nEjzYg1uVgLfMcSAMJ7PRGpd1eYk6HtXd2DrbCL2osVs5YwfcChMT2PGfUSTDRQ6rHqSCCaM1u",
  "key26": "Y6ED7Aj7w2JWXJ55Moka5xbtohHKfBCctzhF7r5CVGipEqq2TsdEK2YiWiLx9rBGi9rjYzMbW4pj8wo6BjUz5YH",
  "key27": "215d4etXrXXRYDKhwPWc1aMV4jXJGVnbj6nzcX8MFwdnn7MJfiC6iEN3FUQD7PZPf7JVk1XXD1T8gv6pHMoUs14c",
  "key28": "wgJVKffK9mxZqkeiV5hG17DU3TVtoAFyRNbSNPrk9o2zzLKPSXfUWFHPPYZzdsX5fYDpqJfk8E11oxMAb3Z1jHu",
  "key29": "2yRQSaAdC8yDQ4tbA6C6TaoJtgsZZnTfD5fqLb4ez2W2HT82tnXWwMbcexQGCkKt44jq4fwCytsj71x9C4m35wsj",
  "key30": "jmUJoPYjmtVwBu8cbJVaJhkH3ZfmAjwb3WhqJcDjFp2nmvoPwnPnfhCvMGDVgLeVdRjRz49SNBUwqR8ZheXFkAB",
  "key31": "57NjPQQrno4E1mvaDeJaSkmantFHpJNKHbahZJEy8qY22z98331dLVkAgViZchQ6Msxmqgx3WPhyMph6SzyeyFCJ",
  "key32": "41vE2avb7Ab3t5DrY8amSMZDJUvq8hdLRH7KJHxviFFAAaFGL2pgpfbHDN1JKhys5ytUYUX54g5VgsKuK5aQaKsK",
  "key33": "4ZiKuygyswZbt7Lbd6Sm6nWFipTofexGbvQ8ZnYrmFvZQ6Qu8P5FEZt4emCpV8vQT64orJkzamGoWu8Aii3ycEhw",
  "key34": "efewF1rQ2THYwYcQ1tZHjEtyKRL5WJrdcEq3SqRijSq98JTtCcKPDPrT3cm8Zo6FD6Ftao989GQpi7xLXDijF1R",
  "key35": "2pEuDFAk8gtzMRorkfq8UAoT3e51BMFdhUTV8bKWFQitrN9gVUYxVyEStqdETYegu4WoCMGEKUx4Ksh2mtNqc7mG",
  "key36": "qwDPgppP54mn7nvn6n7dPpLyhNFQ2aPd1MvtcDUdFAwPEVDZzTtmU2Mdzs23hZP8mjzQZ5VqN3nRP4aszaP3bGf",
  "key37": "2nBfeLP1R34DJgETsocPPLHdtpRPEaUYH95VGDmvPmxzucPTD5SBZQo9vyyjEYZ6Q4N9PTEdGh1SiVu8zyUvv3d6",
  "key38": "2Jpgho3ivsxP24qRafKi21A5cM3YDYzy9VUvXWzrVPaLkWTxkLmoF5n6Q8eXC5dVX4A8rrx3sBs4dcDwrkTFQV6p",
  "key39": "5DznyrFpn4bLWqfVRo99sh7oqR6c1PNrH4dDSGqSaRpHH4isXnbEFzYC1YjW1TcE3yo8M8gv7MF6DKd4d7Y6UMNN",
  "key40": "49w7jGNg4YbHmprnZPbSV8PFS5xiqBjjJRrz5DNi7so3SGKFQRtK8bHpcvmFaND8prBxo4hfCxZKbxnfXquKnDu9",
  "key41": "2DCYwhPpXcALUcL5umLXfdDcfoVDgfrcPArGsFoL4MVrinZH2KH7d6ajBueZZ7eHJgFtEJYSoibTnsN5M6s2uf9m",
  "key42": "3bZPYwYLv2iWEkhgXyDjVFL6GjMMVV8T2STWBcK7YqkozRrGR1jMfmjf6MpbT1676ToPXmogC5r7mnyj3zGF6hd5",
  "key43": "41S2Zk1ezTfFQSmcad2n5ghAftJQ5nqhvLxLb4NpCxmvZNxfw9FpezPbXvojpDJB3eg9fbj5TqyVFXKu3QxyRzFz",
  "key44": "122p8T7TromDVokyNcDfscafnW2juzjZnWT4KXFCQEyFcwtftEBgmgqUZUrcoEQmF9vGjnzgFNxYyTjLHYLDP69a",
  "key45": "48X3fFyp6g3gVNWv7Y7vVQTSoemvynjrfqABxyAEqaDN7gU9n3EziuSY64FcyHPcoWCcxvPNav2Yc4iFYUgAfqi4",
  "key46": "3GrM5C4WMXc8PoGFtJtDpb4uoaHjJya1R3NH3xcwk4imA8KWR4YLK2USCtyoiFzCbC2PNCGLFiKXn4zwuZtSAcMp",
  "key47": "2tCtYEpj6qycnv1zVukHYNEiHVwbYMM8mK1TVHRYPKocmjhddyej8kBjCLwPyhr6vNPCwKHrDMRghg6i1xfGNwcc"
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
