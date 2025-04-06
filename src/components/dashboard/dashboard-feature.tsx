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
    "3N14fnkdt5HUVDis8PwVvhSNhC4isqeuU1MGts3Cnq6sQkTPABh9w5CWNrQGyqoWuuSFcYhjhhzJeGc61KLHFmcE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DLqn8V4YLVxFoDeJSoJW4wtq1GyZd56DLCwxPrhmJJDdZotaDBgrCBJ6sQoCGDUv15vRiaTe63ftKC7L5Bh2EG7",
  "key1": "4yENQ2N94qiEcUNeKV5CsGDw58uaerpamVPFwkfSGSFCh2dLx4GLGGY1NZ9zXYdbn5FFKu5MxGU2s3qQnnqDPaVN",
  "key2": "EoK27RAqAuZY4pZFBe4vt1e7bhThhZNMFEki8zP7LeTL9uib9j853Csa1YL6cJPmdtPRhn6bCRnXHuLLRxo8eQw",
  "key3": "HmLfKo8nej5gAG3tbt7sy6J4AZpBjwCTyeTJDv48x1d1WxfGNqPypq1VaKP6MAErHQMVmhCQ4Q7XB8qi52vKL8a",
  "key4": "2L8znoaG95jK7hPS7f2NbXLtmVWXy3HxduQTqhgZ5Hv7ikHtBJZHWQmZ8D282kV94GyU2WsExsSsm5k42EZRhHed",
  "key5": "5hRnoqyvFKzWVSvLHoFp7ibv9BMh9fvtgRiU1WErkLUoyTY4mduY44CYvBwnExuXTbNTwS74pkf2WgpjJ85d5Riq",
  "key6": "28hK3cSz3C9nArY11r8QWtCrjSrJDtmbNHUv52aB1ukGHCG26SQTV9QxuC4u4gXrk8UqHBbdELX9HAQCo5c8KbSZ",
  "key7": "5VLnKtrD29Y5Dpm6DfjUaTQ4LdQ2fGe7qpUXmBmZzAPKp9zVQRjB67jKgdFt94RZrc5SNgyD4WxcyLTfBuy12ZF3",
  "key8": "4vor1Ak8TPU3TPMFfDm4DqSVVEfDvubrDKU1XbUNCjaGYTMb5m55u6ySNhtHfxe23X3MApnLnxBNhVMnBW57TM9x",
  "key9": "4sNareEqr4JvXroMyqHjFzSzgmm2zmnVtvXX6PQQDtHyBf4tWzFC6QyTvNsiurWNbPWMs9sHX9R5dA8fJeWoX7Ki",
  "key10": "2Sj9MEoafzcpy9Ve4qy7A2LKu6tsNUCgdF6Y2tQ9YMpvyfsJJiLGDHjthq3oXQw9ahWn7YWTfjYqGPs8yD5yE1sY",
  "key11": "ZXFBEdSmEorh4Ezu4z8f3zQzWCtodorqyY3LdvEJPmN4copm9EXrJXn2QpF7APwgeJq71yJNFM3aMqFWnummA6D",
  "key12": "5a7eePEnj75wZcsXFtzU3T3BngzDmnERwW5HY1tAHv9PzLbyi2daxV7Ub1ruV9R5ZZs8Fu8yghMNChspFxihkfmv",
  "key13": "61CHCnnewJVwv6skPhVSZ9RQGgydKCPFLtHyRGRPT3DLxqy1GtixEH6gi2bSV2rk2Hp36QjG1LGLyNvXrQFMHjuB",
  "key14": "4YEDSspkxg2k3N9ACGAf8gcqMdYWZMzrUfRamkMaXQutPwMTZDow8NAMceVLwmsRX2ccdsRAsHUkvaLAKAoQHTtX",
  "key15": "558hkner1fdgDzmF2Cs5FNqbiwvbCZK5uCBdUW4c9HRKPNR3p2ac1ctJU1Sd6krd5HcDcMfcQmwAqRGjLYi1x8RN",
  "key16": "EZcVkxVPes1weQG6KbMwSXUMKqUc5QrDAwuNP8juSAZDV95XV2PfXuRpCjPph8WHVBhvBpt8cuipsSoFEjfT49b",
  "key17": "vqz2y4wVF89Urg1ukWMXKwzeBjz6fdpsxPFmY71rsT9dCjW42fyBojS4Jpj96FquSVgvikbZvj2VWjvSNC6FeFo",
  "key18": "Wv5RwHJqYCw4Z9dKRxEhQAZAHvczZmhHGY9FqjQkqipirf7YqJ4RnLQULTj8G9AvqehhgrquzcpSNT1Sq1kBijt",
  "key19": "2p3qRhBTZgGtAXNq6JA2CqrUgXf2YTtzpXqtpihHDKmSh2SBqU26LdtDaxxCpCoUFdGp5rMPMC7UnHYwek5n1D78",
  "key20": "339wZMH8w3mTViYAgtJ7FFyg8mhw1iuvyPH6AkzEDvz6SUedu1AphaJKPHN2vqZsoDSLfKtjq66gEpVhUeMhEzvu",
  "key21": "5czWcWH5XEXwa3tB68uz2M45PVA197J3dQtKLSM8bb8mhzvpb1t3htiPq7des74t95XQpt3A9T1Jz76NQ5dRksVs",
  "key22": "3sbv1uKHfKP4bT3hCLFBEQeZPmbN2LBZwP2EjzCfpoNgg53JrhQN42gJcxR3i8fERS861pziWsAwTaxphf7eFa17",
  "key23": "66geVDJ6MWe536XiBCgN4yTCi3urkn3x5EAmFHtePtc4A2UXkeQaQqNdzyPVKjenbPAGmaSExdHtfN6ENNrKwK2e",
  "key24": "2TKRXiZm5eaRYUWNbB9E4gAcS9jXKhZnaczVCoPGbtnAeAmhH46x6wvrJyFkgoZMDN4zdUjASw6y2zGBJ5XP7wx6",
  "key25": "5qhNkSv5bvwH7qcQLCoaDLKxdWA71BfnZQkSJeUatecdpwtqtpp1RPis1owPr8gjFnL1k98Q8phTDR2smokfvHoC",
  "key26": "5pfLYrVHa8FWPmXTsktPcmFDzi15jCEtPDyojvHqQvJan8eUcxkQZPygcXxzyy6MrpYAZziq1Fwunk1zKsKj1Zsg",
  "key27": "5uH4RekmhtGxT75LktEp1HPAD5spkYzvuk4c8oc32sfU2GuSpeJwAUjQrFmxAD3j5bLGEN7Jvr6MsLzepjDxdSTC",
  "key28": "5LW8U1R3GKMKdSng1fy4grB2RjHxe9ZvzxhU3MxszHY7XgeHD4Y4BvtbBPbVdiwd4LkfUjzVuDAtufUAaUXvM6EF",
  "key29": "3nfyztr4odAtAqwJqbQLMcZj8PtftC1ZYzNDofLihFn8Yd6sRd39AveFqgxFEk4pcBXVevPNJBrCwpQnJUxHQyWU",
  "key30": "H8zL1z78U77YQYAJCL9nEkqDKsmMviN45c1Y9Hs6z1Cjjtq3arRH3nhtTXyvrtCfEMxFEee2hJiBdttEQS6BPgf",
  "key31": "4REoKTEGTxfQUEGzaTbEcctB8pmghMw5wkfQkgfTV1w5NNsrND6eP8PiQ6mfP2Rywjn4ffCqPckE6XbpKradLBA1",
  "key32": "3xpixVYfN2KrjiZ9xTMMVVGBpVqny5w8QSQFbxdyEYeP5NqCCRQDaoJd7TuMkVfR3qy8QJfLWp8nd7qGNyDkM5RC",
  "key33": "2f6jVdBJWSkYhyZbU7gHq8o7VKgtHuq7WTPjAofY2fQvmeehwowxiTLd1m8D6xjnW9yqUnMgujnmwYcWSUib4uVf",
  "key34": "2UDZPUrRm2KNET28QgL8f6xNrVg3HTLcou4sDkDerdUiwuE3b7DxLPLx1rx3puYgSmJvP2bQqWWYWYzUnoTxPRV7",
  "key35": "SD8Xs2uvp2FdtGUuch2cs9UHDK7YfJcGCk39LhCvhPjkXmDYAzKME9TUGjSR2pmoGGA1i4aRWvpJKx1dPewxhow",
  "key36": "5bybfSfpPxniicZWcbRRBaNVbF6AMYKQr5btVSowXo4Ar1ymcZCo6JEMZ3mGyd3qhhmdMMQuDmUZj6HsHjwj6XTY",
  "key37": "5o8crpjZVNRaRTEbCEjSD6bBT6ipHGvfGpZaToDFhaMeQDnQcMuUBxMhxZGoeedodXYubG836wuEEYzVyRmXiZmQ",
  "key38": "uLyLiHHyimGxDE1c2p6wkUUqJQGY6pFvwmyAEfdKoQZHuT6NW7yBXpmiZFLSDb5PGLLQ5uoHjNVDCxbJ1f2cGKy",
  "key39": "2NUy5dXiN3kHuawAE2tvfpc7Rnj9DSzzB4DqKcaHmzXyfk4xbwB9dw1kq4A2tNrG9mF6widfZjhXwNE8sqh4mfYR",
  "key40": "2LS1dSycxMw87kT8CBVJsVgCuMdDgAy3Wz72T4aMpGmndRHF94uz4GLfeseW8TynaMFpsXduWuTYDDY4SXxJY3XH",
  "key41": "JAA7XN9G1DqAkF67voj3UM1QqiBYWY1srfcH3JcZZqYXEn2VAk1xLuhxu5DohQihRUWVRSsveWhiQ441yHtkBR9",
  "key42": "3TGh4B4Ree7XA1Z5iHoF2jNsB7hxzGAFKBUByQXhpCXR82KXR3wZaww4c7Duh8P89k9j6Wja5s4DrSxoJbpnkA6d",
  "key43": "3DKH6d74r1j8j2g8tnPpn5E4ewh32zbVCR2XLzW5vmw7TsvexogKLWkffioBcuEFitqn1pNyPp2am4kFsqm7iShP",
  "key44": "3BCLRLsE3qJNj97uUh9CMXRrSthGY4sq6Whq9n5VZzbu8jyz4wLq4XFNk7jHGx4TNbBNwVjiBbxL4cKorgMfwyXV",
  "key45": "65DMM5iWqFijL2xwyQgwS2C695Ej1kSnvZNb3bw6TL73nwMXJwyKVo5Q9tGxTJCR4W3UCszqXuqLkS4Efke3AZUR",
  "key46": "3Rz2uoEbFzqgXN19sLg4NQpnKooQ7b1opBwwHgwfEsXFi8tWPuMKQuxFFjrhUrY3HBD7zjbm19BaChhf6aePv6cM"
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
