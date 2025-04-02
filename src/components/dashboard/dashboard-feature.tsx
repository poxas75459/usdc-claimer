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
    "4wBGJWMef9wfeCSQEXd5R3CyGs5BsS9cGemGDfjp7oJPBD9kXSj6hyRTy6QfCHYghiube7KzRN4KZVjThNEXT394"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JbJL3R4Zetqx44CCgYrKxirFypFhKsyAmWLSsDQvco9CAC1VHbj6JRwNkPm58qrQSnS8Qn3h1uaPAsUuBK3KyLB",
  "key1": "2gXQR9iB4skRm9mynKnxJeXZr8aqRi5GQ73U8dyLP32HB56zw89omYgHRR2doD2MhF98MzW75GxChJxtdskkwkAA",
  "key2": "2WHGkohQHBtCx7kJA2RY1jA4TT2UGmWqZwF6Ruq3PzxsWjtd8oUurU9rTzT4eUx1dMMyf6fy19FbVtJf7t18HLL",
  "key3": "3bHMuKno3zYjzrcWtskZxHsuGDtUG8QvbdcSe4Z9B4GB1XtvXVBHvJ2aiWjXYYKNBKwy9cSQZN2VTzypc1iESAjW",
  "key4": "39n6YuiRuiAd2Q2jEkpRqcBZRUySXDFgM6HzKsufkiP1hEqWiXnciTphUyTVneRHVr1aF4br9gactUSDdpCe1jun",
  "key5": "3ZyJthqt4d7DZZiFRoXqv628zEkz7pP7qnkBd4QGEUYxcQ7jFmJ6eUNrPaUTDvjNm1vhnk6zLfpyVnzZkae1uNvz",
  "key6": "35fZJcupnHGD2WtrFii9k317THwHYsojZGYN6Woc3qhPfPXgDw9YCrXw8s8vuqhMCQUif8YiTHRM1idYADVfmfnK",
  "key7": "uJoy6XkLQxmQeuyzkaXaioRuCFr5nbxCwYnpzeqRM5ntJrnuwUUw6s9vbA8FCCWvg6aMMAspcbMPFryf759zdg5",
  "key8": "4VfTeDyXsXCHNBiuLtNhXdDGAXZLhj5aZV9x7mM7YkHkZC4QQP7LiyMQJKghZxKfxts6pSqrb6wdDykK5DxY6GSQ",
  "key9": "3a4jZ52iaiBaU5UbiBF4Wbwh7g3F3nGp5UFhCmGCMFnmiQsP9bfBJhoa5LQnwk4vRxsbpEMnRjhx2qGoNp9ZVF1Z",
  "key10": "WaqU9ooiccfNdWSdAY9mTwHEHqhTqHEsdWCqd2hiCZpBMryfCQs5aZ1Djg2prjUY8X4uxcj3JntaTRXUZ3JZH5U",
  "key11": "xrYJNXaZpt7gMmRA6UH1VDsoCTtE3yAV43KoTp6eeT9N1Pugh1u2U2ALhL7NKC5acGDmbNVgY63f22qisjuMiEj",
  "key12": "28injc59VwJnEVeBX6hjd6RBrpyJiyEX56kgroagrjvk5KG8sMBf4LuvcNxC2KH6CZjJmUiqE55gTSTKJThJt7cX",
  "key13": "4daaF6RJg9ZekbBkxcUXtbcZ5vdamk1MG8K6PQpeRCMWFr1sKDcaZrCHRFWjh3kHp8Qq4U1C6wbuGtdwyuXaC3Ck",
  "key14": "EJ8ta9oacsc1gh1MVG61mLp8bHTX9s21JiT4g1xKzvM4FNYJ9At7SzAE8srBumwTMUYv38p6UCf6146szCmznGB",
  "key15": "4R3C4vGGCPNHpJpNYgsYFP7NU3xfjc7NNE4fD63dyicQJRDhJGhbzWzBQte9fDRwiHNqUfSDTwxAprNHUEobjrua",
  "key16": "2MjiLDbRKKWYk3MrL2Fkq5cKqBqgkGnNV9F7rHrg2xZzfMchFSuntCEUEVCjCYHMbkdtRypP7MTYmi2HW5gptjSn",
  "key17": "2JLWahP6nwqcjMtMS9qRSZcNe3a6WDkakjewhmKubEghuQeZaE4QSz8sCW9QXWviP3ENYfKHWrMN7ER1Rj3PtV8A",
  "key18": "2en9CEDEqi5ugapevY1MY11A5SBLLrtsJ4eyricoew1PCNK8GsqmZLFbDve57AggoiPuU6otdqTZrcQHCKBcmfm9",
  "key19": "36L7MYyKgDXFSN9u8dmeYyTcQoGcWYc8bNWrata2iKhQ9YQX8TJ7EN9Sp2GQqNgzRFUCN99qc5G9adKo9Cc14gf",
  "key20": "5aaKwVgfj75c8BJqan3HhsFziXBfNHyuAFeNpWeSPSf7musx8qUTmUg265EusdyYYgGwbT3jYz3gzRspVhChAMtL",
  "key21": "39qMCZeLdnLLNdMWTn7LwCRUcC1Vj3ZuFpaSUxgrsdVhnoTRq2NpppC3TTpwqL52FWPy8dWqWJeRZ1csCZewH36Q",
  "key22": "5MhishVHnLFUFZ7dGdV66iiY7RNtgN3gYeTGhxqtLbJKJG8xnRLWfSaMQyuWXdMPoPmj5f9MpueDzDRrWPNYdcGg",
  "key23": "5PeoLNdnKYJEAGM3AZF2MXf2sTmFikWgB8BJVzw256xg6VVg2UuNZTLm1uERgV8fFdvXg3DfBxcZMHzxpYJWbRZJ",
  "key24": "3ysVAL1S9S7mnudedYZrJGDfoCeUaKiV67eup8JQTzU6Cq7rb9zFJ1pkZTp3ETf7sDG6FQy6MyNeie8NT9CzJNAt",
  "key25": "ZGoDLjMSKYCnXUTX8cGRV3GW5S3wKotsQGxf1tJLKzXwy4qSe7Dxv2GNvLjyha1FTfz5cWpht7D77AnY3aPPgvn",
  "key26": "5rQvfvQDheBe13A3LvJucGAFRxXcGFrEf9npofHqKxWQRsaz6nUwkecioeTt7HVRJBfLFrTXoxotAzzkehSLVwE5",
  "key27": "59JkVxH7pFVi2dtmZpj8yqKmrBexoBQg6WjEd7ani8rRi9XfPB5YUBa7W2Rsv9LvwGjhxZDpJUmRMEFZfsMGW5ch",
  "key28": "3LHRHgw77Nfgvrfr3tT117CKddesReRkPhCeQV7D7CoTtSecmRas85aHZ1uM8wtx6McTaSD5MS9KDJKEDBVToZfg",
  "key29": "2jRtaC2H6nq2t7GxJugZzAtWmZ9CYqBLL1E4Mduzx4JaJtcRLauEX4jFjddUEmkLdZH52GFccZWRUE5nCFkhEPek",
  "key30": "3rWAVbthqFe8wuPWmzB2qZYbVhNjMxXXgP8464YKbkMbWY8XxyV78PHnpwkdq9yhNxaMQJCa14xz9cVHETRNDM22",
  "key31": "51DopBYv37BkiS7F2narA4DxfHKCpz51oBuEjLYj1jkZfrwXjJ7geAKMjBhWWij6cvz4zDmYZpM6o2JtwQ19YPL1",
  "key32": "cVHwFqjAHtHFYUDFvG7uELR9S1xdNQP85uPCmGEuAbEPkf5m1jk6o8JuMLQyXM13jXYtJxJZvNdjEWxmQEmU7Sz",
  "key33": "3ybjohFNQihP9YA282qQNG8KhF2P6UH2ugu7ZQBAydSkfXnxhqFdNepoqQKXpYhDgqNJDrWgK6u47cEVvSgbLZGB",
  "key34": "zdbcj3yZ35BBQvFPzhzFzd5B82vBCj7cQYJzg1Dg8bheDz9e5seEXfx35dHgzwrwxnQtzuzGiT4e4v34djB8qCB",
  "key35": "2xqKwzUsE5vuYmvitHMBYjVUa5DuchQCmTkd8xAWi5F54xVGcf7po8EsGGR7Z2EwR6mtx8memwjeS4Sozd32bTND",
  "key36": "QfiqeCBqEgiZ7j3ELvYyYTTQACSrdQs7KQAmSPuQdRprK8UzTmXj625gVgsttK3912S1nLVSXy5eqwQDmL78vTD",
  "key37": "2b1BANdR567FVpCy5SKHVqPDQ9DGy2USZo7femwqkwR3x4oNn6GHqFvoaD88Jv9A3tctwowP93WotfxR5it3wdUP",
  "key38": "46k8GtYwmBEHSwodvUnwSGehPuB54fkSAiYZxhbJwDmpsUgf8tm77HLnB4MqDTSSWeBXmAAgpXDqCqr6Qb1T7z3n",
  "key39": "3oWqaydodH135aKUSwUkeoX9YFqXZxNQZqLYTnKeHu3cvisvt7qkQr8aVgBX5ZVd1zPHdHiEZemEmS3ZH1ojd1fQ",
  "key40": "WtasR9L9rPD9urDHa2uGMFQZVdW1Bm7eTWF5nXpjFXA38giXeEhZtTrBCcWorC9RArKfMq4kpzFiWrJ3nZ31Kfq"
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
