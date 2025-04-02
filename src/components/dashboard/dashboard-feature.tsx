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
    "38Qz18Dp2bW82PyvYH4ztVEigNRYZeNV76QYkJFM49yBTXEdyveGmZC4XwmmYp5meJ9d5kRmV6SR3TSV9Fd7J6X4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z7tJYzZ4iLVmaCwYEbBt8CnEXfdHci5C9ugZiTYgGGyV2pA9QJjjoarPtAFEkq6h42A99azH2of8r47GwX5gKTs",
  "key1": "2fac1SLd6fe5C9RgxtpxFamuXb9M8TxYnzX919YmceWZ3BjMRDCBt6Jjxt9ji4X3RpXb8NgSp4NynVd2QBNR4KuA",
  "key2": "4cLRUMCKJ1v1MXmhrdRR4JtxraXjvxBGwDkbbv6hTsNcSX7FCnn5iU7Jus3opuvfHFDJvRsfk2sLvbzTcpzWmp4N",
  "key3": "5fbAizz4e5X2Cox5KibVNDu8KLScKAAY9wWxNBWLyqVRdnBRz3S5bMczNS1qsFAQybxBfU7pUT86JiMqccCauBV",
  "key4": "2JjCY1SuN3ftsZB6oP98g1ErMECUVRiYtuNGp6TpdwjwpsPoMUYynZJcZchwG3ecpAPWygKHAcS9vi9JdbiHXkvC",
  "key5": "3LcMEGRWjuT4RFBkubmXCzNqCVU5vyHiDs821iSmMD7ic4V9mpNx9o8fEFfWDyi4exafWVxdvS3UFvy28oBpRCgH",
  "key6": "2DFKMPgQsUy8ZA6uVvX8eUL1JKBBCVq2JLui3mzUvLXCU7MfLjep6cvoNWEJvc1d91x3UGuzXpvpMrDABZpjewfb",
  "key7": "4RHGWBTivVaoDqceqo855wTivAj3kRubVHFvcbz8Ayt4pX2QNU3e1GfBFs6ijKbZDchcoeJQkqdh9GHSiRDLPcHr",
  "key8": "4kbYAZgSzsBSyKETEctALvZt1fdfL9wyFM3hULXffA7gY8edCM18S2ohSBtphBwRZPaHuGX8xa1emWsUbYiB5wej",
  "key9": "3s5aCaFhEy54A6Zq3eYg3NsoA6fsfD5wDGPRCm23DtMeDjUvkuqHM8a4LTcbmomFXTx9DG7nwtdzu55LfvYdfRa6",
  "key10": "37xVMhCCwnmLqq1hsGm3sTZFSSBLGPajjScK5bxzzfpgBSJTHmGju1f1RjkKpL3cF5Pk9GoSNnwPBRnDumcvVy5k",
  "key11": "2DovYhGqv6cY34gS1sJ4PcCTekXB2dMP95uhnNTqU7mAoi15kkCimmeoHvrtQmvu1MM5Ym11sCvqRMghDyttJ9p9",
  "key12": "3q67oArCcs3Sj1gQ7TA2nfbkMAddzGfVnFiM9c9rLpTasndNQ9s4PHU1nXK4wgLtzAW86ryzSkWcsRrGNjqaH4eW",
  "key13": "4x3jDoWxkB6FGwN8r4UL3updE68QJ5YKFUMEQS1h79JqDSaXHo71yjNfXU5MNAcPg9ET8AC8Kb34GWWR74Pg4U8r",
  "key14": "2S2kjqgftESyamGC5Chdvnf7v8bzcUNRLC5awLjhzYMCXiRsn1fwwuFPPKifs4w5aLYcRBY9jzBdxgT5SoU3PAhU",
  "key15": "37T47wB3uwt76ivTX1QzDF6dkKmhGsAZthT2BcWc1uNe8dpte8YR7AWxwNnZAvxTvKdrC3FyE2YqFeqUdKCdbA9L",
  "key16": "3n2xGeSBwtNMhMMcKUWz5DHCovjUnS45Psq1EmzLohqjktdwmLE3hAaWVG5c4qb8T2Ta627CGN9YWPLLq9MvgT4B",
  "key17": "251B9VBTmFxtGBLmAMhvqzvowXAqJQmMvh9ohAYoft6nZKubG3818HCD1QR8fQfshmws9QMqdhp6C6GWgQ8jacLW",
  "key18": "5KzesBLQEmWrWsMEBMeHqNvgYyr25GQL9H5W2n11Wa4nU4FTyACqoozWuNURmZ3qGEcTFNJYFxgPHRqpLpKGh6Vh",
  "key19": "jq347rWjx4fzcMaGQG2iRKv8TJs83FrnRsdCpUvxpZDWhCdNs6VaYzwAuWZts8z6Ky6ZnkWuT7Bcd1GxyXh7HEt",
  "key20": "Qz3VasGkC6TedaucbKCiyCCYQt9MFv3b8MbhpXfZLR5BHDmSnrjUfqQUMHhkpWJX4qFAGwzHc9v2BoysQupctsu",
  "key21": "4LaTUG5TdAcch485fVwNvE36KmtpFA2eRXBkjsZVeopSR1MR88RCWkMkjCvpHNShHuhAmneCgndBVDwF2tzWdJVE",
  "key22": "KJortTdt6hD7xnXBej8LSDJNRc66uLyhkui7HM8MUpjwyAGfee8gprow4eDGALkkmrqkiif92UEZvpv8QvMpFnq",
  "key23": "2DV9ezz5U3ufPjweFhaGZeXnAmpPoKP9Eincr8UWfjR8sdEFgjEjeU43P36xUdkhcNCGymWQmcKEBcwjNLjWku1c",
  "key24": "2bz97i6PZbVtVUkq1kY42Yi2Yk9VJ653pAbMkhaurw5wCCCVA2ihoLVKFKPzjmucbc77hohZHonMH4n9aP48o9eU",
  "key25": "3FDFHxaXYfXBBswh72eTpSS2KJKeT4zEkC1XjHAsu2EH1yUovEUJztBEeaRS6rg7tzLhdeHHCjKcHbjGsUdVHgpk",
  "key26": "4sYVCbps4RdkJXc1dWFM21UABKYQ2geXMfiV7qw4pVBLV5QxAVdEPoLp2p5gWHmJkWxasq4oA86P9y4nykD4LaGY",
  "key27": "oWmW6NT3kCp2hSbhSzZ643PkR5Xcju2CwcbhEUbpFmKrk665bHbLpLwzAzjAV1SMQNgCsbrxrLcYVxtKViJE4wE",
  "key28": "3gYXJ98Fzu6KXxxUKkaYQ3vC855yN378yYvXJzeuKLzURwHDsUX1zK1jQi4Y271pCqSRnTLSwLxEpbPPxw9J1QRx",
  "key29": "3vmf8VHEA3m1gjnbaDDo3wjSrLatakSTs93XaVm5SxLc1hw5kHn9sHcMATY6JnPWv1p3pgsKHUk6zT1SkxZupy9p",
  "key30": "44d6ZSVGGxiBJz1YKbX3K5bUyg823rbYQZ3o3HQo9nnyY1jmUCUAjE6DJFcUUmdW2haTvSFPg7uZSkYwv7RzKfw5",
  "key31": "224CzYnQKF6k1n43EGeFSFrbUXJvJhxbjQj1mXn226T4bLpphZPPDvAZMyWkhZuGdKZhDgio8iAegnT5o3scHP8d",
  "key32": "5SJAtrwQ5qxWMZecnvSTQnAz5smcyk9JW3ARY3chMcR9VBEHVUWEuim7mQTQQQ87uekCVtXJzm3qQxbBghgDWHPK",
  "key33": "4MmJzNc4KXCTCnWLkw45QET4uRgwMKZbn5iUWQNWMLSTcE2UT83qn2txYs7QLtyV1oZhPBgjCuyv61Fhcc7SPYbH",
  "key34": "WfNiQsXCGW2pxchWKMSLu7jXrhPDuCqdmMefAsHyqQwbYM57s16ZC7HrXHHYkYAWWYHFZhVd2CtM4w9Vn5HJJmw",
  "key35": "5crnD8zyEdXYSSKmgKDuq3D57dYH1spWqXLPW2XPQb9zruXYmNAe1D9hecaBNoJGcEqezkoJpRvr2ptA1mgUNJbG"
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
