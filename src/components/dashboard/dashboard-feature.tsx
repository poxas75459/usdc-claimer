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
    "5RC2UuUZz6fkTNyfPmTFtXnpMEjE2hGvydH6W6YbNCJVsr3MbD1XfkmFAFagSBMeCbAK1hm5JdWPk9dw8899APC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vLbEcF1wg1GtuKmdpSEZMAYPqFktANqgrtmH54QgepRB8i7jKx24YF1ndxv3zKTemMG4xRZqwyLP6QN9PPPsftZ",
  "key1": "4LxiS6bk6DPsWhk4Swof9SKGDrk5zLErAjHUtFtTqP1CcpGKQggSeGvybvkJiVqea46hS49fewup67JJbQ8UmPS5",
  "key2": "5NYDLJiSdSDBrVtHuh4BBV3iK9Sj3P8VbyZUS8YJDC6MmKmjTZEB1UjAHwwQThhYE2kuZz4qJrn4npFP41swjjVH",
  "key3": "zy2gVoxRB648nC61zwPvGjdjj7w6c8x9pyVYQnoXorgSoNyW6vQtHtvBEANhGQFpZg4i1HFNYu4ChRTvNXA2zyL",
  "key4": "7fpSH5LbWMwprBPbHYx6ZXAKFuVrbb51sWLWMzoK49sda73yyryAPuGeyVkpAuRgoueYhCqDCWEDR4pfAEEx3xg",
  "key5": "4Lz2KkbmRiedrB72eU842o5ke5NvrHfPWsKgq8Z1A57dqmsXvPJ7ajJtZwYfqbReNvAvpekanr9AMj95uijQc9jt",
  "key6": "5BporCRoXnfyZFJamCmp9ShXwoAyo7TH3d8UawYMEp5zpLzgMK1sdN5qPWyRLUkX5aENXveJKSZkyivrLBWU1w2c",
  "key7": "34vZgZdcfabLWorpZQZ63HWNz72NxuwKY7aoXp3n5eYADqTEaNFQ1FuWPwSWbgZ7cS6yF9vvm7oDkQcpY4ehzzXd",
  "key8": "AWN1LcKH7KjmE34LfQ8LyiRwkvwYqpUMtSv9iiqfDHMgJDqjKXE8vbLPS63z9yWUbnSFjXU9D634yo31TSxaKsr",
  "key9": "JmkYQsFYpMEL5yaBmzq2JpTQKPjBexh2z8Cr3rx4qUcavi68eN9o1AHu73VeFYwYz9ktiT6yakNhLrNdJ6kwAK2",
  "key10": "d5DU5xJt9J2CgZqTVLeAGDYSZ7GGANoZscZ1i2QGoeX2AgfGgfFm7K6i3BD5S68iNZhzeFTuu7rPCY7AX1DBiAX",
  "key11": "5EQV6Lo5YG8rBTXNxXph2P1JwoLvnfgaFEAhZNhe8jWwW7wktHfd4H6EBxE1ESkz1pdk14XeoV6GoRonByvzHWkj",
  "key12": "mgJFqVUuYs3Yi4GFvDJG1GG4UN6QRA5a9CP6SC7zCWWPfvQ7AjA3DJp44Pe1gvv8S4ekSkL8T9bYKXzhcgLna4Z",
  "key13": "2MuUjYPUsru9XgdVFcZ2KJFCL5gzQ36rq294edCawKRSSJmjWSYuwaaReT2uvk1xmkqCZsyZvqzUhjFteqUxfRK9",
  "key14": "LsSi3BsCzAc5WUqsSYbD6bnWEFZ3HY2pzzUeGSskjFxVBgwBfsvSjGXY9gKhf9qpf5hGYMkAS8jqRmJTW5VFX24",
  "key15": "4EGyKScZtKYWYLwQWDMJ6ThvKL4PSefTVN1D5zwMNNExjrEzFv2MGA7tfPMce7jRAPWP39TWsunWe78srrgXkZNT",
  "key16": "22FTsVYxjjayaVQqcniKtxzFo7v8U9TooYYQBX4F1Wb7PDosvG119hZgVrsNdvHb1Ay8k53x2xhUuea2eWb1yKaQ",
  "key17": "61QBw9vWHKWU1x9QzG6DEpqDVuvz3f83iT6uLwCLpczvwJsR67nvnyJzXrLLv3Q8HmHvmDfKKm4AE5QGS6iBtjLW",
  "key18": "5qjnegzQ5mbMXbXd1x4fKJEaH1QvxuitMo6Tcqm2vi8758vARVJHe8oNZdmRH8TW7oQMqwaB4gZPEhAqum1iQNdW",
  "key19": "2wuVFwHJkDsSA6Lo7zP6e5rAMQodZxFJ4t5AkD5ftNAiYUvbn877FHyRqppigmsgdb9LrPcE5qUoqL8h613Zw2PQ",
  "key20": "eAi5rXBNvXmSaLBZ3QmDNF8M6QMFrwwF31BHpqETAhLYSXkaq4HdDwJ2BTe8D3QEmB3DsN2mL8zotuj5T2eVjLe",
  "key21": "4PZfWBt2rNhPNyZfuAdefnQayRFbScLiKFJ29xn8RLfdapf19ae5qsaAFWJSnCyvW7PbZLQCbkAeQEFE7d1rKdY1",
  "key22": "2tgqs4FxD14J2AHBrgXwFjmxEiUB5jbNXZr5GC3SXYvMncCcqH7rcUrXUEXHikpSHKrduMR58ruU7AvwMuMX3g6Z",
  "key23": "2SsZGZPkAbU2KhR5xQkLcXVorABwVxj6L8knEtHcAJx33s8TNzqBv5GSNJiH3ytEmzNFWvm7315NdrxycHQc6JFg",
  "key24": "52tBbL3yL31QSaVNPezwjJNtGz8uTMNVLkhQqXCKUDMmDuBctp8onb3PqtsDowc2amkKWRJGoVWesKy8wh2eewHQ",
  "key25": "2HBLCNMjGN22DhiyS9reEKAHhzUVhUTSBhYzgsMe4bTiN5eRbcnGY2upbKpfnUqDgP7KXRGcnugPh9QrDJN2hUmB",
  "key26": "4SqncPzenmpMrmHn9LbqZyKncJSnKAuNTBsupCrdQNQANmZvHdSAfXCyr7ryVkMAhymkHqQcca2pHiJaMH5pghtj",
  "key27": "5VCyFesuf69K25FftfVFyjTtu3UMfqgDa4ooby7QVDwTdKuZEB5ovynveHTWT1Xfyfk5psDXbGcKEvBd4ok74E92",
  "key28": "3SMT4R2eJG6MegzAe32at26UCV5bjTEvH1MKriuhMjSZuyauJkVQgFZSnX8B5vJgcDRjmKAV9MWwhAReAnburu7G",
  "key29": "3Bo1zLq6SLk81mP7gxtSGCW7Hvh7ASEipPndia5pZyttiXmSHtxT4MSkwaRgPCBwKBPfkxFNpuaRXVFNNUERub1y",
  "key30": "PQX2dzxX1d7XrxfekJYUNNgHSWtmja2W7vbpy9fdTkMQTgKp9DNee6uF25tGLUPtXD4Ks5rkq5xwh593hLZ1pyT",
  "key31": "3L6YBWAFHS2XRFw6bjEQRGv2mAnwoEgsX6JsYzxkwgEGVCbnPcnmS1NZoUiPZaocX84NMVVSSjvoay8pfEsRm8Ji",
  "key32": "4Syk6MhiPN4mE7K5uB35T3wgwcecgku5XNmWGwNiacJpe4fRq64HG4hdtbzQ3fEvF8t74xwms7pfx8xHV7DPaox7",
  "key33": "3V5bnPSKNnnQ1KiFWTkrdRxaJJZzyG7pHvkRxJF5g2QwADXEbhqXrb6XT5KyTAfmdsNEyN65sJAs4Fe42tBGZ6ZB"
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
