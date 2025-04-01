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
    "3spgpShsU8GDPBikxg1s9Y3oPLe9h7T3VefbietcqoAjaiih1oRxRKLGSm2zeLovysrXxT88PpF5MHbQ9VMBhFB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G8YXCwWjvND25DZc1d7YvtKF26MmBMXXFyMbNJ2ftRJKgw4FG2YfbBzMcsstsU3TfFvV36urHR529UFXLhhXypu",
  "key1": "5oF8kUN2UodN54UBbpUgBzyG8RoGu2CdQ3RSgfBggxpUTDmRbtnPQvgmfyKiiGfJmkwR1VdbjPqSNrNeHVTZeybJ",
  "key2": "5MoJ12e9hHgwZUid2SeFae1mbD8i9Vkqx8WQY3EeDHUEerGXSDVmNWPFtoLqe5onCszhB5Z8uMq1fnCUoHHoPNyP",
  "key3": "3D2pbGSf95K3KtpvtnvDpqCE6cJcc15ZhX7TqmEECsvt7LCmTaBiQdqEFsKPpJEDJ3PxdsPMV6XijahCYLpLbnS1",
  "key4": "57wpJXHadjyNbxXPEtEPVLJ5hrdaTutb3NuSmEyqz9kwCJVEPD6cosHpDbjcn6Eido7itieVY2W9oSWYk42QD3xJ",
  "key5": "3SB8cmJS7ZQ7a3daVN25mCsMffQ9giVad1E5BVomdEVFu9sz6bsmNzMvCNgwByPNsefbLXSrgWds7VRnrUtWDf69",
  "key6": "2XEhJ24h6hzQsTNTpMinokecChGViBYvSgMucxDSyjL6ur8QHYiKTES7ECs3A94vCXwYPqZoWeNBQyNb7cVceaAB",
  "key7": "2xLLAFpMCjHPjHsGgyYWpARCHdCQftxr3fDGf3bZevi1Hu1jdj1QCDupV4jhdbApwjCzCnxxNCxxwYUkhLWDeRnZ",
  "key8": "QptDwz59sDJBcbb5XjEMXx3oGghKUV5rxWV7zQMerrd5DN4gAQx31YydGFQNhTz4wbW2AXaJ5QmvmcTTEaDNU9k",
  "key9": "2H241e3aY7DU2UkYz1wWnfRPqE8YKPVEqUXHkNbBBkA1sawKaejr8AmVrAy3EV2cm1dcEdWsfoYY7evw4g1MnuLu",
  "key10": "5iyXhMdF6LTSENoSV1frEx6n6sQRAJMpPuEk4xRKB1KCgmnQJTthjrivEaNN6Zqn5MWTRBJEnfsbkV55r8V9zbwC",
  "key11": "53hdXjinwmRkHLdqytLNer9yZi3K3bPivCw4ZQA5VSr5AMssvFMTDUXi1gmR12WLDyLaA5mGL3mHPBxkv8DcVGxd",
  "key12": "3cWU6uqvxtzNvzGvuHehR9QW12WeuAX4yTWF23utYJbaUMe1LTuYuk5WKMxwpa1WkX3SQKBa4j3iiYd8z7e1883M",
  "key13": "SjkbVKUTREuepHWwHwGjtNbQgRWsPKWXP5MnSbAp8vgGNb1SYXkCSrMxUNiQnbqEQaW3ndir4pZRKur9T8dSuHr",
  "key14": "2F85pmBesyvMj6kPHximErw2oFNoTjHnYBnDpnssXg2nFHdjjk2BkgF4AgZDLMZeqtpV6kTaxpv1ZpTtxJXUYfMp",
  "key15": "2eZ5bVt3GMhHD9cw9HYbeKc9Lvoaw9B1tUg6msLaMiyQuG2pKqmFzPZ5kc3Dwcy6AevuXWQCEB6dZnMKwHZeoF4X",
  "key16": "jcrXmdAisDd3HE5CDReS5YpyGU9tddSdu3Kgipa5CAQW5qrA1H6Ve9JkCi97a1ccF5NfZ6sWHBVzaPtX63E4SmX",
  "key17": "3MsthTtu8SdBxUizPUEPTiRCFRWG7Nv5tc9iDZFA7woAD56J4ibTgyb1zPYiHxhMf9Nk19iQFJ5Ntce6i2GrijQu",
  "key18": "5V9ujHnrbekL7jfxc2fM4L12nQyaVYahYvsmknEwfG272ErASnH9GYNyV7LGr3PQU3duxHtZnSSS7KWJgJqa2NFw",
  "key19": "4YsdDRzkEGnnxWNUbSrfwvczhJ6bShCjnveTJ5VHcmnmoW42K7denRitFrbrt676vo6rTW44bJSi4ABxES8sm22c",
  "key20": "3mYpwNwdVTUiPfSZtUxR9pA4TrEujsnbuEhB8zCkpzTLtafYAEMvbRX5tP81zY1emxSrGJKWWEvbpXRCS3bKqtTP",
  "key21": "4E3EH8isNe2xFSU9gMDynrft89QLrdB5YQE6KeitqzLiurCgY13cVQ7Qr6pxRGR6TDjnjZCkLv7VtdQkNYJZXfeE",
  "key22": "4ug8u1ihUJ2WbBFALJQ4zzSqCQBAqbNwtDtMzz1C8RRMRx8Tge7M6YHQry7VYuNKRPAR29oehw1AbWmP1WB76EML",
  "key23": "2o5qpzGHmAY8vajP7N4qSDfRjNoDeRf35cYtxzo8jqgjT9umjKno41eVUxGz5vQ4karZ2P5H43SCgdgP1VsHHUjs",
  "key24": "4FWkxXCRQzcdTC78pZHSED9axwxuaktYK2WTUNqnq3ZCdyVxs7nDcydW4JfQ2PsthW7Qrk6q4tT4BdPbF6iPmh4E",
  "key25": "27E2Eqf1XRhLyuYbyq3HEpWNrpV3w6YE6HMncCJDwr578nkNzfBdttQVhCoKQkzYBqkwr4QakVQ4BVMcjCZLcKXc",
  "key26": "5BVRLjd1r4UUsJZpein63LN7jGDGLGPQTkoghBBdXZWmLvPZuethdNrnL9LZbXCMZgdxWftsGkAxjNuMEwjxTJr4",
  "key27": "3TzTrzJXo8K7mbdgoKDWCuJZ7fiAXXSCVeiXGRd8qJ4eAcb8tdw3MiGX7ExPRWkiPA1TQis6mtetn3pMfVKRgERa",
  "key28": "FKx2AaEVWLe697T7CFNMrm5dqpBBgQHjXxifNUAM54g67VNDGvzEZUnxi4JBvJDxXBaFyeUgJedhPQff118Vjkf",
  "key29": "4BDCNmTUzGbrGyYqvMeAGQ3DWEa2wjnHWYUzXS9r3mK5zN1zb5smjgaV4vj8o5uGJi3aSYDUh9EGTg9FHYy1Xt4J",
  "key30": "4CpM1tUH9K1iVTrq5VybuDzE5x3fddCJV35Q99VsJ1S7anPTGsKvgicJ5tFfcFn559GXuSJM72vW2STtfhHqB79h",
  "key31": "5E2rpH32rCLzCeCarHevTMCux75s58MBzVdg2PFRtnp4X9S69qoargTCsvXnihJiGJU5qQHjLxBBfYeMfZPX3qoP",
  "key32": "3t7QeZ5VzijXG4axPNSyNkLSgasZWhfYDUfbtFSE7ZTPZSACQnqQvUi2evG9hKaKG8hmMkpAutsFuBU7W3aor6HA",
  "key33": "317QkDYuGndXzfywn27z1ErnJNFfm5pQWfgqios2YKAA1spLCSt17mAb2vbN46pRwLRqFiYz9oKZw9cWLXRFcygD",
  "key34": "fJeDVttfonUxBry5GU7sfow9VxaLmdVCwh8HLpKff1F7xYg84YUVjt829qnN9Nfpem8zSMjYv9tAQDrGmJ3Ldoz",
  "key35": "226yig9z9Q1Fz2PhzGgbxMWmPtAnaBDM2EbbqbUSYdX3h1kUkKbGLRXUaYVgCp62usQBmA57TtGUu9wRNEYMDW86",
  "key36": "63s9herzR7WtnjrcxviYtyyNjPFnDAZNyBP5h6U9gCgfJmiUaaHnCGR5FV2gdBsgj86TcfbGJ7ZheEZyDAaYGMB3",
  "key37": "4pGgrQ8q9Y24AR9jidpmkSJQBzRCZBnyGX2zNeZmAJ36JdAUX3Xmu45Ce55L2puR8LPyyrWVs2cDHvsPWJihUYjC",
  "key38": "2mD7c4X3ZCaL9dEudVJdC2zbLExCSVEpBQQyHCL72cQ3xF5wtrrhVJooAcs6veamxHmf3gSA9pkobumExb55KiPE",
  "key39": "2Yn36nA4Zq6QG8dp2q8qwJTaVjJbSDkbSCtvYYpMsL4ptsBXDKLHozNTJ9LSJbmo4QWkJymkEG7oLFGbf3PLgtCr",
  "key40": "Vjns7Ta7gs2PENdATfd9cMoMwDQpJvLNitXmL2iaD5p2b8DHh5Pc5VpdHVSk6tiQTJXCuhNd2w3Y3o4JT39dhVg"
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
