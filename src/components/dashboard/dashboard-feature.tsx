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
    "4TypeNEBAvrksvUsN2o6mMP3tdKME6rSiELoMCMRrVH47fPEJok6odJBtnYU7R8eYFeTRy35GrCBMf5nXk4H2jAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3se2yRNhGshy29k8BTRgCMizjjRo8357EMbF1b5Cat82JGq1Rrj17ULZMqGavykPhKvvEmw7pEBGoWgzkNNgiEyS",
  "key1": "3CiktN3baeJWByCwqXLwag9h821n6CBjHV2AuRK88u1yuNktPPKA1wHP11aKCKxfkhYwyVGprfSfgumkzcoxKVeJ",
  "key2": "5UHzL7TxFnZBSBqGqmFSTyUm3i6PsHr8MzyoHWWsgybgywHHsvnRPQ7uw7FXm6mGQLR8S6cVzbQfDawEKy3wYhbN",
  "key3": "5zBrE1eSZ6RLiR4toQUmMegsWeAhJS9ZUnnssC8DWhdKmNcM1VWtwRuYjrsGDt5p2DWdZp9TKkpro7Hw35hBkZP7",
  "key4": "61HKvxtBBx6tmj2D8WQc7Wj4kXqP3oGkhPufZwCS8B76FMch1mwjrPdZjBDPJ6hZWnB5jSp5NEqQsZbfqh5hRueN",
  "key5": "4wjMqseN58xC7JuMYPnAdKgL8awTJ6AFTctR6b2M5ArJAPZLEyYQPs78CjZrm7BK1u4zjX1XRvpwPe5cgyuiYo5J",
  "key6": "2tvt17CPBui8NhvMmQq8TYBKVPXdUxGhxeucM83U5aXSKKYCg1xGguhJE744E1bpLtiZiQDue2vPYmCLKMsLW5qu",
  "key7": "5AtTdP9gpEmph84dmKyd5GWZ7Q9UEzW4p2rx7YXpwYt86EyrSDiZmgQZxDRMQWKP1tuP8sdTvB8NoYdoU2p1rQyH",
  "key8": "3MRcagUbuXe56EfgWMwarJ173QKuP3kQAX8mdaWzoLVhznZFgc61eyjFiHbgqxmkHb4DxMaSdXCjnuAMuUkwekvA",
  "key9": "4x2Vzb6gLAE8Xdz4m9gQBwWLetynbyKJUhG1dw4pBPgvoW5e7MpPWizaxdYHUBShtNvwTtYtW333a8aziTrFmkYs",
  "key10": "eXLMcdYC8UNvNAF2f6P1jQrDTfxVZGEEKUs28mjiC6bvy88sRr5sMZLKWjMbJ4bAd4YFvzvt3cuKpG5qVXYxpEN",
  "key11": "2aUuHnGUCJtrj5CuRFGJ4smRWDZMYhxrdk5au5jryCQEYAmyc8Pw9hgRm35SbrF4pB9hfvnLGdEgatbSM6M6DPLG",
  "key12": "2Y5yVFAWNys1nRhPoTcepSejH9byGW4Lg4Vi3v7opksJxsqVipvWFhjyEcUQ1jPDrUNHUBERpv19BGubxrjciFKV",
  "key13": "Tixb4Ju29jgnLokXZK41d26p3GM843ERrFHUg7kyWK4bXXzFQq7T8tP1gWuASnjXH7NMNQFSf2xfm3hGoESnz31",
  "key14": "VFz1FdYoSDTxgYPCdgFJ3bqnweFL7qyhgVstMg7o6vL54GNs3cPWCKw7VmBRgFpae2tBQvxzxVRqe5bC2QoRMph",
  "key15": "47Vq1FvFSxXLPWpK1HXBDWCwJ9gSEtDSs2juTcdT5p5VoBmg1x4KwkJZgTuziLk4PphjxezUZmwTz9xNVCW6XNum",
  "key16": "3CRLCNMehN46PpFcuZwnGp4cFi7ufF7MMNpNzULT1MtsBPMxub6DoAyfj4RLAwAAo8RPVoen2qjzTm5PXAvdqeGF",
  "key17": "5HtgErFrX3KGGxxo4ZCLmpb9GzCKAebBZNwkofbyzQov2UAapQaWqxNdiEAeFwsmGQbnDgewfAFunFwXYjMaM5Bo",
  "key18": "4kKJRBjSEdeMbWXyNeCZszsNXf39CQFZGvA6zYCv8ehHAxkup49xzYoVz7hE3hGxufUduU1Ai695Xf6FXx3tMBLd",
  "key19": "3E4XNDoVaypVvoVw9zFcp1meH3jrPgEkdCNExPHvDEhSL2ZR4yUp224KF8n422QMFNV76FgFwpsbnpacQCWhZxKk",
  "key20": "5mpLbtsPunaBs3QxPZbVT2WS9Dsye52c9jkCrahf47DMgzGHUCkBTGF9DKDpzVJWpgKMKkQp8tXC95HGW5rAU6qg",
  "key21": "5DCUTnRQqaaPuRKnM131zfeMuu52WpPJNSnvM4RXwDh7DKRjBq79WmeVPHcuF6GwJvtp9276bVSesve16XuP5aFc",
  "key22": "65P4fVjDBXFxtZQfPagzUGLUt3uX1r8dsC6coZMwRoTupo66NwUDsnG4LDZyYTCTj7JnraMgmMS7ViA13HnAVk4J",
  "key23": "5GSyuTF7XABFCE2v5ic44cgZfM4m888zSN9kBGCmwL8wSPkiMBsnVMuthrg845bcMCwqzWFVC6hzs6Uj32bH8SaK",
  "key24": "RvdRC9biZKuasHBgijoRTxooGjpGofButW3Eha1mcuvCUsdpb8kmUL5aDwpvjBjBuiTrh2Bcb5uNFUr7hKkcX4f",
  "key25": "5BU9EoRfJtYXk6pLKHof5NogzHCsLE1SaVj4ys2zv2UYtb6v6rJ5xRsS81j6n2BHfJ248WVQ4wJhB9sKrvTzFinw",
  "key26": "gwz3DNVQRjVyiKc8wWErgnHUsRMj5rKUL7Q9E67LMnM4eUDYG6EhyVM9sx7y3nqaycFHYizAp1jphf5Frtb9YFB",
  "key27": "tqKh1SfrFti1t96QNHM9fuVDgAB8TZ1eaMPUDYKCLK3EqaJfsuDhm57ztYFB771ayzDAaURA1Ki3bD28jDj5DgG",
  "key28": "3xJ7Cn94YgMamjWstnJVCir8WEDJWTcH6KZggRXSeh3C85EuRsS5UwYonrJ8Mv2gxkHv7s8z35YtjxfPJbdA8EHe",
  "key29": "UTzbjnFzcnJm2Tz6i3dBHBuarCw7pSaJERUwY7vQPGzgWDQxjjiJYAVndikSR6zasqy14pUrSG6gKxziVtms2BL",
  "key30": "5YLEM36qJNEDZsYx1bhRyUXaHsx8wpDv2MCFrPJmJutesC6Hf9cvhBDCYXirdxTRTkibDZWnGXsAJ7P5tLAjq1Bd",
  "key31": "5Lv6kDXZBwKpsvfZUmYMFPuu1BXGahV15KWWcKTzH7rgTqimgfTdCmXt8UBV3JEZ5fUkjytAMig2DsLhCmdQpnGW",
  "key32": "WAn8iMyZTcWBexzHmhUk5xwgN9cz31yjxU3Lg7e6AmiayrXQerbXdVdXH48k897AmMfhcr2aEdB7UyorqbQ22da",
  "key33": "4sGzd9d4TkNjAo6g8NgKdAwvJbnF5rgeRHupR8Msh1yVWvJdWuM77uYW2q48zQYpS25QRn3y2ufshcza2hNrEbFJ",
  "key34": "2mhLGjSSwP5QSh7gK9nmH6ybY1i7YXJGPb4HxNg6i9fLdxEaiShHw1811vmoUxaqFyod2oxurscY1vneYRkvwAzE",
  "key35": "39zV9JWMJ5ff6FdoFRGtFuvsTB29efxwYPnnunedQXwpQZWaRiLD9MH2tJVBs4r8PG2t2gkCsDuWiyTq88dfoDb2",
  "key36": "4VG7TM1cDmD5CxK4o17VHTZSqA8Lms635kJf2TZzWkfWAeM9QASGCdXnkBcmrSJDuiDAPctpPn5XwiRfeHYuKwQn",
  "key37": "QaAsrEFM3cG5udoFRWuvvfmFraCQnHJK8LXNqgGRjF5SDhkFTf6DTCQBwaXMuzLm33NgEMdE6QwETxbSbr8f9CR",
  "key38": "2Ued9b2zmHUFJK5QshDEacJDzqX6VAotVoLx18UhBTbs1qFofF554cgu5Jakpyu3z9QhAPBM9xiM6zLAXAg4nRH7",
  "key39": "2MKk4AoPEjqErgngQ5n3e8fyhA4d7k1c4QbXzzB5ikm9DaQS4c1mybLm4AzmhdZJyhEK2JEvC9Fn4ETyvxxDqQVc",
  "key40": "41NkAwXkKt6nRNniZPiWwtUFtSqH1UZxgPTPq1HujoEvhpFnZff9xR1LGNkFcgFy1eUSHqN2Kcs2S9FPpK2M2FcX",
  "key41": "55tesuDKgJZrnVh9X2sS42QYUahmRmU3qNYYTDh5F1j5zVCVArwt1serHXcNG2KJuGHM9utknynar4usC4DWDr8m",
  "key42": "aAoBQs6fMV5BD9eGcmGEj9cygxq4P7uzNS78YohmipLMx2LFtRui4cMnV5XbChNXF2UnAXee3AqesYaBuBejmRj",
  "key43": "4dvqRpA1ScYFzb1RmExTvgGaMxR9rV4HJqnsdwyPGmKwxPoWoeJCSGTzkAqyyDzwA3wHKEG29nseHbi6ZTi6VZ5B",
  "key44": "4U93A9ni3wvnfDYQTN2MKXQSdsgRyPfREv2k9i2Dxh1qfVixTcYJ1DN7GR2g87HdBWXEV6zEb7hMocRitQqs793h",
  "key45": "3rtW9PGxkpVJoA4qanHGWEuhR1GKF7ZB6x6QTe5d4fXgmZqx6ejrgaz3w3Vhco3ejdMbW2S2pQUcrfvm5TMh7q5B"
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
