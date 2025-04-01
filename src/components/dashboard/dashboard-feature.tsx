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
    "5pqMK4qfRDSAHx9yZx1DEtQQi9bEPo4z44Z9afekGNLcy3eWJMocwApquuyeo46nMzujZJpGWXFbDBUKrnUSo3Xc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aFervawPmcmMNCDR2f7pBmYYNhaVtzZrD81ib54gtBcVHdxkD8oimJ3cLHKiFkiCsb7UHyv2wYg8Cy9kwRnmFiU",
  "key1": "2i4vcSsdEovcrSKPQG8FjUVv6rYh49hakcyM5MKPD4H14BrVByeFETJZQf6mMBguXd5TzGMBNDqpyHH2UJNMbQAG",
  "key2": "57xQghF6NRLxj8UC68kgCesWqNPKAyyqSMxqonamTuUhCRviZifh5mPhESpNcjAdYxqTAMNUXx79eGRNCikQwuiA",
  "key3": "nG9HVbEoyiCip4wJy9mPG6vNF6vZsVrMYPsKGS2q77ZReoaZJmUP6bRVCGjzNVTy8WpNYeuo78thn5SHQKHR2xg",
  "key4": "5PnKubrhC9YnmUwZfAS1UXENcnjSwKgWDXwPfVDQ2C3GAMTgA3PPM5ytz7Skd5Dtifw44HKmSrmYbqLtb1b65g67",
  "key5": "ozX6Fv3AZL2jDAdqMJNMZuUaot8frtGXBdVipZQsps4ZytN9uBdrWj76GszwH7FsYPFavReutZ8Xda7pEJPbzux",
  "key6": "3VBgu4wMjRRSpq55A5CKZP9iNhv6Apk8dnc661RSxc4RYzd4FSJrpBxn3ouE4wW3eW63VbegW73WjqzJT3rWKnbP",
  "key7": "5utrP1SW5GrHYt1XwLRaszRgNFMmpWZNLebrLaGisfAdU6YGEXB2LGdHs1ZH2UbzV3dzX5RR9ot152XNkJ6LrVGC",
  "key8": "qd1CgNbErBSN2UY5wFKDfSD34H56er1kH4YmkAndCJs98N5KcNZ7pz5Nx5khGRWEzfioVf6WuQekuCKPB8A1Qh3",
  "key9": "2j139z1svmUiWxHg4YwqgGLLZ58XVFAAqxoLnrDbSR7Qyw7RfkgF8bBBnoPzMCzda2rjJc3deMo1DH8Y7y8PByhf",
  "key10": "3QHgr97Z9Y7XAxg9nQa8yVLkZB4H8wWS7VUYBSg54R9tX6cck6nx6TpMrPu8VArUi7tnBUehh7TV7tcbySdnropE",
  "key11": "5BubsJjU4JTF8WdCUjsrUn3Ky5AkF3S1vwEUt43ViAUXMTV15QD6HAynVkK8jnZFrW13dYSCAiv3GbhxssjVAXz2",
  "key12": "5f57HS4JohgMf3B17e3AdDVX47tx1Dp8bkmqbewCYrdVVMfyBhvnBSRWP4vakz4SiKetVkAApmG4ZRDSG2Y5JRj5",
  "key13": "4URnsAygjbcGcNWcFsRPsh4jY9hLCBvh7zh16EcuoJSqSAbMjQR4amHwwwyNp5UHdNxbfZ3maxr24yVqTYCvb99v",
  "key14": "5XrQmjY81xR7oxXwmLgPcwxChUQDD7ijYxmrhp5YGTJBPYKyH466xsxNe3drNuC6JdB72watMDwCajtrRMPAwHW1",
  "key15": "3Pe1MJsoAMZEH86pVyaDxKXMDKZv93nGJjM8H2gQfqdbEGU4tfKC9UYwYTFpmeK7hXYjsb4kqXaeEv877FKkQyMS",
  "key16": "5RMy9JdhMWj2exYBgdaWfsf68e3JcTQMrYyQr5qzRUsmeTQ2JbZCaKyssuMF8afitJG4Zsrfq9xTdGcLgqG7tn3M",
  "key17": "2S3Ep4Qa5mPvso3fzuk51SyRXtnD4tvzHHtsLHqWngqL3afx5WDLokv9wxj4FQsZDrD2yWmNrcjndWYhV2JFccfW",
  "key18": "5Xgmx9Q6ZVWeyYcZmNL52NfSf2qqUZpcHYoiyFBLnR5Rh5bU8xxrZnahfVBc5HqBZvDDGUsjTEqZWVQh2VXMhPwW",
  "key19": "5bXSyDZgcUZZbGgNRXoqmYi49TovscKuPsie7w4LX3HQQ2s1rFuW8YPjpTaLitgzD31UttTc468HQRH9ZF3rDdKT",
  "key20": "424mvSBubXFWXVueCpdW3T1XsABm2zEtifUjHKahJHifibnd7bvXZyNHcMpnAuKPT5vyb2Js6Eq7jtmkgfgqrt4S",
  "key21": "ABynd6xe2NvPYtEfHYoLaWU9rJHMXceTLPMhCxGESMqGopZUjT5WyrsiCSheLEntahFwexyWRH6vSA99wAvF1Ut",
  "key22": "3mWp8iot3Qb6AN37zBvBVGeBBNMQXqnFvAb2r1rW3C4MoB8kjpgpvbUDtenEHX3eCyUDMS2HXLqVznWPDnbGo9qB",
  "key23": "pJc4x3E6D4L9hRUPUnvKoru6T4rGgjpLDrqVfcDv1eKUx1VK4Bj3zxqqEMUHFt58DzhxAqHWwpKc1Tuwmw1NRgn",
  "key24": "4U2uuApjnG3Fr5BodwzqKYVdxJr8VApw8vspx5Qf8sVoGcqBCKeG23WWhZXgc9dkhjaTnqXpPyds8okkmKpMP1HV",
  "key25": "i7iQBGqZvRmzCXYnzqkQbuvAf2h3Tig5gBNxdSHH6QxasfcJL6RAfco48kUpfuRTvQJiSoeEZkHhhZz7foRnMVi",
  "key26": "5274K7rBurbef37QbRA4Ey2GB7MrMPfLn46oQ777hKwMfCtHZAZiGtuWzhyLsLsfYRVwo6kmg2dGjUy2udA9km1x",
  "key27": "44QGPuvFMazScBJGAvo1wGnDCYUULBr1LpVNzFi6zyajgNbVqPD4ngZuP3nC61sGCYfipJMsDMWDHEo9VY6MtNHb",
  "key28": "oCkonZSfXjXMpYDrSqvZHNvmmyupntvGij3yGZkGHCqJtPZLJKcUCkAn5n9UUr4mWtejADGXinBsdWvJLEdQTKZ",
  "key29": "28i14vjpeKxYikpkHk69qBscaCJKPeyomE2eYJ42rCe3U2VKtF98Dw9XZs4TxtLj1XqH348sgRhs7UTJzKH8EstF",
  "key30": "49Gps8hRwRLefDPyfyRtE65kBt37cdDvscyNMNCBknS1y7yEocLmCPRYWcrtA6MyFvfP6wHfcnXenZwPsH9Xo88E",
  "key31": "3W1YmfZv3hBPPULXNSs1PMikjkigqv6q8DSrbQh1uxkz5VbZC7qaALc6CCb6CGeL4FFTdSz7HppN97bEcLPEickW",
  "key32": "48cXHM1xjQ747dpqW292m6wgkuzdKB49gh1jQ3fMTSCzQLzEudsxy83YTjnLQzmP1vieQXL6kLWMtincbz2YS43B",
  "key33": "5LQC4XBMxxbzaVC52QoEFG9tDw1CbgAKAQEkjYJU4FRFUZzQQXjqGQUsm1PLVBxyi8h9T3RXrRotAtSrPerCHyWa",
  "key34": "3tiHHZmUfh8E2FPdhVc99DUDVSTMH4YLhCTxezfPmtvfVLuGFp72dSxAqc3x2M26Pu3Aqg4p5YRKoXrdsanfeAow",
  "key35": "5qem6JzifQAUBY8gj68zT1kSvHpEJRQBeaCGEsFtqrruSBzCXgUY3temLXRFmTxh8ernjUYD3mYMdUyMsxJZvrBf",
  "key36": "5b2BV5Gir4gPE4N8p9BfcGJZBTiNK115RwdQd8ZULg9he9bhhngCbURuQUfXSpzG9LbCTxznuN8j4sWX6n8712G9",
  "key37": "LuNtVRwhNupBtMT4K4PKB52z2snK1AzazCTEFFkrw9jw2ZYxdQaU7FC8UvtPPsZUKwg9XcUJojVAAy5DUvAfduq",
  "key38": "5Y9joc1c8pK1ayjoYj1c88uJv1XAAodruLgbH9jpxkdkH6zG26EzP8H1wWd9UBDZduxZysCgiLvcowLdsX7rY3vx"
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
