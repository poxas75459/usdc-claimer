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
    "RA25jhonYkoZbAF3ddmHQz6ZXyUWi9uVAgecen4R5d724m1xCkqd9dgBsBd42Yz3fhDA4XtApD3ywBCZMaBszuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rjXHABYTn3PycqLgre5c87JvQDpXk165duGRs1EErCQjcWrXHVszUa4247TcoHR5rmFFz9LupxfgGxbDBrnh3Aa",
  "key1": "3Y9YWDrgiH2Ed4P7vqD4E11spAtEGpD6Dsb9p8u65ftJ4PuooSC15HUgzkmDeTZrrqj1Z5R9GJyrPrrbpVZYiZ8k",
  "key2": "4Dfipw1uivVhBn9sEHUy46cTpPrKuzHXRGJBHksn5jJPhydGXwngnRBjHLCSbWUwgs87PECta49exbpty6JCLPt1",
  "key3": "4bGQL5soksFgMSHxtkcF2T4KYUfswqHPSgDF4QtWQxjc7QcugXRc3Ci3p697wDAS789JmS1LaAJebdAxNFTEsgpY",
  "key4": "3c5cxfptZVuuRrt9zsJ8j6Ub6o3Ew57oZS3tAn2f66yCcsAm5BSPLNXxAibB1B2PTQNwrVfxov35nhoNUjDLVxny",
  "key5": "3ZfBmKzZ2ZF7RobwEtuBxUZQxyWzrCieq48VF5ekg5K7ggipUcPiLjUHDWUwgDWxVgFMp9Ud5cHNesf43WM5u1he",
  "key6": "5wJUHSkAS3APAxJPsMZWVZeA62n3ceMTEcXA4UgudJUmQRTY5ZqSo7T5Qe1uCjAAoa5P9ya2BtMuTtt9NmDh8SQD",
  "key7": "9sG7LB5LE3jFjYjtE9YiTmfiobNu4y23GpQBFiWYFJUCf1rW4Mgd6C6furZp3JaCmWsF6PXu5BnF9GHKeKEHKvx",
  "key8": "33wzh9mUvb3dkxXNjPJk9mZzX9upY7tbEYMNxSGWZem3SW7S8ouskU7MzD6cX11y9YhYT1WYkvNpHCEZuXzowggN",
  "key9": "5vHDTNXCqCzy7ZCYYCYEdj73j23eSnGbEppauN14jqJ7KoqMnbnidg67NZyk4vKcFu5mu5oZxJG8c8zJMaEmoRLK",
  "key10": "2c6U9QTC7Lvrga6jGjMUuStiVYBpoTxvQSqGCxqYy9Mn6ewM5hhXUd2bhw3V1wPsNmHRAd7ABEN4N5Gbv5Edy9pC",
  "key11": "3nLgeVFyaqjE4PncLH3sncGRNEFYRchst5FA79Q4YfesBFo5e42Lhsks1tynuXviCsD5fccYFxoRvz2x3JaQx3w2",
  "key12": "3pRVRiRdgyQQM2HY7UMGveZVLSQemQSRcdPitzCxdjPh56VPeW4BovuLJ7gAMc6wq2s18JFmetxp8DmGRfyzpLvK",
  "key13": "3Dami85ZkWm6aMduAjmx4br1Gve8FDbSqf8kYDSyALQysyEna1vjcaXYxX8h38GZeE2pBYudinaksbtBgrrK1BEW",
  "key14": "NgemLH51rTu35PKRA3MUp32whRJBZfQdfNfjKBLpZdVPqHgbaPbRrcAcVa1bWEa7TWRE5PiAeybTsUzS6pUdavN",
  "key15": "4fe1pXFRFUkc4Qv1EVXkWvNwaaqqfM4zGmkBRLU1wFXRzX6uZCkwexiov6QKzwmHWybUF3CNiH4KXz2tFtLRNvJ5",
  "key16": "W44S7UUpAZUdBmaaif8fxWxdmqgxoqjgXzwJ88w34sfu28qLVt6gZ7VpU8TvUAYDKoo3GbnMde2Kr8mbyMVxf7S",
  "key17": "2avTbMWaMJAhwtUN4exXyGKM6ES6Ekz2h5UoWpsWqoqyb9d8BzHA7yacXw6VN4YZGa7n3j8huNwXVtveFTXfF3vq",
  "key18": "4Ji2hac5tJJfvY2QTAku5AdQwcRmHeeHP5tN3mtRtngEbkgg5cUTnS4XEfigAfYX23q4UW2ax7HmZzW3inj5a9ta",
  "key19": "SSC7QrnSYSeRj6W6JR13gbnFE3RMD1wv3oyvbECAvi2bWiyTw9zYZLUFM9myaQg77Ky9Tc2T1UoxEXXDKPnjDoh",
  "key20": "4ws3T9wHcf71JPHCFphQwm95kj8KUh8zMX4uJ65UqjRgDaigoK2XQ7fFW3F2cYRjeSZb6juiZLRp1MttrFwBDwob",
  "key21": "5rcMs9zf1HP6GkbHRzkidtS76voTw1w4d1cqcpB5dRGb7HtSWPwFgfTNypkV4ETT6z5jyBhZkWwDyXdq2Mu3BM46",
  "key22": "4UX5qpBow3VGKmWNYDWN2qseqAuPr2cMTjaaesMQZu6i724KZHFFHVTYTtFB5Ebe8TwvJWjhwknaQ8J5qshudYA4",
  "key23": "26A5JavRTw5GwmCkA4b9zkeZ2arDqDmPh1Vn2p3tWmC6WkpZNzBUKZV47d1CmEsBZFCs2NkJVpKDDc218HpnD7pz",
  "key24": "dXngSH7cVkorCb4iMNFAzbfA2eDPhVz9k5c3CpyQDTo9hD18Pip2XcLDj8SSb43314hqvJGLvy5yHX6G5xrvvFC",
  "key25": "EHUBG5VyJwqc1Me6FTfN9EFvhPT2YcUu4kuKW6VMryhzXts3qCbQ3au23xkYMuZAjyM86eRm3dkCRB2ysyecSoK",
  "key26": "5CqL7uD1dvY6WHvzeSMLYD5NRa9Y7QsRpFA8knbUCEiCzFDteRVrmGx3t8KSDF13FQ3k2q91bZSBbFt21gQawoY7",
  "key27": "zGNTq8FocNaS8rASokzkyFvuEUjRumYkdKCY5tiv48zm7upUYodmMqU21PBuXuBvhGnCfJuiGhWTd1wYgPTV3Yz",
  "key28": "3xXP6FPVsCUhBAvK4UmidPFbNtyq61vQxy49jGwPvED96h8zJxFp5fPv8WYq2wEKttNzfovESthnBydsuZ5RnEVq",
  "key29": "5cSAT7VZjwDq6DbPL4yiQhb9GLqsa3wnw2wMiieWLkiwKqxpRMpcG2nGUqBy8KXWE6i7iH75af4fvbMarg3u3e17",
  "key30": "4Naqbvxb64hMDHo6sKQreaEwihkZRLj8UciipP47XbWAyToEN7nVX18qmsmksm4ifZXup6GFzT1muPfraLLbmCUH",
  "key31": "8cShJddexmtjrrHnnftMhu4D1cRA7S1pCiELPJ68gLi9duxNpDa81owGyr39AHF76a44uVtB75rH4U4JYbWSAnx",
  "key32": "c14sUoEqDUmyDjGyiZMHme3BG2NqKMkuB8M6ZSsydjHnTMpF7kuzMJ2QSUVuvSiP5MiL9ZPbJhSxPXbCPcEmtjp",
  "key33": "cVMsapsndUdPTvutRLMNEVxqSSAqHnQvcYPUvMFEvBtFe2VsSQicPbvTTfeYU8khH89RazUfxGDsiovSSZrn3JW",
  "key34": "3tvGJZ4ENj6hmL58PqxcNcSG2QXXKRgZcPnMULyzdsqB2mKCvd1S6WQwuxNkmvsL2YgjarpkuHn4yhyT4Q8pzsKS",
  "key35": "495tACrgEioMak2YjmA4Uvu4wAs4Tc5XvMZa6iR7p5rm487rpuci7aoQC5DDrJS8Bzwcae66JeQFJt2UNkb9WMBB",
  "key36": "21BR7o9sCESyFc8itA5F4VPKki3izv3Td4uNHyPc598ySwyxhTJsT9FaGRqrP4axRerphL89de1ZiCJQ6ctxkE8F",
  "key37": "PCT2xQp5rVewoS5y46jpBnSAnUbHYi5fUbFD4AxzpWqZ829oefu3Dk8nReDcAxytkeBWUjFtuf2V4iJs6ehiKJ1",
  "key38": "4XFCRcUwcQsL44vMnvRqdCXpVRqZrNutXq4QhisduyjiB6MnJgU7ZXQVCvn7DGDZPkAjwkBGsvwDYreMFUeaDcRx",
  "key39": "4G9aczKCwMgA24kbY1gt5neLJ5eKYmGkYRZdCrBJ5s5tj9ZCQq3uxqrFztfscKmEsFuW1yoH1rH1zo3gqwGZicPb",
  "key40": "4DUEtprHB2cxvwo97ebCMxb55LWUxo2vxUuCWt377wMZjRAHuc7THuLQH8Zrx433jUBmj69wcy6oAfZXcg9CcHDg",
  "key41": "3k7EZk4DP11tWb7zPXvLpbFDu9xKUcGHvCY986Zr4A8TF8DLDwRzqdBciBQQq5CUFaKEKNdfsuNMSMZ8zjSB5453",
  "key42": "tLc4Uoa5oZ1W2ReyWbGM4Nn8ommUU1ZHgup47ZtK9gFREyvGGqTj369rf4q2touihmG8V1o617GyUgr7K6RcXNe",
  "key43": "9zeY82jamjidSCLoBiMAvrVDLEfn1YgmBabfvLF8Cg4g3ynct8FCzDEUgxZ9XByBEGMthc7YqJrpbFejuNB7RkB",
  "key44": "3ZtwZfszGEW56PjLq5NK3UbgEB2WFDvCxbuW2QpXxWAz8mnNdUMuwYNCThjq6xMZ6EJEPZ1qbfP34F773dwohHhy",
  "key45": "3StdzfEYZ6AxHtDjTYXeLagPiqnCEfmu9asKwaSfoCnhkXghXZmJXSRUUQn4Jp1pNTHiD11z4ZfAmLiMvMJvrAVp",
  "key46": "2j1wzPjRvxNAVvSAadhKge4ug43M26A8B4X6kNR2MEqL5AEGseRKyRhAapGuLGLUEGbiyauvjk3R1cPK4CLuWbXE"
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
