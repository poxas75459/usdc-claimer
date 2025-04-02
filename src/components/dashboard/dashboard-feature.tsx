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
    "ZEfLJj7A5qBazyuzscNy2HH3C2WPt2JSgfrQaTvNegEexVspYMCtvH5UxxCKAEdTGEdtVRLvRsWdjprSogH7stM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3udwwvkZLAaED8LewTvaU2Fx5oWVnfVzhVxdQfn6b3nidds6cJdYz1XGR6gAJ4vSc655FVSmFhwkxJUWehhQYDbq",
  "key1": "2X3oCeBKjeEYaRHg1NjAftDeWRQputnnk2JUAwxbEQgkfwZok8ahd6cPhDqVJWrbcvs3Djrz5dHWHw4M76Q47JcR",
  "key2": "5rEQGjBTmNhzLY91ggjv1LUtg6aTNH8T1HCKtDy9xrtzj8q4RDFhzTYYMLgemw4Rvwbk35KLiZDyHMJG47GQPiEj",
  "key3": "2rrhf7E3YrbLaoBejrv5Ggmoa8y6hNqEMnTM4KrJQoYQYXezTfpiiFWpgirbTakMpg1hv9FVA53gzuZZz8YBgdh",
  "key4": "3impT2na3zQXyFgcvNFPNFPEo2unQHjrjuK9NkZKR7CT3oT38bkcJViuyMZjTr4XySruEGcFvm1ZzdYSazWCvi8R",
  "key5": "5r9xGEkpJRAgWAhF4xpALbDeu31bRzZgDQAGZNVJ3dkCmsXUv6ir5tAhLm9WCpEDexCypjf4VGv9h9B5v4m7oZEQ",
  "key6": "2LTser4mfpjS8GpCtZYiFAjXJqzLBm77tDbK7P5ncg9GHYSWV34zYeT58cczuAVRsLtMJrZKovVHtVjVA9m9P1Rg",
  "key7": "5qbL4SxkeqxpChjgtCqZa1Y4mUkBWijViHgAcQ3Ujvjx5y9r1PyvBV5qPrAXwQTMarSrvE6RveD4Sr6w4DfR9NS8",
  "key8": "53nG9NdBnYzDr3zWui7T7KG4reDy7edSYDjpzkWfZy6NaXrFdo3RfMvD2rPddwAFdCx5XCFBD9fsPaqfj5HtziTc",
  "key9": "42wnRgfFcYehdBjPDBQrtFvDhHSD74S9jnRgdEEAxJdDr9At54dYVU7z51VVTeZDeqRznH7dWzwxwWXQ7K1PfJpm",
  "key10": "3Dv8xLj3Sdt6W4XrrJj19vg1evgqRm2DPHAPZxkFjuqhdh5kr3x84d8uCqGSWgJ1juamEkJ4g9eB9TDPaWm5RP39",
  "key11": "5xrKxmDmezErNw7gWJjmsojb8wdKZ68cEZt7BCQfuHfkPCArRx3j1npSHT1kqmks2jw2dGjkcb6HnxQnbCKZUiHL",
  "key12": "3mrrSyj56ADSPiBv2tsnremi2bGD9HcVjuqPVWA81ymtCxSsdVRgMhnoYf6rV7J5RC3jysvhW31YNigwURqkMFgf",
  "key13": "U7UmJpHuw2aGGd1x4Tu78CjDrfeMxvVzemXFVAWyFJXpxPhNst4HvxDUQ99G4ufdGs7JgeBtDCKK66RuLEeCD6E",
  "key14": "251pza7Yhd73B7s9WYWZRt1e8oLVGyRXH7oN8FZZwz1akme36q83Xcbd66FrekBPMeNF2sn5qYiuzvzyb8wQHVEK",
  "key15": "JxrE6dP82iv4dN1vK1Gn78PwE5K9QVhmxX6CgwhUMuoaxjqDStagWhvhdeUNwPSQZftGoUb7uh3fiLFHqWXQb9U",
  "key16": "2bGoo8xLNZNJnChjxr7S7QUYkPzmf8jAjZMYonPFqvEfbHPza2euAnLj5LU1RX3jN85p6CZrJYxnwub8e2ANKh23",
  "key17": "2vbcrr1iJx5hyyxfjNYQzumQZezcpeuPkfkJgYyoh7XSCGVMxZ4rb6Ji95y4Ma72qMfVY3wj4ieHLej6J41v6VXH",
  "key18": "59XdkeUS8uWmFDWun1dQCstZF3oG2Nm6feCbK5jA39zemMoiJTHMBgmDWCyFMGavRubQQAvYr3A6qpWAGC4NSn6b",
  "key19": "3h4oA573vnaqqhwTidCU9NujQvTvXWpZvfb6vgQ2gmWQrmqHaXtLmULQBKBQefVsxgdNdvpP3HcJEt7PmfAjRvVx",
  "key20": "J12bw9GXvpmsh1WW8Gcz5qxS7mG2B7erpqK26xF3pErGrsQQEzSYFQnobhBDSjhuKe7kK47jXiL7ci6vtwGiDVH",
  "key21": "3LxsB7LubgYrBsBjbfVSCQU7RwFiZNAjzPtrzMZPv7oa7wPqCWRsbKHaVEQCoqq2ASfseMXstCXpvZx1rjdk9ZQE",
  "key22": "4u2HSgV8UFueo95pZRYNuCm95zP5fK7DdUNsMB6epErZfndvQg76147PZstjx4cUgDKSdSFTvNZYM7B8wMfRS3uK",
  "key23": "21mWsV6vAeBTiBKwuqbkaNDytSzVHeRkBFpj3gweKNsigkAXtSr2q7SLJs7xpJEXiwz9eWZeozfYFPUiNiEqUdZw",
  "key24": "2YBkaqh8hkSzG7wgKEbK5a8CpHd8AsfhePj9xRg8ZT4xiyUYHKyPkBNyTo8BCSubecrhFQX5NyktvcDtj2P4SxA3",
  "key25": "5cqVVg5Dq3bYf9yNXwKiENe4K1Lpbf7STThEK5J6ccJEzVh3anyDKibew7291atoTFmAnnnk2fpt97LRywmSPfnT"
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
