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
    "4U4UibB684MWhyxPpnUrq2xqaVPuifwPNRGN4MTY45rTxPDot8g3a52GVzm9sa2ESFrWNyAP6N5vuTt6EG7LQa3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51u1QevbSFFdyua8QNbTUVdoZX2jAoauCdvXXii9bvyR1EyeUes1YLtojoHePw6LnMXYeSaREVb48bUZkFheTgF3",
  "key1": "5id9RKC6Kg45rfLKiwHkwJdNY7B6Ax4jkEUh8r5sxHR15KxpRjNx6KvxCLUs8iGdEmxZJT1S89c4UDJg5zQU8DvH",
  "key2": "2zffR8AiAAjNTuKzH3m5bsUMdmA1qkXyFNz1xgZDhsyc8DfXKAevk65XzvdDbape8aEizSRT98MzvhvWqYV5Y3uZ",
  "key3": "qx5Af98TpUMy78EG7hiiQBgKHnLP49kyUt2DpqBGMMTQW9epC5Mf9zwR39g4oNrYfdrS1XqPCechd9oLfawJ5PC",
  "key4": "2sb1yBx52VtP317dQij47jDf6C4q2FaY6mYcK6JftukVifbysRmE4hgqGL5PyRCp65Y2fwXk8gm3aEQaHa6pRQ6y",
  "key5": "543CVZnCa8H1XkXXqaSSSZAuByotq6EJDMF9YHzFN7HhaP9vxR3Va3AM8NNQM3yK79U7M5PH7AnREuoSiAdWWyLz",
  "key6": "5mx69nKYmH1KLm7LJbXCtktL8FRQ1pcDukLF6ywhhTvKSEtnuNrzxbxQA7NK5JApMbEJmYBpkRcfrJ3ajuNSGHt6",
  "key7": "3tXuCdnosUi2vkC1jMmVahgQhNQE99xfMhzuGkkTkyicj1C2HyGFDHr8P2VgGwzJNJF33DkFB8WfrVKENh9W2bfk",
  "key8": "3tCrjuG6NY1CCZkPugCv3BQvxNZCFg35ypzT3KT6z5iCj3om2mhe2kQE38NHxzYw5E4YLXf2f29JqQW166Wr12oP",
  "key9": "2GAfqykeLmKtjWWfVuPtHePHZtCevjZ2i4VvA5epxTY3Cx5BVUHN79mYyAHhAdeGEND4yhMgp9KJp6KZne9yEuyD",
  "key10": "2pmZDKDhRJ8eQvvseeiKWCX6zhPoujeZrZKK6w5fGybohWgYCNU3PdFFPZqk76pEmwRnRbpM6xQNZ1Z3tSzku7YU",
  "key11": "3RAbSU6tfAdccMhet6xKwwLjr5qCo2CAAfpef7oqWsZvJL5L1cUqZ3jP3udWjNoY8Q4XvgHvYcp1FpGFXxfbiCM3",
  "key12": "5WTUKaraTKXDLEYp6N8ZdhsiKWhbNxiusKh3AU2ZQs4fzTzWdT9koKpMyBLVcfTbvdXxmhD4NYRRGNQMaz9bQ5Fp",
  "key13": "3uKrsNgi4q2zenUYNCK2uRK3J6SUyVTUzk6NdoRFyuLJy3CW2y5VRCKLHCCDyBMbAqCgxFfYZTWQonuSqXTtAzSp",
  "key14": "2XDQiTXeqzW7QvGk4MUzXxmRANYD6EBnXZHpmvZU4NJq7udSWYLQQdoVdGmFJzSwzTQCSNfHAvXLuTuizi84tJW1",
  "key15": "yzHpJ9hAno8SFHgq7FKzUcs5Yuen3sSp52r4eSCPCoeQirJL62ysFeNWv8paLiCXsFGWRbReUAA2YSpckd5ukw1",
  "key16": "5dvpqQWJJ2HaeeF3BdakWzm2sG3BZqCGdiAYS1iwKBgYnaV5hyHo6mXdnbosz6K4a8svTSky5hz957yzM5sVU5EM",
  "key17": "64QTzYeKjB67W8wqxFcMQq3nxW3NuhtKmpQxxZgjUtp1ZkdZRwoULmz7r8hcQsYTwz4srH1aJechvyPjsk7LCap9",
  "key18": "21oh6oC6JqcGrHj3v24izYz9Xo9SHHug7aQjxujyVgSTF3VabKQFyrQu1PZTRac9v6DZHwQQWUAKbuWNffS1aeai",
  "key19": "3v2pGV9MN8Hb5fQgjV33KFq7z9FwDv4ey4P37VEaYJgD7kQNkaE45hxXxtBkvg9FDWKzh2CGxetNtsY52uXoiPW",
  "key20": "2yL4EMKLqnyVaoCMMFrkmGbukbUrFTHmaC4TFYEe3svQrqcy5ug44ZUqMZ6ERYHVSskCnZSov8NA9WGSRQU4EBfi",
  "key21": "LGoWcNMy4xDCeGARbaABATVWnW9HT3BbaAUGr9oM7oJQgC7azsbfdawN1iooZoqkriXiB2ueKMFJ5KCbCGukFrM",
  "key22": "4ihz9iaCeHes12w53G2FAGiFxfRtfA3byBgvHDgjAgKmCbLvwWx23TTzqbpbpZjWo1xCtY1ppa4bs1wtjWDrZPuR",
  "key23": "2cTQ2HpP8q824teqTzf9tTTqidyjMQ4MWeKGFE4xkQBa8nntyj1sxQkAvqRoVu5rdYtg9zZG2i8XmqQ1SA65owf9",
  "key24": "47PdtkJspoLrq7P82GA7tcBgPuR1tgLnQMVzEG1xHJyyjUNqxSnH2A2VQZ51QFMhfA3GBpMnnADusr1cdX6GojVM",
  "key25": "2UJU8HvjjH1YreQNJu5FfQPdG61uoEobYYqTowKtcdhfjCVX8DotuqXj2MGqQLczeXZadkR3uWKTiT7LSvgcKX9w",
  "key26": "4RWdHJQqLFWsuF1osojKQo2T4uz8kPSdB3NqVkm7du27uRkg6RTziUGK5bk4omLLa63STTBpfNQGhZRhVsPGiKJ3",
  "key27": "4m6sEZLqJo6PQfk2DtFdaQqprdHRmCWuz9ehQAtKUnZr1BGcS8rUXpMWT6Xv4awCGtHiiUPr5jiR34AHL8oA358t",
  "key28": "2iWFYYiUNoHT7J7Udfbiubzz5js5gu2HbbA3cXjMCPhoN2dRY2tguq3uDnsNqcF85SAGvZvLuVMLCQMDE9cUDXwU",
  "key29": "2bVo7KhAwZGrAWJKn9Snqx4HDYLuQC9SuawtsgTgW7EhvqDC2QvdFRvzBAexsztk1xrGNJLkFimHSDiYeR5d7p1q",
  "key30": "2eNVqiUXAynRoS3QMLj7f9wnsKjXBPcihBGJLkB7in1PP3BPtmtcxT2mXmg8cF6SD1d9UGobnHzGPU7JYDFcrBCE",
  "key31": "2SJBTYD7AcRFRYEe5dWXFSftMmqN14Q5EvqmUbX7nkj2ycUVJmLX78mWvdePnvovdcc1SW3vBLvBiU97vmpSKDRH",
  "key32": "4WhGHXJupR1PpkniMYodiYSwB6QTJH1E1BPwmmNxT1Sx2uDaPw59SmJXoTTWsWGi53jm8Vk99gF2wdPErx8hxXr4",
  "key33": "4J9CyJBzPoEe43MT4Ph3Bt63BMM4dYeUGK7Yxp1RVyBFKTgXdkXh3NeMH1oPaAii2BbhrdFTcxomH9q8Wfw7degd",
  "key34": "3CbvFkVhugade1vYQJXN4aprP7bsim5FGT6ySAQBLuryikqffSxNL49TLidj5q24o5s1RUUz5uWPAW89iMaSDYGz",
  "key35": "2roF2V8JTQiSVCB9nyRChTkhfGwendwWM3KzWkjJKaUCBMK7cr24KHarz8s79d8GFKcPNUtnFHKpvjGwoSsScKmQ",
  "key36": "26VKKQTY1s5U7Z9EEZsyNCcn2pGQ8kzc7f3StYmyC5Cc9rr9uMLvnPZzb7V8hnMdg75n7ctVU25qdCdWXpPCLCo6",
  "key37": "2zm7a3dX1cKSBM4H66wADkAjrcj4P93hty7uMR4dRLku1NQ3dwbyFroVAMrKiw3HDKYS27f2tEhccXJvCFwGiBAU",
  "key38": "tPR3ycQBhcyYhrJpszmh79JYk1MJsEhanmdUKEtGHaw73NU82ZXVKVnQv8eWw8wJd3SzMFizZxFK2ZhAd9yCN83",
  "key39": "2wLXyUfDhbdzMuKdPGfsNaDPcn556RkbdF1dirjeZh6RAicfFfRPxwmRPC6WRwhihWH5CPb27JBoRiSDE78LoGB2",
  "key40": "zypeE5kc6BMYjFtEqgWpc7j8VuvZhJHfss4cWDYse4JTQyyXqoGZy8v77s33sMzgqZ6nTUAbUUAygnKQDbDBe5k",
  "key41": "4bXRrikmufG13V7t1vHFe5HupAEVo4WvM6pDEbygtZVqgv1BJTVe4sjpuKc5jwt5QW2WS3Mu2zyMDa6eKk6yyBzD"
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
