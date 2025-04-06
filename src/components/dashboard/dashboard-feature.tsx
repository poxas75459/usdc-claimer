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
    "4S1JWnmg8RrvZEWL1MpRwdfLt9NctryYjopLmg5CKd6iGL3yfDCAnrBKTmmyCkc43eXvxLVukkmQR8GruQLKzTTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kKXkETxAdKNHTGKV2jMmd99PZdVq5cDnyKB7F7w8sPesP5a5fT7Bz6VxXErFa1vcLQsYBWqBqRJGbRYykVP383P",
  "key1": "roiCaHamfikpq35zDpsJWiiULtHm1HPekoyuph6Ehc3ooKtzBbiAxuhLJ8Dut17bVqVDuwgyohTuKwBsWj5jncp",
  "key2": "4o5Pj2UkumKCtFadkJCR5qCRzhDU3B7kkQiBpCHvmoEKhG3kwbKFTQw1oTHehNb6PGnHcQCvZqEPLnBTTdJeiM4i",
  "key3": "2TW3kQk5kTesPhFc7EnEHVteqULDuYEMSLLNWRoqgaUxXFG8DUb6bJU4DkyupHoFmjogMTbocuwn9RLsDAnBTeQc",
  "key4": "4oiEpfMa5d9MMGziqjzQdnj7ywMuVvMSyBTEpjG4JxZmAGBQTQXex2BsyvmakoceUCjpQdfNEEXd5dAwaev7gkPs",
  "key5": "3dECkaP85CK4C2PPdxA8yRKwesdPbnDV9th6B2dea4Pr9ZPPAMPZXc4a5MhSzq4NdTPRkmP8EG8e8975ECrznuNj",
  "key6": "2DCtV91CkHu2npAWuHz168akLaSUCD1EgjA8QyhzrjRZ9yjjxjjus2tGbCiT6qiiVtvwVe6fQ113PWKem1j4sjQo",
  "key7": "3Rfj8WPsv2bLECAKD7PgJiZia1mW2zNhKmYBTnMAsXoAYBKqECAiXuM8BaVBiZotKkqvLBFpLX2WXEogUPb8pwAW",
  "key8": "3GvshhBskHpTnZtFYVhGXbMtB8A2kpzhArTnRsB6hcHrqfH6wFhFCJWbr8N3KKzdZ9Mj5AN9eNDdkh59fWU8QQsT",
  "key9": "45XMHvAjb6Cw5PEkkF8ZvHgZUjSVTEkW7iKW2Zfo7ug99U3WEnzs7A7B66Kb4rexmKn4qzd3Cgwezv9VDjUYFuhf",
  "key10": "6695LvKNr6rnU3ue7SKfGnYEqp7f93VvkDiZM7LcfyyWr45TQFKkEozP6vTE1yZVKYM2Xoq6tTLQq1E7BdCermf5",
  "key11": "5eWsdE3FLqVtwD4nuZrhpDxGgjGQo7v4MWvEQHMjSLvp97p6Za3jabTJjUeeepRCcXrtysitz7vvgcpD2zANqZbh",
  "key12": "2iHLswb7PSpDgv31bwcpFquDngDgJh22urGmomxiDuHUu3ysR66CAsrwJqUJNvbseWhx2kpVknjJ1thJJGFyDakp",
  "key13": "3vggP5zTgvSUjqp1UdSUmUYm6BGSSdDvqU5Z22jTMDtRW4eK7Uzp8wusnhJB6fSPDjcectSoCp1ggH2HZJGokP7N",
  "key14": "3QFy5yhKVQMHsBS3U74Abdd1ZBy9JBQCjZMgPxC2M6uixUmWVN55z3SJjG419hJJxkPVjNLFabiHUeWSCqpFm7dA",
  "key15": "3KwHbSA1GvPZKpEADcsL7WgNJukuLwUogDkrEFfWYmd6SHt2vW8xmCoya1sFfn4aHbEKGrqcLHuvCQ7kzKh6dbEz",
  "key16": "Lx1GkaDrcfan7nV32Yuk3PpyGLm9bLgEkHtgDbFLsJJPQUatxrTxdGzpH6LzUEHp1Jm4RMagVEZWANdm7uNRApD",
  "key17": "4aoD56vQCQsm8DCDUnmHcj3JzQbkvQksePnk6oRQwppxW5SRRA83Fst9dPw2ECjAaa2iayQ9dDSdqGJY8dU4DeG3",
  "key18": "2enVBj7Ubkx66MWuhRKdAPHrjz8FFs8FCusanuM4i3WkLActZV2xPyt4CfSCBDVszURp2fWEDV99aKqTqMGDMw7s",
  "key19": "3CB5j533jG9DrbAbF15nG8gvqGYtL6QTjnXMjgCWE71SVTqzmCC4ApLmkrog1ffHPZy7mutBVknATEPvva9yfgES",
  "key20": "2bu62vYc4G9YS7jgBJyym9SH6A5ASAqhmNPTn8YPXXht16RhZgURrBcgRETam4iUwFBE8kqCpoWBwHYE9mPhA3vL",
  "key21": "kRy74dQLyNyBfwafvaQuitkvoKJVSe7Y4zemgDHFqUQWQsSd6TTsn7f7Xeh73aSJkUupoBtnVK8s5oEfPj2Ryzt",
  "key22": "3owe3Yt2xEaU3gjxKowV5FaYfqEseE47QoXCk2UaYsiREeLD8dGgUZsMC4fFKkwqg3EhqSJXGgixowitWfrRN3M8",
  "key23": "52o3myeNVcEWpNWsKTE6tXbNViykjVLvJ6wKygJSNEQrRRZmgUhxEUzCxVimXC7jVXLzFMR2hBXy6W67j1xYRrPY",
  "key24": "4HkKFYSEVMy9u31YL5Nz1R1rDiV3cHC2hEsNobHeHR2kzszAerGFnJ1F5k46gj3keNmVDvuw4wz76t3RRNxfjDAF",
  "key25": "2KiWfAUNbc5k4gXSZEV9GnkqmaLUBzq3zkj3yRc1zyoobL7LH9CajChrZB4xSn6sXiU4oRPPFCiQaEHyZZEcjEAH",
  "key26": "2wLJk8UMdfLAYs4xCP49PxddPUtMYbG5TVj4TtjFeWWftKejC9XhT7GT6f6jPotQejgSeAWdWhgzkNs6WXnRhAYA",
  "key27": "569vYvS9nPUW5bY1w38H2K81ab5jttZKr7cQBQAtvztXisaBwxuADS8fA2v2ywwmuco2Nb4F3QTH6mP49UDsx5YN",
  "key28": "5wLcEXKoGu5Mme1qBwxcRzc61bHvSgXsGAyJMKdVdZTVWQVDptY7S6LvCgGM5AP53k71md6E6JBPWH2zb3fMAz5v",
  "key29": "43mANmAA1vZFWm9rpdscAXLwjDZUC8CXLKxFS4wHXkSCryZJjqDuH1JPMhBMRSuSPEaFNRKKoWv7rzT2qTgUZqzh",
  "key30": "2irsNfWcvJbeBxMcMYjpxVobFhaEpCZG72o72hPqTJpuw76y4yVsAoiwAaBPRCKk2Th1VN57uveoDmVXimXnvLji",
  "key31": "5v3wEEDvmb2X4PR68w2M3DHhLbzqbYGMUUnvvc1tzSzMFLFQ2dyvSgLX5bowxLQE7rYj55ZgqZdMFo5vxz1yEAiF",
  "key32": "21RQkZ3k41zAV6f3377P4AFw6FQYWd7QQDFm52kFTCakD8wjShq9utBBqwo15VpmCm6ArJeyrwpP6Vkc3tpgZrCa",
  "key33": "454t7dpVzZkBDzorWZ5XfUT3Ss1zLhuNM18BEXdrf9g35hYZphT7HSf4a6SVfLcLzVy7YCfwFPwpGoB9eMZfpgHu",
  "key34": "4csUvKbRtUcjRZXYF8cNGKwedWhyrMKQSKjxP5eSqEsrNpN3PibERseerVhzbrw2Ra1FDFGSgFBt9ePLyxjocpg7",
  "key35": "4RzHw3hezk9ZrQ3Gdkfq93BBKUGZL1osA7HeapjLTz9inBxHDhPVtKjk4D9Hy9osRMwrrFvEwWy46jZ53pC4dV5x",
  "key36": "2UQyj6a7H3ZsiMThYYGYHgw6z1jXuP8BxjZeWZpWrrYheL4BoaN5ZpkhML39PcGeBEe4JV8ona4NL9zmJJEnYNse",
  "key37": "2BQVaoJpRSC9uFwpuPL6ZrDRaaYy6h5wgcZM78DDw4y35wZLoN3fP7gxUL92NZ5ca3TVBGcqiASn3L4dW1mcw7gC",
  "key38": "3hvX1ezuJio4qVU6DSd4i28SWb1hjs3WKUCpEnUmfiaqz9PEjKDfQErKLNF3dptphVqhGMzHztPCk4TrT3wbAatz",
  "key39": "2qAUn7bD36tDAqmXmo32Zjah4D51tyTKNkmuZVTuaKdbMcqbe1VEz7LqH5DDAycr6XWXh8xXe6Pj6qHdgAG1mycZ",
  "key40": "4W211mpJhUsbVKQtZ4xVqJfu6p1iNSiACAf9c357rEpnUnbmGdy3UWGVeJDa2WLW94GdAG4esSsu4thFrtMgCg5e"
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
