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
    "pYQFFwed3T55Aruj49hXHbfuwwhQVzswhDVcBmvA92PuG9jknU4m8TViBfZfFuX3jQ94eNrBsL6nua7ogqciED2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k7LsTRgvERLrzNKZokRFnfRN271RYDUC2NXwCfDvqsUiu7ypQW2WidP7Lis9BVa2pXwkVVKh7KEL5oiCEkxWkcn",
  "key1": "3hkgrJ3ceHARYAvcoFGaSa2GrK1w2jvDEeqD42h7NKGoqqnnMPJC8cAp75bTLjXdFEaQfnwzwPkudSyqvjwBxBnc",
  "key2": "2kZnbep5tXJDfvqBSEMUeLiqygTBKw2dgLcUX4z75stdHeg2sgqKPuDHjiqaUZdFA4DtTQ8ZDWBKjZkETwmzK5zX",
  "key3": "28cRSLY27aAk8VRLxHU5T9ZNJHvqgTtzPgwPVdM8jTgMWDTw36x78gezE481fJAWjmsyDxhdHTeeYxJMzt8hxQMy",
  "key4": "2H54dVM9cL386Nxbhba8dTtckTdHPTLq2zzVm4R85S6rjbMTEkW4Uzyarr4DrZtp11VsHCq1Y6WX1p189CMyptEK",
  "key5": "3yAhUpTWiS3pp6EmQmFT55pEXJZ129RyWjR8F6cZhMLk5v7sALKwDc2pdFMUFewLJxghsJx1qe1BrH5oVqsxsBzH",
  "key6": "B1C4aKRfNZbktPdDt6P2SW6jEGNZMNmHyPon5BLzVcjQqiypGQSe6y8p3rAQg2BtASm3LiDuT4qBw9Zi5Wqj52j",
  "key7": "jyzZP6auothkiQrfiTSqRQX66psxXr7YePZ5TvDYVfGHXG8MH1SY6TTE6cEVj7rhCX76tVcQP6KYHc6MeZ1gfjD",
  "key8": "4PCGn3FBy2adDh4cvJ4i1qNto254ap9T9MGm1sHeQysvRM8WMnvQ9oi1QBkR16QrETkL4YVR1L3Co74K3Teyjs95",
  "key9": "byF1eLV4mFUxbWVtpa6FFrVBAXwvb6nQ9qbU7BNfWpBNKPbcLwYQDLci9vqguUXkHHUwuQmQb6LtsxYrZo3Ax5P",
  "key10": "FD1KCgK8xZevLeGn43ad5FsyZVe9E4zyLUWuPynX2bjvzEbmpgxDzWM4n4F6fSu4WzApUzHqLrXw7rgyRGDytXP",
  "key11": "5vrAcc6P9mmaD3o825Lo3Z96KZhhhPNBxEGaGKjuu1Bv3YWNLN7UC5n1KAfdxV5GLBSPcU8kphCE7d1J1L1rrmv4",
  "key12": "5nUMZAMFW4KP4hEKuT9M5j4CauFuyY7okmp7L877QfpxNdnQCCFSb1FFztnMDKP5NCZRQvqAgjXauHgggcuttxe",
  "key13": "3omv8RPPn7WTuCnxaY2kYNMewPBYrmgxDD9hTvdkV6wAdaxFZnthhGcFvRYm8yWwbnrMYREfX1hLt3rRDdzfUUuy",
  "key14": "3L6xj9vVZVZx5sWLesHKLatqDdtdi4Y7Uq6c97itNz368RcXXwjREar12XfQbB7NzDHU7nBKZ82HPZZ96DeE55xZ",
  "key15": "4s8jxisuDCPmSViaJS6tnhC7ecPV4eBVPemv8M88SASVNEt5DtNFz4EKE5HA3bPsHcQivqiqYLLbTXMKUiFvTFZF",
  "key16": "3eq7B3ZFpQuBuffiTVvSX3BKmhsVcrufgUmdaUu5zbJAhJ7xUPQc9hhRfeVFKdgr9UXCtcm4ibzQC1cjVzqtHPep",
  "key17": "NWTZTKzruvT6Ai6JtCYKLZnf8otsdtkRHvoTL2az4dPou25EkGDerNVCk3iwCJT2GTrkdJyRuAPeL6NMNNVJCW8",
  "key18": "29GYw17oc5fqLE2nzUJQ9DoFHkCaL9PqdAsfykfyBM1TKxZbnUVNhKN4MNUpLZYcPFyABv5HgvyHF8mu1oL3zyKL",
  "key19": "4ossuTZduqPNW6uxqrKm9AW7hvGSMfABZ5QGVAotyaa5vb1vhG67vF4JNMz1NWpTnQdp2t1ASnD63Y97GqYqFuHt",
  "key20": "5QC9wDrEZfak1dY7N826Js2CximAeCZXppmQofd6jZMYsPT6LdBQVx12tLSiYSna5989xvp3zPm5bnyAGF31V8bY",
  "key21": "3tUxQnSJTiq1FZnDHkujn3uyUKzSMoNQa4LWbzjTMLgyz5LRGxRg5aJFaagW1R5rU2up9cv4mpDFB3gb4s4q3A2Y",
  "key22": "3RFdM3JjhsjGQ93tbtFhY6b3nDdqmCeu11vfCKfJktm2qeProkg6XCmrFDL4gqzPUBJgytCzs3jywe8MNqx9Z1mi",
  "key23": "2CuGMKuEuzQrWAXEkfnFku7tMjPegiLiP4a2LPBa6euKM4Vb2nFtBmAyqaELbodQZtD9WUFVHhtAioQqj15gkV73",
  "key24": "2Lig9wb3LZP5EVwPA7mQsYvVBctmmm3MryAhuGjgCNKDgRoLBabcwUkGz2P1awJ1dpCmCAr5E89ks1Czyjm5uKKS",
  "key25": "hKdawap5sYcu9JX4NPwWJr1C2KcZRAC8BLKHbhpt7YXJVmKaeTxU3a9RHQixXKeYqpH9LeS6Qw8KSwk4tpnXK1A",
  "key26": "2QAX6jCkBJbrnz6xiskGbB9BJTuN3EQ986Atmdnyg5rNPCgeB3ahiugS8JEpsFabCo6iBiWhvt41xVhp2ErzSV5h",
  "key27": "5jnoDgTSzBFBGifysVDQFmFQ7uGDobQH7LmCQNh3gJe329rETBcviDNRrgRDKPm9GtP4pq4tfJQviP3CsRbF4w8A",
  "key28": "5hYSvLfQUhxJDmHZXw5UyfVuEPKoxS1h4eU8vdQDSJsmCRaorevcedrgU3jpsu1JXUw3FzhDos6ztR2YQLu2niRP",
  "key29": "2d92HUzs24B6iWMPN8daiKKcA2TS8unVPdqFPjCNGpJ1xgZ32QgbbLWM176McozTZFKV3MtRV6rygnwnkSvNbWDx",
  "key30": "4zrD9QsgdhaXqGBu1zauN4sdGHBvNkZRKeNSa1bkR9HNzgcr7zBg3X7AJUTwx145B24hAsAi6byDfV3XDrdmDR1b",
  "key31": "49SkSh1wCKjAVpina5GaJx9mUsREjW7ZWxvRJxqbMQzCZZszGAeVwuZ6ZLowEcpHwhgittnZPw7s4eAp8QmauyhD",
  "key32": "48YzoqBMEzoozWHhgXWG4aD4DUwo16cgnmMzDPJN1S4gNTLE1SR2boinHwudrRNEfG7PLoG8Cv2jqosBJ5pKN2NL",
  "key33": "2NGMMtaSFxzneueL4RP8Fgu8wTw167TuBgX2GsSQpDT2i5pdUGNdE61dyEFbzmWjBhr1ei1kYf7f32ELCXWqqf7J",
  "key34": "QcVquwVYje65qfBtcJYQ2ato9EqFV9kP4Z6bwHjrFEbzFsQcBEVkM8Nhbg8iqxWx12PVes1zFnqPfe5vUFgEwam",
  "key35": "35oWebZkRSsPvK3j4XKFwkwBcjxRrKq8yFq7ZvvUL8gd5TbDk9wbeYVMi9zjw5wgkn1oNAMCiPQobfXjh73ANC1J",
  "key36": "2SfJoNV3Y5GiJ4LFFVfPNPUxndNQH4iV8iKWkHyj83fNuX8Lq3P3G8RpRT1KG2d3M6L37AZZJ2CLsKjfc5f2RjqR",
  "key37": "2kVj3iCxN9C775p6fCKL2bjiQhpwDbt2knpsnjEA4xKVm4p4qZ4ZEyY5vsrfZJ9oZFQQV6mYk44KXgB6PTgEncyq",
  "key38": "2uyHjwiZh91E5iAFMNqbKUCjPa9sn7LC2WfX7piAUKBif4srNHcRGQoxDYXtsi6zoz58nthx3oQJvgWqQK4XVXnW",
  "key39": "5jhfrikfidBoCQG4U3WRkdnJEzrvSZGPs47wYyaZVGDCeFxEJon1kF61ieFLJshrpWQDCkCoLXHQhfr5ZGMLKs7q",
  "key40": "3DRKMxwozgMzsKqgY7p9dbr6RKHBReRsSTukWudKpAqhihgUF4omE8yBFN7Deqadfx17YK4y6ergk7US79QCfUVX",
  "key41": "2sh7jddLwpQfEMuZ3pwrVikXPpexAyzjUhwk4ej9C6P3NJ9BNgDtRp7JfnfFvKAMMz1igRCquEVp3zD4Zi2imEx2"
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
