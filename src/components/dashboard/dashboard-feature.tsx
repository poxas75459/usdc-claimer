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
    "39Kx1i3VBsUCKQYs7dNtLAxuikfHevHBRD69hG9oqxpLgUjYrngKrTrGc7Ad9oDjnSGL463L3F4s8d5S1BWArweQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KDFBrBzPi373UxKn26iXUwRXeqLP4ratgMtWVzf8yX49d7g8mHhvFDQJ6JLZSDzBw4cDbmRrb7jLV4My2FfJzPN",
  "key1": "21RbihLQLNwTJBX291dtXMstAhS6fW8C42V6TKWKEDoMwkpnvbomPLE3Vj3VBoDqjQgMFNvwK7o94Eno2PZZ8UKb",
  "key2": "3ekuSaQpTxTMGgaKYT4jcjucy6hhGmk4JRzPyBUBM5zoksmaGzbY9YvKgK85PVwerHobcadAevPXBa65SE1yKxgB",
  "key3": "2Eo7QDaVjKXPvsfi5x2CDckdqYH6tg68yYnhEW4CD68RC32FZAZbXJGUWYhZHU7bEEB4ZxojsWa1quMUg5YfxFSp",
  "key4": "51U6YJJimQjRB4StU7FYVwoZ2iV8t6jmc9Uy77UyZHPeM3qkjnoW2iFpXVJBpQYPT2uyuiRzAPuLW94o5L7HtFZw",
  "key5": "3U4HU8cFH9uFgrLiJML9sRuJoekrR5WUaWzjLfTbz7qRd8ujzDCR4G9vBiTe51eBGeQCkxJcxRUVScph57KW86Po",
  "key6": "tuzux93Vp6Tzu9vdqKdqX5sKcyS3TfTtXpBqAMHNtm4RML1kep4vwaqDN5b3zrM8zrrbqZTp2bwFzE9sZdmQeZg",
  "key7": "5cUpqTij1Hxjqq9QaJ6TG7tUjyiYJzsG5Zz7gfwDMEG4EaN16jhfJqwG2EkMswuo2L3GXmSgoimdmu63XNmbuYjM",
  "key8": "64F4dbBJSxLWLwVyCFZJ6WevLGZL69TmXWconjWNfHrvT8L8bu7oVcQECaDyj9uiDGWQhpHM3UVBsBm2gd7f8dWe",
  "key9": "PD644XYjYz99YiKUir7yFFU96BPxpHqKCfS5CKUy2yu49j6UNLVqSMuFiDxASDcEt1eMw5gziGiUpCJ1MNUbQfn",
  "key10": "4ptxjMv4EYatPzvE6sQmAjqRS2VovmXCkv3wuEsL5BGvw6qM9vNnB68NuA8DMsvArsfku836jcB4Xik7QzbMe4mg",
  "key11": "2AhHwTcAaQD5NqEm1KaS9rgLfnRfizeWagUqcXH23XydcCqgz57PqdfEiJ7PjMicynEXwbfHU4YfgVwAYinsMeMW",
  "key12": "4R6YWMuN7BxugKCyvdGKeXycyLkEySkkj8Gn97nmjcGz6wNcziTzEUrgdaGkRRt4mfoQfkwiVfV2eYWggo6ptSza",
  "key13": "5yNKYWJKdyKJS1iQxKAyHM8FfbittMHuSV5GtLAaXj6QstEb7Zm9oAZRe5EcTNrHKsSWQWYeoGKFrjBhbgTb16dh",
  "key14": "4i1Qf4c4hpV4cCWB7kmPvKEMacszStDccMtmhbZ5Y81vVjGKUtvBQTs7Dyqz2e4PixwhtdGuw6NeNMBAJz97cXwJ",
  "key15": "4bS8KNyWigRWuBaXsdb542SsG995NoAHnXQANrzNJBhKht1KVx45u3e1DXEb8SdfoebMzs6WdM1qqpYGpush6c4C",
  "key16": "2PVwgnRa9Jev5Mtu4AcRFPAPKR7Sy2mj6xMps7qNfdU5ZquMEsC6YUJD6Mus7JKnmGK8qWVjHeg9994puNxE2FeH",
  "key17": "3EbMBUNnWFjFqixTn2EpaDPC7v9YcyUMgyRe1HBKeZLErjSe1CHmdjwaAJLb9HScw6fh7LgSy4k9DQ6V94QPsB2",
  "key18": "2VAsqhdr1a518JmdAmYz8Cx9rqqvLYbDHFgfGv8StUDbWQGovyvzAaXy1ffNTs1vW9xAB9NxmkiQdK7jzxwCpg9w",
  "key19": "3fysHHBNYiCmnEM72FMb2MpdVUEphpvc7yaMFZBuDHgJhSWAHrgyaGVW696BYhjqC1aZNL3L525ya1C9dUCJibQr",
  "key20": "aX1dMmRB2HgMLvrcsaM6Z7RrJzQ2DUHwfCGbc9aQabBHXj3WHvReon2CWvNU6rpDUzyvSs7kCYAiKRxVBioZBJo",
  "key21": "3rTWmoK4BmJeuwD7xrBv9Msa6nKMbLh1inT8UgHZSAU61kijhAcKMFNDDyD8kmB7qi6a3F1ChQsVJgCQsw9Dy4vZ",
  "key22": "3CgG4gTe2CDvEhKzjjMFQwLy9Wc197Fi4aocqgwT46htZioW83m7upQNja3H1nhtuwRDDQ3wjqGjdaVpp5cdQn6a",
  "key23": "2piTr5AV5TSS6zdbwdxdNfA6JMaZCX8ygjgKHoEsH3Bz6Q7ugvPDBLafVKjnorE14fBK54gFj3otnJt8xAaXb4e4",
  "key24": "3zU6nQKb34QYfxxULdWQ9YYmcXJ2ckMGtWkWPdGeS2j4QXiDkyn69mSQ9AFXtat97HqWv1iVkg8Y1gQyg78Exiy7",
  "key25": "4fBD2kcCUSLwFkMwnvfkG4gpaQrcrQZqzvvQJZSZAUhCBvakNxuqJQgqCaatZvbBn6yY15PpeRjqve6XuFW12Xma",
  "key26": "4nYYoCcdFnRFTsserRPiY3ugvVNTLBahdjCrETQaqKRhsy2ZmueC2LfPtJXpuw2soBrkssf3wn1FMZhnCmze3bFT",
  "key27": "5BBKmufSUfdTxzsVkmsZmrZE66y9yxssNML7WpkhCuWpEQZx9ZVtbwetaQkmw8FJ9t1JbPgExo41zAZG8VFduSQZ",
  "key28": "2zytPWKUSX4BWfh2uy3Gk1jkFLM9ZuMBWGszM7RuXSKR3AA3iafxeatScDmqtBsntpD2rDhP2diVVYGVUNq3bZJf",
  "key29": "34L528YtsUFVoqCRtxidGJvYzs6FM4nBAztvaBGauJLR88x2Fg5prgbxYF1kosJreU961aSrm3aTaR1CMa319ZoR",
  "key30": "5FzLPLnHSpCUPLoK4rxumvTqZsm8YanZpPkA5FjLwRcZCLm8UppvuTmWykbFkoyuuibQmkPxVm1PmH7252SPB4Do",
  "key31": "2TymXZS1jUUFuuymznaiN4bHVFPRJRytbBLbcrM6C9LAYxWPHnotHnLZ81bEj9qDTYWVBEebEuFrWFTL4zKhFNxs",
  "key32": "3inQb84EMUYZPVcwKu28XGqi923mLVixmbpKgGqA3hNfd7E9cPy6a3LxY2DFZMaPkL36vbe9sFnFc49npSQchp3d",
  "key33": "23hCTueAv7DC48d8zpSHGf2AWK6AkwK2hTingsBKUyMiV4pUTP78nt5vTGxdhSBqydCKBBkcUiyHg7xzRhU7ZnCM",
  "key34": "4LrbKigL2HiamMtCFyNVARYbQUhs7AnoyoKwTEAjAW5iH6yc54SBwcE1c44GFHnKRQCehmHDE6uG7C26kxvMGP9U",
  "key35": "5fDWHjqbgSHxzZsoifanvmhkiRRvSpFbggUZyDgniTZ5yM9kE15STTNV939yfGNtfsAmkqoVgZfy12zzbDsP16Rk",
  "key36": "4D9vi3B3J3NtmMj5bMabEnmqEtLGidSN3Q5QoN8KB8CAM3tojTKxz35W8SbRXcUhtUBDqXcJZQTSAw3Y46SKWYV4",
  "key37": "5fRB3rAgg3UURjPahhe9RJNmNzgQxWTMSKJ3vSdhjry8gtFWbx9YxAwAaapR1hYuCeT36Dp5xCJJeTWEPBg6tAyu",
  "key38": "2noUctPiD7FDbQ6f9ticRVpDqJK5ANoNY3Yu9fnTcR6vJVKF7ziFAoJy9QSVy62ZEbAZUBqLz3NM57ergnnahjpT",
  "key39": "3bF6kgdAzVqnG5ULm4HjcT6i9fu9nriSsYCKG1eZ7UEqbpJpSNa35P4u1TxfeevH8n3LdE9Aser53Vpqn9u89X7T",
  "key40": "KdaH1b9Txb2in72DqfYRTvA4Mhm13Vg12mtKTnNpTsaGRtHYdxFJeEJkxkfYgaCcdG6PvmKubhyviR38f3PK7Rq",
  "key41": "4C5EZtPg8L4MB79xkpRz5hdoJfWxHZGNubkXkCdMGoPPfdobKKdX6fDCoe8See5vSGX51aEVHjJqTscCFPdH4tsp"
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
