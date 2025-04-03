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
    "4vn1YGZ4Z6v7CGFoGZA9GcH9ejsrawEmXd2EmSgbXHmYp4NQ9z9kQixaDF99NnAPv3uhYKHGBWQvxFi3g2UZx4GW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vbca49FRghPsV7pztauT93ozVPRHdNEJntfxCASwgAbLtGPAXQT38XxVVUJ2ezq2a36AmgBXgZ7swxtySn8cwno",
  "key1": "5FcjxjTJKjtuPgxpsUBi2v9R8WcP7HNjn3KtbmUDydi8dmALAxhPNnB6memLXHGtnmSUgqrLVDcdmq4dbauur6Jw",
  "key2": "4Bd777qBFTyEwDgwZkYFFWv5P6mrttHFYKH2K2kCwSLE9xwZW5kzusmJRv7KiSqpncN36xfDw3Y2vbSCk8NRxdQ2",
  "key3": "4wZGeGizvTNJDg2ARso7GERANrw7x934ygqSF1Kf37N8P8EuiuykGFByZEcRxqRc9trXSfqjd5JBe1LmRL1bgqHe",
  "key4": "z28bFtGkT73CNF36zB9rFPvEKGejjeGDpfvsW5hhonDM49VVmqSYh1PKGPyv8uJEdoy6A5G5vhd8tK5qkKh597S",
  "key5": "3E6j4ycoywuzwA2we51XUztySsL8em2gpHFCZHXhLwrcWDpKsBoJW3bG6ts58MkSwBTWxx3QcwxnVqKpPvtm2HkV",
  "key6": "5Z4odpnuMLNaXww7MvueYTQHEyBCKuVdr9cZbDAhLS8HYRk9cYzE7nPBxdHjJgCAu32p7WPmd5MuD89ohyXoyBZB",
  "key7": "26hwKxzYAyvgyMgHAcPQjbyMyz892Cnj8JACge6z6HXdHxrVXAwAXyLpmV6mQfenaPV87YrhFa5PXNFCEanMxudN",
  "key8": "4wCwUsnE9tdvVwDDFzVcLHngGW1UViyKbSPAvPrSFafXqRnJstg3S1dfTws9jGeYUrJv48vx4SPtg5qDfhcNnFSh",
  "key9": "4f2d39SJT79akwNmyctZeq1zHJZ7JqCpcTj66ikC1BwMsgQEoLsmythXoAUaJqRDuHm3139JK9gjXQcPyFWJ6sKX",
  "key10": "62sn78C9ppf1Lc4WFVyRbFYcScyenKMLQr1u2HFfqCFt5weqCQcnx7PFbE8N7KCgAEr8KuH5XuE2bHFsMM2oqWni",
  "key11": "4SYPCFmWR1e2KmUvhK7DztBiQMvwcQHGju2PYSKZCRfDFzDYXDaBMoKiBMaSeBiWu3Cdhuu4TfZmue1VzK6E6fu1",
  "key12": "4aPeY96KQ3p22mB5a9dZHHbmLf3SgAGhSxMgHNqHxMU9H97Xhh5BHRERxLypVddPK5oNTAw9mrmW1DSWvD7z6vY3",
  "key13": "5TGSNDbH6BgrJAT1iSbBxTNq5NPhNzBwp88akgqcfG8MGB43Zs5pJ3yRa7xwhsrgWwbU5tGm8dRo5n1H1JuoRLtA",
  "key14": "2cTyHYhLYKoDwd69uRhgnahydzjRk5XZZQCWPGS7LWdzgFj8JDNTc26xBEhQbEQQgcjYwgGyGjqnuQuyGaxXsnS7",
  "key15": "4Hhu9tJ5AQmnzAaMR3akkvwCcGCj7sLxJsZWcHmvq1duDy6APDvUXhRXX6PLWuYz8CaSiQT5BEKAwuVMfyPFvCPs",
  "key16": "5iL5VQG3qdoPoL4D1fxMcY2gY8T18NkFJh3XRybwPoHGjmFQkmJYsv1kSfrxCzH2NECJRYwSMgGZg3ipzX4QMt6f",
  "key17": "2b38DMAYcETZthaSym5jBoV3TuTb88BqC6iLYtwoHoMQKyVPfescSAEyi5nCjaSNzYytHGiT4PNkfpR6aiVJ4new",
  "key18": "5uaQvJ8bX5X1UxdbxH7jAiiL9L6pdVj6WroDv1j8Q2zKK3AVvpMjcowqR1fRph3JrbDPgP5Lm6Ud9uXd2NFgLWBE",
  "key19": "2jyiq7ix5jRjFvx383W4Gdi3dZAm1kdDPsy2ckGPNzHv3D6fbnm7QhkpyipYA7BMr2LkiqSQfoCeD5KRjNaEZ6a2",
  "key20": "51WeGaajqqdkFCshGpP5Xxd7uy7fe1CpTMbRmBUBCFj3cBCZUQHhWyfKXWNGTw5fzGmQxA3KGcQh9N7UjZh3T1Pq",
  "key21": "3MHDHsRDQ33N9qka1vJnw6iNfWPWJKaFidvSzX8tWLA9Zs9QZR6XWfkD1xGxLVRfPubd2UKfvpgvLprVX8eAiLsv",
  "key22": "LAKgXcZ1E47ENZywpeoRYcS4Ac9Puwk532cMy4VZUQfVR8TJfeqovv7k2zP5DbB75n2eoTcVTwWrG4egDP8WWZF",
  "key23": "4dVYR3WxgZJzSEGk4fEofmURVCyS9dCvi7m3pTDiqkVdJ61mHquKdhhHCGP8xYQDSZY93xupv26Z2JGWUaYiyjDc",
  "key24": "UE2wvxbWab3yimWzUCevQg1iHeNvCnqhaVSbvPmkF1QgnbfoRo7W4A8427dUf899CBpj5R88rGAYzcjay96mbJa",
  "key25": "3RbCmLfDnzzxyQgJ7Pbb3D4zePXDFGSU9RDsXfiaR2D4zgzKjUGPnGdDkQnWW9gB5QSpMzmafAR6HEKDHzaVDaWR",
  "key26": "2ZQovuWaedT4owKwNaNvX8j4RyouVShan4ZwJXYQBJk2Bm3YwGL3KHrjZE5H5Jutz1VswA58hSVzWEDvixzmTNKh",
  "key27": "5CBryjwveZDtdnTEFs4ek84553Y4swwajVoSxoB6yfhpgVFNAaaQFj82xRJ1eB5SV7ZgFVw5UgsMjy9Rm8J45Mg5",
  "key28": "4AZEe2H9sshaCXKnqS6sUCdedPbTsEPtZm6YUqbZNFctptH7GYrKjCZxyhKJYXE9gCAShQA1EAPVwYmK2WoTD3Dx",
  "key29": "2Np7EfGw1v3ADQHSk8H3AbutKFVaDAPNfrpGB9gsQKCfMBpxzcWL93PR2DsdbdEKDEQNrbVb7z2n1N1BPYoGyFgh",
  "key30": "3tYmXaiE6ohFErTJFVaEpoZxspi1KsrFBKgSoxiQchHpZu7AfmuShQX5So9rbdxSL6wevyECEbb7PZQRrmo4me2",
  "key31": "5RVJFWQcevkiWDE8CxQ8vfWbnmSXNZHN83kjQzKjyHGvfWHVawJGNhq4NatGoFptx3tjaF9JDvavBQKyWeo8g2UF",
  "key32": "ptTraCSMNn9rjPeyEmVcAGLEQ943Srr1pcWNS6rVTDfUKrVXZNyKaoW6GWBVycAWmtpxF1LL8dubX2QU1khFLeZ",
  "key33": "5LAPtWxYaUFfxb6HrrSDSKgxXp8G3LMRHGPfghUeMXx6gLCZ7BMhpi5nTryL97jhJFseS8cZVfQZKHy8VozH7U2z",
  "key34": "4Tnn6XVs2nYLQ6ZNFs11UQ6XNva9XD5TKWjY9khEg2Jm3e1MNmyihCp6mRPtBjTYSosxLkEDYvrJVoPCzjbbBC9P",
  "key35": "3XJaBzU6EgmrRgX5miWoY4BLSxyAg1GEdNE21fXZ2DgCuzcz49LH7TmT5GcsB1ePyVfNvvBYQLRW9icCG5z27BvS",
  "key36": "4yJzQraEkwtna5aoaehswJEsF46ppBDPZ3EYhqXqYZY5qC8q4Fz8LBayqGuAky6U27jZrxStVbdtgku3uqc2iSvQ",
  "key37": "tHi1CBpiVYJiE8JhzfvYZyUXqYef38WPSbWWdYkciwwu1u91GYugjwm4Dkmtugb29qdke7tMyndvYD8mXBH7waW",
  "key38": "5jMTCm4TtzPNHVykhQDUvcc6HG5QKpjZEUwMXew2s7XvE7twP1nBvPntBQfFUoYiPy7Gnqm1QS5xc1zNMTKKyt7u",
  "key39": "29U8TYAfJ56natD4GV7DqqBzpHgxBxQo4JmMYqrmHBAwK6skhXHjtmf8EyGZSEbV95S9dKhLT97LdPFwLDbH4co8",
  "key40": "5bR4e7tJL3aQcPJvrnamjcRo1Zpao6cz9bEeQqomeHoiuRsKrNgzKuEv2Lpphj1BWfdmuxR3yvirDpXVoLs1m5di",
  "key41": "5PJddGnXHLzw3CbknMJ9rNb911K7sJknTWxRwarvhvSEoy28aW6ziyLd1zzhSm3tKrdZ2B5o8mHgvVk16ZYBHVU7",
  "key42": "3JccA9VRycc55PPcY2cQSBQJrHghUCo9RN5wJAEs7NVTj8Rn2Lmf8ju4kiiJn4oiGwYzidRPzcEaCh9mLfHSLayL",
  "key43": "5i32JdmLMu64E4eaZ2Cn5PfGEsxPUSvwqBZPS9jm3K9NT3irzMRgK4Hsey9KfmcUMkvjyDUh2pPuytJVaahKUe8r"
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
