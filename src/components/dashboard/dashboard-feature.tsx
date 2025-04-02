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
    "2Z1ya2QHRi5yTDJP2amp3T7bfs7KH9fbYWMr7dPfN6B4TYAaoM3SNsnJyMcHm3GHKTy27ruJBj7PALzwq124Ek7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ouczMUvGbARt9yjbmyt9aySCbQFba4LhiupLD5YLYTJGbHsnFrWeU3xZKEukCopDPwsD9WKMGy2TmUg2o6b9wAH",
  "key1": "2Dhi3WLkd8A8iqz7rZkd1kXEDP9x5ZeGEb54s6BBCoCyfrWNct6Zba3xfgvhgVXexmF4UExg84hRxYRKyzHYXCt5",
  "key2": "gnWDo6gTw8LiUkiB7hzuMDyS1EkA24p6poRKsgvxzjnGx98J3nY77A7ooxTsFtZf87hs51ZXvR9mPbapsHsG29j",
  "key3": "32cdyF1T6sPrhtfDxyDETxwhaqSAi38kSWXrWRKYffgXpCWF24NjBBotMCd8PJuQY5V2Fem1Ntdt3sZBPEXQ9HVP",
  "key4": "5D1ARR5rzvGKyXJu3TLXjHsJ5J2JVNXX5HHVbcXWM736Ljia7CpWp8CqHSz73hEN5RQgVA1S5kdS54LZVgWGg2Yn",
  "key5": "tTmuqD3NjXaV6Rh1Jtk2WHZ9sAFY6DXpqGgACtmcLtAPddcrWogk7Y9gijHfnwyrZsDPndvFWAynvX8aKZRKkUF",
  "key6": "4PajioMgLwwGzs1S54WcecPzdpp2hosLoJUPVnHZGXqCw87N12Q7BRW2L9jXE1Hfdz8KdaPjjJ17mBqMFDRuNCs4",
  "key7": "3pZQdzGcov4fV7Dfb8P79Ev1e34vVNLM1LhmAoTc7m9Mj4FC7z1uXAruQx9TiecJdVhqZtiEbvirgPxJe6kwsbFo",
  "key8": "65uYfwdtZgEXqx1QR7NHk9utw7iNsFMtraoTKJXEcSuUPDM3qC78pkyou4UyqoUUSELmTsojozrtXMkJhfZtFw1s",
  "key9": "Au6jqHo9re2d8Tux6SNLJG5tsNBPhq3hX8C4myVcsKC8zQmk8SGQQGoyEYZ2sJNVKvqSNsZ2vfzj9ni2q1P3SWq",
  "key10": "3mHNwPuvnjZLia4y3PQ3fAParvHSEEJsCogfyJYsLgTuVkyWfdzswVaWu7KYAfLMBAzdd1zaLZeUezUdcTTvzAsj",
  "key11": "2jf3UPJ16PmrojT3bJL7nBXdBYDpMg2GAREqqcQSVwEDLXdqNctWj1N71CwrxdUNA7FbzfJcBgKPhxsbZxYjxof3",
  "key12": "49t4o4KCjK5xFTq59NE2rH75wnxo54q6ut3g32ZZePBy2fAUSMnLNbpAVpurnRTJxwqLHr57QCkHqvxJ62yMDqTd",
  "key13": "5yQbv7mgtkWpeoAtrq1Qm4sYP2TaiawzTUohmtupYHDmXbTqAEFULRdZaRUTciUeumNhmA7HmqYQxjojf9UXypUK",
  "key14": "Dfv6BtxNrbZh1rR7yoiVhnsLZDMLvr2xZMckPobNAovK8A9TBcKCPqkC8LDTYFcpXqYjBA7ufPVf957d1DZBi7e",
  "key15": "3pdu7eH4EVxmHLwBJsxUdtbTmqpfPjtFUX8VM2nNuC6sYqP7Mtz8t83Gxbug12aRe6eiM4NswqExBTW7Tsogrbuh",
  "key16": "3zBHJ53T4wLZk5RobAQZVndBVL1Z5z4gducSwfGUtSXDFW8C5cMozg1vk9KK6PTg4ArX4tq4LcYvSqAth2V9SVvT",
  "key17": "5Uy12BrF9VnepXCWPoRtuts5HgWSUmFZwvHRMo9WiJA5Yy8ETd11EWrAZ64kDM38ozsLb1H9h9YgHSsKaR17Bh1B",
  "key18": "3Pox6cBvUkBukYzHpjgtUyvTYDsDDDg1rQiagQdnQ3RACUjAvakAdaVmedZGwDPh4mJ3V7oAY8uciy38wRdF6kTG",
  "key19": "KJdMrVqkp4oc5gGPcKWAK59DkwZDyxVmGj59nZzWPRt1VmoJbm4zZfwt2ia3AWexfnag5vZ3QRpia8NAdYGhjQv",
  "key20": "4HhzHVhAV4mHuY9pkR44UWtQfgTNi2F71zJe171EoEsWFGsMmTNHTmZtzivEZ3VH5AQcRU2ccAy9Ce6VA8So6yJy",
  "key21": "4FWwKa2Gtq4jNB9YNWJgVbiR9cjr3FNZMFitRrJSzChvSKjskHoc4pJiSKR5hJeNnJ57o8oRBPj3JwZSj6wMYMx7",
  "key22": "34GQZWLQVBiM4C7TaGcAZwAXb3z7qF8HPKY7LvFfnpGymL7xUm5pAf7DBBtwd1vbVkk2W3kZ8E5Zh9mNBJ1VBzv2",
  "key23": "3umuFQwtGGVL3gFepEk1oqwD3dybq9TAXCntefuN666zMjMidCTE3rRPQr5WRApSHXdhPH1uFwdrp9UgfUy6p3WH",
  "key24": "2RxHy7PX4GAKJUrYfHe1jHyuhuTbTiyMWiPuwQHZ4akB5VqUcb4XfoUdTt19iKPam5UxbkPnF2nwQfYmz5FfqjAj",
  "key25": "2rL1SCDmmDTTvbavU2RfhyvLF28xFLh4aRTzz8sXNBpPytTYpg1BbXNG2tM8iXhunPMaFEDWdDWyv82oCsK7TAPw",
  "key26": "7gqpuQtbtJ1dp3fyEWsTLwfxSwYVDVjuVmDietqyp1Xw7zJyNccRDTqdgXQFf8j89xeNw9SCtvkEPm6eQn5sjca",
  "key27": "37VLzUx25fv72tzCNZMRr7SEmyPR9eNDHtnjtshMdFzZCFoWByhwzmZHN8HJ8fSHwhXbEtgY4JESYoY7mqC28bsa",
  "key28": "5pRZuk2U7VmgjxT9eR21Tkq8diPstLdJxcfQcDHGhr4PcCuWik5WeYNNVKQmWsmQumj5Kt1X5AVssY1ytTSmRMxu",
  "key29": "3mkcQdDYZHCXf55BdtwiwJdwFKpb7HF6KaH2rhDXCLzF1P7dpRXPeEZWHjWw7LWCb8H3dAHkMRBFCCrF3cmMuULS",
  "key30": "3tJHiPFXzgpJnbxnoJirqqdqdgKDjPmvJoFJUv6jWvJQa6drN3miFitBbCwssVk2tygYeBRxaAbn1XVQkCBSfv3V",
  "key31": "4gcGDQJYXKtMjwwk4MQro9DUt3LD9zc2sqMzxVDcfp5qUgCGCRWhuLpzEybUoyAbizTzpSNzn4FqU5CoG4nswsBR",
  "key32": "2DU5FnfhYmfgCvUJKzWwnwhUK7gF47p9wTF8hP34aQCfbi2ViDsVfEfhNpADnCJ7BHNHxULi88ybayNgrL1qHiiv",
  "key33": "3S6pJmLEsG1j7D9woN1i54naV3GBxv3v3NfEg7JbRAN4ugXhhng5rni9yyFC9bPcfU9DPtpXtKxkPc1NwuL5szNw",
  "key34": "5YxdeLZM3SekZuvp7ANrxoAFWJZZgKF5zrgU2jL7uTczLu8LraCWCdNpZu3qBmte2LchfTJDQv2UY1CjYf4YD3Ae",
  "key35": "4A8Q2QWpPaozVnoKhUgWsDxxh2pPvxSNArcjvbLUsLerJ1vTvBpvRjV5XnAq3PcumRGc3Ld85wTP2ot7vJYYYwF",
  "key36": "3zrD3tW9jsBa3XQxy27Yc1bpZxSPNBkJAvA4RUHjgV6KaNhdX78vWGG9dAr11rdSvFfNrAC2ggXQEd7Dg7AnJJ19",
  "key37": "EoTWiL3s5yqkFg2XVy1uHeEtx55NeXBcfs9nFJ2w5c5Lv1s8goWzWA8DMUVe1j9NLZZjXQZ6Wp7pTcQMPbKgeqc",
  "key38": "39288ins4XtdrT69aYjAc3KDffc3c1VY379WyxBdjohKv7JeLoTqcTQ5Xi7iXqjxV4KTCv3oceRSn3WQ7e8GRYji",
  "key39": "5ryGGJ1Qc9jpVYqSUicNY62sBt3Ush7951BKfgsWSLuuqFDai3KPTXZ4sbvjEefWeBaAo2twaKsprMQhArstSuA8"
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
