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
    "B5xy4FJdGMTyY6Zob83FfhnWsjeg9s8NxCfstFJa3hoPAkZ2Mz1xbwwnTWyy5d9DMTSra3ejLFkssfCmKjL5XGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pxpv11a6yofiQBWryVuR1KWYViK7w2hXh4qgM6DmoKEFCh3oRUN2awAtyrE3TRaAnBNwaHGWZBWWGVPHPTjnSeZ",
  "key1": "2iT1MPE4xLfVLc1gc3WVrFkS5uvU6S9pFXX2UYj97tGrJyPWAsXdS2oJfABoazGDtgu2ypYQQ2C7J4LHE5nrvkje",
  "key2": "XtS6g72VcyiCnQwbArLrkVA37fxL4FCzPsYFi9PTnSUXVWtjTZCXqrwTKKWLUSJc6K6AUhDEPo54ZqWWDcEjhMx",
  "key3": "5Y7gqevfhBDBKgAiy8oaJ549x7ojgNoMZpU8DUiqgfu4YscmMgHALQDK59SBV5rf5eVZYYmvWDpm1paVkyCrYVZj",
  "key4": "4Yr9piC8fXquos3zThBsVJKA3tWzrLGoyfo1FimsyNnX7ETtZPH1fnneenebxePffqYps23L3hiLd73cK2e56jNX",
  "key5": "4h9dbX2rq2oZSDAzAs1go1dJiQ1u1b94ntWDSxPpDULcRTeNuL3i5MaonPPaypwf75ZDZAsENDcVjsmJpzs2A5bD",
  "key6": "3KxmrerTR6iyqdC625Xw85ui8Ch5BgSdSL4ZYbayKSUMm7sBav7kwG3MCUenntvdcUbSRdf7gxgTa4DQ6UCvuJmr",
  "key7": "5rEbsbnpdv54CqCuYvqyZ2onthGmmdJ35K8tkQ7B4xzSBu5NpsuxPzgiZNLwk5dQpm3Ndbuvp31hQcptM7UDsnTf",
  "key8": "2BMWbP9Z7dVeEzTWpdSKJGdr2uNqdC6uDCGC5frtwRk3Y78c6V4h6srsRgBdP6hGzZbsERounCYDHmTQw8Gt2mZU",
  "key9": "5pyLJ58Em3JbMtP2tFM2JsEv5mJGkg1cLHSBshQ7Mq7hACLtc6uffFKDdrcCuq9veQahNsKHSh1itf19BrQvxWMr",
  "key10": "3DHTLxwm4NPM9dCTAcgUKRwLfLd6j2iK7qq1vfBcnga33bPYWxhcsjx2kDX9KN6QHqRMY1wBQQoLvU6xKiG9B5Rn",
  "key11": "cLKZV7ro7MjejjFXAYTquBPWkZFZSDQr18rBexhaaJW5fA4t5qm83wEZFmYq677FrXDqJ1DQCKfctfG4oQm7st6",
  "key12": "TEh6PJgqX8qvNzAT58dueQqB68iZX5bCJLJqasmNxpR9wp5zjxpZAsGvVvaqLJ2TmrgPbCrkWuRiR5ECn5SHXRG",
  "key13": "4T1mBCursTCFUAc4M4bSirYr5qd1mmgbXGrjzpmsWGo4wgAS1pfs6T7Jto9WUTroXGnyjwZzLB13Wx41FN2hV7A9",
  "key14": "53nc6sW1yx2qh5yJHTSte265qGF4TLqimyUYaKAtMS7TdrVFa6kZ71cp2aHac6JGzPzxEmw1qngb1Vr21YmK1iyR",
  "key15": "txUNAqYSL9SGstHYqyEvN9c82wRJxrpFF6arRbsP2uudw2ZNCRi3qEx6MJWtPrJj2QzkTHFdG9YnAbTa64SUAC5",
  "key16": "47RFys82jS3cioiZSH9RgrBZMWXormca1sEeTnwJEhk2J8kKN6drJvcJisA2scKFt39jHdWuiCD4dmWifwk3e6xc",
  "key17": "5Brji8Lmr3nN97yT9M8x3GXN189fGFB4GTNKnVwbr4QdnWwUghpBVLuLFoXFW5vUcZyTWXzfAxyFRsHKAECmjwFQ",
  "key18": "a39WN4369PNt8cG7CrcRSCk9Lsgiiks313pvixj7Z9mtQYYGhgxSACWkquLkBe2U4DKCfYK7Ki2V5dw2rsqHZxk",
  "key19": "3b28FZWpRQYZCX6Fec8aF6WDdxtR3zSSke1FYe8x19MR1fWVSdtacwTz1KczH8SDFtky5JHbz7sJ8hzsAPCMPTzK",
  "key20": "54MfKdt3M8raE6JVHtg6DbnCRncpyXZ4rLakmW1E9qVWi91T2TevbTvoCYFBr5CHMffYqhZCRMbvrk2Sm23UzQff",
  "key21": "54jeQpngYMsb7d6jkDqbDesGhuWjt77r99T51QRfFp2mFQVaLGdhchaCqqcRurCoWzJS3pjTCu7SAdHPFuLRKQFB",
  "key22": "5cbKsZkrFEXvqC3SzZK5z1XJbgrmCHH8JUwUpS3BG7qmKcoPJUdFhaYo4A9QD7PKWtr5q3eC64k75p2YHy5VygGg",
  "key23": "4zHET2b6i6ryHGS1NwRvyXBYBzCi9ssP1S9TC275pPACYAcsaWE6tYkaU7c15BMWu46DpNog75fnjmum63UxpiGC",
  "key24": "6n9w49XkXUyepkDpSQGq5sLeepQdEieBstuWqQ9oG7BwzDFJ8rvuGUxedssg3EPpsbiR2Emw1vZUAGHDvJCXta2",
  "key25": "FRqYfvVgnZRs2BCFJrnEnRNmpJjN5XLTUmTpLsWKbTCuApaLwuHE1TghsdPH4P3K56LtyhGYFXotJ3nyTnf1CJ5",
  "key26": "4sZaxUFgmUvtfnrN432AT2DWsjQFzySSaJYG1jkjUZy379AnsmvyhddrRNT2s3cpxeydxdoRY5CJyWo7D4vL47RH",
  "key27": "24oNbPSZ5LYrmbzxTzg9u6dhe5G3RJoxit5kJs8Fcriokt9LdMyGA9KyT17C1zxECfq6CAXdko7C8gHrnicPaxsp",
  "key28": "2GMMaHzZzqmfdWTBGypaSpTjFuB8Py9SyvUsaspWn8pgtfTSTn2YXUhPvmezEXyAjHAxFCrxyAbfAQewmuC3uJBN",
  "key29": "oMxfJXyTAWzJaaiGHHJ4t69KA7zd75TVbYLbc63tDZ3LQTyJCAdUoMKpmkme1K4LeNrkCmRJ9JChpdH7uvyiqcC",
  "key30": "oPRF8QvhEDGg6iSNRoqDvhRp4jkiWZeDYExjveaYQn9zrrih5jCsQm1hvBKBzLLfArMQwTeZh1Rhg5vSRs4NtnD",
  "key31": "2C9k2SCKikjoXFykPhM55qXbeUYBQFJLRw9FMhWXEA4CevBBy17jgMw1p3UidukVChWRaYBYYABBa7PsHydP8qFW",
  "key32": "59on4NpPJEPGLGLKpYAepTyhfTMkPsWvL7SgtBjWt3pY3YjFFjjKL7miLHP6iKyUmc3BfLkC554jvWqXDsFru58m",
  "key33": "5kAu3XnCLtg1JMwjeToHvuX6omSnMzyWVNGuFzRU4TsNkZHmaS3rF9fCPLpz5D7oGJAK9bBkkT8nmBox572dUNGr",
  "key34": "4CKxfxzYUeg4KjgW7NUhsNfzFkEwbLG7ffPz3ZRFHU4ZRRD1bR2sgtqhsqQneZo5jY4Fd1uBoktVXmUva89ncxu1",
  "key35": "4qwCNbCkBwwGyXt2pE6WMYFkZNFokLWyMVVtPm2UhQ188qhN84ev8cPkU7r7o4W7VZQECu2pBRicEQkeN9GunHsb",
  "key36": "C2N67CVsNG9ZeSy8yLDzGRz6NEndUwotmjtqotz4MGADRmyoeeA8ah6NiBQaABbtrgrWyh8kX7eP7ZU5s3bJdGC",
  "key37": "W86nMCGkpcQ1Pg8EFKuzi8WHwQ4BiEouTRG75aTPZGePa1GHErWfHxivkV3Y4Z4JnjJ2ivGLGmXy4K3tKPr7V1X",
  "key38": "4dzx227vznyPnbeLUmQYX5S6NAFL8Y3Npgz3cYRXZGA6VoKDsNx4if5mpfVCKH5S2ZbVJjFYyFDZZY27WJK68D4Y",
  "key39": "53KptQv1qyUZ8bbBtv5b25J2QmbP3rKDEFCoVsi3jaYfbgAGvvTa9gjA3A1tCXZ6PK6xdxXa1MdzdKyPVTV55pEN",
  "key40": "5KjsZn3f1wG8Vc5Hv9gx3TxWxxb6eJkNsTzxv1RfAh3EVCbMDHwZPoKdp7iCysL8BSdXteeqq3hM2j9iWamHSvJD",
  "key41": "24Gn282XPZJN5tCiEjzdUyxcWaowsj6SrzDGfQzGAcwbVyeX3RciErvT1V6dsao8jhjfXHhdgjfxJWDs9mziBmhe",
  "key42": "4C165Q9sZfNxTGtVEQTxPjBaQwarhzHXvpQA5fagR4njk5V9GrophuLasw6b199WFudm6U3QPjLKg5oFGWWUULHf"
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
