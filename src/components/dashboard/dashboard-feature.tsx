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
    "4F9NQXTbN1QmYvVSQ9iFKgbhsyf8R34mSzLT5VrW831oVYBaVXULjGgfhF3jrL8zCJK62m87tJ2t8pDZMP83169T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tDDkFwVFFYLAUhrDvUYHQ6c97CKp37wdjHKFG5sDWLkHypL5FnxUsU75F9BMHD7GEAb2z631hLVw9rF9hqpdsXN",
  "key1": "2q6Jems6aMXDT7CvyBjJD1qGvBXfd6moi817h4BE8JRScZJWvHhK8eCD1R9RfPSs6WPnheDbR5P3pVE3o6Dt4Jew",
  "key2": "2pw8aNJN76oWT8umCqw4kdSfjj1EvFjsZkyAWGRXBQTMRLoccH5k8PKbA82SpKAJbTw9NRs7WTbeSPrJSPHRJoBN",
  "key3": "TNpgcFsbdSHG5tTjwq1uKJ7M19ZK7Byv8oL7V2tzPbzqfhSQnLi2LNtQ7DKJ1D5f2rRa53UKFZiZc4Ciu86SHkq",
  "key4": "2mnXYN8j1D4qVj1CjcdXaqfaDgiT4Dc57kws9zU9bQ8AA7KeAbmAaDnzAE8um5ZfzwA2Q3Vtuv6JWRKTevRRLFyF",
  "key5": "4X3SsTqGTxSiZJ9SWY8oJDw7x1ApThr7rXUkEzGbrC4YAFGxnsoqgRG8qFhiyM5Q17xYN7ZbnC7QVrvSTkN4n4VW",
  "key6": "2aMLWR1jqzjjBjkf3dpkz67Zu4PXb7UbLpUKYFEYJAvtCuDpRTTzPg8vDe4a2jzV3sqmRsCgzfn8LogPh2L5cUfH",
  "key7": "2g5iqcvRcXXP2V4zSNddWXDmQ5ZJikJGkTk4RSVE9rfFCZZBd7fZxsTC7cnYhcBHY6JsijfVumxYsZ6DEVkqkuwA",
  "key8": "2TUk6NhY76ejZ6wUaKtXuuCyfmcgPNfEZnDR9D356g8Bf63A9UoXYWiHHioAVBwYsDruTX75utKVdZ5a9w5Xpgy1",
  "key9": "3UtjGDasbqfQTxBgn83zrL7bFNdFP3q5Q4qB58VCbsMnWaL63tJewsWpWk4CyAreBwCtFAqa4Lmi5vdNqbbfq7yd",
  "key10": "DKbebsoLSZ65xJVXqefHjG2omzHEbVWtFRkKobDiqbraDdnRjjyUrkPCXDfiPfpx1NjUfnRJ7NQfbNAdwFkg2vJ",
  "key11": "gzbmycxZSUGaXf231ipubWAfFW8RRqXKedPUfXQSMFjAiQAYv1rzPPYL2SRpXGpKQNKgeARg24G2uYRNWSCHhoy",
  "key12": "3nna7oZY7TQQrwVfx8jEXV345x4FmuEcW7F3mKrncV3JJ97pxEGRVysXgLZtCs6BP68aGcyPySAx5LMSj5ViZ1Q4",
  "key13": "2cpctSoCquJfC4cCEmKgW2XRvQAvvehP5R9Z2GbHev8DyH7kqSJXVkxmqkeM3g55JNhrVQiayHcsHwvwLTbPJmZ4",
  "key14": "2eVzV4FYwgaD4kBCD6nNhjjVdN4aPBiAp4rCvGbwx4aJxxbWifHdZW69TLRxucZFW6sR7Xhb8k4AYYtjTxiWqwM9",
  "key15": "5Kc42rKPvgmmxpEhY7axEo3aW7G8X7WeaeYg7JgxHkrhPXgm1hBCgZqw91B8aTut1PPX7s9oAZ4aiH3X4mQw7Pp8",
  "key16": "2wducxRY8xYqc2ZV4JWBVcEVfkMi8prdH9jmnvNgB38TAT35rmqzxmkFdVWCZ4zaZAJd48MA9GnTKXRn5wmw7Ezt",
  "key17": "2j5ouhi1AzkYWArpPgRXauwkyAuUPvCWmj4mSb5QYHYfCk6idKYTSzRzeW81FR2ExVnaP2Jgmm1Mm2N5cXSmV7NU",
  "key18": "3yivaop9d2GECUuw7UkYxgBj4avh3hpmZqBT6PFpZWBPhi3a59fr9vfZ7eX5D97hf6aMF9XrzL4kXg61b5AGGdV",
  "key19": "31U6YJSGD7rcoJggdL8NtokYqQAGxYVpq8Qr8ettpRwYyzja4gaG1DJVcXwR5LXp4eFUBj9RRbcxbUBsPTgN1ELx",
  "key20": "2AKXk97UYZEWBHraZc5oxxxmn5yksViJHgYrACUTyBdeLGn38TLSSjAwFxwq9xBA779DE56k2FiPETP1n8hTnnvu",
  "key21": "2aL9RUHkB7LqWZ6dibtePfRXYpAMp7dqaJfgCSsWxFUDpix48EGByzCeZX5c8ASiDgKWvzodiPoHSScg3tpUiY4W",
  "key22": "fhW3HdmcuVm3SxRPNrsgTJFJ1FrWerw2m6dXFsCtkKueLAHTmorNSmVcioPY1JKb3PpWFGCithcXqgmQb133BgN",
  "key23": "4Jvnadf8qfz98tzU64QjXtqpsfBpezE6DaabUuNwHZVJLCWKfy2g3Q5f6basTqkj4JUsFm4XR59DUhigVftCkTnP",
  "key24": "65GDszXt1UWx28dmQtHYe3MP2AkdvNEkhWg1Xjw3xYqDmLjbZTmMwXRGsYyCUGfGyEUAAeoasZYFydE4t6dSBdS",
  "key25": "3aQ8SaEiE4fZokoMZmmyExWemUeUw2s5HwF84WT62fdeLSjBAJVVm9ayEerBTqFVig3aF76kgntAjLXjYwjFisD5",
  "key26": "3iZJQy5ELbj5h2QrNYjgsWpBndzQgS4zg1UargELdLT2ENcweZajU2GvxY2KFh2iifiGSZhTp31Dr6eUrzkyPK4m",
  "key27": "48fsy9fjvB3nvhLm6oNU4awUPCohTwMfUpySZn6ZrzvrWehHmrs2QbAht9KN1MhzV5h9JYveehrtNPf9tFmiJS9U",
  "key28": "3sCH7vkuFNpxsw6cQL9u876K3Jsn6ZHnwBUo9qNfEs7WTtzrbZ7S1WuKhUz6Z1BzLcdMTJuwEWGKRdhSwB2ebC9b",
  "key29": "2sabvpk7xZocBd8uwsrp13a7g86dAKempvJZxjn7N8SxXwHJi58cDNSFkWFYFYPQsxmAGJA2DB1kM5cZEj8F2jhB",
  "key30": "3xNFB5bcQFkufK57tMS1z4nUiYQy5wkg8k4vRLmcvEAz6Hsk1WjtRdFmqCDyfgGw1kyKosQ5uW8HWCdoL19749hi",
  "key31": "3aLJwjiWjyB5FSoa9uxw5cUgwbqCPfGZK9gS6CacAbwB3BgqyWxZ53bdLSAZza1iWhNyA1KR3T3sVaLp6Lvmu5Hp",
  "key32": "2Q3ACHP3WdmJxCa5uXHLsAddxQHFGV4WsWY4kUXUGgRCwEq8ShDkCLJK9miBFonw3K7C5N5wrKdN8NFM7qRq6fEM",
  "key33": "31YGZPR3N6PzeWAP1f6UAtUd45pbqEj2fKAspWsGVVpPSbXjaaT275m5t7cGsembwDe7ebgEpjbZ5AfzxK3tC2eM",
  "key34": "2KqqPsLuYJztKdMbgc8yJ9SSmd13VPZopvJnouDFfodLeSr95opYSYE1qhAiP4aLTwjGYZgu54SL36y5qFLBb9S3",
  "key35": "4AoDMKHvow6UDiD1WjMQzvkbwVVcPQj3HNuYRmHE51wXzDFkTWWyZ9oyAF39fLjhd5ijCVGJL7BVTFBaUiSuvcjr",
  "key36": "zVVPqhCWGqRiT4SShh65hapbrD51NC7G4XBMSThxCJbNpekRRsepKEEz6GcPnvwGbZ1kfggvLLUPAAnde3ZXeUc",
  "key37": "4hpbgD4Jx1sEuKmToEcYDn8YwFdg99FWp3WEYfzkKoCkqde9kWeRuoPBZQavfJk5i1iFtqFQkLP4xXRMDiKN4zoe",
  "key38": "WGVnYR1NL9Gy3aU2N3c4mhYzuXpeNywWLagAAL7iVBK3hZXRDjkp6YnE28JSzmQvkSyrCVfEnFwgfG7vyVjzK1m",
  "key39": "BMv7grUi4b15cp9hoc8TpARmMs1nKyaDnaeThAtiTGXfEhSr6kAfjsXLmJQGZxAynCmn23RNH5PAZTScxCgkSeQ",
  "key40": "5VdLNcRzbTUwCJ8FeFDp5M4ojE772vGykCAXSj5kKuQdc2fCuVu8Mffo5AmvTk83paE8RyJVXdU8VwBiDk8HaE4U",
  "key41": "5mYRw7eFZ9vHPrtih7ZCGS1e6xm4cz5htGNwfupAqLyDJnX6i2TtftprSXS79E1qMtdtsV78Fygq63zaRD8wDqN1",
  "key42": "3gtSZ1dAD6S3cDmQAZc8QAp2N2RXYHCSWdrXJHwQWvhjc54ng4jQrKDuKddEZu71ZwMxmDSNZewRQ5wieDpEw5uR",
  "key43": "3CibqRZ895bCZyPxNVviZSLQSbcTnTacUHWt9Y1VRKQCwnQwjzxGhTFficCqkb5uMtch8zGKJJpoc11nkZbX3peZ",
  "key44": "47XKGKgiZsrRYsHcPMy6ncYXjWS1zP6BUVtipuG6AjQz4KzntvWfTWy3oajmuJ2hg1Tx22zWF4NRhpuoFETQxJye",
  "key45": "4cLb3ZPKrS8NvWMPvqborUfsH6XNhhpJWPfsGbL9tBmZfPZYNMN8dZz9LSziWrsh74mZUR4gQ6W7MdwuoaCpCZiM",
  "key46": "4EqAWdijJpgpKu1GCk1ouWJpThF5ZwniMxt6WuyRNPegP6o1UWjHBPxTeDzCdg6ygVYHQhMEi3PkmH8oooCXoFKq",
  "key47": "2c6veSZ571yLTBqUyNf76cgvZTcx3Uv6Q37dRVrihr2DNzFHKj67u8bakh4LDhdej8QSKYLXf9BAAPA4byecvhNA"
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
