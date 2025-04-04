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
    "41rvsNdfCzng5hpSbqqR5X9iXhLiKwv4y6MCqajxcDEoFvmEkQJfLkeViNiqUywxfr4dtet2nX9PskEvz1WPpHhn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PoKLADNATeVmRnFTDkarEoTk8H1XE7ern9qsdaKGFK4qJCF6gH542NJtNJbWZhowBeW1DUHoYDuieeeG1A4aQXk",
  "key1": "tJR1eKzMTFy2bd3ehKiGWvo1vPoQCGKx6dGfWLysRU9MYNn9B5cRgBPRZZZq8EAWttNqHro8T3zKHFjhHQn2W7N",
  "key2": "4N8qRgfVzrA3nX8BgcR89VFmkA9wKGKyHPhdWHf28ZfArd69vwo3AnW2FQnh21pkaDRs9HpebdxLRSSM1HSA7piG",
  "key3": "mnoiPktmP5YX1SihzbPTb5LPtEX94Qge2UCDrb7TchBnewVPwzF2naaiZFoh5zPXRG9puDeQbn7VVmewBARqTay",
  "key4": "2pgd1dDbakpJrqqLxSoTZ3k1UGaNuPrSP6yEs91FKcgAbuUH38vXBnw9248EGxBPtDzmjtXDw4LjxnRqdGYNQEqb",
  "key5": "2paNySHN3BiCFr8NreqxTLgstw4yMgpnbm64JLLj2bsxF2Behv3AThjG8FKPrvVaX3LGLqjAHjjHBPDBzHEXmyRp",
  "key6": "HFPcY1YLwUyLavbXfiWCcF3HrQEMQiUs68K32nmvgTcjuYxprCGe6ewZtPEnJ4FZhmj2bTZpxsZKN1AQBicE1hz",
  "key7": "Vzv9kvpeKbBpdFNLQzMu694HrtWXrkNuo8BzB1UxEtWeND2NMqeBShziaaJ1LyEJFNq5TnXeeBdT3CKJb7WjMnY",
  "key8": "fpKJwZcyixLyFkwWWonPkqgcASEHfduKTNWDfYmoEkfmR8PMV9TzbcjqZvmyV68BxH3cs7XPAehv6mC3e6D3yyW",
  "key9": "2y9mrcj1iVn51tSvrYdG2Wzu3qEuTV1ZmmFLSptDwdpRDPtFY4DTkiuBM4zb25dkwNftnqNaLMRTidQvbuXjRHxm",
  "key10": "3xuxTp8X7wJKxmDp3WtQkPCZGNuKbtdE2DeR1xpRkGt6RnCFWHzbAfK1Nu2srVyeXb6w1hoJFRbY1eHATwQ4xhsw",
  "key11": "5b6LNbqcvrMtg3NRQhq5hC92Bi8V1tf4dukBBWxRh48wGuTyiTZACzBJaGEaARAqedVAN9M8MAWfaiUvQzFAQUDB",
  "key12": "3mT6Ro8bXwptDF66uZFrJaRJB1vAWJ6eD51wm3B2LXwJbLFr5imqfks2PzrvEbZopevR7ke6NZDTxB1X6BjNcENA",
  "key13": "4xxdiBJeYvQU3rEkJjgovreqR9Wsi6NekoZceP2QLGMCZ2gXDsoGLy16hxML6Z7iMfPZEYi4B77ootftu8WczSZ7",
  "key14": "36Gx8EGv7J3ujTUoCr6sXpuUaGXRYvx5pbcfPvKkrG1C32SsENnPCdgum4gu13jRXVDXt4ojEwZmzkyzXJWtCWpi",
  "key15": "5gC8aZogwwcgtagDqtna1anmZZZDF8CW5UrvVThHkV38kqs2NqKb8z6V7Z41ZoE6vHxumcV3K1xToK3Urhbj59xN",
  "key16": "3RDrUzdPtNpdQm7ocfmvgJ5fqStsaQ4yJ7qqA4uEdZdDseSRYDLDBD2NguzkpuVT7PoRqRRRCRzkmz597fpuypGC",
  "key17": "5n9CC2FW1jPHLn9Pvc2mGW7H2Uv1NXdBhK5JjfD7hoEBqrT73L1LHuzYAGnN7edvkasRGYoJfQjUHBbcsK5CLJzT",
  "key18": "bnM2Uc9M7D1aAm6Y26YbW7mFiqxZS79yU8kPduWs9jmE2TQS13vt9CeTnPbvTrDyeJgEaCq6F8mc7oBh3agdcyA",
  "key19": "5freft9RHYmLpy6Gx4wdsLa78LZEpR6zJq155Y8doBkMY5jssYxYty9PJqTBpaaSGAPRdz6m6tpb1kEeBaBCrdRQ",
  "key20": "2gpwEisuV4yHGUuCdQN6xSdS4Sx92kzt3tgbaFgucWM85AXpA2SeofywMyHwawSknb3ND4vTYDNGGJFasR2A5wQ2",
  "key21": "7jLXgiV2khhSRfYXkuyUmMx6d4EuZTeF9zmv1zKgVwNHUU5k5JV8yv7KDrWz4GWs9rFYEfMMKXF6DPBHHSLgXwy",
  "key22": "4xd5a1Je2ysetmBUawDYnBT8UC9uqaAWkyodbR7r95uZZwujWx2Si12N4auQacxHGyqh4hsA2gFzX5JDUbxsUgtx",
  "key23": "4heqJWHD1kQ6vgtAMw2JFVQskScufaSH2kbxpHX6P21MnpgPQXYR9XjPmPG35ahUrSkXiYqrbkvR7Umzoz2qXdfQ",
  "key24": "5V7wPdeGTturfmPkR5g5vxPPuaDM2ZNynz3Cg21q5gmztp5hfkx7myhMPm1ZrFLJaL4RUivijJPcBJ2817cQrY67",
  "key25": "2hEHTmmHzvex7UJrTheSanLZNXQ5E2tXgK4RXo3rYwkZnfk1MhWc8cm9t7BSYavBx2AiFs5PyhD7AdbFx6e32Rbp",
  "key26": "4LQmupEEYAtRS5Fo1KtHeuw3JzpzZcLXcndkXEhomfhGUCbNHfqVArQcdmB26UWqYHZj6d4yXkDdQgog3Uh5K5xS",
  "key27": "5ujiZ1jKnyEo9GwAVgEMy6EzzMvPUW9bSRa8MmnnANRwrWCNA42zvcsvfoePT821GCAKHXfA4ResX9weqfx31WGq",
  "key28": "4bshLFWuNn4874BWora9MiRcrrPTRhpvenHjykvL8c41Xu7x9BSYCtuC3w28iuCtdg1P8k3RcVRJA9ETc8SX8wVD",
  "key29": "5XpGwq3u7DaTPv1MqYymYir55qebcMx9C9dVxZy3dhvmxESfPqvfNXdtPDa5a7Ti9bLgccPUq8GoGC1ceT4LRByK",
  "key30": "5xqkJup6Dcg4YyYLUQ8WNSXdXD2VshHpbuSJ1PgDLUETEH8M6EQEhkTEkFTt5Aa1mTeSVwK8ZHbuvnhxFh1HUQV",
  "key31": "3XH7Pse1DDjUHFztQx9Jx6dt1gduQTS6Dr8ZftjSytjYuxuGpfEfpDnBqvVvL2JUGhJqUKokLdGy7GnLiXDTW5pv",
  "key32": "3arfNrhu5dBuZEm9BfpoAFqxKw2c69iqJGRrnYvdB9toav7uJR8LSv3hBYF6SU8ATTmShmxfhqbB5Zjt7s8wfZhL",
  "key33": "EHPhZh1UC2vvSz1LkGsnwLWc9NDnPJT4mgnaZcYsKGxqwNmEJSGF2yAEZ7dDEbC95cLxqAPv5YfZf6bruYLm1ww",
  "key34": "2EgQfFyamQwNeGZqLx3biNppZXVyogTUUV3q3q1LX6mh35vHcQdAnd2VjuzY9EfA6chh9pGzJJ8x5xmf85dZx1wB",
  "key35": "3BcnwsAvo2zpx5bZ8aUpNgX8k1w16dNoo6C1MZRTtcMD7SaK1PnVjiJDBjF4yRgCfjikbbfk49tnQBqjqX1jmvHy",
  "key36": "sbX11P3B3bBdvEPAgMz2zeCGqKjDFgzT6gxFEFaXFkYQE3SECT676kWTCcznFAvRUQU8VTNqcPpZVNn1qrQSCf9",
  "key37": "4BAmgBpDm2izRHDd7WXa7161dUW2h3UvyM7tzc9ZfGtN17qmpGhzvo5PrzkfRsYRcE6ZpFt5JvT7f4P4LT939mm3",
  "key38": "MV5brcyXLEvgLse9K4iMhhW8mxCaMqBE2rJPRzyV9PjukxWwH7UfoADjRm9ra8phumkiX7tn3UwyyiD27UfKUaB",
  "key39": "2iojPSu9hEgoeBmVCvhPfHry1hJVJU3YsgGsnACaPjwbT2RzE6yoZErYnJ7LYbwXABANubt5YZtKKgdLSee7ffgF",
  "key40": "2ZobXiU43upSanHxch8AyD1YahdYNeR4jYbxSiQHiDri3WvthC51ygrfmaBvv7KKyHyKHK6UowuRQ6g4VbJqairZ",
  "key41": "1T8nYYcyPEnjZPMRQfw6hvruvDrdi3DasJd6QTydSFoGhxsJFfYZ4omRzmUE18TdcGU97NmtDeyi7aTVE5WMP17",
  "key42": "4GBP8xLRFuKNRF8YpT4yY6QHH6eAUmgwnUWFG1Fwjcp9PfQ7GEsqcNYmh6g1soqaMALA9ipCwGcfDAtuv8m5UCqs",
  "key43": "3yrdFW8PbCn6znAUSMU9wcm5a3Xxb45pkzhZpEK9ZMonsCLSktL3tWFtK4iHXVXJVRP5bsnPS8k2beL1qKuqvao4",
  "key44": "63g9muxNVdzpbFR31m9GKgbxrKi461j11ANA4Zw2ibB89zy71pu8vSjXn8PL2RCFAicLyHuY718ajBohHt85vbXo",
  "key45": "4rwdXTcJHFzrdSmcwqAKB4E5CZqEf8zhhEoTkk1JCazrNJg5VSe2jXqqNiVmimANV25paUPfwEut55rV6tPJz1ms"
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
