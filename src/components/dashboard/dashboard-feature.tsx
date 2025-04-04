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
    "2kCWENS6eVzkzfSWx3iaAZtwHLhEw1B68a4x4Qw2QHroYidG3yVVhntSQZTbNZafxVNHSXcy7unC2i1895MYtC91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vra1D2awKEiA3sSxCcjcAGktRrGG8XDsagYMtELokJKmR1HMrbomuiE5xvR5zQe7DN94Wo73cvNy4iFfTmtx84h",
  "key1": "4KF6uetiD8Smzpr36P6Z62aS82NLH4ghkUXVNbwCHS3AqcYsh2ANUcoySzJ2ms8D12yQBhixreV3EQDXngu41nqd",
  "key2": "4mBGxpVjnqnptydGx9rDaXDYbsFqAyX6aLkKuV14qhMi2gdUrNGSbJYzACHbynDc6EEvCRz192WskVjjSShcDjug",
  "key3": "3PFQ5NdDnMroLSaZA4WDKAptTsoHRmtt1RpTHeszpTzM4ghBB7yvzSmauFs1vZCPaekfxbYtx1eXETmfhaWduTRG",
  "key4": "eeqbv2vYWGfgQG8tWr93jiNszPGHQ2RDq6cYRRzEEmBB7TSRGBAKocLLTsTZ398xBsDdo4H7raMimSoFgbwc5JQ",
  "key5": "3Vk2G776pCtRwdyuWooo3tBEdgHv1qESQPy4zu92psHJAmjH83M4nAyFhxVWrQhMbtcywaKL6WzDGenKC9yAPRrM",
  "key6": "2zLtJ1SP1uqH1CG9BBrVFANa7R4UP7ETgaw1auCyndnGh3RNszcEZShrF83q2h4qQvw5fnQd6aTQvTHg1ZAhk6LX",
  "key7": "5oLCVYBHc3WcEH1GjfnBkUtbo5TCknsZZTduWBTgeZpQsfxLf83aKtX9Y58Z26Xehf5329vAmAuJ5zG58iuw7t8o",
  "key8": "27NiuXzi5j54rHWowfCMKMW3izLq7ZEP85gk5pz8ToVJ3JSZJxr2JQaPFx3N9y1afmrtnH1QXPm2D3Xj89tmbGQg",
  "key9": "4XSHgiyqMhkYiYxahzsbq1WYSbKpQRXXoDctDaKugcHxTGCFYHQnUpUdGuyDWQxkN7Q1E8wpgitacRfLTAmeojjy",
  "key10": "23mMaCcKSWAoUyEujbF6hcEDytzq4wqa7BAeaLPBzZD5eoYbVJXXiARZy6nUm27ebfPZ1rg6Nd35QcZygNDNgen6",
  "key11": "3CCFd3hvv4ouNg6b4y7DXU344DPe2pprYpM3gKsQGCA9EKxhpuZ2rxzFbVSTBvCavFEzWVd2MKJSdbcXJPkKxdnu",
  "key12": "4fq3azrq7hts17chTEh8J1YoufSQZPHunarKE2FBSjfgiB5VEshvLGqrtSLUapPxUE9x3JACBR4RoqjDpsN8picc",
  "key13": "mf3m53BmSj7rwK2eFdxnxCUkwjwtJzU7weHccodQXWL3FGMGmYrSscs48RVoAwtR7qxTH5SK1Gav1gM5jZHFsPB",
  "key14": "43saPprT3jPRf2vnqa7xwXxaasfHGSuDuniVJPSsnQCcdwLoYSyxTiRyFbKdTkXeGjyBoaWP9ZEHzQuDU8BEPL3R",
  "key15": "5QrPL7Li5FXue17YMnpUXFiU7D48FXCByRXM2y3kEiyyPmuJnyeZHiTgezrGhXiqZj5BTghZ5EzpFqjosH1WquSH",
  "key16": "uHvvybYb3gp7z4DFAGPRijtC9WRouz3Myox63PfBKsmjBhvA8TndgLWe34GZKqcJBw8VsqZ6eW7w5hzZ176JUrh",
  "key17": "5YR4mCxjoFKBYchCZQRQCFwAhE68zv49sXy7nHGRESzHn3ExbxFLP7ZZuh1MrxmtcL3LcKzQzTjzYqKfToZfvCvG",
  "key18": "4mjZM784nqXh5sFHMqA7we3oosaXtQmn5wVqgEW1N1qSHrLdJFsDrkfW8SYYpsgwzJP7pYwSS9hw3t9FnKKTxFq5",
  "key19": "3VJ3E8YvYpr48jGwHENKXAxLGfUHpstiWhyjWGaQg7SjRyQCqpXmEyF7hxpBrjvypAn7FW4KS6PXEti69Hpujw4s",
  "key20": "4uQnVAzH58zjRxC9rJrAy6YLRrAScvMfjwZyGJTN4cjf4ET24EeEUgL72A9QS6aT2AhBGE2yn44PVw9Dqna2vP3n",
  "key21": "2CnvqXt81ys3RaffFh91bcWsaXU6q781YqMgZpexs9HhkLDdDSW99m1Qtd6y1hx6LQxghF4VjwUtQ6d4BB1wUkKU",
  "key22": "5g5ik2fQmri3BwdHrtqC2nxVYit2og5rairiRof5BF7UwoT6D4afhVGK8MyqGBBJhQ5tzfBHJwybebiorpJzpBr3",
  "key23": "2zobQ7v9hAsk13CCBN7eNd66a3fWPM64soYMmG1rP32kCh5etKp164arnj4hoQxZq39mSvLJpBbEmULDs5Np4usE",
  "key24": "2afm5aYttCR5JcQjik22m8M674Sc9tPzTqXZpPzvmxxw9YVGWaf3xDm5bHBzF3HekQnUGfVWrsxmGgRZaPF9zZa5",
  "key25": "4abQKBkAxRb2XPZbEvt2NWThbHqCmw8ahcRCQBwpKENsBSKht8opXasK6cToUw4Gfcc96YiNCBo8jq9LBRvxFZmi",
  "key26": "xkJbxsGpCRrKr46McQ1LfDP8PyuE3dbAgrD9pgs6P5n3tSZAC3s8hgtU3yfCR8pcZBtNRoBoeLKxBqbjC2Q8TCm",
  "key27": "2TDmBRh9Gco2qFrr68Uqb1edt5VHbFycVUPykiNSVFBnoMnBGvGmrWfHi5muwnCAof9ypnk812ySY9w1xufM9Uj5",
  "key28": "iG4tWDxy5VoLBwSozWSWyjdE3mmFVp43UyBkicJrVyENcaA7QFfciMQoQa8CFTuEuvQFYbb3RLS4Gd3444YyXkS",
  "key29": "57wwS818NYLBW8saE21YQ6ppfsv9rCHzXWNPWqkUCLtaA7q7yCsxcXX7fhWMGnshNXPZxsQeRZ42miCQEWR7L7tP",
  "key30": "HYjBvniQn1hic2GB9HV4eeC3coeL1EvUf8emA1bH56gUePrTgL5vSTpQJ4okdrFNaHTqusb8cVr5dLSE9kzm8PS",
  "key31": "4ftjeeAMJmH8MDi2EaLy7j8ZvNG3sgrDSNUwatkHmQ2ZJVCPixBHE6E4iCPRADKgBVWn624JBWXq7W1WvZu2d1Bp",
  "key32": "5rk8s7TbAhpmJHeU3xVzoBsitp8zWPD19GEMJTaax5DK1UYfxGWbGUNSy712pF1qhSBP4PjTLVwngsakJTjNgkxo",
  "key33": "5YfZaexkpVV7XbPod3unj1wAGQpcst75Jk2WD4v1gxWFgXFEcxikQMs345ZqgZ9gYdWiHVSSM487WChFE1NF5sMB",
  "key34": "2UH62CSpYvLsEMLTTX2ErHoZ76ZaEH3VN9PsFxtqZ1bziRy8z2Y5boGcmXSWXWFrBn69itykcJKtvxftasQ7pJwo",
  "key35": "5NtAaTqKFXvHGis8M7XSCNEyqRFeQbvvitmyQ2gZo2iV2bgpq1u6VdYey4jHLygVNuNSvNuGzkPVQ1nyYWsigpZb",
  "key36": "4E3SEZncu3bFXR6qTbXj8mZTeXFXUEXjco2FD6dQCLkoMkai2Kj8jSe5BnvGESEorwuhsgdDQtevswoet6VqBwR8",
  "key37": "5xV9u9VrJNiW2cwevoYEPW5NbSNgjiHK5KC7V1S3gHWNQyT8UPnCXbWHqMxQWm53A2v8vyQw1G7bGFKtLB9UQUUW",
  "key38": "X2ymcYxnaNjDWzJ6DNi1iRFx9XUwLHCv4gVpPd52BasNeAmw7MerEAdU4XNKqPcZQP58nGrDx6cLevoWZh3knEp",
  "key39": "3QmWk8ASG5yzyZ3GxEP6SAXR6QDNUZZYEqyEjz4pncs2cntw7NPMha91zWKgmtYqwUko4uQri9DAtFhcf8VtSPJJ",
  "key40": "65WY8JMvDNmv6xQcpUP3MU84ug3PyopxMSzz3ptdoGL76oCNDHj2GXKcLentDkjbxiXAAL3HcgXzWC91ZT8ndJBY",
  "key41": "5REwh3NdFaLhATENoLJ43cBna4ff6eiFctD6WuL595Ag8zuNQYyPkKBcZBERu4Q8keKcG1qmh57vgXRU3iZdZf8d",
  "key42": "4zU8ajYTQyZp69gBGuZ8SewFYwjvULcjVmiM4VuWasqJkTk98hX9y8XyqVQpZ3HuWwoh9RvYrGPdMBnfhj94aT3V",
  "key43": "3Sc8DJ53FdJVCStxobk6YHtR98yo97cBrS6Qk8MmUmPdDDCst15EeXYj2R91vDTYLGv7NZtw19xVyzRgyzNkJYCD",
  "key44": "63NBA9CQgLmcNXJs1TrGGbGANsuDpPKVBnFCUAo7YX537zACzusA1WMsFG626gXq4DdjCnPCJhyFW2eyizaf9KDU",
  "key45": "5ujJHcoaNdGhai83tfCMpp8YBhYhGJvBBGC4EXNuCYCuTXmTArDyhTxUmRUcQ7bA1XKoJnQ59JnsQKLgcvPh4fsp",
  "key46": "5k2wG9vpnyyYZa6YTBLRdbST4uQVhgF6au332uxP4Vod3tiWFLtF7sZ6uAgwqRDNh9AwLw9DczbteBRzyShRtd7c"
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
