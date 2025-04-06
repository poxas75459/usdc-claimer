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
    "5Z1iBasbLsz6UtoQXGwxDhRsm7iBWGYovrJJHdEa9nuu9yoWnTiGybu7KpYCw4LM43LMDAs9BsupLhHLaXYTv63A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jsmMM2jxfaLnGRnxjB28iYjh38r9exGDrkqnrmdBa76FT3GtnFfmUmbUBg1oSVBzvNsHxDGWhTSZK1gFUo9cggH",
  "key1": "jwA4CFvTLWeb4v3QGTU122z9CqeEKRp83BvzjDaeoEXjoBZ2jm1kcJjiMrdVv3DweMFRVmrZVQPayWGuXKzmvom",
  "key2": "4A5VhKAhC4CQGQfAg8qpXxur66iwAK4SrT4M435Ft7a2puXmHDNiR96Zpb1RGC7dzYdzX2bQDQEU3LN6tv4CWXYE",
  "key3": "X4zxXpK5v43htdGHEbjZx1n8zw9HuHgFbjcuPK1HUmLPy3bBzjPTKhGhxFUsbWn8JB2kZ9orH41Dw1Aw17cArHE",
  "key4": "44zjkmXdvpmFVwGSikuiBcbUiSmn9QVvJDHUDBsj5ASxqXJJA2JHfRbUVAK67ozDXXpWRSs6SqBhtEox4vngaBqj",
  "key5": "5DKyyV5S4vsyrUv2tazQP3AB3H7cyByKRKgRWxKmS9QaHCCt5A1QjK7QJAzvbNjddNmvsWJ6PJBQKyGPLnejXy1B",
  "key6": "25xELcsYMdrqSVv1kWgWSdW8i19VyiTXuD7AuSyjEuxghy1sPmjXNK6yNkq19BytWo2g7Ff4ZdUeKmzCocWwxDCD",
  "key7": "2dCGNs5mxSEk4eSiHCdKHafgVN7FYMkeRwLjZFj8CDXytkcnWoW1aiiP35qgU9oW85YfkLiozKgQ7qdoG6Wgo22o",
  "key8": "4vX2mQgfLqnjTg3Ug2FbprC4hpKxrYLBBG7kVH6bcGDziprWkbfvwAmx3Vrm9yjXCpi7HEbj4oBqJGm1hYT4kXE7",
  "key9": "DVZiTC3HRNyqLrcA2Js26CheXpAgxnF7uFzDzFD7neQFwtxgnLokAXi2QmUDepNAHiEuVAdfcFUDmViXxBzq8CR",
  "key10": "3gMNqAugZm3oV78Sh5XmymJrcpcihh6ozXRghqTKL4smCVFWJbFHuDKpGj1RU4LDjvKDSjo7Ywzq1zEyUbgAe4XN",
  "key11": "4UyH7duAA6TBgracZ1c4JHy4pEhKCQjXRgBcGdpDofWuJrAeE7BPei9VJ1n7jXvakvbEYmXXLL273Ww9RJi1VYxv",
  "key12": "hUj2MUZUTxeC4fCG2H5NhDT1fE3rn3MafZpkF4j7NakxwvxHBNC4TUK5sm723pAgvMo54PTbeCCutL5SPAdwYdS",
  "key13": "3CXAi1tEzyMKcBWBWeZcfvKv5jJepMTz3icAmnJ5zBwp9gubhRLFqqxKDKeNLto3mZU1mChwE3TU9KuiMXdFYg6Y",
  "key14": "4DVetyR6audhrvxycVuJzpa2yu39zVwxSQBbNc3XRqH5XEeB17LwGBDGxXYyrHchzvfJAgCUehp55eqXZuPH8Nxg",
  "key15": "2YG4tRZNC6qskkGR7r3eWHr3G56bMQK8n4mMP8iNFgBfNRaSf9833wv1VnfRLvuaQQLaLGaydXvo2KfnQzeyi7gc",
  "key16": "4xMBY8oNikCw6sS1v4jRo5Fn6fTyB1VgNJmvWovkUNM5KwJ3Rrr59k3KjqJnpVjtqi1ezCsUgk7yYtAD4tQkBJYg",
  "key17": "2QubEPhnb55YwiEKesXz8V2mYgpgXgFLEfVCqM9G7xB2hwMt2N929tn6fQAwNW5oRy2iMTmQoc2oVponG53xsXNM",
  "key18": "3AhgnMEa9fCmTzjS8ZbvACZ1HCgyyZpXHDphdS4b88kTzMtAnq5wiSXwC6rBN4WRHg5iHjGCTELSQeG86HTsdhTg",
  "key19": "22DyKTeRtiHaGiLZdkeHNvtv2bM3CzRdddyi6tcch1qiaA3BwX24rGbMfvaLiZ7WCFY8dPeVjUL1tuGVap8sRhn2",
  "key20": "5YKTk9THouN1aEZc3BsgsgEnfAip99A1XHpMyLqfzucQoh4BTUEaENbCe4YWX82aGu8oPFBd4iMVshz8mnvhB7FT",
  "key21": "2XDaU8NDZHNQwQYVqc2cDWpRMiuys2vcPcKCi4b7PXRx7AYobT9WBMNabu19PMpwnFcZod4f4qH6K3npdF5jfbmT",
  "key22": "2q941prcrwGyPGHyPNzPmWqzVGaDNgnE6PR8sDrqTEejfkrVFVCUPrzdsp5CuRQjdrc6GXaPQjA6EMQrnVib1LuK",
  "key23": "2qBhhTWy3fFQRnTWbT6Cc2mUmCDm9M2ztbMrQyJsQeid3hi9BfE535XP3A1icBVyxa9zytn2ZmDDa9JFjFYoQMhJ",
  "key24": "2Cw9Hjq5ntAL7QgZkrayksmbzcYXsRUAkFzFzY6vLqRsdyw2KzUwwxLMxVZiumuhK6KvtDtvTT17Ex79gx57ZiBG",
  "key25": "5xWoZWbqDbw9Wt4Ry6beGChcWWeGekbKTrjfrez4rPS1BaYMnEPFnEXoQv9EWRTHn2qjZHyERsxZifXz5crFSfF1",
  "key26": "5W5YNR9ZGJendMXb74qGgEXFvZFALjucbvu18rcMBsT2JwBAQb8LdVv2Rf8Z7Jv328ktByfKeu4vhHEC7wPi8D4E",
  "key27": "4p3VAqmVuKJw5upwm5Q44J2BUysEENqUWhNaJbSayXVeFL73D1JU7bhhf4rKhbF7JU81DdRJGJhcDmLiE7PyL7Sk",
  "key28": "34BeBsChNyX55pKdBTTj6sTWnQk3Hvh3S1XA5PaVuSHxgfXRCAnK7NaWnPikssmc8c7Hd5yUQfGpP6D1ZuxzgGDi",
  "key29": "5cr2mvUChAFdDiBAbwVpw1HMntTDvNahvq2R7vtsdVnybeHuG6BGoVLnk7LjyManXpcphUYHC6pE7tN93vXvyw7Q",
  "key30": "2bNpDbkhVfBJdNsNfXDv5FFYguGiuj1MVzSTFrmzynhdGW3QFR1GtvinY2j2F8yDrjgZ9LT68hBEXV8CEkwTJmrh",
  "key31": "4C5BKBgKBxq33R4JUHE4Bz1BjotRKPZSmYG9SGri5fzMHb7Qe4kdXg5sMZV3HfyRiHbQM2mMAJ3wXaL8xh7b8SfU",
  "key32": "2YyUxWuppFRW8q7V5XokcNCc2dMqLDtfQ7BUC7kaFvy59KQ9uER5o3hyeTdxoD95ZQZubkzvodr6iDxhqCkR5C1J",
  "key33": "2muNa9f6UZW6sC1qUtHoHuwG2PC5vGcGb46sArqMZgJwfraiZ5gvaZK812PnedtJX6P2tSS2ZanKqT9BJT8GjzFH",
  "key34": "7C79hsYcjqnZYzYpCWdfUCXvkct6Vv2XfaH358CNJGDzSyy6hZbbondEUDQsHppL34USwTMGKq8zyEPXTpcX35q",
  "key35": "phPBjQmF52V4NmkHV2ZdcR4iXAR3WWYf2Wrcixzk9D4dtzJkXac7BKdJUFE3uHy7cbgqmuEw734LbrbRTe7aPBZ"
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
