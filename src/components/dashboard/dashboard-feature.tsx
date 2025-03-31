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
    "5GRdeMzuB2APw6XeKTGxBccmyJRm9D5QR4ZHiNJsmZ38wtRF9RNQ5weRtSchBVSNcmyJWHhQy44CxfottVyxWy7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nmPvT8JvovoHqr9p246DNyEtWWjWqccua7hco5rrcbN7VpXUyXsbDW8JuQPYPBRpMzPWpNxksGHdUKgsWisHJ6r",
  "key1": "2fbj9dw2pm195vcYtMprL9BETbnKEtSM1vf54g9RBoPFEPDpxLzPNx4xqCbbV32q7XZf3ZukrdCmtRJuhEaYbfz9",
  "key2": "3iRhU6oLZXF7TncLzeQ4SnuBp9rt5BYJJV9RoLRWMRAJ6uDdJJ6X8g1jqEpN7bAmA5EkhhxUfoY18LLUnbAqj8Tb",
  "key3": "SFk5HcfSUfL517Whn4C3VfkDqidRAUTngbrAwUXzhqqyFmZY7tYCoM32Kt9j3KFPQNhnMpvB7EwakNe3KuJVszS",
  "key4": "3PEwWvdDfzNjjoRCobJW65DQeC47p5LK3k4J4NQw5VA9jouHjQnY2bMiVhPW6Arhi6JHvqQyk3UX1FXjPHyny5mM",
  "key5": "dBbZiqCKAyzExjytV2HVcDVhXP9vcyCuCF8jtzZTzqGadyroFzVLixEeRtzZw8QFZQYnBxQUYQDYRWNbFRhBAQh",
  "key6": "FxRWWJfuWCn3kc9pQgVBm2QrnFjLuvNCgYvPNsRvoTo5VpSZqHb9YeybBwtUvX2NHuMhZ6juS7BJBGTHEwnbHZQ",
  "key7": "2ZHotx98bPDdJgPRt7iqG5nt35MhqPmjDckGQEsLGh4UqFBgb1JGdxjbxBtgpJkJZBYCRsovxCRFzD1NgZbvhcsy",
  "key8": "4KsjKrm9j7APv6maWBuGPyDFZKP7k4GkNrS2mcPMfgkssHtsGb83mHyuBu7TdB1Jfj6eM7WFar1sdcyDXhJsKb4v",
  "key9": "2ynnvw1gG1f2wFPRN1vpRnLxn73g1utGUipqmdSE93CmiyQTF3bTmYHt6uaoceJ6C9UqFgDQnoZj5rMeJ5j5e7Sb",
  "key10": "48XGCTr4ZKc8kVxCXCJHobBZK5TbTTMjLYfo4PxASiiJxKWp4m7VjWzByQAChvMk9yVFi5VnYu8iyq7uVnYd9aRT",
  "key11": "2kbu6pm8NCy4Hib77yivL8MQC65UR9dPvdCeTKiPRKsQbD5W3hqiSAutSuDLKrTbEdAHmhkwj4Ch8G2y4KUBcHby",
  "key12": "2GDFdTnwxr2bL8dAb9LXd8muiR1jbT2i9wctLdnoaQvyycsz7GEoTvP3cBpQ59xeFVEBHJrPxcNZPqHUE2pyfAp1",
  "key13": "2LoF1qjiJPq6NJMdYQmVisGcHV94j1qx9gDkdP6LJGfo1BRbPGBYJSB4CbfxYXfWbcdFWajGnY4UEqtmK8kr8o4Z",
  "key14": "2Y7cY3cU1983N6QH7xXxrX6aAWrtHwwkSe3RSWyEN5C1vNr19hpxhaote6cginGZoBiJR8nJEWVTkiu6rmTp3h9m",
  "key15": "4tQshLYirXRUYtuiG3gQjsGycLt7931Q7aha8BngvZZfoG4qCLLyrBYqPGQcvmZpX74uqruzoAcRHF9Vgjs77tEw",
  "key16": "3au64HzqEtyEkj7CuiFCXDd29KrzAWT836PwYELdZ3EwV1e2SJ38AgpuqaxJeALc3C6qiM2eaxWFtMs38DnUzLVb",
  "key17": "5TqdQb5yDabA29nNsv2YopbDJ2dBFr1cDukgnKMH4c5JdRrnZUrf8rQhJEiaEJBPTZNYGdPrszj8tJAvd8wnR4V",
  "key18": "5pdeoyQktYFpTjzuxXu5YS38ovSMDUiKPr85Jp855Kx1eBjg4keeayXwCRye12jyisKMcA7dPKboKzpVtyMkcUfS",
  "key19": "3cA5K4PYuY5siR31iBFeDPoQ5EUDAYWg3JgXZ5CxXeQwWGSxLjihwVWX9DGvGwLJ2rZumXBUR5NdeXAjSdhVwRny",
  "key20": "3Bi7vGqoWwWkvkQj914AX6YD3dUqugyh5EGYzZMDswQ3bGEoV4mrccYbKCo8oD6EymDko4sUpid5bS895oQufHA1",
  "key21": "4LTET9mMNeiVNTwYjScs14vfQRUQWdJ2Wyow4u19v2ZfGoKy6MCJnAmQTpYsXwRXtmuRsF7Mb4tPjXMGr3zoJsEc",
  "key22": "5NXu15dEEWbWUyM3fFMakohtJNbR16o4wUUhByKLNtyVHRs84NVudRcy3UvpXKbE59TYzfwYFASYE4viqe3T536g",
  "key23": "3vSYjAp3Xt3F9QumTPBKNrePGGm8RxDK2ePrDR3w3d7Gm2KXUodQYWPPCY28PRRXwhgJ4fNcb6L4aWkJRu2d7BgH",
  "key24": "4CuLWn3zS3eMU3NkH16DYvMA1eqQ7CFyZmV1ggkHBXmbikktGJqhCy3W5XepLprNZGX7f1KAAiVi7KFSC1yt2Jcb",
  "key25": "37vkgWqzU8P9AvSocx4i35r2BLdPZdXtrWson8F7w4YJLgewbj4ZCGerGBqhZBspDHce9e9NyHaAgnmANQE21mrX",
  "key26": "5GMo2PjVgA1tku8kwBSSSp9dKN2LFW7QdczCDv2DTQknyrfvevRXvWV5NCYCwQKyYNu8MY3PpN5Uj6oCXvHu8PsK",
  "key27": "3DKNLx5PeVHDF4hkKNy4dtQTMRZAEXawD6pJciohKUvD1k73MQWgmEwxsBuKtWWnAFTLoVSWFu6p3Eb8TnJxc9xr",
  "key28": "4bDeBnBVbwT4dFUDFfyboa46h9Aa95J5xiVrgFeF3VRFLVLvPeGMjB59LLBexweh61vfD7rpXapb6bd3dTzCtavC",
  "key29": "3uNf2jgXbGy29PAuByobjq46ZMwjtRxnKtVK5Xr6Edy29baQgtRQGTikybwu3685Dv9MEmRKHvHtyPHWW5uQw8jU",
  "key30": "3XohpHGDnUHAS2N31gkB6cYJMsBC8QKdnqBD5bboZqXPBTGHBHjpzuHsqb8S95xjt65HjLaZLveh3qMZFLmFpSPU",
  "key31": "5BHHjdPXH7bdaqh1V1UCqJ5H24LauK9fNuHeLxTDtf27yT6XJmXPiuBdu6u3ZBvYyEmeQBgkg9RsxMJFHHzDeunV",
  "key32": "333MBpgRUWp21Qr5tfYySzePWiveEgg35Q2orqPuvdH7LThF84srf4h5eqLgQ6RNABLNqExfPncRoGQyze6JkAN4",
  "key33": "5Ybe3VP5FTvFo4CSew8pqoe4ahyR9jsiPBw9hJnH4XNtsAPnRb7E6meUo2tvFh58K4cUUCQ149hT4AKuAzcN4SGw",
  "key34": "3mRUwiTS5C6Dg1Xaqjo6ABmAm4fD1qmRfRKY3rpUCmMDCVp3Rqaw35GcFGPNKi7aGzq1ftZHoGtKydt8MA4N6tD7"
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
