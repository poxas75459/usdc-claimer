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
    "3rWNHHwDGJWqEe2aWB3NJFKH8hjUY1QECMYpUi52qFctEvz9kqgQqeUW2kMf99EPRFMQ2y2FeXcZhRTdmAktURiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tpZnQix2zdaeU4tifRBFvufRdBBJZYMiAUfRtabytHoHABvnJNbVrcGBFNeYALvKagcEX4zR5HBm5L6N3nfEPbo",
  "key1": "2DqJW5MUhXWJHtU7FqJ9GiGKqq4XUUceQcuU55HbVGGJjdqSJFdkr7jvFdSfmNz59TBmr3AYb1KkXVVbEZPE9V59",
  "key2": "tiS3wwNE7j3qenQN4eVtKrKoHCQth9W7QfbJnC3zhUoXg55zqDQPNgSUsnbr7UtNHEwGWAtiJPFtvSV1DoxSoYQ",
  "key3": "9uFo8QXRnrve8SXT6MiUvdXFzy7FrH5ANXDuz1r7P6TjsHp3UZXYwdXojxMXwWuDLaQaSz88WnFJrvhkHZ8geLb",
  "key4": "4NqSvCrrb4AhiVphqEvZnistDx9mAS8ghGaWsfbqLa1UbZAGzoFyCPE7JGFBgBcH34wL8ys6a2gCLPBn1LSAU47n",
  "key5": "igxQXLkJpBC15z1jfxGVecKZ44Vo7JwTUZzz94g9wvxiyWaQe56bvhFrrFoctjsnSyd219eckZEUcB4RBnXb2G6",
  "key6": "4QFqUhaLGNyJW4KmV91ctVmZXBDXCs9bBZ8kwq9SdhuzN4xwG2odH5C6RjjVdkJsgpbfXUciqoyu65WJF3udM7M8",
  "key7": "2FtL5x6ub3jsPHKdXNuqU82wHijgcDPoZcJgyqmhodmodgS2f1V8HkbLiHhujQdH22fmNMyk2VGP7RANm374h4Mw",
  "key8": "BMTQM6Sh2ok48rH5me1oFMid7emH95TC73VtAN6jeAYSgRb1iiNjzmYJAZhyTE8P7TWnmzvJKykQydb6SF3fKBt",
  "key9": "4BrX9BGs5sne3mXDd45sYc1ZnK8XRKqvqRPaWggE8gmHyGcqKeKCDGZWTJNJHTR6xw1fAkP2LCZSLuqihiJWUUgJ",
  "key10": "UdGtg7qFxuh8xpSaQhjxU6yF84VLxNo8CJzhfxVssQG6KoKavD1PwegrssxUppbcSa1wbia3SpUwouYYUr17KT9",
  "key11": "36gavy9Gp1HXvC45aPzDjAHfXYP3W7rK2nTVgjrMo7fjatmzViGGpsWHFWNuqEYxZQ7SCcpnUd6R62J7tZhbq67Q",
  "key12": "6uG6gBzNH2TdhBvF1fpYQd9nVwRL8PCG9CeSBMNhPTQW6XW5i7FCWXzaqw97QjvC6hHDonsQ4WCEqC4NEsDWEiN",
  "key13": "4t2bCxgruBBWhG9xnLfeVCcZQXC7TGoz2trAyKY7bV2Z3LJwhRAsea86SLGuYCAGosfpRsPhR5tYwJttyXpUPYCH",
  "key14": "5RmyvgB2fdMqnDHVoxe8gmmsCzjJHoZ5D5XKYGjAQnDyhsXbkEwjhhWed3fUV7sjHamtqMMFptZ6uPgoRXYNAr3y",
  "key15": "5LWjMH9XRfmWmMD14x2ySvkPjjUt6H8UjRex2MXFGmdsPpjN631uUxCWdmh7ZJQ56udSm3zC36dSXepiNF9u5EfQ",
  "key16": "5uMYWm83fvyYDoVTW5oTLFbmS2ntk5rShWogz5eDgk7jzJTwaCwQEpaY9mqVNzs4ZBGGdBfTYHtxfEcjzrujgPuV",
  "key17": "66CNXm1wZrCCF5WQysQVzBiisM2y9e96Cr9vbrqz9GBdcTRumEcjCHDrQHZy9wPRuVD4zZbTHYBw92mbN8PPQp25",
  "key18": "2gndSZtkuAJ6dDLUbVdFdw177JcjKUPmUGb2nPDMtKhMLGrG6s9VEcH1Kpt6tHqRNJmdumej7CYq3mLRhexEehcb",
  "key19": "5tUjjR2Q6zDBMX2hJcarv4HSX5wWtJysyCFt4mrohuBe1ZVSNJEVWrXGo9qCpG6udtjWjoGZJDaDdWCPb1Wemhc",
  "key20": "2hQ2ewBidQvHPtbVMaHUPvgcA6bVUiSiWdhVs4sxBtDHJKdSeqFYvpvBj1bFcZ8hkz7tSZBhW2rQ95uDuTPKhvDu",
  "key21": "3AastEiLv7wQGi1ACYaBRjroxFuf7mJ4exAyxJWb3CrGPF4S24CERm3c13JP5CPwh9szxqQ8P7uuQ7AqBruSftNX",
  "key22": "4gG1378RpxadqdizZSmKm5e8DUuFNhhhiGM6iyqrNJ7bDEN3oWKdzAAPNWf8tg7KVf9yd6tZpMyRR6G3m6VG2RGt",
  "key23": "5eHHR9y4gijKqEUTkubZe9YXqXQjHVpymfG8GsooMzxxbk1WGyuFvnKfLH5fQCaL7FbkWJqC1Lt5ZG2UpdTuC3r1",
  "key24": "3MD9keUQPv1zfrkB3K6MMXmzusL6nfbWeFmbyh71MGS9MCaU3Fjv6Tifq8XmBu9kPmMojxLSAMUfYM98SfwVJjg9",
  "key25": "3WPYKH9kzN4Bovf1pgtLTi9fbHo93LsLQWQ7HVDufgJN1Q6cxgYbgSmE6zqdmKt3TunZ7uC53NzzEKJMVuZA1kAe",
  "key26": "5wJpZuUK5NqWWcybMggLcuiWBfZNjdR5iDNe9UEJqiKXRnPAnMEq3xP46zdQZ3XPcckSJQwn4tLoAC62YRHsqsg7",
  "key27": "Xf6qBBNeCZtPZ15fALFbXSABkWTfcRDxpLar6YibgULDZ5Z9BAnz8MrpSe9zs9s1EUMGSZijHfGG5pDrdg8Sk6n",
  "key28": "BLSKs9D4ZkUeBHKr618JVTL4BA5iRFh35pXpYWb81LAQpQTchYJ7VjMMVebH9zgcahSN13CWy5PYhRmf6DmedEX",
  "key29": "5T2gsFAj5p1wgqowEecF1A88aRo8XJnbmfMLCJyg6UQ4zfnk13y8XhYbznVCuHvNSw1okJAh9dyZ6bHvDvZbvNBJ",
  "key30": "5SDV62vNVJ1FJc2khfnNeansEAMyD4okjbtFY9dUt7UMEXzLaMiHYCg6tkCezg4c2JTcgb2gnVoVC2Dw3LY7RAd7",
  "key31": "4dfAxko74idHSWGBoWQzuyPLxvP1Mu4TwkETFa8mSNXMSheFqt5X3atsw6UHKUCL2LdAETfPx44eoicAzK2JjPJN",
  "key32": "3Gtz8ipCjRQunXdC95X3FB7GD2yz72pUmQAi9Ndr3cWui9xfVGgE61bK9QLHKRJHRGAsMJK4xS7UWGAwqoYGNjCq",
  "key33": "3jimoy4iC9ccTXH5hkjAbAtJ6a2JGGFHqF8YxuQYqq31qByGDbbekRi3pdBrQaRyoSih8JvnQ2dFKQkNz663oSiu",
  "key34": "MviCk1zR9Nhw9F21XSAdY5USn8qgy78FPvNV2ZBDzNXM9mLipP2NaevBJerT7MdhTCDJX3PDu9Fzk1HVPMXV9pA",
  "key35": "66yUsXPA52aSkNKsARNFUdPaGM3CPBgrs7cjNdCWUCeAPzSutvvtnLZAKwVSp7naupLDpNjGaj4Zt7tJDXewGufx",
  "key36": "2inzPgcgCkZJZkqg9LfgSWqNZWxa7uoJfmRQiqoiQHxwzwupYSCJdK6BG99fi8xC8ALG5EvqhfPSNNAti21kamZH",
  "key37": "2DDA4YWBVtm39CBPQ7DYFLmm3J5w5SHhJz2nfQZzGvyxcQHp4si4ZsZwrpEJaHwRs7vp2u9ozykAe7Zvb4NEkc8v",
  "key38": "VqPzAsD1Jp1ioKmKKmKF2R4NqtQoBB7EVtCXXuhz5VA6t677DFH1sFUUTQ7HDdkHEpznfRTvSyQsbV9qTaCV6at",
  "key39": "6CEMfRQeitdeGwXSSNjqGZFTf8jVYzenFXbcyVikK6F2ggDWnqDVSYsquM7RSTzFKS1jGu5fpVE6QywPf6J4RRt",
  "key40": "2vS36p923h5Ai9XdGjdnxVzpGCViSVpN7Mo1vpXUa4NKGx66NqAhrZdApXGYBHoya8UZk3sfGqTL7kLuNJFnFEsG",
  "key41": "4KKa4j8ARDQzcfnYBA1Qx2NcW5H2DMDqm8pr6CWkSbjPmi5HNypjZQujbCf1guxGYg1i1CRsiewzFeAM6bdWAGfb",
  "key42": "234Zuh8iP3tzyXHXp3jwCEuP7PXNeUyekTXQqiYahbt1aXmDSybjFYCz11jbReo9PPkzJUCrW35wL176nqfodCEQ",
  "key43": "4VgeDTW6Ws5pYKMKYw2ESh8DSSRerECtA4DQG9Zjos3oPLAn6teWvUHzNYWnedKbsRXAUiZUuCxLMHZ1eFoxKG64",
  "key44": "2F8WadqDei2F5TeKYPXn4jdy5x68HMQT28eNYmTinJWefsMafv5nQm9WvTkUYMitBsKEmg2CiDdcStwrZae6KSQH",
  "key45": "49vCTFVufVXXZS19DcKqoQehZtaQ7DbWZodZF6FYLDxVMurdiJipjvBUqZzYTrXFcb9xiBeLG3cUkXQnDBym4HYB"
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
