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
    "2pnUfrqfNf8LhHhQysJDogmsp6RXgahELHkkwz4MHUHp5PLjigiESeRnjWKzw913m3vka3ef8bPBTwTcfjgE61Zr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wjt4Vh8amgvyx7bEvBfa4P9Z5gDV5UoiSEB8wE9xND325cKf7MLycepyvpXLhKo5ta2Jg66cZUCZuAVjoq2jvHU",
  "key1": "5wTpWhbWLtHFs41Pe5CAFxo7GdEM1deWGbS4KYrAwcrDJ2QBbaM1u7uuojFDMz9UWXK7gp9xoHoJR8ASNMcdjAVr",
  "key2": "5G6LQQe2jMcjPCCvbrxDDCdR8a2Z6fLsXF3s26WvQoRbrNxWtYua5VQySU8QuXTrBBeDpGJCRQWbg71bsNbwftxr",
  "key3": "3S4EGyJysaofVwmhvbnLW7qaoEeJQGCfNVKzasBQ1Toqfkpuin38jjRkGrxD9oCY7u6owkJCz1QViuknV9WNfLuB",
  "key4": "2dxR33Y9SuuZwnqUbECLjC1nojA1gw51NgoRNJ3CUgTviMdUVcP4RDtDUqt2Un2WuPvbQQHu5hbxebYvfPPsqGG",
  "key5": "5z6y9Mhfj1RLUy9YZTdoPV9M53DjEYoKDFu1MypHtNFhEXTAVKitksyLEE8M53zanfQ5VxKYEFxwxPmcND3otaCA",
  "key6": "4xoNRy1Le9UMwVthqtsF6UnMGemmiSfnarkmpt6KaBa2FhxfoXF7W6y7knCK66NTbMdkvTqc3zYcGt6iE5X1Pi8s",
  "key7": "2nwM2fLgpfhDiMKx5cobddovjsq2hdFTsga3NVzrPah49tCddM57QEQZtuDePCt33AzsdiffUtkCDtmjbqUNtETF",
  "key8": "4GrQAyQMo4Hr93s5hryY7SFxgGNWkYcW5GYzwBAfcJ3wM1B9Y16AuAD584oEchFvtgZ5814ZbDn4jug3AmRsTsS7",
  "key9": "3o4SeRofrtEA7VKDj15UnoFzWeDFDwye851uxfNeWnAgtZLtncm8Pm9NU6gwiQjFpt5v6LpsFKBi6BKcorKZu89k",
  "key10": "3D91F3bVbTNLnU1iJ9A1kRhHsZF4gPn63GTucvYUsGsxig2TnkYdAtcAVUsLUwmWpiGDg6uvbcHr9CNTK8Kx6Zyp",
  "key11": "2SwFsTfk7V8cE9YRgn632jvR5YUZKQh54jSaf9nAKkHVWaw1vw6azd5C8zgJuTnZMyF2RYCasTaALiJLi6Mopu1Y",
  "key12": "2fVzPLJ5XpRaVEYA3a4VNdx5oE8n1tLMSmS8rkupVMzMfuEzDc511782u1iSMHpq1kktchLKyoHVHmw4UFzjAZVn",
  "key13": "3fR3TSENm54UtAYh8tHa2zZYof55WH5FotHW35HbeGpFvctd9J3UYJdehRaE9uyLiLzasZp5Z7Sg3fCRj6kHJxjZ",
  "key14": "5KXX4mx8smRyEJv77hSHjPyGpQu54pAn8MDAEhrG6Gzca8yM8XXJJnqcEU9zd9o52UkGN8Jq3uKgaW6XwtZdeoRo",
  "key15": "2tLmbGByuG4SJSridXD1gCjXJzhh3pbf7UQjVQKWD9BFhtHVp9iK5j613xaLSQgFhpQLbs2Luzqu3Rq4zSFjqbWP",
  "key16": "4sJFnpsBggeCak7i3KqeSmiJxjWvdDPLNnTdzWr4AMxt1nw5mH1YyBKfHtguFCWXrGM8dfwvyuCuVMwu55tHfGsY",
  "key17": "4i6QYrBC8oVm55499GVrpNL8obfezWK3Ame9crQzYj43h2kFzFEit6dDvKFWNipuLGiD3AJxS4ryXx5bx1t5vbr1",
  "key18": "ZNQVdYXEf2Gdbt6yAKdpJ3K6LvQh9ajiidSoqXQHSy38x1BTiy492C4nykr4AcowwqkNw1h3bQBii1AKZwHFsmr",
  "key19": "47XtHGQ4QCH4wCa6zdSh4nATm2bkj6dvoTFFPzRPk9LCLmQMeoZHyf98zuaapyYpNmJtwjH572T9sfQGNpSnWnbN",
  "key20": "c7NiKrEdtj844WPfooNzd5Pdz2Hcb1KJgmva2gPsm3jTQxHb2g9hNV91rxYEiJJoYXqXWLgd2KgNY7eBvXUWrCA",
  "key21": "29Hw97dEttMoSaWWLVDD3QzDDkuatBe2S9N5WqSdU1t1T47NvwKtSUyPcxFtUm4MbuzhX6Hr1QJfaD9aYHZE2KuB",
  "key22": "4ju2LWP3svWxTS92uXZaa8Ctsi5jauiEVQiqs2xTUNZnxTrqzn5zjqHgkPomqsXjM4D3SUp7pzz7ujFadSzKWtLU",
  "key23": "3baWXDnjznwN6RPvCbMh4BhdTmnAPmTuHNsWN5pQNpBHGzuk29H8hddS3KZ2U6Drgfb8P6SUAhuTT3i2A7jcp5GB",
  "key24": "2fMkjWS28sugQNkcfcBs1Z9pkdhiSVShXoY5e6MmGgo63RXykmf6NexNpCdcG8VcE3XSCuqDdoceK7mw5CT5q4QU",
  "key25": "4R7eJcx4FHvekHk4z1W9h1iXpfQJVsw27EkbaviKa1dYZWuzMbdF3nhwfdLb1V4Ycg9GWDjjbLW7JDQF27Yv6FQt",
  "key26": "3L59PVWUe88NfAW4SbGo6JbqkexWifpBceakQnD1soMaRHFsY2w66QnVARCfj9rDTvdWfofMCn9JZAuVvze5Rjgf",
  "key27": "3ruek3mAbfXqt3MhToAEQjVNidRmUJS9gcRPUJm7PYqYZV2RdCp7SxtU6HcJLnd8tEy55MpkySeCxdCYASYrqkXX"
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
