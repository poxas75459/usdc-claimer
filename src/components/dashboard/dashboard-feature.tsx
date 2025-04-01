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
    "5HiKnH5uPfEKgzeiNjUhSWxpx7CPS3PTLGwd4APzjfGeD5Nja9ZpZZNWAJ2aWs4r1m16aTNnbC2hqEHhKt87LmUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H1XC3ufA91UhSi5MrAYGeTadB4RXJZ9292GcPwmredYnkzFeK8TeGXwLFosQTLGi94VA5jmxKhPSoLbG3wSDvU2",
  "key1": "2emv9bjJSCmdoogD2zx2WitCJu2gY8LDkS1uiUbGLrADo7D8LV5fduEazV4ydK8N4gc8dAmZswXB229UbwZ9GJFh",
  "key2": "4WJiWGsUbR29H7rEkgLYzgLt3MbtSvrnUVvqgA3UTnnUbWEAcjJZ3SGvhvuSmRKdEXr3Mtw6QQXSv5pXbpqDatPv",
  "key3": "2ycY3gk6h6yTVRfe3iqL42211sQZbMKj3FV11pqK4ReBWGkAwfeD4CexTG5jXATuDecFaEtKGvaGkmMkpxaviU3u",
  "key4": "2YUrXSQi74ouWfJuY8K12ho3eDNXmEV3PCrFEix7RGZML3ULqjTWk8Y9XmHyxKEi9q41bmxZsaBr9Ft8s6kaLwmz",
  "key5": "2D41gu2Sgmj1StZ7njWen1iaYduLpUD3AjSQr5YZTEpnmgLrQUiMTXuSf1hBQaANxFBgMWxxM5Bn4WofMMFhU2NR",
  "key6": "eCfRU73Jn9xogisBo7BtHqeBegwyjiGUQqVJfqsWbn5QseNHQMw2X4gcvtnN8RH6AwStZ1YyMNL9WwHBkRBXSPh",
  "key7": "42q9a5HVbFPYDGLkBYLWtGbD6kzUeTDv6RmhJqtxLyR2hWonXaLTrKsFNoGFcKLThwKwCyESUeJ4Z3FJNs8HcYRh",
  "key8": "2z5XU31SZ1LGZ68jUewRhmsNmDkGAWxRtygxbo5ubf4oVFzd6pvsGRHumwpmFvv5AyfCpygZcBdLJJmqc7rq97bw",
  "key9": "wno14pytxZYt2s8TksdWYsmRBs4JcDtoGmAzJFLFkcc1YaZK1HyBBWw2urRbKdi9axztErkSzHpRKnJeABv9ViT",
  "key10": "5fywCyvaeJa559BLFXZwYcZoJkwkYfv2UZW39wQjuZZviWph4T5xRTBfXvghqwxg77zTMu2KcvPXj799D3W5aDWx",
  "key11": "28zH561uXWrjruDbFHbJnjmbbA2tkbZ9Bk2no6CepxFErqt4s1fT8Pgv1Dq2QkPsYNge5tCCcQXbEANWzLBmmE22",
  "key12": "DnFDcFWDmDaJHHazjky3V5R1WPenmPViKMddozZpLDhbSvxKDUdrku7EEdbnTMEtcE4kZerESdVd6bs7bo4wB1b",
  "key13": "3teHA6vhYEf3Y57JstBSRhKALi39bfE2joGJRasoESUPWFUdBpJgApD1yhMD8HsKEMMYnBdpPRqiUGfhVupANckV",
  "key14": "5L2iVdGJ2GAu9arER5VecBpgNpo9z8V5ino8iqU91Xr8p4AA5gPaCxeNq4y4a9uSu2BxFwCgWARzfchsfW7QtTu2",
  "key15": "49kbXhKrjMuwJ5oJyphGR4er7rez4wNv8X54GJEDAQusuobV3viq6M4khZrmTTEuUS6XYdTcktnDcgXBVZKWXhVK",
  "key16": "5oh5Sq1agBuZq6ssopNStsRiyFVttz2U1SJ9KWufabp88VkUp273v5ZgtM55am34zyDEhy77kTE2G9Q79y5b3qaM",
  "key17": "32HjQmMw2bxTFy2UdZBnYSi25Y3StcSfJ6qkM3gc6ALbXyKuDDKukFL4kRZ72iWKXVV7xRGJZwnfT3iShhTSJena",
  "key18": "4B4sF7RqRgjGGq39R2bUSENzT5dpqXyyFdFWcdHAEanBUXEQBMTyXaDNZzsBF19gFmhMkZzrWQD6DVJfJA6sviWF",
  "key19": "2Kx7D5qBrg7o4PgDL7FyrvqDXHzAz4Ek1J4PDf7DqAfvZjRhasvZkHT5n7LzEHAnWkQkMvzAUpCTFBA3vQwawXRa",
  "key20": "2YFhc6mxc8Ez8MREFNAiVjrmtk52vn6q5GqdxGY2WaxR6YNT5XinrbAc15DriakJaPRLNDiKvzZyPeiz3cQjB1z6",
  "key21": "2xVDjkDkTb4NT4Vij1vrywYdYE9x2VSrVDFkf2rk4eS3pg8Q5HtHB2SY6n5HunXfrQdYWxSafuFhpL8oPP5u3tzk",
  "key22": "4fciH7QQbPeKh1kbh9WVQneQxxiaDn9B6nuXgR2o9EGEgQzJ8kaVursQXC8bseezEtjAwSFTkN8sFk87ts8RDueb",
  "key23": "pGcgHDf56Vp9arbrnPFMtVUvAeSZ4CuLk9QJe2iJ3QLMQFE2RaiXF6yGP7hnKAKnGXLpTAjnyTRv8kSXdcAz7s5",
  "key24": "2rSywr1gTFU3pTMaxnji2cfNvJND4eP8t3UM8ZwhVymMXaQMbhLp9uyu8XFjY1HE2rw2hwb8mgCspavVmwhZGgtW",
  "key25": "4NF6QtxQ52uPVZXNhXAddMgp9Fp1DwhwbycRn9AqGTkTrDByj1Ff3V3C2WA2rx1z9ggWXqCVXDgXTwB7FqRNvnAx",
  "key26": "UTXkq9LyZeJokTPMGs2nRy6668eJdByrXMQkbJspB3TMUkEfMPzebRDbKE7CcTpkvNNpV2VRgMkLbSAt8TQULMd",
  "key27": "25QFP2Mg2rUt4DvKKLUcQHMjSGzVDSr15fB7JZQpGVsTrRqXCfQr7592g17Bhpg7ZESxYbYRai3bNPvjjDGyeNMy",
  "key28": "Bf69WFo4kGRiMaG6dkBnrgEsy9zXhEvBFskhRqopjss7mbhXrwMb2HfwTPeJeXtBb4kfERdFJoGtrWUPUu14GvY",
  "key29": "378eMpVwaiGz4UwoYgVQGk7f7uxaYwFo51C4cDcfbYmiFyAqtN75BNuEKBu6b3ANghscY6Tam3najfXnnhK9rb7r",
  "key30": "26ALSarD2ZHzJJ9WyiJJeekLCZmtthSHE73fVnTbXRs5QHveNtdGJoXRUPizUJTKw4cK1DohdmNyHnVpBm44Zeg5"
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
