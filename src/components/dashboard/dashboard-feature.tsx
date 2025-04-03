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
    "57CyLBB8pFX3m66ZRH33S4rGFqxiTQZwvDeL6Ng5jpdJoXTSrh554AB8umwyk1ShMaXYEqNNREjCJQyEaKAomWLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bsQd62ikcK4qWUqeFqJ3cUx7eppW1eoSKh8hMDqNNNTnpyTqjRyVvcPUvPdjUPsQZ7iVx5UsZhcbPpirKMGWcVk",
  "key1": "5QKmbGLN7ZniobuMRYcM5BB3orxaBHFFvA9Y9rNPZWdkqt9Kg3CruyVd2ZuHVWHXm5WKzmLoXmai4UJZyFDGLxxx",
  "key2": "21LyRG8yJyboKkiUQCRGmYQfFoYJic7xqXsi2mMqPyf1hY2wffS2kDKewm9xDi2jruC1ANXpvuVRTiSHEo1hF3sk",
  "key3": "4DuiJQRHdGBbbvZxQ9jxrAuNLpRTYHsJL23ip34sq8qsAkpgqgn7ZETd3HU4c6Ctte1wBmJdS3yoEwx6nQ9uo9vn",
  "key4": "4TSSbjLdjeba4YDJdk2e4UE9yTLBr7eCt2PMsFcgSwontP7GhwbBLC88rPHjS1tKEWddLd51DKzkPdo3VddZp9ks",
  "key5": "7hzEHtViNFE5supcNPQzUFDkbrmGD6Xk2ZeXDngUjL4tGwCQjcYpDaUUaWpv1PLBAbX93gWHX2qrPCU3mTGiaAu",
  "key6": "31HUEgjf7ZSHjuUHA3gM1BRcKvCY6yaQ5xrGMwG5v9VprivAYzxs2BuDEqTYNKo5fWnhMxLJXcSXRKz1xvXAwEtF",
  "key7": "fGBZS9k29d9b2W7excvVUyS4grQgKGew1rfj2gPZT6atkdXdDHpH1FWB2BYGGVTdDnByWBoqWqwknztCstqAvpx",
  "key8": "4U5PaG5ZJKFUgwVnFmoet4AiQJz14UDuiNfmZKxzzENNe44JJUK69x6f6hG9yrnKCYGHGUfvPZkDHd82kjv9vNmf",
  "key9": "5s3rt4j1Ch7qdZx1WxVRHHS6vha846ALMKAjUQTveBc5h4PpHrtLebipNJDEHukWWBBhaJdjTkq1pos3xcg5MhHg",
  "key10": "3XUvJSDxq9xQ2rBh48eSPQP1vn5QarnhmZsYA554eZeM6xq4eLazAaw6PrFkz6Rn9EA68dTKfwQSsa3aMW3F8Uw",
  "key11": "THdLXyopWVhSDvFbvUvanCaPEKvwJXMhr9MXoazxPWW3zTisr5tBz5ghTVXDSYY7xrGT6yXBrtyUTG9ero7R2AB",
  "key12": "4i8tzATeUCEgxcfdMBMTE8jE4PUN9dntXnc6zq2WSo48zJB3tmSYHDB1gm71kujURoJcneNGrq1MRSZXL6g6pDpD",
  "key13": "5zudTWjDNwWpE2ZsmM1L188LdDxiMF1Wy4WgNq4txK2bpLgbTSHMdEbgwDUZLFfKedQdCcpV4toUCfRDQpaZUUsw",
  "key14": "4oEh6kDiLbGkdPaweseL8MsSf364js5zHctuPtQijx7BbKLzwFbgyr5UA7Bg5aTJKsNpaFzpFWcDgJxqkhKPoUhs",
  "key15": "58HGppDtxgjFTaxf5XpdTLzMjYPEaVTvMCWtT1NChxteSZWKuSNcoK1TLUJFGmNVWxa15XwXN2LNc6vLDPMaWaGs",
  "key16": "5jS3EsJtpigtV5e1ZbSywMJnrert2G6WW9dj9Gg98TvzDrxGJ8WfwTvbBwwoFyhKJir3v5Y6nYAp5dLVmZC8f3FH",
  "key17": "3AZrAy592ybQSzxrAoDPJbfPqC3DCgo2nbHmz2rjwPwNiZ2ZJtu3dn36rZdMbFMnLqcLVxPpYXTpDgtpAdQsvMeB",
  "key18": "52BrRvt1NXx7Qb8ch2KYD8oZARHTdcJQH9av3aXYbqPwyaxv3nojBE71Nk5b33c4fUm4hu4wVJeLecYCAR5msfY3",
  "key19": "3T67gTAUxao93gnRvFRg1Lexp93nxx3PscYf7DUu74Wh54e3Yxad6UhnsrSmSNiTQ7gwb2VNS78x6iE24ZbQdzoK",
  "key20": "5BAbSpqctomCCJm1Z62NdnQXu3uKf8tnyDn4qFco6Q7jojuzSwnLk9VY3pBGTU8Qqjckes2KFig1mVrfx5J2d2Xs",
  "key21": "5oHY4oL36MdevqC4B8XpWrjXnu5uzei7cdjP1eK8t3dTM8xpdouJQzCPRXLt5CB1dVE5jzV6xxU9DSH63etQuCPA",
  "key22": "5uHC1V1tLx42wZo5ejQAuDBScrzgCFSjgUtPwNdFaBGsdpeBhtYC5ZwAMsPtZGrZyzBaUEdpwmDngooba6eAgCdX",
  "key23": "5JFcVJ9TKf7uXFqMnErv5ogo2e4rPdXxn5hTBWqhpbiGcStXuXgehVXRUwLupn4SLWCQ83YZzQ2JkgzY8hn5i2ax",
  "key24": "274YfJS9SRxLHmefqRFQdNjDenygAtRyL9sLM72VCFvFAHJEM3CAirjRaLcr7eawQpU9ZTb5joxLzQzPF3Qftsni",
  "key25": "3WSgRckZfD4yMW1XXegZ5WebsDQ9o1xV6Q2qhCyy4iSLVnqh3qtdW6wfUmDgDsi4YhsZbfX32tc1bd7DamEC86fj",
  "key26": "DKN56cFDSAkc8SKYbzetnYngwjprPD29SUXZzsNKxjaw5pvKxrdzKZgeRWvGAtDtDrb5bHMrTUcHbaTERzfYdXH",
  "key27": "4vAP99Cg5cDnoJx9aXckU8hny3YcKfiZDFEa8RXqe9xkMuQBHvyozDyWy5Gvj5WdA1v1WLprqJZ46TCAvwe7VLi5",
  "key28": "2xWVCCpq3rWmk2ic76xbQ4w7EqJEoYy16Uv3babpoDQikgPeWSMFpFj25fpnyVrN696ppYYXhh9tG7Qpbw8Gt57x",
  "key29": "5Ma1JptDeuByh31Hj4LtSmj7LiGvNQgryCdTktzVNeEkjNH6cHBfDXbG1tk1hwqv3mzTh37V3UV7RUnobzPHSDMa",
  "key30": "3m25zKp1kN6Rn81fBi1o4JDRYLjJJ5S3fRMHiphezUq4iaq1njKvjfVVCu3MhMaK4ajVtwq1QFErU3MZXw7YjiBe",
  "key31": "5GHV2gpjAheBGogJWuzkDxPmmodMoTWSdKUKBpxqY62p8v9EzXK9vwgbLPqYggVZ8ZYdXZMyt7bPRVP1D4Z2MmJ1",
  "key32": "4BwZF4s9u2BaLhm2ZfXWaFtxd2CfFqyoVVofHKuCiYaNuoMNif6a9zA6WfPgC1MJMuFJurmGz4xCZnRFb1Rw6LN3",
  "key33": "Zj6F6Liqvz4Vd54sfk4jhG3aLbq76jQnJ8bMhZAeYyz989E3HSj8zP1zJwGam9Bp6q24ce3Q3TFCL5eQepAAba1",
  "key34": "2ghrJkiTYpvw87R9qSpVFgD7y9Jv4Ve9ivxhnHHjGfKRj3h2cfQbKnnKZPpz7ko56znipZN5EgHWUzfjHdttWjm",
  "key35": "E8ercMBRPtZgxb7mf5BVfo1sEnt8uVDcuQ6Na9kyXgBY884mD98J9EKEd7CwakFdAAeCiJRazescuKLhbH1GGWF",
  "key36": "DbtJzokxUvQ3Atk3BWS53Ezst5CVqGmucLgV7TfqBXTdzsY4JKtdkKGAYSc22JUT4S13QfBcXRJxt8WV7pJEqKF",
  "key37": "5assq59UNAzSo6W8RYjBgSuigVeXuTAMYwQ3CBEeVo7Mknb7BR1fkUYkfroGciJNxdTohVT5naBx4bSW9c7X7hyn",
  "key38": "5ULgJpfTrkCyYXMhbRTZ9NnVJoVPuthh4KJDex12T1vkAxEQeBYbY1wJ67YAs3eJGdhFz2K5UyGHR4PdqbQHYW51",
  "key39": "2NyxUz9dhawDpmj7bi89ZtHNUmxyqNZS1woHzna8MLhftJd1wkwq3rt3EfQdUjvGjD4B71pdygQZRuRn5gnBuaia",
  "key40": "2nqCgUvPFq5ri7g7cRaoDUbxDu2EDrqPtvxqSJxhZs1D9kfijNU9mZJ2ds3ieqYsJgKZX6YmKZZWaj8yhfWskKWG",
  "key41": "kKbS7xEbTdqx1DrCAbuqNm12v1W1zu9tu7p1TqF5V93SCVXwXqr5HqS2DLy6FoFoo6J3fKXdxk1BdETs26eyFa5",
  "key42": "2iBFKkATTqURshf97cH1mkToabtDdwpootc5PyjMxmcSS8FYSsMCGLAm5MqdSrd27a9wpNQuw9V7rg7gY8h5oZeN",
  "key43": "3XNi8XstnqENanikebopBG9GRGQLDYFHHbAmXGTeyPvGFujLUsesgKUyP1m7J95c2TNpSvUjABZynkLBZBC6dP6u",
  "key44": "4qfmLcVCfJDhhioAR7ucy7zRwZdqtRCxjJpdKNdXKmtvAzf8PvDbKXpET7x9vCz28Xm23TTqraDHuu6wA4LW8akb",
  "key45": "pKq12sYCVm4veYWHYAuHQDhooY8qubqK2XQ6f1Jk1yG8yUtsZfmakFVbMN7Ho7PPXgS13CJeLXKXoGstsRmWFWE",
  "key46": "2XEdC13VmYvPvZ5oy9h6ivMd96feXAmLsHNF24TeKGeu9DFKdEshxJWhyTJ41H7eou5JBBXnSDmuwb5BXyr9hJYP",
  "key47": "4CgrNaDMTnoonecqgvzn7G33aTkcqKYtGcETBnnhrMpHBZ7asYbH1aCxB4HVMvovuJp6RdCnG1tVA3c6t1qRU2av",
  "key48": "3RuCsS6UTE3ccdpoeeMTKkAyZA62dftvKHyZhFS8sgh4iYFUVkqDUrKpSYee4kRvH2dz1GoawrrQRQyDY13593sa"
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
