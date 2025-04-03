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
    "4fg8kwycUyWpuvPuzozdpRSdm4QpfQKL6VBFWofS6riUvwtuNrQHoXy78FBFhGoyR5A5CU4d4ibkAMWeGF6Qmxea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aRReGzZCUs2rEjmfqaFsJX47dtBf1NH7eAaYsiJBs7n1BHnnagomdwtU7n3Y7dc5SJMMeJkmLPgRA7J5868zF3b",
  "key1": "3Pm7s4kJpuUVvg2yGNxfLrtUxRih6rrh3F565Z2gMEpJhrW89XRz2vALLudmnqAAc1FE7vghZuCkxkv2xisBEftv",
  "key2": "NAPGpotU1BPHVMymrLaumD1kyewPZ3ziU8yEhSnSSyLc61ifE9PcJLbrA9DTDbhfQqzo67vLELuh86JxpTMFfQc",
  "key3": "4ddbBD17h7X3FSKMcFNejxkhMgf9iev7uxP2YQzzd8deF38GX4HhgNPjMkvPhHoeED9q26bikjNu6MFkJesimUQF",
  "key4": "Zu9iie6qom2eDNsRHxogsy7hsjFCQimTsB3geoeQugxipxnub1AT2Edo3oHGLyTazdR3GMkfkhXfb9Tid6U8QhX",
  "key5": "2YyAxdWc99qSkF1M2ectqvdyhmj65qVZu85hQNG4avqgYiCKENSd3N98S7upTAU7rEWQNwqryX8AsHmK3Ug42PhF",
  "key6": "2D6FdRWpyBuhaz6YqomxdRfzTXgWU13TMo7U5htK6Dk7VXZMBYTnFNnZcvHzE8sZRZfhjzLAW7zzC4KSk8wbEmCU",
  "key7": "5BTvRUmcERHsf1azSBbFCb2XZYDHdBHFJsLwgcquZAbySn2QmFwv1DjQnCPnwx5cfFPVsCTQ5hd2QLCC5RKUdbya",
  "key8": "5rM4F3CeLNpPsVumZJ5Mch3mX1DJWrceBX8QzwVEUmsR59paLxh94seV9yRxZX5F8eeBQ34Mq6Jvhqs3mRTN3nPE",
  "key9": "5BUJqh1MghPH4JYVUfRFoEEghhpzg1qzMdjfxGkmQFqBvbTcgfLd3WBcZQGqhtzsAgSSdzUFtHYtZNCx937rBQwa",
  "key10": "4cZMKBkaKq1Q8uqMP8rcoNoYgJYimB1yA5T37Svh8ziyuvT3fxcY4ad1GghcD6GaJASqL2F8HeGWifDY8aw74EqV",
  "key11": "5mwMXGCr9mNdavWKBJiAih3vq1Y7k8qkR1zXhMiiL3xSRygXfxqb2CcBCMsYpb7UFmDg6BGmnJDZEzRowvZYY2C7",
  "key12": "2C8FY2hg5dgXaDUrPdJ8WShnLkP2WVJkgsxiXaWPbcxpDySew1HUggS6GTnE5yRvooPWhUmv4nN8NDJry5rka64a",
  "key13": "4vJG7jJ68FE7TjF7ABfWj6dJqzkbeZG8sPae2uT6MLtJr4waX83si7MpnXuJGoND6tcniv3tNNYuxERaXzJyJ5rK",
  "key14": "2CwsB2wnoCx26ek7Fj9ia5kb46fY1bp82i5FXdo8RXSFmHFo5HrU9StkLs6Spmh79TwyL3Lar24Dy13An5ScBVW",
  "key15": "5n7shxFbJCL3mM9kqUB1FXPVvad6AQnAdu1nE85DDrgXDmMhYRoFEyRExSxSiPtBRkLJcim68KASkEiNFwg8BBmq",
  "key16": "5jJTdwbnfqZ6ccFUDEzJJSi66vX8xpeQ5hMirV9NXXstCT85FKnPU3bdthBwAtJccLM3CA5g7PjhmLgJCK985ggs",
  "key17": "3eGqgavyCZDfvDrTiKN7aaZNDc4D1t6V7gEL21dAoX282fk383E7G2D1VUp3m5mpsCV9ouxPpxPnCEjBPvFv1QQt",
  "key18": "3bPP5cdbzkEeE7x25VEqAXrPWfh9NkKdomevi6XtqrEgBRbLtgBEnJY3kbVsyopzR6KQYrhKQykRi2d6324oSDe9",
  "key19": "2iXK1YALd1QZRowZhz9qptpLcaE8Fyy3xcc4zS3qxNnuPHRer55wzpA4ZJ5bhaHyy17LuGeXngjNZ2s5JwKB1Fmd",
  "key20": "4TPaAebqqPw4ohVBq4566knLaneqaoSCqS1RD2VzLA5qxdLkcFQPURXmH8G1Pqzt94RJVz18xKPNuEGzwBHbtPzB",
  "key21": "3KPi2X1qgiPvhj5p63FsCMPxCdZeUdUH2GyMBvBYzQ4rw4r3Xxf3nZ9GbEo9eQXzMAAT7Wyh6wn2oUm1usFNf8Ed",
  "key22": "3yrpMFKzbZAdNkQaqAFj9DevGTZEjngUAKvT1vF7T5qKnxVqAv33xGwgBx3WfvPtxAtiMJnNdKcfoHCbCgvAkL85",
  "key23": "38nFjWWViJuvYhRoy2N4eGqzpBER5VRiuTDNxT1x6ZeEidT9mN4axxUEqtqHarpFU51jawuw9wMJLQcPiyxZmKnc",
  "key24": "2cdNrnEymT3vRn5ymXqAgC2FaYDnKTTSDM3B2YJpuANZ9MKX3ESPy2iDzXPUgJchUDGhHibYv4id3Nu3zXYbCuft",
  "key25": "4DFzk9mSBbNkodyv5DVgWJLNzmziYfg6EGYoAKMv7BdJZDNzZ8oiiahVJ1UDB1ia1CJfAEjEzUKtZu65SPAb7D7V",
  "key26": "5tyD41fEDR9YZXuhcmuVVZQoYWXdZwutRreYfgEL8jxhPVhukCa7rpRDxz4tKUhXfhqWNo45C5FkHfD3fh7KwJz9",
  "key27": "47L5sGKW4NLwA3LNM6XArCkmH2W6p9fRVuaCKoARes6g3Lm4iUV1Foo5Ms5tPhXx5DPs7DNk43ZNt1CWh4vs2xhC",
  "key28": "465ukznMRcQ2F96tWYJ5n8PbQ6nn4zj313w3g6q4WiwpmqnVhmhNYrwEJA5vEthMWucPeSYWN3nTNreNZM4gGKDR",
  "key29": "5ia1GosK7rMC75a3REMVohQcMfDgxuUtKt32DjVEwWKuw1rmiriFbMvBuxCPc7N1z8YooVViMBR6DKJXwt6n4Tvw",
  "key30": "4bc68SagnMUNhzuvoyNu9i1F83pGQUr7Bt9vF2SdxAjKtNL4seBTvAZQALsQe6eHCYXWR2J2qEcRLPeBJNVhv9sN"
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
