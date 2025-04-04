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
    "LS1gqptq7WTHEPtQ15QLeeQiuXk58kCUHu9BDyoQDzNvbnD6Sqng9H31Qn8ySf8bpSnxkR4uWyj1xC7s4RXtFn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ufpbZCqCtMw2m3M1yb4Szv5cF5MNP6eJVxxbeC2YB5mDgnzz4YQch9eH41nZfugxk7qqurNaUPorXb3w1XHTbNy",
  "key1": "4QURv9uThaJZSXhA5DJiWkDCf8fddw6jhVxXTX5LSxGmdjCaySYrJtwemmoQhKQ1wY2dQx6s1U5ftav45CH2d1Xo",
  "key2": "2U8JSz199tARuVGgMjLDjW2WhXhc5nGvjcpnRcHT5Lc57mih6Amvip4KdZNDtWgb7an3EhKt5LhFPTzAtvgqQXsR",
  "key3": "2W5wTqALiYGmmkDSZ1Ns2dECQUCr4uhRjU6329g4kBuEWeUKJBWbBDzFEQm6P895QtbNiRtZzJqoEksNpfz7QVFZ",
  "key4": "5kXSAghSo4xabJcke9XWFFxiT4Q63J2W1148LKHLrrNV9Jrk4zgKL8Zwzqbre5bhYTrFPXPhb4CAQW9q5F8xjvpe",
  "key5": "2BhFjr8yZ8ctUEBTNifs95YnHkRqSzj7FZHMZtGsN7G9BNWvbSBvEpj2XRL6cFhSeE76dAR5g2PXFfbesFC3bdSr",
  "key6": "2qieahaYxX9tKuKPqDbjkV2Bx9B5dpqdQPF1xbBpC5uiN8EjqUZAbQrQXPZ5eJM3fCGBEtmeGhS1vzZAVq8xUuCE",
  "key7": "hpPg1hS8hNVqZBrroMPPZc91RsV7dNwkCNUnHazNDKqPFBAez8JvTKo5h7gtM1AXyECRDXQqx7L2fiJibw799ad",
  "key8": "3K8KNvzjdDxYuNB2Fqiov9742G62rnnSLpM9ehqtLiWQp4USXBP74qoPot6Fo4NWgHbbD4hJwe237oYjgAXthyBh",
  "key9": "qF2td3pMpzSR5XiPXsr83s9nacp6wj7g11wR9YFBFJZyq66SR2VSJSgJGhVJns7RGgHWRBCzuQ4EJ78dMvh9fbf",
  "key10": "QrLJma8ftXj9rdV8pEFQaDhGWfGvpeFMWJ3hbjJgVE4hBBHKACkoFqywFhuDSqFYEvnwj5mqwLbuhVvtjUDDBKc",
  "key11": "2jAvhWuS2qH4jHLXFExw4EAzJsa2gpY6J1H5oNbcwZpbt4PFfFdegJP6PfCAj2e5acBawJFDdJNQGjSk3RYWN5Mx",
  "key12": "HZumQVJfoMG8zBHRY84Hocwz6jv8PZc2mJ7nn6HVZjjCax4DGWkuWhum2cKEfd3tDm95iaeygVX84vzPevnZUuC",
  "key13": "2uzzgM3FCfMrQzEtfmNEpNhP7iRj1KgZ3RfTiEB4kPwJMDDbWSUAGA34ALppHcTBkThA98ohkCZMqk6EBf6riiRP",
  "key14": "2KRqNT1UkNJUKnsicvMxGxKfVpTm4Hk7rsyvH4M9ABGuGdCdcG8cQcNCJaYqmiFXHk4zn4W6uk7LWVfyANNyYbJk",
  "key15": "4KF21Le6UBAc2hrYzfjK8sN1vzN8kBimniZV2GDJUJ1f9xBETJcYxhM22tXAs1RyTwLzrwqoJ1xukm2617Mq5fBF",
  "key16": "5JG7aARjxCsExiYW7niT1JFPZGDtXG61jM8JjDdcQKsHNNpCuZ1SLSMD5wKjFym3psSXXDER4vkCbJXTJYF2N5M7",
  "key17": "4YfPae8M2E9oWJ9d3Y6eHCxtWidfPtRxLF1W1wPe9FoLMx9NpU4Af2zud9VdooZ5zGnBZJVEW9abhoGXd6edRxot",
  "key18": "4wnhnJ8RPMFqhrptfJQ7h7RxMBihmNiVaAnH8LaE95czMnWKdJufuwk9sLzjF5r8EC2fPy2AnEmnGyUShB1wtKV3",
  "key19": "5enqitBZ7H1gvNhC4AjzsUCULmN6GUNrUKi69UWRki75a1G87KEkBn3JgtuQxhaqrUnzjBr3jyBVkrSDixRk29Xk",
  "key20": "2qt65zyZqNvW8QHfzAeEohojx3bFbZRmd2yDXHszYVbMidioQDNEBcY9bBbwzqfty9hZRYfR4banaeGr9sob1J5f",
  "key21": "2ooBwzknZYagM4b2mLk32CPQo2rhi4SNzQvpg2c1sQoQsZo89wxh1iCD64UD9oxwubSAJ7Jys3SDz5Zw8oa4JJV8",
  "key22": "TCCs1QNjm9MzyeYsjNyksyho5jcSD5iwePZ5EYoLKH1WeA4DVWFxNrHDtpXs8tPV9oToRix2yCdaRtmSqUtKcWz",
  "key23": "3Qn8g39XdafrCZFwbxSAxTCefaAoEuqkCsan5P1UHpbXDtnkAUDATrGwgTqQf6BBev2CvBtNHEnvrhTf3yyWC98L",
  "key24": "3YXMjkVzoLMUebbuvA9TQugRrddY3vwk9Jo5qeiFCL8xdXGheF2qXsXkvU57CmUayjYREPwHWk5FmgPU5CMrJJQL",
  "key25": "5Axzm2V4cwRii838G9NparBiVmdvQ5rfHCTX9nyVSCmdhvWXLwtB8iZotipWF3PrV7kexrbZDCyMcs6AEeomAoS8",
  "key26": "5s92Fxa7VZmzv7hDjNP2HjeRFTAbhvQQsH2BvQbXNP5E5KjEMr2ue325mgWxFyFbbZjUjGrfsqFLARGKyPSXmxdZ",
  "key27": "5aP8wfow716xXQCqwzhevifLtJvSL1uN8bY6nGxmcs2tQaSLmNKBkcTzaRkWCPmrP7hQKojcXyU2zDMpFBux9qUz",
  "key28": "3g8RACcpUG9yrmYBr8CMEfFzhRFbLf8iBJzNC9EVZUMFbQXWDGGtPyj6AhfNG9xUafewLYarvdsQRMkXS6cNS7FC",
  "key29": "3SeNrN9io9vsBLovmfS1u5MefoKfExjPD6aYBQTfbmGDEDpAA3DQ97CC8WEtWqiqXFicc9VZ9uH23dXahFxFCcjh",
  "key30": "4LzRr5deKEsWT8A78vMZ3bvj3bLTPNeEyTGQSZV6EMXsM2PJgr3qeY7VPctW5eQ644gLRJHBnH2ubaw2CWmwA8bC",
  "key31": "4Yfor4HjJCr6efbWTSM1ygh2FxDW564ofc1EdyDCSSTfcVmUs1miBQBFD2oAvoTQSvPsm9h5Lswi5gKXCdvXkZnZ",
  "key32": "vYnhUPNe36rg3d4PLa9mcdzimueCtBUEKVGworfkRPeU7YQVje4PSZ34sGmkXrrowSVGXbU7vP2fc6xB2Y3HKrD",
  "key33": "5yZkaFzKDSNW6KccQHiT3V8gxsKgq6ckx5uEPKcK9bfGAD8Vbqm7QLpJTMtTrcF9WUidh8F6SoSsHgMyq95feEeK",
  "key34": "3aThJKGnArXKaKEXFG4kzAzqEr1no3dewNtaY8Ey6aWpt5rNh1taCcaSVeTpKRiRyFhXwemraJeieiEG7JGTBqzr",
  "key35": "4UM1F58nooyUNh693WZLo7jLYpvWiNaAxYQGK1Kb7eQn1hkKmgR36wiCqiSzDsb93bSEHnxaFPeLyjatFJyvX7kD",
  "key36": "3Lr95ZmXA7sREZKhLDf8ZmoCzyYrmo9PqqBhEHRFf5S9uvsiq5yR51FgBSHbNaqkpMWfJfbmGaDakjyxxVPeuAVY",
  "key37": "BqWwusxJhuf2iJAZCJbYTmFm4WcSpJpzpegKzaZDKeFmsFKMqetxsvvMx35ihCdbsVSnpkntKmcxfTAxPNmvnvC",
  "key38": "2n3MaKfj8tDiBUj2koQTg3T4wbWUWdJt4X8EEffxRFNkcNcnDKv2Z87TS3e4ZAo8B5qA1UVcQ71FL4deiqmjVtTG",
  "key39": "5FwofofDxZkRZqD73YcCBL9f5vCK2qCZ11o39i2CEL1j4HbZxT49FAWSgcSAuMdXgGi3cHWVQTFXeNuxfFpqjnnZ",
  "key40": "1TJKWqWiDwgHd4tDwuexYrPBaWrbLmiR74sEfm7CBrgrSQgASpKyPVi8fyLoR1jYweEWPQZiTyM7KwPZyXqSzPm",
  "key41": "2odk54uUDJ1qmta3GXGq1FPdA1dTsbiQjFkuQ3L8FT26CTKhL3c1voZh6N8cyYBcNzc47hoWccEFBtKLncR1HKeb",
  "key42": "qw2H9pBLtLKziKKb91ZbRgdHsXCjj89xiERTqmCBCY9U5pVd3MjydWVEFqC4aGWR5yCwpGgN9o2P6armnqE4gec",
  "key43": "5dDmBHD9zk7iS8YtzAMtcc3Bmab1W68qqmnGx8JXqGQ5R34BNK4ctGeoHRY13M9HDGTCtrUhfGoSdVrryH8vPp9w",
  "key44": "3Q6zhtSZVU3htdYzHK9XCoUBy1CuZiCX5rpR8VQDBtyJvoK6Yzp569RoaRa7xzvQx18vataiH1iPyYx89vazZUcY",
  "key45": "5LzWNVEDSaTY54mM35zmKgYftpT9oKP6YyTb7RtrzSRG4LZqdEW5Q5MworMsprPon2ydNvziZ9YdNnkuagdKLvkk"
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
