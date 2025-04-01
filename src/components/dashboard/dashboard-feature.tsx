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
    "47tju7H9kNcivgsWKJNRyKyBHyUxRxT2YpArPkPeuHjy1qXiK8dK2Fng31smzRg7CkSKMMZTQGstNftLE7j3hCQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uog9GfiDokUWYH6F5vW2s9c2qwqP3s7PZDVmngwBhPtok3yhXzUXEnLcrBpgg13rUVMxysmbkkADeHTrCUy689s",
  "key1": "huaA7ytaoBLpUUDCmfx2JZh8kjccF3ZYYw6bKhzLi8XGcamwtsPywXr9SKiGLW7nhwjSHdysGBNozi9FB6Pjbq2",
  "key2": "2UCpSXgFRmNxyWABef6m8HpYagV2mdQEE7KLgDs4KLUWjPtzoDUKzzqB8vuSr98N3oqTDDzZxaJhkmcVHb4XRZHk",
  "key3": "PKkumnySmEBuKLoSyNaYdA4HhB1UcGsSki8bHvDq6bkJX7m5FgnEroDv3QNbSjzGhkqgY6c5gcS5Wj7g7RQBtwh",
  "key4": "3Ltp9WH429LprTAS5261n6o5YTkovXQKddD99S1chLDWwPYLwruhZax9fW9zXmMrkYUVcPBQ1Akj9HFZszzK7SAi",
  "key5": "3g3zhrnmgCabYDNzgE7rvFt5iHhDXo6YDZrL13LSmHowC8FNhyNnPbaokBfn54Rj1pxLNKHPxUgkKUeBnNAwNiFD",
  "key6": "2fe2uQ44ydywD58qzJB3C8q5bMZZUsG8kX8BZmLsGQw5vkqe9CTEPvWn8rch1SyLvoivfK1nFNtZfgTZLXWRK4iY",
  "key7": "2QDfZ7M6Tj7xD84GQcuJcSN6nq51wPTQCbMsE1XRXEwfEMHKiaw2LhXQHifFbQVgajkx7phBRRPBdaTZ1NqN1dL3",
  "key8": "725vaAmKmBP6TrYsT196RGDronxg2LThKcQbgTaEsMAtGSDjLtkJ2kARFMorbLDhVkozmHEZ2PScRMmnR374J2P",
  "key9": "4wGHKqr33umGJyviRBeSqUZZkkVYpWbs9HPqsQGJKnoBoxb4s1gofnZRTt6czSwEvDnjZ5j5aqKA6cciX55dUahN",
  "key10": "3QYXs1GpDzJUo89jasoXWMYpwdBqPVFUeoRBrQq7CzHgR7xMdf6CKHAufQPoFB9KFMWqeHQkMRkwTD9guKJ9nN1o",
  "key11": "3W3qheueaZ3ZEtfMxoK5xA5i47xHXV8okK2u9a2Xhf6Lm5GnFPfV8GgZcKywLieLr4L99KdvumBJ1kt29cxCHwe1",
  "key12": "2tG5s6dembUKpHRdsCnzCSu4aZ6Wa89hFTu4pTxBzjfN6Nm3yehs6Urs3eb6gV32d7ULwjeNyFcRcq5kjUNjR2o",
  "key13": "62J4gZYVadr4pE2GtEMpyFnSCU63BmUZSepUjTqCRGC8t93bgTmMmLXVw9CikW5SZjYdFUgPrWm4uLZS13CMhoVU",
  "key14": "4to69vrzWsoZyudGcZoPr2ECQ51Ta31yxAyy3hdFWQj1aAyjJx8AJn78mwQkDjhFPunYvY9jtaB5UgFzMwXTyBNY",
  "key15": "3jzTZQihzjKj2LtgBm93pKwMBQoeANigSDU3WRZAn8qAfmGEss3U1FN8KaqZ3hnG9D2dCmC4mQxYWCwiKDWuFB1k",
  "key16": "2HqwV4nXgv2ttv4z3NhEk3DnYTajLVN2rtwZYUZdu4K3A3H6wdXgQdAoeNtMcfk48C46cAyxhY8X6o8jGXBefcFA",
  "key17": "2veABbEJ9sBwtyDwbJToZS5NQytQS3shQWVLjXHqkxSKUjjgGUEUjLdShVpxh1W2t8CwuyhAPyLscMWmzswkn6Er",
  "key18": "5FdLq58jygFyy5qzyDzj7q8HpApva7GbC7w4ngQLuoAutpBuJZ9VKV6vuUYwtfLFVmcDoS636GKsh8AuDm2yo3HE",
  "key19": "rQsSPysLKnUKnUhV8bV2cPBY81twWGGkEoMvFo9ZxqdEWqYDv44bd23reUjdiBxcF51BWk4iZEZUnd2k4fRuai5",
  "key20": "36t39iwVHGhLVFrRxGPLidvpE9xFJn7H4hSQLDZbPq3kGoH4n5xpfMdUGFzPBh8iZwtiQR7KWZRTmDGykEFjgk2p",
  "key21": "2UfVGm9M8x3wBeXwUEjBMpUdQhhxyV9YQAkwMWutu1ukGBLvPBTcR3aKBW8Jw5GCHsUKmz4PDRdjd6u1haAzJuVX",
  "key22": "ig98Q9Yg6maT4uWsgye62aQNA4doNcz8fKjTysjL7CRwqsFKcAwJN8z9DrHxsmNgXLwEUb2FhWwf3nMv5jPuPfe",
  "key23": "5ans88o8n4ye9LLc9SqJc5qE3MvgHYayA5Db3GXpSMhLwd7ASbJYXfhcWE2rczuthyzKg9oEjHPUec8Qive3f88H",
  "key24": "LWTe9YsawqaWDfwDbTRExqRQtVJrTU6kqZEznzBdcvVfQ5sQmXLEBoRJsw2zvpWYbuxagzzGXFiRWMjsUeD4D35",
  "key25": "2FuGMGrpNKcDXpQpCEZ3cyYf3RRLhWNPRduG3PF1oPrEbfXPscHfa7enPUhPpJdnLQq9jYxMhga3kwTutmdxsB2H",
  "key26": "4t7TwDWnDzJJFrwTTyZLmZbkx9Yj2q8TSHz6McQZU3GcDmp18GKqeWmaVSec6c9Ac2JRXukZVhjHhBzTzMdgbyHw",
  "key27": "2hSewshoHu9QzRbqcJ3qCXAqA91jPu6ZHg7ydo9VLAijnF624kKVcGPkMmD138HKSsZEz8eR2BvFJgzbzbtzaA73",
  "key28": "2XJbAuKmTuEFgBSZCLmKzvVZ6kryPd4Dz9cbhuXAWzKDtY58NEmgGFuvZp1D1PcjerHNKUT1Ui7Vp2yZdEwmtoeT",
  "key29": "2D2HoDxpn5VJXC8qKfG5WACpUxvxqwjGS6CHkKqGPFFk6P1CiQQxAPiag63Uwg6qDxYnHx7Xjodj3bzNuXN63CNy",
  "key30": "B43WX5BpucFrUtafupKVMy7p1mqoo2dyau6UKuu3GMs2Ux7xdkAb5JX4J7ZYKCznXAnrxmpqU98wsi5ZF3HrMdo",
  "key31": "21CZh6eMRYKWudZBarX83EFXw7UVZvzapryx1e7t5XLZqdPWCXi4ski5tGuJLprPCWHGL2L3Bf1HGXCukaxd6EFM",
  "key32": "535aBRHHNRfb5j2HUSKWZDJfLQPPL81HhXUcJZaY7nTDu9NfLSJEJFBYD321optgt1KQ9BUiNjThVdg3Fp3hDhXe",
  "key33": "4bk3CxC2kaunCRXQfSV3JGh98PjF2FRkywB3XQf9f8VEe71LksZvSfsHUwUg9cEEp6QFBZHqcERDsR5aDXjf5kM2",
  "key34": "4FeM3Eru7p8QyVZUk2cDa5r77oqwwL3NNXidraaH3g9yNfKWn1n9uSj68bCj1bdEC2mCEHbJexqh5Lu9k88Er8EZ",
  "key35": "5F8hkBCUrPjYwbUt353tJ2E1fEfGi1J8y9V4GQmmDdJV8B3NRA2PbSDmizGd4pBxfXcger7xdNLYqvM6iEjytSEg",
  "key36": "wMDPGvofuoq5uz9hT3AkAyt7MU1jqDsVkCqzJgdfKm7wBgXVizaXG4LJ5x2ZNHQjU4fzN9YEqdGzKALGVWGiWfU",
  "key37": "5mNPbMUsJjnbfgDK21W2qfLvUUENTTB9QTF7SKUBPU9q1bwhPrBewv9YvsNDaDEK2cMYD8sD8RDyGaHkrxD5BhMo",
  "key38": "26XZCDFydRKGHAGqU2maAeztD1jwjmf5PgeXcfTgGWpnL8WikGG6JBZCpaorsXBzir3Z6KmFEjRhfc8YShRwSHis",
  "key39": "5vU25thEAXgErrzJopT49AybVk2dWkvM1nY9oD64hfYwX57Xm2kziS5pHorYh4iDuZKsVjDUrBGsskdnfUm8N2Ge",
  "key40": "4dVdTvAbc3wzu91YqKu83fBrND856rpKvHH3xe9zF4HSjHbKqFY4dY6mkbtDhiMaZ9BEYxm9DJehJk5Fc4ZwN6JJ",
  "key41": "3dx1mjGD7G1iNFWFeMuGZLjuJqgtsd8bGRPguTKJfPCvUduSwyBdgQcF9c6dpgQb92nV6cgWaYtNLxYjS9j7URjz",
  "key42": "oPpBsYYQLYSwS8FH729p812rqu4H2DTkrZGYYes6LzSxBHgZiptke3rwJntFpQ6Tg9vvapGrEGey7R6g2vwiYz4",
  "key43": "4feVM2gxeARLbj2SGrRenmW9EXquXdEL7c5uMSbd7rCP4X9NfFtLw9RuQ1eLNnPMLfC5QrgVv5PznRnvcNYvtPiT",
  "key44": "3ejFxtkbfLAQTzpSy8nFcWsPrFrpHQCiNbZeoFS1JA5mD6d5471THvmwU9Bosegd3GvR8vs54XsuAmvGKdqCr6b7",
  "key45": "5dnnDndAGKYuAtiSnBXW1v38MAEFErHw4UhrghvJAYAePpVFzaRVzcK9MVgdWu8WXzJXYDivh7zKbHn16VFa8Hwn",
  "key46": "2bDFe53QxVrie4tKQj1ny4kboUTC4roPQ7mjZhFPNaMVjVQ5mbkWEUDuPAinBTKaBw3oUciX2npiSnGvNMntwimf"
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
