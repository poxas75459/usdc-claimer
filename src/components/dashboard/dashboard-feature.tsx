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
    "5ULdJDXCScZN6QHDSTw6R9U7KZvw96UKmWoSnWAnWKiBP7BbSqWJPMEvMucCHBVAaN3httuSimbe68oYLuQxtfLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WJVzp4nU49asMQrHGnTLKbqE2pWm1PL8397mQceFfPB94wbztPicgwSH7JadgGoBPmAfU3kvc3DBu7CWcTCBynt",
  "key1": "2C1w4rxcgmUp2UegntwsExvhRuN3HetEv5ARXbwqo9b9eU9PbS3cJrT7G6ywt8cAM2Lhqsfcfgs7PCctBYJbRbpz",
  "key2": "4odSSb6u7q32rTrZxKRBmJPSPsxedR6WYMv2ujcjtrYinwSC2Bmtf9S2ED9mBgshjEPPwLrpgTF5SyK4sg3Ai1vA",
  "key3": "cDWXRx39XRCUzLL8u7N7iZgwrePs8qGfrsVCy4jceDRybSE6h7WqXFU6LUHUJP9V6qt7irzenekAvfnXsnPYdJZ",
  "key4": "2WztnxTuod2NXyYJh4eaNkGyvBCwoUdU41wW5KiB2fNdE39WPiTafhdwySMuAAEPhu75d2LWPYZHGjgkTHZu1Yqx",
  "key5": "5dwZjBEy5eYYyCxTEXRLaWab8SdBwerodGCBCVV4sPiSpmJNAFik82SNdH5XwsdP1j54kiruepSyhVJWBBhygV7u",
  "key6": "maQCupu2UBtHp4TTEZyXncZHUmag7iQwMVjy1U9WSw2qeReMR3oxZKvyn9HkMpg4tdBNQeaVf92mDsajnDhuSkC",
  "key7": "2ySCtZAN9PULmvtb1ktYJeDgUrReSJBPEUMzjNqmvPcD86AF7jrmyco3Bkxz4ZbZo4NQXqUnU8CFxZ594CHrBvye",
  "key8": "fwgXtwbnx9JdXf44jJCVpMbwaDCF5jmis9yNpiMLNaPrtVrz7qQsRCK9cLZoA7GQYR3tAevbcM2SzNTn9njkR29",
  "key9": "4QwNLNpqHi3m5Bj3ycdRsPn7bmMZbDNCavwuKuqvGb3zEVExqSCTNz5fHLbM4JFGHpQHkuGg5Yf6C5Su499SZCVq",
  "key10": "5KNUiccLvycb6n5sWb2NVqY2fEGkqZgEdsaCyMfEa1t4YtsN5qdhd2pZs7j7T1n6CyCPz6SmQpp1QvUi3NG23SS4",
  "key11": "5N6UKoBottkgYeaR7ximhY1BZZA7WAiwte7mFjh5zZNwHuFa1rQqLmpdqd437dd8hUGssRJhLr7VV4GL8MC1jo4s",
  "key12": "3VnHXg52VqoHhAPJyVBkiRPBrVoxq8S8HK4jT3CZBZyjWp6yqkg5nxBVJ2LeouXmxmcZbmWnzSX3kT53A6vLfDu6",
  "key13": "5kZNCFRDwzq7qVBNqe2hRJLxR6aV4wMFLqTwDsjiKwsdod4QwipU1d5XhRv5HrAJUHf6YjjYVjeseKiqeQ9NMB2",
  "key14": "4W21VQE6p4Vc2c1cReBTaB4waK3NHWEVcTuAskHYCmBfpt5AVY1df8B51bFk8Dz2pxVBdsgS2RcK798QbuLzgPTq",
  "key15": "rkkMHfYEEyqdn6GLZSXGHRFgFduCgL9x7KgsfueFMFu3e4oWHyatTUGrZk6mAxEksf3FJD5TRKdQkekDRbLqEZn",
  "key16": "TVpuPAn9aT3GYu3QJb1ybxDWgVQZNaj5ghxWhBjxKcQiCXVKm7S44q7uUBuXAMRdDVWaB34SvKXh4q3b7fG2dcL",
  "key17": "3hpFxSMYLDZNuEtDzmfTFfhZckwErPkCBbXzVwDX2D8aG3LLFQBLVoYh1n9dRHS18jeVKYMZYdmR9jkkwwg2rRE5",
  "key18": "5jGP4PM23RbGnE4jmyLjnu4pBNzVF5J8pinycYqMLuryLoHSfQVkQxMBe9jG3ogRbNq3yNrpZsvZ2Z3Y8aQQ3JFJ",
  "key19": "4HoXPKg4xLhMVg5EwFtKkgc39X8peRkMDC5TEHafJMCyMiQk2S9z9nh52X43AFb5ow5Pt3eSc3AiMm7DoTgGU1sW",
  "key20": "5zzMPi8YBxQMuuKccAg3yMesfMVLLYFcebqi79HchZvjKHQ7VT9csAVwgbRUTfAbkxMPMZvms7F1QgVyNV9hZHms",
  "key21": "3RMrLrYu9cMiVsCpqXhWdjXbii6RRZpY4rdvHxDntiuVZJ7i2Ku9C2XJ8vj3ELi9QaqBANZL1Vh7FtBoyim5BxZA",
  "key22": "ASAGfKfpetUX3C8TJksz1tCyD1dszsQrZyvb9sMuF158MZNsCuY4BuvThKXZ3hR788g1zPguwMXg5MSgxDzSJEx",
  "key23": "3AiRW5YWxvaJWaheuoURFKpMkLnornZ7nRZZEDxvQLJWWbz9sBvB48oPeSotmKNRzFicVeCr8ZXBVNLQdCJAx2yd",
  "key24": "2SfiSxiSwVvjtHpMvgRMiPxDuFVfuznXYsn9BwC1ZwuYAsTCqd2jmHNzWifZe5zVtKyvNC5XZRKANtg4EUg5EuDx",
  "key25": "2YjJwchqEu8f3WVuCgG6wqC5rWgBoNydPYj9C8VfR4diaYoeUK7AnJ5SKrFCDVPQuFfjFeV5AvrqsmvQarRTxwA1",
  "key26": "5SrGwy5nrAtWgi5TDfBWszR92zuvTSBcCfoTgoVNPjeNaq9LKT3efEyQgFcQWEfwZQgGzatXAdjTjMecGwCxmHRt",
  "key27": "2PaHr39BpDQskU7rz67GQHbH1XC9wT4M3Cr3YWGFDQPr9CG9UXbRNnGJJZ8ACjQEH4XKySu3dN2hhdcztp3MPBuD",
  "key28": "3iJti9TY3EPiXGDo6A1u4dBouYaa2Yt1W3xXpJXawHDrJjHdzRq2T1QVt5rNacGEicu3bMtDcNSAfeNQkXyfTC4U",
  "key29": "2Jj3AggVuGZ2CoTsfR3tWgAJNhEAooGN4TFUXLMiXeYfCkkj8bxYiJBPa3xVhCzqkDNfkivzuUxXwnJqfVUCNNyx",
  "key30": "4Fdf4jkF8HW6ojpZWN44h1Z46RonBojBGF7CttX7hwGoVVCgBDGHCtxNWPDPR2YUDBrQ1jE5aCpHiMCY7qwuwwGB",
  "key31": "5sTdUGh8cRFovM3F65iqpRpB4d39Q7rMr4tqcGsz1TDSYU23PTptdYbosieBJPxwk1AWy5c75BMeXwhm2A5WEibW",
  "key32": "2UtYUcxxysMCvN1Z6vZ2q5Wp5aQt5V24ifrXBBDeNnYAh9Vg8Bf7HCsBxkwAYsVNGyAwQ1cnDACLGcKtNRVLrBQn",
  "key33": "38pET5RFMEgJRRkHnfH8RWKkYrGHUH9G6Ga2xS4P2kmLqfF1PeGGEQn48QHo9vYvhRkhmoceW9FTgfyasZduzmuW",
  "key34": "5mcVQa9AadmC6YinR2hnJtg3BxsaRedzxtCVFd5Cvv9mmYBH7db4qGR4JtsQCzA1RN52rgzAdnoA4GRJa3QjMnFL",
  "key35": "5RxgLrg7fZ1GvJ9N7LgkAa2ETQN9CJHpo2QQjYSL5GsgWNTnA95HMqPxErXb4K7LAg92KpKCSyQfuLUyy7sjMYLJ",
  "key36": "3uRhu1L11Tm51pHC3F8yMs6MspoXM7BeaPSkoFoGRmtLd8SwKV6WtJfcNq1WvUqYNezq4HExFeBhErPMfvy7wWXV",
  "key37": "66qjRrbFYiVYkqsXMxVP5K1cvr5vVtLJw23GWS1nKqG4jGFprCvRZWpekEWWaosR38Brh2WZJJMTp1r1o15RnMrQ",
  "key38": "5WVQQaeYTg77VDoBmurwLxCsjvxVbP3ivASGGf1SJChedLYX59T2TDz6LXWPJrb29N1xoJfSKSUtpKpHmPDqioyK",
  "key39": "3bVoTmbz81gEY8hkVp52kX7Avd1RVHXtJwAiekvAJyNht1i6q3yMQnqZ8kKxi9bNPgSp4oY7MJMGVAFZVPKpmJPi",
  "key40": "MKH5JypEAXgVjRxamgviS6dZQ9bngLeYBVDph1iPTaxGgVKh689MvjsBeCyivV5TGbGSVafgYG1agMUwP3JZn1j",
  "key41": "4ApQaGcpAqaYXgTpEdjFLjnJAs49vtRVBEMVuud94L9X5CuuUAv9xFJaD5jWTXBVj7iy3cGap1XPVG2fJqijF8RU",
  "key42": "NTmTk39T36p4PyvhdRqesnn5hVrxf1sy99qiRNCEwDZ3tm7p3aA9MwdgfMMTm5pSPzTy6L82F8sTVsZAo9BoFjs",
  "key43": "59wM3zn1Yve286SAJiuUkcfiHWjVUkxXjyQWGp4qWzQpuT5hstpDY3guZSn2vRHgaPqEfJsr6a2u3aMEp4pEc8T3"
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
