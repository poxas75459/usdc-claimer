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
    "3Shyc4gMx77mSiwHDZECjUjESHQcgd2RzJjuthMTxHR8DnzD4DJEY18Aex4UAWLz3efDPLmRdgzkcdsEUCoPdLrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MUZxWzqjmqneQio4r272LLJMsbS9KetrSnzaDY9yUc6AbTEWR5dNA4tZecVosiCA3kY51SjQ5mSihtPfYpqSsPW",
  "key1": "VeunzmsDrVow25QHVjFRZcCSP4mWWX9M6wXpcU33YAV5wv3Wq18Zev3bxrMN9aWNPN96p1ekTtNvFpKbXbTAs73",
  "key2": "aadav2Av98d8bPm7f6cr36NBq8i9yxsE1U16zKaM26sUnBkFpU7v1v275mQ3dbTG19mgxp1w4cbrniwcoyJ2Aqk",
  "key3": "2tuCjiLdgkbmRyCMBwqvoLbgjfpRc7BcmFDxR8C8aePyjTaTT6r5AyJMWNj9c6d3RgHLCP9RZ6p15YeBLjeof8vx",
  "key4": "2mW11zrwC5XLXeGbnm7eDUdHqMNEyjLNNqBt98i5Cv1ARnc2TRiZ7fWVPVVPzfeCsmExdgRerMXBFCrAmT7ATDAg",
  "key5": "4d4HDJQLUG8zUFWkzgb4QjJrbBSJEXYLXcSNTb9WSsr4R91qRxfS1WTjqk9yWjZXv3fXbcFf2spTKMjZU89eZemq",
  "key6": "tvXmcBDn8fzqwprKE5uz2P5gwF7w9Pn5xc1yGmyaZuP9HnPp1b7NpzthvN5ve3afBSoEc1xmEEDTZ6tgNfM3SQR",
  "key7": "5MqTtZJg83anLGQP4g3qi7ndLaYT223sFakPTDg8ZsSSZnYNkb5QvfjjTM4VZwMfYe128aYz4hcGBWdx4yq6xnf4",
  "key8": "vayvXFKFwpX8Y6J8Dv5noh1TpmCr8FJ4oUpG2EAoJWciiud8bo6uMBBZbGDV2A69DgDtNfiRqmtuccrzZEVWjHc",
  "key9": "5UrB1xqT4MmNoH4GYqh5E4UV4DkJf1yo1sA1DRSVbM7BNDdcrS4gXay1WMYWnB3mVfViQazr7x1XUPvciQkdLV7q",
  "key10": "24RqkoxTVZLt4YB6c393QmdcnuJf6kDcZaCEPRqqMfdxxHEgvePVhRDKkxE25BcBFiFM5sKWn9X7JaX87zYWaK6r",
  "key11": "2FWtE4pYZKihWB8E3LrJCadYnr2KPYATm8QtpiCaPcokT926JiqozM3fNVL3J8k49ddTNnhkJ3g2dDaBWDcj6LTL",
  "key12": "4GGh6C8V8brmHJVwpGXAcMZn5oyRd9MQr3bCU6Ako8dcr7RWeNZVDWHPKz46goyacYKJCWgafiVVakrGNWjYqsdm",
  "key13": "5tmeyrdwjZu92ZtSDjdMbrDwT42Ge7dos18so1wykLp2qnuYV4ANraF3RFfhnVSsF4wTP4xYAamLjf1NFNJE6WWU",
  "key14": "2mnuukodwXqZWBkJXKwaj3hqtebVucjXkSnM6eqHMYRfmZ89Xo49dhX295tdn7azhzaGMxNDQn2GGaTzh8SVM6ji",
  "key15": "eiatFNmQHSwx4Cw8UJDqDkFkKkr5TZUB3oeMV3x96ZiiuVcgUnrvjv4zFPk8TfpLYLQkuzs8UR3qzjiTNLxg2Sy",
  "key16": "3MCUVNdfjFJK9TqQdDerT4jFxX2QPnHSfgBcWDhp94qsMxNcME9X5mmciJn45TpLDpE99NfDJkZKtmcyMfDi3oZ4",
  "key17": "4Q7WQbeamm278GBDnDQsHaWHeGK97P8xgwNST33PhMmAqN6ijp4EQj2uXjjejVYnGDidVw1s5YPxkEQBurwFN6RB",
  "key18": "47WVVqAHdm4ukvHN3MuJdSrkPS9FJbS3BAXiwuHjNybY2QYtJB9X3GrAEyBQTDBoWMmRT5Upi49tXtKxdkD2GieD",
  "key19": "4WK89NV3tBpQVyJGUnkBpBgZxQEc76nbEGAQe3zvvKcrssuw2D71p1U5jN5wbDGkT2aijmX5AJCjCbzchnirwrTY",
  "key20": "4XaYC983dFCT51z5RQBLBRPzzr2Wv2cdyn1N6e4Qyyp9qTze7Uwv8kG6M1XPFGg4u8Z9MC29eFpnViQPatSkUw1f",
  "key21": "3G8NF8HQAjd9yxfp49dw498xrg4ksbwGHU5Q8DqwxAkPrgntTXczMB3WYV5xz1djAixjhrDpktiYYBVDkB7Py5bg",
  "key22": "63vANKzAEAwUJbRREDNE1fXmvG8ZagMaRDKYat7h1y16t6Kx5fzEEdzNE2Nadv7LrFAAD7SRtKSxXjEL2pR5P2jY",
  "key23": "UXYpG7jD68B5e7uavnp6RLP7bSanoHwnMgEGpP3gM6pGj8yga8QSdpoiTmADFTB82X7SxB5nNHrUzN31a8wBYcC",
  "key24": "Y5SAQUowR5QYtTHf58Ve3ptogDPNCBHRu5sTKsYMr4LrEZzP29TYbRLdxAGg7aD5RnJvzq7anRsXZeiizkLqCLH",
  "key25": "21evTuaAMwAyRzz6DLprERCKztZfzrpnVhucUCwSct2yARTsGRfSWFiKMjxmpZWmPitGW4K3rwA6Zg3mkX6oefnt",
  "key26": "5AmVBikuHHHoVeKRo6ZFrGgtbWSBMmJGBJ3HkdYW26KgP25enXrHVsxoyEUnCsdXUuWecVajwo8cRtCXFAeZe4ZY",
  "key27": "4uhgefuMPXiUiSdvaXf5wRXJZ3BzzMVxJGkjoxNXJvmcTpYJW8qnFAwMSksEk2tj6E5SUAKTUJsMnS5JL6pQecgj",
  "key28": "4UFs1sq1n4quJLu8Fzjo7PF4VwZxjk78i64QiM9kwAv4e2fcV6sU7CHoV8Ug2uFZ1F7uucs8WWP2otirdAb1eoeU",
  "key29": "2Zrne3Tw6zXMysfMhWoJkWMFbJYgMZAWDmKjjha8RSs9wKnHZBoHgENzBVPn1J7RiaKrnRhkE99RiKVekkmbcqrG",
  "key30": "3oXkXteUoVMf9TSQ5njKTdRVscivtxGmtS12vUxNHTGTaaayWYMM6aZQdPFXKw3cgJeqmHUgVvaaEhw7syiiQ2rW",
  "key31": "2ZjEiTCkZ4fv1eeird7NAJVDy33QyHEwcx6w8zFeyQJ8wwFxD6768CqLSexdesbLR2NEe1j8XFEbrcBQGzUDC5Rp",
  "key32": "3He4kJ9ka4gCJzXBxm1akv1CHsw9qUmdDLRY8KELDSc4WxMrSdekWW6Y8gFBH4PBshEatJ89U3TcCcgzBUySdv1K",
  "key33": "4d6gm5XUXUVkxMnjoFe52XsDSeWBhPzT85ngWQBuUfgnfa6NKBXaeuEWKfEC5Qz31CG8eDcQQVfR315vYsFV4kNU",
  "key34": "36PJdCoEvTC39asCXymHE2is2LKdbAwHMmcJCuxExDgUBRgxFGpbCout99bZ8LGux9YnQbZqm1jc5TfseDehJTbB",
  "key35": "4UYecvRe3CB3vtGH5KMoA1iwJyjKPXCcvLWXXEdokUDi8LPNNUYecFAf1GbM59Q1ntdn3922h1MkNkK7SfcQ7EhM",
  "key36": "ZCHtyutFo7CJMNpkJYw5yx6mm5SE7RTWcdNNUGihawKY35rtk3exn6Hvv1b9tCHk5LcBTdx7dPzkUPukgSh4FyN",
  "key37": "bR1vUUet8VR2MSKtE41KXLcddh9B8naSPh6v3V2sTq4YXgFwAapsb9eGBE5FTFFwzp9T12qXnjDisq6hqURP9Dk",
  "key38": "TeRyCPRNUnUwfbowTYDSw9biurxVCLHahb2rnnM4PHXyk9PZecpDy2MMfiqBC6ZJ4phC5Xaw4YEpBkDrJdG8AHZ",
  "key39": "3eqgZT4iKgwP9YdaMA12HKyLDtfwTMHwU2FH72ifjPaMu46NxdWYibeypVvjjNfeioAsBcapiZCEGhbFnBoEukiW",
  "key40": "4GfAPw9oEsLA2fYGhM57xLcFrfxpdCoEqrNELcvbUK89hQHe9MCQNx8ypE29LUkK15zZbSJ71YU5DcB37DDbEvps",
  "key41": "42rq56WeRT54c9DbG4bUmqJv21oDZxuDguRS1D7D4Ha13S7UYLT1S64euYVBCgcxPy9reHq99nDtzaPnGXeEn83F",
  "key42": "icFdzo4zaau6NUvZKPewDyV38fzHrVvg4ZWyu9P6A6JAzD2qcC4HmfmXkMfTshh6WQFeRV2GJNJ6B2RVeuxfCHf",
  "key43": "5NTrcnMk3kSiMVNDpQENnYffRYt2uzXTbJx6SxzoiDBe2PMQ9M8DG3R9VvcD3yAkAHpgufTWgfNQfhbNRh3uCW8J"
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
