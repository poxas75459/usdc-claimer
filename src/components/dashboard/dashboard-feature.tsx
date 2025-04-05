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
    "3z3LL17uMXiA1EcR4UWA1SE4EyoyB36ukkUkerDFTCzRiAF3Aq3KW7ywbsT9vHMzjbfpmjygPpPbGJuZ4MZwrNJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RiLRA8U2awMgYD6bQXSciBN4PBRn8AYen4axqyCJde7G6A49nqFfavAdEHtngRFU3Dw6GrRcW67kLufT1SUWbAs",
  "key1": "3ewcoMDren5eCpeWrd9n2uzfdiHaCEFqiXVLXt2Y8aiRpieH4bgmBLkZgTmur7QCRQUCxHLnHT92cNw4RPyXjVSx",
  "key2": "4D1J7WvPbk5PADvYr2DKRVz8jDNWmVWc98YmNS5MGoiYYiuCEGZF6wzRXjgppSRQUF9pSkCSfbwR9Dc2ShYyJ6Q8",
  "key3": "Cb6mCpZ5uHfFSoMrcVKXfVCfWKNDpSWt6dzTzHm72R9zmx1TYh4fsxCZZyRry2VHZe8yKWQhDTFbVTHcUKhv1w3",
  "key4": "5gFjJZthzrUip5fYrSiZJtdUhqrruicc26NFXxD5yjpnuNQKJ7ieHA7gCYQziCHQTfA6za4zkqzEUQMzXUJ7WAZu",
  "key5": "xhhEXyziro2grg5E1iSSrvoN76AZCncrZFxLLhpmdzs2bhTXzhjrJ3G1ubPEb3CqJb2TGzXLhiT1ZQ3qeoaUQkK",
  "key6": "4fpC1iwidKWRcmUbiQoAJNys4nuezdcaq52mbuvHzFJXBgri2gdDHgTShWPhJptXXpLCh7LVzCkahrHxgwphsNdG",
  "key7": "52WFmVYLbHHTW1u1uhFQ8Mj2NEpDuJgqJbfmFetQLzumyr7WkxzjuX2QsUzfHohQZJbmc4R8j8LRwrghC98UwsdY",
  "key8": "3fX1uXPV73qsbkZme1eGUTnSvyy88EbBqaZV5W53FP2KSGwibgaMihe2CRNSXXJd2iJhTCuWrZg8XnMzNqe2GZXY",
  "key9": "5dVwL1cUkA8396dH6ZAQ16dV2yjQMDu91hqZ95rRMqBUCjwq4231Uus5XD2QTUbMUnLPqNczawjgHYJTxySwm5Uj",
  "key10": "5BHn7o3HDtDDnowxnKoST58YjemJQ5oUXapfNDxZay993rARg7opmKLxwt2XDuiZPPhxMLfd3Jb8VshhxGujSqRN",
  "key11": "2D35BLt2sXyRxs39DNsh2hMpRdvFFjZspCATpnvLBNU1GYHNjDddoNTaM7K3GLN7dtqo6ZXg4by9WC9WgSFm7gD",
  "key12": "4xpdU43gMm5GtZHGuRucTMPgd6ouA43rT1xzp1PGWAGBhmwnkYVKQzQDNCsGxX5AZYvRgtqJXDLA2P7y75vc2TrU",
  "key13": "3YbduQ9zP5dJNys1s68TmKn7VVxqTuMgpabxurNUmX6KqEH1965rznqt12TGW88KBzoFfQBQwcpvZPtJ4orcYu8p",
  "key14": "5GaxYcK7ZQxSfGsn97aYQxYGbuYPw9BGepdDQou7CZgT79DgY5pWc2PFV8wF9L4ZWPLfdp8CnAuXyJtgk39cSYuQ",
  "key15": "51F3LjwAWCzjUNu57GKCFuce5TJTXcZdcUxisMxJfbt6zZU471L9r8ycKiGMLC61Ai6CevYeyAJbKrSQtvtbRW2K",
  "key16": "3wghd7x4Nd1LQTHPBfk4GiLSNSoLDKQ37i62EPQhhegXa2Q5s7KQomUahW3CjB8PRuhgpYEGCtZNuVQZMnu5cj3D",
  "key17": "44azcY99TvpCd4P5E6zNdnQ4oTTz3TMorNoyj3rYEvUAQMpgqreGurnUcWJVB3CeB4Z1Gtj2HuyFcdeNomUVEEcV",
  "key18": "2TRsP1Mwk2tCjMjUzHYTjPTL7gnzDJPXFZG5UeGC9jAxJ6kB9R78svvYxC5EUehc5mkqYFiSsewuvLToCNEZjGCP",
  "key19": "5LXaT1GjwogChJ8KUEhmbA2PERKFmYNJzEz2gRYcx3WiXcdQNW3vg7QmAH5iYfZVmS1xf8hL39RuesurZfRn9BQV",
  "key20": "3penf1qGB6rhFV3aPPgAKxy2MuATjbDQCuWMFBf4kNvrX1NA5TGEnd6iJzRYdxTs8efMtxHdwrn1zFiNvSspWQZC",
  "key21": "2J8BzTB4rTU3AdLuSiXqapgSimcGMoScZGCwWETtER31QaeNx2YP4Lghot9jyQevTBSAWga2hyj8VNp3Uvtczqtz",
  "key22": "Ee9etZ9jzti6uqLP611nCQuwRtDM3ctczwCZ6idqCJt6rFidqAyimgN8herDe5bxGk7MGbbmRjrSm3DtQviZtfx",
  "key23": "4Ms6uhEhE56KGcmiruB4Y3kvZVBwcVNDF53jkhknX9LHpFBvm83NHyhYr1asBgoMifS5Q7o88GguVuNL4SdSQs8F",
  "key24": "63ucVRmL5xVzi7urwd1WPRG6xdmE8EUX8q3ZUVwFvZB8kMLZqxA6LeqLa4JQW2GkrmvFmuAy2UthBrQz89LiBvRF",
  "key25": "2ZH9Cs3wLPVYqH84LhvdgXvyDeLZWq5Kv6NodoHDixj9uNihHAXfgFKQWMHELDqnM1xNvYdZVKHSUnBmL986xywj",
  "key26": "2oJaguyLPGXAivmxahEx7Hf44jkj727NKEyFQ1DvnBJGqxT8XfuESTjgQ62pu3vHRYn4UwFeg3w5WRGgxCrBwqWF",
  "key27": "3FZLzB8nFH8YSSmDjiCMjP13v1UHT1KwKp7GJ1FcvM8qgJj9VRmrKX6c4pbFSv5bKhhqQhxRuRq9QnAihBNDmUA3",
  "key28": "5RNVr4mvWnw6r3ra8AdWQp21JVrazgk88VRAUJUkyDodREqkJUZyn6iSrCWzqaTiLDUpfa1gKYHoGFKt3veWCf3n",
  "key29": "4Yt5MctPjfNj2q45qCSE3TiWbtWsNkP3sHgkWgatNxV5keajSGB1pLaDkmm9Sac8UU8w21qDsVurSBVuRhSV42Kv",
  "key30": "47ZAbtBunjbptkAaFYJMqUX7MeRxV7jnZFwtRYJAtSPAvxs72nJ86Vr7YnV4M8NQqS3X14bvf42WmTGw4eSoQsgo",
  "key31": "2o9zao3eJdGqBuWesj48npcyn7tA4Zy3T5XnDAci1CtXwtqVyF9uhSqBUCF4Tx9LePFRbi8pW5121w8acdq16ACP",
  "key32": "5CjHDRcQef1cfTL16HowERN3D7wvsab8gdXsUkWuHHcAbWbBuVAkZukTsMGDqs4JGU9aQjZisWE7cHWrT851GhJD",
  "key33": "5RVdSTj98kZ4eag1cDcnzoDMXFkpKddE5e2GxCoKEeip1wTkbsjLFMG1BKqVEc8okz524jPx9JuFTkZPR5BKBQYP",
  "key34": "b7Sx5zoKxRkCexEctHm5Tfwc8HZknXoJDUNUQa6H6RmQ8zRC2vn9bu3n23JAbq7Td6NcS6voGSwPh1ZiT2haY3u",
  "key35": "2gmDmP4Y8292ZBB7scYRJpTVMpFcedY7KWNVveZtozhc966KKdsETBSDeYt9nQs3LC8du9J2Nec7KYkYmPJNXwF1",
  "key36": "2Gmvs6Q5UcHuX8hS2qYqL7mK8sZYB76wiSKRBE1xuKHz95JmBTr8vjCvr7om1cXiRkLcsSEaf29FXnrmFmc8NySF",
  "key37": "2dbtEZJHG9CvLo54hrLzX6PtvbA85xwQ7JRoCpWtNoZNwg4JpjS8mn5u81zw5imncAoz5AqCFsjcDi8u36Bwu1Le",
  "key38": "4RDmaXw4Di6ofjJcNCEvzWTjAWfWmFr6VqsugaG9g9DDGpZ4wRytmLr9ZYsExQ8eDpYBWCSM8rVwzybiChZHapN3",
  "key39": "43w8t73WD6Y26sZjyBLsWFmHWUK31kNgSSKDzEcH1hZkvoiuZM7L8ZgrKkqBUuomGBGvYG9RydhD1VvTdxPqDvSQ",
  "key40": "4eABu8twGXGe4HpahDzuSprgpJZ39wJLKVw76keYtmCCYAZ6wJo2gaGe9KnEmcyWvS43bZSXQcYEu3aAFjREEfz2",
  "key41": "3ad5Eb2FyzB7tVy7jCc9mZUrWwahzuYXbJe6LY3eDJyW7gfWzUsapgFB4jAKuuQHgxBHofD65AHQgacmLUta9uxx"
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
