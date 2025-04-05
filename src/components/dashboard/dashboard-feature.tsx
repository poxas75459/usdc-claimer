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
    "5eyhTkW8utchkPhcFTvtaRNWVpF7nu19Ger1y9cVcjKF154mb9Wx2G5KBWXrM8ymJzKkmFsiXBB1LmD2u4vL9Y6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dS19QsiXCSuJSMzZUC4sAfMuDVuTMC4fgjq4VebVaPkVJD9vecSrM9u22f4pRhhdRfcxuBpJZrjZbvtoQxm4N52",
  "key1": "4YxuAsMF9Rkd4Ck5YEezMNYDjRApbgx8S6UMndra1UzEyV6yFQH2cmtZXebGiTfuR6gmw5Eee9swmHnWZjzvoXi8",
  "key2": "3p1Sv9QrWTtLgAf1QYW5v1G3Z7UT1jMe35u4QDhwKgy8mXNqJPZPWb64TFhLEtt6yiSp8xcGmTSGDjJH4n8dqfKB",
  "key3": "49ZjgHoQbZhF4EDZyH2gcDjjpnP88q2ECoXYhRpb2q1PLY3CSo8ffXff7W5ovs5myhe5pZvpAoWGk7PiYPqaweKd",
  "key4": "3DVgFCQzsW2AGY5hupV6Xwegbr3aL7ghvpsgSSCVZ6ZkB5f3B6AdnPoQgq8HHjR5Ut7DgK4om7kT9UY7o5ETGHVh",
  "key5": "3JSMuddKmb8VAq1u7cx8eKret2wQWeJetGgAVjQc9WcGcxohsXJKpmjPvtgn1fb6BVRgmivnmBJcZkrSVR1SY5mp",
  "key6": "4j6EfiEC9Z1e3p5VvGJ1e2ChZjsB6LL3CWxuaQFLe6APAFEmMm44zDaeH1bcVcqSKoMVHTbzHR2AGdKsyBn7t5hp",
  "key7": "3CbNDAfnYQNEPVNrgJrXWDbavShSjrfSfFUcfSqxBogt57BCuFWmZiLR2Nw8qN76d9z31hAn7t8oy7rCfWpzdFQP",
  "key8": "5aJEfsLwZVBpXnSACkLVNd6Np9RYK4WbPzf9QWU8ruKTY6CsFEHarnXL6H7Mb63vvXJCauPjCmvFw8Q1MhM2frLf",
  "key9": "3sQFmAmNeV8MKutt4AXUemdESc4URv1Vx5ehyx4oG8WiX6UXCU1gUYxEApKnp93TzDN1LG1qTdv3U3KJcrUYBwLP",
  "key10": "VmCqPCezh9UyjwTNG94BWXtdMt61nt6QwZorNhfyMfnzioCLbipPPComdHijc4X2bScxwgiqPSJWa4j4v8Dr9Aj",
  "key11": "5encgmx6HUadCJEkmuuTCsTE4d34Dmi2Pj1KEZHS7D21WDBA2V5wr7beJJARjqbMjTiRdeEpuhWQjf2rWn6UmHB4",
  "key12": "4cnDZwquH7Mu98Ds37SigspYpzvc53wks2txFYtKPkza6Ypo585Lw55VYCDVcUa3br3UpPi5agKWACKP9sQtPERV",
  "key13": "4r4F1SkLCdBUPXSSqW3WjUMnYcwyRKu7mXaQtZSdpQG6JGVho5MjsSVG2MveisAE63qHbk496q3hXh7YLS14SSCt",
  "key14": "3VSVfLnfyZ8srs63doNne12zgEk6wYheW93vdhukGmfyYGyDv4nBFHSQ2cYKbhNe8AqUJHtEM8vnLYANvTGBrt5",
  "key15": "3T4osptMtNQEEQMahvQayZ42L3CkH9kg7Qps1rkq3bJTb5G2Dq6ERyf6vNRtNugASdVvTVU54wUYgoR93VEQzL2m",
  "key16": "2PjCyghkJefDoCaBHEe3AnpztdoHTLcrw1cdCrRgsE5ssaWcyNaoG1U9y37DA6kVkt9nxEtWFne6KQoBfmdmBZQd",
  "key17": "EQH9MFKeLwbSGVTAqpz9R5ohXXin7QiQ2tapTR7MijG1nyMAPv3LJ4MHGL8hgbjNUoH9Bxx2VnXGo1jcUfT91Nk",
  "key18": "53EXtEfYUj8D3XrAjErKW8P7aCWYeEKiJR5CifTeU1CjWQxJQqEu1FD9QNCTCHewBKLAgRL6QUDzVpfvFBNBjvLj",
  "key19": "5ArrufsM4RWSrT321qCTnAL3HeNafr1gN6SKavJeWfepoavx6fcrLnccdCdPuMBLGSZzt7j9BU7zn7KEaDbYTpdQ",
  "key20": "252EYh1xiv7pEw5TyjEuwdBXWt22rDcq5pBXCecEbyD6opP5RX7UFPyDDFwMCJy5MQ8cr6hrHkVNMMYbkjBAeKDb",
  "key21": "2Qp4Pi94U9y5rXVm8YWgpY1RFuATFdsFjuRwTwfya6z2xJgwS4WLryCFr9e3RFo6jByjqAouWb1g1LQ9AjoshrBF",
  "key22": "wB3whsabpd3j4fcPXRX2CGRZNGTh3TajyX48XxxgGNw2XYUJ7TcpuAA3ksm5haaDFpRTpwZgVt6mj3jteAY7Yxc",
  "key23": "r3NS76fbZKaSPYyiztjvarn8ChoHdcxteaJMmDGFKYboGGkCFzXKZftamxdH8n1Gkj3YqPuqZzpu2GQEkLjBLdf",
  "key24": "61pw9sR1SmBokqft1jcDYkRbr2czAfMLrwJC2R84qd4x7Gk3DXoducctD6BtWV2DRpPZb3PDSy65e2H1b5fVbUdb",
  "key25": "4R4vkABkGguEbt1CZztUzRZYCYu3mZx8SviAiUV5gf82Sa3AXkisuFEVVvD2UPBJ3HkN1KLynxabmgHWH9qCrKjM",
  "key26": "522G5LvoerpJqXpV7VRZHVgMdaJATnKDayWqRxzK4qfCYu99nVMYTZ7Z1K8aWUAnBHuNnvPBcReFVKDv2UX4brg3",
  "key27": "2ymEyNr9r1EEVsyJcj7XrNB1wpv33vUX645kdtovqo3NtV5qg9giAGKndrkAzDh4TNieXFZNdD2siMkhvAsUzpU9",
  "key28": "fKiXdUawpPcyFXW8guudnJcvV82UNhEB5Hhdzu5eVQap6dfdNJkaBtmCLFZTtbTGnFTrvFFizkT4KHAvy5jrmzH",
  "key29": "39dx9CEzLtQ31T5JBp4838vMjFa2CvFdcJsrVByYzKi41W7kCqqbDrCTekyaH6NidVhUUJuYSzzpm1Kw7c7M75em",
  "key30": "2RpTqTfhEEZacsA7QDnVrt4MXL3udUichPFvh5wMavtRC56sFdxdT6UJsjrpy5NEk7o7kQdHVPF8HEHP9NXZwb8B",
  "key31": "3vu2dx1U5U87UFHGJFo3gqpqDznXMtkLDXaEwvb5tyFcX6EDHjSbCGTKdpgpjyY4JT9jB38nbdkbRrKUevsoA5Ga",
  "key32": "4CaS3ruNN4w7WBYpYZBpGmk3aR2EHt723BgEvB91TvVRy5QTj48FBrNSEHK2RBjmjzqPMExYVQ2H8t4AH57VcRKo",
  "key33": "2beRZPnjWrh6esGJKargBjhWx1U4NUDuLNGTh5LTuJwroXYFUb8Cvis59DaPcAuAdFRApbZjTBBsCD7eP5j9ha8f",
  "key34": "roNmssBi9gfTvmTUyJ4KVFm5BuEdFMGAFmGrnqJpE3zgfHog8GR8FLj7zSHHJVeuk36pQG91waZhx4LUcMKCMLW",
  "key35": "599NEDw4NLADhqSDqknWsHB8Djw4hJwfeUeuBX4FApKGLawP6PmeffniCfuErtQC1j4rX8JvVk4kYz8Krjr5XL1K"
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
