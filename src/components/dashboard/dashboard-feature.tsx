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
    "4AWzQBBPWS5uyYHBQvsn45xzRBZPNSVSAY3SVCy2LKJgReMndWgQkG3gAiwqkF4dCMwm96jrJ3q63VKabasz6mZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CjcfCBiXEoUAcSgEf7bFbTHNTYAjy72d2FYdZnP6EaSupHbTRsfAPTaXAzsuvBuCxkmXDb7PD7JmAqzxG9DUQ9w",
  "key1": "2ANh59xuve6XcFgyeAo3XhU1npPezpn876E4sZn2zYCvHcLTubSF9C92jnUhrWWWwPQ4gie1tih1Viq75zeWhZDk",
  "key2": "2AWJEyBbnwum8bd7hwatNUVvFUp9W9kwowr6P7Q9vZtAs1EjttSLjpQV2Mybs3bFdWJHDt1wwUpGntqeyhnsZw6n",
  "key3": "2G9HRGiqNp2961EragordPExLkEjt8mwSDtBsRJKDq7GhCbfnh7JnF3QuVw4YAW9By1FGcZMDff7LYjtXPZPUeXN",
  "key4": "4GoJkoNxVTrs8z3HnQjVJCQu3fMwdppAW8azqsZK4cJJYWvCANkD118ZKbiARcbXDc1p7tmTxi8t3mVeLu3yVUPs",
  "key5": "4RRgXExMQu3hjDxwj3DqnPxHVBDLFdbgCm5BAQN2qaN5FrGUttU8xvxZRmnJKU3W9qDor8QnTMV4KPo9KnSoagWB",
  "key6": "3HGhVBmuZzA1Jqhp32HzcD65dMWdPVEDd3RU5YTxWYzLGGaGiWo1m6VnHpQJ8SaQUz583Vk7Yvc5NBDWbQyKmaMg",
  "key7": "62PeSv3CK1jkeqFUTxmKSADvwPbR9e99HbVvc645vvF7M92EsVy9k8dQkR1VchVvSwv2Zrjtq1ZWCwjbq8CSzx1h",
  "key8": "3fKjqhxF6JB1i7DxE9X4tLV23PdJCJ4758Ng1eaNvwt6ft3RC3S9H2fBAXP5WRDTi1TNeVXQETJKi7Fkp9MpmUzD",
  "key9": "34oTdAPjisJdZz688VNMPQQ981KGLKAzZjGdx5nsjnZYkrxVZY3PfySKGgwkxcERvpq5fg4fjzp3qGV4Avfmacu6",
  "key10": "5Nug2iX2PVeMFW2GLbfWKJEext1jK6Qe1kUJv1rTJFEtrxTWoFF4aieeysCRKtQGLQvpycsv321BkaCW8Tm9g4eg",
  "key11": "5agB2hSP7mFEisiPrtKyX9DVtdwuAvyyoEpyz6anAWUFqJ2obKLRjdk62Lx3HwAPH4dy1s8PxHTmtghuCPZKoVZp",
  "key12": "453ELx4tNe1zXEnCXpetuUD26JP3MpF6Aumt7UajKQizSXnXx3yzXXzTysBvhc8ieYn8a3LaoNhP5mb1qsmEk4mj",
  "key13": "3sGouaeh9enT1xuJthGTVz3NemM8chTRK939V7KNfpsoXcaPS9PjpkHcZrEvBh3g2RrGDK1vZhfRHweC5rTrAXek",
  "key14": "37AxNpiZ6h7VFGC1rceHg5ok5MCSpgZgnqPw5d39rDNPpSZBxqfNPqagjSvPp9ynwxUCkDk5iAhKMtsSLZKGqKfx",
  "key15": "ikj928TmhWp6FoqHGriLLuNNgTuC1JwwRHpJLiJm4LHa2R5HqQsfMjBq2rmsAibm4k8qjt9a3NsBazfKzGV5AyD",
  "key16": "2aX8936A1xre8s92oUnumiG3om7GjY7MUoykd5NHNq8E1PrtEfw8Yiqr4ehPA1gpyrECYDkeSGLZvMrfv8cYkwas",
  "key17": "4JK52x4eQd3QdJqfdQFdXND594KSGmSLn1iTeySJHWiBfoAo9kk8S4ubjWZ1buCQdEvGqp75oK3kjQ6KzBK2S27p",
  "key18": "2PRdxzXxHyRK2ajciPsjKNnHUAEYbb8MugqGt6bKEEGyYwt87irvAwZFdfxv1MYmoEpCrmvw12ixckc54TrtV9QC",
  "key19": "5aprvQapngnw1vUsU5F7S3UFRgFUR1mwMFZpH8cNud5bJzgtrGHFZJZNp1W5Haut6M3m3HdJT7puj1gJQJANn9ju",
  "key20": "Tzi999MPxhujZWNEPEwrfbL2isGV3wqQBMHzve26q8LtMFLyzt7FGmUV2CerMUaBr2fs9YTLYMH7dduNRp8CWQD",
  "key21": "E1KFrGovfqeAv53texeNDbzma7m8v4ozmoKvTvqB7LwitHp6wjgJWRpz4871Ts5kr4Ht3XiNxRxzSKdSLzBogt7",
  "key22": "QjmzM7a37i4hP3vrSK1RFAfL9DuKVKD3o2E9TcwSRAzkvmQwL7W1RYKdFCP961aZAq2X8ngWHUYRD1fyT3DVLXh",
  "key23": "5bhKAHjj7fFkGq4Uy1Fu6jVnz6RkgeMfUPkGrCs2YJvNTbWsxi6HXcsE5dMFsLNvS3rrPVEe1CYhwZA91e1wECha",
  "key24": "4fXnD6bVWN39erSxnoWKEck56sK4zkEyustxzW9iB5b7GjMRW3T5JseR4tm7B8gtRPenJZ4fjFQEPxXCwpuLrxfB",
  "key25": "58wCm5cJUanTW7bbRLK9cDJwwmMijQRXfqHLRLmqxPCs7PabqHUWWPSvNcb6qqEE2WLe7nkUtm3xepRN1Pe869z1",
  "key26": "ZWjY5Sm7GMnDhmLNyzZ7h3c2oLTWnERzCNFVkjNHTeBgfCtVQgPbisCzp9Ni7ZzmbPYUTsxFnMabTot7mLtHuiA",
  "key27": "5A3ktEpTFdvcBdMUh81Fyf3qC8YkkEt9iebMkcLY4fk3ZdpN9Aq6qn3XseqMZP2LLuTrYb6dG1N4M44wZJf33zjC",
  "key28": "6anGo1wvMsCrieS3nKGgHvP1muwbHk7NgSHuJgFJG33MTagqrWBTTRdxfyS6o663iX91BzJdk8hqh2dLiHDfYUX",
  "key29": "2vdXaNzL5UdBTT2XwhNpUa4qJNRyR4eTw6NLF6ruyXALr5mZTwo55YzD7c7pdaHoG3zr2ceZ1kqAS2XsmeVJRRPh",
  "key30": "4BBjnHcB18YxCftZDmVUne2BuZjc4BM7mWxfTe9Gcx2pk9dCmuobz66eH2nNJU5rtgPnRXFGL9NKDNppDDxqvu1s",
  "key31": "ikQZjoxf8fH3TUdA6aTDKbbGpgc7PCzX353Rqv6h4CUBhFbvG6NSGMEbozEEC7sRaWnD876vuDoYFLQgccQAKvf",
  "key32": "2mQAB62mctvAmBdhERjo32848MFSRTMKp6NXNR8XAF5G7whkKBkr1mBetRuCp3oeoQmqDiHVFgxVLpknabHGMW2q",
  "key33": "3TcJGygcr4fCA9fVdXsnTSyiVp3W33DjZ78ArQ3GLfrEXbMvhfHzJ7rjc6mvaKS8x7kgPBX1cBvANqtKWuAbuhEj",
  "key34": "24bpenpZC6ErtyyYWKBxShYb2MaiWGMRiKzdcthST8rDM56iB95xmjSPFQTpQqY8QeMPfQUUzmJ9d2SBJRgGg2dU",
  "key35": "4gEyY37hNp46foHdwxLpdciRjYKxXM76fUSdJLiqJ2RWgKJJ2z7UtLPuoxwK6xYRwrQxDWoUdhj6A98iH7Y1ZyTa",
  "key36": "4pjBG5scbiB2UsmqYiDzkvFwThZdafBjC7pgMEqxUeN77u89vJsPraHHopD2P7zejGG3VQkpSUAcsKEpgsfvUJLx",
  "key37": "o79NwJy3AqCCQtoKR47W9gJ5MqnyTwJrkAW3DU3ttxpMFUKGtMeLPybHnHZy1KSBoqRqjgYfP7nYMfMRTgZJH3Q",
  "key38": "5gvFhqFz3TX9FWtb1woq4GwL95PjkfdVSM8rpdTMpkurHh4SyBWZN92RjYBMuykZL1ZLQTgbX8eWhvwAhMv94erj",
  "key39": "CDThCXfJxDmP73yJbzojpDhip7nyYpNeN2ehwpnGVpze5FmXu5VgvtcUa7yZjwAM54rASJY3Q7Q55eX8iquJeJH",
  "key40": "5EVqTkvDBt7a66rE2M5tkemAdKxdM2uLG6oF7RAy3YaJSaT4ZrMDcsiMP7cCPLcFvDfUXu8BGFzHtJ47LrQPzHio",
  "key41": "4G9dzjyeRUs4a1KvH5gtrgaSZ1NqG7VYrfr7wAVS4TXiFxPRYgmD8Le3PH79XGALK2yA1Ckpj8x6VMCCxQdWS5aB",
  "key42": "M3gcfBf2kfqHG1YEoWjEmxUyEph6UGTf9d37gNschdU6ti2qkqtjjpah39qQi7x2shabxXDbCRSZJEbmVxX3cYQ",
  "key43": "3xzcmwKenQFwveSV7tBd4AfyPyxtwz8KxR2GdSpsgNmdUrB3GhUQN2GT8oXUrAVXbLYmecyzPuzro7Rjri5MMbjA",
  "key44": "3wiMvpkkM1QAWmDJtheFsz3ePsBRCk24dFZspoLQHYy18HEAsCSMKwoqViaeKwGrvWS9P21TRRuYVcqBZzyRMJMv",
  "key45": "2M5UjCazTofUEGSmSCNc42xRuqwtcHve37MYTQVJwL2YKEDMzNqznysAxdFf8aKyK1WGnJN3wLBzfb2mtkhcdHGp",
  "key46": "5Poap2a3R4GG6iYaq3yNLQa8jBGUp6WWwsSVRnoAsCB2eSdySbwAdH4iQyN7eb3mKbzixPSH5a3BH4HhiqwopoU",
  "key47": "2zcvHCpghGbZ16bGzsuiPKLJtPnNEhHFrHCGwRSeRfGUYdkb38shAJDyT54pAGch5yZFPhCrYqFTT98TLePcXLfv",
  "key48": "DfRQkGWvzznZso7ZEWNhhLHXtqqdTZBwjA424eb56w5jqf1s2FtjoZF8PraBZDmeG5tNg2f4sB7CyqeU3JUmZDP",
  "key49": "5X6254a5pMfbGYHkCgmfjAKW2NYBNbqL5q43U63yh766ADLjvndxAFFJCjLgwvSHFWn9je7z3qju6MBMAnTPbjmg"
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
