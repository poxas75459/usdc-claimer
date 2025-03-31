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
    "4jQBZuiNtWY7AzAEYFf9WKpJXPihwsnmK6gNLQyjZctjZNnvVzoWCX57oCu1zmQhC9mSN1ewQPdyfibfbgEBvPRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uwvhukwf8QGbGheexBtQdvxgtbauJ8hd1xoW1FYK63Yiw1LY1vBh6tES7wmXwwv6NCkW9E2sZ6UUt3R6Jiz8QB",
  "key1": "4twt8Yv22fscF8QjYKM8XJrM8f5WQ8LzcXroHccWVPnBgpaEdhN8dg6fdfr5mWUjbDppbxtQQycH587uUsVXjiK8",
  "key2": "4yM2qiQRLs5zKvqttaQnLw9bcF18xuvgMKL3RruhipgLs448JybWbywen373XH65JZqJsrvtoMRbiT8dxNVX5L8y",
  "key3": "4Ss1UY8kEDopoGZJyUH3AKi1pCTy9gndLfu4Q8ispk2RXrfe99bsBbBZJGsAVLCdf3xBt6ianKMxe9zaw44XuWyP",
  "key4": "5UFVLVRGb6qWjeV7EzDFJmswPMJQJFAwcCh3SckyWoZQgn6siJwz274rSjkDMg4wmMJ3a1EdWdeqtxHZx4zFf238",
  "key5": "5zJuh4mNjt3NQXsVh4rJykFXjSQdYT9JxAVD9Kib4MCL89gXeUSR7QPiRLtTHgGFMaqLnJ1JMWYZmJc6rMfx8aZr",
  "key6": "4YonuHPdVwU2nuQ1f84W6VqbdwehUF5tmTsLgK4wJBw2GyEySZde9k78P4PNte6SjowPfX4ps7XDBT5su93dKEyD",
  "key7": "2EYGNEMaJoxPbfd1b5QDsujngKsJBqsC6G8wAvk9UedJV5stXnh29MLMBxbTrpaGFDoTHRqrLbzR6bsNo2LZmAWB",
  "key8": "5TdmSCzLdfA3Hznr4HjJsNYHwo5iN9szjt8eW539b4BjuuKHTpLUqyZ2bcVjxQATq9qaBx1cVF3gfnVkeujPoMCq",
  "key9": "5J2rPjwfqgnz3uMxAUZx36gg3pmbo7Xowk8cLNmkDhrrrSahf2j5D6NbynDMtdzTgh52uTsMCCfhr4XvNNY8Y7Qj",
  "key10": "3QJzKStvWCpvWN8DmnGQyzhPh9Tnr5JjYK51qZD1wbH6UVjT5Y8A8SU9hiRfdWNzJWNTE9NbBGoAe2yCcKf26EvR",
  "key11": "3SvwrANbXtj9t6MVXzAWYJno7G4idfdyq2Juju2cy5aCSPc64EdECdMVzYSZtfb9iYa4HDXDYHZokLzKu1FumN8X",
  "key12": "3qEEYfnftMEGWvYD8x2rLJjGxrVzUSzVvs78LyGDD1fJCyWAFiqwFCKSFtRfFenwxkGAPh8TyC5kHR6KkJx7mNFw",
  "key13": "Vx5Ds5JMFRjcrMfJZoffYpvtDiqNdUfDrpszqQMMGY157LqEActp5G9ZPnpE68shkZHL56FhkeAxw4LTVveLSmh",
  "key14": "3HJz8e94RfyqnxjL7i2S15dF7XxtpHKtNHjMMBimJ7aqzgswm13uyGh559M7M5BCokSVU9DnSqPS7wzWkLkRy1qy",
  "key15": "5T1snHMm5Bhmm6RTXJmaMNc6R84rhFwC2fJ4fovqqJhQFmnWXwHdxfgKm3z4wTP3EiunUDHQPcznL2jYfdvXu3hY",
  "key16": "4QMzVGMXr8w2PbgUegBykC8imp1MuMioozKjiT51d5ppVtkgJNWYfmDFh845zhaLWjyz4evKyA1btwq2P8h6rchP",
  "key17": "5JLBJN2y619qA4t312MV5zeLnynEkQ4QEt2VVHNFRvVD9t6EK1gn1wXV6Ucx9YGQGiy9rgN3bbuDuAKHBrpkXKAD",
  "key18": "NZySjfxdiTEiePV9B13vC8hSUzQFZupNJJBxr2FDFVFbx27PDo1CzQfmh1oF31vT3hPWe94qZLAKuDeL7WMA2jG",
  "key19": "5x7y4ndHkdP3BN5XwPicAVNdpVA4FXvJzCYguMT5ShA1k9jiYXYfnknanMX9DG9dn8gGVS9qpbGW2ikbkisvNVLP",
  "key20": "3Hriyv41RxpiCP49NmGVA3kCwfhJ4GJahVcYKL5zvg9id56L5aiN4QwEpU79EukAGUAvPiYP6j6KZXRk61WVCHs7",
  "key21": "3ee6xuA9KpXpztUvySPfM6Xvqp982F9V4x8HX32wfUoimWNdR28TijmLuMjU4pWzkcEJSVUKueoTX8MQvrrWrKHn",
  "key22": "5NdTXcXpv4N3ktgMAHjEcvxVHPZBFv3wjJCkBePa1J4aw26BBwqo7oYMSN5bAjo8xiXoW7yHhsjVNvDodnsRXLa2",
  "key23": "38K8vBVcEFzXLSMnQpJDLgQS6PoxVdyWBr78syMfuMwUR4Q9j1tcZFA9c4E8HU8EVibaA88FkupMrciwAgKQ5Mz8",
  "key24": "5tdvEwaLY2bbxz9YpP7b9tWM8xx1yCNL6beit4w7hgFBK9iHdHhFc38n9PWaQtXXBso6Fe6BxGfm9EKHsPu4WSRG",
  "key25": "3dWzkCj49Puhah1vEHjRpy29BqoeeVdEyfR5dW82dpyLLXgDsTQU4syzD98AgrPsKbzst72KdXoZPFv16oathqep",
  "key26": "4zt4p15RjUSz72n51GaokJYEZgzFQmfwezraNuT3Uov7UL1VDNXB983VVuSJMWPQQ9v8oFjsfBReBK8jdrfWxKs9",
  "key27": "3kb9gNnzRNoZ65Ts1QoJu3Wb77mej4V8Gmcga2zFuoZNvmc5HeFr926rn56ycCMxKKq9kojqHckr8dmjEXfk5LgC",
  "key28": "29pPGaGzmipXxNQiRxREYGSsFBC66PDnkpy6QejCZHzqYxQ25czG1e1rHywjBBPMLUJaGMznBrkwUM3Lzznt5q8s",
  "key29": "5jC3gpBySBGropyj5ndVMKF6PHkBVVhUQqSQSrUtfpG468jowbfxPHhp2JzrH5ieuznJUSVtGGLosuDVrikjNwGS",
  "key30": "4TQPSPEaHBqSG5bT1VuMkVd6KvxfMUHBxe4cm42ZLabF8ZcDGxCQzV1bmRAwxm4PY9i2wSFD4eKyQKyWPpdEHj6b",
  "key31": "3se8p18yZBXUYgtaJQvhq2tuRD7hnzwDiC861kLtcSrJJNFh9dEY4bgBCLFJGB6EJYSsWxNb6EtaDDRvDegYvCL3",
  "key32": "vyo7i1qLTLhgyxcmFCx1SZdJBJ6SMZuCnr6ZTmPbcMftAZWTRcvzZRadxWyxiJwTCq9vEVz3Ta7kYTW3sLESPmj"
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
