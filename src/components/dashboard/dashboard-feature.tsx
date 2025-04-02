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
    "44LkzbAMfPzCMTsEb9p5KZtf886NyjwSoV2voqBf8LhXCPAvoZyggGdqJAm7Fr35P4wG9mXqRsikMCTnf74i1q69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "429ZvEMfxFy5FFFzjCVZfQbVmXGSN2afhXobtWSHdBXJAS7FqeAkixAKrz3S3zFEzrG3UgTsk5FVUYoxVQk1R9ak",
  "key1": "5W1wiiLPo3QGVGam87Xmtb6VLVTUfKQn5hNMQYx5PdDxfdyVqiobdcqg7NEartXxU83LCwxm8aAL8eCj1Ufmx4YD",
  "key2": "3fQQt8kpa3wFmJAqNuffaqc9DsqqiPcKRaSJw7VaCufRYSdg3xGz4GNYP4591ghcMRX66GUQ5UoWpeTL77Hwo3sY",
  "key3": "3m42vzFVzrBmRBpDB3drD67H9Zg6PcaD4STLxeT17QRUYAwpW6HW4hfei5i5YjTyqkfEMH6UQZ3RusmqiQqPUZrr",
  "key4": "3jaT3vtktc7sHtzTRgyYeotgdiiWTrekcEED1r6T4YhCBHehNgNAZTF5RsqTpQDTfoMkVUYrByAQWWSvnQfp3n7i",
  "key5": "4k3Ecnq75PYn3PM6cfHsqNzUuRHC4j4NMhj88ouQasDT556wrVwJbgQvMry7Rdk3FG4jBdKVS1pDvMZBWozrLKaU",
  "key6": "3kjQ46x73xtvFcRwYKCbWpHLHWb185gW1JMDAABNLH8PHUFsrRWDdaUaF44hpF7CYUfFkepquEhjs5GMgdbEp4Fd",
  "key7": "4AjHP6wkiEfoKTr6TjidWBWQf9aenmJEkBxbEY83N3kKtJjVkXedwHGefAzYYuq2kgoi6GMWobDH888Eukbz4Wy9",
  "key8": "5BJJbg8eHfUXEDLWcwP7kwd9XpwLH7q4TAEvcTfU7uwhXNiZzeYrsq3WfMCjHmbsgMAZqd2PRDwA2mrW2KxfWzK",
  "key9": "5SNptA5xjuoJyevz6DT6jrTAmExnXqQhn1kUNBizUQkZhBZbmqbCYYsLSFdz45fcgaUZ1xuUmZgSWmLfFfNMM3wW",
  "key10": "5xrfwD1w2BzTzFAvMhCdDCmVH4nCVkxsATEcRGvtEN95Kc3G7UaSLND3PySgzXDxY4hd3T5DPaY42FigGDxXg4Zo",
  "key11": "mECoZGKojLJJrrn7MvPkR1QaB2C5d1XDZB6sEmheAVrBUnMmjTM4Tym5c644ssDNDvEkkSrXecwwKwueTGXd9Lx",
  "key12": "31LqHSYGrsZJDqGYnJ7ShvomPdikmdETQtRB3GcVfxS1iUgvLcYLG5MZWC2Eo8NNVrizBMhZYVktufUbvBVzWbiV",
  "key13": "2rjcfYZGqHwrpNU7nfyeoorSMEq5HsHZD858aqmEuiDNKMSmB2FPS2MeJR36vQPt8xeGRQeNQZJBZza3fSSDpGRd",
  "key14": "4A7kBKmjxKk8SF4dPkDX9hn94M6ZbrUUTVNZixmB9mrhAefgcyZPytAu3Rxdsm67UMpK7daT7bNTdRPHRxmdBe6c",
  "key15": "5DjnWZHx5JpFwU2rZjAJ3qrpP2Q75Lo6BwP3F7ByqcLFd4g4wU4qdEWMsdSkBoK2U3ABAhRhC6rh14Q49GBjKejQ",
  "key16": "362ornN9FF4GkRRjs9TgA2n3SyxHJ93sDzuRAztcFzuqbZtYTtmU6GTXeYhUcetuy3jtsffgWaYDhjzT8rt66VAU",
  "key17": "5eBYq2ipyeuSZCop8Tiq9ioNQmHQz3oy9D3kScMyLtespZ3mRrTm3PPHTE7g1GwAhBoFdn9fn86Ed7FH6AmMVV7q",
  "key18": "3ZQZpM6UfBeQjwb15AaCvqbskCn6Y1wwNxcSjgDpbSLBwEYGbg6TZymoqPGLaedmq7RYqxUijM679F2W4mMo4Vvt",
  "key19": "5CRrCN9c1xCTih9szozvrXuJFP9xWRZNur27h422uNAEnr1TudGs7zgeyvhYyYv3tpRmBHjc7ivoby49VGjg4b4t",
  "key20": "65No7RmTMjJb7U4nHvfjUkdAQpRHtm7ANJpFeKR4txnJjG7ArTqsiRniaRaY2VWTACAN4oJzPcJeaK1GWEo1SBr2",
  "key21": "KQEfQeeBpq2kejspqY2uTv6yak4HGr7DCCR4xYHthFtZqmJxFtT7LVp4aeVHrkcD79QJ9t72G4GtRX67zVfXxgq",
  "key22": "YhcCMuiPPBd3YcTx9hadHTxqoRByxBA7LiqB1piPrmAKbrzZC9PtUVJ3szuVJBC9U288PUxJDUBcd76Ve5QecbS",
  "key23": "L1eLZCVEzD4FxQGEc1Wa1ffdnQ1QbBgv4JLUufc9S5Dj77kGrhpq5GGqT4tf2FhMHZcBD6mW3bnbRe1fiQr4DPM",
  "key24": "RNjsRBunnsAehfgUNdcpeMtbQ3W1uhpRVKCsijp6Dijtam824S1eSRqxoct59HzN5Df7LrGEJFF4oWuoRSwKz1z",
  "key25": "fe8yKQ5bqcF38Rkg6vu68zeALsTsnqt6zXKhV8eGbiQQY2xzLNqfBuWRpKn5oUpCjrqfHK1YnHr1TLE75Gk3ASh",
  "key26": "5NNsxdB17j3TVeBsxuGc8kXRAwPi5YJZctGmWGWdd9jqMB3STDYKVuXbaBkLtMgUHEHDY1fiGSXx4Fvhy65tKFmH",
  "key27": "3HvmHCorfDuGiKobGJmT2fVCnYRoPAJiKbgRoSNdsczaeDPeN5RYLZa8R199qTxaoG68duErQmZzB9VVLcGFMCxG",
  "key28": "4qszqhmbSm1wdcfzE2HoWVeoo4uqYicXLbQhbHWJig7BsrkS57M3tpXEdofZRdJEPgAuPS2n13NceAh2FanPzYpr"
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
