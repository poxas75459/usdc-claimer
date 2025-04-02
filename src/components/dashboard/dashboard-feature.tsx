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
    "282wthe8amQBD9ATnPBhxTZBm8BQQeneBnvoaFeLnwUSHDXhyJv44zRLmLaWkvyNbEkhDD3eRVeHCk2fk8LKfj3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xg8hwF8qr3k1de632pNnmuRTNVdrf6tFZ8PBpM9TLgcKFXYAc9vuYV1VMB6CxJMkgVuyVdBu2gc9VW69qdSr11S",
  "key1": "4wvumtFx4UarWVCC21tNYBqpXy9h8k4HvaeQpp2zcmq8NFdi8PiTQjXzfq5Nmn8raftDHPFr8yNrTZc6DAj2xhbq",
  "key2": "3XJPUK8w33VaTJnRX62XSuPwNcuexqRehDd5fhjyYDjS71FAL4HKFsBDqYtTjfSDxBbfTy8FMCRtfKeQTkzEMpAg",
  "key3": "4nTNJFJLS42NVQD5SpNTpvDa7mbw7iRXLMeTJGiwpr612bbGcC8qxYczBDZTfBioUZ1dS8EQxgkphpojHgCk85Jt",
  "key4": "Z5SxBLQDzByBzTCGKAznurxAQyi6MEaQA6UmmEuKFHR7G3vvdUiz6aGA8ZWvm6MJqTU3K7p9ViHSPig4cVWdD9q",
  "key5": "23NwxzJetK8dqLqnaD6yLyjmtEz1PVhSuoAdbcN5aTqoQ72CtE8kwLm9BRztf5QnDfLh8GkGWa5yr5WMH9qFjRzH",
  "key6": "3ryEPEFSkDFyUXNP3K749YvDJgYzGsCqB7b8JJ8U82YDZXHyAYDmCRSvnZXUpuWFkmRLvQENrAd6WCpxLX1DCR4Q",
  "key7": "4V5ouRo6hJHSrPz2pSFqBfK6xdoA5EbNuwsFbfFYoZzHxQx1SNZ7SBwcERzLyPDhFNnA4tdCYDUPPxmdhydokHXS",
  "key8": "5TLJAWeKfjqLsWUHJrTwCXrmzGbAJK2DNuapD9ybWCnRGsi5iELoQLjCN73DmUsfCp438twjmCxcppjcg3YjQu5x",
  "key9": "3nw7Hneyxctd58hGRUzUWvyjZmvms78Xb3f9DHzL3kiY2R3w7rFv8SpxqYiPx8vay5itmSBEFXkmivtapMAwR5wv",
  "key10": "4P26YcZ5gMqudkHfjeRuCdBkfBPk7TL4FGRpGoqpXHaQANxGVywsKUUyawKY5dJhjYZJ6oQqEtcWRWq2hd8Psuyx",
  "key11": "MQzKvF1eb9oGRxws6hs2N8a2f8Pnj775Yk4pJAbCbBTwwNyiAf3bLvoNUkA8qCS7dA67ebYcA3WN9gRA1xGW1XJ",
  "key12": "51tkRomPaB3ExXtURJhfNmSxVDyggsPYUGhmFLqFR4A1ckxv4zdxea32SU8feiXZTFnjVGSELZSWsE9jTfAH3qEA",
  "key13": "4Zk92annA5UwKzsDfKbpKmvmN5PbdzHMKjN6hnfJNFuJHKxA4TGseGvmDuo5j5pbcb5BasTnMDhQrCwTCThzPPbW",
  "key14": "2ZERZDyVp9CViaLNd13g9Bas64Z7oYVHHH9kKu2Ss7nxN7BFxN6dyeP1J3kuBYkEoVALr46iCyK5crPxCaEjSuPo",
  "key15": "Qw6VgpEVRUURwHgAFEW5CBH99YFmrfjbLPq5kM9moDtXsk73Nbx9oi1dKfi7yrF5rRz7xTEvgfJJiWgF2FGBQAR",
  "key16": "3GvDAJ1hNeUxrcUR4groPDcNLAjaXSAAtF8hjRDwKjyN3FiHoqTNAMWCfMNdyyKmKAJacoMu5hpct27aawQ7qTmU",
  "key17": "47Rd5HrjvYkxC2VdKS6bVestqfL6xdnXzYq1qMEg2EPj85afJyRnHYa2PLhTz8HbreLdo2SECnay4WH8irKLpfmJ",
  "key18": "YGof9GDScdnhegLvcKnN2DFSRJF6o1wyco1PReS344o5zXs7AKucDSECXD5Z9tPr2DP8PxkKsjf8fGRcCkoBr4E",
  "key19": "YgSi6BTA9BQmVKc7gYbvzddRgJotMnbZNrftsPHmfg9EX1rKVgSBPgMQWhms9Mr6nXeJnFJvf42BG2ZkD14CArj",
  "key20": "5Lx2mCYmcquMTfasirtmDSr6BaoGDUrztJzu8np6nQ93YbxZhY2BpB23uJNryF4ZrFDPxTJuG4p3wf3pLbYrMAwB",
  "key21": "3hzFgPEUGHXdkEAidKzEngR8rGQPuYjxtvtNGnT2MEgRyXbPyLvazaocH1jSf9kH5Msug3XJ6vS5ZzzHsk7nv57V",
  "key22": "jke9dFw3E4e8FAQT4FRgvnkAugVN6eoJbZA6GTsfgcjzAfUXjHZVG3Cq2tiu9EQjx25MdcmfBaRqtjbQNndLVtn",
  "key23": "2VsS6Q3jbvs88pSRJ39CyKF8Qzte3aoznWcRNsJKi4tpycakeYmhtfy6KFSxtxUdwvbifhyRMvCyEE8x7oGyEPBe",
  "key24": "3hZdheJxBc6L1H7EtJofhHPEdFuqKof5smpYznFBTrNhti2zRJdaC3zjoeEQTfACMDcTBp2cWSLT5FJhRcBFzCr4",
  "key25": "3WLnEwmnMxGzDFGLPdr3a8TzuDqDq8nVbnAEhrkGgvYjeLyBLqCmCTW85ULfCJThNbKktUaYyioJ8eFGims3gqQJ",
  "key26": "ZvA6yTc7SrXpjD7Rnrcrx91Dtd4N8HHEVA5jDa4JHEkbkMKjeLeGTFqiKqTibrCW8zDdc8wS3q3hkPaE3oXpqpm",
  "key27": "5AMkN5g6jdkLvdsf4tmETJft13bfoCZErbM6HJqsvqBkW11H1w5C7ge3D6Bb9C4BG1qFNY4mu8xnwEvupYoW1qmN",
  "key28": "5aTcKQCxqaLrrxKFLyjhknG5Zi5NxMKbJWDVpoK6HMhcPoLb3BfmcTZ5Tn3zTinjvjiA56MYLuRbPT2mBkgzTScb",
  "key29": "MFEsdTAdgZpTSA8YwnREfBXHu7CkYUHf7nUg1fp777HQHDSi5qgBRTTP7BzT2ZYv1CmRDo5TtbyYFyP1UzAfqt3"
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
