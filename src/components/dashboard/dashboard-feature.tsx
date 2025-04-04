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
    "4nJTxN9nJd52zdSJWiWWMFZNZayWjrdw32DKK2zgMECMV6THB3Ed19iiXq7SWvArNzzgdmt1YfYiyr48gXvyC5E9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46B8M8J2NQFhEnQtHHKcuNj2D7BRmjBsKKx92UJJZ4CAFb6T1QPuLTC5fLDDuYzp4BYDeMDuhB4MF81GUSR2ydjb",
  "key1": "5dTxLewWThngEPMiogi4fe8iFzLDDpwEsjGiXJzrypuMb8gQL1eR9cfcFL1g1sNJw78qeEZpu92FAUAeWQRFjrvP",
  "key2": "5dzpWgWZASCRCwKsfSgUEbxqPyyToB3pCogxCGxGAF8zRTCHD6YxNqQ3sWavF7j8UZZKeEeAcWHyjJ1Cp84TUvPV",
  "key3": "45mAh4HdXFMdbCLFhY1TiAUdmm6jECifc57zM8miEC1GsfVrRNCXvFaMqCpccRgRM2ST9LuexxAS5AgdUZLU86zM",
  "key4": "5ykeobwarWmQaUBiJ3pnLjoWtoxZVnLAkG7BFrXvmZUeVWGCx93vfx3hUkHG23y61AKZohNK3d4r2YLzWjrfDyR5",
  "key5": "3CKm2vfhFHbtTVF71JkJwvrg2Peq1iVcyChnu5YBDL75FGDvv94fwwjaS8NXbtA4YNZe1Yjapz8FLAADHscpnmij",
  "key6": "4k7fbTvbscQWNTQhmXWWSf6Lgx7trVaqSHWdL95cdnupC9zNPM1AjDrLAi9uE3RxtGUrR87Pz4zg3r95WBPkws3Q",
  "key7": "4Ep3c1S9bU5RG9SB4ga8enT4wT3KCnRKsNMazkHSEGJr7mHGPPcv3Xv6ogVULAVGV3DCatEMfnzHnfau9a4ttBNm",
  "key8": "2dRnivywiF6Z7ZTMupVf32NG65DKqHmp4cVTiLAvMZVij2euEHoChNisi1Y79Qs3q2h2YJztQtP8PNp3DcPoix7s",
  "key9": "2rV8o1oHR14FTL2z4AyRT1XamSHwyPPrLwzPzProf5aCcVY6pQ4nM5wx2qbLGa6dn27mTNxWNACL5xEabXzDzRTR",
  "key10": "5yJSdAQrLnHmyP7wqZuQ1jxFpxhRqsjkC6CodnSpE8oFDx3i1Hib6zsuF1MpT6NRbT4b1Czm7RasLiBRyFLsVRKA",
  "key11": "4WEpwSMhRzWWbGA1yxM8YGLmttQHiCgi5kWknb4Z2JWzGdeXtrqA8btf1NG4Uhvbmf7HLqnyhfMuE7MwaRLYP4H8",
  "key12": "xw1bdZe37VwkYnrUrkB4tAgwm9mxeh2rPxTyXEx7W5TwMunQDvtgokYhCtwE6eREHmUfYdbPwSsBKp8kHBt5BS3",
  "key13": "5TZS2tdfxmpScNkDF1e5trs5qUd516gR8iZxT1gaWPqprMwAwQs8HA4iZFpcexiuifMLab9RvkcdtZxH5N43Mguf",
  "key14": "5uvjXc3qv63Qy36peVUpTkfLEZwyhTm78E9MxJadETAP68MJ4Etra7UJ87xqCv24wQ2qxDaQWAR9bnisiQqFrqah",
  "key15": "LdagjQNKj4MMdxMLXW47974uMEiafGzRhGWD7H6htjTue7xGayrWMZAVEM294EvGMqd5o3fEqpL22DHfgbgV3dD",
  "key16": "4YWi369QBXvA5tQrCoL5pZULNYUFsFQChcJuny8HdwjEX2iG7SiLPLYpeaJa1S5iYRrm3xtZotzM4qk27GmzSL8K",
  "key17": "4ABs3BL2noPdFNHWBEcyRHYCuELDCzdDeuM3PdsqkQpxbo7t7wAEyy32Dg52iimLyQk8Lk6hpJNC9F7wsZtXVT5h",
  "key18": "4V3cmb3RvCcfWfoUkMkcm2XEfdcir3q2D9FXKsd7BuDPk9RcdpZ6Efxv98CfBK9mTPpXn1dmP2jHPU8HErmLfpRn",
  "key19": "2teb4AWavtoVs8whK8xRQo6euFeGs8x4E8NBkGztNxp7L4sD8WL5DGEt8zMvvrdVbP7rEVTR6MQBbxHwEkTgN7wc",
  "key20": "5vXtkdMqTrw9D8cp3bH3mA5NfGEwNdowRbfQTMRajQNw6aJW5BCPybD8fysknEXxLVuqUbHKRZwNS8qpcwouSHAz",
  "key21": "yX8WaHgmFMEpti9LR8saHkyjwRTVzzTsify9bdnJNmVGiEx2WnMJMXegS1iMuRF8xc8NcRoEvWSsn44GdByhKrv",
  "key22": "4PFceEMsDRewtr8JGrMjxM75WfoXmoxF5EP1Tyu1C29yTND94QYcWac4wgXZ6Jbj7zntEZuMfhVDFh71YPQCFVx6",
  "key23": "44g12vn5yG9ero7Ah56mwfMfvSqhrym2YYYfUPoDgF2f37wSUpxAsbLPxoEddwv77rTy2iFg9i7CmZo7hFvaefMZ",
  "key24": "3r4f535ZvUpeUJuTTf1yk8fsEZGGAF2pbBz4myqSRmHxpA6ooZaorowZesLy9sMgFScNwKC3QjbuxYbzWUqcsdTn",
  "key25": "2xswrv3Gzv9ALpgqXtDhZTQsmySjLpQuEtqQZMp4ig9hivhNBMwNWnD6m1pDQEcGhi2omzCzMcCFPNigH4cbWaaa",
  "key26": "46nd6kVv8mxhRqrJoWH9Nkq6vhM5N6uxf4BXBiGYGNXXsJr3CSN1wzCPsJQMhfjq55XjLqGzCWnovrvWF3tuzTiz"
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
