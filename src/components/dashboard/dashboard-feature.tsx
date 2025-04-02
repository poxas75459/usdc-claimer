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
    "5LH5sCVp8BErXGj2YK1ALhN7DJU2wxYVYbHT4NvfKQAiVoQjDqdeS75QgEs1ZhYcVaqtEUiCaNG8q3Twroq6Fq4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XVQeLN7qMSKBRGgG9XcqHgb2goKBU54DfBqGboqWFZrtof6PeefrUTPXK6pGBHGMkgo1QAd5CPGLgQp9TBWQMEy",
  "key1": "2rp36rbtpazcUMmWCMtAmmGvoJpqVc4oDtMovXYPV5qBJD2ynGsAASaLsVt6NNhTrsVQGhtR53G5EfkaQ6Dn2Sqv",
  "key2": "3RyPyFi3ZK5sV1YHEXXPSn5afBdnGAFqDJpLT8BXNxfoK7bZeZn8VoBSEyWs3BWbWdaTsonbe5K7KuiJDpmi8L6C",
  "key3": "3yhsqpqYrLsJgAo4osg629vqRm828eNshUAHjhXgxBaxTpXMqQxu8MfgXoKXFnEVbSeuGEGnrzxWh3jgr3R2yt93",
  "key4": "2mkz9XibzaEc8T6XrarSBFywKtBJoN12GRoXV3TsaXQLr5hjcYGk9Na24CRNFyRo1cmAX4VQxWhhpq93U7cCJfBG",
  "key5": "5oeopW9tXsKfhc6udgsNyjmkCzNMThUzEfQrxuoyKspaXw4DxQtT3rH6xp9B4YBs1gPfj4hJXcDPRSGZA1sWBpkJ",
  "key6": "4tjsMdFBBtEztVNsD9UbDijdf8jKZxLnHshVmqM78rdS3utcjggwTys97i5SdQd3QNvNugefasAjACeU1bj7oFCH",
  "key7": "2kRTSZNYVTFCDyeaauXbcxnffYANueqrokbN4zxQVtKPABzp9dySXcZf9KXRpmY2NVBvstxnQMaE7JSELmLM1bTg",
  "key8": "dTSBW9VP9uxxd4cmAkwW8toMFAuUbDszTiqwkNxX2gcSznaiHf5GSQAcsMTBdnp13j81q5gEPBGLyb6UBSvsibB",
  "key9": "2coxQWcSvDiXfWsxWKysptXmW49ZFsGaqduUeGydVHVBFEanKUVLsmUesEFnNG1XN42NUpXCUXoUMJexXu3Noxtd",
  "key10": "4gemA8WfcXUUEywKQLBwZ4r9TqWAXAi1rJn6vB3qUzLEPRXzo4Xfb79yv54fpR7nvN2w5iUHCZBjcX2eWr3Uj91h",
  "key11": "5HAR37gVRJMb8uQNA8FEzdLnAeGHX9gFZr6RYNATyVD9q7tTMceurK6So6TS1h31ajvG5ZcPhphvmF6JMmwGUPAB",
  "key12": "2KQhANX1BMVXLqyfNPkGBRUjAB61NtsFXPcmHAyrHb7gN3LfiuCi6vMMcfNbkuPiBQ94aPqd5iDVUbdzfTVFZ463",
  "key13": "36yvSiZWRLM2B4thhAxRahNLEH5F8X3zmf3aA3vpiharzjyfy22C5Z1psagackNzEXKyzaK5FZCoW5dd8EdokJpG",
  "key14": "3taZDrc4i9tsaiRyHPzGLaY3rWSuE9MjkTNu4JhDkcysMk1D19gNC2gmyWh2Zk93MVoY8Qo6CUA7WYD8bvCmrtca",
  "key15": "51FGSb5z6vyKvBHibPSbeq6h9KVQLfMfsxoMafbYuPzqGBJoyuRK3qKw56fw9DFvhktvukV2s5RjjX8ACQCDjQun",
  "key16": "3zBKs7eEHi2v8qmet5zyPk1xEDedGiT1TjxNtyNJ7MeHCQo7yo2W9M4dLacYU6kXtAyBPP3j8hW1LbksxEzvsVRg",
  "key17": "5VNtrC8gFLMCbFutYNDU1VdxkTmkgNR8CEKKm2aMdUJzoV4YkbxJpepxQ9DiuMBv53ATGLFPLfr2itQmjUoquvuG",
  "key18": "5Pyz2j4a8zqHW3KFjMK3io7gwbARxt23413yTXRQk25obei7vRhyHACibDwNXJgQGot4RRV7b1FpgwbRQttvUkKz",
  "key19": "uVrHLfUuM4mTWaQz4zGjPp5CDhqg4kGNcAQCFJ6N4GNNRmUQx3KxVNLWkaZDEckVw1d8MH9gQUZja9XrLUYaXcZ",
  "key20": "5Lt1CDm4o8SNP3BAEfjwpc2bcJjibBD4BvmM1qAhX1GXANPZkLti3XkAF9Zy88f3JFYJTxU2AKmsexTtQWZg3KPU",
  "key21": "2Wyv15Axyy8EHh5RLup8vrupzyyQhFpWsL5UizaMigSAX4vYo6B9PAFz9ecsr8QYvFCMBB3eGXT2W5wRiZ9jjUh8",
  "key22": "6XdqkKQKQBUBBoaDVWyL91kN6JeL7JPx2dQdL3u5Qb8x35gXYWPpocWmbcmzm7zjn87rMVaE564Ezje9yEZMMLg",
  "key23": "3QsSo5fbvqgAeBRQU9VAXLmyVuRCmGcmK6fSN8E5rn56VTto3MnuqavZ4F4ysQ7m7srLZmptvwF8ZQfWaETjhehT",
  "key24": "5Yy6kdLa3u1ErXUqCUpjpAaL3ahpWks67mzucfyTgTWCjB4NbzfW7hm1NbGGuJkVGggfvFo3UuFqwBjjTvB4SoLt",
  "key25": "65wysj25n6ppiH5V5FL6i2dDm4bdtsTimrixFLnWPkwvJ15SNsh4p64qtn2pNU2e1p6L6NhPrUHcb3JThdaS27mL",
  "key26": "4kSEQ7KpPzqt9BHVcgKFFWcHNX1c1rXEWF5Q1sjoxXZwPMLp79pgd1bd6k5pspdTijFy6Wktiw4S7dkNJ19LVM1z",
  "key27": "2sLeYZJG92QuJTe7E8ZVN2MhY9FQctSrUVENYpgXDno3co4oiY3Tu9i8qeVfAmVJKiW6qGSzfRFRMFiuTxw26e2F",
  "key28": "2oUkkc6w3tQRvy4nCNMX6zzDGm53aTVNt14gW46YxjUaZE4XXVfXE1CeikvC9s5WpiTU9o9jzebSk4rs19vdh66K",
  "key29": "Kty7zKNM3Giv1J1jVT7tRfE43yWGCn5vB1yQwfa4etLKYuPhnjDZeJqQQWNngCVm6jEkvaU2WFSFWmoY7v6VF5L",
  "key30": "2XhVfxgPWzRfzQF1v1JaHPNbe2AgzyZPmjhb1mNT9PHBTk4bCvS7sXXpR2fLiCwWYzogCBEXtSSC9pjXdUhQ3ywr",
  "key31": "43Q4MQTByNH9zDzWzMfq8bFgSuWHLxs3LABtQcVAxnJUM3LocobMVMMPrWW5CxvC6werMjz6fNUD4qHFMYg3SGgJ",
  "key32": "3p8qhf8HjiF3QjzXFhdM8dvucWS3d8U5bKxkLTrd2pZCVSXHMXKpryyEes5wNXn32CTyLmHKdM16K71QV6oen7qS",
  "key33": "27zPx2LZZ5Lp9VCcshiT1g3SNrzqsVykFHJGMtjFE6Wf8gi7v3koNvPnMYzVtaiaZqVe7zjMiGDNxhbQdn7h5y7m",
  "key34": "YykBE8HZwkyMwYSbTDhK452taw5u9mGQH2at21ZFw8Bysmf52pP1MMsBsJCWetMxqyMSt74mLPjFxcREzTzbCFs",
  "key35": "4eLmqUteg97xCZ8NViHby66xf4YPVGXpGx3iGE7CCZbHwDu8zZPwdaeTY4JDiRRTHESgja68MpRbUxifUPyt3p5Q",
  "key36": "43cy1QcRwRgCdnUcSMAZSvWw6U4zajwcPokEYJJgbaSo22WtzZeTcKC6d8ff5FrcK9CkuTRMiTMEurpKQtEDJtZE",
  "key37": "4wmqcX4LKUCtefsBxRGe7zMiQkG4yFLLxfHR2C2eWLJQ72651A6L7kBGVDkVvMKP2UeS4y1u98HRiouFK4KHAqmA"
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
