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
    "3hm9c8AMGizDCdX3kt86FArZr3oU3qgEW9HngkxLVZT91mEqY4kq3442ZVGyuprxNWShQAeSg3BB2EgMNz6dF7Tt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EPGDRZpdVqW9123uBSwhUTM5cySkzARD6RM5k4fHs96zTW5EyiKp8myM2DZnzASSuHAUd5MxBXJKhx88sjWyZgQ",
  "key1": "4pj6hcowArds2BzgvQ8cvEt5fK71e4XimiiVGv3BCH6L89oj68mNjhDEEDb6rU7sdxDJ5gBCJRvL7P2vHFpQA6QH",
  "key2": "oyxmEKHJMAyXjHw3fahLwefHuh3dgRKcyi6t7zkx4rDZ6KZUj2yvh1RsRmiA3nZNznXyAYFX5rbhMUQYUMBXsuf",
  "key3": "2CXqgho5QzL9szazsAomyvW4SrpErgycdPerzEY5bACG4UpYMVkS6zMuf7QqneGn2SpeKi2UjNR7DhVAsRgZjWdZ",
  "key4": "4uyhuSdSdqa4zSYfTv5Jq31bHCpDSXqz2EZZkCG5pbpWxPj8WZEwzr38isy89rT25gnkguJEH3CPUUYns2WsiQJb",
  "key5": "26hVjkZ9bxofmrPD4UUtyBVcBASEWQXdKj8nGYzcGh8ZS9MGTzXrNrKHUcaf2WniPQn8sxfKREiB8zCSwdHB5ntV",
  "key6": "A4mjpnBeq6y5QopF9cuwvjgFiRJLZ8eL7Nvh6Js9Rg6vLgcpx3hQrtaJHZhgFpwbuxnPhjX8oWBznWpWNAn4B4R",
  "key7": "2QhPpsYTpyZEeExiGWfGhFpJongW6yQJ39jU7AMpjYSNYVw8rGu7KHnwW4GCqeXqBXxtWLw7PU9gazwXTK16mUoh",
  "key8": "eZ73Z4qGLiUwUFNvmDqVb1eZwMb9JzPMjiB4y8CDWLv7q7TjT2L2U5n2TjMhobKGyyX4MGSGjfdWxBgztxtfdca",
  "key9": "4ZiqK13PV58ZaoNvfnz9o6eqfsSRncZzH4VHqVNtpssorSZ5DPLgSNTd6usxSeaWo8GDiieJEn62i2VPiws7rRRM",
  "key10": "2S7v7ZRhGCNWGgvEfXuGr74YJKkhoTk9YSQWchyxi6A91dE7A8wkzv3NviLAJkxt3yFGRM2Py4N4jBjvvMAuJoSG",
  "key11": "2N2ecebUY6gsKbhrvQUgRrKMJb2XZppDjrv5NVcUQiAUtBVf6xNF2GdRU84KZYC7XZnUcwwjQmvQqVQ6E9jQu4J2",
  "key12": "616hxQVZ8KYrh67NcHjNYWpib8jsq7qn26nr4LFxgYYqy6y8cZdQ6cUwoyGfQZMnZpTC7PeTywx5GNEDzKyKjyoi",
  "key13": "54qvfSdwdukPA6u6JpGAkfrtaQuaE6k7A9u9MnVseCzJS3n1BNDmBSWPUwyTc3u6ijUScwbZbRvixxvxc9TdDCXe",
  "key14": "2rSmYXJ3vci4bu3uUArZtKvDhCfXy3D1vepvmUXcxDydKJj6PnKYrzTbpFuqDYcSPaBDXQLN9X3jbQND894b3m9b",
  "key15": "62V4Ha4sK1XPHyM6MuN8YCLcbxSgfLthx6mM7ZxVHbcsRkuWjF3ZuxPY1ZmPj5gqex9rGvekeBz7jYkiw6ekjiX3",
  "key16": "2axoz5vx7S7cyfKKh3ub2aA3wLL4BaUh6PrH8WXK1MBrC2tdp1KRkLSd6TZDNLiC5uT4g8DM9uc6FDBV22AKnN7N",
  "key17": "6xqBz7vNf6D1dp4ByhZiacnYuZpGvVLZSn7d6Gd8SSGMfUd285c1mbs8rzMvp5pUH5qWPBxNiNuAbnFX86mUQU1",
  "key18": "4197mkcUh12wC8ykj1NMQYmcTrtsmewA3wiGvoUwmNKJpbA1NRDuEE3XmkybRqGGp6qfofp8TVQoBiuYz6hiFBqi",
  "key19": "56JDRQ7cMhRsChFqtmsGw9osdce3CJQ8L5Vn3aqbfMe58EosnTCEdSLLtYDvJLJ4zgJ3m8dFi6CAhZDiCadJTGDH",
  "key20": "4ed56x7obUioh7zFyRJwPdj8KwR5RvaaKj4N7s5GsEUZW48TVWnVTNaoANohSf6UbGMd3NzNED7Vqqa6Kfs9hdez",
  "key21": "4gDCwG7oSAoyG8isNPaY627PJke6aJPZhp69hirRB44ZASZtQZsEaTFuoJPo2MnXqjixmcFyTXBZkXrb4X8FYWe3",
  "key22": "5FtaWDTPjzoEwQ3tQKY2KDbrKWjmmnJier2LXH33zaq9sBEYrHfymVirubAu888McbYMjn7PUPZVBBKUqDDfu3kC",
  "key23": "3QjZeeb2WZWWoi9MuxfzkUnWdhxinNtBn6xLPRVTWTh7TK9G6Tgh8FU7XNhf2Di6gdpfJFyF4vsTfwkdoAdJnZFL",
  "key24": "243qwHAXYzKmr2WEDmYMUkecRMjZ64cdNr3XVfHW5FS9NGM4jugm24bksyb67pHZQQyNkaQ2nj2o3QC5ZPmESFZ6",
  "key25": "22tgWLoQE2SM3N52tvUa5NspMCxG5JPC2n5TrgDnCNRepQqhkR9WsZu6mrXuwZh9eG4dHxxhzN5DZ6Hmn93a2dqu",
  "key26": "2sgf8zH6KZLxN8FHPeNqtUnGWpk2Mi6wn2RLwj8q6MMpc2u5zwcwqcRah89tSB6mYy2qqreuMqGCMXeygQrwAkGR",
  "key27": "gjpxcn9mDoTPtyd3CopHiG1cweAm5TumzbRqm6zc8G6QqbETvPWcKNt9G6JCzhQoxRALvPFoaMVBkYQ4i7dDh42",
  "key28": "2sfEVpdvuzsoqi2HwpR8xJrWetRYGu2hUmXLgJbK7fRRwUavfVhWep8Nu5XXkTAJtkifkRZNFjdjcbmCs9xQ9YLk",
  "key29": "4WHhLSQCnNnTFTgYoPzcvWuUWD7oRcY6gVSoPoj7neRWaWajtjwM7pX8aoCPyNbHhCyCZpxA51S5MV4HRn3dP2r9",
  "key30": "6hATr4xYGnWkfVMhXtHPcpCVKJ1p8VCxrhhFAUhn5EFqNYDr7KEWJ5spPgnaaFE19htt9e8Es81j1ncbtg6zVNz",
  "key31": "3S6RLd4GZgqQosK49xC2xppq9fPafu57RGB7JNmoMjPEadN5zXM7hiQHieKQqhV7Rt8jqvzDv4d2bPzQiJFKxDza",
  "key32": "NzJtjr2RfgDD57jt1qAsd24Hywrtcf3ipRTVhx1UQU7chXLA7wyVgpiH1qBodomES9hCHfW3aDjTR8pVkpJV3xD",
  "key33": "7MrhdJ2DYxP2HwbAEnc3HrnCBHo3mKpJkxQnR43yqop2f9Sz1WCe59YxD6SPLNwszdXZmVTxWxCLruCoVRXX7Pq",
  "key34": "3Go2GZZeFmpZdvdKKJnHdV3d82dbnsCsJ25ATQTGMnt4JZMT2T2t72GfrtaByLFUxrCb5DwUizNEgxDjex8xq62A",
  "key35": "34X7sKu2E2yaS17f47VyTRHeDQ1Jge6w23VsKHRKXLhwdPeUbKLp1S8vaS9TSpDt8MKynQvTCehAVWgUd9ftQ4Wz"
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
