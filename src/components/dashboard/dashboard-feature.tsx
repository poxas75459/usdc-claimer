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
    "2HmtEpxrFyM2YKARYULoL7J6G4izvaCHni94Pt4XEs8PmkEBwZWAaso3ZMngJiT1YFgUmspjUbRzvYu5RQuKgsQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v3mPzkAetvk5vKf5BhrbnL1sNfRCJ1dwKFj2Dnaxffx5j38WPREMYvaxmp964x1QQGVSzCN7LsfW7V4JKzdwaLK",
  "key1": "5xejWMXbXg4QWzMN2c5fGFymtqRGmX37HeUCBWg7HcEnEz5Th5vtLKWL4tKPgVaw6sXYMyvd7SwyDXqdV4cHfXgK",
  "key2": "4odUZQVbWUnq6Jyf51ctdNJb8z3kt3wv5MmuGncNCK2RekK355jXormFuKFvK8k62Sjgm687SaMtm67XH4ohhWAf",
  "key3": "4ZPEM7FhuT94WpYYRuoHyGo8zU6F91yV5hGEKiBDcZtCHQmqKWpF32cDxX2iu9fSRcudmkwTA8fxShpAPHoDsvDG",
  "key4": "2bFGhSd4TAUYdxA4h8TquYTWBQa5aMLi8RHYc3ubmYaZDceDpnjsP2wL1H7oRbS6iLc5hJEkiq9nbX3cNtrg1iMn",
  "key5": "46iTqGNf1yQfZqn78X54NR9JJLgfL6jeipVvi8rRkBddMKciKfkQE5WfRfCEcTA7pmCwFkoxH2wLDWUqcSaYPDyD",
  "key6": "3dFHBgKZcVd5NmqbLkzWizEMMSj2WjFxFJbGpKrfzcbizPRFPVZx9skd8ySvY68prowcRh9yp4jwYSQWgSs2PRC",
  "key7": "2X3f8vTvA9EED2cUv4UFLS45oAJZK5C947xdBApGHD9Pvp9gyxjvYYqzmCxicKUvLVePc6igdMtDv6PhhksNxpDA",
  "key8": "4fohutYKNVqCoovMkk3Xk9UXKnLYf3SSAzT4TUmYRuLeF81oGfrCmsFD3Mk4fNEeDW6ZcvbE9afBbxMY1sJ24prn",
  "key9": "2hD5B2f4PTfyhzvF78MGjvLTvkXqFA5gRnVPmzebreCsxfZ88YxeDm4r1AnWTLY9TzNaERw9SRPiZ3LxLLv2J9Ad",
  "key10": "56NScKZzE8ifZCn4usm9TyvF4xLuMgiXPPJmC8tBDEJe16nExGVG4VY6kQFGyijYEekysDLWXymwyLhJqtWDCuhW",
  "key11": "4CzkrSuSZQBC9FPHG1aV5GMMHxHWe8G5ip7ynz25cpjsLSPu9aWU8QHPsJ3urdQq3hsuw2GWqmAn7ax8e696xyRp",
  "key12": "4SDJKoBHog1Q1kT9sHoaDMi5yg5gPaRR4QuiNhYW7iHZWLRa4C6KLp68ZHSULNwZkKa2eaqBAJVyZgrM78oSgqvU",
  "key13": "5p3SGEDvVsr3F3p4am2iE3k236tNyBMW1UkFHasNgP17zHyVRLK3wXfnYk82g7PRTW9tYvV5M96yQYf6ToN3Pmg5",
  "key14": "32HD6fdFtWTdAMuzpKGdnnHJr7HXJvxyuVtcDWXXWE28vAfLdZZYGHt6gWfXzVKsNFLpU83oB6BzUaqCiBoi8Reg",
  "key15": "3z5jV9b6wHq66NVtTnRte6QkQns8KKCejNU6ayD4FFv27LXL1bDde2FkNgfB3rprsgPdnTW6uZ9FnMjcyJa8T8ER",
  "key16": "FZYkam3RPKZyjCyanwrjCiKW5KhiSFD7BW2UHH5y4N4oV7K5A3gPzwmB3vdPmUJKDS6CRDhtLByoFA5ASGNFLdf",
  "key17": "5YS8xd4e3syMvDumXfLEJut7NAD2RMNtKvE9SwjvHQQedVWPwipyEHJKKYvY4hWy7PEp2pDs6cPLLdYzPaRZZbon",
  "key18": "4iknrUE77Whcd4EbCdqEHGZ6EUAvVLqkLrU8HCUeaK3gtRYgPthB943upPtfmX8Cxw4HmdFGJDTbesLB2gqg3Joi",
  "key19": "65uv2dJWPzhf64Ue81takAQ4M2b3psYBQ5fsiGToLSpTiQ8qnFHnNQxjSZf44JQtMsdRa3yRQDyaU2vUR3Q6FxXU",
  "key20": "48UR5A2NB7MJt5KFuZUf4cRF2hiiFfmJZVF2dAjA87qFT9nWw6BMaMypeXXiC5GeTSQycERytuMhdzfUyRXgEgo3",
  "key21": "5VPh28PuhpJ7DbXzX14TBwnJc5KRQyS5ua6VXXVuK5iXzswGPFot6AA3r6iqsdwcH25nJYqmm7bgWWcbBsL9LsrD",
  "key22": "4BjLwS74hRs3kCvP1WSx4PHsiW5G9DY8UWrGLtijJXecVsZ4MvqFcWiDvQMFzdS1MGqaaPpfZoTFzmyoeTM4ffZb",
  "key23": "5HXdQtUWVrAHEBJ7UrGE8UFwJwHcpgRdTAdMsctQ44SwRh3yiLkwJFrypCSS5o9Znpq7sW3GkohhcKcgC7p2FUoC",
  "key24": "66VXVRCqYfXptqRtryJwfCn76fg6QqQqzk9WNGRCrR9nLkmgin14rZ1n2Nnq3Y27rjUe12ApHy7PVnXBxdXFxQ3L",
  "key25": "4w7WhZA9GvquudVSMh7upAfbf2XBFxEZAEdYK9xHbe6w2b5hGWd8nGraAPVGeuLtB9BV3QDncpZAMQHMeFZUkBB4",
  "key26": "4PYP1G88R8rFQfXgrcUrVzLFqnXH8Fm9NmvRUEvgpeYnXe1bRFXEw7fKucsL1nn6JHi9VorFs6hwvyAkmPA5vaMR",
  "key27": "5CVshyAkrE3v4J9YnBXNWy3moV8auGsG2xiPSitMtKCgkNt8mwJ9PVPZSJmXMzVtY6HhNDQSysfZnZds1SGd6mjw",
  "key28": "4imfSggfmK3qMuFjN5KtQ32kfqidRzMwe2L4NK2xHVdVvPFJSpkJYZJ8k8jXuXdxciRErZpciXFLSopQNvb6z2aP",
  "key29": "4WUR5LFPqpnQhtMPSZ63XkJgft81TeWjJBUCEsLxsFjtgqcaKLUbo5SMhbxGiRvYtjMqUSJ26oWNRZtbN1LQLg4Q",
  "key30": "2TVUa4mFY9oSL1WWFMiwiYxNvnWPZ3pfz2jH1qwvvFJk2BtLxbf9ZnvdiJoc29vGZE5fbYKk2Gd4vcgRxd7EJtgG",
  "key31": "wE5geVvDaPeQep4144EYizYd5MGFKw3cfbdZVWeDPWL9wskZ7htyn6c3poEQx7FaQpjDKmnMTX8a2P4FNEnAye3",
  "key32": "4DQd9P3cPJmUV5LLfLS392P49Yb5ViqfueSSjRJLGhiQk7VafbbFQhX85jQ4AMhw7gbTLLyBpfr2UwdwzmEnQtGE",
  "key33": "5kr4ZZ35a1sVxcdAaJtyZzxPkbQ1cC7M2uPtTjK6vmAksajnwtQkDAEeokHWEaPXn27RVKN6TyngsQDQ3jtc7ijc",
  "key34": "5f1NAiQnRXRzqK4VuqCYeMF1xJTwFrfxUpJfLAWjU5s6ZrEnUfwwPcf8PMqQJfV5KcVhQRnSJGWLtyccpzrmxQRu",
  "key35": "3mnuf73qiSXifTucpPuXPiUqAvqnKe8RTtuqQeH4nTcHtgxWX4WhC8NPCXLxeHxZKRk6JUTZZc4fNB8H5V23gZS1",
  "key36": "38pTUfVFko8G1aNE92crz1jTZWur7p9zhTKC5KCxXVCwwQm6bqp4vrpjbYmBWSTVfF3tEUAaaWhGcrM2nS2maEi6",
  "key37": "5douinZTBBZtHRT8dk3Ep9b39HQMnR3jyJf6mKYDsy94ker67kviyvR68V6APzbEAKf96ZnRNTocAMAocZ683Ea",
  "key38": "c5e6mDfZLkYMB4VbLzBi77881UNyzPYfnCH3Rqe1iZrtsa9FdgcYqGymAE3VUFBhAPMZThD85vsa4hZ8krsWn4V",
  "key39": "2Ay4JKCyG6rSKS7qFkXoQCDFPkEpe1exgVCFkq9DNa2c9X2JhQZ6VqGw74kWDLv4U7f8wrn9wgmo2icusBY2Nd5W"
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
