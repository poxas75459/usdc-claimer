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
    "5yhF7hiJYVf7tYCiqM2ay62y8kvnwNa48ca7iq7hnzaxexoeCMtjV8bSxWqdeZncWBvYbd1Kuor8FRX8P9gDJuDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TGYtPcSMcUXhmHMWYqh3kh7gasDzqWRB4NPVL3JoXmUxzEx4cd2sPd64atim3yGgr7kB2mgLygT1gJ4Skbvo8Lu",
  "key1": "4ynLSpmyS5Hwk74dPrNUJCW22g3bCQ3QyvrkDD3z7FUDLjYRazkKAZmNhSp6L4iqBKgYDhky119cfcuwXYA5M23y",
  "key2": "4SPd7QcU51aFf9EBrxJ9WiCASsJGnNDtMZbZn6dtUTfpZHYjUgaBBUm9zT8Me8n4f3hsZGn9LVdZPiiczWFJaEmZ",
  "key3": "4hbX69E4fbMhfY75VHUaAYyWG4pK8Kt9rjdL8C1GqEKUKwCVM4EQk5LGcAsoQujYLqrMdxa57y9Ewdd74HgYNHrT",
  "key4": "mT4mRfE6PM74Sk8twchEQkWceA68k3CPWiySr7woagdif51Kf7tfPEML8BWGp46xA29PKDkXphuWCyUmP4PmAx8",
  "key5": "2RDbzgCnyTK1PGWAPzieCWcgSh5ZSuWC2zu28rj5Dud9yqrMzzVCEN86Dh5ApkAThaPwgD6D2QK7wYkzLebD2NVh",
  "key6": "3V2pAi6DeDixNx9gas9D7sxQTmavmezigxgbgPDE1njG9myqwG4sq2CsD8nLdM1W5ASo3dNCdyXwA6ujKB7VWbB3",
  "key7": "kPWKfecVGrXDnvFWQqMrK4rMtA4Mbc2r1JuEeN4qF163eLuwRKmMq6yNF4A5JMZEBsF3pa4C18yUj2RLF7GUZma",
  "key8": "rXeKdeYsbK8yHuqmeSSjBKpkvJMwTfgDRVFMpFKgBxYXwoDMzYQS45NDDMJx99bRfe5ESFJFXwBD9eKaPgkE8nm",
  "key9": "4NyJYr8rpuLPHWFS1x3H1R5aaWtyuevYux6R9AbvxLXL7e9U5YmXkXrW1zMGQ9uPXoPEE5mVS1UUhjRi87VePc4k",
  "key10": "nP1gA29eXDuiwHuxTYf757rXcgjNkWxnkMnWj9MfKZjvaHnNc4t2f2jjdGhWBuZJ3ZJDdfsNV3cbsRp7nGxDv45",
  "key11": "2BszUvEoyULxwC3NyEgvngC4ScBA1rzF7K5tg32mLL532efD8usnakFrqQWvEurLecNNavjt6WheVo9hqsoNFZp8",
  "key12": "4zQXbVpNdNRcoGCs1SeSgNqSn3oHVLBVj2ReUNMcFDH2yMmCgMk7LCBPRMfJhTfnn7UNNwvJRr7BNC4ZHSTLqVne",
  "key13": "4FrQJpN6Afeo1Cbty22ZfRi8FvgfwXyqyDtKJr9JUbuTtA9n9RMtxxcCFTFLij6yhKBaFN8Xi8oun7Dvuiy2uZBK",
  "key14": "4XMMacsnikb2uabP6Wp5fvf9DeU9AobdGbygGMJfPXgTXsByHc1CAFJfgrK3ACijeVv4PYK9sdzoEoRdKcruc1bi",
  "key15": "TUxChTMW8HqmZyAW8HQn7ATa8ByJg5ysxxcQRGT4u67oWRiNFSBKW8AnGn4gHNutnVUda2m9QNtixqfFQDKY4V3",
  "key16": "41RxipXB5xWiLb1QAk5UGSb86iG7JUCAbnpk2EEzDAmdpux6GKtfTynxQL6m8osL613z8xkFTnCSQHr29egGXRZH",
  "key17": "KzyAVZmjAsHWwkw94AesEFgPYcv7v8vrSd4FnCT9eEVvmcw5k2xWo4Lgai7GkMmAkvhMkZYQ3UTtVdeLVZCT2Nv",
  "key18": "5k4yfY6Q6nKz9Qj9Xe1nKYxZkWL8Qn33oC55tNdENccd3z1dUgJDuk8TL1Sr88dH6uh7uPVvpSznxDkUcoMUzWDH",
  "key19": "3xdP64RRXYQ6VMLcQenx9MkY3b6MEscXPvSM5xvQftNJxoa27n8dw3M6MQnM3Ga8kW46pYBmRFY7hV3hMnEErTMu",
  "key20": "tGB6D1uwFqidAGiwAU8C2NMNd6Gw6dwVMqCYYHzwoPrsa8SqQBsxHHmQcoUdwYkwe2xRXMe95UQQqbsj9RjRpJo",
  "key21": "4EjW2gXxVvacVfchQ2uP916wLSGycyzA9E7v6gbpNe9YLmt8JzzSa1Z9XeE83WFwPAWmD3BjJd8uBf8yHikg3Eqe",
  "key22": "2jJZw4wXhiYrifkm88vuAzZjBW7rUJn7i7TxqnKMoqTdzeUVssatWy2eQkhgSaDPBSpvaoCaz3fTNzE3pr5MaUDV",
  "key23": "24EpNzL3RM2dhwDtnpevB58zyHePJj8tAdfNxYZXF1GPQFXsYD523pMMMvLPMfZ4CCJ9DrTdTvL8S61QDWw8iC21",
  "key24": "ircKRBUmsrKfUen933zhjSxD8rBvVZWJ6JghCeaWkWgzFcU1AZ7ZVTbyoCYVincocEhFo2JbVMQNXA9sQC2eWED",
  "key25": "D7uzReje5YgZ4cvEwvCVgQ8pnKiXLgURfmgXYS92unTJsKMoy1kmE3w7x3spSwX45ET6ZhNiSohMfjqhu9Xjb46",
  "key26": "2BdTjcBdcvnEPsXvvMM9xysCNqYMGCGLYwGd7Hj2MqwQBue6hPwcHT48v4TMNvCf3X7bFzCCpqDEKwwCzytC7kuL",
  "key27": "28K9h7aDmURWqwKfWAJ6TrNhYquR8CPggxbWJtXhuup8mg8Z24ykFALQ7HeR1oGHR62AE8ep6bUyGd6VcfDnfRnm",
  "key28": "3xEc9CatBNvzY1EsV9AftCpHC3zSnZUX1euE8d6n7GFznTw86jPqNApiUM2QawQvdiGHdSu9QEKafThCbMVmTzUm",
  "key29": "2vF9bRFr3Lr1j3bBwUcsWfXqT8AyfgYqik1FgBdGUvyknFRrfcfnh8J5GVPTDjyDNoPjbz9Mw3Wss9byXQ8y85T2",
  "key30": "3cf3QQ6H99UbmcUyqaSPT1P2JewTXJgZMFgKUYkiu77dpxUSyvj3BBsjwbT9waxj5A79XEgR4rXTUtfdJxPigNKh"
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
