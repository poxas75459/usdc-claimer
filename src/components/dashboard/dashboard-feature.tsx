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
    "RBmM9rmgjMmB2CPxnNCPQu4rVF7fER8Sc6aBeZWCcwWvZSZhGG6Pqo56XJpZxMrjdBwvemc1xhPhrAyEEy5pqbJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UiVMg986FufNCgfXnwimHou9HAhCAdHELYfU2tfDYVGkmwT4ipoHr64pqaXFrVUYBekqouh4KKJUJSafGtTNBWZ",
  "key1": "5Z7sPYxusY7WfoTiNoEjPHPCuDrjvfqynoDimcFZfpMec3GXaiwodfYSMehs6Yxc5S3A4zqMZ6QvrnXcikek2ndx",
  "key2": "4amvMxovMFAQ2UHGmDkWMT6aTy8DmXmi5UCCjceSy8W3T3W1pacxqTTEieTfyHG8ZZYaP8ABnqKPhd1VbpSikog9",
  "key3": "3yaeyX22qxjUqAv4j4ec4gdkn17771Hz1P8gnCjkDBP9Eof4xxkDQm1EGmPUeVLymA6UdVKa5bfPjD2HWp8p6kRz",
  "key4": "2Xzv5otbJMSvu4dnmiGuJormwbMFmHqnmgpAwSE617DxQreYB1HBWFmSByjwNgW4tUo2kYK3ZFeyVinuXeE3BZ4X",
  "key5": "4N7rTSWeGDJeqJMm82gD5THymJdHLPZsp7X6vSZL7jwi5xzgUxQXGEJtSZriULCz8sfS4roCybjBC23JWSw2FkfX",
  "key6": "5cenYXBUDqPKjH9sJcoxHLTtaEobHfrMWapouKR4hA1xabhwrUWJy3M8rZ1i24XxCp8kPyaoDzv5v5BZ1fDjqNi2",
  "key7": "EeZw7zP1aQwyNpDYg4eAPXfQgjGq9es8VL7fjah3D25jpr2JCaKm1jFqiFmafTCT32jcxANnVJH3XWN3sZCnWqM",
  "key8": "3j23x4kxfK6zsnTfDieVW1WXYZgEsevnU4PtYZ7uAynKXvtdzW3wTBNz2tWHZbYkjzKnorpKbid5XqPwbdCeskGs",
  "key9": "62iBeCjNncoLE4ktdiNy3BhKVMuYuyqyoMaUMZfoziA4F8pUXTNdmmdbVaquxnM1Ypu8DXdG7orLbfUisxwjpg8o",
  "key10": "2HpoR2mqKBn9TvgRvvp5LXWCsW74Un27qknmQHTiGMdA93mx2HRgSoQy2nF2VQRcShWBQt6D8LE5cX57hdtFpmFe",
  "key11": "3j6VhoXHWSghyw3fN8nFDVkRkVfq1wnrj54o3EWToRTJEuurRYxq1DFm1zcaugnNeRks7vFa8zGkpdyTVYuyJY7p",
  "key12": "4fLVMwu8KqfgngS7CKCdtKhR1uLv8Q9ZPdQqLnkPU86tPV6h1zQRMBHETXowwMeDgseiuLUAFnLqQQcKYfA59QxE",
  "key13": "2XaNPezZiUqSn1ceimcU2hss2j9foMoAsLa2bzG5ukyVPHmywn7i5Ly8k5NkqpCbgTagjsXMdNuLAR77J8a6VGcB",
  "key14": "2xnMzJPfFfNvEtSBGauQjhweihU6k7a7rsyPK2Hq17GEVfyM6XHci9F96x8dWpAVPPrp8x2E8Z5pKFqtJ771PASy",
  "key15": "v2uWwNTgXZ8VxGJrKazPVUC9gAU8aAJ2kc2dACRStrjoRYEJYh1ppMra4Zak7xhmpNirCTvQsSwFcMwRkFw9HN7",
  "key16": "31RoDntFs9aF5pLgFUzAdHAbxTv342bMhb4gXvTMdAeSpYF4529ZKR3CLgnaBj3q5ShYEWAFtmQARYBpCS61XxFF",
  "key17": "XXKdrn7wQa2Qssfj4wjwHpXti9XtAuaj7vU4Pgx6Gjk6JA28ceePFjyg6JeFddhARKh8bSqsXWuoxetHFt5W84z",
  "key18": "BWbkLsu9uNGgTmZwgkZHkB1jf4wi3n9NetdY6kRcUee2dJZFhxEN8zMyvVKo5UFvyQp2p34Fr7jwH7izaY6JVFZ",
  "key19": "TYTDEqfK43iZB9QHn5YEbPVQudHHiZ5ENnbPTFmTPQAVnFyui9io8nGnZbddaPuuodByYu2XHa7ztmUxRt1XoCN",
  "key20": "4iah2XuKe9S5zdcXJNzzG4eFkfem9rcMzQjBsdFSVdtHGJKjiEkgN4iMtLRGf2DNdmovo6BLjThwwG5X9fdJE1rf",
  "key21": "3Lv7hujwLXFVmmRRSJsZBvFVRfFJJWgXoTi9tzB5JwCiqZh9hoWjBob6ExjdnbKvQ1QscRtnq4SSDsSXvvm5gmTD",
  "key22": "3TkfNUYyFjeneftXbVNEkikHEHtJVFQ6juXi3b4S7buwgPyMEQsQ2CtKfkjsjAuoHickrcpxf6ka2rpWHE8N1ayH",
  "key23": "22Wro6s3NR8Zc88YGJFy6LwQpaeFEkDJkug3u2Uixpj4tJaxjoD8s7FK8xzsbhcJ2aTsbvsFo1RXAbE7DsNFHNes",
  "key24": "4LJugZHRcGVWzqukwxecJwHts25NwxpPzgKmMVCFsvbKjJghpQ3BTd9CWJBZFwU3dyEaqTrWWGVCR4DqbZ6QaKFR",
  "key25": "3xdq1NnVkaHvreqpicJjb4W36jLpwQ4hKMsiC9VedsbpGi2bH7Gci7tzRQkrcT8SLyVxQjsKapwV1qpyN28dRiRL",
  "key26": "5kb5TSNUvRAds3AzScuYpViDGAofEkkoFrjvc2YJQfbEy4M38HB2nYswQrC3uNruaztz1QTcq4PDdSz1JTpmuem8",
  "key27": "2YBEjLw6xtZZoaMCPf1dX4M3Zc5dxX7JZo4jpNKitwBw5atZGfk4idVbzB8QsHg67UdeznkAHx5kw4mP62i9CF4j",
  "key28": "5D7NPocrEhqnCyp86EcyGAsi9BytJ7YeaFQ5M9uqvGs7dysoPi1J1U2DZKx44BvKJNMyL6stAbywV2nDUedqGo5x",
  "key29": "5zCJv7MY9QcV2bvnZVYCseXet4Lvo4akYReUdWEvmirDSzDoGrnqFGGWdAfMsLf2WAZr4MN35fNmjvnKjidMnZXM",
  "key30": "5qi8849TkbsUeNbrKXxoDA2Wn3TcYtakpDJzPDyPhak8miGX3uqvjL9CXP1zuupYqoi1NVXJqfrmxJ3Fof7H6Te9",
  "key31": "5Ph3ngw7juyCkNAU7BUD9dZJG6jpPP83HK9jfca5usDMxAroiftiPM2GFZxP2XJNjXGGo3j14uztDgTz5Y66jDC7",
  "key32": "2Q2Fov9koWjsWuRbkS2mTvbQyCNKWfwwzWLagiYFkRx4efUWSXi2MbiWSXFo3y7NQwe1rNNQZMrayFggpSg55yMz",
  "key33": "4BvsgDEKaey2DMajdv9zXK3WEFkvGgKCWGHPzAPzGABvzW9CU8kfaqejuBVSrV1JWkkEdoNbo5LEP8y6pxgZGm2q",
  "key34": "57AhkHNJdjDo6DdT67U6fqFdbj712ga7SkXMeqyesHu6g1ZisPPcsqae3F2EzdDCbqGdDYCCJm7AZjzgANuHNg98",
  "key35": "24KCxHZN7nfrUSqzMmVNvy8GiH2Y5pRHcztwAA3a6kmbtmQUxWn1AWiKG5xkULSHtwssP4BktD1ChGYCucysbfcC",
  "key36": "427EMwcmQazyzcLGMR3uqSgNUHsifWTJysXYbeQiBzTxeyeJr5pVBsxiSfiraRjeqy3AVHfZKzdoLP6WkgetH3V",
  "key37": "2WsLwYDSvsfZVQXLwde8HdQKsAa79G1fJvkaee4mrwkdsMEqshyt3jFPKSfxQ2bZZg1eb1ifUKJF2tpbXYcbyzWV",
  "key38": "4D7wRTQDoqFqzrgtxs5fKCDEJHytsTYcQwHRoiQdUR5vBpLWwbjqC4tYS4M2PkCSARZz4Mqv2LHczGHBGgCvqRb7",
  "key39": "21isJsgk7gYEtL6aZ5nmEKqvg8mLkkmWF9ki8uEUv6Pa4no7Raaw5d8fMkMbXNCJxWQkvTVEUJ3wqCcAgWEaVrbe",
  "key40": "2GAGEPKQnLS16UYbL8HfkXTr1SYmK3j51MamxfRvy6FPf8qBLxLjWfLWsukNdhNxt4iu8PaJdwFbMjpqoT1QqRma",
  "key41": "4Snk2jU7xMgSxxFSZ9foJGRFThFi8LJp4zoGtZbhxQbwLLLALzomgpHgHCSf1xg4GuMpV3qRRioj6AMRDPnR3YZr",
  "key42": "2RVeQTrAPbYX7LaMu2Hpu8ig6yb8NtLme9Ff9ueriMkGUpU7R6UFqav97LW8kj7NtdS7K5ABTiCs1AxPf2nsXimF",
  "key43": "zN1nHL6oSmp4emssRXFKE5HhKFCJsciSowjm24eq5iRi2CtRFqfCQbPTAjEYrrxhGRXFmNH767vRqNZJAYGvbAa",
  "key44": "5rxKPtVwXwma9Ro5MaqKaiMqDnGevbcPpY9E2z7zZefDGgNDt8eELbx2EDZUkcHRUKqeCkgeDdaPeLCvCXMJ8vKv",
  "key45": "39YYojcsZfxtrCtemxPqdGye243fK39EJHULSmcvuttb2Q2bGWwpTnvPp1c9TYMqRntMHKCWbaG2Z9bMnLqHY87m"
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
