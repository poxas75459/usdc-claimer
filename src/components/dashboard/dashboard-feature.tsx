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
    "2PM26c3VCqHEn7eikfJ4DiF2CbYwE9B2B3egDPRMYFKn3r1BBQkxBt6RZvdhMibLaJDxNP5Xk8rPBKkLW2oEAD2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42FV562vU92xhosDjoEEXVDpJvzrp8ArWYTjGWYPeb1mKY7nLoD9s52CZ21uJebMS1PRuYjcLGEXcqn2EqVLNSXH",
  "key1": "4hn9sBQMzjTJEUvsTjo1b8ByFUrr7ScMMRXUfoK4SroVme9ed2EmDEWo6hhkDbUKybVD7WZ18iEbGiqJupX7ozCE",
  "key2": "5vxm4PiM99u3EVRVzR7rdkviAe8cFabK5sfM7MDkgpUJftBTo6kZd6nDxtbfLNV4FEpx4hHtpQ6dS7814HsEqfJV",
  "key3": "5Z4SggH1HhRMhiLFKpgGd5SCcTsvpLd9kSQiGMyecEzyh3VqaE52ygPYARWDw14jjFBA45U1GbVkVj5DCjCSxU6T",
  "key4": "43MwdQL5FVAcWcN9sViFZyBzd114CxeTQcArRmXRVEYVgPS7XFvPjkrwjyybyC1TYbdBvLN5ncQAzLm9pDSBdWrD",
  "key5": "5MuXCEUZfNs5MABQFET6ftAX4nhaCyPchERCtEF2QBch68MWMvY4jR2wkVyR1kiE4zNYh1xbJHBT9uxEsz822Q9t",
  "key6": "4u3LtkYfXArRF6CUfh2Zm9Z7J6oyLGg8BUzRsMJpDuPAT1yi9BkKebQBD3eFdhcBy5GTfRHybCg9Jdj4HubTN1ok",
  "key7": "5R4Zyq14dDW81545vchcJBtGXdaR13Y5YJRhQ5AJydoNox5QkE4msp5TbewDrJX4BgzaTr7U9xhy67MD47rqzy9H",
  "key8": "3LeTazh8CVNnzM55cjy8oJ4uhucqfcn1E8AhC43iNq1x5bGdyERv7zCu9FGEc9cQbdiVXWt1CJEH5rJhrzbN3ywH",
  "key9": "57ZLgRHWMsbGTkdEuXJrHj2CakssWL1cNthBNQq8QUeLsrp3qVinwXX1A7UgQZjiY8fBRn7DevHDXUG5jFmxm6jY",
  "key10": "51PMMycLjSE3nuTtUS3cTwEuNks6WQ63fJA3pH5sE3giN6wENSQuPxba9hxApXNYfbf625g5VU7bNUosFrpt5FU8",
  "key11": "5jt9AUZJu6GEEsKzsZF1Kg8rybiyAKAnStbQ3Vi82cQvKEDNdbw7RSJ3G6oL4bjUnFtjQQ1Prsy8oSxtF6tP1bow",
  "key12": "2Cskpg7j7jJHsHXvzPssPbhpHHghYZJCFutbj84pCb7bdwX3si5zH4yphJyZMhzowAPNvVyxGJa3YxFPQLKvY8ja",
  "key13": "5cx8kKrv1c86fHDj3uGP2wnuq4Rqq8rdjBjfzyZtJ75Rjdta3Dga8JmbQrFTmvZtFnhh3DHZd4v2NcTakUYEY57X",
  "key14": "5pt2ziyH1ZsGfufQi4ewYUmGjxSBysNU5uNec2ikyhvvbdmuZrWa3fopepwZWPg2FwdoTVc7GUVGpBmKV7VCazx3",
  "key15": "U2VXqPZkTx9yp5nrtafHUkUrTaQxn1P3uNBvY8Xp4JjLb9SCA3n1ZKhVcKaJaQgUF2JZdMgRhejwbtTZo7XYgZ1",
  "key16": "4pueKjsxSDLyJJ3fm7eetff6NPs9C3PLx79vZVRFTQ1Y5fFuvWKB2KStcGvNRsmttGyc9WcuaFLsqvnDQWk68pod",
  "key17": "45PLdgFsHWiL82R631csnpQy2Av22fmqbPcUH2LX9f71Qns3G7QjZK4Q96M5HQm6p13aFkPypzUHymn841B8v9t6",
  "key18": "4KPMUG4UYYvMprVPD31W9k3NHQ56QTAt1qJTMK6Z5Bwnz6bXBGP2D91qZ8Sc1YmVMa7LmUgSEbRcCzmTCwH6x2b8",
  "key19": "2auJs6dSLtefW6Qz5f8f3Z1iD67z4tBtU8TAWZs8B4eRfYckX64sP36jjtMX5n1MQXUQ7MSPjb3QZtCXgdfGtHZx",
  "key20": "4wb9b3Am7Lo1hfC7bTr3KAjB4ztbUD2eSS6fbB5neeQDQ4fGnLzYZvrycUeZk3B7DXZRh8sfMpcmmUKhdzmz98J4",
  "key21": "2T3X4UisbkL3WNihj1dgGhG8tbVUnhujNgKstVKgeYQhq1pYr3EPRr9qzJJr4iGwbxjyvB1hrMBMBdwAeD8LARjw",
  "key22": "3jAQz38P7bQs4AV6ctXeSJdPcLoPfZHS7FSVTbpn5YMNcW5kyhQYZHwqURPePcw9BhNd1ZgLkzceCNamRCuHWMs1",
  "key23": "2SWnxhLuVAasRhFnyYee6qdopHZWBscMhY1wB62PoY71xNTUqQ5gPxcREoKJnHsUdG9N257hTSzcYsQCXQdJMnxE",
  "key24": "47MwAYjykhR1GBftePCytT6tAwpAZJoouqZaK3NYfsgZAgNj1Kcnn3B6mVsWT7LN2QxuqjFg5QJgpxmvS3ix7qJX",
  "key25": "63RR5qi72QCWPMUXFBXDEddpaNQPgZoj5VPMuyd5CafnG1PrqX5QCY6srRHeiEFg3Sye3sbqHn17EmqVvbwE9PtC",
  "key26": "5bourmi46uZpZmxfMrDLFjh53MXSFNTxW5K9YWAnRwQHeFs1oatmJaybkHZvJcJQwDduVpW4m66N82LNZNDn29Z6",
  "key27": "tP7RCkcRQM9UA97trLhFmiyVEvJChDX4Sj5D4i8hMxnrB9LJc6fHqdv8UjBjhPKh9QUHpfup2A1ejqdBzhTiE6v",
  "key28": "2jRCBUbpCNKYq7SutBcaYjfN1345Py63EreidbXdaRYWpcK2BGpQP5T8utkgUVMTTwwuuLnFeLVm4FHrRPsr5hkV",
  "key29": "5q7HgUNoWqaAYgNiyPGR7tRWci7Xb4bo44BiLsSYhrb6ZuBVzB25HNQujEBHeBqcMQ5TpCuiSJDj5YnfGbmjNzQn",
  "key30": "3WWZvs7RtcBViRf8VD34yxERQT5CgXsVBVAQtC3bTFhHrXV3SaG8RsV1GPfsoCqowatDN9pSgSA4KYWmYJ92w8kw",
  "key31": "2KqRdFYSBaY1Pn8qkbZwowpSnhRUpbTnWbxMv2RQgvk48XcyknahupmDor3wTjQQvwXHKdQRTf3zaiwnn46b4vdp",
  "key32": "tKnogbPvYi4VPmNAxrh2Vc4sc7TFnpmDtLgbJDnVnky2VVKNBmwk7t7jUmR5aAtZXa3LrT6UwtMT4bGLjoAuNnA",
  "key33": "5zCzUvNYEEz92vqq5UorjBXk1W5DrJyBGD6c7Xgyoorp7jqSin4sE98yr62Cw1NZPuahGKnP94cUhAUYk9EeJcZF",
  "key34": "3AwHdoc1NEpRUpFn56J8o9nGQhUnt8myHEnBP4MBdzHoK6xCTFmZXgGG417P3a5D1HSx8xd4fLDseSrJD2HH6NTg",
  "key35": "2tiMegFnLVV967W4QQmWxBG4amDCn8rWA6yQzyLp4WyXWxFxozAU5AnZeXUPbeqHHv6SzhzCES1c1boQwAZcCpBf",
  "key36": "4yaAyi8qgvmUeeq7UjMJaJ2idgcpiAHY691DZkbPZyvFz4QRhmKa5J7qYt1u7gcxTSah2x2NCpJVkkCD6qStCLeP",
  "key37": "3xwLa3iuYkYG9ZxyGmSKtkWLkJwwibNw8E4FS7ayqXJRAnvy6GwCq5cL3ZxexfzAWCTxgSxw2fxMJAt7C5xrNwn8"
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
