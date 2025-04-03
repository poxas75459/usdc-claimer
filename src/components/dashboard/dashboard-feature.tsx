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
    "3xyzZS1d4ADoXdLtVRoSZTePz1uBQtHHagx1nEuJr9mtEU5UP7iJGrxqZsVa72R9gUEWakZRU7nM3VAJFYxxNYBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Miredd2Ch5HGjm5uiRVMAyUTn7gAjXmc3FR7poiPKTmpY148R9KN9bxoAPghftMVFkyPLEsja1tvpt1KDuEdi1R",
  "key1": "2pmjhvoNvBe62ipgUPvX2B97pRRb8kDHvBpvMokvgACUDywadpK73fuRFkSydKvPQADTL3oPq8obFH97vFmSB6qe",
  "key2": "4GW58exPJGt7J1EeML9kHh9VA6vxH3CKA59dakZADJdnWyd6MpoQDoJnqqFE2eDFR66EkUJGagTX8bNs9E65yB3b",
  "key3": "3nxFCw29RatMDakkQcSnoDpYwft5w1nb4GW4tr9X6CX2AzbXyNCHYG6VdfX3cskyPnWNwxJpejnU7FW3jQSdadQt",
  "key4": "EXD4gj1UJXH8yh1FsMoeMFoFLmgUKsA1YX2g6PwXR7TPstvJx5dGYEr6xN4HnLgA8rwPGnL6YepWdzh4hNPhNdH",
  "key5": "329kFMxpe94YBYa29WNGW7pSYTv6294CpBf6ArQuWTMhJZN6RVDw1i9QkmeyYJuVGJEz5HkV9H4dKshz8on7rsTX",
  "key6": "64maZ6Mbee5D2SkGyzHRoxeqJFD6Pj9RkFosgw9KJ9qtKXe8y93cStQ7yhqrZzDg3RHSo5DKhgRkk9Zx1RXfcWTv",
  "key7": "2G2rjhu6r86r3dLcPr1G64Bgq449bp6txrXw9RKcxvTv3SrQoqqnDw5T1sRmkfjZMkrcUfwzBNFVNCcxBhdQekKK",
  "key8": "4A4Vu4uqCfJMJ5DtVuXFuYDCkS5WStFakXJJyaujSSoomJCNhLrZNr3ZYUnzstt8EBv3cuGQJgntMF4vCooy5WSA",
  "key9": "469Riu3bkkpvs88VTt7t6s8NsULS5YVvXeQjdEhmKNJ4agLnpAU3qWCX75GiSaGh7LFFQP1UP8RVXgS24ss9N5SV",
  "key10": "HmMmC1662akdw89swiB6MvTYC68F6o9R25Riyc3MkxuvD2yZ4kB6L3kVnG3419GxF8GCrimku1wbiGQkoNNF3gP",
  "key11": "5FULUMrc2ToL4i5oma3L1CCGeiv3bQU8R7qkGugyoAL4QeTarbvD53n1UEDVJPVzRAc3foEatTZVpboRebWM6tMv",
  "key12": "4pCnMf2TpPKJSU7Fkjka61E1KwBhXhPadx7q4naX1EHBpYQaqZCXtYGEMgy1yeYmAxrxqKsREgtFmsUwT1xeHakU",
  "key13": "2Ysh8Je4q1FA5kmH5nknh37q6XGLFx9gHdJNMBnHYbyektXftJwhcsv1tX7tK7FrQNsj8DebwTrZ5V4s5zfyW6C4",
  "key14": "5unaKpXwXoZiv4TbLrBYjYYAG3KA4Hp2L4uoWxjQ6nrh7qfder4GzYtfXwKszR2rBzo3cfEgtFkpXScRWUBayZ7Q",
  "key15": "468BzSE1zraiAAAFnGt8Fwv2SZe1VEwm3aErmVw9Lqve23TFGuu8PCFpZNMbKy8GndoEsfqRhTW21p1J7zExnGex",
  "key16": "3MLyZpmwgDQdWCn3JtQwkAKGSmgMv6dLzaKyJ5QShnQKtXeffqGpfTUnKij7Rwj8yB1q2jLrnDgN1aeotSHCwdxk",
  "key17": "2HyQZX43f2MFTiUALqxLBvo2FFNXH2YEe1Lk9caQ3L7PzoTiK7CgNueGqhotZeY5NE1ytPiZzWm5kJ3V8Sr7JRi8",
  "key18": "2GZRzSX2LH8X9TivxFHSffjWzncvWcjiMfBe9QpPj6iJuyZpUc3M72BLd18bh7uh8RjBhyAcewkSUKmptqAUNZRA",
  "key19": "MgzvpdNa2teQxgJF9Dr2JxeFzftJi3HZcf2Kph6EaFeXSxDxJRZMurWBbY6f3tKJYvWhMAYfHUrT7o6TBPXCX59",
  "key20": "4NcHFSK2R7L7cFq8JFjmxazz99GnLXT2SpiZqgX29kqHrrrHQB126vkzpXQXpeQGRtvtDxdbZDUCj4cR1hNZS47S",
  "key21": "5pvxyUgsJ81sWs3SSiEztvSVqzvvhZpaRHnubmYMNffbZ4QTkjMAGeXyFXeQ1kGdptrn2peqMNC8y34soWeKHVP6",
  "key22": "4K9kAXbQb1A56HVyCyvZYmov846fhGbtQibtHZaLVNuJP2LzzVX9hC7LYpYHRCMYm5Ye7HFuSotyScLCs2MJeQmw",
  "key23": "26PPhEXKu7tFWuwaDYhhkwasuBXiy92vDtwdh6qXf7BLwkmSE5hsTitRCqcJuSEvjqU2NCsKQvCH19e9gQ1UavCn",
  "key24": "5TUcsTvr3RoRHX1pueFKNeoV5it9qHfewYQADyyEgRfsSG5v1UreucNgZsyBbGMdGqKvoVCtcpyggNdK1smQPv1w",
  "key25": "2FmypqWrSyaMy9AsL9C3wBUS3xAaJBErAqVopF31QJn7kzfKz8ooVaSzEikTuPi1M8CDX4FwQKeModN5mKc37zor",
  "key26": "63jZLErjq5QnX4u4eesaUL1YHnEYxb4GxxRkTPuWo8DguDYty633cutv6uGQ1CGFJkpoNU2xFc2B9yXGgLvkFoXV",
  "key27": "352et9FwxE8LwiotJTVjiPPHAwCotvMcfS5sv1YzbE6qCGj8ggunKBbogn3Lb3egV4aJX3NNJFWPQDToQ74iUn1i",
  "key28": "62dPwSgovj5C2zMWK1JhMx2gtds3yhMbjx8JQBBbYaYHkycyWzdRofZZrMbdorgMPF5mAkAQ1AxxtMfY5tKsUSi",
  "key29": "3CAYkGFQXfrphqMQbE9YM9ytzr6jeQvmScosFAhNATFetxfkmGnrS7xYQcqpngnzq4zVe88jvHjtVFS1UtPum37o",
  "key30": "3BshSqNaq4qCGKonYvFZy56YjM2pCkPQJHm9D6kFpaDtwY843NUW9aDLB13hvi6Yk6KegvQgrDabiXtoktbEJFZ5",
  "key31": "3KohMgFNwuxXtLxfpt6HyHm61cubkeuKEgsshB3mcR9R2kadhtx7wZpNTNMWYU1SQic3fAP7s3xDs2Ey9gNyyV6w",
  "key32": "p28czFUjxCVgFf48abZsL46tSkSjfUxXfd4uiiU9BbUzw2KtZH9DDTpCdF162JKAsxU6gLs55BWcHoFFCLxZnjf",
  "key33": "3KBKFxEgRDzgcs6tU4xbhT8J96qJc8kaZESpbvWymRi6nDxZszfK2HNCPphdT9zCBofDHx7DugHgbQq63WqBX5CW",
  "key34": "4YAbd6ffKVMUWPnNV8cwD8whnyzbxMfmBDv75dP4wZkGnq2vXuXzWahAvrXKdnfJjA5zMg8XWsNchFZ63tYiw6wb",
  "key35": "5NAhQbwEPDbuZTzLxfYsyvWz6nms65Tc1c7uRXv5LLPWNYLnpxrAsJ2Nm3QnnHeLGnHf1qCLmgHEm5tvPwUuGem7",
  "key36": "3Ak64a3J5WzwtBiMX2Bkwaz81qLehmjFxhZA5GWh99cMTFMRrqyJEe7hB1aZRDYRq9GFr9wpthCxu3Ft5T51j2ai"
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
