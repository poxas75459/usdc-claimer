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
    "bAsiPYDN8S4ee5SyQ1A97MCw1cEnZbX1xYhpfNCbyeoZQ5nTuhA9GNkYxnDXv3q8BWHubryyztws9JtYh9FRg7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gBGUbhchh5gT91YRwwnPGs2sJVHGf1HzqnbehoB7ExXfqvJbPRgcphNAqjGs7pBtnNaRUBfWCUjadg4sTUxZUE2",
  "key1": "2Hskncay4ZKVobdm3yTVwNxZqMGcydkbqfzmRztYbzHtyDE3UD6ADs1zCqDDsDDCMFD3yiKyJBvUPqiaYf4uvmpN",
  "key2": "3Q3qiTD78Wx2xP6s3CDTHRC7js9oLLozxd4vARKhUjFqUeG41gPa7ev4msQ68vz9eYoMYrLDtv3RHjk32ZxSR1jr",
  "key3": "4JMAv7u1r8yWcfv2sTKWawnD5xb4NC38QZuE39TRYFUrXUwVntaTxShT22Bmmb331nbvyXjtxywe6gRutbGjNfhK",
  "key4": "3YTkMEYfqMcYghTB42WmQeNPZDYz9TfWBhUPQ7VouivMtnryuWn7RqRQzwwXp4JeQY6JuiCp5zbFQLMfBA6wHSqE",
  "key5": "5G626oPjMAw9hWPYXohmQttWmmjLN8gckrQJfwb1Lsdj1d6Sid89DYkq3ZrjCou4hQMFZA1dM7qDSu9EvU24Cv36",
  "key6": "2E7z2TUg8ibPuG5WKgqjWZ6kbSKBSEE8MzeDynfKCA1TBbq4V6Q99aJFBg16tSo8NB7yJRQrztGdEF9fJNk6aBvf",
  "key7": "x7jzQ4ZKMgd4S13zcEh5VUgSnnFUMM2rtwN2GX1GmxRfLiPBuWTkwAF7fDQu4A9Gz8Lo9xjqY22xb2vSAaMZVbo",
  "key8": "2u4PD7eHudFtuskrs2TBa4oFPDwsyf9Skk8FNenyqHYZ2zRJxRo5uUSF8azmJqWywUVsu6bQTxLskaKvZgwL8Ytc",
  "key9": "BLZYMmnTBHvvt1jgg1o1iwEjpY3amNeXfx2XtcXayddnQ3jJsRFB5yqPRt97CDNFbMZWv2etQkparadaj6kUE8t",
  "key10": "Q15MWGVFWSC8H85DfnJx15EyCZGYWxntsJRWoD9VS58cdRUdK8sBtenEfXFBHeKcYN8S4jAZ8BGhxxbdC3aqYV4",
  "key11": "ete8HsyRF3P5aBUyN4R9dTC5d4JWppterzWotFpuwUeZLrdor5rNwZr7Ek6pL86Pg3Hy8X179yzqz8tC329Gz85",
  "key12": "2KdR6qy7xnEA5MYpEaGU2kXPcxACrhTL2za6SiiVshZafqLHySdLa1XzFUfDMvQcCTQu9MEyr7WyVR9pztEQnsLs",
  "key13": "4pgSnAvxH6hab3c5Xpkddu51mXUy5UmJy38mDdnMEBfxoXCSjxeDxwtETuWGzDAkLoBGWWrqRThRVBwwjFtqM6TR",
  "key14": "J3zuGSYcT6MjUUqjJRXQd123YCLGkyXHDymDS1WbKDeaQcJa8NcG42VFfkgkgJucQLHEovqdkCTuocJyJCBQsVL",
  "key15": "3cuhNu4hjbUFJs2G7ESi9c4QGJjcp2mJQPEUTxu4FLNNVDBGEeBtiouWSRWuiHuF4efrPLWEHzQqRacqv9bdRRdQ",
  "key16": "3hYmyUHfvPuZb5hSvTagxzETRawqvCKuiSfru6pVqLUZbaPTaJdq3ksPdPxFs2kodGmvSJq5W9aGU22rwoy98pv4",
  "key17": "CqzVc2Dk59t9KQgwd4AGcwDxD2K3DLY8bo2TVV2JQvvtD2BTvPm5z5p2CrJvw4sjKqP8kDh1wzqGFZDYsKYPGgH",
  "key18": "FLWJK8Ae17ewcyZRRYa1PMuRBAy1P3q2CgPhZyorr4iMCvqEmK3jpc4xGHkQm1xUMumBy5qyNurSzgehSkjjq7f",
  "key19": "28ojsa8NTRL9hzUQomszpbGQpHfVRT88rBGjqpojUjedTPUgWxRdtWH7GZLTHjeF7Pf936PVKknTAsxGgcVpmrDg",
  "key20": "DchsZbmE7NxJLtU9QZd6NTe1L7awzEaBY3GvtpfUFHXhbyorPCZoWngxhMBpzskvDqmHz6bpJUXJA2V8MdW1tt1",
  "key21": "2ooxevYmaADkaHXch51BEwBJTYRrJ3cc54FQGc5M3QQMi1wUW1rerNKZiZSVvpg7Eu9ALxWyRXYcuEWikG7XnY6p",
  "key22": "MrN8YnQpVazL3hNS3TuzZpkJdNiw8YevJ11sJimtA6iMAcJf3fJMmfPfg5wz7YZMECoPkzcmH2kBqMykzuMcsHV",
  "key23": "5i5w5F1Nt7m3qM2gzgsK1WG16RsfEDumuvnJZBEq8MUDphn3Lz52hmkXLrsczw4EmTahrJc2sTq6t8CQ76SzLZCk",
  "key24": "KdYTquypSvuXRwBY2zkhSrYavdSUNdtySTvEtNdhLfgpQbVcFPkUZVM1wemYJ75ABGUb4prbbHHbDShpDAcmKHZ",
  "key25": "4mRGqL9Cx8kuWsRfJmJfjsaccaEmv4EAAz8UWxoWwWDkD8W3ny3GxMTEBe7JdgobmbwTisxAr3hGUsKftpTtnPFt",
  "key26": "2LYLkUCNZhi3Hse448Jv3kDhhcyNacSS6uu3tWZVJQijYqPXRUc6eqHiTdmkWBitqpk2fiiL2gmJ86KZAP3mF36b",
  "key27": "4exTGm6Qow4eedBTNCHPns2rKYtQ4Gk5w4vVGfxdnvWDV81gthLgvLsjqfiLJ2T5qhA9ftQnKEBs8PzhVvbtDR3B",
  "key28": "wMNd4ACobBci7VaJGKgSAMixyXrY74wAso6MvFHxZXxfxLD3J28GypxnHKwgmVAmmAopNqX7bLsbs96aspHnhw8",
  "key29": "2PmoeXp69X48rKGgCWBDZWJDyvYjD7MtsEdvA5GAfVR1Jc4athn5a52TE4aa1TBxsvXJC5R6PfjCAt5pSF6HyqnY",
  "key30": "2eaq1cAafJQhS7aUUwM5geUSgNosaRjLqW2yay5nWKyunviQAiZAhvFhE38GwHRciUNnhmCTkCJBEWxUbo9bUCvQ",
  "key31": "3s2YJB1fdFNdSv3TUJzceaKx4ghXs7u34goi3P7Sio8hjZkwBmbpsfqBH7BGJsocCgXTK1sEd6doxKR6H3dsyKV5",
  "key32": "2ycYW9SD71ssvqbGRdDw4cCB4zapijP4prKwi1sJvMwsiJNqrnXfFU45SvAa6VuZicGBg4wRXYLaX8EyZNTiWdaC",
  "key33": "64qfZnw6RDdnLmiCutpXhn6VAQ13y8uPeJBuq4KWkAeSAcznUXQPZwM3eo2WtYfoTLhXNak2TA2fDzQkkVkU8EEB"
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
