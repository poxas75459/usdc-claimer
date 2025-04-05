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
    "4FJmUWdjpi21dHqGXXYxcenW25Sw4mgsinGhfRMrtau4ymxEFE8EgbTSWDW8eELxoMVpsWWLqYYgZTn8V5UWekEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tvMb91tv6NbXH49xL8CaWESmKEgLaFGLftKU1Uvfg6DPrCyR8nLR61nFUHhePQfGsRPmvrGVvzJF78hGggUsaRN",
  "key1": "4HpztCTiuxBYusy5TpmK5jpeJFreTaQvkSBj8bMtmBw5eWC7pbrJzEfc9HukswbuT74wuUs9s3Y76cHwUkxLoNw",
  "key2": "5a3bQKHeLQYUP4CVeJvsxXddrVpRfgdYj93ybtZhrTdpNHcH6zk7XBnW1FyCCKAPBSJ1sAkfa7sRsi7YSwyu4ph9",
  "key3": "5gmEUaedUuALsxR1sw2QMR2DyYnZ8Dn3uA3f2xYgvxSksqBByddjtSQE3ZxRpCGK3vdXhqkNSZmL3BzWsvmE95R9",
  "key4": "5xFnZ9ukhghDLL9r6KdHGwWhrW49wGKnKZUuduN5MwzcMEqr3j53rFG126Wn24iHc9MwunS6p7VEX6PwT2EBSTFr",
  "key5": "2937ZmCb5iHxddxm5EMqY8utsw3fYrUwxAdSS5Mps8f7ZzsosNuUXhhaXg6pK1koJ1yEfDGgBSaY5A1Mq4ZbzfXp",
  "key6": "3qgtdJ27XeiSB1HXJFo9aXzGvh36cDg5BczcGnMLjt5HK1sbWQH1GAQxXDxvLy1rKnqAZjZGoSsahEVdHEutfrYk",
  "key7": "4YEi2MNXHFGpo1cQSZeftAznHkVHBxtbz5gdKSphYzBWU61MWdbdFrYeRsue9djULjYj4UqMKtivud7VqvFwFikw",
  "key8": "4iCD12DkBnp2TMvv42o7sbeR5Kfzg8KTFqQ4n76trAkEWS38VA91ByaRK7JfYu6kzyc5XCV8jc4k29fcFuFNVym7",
  "key9": "5Fb7Fqacm6qcRDAoKCvjhFBDZhExCXi94nMTx2s7J9TKd7aiX9gPeqkfBgmyuLSxLifqe6MmBNfAxyoXxYjmbjGR",
  "key10": "37KERcmGSMNE4x77sYXqVciHLUsgUyt6UrJ3iT5NDVWK1F6XQtJqzbssniahR6XvkdJhyCnrgVtQke4DD17K9hUQ",
  "key11": "2vWUXRMxNN6DQcWM2qKybWNizekp8WZcfWWT1ZHw8UznaVbhyvmDaKEUzYrBCeVK3DcPhXT3hGgeNH5ndpCRPKfz",
  "key12": "nw9VjoAxPUYvQKPWoxq8nXny4imC9pA9TtEBaPdW9tGG3DcFJpZXuGVZ1iUa9n4P3PcXvrb7UYxArxvubC3h4S2",
  "key13": "4UfVJL3VmLmLHjHRE2kZq1i9ub8KrdNLLou7sTioczd1wou7F44Ahmn63iA7FGNGHVzCzH8PYrVVXod258fnB9XH",
  "key14": "tKFfQ35WWH3b8LGMU4o9UiWi4XHvLSv53J8iwDDANebhkLyb5sAnBk7TBz3kW45aNL8u8xTFPoKSLrLuhUEVSBo",
  "key15": "3vjX2KkKXzgsQF1hEu66J7hMpfvTRW2o1Vzjb44ZFdFFz6mTwTTRT86d7JZaAeDFAWT7nrF1gai3oPXcLHjk7nRp",
  "key16": "4nc1BXcasgZZsZsn4jFvZ2UaPDxHBufk8kbEmU8A37dYvpyecfmuVTMCZ8G6ceNBqei5TzPe6RGFoZQz8PfFYF9D",
  "key17": "3esokKNaTqovKz46YTRg4sB3zpMGj2kbbzJTZr42o9wjBpsrW3H7tqajhp2c5FVEwCdmEAyeXVKTD8WcEYm9c8Zi",
  "key18": "3xqJug35C1DKuk2rZ5r7vACoAqSGV7j9nXWq9C5RSXyDaYHqohCToo82LciuJrZyGKVoA9wszVMtruGCbc6J7C6k",
  "key19": "5XJCAfHpAkKERoPyfpkjgy5BjKHiyjwXVQnxK3DCvrhZAkHkaDeJJD1NLGeERSuuAGHdAiobRmRxsGoMjh7MCMo",
  "key20": "AR1gitbYyEsNzRfVSHTFWpbFKnptCbg6VdY2FsT6R44ML6LjDUCi7NGc1ybwH3vECrhFfdvbdiTS7Fm4vCXYZd9",
  "key21": "4ogpYhuWJXZP7dBuZHTzXVDKTUsABSFx7RMMgEHdjsssoZkrNJZyGsZjbXK25YnPczW9Ldj1Fk6tXrowFvnjAqN6",
  "key22": "483TXuxdM9XQBDMDmBJaALaAiVPUZ55yDUb7kz1671m7QEoLwMr3Pt9JSVizgK7HGRHjpeTbbJKvZiGBGMuPCUgr",
  "key23": "4Xxytt77GCBMtqEgKVn5c9LpfGHMyd2jMRBoAi68vxpxoyrmm6qp7CrjMUXPJuP7DbNvBNMS92NRqZd9UUjmbgwx",
  "key24": "4Jep9UiM3nSKsgocAfZZyWUeTugfj2CU9uppzi6A8WnG3z38yRgYeQq9fJbWpAtEGomJRjWSfucT7zdB6EfYe5dd",
  "key25": "vRBWU5u5rpE63Xq7Nr5Ws946iMDqpLafWxNsnRvHfXbzGiBoxQaCyNxDQR6F7UrVSvL161jrLVp12G2utWmtAp9",
  "key26": "5yPwfiGg15dyZWbk3ymfcZ6kHViZhMwRfjsNY1m5eawxB8xgm2hiLYXwuXt7WzosZbBgLsVjemcEYyhYwby6Tcqe"
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
