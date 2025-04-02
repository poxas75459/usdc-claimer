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
    "49QzmCmoPx4Cy8S48ZPDWvai36Lr3K36zfMZi6T723j1u5UnzdvJQHmf5mAYA91TnfPCa1vm5Nv8M63aLg1gY1br"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fxnFvDdF64Yb2NZBmMvLwxyoeiV2qXTKGprM5R2eg3UtW2PjcniNTX2KUArDJtdgGCx7dyDffBr7QUydQAwokQo",
  "key1": "3VZxiHyctMy5CAtyHNkZREbrQ98K1GuGxCLs2nowNdxKMGM1mcbM4GaKnJejFJDro2zMgPLihZ7FFpA91w2Lp8V3",
  "key2": "rKHYGHYrhb9eUE1rSNbUe9YM7EXFt3UdrRsC4is7peuujgcXAjUWH3pbfBjjQq8WrNANN9SMnj9ZghwBx6sKunm",
  "key3": "Gq8E6SHepC9LJAdGPcLZfLJkrok5761CMEvDqHoRRz4LwKWR8o2DEsbe6ZJsGuxZ2H8eSz9pbLRrMVvJ2kHg2P3",
  "key4": "w1kJSEPFEu3Y9Rz8Cc6sZxjfrQgJuXzmEYKfbTyqkdR4RiiTvGDfwojLTRYJ2j765RkTe3Dwq5hJq4jmqcgBspD",
  "key5": "5BHvgR3SaTA237ehs9DZRVSKKMUXXmSpCbUWBBN4gzyq9kBtsYhi1WnDEYMn1yf3XxWot8aiVcmfLXsd8E6mGG4L",
  "key6": "2And321E8t5ug6MVtmRDRPaMfHsWpiuXoFdDqScXSfL546tt6GaJG8RrP93PK6rLNZL49ZW4ugJ3krM4z1DyjnoZ",
  "key7": "317hZSxt5Rm3Xr7hNw3SnsqW4Hcm8hLRdHixz532DS75aiJj56MfLkNYQ6CyFjnmtnDLuJSKtpShW88bWWjHfJv9",
  "key8": "2UuyL3sJRskqEyDnQaUraTDBQv9EyGFdBqDmKW6P7Qtv8Wx6Jy5kEzpZpCYEy1nwr73t9uJ2j8y5pjvWkvkBiV5o",
  "key9": "4SrDU1w12ejdTq6LNQmE9Srhp9yJhV11Aou2RfKktN69ikAD4yjvLMAgwQJPSDz6t4dfAw25TAZeSRyF99jXVC1r",
  "key10": "3Dw3ivgKdWQxz6DeWooZXsNySQRZf3hKeRnVjYG6QLdRzdVZ2SrTtfoLtrbdtPqD4JqQ11bzXYZVgxNfXsZXWprF",
  "key11": "4PLKJKMbGL9XXkkM6km8bavr8UQkeMaVsu568Qs8XJdn1abAykaVoL6KATKH3NHmNfytpVDcFdPAgBcnqSxgk6we",
  "key12": "23sULSdX9EedXCV2RdjMwqCdX2uaw7nifVpiWxV6NUipXdXFq9iM8DgN4yFMTjBMtLxavczchW3rTuQXeUxD11Df",
  "key13": "3W1rSxqRXuY9Mc6HzuRCoGMoCp6RkrNH4uiNxy8jdxjzLDhoWsTuoxd4rDfaUm5YjMCG8bF5DcBeRmnTvRBhjDob",
  "key14": "3TJXw6wWeQnapowdJ26T9fjcn6Jzz5KqchDURz2yXX7YDkw3dtU9PVmaVPhHrovE8cJM2K69KeY3Xffrxt5VfD69",
  "key15": "L3PceJGHToLhwVCfsSSWon4q79YFkLFh7mmsHSV1xPdSmpRoMD1qT2b2AQDfiEnRnB91SD6taAyWuStD9btMydT",
  "key16": "w79vTFjrgrei3CDvTvNd6GsSRREyHEEdswRgmAaJbK4d4xNyiTUEjKF1wz2pC4u9D8YQb72RR3xWvVJLPdAmrDr",
  "key17": "fUCivKvaPyNYY8StVrf9cSDYKGYUuWEVRXKmac5Pk3KGArsuAmoZWiTaRF27GRSygo5bHhW1GswYtP1VwVVgxsu",
  "key18": "28H5Xv7qqH2mgEHAc2khZqNN1gE68LzBzUAuQndJExkcQsqtC6mvMucEt541VK7yB4axaZyjFSBLFHyxnwMvKtb6",
  "key19": "33VuCfU7bjBvV3w18NhQ1QRf23CEkFzxeFCSP68cYXXpCAdVH1Qjt2L9dKWby9cfv1Mcoz1Rq8z6PoEvp8wBQBWF",
  "key20": "2kDb58AmKkKh1Wf6Z3jetXvs8a1toBQTUSLEDfDgqrjXRCRehtHFSu4jfZSoQDQxKiAyzbc3JVtRLy9LmPBUvakR",
  "key21": "v5EnHAaLZhoUzEy8FPrBohDYwHGjnRefaNAz2KLtU6hFkFTmthe1UtZ6KZ5CMMJNwGMXkAXqi81NKg9ELZUDrGE",
  "key22": "4UZ2iXKUFYFLc8QXobcQYiuzmtFetGZcuyWXBG2XEfDCbbmku7yJD7YCCzPYxRCYUoytyf5ifJfGoQQ8CKQ1myry",
  "key23": "2p4SRiokuzUKtRGNDqG7Rn1zXD2FSaFaaH4dxPb4qxLq9391pbxvhTR5RDqBCJwL1RHuN1svmLfXr55V1z68yQnF",
  "key24": "WhqUUTTSMHKjyuFCBxYKCz9XRShfaYFxaZ8T4crw25tooBqZKGSR2k6U5XjcnrauGFBtC4Qsdj8j5Xjkp8rYuhX",
  "key25": "4coXoe53edXcStEGdATWAycMyer16HHpK94U3Jx4E9c3LBhsGi3etJ4ezdHZYvUvd27GQBCPzhfzztjHmBrqjEzt",
  "key26": "daW38yPSDNNVwi6tEC4vL9Pbw1BxRC2MLdfiHFMBHeTDhGhXRw4LuXXujjte34b4UvypEwzh5qzfSThgxrDoXvq",
  "key27": "nwLNyJN2M8AdQFGaqYwGKkjvRUHMyxnnWfsYAv1BD2Mv7oMniNNnY9W2NsnBYqvcM7Ru7Poyogr9hzHYGLi1SX2",
  "key28": "4GRhjpGkWybTBtBznn9AUCxwiopwmmJPP7g2qF3FWAGfWneHQtMywDyJmSMhSRaSqA5CpWLSHJcGhnsQPdJnrKZS",
  "key29": "Jo79oXrG7vECwbY5CNxXVYbPf9rYSVUwAYyNiew86Dsp7mTkGEkMLinqAaDwJ1erXViYk2SA5JL45e9iyW4CYZV",
  "key30": "4gD41r1WKboyaSSkHTKXUw13yuT53KVEHd6GVWvJWoZ8rVK1UDkfiXtwPhsGmZqYzx7Qgw94y5j6jcY28uzKciAR",
  "key31": "2GynCVFhcHiYUnF5Q36VkkYeLLnwFQpFrqo5yyDBt9UVhwDdj1LWqJnStWZVbQ9Se25pXhL3vYMsMgu3NQ3aWzPZ",
  "key32": "2GVKUJB4eMXYtwbpJ8VmmiHW59ePhcNaTxMjzPYYKbPaFrLDk4XWNKx6mQWzef1SevkBYdkb6UhhGSaz1nksL6sk",
  "key33": "2hSr1txstXjaZRX5XRvsuKZUny9KcPFb9poGdSpbt9akunjTKmai6NpaycyER5dDwYQ8ryoD6SnFomaodQyGnFDt",
  "key34": "duxuA4ePNfmroRRRfbZ89Es2wS7ogvEcLUTrUuhtMrr3w133Zrb1RKHNbourRhjSizZZvnuLZckne3wjTi9oZj1",
  "key35": "3ZtMnTpNK62TWzWB6kPE4gX8mMu1xZBDoy4nfvG6gxaT6gRBmoGo8iAP1aRf6AUwUKQ8ztWrRUkTdZ5PeDu5DAdk",
  "key36": "3cYe1EorKLnUHCTvwwfJx3U3U9jsYUfQCG6fbByKFEugPKwtAFZWJn9SEJ7ji2PPhbTXpjXDJf9wfBALt7sDRCsx",
  "key37": "55CyzBncNXeazX31DAWvZeoRVAoYjAUMmHMgPJcJAMBEr826nYKKbaSWX1t1J6LdVKY3hBff7frpDUJtF8Ji3Mmd"
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
