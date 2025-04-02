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
    "2JieMkyTN8macDXJzLVn6AykmM9tPUJDygvkLT2mEViskjZrVnRWBYSsuJPZbuSXU491owP8zwprZi1ucBFHSjZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29KNQDmYZD3NXiXe7RCLVdr7VSg7J6x5t1mM5UTf6RY9fVCUC1yLK1jFnkh9T8mFdXsNWBipZHroKHbt68ruor4H",
  "key1": "3wuhWFfAqAR2HynAe2v4zLuCFwfRF1LADthuuEi2MisXpiHrMHojq1RCvQEQv5yuLqhdHcm7GcVndzEU76YwzskV",
  "key2": "3UidmZkpKAKGGiCsug3KcTtpg5Ff8Y7NQDk2Zbn66npaCL2F3UHEaHcsA3sJ6JXwouxhBf8dUBN49oQTXbrEoftz",
  "key3": "2LMfVdu6Lsd4z5mC4gHRhe5v4UMshxQEnKsjujrcnA6WPyhdJrurbguJKeXTEfXjiYQEBRSKqbWQDuuj68JW8v7M",
  "key4": "37oQGJufNSyPUrbv2JWwNCeCyZoJ1PmeHqR3rZctPCGr2BLGPXAsXoJivKEEz6QvAxAvy43iXevfK1jtDVKszU6L",
  "key5": "5gHHmG2w4MnKnDBUDWLUcR9y2yqzyzryATEVDP6v8hUzGqbRBcgqxm2rBDDSd1hZ36agT9mQopYGWWcXfea1YgwR",
  "key6": "2AoeYtcFPW6Xybeyw26fXw5FYqnwiD5TUMUeVxrirjRs9rc9aJNYQjxbMyxWV3hnN7fortuWthYVmevM4Qfpt1Qr",
  "key7": "5F2NYE2rck4Z7w2iwSfGmfQJhapzb5GCHt68B4KdFcu1zRWKucqo5n2K2TyFs3bRDS7TAKt5YKXcXdKbYG73G7WV",
  "key8": "MkV88qYPBjq1rAmWN6aTs1BYaXzNe2krcvdeHT1L82FfA4RDizD4CLHGxDG4UGd88gcFRwDFUo3B5Gcp46vVuNJ",
  "key9": "jxQXyaZLF7vMk8zYviAbZQJg5qUwQDzTcZBzLZ5Pex2JpZNXcGrrHF8VyBN81npEri6HesEsz4Q5NYbKasJ7V3c",
  "key10": "4fnnbph18r5BWcpeijfzpPQQQB8kYK6Z3vEJuLHqKMV4erajpvyZaE8JH5w7t5QPrnJC7D1ffsbZK5bNPW8aEewg",
  "key11": "4kHz6z6QSx2PP8vz3TSyCv9zgtLTgbE92EfaY2wRMEjgjcGSsuGzPajs4SzatjuFADJQrXu5S1k76NPEifDdkY3r",
  "key12": "PxSrmmUULD77Kh1GQBFELPZsfT98JkyjMXqU31r64PoVQe1UKATdksSvrU2f7vn9mmqwLwcAL9iXLiy64xskVBz",
  "key13": "36EvsXsL5KYpsxG3R5FTsiUaiwwu7B7XQKch1PFtNB9f2vmUH1rhKiGLZYZR9nNgsHposm7c9zKe65u2RpVw9WCs",
  "key14": "3uGF5j1JeVmQGMA5GPNPDNXJcbm9kYfyQpH6SZBQepGFapCJQnHKxsF4XuiVDzboZEQM73AtsoxkdWvKiRgXSFD3",
  "key15": "65qYeup2XWaiaeJ8RKr2VCDGoe8wt8yVikgENzcCddQyzuLo3oCtd2zh57VWGzdjqG6om1V1xC7cFQHPF4dL2XMm",
  "key16": "4PXq7L4CbJSdC3zs78eV8mfGKT5dDTpW8fZqxQoqTxg7bekX7WqiiLCVTMXR7paA67AYoLJE9NVw7QpxdiLghCd1",
  "key17": "3FzC2L4zxmCcjCkM76eL9ESm5CqooFsyMZL6EpDHfwFjS4kfyPqqSdhupQ48GwFUnGjM83hfsG68FdBt6n1orarW",
  "key18": "456w4eDXEY4aTDv2qaTYGujrJ92oJxJ8CKh6DmvLFm4eT52XBwNZFqvfXEUKD33hyyeMH8ws7oc1AZcVTKNUuCTT",
  "key19": "5nehQvY5UnJfvf1eh8KWDAq2BnU66Qxvk2o4LVDYroTydCLabuHJxdo1tn1xP27u27xJUVBfpLG6gLQYaXd3q5Vn",
  "key20": "3DTpbRsKiZEGqiDVJxr2e91tjwG4G8AbJEigtsUwmhF4XXEVB5TepBgZ9woQGnwUod2SigfosPdWFLLjRR9fcV2",
  "key21": "3VNakpMGkzSGE8Qhrs1JjMzgdVfAUmT4UtoeG7FcNR7Sz3CZSEUxgcyUXwRLadpJSaUgovYn46ncn8fFvBQTa8Pk",
  "key22": "4fMcK3hZmbD9JDxVzPygUKQUKta5bVgPa1cUG1h2dpi5waBMTK3WQDYpqnUYZbibF54VXhrn33oN3FJemcya5CA5",
  "key23": "2cvEHYPfvSXvaK2W58re6xvELSkCX3NDcGbBUAF1twWcbq9C6TxfE51i3wqSYficqzrHuq48toG8fZry8HWXrhUs",
  "key24": "4GpEHXXAqUWHBt5nrXwSCVEChJWGFMPagSJ3nufUykXcvAdLnvpiobxcAA9CJHse7mXrzpPNc3wPVRfYPwoWRz3T",
  "key25": "45NfSRBWf56Ai39UCrfi1ZsrehnUwnaR7hAaGheW5FGFMWXKvytZrFmWFKeuKPdHUoTgeshUbk1S9ZZLnbZBEv9x",
  "key26": "2a6dzaT8tq69poPEAuUrm2W4p1pyZAtZx3kRnJTVs4okkzt6eLis4rxkoAaCnjztpyEmZwv4icC9LwVuSjSfLQxc",
  "key27": "57vE2oEtazNq1iqHvmZitYEqRndDu63wP8V3kSs8s11CbX99GmUgkkKVeqDtMCBpiEz3SKWSPKPQo1F5Tr7bV7Yp",
  "key28": "PkUhao59EgZ8M7gDAEgUZFRyQ1vw5qYyqWyNKHkXXjtHCLM2zPQSRHpFPhdAhdcxRzyPpwfy6PVW71gWTJ9Xdvv",
  "key29": "278ypRqbikGeSbnxpqvnr4H3JLTXKLfYWsrRvpJoKpy8EXTQipuNKcQUwMjjPwZejGm4yeoLb3qY431hw2DyuyVk",
  "key30": "45DhpG3UtE3rLz7DEvcUUnDL2v1XTpuGgQvZtNtxHrs4m8vHnoevHU1x45WNDoMv69P7UK94diUhLjfmPYz39CfX",
  "key31": "D32jF395sT3UzfMLR3SJn1HaMQNnrL6PbMJKFuvJq6Lk8HwGpABH57roZDYkxPQxd4HHuWseSDKfXjdrjwfhzoy",
  "key32": "4XMBAJj3r73M8bnqG41GHcBQxko2rjxCXXsjz8GcK5niWWweaUyWmWEwvz7aURQ6VLjwynXmEC1pkHD1PVP5CHAU"
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
