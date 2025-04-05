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
    "4MqA2oPQjuGGmbrEFj4VGKY4jrXzh2JhuvKdz6nS88sDYmR56FsMpG1sQjNrSNY3VamEmdmKDD9hWBJZNFCbxdNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52BWHDtwJyNrsyzKgFVUHG2CArYo4sYDzX6awqNNUnQBK4tZXvTQ6xBCHNXHKuRr7FRvTdL61zfqtpkg3LRrfscT",
  "key1": "5KNtzersu39Gpsx5fdE56ikZYto3XobkM6jNXpi8betCAq3LiaxMfFG3Px3Vpz4VAapxNugRWHc12yw6XD8o1wAp",
  "key2": "KoqHBuepvFCtgLBqf3DChSCaHpPNC3oaDsG9gqPcBLa1sMd7yy7gxhUsyh6HqR6xFKS5D5568CqqGTh5VhH9k9u",
  "key3": "5K3LxnkHG4dzspimXvkB9yi8G929grcEKJUXocP62TT1EjoL7n1dfu5yqAtWXxwMXsQNdzwsRqPTyyrMDjY1yJuC",
  "key4": "3J25WndLV2TbPXoKgwHhGEvJQPZUVTGE7MFn19R6xYj7JLhCcDEAB1jGBtreJz8UREHg58nCTeqCcZEw6DeBQqyZ",
  "key5": "DYDCTZzray3ZfcFE5pguW865651NK9pUwXctNijFcgVsMocMYAQm1NkJLaE6sfpVoxGmjb7YTMUXHUSYW22r7Gb",
  "key6": "4qqsDCuy2gTR6QmruogurQard9Fsm1MQfuonWS5DWjeJKTKqDpgGdjqZWpAAJ13pHPi4bTeQ5HnyyT5mcWSrg22m",
  "key7": "gDBgpfZf6EQFudARYAXM73tgYoxpUjNuGJnmtEJYaPtAXP8jHgVnZQG7MR6vBxWHsUkHkMSKdpPsGgnUDwxScMX",
  "key8": "5eQWCfFAuf4ReVq81KXnwQEDrjwBWscBbui6q8ztFho2BNawC8UXRfbexJfCK5FtxhvgCyDS8t79gupAg5qfT7EQ",
  "key9": "KnFEpWH1oGHJ52xo7zGQmKvmxMadLE5Jgc6ZhDXjofWmUg2FmY16KytobcpHf4MuCANEDq4zU6jgfNTMzycF4hM",
  "key10": "23zLGy4QJV9vkULRWoHwTZdZfps8HvLFfw1RFFqTNtCWQ8z2WYvSTEFuXGrL34SKB8sMZ8ncKwiaWsoFk4SHSfqi",
  "key11": "2BTTXUJXLLnQ1hoExYDPs6qLwkpPqZ87YvHkBmkZrRz9fdiQPgGoAdDJnP8UsuaWWvSxkkM3t7NJKEixT6gmVRYf",
  "key12": "kVaeYSSt1tA87qfMSvCYC5nwkPaaAs7zFsN8YbDeavLqvUcssXjFvYbHrPZR6PTHKM5PNFA6j8GgL6yPsBDEJJp",
  "key13": "BtG9UPFGMCML4ohmQ6z2pJeNpqzKhzhCHzzRbno1JWEiuBaTcPBcbWU6A3763TJYpuLpTmKChVHJzd29Awi45q1",
  "key14": "57KsknrGv4ShQNrGuP9VqSTn9wZEi2GLjeR5PqvMTZmYHWMbQkLjMckB8NCtkszgXxTqL9wh7oHSQT5ZEnSHbzR6",
  "key15": "4wsNk1iSx4dgnJPvCMqm4LdYTAmFuf92ZLNcobZiRAnawxp6qd7wSMckSKRv4YcU2JP2XcUqQzrA7sJuxDgnsRob",
  "key16": "3zTJE7D6Wpdyz53cEZF9Jwt4FpCXezexZFBrAG29u3otFGmCfEyYVGi6QD6kBXLYwyGVJXgs8dJ3jv6hwbNSSXGx",
  "key17": "3U8FNt1S65K3vDsdgW41UMUHWUjgnAzY5XfvU6xH5i8y7FZWvZa6HBzgGAjzboVH1enHyZ7m8ChYXHe6sVhxHjuf",
  "key18": "Yj8fJR7JDcJzbSEHRMDgzDk5bpLW4PEQk77Jwt24PY3nZQJxSYie4hYAv7pqMdCcwBrGbj7XAUcjFs4eT8sUmC4",
  "key19": "JjbJAkAZjpwTyqCrgwK31nhcoJNUAEMhSN6MKvchzcjKgU5kwwdDGTcRMHMgaxSpWdYK5n2GEQbiLx7J4xmQWPj",
  "key20": "ugUZdTzqAiVtup5oJeW8xbvtaTsV5UoxA2gbCo5t5GSVMp1PydVzm3bSXAaHTC9JknW1GXxufzYgxKpEVreDV8t",
  "key21": "4VE6XB9KmtB4gRQustAbY3mKokQSSS56wt6SWRe4UMFK6hnpURPEBsRgjrvhkVfbMYEoB7eXx6BWPS3RGp3UBMX2",
  "key22": "4GsAhykQEtUKJC8vAxzusEjVUatVvBPHdNxbLZXN1JciuTVhkXSR6mtn29n8b7gypPu1iEzKiDZaxQ82G2JybccM",
  "key23": "4zQ2c5yxux1HpVLgHXVT6zEC54UhbEQeQnNWrZhF9Q9uL5hdZZsrzu4qhmneP4z6jqumFEMoFJ6XwBcEPu3c1FhF",
  "key24": "4FGCBscdueTHBaWVaZZDxfTHCfLaYSUSWZwK2jZ8f3jCh8GMpu1Dh5ybJVVrx7XXBNguH1VAqjLqsSTheC5QkyBw",
  "key25": "PxAbJSPZDi6c5KkKGdRoJs5DxqdNSWWbFRdjwo8m3BcWG5o1dxM2CoYqXoqTdbK7pfF5cT4guoHpBvCyzJQKKLw",
  "key26": "3D38V1EUJAjv1n6Ctdu3Vsy9vA2NmVPwqwB7dL3vKdyJLnDiN5wwcpEBJTpt8mfg164owUdhDXipJdgV7UF2WCqN",
  "key27": "4YJCKnoiNU4i4BstGo3X1rcGiSt4h1VzRKkTJJ7g1Gkc2zSx8wQh6fQL9cbgcKRwb4EeKypL42YUd6Ut4F6TrYHo",
  "key28": "2fsAmn7iyZQFhyQyFpA4TgSwLDrbPM6nUdwNruQAxL8v9boJFLyVUrzd7TAoDewxMm1UFY54Rw1sHBbk3pVqg8MK",
  "key29": "2hQSUTwZe3a5cYKh1XR9ZzpxZidEuUeYQBENyZYcMFXbNQDZcU6zG2m57Yvvht1ear11qrhCc6tZFvXSkZDce139",
  "key30": "4cbdfwaFiP95qK9FT3Lxf8APn19oW1qcD1AhHD7BjKwgu1RtkaFYRj26mb76tDWJ4cPFqUmiPCjiUc28G2tKHHKT",
  "key31": "4UvbGWFSNKKbAxCTUkjC3MPu57xPadK5fFthcXcFxGP3VB6EU8L9vfJ4S7t5CBzu5pu5FvLBnuStEoj36yC413hE",
  "key32": "YkCWK5bc96M9tKYZdPvWLpLVo5629k39iYjmHSzTrn97kFJhncBuPBS5T77ZQqo87ETvaBgQq8WE7mU1ZAyxM8g",
  "key33": "5cZpz4j4BWac6ZbvQTERWfTPWtdJFMmmYe9XjLY2NetJVbV54BzkhFkqM8NJWxdToiGUojSNMSN77Fvw4ARhuQvX",
  "key34": "C29fuQ2rpZYb4Etz33qL4wL44DR9aYYsXk1AK8iBZkLzmbF5DqdHGK9M36rXznx5FZ9oNyWN7wxdJ81b8JUKUgC",
  "key35": "ZCom9fUYsa1gMCiNALyXhM6baNZ11UJ9xn6vRZrzPpTWFvhU3q8BLx4kbH3Ru9rJrUX18rUQiXv2CwEyh9X6hd2",
  "key36": "2K8WACbE2ziGwhsX8FRma87ezBEm1j7PxakuvgEsENMszKjFZuJGm2mrimrbWQ1orja4g5v6qmAtHXoETVLodDoK"
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
