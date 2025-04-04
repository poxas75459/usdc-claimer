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
    "2gHY7KwyUWnRKGENFUyL1kQMdM5DhM4ohvLvqyZ31VvW5DbX4L5fsXDzRPFTa3GPCrRqRcWM86kAKoAtSVkNZkwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z1A5h8JyVP43Xa8YqnpHEf4TNELK3ov877Jxwcpzsa6ozfTFw4ZogMRQip3u4akqqpr3FudVRJnxdawJqfWBgjD",
  "key1": "3Rf3eBQgR6cbNu3fsEj1zqtSUQkxzfnT2mNoJ6UQCGYYBhSaR32PBLfVAMrYKFtaxUyUTsKiyjwRRBDVRseP6Rcq",
  "key2": "3enoP7woLehT2rS7se3L6GzKj7DCT7Ua97we7EJXRyb4amu1E4PK861zTuxRuMxxXsAFaaMUn65AsN3DxGPomnSg",
  "key3": "2qZo2X6aRKygmDwRLceY6bZ9Uc93VRDfeojRdX6ohhACkqcftkMotbd1GXAjfuELuRxUZkWF3kcDzwsvqvPk5tYK",
  "key4": "4iRAUQkEW21CMQ8iawD7hyZFguUP1oEPFPyy3KHFrND2vU5DkaJVQ1djPAZ14xpBAywBtJQDfXusEzLWmUBNzAP6",
  "key5": "2vZ4bkehYoGD7WpQ3MGXdgtZyyHWAPkrQkHiqvUV7Ee3ZEYuv2Yp6poUAi8HCzMKgs6NBPzRSkQw3zG6sYwZpSRM",
  "key6": "46dgBsd3MYHBTMvkMawk2pMb3ZwhHVN3Qjd9a73wi5YgxUDhZ1SHTM2hPWxP652VwCpdUVXQVMvMvBXz63eqsr9A",
  "key7": "LuycKAVrNaK2rjpx5gpeUDnEQMB9NbUrJxD1xQuRg4yLRKdFx91tYmduFnGtEChkhux6UBg9uQuwUcaFLGMo9xZ",
  "key8": "3mut13ZmNmira1XJ2qt3Je7psVn5QNNEvkKc6pBUbqWhJnSkNiDYp2h7X9MhyC8o6JGZKp4yB9z2ibNjeoKAeqZh",
  "key9": "4FE5tBooyHGy6vHTjhaLEwcLmTFBjrXBmu4mXZNryXW48dcqFb7DLd8wuFNsgf4R7HMqvGMMSecknFCy3VoHNXfZ",
  "key10": "4SJmq8i1xBs6gNF3XiMf12h4Cjp9CQDLvesfPVA1C711JgDeKnxcefVUHLehM3Tonr7ACUBNcMJYKzsK38rqKvXM",
  "key11": "2tMCYL9Cg6x6FYRYbQQa6bdTEqfmoTfJ3aQoSMZ1c9tj7pYkwZNK9NzQSWJRKGfxtjsBWomsMdNToSTdLdsMNDfu",
  "key12": "2f1msederfMy4917pAXzbXk6N92enLbqZt1eRxDpf4kXKx35qX6LiHGEPaZgeSgedLEuiebFpHiiRcrLkrcvARu4",
  "key13": "22nspPuu1TUb875tzNABgmmh9S3HBt95Rke9xVt1YbH2kiv4K64mg5cgKffiTdkA89McQ47k1i9fosepjpUv2JpQ",
  "key14": "tFkawAXtt6vjRFc8ke4uybkLkVzue2TckVoZartCqwFXZLosYmg8eBdzMAX6tY4AQkNgsZCYZDx582WFaDw3veR",
  "key15": "5YEFnwt4KTcqy28z6PnesLADgDbXyg5Mdk8gJjzx5RCQi95tQeWeXpob6GUAZ6XbGBS4f7ap39s1JX8vsw7Wux6X",
  "key16": "5SL6beqwstzj7taUxWYk6dWsujxLiQ2agVJhZV7gytGbu9THqq3j9bzxDhDcmnD2eAuVPFEGh1E73ViSKEa5GNNQ",
  "key17": "5Y3BwdsCjr3D7nBgQ65VLTZ4SAn7F5XZCkCbXJDgheGetjQDfuyYHaks5rgEVrZX6VUSXhJbn7CXNrg76y4gPc54",
  "key18": "uV95EsKgaBfGJUbtW8DcRTTJnuQgssG1ks1AKs8aRsr6MyPr5E28C2yVqZnMV6oQNCsuS1R8tFRiuhNeLeYrcrN",
  "key19": "4Pz6FvAL95AuisBzbBaw2oCnJr8tjDkBmXgQNbDY5GYXiEXEwzaWLbfEkv5ubHJLY5Hpfju7DwsUeEzSPrm5xT5J",
  "key20": "3U3mhkj5g9f2fDpA15NaaB41Cnuz7VGxfAVV1NQJ7YYZfWrNWeEi94oPaXi8CApDPsvH479tkhH5tfzrim948Sm3",
  "key21": "3BstTQDHF5vivEhiHmsSFFUM8BLt5urMWcjGuUzqvotoc5tRA3s4YCfTtThRnmJkD9ST6k8tsDjw1Z3zdnMZ6x7d",
  "key22": "5urhYKQ8RLmoTYWoswhfpq3q4W5p6RsZzsxCqcN2hFzSm7bnLRM1riZNcYes2jAxEPmjZhfYdugVhnCpkVxytX9H",
  "key23": "gy65AWmM3QwAgkzYZv6KvgZ2qbUQ5aK3phGuAaaxLoB6i6X4DmSbVVAxrhHDkStJkWRqx4eZHWMudJ3uGu3AvRt",
  "key24": "4RAwa7KH9NguimkVDWt3EFBqN7Zc57kaCaZvy4qHhP7PG6PcRuxnF3jhBn5oGMwXFKQE6tUHq2YTwePdLxJwXu8W",
  "key25": "5fQdBxmmumeC6t9XscsbprSLMgryEniyXoFxKTdmTBjaX3j7JmhohtLGu3B4ZNCL8B9uEjYi2feVqu1qqaYcJbpg",
  "key26": "K6wd5Sbbxab1Q1FD4K4h3k6eb6ctmyzPtHdJ63ndnyHyMG3YbMpBg1cV1TNgU1v9B5N8MJ9mZXnZSjzzEUiJ43Y",
  "key27": "48fXDhvifQ48bYBdEjEYRfbFgXSGq6j6e4NEckADwh9PDtb6sox2n1ESGZ2VjwFkh6C88PXRDWCQFzuwDr1HcLA2",
  "key28": "2M4weWdKzwVVKw9JbAmPd9s8T3DnUX3wot1xvmyxE2UdCB6gHhhxtdqYbjECMvyQW6TPwxBEdUMQWYD163z8LQyz",
  "key29": "3pBXbC9HDvoAkhVVBMvtnojT8E9DTmZQVn5o9hSurpJaareYYUp9bz8Hdruz3W1qXPsSPNV5bygSRY2BPCiAYRoi",
  "key30": "5nRHU21JRW7p4jQFFejyF3RWDpieU9FZUkjhduqr1UBeN8mvUTyjir4yQNhEGQYVn5ddLzJRvioq97QGRPjoqa1H",
  "key31": "3V37rCttGFEjh9XpuAFgpbddwjTzkQHZj347ZiW497JKasvHMZqUL6nMtYF57GopCJp3tT3bxxfmHPP79mWgFnR1",
  "key32": "3CRsMLxVvJwkec5UJPSHdgeru7bdM78U2vnvQyt1ZbEXsa9PJ3hsF7KfeY23mRyYkYMeJ2kXKgQHDrwQyBhLBSBq",
  "key33": "YSQFxbXQbBRn14owxN8aK8Si77KXMJ8NkQZ7cQaAEpPcnTfuGMpJxiwsxDNTK7tZNRZVPzwpKNLqSaVdKj565ad",
  "key34": "nw2AZpRZdVEM1mWst1GL6s756Ekd2zecU3tEskpZhrDa3eLuJEqeCZdujToEYnJ4D627i15ovHrsYDJM8kS1vae",
  "key35": "67rXMLVssWpJFG6syW8NHDnjAoDv5mKZ4wT4XQ5jex394qY8FcDwsD61DvbDGx2JWRWU6Lu9axidmxmUZVDhtg5p",
  "key36": "62iWJzT81Tkv4NrRf3qRjM8bjo2MbhL5Agj5bKfXeu2QuYTuixNPgpeqw9pqJc1L6qnDAmRgwN1cMYSXA3XbkSu3",
  "key37": "4cjjrD58FQppV5d97y4g9d332KhhZGLMg5FCDzkv2T5YroknFJ6TzC89BFqgSJQjv8WdZufXGyQYqbAry86CQX3Y",
  "key38": "JMoYhbXPsJ4Dwc7J6tPeykH6b3VjNvXm9YMiREx6X7jWMyxyATPusCe3QroDLf8AwSkHQDuugeBhixrYTXSKUzA"
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
