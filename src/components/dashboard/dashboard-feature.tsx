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
    "25pyim1nmPtdcigkGvoXsQPJzx51Nh1QroCMGJsAp9wmL7m3ApMexjZzRGFYoQ8YZHjJgaSAYLrsRkb5VPqBG3Yi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cZprd5xUfKxjw5ao6nxT3NfRKd4aTPbLndgezpUrFDH2mmjE1hikwqA3he8FJsC8kaPLy1fXUqSizdpLb6oW7Dz",
  "key1": "4oEMeJdEpPzUEwqstjRwT5tDF1Wg2FSK6JZLNWn4qV4CnyRk4i3ftudDQuerKGPNViQh7m1zUmXVbD4JmnPcxroQ",
  "key2": "2EESwr7B6CX9kra5oMNSBgztvRtzX9jhqeoMHYxWWGHUKGJY7oki1Snaqiz2ALkmnWzkq8J7SMcB4inYC1axMPZL",
  "key3": "2UdFVn8DWjK6FZZj2wXbcZXs7SBxbHJJmENeS2E1LTxoxcWieofKtoCXQAraRDLupeDZ5ezPinoh27AnSEY9m9Y",
  "key4": "5FGrpJdkDKsszEtgmuCdb8jmDWnoC3KRz22atKvMVCNZUpFnAhWxcXizBR3Da11Z3kJG3n8J31jLmY5X26C1qDix",
  "key5": "37phBnVhFUeXyUb4KbFpibJH8TDQjJM6bFCn9c1tHivv53jxcZCauNkZvPTezaWtx3j1dkNuLAxbD1Mqmo2mni8T",
  "key6": "nyrLSSwS77U6ifa5tUiqyCqp3qNviWxYhNbMGBLUwjJu9e1xJ3WFtgzG3EfGivAnhHeA9kr4FMPLY23zxYsz3n1",
  "key7": "47P4SUiSw3h4cuA74cCNZkcQHcz3b2SAvadGkvy5aZkyvnRcbGaedh1ddN1pYVzQeT68kvHUGqgb8WZ6AkgeSN1W",
  "key8": "bgP7brZesqeC4YBAbP6sPFteEgsBtmWk81C6u65PoD21VotfZFxAQqWqNMs8sEFsW8Xq18xxa24m5igX8T1Lu1J",
  "key9": "5B5T6PL5HvmwdeToyYH37Fv9cyNRdTLS2wUhVjZzagE6EynjX4XKMGNXqTErPYwUpXUpXWY8pG9W7TfLCPrCevH2",
  "key10": "9t9oDPncfqHwq1wb7kQd1CKLzAatXn7bjU7LRusoAbPm9akVdGso3hNwr6YuNySxqxxw4GXAMHQ4qkVJ8t36Kx6",
  "key11": "4yFqjAR1wS25m42skQjheQ6u5oKMzvtdrrjHfyaHSS1pphZiC4dtJ56UhdeHw7EfLyVn822VeFbaiYDubLR41DH2",
  "key12": "d1ZDMixduQfdoVqNkDsYDCKrwYJNxzcXAnRNTq2C1T75duheAzjakRpJb5JYgj1cfUnVXuG2x2z8qnHdMo47sDo",
  "key13": "BH4D7aAj1w9z7RU1HFBcmXfhrSQCpqEzfkea7ZMxEC3XqcB4kSGyLEAFciN21qPstGi2DQJetJyHGgRofcBeF6X",
  "key14": "4MqcNoSVXMoP6W86qK4UhXty1f5zgoFRFvCweBpeuoL5CMmM2yBxdveeyK3cQpgWpsAKcgENmxCKgRN6ft6c3ZpF",
  "key15": "FG4VR8qLnbAeGVrLsvaNUmzFozdAFF24sqPrCKd8Guy3QFeN9qgPPnwXZws4Ba21ZDwhCr59XgJSVQxMuGSRJ8u",
  "key16": "3CdqnvN9RQopMJp7Em6au5akn2YeVg5zhCKC1MhQZWjZWdkDNukqVknYgVqR6Y82QHHsw4JKAnPhf7EWz6uXQRsQ",
  "key17": "5oNFSZpAoFfacofs31euSBFnKvW6xiEBPY87xKUcGFF2Yu6dhyRQ5GbsTsqfiNZGiPoLFbDzuoGyeFpwJZF5UiYg",
  "key18": "4uAgXMxqhH77QUASjkF14VEj9ayFW7QpuV7VjeRRnrkFHSJeXVp4VVt9Edcy1rmKA6Z1g6vSSD6sfsqR281DXFSs",
  "key19": "4dGt4iGtVjkvP4LUUxB8Yut9cXVk3MyenAXRBQvBQUECaZAUffhAYAKxaGgd4ZBoZEqhyUiT2U4JmKCjfVWREE4u",
  "key20": "4LhqCR1raYMA1ZutyxwMAHB6tFi3gHyhrsz1t6NU6piW2mkZFsniLpa17mKbcyX3Uh8TQT4QhkkJt982LqTj27Bu",
  "key21": "3Z4YqfgPPX8N2r136Da94DycG27A8fZNrJQTq9LVTXHK9G4h4KreFVwbTEzducfNcp2LS4r47ZTZGnaaxDTwVoEi",
  "key22": "esmEF17cs5ntw47m2J1eWhWWqvXK9vWLBdzRPwmFbPvBWb6JkeUx53Zki2oBTTzegcz3xtifNkFQBcuMd3qEy84",
  "key23": "56V8b88eQ79XzcSMPy5rX1CCJt6zCfxt2ZLdcDcYpMLy2UBRYpLFMYscbrmaKYtb1Rg5Ed3zzK1AeA6Vqiqd52Gp",
  "key24": "2v9zxrN3R8pzp6sX4AqA6XBVrLMgpeH5P8QYegZLjnUMac4gPqUvcFCsBvTUTg7vSHPrCFMmzH2YG4DnWH3H15tx",
  "key25": "426z9GPhC83D7seERDiv7ydbfv6n1YYwJssSX57iqF4P8xXEZpS5qDqrrfeMNjdQYtFa94Y48bhC3md3xsaL9Mcn",
  "key26": "2EassDksUf4FGmcpznryDHyVHGR9tecPU8k6EoVv61xDT7LsCBzTUAARd51DojwgKT5hz6jHJqvGdyfHQ7p8gK8s",
  "key27": "3NusJnaWGXEaZApYMj81J62nLuotsR4yDWcUyA8eUwotAPwarGMkF4YaDJM1ys4jrWgXTYn1yxCcyZ1Z5HuGpPLG",
  "key28": "61RbhcjNTfJFz7texMvNPxiwvuFnasbHGTEJo32buskGRGgJXdzfFHv18S97UzCqz2E77e1nyrHtTx6da49dcHaX",
  "key29": "4FarAHhLFa1PNNhJ8jeZpWX9QG6U7ZJSvV1KbNQ6E89knW7f8p11vaEo7jjSs3zzPm46A2NCKYHGjJ1cZrd5bdRE",
  "key30": "5PGsmVnmFsj97c6hAEXzTvma15Z2p4tEUSd1p4C8ZC42RHTf4i5Lmiw2DR4UMTXt2eAsfYbYGkk78mLhfFX43TRt",
  "key31": "49aRyu5j4dxLG4i3i7gSxaKCACDdgDh2S1KNums98pTddRPcXEmDE1hffDtiMYx4q5BT1tZRZLZiyMc6tJwWp7yX",
  "key32": "4yEMisVqnG4PqAYX4TbViHTyEGrH4Xh5ay9sPpWxtDwDYWUrbfq44JCA1DPR11kdRuRmSiNybURfY7iCSvV8oD5T",
  "key33": "3oTEdSGgREsiRq4n4hoTdAGhn51kUkeJsfEKMSGt7vDN8GVE2MiB3BPrvXBMBB3dWaZBNFFPZwMFuHvBgiMxutao",
  "key34": "oAS94wLQDRuCThG5RDk2U2m4VyQUXFoBu4pSaP5Ut5QZYFv3PN9gAbSJ9ZVso2SZkJrVFXVbS8x7dTjBEQsCC68",
  "key35": "4Ms9VBEMSrz7CxyFzc4twLnew2BU1xkFubGasPtFZzjz9fxwHyYLzmvJkcyd38y68rnuVj6kkbSnxw4JbQr9Axzt",
  "key36": "5DuaW5r9V6PzLFGDNro9zrGUPhT1PMFFVtgUDJ6GHFqEbR87NwqydTF5wNvgEcyvVAvuR9HeDdhx13eKe5UQaoFu",
  "key37": "4mcEXvRQY6u9ZG6baWN7QrbbUwMnbpmR8jKmRDdyJ3xHVVuZk4Q4R97bYniRHR4cyf1CyLnfb4mmEwADdN6zjuM4",
  "key38": "4mtrGHkQSR6kZKLYsEo13XDDYvJ7cpmAAqEwE29YgNErfg4xH96fjsXGg8cMrgH2bEHW5JNAfsFt9uyr5VwbKUwV",
  "key39": "GihxxhRADuppW64dawVs25p6NL3pDvnVCV1vKUwkyLvoWQoPsMV6W48vRJ7b2rSztnRgopeZcGiwiBahsqZX3Bo",
  "key40": "3N2tQiLgX7mRQ1BUqzzVLc4bFqVhqQYezVq3qKc4v59N9vXe7LjFaUWYUhm8YonykCY6D9WvqCTMpTtkC6aXNxfN"
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
