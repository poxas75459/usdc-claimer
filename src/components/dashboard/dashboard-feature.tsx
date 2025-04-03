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
    "5TXADDEyV9FU4umpPnFAmQ4b8TxAQoU8BdG5YxaJWSMPLnjk1uSgu2hsdiFU6q2NHHcGCXsp1wnY8rMzegWaVA56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PuE7Kr7qL9GjsEGpw19c19fK2QgefspMzWR7rFbnDER9S2nwqeFSwUfxQtTxhFbc7i9uwQrHZkvr89c4T7H47x8",
  "key1": "45ZS9teA5SVR8mriNK1nRXSeVixgp9hgHCHAUk5dyJPhBAyWCqCAvUhS1mkDAwxpwbtnn4AFbWtFNVcgDPchb7rh",
  "key2": "4yaBFthUSmsJhD2BHkcRKa7h4yNvD3vNQ7UfZ22Tetg7KthzLndBp6etLWoZgJVv81xUYwSZtieNcCBoyMsZpM7o",
  "key3": "38XXd1bpJwsdtWpzmvyzDJux84xshnYAupRdQ6hAixGJ5ygujrSjJafeHku4hDmRxFw8gcWQmuKKukuENm9usaL4",
  "key4": "3fBdK4f349dQNeHJewzvo7131xcLQ43L9iJwv3xV3haTtkPxRH6FifHtYqTyzCiQ2s9pSBYRrmN84LMD4PWeavV5",
  "key5": "41bJ9KKJKKKNHQxvqEuE6CNDAzygF6aCLLBZEkc64jchEaT8eVo2wZn895bTizaB53GTQ91BuxMCRGKumqPSNL33",
  "key6": "3yGmmbYdAtZH3yT6gNsd7r1Y1HAohRdxtJgNT31qRmp9dMP8yoyDAavKtJi9FF8Vy6gYGi3a9XKyYW3PuuZP8uBp",
  "key7": "2A2JEhaBjpa9aWmChWHD1KuKboa2kpmKRJa2brgvGstNfHGXVJtJpZaFugdiSceF5oGwTQTBuSDtdqrpxrHcG93f",
  "key8": "75HYawyuvQb8UbH2EJBbWNpPicBKYhgNcaQ3XuWf215EVj5g7iGzWfMMWnkNnJdCPMEWUknd1XsyLLj5uwHzDHK",
  "key9": "4PYAboi3zcbjAaXP7CYStNr4e8bvPMuhanBAYyADfkUh5TEScvXeKqAken2RWkLh5urZFqHGuya8qfUh6Q3G9WUs",
  "key10": "34TAMkQBjD3S1VyZGBeEZtPaRgXmqc9bbus8T4CYjsYpjfCB3dE1oXdU17E21Nfbp6uHzA7v1NVsJut7p38g85Ji",
  "key11": "5iU2UhAp6vGZ8eEMcM9qVfnEwwHMwEiq9cLwbJMBMNexidrzaytTiuxXHdBx5kxwSBLRZimNmHDZrgoo9gRgJi53",
  "key12": "2mYM6fhVS2tDeLDdbBeHSFWcfao3hZoLjAabiZytCKojWAqfQFQsWwUzbNwstL745Fc5ELuoNADwihMPq8eY9DLi",
  "key13": "2XkcvC1kbMfeFBGrf8SfygFtm7V8ELPgsPC32Mm9ouTvrML5erxBh9QGfg9m3iPVT6g7Tig6PxknoJcdTiphEoRK",
  "key14": "2cdyHA4CXncHyVn9wekM61xCapBj1ZT5HQoTNJnvWKLvpcb33m2ohU5tUrMNokgBeXAtNTfpcA8TF6YbvoAbx3Qg",
  "key15": "tDFgDPn3WuhnemLMBZzHZ21Lz4Qp26rhtM27m7tiryFMFuDkQwmrQ2yCWSEXAUVieXcKmxfX61WLkE2jMYnjUNa",
  "key16": "62HgzeoziETaK6Woxf8SCMt2cuGAZvyQfNiacZF6LgwTE3ZjZ4JxtESQ37KW8BtYbXYCGmnNMsqyjAYq9TYUsxyY",
  "key17": "4zqNwp1FpSWeQvc6UxPL8ghLhKazVcwHLUrXnRoBh3iTvmPQivqywzT1qEWr6aMmp3ByzzLLk4vwmZ4EqgAJdgnK",
  "key18": "2JEwXkyBg5EezgQqvvjD6xC1pxK9Hg5NjoHVb9uVMKpx2gL5RGBUwdng9xnXMgMxUaNii62TLfFE8VL6ga626yM5",
  "key19": "3xLKQEmEezBp3Qg5uCfXNqaRm1GqTFQmMAvJ3L6Lmz43KLbRjvzkmtVHaUsdWxhrY2Dsyby6RRKtqHYgmDur88Rp",
  "key20": "53Gt2dBHNQ43gVPhjtTQ9kNcL3ErkDWTDRarNkcbV3AVCPbZyo3S4eD3Kz9MHK1aHS1aXTKbppPn4GcbctiGYSVQ",
  "key21": "2koAWmCrhdHTPPtzfPdyKGQqqmxQhH3gXVs5muLuk55UXaYaw6hJWBC4RfZhhe8DTyVWDnLdyqBvV1oyEkP6Fqj9",
  "key22": "5yTmrCfB9tHkwLh3PYGaYbWDJhFwhghGwYvFFVKK6fym7L9qeAExedQDHXEWP2aj3WXSyCczxdHP3Cwi3fHc8iHU",
  "key23": "3Rk6Kbf4D9GuaiBi7rGcsb1tRot9q3QzWs1acYACyFSAKLAQdUJhJYbszymDEqpz8fs4aCLdz3DKRti2bPHAELaD",
  "key24": "5LpiznH5r5uWFd327psbc5rLsxjKUwj4fZMR5tFKB8vbYbfjgdmJLjESbsTvs6jJbfG4Lr1t6AbPkdhCikMRHWy3",
  "key25": "3iySN2ZYGCbBPnMdmXPhS2avwyw6grH8Eye8nY1kGXGeFnavy5Ns5HqPmwanUh5hb1sf9MxmXFoXCeq6DmGYNovH",
  "key26": "23S1T4H7ZSMTWDieRcJfbHD2Tuyt2iJ8veCtMFfkvhTqwqe1zNq8oqPiyYVR8JuhCfkef2pfDY6Fv9ohQyYuwjxh",
  "key27": "4UiCxtJJpr98LGV88zH5yntSYmTmNMEdRx9YjQzkzmYMgXrFAJ7LQAh9ETkaD5tJFzD9Mfufuzd5mtrLZCyfuzkt",
  "key28": "3fidZKwPdFMxjJwezP8LRQLHMDKwcAoTRaY8YZ4YWVjfo45RAjkPWsE2TWLjWeQaNmBZH2UyaeeLu79YWS3CGsYF",
  "key29": "V5aTRrCHasKyXhd7em3S33FvfNNgVKJXdxafBd6bKiSi3dac9SbUST7DErG1BGAU1ipaTq1y8cunBYgT26j9gBU",
  "key30": "3yYqm2Eya9FACG96UyCVckTaPzm4WAHEH6M1tH4eHdnssA5nYCWXsu31PUCpswDmD3LCv7KfDiQFgjX8ci6i8MyG",
  "key31": "V6rRYePZ8ov4pJK1t2t1sZ5cUaWSsdQRpGuSTyvYA65nB9BV75wSYmDwjXsnkPrFuMidSUtSDRDa3cXeQk2dk9p",
  "key32": "2QsdSd3K76QjpLSdsVZ1FyDwByHUixakPP49ow8qzqvMFvw1wPvqSa1cswxFzEWjHf8DjEt6BLVRhxfnp5EHZaPE",
  "key33": "BNNTWqJpECEJ774BnQP41CWEtpcuMPQpyCEKdniqs9mUwkJCJAZV2RUsiAv8SRV6twhtijF8P4GqBDYGacWuiJR",
  "key34": "8qearMBetfMKQAF1nN7hiMEwytX4BbSddtVSM3cBJz6wkKCZmchtT2WKLm1qhwgaFdibWH81h5Qx1TR7wTFx5Vd",
  "key35": "2Er7TmzdoXegFCvSr1pCtDq2A9ySqbSzBu5tpQG4rjHrzBLwkNEE4RQK8UicXe1i15WvYkjaxAzQ7Df7Bmgp5ms6",
  "key36": "2Q57XV4WTHvtDvYg1yAsXWB8WaBQHEScUdMV4urcwecVCYX7TEpADBNGn3eKkJMrgAAgZdrJ1eughcRXGo6kN9tY",
  "key37": "3w2Bz1LhDE4kqCvU2WP2HzFpHE4eP8Dh9F97pVcQKX95Dvbqgda4SS6UT3crN2HJ6Qqf73B4w7b7MHhQkwkQ42Ck",
  "key38": "3gUHQ4kg5r9Ydyx5dnjqHwbnV6gEsWEomKH1P5w7XZiZW6xVPfXZdwYA9Nn1B4M3szh99yr3URrEktgu2AwubWxB"
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
