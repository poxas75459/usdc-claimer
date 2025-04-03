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
    "5hTv9ifi4BW3U8acEBR51u4pjb1AucWPcDnEVcE8PCUwirJtJsa1hevunno1cx6s4btWRBrwb1BW5krdgQV3W5N3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iKyZ1Cn96LuWdyn8wBikrxM6uvU41D2TVSFvx84ZgKorBpHaf7umcNq6z4RMWJw3HoDZ2qzo6haWAAPPYNDEzq7",
  "key1": "NGNL1MTiJswaTt11xYyt3XpNweaGXc6HA5dzRkZKd7dXvUGizoHPkj5pqqerMWfhLddAHXzGocE3KXh5VtjBN5P",
  "key2": "3w7XMX2gMyYWRS9nFUg2PMaSqFjGvsfyJuD4oFYNL6hetJKb4Myx5uEp3tP9GzW5CYr1j3uRrv5DzPrAWbJtBpqj",
  "key3": "4iCk5PJg71CimfiNHvREJWSWfxcjq3nUCXPCQSk8QaVi9z75Sx5ohB1Fcs2ZDroJB7VhUn1RqnutUpKdvENvpM9v",
  "key4": "4ZBjwHfYVKHM5H5n4iuzXGNu5j8SdVE4LWjD9K9faivy6RdDyr8PshaMUYqguUoRD6nHSQYEkjhmK3SJSR7Hy1do",
  "key5": "3xfMkaxLmis5RthqhUDarbYiKgH3nASsQmCpnNdKJEGeqsrBSwPBEP34BbRAswMPg1N7CSyiZBDcsY9a8hqCq8qd",
  "key6": "3JCaGANZG8SQH6Bp7oRJgeHZBWrGJzNUUAHrQfQKsaRdFVsr1Lc3jZKBepvnT1xrXNWvj5RCSGVZwX2GpGdKeRnu",
  "key7": "xHWLBhzFfXUVKzpZVvnXysR9hoZGFeaP79xWzPYyURE1D9xd9wYDPy8tnVn5VyTihVfNiGCjspirWAJjd6jfguy",
  "key8": "4KqGx2aN7CLJRtuXaPMmkdHZuMpWrbfuDJoucZbrqzpqrsr4cqxpWujBttMTNyeFuX9jEkRQDRpnKoUjUvSop1gv",
  "key9": "5FcmEoKW5EFLYhpr5CKcUyYkj4gbeRathzaWYCKw14VR8jmPmDvQ3qMySuSbBr2YhJKWbtxQwEPRdyBL9BjhcC2M",
  "key10": "4qWcrDWELJp5CFeBEwwfh2X1kew7e65UKd7CMVRzSQeqRS9Z33gSoKotUveu9F8bLymvDvqbbCyBfV3VM13zLebu",
  "key11": "2Kuo8wjTfUC2ibU9tBCEWFe7Q2m4dRcLFap8rcwwgX6xtn5NSYahbUzBnhhQJq6XmUM2sJa3zrxUeQRETzNzjNyS",
  "key12": "5uX87Jv7aknjwdNJBG3RPpQs8DuFx56MRnuLrf5HnpfwEmXHPYoMiHHJUjmMA6bAhdum1orS1wcS8ZcN2ZS7Rji9",
  "key13": "ekNtoHhTHbj7Wr6TDFRe8qN3KBCEpJbTX6tF9SwS2HcYdKTbx4Dd7yAZiQekWk6kBdRcdUMLohcHApgWEwtLTm5",
  "key14": "3Y7evFq8mzU4T94iy6HZSkHmHKAv8LRomuxwa4veELTZMdB6k1qREHnesH8x1CEDonEWvHNdqwA8exiTae81UTV5",
  "key15": "3ETJaZVTDgeAQsVB3U7HKRPKHjpVmw6vCyWfVTibfM1ZrqPvoC3aYeewq417fsXE2UegUWyW6LMWH7h949f9Wj2k",
  "key16": "35kLrofjb4E91UfSdrJjD5yt1SzrgKmZqDjC6wALEyMsgkgut8sxK2LU7h3SbRhNguvR1kYdbPEJud1TrHEjiTPX",
  "key17": "5emofwDxbbiWf7P1WPtdbQpWfR3zRysGaWvLq8aKiNgYAnTbFZxGyDndUjjT7aEwpAnaVV5nYUjCnfE2ZnMV8xN4",
  "key18": "3NbyvkjdtzUyU6U5kXu6AqEL53RfaLtw5W5ECBt3A2bAigjHcMm3D9kSgZVzACR83SAoTGdQoGoPaTMMfhC5T4QC",
  "key19": "2mYidENr6eMeA52nzLJAKV8roQbFU1ecUa8H5VtjFn5HY5UyxG3dxmejUJNSuqntt2a95JS4z8YC9ByPQDRQJ1Fx",
  "key20": "H9yWkoSLa2U3WwGmMZ2aaqGvJaokrzSk1szHjVCuTb5MR2vFhARtqZB76pA2NeG66ToVmBVLVdY9YLwcc59acWd",
  "key21": "671F5LJq3g9W4uUmntmAQg1KHFwwWY4FwhWjfXQaDHEHqcMuB7YtpPdpUjz3XwbkmvERaj1F6J84QS81C8ez34rv",
  "key22": "2oQYh6hMryYbai5oPzvuruF6AiWMzqaiJaScj6C43d3WPoHbA6yKNvU4wryRenqikFaefWwUqZdR8DHwUT1g9med",
  "key23": "41csp5wwy5rEU1GbhV1XnXPw2NDEsMVYhU3Ps8xmHTPyvfcq37K39HD14FALN2R2dFF7udJixMLkKHj3x3Pjknw",
  "key24": "5haAXuRSLpfcb6vDcK4p7xqsaiFiZB1VNSE56xn2cLMowvQxtNMteEJVsjenXTrgDePVwdXmFMLfUBrVyQkZYyTX",
  "key25": "3Xw6dKCuh7g1osxd4Setwif9QPPh8M5xE1mAKH78YkMTvUYnDWh5Dsg31tXpgniXTjLJtDVSgM9U7vUEvhvBHq4A",
  "key26": "3DBpbdnmFFhtxZKAzBrYPyUEFFkvswevGARvvd1q7omZZA23jWuR2D5JVu9WmYqBMUBywEfVuRwV6AcfSJMb8EtV",
  "key27": "sX6gmqeEPFwTPh9TmxBK3uJYNTFzKJEx3rvcXD9GvKq6DcTsCcsAzuZYUSoZFyyf7LVmLLEukFLQJmnyWWYYwNv",
  "key28": "3x68xaqPDTPaSjFK8AhTDLW128GJBegzmytvcQ9gprH2SEo1fxSonoZN7HkJQ3AiLKsCd3SkkU3J9yLztjkMu36H",
  "key29": "4htBcuSYUzmbjeRc4K1hYpVKiEySMWiAWYqhwHtfcXeepW2n23YxQeLXxauooFFhYjfGgHjRPBy2xrkTCv3sh4Qt",
  "key30": "25Qbo7ygLdnoW7neRDkKwDokq64tLD3fBYyQNJXGzh7KvhpFHBHY57Hb2M7jFkMCX7ducktMPe3m5bdrqcKzAfsW",
  "key31": "58p52HXq5PZCKch8Qhk7fdLATrVai46bqqgNvXbVcFiazkqu6DdFZGtqVzxyoKSqvaGFL6a16RFts1Ge99ajtbuk",
  "key32": "fEgASq45pVRPNC5wxe7U8d8mr8Yj5fvXKgMofDFaeR5Cz71273vQa8LdjBA9U1raP15iW5VyDojdzTvGz3odVLi",
  "key33": "4q2D3H9k9Xy1VcgqdZyuUa95KZfVketwcvWBBnbJUEV8i9RMkfYqvKb6JHnkDksBB65hgRFkjiGQLgkw7p29Yr8",
  "key34": "2a6xdWjWypRteAZmKstSVyQQmrpHMGBKGX5LddYSKqDigGmLm1U73aEZwg1u4hHcupBgFC28bNvTPSdd8fqamZeQ",
  "key35": "3sSQYs4kvf9DqBZNWSwhiAoD1LQjAku6wKdLsGGrm8zqhm9JXskvz49CQQQ2njeCCr1JNA2oiNF3x453yQ29bweb",
  "key36": "2mJsb6CgW3Ad1WBkFejDDLqqeEUqVky6q5Mi6E4QHj9ztLa2pgTEYFrhXVzNNXQ1MpzSkQydVAKpziUnJNnsbwf6",
  "key37": "ycACfUeqrnrhpJ4wTncH2qxckPWpXdF4XaKK3fYseX1zoZebRibAMhqLtDb1QS3Drh4PiZ2gpst5tKkQ1gDD6yp",
  "key38": "2PW8RXLCq4XjVoaWDsBQARL8hjedw1mAcSMNC3n5a1cysn4FspfaRfAa3VsE79W7UXt6bfESKnTicY2GDjG64fwY",
  "key39": "3wgZ2BhxbNAhNT5ho8UuWb9do2hQwUB8VCutyVnFijVJ2Em2niq7ZRiAWnUT2u8NsPBBbsRi55GP57qV7r1wpY9K",
  "key40": "3k23GrZUVYJrY5uh3wJF3usaR8rebqD3g4aj7uko7SJEAGfaZf2zEozEkqdgWDSbNLgXqBAKYAVZJ5o891QC1nn3",
  "key41": "5VntBbJcPDZfLiTEfho599Jk5VoGp3yQvMDDw6Z2UovMb37dD5EQ4B8XUaFSbsdUQ7DvMqK6MmAgNAhMVW9rbqr2",
  "key42": "3TUKzA9iFVTzRBptNRnDSZzdRbnFH6fXSF34vQY63eEieA7z95uJDe9uXciYkCY4hNyFBKmojEUqsupkKFThuLwk",
  "key43": "2SupxhsgzgTvka4qusfacagmRgY84Cqafe9k28eDeyzPu3ZJuK1k47MqZXsRgtjGLVcY5QSRfqdFT67H1hib85rb",
  "key44": "3GvJmEPoEik2oaF8KPv6Zctr5Bn2HCBPK9qqheorrie1EwXEVB2SK114jfM3Mvxrbsk9ty4Hc33PjdJGGjbbeMDf",
  "key45": "4765Ydbm3TGUeyGDkbuYN7KmRZVssC4Zroi6r9r7nLB6z8vTwatdcJ9jFta6X4jjH5L2XkNhQDkfvp4MYcoehYUX",
  "key46": "5dkAu3zD3GjLxVUpwLHXhGjUStKhbuvSmhdwoUDQB6oHmiQ2CzGHJvKY3C7a8TaKb4D4KK6HN3bysYG8wsWDaz1d",
  "key47": "5C8syZc5AVzASKKhbAkKdhrLcZSdeTkSrq76C2d52HB8aJcUTEg3TbL9SKgi5c9382wBoEF5xLfic4cYky8Fy1Vm",
  "key48": "4Egj1mZR7J4oJeDeUNGv3JzeWaogGvUtEbGGrESQ3eptexeDK4pYBet9pEJBVwmqFQNdboqXEe5qsuBdeGY3YwRs"
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
