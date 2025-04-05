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
    "2aTsHn47seCz36y3JdCoc5XqTpXRFde6KUiVWpmJX59BW8bMnVCyusecUj1zURfraVLJkHbftNXemm8dDwnyhWNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "649nXcS1FSy19ECukLfGhfEZ76oqUSQJBt7kEe5CDBRzwFLdpf4fgVD7KinoDMdvWSRRv2zx7Yvth3USNRy8G5U1",
  "key1": "22pemCLoGQGCrPobuxS1bTZu4LGckDpV5ocCPWPnqeLrM4LJ1tvXajB4g2jHMt7vAsvdr15xACjAHnvCos11NVRK",
  "key2": "39DCvfF8vgrWLdiu6gmk9LbiZGGfmSzxaYhciPENoMUEPdKTRviSnzR7FifPWfLJBjtrc6i9pvoB1YVv3wafQpF5",
  "key3": "3AhC1G9twQ438XfydStJY9S1Fik2dqY5LCtNgcFwKTtsT7zVZxDwMuxD8ZT7ynEPVqHmSoChRHJXhHuygyAYgSEk",
  "key4": "2adXwC97CJmva8iG3BUXNsWgv9E1aJgNM4fiKJTSyBSgqjSa49cgMuCPTNF5L6opB2CVcFCDqmBDFLp2GacANTXc",
  "key5": "5LFpt1FBbFda2W7RumcEQA6rZq1mieC9s5qX6Hvn6NpSz2njfSdFiPptNYLLF1QpgYutXoVXYuDn5WrsDdEuuH1g",
  "key6": "3nxgu3QDxkRDATzRD56jXkgPRjzSauo6ZLB5L52DKvVo8BHLixGJMGT5mJRB8u7AzvTS2AtivC7PthApjbmrpPEc",
  "key7": "3C6nXmcvJUcML72xuDa1gHACM9hvS6PFhtKiv1dAzuWj7dJ6GcAnr9qbKsP63eMtkBkmbJmBwgBXKaL6wRVaZNe2",
  "key8": "3VXJVCazHkw1f8FhwBD4zB2PRRDAGWVWNw5etMHF5Jgu4V93niwtRZfZPmJisb8MamPp82XRbE1rfUz4HjufkTYn",
  "key9": "5Tzz4ijPhpZgPdJxqPGD2MNvZBvAm6qzUkg9JCkrVs1Yce7aaMZ2zSjCXQEvfBEh2ho3VL6Exq3MMxdtAPqzCKri",
  "key10": "Eu8DLzRUCC4nCCqqycNDm2hqmQVyUANQC8JLvavGN7TfRd7fSPTT24MVGEG9Jj7Kca9GRDHigKjjPh2VYFVEFen",
  "key11": "iUF4k4tggG5P2z8SGrTDyHSHJPj7U3NAGwP41brxuW41i6nvF6s7Mk1hEmVFM1Ajv8aqzrLSCzVEQJAYXMCgWFh",
  "key12": "C2svq5n5Dx5JaiCVFkZT4djzXZhcHEtDZkiJUf2TbkZeKBJBBGerF6TXLWgwQcDaBqWWu3ma7gAbUtudBotvXTn",
  "key13": "4zmW7ih5BwRU99JGTkYNz9vkoKyiwgrisanHVaunu4pUgqXMnzKJrqoGU6CENZaCYfDYULgg7wXuT4Fd1RnGCCwe",
  "key14": "2n187gmJoABbGKiZTHD53b36uFJ7VRR9oh9FWgtLMYApcPDf2u724P85eCE7EpcQb3EY6MRwbmsSxuaerFSxr6rf",
  "key15": "4FdvT1tNsKHd1U3eRsmM4rttM4Vw26QyDxv3vhRVQTiTbjDmzXNVZiU4HmawxUQ6mjBwDRUEi6wuYeuuC9m4dXqt",
  "key16": "5BTK1cr56UT5A9XFmtkM87vJko8wZca7m2N3Nt3kSoAn89xLJcXq9x3JGeqM1F6iBK9fCFES9Sm3MobARmd8awAJ",
  "key17": "5stbqaWd5jWpxWndbSZ1eQUviA3ooVqSmfaGm9LE4djE1M8MFDZugwd3eADc6E4NXeyjrGFxEuP82rB6CDgy4Qqd",
  "key18": "5pVu5jnF49KmPJQt6puGisdnySjNmT3amb41zBzqZJXwjBaFjHgQDUfpJJkJ6C7PkmUpEbzASscTHCEqzFdbKjEr",
  "key19": "3QzhekdjxxZU8q1G5VYjvo8hXhyW6TXvtrG3kFr83Bym2ccc66iJzZyFX6C1kzvTLZtN57e2Y3zbmxfDJLDSsL1R",
  "key20": "39PXR6PPk3GeRVoJR43MqU58YvbhUjPu3pSj3UpaCYubrLVKvo7KnmoNu1kKLzZ8XPoN1mq59qmfCUuPTzDmfWHB",
  "key21": "UXnsTvCbBEe8FoeP4onLE6iQ47CrHvvvUyDCq7xKpUvCs1qJMbzyrLXUdssrbgMtAfE5b3dzqh6pu581JgGrgDH",
  "key22": "4tphNH6Asr36GmtTuGydxVF1Mc18ZdmuZvUQX8fLaLDYwJLwDVbGyLi7ekmPWhoJj1DNqv8vJeeKt9gTxytCqfPa",
  "key23": "2VxYSYaLAXzcrbpqzHhRLCbrYte7r9Acha86B64AMqNuRVeDMfyLnuspW4ptAsdPQoxPM79Uk6mJWwKJLK6gzGJM",
  "key24": "5U97N6jfXfPnscV5PB66uJidh6pm6wdQZJNKJ7nPMJ5vXihEJHaesVxYpjTdgzSr1YmXbimgPZ23mKMbBy4WMDsp"
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
