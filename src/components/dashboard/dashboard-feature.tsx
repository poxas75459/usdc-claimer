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
    "4HmuCdVcdq5Xe6GfrcVPU1ut3XbRFXt9ctUzYv2ieapzQiUnFioemitSyejMJWKLRuCJK5eG8WvPcJ77T6MXc8oh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27G1bZnaPg2356Va8RLKnVQeLveCjMYTpmdC2pbKGBUQ7KyvdQaZ4HqUL3N5ZfZnRMt7FGzuxFvwzBsAv71RFuGf",
  "key1": "3ax8aBkZZsgzSXFBWTD9Wq2JBHbQ4qoGGnx8hEsrP9QbcjjS9gEm5b2TWBVUUxZ2Z5dPkD2SN4NWpnwWjH2v1H3z",
  "key2": "5fVfZnc7d3gJboPPLpJXMJgP9rarkb5WffqMWcCpk1YxstfD7q69T6q9UXLYH5QLRp452it3V8Q285ff6cMWd4QT",
  "key3": "2GwT6J8WcZvPvEXTAHX1jRk2oY1BZxA2vHq64RzDFBLWAawRgSrri3H6YdsArNYn4aKwKYuV8bXJPGrM8dVei2Qa",
  "key4": "3dm5TA6y1JAWDj2qxhBupxf1XrQEZzLgqC4Ty8Rf4V4H4qV6B3KBojB1sSDJWnggewUK2wup4NBVTgGUoUpQ3KNK",
  "key5": "mo3SEEkva6dey5a5DAdwoMjreig8DrJ7PZmxwqvRvcBFByBFyi12gW2TGvkab5i3MkkPEBybhkiXf6RAiqnizZY",
  "key6": "4xzcWNvPAQGUTUXgDPxdxvyV85U36tF1UZ6YajpXS59DnJQ5zpJ8h9TSyCks3bFT71wtHbpwqj7XuAqXCvgN1Ra4",
  "key7": "39PerRtccWxBF6mxq8imwReFZiG2qfuAQy4NDTepSRRwdG3q4znc2vyr6ytM5avZiMmPGRBCDZW7BuEmphisJCnU",
  "key8": "2xG7QjKWrNPvj4f6S5Fi3n9kYA28rPCwBi7DTzEGCY5WHiLHQ34MMmPJiH45eQZZJG22M725cM7jnrYtGbDgEyPa",
  "key9": "2WEfUPox8B1w6WAhfotiH4zabC6nc1js8k13aouAMoRjUdT5ooLSbDTwkqRHdjuXCTVsfyjfQEJd5zs5GCmwBJmV",
  "key10": "5yi6ookvksAVPmBSxDV3Cr2QM26FHgmb6uGAVtq197jDi8G6hCSW26PZFhzCXQGwvgxbNp13mu4aF94vitof3S9p",
  "key11": "3yVKR9Muk2c3Q2xnFXP2RxeQtbc6akY2GJr7CPQ63T6Gif4CjD7eEUV2g9GBL48VW9HXw4LMkJHQ9jkFvvBnb8Cx",
  "key12": "YNYrmnH9gAecrJuLUjaKn3N64rKYUZbNe3RegeNBjk2S23G27D8kbGizCUFg5xb6vgm1XoBmarz2XpMHsz2A2XD",
  "key13": "41dbtiAjwAexWfCgWvTVAWxq49B5gvVV6ugg7L3DFFC3zD1PwbvrFdXRVYYi1shHooiChVMvTbvmx4xh7eGyFaHV",
  "key14": "63gcEik93KaaHbqi75QRjBbSxmkUr9dDA68EgWk6wQHweK7isgiUMuHFwoDAS7wyishoHoQKQUeAGrc9g7gNNpYe",
  "key15": "V5XS7R7etVrAjExGBUoFBa52eGrs42qHtDMu92JVyKwKm6Sr2Wae1mm7VtvjKuZogToD6ubeFVRoopiHyeyURLp",
  "key16": "65tmGH9dz6LUW7uAmqRK2SW8aFWpVZVSFDemrPmaEP5ifaS6q8xhkcMBEaNH2jqbftdv9Ygn6atBZsTPfz6npdFJ",
  "key17": "59aNfynSFEBFuAj8MMcbhC7tHr3BqX9qrdVByVTBr7zeoeMbDWqUtvKR88m7HVocg137TZPJcwRf3PjbuCdaKQxJ",
  "key18": "2Rv5RmUoKGQK5Zx19kkUo8J4BTyNPK9qAnhZ7rsE9Xw7dnZSvbtrvtiKFhjcBrtXRFsbcanwop9gbu9rWtkM744d",
  "key19": "583RLPVuGwfCXTd11C1Dgdkd4JVMFVtGn1JPMZ9q3qZPkdWQUZ4sySjwfoivfYXGEom4jAq5p7mc88YvUp9DYLrS",
  "key20": "5X7Z22kriNoYW2RGAhfkCyq2NwYmjRtunNhvmVqWX6RHfLZJJB76MwdB2MSxBM768hgCQ5bXuqbUqCbxstaSiuHK",
  "key21": "2vuUcGNpbsLTMPKAwYkuyaZzVu5pFLq27r7ZJ3sHCYLgAu94X3CYq4jxKjRJ8G9Hzuhra8cCtejBv5XAMfmxkew2",
  "key22": "125YchMT2oMZ7Tr3FBfFWfBh8t3rGdfwxsdgUawRKq3v9UwnJ9DnLnTLchQ8unpqf1ix5PyTwDZjLg8SPN9BVca6",
  "key23": "3xKS1DpZQwqXD19jMfbakYZce72t3g8ofVkyrPJKMg7KCaaj7F2n4U9ouqGeg89FtKYHirbCYnLPxfsMK2p4khEB",
  "key24": "3VjVUwsWD7SERrNbXy3cSxeQKw2PbwE9PMXzoMwuDApkBtWMbxtxd8ADm41gF66bkf7rd2kgp5aGFBUxUzCupyA1",
  "key25": "5i6f5uJjWXKQXqebtGGwUt7WMvVu7UjLNsjS2c74seGEVxXtbH4FfQ3GZdfJSpstkjYmTSrjzee9CWKbUarzyzxx",
  "key26": "2RZQZ7TNr87y67iwvyhpB9eSuhP68sAa2yWoHL5stf8wRNraAxBsXuFU4dYjzHR5JRmtWUUzhJX2sGBDxL9Tpkg8",
  "key27": "3eSvHAmw7Qy5LynsAmwGCtd53PkqQZ3QMp2yyGJf8sc3n2x9MNaw45e6zoc7qYvr3noC4FeDcm4cVdv7wNdQGrn",
  "key28": "3Z8RkbLM8oM9mZYvqczT3HwQjXKdSM5UccZcPZEs3tME3ecriBzx7DQZuZfVtfW29TmiAWC1g3n5k7rYSJg66pXT",
  "key29": "Bb8ARuV4AjRC7SxLQkCyrQYRSksuCTNrVijn9GcW18HjijoRQkYCb7H3sbdZfbwG1PLTqHk5RZmYgct8cJBYtDg",
  "key30": "2iCKNEa6fXTbotQqJ29KJNX3Cn1pKsUDvkfm4yG25itVxEX22V3E3fEMgRMu94dGbKMV9Yy6rF8umuQ1o78aLLBT",
  "key31": "N2dP2AFLEgUkt94hze2jBJ4HzjFGEqEwMKCEtcMYm6qLvMFBbwpKvA6QmtGJza3sCBvDSf9ZbXKJEmqWUUYVVHD",
  "key32": "5Ei7FmXbj2EiSyT3maxemnP3XzMnaYrkkf7JWimBAVwmkf5WdByqz4f1E98WTbQ9D5WCvjMtkaYVP6UUBSJDf5dZ",
  "key33": "3TaPyCNSJVq27zhuygYtkKhqGYqEXGKxz4k2ScTVq1ie2cDBb738JksWJxawuttuuW6w9bziEWheppzRNmn7C5cg",
  "key34": "3stsmo8Y3cgzFvMrFMiPucGUt2TZkX5hXN34GrguSXqqMDHcBBYixrHnQVWgmecVUxuRrwwnFjjzhKPf8Qs5gnAa",
  "key35": "22tES8eJ1666dPH5ZqPC9rzsepykx9qNfnrSW9pcsc7N6uxZzNoeZhhQ4eWWY2CzuqXZvhqyfr7LE7U6NLtsWikc",
  "key36": "5SLZyCKa8hwDrw9GKvrQkpt8tbs92sochm7YuVoEmXURQerTWX5eRf5fdp6RByexC9ubEyQwZSHWBWaTqhby4v7b",
  "key37": "yBJi5gptyqZ6QssVszBe3Wi6ixqxzs5ZEfCGMe4iUwo2bvLTDt8dQoh6S8BgQmvvQJK1NodTziT1cPAbpKuS9VS",
  "key38": "kgKshxwg6TnSyj9PhLDd2sMopaZsU8q6NEYNythEfmUwWK3Cuj4xzwv4JL4QTGpn3AzNNPZsKUTrMfJmBK4gZgh"
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
