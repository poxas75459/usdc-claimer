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
    "55TqFs7cEGozNKqKwCzBa5XQhyvJr82KugvLWWRH8SX38n24WkZYVChSsqcqfxUYfu9GULyHEv7XrkLTf3BZkD4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WADnewvuHcgtm5rc8x7UiNWmPzMzBVW1i26HK6gqoeMDpMAf6B5PkxDub61uBcHURt615XxqhBvwtgw8X5bDHc4",
  "key1": "4HvtMsoQuZtGpQzX9NR6kaTPX5pcPMNZdzEA9ckEDMTXBQQWJ6mmqLJZbx7exPTJoFgNEopLb6GT8JmrKowLNubu",
  "key2": "2UunUbX4B4uhGd86kiGHH2fJdRSrMB7FC4CZ1jDUWpjGiUEQ3GCrcSY25c565QqabddCXjX5DXufHeFDLJoyczwp",
  "key3": "3vycnJgVKJjjaEmhF1mWweN4xt2X8HaKF87g2HsoVeDTXjiaj3iziGFPsERtJSJzQ8Jb1rLU9SELZ8zmD9KLb2Zn",
  "key4": "2rFL4kEuXBJYgmx5ioQoFW7HvuQBoix98pYgxwY6VJnYCAAYnpTYsdyoaJKPwHd94CPjwma77jfZhcWMFwvYSxxC",
  "key5": "3i7rwiJrWNfjWzmyMjA3m5Qu1M5EiuCpHoWRwGu4w2vwZb63BuKkJiuS6bSnZ1ARfB1kw8UCZfBxfzMnXcDQhNq9",
  "key6": "2a6WtXWqtGbCVGYn7uMCvtUuJqwFgjRrDrcLqc9LMsk2dfJDVCQphG2Kn7NfVRHwKYCBvZaDPnLPgP9265xsgMaE",
  "key7": "2xizaFHzgKvrGwzybsB6a3sJs2CDYjEHe7PBk2USvTbMXDPDdZYeb8C4oHdAKja2tShJHFgoVs7Z67LBEbXZH7oJ",
  "key8": "iSqujX2ntC9o67Y3NxPYybku9NSmWgbvcwvawmPD9QbAFNZ5ZGP6hoZCctM7ezdthbAFdLeATzcYpbfkffPiYEy",
  "key9": "4KoLrtG2fWr5yfhCoWBHCQ7rTWyAQaBVAys3bVvoWvWQ9ZPCHHV9eb2S4DwDViq93dV3owQZTjciMC4UAsQgAW8u",
  "key10": "5KDQnVfoUnUNNAeTmDbYny1GjqKc9d4w2p13p9s4AfAjEzW1ft96tYgub5aJ7nLKMXMddMj3L7mC41RrpHGqNcDU",
  "key11": "ox48N55gyPnFoci6kmSKf8ype9kXbsm2fvUEwv41u72SiwiG5NQevDkGZLiKQStCwpDpPGqqUTS8DYVah2p9jjX",
  "key12": "3D3nC7SaxQYtQNncn5Hp4c9Q1wzDQhZoycgcL8pSBRP5Yi6r59THusvQ4AoXduE6VpDMu32Q8nQGFPSomuCMqPYD",
  "key13": "32gajzs77d4Q5J7RsNQaiZTxgWfkptoFMjMF4emw84s4cH2m88W9vpqi4HxaTov5Ng8RJZ95R46PcapheV2g5P7j",
  "key14": "3F3jS51iw8bRYnN9FzUTwRoQpfSWY2LQMzm27c8WHvRyNWxFZN9ihej4o6Xykd9N5FA9bcYpWxLLE9tw8xoobAFp",
  "key15": "2rXMSo7ubA5CK8m9uUDv7DQubhQ7AVefrqdEp6wjc8mwpbweHj3M9YgKcezLbVFoLbKidSrC29GEpgK55qF2KHtN",
  "key16": "4FqJKrLCUmQypFqbFycrk4iNDFm4xrj17VBmDjf4JrZSURsyG5hne4YXgqNmUdfDSHXGiATM8TtEZ6T7p6nSNuuE",
  "key17": "3oJ43CsUJT3vqRyeVTGymuFDxsNPX94t7BQf8fgj99fDNmPt2j4DCssYADCzun8n1YhqMPizBCFd5CyjEXM8ZP9K",
  "key18": "3qnu9FGNvDDHUc1gtoPnqW37a6JoacRToB1euB84g9fuUhAP3GPBdA7cLZFpKKGUSufBY1W3rmd6SCp8sRfeEBZ9",
  "key19": "4joVcUp5JnH5zC5rDHDTEXpXcuETvPGGBbYHcv7VcvdUXLGTsbTxV3dPuX23iAQ3crU2nWTuvFoZ48jdpDCC4FKg",
  "key20": "jNbvV5YfMrWxGHwUWrFDKw9pLBB76J2aYyhWVVSSrVvpNktY6HEsyBENaVJjeX18jpmM2P72ibWizykn8LFAqFP",
  "key21": "5itsXfqZBLbDaKduhJHtThU5F3PUgM47TEWihN6gyGrbmnurGeKzd77q7VtkzY8b6M51Hb74FbMud33bThJnApBh",
  "key22": "2E7wbNi8tQuydy4FUww2JqL2wgejq93VNhqSofQg6aM2VmjpWUs4XTrVKMcj9dY8a6Vn81ArFmxcWVgS2ja7bcAi",
  "key23": "wmq7iXE8pmr7Rx6r21Q5GHaQMhNaxDhsGWgHPAJHN5m5PZxMZcsdGaEjMFTWZP38rVTtmaPomTitypvBHzLKzCN",
  "key24": "qaxjZcyWWorNvRyfNWj3GgdREmkHRMcfAckJUUpWPkR7bDqPHmwR1KFnCMqy9xwPDLYRtX8MdQxJjnTbHjLJjiw",
  "key25": "3hBqGev9CKn8Caw2mo9pwF3bW1v1vxUfdbPDUnX7dKJ5pcfLJCjoERm5BkhvpERc1W7u2wBufbYV89Bszw78hmzP",
  "key26": "WGMWhTbpQCuibMEUhNCzmHQ9jn4xx8dFw79zMy48s4G2hzmjkdQBmzvMqH8g4TJzATktdq9MsU1N1HWSmJZ23zr",
  "key27": "575TWKQM7dfBeE7sB9NbUgBtcVSZYRLQTPvU1G4j8KCno9hvnStxkwGbGYcze7w4oK6aCemMCRJdvy9BRbA28BjD",
  "key28": "3rUoXD7QGxhk8VFKXJ87jANAPWyrxBWtsQmTrJ8pANRHiojS8pb2xiozU42BewrKF9UhNY4Ea6yrtG1JWrFL1Nvz",
  "key29": "3kgU48gaZDxWEibajepUSapkS2EU81TocUDqrANoqRFABwWRYbM2Kw7cSi66qcCEqWTyF3HJJgcE89A6AR5tyxYq",
  "key30": "3DEq1gdfYsJucaMwWYFfr2q1e4Zutj9c3Wfe4onBGHWiGBs4ULKZFT11L9FrLHv5YsRBuZU3CzTu7zjbnUoWM2s6",
  "key31": "4Wm6CrU8nEYpz394x7fbLjhp5qD1xWUVNE8obBQgP5ibfD7U8C6UEMh5iqMKFPTRDDXMntMm7n4xf9unZhGiJLR7",
  "key32": "2XzBUKG4ayHrSzftFsjmyyyof8tndBXT4QUQHfRSrCtxX9WQfTmVdfvbWU1pfwDBoTydh6DSZuTU3FAH54Bsx1pu",
  "key33": "4MBJh4KY4uYiJ8b1sxV8ZnbbKLUqgQZszghrifyC3xiWTVuvzcbktCrtGqcMdFKfVYgKiVcYxgPcQENW4dK9r9kS",
  "key34": "5UGKu22iSNhZH4rUuCYQWpV88XK1H2pHinWUEPLoQ5pK65jeXYmZuwR4vbuyedWtBN4DAyKbX3mmNjKPdBXRvmfk",
  "key35": "4GYvyrmPfizvBhQcgTsixfhakkqaBM4WSRURMdD1MBZ867EU6uHWWpTyZr2LP6upKeD8LVmPmVC3jU6YiD2urZKX"
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
