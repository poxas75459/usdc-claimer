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
    "4cSHx1Q2jRVvojbcaJvKeUJBpkS1TrQTdQsWaVQDaLkqMqZvfPe1vNor4aJgcCbAUEuZeN5wvg54fsXg9WcvcjYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44oeccx1NWTdVBsizCEKBrcHK2uKFdtRHEMBCyVC1ZQzu5x2vH81yFdQdTDMaXN8EcKyrZPG7VB6gsVHW4fa9JeH",
  "key1": "5b27eukXdBoYHrRxitBCbmHsUxTiK7ss76RmXSQJFKYVQGWVKfNb6C8644kpKqCC5QPUstZHgV4SofUv1XH6zQsC",
  "key2": "3KcvhCWfmUdVozvDYBhm2W6NudTLG2YBJsvKxLQYircNfZteqcbwJ9475JnZLFQ9HUYfcPEMr8ne6vxGWxWbhe2a",
  "key3": "2cZSyrzyQfJba68r4Woz8c7RJSyATx4hcgWgaujs1GxkvrxfNnpVTqjjifDScrVCjF6xn9QwXE9dU95HsEkyQmkH",
  "key4": "46ebYYDkWc5qmt4ZPWyJK3hZzVS7aFMe7E7gvvgbTA8BkF5U2E55y87NFovv5CRkJ8LQ9DwtVRiLq6s39uncFbNd",
  "key5": "4yaDnnCmbV6NiNJQEdMZuqJHf4YMThUzPNiyrZBWQmYUSK6qyf6Wtme5tvAGa6rDuavVhJ3x1XFSdVyDWXH8ehHh",
  "key6": "4JZmsDJAup5wvZW82XJCQG3upRZpEEsToSrdiErVS6FdaivWfPYYL8ucmx6WBpmJbAyNhP4C1qSXXs33BJ6pi3aF",
  "key7": "3Lz2vajgFobqzb66oEyKDgYdA8MtLPXFvhC8rTVZnvHzyrNjT1uQ94QM7CWXo5Pd9cRtaFVSCznbk3yQdsoVVawt",
  "key8": "2Z6giAW3s89RTVesihuqFHNnRz5gYALKCELgUNz8Uwqf39TbEJZUygri3HN259sne4EBpHxYU7MtAjUNxFdPqMd8",
  "key9": "4A7MYP8b4yegXZEcKQWPBqaWCSVD86HqNxKcUJsd6TBTEcyibVAM2faTdxRNcQHAgipMEAqaA2Se5MvJvArTVHiU",
  "key10": "63aBNZCPCER6mESdtq962rGoH9djQbyXvX46Mh41LQDnt6BETGiUpC7j4jBwVSTuzPSJgLhGsJN5ds2g3b6cJkbk",
  "key11": "3FM2TTgqxeC7RRPCW2wnjxHAXaGYYkEdX5qh9eX7gVSRMQEL3yKJkXmHk62uY6JFZmjuA3vxJdtK3mgT9MbUEuTw",
  "key12": "qGd945YXtN6NzQjgWY3cguFR1SrEuYxv59ssqpmnJiNHz3igMGq9LL7bNFeeJAuwRomoabpsPcc6pXocGvPxrUg",
  "key13": "4FYiNXh5XP6hcJhJr8GwFuE7Mi6ZrNboBKs76PbhSUfjWBLjHobZXb3dDMdZdArbTCBEVdfrh1tLnrBMB89qvi21",
  "key14": "2pCmzw4bx7BvtyXZgZNCL1jKYVE7RtrDmBJ8Eyoed8aU9SUiqktHN4W6q43yZEzGLLtT6xgvXmzntcit3uFPmCp9",
  "key15": "22GHMaZBDm8K64P1qeCV9pGXVkVry1UE9kt6cdF2mm57DMg8oMNh4Q4wgFEJ1hbKWHAN55tQZ728PNCPx1hf7B1h",
  "key16": "3QrEYrUPu7ph354A4jzTUbijng9ekM5fUDqCt7Wzxkkd3yFbJLG8AftvXfTZaLyYALFkyKc3wNbpg91jcddhToWC",
  "key17": "5Qz1AYsfFnAHceTi2Jw7M1tnHfsygQRGdQKpxsjfi9efUyXGpxyQYL4wgR8CrX8N7erzZ5De7eK5D1DNjRDFFUgT",
  "key18": "5NnL8uiBp2oLq8ueMUQYWkKLhnRj3YaAApSeczZSRRv3QhH558ofzmRqCB7p7BhmYqJh5gr1okhVbH3baSpG73Lj",
  "key19": "47DLJzDwRMuccC7NDtVnLnbzDPKx75HagHSW7roKjiiqVqwJUNwWkKba1Bi5W4dj76HkaTSAdmwVvxeGVXfhL1BR",
  "key20": "51GiDHkxBxJznbDirnQh5My6Ut6drZ2rra6uTahanuyYnbQd4LRZ5eF6BKP13r3i8VeJJVexgcz5aS2dBxVmyDrp",
  "key21": "47tkQJUjachJX3szpwtUgSMas3YnRZX7jmNciZnrJsRK3B1WtZuwZu5SpPhdg1iQeH7uREtLJkpqcMo6QDM4KfiX",
  "key22": "cgKvY3Dtmi32Gm2fM4XenqMzQXT5bJP2gWjNxuVtUzvyGjSLnPreVKsY3bVA5e8YJDZUemhqnpAEahpb9KhfcTp",
  "key23": "3ynZe3Ce7Cdcymp8aAxjGQGzq9Pud6ZjjKBRhCrxYMtMuDrmdroBsL9hq87P89nE6cXWgnxQRAmMBiUQkDSNQ3RB",
  "key24": "53557qTXRYkDFYYL1E5vTpUPqer3xZZE2PFyJKqP6s7BV9VNR3c248jaWRtzpuZafgFAccujXRQstJocuM44a6Bb",
  "key25": "5zEkdJhPGdiUB432aG3d854T6AigDMBxCugnPKBgD3Prbi3GcsP5VmEBTW3ZSx6fsYf88aufkvTP9q1BGhkm3r7g",
  "key26": "5RkbyEHrnxZftPqtDbcYGyp9bz2zYThtTdUCqzBbyfu46BXN4Kj7UoQ9ArSKMXEea2D19tL8xLrdp2SdEunwMuwR",
  "key27": "oSVhNQzhypeFZeDWbwV3yBJpy1z9nNtYPV2EsiUZkHpqCwsnLR99ZDkq2a5cT2ftS2DfpyQz5L15JSTovmrbKBD",
  "key28": "bSh6npFAwMYYHEU46ntPdqbVCZfFK5E8GkjXwHGxWcL59RE85FA6LPD5Q76d53v1VMfxts3ipfYbLsCi7EdZqun",
  "key29": "5KA8MN6KPNPWqD5joMJu97WqhUSyjLCT7ykNjqtaN8715amqf8iSMMmxpui97Xi9dMLkSqz1mAnU3gNKW3mEuGtg",
  "key30": "2MDmAtqNtZ64sU7SMoAGw1MHoowHhgtZv65TddjBjVzKdnYjhwVKMWp1VyFyH2bLYVMSLeidY3FksiuAbgRSn7A8",
  "key31": "S1GYxiQp5y7FSkLyzfAdURPRiGjAXic2GcxaS7qcek1KfN4unAFLxX5Rx5C82KSWuG2XoLwHUhbHmDEzJtYQyHJ",
  "key32": "48s94SEyd11upxyGzX9f4mdV9vDVL9SnMbcRmJ6fkfL3tQfQaEt2U11FuJmfv12nRMYMcHURe85cpzfRwJu1h6RY",
  "key33": "CMMszaQbpMHqzUU87Tri2hVyvUHjAyjvibE2vYt9UaQUja96efJCA48nH7dFAJrWNyaTyRShMG4Mt9YGV1aoRHX",
  "key34": "5CwAzFznqaz2RRDJGST8w9bzjPPP4bp2cnLL2sp9F3X6XPXEmk2XjBLZgbdN2jGCkcshPCJvipZmx4oGaBKCuC3L",
  "key35": "4KkksqnNd86qvjrAVSQwbjeFTPdVbf11ChnttrHPRm2X5bBdenJ7YtDkk9PNAuF94mMLbh9ZT7QFJmxvhygLCCif",
  "key36": "3ikxVxxCgBPT4PpFTY5x617F8PFhnPuqDSdNkTTtqRLUvDnWehi3MkECSqv1ww7rYYMZEkUtBkJmUZB1P95K7Xxd",
  "key37": "B1Nmvdj5b9kFsaUyJcrpB8Q6h3JniD2pxhAN5zGzuQKNRtDWnb537kUmevMZRvxombfNAipqZnxAMXw1dVWfBx9"
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
