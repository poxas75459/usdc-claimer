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
    "64p6Mivw9f3YjVG6epV3HasxbbZKtQtqFhXUeYnDqGHZ8Po74ZoRqo3HTb48rrxuYf5pbvpMcacEUAom5rWMR3W2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JC7gpUAysjy4Stmgq4dpu3UiV9EDRyKMGTm5dGKBtVqtQx8cQvCBbTiTk4QjpZBpVF2J8mscEBZ9ADf7mSnVmf2",
  "key1": "MhKwdDysgpzK4wbKfAiadB8dw1cGb12xbSKSDhEqgmDpsFhCwVxFAnbYji2fpDtHcd6PoT9EJK7NqaA3ob3HjaK",
  "key2": "KAGgBn4wgFs7XxZ3Pu2uNf7dR2pKygGn41mufC9eS7d2E2j6AtxskeWSfJZWdQZWgbZtSQr7gkhyuXyNUP4MWkr",
  "key3": "3tQfGGeT7DXprwT4JPfJGMY6ACcu37G6hDm9Krqo31w22NfnMNpeLTQiqrUtRJucJ6AdJ2rS5hfGVzxC63ggpRfq",
  "key4": "3ZKQaFumFsaAHZ2TcYm5aLWjaqbC3if9DAJPQKi7tpbQvZ2tQJ4DWp1AT2tNLuXwmk7HFmDtKbMq1AKJpsJd9UPc",
  "key5": "3FYqHCPhP94USvbQUaoeDYQzADV8BGuLUiCgNzNjBMVr1BRNKAMufNJSHSLRmURkyhZ5syvwKCuQ3XgHsRSVnp3D",
  "key6": "5kvjYWBTQe9YMFkKjWzJ5sUNnMboWDDUTXRnDtGsPUPP4jMr3VaQtJCkctMH1P1uxDdV748xr3Qn6Gof3Za2DuY7",
  "key7": "4bZNQ67yZm1Uy3PyXGdqzdUXqxhcVj97mEB9A1vhkkNFrWyL7NcobucRiyx6wxMcNBNB5RJNSbUGvKiHuDHTAnt1",
  "key8": "4jZBoXQ9CzGh9uxnYem4Qx6qcxnvqg1oh6GXH9DbJmapMBtdauRmRqmtax9GftB4p33rRXL52igyrj9U4t4oJifu",
  "key9": "2yBg2NCLHGgx1dtU3aVmaU5TwWRgBTkCEsj29uDY2ft335Kzq498XzfwhYp7i8y8utUpLpTVcudKm8EM7rKAWvsH",
  "key10": "2umQmTdgs99aqsQPf2q58MQZj9w2XGFVLuCFuTtneZEGcejzJTVfBHzTgmSaWT96K8FzYTqdeeLwZsvZ6rBiZgBc",
  "key11": "mw7FCGPUPQ1e9aBhvEeGMZn1e3ofTvQmoomwJ7CwJhqdHT2NudxgNNpJXNoE7JvBXVvjqd74HRH7KrXupVZq8ZX",
  "key12": "5M3n4ZYBBDq2P8nyfbYVgiLvC4PVYyQ3vr98wTKEwYi4dtm99Kr3KxR8UmgKhG4ETjFEa9bxwmzMNZZBnw9XSPTs",
  "key13": "3zBow2jW49rV9TZRTsMEP7kv7WrniixEyQVdhgFVRZN1hA8LrxEvb7cUboGnqELyWgUJnWXk8NJp6H2FHAp7NHCd",
  "key14": "3mZhDxLEeog74PqQqFAPhAyERPMy9QtqLuAqGRBC2B5yALA4wHprtNzb77jrgPGdigfUxr8KCqe4J6DFSU5c3Lpi",
  "key15": "5RYCsP2RH4qvKdsDE4csrQmE4TPTazfD6NDcEi8uMAEFAc3CkFuQRu84fpyroJ2Nv9AsynWhXao8YbAFqMgjm9YZ",
  "key16": "5cpTeUEYRC1v8gU7ibvHoiTkvKLztTq1AELmxehZdbxdq21zaDbw9NPVWBS4MDjqEi2Sn1mLtecfo9hVujdkPKsP",
  "key17": "48QAMhn89FJTEM6LZ6Un8Tpv5Sfn1kUFuQRYuKT4BjRCbnuYodMWTT6Jat4cEFWedu2BEctKJ3WSmKCjTUXkj3co",
  "key18": "4njuaRiqQcMUghvpxwvhdR5MWKe9135ZKuPAK2qcD1xuw5uEw4iT6PsSDonowgYZUTWM4sa2JtXzxsdoZm6QpurM",
  "key19": "24atvq7U5hMYMD8KtbSgbSnWXZn1s82oa4jn9k1pvbKZm9ZFgQpCkS5hEHQ1KFj7cmc2NxVo4JZ2NUHKzDmDu56e",
  "key20": "3foLTUPsGmN9mHkDLX3a7HVKC55Dx6Vi2GU2MairbQwiJUL1X1CgeUgYtec3hJfedRichjfRAavPcghK9U9wN3Lj",
  "key21": "4YEzVNF7jhr8bsotCApugnMFPiy8TYEiozqhaL27BrYYYHvESudWYH6Rz6e1r9aqcXPdwXGdc9K9uEbeDQoSCRTC",
  "key22": "3FCd7o9b7Bj7QSUwpeptPXE5219WM2gFpRNjiPUBpv19sjzKektAdiL7txCCMsH8i13QTsrS99a4yRUS635HAPJp",
  "key23": "3SozTdd8JJjPasCYLqPPY2xNL7nfY4cY6R7Yo9fJDWhAXVtXpNiupVLEfySJeciNwsGfoe4MJzRKojQ6e7b5MNJA",
  "key24": "2oEHoZQXVfY57ZvoresSw7wqAfrUCotJFvkYEoCnD9pAmBY1rzUTWdXn2TinZpsob6nXysTYkEZDDsCPjbzvhQhf",
  "key25": "GwMY8rd4zeFrN1E5kqTLTjGVrfqBAxt5UEoUZCdU5qudZXtXBifbSufFGpRWgyPFmd36bpqmvSdzrzB7pMU1YAY",
  "key26": "5Y9n6tz1ads65nm1sbsdkFHTS9SyjP8mK1GdEt5nxhq35r7NAzUq8A6rHw1PiPmxRfpAUf2DLUZxosgJPR6LNfmx",
  "key27": "58kAUo4Hx3YxgkSMxRTcwQg9PDiSkrjJGVsx1DDY6ro1eiWeoTXiiixYH8X4Aem6ivhQpem51abFYybfi18ANNqd",
  "key28": "3Eg9tX18N9RQTmt62ZvZe3qRy5QagoajNgK2XchxY79EPjtGWN8cwN3594RdSKsAXiQPiwja5eXEUzEkUZ23CeCk",
  "key29": "xMQ2mHPM1UsUwC4VANiDnsBW2EYUoNTZ8qEHG8QCLCVLGDkpRvWFeE1UFbNmCBDx9X6HbATRDd99fTQnDE1mTt9",
  "key30": "BjMdojpPdmScmsvt1AKLGw2v3qJHyeWxA7iXvu54Bmrsxh99duF2Dh1ei9sU9NxJMTG5NFFTMAiqovSK2EaDUCo",
  "key31": "5ntEWPeFUxZQUxzAfiWzfy6BzGYnzN2yJ5zVhFAyp8EzihrUwXU1xwDMUhC34idDUqzdkGpEK6GKtDMKojHwq7zV",
  "key32": "2zKR4c1r4mnLTCLhuDfwfBcCGfKgyvzBch9xhn4peVUGwn4Eoapt1Y6VorZ6puBGCDDjH5ZJuWs77V6iznUV5v3j",
  "key33": "3JpJ8oryw8fMtzi7XjHS6sSN2vcnHH7JUxX2nJzQ4qnX7k2S6tWZ3RxhvRY267ncjDBCi1SozaaXdiGp63wscorj",
  "key34": "gqsSSNSUKE5gC36nZdsMaztH8U3VLLJNqUwJy2d819LJQRSxEBY21ReC3Ne5fyNYef3zjinmjkcnNFiqaHtvwQH",
  "key35": "5TjDGc9oTKb6wmmEJ5iAvdwfh7bveRc5aLwKnCFQxt8wtgQHw5cr6Tyi4gj8rLhS2mCETYiqr8G2c3cVnvKjxX2",
  "key36": "43q7Gbvt6Pq6EbAuc66yF9oiVvxvudt73xkoxX5Y2adHQySNW93udkYY1fAgJ1XBsLmtTe5TcQg49L7w5Hdmt2cb"
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
