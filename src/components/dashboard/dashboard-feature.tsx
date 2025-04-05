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
    "3nH5xppKq4si2cVJnYb4oZAMUa7aovAhobEhHaLWP7c7JbP3RHoCoQToUnEP82QiqueJkDHU711aSqjaZWYKfF5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HCBehJoZEafLQ6okZv3tsttTAzbmTKmzn8bzsV5r9qSAzpMVuCEyHo2CFeAXZAEdE7SRGzH5PVVXKzCc7d15jBM",
  "key1": "32wLXrkoC31jLx1JWEekQNemqqarGpH9aQa9eapkHWpnBz3XKYExb9XTMgCLZmVxcTHRCRaqfcBmVGfskjhiFUsr",
  "key2": "3G9R9NMxWmfpYYJHfuq3SGVUCPA9pz6FnFxCuaYhPbZxEfZiSWKTL1ECh1RWkvnqNRpLsENTTjwjev5M4r5pZPjd",
  "key3": "2mdr34SkrMFCq2NpPr68bhU8BDcj6dtymw1yKRt1ckyxDXApS2rJhN9nr9VKCC55KzRe9YKGfKka2gDJ3XMD3Drd",
  "key4": "5YHGArzgtoXjZCWjQE7FfL6rr2t1uWEt9M2BcXdzfm6dsrHPAQg5RfaDpgM3uALY9Q65TzYEuQ6nvyBGAHGXFJPj",
  "key5": "3jFv2hse2tQEHrCa5BHzjXvJQYsppxGH5qCMLDjYRY3AvEPMu1Q8wafBEXnpS6qtRYrx3Yj7U5aHRDtWpVKQy3aV",
  "key6": "3TmxubGwCX1vNsgyxB8T1LLbYRkW4YgS46FkcPLCai6z9PRNDEUTDfRKMTTVuK9TZ33zGZPmkqd5qG8NLz4dbXya",
  "key7": "2M5xyuT3a1EmfA7sStBbpVhHub6NyYyrGVysR7VcdwQUfftDkPuWNF5chGMhN7ADCU9FwRBMgQ1yWkg7CDE6MhPQ",
  "key8": "6ssKvDRMhqwXPJeCeD3LPRDRTkQgGHy67ULEdLX2stvfq4aU78c5JEcTbyssKbgqSD7m1nHg6kH5MG2ayZDkrvq",
  "key9": "3KhFK7pYgNNtJbWMnZtGA1eoSm6teUPfjstBJPt9sKQUCGJFusikgn5UvF5BmVqJE1Xt3xk3LuhRa2GHeKZDo2fB",
  "key10": "4Zzbx8kjuFAanjzL5g58rZLQqP16TL4Ntj7jRtE39tskqo7P8ewvFQAmM7miBZpNzUb6c7QUhAGBhNbL6BHwyFgt",
  "key11": "2vsyvxmCenY8emMymqXvJhFRqCPTyyZEpot1miF7aPgU4zfQobWECzrtDqGLv3AcPFQrBDqBs3Jgx7dbxWC2QH7T",
  "key12": "4qYESMsf2bkkE6fKcdrGJ1UEp29Ch2wLafZG8wLcg1e9q8VkDRTphHVGcZTWs4kaLPuoXnroKR9kHG8A5ght5KCY",
  "key13": "4o4Qq8pyyTZvtr4GhCb6QgX3JosiauKPpVxbPwopc9PPZTBVVKtyiKmtZACBuGhwW4goSkDLEfbj42tnGkiPfNnE",
  "key14": "2JujF1Xco97HwVxtkoK5npTgzL13sgm8eHby3ogWEGi39xMrMdrByPmLqVJGVtWf1vfSUDQ2zxspLaYMgTob375r",
  "key15": "2Sfsb2vyWLd6ij3n8hSEx6iKsuKA2Kxby7biLXHfm27SVW8Pq8o2TSZTPjJ5eMw1DmFZVynMUaaQc1uyH6rkEiYY",
  "key16": "2C11zKGuGJNpNqK4h9b7o1aZmG47TudFHM2a2h8cqbRQ6FjUghE5B4uYjxHN9ebSPremcCMu65ke3zMBVetG5N9s",
  "key17": "WFXoke4DrJnvKH7KHSZo9WFkA2si6jMK46xPgNUPPNQdgVaFyGcgWc5e7ZXGE4bUTXVxHmt4Q55B2Ask3VjjACu",
  "key18": "R1LmDHxo3YCpfBusxEPJLGkXyB4VEBTzjSkb6RGYR75CvYo8i5dQVbZGNHhTD8yVrKoCqvMfDNXbyrtgqU3erEH",
  "key19": "2sptbeZKZeB5iGgWemchZtsbMeBMSZRnaCqRbTrUM9KEfQsJGFYYoyxxWramqyDLoDqy6dEwYbdRVnvXhmLq29sp",
  "key20": "5zp2ZZiaCUunv6hgqoAU6Q5J52EW7qDeJhqjD15nNaStJdgkj2knPyymdFjxyZKkSL87hTNyDYUGi87R5Rgdv5r",
  "key21": "2NjbnwJDZiQ7Sk26L1vKJLsw42g5JU3bTidHU3uCswSCmTRGMtTGsHwbdekypWwdMNoAQezUa8feQmpoiekNh2jx",
  "key22": "28wEnJHwkeZA3b99vGcdQMU5GaY7qSK3DfPz81qkv8c8iq7kKeQkWwC3H9XTyzfYNWxVCYbFZDQTXK7xtbPMmh5T",
  "key23": "2sxAWK5vm6aiHmpRsVoXAx3nJ2RrwEscw7PqBSv4CqbhQLZQaF1uq1CHrUXPYj6cYS7vCK3Gw1BXBLEQSSMwJjio",
  "key24": "SofNpLQvFfsbKhy2ShyeEbjQQwyGmoyEAdd1Crh9xFtiwc2HwzfSVx8wREKNwFL71GR49XuEmJmmwg4YcwZDVxx",
  "key25": "61DwgCUVYeRMfCXSDwVpQe8nrvXZt5QKgQnYPXD11RYrGLVGBJp1yP1UCQVefnk8Gw2gYbzA9XPVGY3dNaAjLU2K",
  "key26": "67VfE3VAcub1vh8LLwGS4cceiTB6iTTdwyjAYbKGcefWEX878Ui6cHRUyc4hydtD2rJL9bD8kQK1z9G4oasM7p1c",
  "key27": "3942rLRBHo3E2CuPARQmFouRH73681JTx4H5d7CVtRgWHLjZMs5MRLywrBTzFfPyz2NQ7RgY9VszDamRt5KCo1cm",
  "key28": "39uocQQvv7LTPnvFfPZiamzz8wcb196TPuJjQxenRSNWz5bUmSzLPtGkALHfqLVGAPr5EsZDaNAYpDNvucZ1D1np",
  "key29": "XvhbbY2qwC1hniehySJdheNZCv2FvsBRaxAGWBq1ZViWStamhiyTUSgTapYt28oe7sZvNM5z1JDWKoaQBhdqvvi",
  "key30": "3BBLJWhBnsfbieTRGQtFHhcGyGy7uQvRBJ5xkdKvsdR2NR8sVjQg711WNQ2aWKx46sGkeUqQPHrnCVFMjQAWW8PW",
  "key31": "T1kzuP3A7zUMvBxWk7pdAaphJMKZDDqm1BN6ZQenraSn7ggKgVB7j7dDX6H8y8JugD9hnUGPjZL2wDm82ENd9zh",
  "key32": "kjVr3f6Sdg1dRdyo8Nt66Wu5kTyrvd4fDhtdeYvSfC7B3XbdLbidsYTBZuTB3YHujxHDMDPRceauibb7GpFX5Lr",
  "key33": "4ffhuJiF13U7MiYXk9LBTReUVxcwE4soCazNoWWL9SxhVDMy5AYAWET4fyhBgQHSCoKCZr7SmjT59j55qoRmLwjw",
  "key34": "4aXLcsLmoHSCrEmBebktZWuYUM91TMQP1Cw18nEDqDsnTZ2QNHJE4q8VFtAvEChZj3Qn4zE7ZEZnFvNBbxrwhzCB",
  "key35": "3skjv7KeQgFdJAM97eKaTyCZiaVzsd1dCKfDzdnDidM1kwNXtsSDvwwGL5uB4LwUKtnN4os3KPahBpKz7Q27caCa",
  "key36": "5iLtbYUMtQZzy55Czh89WQzYVqaZN5oeDDD7XoQav5dfJZtVzaNssKQayhyvm8T4aqu9bn3w3xN6YHQeTUVUfTXx",
  "key37": "3XURqt1SG8phcnSBDYoV9Q9zEa6gXA8ZAGHRDR7rUfFhdMrYhinE1UVRWdVEzibdX154K1f5bcif5YDuD3CnVESK",
  "key38": "3WgtLMinFTvbKewPi46BBHuFDY68XbgWg1XBJ3eXKbfM8inmNTrYcvRQ8tnozcVjXwVn2Xp4PUHSo49X8ZHKdHHz",
  "key39": "hbLdGycRuUV3iZAh6e5Yqj9rPo2eTZSNBfMXWBoU9Y8PW24dLNwbJesv7v38uCjDuXfLcCqBzz81S7GV2Z49Xzv",
  "key40": "21oTKobpj3y5u7scz3J5ghB13Dp2Umoz7gzKerJrL5qUECK2JBay56oDkraSCAaJQVkyQNVcNugMgN2mttrDnJP8",
  "key41": "3BVWtqeLs8QSTcWfz29H8xSWksN43Zyi9K9ixGC4k7szbxgt7RZ16DELa2pP4Jjkea7TgtwCjHSv5Bf4G9DCcwvq",
  "key42": "3h1xkx6YXGVnZADaqj3t6qWgj4A2Kqxi2x6bjp4dpfh1V8QBDvzX2T6xYzruBaMZbiRhLk4NgSS8fND8FBswNjfV",
  "key43": "pNAmJ66MvSAPpAJkAyEtNDm2daZGvebvs2WXVxLjbAM9Fnh1QTESdk7vzeiysn89v5zvguUjsumRRxeo9wLC5vq"
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
