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
    "5SRVZ8kkvkAQPyEuKtAYqvB2UCjHZabhogE3Fqo2wfzD9GfQ1sG3WfENwtHUAP78TzHa47S9pCiMarj951Fz7iQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n7yhcZmCsUDa1F59spEJKz5CsVifsvfbCzRE3gEXskivSFnbsE3r3PUZeq5Psd6oXKHEuwvkTKEuhj4gm3tKveQ",
  "key1": "meAdefDbzCybYn36RoEsLjf5KwXe1B5X7F8DB8XdQEq9SUnL5KM6sr4yjVm5thyDEXx7EzSoQmtL9uusnEAqbsa",
  "key2": "36Xgd1zzoFCbRagnkLPTwSTRerWWQnW13CeSLDjxwt8gScyeiSs9SJLenV8mLBjVvEp8XYunE4i87253eukkH1kT",
  "key3": "4co9mUi5nv8bjTqJz8SRuWAvMwxZJMEASgnV5bxdrTPeRoAXBEZxczztmj3snrMjUEoByUKPxQWc6F9FrXBDbwsT",
  "key4": "4a8Key3hge99eP2QmwrxvWUGVimrq9jtfH6NtYWNWEPYG1XkgXJKtEB2LNhkLMz4ucmoP4pywxjYLgnYZcsHRMBN",
  "key5": "4ucfnS4Mf1dYWRjWgJrgzLi1bCjYma2yUVV1pb93xsfuijmr1ybai6qnZzkufjbbCYskJ3NUV5pAWtFxvS7wqUAo",
  "key6": "5N6cVVSUWARThQFcrybcQiw76Wub4voqokTcKs8DjK8UMcGW1NLMRLHiyYoNizwBNUm2FwVfS3ZJs5En1vUJgMGh",
  "key7": "31WzdNopV1GppX3GrxgVDimwtF9dKfJe6DRxUWBcdCGZceDNociwCx9axkPSMemR6JwRddLNx4FKNgJ867D1waJ",
  "key8": "7CwpZTB31LXt86rcWh2RmT2ZbMGUrjCxJ5tYnXiySNMN2AnfttjgKFHXQEgbbzZrs8LojMJGEJAghaojtEiKazb",
  "key9": "ipARiFxJbUGZQ77MmJZj2TFAVrThkiC2P8DkD35kKD84TVSe4yppKxfSweFDbmXuxN91xYKqHWzoRb2uo6YXctn",
  "key10": "3EcKxB7fK4U8Q7kEv3fG5cXXYxZ53oLjXbNMxKdcEBYrneAGSUd6sjmfMMrLZLFLtgtYauixjGVLB5dLEgxFpHS7",
  "key11": "asDrpwKCv6F6AcYiGMHnrKHjVqDo5tiXA6Xg5EoH7HeFsoyJSSHJryHxTgQLqrsEqAFXEKX5MYm6UiZCRT9UPVL",
  "key12": "56o4QDXvanPNYMP9Kypar3Xhiqs3yCG2H94HVHcbaqDrVtY6AsktcxVpU3AfyLXizmhJqpJJqzR49y2XNMa7hgZs",
  "key13": "4boqhpqwQbj6HsDpRsZPYQdcBcR8xKkLmNuE3Af2nAghAA3Fay7zu7UTeWQCoDo8ZXvm8myc6dLoN9yVPBnUMpNc",
  "key14": "4yWovk96tpU5wBH46oLCUjaJrzsiViR4LpHe51rmJ3hwrY5fukcx8atkX28VcECjhdHp38A3BY9cmasW8tCzfyAZ",
  "key15": "2dhF7LryZrTXXHREFLokA6AZXmxiRoZqCNf5QhxekM5AyaCMVFhVWzABYnYGM2LykDJtHvo6wwU6xS53xkjX9SJh",
  "key16": "5xUGPCUdT8vshn18JsWqn5NT9wbSYCjrHUa6gUYKf8UaMDtkY83C114zbTgsm5cJxeBg4V5LbykLEry13DyrLGGg",
  "key17": "5TnWvRmY2CkF73DjtfsmqWUaMak6TxZLmQq3oCJZi5pEJQEWMPF24GfHYMj73Ze7mddHE42QYrT1mLqnsGPaCcNr",
  "key18": "ucUPZu55LyGBTvgfiiA24BAbsWZqmKZyjmCNf6Ak4wVrN3TcSmmqDxgdYcAv8bJB7xACzSH6N2tzDxULfq17rL2",
  "key19": "4cAjx3SyegJQNMW19CdK9EZqjWFKyeYPchuJjGe58ySao8CTwsV5J1d3KyPPk6NoyWHLoA7AdoxeHpTuZLVGtHn3",
  "key20": "3Vb7RnB1xmp4TWMSVzaxgT8HQkuWfkXYYA7ceNniPVFNPyPY8C9SzmnFkgQuCirK97WQ8gSbdsyEkpR47WAJVUvb",
  "key21": "2iJQVb3VJG2tk2NYc7n6bsvwfD6xwsZ5giq3PB5spJRjxCLTfmAGaFyHAn1uGCAeSvqVRgU18EapvAFainnyC2pi",
  "key22": "N4URnmdnYQVAqQUS2arkUV1k3Bbnfo245egUtMbG3vHbyd4iLJ1sRREB2Y1hcFUfV1wJcz6UVxaJrqmEAQWeJbC",
  "key23": "3894zCBRTqLNwUNjvCXy47keziaGdLEYeMSRHKSTWzpVmEmJpQJs7LMCz6ib3JC9ByfR6DEbvYgvdB7APVEiECet",
  "key24": "jWt2HKnJQzY5bpU7Zpa1NYv3GpkU2WJiNpyUkmdCLWnQNdghBX8FBUDSf6Akiaz4zQTLnLtsTkU8bLJpjCcsaM5",
  "key25": "5pZwuv22pYA1gTSzi1A74gonC1NRbGhbVooBbDKaMC2MVXXsY2DWgTeCKtshpFRUNtPyp15kGShxpNrAVHSutHoe",
  "key26": "2HwFJ3ccsoU8TEDZdb2Cht8z5hScMNoyS5T2TTfYju2iBJa78c8uUEwbVHWPd297ytpm8xAet1H5eiJQwUKgLyz6",
  "key27": "5AHjAS8nEf3MpEPKsSHbgBAxJ2xZQch2EqXTKdivw3pmVkk8rvYFq5oNSDtqSeEuJwhz76HhHwfXXyFEdXgJfg4U",
  "key28": "JezGHxBsX35dMgt7NL2SMKmymz53wTfy9FopjMdRgi5Ae6JQTzWJnCiW5ykzGk4CiT5p8mwNffKMbRcXxcyT9k8",
  "key29": "3vy4PqB3VQahu4A7vFrSUTaBsg7N5m2WvK74V4f4fECcrpgqp8mqfbN9AuHnta1Tm6RucVJeoPrgBnaHL2LcAUSP",
  "key30": "5fpk7KHYFxoyLYF93UzC5aidwx7A4Bk8HZxv37Diuidyo97JPtHeSc8X7LNUcnzhYQjaTPs2ghZgQSPpQL1p43Ur"
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
