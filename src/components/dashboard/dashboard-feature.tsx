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
    "3Kh5bjgpCvF9RCXzwBApZ1kvU5U31rpYg64DKYWq9vq3xt5RNZCre1JT95DwmRFPBoqHpQ4ezK8DYhpWMfu3tYrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r8fPNh5T8QKrxnqZsEACCetRpVENCVFq5PfkQgo2rXVoMzSh2gAdX85qFa1rgdxa74E9eQUuXgAEfX6dP8MT9DU",
  "key1": "VdrxtSzh5gufxFxPZRqrwPfnzP6YhDhzMCpK6zX9HLxU67GFdZASHDpPBUPiLpTpxTJbNnoJ8gATjgyqSjAZhAD",
  "key2": "56eGsZPG65eJ8Q7NK5an1jKo4bJHtUaGcHskGq7snSFMaapycLF2WQ4A39QKLzaM819iQCEmnDmSjftQHYAAQ4xJ",
  "key3": "ZLdXv795TyNNg7fMrLHkSBdah7sPiZLPrCrMsoNpLgJbiwVZft7DSvsDqqok9xfhswN6xCQC2jRjVFKYm9AM2c9",
  "key4": "4TLQhpqUUbMGYR18pQ6TAP3zryqFmwryshbrrcLFsREyHwBJ6v68SMEn1CTdwVGbY3V7Cg7s5F3MnoZWdRRT7gjz",
  "key5": "cHF2hj38RkoSty1oFjUBnCchbPmGpa82TjdoLBrJC9HrXf8MRLeMvJNdUuzE2E6Gy8f9DCmyjkqg3LT1xjxNabB",
  "key6": "37pWCGCaEHVdQz3vEFm2RNMNDbgx85cr5hBsHQXC9jixNRmgMkpK6US46T4RRYHV6x2StMHg5JxaxxFjG7Ynh1dd",
  "key7": "4UAeYUmsLcRsF6EMeKpav83NZPWGFyqCEYvp5sW4ttp7E3nKpspRmQtxaC31cB7h3ynVUNRghmXW45YvkMV5Sje4",
  "key8": "3PxHbowuPVmgmUAQk37ZUKv8q27s4JvreVpyBEnfDzbT47aXqKWKDdsycGvE4UMyaqHWWeeEoB6yCMfLPNP3TBmb",
  "key9": "5KustyUPRSdHPjCCNn31Bwe61XxyCg9xGWLEnfdGeNXfD54K4UMN6myw88ZVWv9GM9xrj1oXHqpHkB9crfAA1jhC",
  "key10": "xKSt2u12xssHtZN2znign59zPT7HJMbxmu6tpo3JzEGKwVM89uJB7VvHEmPg1bbuYzxGQSuUFxp6y5msWTYqaBJ",
  "key11": "5DoMVFxNHHr95Bz7ySpgvd7TYN5Ew4yowMncGCedD4JvQH1ZDZvLWunL3GQaEGhM4h7aRknQhMhbciMvGTNsUEWU",
  "key12": "3obgSCewJ9chaMUNNbQ1CBj3Xkddr3N75gXp2HUjRpdExjCnrHKCWmxPehLRgWRSrnwhVpgB9KDtQyu5srfr4U5E",
  "key13": "2G8GAhEyVR77QukRcJS19ZUP6hoBKNtrdCKEdLSTFLdRAz6XUHVpckFRc5XfrwRqb4Pxvws8PXULMvreHHERQrfz",
  "key14": "3WqnWEoBokAHVd32kWGG8tFGxgj3hPXJxBtsdKd9hFh2w9bt7fUekCfGfg3tJLnkfgqqP1EjXJTUGTjba2hEDn2C",
  "key15": "4YtkhTQ8rwFU3wxuyPCPiXQbQ1LfCrjpAjqc3By9U2fLnWDrdNZXHiTMFZQKTUmVvFDcNZyb6UzeS7t1vat7Yjoh",
  "key16": "4p1V9aZ2EV3CyY1gHMzyL1taMJnTCtr3jxPZVW44ieh8heyj2HLWt1vdCPEcKdZd3AwWekareRqq8pPgAdGNCe9P",
  "key17": "2BPSR3TNFuXoZyH2nAzzQUsaVbN39xrQRf6pjxy1A9RkMHe7sZHzK999wCJTQZmsF34rfSJM21ZasEAUhcP2NVnc",
  "key18": "66LU795E3dePeMVLiVf4onZzFuWHZdCpcQXD78jki63vKEJfZjiggLX8Zad91pYRJxVH5M9WUGL4VFWRzyiC7T2r",
  "key19": "4k2WHKy6icsqSoFvVSga5ZLpBjsShtcc7QNnzzchJUCv5T3DyojfbRP5eKFnZmU6thAMbZT4C8MgUH7NBwsN5SkD",
  "key20": "2pcpUnrxHg8jqji8WnoV5XHtUxsxsFRiCR8huVHNXd3zqH13XkHF7urHmtDVuzpfxPJqowPYzytGhmymtAQYfHps",
  "key21": "37gP2Ty4QGJJVZWj5Wxc54iFcMeYvmB1jzNPNdHpagyVMVNDXWCB7HiL3NW5ZepmNfK21HCsRaDys7JJCemqiyAJ",
  "key22": "5HW7dhZJw4919ANTCWpsbuvaSTrxYZmy5XAiYanpxeqKyGyJCqY9KUZHWGbdBLzrGCBKGkNJTvmWqzUcwqbsTcpE",
  "key23": "72kCVKnKAc1vRjergVyWMrDruQgB5VvnbMj12JKprnrWpwvvfmPomtow7FMTjttoMHhtrZueAvXtX1wNRPGdtXP",
  "key24": "2s2rHnzimBxmmLQz3GMGMsnFMytXB1QBruMdaj7s7TjL5ELDzdzY2hk4FVKkiZ2z3uL52Ddc8TecHENWGpoXnQun",
  "key25": "2Hcn5hkPeoyPuBsB88urfiDwxUpvysHyn2MeUSG2B3mEAoQ7YS8qAXZdeGrSE9pHBNyRW7P3TdJj3b6H6N1VLLJw",
  "key26": "5PDGBHMsr8wgXCjHXwssKmzrM93wcwv84odLFq8b7HtQf2wENeXLTMNtq1QeUBsQKXsBSERnCD3HFhHE4E6mZSJe",
  "key27": "2VbYfh21vKTHycE6MPciuWu6y8TmzHT7xvqeJrtjCLbYQ2MNMQeJZHJ95HJE7DB3SHFLTJbFZN678Pg85UfCnZNe",
  "key28": "2TXazZ46s9uVp4nrtsJq8Nyi3D1FaZQSso5Kv4j56MyYiFKGsCVQECBnm9FLm46maRhHsfGjWAba64xKEvQ9YEvx",
  "key29": "4dSWYvnBuGP8xDXaDWu27LyKXzdurTCe1GUdLzgU6w4Vz53QCa8rmLFxt5SPTCRk9JLpK4JaAmn4Hb9Dcf1bEtZm",
  "key30": "4tyCTVBowuM21AM8DXzgaUkWRbVsjZrgL4PLkahFvo2kzfKGXsk2HfACB8Mv6Vxq5Nqyw93pyVKj8RHjcbkNfsVE",
  "key31": "PFedmwg3qkWK8RUyoKu583FonsNWeLxfSJhKW4uw2BXnC7WSVjjS6Wp9FQ5D1ud2tk5HGwYkEagMcGzLxTw9CJk",
  "key32": "3mqAyRpwjdhtp2aoYcPGsaYGFHwwQVMZsm3XNB8wf9PihbT26tKXrxY5bFgrzpYc7HiEoxNjWTSmej49EQmqnBPp",
  "key33": "MmmTAeoTeYAGVQoR7GiHYp1vWGM7UpjnJ1QfXU9EYhopD7ZJg6Bv1NFW84jmWtG9k8WYAYVkP1vUKszHvAyHer7",
  "key34": "2izBFAipx5uQECz91Zjz99RSP9qKssEVkNzZhw8Xo1vL2UgbAA6wxMWVfLYM7g4JrnMkQ3zzuXYHAidLAe9zXTgd",
  "key35": "5neWUUhw2Hdxo3Nn3oA7hGQyrwqiZHegbnns1VYfnFz38WAG7SBUqXnUZDGEatPePD2ESqPy8DqnXDctFVExLMhY",
  "key36": "2jjTfV2XZKcbVX3ofzSBkikM4ZsZS6HQvxninTwZQFmsgiKuHTHaH9S6rCsPRqEa9Dtn2DVFQNPmSWtUYHfzrx7b",
  "key37": "2rVrvojSa1GHEX85qZwPCBrxDwFQfDctN4S32r6Xaf4S8hJPnpUd2qAqyfDVooFwjJ2e3i6bVS1jdwq87dr4vfzR",
  "key38": "2KoqY5b9mRWQ2YoicLNgJ34HEvbKRPuwTWr6XXEwcxiLL7LyFPUo6jKS3ozX41LS2MC7AcBkgUV9xaxiwZctbk6Z",
  "key39": "oMg4UgTfKxRyAJmr8g6w9BT89XjVGEKdHx3bpX5hQEKHk25wiJgs5CSpmnCeartoXMa5PGdmJHDzhAK26kHvker",
  "key40": "4aKSiz7QbZbGxH8r3JfqhYPSVTsK3rkhxEYt6HbsST3s7vkjK5Qyyumyny5xUUxWxMzBW43MyMF553JvpEGYW8Vb",
  "key41": "4GwUfB5dW277hSu7eeDSD9XW7bMZ8isQPNTvvtX86hoWEXNtWaDQKXnm5jRrtipxngnhh8ucfEqVATZ9NVNQxvVV",
  "key42": "jw1WaoBLzrxumj2YnRJXkJbR8dEAUnwSXk1CHt9dj4JhmBWq9n4qGX6wU1waMTvWbyodNkwdoAc7yCfSqLVGonx",
  "key43": "5SVX54N6e2UDU3KRqWuBnaty8iSJNVPLUFBGqT9o1Cgdw4AsdKmpbZd2fH33ZAhsAujevzadXoY7m4rzEy4B5pPr",
  "key44": "4AXA3XwwDV7UprwRFYVdkPhQYWWoFWjT3NFWbwXdvoU6eMiyC4LraoMxFTtzM7qmg2iBwVYEHbx5UaKMJCLLuxnT"
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
