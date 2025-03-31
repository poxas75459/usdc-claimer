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
    "5F8zWaDpmqoj4aWHRh48hKLQK4QgzJSTBPtSFjbtPGueinVgdUDS7TESEtQXZHr2dGRV5YgLk1QzGBvAXVX7APfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yiv2yJmb8MZeAk9GEWpq9wKh8LbJQzQ1CFhqiEJVHfeTqXaEwS2MhgGPC9ixmZJ3ygLKYCLDT4hyinuyNTeK7B7",
  "key1": "gmZ5wv1Ns7tRGGXoR2bD8NkiyQrCTTEC9XfVUSaQM33FJbGBPXmWUCiQV3kZEqTHMG3RouW4EbMcpxkJHHUnm1b",
  "key2": "3ombxFJKannVTefHtAoim9gMCmkRg7AjSSGtqzaT6FtQYST7GBroYNVgEjm2uNrTZDteYS2xEgKfdrfbANbdQyd",
  "key3": "4tRXFz33d79eQweWRJy37AsSV5BgcJYBzXnRD1fz9xsRebiq5kVEAbhrU7MRTTz5HCaVCP4zZAH8X9coHyB5Ndet",
  "key4": "21cG2EhkCCGGpZAPBdVMFhF5qWfpatsVEkgLQAx7a1wgnBTArEFWhTXAoMbTq1FTV5aqRqibwpMsFvydtaP4Htqo",
  "key5": "3gJsm2k7QyK3Eij9aMWhzuYJ5AoYi4PSu483VfiqogGSvRoifHKwTVZFsLjQ624TcuitHvng7b1TNBjPw6Y1N41L",
  "key6": "3Q9C6aoRL4tijQYgEtpkgBcr6T4zcRnbc9KoX3uJz9An8xd1sPFaXpVbWpr9ehYzQHm1H4vCKM8HyyC9fK7xiUqz",
  "key7": "3AhCRpmzsqNvEpG51B2nzKAC6EVpjDQSDyKmQKRZfJW6qwVtJ3Bhnkrj85Wud2XP4GTQP8TaXUojcNRHs7Rvn33f",
  "key8": "4sdZNixgaH3j1ssHSJVc9cn3Hv6kjsa1cVVk5phEkScDBAx1j1fuKufrmb7dfuFJBenhoG2wtAH5HYwrkJWCvbg7",
  "key9": "ntSqpzwx1VUqRn79P4EJvGP9MSq9JKV5ow5vZbtHYbthf3ibzC8QmkdDk46sGwuHo6RUcqfnP4NBWH2mLrJLiff",
  "key10": "3EdNYyEcA6dmjjWNDfWhQvGFmY7t4NpNoWiYBow4SrHVKxgLBrFtUeJXwSwLxHSbFw5ZaT1BK4TL3SxcFLqqYsNo",
  "key11": "4ZiZqFJPMAdG8Vpgu8nEsBwkKtJSgEo9cYTcivT31ML8z4EtYVD3YWiXsrFcD5vZ7djCdW1eeBDdJVT7Nr5Smx7q",
  "key12": "5GkKQkB72mY9njj2LJZW76y1CwBMeJ34sUbkiZeo8DLkSrNZy93Px6Q2MAcW8F9sjBHPF6vNXA4xxikH5LaNgQsb",
  "key13": "4hmpEfoHdFBKAiW3zZQTByYzxbgBes52woGeiEgzqurMmvdKgGvKU3W2u4fE2YbKPuqaiMWKSS6pUXERef6TcgCf",
  "key14": "54aPZQcwRXn5tFfpn6DSPBcZ2svjZ9T2Gu29UB492taWskNgrGJrVcahRf4w2tWNMHvEPDye8hNH2RKA5czwXTjo",
  "key15": "2LikoLb8u2N7p1qHgB4LJfh7snMKkQeWXhwE5J9fhjD93fcpPgXhSKG5y4LyFhMVAttnn91rovQnTuwTejJSrE4L",
  "key16": "56oauVQY9Q9R9atEmdxY6vyRcfDYTLxVETe59hh4UtfLgKq5qhCjg8fCfzgrwsWFCAD9NuUsZHuHKGgABRJz7wss",
  "key17": "3mFoLChqbZyLacBXEN79mXqjQuDvutCu2PrVmqBUi7kmzXFtZ47uBK8hknRnyp6QqhtRcCPAR5m4iFzgNmpd9ppK",
  "key18": "2aiHxi5vW52X2bsfwsB9BcHixsUz8FByFisd37voMMZLgAbbZRvsf1Qku2fBoNQbohnxtNuBW3vGbWm1nUkqgJVR",
  "key19": "27ukVktHihY63MxUmecQG3hLAVvE4o97nSjtkZuc5LfMd2MkGCxoAqnrATCTsPY3EhsKQQhHY7xJem4Y6xJeYLBA",
  "key20": "64k3T2aUd9fPUUUWhze39rKoqVgarZEBP9q7mHCm4yxHD3MSVZATVcJTVevv6VW2h5wVe8JTzGuP1K421mifsPdL",
  "key21": "4h2EriwSZEPSUhb57vbktLzWGpjCeZ141jvFfzY2muKYJuBe8VP31r197X2swtM1C1i1NZ1S1t1xVPvKdVFv2749",
  "key22": "ctrR7kMshHe4kb2VjT6URJ8qhcjsPvBsvtZiMV2KsZCoS2oSBUx19d79ZzHtvCB7kwqCcJF79egmsbciWywGUcX",
  "key23": "Cbfm7Q1sQ5YboDaTVVYg7B4DPupM2PDnpN8BvvaNH1FXJZ2t5tF883zwcswPSA1Z5zdGB43Kjccdn9gZxvkYSUb",
  "key24": "3fUcxiSpv2ghXDDvqpM7qnaF2MPefvVkSpJGQsokqo87dhQBhwS24w8KyeaZGZ5TH9DkKde6LBYKqRu7Jt5sCeqq",
  "key25": "4ogfii2U3DjT6cq4v45t7svez59f6b6o5N1bEwApStSzesMuFDtwnhk3RpeX89BKWGmVTGC3GKyBAaLP4VV6Hn1u",
  "key26": "5BnUXHHTLNd7ScWPwuoNvnV6WqJNb1XHV6miVn58b49svoTo1V3VKqtojAn7j2qMzpfxYY2WD13qsjQzybmcLrTZ",
  "key27": "nNnSaWf8aCz6VGkNXRWwYcCjoiS7pHeMpzqBSCreaURhfZYUwRpc6RuDuTGm7FTMoZs3oL5oe4a5GKmDKqCcKmG",
  "key28": "5ZLrPt7JE5MWUNc5mEPiQ9S7g1yvVn5i2ci7Qp64cRxQqmus3jC3iHGdNv3sA9ZMnMzwhxu6jN2UYtM6E8na9K16",
  "key29": "3VUgbwJHwa2KwyLXdSie61qAjjc1QXbb5dpKEqrmGkejP1LB92hYvhnQqgdEmTxXBCg7dyAexC6qRB33p4RGUX6q",
  "key30": "4mqLBaYTVzmKFiSiiE7t75ZY6rsH5sm3WQGFCtzGD6hjYU8ssF5BrwZTQqJHMGV9DUbMFvUK8QgMYWkezcnMjNBm",
  "key31": "4pP7UftQqXs7xBDYnmBdHJUpN961NhrgANCuxJkVFtu5BRshn8DynNavTo4pv2SWsdH84g72Z1gx3NKutucVxhni",
  "key32": "3ijVQ8KQ7yFUmgKMjCW6BiPuhm8bd2z1mWxbu9ek7VnhiUsbsEgSxYgptxMWRks58K7bWXr5ZTpsYjYFjkMqpN9L",
  "key33": "4psgj18s2Bdq9Eo8L8avND4usywDDdahoU83BbNe2Pf7aXKpWF41p9f43co9Qn2xTznqqbaC3YUdEW55BAmiiTSk",
  "key34": "4NcBbdUSERzYb6pdg45hbMEDgxqCEbU1BcuW42njWCjc5ffX2DCSjzhT27NEiu9wu2dU1AD7WHLE3LHxDNBPpMym",
  "key35": "5GoMpAcPQjxrAVaCZqJ3DWEwHqQ6E6TD3AUdwvVXRaCS1D4efyeWQLuXsMqEwuY5TNAoQRm8JBrm96FefxbiaXfP",
  "key36": "JtnnjUAF9UnorCnTr37McbdSbV7RiVijZ7qSCfF9w1ocbaC2xZoT8vwG9k3YTd77FFfwq3z4d5Fr4SAEdqewXja",
  "key37": "3UQV5mjZj2WZr2mEAEeLDq65a73Pxw94Xx6nYoH4JvgfbCVmDCwFv6EH5BA2cSfKj8LUDT1Kt3LakvwDLAGWGASP",
  "key38": "CbYXjpF8usKj7GduA53cHtHBzLV1wZDeUKP2wFvndZamxPretL8b7vZysRmT4pkSMPSBZaWLnHUYp9LTz5S2myP",
  "key39": "52YfKqoMUuJd17gkLa2CxK8BgN3Mk1RUPGasfLon4kcrdG34kgiXdEYzBe2XNrPmEqL5hSxFJkJu3UnsasB3fNgY",
  "key40": "61BZNGbZUxqj3EtXGn8StbDiu5mubpPbuKdNquH6W9WXSnDf2VvUESZ8tMgL8FBGrrLwFF458PKwGG8jiFCdDrkD",
  "key41": "4rtMBKztri8VJX3yZQJCKNRKbMKhTY6Vt76q1m4BLpuvxhhsxph9cVh65Ey3WUznKWe1QYrJRA9Bq4dMf9QXTrTd",
  "key42": "3pCcr8iUAZSiXZaZAyAP5E1wA2E8YQ1q9qEdAGcoi5tttMuknrUQfRSWTrLUwsK3oUi3PpTVoihcFJsc8bBq4bAV",
  "key43": "5zobGtgpneDM2hAvoPVHudzKmXEio4ZjU9Ne5vVfkCW46PSkkP5Tu8xBNo9ciXgbTYP4rifRuw3eXy1KtUXsF3A",
  "key44": "aK6ayjPdHaU5oNh1BMoA2hsvx4pc4dvmCoWhbjWZM7Ucj8A8YdcdUEYzeGQf56wvALQxkMXymsmpyLyRfURCTj9",
  "key45": "675wfDFKQX1JhF6UaCpqoDDHGiVWufx2oqurzhpvaLbBdPMRwkKTG9VhGSez9fvvAdVHcLKfJ8EvdMbDHKsjiUZW",
  "key46": "4JSf6Lu25nj3oCRcouKmgboHD6y6DC81Mi6qQEHbw55RHxGoE9py2ytGB64QpegZPbu2dbu9EBkrg5NmqyrMDoCw"
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
