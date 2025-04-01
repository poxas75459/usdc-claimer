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
    "5NDrMiP5oxKHR1EcPEknG1WdFW28igvvxassQoxDgnFsver99MYZLxDF5fK9Zf8fnXtihK8f4bmYG7zSnBbPfioU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AmFKyJCp9feDbWj1KMkoNeCRJaJnTbcoiZkhuQnkyCJNF8Y81RrNVakfzmzHybL79zyPQzLFZSrEWDczGastCDT",
  "key1": "3Ffhz5Kn1nJMJjV56uh9S2NjB7uPfXd6uaQiEEwBKekaEt6kFt1zQ4Zd8QDCw9TtkUGYfjCcySaeM1fSMi8Lif8H",
  "key2": "21D8VD22yoRuKn5DK8Aj1rDJJWioiWBvhxB948mvQn2d3AjebtnsVSXLbwy8UnW1qhqAWMdiN7u5PCsgbXX6AJmw",
  "key3": "21qXyonHBXorggxMcTRc7SwMNwVihm7kwZ9wmYAe1cZdXSo8pgjn8cTCcapiWkNxrPSKoGN8FzWbQECzWe9NEcCx",
  "key4": "4ZGGom7gG2VsLmFWDqYjARSnPpBCCeT462XDuDJG87xNQnEQk1HtAMycvg5XEv7A4HwH1rCWMSrspb6owe14T3N7",
  "key5": "52VPdG3Pa3K2Ear8aubNtQ9vLh4Pjq5q7nG1gqLQMSTbUKWrHJ7xhFY4maKVG68M5DzNLYvB348jdFEVuFA1Aeae",
  "key6": "3GgF7VG8yK7WHu8u2XD3xiVpbCeMdHafv2HgmPWFBQhdF7j6Ra8mtnYoi6XtAsuCdhk7eRCJpTK4V7nrxdSyzjgu",
  "key7": "3Tn2AisEyxb7W8YkRPmjrC4qcW5ahzxe8jEXZUyW9wWy5y7cWueCiJGMVpWY585H3iqCdL7xGW7fYSxxoL5gJawK",
  "key8": "5hMWj7M3n9WR9TrpfxpvdgWf4ocHdzyzxpo3h9oU5DK4866mEAJRteijS8fJyHtestL8zjFfoWCHDfTtmAPzCneE",
  "key9": "3dJbDNjssrRYckNeHhpsPqNNLHUA2Mx2ueeEWgF3ETi1hJmpMyTq4fJiHPubwxbz5e4933MaVuaSoad47i5eXSoX",
  "key10": "SnoC3KvGZuV3HRHLhZERPDvD4Lgdhb5CbwU8aWRAEEBbQdjkU2T3dwgWtUGJg1dSf6r2iX4Qhp9imAMifWkDJhi",
  "key11": "5mP86PjNPZ8NXtvdDTjknoZbxQPo3eRRgbveQr6S6vBrGPCrJLFkfZ2YMHHkFsmKQUwN7kJPWKg386MFC15rcawk",
  "key12": "2kuzAsUXCS2K8zfjXKbvM9GR7XjPwXFhE24S1rE4cmaawB2Mie1faM1XbnmubPQBikjxvHLWLD55TwG3M2CMvndJ",
  "key13": "5PtL5NvqC3rsvTVvwJN7MmLgaotLX3xmAJiu1jJsR1WExTN2UZNhSe86BPK6owxa3veX3bKHBh3LRjyqSRdzc1us",
  "key14": "2aYBh91jRVn9r1QYP12XyPXSWHz9JNiwwFxg77zyTmtXyK6bLteLnCXu1C8Pga7XyLvsoggoMU4DL6wVjRVJTANV",
  "key15": "H7Vr1tDCBhbU6hgyNw7FRTtPZLy5rpjRcv9CRp7M3b4kQPPh1DgbvqEmNGc6vbrZ4ASTPXkKwQK7uQriDTJ8Jx1",
  "key16": "3o5DAn5KRutQjUJAn1tU1nMEepPuSQ1wS2djDSgb7H974zJsYWf6jWYhQiCamqz6wVhPY5MsYMmprbAnM28fVh5m",
  "key17": "3ZSqyKJAsJn9CDEJ4ekYyg75AiYA7yQaDTzQ99p2hr3KamogPpgr38aC7nQvjVmuzenQH66JRduARuVGG99JKgh9",
  "key18": "24383B6virVNr1nVFSQ58B63X9gqSiMTxGn1J6Gg94GURp74rJ5qKT9VDfH75GzrLthkEACRSDqKQZv5Z5evqto5",
  "key19": "62PwGvWkS6Lig5Ar4zhgUHssha2FE2LT5p7RBU5bdP9ALbYWpaxwBQRcCipb5qrcd5Qm54v9TSssFnpFbEqjVceP",
  "key20": "3KTHwfyMsMgQZBj4wLMgLJromzHMzzmW4BNsKGamRAuPwjYR2Ah3FyEjifMi9U9GxtocJJWAJSAEcz16VYFxqd7y",
  "key21": "4TDo6eiuBzdj6y4VoRxD7Aq6VXnAUCPMi2MbReFV8NokAJ3irZpT4skYYQoSnG4Ldzc4BP1mHnSAE41czxRwFaBs",
  "key22": "5iHnqNAo6LtMReMLm2VVW78eBhGaARz9nWP6y54ojNaLM1issMdfzbHiQg5F26D5J2QNcnmfZij6YQdMFPDsoKex",
  "key23": "4pZA2ExuBRQiYKWuZYKGL2Gzfi8SU8a8LS4R2K9GN9LhX1C9iQSXfqzh2DSM9uqFsU9D5P2N479yCAHzGWgq9Mid",
  "key24": "4xgqG5J3M9zvLBUUfvGJP9DDfL6hTnwxXipTV1R8Wm9siTMA8AXdu92UFxKErGsGSeXncq6EzqU9eD2QWgYq1bLo",
  "key25": "McaAP13UWHCobqxzHBe78AY52WV3SN31AACSkrWfeyCLifhHJzD2G4Pw2rthpiAGsY9UvnZaxVoog4uvucufddM",
  "key26": "5PuriRLa6tyJVKNqaGn48f8XaYEk59JKTMiapjXAGG3NN7YEFqXDgfTVCpwkhVXLKxbTK99QtWrYSyVS5QAbnohf",
  "key27": "53h96sN3JWE57xmMk4txAhapEBnDeRCkug1K4xmrA4qeGPMZ1rCsxVQZWB7s1sQLG3Q6fQReFYCdUHNK1SNUjN2E",
  "key28": "4eSAKjthWT6ghb9LRPDEhTiFVMaEGZTT71yNQmPRX7q7QkQ4LmDQ2m5dqqV9pMAViQCkibPnmEgyt7ALFNc9dF6p",
  "key29": "1fuZTsrxemJmYfUbVugBs5LrsSk7vBtRB4c7orPpZmaFcau8oYPBi5TMMsNnt4xEFiC1Mv4ohcr433UfqbdhUeu",
  "key30": "CRoUBEkRU2mQ61iooaqhnUZx1esyK7HnUMTUTX7rxzrxjxs184Y1giDSQ6H81EZerjzuqWdcjLEkDZ5wy92KpRo",
  "key31": "2Cygt8mFwz1bb8ww7yBuFMLprAnxc5GfQQE96ZAYPk8D4wgxBYAZLkJGJ3uhEeTzmzcWjyPiMEn5ZW69uK5h6GJ2",
  "key32": "4kArx7aGidgFEu3CEBiEnVFCPhtehCBf9uTjLZbuaiZ9wSe5hkTjXsQZtY5FCfXThwSriPEEkNporjKJFHRFM4er",
  "key33": "4gidspYv5tQMpuGPFCxguhhD9kPkHuTedmXSgSepY4rVweurLoS6yTFnTjyGLciVdiPuARp8mtiLbEXdKzeGaFst",
  "key34": "4BbWfruLgCDE7fEBtvh9ANTWMiZ3KPRY4XD48sPPGeBhfscxbz85wqAbsv6hWDnNHYHaToX2RSx94wxLvVvzp4sz",
  "key35": "eNUUhMVcQWHZekJkki9eWg3oDvFejNQCbdPpMsYDKQV4Dpa28izgqD4rnzANWRvqQ7yNmqv7vXGy2TxRnW5kkaw",
  "key36": "4fmJH7RCPwKessHMK4GNuaWvmtJixujYdEFT7ut8DgVFAd5cBWAPBhVuJA1quP7mB5mChBnw1Lyte89cY4ix3pCn",
  "key37": "2zcQjMLnrpEc2tCtNMJtdkxc8ob8cpnm6oDN7hByhhgbqqamXh1N6RBzc3ybp8asrpkriWmirWzY77KtHuAzhRsh",
  "key38": "5n7Frv8m6e19eXTYhP5tfqELzgVNScxqarNQa6r9WQUUZL6Z2dCnhP88YgSh42g94MzH4mqzD7a6WUbvHC7AtJ85",
  "key39": "5aBf6Q1k7eu4KuKTtsbANyY8h5zsz57Edt29LTsAvnJYSCEP6Uu5KnGEMZXCcY5HGqQRDtywSYko1wQ5PwD7sNTJ",
  "key40": "3ydSGekrFiu4C385YUaQrR36beAB3fF1q7xXEHYURzkkCCNnX7D4WcY26HcX3AeKLq8KWT5CDWg99k6VTc1zmo6b",
  "key41": "55T2vxVp6FwSLeftubr5H11giDNRBurH6B8YW76BMmhrd386sV8bzqxx6ScBPpF48Vw89oZm1Bw194S4pykpcoTp",
  "key42": "34GkGaApZZU5j9ZyspQH28jBAunomWoPNTDC3rbVQwmamnvppUWM5Bvn6yhXNhSmxUi1rCipro9T5KgojWYDsSnV",
  "key43": "FuvYRhuvype5io5uVGUozb1UhXX4vzDXPnmu23kR94TwBhHAm6WTa7aoSsEsq1UqWJqqVz2GfW6zusvcLqTrWve",
  "key44": "4AzGQ1kggMRHoHp7jfa6La4ztTZz1JvdvCrLSWdCKKnz5poT82Nzr7i78pS3HkzHpBTNyCpeGoKbZJr6HyBqdyJW",
  "key45": "2XYo9rHqiAHXZ1VdKyG5GTPY2iMkhxiDJkqHf3DcDd68uxoCxekyY9gk2mMhZ28SrTZDXTvDEnfMkgt8LJdDoetp",
  "key46": "4VbgDbfZjsGJ48LMvD4AJiAe3MPq1WDHLZVBR7jLq8fmbLGaWvz6uA4R63G4uAXgxRM91nxmqywYhAVygiDfe5bM",
  "key47": "3J5DL5Wn3mw1dXcRo86kLnTahcz7pg4n7pSRGX6g9PMVNqa7jmXLDDU2d41pQpkTWc8FHE12pszroxHPaCgSuaRR",
  "key48": "58aKRBwCRmJwCM1LQrwV5Qne2fvDd6ScMtnfkJ7BygvHiNmAF1fWcGxFpWyDFv2EertRqn3kLKmEamvL3YMjvdLv"
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
