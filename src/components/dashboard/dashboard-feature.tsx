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
    "3b5MxBdiRMfo7dkA5Yo2ZJtd2n7U6BrWxREw1BsVKpy6TTyBUGbFgVmqZoB92T9BsqnLKJubZ9D7tmEYi3z1Va2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NAZMoZsfyCk3qQKL1233tDkwMxCizkh7kzi4dDCWBrhiDnJqJsur9vf58kZ477WRnvk2uKVVsuGWXfqdEdPp29n",
  "key1": "9F5TWwshWHFtrys3dBFieih9brKRnrpVoAVY39zveEkq6Gxkg75Ntaofyu7xwgnumsBUim8mQj6wvqyWkFexKpA",
  "key2": "5d4oRUbvydfmm4wSsF5oFSMN4xtqoTt846mrZM8HWn7KVu6xKJjVhMr3AFev6VMCS3WxZhNswiKeLzxNWw8UJ3Xp",
  "key3": "4YBfgJn931oSZHzC7FKWmm82bt1pfGp6U4noHnHs722HNsrbP21Y86EUaRGGyhjNsVHfUCWq4Gd1VHUtbaQgZidT",
  "key4": "eP4s3Pt5TpTQXEB7hmTy5WJPbh9iGWBWhrWwajqMjCQeifWSWqykFBz4yPXpaN5YzFCtx1bRtsN3CxaaVCu52P7",
  "key5": "25tei2yhxGvnL7sAxRNawoeuFmtz9nK4mixAsGHgc5VkY4veB1MxGSUF9GjaML2UHaVj2pD1c5y3rRwXvbjoQvmo",
  "key6": "2TyxaHVTy9noUrq7bCifcM2tLXULwzauwu26N8SYdw3qrqMeYz6GU3fUb98qHwWe74DutNfH967dNNVJP61g2QLb",
  "key7": "3PV4utFMeJzBHwF15BsiaSuN1i7ugr3twLuC7Gu24HMX8syJyAu87dV7kBgDEcYdkr67ELqLmSiXzWizgGSMGxzE",
  "key8": "pjjwTCSGzMp3Ss4j19fdfN897pdnFuZZtreaq6pmWG8GywHyBthdTXieztoPUxLwQEzPbtJawcn3fjyytEdJCc3",
  "key9": "2q2pa52r3H4KLPGS2WxZKL8B8Yv61VCSXJh13d83d4c2YR18Qqp73vLsQSFXX9wxJ43A5zUbiqNvPdFzGigtnXtR",
  "key10": "2wHWCHRgwuuofQRdegLze1kTrvquCUGMcJ9H5Se88DZkU3L7r1KugzkmrMnnaQi93mJBKvsn9cENEFWoVmiK9D2P",
  "key11": "NGmudiSxLJRVMSgMSVS7qWRWBDQW9ECacDibNYjb7FNTtdLSqR97vqZHi6YRUGU2b9uUK6Mv1t2eybB78bSXmkf",
  "key12": "2En5uUUQAEi9m5zMHSU3ttyuA8u2TfQ75npPwAPZ264juPA4MEG2vRBQyJpQxciaoaJKQaSaERAJTF4idTdmqP5b",
  "key13": "5YhH7gMW732cnZPug11BgagEx14gJYznUHzXJWXPewakSxgrAu5XMHv7JBvp6fCxwPWTRdfoACRvYX1SQAikV5XT",
  "key14": "4mkrB13s9quZDBpFp47zfTKq9gsoa2nTvz6JPRUYDBcTUBhKUbY22ZKsAP9XoWr3SXChG7HxsBZ5k7ZD1ugxmJF4",
  "key15": "43mTm9gwrReWdxnSfWKuuWK18wXCQUFp7fe44jZsY4nf7zBCqt84MHM7jRH68B55CmiYLG6uy6MGWcrwYgizzN5b",
  "key16": "3jTCj2e1gYiN8jmUqwwJqoSADzNAh28YXB6CYRq5oYRNtGP4kqfiEfAhhnKyvYwYfkJCVT7EQiS9ie27RUPnoWdh",
  "key17": "3wQyctLJjpFYN8xRPpvQkFKSZxqZyQA5sZdCXaDjQ4THJJCqFTVrmgVsgLTQG9xJx3UvoizKCaZXQezXuekoGf1S",
  "key18": "5VpWfma1gJHG7jX9m9Nw7HS87vqSiXNTTMSRR6q8GEXcVaXLgv6fQtMANPEYwvwDdZB2aa5DseDMyQWKvbfU1JKg",
  "key19": "QNi3AHomrdy6uXHYZNWWW3MsYUqiBigjQjrWN6idTZf9MUCqXZNoevCopEDhcrdnpkhZdUbvReu1QDrUZHr4m37",
  "key20": "4Uz4qVh4qdadMu8QqyDnceR8CL1Woy8VWDiVMG5VpLKnmr1GvfJ9dKs2QQStrLtsqqTXYJzvg98gGuy7RGUjNTQ7",
  "key21": "suns4Th9Z7DW2AV5MCjMsZDHo31U5U9S3FMTm9zUdcxfbFiEvkKQ5Y2Dyxzg3bkc3Tu231gZQ7KD6qZsindjSRy",
  "key22": "JnF7bX3HZg9kpciD8tcaHgerhZnQFf6vn3dRe2WkjQVkXWw1RV1Qpy8tLquf4gSPZcW2MH9XkL5kcpXypm6bsnA",
  "key23": "5SVkxbzmV8cfnnVy9DzMw41yJ6m3UQcQ8AUMEccrGw3PKa3BoSfGkuCPfrYCT4yu3aWcd65NcPvu6tv4DFBovFFN",
  "key24": "4aFn8cbScmbR4BaR1TMRX47pJJCtC4K4JKwUYoC7ueGguTZL9giKvv3KBwaJtDFXBc3GXvtS7X4vuXzveYVnCrTQ",
  "key25": "2fTFF8BRHppujaSdnvoJMH5oUDTAaZh95NZ7VmGWPxEcyK7yDeb8Ymb2ea6K5LQgYD3MuMynyn5y9iNKfpgjrHJ",
  "key26": "3QC75qaaW18AMvoefYW17Hh4qB4HKvCwYJRrHySif2WiV8zTkiNsNcPXtNpis9bgbsQ9ZPPJyJPNVBgBV7TvMswK"
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
