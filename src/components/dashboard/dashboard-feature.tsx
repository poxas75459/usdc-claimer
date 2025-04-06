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
    "3bHJj1obVyLFfNXCMQUbKJTNx5HGoBfLtavxgXbG432NJ6ZkVruQ8evn5PHNkmxLTpEdZ8R6TAtJ7MJaogvYTM43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44QUdoBzC1uwfQ8zttyMgtmh7FGm3GsThC6RhKNHgT5XZN6JRkXRPcK2QRvNxppbBdRp1aNmMC1k1kDamLY93DKn",
  "key1": "4XaMAp1hUVczPm3ZFAvWTdfrB7KsYdxbLesbdSuAsbTFLrrky6BSEiqQBYMjCZEKij7bNBjyfSeeV8pjiq8NTQcE",
  "key2": "23V46Ff8K7FgwoCrxH1ELVudvYnrU2MggoT7dRfajjiZxsR8VhUyNXvDLZcaHfVPQmoCboG4vtgW2CFJwXtMozJz",
  "key3": "4rMkTQipiXV6WUyWpkFBAfAV1GhkHJRcagfhGWLyQiKZvZDW9eXUNHTamb9vdnMJQXumTueww7rWV5FEwWFHwJPR",
  "key4": "4qdhYybpWjC2MfEUs7XHWX2Lwtg9a8uxs2rSEpQQ5EKAjgNYT3xtWjrUGTywhYeB8nhKF548Ya8CeKuHKA4DzffC",
  "key5": "4n2BVvALfSqUSch9BBWFU8nHrNtEMzsqhMSmodJsFhnMaTTgcJmMbtp8FjrSehwN4Lvh3UdtjCqWWZmrYVn7anwo",
  "key6": "ThYTxoDomoDZYSR33p92rHFjQrSzX5mvEs7iBSgKkHxqb7ZD218h4xnYNVkU6UfWktWDezqb85jWxiEPrBzHCvL",
  "key7": "5sY4gjXv4y5eA5rmWnvTNT7NeNos4p1KxnkUQazQH2eezif3X4kPWXbf3AJMWYV9jVwei44XD4WqrKU6vYjAfd6g",
  "key8": "4wwJu9JAf2YzN6v4jfNFm66QjrMjYzz27y2A5mxZ4ksUSuQtTpuvGQuPM4gp4FrxADcdXH9GFzHvdmCFAwBP3L5f",
  "key9": "qshvQMPzKZckjFryRLjQWA5svwCLEPW5uUNhbdNUpoegVvZQdypiw5KJdGVwR8WeG2N2sVYqTQUcMqBTY8tLzdU",
  "key10": "4boCrqDtMxaKNynpaDVL9kmhPndnAL2BMGvFjtXwQFxRGtDcQHv6c2nwz4PZGTA4gdqWmi35ayWuE5qM7HRi7pe7",
  "key11": "2F4bmZKVLw2EEnhL8J4chTnVYXYutCBwWquiAj9aMrbkkg9j5kxUM4Hn1gRJWQbBvxpdvr2Zy9oYk2tGsSEpqTrj",
  "key12": "2yMxrn5NCrtiSbm31VVb38qPSuMfAEKwXKGXBTZkRgtbaNCYvxAeuF91BjKdLNYBsExA7iv9Gu6iuCppx9zFWSPg",
  "key13": "58b49qoztcb5mqUUjHHzFhvZZEHb4WybmwyGuo23D5dozixngkbJS3PdnRukTcUeXLw7i43DfTBh3Skn8BhXeHHq",
  "key14": "4qwKcsuW39xHSwgiFfDWvizwMwykPoUH6yGbW1ULFsUv2fEun7mqDHyBYpLWGAZsjJNA4MBws4xYtqfvv1cBuB9j",
  "key15": "KbW5WiHRxLL1KewfwGnCfYTbce2UzMYgYLTER692XT9ZNaqodQnTsJzYwGdSQZAko4GFgYqnETK2hQ78Utfnfvk",
  "key16": "deQqL7LqCVgUVcNGMgdLPXtyz5KRm7eusTaCKD6EwqfZ1CdwHWiLMto4gv5AQhKjBpXpqjX5fsiGVwp1brvJUzn",
  "key17": "2f1dL8EauFAkWG9tqVdHHzLWHnhvssjcoEZaQp4cSM5it2G9fMWG1z1w8bboWMAQegCepAbkvf3HPRDZJ3NgG6Rv",
  "key18": "3GL3PaqfR8i33aipFZMvfvCA88sLrFy89jm59ZtFiDzZsT7ZWNUP4ZVB7fH2Ny3xXXJu3PJFJk2WCeVjU1Xb78Jt",
  "key19": "5CYjfsP1s7jsur7N2i3zvDtsdLoZnaz2oZoRwo2XW9LJEjEK7KjVYBtC3KrF3H7sQMh8DSqnoKg3WP8i73cesTkr",
  "key20": "564ZAMbphCxxE3ERnZbmgVpm2joQxxwhwhuSjNpZfAPK8kNk9TZo9ziKT5eTLTYUznFK7onGPwK15AvEDjwsJHnD",
  "key21": "2mRS6MJn38tAVKZP5dLfvuQQTPSsjqiQxGrJX7YsmpvhMbFVvcvzCVkBe5FdykY3ryX3WZYUAGoRaaqSFXovyd1X",
  "key22": "3eHLXKvKiJnhBmYLBVQB1Mwk6Nc8Xnubi2puF6pg8CWW4bCtAfXFZTY3DZeTMENVqQcf9CbpsNrxLmQetGtsqmkq",
  "key23": "5na8cMLxjLcHFa8UtSp9JgmLsRS2P1S9ukpUsa2GSEH9G9PefGnJuuM8xPe9W7tvnw2uyA3TNUvEDZfZqsBDCWKR",
  "key24": "bvghGMjkAJTMTNF4NjnsoJu1M8MNofr6ZzauC3koGj13watDPwE7SBqtaK7L23JRWnTtdwTsDeKcpP5J4MTUrAQ",
  "key25": "389zADvbpL3zKtq4n5QWmkDJZMtu6CwhqZ1iZijLNvm4Fxx4rm1CFLSvUAQMUm6pDjXKYySKiinjUoULboY8goiP",
  "key26": "29HdLeozyRptPEpkzuuCXdQLxg1yxV9vwrQsK5KGthDPpQoH5nt6tNrTC9yujoR8aHqvWY3QKpUjgtYijJjj3FyY",
  "key27": "59yBfmWZFMLPxhY7z6n9yXaFSHKQvZYaWM345tsunVijHqMZetbWceLRzRgkRfbjBR7xB4ZrTrcSHAFz8pcT2guV",
  "key28": "3MNSvpUu8g4QRsD4M3qPBsudLRkWtTm8osVyWwHF2h5RsYEyKPUtgeUNr2c1uYryQcbwZutSFnk5HiLgFEmht3Vh",
  "key29": "35KFwX41dVbF76oZc2NCpzBNY4ABFUD6FA4mGjLuB2cWh6A4EeBRuweMeSzSuPnWY8q8u3T8EJfqR81HM9xczMPb",
  "key30": "62kgnqWpEMKRwxcKB1yHTZpjovb3MqAYTHTTBup6RdXE5tg4Ne9hvas6uxFW3wECRx1wXRyCNxqJokqUTTvvft6x",
  "key31": "ggXF8gAoBdqLSKSUX9QzKR8jzYfZQT3GTyNH7bho2auQyddv1NVEZDcmkp7GdDKxEQmfmQZ2CHcxAs7hTBCwqyD",
  "key32": "2a4b43FgVPWWMbbDRVqZG4taMQsapZGa2u2JshaPcUinDNS6LPtrsUDBoycVMpk8rSdhN74QTJjchtXr8J7Br1Du",
  "key33": "3nKJCfJKBpwNoW7PCZ8eGDU3D5MXneuyEija1H9KU6BTCt59Q92SvatPhsR5wDTYrXsQVjwakuLC7J3DqY1An3dc",
  "key34": "bYGTGbPgfvdH97JPg3Gf9i7ZBVSXix5MhL8aePHhnRhmZ1nTH2kab5AXi24Hb5BwgGdTp76PVUrEQNLtJe3FSFk",
  "key35": "3bdtscmfRPThnMZx2dNCMX95muBY1NkKCqoGTE6r4wUtredTVW1dU6JdYid7hZgLh2QZ4gM5xqt4DvzJAFN1FVCD",
  "key36": "5H6RLoYS93VqYkVzv3VdscSsVfXBebvsNu83zKRZ3x9z3tc7naFvkZwvktCwdFD3kmkf7hnfWc9QvcWpvBLZD8xq",
  "key37": "42ft3uza7S4JQUk37Sw7shdJZ8LAZAofjG7TDdSjc8R9gYoQkEe7PKMwQrmTjdEZ4uudwficp1zbRY23Dj3wQ9uE",
  "key38": "58sdBYvYhaJX8DF1EmwsJg5defcJbTp2vhyUE6Sjrby8xpLhJXf3c5jmgTL4BPidYWhsLamzQeceRPSh1guhMGBw"
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
