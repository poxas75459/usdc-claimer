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
    "42Tuwd7aEeQAFci4GpjJFAfxutQiEfqgTVBLLhvLL1CrYgpwBZ8z41yt4WiVpgnwQDyz5vm9JAQKcBb4kwqiYt2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Liiq66MUuQfqDRn4HDn5A5nD1kiRcGJY6qbRCoSjQjJDAkE6yU4yovGfMpUuoYvRRqhTpnh8eh8b6mPXFLuT9iE",
  "key1": "2fZVj4gze5xbxiV2epNwq6gfZrpgZjqM7a5wKvdKC9CsowiRPpQTkifmmt4idH3pSC1Eb8kzV2AzYeL5fKwxfShY",
  "key2": "2svnLTN9HjW7TfCxFja1NNZFyVvCv85Uvc4mvDHepx4RyGJqkMJHdZWpDFqjZhTSkTNQw7vsKC7bdVzCusVSvXhh",
  "key3": "2K6qPwxZ57B7qMBFkv2B9FiRDsDXkSHsLfJVvm4wvvUb7qqf6fNiWcfdKq5uKM65Rr5CPp6CcNbevvxL4y3x7cX",
  "key4": "3BuNE4RPpDpZAiqP8b6f68UTJDE15Zwt5eZ6QB4Vzogxrhuz6L6CE5tw2QRheshNWv9rKvnFnEVcBaGG2cjsx8e4",
  "key5": "5EeiXD69zreeam2sKbbJStgDEewotip2K6L9RXa1nHKT34ajgHck3QUwaL8t93ga8S8T6XsUus7uM4u18F6G38GH",
  "key6": "2RdXnnDt1oQiPYXnjc8txFmHaAq5yEwbzDN8FY1sM4hz4NQuRTbaWhuDcrSASCG6EAERvrao5tH26ViwCCUuChqH",
  "key7": "3VkJey89RdMqqXb7QxcDRjvvh49xWKFsuoDq34xZzKHQ9gmvetqofMWR9FasskSVGowD7PYtM4AA4nDMu6u6qFsT",
  "key8": "4Dv8aUBrXTFFTX5bWakUfFCFyzKVp1rzwfJKYwZfZRepS6HqnUcydftT27TZLC8kuovpCeUTHhsJ9FfzW9V43jTw",
  "key9": "3Y26DTfVmxdHdQ7yCDzbrPovqaFPU1pkMpDVKbR5x2quf9ZaaeUd15BgmthUrFX27r7tLAd6qdiaet3ciyfFS2PZ",
  "key10": "5dyMqPgrE9T3UH9GnxLiC3fqSGaK5JRBDLru9dV3AhkjA9V931zAYvXmD5GE84E7Y35DMC7SmUNqTJu7ngAcL58o",
  "key11": "3Y8WpqfSvY6CDyZb4FmtAKEokRxeZEPrjetJnZ9F7hxZtVeJJwkhX2zTSvvVR4sFZsrRoK7Chxy1XqLnR668RNVk",
  "key12": "3FAEXtcH2heCRATfLot5ceYhiKLccF9PuC3AKd7bZAhsXVdFqU43gDhXHcXY7cq7Mgws4iM9bpVo9n4KBivCwdjv",
  "key13": "42HFzhi9f5dJLRpjvqDtBkto2eLEv8WnhxXEasMGrdoJKjUMSeVGRwPt2iYx27hLA2GECBUQbyM1NpCXEUN1Fxan",
  "key14": "3JXgHofSYoR9j6L78fy1WVre9wSxDzzS5rnwhKwA134gqQ1Z9R9AzhvSVGkgXgayNvRvjViCnL2oZJWnHRNQs2ZL",
  "key15": "tTSabXh9d3gCAhB8UVc9u5yZZUsHWwE9wF4z39EvfhKig1QETXZP6W9kTRNH2QM56s15oAAV11YmFHXi38s2Tm4",
  "key16": "3NM85Ntpj7sw1uUXzqTRhJduCPfscsZ6pEnocaFyjMM117ykU8oXrNHg9GLMDMFeiihvB8i32ewaJiFtLwTvA9eT",
  "key17": "rr2ct2AndWG7Z3FoPorRoFdQdscqyikr2yGRffRRahA5Eg5zq2oMVXua27TVxReXxhhiSjsrYe8Yp8GAe6DNaGc",
  "key18": "38AbiKeCsjbwASnznvMcvgWk4dcGKyiomiTukyZwbRQUpD6B64wyaXE6MPVyb8dUcsbVYTkpS3NKNWjJHzbB14n2",
  "key19": "5N4fnPwtAV8nQbSJEEHhXhfdNoRyiDtZSs23KuJj7ywpfK7mJEU3KQq9aB25Ty4dVLAzZVC9s4e2QCYfUnXXYQwu",
  "key20": "5eJbEMpos5i3GiyWF3WkKMrdGK1Rv873fEWixkspMM2UukjfSYgvNfXJJNJT1ecHxVxmSTTYCEvUvUcVckU6RCL5",
  "key21": "4DSVPXTFTnMdYoFgPmZX3VdawPnXaxP7i5eny39HoMpS7N3iD4ovzWF3KU8PEWGdeDPtpUH4WxLtea9BUEyDjwak",
  "key22": "5yCVsCGvuyfBRjvCmTHN7zjijMAcQZWb61rd5sdnanekeRWabrPF5qBtfMuup7unuyLUC3AhEpDGkQ87cXLiBM7b",
  "key23": "2cuwmXnM5YdjaugCFeHM2QGbqMpGPZ2dqHsH4m2RfwTwkmfHo4vQkFCGuY9fXnCRm9bNWp8vXfEWfBVFbrjVbhav",
  "key24": "34Nvnt4DrpSrL57XwYZZTvNK3NhtgGkdnkWq1vgc7hFfFLY9dpGzaqREPzg5MieVU37c7c4j9USbTR6eFjEMvTn5",
  "key25": "5sM9szxySy2oCnb9azXrFTgo3hrRxopsJuVqwTU46fsyctUWn1ySxj9BdiXgcHAycZw6EQvEy1tHVU76tJgk6ieC",
  "key26": "4jFvwhWFJE1ktALFAaVSi7DvnA4SuuAUFmDhbSDwF8tVXgpyvV8xpP9FK7jEgA5RYwM5b5Rv3ok7XNeBkXM1RUGJ",
  "key27": "4vtASsiTKpNj43dvoqcr4cedUtAKxcxJGA93j1mLNQgxuY2b7sVyKDzZFqKV3DDksfCaEc8Uh6EnLcwLj9tEXv88",
  "key28": "bWZcYj3RP1mh8duZukaoqVm7VaaXc7YAUpUEYe1vfb53pwVQaMqnQxfggrMEZRewLvPtu3Nn92wk7U2cVqi2LQh",
  "key29": "3huoYvX5SGRkKJk919Js91DGLDNq6ptXwB24GtBtBCQfMYD5ajR63uzV1qswJLZRkKHaRkue1kJZdhgR7tR4NWXz",
  "key30": "5rt63bkZmPLdmwyPPnMhvP4eY4yNpLzRk6oRPatuSWwQ3jjY2iaNmiDMTw83UBfKeYzaA8BBdPE6Jnhh5vEkNTaF",
  "key31": "4Ps2nxgoGYEeyUrnp2dEyW35tavBpimV4VkdZJdDqXGzrNCxWrD3HEFhkVormTykudXgcwNkh7hagHP5ZMvLkPZh",
  "key32": "3aKdb7Ranao3zLTc8zFauwnV54Afr7Xt8fykBc1DeZCictur7FN1TduL97iqKcrwMH3KNSnqT3Sa8hNJLc9SZyZM",
  "key33": "51bRmkJzxmrozD64xPt2i6U2qu57GtH9MoU7kLqjZfgAEzoNJ5W46cpN68uMt92S8CP1YaVwrRNFzGVnLEAgBp6p",
  "key34": "2Fsi7YrCbGtuPwuDUmto84PdWsA9MiSgbLWjA84keQERnHFW6a5BD6PmBxmCFzGjJWFq3q5cvkC5jqsKa8vM2gni",
  "key35": "4LgHPXZjUFkwsbDX1D1HDT5AEwPrSey4tWfrm7m8EgnnPhYyxYNfkMcxKTsV8xDb3YtjheFESGB7cvxf7DYsoG9y",
  "key36": "3PJw5SUw4mfFae9P9e2Ch7hW6XaXfhHwGdgh8UK5T1tZFY7wwehw5d64miYjTRWhZmxscwif6rU5FCDZ8RwT9ik7",
  "key37": "3xENMTCfRovHZnk6WTFgdqjYLQ9ReKdmQdnAVwvjG44FMz7j8Dz3n28jy4Wx1VXyWiAWxdJxboj68FoVyiFkgExu",
  "key38": "3rw81M4ByiRnbRbrDbkvb2wQEizBnZF9ZptdUhZdk9G3etqRd6zmRQgJyFu8KPLPjWq4A3DNPJ2VDZrgPBgxsRsR",
  "key39": "5YJo9Vv8umVwP5WEdjjQGzB54zVxSUY82XuE5S2jTXxHnWdbftN4JQqog6ZqRSkHWErgkhuJPe1yCLQaAsNj5bYJ",
  "key40": "5ueAy3sXfiGCYJ6cPQ5sbLvvD5pzCoxeyFAREWrdvg6SMdGdnWoDGt1tAQs5qtRLsGiMqbgycGqPFK1Q1qzzQPKh",
  "key41": "FvcvyaMmSpJWNrV7nB5ydJcY4CbKMhZ9zEHgxzonnmL6PW1NP3QvZAM2dhR73AEdw6v7zLYYmWiRDxKEg5Cj9pd",
  "key42": "5NNvznTJfqKbcJwD58eWBFrPAExpzLaZ1yBhM2e74oj5aShYMEAjd1vupEKqW76hLsrcBmpzX42q9AQV8kzfTbA4",
  "key43": "5rMzihRPCUMYQZwRQJXvViddtzPwMrcjANKYYn3o7rAf5ok94xryHo8VDuSCrHNSnTcguvHLfvysDwhpJ1qPX2wk",
  "key44": "3n7M7Zp2CmpaiQrkrV7bDZ5RLUSTCaLbpqkmHmZuk4bVV13Z5a9hTFEbid6LRRxWGFeGrAPSVQz3nff7juYC3n7t",
  "key45": "2dWhvDehLk7XcsCnjw4LJRxTT5YBVH3qbs8LHDmjpTcbTfH8m7v5rpBpsbNipmU2VwtXVX5D958TTZcpwWtH9LR7",
  "key46": "3r87Uz2oimoPUdduozZwwgnvxM1MAb9WcTvmTnw5KXBJpvnbZcuJ4goLFPdQzb8Cs6ipjyczkFkgbASGbVyFyg6b"
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
