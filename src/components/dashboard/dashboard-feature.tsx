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
    "5di8N5wXHvM5Xk9dWp11kK5jtXqVEJeMVo2ey6MiHyUbHxQS1woQZahwqRtw38roTn7aMC66MAytCzRMGXLFpLW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xoKpafM3EHFiskn5jMVX3tPYWg8YxwB58RRFb3emLa7b4gkbTmQ3d8nkHqQRxv7VgHemxQ5CPAzJcgGPUgQHqC9",
  "key1": "4wNMNB2ZVDm3Ms4432FVebQUKyBSrLsCC3mTSBMYZunW2xvhRAwucznUFMPTBikpFi92MCNuBzLSEwYjPc7b3px",
  "key2": "4BMt1G9kY2D8UoHjZsnRCYqmBsmgpsKSiHdJeBS3jwczYxRqCXLfm4wDtzNebCQow7DSMyJ7nr7JnSWKuvYvnLD",
  "key3": "2urRGaNBnaRWUMgsopom2HGq2oYEkaTAAgkXsmXvMhZGMTotC2zYi7DNTykS2ytWESdkUkDAzkb1zmLyQx6dPcXD",
  "key4": "3W3opWX81J2LeS37wQNk8F8JL6bf2CxxxAmbXdXwex1gUWb3Rtih7AN5FTxLxjzAKeeG4aVSdpxpS2JBTu6GeSJa",
  "key5": "59ordLLNh4gYhL6n7FY5RwvCTVMtVda1bzTU1PXH5XdQqAsRcegXmJ428A3mEaB7boWnBNPgGADJQc48GSt311Js",
  "key6": "5cbQivATnuqenxwxfunLjdvGLeHjQFmBZMrekW8KthmpUbgX6sFFEV1yqFydfTQCAS8BGR1AnQ31F3pqdQKgRyHo",
  "key7": "jZXtUK8dwvj87Gtz2tbmXtw8YHWFryrTfUWb4zMy1px7okMrkoKfA3CkLVnBXEAgoKpeiQ2AqDQfDDnXhmfcKkd",
  "key8": "23yjCNG2j7VM4n7P66jYqACuGmS8tp9esmFeCzSRUY2rgUwiVfxDLJaDfZbrj4LLKbEMqrbDWuEdajWosoaQPvnZ",
  "key9": "5XgN6PXjNmr6qPG3ZDvNGtdTTVWBoW3DKW8NZXu85MAr2xB9zew81j2sbZFXugwfCWoTJPKGCzrpgMkPFygQGyHW",
  "key10": "4McCnNngUXqxi2BLykXG5ydqGQpBoqa3fPafvFKJpviekmjJaXuZCzCnZaDzPsXRS4A3vEXfmhd2fakETQMtYuYs",
  "key11": "4dvFyFZ5sVDS4pQXs48a2vL9GBEhHcCi6827MZ5wwXw5DixAcrZM12fQQU1KjguQjWpEzXoYh4MkBtwCoNVio2Ni",
  "key12": "kc8HcVZjvtDUxS59VLY8L9pz2qzZfgcgWv95HvMvdhX4MqFti3s4NYaBxZQyGWycryL4zm86mLAfN7y26sQoGwe",
  "key13": "237QRabiGMwJHgWYievws5EJ2TxXrcgQtSfphc6eJuLbhhJuXz1jcTG3oiRd25KcmhdD4YRhg8rH285wnGx4fpBq",
  "key14": "4kWLyGo4RRvd3AKuStGH3SEyYuSSDjbEBm6ZJ6egtHNRA7fKQaDbLKMjxohMXGuwaaiyQYeyccjGZwxRNXNDodhK",
  "key15": "56a4wCxk4fkcH2WEkjUQXz4wEjfctmEBGiEf5TuaKEmEqi7YbS1Jq6nqnBtDdWo3pPAocV53cBekmtjshynKZ8h4",
  "key16": "hhTDxKpT9cWQxt1sawxkUbL2KBHYzjQgRjtQ1RywcCWC1qaenaJ9zdZzeXPsFPmvSWR1rnb2RaLoX1XnQtpt1KP",
  "key17": "4t29D9PqesvHLdM2DKf8ghcc6xqUmu3tMfiHHEz8RJFmw58sSW5ezzqyjJi9NiVCFStbVGEk35jhWjCSkqnn8GQY",
  "key18": "uMXAVHyFxvCMWfxb8AMyt4PQdAxWXGZGkxhZStMAYFrviUKee3f9VSxaYaYg2mdo4aXB6ZaBGzTN2bk4YNSXywt",
  "key19": "57MVBi6W6qWMbByn8HfsvYR2j9D2PW8p9Qt9PKCsep5fEfaBMXtHqV9T4MVy9FeJDDQfUNqZzz8kvnJhmQfWnDcL",
  "key20": "grhoj3RREYWPDF44nGk9SPeinxWPjsG3bmRWMznGaPkW87iKEDdxJwCUmzzHPRkVAoP6NErqMFSBBWfhCTZT5Nd",
  "key21": "2LEmuJthaeMPtiCn7gbCyFrYBz91s7g5Ebe8MJ4qrZ1qGinFsGdxxmT8oNtaH8fNBiPoX89NfhsRisDRGY4nF1d8",
  "key22": "4ZPyWankY3gUzyoPr5vepMS7jrbDiksHBTvEfh8AzwoK1wJZ7TiBX7brWnFNDhCJCYgwZKqU3WUnggngyLCjiKu9",
  "key23": "uoEBV3f5qwvxha3w96gSZYc8VbHrXSKkfzZmpFvZhjHyzPTXicZHmiJ52Ti6qgrd1C5D1YHivfSMUvRRmGgw4az",
  "key24": "5KNpbMAesc8FBg9zEdM9S67UKuyRNaSwTgktWtJgYFXq5kNdmzqdm9A1SH38tzsHYQVb97oHg8WuiHHfZ2iXrQLT",
  "key25": "3j4JqoER21kkEqT3WWZp7XLwm93VjxJubGRi6Rs4t1E8EgcBNRADuposdCwk8HxQCnoZ7TYsEJ756qdkRudDLHnh",
  "key26": "dGEvp7Qmws9bPtEePLiFN5s2tTik73Mk257cCUdMHCNYi4FR2yHoXK2bY1uoJvYUUGkEvVzEgSWuM6Divk9TeVr",
  "key27": "rUeL8vh9UZHbMee2zWGEUSVPV3dQnuHFM49UPnwCJmm48MH5kCZG1ijUUyBwsyEp1Xdng6oFFqxdtDxAd9K62wZ",
  "key28": "o16ph5QHcqdSujAvPmn77bigsRtoryfR1D2JJQdX8Z6aFTYRAef8xC6ss9LQc41neK7aVo4Q413phVAHSET7nps",
  "key29": "2qYVGeNEWMf7XrENBSp3LLCZbbhvRGpsLcVVttJiuCZ5y9By7HzfFw3VkvMpybkQPNKwJmRJSFbtY21fzMNFDHFX",
  "key30": "5e5HxFbTc445JCdjwCK2kAFjAvQTQfAtN5wo1da6KNsBgwDsQjfHABffZtckUvWymXi9ARQ7zq11fNVEq17WQ2Yo",
  "key31": "2yZQ5Lpm4Kqhqke4nt876iXoTPjfu7BtDXfZjB8ivTF1sCTsX9XSYzMd1UmAMimPW341baP9oLMXN1kFwsj6iHsX",
  "key32": "3rTPzmeyFKinmbzEmJxUsaCSMdBePmF87Qtqgw3UA93x1y3ijWTfqCKyHV4b6DGEjCAjvDikRYDV8zDEkXEJUcbR",
  "key33": "5Qkjh3KjMF1coTQnCEkZqTypHjXis2UJWscP1aoDYixXrHT4oEFqvdCH555uuAZNivRmAPsu3gZBDG6Ks1iNmqua",
  "key34": "pf19scG2q5LM5Z5krMc6xCrkgdrv95RALWnatPoi7RPxQ6WhFJeq4Xr4KrcBGxH28NaRxzZNPkxCNsbLUB89f6e",
  "key35": "2xDXbsUbhzJAzyqxjLhbvjQh9Yp2m5aZivw9G3BgRMXb2ohVCaRnLZ1EVo34PWZSkWfURZ4HKLgYMNLeYircs7Gb",
  "key36": "3BiBsir4iY5JTAvUXBFpRttwh5h8Sg5UrrVTnbMVNXFonvt2YuQxq6QUmaBmJxvDb9cKmELPMcujMNYGCsdbjVtx",
  "key37": "3UFNsTGY32im6oRcFimkMxzXYmLzwks6PFRM6WbzZx8bgXDWPEZqwJ5G2sViHZgGgvEHX2xWWxm458CSJNaFuLoV",
  "key38": "2jq2qTrGQ5vicqN3mGKfy1c4Eo2n1jxPZ5Hc9bVp4sp1vx8Z9NpW22TjMtCt3ZcK9LB8ioXJhxaptV8SvroppEMo",
  "key39": "4dDiEMVr1HBb11DwoLkFiCdYm2P771AvNEdqvZqkiMawLSbXtNyE8ughdhWhUwZfwuu6N9SAKqMV4t17kMtj3AGU",
  "key40": "FHYmTVQ3XLUXaAagmumzswBdtssbSMnbqUhqizuBzETBuFdx7Q9XB1LpZXhGk8425LmpuU6VSBVZFyY8oG45jVM",
  "key41": "21YEbmYhZKS89U6v4XGCKKSPyTqyVMfQtpzSbgkLCR8N2qzPVoRbhFJa3GTNTDy8fuHB6FWqPp3F3dYEdDKZ2cum",
  "key42": "3426Jm8znij8K1rgPmBqnGZxgjHXbjBcmZqQsJTaKnEtM7jrZqP4UpyXKuhcCvWaAYpymKToVGSJ65FBGPDppHvU",
  "key43": "2dKtK7n9vWJL6hRrSkMQdPzQ9REKF58tZZpWrhgSdTV3gCtnBxeqYpd4gkhx6oZRdnXyebT9JF1wngS6vT8Eenox",
  "key44": "3CfTYDwqF4wXrRSstNjqrnBcoGDTYys4pXK928UUuYCHxB144cLu7ARNWxcHz47qmbVCMHhg1oBewgjUEooSerJz",
  "key45": "4joBVvGttR79dwmJoXYDwdpo2r17HKQF1ELzi45x98utqVNS9bRDZSr6f1mqJXz2FeGgvtAKXCzsE9bnouuUNMkn",
  "key46": "tRdRJSfXsNbK584b4E49KpGH1L6QiDhfbg5uJnLAkJZqE6ofNJUUKWeJU1WuZDHZbtgmbWq6zm7Jjj6fLSA554s",
  "key47": "VfR4eGNE8B1RS61p3eiryV5uU85qEAZEKFh7mAiSvKP6Jt4hnMMSBKx3dMpriwyVSxoYBRrBnNjNknpN6YdEdWe"
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
