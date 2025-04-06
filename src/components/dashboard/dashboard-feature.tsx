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
    "ep9MAAq2zjySFrk2QbEaaxMqK35kgtG2xeAZ5WxrA9mnqZHBFa2G1r1PTFKTJ3M1UzPBk66neRx1o2ro1Jeippj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n54SPjFavPGWydXEdzuWV8m4nFYugVoY8cDkut8deWmQPnqsxeyCPt3XV6Tr2hUcJDxFGAnkJ9GporWZWYedQeg",
  "key1": "38AQqc6YsSd8z624tWRCUdfhWqUXLt6DdH9UVj6sotqit3DUG8bSCh5VQLHdNnWgB6SZ5rxLH4ckpaAKTS4fUTQz",
  "key2": "517zn1NPp1dv1NkPdgaG1DFzAbDxEaUojB4VvU6YVhxvtkGEq3CCe9yxdUV3fMiUR3WwMZ3wdVFXmrJSTs1V3AS3",
  "key3": "2N3RXcbACxhF3xX6mxhJHcocPmbsQ3HaQgQS2tMYe2S2MyGctp6qDofwZ5GPHVTsmXzFDF1diYLCVdZcAkWLrAKo",
  "key4": "4psU6B4JB5wMdCCpsLf9rEmSUK2S6tV9ysYE6vcV4eciSyw35GAC2EZ27ctwMso1jZJy9Pext5uvZHdjgo2cPaK9",
  "key5": "2TPR6P6GhHEtUmge2DNg8TRqnuMZD6vQTjTgYFeTNpeTPgpiDyNhJd9jzByPJp7cXY4D1u92K6bS6oudaydPk3Gm",
  "key6": "j6wWfCZd79vVSvfxMo4jbecKBPVTKmcDPhm7bC2EVQgQDyDYTQEV4tThfdyfQhErdGdqFZrWVRzk4PfZcZzbazn",
  "key7": "49NLSZcamEFUMbiRKJ92oidxjnJC966A643mWa3QaiFpP8nEiE7HZzNTwmEQvEgve1Padtvt3pJ1wo85WNhSnQb3",
  "key8": "62oPE6uNXJWVCJnZc9upVygnmJjDReFFmoyAZikBwfVSZ5XuFSVrpsPmLmvbyziyZ84mQMBLgeyWUdgKJaLVd11Z",
  "key9": "5ZmxXcXkz1hzNnZG6Sgq7sXGMegfet4yEZs3FSU4td3cX2Tfnphe167n6dv62euGhcBXcRb2YRrZYiJHUiNnTgKL",
  "key10": "62emV3FAS18maSQD6w2b7CzqpF5kwmrhzRxTVXJk8eEoS5QgdBcA9yrnK6kEKVpJBB5pBU378RBewDb5pgwpSQgh",
  "key11": "26a6fNMd1jkeG7hY99WbBsnJACDES6GxLSDtjPy8HFENai8B8n95Bk6qgL216PXSE25AJ69q7wAThDi4ULqEXNee",
  "key12": "3ZXgj4es5NAD6m6cPv5BNo1PoJmwxxV6RwvtC7viMs5kUoi6hUnNtDsuGETgZxqWUrPn1bGbpVhXi4QEjdTqCSYJ",
  "key13": "3TXiccoySKGKeNsVxMS7p39BKsQKHCAZgvUURoST7maPLL8sgHh3DY1wJZKkJhuUkqNnVJZo5PGZfc4qrzbjqHJi",
  "key14": "2DSF2NYNu6cis6kSQTFNe2zgHo9coombwcXHXSqk3UcEKmQqdtYeCUDd1nZyacLJvaeTEueZB8fFNpaZu9v8Zdac",
  "key15": "36Mr3sa2kyyaQyrxA8PY5AkTPvaigomqAhphAtSSSjUwNZqjZhrUaj81RFio5tNk5DGFZGhDWFA3Wd1vx6xN8eAQ",
  "key16": "3pC4LkDxgrHuz6P58Hf4TVZJfmQsUMxBGqRm5u326KupbUznuysfcXTptNASbLp617cG62Etrs5Ww7HSfd2DnL8F",
  "key17": "67fj1GRRksFe5Z6oQBdKn9pe7EbHcez7hMv3rud2AbjNDufWR3rN1KVsQZ71PJaTdZQFscP3nDPF4Gui2eB8oKzv",
  "key18": "3UqCPUSUh8DLRH63mfbTLrTHouHmmVLVjxEqPrcJ6qyWN4ik2mSnAeyk92jvfrkYeBx17c1ghfZfnUM8urH5M2nf",
  "key19": "2MNpdMYsQfneTvpFUrK73jGJfPTChSN1oYf8uG4sNFWLpY8iFEgrVTnTT8fZcxM7RZdHwaL4MgdYRdfhGCGBnFpq",
  "key20": "CpEprTH5etzaoq26Xqyfqmj7d8AKpkK4EsqmuFsLfBarVjK24QY4xBf7y1bSVX3rJwpF2rwikjBiCbfmczq1Ku6",
  "key21": "4wmoGzwQwYwP3NWrxRrQ3fMHGoZ23nWJsR34nn8Tob68JM16KqpZndgvKh8YCHpTTxzgWtzGzzYKuyrZ4HQUD44T",
  "key22": "5emhUF62LdeBYir1ztwF9n5yGk5Q9QD73nsiUrxL4D5P428VpNV3bsB7KGo2cMxtM7RbXPLw1nhKikT27ct2Ugin",
  "key23": "vbR6w7ztBKjeHq5hb4pVnTB37KqRZFt37iedoomqzCgcsHVtoYcux6YUZd7RAftTdBhCZZeo4zrkuXyuYXA68Kb",
  "key24": "4kiNhvg33Y8N4cDemr4qmULBbh285UtRjBF2rZVmHdeq6i9ZtEZiu3qjBbETQFWWLiTKfuw34kGBwFbVeq32stMR",
  "key25": "2vZG7CXn5gqW3DkuUNqcobFXbcLJwFtHMoNbf9xfNURBea9gjpZJv6dVGZuWP8Mxd6yqZzz22K5QajoHwk8jh7hk",
  "key26": "5Zi6NXiiXuh3H8YkySdwtq2nMtBdnJgdm42DK5LhhQssbLnKnQoEVZP4Mmd9BcyYMj9CCCu9L6YPYLLmju5oSXEE",
  "key27": "67hoemisa7yNkoHGcPVh73ezuVFGZYGzq41z3GeK2mbPG2izZrrK4vti5Qw7V5fzw6HWsUP5XAHWtjmnfYAd3tLR",
  "key28": "3fDbDSfVMdpisGk2L7A2RykKMTGpbrZCya2YUbLjVBDdwxz59rgaT85HKrNatEfAMXycRwRu8tstYu8WYRCVM56y",
  "key29": "3mUCzaorwfNfJGAuDqDiiNP6SxrqSHqeN4A4XKjnPrxzKG7eJSo7bc8XuEKcyExQodZZS3KZFhQRrXMmPuB34s4Z",
  "key30": "2f1ox7mHDKBynQeT3MpQcJnqQd7RJk5HfNk3zFkGLMRjJoGop5jxMvRsMs7hmNt52bTeQirk7QsicS2BQxSBJkXo",
  "key31": "5DnkMw2uyQge4dnmv9s3WEUzjbMnjPpgpXwmxiDwCCUBNEhmsQa3xNNaSPCYouDCgH5zq7w5QrpX1ZyLcfabUyqd",
  "key32": "5XVgd1qaF491NaskBC8qzswdstDBPe2qpEhk4YfHe6nvy1No9oShS9o6zM7L9B8ia5NYzbHqXy5sMeVtknyhdSUx",
  "key33": "22vy95Cc1yqUSjdaczXPZREyaBEb5eF6RuvmDHGQqh6tdQjDosgBdfSWzt7HrYkfKFPpv6E6MJdmcAe6sC3cMP86",
  "key34": "2AQyro1U7KEfnkX3DBkB6eaLvnsuHgYspWMbNrf9rBVMYFmyci6vkZHHgzTvCjdjz11g9uGzesBm9cxisqJa1t3c",
  "key35": "3wHLQfZwdedq176PwkdPZudnZPS8PeMccuvM8Q4EjWXvaN1LtP2V1eiLG3yhMEQKw6XutDDH2rUMpM3d7LnsFUpx",
  "key36": "3MHZyetLceCZqtrQRwK7XS84Q5uN5qGaqyaNSfHqPkKkPfa9cVygCoCj5e5i5RieUe8F2F92JGnpqq5Rcyd54NcP",
  "key37": "3W4iSUgaPSd5AShoU9Poh8JmKB82783XLznXCvjxZdQxJF1GpqFC8YRc2nM3YLd7hjN5cbjraFBPxtXipWZdS7og",
  "key38": "55E4UHbiyQ5KNst92CQGLmqRBkqNX4tsDbkBjQR9FcubNFaQfYBtZW4fsPsbumRwAZWqJEee4gJoQbzJjaDpB3Hn",
  "key39": "5kPAXPsvdqRMGTiHCB41SB8jsZuZk1L9NgNmcHhgLQMA1RG5QrPDJDxHPBREqGu58tYpPKNZEpTTDP6rpchVnSjJ",
  "key40": "4hhpUSPQxdTdrWb5tYhwyuM8cbZLC5C9C2ZHYDtNnfHqVJRG2PrbUG9gDwQyZcHvzrJGjiiHpAecaFL7q2rPg4yZ",
  "key41": "pvyaSUDj2EDY1VurwoWJtnLfAGhkPz3ced8re37YSthReKER6maRjA9fCoHBgqP6LwYWLZZtiT5im9ddZuDLkSj",
  "key42": "mfdygEtXXDFm47jtYitkZkBJk1Vkw2dzZkfRGZcxFsggFsGarrWHA59mh62qqgKzhu9ytcLmKRALWEBVEL5QsLQ",
  "key43": "5xgtxZv3MDxFfmNNASgpKg2vjZCaT91Ue9Xi2LsWjATHH86pxHzSZMipAYy8vUCbrgjXo2r4RX2fKQ2NXEUCoVDr",
  "key44": "3jvC4UpJLdf7m9TYr9qE548wXJXpHVuqy7RJFujrppQAWQi6mhot9pWw7jkM2cbjv6U6qShh1NQo7rEHpmhVGeuE",
  "key45": "4oTRaobnNbddkp7J9pvFGQjkbBUFbXAXW6dv34DCtPdJMmiyfUJao63Deh99tRJUZnn3UtTKy6XDtbKBLDjDa9zE",
  "key46": "4SvWzFncQRvQM5VCKghRfhc2UEVZZZNnj54Z7RywkXDuf36dHJ5zjHVifw4TMyE4PtRgzsQs7r73gg4ffkze6vDN",
  "key47": "4Jd9MNnpiNCKTpi7RvWfUhWPXfj2xNg8ZVkDz1knGQhdayXwHNYHXUX2Jpd1Q4zJuUBLYZnMCbZBtxQB2vHNAcW6",
  "key48": "GPd9xLmeQmHN2Qki1sn3jfwgkL7vQVpdg9qp3nf7JCbnXScnwEgEZW72JLsGcodpnW3ZESd6vzqVqZVQDKiDNYH",
  "key49": "7QrTKbxJG6FuV3P49fPmEJKWYSARGd2Nww6q4AMh4ibdGjWC1T8j6qFjQ4vHcw8h6wovN9g2wQvTo9PwaCWvLgs"
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
