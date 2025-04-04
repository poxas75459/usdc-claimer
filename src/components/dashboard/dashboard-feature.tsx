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
    "3Cv66y4k1iCq49DLcxXsc9Ck8NALT9CFMoyFzD1z749Y4ctoaf5RcCcDwQiytAFWqH7DMmGB9YbLVswaRFXwxBRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ywLV37hfvHDWSns9dheNwLWekMGib9yh5cKVsQ8weQfAe3XWzQyCZeiR9qQoxSbzHjhk3DZ73swENcvtqsVsPbX",
  "key1": "2rhrnNP4MLgnf21DUnvHDHrE448GzqwVqHVyeBS1Eac2P5h6VBwnBinVfi7wP4Dh2cFtjQZEfcLftjsL7hHHhETX",
  "key2": "3YyC6anynANPR1fFLBJMFNS1uqrk61QMyNGEJ2oRy4aWRY3kjUx5vjkWpknnRzS9JPy4LyBwZdbTTc6C1A4njNU4",
  "key3": "5KswzaXxt6TxsxwGz5X8ZV3kKpJqWqroQNfAdB8bh2Tqha2bTqcqdSzPEXgaqJh75P2u7xwaMY4AQwbg9cecoykm",
  "key4": "Xr9y8xgFgWbPEfBadSUH1ZFGrGYqmUKpHx8BzV7J2Nr3YUNa9d9R6oF4xDsf1iQvYwazKkrFppMQavQWmQVWGsh",
  "key5": "5Bs8n5cmpJi6jUyjAJic6skR8pUdizcN2e3EL2AP5msLDCw6nGWGmDivsVcHZppNEfCGT4Fvi1QwPhQsCwA7o4jp",
  "key6": "2YWr3qrQZ9ZG3t2qGkP45VZPdPTzXAYN8opA2E1TK2JJnM3HtGrY5qsK3SYU1qTEJfMzzXsurjx9s4Jaa7ocdnYv",
  "key7": "3uaZ7MUwU7e8r618k1Q2hYpfrzMeWGByUXSXUrir69d6jZcDVFyB4KPQoqUU1naWnJq3N2uY841BL75NDK9y5zcf",
  "key8": "3AYJQPKJykvoXeMNikfokNAgq5bPnH3U1Yj9G6rZYzeadBWgHv6SRK6CLdMbCvBm55Wf2sfSwAA7gQ1ypAtAzXTc",
  "key9": "2aKE7wJbWPpv2MEjTiQeK8ogBWqmiNTV1iJYQezRXPJDMsqrtKmS63Mxk76W1ce36LEuKMAbfDBxq42ENqnkHvHu",
  "key10": "DvYEMzi43rhNfwuEZ9qkUonfJA2SWQFTu8AUyXeyMR9oFL6RGZgAQkKxPpopaV4x6D39Z5DRAgToZNZBjs94v4T",
  "key11": "go3NrQsV5kuCjTQnxaCxkTZkLAS79qbh5xhWLFQv5dqxmSFR81bD57ePr2ULcUYrkhYsnH5rS8EuYEzxj6TX8Md",
  "key12": "2SCNhiAfBiUdpM2ctG77GHiJ3QT6ofPaQn9HNhVokKXe5RRBKA15QSwt3HaNa1EWDSdw2CycqrXZ2sP7vyvjQmPA",
  "key13": "5QaeFFqmvZ47RMB47gVENVrJAGeMT5uVSBodro9dVAEM5vfrwxvcfFMRyqiPaka5wFng3zJyXnYXXSQ8tUSSrNHg",
  "key14": "3vEgKYXp6KCFZrk8Xo5yXbGWK1P2yJ8zXumEprQGdDdJSpMyXf5zhgMRCEu5XEStuiw1pSfwkkozpeFSaYnbNZGE",
  "key15": "4SQB8Dz1ky3mDcYNJ4XNFA4sHC37VVgcztxsgFKkXG99TmRRKWB79mCQ6SAppBU3nk6x512aGtwZroDMpHjUy9oZ",
  "key16": "3RZk2hRhjW5z7zxYjXdiVsXFeuuodtBJRoGt77U2KU2Wy9Y4p4k7VvySdwG9txcWfJNdZcYtLZpjuwGnVkaMn9SE",
  "key17": "4r8uUfqKaNZjHYAg2PMZ8HhTFB41foKEz8fhfMYDdELHBgXq9GVQfG1Rmh9LYeG6XerWHXFt5jrk345frDUnDM4G",
  "key18": "5F2omxSzpSjq3EW57R6xEaDZYrMF7M2J13DTr4rkWDfqEe2ShMzoJvk7uRK2n8YV95TwACA6A79YxmHGggy9pQFU",
  "key19": "FKD1Gwifga9WpumSAMro4WFxiyXrr9wgmgxLMc2mLiP8CaesPbbzD7g1zZerag2S1YEZy59mPgDBMAhghqFSBkp",
  "key20": "4k5VbDMvj3PSVovF91NMuQBrzB8QAnryYAHNY9aQGUdcrrXyG91kQVmRLj216NEje3uB9dL7MtayDtgWC8GKpLX7",
  "key21": "4yc7rDcxB291cfELdF5RJ8EjKhW9g9UL8nMjbZ3Qw2142utM3Nj5yVnVafYZ6rMPmENDMoMdwL6hZDSWuV2kHJ9T",
  "key22": "5yHcfnfhLH7uQRA51Ypv9thWsgbA3qE4Q6whwyjBxUXUEzsToTbBdGjw67yCReCXrbVQgWHfAYPhZCuEM8PjDCoS",
  "key23": "5tKrBaa7kC19EaAfy9WRhNR1sKBV7ceJhmKzJecUewkXhpai9HBXLozX5ZmmoLjVTJFqrTiV2mxRT3n1VB3pg2RS",
  "key24": "4gYSzYtKXzQK3Z19PjgEpEQtV8S8GsDjNrzwrmE3dExuF3u91i5AebgC8wABeFywHuNbR5c6xUDZPA9CCRabNc6r",
  "key25": "3qrXM39o2EqDgkHkhRdKs8DhNB9Kevwqiz5gaz4wscZGsg9nj7aq7FeaRDqMkA8Q6GAeu5m7PY8X4yazQF6zGNtb",
  "key26": "2G3qiTCKvt6DSU9qcNYurvYTkjKsMdJckLtQ4SSXwuyAo2qgwpp6v3RAaVDnwQmHtU3gM1hdwou4mKt1KSPMJ6b2",
  "key27": "KKDpDmdbMeMesvG4zrZCy3vJukaadwQs6m3aZTtaRKFbR9Cf1RMKyPweZVJwb9ENyiJUw2DzuKVgCcuXBN3ENSB",
  "key28": "4QAWChqFaovrAJDJAEJuLuymcuLUtzpo3t5HTcr53nZV4YfQwuZ7sXxupBeNjyoLg1ikwLkyzf2LWFBpNx3vYxuV",
  "key29": "2PJB6iYUGzenBMN9u878YW42eCaF2fowBXy2kEgm8NbpLZmiUizkvvdcMAjC5YpVhBXLYLhDJQrHbR1xxDKwKSi8",
  "key30": "2G1okkWKdeaC4VEPXr2Si55ePNQ3D42Zgr3aKdiJWR8U9jZDKTg4vqJ8KzaLiqSphQGPhXZEorLq1L9GvtsHDN8W",
  "key31": "6BNPWf44utEw4KVTLtGu7u4SBnTbXiRpYrZcYARMhF1uxA6wL5Zwpx694BuvGvQkMSAQKzmHKGNtn2w7QnfaHMX",
  "key32": "2nMSf52RxweXmAm6uCYqaVKdGjUFYDmM3BXuchkNgidVtq85tJeCZxzaUUKVnuir65j8pn4BmiRZxKEvjfEEsAj2",
  "key33": "4ucR9XcoNLZARjjZByQnSnBHonwcGAUNrApaEYm9D8JMCLZHA4qsiR8NYsa5SREu4QdKxRG1HJkV1wmGxgDmb8iv",
  "key34": "5eqXtALa873szrJ35b94aro2dFVaPT7Cn8R17DSGydkacURtpU8EeJyr718FCbvUy8bUPHQv1k2dLjN2KUuGFUG4",
  "key35": "2YWT5c9LXzxh2N13rQNuozVDVbmy1mMPKAEXroummD5Bgf7cSF8E6CiUhCcBmx5uwM1dBTFUzMencSrXWgpCHp8N"
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
