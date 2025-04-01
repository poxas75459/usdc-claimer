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
    "upQ4rzEiNM7SoaDhr6p4fo2eUzJGNB4u2EHMsmQDJ2QbMDrpt8zSsCVRY4h3b1LKywPTF3B91kPfrygPbMpjFF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TcZQDNPUnsPR1xCAyqPmAD8KVV5CtpttJKefHGSZ5GJqNj9ygmfWZDAtARJTXAiaMmBK6K8WkmZCNsHsqcrx343",
  "key1": "3dufyZjMAPbLmnca7TtysmzDdbFq1DMNeK13NS35drLY4QTTG7D24eEBE9KtwEkozYviJwMFRhHLWarbnckYr75H",
  "key2": "sRfU4UMWPcqABAPj1rQvMoEiSB3H89YPMTEyj2eG5DvHiu3xMv5zYUV5XL36Mr9rz8R6ucJPG12ZNVUtY6P7oEi",
  "key3": "323Tpw84NtuR4H1q1pz8KKvdNRg7VnsnMy9DoGSxFEjxEzZ6DBEt9EpKxt8UzTckybzk3QriQiTQrcAoj7f6rdXs",
  "key4": "4hwPJS5tKLvSE8fgdqTniHwBzsKbCoeT6uiAfHuiVfLe6JWzmyCdVDjLXxrGYB7Wvngy3mXUvEXD4PPgHJpKQqH8",
  "key5": "WvTwqDj8N7ySh8JbCG4BHD8nJNP2ELsdD1nniJL8YEjMrBEvfqrR91K8ujEjtgpFwENpwjZYru4qDQ55RxCEPs1",
  "key6": "4u33eBgdKHX6SPNUCpuvQxVVVV9GaEke7BCc1hQ2osRmkMfGdfXmWzaMekQmEzDv6e4m7xZJrNZGAaNxvKPvmwRY",
  "key7": "3q9km3ivcgCMpKBuqVSJcbpByJgf6XWbhzC3NQsXZk1YgMBSKXtKBYr9JwtyvkTg3FSGmQoLVhf94YSjAibzDXn4",
  "key8": "3zkvcLyFRbNR9LZHPEq96v28UumeotEEQvsunXrfJRmBqVWfNprP6tdxFPwtwEvo1e48JzG4hs1XfC4tskQ9wwRn",
  "key9": "3k1QNv19FjV1epCJbinH38NPNrhdYwS7VVJnVpzsW8JD2ekj5qJ5L9iZCdokDwqH7jLovUvBeMiZ1cKn1mymDhR",
  "key10": "ue6j26ygv837tDtTD1KaPUMbYi9jTPZFiMuoWqG1ng2N7fA1bUqxE9LeWNRTQueYW6oMTGYpvzUjXWRZLR59Ndu",
  "key11": "3RnwoCLJ9raq3YSL2hkjAdVSxfFQW9B4wRm6mC7FB3mPEMDdJacFtwEnpFBBwuRepLmaqZdWHgcA1s4AFG1zeTgg",
  "key12": "4NAXXKkLY1b3bub3RVUopDdQ9pmbxUaqCiE3hf6daTTGXcm5QGmFSj4D27jBkE66cZa4EcQr4iSTTxUW4YWYo1Zu",
  "key13": "575QokPFqeDMdXxK4SvL7MqyJw2u1HrYCanouX4ZHynvCNKjWZypYg97Aeo2yeBX29FryuLcrNXH6XHnwEDAnbSd",
  "key14": "2A8pUpHtjA2mHW8GT2nGpukDiAbwgHbW1g8sexw9QosLffdgdjnJrBeCG5QqeAUW4ParYJ6BZCF7GgA7C14dwPam",
  "key15": "2HSvEsXStbCuywHfoZqU75oVdciDvQTW3pXtkFhE97Xuwd7517Twkur8zaEYmrbZyDC1V8u2L9GZVvg5odmqVdgA",
  "key16": "o64H1R2u2oGtXcHKv3gGeGBjR4H7tuntQxaoBAYRjmN1yn29uwkfB67YFkcHSPwMD2YuZFn1TGG4r2WZFpvBKEn",
  "key17": "2dc65o4U6hdPSG8JXmYguiFz16dBbumsqqLaiBCieWxistV9umQvCWLacRU97ebPtjgPf4t7JHeiykrak9Zd5Ax",
  "key18": "2DUUDKqXNaRk3jK8LgEdLJX95Vu7qW3TR36JLWc1J2HbprMGg7dGg7J8meP1GPRmqwe6h8nSpeRWN7CxA4hE5MpS",
  "key19": "4FX8CGo3iGLWomfCqzBjMR2HuDSsjYLaokF2UKGHHyk3YvaXvaf5zFs7Jkgho11gq7DaG85K6s4e1aMJQUCfAxiG",
  "key20": "2uxChnMwBLM1VcvDAmBGW2pkH4c9UzQoKPYLnPbaBs2iwth6pkq2x1wGkf89Yth5mNWynDyFDLqkdUT58DuaU1yT",
  "key21": "2kWH1ek6Yh5w1EqCTbrm1Wye5VHy7HnUUjM6w44JYHyvUYPJsmov7E4sAjAD9JTWz4bGUWrLGkpEfnM39522i9XJ",
  "key22": "gE5Mj6tK6evWmuEXY9b6sWcgL3AT5MpEjQfHCtaQUrpZznWSUQWQHTaPX46s41uXxmbt1HkuiCLu8sDzJf99n8H",
  "key23": "3ofUXYXuzG1QRtpXbgvv8oQn4joiPB25iaCK77gHDC1P7ZUmGPN9DeUceFgqtCQxMJNmemqNDz65a1LHcjRnJgi9",
  "key24": "6533UAWAW7NQvPbcSdTWy4fMPVm1JqQHsa5B8toyjddwaHLsFh95DYkuDbf62A1uae6PMb6vrCGesgJFdi9Xs74x",
  "key25": "2GTX8rpag7KmAqwHeo2nHs7PQDdJEq6JXbBZwtWhFwVKUQTxVY3bN6C7nzthcBNgzPKLFGsPjUuHT3aasnDeNdr8",
  "key26": "67NZVuPjXWeC8kDpmm7RKQvbPGaR8QNjHBB1TMfq3hA3LjyaVk63r9hHuYJ6gWD8mwETPD2Q7dtVvn4edbQZZe3a",
  "key27": "3nE2shf234gC2bRiJy59Pa2HW5m24GZSAmHo8uUMZPiMFXVoNBEYwmb78hxpeU6shLfCYUPJL4eJzePG7i9AabTB",
  "key28": "4VznNj8wnt4rjbphHidApHmxzsXTfMBwTAS8bmbTHQHFmD294tCEw6iyt2gVHs83PcVX4SU3pfEVJAbfSV54GAvK",
  "key29": "ZmKCYaBFg69XJqRJKh7onnYBxMuv8BFLgASy4QHNKh3NnYT8oCpGKeVgC7KbKxm42PH6ibwYSW8vvTmSsLVmbYg",
  "key30": "3g5aZauU2vKmDLtEwGMWTmdKe7rh6nYws4NVJ6n4XPjas7SFtS3Xxfnx218QTVxwMGRM157NuSf4RYGNUXJMeghZ",
  "key31": "345TYbEWFJnjyhyv6dpffhbcYEL75ELMow3yqnVvd8zceHtxxrgMWTpEiyMq31WU9dNcbLbZZ7Qx7yCDHNaUNwK6",
  "key32": "3TVfhKumUsj8ZbWywpDbWE7dHFtdeoF9zRJgBxzCWxfsyM7fgqpkhFZrNKPUtMTuwyg9yeebgLC7nBSbpDVvtcLj",
  "key33": "52Jpf58rm6osFebqjXtptVpAdxqo7UXnXVGivHZLuHnEYtkQ17p9UG8zRhxSEbU8bqtXcff2g8wePnJARS3GPySU",
  "key34": "5GANa93xbZTKePsYituePzCDHnDnsyzbqBdD7eqX34Fo9Qig2dgEUrJKtD3S5iQu5DdAjbV8esdopjpVkqdoJdpg",
  "key35": "4yaiTkMRF46Au3NDcNxcZFPDUMEt4C22zdFDc3nMJb7T8kK3oMkyjm7518RmZMHquF7wnuC1m2LpfvMU2QsZxXEW",
  "key36": "2oB6YYtnaVrc8tdtCeUycYrZdFdX2fYbYJRScMCNzkJiGPusJ9KfMjm1WH55rStzhh7289i4CVt3H9NH9Cx3Mhna",
  "key37": "667ZSfBrr7pdFZL5VUcHVorfTfAfCRDAhWXVHvTXZyux55Nn6xg3Bbojf2dNb6CfmDrUfTCwQcWJAakAdECsNa26",
  "key38": "4MySSbqBXvNZKGKqC63aTyRdNpMSxc8pxDeDc3vYkMc2gBtx2AbvfCPs3ucwPwmKGJVsECmnYHdp8pVMBpiJhoUZ",
  "key39": "354muUNGB1sRbTwmxB5Aw1vuRqDUAQVsinyQiXXTzwxyoLkexexWjA8qwTsBE63tzomEcCKACEfFsdiddodyWF7Z",
  "key40": "5sCzHmEBwf5fHCSbATQMu37hghz2Lhtp6oV7SohhNf9VtYJJrE9yd1xosmDYMfNx1RXBch3XzTtGJM8FEhYMyuGb",
  "key41": "64gDmEqtGEf5JCSvwEH31Aw9TQ8uSLd22ht5fApJZMD9fgQFsNdCrkdi4AiH3qUApCwKekzDKPBdhfoo3enAA5mA",
  "key42": "4yVME26w7vQryMGYyqc7iUr1oZfBhsPh1jZn5APr8ykCBvLL8mZsaV7h7BSsaAWMHJN5PQaBZ26s23oFEvYGGwei",
  "key43": "2njKwjUoQp4i5G2MT8B9zNcMwLxRbPwXXFL3Pzx3yUPc6sKwnekiX4DnQLsTyn84utFE8AidgSw3WuJ4R44bndeW",
  "key44": "3GHjuhj18ED4zPesm1AuZxBChfTbWJxB4udkAxz6kniCDBmUHVkwgqmDpt1yuGMRvewS3d5eU6WCKGoSxMbLKPx",
  "key45": "5dYkZkcRhjxHWXZ8mkMCP34imXZCRGL33s5VFV1mqdWj5NcAmR2SW2TB4jPX3T7a5NzRJZ4H2UoNukLiS3nyn3BH",
  "key46": "51iFg4uMSATRyZRZNgSUYeWHd3FZFz9VWHmnzaiacgA2X3WzYb3hvRxL7h7QWSP9TPALC98ua4gC1stV65ZQ39S4",
  "key47": "3krzdje5b49KttwPaCXoSMiDmGQtT47uWuQ1ZfpyhKffy5B5mMhmo4UXStrnRJax4ZYdJziVyjKTKGXa3NBqwZst",
  "key48": "2L43Ma6XB5iCy1UfHPV8SH5na4FQeiokwgiCfG6XbaFnMWmGjzTuoqJQKMcAffRYf2UHxnrGwZbK2jJU4L6wxYxt",
  "key49": "3wjZdAmpz7TeSpwsNxFVy5qGBWtretWUgrMNz8Nz45cLGfLBQ6NPp41ccEsDTnAVbbSSvpJxRsGwFe8NfAH3aQnR"
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
