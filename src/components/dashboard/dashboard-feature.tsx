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
    "2S5eHpKUAxnbXJaLPof2FJCzcp1XXpZA5MBy9SdjRyroRMoiQGVPCSndWDHpiHMXRTXefhN133VQ7z6ZKMnnocTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EFeDjRdv3iQMmh3TuqjFM6b8NMSKpacHQGfaUd6dVpCfT5tzqjG39FJSG1sjhVvXTxwmpUaLF5JdCftBqHEcdkA",
  "key1": "4ysKr18MqDovCnKTWKnDaFBupHtgfLmhXrgqfJjifyaMgjbxDMw1kUiZRKY6zBLa3spCwBu4qfFracxaUEDF71r",
  "key2": "5rw4fvYwwTwyAbw1j7goK74dDNhKJVwJXVmSGZYTpvK2vZJJ5a61ygfSdMkV1Pw8kPfmwFdGDGcosgXPf42LkA6R",
  "key3": "23kpuq6RhrzhNdNoVLNxGYyJQeUXHDAc5aTWU23JYtmr3xyRGjtw465CgPpyF8J1HwVjRjGtXY8V1LascZssHJgd",
  "key4": "5WTtsKny9fho1QhEWMaXAKmFU14pT74NfftmJ3fMRTPWAF7o3QTX5qTY1fdhEx83gfA34Sj6X4epmM53jv3E9nCL",
  "key5": "3dKCDRacEfCtiZNVS81PBfQEyYwugTVNg78LojUdB7btHRgZR5mQHwK4NwtomKa5ZauSZXkh1ZF6x1b1wXGPUr8y",
  "key6": "eKfUuGYCx4MZ84PCNWqTAw6eypiGsqSPfqH2JAHnMv5XsaHdZ39F76En6bjdqHR5E7XJaT7YYoxAmTUwC6VAgZN",
  "key7": "39zs3h1Z3HXgRoiDynixJSZiV1XexkM3Qf1KeFWyfA3kKr1qGziiok6taTYDaoDNcokXeMNkcdfiL9vDjVPQvuac",
  "key8": "4RFzq1VVgcLky1ujvdZfNhm4mv1j7uDy8VA5FbwLuPBtLijDcZUbXRvLASvaEiqtX7Un4K5DDjdzVvrkkfvKyChv",
  "key9": "56iGk1fsGyyNzUnWWKNLLbqdt83C556KTTTyWyS2YyS6QnMvq6xQ16h3mHYZCMqLLzWfqRx39s97fNHg4se18wmm",
  "key10": "5JUjSL1sEwxp6cmbzmjftSD6tjokTx6qGr7SMVzzaiNBq7oWagSEoQgdmTyDP1dzCdmB8ZwvgcK5E7QG3P6YFywD",
  "key11": "4Ym8qNx44q2tMk1CDUvmttebQDWTYW69A9FUajkZZ8yQoLKHrQ8azVjLBheYR88XVVQt21iubNcbh9ucSExe6sP9",
  "key12": "2v8LcVbLGjkgJYUfsH6tzUuzfZgTm9w2y31VcsCmjACSNHV3YPGnaEFaK9ncJveWkKHzGKDSvmKP12rwsEQ6FwRR",
  "key13": "3K1P5uFFvwisXStygyjTm79E8SvHFvsmpY6aTjgW59e6hSLuVmgmxg2XR2rfAnc4RPF9SPHP2XL9p75wNyQnfXV6",
  "key14": "59qUDer1r1zW4AnueRdKs9trj1w8QKtSsutDuByCaxQYyLho2z6vDCSd7zuJgTj2ENmqzEfcdZVx5yWXBvapR8tC",
  "key15": "49nAh4PbpqfEKgYNTZ6BAH9XX2mdp8RJq5r2u7firLH8uHEmgxawpcSDLPCvanRRFd7xQHJrfqqGxbSbySQ8xNUY",
  "key16": "2pk4GPn6cXpTfPTT3uMzTZfGCSpULvMwZzRsXziAYiNpUjiEvX5ef5V8tUBegjPDsZgw8nNmh45VS3Nt6RvZypDe",
  "key17": "5SaoQFCmE7dinuPZcZ9TjQCMsH9up4eMpL4q4H4bY5EMDPAVxDXk2pgjbh7bbaZa9HXk3uDfw6kNT4RBrmieEW5Y",
  "key18": "4ywpiGT3AuRxJDx9bNL18SiKRA2PQ8McVpLd5RJQNA8CBYD3WPcPZkRvxMWwqwdDMnaKxQZoWPdMpP25Tg8dgdkZ",
  "key19": "3Wy7KWvAfMXZN1LjiDr43zaCKtahdNWsk3fNB7vENwuaa2S1ZrdAqhJRV5fn7uJumvYyuxGqvmzHD4pESvVQnQ5H",
  "key20": "2jDNCHdCb9pn2wbQBjG3utvNHuVTVqQoZnCmtEobp7XC8zcKCz2TkEXzGjYX62wTEgEgXAqoswnwJX3yBy59mEXW",
  "key21": "33YMRVn4MjeFEkBCQR6CAaDwBvQq7M1BwDfasDYzMwoUubhmkocm8mic41q1PfnN6iiYqd5tiLUZAS5up8tHbaZz",
  "key22": "22gXmpVG3bjmuVFVYMHZvg3PpDSSjhZk72ZoNRupiEgxz3MLphNNe2UNcszH1eSSKou17ZuoriFWvANjk5jPmCgF",
  "key23": "5tjS2CjtjuzeTMUCZonzBZF4tErCMe3UAEZsYC1nLjEMDKuoo7pX1RJanae1BH33tk7bvdjxjrnffLjKaQ2VQAHn",
  "key24": "5iW6gym9aCNZtKWEzY3tGxUMPCBXAbC8thbEaLz2gPimYgNPfd1okn7Nkq6f5pDR5nCyE12bc892CYVieTSswvqC",
  "key25": "EunU4Fh1no8JX85fYAhmDvnTbv9s7xDHK2KZ4HqKKdtERpAYt2DjTEUc6vGkqRK1BHWnC2KToQ6haZBFcS81bqg",
  "key26": "2Kk4q93TvfRYWizGGk5i9DR8EjWsADzsX4PLnFvTigh9fBtxHKRbYXAAiXVwoFgTGUzcQJ4A68FYNqpEYXPknEVM",
  "key27": "a8sRCoVcHcjHwmBitYvaxxu98pcn2VC6jAtcqsDBk1cwVvYiiwpLRaGAAjkg6x5qzvJkczGNPF1gGeCtpF4oauk",
  "key28": "4uJPxu8N4EtLQQQd88oJPUHayyaXiBg8wvk1b8MbcVUfYr9gnyefEKLEUmrBUtpTS4GkncgjvhEsFuTaFJ5V7eNa",
  "key29": "2o2WG6XXegV1W7osyg5W8PyfS8mYbFZLdA6FL5ZNTmiYBbrKbhAF2a7hAH2GnoAB3L5ZqCdCd1uQTPUrT4kZtZJd",
  "key30": "ad48GnGtWuMg9PnRVbxAKxWXQmVqX6eWc9zehJc8HzkgqnymhdY3tf9JZrfncQ6kfibXyGeDJXnibLCzbXyLYf8",
  "key31": "rzmXRssvTLrbbrj4qJ92UnbiLYEVLsrcBD4XsBBL6fvd3aVvW3HMGPW8AXcoFpqKXkaJPmYRhwrEjQEyKywqXt9",
  "key32": "B4P2uKB9MmWkxqyVdUmvUbzSALzC6hCTTvc3VyVcLFsovVDCGfhrZMKymqvpZp2fQNGBZ7t9rWmKw2voBKH6rRK",
  "key33": "98E3eQ6XrNziqvqwqhAC9hj7oXsyH8wDfP9njw6XDUbUotJb9UTa3Hi4nb5QR7nL2jZC6f9yxToe1EnjaU5sbw1",
  "key34": "5sPr1iWN4mE1xiocqqyhgDGSMoe8DsYznksBRFz72Z76sJL7yfWFsyGjhNK3KsQV69xNzWWKe6gbU7f25QhKV7V8",
  "key35": "5Tj2xxzgD9pRgHxDMEGwN2Po6UqkiYJzxPyBdnUVW7sUXd2RbZSpxmsKz2hiSF2LNfywFhgPETkXDAmqfshGxFWN",
  "key36": "6TdFyEyn1cN7HXDfNHabdk5pzL6BN1YXH74Xzr2yHHbUZAgyFcD5hGV2UKpNHyfv3j2j2TqqRTvgNEXGStrYoZ1",
  "key37": "5SCwNF61AK95hVvCK8NrVksVM24x6ZmugcjXVdPHmauydALtgVEAVoeW4mVA8kHCrJ8JVjgAMytZmVxrQA8bNiBa",
  "key38": "5eZuoLyBbeeji7ts9RpZbYg3FizMYJaSRxgNU9MzMBpVxR12RySChgsY9we1ESTAWShTMnBw1aqZTcXJUyjF3MX4",
  "key39": "PY9w7KevxuB9Fk18vh23NeYAjyFq8D58YqQv6PoLXC8KvfwBHKDeKHWQCo1wCR8DvPzpRQPayUgzTDWmADTJUEi",
  "key40": "23mzeh93QQAtcCaCmrsbASgs9tkoQcW3rDtMpZw4cBEetofufXXnzjvoAf6bLgc3sRbdkttwBLEvXxzPGBbjLK8K",
  "key41": "C4TkfrGbekVChR7pkszHr3uQ1vdTP1HuiZ2DkicWXzidbJJ2xWo4tVYvdFQ1DpEdU9oGgU9bBPqe4pz3ojSPwT7",
  "key42": "2wq8QaMz4dfFzxAB897RM2PdHEGCjfZTAqTfjTzEfdBnr8iX96zpY2RYhL7CafayPBqfHrU39kxipw9P4e14oy46"
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
