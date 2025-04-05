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
    "25tP6EkMQKzSuS8rr8djjzezam7fTrtniYf58719xX9W4c1CB8cAMgXAYW7tAWUgoL82cts1Eu4DchNeJvhrYgK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tx5Wo7Q7RLT4KXdfmWQe9uiD1fWrTnfomdmiLkjAZkZGTjcWWy98Xa59FuC3yCAs5V46u77H6bWvcUY5NgFMsGT",
  "key1": "WtkVfVGtd3jM17XuLAdbCqPAuttnCcfzX48vyHryF36Xq4HNNnLxowpxEPqsUE7wUn1zJXP4YMDnWmNX4i8iF2y",
  "key2": "SLsJuiEP6KH1P3DVwQhnQW742CuqKXAVTj2Rpi4CCkxkeMULed18CacjyCENPZjchhiUegfdtgGsaxCgJ5WXGtA",
  "key3": "3aK36hxAodL3dWVznt2tdEoD3fevSFA6xDhwCALk5tEVzBxUe9RmeKqE8nL3VZ3M95ZHAd6Z946rY4si1VALrWWC",
  "key4": "2bqLe1FCwRUVeLxAcKDbgYFzCWHXqz1L5ebXYLS6evoiL3zKFtmghG1jAVT8FQ3bcbzjzZY7G2DDNGDArJACTYzd",
  "key5": "2YvZAn69mNJrMyBRURTjySPAk3MXbn7oqQa16Z5rAzsQYaBEfYQa7KWgbnhFHSkZPjJHUENAcNRc7oy6kg1XZmBC",
  "key6": "5sLhfMXJ2WwQhg9cZJcQSVZZ7sfxMZh1ze7aTpxJUDQrcDbk5CrvbcCc2n3Y2Ku67VvoC5jmhf6k1JBVmfU71Zgr",
  "key7": "tBP26t1hQ5yaBiSeCrLa3bARrNBojGJYovnbeB3zFpLnwtRCgYfJXA4xM6TYLWoQnNvsiJpD7t6HgeFkJQbPaiH",
  "key8": "3Z38yaEUAo6RoazErdzJahBiQp1aKooZEMGzegcK1bNzjmrGCvJF8GWEsdfSnoEPQ6n6GwpzFvW75QxsPCqmC2VX",
  "key9": "3TuWUYUE9faHFdwgtJgwsHnFfAaC6Zx6mFxgrxsRx9h4vvuCi5gKhKbgh7Xq8EUEyEt3Q5Q3fG4WwnfaBn5QVyZK",
  "key10": "4CpXViG847sdVPbS5iPYH1Qb8BqQpufPuYREZvL4sSup4C8SKRpLYdJApUGoyk9766WoD2ZK65mYbcCCb76agZqv",
  "key11": "4NEvP4euAYNCG5rM6Ce4wsi6LJF5p6vwcLjEnQ2wWqNU91R2R695EoYDrfeoKZGR5uQVB6tfDPiLszabXwxQMQQ",
  "key12": "2GSQkC5D659iChVPVxZHstitjioHr7WxX4PSS8LvkWWJgfx3dPfbMpPTUY5gFtbkRBkwUPWXpogQJ2EkgbGgcwFu",
  "key13": "5QcVUM9vyryYTjsBTxMkC46JWnkxZ9Z7sGRHEf22mXVSyR2WooEQLYikA7faTnPzfdteD8cLtraMTb8MrDRzyzmz",
  "key14": "43ZofFzyN3hvt3Tyd5ombdoPfoh3bdZiADubaCUnFtuso6xeYzpiERWvs98w5UBX4sMUh7qr82CkxQQiV6Gig5oz",
  "key15": "2uFFgmz8KfTK5LQr71m6kWRaUnuJtGZTs3MzGfXKzKv3mfcfcTBd87jy3YA3ZACBrPyrE4U2o2KExC8nWXiZKGew",
  "key16": "2mNGcXkmPM5Eptqya3W3pNhtq6KcDtbcdUF78WwSJbzY3P3mZKJa2pWVTAtVn3JCHLvBKFYQbFdh8zz7ESPDjzh9",
  "key17": "5gXSZDegCwVbkYvjqtEqvXj3eDC95EAQopA1b8dQhrJbFTT6tduNevqprDiEhfxN1NfBsuT83rq5PJLbNNBhpQHS",
  "key18": "41cPx94bdXNnAqL5v3f8L157d9Egfwhkr3DKCASJfSY2h6xPirzY5ZFLsBF6wsiXKudML7WD1BwgeSHjUft7qdDT",
  "key19": "2aXtem262xn1XjJ53vudHti5dDoXEW7nZkGs76PaEAKvdjStbWdWAUmAGHxJJUkn7VxY5STP8pMu7Mnhn1RULzNo",
  "key20": "289vbCbCywfKZopVyENxiUUtoBE4oGDhFPFKnFLV61v6mWP3XUgC7eTAqtc9ZLu8H9bsaDkJz6otawz58fRKuJzd",
  "key21": "4XHktcWTbTiNpESWRtfrEJTuqRcXMwMZVU8AoUjU4zBqNoECrJGetxyVVmuuxRv5AS2uxC88HfcF7H4v6bKjufiL",
  "key22": "5g2iku9zkHNjB5vyF2XxeMSqrVk6wGG8nWmKXwH3aq5W4hdB2xsHoCZ8Qvpq8es1aRNdjvB17k5xsrXEZzV6hTE2",
  "key23": "4ZpEEj1bbp8xVVPx6XP7PTTxdZE8wFV8buwwEYT6CPhDhx44BTTDnSn4rLqD2xhC3Uo2ksXaZnzsF5SMt4zFbTNw",
  "key24": "3qFtRm4p3VZxP3BKgTi6Ev3HMX2k4CWxLVrg1U6UXt29Gvgw365N2ktaKAR9eLoVu6ZtpQdK3w9bYpr8o6anhQuy",
  "key25": "5o1BJc3KaRFQNswkVKiU27Jnqezj3Ebg1VEksme4F56TUHwN1eMyfWA3j4DMRe663QsuPhjVh6vMzeVabTiHPL9P",
  "key26": "5mRSDQnPYfzHNCkiYVP4g9eyhdiF83D7GmsGF3f6tHTjwWmnk6dgf5XzEG8vJjbHbkxwJNkMt5be9waKvAh8Vhha",
  "key27": "2yZtiZSKbto65CE8QiijUF8aTzeNyjjmV6uFrFQmmGPwLgdrbVjG5tM4tc98G3rAabffxPgVphnjYMpoGE2c85SD",
  "key28": "4ihPNismoDSRzTEDwa1ZTNeJ5mmEuwbDVn9zTwBtXTVqwsxpeYjxxTmiK3XLkjidL2tc3cHF7aZ6a6aNd6nSzH6x",
  "key29": "23Vm8JhiXSumYF4vQ8FZPQxgWUeUBwVjRqA1Z2sDViFNFDdiKnve2GpaEqkCiy8EPRdrHj3csdhHQ451YCNuc3gJ",
  "key30": "55Te2W9WTtFbBQu9txkab6Gwkc8a65Dcy7udRn1LikX1sCEiYJNZ936CBegt2ggAMpKTZJTgCuyqeg5pRCRngRyJ",
  "key31": "513rzLqx6ewqvbS1KCJ9fDQaRrepLEojqMnsJ3a77aNPSVYWKP9GJkcxDrws3JGWWspk2y4zess3Pfb3aUsXckkR",
  "key32": "5vWL3YAmjqiAtgQP4So411faaq2niRjDfvLeWtBtyyWbw2tNfWwsh7iUVn2kSGP578N65Ymxi3A3JyrHhnsqM5kf",
  "key33": "5KJwQZEjQo7QrC4cnpxc2x7FP6dujsicWExDqe6oxYYrPQpG51riVEytt5vyEYCT9PnnUhYihpGKdUopy1PjTcWB",
  "key34": "4zD8JQ4D8GEbPEmXSPUM5GEhSG8vgR1Zs2onDavGoSjHJMD1bBMoerVuGWbMFyKhhu6Ve3FRbxoE3QHWcrGLnKdb",
  "key35": "2CokGdjcN2uLTkWzyp3gZicfezqBG9t9KLwqJLcQfzGAsnUBPa5pMbcWVaJQ2ng1jPkQ9PmvFG1LRV1QzJDF3Qmn",
  "key36": "3WGwxK1HgXoMRWofDkWyjX9HMeJmzCkseUo1KnkTfzY1TBxJX7GEUP45bdfyekLY16CqRuY6CCoM2seJYheTMxz",
  "key37": "44oHfUiBGZ7TCknrW5ksueLxpubN8fkgEqZYLdQur7mE1kqzsXDUvC9Jw8DtJQXYBZPqCaUymfvWQhHzNfhmdeJE"
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
