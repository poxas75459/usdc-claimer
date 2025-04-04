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
    "2Nu1fWzvwBxEhpF5B3owKyU9ZsLrTLdnD4Mn3MoYT6yD4JQGRguh4iyBg6jXs3reuKUmRnsF2T33DoVNTBE6nR6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5keo8TosDeqLDzyWgCJHPcRQrVbAmyMGNu8ojBgvE4BRr4FFzCiFfY6aLqWW7R4mg2Snqk3N4ho7cX52R4mn3pCj",
  "key1": "4DcSna5syyBLQFcDeEATKuAuNdjMrXAnaHtCJhcJYYPvHzRziLaXAwWSKL8adw2Pz13p4eFwDw7Kk2gdz3A4YLB6",
  "key2": "5Y7uL6jAVbLabxCZEJyuMiu7ikyTMp6pWnRmt2i2UyPeCk5aFsfnHyDACV8zV4SQYkDBYS9FmJyTwZ7cHsuvaK1",
  "key3": "2WQe9er1u4A87UzwXtTotDdpoB1KKFexPR2P3J7hiNvv7iBhA8RLTVK7WvjRLNAodMD7dt1QqKdxtDPopMajQcHf",
  "key4": "2XgpYkFitkCKMPd8irkizgu4o1Au4a6D1j8PVFaim7ja8wC1CcQ3G4oRdX9mD3F1wSCuNeQA8wu118Q2A3wTyZSN",
  "key5": "5YwVfAdgtW14NGAff1KvYi7f3rMJC7VfscvMVmuAQH4YFkPpG8r3YiN5cT4MDHMYREFLXPTFLSpzvBDX1yK9DWXF",
  "key6": "3MijTPvaLYFYtBgDYYbA3HgWfkJv4w8mDSskx4mBAHasxk14k6hYMiP7auzCcxtBVV6Ltjgo7HxogR8XZPpf618Q",
  "key7": "462o75BK62txAoXVeZFvJZS8kreY9Qo7ULzWgAS41o63t7P6Do9ChRqiXBDNiWbbSHAJSnWJ3PkfFAzVnLu74K3f",
  "key8": "4aRFdRDydmUqyefYaY2tbmJnUsufgGgoGxq1UnfGQyjSHCErMVPMYPjkVZREMCCuzqV9JFSpGbjRtPXWNsM6K3Ax",
  "key9": "5x9YNkdU86gBaPDcaHAVgGbMV5QAauZzrdT216KrJWbCXRtRud9juRRxcwHjBwXqC4JxaW88gc6o99EMsmdEVwUK",
  "key10": "2kmcdWuZJSaKdYp5dKAYRgf7gd2EWHaxMGnNS8sCtuCymWx9SoZWgnhdgBCRerFpejqPmjUi6koH8fT7vaXSU46N",
  "key11": "2eEcjYa4VzcrZTtxodbUhAyDKWUhNkg8ye2FxVaTnQRR4tti8Z5aZhZ9gPh1GSGHKjcsqYQGuQButgaf7KrdNv8c",
  "key12": "u1zmfVEZ3fNtfGmitouRu69fGhdUpJ4UXEKPxTYMWoKMowCTHNZ61FRDgso9j6Tr3kfosk4ehDXxCUdg5pMFBkx",
  "key13": "5Cma3vpFquGRhUbKJFJxw37JsabL4t4Cyqfi9HgxscqMuzByAJXUN51fHjprV1UnBsTk2JNqYJwFdG149Pe7zSbH",
  "key14": "42CRsTnwuS4uNBhoC4sxAjwz9z4sNwuQiSMJwhjKMPEPyv1tsP8z37gh3zeMmhEjb1kddhFMM95eJayPYNkk54zB",
  "key15": "GxsXZjzXnW99kSthRbrxSPMzbbJ8FzmVzCiqFEew4NaPnJfuK8Ed4FLFafgfbm6R3MvGkVYzwWu7hWBkQRevUV8",
  "key16": "67HMuaLX4E16p1QZ4yLyv4yMUVXsbG4R7iYKpUUNLJ5Fv5Co6PHWm6gKVypRffhoAzVbYJJMpYS5yuvYUXM88pW8",
  "key17": "63rbviqSd5MATStxq4YDPjqXd9vazhqbCpK8S8UnuaBCrDCSKF2GwSKJNoL1EAK3waRrfSLg5YyX6MJxejzXwHp9",
  "key18": "2S7LM9bwzQ81GWSe4GyfZtSZPX7SKiWWbMSaWMviYjMbTva32wnSAcxaHdov2RBZJvfqZb5CXDLHzCejhauJNRVV",
  "key19": "CibJ94PoxoFZ7EMkAWBCtZG1B5VJtZ4bMimta59FkMJbyCTve4TD7FwKoPtwHerdWqR35CNotsJessmU5KDmNL3",
  "key20": "49TGemdyTB5oUMdmNH5wx657fSyi8qURKua6PuSD4AwVev77zw4gdvxLtfn64zPyvqBT2WYxqwBrVW8ihNqSzucf",
  "key21": "2xPRB1LvG6st1hXeDYopaLdL8v8Rp32oRxAzoirtr4iEntsA1QYQ2acpNHSEndkyimoqZynBMChrHQ7nYV2MvXfS",
  "key22": "5MYkNyX4NokqusZHLWxRBTonK6YnzQWbMzoTS7JLBc2bDKoKUx5rHYBQnvnXSKjThbQj1MCdsWbVCoAXv31WoZEP",
  "key23": "2GaUhfg5kG6zzp6WhygWGsLk8TpLmdrgagoj4gGdFd9whEnot9B791GHKHE2QDkqbLW8QTyWCtdHm9Px45C9h7bH",
  "key24": "4DW3q9X8nQam8eL4RMcUMPo4Dn7EbfRNRFUSxxS6MEbsdMrJnvMJYFqPoRZmLWp6jtU1icJbSJVT55dKKUkaQRtM",
  "key25": "3ooDWuZMyVe27FYdrKKXwZ1WQvptLhQRom8mpv27SVGwsxBVh3GtTMaFCaPqJLneaqtzp6hH8fKi2a6dc2P3rASK",
  "key26": "3SAYnKq2w1MoNRERPaRx7VNcfW7BTjAN6cmZtjM13L5ttNyJWNc7QbgmtcaVwmKfLi2r7zzUU5S97LP81gx6oDje",
  "key27": "4FQLezC28D2YwZvZp23uDBqnuPFDNqPdLfZmwa669RMeW9eP8bq3CCFsTdUDNxA9AGkjAXx6AwaCyNSws2tp6qMr",
  "key28": "Zuvy72DWeNNDNNRLDBFGAp724d6LJJ1tjq2gmH1oJwyppiChNpS2JohaNYLvLWmfE9tfVCV11pYFyUWnC2EgV3X",
  "key29": "4Ykh87aoJRH5YZFpcQmC9tDpWg25ucRqF8d2KpxV2J9DzCkn5X4qL82MhiUedj5iu9Qyh2RBig32L9X3punSB1d3",
  "key30": "4HxeAYE6ocEMjfoAv2jCfRA8KeJDRKkpmsnrRHBGPMzwYecyr577ZnUD27XZYoagY6Uga12XzhB7jbauVfAQSABU",
  "key31": "4gAZG7dLirHB7bJdSq9T2CTnhugMRAkKfeJVL9GCEqQehBRtiC8JmZqG45RyfqM5B8YyT15fa3cyxN8UmMGq3g51"
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
