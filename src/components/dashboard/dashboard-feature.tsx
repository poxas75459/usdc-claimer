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
    "bq5gSuBCsUNdn3sTC2CSbuinPUh9SnbZyiczEzSri2wvh9BgfeptxPTJdvR91LQ8YxiEdXrrzNuqrP1zc4jUSDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w2D1Ef8vhd7GPvgwimYRR78Wh8FS6j1pESr2Umdxsc1Ve1pwUQzErm1HRcsmTp4TATLFwGTWzytXAkxqY4Wz9Pa",
  "key1": "LYeqFNFCeB9MHSc7kH76Z1Xx2eZZ4p39PgJxuEuMbVnXpSTQyPEr52gJ2dBJpEeQXrFsR5pko2xvzxAcnmNNpnh",
  "key2": "qd7sXSWYSgo5dnKRTvZXEb5pJMcnjAc33MoHDaP2Eu4i8igbVyoaiM459WnwY8JJ8PJH3xveSdTqwmJAQ9w1XnY",
  "key3": "2eGUqVhKMheswM7nSQefpe6icrs5sbjDfjQncAzL4fRivngHhPGa7dSwTaSX8NwC12irMm5R7BouH6WBMCZgKUBK",
  "key4": "67QgNqPLMHbGeQy58VppgZsVHvvNacynv3wAJ1yAjbG6vtddVhLsBSEhkNS99RhGraLn752YbwPBH246Ur4WYG8P",
  "key5": "3sGTzNjn72nFe3698GWUQKVQBnLqaxeg92itPtXVD5gnUgz4Y6qG1VLdhr2krw9Yr38Q1LEnBaPTCAZhzHLrPgSq",
  "key6": "3Y8whiw9rM1EDiLqxXTF8K9tEug2WvhSN3iaSSi6AP9hTu4LkgM3dq1KysmVNyCn1zu37ZPUKgS8yDiAdNtACTX6",
  "key7": "2bGspDWCDtxh48MQReASv1SNY7EGigqckWgD7AtHCrEr9hnBEC1UNgovUW1RaMUHC6PDnNeV2WagiRmycvNBRBcH",
  "key8": "4W1e3t6EDp3rQtjEjv1evrcm8AaMvBTkERPwJWsUhWXJbMy92wZWHo75P8FYtx7tVHdjy1nreF7wB7Mqw1ViChDX",
  "key9": "3a5a9LeT6ANHvxgeUPoyv3uCQybFudBk7XJRbeCU9XyPYDgY7M8B9RSaZgAP1oGkW7ZD7pSk6rP1vTqwHVCrDTex",
  "key10": "QmCtpy7x7V8vZp9CJgPQEWiKERxYXJ1pJ7FyBi6tk5SrQ3pYA9RkffDxgr9fBTdbiARZd7F6QpsKoFeEjRY2NfQ",
  "key11": "mSddDzS4PXPgdiHLojQEcrVeXXf614qzSS4bVJfasKfqJDQp4ycXRrvNjTcup884DNSaG9c2EuLk1qAkLwK95Kp",
  "key12": "2yo6jVWky7r1xmLphYFqtSCTt93js7byEpBHXvVDMjV5sLuDhKoG4qkj7Tq3xJCFxD2C9LpsUc2aXmvqmmUqCFAX",
  "key13": "KD2riDRQQyYRaUHJBChodSiu6eBtqN3WjadV6Tz3GFfUvnvKh8CwohEjCxqQP4XQeHzH9jn97wrrxcqawJpHJDr",
  "key14": "3SQXKrmKynUWyuBaeK9RWkTbPMwtBch3GrodWhzWNpixfKqmnMJnJeyg7gsC5Cur9HTXEigSwoMa3z55KuVeHABe",
  "key15": "3TfwKFSgfDJELt879uRJHpKJeG7nGfCUPj4EjxqKDwHPbQLwNJm6xsppAo9rtqJQaptaWwx64pPngUfDjbkJBMLt",
  "key16": "5d1REkV53363akxn3ngZjwxC6McqGTwzST1smNpCrQGGeLmWiUzK2asLj6MADXip6jJdxp2nXHpYUu1uSHJRppUY",
  "key17": "2GMBK347KNHZeaPMwk73uVBP2JtWbTaxzgnkwx2igPEQoVNSg1zyGWRs6P9nZCa9TWAm4S48Ho4otq6Xx1Vsjbdu",
  "key18": "2gUqk5Krhimnf2vMB1PVM6ERFbE3PsjwfFKmVtrqyhJqX3cjU9WwkDhyXxJyNyr2CWGRq6ZG7x7z5dXRmJZUeswv",
  "key19": "3qNgCK56Ks7hRVXw9JDyWSADwEswm4RW1Whthpo3Zsfjx4232CHgDRWMJgwTsDT8GUYxk8nRviLj1rA6T8waFiTN",
  "key20": "5BdryeubwRfY6z6wYrxMPmQx1mUnBHtsy9hTqPUZ2q4eipnaXUkZSU3Sh1pQyScCpLo7i5mhZ5SDEHMVRKBRVQKa",
  "key21": "4RrxB8VqLqPgxezbgKNk7C7TLNkhK5kMtKtkdiJkEPkjQdXTjmnPeZfts7G4QDg8QHMCe3QwYmwiftcvJddxKz6Q",
  "key22": "2bkGCzpw1UHeTi8uAjP6QJXMnqGACHqsnwQrzNZ6KXDwZmiqvo1KvpLzsUG6GniewFp5uyN1kjLHcMiXUioYbhWC",
  "key23": "4wmFUL2CJ1UxuwX7WGPvrLTvvb7eYoFNfjMLDMtAFQYsANBUVkrozYMjohEENKjvcg3y5qPokumHg9DnJ94p57MF",
  "key24": "5MgqpsWfht3oBM7DZsAjqbe1zw3mFmf5uQEY2XjQ5jTQ2D3oHRP4c78vCAVYQNAFmuTaKuidYSoVShN56xDRGetp",
  "key25": "gYAqiPdvmfvbGgt52LD3XVMLhCpKzCBFPjLhhHdvqH5yz72HqfjkYdgaYC8GkdLHEvzXgxH64NxqmkLkcfJJuV3",
  "key26": "4k4To8tTyoSLB1YoHpEb5S4sthj46uvLLLQLyVKoJHqFtPbWwPZMPzaAWXECJAiF6RBYHMsQjxVRVsvqpdcv46RA",
  "key27": "1HLztBCJBDCwk3e2uZFJ7E5GtSYocoVtMckJEu2h6Ere8t34FDLyMvt4CrN5cZSZpv7t766RxCn4iXqSTJp6Rzf",
  "key28": "2AVPZAFtvh8txmqgJEqCoNWzjeNG9imFj6GYQR2r56rJ2KRkDx59LU165xwpEseW5oxzy8Qtttx8wQ5j3fmwZhMq",
  "key29": "7kH8p7hEuPzfQvB2rfm2TeYVu7Xg3rLxcgKgixnVuKAWcBDsDT5bRcGXgyPyGqVnBqdJJg5XeoZ1imHLWMTXAzD",
  "key30": "39GcUQNrqL76tdxVvtuR6bwiKJZLr7u1ZyX8anyVTHdb2is9P2Hn7KWAZ2xxFh17QAPQ1VU8astic7B2AmvjQBU3",
  "key31": "4GWCJidj37Kabc2RYExWpE7Miq9evokHiXPSntLkqa4Wd12YByDfqLXrgYtvgENZmA59UKqwkzESsUNC4HpaNtdn"
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
