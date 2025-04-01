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
    "3hSSmVsZEikWucsvUvzxJKbRbJCemy5AZhVPeamXsMQ3quBDicdqfgLtHDwX1j5JDNDzAiT3xubmpdtf7crofh5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F1A51c3r8XVCAE2bBA7TMHuJeeACxLtN8BCTc85scfQm5dhwTmfS4oGLVYhe5GdpPEkhLVx2QkUBnViFEPGyV8D",
  "key1": "4B8FDHo8X8omGguKvYrZjF2LGLF1Re1m5the4sVHMKoWJvmWETQ4x3Aeizq6DfS9AN8owpQg8KpNJgzMsXbsdfkd",
  "key2": "1psbfwW5qJGqXxKyq5auQrcJZhYdgVMJKGbNY9tYhRAfg6BsJsiVhrKWiYs7LhKpLPCDMtQxVMsb6N1tg9pcY7H",
  "key3": "4kfwDKUVmSTKpqe6zhQoTkKx31PzUU1xoUWwgs8HdDesXKt9Vr8v6bc4AJB8G4t2PNAujsFA1rSgzJ396S6Eyq3g",
  "key4": "2VJMvMJQSk4RSNyWQZ5ZfuWpPgA5FnVQHFtYeQsNsjnrhduMosHWKxm3sqtyDrSADRVqpfpSL2EsyCgFZnJMw2Mq",
  "key5": "2vS1tpbw6bvTwPjeVeyPv576qqKCD5m1XwWYLNHqsDWyG9vTpAGEL7Law8pQ9pesjEsj2vxGzZvW6JCtYzhfsjtv",
  "key6": "3RudmkhAmHWxdeYRvXQbK1eeBAYNZ1onTh9RkriEEdzerDQHkUc2kcfqEGBwJVUb9M98VeCeaLfHt756ueY7RSnu",
  "key7": "36otH4YS4TzUJBpWzVe41D16paSuA7NBmBbPQQ3HRzFMaWk7AnpyCL2Hv8tj2D3KEzRnd1DjmWKogupRVxpGJoTD",
  "key8": "45iBSA6pmRw48YmbvfJEoSzieJQ4wMumz71EdKXFBis8QevkZRbtvt5Bod1jM6LV1CMGUHPW8t1xaLQcaRKKnj4H",
  "key9": "XAN7qDv4wwC18NGv4oCoJVxiMSuQ4P9YTssT7J4oP3oXTdzmVnzy29QWcDhmhL87RDQrzJAXmzoDa2UrbuTWFBi",
  "key10": "2VvcGexM49oJ3GQZx9mo3QtZFEgWrNRSRCzjNvnWa7PgaRg6UqaYc5RhTRzKTGKDW5x9bAgph1U2svPAZVVCLQ4i",
  "key11": "3PsYsRZYL7RRsyWw8tjX86BVRtSyNCpXquyTBA3ZGVHhqK6auEg6vFyDkKTbxwg2xvBag8u57tTTVnePYXTxyiB1",
  "key12": "3jm1hPhXdd8QZoUWP45tmuLCbuJceyNb3gKMYS7dxqMvq7RhvtKGURLksky9H94KfgsYVUP9XzmCGJtj32BKnHx6",
  "key13": "aNUHWCejhWgqb96v3F7unpENCgJWQNEvwcicbCAgWeafbrhpoRiCeHu93TCE191F97kBuEt2zTaCPmTbkJPvTZd",
  "key14": "55jaJ9xfxUTii3PdCfuoAqxPqoQY3F67AurjXQTJiwAfBQPrEyUxMbu9SaAKuhqBEpJKrUCAXXaXEtY7JAty3oRq",
  "key15": "3LDyFZFAs1YjjxwKnzwVp6Ufw7vsxi7Eiip4sv1LDogzJjx5rGWE5ob3GQgeMhxVaaYw1eFJWdYhkPfJfNgJGYSe",
  "key16": "63SPTiktJVytMpkWARvDSerBcFjXSiJkyi2y1DcB2LvncYN6ee23VH4qCUYUBH3fctCBeh4RcPmt4E1oVoJphnmo",
  "key17": "2dg4VUcrqQUCHf85MYjJjEZPkZiHru2uc1g8iC87eVqVpYdHyxRPFofhRSLMPAfhcUHZGXoFGZKk4NgFs1m7VgZP",
  "key18": "2FYZibZyBVTcHrPjdsQUE8Wkm62ghKhN5godtTgQAjbM7LFKXvKtJEbWHSooMrJ8BDj6zSEFZACMvyHi5ZHLeLLu",
  "key19": "3fiXGP7dpK6J5j9YuDUq7ExCGB3SrBd7JcoBwLwoB7p5MmAFzu1qAvAXnieBE1brLWQsRoE3LStiMoVUa4T8yA4S",
  "key20": "639L6RJXYhKNjHYqGhkWmoVhKRoJYbMi9x7bqJdLYXsaFq2g85H9QWJmu1pAVWWKPJS9T7M4RgJR57B5t1gGumx6",
  "key21": "29DzyE39ouBSKiKyhcXnpKWBttgbhjXLvZbt5d19dMrqKerFFmsSHLBmn8wLKfgDQ6r72b25C94xZvr9EpfMTpXg",
  "key22": "3PmMu8FsdLbqLE7rJsG9D3xdKew2XcsvcYimrg2ziKryGzVAUFyQ5vk2i76SLHUHCoaFf2SrSjjjKBQV5FQovsgo",
  "key23": "4CgiBbTcdX9aKD9mVpabYe87CuBnteYs2KMGo1BNhpLde4Rs8QoCsNRqPAGtqxqBW6s8k57B4FhdQCFZFRNkq2is",
  "key24": "5qJ8Gh8xCBvu6ypHSeFAVDmAqYuG1nvkLvGdNZhKnGXLchbxy7XgDBko76HRWcA4rasBCRmqXqzbtfB1iTAk6VxL",
  "key25": "543sC1oA52LWzUvhY96pNskmzSD2qc8p2RqECFNYG241yqAuSj9iLms274xc2ef6mzfoHQzBHUFAUuTDZtrK9DWw",
  "key26": "wGXHayx6mKZv6SLRDrbT5jqVBSL7J8UKUcRSDK2qrijSVSGJowLZMpB34JTGb3pZLVAgi6snXewdoH2UATbUeRQ",
  "key27": "5isJWzddYHMmqSEAfCpQN2gbJ5QSFkJBrCrNE1Jn4dierjdibuvRCsmveDytGdpeyACALCraMTu54oG3H3eo2ELJ",
  "key28": "B2fZ4ncCRjn6LFEcP5jX7QMSNUU3RwZTMutUZtKjdDWoTRpNvveQhE8ttLE1ixrWmsdPfN4jymX8MjNeEJXJGX4",
  "key29": "4eEnS9ahudQBc1mLzxWp8spvXAdboT6iG5LSK3HzyifE63Es7FZz96qf3gKNsBqhGVYJtP4GcxtuG1oFPYYbhF6v",
  "key30": "DnpT7gmwH3EHdRyPeYZvUraKswaCr8M2onVrsexzpXhsMTrGTCGE6q89iNUcexxbFAZcDfs7qrL3pcF8FjyE9Cj",
  "key31": "3XxrGKBF3b67Yjstu2HSgem8ecc56ZW7dyJDTh4qo7qy7pr68AteYHooftZheW7zVhynVeYJbm5KMSKiLb4BkSXu",
  "key32": "Y78SgbdUqP4mCMGPDz8EhbZLTTEzPYUPZkZwFbCFGkCLsDYTMyNqJ988tzAH9qeWwkrWLZu8mZyRLVQrDc3aUxV",
  "key33": "5JdNJR2PUpVLD9mjaqvTL26Axo4DpSCqdJhmrRCtqtqryuuGGSwm87uFmQv7EZxE9pCQQ4UhnKttg7bhokBs9pDG",
  "key34": "2EUhdGKrCtb7an6o2iXC3KCxY9HN1LYmhbw1ZnZzGj9xe2NxZB51UccKTuxKtKX7RpqV2BpDkdw6ts3wUdFx9Xt5",
  "key35": "5kymgh58dfxduZcABBwLitbTsVoNHoiynn3s8CM8hW5atNYi4Dnigc69nF6cDAbY2U8fEj8biRNvyjXQswDRFw7M"
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
