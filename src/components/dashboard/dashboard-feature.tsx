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
    "Psf9PVCsLHMNqAg9XVGX6zNcKdPZe74XhTLHzZzvy3ZguLALwSqgY7ZaMQkvvZaswVdokYq7BEApCZdVY9f4jr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47MBbTyWS27MnhJc1EXFsqEfkK7JY6p1rxpFEGm6h5m5suCgUeb5HwSzaJL6pixeLz7rYKm98493k4c3kihPVPTx",
  "key1": "2MsJwGEQa8yELxdNr8nPgRwAaXDRnPJpGGiMG4F5N2Jx4eBHx8GexEDe9ryn9Gtxogd2Wi9phkeV1QKXxp3YH3B8",
  "key2": "3whiMeRK4Btbq2MAaE3T6Bes6JRUWVFSJCA9dj5SYSggxQYrAod44JoVrL3uQfUBpJzHLz6iz1xWBJCqBGShEE7K",
  "key3": "3yfDQfxnneHqWt4iR3Lbw21oNj3SJFGMZJ7nB1uJJ6C7QYG4CvpDQh8pPsY2gQeMrEceQgXPije2CybQ3rWkFbzg",
  "key4": "31kcTAdagPJedifFv9Aw1Wc2AtqJUGpnTPsiW4di7nnu6N33BTqdXWHkFvbwe7DgMA24sh5WtcrS23jGBK5amCse",
  "key5": "3oFrFpbBwVePgjUu4T7phKRcMmkNW9V2PmreXhPvMeozKVTL4oXMk7sQiJu4mrU39LgoUfNVb1svux9vkWN9Nqrn",
  "key6": "2Qpfvmuskcu5tMTLBVBgrSeVpH7a2YxeBDus7g4Ssktk54RQFaMSWaEuXgMxbm2ZHCWz7a2t5GsUzQRxiBsXEyYC",
  "key7": "2YhkXVqVtBwGB4GCgB8Xnpunb8z1F8hA445x64UqzzfCkhp3veNz4oo9EAysfQxKb7ttaVrCgVRzYBwjtvH9TRZ",
  "key8": "2o1PLpnPmrdfAHwiM4kttyCA3YANgBmFpsntVnriMwscns5pjJdGJ6yzbZKP5edfVEx4noi6dDKc9Ljas3gqQuvM",
  "key9": "4WWKTMcKgynAvGHFWwuPdCsm5AiC5jHgKe85yqm5GYZjgn6hb325TDBV3A59sJhzdnCwU6ZLsnCKPUNoAhxp85rM",
  "key10": "3xvtBfyuHEWZjvEH6u2nXyzQwHQYK19XJopbCPLMok17543MUecyUhmJrxt3w5q1uaoUQ6WCvFkD4fTxXSZMA62Y",
  "key11": "31eQ6a8UXegLpsjsrpSpKFHgBcAC4GSW3XsH8fWS6feWmwJBw9E9s88rVnDwwBBeeFjiFfAeW7E7DgTZiRoUTkhu",
  "key12": "6EVfn2zLhtUvibfP98AJHyoZ91R8UnUa5TJQaTF93LtczbdPZHBAJEV9jDRcTVZiwAaAdpJVjzkEoScTZ3rUXT1",
  "key13": "4epPuWDqRUELRkbQfLQqCxxFoMaLDdqVkg8uC4Y436jvxGB7cSuffWN3bWAimxS4vMVUBAC7p7GpswJeqxatqUpX",
  "key14": "3yB5auzgWzLRPyengQKy64inctTmHTqXA9FTYDe8Vz4BdWefxVXmghUZySuYfxBuirQU13RJC8mB97vGdoc6HTNZ",
  "key15": "QtyTVdcx1wQzWCMZjynJib1wg73RbLbMAN2BdH71ib25nAkhYEJKMxPiCaCyHztk9Hhi6WWUdLhJBjhBLJBTNKs",
  "key16": "5ysSAMEes9nfNEqMhtiEtWNR3ert3vNnuqKWB2jR2BNnV4Geaft8XM1gi17HVD7Tts1XaQ8KDELYdFrFsD7HuA8N",
  "key17": "CkVFvAtd3YaFCYCEdDeLaC9SCiq982s9RaNfTvgDUv1VNvVKuhs7Xs7vfRAExY8jttAj8gNUH4YsZhpADtgSrtU",
  "key18": "Hhspm4PdtBk6gtcquYEEjHuK1H2ur3rtJd5gs4pwHSCG89nLgFr2LgehT8rQCUF8iEFwDSQ6rxd1jmyVqzoCZzt",
  "key19": "b12dws1bT31sdWenHoswQvvaqPjdTzWDVZXMQifMDyHHQgi2JRz8nt5r2MtKQHvw9qkRStaYLfsWdSCJZiFWPM9",
  "key20": "3mZc1jadedU1jq7teCkKakCxSqXRAVevQTVFgP42UFsdM22TasTPJuE2usojRRixzsNXaexXdchSDdKpEieyCNJR",
  "key21": "2Bf4NtivJnN9dwE61G7DWyvrD6QUtTYCu63ThVexFEuQQovy2kqzmNk5fs2heS7sxoHmU9MKY8GaP2KvVWSdQdkP",
  "key22": "2kaNF4a2pkKmdmuWKuW5UvWuS9gMmxMDpezYYM4gAPNzNdXPEQtFWQozK4GiKx9NRPiPQFSWqN7ZnTqi1sqvceAR",
  "key23": "3B1wX7qHDcxYHsq1VpmqiD16epjr7GN6FLksLwb4DBmu7rZzQ2DEeC6kpS1urh6LtrfxSWb6LTNVv7tN5fwvhyVn",
  "key24": "5ZaKZu4W1c1pXxR5U991ebxPRF7uJCWFM8q9LeZPwCJYmnCAyj1GH7hD27XDGpjTRtujEYqUcsB6K35KQoNC1T57",
  "key25": "ikJqL5itpbzZ4ja7TWFNfjzaNwhwBDZZu1x1f93Kf8d6fu4eUESdTvVRE471D6TvDyyrNEPoehvp6phmPY3eWvi",
  "key26": "4zCM9spKskX3s1KsRV6h67gGdRKUuTeNuVvLjqHp6zPjyzX3Qf8CMJHLAxisPShb6Nn6jh1zoyksWTvzrGk7Bf42",
  "key27": "32VrmV8oUruzvzEh28igftryMaRTkdvaeN4Hj3Kd5TGWqZfgUn1H116YQoAPL4ehb3jED2BDyR9m7am26gJGRGUn",
  "key28": "7EboesPBPqJSAniZUU5C4xs7Z2vaTiHDigucEh4DUux8TbHxXLzZkPmfoH6TMPFEvjYHZ9mP6EmfUM5EMxkMxcN",
  "key29": "4NEBPH4Ju3PqSXAtcFEYDvARqayHLZv5bTEZE9hqZ9ZCDERWErw4KLP3cbHaQuzgne7GDR9UQgPDvKpzJyxQ4qfm",
  "key30": "Sy2ifD3FQB14GnfhoNXhsmNWhg7sfpdqxqMXi4RJ1LPvfStAP6PzW6buqMyDGxQGRVo1PFNXB7ajo3H5a88Lf3V",
  "key31": "3NapaE6nRrHMEmYDiyAScHD7GfMgpsJV68oAVuRUpCQG9ceyhW4wdfTj2ZhCbXbbC24q3eP9yszD7XSSChRwNJoA",
  "key32": "fBdGsVTbCfhG7YzipvtcQukMizmvGDNifhsdx2wCnLuFHSW3rBiUL4cE8sVsP4LZ1kiSY5k42Xrfv4VbunFRh1T",
  "key33": "4eTGHC9aNQ6pVYqeCNC3pxZ7VWwPqXctXWvgJf8SLF5AJSLEMxnwsvjs5zb5b2vsJuqpxQFGj5VFXtQ3S9wc8SXf",
  "key34": "5T4r5xdupTHJtRAaQabExLBrZwo9K9w9Rf5UnZko3pxhoazzLzgRpW7nUyLDpPu9udYXNHfa8sNvuuYZg5CMGobM",
  "key35": "44rk5pzXzpJwvLKLLbUFKs4YxHCsVWr62knByYSRiVBVAppcEpuPdbbcHtzcruo6Yz6xxDZYcvNg8NM2FV6McncG",
  "key36": "pC2zkZmGhJUuBjEpUXMWtKjtFVEgbJGRVuWd58S2NrYtsZ8gvJDiytDCXQvScfKtKnPUs3FtHs28pNGwqi5HKqX",
  "key37": "3dFjCCHgr5tMeR43PZ5WE5tTXnm4hsrDyzQLadLnWYAdCRmhQE5SdZcmErzPVPWjmdmyNJC2oiXoL7e9dPbJTdcb",
  "key38": "4aG2Ax1NBnbavnV3F26yTPLoJjFp3tPxtqUGJtJtQoWkiF7DCso2N8wdKXVj8AeaNHESNnJFryRFLY6dUuFS4PdR",
  "key39": "2TsmduNXURrQ8SQUfZqBGrsUMKqUe2byoKiYiFzvEXM5xMPKB3ZqHZJswa7extoftDcZuPASnNcMrErBJSUsUuYA"
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
