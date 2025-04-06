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
    "2cmNbuGdzt2kHXsZYpCPg8rFfVmEDFkx3wNfGSX7gtmwTLtbiYL2svxQfXVokVdNBw5bwgDkYqopcady3QTR1KoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SJrBptmMap1myaPUrLyUCM5ygVBDx9ytZ8mYkg8JzaPxkoQgFfUrtAwHJeyR5FZwnURXvp1Q6XG4fBURcXDxkP",
  "key1": "3ZYyD2AFvc9bzhWVfGKoHC5Si7Fgik4VQ5YCqut72r8vs94TJUdHSDcBZnKg94oc8fq8q8JJjHsUxdiTfbPShoFX",
  "key2": "51JNSZQqLrBwupLktAJWeQp1toc9rVepaHY5fgsWUm6yskbRZTiCLxnbqktUSF5gCPtHBborbJxwecx6Vo7dPEYY",
  "key3": "2MonxT7VePKkZ2m9f51Z3WsCrK8p4XfsAMvDR1ZKB3u9iJtTE3ut9CH7fCa2ax2ZUBrb4BuGAqS4ANqCb8ZGv7dh",
  "key4": "4kfmA3ApPphGRn1rpt7vRu4EYhYQ8SHJSm8FjfGpAvAcKpu8gGBg9kU4KUpznwr73QSN3JWSfPFEtHuBBSi2GmJy",
  "key5": "36WBC55naCPDqAaXBNwtSEshF4YWTGhyn4twfkvqe9jW8hdUhunZPpnQ22eXZXw7AsPtzKD2ShBB2EN3gzUCC1Y1",
  "key6": "5anB3BdbAkNzD1bker8xQXsw15yV1oHqo6EUfdnCwV1BphGnqsMVh31zprD7ZpKiauT1gSwbwxWoHBYbV9oV51SF",
  "key7": "4D2mDgHEX9o9PMgsnKKaH55KqNgE8ndt4rdE4o9Thwg78Ju6VjcaN5X8shVLLS8uv4TJ6ZfJnWFcQ5tMMennrDu3",
  "key8": "4S2GSGSSeXbeERSqoPyPkn6tjrNAq5RmdHbPuQW1atNfpjtYTwg9LsVZe8xC6QBp6La5iSRzKxfvcv3FtApeXpJF",
  "key9": "4J1ApiZouip4TiqQZ2DBMW9Y5yLoWRnUqGyqU67b9Fj9hM6UP4hfwkerQPSzoXWwzbLYu1ima9gkpNNTAtSEm1e3",
  "key10": "5J8uSwcYyYgMrDN1hzSLQkFy38TEkgafxXycmNaUYcL9L1KcWbLvoe2mhb4eTttCf2avFyKwhcDxoKg9igTepfpJ",
  "key11": "8qm6LFdF6amFASpiTk8oHDWTeAzgemBCTRJnpXguJvBWegNryoRMkUxdQA5aL7PGNc9MAufT5G2CMzAuEZDeHwr",
  "key12": "5DL5aUukqfKSYSEzk3uUp516wPJJn6K1vPUPMeVDMxRGjCSAs22NT5qPatgFuGK6VyjAJX92vDYrYp88cvowY4Vq",
  "key13": "FpVS3RQ8tmMtD4FbsYE3Lg1uV85iJUnYUXSDh5LJky1LjbhVhkf6zv9BDcJpx65Z3SphMLJCHBe7PvTVnXLAHet",
  "key14": "5yssECsn9b66XAzspcUkF7rcEruewzw4SDgPWeZSW3B5bPGkPgbS4F6DpJBdmrL6h28eTffiEqkK3JZ4Xdao8HnX",
  "key15": "3rVzjMM7fx5csrdDyatbVefmWytzyymb3jfboDy34K9mnK7eXCuyDyp8GZ6Eni8rfjigRkH8eBfNsFNT22XKaGN9",
  "key16": "27GUnsb9zcjc2tr76Lt5YA6P9XfyuDGCoK4mZp8ke5nsrEh1SiYqy8Y7XwyGMW9cXLAsG17C23Z4m7bpEjw8q6U9",
  "key17": "5yu9W9ecYaf6rzyq9Yqtv1xBeFu4Yjrsgs5AyeMh2rsKmGaWuQcLyrtLYPPNugEvazPnkzyzzRhEVGYzijfA9rRc",
  "key18": "SNdAMJvarqFSfMJih9cRhBsUnjEJNB3Lp4C73qkgauyBL823jb4Kic7wy3rxxLdsNRn8GS2BpSTGYk2FSaYcZ1p",
  "key19": "G68r9zKuXTAbYS5pddikCQRug4hk9KkYdjgBMnRPVr5Pc7A1pf4VPSLqJaiPxjqtdA7Him57fiPjHMNLEg3TfSy",
  "key20": "4ymhnoAMbWxTzLvb1iQ6TQ8Pdc9ZUXeQiPCbKiPRB4PXiYiK9AEA1TQUWpMsxaE11FM2HhTBavnbt65gVrvvnA9f",
  "key21": "3Vn24MrhNm3RHb218h6UafVjZp3hbjhaFpe9Z1QK3YGfa2ca77PLPzDvLSyDYfhwEQ8TcUbvHmjqr4fFfXNuzuKY",
  "key22": "31iMiX1VQXBZf4scmxH9mwnu99AJAwuHLNG8fcmsCqKLbXs53KeTSeonXvsuwkADHDgs4zRmp3eCvKxZ6owx8iHV",
  "key23": "2cQXR7iCjDCmt54r5Hnci93eViUbB2UNDjwuDDBzM6Wx5ujCzYkJG9XooDdHrYf6EmAxVuU557GmG6sFdgwz525C",
  "key24": "4VuAaeeMG1nYHAcdC7gDh79zpjBQ6kqWeHEvNukW4dhWXZrSzPzpF9E6cRLxLUURB8oMEKmde3Mvn9oJuVFxGHRt",
  "key25": "2ASvFkDC5vYQeK6P91mg7VDWSqtfiuErVt2zxU39ninHgRztztaU4FQFXzrY5Q2Jfp5gUcWwiiHSiRaFcZSjJCvJ",
  "key26": "62nZZ2LddN7tZJavWwpE4X4npzJpQ6gQmq4cLMdBUPT9nFJy74787mmACcrgSiN6KX675zp743Zs5Z5zdY7ATuJ6",
  "key27": "598wXqKN1RbAkfptHVsJAq99LNeNTgEHZhQwNuz5Dva4pSvd52cBkt1djbDoBLE4G2YqiwCgkkqDxViUdZ4QQz1i",
  "key28": "3DRtjiVCQekKr3xBhiufE3itJRUuy1VzbkgUVhBumK8fVoUnALkb5PaBJUFuh7EwLTZn5WdKXaQJDihWAZyLZsVe",
  "key29": "2S5ds5MqJhgKHzWwvEwRTTGLhAAQtpjrrs9gKUNWNL7dPqpVKKNH3wk8J8JNu5PdncD7XCZupMqqyHKJx5dcE4oz",
  "key30": "VRxtPGydcEtNaurfSAmruKZ5fuC3z4QBo1M21ChTBL8AcU1UesFiRdevYasTwzbsyAJxVJbNskxCoLmmdVF3ZRh",
  "key31": "39Vv8zycTe5RcjEfk2RaS25wD8Sk9SPotZQ2v96tEMmC55sPXG6CzxtN6eGK6U2wGj9dK2jM4zjpjHJbsRr91gvk",
  "key32": "S4uAv1rCQCTLG7FDDgpQYufRezghnahLzwvXUBngxdaw4KQrzvzKAyHqkTwhhotLf2qKJRftdqHzW7GRkBY3uE9",
  "key33": "5eyK4mcpSRPtwv58nUwZHbyvRVJQ3KTTMX2qVVCcfRDoXrGWe3AbnxT5gZbGGzkSUwnP9Mx79dxvszJCkm46ViQE",
  "key34": "5aW5nMctE68PVAqif1mqmUqVh8TrxnwzmxMqxUmnLupoXvhMvb8ki8SRBRKeHfyHBzaNeqVcJPPzYWJQggmjLzm3",
  "key35": "5ED5ojxgz7mtu7GQpK47gRCrSV4S5XLt5XKoLBmABSitoRRkn97cDF1j4xTVECJM4eHgVQnbxTm1nhY62mycA6gH",
  "key36": "4CtwnbkHpMTh6sjcowcnxt4UZPWK7UL7rrCzH7YVMKt2WYwQfXcXZM8vFPaXezwCWf5EQGoMWU92UZTJBgnLLxVK",
  "key37": "5GTeHFGRqRbgXrPTBx9nc7UD48rgye9dftiDGn5PDHUgduS5dPWLhgiTzp3P4geDeE4RmhNqR4Rzp9KGyvEdEQZT",
  "key38": "4hPnnubwoEgohw5v6hqN7XpxSjk1amCUP5mewGzBPmRUYmALjitbn9ezGS9VgVCxFj5qpvkRoJMzLBHUeffLxL8B",
  "key39": "4ycq7Hj3G5AVH2kmjbxpbFeaYSxoD1H1DjfaNgnFEGCdZbz9bZHhbkGmVXxuVRs2RUX5yfnQFEFknH3eeX2Deai5",
  "key40": "5J5EozQmp6TrSHNjtkkZV8RozFdnyUgCXDDFzYFtXWc4noLehdspkmzhWBh2Ayoy7MXBWZijbS6N7soq5mNnzxVr",
  "key41": "5nXmqakBPMS2iAFjsDLBew8o5976wvyMTgKLwy5xzXjxtsg4rs7wt6PDbakdq2RrZB2kAcCJR4UDG2vrJ3DGuGas",
  "key42": "DXoHPkQENkeQYdPkeaE6DwaCLVp6Ua8P9Yvxoa6EYBfUdSkHEnLkXnPfoNFqXiouGZtkdcQVbiKQny6Dhdg4PXr",
  "key43": "25trPQv8t35PPjD6VVLbhNkXL3fceo1wnYLic9BwxwBsfknUoAjevjBYDYkzPHzPtaUSp8tEXEfGwTEUmHEBmFj1",
  "key44": "3Px1rfZWURk4E2UofyTTthx8UAHgMMusy75AabqXNdNsSTpthXymt8YRiCpVU3PYsFsbCRfMW7ozKRtiLVXfMvTY",
  "key45": "2inmUgcTrmyQrMoj6q3NHVp7pKLnd1wvDJLRgFMzcbKQ4RGCa1g4UnmfFRq2wEvrbK5myXQUTxwbEKFkWXPUrsR2",
  "key46": "5Gd5ApJgtED65wphfKwcFZFiSwLazBps2XJg4keVFJt7WYmg9dHdPLMw1S2yB3hNGVaNkUKPABfaHx2hecnbbipQ",
  "key47": "5gVbWt8P4fjkzd9vaFqxpLmJgEmyZeC9iZiPCQx3MuLmX1biaBgm2537wzfQyrVjUzrc3p2pEhrCcFF8LnCeyX8o"
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
