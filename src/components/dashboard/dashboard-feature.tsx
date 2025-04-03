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
    "jeDtqbQAAg9ZJc7bJfZs3Tmvbv2eJLW77CZBRGMCPr8k5QF79ES2sRgciMHCpELTBAELgWDv6KsccL3GnrCPs3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JT2BqSDqN3pD8DN95d2xkmA3tUTE4t4yPdQG7xZafEJNK8jqCqCgCzqVDZ1FPqqh3cESgPCrPGh6GNx2FdFFz8g",
  "key1": "bCT7DxULgEn2vGTfBVqBKhbHVt1cbYsyzY2aLQro2zUbSmFGhw5apYBi8MpPHznrBki6176BiJRkRCbpdoQ5L2C",
  "key2": "33F4iar9vj2GG9CsLAzbz1RSdxGGPR5WV4KvAuck5wumGW4qixzSzF4ewwWPMdzrUegSb774CaA69cQWwvmEzB5n",
  "key3": "47FwiVUnsbSgBo5wtafyfQhNPxXGJNeUZvrdhqaiYA3fdHetfNomRbET7aURSuKL3ffwd3ZFinAMXxttsuKGnxHF",
  "key4": "2ovrSK1NzefsqH4mV4dPjLLphXddC2v7Y1nDWkcnLqkKbmshBbcRsEVajNxKcMJLK34TY4Rj4jmiz3bm14fp9PA1",
  "key5": "EEKEqiiGnL4eJvyExionUqj27k6Vfivv8ZYTrnvGpRmSAkk1gB5rSVat933wtoJpgVjBu99vbHMJtxfzhturDN4",
  "key6": "5gP2h3KsWEQEvKnsEj3M99aL5Dcqt86Di1XnztPmZiJKWZRk7NZcPWpGChHnSoifjzvMtQDQQCWRRnYsQpaL6ABi",
  "key7": "545dBj3BSHhsM59EY7fSKqQv8Q6t2DbzjP919ZgAPvUfZUDBBB3Gh1GvZ5UmHTuJGjuBELhbm4r5Mjxq3u3d7Nz",
  "key8": "2jkdxR6CrHKuBNVKbXtHWtvV5ySmPGYemMefieKRFCw12TgawDauBKZBDhKGYv6zjPAhbmpit34JyhdTNJhGviVQ",
  "key9": "253wFFmFw15aoKDfyYGT2C1RtdMVVpt6iWWWCsGtTnFaFVyNDaAS25PAS4VumTZViFswRRNtEfhz2Y7pBf76ovcQ",
  "key10": "4MjfofVDpPKu4ofRJo27vFgSGuKCQPeJmrjYKKg8Gz9ZiqfRo23jtLvTND2rmXrNSt42mP2L2uGVWvM244X1qzSw",
  "key11": "3oS4bXZ4i94JFadQCWeNfSCaZf4jRNca1nQLQ2C5tih8KSdXZzhgCnWDgXK4jHPoC3wYVX939i5aQ4ZpubSNi8tn",
  "key12": "j3WhLawfmgFe9fkFKzaNiDPQfdvxtxYiEouxGDTR75S61JCdqMUfmmqyN2Kz9DvSjZR2gLSPb5TtPFxhStT1ZnE",
  "key13": "4k86Pg5QdyPGfwKvcQqT92aFRcJfxcQYGG472we7KRLPEn5x9WBTyd3Leuxkq3dUtyNvmxtVfrrvbxfiAXxxQa2L",
  "key14": "4GceVStdk97bKLHQVsXwUBmyGEunoF4L6AgU9vD6cDY1m196y6q9cyxzM858JZSXedAwrHvQci1kuhagHoLVWTEK",
  "key15": "3cu69ZsM5tjpSVc9cVu9x3BCsaJNNRnhrEw8mam8LzqUvPFu5dTs66uQrpw4FXNpXVGei6XjoSWMog6e6JN94ZFN",
  "key16": "5K37W4jcjmyY9r9nLaZhZNdt4tBNpTYVvqb6wyfbkw56hWLwmUryxT9ZKsQoyx9Eh6SPrdgdVeynSai9KzroUcjp",
  "key17": "2QWygoZ4THqAQctRNraQxtaBj8FhLS27b5CaZi8EN94xTixAgStpe7k7SKNE9b4e33VdonUdutyVEiXMqeECPFQe",
  "key18": "cWxnUXfuBjuSffbuhBsEYyvA5FHbsAbGRbASWM5BHNpoU29Vjv1tWXAGhKCjSkqzgXoqYBF2K3kZHfYaGh82ahS",
  "key19": "5H4nN3C6nC9aFkmbVVBG5GfhF9ExHGaXM2R2PE8nZC2oAehFtwWXhLGKzDMyPawjsBto6D9cBMWNCzPaXJ3UfokM",
  "key20": "3HrY3Fh7XSpHnkyJPK8s9LrXAv5Vfu7XW2QVctdozh2xvUuWfSLGsdU7YYNF8fvA7UfRBc53yKUJTryDfjP2jATa",
  "key21": "2wf8PUWQx3jWkD3mYHNoQjz7vpB6mFN2AMu47RP9BdTxs3KH13cTR2Wg87C91eb5NrCLhmteFgqLtBAPvZhRN2Hd",
  "key22": "4Y67QGN3mwc5rt93ekeq59eLbvo5s8PeooyE7dD6oH17fAgi6Ty99G83vvgQjNZi1L5NTran1znqTy6CqjTAWov9",
  "key23": "jaHhpmkpuFadSWhkkeZ5Rz9uZw9bhokqvv2f9CR2aRVKHwBvNSGuennCf4DHr3gniSYakyVe5imBnMiHDRsBMAQ",
  "key24": "36psKzujgjYxTe2yB42U14Pn9Ed733sJLkA7bYNCn3PUqRtTU71ApoGAp5TFn5PhQNRCgGx72cZAZKg1yT3ZXsn",
  "key25": "W21ueihV6tkE8zysuEfmqXkxjuQhiTQn8cXv4AN8Rq8VzZ6azzrymgD8WDv85GXGLU4uKTu1k858ZLJjhH7zBtT",
  "key26": "2H1izyD47fanQJDjXuhLaAG86wdMsm73eZfh2nYeEDg62TywyR8ZpDD1nHucw2qnNxCM9WEEer8rZyj85jk4CTE9"
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
