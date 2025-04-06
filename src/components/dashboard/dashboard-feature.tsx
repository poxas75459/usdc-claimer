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
    "3yLn53BzFaEcoVNKwVKex62zJYGaoccQcP9nWoHmLiWjghPawS5UVReCCw63NBjxcbQFYuhYsG45No5PRFMDEd2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jqtEc6htq1j9vDQfZQG1UUKyUa3MQcoSNwuZ7yiU8paE6bmccrcxj9bmg5HdWNWStfpAcMiqNumG8u5cyCsvvS8",
  "key1": "5D7sEQp1bJWcuyy11xEUUtqACYsbFDXCTiyixLnwnSCHUbmWLQLKHRMp3uJem4uuGrbRe8Fg484fRR5tvFYo6qRi",
  "key2": "59KYT5GWZHqhN3ZfYRJfqsdKayTTHg3p8kPBZL1s3oSncQrmFqEWgWJcXbcNMFdG7vmQkndwBjorDsRxd9nXuKh7",
  "key3": "29VEf3z71kZhHZnFLf4Yd7JVRY85irYPNcBG5uAwTwfEH12cmDoxqzyascy7swnfZq4MA2LrVtMDHBdSrgSgPoLG",
  "key4": "5XhkZ18W6o2XZoG3NcsKW7MbYQJM3JcR968PwB5oa9ZvJQq9APmtx6AgXsUke6WQHjYBPwVcNuGhXG4ZbSzkHw4t",
  "key5": "2QWZT4VxANyAzCmaiUMQbiU21BEf71HnTK8fy2cpQA6KqygAbntkpUqK3BvHMBb9b1dB6xTb2SgqsgYXr3zeYUpe",
  "key6": "2ejHshBxxRhVgioCfHTxG3Bz5ju1uF367qzBePoRA91adFZJ3vy6DDR4jQ389TJ5ronXk5wiW8DEkagkj6KcRXgr",
  "key7": "4LSuRbP7fiCEEDeNew587REHphNsVQfQCMQK2VAiD3wpd4r8FuDApnbK1v7FWFNA5t14rnPaXyrgB5bSYuGaUAKx",
  "key8": "35Tgw7RD4HV8wXWzaPHdvCDkm2iuSiVKYVbTg6TLR4SXSSv41E2Dbo8DSN3rJFdHXKxK83mP75wfM1YKNarFiNPE",
  "key9": "3V6aEfAgfJ5REjF54B2tiEGotWQ1hCXVmRUGNHGVTfaBgCafLW4pFdswo4UgXo3e2u9oTCPtks6mycufMUXytK2L",
  "key10": "26VpVCQEzMeZK3PowiFdJ48qHSfhNYei9FRd7m8QcvN8wiQPgk9Z2rgGpYCMzRB19tUaaxWHyDT8NQoGPBK9VJni",
  "key11": "esi8gL1yMfqEWVRbytzK16Q2gtTMBt3GnbnAEyi2ymqTsDGX6r4QmZpKwG8XdzWkiMXU6QzvXRe9ttwpuESHB1f",
  "key12": "4sC6RAC6cc4uqHxwoEjav1dqL45s6RqjdAGpEg3vq4KfEpCWLvobN7h6rir5jhjgdYQgsofxdP2NrNXS5xS3siMt",
  "key13": "2mBh3WaDzgsbNHUTKoosL9BBCRC7aEJwSYHiXpjaNypZ6ygrxPSR5dmx8eJZSzQkYX9eWc3yy4ZnjGZCp9wKhW21",
  "key14": "2S3zsutshasdtLn4RaYptLL7GAJ9UgGyymGzJkCaZSLi7JpFnvBCuJC3sBymu1gFE7WefXQNK8HsDuak3ENHZWxZ",
  "key15": "5FTVioJBRdGiS3BKDsc7CaGt9WtJKnZdBjRxZYE6fxVCFE1JDGbbizRAS4Z9BWYDXfPPvnTHru3wCQqJLiDL4e4K",
  "key16": "5w87epxPcdcbCBZwXVfa7q3d7WKw862o2veHxSFfYjYDDgiGQX9Y68dX65iLpbvZnYTp12ekdexhbJ81xumAKZDN",
  "key17": "19U6dQ5bXrGptizGedzeNDiyNVVMLawKQJ19mNYkDe1gtic1JtrgrD6zFe1ttaD6yhvQG1YqSJ7SaDDPV7huEoq",
  "key18": "3LH1Rh9YNJiGg72pEpKzYefCcLSd7sYSJWbCgPUtwjguwZiubRV6mnrhQNg69PHBc7xujN9xMXTMyuAYhx9uPyd",
  "key19": "4j9GCUgpai9Gt2hdEdkf3ydkDKzQZMF253QuERdJY8Xxa9HTmSueZ3SFBpYUWZ6cV9GrY9N9RxAsmXfUV8GV6UGJ",
  "key20": "25TMWBBGeTsvFXSkUUu8uV8xjYwWS8amffRBQ6B3vbgN6kqpd68mLPV7J42WtccBa2Mqe4hUiuEgdxci5xJwhiq6",
  "key21": "2Rc83ajEtNSL1jHtB3CCnudeex9NouFgLYm7imspAp7BkvnLRHRfp8xVuuQY96zAsiBTTMtDknzCRHS86ppgNuVo",
  "key22": "34U5kL9AGwTZnr3btXJpc7wxmNaF1nkT97YmRobcGvRtveK2cq8gpF6TryvEHwHNTuA7ZCnc1JYwbFtksAY7gRRA",
  "key23": "2ZPGPVTwyqLZngx9fbTQKfaQG42UDTUniEizDJw6LYaxkLAqa2xiShjS9L7NdqJiDsWoZ5zTohgSJ8JSpjLW67Tw",
  "key24": "2vSpbvh369MyAzCJgTBFeecQYA8qyGeHca39x45tUb6UxiLSaAU8EX54jEgfJ97sAwe4NknvmmKbp92U7ixiJ3kR",
  "key25": "yy4E5o4y9kaSUhrjGoNXQJG4L1VR9UpXpncBqWKrcGXRUws2QaZi5dtwXsTrPTpZLKwahb43yKdwnUERgtB8xWL",
  "key26": "bW2HsGH6rDDYLjRodRcecjcp2mTpFymuKFSUfbvGmoFMAgqA6bqatGWJjHbF7KGMwC5L9TzEJC7GBs5k2cR9K3y",
  "key27": "5Y4ktnR9wENxvhTtW5oYbKvAsNPXMCytJW2GLw9xix2S6sJriCS4Sus81YR5vKpCUv6Gcx6vMmCFfAheoGmXRpjb",
  "key28": "61uiiDXS5hzVkouc481eET12xcQU24HsCYoPDCFD5zv2qgJAdKNvDGSwhh2mJax5pD5KRBL8bKU2CpKcNafyyXyr",
  "key29": "ixjMK6WEa69PL1md46pLxLU8AUM3tXfZi72AyAY4fSvQu6XcnoG9PaeX1sYRpSys8oJi1nTsVjZWv8Hi9U7tqGq",
  "key30": "4BnS5fpfTbATx5G7vm1dmmnfh7p2bDfYijH9gY3WVziPLUk3nG1eWnj6xVWjySWfsp3GYMJamsLgTd219ZL5f6Yj",
  "key31": "3VgBwTFbso3U8qX9ezAAv9n7sPUmStCcc5YoqnuhPbxkCUUuWe6cfthfFzs29yPBZJqWMTtTkmigRqkQAvuZoFT4",
  "key32": "2kDHieFxCvoTuHtg7v71kFQfX8exk9Yaxmq1p7NGKjPKvPtEbMVqdRWX5cw8PYSRzm14UPK9NLsmDVxFyXNyiwFb",
  "key33": "3DffQcmzxQY9cRzacNLi818TV5WwkAzYQ4kH7vDWRgrXyVV5bj1f2TBuT3enweed5HzpcQCW2LTsQvoyuY5JHLC8",
  "key34": "5652gWzSuVv39zJv4nYuxhRcTET4TjKJY9NHPz8NGiRbhZ2Qx8wTcsb5QT9jcuPtFzVpJHhquRPySbYVJ5tPxSK1",
  "key35": "2fAkHrjbyXp329zLoVJVnuowSHMvmzcmmSWbayLKfUD7yGhg6fFKXxVgJR5S47CPjQ3h8mLsZZwrbpAPcVxicXUs",
  "key36": "5kWEop6savybJNgvgYbgqumwQYJ9UTof8TnRQjK9VJkPjtjpjgUUCppMgqbThFtUeF1JBwaJrMTHDyiQdJbCuaSt",
  "key37": "2Fcxvzut9SezmhPHbhZwy7LibRveYy5C62QRXjDa81GNvmxFHhzCCJhpjh8YFfFqK6M65mggkMdjKDW625daQeq1",
  "key38": "5qt2ydXdV2pBN6HHtVHbcZfvPX9nTFhW9E2znprdSQQW26Ny2cEp4QhLoqzuschp63eQxQjJXgKTxi1UfE3rtcmE",
  "key39": "2U3KpSTfP8PYb82XMmSoWkyPVE8Hcbu4VFybySzaesWxA374yHBRvxmnUFHjv8qzhV4sJicHBzV4rJ7E2tTxXX58",
  "key40": "3szP18RtFokyMq7q9g3w5NKDq987LvTPmhrP6KEF25TKBEP9tJmBxDT3f3vf8ppGQcdpEWRWfoK31kW7mzbQH1Tu",
  "key41": "5c5hqfqiAa8mJKGzKvgauYaKUgvtJe1qVvpfu1uHETi8jBypStU85gmspuVM2a6tepijb4UnQYfzBXF4xX2JfXdD"
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
