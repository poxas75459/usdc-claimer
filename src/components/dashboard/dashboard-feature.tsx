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
    "2y4QrfiJ1zAAyLPXHnDn44PkHiJeNzeHRigaEbNEsC7woygbgcWxmDXyFSYjSZ2hcznXAQCyJMwQky6qcq12Li94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LKZNLBqKaguagBLuTAJNorkAAqamqSUiZMZBajQhdqtVMLTe2GfAY1WyHApCtqAAfad4LFq6fNKDjmWYVAwf2Bv",
  "key1": "57L5dc5fHQGUoTRYg227VsaBWLoR5F82PSwKSiMtKxqv4GFri3yw8JszTyHrzkdpJA9aaFvuK112ExUJ6LHyHME9",
  "key2": "3rtab8MRfNcF873kSJoHd5vcrTnaEC3Sh2f3uHCrTtmQPcgmVaE62VySYLmg75SKxCaFczohmNSk4b87NFuv8Jug",
  "key3": "1rNXh7KmrxezQGvX9nmBvqPLQBs1Dxp5rpacFHEgUFbbGJu48d8rrhdR6mWmctqxP49AbSehNCcdX2YdosT3PtE",
  "key4": "5thsaF7uWZXq7adC1jS3yQE2myqVbCqTRp9FWcUu79uEfziXvEAJ74t1A6vYoSRs49mAs8Ao7duGtUanv1YBLhM6",
  "key5": "4scpuPKNHmqJ6VUjuCyq1otExwHiCTrLTiVwudUhhiRX6Vtkf1WvM2Lo511TPsjDWCjXvmHnptvVjiGLBi9ViMPJ",
  "key6": "SMAKfvD9WgWd22VFoyR1Bpww66asCjhQUXHqCncx8nMBpG9oRdB9qSDFR2kMq3srRih4oV9LLRUqv1Sk7PTtxwe",
  "key7": "5yfp5hG5NydZ2t2MgoJXRHu5R7i7M2RhhTAM2CtsiRcWx7zRS9xMFuxomh8Snxt9UjXUEJvnJvkRVsCEuuSgtCEN",
  "key8": "2UJ3PmQfLJCmjP9bFT8pWwUzFRkPiL217xhYj8crgmdn65TFUQjvRPALAg3jGcJRh3dDy1qN6tBx1VQaiSf2NFJ1",
  "key9": "62PhvsrBS2cXR9pcydF2fHNu3wUSrwN1KT3ttg5QqnvPBGRkGFSxHLT7CRnPp6xCbbKHkQqf1dXorATEwfqRMdqC",
  "key10": "fv8UiwTpKE7zVREi1jTgisSFwb3FzmgqYDUXUP1gRs16Z4V5RtXskeKfnBPY6GXDVc2dCYPxKrq44uHLDhmfevo",
  "key11": "PnVPj4EKvZpV8mTMm3tcVkrnyKGtXB8yVY59TsdSJPhPzHiXUkm7TDsFBeB474DfU8VXhQGfPmT6eCBdYWQ8YD8",
  "key12": "5MWdWRHfwXVWKoidpsiQnK1hNsJUWzf8r6xmEKWBpvweXrQ9UYADdnepjf9oJim73JXST6rm4fBSqmgbhpiQP23e",
  "key13": "2FKKQY6GKi8soxWjoj5VFo7Jr8REhTLGZz32ceAKoqWArVYYGyWJXpmhJ1xWwxxdcfW7xHQTrDkqC8DGLsqgi2Tm",
  "key14": "4FqHMgEhYkY96fajf8gtU97hcUd2d3At6x221AvNAXpnQAYhCSgAc5y9H8sHZoqn7st6KhjTp4BHzWG3DzMDP8Jn",
  "key15": "2wqWGFgE5nuNwfLDKvkY9xAQ8BzPCzfCfk3zRPEhCscw9yvhPraaJJE5T1Km71DtJTQLpWzv2KW37CsMDYmCAbdE",
  "key16": "4tZYh3We6cBZCiK8EnvkU7jbZ6JQn33YZrv5q6j8aaxK8BbVJfYMTu7GjDcRhinQp7egGGrTppmPGipNFZLkvDnM",
  "key17": "61ShoyXKrnXJBTBs1UCPhX1dasP51cwa8hdEucr2DgCeZS8bqL94qMZhTsWqabcd79LwBBx9vJjeNG5V6uDMSYNx",
  "key18": "4TrKTgNXGgKnjY6JHJrsiR9hpXdLYM6JpKQFoiVoy52nJb8immBTM96pGbVpVYUu3U4xm7C1i9XGD4NGi6HzeV3A",
  "key19": "2JNPFQ4cUENdgAH971QxXRDATCgoUfBQtkvU6Ey2ZS1MpbH77RJER29fMtJmKTZrZ5WdHDYe874abRiYc37qoa81",
  "key20": "MayvXi1ymVPcBxCjTbuLrikLcwb4AJUzTX1GoNXgHhhAKzZEn4rxnfCmx9AtRBFCh5RtzcgtVBFK2xuVyb8LWAC",
  "key21": "3z6Rys9UdHgWHFPkAVHZjccuBghqkdTStZZqe6snFh2Kv4Z176sUZRMk6JUnQhu6brcABFf1aXxWbijCUJVQzdGi",
  "key22": "5YdGSPR97RAXMX7e8HJUmFvjXjvruofU9goMLY2yYtesLxJZSFHbg1tgpkgW1APfj5mCUpDtbacAn4wShpSssbAN",
  "key23": "3jaYopc2RT6JfH2KBhdvU7WNjenDo2uEzMgSkQ2SGxaggiG3F6TwnqsPy1zSpGUYJbyu9wbgAJUkZFtpxJANweiZ",
  "key24": "3HAbMYrDhJisDXoEyhr1KWuF2RtBysg43kyyzSo7bmCoAUPwNw2dhaW61mDhQeZLccHy4i9KKgRgSHvkqyoqk2rF",
  "key25": "nLbGnWFGXiZPg38tJYicjgaroVRj9PJqnMEMKSBm1TQLYjytMFD1kb8DTmKqQ5F6fmEsPTLrbeRBjyNXDuQZN37",
  "key26": "2LXDog14KprwGJRHDznY9hCmd6L3MjzTYJDQfr5PpHAYf6H9VeVB5yED9RYY6UwWBh8pT19gMDK47f3kf22wJfoi",
  "key27": "VpXoKJPPueyawivuvJJAS3tgWzyMjkDGPrf1gBT9ULCffxXPGSRZhAwvJGfdjNc2Xf4wgswkgqkNgaRVzJWFkoE",
  "key28": "2vqrgF9umPcPk6rxNoonuamqC1qPMEAhz15aUHiUHrivdtYrigXCYgCjsegc4nV4JbZmDUrxGw446noJL6J9JZu1",
  "key29": "4vCdpRviBfzMSkhvUukKTLFMDdEhyVL94R1YwPY9gwWBhkBYMJfVnD2oETkGSQJbiedj1iAHqwNyQvkTTYEyuSUu",
  "key30": "63Vetp5MvXon4pkJcW9AfqaiQSnvEjuFZLLJZ3vF1z5oUVxueE6XUv9bgtegGRQUaGfnDPyoqNdJ7F6sjRdMBKAP",
  "key31": "2WCfStcTApRKbdBkEQC68ssLkzKsJ3ngoQKJMMzZtUG3RxaJ1SYriporbob1GfppJYBU9u2Sygd9fer3BhdLCqSC",
  "key32": "63q266TaoHpJNaze8hr38VH3tcc4bdxtrEpRT1PJrm26VbUeMb2zMYjj9j85JoGsjfeTBAdAh8XznVuMqfWE3Rmh",
  "key33": "36bwU1EYzXXDRkTxWHnJme6MsaKsUtf5cLQtJzn3BNCoU1EyWeku77xtRxWFToh59cnYe83wZ4sxcbRjxVoCd7u",
  "key34": "2AY9j6ppKL7KCXdnXEABmF5WH8eQjFUhp2VMWbMc4TqspodvkSQLuvZzoYS1yrKtGGFuZvBYb6mFhYE8QBqmrcfG",
  "key35": "KXcHgrKQz41wTQJ84GQsBw99xKp1RhuEUcg4mwPvQSZ4iqg7xrviAbNh9Gh8KnxiZGMU8cYW9QvRd64HB9pKUi1",
  "key36": "31uFaF2cVpgXY7zz3ZEpNqmMYY4s3DFez2tn8fRaYrekKkHHcvv3SmoANd9LFPNK7oUneW9oopueQeYZLxqKBGdn",
  "key37": "oQ8GRpyCMG9M9uzpExNi95Wcz4Xm3ZNVQcSXtxdw2ZTFykoGr5m9DSSb1VN1VUvx6HD9VAPTgP4HuMAiwrtWAms",
  "key38": "5UUxVN3SzoUdsKFnE9sVaio4yfW8DShknVdyL5qs46jJUdSoeKYTHchqX1P4A2K5zs8Q9Umt5Lf7uZnN7orm15SJ",
  "key39": "5uP7x1X6v8eqFUCk7KmwXTCzXeAaBd4AgKcwQCtqCJW5NAefTXYqbV3G9E4ercz9F8AZg5uhdhGrYvQuUfaCLm2k",
  "key40": "QaeWjJRKTtXrrZDdsZCo8CX45YbmZhfXZF7Mn6GnGQS61MLtFzMHRpMx382fp7rfE23kZhZWfM3yjbjDUFYhUNA"
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
