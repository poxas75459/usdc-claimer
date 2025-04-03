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
    "ksnrzohV2KPM7jedxzCQtj7zbEjLgCmeHRAMFSjve6jN6jxxiGpexyMnWauBw94GPhqiQMRxkrfeEGogjJjKE8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dFyDptpzXnT5omH5gPjQNY7V7guGJ1dVP7XAcL4tf9zbzgkrih4kvvvMU8HLvoQ1RaDBr24Mc9TKpd8kPqabXer",
  "key1": "4uNT7egjEbmrfiy4WTea1kA1R4CwuEc9mEbiWkWshveoGsEwZfD63PoL4szFeuwyVqxUaB1zSK2k9H1wDLD8LWY",
  "key2": "h6omzC9gkbmJRoxckVbd7AoDJ9pUt2NKoma4g964yJy9UPQtYUekGknTxRmoceJNzkcb9S3tJQXrSzaQiMsb1LZ",
  "key3": "5q1fhGubi4WgSr3GdwkCeeV1yhd5MjrPqmFqFZA9zFDDsPdUmGwkvbUjgmiCYLSGgJcgSMWY23Z1uPcKb5Gny7Kc",
  "key4": "5yibUpkFqvBMAQHrRFE5ztWxyn16nbYQkuGtdQCiBty74Noabn1rbVWH45EJ8UpDevJxVFwP32XPxmR2yW2Ck9R8",
  "key5": "5fYBXUi7FBgrkuUojAoAqneNrS9sGQHs8SUFvhizVf2dENQzJ17MVVk9zVW7dc8c7s3PLrifHZJAiGrKVmgD1P5q",
  "key6": "5CCHpXEyyaSVuiArHwSFfzZJkdAZdezsuvKGWpk8goLnZZXN41CUSMFmcWfhc2HTiP33X6J8AUo1ajzokh4czFDu",
  "key7": "taPUgBXd2sqdjhVEmCxhu5fNERZcmWvDs69o3X8hpDiV1xtLwKjgJLpgtFXzhp1xma1EEATRprq72FMjqY8JUpQ",
  "key8": "3hQtA7bYnEQpk8BhPD5SrmzDqrT3a2h8qLCinqHmap5kumqfaqE4BEVzstmWjUYbK7R4SSd7Q4FsX8bLdxthynKk",
  "key9": "3SCbu6tg1BN3Zdq4Rg5XgVEgbwp7gtpKr2Mc1V2uCYU9bo3HqMWMhbNZuPiBWcxgTUNFTCwfiiZwmhY7tof3beXd",
  "key10": "3cU21N9oofqxWzEjfC8zDYkoBwJc2ccSd9DV1v8NVfdeSukZ5gJbGwbKJtfzwwKcjwsmuHPTuVMq2DYKvLTk7cvw",
  "key11": "1rrynuyFmJznmHnzyD2kEdCnCpeq1px76RxXEsqz5ARw4cvAoZ51L4t5GSUd54ae8KkCfquwQSGSXcmEMGVdvvY",
  "key12": "2DeknFv2GWjg8LLLC7KRi3oaQYPC7Q7cEFWnLaA58mk5EybgfXWPTAZFGCtENmv3ALVnTG44pyvSsXwSwciGEWyn",
  "key13": "2DpwW7qMRzUux9idoTcJUUwppkfy8WZ5dWF75xUXV7DUkaCMiFfLQ6qdZWuipFqpaJNrPj327pKQ5pAiVKgKHKcD",
  "key14": "3dESzAp4EkqWCiYm6ZpKVnTsWnJ6ffh5gYyjn1CM5zZefwwLgN3rMnmGSxS17JbNuniBn3RYQBKFG2vaB3BgHoFp",
  "key15": "2toLVumxowrSxKddwjbMdRYJbuyVmpC9HMLxY3KfYSwTNAMM39wzwwyU2P4vbsqM223cCPpzYMK1TgNRooWT5vat",
  "key16": "331ZkvgRGYDZZxoGo9xxgecpqEVgHyH2f5iiwepbHWgYj5Cf98GfzyQyZEW4Aic6GsVrbtYk1DM9Y13iyo555ZDg",
  "key17": "7ZZs7xRaBCBiJjVmWn9B2JDHvX9fbRMnkq5caweHAhETK1ZRP8ARJ9hcoWNxM1bnnjEWMgYjUPyzAqrDkqCNrQ6",
  "key18": "3PVDFYqNWJhTpqjN2rZsbv94bxDLqTwkrEWjkaySpRgFpSFh5WmsPvcboh8yPTGhE68bpbK76QV5GmRnga6rUBHm",
  "key19": "PGfdcoZBt6Cr7XJproT78Hj3cNJdBbohXwQzzTw6K2MJZNvTrVa8ToR8paMGwyPY2xspfiNeH1ajfkAR8uJi3zv",
  "key20": "4yQePUv7gut8TEFV5vjavyrnN8FTAoBXS3gWPXt3aHeujPFQb1YbDzQPAXKTyqzVjcdgHFzwt95jX9K63DdW3GDg",
  "key21": "3PoKShqHaigMMYAPTm8nfKwYA8mXZzSbpj3QfTqD22wdRJ7e1k4ceQsEgoVjvTSWrLHMwVrtK15fpJMmPtxJJMmj",
  "key22": "2XiKBMyNaDW4qdCxoVGK6SxLq7fCtWnL4QtYJKHns6HvxBATsqjh64gYmGVPiziVe6a7qWZcFvajw1qt7VyMC3q2",
  "key23": "5kBonZSfp7J3GpbhTNhaszysn7rzEL8QMAVMabGoTqvs1RoVBcrq4HmgpqNZWDiwqNnUkeUKpe6rr9Vm9qdRmbgA",
  "key24": "3o3XbW428pp24qHQjm4PFgyKV6uHXN6nNm7AmX4W9y5LEj15R9SCYs4qdLV7b5BKQYqMM8HjWEdjZCpRVg6DzmCF",
  "key25": "3yF4qT242JRJ1qTT5bKVP9QBebhtAu1QYnSoc7WBJuybkAB7Fn4n2cqiShRFGLqiUau1rAt8GUx6xDw4PaUetZdb",
  "key26": "3stvtbeJvr6BUKLuWnfZLLoFB5XBUo6nxiYGN78CHsr7EKLNqbi7CQTSEYrge8qwZVDwB5rx4Dkig9ewskQeux5L",
  "key27": "3uP3zwsaXJKsJ8dGidZchuVyNTnLpvJEdtNXSwJkvMVGSFM5f8ChdguYmykWSuxQUY8R7rHhDxSdKgWquzuu2pST",
  "key28": "4VtDVKUjwdHZbqZ5iXcqz5L3dgxtoUEfqyo8UrGWb9VRpGApR4kdoYSFn9aSDvM2BcJW7hkbGz1w6knJ1Aiaakny",
  "key29": "iKpE46C5GshjFW7dihhHoWQGg1n8WyQ5k5Jj58iH1HLCvoWbVGE9pqwmi5SkRzpPAsVcdmUQ5z31cDHcRg7Qso3",
  "key30": "5VnZXHfph6voZLNruXhmTu5mGSQRXhsb1gHg5ht2xASdav3Vz25ZsMswSmyhhMKEnVq9EfaMWnrwryy2vjtqqBae",
  "key31": "45yo3mwxK5vZoYBLVgjm6fK7vWnSF5LNhUsxAWy6kS83U5d4DiW8upnziQKaDDWryZG6o6Q8ya3gvUGG3PCPF7ut",
  "key32": "66pjXWxp2sFsPkCQYVPjsUUB7mhsnW9mPsEwES38kVu4UyAdtmkgbHqwxiKn42Jy2Cad8om41LQXyQnGuxbwUg3k",
  "key33": "3K5XHLzFeuwMm69QdGT66UXAGjXPh7NsYpesuhMPt5RC8CZ5EWi2YXowBKLoEmUCnw455kfzBvny5oGADPJC1usg",
  "key34": "4CNVMdmdbLWpuQSESR7Gf19h5f2DhBfN3JwPg8mFwa2qvKPBn391JxMcXwqU7D77HqwXNRsNsf7r9Mhuh5BA4eMV",
  "key35": "yatBv9k6V7ZLXzRpmXeAT4YgTGdfB6HQwkv8UzurUtpbxd2dCgBhSPS8Bwb3y5gj4Njn15Do7TfUBFCnvi4tMzg",
  "key36": "pVJPiKDFTDffHQvNAvZm1dqpLGDdMuT94tNktsBXQ6fRonBPjFduuLBSpg4fiD33JFnNKSPJBn2NAq5e8XmQn2j",
  "key37": "5wCzgREgmmMFEys7UcGkvAbeeaMKXrm7akaGbkEUWw1Zk3wAyK3B8hC7JbiinJkCnmp7Au2KXVJxAu6LmTogHrek",
  "key38": "2oDro9Qck8FWvnLtkcgtk14h9gcpsgdaXRrbY68jDgRSepq3u7xWBXPQjpuJcXNpcUWDRWnmwiuTiygkAhKCEeDT",
  "key39": "4cEwc114n1owhU4nm52adJ7JdpRuEsLyRC398bTtFGkm3ZUhtKZqAkWTqYR9z4Vb5BXyEP7NGje8b1kvy4mdxUvo",
  "key40": "5a7DQrbDKiDPE23HhqYCybRKfuCtMbDQDaaLgV5e3arcBCsjhTF7S8xsBor26GyDZXgwV3DvvcMZA93TttvWNj4r",
  "key41": "2uhhDNbo7h3BKxFQ2R7KapkW38zmk4Z7ecqvYUJpZNNaLN58Yq9cqax54QUo2MMr2BTE3Ej7PYMFjZscJnAUcpEn",
  "key42": "4RTo7f3mSFrLoVRSgVVox8bQvW9m8eow49CLrcmzmh8BrcJKupypUuZt6WcKHwqGezKPeLjaoeUWJnxei9EgcUew",
  "key43": "3NZxoqrspik4AQpUeYwKDr7bnd2pTZjgTYjsXQBPnU9exbeDeyyLaao9XUfVokYVpFacTFBnJrNufipx2KdKFkGr",
  "key44": "5WZjEHttoRJPQHbMop4tyR5keNeddCVC2XY8ysT5vazKpc3nyhZNxtjJqphuZh9msTGs7sEYyjMny8xbU5FB7tmi",
  "key45": "2s3TMNDqTFLGsdbj5sDAY2qLYNbzboiePzy8sttXUfXsDpHAGv9wDG8QcHeXCxKCnuw9rh1AUuVTcWPexEZHpewe",
  "key46": "4KRmnGFS55C28mx93ffXHo4Pt2rmoyPQEgzKWQH8sGuwS4aKodfbZF7ycjXL43FLEdxja6pCDgngjKFdenhJCc1o",
  "key47": "3nVVuizPxBjzSKZXXBK5i62WHeq3uVNf4AuzXxbmx1oGqMpbHqyyv9Jajna2AnCnZhEzaqzVm8xUy4gNUbU4DCV9"
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
