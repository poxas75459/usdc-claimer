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
    "2vQdegrytTKujRttmbhbLznniLojHgCtt1CGKbc5n24mdJv7nxhADreV6ntKG91EBRmfCzZBxCt6XXtVQCAn9jLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E837gDxN8LXfkNdQya85GMF5qQ2akxCfip3o9n7KqDznwjsxwM4fxcLmj9wgtEmGNLE3N4HcWqvFA9HbNMJQn6p",
  "key1": "5C59i6CXEY3aYahW2QMHnJ3aAu1PZQN51SGs8pADRJ1azLA7kX84jQnGiYicHvCN2uZEvLLtbwXbEvTPSZr7nH5L",
  "key2": "3KognTUSaNB2KQTHPas5KZux6h3U95g3FubTHop5FvoSRb6JQy3Vp19TfVyV246a21EbHGQARzA7rVPTbjKvmcqA",
  "key3": "2UvJVmjg88ketey22UAH3YRQHWyu3o9JSyECrnDgypCCAv32DHodxGMoWdcYGLtt5txxJKi9hkbd3UsAeYUsT5Wt",
  "key4": "61qywbDdLip4JVXdt35NSbW4ghxMaowbJRM45YvHbUPS7u6YPWmma5nzGdK1LPZLgWLvTfzWuvXKNgwcfjohi44e",
  "key5": "5CW9p4ve7vn6PCEChScqjYuv9hYGUZcxhjpgxUbu4dQ23oUEbN8GEdENdHc3QYYN5CcC38jrRw9Hk34wHYeMyQyG",
  "key6": "SeSbX5tArhyh6o1DcCC515S1hdess845D213ouj2Fgz9L35UcMgWXq4yHQA8usaNnPJb333pyFnZ6Dw9oue3jhE",
  "key7": "LxquLgcxiuYUxjgWm2L8P4D7oLqKQgXJpDFNjAJzXX9vADBGFT36hjXYgjdff88NSjvbdDYxmfC57Vi4PScTaD2",
  "key8": "4YUZ6X2jqHwGdyNvj89cE9SkzeTD2GBwq4R9jkzkZdHrMoDkbFMxus1jTgWu77ZRkJp6D3f4azt35CU3ru4yqENQ",
  "key9": "2VQCfmCP4dfXSXuTs5do8Snk9sMDLrpAY25nXk5o2EXi9rJhsBY1shKp1gQoarQRTHjzTAzNZ8oeWszCwA3YV2aN",
  "key10": "2JtcuFKJyM7dKD6DZZDGP3aHCoPpBAgCu2Lyq7XvdFurRxdBn3QwMN6q1tgWCr7mJ2L6yEQboB2wPCoXyjZXC6Wc",
  "key11": "2Sk9zrLhyJTfeW9ffvM4vCfEW3MxWbW6BQGJnzHD3GCuLp1DNe4nNmLPTV1LSmLf8Z1rdkRHt2yuVdg8774KHsN4",
  "key12": "5qpk5nXxJ9CMZQkDnXUdZeR1PfhiVfHmcgRUpSEyzBztJLQEmaV79sBB7LbGWjXqhM6aPi11qzgkFxHvGDFzh76B",
  "key13": "CyfHSzV2mVJvoP9zVcMmB4Lnx8NZXdKY4WsALTeKkMEu5k3KrvbhcKy9y5Bn1cCDx9SGX8rpsxU4t42pAD6mUQU",
  "key14": "4qmo5q5NvFtqA6r5WyPb3xkF7Cy4GFyzaKSAKRuY73YTKF6wn44xgtV74YjpJzvBy2P7mHoWq32uzwdYu1yYwVrp",
  "key15": "2jZzN3iXzLYMirZfPYGCqnhRETnLtHz3abDEe1XRXby8CWs8aTBgCR6qwpkcwApJbyv1HYjN9jSbxtr2dGGUTkck",
  "key16": "3Xe49LdowNo9WKFkxvVLKaptZyub5Bqm67Mo86MGL6aPnbr78ckLfpXpLoNkDBk1woutuuQM1SfEBR4t4wWX8pq3",
  "key17": "SCZNzS1yiU1xLpya3eSviPRYjGinGE28wdFWdY1eNNbSVsDNM1zTcNMmVDZgDkhWiHZMaUkzLzyP7Kn8WHTuZY1",
  "key18": "2uTqhQ38BUxA27W4R5GiMPwJpXs8GY2VaLyhJyHhRbph5sPzmfSE7wf6YgkBodhvT87iB2i6ENnQPVm5cvhfRwnW",
  "key19": "2ERQzNYaAE9s6qoAdDbue2KXQ3LkMq6iRPgciRkRQpWVj5fWHCudePxmyshUe6Qfwfx3WDk5SAr16s5UEHjdnpj9",
  "key20": "4ckTF6jhr4yo6yqjPDhF19gzhNP43nBsx5q7bmFE75fzzsC8vtu1MU31JjQBTxo62eqEgAWVwRiX6bhQQTvQkGW",
  "key21": "56ZLYwYdPgRjfxbhzjX7xxNcX77gxs4jck2PY5xogZ6YJJQVY2c7DhjsvzhfENr3tirhJHzZ4DehRwc8MKhhqyLt",
  "key22": "5gU7dzHoRELpBB8WZxMTgx5J4bdgnWD397Ewq4oibbKk7Vbgqc7Nnizd7mVFKwJU5FGB3NCNnKEzcSfZu3TG1R3n",
  "key23": "Q5B5KCepWL8PxNj3jgcbT77geQGe9ZXLKZE6gisH4AB7iDJMTmFgsRoTGWt946ksYN3idKKQKWxtCAVi1GvUgqQ",
  "key24": "4e9zQkEdDdkHytxzxSmNUWKZahbWrpBjkzBgurAkSGKQzTtkB7SuYqU1tMxy8oRcYqmVJrtXhvZH7RWxjMUiR5Xa",
  "key25": "3B8sNiXhaicworKbvxWAuRnUeeFowZCiZCcokFwHDCXFwPnkyisdSfA8Cd3k4TtJVH7T3kZZ3CbpMrye5VK9QKNW",
  "key26": "hqoxFk5yLdcG9VQhbSZAaNQFjZHoKVcJ7KcDGs81L2yun5kScEue4h6HybEbeDH2Zh5GRPNchejvET685LunpTF",
  "key27": "3qxJtkYWshm7EMsCbQ6MErCMmUdN2nTXr6HVyeezLG25XBAXdvLbp4D3dGQwCABPhY9GGdbryWvQqgpCb7XiYnsk",
  "key28": "4KzSxf2SSNkUdMvtteA4gq3aPWVkMbkUy4J7LaAPdtNM4xdCw484ZLDUhZoSKBp3ZjTTCURZFrNTSJ2VqQMbniKh",
  "key29": "5FL7VWXGZbpGEauryDnJo2yuWg48woA6bSBEwkN7jcG4i8BcbGMM31jeVPQHA52MvcAUWscb1vrnCBGrRREjndmN",
  "key30": "2c1xcQciAgPbY9GVMByty8nejtqs1bRKshpuD1RDQCWnwLoV7FjcWuiwKf8HuMvYx5uwY8deXWBPYqMox6ZmYPYM",
  "key31": "3yZBfTQZaHwU5w54X8PvZCWHegSCzBRa4onE2V9MpYEeTEHYRmzTKoBJgvgvwAtB7rpjUMRVEDhRMm3V7FWytYMK",
  "key32": "5kNsYcFAvmaXGCWxDB4ZAX7TNvogrJzSxun6BYTefXqRW9TQtwd5DQwewEWVCAj4dPEt8gwFrqZ36ycEFTag7pV6"
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
