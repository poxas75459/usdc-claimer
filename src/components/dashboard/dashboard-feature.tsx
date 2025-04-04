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
    "5bpjrFdhyGXC3cyJQYNokK9NzQFzw5ukhxXqyVrCzLRbiJ21ciAiraFGUkiBX8BjKgFi9fQZALDgQuQ9dEe4Jp6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65vHHJu33zFgobTyfGnVwZnhMP9jGkZgmN8EcNJV5u8YX5Wi3391qYALUegr1KDZopC8aej2TPrNNeSYKJr2oCFh",
  "key1": "2taRnLGbpK1j6KBppas8njxEgUrwRPdNn131ifFHiFbLTh2ynC5f8pbZwRadfCCywJtdnziB9Qx7LLRMBWmVxGAE",
  "key2": "2tXCGHEJ4KijExvxEXuiTBrYrh5tYtr6w5khxq9X3TcRboLYXPQpusmipiv2tuSixqr1qNyRb21cLDy8mRZxxqnR",
  "key3": "RAhmuydS85wayz5d8jbpn3zscpVFPk1vop4hV7bKF8crsEysW6oP6cS8bPsR35T1Nyi51PdY4KMw8pPa1ymWDrU",
  "key4": "4hJuAwogJ7Vz8iu1NeZ885ypu7TqSCDQEj2Pz4s952mKHMtrFaKuVj9saMVQt8yxNJZ4B6n9nYrvxRBjcehdbBYU",
  "key5": "5C3KvP7kqdYQ8jjPqPewkQEDBSPuGzrja7sVJggth6b2S5qU2EZg1R4agxTryKBvJh8azLkewmD9cvZTc4avyj78",
  "key6": "5DGBLYqAMtX8bgiUjfvLWurfH8CcdRQnxykgNCkryoobZavTKbmzQkUP1C3RkZw3GveukpLwGrqNEQQdmo1DYwKp",
  "key7": "5FtLuJnBSrFEBuyKXmYTB2fZyAsvzN4DoXXLTCvsY1mp69q77P6fnrvc6dmUCoXea6b3Dn56NKg5cnLKFZBEbbmZ",
  "key8": "APKFfWszqUYvJ6jXEYBo1a8ccQ2ZLRHKMb8SiLEWm7A5tESByS8YcbTGfT8FgebTwv69u51kr2JTxYNwEFuwKz8",
  "key9": "5VUDv71djDNvseabvCUJd44NJnHTuyCZPSZtuERQRphu8KuEQQZUWkyqu7WJs6XdrM7HrNqAnHCt579mWktRjNnu",
  "key10": "L5NpKJ2ZTpLrqs2ibun2VjSfRCiXDiJXqxLHg31ALEVcK4wkmPX1BLNzAT5QyYuLBDGnpY18YJQA6a3Tou2YniL",
  "key11": "5XuJUgCXsEoQznYxB1z8o7QCeUfREwRSctYU4B1Teotu3b99o2kg99h3iCCPxfAoj6PVTKXEknU8EmE1yk9FRjrd",
  "key12": "4vk5famiCzfZmkiyfJXxo78XepSCQVRfJ3BwLSmniRwKRAoQtNYjgmfoQeVXLer7f19Ke43tQJoMJkcRw8tERbUf",
  "key13": "uACE8anMCKjky3cvqRRM75HNVzfg3ozYFFdcakd8mvJoA5GH6WdhWiwmCn3VseTsFnsmkofJqNKM1YyDssNF8fi",
  "key14": "5YgCYUcEVmiBy9r6kfFEpxBcgzzpyHcuRLSWZxCmQTgEGXqPy16gjRPgU7bGPWCnrxoFKkCwxAbJdMm36EHcUGL1",
  "key15": "Hf85kb7smq2qrPaP8UAZ2KrByuUfRkhuMjykntYyYikE9Pc6VbMyEm9yDiCD1m26D7dAnT4ghmEMTuCdUZ9nRG1",
  "key16": "YW56fHbUMXaQ183edokuNXfafZetLP23UKB7t9V26VfoGzDMPa7f1n7DCxGZhUUUiab97zLQERZqpsnPASfyJXi",
  "key17": "TUnsRGZ53raQc5rahfDJtp6KUGUSzaKNEuDA2YJbHjEfwH8maM5RrHZF6G8bceXfbg3At138kEDGK9iGcdeWjpr",
  "key18": "2rmTnZzZ9MRGLdSpfaJmUK4munkXeiPjBPXiGwfFyqsVDE2YdfMhZMBGi7xgBms3uKTC8MQ4DMYXUTGYrVqaowoj",
  "key19": "3odVrr9rE9FpJ6evCiUPq36f7NvKfy5tJq9tapP3mGooTzYpMqQJqNsMMXkEiFKs82EcazumDTFHGGGYad2Q73me",
  "key20": "52HsKgs8igLLxxYZFWSJ9fhigxecBg8D2aFVCvEiGXF5GphiGdFjutdcHbViLqnWJa7V4SKJWe8imNjTcytYAnaz",
  "key21": "5deZxTtPJF9fXF2ivuBKxnghWhsMgJXvQTp4UgS5dGeywENCnoM4M7vKPFTHKiZoVHdm2pCZfEX22XoGYRY3fuXb",
  "key22": "5MKFut1hiZCWbLbzeTfSrAYsXFFxXbdYrVeqTRpwYFhojjhCoYS436k24BJxBFzfa1jSo1atc3k6Xbr7aXddFJ76",
  "key23": "4LZuvHQVGwRHaXkJMxDYuZyXLev9wikn9Uc4FKXC5TDBCd8vLavSBNakWvF1q2p7HGGoYfUM4TLF4HR4ygt2jUpb",
  "key24": "1vPSo1ox4EVL3P7pUEkjnu7ThMyUpsYQELo76a9RaVkjKUvSzy5dvFUFGPyN4LxiT3KUwDz6sAfcjyZNSyof896",
  "key25": "49BvHKPs1UN3p6qovbJxh9YBTr2C3N2GL4zN8kkMhiN8X9MxpSj4mXopvzwcXRwfBbBKDneD1rpFGPA3x6T2snDP",
  "key26": "45vTvNKYGa98SPQT1jVoucj8g8zQxoKRfAsBFRF6VBDJ8YwZUn8KCjiPKNqd7REzMNB9stWaHVueNcVx7RPEG4ju",
  "key27": "5LBs7zcpECJB9EF2nz2Zqdm7tLEpCmy1y7AkEtWkUv52a9kBU7LyxSV9inPwGTscHpHjS6K1kGMY2anQLcwfL7v5",
  "key28": "2i9kf2B16HpoDDrydPeaHRYNJ1HbPMmbAHEMB1uxRrZxiNJFEAehp4hSSBbVQwcvq41Tj7sX3s89jVNZPRu1UaLF",
  "key29": "62WGn9haDcC9Q9frFSXLryiAsFnxiRsTdPjcttfo8GAeaVCFhduDdbW7vLAVwKGvBqFwasS7QKkMLdvpihALKeTo",
  "key30": "2M7QQqrFEeXTvxLoM6xAotRbqHXULxKi9ZwAb3pH9qUF9sddaLuSpmgRqYcmrFx2GMcEtVVt9LLhAw3qyKKPPLpD",
  "key31": "X3VykvEaCYKU6qNdMJ7oJfAEkwFKK8QX5DR8PciNGKVSXa1tBhLRtzYhzW7yWvV1JNGfHgdvaBDZKaLqhdRYArY",
  "key32": "51DD8aLZU8xgbqmZLusyZ6HLb3Bg9aHWqSSd54qhrCkWfrPY7htoN6EsGuvK3g2LBVYois7TLBQBtXzURH8Bhwpx",
  "key33": "cDeiwgxnGjP9tLPNoBbNvTRdrXsmS6uoGoezMa6bwykTf3apTUrEspQ59zQPBhFjzvSWy6Z7cZtANVo1oXhFnKV",
  "key34": "5H1b72uk7kThargiGMz5qrXwD8ixWnXWfEgWcyzaajHtxZD6vdBGALdAmgAtBsNewLLUWPcZUjk1Z8cqD2wnPWGD",
  "key35": "66t258qCwrwC5HMJAn3rK1MzeiNfLCnzN3JHyFRHnjGhzUrJKT5zHfXTgCpSxs4AnxSmgWr1fQNMCfUEpGnSK9mC",
  "key36": "5ey9BScNuQYZmZKB4Td4xHMB7UKSLBamJA1bKjXM2XnHco8GLbi3K9Ky7aHn6VavxXfgjjNh3cCv1UDGYvoCKiHx",
  "key37": "3HysNjY5CpjpGqwM3tNnWSZa3ZNAiA9VPUowTBJRSBgiuxW9NCv38qakTuWe29WqdBU4kns9By2JcvtvwgkeFJSe",
  "key38": "c54q19fGGPyu2Ae9XLtnVGBBQLymvvRfXk6TyQ6VfbtPiDq6saxiQsDv8iq76iCHb2csou5cey431HyQ75EcJ1a",
  "key39": "41T8WEbioDvWdzDoE6itaZ5Ck9YdzcUevKkJVRx58P3XqGGr4H8KPjkUUXo5N7B1SzqXdTzZZuTdkq4BuK5DUi3i",
  "key40": "5MpJCCEyQG3hxxurJhGPKvaocaYqZNfy2DTdbHszTak7kjYbZsVk1D1JgGttVWr4aY4xdCC9qPD3yo965eo9KDve",
  "key41": "5PiE7HF3LGfCF6g5rckDEycyV4opxvb2X7zfugN7dMoRJPitVumLxTGy9NCsHfZJVKy6a8VbMF9gUZsa39ZQcyq3",
  "key42": "wWiRuDfxULLAZiZjqLfNgDcEKrxNjDGmTPFCHwQpeizoKzmR7ENU386fUBXtBEKWJRM2WFqtYaekYw8yeQmSqdi",
  "key43": "2ZaN4eJDcP1KkYwgJQjTLJZGFHj3gtkeTA5TpehoJeJ9z8zQ7xnHjBrtRKbPTD9DY5Kmr84JXXY5kNFxP6NG42PT",
  "key44": "5izhYoHR1uCCjT5dhEQWKsKYbFsWrePqd7HpsjHkqHURgt9e1ncm1kCLy1sUnP6Hrkc8yCJM1rYm9919xcVAjcmR",
  "key45": "2qTyKH8w4NxKnDWw9KZZZaipRkEjuGg8E74KgKN8RWAfeWAtDNnkUQyGq3jqMe946uirybvt75d45rWxG5VPHAGr"
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
