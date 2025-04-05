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
    "5szc1H3ZjtYW3QSUFAcjBmi5fwQ7kuuS5zTrPq2GHJE4fLbL9BhY8tJKeGKwDaow6R23s9mXmqgtPPpPe7v7XWA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZHeG7VBRPsMiUrKPVzsZ7NDBDRgP6HUWcGLv9j38LXrbqh7Zayh4enaXqc1r9onDLY9tdeZWRd4AYrmBB7cK9Dk",
  "key1": "3sThKgQnJcYGFo6niEjUmhWrVYXu1pbWsqFURGJpsD4XpsYzibqJQUej7HH9X9LCSzJThacuy6ch4eGDQ5KizVwR",
  "key2": "4xmvNpEwqEGXyyMRoXhKe8fyBbex75YEMn4NvXxB67KiVLoaTA6gNWbY955rdker7phoA2i17y2ZNYfueuEJv5Vv",
  "key3": "3th4VYNBioHZRAQuvmEGWsGS5XhBGkW5A6q6UTEGzMV9eFpbs3KezjNNRkGngWAmeFTEaUy18KT3KJWYuaQ3eMGg",
  "key4": "3ApfKuHNoRw8csgspyqUHbZxtPSJbyTdAjzde9M8SRruqRFKNFMUYnsSuZdCZBk7d6opUrzQ14wGo3Y7ai73hRa4",
  "key5": "n5NYaabmcqjkU8bENa3vY55NKhP1Ba4asws2h6ezwKK6sVzm1x7oCr6KxBWtk7QiBfrj7zbthQSAarw6ehPXgDM",
  "key6": "5eKhWNZUCtGgrxXckSSwnFpY6wPBEiuoCWrQa2wiYz1tnkXZm4ZrGujZWbe3NXjdDQUmZob387WWvXf1SikzAJV",
  "key7": "5Cje5vE3Ky4ydgwN1TcaBgTmXh6bb6tfUJHnw35wGH7ePZsd3rhUmkm8k8Vty1Pqs1ETPxHEz729qv25cKFSSTJX",
  "key8": "3Kp14FeAF2b8APBT5dEVmpxrqQLMpwv4eYLy9YRDiEQEEEKFWBSMusvm6cdDDyM1pMsRYrWAHhbk79AFdeNRS7m7",
  "key9": "4FYKh7mmSjdUtfgNLwDLFvoKQuBCmWfZ3fA3pgHRpwi1tHCFME2YKcLypvMaAtWgLHbf3n8wPmt7ifcRpztgqD47",
  "key10": "JfF7PFqFTQN21iSxeDN26TcaXYvT8z24iihQvBMic6CzDKMfFinRNab1uzymU2baeGnUkQTHwaP8Mv7bCzr2CSs",
  "key11": "2KAEJJR6YqDPh4s6GvzCbhzy4e7WzKaE4S2yTtdRTePx62mDKxhEWCtztJRbhKAkEo3SaGhKMxB8tmiZ6mHdsnv2",
  "key12": "5FPUKjTMrJdTFfsZ4pBLhSHqzZJCTJaM9Pe95PSAgGwoXfwqLJoCL4bSnHS5vLKcfMF4yqmPvzebfkpHaV3k79hX",
  "key13": "5m2HXKdcLPdkDMSeXJGH2sczd1p9xaNHFtuivbXLK9qSu2yycypGcACeN5Afxa2Kd8GXTNrYjfcY9CrTBUpBEvfc",
  "key14": "2UXZoBxCRBUA86h4JC2M2JTErAWTyC9MBiaKSSjUg4zYRQTh73mH4Ebj9NETrJpJpqcCQKs7T2PGEtHGHvg4ko9h",
  "key15": "VWWCBsMoFkv9LFuXs8un7PZLAaFu2LSKuiH1Zmfnvbfo7C88DgRFG5rrpL2dV5ZqKPoLMxAp461XJvbXUQuQbXW",
  "key16": "2DX26YEPzL2BfxVBLqibcfNSfed5qpXzBdd7DfYHApyoUnmNFM6g6sovZ2MSaAQVMPkbNB1XPmMqTTDz4qx43wzv",
  "key17": "4uGf9AEUJgw4FZg5yZMhdGzeoLT65Em5RukWUBpf3hPUJ3fMAgjZ99YWgFwYUfLY6YUbnFSp3PYdxSCwWuXp38x9",
  "key18": "4cK7uZwgsWvUUAgFhtRtkNEqcEg16PxHf2rs8gVkpLyRA4V8pTB83YtB6qY3DLBdCpbuJUYDX9wUJs7VAL1iPGef",
  "key19": "2iHJbgANn2711vPfnPvmmMu1i3QJ8iycy4FUDMHs9XnsLaVay59N1BCeCQTFauz86tF2nXB3N7L8wofDgdSUTdyV",
  "key20": "66DtrzWxw9z3nJLbQjMfTmVo8iLsSW32hjFrj8qu7wXDPHCKPe6ieqZnqYk6cmYiNnBtWMJD7DDpL9F9gGrYNccM",
  "key21": "5wuYwicZwu2SyLQLB9wg9rh14QdWqJZ4zfBAf5ePfdEG1brQNsnLxFXhGhtcMVcxfyBgEWi2SX4CZvSVhCRdkXoZ",
  "key22": "3DDGsWmjh99Wwa2Z3wEPJXi3kiByHDgdCiPioUwCFZjdZDYfgJWtE6qWaLFjpGcQkueLeMuEMndLwBhws4oFEfRd",
  "key23": "5yaa9Wb6bs32RH9rz4fETr7FBjNbpkrWmrhGYjAgjymXySFybJ9SwcF6Ai4YKKEnJqNoTwRncAFw6nM8ATsC4tp1",
  "key24": "4Wa45vScxoirjGo9BDeGei88KZPDzQB4yejV4yxDzCc1cgdoGgPnHgFKdNh4swizntLe9MC2BnKupb6NbrHsW67s",
  "key25": "5wDWKUTxsxPMCtzRHjStZb51CqmYj8KfQpUFqyxQkY8HnM2Lx8HjmWQdLAcAqA4p7mTU5BCLQY5pQCskpm4s7Zgk",
  "key26": "2L97PnBsQXrbw3phVut7M77NxBCTa6tx8GBq2MBdtZ4rVyS5QxVnLdWbW2p1zPwTQjyTEz21BajmxNi6i6KuyGDR",
  "key27": "4to69QcAWpsTUVCYeUfWqFJGpiWB8A6F5kMod6tTDH3Jsizh3JsekBw5LzFpADBvLqsujhtpChjbsA6jMv8LeJyE",
  "key28": "64cP99mSi5cp7h3BZkJGr9MgPNBdA2TKAmCxXyKDAsmoXu6zNnQNNkdoBGQbC8cBphhMdSb5bwabsyu7H9tAWym3",
  "key29": "3QNCG13aSAWnJFsgYaijExBqhZLR2dQ1ZLd5cK5kaMCpn5NKAd9zNuvRJPY6jCyUWvQdyxkwDfkmWGkgAvJjrNoA",
  "key30": "3Y1Mv8QteX7fuonLW5Tg41h5XwVMhpF5exgTFSmCve6RW1Yi9FK7xTtchD6jCrWrdcTTSocThc2HdT5ScBorV2KB",
  "key31": "5WUqftJBcTG8v6AZdbJZWrxj7Wgxwh3WBogpLsLvrxGMDiaBMQFTh9E8sY5ztZ4XJ73KdufVfq7ZASjjFyMN5C91",
  "key32": "2AUNnbbETv8SyjjgthxSF2SpooJVDCqs1fa5xqm7r32rUjTUYMcwt2UpX8Gi8d9Fi6Y3sNtTek3ppU2KHb5nepRt",
  "key33": "4bpdtP3vPDjfDXTfLCjK49bHgQ58wUSCUcDUjHQM66rQfSPw6xKDUDkDQVKCqt4adz5kYWG5nffqFkLznfXypf2q",
  "key34": "YPFEygue7nPPDEm645KDuraAxgDSf7cDKA2tjkKJBERLQoH2SisZtQounGM8UGsyPYMxUPisxP6x6SmQWAE2hiP",
  "key35": "3yRDJyWwMVTp78kQEH8FsVMjbUDuiLAgvyumhChAbtDVd63gQPpSAKbWSnQR5sTWUkcJCddkiA6xDo3dF6gWju23"
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
