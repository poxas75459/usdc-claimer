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
    "3PxBqUoc3MLc2JYYr6igBq9SAiKMdcE2FhSmeM6g7GbuWG42y1PTQh7n9pk3FRnDPkgQ4YBJjc4P4Z1cvixt7fjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KbWHem89kpSMr6XriFg9qb8UaXEKqEudmS1rzkGwFre93F591NvKweyyyBFwvPR4s1iBokZvoHhHF56UP4CYmSn",
  "key1": "5qmj2MxykgyBLdQTXKzVdkMb48rNhw7pTAmgoE49nEBKfLM2pWzjUEWXcuWUCd9gjrUkNkjREkbeEW9iLwMsGgTM",
  "key2": "5UnzfKGb2ZXiwiUp2i4AHU9mfv7EYhTs6mFSQLvuDNxpgtBgJm6KiyWQn6qrwtQoMN6ir2sTSfApJhgrkwQaYUjw",
  "key3": "NJTmMYUTX2KwP7pTEnWb4Rphs1stT8V9e859zgEbAwcnPDbZVdmBW4sTqzonqCAdZPWt3oPjr81CEgM1H9Qr3f4",
  "key4": "4x4J78ciKUoDpYr6LbbJHGHL5DZ75zEYJyXfRzE3XcKh8Kt2RF3qVrHNA7c51E2FAHXsPc4pUn9iWkhfH2qbqibA",
  "key5": "5H5myXDsnP4i1UKv8DmgBxEKwXgp8sWegehvJy8ZH1iakzPMxpx913xCSjdeG6k76VcFKGN46op7eb3o9Kzrp71F",
  "key6": "3xzs3owKGe5NemfWBEZXqSxUYHJCSZvWawmiYu1gz2RAGfr6WmspndyEz6offD8wt2gAhYyQwFGy1XHBCbT7TbwZ",
  "key7": "33Q4mreAH2PFffGNjsnq4LfTQc1QYzxWzYcLa7tzpyKPsr8ciFrXJWEVbNR5YwN5UsQao766TQdCKE49EJ53kzUe",
  "key8": "2BaWrvJSCXXvgWu1BPkNr3cTDkQ1J4ehhgMDhiMWuucKZUy2Ghi71h9TX5eDNms3gVGadQKtt8ZWXp1EpnW6xt3F",
  "key9": "2yN32GWibkwpYwShsCsF43bqnEqqYkU7yZEGUnLcqxhybwrTskffT6tKhw85fBKK2TVhRfnjSjGTnyP83nyVe538",
  "key10": "37NaRimGNzFmjJ4hpu5tdjZC5xTDnyNGJ5dEjJyShgSJ7As6P1K2H3tgR6nCFQhKgkWYS5WCWwDpv1m1555sEQBw",
  "key11": "4zrwM9CEFQ3uyLXopnA72GAUEAGu1yesZxbEhr65Y9apGGS6kHU3Sh2ov8DkFVQGemNBSDCFG7C632gbE9kMySC6",
  "key12": "5dNjFfS6Kw8NaaoXwyLosEc67Nv9dw1qsStxb3g13hNcXrdiVsuiBTCWjDz5DbwrYNSgQz4aqjq9k53MZz45DnHB",
  "key13": "2zrczgeHXNhBE9S5ieGCSNmWhveiJ9F66dFHLxS25sziHnxonj4Vj34fa35Y8sV3QNG6EoWX9va8XoYg5LUXCDL",
  "key14": "4J4BpaH5K3CYLMGz1ata2b64FTcUwFJHVzE6VD5aE2WCmCDx5jc17YVSgwHXacyrJj5C6QJy9VVRPkNPqDLJQwpu",
  "key15": "5d7sgKYPN1up3gjqDf9yqAXyYVN8J6gphBXqmLQddk9djRETRfA9cCR6EqPpY4aTEnLeM6Mf7wrRLwUyPtURMHgz",
  "key16": "62V64kZVAYxcHAvVNHsWrSAneS6pqRQACsadTg42R1tgf89oQNXviJWhtzirUStwjWtEtwE9KZnuhwCyMM9LRqAH",
  "key17": "2UXcKPbxi4GYSAGys9ebNujMQW9dTxZYsEPXyZnthQyiFTw31HM4CKHY1i7YpHUD6ss5pEhazxM9iDDM42kACRA6",
  "key18": "H6Wxu5FHZ6T9uHSCRsR9Hd7yvX4brvFCQPGtP5eZLrkCH8Q9byyaNXo3ZJphumVSQSZoSXWddWu7DCGgYUGWib4",
  "key19": "52rG2zyppR7SLpbQmxvCpjWxZNu9U1TphToVwSvqzPWqFYncwiFP1FUV2kaVZgfsmyBXcKcMfhReE2i5yMjzJQ4q",
  "key20": "C7TFjjCs2u66Sa2oGTKmM78MXPNHJcXWAM5jpgrCnTU27TAGZJMNTqtzrLxyr1PkDdtrpNGj819B8pAzsNpDmBB",
  "key21": "4QxyKqzm37Mu1UYajF2WGvdFBktvJ5MfXQNPwsvGSS4121KoCJsJdZBLXVX6cFVaTVxvCR74j3PXDW55vwW2wZch",
  "key22": "57ZdT9tWpuLQ7WygZ9Sp6RFV1wzSwmLHnjDJ2mBdarrriMNqh5C2bCWxXhSnkREdGbFVvCCMoPaft51CDZk5G7Hi",
  "key23": "2cJpEVjHDTQho1HgZBgzUYaBYkq4zrW4WjHHGxAbXxwrmrnQzZAhYQx9Rmj9gCiWrVU3q7nyFexXdCenoLzhhQpg",
  "key24": "4hQi84HraYT9Q6SqtFisTNbRKbdGuKtGfdb6sESfJE4Q7jca6ySjmjYpxGLTiCeUr3Jomubr1PB3o6GVpDTE24w7",
  "key25": "5VwLhMeZQASRvmG5AP9WhnS53QLBBrJCH1LsheNuHAanwHejFECJUoETQzdB5scfSioJzjXw1Cg9N2gHpHBhpj1v",
  "key26": "4aueGhn4jHwoqD5LBV8ggdZgQQC2H8qLK1h8dctY8jRH3kY8dx1tJFRennjEGDeLH21rxGsaHZr9g57rhMeVWQA1",
  "key27": "uaa7PXBNwy1CH3veqdz2SWMpt8Rh9uzviwUiaWTybUzBr1ipR413GdpmVPXni34P9MQUB3AmT2gdFohVtHzrf6U",
  "key28": "2gJyVB7b3GdD7BCQHjCveCabxTX7gRqqmPxDvGzVibeKrqAMFouR79aMV8Ztjf7rmEXyeWNruEdR5K31voY1WFVN",
  "key29": "jypqvELX4L52Y6uU9znzrYSEF3EhKMTgUyvry7ZdyCQGvF7QtcAAd6YMuBZ7VTT4gS1KvnccMDWjPRoDW7xgu3u",
  "key30": "5pGQtzj1yoKatbBcz6HXVythDfdUzEDDWMxpxJEgxs2rhZiS45BSmt5RLg3WZyyMtfQg5rJZ45jRuqX7SDzdb88C",
  "key31": "5xdrMgByswr9NChBPwtyLA8hgDwpLFFh1wBL74hNgJuaMdMzb4MsX3kC3iELZcvKGbJtoVGMwegzAsp1SAJWVHFG",
  "key32": "BbEAM8ZmxXWLQvf9QR9Gqdq2Hr3veyt1YyTgNw2eUuZtPqyP1qUCdJkaoNj6ntCosFkMApvyxPzuQXy3h3hSCan",
  "key33": "3HLAgyTpu7viXfBk7AvLmijZ4CJ8iv4EvpuFhVLiynUkpNb319sFXasSFgzYNpKDiaMVWbYsEwaCxVUNpXmmdxzH",
  "key34": "2zTwXvaRobgt4UUxByPyYKT9YcebiS4pC8V6FJX9zpzUecLaQstup87U1sk5Hc9UTxALL77cSRrFaJKafbhU8ghe",
  "key35": "ntjGyW4ygT8km7dobDmeLq49BqgGm4UKC7HUeXs4YkKXmmeyjhBUVUD4ZGkkywzPhu7wNoigASAi67mJ6Af2vdo",
  "key36": "2y8FtBNtVwRP2owT6b53yGs5rYidYR9PtWiT1W8ZJu6CEy5UCYz2ZyagLgGF1AAStrqfc9UC4yn7ttui6Nm9X7W7",
  "key37": "2XrLcELCzdrJDgdEzwy3vUe9pz7qoZzpyz2GsgNF1NvSSuX5x1oWD1MujQn2Q8hMxGCky8EYB9frtLeEUH22DJH4",
  "key38": "578qBs3TyuuWbS2HQvfUV3EcAeFUS467J1zzecEzMS72ecWbBFB3apDSFyPh1tR3Cfmt6R7SvdeTJEkfcZs7pMwG",
  "key39": "5kwSTSRXFAUtFAtJ3ZTvWs3tTe2Y6V8RJC5Ytp6yGgBEa5ixFN7wKkjKhxh3yByfRddneD5k2av81qg2izrUr4xf",
  "key40": "5v1ANFp5fc1UZGdAc9FRvji9GiHULeESF2yquHEPZkddaDaUdVsefGHcxW3M27HbNb5X5pdAWhuAcvA4mMktKXU9",
  "key41": "2jPwdKAMBhvK3isa785s922NLUiUT1y24m9fM1xxJAQa5LspCuQRp6QmFdKzd1ZayebQyqmnH89wZZkSSKymYGHu",
  "key42": "3Daw1nGXwuMKC9m5h6uSycfzEccqt54b2s1v5FrAvJBCtkNMH1yHU7oFbdpCcfzkbKtVXqEyRiBF7r7fe9uM7qfc",
  "key43": "339Vw4NU5sGuLXjf5gc2orGEd465Xdah9xwtzTm4MEDwssDGvHQaTVu88bLs2ED9asyFtDDWu5ShKPNhSWpTBX71",
  "key44": "igyxnpqNgqif5dqaX3u7cWBAa4tYiPRs178ZJW782xemAbmeUUERwt4L5cqQ9BjgmNPigJCRj8XS9LQiEa8Kq7s"
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
