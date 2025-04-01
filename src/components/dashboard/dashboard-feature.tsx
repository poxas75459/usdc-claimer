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
    "4ERCQ3Hntbhe6QQHvc5WZVTpAfjc8JbDrxxcG8u3NzP4RC6dbQpuvEtBHHBG151HoRa73VuhnL6drNT6JzQEBtuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yx5Zk2czS2KunKgK7qxsAHfGjcaQ7RUy6UBQVo5TeQ2nUmJF4118j7oLeQrL1BzXCN8XAyg3wgdJWdRTDjntdBN",
  "key1": "4HKCj333rNU5B7ojmqrf4fgiCbkxx2e77Vig5ABcixFoGhWAEyMMNnTfGANhkSVeuJZRrSZpbXQhsKs7y4U9xGkn",
  "key2": "QkDLoY6JMvBkgj2Ha8FY5DiJ7cirUqJ4H63Lz3ikscsYoLgdezDWNLkr2va7iE5GSKJKrcofgkzJ6ygWV4xoQ5i",
  "key3": "3W67X1hpTZU2fZRxfmyL7KLDNTLCVVXzSk7oxhiKdVn1ZadK1d3xzLftLkbK7mLydMcTZG4gLjKBXgTYV2oo5U6",
  "key4": "386DKG9yCB7nTcyGyeA9RMxDLXD1SXKLqdyV6UwwrSc6wZnWeSzRFonXxupK548mxUATS8Kaz2dKtjgS3EX5ksja",
  "key5": "5hZ3gZn9Rb2qG5nSox9B1mXJPtPzmnU1YnLg17nsaW2i9fqSPNc5m3WA5WJftVNpYXjiLYPfh4fD4qvjDFUH3Hux",
  "key6": "wkfc1bGizYndU9pexNKHyhHJB1mTXDrhFsB5kBbtyd26p33C3qjRibJSNArfa6LL96YkbiSCL35L6xEN7w5eaAQ",
  "key7": "JsMe9NoMpyeZeKYprr4j375yDPxQJjmdT7vJgEVGwj2vj5ftn6ZPx4NfVP48utk3py9jdRT3EmjxjQ8XGJqHkxT",
  "key8": "jc3Ue5TdB7svKMgTRHDeyhdtRkjQs5QftZGMHpi7pgA9qsAt5LWkghGuH9CGTmD3fPywMxFaiNP5MAeoYtC4837",
  "key9": "9q3oHbS22EMEuEoBwJt3oB1eFwaRGpRFMetaiYAEb2Ld1x3mKJCwPc7AGh8QiBhJvAUCHCC98oLDC2LhkDJQB73",
  "key10": "5EQdnMpZY1uFmAezk4grJoun2DWfr9NQhwUGEQPsiDpsnkMJExBgL91Ld7EWPXKL96fwjEQuuEREesJLjwizqmZn",
  "key11": "4jYxhhXGFAZp6SUVfWSHSwTVkbTjnDBiCfLnEiWtfUF7CuthvwdVWmzisLfiVn52aa9N2X3WpZYDsUXnAZcfZdB4",
  "key12": "5c7Q6L1CQGpgugSts4wxunNq12dyfnpUNj479PSJ6wctwG8pvbM76wpyTmtJRZLkb1QvCExaYUeXzLMtsHSgagKn",
  "key13": "5Q7hZnBeCMSkExU2SLVUUda9hpnfdn95GhQKHGqn99EKSKwKagCBLpj2Esa1FzLtLEomp43GodHmXEZGmZb4Gb21",
  "key14": "1GxxxxtzqubbdFRA3dAxQTo5rGW24LTT7oR9xzyQTU2Q8vVkfFLbsQ8yfWNdGwetuP5upecohNCggEF8WR25zXY",
  "key15": "3Tge8uDFV7tLFTdR61DJXiC1K5jnHMcdCwVndVHSS9nWrJ3UrNsgMAp7zVa1XgQvDwzufpEtnoXDVX3viGqEHR5g",
  "key16": "26vS9CZ1nKqJiyvoFPF2Z6gawtPeLY1sZhz9ayTBiCpEE1AB4w92QGzQZgUZTTaonMZ73Mnsu13dpEfDytebuUCU",
  "key17": "5DJjWb2qzTD5qtAFe9rXa4Mu68reVi7hAFresLmyruyGRTmkAeG7eNbatXRPqGbQYx1QhErSqCgaCD9DE9BgP5Xt",
  "key18": "2seEsZmA7d8RptRRox1VSBND31npTQU14q5uJZvGwFPkZP8dths7X61EMissQFSDoE3BZmvJRBQ8j4uszAZPdSGG",
  "key19": "32seCdR82E8VEnDAZcKaKsF6CyvmFGteJgzMAaDqLtmuZ56jLEwVdSuqZzharjwpvtPkZ6woBFTQXXb6E5qLfpLT",
  "key20": "3pbth27PLB6bUVwzh1NPVtM5UcLiNyN12dX75APqFE8BpMcV3mPXdW5kFgX18gx4aasFurYPDdmRYRbvgk6LfbrU",
  "key21": "39m5aT6bEPnePJ2V58L4vu2jhtWHZeB97NpCeamJE5Xkh2h8Wi32VjWZBFFnm4rcN9UPKLZXdqmokGwXDZB7ryMw",
  "key22": "3NmxPBXnARJDWBiq6rFL2RaZgYpzg2gtP8iTcDiFioyJQCPvGGyoYMRxH1HmaVDX3Skds4EtaFHEgDc5DoArRviZ",
  "key23": "3KjKgoAuUAnYk9isuwUyLgjRATJJk78sczPKJRhi8BDiZBJNNrMjhZNbVh2eJdArjmqU2sipePPs4ztYno8eJdC5",
  "key24": "3aQHgvjM9zsAAS9MLoxZ8kuy65Gh6HipwK8zGoj9hQkdTqSnkGAKKzGNaj6F5EwQPUCz2Ub4aK3WVCRK1Zf5qx16",
  "key25": "4mcpjpubCPpFxHRgXEN72Ut1FG86F8gAtZsMyZHC97kVhnWhQNtZpHnicDPkMWP16SUgejzodKT6mN6oAbeiwuDv",
  "key26": "4ruNBc1QfQAxeAXZMBTNVBsJCpByoKHEFfFjdrTaTWJmXimyprcAaaxk1fiBb6idMAZFdUqMWkNwY7wFuki17qMu",
  "key27": "3nGTw5yNzQyqb84w9Ng4Xt6WqY3WrRo6gs9qhLCckk6AaEVirZFxBBPmvkyNxEUJr1Yauzy1nGoZGVFFonfYaQ3r",
  "key28": "2E3pXaybyenwmqRPP5Sj9TRiUMuKwQ77Pp1L9QDb92qTJQVPoCEFPJJ7nLN3TcppAqZnxfQLxJjqPr94wRkVz7gB",
  "key29": "2aAoGohBrn2PJPfudmQpJMhj2KNnTe931ZsFoxxTEK6s7HNQoaAqAxhEdcPGv6buSZnmggQa34qrHhZ51Z7qUrtW",
  "key30": "2jeSYZMX1CkMMdXy6QsLMUkNbnGmib94R9JK5ihjuBzUrCnHPqhBheyoXZGZkgWv3fCRP9CpPeYq7XXpSuRuDMYk"
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
