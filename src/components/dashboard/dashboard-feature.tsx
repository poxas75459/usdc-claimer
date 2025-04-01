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
    "ZcWttUxGtsrVqXZHUfW5KXwGQTNhbx6PxPMRfrPAMncWVivPEHJV142cb4kfRiWQek6EZjBKDohRK6FsiyPR8c8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JmcAmKeVcjMxzh7hQ1Um1nfJnCWGphVqdz5iLUEwqUMFxXHK1KCKEUq9J4vCXQFiPiYifPqud227wKm4pdUtGDM",
  "key1": "HDVie1pCAXLDPndtnc4HDxMQySXCMzuWKsons1ionLyJS3VfoCtxPaM3rv2BtGHRGU2oTnCiBJe34WvG4dy7f19",
  "key2": "2x3M6fmChczYkzF3Phcie4h7p4tWqH7y5cDB3UUxp75bZNGKKt2U1UovY8Jhdoo1rFJrV5utkwuBzvfUaYwyfbhB",
  "key3": "31MvUet3todWraiEMoW3f3zbnyeZCGTYKMgxR1SDmCfqRD99mF2NyNRKvvJjjMERQsJoxzDKpUGJjsgAhXSvSUo",
  "key4": "2x2WNe4da8cKaEi8xs4GFCd4MB9SG4BnEEv4NnH6jG14d1H3wJ6q3nJSoa1UpG2sz9Wc1HNDxLPiDC7wqm6UE8zo",
  "key5": "3bSuvGztyqkXMWppV4pbMa4A19FTS9tmCtZwiBYE3fN2Zf9qD6DJiQ1RMwZ7dcRnv9Ut9hNMBG4jBzncXg1PmKCf",
  "key6": "XsNkyj2GvxMKPocoebBqRUWrWukeWq8VjtoTKZbkB2WDDuhjLEmT2PLYFovS8quhFnKVkXn6rrcS8R6JUpDXeBj",
  "key7": "4A6DH1PZjVqNtXJeV99SYxhaRmaJFPnxWR3a7gNW7byG9VGqdy4cmwxq51bR1RtaSQhoomGCj9WTdbeTV5si8tWV",
  "key8": "3HyRd7qr2gtQoKUUtXMZMb8ePJLqPhR9goULk2XjUnCebmBWbVMK17cSuE9yP3oDWhWDKfWmizCFLpqHD1zSFPof",
  "key9": "MV8T4HimGKXpNMZiYBo83Aa6nVLGYV5rwwUEpCcDVytwuiC4XK9jQGhDL6sGahD4EoWzzCcrB1UXAozgWEwmXay",
  "key10": "8A1i1HHkvehcic1sqqvfjkSqbChNyDhDvYJjUPLrg89hyRLw3GcgwwkWK93yAGrtXRhvTZJFohnz4CadfRTL1K5",
  "key11": "5tEGkooaDgEaXiZL1yCJaUAaz2haA7XDWevxGLCJYN9CgkaRJyMFTMR2UMbYpx8LB46bo8ZQFSwNWVimCp6RZawu",
  "key12": "ve3Pk9bGBfnGArPDuXLAhLG9TUiM2kQxmbhN1L4s2oRcYvPZZxgetqNFpazmcxcrQ7sAJLmctqMYaXKznsFDVrX",
  "key13": "4CTMskQYafBYistNTx4ZkFbFvhr1TEYPdfeCyPSsaYEUBGMeND3eSsnjb9XQtihnepRvswF6RXEoLAa2vRjTPX34",
  "key14": "iNrfXv5HZBpkdiJYFHfz6wF7MXQZUV18rSoESMaevu9qqzwr8v16ijw2LSqboADgDMsmNnyQJCAMYihkCsyPaZc",
  "key15": "2M9ZqazoyJ2Nu2V3LFiqGbxrzTjRhTnaWnxDchaEDHxtaYRENLaBp32FEyQAJVHeJKaeA35NeGCUh3MiDTjE2eaf",
  "key16": "3xfRmedpgJNRhKi1fLo7y1vQEvk4Fm1LaVAgTxWiUsq4e7oNpJYcZkpae7NXXs3BagkZXrr6Rt2ZUXgKwrSqziFq",
  "key17": "4F4B5H2v9N274WjdkJXaoEttuqDprgerf8WQyn1X4TzRRrzFqSxKBwKXVGKnHpptcERNht6tHsbhQXnneqNVLMaA",
  "key18": "3YmgzYwYoCKUwXP6VVnCU9hoEG3wzPVrXFi9ZP2pd461jzFjxQBWxMHobWQFGY2uUJfn6SvYE8HBF3nKqUmkhJbr",
  "key19": "5iDXmZ19DPGc2p5aRmUDyiECy54DQtK2PZYGD9ZcJUPtMpxKtSQGYj8pX36GWCB4mbQoU4ZrUCnHEFifopn8dsno",
  "key20": "4XB72frJSXQM3qwavWamJur46sfg9VzW1UnCRTpuKoDcUp21ZUwUSNtfwe69eonn4DFtxR972z519ZdAQaGGncfP",
  "key21": "2BM4uGpy7MnYFKE3GrTXcb8oa14fGsgGxteCFY3RcwmSSM5RDQJ4MNHCsRXd5UFEDXo6Fm7B4cjep14Af11C3Aow",
  "key22": "5pE7jGvfmrZmEkjumjW7eTaY15V4DCattegZ6Nh9hNEGfQVHrXCj2m5ERqeFsrN856U4kdiG6V7fDDQA7wDXYLTt",
  "key23": "3yhX5SRQnLaRQJuWJAnaG63qo9DfeTyDAJSvDo9anhLTApydacJeEkhHi5dqdVP5CxaQGDvKdvfGojCHRTQYCNB6",
  "key24": "NGi8wj4JkN7pQud4ShZP5uk76KYf5QUTPZ1uxbNZ2nMKYEtEwW4C4iQaEPLR1rneXVbsVWwXmmAJFYPhWeiFc7i",
  "key25": "GozBnVNd7HZWSaquETVh4Jq6x1rHpPRnD6VxeMVSSDfFsSGdZLFargGV4qKsvy4dfFWpAZSDBd1tGHWJYAHt5M9",
  "key26": "5v2NKvhXJSVgAs2aSWgHCsYZX1hHyb34TdMc5PBX1TF6prMyEtjMWWi8nqPTSHbbv1FZBdY5YLF1TCUXp8CFcdjn",
  "key27": "53MyF5pxrRtkja8WyvbDLi31XvMqduCPWEmQVVfCQWYQmXXtFkZJF8gDQJE3NqZQbGqAU78p3eXjKK19JzojNQJt",
  "key28": "4gz19C7dtiTBJBN5gLMSaQXpXGJ1UXCtPYqqBko6kEeXWX6dMH8zSChMi6y45vh8kQne7fAzcoqVFr8Q9fihJAqN",
  "key29": "5SjzQrdik7eQ1rTz7Af4fRBy1JQPaxN9XxuzoFfYvkKno2cXt5DA2vCx9ToVSYJa5yaYFjcri8nKmbcSJAxb8UqR",
  "key30": "HVnwWvdQR3sxvj9LRrYLVAnS2b1QwM68zhFHzeUFwkp5uEcAUeKnYQdMJLNkXtbYQyi3MsM9VBDkpJawMyFYQSg",
  "key31": "4mHFtcgqtyC47P9y5bz9PoreXmH2DVCP3K6AkV6hhVC96UU5p1BLpm5PA314KV2dXhDbaFLSHviyhtKvChd22tXM",
  "key32": "43PBFn7jxrkXHQ7SAnzxukNyDtWZ2ECTb9xL7yyt9rEwxGZPVn31unyj7dTA1WRaiQQqg4sm35CzGHt7oTdhQTVH",
  "key33": "2fRybcYGy9qWDnwMYsGLTzXFucRuHvweoLopeFKTPYhWFCXm5Qq6aGgbW8nrPb3MkVMNVAbqo6VXXMEApcn5N3CG"
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
