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
    "4wjCgTR3uexCFcALLS9C75XW9z6xc5ymv7fcVhEQUmLDQHxLtqXHDuhnpXtN1mTDyeikYJ9H6F56LCZ4VH7ZBNKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KU5GLUGxmfY81ndAEdN1FmyhamVzjKqhQnCDo6pTKQyw3H9Tthx8tLDnfkhSXMuLzNATBqvxzzSksmddTLirjaP",
  "key1": "4j9SWMjjazEWCKokRZ1Bm7tQy3zks1ovVz9yQyz1rsUFbmat5GebqPh64wqd9hncJjxuAxNb1N2LYCsoBRApNTPc",
  "key2": "55VsCAHWA9hsbSYjEgbV96XJUeHwG8wqUZa2b4WNwMoAXLubcYX6dEYX1oCNP14k2YcpvdUwkN5F43HkV4ffQDQr",
  "key3": "4tvXsvS53YD7gmcP2CKgeR8pz2Hnoda13KrgBQ84osVjdLBipByNz9gL8YssADuu2HL8Kxappsyk5aWdZeu4YDNE",
  "key4": "3vm9ZezvNLbWBixktysTLr1m8wnPhLY5zbBbBSKu1Cxi7ujTi9Jn5bU8P8hfPHgkBUmz9XxQ6gWbLHsvUv1Mj9NA",
  "key5": "3RkaHnhVkhKeHv8swUqXTBhLi76pdWXVuNPRWun6VMYsZvX1BuUdfDxYfXFVmEnGD8wouToS1DqXEF1UfEHbvdK2",
  "key6": "2Pb9AtYDV2FmEeY2uQjL3KUHUQmVmCn4AJq8MeNngLmVx6LqQWb7botNabnfKATHRZvpcDzf5WpCVo7dxBumyRkt",
  "key7": "4B1qTBSLn4Go2tgL11vKufTuFhwxNXHTMh75Cpi9a9Whjty788Djxp7gaehY8xxY8WytfpLCK9gVFD5NDdmqsYBw",
  "key8": "3FnZwZkzokdLJyAW9Qix5894uYZ6R1U4fUnfAaBK3tmWLmoLg3V7kwyQjFvKmuDCTkzWXgCBHsZ6UFt6HWLpvXZs",
  "key9": "2UnuuAdRk1KrRXx2urmVcJGsTMswpzaYALEkQgvxu4SAs2EwNwaPjEoBWNg6xCxxhUChBZ4pakFVP5uiejXRqqaj",
  "key10": "2LSbgfvvpB4B4dvYCnGp4YcmoQE7cfLMn1b1MbHVThz7kNwfrXuXmVqGQ6x3sEkaLYaNc41FYXZNbTT8aFQdzErX",
  "key11": "Yemoh1H1dtkLwo3pPgzVHyi6L1qiCwEkks6XSSbtVxa6Tritb3UpwAUFZshYiwZpq3imkBkJB4ntWVuL2NbhvcE",
  "key12": "46x29UEWxsaqMFArG3Xs4ZwpNpnYHAsLUVpz6YJ22G2cdBWqNikcom5rjfKmeyzSSLMsrpWMnKLcUz1L9j9poLdU",
  "key13": "5NSvyCkB8drHRBSRySQuMRBkkNAyDoNg2meNCd7kWKdm8iHLRv5d3RKwBC2uLuqWoDRXtqZkDvX59WVzSqxSSYY3",
  "key14": "4LT8xh81fFSP6HRrKBbYDSHudpFMdBfFBg9B58DnFK2j8F9FF7xQBrJtUiHQhuJ7Q7vSK8FXc3Dw2z3aYPst8gJB",
  "key15": "4XQQLziU4ai72tLNAqg5ZLFkwAyyPFreUJRbYJMm3dVMAq6Z1zE7ULQpDFBrVQ5zYd6CvnBzEGLP9T2saHh8q7E1",
  "key16": "4ra4YxdYdD3wyEr86NpMjMQv95oikfvCMKMh3iLGxmDR1FR4ibwbN9hU95dkpPrW7Pu9ya7u1LCJSTFCc2VJqUqw",
  "key17": "Ncg3Hg1c721kECCphmamgn885iikwFJY8bKprEtf6WeHJyndajV3MoB74tZmjPfjY62YgA34KtdE1kNPsrmxBzf",
  "key18": "FVnZ4cLY81dJea18jmwhjRi8wCu9R7LEpoDLYK7BsMCKxxR3RRFKXKJAHZk93rnM5tGqG4AVGLjoDcaoooJoHqC",
  "key19": "2KcsWBP6JmqFfkQVgYRtnzfRYj7Cun9hgesTt9HZSVZBSapoFHGw6ReVyGhX5S7hypL8y4Vbz76kp49gKcK4iszH",
  "key20": "2ToGSDdA4uj9wSR5ZAJH7tBVc2ZSUF1q8Aiqif1rJ8gCufH26B2mxVbSRp48M9APCTTAj94JW4k7VJmLRAoQ7QQj",
  "key21": "4VdDStwgh99eM7a7Bm2FUBC65rT7G43J6gCU5WD1iwucYP3FFCZLvihfXVrXzNuraJbU6CxLJ4F2WLPc62xSW9dG",
  "key22": "4NwDh8dq8k5nsKLxYr3AVCDHmeNF9PwrVUfvB2QdnRPQWnXHMLtt9ndzJUh9fgNePo8ubuA8e45CkKxUaNZ1S7BJ",
  "key23": "4fcwYT6KdRyHF86bG64Y4977J1kasuKPAfB3e9apNckYzk49qoFckTMRn2LV794ysFf1PoaJGCPetYXHwUQknLiK",
  "key24": "nucrLHc9PaADT2sTf2eW5kHDJjJr6DDnESckPQeoJUqLKkcjauqyGJcuq8JANhbCLrfCGLPWgy5SpE2ph6k65by",
  "key25": "3nnRsgLndssh6WgPnYY6czExAn8EzKLR6jZifdnYMvNoQhh2cZzbeP8efaXALpwPykd5yJGv26oHYvHe23Vz8QRt",
  "key26": "4nUkWi6kcmVGvn63QSrmhXvXN4ybJ265vEkkvY3uuvSqfemfdFM2vA7Vk5vyKUidDGPjMRiAkWQxzPXjYHa3Jp5z",
  "key27": "2dFP4dghmi8Rb8KqT41PFrbjiCZafhzu4KrcSftn77JYZ1thhNmo7XTdo2U5ri8xP5s3BwuBWK46m3jzDMXbNp1p",
  "key28": "2RWEVZ3wk1rdya2GqTQgkH8r4AHrp33TNs6F1BE8kQw7zcBanNiZfzq1aNrQj1JDaEjRPFNA3qjUnKeLmpCaD4Sd",
  "key29": "3yhcto6ZPXTXFEX8RK2N3v43Qo66M2be4ie8wSCZDhN1L1NSXwK58eQfKE81jGPg5antExx9ehvJGixE18RyjznN",
  "key30": "23Lz6F87FapkBgtSUfAhhzMbqiNsNwT4bheUhqEgekgTLCK1Yi4bUuqfRgC7HExSRC818s3e49DvBBZyVuRVETF9",
  "key31": "2qh695e56zuStWAB3nwVRqWemPPEADczSDEc5jof5C8WsGZ5vwt28PgrffkhvG9v72i2iTFGMRxfgMGyWvLmznEX",
  "key32": "5qaQ4YFKzvPj7wuUpNKsD5pH68ZrrjgBjY34ZqaC8iq2KezDM5PNLa9v54LtDnF7mJihMyrAw9AwuGaQVHDPVjNs",
  "key33": "2d5PL3pHnAeBtGmEhozLFcH6xZVYGuBdA6vYQNvbxpiRVxivVa8j9E4w8iZMBwQ7fxpAJrpQnegwvN7YikccDt6u",
  "key34": "2yQnhcZFH7uWtdiw4vFhyzZDoghocwu1F4JxdjRhLKuSmfHkJhn75ArRKSnQZHAphLyi4effGj9F8S3NuNpiBv7g",
  "key35": "2h1t3FSq9QFQbqRNp19fmAnPAGfq2d1bpbveg7RNnERDXhgWmUCXSnuWAWGnpxY5AsD7nDBsJNnbXdGQirxvWK8j",
  "key36": "5BPNrs5WZjuFWhmSnL9guhXreh9jXXQLbua3qZwJCZebUByDatZHEDDJMuPBzjZJqzGt8iGXStn6anCPJukg9fNq",
  "key37": "5J5LeSgA4RhUvriUFAecD1VH28QeU5dxWCPGZYgt3VQnm23tEU4iWFozf2RGWF2ZCjcZpKWay6EmmPMUnQT2hNNC",
  "key38": "56pzYuQWhDRu4sC18t8XmvxJpAN4yDF1i9a5scmeWvycNKPB3SCa28UubEUwXxAjVYGmPNQ4Hrco9gpxy8B67fgi",
  "key39": "43f3zRKi49RPzg9ZwHfYhbwZM6UUEF6vdmVX49fUFg7hs5ggQB2Dpg8LMfXcjPhFuYZoFrTDVnPATXQVibXaeono",
  "key40": "3cEhExNunfGZ3DEV1GVSuKPWRUuncuS9aXd3JXLWFEDUR8wLGCzgeBpYyhkf6BnZ29Spsy6dgjyAYAAPQx1mrvEC",
  "key41": "46x6gMMnszcyDiy2d78CJMXc3BFUNgZgpyxaPNPyrZ4Vy5wzpUA7XHpXdiTCx17F6upXwULDc1wBGhoKYZ7mhmns",
  "key42": "5Xe9a23t7aZZiQ6N3D4G3LpyBhfuh6FEo1dvWN17oupcUbEaeJo5ouPDHCS84x9UJST3WtEzhV1Bg6hLMV9NhVQ1",
  "key43": "5VFdshuVFxFqkLsGWwnWbE46QaoHucJGC8E8tLyk19NUkc2rX6L1kU3cbWibE6iQsbSPsn74Xr2nMnvkBWGNyA8A"
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
