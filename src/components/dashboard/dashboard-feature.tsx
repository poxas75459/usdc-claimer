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
    "5aoCtNX6QqUojah9tv6tWAdq7DyT3j6noPrYPbwQTQ7qqFTB1HdhUnShumk6NZfhtte4EDozHFsYPDZijGp2gVU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ryHpbEWDDLmBAjLirYHLmefarCvv8SqZFzfpuLfhGc5gR8QKzqtwj94TMBxgXNAHPobmHCtaxAHh4Tm51AyzWKh",
  "key1": "2cbmMJJ7VgudAzG9nEqj35Vmpt4F5hMGYXrcMmw5EmiFaw1jHgqyLhnpfX2CCAnindKcZn255Qk2V1dPDjiAqRoh",
  "key2": "22c7ah5Cf7Jto5Boerjii4WEirym3h6F7YdtSvwBhQmDjuUt2JxoyAb8AtUYWoZeBfHSoVL63dwv45UQTaf1meEZ",
  "key3": "2MUAv73PVe3NAZ7v5oCcFN95ZQDDHGVoDzd5GWJegDcC3oegdBa1Lw3schBvx8XtrmDH3oEGR95b5JfnpqvMkZqe",
  "key4": "57HzySppR3MHkXH5KCcHPuLEVjCB18ZoFpXtDX6NUpjNJJMc7ceAHu8kgkBLpUfUK6pv24w9mvLaTPwyBrhkrE81",
  "key5": "5355jfXzi7d8n3w48HSMhonYDnLDeo6KzbcY5guVJLVjmBffAyUbZyWvNxQJSxEx7U84pVspFYATgtVJTVzMQpsp",
  "key6": "QXoyCQefvTQuYV2UphVQLkTDHq4u81n5sVX8tJ9GYguMM2EJ5CJoZBRRqgN2k9ri5YyAcn3eKN4zFFKPUM765TF",
  "key7": "3LzkR3XyEtsSRNeSde79t15id1wvmN7X1Ah5USPz5xjkjpRbztLA3E4Sn3iVnJCn8VbFg2Xe3QBw3dUCqsxwDC2M",
  "key8": "5tuTwrdYrwM19AhfQinLWpGeDi3UR3okYQPusZGAJCZ9HBQcHAqrs4kD8NuJqYugB8Sh3YMgBadvS9tn5jM657Xp",
  "key9": "5xapQ9i546vmGb34opoEsW3hjDZn6pseznPUkc6PJHB3TgRs3Acb1rn9hyxLA2DUPocY9r7ki5oYWdNDCtaDFjoR",
  "key10": "3rCrJwVvoaoEdKehfjvDW1ZYi7pieLftLqXaTQiCwPCd2rJPdsnMLg8HPAwkY3HYCUUMD6EHbRZiMo6KmVHrUtte",
  "key11": "3NtmADXFz6Hs5rkjajpcEsuUfZm6zRtn833y2zixHKu9UKjvvAZU8WgEzE2HdQFk53vr2GAhBXovMYWQ1UAvrCSk",
  "key12": "3r513d3ThXipepW8KAT3HQUo6RRAn4fC2xLjywbX1VZqtLZy9K4JqobZNy3gYLcrAoiwcrPnxgE6gVyKUQsbvYAG",
  "key13": "5DLX85UC3RrLj98od9VXjKUN8tjDgCfRudWq5j6j6jYSGkVV8zhRJUDdVz6LA6BBoXEBzkzyvxFASuFkgkMjMpC9",
  "key14": "4kVayHmzgjs8ps85DdA6TJq97hqux2dAgXxjrCXAhniHUZK9mGBNQkjFrDpamvQokqjfuiMEECAN62Pue7P7tDqp",
  "key15": "3c9jNaPHRWFGgGy2FQqKycPYdmPKerxAAUz5gr6uqFVasF1c8NVT8TWjoUvNTzVqc1wigim5TaCjFcifkcKwhL2M",
  "key16": "coeuZTEd45bHWL1GkMRDUAeeNWvR16Uq3cKXWKBWk3CJv3wgqLXGiZtBhUaTtS8SQtYkvd7C6uBeoZ52HWPy9v3",
  "key17": "2o4S7sAUM2uVBpkk82bTyXMFr6A7tE8JXrGC2kXxa3U9v8Xh18wHmcUhoVLZnoqHZieGZ1MyMdf2WiS7NgZSwWPm",
  "key18": "4VoSoBZPBvHqJ74iSz1CJviswfc8XrmJ5ZGDZTyNBYfxhRrJf2gYXPKZVCMReHvd4wNQJCkB9z6cninnLST6HtKH",
  "key19": "GoBjHPCFr9VweV77UZXrQ9oXMonzb3i6gkLeTJweEuteQJwNoZTBmEHdewf8ep4uiz9T6ykt9WpnW3ziXcy7T3s",
  "key20": "3wmHjtjK37Xu3KgS1avT1VEqnUgu6yCaGtW4SaDj7kQ3rrNBCdmiyFny8CU9wZBV3uNPMnKuVb7V5hEfghAAMjnK",
  "key21": "5gKrqFRYvyBgZ4BTQ7m38eihvSror5kaCxefSCjcBDtfNbCeTyXWdUtw5jUcqpvqi5kqLd6UDmBCBS57rKmoWuGa",
  "key22": "DhFMU1GTFd625fy4tzkp9VorGNXaD6rVzGwpLUN8wwznXYbQ4bjuBiPG8Kqn5DzxkcGwRUgMvnxn5AUy4YwXf8M",
  "key23": "39Yv6uYcpL54wmMcmE53QEuyYZt5qUKTKtbs9CYRbf6PmE1UTpQgdBEVfNZrqeU5XXFzKJBEuAhGz9GCRG5Rc8LL",
  "key24": "2Emsa9erxQFwRipDmzqrujBbCH7FSViJ5iG9HqiBuRHrJTtnBk4Dr6KvvpYhaS46C877JDWaEwMWR6uMcQSKWZwH",
  "key25": "4BFjfFZTAKwNbZfaWZ3WfuBs6tFUPL7fXsUdZGwmobduFmDRELx3TaZNVt3rNxtaorpUMqg32T5hhyKJNcA1HXEJ",
  "key26": "2udM6VqLQ1eTiVkZ1cFDPUaTYWnbKk2xNSoop38c1VfbTKj5nATa5dHKWrz17X7gph9KAgXLgLCGpJmFeE5KiqUr",
  "key27": "4Ucju2M2EeaXhU9jiNvpUfkpxtBwAJTyrGowGVPNvvAe1uNRnr4fPnouLYJbuFbzYCnCsprvzZ8D2HxroJ8o5jxy",
  "key28": "CWGV5GNEumSizsyKXczLUHsXQspnxCRmT5a449RTCEB9YQUydZAbACMcAJ3na94SNPAY5F462kFhn9DtvsaNpXy",
  "key29": "31ah4QYtfqJy6icZgMJBK9R5bMi3waCy491wUNq6eBJhBeYEG6T5K4KXRGzcdWwujskZ8BQnypovJS4GbnL4GBgL",
  "key30": "35cFgGnfTBEv7EugJS2rGC5mgoiKPGgTApakGAip2HKyBANavoE4ziF2N6yJdeDxtxgdDkAotavKeHP6va54F3s3",
  "key31": "5xkJrscwCXWs3TD1s52aCQCax7SmwvXuTaAk9jcRenXMwX6BVAXJh8v3N5nVXLhng2Nm5MjTiRYY7kAPWSY2wRo9",
  "key32": "2MC6CecF1SDMU5GLVmoK5pE4wZeppN8xRjyxnBLjQR14VFbdquozEzwimmdyQNSShwceMi4LpTCwcMgpjo23TwSW",
  "key33": "3acuVWvQcRYN7tRVtwwTgnLmo14a1gTPMxDAWBSe6gKocKcg4RWhtCSttR6Kch5dk1U8FXLasBCDsbvAfb4yQFbz",
  "key34": "4qko69iyfvSHbMXLHYFBCaENWkHzxzg5NKPZsm1SEYBxJnRiDMnXEJQerWa32nt86vLQS4UyL4G714NgH6PP6j7z",
  "key35": "2vcATHjHPaRGKBTirKAfHhzoUNzUXNj3fzMaZqQAHnFQ3HHXzMv6MwR4jUptPLzMF7iFcPQuwfL4rnaC6pjVzxLy",
  "key36": "5KgwJDZkPY87K1du6opsYimcKNxSMT9hoGyXLr81gfkxEFsGVgdamCs8YE3y6QbeXHsFrhPT9acDB37fnnCrL5J5",
  "key37": "2bD2bd34LbPV2bBBtfnu5J76FiHqg1Zs2aXHpHf4RwjwCP44QLciKCniGyzDzhJqRK63JrSNDMZgxEKpqnY5NzGS"
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
