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
    "38nH2VmxDJMHATzFyvRnXLWN9anq1yRCEAvwXck4GxwoUp6UDz1gr8Z4bb2bPjFmT8yxJx46PPQYqUD5Qx2Fento"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FvAz4wAUfRMbn2RDGbmym7nrAcHaMugffv6quEoQqmhhxCsCJhgWYJneJHmE63aEneH2FSPG94M7CbTjUoqca6c",
  "key1": "5qyZxP1XJ6EvgQM52hdVpej1EywL79zpSsMnjg2y8EMqNLVmZcJ5EMndJuLLYYR5UW42rNqp6dXzLswTKSbu5ycc",
  "key2": "42rwBX16HhDvTWAzgXRVi6DoDjY4Vsa9h5bJAxe8NGiYu8NxACSPSeuGAdinPh7RGgCMCg6gopWVsVbBezW3YNvk",
  "key3": "ntN2ZwKdbMumwUTf3PpCifYLXHPx6yt8Jfhv2aiun9A87ZQpxxiUFtFZTRkVz6YaJkRfJQxRZbFXCX75pB7GMJh",
  "key4": "465oWwVm7AnMSnnQmGFDu9KpCuaZgkKnqAPLcHoVA2rmSSkFZthm7xykAjJeJV7zaZB6irRU7vDFd6yW1Xj1CbKL",
  "key5": "zkykbMvjNQHopiAJAoBv2FhPphQQ5Hkg2woaAaVf9MHXkkYys2dWEUQJeNCrE4xfuPXHpD3LuUH2ZtRGLQvYZ3E",
  "key6": "5kTR8BtGiWAQuuwiTMs6MKab1bhmpt9WZQdbMSsHrcDkjG5dTsX59oEcymrSVjAZjWKnsdV6xPY2stFWLxxL7jvC",
  "key7": "35QrwQ4iUgi9FKLQ8CcGbV7xM49j1p6DcRDftw3K4qX2uBSoyciH3dMQ13n2P4asFVxzgydn25qgV34JFYcH3K9f",
  "key8": "2ixwLom2e9ZYsLFbxt27kuqQBeZyejQqcZzTwjYMdEBRmUGaGrnN5KsXN5LQQeJitomPJWxLKDWf3miGwykeNyT8",
  "key9": "5DrLdjqFVRU5dKrqLFKaXBKHvnVJgCShP7j6yF2tfYfm6oY974MgVDNyaM8j2eQTmQNe58wrkZ3rWGBvwRG2CM59",
  "key10": "5GMpRcy5nZp5xD1hGu3FCxpY8oUPNvkhYcSFZ2nyrzPavnCCtgtHBcbCKb4jRfZ6BDh75HDds6WZWB9nY8GHtUV2",
  "key11": "5R1fYWpuwqNHV9W5nkCxkFztfJNRX5W4WbxwWtbFjXrFXPvuJj8XtosNizyDdSRPZE1dFc37mNNhqbEBcvgrQJEE",
  "key12": "2hRviKBUUChGb1eCUt1xp7BsbtAkMcfRf7MDrrdR3nfxxuU8ofyjYcEoGGHoXbUTLzhA2q8LpTb7zLFptB15uWqV",
  "key13": "3iQaPz4iAfu1oL7RaheGrb18iFgKinEjEKmmQ7x57tr91jXSNkRjBEgKoMGQUQ3xi4dNLuvrp1DzQk8ZuXT1CamZ",
  "key14": "K9pWsvX5wHNrPYDw3zETG6WJLPMs16mx9hbq6Pw4U6yDtdm5HyaEYFnGH11r7hNyH24tpjk9pgHcTpr5FWxc2Kr",
  "key15": "5WbsGvbizCrP9vMuX6unaqMiferM3xLVA4qharhyMdmSR2gFWxhiFchCAwnSHS1gTiuYYt9SrwEPCovStzxa9uNy",
  "key16": "3TSoJR5v19FSyw5aypWGRpUcyh3MhrrsmvhgXnma5h7341SwsnxtsbjhZ48f3VwVTq7Ag2L5WPF2zRGZxag6rn4d",
  "key17": "2wHEh51KP9cyFxGwqZLE3fcMmWUpfvKgtnVVLhCns4Y4M52RRPVTtxPLqSKfbLH1x4zeLcj43RAQSxBEJ5Ky7Kb6",
  "key18": "5K8jeHAG64xJ5rq8C5FqkNWbvqgZiExorYmR8mxtEEr26kuXRmpsPAYvT32G2PV9Yxzp1bMeBn4xGLaaDzbequR3",
  "key19": "224PyB8SpeuE7nsDkKooLjqkAdRZn7aRsBoAnhMdWi3oqAYvCTJvuvfomaCTLgxq5ojLPQHkn4HWLz1cKjMhuroM",
  "key20": "5JcLasZkd3QtBpKjKD1GBC6Q73nkeJHp9u53bpZnMKak8JoUQwqnCHvz8qpLez85HYDwCGRDAxxgXwPTHDq6EVgH",
  "key21": "45srvvaU24u1PyZBNC9bENX7oS1snM14AgWTjf11BmNWWKiKgFjsj6QqCvh5YhEPZ4UnBcLTzz6tLqqRZ5YtcM4D",
  "key22": "52Qmh49cHsshio6RBDGichsZAmCiRq41cCBzy5uxKBFzSaXDGdYMb1oSRSUeQ2Luy9yJgojKq4hn242tTLgAwb9f",
  "key23": "2ARGfmKtfiRg1VCy6E25rtqbjNMh7LautDq4jZY33jmajY8hdpymwJiGipspcTdfwDQykHZnocdZeAV93DQrZ5KC",
  "key24": "661Nx2opAK4QX2RzbKoC1xPMYXK8tjT1PmrpPwMesaDPUF2yC6MWFqw7xK7SyzxSx1HNfvDASVarUg9VhNkjfkjc",
  "key25": "48eHARxmg7pAirm6ScwGDiQjPauVwtWM8xLkP5rPy6e8paSiPebskkNWtkFC8CKkm9tkLXWjTCPnW9SRtMuxm45X",
  "key26": "2iRXf7TT8hVksigcTT34qCBaiqygSfzUMsEaejzmbq7N5sLyXxMYKdLjaVsTUcrA3PnsRz97dd7AEC6UP6AKsFpU",
  "key27": "2i8Rne7jXcdUpyPY27odSqSnQm7qZjFLVnqbjwkCRnXsJvSx2qnu6iQ82La3tnP9S33LivUbrwSZeq2yKPxUgXnm",
  "key28": "5UCBjQy3w43CE3QVDV4zBvQFdKhA8J4DSh92nKwFoxN7dzotbz8JYNPkpQDR7wKUQcsR9axg9sLzxdXTP7MMmEvA",
  "key29": "3cNc2pYhojXzyD6ghcmGoJyZ7QnuhBjhNd9yJ69vD8ZztsizppUbgLM2duXd8d1zAJPeJWwVSAhSq82zzBhSyRHh",
  "key30": "EDWHXmARwXEjHbxhyLtYFeW27mr9qWXb3wJxQNXCKfNu7CayodzC1d3LC3qe7fhAeznYamZhZZhcFMq5Q74JvNL",
  "key31": "2v4dXjFGbekYVTq4gysb79WkusN421kpDDAnEHaWGhwa9rTyU6bV6tYc7sBjQ8zCrVFiWuHVk9uKqNjswQgN9epC",
  "key32": "5DV6dL6dXYLr4gsh7SnbQoxHcnuhuDGKAVgD8KqtZWpBWALi3RbijtaLeNsPiv32jBDTMrcC4SRen7gXQ6JsctAk",
  "key33": "2rgUBsTehAisSsD5gjreusvaYFPGVbbnvnHJNahNn2SMxFfD5cWJ6SimT29b6mkAS9rgLLXqMg7gdQGStnDspw74",
  "key34": "3ca8dCy9vEyNvEtQH2WdDcaMz7VCV8gcxWbg8kXX9YjrVXmocVpZnTZS5VPY1jd19W9Fxcn1QF94iwFYZPyNouPK",
  "key35": "3zmGbS4NtDV5SxbDBewjkB3HxHCtLVZmGt9WGXYu564ZdfHkC27Gezeg1vBVkG5WrWjNxMByKz2VThmkEJP3hiTQ",
  "key36": "2ihxqaQoTTbU3PdqWfbvS1Hj77uq3AddXcx2dKGmTKzHTBdGjqpArmx27vfZEjSM1hufxRUKBRbB6X9eV8Vphosu",
  "key37": "2s1Yjn4dfSx3M1gxFCtvXeMeyAfbcFUSEnmMkC3PcPG4oy1y8ZYqmBZ4q3fczTv1qGiv6dJUzARMYFVmadiPS3qk",
  "key38": "4Rss9qcxkLQhyguADXs5uAoXgEP952ZjMpnRYAeY2bmzftnVD1d3RZZB8wv4PY6owfeFSx54kbr6diBX16LxDpkP",
  "key39": "2cmkKc3gwkXPoBw834Pb68fY8ZANyLQKVfmmjR3F9ViscDaXWp42Kasng6s9VRuwfYGFRaWnv61hkj4hU1LvgVvR",
  "key40": "2eHuB5vGYmYoadenhPAu4A7nkEweGWz97p3BkUFDL72Vsw65upT4TNJA8Lt8rC51vFLJ62iR7SsrpFeFvGh57abf",
  "key41": "21Mq7vVA43HPkwoMZdbbQwCU9zQUh2vpz5HR7oNoLP9oPE7kDNZt52cvkyS8JRsVBfrpZxTBpJDG8Z56BhVisnNs",
  "key42": "4v4rhoCywUdff6ZUcvmrZ2wbFSeLCkFaGzk65KthJE7JyDUK1e3fJuG2cxnLwYhdhWkYbScsKDM9pY3GsCuQ67Rk",
  "key43": "2uCZK8cD6dPn1iy6xycxBtBh38TBdodgH1n1orv9kBkicktwowsMXJffKuBLCSeV7WxGS9RteuLTSpq1MbA4S6r8",
  "key44": "42LpXB3gxxD98YhJQRMvznLe9ixKFke2S5etzanbkDprCVM53a2FrWpjC7iWTbDCcgX745odE5pvu6GXP8MJe1Jq",
  "key45": "5SNU5HGavwt7M8JnUWaMEWQsHkw2TjjcVZaGD5tYi15YrLExSV8V2yzyLfhjrcoVXDq8YrirJvn9z92iUeby4n5U"
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
