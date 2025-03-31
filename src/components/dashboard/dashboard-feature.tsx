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
    "HTLeXU67NUV73FqL8eH7D99E1QzqzKpSeCYBXpmyE1Lk5QtfVBmVotuw4nAwsYgpyuiyrLTJ84oBCALWxewxzH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qWFRoWBzLMRdvi65jFRsE675tjXErNsdViatmRj4WAYW2YQXKnkocB7DginF7P9GkSRnWgYmcWNad78iyGs1SEc",
  "key1": "5ousDkFhsdWkyaeKypYiNRGi88YWmfJoMykioXBJtzh11au5DReAHdAWs7N3J4kzph7YbJuXXLUZVywpHtt2S7RA",
  "key2": "3D6ktTwtRJxnTjxk7maCAczu8ZXRK86wEbVQTdMjkvPp1kKEPyaW8UFjy9arWMw6P4BTSVvq85LGJ4mNXhyqBWH7",
  "key3": "3BL833zCsSW89v2gUjJDzyjgJMGonBCsWDXhsdNp8ZZJw7BgU37NE6TFmwWkRYuA7j9E6cYSyg2deCm3rByFBFcF",
  "key4": "2H2bcxSBUtkqMmFauZkwcMTFXUcHFX5xkjuA2mjd7sa2S4oGvKNVfA8XHTCyyU3VSMTRgZStaAiSXQ479KFQJiE6",
  "key5": "3U5mHVotnUrQUgE7y6F3XMb6tqevTFR2R8GYsYe8L1dWiqLbofUxrn8naNn5qS3Je14gVBBjd2zQhrQxurf833ig",
  "key6": "3WETZRxL6DvWeH75AdTNhMvbZht54NPYsmWrZocFMUth4WAxtmmgd5JgyuDgbQXAkihuzttarHX55azkTv5x8X4d",
  "key7": "3csVDictw8aWdE2eQkBLLxWXbjBJMn3QmybakFcmz86LmT4DPNCmUGpJziCDTL5QCA6s9hqHHRrsu7Chk2vvQVmS",
  "key8": "ZtLdp1F5Qk7zd4VHrVsMmZi7Seiraz2vxuLVHQm13T1JnfcBHqqpSYnWcHy6MxzBoHbU1kyD1kGHffTHc2eNBUx",
  "key9": "5Uwbn3HZE84D5s3WhyDHjd7m1g3Pq8neB9qEreUcaNJeaNP2JBF5veKepM3aEyDPHzWmQSMjt5GziuEFQPT2rPF9",
  "key10": "2NtfKS4WXiAzptPMjjgko5grkmdMmpJD4MEBf7HXx71CWdn9YwufyuTN94a7vktFq8Uag5biHXptUjZaKg7YJMy8",
  "key11": "s8DALt8Qb2JuNgFK2CSrA4YP4Cep32EHKGY1HdrcP9jRuLjAv4DZHzw5ADjBzbDP7d3UGkXQ3g8vjmTXA8eBvLL",
  "key12": "DpfgFMAEc17YLzSEyQPZMpEq7ksK3AgT6KEQTMbVQ4S8TxYj8NmRABV2MCvvNr1KdyhAzzQEttBwpHUmPMyfjNL",
  "key13": "4vpsdBgNVeCDmKBhCgF8WmoTXsGaFrtTwA4GXsaKQXwYUfvsrdUmYFHDctVEYSipNrTsYE42CMX54QMmLkxKVQWV",
  "key14": "3x5KLZdtKtPUxNo11RgLGXpNZJGiXQu7sb2BzbSrNNQgVAJbBnqjfyys1ev2mEgRoEKsd81pQuM9Z9G2HnktjnST",
  "key15": "59Fr8z71nFW8yV9Lj1Mu4Ps42GYBTewogTdRw57Pih3TW3viJoDDjR4uagPioWm12ZoY6RFBoeB9vcakaFwGVKD9",
  "key16": "3MmDTDHXAq6kmUqz7ur4qWF74sMYwUb7tGgjdWdQG1DQB1D8FMH3J89UrUi15qxCncyCvMrhWxnVkf5ETCWhmisR",
  "key17": "4isK6wrQZEGVPjiyhNDJ9XEHRJTKFAKAyahqf3tCHrJbtYdM6pPY4ukHxu3YvVYL3e17F8g9HqPt4ympyzBXZDPE",
  "key18": "49Tau9JztZtUyXz2FmXJfwP3uNwUYbWKKW33MKGxNNGFbKooyet2APPedw7qYaXzvAYusQc878CRkjxh6WxbHcz8",
  "key19": "4Tuf3BQW2pQFnsbqmtRGyf4XuHQra3UeSVotp2LXkAbFwikbdaxQ1h2yRCuDnb2xN9A8Nwu7t51uzEq9rJNLR573",
  "key20": "5ebkbr2WTaporKeCxrZNR2SeoxVY9Tg4qt6Zw4bdh7z2N3gXEhZG1v7wqSTt8QePQiPmYei1GnChtgq3h1Ns2j1D",
  "key21": "Tu3nYRSbTAkJuY6NE9yJmKrTrpXGEdSmjnPMMhBgDAxq3KeXSnAFXqDPEEnCuErD7SvSk8FwyMWo5K3ua5CpAFT",
  "key22": "5yrXyF1oXCRFUv3QdaYPw1U1bAvTxYFFuguS5VKuuVe8pY8jRUUrfYnNQRsEhZcmdXotUugmtaTDQoC35VwfLaQn",
  "key23": "PtZsjqvaecwb7GYhZYrifWqi91LauXdgwoJtyL8Q7EhJZzDrso3nkdkQmKF5zqVZerYcsSvcWEx1WVGwem2DnBa",
  "key24": "5yPQBmdu1F8NfRETEH4MbUduc2y15iDfXq1fxYzbuUJy7824RjcfM6AFXwqKfhQXSzcf6Ph9EiLBbc1kkWqCWEnL",
  "key25": "AmNCq8zPyPjQW2G3EQm5AC7hYz9BYhhpX9aGNBQ4HWCisuJxQFnRtH9AjtDCetVLVUGgiR1KbqgxdsZTjgBDFaw",
  "key26": "2dAnmBNtrcP5LgAVW7jGwh47Vx1wKgAxeQwXVidxmuWShAvbzhsLHdeaHhSxgMdf65iqKK7iXnwqCoS2mtHant7f",
  "key27": "2rtjHkcudmpbWf7uZ1dn5DAFMayPhT7m224abHuSPcbXb6wW6fPehSWKGYimRPc2tpTur4JTWJVbQcdt14V45vZf",
  "key28": "2QMhVLvzW7wfETPnrBci8kh2Ja9hNfdQqn7rNyz8Fc3GQUckb1qYQ5Wh5ZbjQVfJcFpDUGj8C3Nk4Wo33C6hTYEn",
  "key29": "5wustYMa4wbQRMo9h2SFHq7w4NaRVWMCA2N4nsnjUcWUA2nrjKtm5VBQCQxHNep7Sj9EBPwLc3uV9TEzCAJPJTtp",
  "key30": "4WYhvcKiNDXnNxwh5Qqd2L1aHLSYGs8VrtgmvJ2tnu5YYFX8niWrEcm4ttTE9XfMQZwiKqkex5J1NwK6pXvxRVCQ",
  "key31": "5scJBc7Ax7n5Vf8Xv547DhZ2YDMKJeCfJjr1tQR2kNfm6MdCL2KLu4qP7GXY7zyQYFfvLg54AgwBV4wMcBNQ8v26",
  "key32": "4TAexELBAyBGvXH6a7WT6qTgDgpdFUV7namQzugqnnAtaU6vb1st1rqjKK3PmZ2SG6dcn6n3wJiseYN1uT4W2eQE",
  "key33": "377M4tQ4KJxj4s2h5M8mESsc6Dg3F1aXaKDWeK5knCjx1z9ZZddZEBwkLWKhP52v1jjJrGXG5yMydwLAJ3Fq1j5A",
  "key34": "4ni2Qoi8SGHbKhrbGLggvTPS6NpsZmiiBhs55uhU2f5mYC3RxGpTCoFRkpA59LQKnexL8pMnYBVjeoNf1HzUxMAH",
  "key35": "4frG3Vm2HqUgcsXnzGkmH8HsC2VpxdHpJAXBmWKErd4wR6Pjbo4r6zkohvsYp9p61z4PaoW4T2NnRNaoshXa89Vm"
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
