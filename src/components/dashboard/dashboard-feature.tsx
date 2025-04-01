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
    "XP4GSearJkH5JNfzchF6iVUe5gtBEm8WMCvccDdUciV1EPXFcffrUvJmcPi8Sforgkmqd6ZhUQNJgzicoPasfKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DkbKobf3iEf89Zz2GpvSto3kLjFZbEYdnELV6CnPXdYXoBd3HqfEkmEZ4kxnJrLZEyeArocscBrBzKBUZ119mUV",
  "key1": "3fAwwR9sTm6Qr5LomjGTJXs4eMCSCCJQyigJkP84aZTqqQWq5qdGxDjjGdvuwQBeuXiG4FuCDZbVbNfdULhiA7Cu",
  "key2": "3yTqtmLS4dpXALxnxvwWEBwj9t46esHQ6bn73G8jx2mVkBFgyQb8MRCVZEoZJ7oGvz9CJYhxDzgPaoy3V8c7BFDE",
  "key3": "Jnyt7hqctWMPTrtxvF5UBwmgnDfKCcWcaSgPc6Q9zQ1LBsKk194z35ww4GMrH2iAn53KBqsY5UjzcX7rAwB11bo",
  "key4": "649fCAhdLubERZUZBivP9tk5m93EP7nMYiVAtD7n9iJk6im9XRc2n1Qb9XWDKXkHZPvBYoDx73FpH2hM1Jh4nQfK",
  "key5": "4F8CxNfogpPdjAL7QBUSwBNueGjEwW8929kvahLd58zzj5fSZJixPPr7PJPsPeQjn34DNs5MxewoyDLZCqxQEohz",
  "key6": "2hYs9AuaGHY79KFKh4g6rd8t2SGAbUwV216TxZBd6rakNebjBcxEBP8ZtgvsB1egdcffr4dsKT7eTaPyTapotZym",
  "key7": "34bzg27SSpqBotRPKaTN7RNRbCd8KZFiScaaF3oSC2YkU6ts2iGZJYu6qRjgUwxLepWJEuAeGyCooRjbzVtyW7yH",
  "key8": "3PgVvNhLAEpAH4KbiJ5yWiA8ez2jT6Ssrx3c8gugS4RXpJ1ryHQYrEMUa4cyVTdEAstLHg3pJHJzVvmz7EYeimXo",
  "key9": "3DCQizN3hoPwoBz6GkMicB2yGNWAVB8fL15Acq9fYuYLACebLYqW4RQNoi79oSJ242Xfhc1YAG8pk673MdHagZxw",
  "key10": "5hVBdh5LiU87Mcn2qsYnuTzf1LFSomedNaG6hynAk9B17YHUJkAcvShmL1nd1MRLAcA8Qu52Toha5iLUKNDK4ek",
  "key11": "37To31xQVGHaZH6osivNs6VNRsTM3rDQESa2E47Wp7iafHbf6pQj5tBVGNcMgbzC9i4NZnjk8sNedGmVr2bKB1ph",
  "key12": "1y6RKQ39gvbQPwrLtT6NYgjEDanHPbNdDsan4AZYZNkz2TmDqiPP3bsSysspQHow2vuuCFG1Y2V377YLR3LgEno",
  "key13": "5WgEfmHkaZgFk1svEFiH42htUoCQQxnpkLvgGk1EKD6czZ6NPUQxM4f2BrSkHAXyiazuFNEc7ujKgsZcuwkSvZs1",
  "key14": "3SbTzJRVXkSBURYYMg1BdqkMgmwwuqG3pZjgnj3BS5zrk13b8Q1GKXsexApeuXB67vo4h5632kibhoxjrWHTsNVW",
  "key15": "jVguVUqjjYUbekpK2vVEQ6MSRrXyz1ysPXMLLFDBgqYfWoAA1n6A5WVgJi6gQokNxaqCrpygVcUErMEd8SDCZpU",
  "key16": "4MfHaC8BSwvWKvD1XKyjTkHS2ExcwHnwc53JwU8kkMZnRv2DfJwtr8dgGiJWWUHX4NJwt1ug1PQ6zn2zKx44CpCp",
  "key17": "5BkBtDBMiozA9s79wvQnHfLuQ1WU1G6FxjXrHWMVieTMoh2oEnPz3sk9wnM5jneN69kSpPqTieooGhPFu7deC9XY",
  "key18": "5mYNA6AzC9jjmuSsmbbJHitgyunMwxk6gJDBrHkZemw5i6qK9dvJ3WzNVe4d5d6Tyh1GZ2D43RkmbdU1Gbk5dPWh",
  "key19": "PaDSmKcf4r9Zrgygrv6sGJXaAg6pkYWD6TEWnQ9Zz4UCcvJFcXJJy99MAsHyVYvk1fMACfx4fWChWDtbPZ9qkeT",
  "key20": "2vGqoCdkJ5YZtmG1q4bYN6P1kdvTrncsFydwCgwA6GpinvFYb5rHsEaYT5PSLFHQqR2ist26Qj9jGe8F8Q2WLVBZ",
  "key21": "hL11datf1A6BhQ57cNxwkYW5udUFvAaPtfhuSB7dqhGDEWVSwbBMZBzVsEBmBmfLcszCPRDaHbhLAjjAxASbvmm",
  "key22": "4XFiwXWoBesyWETZfypWfnLvNwaDtmyQ5pc1MgG3iQqV6wxkrnUC6MBJczR8pRyXJ5u9jHd5t5VxNS7Df6VNnynx",
  "key23": "3rh8sbQswyDEvENXbDpdXVcjQWixWEr33NFvw464MEqQHyPM7Hx2ExWbTAvBkk4NswYwvs2bc8nhiYv8M6BytXN",
  "key24": "pVtfefXS6mwrQJdHdNTLdm38dUvPmB6bTTJM3o4sffekgSy8tzy3sMedBjsbxuiao4Jeu6JjPNw4q1ChHs9FwMb",
  "key25": "32wC9XTShQgecPyNiMrctJ353rQEgSSGHAkA5YgS8HPK2sjJwAPt6Qkk94qni6bg7S9y5WGm27kyKRq2asFjD8Gk",
  "key26": "Y2mPWyEEnKFoXaMD8Ev5F4AJq5sfGg8b3ngHpYHLauuXKPxAcRsTKRPxZfjXj6RAg9GH1VfpX8ZQ6b1jwY9xq4d",
  "key27": "4kj6nU2gpXeLR6x8nvdJYBbVzvQixNKbfSN7HgzSAAVrqS8VBdPGoZPM9hQh3fDQBJ4tLktBH48UjbynHd9DYxQY",
  "key28": "2rATNFnyZYE7oGkdP7dm6t9nw94PqPhLNWYUx2WNM1pKWrhbUxM9x4MM1VZGuLzhU1iaiyrpfE5W4PzKMV9sNuqm",
  "key29": "5LZeUucKcvT9VMfYkHRJkHXTsoECDmDh6JscyjpN8fVYbSespDecS5Ht8SHR2xQBsmkkX6X8CVeikEbwEewWmifh",
  "key30": "ZZ9E9NvtbBaLABHw5XaXDugpd1fPrpu3tg4pskdTxMVadBPbAax1ToaYUL77gJZRnBkVHY6w4g6nTNiB1ffxKCu",
  "key31": "2Vfyugkc56auPwj5uKYoFLGfQGR3QGXk7fn996r3doY8ZpSDmpPLx1b6UjjFkfapAVzzJ43kC61ErYQZNg5hogNR",
  "key32": "5UJ4y9bGNTT3W68ADpnvteYG1QWkf44fhREof9yv6ovoGmWc1e6bjf2kodsqHUYtnvuXiEgyqKcfWq3MDk7C3MwH",
  "key33": "5ZExbtgjuprzNFtc3fY8dcQizdGAp767R62zzbLPMuBvDbY8fnBKpGom3wxZfCAK2R5rZDNW1DRMVkJNAFtFjgiK",
  "key34": "47L92jUjs1mNNE5xQKjyKvirCRmSiQywqcUFKJK9VZKN963m9R6Kn9uCfKjhbGjLtvCmCCvZbfoWczf5aCPJr9nB",
  "key35": "4xLRGuU24mzb1Zg1b4mWptvsixLrpFHoSF1E1Z4nzYcDhRFpX8uqeTBeRo3erP19WANZ6RqSAg1GD4Q5GAne467z",
  "key36": "2T8ej4c3CXJ2PPsRXJZ6i9B69gGARrSEgQuyiYB97YGUWjoi4fGBrPwLEn6eXnCocz1sGMdZiYRGEM7zGEws5w4w",
  "key37": "62ZGGmWtMsoBoaRVE6bqG6XwrYgpZSChhdvMoCEzaspkMaZgXf8W4HKSv43gW1wRkJLytG4CZbRxjgfVSyMadG6U",
  "key38": "4CqMrygF4HFvaSpGkTmqg7ByaJoNhpqapqWwQtkmVH6XK3mapLNDaGt8kLVTTMMnXiofHKFzv8cAbp7AAThFUABH",
  "key39": "3VE7wmeEGmNc6YyVMkzQpsVHKp8WBu3S8nKCUt6yTD5NKnVGj2Vv8q2hMNihCvmA1AxjoRz87vsgnKS266oTY9vT",
  "key40": "2XuwAN78HhXEJKwkkvLCFV2RqgpS7YKBiBgNFs4HZnpNSU4YjtvtVHZrdBkVsM8ygqN6KUcmDqkJyfU5y9jGDppg",
  "key41": "61shwp87SbvSLG6k3fUGGwu3dsdaoeRrEaDZ1USamKWExGCGFqQRV2SfbTDYLsRmJtBp6ivvpiGyJH7hihkXUV8R",
  "key42": "3VtjKDnM4E9iMGDfMn5DtM8NhWbavPqhiXkFFyMy8xKojPJRAYyCTD636cSzxoGaDAdq9moEXutLKMPaKhXhQXpv",
  "key43": "3ZzsyzSWf8NJZPpjNTzBZDSuLpumxJxJd2Cxx2FwS67pUbbhzi4TVVqHeyzYJtDU6t5vx1ky5HqFwzynkMxxh165",
  "key44": "3wAqUqWd2dbyvcBh4N61z7XWXzuCK7HBZ4r7NdDZ3ANLv1biR6AdPJ1yf9kL1SKyRnGZnstwRYujGDqEAnDm1hiP",
  "key45": "41siD13Zo5yNFpYjymfRczR1cTJTQVoyyLHxa8rqVnHuztG9PQ6QMHLtmuDrKTLBrrPeVnMkUai5CWp13mqYrSgo",
  "key46": "63ecvatxJBFoqUkLCnx6XFeXrZzgzLjKZsdPRqVDJ9QQjcXA2z9AdiccEqTD4m8ZosWDoWpgTwnsXQmzqqiyQZw9",
  "key47": "5kWo4daiJuYWtpaK3nrCBpQcY68LvS9UQRwf7rei5BeSBVwSTev6UcPrAshpquUmRMhTaVN2TgH12PW16p9Y9UHt",
  "key48": "3AJ2YX816f13MLG4iuH5HNaCLJswRLiTWW39vxwmUbZbqcZMHuSj5UaySkrmR6pAM829Uq7HxxyEvf2njmNfENvD",
  "key49": "9abt5i6fW484ZRDvMZ6SHZXcCvavX7NP6wXnsUQzatU5k2a1rfxM8iHLWTmogtaxqjs4yazgULkwyysV3QFCz7p"
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
