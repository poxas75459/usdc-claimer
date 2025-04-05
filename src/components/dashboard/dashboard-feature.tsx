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
    "RUFpQJeGpafb78LFQsAy9E7mFPdhM6CdSWdMVaVbHdMgEccGJc81c8fRuthCtXgqxdfMSjFG39iLHpkBf3e91Tu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45UBHdNc9wEqPAfaiM13AtsWYfqq5Cj7fo1fwZpFES7jmRvbZYgyo85z3asKmsbAD9c5YYBjWDNCwDakUExUt7A2",
  "key1": "jqoZf5V4QBVdior8j8pDZoaJNPi66NPKMcmT4QGNzgka8YfFF3FdnKu9VTjLgZSXmopFSn836fYo9besLKSojL3",
  "key2": "y3mHZB8Fyrm6oNiP4A1tREJcH8MwrAksobSyb2L8LBcb94G9EwfFPWgtzgNTqz6YyQQUrMXngfYtQ8jouqQFBuH",
  "key3": "2vZrk4wXXZ93LFqb2HftP65MSRQHeiz35EsNsbFM1wcS8vHEZ5vaLcG2AM2oqWeYfEbhRkd9SuCCot4VsCgi1WEi",
  "key4": "3bVZccdbGQTg4RnkqUKAvNa8KA9xZoLG2NEqFXBoJxERLwrMqESxy8SpY2VJdEZbSVGRMdvMVhYGv1dYQvn1Bqt8",
  "key5": "P5oUyaZEua99eAEcmo1c5u6cZ4BHcun2cD7cpBfSSWBBoKkpnTzQT2M7CM1nHpq2HjgP4Bq9c2bxKs1HbTqMFZJ",
  "key6": "5DWyp5JeM7wL7ZWTMmFxgspneqH8hitoebZssEQRENrc43j6VjSRYfoy9XDZC3SWQCe2YpswTGrDj5vjNBndtdyv",
  "key7": "2WLyMpvhRFbu5Ha7TsboyeTzY55bB8SrAnWN4Ua7zGWK7MsU4ZDFvpRufQs9LPFXH5xFT1AP4puzDANHPRRcPSiS",
  "key8": "31hV6VcVxpXfHQ1A7ba5vDanwaryHuJzCu12WRCXBJMvnPM1CpWqFJaoEfFhoW9rnKBeLEPu5pdLW3kiY5uowQ4J",
  "key9": "3xYUyizrhedcBMhPtAgEaDPUU2Y7dpPFoHPoNvfZfoWWaYMPjsVudnpz5F41KBi4itj4bAmXDD8DKKxPc6JF9mFe",
  "key10": "4XLFL6Lr59fpRLS7cfrGBevKLR2okB5fR4etH1GXxvV9z43vY91JcvDn8PB9K6VZ1fQ1g8xtT9pBgCqsoVvSZaGm",
  "key11": "emrZizHznmVoFh2PDLVZcDoytN87iEYMf4buPEphwvKJmzerpv1qUhk8XWx252ihGEh7JxNCPsXuuYxY8gWVsjU",
  "key12": "4TpiA2LYcmZzptP6J4QQUSDky7wiYqeLWtFhCmTKAVGSih16GDBcodhE8z7xhc2FBwtdPC6EMLTtcd7WZm41CVCT",
  "key13": "4EdLr4opxuAoszqrnhqEUN8A7gaoy4kALAbgiyDhpCExio5114W3zvjh7WyS2Bk16X4y6iAp2YTPNHs3sNMv3xW1",
  "key14": "4Lufzq9Td8vwtPvJ5yr6PoRVHD4rRRdtQnTuGwTih9ktzw8aEHQDDjP1UNf8DUB53sFxMSRJxWr3nfThHDT88v2v",
  "key15": "2fwjGBqqkCqK718jynqjQw2FM9TAV5L8ndumNHzmmysRXdmbHMTWAVcaPQhPWJ5ktnY59UBTE5WAJzLwnTLCUKhL",
  "key16": "5EGjSL2cj9TsPvrUm4dJSXvfeZAratoki6i1Nm7qzWtqaHxfu9p6RZYgTT59zVm7Vjfy8YSe64npUCiDSX16UZNW",
  "key17": "5KFKnDcyfvjgts2Ah5uaqwojbZgboBDw4rHXy38AhCNa5UVJ8ehpEjPfNXU1qqBuuetGAWzoXRMBmB98373ANheY",
  "key18": "5zYTe75bcQ1dLubWyfUhTiiR5dqDN3DCouV9uP651xdWnGnhdL7iWcqnPBKcteBxqgZNigPmphnLeidEKtnMKSC8",
  "key19": "4nbnM1onLDFDxqqnP1PHpyRqPnisQH6G6fm8CJRsN8XopL4pcop5pTJkj6TfyoXHRDq87deuPGeS7kc19AJjNgR2",
  "key20": "3obhkhSVJUQz5D2DyGd9k29D6xYSPUsJHswuf5JSygi9Rq3zrA9xs3qYU8mmHnoX9BVmTp6bxGsmj1DgiD2nQuNj",
  "key21": "93iVsmW3SEUj3ta73TnxpYiWY5f23NQxLbVBVuqdGiZwVi7sa4t6JENzdNDV5JF7MrAKjws2XrucjND9U64kgf9",
  "key22": "3J64MgtU5Bye97HYrcvnxNe49sreKbaFfMu3Ja2jhhP4ayb7aBZLWJuEHXCocRGhrcQFD9y29CHmPt9EuCGiXcZL",
  "key23": "ZkHdHcVQRPVN3RvQN6Ke6dpuwcr1osyq7c1WETZjE3jLWQMFVPqguk9dthiGYUAyLf8ba7dNmJv82D7xd3xofHF",
  "key24": "3JNET5xzfgp4rytvZ9RPAQ1yGAP8hU73YsYJjyognKYBXEYJQuQJAN56q3qK6FZ489kWDLDUSAF1MBZWCy15pCgY",
  "key25": "5hhQPnuzndWrT22gVaKntJnU7MTkm1ANGXjppps6T1i54cC7SmgVnuwVyASujqCr1Xs3D5RzG6vBM8H3BmntrkE7",
  "key26": "3a8tTe2pxGGujosVfPZvSKAKEAxDetUz7tcVFz5ABDoEmBuaUty6Br4RBMkyMFi2YanjPA5bJn4WsoKu5mAPTnZK",
  "key27": "iQKBQqk2DpURZDRM8vhKMPGQ69V9AJ4YfnFFQHXLNP6RzwirinMWUocen3zKVWqgX4QNfk7PFiexYpLa4PtqGDa",
  "key28": "28yrzeidys1oDPmH7CJBCHQYwY944ygaD3wHdbjaMDrkaHcBxMFC9xqSKmirWzEASZ6uC8Cmoie6vkw4CYCaJESN",
  "key29": "25VJYWPBq2nd9MwGi8JtU99mwUFkwJmrJnA7GfadEBJdxarq3d5G3fi9fGG81JQn7WYVH8fPSPvp28G5bSQ3jabQ",
  "key30": "2qXajkYdWsH83gwcVuaWE42vh6Nnb5y16o3Vro5emmFeUbDwDQ7abgMgCfe1HiFDpuQbWXa1EjW6HSUEjM3thgB1",
  "key31": "3b3zqHQkHSuJU4yh79j4QAsHYavgsEDNnc3j5HEuPqHAjhzwQttoU8bDyDmQyNP5CijgCsDP36V4SaRT3HSgh9Bn",
  "key32": "8ETNR3CcXnB9MhkXFzzZTMF8sH31G6zNjom78XxCV7L4RBz1owMXDdFGwfaxwUcCB9PgESgZ4VLwpcjctCf9RMC",
  "key33": "YM47FWAyQaBHBFSDcFXKy2R3YYVHwniCDRuX7B5R9unvCw8tsBsc3vXqLU9LCL66poi7ZnBnzHyAvkC1CxAgWuT",
  "key34": "2hvMkK7PRowKoaJt86c6EJC69w1Hx2CzKwiWqcQxV1qYqT8wYSg7geBSCKaXRdJWeHYoutth4F6SH9fcfAj8btz2",
  "key35": "n3xkgCwkMX5D5BBnb85oe4pbZ2YHWmjvc9kTn5z1WJ9rH6LETHdTqKmLn69APb39YfFAwTdZkrTu42544qfyWG3",
  "key36": "3ya2qC2knnKGNUjPAzdek2CBdVNrscnSuxgsW7Zi23VmTW18rK1TM1gACzMUrtVUfrX4LEFSzMMGyft2yfo2ThfL",
  "key37": "3JePYGEkf12Ry3D92DxDzR2Btn4aXi4an9jKnhrb9W7oiWqp9ng4PQgpC3nCZwoWRm8wRTN4K6i8aw5rezRDJj67",
  "key38": "4PrqFjXhoRofNyJ98nErqQn7zPcXBUFWcUp2QvyZTwnHZJRRDpfUtmVLAozkS54M5vFGXLCmU3nDstPSZfBPdVPa",
  "key39": "9Rhs5jx42T55jyRkE8pThPPdpFbh4dVUvtqHBWJbuP3ycqTsNqZ1HPWfzhm3waWfgXLuuUY5f2FGz3Mj622DMRh",
  "key40": "9swwz3fZhGgQ5u5ESWVfyCpVRb7o3gHHYR12hT3WC1tMth5s6UXBBUHWtrPmZxWmpNDBA37GLHrrWtvEmmU348S",
  "key41": "enrn4natSVP4paiogLjJEcVYtnm26Jq1ZRL9eNGTDhVqex4oqZdKdq3mV34ntsnHNUH4pB8ampYpQE4f16Hdcs7",
  "key42": "coMuUifRcSTeHV7hdfutTdALYSpQzCjAqvNxzHpBerQpcnQJxq4JVBVtE2sBqoyDWCB3eWiVVigqcUAZcakTAjY",
  "key43": "5ZD5KJ5fS9xkaND8YMZirx7NM84fYYzKgKQkYFJyDFECcFqh5LnMCvSPSEhEzJUBdnWGm3F6KdoFFLuq5dyTK3ET",
  "key44": "51ZnBqrNshjgSHSoJc6NiZjyujNqqZhhR7BRSQoGc1vbmSKZBFWzXaKGgBqX5NzYnzNwusrX37V5DP3wwnBic79k",
  "key45": "2tUQ93h9TVsr8pag6T1eJMVyLAyawpnroprffqzTa5fBd4bzJmzM9rM9R6cE8vV7by9UyKaW6EiwDh9j9fMsv2Vd",
  "key46": "4ibSoQNbHQaquuNvoFs7rCVFKksXiQEnmyHy8zCsQvZBFxM37nXNeAz84NJGvyYPyopRUCVMS9T6kc3o5LmHLMbA"
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
