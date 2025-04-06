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
    "4JCni5UB2orbWnYqwPNcZKTjyPnNC8smt63RFyx1vVS6CdiDWLWgYfBDadzj9P2oUUobohRTfyhQTjTh9DvJ386d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sQ9FqeWVH63aqdirp7xM16Lj54MXQ8Ckk2f5D1B1hssR97tk87bf7cebYikUvFtthkRnb945PUKujvXLUVedHL9",
  "key1": "28eHDRwztXjZnCQ5kN4SGyiXpsFcJL6mKqDUeUQuwhU2Uqd9Bwd4L6xAGmJQ643h2t471vhhGy65SXRRYvS1jgMt",
  "key2": "5HXKwBZE2VPiHmKWs76P8wxeYYmgYZnkdW8UAg1EPU9mzJEHyJziJyiBUT4KUzQ6oNTJuZAcj31RhnYFr6X4HfnU",
  "key3": "5zjA5a5KKHNEyCxTTBKPKb1WknT3wfaHuREac3FVXitQo6Dvk7Kznt2AeWX2mfxb47JpuGbuszyjkWgqZYjWfgYU",
  "key4": "5p5txTBno6pU8BXasso7DkUXZh5P8BVTCNduTLziS8tnTuy4h2VFphyYcGXR2oQ2D7sKVCrcG1MGHwQ3y6dzi3Yi",
  "key5": "2XRPwzvggrbHGZcWSwCYCwP7CPAvAQDTYrdrdxf7ZnthwuGdxyF7jfbGdwNsJhAWVsZSm6ztMpDB9rWXR8YUT8bt",
  "key6": "3Vd6bLPLnwdytca7k371fQfveNw3QKtP6yK24FRP5WrBBxGu1QJfqchBoiwbvFGrt7mxEkqPWJjz77xPeSUwQKwe",
  "key7": "55FD2ngNhrqsUUYnq3d2mFm4p5Uib6YYdPkDfcVhhv3svpFPc8Tmvo73ejEMCXc2cbtypxxEQpqdcedbcBCtFk5d",
  "key8": "65zK3SMC8eUhybbvJrUCYUnr7YsaF4sNa7sZKLi1Fcdn8ETjJbA2oZJoQwNr8rL4gBMjJXMvJNbtYUdKiGvApd6E",
  "key9": "b8PDLdJEwMthsbn5syAUUDiFD8mYgMPjuGr6yuo9n1ASStekDHm2CZYZcEW41N7tHH8rXv2bneuMQ96mBoWTPrt",
  "key10": "5i9Coy1gzDYSV79F3HBdTtSkrdqy8UrsJvx4EpPmb8o7jBi8jSr8jbtwdZN2zpBgYnFxTHjaQPosWhdxnAVYLoNY",
  "key11": "nxXTbpegjhARA8bPmgr11f4Haks3SAdFXFT3qCqBEkvvWBx861vTXtb82vLK9uLsXRh8MtwPGgEELMdd1D3HaQM",
  "key12": "G79LBX6K47f8eQvP8SJoUQZudr2VSXVmApQhSdSxq35zyRSeAqAd4WKAM7SVEzcc5vWvpfwdTVgJcX2oWs8fFfm",
  "key13": "EkUXHXArsJPKiNiBEwpZ1TEWf2cunXdEM3H4YSdtxGuaqcLfCb4wNRaK8ztR4FSZeYhzySAQgcPYiT3RFnukb3Q",
  "key14": "5NGo1Tn8gdKa792oaN68ytJdAggLNfHxVZdN2SR7pwAVLKMaRtEeczysovHTdhmCehyVoVSEPRJiMffFRp4y2yBS",
  "key15": "5WU5kiKyf8828LG3afNETLiYtJPSiGjFoWFGPCY5v8Y5BnUk3xPrHu5xSL2yCyY2K5ozymERLiTPpuqo2VhUNWfU",
  "key16": "adWDtn9uYmmozGt9pSzXeQ5M4dbeAwPPvSXuPfbQewL5Qg4k4f6VMmGHiBRXEZCDfPeEpHsmS4xpxnF4ssBSD4K",
  "key17": "47xuzStrEjyzQ7CPm2brqj78YMEU2kXthFAnqZzLCC2wFE4YqchxNeiyKxEivbMAdQ25ZqJ189xBqFAEA1SDy2ua",
  "key18": "4CY46Xk5NKVsM3USc1i7XpQH4DuvqcQRpYJ1FviZsbY27UVV6K2WHkvRc7H4iv46dC9vakBGVd9Njv1tKQAqpoGu",
  "key19": "SbTt2HPdXWFbbkUFtKshYBBQhoYTsS8EBpEYzQa4XgTs71qrYkrRNsebkSSvwec5jE6Y9adHJGN5bcgZpHwa1cu",
  "key20": "2Rv24BhYnraz9NrDjLWHmUAp7zibMTZzG4HpATaHUm2ShBaYPAoudbLt91eD16bz2c7kHsPuLrhugzCBx5NSyHCK",
  "key21": "3yVR9zh3LKTTeLoiskAPRGFP3LLiuuSCXk7nPoCLShDg5HcMuiLjd484TBsZtPLNSxqz2vCxgFS76o6yFKPVUdv7",
  "key22": "3WTYpo85WTc86ZvLT6EtZDLHzvu3fWn15sdYkHBTgDiQvMvgq4HUrSuikTw28NkTAarQtJhHXnAJ9aLpndir4hX6",
  "key23": "2ovt8oQxivEhv7kbwbtmX3Vd23en2YkZze4snrQeLKg8f55TmU2tQZPDQdzCL1tmmFyncSmDVLWbgKG6Hen1wHG6",
  "key24": "3HLiCCLkpcYHEKZWXY8LizU6v3yBVj3yqD7P4PGHc3ZcxMmECMrW6JuQwvpn4tfZ3zRwt9xNfjHhpvEqB4K9T8vL",
  "key25": "22McXywsVBM1o7bNo3vXf9rFtcWmvZpb9f82WGXn1sfhkFmV9RgjWKrYawsrodL5x82imuhCXVpmcQu2gA4S6GCs",
  "key26": "57zoJSiNe6ciYnMoL6kXXUYJaLucnkFjBFTuziA34ZgQMPtgCENu4Wm93bewCwEYyM7knqDpKUms6FmueLdJp4bY",
  "key27": "biGw5oT6tKoGmoeoRHfZzq594VuvNXGNVthD9cpwK8wq3Gpmyd2Hy6583XFe1dH2XDksrhim67nKnRycan5Qvz7",
  "key28": "2g2y7A2sa3BzoCTZPaDo5KieYt45gg6tKurXPKUc6GPoQVQY8wPBHYbxG9xEzx8ALkuSiLfnWc8saGGsna3PaGqq",
  "key29": "4BZ1HjjFkPsATojomvVHmvNDjitFfXsvhhFgYBNDtFBQTptfqvui9E5WB6HGhedzPoVdEyMiMUYcLZ5Pe3mYTLrF",
  "key30": "4R1RtEau4fcqYNnMjVJxSgUHacUhcuq1kMy2x2syXtheUJwYfCWgSD28WUnNyp17DsinHNKY1k5YRDu48C6XsGbL",
  "key31": "xwRGtaPFZdiXhUPpgWAsfkxq3xQJ8jQoWXVsYwfE3ySmB3kuoADYGXVxUCDscqMHxhUwbnySciWwBKvckZzXu2w",
  "key32": "CyfN1fwyFntgK15fjj1zQRPTUaNgxQp2cYNWVexCBQ3btvtzfbt6Gi6kdtuENSHmJGD8mE7HD9s8uPRHTWVRjPH",
  "key33": "2S4heF9rZSNSh3ZwS4e3ykHnQ98ojo4YduGpFbziDr2sUJfzWQAH7MtDNff1zdg4PaPZaRMpr4jpeKLFBMBpC9fU",
  "key34": "RGBkkiJPLTaFytbFbNEa7ZjxcC9gnpMvRiMEZZrVeokvorRypqBbqtUMVBJtcTgwCkfmRh322mxWsxiS2VRAzvD",
  "key35": "4DaN9bQVGireZU112f5esZSiRbZf8dyDrdXALPqTmePAyozh5gR2FyKM6VigZftHmFWePwiqmAwLczMWAdEAKNmi",
  "key36": "3r2qxisu9ZECQbnQ5gdJVhKjaBh761UKNpA9xiYUedMPpuQaonm2EmQwKyKwbZR63EQ32Cta2Bh2qse6CSSb7E3Q",
  "key37": "28efK3njD5cgzak8pf5MkdtNVYbKDmh2fQLNzkP1uL9ni1UiubCLwDnCDzJQCWGakPefZ153DkS4dVpAS6axuMFM",
  "key38": "4bevypXgLKqmRUGyb6nrk3m6cXGHKyLEs2V6bBfytWBS6A62591F9G5YvDBEZ1p5ixfHJC646SLCVLvaaAeT2Q6J",
  "key39": "5bTSB6y8JRRvSuobdcE95yGFruMR8m1H5MHmvnwytg9638Z8eapjqCDENjRTWA81eieVj6gfL9Jk4s8KX6dJzUw4",
  "key40": "5GNaF1s4QasT2otsJ26ed8uWUebR8nG7iSRCYJaZ6NXvxXr6KDxLSuxuRwvdDKuSBxYK1a3uy3cpD4nfP3naRKaT",
  "key41": "3bpJhM2DombCXSWRPkscLtFhJieajN3HU7rDmnD6LQibF5dMnFRbNmQmm9ZQMhMrUDk815nKNxsB9ENTYHZbFiC8",
  "key42": "3RAUaU9ZE9tT7JUh6P2oMYB1UGGzp45aFCR4B1i3UAFmfH2uVT6YezPuXPvN9BzCisPqXFLTvGa9GUrQzVoSekLp"
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
