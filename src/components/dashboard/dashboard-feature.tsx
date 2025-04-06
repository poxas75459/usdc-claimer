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
    "4kpZfhVdUHKzWNNwgtzjvhv4pXP2kXcigyih7ZBwuXxhuPLRCqdJqGuUhxBD2eyFW5dTSMwrC8HX3JufHkL5uFy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UWXQje8nkCsgWjYfFfjSuuVJhmfwMBSD68TnZhiifXSbAKoorRjCo4VbEQJHTQiT1Qbprkcntnj6wWUWqc49ctQ",
  "key1": "2uSG4e4iPSaJ7PK814fo29s8BtZauk3G9oNh3Zn49w3onStMtERWun1o6iKRSQSCeiHG5yYevh42Uz6CZ9V9gD8u",
  "key2": "3WyiWa1gBN19DRpNYP7vF7bpnTYacLx2C4CWzVZz1M4GWUXqX3uXLaeG2k6o4e679WeP1tPvvTvDw6r68xUGEbdd",
  "key3": "qmu5ckQcYUvdVtbrvPXFTDD414xysAHKzKKakUcsPRmzYSFeSDTRczYEtgRmYJRHhp7wwZndxrL8pFSCiC3zAeC",
  "key4": "kgoP4pApjfLjAkMMhBDXrgH7YnYhY2Pazm5goJaizMaripYVqZrWfzZ7eJonXKW74hk4g229EfXee6E9mTxy18q",
  "key5": "22PvhxXmZYpoirq4PvHZDCkCmR4GZaXwcy8mD5rqSgNnCKYK3Wb7DUyU8fBon7bHAipbGbV6dzCZqTAuECjY84NH",
  "key6": "5QBLVefF9ryVbCuUtPZPk7H5gtj5gS9Hh7JTsvjh4TwvQm3wc5Z3PHCjK7FJ2hoRgHYCrXDRysou42LNq9VPJp4Z",
  "key7": "H6VsTuo4mgZUcDcYNyL1px2aeQo2dCAXvTvJyzAbYKYqqBfagHJYenKusmuVN4ELhEt9SsixAMkMCnzm8nSmvAB",
  "key8": "51SMvfbfRudNJ9KSstxv6SYMpkeXfz1bVuewz8Ce4z7soeAQ1PBEwp7PCWrxbcKNq32NWdbaKceVPqXdpzFJShjf",
  "key9": "4WiBATwq7NaoyGdB2dRHGvAi2g5oaDLkDBHomCAYo5T8BM6GqaPLXe1UPym3C2FuLdrETc7oV59gW2SWWK2p7wqC",
  "key10": "3LzymgvntqwTkYZfP2zQojzpXLPo4wPCkwFBVFcJbjX7iBEwDuvZokZMo9BkzQBtmkAP2QoTYre9w7CKSswEaQom",
  "key11": "37g1zMSo5bGGsg5MCY3qdv9v7ugip56gzxDTE489riozNKFJQ3meZnbJBcrrdyTcyzUH8e3nSpZ2gHjYtMev7vtT",
  "key12": "aMTmEtt7xbMWPcRoqJUrj4ejTXVkV6KffvQCqTvu2iw8LFaH76CfqWn8LFtyzJkwgrTSNSXCK7f2VqsCKVXfmJi",
  "key13": "5Gzbkxt5Re8W5RR4X8Z9VDpkrx34Bh7pK8AeAXy6suUqEXV9pRbs1yWf11bFFoo95Ru11XyF8ZhSGvyh15naF1J",
  "key14": "44voDfW7eNWuouvuNhSEmW1h9ybeNMKj3U8TmJFqUZ8ZhrsBSto8xmTawV5KTj4to6C5na7wZGh6QPuUCMmahG1F",
  "key15": "3tDNzGwP6hjA9JbYqLn9aeTVHxKdY3d3PTsvTPedMuw2noSoT3x15FxP6BYcKLHWCcL16TYWrHkyYWu718KcHEo8",
  "key16": "2MeUyc6ifrnkr7jyxQtgTZbWiGeuQPrm8pi1WQyEKaeFAAHpBQqrY6uEDNqQHme3TqMSY9NmptLRuTMzpS38FVvm",
  "key17": "5ZGkVpyKCUxMXYknFn6hEwcQqp4quuhVkskgfBk3FjmMsoqdA8GKRVwwGaXNXMDXWe5CHZQKbchJmJr51fzoGS4R",
  "key18": "5Q2uEsaUHxNnA1t8gvrW9B78pswiokNrWpGDfvbwQ4e1FpbbbDvnZewDA46MneW8QKtBFQcXi6bpBt1tmVNbjEs5",
  "key19": "5CrVWrCiALm88cw4hrDRPC839T7wh9YWaQqTXcKJGiUg7nP2YRUov9GRKxpwpXkDoZwXSGWLRS7QX7HUMqutfMHv",
  "key20": "5dKFRrJKQ5Tm62sJA7PxzVep2StsDYoitYYurYPHGj69d6Cvzrp1dCmD4icebm81BMoizUZ3eht5SkvYAy5oLMPY",
  "key21": "4KGKr9hyXcjjjdGbHyuhAYo5B3XprbrQyn3SUPYJdhDpEqbRpXNU2tV2RoxCg4GTC8QQWSVDrLiujpTvmNt8XrTH",
  "key22": "4zhPm2X4JsFhXx6aSYkeWQZuuMnJbVzXWNxaNSooAmcEsP3U6wyxGqMnV5gpux6bn3nAbCpGEUAyKWnTSTW4qAGQ",
  "key23": "2wtHTb6Ji8MtnsNrjFeyztFzqP2gTqRwbZmTpUN2kAiUTzNAiNsXfPBD7Kdr3iraxTKKa3kvTqdNPpRzLR4Xziwj",
  "key24": "2Cyfa7oeiMcJk1zWF1p1sXFHVwyNkuBBPfHWJ9KaPThoC3tgBTG8CQ69eowY5eFvdGKcK7fjAoZ7UNGf7ypAURR1",
  "key25": "2xEUgLBESoLgncxmSGVT72i4TnfHnVQNxzhi4txGTdNtMufXNvap7NDPPfURPyKhfTP36JkKWcHyedqnj834D2PR",
  "key26": "g6uo9NZWgrW3SZgmSsq2oFXKMi2huyNAwat5LXPdBZzYrW3SmZQ4kDZepZ168kTgp4VKiBQ8Zsy4h1NM6Rj693a",
  "key27": "3UfGxyJE5Mwgqe8MTncCoZH7HGKMgP5CkUUxmpj7TMXtjN3T5b7XfG6sC7MJTPPdojaELbXUPYKtfFLKmnwB7jNk",
  "key28": "24efsjTHjfmJRjiovWTXUiheF7qQ75uacQaJRWhhmLNZ9ToLgTWXSHWnCoi2K8jwP1Q6DTMXdPz8LXwKtvM5HiEB",
  "key29": "2Tuee8yGmqDqvokAejbjyXrNPo9h5hR5CNG1V8h69bp2DGWScGZWm9pk8qiHUeF3qPbqHBNB3zrWTNFTboexBepE",
  "key30": "2ScAKLbP15A2hkr9uoxCUt1UrNt6S7K5J1KtggiTPyhWKLisYABAtLKvrRCMew8Ssvvo7eumryeffAxwAXrVbiB3",
  "key31": "gaKphb6JBdwjKjZAKbhyRnWJiZmyfiWgP7eYSVN2jzr7FAh5grmKztNpoSQWyoJA2UV1hUiZzMJEA8VxfC14Rrt",
  "key32": "4BYEQwTcQ7zqrK43ioFCBJ6t7xh3F1w3P5FSYLScvKhnwZTuRMHPVL43KA6CgUadKzjcT2HtpmhSJcZkDPUQoi5C",
  "key33": "Wt76bXYfjdC4pKLqJkxHH3Xy4XTGnE38TQJ2VW5MiaQrBZHqRRkoRXJXuLWHwcsM627qAuWCamahVmPczLnu1WT",
  "key34": "dcStRwA5GgnVSshY9rVQQVXxYKWgJNYqzjWNN3R6GbhFQyVA6buYaiLSVUiYiA2VVzxfMiRvaQAmnmbLph3UeoF"
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
