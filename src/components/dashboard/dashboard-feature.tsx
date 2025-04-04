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
    "67bEVrQHzBx2GXCCxrUZaa5F2YxNhEN7ZJdmAoTrNWjquzwZLZRR8uJDp9FzaauYTc63J2EBvNKMhaVViFP7gupz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FF66qNiKGPhkSz3FPbgbrLSjN3fSdKMbFWegVLCjDrzFPvWZFYTToYETcGEv8wKt8wZnRTPMPvW1WNcY5TJ4tcS",
  "key1": "56YFY8tHpQXRZmFDPMYKv2EmBDAPii2kdWoxu9SY8RZDaaxXEkKVgxbGPHrtGcPGL9K3H9QU4NCfcWxK7KvWFjSU",
  "key2": "29We4cYbexSNyca2ZFvr47ADWSCFqHwXkFuxBrvNWHBBfuTGm72km7EKQPP6UryNqwEuL77nPL452aqJUaYkUK7N",
  "key3": "qU1k1AEKvSNgC49r2qmSvjCqu3VZxCcsbXxM2xApPTn2X1CMSYVXufRszNv8FFEjCXJhpW4tvzeykuPdF4mUQ8q",
  "key4": "4VNoRCDf788uebRHH4WfMPx4FZw53e2dwhJcbUtVv4Pa9ehfKUmoiGojj7Ce9KDXyD9WMKzZiZMP6TL3wHQg4dsZ",
  "key5": "5HZdpty5i5qqLTxHXRcCn2HA2Kedi1XdLSr52U2EUBvNr1m15bErMrhpV6dMUSkE8TA1BbKttZkh5LMGS9d7fzwp",
  "key6": "5y8NNeYv5QmjZkfSWSkdgK3aVc9Wtp2bPvC7Sx2Y8v6frr5wVDYtPbd7vAxRhYxg6kdnqG5JpWGPKid2LRcHZBFn",
  "key7": "3e29terQJs4bSK5DttWqVmDz3e235A9F58a8Pd44zHPtLvqGLJNBnifkCHLH3YXcMnUYQXDJKHLtiNxkpb5HEkp9",
  "key8": "4qu3WUPj5HpVUZxzC1FgnQYesU9WcNVRtftALuyoBR9misxYykPXpiCdaqrex5iawQKwnjF2K1G5gKEccJP9k23b",
  "key9": "5LVBSvbEVmLDsvT5B8Pwq1RGS7MySCYemNH5W9575rTtE3xm6xuNMtLVoH9w9rjBkxcBN3N7eDqi7XwQSrD3wmPU",
  "key10": "51rWbT6BHuvCDcWfQQ4afu12ujjDtY6RyCnzvn5L1MkUgMn6aHCYeShD46U2thV7oC7DW244WJiYzpcKczZ2n6Sy",
  "key11": "Ro1Uh9LCUZnpi9Cq57MwJnXevhKMZZYJhb2REzcwfydrt8TZjUvjjigpQcaHAqZ9XdaX7YZjobMseT5f77WRPgd",
  "key12": "SBvuBNErAAX4dSfnxcLrCTqYZigmmZB3MmU9yPnodmPCYmUqirt43G1aYPWjf3fJxX2HLBAwjKKvza84hyiPUuL",
  "key13": "2PZTVKkyB33cn8ZCdjsxXnYTgVdN1URrZJa9AWdmBxxwGJbQY3EW5zrfuhJGuBTU9Ct2HKeJKeRtgiST9jw5XLt7",
  "key14": "4k32Pd9PSwHGFfitxcmYVX2cvCGvjfKuT4FvXww9QBDc2rRXbDfVr97KtDhNzgYmVswuEhqnsEpbboN4rwsdBCaR",
  "key15": "3KN7HwiENYX1AenvVree5qDzyATzwECddTdzf4cXcV2b7cEgyAruvNRGXucrV77aSyUNrPKNxhjfPajW2ZELds7e",
  "key16": "5mgK8TPe6XcR4KC1oVkyReYZj1K9RiJjfZJ2osqC4wJvdq11xUWk6zqXBon68RSLH8JKHonf5xeyZxvatznWmidz",
  "key17": "42fSEZ6GXxbf75nxKgD1rsx9oQWSmqJJu4hAZG28FKgyxiL7WNR6aL7tnWPme4uE5DVyDe21ThsD4BZvr3rejeKm",
  "key18": "4dj9Fz5oqDwDPhrCvKXzLo1LX2n33HYdaPBSZEqPy9n3EVtdt2AX5gSBhCsfQhuWBz546fhPwvUguocHDwd9JoJR",
  "key19": "3xfbvu3E6z3m7e3wcakr4pnKm4z3QtyGmKswTz3vpNXCV1hRXtq5Ly3JNQirJkNTitkEkpVNeiiAagD8Tr9jjUfh",
  "key20": "vcMedG6Tn2iobPZXfRaVXQKh4ZRcnBv8AqihxF9jYiyC38WSBwmtspqniifxCsLrnKdmHBzifxuH4Ku2REDoqDW",
  "key21": "rLB4yVhRpoB39wGJbx6GcMboWytdXWbaHzS8V9uVUHUMXYWRfPLrSqY2qNDG6Jo6Lhw29tsmWfQy2eKks4ECPPd",
  "key22": "64CxjjgsQTxFZm9xBmGZQZFYYCrrpAC51RJEYApjZhnc3BVrJZW4okTJWqF2Rk25F16AcYjxFAopvebskGSm5xnL",
  "key23": "YxF3a51PWZxR7qgEE92drVtXWdN5zd9SXhTGqtmZCzJcvYzVULd3n2YFT7tnLtF3eAQuiSLN3vVBNEr6P3RH2Qo",
  "key24": "43rrS27dHyzNytXbbC6chS5kLXojvveURrfHufe5DWQNc7jF92Xg1syF4GC6c2UBgU8vYqXuiBoK2cag9UUau4rH",
  "key25": "2NPeWCK5GJjFLS9iKkGnTxBfecPZTMm86gY9ikCG35psMAMfvxH3iKtk9F5r1cPkmM2GBxzD7VWnfjGbBttvEVwK",
  "key26": "2SBCZtg5dYJ1HHPwCG1FdMz4AtN41UTPQru9DyXCDgBBWs2wTXDVXmpWj4NActUhFu9ZK8hdSeN55v5qio9GW5qE",
  "key27": "2P2JyUQhttafHiZ1YYmCcxxWGKAgCyvNTx1cJd4m5K5G3aj7gWrd9exu8r6BhLsgtv9YNQQp3KKjyQVhA5gPz7Yk",
  "key28": "5ZJk1WkHro9sr2FFyNYRKYZQzey5aHtptTsfcFpeTavVmGyfjjTJK9BVwEH4BVjpLNzrmPBrDuVot7xVms41Qfsr",
  "key29": "4o1CGTbnwkZgv8eMrsb3aH6Rr5yEPioVAx2Xd6vq4iCTpxwjkGkiDAjfsTwAwKbpArY3pvVR3Zd3pLiWnmp12XkF",
  "key30": "34UKx7J5SLeoSoPREXYtBQrtPBQ33KA4PSUo3sLZJCwGqCxLqAYRULybVW7yvKg9iQaebGKJgYxavxZFV1gJjfT4",
  "key31": "2EJNBnwL9AzW4nEyMD6YyHmzuvmgDEGJeNe2nb96fXbhX559Em72gBtYZVr9U4HWwhHmKFuWY7oW1wrYxFrkyXAx",
  "key32": "ku7w58NkW2uZ8CNkC3zhjfBZ42UED8FgdH9XMHpKuffTksj9csNUqtmBrEWAvkh8Z9q2Y7iWRStAm432RPKLGuq",
  "key33": "61SGpm3nWc2PS3vbZcN59evLRQSLXW18GVN56pvPWWm2gDaxwi3qcJ9EPTZXboqULdJrP11xWtqFEMgp1tpbsmZy",
  "key34": "3nZc9fHEn9te5e3pdY46hdEWwrJJG4gsVL5yZD3qxLcA9zT5woWCHsxX81hRfgcQWUpgEBXqNwrm1Htyrx7fX8Wk",
  "key35": "4ddyw7Lv7MJVVRHccYJgh2LjW3i8oFq2GaJFRiVZYQT3vKba7pgwLKzgLTnRzp69XrNhkEWyia4yGdBjwQvpB3Mf",
  "key36": "39PywaazzZ4wU945kWEtGBvGepgrtFpzkHcFbHV1EHux36nrdz2aVnNQ9jrFA8F3VAecTMnj3N6CX3W42uJSbzr7",
  "key37": "7UXpnbxuHnvg5ZUqiVgf7JhrQuz7PDDqDKjBdCRv7fQtB4zqYtF39q2HDydXX1vvDWEt84GgSFSz8KmzXj8iyjY",
  "key38": "vWCXxeW3uS6dimJCb9hoogaLPRwbsX9k7MQcRHz93eoykK4CvcUKE4Qi7nhCqJcSGby2D31duWNdC5by5AB8CCz"
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
