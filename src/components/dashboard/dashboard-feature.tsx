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
    "5GmfLQB4zDuewsTBFRBhbcXdvpJ4v6nj5LnJfnzgWpKFgrH6aspwSduHjdrHenSyBaMaET81oBuHms3uBjm2xX7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WSfWJU35MrfiYvnkPZzPLv2PTFFsgCULdQUkfsYvUzk74RZ5qoU4F299cWwHVpf7McbtBWWFNwa3CpJyJbysrV5",
  "key1": "2d9AiE3Pisfa2t6ngrznZ5hv2Lz7WandDBztgfzKESwDxEZvPq2DGavLZe58JQmgPfjGsmDLN9iZ1bMJcPuiSVgo",
  "key2": "MRaNQXmSva689nL8hvcvj37fPNwNAb4cwoxwsP4wDJg8Dtx2j4Jv3RYqob3AAk1ySnoYjoRQWC481yTfewBMmfs",
  "key3": "KgvfvKJpsMzC5Ldis3edfBErgqkSj9UqAZ8ixdZipkeRFNomgCaJkvU29e2sbif4BUVRx2hoGW16qqWGJ2vdmSY",
  "key4": "5Vn8RNJtXRe9ozassw7xhbTYHQDBSoNtYUt867YCa5w2iUETDr9gWVKMto8nz1PePb2tZDbMbAtvG7d5Jaeqc2Fe",
  "key5": "5rwJLidQjt1TCsh5TmsB5bsFdPtYep58i7riW291CnfHwNkd8nJyVWgRfSptDxqzHhkAGk88QhbcJbWrCBT91Hom",
  "key6": "5xgucqYZ7rh7zuuwf4VwbMJF3MK5ibGyoktepXkvnLeyqu5jpnVq6RuDrmPs6vt9imab2YhoiNcmi9pRDSz8oEmV",
  "key7": "5TQWGHpqJE42YdRV4oBCzZpcxwZukQqWMfGuVVFNcBwmNf2YCHxsPNVutJxuD2c8Ag3gPMMBZ2n5crSuSbJTfgkF",
  "key8": "ZUZQYR4bCYhEdN5LNTjRAEn991d7t2y4ZsFLT3Ajo5BB2U1DqBVQSKuanj38c63eXGR6o2sh4GTqFGgnc2r5jxU",
  "key9": "4hy6mEcrfexuxC9PAVQHWaXH8rCNot3JcRiTfkxBJBgbuMM4M3vbPUZv3c4uzS1Bm8aNKVm4GFY58Aiqryceftyy",
  "key10": "5YEuCUJnisUciX3xqAXQsEji17UEGYZZZ2fS1AmzoxCtARmUX66Am2RJGYTDdbj1SFbH1QPVvmcdQSLr9x4uaJrF",
  "key11": "2RwJvY4p8huKLA51XSTTResWWDfsPF1xsrCaB8yKYgkf7jvDrTKZxvbomeotKSBH1X4oi2wbWwCkuZ45x8Nst6hZ",
  "key12": "4wwB61S4xzrShb3C5JAUCtu6K3dPcAuP9xSywSZsQ8gvpvqqbs6gzipqTdmQnnisL6KUFZwRJto73ah6GymvTjV1",
  "key13": "33ebtVynUqiBw6fQ359XSKsm9e374wiQUUqB2YPJUz22ND7ei7GZAhAusb9rgcfePikbqaD1ti1XPAsxzmDiYLW",
  "key14": "2k1Ehdy9YzSVKUJEpbgRwqrqL1Loh5W5FM2r2vFHccsf9igEcSSVFxS3jTMP2Uc6WJ4NJ7DkSW6tif4BfvymbUMx",
  "key15": "5sMq7o8yABNx4chfD4X2EjA39LnzoQTiueTPoRDwMtUQbiCeCEeavy4Jt9QEXGJkfJBqHiRiHoBWgh5cf4m99E3C",
  "key16": "2zYMd6db5HwJC1N64d41APMKY35f22TJGpcxLeLNyfAhpHap5VEzwUz8UK3i9fvoMTYnuRUaoU3PW7cDKmja2rBg",
  "key17": "2uGxhKA4BXNkcFygfLuYrDr2boQ1H1pwZwsnpByLwQuhL8EBxBhvrf2wyez7dP8XPtA8Ur4cxTJmDVtCWnDZbRf",
  "key18": "3sZsp9ay4FfD13wN12Km7ddef1sfN2DQDbKjrSRvLqehvWzkPeHKruLPvqoDEeMTqrBcfAaonku61j8bViW533qp",
  "key19": "4ZwQYMyUpTENf8jE9FpDfKh64i1GQiWyaXvJggCwpHnncDZfvpRLU6kfRyPATVHAbPHuFPqE5Lj3eCCUPMmn38hi",
  "key20": "5mci5im1FUmGUvP8obRMoQmso4xhgZB4y1MYU5ZFgjN16ignQrxAWyQeE7CpC1sBLkDhsUMM97naM2Vpft6tMGf8",
  "key21": "5N9KfFGfjxDbFeeewWfD1JXt9Lzvmpu4TeUA6SPn711w4PJnSgQfPFb2N9txcewwAiKAiz9PW6gR3D5QYWU8y6FK",
  "key22": "5jn9ZYQUcgjZZX1wpo2ViFjt8MZtVFixshi3ojDsDRwsqjWFxX4ryW7SxBwFaaqX2Udg1nX7dAoPk6UuDhzrdcYj",
  "key23": "3FFm3encVsp8F57rzbbNYzsjAkhuJHkeuBufvh4FfFy6JSNjWmGNZHoqDZsizmN6vxx4eZ2Y1adyDWcutD3pkCYA",
  "key24": "2tfxwMhzGRZJs1K9UVaUVwF14ioXC5ovyMgdEVQxusQX5eK2yazt6TM6ZH2vNkdAGKTYxHvAfXRbGXYmST5qfMjf",
  "key25": "3HupgUZVKMgWJT4e5Gx71XGHfY6WjezBkEb3M4XMi3NdaHDNjCa1QA6VEEPrzMWbcja4QrSP6hHt7RCkG6wJfddR",
  "key26": "EFjoyz836it3WjRY385jqj4F4xsXbcGyHjxysBxfKojDJcYPAqCgnqtaQPqPgoqMoK5bkEYrSKkKLzLmyXdi1Sp",
  "key27": "5XrZAkA67MhgHQKmAop2Ge3tmxhw7JqQY8dVKXXsLNDhYCP96UuLHvor7UDg5dEnVCjkc34T4hKtNvFvvPH4wBKv",
  "key28": "2gMXAeNCHacP9tsUvz2rTzmeZzaWY9k4BzMUqpn5wVoPWFwbWcLh5RJjeXMEzuHtRVknqeK6sWoFAn3shQDEY2Q4",
  "key29": "5Dz4NhrJ23uMachSX1PE6j7aB5YcVBVF1s8B32ou32jjDcrbcBJGEkGZxhh4f97Wtvn3KNwPRfojHopvL9Q2ZspR",
  "key30": "4kLg1qR7Rkadq3EKarrtYiCbQ2vUTAJWSQRCEtR8MR9khdqbjyeARPUDGBNHs7Han6EeVQyCXZ4tb663gfMgfzDa",
  "key31": "5vizkfzeAQuAtkm55cgL4GNoCZ8LSuunvcb3Rjd1DAGXth9ywDtVcAU8G9CxXL4Qd52g5CLwjXtsNiU2A1HBKggb"
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
