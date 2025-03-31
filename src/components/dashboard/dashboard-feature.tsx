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
    "Ja9ivs39gxFKjdQvHfQL36WdA783g2x6ahqFPFYrevqtd7ipREX1pgALv7np2sQtdRrpdPcFfFnDdMaSLRE9uA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dDK4XydPys1pxP9BLQMrRzdRFdQhWgoQN1FmB52PgJgsdU4ZJChecZ9QRaWeZ6gYxhToQhaDVsXtSmhjwwKbaTB",
  "key1": "5CUVD7hhSPnSkgSeBEgKu6d7qcxG6QGVtM1ya75zQPUjEVSP7dfsLDoZisUDs3gH3Au9EHex9JGE3TsRaQetfHte",
  "key2": "5p5w7Sp5kvXEhVkbKM746tNraFmJ4fn5kB3rj32CCZTX4XhkDxsc5yZ4BNy4K2NMwUZFtJmZCsYhLzcsGzYPDEbq",
  "key3": "41gJBaJ52YiHUxsq4BHZA2okFgUEoGPW7cd4pP7XuN8ucZzrW8vrXqxGMFZJNy1JmuUPCXA98mLDvJaQEgQvBS9C",
  "key4": "c1w3QHuTkd4p2MmKGEqTQgHY94to8fVMJ9eJbnQKK85PVVP7d4fQJeubpfyyK8ZGDDXN1DcUT12tWsiszTv7w7c",
  "key5": "5Nhmd6WiKU39zw3w17HjQyTPM5QC7VbW5m7abjeVMVtg5PNt2PeLXWuaJbS2KHWavyobM4Nw3AtaFBEoiEpRsDBm",
  "key6": "67gL5Jk25TCdCeveRPpj5TYfT9gffhoPqQZ8VT8VHE7zFB7cnUSxggLLdapVoLndsjQAUshwkcbmoemyZ9TRKpMD",
  "key7": "4bZGrvNm5cUM5NzqiL5XQbSjv3iYtxpkuP6Hc8vmnCXCFsx6JvsNp4DFPK2iNuhiB59StyDT3jQduGVJWjMq77r2",
  "key8": "4MiSSzaKmpVEkwc6Dzawu4evN1dXUEZV1whFfVAPhFGBw4Joo4noPkbi3PRgJxPrJwQHxDCAReVG7BBBd2b6bCBG",
  "key9": "4gX7KvkoyQRPqtqZ2QZyZjnqjyUq9v2xXvkwf3Ax8NB5psBc2GehV5627YpVeGU2ktvuFyqQrUKnand2m4jidfBr",
  "key10": "4Lp6uaB7vz8fXXByKp11zwGK66Lay3Xngrw4WN9FpQGpQv2hmzemi67KfxbktZrjaD6RttSget4ktopojSZQuQ4",
  "key11": "5qZnLyvghXouqckx2d3EKzEfg3rJgvXekx5QbqDKpzdnpTRc63aT34mLoejM8F9TWRGZ1UzLFgrjtGhP3Lctd8X7",
  "key12": "49PuDUUrWYctMUWs16pK5iytPA4UGMH3vdPMDeA4XkHi9bjYuLVNbujLPBXC7PQYF5vpz7obmqdtJVfWnrveRXL8",
  "key13": "4L9UAqo86DDZBZthbDqgfe9eySmp1f24eN2ukCWyRJTfxhmk6FNPsx1GitrxP2638Wm9H27ppSzSD9am5zSSkaga",
  "key14": "28qb6MronYQU793p3gt5Zqh1PLTZYaLwbKtE138TWuffQfa3rwBDUTgDHg9bMTrxkNMoaBtP2kRfNsgoCrwqMae3",
  "key15": "2wFwuoMLUoqzbZX1R6SQga9XE7o4UeFtLwQKx3Wm8isaLsx6PwAm2hksPULguoLYZtipRvKKA118KdcfCJUXGdta",
  "key16": "eX2JyZJa5iQUQXxjQ6x3pHaCGvXigDpoHLyPFFTsDabRy3LfaQuqRqKZv6m95hQFGzMQvgW3osB5KHsaCah6yMr",
  "key17": "2aujBER1WpwE8C63Zk4uZThHkcfwSwFhKtnDgc51WE2sCyBdUD5DDmdXgCDPxuBuWCvbUaW6CZrdsJ2ngFoBJjzB",
  "key18": "2bF9xBXX4L2dQ9F8ojqpfV5qfRF2ZkFEZqJ8vPXD1zNeuKQ9EsqbGbdHQCJokL8xUWPS9LdWWPYLq9RmsxjWPszd",
  "key19": "2PyS2te3uCYaimJmiM9W5ZptQez26U3BuKhFbZnpiDk6PDEanhKyjkZzboR7otSPpMuUWdPoVp6iVzAQWaDmSqrj",
  "key20": "2YWpX42pm3jWSMNTu1S68wL9rDP7Bs8gAeXNptdqcF9wNPX1SoSbn4FfLrZiwYvHVpDjqFkm7odyezYagHCFUGSU",
  "key21": "4iJB35y1bm5oZzzhDefM9qbhiymWBmCyzrMZk1r2kt2VqFT1iKoHDxjUag2j7hukdGfd8QTh9scgxvovWMhHQhTu",
  "key22": "2aJxjoYbxB8cbvHbiAnR6qnaHQzkjwhM4oyYvtb8r6r2STUsHv6FF2SDA99w2FDSXKRxL1UK2SiE3pjmnGSCW5RW",
  "key23": "Bi2DbV4mSW7sEuUFmYc3pNWypoFiPwsuLd1LhqTvq6EnG1r58dcY6JGkHcC8tkL31vYQfWJk9BLwUMg4fjHyiE6",
  "key24": "39zYuBg15oFho9ck4ToYZr3wDs1g69TSkWy486iPPCcWBfykAfj4WSDTKjCwgSDXhrdz1sn29evjgE56dbx9UdhD",
  "key25": "4fnNYQYnN3udFB7RPEh8Nnzji3UfGxFX2AFVPb9qfhUTD5Sh3KiW72fCxnnxfSrtdFP2Xm6pQxeXSj5JJMixgHGB",
  "key26": "3XxD6qij9y6af872meWPciupAVatWGqUMRgZPBczAx2omNyzc6cGZW8bTuDvk4f2BxPFQmhB2PPw6MmsnXFVcSiS",
  "key27": "2EHNvJAcKaZzXe9xU6GxKGx1pBHY6RQPb7ZF7uCigzXaF77KpPf33T8Z4QSdUR97ZsCzzL8ChSHDtuGbMACYJdVw",
  "key28": "Ki2RwNwrRRjgFuEFiKYefbQRVKKotAUghekeA2YXiT8NkPQjBFjAJvhURTYpzEjxXTAj8kGNj1CXWk28a4avXYp",
  "key29": "2u4eiuSX2YnhLd96MGnrBoHYhUeMKRwo9JB9cXN2aHfSyTQJA8cyQNNbMsNLMdBDDCx18pEmFzhQus3MR1A36iCo",
  "key30": "3aAxA52nX8gFvDHYjRZMic4RRzMhygZH2u4Q5KGfg7i5y19sh2TXWCi4yQBh1PYS7WwgNPExmK2zgJJysDgpA1em",
  "key31": "3duV4Wyi5uDK2tkasG71w78Y61myP6uAjhmFs7eJJA3cXRKbwheCc68FNofEYQdDPPaXpKgSZ5gD7ZhvrT8AvSer",
  "key32": "2MajY4ktNpodqxN5t4o7fRnWeLZkuPyogVEwk7ic17QsrYfyRcG1xsGY3wjHnQZ7dDbS3vgRRdpXMm1nb47vp96j",
  "key33": "xLnjX9XNfACk1ArfggKuRS82iK5S2qMJmVf423XRvzN7Ca6dFfgJG97hfwnnNYnKgERaBKZKvJuZjfTxhvnYwfX",
  "key34": "34xBKkAo6Rjk97sNhs7iBBuCwhJnSsqKJfQGsgwb1Bdxr9M8SDPDCXEpEFfCLbBimwJbESRU54oKLd4gzu1rZ6B4",
  "key35": "62brk4qNZW4wr6dRmJLZGnoiBUi4sdU3zPZuqyXYXChwwb182L3BsyKm7NV3n1Qyvnqqd6Y7111qLhxaW5GK58gT",
  "key36": "34b2qPLKkWE7dc3wr9cS7crnQKRpmo2XQn6Lmm9tJ6yxbyhKK62jy77v61Nqm9PW9ZaD872bWMky2fTJAJWRHTa7",
  "key37": "2ytW7NJtGQo8XvV1SmMPg8p65eGfSjernSnKv1gGjEMP3gKQAeezVCUiCWz1PN7z1ho2XxzmRszpdA7sJ33SCvCf",
  "key38": "47M3h2BV9T7tTvFB92Wh4PXzujsyFSvBWcE4J3FJAdEBFaZibFB85xe5H19fjv7otzqFZQeBasyGw2MgXkeZbGYJ",
  "key39": "3ju34TL1vbgSovAZNmAyXRDjmHPZPDRifMBZk8upJYJfaT23VPKy7Y5fJ6ewGaaW7FaXZE6CrcnhJRK5AnWqVbUC",
  "key40": "3kkMJnLz4LUoqys1YkUQ2QHYugabw2XMBAgQ514KdKEfFKMHy61Th16ifvvP3RuUhZVMaBAE27SHySLA5ae9hhax",
  "key41": "2YHqMGdXbdD7DHwBvWvFVG1vwDd4N6psCQ333uKr72YpLxy5wqCoyzhuQqx6hHZmnDgqnGoZbiXeyjgfvfSisftM",
  "key42": "5ek8jPzBVUpoG3DLTWfCN1es6NygicstJFA9Sx4zy6oHezt4WWrFUdtHbypHWSMpRQeXZRtvWnx4UDuSX4yjDdoA",
  "key43": "2o6eFAXNgwEtneABaqK4YY9ttiBq1s8J44iMJqu55xu4UkoFnqvJGh4e7WSZXjHqFdUvjf73Nd9euUXKRDXUHCvV",
  "key44": "4V6kgSZRmosFb1zNS6iEiLcBzW2MXvECqpxrMzFgoGZ8kFv9PHahEcBKZSXQ7oNyt3hVfuxkHzYDz5UqDXaM6cLS",
  "key45": "21YZP2sWsq72QA3gbFkQqRodBR45EWepDX7KXJ5jCaxSDquJkuWnWM1ZAzCjzNmq8QTzEwEWn3YyeGkSyModiZGx",
  "key46": "28pco9LKZWf7RPNjsRHYVEMzSqoSHXeuBb7caJji7vQxa6LcnXvsCN2aievdjyotNMHZNgtTtyiiw426rjNRuDeH",
  "key47": "XruYLpEvKhfxPxiStpXmAyjjrauNKDF45ou5NapG49tZB49JrT3imxj1aqjhvqA4FneQnBYAKiVstu8GdUmXx9E"
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
