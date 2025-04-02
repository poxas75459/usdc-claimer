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
    "EyPUQvASwAx6aHEQFme9uWMagMDgL1FLBJBwhukRW8Pm8CySXZMGKaH1FvDuwHq6XFtEqGwsJZJVHzwVUbd1QJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "598noMyvq2T473AcLKwVPGQxhagp93Ai6LWgQoKt4KpMW7sNuXsjfHWnWetfACPUkoP8en6eTRmsUavqrENZPyhh",
  "key1": "DFYjh3TPPao4oe8xde11pmgPchevzoFg1VMGvWNkkaH3H7pas1pyoftyrFZKwgc1QHkJn5qtKKPm3dug5fndnyz",
  "key2": "2atm2EcEibdjf3pXRcmupiuRVdJYqPVSdbyBMPXKLHhWTWmsm4wyQd4u9qXn2fyrkKmvASp2x4mNBzpPhfuTvjPt",
  "key3": "5ccrdcjAHGBdAXYwWtSPPMPFx45ps3bRKYSafpJgrK7xvx1SfmrgBNWBNBPNyGyfbeuswSffpqyqXzjxXhUXZxcv",
  "key4": "5EmKfSPUHs5yBrJhXR5Fk5PYp63UfoazmkUHGzkByU28hgP5G3Au8zmU5VSZnrEe7twBYXexSwpctoYK8EwdF26k",
  "key5": "4nxFwUNzvMMTCS4s1hSbvTkU4NdWbCnh9NjX9d84biKmHVt2hPbrjTMrYWsFGCGaLQWXmBHhuJyWMFLTfxNGozUz",
  "key6": "2Y39959o9DPPtPaVqR5oY3ka1SHNpyGhrxWp4orAEcSR7Ze5BN5oB4CAWNstNtDvwhSNsQLwbt2a6xv7bYGV8wjd",
  "key7": "3f1eXCagkUaNQTEumPcfG39eLj5S39QV8f79gjjN3AR46xD16P9iPDi5t4BdJ3CVgZUFyA7i3toU15B3mXM5ByaM",
  "key8": "3adLHAA3AhP6WzRywyoGhqY9HvftjED2WspyHdFyaV5SqgfLDCLnJQ62Au9RnmjkmNar2BNFSaYHDreMAU7AP18t",
  "key9": "48kjgGW9tja9rmQZzYB5TswJKYxUdUcyF5gfhYcEw4jFmYBTzA5WtcZE1ZGRcayXxBFTAtcbzq1c2oqw6a6PjQJf",
  "key10": "3rny8pwM4CYLcodNvppMBWtRTGwzJJ2PKAHZQVqCB9f3tnDFAHomVJp4T635ACLTQEd83HpWLA7k3AkG336g9mxH",
  "key11": "33T1XKZY3z1VjJs5ySthKW35sTEnDdKsvcU9YAUuJUC7MiD3DL8Uwid7Uod5yG1jiKKi1bBzWmVXdXCzniu66NgG",
  "key12": "LFQ5cRQmNkzC1RYanpa7qUxJweDCJVget2mfkRy4uojYGF2PAyybwDwcni5GeMEytktracwwNfcTPCMVbKNkNrM",
  "key13": "5whArgwyoj92eYD1F7SU9BPrGeqD2LLFoi3E39zL551x8rja3XkSE6HEby1Ta6bHiFV5JN1MNPGCa33XEtjFxez3",
  "key14": "4sWPBvwhy9NPFuTFf5m9Ae8kpoGR85CbJySzbu3n8PZsrQSYdtdgESEsmdYzhL3EyfZuVEyESvMegtkuMDBNCZGQ",
  "key15": "4MKvt7nQWW2KwyMKey1s3iJ4QfT5iYkteKVvepjYoZWryZuoSJK9rmVePPhxQxE7yvMvLjDK12a9NG7Ed5eJEqSv",
  "key16": "3EN4F4bF7mdkc52bMYtn4Bxo1XnsT76rGrcMaREaKYrNJaR4Vy2xmXGYvnx6h1kumjaZeG75p6qGVxge7h5dmgT3",
  "key17": "5srmmU1DvPdcFAnitLNziADMV7GJxBrzfFvoRJqBWyBL488eQoaznBGPiQefJHX1MhbwLFgMYcxkKYWJDqMrsh8Z",
  "key18": "2AXehfic1GqGTgk21tinhkA19ouSwjAxzKdhXZJwRKQDewefdyJRT3oiiHEf6LtBHjPVJN3yHXXtsPTG4U2Gg3VJ",
  "key19": "4aerzyqwtGRvEomZmhTYkoaxvjrw88zfJddgZdQGFgkEhWiNuzD4SniEXXuxMZgXcoHcBK4JTSFMPnYypqLAWuUe",
  "key20": "32uKDhqeSv3EheJwxaFYLEthe6BfkxPM1g5pLcJsQuYY4SMptZTX7ey8fgyFumwetUiQ5fpyZy7Hahu3zdLe8Ww6",
  "key21": "SScBLA1kX81Wgy3NTNRExHmHtoueDfE4daRHmqNhPqdjksrhvBHdLPHFPwgVVMk3ozHcpz7NtGbhQ8jGcxYBCrr",
  "key22": "4vmKp4gxe92fwGUZCRgQFa4gdk95F7BBGJ5EXYmafBPVfAeuJ6aBgUJBUmoAj6yxc8hm25ghJGnrmugfknMbovNx",
  "key23": "4f6uGrb5rjBFDkxmAAeXezah3nAfiJpjw5HVzLhnQvVoS3hFU4kNWpdNHrP68WHyqy74xmwACePM7tKshRpdUD3Z",
  "key24": "3NqtoCTFhE4DpsrdA7WQ3wqrDf81WYfQGwSbWiUu7fot8BuZzDs3QYzQnKLiS1CPWmSBhYiXfb8sZThRVqndx9M6",
  "key25": "56orLHcpiMWiozBu73dbAkjpqc3caBTLBZFVKPaVQmtcVh3genyDsfowNgaKJphLVzeVG4XXicbYpD4LqEb2ZBmy",
  "key26": "D4RomeD7eMfcxHAWBgGyUAN1nniA6rW2Y1DJnrk1LmpPhiagzwugkQWkpVNb1kHZkQJxemgrr1V9iqjoeWSv9qM",
  "key27": "2pBvtvfRdLJTVv5EncYWR7scdkpvzzNWudGHfS9oCVWoxbt4bgMe7KYUfiYzmCJqR1Kv3qftcfLASuCBXQfmreeB",
  "key28": "31RFt4Xovb64RsgfWoDX1DLqCMo8qzjmhGVY1KPWDFtgN4vvzaUXkhqX7vmm4B3Ca8WrhyW1ncGYFM1aQFLvFdjC",
  "key29": "XwLdXesyVFdxFcq3pDwwdnXT6QefGeyZr1jzo42ZhAEknhU8XXHsbFxaL8reEXEpEnSsG6Zx3TaBBHjEzf4Gs46",
  "key30": "qQT9xsXVDuDux78nfrboy7yM3ydRek9qc614GqBJ2P3gnRxCW5FYLyggMQWtjm3nmA87pw9eD28vPJRoBqyHJkj",
  "key31": "3mSZsQTi5PfVkewjaUhHp47b7emRpR7oLz1E8fuAuDd1dZU4644AaYYT896MARYFettb8SYCDgB93JwDWNDmWukB",
  "key32": "3dvz5ZJeXZzFtq37YTxgYFGRA19rjVCH2u6BqU8TNSZsa7VVr8derXGwWE9Lw1LHiykJwRh8gjcte1aBxz42ZC1n",
  "key33": "5FxvWAef6838u7QW8PT4Fn6XjY1d7NZAaz2ebWh5RQiXjSkvBs8DGUDwWZLmYYBBCqXtAJFz95votqV3GC4nPUgM",
  "key34": "5nT6uHkyCqQVAUBGxVc577JZbfkfuM7KtTdR1ZvdJwzpPb46jxuFbVauJezDtamcaYkjY29f3THh87i8x8AqFM6e",
  "key35": "4tukke4dYSU1qfQN2UXUS8gTFSLZGKESTd2sKVN5Kb5EqiCpfWgnv4xWfdLuoY47WiY8yGM488q5meLUZZNe7uo",
  "key36": "4qs9SuaRqYztDx2BSWyM3eezRtEmbMptnHLeiNHRDLY3MRiucp4LNKhtDNi5PKMebS5T4VECzsMUKrEPb5nKmFjr",
  "key37": "5hnhxf1b7EgKSwpsFfPLssH853F9Tms8s774d9wcKjipCUXEUmFLNCTVsPYh4T8W8sLbzhZZ4ZGUrHB8nnucriLK",
  "key38": "21gitUR4rt1GkwUQJCiyzQjhBUerV8MVy5HCuL8GrKcyNizBfBfcBDAp3PDUUxB4mQPe2NrksNKmKJuajY6m9muc",
  "key39": "3EQ5DY6wLmJyNaLduULCpDYY55DoYkQn11Y3Hcde2zDSGvduRsFLyeKRyXb4hbuenspiceNZoUqjFzMBLsmDo2kz",
  "key40": "3ncXuVrCE6LT3hD3KsLj8oFJ7nrVXowUV5ahvrZzFpDSPVfpv2htjd8stcFZzV6qwWmdqD3mnizAavzcMxehZLeq",
  "key41": "8gaUJKCkTMXfo8qKtmuEMJPhruqx8mi2aXZrweTzkKEsTP5ht2ofqe2cticE72dxhaMqBVavwjAVYiRn7Y147Sy",
  "key42": "4PV26qbNL2jmSjecVUKzGWCzrGxm6C3gDcFgNBQYxPt6TmwkrQLj1sSevHbV7fCk9QqLke8kuVCfsnsYEHPmjy3o",
  "key43": "ATjNfBJX5u81wqur5ydXGPNhXKHmQaLyF1mezBvHVDyZJKji9VxJo8AWVDU9wAKuFx6owLkT9Dbrb3Mz3KFbXpq",
  "key44": "52PUzfXmiEYHYuU4A7EsqToLc9xu6W69CRzUqkxz9eGEG4e7AJEXDdyUkqJnQtnS2rng4imV4kQAqQNXhuXfoHiV",
  "key45": "38FV6PJxtrbrFxpMMx79g5GGkzaKYPvA1pJLidYbLGnZhkr13aRunW3SYfJaUYGMritQeGCuiC9mnWYdBL8T5RSt",
  "key46": "2Bp49vxCeRjDR7VdFqYGRYZ6vaoRGhraPQSXbDMFSzaL17gkLkJ8hQDfpFSYWemQBuFxsh3nmsBd4v43Jw3LDrRF",
  "key47": "4Fu7N67LXbCSwgQVSVxpBeqikYq58gZx6jtzsLn2C4S1c7uZ5akYg78nYMu4WNNJh86fQ5gmsHwJxD7QkucQ4pCC"
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
