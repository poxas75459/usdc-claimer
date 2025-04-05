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
    "4Nxr8hGXnHhMeA2QaD186L6KbME5mRoJEekMg8njEXq7uY1PzASN9qhGZ3L6srZG4hK4s4xxoqgScbHqf6DTo14m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ksErJB8L6Qcb3nPetkVtCGJCYBRFipGAq1eGbyk4micz3p9xT81cnQnR6PNjWNY3ccoM8kvZa4NbKZ4ov92U2r5",
  "key1": "44NoqSyj8et4KuemLDwRu3DrhFx2NdQt8B4JtDEYkmN595sSwsDLiWvSchvMvwASDeAh7BdqDH498Kwmg3J1SYKC",
  "key2": "26jfYuhWCVsUFUv28ycp6tVdePQ6wViRGRUq6N6DG8HQhZa84ye1dQXj1aj5vCvyLKfetsXNvBeGa6fa5eM8zg1J",
  "key3": "3rXy9RpRvNun96kkbWchqz22QzdaTkEy9vSGFBWbr8LYGwsWuiQuQqbyKL4ehQmoij7Gy5HrnhthgsNsR4u6v7kN",
  "key4": "M6AFDFi4moQG9CR8Xq7tN8Y6FmU5yqyGJ1JbxfpkrbXBBSp8cho8NBPBTMFRQy9h3FpEqCgMpHLLZ7mN7F1BH9G",
  "key5": "5EFaPDMiwQozD5TzUv8qJiMuBUC5GtpPm1gLVvvsnrRCgBsLwcdaUbTiUUpf6dVQHSwGjc7S1iDWZoJZf9V7myNG",
  "key6": "4KWYZTH5AiZTYRys7f37p949Wcv3BwvPamRMq77Rd2BNimAaJUJ8AaGmd1Cua86RigCAhi47MhPDdWuuzAbTAS9i",
  "key7": "HnxRVDAVPvzneFHm4oqgW21rVwJKDN3GknggSbDznio173Heg3qMrp4PSVy8WZhMjLVGJ7tAhhscqYn2Hs7rh8D",
  "key8": "35Psh3eZWutWEDag8rkJB6DsB9vFstK5RL71Ve6xWe9PSwQnH5kgfpZPPMG6aVFKp5fgLBM6tZS6goCHyBreKwSL",
  "key9": "3avZKgCEHh9SNfZSy8iSaDkextBWvtwtuEuJVNg4TjWADpRV1AAzK58oXPxMb5koK3MFryEdTMrXKJT3XqC59KMv",
  "key10": "58kQRJMeaMQea8cHo5qZ5bNgTqDQEfTRx3AjQkVrqx3hzNonNoxnA9P36ZTDNbLdksnKVPBwfn6xUG93HhUhnLxt",
  "key11": "2nqNSN2SmiqZbEgtGrc96kPEgDpXu9sYgjb9Q6mVAuZLKRqwT6dzT3wEVmi515f6TwxsYXKNceNkbFkHfFSLQyJu",
  "key12": "2f2hNaTpAGs6fPNcQc7HQp2XQ9oeRaGt2dZJo5DhYusekg86mZ4HTN9nmqxQxqhXGU63xk3vhuVYMMd1x54Ee2nz",
  "key13": "5tpbW9W1foejxgcWPqNUiEeda1kgKrMQxAaR67h4Wek7hMDj93F8iJz3UG57t9FGVXtJc6ej1askddVLUu8zJarg",
  "key14": "54rDjRkfqZReJtRTUxwdwipS1qGG4nrkkYSitZbwA5HMu6AqNhLt5KRQAXw2if9GrmpLD4pwXTPochZU5AmFxHqd",
  "key15": "KYqPprPURgXYTxhGFChb3YAZyyQxvVrAV5qJdTUzkaXSqryym6Tw9bwivEVvd7mX9hieGFaEKA9WA4SfEAN5fqJ",
  "key16": "4T6EXWNoswhto6SomCgh365XxuNpXKVni5Mzph6pK7J6cU2LS5QMDUUzE8mq2LgnZNSJ4upKp7etk95WBfpgGLE1",
  "key17": "4wkrYDcuy9QkXm4GJSq897HS3GqXspD4FnVTMPFUu2dihRNUsvXiyMebg2pVMjdM9CrdWizVjyKWcL2KdVawfMGC",
  "key18": "5V1tG5R2qohhS1NEDDgtXziQjJ31p6xnKi11ayc2ZXWWJFWvgpx7XSES7KdgmVTzvbx2w6QJDbcudAWR132fiBFg",
  "key19": "22YyNGjkxpJhjYt4ce2gsZTDECE9rxo9X266mppyovNRCHxNVjayESrq5Wm2J2ANuKuQrBNk5g42WyFtP1TWJLRA",
  "key20": "59wkMDGy1vXWuMx2CYkMX19xf1UQ5YQXokSXVApUb3AA7vQoyocL1ttZBtxQK68tGn6VgPWJw2JnjNEFKPLyntq1",
  "key21": "4SavqJqa9CAkPHRGnMRcDxeda1WXnPEGJ4WYLF4vSduhrG6qpEiapS3p66VEoPsMqsLBTtmX2XN9M4z2b9GMpYky",
  "key22": "3cN19r6PWx9RyBwfzEZtYDC67dGhiEBaG58ctZqwKGBCiU6PkinTkvSmHNmuBLLn8R4gG4XGC8bX8oTacRBeL7i9",
  "key23": "4zrnBa34387xHRHDnogoFbAsH1mKKAQbmJcnPNYDBiknXZzT1j7nq15YEuCZ3dccUUtrK8QhJF9FkUwK4upYQHXV",
  "key24": "4svJS6ihmL3z9fkvjyiSnCgqeL1fxAavAgfpkxBkfL5UHwKkLsaQoTzvTPDUhmroLXqM4veDn6TyotY8f7p22b9H",
  "key25": "41LviQwxA63UWrq48xdHpJTiu7nEJQDvBT6Lmpn35xQEL2KRWpYvptuipbpmoZjVoMCJsXam2tMHRTuX5AiuQ2p7",
  "key26": "5BvrCo7qxBvsysimbZoTf943Bcwyd5qf7mFyjxyqh8HTLJEi1zYFN6mEr6roFfyDHePTvA8ca63Vq78s7f1Tdpr1",
  "key27": "56qpYroMa6osWVujmx3ekp3zkbMiKDDdMNV61rqPJEgrw9GSAXCxFcF9qnH1T1LheuVCPjjYZt2qMwoV8G58gmdS",
  "key28": "qLNWsXnUyBt3RyoUGjyTsrknjB8WKXbNqSqnJHLCggSmMGhx3tUHjfri6XW782sfDZbKD8j8RCjxa8ejkxAwSKJ",
  "key29": "3nLd9F4TK4pXnoHhY2a3RLqgJjtBnfwsKCQQ495E6SuppynSmEPwTzkhEe5ZKW6C9xMupw3RXF5YaGbKRQmzj13m",
  "key30": "4GL6SePGEqCiFwGed8aMUf1ucLo2fbi7vH3L4BEus7Kuzivm2NxeTv2A5SBzvz72ddubHogUezEW82bMLu7TaRBK",
  "key31": "4Uu2ZkMvtNb89Qc8Qq2X25EgWz1Mg6SwdRpRVYbaUGFMHecneMBaRvkBvQMYwns5vp2DzSmNSNqZVFaEGEt3P8dc",
  "key32": "syGdV7S1qGktqF81XaEP5C8pWqdWYZTsKqTcwtzobGoxi473T4knwFsV1jXtgZPcZurEpLWpqv7vsXNVw5Uqt8j",
  "key33": "5uR32anQqTgRGQSRYK7TfGh6XLuZQuh7VncNiZm4c24WApq9cpJo2FZtiYuE4mHDnqsmhnaLj3HNt6G6zS32XZJD",
  "key34": "3nx8YM4wdsdommKZfGBHQqoXc1koUL5sba6BwfAr9TVG2UvVoHParviJHEMuNqd2Di4FxNyZyKGJWrBtjiH6dAui",
  "key35": "3Tja4DKgxTjQLscK3w4T9GwiVssmnnDFkuasEsmFBRYsSX5HxVFoZB9DNHR321goEGfXB4BQuJZJWCNTbAuGRDSo",
  "key36": "2TNa2skoJzeExv2hJMPArBmSXxZ6hFpvSXkJBsgiFoQWMbtfghhmos6NHtHY9jFbxaeaHSYHDrXh4yjBf1GkcwaK",
  "key37": "5r28qLzMKrYNbfiTMDWqcVhYDHoHDoQAiaJjoq61Qwc1X5PSoGdLRyoBmFkVRzXGBBg3CYYDHhiE4ohAo6JuKBtx"
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
