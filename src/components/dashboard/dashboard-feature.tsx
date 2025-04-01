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
    "66oQkr7QRSxQKse2uMDGPKx2eG4KVDLsT7GEwoadTCg6bgqac3oLz6HWXqFMtz3ureUDB9wrt6XQAc59cjdBzn1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nVSufEqsqfLG4P8JS5wSYMcQZSsCMc4CdJFhe9uUcv4K1opasMX1wXEAyosyQ6MjewZWegnJTPn9ANXCDKVRCW5",
  "key1": "3kHnQeUR6YeS5x5sudHHtTTdJnCuoaQJdkKaPGwfogMpk2jCCSXUFnKXW7BHPqxBZoYYcjvsDgJ3QNZy33AHRUue",
  "key2": "3EwJGx2yeC3mum3eTkj9aH8JpYXiv6g18dr71Tq5tKCa3igpU3H8FHHad15L4SvpG9mEsF6K1D2aTJgZXpXkHTss",
  "key3": "5taiz3AFmu4Kwv57iVMkuWHc7YGXzPVkpDr44aDgK23EkrrqdPP9VKZTvPNUHogorvr4o7DLnMkYV4tLP3FtWUzr",
  "key4": "4p1WnLnSL9d9kTH5vPmiv2Q8nt9UTNfEdTD3naZLBXAujyG3TrknHHAi2XdDzLszMWrdjmLgSrKemPcUAfwQUmCm",
  "key5": "Axkj9AqRtHoPFrvsbo2MUnthg6EvZjdMdYhEDQvii7Y3Q5v5MKoQifSDwaR7GYbzunTEop7M7iMF3HWhowm2wx2",
  "key6": "2RQ7VGwttXbQyxw92Lvs7cHdjihXb5iVDWjwv7m3pTkxv4MjuJNrLjzpxVqeuf94wAg17RWfPqvSYr2vmSwei4o7",
  "key7": "4LeG9M5RWk3aeTDmw7U5mLkL9hNaANF3YAEMe8LAVaBY4JCw2coqQYkJCWwTtwFCGmMdrJDoJEVH9pwvs2TJRv26",
  "key8": "5zKPfweEwBZqRmrVV7VbKF7W8szqxHQRsHRpDE4tQsXFZQYgjRTh31TLA1eRLDpC8iYGw8U6sg2A1Rt6PNrMvniH",
  "key9": "3BHzSNkGiYQAvx8en2LMxRWo1LQLQBGbB4kZvrdV8T9iK9q7DBCv2yT871tMyEwBtJBoD5Rdc95E2NdCnj28hkcB",
  "key10": "4fcvMeCZE4DTb9Nd8FiX7XmSE6CQuwZ3UCjyNvcZSvvZ35gZ7H3stuvt5Arc96WaZZVii98XtGFJrNQY3z2HGiNJ",
  "key11": "57VVLmd2PKMfYGLJsQ28yhyr3iFycbyNfTWdGgisPLpubQGUdeGUMLf1XnAr82n9dP1Qyea4wAhhGCMz6H2hGsub",
  "key12": "Qg3eTyrjQhvqqRAfBxHD3sezxr3CrTZpMe7BsM3twLiy5kZ9NhV64KH4BTEqP1dHJBca6iKdpeH89ugH8Dr1Mni",
  "key13": "urPyu2eH7gbuA7xLuzpp5CSRSyRnNu4KrB3oi5VvGbchZopJVC78z3VSYcrcP5cACn1GZEo4HNvv8Pauv1AapVV",
  "key14": "53EM4BeRCxj1Saoet9Tf9kschm93Jv2PD5tscs7Z2kSRu7CiAMHcjM4wWtUKmfGMRJN3o2XeJJZnmQRRiHRHiUXT",
  "key15": "2bgZPSwSfCAKnqNbX1T6b4pvQWYd9V6v5smPoCvbNw5LtgcN6T1xQickPskAyj9AhmVTYpM81cN5sB8BZjYP6k4j",
  "key16": "4XqdVqAWWjuwo8C1b13htUdscmHF2oSGxHerSFEj5RMUdYkbgj9ZPy7wqQDkaP2t1XHkWSdwsJDp9t4hZsaP37uL",
  "key17": "2bj6tEiW1QPji8WnCqn8bzerdqJKpkjzc8PdEdZRpzXY5kyn8MZu24JDfGWHi1ZiPPZjWxt4hCW3ZAXNiNYMreyu",
  "key18": "SeWXLq3onApxyVj79SaYk9rb7BUVp9gi2WtAN1VsJg32i2VDvgtigsU6AgphKpeFn9Yd6P59Q8se5gGV9QzexA2",
  "key19": "2k9Q4AqAQ8KsS72DzT8DwrKsJj9Er7ouUvNWWfc37Jcm8ek3wcyyDH6hAuQ5oo5ggtdMutZwcABamydazKCLvQdU",
  "key20": "eoSUSHRKuRdD9JN24x6vX1YLriLdq5gMy5Z4GxcZgwbyu62JWD2kxBDiW4ZBZhm53XtfBmYzsUvjHD2xP9Fbnr1",
  "key21": "4b2CmAuDBRsLu661QrynJJe4NmyD6NJ8KDTmC5ywXgk6TmGWogjcphFAdqYGrugmqNpArw6KtzpAD82QiToa9SYp",
  "key22": "4cy1nneXgWVVLAP8HsUwSdvsMxsYcFtRzgS48jAfCtePfB4ZvFhtsJjr7k2o4Cyrx8jPqUZ5vgiveDzNs5ZMrKn1",
  "key23": "TK3Bwxin7JhQ6jjFmYsEijMuLN9B7i1EFuPk43ritMBkCM9YwGxuzLpjz5sPgkY9ta3LykS4otxpPMfHqLZqKCe",
  "key24": "3Bd1LpjtW7L4pGqNc9TdCvTE7otkM2pGBu7LUTza7VbLAV2bVum2X86FuFd44K6WYqhEYJ8rGDzWxheA8Vn1EFJ4",
  "key25": "4DzBtt3K7TLBwxqgBnTSLzhC5ds9AmQufNDqNM2tpovwYN4FBJm2i2Fij9vYvCiFe3RBmJmgEBDE22codretP26U",
  "key26": "4Lhxn7gx4YNmXJtMMaUKMsawKzd9a2M41tKRFVsj5ZjfRz9CJUq28r5ULV16y7XeYktuT2FUWJeW9G5Eiyn5jPxE",
  "key27": "2jYaUFppVVH3UM7ab98K3dmpcP9iUjisjvBhy3niJLzoVSHb8URgkHBLHEAATTqCGJ9vetoukJ6apqX4Gzwdxpeq",
  "key28": "2gLpYAbrz5YjCFmW9SaAqwLHs7SLQcMjy31dU7kumiYy61AQQfdPb2VqGDhUPSZzHov8bvtFDFtwb2Gik5NCmuE5",
  "key29": "2GsQJa6aTHncr2R2UrY8S4K9pUYfAbKohJy7Rz5Z1H7DdM6FLm5vrnCPndNHvtVRyLJmKEno8Q8fV5jgWqeq7BBe",
  "key30": "5eQvBUi94gE7CDpeTt2RmWxk163yQjdxVHo9RkCPCKSdUcN1x8BH34Fk1D82Y2xZkEt9dxTXfZPGkG91wS5HJV2C",
  "key31": "5SKg9pEhxtBjyXzTprwj2PdCMWu9GWtrWBfhk9JfJQcAG7WVBQK1vBzwH5AouVY8tMQhu3X8CKQ7nnsFbLd5UPsE",
  "key32": "3TD1cnuNHqHxSAsXCumi3aWBuzMQ49nuPKPzEoLjZZvKKCo9rhUAmc1ZTqv989CgwsGL4xz1t2ru28e1vxGChq3Q",
  "key33": "4hsMT9yW2MkDMyEqAwvwakC9TdRXpiUYPvP5vrgPN8oh8VR3NKQtXpWWJg3i3m7C6P9qvZDzB7Tg2VJqWqvUSR7V",
  "key34": "4FNjWFqusVjYcvp76A5LdxWTrXDSDWVRqyvtNnu32Ny3DoKFniTicQc9VgLR2rsEKTpk7nysNp5fKnJCceq5b6ct",
  "key35": "3stvP12WPenVAG7L3o5NoJt3crHi5xoWANwdh2k6HQDGxLznyFeN7ssSKyJsb8NiCAQJZ1KR7zJF4WuJsVVmWDDL",
  "key36": "5ShHTv4ui5yidALHduP7oGQffRj6QA67xmrDc3BSv3tEVmjZqecSS3nt7Kiii7THY1dVvEVgVzUG6qGVcgbRkKk2",
  "key37": "5KCs7hYBQN2XGTxQvUxGYcfRgrykNbEbTtyPeGmPErz4HRxynrGiN3G7ZxPdVCWuPBfmDjqjk59DTPinWWqCee7S",
  "key38": "5CGk2qb4HRUhV6m3iczfZgNsitfHVbDniP61NXTUCRGFqrdRwsGMh6XfKCeX21eT71yVWryXDEdPvQMn85KtHJ5e",
  "key39": "5RUgZN1Z51mXLpbNGk64F4anMWHocCCjgN8ZSMtoAx8uJSHKGCQ3DMNzmDrXvLNYeSynf2JFPkgoah7KoXCyR6GH",
  "key40": "3E3HZxCfXKNJfwWDcFCLbVG9gR7D1rA1mVNuvW6PRWNoK5L85ct4LnjwZQJxAzwxjvPEtNt7HcrdW267ZwjeH89d",
  "key41": "WSgMTViaUesp6VXFrbkdVcr4PgpKhuAJhW9mgS81GXbbxxoUker65PzzRD6TU84Ar5dqJm8YL7biemFP7i58WGL",
  "key42": "424ugwRiBApnGto6aZhVAwcKDjChpdutkXCqideoRLp1Fbo3aDpyzxNAFKLDoKwzfnKEut3RUimvGnfw7dQKLS9u",
  "key43": "3PBcP6QJgP8K69xjtyoAFRTTy1e2JVWC4kNh8aQr8z1kUZ5TjwY1sEv3NFXAnEqsYwwHHxyUtX7AQwrEjwELaRHk",
  "key44": "3LWsYfeDrpyGPHx3MMsEwKcQdTN1Zno9vsLQEibwpRvfju793yPgDQZvTiSxc3nt6MRFJEjaVPARASmp6cU3aCV6",
  "key45": "4NSk7AopZVgXnibZandLAFviBBJF1tbeR7H7PkEDcAUEpVfYZRVf7iJ97ytjUEXfEZBj91Afet1bQjK8REqwBdFy",
  "key46": "3bUyAzekKfV18oppoZyHi4edJpRRfUKnqicsXtV7WmtYFyT3VgfQnJQzpsPmZw1dV57G1SxNLUppwpy4pcnx2Zt3"
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
