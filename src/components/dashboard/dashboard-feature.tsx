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
    "4jnhmi7HU5xdrdfdHf7MBrgmpghVxcg3kFCcqDLWU3ZVWZcoNYhuy3YYLCcMN7cvMxKNwyCV1WZvmqgWm89Li94v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BHB7xWogXLpTA82AEQDRrkd1uVfEHGDu9jBKGpWfM7vHGGVZ2n86dMAox1hX1FmiZ5dPcCkXJVFUWA9ycEKawfy",
  "key1": "5a9reBK7VKsDe7PFNZNYJgFLZjjcjr7Seu2vvvEVZBKqJeBLucZ1rHkTEFNtFhtRRX2zbmRZ98fY3DFqxhee45fL",
  "key2": "2uPQG2gCSCawrdfNsEV4vSU2SUdwDeQCrPsyYQ7QUxgyqtrGAoaueAt1oYFsbsmkCvCJqR9JkwKvVztyVjTG5gC8",
  "key3": "2wDMrRpjPKqwifFki8Z6tHG1Pi1BV9QriwVLV4qByPMK4E2arpDTLEtK5eKGTCKY4cCaDoDre2VE6fChkuqLNfcV",
  "key4": "3NV4vvb3o3p6ya8yxKfMxmX9fugADctQbDbuzhyY176YmTRYuCi83epDUWCYsyh9yXcZBPtgZWV1dd2ihTCHUZCE",
  "key5": "SMXdeyXDjaWKARL4Uj7iexH6s9K9NagKUDDyouTdmonmtRNtB57fpp16P2odwcGnYy3ZwqnrAdNnSvA6aGwjRvB",
  "key6": "41JLLdR3oq8xtsPgmnssAAB13BqCaaGKof1pWjmt3imnqWrUgPp56ynnPDuXgjmxYvmd7ZZnDejBUZNfTthCUZe1",
  "key7": "6JwZRpEP3JgsbsPpZgCHBokYiZxRS1d4qCwvYyF1PCkLk26b3XpGjQfkV27gjsEfTq69srXNHdXvtwz18cVJvYr",
  "key8": "3Zwowed9y78C2DPaULUruZ3SDHsgqY7XxrjGEkyp9AqusPkos7DV5nJVNxb5ZbYUzspXXivDLCFEoEgk1ziHxx73",
  "key9": "YkcfiEWqPbhHs9R3YE1ZWWRXNSZjFCwaZjRBykB3kN2HZoBGQ1Xw9Ypyyc6zCbyaH5BGwST7GskpnHCDAD73i3y",
  "key10": "5GF1wrhHce5pgykzdEJurtLNQroR4NSiM7gPM4sipbSnS3PXMSAyFyTeShCeNEnvKLehaRew6QEvqXSJufdA6fA",
  "key11": "666kimM85RXkSS9f4hMh2MiqGfMxHCUi8o2ZgBwjLHTjEXqVUDrhhkDpB8DhTuvbvdP4PVTWWQ3RBBzdjZREAPUU",
  "key12": "2zjLEMPWBB3DxjVuZdVhts8xjEgQ3qNytu8eArSmeX7igXbVi4LtxJXuKYEAfcj3PV5KTZ5ga88zxFQbuoKqEbfF",
  "key13": "2dMAKPVrzxohfbAJzmT9bAU3RsWxJ8mTvrAZFqnVKbpJySkSorEJiccFuYbisbdaPVyMNdRMHc7An77exv749e3F",
  "key14": "2cmsJpEQ3eAw1MgVpepCZ83m3rFQZwytzZPV3A4AowMUeVfJgFgNoBiTQhoifUmi6gBnyPcT1dQnn5YBMyG2PSxc",
  "key15": "CKj4XLCocVzaxggsB32UUMfskRxQxK3NXato8fEnGrf7f46RRgeMTkpPBJipndUpMwy9AekQKsXXMRHQ9BUrhNE",
  "key16": "xDFDMAzz5uovdWWcayizKZ6FW7Ar2Nffh8Cg25fKSuCxU5DKkrijCT5a5fSs2Cft6vhMYCmsfg6GaDBif3XRVV6",
  "key17": "CRyEQxhKMNbfBjjrSnrYbDsyX5Va6kot5177tMX3arYUKMtWfz96MjY2SFQ6eiWgqkhdnZ2rdXxAUrjbRSAT1M4",
  "key18": "37UXEbWbjgmMWmQDCqkVXzP8sNVb6QFkxW3Qc2batuxpMpCbMnoigJHEp1naJDJ8mGBS6VEKzovwthk8W5g6GVBW",
  "key19": "2JTx2iwGGuECWYhQFkEzou9PwEF7ZEkzqUt8Ez7Vt7kaJY33hJYeWi5euTrFfm1GWNz2iruSAnWezzZGGhFPtgMi",
  "key20": "2Gr7qR1WGx9uiqqooenjtqtY3Yi11AqpQZTKHPnP8y8QBXWiMhuKFn6GhVquuT2xXTriZZJqxzLHyaepsNaroYMk",
  "key21": "48jFAHKczdV1E23Ge19Kg7LmFCFzdsVmAbUJVX5Gcvq5RQxhoP1CPiZ9qmZKtRCmderws8un1ZfEPjFHaPyeEgk4",
  "key22": "4uwx54MjwDEb9kAHYUdq1hUZXv43UgVgYQHewrej1WdHJVFrRDhMVK9cmBxZYQ8E1J3GTr2WR5tCkJDGPZrre1kB",
  "key23": "4QUYNZw9mEPxLuezQXrvN2A28qZ49BeQgDrDDvRsEhb3cafBSkeY2EAU6vouvyJ35t6D2ACTVYQfsGEZPvjft2ox",
  "key24": "VaT9UCMpvRfKSMcuAFm4KBPMGVZTnohXUzEpnfhksN8MUY58NZFLkL35c6F25je1is3irsdJWaY92HEbVHaN2VL",
  "key25": "3srgTL6sEufCnpBKcX1VFf9FxAFW68hEUDEpcpjwaYP6FEyhFtEY9uXsFsA8dfnSjCFU6NXSGbRWApNoS9ANNe8u",
  "key26": "YuUQEWqKXGfSXr6CCTaihEjtVn8PCwHsaq15Gr3AzKSX3WZGhEocrWsj88SoHjynGjJUAk9vvo15jVKNXniVagG",
  "key27": "ct2bkBiW8bdLh9DqHxqtoiBz7RK4cPjjdotHKrQacgKB3yUoh5dxmLmJnYkyKgsRSVfb1xMjVU1X7Ed1hWDVaQG",
  "key28": "3771WkHRgAdvxVjb8Ts4ph83C9g2cMX2JvkkG3Ut7RQRUtkrLUMaNtoyywnaN8d2MdY3S7FSMDMKKwppz4AHgR2w",
  "key29": "4xD6yXvejeuuNqHxuGNHWQiwGYLUm985AbBeVpmph8iwUYi2iizjZyiKQMGaSCPgVXyphwLKgNKFsvKLMLoffhq"
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
