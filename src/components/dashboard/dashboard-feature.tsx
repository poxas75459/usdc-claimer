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
    "vQHt67cT1JyiENwMij8GCEnQnvz2UqiKPxK4K9hCyZQKXAAfDhNL4PKTbeeMJoLE2HnLs9tojtCgXLoK3fBimYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32sdqf41C6P8Ek29Wvu52Yh3BQpiGiGmGdwcG7pSuYFU5vHoVmB8BgyEjVC4V7XP4TrFrGPSUUo3ry8E6wdFYSNd",
  "key1": "4ykusTinG68NFzQbJ4yqkwaRyZyvjq25CM24zmRy4CuhPHLxr4UjmMhqcHrxersJzoQLqycd2StAkhBogvHC8uJU",
  "key2": "5MBH963Bdp6ZhvLemcWDthHTWyWQJoDkj8KK7szJbrxdUfgeUv5u16ocaS6i9B5AmXhhrvFDgkCnvZxeGCjqwf63",
  "key3": "5irLDsjnzmRG1R7mvGqp71ciewDNAZnLHpR1dLHPA5bDM5wqLEs2ySJqGbwmuz6JJKstTgNoyJt7L5d4GiKYunsC",
  "key4": "ovWyoh7KTD3pp3qRNsY3tBwJL9jsgfdxKjF2Kb88hxKmmSKfQkoYcVTbs1XWsr8kgCu6F2XjYnHMAdWZx3Jj7mK",
  "key5": "5yzxsKAQnJPuxxLULLHRiGeifqfEtU9EGa4wEyLGiSYr62X4qKPZtfcsjEKbSCiimQDQQWrod9ZZJakNeUtn469E",
  "key6": "qYG6qUdyhXuJPmGsjiGgL17UvahyiWjTcQnKqiQzjYAak1ucSmVbhjbWMUdzjNX29LsSLvsJHVijSb1CY3KaHNx",
  "key7": "38Sd9qHWjoCaMA87hhhfe9njwSTEtHb8rtSg5S1ZPwYkpLx77QeHDX6UKWNybTbVTZV3ooqRWJsD78B5vguspiNd",
  "key8": "3pZykiwfj1BJYzjTV1xGbzUAjyEvRctqcwgF8G44Ypfbv86rqDWFNFtZE8WmDBjZqBpq4TgddUuf4ZPscVBguqtw",
  "key9": "53ZTf8DsFDEvmXcyTK9wvzKyeBZmw4KXbPWCJUtKTnbgk9wgddYCiPoXr8zntk6hGmbGkN5FSGBmMoNJYCHdteKJ",
  "key10": "5UxHA3FidoyNWqZvAHkpKcFGiZxpdoceRR6hwVUTqh1eR9Fjk9uKFqmTkXrF8RnT2aMdZPMc5nm4XQhPHfQhKxw9",
  "key11": "23D58Lkvkes6yaXDRgu96QTcuJUXcVS5u4Z8p7LYS8oZfMgUj76YAZXUAMMhebdXPmqhNi9yx2GyYrQFBFAERtp5",
  "key12": "3zXTVCdWP5w3W1Vetv95WUHc44b48U5M3bvdGC5jM1TPLx5dk7BczDffnLzEWiGztVyHQbQSoBQB6KJDodva1Jmk",
  "key13": "5XcAmGBpbpfaLQokiASjcPKtjJAJRHuKcAJ5QC4iJqRrqidjqpJtEh8pkn6isa8EnbfPc7EQczaM752912rYzumC",
  "key14": "5Lhce8MozzJDdustLCrzsxhyLTrqPN8hgPJ4TsiMqd2oHpMmMWFRiwqFSGsjaVmPnQqFLasBJS27ZyQo4M4TgWUT",
  "key15": "4dksbRbnH1d2owRczCFrbXXdAhKzdivY3429f1gmjvQiayF5BQU7qefssspWNqMN1n96C37DeEQkvSvma252qqY4",
  "key16": "56vvLwEhMNFCzkhpCZ6K8EWg2ruamEkbbdzjtSa7pdAEArsvy8cJgX2v7UELWgGWjW6FXXvjWoCLLQAUPQByaT4H",
  "key17": "3NgNtt122Q2SN5ivy5SGBx3vkZWQwCr85KQqvEjVKWvQvBr4CF2wt42fSj4gKL7KfeM5gonWW9ksg4FYAnwBg9Ri",
  "key18": "4KukKPy5WqjYfKCVGR5nbwiEvxFeo7rji2dGEZN8ZdZiuDJSdeATYMAyquLVzGj3fdzBReRcv8gqGMSNmztLTupd",
  "key19": "4zxcMpgfaezqfQ4uwYMdwHmNbkheUkUsgyBoJWwvrNMB92rhi4HHJzGnactUKrxCJEtWMhqJSz8qWFBmBp9LW6ue",
  "key20": "4mywB2A4sP52YF7yvKdGuvoxkQ6E9cYbP9nJph9KXZbHaX2gDCGpUpxTzsoCkhKQUcbWy2Pg9M9T6NaWY3GJrMcc",
  "key21": "5nuR4hViSzcmNfYLV5PnXTe9CBKJKQXmtpAKmFEwzawkQn4vmK4yczJz2rJkf49E82SxxgZgLPh5RPhocvjJh2sm",
  "key22": "5gay9FqPGBQiwpi2iFaZA4dGqCh89jGLporLkExreooZjXyWw5eS1RZcTxBSFK5tkvaNPdT8yrRa1FvapfFdA9XB",
  "key23": "nLtRktYSwk2P59Ugy7iaSXALYZCZKdNPJWhoEZpLiAY2KMTd7yBewaVc1X2kRbtviEvCkM6dJhYtCbLLWdRsyPr",
  "key24": "5xwEtZJ158WHurg15kdZ2X8QRXtC2VvNmA2mPskRYtwjPXx5yUKQyZFKueEJisHjv47kfdjZ78wRBB4FbEb59bDi",
  "key25": "3nFLxRwbM1Gjxubj485jGq3pYHXmj8eX1KtMxvwUw9KvAgQyknjTUGjY9GNSEr68xau4VCKB5ovG8ftF2r7mxitT",
  "key26": "53F2YQp1tmNUiawNCGXhUyZnPe5rFLfWzqEr85bP5HVmJxmCJC5eQBtYLuH9Pex5MPWRNsWG2XJ8CqTnLUX1nUrn",
  "key27": "3Gm6yHMydq6UGrU6j3xpdALmtrYkbSo9Tx2QonQWMRpfAqkuCf5ygh3gXt5H7JrLEDHqGL3RzXd9mhrtdZS7ch5e",
  "key28": "5sHK3Ncf5SXyFL8NdUs62DveWL78zeoGMN6JVhNf5B2KEmFKTB4Bksj43hAbF12fsUWM17t5RXmWPqjaXND6ZowP",
  "key29": "5kdQQSYRji8eckTXrNPMAuXsv8vyKUDCdfEhy8WsjtpztXToqndPKCUvQiSVixb5td6E83JbVhNp2hNLr2XrCERC",
  "key30": "2NwBNPpNLKaG5G2q66pDC8BpGp1V5VD6K6VRNDxGWdLeezq6aDA2tZ4uoe3omvkoxPmAawrUPW6dTHkDZKCTsG4e",
  "key31": "4C35JRyUq7cuPjKNEdrF57NhpnUPHmHKWEbXZeR8vBed76LjMqChEbFWPYNvfgSaxj5YebDcVhwdbGN6S47JAopM",
  "key32": "2otvP3moaPHjLUUxmhLfXqZJPjcCaCkqtQsBKLPyFz4wXLb4jhaEb4rHaZxUEnvzBXnvbBjgGN6sXrFVkr6BC68a",
  "key33": "4TthzCBYL2cBgFMSqvo5uy6KyDnMDWQCsSckHCJMBFU2QFnDufWFAb7siSCkAmJZMhxpfNKou3qoEHcrhRPnmfhD",
  "key34": "5RW83evvQ7NMThjbX1CsDGHC4rTsJWTvHgkMLhpgEXWiiJodh6oUiMReCPtuSEs9HY9NfUySHh9WZkkN7uBsLFeQ",
  "key35": "cw8ijJxCRruBjDmYpfSJUe2R5Y4uZwiix8qHMc9zuScrjBp2QJrHUsFkQZom1HM862HkSxymjapbS4bBwxWPnpb",
  "key36": "4zhVeebBBQ69tFhNoH7TquntxDcXWfD2T9rjL2fwLwkdCPHG4vhzovvHe2Ggzw6sosa739aoJjBCbTLJCDhpdrez",
  "key37": "2kcXtYKkyTFmwFJEfNAPUBFUYUL7pX6feaRJYTEgxVCqmaMCeuq9BJJVp1HkVb4GYqm8fu9gUv5BUibQA1DZ7Jpv"
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
