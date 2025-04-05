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
    "2HEZ7UVnXruMiFdWNNVMPUZh1FLedVMsnPtW8aPmdMEXZbkmJWzu3bkj6ybc1oiAp3vSsgdKqPQe3K8MBFjGUZR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bVuP7mBJxRgj58qGjDkLJHejrAgsgmLoudJuN1X5UyEnM2xACF11d5ubgpYCEVBfyMGZhbc8PN3ya1g5NProrTy",
  "key1": "57DhQuPp8rHzitsqxpYnZpMHj9CUystdJ7hjjHEvkhNsCxScjHqx4yLYHTjuRPMg4Ji1gRixNQzVcQtmkbFdhM4F",
  "key2": "eQ2MaaUWY8msPvPiuPnFiJzuiQAW11No92rHrNno17VWs4xQ6gcAB2TBTjwwnrQSsPSKDDKe2NEfFDhtgJAHLD7",
  "key3": "45KAT6hz2G6Ce4wZtxqZ5KFRpTCGYyAf7Y9Zhx7FEifNuDbTvxGNWGV7xowAZCWVZ2bboLHcLCNzLJSkRSLeh7Nt",
  "key4": "4qCfq7arsYrdJ31YeNmMBWhW9tQxhAHPH69nTRZ3iRa2hj1MXJMgi1QL3wqeqbSyNQiwrWr5pRwQ1xJjwGTdTo8f",
  "key5": "27PJmQyrtpRH2ym2zBykSgreFCAmMGLAu4x1652ytEADU2Xx8gk9uV3UTyxNqQAbQyP9etG2mgayD6FHowPu2k87",
  "key6": "3h2oEWemvxmDvRZtHwNSmvvpAT7jF1Gzgr3ZteWSByzXo9fA5wspKArz848fyHZeLpnoULpACanttSeCcVtwSEvn",
  "key7": "3CjEfPKoH5q24niJxtyqSCpLEcHJXPniMBmp9VpaiCvbexqiwxXgAUAkUuy816HsVTQi2make38jNTY5bbwQdYhN",
  "key8": "32ZiQBMk54aT99wcLUiTAYsUrZN9FB3ZRXjUd5gkWdKdsiyi7QpDJDWWwxEqPeonvo2g2d7jkv6m46rXBHjUC3e3",
  "key9": "2JY4KV25bYouRH3h3aNNHBb7s7NTebDBmQx8y2BXY35bVRS58nteWrh32dGzVTfDjkSqdtjZ6dG8HzvAGJ7EBSJw",
  "key10": "3HcPTTACqqooDFn9FQ5u3VTMi4UaBMmW3YRgWwhSA743iqP2VuYgp4dx1QKBWGpj2mxnEYVPHnXGR3VDSCSCGSui",
  "key11": "3gvaTptRMFyeYEvfDM7CDmJK9V3ezzZ5kCyVV14oWNLgFJba7prYxWjvp4Ac6UbRZaLTiu9778Ej7DqtaPwq1kGd",
  "key12": "65DRVd15kFEAEPuCE7wCsyNKwAd3bBwnAt3h4XcGbNfsbk8vZbKCwRJ5E22CrJ7wmrq2tsnvMDB8w56EAB5Mn1gi",
  "key13": "2no6o6icg3f3MsspGix9k6cUonV9x3Dvx95RA4BPCBaxSZWVUT6oeT2EikWrkFSKQUuS33YLzaXmt18CY3pr5v1T",
  "key14": "4y4EvKNfAsKoxTtjEfP5dKAQH3onU2o4bREzghqX5UCJe5KWzmNEp5pSBNkNek6XTUugKfbW1tSpeJumkUmZqUng",
  "key15": "5Xzf6wpbMNwCnaBhWN6TTDd25pmDu6SpwE4jZqKE9uqjFPjVNwpMwaLdq4cNyrwJSispSJ5rUm9mw34C6KqN8sEQ",
  "key16": "4QYSFoc2fcKf2fCrd7L5WhNV79dueTNEDgZiy1zaiXX9YLrkCpZXtbWQEGyXG4vAYd6gtPSP9ge4ue8hTdj9Fuf2",
  "key17": "3jRuHrzz329FspSk3WesdzBLwDNwnVWW3BVRZoReK64vkp18wr4zRXifPdLZVNi4TgXHoEULESA5ALk9G1ERpHZk",
  "key18": "2aZYAAMRP5q5bHnxWJeiLSiyfajP5g5ZRhxEYFUTGAZsEyPD1foCWWmFDnqoQuKAQxSXdPoPDosXFP5hfuJsRku8",
  "key19": "3XX6v7jdX6d88HdB3K9kBbGoqykeEFz5x7KqWWENpSr8hoJCA4k6xBHDPVFuRf4TCCzJZpHsoVbyevjhfYYVA3Uc",
  "key20": "5pjU3dgnGcngWsZamvCN3fRSLaNQHV3H7t3k45uyqEHG5un8h7CKnu25FAchvmPjP3k6hYwraoZEgakjGXJ5z2u2",
  "key21": "5pxy9SL1ALgEKBPbaJuTx4AjMab4wj8Un9eVVLT6Uf14zkan334S3ieqihcf9SKpncLesyi5Xx7ciurUv9F5rBNJ",
  "key22": "i3tMq9mrYTKDKCaqwjYQuBmnANmZF9HJ7tQegbGnmYCDjvefBvfMBwucDa3qirm9mknh3JNQxwLo21txm5AoJHb",
  "key23": "5yymaTctYGSYaDG29bBXvjcHGATV4uMaYqSC79MXqMjVhTWjVkviZQMMjFfG5vhkHFkw6tH5waDXzpZeynckbfBY",
  "key24": "4rUPNqSdbGkiKfsbywJaRgeuagGy1dJkiGg2jLPcD3Zxtrg8zfCDQxXbRtbPqQpyvmefreUFL4h1ki9vvthfFn8x",
  "key25": "ihDjtLL4H9LCvrfmpUPLmgz45515WgM846SDWNtdGTnkDePgn2jRBB8xvBg3rRYxz1rVtUJ5KtnauB93hxQUrod"
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
