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
    "2feUwYin7MBiQSocp8c26Lcss8McR12dSqzAL53jkpUhmM54mkzxoy9wjSD767hgBevcVhbxvuuMz4Ps7yGQyay8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S5TeFN7WaqiZ9BnxfEW4dM1mgV3A7kSVr53Sw4DBP58Z8a8sfUY8FUApoYCAttGsiKZhf8LGh4V3Uuipr5FnBvr",
  "key1": "1uS8CND93DCNXfoB71WvXWmBK3YqUCnoeDf9wna8ymHkLM33gwbbmfXco7rMWh8HYYdYA8AXwWnjqP1JRe9YELE",
  "key2": "5oWfmjW8vaj2QDfasBdwagAMC8mmQit6wdQeACoAyWLXsbQZVwZFjLz8GWRLXKvEgAvTRNxsHfVNBGDrYhP4wj8G",
  "key3": "4seWswNddY58NqxVYa4nmcJD2P6GzhQjAPt7zFcZ85jqdZ4DYqNcfa5zmrmqH8BqLUFdSWJeukDS312ubVw5gFQm",
  "key4": "GgSFXzkn235dW6rVTcrqdVP6yVHpM5acnxLJMdx8pTTdUSZRe1HbocKQVyPwff7nQkv9tX25cLDBpYaXaAjpW6C",
  "key5": "2hSCtvhm1QvRnHGZFuC64NFso7og9NXxbEPFpWW5jBk2SuMg7YSJNCRvykjfdAxp64Ytc1xhYDtVHmWPoxEYNQnU",
  "key6": "5Qy4LDMBSZQcBrySprLJDmrSNn9YCBvDUDEKw7uszemFaVjnKYGrYKeiYqDxpTbZnzSNeGhGvC2RjAoPU8caB4V7",
  "key7": "3djVSBPqMEGh2GwuhQLAXWwzSYhrL6rdfBc4EsMi5gYLxoZCaZxam9Zk8V6szkQgGUQyzLjHtvHPrHFnvpE8WoXT",
  "key8": "2Xk4umG9uPnVCcFkKsfKo9Yy7F6cDjeig5bTRDwjwowkhgBQ9UmShqCkNCyEMeEvP1Y9y1dtnyP4RfixVhW95cB1",
  "key9": "3SFLqkZHBNKiFa87NgYAoPMsHAZYCmkdyZCu1Z5DqXDNJjtmtNAQfxtDAoFNjsQgGA2rEXqLqfSgNRjevkSqYPBC",
  "key10": "2pWqxgDCHeQZ85Gg2Kq6battk4Ydn7yjmXQe2iUU4vVx2JV4mKFQZZUYJEzux7uiX3ncPKKNt8byxLC6DiDqPHVc",
  "key11": "3rieZhjfNDoXfr6MRzrWZ7EydQZwn2YLN7qqENdzyHaFVHav4bRXWFo8fHbE16sMnmoCAJjhpMGmST1q5o6ajmYy",
  "key12": "5X4dqe65tcHH99yfipTVmLsV5x3PxYhJQnyxwpp3PZAbeqHx4PhboDjPvgyTCWfRoSp7n4vcpz6fC1xozjDLX8oX",
  "key13": "47WfLGvoEZj8ZxK1uiZwjEwTQ5kZYdK6Jjcyayp1K7w7RfE2johcdbx5uwdnQybVN68R4tbKp9zJKr52Jpfnh3dJ",
  "key14": "5iUhjWXaBFNyEw4hf6cgswAmpeXbFUjLt5yMuV6ErpzM4WhBMyvK5qjjhwq32dSV3oEdCe4pn76kRbvCuu9KTcBx",
  "key15": "G57jGxsBWBxFRkP2yQwjcUg4KiF2ZHgSDQPWhcF5bSj6sNJUHBEYbyoALSrmeZVyV4EsE8Pq8Mk4EVAsNAm7oaQ",
  "key16": "23wWu9FCPXybGZWTiz87CBmVtAcGQuWLAX8kogAHqJG2JRs98nn8F2AoC8VMPatzshd3MfrL9ceGzCrDtbpcTMqe",
  "key17": "5srH5by3xtFEvHFTwjDkkKLmNNEeHjG8ePfCN1XE9bqdsv5kCFoqid8VNk9GMvHLLJNJu7ad5JwzPSNJg6Bw6pdN",
  "key18": "3GjoeXtXS84B4Pq9JtTwmUaQNxhTPkuXVjx94PquKHcgmmX7vfWrZMuguV9goW37E9iqcwS5pX6JFiMTpnr5WUSe",
  "key19": "5FAQYN24RXv7unD16658Cajy7gh7yYJTdaajWYtLtj8aMir1TtirFNitMMmmFwCSeHRyzdkkdwrChVhqwQGTReK4",
  "key20": "4xPJuRyGxEgnfaQbaUANn1zQyPJseyMLGfmn9RePGZmUYGG4f2YV4Rhb5TCWJY1BnMnqTyK6kDbW4saHmzWCDsbL",
  "key21": "3hMd4L1LQ2mR6pu3WWv8BKNki75XKUewoGrSiDnPfmBWUHPNqL7z6hawgSE3puzBD73GGHkd7Wx9iZeVjBAyx751",
  "key22": "3Bp1eqjzrrnZyg8MJkXmBQBjVJieX62YZT3ErSjAPieVkEYNHAdwd43fa6g3vDfhVB7MVHie3GUvej9dspfE3CNm",
  "key23": "5AZwgZKZEPUUccSoxs9rhXDHYmthqfvp2VQa1Qaw6Tyu9uMQd9XoHxbgbXMsrEbBn2y3w8EFurF17fx2rVTHdcMy",
  "key24": "4qE1YjuWLr278shKnWs3DDdFkqgi3KCmSRDx9rwvi3mw9QtNrpmws52cNxQYjgJDuzgaov14r3K8BgEUtsaZSKGV",
  "key25": "65jyqRLZ9MhXjrRVCPXuzFDSmACXy5DTpAApgfRW9YHu3wpwaWBf36X3Ax8qojcoapRcnNbwJEXAS8zHZqHkXtb5",
  "key26": "3taYhgg8ujzccnyts5DNGGdtqfdajt3oEZYaBEWJcVkXGQ8d2zxtzSjYmwKdyEUnLihAZoErbrWr8xxMBjMpNnYX",
  "key27": "5jEKsV5bXWyj35ogKDbYDz51xNFrkgFPHD5eqnsBXUWttocQAB6iaaULsKCH1gwTqiCgXdeNYqmtARA6tiMh8jyE",
  "key28": "5wtTqAveAPL4cjTYpMFh5qEJvnzNZtnAfhQB8CZz7eLYPpseCeEUuaYc8r58bxCpibh32VcHEC9HZ2b1sKiZNw1h"
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
