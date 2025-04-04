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
    "4WuLVqrPb1XasRj2GdQ5Vq3UzxqH3aUxkLWexW9oztjhRHVSYVwsPQj8Ndp4ZbTnSeqoifFbvrucMmnqPxbL2mbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K3h7J2fo7joCfuT1wwjHyVo8KJvUWx9mnDSYWStTQ8eXNXjWLRQZapyUmgGWnyQGMWwcM2jRHb1MTn2oKiPh7Ui",
  "key1": "2krpyMRyUD4z8iSUi2ot7u87MD2mAPuHbT6ATkqczBvn7T92jYHBhukev741y4THoGeGBk8fkA8rfopGx9a7QsMJ",
  "key2": "WazgaSwU9wjU55ZtC1J5wtk3Tq8wQJGzm3A6ozC1BD18jaZrBoyDgKkC5NedSA8jgFhPbKBYkxUZpTmo7WUDdMq",
  "key3": "2VWyfCqjbZYnk8V52zsB2XtyASWHS6DbMJHprxTBSAHeeqAVMbV4zDhMEwhLff6uzXGM4KXQ3KWMrqRPHdNNcU9L",
  "key4": "5oxXsppUdQrXnUD85i6F81Dr5AGyBTSyu9V63fxjRn9W3QvGSYMAkqvgi7MY94cgVZshzcx3bsmuzmG6AnKZzinK",
  "key5": "5Y5kLWJeK8rgKcvbo8yyDbgU14KVHX4tWnYV5ugA3fpY7DhwaEGfoFZRvYfVskqhKUKAHLLckhdwmDu4TJ11tF9",
  "key6": "2pAv97X3bS2Ktj9Qq3SALTmFGq5enN2WN6pCZLtAQsPdieQAvZa6wt4Tj4Dee1bQ3YL7zTA1uzbgtYWML4NhYcoC",
  "key7": "2pqCWeS4ChLAcedF3SYpzyGRFyChe6tavPsJ1HnCyp9ebZCJgNLBA1teWepG5MLjo3wbSATwBEN1o7ppae3zzpsL",
  "key8": "u8RdPfJQxwUUbdqGh1z5SQxFD7V9qgyYbV7T93jkCsw3uoPSXXpSPEwCvV7LNWQuo2us7HtBkJhaJtR24zGMZra",
  "key9": "CgHKQFgywhUUo2eC2BCWdGPDMmsPGjtLexbfz8sHsXJWwAMdU7D58sqrDTHVios5CtuX59Bi3ejo9HCZrv71ciW",
  "key10": "658W2eJnqHjZ7dvkr2kvpLgTPyp6UXjb2kVE2VP51UFCoScdHvi7HCvySNoqWmrsfya7jUEBQ9jT5KPknkVyndQB",
  "key11": "CiNMks5RUNLVrEvnY3Cj4f7YAT4DFwvYNKnKsLD7JmFRVSRCyiE6MPBMp2UJgWzZnNWDNsA3boMuLos33VEsGCo",
  "key12": "3bSn8saJHz3Fy3GN78YjUP816geQDYcBNjFjqLECfC8KdbY7QqLqS8hJDr4CRbFynt8BT5onAZBia4xKY1vbcXwE",
  "key13": "DtTxFYBya8V8qWYkN35cfuRuX2E3BxZyyLDcTh4qruMr1ZSz7c7owN3ZaM5s7sKY3ynuAFBg35qFKqJRqqEn5KU",
  "key14": "2siCaywRffWs8vkdpqAVe7XVmBxGJveGSbPoHc4xnZ3PvY7iRTd7S5uUatbfQL6bFJg3c1crCK3BVrMcbBuZRFkK",
  "key15": "3VAQS2nRtR7HEZEWVuEz8DD5nmDpEC32Perx3WDLk1GKMaeszb5cjvgowGMrqwvhoYWpN1x3W2wxzs4jSius2BC1",
  "key16": "3vW1hvKrzxvQdqsk5ZVNTBo8vXv2PCBHTHe8Z2QSq8eCpdws5fuNoS8Xi1SY75VkV9EQ7Qb8kB9vSw8PiMR5SVKE",
  "key17": "5RMLfhhkFhs97RfpS5FSix8xU8RVLLXLg53qHdnbuAJqJaqiUxHUn3JKSwFjevjLP4KZ9TG8nf5TWGRibJdV2YRn",
  "key18": "65kXgaEJXgyjRYA9BZFMgAV7yv9ozPGue7F8xNRY76GwykpGBHXCE7uPoFMdRepCnGiTuDzxcZGEjjVwjrD7zUMp",
  "key19": "2H9t9VLkZbcypDbGJoBKBx2ueKWxaAMVDsXyfFREu4sWfee5VmLyZsJKBeVpcbGq1FDG6AwysUp4YBYJG626u4vJ",
  "key20": "4mJAAF6SiH6oK44Lh5gzzbjWRv6HwK57ufSRrU4JhdTa9P2XbAF9qXSVoSdPPA9cXtvtdwJCB6BzZKQ8nQS2VEJZ",
  "key21": "4gVe58jTyq913SBbAcpaPZjoBt5og4sxGQ9ZkWf7P1rFftGFvTrBhM93Va6JSwirxop42FZk1gDV7RVdc5EgSLtE",
  "key22": "5VujeWTG75W9M9xfKmewL14uE6KesGTGFjhQtnxiKwUvHcqDMV1DLD1VtkU3Q7hGjXesHVPqtrMKhduTKMvscCiE",
  "key23": "5gkmnUNi2fd2rHpWjzXi8bdhHMUK6m5nZEULf3EjJB1zjhpVb8MzoaBWLK9o1quJK43FEHVSnpU9bApUdQrtyxGq",
  "key24": "4jboyUstaKxAcM92WMtEy6MZpBC2sx6WaHnVFhVHwum5YBW55VJRfqjWB2pK3SE79U7F5oxnPMkgFUUBEBQ7dD5b",
  "key25": "2ckn7REZeB1ZKJKJGpq6wu7r6ZTVhtdX4QkzhZkshQXTLvtGuQRpes1QAuQHfsNofFojK9Q8phnPx6TUTMCYmJcQ",
  "key26": "4ByQtsNKhbMJfV1uQ2wK4WafP4FFc6eqo4wsh1q5oVKV6AyvyeqfTaSEmLpL954D9AgpGLRoykm3Nqpd9E1YwoUQ",
  "key27": "4tnuFtuHfM2NqGEnYz7KJrEXWyzYC2XDSsadswMitJs5F78aq6yJJMEeRWmcHFqUoHY6Mwk9t7ft8pYSbcWYAF4d",
  "key28": "47VDwKLwbG7Eq4Ss3iScrtg2oAQLzZYPGXZCt3qK2JBZGduaJs5HaMVDaUQbEEn5hERB4zXB6n2fiNkuV4P4rdaJ",
  "key29": "De8qpncZABJLWhtS41G3ZUmoJtyxhSWJ71RvJzJWvRE5MZmPb9TBF9BGwEqUyk5e7DkUZtdo8hGTVhDyN9y3vsk",
  "key30": "4res1PfNRzzBZL5JydxDcG29b8isvnz3NB5eksVo26pKxhEzwBk5SVNJfWy7n7ZUBNsLtVMguUviXiAiSyQbPe14",
  "key31": "2TMMLZHgouoDSuafiQ4fz4imb21TapcqjyngnUCuFZeaVgud3fmbMrABYZeBWu7fFaVnSin9DmuyRE5bXXhUFsVx",
  "key32": "5dKZ1Lgx9hSUKB2dwgQptWcpWJDgR9p2qrdLUC2BLaDB4xVXEE5n1JvFiGbCdYDY2jNZqepKxi7PvxEAscx1pjPz",
  "key33": "2f33uQEfyzFR6KTUYu5JNPeqCVSPL2TVxSRyQDH5NdS9jkMNQokWNLJhY3hhmzwczmw3xVG87yNexs92MyGTunvV",
  "key34": "2wV4Ntsi8Ecsdoo3VuQPZcuhsjEgNaVy5x2q1G3n9VNce1jzfU9xAMvikWKXjujeWeGwg9pnzUvhGmsL6RjrnkzM",
  "key35": "4HMA44B7v21kkZs5wgCFie71MqPnowwsftFyLy4PoqVhDp9K8mRuS1YppAH33k6S6PF1hY47NN2Kiua9EGKixtDr",
  "key36": "2VbJ25ffyXaqbJj2Zuh7UGw8oNBwngEXbdUxZqkx6AhFrpR3G8ubfUNefGFMiYW8Z3Z1exha3x5wQEzPibjXqXQ8",
  "key37": "2HxUy4PM3FovCrnxpsXBaGMuG9cZL7k7kKcfcHupMEUqTmVi7q9iZBGMTi5PtNdNx6heujfCbt7ujqPB5mXxRDSi",
  "key38": "2GB6MXPyyEqtU6Z8Dfa7MjAvjk6giMroaYBYMZXGVmiTUygTqqboZME4Yee3wYJ6KNmvpbHfE2WcyJxdXR5WPNjm",
  "key39": "4yHcYZpDZmGe6Qdzpo1DVxJurhRaNBaueUTx3fcPVes9QDPLZ7FKwfNh6oy6XxcjfWAG4MiyFuarcVHTvNkXUae8",
  "key40": "28pSae4FH9JaqP2a5htCVCGuRbRcb9WvCbFRFvNkvecTvQHszLA3CwseAQgCWiWi8zi8kUfykidXdiKx8BLHQAEq",
  "key41": "2RmutSYR5vt8x4AkiZ9RWEZJd5M2XAbAnZCv3gFGG2gokxfaAa8AN1kN37rYmDXfAD8ZJc9H2QpNbNp5C2MAQfso",
  "key42": "4BVbWG6TP3fHwvk4s8Ns3v1kxncP7zQXJnhYX8SK85duqTrydQn9UhG3HxkpUnER2S8S85ynjZfGKYf2BaH9GEzy",
  "key43": "1k8o8rEBscNnRq6q5NujDaw857H9YGPiUkwkXG5M6zfQVhFvbb6Fg1k2NfnPDrokQ9Krki58KNQQbqiYBdd35Hb",
  "key44": "3KBUuqLtuDAF9dsVQc9eJTMrU8N8dVEwELkjkMTcysTLNaTZocSxrrE1DHCSL22aPxRfhfV3wQ8XWu196P4CnfRX"
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
