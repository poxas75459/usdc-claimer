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
    "2dqVV7JzWVbkRBU1f5y24pLWES3fzT4RhzTQzXHUimWPrHEXAEChn6GgJPZv39ngcgU7EaBxJLBv81akwUccN5AV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tGfeTnbfnaTYmtVb7CrdUwwvSSNFkTSn6J95ecrEo9tbEVaFeejDbaa5G27jLxN2Geqkh9D2UTiYhfbQcVmb3o4",
  "key1": "52D5c95BuhZtX9gi7uNnV1bwj9BH5maHM4bVvdga5VbYdjvLbMzMa5qVoqvgZNbcrx39yeJXfaew5HpDYz972FXr",
  "key2": "x2H9n552yhPeYdgapsmrrm6YPwHVhu31aFS6khMB4JVK2fJU4RvEBsKVUQZvXW4VJPkvC6TVeDQCgcpC97CdRJ3",
  "key3": "4SxsL6mu7LJK7JQawPFGBuzxGgQHd2HiZ3buAM1tVgLHTFJDQRSHhjmr8zwoRh7haf89DRKaea37nrBAR7gnN2JT",
  "key4": "3VfqWrm1BcpVSKQ7F6VY8eVxRDrdGUykmBBnZ52S8SQJVonWW4m3tpneVd5UMweZfA9AP3Ztw9Ev144FaUAucttS",
  "key5": "4e99SgxzLogiRAh79WvGhZz6HtuUUqWWhZNWiYc37LCLqBcQQzPQiQo4cTmtAoukpiJxrRqbDsZzpxqwG9erqni8",
  "key6": "4jjfvEL7cxKDht9S4urfTRXkQZVG4otYyAXhygkLb9QmcqgC2tKxAk71doCFJ32dZeYsmy68CsncWuSAMQNLFHm1",
  "key7": "2HMYhxcfYdeAmWU5iKcDXqh2y2Qtqvcx1kA6zva7Huwq3KtdF2X6K6VmvWDMQpghc66b2J8Fp3wa3iv5sCZ3zZo3",
  "key8": "3gCpxsRzfPhoeqCbpQtaj3nBvZ83q9V99wSdCkfs8hqzZpqeC6pdE8ERRk7yRzo51WcXd4oMuZK4Yvioz3iNxCZm",
  "key9": "34jpx8A8Teo2NApBDTPKp4uVqLyQ6juWZfUSWQC2jNLSRUKJznYiqTQNLtUiD1DUQdLZCPVyPi8zQCN14df4NaTq",
  "key10": "9eBSEt6NQhPEPEhNJyXGLtGLMcXuTAfkNykRKLUd65ra1dHLSDys61cVNZuXbNXoqQkJuTrQUJd5i8ouBTTb4Q1",
  "key11": "4srjLJHq6wHAn7jA3ZPnNgErn3h8trz1XraFs5dfNSM5UM77ZzYK4kRMUts7czzo5z6VLn9u3bVxPHgfRtv98FUS",
  "key12": "2f2hWYphxfntj49hMnLDrHkYk4faPAP8noAzpNRpkhaC3oJcaWWynyp3TeGq9WoDbXNxeiJt9K1fqfPFfu2QLih7",
  "key13": "2c3WsU6SdvUir5fLbZpFZbM8SqANStLw5uczHco6PfhgLzWMtUhzubymiqQMDg5tayRkLm3zHvpRHayA2s5v4Zre",
  "key14": "3dxn656vy4cRxSfbENxGcBjGA4PFpdJ7tZCZtmDhGvXGaEySdaGxDneXyoG7Pf1eP4mRG2DfnEN7ha7MkfR3U9WU",
  "key15": "3VFr6Zx8F4GhXju9syazrgndoYkKFvBFH1JbLNDDwX39bB7hDu3HeEQg8V3c2rFQdSFcXzdbigHd2D1prgri9X7e",
  "key16": "39ZmBJrhsqStmrsCQ6ZCpVG1ELhRxr57KicWGaF4nE3J3gd6QRoMrc3M7nPstNaW7w4z5gjMRFE3LuqMwsJWBWp1",
  "key17": "4UhamCPjG2zJHy84BHhrZWoVQWBZDdiryX3MLtZazzx6oDMks4xpuFruYNxjwQMnXWvFntBqGbhky2nATUWgoiZQ",
  "key18": "4qTu7hE81MmaxawBAc9U5NXegdt34GNYb8HVvbopSu8cPYZA5xukGuLDvsGuRioaJUpFChjDTGcxkj1rhwT5pZw1",
  "key19": "51wyG7kh9pwwhomZTmgzUoij1yFaGp1YhnA4t2eUy5C1odVpjg3SGCm9rfJppCAejKV16JPjtFyn9K95msu6wJhv",
  "key20": "3UoFKeRzxtSNgCphtY3sN5mDJDZrVxMiBN7gUsY2jkj4CiAqjWE52qeyLxwUc9frvbKgYKqM1DbPUbimxchBPF8A",
  "key21": "4B4SEXtEQ1NZnMhDw4mtkxXrBYChrQqP6CCgyZgzhUKmZRRxHPX8L7wnC8YT2iWwpCNwdyTfnaZixZYogykD2njE",
  "key22": "3UYXCLe4eL814bCu3DmPJmCaXGzEgwjayFGPdkTmvYMK4sjgypp5Xn9Ve9r1Vv9U6zQJHp4Hr2MNeVx7xyDcFP1i",
  "key23": "36bHkmj7zq9Hzxij3SkJujxZqALqvRWD1Fezp3NdUuRGCzB9FSobpznnT8jhGGqj5ZpdNWe3xuHvnDrkHq6PeaNU",
  "key24": "4rgPGF4N7cKaa1TndyixQmpfmxPXCKe6jQU9aRJpi2ui1A15oC1XWR8U3y4HXtyiptDy373jmK8e4QVHs7s4FFHE",
  "key25": "2sWzMTnV5FPxFvacmupLquQULnDrDmN76wzkJ5pQdd7wLjfzSy9u68G5tF9Hm49R4ZzawNuXN6ADAWsZgoSYuFU8",
  "key26": "4QE2EDGpTJraPQedufB89LBaa73SnpeH3mDA9n72MDwT3ZmLdKgSd3seYpkahYRjTUXxLQRAAeaA4G6CRLmh9ot",
  "key27": "5e2zEdbPbrTp78V8Vq9ZW2rV44z6ewB5ZdKVjajkVfz7AFKp5akfQMAEVBM5aYoqHW19TpexQ6zxF5Ti7GWkawnn",
  "key28": "598uwbjpzv9sFRvqxotQydzxRkRrbDWECbyRRhaF2q9R9qLqJrRhKUgU3YwDtSY9MbTdAVqW4q4ctXs74rijZAb7",
  "key29": "34LpR2VBQdJvuyWYY8YJx3bBaJP7dugr495nt92ofiMY5qN8uA3sYX27o3CFb745PSq5cSv1BuA8hGmvJQJV3gyX",
  "key30": "3rSdHCy75qHreGrK1vKTvdFruBZJzDJXsdu9uDmTWC7ds4nEhvUsPdvGBG36WL9gzVbc7dPLjGxCXeFsdbWedHXw",
  "key31": "5xdsLFRv4ePULb7WU8VRR3QmDjtcDVUs8aWikGEHnPnjCB2BUNuPqj8Zadaf5YBZHGRb5Wo4fiKVCPxceFfTe2nJ",
  "key32": "3M6ovC3L4ftsxMt9GXU939ptESzgjffBpsJGhm4Pcd8BDtubmUKVKqJy3hAKakiRXzwA3VCLgszHYo28zm8RjVXs",
  "key33": "4GsrwLNxXJy3Z6oGTdU1mgKrjY1yzpXCTRTDBoD4xhJjx3xaQhh3AWSmfRL6TbiyTN78J6tYvMkfkVNCdtwtKNW1",
  "key34": "4crB873nTksdjWwkYTnGomeRN4zp3W6WaUU4Xx5kkfUkC6DhcMDNK6R5a89Cz92QmyhPg5eref6W4sdrjri4NYPQ",
  "key35": "2zni3wQDBdVhagB3qvYLiT7BbkfRM7rV5XUnXw57i5obH9azE3f6ArDvNBN7LX8vBZSMRjZDusyaVk6SnnQJ7xfS",
  "key36": "V516Vwv85KQy9TBxsKt2zzEt2qfzHG3tKXMDodkXfG4GMMHoirFZ4G7gADQBPGaPww1w3LTFX6a5QSdTMipycqS",
  "key37": "48GajV3fdMN5xtxqrdhpWWTwboRAGJoeUnt577zTLdW4Rjjn3BHbeQpNBgbwDD5Ua4oorudWLARF7GhQwAQJN8N",
  "key38": "3hHxGi19ysiRNdXJB5MuMqvPVmedTnEXpnX3y15p1cyQgEqX1gysF9pJctWGUEVqyqUhKpHqQzHXDhYk3LUGSfs",
  "key39": "2rgGKbEBstzgwcJxh2SXUn6QJbhiPM18yKND37X6uJj7DUeSsjsdqvhxqbdHiCwiHGpdRYn4iiCtdYAe9qX1vCcs",
  "key40": "4LJV6etkvcTR69x1rs93MzJAqJNgyZBsRDd8RjWsQQQVCxN7LtUvq45o5TYJcW5BoEKPMDUbEWy3CiGRTL1Dbuct",
  "key41": "2RC87fwtx81HoG63dL4inndxuE33muCrmwpEWcwE8cgMq4kLV5uTQKvQsApDmb78tiTj7yqDuHrd2P9yHwJRK4Dm",
  "key42": "2B2UweGtd5nrPFwRASZjBrSZj7UBf9yZDt5uYUnGyJyzQyyHesHVhhWihFQh5mtHhxHxySC6HXb6XaZWFTS9jdLU",
  "key43": "3iso5gY4gctA85BP7JRsapGUSpKNc1WsJMbssN84zMfDC3bhY4CyXTLvZe14P2T39qP5EcHP32KbiUmFLuspd7Qs",
  "key44": "2Qjb78URCNDu86eg8qJ767aqBHrTemYqbno5KVAzHfnDT9TNdSTUDaFcZQewJyvmVeAUAW7DNwhBUWkgG3Wq5MHM"
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
