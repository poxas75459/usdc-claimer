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
    "61u2kSJVWM93XziwVmL6KgN4Ws4jqJEcDwTBHdYHCmHokW65966tdk3HLXpBddKRCBKhZx1phLTYQYF6n35s9BH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AV8Kht7otR2KCNSGHiZGwkwyZwc2EUGTMLQzvhmWsh6NKVYh2yzuh3VtWYw8qKBWbehE5aRPFccK18amaTkKNxD",
  "key1": "48AigYRUjPWipWPfn5NcebmDMEr8WRNW62SjWrpRQT7vk2SrCD6YXTTWpSwsqEoN4kWmgCVhi2xLAQMnob2tEpRQ",
  "key2": "2PegYedLbJbP7ToyRVJxkYJ2vc3Mc7qmKhdCMJRk5GoqMHLZ54CP7KnCDtVUEwGeqnmoCo1ZifWYEzM6wZXrnc8N",
  "key3": "2hHUTVd3oqhwSS5Nn3BjzCL3XJayGBN81P2KLEn12dyDgDmEaxG9KRQnTNdKUBw4WwbtVbXGijYwFcyrsg64fjhq",
  "key4": "5mJktY5J33y4pY87tsfr8k6cLJSHFJ1pMMBZm7Rj6Ce5UXZrsjcEwpsSjxhNBKsZP6HDaDd91V3EfmBoTx3mbHTZ",
  "key5": "2b7vuJMTci89uwqCXPg3h8JenAuYVWLf9w4ZpHBSTNfv4i3fY7jC7femkv43tuT5iKVkbu4M7EyCWojBxRNhJnWT",
  "key6": "2hG1szKqpfCC4z9EPTSn7vY6oB4me7KReM22RV2XpQ9T6z4zGJK1zGHTBpb5R7BzANkDMerLjadChH7f1GTdQeQW",
  "key7": "3j9s2jcjRtV24QE6Lr92zBtKQ71H3w3EV4iwQSuHQBHzqquJptGQcvgHLj3uS548t5Ln8C5uxCNYQrcAazqDqqq",
  "key8": "2X6XtaqS1VPxTKcJaU2n24erEMQ1PeFooa8qruucuozTR7crQiVo9Q7BBVDoJ8fDUsmQ5eE7Yfcbnf1ekASZhbCF",
  "key9": "3agdvppZmYJ1aG8yRiWvyXZvWSQ7cN2L9kpHD4D18ir3viCoecFmzixxMbhQSeugYjP51DQd9MVYHnV5qE8wQWrV",
  "key10": "5gjzzZ25V9k3hjkJvKPZ6S7tzpFnwvTF4cwYJy1Yd9Sc9APu3EPJRDKPd312N5KKkvVSDPWdmEFWrbMPsKYqt6Di",
  "key11": "5VcU2Qo6wK7rpcYE92HnABzFwEirLYvv4F9d5zptDpurSuvXuY6qwXMd67tCnbJknt5ndcrjxbDL5FsvRpiQZjjW",
  "key12": "3Tg8wnpXJoT69GJvRrb7YZ1MWuBUkFKhtdT3mAgDeEciYEXikUB1duGUVUVXcJyhpnS5NzGZNSYDeAc121RiQoAj",
  "key13": "2Ny8qE9CpEuQv2qTqJuc1qaqDwJ6HQaLxweveVfMnkr3g9sUqzkL2F2vBreqHyLiQmatDth4pnrcPzefaatsCzQD",
  "key14": "n6Pge29EAhkv6rejkwzK39175uD21rHq1Ewv2mdPMZYPaFmJCrfJUx1guDcov6h2dtzcE1TjSsG1mkstzur5BvE",
  "key15": "2Fxz8rXxc6KKrFoCCZiCk5zNGCki9sD18GYrCfNmDm8xotgDxbAjNSgaXDVXQxPPvCuJ2Xep9dTfktNv8YEYeni9",
  "key16": "22ep5SssE3Sp718keBjnLzPaJJ1PFMD2k4fLndnSSAGqJtoRRRduTDM6B5dW9pYuj7JXc4hGWS5R1uxf6ByuY2Sf",
  "key17": "4ge8A2AnaDucXBcok5zUbJTScHii2wQFNYcYsrKQfbA4qVrMAHYcUXdnjm4YN7aVZtHF8RjtYzxYjqYyJwB2Pvkz",
  "key18": "476LLNS4U8Nt2b3pvbARkNqy2kbxH7VQA266e1SPpGWFBbHv1Ts6ShM54tZqX7aj6EkdLYb45m97gRLqXMGZgWNc",
  "key19": "4f7HDcLDudP1GKmgUQC4Svm29Zhe4RWZe8aAVNd7eib5kccd1Mhq5Lv9n5Fm6H6hW6e6idbH9F1HH98XuXHAFna3",
  "key20": "27UY6MbiPCfYTgroE2KsJ3LUW24F5cFDPdk97hYYopVsAN1t3rFfFzN3bykqzKFA6A77pQZ9ZDHa2QhUresWio9F",
  "key21": "52RTqHJwtvHwkUTLh6Uf7N5PFvazmWMViSqJUsfhQZ8m3S5BwRMAyyqXGWMFan7G3FduwQXh3b5bGHAnVhf2iqgt",
  "key22": "KV2LuirjGPP17zt8qkg5eCCUPy1tCPw7RfgYFVV2taxFFqMrdxT38TBezebLdUcZpeQaY5Uv7zKXJuDHgiv4g1r",
  "key23": "cYvgC6Gn9msuSfiEu4Sif5C2gAofcRZ8ifdLWzrNuwp9DXCv4dPbkzQd3zeVM9g2eZksX6TzBnwknr3W43NHDmA",
  "key24": "3NEwtccaxvh1mpr44NvgsneXbXtcVUHqz9szEmEPzqtq4vuwK2w2qZ3aKgWZFcaGPzGnVQiKwd9KPfpk5uRTj6Rr",
  "key25": "GbkodKaBmk8wfBchqvpRwb28rmVNmw33kHNXZQfQ6WrRmqqEWDm7nuzuJXWVsViTTJMm4e2KzmJgGpxWBxAKrru",
  "key26": "YyNtwerAQ9KFkV2MeF1UmbEZ7fAjxqdgPgsDjjZVDwDQqro9CqdA96ua2iyV5hLBXNLKzS7ysPwBai2PwEukQwe",
  "key27": "3ukUJ4ThKRhRPDRdtfkzbaKuoEZ6WEc6mfFhAfcRsixZhYz8YDBDsdGujqLLep6ZgLmULUeVZ2FX3KmS6dKXnnCt"
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
