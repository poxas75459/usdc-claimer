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
    "5Ri9PzXXxmXLon1D37oExPgxoW8ak5W3m5R16yAEqmPc8WrGWHzFdCWTXywPiL4BFobHrRXhm67BiRNUkWdhC7gP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jCu7x9GerVVwbd87RUCWbswzGX79EeGhGT5gacCDceyLYZb9GfmmZWUFdiTpjidaUJMSHYctyCaF2XFiMnhL5b6",
  "key1": "66878Xr8RrTMUHCcb6j7tKEAN32AJit7yYCizdWPbNhXxyDTDThhMnjA63H4KL2WvigiFrPX9n3ctBFtj26WhvP1",
  "key2": "Cu7agyu9gQk4votdXScvPr4fRWFdsMGnsKHTrWc5vQvu2Syuab1pSUgeFjzYvQs4fxQ2wAakFUgE2ziSy1AHcdJ",
  "key3": "5ZVVqYGKQkjJ8w9oLEqSNkZAncHTTMQz1adiCWQ9Vi97QZg113rVc7EpH6ZTK8gv4sEaWfQKAULeWiGFa29Tkwy5",
  "key4": "o3QGYTXuSkgEA9dp7Lzua3arETjdmjGFzpYNvxKzmdLePio2KNUdbaaGa2qcZqDM245xnxk187x1jctbC75jWTJ",
  "key5": "3XN1pcvt1pTqcVxEnTadyKYXGk4UaG51vr8VrUobsuUtJLhTtweBGNhLj9Ga59GTMRSfp6XHdTfA9M6WKUjxfusS",
  "key6": "kqkvPQxwQ2iTqDT5x2an7yLWDhu8jceczktNZRkRg71e6AdyHLEkNpDk8RHdVFLV7qYhYvHm6gZaWrFxBvtcevd",
  "key7": "881Guczh1cRjE6uP5r7HXCNJjGwdbCYB6hyqvffANmd9ZK7mKCE9Yav5J8AchpbKDSExaC8evoCYwkcLXfbhn6Y",
  "key8": "2b5upmNMx2GayQyNG4kxu9KSHMkRg8nmjGanS8pUf9aTGDspKeTec6wJG2oypvsWWYs9pWPivAAxhSR8zA3VWicV",
  "key9": "3hqTfep4XsheL6MNhjikucf89YY1MaWFw83AGA2RAfM3aXdFJmAGSh3CoqVxzz1yhP5yDzNLk4GvwNTggsEBSS7y",
  "key10": "3JUp6S2qJTHN2wha5cMRUnLj1kStaS83kY5j4fEndcSNx3JJ36ACY2hi93RtW5P8PBUMVQqfo5fBssRkpnXBvHTN",
  "key11": "2DmmamtjMZURdvs7o8abshadSRyx41a2r7R74wj1e9MUVsEKsMk6AWFc6BcWToBJ7J4BqTUzwT5tNxBrhrhaZbe",
  "key12": "5CyWY9DEBYLwd1nuUtWYHdNhrGS9rDw6mVwaDaD6pRwg1fJ9SDx3V7DthQHqac2cxYD5QeJ1QWH9Lmhd4CwvSTSe",
  "key13": "2ZVohSyv9xVfnHTnYW4LGkWFVZhK8GnmkgQLMy713cQ4r1caKroa3paGr69aJpBU4kaeqheeaZVig4uXmAazGXW3",
  "key14": "X39dDWWy2LTvSYqUNixFx7NyegppDz71GAXfU5vVt77BYXPEAcmVArP51tXy6H2Rebc3J4pfhh4dKavs8rE1qrT",
  "key15": "3APdAXx6J2gR31PXsLfEz12QqSQ5RFwZDGkkPkFgxUkdBPGdXy7Jr5BAoY81A11R7iSj4Ezbw3m6P16ZLDkB7Ddc",
  "key16": "51P7GSdyRtkcfWPUaoiRXZB1N1SnAV3tNgCrax1b76QpEuy7BBMDyeAQSD6a3bfjcgyUgVWqa8UNqCRfHKGroyyz",
  "key17": "41PsdrJEjwHd4RPZwecihLmQe2tCUMKKj8Jkytoy4ovmM93pGQbroZ8aZyby2nKayctiNeMxcxoWdxh1F6DcHFxH",
  "key18": "2ZKfFyxs4vsksojosJkGt3XpQWT7LWVANhCjHEs1ikSFaPJLRg53tYRfvf6oHT2pioxgnp3yhNeXhQNWvzEyu5Lw",
  "key19": "4f78qDotr2pEBn5iZyAZuautuYXRVFacsrnZW6EUQwX1vYYtBvwYCBo63e8KbkpvN9kAALpmDRW5ZGteREnHUBFn",
  "key20": "HqbCLNok8UnWFhq2pRJvdTcYt61dysLR3gwSTD6kRYijvidAmRkTLw4U7m9xwiVGxgxqcvpijGwPv9ZLkj9pTnh",
  "key21": "8CCMav9Em6sDDdcsFaKjwJB8F3BBBCESNjgL554wwYME6ZcLisD4xd3kHC8Xzscoe2umF5FuNvgehpiG9oDzag9",
  "key22": "GmFf1uebQrqPEK243TJCsoYe8LVE6dXw9Nz3WfBw3yq5xq3SJiyurVGUtwExYTEFodAR9AEoX7vVzJrd1eBiTFJ",
  "key23": "2L38n9dMwPBTnf9JKbVGgZvG4Z5MRxcTrpKn2DCuDXSnt4ppHsiyRRHAQ7iXCMcvQcDzkqfKnKYPUbb2741xBQrj",
  "key24": "3urk9fJuN7xSpAQek49cinZBkPeV6j2UHDWgqG5t5igvU88ULnRkjFPSk71VxeZEMu2ZiAQibrUdAK6sHGiPNpq",
  "key25": "5cmGF3G5c3ynRkunQzdsAbKTRNYNKd24WwiM8B7VwY9ZnvC1RXcoQJuJe2emiAngE1AkxKh17nCcZPJ2kuFjRrTn",
  "key26": "3egKikyBj8knLYgdmSK4DFgUhyPisc3Bn4D84Dj1vsX4L2gtQAZZDgKyoSK6t7ozRfzBLE5bKCinycMWuWVapLPG",
  "key27": "42hVKo7tLfv36KFPV41nBjNyYcbv9MbHFyLPckbpQY2GvwN71ecXMJeLZoAL5xELTgTwfAYGrBJbJAc552G45rCa",
  "key28": "3SkT1Wqw1cWBuEAAKfUcPJi2xqYM7axXRKfAXDeNYDQR39ZPVDWMTTpt5RcHbwpQyxptqT2kjqpNNVdaEQmLZTmR",
  "key29": "49oLmj3w2djoA9cLgrV9jwDLavcnUMvT2xhsyFMycvEyFCCRSieMBaSYUTaTCiWnujRUpdpnixohoyd6xTaiu9fT",
  "key30": "3j3RQPQa297wSPASU5Ve2DsNwau6M5gHmPmeYWHcKu3UFxaFzxUKiVwbL4Q85kf6AskedVanUHG9jXMMycgvG4ZD",
  "key31": "hQM63cw4rhwjf2FuSDZLdCoZ9JaQNgxDWuuTZLfS23SbBi8xuJvmmoEDRTKEPaj95YhgUqYoWGHuuonDpPfuWoX",
  "key32": "5V7rDSqrrJWRv1zvQfc367qCYBxKonFvKtpqWRn2ZY8zvjjkTzHVgU4APYsFogqkY51ks2fLtZGWpXVY2YJDhtvn",
  "key33": "2sh2QftjfABnS36CWjqLdz8XbMWHHQES5igjUmkFEZWsxdbfsW46B32T4bt7NwoBuXBFnh3DRpaNEJiXCDH4agRc",
  "key34": "4iJGYWUeL9s5cY6gs57r7ar17nHzZ3mjSfJNhg4YArpydJMdVJfbReXuTZw9kYwz3He6SC7i8ZK55ptdfCWqETFG",
  "key35": "8uamFuv2rE4hsAheeh9o3wY6RoN1XcwwqqXDKbKb3Wvut9s1LJvLNgL5bB6ziUx3poowUaoZ9iBECFF4CgksZj7",
  "key36": "ZVE6ocCWuj6523LZwqppjDADNw4tFrhSnjBpDA75YjmRC7y7A5t18UJtrwFuKrMcEB8fNxboFTTb42TwNQ84ZGj",
  "key37": "f9XdsNwz6ZZDJPbxEfXTKkv9bbob1szuSp7p5hQ6tkiYiYzxafvpmiM9bNbE9hDK1paSjfsheuz4AKZSs2rJRnJ",
  "key38": "3E7bbF2MeZmtSqKLex35M3YBM2tm34bFV79e3mBLJAJdTSdWFP2BjDaxtDtTsmeVRv25KnFENUrYxhsGgPWt9S1P",
  "key39": "46zbu8UgwNanQRj3uXPkfZvQsKqV9W3rAECVKnZTYJVMAgxSM3nXFtu2r4sevwM8wMJUMqreQ3NfL5yXAoEJJDdC",
  "key40": "4bb5SUBrfNgtSqaq1nfdkB2X4Z3TzThGq45cN6XUm7ERFesCJYxS4xq3haZg7wGJRsQGsLJR93PHmet2vmRYKst7",
  "key41": "2BgkuM39mUwgKjbS4RpchMgPosKt4dApoVUA8xv5uJU5Prtco53ZtX7enpjehXd5iojfNXY95qQbzqMLVKZ5aPmv",
  "key42": "5myi4e1BPKJYWUe3CTsd9Tk6fb2iBrx6AyddTNGsQf1BXGJtqynU2jPyGQNku4cJMUr3PJz8ULz9sWCxnEjLxRUT",
  "key43": "TmvWJBUy8XVUjzqS5wVCbhAYrjePPhdi1LbSiqLn89pt7QeQeiMrpDzsjGX2H7XDc579px6f75MPCup8qG5EGN5",
  "key44": "FeXmCBzsYQSbMrE53KKJrUxsEwbcyG8s5KK3YzSjTsBFaUYtJDiHMxNUujjDvx7knhRcnqbvX9odmRvKqy5t1VH",
  "key45": "5Mgj8eFyRNMxsdxqdFeSU9TqPXrnhjTc4Bfxx8z9ZsP2g3HY16ttgB23uojLG3EdgWpcZyLHg2Hzt3fPAK43Ze4V",
  "key46": "5hYP7uD4KQFpD8E6B1AHmnssVKKm8E6LhjtaQtvuWYq1ChortPdfkYrTG3gjY6vP7DK25RtEsAukrpEtuhdG5i8o",
  "key47": "3mgWDPqxF6EHAbdSBvxaZ5BhR7kJuTT2MT1VWNnoPZsDML9quUS4Ftt72mvokTaKrXfzXfjQKoedikGKidUcnGrM"
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
