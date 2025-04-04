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
    "4aqPFXj7trSGm6GHEdKS8dsYs55HTEheez2rR8baWKGYUgG6tcGXxys17XWMu6qt4KBnHUzcxXJuFpwDqFG8GgQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YMCaN4huDkXtAdmbGE23KQ4CSYLHad1KPbvVVvSt7UFBZEREgWQSKVBNpfbfwHTbxvxAMTxecHtAYH1yTJuqjun",
  "key1": "mtZTD7jXfEiaGGn3i4WaSBSE8NGTyagfR29bE16FGRvKFYTaNsufmzs9geHRwsrvggM6GF5SFia43bH99Gpbhto",
  "key2": "43GtZJmLb3aqfUUoZ35ps5myeWw3STxrjpGovn1tnxRYV3FZr9pxBemo7CQ4JAw5cDTUbexdDiFQbZdktstsTvW1",
  "key3": "5Cz5LCxniz9sN2sMizSkTSRfWYrtKT3FdMKvX5b2z6VsigemsLLApo6pxhURFHVLqaf279FFSbsBwJUG2VRqGcu4",
  "key4": "4QfXHHBh3FPNLijWzLY39fRBwPgC4hLBpavFate3BNhn5mEvE3opMd3xep6aMy3GKae6C6jRVcgAgdgW4PBAKVuo",
  "key5": "5YaDHjwC7DjzW3fbBPk65nG8rfAK98LKpKTwZz3asw1XZZKzzjHhdgRKBpETGVYaMLYcmy6stnsxVn2emUcDjDto",
  "key6": "8TMBR6uYtv12QxvtZtVysU9ETk72AYW6wXD6psDGgdMz3pGcdZyr4dcFZU8niPbWFYyMNTiz5q8djBkYANATANA",
  "key7": "2Xc9dDdAgp8WXPEqN6t99f57jxCtrT7BtpJ93hrdM3ZZ8Du19TCn7ZVpQgaomBAen7DdoMGxVF48GMWwWkCC7Yfj",
  "key8": "3521WB68qemQq7WHizjfRvPHwAgfUF9bRfkJ7ZgEMmV4m71takXxnRqnSZGdSU3jQM9vrvoyznBM96LNP8Q6SxLw",
  "key9": "4qFJzyZcpb1RdagDhR86VTe4sfWtWaDCa5Lwfj7rM9qSZ6xuacHy9orpnNFF5hwPHmkxJj61dhEYNTPNzVTcncCi",
  "key10": "stM1HTmj7QDeRT2Zwt449SXChdvzABbNJ2pZz7KRsE3qu8jzd2YdypYdZX4dgGMcgrTuy2ASpEs7mFwdYVYrtBq",
  "key11": "3jtK1bev2znHNELQJact79ZFToDTQeGhqBMRwe5k3k924pEbsaLEq6E3Q3u38bDWNjcK5iazk2RSHnuTL9qvnLGb",
  "key12": "67USmHSEvdbvbxxbdEcoC1xd7AjeK6d2F2qZc8eR5Cg6ZgpZ9Agpa3BH8TdiHJtNcRvkfpgwLQAQVQAkbTnya53",
  "key13": "E4nZ1WVyeGSgFycpLg4c6qoqostSsUkdxuh6efwQHNQRV7NPmbcDGxBWZrt2K8GAWDwr8kVg2tnkt7FcqGWCxf1",
  "key14": "57Hf7buQQ931uxKVUajGe4SKPg3SWitWxaCGBpkzRYDLCcXxdwVhN36m7as8h8kPYgmgwA9VbD24grT5DeRtTaRR",
  "key15": "digBPrFfDzke5p6ixbQSpHzkkbR3kyhK4iP8StqHf88vfZYR3YQj6XkbgvVyXJcg52vSQZgZrWxf7ETexhVczdG",
  "key16": "3eiW1rPd3us2XzL79PqKpYDp1Dm2xmq7XQHLn2HUvdq78Ztubzvg2X7FHGFMQ5LkJWnH7Bph2gc5BCFvHuhvVqt6",
  "key17": "5giAvheQktTgcHUovnKZuXbSCnhHV3o5bdRntyAMFG1xuX5EfDuCy2qfP2woD8W99T6HZWKezpZh4KwvyDYhRLP2",
  "key18": "YaizD8jwXdp9vUjEssuivK7kCjuryxS1TPvSYFx9x31HPiXnDW8vUrZ3PZVQk8o2EYakPNsN839FbrwUWsAwR4H",
  "key19": "Q2YehEq4vQhGVC1uFvJTUc6gTJjW49pkMSenfN7WoE5bcQDecxfz6FQuUP799y4avkcnWkAKApVA677GiMXyQYR",
  "key20": "NPShLbie5mCSaSxNqozcFFGhVk5FhhgT8gskrHzyaknNEq1LyGwLQpkP3Dvg5hTBcYuQYFGKjNk7uD49Xbs4qd1",
  "key21": "2UFuU5pfRGVCT3nPn9rDh7qLdK8tEVdveuM7Avrc2Qcjz7ugorWbh1VYARffgXzdJVT9AtayzxCyKxnYT6NjD8nS",
  "key22": "5BPLisme4wfVun7NDaxJPkyJCKCAmSDJniSYVdrhBA2w65kfLAfKERkaUQR6W5atHRUCJutYuP7V12GsijDCVJ2e",
  "key23": "4wtkVGJqzVHffA3jAhzKfS7QHGn7Mrz7GuE2JZVjCDMGvVggLNdN1MGGoFuE7AgRNSYqSm33u4tdAMk8k2qKUMt8",
  "key24": "5cDtuhK8XeP5rNVrDdvpifsL6MqRnzqjwPaVhdwf9JuxxPLwV2huwsAZH16vqJ6753kTmGvGGCoN1BCqu3Pr8ujd",
  "key25": "3xDuX96EAuzJNc8rAL16kdyaVugEFHuMBFf91Mx4xfArFrcG6w221RP4pQRjFyPib9KZdAAFVDxHZ37g8NxiDcFp",
  "key26": "5hJjBbeyxeEuweJD4N9N6qxWJAVajHHMcJduya3mFi2Ds1aYqLaYwk5mzizoyL8A8gehnqi22UavfEjppDko2kFf",
  "key27": "4wMFLnuAKA9CvbvtCRb4KsPkdwNCGnoDPrtpLuaz4YkhAgNhT8Fvv6iWhFfDpWDBvo62oH5JPqsU9W9u7i6Pizr5",
  "key28": "3vqzraipbyBBELrSuQR8mLgfYjjzDBDVDoUeA9eVMVeGXkvvmqJswKNQHDspUVCitR3R2FfuUdFJfdHvK9XT5QGR",
  "key29": "qw7NZPGNNTVLJnbE4m97LJLB8F3yMrGFqfsqeqzpeUNcu2qQiMvuBeVE68vhW3jnX6gK3cEzKbkcW7ZZE8iC8KD",
  "key30": "3R7ZpLzZEo4tzkdKxB6tzBpNoFaaF7u7Vv5YeNJmsJsnvjgx3ygLm2aWgDXCR3PrqmUWetoYzW6UrQnLrJ17m9XM"
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
