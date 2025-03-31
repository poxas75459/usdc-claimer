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
    "2FjPASnKEDimu4JreJ3eNUp9waKy8yYNABK27TRRZU6FbVYTwPazoeDbLhAa1fWhRQKjBbxpn5smKH5vf8gMUofk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V3ZBEedm4SgmXbvABxtfZj4tcoFqTJvYzUpJXxoDbSYyt6HesaFLKkqFkB6oTQ41PeHd1HzxedBWRcwcU3oenz6",
  "key1": "3GRLjWob7jCv2duPiW8xTbg4fcgUmg9jKMC2LJ28zQmctdyUaj4PACTYcjcMvW1CazvVGcESk12WX7txQaagZjCz",
  "key2": "3Zoxta98JbEiPPjdhBfmqudDGy537gqiNRJUSnVf6hfLLLAEt79UptAeVx6hu7Z6RMmaMRWvbmnawrC1LhviStTG",
  "key3": "NnkE3EP9HmfDeU52MYcGx1tB1GyZkRfnoZyAHP6zJvan9xaKruH5F5C6M74MATUfTZdSstvhWU8zN4ZoUSxyAXD",
  "key4": "Ko9EoaducaXvbBZsZNMWmxjuJRiNgVcZLM5SKDC6cSrEB6yMcd3MeQdyZE9cYeQvxnveNQDoNcVjW4eeMxVAMpk",
  "key5": "4ba5UDVYZ9cdeuh7mx9vMTW1KSofy7oopMf9SAvViUWbwdtXeLusW1bFj5LBUTYJJn2QL35r5ywUk4CpeeU9jPNg",
  "key6": "35xpE7H1eAxAsm7n9yKiLq4L4SfxVogdcfPhiXDiknYKT7G1o8cGfJ4DrjzUFbzECgjEcYxwpvbS1SAabjtE36gZ",
  "key7": "AMxNvqoSLZGbdg9ZJCAEo64uiPTWQLj47cpZuBsexEkBMEYCnaPvXwxAnL4hNhACYQaQTZQoBLEckZxptoJrLPQ",
  "key8": "5rUiChya4psXpuox9Pk94ovroS3K5LktcrEPmrn1hmTSR32Popcu7s1KypZPCyP6nfa7zzqPrhKPJXECNYVeLJBX",
  "key9": "56axGvCfjSpk1t78YNp7VEQzpj6CTwhxDijNFFKMaT9vNrBNXfU4vcrkC6sBW58fsdEj4n1r26Tz3vENyAC4STGs",
  "key10": "4LqJWDf6ck3DMX3z8bg5YbpRwJ7shtgsF25mGJgTGaAb1K6j1xfKydxdTGoMu3AuFB42oZ4EFzvojEJRH7FBc7gm",
  "key11": "2xSs4yZNEdNTuxUVkZb4mapr85iEzKP316rQ8LEsmH4YzekPytvtY8GjtfSkZ78JLdF4MWGLu4YzeTaSmSvrGtS8",
  "key12": "3ohnSZUQNHV8ooZb1Z6HnvDkcU892H7g7bsL4LfzSsqUjYn63UNw2koGtwqmDtnV8q9ofpAkYCukjAoRoxMU8qNq",
  "key13": "4ce1Pwb2W5jiiTUn9BSMnn471xG1M8a1UNJ2Zo21qHKfzQ1EYE6uYSuhGMdTtuWN97sMJT5x7sNFrJcVHAURvQUC",
  "key14": "3hkCmYgiCW8Ys7y11KRHZVNL6AkDbTEsXAH7dVS4WVAM7cKBXaXEDfK8ffKFJ2iRyYX9s5PoEikrDTdfYJskTZSh",
  "key15": "4Z6EottnxgUQpVJpiVZvNXAH8FzjfUxXFFT4aZNsML1J9C1tp4GRn1c3uViVyvS5EzCF2ZLvnq4BkfHphRBeiu3v",
  "key16": "4qd4n3M1gdwbDf6meRxYkASdmWXCMDp1g2JTJG1dgNJH4rGpLqogCiH1UTvZzzicNbW92WATbXeGh1Lawk8TwRJ6",
  "key17": "67Zp365xC4JKFanP5U7gws6G2dRMG1FveqweNant5eJ1uKFVKiXXPobMkf73Sfh2PwLuirtAVGCu1R2VcAP2HnyN",
  "key18": "5HM4fZzTTd7e8GQMjrJSFf2RQxUN8jgXoFBnk2bZKYzCcAfSFqucAko36obUGuv4P3H9biJUqdkMuuiK6Y2btWj5",
  "key19": "YiBd5Ja5hpZppUVJv1CNf8YEANvRKtKspBp1P4wGuioUjG7ogMTbN97DKferCVNC9WVP1xVQ5p6zaWpHH4gBT2K",
  "key20": "4hEE5dFV4rEYrxMgvwMHWkSS7J5ecbVVHJaMvnxSJkUjSybofbP7NPuqmq1XJJTjr6mzHPPcMpnt7djtNSm7Lcs1",
  "key21": "4P4K2F2JXYHycPE8JY2MLGXjvGUwZhr8uNSQhUiYY8HVUGn9CDZkMgw5BarRbJAyM4EELKVgRWcBgdXPBBYcNiSE",
  "key22": "FyUnWFQ4ZD5DACJvKqJRLwPUxqPXPAGoY773yiyo8KQBfty5LMUWyo19DeKkw8XjWdy1L3EUxaDuZCGzTvjkSUY",
  "key23": "1eELaRTiqmg3L7EU4SpqvPksc6UsE4WFWuv5duYjX8FFvw8tbhjxvzXMyNFDtwjQN1QyHqGBBDbaR6uobaVisex",
  "key24": "3psyDbNcvBUs3zDnWRYiBhg1ESw7xPSxD3hJXQAmFdt6dKFAWZNMXyX3fw6XsdsnDvx45cDaHYzEXoJTdd3wziuh",
  "key25": "2sThRbN5JavizJUj2epg1Bn8Y1Z4ZpzogNobWC48cmXkZMGUukYERoXN2L9v3NGKrgKxAgQNHfUsQJKp7Sc754io",
  "key26": "3Sb9WCRvvEVnfsDaZqy6ow5w2CD2xfRBymZuytDaJueXuedtaZ3srVzVuZSxPqxfLfYDcaNsbgQJTy1Wr9GBZAqL",
  "key27": "WFdhteHyQUupqdjSkUsXTcKC7WKs6VWBXWni4uzjBrQf9Mvc895SsZhf7V6NDNBFZuQR8ea7F32fGUHv2iXwnM6",
  "key28": "4N84c7zy85D7fimSR5YJprrR9U767cN3MLjPiQk9pK94TrVJymyxtkUHzZc4oWsQuyS6UJBeRDi1NseCZ9d6f554",
  "key29": "3bX6nFYfEiFqPEffK5kX9wkpaBFpSvpAea7DK4f7W2sa3RAaLV5b1rivN5YENPyv42f2QedvpWMLoHn98GPb27WN",
  "key30": "2ANWWmKZmerDcYgF9ki7ts668Muju2uuTcpBSPir465QyVUjSBAeSk4XWtE4b236dHQ8gbrU9869PgCXy58osNKq",
  "key31": "4jRL3nrTUy7zysjgHYoKsa4R9BZkEYPT2oVKvhY9w99ipdp6J6UeiJCxoufNfbYvHQkxCP6CBtk7atf3XUsETtqM",
  "key32": "4r82DDoX5FcrMds1WHtvhWXmBKGU42AeqFoWx2Sa4fRHjjJaspoXX59ddH77qNxeeu2FwA1tKafZRGRA8gAyiREA",
  "key33": "2n8B8Wt7jBru2cu8b8yGuxfHNyWAJigEosLFpLH7q1pwqRjMRYJZfyy7ak6eRVaMofb72XFFVimr11D99rnAtfYt",
  "key34": "36V5tPoYnavDuHLKUzKic7cu6swXqbtkaH53Au3r1M5qLFoNDb32KoeUaSfj57mYWe8ixuDVbm96DQ89kN6rMaxc",
  "key35": "5TBfheaBWm5Q2mccqdwrDqhVsPyzrFC2tBmArQAXf7KZj35Wf8T7sZKjjb4ybCpT9GzCJsCuXoNp6BmYHj66SrHq",
  "key36": "4vHS5sj375PphQVntAB7sN3kZkaf3MBEw97WXSQbxsVVKHadPxtEGRBYGKSUbDBCGSrhgBKgDTZQa8nsNs6LMNbr",
  "key37": "35fCAzNqT7B115VqfALPU2eR4NMrQ4r9HRhcJwJ2q9XNQgMd3jXz9CQeaASsNXVK8QKjbFvuSpYR7Dk3LfnZG1ts",
  "key38": "411x59PktF793roRghqK3BEFP5fXRYYicKWb8qCG1cC3iWf49ocw6uLNgdkxADNUFnHuCwDrUBtZYRYjXp5YtK5y",
  "key39": "5qhr39VmjW36cqKZAAMx8upYzgRXNtxcAnpKhptvqF2gNc71h7dJGipo9z4hv6LjswL3fZTZch2wD7WjySdyAWcB",
  "key40": "3MLvqsnoBZQwehG5uSzgmdoaDWSKkzYKnUtut1xX1wEHJ8g4M4cycGwAiLSERwLrsmkjxm6FFn5JGBtjVA5PYAtN",
  "key41": "5pjWMBBh2AkyrAMnCG5tkdTFKTTxSyMZgcK6eW8yKaXobMmcQKqANyFX654jn4X1sLvCVRmY91YXdwcuUnLihEKF",
  "key42": "sNrUeJNJJLa3nxZDijTZqVw7aYbHEpJaSDGAtigR699tppKg9cLCfEyZQ46fQpftmcQQNCQfp35iSQ6tazYocXQ"
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
