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
    "2iehZg5VBDyN1LPr5e5xvo1sYibhFL3hUMNLAgeBFYxTYLWzEHMLTfaLuyZqqmkaA9jAmMTvvQTSxTnjB3We5iYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62qN9bmFJYnSQUSe2Jbskyn4BBmpW1YnLu6tyCvnFhZeF3D5rZHSPX7e2pY5iC4SBxHjmr5AvwWAVBbf56QzV3yk",
  "key1": "3aDcHxY8CBjrbNzmfcHgDdAr88PARZTYF1rJV5m9vTx1PBvj6sQFHpTP1kpFokjML3xqHyyT2zDUgQcT7zrRX89X",
  "key2": "UV7Neq74MRBQPq2RvJnEmyJJcaYZ8KuGwktETvt3LRPKBdpypveNdXfUABP7mNXGGM1xvkoY69UHDg7XyKf6pCV",
  "key3": "5U2ZNr7tothi5upDM5h71Vy4ahfrvNmUANksrQi1QV2o3wyKUGnbbKEyYa2ARN6NBukNfDUyxZuwQ2cQMPyX1dDf",
  "key4": "hAB5jDrWcTZF6iQUWjbtgtdMsr1psw5HUxHuaCREeJ6uqnbUK39hrAypEZ2BmgaEo1pcmycQVccACybmXw5WQmz",
  "key5": "37f4hCDYjWXiYKi7JAE8zeeH6ddLfgTfrfLqvVLsdZvVmwyDpPCAopx1gKwsCBSFKjoyZJ2eoTBFc6ZaeFiQY5DM",
  "key6": "8dCBR8Zm2DsSfSf4sVCaKLcf5o3JGjvK4niXCMiXjt9QxQxp6yCASGpy6XDmtBukP9GPWWzBhCv2cmt8TaWnXek",
  "key7": "52h4uM1Ky3neoPuaVMBM3fLZS2shQTc3jtuWKpWzi3s6gnkFBZEx6TzZSndV38e2YqB1u6oMzbkzZzkyGz7jxU5T",
  "key8": "46TG5NBNPbQacu1W7bffjqHb4SRGR5CMgWwRZK1mhbHjpFB8DCNrGsJ5Ap1U8hFesWoG8zDZbz28C6KUucGGXpM3",
  "key9": "3t5Lyof7xyN1jzU8XE3E1Lx6EC1ybdgVofnNjudVZ4GwFtX3Nbtctd3Uw6ozpSxdQbxP7B8KuCYsWMD9J51tHZmd",
  "key10": "4Tgyrc2WTycBes1k3AF6ckVr2AmMSvHQYUEMfXySV8Lc13AkTKNsyT6QzegfeGdq1Py1N1HKBg9xf8HSMcWuQkYm",
  "key11": "638VoxY3RZSBPU8x7Mk4DFWd9B41UojNC3rFq6dDh5YsdpZVZy5uLc1jSzmcmScLG9yWDvfpbzLPQxocx4Dem5eo",
  "key12": "5Wjdw1AgCspYWEv7f6xfgCEqfAVrSWvQq3vdM5Mj8pNqxkw6gm3ztshpwjThoJqAYPSnjYHo8QcwxggNJgM1TaSR",
  "key13": "5bwcFpTFooudYjzz2RSX22GHG9xAPBMSrUCWbULeAhVN3nrdeks11ebADYjVxGrQfEQk4maD67RvMontMKMJXqKR",
  "key14": "MEVTqe5ku1jbLphLrFBptNvTaqRncimy7fknH6npt5MEgkWjyzibwfDymgrwbsmFoUwsKSqzvvhyf8PDHseN1KD",
  "key15": "s8QmuYGvohNqbsp5AqsjkkHfQS5J6P4tB5TdJvxwe9ihAkaFDqeJryxtjxUFZwP7fUxG8HtKWtxahzJHLMGVZqG",
  "key16": "rRDG4UCVXAWPcD73UVBXDqZK7mfyjQQyN4TvcGK54dbRhe6S3b7i2xRYLB36WadWghFRC42PMKkhH1GMrBkiDJU",
  "key17": "677u8RcaLcNbnwC2wz25Z2HuDVqpqqnx551kGfM5Fq8doNyMVfkfpmCsV34TKPPsMqcZtD9kpezbNq8MVCSwJGng",
  "key18": "65fh4FjcYppdPW8efR6UpgAgmu4G97Rx2MhBpbm1suuWbk5kEd8xRFgQWNNPJbpZiH7Bdc1kAyZopGonbiQnZJG7",
  "key19": "5Eyd5PDitUF18xLTNB5JRsKLBx2jPibZpGeErNRXXi3vFXCAd42EARdXfiaB6SFApDecYexPphk9cYszkGthmhq9",
  "key20": "UMuPSrCPocRKNeuJwuoseJ6AK732o46Ymk7jECUjfYeV56c1rJzLqe8dntfAuWw2T8eiwVzCEtqA8p2mYyboMDT",
  "key21": "36AVY7CcBcSvr6JGnUDKZAEdYWjHqjzkLtRvwFxNfF7qZp1A4ML2AnTcxf1oTNXirQrrT2FMoUEwRaZGZh3eiV6R",
  "key22": "21VX2YQ5cPWXqosdstzWj9e5vMtRWV2YaqbU2dWtTMRigFE7Ty3iiCnonAhAKhhhHSetrPqDbcU4um8GJbYKBEuE",
  "key23": "5vpvf7T4q1PDjuY6feQqeoFbuyZVX7obHT2EmPhZAJPMtfMCBPmEH85vdBkoWZALEWXrrRQegjGnJqgyMdWXWxHV",
  "key24": "2waJBF1cXYgQK1TDA67zWGfN67EZv9rkE46rXyrWXJXWhXsmDBdXWkNRBC66NRpNuLbQaUv9BhuTB8SDdfvsHyxk",
  "key25": "2yw3XAbNELPTeMxTRcWww7P9tXSLHKx7EaAyPKQVzC3iQZpATYUcoG68vN1U1n6yBAsfccjiKy6f3uwfEhKW4YGM",
  "key26": "4MsvoSjGFm1LzFczNuJiLhZLn537n3iUvKP4JWDu6VRWqKL4H3PrySVXBN1qDp4avCauPdY6cQmpmPAPpSL77hZy",
  "key27": "2yFUARowLGDSm14RY6iq6veKjMuvE5yjbQgmmZoghA8Wpruz3yubkteBRgDAXjPSu5h6hRSZmJXERXrBJfCPijCa",
  "key28": "5xGfg4fSNjQbTVZvmvf1kWL8ervqGJvzoSAFQneFE2FUz6kpJEPBUFPps9NLCMwYxSdHrUEoxcSdmndCSbozURmd",
  "key29": "3PijxwYvtbJfVGWfa2BZe7WQBbqvH9hwYFe3boQzpQvowfoZMfsbrpsxvRWZtseoPoSVaRforG3PsstVry6AyA6s",
  "key30": "ziU6BpSXYFYZtWzzZBUuPR3CmrtZt7hX9M2Y5cLvZtjAgFnFP5pgxBccRPFL1nxaJMYKrG3EcprwSQWWd3x7YjW",
  "key31": "224CXKkHHdRT3kVkHRKtt2NmVvtkE7RboFPCRMa5mczsbD5xjR41cdj5mbTpG6HwePxszZj3quMPZ19hM7gXEqyV",
  "key32": "3GbqG9AeuQPhaTxizn1psdJUzSPv81H57q5FX8TP5zbs6nTjNG1Kso5kSYZEfWD1mcPyNTADBTM1j6iAsVXpqPyd",
  "key33": "32p54RuesUxb9JtbGam36WrjsaTNQMxEBnhdY4j6X1ehe3UnZ7J67ao6UGtNUwcsPpq64aa5Pw13mTiP9m8scweE",
  "key34": "4pMEKppruJr1GsP5uiXLPxSV38tsNKtFw3xWrE95vnCS715DsoaxggKFVeZPAnL471Cy6PkjFoxe36CuGzdzHy99",
  "key35": "S5DspuHhoJBqivYcXxpPCPMLy7u1nT72uCbvhPAvrxCjp6y6sKtzQvQsnjpKpDb668URSzdC4RP2C9y3vSDLRus",
  "key36": "2zjnkaPpYzrqFX1JLyVFM8vFDYPEExe7w3tEBqEGtysS9JT6unx7ZAm6DynyBnRzJjSctv7DAumnwBdNNstkTj5F",
  "key37": "36uxQqMxAfy56MoYHZP4M3irvmHb1upy8DgG1ashgxBcg5cfDrTPeJdKmgj4jxvgqk2CbWFR6CQUmaexQZc2UmoQ",
  "key38": "497gd4skgdipuesdQvXkWRh5HnxpTM65cGpanKcGfd63DLCCjLaXrMXrdq4ES33bqsZrpBKvuomzuxn3yC1Vn2Y6"
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
