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
    "2R94Dch9thqn41ziNzeRo54D4CRTgE4DHCTmwkhacH9BnG31t1rWUBejtrPH9ktwRNWkDtH1ViNeSFvBaE5nMeMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y7FjoKhvZQwJhBwVxd4nDseX1AN74CYmkfpzPEZQ19F5x8vqfvZudgccXhGmupGapc4mevcBVK1eUGRuffrzPH",
  "key1": "TWGSfJsutgfh75AeNJWtPemHx4b2i953iSZFziQjGbpx7otPZTNbyX9MGceVeF4RhbTHaVz1PxFayoNZz9B6GHW",
  "key2": "2myPrgadJFRrNqzMK5Ls8hbbTRCcpeCrCYeQifRFVRZhrwVZfZvJqzneFacjKAJRHdtBmZMkeYvNcrgNYfZYyVTq",
  "key3": "5Aog6bmdEuvYSzF5fvShwGKNwyDwgUhYYhyZYr8kpr8whYfgCakPo6yrfFBwdQbvHfij8wENGY1f5ZtSRgTCgvLT",
  "key4": "5KM3YyCrPJ5LpmgsL4KLDVMU1j5g1rjLFgeBkro178V1bQcysVKA4qfKbrV72AASouo3qywYenHWicSmnRLFN1xK",
  "key5": "5soMy9DAzzMrh9ngt5V81ekaVkujWZf3R6i3kWNtRV9dr514pPoNVmU8X3XxL3SCs9K7meCznGHRDxTc2uRthEEp",
  "key6": "ftfCfo5FUiayaUcDPXKhDTLtw8RRQ16J9uPGfWt5iSbDfk8gFBmdcNXfH96Q6kYxNCBNFHBgso3WkZ4kuLJUYMq",
  "key7": "5VUjUMVZ9sZUN19LZwp6wgDPp8QNL1nta4Qf2UjtE9TUq2ub63mZgeZqqgYQ1z3Xo2J6T45yqBgr1ruhogC7CCPG",
  "key8": "4zB77TrQxrB5iQETTRPWXV5CK7PAAnvv2R5MMwexz4MzWZLofLFAG8R59VsnFAgorAhSVhP6UaCJHL9FkJzMmDzd",
  "key9": "2ACVtvUiu88gYDpGED6sdTijHZRJRnSo7W8wYsNB9toNVJtNigmMdwUw2VctRbQyVsZ83gRc5oNYnuWEfw5sQd6B",
  "key10": "2KDDo4jn1V1aF9Lp6N4Szi3HFYWEdtpUhpkHvy9XAhRgGsz7BjVrTHgPMD1j52oQxzwkaGS2j2QT4Qzv3Uik9PTq",
  "key11": "4JExrn8Ek7tpn282UfBLrhmArLzV2FBGnBNAySDoBR2m1McmHxy1P2pFMxYGBwa94Mz7eLMs28VkMWNmkMP5GzaP",
  "key12": "5qYGWHU8LqS4mHztq39cWamKCJrarz2acbd9uzkPHsBwv5SMb91ShuyZmutmVMNyzMkfG2cePCiphsLtZz3QfJCy",
  "key13": "FW2DdRHm7Mtravp3QRxWxr1PdApMhX3HSi5L69RfDAi2c43yRsmEJmbVqWjW9f8HiBhmCeQhQwy1LQeeABbrPqM",
  "key14": "5iiPTasrmx6NJK8CYrM8WQPjQxnSasciGQxh69inFeTiwP9oJZHPmzvoHmtmViW7gQ9LRxuECb4zAk3jAcLQj7ab",
  "key15": "63KmbR62Xq1YVZ2iuBmBBRmnQPG3xhxZrTJZrWqMv5BXWKgemVRqDhcYjJKoUHMmYpNjdjw3yW6gB3YDsSo12c7b",
  "key16": "2xYMfsaAEVtga1Lt3mrE9Qxd9JwZ3dxQTQiPp1qAWLuDNxHa82u5HkB7KjRZxzn2T4Us7xoNkATHhib5AkxznDjX",
  "key17": "hUg3AFMMgt76t2Z4nBBV3eNCbGjyeDiJq6L9wS8ow2zR974nQxG9zMWc7eeZ1EiENZKkgaA6JETM1PGtExjVhGm",
  "key18": "2AG9XaeoEzoe7B1nNWLPawp469a8XjYEphM2DvVrWMMMxGB6WnkYPZPztB4AAsJmASLJ3pDJ8bF4CbSBRuWU5UkP",
  "key19": "34xXxaAzjqjFXHvRj2yq1jrXpzWnu5X6Ei1Dob2jAMvbUT38iWdroGZehicjVDGSKEpu2kDwFuTQEywizKj1o9kw",
  "key20": "3WknBJXbLzo5in1XUBNLYJCB6urHMWkG9gxQ66orRGR8hDnJBQLgmjW38vu9s737cvvNfrGvb9FSrrrhohLKMdS",
  "key21": "3bADkFmWqHSeFCmugbNB4UAyLt1wVnWQG8oP1Ao8yng1JyomqgsDMq5kMMpadYLnqqobZqy2uHRqo1Af3guNcSxr",
  "key22": "ejjCozvXMaquViW56Y2K2Usxo4DpPVPqchkQ5KnssKX2qpmFbChwpiz4xR1x4vbajmw96UkmGWY4vW6KpbeWe4D",
  "key23": "3uhrXZJysEbTqk2hbLMxXCmLVbLMDSmRrxEwtBM8T8VwWVWy2J9mZ3noPcsAmuUUEr5tHqcybqoSoxCWTugoWXeG",
  "key24": "2NYygi8n4Z1pCqTE8xymhwvdjVhDYuNK7qfjTWYWxnKgTXxJSSc9u4abr9RfidH2MWdVuwj1twqdBsrUZw7heby4",
  "key25": "2KWaTedvY5hKZonYVdWck8a1s4fgZpv41aT36YBwRqTQVg9aDBgkCwgdn3nZrDpfcpA2qjNPZDTu95ny7xR3rtJX",
  "key26": "8kAvt3r8ZPwGFjUfpQTCx4XaRqQQMPZYuAc4p7foMCsJgrzxcpc253dYJhpZNpDjYame3fyES25jgE57JyoLY6o",
  "key27": "5gAm7E5TZzYGsqkc8bDvuQhD4urPjYc9xbnpJjSpLoJuPdvenq3aL7S56EU712ryfjbHANYJqEGjSYT26nvV8q8B",
  "key28": "4TrEuUvoqGCTPeqfafnv2r6or3U9KR7Y3djvej51bnX7ipxkxG6zBgeJwFkEPgLBCWA1aVNFBJb4TBLGfn9tsUk4",
  "key29": "4dCduArpG9bvvQo6ww8vS8ZabEB65pcu8nGdvz3SmVNrA1P2YfU2ALoFeJtdo8S9ik6zGcKsUy5t44xatqdxoR1a",
  "key30": "4CtHu7M3wRcAp75rxX6rEANY4m1xE16URqE9i6BfE8yp6pY58eiDxkDPsjadd11LtQLq3hLsVocBNsCjPq96RJ11",
  "key31": "5v9G3AY1BYYLKTcR5nvhvHGgozDX78fABJ3KX1BRsxu6HYdQ7B6sUXxWvEtQFwx3ktsTBjCnhLLG4whGtGmCzsd8",
  "key32": "5kM1Sg2tr9dEpWUnh72NifDndmsUymReTBtzEfHyZuk5Cjwthic2AbsNoFdWP834ZfAMGqZ6st27xx1z5LwRbVh7",
  "key33": "3SDT6JST1JdqUu5guZn9Hr6zAnNJ9kjkgkZu67J5Z8rPLjJHBGmhi6RMnHtx8bFthm14aE262M9McSXf7UYzNQLu",
  "key34": "2RT68G3kiUFZGXAX3ee8pJKFeKyvs5JJh7HkZ7S2K5wYnvYmm3q474iXJofd8qZWpn6SCCHKeXJ3rrPCubTxxkw7",
  "key35": "2VpKtjrZzFSP5tyiovGPHZtfrWCEGVCUprGhUP4n6geFVUZfYc5m6Qgr7hqY4DTB9X9HjNNL1mVvuDE985Ft6cKU",
  "key36": "5VgDmZCdstcjt6UiQowgba4h9ea7zqwSvHcUJ53C42bhP1vcPSoaWomt9Bbf76icHw4sDGSRzwuK6o8J1j3m7ceM",
  "key37": "3ywcHdTQxWTyrJmtXp4cES2hyepkZBnPENrYZjuJk7PcHuvFFow7uwufXmiNszZtZ2gKs9pFTDDcfhcvsgtKCrya"
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
