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
    "ddsXZNCW5uG2yL9bLLvdH3XStm9hmKBeuCwc9gvugJSvwKgkRSGvyvKCh3B9wK2FzYynrEXcFKak7kjNJQX99TQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BgPnKkpB4R6t1pXXdmjThe9fBpXFQpo8ijsPwKSjP6xEVL4UcjSPDDEdK7GeMAWU5d8i5ZcxhGZKRMhwh6qNPyd",
  "key1": "2CnTW6NSpmqh7VSCMwtJUSqUgfYLw2RfpN174fPjCFEeZWHMD5RoSZMb5Rzu7VmsnLNksGJDPu2aDZTJa3MVrwCx",
  "key2": "3gCNddaCgfPDhQ9n2D3ZtNUiDaWnnHEZbStouSvHvKmyPk972EEgTFQkTUiHLxekYxotjLzfJf1iBvMifhiopPE",
  "key3": "5KcZMct9munjF54NmYCF9hYCPpEk7LyZpHNHiiZgFUaLvvmBU1ibiHPNoT6KApiQ187xjPBEzLaETjdxs5dCG1rN",
  "key4": "mowb2ucJvRjfABa7nVMnUjjNFhwtAhy7jH2SWhfxXLQ18YvSMfGLgDB6UTgYcAH8HqTdVo5MuWBxXzsdW63TJJF",
  "key5": "anJM9qZkyhZuFBt4bAs6wU9zhiAkNB4rTEn7Zt2Lxm3Gm3PuneYjFmpwdX2fh4qAryVdibQ2YMWGx32NUVYRjWp",
  "key6": "2hXruYnLCLFJnGynjAHqizGPmVinhUWrv3XT5enoKHGNmV3cTzUk7PQiho92uPvvgwjavWKTKM9NPyV1btikf84K",
  "key7": "27G4AX9MhCskrYyUV5UTMBpx8XAT72gvGQryA26h7TV6uQ3Rbv5Yn74JhkNvfDL7PrSe1kyuy66ZzAf9S5u4vXc6",
  "key8": "367GytWWcSR4mz1RivekLr9ZuutF4pepKnSrjZWHQ8VnE1gojZho43u4gnqK4zrbBEy3eZ4gPgtGEdCDHtNgxV8v",
  "key9": "5h9p9R6rytvEXFWVvVJUBeZbEopTmrD5r3o4v8Zh46YWTvSPyL8reX6QwfWZgoHu7cqTWrySe9QbAT5eEG3gqguw",
  "key10": "41KnBce9UFq1k1oa4q48mF28YUrb9fRK4AM527qHevEiqLvJJFtJhApS32GdKBAzgNkXNgwRFNVieYStG9RiL3zg",
  "key11": "3SMCqHzXGVCf7gJGoLnwfTzFVKtDMbq2uxRrVZjrw5zcsPiFHYQihLuNvRaRtERhhQuosaskjpQ3dBPkq3GfUFAV",
  "key12": "2w14TqwG5bVDeoF7fR5Ds7ApYyrMVFpquFAbEZYfPk2mu4Q41gvsTAR7Rpq4YZUcx1vyLaRnaP52XznSAPvTSNsa",
  "key13": "2WWkTosmp56Paq8BPnGTjpoTaFCvUQtGpcAWYugmtjgiFRSyTjGawNJwe959dtWCPaX7nT1btYdC2iHi2SSsZ8fW",
  "key14": "5P5xhYJokK1LLXvQB3y3PnEAnNSxH2BdSEBDQFuFySsnAVtQ71aHtzRJAQcKEx8dEhjxkkaFULme4Sxybe7VB2xs",
  "key15": "3KEAfpvRE5EzB9BPf2Xnscyh5KoX3PVQbpju2o2rnA4Do93trtpWwHSBEF5G2TghWRTciSn5Jj3maMp6sZkdPEZa",
  "key16": "2LDQhsKvKA3EMWj2Yauez18rhf7WKw4m86E6hF6QW1kobHUtuVg6JHuShPM4WcbD3sbLq1UvCBkfevGiY52X8YUb",
  "key17": "4Fpn3eC6H44M7JhCeLqvAv2A2qkfHT6CvsJX3Rn3gZwH6sMALuoqmxt8sgP2kSJK8EbqK2HqLKvBbTfEzSya79Y2",
  "key18": "3i4Yj6LdZmPEYnGxGw8kjN1LH7cdfDw38TXF6wqfjJkNFcqqcrPDgKb6TCBGm2nYm42kaBMqq9sXj4dEwCE8ezcw",
  "key19": "2NSarzFLAZMRiGeBBwRVzyVDoCWcK4z1nAPhLLKAETc13xwharASTARxCDyB5rB1CHdTV53sDSedxMFoRZ5WeYvf",
  "key20": "5ZHvMqJFpYPuMkdHJ29r6xsJxH8SqubbviYdtAnTH1P41Pepup5FZRja4MqNWeGA11rvff5UhREV2PHmRmYfZag1",
  "key21": "2WqXk3R3c7mfmhJaQLSYgR4drrZ4GDQaAMNsuEnS8mz6PiLwpMpx4KvrEhMpSQ7DKxxgKGBTiCn36MkauNudiFpn",
  "key22": "47dSbUsmVEtNsH1HiV8rGQdnpGnyQSq22DtTYLnsBDakUtVEcFEnTfcXnsmhzUDNVvLc29xYE9f35QzZuKVj7EEd",
  "key23": "2912F59PMKvnTemn8y3c9vzF8MTqFpgFWJUjuwm4WvsBqCukioV6v982zRwiyeiCF6egEXTxQWeMd9eHUV4K2nfz",
  "key24": "2UpkswpFhmNFg246XTjdHyxNmBtAx2JgGbCzQrKE9F23oUq8D6S6yPX3uEMjes9Csh1GqVYB9sKwUVdr1G5PeYCQ",
  "key25": "4Rq6PQYUDXDoGZrmbrukmzq4GhH4dusPDwk4pyHf3zZGpCVxnDwjDqNULkRG8LWfW9m3wLGMsY5fgbaaGy9kT6Yg",
  "key26": "2YZ3DdTsMBtoorbhwDSogmCTwy2jme69Nh83qMBBLYUKBD6X4bHvsLUmZ4p9w7pPMnbCvrdtDkoydKYbxjVC611Z",
  "key27": "Ly4sfbhP6QihCNk2rQGpn15W9NjLLib9fFAnt7yxq8fMJzee9LU53c7GnaEFzs18WZHof5rvyA4x2zwDdB1iDKU",
  "key28": "57rqoimLkKj7nZ6ACbV9jjeaiBFYJZzJjufxF473ouCQeUsKnAeDm22eHfSTXHMmswH62CuSzzwSi9i7czheXRG2",
  "key29": "4a4StTpyviHjsP513qHA71nsnWXeYYdv79DhuZtkrrMyXjBs8mQ42mvUiot2RR11taYK8KBWKkLep9cy5C7Xr523",
  "key30": "3N4AWqgRsbJvdhX4GtgF6MptnY9NApNwnb6CTmNw6VQchwtnLbYYzmTbTd9WwqC1bif3VjGnpJ3yi4GAKCZ9wJ3h",
  "key31": "2RBcHJz1QPDmi9rc82EHzXoUPHpu1qn7yY1pypw5c5grmjanGjcvArSAPckoa8LQ7WxTFhMsB7SEDKdNdWiEFFFQ",
  "key32": "283hG17E16ed8ar8A9VcMxGzmnUDM9mvHo2hrn2XpNkzAqAYdusziebttgCuVazHThEahyZP6Qe2m5W4kC4pEega",
  "key33": "5LjoUoDJXRjcu19pptFvFKTGEXie4X7eCdTXQfgcjoeVKu9uRMzKxaqd6jYxJ9HoNUGfkEg8KciK3J6NSKri9jJn",
  "key34": "5AHvWh5nY1Ri887voNoy3Sz5tAV1zGy8qDVbDXmwy9NaGYAfj7MAhuycNu24Ryuxb6AqT6op2Km69C8si218nhi6",
  "key35": "3ymeUx2h4DaF9fG7nB9dmm9BK1D9YuYL9Dyte7B2E5UQ6ZXRbp1fnwduvMHLMbzvHrG7FeQkgxbxgyM8jrRYjhY9",
  "key36": "2rdeogjMtjtVef1yiTHfDNaQjCdn4GRcRijrMTprpayL6Kd5TSM9nZbPjcQsqQGuhQjVBVwjpigJcd2h7tf9N5bk",
  "key37": "4yKdnFPpB4qiHd7d6Dc7XuQyedFmDS5AAKm6f61PG1AyX9G2E2zpYBVuf9KtY8ZfKXJs453YK9Y8o5epsAgAjKER",
  "key38": "3DT3EKtBveyno9a1ebEZVnUbpkyAzAx8vkAG7VYL89ARkn6pnwqpapBfcoEomPyUWr5FZwCvFf27ANwwFqtUqnws",
  "key39": "4c3q8ejMLvXVMFe8kMvGcWEXMPA33DjntME8WnbxLprSCbKCXeubDq63yDmgfjb8dxwGNWdKumZJPokiXqsQj9QN",
  "key40": "5qZVdja2i8BVWqZ4eARDKwUnSuPL5SZV5teMGFY77qBbGyD5j94aV3bEEHuFPggVxxe7JZzwzkSPbSYDxiPsbToA",
  "key41": "jdKgKCxuBEuPctAoNYysoYhbLAjzohPf7ZALVuP9dnk9MYNFZ5nPf7qJ6xTFtWyf5qUtA4DAPEsgjbb6iLX8xvA",
  "key42": "4iuKDBECVU1gRkN9BUC4HZdUztDvp7jHWayfHK3pg18Dijwa5goh7F5y387tXo6FDvfVtq23xRT6BbVrwaXc7BS4"
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
