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
    "2pgQ4LtfpasZ43JtpAcJuFoJNrH4uijzKVPhqfksyayfdSHNLqRMqjesd3CKnGmtpenK41GRv8YNvR4s2SNvBb33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nknqaocJYewXSzPLJ4WDQctF9wkjLaZPQhPicxwEzR2Ug6B7uMeSJoc4sBYVFokQ5xWfvMiQjj5RAc9rHGCWGZJ",
  "key1": "2Dsc8jB5jctH2SvDkygSqKMu5DBJCX2b3R1vp37WCGCufQUWTihTxB4tcswZhBsrGwW9Mn87fgF4i11JZTi6sEAZ",
  "key2": "3Dp13AA9pqB5Q7qzFpBAdorsZC5PYumBxC86Lj49Rhfzcc7HQNfwerBp437bFxmojppskQrE4GNkP1AJ8LN4TWbB",
  "key3": "4Z2peiR1iUC7Gz22jp9CVkb7vih9Y9WZdWKjVGkwvYPfRKffMKhqGTfdx2Ts9AkQnUqgtmDeXU1t2Gr2EnR1z3Um",
  "key4": "5NkQu4kGaPZB9gswEnSEAS8VnMdj3ZmhQrfEGSS49frjQBDCs1imcxFRgGTyDVJyqXbbFP337ceh22TeR3n57NpL",
  "key5": "SRa88JSWEWFec4bCKwHJCxCMsw2Q16WsZkPgoRRTexYCWj4WMiMEniVNwqcPTct214RhwKCS1QfpH3JanLnhK2E",
  "key6": "5gxJ3F2V9wu79d6rQWn1nqxAhtDL4BdCEhnv8Rm1vFwywHiCowQRrkCCJn1ox3M2iY1diSRbHpbmt9qaRqkcMsj8",
  "key7": "2wS92vXcSPQ2SkN6nN7JvqSZL2q6cRunq7i2PX8BhNsbcuZdfpDvFaTjCQVuXNxvHpbon6EhnNebc7ZQ6f3Mb8Gk",
  "key8": "gGBQzS4k96bUWyy3qRBAWdSHGXFFsN7i6Vqd28LtNwiccwjN1skLPiHpqf5Exce8UREuB27fhXTTrcHiH8xTjYm",
  "key9": "67Q1PR6HgWqNHohQmbrMN7pZnoRbwgWhggQPNiE5HS6pi1sD5WwE9wiJAahV6SoAqytXeTTtiR2AmrKTYUQZ97kd",
  "key10": "4HjkkTh4JXG2YqEKfyo3dhPpWvs5wub9Hba7xRSsiDbzimQTgRH8gLaE8h886awYyPZP3iLGTUKDgN2t16jjq3ue",
  "key11": "2CVeVWZ16jbYaSrVsFkdiEs9BxQc7WRSM1M4qrvRVnW9nrg4XFcvKNtFybYzPJHGSxJVbkKhVF84jYT4YjhrFuUn",
  "key12": "3wUG9SKRUytnThHc2HJZkAUiV8PepeV2Rw5evbS94eTWPHkm6JTfcHpwR2PVt3LXGFyPZRT73wV6WBeL9URhQQZj",
  "key13": "auY5HNBzXZT46PQot5THDvUt4NjbfBh5fgzB1LQruncBKWJJehRmVEzBYdYvZSDLvHkRQnYqUYHCSHQEC8XM9pZ",
  "key14": "3mVmRUKcGNSHtpzvujDou9mqXRd9tbfnUmdowuKP84gAsCrUSugkU67uhaQWG9Ygu2ZTW23i8DeU9MY2cgpaWCeH",
  "key15": "4SVx9YcEmZG5GHTXZ28v5QVTUuneWfH861pKYci3dn7Z3sdjgeNYbiaXR5uHzu9VEjFeZ8MYtBrraAMYdiPFoXN8",
  "key16": "5EQeNDeNjd6wqFFzHZ95cEPTryFZMXkNu121bGvpWAtC2DDfEuyvN7VNgjSEzoK21MCQx7n9UUJ1v5pftpPhDf9e",
  "key17": "4cDdwZoNsf99MEYaUnRmc37c4R6EgQxXgNStdXFUXxSjaU5mhKT11FYTabneqVpsWKrR1AHAvzeXxrY6cpU3cYLn",
  "key18": "HF1hEDEZpHswznQhe9ufqZosPSKtNUmE8aScpv7Xwarek8CdTyqGJCS8SFZpzbYfFDueyEwkvxJ9e4xwmZpJNYR",
  "key19": "3TBY6emiLE9L4GE6qJbL5YH1d8AoSd4adr9UL7MetH4Y3gaAjpyxq9R7vd6LGP24VKcbCWw2ZoTDKbxf42PkW8tb",
  "key20": "2SbsnQXxHdRRouFSJmsShYzRXK9QNj25sBDwvXFKBGSuc1MCWXhp8sLgsNXdW5VBGxikkwZxGuK1zV5H2SY1H5VN",
  "key21": "48qitxSehWf7EX3aXgL1UT4jWcmC4P5wueNhRLA7Ma3B96RQUYdocQrTAWirBRGfFF4kL4axb42Afm8nQcejY3wA",
  "key22": "4n4BxrseY9f7YEEZL48VCZvzuiJs9fnJAEZ7WjKXvVbgrXZt99BQtNeoLVT38ythUqMbPwkJyYzAVefWmbejbTH9",
  "key23": "XnVyoKztmA2pxX3seQGFZyvoKXdrmTA8Bfd4g356LDtQfM6AqoAtFgTwDTUqsLJ2boK98qxWpcVTQ7g4JNFqYKt",
  "key24": "2YZLwSH38RE21V4fg35hxtqDwf3KXmhVew4LX4UEBKf9Z8RG8MCzmFrvmsGXBT28stfiFfnqhchv1dYf4VG8W7Lz",
  "key25": "4fGH6jLXw5hdDW3n754Ms6C7bbWcfpoZMaHDBKV8Ggrhxf6FmtGdMbyKueyCiYyMpv74rnTAuFuwGWLPxuAkqmfU",
  "key26": "65pSTVTf1BNwG9U3iyGEZzR7BgEjs2DLc9sB8EjjjKAuVDdBooi4vix9aahfUVMSD5L8VdD3dLDaW4c1RsAYVE4w",
  "key27": "zf9rLdvp8AkZQPSj7iscA2drLRsPVhewMF8NXq2be2ykGRXsLHVCf6r3AVyjB4pfRwSziLP98xh7dpKqu6DnnZW",
  "key28": "3iEYfpLv1dex1qj2fyT1vaxYB6LCKiV8d3W1tBFEoMoFo4UsmWFyi7nAoLLWSsdCargNg5B5dijw3AjiFd4KmPLy",
  "key29": "4y4qAy8XC9anQCniidUAa7NBTqo6DVdwGJKsuSxkkeryUHEV2j2iA6e53TFR4YyRSxeRaskdBEbRzx6iu9Bs7Heh",
  "key30": "eJDuQQLipNgy1srEVsvVcW77smBBCYSxWigrEMQNtKyv4F8HqTJKipy53BwoV3D48zH6qm9t3U9ou6YsJetXzqS",
  "key31": "3Yo3c35ZZyKSnsPxEunT8KCZm8a9bQryNT6SNpqHfa2TQf6UF1HrpsNfAsbwUYvUzKmKdE2wprjmMKrMPizSMva9",
  "key32": "67NWKUJzwXE8TEGdShmWndq8f9Ea42kHQm7TmViho6eUZ3N5HA8EBfzfLfAGWPBB3oBGMWHQ4tgsuh4iYnQHdbHb",
  "key33": "Bbs9nW4ka8xcxyD1TBtdsUVjx87kw671A7WBf4VKEYbwooDbr7S8zyCcsnXS4YERRFQ4YnVgZJN48ftZ849USUM",
  "key34": "4u4yUANnVr5e3oeFVQy17ScdztKtU9WZpcKRDTbMKRaf7hSNvSVKCAiKG8RvLseU8WVnDopwZKe9Y2wKKzbKawM4",
  "key35": "4vYnaCqoQPm8Emuh7m2RshqJy39mzgc57T1JrJnRFe4r3i5YD3CRYQFXr4gjvjsBH66zABUfqCpYYNSsvcgUPpbe",
  "key36": "2dqUJhpySzF4Aqm9AHcR26LSfwvZLALpsBvSZsbFUfzqyoFQLagzKFkt6R4TxKh5dd1h91pFUT4vsK3N2EyUh52d",
  "key37": "2KaLzoE57gZmA4MkhddXEjB2AEubYCRk2eeJXf8iybfSAMHB8ZgPKWi3wEB3DYUwB12UXBSjk7p571ypWa4cxrtd"
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
