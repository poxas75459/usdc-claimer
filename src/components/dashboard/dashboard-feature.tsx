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
    "2gTCL5nTfeyQRqDsdnGjFm8L34DtDakwyJ2HkqC9bkg9gny7ayFerfE2eEs5jQ7jNQL3A9LAwCxUWLv2cQyT19aw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gedQvZmDh2Chx9atddLCh6xJXpte1cp1gJ3rbVmCqy28k7MYn7xz35pyC9STzYJXTFB8MPT7YNaPeXtWwtbNKgF",
  "key1": "HNp4BEmJPzhy7vvLZbLtGjKn75fp5yV7hAMtEELLnvVnUDaQPA9nEgX55tHwY1R39rSqk6dGJdXiqS41DBw8LhP",
  "key2": "5zZrFibbVX45NCNshTqq6qAn3RPLPvUZZ9hJv7nF7ffHZtX9t4rEwLfSs9up28rmRirUg9iuA752d5BsHHjsCNqU",
  "key3": "5jh6rRXdMgDcmGFgeSfsqeWUSLNjwFZSzCTTMVYuC3HJkTdyZNwYzrNvuYEmH9dNBszEZ1jy1s64nZKA7VBy4bQt",
  "key4": "2vLcjW55XoUXPkim5JdCz5x91KeAnaAL1dM56j3RaVTw6DdNGUYB47k4PT3YYikNui1Mej9wNwqigeJFmtVHfdDo",
  "key5": "5FS1Eji6qxYskthncuQb6nbY5DrRSrQHQicDyTkEmuaDgyvDWiGp9eXu5AZ9kjt31HZMWSPw896PMtfBnCP6e87U",
  "key6": "jtzEcGNgdYToQnpNWHNo2NRmPHRGPj3jzuFU9Wvhw5f5gk6Jbrt9rKnDUi4i5BTnRvuMkkiiw211rEnNvrm2Tuv",
  "key7": "237F5nJVrb9yyCAbV6BZeLEcw1ir1isi3RKPVQNuqBHaMg74TwY51xja9JLL1EPTULx6MQeVPMjVUFsgQJUFXqW6",
  "key8": "4PUMXAVQiyhSd29oS4aY3m2YfDztk2we5YDp74ytYh4LjvDoYtJb938CzUgUfjY98d8QzMWm4SCNYTVfBxZFGNa",
  "key9": "2eskSGRre1SL3Pfp1pQdKqYRMtYTH7CnhJamHDEpyhxMq31wBeRdjd7C8pH1a3uKYw9Hy9r7AsgSo4ZMjroLnBXH",
  "key10": "5JyoCX3DjRApd2mk9TKHZPKkh7BQvUmW4NyzineKooaKcv9hGQy3Zk3CxQUARTGa34cqSCfbGQT3yAL9jiYCrfKw",
  "key11": "5p5fsSBCJehBLSPTespdw8rT1kmgzvzztLbgebC9kd6UgxiK1cmssm8oQaAUXMEkmpJq45kvb92qcPhEZMp8UZtQ",
  "key12": "3edHBrHw3V5CqST8e3NDJpw5q86MY6HXsLcygjJXmQTsUvQhnkK5ScBu7QBjpRuM2ErqaHdfTYUtpHaM7JRM9pwu",
  "key13": "2D2xVUw8vdKUu6b6ib4FBUeqwPAniLTUFmsx6aqeSfLEDbDgW5WzN1fuRLS254RJQdFJ12amw21PeLz5iCXu7k6A",
  "key14": "k5W79TxW9Rov3s5X7wNWX1yvNvPAKy5XuW4F3bPSkKtWixmXnKQWty364uXQMVAxVW2H9Aecc8HsggtQQmvNQDQ",
  "key15": "48bEqR6kPPfy1M2g1Saris1Sv9HcXW7NLgpXDfGzRzHfF1mam2TneSAKAQM7ci8MVQft1Vq62snpAJnF1HwvtjTJ",
  "key16": "3rMJ37oagFY2B4XgMoPHD22FwD1ZbpDD4gjuKDJ1Mk9rKHdmcTxaL1UJy7yfeDvdNzbfgCMjWQufmcs9pGU3mL78",
  "key17": "3KxdfVfGWvhQGewVZFgeWzbs1GvegTTL7VY2mrWtzPQiNp3MpF1GaNqKcaUuengB7mRNVMPBxDczQT1EG1TDEe4q",
  "key18": "afubPwiBGRiksV6FjwV7Nt3h4p5wg85pxiMiCWwumx3CLNKRLSqQvTEEmwXiC35M2Sn4UT4uCQQL1PXNrYrjp2e",
  "key19": "2wZYu6xZ3RVsnrJtcvfRCB39TvCDj6mCPpQUBQzmhidsSWge7xoRbLtQUvknoocWpNztEYt7rYEao4B5qDiVFakJ",
  "key20": "UMGPuXSkej3mZn7vvxixSv2bmTHmrZxh2Gre6YMQ2XccWi8thyEcQYQohm2sX4Myf7hrdkESSXHtV21UouUuz6b",
  "key21": "3MzrVF6WQyAYtATtsaaYnyJEhCm3m2LX7ebbEYt2ZhQSB7GCHhgo3mLu6UzXqUxL2W2iUTK4p4Kr6S2cjyNTCVwe",
  "key22": "in8bgmgbMfzbMyNv4pNg53AD7u4244ReN4JdnTgRxSzoXyVKt1RUxdLMdRmDbr3E9e4UozRVWNJMDSjX8fGEnZU",
  "key23": "TvrcHia6Q8Rpf2oxrwWyqCFRswbiAxE77jQzH2Gu7L1KBpKaQjdgWW2DWa8oCmCvc6vwoT5r2QHvWLrFQVje7XP",
  "key24": "49RqQomZsJhSCdPvpr4Mis9gvETFqo5Wa5C7oPpQErKDCLM9NzvVRsVEXauKfBiLpvu4mEh2UWN1MkdPPrLgnPhD",
  "key25": "2JxeNfCfSAzU1DNp2taPbf3vRSHDC1Cbcw2Kv897vmnd6ABdddQ8to3VVayeLXXFggg5ZT7Ck6Dy9Vp7jW7oV75D",
  "key26": "yP3Bv4nSGCKogGKxTAENVfFvUJn1Z3TFGZm9FhJsYsmHJSPvs9wdRhUsEQ9H3vuuPKecLhMjDPsz6sD3p2RYCoG",
  "key27": "vZU8EXDMtxEvDg7Xsp9PvPV6iVp9RjbKQUAkSvUFcsVxaKPgdfJWhCziEWWCN6uj4JtuS5sk26H4p7dZ2aVNLNE",
  "key28": "4vuNFDJ5JbXFJe8pStGDrTExowScECcAN6su6nZurRS6ShuVDoCsXk4kyoRCM7sesviztb9doNJDz3hvYk2Yzyj8",
  "key29": "5Yy4unkGX895Vrt9VtPTmfWr3C1DAhgvW1SjBTjAoXHBTeKT37fKxHcx18GvPrCMrgRQT4UHdnDpfe9p29aZGAii",
  "key30": "4ZmWvUjKpKks17FkLrS46wNY2d9iiesWm1fCwUcXLNwcj85bTi9EyykhqkZqtR3GZN2ycCQraUjoKGRGDLBxrG1",
  "key31": "8gL8E2Sg3YrQQzhVCgFXgU5qz2WA4X362fnoK1GvL2PJfkegvKWcf66QVfNmKcDBu5crh2B8NPfWbnkcFUnnfTL",
  "key32": "4cQACpJzJ89HMn4H3YNBHXVSadiebgyWNLEhfbPzmHhoUYAQeSor8vURbfMU7NaohpQ2rviuPbek2D38TH7NHoJK",
  "key33": "35ZvRtXzfjTAZcZD9pgPEK9BxJx4BqdfG4YbeT2HTZy6gphfZsSW7gXoEhFCdKDwnXMcEM2y65LNWpyd39EgXbrJ",
  "key34": "ZtTYjsaSUptpTS3qfzjohVJyacckmvJpseRLncYm8VDrRQY49A4nVvZaFBeyP4fpPF7ccbTesDeQ6DqDuFNuRkL",
  "key35": "3HJUW8zPqEYcZAEo2X3XzZQuvcnLqM7BaWuLUFgmeXVhmJtwWUyoC2xcWjvyZvYjHGGn8e6Su64dqpbm3MHqpAaA",
  "key36": "4itfx8JeFKmAqcsJFBMKFJn9yd82zWq16hjbumn876bmj8cowbjUo58epRNDffgR2G7ksFvUvD7dJNHZ6LpkMLd7",
  "key37": "2QWRh8yAWWJGHBEHEcMGoqBvVS1A7jph2tBoTThbgWD3fJBgS4jVZy9wpMkbzaRKLAmbzx6M2UkMXrTe3p7PBi3U",
  "key38": "S91WyBr8HerxCUHYjszztrnEXUwkp7DJfV1XSbECPtdJSk6KMjj97tQPLEBYaxuMc5n5vDVSqt4k8Xe472YCdwZ",
  "key39": "62rtP4ct94Qt8qMAKhHQqrDgupPN4BEuspd2LbwZYsxfsa7XSSj4P98B1eJsCRcBYkHoHCmSwUaVnhbkomayos4U",
  "key40": "2AakxMMkpJNyZ7e4krGodeZe5CJcnhBF5GfZ5CYJGNUV99LnXWZkPQre9Pi4sM2yJV3UxtYCzK2LXaAoyEgavsCL",
  "key41": "4EaJcW8p1xjeLAKUNe7bHZ8qG2DgeCbDJxv65Ni7xVQEinYiCrGuvVkERFPuLNnfbHz2s3cA23SpRoXynab2R3V5",
  "key42": "3VxXahhMv3U3scCNBQ9EWCe2B1LgjeRiNRaMhn4bfYiaJqMmuqLo9AxznrqcDpNdqhdLbAKNrVnMU2p9RuJX5XWk",
  "key43": "5r4kZjMpzEA8GdWrN7xd4MSZa6CWx8wmaPWbdEdiM7BKqnztpSon83xxGQFbHpVdGS7bHK8iWA9BNUDRN4Vu5viB",
  "key44": "4RsuEUHVUYLn4cA2Q1xYzfT1tGnJ1YYwKGiixzj7j2RRtV5GumbQ9ZTR3E1tF3NujJ6qH6tdyqnv5yL4fVsU569s",
  "key45": "skamZ56JAtmRBaQsqXrjk39QGQtcyriDLe9MpFCHHUu66nPThFZMaZEJBSMcjRnBwqwpRP7B3snUjtNtKUEnMMw",
  "key46": "588CpLj8Qw1QEFmsGKRvnRNBDojDcxjy3UZWjWLiXj7PNtHkrANxWDZKoM6wLiW21m2NM7V5VfYJ4mYs9aLgo6EU"
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
