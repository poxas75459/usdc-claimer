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
    "ytDWuUxRsExWbiV1bqix5oXrQ41Dma48cbfJQzwjCMVZ5aDu1DRsfHPEx5d2GJk3By3iA9RNGGoKax6muAvpYTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58oEbijz3ephyK7KcGnnCnRGDGfhDdTBekvVx9pLoyPAgLcUSvDmnzDeXcrjVKrTm3mEv2kqgXhDFQaRiKCnd64h",
  "key1": "4E5NJi1qrJosfBESNf1FwnnziwQpPpQHw7WoFphETaQ2GiC6nTFueQU882Nw3KmPvnFLVMWip7g1XmgYKiBcRxxk",
  "key2": "51pkXUSY6hYZhh3jgqpTbCmHNymWNWTBBjHSMk65eQPK1DM6hnDjx3FisvuUnuXNARWU4sswudJ246gFfj5ukmhx",
  "key3": "3CDgdPU8tqiDa5kkvG6nkFBqgFnedTrHwaamDo6WPF9GrqT9WXwfMUqQXeShL9N5hf7CqSqEzqhk6QqhWoVNJ8UY",
  "key4": "4sdV9frRPr89QUuQXoib7RDk8pyYb2PZ5BqkR8Pb37VRDuhuPq74GZA86ciidiKsF1Y8beq2p5bjcc1tC3Q8pxqX",
  "key5": "5GRsusnZX4DkCWbmLEWw3wjkjMsTf2Upst7EKMqDUTz8PPghZZsQmfhKZQMyg8Aruhn2BNTYDgseAUEfQWmYAGMC",
  "key6": "5qHKrB54yrprM9CJRaNmLjrMt8dhMrNsYVmJgJxCdHNfe7eubD89NCZF9dKJpReGydZkVjNJmoB1f41dBnzNeSBL",
  "key7": "2qQDm2o2yEynDsYEjpGnmxqEsCxBUXGi1YspBjG2tXMdpNrmsnSth3C2wDYght1iSVpwejN6Stvkqbqj5HseFmsW",
  "key8": "3okpJQKvVWcjvcP7PY6NX9EEbwgfQcvnMKr1ZsNC2Wx2HycALCWfTmprHNV4HQweE1ngYcR4cXZj3EjEp37NYM9Y",
  "key9": "4fCaGG6adCHJLByYZsdgGeVBT3njSGU2E3qJ4cHEqWUbgrphkqi6W6XuCr98sK5EWS7KFyD4gmm7SwFW19tQUdv8",
  "key10": "3Tzoi8P4W5brSdYFPjbAusULCJD8rAZEwdZGMva1mQKo17Au7wBWWPiAJMpc1TWnAJ5Fmsesh4Wb24FRU1N2TYyi",
  "key11": "4T3Q8F5r77CjhpRQ2ZPAjAe4TWTyEnzM322dkUjxcjo88o6SgA1RhqaWYihLbWPvHCX7pbXvgGQiYm1rKmSgsaXr",
  "key12": "39kjUBFZQ87JVeUUdE16bbovmJDwowYK2Ucn2DEcxde8USRTMAFrLm3RL2tJLjG9w2SKg7Kp8gHLkesdeJUf1D5f",
  "key13": "3cBaRJHP6MM1x1E3cdTbwLKeXzKhwjjSWyjJs3sxtrayfncunEgpJAZM2LqLnMohUcan4xASC23wmYuotaN8Ct5g",
  "key14": "4d5y1HgvLT44eHaqfMuD9ywdNfykwS3rG4sMTapUzhzCW38j5ZLADhWjv6rFCJcskTE2xuWvuEsxaHTf2RfpQRQZ",
  "key15": "2j3cqMqioUyGoM1SC4Rc9NWijYJpNDgAfnT2f82gLayNGRHMdX4KktNBqRUETn2kZQPziFsXh7tXA372Qpr2ZzDP",
  "key16": "3CeJSjs1ESZDmJeNG14f2bVjEYJsgC2oh6bNDqpmZnGikSqCjwYzrWGFmcDhmrAN6HPu2MvLzbKskGfmHKskX7By",
  "key17": "2Gr9JGHoXz2MEFry67HqoGLGgAhM7V4efKjMFomw3ZUmA9KYkqx83UAcX3MVdqEyfJdPkmhAFeTHtDLmoGNCJdbN",
  "key18": "4QyUGwqFbSNuTK8GN6QsJ15KfQbL7q1fAnxq8dDC9HYJ4JpF5igjMpwts5qGD3JqJ7tBqPLv8VrSTvv3t1e2Svmp",
  "key19": "5vj6TDep16GLjn8KDBV48qLxv3YJsbLgpebxKTDJnfCSBshNSBfNkqRVYwAWaho83rgiaYvMpyfEQk4YxsCL7Ye8",
  "key20": "REamkvxv3W9F6BKcJstEtTxBcMMZiNDeDFKPVgHnJKN9bn5nPcBs478bHfTc77rhSrfdWcpbLVmZTngDJdpK1Rv",
  "key21": "5Zt9dGHcS3asrQSyNHUA2MFWbpgbNTcbHsFL9n8TUJeT28qGS1HwApjRbn9udQvwmVizKiETK9xefZf5itRF51nF",
  "key22": "4Z8K6E8zMaAbwWeN6jTsLry1Wa3u7DvWjTJscxuwxXCCdVNazuJJ6nALeEiLTgHjja1tvuzpWEe6XYKS2xyNkXmT",
  "key23": "45Hs7NzVGjpRHkRx3FGmbMUQ53az9ufcc7gGeHbrhFQ3nbJdVeoDdZkRc18vTj6bgZvxvUDpsD5dGceNsD33wDGN",
  "key24": "3SCZzSZV31FUk8eruHVEV9Rmtpp9U15zJZVVh1LCMTHLNPYkv7jFmpYCYpconApurn4PeFYGB9HLWUGQPnzM8aej",
  "key25": "25XiXumFnGhh11e2WkN5JU7nxBC8JZTqrYyNaH6Pmcz8c2MdstNyWtZcbF7srMwKqnMp8s7sADpBUqRF8uzN1kcy",
  "key26": "4ikLrNEuNe5ExFT3yeJf7DurDRdub2vu2cDsWB315GgDDoqrkNpQBjRSGAMDPwcpUUiaUfHeUJcjs4kUesV9BAGZ",
  "key27": "2KFMeActEkXXW9HhfnVFEXhrBV79FAsRMFKnTQ8VgedkEdVoeJRHLM9UJrgwzNP8sjSx3EjmAwSikiz7ZvSVE7uq",
  "key28": "yuE87ZXtJSZEVadkTCSvLJBT7xGXvMeYHkHrkGNmyobLfgr4pdpAGmShFw1owkTXmrVUKym19mNwJ1EbZyVGJSM",
  "key29": "3viSL2eSE1aKHjWMXvKwRWSwP9ACNx1XpJLfMCqCNghG8PMPPGx4meeeEUXZZymFkEriKMVbKwkkzB17oganGyLZ",
  "key30": "25L8WrL6eAfZ9FQ15UwUkCg7YSbUMG7NwDCBNvzA59pJ1JenhnzgoijJuc25TmStjfewvGFA75msnpYJMTfUFJ2q",
  "key31": "35d4jbnd7s6KH1ACDympVhk4Gaqo1jpGWhNTPeBm9pe5C8NKk5HHbBvf5rKPSgteR1VqsZcDbXANBzDVLhnm7Vnm"
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
