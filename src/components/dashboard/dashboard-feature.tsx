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
    "anQES9vQGuH7376mjDUexQEHfVQpf6F71XhqKx1Xz3UZHxnzKzEnBcswdEgsonz1kaY1Gi8cjkZyVvv8sKDYo3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s6wFMffjkbwBvUSimjunLWcoSuzLBAaqmDyef9KzvS7aCmoKnGyq1UCb54WfvkN3ww6Qm8FKyVj5LWdWxWSF67L",
  "key1": "3GCEorkQheRACYkCqsRewCNw8H5GdgswcPKxDYksgUA9QQxuU6PFUwex8Ng53A1tzWSccrMbMPBRFcz1WfPFKsAd",
  "key2": "5aXCMJgsusM3resuZcKzwR61VFmdnbwZZ7czzKnoh72awDWgaome35ueVHeyGiWeosBeh8pYuNjbdbJpJkuZ1Ym7",
  "key3": "2Qb3U9FGyWs8ZSUkT1UbhozMYE78M3r8MUZV59a4DSFxLDArxbQ9HXfd43GLgUSi2oiEFWN9N8zsdDkpRaMELqg5",
  "key4": "5CXsMPjXNNXCFGahSG8sbduSd6mxGrgLamt1R8ebp5mGHgMf6yR3WuhV7fkFMzhPCFjGfcgxpR1SxTbZNFV8eoeQ",
  "key5": "5x8gP3qqB81W3fJ8f3Q35RdM7kamN1wje7Y6YpU2YVb3DUMjnutDzV8SkENuEhthtRALxEwA7DreyKS4La6D7KZi",
  "key6": "3o3Liky8sRUETYu8bMQo4WHGe94J2xq72DqepA8YHBwAmGUV6nBVsSFz6GhpQEUnkQbQfubrTrc371QZRMDSSs3",
  "key7": "5rLULrbMnKNvhYqekkTamvLjp1fepBh6k72Hr4C7ZsH2YLXjreQ45RCMqL3FZhve925gqixzF7jgkPvjQHW48FhM",
  "key8": "2B2E2WFXSqkDWhSrocy68SHmcW43nYe187rZ6Dav96D9Fm1gi4Fcu3BMm9Jy6YqePifVPnPkPRYHPHyuHfMpg4JR",
  "key9": "5nuMEqgTnVmFzaADzHYeDbr3tBf8Ewu3wBawADRRuP9tRRBpDN3zaY5wW4YohmFi44ggGGhHWge22xHTeqoppfsp",
  "key10": "2h6DG2q2PLsWLcGgq3qre2B1dzJAv4RiBgPyXwx6sdt8Ji8xLnoapeKaZbrCHPvaW2ApVXddhcUTdCMGv3oenp8x",
  "key11": "2vJvZDbgLDmFuVDXS7xwHH7Hi64YTX1NNdmXxCLqgXFRVbf78BD4m7FzsDGXD8hikV64y7wUihZ62WgiKZd2BMhA",
  "key12": "LRq6fPmfMgjESMby8qCadkk8ed3zqCRK2mgGzjMVqDNF1p31wsV4tiJSCPoqFG7A4DJfGhcdv6P2y5sJwRBa5FR",
  "key13": "4cJGe9AUFEC4zD16XrktRXVqY8U7DgKheSTCQzq9uaA4az7ZNdUML2NUJLb3BsPzUxrkPgjuLTwtCJXNzuxm61nY",
  "key14": "3NrJqpsKc84gWNz9nwNgkW41sizp9PFrugbXBeMB6NX3LyWuD36T36mDdni6bhaHJBwjfBNrGBQPdi4GNsaH2YXd",
  "key15": "4PHfgVaigyCkV9J4EMC17xYhjK2gwzv1pe1StXumHotx7WtyXotivEBWDdG5d4yNbacG4J5YBVDp35D6Zd9c9dGv",
  "key16": "5JfF48KE81ENwKAn1LK6M2qTCsU257Dj6sYdUJv4eJhENWJ4WmYLryjNC5z9Dey9zBatNDJjStwWuSQysCTNMp9d",
  "key17": "4ZcMaGLMgfu6jr3eh9t2zZMmuzk5biZxVfeDevCUsKLWFURnXF4DKirHWW6CYy5s7tHS9FweLnqnKeMRN8fciFgi",
  "key18": "3FgwhhwqGUt7V2jTuEDsm73wopkAiADxGEidr3oyQJiEjcq7pk1c7M8N7v2qShgR377PcoAjwB7Gufvfcpw8v2Qb",
  "key19": "5PBhR81kHQAGiqQwYnbuAs4eEyYyMsUUEKWzFDG6aJZCq1igAw6mf5QtUFi1oB8BxyYaMA9RasBdYSNeuyAtdmje",
  "key20": "5ZJSQho9LQpd5AckyM9d5gnsVaJ1tPqHTWm4mEcZrFsVGL8SrmN3MMUc2oL6wcCKN3PsBmcZkPyc2Y7k3V9Dan4",
  "key21": "3GSXAZcHd57Jx8QAoVaPdUQKVN8xu5iF2VGM7EbpwjvQkFP6TiCsuRVLeE91qU9Nnkruu9D1MCcy3onEiHgSPZuT",
  "key22": "2ZfWF6zBkGLCs8Yt6886KDFn44sUKevJZQ9cU5Q5SSdpBphZGXK1s7JCLtcEeqvhk4LcgTvVYv8fbxvifqU9evLn",
  "key23": "4FxkXbwrwgU2uBwmg1TW97btmCMAkRmQvNQqJEc1VWk8Rzx8yKV1TH5zjJmsxDDtrA8QyoNWUn8xub6mXAPSLrmZ",
  "key24": "43Kxru34Ht8Bv1jejoZtSwAjU9k195SG5GSEgGgAwH9c5tJkoMNJzbtTrBt13FhFwQ5Gs1rTJdyzTNR8STXDaJpv",
  "key25": "2CWzvY3otFdtUEY5KWu8RCJu4EzdWQnDuaBxe793Vk4317SE9RPHfnJVqFZm3D6mJttHp9GqRqJCmxG1o8JpvzGL",
  "key26": "frmFcwDXcjJGas6eaoHxT2otS3bGMBPC18ebXQM7GmVW7ULFoCKosXZ2Ga9F22FmQnoaawUs6vY1wqjfbWGYhQr",
  "key27": "64AVfWqyjHCF9PK3FPm4raqtoony7q5sc3XuvFWfR8AiuKyquWi2WZmaAHV2YZqegF1S6hXsvMRrRzfP3C9mUFFG"
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
