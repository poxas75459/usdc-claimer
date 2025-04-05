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
    "4fkTDAnBekXPVrEjYZFFbKXzJoT2wrzkrdUtbGURV3NS3EjUhUW1Sf5mzZGPAWShujgpKVYh8vF6oXnpP9QHxXL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ef6cKLHNxTCJ9CvstLVbw6C8MZYzpA3vrduW1s18qCrim6HtU1LmVqDtgAKnrp9HZ2eUzqxMEbHxDqVYAygii3N",
  "key1": "4u9v8xfLeYRNK1ktH5EtbLGNQR4Q2B5K5d9WXojvAqVFuT1ZeFYwSBaR2KijvDVUsiRFi7NuyQd8ngz9PqiKG9UT",
  "key2": "5vUyCkLfWtcFTsUxcputpvabeyxVRZTL1CtLAbFNxMg3uARghYTGWv669oEedJvFozTJC4PcVekiMmj7R13eRtPo",
  "key3": "5MYDbcbF2BrU1S5QMGTwqNSJAbyGwJVRkvdL2rTcSLpcMDjQiUFfE37uFcwfDG1BL6nyv5zCKM2FKHsJqdwjibPV",
  "key4": "3BzoW7tQmbEgCZRPzmDpa53T2AN3VFPMUYhmVmhuLNK8KsDXw5YD8jQGPT8VAqUPkUWCVk2YwLVCCu4EHeZsphzA",
  "key5": "ApRTbm4cvxwmG6fqy5aYSoRpho5tNJqw1X393VSsxcAF1BsboWW2eChAoSnT2EZioHr47XcSnJzXpxvhoNc4yRs",
  "key6": "4eVE3yfs1Ue7rYz8LsWzVpLMYVUVCkknfhse5bgUmALQFbf9unA38TtHchyT6o8ZMvBgRrkSTC6aTUm88uPYAUPM",
  "key7": "5HZHUd6GEmx6kzkg3dRi7RNmuaEYckrr2EhLUuXjWEJfuqpJMZhg1R8Z91VQgAMKF3c9T3QMq11znhoa8FFu5nNe",
  "key8": "4cGQTotJf6v9VRbTi8baxYckCFBkfnwzJoigibCxWUaLQewt7pUuub9jEPw2aKC8dZuwNVnkD28dTdWLFHmJKELw",
  "key9": "42vRzVbbrdmwvpMnPkPUD61e4KcR2Zw2ZBdxrMMfZkfwz3wrfgnpKY32MEp9Fr7FEi5mBG2gaLpTmtrx1hJUb4QA",
  "key10": "4qmVfszHa7UGgkZsnarHoijMkptvEyX8wvciyJQ16sivaBkHTbk2NsoDXMw6CqCubiu1kSFnEuhJsDBjyGtSReFw",
  "key11": "3MVnpjmWwpmuK7v3o6wdcAP6dZteUtzRu3qBtPVuUqbLdJ1b8p1NSXCGAP7DMZj7aftLqaCUJZKVaGpRKAQF1h4m",
  "key12": "3uPeSRn1gkpB3xsuYb4tDWK1126kC1qvDS2r2p3XtjWA8crDoq6NoaEtFXAp1ndbWf1AdU8tZVt7j71dqbhanCtA",
  "key13": "2DvYikagw4c2gABh1NGGGSfRTLGrykdDTqj2huWYZzeXWGznEHdeoS6NdqXE9g9hTmxWS9HfmtNuqUzmZQhHrSLA",
  "key14": "4jp5Mvk8Eew3hh3xWRJZsbH2MvcXjk7i8LL9zfrKkmghCkz41kW7r3aJTqpkKFcWkQPjNonBZV3CtQgQjxoCocpD",
  "key15": "3ttK9545FvCLa3RuVAPcYaewCigmhxacSh3AjDC4VUQtVtZJwF4Dw7JGdF367sMfWfNCrnxfmam4BufPwvHJwi9h",
  "key16": "22jC9hJN2yWCYixVXfWBe2DGqWP2QgUE2ZCN3JMeK9Aq8nJuBqN6yv4xbVJUpGpLQVWJwfkuexz7bBZj5eApiCuU",
  "key17": "48Q9uAkMLmRjqDcKEEBWBCVSfg56arpoR1t7oSLT1hZnY2PboorUZrZunk2DF6iNtu1CodxbSfnz2psKXPyNK7mw",
  "key18": "3G9EViZyVpK7RFa65jdJQQh8bTNeWHQrBG7xySzietEbuDZM7KMnvMzvirLvHninQdCHgU8mtJL69sTXb67TZDev",
  "key19": "3pcuvxCKfc6V6hh5eoaugB6mYWfWCGvRcnVzcDGUJ3KGxXdvcBJ1bjAeNZGVAz31k3caDT51KuebFdgEAdSUtGuT",
  "key20": "5fuGUssdMz6zKr334MevECaSRxENwr9p16GRnxg7LeoQUSqMEAb63btC3jnqiPzKcmxLTBMRUsRkbo1AHficKoSg",
  "key21": "5mWvC7U4nSTDJfezbKNmD8HTWzWQzjk3g7m3vrdofkrkBB53JyukLeGAKsX9ikdSMayMYTVbhVpJ6nf6rGc3GKP5",
  "key22": "2WzBgWm8UyfuYuL8X9FVzbLH6SJ3bx4tYCxyNA7zWDu6BrVxSGKXszn57wez9TPt8mCJxvk41FyywyoXLtyjPGj6",
  "key23": "3nLvZfWYucekJe22iUNcLk7mqApHvM9o2NpTGJ2JmXYQzrhdtTa63wNEXhroc2TXaAkaqGskmotKRj4hWihwYZmX",
  "key24": "2KhPvQUhEcc6VrvPJRqZpJkCQPPTBt3AYFc1bzCefj8ntk9YCqocwpRgxXTEAZ18XJkpeXShFF6azU3KUa519CQU",
  "key25": "3KTcCr445rVWcUm6TVZmgGXAKJ5efbL82f3KuNNRrXZBF4oZ3nt1qFkWxNxeatkBkmWTpD8cLDN1dCD7HLQRhuLe",
  "key26": "2AiQyM26ivUtA94HVGDZCHHQs9grZbysBZJmqepJeKJgCGwC6LXDWkjDBjaBtK6LAWGjweqJgH896Xm7MmuSiMAr",
  "key27": "5pVz4stXmditTvn7JMtby1TiJNLzLQFYqDyBKKMh3JafTJi7YmaKbPXrzorBVuQCBRph74w1oCecjzn99fQdkPwf",
  "key28": "2XfPCWCGXwcPahshNyzxRUuRcgutPgAJweW9fULfdix5v47fYY9bBMKk93akytNJ6v8qjpGm9s8H1b34og2vdoG9",
  "key29": "55yACQ8quUUnZZhKAxrXcymrCSMBGyY3fSvs3vgHq3i2BzjVtJoWZeKuMAnwqzEcZdSPFj7qEDCCj28PHdMhHLjg",
  "key30": "K6q4os2KJ2ZHKqhxSZkscMifKNSLixdcuXErAEuZxfF8L1ARxFCzQxyFRciK9VgqyTDh2Dez8J2gzcUwwnDkqPL",
  "key31": "2LmXWBNexR7291HjXFE15uMgqHvCB3gcbEsxqhepxpPikQoEuoSCSduvDzcK4Wf4KggsvtD3a1eG5DDXVaGtN7it",
  "key32": "2rtAp7XoGZqN6mhzAHGLUD96H7nR3vZsMCnzCSzVjwj7jMG8rVJam8LpQZwgK7HDwkiGdYLxxphUK6GHBJDNNVRS",
  "key33": "4VFZojBRjK34jPTsdL3uHo6pnxArgTzG4A3tJN1ooH2Wij92y6JVrNc711t7GPECY1gT5hu9yBHb2YBRpvjmvdUV",
  "key34": "3g3Eq6GxW9VcFbSfUsXj664GDW4rs5rGCSeJkwu9dU49zZtw8v9qmYx3bX2cHro8KYfrQeqhhtuP8AZAysrrra7Y",
  "key35": "5kfJExdWXZ3ETFiXmyoBmVqqCfPxNw3WvmWSQTmZQ2pJo1HDdusGEtcG7TkkYaGuJy3KwW5AcoJXqACryscf89EU",
  "key36": "3TwTvyuKZVL3oLC3rdYnpwaZL8rPNB5geQ9r8gWs3Y1abpmN3qAFL2YocQcZwGyA9Xr1FZoVXqRG6uzCurea5Va3",
  "key37": "36kGcqSEhQPCVaErcuDxt9szMNmzErdwSBityXmU8SxMwQxNhCv6rvcgABitU2SUMMNvLc3xqtcbkWvGTaz8Yd1v",
  "key38": "33sS9LUhwAWjTpT5BgNqN3PB6n7VXYXVF6Agqsc8dJaBHjTmNKuM4ZimXj7YQe4LR8LjhnvfQd37sX2RQGCnK4iQ",
  "key39": "25kwmX1EXYHhBXXZpXWGsZ5ZDrPAhw9TAXNdN4a8ZnoCKtFfAuX5TgNGa4putgdZYr7by8HFoBcixaVhDx642J7L",
  "key40": "2fE4BUKnV6oF4rci8KyaoTBXAhGXE7KqiXCQGijVa1AXdyWoEgbs63Czfueuec4gd1fxzZZ6prmERJmVa6VUKVR4",
  "key41": "5b51WR9jZY8UEXETNuyCf1rnKCiyfKTBhgUtaMA1bBkYsrrtwS7wBDMA8Q5khWWiAu26pVDW1xqwzBGWUXkcMFFz",
  "key42": "4mXGw8dZw6Xu3QQ4HygVjF3PFopzdyACcXDuETqz1fAFpyySe9cWYdALEpe4iBExJij7zDUUYTxAPU9RVD1Vhrvv",
  "key43": "4em6zNSFTDrRvCUXsrLP6FrMGm6PQVVK22GcMSZTVBPArqLCkSzZjwx2QbCHmtQCVfUHLT5ZBt3aWv91HTvP3XPW",
  "key44": "53JHMsUDHNU4fMWFrREModGsUDsZBmKQfLoUFg1C8Mq1jPVWHsEiH8et97f7rx9gGUBmWNhAnyYAKfuN3DkHgE7V"
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
