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
    "47qifn2JWgQwHEgLcDnwdNdHXUYGtnbKiXpzY6y68HkcjqJCBdj3dNAztu37LUUZ1ZLdpMchT6snkjeb3wYGUK6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vcuGacwnZEzpo8tgmBJSQrYYG8seaq3cpbC2wGUkRkhbt1rJv6c5FZq7FcHHsfFGFMrXSQE6BKp12s1Tu6g941Q",
  "key1": "SD4rxw5sSwCUwzwk92z91sexeSHKFqqSvAzvG5d7bKbKQ9DpuD2aGfe7GJcF6VXUoH96NAxUpCMARSKYgfaBGSP",
  "key2": "59fAMNarRhByf8Hnbrxs7gVEoxUy3A56y7WRveVrvY7LZV3PzqYZfwC2m5yq6oDGF2eRgpQyok7CEudjUjsdrysN",
  "key3": "496rxGGSu4gBSMLpJUzixwuGiWJP26fM6BuPu3g3BZzvZzy1bVdLJmGRCXzPgyT6FfBrLBMdNqAVqUXWL7uyDrL",
  "key4": "5Eh6VCqRK5nnsBnytkkYBGmj2yfmrmvmDj5WsAeokhrhHT21UDwbRpGe54A5mDBvEeNXAVfDd1rfYANbKv3Emgqp",
  "key5": "2szboE8k86dv7LrkUQ2FKyvsw3HaoFaqXyoFmb7EFimmie1yVwCc3XVKYNCFUu3Ph5o3QDU67nBbniCdFag4mCDt",
  "key6": "27Y22W9eD8Tqv7qcgAnvr1KaMALnVyK8LADkzKif76JKgkQRzf9UzBvrK1VeHZuyi8mRqmkHHiCcj5m4dAgzC67T",
  "key7": "51Wr6Ky9NU9NujRfB91upkgL2fUkwYQ6BoDjsduXx7jvPnb1qABxUkuL9vgmXJyUN4yRabrGpEhnv2pKjhFRW4KQ",
  "key8": "nN2c2fZJrxdpWinVnm2nuKLMqTbm2fdW1H4f67vgdHgyjyY2UfHgMoM9SfJpQKKANiaAxPJeTG3uTunce88hMaT",
  "key9": "bDhfYzF6BKR9aELgGGoj4nfYu6ApeUzVWpMTupaMs7JHXHGuQzkxhqW5D9SsSZA7ffqFdXHMuVFZJWaq6Ji7LZr",
  "key10": "2hoaD14JG6pmWahqY79Q4TVQNmdduV8HZaDMPVbMBHn564Ev2awoQr3pttUWUEscZEmSAWubxqeaQhCfefY3fvDC",
  "key11": "55ug9DcNEMzCFxx39CB9nWZvKXcz4C5v3wVGueuAyKsp4tUxohgE9Dp8BU1dH5Btw6LHfgHkFtd4J93e5DXNVMuZ",
  "key12": "63QKRFwovPswg67LZVHKGGV82XycNr4JYn3gBeXnLS5a8hpbTUpEdCEHHyAdZtWp9UvpShLEinEXQpUEaXqxEwUx",
  "key13": "5qTqgZ9ePf8V9thLqbcxBgAz8dweKyg187B5RvGzJQwAFrY1TASUTQneRyzwwwFkSNY2gFXeYaXAYqqYGB7EEvc2",
  "key14": "5NGPo3jsse3LVRWySnHNoja9mLgwESnmMLBeY7aqYvhwSTUyfFPeSGZoCPae8kt9pemmAR7JQYxFBZEjGAv4jJyo",
  "key15": "2kmX7f2xxsFULQyNZQgx5p9g4JfMrfyfCoRZzTcnhmPq5H1mcZvWetshVU7fauCfAk9F8gsZrqFzw4NpABQoDZ9x",
  "key16": "51LPDXKaZvFZkxgEJnmbBZsSUnCfmixawiAF4CL9hhg6Ds1MCLeqiHi6PLvgoybga9cMZgNJiwx1iK6eFkjYPJtX",
  "key17": "56LcZWEMVUpbAQ9ZoHQNtAEn2wjqzsHu52QDVdmvhWJqvvRpC9zjL2b9WZ2rsTt6gidSsHgD7iLNhDE8GcGK8BZS",
  "key18": "5cfXoVjs1bNCH1oxAxjE2TGugwVezBMf67PbCtmYN6S8zNZBUffuusy44prkwKup46vzkb9BQ2G3EZEqWMD7GzxU",
  "key19": "4ZmRX9DQyq52wFyUfpgYK4esvJBof9USyZMrqWNs4CyawRhY8Xze8j4bDzbqpcxYNPu1TLRSkjgoXMZymbFqqmrh",
  "key20": "5YjWz29qjRXfe27HWbdVDo3bq74xPVHmvk8JDq2kad9TUaVcMYJ42yShC1wbqmmQaZLVuGpaYpPVBtQRRGs6fNFj",
  "key21": "tJad8ZhzvrbbMfNdJ4n61qCyWmkfvCAxYhsz1DgJ86gckVtQYD3febEujaMeYvmQStgn8jxPhSwR4A8dkzGMnJZ",
  "key22": "6eEeHXtWnY5ZsDeV5S5A3Vvvs7agAyTtdKusYYjz9P18mzGrWKYJifNUqKZmMVWy5c61iHU2ynZBvD149pzLp76",
  "key23": "4UmwZSwq1obqEPBdYc8NRurg1WRaewqu1ACxW2qHECpxS7CqFPrrxxFtka66qEriMcLrhJ4tVSMok6Af8E3S6q5y",
  "key24": "DbVHh4RLGfgBMRNSgZwpF7jLuuGkAHRmfe4HV2h9rn6oUr34k7P4spHDKNGHsvoCYfjywnsFquotkJfkFy2sjRr",
  "key25": "5R1KKLFxzDVPGMcdcMFCgUGDEkujBEVYBLzJ5JRfqYQxfgfdv6Tz96d26qzPVJbgFGtD2Kj4h8VaCWBs6i8nmUpP",
  "key26": "48XzaQVAkFFCsHWEHHKcGwDgiwLtFgm1sdNEB1hYqqTp6dvZDhyrozr5q2SsLxnvEnHTSxvRw3hYkvaqhxg4R68U",
  "key27": "5ckfGurBgD6EDMbJoUpbUhWTHJp9fEA5m8SvmoC3qNrP8gxH9ENQn7uHynCtKyTPma8poT2jhS1SPUe6p9kYstcy",
  "key28": "662Rmk4DzACJW8dqPYCnvFQxYimu6LZ9ran7fmEdWoZWfYf87yC2yBRxAuYoi4pkBuPy7MGQoAm4YH28fzXn6VnA",
  "key29": "4Vg6f11XpXufJjVHqL48SFHSPj779YSWhUZrWr8CnVGRFKbcXaSZ9wPWSQNGb7gKwdoE1YWERT1yd9CzJtctH3YV",
  "key30": "5YyYgxqV1ucFPcV1X9HfAfPFKaW83NxdUT9Jtcc9tXsKtweoDG65w352zLqFZD9wAQCGiTPajmFckoeJoPCmwUFC",
  "key31": "4BZgoU2vUnpfdKdLsdqVxt6MxBUjt1Q89EEGkHshQ9gC3m9NumKsp7TiYqJ7SNvoLVW4cuSCth6pgzNATW52Hbpa",
  "key32": "2n5F7Yi3fV5LiTmTm9Cpn97MBvcyqN5D7cDwAYyNrMD9zE5KRSWv5Sz7YUA4dmvNhTEdA78XrCkRsn4RoSh3mEi5",
  "key33": "4PzMP2Yjovjomp4SwjSwiy1n6siADW9ipzyhESgX1J17UqZE6CwPuxGAZsxgDhPoWLE8XavyFH8u6oLqV9cP6o9B",
  "key34": "49kDZ41RbYCH498kaCxFDEkh47YLuBPefkopRRgM86LLSDbtYz8xG94sPxHJdXCcWoaKaTRmfRGJGmdAXvH6Lfqk",
  "key35": "36UYvipoMeLGVcSc5X6v4Xu8uacgy8W655sx8LZCZEb4MJPKQ1PM9eSyHMjvvSxgDGGxrvMPpLthZQ3Cj1NaT4E5",
  "key36": "57HPnysH3374rHFUo42jJieHb5kUbMQXLvonbLXGno447ah7pjCd55PddKdfJzWASfreK7Jzo19CVALvDBB69Rtu",
  "key37": "3zPBGu4MZEjCJ1d7sggKQcYc9aCdgoBQNd4kQSoqFyFY4cVX5Hez3cDQSaiqa3648pDsF4NspYeQWaE9LeJXVLzE",
  "key38": "3z4XchuTgDGv4EbAGFPbSF1H1NLBA47J7YgPtyGheUMXi9eUBHAYJuTqA3d36bb8FdMGxE1953HeFxvck3FyCBDm",
  "key39": "4DRTSanQR9xsb83K87yyux2ZJQbEGxaz6iM7KoCF6kjQTSsJ6uSTxrJuax2HGs21n7ZGn56JrmW6bdp8zT3mHcYQ",
  "key40": "3q7Vos5kmMd3SMBddY1WfCx3EaZVRbXFDSnUk6fZ41SgFmq7Fg1yPsxh9G6UbdFR7s8L3ZCYmpp9C3TU3QGCseqk",
  "key41": "4KkBBkGSMsPcaECbVEZHAZkcz8U84BC5MLSZnD21ZD6UFpXT1jv5rawcTxzQRfKeABApXJUx1aEPGecG8Br6GiUs",
  "key42": "NcPZ3BgagD1voXt7RretRzDS4vPut6wpsZ1s4qXha2EYS4EDCGpChZDZKnUQtpRufwxQ8MDrf9x2enoUfzUbcLD"
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
