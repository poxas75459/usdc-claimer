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
    "5ZwnEMf7XUVp37KKKDd8kxAmuEVgGGhDW9i8zpwvvXoVKvVoQxhpmcVprHCSQktyNWQR2kMSGs3HXXZwuZ5fjryr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Y9oKY1CFxaCAndjTqzqFPnJ4YFpodQZS85eui5ZCKvCKzb6L1SGWzgjnCsiSg1HTSL3bR8QNwWzYzN3norcBaK",
  "key1": "4E6LPsR7iUpLWNtCN4zUeDFa7YfsZXLQvZTzvdmLwiHXp34jPRRJ2wxVmgq6uWuNXNMvdBfMNR9CCDcZX9eRVZ3M",
  "key2": "4gBFZoqfJmzoMuPe4EvR12vksFmCqhMYb9ada9UZnu7GeXRzcRXiCwUPuRytgB1HX9wUET8zbMFez83hFLki23UM",
  "key3": "45C24VegQ8SA5piXhFBg6j8JSkA7CdDY5nNcnBtCzmU8V55d5pfUBb6qufuEtZ8kh3xLzgpsw9fHf15PdS4C6pdS",
  "key4": "24YDeb1ekNWnyCchuivfB17SH8jbv9TpMcoxUNB9L84Y3hSpzd3G3zBynWcK1kcdkQdjzhhKSRBzYuvaGbVKGt8X",
  "key5": "4RebzCJmjoNFQMRBFkHChjsKaP4qejqHbDexLFoHNcivPuBBp9rEvZreRPMnYkPJt8rP8X4vomfirKRURipZdCXn",
  "key6": "eEDyDYtjDkNr1skjhET6dytkVP9AJfaeS9WdvJm6T1CaehErxhsqcCwrcmPztDmEDqRt61N3smdZjG1SmS2BjfF",
  "key7": "4agAGEPtFwQRUyvedeLPzXC3w85samQCNYBDC6k8BpyD8eiCwdBBrf2DiUVJx6wNGtG7cNHw1w5FDEcPZK3Dzi4Q",
  "key8": "2uSVdR9eiDz5773xGPGZFRAirhEEoaDpy5XVZk2EnWsdWbESgLnTTxKZvV5Dz6RjjdBoCspKY12Fi3c2Zjcr9fLC",
  "key9": "64xKVckJTvDaBqAaKJAZTEPBHtG2jjXb6aRbJDpX4h3iBdeKV4j9CFgZxEaojJZETAuL5t4Nc73grdYQisufV8BY",
  "key10": "q6geWr2WFbFpmUQPGztZmMtPUKHqQscecPcTTPQbv14CpP1NgfVdkgbkHhTFVLDFHfXWxbVVv9mxpZtYV6vU22g",
  "key11": "52jmNAGKd7isZiTdi4i9V7MZaGtN1G2wDBVhygMoJycqJ1fmrvPE5F3K7dUv1Qf9M8q1XntYecnpkdquANbTobgB",
  "key12": "4ayibqmQXokFadB93tNMkmKcjiUEjbT6uoiXogB5Avq4iekAbfPDLwemQGJELyepv71i5yCoVevS63fLjDijZigD",
  "key13": "aN5qeA1kWpUsFkM1JbuJoycZRXKnnCL21oxwq9mWgadn98Kw3vj14QFwzbCv32p7CggSiiJhte36zsGsWtYm9Dy",
  "key14": "4JCuWVfxjqxNrD1zRFSs5LTqB2cnobuNREdgEfhPF4Zsbn4A1sPfdHJAqKVsLSeCKcoued1TZmmm1gz6MDYRf9BH",
  "key15": "48ufGfRrGB6jNUDN3342rdTk1zRYoN4Ln1aUBkhwEtXdEVuXrRX1kUiuAQKewe5PdCfSU1XR7CcgiDX4jLhuv8yx",
  "key16": "XhQjdRXDu5DA4WavMHZnQj1y45L2gLr5ux7sU8fcUBWDUtBBXSnXWP2Mkn9w6mW4XMwnTRDGq96HVQC9DaHcnjB",
  "key17": "3tYT7KDrApZoXsmLzHaK9bUyTvpdbEkXoWCF5MtHN6WJQgGSDYPt5hEfx5zxT4ny76MXfy5CwFQcCtaEqeyd3VqH",
  "key18": "UDAHXV2zELfy9zv9Jo4692t9hHR4XadTKw6zwzeqnAr6A7xoMNrBLiiARxm79B4UoQyTwgsv4kAE4krortwz2NR",
  "key19": "66QiDohnBSeYdQ8rhkjc1mLeaxrn36LFyJrRtMuXU3hTBzrDJToDgsRtCdyAkPkGdN7s9hY6giMWaeMUUNbCUyDN",
  "key20": "5o74dAUJ33QTGNomhwzoXsh7eD57nLNDxGZZDf6rzUzeJsmiUr6wN4fA91p9GoFCcKawubyKXjvYFn5TUTfBk4Bf",
  "key21": "5er4CwPPui5gqc9XTy96sP62efzZ5DmVEu9XBAtVewCS4c8MiN8Yw5EmQTqeyg2LC8y28YB6hsZdZvbnhAWSPpwq",
  "key22": "3v8wyyeiBx5YF1cne83syr6FWBcLBnmQYHDNRfFCeYSRucALg25oTJ5iTrHRXy2nEBwSKs52AUdeSHTuQbUEGCM3",
  "key23": "4VvJQzzrHQXkNFMhcdRbz7KQw67Cd4GZrG2WA7YcjirJkkgX9nFanmYbcmoSCr3MTnsXHfmBvFFDAgfbkow36m1U",
  "key24": "2LePewcmvFY9bEYYYMRm9x9XP1hTa4vqiStDDc3KTG8ZNpozW9XvwGSSZdLt31v9x2g1v3FAa4mKisbmd2QyjTre",
  "key25": "62GQG5kY1dX1DXFCRyTntwrTTuP4kVTf31BCBEHCTq5RBsFSYgBBbZs5SC75Du3KdaXfRvbwFzhjFXmg2em5f1Mm",
  "key26": "2N6WpAE1gvjNu58hTdfg9XaaA3PbsiRz5CXJ8fJ3dEMLozdCfXTLhawBywJFGDmE7vHdjXwWrCrLbUn3KS4t1rVP",
  "key27": "2S4MrUYiAW2j7zkTVzxoghnLTMsGRCD2we5sbX1DB2KEa3mfPE8oGNhUQwE43vR3owuqEsE8P3xMcuxPnaWExWHt",
  "key28": "5rbxULuowiH3LjmKFZe2gsEU4CSfNDcoRvKHjiCCVusUnGMyr5iLmMUsDUBC2Pf6osgCsnJdzsJ2UYbrNmuNsk3f",
  "key29": "oxzeMQskioQ2fmExZ4Z5JDQFGyuL2mKoFHYhv1vYn8qA4EUobFw8ScTo3mtWREDT73TiKENDPmGindrNb8NQ8Vz",
  "key30": "7eNm4wzui7hxUsY7sDy18U3nMAFdWTY345jzkFb6CjDppydPqL5LMLGKiafmReYvTYXevXRC9MpywzGva7QKLAg",
  "key31": "3Z8WXGwWhGnGQ4JiLM4Yrn1pKACna9Bv7VpMofbsgPnURaqN3MjZoesLrwqFnRBxfKTsfYzkvuSWsK8mMfD9D5Cw"
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
