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
    "2tAZBvkDVdKvB1HvzvDHj72m6b7QGLz7DUrsqYnPdHEqVvFsoiTdfQK9nukE9RD8SES6AM1NXwD3Ague3CziossV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A9azpomq82aDRnDP8WFR9SkA5p2MjgEAratAKYiZDFvgMddU3TPkZgpH9ChW6ArSgMGJ9zyxT9J4HrKu87k7iob",
  "key1": "6ZGYiWzkVFV9kcUya9GCiPEnLnLuKfdfh1nx6Rz9GSJKA3K97TcX2SwdxoENANU5qSZzdmBQn7zWwPqbxWhc3J3",
  "key2": "bmY2ueqL4B8xNEN76Y52w3kgcstpxyNNbWEnXk8nYxDfypN2VAk126RfXSTj4RfRsfsJtjfVNrhtJRSZg4qHgA3",
  "key3": "5ud3DgiuN5vin1pxdpu23sUoxPSXhs4BrXZ8wVkj4kyMm52ACgW8rrXDoUWhHKdVLQuSeS17R1wY9emV53EtKsq8",
  "key4": "3CNf7FwU3umkSCLSNNivc8r3g4rQ87cfftkX1RAJi4anFEbk2jizdngBGmvhYNvJtgg6c85R3zvNZGhQfFiQVcvN",
  "key5": "2yFTusM5KpsumpHBtxamfGTKH693auvu4py2nJfHpdan7uhUd3nfpuBM39b28KAopadLson39Ae94jd2ejCi1tds",
  "key6": "2m3E5ZjqMc64TpkF4T72iNxvNR6ZQgsV7LpVJ214ueyfVk3z5EtAaBoheTfphkfzJcLgazVqy89pJSf4qi1tJfYH",
  "key7": "2At7CJ59RTnCbWD5gV9YhsM5JQMDAKp6zhuxW2nyqBL51St9dwpzc4CjUdmonuLXfNxfAV7Ek2smzPPeRe3KPMn6",
  "key8": "4usdEvHURQnCUq5qYsZh1n32EPPdLBqLzjTPUYzr8mxn66KqqbEjquJE4Zr3FR23RZFnypqBHNKdCJeLjeUCxpX4",
  "key9": "4CrtQ5zbfht5nSrpL9ERGKq2rvHNFN6e9p3poBtKPw7ZRCgGKmop2Ub8C1dWYjRWtXwZVesEoHqZuwcB4o2UBA7r",
  "key10": "5EuyUQJtBpRgyWw9YKHWq3hej6rbG9UEV6AWMoWsn388xpK92hpmG23SHgKYjMGdHDx4Tz84qqLWvxWnSb9bZhFs",
  "key11": "3Bj6HUjMSaheWqrf2998Fqn6qosqaoiPshjHb1nqU6UGCf6tZsutCDfvEVnZWzzdrrWcd5KBL2GMC1r1z5d7eKgT",
  "key12": "4ob4B8wbcFMLJziEFXUvbLSz5FTNmx3c8MRTGHQSHEqA3qweW4CC1CvUgVknQgE8qpt8TQp3im18VEu7wAtKYWuR",
  "key13": "5vxB2ruc84qt9VcwjGrZRs4qkL6poQ6nJ2yBVSNdnuQQDkwS28ZekUEQ48XXWD9DiSbZ8jccD4LFHsMyJ4SAStbQ",
  "key14": "4DK91x1CXmdeLvjTj2LhB2hQVgTMFrnn2VRG8jc1e3cPhsE8kQouoLgBFKdTCUcEiAvLdP5YeWvsHk8t7fabzkJ7",
  "key15": "4cFMc3fscWdpTnSoJ7WPdYBj93Gye3dQi2Xwc5WHRfj8vEowGQXs6Smy8rBdLnZFtaKrG1JHyCJYrvrKEfdJBozN",
  "key16": "4X6dcvAgKL6q9c4tCeLD55fJRDWMjXQJCU4gobwwpFLhm4v3qppeKWw2pbDgipG7RP5RFHitrW5NC2foAGkH2Ctg",
  "key17": "5Tm1ZYpTJ6E2LNBkAhUofwdT8aQSsaSqNjPUP7rZ3HBCVoJH19JQiRNhF12MbQLpz1pBkJswqWUerNSvFjFThV6e",
  "key18": "3UquYAZuHoYBvDqSD3jrMSvenuGrajKVj4vgDyNUzqSb8t6aEdA5hJTEeUMXed8Bj55tP19aFmpYBaGfYxHhZihb",
  "key19": "5dFRBHfMbECkbkhJ7zY9nyGNVL5QujHyveaWMMSzFwTZu5XwSiccKCfKFbbpR85hhnmia2DZndbuGBq4xarfcAGe",
  "key20": "5HA7aeeHNrBRVwhishipkxV4cLdu16xLqAHCpvhWrd6KpjA2PKJyULcJPnft6zpTgnZLroCC5SXZiU7BMoURWs14",
  "key21": "keCAfDL5FVa4ctL8vrKDyS7uPDqpBURCpCsh9wxWGEe3VFTsQMcBn8MANBANLy7G2WqfSm64qqdjUDqx2RUbmm4",
  "key22": "3FdzpkGf957tKRZsp52ZfGS4eXtZ7imEqfkgNLNBRc6pzL5AV2is6KtRnh456AULrgBuHDnTStPkzXEfLasK3V32",
  "key23": "4g9qJhdcYBQPs1XMuodCc3CzepvjzfQnjdE43wERq7PzrPu78VpZn9HHaYpWskYQD1tqapKAqLoCnf5qrP5gv2L1",
  "key24": "3DeiJEqgUB47mGtj8uHPrJhmufbiRkQAxFT3Qn7kWsk8QJy5fKrzAATkeyp2RBYHt4dMuYLhRJX3j6rQzWtdyxen",
  "key25": "4g4HjW4Mbso1oxhSqQmxri9hQajcLmw5eWHhJdHPUSDdzpo3LZt6yvswoDdRDwyurhLRfDDgXknP7fSSk2WAqFec",
  "key26": "5Yvdux3CUqqKPwvTcW5XZ5ZVPZnzu6TugYV5Cyr2GTYANCt6awGBNqSVhHKg8T439LRQjtdrd5VuFMj6VzQMuB3B",
  "key27": "4s5fvWuAtkFCQvucPDszj3WHxZ6v6dYA62yHgsqUHkakhX9d1h6sgn8abK8ydGvaBxShEhqx9AJapMZTKRYQ4zpH",
  "key28": "4mzVCEz9wssaowJ2DcQvEdw46ihEFfwpZPLG85Q8g3Joo9yfn1H5tQZehGywKSgJcvmP4E4RzvmbZpkRgMvvPd5u",
  "key29": "DF2Vdf4KbKX4ab7Z8f2UgcBhuFbmgdyBtEpu5M7oMrLp5rLrhLj7Z1ktPeMphwZWX9iAU8y9RAGMvZGRTR8vWN6",
  "key30": "2awEAv6c3fLkgCFnz6xbGMEg5wZmLFL3roP9hLdfshyCpPsFBat4EcJsXUErY5X5MLrSvwfJ56ym2aU3rCWk8FRy",
  "key31": "2v2n5vX5rA4ze4LJ8Q3WrLHzALZsomkLVSgPJDTT4Mgi8iZWMpQ4FNWyyuLF96G2GLaYg4aWBkuwB9SepChCTiPm",
  "key32": "226dvP7SwGWGLs6W1hsCvQtsvhtDo18WH9CX7jUvMB34zqcpfQkKNaeJprP9681gSegosZG1KYidR34hZe67yfqu"
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
