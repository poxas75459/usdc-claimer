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
    "bxDTQZ66AtGzU2hTvwVks9NihBt6T37wfYWRpqcaZBhJhYh9zwF5ZB9FmKBZSUwAFEXLqcjzyDcS6KVbTP8GqEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SXkRk19gHHwMUFJBpiNo7TjsgMSoEZfNvfvdexF4hMega3YWWq98e4cSsymFiKdJ1Ucs7x7jYEQsAL4YB5X4HqD",
  "key1": "xwt3qp7Cho6DtNxnHR8NZg5ifEHFM5sPRvEkbq3DMHKkCWdYq9eeoZ7oQFjgYe9NSfpkFkutzdV5J47sggjrCZy",
  "key2": "25WMxqxAF76z9sS57fBHv89DU8Q6RLdJsi6XmbTWNDG5Hekrt5cfsfRtqXU5z7zdCqjEUnfdZyrnaAAiqF69wssH",
  "key3": "SqXCMbDwGB3h5oVrx1QYZGNZHbqQ4FMds7yQs9wrcUXE4WzyUrMDhv7kxuNc6kPdn6cC5Jf4kfXG82PBtFKm1NN",
  "key4": "M3VRbXdiiLmbCV5ks67bozcYjcDNSLUTbmC5cVNAEV5ggyKzkmwk4KnDqsTMSba1DKDUTpbJqireoJqX3NDDDvF",
  "key5": "5PnKVER96gJ9fhrFC9q51tdy1jw6mB5Rqj8uQ4rH6mqcCi7CV9sLZsAEkHnvMnwJXU85hjEx2moVsf3vqEra69mE",
  "key6": "5ovZeVJCHGhTYjZmne34kwsgzyAWpdPzW4NVKSEthdnVymvHsZjcubG2RjMyh7BsyXkFvtJrXbXkqkdETAWa3wk1",
  "key7": "3M5BkUSRGfz2XyxNMQfBvuWhPXMUY2PMHGrxYKzfxAhZynsfh2SonBGoowEp8B7Qr5Mxjqct8buG2FQ6AUXA8H86",
  "key8": "65NDWiRcxfo8QvmgdYJhXQcdGpgxUMvu8JdHFYtq2BvHcjNNqbUPQjW1wwXFAzWzXBi8GmcY5M2FCEMmm3trMW2H",
  "key9": "FPso6pZfomwDBrHyeDnH29mnvXHmjahuFYXBHP2p3rtN5ntSE3VjatpZVKCARSt46vS3vXqtFnXkM7YZP6pyjW7",
  "key10": "gkZhKigS65RsRTCWeRXjHiGdMVUMK1UmYEfshejNPypKX5B14dqDCsgfJDZ9xzGrMdP61JEtBs11Vuh61CqFKDL",
  "key11": "5hyLUr4bYCAPFtsHhkuKRS4TfrPTeunzCe43aZ1Yf2BVsBAPfzRt1AtAwHmHyWY1VfU1exyhi8S8rZuBKD6mQ2fv",
  "key12": "2vywbBNBnw6avcqf8sYNbA3sFaxotv1L8iZCyKj91aRg57poiHFGikek27tauy2QaQ5fVC3BBE4BZUNu5Rb1e83i",
  "key13": "2ZygmyJ88cJqKUYKZSGLnmKa5RcdZJtDJyKicsNERaXfjwp84XPWUzuBqq2qQuiyiKmTz6qjVAL1PGTgmoNGGgnZ",
  "key14": "5bV6t69Rvc94fGiw2FmuFf83dGBQdWy1ZscfRmjkekmDyBKF2t1qdnUSxXcrvbmpu9Pg8v6DjZVhi3Z3pomqZ5EG",
  "key15": "4TKhmFxnu54MqkTYgZqCZVLXoQa9Gj8xfK6jURMdFjvrwFuCYdYAcHAhQctYgRN5fUTp5D5441dnepYjoEuq7BC",
  "key16": "hsfGVLznSDdYX27JyrwnzLLLweA8ZKzUXdzbxEgLuEJWV6rMoWJ5ADeQEETVc8FWoShGYZcQnoYGeft884S5h3j",
  "key17": "4U6ShL3HvmJjW5FZVuJxKKhktfsdXqxiwDrwna4GfGRomSnhBh8AozNAfaY2ncL9bWDop3eCRVhZvAWyPHDHPsZm",
  "key18": "5QQFHf5TMppkPKPUC6jKtWCosqzVMhtShTymHsmcAm6n9wz3B6ZebaXpf6n5DFp1VydDV4DAcN3TqywB1H5t3FDe",
  "key19": "pSLjnJsfpEqhtg7AAJBDtK5VqWig3XbejyeepgWLWuymHYAwgJz6ZGYR6ETq8gLLBiqZKkSXyQi5RMUCqvNP3i1",
  "key20": "2LPFbUkpfxkZRX4ziy4JFtHH7iR9JdsmidDdtpcxKwWHdywKPeCVTBaQYcxFu9ngyxrXHMDSYNzhrwq8wp9nUB62",
  "key21": "NkT2ah3WVSgug1FJGPLG1xyyCzCYSXgzwTakLQ1fpdMRRX2FUCdQt71Md2T9V6FASYngoL3GHqLMcLp13EeCUFG",
  "key22": "AJSUqoF1kS7JAy7BzrwiQicmrf4DMnPyUmEGWsP1M29bcATMTRMtsoKkfizupgHUygNE8nxe35w1chct9HEBmmC",
  "key23": "4WawpsmxvgKLnZXqKxgmz5ML9UxPdooWG8cJ2GnLAPgNm5KnusJXvnvBNEiLWMomTdhZgU1nEzacGaEtZPPjZZU1",
  "key24": "5nBLLsyckpkj6guGteLtKQjgDMMWVhH3JuTLXdTmtqS5YkBZ3YH9NSRqzXDkon27D1NR7gyKB8eBRR8k369v2LSZ",
  "key25": "2pA7uuv6BnE3sSSRBxfc2jsmiWZjFk4FGZEbBx5TdtFCfzbhbZ36AFHeThjZRGx5oorM2fijKYAXfJeiEqmtdEYf",
  "key26": "3daqB9rmy68ToPgHss6KNjrQZnq3Jv4stNtU9UgF1Hey1vazic24N6UVj7w4qbKenLW9UGX7fnD6ZjGM7RVAHx6U",
  "key27": "gDLGKdENFUrNCqBpkfUd8914ufn7Ya5yPQ62YiENqHhN1wUw7X3dqmL8t6Y4Bif7x2i3uBd46BMiMCTZDpSmUB1",
  "key28": "bvmQoujhyGeYYuiGiYurvDjXikVotNKvb4VEdxLRRBDnDuwUJzJHHgx7Ey37SpdPbksBW5cndE3uLRQKyEG6UVY",
  "key29": "yUsYzkodD5uR9BoPkzjG22jJ6bPCCpcKUwyvbzf3nGZFsxgUYoJJU4KkgjkWNyTkKbuCCZvVVHRetofPciHc5vZ",
  "key30": "57645PdgSNHPHZLozoM5EzFeFZyHaf11ULmzfkqbY1xnVXyJsEtojZo7EhYRoPuusv2K3poZKvQkicA2JnF5yVwx",
  "key31": "2dMefFX1Fh6ynQKREPwy7U15DndKLHjWxxZReGkym2Xhebug3oVb26qAbWj364ZT7VzdVaYXEh6VaJ5yFBYn58oU",
  "key32": "xGxLVfjYv81qdKg9Rof9rNqeKZsHhb53t3N4yxRFvpdEsbQUFYDtrBWPXZr57qHTfexPKq1YAWWKCggyicXs991",
  "key33": "585q2qrrzdCVEN2nRo32f5x1BsnVFG4dzdhsRHtgYnXj2A1LohmxXVoYBmA8328JCx7NKtyN85AirBDsRk8mdyeM",
  "key34": "2uRASFQv7KfM8uiCGxY5YQmGiMxcLR1qwWU9BUAufBD6KTt9ey3VUrtMrjiXKNkTFGKg5CAVXEPamMUbBp8dGhBm",
  "key35": "3jFSq4bDNKg3sGiB5ZY3yL3sSjSw8kVFHoNDZVKG4nJion389ejeQEsgcxcVtGFvArKRoichcDbJj5bCpP9NQzoC",
  "key36": "5bZuKwCNbEXrZo1mR48jAqte8JDPKEjiXNPW2cGePvEsB8CTCVcPHyrpuXk48HDyD9DLwHFSjTzzVUoDBYLDe6K9",
  "key37": "2obnd7HikYYRJrv3n932MMo7gwdRHdUgjLCWdRdcn4cpjJ544WjiirYeDkLZSUt4Yr99MP6rKPShsqx1oXmbcLof"
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
