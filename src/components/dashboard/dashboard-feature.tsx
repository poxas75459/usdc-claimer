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
    "3hNK3N1XT4hK8KQdzynYbznNUj1xEmLU8KeCjgyxLDWAxxowc6Jdf2RTXRqQdyEYnitwGrhPd6wuZEbq4yjJV3G3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FvLxvrwCmZ1scPDS6iPJmPTnJoKHxAS37ZrvtpfYMfHTjNtaBsNLBGHNSbtUu9kyDURJaq6hinjB5399PH7BLEw",
  "key1": "4Lk7J43Rcwxx76PjkpoSmxyGzNdHHNzVSfya83cPxhy2EKFwSDHnTy1EhVArndckwoQkSdEBrcBUcZeYBaaV27nc",
  "key2": "445YdyiV57aEFLywHjcfHQ86Am19TEuW424HYxgAJjhArCXcyXvcidtaa5khuLuUNfDp4TrxumV7ZKLwUkF3evsp",
  "key3": "2b8X1LyFa7oNpwgqeGSpq8i1aKRbyhsUeyEFkipQby5cFja7wqXdaSEHStZ2WcVjCRYve26ivxMT3TfWhJa5qv3Y",
  "key4": "5VDVVpsZa933Z74TuAp62UJoWZLo7VxAFXTTW7AY9h5bKjnGKqNFDrut9aQheAqeKmLZ93Q8RGxvsU6G92M5bbfB",
  "key5": "219bKz5Yu4XK6XP7vhTj776cbvrjVVPpUfkMBQqjU8xhUTZ5yrwAoHTjdUwnjYdRqCia7XBMd6ZrdzXENsk3LVF3",
  "key6": "3nSUMWznVoUc6fmdWjJV51qgCDKHqbQky2BBm5YuMmTVPgHsEsVzSakrvCUL2VYFNNN46sguYa9RVLCfbqdvpEYZ",
  "key7": "3R1zZAnwSa9bCNUm1janWxute3VWFFsqEEcAYYCgM6p8gr5pTWGCZo8gsvRx1jtbBo9cGL13d44ujd7rJUy4CntU",
  "key8": "4iQZyBr552TW93ozEJNnPSeNKwGao3THFtteu8dWfiq12kxbi3RPQfm7ybRQYpzPyUGoVsUKPXqAb6fxer1RsXto",
  "key9": "4aDDJzHgydYfp6T1FiCpM6p8MfCfeoFidUPmJDmEoTCMkBdgHFD9Jtkgtq7QAdh4bvcDFLQ6H6UdnY617XUvX25p",
  "key10": "2HHVRry1RTHKr5AJGhx3PY9KtwwBe2VefQwEfnfJvB3utUoXMAsdb4Nx5SGxV8s2HYpPndBEj9FQ4utLDpepVDAb",
  "key11": "2dvHbHE5Wyb5YWQLLtrdyuyNKDHJLfWyNaEjWE3Q4atQtukrXYNPt61McDBQcyouRGFKhLY3HdK3iUP3nXi6Kmyy",
  "key12": "hMwaxghnq6dayzBreFLQnasend3tFeckMUkbCjCKxY9fFQCYCHVKEvQhVsWDEYKEbgjVC3tTVZvyfqYKWaTvRuL",
  "key13": "4ihK7fdXi8iqBeKApzYKR5mf53KYqZ3oFHaMFTgMgzAyRNqKV8jCYTsSuYff63QTwPJnXVvKUhfEXepZEZbwqB21",
  "key14": "56TXXW6ZyJ82yx2ippAGhnmMNxys6Dkhmxw3izkyj5baP81SySDDnoR1MBeSKS3jYaokwucrSSxfvRxLJPL1RpVC",
  "key15": "5zx3RCxiGvAXvq5qRgdpysvuFkgXfHvzffRkwyfgiDMoXcXguhbfQkePqASXVPx9FxYeyhk5Qap1TbhqWbKgVwCB",
  "key16": "jS7TozSpyhW7AfmM7maPD2dnQm7SUqz3nXYEx4KjbgTozsebh2xPjUsYsK8fZZAN9zjq1iyUwKVHYSsjoPxBZoc",
  "key17": "5HvRBh4PtDuwVZB4xkAkw9XG5GyfXCSG23KfoR5Gn1kz6f7psZb8dgR81ot9P2VcBePSymduquKdvK7ZETBgSokH",
  "key18": "4DHKdrMt65qxNedgHNkLfvYTFFkB15RbkzwQVXfopHbyVzXLy57jivd1SF2ADySFKchHocXP1ZLZk2WdUhaCeCUL",
  "key19": "4PmS7jTvoFQQ4RBr6HZXKFHzofZzhVwGaW3gMAPZsNiSxi6vg8bzsgWJa3p8RLNgbjMNoJ1MyeTzQgascroZbxqG",
  "key20": "Z1fswxC4avHZMwjip3ssosUPPDxnjMEr2Ar6T52vZaDV3pMq7Xu13wuZSN5ng23ttxXHLahMxVopAyjJZVR1w1s",
  "key21": "3xCpUuxH4pFFsHv1HNchqBDzTzjRBuFR56FSZSKMehWoJdsCXA6tQggxSkeLs1LN9fU4bGorHnjSPmFEGhXR19zx",
  "key22": "4MGddA176RrrXC1Uw35DWQUV5scS4beCx1p8aPpGSqTmQkaF6ALexZkx67C5bB1C4s9iVCio9fpuA4c9DaWigAYJ",
  "key23": "4o1o9NsmD1Q9M3kgnFomWwFWMdBpf2n7ZvMQJy8TNWbrBUqksf6spCxTURoipC4Ho7RRTB25bpJeJ6PeRS7sE1B",
  "key24": "41pz9awPQ7w1VnW2KTsZ8XHLUBdMxmtrk7PiTAt1BDUV5vdBE9xayvjBR6krcyqXkVGRuFGVKKDdH96uK4uS2o48",
  "key25": "63YQN55LxqsLcbFreMR4VNYXK9bV9cUFFUryLoJCTHvPTj8v86LCuquhNyKwxv9t27mYufYFaNVtJ8ZKXMCdu5w1",
  "key26": "4Eq8hPW7hh4PKdHYrBwP2BhjaNnkbyYSB7qCvDW4WiKJ2wNCAkKvhT3fvGYkdCWebEZTxooGqeShrjgnhXihYuNu",
  "key27": "3YyWuJjuhFwR3pZcsja7Tt4QRFyWHFQ84NuahUHYknoXWr5uo4zbVLiHwnS9XioTCFpNNmev7Eh6YgmTAJfpeSBK",
  "key28": "23br27dYdXrGydKhUgjnrq1ickWkCjeBYZNy6S9SUFDRJsDEG143LZaD1iND3EJT1PrqLLMC3GhH3YfogMTUBDDM",
  "key29": "41ues6PP9nX4FC3ytQ43JCgBJSSwL3mfzHVcp2xpgarqTspQGzhGUkQdDW96hqA6WaNnzM48WXiyX98mBxXns1bZ",
  "key30": "5yRL9AgKC3sLYqff1Fx2gkDLkdD4WFNpaEUjxBZvdW6JeypDL25TarY1jes5Gqjyo4XEESkD7ksT3ZmwcqB69oUE",
  "key31": "3Hwcremjtfd52ghmJTBrms6S9RKLCfhwZvnAYHBeDSN5sehasVKo1vBJaHayxKDVtvkU5NkM1CNkqEoBUbQmCm96",
  "key32": "64jHqp6vHWw8fxdd7SPuqr1Biw79stj418n5SatyTqvvbZQPgv9AUMFyLCD7uRUjVwkMYhb4ozXw75wwgxDrygBB",
  "key33": "4x7JADc1puhTEWpf7QKaU5qhK1UXkSTWSm9J79wNxV87unhnkfAwwsm9fHWYrCTY2nuksGmEL8arE8nw57JutT1Y",
  "key34": "ELh5QYM2ej5ULzmVisLFx3XCHNsZ5wfpgGT2GdhvHtSLneHeHk3NLDGCwYkjiiFT3XbrQksjdKrYFTwEocNkQ8n",
  "key35": "xX6KKquR3YGudRWA6PH1S8hYtb7hTXHKzfERKU2G31H5CZzgxVLfAzQ3VzV5oeuo1oMUwKYHvgU4hTLiGPPTnoU",
  "key36": "4htePijtz7qZTfTbVN3gQSyUmTGujuddCqttCiSYqFsTjuoLU2eLeQa2KTyAjTe8yqdHHuYYRWhufKstDA3iwdqU",
  "key37": "2myT2pqWNqVAVjdc7MZBDxunnLmrW1wNPRk5Uh5ApFNgP2PFyx5CYgez9fTdMSxfHcgAMtRMVvkbNYz6ozggtjYT",
  "key38": "4cbYcsAvwD3mwVEvRow2xxHExkJw9LjqTJVANMk9TtuFyHxqCgSnXpvRYkCEmZPhGTYrFExXccc4NvRd3zBtutzp",
  "key39": "2M38W5n2jrvcfKwSatAzt9QrXeDh3bZEHmu5NcusmsgE6HgUWm3qb3K8xKd88n41mXPbezo9pf31jFfEXN5tjdUJ",
  "key40": "4FMypy3y3WBB2GMFMKsBkJWgQCJ7dVseTA5tc866vaatX5KwoQzNkyqQueTTvCNKsVQ2Lot8YDHmUSRhN1TLfp1W",
  "key41": "23SkTLLxj6Z4gv4ddNTYaSGpv5gN15GrGNaU514p1SYpP8T8hjHD8sBKDJ54fjeYFwX6rjJJZ2ow9CcDQbmpwX8v",
  "key42": "49TmV8v6pm4y7QNijn4Krn15m7mLF6pt6u7nhPHegGuRgDSEonCbV3Rx6gWwsXjtkyyhtfUsDDWtde9sYD4vuTC",
  "key43": "21hhwrud6hYzzVD2GEK8tTuwBZgwViVwEnyd8YM3DuTSKHjMr3sD2RzsZaHHypVzxVYiirKBSwUwFVERqcprXScH",
  "key44": "5BkujFSdnVetdSFj2q3yjhY4ywjRXivZyhWRcZ1GrPqxEc5QsVfL6KUjMTvJzGyKpAmyVxJw1XyGjjWmTphPwPtL",
  "key45": "2aTEq9oYfBpUH5Hq5Gt4Z9SmoayMpRZhpx85PgjbsWbPEzthjp19gobmFqdjLBAWwrYahqahmgWn17BLpbLV6EPT",
  "key46": "4BJNRmUwwGUwg898Y6P9BDCdcqrkf6QiQDSWa9QqaFfn26PpGhB4gNMPEZJe7AMYDH8BB6Py9xyhE98gQ8uGk6AK",
  "key47": "3Ew4fB8ZzympkmMTurrCpYtQLZiBdqZn7u3iAWUkwahNGw2YoeKUecWL4MWyLjAL6Vg1ofLjZuFS3pRony7Q1mVn",
  "key48": "2moLH7aADWVVPk2njE3JEAJrid4C8UL58iMsNmFAbb1KbYT3DL4Uby4wkEQyi29MrV4nhhnaSypzuK8pubcQ7SVv"
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
