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
    "3k2ixnhnYMTizcEkP4dfdQJHMAvctrvneLvPxCoZksYPKk8g6q7SF7VcsEzwSfjxHQhQPbj5hbdRmXqnLBVYSPju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X6pYqXrbthYPivoGxc564pPAT61E5oQrxJzojauXH1Xea1Kvu1P3Ce9h1GgH9rT8y7u1mQDj7qRSQSXvxr89pjF",
  "key1": "36AABEiimdCU2P924rZywSy5p3cbNSXvaYccqpsSVixfxiniNf55XckRf4FARDFKkZDq8erWfaL7JQLiE9Voi7wD",
  "key2": "4bqB6VBfUpCXM7QNAmDEjN5PFX8PoHGYDi7uaXBnCYaxAj6rQUdsthN5y1Bdkb3WS9k4taQKjoLEhEjvTazS1LBf",
  "key3": "5yDS99qBhZrn6UPHaRoqrYctZ9zm1LqFwyZ99F1Mt6hq5yBo3ZTeeQdU9mSxVYCN1Yd1DMDoP2L4HwuvJ5abLa17",
  "key4": "2dBaq4JjMiKU2YV18K1cXBnPDt4WtdoQWyLeofC7W2dM64hXZ7NDHM73fJdHRGC6FoLbQFaZxdFYps8nrYn2bSe9",
  "key5": "28yfssa7UCr3U4Hph7jYaq8s9963Nt4xBNthcneoJaJL86oUj7mwtJTVJkw3iY2B8hY5mtkeURneGfNcv6sESHB7",
  "key6": "2WE3x1CvoTbo9urWmtMXuxKeH6PuKVSe1D5yBLjgfDt7TAUarqMyQs179SNdWHjWqvEMnmhgqaVXoKaab9FTu5Ag",
  "key7": "3fPmkcvH65Um75i4EZGnDW25tmPb8hUvfMUuaHb4XAC9HZarC8z2nvmCj3wU9VB6A6jJXCUszopHDcyTfHsguYRz",
  "key8": "HxbWAiydCGDSGxhuA5V4jgp31ZMq1kww1Q73vogVcemgpXtEerZYW5MAxghkgX2XB3pDWbuiAbGnTY5xKKArjZ3",
  "key9": "y1YbBizhss3vd6X7UVxTcDJx6gvEixGeoJXW41Ath9EPPoRnXRbp2oqUZnYzjCA1H13bsH3p6TWWTz2K76S6Sqz",
  "key10": "3bMsuEfsDbX4CZz1RS4FaHQEwsGUqKCMwuzibVCnfPWWjECjW1N4xkcM4JxhSXnJzaePLGwRAR4A9DuSZ832EuVy",
  "key11": "WaJ5qPaPt77kFpNgsppdEUQef5eTUUemv5mp6V6XvGZVCUzjyC844zaZNJ4UN97N9AUysu3B3nuxj3c3Gpz4T2X",
  "key12": "4Gq7xFLW99eRxMf9rt367xiWCT4UeJufya2e3XSWaJY4Bjvv2oBhdLF4ERP9oAzxQfsX1KuHvjsVamrtZ2kiXS42",
  "key13": "5Ge325JWXoVwRfjpPqRY3JTwEitsQ8R63UC5idnunbNrmgudmAA7576q3MEFjjqRH1YUaajScdKrc89wdiocmSCg",
  "key14": "4Ybeo6f62UWe23i4uHy51HgbvAJ1vFDNt68nGyCSqe7KSxHYKhQVYCTTNYa71RR1hR2tpurEjMCVcVYCcaGky3xL",
  "key15": "5ohmypu8HLyX8KbrTvqLUM1qvr2X2c6obU3UAMHJ6b84PcXF9x19mDFLjjLYxEcLG2zcGNSesU4WaJQuNTgsUwW8",
  "key16": "3uFy712bySS7XdfGTF9eXBvLnuNyRUHQC91X2eHHo9v6YFEWsKxwVtw8xMkkq7on6w4rmmSD8GCjKDAFT3kdCoFu",
  "key17": "3sShr1hj4YvvH4aFA2ayobJ5RG6TERqvmpB7qgC8cHyCvdgtiR4oxKP5F7gVon171di3UkKvNSa7UdkPCwChneDr",
  "key18": "5PZcVriR9hBgiecp9ajDGUigTBS9rj5WweVMjhrSVaLNPe1ETuww5KJH3p6krSgftVFVCSzHhaNiqfpgfARWvPXv",
  "key19": "2noayuFc7b3wMhvEc6NpKAaVyK7ynPMXaBQxwa49yqEXmn4vZP6DjLtDQPc11CkHUmCXeZcSC8Z6AJF1RKeqx7Lt",
  "key20": "2T2yCUaTe6GVhNUC6dHbJMKBwo1qWLZ8QaUoVvaUutGRjgSGrbrZogA4pUp6JZnmaMVYAbUoUtj5yarMxPsxDbNd",
  "key21": "4hxgHJgy73Y4Cr8bUxUt68vPMnqT2JpnTwLnHSRuejez9xudVRmqATzoKmretegjKTr5aYfrqPDMTHPHSWiF1hpZ",
  "key22": "MN2HfFsc1PH6Pkq5YWewoT5oU6qq6zRm9BTdhrgGm9UHgodcDaQsqHum492q8FHsSvEqFG2ZPgF3fLPbevgf95y",
  "key23": "NzGrKhv5bDnPg6K5B5TooAMGm3WfQKJW9db4Unoy5wbX1utwo8tM2epsLmDnqHN44LjAkJhw2pYukj2av9bWxkY",
  "key24": "5R1zja7g3dCGPcCudvk7CLRjy2Q9w5iDwjUf8fiEtMvr7f5mRj66oFyrKJwYLokc1wiN8mobKqyg1T22F1cd8gV6",
  "key25": "38vWfRjALEt6J65SPQPVkF5arUwM4MHJeFDHHb6aobJYjMMCYFpLfGXPbHnQ3ACF5L9Hc9dja2x8mXxGwEemFPD2",
  "key26": "4NtV6so9aa8KPzjVwnkSAoEShvCs9JU8tSuVwcPpC3RxKKvcRL2mkMh862xZQ1XWivGUHYiNbTFeBQrSpVcNRTMZ",
  "key27": "2MXftnoAHhiDZeG5EknrVHdcxZw3S3fCYAusSJyS5MmEDMKQZhKe9thSdyrW5QFZvygXLTYFTbvh2UDjWmiRKARm",
  "key28": "4T7dfTzC486FwAW2HwYtjGm5g3U5VctYwy6sxj2t8PxF3mUgVS6BgktfoM2FUBbrNr2T2PexT23cwJtdVTnEbErz",
  "key29": "46YLBSHCZ717br7gKE9qYsQe38jVyHPoYSVrLnw19wEfpb6AFj8NUrX9RKmZafHquMA1Yko72BaJ4fFdCjsLStJc",
  "key30": "328TJ23X6yNpLy9w7Br4cb4osqNqwtxoasQy4QCnmWukbbkhMTxsP9XYYnCYw1G1F1sPWn9jHHYkzX2VjopBWnju",
  "key31": "66SGBdyPHfMJikqMS9ShWnr2hfMQ28STnbAf2Cp93oWbkHowyazbrLYiYn9L2ySefMHaVeXq9kaNzf1HQN72Dxii",
  "key32": "3jj5H7EnhcVQDEuhwkEBUc7z9bPgXgEFXs8SRV9DNokDDTuvoBQp42X2xrzPxn62ZMgJRuvansuGpJA4E7Udy9K6",
  "key33": "265gV8aMDhEjTjig8jscmBWqPf8zTibuySG8PvvPVhX4RFC4uwtQ8ow2MPxapktG9DLP1HUUUgZ8Gp4ND2siWK3Y",
  "key34": "5pKRRQSe8ZeYt1XSCyjo7iaXcxSXViWWDDbNGVujUrZmr47BK3yZaxzvaCdrPkSFTsEcsdnuWgwx8p9DXrVbwJVU",
  "key35": "45aEEAywS57qfLgeCdHU5fJs5e9wmnzxFfTjVsvmiiX2Vds2rMk8roEQJU8fFBDFwCQJUeTE3XTCyuAyxCXSYkpJ",
  "key36": "2QEXqfVdxQ1SWH2HgFDfWohEp8wKkRaqs9bmpyATiy7EtkKYaj2D4KZ7ZBmy6VBywJcgHYAyekvLsN9jkJ7q8ZR5",
  "key37": "2xnkpiNhYXJw9yqW2t3vh4ubm59b6ZTfG3X22BJyJiX7SVgPXskwFPz8RGmCX45n4vRaR38fEuDVF6U4FyB1dYe5",
  "key38": "2VSskH7P6k3cnrRgYEUectN3xvp9Bdxsj9DLLddAD4dweVGmDh7DdZZ6ZZFYRS6VRfqHFznzUU3HJyowTshtSSMH",
  "key39": "61QV9Twsn5vEm6iF3J8Vq4MrzXn62H5RBv1n8xcw3LpbBCXsbQ4D9TSDAEk1LeaxtJiRFHwhEof8QrGeoNFQunru",
  "key40": "4ynb41snkeV2m5KgCGQQDctywDzLkirThDZ9cVYjg9mrRoCJASixewrXmnSmuHgEwqGK57hzPqW4oLD4DPFk4rin",
  "key41": "5XCLhbZM6yDJWYQYZb8RJpKmp2agjr25HZ46RtZ95hEFjMk6bnLditd3HkKfY2owmVAxYJgFmH3QgzkSAFDF6D23",
  "key42": "3MXJbSLTiaix3CENhwPYzPz6jFK6R7PoPCbGh6iQEtmkj86qrx8PagAPbkf6aWX9xjzhmMkb8mF9cjGsofg55YQ4",
  "key43": "5PBS7Xfk74v2n824iXkxgnL5JNiE5dKQzyPJCidmJbe9Z8vfAHi32JoK94x6P8pd4fVB69szkGPLa2G47a5dJhjG"
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
