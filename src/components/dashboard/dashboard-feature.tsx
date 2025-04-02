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
    "K39jQqbeufHug4U6sXRPu43397iCaRPPSRdJqmiYKuojGy25UiUKZEgWGCXuGhETScbaeevNMKNbLd1ujUTEypM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vzbHeBXZ4uHas8yMR3Z3Md3JeLh6sRQhvzyuJjS4GWd83NVKmJwsyoBEfDwUBkwPzxWrLoiRiaC79PwCtMHDkZg",
  "key1": "3j4PM5FEA22KXVchtozuA38PGYi3hJuD3pBRQJZwvmWxftynBtpVoEYG2yjL6KjJHnkSh49Yc532s1UvLpRQBvJD",
  "key2": "3afAB6q7M233QNt9e42QvJdBjfuUGkkmoekvLBsHfW19cza51Mpj5UCKyErojx22UD2Xgyjb2rmD9BWQoUFbkFFv",
  "key3": "25SgznNNJse4K5i6EkUdjkdCprTy2CoT9vRZWqhHo2vhXcZfK4y9PwDdkjDoQs14hPgJJBM4TUGKzkwdndh6ztTR",
  "key4": "5V24s9KYUzM7TaUxaf8h26ZG2cutiCfw8SavYPcJaby9SyZExACE8DCSXBzjva12AT5r2iWBiFuiJ8mV8yaAZt2m",
  "key5": "F3uxKzsiPBpw93nhWhvdjJJxRvNCRTyAcVKo9P4eLeHs3vL16JEy5Y8SmzvzTPmHmMUkMfA7zeniETVFur7Wv7W",
  "key6": "2eDeLQcRA3y6aKoabweuotiAfWiRy7fGmRP4qMvG5ss2j8DoFf2cdzsmBaC31W5FvbsK6B9vtBYhEqhY6fiBbnJZ",
  "key7": "4y4E3wHCnM4HFNH9Fynn4PiwHsvGFP7rcbWXeqxTwKXAX59ysr5q3JYVEika7DTtLYFZwv9bJgax3vGXsbnceGSx",
  "key8": "22b1JsULpt3dtjJkvvLmcFe4WNQYpcTXa1ixEoRAzG4QN6UpQrh5w4DXTrLtQ7imLHWdpuNhjZyyag28jtitA3FL",
  "key9": "21D3uXfCVvh4vWq3avJJi5BhUgxVgX6XfQn2M48mzcZgNztRjC28pY9oXSqfoQSzvpr5k3dF9NzJWvuDHRHH92k6",
  "key10": "4EMyTfirtcFXUQybBTxT3qwybt8hVRyS2SnYcJ3Cvr7YVBBpYTJYfTxQ4mtqiPAQxwhno2wK8Sh9iZ1rzER4YfX3",
  "key11": "64oMQhAP1fQ5aD39uPhCRaJZUfSTv9BxpZgXf9n6oJARSP76AV6EqpAhPACdyEtXZR8ofFSuinK2ifhqW667jr99",
  "key12": "4aAoWxBCwCfN9hb89y63Lc87uGR8J1JCRb8uEYgWoPyXKy3GvUSrWXxcH4TuH2ETafrWNevk7wN6Xw5QvWNBuFqj",
  "key13": "529bPV2XxhRkGc8ePamREF3KoMxYJ9RXGiTu6yCu3CyqeTW3ZsqvWJcRCmRSdnTCZmNBmo4D4BG3AzWCCPLTvYRw",
  "key14": "1iKdrqtiUZLGMFb1ua8nKCdQAGwJEDhAvBXtBcgvtUtgawyp4S9U3XgteAq7jeWAfs68HKg7jS6BQFPD7hpRSgr",
  "key15": "63Y5SxVRvrVyBFjV32gcu4Jb5RJjovM1w6WzsosResSVoPmekvfwh5GjtiXLuSSh33tt6tA8TdCBbpRKcSwNyuYL",
  "key16": "3hNstoyrBNbFKjK3upkv86tfz4NSNay9rmMQHYt3DkZdf5hL5UWHHrJrBs9uJ31aoKhs95TxmykByv7g7x89wkna",
  "key17": "23V3BNZmdpv7VBeQUyeznraHDtrFcLgouXucReZUbNiAbHb8f2kw4smxCQjeJzbMmkNRWxHMZTBves1VciuJZ43s",
  "key18": "67CyEjAr8ViMdh8ryHeJjKwks53m5B4XXSKGMDeXLAkUApKMuse8AbyxnLuXQHirRVAanZQuG65XVkZzTadqyC97",
  "key19": "2HKp4u3tmH7Bt5ryXAU48i1VFGTqUYBb5Egk7CgqhDnpJcwHA2HMFN7RmB5iohVecA8KzVzq8nC3WoPaFKrZe5u3",
  "key20": "4o8jpE8LHwVb4bjHzgVzyfj6aBvPUdieEzWLvMPjQunkzsQuXwG6yv48qPAGCUP1rNKKTuj4X8oXJ8zxA5jNoib8",
  "key21": "AGUyo4tjFuczzx4hp8TYY2RUa92QMf8Zb6u1hcyFdR14qLgSUCwuz6L4qhryTRfEjZrn2uEnGa82nBQisJX73WP",
  "key22": "3yxvG66hvcNJ55J4ho39dvKvK74VeQd3A65Wed5kwSf1GMvRMg1CfCDcWJGBpLkA9cMa9raJoTU6YW11Ue5ZtqE1",
  "key23": "2iA7GLUajKBmcPV4XyWNmjiA5v799fmN1UTLskinq5S9wz4crYF1xfgWfrNdz9Aikht7Va4F8eidBQMDwwWwGAEU",
  "key24": "4xS6sfr2goyyjzPKsebpucwh5GQDeUHyakV23F7NqhSGQa3JDcB3BKT4HqnWLrx6Jf3iWCv2n2GNQXR9NLMppUWb",
  "key25": "58Lv3xu6hicRgG17EANpCSG4ZrvwNRSEz314Jpd11iGGBZJedTDsHpkza5ndjzRTsJspt49HuLr6jyBvssVidDMy",
  "key26": "5FPi1MTmZF8FfeCzrrjQJ5zbJRe4fYmyzVdLZcJrmBVhW7C5AsZFRHH35Ur4MMdSvbFXW8pSBothRsbiuWRTbyAv",
  "key27": "5vtpgFrut6iZ8jd4nLEobsXRGbwxYV9mdx7F2Bt5k8eMVeo5zraJuRtfSWHCyLSggpsBvwCXuppZQjsdte59Y1yk",
  "key28": "54R5WaarS7bkWr5dXq9D4f4nW3JeFs82fQ6NumkYVbxxBhaMqyo3zsSvVF3sXMyZ6ia5WPxSujpFyhSxiF7WG919",
  "key29": "5Sg8Bep32yPogKKGU2EPsvmou884FXGrKrzHC86GjU4FvTJcS3w3f9yNPyExuAmUdSyuGKfrowF4FJvXALAMBtrA",
  "key30": "36B8f5WTe4zw5y3rYKPVcneX8DgeAn29i1RxvKfaDcgjjRUq8F5YZGVyPmqB7qnUhtwvCB1QsBmbN4CVWQL15eWF",
  "key31": "5W246N59vYSmuxwdHdmG3xVMfKciYgz5YMjxkGeg8WLKz6GMwZKHKhnY5aeTWfB39mBu8WUi1PDi9NnQX8CfFur2",
  "key32": "3Mc5m9owZuTBxXw4vMUiRgXUdYhUVRhSvcL2LffjjkcQCVvpY2aAZDWfd29K5EPbBxXDHNqEpJTYnDMH3o3qYzCv",
  "key33": "vkYwTwAUs3vJ6mKzYExHayS41YCGFhUWBfT5TiBUsYEYXMcncMHcvdyqiLNKKSqbKQhahC4zDVAsao2hmjXxLzf",
  "key34": "2VVcMQdrg9Y6CXswNRLwpCDFhPMz7R4McQcKjHahr25YJNo19Kv7AXJ915aaHZZm37GbeDzhcaz5vaAAxNfzZkf7",
  "key35": "4F5XNgaaJ26Eq2npX7ycfpvDpmgj2FtrYUopQXqVJoWCNv3XWXKVNSAFDusyf74pF8ccb4WTYUVsMgkKDJUkV2bh",
  "key36": "3UFZSkhkTBK2XEoPbUT6Gd7qq53XvvCagQA2GwZXvmQt7A7DYD3Rq3Pgt3wKSnVCmXKi4MffMZpnnfEMyBqhwewZ",
  "key37": "3JeFWamP75yJK1CbAtiDndLS1C8SvbPSxpRzovZd4DBnGCoyjDSZnXxVW6JmnvDe6BmjPcPJKP6wFscRAQCw5d8z",
  "key38": "3Axr8uQu6mCBTWHqa1Wd9VsVnm9Wd78Q92CWF8EsW5NFYRCYNyC434mcwrLsku1ymHD5uj1NGCDWJh6Ycsy91k3y",
  "key39": "5kiEEqDaVj68EdtBhAxQspGNCq4AgpxGX6hXGCMeXEcmg13ikoYJXMQf2vR548hNE7EVLsapePtwPNHDCixrWtwC"
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
