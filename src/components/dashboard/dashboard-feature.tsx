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
    "2SAAs46FW5bsz55HzqNucfjeYnyVzfoYs7bgaaTVwaZVSFMn9xqhDrGysV7zh7AvnPBYvXJBmK96LYFbDCq9FUph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62RJmwZTxG9cs92Fydh4wzwgQMaqK8p9m2S4B8dUSEMQkWzrkydEEX3tAuS2bVSeprzM1kjz2KYHPW7avcBuvUBw",
  "key1": "GUpnySC4x4tdvRh2SKSVgZvVMb3VYNTo3xiP5HZGByZHLM9MzQc6NYsTdrmL7M2SxSJKKZv2P9cx5B8EZ5FN7u3",
  "key2": "3ApmKKSqeuBbyzzsh236By2LMasUvwiupB1TTZcyveC7ACagB3YXCk5J9LF1nJGuUPTPXuEBeHdZvy7jgDkvMicV",
  "key3": "5Dn3Cy2qNobX8PiJtqmKGy8gByGv3uVaqz1YA35D36E6wv4oCJ8CbDnwm5Kix1RStcvofaQP9kJKL1aZ1Ue85pUw",
  "key4": "3cF2GEGB7yxJdVySVVz6gEdeKQUVRFSxqttw1kaL956dFHKC28wdKiiugBxXmMCxfMEd4dNrKux3MjMfv9bpK5UF",
  "key5": "3bNGFL6ZwzARqxTC6GyS4wfJqW7vzpTVFvGutXRzioinvDtfYaQhvUqX6JUpJJXrr12BG2opAjyVvaXqMWe84GHh",
  "key6": "SoABjTKMWT2DgRG2TxsVKqV8EXcfvXAzGTDjtNLAgXd1VsgopXMzQXZRbpikJ2M8xivuHEmms7jqKXTdoT5QNa7",
  "key7": "2iyiuFFooWCRMpTQFmdcNVxNM9W2ypz5wfV4HG62bKwNuzdvgfUcUjjaapJMMYXgJTe8MFv3pE7DDiagsxRnL8UQ",
  "key8": "2pxuyThwzTQPP1KhXpsrMEy5SodMLeeJecQ7RcLhEVuR6Mr6sghMgQPERQyzMhoyw1JxEYwzcFLVxvbL2vsHUrgd",
  "key9": "49DTFRyCBDSgrmRKZs8wM93aGHbc1bmpniXpdMuXkgRB11Q1FCHkQy5ai1DUFWqdqukx58mLBUm3RAx93ofgjFJT",
  "key10": "2wthJmxe8d52EhGHyQBWSJViWZtDsKnjFBSD9wwmY5PfW49SN4hMmPo4qFUda6YRyShmUpnqWdqPT4QgW7JkUbiY",
  "key11": "9HQntMwfW5S9yHXS9TDQzZ8Tcv5f3qwXF1DdXKB2DkbV2W4LJeUKx7vSRghsDVM5MgA1DkduEkTzP6GEhpFHZ1K",
  "key12": "zXJRmsCdtvrHsdPayVQBmQPXtzGJLYUy6vRtQUqQSaMCk6EDJK6fRdGPBk93ihxicc8wBAbAGrmjhbTmb3r1nHN",
  "key13": "2LxXCy5jekyWpuZkoZqJp7NtZ8CG7X2Buk1SLkbRMuKcp4tt1zh88mfDP6sFjfn4LXLBf9XHbpKVTh9kHhvCcshH",
  "key14": "27ZmKKbuc7e5TpWj6RgbvQjwmXq4cKNnBT4sif61FBZJkm7hfUizFv4QsoogYk5byvYv1CxRSUqom6F69Mg37JKP",
  "key15": "3WRnmCMJnKBfSUb1yNDKu6uTqFgmYk1ffUfAPz9Bq9tx3ASwpmaDAAQwczgtnMW9xZGEMZDyta2xsWGDkSiyRv4n",
  "key16": "2MvQPmHKxor7WLu1AowHRreXWQPDAJzLBue1QuHBWsw59fkdtQqtrW6ScW2EgYhTKSTKw9mhHGgcFpZ49NrQZiso",
  "key17": "5mnqYqcAGQubeGxwZd3HNELa9xp8WvmgkjooszkwM12mjvpdWD2PbhEiw75YtAZCdR6MHxXiebvpmjc4xMEV4okb",
  "key18": "36xAwbL3vW8K19Zu3U6bU9VWtudgPuRgDkpezRS1DUoBXEsBxxCZyMSfdo99fm2cWC43wPw2iiPyX5Mzhj5Bctjd",
  "key19": "3Z4MCEFDcnParWyHPHPV2AKyQUm1HyvMYUc5nWgpaWBnrSPWDL8Hw9P7ST6dK5YNwLbq8gh2drS5XEAZRDdn5rYz",
  "key20": "4nVyCnEErm36gcDTVUiFqwZeWrZqekPVdzRAgrk6B9pb6YWZ36TpDbUkgDxXb51PzHC6JGWrxRk7fC36scyUWx3b",
  "key21": "2KLief51NZf2U2q1fUcGBrHbDSD6NQ1dGSFz8hUMXEeUuigDZErQjQFToSLXrgQasySjAPgaCTDkMZGHhKfw6YNA",
  "key22": "3cETTQibVWrDmVqMg6VaxV6NciweRT2chWf4RFAYziVgbjdfSRMxJxKdVtMXjtMJGNcTDJQMjATFJcoNEK23YTHN",
  "key23": "5o8KheuXJV27rgoezhN7rDWYw3gMW61PBToCfnDHoHPSgEdMUT9z2yo92ELvatRTe5b6pcdiL5UQY5nK5DcKPtNc",
  "key24": "5iTAaHUhXsmjU9Ywhaf2T3kxbwagzZfVomr2BhgfCuuZiFSuQT56SyVrmhxJ9RekAjBcSM7wJHPUGyGrY5fzScNT",
  "key25": "3rdvg2tv7vbrUQUzd1nGxSsSjiZvR8CceAXdhkwm4iEghCRd4wVXGhdbdqJy3beCNULqy3MTE6sCHcaXyWeQgKAo",
  "key26": "65aYYdm5ddM7wKigysnydfJur6ctYNykPHnVn6aw1VLnM6MSDQwzU4XgPZ4y2GT7bGq8KoMhutVydJDVNfpuZed7",
  "key27": "52pEoj44SeGcCnqzqdhfVnptjkp7jRGn1o2aMwm8Uykf7oEis4a4CCJC4LUWSxuuBJkg5RaCLBRp3LgbA4EnVDpw",
  "key28": "EoCmKmnpi211LPWB67J2rRu2z4BvSbZ5ET9yiKnLMFuCyaXQAMZdcSobekiusn6bue9LrvU2oZYtnjLpC8UHTce",
  "key29": "653VBS1BDCqtwHjdJWKnv6wWFbEAFmSTJMt3wFXA4u9BohpfgVcEBEDMPPkVCUwyzioBrs2J8sVc4xnYCyALPBNm",
  "key30": "4QKYjQMX9nETZCDAT7rzxz7mzqBvZ8fDoDfdABVABKaprYQhkkunUUaiVJ3shqDxAgRoTrf3KuUQBdC6EFa48GpN",
  "key31": "2D8PC7CnGDM6DvvBk1ZNCSsmvFFEKHdzXrjnXpdC5dXxB97Niod4XM5BuG24oACuVYiUJYQ4W75VpEptKXsGrcw6",
  "key32": "2RofD78hYB63jchEynYH1cPwbBSBciXLHX9McCJ1VKoaDYTcFz8cCeLHcGBbwLk5f4JTZDxmWkSy84QNNEGWDvuj",
  "key33": "2LZh9H5FudpjSfJCKFzxu1ZFYZa9jFScvjah7mXgqQW4yj4UokMKo4NZkEuDxDHCrz4y1H3jhwyQTUKLxcnBmduB",
  "key34": "4T6XLDsgKX897763rDDTy7WwKY6cJ7QckzVqSKfN1wpqykk94Rq7TExEuZV3cAtCKtz8JrTUoSNrSeX2ro2a6WZf"
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
