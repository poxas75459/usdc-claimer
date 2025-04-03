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
    "3EexH88rUyP4k6XrBEzAXwaHqPFEE1zBQCok3YXtD37a9AReeYjUgChJ5AAnzCQv1ejz6xqMxDxc9GerKv63K872"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FPLAppMEoMkPa9dzFo7NFPuVKKfKhLJS4JM5LKszC6U2sQNUmfRKxdfxPndxa5uKMQMK6GWwCn2sYNyECjE8qbG",
  "key1": "5JMy2A1xVHGYxtEMUSutYjSUrK9oCkvCPwZ8q6C1LmTfxXr8vjwcXbWLx6e7wuQ6jctTbYRh9J6uXyfoxbujcmyt",
  "key2": "4WoyoS8a2GwcdoAtBwT22ux4fYxgV3YsmPMd1nrxWNuZBdc6AXBbzdGNnJE4DaR4kwZCit1VEAoPqp2hGSeLmDM9",
  "key3": "46GNvg4b72L1pgJ9cm2RYUYeNZzVzHCbh2BD8t4NBwRb7djPPeGTjLzQjWmBxo8VuHKX31vNva6Bp7cD7QBPrnEe",
  "key4": "2LFie4KgnBn7gUqAUupf1XTV5bkYyRLsAWtMknHyegiq9sG8NtRWWybXhqKTkJY8ngP1TE16WiHbTRBfoadrb1qo",
  "key5": "4o7KbrbeztTZBHfZhppx6cZyAUoEd4ssMGVByk7nbADVWMTVcoDireAhwbwVuHoWxkmgegAbwNCevWPRXXEHM2jN",
  "key6": "3Rg3BEjWoH4doXK1JoycEaLa26SbJihwErXGuypgk4dAbR8SaUJcQ6s4QVU212bHFCF4L24pPy6qcmdc5P2u1b94",
  "key7": "5PFZKzsqCEFYWdpHBSgKvyQRkSCkYE82ByAWXNnJmz8gZNg8MFVyzuwQXAR43enDUq8nzPqQYPKd9AQ5HUNrQvfX",
  "key8": "wa6hqKZGyP7ntieeg4NLDzSYi8B5HBFC2tDpcqYP8CJaXUErhHmKSNfzQd9oECzV8PxrVRX94nFJWeLzYWPg43M",
  "key9": "36AwkbpFYCeEYYF6AUWJypgHaWUrx6JUzrH6hwJiPGPr7fXgXUHAc6RJMqRqW35uGhs7NGGQG9R2FHSj26H4g84d",
  "key10": "5NY5CfEa7n4JBBy82NJYKj12kcNiuuwwEaveKvJ1hNy7rdXtXZPhxJ5T4QAFu1hgFVdAkUq1vCLgW89BcTbNJo8i",
  "key11": "dUXXHfyPWYG4fuSqp1oncuLTpB2vAZLNXgoA6kNXozNNHaZBryD9bCVCJMHpEENsewbudLUr1msJzrQPL6p3FTH",
  "key12": "57KEiLejxb2RQA3MKKQENP1QUcmS9Q77DBbjAz4cfRy1cnAjH9AuwT8ziAegQ5JKxwmqPHc7wcsqEbUCXgu6JyE1",
  "key13": "4kbNogxgUoanVTUmr93kMqYuU5TViZ5sXrxqJsUzt1K3oSf1GMPaeUqdt1zMBXsAPfVWWU5kyshRfjsCAnWFEW68",
  "key14": "217hhqH95fQUfdDpX1gTguKCK28w3Zg8qyMJsWvs322iDjuC2cn8kmLqKyoTNN34ECknEmWP8nYZuMvEBnWTiZCC",
  "key15": "3uWEKyFZCiGSsWf3XeKHLvCN7pFMyHL6y8RV1kx2CX5irjG2ByRVvphjCXnohmDLkaXnvYpsjioWWz2hjhUPr18k",
  "key16": "54bmvdKsvmtGBEqEZ47g67nFZThaV5ZUQTjz95RSycxvggBehBf14mhsq28htsV8fkwXyytVrZUgQoZ7XGxURyg9",
  "key17": "2bRyr3dvFND1HWU5PQ9wwasfabQSGeTmcRVynuzxWPkaEwLAJ9spbjh18mwizidVcx8qBxCNbfuuNjzxmX2D1Zof",
  "key18": "58M43QLyKR8MfAL49hvQaDzNQgP7prTLdutPTgeMgXbAFYaxNLmEa32om5HoE5uojha9BdqXDyqEPNvtZ1bgQeTe",
  "key19": "5WGbocyrAw1kxyrmfDkuEXQZsvDqkcYVAt4H3r2Lh7CwHLGvsQ88747JUTGc7oySrVuQQx4kTMhVThFBZWfHh5B7",
  "key20": "3crx4y8H6npRAgG8NjmTYHrHa3XNuNgyteW5pcGcJsPaKXaeMZV6CGdJErJmA3rg5FHLQVANn74tLcrcRS2qzazr",
  "key21": "4BHGsPCeSktqh26hZizcs8iRLaKyjRvNXwCDK9hgcBdAzSgngv64i5kMNDBdJDEjWyS5zcCauijZ3GBhENyW1kGb",
  "key22": "h4PbNgcpJHGS7b1bcfsjUaEymZGy4jDmbSoPwF8R3zoUCzLvhvevxqyUsXM6FqFXKMhnJ49aJooKrzH5ASp4qzi",
  "key23": "4nGNP8pHinBNKFbDmHts4Brj5to988xeFGKuuaqddamSE2PafXdTFVjushTXLi4Cu9qCF2vmnELpsSi9hib56LB9",
  "key24": "59R6Z6uFttnQvZQfVNgWAjcB8uTz1nvf99ujDXVAEDfK4PqCV3nb2pJWGAyeCeStgd1vR3CTHopz3Ydh5RyW1y67",
  "key25": "1tncZ4amP5w1n9GQHnWBw2Co2hFQgCmwcp4FD2s8GWZcPsG17JqmftJzqcFG87aWUQdgvJS9F4JfUwa6jn3oa1T",
  "key26": "umAp6WCYzMYa7SM6twPJ3jBrSRA6NYkEy5MHNJam8fgjuWqH7LiURn8913wgpX5einVe9GGvuHqyQ97Vpm6ZChN",
  "key27": "2Jxn6ipu38NTLkwyHqZDD9U5bivXVdGtyPBhjb3vxzsU7vRmkEBbF6tDfasNSAjykis6xxYHrgHba9x8famPNFdT",
  "key28": "3drhCUxBNEGg2Sm7TgR6Caco2htQHeWVqrTPHBAeZVuBanFUvRjV9jANmKAPY5XAYCo3uZFU6tGKyh4e9rKSP594",
  "key29": "4L6krZ3XXCNNxp7CpXLr2akaVZpuroQeBSrXg1z4vkagvbWf2ZhmnxpZgHeYGuupBB7LNSHLPAF4yB7nytWjDeGG",
  "key30": "5tEqnmTcJSp2ucKXWEhSy43ktTHDriE9T5T8SkuG1UG1n8hc8tPR4qs7AN5Svj7uJzCNodQEeW5aar6NoKQecXUt",
  "key31": "2r44KE24PPwnBWuLQohFfNKEosuMVdfsDGEKnUrTFargPMo2rJPMo4hBFsMGnR8KhT1ax3n5dyDHkBuEKqhkxQ38",
  "key32": "3d2ziZqidJxYKJdk8FbBYq1XT6tbnfbMQost5oAhXmr4osWy7gz1z7bS77PCSXMpJJhmoAHiMPM83iUer8w3sRi5",
  "key33": "37YUmxkH5rGMb9acGsoLiuRcKDM1zLEzWKRhdS88ZHnubDhtroGPqp8oKduGPGKSXaSFLHJYtwWabMdBY9VTBcTC",
  "key34": "2y5bnm75m9hzLLwcR2fKd3kGcjkfMHBhhRAMEbg3Rs82YyHS5iCkf6qCUDRk9foFpAoNodv2DGfDPKK8vNaUYqWZ",
  "key35": "VAPTTwzrCwvtvfeaqJ2bPYVB9ZyCbTsHx5XiEPGtKypQXXR6sQZ41pLuxqiHPPttp6jLEwjzbe2jsBZBQuZshLW",
  "key36": "3VAHgf8j789QGFWmgQAf44iKFyQG64GJiaKTCVgCgSjV27UT9cSa6KUHhgM5bqQ6712cedsAuj95yZBJpYxvpWLW",
  "key37": "Q2Aq3VaH6SzkGbGpQadKPjKKnoBy9bQq5SCBFn1pgKEU5tpFfe2bCXcjJhzM8tQqbLnZkmfdxbP26wuM3h4ePMr",
  "key38": "3cZywqyvaFZxXL2GHUzyXYjiWdaJRVboGtTm4sEdasGVBWp5ZFDw8knKKjPrE5A6WfXuhoCTKKHYMLJ57uZV2n6d",
  "key39": "3FFiT98R2RfjbiABGeyC6ysNqUN7oUKHoxhvhR1b4nHpuZ7Zmg4b3deND6dAotzSU6rSx3CWdcxHef6wKwW8ojHY",
  "key40": "3qbPXnp4aDthLe5PuDMBV1FxabTUn5kLqVhZ5xtTocziB3JPpTGA1mCM26kW8KEmts6W2WwvKigPLSQDFqcqwjRU",
  "key41": "3H1USDCs8VPg4StUvXJmCAwasJeUYWbg5GVG2LDKdr1frSwp2d12HhtkgLqZq7sXa4C3BjTis4wQEbJJ6F2N8TT6",
  "key42": "4RXun1qFdm3p4EV2Yb1xF1ZLTCChJXuoTN2iJwqK9wQjrnkUji4ThgQe42WXNwSWq5JTi8NdD12gnagxsECQg4kG",
  "key43": "2PJ9eNuYhiHwWYCmpv1sYJu2vqVDNMSfKAndEuxszvXhTcVzCefA6vtHXUMhjXnoaFRTB8TFWMBS7snBAJ7tQTRU",
  "key44": "h69bog3rvoe27hwvc9tdMHxPdnjrxPxaw51FvRF7nDFJxVPNAtMD5zeroGcewctpAqSLVMp4tdPbhxkjiDVtTkJ",
  "key45": "3Yf69PC3PE6YMXYK2bBwN6nyk7pfNmSPEi1JDPwTg65m8CufEEaQN5pbfg7hAtEaM7DL37BZ8S6NVUjHbGLzxyTc"
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
