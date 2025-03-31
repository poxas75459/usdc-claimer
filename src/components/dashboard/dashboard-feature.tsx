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
    "4EwjFgUvYVEA1juuCxXH1PsQ2qUP4uQTq6MXCSTFScV5QaNbhbqHTkghriLpnCw1SpaciuK4dTnw6gNK3kFmBzEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61jR3T4mq4QYdDfmiELh5gHkdBaw5AYbskwZcD95We1KYFckDni4PtgP9qpdk4oxbsHY8rnL4VuqyLxPsNJ2hgUy",
  "key1": "2vih83BM35GnJ7frMnww54g3YyjemX9oStB1DrJFehW7b2uX59oXq3chfyua5zZaCsJeoBztbsAEY1tr1ec7nLtx",
  "key2": "3v6jSyG6D9Yz63NFsrtfrtx5r3DXBuYuWBeStdpBFoEBqwKAqpvVBfnRVA1oPCanDzUS6mHw6AUNqMt4mZqhzoSL",
  "key3": "5yFh4wmkNggnYHriqKHLM9Wo6ZVLrjs2P2gUp2xLvhkvyqqZXv3r1B1hKPbwgzPyYnsiKdpZF8GhpZ8xVTe3FDSQ",
  "key4": "4Him7fwtoTdsnXQduuXirfXPNsk1hXzPFvrJdi7nH7JRfNpV6WCZ2Ph8D2d5Awzew7CvJJTcYhhr4hhx5o6kM43G",
  "key5": "3EtM9buCFpR9pduBX3EfvEg49A2Mo2fAznFTNCZLA7i1imrfJd6G388HEYyUthez1tdrxxHLHJckF73MKMgt7ow2",
  "key6": "3ekSiMAzCyNSTMh8vfQ8e5oDkFgHshU1GbiBfbshnFhkm5tMcpi3CZfxoikNWdnHh4v5xrFtNDQvYpD6zQoZopqS",
  "key7": "4RmpoPhj1bGx6pxAqyriKzUsm9WSgBBpmFQe3LEASCd9zwKD6LNsnLYC8kBgXwGjLRMtzQAYHBYp77ZzhqBev26j",
  "key8": "3YTvie2ZgCMbrgVRHXNpMioHZfaegJSLWQR68d8yT5g7giW4kZTzMADy3myfXKZEiM5KCpV5i4vYqoM7gJSYWFNQ",
  "key9": "Mi21HkfqYtzZ2Pxc2M1xMEh2zWrWdiRsfd375LLzJmEL59e3e8ssSayCrimffe3eZixeHxB7ZeDQtXc7ZCme93V",
  "key10": "59q1vhQBnExLZTb7uA2356Ddm7t3J7c5E5MNkvpNDxbtaFzaQc7exoVWYSdzecQsF83rGhmZvWVp2CXUsHo2k2vS",
  "key11": "2g2ZBLdqYbyP7P865N4h3uLtctE6rsDuHwKtDHUVemoZz8H1zA9et695tSo4TFx4NbdVNRSt2Tq5To6sEbDK1J6Y",
  "key12": "hKgf93fdmK81aAFicMUVGuc9Hu97rXXsgXxf1uRr3wsXzVYcnyEgeA7CHhyaBjfGf4g9bsaDTjG7eRaSUKZp86s",
  "key13": "PyU4JTz3xxQdwkuZyygGDghG2vj31F56r3EM6nrKfXzYt1qUPqQ6jbJMPA21uXpSEPbocMAm9tJn5XhC9NYYMJA",
  "key14": "5G1erUxkRxce7uT4RXeWKiDYVViY83DyEzP7bjvXNdoJBsd5iyGjrZKHpXMB1saByBsiSawTsP8CXmHyG3Xb5knC",
  "key15": "c9uySjWaDFGpZ4tDi25QsLbJJUjh4EVasjCqrPZWaDHzVAvLEUJKivmfZxUKZvSxUAae7Xx337X9ap2FJoxrQ9m",
  "key16": "2ijiPLSx4EnPATK63uKmpJVGZspmTBCuD7hy3vAUesJyyzQ4zgmjA7Y5pRSXHwC9bdDK1c4sEYxDr4CYC3KouK7M",
  "key17": "4hgNapE2sBBwvSY2qquDGQ5zGdw3AoHN8mfERhrKQH9TNiPCYvBfMsS3Fw9u7tuqMwZaDPhvyihF2Hco6dBCDtqM",
  "key18": "4Ae1XZVgYQdiLwVhLZMntDHd4ys8uSQNx6KTxNczkyVrqDeXgyc8EcMPe7Fodjdba74eUVbojQ7aLhVo6PXghDWa",
  "key19": "5NiYoxAXJ2mo5Wz5B8czSynsjXJ7nzMHW4mKnKLgxmu9Wd6QaV67Rv1YVKMhjcUULJS4b8YsSaf2FojY2ZFqu7AZ",
  "key20": "5uPGfi4UGG4L4aFLb54QXnwdPUTqg8t7UKwwJtsCsnhnm3eYzQYzt482isyS2ZeughesyR3yEShdiv6Bx6jAqvEM",
  "key21": "638AUQTmWjucevDmAavHwuJhdGG5FT1dTHvgWewZhdGJv8k6rTnYSdwPKX1kqKtkrndxWm3PxThKTmNvsYJBZ8RW",
  "key22": "5iQRhw654GvZxQNhLBbGa6ewx7hAJ1sJcqGcV8Jt9Ad7FLPnBDfRhDu6XFVgAQeAcRh3kBPXtuSk6zW3ACZJtYRU",
  "key23": "2usmZteLXgsjQ4xy7VNRnVtCtsT4ARYzUZy82JXia2DZhxXDYoJVKhJktQkSZAGpUWz3iHsK4mr8v44xLctVwZMW",
  "key24": "hJXRC5qwJGEykuiAA64zb7UnryZW1ENxKSqocbdGf9XuJshevQHJzpwKy2qUDWvFQAXvm8y3R3xxomxkwiAjSKi",
  "key25": "384brsi6KrmvbV1SfJcDEZiMJm9hVRNZRBygfX1q5RXuJzABPMmMFEhgjXbnvZ38qKvZQyNheTX7RtHW6quUVzHi",
  "key26": "2rZyR4xXTVJJMh8hR3YtYpUFU9yMKPhMfuMRbvxB7nB9FuvXx2PJGZbZKn9MoWFBSimiR5cd4gF12UHWj4fyBC7U",
  "key27": "5jb9RC2B7Rj6Tr6uoqN9oVh2JAuiUHAAKedg8TjBv9xuJJcAc7nn8qDJVR6DhmYrQcFawtFTK84aR6hVow9HRcPk",
  "key28": "5jEXbEP5b2nieYL8DxZ9zgZinT199xjUkgc6E8QS9kuat5yLKNSP8pNqLRiVXXZFhTSqYkhWe9hYHTT9MjCQMWFA",
  "key29": "3Kxg5BatkBWrKWq57nvXbVYk55VFqBwrTZ4VxGVK9hRKsi8ZS84QnGw42RpZpPGexzbgxErP5qAsHzzyGyBFAuPt",
  "key30": "4iT65XBZv5oQ7dkTncHAL8gYSrAzCYn99AT8qQ75KekwnFtx4FYCTR2emG4RaKMXuxmJPPchSnbL563RJ5nYMgsF",
  "key31": "2Gykg3vMq4GTYSNF7DCqMzdQYm6FBhXkaLvcErWHQEXBPZqN9SmX3DxHawvjeCYzZZznwiTgC2iiP3XreuchyFxF",
  "key32": "4wv8Kqkqft7zJkSJ88zWrYbdZ2aaUsL79KSUQb2rjcXAmziRf6nuyeR9tYuLsQ5VNaC9Vz2uFxfnKbvBePn7w9tR",
  "key33": "N1eRB5UMbbSEk1z29xad83EbUmgMrRCvccSftU93kYqeCCmddZ5byAQ4biadxN844zHsxMP1PenUWjJJJyiumcm",
  "key34": "5eWMEoc7B7VmYiFpjx2m8XoVF5N7wzyCAuWo6582Po7x7MrGGmV5ViVyKyeedD1T8FbJrySM1TvVvTNYRq6RTURQ",
  "key35": "3Zztm8PQp3s6UkSyGLMFaHDdMHEJqauWtF3qFCEF384hcKwg63dF5Aw1gy24X5gXg5rEuW8dw7Rvb4KkC1qYvQbZ",
  "key36": "3h3NBDkfhLaYoPLtsixgPATX7vy1WeTD2kiv1eEmAnfrGWv9fY85eHQH3yVucN91UNxnJbAvu5mfw7fhcJ8axDsb",
  "key37": "4UYvW6YgGxxehExHgCSJgQEGjJxKapUgPsCNQdb8iKW1c55y3N9kNdoLA2kWy4qka3a275NoizNfSkCa1dcwa3s2",
  "key38": "4oqVAncaxXeHZy8apKvRpFnjvkhXszRhzc7ULLLq7u53qomQdkUGMwxasR9G2bzYb8mDkrLxCUnmMQ7zZevxUjno",
  "key39": "2XZxrkLpEtqSe3ugZ3e4yCo86MV2kXyja3zVETD8PZSUp6rjm3HdNQJj6SdgUug1GQRMrfXJFGZF3cN8HfWaiGYf",
  "key40": "129GPuGwG2dEkgffWAgL65KrXTSbx2Ev6GZG7gT4b7mFDMCagGN6aNHnYxc1a4Kh9TDMjpaqwZsgwQYZyQqP3zgw",
  "key41": "5MKeM3cdcYf4HBbsevFK5hF2bG43MPu2YxoibyKCLaYaywmXbM6xCxBNBB91yCzB8KxS7E6hDgg5eXGTHLgqypVw"
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
