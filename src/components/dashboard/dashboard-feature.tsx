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
    "5AW1iXTzRtG3Bu5uQARCS4QPyH3zWKW5YoonrQuEiQn2hwxpnr8Lb2hcpPGLJCCJKDdrtfEGf9ZYqUZbaH7Pm3kH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a4JmpMabKK6WFQ4wACxvBoBcEM4EafXCmabRN9ttz5WPB4k69nEPBhErNFhofufGY8T7NtAR65UhqGHnKsNtLq3",
  "key1": "3RfyLV9dnFra5igyjZi68mUdUGKFoKxtsrXsvctH49vk5GbkSqzpvtjpVHQaxjQkUNvNGrutyMvEaJRPdw8f3nTZ",
  "key2": "qSnA65v2RhFQfo3WK21HuRmRza6mSguYfbsyvMK29N7KseTUiUKPFEQwh2dCP4MBAuaNwe2qn9Z9NqwfDPbEP5r",
  "key3": "kyL3BrE9T34AdusT72qPN4m1MUERHeqZv6Ea1q95PKASi3T7NGdHEES5RDaDtgHVsgpdMHnqeRexMuSWu77Vdmj",
  "key4": "4PLRUrtrWwqsSKo8cynxmQDCCuQhcgr8aWxe5zi9JpntdrKB6h9qs1Gqq6dU4Q6TK3EKCMEaGyLDUUWGMboan9mM",
  "key5": "KNmBhikPivq8UeFZJcHRnUa5Bm7nFqQyd4x5AJbYbMTwU1QunRUnpWcY1XBQXTx1oYpyG1iTx5CNkugg7d5Cz5a",
  "key6": "xgfF4jfTFa5wAjGQ51HZxtZymTEyvqtX7s6z5UWwgoQ8CRxyFXPCHsLu6XQwZ2BwJdUtrk6m4u5NcR6UEnDgCK8",
  "key7": "4mAgj6nF5ZFdryTbKtwuJu6ioq6VAZEm97jub7Z4MThtkJrL86AN5QxhABNMb3pYEbjFfznkvRWca4iCWLPrDCjB",
  "key8": "37P888yZ35p13F77JQF9xdcGyzW3gcHZ37eAiZhovAoHFMJ6QrtCPTAiuUxRhpkTPrRBydsnRysj2mQSdDkyVWTE",
  "key9": "3CwQS4WEodsfjmEArEBkcgMShNM1sjD5afHbSphLUzgQ7UpxTkqAU93d4VHNZN9wabKmbGwb6ZhdHgvwbQVCpuyb",
  "key10": "2pwQZbTy9NSMwPHnUxcg3fqe6rTJZ4ks4yXMLixERjh3JuRk6WMBUhPzRCyATfLmTAGPLDa4YYJ86bjSsa4Agzmm",
  "key11": "9LRENHGLTYBpp2WY3bfvjog9Nd7TfehqKXNrfZuqyZNY8oJaKXtjjHa3N5EpPMpqf83qtFSLUBrK7EGkM7v759U",
  "key12": "DJZqWRWovuCjqvUWdqDJEJJu8Pq3HUrGgABWC3xaCwfqF6Hd6r69zJi1bVF4ooMsGEJ7CQmqxFtUSNaYoiSR1os",
  "key13": "5vFFGDXk5F6HCi4Y1L5iBnpwNWfVqjcrbuNqF4Fkg9PKJTD25QHcYXEtHJxQQsH895mq64bSak2ia6AbBtjvpi6C",
  "key14": "48Tv5Z857RR8bczc1WYLy4CKJQ1NDDMgnq9AVetvm17UFiaffi3bR7bDEgTVUCPAvwxAy8WkHa2sM1E5PsRiRNq9",
  "key15": "25LA7yb1jybCKu1nRLjokHiJuNxZDA8JvcyLVNQ5eLKESZ7GxADzWE32TwgFeDtPvP4MqMt8teJ5fRs45aKcxJDX",
  "key16": "Do6rsaBBciGG7FjHanwZ3HcNQg2PzdeD4hus7aBMK8MMQEQq6SDUWBEZQW7Rc4Ri6yvsD2iVuPeZtuUrKcWYq2n",
  "key17": "3oxQDATLr2XqspJckgSA9zyj8M5QBaoNGZoj6AFWJQXMMMitB7fEkkPVWQvSYNW11r4Ar69XQqibxdS6KY3fwBwD",
  "key18": "2tWhm6hPd841BGv8fXgyD6m2E7PFQ9KMaat4rCayrEGJcfS7vynrCu4F1pH6jo8Azty8vpUXW2xJQT3VtE5E68SP",
  "key19": "5W2Gfw3yAXH6CzkWLsrazQHB6tnfqWYjTwDkL7CZTFPCaKKvd12n8s52tgcQSVZkzPF6hSteqb8WoXMSXoXnqmCf",
  "key20": "3Ea1AaiE5jCmMi7M6BeCC2eMbrKcQbCkSNgJbzzzkSdr5NjXNtyWZaryWuWyEGX4X9aJB6z9cJ6phxZ6HZHWMicE",
  "key21": "3nDKkj8sfkUnK9AoSqbo7YrBrHZFgRVDvFafgaR3B9a4rjAF8SBs8N7cLXabQc3HBsrwU1mJZx5RhaNp9GEDZrd1",
  "key22": "3phKczPNVYPmWxQu2w9qhhtsJk9go3EpqTdWaFwNHtAw4VJ9A2jCu4AV32Nqp2hjyHqU2Dxae7UxGxFRLx57ey8V",
  "key23": "4qS9YrhijNvdkxYoiRTKWFPdev4fuxhgd1PhbaPAL5nxPNKpK9uvpBPgz5r8meXECRSKYGUWsqtbfKSJWUrxmLkW",
  "key24": "99jr8WKZgisBJsDzbsNujDTAV8yHDTDt7pXJZ8qPnEyCTMRMzhzxxWEGsa2PgXW4vvXec7MdZVLjN9FQ9cJXXKT",
  "key25": "427YKNGf8EhS2SvDszsH42br4PJgT8p1Ky5Vvo48fHaSH64H6TvZtAbq5HM6fnKSX72JXhVSsB3G7Vg7Ka4hrimV",
  "key26": "5N9v5CNsazRM6u93rDLo6HTGHTEiyZcXdFDKF5Fihv5pf6G5Lwu1EKb4qyhYDsaQRtsNB3kRg33iHuhHKANRqAgZ",
  "key27": "U2n53E7CJqJuzyxLh46rrhhAVy7nfhsGTf7jRd81jdNaxZFyKWSq5eqCfjtd9Vf3LeUZPLkhpnWPHRU6qNJZfmA",
  "key28": "2mG4vxKLmN5PYeiJQB2Cxw7fHtumpCVrXzQ4PCaqTyfVPdcnN3BEMfkf8P3NqZ4YqSXz9G1Km9RCzsncrV695Ntk",
  "key29": "3rTBy8y97VGqPT5YAvQNVVUhZPriEPN8hMeS7eBG2Z1NEYdEsSjPQWU6cAmhJNvyorqHRUnrAV5KkM3Fy2qhapiw",
  "key30": "43MAfQRxU8LNffKFLHFqU3m4w2qPn29Go2qAbPKSX424FBRdm494uAVpXqScvf2vmTN7NBUo5WhyEdpRchNuWUEm",
  "key31": "2mpZftyh2HEo6Skb6VWHtrfUV1gZFX2v3xZtbh5LnFSEc2LPugDcFCQWN3kdhcJ3eJLh3Y4ZSSCQEBYpS7mbPyN",
  "key32": "4sGDtxqMMSRjfXuwMC2XH6c7SXcpv9tUEvyT7fi3T56we3B3ZBBrBMaNPQYrzcHoRaWr9zZuLwyQu3LmyzmW7pEh",
  "key33": "49Q7sdbM8n4m1iy6uq1TWrGyeRAKicxHLd8WfTeSsCKGYHGiv4G71kXAZqeVw6R47ytmhUp9dHrYf7fqKeLWekYx",
  "key34": "SFMcP5VynKBBx1518Zs4fxW3JnDDs5tGwieCbcMtDzkS7RNUj8WESt4icJknaMUCoEe6U91ModWx7ojaZqafJ4a",
  "key35": "2oYq3JYauov8SzdVavP27MUvi5KnZiohdqXr8bA71MaD3rSKyrj7DBiuuDw4BuWCRXccwhvaV1m2gUfSk3u9j82w",
  "key36": "3LzMdccvQSNPrsGpz3dqjdTSSRdJ8VhdMv2mEq4bnsjftptGptgHQmCACwvVkKdzjm6eqM5xbd6xMWDXSZKVCghA",
  "key37": "2m6cqwUf2WkNn4dbi4y596XHGJB6vFNGGwjKiDhY2Kdk14TBSySCRuywVDRtiedacMs7caMYdBKBPBXtUqNC41Nk",
  "key38": "4LTjuYYkkTtV2L7ujp43Pt6GDjQUhJUj58vxmRubpWAs7NiHy5E54PLsBGDHF8tgiSU5kjP2ryjXWrSPLrKUC1KC",
  "key39": "3WHcScNkVKxJENJTYgDH89KnQswUWjcUgvXeEunGyhUqFEXGma5dMBg965AtzYHTRPQnjMd7q7ARtCNm5CafArVi",
  "key40": "3rzwBLmSkQU6tHQwFE858PpCPmmx88EQVxkuvnEPb2B2TZErz9rW59JjJSBhbdVNQvt58xR61aVQEc3bcodMExSk",
  "key41": "HCWRWSzcui1v3MvTvCB2dNRzGTnwsV8mgxG7VugePq461gL67gL1R3wxLejyty4yVdjF8JPJ1fuXRZ8MwxmXm53",
  "key42": "5NvjXB3QfP5fbtXXyDaKnsabFEoFqnMVghqcdcKQpSGDsDL78ZtT5BGy9QxjW5T5xAJ4EYhtc7ZJiZCQJd8yo3Ee"
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
