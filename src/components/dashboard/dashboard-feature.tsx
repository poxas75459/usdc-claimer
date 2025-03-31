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
    "2UEwGuSMjtU4pQr5hrwJAAdzr8j7wW9EEdCZnM6Ez4rcFraLx5xZQ8AgEaup3eod9qw91q8dQif5BF8WXnRX423v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32C7Gwkx7Zj2FWtPACn4zEaa81u72HvPSu7z28UdcQGBWZhwuxcUyf4vZiwK2Kjqz35LxFWh6s9cn7REYXvFVt19",
  "key1": "4uBswpTqcgPGUmCL9mXbJPHVGJZb429k3DDNkheAiQkpB2fMTqAzR3y8QzQ7BBoP65aN4pug6vwxUYKvNuzP6t9R",
  "key2": "bg32GYzcp4RjvSVjcDPPeriu9432Qm6JQe1iguXK3Fjbsf5pQ95LbUiLS4223PLVCorgM3WzktkYDna86EvihMf",
  "key3": "3kqAdZqKoQfFyeFpruPPUbGhgygRqaazkqHzndQRNWGab9xunfNquVcBLemDRsDrGBcNFW69YxbuVKtfWBnjMbEX",
  "key4": "5dJeCaDMytoD6tjrqgiLMMoaUZY7B8ZnsNWLXrPBG1hQwbEHtQtSSr3H1CCEZ2HgjQWCbjQ6vw3hjPA4DXNdg2Wv",
  "key5": "2ErAMpLkMYgYue3oyvLgtVVzZ7h1PiFA71W9mPQ9sYAymQdnPsKYucFNKvd7aZwNmmHCpPYDt9sQzvgTPxdQQkb2",
  "key6": "4Nb29HPx7VmCuTFg316qtFfAjrZVAd9shjRcYdojgj7MGWeMcpTs7gqopbTq8jvnYmkNzY2yuD9Adbr96XMmenAU",
  "key7": "2LnAbSezuPYjBB8KXhkXwT4aUKDHrZmfdhd8TQz5GasReK8pZ6UPjCxfgftCpRCoFMYrbrWm2YRE3pT3mQuHYH1o",
  "key8": "2pz67QLHTmyzGnkHrFhYZpNvwW36sssbX22Vsd66XPJnaNLZeBhA85e6ieMii2eJK5voVkqQZNYNxmJubxag6z26",
  "key9": "3QcVkQiMnet7EXBy31zXidAB6192XfwQanN9DR2U4ZMSQ1Uci8AZuxtRNY6k2PBf5QJiaKPfujx2idUmLF7pbmrz",
  "key10": "GuGHUkiX8weuuuAYCkeWwqRxXbkNoKu4dxdXX8LzpywoFzXRN4pag3WBDzW3xAJaRw5wAZQrMBuM8AZVpn3EkPb",
  "key11": "4JiwK5Xq6dUVSqTYT5EThwWzdffeBXgLSXHohzF2qmJE5U5SXrppEFqmfgtx5poZE9fVQnyVWxvKgbxmpnXzorvg",
  "key12": "2nM3Hq5oJqzhdjhQxpxE5afXEi5CCv8QvWyKVoS7PDxsW24qNPBXJFxmo5mMpCFULKLehMx2ifq5jVnTEF1n7B1P",
  "key13": "4YWevNH1hcbt97xU3vSmo73umcEeBnckGC65HmjKrDt4a9xPoQtie4cA21FcBCCKe8YvVGd75EZyURg4rD6Gjej6",
  "key14": "5vyewjP3XLKUsdR6ThDb7iUpCcgpGw5djP6dcjUawSyH1XuBRxZbKi764pbyVDRBrf3JCTMSHvCqdGMYqX9rtXCY",
  "key15": "2GxJv8kV4xAicFfqRUrx3QmEMTA9E4NCvGJ8WrZE9E3XJav2BJgjnishATNtipr3owmZ6fG6Nf7FQcUNBtGmKoXd",
  "key16": "3X13WyHnvPiR1W4uUs7qrRbbZUEhtKYTByTmo7bMu4v1PdUE1dyEdKaLRKy4nopktAm9tziZc9tHeBaZqGqkMxyt",
  "key17": "5c2nQieurgt2rNSCnawa6dkExE79XbZtyWoAoRnhtSEo6E8BPZPzKwbes4uCYgoKc4bz4fyKz5uc382hvThnuEaD",
  "key18": "4ZxpdBNijSjqTVRBqSYQ5X3qJiZ2GnuqCeu6BHQPeBz7HDmwdx14PC4vwyhN3GxpR9piM3wqSRZNKDgR5vGySxHq",
  "key19": "Rsy4e4opi39qHgZHXSrpR4g7gELz4UAXRXaggAcjrVR94p5JvQkKQBUVW6rkbtJ4zcqRbuC2Dd4zAkAjLE3M6W3",
  "key20": "HnvbzxabtSvTZ6D6nkcQMLwxRQJM4dJHf8yeDm4e7zwaE1q7Kv9No9VC7JYcvaXcnwsYW9AtCChdjj5DBB4Hogv",
  "key21": "nejVCpjnDpzjinzfLdzHqXCUVW8GjKJH4bG7gc1dewsQ3m9oBkA2FVssS98z2eNVup6oCEgH75tWQP6bdi19QAb",
  "key22": "45Gu6M2tmBB3CfJWiNcp3eVMNiF4rPyt3qNMHSK7cjqU1nD6cnwTXqzbx2LhhLoxcRzHg8zUBW7pd7bdY7m39kNP",
  "key23": "5pqdNDnCURpV8s9L9Zpy6fH1QZ9zVzYUcAeAxAdJRjvAYsFe41NDta6a8MjQ6GAHmRQwTsSrCccfyUcofJz4UH49",
  "key24": "5oPr3QsCzR18J5u1GNtDEGgXgFeZ8hdR5CcjyuU7pNLWpUYEnbYGcUkMK4gcLMxsJpGdmcQttB9D8MTuKrqPP95f",
  "key25": "5SdKBY8szAQXiEB3T7zNmP8nhvSFFbFxSHtgzyK8UrQTqxEDKJdvkdgtDmqJDSYvA65WVEEf7zqUCx4bJ5vC6292",
  "key26": "2i65DK7VQGgeHZbvBuJhwWsaWH7xSKBXmzCKwcdPWXXYtFJ2yc4xgg6D8ygpr7inot9AnBEh4JNfRbiWnVD2uDgd",
  "key27": "39gfrX5rNz7USY7mjcF55udCLLZFgm6TvZyTh5qqNT4yxgeUY9woVKj5pR4DZNB8mc9WcKNh1yGNFtwqrTN7ALyZ",
  "key28": "2ANQ1qRmYNvfu1SxAaJ1baoYh1amck22gitxzDzxuoguxVXzN8PvUFEVMUEhhwfYWezLppoRwVxr3rVbGC4QuLrH",
  "key29": "JobTb8kxSEgscRkJrvuNK6v1ynzCZPQUJ3dLRDKax4qeHMMEMqNEqGmiS6av4c5YRBKwytrMemtqivYYVAmuFBv",
  "key30": "LmZtwXxAicSoWdTnmgDEcHp6cJU5EKFbQDHev1ex9YcGBgATGZgSrrQ9TVvJUpYN2rKdwRmUyWEDeCCZYPV5J2g",
  "key31": "3DRYED4KqwFgL2VvkfqMVsviWPL223qUUDLKRm11SHRYyJHw1JXRSs5GzmR8PRCguN9PL6Q5MaVsFAKBGSz2Us7T",
  "key32": "34JJmskvYtUdRmA29dRBNnucHALDgMtkzE1Q6RN8g2jBobFXAuoQXXTwE3kM1tYHFonjH55bVhhwxiB2vW7RPbuB",
  "key33": "3Mru6uWfG3EKFuYgyF4u9a4fJTF2LdUABp12bfWVUM7qafjgJbFXe6bAAfDb22XA6N3F9vE7Dzt3b17tbWUJrbQD",
  "key34": "3Wgc2JJJtuHxPiF8E6yTwZwPaXce8C6xutqsNHcyQ3rWBq6xJCmaLvHU6A4DAZyGeAeBHSD4hKghqwjGGKnEnhzA",
  "key35": "3gqzQSDBHfGj5nujtSBDeRxSEL7eYabkUiK1J2L54MJdMqjqfehxrpbAAvN1v4anVmqkFLB2vpXFfNStUp6CDzkQ",
  "key36": "3UXdEmVMyWNAZei7D27oSvPLDvwzYTaDaE2iLgVuhHMnqXidaM1gwZKBKQFizKdmdYzemwVqgvUhVrU2H3ohcD1Y"
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
