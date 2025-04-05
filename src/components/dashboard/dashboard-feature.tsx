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
    "5R9SXD3T9kULkWT4CKf6NZW6MmeCH21LiSnAdzdRtxE2wDZvd6mxGUK1DcG8UB8rTndPYff4KtvJ4rwtuRRfKWBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43jHze3aEAy3exzEj2TtGL9QEANL8927TSX5FYbKGU25FTgXajP9VG1eHJsanVWKbcgEKuyuy7yFK9YidYpFKVET",
  "key1": "5RxUCZpVnoEmnpRApivVjYxKWrKPRugL9XkWFYmAiz9wL4EhHBZJK3KZQSWAPyuhMSiagRXQztVswHgbaDNycuNX",
  "key2": "2i8W8ArxUgsdJ2csUUnadPK21hfS4gvsbRa81u7vEQoANCxvw8PCSvEYxxeTJPy9XXcM4pq8cSuTTEZ3teD7rJTJ",
  "key3": "52SacEp8qkkGpTxCdow8pJziG7Z5tUaACaZxqo5sm21XhLkmy2WprR3SkNRLyY2YGWq2GiKFvyiKMX6UqaHHEpE4",
  "key4": "41iykYYLnBnCm8kA2tk47QJMSksrhAFqdNWfnYUXbTPppXoYLXs33Lue1QzcLfnrhAcgiMV6BrcAcAcLzsVF333o",
  "key5": "2N2ix9VnwoziTkj2i67ZhCy897tuuuUmYJzacuyGbvJMe5rtEJ4qnzBHZaMzVkYkoAhsWiW2G3AvwbKUmjb8QyLj",
  "key6": "4JiP8biP727kyunQWhS6y4iYziRpjnF9uniaEudm5ZHYBxA5mSJjfRbsfvxLdoS6xHa4h4jQP3d4WctGUFwx8Nhb",
  "key7": "4xzpsipA5yrHygRbehovm5G1kDfhAEGNH7GfqqZ51quGKEaZE92xommgy5XCqEr7qojUA4QRkw2HHDCvNbJ9AVyw",
  "key8": "kbpagU7NQ5ovSTCFxGVhiHYRvMGar9hqNbCvKhb7rvjLH8hz6o3Dhgb8jQA9GQfwpFd1pifT5M7UWNTTJZZF684",
  "key9": "DJSKRbwKFmEBqUBqxG3m369ADivdeDTz7HA13UsCcwobQC6Y7dWwWrWLeoBbyQ6d4joo2dbiTnqq9GkaVPAg8SY",
  "key10": "yN9C2KNAQinsPBczD4BTq51JKdJ39XursKoAjRiyVsHAACtuEy34D2nb5pY4DYFTPBEL9ZyvUZ7BZikye4brmsg",
  "key11": "2wV631JADtAjv2RGXYoDttSHjhKgnQRRU2s4U18YFg2qREWQiB8ZrsgC3PadmkHBJo27ty473VQsreZRTUthNUKT",
  "key12": "5n2kqs8GXfo3gNqUsWwXL4xvPRU1B2siPYooxYVNZBjwYqLUfPhRXU2CbBvK81CRa7PCuakFu9yjhqGBgALNyWuw",
  "key13": "63PLWLbGbn8zMRbFw4qCie5ptCN7DTkDqSEzaFhoriNeDuy4BH4ydeiLjfAPCa4sqUtdyx3TfgvMNab5wtNCyYe8",
  "key14": "hJVzittBVGfz36CWB1UzT5qcaKiisjFaSD5ebiUxwTRJN5jHSkNtCb1pxACXGv8HFW1HFkVKjai6wMGUBg8TvLy",
  "key15": "4Kco8zy1cUmu9L1vGmmxNg2zkUnyLmUh6M5BfcMuxkcsmhNcWjKVBU3Zct5HZaWAz29DK1ybe4E3d2xBe93aatMZ",
  "key16": "368mwHjVeAphZYVfmTvwd7EBHj8M56onZoT7BvmLEHYaqBwtL4GKF95UnzuCqv2LK9ymB6jeRDaTkySNmyRC8MCH",
  "key17": "2DZMeVkNk1R7rzMQDHjpoygYK8dccEtbNzxTK7euDNZ8Wgv76v7i16U83g7XaN73p2EVZD2gEsYwfk3DFu8pZcEt",
  "key18": "5pWrWwcuhJmrxDJ6AQtMavoT76yToGTF1jW4fkM4Xxr8gvWQkhuwxipCmmRmfEfHvazr7nXe49qKqLBrGgydkw1Y",
  "key19": "4EQcEUhZmqviCAtcBFrSeE1jCeEYeQDYWeyts6zR7GnUTjy8Eg9XUKQMv6HGxXzSCnmSyn7rznVfJargMcvkNcdH",
  "key20": "3LPu79Z7ihdyfxTmzmP9zxkS25hTeJWnQUuuq7xbwL8Dfo6mw6tHwHjQkroUP95oVK2CqxuPHxLDMjAWR89WP5Tw",
  "key21": "3yUJmPMzWuTQMMKWWzrqgBJfGiys6N42GzvoyfroU7EsFKyAmcDkqMzFszjoCGcUnxwMtwgmX6CAe7L6VnAg5XdE",
  "key22": "bc8jT1bTtC58X2er3o3bE3KFVuPBQ6xhzHrsfqbdKcEqJLh2q5yzyhRCsV1MtcUsiTqmjkQ6Yq9xPKohL15oSXA",
  "key23": "4LB6MQZqDPpzeovLgoD1boQp38dZJ6vKSLjJVkmC2HgA9KFAkPY1fUe4iAGpKG3MsVbzDsaCfH1JN8Bj2hxgWVN2",
  "key24": "3oMj5LGa2PCbzA1arV7WEb41iMuRuQJcwEaUEeyKRAtoTJ1eHjfRXjxX6deBg1vVhcbY61hhxRbipaQRkpNViPD5",
  "key25": "7frJMddUQNe36AdW1RKKmzQ1QhopAi2Fn9C5KUVXU2G7zSBMtFJAwPqRFj1M52iyLiZLBVou91uFED4ibHXUxhe",
  "key26": "5kb6tG1eYs8BrstDwBHH81rnLmjirJPMhw8LDu2uuXxSb9bmWFcqpdigPts8oABpRrckt8J3VSQNDV8dDmDR6nEZ",
  "key27": "2ajsYGeStNR1CAV388KK2w1yKvzP5P39CoUMK1YotDvEVVz1PxNhJr7QCbWGurs1EX77TaKXqJdfutAoWW5Xby6s",
  "key28": "2h7MZFXCeRvb8AcbdyxWauzVDKUB2HAdHVtm4WkSDE5C89JnymzkH8XXWAuaeMxaVoVkzgXJ99dgofEubsncxpkp",
  "key29": "4Q2Couuf8HECRGqxMzneC6dQfFhixLTKdz4X24tWvMHvhbCPsKCSjxoTxGnto6t4G1j7reCa5jJUPSbVhXaPK6mN",
  "key30": "5PPW8jmU49F5w2DDp4EcqQGbnFQm1Q82PwJJihXECFpRi8eir8Fgx2iMegyeMfPTtiKyqarCA8WWyGRpy59S7WiZ",
  "key31": "2pmRfaWLmJTBjTFMfT9QfZiVNC36tNMgHm6DEvtTyvZebzpbkdRfXc1q9Q8TjK2EFVxHcGKJtrWPPpWuA5XDvwqL",
  "key32": "5nx2ix4oCj76GmLwgTvp4JjmaRsypoh3NiB1TvUrvMRR2VmPKmrdvATpDfTuyzX16no97Xgc4X4LuqQ8sHeZdSwU"
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
