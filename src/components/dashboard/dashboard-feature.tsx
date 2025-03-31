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
    "4raSTVaeUn3pgWXVXpEprjL6wXgS29LPNHJ8vcv7KJMFTVh2dqk9Gaunw4fYJtvQ9xFoH2abFV4eZM48YkYMvDNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wfviZVMq1f9LUDxY2kpqmwP3X1oYsGixhPsXMS9SUq745mmvE7GKRrJ7eM4QpvH5uz2qbLYqtYCEYV4mywydDhF",
  "key1": "4zqceY9rxnZRgQxWfPMWzBRGQvZo47tj64xDKdmXmT5YFzCCuS1AxeNKXNhVJpCuShqpbyPZXUpzbwpHq6X3u8hH",
  "key2": "2p5ZBGHb2KWYV6geuqzMsSHQYfMAGbNzv2pm1A15an4kMYaULyTCi8FTptwipDsK9hWAgiwJgqijAoSS2o3oKzHQ",
  "key3": "62G2WxMgzYNqn8d6U83sBmSPuMpmiQmpgAny1hEgUJ7zmFYqGmi1N8wsFdsWwxe5NzPzw36i5tDuZxZS3WeWvhWg",
  "key4": "i8gcTrUbhRjH2YPESAudXRkWKBUpF1wQ8aQcV5czDoYYFT2wKA5XYdWkguQtphG2VFgwqbvibr91uDv7uhPHDEJ",
  "key5": "5rvAKRDZaarzMSB2Lz1Bibtb1bjGFDaPACRMvZA3MojGUeECfUJpbvtorv7VquQPfEMFSoAeQWzDo8G5BanqHf77",
  "key6": "5xVa3qKyYsN3XPK7rBVhA8rgsj74ED6fLD1vptr9dEZhqmfTgJNp9m1wFc5Cy1XjE3pvY8uEpVDvZJEMnQw4Xfng",
  "key7": "51SEFHoibeSPeQzVCVpgJy7dNEY6j5Rftz7LT8o9u3qUDXLZT4whQuGrCVMdWAj4Sp1CVtsXjhrP2i3Bp3ysCh8k",
  "key8": "2P9ha2NmqhSWx1sZcxxnKKddJb3HsLLBkWd4jHX6yB5fHLiPVvFm5B11oBEZJTMZYLGTF248svKo5LL6WHZA1MU",
  "key9": "4d21U5LrGC4J2Z52nnX6Rk3igfQKgPrffVGkahvLYCk4eXFfBPFzmsy4H3Aq3cXMJB2gTosxtQRVNxDbeXezDsjs",
  "key10": "2DYTHR7zMXrmgdy3Eb9g256uyBrbmos9xoSUwkcY81rJxC8yghQzj6t56FnMVA2webcETkuvwji2BnRSUP12vdNT",
  "key11": "vZ8B75y3oHG3ivKfJ3wegBFvX6kwJpquD3ceFu2TD7i71oHjV9cADCFS8HdQDzP6hFnFcAZYxuAAsmXQoQkURJi",
  "key12": "J8YUrnKP9sv4LhgMaM9HrydwmmXEr1zv4Sq4vpEwMxNn6hUkfsVbg6aCcqmn6ph92TrPKeYRxfkjUSy6hznKVCY",
  "key13": "5WQmyH4W4JTR3aXrPnRfXREKyxXezaTYjNaVvqP68ADhUucVrKydVvzBvCbM6C93UVM1XKrCJxjmtiyJnK2M6WHE",
  "key14": "5FY866wSqbKRvGieXtqBgzNwxfDHFPCVp1ukHYMHNb2KA1xNQzw1baxR5VZTG18qGpvsNQfEeEratht5jVZ6hDrK",
  "key15": "52oKdowrko9gHJ9jpPgu3cLULecMHsSCCT2dx8Ncd7GnNn38p6svjgd19MVFPqi4aQ6eWRM71qz6Fwxvug2Hvj64",
  "key16": "3my2b4MA6cUzV763KpMp6kVYFBNKnShxZ1XBdmkuEQa2oqDTHThGjiqVUnnt2ekJUdpcF1LHcsHNeL2VX9UdekwD",
  "key17": "FHo8jgqAzbXEuLpBreuBJHXuv6Ko3qYr8aXFhKDqcF9abwKEtL2uVz5GdFBNu3x7o2TAXBkWBUtsNfvWMAyXDSM",
  "key18": "p3L5o4dHLo443sidrQjbKYrP2sM6ZaztpZx999EkAdJZPMyWZGiRh6xShetBFovyUQFUhGAUFUJhe8dMrjsQsH6",
  "key19": "cDDZ7R4VjauYhtk3wPPYnkMbMdtAS88m9WZrzY3LbwBsgbxzQbfo1jCsZH2pDbV44y1aX7k9GxRndQ4kAxFRFUV",
  "key20": "2gUuBmHrhPL6Haq7Y9ukDxEnQWFdUXeUjRoJmWq662riwkbMCiup322PvwTUDdzx1Ztt8WLFyqgsTFzWAHgAp5eW",
  "key21": "4zVVMv7joSycQuE94CwS8iQjdxPHmoXRwUTyQ9PCcTbQYSA51vMmQettJFeYZcDwhS5mrmbQrvidWrrfGVq5JcJj",
  "key22": "37siHRiiVMttzA5FcqtKw317G8WPigdtEKpAzyjYEaTcRNkxct1Ngw1DJTwcsTctNfBgRt3Hr18WjNz7jWwc3fL3",
  "key23": "54zz1Wmv6FL2H3cAiLMMnbWkAzKsZdb51qq6q11ffnCBcVqbcbZGYnCeayooQ9NxGnuEYAahrsmsUeUAegbGbb5i",
  "key24": "2dgigzKEcFJ9kb3YjZyekuGhE4tNucFceiZi772Y9V5XcYTk6VPbk2Dh691HAbnHm8Ncr6RXFiCLVnERVKXKLekw",
  "key25": "4kqoUbnhZF7YhuEat8NCRYkAqT6kDZ94R6G3LzVUgHMNmdBgCBjV2roJedG1YpjGJNJQpWgAFDyEjc4cC9SUUCv8",
  "key26": "3k2L5qWzv1WAwTxWqHw2HEpsGZKsMvTVucb61LHVEPtM2hC3RzWAY6jv4zQweLAvnp71wDE8hv8JnQXQQgQDJtRZ",
  "key27": "isbVDy9pzrdwYHef4rN5jQGQQgmMrfthA38AKLURudiUupq1CgUXZCQoxGriyjD8CBejxe4ugLebD2fffQxXFQA",
  "key28": "2nUhNHjXLAgApP5DD3HrqR9G9my8XA5oZSMYucGXA5UJMeEoiV63tyKJGCR7u4Ce9jKaMc6gWSJ9d1tXmD8ppWRB",
  "key29": "4JoCucricYB7dapdUAXHR7Y7UHya4GmJiBtsUi33dHAdbKScaWVFQLGs2AAjgPKFAk9cNUqWsAqNcBGXiTq4pbFj",
  "key30": "2o3v2m7sVnpvb27ZMbmSbpMfBjfz23CeHJPnkhzF9rZ7NJpnnPW7pTcv7npQx9x8vQTY8iZFLU2ojap6DHF4tQJd",
  "key31": "3Mvi2hDdy2BMC5wP6M6vi8c53VWdv4hsoREVcqkojHoy22b2Er1YZqvC3STkd6wheSimXetPoKJQkJmX6QFr1HNa",
  "key32": "tuQAU2RDp8eD15HiJzfusy7LAB5VCcG1S6SD1M27bgxdsRyCUwLfBzP7ujpiQrcYhrTbZngRqT8ZS5ia9vET4q4",
  "key33": "5vSu93AfP3JsQiNYV21HUqpxSv5Y86UU8hsZbweL5TFLUxTxXoMHx7fj8ydzARF35YmxxzUh2W392jfuRuFqRbxQ",
  "key34": "fURhCyNykYN5Kob37pVmxVLuH4E1XgR2tZziEqsck2LEqRHeEkqs3QPvdEz7ap2ypNtuqRu5eDgFLGrk8xdgae1",
  "key35": "3dK5H962Mmd3mjXpggjnjYaiXDbKAdLMGvVLgqFkKa9rE7rm45FWwTWqMQkXoQzNpnegnFQxJiWSJUFeb1V6g39M",
  "key36": "2YaGMmZLq1B4J7WsTDDjJLnofusJGwja9ZGZGCSiusmSXmegHYL6SekX74WcSsaNMmXikJQ8sQegPpCcQHEXFdH3",
  "key37": "5ao2HpVLQhwRSMEFgSFo126qGDipd8iD7LHUD5Hmi6WjFNpYoQMSMw1t7EKRWQQso1DFUgXfUzg4xprHiazSo9Wd",
  "key38": "33B5ykFJQ51eg2mgVYvz5HY7C3FeJme3nrnimrqwS7rup2mybD3nnPsLMbgHcTknv64BSA5Ky17wz4ab9qCLZFaV",
  "key39": "KHo4kCznmpf9eQWz9k5HEBLpQW1wP5VYAP2YnWn2Z1rwDfNLfiRagNtsW3RJ5dyFRJh7UZoKxGcfE3Y7cRGUFW3",
  "key40": "2oGzmSRTM23SGGNNuQwWr5PtmSu4sCoKL9SPNhGn2xKxsLizSUuUNgBhC3CvqRKDhV95THY74Keyyt8kuTCa8vya",
  "key41": "yBEa3jyurMhNtfqHjzErBJ3C7uvkh45tRaqbGxjqe9qUg9m1AtpP6DYKQntpE9k7tL6gPemsAvZWewrw8S33Xi7",
  "key42": "26TQWRi5ZfZauUPKDxNLgcQUDrj6fnuDLnbqAPoU3toyZe4cq7DQaUg54247vGZPJKZr78R4WY7vtAksBKEJiXFZ"
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
