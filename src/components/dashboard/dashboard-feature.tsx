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
    "5fsa3vwpjFaVazsUugmtem2Au3X4R9wjSryBswhiavMRyAdAy8WZJsyXzpbeeDpQWVVvFyTWTsDhsjNciuRp6FFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eUGncADazCBUScPviK8hhmjFZ97m6U3BHeNMkmRsQ8d3K8uDxBWhyVn7RMeQLd9r4YFoLDj1JPbQd8tjeziNMNC",
  "key1": "4zGYsqUJANykgwhQDiVFGvSovJDDj8kPQNzgtGbbMToe3irMSHEQU53gsqqRAt6EWyQ4v64EKkY1cRJAMvJYbJtX",
  "key2": "wxSydQuYiFPYiyd6VyipNNKQR2zcWUQxKHNZ1uKpd2psTPsGrQGrZKA2eGyyo4C2o7ao7Hn1E2QdxsYtKPhhZu9",
  "key3": "5Ud7N8KhSqubChBXChq1uwf35NwfoDeas8RALFCoTdyLfWgCUtUZWtxU9Wu3EYQWC2CXYZjrjCWnQVBpCJjRn1ER",
  "key4": "5pDgxUokZzpUZp7zSEYEAPEEiLdmE2FhsGHdg9ZqG9dM5LpGWiv67nUt2RAfN2UtCB85gjPFsgucHybD8XiWw3ip",
  "key5": "CirWya4UKAFPKtPnVWdpu5cgbR6nhAtqgpeiBBbFpRyeTfywM75Gu6N191oRX2m31uKXGrZyfrL2oUwgbkn6rYT",
  "key6": "3fYvKDK6Khdwxsq3a4VTyaeM1uKcHPGukCXUFvoeS82uweUiJNyzMHAo8qKsp1sxoLhavUjYMYeYK9ZTNyvMnKjd",
  "key7": "2NxqyQPvoXr64XzN2o3CghsuSxiom8mQQfBwYc9mMo47rAA3zfHQuGTGSMpMXMcTkNrwLXf8KDEwmsCLQx1k2QQF",
  "key8": "3isKf3QMv7kDfJ6XcxM3b1Jp9fXQoS2iZKD7KbRx93u3fdgUR2sXXvZHJoDpZ6TJhXz7AmaSE8xhNPQeLcPUGEWR",
  "key9": "3423VyYgZeFztHwdR7Fk3UpFELyVqZSoWLj35nYDU2FeghU1hFKdraqiU6zVedwhaFpgjt8iPKYmGKUfEJZjRJq7",
  "key10": "3LmL3toyAMXQNHAG4ie5zwHbT9jzjKrFXcpiSj9UcaFnafkvoaA36FzfRFBAwzmffcT2bcYF1s8p5h8dHcc4zKkv",
  "key11": "38rwRLxQhBaNZagRzq5TFV5bW6kMt2X1bFVbnnY5dseybWgcXKptHFVYWdisYEwYWBrbWvpW45riVudda3v6kBZb",
  "key12": "56t8qRgdpryLLU2TtZFfnqg3cTXRBRqcVREXvTCHdZypZzWU11ALZGQpf9WdDzo7MCTzWjYyavryCPFiwMnYBqFe",
  "key13": "4wQ6TWNnc4LuyK3EadSeAr4bzYKt8Ubj7ePFcJdrrmukQB3kFPazsiAarWistt4yUXu2h6gLUuiKGAMkgrkZpxWp",
  "key14": "3aS48GjtPgo5d3hd6BywhXjv7VKJGPk1yj6CDPHUPidpSsLBvbmHF2iBZnwCvde78Scf2Ua5MfSvtKKizTVXzqD2",
  "key15": "3FCaP5MBQtnLSeuoCcMXWrj8TTjYdy6J5xhjGBguHnoirhhskib7QwKyHmxP6o2o5uQ8BoJU36uoDARXQHXVcHwr",
  "key16": "Vm6zzo5ciQEZcvaUog4zNJiAA2wF6tKpN5NwAbFhNsic4MEeupCTAVnrNo47qLphdWGZbgCRbY5CtcijSZKW7jQ",
  "key17": "5LSMCnHsLEf6SFyP83vvrsFG85i3rG33sfyRSWaKFbrWzyEqWuiCHSXcbnqwwUrokvYM2h4pt455GbtRDhDFXuh7",
  "key18": "3vhX7XckSFT6UjEkc28F4wBX3rnu3YT8XwPT2EebeWgVcP65jZQdXkGoP8bGKPjc6brg6fcKxfjG383QRzmbnYxx",
  "key19": "3du96a8Y7pwWJjnYtZAfLawTEVcCctkHovXMF3gD1ZLYvsEFQafSBwZEqx5CoreLMqsQjuZRgHHsbYJqMhtueLsX",
  "key20": "2wVwKeJUSd3J8Q9YAk4VzoJV7ubuJmGe8DUtYsoYjNGvexWErtTDqT4zp44PeV9HpbsHM5PC81ZQfvPch8sns6nF",
  "key21": "4eE1hcCuNvwuzrbV3FwBg8YUHsZzXWwhgkzYs6aePBdTpEE8gQHH4VJjh2j5P6JWFzKFXyYcBaXYHwEM2nAa81Sy",
  "key22": "4G8F9jy68wFv9dqCAhgnFMxgJLiGSk8QbzMePc2Bu71m1ktn8PAkEojn8QNXtixq15aqXvpgWrgWfL7kvfZ58N3R",
  "key23": "2X3YncJBK4cswJhGfbP7tLda1uYpVRv3sVu4WGepHMEHR2ckXk4ec7MpGm7eybG35kFiPmMTEUceVByZCgMofirq",
  "key24": "3VQCSoy54GkQwy2fgkLAdzf1JxVCV8PtjqqZxmUUWoULsX4spiiSzLYPErhrneMPxMgyNoFzCh4HmUmkbdZhHT2H",
  "key25": "5jUXtScKTMJuJoXWx1YfTmCohCSNcUoQhnd65SiZ26BKmXzoxQMogf2BSbtH75m4opEyjNee1s4eNR6tmdpyKjX9",
  "key26": "24wozkywaEhFGUGb92nuF5FhvzN8pRqcZbpAvL2vRjW5Zeyc3w6ykBn5mtCn9jKZ698cSdtCje4x4Tae2mvbVjhH",
  "key27": "45dDiZpujxHZuDUCPhLovfTnRBbp4boQLTb69oUbSQNQnzfwHCua2YMgLvVDAkpuy9LDAC86J5k8EP1rNmTW4f9c",
  "key28": "3bYjYKxmS1p9o8H3v1d2osd3x6B4KUiXzn8a7Np2esEVAgKWgx11JeGw9EM3J89pxeYM4Q2R5Ze2quiE2TtoTXtZ",
  "key29": "32rRVM9WZNeS8tVA4tD6WhmBvyvisAeu1nufzoiZjx5rcAsKLWHFKfmMaqCdHCdiNRP4qWVnqm56nLMxBSC9z3M",
  "key30": "5zN7oFUtFhxRq8Hwz9DvSDFr1G5xEPiDn7BdnvJ3uGn31g95AcMrowbhBAkEYYXDgYMkQAE3NXShfo7dTijkYa1A",
  "key31": "2XtrnwuVWDqFxrUF1izX7FfYP5LSvbnRJ2762hSX9AZG9Eh8Zt5US4VBjq3DuC9ccuBxWxUt1VXFp8b5f2wzxDWw",
  "key32": "2QLHiF4zgodhAr9JwRLqdReu3FEPLHug36UHs2AJFBYtFXACA5emUm9ZFHjJXp8J7coJdgAjog6dDDAmfGimu6gR",
  "key33": "3PYj5C2RgWQGdNwcRB3xpVoSHgGkvVv9bp9ucmoZ6KmrVM23CzgTJ14ddoXS47tBp9Xz6ufFMZJezoTHm3P9JLcy",
  "key34": "3XmrFpvtEP1QPXYRkwuPCNfsRd1dcMgnNbT6zXxFcDDnm5y9e9JvLwRJJNFxSRr8Yt7NNw9NfqwBnwcxoJCAJeUv",
  "key35": "rgXGwRG73JBzXiNwDbmR8NSZ8as629RAP1ibdc3Yg7we2X27t1sRmdcrMM2YLFE7tQbvAuzjE7Y6GGzScX76Xk6",
  "key36": "5EXyexH14kEesrn89XJj9Hakqry4n73KvbtudCHRLwzUA5uDVTi9tVbNQ3sZRJcq1jnC9ei7J2z5dDwqiPGCicDa"
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
