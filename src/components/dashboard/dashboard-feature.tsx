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
    "5vJYVohcWPaQZEbbxADjwuGW7URU8quMNrBVNvSL9hgckEcYVYJJ8aahvizdPPj64mC8feUdjrdwpahQLu8tu2sQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J4ZddfyYM99yL4riEEJYx1GygM5CqiN2u3gEyvED9C96qQcLJ137T7tvrbccdo7GMZQWxbSvCET2k8ELyYhYSqn",
  "key1": "58wmTJt9zPTqRYZw1qQqa6jemjRLaTiGtmcdG5PsgJrXpbTVKgBFNgcAT1FrZdg1cAWYKKKpTpDfpiXB33SFeKes",
  "key2": "3wXRfzYZHKAFt3GZYdmJCTMqJu1Pky7mAD4k5vgsn4RjCDejbsnSAYZximPKUBwAHfMibGmwFbTbKtuEQ3NT4Bub",
  "key3": "29D7aXQZxEkvgRvjnfCw6SwuVBwwP4dit9SADp5dGMzodM79DeroRtCXyV81Ptnm86ZYLCNYRkkXaFfunXtymxJF",
  "key4": "4Ze9YreFG2C8tikVJSuQcxi7eqXKEWPArN7L87aFVo7WST3BmAK2zQUWbVEGiP2vicdhW9G3ptpEjdoPyPaXJAJi",
  "key5": "5yr2mNpe177jCbncJ2edz6CWiLBSDkjeD6Ek4YzCFT6pxFdvveV1x4nPEC9eYKerGDovano2FkruzmAyL4tZejEi",
  "key6": "4LHirMFwrp11jTiub7BaPsJAJCj3Fxv5wqpHyfS45pMnxjkBtxQVywtsEhpWVnBSp9jb2TBDX16ojhQGREXktrT7",
  "key7": "45HCLuDfGG3WahDQQDorDUwVFxNBqtEpGMxkGzyu69akDECL3ax2qaa3KBYEf2Pxrw6CTJ3kCGrab8gVJ4F8BXa9",
  "key8": "27zC56gLP7QMLkDA5guMaKi3wozedzGtWSaxoJsqeZP7L7bYHGhpdNDRTz9Z4x9gMkHLe9gr9YU6tH83agzV8TCZ",
  "key9": "348MWEsQv4BoAjUXYu6X1CPPzojt6faBxDKcf4Fjkg1NMSAkSvsv3Wtw5qgkDPzeFD4esQmiJ7H6jdktsH4r6RR8",
  "key10": "uxnCMjz3ArbPo2LnXQuJMxV6yEhSbQEkgT3xqB5KCbvoFnNo2zwjuEAyN8Qqq6iufGqPCQTtdoNcgqpLtDq8LFd",
  "key11": "3R7s21kCqrH2Rd9NY3nUtFnUZ9gnLKyhk299npxq5LhWnMV2nEzrbsiprCTUjvYN6MewFKywsgp4mE8p4L54NGHZ",
  "key12": "5giX8mHRpjWGTZ83cm8HqbLhd47YQjrVWqipVRfqwFo7Tz6kMNVZh1XzFiyEijoCEan3iUe35EbvwcL3JVfPdiHZ",
  "key13": "2NdUfyH2imTx6KenPQ3TnJd5PeuT8vcP6ve5ZFHaTsr1BAPTNf5J8DQp4X3w38syy5FRvBCjEcqUBwcE4h7MR3mm",
  "key14": "4SHQk2iAk2hi3hvR23uKj4ge1k1RatXtewncM3E9RESyV2xt3kzxYm5zs1SbbpNrkjSDqhX9rLY4pspf35rBmkBA",
  "key15": "3sgaqApv2fDaJqbd7ZqSh9pHJa54CvSH97f9SHRM2JcTDBKoaEPAAyif2q3DNGWyKHvbpppu7wPfzf81GepD52wu",
  "key16": "2MgkoFoUfcTK9i4ZXXZHT3GFtXYGqUWLPhrjzktJkUwiyqodQ3xfMQ61d6KZmNHjMAhTcgF1ZcwsDdz3Sa4JymLA",
  "key17": "2ft9Z2o5eXk4zrGFgt4PZPF6Lew1vkHMBHZhfF12ycymEJm4cK5nS2JGTYBF9Z4GVRVCFo5CJGs1GUzK3HrjKPbc",
  "key18": "45stkip58UJSv8U7bP1W1cPNFKVRHwYZpZssUfA7Tumq3nfToQcUMiGa3LKDNyfFAfRLzrz68FvLHBP7VsNEwW17",
  "key19": "3o5DsQgRv8XHSvoJQXv6wHzu9zUVdU1dQAjU2XMiMqWDLtb1WNfqjf1a43rHhBnKBta1bmYfh61jUFEDwX6nVz7W",
  "key20": "62o4RFK5DxgjAC7m8pkVp5tbJam8fqQX3rXTfbHr89x6HWJCj6ZpNc3pnptbphPeqoY1TpkGBrsK7eULExNkzSsV",
  "key21": "2bs6TsGPMUTQKcWR1JgVoK7GKF7D2LTsjUjsiEZFMf75ABwK6ebQg2PeaifNE7H82sBXPrvQn3KbAoCBsr9JFDba",
  "key22": "5qkxqXaGnzABP8ewbkM3zJf4opwchguVZp1ZuQnsfiJ8MejPN623g35k5yuYoDn62fZDxKznM7HVpiTQW4PqBut9",
  "key23": "3qTE4MVCqsw73ztZaLyPVTkt2BtPGS6K1FkcC1DYbd5qmKW4hNuomsjrhpCqxaNLJJfRJdShnwuirmUeHo5ZdHPk",
  "key24": "3X9GkXMky2b4GcAJdr2yYeF77ptsNC1PbRuZ8c6724beS8s7KWMinwz3UjfwpKECNrZKPuF17o8rmjKKHuD7KgFJ",
  "key25": "61bFvtVtdXuk3w9ZqdGDqSiH24ETfKUPEaxyCG37fw59Qd11S9KMRbirKoZsFUEKrArDvo9vQ92XgtFgFMDbbZSw",
  "key26": "3nHp7QjJjM9kTiUHFWfdWAG6ACZxaBkAmc1g1RuJHyiDPQsPM3LXviYGHu8DSdJKr7xdtq7FbMqLfjWD6TbztSqq",
  "key27": "2Pr9H6yy9d3WRaH14vzL7VivbxEMMPpkcoFr6RQekfQZs6NPXmVwzvby3cgzXcXSFGR58ovZyJPUxzJiDxzx4cdd",
  "key28": "4D37MB31gEYrQ5o2EPAZTf7kwaSwvE8BjHg9d2cNhhWUJ61MXq7xhgo5qCWkKvCFDTqGYyxcwb4ZAfxrPBJ7ffE6"
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
