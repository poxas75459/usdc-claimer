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
    "5u6S5tTYx8hmPQZdxTPCPGEfFRCrUhPJVWXmoMVdeRwzj1JRXXBgkpHDsFPK3QpHCGoX42mEp1Qp2ARAo8nsEhcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qZ3c9MYRED7fCMTcTDi67wmE9bq2mjzPyPmnhJnoWddiimbcwrdAkBJQFep2j4yq6CQ1Beq14DZzyPEb15zSE85",
  "key1": "51m56VdcYqYF3F7jTDnWyo7RDxfLmsNjsfm2Vtfsmr8qS5upm4AARQ9MGgC69LR5hRyvUTjmwu2g5xKGnFGBo7wt",
  "key2": "2kqUtFiyYmzxAtpVHFozWZV5fUyqd9VSEsQjT9broKUabHCEQRtVgKwHhmXfNxaw6PKPbCJmXY4UjsJReC2nm3Eb",
  "key3": "295c1aHH411HFyTfcCKSvcy2TF93Q4ewc6xe7RqVwbw1GrbuqDpcgbVrwE8ye66Bp9iBMYnR6tT3eK8ippLyKA1x",
  "key4": "3kU8Fq8hA31cRdHf57s6Qao3asu8ePrReA9UR1TbNTp1SYUAkhtrEWf2MdU3uRmKN76H7K9zpx8QM1gDf7y5dKvk",
  "key5": "uNcs3VCCj8r7in3cSG3GJw2EtKFuY3mGJGvSdnuTs1TGfwRQsdkVZ7BznoHWC5whG3FKtapWWCfokJ1BFPLTT4T",
  "key6": "2Tfok7i4z8Q64Bej8PShkzDf33VfVR2n6kEAMVhRjcPVmBjmTKYSXaiihRAxRtyAxn7hQ16YXCd3gWTrZAi25gho",
  "key7": "nCnxgFcTrBzMgm1tVZMZCpruNpFGRDGE4vjLvEKPd1xXv9xQorPxRCobimKRxLoSEWEMCLYCYkRBu43zqF4LKpT",
  "key8": "2Ur1chG6UicmFz86kQxXr7gb5qXwE91ew9zeaUN3t2j9EpB7vZXATEiR2KaA7wzijJ955gwPPaVPakKtX82JfUL",
  "key9": "5TnvaknabSNuDazRKmLY5xkKJEpRHS3YFpzDnXJpjtQtURTExo7TeutkaWMvpLW3mno5EmPc4w7juyWz8baNE957",
  "key10": "4DB9YWAUkiLXQdBi3kJtcfDp2j7zJrBnFZz8VURVb2b4bCWTX2w5NDkzFgpW2BVUDrA22FA2hoJT3gDWEpNicAcX",
  "key11": "3KceakoTeWs12T11WQiyztme9CY7uWVjyB8Cwz9VCbbS4Xig8m2XcbrFVtiH5eGFf9f8Gbv1WhxL1dBdgEozd2Yu",
  "key12": "HUT4dpLpE13o1SjB56v935kUuxhnAyfqkwYS4o7DYHX5wuZVfdeb15cEqUhsFQAWXYeLvGEXPT2X7DgZgMZK2hq",
  "key13": "412cw4cpsjbFpqqUA1e8qMaq7HtgzW2sweQUx4aH4RJTRyoWDQCutHmxavVYT5hvmWtrVTHR2j9QqMsHxafdtwaV",
  "key14": "pr6b6sFZRAy3LuV5i9ANWUsRnV1T795FGPoiRAzVsTVkrGDvfsjpAZpuSdG4qoEYSysG5ZRPGo6oLoPqT1Sf3Rb",
  "key15": "5G9MpCGQhdComZG91tVdkQhJNbj9FBRz3GnDEjeLtbZT2oNbnU67pEEyXXF54P1eCUAFYv3KCd2gk93QwN3KBPBD",
  "key16": "5dyPtigKuoAiHmXtFUaWcFqb5xsz9VUd7Ur3ZN4JUqtVYHYgazXQRHMBpQ7tEp67CoG7TKjFNZNgsPwPFQ2ZWMxM",
  "key17": "2cM3QJKwqg4Pkd6yjJiDCyQPAXV4zira77GwvjSgBdnSNNyq6nC8HCDdDGyQhMNncuLPT1DNCcEHU1f7TPob9ucN",
  "key18": "41R5pLuW2nNvPg6XjagF9XtBFM272vuSfrr7KFevxd4SrWmCPDnk2ZQADHxvuqQkcjjgfUsqJavKvYUhniBwLJhj",
  "key19": "618AoukT9PZrEqVWdynGFZx6dWWQamYaBi44Ah233DMmJATvPPENUSvXCVxEPjhSeCDNChkSwhpX96qmK4NXkohu",
  "key20": "3VwgbehokrYyDQs7XPxPc8io8ChT1hLiYTEpAbysTx3GDmTgTnN8BEa8YsAezk5gSwu2pMqyPcD4iaaaUCfqiFT1",
  "key21": "4s8Ap3oW1zyDD28vrtLWa5R8yG34SAhEsFiFAv6j9p9w5SjFvXzCkxeSiJUtKXA1wQ1d69VNSRipPMYDzR8HMQEo",
  "key22": "5JytXS8EgdPvWn5xV6AXsvYiCYYRNfTGCUimuajjMNsuC6sVHbHEm7Aj8qy2y8txuPvikDvDAJ3oXRibCfJGGcKa",
  "key23": "2hXjgbVq5AEpcZwv8MVfZVNouhDR9KUckDtKpYjLq5YmTBQvaYm5p8tc3AepwA33PsZBf3cypPG9mc5uBPSfyBy1",
  "key24": "2P41U4SoZfb8banHHzSmyCeXtYT1BRShWkvKcqAxVGUuR57epFv38bRzzkhY29KZ7WyrJgzJEhtdCpGQnF8ZKWNS",
  "key25": "45BQRgz3T8cJEE7uRZKXtgrULpz1WoxmZ6EeZJRWKeUftA2VDhYJVJreFAYfFHvx9q4fSVNZQxTDhMTM9mJ6166N",
  "key26": "3tHjn5zYrvZaomsUsDB3Dgu2UKzWHSihaXiGoCL9QyguJ24UBLzVnB3NnGpxD7TPyPiPwABUSHkgYARmxRAZ1r7Y"
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
