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
    "oLWFJb9EaYoZz5ZrQNfD75NGkNjMddx3Jirmy9moVB2LGjp5RMFVRxy9d5QdJRnjpqmrZLtzWUBG6onP6oEFTJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XfTYcVTYKm3fi26krVDWQGDwCSvdrmeZPtucWjEp7i5KwDZtgq8mkmQYkrUckMFAX76snvSPrMnbmZyeEYw4H9k",
  "key1": "41sj5KVpMo311T6Q2ehqzHnxfk6ddGEZbcdpRzG864NkbzNMi7swy1LFXQbxiBuzRi3Dq1YVExJanu4uX5q5S8BN",
  "key2": "2nEgim4BEBzHfnjc57y7KpTveUNJyqfRq8Ec3CNt1n4WKgx5XsjP9WicYBv1AFbrw3pW2NxtAXBXDgpbZRDqYWhM",
  "key3": "YVmrnUhAE2LGBXvruUyb1yWs8HyPoVJBLdDGYPtdmn4CRse1YhudG9sd5dcVrvi31omomCwCmEvj88djr1sekBW",
  "key4": "3YuQeeYBjcrFmRWo2e3qVw1Ncy6tsTLJtQB46UVHevXF2K3uEtNCrW8vLE5Cni3WGkoWA5gubBzUpkuUZdsEN3in",
  "key5": "4zP2WCPmBxPChEuF4c35uZS4fiTYHwnN11Mrsbi4nnirYtq2RhFt3SuVyvES8oCm4Na1avgEiTocgW4nAXzYTkMt",
  "key6": "31T3RFMUXodRozNa274bqZzoR1hsKcCEyjH34P57o3CSBfMc9N3kRc4P25jTZQbgcyWsUVjDRWPVeNGDndRfPpML",
  "key7": "5gkEGAizdXeJKYrw2hs15GhDrcP8y1X5SHdzAfR17ArqPKkxotjvA5yM9y87Fdyie9j5SvLncJ5VPwShZdrFQqD6",
  "key8": "BqLQC8gZe966HPh1SXJLYeyZfoTXVGjyRsR982nk3zwfJ4v7jDz3zyEm1R4TkixXgQ8EYbTWd8myMdkkEgbdkWc",
  "key9": "3N24SaLvHokF7k8SEUtEc51UJNSy2c27qeAQ5gXPBvD7x7c987VmSG965rguVWAhW4BvZYDcDFttuyaxZ5R8YbRB",
  "key10": "4fxC15ehxx9DpKny7MHaSy62kP3zWr6J5ch7Gu5mSwHnxSc43DyyPr64yFB7joVgYAaobiyBRiyqNwDR9tLR46Lj",
  "key11": "4W1KgscByBRZ9GQ7an3SFDdA3f89r1UtgWLTmP1PCBozQMfHxqGX1LoqpEc2V1oDRDaJHmHWPRs5kmxzAtk6SkvL",
  "key12": "3L9DiRomMoeJqTdMwEdSjEvYnAjs5RF8HM78L9Djwjcz9yPgkr6ceQwCouYoDR1D7gvgJ2fhK15VcX6VyyErymkx",
  "key13": "bKromrnFE8k7tnhox7NHeGv6hmpawbvE3CNZp8vUCdE7VgSSRhEW2cR2hhcTHoysUyDGu8bNuZk7CYxjzVZT6Jy",
  "key14": "2jxHhhhx3kYh7mskUZ3ZfxHWq1RLSdQwrXJiPohWyBCMUmWxkivhRLUnLv54vtzV6ck6CrKMUJXpbXNFTBZbJ47g",
  "key15": "3sN72ZitoP7KnHEgLYwUAxf4hfP4cJSVPaLsR1h4HLqgEUYGiiv8kwXapgSyw9xQmovdQUw8jQYR6K3Nspi5Cr9u",
  "key16": "t3mR5fdVuJopBGaq3YB7h9d7Fii174om7BKgg1DUsxCsqjpNR2peptMwoyqPe5WzeWN79W51GuKzyEThjNH8XXu",
  "key17": "2SfakR57cMY7UBL58cpdxWF6j8NPR7JU2UfKEh4V591Q7EFsvaGMgcBKVknmZyABvwZ2HMYiRt1z5pEvNS5zfRUW",
  "key18": "52mBZjhzYyPcWLrJSEHSu1ca8ScM4e1Zy5pmiKk2S1o19FNS6WoPPmknjAi6W1HjCivPKLWKipdQQZgYGFtwCWgm",
  "key19": "614LonfFANGkk8okNXyhr3Zn8Eqms8GNw3BY8Mq55MPeZuAm9wd1DHBbxPLNC56VN8cSJymyBEnorN4ks8oTJFfV",
  "key20": "3mSeK4Y7rXB2nWJAJ9oeQ4ZaEnMsB7adjynRrUEdzhobcSD43QRwnPrMNYjkVcLX2tV5bP3sdgU7BXwwkX173R4M",
  "key21": "5Ny4Ji2YcjU5LswAvoq9ymXUe1NWB1NdVmvztvmQUWAfDwoox5hokCp9iga6A7xpmM2zAXRsjeBzgjYroZZiksG9",
  "key22": "XtgPLShB334U57KpV8oJg8jHe2wktag1my6iwFEYT1uXLaE1buuFnp7j1BmEKgaj65F7aonXdno7T15yX1VWsEu",
  "key23": "5khbZAchu5xJpXDVsT37t13nCWXhA6bR9YMrYNXtaWGiDrRE5sdMRdaetKJrjA3o6fsfmxP33UPi6ZXqHddCC6m1",
  "key24": "35ktTc7C7G93y819fZV8FTNWk9QbXD4UQVfe2bLWUAivfSy5kufjhhW6PRNtQtcLMDqyS1aLRtE3QrFXDLjnHDag",
  "key25": "27mB5f3VwqSGuZDp5CKYDjDibEpaxYHoPGzKD8912z5n3PzfAKmEo8rWD3Th9SXRfRNHiSHaGeGdguTv2K3tVARC",
  "key26": "2RcBgjZG5iiBeDZB4qsN6vfYZ2qkygGG5W91tN6kJRaoTc1o4Zf3JivkbC4y6awxwPuoQbnab55Dgq8hnbo1qvQy",
  "key27": "LcXTv1L6D8Qf1dkTR9shPfq9qCsja44AyRQ5bwtzSpeTgJE84XDpdwbTAU2au24Yc4mX16Ke3z4JFMFJQqgAUWK",
  "key28": "2qeYHnKanwuqqCubxqfngHphUuWFHVqh8z5K6UjYe193S8mhSHramSNQK9yBMdtFLry9eNuVic1xy2DdC41vMni",
  "key29": "2DFj5ANC5UwG4CmVxtEFBJw8RSxLwmH251Ju93F2ssrmv82Qmkd8SZARVJm6DK1aSsHntKJBzh6GWuvpztDwLJYC",
  "key30": "4tSZAKGKtLtuvm63JvYFNUs4HotaYQcDb3K7ctrjvFrHsRSGfYXhbEvbJgR9myg9v3sVuERiUxycBzTCxSAsDAj5",
  "key31": "4jnHrtc7czdMPGjQJiqLwjXkT1q3vY9Lc8fS6ZAJnKxBh5hdqrTFvP8cuhXCSD7urKRTjr49osQZ159nF7tKDrvU",
  "key32": "4bpg5JrN4TQUMyJgYGQHfFGx2k3RqpYm6Sfs8FEQyGgGoYDBwysKwkbdyHMk48Y46c3VegmTVN3pRLzpZe522bBy",
  "key33": "5bGndeR1ECsFuSjn2nH8QXk7fN1hkiWBwPaLBo7WMCh1svQ6zJ8UJfGFPwqQJmRDbJzrPuYWyDPj25VSxL7bwFMF",
  "key34": "HhqhmfSSWNyvYF51HCGhB3DQqHJkqxvBbDLi9A3wUWFPXpoT58FbWTuyMEgYYD6ftHH8xiLmxMYm8ZvU66LCfu9",
  "key35": "2ZwsNfrWLcggiZPqshGFUKr841jXhhann8x9pWdvZ8JrDte3iPaGPVMoX4Eo3mnUbc3WEde6acgEH25nWHEAKHaz",
  "key36": "3SAaisuB31UWAigNXBNdL3Gs9kjCHNGpRkdKEeUtasgZe9gitAzG5gpDPMe1xXJ98zHsd65koqv2RgjnDQ35oiGV"
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
