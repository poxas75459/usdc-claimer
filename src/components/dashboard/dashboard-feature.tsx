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
    "4YBE6kHc4JwDCmoePxHaNvrnqYjP5Lv1ErkxpTQH2gzAi7vs6pkqjg1oJeLeordQCwAQeMxXtWU83ctXzA6GUQGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5auwxHz4ANJ3HTDZRxdNxtUZLc4tXMyYv9hRyhPeeMEdfPsrM3MD1S3HiARDoQUrbJSWEPHf1E235AbT5HimbM5x",
  "key1": "48WvY8D5ZUYQguH8BQBfAqMmBzZQMPQKeivMnks1XcHde6hTSzJhyH72yS4xJRS1KaogEMBbGfAMvCtCaoy1oU4D",
  "key2": "4vj124XWBrtKtHDj4iKGohzpphqersp5dgyzUcXXAp3cytR1AAVChoFq1fdVEsziGRLarzzsJeY5fpqcMRwKUnet",
  "key3": "2wkcNYpUDbYNosw9jj1DTHx4ffj5YjhPuNqstKSSwaUUiFFVno62xRx2RFTxvd2HLeN7DBydoiVzSh5Dn6JQ3v4u",
  "key4": "4kWCjhTuzfbW1kGo97aUGvShiPgLMwV1ZByrHmF5yasNssSxvj12vWuXF21FgCfWSdMvdiuSFbdCbF6waZGc1KtJ",
  "key5": "4BrBz89YVYgjrVdesSkmBRN8kj8BvSFaE3jVTXDfXXio8FKQmzi5chkVq6R6U3TECi12FJnhym5guTgxgP471kDx",
  "key6": "3zByGK8X5JupJC2D8SBpawkrYWmc6CVSnZreWoKp9pBEGVHQLxqumpPvuhpL6nfW4VrWoLBA8FMutkWQ5TRJzZmS",
  "key7": "4KfxCTJqa8uLXugXNAB9TXJNYhXnaTbhCyXKyspg2xSp3VqKzqzg4W1LujK5NfBaCek4wpCQJLcwcuXcpdKQsE9F",
  "key8": "misvKBaUfjSpSgT7NHWGAys3V78x7VcCHabFpzj3TusPkcVQpELWCBPA5aFiYPc2xeu43nMJFoJEADZrC41RPNz",
  "key9": "8CfNXeQHzAQkKdpm2bpkBfKCn286LSTyapJfUBq5yi9NtF4zHRCZZDULX9RVxuedP8YYqP5wzvGqCW8WLCu243y",
  "key10": "5oMR9ZhtDH8psM5sE8abZuKheN35VwhZ7KfAwwucBzfrt2xucBz2S2KAEWCAZBFwo2JuSzuyX53Gz3r2Pnxx1ZFR",
  "key11": "5o9cfDVnZ813tJeLHNKw1BFLuA1dBh1R3cEjkty8VAYrfc5zwqECrsCWdWK5csjsCXC5H5PpkN86HecD2oHy8Gde",
  "key12": "Z2JxGccJ7pS9aBhjFUbJmzw3DXtwtZaS5AUHTQZJJa9xBkSHWYGug2BcfHv9R6nZ6VC6S4gW7ebXhVEMh3Qx437",
  "key13": "3DF5iv35qZgVkZDTxQWgxUpLDtD4qqoBSfJt1jUNpYhTUSZY386hYtRWRqTx58NmoZrp8wak7s5JDWRVHRVgUUZq",
  "key14": "3yevEHBiZzo4KjAHrJey4SdXdr6DnNw6YoWpvYXav3uM1r9kb7ttD6DbpmQ2crDbMbpGNaCvPiULZh5eqSHQ7ZFN",
  "key15": "SL532XRgG3TYGEmub88cWLVknegweQvib4qZ8uEAe3Saum2WzbgPebwpCt3jtMujUHjhC5B71Ex6NNQCzQcBcAo",
  "key16": "2m32kLrVWiFRcTHYUGSuHn1eP1CeEf3R8okQ7EobbmbTTTtiuNvp3sfaXRxUutUw143sbEfkzYFtQLSidujehPFB",
  "key17": "49YSQtcoc3DEeiJsus8j7McoBdVZrp1h9ZmojTwkNRmK2wb9ouccYSi77R6tDdW5G63dGkqJw1G3kuKm4FbdRZBE",
  "key18": "5zssJM8pRCFJDoGttGABn1NMqZJs7YgQx8gTjje79Wt1TANq8NQ6ZDFLgzd3TmJ8tbS5UjSxtNTw9KS5nRCTJaJe",
  "key19": "3X4WxjEVLsSMmCq7uzgUHGntXeH2pByn1VnyDmF6B4wVCR1jKGcFFcgrN4vWVBb9wSXoygcYXgmvFzGauJZY1HFW",
  "key20": "5hLzBxV6C51G2JamhDe4sjJyQD3xPzqZjXeqgpjCcpyr8aVMf5WoR5ZAcq5VkSSxQLNS7LzQRXTAYYf1x2dsT9WL",
  "key21": "5zeWUHdnUuNS5PEVChTttgY6zHdqYY9cmbKJ4ZaxFiYVHTMCTwMjbBHdVDmDQDSqY5WJkNFZRaNd91tvXxBdgGR6",
  "key22": "5ddk6ncEaiKwSeNaQG5UdJgf5oLuMArEQ8fRk9c23W883P8cgpHddts96xgZfHbqaLugRUPeBN43Qi9LBemZ1ntY",
  "key23": "4evDf5iH1nafVDWQT4XeNySj4pXugRgqrRG3PpaV7iwQEuWZWSxyGqWYvX5g97MtXTLot7B4SNqpCqxXwhHvHfoq",
  "key24": "zXteJaWgvLZTG8Ue5mDDTPWSjztiAxxVhS3J6WPBMrRGu13BjDH3qwb3dUhHomK22siSKu4j1GTDEvCdEyYD1gJ",
  "key25": "64Wc94dJVs5wmYNgBk6GvSw3YqmuHoxdi6d8Wcp9AVjJX8vWeRpWqwr6qUL6x7khKedyiX41vtphqaqMwSVJhKbc",
  "key26": "51EH7eKyn34VgDjj39VwQHL49G5JaNK6HUhZnMWEBJaxv8ybFBSWYurTetuYazDs2euVtuaL2mycDSTeUYjPBzwR",
  "key27": "43KR2nk2cgo4wALmy1bNwd6bwnEpbguBEP51MYpYAhjQgdQySVnSeSuqhxNuYZ4apgbe7ZiNujErmanSEX5mjZfG",
  "key28": "4jbN35NaxXgRqbAtPErWNVfQZFKXz3ZUbxCQc7uRqqE4RNaRC1KkCWGRy3vCQ7zV82cVcjfRwtysVWvyjTX5dVdJ",
  "key29": "37xSxLkgRpZM2cHu6Jzwz76MXL2JnDd3KECFFhysGpGbpoYPfroENBX3LoVK5UTKq241S42iRLPjKNcn3zjKXuTB",
  "key30": "3kMPNU6H4UFQ8yokXtUNgsRzxXfrGwEKcUqU8rmztq8dnAhAqEVjqrmz2kTpF3um7PCGteGUfjmr8DdSd82xb5Ej",
  "key31": "3CPsjGWFzahhrzVBNkUczDCuQgWDDRgc1ur3Eb1rG7U1QmfKjKXXc8K5ogisGhMo9TMjRxTqHerXsb3nne3RFAVU",
  "key32": "tKESMnzoc7BQcqYniwP3DrMf4sMD5Gu9DMmKL5KbGXEGGDVHVQDiEgkC6EJBununTHrRwWXcCsSTq1EoBEvhhoF",
  "key33": "3RHVRVQuT9z2qDVGAv9cENR2XZjYrva7Jw2A3acNqPEgBqJk36nNBJ1cJrjrt4rQ6hdCivZkE5KDeY42YpAiirq4",
  "key34": "5iyiqBtmZt37xpBHUgy4V7KYKU26dy6HLxw4an2q5JczwGoXRiE2f8Ntku8zm2oKitPp69QbnMEkDQTWFftTXk82",
  "key35": "2j6AQuhrhwiej8C7PHxPnPQftCsPfWUdKDUukvXWycbdieJfStXXLysRgmucoyztNmcQpy7NY1g9rBSitFf8tHoB",
  "key36": "jEYxwiFPh8p1xPQiC71WNqCkuVqJTrX87tZKfNfVvVQEMZn2mtJsXSJxWPMmRbEV61s8JTvMtezsTAtom39tmsX",
  "key37": "2G3THhifxkFXu76d5t9UxGyKsrvkB53JYBsCdNejH6Auk1XEzZFRu9UFr89s4FCrckHZNEqZkMXqqwn7AS4MoRFL",
  "key38": "5h9zu2ekQTq81nuNt6yfPEfNoLzpxdno3ghBq7D1xg3HhFoysiBkAZPzt5miPZCvEVsnofKxk3axsStxBsyMntdb",
  "key39": "2BXWWZ4ZVryxDohDXL5K4UMweXNSQTEbxQ3YgL1mQ5ALJRfYwVEDatYJyu4KX1eJYv6XDwUQQQuf6tHf8WMJLRZz",
  "key40": "wA66NdHfT1dfnUKNPR9gHoDN7QSi5GrYPMdniD61UfSv9cSMVYFKLxYMZfww3ncP4gFYDkRypGrghFFhXgTFGXY",
  "key41": "3cDodowGgeq1HJhVHnjrGeRsQAhHkboS3csbRNGXHH2WnKFBRWBx3GSX8DksaB5Q7YrH4rHrtQEtGHmf9rtSL9eD",
  "key42": "5LP1ijxzqp4HrmgoXcvR1S81vCobFZCmws2M9TPyohE22w74vsDukFMPzuLAFAN4c1G5gMDs34p1BKRcW2dgq76o",
  "key43": "3CS5WdmKbNdEmGG64LVVZFQYfmBACx4582SjaC9MVxU5L51pwiQDba9sxzNPhkf3vkqxuE2JBuY1t6uwMmQbPDef",
  "key44": "3w8QpoiPVBhiAbxur5NbzazGzLjKQgP6BVGKyrttKh3atJp3FAXsFasCLM1H2QVhKbWpH5jPQGNxia5LGuquCxNT",
  "key45": "5UZARmKN9gswEa2wBkcdesViN6ioDbim2J7AmCLjQ7uG4CMbZ11PUuiXuhZhK8Rm2ZMRayTM1bgXPqH6UyaYDAms",
  "key46": "bEBgwhFEx5acDSussKjSiv6o78dHq6Qtx2TQV5ZE7UcZnB3FinPitSdCcKRp9u2UXGFjK2KBkxRdKVH8Q23SFQr",
  "key47": "2wTdqmXjypi1UEf7TKHWT5V1D3WKZhycQp8kxTMaNaBumjsxHUvA1rBY2MxBfLCpQqPrX3SvjnpLoUtu4WDKPQj3",
  "key48": "5RRp2CUX9VtUGyJ7RV2SeqVMKQgwQbNz6nUCnnnU93vbTmrsA7pUabM8PCW31pn5zbgzGfo8VdKB1Lb8g5wffJN6"
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
