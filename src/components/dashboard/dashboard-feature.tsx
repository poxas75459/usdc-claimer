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
    "67jrnp4R6SkEoyw9SJ9TWmmmdNFz1D9mWoRzhPJdgrbnskzVyygQeYCrPRKfLViArRZnxDbBRE5Pws6YnQ6JzGXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JBUUda4V7fwdXkeH9keh9Yh3zPVPxF5dQmjXtE959s6WKdK27D11Y29KTYJc251a9WVZ3FinHDYAAfrZJ8AF5S6",
  "key1": "4hx6yBfaU5SrqxHJ1asP7sw27FNtcbSioVhcjSWYUJSKRZ4fstMJ9Eaq1tnVfz8AS8oNqZDRsm76itz7MNEn51xS",
  "key2": "5fPRn3VLPG3wgy3WBgrwGaV3oDaLcH2cEvLcTXkF3uP7oB3dCEimjcPB2Fr8nuDGYREGTPfSEMaqZEfpJh2DefoJ",
  "key3": "5TuvYGde3dbAioR9GuztZyCxi7uha4Na6AE3y3spSRDRTvbW4NVAE5mPNBuWG7jsD7npnEAB2tGvjqcbdUeTU5YT",
  "key4": "3LdBbS7eNX92bdvUnnb1s3DjYshCyYzvLtgXitfCioaQxtWBuJxyxqUUPgugPmGCzfiSwYzG52yDsJqgHVMeEFv1",
  "key5": "4rSbpuzVkCR2axSebGJCWUAWU8wso1UDkeG8pbA2RTUqno6Md4Rq2Y1gV2NJFk87mkLN23c3wv6SMWEXfDncL6nj",
  "key6": "3cg2HgrRXgUoo2CSoJ1VqsNh5Xb87ZKBhVoxcPqPBwf6XArDCMGnfzFaXBDA2zWhL5CifQRwxam4rYDHiPUYfzke",
  "key7": "2wupvSei2mS2NiQVDZZbe3iDE4AHLXqXtxzqNshXEa61jb8YCvSji62dFYiAL3gvVYh9Eo3ucrDWNDkiadkMVMML",
  "key8": "2oJC5YQMJWC9BaEiqqvhHeTnhuGdGRbpRezfvAbXExDVKNipf8r8p7STjHuktsATLFwKqApatDh8E59LcnGoTd3a",
  "key9": "m3nDs1u4AJotApBw9ZLnDYotcGdssHDPXV9BXQHNMbTfak6rV3ve49ipWwioT68k4y46VPYZRSXfjMQnfDzRJbi",
  "key10": "3xFbz4g2Rg5p6WPMZXSfHHfHj2Q2P9xs23aQDGsK9TdaywTck2U6RL4gYRBPXMe3brgMbRDHouTD6EoHHgb4ckHV",
  "key11": "3jDwpzywrhYgnvhNSEuiJGGHPzHraAB51bRdkvA9NQ3j1niFe6dHFYkEovvYzMq8oC9XgfQKCKopTZPmmbojRfhr",
  "key12": "5G2UGVTAkJYmLGiYHS3fRHM7MrcKsDf9LBcVxQPmMB6NKbgS8YBjwHEuxJiyuz8G34DwzzFnMxipdoUntgGhhf6u",
  "key13": "4uWnZmTjn6e9B4bVsvWrjGRJLmga5eL9LtLEvCT1b7XtuPrR2FXo2gQpxcFY1eATDUityiCvhq5Sve3igVCamYyh",
  "key14": "Vu8L9dQBNzgxWeYfva7u3RPuA7jJA1brcvh5Ugxinc8roHd7myr6Mhp3kmNd4hk3m3nem4AttPQsjvoQWChnigE",
  "key15": "3ggAykRiDBxBehHHCNbce29SYCxkuLnwW9LWhykdZELFf2a9Z9KPv8aLGbqwb8V9kS7mAKLy6w9u8GnF2d4JcpA8",
  "key16": "5PTzYU1DqymZzF3LE6Ls6m9yJhcHgSWnqsL5HhHgzcXNwrqfQWAVxLsZfhjuMZvVm9PwBvysStqtFyL6AazPJxAi",
  "key17": "2Rg6R2oFNqquJ4kwPnyUNLpsHNkAXvGUECwg6KyBAHK2nvkeprjn2mJ4yVhW49UEGtbcNv2ubpLE9ovam3cKUTvP",
  "key18": "2LCNZKfXioiAWstRz57db3Wvk7Fn9a9m5Hg9UMqdyTGtbsY7hEE3cbArBFtUzatzC3dt52Ga46ys1VcaH5QJhtms",
  "key19": "2ZWmDRkViokoSmAU9VC5WgLGdJj5unMGiHkDeRFcMwm4GJEML26pQACzsrK26xqFnCwVDtUWbe8fCEY8HV1srGus",
  "key20": "MY67C7tznD76KX8AJU5nsAVf52N9tKFtgRBGRtvTHTtQEbHDSewhkWxRCwH3NPspPyLFCqGzHZUBEmUwP5Wh9Nh",
  "key21": "2dS6duWxj5K6u7mUkvNTSH46mtf5NW6hFJF2AzF8MEBX6Mud1eoP8r6ewn8wjzDJKmh56kdA8exATCTaYSccs38p",
  "key22": "3Xpi83FpzbiJXw6dskxschpT8tA3iicsN6df49WAjxsaZBPro5s7227MpijyxfvPciFN6xkwoDHch5S34EnKaBLj",
  "key23": "4DQSjN5QS6x2SQZBZnfy7tvpcu8EsfWeCpREmPR67NbTACsZzHMgHHcwXpB8cp7gtvZLp2USGakDyxbBkDDLgGvk",
  "key24": "4XZgXr4cRpNK4hmkNN7WGijeC5bBawxmRuhj3AWZY3vwiSpg7THMAU5BrCmRjMcBw9FYKJHpyDNimgakXWFLE3Ws"
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
