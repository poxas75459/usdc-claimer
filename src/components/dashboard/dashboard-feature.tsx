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
    "5arGcmMyhCk1tJbRJuRggwdW3JJEFTz8mLUN6HkdxFKJ9AyivnqiXZJwx5qVohPikfXPkHxPpkGVJguzwtPCNH7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ME1fMrNAqmfXGaWngXDJRfiSy3qEAH6R9SxURP9JxMTBNxrgkML89BEH6NDt2quSx7cXKFhrEVLPd8wNGucDKV5",
  "key1": "569V8CKFGtGCXQybS5EmdvgZ1N7nHSg27ef3pCJjRVNkuqGnZt8XsfgormvNRAFkJymE5bfDZjpZog7t9h2tEED6",
  "key2": "3zFnrFP4wFfTdhepCzBqtdoLWRurgX3HfGpj41WjJPnLBJUtzHcn3eEEUBcPWW8bmfCyfDUxG8uB4X5PmKKKWpXh",
  "key3": "2c9CQXJqG3R1ad7y1i69aDg4QfLk9WAWkYBukQQccW18DggEESqpa2BapH9tuJ3EBm4MpHMPewWyNwogzLggxV57",
  "key4": "53cZwwQB5ucCWK74d3qEpMxAnBiK3GE3X3wUUZtP4dgpjMyYKt8VLS3EWgmWkpscWPGV395Yq4ufub9x9fSj16PM",
  "key5": "655kevtrFcYyPY6DhKPLT1BpdnKXt4XthhTF2rYx5brKSw3ebKUEcr6CTBFJqf1oZUTWvgKPJLcEQU6nwZ8weNcd",
  "key6": "2poVwEgqicHfATaiTRbCCMtyBHK9RQF7YWpiTUXQTWmBkrXPKv6dhsreLBS6hwi2F8sv7UfZLBTMM8b8bsdXxSYM",
  "key7": "4WPC8iw17VM9fLXh2h5WeVYbJhofPti8zEkkp6PjfpUukm8KaY3VUiJuXekB8cLK9uJx3LharnbWP2AWgH2y5HtX",
  "key8": "5rgSCUwacZPud4sBa5tMFCvCrs1EEu6SXwWruFgc5gSegytPHXM3TgCCj8kbnwkT9o6x2GryK59BvJfJfhYJwmzu",
  "key9": "wGH3QmnQDZAfWsQAaE9ZUhKXX9q87RxyqiEunzPtRg4MSg3aWcnwjjuRhDrZwrchs1cV8CnTwjB5MuZdgazjNQp",
  "key10": "5hr57Ci6YgqVsXyCQj9ouQDAFzrAXjNCP2WKze2M39zfRzYeRCCzBNt2oyqUxwkt81yBdkVzZJ2HVFBneoKBSY22",
  "key11": "43UvNmMN6bda4bK25YCdfaKinxzbqmz4xAWM5PG1ngmpxFTUGZwBvqHs7mB3GVXbcRC6xn4YyvMXTxnCZA7dDhzJ",
  "key12": "2iWYKXKHVcENEsYhR5iP49yYri4PFNJz646qVZwbRoRhDkoQH17GP5EjohVSsV6vQaWr5KCpGhnpLZxTJ9YH1uMD",
  "key13": "2VKE4K8Za8XCDRj6Kssb9NMWwngC3p1qkqF2QsFVfLVoDXauLeSBrnBeTakmycR3dyEqqJ3bzSYfQxywe24dULy4",
  "key14": "2rbvoM5Korq2XLdeuJNg6CgTaHpyV2eeCwkHu8ABUZyhCjK3j2ePArsGUS236YwUQ3bVHADuFiNXvKqp6j4T6iQV",
  "key15": "3scPRvJzPjJGRJuYRetLT5mDkuran6S26T2xHDFL8R16NSWo2wifyFm4J2bQYNdjrZHG2EnpLyFo7RirLcGbL8UN",
  "key16": "4PWgrMWsyNB8BDyWqFTdq3QUXW8d68XNJBgSqospqcSLmHAf6viF2empgKb8KrUasn1F6H9d2Ej4MwFemt8Vc32y",
  "key17": "5kZx74CXwm2QGVFWcrYSTC3E2ydzbj9i63yFkRVxBntBpvWD63tyTodwmXqQa4Nkk597tscbXi3MsGsAZBikjXcY",
  "key18": "5q9sRWgpxBi3G5h6S9ztSpLiQ3ocWs6mK9Tp9vWcb93bUyGJrvp1fPdSqAHJBRc6qryerqaCDkf3zin5jcjPzdJX",
  "key19": "NdRHBA4tBeyphNVeY2zsa6cfUQfyLUY5cnU4SLSdXp6CYtY5AwBeMbjwAnyttJAJRhbj8n49kGAeuhRw2hWcEGE",
  "key20": "4VQpJHveceTC6DHDBtKTMfeRe6pnZvJEtJ5c2uPDuoBUNXjcei4xWjdRQqA5S5Z6dumTBYbvKtGzCScTme8JFBGG",
  "key21": "5JZqCEfch34KYTpT3oN52LB5SvpgetqfZJCqtw1B8CYd9DSMM6JE8cTRGYSNk6pVH1pKRxgBEgKcayPt88GZY6Q3",
  "key22": "2WBHgg6ejX41tGvCseEgSxMQUMwr93HU4XPbrQC1EJN1NuF4GovzzF1aP7xZHDsYL9uRoXpcnL69ExRw8bPHpXgt",
  "key23": "4y78ewMmCATUPqWRMbdWPeDPaU3X4zAwVyb1tjzJk44yvuEeppoJVs7wVTprCC4RueNcjpbpdZ4q8jxDoAYnnhSN",
  "key24": "4B7d7hjynojabsoQnJEsgZdZkUEefpYMPcjRz1iCT2tdA4g3Ey98Nn1A2yeD5xde5AYUAGe8w6Qgz7gHAg59enUZ",
  "key25": "5vik9hcGfD4nyP7GoWfBbM1i7DDxTxDUrgRUbeuDdB4vem7hAe9GYmfsDQEknkPg8477wSxUQ9hxZJJvkj77djYM",
  "key26": "5KX3wdg5GLJr4d4ThTJbJw7e1RGskdt9LUpR6hCboHVcEDEAv95V8mSzBfvv8TERs8mEgBn3Kf1VFA8ApCaFT3tE",
  "key27": "2aVMFVKdRdWjDwHMPhsTQsDmSN5TLw46oSvzbxTiCos3kYVZCJbXWW9ukZDdZmdfPJdVmoTm6SR62UUhkwdn9FR7",
  "key28": "qM6pDWVVCwgZ5gXEbHhqaJTqtm9uPLDt484iCqza2ZAxTZncL2A72Go9tcazdrjTEgGoeJmLAXH1NiffotTnkdp",
  "key29": "546oCqYZADEQmCqdWPmASawTajACw8RWWiSPrZuZLGYU49Mnas9mSGZxiMfFVKCxqCYuX93aqcYVmiJQoGHZ5Wxy",
  "key30": "2DpRWUxzBp5zRD7JLuzzQ1oQwAcWoZgCB3TteWVEhHPuMuymnLWgKH7XtiWJ9bvhTugaPxRnEWCtPeVyyEqBktLE",
  "key31": "4ZpJR1bzqwYLSMLNPqwsqobfbefBVD86FzQutz85un6mHaM7uCZXCNU7MHHxb2Uois2UxymdH1GxNJ5v9aRbup3G",
  "key32": "2DCRgQ5VYWqZEthBMwZbUTXWSZL425objH7fhgDHdJ3azHUciYm5eCn81pm86gzWkZBMsiZx5iMq5y9J2JoVJnvx",
  "key33": "gwBJQ6iXV8PvTxrhcv7JMuqTEsrAjX2Fsx9wwqZzRVYnGYZ5CfSC8ki3xUz7FfXSgirzQa6Ya2AFci7qPBHrCw9",
  "key34": "dXbHE1VQwXErQL1hS65qpzJL2G9U8oJBHEdBkTwRASa345aKwBFwzomZW3XgNnfxcGcZzsomRjs3gk828GqrTa3",
  "key35": "5jBHRS5oa7hZa7rg7ierjoZzn2aej5sE7hGEBrwLpjXqxxV6NsrE9Z3NQYiZqbPyuzFVC24XvuqfMucTCUDiivwS",
  "key36": "3S2GDPDdUCf2XC5EnHKtsY5TiTVr4tVpg5RdkP2tv86KYdcxdBoFq9jSNyw9CKuxoQaGecJeJhxbFUpgicBmx2zA",
  "key37": "4ByhfwSFmPcqr7oEwMTwZTb8VniCanuGkMXsAwahfntGLBnK2k5w6UtBSR6aNZf3D1PqPCPRThPareRWjTRSAcHw",
  "key38": "ZPcvCUURmZHPWhrn87xgeouJrW9q2rcNBiccMPsE8VAZA4VUZxM1qTZxpM4PDQubbcGrNMM4TCMnGJKNJTKBktx",
  "key39": "32WWphTkHQkj1bvGAVAHJn2gJAvx9dpydu4tHSWNMyYv6DbQULnLSkg6MiueQ6jRXRLdguN7U1zCQi82TY7Wgkq6"
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
