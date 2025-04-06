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
    "5KBob6fjJP1DYbLSh3uqpNoHhHiUAovLgCHbRNCirWHPQBVmKwt8gqS7rtsKFGEVputB89HZ9quDRgW2MBgBhctv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qRBbimU5vB854L5zxW7yF6ZmHqAEvnNh8GkUvzxsi8GGiMCZoJpZztRvGY6jAqANZBC1W41yXAFnhL9VCupbSpC",
  "key1": "26DXFwXHjZSRRpwEsuQHMv7KhkD1SCGaa7owL72FKg3YchgEgMSCUtkiUeTAxzR6RskNdhEznHf1oDf7YVWYhAak",
  "key2": "5dphvsfb8gv1qX67FoMan6G31DWxFthCcL7mvFxaPguzbWkF7ejv9sEmgjaR6tbbvFCbvXafCW4x4gUKwwFr9Z5L",
  "key3": "4R1f7XxeW4dPTBVSt5Bv6TcD523viLFzQCMYqo7c4j9jZST67CnDH59LKCXK2BbtHNn75Zg2EoToS9YEm47pWY5B",
  "key4": "5rfZHRb2Y4iYGF7Bk2hGYS6U6cLpNqVWwL6dXSwMBe5YpFm1SzVBG1zrp3Rf8G2efRUTmiQSEhepLP9GRT6KJWgB",
  "key5": "3Q19LggrfnRpRSCnGyFNwErPnqXU2BAtJW3dDNjq9LxaKe3Wzvtjz5dtbwn7hZvVEnRu5HvxtgGR8scHmmUba3vP",
  "key6": "4dbUAfGtUdM851jT7A5BGheG6XQFEkazo6EW7CTPeY5eVUB4Y69B8kviUUSQ1cei8S36qxbSmfyxtWSarfSFQURA",
  "key7": "5aVB6xhvuzhtHSi6Vqxc1BWchTEbRkGJtJXjv6FXZyEz9BKPNiEuNkWFSkxMBdAswqq89LyR7XwzhShhUXt6TCNq",
  "key8": "5gv3MiuuZGT1uFDkrx6tA9Y4H159JJT98aj6aheaqhRN43kJaGjyhnZ6mfH2kngzmiFSuuE5kT3B3yprPyZW3Cq5",
  "key9": "62tvuiXM2qMfM3PSF1oArwinS88joGx7xiwfg2pvNnFEnWUAq3rx4jzmnGoDBuJZiWAU28rdMgLexNY2oVV6HgRQ",
  "key10": "F3V8XGBMjGW1K4xH2NRFDdqa8iyz56ZrgFddYCWVDdvsrgj8kKSSWgBGsHHnVf4oGHAwKHvEfQRipRfxCp3Zmpw",
  "key11": "2wu7MR9zVp5rvwkb8cawHaAqNCuRTK2EjFhPs24YFCEGAXo87bnEmDVsULJznHKkBdX2CtcVir9QyJB981xesWks",
  "key12": "2SC62ZAwCnRfwNiD7j2NW8da6CzQLC6JRusW8UrVhFmQi4osXN5Heze6N3bGHoYHWcp4VLjHuaJNbnycVZba5VSF",
  "key13": "2FSQSz4uPybNt3J4JELZ4Tpb9UpwYqxMkZooqkvySjnZ8YpHnRp9CdypWGkc11AVqXcDqMVdhhhUymdTBja71Tsu",
  "key14": "2kSwPaTHLz4PU9Y9bK37vKVVCxyj1ee8YuiW34nMRPzdmWdCYNTAu4KXudiCPtELwczNhUUiMkLkph1Ta8VVT6Ur",
  "key15": "3Z5bXA36bHNsWBk4szjafcSYd7pTXDcuNHg7ZjNM1npvhVT3fiYGqVo6SQ2oDMbsbA8SHzVNuaVeTTDbMnVrrhA6",
  "key16": "2kJNUJSiLeWW78TvzunXBymhgTjsdvTwrYo6ZskxdjzDxDwKaUY2uMKd3jEEgVmGXnV3GGksCEP6dQBeSdXehNCF",
  "key17": "3AbRUNJqH7ChqRtmi8PsKAv1niTSMUvycptjm48hftLSjTGjbxKZSLss6uKCNeN8mw3ip84Wb3mH73vWahCuJ28R",
  "key18": "3S852qptYYcrQkDWFaqkVdLnRwxwoqSiodV7Tt2S3dJrwdiWFeaTLa3pKfPmNb5b9kEhSEtkeq7eYV2TvVyWMzif",
  "key19": "4ZxQBmrXBkwg3p21DaD6kZLww7BrRNT1xX8LEmTsBaprej624tt5NLjFNL1a1tGUgkwxnBs7cpAHcieH5R1HVB5p",
  "key20": "2eLVGsxm6nYf9aLG8MzDcxFg5veKxJ9vUrRUjWtH3TyM9C6hyx6iAzKusUoABKtB4CjSmnKbNqkWWkCNra1qKnja",
  "key21": "2QJH6UiRKvYusth8WWECjgAHuqwyjZzQUxBiQKsCus5Vcb6ocGxELUTTF7Em3kfi1rxodegJagqwZGTkm2K7SsgK",
  "key22": "4eFJQ1QTzpYh2wdDykvtwFH7qha6cdwDL4rhoDW73E6w7ninfbJvuZaYGwS6BvWMXj1CjT3VJuMFUXpA4ycbrS7L",
  "key23": "4HFD36Jv5UfXPuowMRid9Z3ZpDdkHigHk7oPgotSHn6B9APzBynpntWAkcyEvC93j43PHyPabCrNkZ9GVEXqXU8v",
  "key24": "eBiaLArgZLroMajgHX8MzX3Det6Z73SK71p8rvKuo1pMTgWpcvjhhJKsb4gNUaGzscB4CRyYgt9ifT626iqnC7m",
  "key25": "3RuvnAa3scvepamAouYQmYejT1QEGNTtx8nJMxcLzY7EzveTUS2rvZzLJ7hJMtQSWphEVH9qKMdChA8TrM7EbQnE",
  "key26": "3WSQ2wvEdUvD4LrCR4TRxtyDzJPzEFjSDz8uRM7sbRiaNWtoBBx9hazRWpiJfSMVRPwNf5sznkWnV6HdnJvTaPds",
  "key27": "5NsHn82js32fSjEg8NjRwZKf8qm6yajk8Yc9mNbB1u4KFooJb8dq76op7QmPUeu3RqsUSmmWkEDFHYkjPtqvG9mX",
  "key28": "3VyeECbJ7ZN5DEAevQSk7HziCywiaWBLWuMaUGFy2AeeufWSSzcN8hZUfinpxUg5fMHG86mSd6s5dCb5LNW4ne9a",
  "key29": "3QSmuar73e2HHod2MuYPNBCqEL1Xi6CVCpWouAzez3eAH6tAAgsVJrjsggnxgnPfweX5KizGEGYj4atJMnf8ok5v",
  "key30": "4XkimbxLAmvAwAEZ3jSWNx6ZP5HmpCxsEH48C9ZtnYzTkLho5LPfusb77goyoGeJaAj5shvbYjnhLYXvz99EJQ5A",
  "key31": "24eZokoiowS2mrhZT8h9tqtZqXTJ9pGLo1SRmwur9iT9c7KTBaKKuKN1ztReXLyYJRzsCfZLpQwSDQAfdCQLJKGy",
  "key32": "53BKAkH8JpocYf1r1fqQP5u6nZV1Au6t1mxt9sVFZJAxCwexRM5RPUw73AZbuN3dsazcrBC5DgruTm9BupkC25kE",
  "key33": "3syoqR7Snp4bpybKsNSLhyza9KAFJkgmSAA8W5Ly6GVDKmD4JqiqhGm88bZGKy5urcG9dUxfnfuV8x9p5k1MGM5W",
  "key34": "5Gwa8mqSSBWPX7XKcM5jerSU4XW3MECtGVBBj89ptSHxFJcWqnS59awoZ7taW6jde1YJ3Qm4iRhKWxgVCwyCPhvd",
  "key35": "2Fbcvu9H4tnNGvpDpxGAERzP8LZA7tYbaF1GcXPqHQdjFNYjTxvbznhMk6baptsVD1zwdJNq86kSCEEsXv16uq9w",
  "key36": "5V4RxNLc3YHFwhhyffzxk6zZzwjW3YkWPjk7qokZ2YEWzfj557bjAtioMGE29AKQpzdZgzFBXSxsWLEfLsWbQKPt"
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
