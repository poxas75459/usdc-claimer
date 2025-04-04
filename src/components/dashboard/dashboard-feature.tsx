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
    "4qU7CNsixEh2yQttKQCEUoH2LNMBMY5CN4tLPNkTmJGibxekYBvGmJSHGTrEqfrhRAvffYHYKp6F5ydatBBR38Bx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29JsFJfDDihURJwnbQdkUPeCJdFbcy4EBdQZBJsaCcRpyVNg68i5pazvU2iw6spWQxV16LobARBrzSjsizVUthQd",
  "key1": "pqceYiftFS9SMuqnLyXHuw9E7ZExWBfX3CADgP9UxwbuYSeiAR64ppdt3ePoYZ2yEWBq2sxjiHctyzAQANfHyX6",
  "key2": "47rhPARvfVvqvNcp7zbn17ckXcgZ1ioBFXGpSg2FyQ6fMvWhnBCPGwPNbNZmnVdaMWf4HrqvRstmBEDnhw5tjdF5",
  "key3": "3B6FR1QDsHZRw7LidYbnZRKMLe1FZredC9QeD4TBJcxyxuiK3sG9kxDqVWgxbW4yzN8DQ5jMpZgGUWn9xVjXELZ1",
  "key4": "75d6VmKT1tvic8rfDV9ybhWuX2oFzbgjuZwxuwoNHd7z5zdUmAMab5ts7AaYxs4WS1ALhyhXMEzhFBk4K7vwSuj",
  "key5": "2297P7jEeegfTtEM8WMqDtVGifC5To1k5w6GkuKyrem243AV1FWgKWNvtnVidAXBqW2SuEnukaK2Dfv6vSQZ82Jp",
  "key6": "44f2mFWw6Mxu9VfGWrCm9Xf2kB31Vg3j49h34JXdpfNT5etJCQXNpyCzTrBMg74TnwmZjdoEMpTMywZk6xrYQxSv",
  "key7": "5oLZEqJyW4SFdV9US5nCBNmdTB8K4pzhgLZAt8bDreYPmTmaHtL5ETyZduLEBS8AQAmGH4fZt6t2Ka5dmehANNUH",
  "key8": "3pGhK1JjwfvbQc8E7Ugru6auJ4HZTSaoRN8JxE3NbuUTJfSpVSrsrCS5fusav9NV29sbUDQ3G1ewwZQUBsiAvpy4",
  "key9": "2kwCQhsXCeWmgqVi3hqxmmD4duy7ERZk3StcJAGG6EM6m8oTtKjqPiz75yWFssfFEgE2UFWYacibCZ9cbe2u5raq",
  "key10": "rv6SGVZDonXpGjAUS25XbtmqdhmkfHfkXjM5A2FBUY88DuefxHa1CT9iGG24Rd33pBZh6oEtBKXmeajfwfQuH6J",
  "key11": "ns8SRkb2zoV4TxwNDZdJnEMYkLhziGxzdmwA91xs68qLwSLz3iVTPj1Dmgnt96KQxW2HKxaRB9dbvGFXrLbujsy",
  "key12": "2JznPqWcP3j3Dmiw8QCjycskC9EEo9HcvpUHFbneiiB1xpLNoMPWLChD8KTbJ45iai3ADsGvyrAVcFAJ49dLvTpQ",
  "key13": "4KwJ3U7VJQH9oQKdB51pRJHrwLtyLxqjPSEPFuPdXfAEjPqMU6HtBCPRGUdWrkYYeaFLTNiwJ9v8PGW6vtCbTczW",
  "key14": "5QfnW8JQQ5T2o13ryVBp1sKbf6iGyyWVfwkpAAp2tuV1U6rtAYq5AxZ5EH6H2f86AeTsv418VhtoSZ2x4fn3HfsW",
  "key15": "4w8zrnZFb89k8ptjejsTTm575zvZ7YrQGkJVE9BFL5AhkgAmLhJgDN5KwLF1TNgh763JA9bMu5qAxKvhGcyr9Vzj",
  "key16": "3DH33VR9ENrAitDyaEfYrCDSuCcJxDWBps7mDQSSwxT8aJxDnwFbe3heqPgtPJTj7gHxapbK92qCWds21YcoQhpM",
  "key17": "3CPd2wERYt5SdSG9RQGVgFPs6sLiHDb1NG9jVdAsE9iUrW5Hi5GD2EJs1bQPpJ3Heg4W2Y1wrgbLGtsAGupVycTB",
  "key18": "kBLJ8hZVQymJ8jvPQ9NxAo39kiyUmrq9snFjDQdQcH5DeR4zatfBFFBHfjMPaBhyNt4Pr6x6smbuZF3x8grqbfH",
  "key19": "4AfGELJDDwBfRaGYZEH4GpWygxLf13QQ5Gcg1kGS4yknzddjHh8hvyZ9cdrPb97nLScLJgVHx5qxPrjwcJUdVFhp",
  "key20": "7BjgRpm2sxoTgBESKGBQroWiXdp6a8yFFzxwgHFBs1nhokRqQ6Tv24qiSNW8WswngXH5WBJcpppm9K8Q3ynNWKa",
  "key21": "4EQqPGQxi8KWHVQtWv2ZnZn83mdcG4tugy6B2YYu5XkRWEnj2xEdhNpETCWof7b4aiVhe5r3FReFofn6qcNfCEk5",
  "key22": "3TRXup1MRvHgk36jJnPobEqBBqGYPKc2Fcx4aMqBNfoP3NYaCuRyarSMkRcbCRcVq9EDcc7E8CywtXeUyEmWHpdV",
  "key23": "prPEHjnZvdA2zXhH3sVsaTk87S4VixX17WCnG6evyLoizy3qLA2qeLNANhv222w2Zb4JyPnddgpMwF7EaBSi286",
  "key24": "5EcPVcAyrJYisDQo5iBC3T4q7t2sQ4s93eTmXBx72S1fnkekuwsdJ4EzAbpbokpbTxerN63FS2UaRuEjzeaD9AGS",
  "key25": "4BNm63qRszh6cjrWGDrbCaq2VzXcsQgqPgKvjvoibKaWQhuUscv4fzPXZy8At35bVyqsNxt9RKK8yWUrpR2x8zmV",
  "key26": "2Y24DyaVXmeWe5igZYndX8qztRfGSu3tE268PisZFD8DAA8w4G2yUQ1jdLrTsDgd7pUJnJNgZQ6KSNhcGhPj7izj",
  "key27": "2nRzQT697GLEcmtu6Bxe6jEZqrYC5haVFGAHVC8hHNtn8qh3JtH1MheFChgEHdAqA5vuPA4tCY7pAWbgQeTmZpJN",
  "key28": "31Lr5FQLpB1LEsoAfVnHWTCwwkw5GXEPfp1AUVGDMuu8L9UYqwqcV3p9JFaWwX1F9ynu8igVNo4SA3gX1G1aXq95",
  "key29": "2d4xjncFgpyxWa9pX4ZeFaUJerKStN1pv8WsooKwQnMKR5U6ruk75Xn7K3e3fcoje1Vq69qjduSjjTq5jUVZjFoj",
  "key30": "5RxzhBZTGoW6bFtdhCf5SMXNkb3dpMuBYNqs8GajsnAA61mB3f8ygs4CzZes4afmgBPe9Q5cnTpLfVQLreJwiFP4",
  "key31": "U2ZA93rVDrg4fp67M38WMSATgJwRHSo8LCLdPbexFNWF6f94ykW3UbYrEh6UJXAFRxLSYxWaTiyioMRjVNHuAci",
  "key32": "uR2bngMttfr9ad2ZgL5fu3dAoFsqQohEC8NC18JCdtTNAafu3WzN4AtiEMhbC4qCWQ8Kw3tyVvi2FG4RRSk37hk",
  "key33": "2B3FyMWyNVisi2x5JwaKjtQxQYLmaQFD6kfvcgLKPMaVbiBcfeyA13qvjrWzDUmEXbdWuqrQH399WA2tznnJYf7M",
  "key34": "2PVhHKq8uwjKavPFWaD6xt7Hrh1HM12BszS1fw2UCZZdWKPNscLEG71zRM3xtGPMJpGJtQ8iqpVPX1unMz2VNQ3d",
  "key35": "4YbakvwkZvrp2rt1zonGDCwinkqaRTbezdTkDoAX4Cjo1gRZJB5ryTK6cw8h2AG6xX42xgeLNXmz8sGGFAWy3Bbg",
  "key36": "4EHz1MZ8VscCahBtENobcvUahzuCm61VKLa7NUQfM8RJHfynWBb8A5kgd2WWbUzYtmafAz6kSHgt4qob7VGpLK5H",
  "key37": "5zuJGNXvTodEi4MMfQPJW3nxoiDf2my8u1ZxKpTb5Wr7AJcct8xo4a9dN8eBFTxHmKdYDWAoaC8adFPsaF4meJyW",
  "key38": "3G452Zk65TFuFvKDuCfUey9FS7Me3K5VxrnwYTgk2QFfypHuxBHk15aG2VLkSF8FBeTpdJJZz4GpxmWpAS3db3S1"
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
