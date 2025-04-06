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
    "2jZmEb3j51nTsmSzpQDxEbC3SxvY8PkoMT4d3mMt8oqY23PuDd7oiL8JpZzHPZtvYg4RoWdFA2DmZnTaoCsCwbtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iuUyHoC4dcLerRsNqssYpuFQVevJLbnMN93EnMUCDAyFMMiT7x4vo24gYuvbuvrmRa1n2TiqWnhj6nTTcTHS7Pe",
  "key1": "2gTc5SuYDrvoUBpFDfAuNryvEh9gobbWa6aDBxh81wg4ngP7gsMMGjEpVuKuQuiVXXzHe1ZEneg28PL2RzZZEKyU",
  "key2": "3AKEzRGw575xPrCTAFCcnYWRPCftnQYeNunK1KejsvCmNm3YzNnasxNb3GCYGpbNkLFo8ERAJQftuL5BGKvgdxKC",
  "key3": "22SC8FHSRqMuU22xXsZEpD7L3Pt5ERGPMngQG93h5tJZTq3PvcSWhnGg6tyV9Qy4rBgHH5wBYrTVseTrbAKfmuva",
  "key4": "vDYsiLQH2wL4ACXubVk3RJ2WzHjwvS3ob6QpSJCMH3YoQpnpStinDertbtmB2ZsDzFNZocaDY7145twq5SjeA6B",
  "key5": "NH7wGs6R5Em77d5UyFz5BJjYX8Hw97pK21e1JazAp5Ser5X4WTFw1WLXB3TuZaNRCqL88cB6nBk9rozdfUhE4fP",
  "key6": "3U3VHspNcBmfCwN46GXxsUuaPv3z1BhiA3h7KKNgDxbgEyBPuiD7P3wLXLowLipEfxMtym252EUkaAaxcTSreTHi",
  "key7": "5wXp5KU7cicYChdDotDGrKVEmt5mxZVdRo5Zg3oYnseXhsy2c2XBm19xRQXja1eJHXaVJECBAnrD8ghKGyUJQZNA",
  "key8": "JMYhL6RGPHHv7LncfPEUKDA2fPxRDVkdqoSK9inkWgAvaHyXNo6BELSx7qFYM1bSe1GUDxCCeLCuCp5oj867Diz",
  "key9": "49fKmuZcYMHVUGHhT82er51GqY4ov7S4r22tysAkzwvyVvP3K7DYkG15muWgMWM4n8HoRSwS4tf96qGGZENnb8jE",
  "key10": "3JzraHWfj1m9GWA1vXYPoPwEx3JBEQzu2sMfe2QP1xA25tTiUwqjeHvz8BpLRaqGvN4RgLnicPWVjTvGvvXn3fed",
  "key11": "5KQsHdtvMftQKGnjdZ3x8GDFHXq9p3K7ZLYKzoMFR7JVxcixnprQTaoj4ca1pT21wNgG6ZmtjpFi4Sb8xiJ9665T",
  "key12": "5njyqWc31b8oPwF4VsUCBzhzFipiutVRDm5XttMFtFEUMmZrGoDE3y2uRta7sv4gUkJXaQJALdE6YAY98W3SSj69",
  "key13": "2bYGYZYmp4fB7uvuV51aF3Kro1tpQTanokfrUJGhjTuE7qi1XrrkqxNhZ9Sbdu1ga9tMf3wFpHQqCjRmtfB9NuZS",
  "key14": "5qujF8Xtnhz4a2uzapeoxBPAA87xpDFPbfVPDbyJcNrms8hndcuS74kJNgPhci9nrzBz6ryunmvki2XiFnLGrfiC",
  "key15": "5dsCeXdhTyyjL2e1HhbZJ8RTFTSP7556mt5WX4xjbxoyEELyEfNxfYntKu8BJRiYfDvfNykACEGgZxeEh1Y6PduA",
  "key16": "MtohzyFUeQ8oH5XJxwahnTRbmncC2Yk5LD6ty2oTpcQshgUdzszqkKPJv1e4UYtXGr9H98iWdiuTEXDwWszjNHa",
  "key17": "2nU1jBTmHTrUu4kQK3WRsQE858dNAP9JTGQW8Zb9ECoQ1L93kBzbnxwSubNHFquhSoyXBQZp8nMxJsCTeSTLmHmx",
  "key18": "dF7AGjdG1EvQhavu5ssLP5AaaFTgLw8ZTiMqaHfLQyByqq2B5dLvRxDnp98i3hjpCW8R46J5hFshA1V8fhBNBCf",
  "key19": "36seAjzvx87hGNfiX5VvcadVjffzdNWGBKsircpX9JjP7z6XYYGSA1jeUxEaxWuwP3ujz6baJHCjUJrim2SZXZKA",
  "key20": "3Cegja62G4RiUtpzU91xrkFPPQuD1LbYhce187uqFW2gf4TQP6kFAYcWsczADA4stM6nYrgWVgFbPrWtHEqrAqwW",
  "key21": "4Td8cdTcHYFaqLZ7WHb7rwM96GuB6rVdMnK34LU8FJhLbNweEyjLvLYE7Yk5qu4Tkt8Li6T2CmQQiTNwm6crsoPK",
  "key22": "5DPSWGrtZk1nB8oRTVxJWnQR63r6d1n1TbTujUwrnFXAoR5CSYdTqiuMcKUsQQVbC6xoiupZvpbsCFGQedfUEMMz",
  "key23": "4xvAuQcgGn25ddqeVsTdLYpDiEakYyLpjrPEHa4u2kbAZo1WPqCQPQx5HoGsrorBLjPE84utPEBN8p8Qa2cyx2CX",
  "key24": "DS22B88KfgLUAsjVvmNzejz4WFqSQs5twiaYvNEF8TA2xQU5y5mgMD4qmGVjLMULm7VCrnt8SKnx4L1E2pduitb",
  "key25": "4jDdEksaHpCdUGhvbj9zqZaLaBAYy5VtKVN7xoozD5uWSDCkPf9CbapDdpgzt7gEg9M892GbvTtduDkLpXUSrqwR",
  "key26": "4JhugceCYUS6mrBEa85zvyCbgFYZ5TRGMUJXD5VYAy8p9o9WGvD96Sagt2PESve4hkHt7NZ978tzngXVSGgyWy8a",
  "key27": "5MHMFJ7NwBVG7tQSBpBBsTnmPNb7QiZwNwe6QWaBVjSFz2LpoXeNrPPhwBeswKFxiq5Zp1279KREKA5HMRv7PkQS",
  "key28": "GrjJxMNijxB3zRxsEkECCZfuXhbqdFa8EqizGWbPmf2fCe64fZzZgcBMfEr7SbBwC33uMKPBnnxJPK4VUecJFrp"
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
