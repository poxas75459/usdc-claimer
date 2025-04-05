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
    "32iNtb3r1t3qCmhFxxKSVpxJmJ5DsbpDzqU7xikz2sjrwYGWn1QjHSNDL7MbTY3impkxw4D8tAuMFJ8VEHpvY94s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VbdpZNFYoyi9zNU9TJ2m6QHXAnaJUd5E3KU2fi9MJUvoDm6pLbbq28QHvGtRApEa3x9QC3a2o2DHRBf3HvFA3uo",
  "key1": "2VR8R3dwsxDYcYcFVbH91HuYy5CqrxRdSoWh7q6A3x6qvCH5CY5aQ3k8imRrewN4p6DHuZSQ87dtm4zpVyPAp1HD",
  "key2": "jf7DD1B7osT382Fz5mLFKAuuLbe6KBeZ5kjXMfChDWMHUAgvtK3bUZGFk31xWSu2KkdvbPqTbq9uLYzeMxPVciR",
  "key3": "4EEi1pUmGCVQ1EmyiPscE5qJXZUQbGfaTYUWxfiV4qxacDcoaZVsNjVqCdjGVAzqUXW6HPaCDwuhj3tm2knqVTUy",
  "key4": "5Dii5pjLtTwxJgHHuscuKEQM1R2pj1Ue2514HTE1TffN9H7C8g1KA7SrddwAzf4o2ahCBBq77XQhVEg4ZnZFoxWw",
  "key5": "2p4NdZNhNTszUN1SJCbQ5emQQGBLijiuqUWgcx8kbJzUdTVZbUBpUMtDRntMCJGsPs1K8RgJQ7DrQg7kyjbBcZtJ",
  "key6": "X73JK9mPbGetCu9PxwFoAMVnF5GDmcwtzbmuZEESszQmNGtHkLFKXgWNaMTzRtdKP33nA8w4Jq9DzVdEh4hEZp2",
  "key7": "2fbZna4ANLUJezdaPUDpLEJihJBKRvE2TxKLF9iYNmRUz5ptVcvkzjmpN7DAdJ4T6hUhgzPodFynf1VwCqf2SvaV",
  "key8": "2eQ73upxuExRGr6TR1ncMECYUn4kj6LA2RpgGKktoShetHETdLFaX7UJ8FRUeHjK7N1fS77ribHEv8fD82e1w5Jj",
  "key9": "3aN9o9tQXD6R5W8qzD2P8mAqXMpxu6Va1ETKgMwUVFj3jFCkgxv5eyM1jYbQFy8cJTQVZurxRGTmecN5jZpd6Nty",
  "key10": "XC4wrhUaxgFRPoZhXmtRjEEnBJnBTkxss9VKnZ8RJbViBAzMXo32fSYmET2GHXmU53BpXD8cVh4o7T8nMHkogpx",
  "key11": "2SjDC9XmohRd3AeWgNEsXyT5wLbnGqAn1yhh2SnpNmvARD7Snu8kS4tsiM3xwfMVq3SxFw3R35tjJngveC7vBxRH",
  "key12": "3Ucn4Cuhitkotivb3RacuNEDPW2qsXTaQUmTRxQgDkFsyybzqfK1tF2jKfuqsYp63ydW2oTTkr52G4LjnSDEE1QK",
  "key13": "1Y69T1yKSi5hnuFnaKe5jHLVGWaGBZznCR6GGAg31obN3u6qpSWMmq2K5KHRrkE8KfXRUUrEYbpjgBXeciybG4u",
  "key14": "25xATD7WmEq9qbDUvfCAxK4nFqmEQGsFWeopat7Sm7qSLGHnNavvvV8qTUeeQ9o6QvBwkckYPWMj6jcTRgD3VstD",
  "key15": "5Td7zeNMhT91jvZAkXBjgg9eauYsUHHCGn3zrNdSmAz1wMLsFjh9749ZBAnmJPiGiSLAE1tWWqZfgb9wuDhmvV8j",
  "key16": "VS1YqYyH9nuxN4qnmw5AipFPGCfbuS5HQognifS1Ct3Pn44rHbpoin97e5ujvjif97SBZTTEmcmZrx465RV7WuD",
  "key17": "3by1aQnDE8YkTKUzfYBQDKsTzFfyRwgSpUzW5hVeCbqzGFQTCJYzzMs3deKTN8qFCMHo118YWMCy3XGVGG3iA7Wt",
  "key18": "3rYeqfSQqszgmrQW1Crz5We5mobxZNijngrZVpTYq86NormvgksAPmsL8vhruuk2QnyWAT4LXNTZr2f39MPuB9Gk",
  "key19": "2yRkktYkWG9FfzVQkMvk6HousntDVKFcd5s3LwqfRRAqYU1LN5qwrWnHEiGGejgPd6UGGEUvLhim9i4WKSJvuAhd",
  "key20": "3iTnFWjo61A6prAAksxcWbCNYoykhFZUbn4amcWgDLAFDZXuchAyyM1E7mFKYcDGWYj5aXT8kVsqY4HyseE6vDMj",
  "key21": "5g49eHMcKqdNcSdyRRJhNss8385jrLwGiJAnvhrhG1kYobPPhpQC69k4MANjgkZtNdMzw7jYHytoF8dvn51ZV1bd",
  "key22": "2PJYZmJnsnEGpNDRcjeYoYiL13bDFuJ62etGcKYuFYsrjsFUP7v8sZYsbpn4jSaDA4etYmmY631Cvuq87rouqwqB",
  "key23": "4e6isEphpbxn5sbJpzr17yAj1MmADPQxkBNNzW745qpXijuoddELWNndot5Uqhb5L9DpkW4NPfnQZ5v9tcvWMX4V",
  "key24": "3rvnFoJsJXp6XBKDboxccyt6fJXrvPMQp2UF9p4iMLBSWoFn1r2a3muRpmk28cjQTpP2JdERpNGWcMxXWWSAf4Yu",
  "key25": "3WwUvhfnLX6y5bVNxbviMGpwhdEadame14YJCVJMggihaiE4tp3PRkoeXHfGeYgfWwYRW1FeToNTz7B6baqLggM9",
  "key26": "4a6AdMGLextnArqTXDGDzzjcnVf33Wg9ijgAahD2CcasvRZHfHyaMHTfzHwkaCLgNUFZyp8os8deqXkFRWdxfkcS",
  "key27": "67B2ot69EyVodnhgRP2WK2jx2tMGaTEfayL6NGQokmcgLVUWHE2DLd2a6eR8ExabqqXsVpHQpaidWQK2GFbYCJSf",
  "key28": "3uiAaTCzxmCSgjn7D2sWAoTG8Gep3C1b59rXSzZoh7aJ5iThvbWVRUB8XWrTZAxZcLa3gqPf9o7hFhX6wUc2ynBX",
  "key29": "4Ng3xXazpoEfaBr4jUSrhEoSbJxzbRTGakQtCm2uarzMfmMNRj2hUEnv3qqnA6VPkdJjHoiTKrPEUAU1LpvAsiz2",
  "key30": "wXdd6cTvXNNDKWdxKZ1q2M2iwKj7v9DG6dYFsBvXMwnUvejLbG5bYQXu68Sq9S1TXRj5LNBFVWyw4xxizy62pDe",
  "key31": "5NGdz4TXXA3GMoPmQktwnZS97eYxsL4uiQBCsTN2BYX7DRqzyAodzimbGMeTqGbH9E9XgjkPPwJdMfpDfuocvveH",
  "key32": "5wiutGypnuvPiuCNxYcL2ZeKVKVDJ7YWCHRQercAVo8f5J7CsmyyZ7yTr8pUpuevNMQXkZegwEnJQ1H7K6yCnoXZ",
  "key33": "5RpSYv3ucfoNik8TSJ3G43JsoTFUrSNr5D14tUiW9Nv2gSQLZdvSuweKipoUEA1bHvDNMvF8swJ9KgdGoRp9fqH7",
  "key34": "2DYcneTmMv8uCmmaqbHin76JqSNWWeYvFHo8nsjNemNF8zsCZ1wgvDjixNFbmJZ7apJhrhfFkSmM3S7FNE88UQ4u",
  "key35": "3i5kmYUZ8XvNF6SDkMZFdZiwpykBGkNDWt9EWSPXWdhCboa9Lc21VMbc7aLwWki4JPxQVJvpZ7eS3dfApnUPFi48",
  "key36": "4EbBM2Bj3hyo7UmaZbRXNtF4vqgzzagZhN5QyX9kWteceJpfxKhg5NBMuYRACLXxPPNX4rtQLJTda9Dwn7Dhiz3b",
  "key37": "5dLgh9KVHUhmmRP1Di6NJWmzKZn4gXaKRUM1TkGYn4NyZPkXJWhVQXtczPF6BskqE9J8PfPd1rps6wi3dVFPwBrb",
  "key38": "3DB42LoueyLNjug6QwUuibZ65Y5gQgcMaE6SukFgHSfC8pWCZ22QMhw6hwUZraFcHjF4Pi538erwXL2VxPGduZ1J"
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
