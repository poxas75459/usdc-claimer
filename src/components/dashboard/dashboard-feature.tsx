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
    "63P1i4Q2cUCGyZag2My4cmbMWMyYnR8krryBhuQPNJSoXgxvHjwo8rJjb3QK5df8RPAkKoSRizLrQ4HbznQLAxXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EvmNbPwcqtVTxRikdMGtpds8W5gnwY4TXACtuTrt6zzNyg3C4zCZzyEfK6x6Zu7wmwrs1Dz1jnaYYWWWspeoLqm",
  "key1": "3TPfZKWwUyFqotM7qVVFEYvczh7rcnUKaQtMLdEZ1UJ1UirVrNMdZczrfhW6BhQaKmhqD6RUVMYgnrvSuz8La9Bp",
  "key2": "2G4MV3oL5QcSeyBq4jRZhrCDXCa4FGH9mHVTW6rw2vD9fSDqNAp2HprMQEEDj6R8bycpWjoTJd2b1usWUNNLRfjd",
  "key3": "8ND5qvchhZBR6dEjEHFyANWWC32Fd3nfVx4RuKmqASKKsTb4wRioFupJega28yHDgadUU1HM4nJtPYGT17DMH2K",
  "key4": "2eVVU91gFGFd7fejQD6nBG4HEXhkg2H1uk28CVc8So8EXaba65UXuPZpPjGJmsC8paS95ZndXMfyxDS2hdZ5zH96",
  "key5": "5mNeEaMSgh2Ri4F53f855vZfNaRBgAfnqSYKDCza8avU8Ca47zVTRxjQcthS2TuSv3PaYkBLfzgrzRBV6xjQ8ZqS",
  "key6": "76F2EVbpty5kdvgkCfyAwPzeey9pdCeeNsArKkhwqRyW3xhhwN1zvbJYgyCtqXUzRr9TTTjnPPiU98wjcLtki2A",
  "key7": "Xju5cqZfPDhubBYPFKoFsdHJytfrT7fWBmjssNueJT2k3u7ZwujUpxD3AhXTq4J1WQXV1JYRUtR4zXqfrTko7tn",
  "key8": "4q2vnZykNaAu98gQs6WiVE9ajMGijwu5teKmGSWujUqqANLjTt4uHrPaipreaBAf8aBU7RRP4qqydNNLWpva8VVD",
  "key9": "38BQr8vZMNrarvNnic1QwCjEz8uUK7NinGsR5LECT85ax2KB76Be7BtzDoxSc2XSxidT7fk8XiZpnwYSH2PBbjB9",
  "key10": "3Fp66kPWFmezmmHuJkUwKHtSuyKC9kAh4Tvaqd8xJD2EVyQKPRCStHCutoUWJQCjcrX5d1w3Do8udS3GvwXXCnkg",
  "key11": "4VgBP464gz4RJF7cV712wa7wTZjGPHtnRqAGPsq7iipSY4AbcKTADCL7T1pS3Q3ddUvhH46G3iMVi2Qq1PQUsJRM",
  "key12": "5nr72HDPn2xBaTmCUFqhAguXbXbWjk9mCRQxYPQX9ijgSWYi7f5U157vusv7uTsgPbsXK4un2vDXaEQ3aSuhRvp1",
  "key13": "v6f5br7pwycmwbTvUhwc7gz3t5YXRoJYJG7QmBtAq2VGstCjJ9QWxVY4h63rVw9xMaixm4Htv3KaFNphvbqCqHW",
  "key14": "2qecRWHTTtquiTzmzvr9VngNVY6HibJH8qzu5N2EJhsE3ubch1cv8LoLNW8LcAXLcmbeR8cu8rQDAfPu8eFSFkRA",
  "key15": "3MVSoWSmV2cju5vdZ9gaZSvPwJTNg64BvQphrJcimy2YKZJxguG7cZyY2ZmFieGZMXrJZqKE5HzQG1ErNHFHnMW9",
  "key16": "5NTYcYfbrF9pfqKLJZfosTtSzvH1UYCuvY3rJPrtqAbFNoge6ifMtz6jCPfC1gZyutop4TxMCNCZoUA56KnPnjDP",
  "key17": "5ZXLMtz3jzaPZCyf2K83DfM9txFkqBeYUo7TydDvTrKxPewBg1WX8qdeuycbM7ArqtFg2kGCuoVKFfhvVmRva6Z9",
  "key18": "4cs5MN1fCeek8fhBaznyzBvVvXqMPmCzuaHAGPjWEiGjT4tdRaKShB4ACmjWjK879ANPBds8BM91YGtaYkovemDB",
  "key19": "36fvuwK2rh88RodXBj3JBP2CHJ3ZKwZCRUiVStGmbyvhM21wG28zXVhP8reiueTcSNfxyBMZcZgrbfkh73rvPT2m",
  "key20": "38PeHVitcwb8jQLQzA49p48EihFw5KQni7rzjEe3oogmkLsAoFcA3cNqnr3ieyCZEpWGq49JSxuMdya1F5tNSc8T",
  "key21": "Vc3x5zCdU6F92fkF8sFinb2WU86fWstYVSUucf2Wyu4y1Dm1BapVG8npcNmHZ6tYGhPkUoHPaBnp7QcE8NfxiwY",
  "key22": "4atAwUoVHJR7ZuFZE9Ay7nab5tpQj29U3xKKjvbPHY9fuHUvjGPQCPvR9EUzJfyPNt1GggJUA6BTETvDiWRycxm3",
  "key23": "4TVCN7BRPTta1xq2h7qH6NGqhf2Twb5vPgMiKg6ryS5eHFZXaUnMAGoFn69BroBuoUxZjG8ffC4xkysJjfzMzndm",
  "key24": "5oVqjn7HhwULMtZ5YUygDQiKpjoqkHRVLJoc5aobaacoeqVmUdKi6BKTFu6hbZ6UNUE2N73Dj5gr3acu4dn5AEXQ",
  "key25": "2KvRHxPfShv2ZMbHTPUuKBac3eiJyV88KFzpGPeT7TkGdajts8Kf7Vvt2qvJ8nZJq75PxhW88ndfu5vdy7yugMss",
  "key26": "4McXG1ZjDUCe44ovFE323Fkm3YS9N6Z6RvxGQQbZ1xoJQMRMYQ8fDxGK5aqV3onc4HY72iMF75FEq6ACcSExPZbN",
  "key27": "NNSwnHeDrh9iGjiQME4J69RXHdXNHMHSRTuoSDQoaUncCjj6stS62piEC2q34MVEzGXkfx1pVdpxrCj6qGDYcyQ",
  "key28": "SpKbsVK6XePxtMMD9B7xBf1CQAXnvcgnU8MB5nuy7URCzfZS2EX6o9wWXnbmczwaEv4ATihYDR7jApu7pxCyv7H",
  "key29": "4jwyttefb6nvQ5im4jLeywiLVFS8jXkBHeouNTsShTB5NBv337Lis2JCM1MkHrFWppWgxSfBr9SRd93giwTTymqV",
  "key30": "rLSJ67vRNJZjzNYUoRK6eunMmwQs3nzQGi2deBVKs9fy5oMo4v8J4pKqSTM9kTD55g5myNusu99mo84MruT5Cgz",
  "key31": "59SA2F5fYahq4VuG8ov9FWNaKB4JMhZ3sWLfJJ7BFsteGZnCBw8H7rXjpL458bJMsh6SXR8yDkGZuCuuLdWjxST2",
  "key32": "3t2vhEeoWq1SsyrY1SzdEBgAyd9qbc49ZCUzY6FMLpYh2Fx3ot32wVQE7BuvWgcPSZ8seTihmcmuGd2bcdNVaSAF",
  "key33": "22VF95i6B4rowBw2KYoujEhT8CKomy7zCiNsyCEkXbyATEW5m8DWyEWXracbQ3wnqzQjfriEQYiyaeHRSRQKbtTS",
  "key34": "8UqFUMTuGwDyu2HLNdhuGcGmiCpKMvYM1nUuFtURKi6xzZpvzFE6JzvsWzEWABWKdHPGmRepNiaLkWE7txZQU1D",
  "key35": "4nA91ghV87GiUc4WMxUgkPX8SKq2gjkfKsiKsSheXqiS1v8JFCsNwx5AugE3VHMsCnk3hzY913eCqXSfrGJ6CDUF",
  "key36": "2zP2sFjTGstS5gKufC31jLqjGXX695wjUrz6YrdA2bADffeeM55DBKPPhDhzpC3fmtWTiu9orcd61j7FcAGJBGHi"
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
