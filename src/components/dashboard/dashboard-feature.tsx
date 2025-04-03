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
    "2unSG46eToea2Z92XbV75qf4dhv5pA7ToxxFym13jHMZD4BkuLoeEgvpfKPmSC3X9CAU1TnpUPt5vSuwQ4bpDV54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Da7Y9zHeTUtbo1Ugm2bheS8EgusV6P2eDvvFPiNWSXRJHHoKx7TDPpSGyzJtNcuQaMXEpF4HTWgcHzEK1idJJ77",
  "key1": "2E3VdP7vid5PrB6Cw9ACBuwXHS9Dr2RYp8sp8J8mtjWb7G1U6njWjSz2in3YLjsrqTjzCBxGyV2b9xirnkjxdPmz",
  "key2": "xKRw4u16hSUTwfjEfBZ3CCsZoHh4KGVjsrhHC8boV8XDDpaU4LYQ827vN8m6F1XG44iD8rWdCNhgU5pXRNtJ4x8",
  "key3": "33iaw2n7y3RxKh5Z36B6js5T8JQuXdStJVskjmGTbhtZFwPyaxYmeNg5PiKuLnf7KCzLoE1uJEZKs38P7eH1Bmt",
  "key4": "4aBm7FYZG8XHx1jdW5P8ixBYPB5vVcmusJxGa8pbirhXThdvXmSyuzZm7rNDyTGgsYXh2E23MXWs1RdLKpzpEEAX",
  "key5": "3NLA2ypKcjetcGAKW1z2VKt1uj5e73n87LZxtLDN2m3UGoMMSmtvN4EHu4VhwyrBJKU4r3f8BNpABj1iVvTKKaZB",
  "key6": "3tFqAbwjwVYs2aLdLCpdVzs8T6apWYQGCxpf1wHAK3KPD53fnYFWJfwW8ZiofQBvWqwqrP3pJLfSGYfjVf4yYdiF",
  "key7": "LogyhittgtuLZGqVTLAKgrmMmhqNN7NAd7kJX81SRYLR1eA5x3wfmn18n62nDu3eCSQooUqoHHJnbu41sDXEiqJ",
  "key8": "4DJ1BQQukpHGbyzTswz5piUGAoucTUtZb1zgqAKwDkVYQ54rJtnZDEiu1aJjhBf6vY5S8z5odk5n48agn1QEKsVu",
  "key9": "kGj4mwsestNsRNcAK1m5Lfs1h6yKKBVM99MMCq3x1BQ4GcVd9jTZ444P5hxDuYt5vjrR1nbpiBZ69VXU827XEXP",
  "key10": "3LBCePQm9NawcEJB2Vnf4iGswBognCP6AKduj3yv8LpSUepnQvgLirR1UGnJRmvXnb7K8FHcEQFdsoapD1iyZTiw",
  "key11": "Eq42MtEuGUsiVmAssE5wXCpaheQDFU4ZBAAW9Dmx66fPV2tyodgJZgYQyaQbgsCfHdXnuiqUYjcxxxAMTDzzHWy",
  "key12": "2wqjhCrU8A84Sext4SV6d1VZDWNY1qJEbVBEPNhRBFfrozD4JWPuT1H4ZjoMPtHvu7GtRJe3ji4wFjBCpqhncZkT",
  "key13": "2og3vJ3h2WgQS2XnkBQdfV82WcTc6CYt1f7eHs87EDufn3f6jBz5ivoWF5XsrUyebrXvwW7rpR5zEJ3t6v84DX76",
  "key14": "2wutE9EDuXQijdqT9BGofMJY1YT4dHtzaaMhysRNXB6mkzWqG1QH2aDApTM4VJnYh6q8MqwJQwnXBE1eRRYXXUPF",
  "key15": "5fPvsC7YCgpDzySnevJhKcM4VDw6pwdVp8Y8QGJjsNa7nPRHUmpaqoKcLhWqe2Uukuoznc1R48FHLqcu6CZEfJTo",
  "key16": "4VQX2EN1TSmd8bDngeBvaAeFosJokQb2jyym1WRpZkWvHteUpmEaiSX6JbaRd75HuRZQpye1QFhJamswCPyZNQPU",
  "key17": "4mg5534KQ7WFivmd6QsXmvJN16qQpwc3xBBYofVhasVVuVArbdx1R65r941TVMeV6YCv5JHRGvxpAgdUSiPrnKMM",
  "key18": "5CKhuVsa2AgaFkFVHZx6uudweM9eDDtffxXY38sUtnLZEXEWjtdWqDwj3qhsJfxtQY5tNq92P4fADwGuR9RwpsaJ",
  "key19": "5RGwGrg888dh5fHiwZNnkhZq5uyEQZr2a2R5XpfX8pvDXNvGFCHA7QPH1MaYn5PrQAb9s6k5eJhrgeW7VRHB7rdW",
  "key20": "4WiHAY2P1TCmjSprcBriAYhMQmmENq93xTJzvckWb6yW758R4qExfFC9RXpZNLrdu7KRq9DbAouXNsoEkF6qG58H",
  "key21": "2eXr7svPqw4sK2MJ36pqG9moY37rqeh1yaianB62iyJYLDwWbJWM5bDN4iiMZzK1uB7dddjq6SkmnDbUxC6AyXgr",
  "key22": "2QzcJYzRbcg5hfsMyqP4cYazYRNgMjhYJeBgwkgzdQFnruwoxNAepX9ZKmeaRs4xmumRE1LqedEL3iFbPNAjLQnF",
  "key23": "G2goH8839jwujM9eJxPmxn84CoKoDt2ozubycrtPyuE39ZYB1GJ6sEWXmfyZhDMLU4yAFjM9NjkQ4s25ULTMywb",
  "key24": "2MVJpeDZ2uHvG3tiqB4Wpzgq8jHcYqiEPpLF8zj5a12ycgJ8uMkBpXGGxdRiHEwXkU2uTQM9o3ztaDT7U7cbRrLd",
  "key25": "55ADBgzesw9jGGGyv6AMQF2c25qv2PLhHJTzgrzh8UQG4BrSjzpeZ2nEX4KTNbL6PdMHscMptXxWCZALBgYgbbd3",
  "key26": "4C21AkhuW43Xt9LKbN7AksNjLJEfnM9UDywLfWAvV6sYvMKz6bziEeraMq6AMPnoNoqY6P6YdJ1SheCdVbAvq6RW",
  "key27": "3kqUFYbv9DFnxsuwSqSjgkL1VdqwEx64hbUtHo7zgdXLVsc8bgLCXNuWe5E8oggmbZtzZdkHxGybnGzxUGfsK88b",
  "key28": "3Q4xGadu3pxni1Z8qfWShK9eQXN1nLVxFRCWLbGdmHtBrE4wN3szAtUk9emRwULGx3hm2r1V5833HBXFVx7NDJsM",
  "key29": "2SjijXFjPPrLf6WMqyBJQZtEvaSSmD4xB31U6NjGH91AqqR3faTAoBLvs13T1aiDCWTzE4KyYJTiKXetQbLxbu2g",
  "key30": "xrr7yUrKdrJ8N5qpv8YHkmM1xRaFd5Y5ecxAoKQ7A3eoiJbJPmxQKQ383pz8ZRNxyttiWdkbtvczizLkHzm9Lyd",
  "key31": "2JPjjzbRWk41PALvh4mi8Pzead64ZDA4feTRYdrk7nn4HnoicgtVc7jo6SbjMEo3aZDSHhYC5Nc6SSSYtTRQVxZh",
  "key32": "8egx6NNa58EpHT3vrkgSWqsbLDKHbw8mwRzpUF6iFmxD6f6Z8S3LBGW75yCFR89unVcCmJJcgKye8QFxR7Mxxs4",
  "key33": "3NQ1NvikPErwE7YRc6hknZLroUFS7qit8exthn4v634nL6hnT3E74RCfjPCzBsuKRQimN1SgCZ5d9qZjWYf8t4Kp",
  "key34": "3NvWiU35NBj1QWCkJtEkS3EwLuByUpbfGZNF6FFszsUdwMTXjckMSmgQrw7rXzvjfTZo8tUw3gfp8YnaMHABf3xq"
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
