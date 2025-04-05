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
    "3dtzhJtZLaRgVCCumX4wZUFbjpcJxnwYSisp894FjAFnxQisN7LX1a5vUw2CatkA7kx4DXLN52gRuL3zaCj5c1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44RoTJvjmvBjWKduDEDngi3aDMY57NB9AMK7d9mAYFQ2X8njNy4BMJACGTEFhYkE5vcCqEz5jvi6e4CsJTVRSKTy",
  "key1": "3Hr3UzBYMF1tVN4VP4TSJE82qAyUktqGcqViuqNgSWc87WHpgMhhRwzhtwm6fjgRRJKTGzxwbGpdkFQF5CCmg2o4",
  "key2": "5tE478GKt6Zna5n7UiBZG9ALxp7c4eAGFEUq7coGfLzFnTi4ywLSuaSdaaERNjWGVv81pRbv2mCGmtxivddTxmXX",
  "key3": "3qMfW6Q3uXzFn1hAqUWnsdAfZ71KHAZ4rj8k9pf5Q6AB61ngyncJRkjghF9hTf6oB5GwxthewPtQWijcBKiLmttN",
  "key4": "GFJhLMyj4Bqb6EU9aRWLyAE23oh9rkcoGAfFSuAgmWiZMdN2NLnMXxA8rquDeS1Enwdv8wfutY4TjjsQdeVH5Nm",
  "key5": "3xTDVWGWMba8VPaqhKFfL28KEvFSQQ6PkhC7vk55D5YK5LTtDjmfgDi6fXUc3Qe7AookCryPnZnFJen33QokRtnX",
  "key6": "4cqvcGwx2zW792Rxd37A9C59ptVm8c8MG3mshbugXqN7A7v5yXKi75vqUSUpKqqkuzrXwbkKY28XekbENA6JcUd6",
  "key7": "5VzNDGYzXBn4Z2RjPX5RaxeAic3aTbg2Y85wjct37W1GvoR6dcDRFN9xpV7Mz9coidnzTEH263KrWpaD7ZDRKfCm",
  "key8": "4zYiH4jVuphxVavmXoaC7pRBmtPnX5GeSGQozFHVcropN3y4Gs7at65Vj5jFVXFe8sdE9dBQcs5tYiFzY3GZEioM",
  "key9": "5jcydR47SvFj6s9fnVM3rUJZzu3dEVxdvMwVWLRHiYNkxHLjUz4UUiY4mHr4JyWCeAN6qRCHweABh3rCJWDTXHeJ",
  "key10": "F5XNo8F1WMVM6dnEoGQyYAMKqVH9QjxsDKXvf1hcdpnVB4a5x445AmgQLLqtCAQxfWT9b3W6cVdURuZGUtmEHQ7",
  "key11": "2g1PQ54ALGjdfEqjKCf4A39cwFaxSSbddNxhHbKbc63c25rW7oWFKDjRpL1GSZJYU4G59fsNd3zF9XTUC9xR6sGd",
  "key12": "UBmjpob8RABgDV11KkxhK47Muc6xYX7VGXn1h4qvbLJMWbo9YCP2rLGQehmGy3ThtyhZ6RWbEcpGMd7migWMA5j",
  "key13": "KoUzKk3RPqcixCkQG2Q3aGqAGbRpg5o7bodyieuwRtroUbqdMzPwTQcAY2dR7bPq6WPqRfYcBMFKYL7aAQiWgjg",
  "key14": "Vtexn4GvBigZaDD38XLfP9K7Uk3F4xBXgJJensxo5G1nRqxLXYaxRA9LkMLqp1pgwmGcpssG1dihdv4GZdX4ccc",
  "key15": "2jzHdATWwzLDZfPgHnhFCSWk9MoWskrXiF5njdzU79ZsCb8WRL676mgqfo35JepgBk4tjo7pkgHvY1LcVXXaxEmJ",
  "key16": "Eki2QaPdg5gJNR1MRqLKHDKyKmzqFnS6LdwNxoApqgtMy1A4CYriBrqgNRnxdUwBUtvvFHpZcbiVX9ucLobgWXF",
  "key17": "2t8sRQiLmB19RHLTfHJkbLXjis2d3Ab3zNnjBiyG47Kge9MALn6g6odvipQxRSDkJFPXD4i2r6fdMTv6ASGSY8aw",
  "key18": "5aiegCY1BzsGwMZz9WhrUbmQhuZgqUFdtRvVEJDP7x1ovfZS8353HMHj6RsTv1yEdjMsiKZC7ciamJarijT1qFTd",
  "key19": "39CDoa7UakLwZkkJVLfyA93B8zuY7toiwRdQjJzWK8i8w3y2H6fLfsiT9D32SDJSVG6QuLFmoeJUvahmd5BiBhtx",
  "key20": "5UovXnsPyp8ggc3QVuSeDJeVavk1BbQiq41vbMJM6JmKtE8HjcSRnf867TcfPmm2ccisMh6F98Bew5kiDKybiwkn",
  "key21": "p7KgS7ya9SBXLgCo5nWTuv9MfWpjx7eF2h65ZZKsUtwJbLpz7z6kZkmxMNmui3YBokfGQSRrSn5w4Zc4Ver8uTA",
  "key22": "291nTWDHcDResBvnRPk6NgjJbnNTYtgFXRqsK6PJDDPZhSHhMoRHyEkNSmKGAJ2NDZrE1EK6dMBjPENbZfA8uvQT",
  "key23": "vyZVb7tnUZ3LuRaShd5GMeKFMv56Xo2VpkUehk67VJwHUnkUsANQpCXfyZkfuQahjxLNgaSwgihJ7J5RrAPG3EU",
  "key24": "8HHa97tQDj2xMAbUZn1XtwCDhKnYkmjJV7FUMBy7TdFkFZyRhPPbZTKEXmbZUb49HBQRCdJnPKdoCr7gCyUZar3",
  "key25": "5oc4dwJNqesaUVoDDEBGyh82qMCyWEcN6sMCj5dWu8M3uES8rnyKy1sKvCG8Lhb77JFd9i5rKt3oxH17hJybNFHg",
  "key26": "2KhPdXrWeyUqPDPy9ZRa9dAJS4yCJVqM7qAGTgZhUUPhQqBfT4taHz6NFPXS3Jp57bxGm5ZBbw7N37UjppqmnT5U",
  "key27": "AXmgjioM9HtZmhsEH8t9Aqm9BrCiP5w4Kqmegruzu2pB3LeWckM6BV6KBpRcaneR4yYviZe57F5YqMsjVgZnxxE",
  "key28": "hEyb7GZgCKgiprxmh3LPbm47r7be1kUvq4NYSRhRN9Xu8qJWyBbpFaxkzM8Fr92zyyhMBbGib3odMzZWe5cNqLG",
  "key29": "AKNjwybgR9eEuka6Egh1eYSkngN8YD6QwWyKTgKsokNjfCYqiAaRorJBhpiqV15XzJEeUuruT2YAyFwoxtiaagu",
  "key30": "4pqXCHeUtA4FGaNtckqNeiWnfaRULj4ZaPPFaq8CMSgtKb4nwNBFMYbsdAxC97xEAGBXA3XhZsj4w3kYPBCux9FR",
  "key31": "5dWst2czgBBq5ttwXkmrakFeiNiM67LrwQPk7eSJiFgkubEg1BLWZ3Ze9zcpz314VoWDLH5FsCC2wWcsMhA7q15J",
  "key32": "2cZigdHzikHEnRXKyg7qZaAym2tctkF2JY6fxVW8RNL68qm8nwjhmkMSbLtVBtfbPdE7Rmb5ku1hiLz9uLZKkw1r",
  "key33": "49iW3pc9HHPwDYTLtyePRkYuz9ACisrPQzqxvP38qgAk5gKn7hPuo6ZDtgPuYrNuwgps7Sbniun1C7QzV25JPnHv",
  "key34": "6CAhwvdZEv1shcr9BEw4MzHzt9MPL2vEfMZrMH7q9WTMrmmNgYpuLMZYs3es5C2bPLL1vWY18zJUv98tc8jesEZ",
  "key35": "2kU5B6grHrRYQrZYoM2ygF6y9hPPCjLZWcEPuFoDvU4GTvNCn8ybbTPC4ZXuyusVYVEEduniidLHEtxmZ2hUqdnk",
  "key36": "arpC4GYsLJZrdAWjCQNdBYpfokpWA2ftEG4V9zEVKQjaonuV6YUJh1v3GCKnCeucdATA9zSZABQ8c2HpwkA4Uqf",
  "key37": "1594M8pveBcQYGKc5BKkm84ixeZZ1SD7zZuwfhcPoa6Dguw92PCvQCBVK5BZgdmGdrLmWEhn8CcDnHBnvYa3Psy",
  "key38": "5kuoc7quh8MjBwBzxAyrYnXauVHCBTFBxA3cP6HVDKXhUuyqYcwkXoks99cDkgYVxqghpUqcybxd9sPn9eHEvVDQ",
  "key39": "2YWQLPQPvZPSgGkFwpyZGftZ5kAHfRtpUNsAHBf93uMWvr93J8BMfcJQST63bVM4MJyy3DgBLRtakzRVzE4SqcSp",
  "key40": "CW7XtbJREJJLinQqmbviicaRs98zGvZEhZUV5EbFXeGw2wBKQjPptdxEiUA54Q2xEHzik1wvXR2d9ERT6ZVFrWX",
  "key41": "2RGiUEprPY3efotbrnV349S5vozZdiTXCLvPNiVQSbfxc9zMFxRPCc96SkxtXbMtucBrQecCMXN9PH79uZf7CNa9"
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
