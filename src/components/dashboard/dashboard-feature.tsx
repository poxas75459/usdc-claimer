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
    "2LRRdZ2mx39z9gkPVcGXvdjaFBFXDYxA5YjgbYBYXW5ZH4EcLgCk36dEexBY1xGixVpay8YbyJVg3Z5HnEggLq6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i5EQqPFtt4UpYmseBPT5vJHQLVD6txgpxoADcwmxAGzPrv79XWoFEVo3UL2VwNyM9SFhM4EGxkVeTpraZiuGugB",
  "key1": "4jK6ncsFfn8G9LuDzFw7UppDGtmCZjDUkCusGMFA4WcRmruPqdxyvs8BjZBSrszT6UTaQwm252zGtRfyWS1isvAn",
  "key2": "32hd9v9EkkK1PnzoGN4afmpDs536xfa4h5pkQQWdmpNPMuAsVmya1DAEBoxqP6CaZELaGehGP3MiQ47jezZ2Rhju",
  "key3": "3tGjDnKN3xUH7Etr31HupHkPEVVZH6T6w9C5LTTEgbyfV7hQb5KZ7XHgBoNwFhJjudA3R5oE43yi1urirWcfoYEo",
  "key4": "3UmeSAbt7nkSbP4FtUyzAM23zjDDpcFZ8Evdwdy97mdWj1BS2L7imefUuCtcyreJ8THasf9BCdXTwTHEndnbRRYa",
  "key5": "4id1ahCp6e6YXcxpUzKtdU35pjMchyYEqPVdpBn3UURAC2ar3LWMMkFSvA7P7KVs8XxxRNXyw2EJjkMCG5pgi32k",
  "key6": "2SSh7jQEPSFWAsGwAhhnKiFtD599TxHfHXaMnfsLAw8ojyPM5JsioeM9fR2fgsDSko9ssdE4geZgFHSEshAGXrV7",
  "key7": "39KQMgTxmdr17KUTgXaEWRkbKZKr9vG179FZW2KSG2Swd5ELT4d4zZYPPS4J1UwPtYEyXmALVyaJUnRwPRHczDJy",
  "key8": "4pzeeMN6PQ4bnrMF9GvSSabjSkcCva8tRaeBRw6C8qbWwnTo9EaYFM41ikTX7r8WfWNArgHk55KyMYUSZmiomKRL",
  "key9": "5eMR4ZVHgRkwy9g53ZTXe7fAPmBpbSvzpGNtrW4LPRTnacU6tm4iknqsnWp8ahvwLJFLR5PwGtgwdMvCLYV3fTtQ",
  "key10": "3qxZydUxa3sH8qin6ehqH4jjCgmmbXM5cAHLFdjBbCXQjg3YoBkui7dKEuwrEqaUFdSYKC8BMjmWEtvcjba2EcH7",
  "key11": "55TgtKeuL71cZ3Hv6pMGuvT1aStMnw7sNUAt2oi7fAouRi3HAd9FvWuigLLYSGGHKzXJFRrGdtCnovh6WnFZ2Viv",
  "key12": "5Hy6SxJrkMo48cQnXRAMKb143Lxm8x4apw13QucWC2LAb5S1VQU3By1iuJSjQfrjhJrx5H3yZrnmJ25owjiU2W17",
  "key13": "1sVLBi9taJDV3gtfcvpXnbpxA2kMpMmzeVC6jsYhDC5SiJUMgt4qA4WNDMnEEygnvRayoqas2xgTAAoqnkcX3PD",
  "key14": "52KNnNX52boFQ5SzZjMWqYynTgVVPJ2Jo7qEhtgZTTf8vLn8PrrGSfhMCFsBtihLpMMD8G8qrUFRJhDmU55PgTB2",
  "key15": "49dAKoCeyhwaWUtut8uXsDfZYf7hecmun8Dd65xoU12h3NsxCerWPDHmLrSkNZGKurNQe6V1XyzAXTZqXXYrJghf",
  "key16": "4DJDinLhbWRa9ngBTM8H2UFEerJ8XqBptujHresAnRd1bPmtwhk62tgT3Ybc4aFbEVXUe3brBeyaPbUsuJjy8Qf9",
  "key17": "HcZUPuCn4YdAb7UfV6xUAtLMK8yRoS6a7zc3UQ3dCryGpDYBLQ5N5VAqEsPuoAsaK5jbhBdu8Gq5zMVdN9U1ft8",
  "key18": "2WE7jKJJaqNas8U8QCVSYrA8kzc1onKmJ5CC3nXMi7E83THGdmhbSt53nEh2xwbyBbtpGkebYC6yWybso8W7QjY1",
  "key19": "21frc4qstx1SFsYN4eQdWgogmJeq5wcKCadFXgqTLEHzX7eWvXkfKGsRRofZr9VvzHNy46M3ZFEgYY5iLmYhbqhL",
  "key20": "3xruqc6gJfp7Bbp75NDREtjSZcacjqpCycV427oNJwPxqqbWtUA6CznVgvczmABpQBVfXXZgiFngcH82vYxFgqBD",
  "key21": "3yzQJNJvJEPQUKrXtP39xUZSaTsGRuodqTBhDWzcgmRvVsRURSb4ZgCJUQzxFp8uZqNM9Ssg8SMk9PEVZqqbCpKn",
  "key22": "2sejKvaXjUdSYZG5RiMUnhzxGm22h8BiytxZ2oY3UtiDKYBwdcvvGHaSAKvYsYgMcUxTTbwuKGHxJn1we5h64pe9",
  "key23": "2uHmniFVt9pYboA6a3LEyoKvUJaY5Ncfv4XiRe4Qx7NvN2L1G4GZJW8TUz4jRns7aBQjLgueEP7Hx1zG4W6CMdr9",
  "key24": "2n2UQFKQCnFoT8qtLsohXqKi851reB5AsMKZS52VMTKxA2n9Fa76tXQxGtrAHSEvzNb6nsxYkkxmjuzNmDFf5Ssx",
  "key25": "5WQNHMvizt1s5ZcFDWP8xiL2R6ndkuVzV2jLWxRtxwz8drmHcrjKzQ72yUfhy6N2fKREJhJ3zjke93SvhE8jbRhU",
  "key26": "49krT3NJuecabqftpxiokEgppXgP3oGzjWnstPYHsy1rXbxFGGzCxSiSHxTgEM73BBk5wt7PY1t1w1bvmX1v5g1Y",
  "key27": "2t492L2Tw3fzCD5v7rFNQZXw6VXTxVURjvWgZFJjawEjuRkVHBh8Ygw3NgkCgf469r9BwbhBz2qpKjoQQA5Ax1Zq",
  "key28": "51j4PXofAUnnwQRX2GC4GkxPDKLGRcpRMdLa2ZnspVnh1TzFzVgvKSLZygwJbk59T5VUUu5RXuuTJmUCkQkKvDDz",
  "key29": "3rKw5f3UhQXeymxhoFE7WV96fZNfBQ83au6MKcssbjZ6YHgrhb3QZ4jbtXb5dYAE11M5eiZsMyVmFiL9GGbaXB76",
  "key30": "46cfU98eJHVQdyzxw5qRK5b9Cm4pfd3gSDLviunEcPJHFPcECk76pHNWhxQxeWo1giNJRh3xdc5k9KkgmMwbRv6T",
  "key31": "5u5gdeNx1WTo21B2AqoG8a3V1aVEa1ZBY1JreymNrgR3ASXfirpeetoTddrbFT9EDeF25WEcYj2MNgY78yJ8tgq",
  "key32": "4FUUk5hB9qAVJRdqhP3Nw69KLohYGJ52fey9Vy51Y9Pgv4hP8QctfiihLNGTxTgMooeJkx37sZZ6HhVPL3sGUtm6",
  "key33": "5y3BHqjtTtsu4LPrxPZCWKjiRf8pHPR1kjWiVb3EFDYrKB6HqHjb42vNJhsfCvCmTjx7URiKn6Pz2RuNHbTW6APb",
  "key34": "3V7XJMf47pHEYYgmKPFPJXZiJ9o41jtrVjNEcoSSH65TmMLXc5d41TURbMu22MHo1LQtcABLKcKhDdiFB8RLoksw",
  "key35": "3z5CN8gVGDJmASsHChNowJsUqbRcNDbTWsftKc2JkgFp97wQBQYb34cbpbYGmpKD2UTFm7xiidtWFzuKJUwBPnXK",
  "key36": "54BmptKSCPUx3WWP3zU1BMgFrYAAGLgYyUqbLbbjSzpVBeQ5V75GsByzshZBA6LhPRsfQ1kywTxLWtWHTgMQyquC",
  "key37": "5ZSQHyAH1YjTpwT1KNiPy7kcU4emdDrgoXCcWCrfny6QXzLLckuHjg9aFcuPLK7WcpVkDkjvTFfeGQBV3zDeoirf",
  "key38": "4QXr95yDSprs2FpYZ6a4EtzucwcXPd5bWooPCEjGzsNnGDbAeWHbTiJc9bbsacyqrQFkjPshjQy8hppyv298hKnZ",
  "key39": "3f7ozHfVwtoWHJRq3qbRibDVszWsqkRCfDrSnAnEw9Pnvsvr3cZ2rzi76CZKthnkTPoTyg7Eo2ae2QN5Dsw8xrAH",
  "key40": "16heM16YVk6EJwUxVpCk9LXZDwpdqfcvmXcb7Uk1txci3a5rpSVxL6icpnhzHPFrYVjU41NdgRE3g4aUYxALTs3",
  "key41": "4SdieUQobDi1MDAuHm8HfxxpE93GYa1ty63gDPAtNPX2VExiCvzWwB8WeaRbrZTNNgmtqgEvEXDojv17eRAPMgp7",
  "key42": "3T4hJXuz6HvWLoFqBk2w3x1ymFFmnVRUCxe6gTiUNpYkuSdzgrC5yp1r1Np1K2uHTVuwzLP7jyk6H1WCbR633Xqd",
  "key43": "v2SkKTa6caZbA8MkM82BAYLmZ7EFuyajcNXuuhDfCUwGmninHVwMTCXGfsfBMdCT6TkX9mYPhQiJY5pJ1DPVG9D"
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
