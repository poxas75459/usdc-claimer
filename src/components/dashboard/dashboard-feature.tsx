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
    "5tkSMjCgLZZ9tgeros4yRoDSg1PfrVfhr65UQszrHGq2iwb5xLecxCeFeoNPGpQumxMK3MCfG4cKgbgcWDrWuxk3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cCyuFryYXUT4ZYzYUYr8Vd8N6Qr4RD84PQ9ABC4FW1XaEtECR3dwD8Pk8fN1nFAPJsmcZ19hRhBQk4RR1CA1ZAy",
  "key1": "4dHvdU6iFQXLn4AjkXtZsBqjmnJxw2AbuurS2LFmXtkzbC6X3Q8Fbe7TBHohtbA64Eh8nQWXDE8GpP13TyJ8gDQ1",
  "key2": "XmJgVjEQvTaopcdUaojmh5k25qbcUw5FVmcGrptF4Qh1XdLfQB8ndnTAHcXXsweQcM9Jr2vcHWsTZFR2jEhYriJ",
  "key3": "2HLTAL3mFmutNoDiGmACPg1tE5GfQbektedcpJonXicZy37QUMC9BNhLJEVTt97NVL65xSgaTWyLCSRhQtCzgHau",
  "key4": "WnDHW32FjLasxAmVKer3dTYT4XXjSm4MQDNsQDqUxrjDmsShFkZsqWxv7zLgVwNo1b2t3JD1CnxbVFYSge8KLGF",
  "key5": "5vGATT3vc8cEpBW2Q6ZGRytVPBYcoabcTbCwvU5p3o8gQLuQoovNGXyeEsurF4SB2WtcGUwfqoPNuHi5GW6rjvJA",
  "key6": "54vmDkfqXacDFVJ6ikRXWyAXAQWDfeFSkDfGEXgBDP3YjBBsbuEy3ZtQEv52JHbSTvaZRwEm5U97qVBLCwRctfiC",
  "key7": "4SxSZZ7nHBhahwhB1WWcdguheNKspM8sfmBicV8sWtMCjHx2modjKevEE2QZo3bdh2J2pUZxhvY3FfnoDhhyTL2o",
  "key8": "DWLSSZe3sYp2eV6w1wPjyGDYueF9NrGJAE4Rvp78zg8hG6Zq723tLm646E3BoDSHGspGrRXruzJL3Wz7nrEbKcY",
  "key9": "27Pq2N28TQh1gtF1wDeze9h57HuEXncCNEBSYs7eNfNwPPwsVK2cS36oJ3jbuUhbnYBhxugY8xUa1BgiwuDhJGpW",
  "key10": "QeNfkbj5rGkSMSp5ULa91zURWnWDjxewTVvyrKujnYWnJ9cYMccvSSwYvTG2KxbErhDtRmYeH1rrdSytBWxQ1zL",
  "key11": "38VzVn9jg2LfBsZDh9in4q9PTf11Lywkt5uqhR1uEW23U5igUffJ1xd5cbyHtvnKoHemdYWULzAQ9i7NKj1rt91H",
  "key12": "5Sqt7dwDSWQJoUb8TPrgAyjRuJiNVuk3ctjJJzmrGEoUdsLq6qYrqAPrvAmMWau8DjWwrZWZzwwFRke9bkc29PLy",
  "key13": "4cLNdqFoDRAV8Bizes45t2QUsPH5CVZn7g7cYJoqmUWitWkgX1K9TaneLxjZPEHvfEt7yPLPZVEcWZWRUtK69WGY",
  "key14": "e3ACkWjwdSku1fmeYnBQsumMn4UpV5NpwnnY8iRTsYkZzkgCvKmfPbovgGxJeYHy7qnUxbpLT1AXck42aGGtdv5",
  "key15": "4qFBYHrd5NjghJM3z4fYkcRZ8QxE6efxJXo8KQDHmH25PnV5R6jqVTZbvCdx9ze1gBJP7zdjAEUCvCc2nHoU4iV9",
  "key16": "EF27T2wanan557uyYCdmt6zCXM98vb4yCJGs19ef1QMLwn2soCWPiYdQgH1xj8AaiugyXYxdrsKdiPjrRZnisyi",
  "key17": "Y7pvG19TVqc2pC74SLKjz27xcDtV9CZ4UomPe62bzDGLqo6p2iqyja35yJtenQrMo1LCQvr81Pt6RYoC8aYNusr",
  "key18": "4gnwUzP2EJVW2BoCTfvek4Drx8otcArosu7hyv9SYBTefHSVh5K45FfTN5x2f48jZR55vDuWhiPdcMzmj9rU8xbQ",
  "key19": "5vsAXbPeXi6t4B8ur7t2eCZSRVEnDCWUvmX5ZKw67urDmoVAV9xAfS5E6oKJodAJPfdqR6VC7BpRUZBnQL6wvJDP",
  "key20": "4TmfSNTmuEKYcxeUaurkGvpq7iCQdwtQGXJNeFFb5TPnqpJyM6eLpNn6out3FJtxdxQyPq4Fd7LgpQvBVanTdgUH",
  "key21": "2zEMYoS4y46FyupQLKV8CdmqEi6EkpDmNoSYxWpJRJKX3sh7iTXJ4e5gnB4Ltu35hxZGECB9QavF4wsw5Mfjy28D",
  "key22": "5pjkaogCsep3rjRwY3GB6MHyE1DawyXXyqA9X8tGn5vXs76PpnQja5KatvPkz8WBtDB4xDKbCubCq8kRF3JECY4v",
  "key23": "48UdhwPwvakeTnT1J2dj5Q4ra3WGsHuA4Snox3e9uZUDkDZpNJ7gqsSaCqGgm7G2gAYevA6NmKGg5AUU1EMnS4FQ",
  "key24": "4v2gDAZmXtwG7hV7R2DgNJcFuPhMcbbTUvy2GC9GtPrD6jWkUdRD1Ygu1fYz1Yfqo8DUUs3gdcxr8AexWCEbK9Zm",
  "key25": "4VgqBwd6ZsVsiUxi6KCNtVifvojboxBe8kgKyKvRHyqZaa9h5Gc9vgpGsHiLEF4o3FACs95PKRSCYYmwdGvrq7Sa",
  "key26": "2RCFbJnnUFQ8jL6QdQcgR13foNLHsaDscFXiRRk6q9N32NgfZrmbrXrRu6JtdcumUs4gmmEH54wgsfWaaZbVpBW4",
  "key27": "4ve7TMxvCneeiRwPdKrwwUuqDpub89Ci3ePCkUVv3YyTFKBtAhEAy9c9KSJyXwUykD4z53fjoAjuzENaPBqqrDdN",
  "key28": "1jRSqWMmtThCubieXongWufd7vkPEw2mdQuoQqNV3pSeAF8FLSyQKPZ3fKfnwb837459m1zsy9xhzTQEntLxx4j",
  "key29": "4NvdiLPsViL3CE1NJRCFvGPnSUcXXbX2tf5BuuA2ErzSD7E1CpqNJHZ2HKn5gjf15zrQAwRi9DMBXWzqy3rukYfU",
  "key30": "4Xt7D5ZT5CdyLeLiPGpeJw7zJbwnPtJKbJjS5qdJmjkugzUS3XWgAbeoRnTLzVSZLtbkcNPSWQcMkrL6Eh51R5hP",
  "key31": "RjwUJNPXUt2NYKCfdXG7LSjtnTx3i5CRoZQwhcZhufaGbNeaDrSo43rNLzdmceS6w3BGDxUFULJqxvAUv1zyaWc",
  "key32": "38Med6w8e87ZzCJS3VSSFXd8mjU3fwnzjQiS4qB3HcujbYgB2HLWaxFpiR3zjjD1cFUdANNMDFo38KNUF49Ho3s",
  "key33": "4rv3WybuPWZHSN7GobVLbKMZNvXN23NDEpjyPwn5ELYY28Tsmk9zaAqnnaqC4AsrvRpjPVP9ouVBw7GkvnRVsnYp",
  "key34": "GBQCsyLJKAfBVaw8xwQBSkWdKSp4pEnWJvVbzyHz76GFxuYnQRpaEkhuyzEnACgPrisYwXdaQczmpwc47jXqy8M",
  "key35": "4ruoQPGuLG2J2MJ1mwmS2Vo9xx67mv2G6AKuHWRvxCRb7ZyFwxFjuVSx9NWMRihvhScZuDbRLxG2GCHuxJBso486",
  "key36": "2XR2EHhu5ZrULikEq4Dxmd6kGkU8dnBNJwPJXP75vX4YyKZQh8GXtZ6mPxqwbVrhCqjB2H8LtyAzUPHBUmwoW7oc",
  "key37": "5SDUxzrMuRYnRpa6kx6e7aRxoLGYrCqc8dUX3BaWqugYoKkpxpmqK3cNzNK3m4k2GKuW17zsP7wJY3pSkzygy5Nr",
  "key38": "3TdtrCEaxo7zWkkeMcJ2PkNMhXzmQJt9CNpyyyttDMFN1wquqtWsXBKvXP5WFM59emabH14xZR8f7LdRjuwVhTV4"
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
