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
    "nXogAnKb7Ecju4fGZ4k99si6sEa4hUQEJwBYHigA7FZWGgwLw3qJvriECckTyCrBbbS3j4k1noEAqCbsvEpAWo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mdJJmDaKNUDeprpojTAvXRPpwbSqimRiDyH7rpnhJYkTiDfb3h7ucRzeccYUwGFrMeFtgTQx8cpdHWgrMnvCLiq",
  "key1": "3qPUpj2ryNLA6Z5tprU9WYxzwri9c8RarEuGRkKy7fJpKr8VcggEvaBmMnuoqgCpsTqWHvmcop8NHbDAm6xgHYWU",
  "key2": "5LxzeqWpnDeDG99A133LVEjAoPkLujLYFSFgRDpCczM3B996UvEFRWzBBPFToPwhni38RB4VY1qdRuchftiVPMdX",
  "key3": "2SQ7kHB5SRVjA9Vp3GSp27ycQc8qVK8NMCZUbeYnuVo1KRpTHa4mXY3sYHCQfaWE6bNAqHL2cqA2fUzMBFQgnHiz",
  "key4": "GpZvpCWsQoqkpzJtC5QguaqnfWcVRt3zUYvHHHVhe96tELcM3McnLAurSugdW6PQDix3WdsYZ4RHSaYH2K8ANGr",
  "key5": "VWvxSUXn4Ufx586zKyuSMnBuBm69Cypsh2y6XtCMAcEfrPmyroe4BYSUeCeiKqXnnYctHYfmJt8gq1w9E4wJfyS",
  "key6": "3cKrEHQPWKkmzjXvJQzFtSRXHP7uoGARfbJfxd8oeEh2aqHHA54g4SHkJAnh1BFLqkmptvfH5oGjvyp7j2vNWfFp",
  "key7": "R5X5dRuhj2QXp9fiZAJL7pSQLRa5urG7hzcao4omk6DhL6LrYzuqnehnnNMy2vdU1z5j8wU21HPmTHdz1xBpNTA",
  "key8": "2y1nLvSn7RjC9UuCdtbtFP1k8BuADrfXWjZTo8ZcUdJEneSBREcc8jpApKUsiP81cSt4yamF4exzhRyd8v76FHfw",
  "key9": "rmNDBJHJNH9tU6TSXSE3Ff6kPMBEoBDwrLxE1qEJYBhy9dB4CBG5qEmC4gF2XspgwFXBUibancrU8UN2RKRBDgZ",
  "key10": "8K3ewdGMw3HSP2HefvyCXqcd6KGYAa8J4Y3xoDvEDbAQRDWvsWYmiU4FfiJss9nnbzkk1rVWbMozmApBVCouzXb",
  "key11": "29ty8KraF6SncBfL8dWUmp5GjipmMKtxNbAkgdBHWvRQpWGDfb9xZZZXDqMfuZRqWhbNKti6Wn5G8iJdJHfVK8Xg",
  "key12": "5csdfV6F1iFk243y7hkKJsRtjm5pYPGSQVAZN395QpJhJDqpcLCWigij5hHHaDfpi2aiwAtwoNCSa8q9YPzYGt25",
  "key13": "3KVpQPfVhRRXuFd6RtFkEVd1TQ6hW1yW514Rb3w9x5pS1Lp7JSqdLzFZhLUW5B1mCqpb5wTogPVEpdhBoArLeGrb",
  "key14": "3HuxtfqULQ2tHzuUxUWH3yuHB99zrAazaWDHd3tAJoVkkD8SeGhichn3T61EbTvU9mrupBGhChH3DvKshE7fGrg4",
  "key15": "28Krz5GSkRKNRkyfpAdFG1TgKBwmwDZXy8RkYpNvVk7ZeRpmaRWAxAxcmGwqF33pZ5BAM7TwxkarwzZJuYuGAehw",
  "key16": "46LoKGirzAe1G77uobz25Ke48NKH7yWq7psxpDXdLtCC3Te3X8kwFuedPyKTArds6Wm1mFBnukYSQZQSvX2WGEmB",
  "key17": "5UjVbtSAHZFcHFe9igjipmmmztg1DWY668ZnaUgaHAikwKPWjfVX7jvosxG1onomLaifrDVAa2CgEYTwDjNnuZaq",
  "key18": "3J6A8CN5vh2BprVwvBJjdKHFajtBGPaXtnNqjyeWZHDycsmogCjawxF4JxFoxwCYRTXVPv4y1AGVryQeb22oqead",
  "key19": "4CBuYYArSJvcTQpg43M4tRLC2Tg83wZLBN6vtz4aih2xLDQA5wkyotzZ4pVs7m1s3bJ4wpqde13RgM7XunvqouBL",
  "key20": "bgcTwHrR8s74mcvCvPP59UJzLHfmAnY4aeREZ2Xd6VBiwqC2LGpL9jnGJ2PL9wkVbekmd3CBEXtSmgaunQoHT2K",
  "key21": "5CakemJaDBH8Q73YUgoQviBFwfUd1hrRVnvkpToh7bHvLo5K3G5GveCg4UHBGZMkCTrMYvzg1Q3gK3yB17j1cEuw",
  "key22": "5AEcHREaezwxLERUAkXJaCtpucEKX4cQnijYNdvEHicCtTRP3YW5FLFQFUMsgUi3VreQjhoKe48jQ6iCVAb8JU1x",
  "key23": "4KMtZJcmEKtCoCS86yjoQM9TQ2XTdRLvkHTkV227MjYXR3JwBLwp56FNjF7PX6KeaX2UYiZ2orksjS5y8yTvBSD8",
  "key24": "4DUWvGSHGnGPiPqvt8HqGDy8PLRpabkC211JibdTdcpCDAQZBZTCRUVP81Hk1Ky8J7igGaaMsJY83ifadXwoV4Bz",
  "key25": "66ZaeoczUb1ijsv3dCVW1Gq2kgNxVCUJsAGDUnumDEgw4CeCJkf66gEdAuu1G1sj2WE9rQmcWdTfdkeW7dTBQtsp",
  "key26": "39xrM8guBb8FtUnaszkjaH9A7onwDHwy6WCgSyH2mMsved3PnYf3bBfEE732fUeFTn5hbU4dkaoEXu8xqS22ZdKo"
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
