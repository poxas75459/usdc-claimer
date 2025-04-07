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
    "66jnvsWZCNeqydtn7myqV2NiZpchu8zwqyZ6uMyAt28d4cDVxCYFPK29nTDmNVa8aRZupJUbGK8Bbzx9JSxTt15A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xjg42fwgxsu4SharcxS9pm38RgQSzHeEvYq98y8TVZV7u28rzXsS8Ye2CeVGfzycXTbXmmaPkSTJhQ88hskvzct",
  "key1": "5819U8aEdR7So6DqQC65NQhYBd3dZFBSafQXruvg84NRZe6CceqF5ZWukR5Awc7sXGWHbwTmxpG9hEtqsqgo7YLN",
  "key2": "pJytAzHno3SKXQnXFN8JN6BGdgrevYBdBobDVDpdSCR6eRU5mexeVkH5Dh9U1vZdDsCotTzx36iYR3zpRgyxtoE",
  "key3": "4A2QP5wdmbQUjdk5Z4F3nMKr7cU9pBrkfU8S5DZ87k8FD8KWPn5B1AMwm3oNAPkNcH3PWQj9p51WnyYUrBTB5U6s",
  "key4": "3TUsF2qy5YYTp6aty4rq2DgAdoYekgMeR36CbjYz59yfwUBbocrfEmGAgzFtXBbQrS9PqTK1HiApEUvzTB8Q6aSL",
  "key5": "3AXJeACLYQP3b9pTi51JqbPRqLMDGfbmDasAfAjta7WsdsshgZQSVBX5cE9AQPQMgsgAoUdhah2NMyHtuprVJfHo",
  "key6": "2W6cvZvBGGEkByktYfBBbzS8C82GQ8id7ypYjECTJG5AyXbKg3wBE9wxaNu4D9vCZM62Eqg8MDUSxuxJwBDiLYU5",
  "key7": "2nG98w72p7vcxnXPVaKfhE8XUMGFxGf1V77C2LLNMuFgtvYVPKCQsSvG4W2HEgLHbPjTTzr1B7zC9KuQdxF8duYn",
  "key8": "3JtRYisf8MAtkvhusRdMRDR1AoPxNUJQFv2PHAMx7CWaGbfAczKK16CR6ufB3UQR7xiZn8s4A7FmyiSZ6tbybXnD",
  "key9": "3Mpkr4gtbhGJHFyw8wt8QEkzePpHVnz59acgDuw8282tj7g9Qgd48zF6SRX8kvW8nQyhsc1XeTP17JkHDNdJFz96",
  "key10": "3SiTfNWWpVTsp2VciWUWBmyi2w6N81Wo6gfc4SFqHzhmBh3gAK2ezVUVtS5bNAhvZX6VVMm5LHRt8r8SK7WxP2JB",
  "key11": "24HG8GYq5d5xw78iZrvrK8dBiSdemmEQwowFneiyFANLcfZPhGV7wygvZBrhoxYTNR9cFG3WR6udDwC8xaLiyFtm",
  "key12": "39ZTDL6CzXo9KJwj5ZBinbi6hCz8X1C3qtSQB1iG2XbHW4gR73Zqmd9ZrxBPJBCYrNmkSqpmmkzhevkcfeWzgnJk",
  "key13": "5x23GXEiAyRWbnHFQz8rn8qZsdeWt4y5cy8ngAmQi89TFZA6d8cAyg4F1nsvoMi5YNVnE1Em4Y4vup3bqfnLxyet",
  "key14": "5UKd35NP9eur8mQLZh4pugb3qMDNpRZfivw1D4xv51jwDASMLhpW6XYpftZuLTFN6mjZW6VW2mjNEPZepF5eVyEP",
  "key15": "33ciBq5SJGdthoQauKwcmhNZXHmZRVxbbde4PNTifa4xLRx7YPFzQRBk2aJwzxP2AicmNTWaW1QZwNaEM3VQh3ZJ",
  "key16": "5JU51jTLonLjBXPQ5M2X4iTNr6w2LoJyLLdg8xqNhCBKsFqRPuHvnrom8FrYUH4zvqETJ1PJpi7GSw9JXWcvXWvA",
  "key17": "Kq3XbMQZcARNqRZnM2GrR35zWa3zRfHZk25F719zaW29DtWPGPVyY49hF7TMbSD8fx5cN1zHZVuTUg6XEtdKgFX",
  "key18": "657hjBMjTzzVBneD92gkEC9zGTpEyWLeszgNiMeth42LY884VLdFSsGdqQwrpJprdvHap1k9UKnSa7LJiNXfVinm",
  "key19": "5gYJHgS6iWnNKz8LwTT7nqzrmnydmtvQNL8ki96qtwha52ixrPdRDiiFH1eFzJxbbpwr54W8dRNccmTWNEnzJVj8",
  "key20": "PnT8g74dkDuoghofFAHX1unRLny5D2N7sfQBLBz4VMZc59ETqDPTrXvZrgRSyurcWTMWtH7XcYy8NBQFwPEvLsB",
  "key21": "5Qr34MH9RsTVu9DxEbqrVesPBrPi57ZaNwhUgEyWuiUR1nwPWN6aBNTXSKTpoMNMPRriP1tesq2HEJ4iF6C31foM",
  "key22": "35W83vxBPaqoK7YMQaJiGvWhijFEZfQGgtUmwXhQTSKVkWmtpTVTQhQdtfdkATeNK4ZKKrMrBoiVodwLGRreExt",
  "key23": "5SZbHARxLqTC6KWxymkkaNH8Fu6dn2XytfeLNbndS9m9J9bBBuFhYMT4tPUfZwdckzsXARJ4n5nJTNxFu1xa4w7m",
  "key24": "KqhJScAu2hMkxz5A5WarHtp5k7qm19CYcoh65V6ZD2MSCq3xAjhTxwtSQ13pqyUp1RncPwqxe26a4MYaB1TtqAE",
  "key25": "5hX5dRgBXAjLRzub5ZatysGRMTWmfU28NpAbYSTqzAoYkEeD3VmrnseUdwiWvTy31BbBumCmZjp4eeDeccSuhoXJ",
  "key26": "5TcjTvw2mkpJoVexC2Zwz2tpSigFiCrLjaL6vJQFcpWSQg2ZB1xEUNUDDoMotM1bc57Y4ZWYFy4CctPdMURNQWFC",
  "key27": "VyBXwAi4ZGXTpgVGyYXakmM1VpHGJAc4zmkGydg2pH9FaXj6GApnJ5AzU1NqQm48nwN43UhsbUCnAqfmqh2r6GD",
  "key28": "3VHuX1MQjnaE4tr2ZZUje3is89GqgWW3EtzW2d9V772V3bsP7FRUTGuHgSENA35G3KYy4t7Sfs9J5pAL8jvsPa25",
  "key29": "48pKkj8kf4ejAiYAToLS6fXaiwnBr7kKuKbQ3kJgXQ4ocVD2hFE25XYrNkV87a4y13ZYj6avEb2HS96zB9R9GgY9",
  "key30": "4rFmayUTVt1QpWwZiyXuhb1UBPyjfTpudjmd6PkYcs6Pa6jXMJddLwu3HM9ryww5dxohy6G38PjG8hQ8QvC2Gw4u",
  "key31": "48JxjU1LBCQ5LpS42M1Dn2LE6xUHK7zGnZNS4CJCn5fumwZE2jaMkX44CyPAKqbgRLNJEFdndxj5fgWSHhCmL1k8",
  "key32": "2uLBngQcVscPFXoscSCTnJQuY48kbcKgUpcm2Jrk94BDHGTjoAhoF5fdbSZ4qTh8AoB33k8yVLe5V7t3VCHC97r9",
  "key33": "Nn9Tw5VgQqmK78wqDS15fu3QyqSXBXMUriMb5FdzAyHAecGBzA7BK3bjuD2CnuQhngfJVKrjybzJN5okQioUaxK",
  "key34": "4qNF6W21qxEC2sYmhaZSEckf5JTxwsWqsfVCwECD3Bcp8TtSiQX6uDsEWDTMVoVsjPzi2Fr2QPMcEBpZK8AbyyUg",
  "key35": "2T6jGgoRHVcTsPa9uYFyw6KiWukctYcYA5URihdGMkWKmQ81QUYzuiRTFYThvamXbFMgPvpcTD8Nm7iBv4FQM4xg",
  "key36": "2UnDeu6UrgHp6NVCG2aX81KcG6F4KhwyyCXQk9Auo5Bv9Rnd1CBLV34R4DaXQ8Mq3mJQmNyJgb7X7thcnezwpvAe",
  "key37": "5eXP2NLgBDcwT18sASn6t8veP4p4xKBfu9nDK8bNzz1CfYJtWbEbYkdcgmmgnP8jdCbth3AvhifC1aar3LNxLjWQ",
  "key38": "2BshKVBTTr21ZYPgZDLnYv8F5uyFHwaZXB8arGwqLPanQLvt6WMhTP2665WYoQec8C68bVgoZ3sri5yJEMA3PaZo",
  "key39": "2ShhRmc9vhU4B1CgS2adge8QKkMUW5duaCFFJQsFKoFMPUX6vd6y4JEZ8Ev2SmmsLewf8cVzaagMPESD8yXDe1LK",
  "key40": "2B95HwJqgBZhM9uH3bgooCDAKm769x66K9pvVSLxy9wTVKwUjoNSUuFfX1o7WGhE5ZLchginFcDxPSUEHnYRFp9J",
  "key41": "5LbuKCEeobbAUbrV7GyGPJHQANjNBiXFKyvzfDE4157ChRZT96XUJ37fnPmsYESWr26HxxdLMpGCV41VFmkstusb",
  "key42": "zYJ9gvhGN1fokSK5JmTrm9NLBGoDzDnC3e7e7JiBQAFwwYU6GfTZEEsHQE8hAHZGgh7Mqy6unaQWMQo7N8uqHUK",
  "key43": "3rgDD2mD74p8K51CQ7dsnrQVHz8i7BwgsJeP1zcum7KECDsNGeJGTPuWpU9fomzhfMdnN1wZe2pLsEajwARRHbe9",
  "key44": "2eUL36RksNBVgfyxqwrmSJ7poBSLthbhiwsmR5WPvrwEuh9yuKbDQRE9Am2ahL2KBV2vpugqYePpM5DmT9VZ9VaP",
  "key45": "3Tz1j4qw7NhNziM6GZJKMdcFWDiyuxe2auVr31tDXrk1utjXZTV6gi17gPaSeq5RqvcZ8mbgZVpSHp8JiERLMQUK",
  "key46": "4Ah7r159xBiNEBZXcc8yawfGmbxpwzgs2SyNkSrSraYUvs6bS8ffJi6DRyio5sbpFK6hfocHrPzNqXoDGrmPfXqo"
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
