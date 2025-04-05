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
    "5XRYM5Y2HhPyvob4gst82fubp7wn6hAHExUz63r3KqHV3KPshz9uW5nX1diWYvPoE6dBYHdLQxuKRaiQsf73KEKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zJ68GjSwYR3f35szDCPH8pVpdeCpTTviuXW8Gmy9yq53GXufauArBtJAWXVZuDECsJ28FziQcnUfV2afiCiVueG",
  "key1": "cAuTwszmJnYuHdaf6dF7uTSJpTWMcQtquRDpxd3PdovGL1WRK5yBBX1QmHzYqVdYwHFTJBVrCUfVMzKAbAD5gbF",
  "key2": "5WDhD4dusPyeECEfZrvfw4goGYqJSSr5LRs4yhRxjyhHzuUc1rhntzNAnDEE2puCg9LJXwnyiinQau6EWJ3sJ8Pt",
  "key3": "2s2UNrUHLyXhDqoL24amN8fBEWDi7KeVDSu9qBkBDuAGub3JHQEvHzP5cWERv3xZdhJz5Bq32wD3CoBJMVL9o87J",
  "key4": "49ZmvUBLzBN2ohLSBGMxZeNae3eAQ1wpnZ1HeyzzMzvxdQDpF2VVJUZNwZ5jtyFpbzRRqG8SZUVRfmJaJ2AJdWvM",
  "key5": "2tB1Hve8qq1Z8pUXmzJ9QAyJkLHvHVAZ7TcfemcvHkg3z5sppr1MBewBMU2AnV6qPKoUqyj2sQ4nzcUiBhmHqgsA",
  "key6": "2e2cESJcyu4nspb1UCm1iatGR2WBPG3HNRkbmSh3gYLM8J7TsaxHueouQgEECNN1LPuY5kVe5cV9zyeoPEczYu3b",
  "key7": "4C7nbkoQ6xYc5oKnRHdp4BmdaDzFZJHe79a9Rpf8fFVrLtXqodkhx7Lq1hWhDHmNKJQ4xwUMUfWecUEQbW6iPmd",
  "key8": "5c2k82uo2RT2hwG9nVRpdAtcBDj2SRiLJZhRrVz1FpFNKr5kbdX9nomyr9mXnfQrQqki38FeSJcaxesUFazUH3iN",
  "key9": "5ug6L6XgRFxGBCd6Z4rmbfAkHkn2ssPskYQiefNQfaTtZZP1S9UcANhyvdu7Aq4x6twEJdu12VA9nsYxSq6od4wy",
  "key10": "2rCSG8RF8C8AdFDBncZX3tNfnQ8zSRQoPP3TW2rT4jZ3bkJEs8BLPsnZ43m1tBiKjUZPjmm7hrndATUdU8vzd1mx",
  "key11": "2ezRJvKSUsJLtCc1oqzFiwuZXimxpyiHZfbqDAvAqP2wV9mTPBC2EctKD839GGyPXFDYprUUbchx1RpuEA5hjR99",
  "key12": "AsosZ3ESSevYMaueQcSeVSZAiSYVmS3JzWFSv5km7KtcfzqW1NrNo1kkHbejEsw9HYGYfzKmQARFhh5anB2DYbP",
  "key13": "4a2sbxAkSj1xAqm87vfEDMxshK3HxokCGpX6xeXnFegor6AkqiN6PPdFxdUPysG1rMBaG5U3F9bij5xqW2PYe4Gq",
  "key14": "3APuVW4iz4UeiP5oeL6x81nKPXLXBrzpkGwMfE3QzbFMqvXz2Fpvc6N5zcaZzzkWeRKnbkh2wrC5HqdoKA49z2qN",
  "key15": "hfjHN3rmEJ6Beutdsu2CiM1v5KsXxxfUcvCMbCW8uM1qPG4sjusj8mbAxcppELgWMU6Ui6wesH9HY4Bmpc3dztr",
  "key16": "UefQsaycw2151bVqKtVNAWcW7dDaZPwoQqpyLJddszAWb4c2TdBeznHeLBtMcfehopPq1cFZLnnXZLtHBgMtJbr",
  "key17": "583B5TxwRPJ5zABhWTpTxxYt4zCzeeaMSrmpf6dhCN7iMXPvxn1xvtPPXV5rqnWdh4diALmuPCVSSCZMXUbZap3D",
  "key18": "nMHLiz81h5MJeNuP6nXVSkyFxbNb65rAQnBqMgCYVCTZVWU7UxJ586kNwVS5ToWpq5rU69jmyiLSftmM1LGneU5",
  "key19": "5LA1qPVrm7ytbMyVaKMtU2ZJvjWZi9rX3RfELSC9oWArKCBizBtgSuuXj84GEvgyoJoNonXi264h9MxYASpVE5Lx",
  "key20": "51NvqZbztLd4BKuWSm5NEJvGVGtmXir9dp2MpMzFRvjwv9GG6tvW1eYL54AxNn7gA4S3mRx9MxjzZANdRHhQKJMR",
  "key21": "P3LLUePd73hAdxTZMvNwwcn86HkVDMwnher9zAanVmUuvzKuByvuDbuakM2tfuSDcLCceuQ3EcWeaTFp2t6BtD6",
  "key22": "1bWf2YuZgpuVfixc7FoMnwDehi3wNf63puKL49of8eByE68UidGbsS7gti951qJ568JapFKTkUHc6vw2RHQsviM",
  "key23": "4kBj6xTtQWMcbMESpc2v9e7CvTSHt9urinCZK9aieF8x9kjHr1g2m9fyiSvw5ism7T2g4eRQ27hD7csRrpNZ55mt",
  "key24": "4iNkiqggLA8LzauAbSaKmQbej8CBgVsDhagJTxJ9ZqLKNuX3EfSKUK4FnBztqaSDjcTa2gF7y5LAajfCF6RCbV6z",
  "key25": "5tZVGtP9kwzfBKYNyJrzvv4Snw3Ndas6QhcULSXbRwdTUq3dF35Fd4hoyoV88ZvSHT9kfxquVjGctA6kNpvMixuN",
  "key26": "3Gxj9Gtxd2Fhf4Pt8ToQx21wJZ6t3HE4S4Bsfrv8WGFZsknWZMSAAT7mLMjEGxv2gEF3qgPxjvrRXFgZ9vhyognt",
  "key27": "TjBM4GGxYSk9A8M9CFKj2gngPE1R7azd2pf7w4q4yU1oYg5Lz7FB4dWQ2y17GuMngE3gL5g6zruPoAdZaXTk8J7",
  "key28": "uQgafTUMkoksPVXjjJdmDN1ZZvRmmDax9PmRyYTEsV4Pw6tbrFmF6YwwfJ4xbJPRr5sdg2n1a8GayEWQF6G9BMX",
  "key29": "2LKzGQqsatPWhYbPWZpX9L95ZeGLA9p4dwW6h5nCGSdu4zx17g5R5jjshTqBo282UM2mHXiqik3YtWoasGkjVtA8",
  "key30": "3273mapfi9a16AX7snsBoySaHSfCC9XBuhevmyqB6vd5mLwzHZcVge7pvkPPyqAqcfLc6biU8JPEhXW6d8fEiJr8",
  "key31": "2S8YPxF6t6BGLgiEucqrNJwDrKKj1Ex8ZboyBQd7G23fP7ReefrHZXFssgX6uCKhwpYCp7ZXgPxPm6tJS7Qki27p",
  "key32": "3HBtHSuhHyG5Zz95FLcbjYmCR4xMLywiDytAm2KrjxvyUXhuG3PJ8Ye5vWiuRTn7UfWuJ5y17Ny1Tg9XttM6BEvZ"
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
