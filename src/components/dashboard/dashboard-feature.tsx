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
    "5zqRzMLwdyvkvGHGz81y9RrPmLAnf1wmeWu9AWKbd4p4ouwzAbfRM4rVT4VizdNspJrmBF9M5KADjKnwj8PxgfvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kHxNiwMg73Cg1JAJhq37AsSEftSyzwoTkKCzcwfsWECruPQTKrW1CuLa2fEntymQyqxFkZrYCx4m25BULNboymc",
  "key1": "4JANSXNVKKwEbYShudUCty7Bt7eBiQmfbnP3MyyFt5QDnAGbMDVjErbVVna5bZGcHtmGzuT5qzaRPFQgx5e9eL3W",
  "key2": "4ABvWcaK8DT8yZ7HpBtUmtptTKGsRxwfzh6iSG2iTStNy1S9QJGut2fZ6AWist7r37KyQT1e2dchXyTfKjpX5G3V",
  "key3": "2Rj1hFXgUVfkFQHbAHCvi9jS58VqBb3vU7GXGyKeP1rkZiGeZhbEWJg5ntaCFHvQfMcxMnPG91ZfdySXmJsE8Sdw",
  "key4": "5dXpLnFYiv1E9ptAAiHEHBtZWjPyBaEvwGgefZJzLXpdtZvChnu9jAULm5NESMBnFuvxz9im5PSeNePuiFJEEUy6",
  "key5": "3tSV6LKFJ7rtjzbQDdnxFZjY1YgPP3cDUzZfTifQJ1iLPRUQZ2Gh35rJchUBDJgGsLDKeoYZ8u5wyZdj5nrzDqZx",
  "key6": "5Kx4vqQYSpKuEfqsTLoGAvubz8igpyiV7uWFHJXYd6Qrqfyqpcx2DF4H3XscBAZSi5wPbNtvevGfHF6njeLahV6j",
  "key7": "4o7dfy8xpbjKUBkjV73niwqJPoYuQmpx7sqUF2JF3mkCxFeDePXYifn51SKtvggaumq8VsLsPtXRAiBDAjFuTLQC",
  "key8": "54Tm9DWBoj5Dije5th7w42Ua3z3pkyt9K4oDeADZ6syoudihcsc1LcTHHKjYic9bmDMcuv9vjGanVZT9q4uyA2cN",
  "key9": "3r1kdPb6sphCSqH1Dq3jLZRhdEAMsPZMT2cC58JTsJubYGjrkjQUxDC77TStnjbfe7yVLWssqGdaFG9kJyPJYNXp",
  "key10": "49b8soEpVdSxWRD2i1cdUHBuocmfptQfgfCyx1n6ZPc9r1k1U66ee9FjDMDEP5QU9jLDmrsHYgpvDbDpDMNRNTeC",
  "key11": "2ndFztKxbfMeHxV2qHrxupUYdS1DJTF6b4peNvySgm8a42fdrhDzTz1AD2dDqxvbmXQWUmMMtRPSrnS88tAkAwee",
  "key12": "3keJLJpQ4K2HEgRah2H8uCfBjsXigrzfmCJxMu2hbK8TPU3b5SAi8auAtWSFr8fpNN92WPdphWbzL3KiB4zL6xrE",
  "key13": "Uyzw2wZtxnjQczxhvZRDTh95TsEHhQJ3B4Ng4QjUTXsUcUhDy8UdTKz22kBKeCnoGYeFu415bokViPiUrJkax9G",
  "key14": "373STgnDzNgHaXZAxUPpPvFfjz1X6Gsgq2ff2V3ePzPXTftWjMhM1dMhEuHzmmjq6qxK2giA3hUy6vjsW9BeHR5e",
  "key15": "5SiVcZbbYsQs954DZBBBWAHVJodw44AVSU9msh6HbVmyGMAXdYw8yciuiSQD9CK2cd34dDUZvfV6mCozmXpj7eX6",
  "key16": "2zxT5EoghXJ1pCStqhiBkAEjJiX3TXT7vZMbBUa5aQBG7RDyXbNmbPmHPNFi1JETxrmXjaP7NZbUTKmwVv6BTt7A",
  "key17": "4d1XStTmV2ci8pxdrzDmE9aUbzp7niUhxTUfoacxTRYUS4BLDejgeM2hFh3T3n3M1oGReaFcTDnxxWCL4YM7CZAt",
  "key18": "3chsL6CeVheTTRceCJqh38jx4C5MRE6DU4kNvrmj7SZaXPEnhjT8ooYCmSoBx77R3NqeGg5jpewDMg3i9pJ7XfUp",
  "key19": "4LYdYqKvFfTasb72oCR3x8CToDU72GJu7FNn1r7z6zGG4oYmBBnCrKj5kPQacfUvyVV7uzX177CEo4kYFixM9rPh",
  "key20": "4kGMWsYYipL2kge5SaWPkVwaUE4Sqz3zHsRL7JaZ4oortKcXEzr4LcdhBq11M7nTGEdPCBs6ZPKZSCn1zMMGoNt6",
  "key21": "5WkJTh4ZTeZho6d4xF4TPf7vZgaiydEWdPmMZafL9pYY8bpN7DraGuihuVP7iaT6mXw7mFg6tbQNStQ5iR8bMvhJ",
  "key22": "4f6saxAfgubYuD3j483iLxfZdZGA4CjXxLBeuhhQTKzXiV3STgsoMKwmVJu4zmNpF9ZRAxHBRirg6oq1eknGJeTd",
  "key23": "5QkbS5aZ3qCL4MoFthJKTiybxU7uiHDXxcWE6nr2BZdBdmXpZQMGYq5muKmQrqzJsaRVStcbRvi5FSPPWEUY3oT3",
  "key24": "5i17GXpu4EWpEabT4ZvPbqKBrVP1FLrRPCh6YAY1aebP7tdWRDRkKdxjvRfsv4tBqwXXBcmSK2bbbtA6pm9KsBDv",
  "key25": "2RmqW5DSeD6JrQRMF6y2wA1CpVNqcXK82FDVQtqhXz1NKYwXLcztJzQcUn9FUSNz3XuoLk4dHoJ4nvLcFbFyHvTr",
  "key26": "5ymxRs5APHsuAJpH58nJu5nT5ZZDMoLiz8M1Htb6vz2SbrV7FCce6MxPfZ5127Y4mQc3kQTY6mZCR8ogJ8pCs3sR",
  "key27": "4jZ5g2yf1LJZKG3XPCupVS2kUb2v8fjJJbhVjE2XqvkbjvHSFxH4iCmYzeyXqjtbeR5TNkY3AwnvD3TaZZThjTkB",
  "key28": "3r84G2driS316znkTcNVMVmUU2cbkNJ6SEwbyGVy4D8nqrEzsmPjweS4cwa9JHsiBknhMKAQZx2PeUYgAyzN79EP",
  "key29": "2j322ydmdekiQAG5D4SXJB6rChbr2mBdZbt5ZqVXJpeoR9p4mBJ5nwc9SiHQ6NyPMbP1sshDm2SQVFpRfzaZQ4HW",
  "key30": "HopD4XvZ1XwiGUDCWHY497HkaQsKp9uvZRdnNbqzunqz1Hs6P2zc2PAYL3eibmcSwT8seB3Ht32MEMDUKudfvy2",
  "key31": "2eC935MLa94Q2tFwHJUusFqL2GCbJcRHtcaGRPR2qdpoZxtnD72Ys33EMyJBtPwdCqoDt1xXDztAtHW5Lny6Pqvh",
  "key32": "QXJXLNeaN2FPLfCRT6ngXi9K9hcRPhrLf9z8MQKUcYjfqzd6zna7SRG1ZQehs4VvUtNRLZWisCrbZmN2sth5uDp"
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
