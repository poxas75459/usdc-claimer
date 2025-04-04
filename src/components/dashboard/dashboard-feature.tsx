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
    "2WrfPmVAduUfd3SwnDHzEdPcwFPwmY5Txh4AgrgKFuYAa8EP3ZU3w4V5j2Y8BWBeuheQAbuDYdHQbuWBkPmnoMn9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bCFAN7pwyt4QrYawk8qEfaoQ1MbNHepGAyhL4VLjLxuFhKr5ZWLHmFwP76oALi3zY9wgY3M6G2nPEnBDo3TK6ja",
  "key1": "4aSUNwaXcGhffzCZHMCTXSc2LFhae3YihNDWRgSHMPNMfBcXrjhumLYq5yrouicMN1WTCofEbYnjtv1eozxgFbFs",
  "key2": "2K3DY9H5E8BZYg8HU1DUmVQ3z4H3CrpYf1piYCUDzZk9L9bFPjKXJ4bhnAQrteXjKrtGUVzQerQcxQyjvkvLUsiC",
  "key3": "5k3YKWVFYP3WAgieFu67UheQfHFSsJp4xdkkoUSUkFc65eVfbRYNRSS7rSBgp5zLf4Hhp3SKVhawEaW6nGz7bNCM",
  "key4": "2ae1pLDNvb26GCAahfQGqihjcRi4YZaLfVJjK6RvgNE7WzFR81byp9B7odhtAmY8x3ck1suT5RtG5jTUnbzJWKsT",
  "key5": "5fpWRpZmiMcS129VKWvL1tRLk4jqjRhiTBWDP7AANt7UGMLttexywjKGNBrZ5u2EQAFEXd7yLE9hi8BzauCpd8t5",
  "key6": "TaggpBy7rNsCPKHL11aLyFCQdcTu32p58zMxfMx9rj3B4N9iem6kX2ttAwWYnVWuQraxYg1jnqfAiRXjit1UHdA",
  "key7": "2B3mMqoXCy4y41Voo6TVwtKssNV4Wc3L1d861WxfaVPHCGsnmmZ6F8xV1DMW999gxuaRgxV6kAnKwJy5YB48sjmg",
  "key8": "qE7ZpYTwTkZeG2foYsvQX4HchDsfnhH3EE4mkWV8dt7tzGcPpkXNS2QvZzcXJBnE3pe6UcKSV7VSQSUGfSw6wd3",
  "key9": "3dwtti1LzFAwdQuYT94wcdBqAFwt53pkMjAb5Pc1JBzQth1b6VB75nAbHybZi7jgi3gC4xKQVBiV5SzuFqbd9bjy",
  "key10": "5agN2wAAPPPemjyH62go4pbphkVnwfu2do5yzDbN5NFpeHVikf2w33Cd2wVPkujUA2S5XDxRw3iTgX9gyxjUje3J",
  "key11": "5TCPCZ2WXhga831M6BbnEjdVDWqSVmEcXAvm7nZCwvw6tDWKyWJ1qb4qs2arhL3J9VADCxk4ZEd26Rt8YAgx3Dmo",
  "key12": "64qkoYaaRqp2fLgZx2CDvmHTEdCJApBZzziMquYHCmnDjjaDvTzAY3mFwJZ6aHF3Hzdoh47xmxuQDmiXjixuvLUN",
  "key13": "5W795h8S3JzLuqrFeb1yd7NPY7xAdZiqyUpDVXbshL3rcteQ4J75wq5KFac44W2HtAR4TTaCgfNkBkQ5mk4NhQhw",
  "key14": "4u1KRRrbvHsSVxDwtTcnmcVpQCycffkhDE6jkMFpz5CRRNEq8ALsxhUpL7WeuNakZXWjQPju73QRVeetDVXtDTLd",
  "key15": "45re92obkkbccrQNyreq75TbZUzUnttNgcdm2rKs2X9Qwprn1zFHGzS79P4WqAYhuP9uQTbMPYUtUoPE3hobMrWS",
  "key16": "2Jnb9XcJBogs2noNjQzaAE97aJDy8NKHCYrhbGMFChE8BMttPBZa9pgdMPREYZqy84FXiaMALviKDWetwsNAk84N",
  "key17": "Mavf9XtrQRKtkZi9swer9PnG6LrjsXFrQodH3mEsQK6YXGzNXFXiznmfMfPYFMxsxUsWmpTPATgi96bSMSxEAps",
  "key18": "AmWcrb7ZqkYBVcagZnTjevigpDYyAxF14qrMMNxii7s4N2ZBJec7wKFx7NWPwBpivKDuk4s3pWSJJbyHH7jkbT9",
  "key19": "WNNUdq77fV28znGipZTciFFTDNvfivifMun25PMt5rztiBFA7NTw8BNnwvAHeWiNAZU7b2rPtnS9cgFTcXQv3uW",
  "key20": "5w5vRXaHWKdy4N2L2McgCDpEwDMc9W4bzZXQE8U3ruXa86wyXgsfouTDqqnnKHv4t1coZbwo8zEAGDM4gt1hqjqY",
  "key21": "4RvDQgkETzX6SersD6mVxQPyZqA4nFmtTfdJNFBqt1Z3xbL9EHkUQktRqAXY33N1U7SVvskmUA6nvNqmzzXBxSo8",
  "key22": "4mjWWrLoiRdM7zVNdpM22KQfPoTqbsxKuXLCutLxP3WKGwqaPaUxz4EYymPr5dXUCZPeDJAoqaywD69619zLPZbb",
  "key23": "49358A7ek5AfUQ43kTLAP4GXx6DuwCWYPX6MnSJndqMzm2unN1dwYxgTdGVtVEUySGDfFjNgFSBwMhbV49NDtazi",
  "key24": "45TYDqivWRL4WTrLmJAFR32QQX9wkpsxnno2dZNq29ZLGL3A1HLtUjZDx4xFwrHjmFKsUBz19ZMM1f2JxEnmmiuv",
  "key25": "59f8VGVbS6GvvzWfpCByiwHXmQoEihWqhPtyTo5P32zEHRYRCcegUn1tSXviKVDz64bzpJVP8Sw6uysYxCow5NM3",
  "key26": "4r3P7i6P95HavwfL1vy9x9NiiWD3kt4C1t7VXqpnaVUumU6TaWdZrCA6Q9oii5tVqmRFg4xhC9JwvgJyhEwCbBtG",
  "key27": "2NxeANpuX9fUvbvm7GPGxJwrkjvfDbRrucoVXH9GHRyHfmcMf3VQwQoRnVMeSXTghuWkfDsTpPLhmmQ647kX1TCf",
  "key28": "5fAxe2LLTR3hS6jqem98i8HPfmtuMZCRzzmAngrzQVsR11xFc4FfYrFvQdTbtMeHo2mKTGGmZokjtTDamZycQQk",
  "key29": "5mHqMFYD9PpxPCk3JCaviX9pQxxBo8MJj3xFnTpuL3nLGoQkGxeziSM5SSZJrvKB5cnSatijdpUH56MN3tUw4S94",
  "key30": "2o1wnkMHYVjt4We79AZepyvyMK6EdH2qAxKVu9MaEojCgG2FeMKHfGZb3mFKh1bT71ba5mVsFtXwGJUdT6NGLywb",
  "key31": "5kYpQKeyTmcdckytC45eqFhMTHDVzQTwpvY7iU8AT34bKD8U1V5WjLf8CPqC1xhaV7wUtvRfQQfnVvPKMzqVM7uv",
  "key32": "5N5HoVkJkrz3AreTWcVrgDWcrd6W4d1cLMErb2iDs6cbhDpEvCDW8ypGxCC12x6LXxpHUNaBqYir7LAV8nVyxVdE",
  "key33": "4kKJ3dQrwVbvqETiU73qJjEugikxSRRdkGq19pvBq9tZSNt6xsD4ku1Vv18CfeUYCdthfgxfPw5B7snLFoyDvAsS",
  "key34": "3PPMg1NKcqHM9LFrfAKxf4kHxruEM2nN2sAfLroU7qE9Yrueknpk4imJHtotGMnaav8rBpWhveFCSEVCeyq7TMv7",
  "key35": "3m7H4w45iin6Us1MqZNFeckAMqmhdpYFhSG9HQoiQS71z9gpCdzNVfKMmRfCT9L8PJ1huic3wibT3361YoUfvEHN",
  "key36": "EQmrotZiBohvmmhqkFLcTJShowu5uFR1u6YjnNzZnKE1xgRd8Us6D2iq6vxs8HBkuy7comnL1zjen15ZKnWdqSx"
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
