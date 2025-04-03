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
    "jsAfph3kkVPvutUGJgxqUYwKViqakiC6e7nUDftjzDetuLZmjsFGmrXDWPrxdUX3yYuRFN4RyCtLJh162jKN5V1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ueCNbHoZSDAJebdWy4Yiq3z4hRykA9gunvcdZnSmGCgxUpjCt1ZBmuKpHZfy3qX6pXE7Sf2vBR7mH91C8AJtA7b",
  "key1": "1VMwXcyfUscLidnnT21RJqdAWrvH6DgywwRj5Zxo4WAf76qFkMxNhgqcs693ikbJC32sfXw6uWUSLkYKj8FooPB",
  "key2": "5FoGk4kg1931aWx5VtQeqGThQje4rfTJPnXPi1vj5gT35podHEqiGDKX2gh5uNevR6U7P8scUQhEX5vHSASKR7V9",
  "key3": "2ZTzpfkzTTzkLPYtJYUYrkqTh9oSsf2E5p8NZvh9jWZQjoftvRt2TadFsxJvbuuXEnSU2A9YU8sDkKNCiHcDzVtr",
  "key4": "5EVn8HHERkpspdeLc1YXUozcQ4GtZkE3QFBL83JyjeMJAtsjdfKcCtQGg3r4XZjhkhYHJK4ZpdyDfhmX5rQtUVR",
  "key5": "3Ja4S3DhLYw8j9jxXhhC9MBZWtGE7sSDhn96RLLiiAtQjijq1v1xxnbq9puA5yxYJYHwg9YJEpkvniMpTiEiuKU4",
  "key6": "4wgpcYMQVEDT39QSbE1XxgEGEw3cUvNBB5HoQ1oWKhrmJD4BgW7UkpoZ5hJ822RzAPQRA3Kgq69xvD72T1hAbXVs",
  "key7": "3xkfHZAJmacdSUwqTpqq8xEncGiP2WsHknF6Sd99qZLgTNyJoNCYKcQhUzuVpW8ZSPawK3D87dxzpfnthyb5QqWM",
  "key8": "2zjvLdzv3KhLCMGSvRtSZx4ci9wofH8VMahZwpFRS1zbhjvknM1eYwgoLG2V94fN4F2Z6nSs6JdKj2SNQu9eGuSQ",
  "key9": "58fFs936ayQFK94WNDazTU1wCakeLeb77fB58sW7KtxJ3LX8XCMFukSJKvk2QP5TdAmo2P9Y3S5bqFk7tLLWHu41",
  "key10": "62jt3eAbcjTSJX2PLhQCPtEUADKjS4JxL2QJ8Rqq939Eg3ooWGtZvK9JWj44ks7VmhTbgLAEmH6pAASHJpTbD1pu",
  "key11": "5fzA9GdyJNK86oNPDFBjU1xKijMj1TNa169dhugQTNfSTsKTXX76HDR1cJdDFFF7XvFqLSogXjLiQ5oJyqXnCwzk",
  "key12": "3ko3JrWS67vnb3yyk6Npht3Vsp1xHavy5yfUcQHPnJwmD17k1Nwtj4QkfEZFwCpydo1uH8Kh92sRaKiK9D14zxkJ",
  "key13": "5hNqmBeeXTXgdESmq8tbakzfCL62ae1DepGs8bzq5deWmd9NYUDWLMwXtNa9gPBEctkQ1s98A6xsPFEp8Dj6RVBp",
  "key14": "3yFk2P6noRCXJnxWAsWu7c7vap37YCYALcfakTnb9LpzpCD2VVsP23CUajnajhC4qN6EYiWdMYanzqXxKPkBXcfc",
  "key15": "2G1zZpQD4B3yw5Dw6E9Mdfvoj9D7tkT1PQRiVGDjjFKSXPT9XcqHNZuhD39iru5gSpKRnegv6iWp2WjKmQkGUaSN",
  "key16": "3sZ3FCMWFECmggjQihxRv7vHCLTfUmCa8ZhGrirMHVAb4GcgnD8kGUvWpg5CvsJeYy7wEDKZm2ieevDT2SBKRgaN",
  "key17": "Y2KssS88hp5hxwPJGaNChYySAaoksk8u5nEyyzrsU66xcec34nv2qf2QuZjj2JCbVXuE6eJRcJ26xPGsqR4DWnv",
  "key18": "4ZEFZKnXAFekDjvWiM6vsPmC7iV8zxtRSaBTyzAwzTXxgw7aaShiD58cKYNx8XqkBRKVeSzu9LaUfWpa6A7iekmn",
  "key19": "5U8ZZ4jZ7kntddv73Xtq7JBvhUmE1zyHj7WpjcD1pjQWEX3PgWcYKD3LcFF3wxGYg8bZ1CmrBbbbNUaxyjhsojz",
  "key20": "8PXxLff3b3XYwipuQgVthBwV5JTVnxhxPHiCXYMBtjkmkSB4rZn3q2vjiM15z8YonvHhkjSrka1PFhMsu61kw6K",
  "key21": "Sqon2ArtcT9MMhcC7Ww4bnG5628MQLXMucBk3LAmZCcrubgFCwq2qAaagie5kafijNRsz8BajNHMPEy2chFUnQK",
  "key22": "3AKc4yxw7XDXCNzdNBT5i4wHvVrenpagJaEhHHrXCAfJsH251QmAH5VuxbQvvZCSV2z7sqWhoi8wdgYjBU5b4EHS",
  "key23": "5UuZZdTsaWhcLZETmKeWLfEYTfnM3JYN6jdheXwZhLeZt4bwiw5VLzm3oU5HJf5deocAeUQrdUECiJZa9t337Yot",
  "key24": "2fEcayrV1S12qPjCxaxzSRU2NGqgZMcJ4kmymgi9FH6MXN99qK5CmtRrbHfLAGWFijhLUjw6dWqi36hoo1F9qHAf",
  "key25": "3yAXnGjexCbLLsUiGLPmWNxqavkVsrtNUpvZ9TLXBarxEEQ1aycspwVK9RR4hEdiZy6jAMr787r9sXcXdXW8Xw96",
  "key26": "5DiAKnxBD8ZB5s89D5AZh4eSysowJ6kWKcbVsEMQK5fNfS8HsQLyEztvJCAWkPSsGJUWAAv3HUhhPL1eeArn1Ciw"
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
