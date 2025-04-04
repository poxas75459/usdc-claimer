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
    "TGktu5JNbkTPjiDgVdcTe85Mr6aDpaVDAuMoH6bdX6JiL7sxNSfDbGMFFvwm1QvL4jbSZ35e4wdjQ84cKgsDPVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6KhNbeiwYYYAEenwiFsPzKuHzyennWR24GhY3gLoRVZKotRHes11MxJ1Qv5m25j7d2D9euC6BBPhtQQMADm6zgK",
  "key1": "4GoXqv3Sm3TtU8RCjct3DyJGoMMqhoafx6U7qAWc1rMvjJGwCzWmbga8Y8D5xXAQWsU4F8RtahB21uVh6CMAK2Sw",
  "key2": "3oFEpgfXJRwRFFfKTYCzeETMYGZWeEtAaavGmNzwbresHHxCbfFjLQsdgbgqqZBx38frChZo8kEtQXqczET4u2zb",
  "key3": "5M4Y7ckbWacXhnLZwHZUTYvy6pXzJD3MCRm7KcUQQpkPNNmrceX5V1PVE8L26Agws2b2ijJekHiNnPtykyAMbU8M",
  "key4": "5WoBwq6eetMCKgDpUAAaNLDa4H4Ld87F2RKucbx7Z7ir7vTY9spf8dU3h8SpejrTdiroYEt4YyxMpMWhsCDyXnjY",
  "key5": "4z11gntPYZhDWnWwCE4vFoy3svArf4o7x9WdaNSmyEmpbk9Wn25hikAHQNvdX2gGtqwqS49Fh4ACW6vKesD8QcSm",
  "key6": "428Mc8XvgSZQ6Lu9gTVXw8T4iz6dEdz14zL6jJ2L4Zcjkv8bBewCAikWshcV7TSyFX9EEoGfdccVMYUnCkEnBLG8",
  "key7": "3H6KT9MVm7Z9odLqYo1RqmTRi7pRuRBfByHMpDFpoLYS3F18iqVK2VrdvpKazEuDej4hWBVu61Ztznt3n6Bd1phw",
  "key8": "5KGjrim8wc1E7W4zc3geY9i4a5A836iN6m9PXMhpQAX4KVnDHsmUvK3Df1QDqNcr5qtnopY48X1eb6BvsrWtYhHC",
  "key9": "3cBRPo7QhWeZjyLvbhm4CRJSLn7brVMVpXTxZDcmhVXCLqVAv5TeNqVvCWYsT5pni6h1hsr9rQ1BebwdyQko3BB6",
  "key10": "3fFV3SKbmckH1EZnxzSbEPdiS85q5etWq1yLYHQvMV98XXaURkSpKc26UBMDWxSQNxNmiYnAFJGe1aYb51GVw81Q",
  "key11": "39qESrjhW74yD5BwBMNcqN9WbjEcCBv4MurL6WChg2Hvc4Ep8NeFfgeSDymp7nqEfPjAA1xYWeWeWu85Pm8ivTiT",
  "key12": "51ZptgBkzBz54JDuwBJGw9qJTAAaGWLv1ZUmJB3wuaw1PbeZ23vUAr1p2Bdsr6nP6tU4v4gMVt4vDJFct98h7XLS",
  "key13": "2HrBkNi8yevgrgQcpqGeW9QinrAK5v52zo1Ck9tMGXm2KuwmqXro5zQjnK6suyhuP7N9th571vpwMauS66yrttZs",
  "key14": "5Y2g6nijy47WR2TyxKJ3wh9ngjftKiY9zTcQRZ1K8vcTCGuD2uDJ65MFgHQJp7VwHwsBhC5xR374ZtF1SpAL4ECS",
  "key15": "2GjY9KumWesjjXcTo7haZauEDhj9TD6FyhfjasxMHZavA4vsKq6c4WsZNZHrdtAtFSmgqWKEB2z1rfkPH6zAzWSb",
  "key16": "MC3KQe8tBRZnsFevZ4sepYsvcdztnyG7bqcwTZWvV1EH3MoeGYXMKRaKuVXd79jyUuA3fcQQkSaP3SKKBuPwDzz",
  "key17": "4FoJ1TuPLcgQsaNJEg9xbmvG2dKNJzYCsJXot2Wwst4oh8vSn7qkwXjPVqozNaW1yuznsPXQQiKybKZGsATiezm",
  "key18": "3CXYbsDdkKBQRMZeUQNeuNfTcdBixSGa43HcTYcpeevRy8xZ1KSFUyHdMwiKQdeL3ajy7WFhb27PQ2gdTjhCfNbv",
  "key19": "2uRbbiJj4UJVDMVxqYwsoKmiEesCTuSBwmBhnEp84v95j7HTuY8HwbRLzmYQB7HuZiqJriL6Byz6C5QKgsGic5us",
  "key20": "3HQD1wCfnFSLAi9Vg6xULPa33tu124GqFcHiTLKGunXe4pukZZHU6d6XARaAvrBTrKT9dJi8TpjW5gZEfrhYZ4tu",
  "key21": "LvgSGGxcSJYaB5C55uwC5YvNJHhUgt73c46ZNQapKuraYRjXLKSBzwTQeNv7Yhw84Nf4YZ83pw6cU6tq9VeauHn",
  "key22": "kmb9FU3NW2VviDzqmasp7Jmf25x6YdPxrePgYsKo88g3PXju3xuLBqi3yW9U7XvgZkTp73co3hHe43RUwbAWw5c",
  "key23": "2F1Xsi6rPJwTD87H2uKBxacQQf5rzMHwB4Y6rrhMR76cwRxTyb1hdKrxKo2gpkNrnsukNSMMasnaNdjPYnuZiA2p",
  "key24": "5bKtD8onZhYV22kpjrLzmDGYV4gKe2a9uWPkZgaLsX8fA61EweEu7d5pkChcaNSa9vD4qUGXjwMqfky5m6E4BZuB"
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
