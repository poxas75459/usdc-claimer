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
    "2kbY5PTzf1SJRLdh7aCitxfpCd4jhXBMexstgq6tP937qeqXXkrwNB8ceqTc6r1wsC3uxv1ag8bNmUr41hypL1L5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gU6asJ3JtM3QAY8WxFyj2ZA6t41umtVC2UhU2KhC1WnNJSuesFubLdo9caESn7uocgZhsEzpCfHEEf5DCmAhVgj",
  "key1": "5geKfYLLigGkKsK1vSzHZCa3Ygp53eJv73mmCdeZ42moWNMU9Y5ufEktHbwaaHJ16fYEbezPC5idVgh9oFb8bHCr",
  "key2": "4qZUZbSJMovbeiDc75Q5G7Ct4TieFd1ULux78dLKNecjtnKbds2psoZb9gEEb4U7hHNHxcrQsvikZBNPmqzQu9ki",
  "key3": "4iQGD72N4WB6APiJykBMFF61uByuSEbc2PVtxr191GH9Gb7gqdyQKxfZzKQzHTykDhG5bRFFsw1PyLPrcPh9GxJu",
  "key4": "5MFGgiHhgmsrjJguYF4x168ruYgCNEpPE2zSkeQ5fnbbrRgSjZRQe3wM49b2cevmSuAz5bWGDmNzqVaNAMwWwjCD",
  "key5": "5Z6rVNJrh644EEkQB9rmztFtyk84p5s2LT5uLdtnNzbU11HqB4PJ2FfbT8vBnFmRcspeCTphFZA49xSmHEoTF5gB",
  "key6": "4dWcSAUPU82ht8auBh4uDxU6kpnCTDVWGLHkoFe22D7LcR3JCh3QfsNCYWhU13coPSW7eoDSTyGrL5gJgDLLCBTq",
  "key7": "y2uFX8V5yMsLEkobcXARVRNMPaqQk52eKGP4r9UbenQzHNwqnkbd6g2UvJN7tFApqbMFrXXXHULUnzcnr5daMPc",
  "key8": "wGruT3RtuX3FwGzynnz27WjnkZxFFs68oE3XEu9u8qg8DpP9RcnLzykqmPVVDdwNtqFWuSCGwLSZgpHwbc7eezC",
  "key9": "64pL7seLizeUeHKh6mEEykA92V5ssNTKQigG36RHJcjrKVR7SRsyHdtGtGQkBak7FRCUQYZXsNKLTEdFdBTvsc45",
  "key10": "2A4ingpfivcjUhKPQfNBTWA1xK1zzM8McJYmUEHnPbu9YPvKXpNmcW9dqEgN2w5aW9K5aUCJRaGTFnv7BVaMcwmK",
  "key11": "cFB9NER87C6pAwyCUwzfeKBXfUbfebWtnq8pZgkKE5hWN9aGB3gFG8KSxcC78K78CRUuh95SGuWUWRJkDLWCuv6",
  "key12": "2JfZ7ncHHafGx7bW6LKVVTwPYPMw1Turhy9Y5f8xm7Tij1KmhwA5wYEMnVNyx7QTinj2xPJJFH36ShZbnSpL55Rc",
  "key13": "5aw81nUfQxaSkyyGywmL7bnbCwa2FkR1TEVzini9AjSSGLosaG8gmQuugQtXtdna3KJ2B9SA6WfNGLrX1xzdZ3t1",
  "key14": "5c3bbDbUkKjcAhwAc2NYFAnirAg9W24DQxf3JuekYvXVSe2ErDR2nMTxCr9Zvrpy92eBLxsEmDdKk18VTedwnKuP",
  "key15": "32LFoMDGfutiFjjLP2Fe3kXTeFoL1vrW1etkSqGCtFAbDHRpAgSDCWFryRkjhYH2rEYS89ztkT7rFEPS1oKxWVkT",
  "key16": "qHsPoARr7QJD1JNjtn2WXLShMbqiZSMYG12NKfwTXvtEQ5g9JTVi1gXPXJyRtKEv84n9pp1cRusUSnHGXAWKDoF",
  "key17": "3bsa6uKLVx2q9kP6hT74epkf2VPD3zJAR95yvGQfeb2bBbGNLJ4LZXV5AVDS57A8VbuJSfc68qBneXoyVzguZzLi",
  "key18": "M8xmZXYPXsVXuXWLNAVKJFBCUTR5wVrSpxo9RuXd6WY5c55FW27r4tAJLqkgED6t6aZG6AbH2K9zrf9aLi9RjYV",
  "key19": "3WYrxfZF9v98DVUUTrNQKmKPfCDDAiWm4uYmFuoj1WJ4C7aHgYisbMWFSQS1TxJJAcYVDA4HwY6pEJRrV7Fg97hz",
  "key20": "3cz2H6M58gBwkhzdQyDx2Tu1SxKHwYAfRExfhHnkkFkENKemNEMWKxbf4CcQZTQULdKh3SsLancas7fDs6UQfCio",
  "key21": "ct3NJF4ndVxUWVEeGM6nkbEB3ZBf6z3jhjGmpYBhL1XpAAiZBb25pzoWrnPPP3cW6RSXKmFBPnSoyQZHmboMfia",
  "key22": "4kfvB8r3tD7g4TwPxVc3T9b5bajnh1xkFa3tPdFC7qiby6xQQxhBt9jgjQqRtg35uYenNKHk22WcneiHpvY8tjH4",
  "key23": "38XjzMuTgJGQXDCnKo49c4hV1Ar9n21zgv8S7jumKXgLVp5mwykea7eFtvJiptH77XJ9SNqm98vFc1RMTQnGnysJ",
  "key24": "2xMBTR2uudJ3XwirKEBD9WfHBHvMTuoPWwnUP8gJq6pU39UgsdaLEpKstFgc9KYTq4gm7VCLJW5qBXcPXMNjNE1K",
  "key25": "nFCBZXXpkT9SAfriBJVbwnpN2SoUVAoL2B1Kg8T85SViYZq9b9N9iFotKsUd3GQdv5vFthoX5rYBZFhxChJY6Aw",
  "key26": "5wQfmU4CBH1JcQG5s1sew64iw9MsAkM7EK6fdsd5XgRLudEcfDfJyk9yYL1WXNqVdH67JxFhM8JUfuiQsjPXJg3f",
  "key27": "5KdBb63QgLyMmxoiyPATRZHiNKtykALZLLJKTDYvi9LfTQCrEeDsZTvXJooawXnYAvddFUen4wAms3PSCCunPhGa",
  "key28": "4Yd131TM3HCMguc1hdei9Z3ZBTdX7pA8px6D8kVG5DCGEs2xzPTQ5PRnSCu3bSY6K4d8YBiooRW9gVEKCKBvgDVW",
  "key29": "4n9kGvMGMUL2qPvj26HZW4D7y24QApKrUZ2XophXV8uG3ZGvzGussR2PKmUSg4zJUprQeQga3rpGag2gUu2ERoYS",
  "key30": "5fv5VWMZQZRZud9Wyje91NYMTh8S3sYxKnLBgTEebS964brSqSAaTjmLoE8vKh1DqkqhNv2faAdNhS4W1v67251s"
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
