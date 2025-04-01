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
    "6s4fPEsjUxA5MEvf3xDNCybg1LY7Vqj9KZ2PML4CQLR4Tcmooh16r57e6imVEnuDBseHRdebo7X2WzKcQgaEy1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G3uwuzFcwzAcnmskdGvK1ACxusPMnfPwt2FDnzK68hCLeRjg4sXUALLzw6kWhRdiiCAeCciUnhGvWPfMpzQmX4H",
  "key1": "49jacnY9Smppd3NPBe412cuogfUT2L7oSHid1QB7vWf62KxgPjWuNBhEdeTQ6nqLo3oGXcdEjKufQLUB2Czmzi54",
  "key2": "2hihjryKtxToN6A9sJybSaXJphgJXrS4RYobWrkk9vJmpyumJVGZfjyD13W9VVTo8m334TbiV3Np3rCPPXB5Wqzc",
  "key3": "33vUW9kFSswbsnCtUEnmpX6ypga5bZZqoLsyXMskqi8Dm35sNvzu9kTTPUSJzvebhzCbDJP4CqB1yJiLrZTYJ3JY",
  "key4": "2q4mMdCgPj6acPnnf74Wcy4RfLewQTEXpe4aGbvfPBvwpK6KryEncMw8oaEP9wevFmUpzbYH7ZNN5UPvypZzmTec",
  "key5": "52aojJUuM9J4T2sNYfmrshHBkid6y1stNtUjQQ6WHJS5S9KanVHYXa6uPdKmHJm91AZMsnemSXUVQq3dc9i8XAM3",
  "key6": "5557nVTyxhN1k9govjsrVVKYHQ6u9Qrr2nN9rREpQGcFtHGvceE8QJ3k3Vw2igMELRsX7sA39BvfdHdKT7ttAtav",
  "key7": "5NGo3964oyCvpbz1bsde931EBvyLmG5YTpuwpBFrYxsZRKmziBnKEerTaeGsfsegHBx6BBD8icr6xGp2o2wxaZBr",
  "key8": "68yfTC6mSMPLfj1wwnAi7bothFAJzbavQZ9fSWpFJ2fyDDa4oDebFbvtbUA1NpDpoHjNtgKAMMr72qeZuiQBwA4",
  "key9": "X9hYJcsxYLN34SnUumQzY2tpmY2ESED3ESgdyR6kDWXqoo6E7BUNqhUpiajhqJKHS22tJ1NCvepbeKYwAyTBeKt",
  "key10": "3PPBPN4VFNU4htCUnJdt6aoQ2UL636NmwXYy4qk671iuku3djBPcVAi4v71DtDNFeTC2yGJWV9R7Ebt3bS7ibWhE",
  "key11": "JHvQD26smHYSGqoUDemb33oVRr1th1gf6G6NtkZF46x5TyFG7UaokSKHTrWDoXoNtuRmbq78vauExCWQM26mpeZ",
  "key12": "62tGzquRMbLoFYLaL9TALNM4W4yyT2p34JaQ8szXswYyFU9XezPkKFKVS6dDTY6Qe6NMuCz4CRgPGftZyaAqUKrm",
  "key13": "3t9te1kq1uJk6J5yDrWyva1aPMKLi1wZJddCxiFRSojuBP3iER3B3KNG5ksSSHhQP7kep2dY3eGgTMeaVudgWbpF",
  "key14": "bJdarPW45ubTQS1apguWwU4KdRbbknTSkiqXjfrac53y1ie67jJEVWruHvhgoMR4PDBXW8kaSJCs2hB8fKHTFYi",
  "key15": "2JSRJVVRbe3uSe3K78PvqBYQwqc5eQ1987mmmw45wBQNg4dS94a5yt1B6PhJRPkmBEWDd35K5MQ1VCvKddeM3pTo",
  "key16": "3pSDPyH7BUEsMykRbtpJe3vqmu3Ybe7LpVJzGgH787y5XwasUGvPBTJatZTwQdDetKXfe4tENw4qLw4FfCbU4cTf",
  "key17": "vMdmdxUMdLnJXnQms1Ngxqe9yrLhFQ47n9qpw44RwXb6MTDmKifCLTbC2DBF7pi5Svodc2z9vyQsGebHSwNj2Cc",
  "key18": "4HYWxF7gD6pJEiusnd62Cp39EAULS3mnCnQdXXqXMRD1sXt1rTjbEGw47t8KkvWEm7m13yCActoC5YjLhFThgaQJ",
  "key19": "4t9LodnExZWKFFmY9RJSNLcU8U325djH5G21g5djmXUxASB69MfUyWeFADn61U7PgTxqUNnnVhd7zyXaPwY7U1Dn",
  "key20": "66xoHVuwCUELpEYBrex1ugzme1q6mBVQ9rFBEz6UxAFWAYj14Nr5pTwCBHxdqncWY6uYiqq1x59dK42ob2oKrgx8",
  "key21": "4tmXZp78LtvtuCJijAjWCTtkbFFgJV7AmGkuA4hmNeCZHZxuHGXJk5AYKFGDZnTqsDaR6zAKsv4veoUXNKmYjDBP",
  "key22": "e59VeRiJEqVsDtuojopr9tcvrg7X25oAZmy3YLhag78Wf5KRcNVu3yoQrdoLdMF9BVh8avgdrtCq47QvvZJMwmS",
  "key23": "5xMiex81a1vMmtt2udC2CwGWSWg2XxPMvWUF2xBdasxVrYEXDKdyvPNXCrgLu8npuWJmbTxSn6GAX6vqVPehrEWp",
  "key24": "5QtzHnNqnJ76re4TwMshBkTbr8HoPWSqxpuww7njVY81KsjCqBfEdNjzMryQk3nRCDtnAnsiTkURcU9WNRXyMVa6",
  "key25": "61pRTsdL6gut4Yw8whw7AqxUk1MXTmBSCfDKT9JAv6MhbNMEJPqf1kNZp3BeAeKVQAWMnQVKHubN3XrVmoVkPqAo",
  "key26": "5B2FBPdm3RczfwEhvi7zgJmvSM6WKrQ63JdAcd8St3MMnr2juM6GaFt8GuNLwzf5M6FKrs4JY5SHHgxF7ti9kw48",
  "key27": "2tojwQwujqfdkziNdnYNEz13SY8Y97JEBYbtGg7P7qqFx1KbjgyPWi65neckpgtjVRCJYhscsmxYCRgixUhwgj9m",
  "key28": "46R9XXjsXfcZHBwCygWhuosvaBc2BdGCtiAMCcWsr7qzEC4c8WDbGo4NYfe6h9RPcTnpxDVK1G5EjExwzK7XGy9C",
  "key29": "5QX5XejjA3v2pmQWrpyhgwCDdsVp5mDT9qmaFQj1oJZ6TtuLaYZmv7nA6B1KpBTCfD8DEiouV7KMCmw2w4QnxMJC",
  "key30": "5MMqfPScLDHsRNvCSRd3wPYotK4PFysJR1kXFYGC7rky4zwLPWhfCp7pZSXpFUEhA95ed28fiWcWzumkQ4tvmzQN",
  "key31": "3afLwNDoSnwoU3WHt6mLhd5gzX1VTbXvkxmtyMrEAXrB5vqwXD31DPsKZvT2jUozotrQ7fMdGzHb1R9vYcg3cdJX",
  "key32": "VjTmt5D1wg4W1TKWZnuqZdJrSf7XGwY8rYbFTsynQpPn9nyiyjeqnL9FtdrESw4uPHkgWd2HkCCW3iVQdC5HhSv",
  "key33": "5qxYnMpRCLRpQe6MSwWLM41A2XSR5s2dFGnoTjxegRH1PVB1osTSGLbfhEtiLHEKV21u6Bppy1dy4EzDvEtG4GY6",
  "key34": "5wJPBmCMPDjG3NmMPf5cLVSBKesLQbVHJxy2mLJmJssRF1YnpFhubHfzDuv8DtRfCHCtLJzFmazauvy1PwCydgBC",
  "key35": "4h1UTB8AycowzcYqueNsb8sxuCWPWvdjW3owUcynt7Si77uaRcD2taR6iSJLZhTxpy54nmHtZTyedGPABq1JXAzV",
  "key36": "4ShmXKhsenQ6KDbpxaH5MYih3dKHbNeW5fDGqJE3fQgpeqE38injkGfkMEY72dJDfZbcULG39yiqkmWP8xZxGDkU",
  "key37": "34nQTqdPGSduFMWoDjdJAmsNuGythvvRbMC4mrkK1AgRr6Adg1UDT89wbh5bzU58tQ7pSPABHfJivq3UHcbNMXNZ",
  "key38": "3u5BhZoH6mQnFT29R7zSK9ggdwuUP5Boz7XMR3pbC3mQn9pu62sjKMHQ32PudboHChH2C9nnajdJEyGJpARjfgKF",
  "key39": "2UKzaG3PyRF4DNWwJZU4Dd2bZ3AencnHtrXaXZjGkNpfpzwonbnMnstLEpWDBJWWKwLTcShwtpeLnigPR936XGyR"
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
