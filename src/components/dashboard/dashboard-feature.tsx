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
    "P8tKyMfdqqpBqQp79gj7iJH7My5vSYNX7q4UX4ymM8FHaSSLJasbXsoUFZNyTAcW8SVzisT8XPB2vDwFbY2a5TW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f3itQNmZeVXdW3omcA66JZRsPusobRDMvaZ3v5RibXV81vcxBz6MvuFxJQjWj31X8Lb3TNYywEGm5Cmz73KHPTU",
  "key1": "51eLZwXYNBE5wcVZQxPvL5JLe5BEQrsAfupPztrMhgQ7aAv6xX8cy55JSePrmqHUEyNnLCrrrELjDS4zxBgkJVaz",
  "key2": "4rK7UmqrhAADTAxMkSU9MYqjufDgdoMvTmTK6osR1apbcx25PhtvUU35iag6c9cyvFtZgnTnADeHJ4gYNeWUGPhb",
  "key3": "57FK12xcY76oRBKPq13p5yqsw2bMaeov5LfqVWU6XvofEiV38TzDUr9tjd2PSaKEcXvzZyBrGFCg8a9yGRgSPjiz",
  "key4": "nDsY2VtXMiABLFUnjjyyShRxetVwwxCsJ1EbXr38gPhoFbhzQXFJwVPeFPmZHTkVbGGXJew8QkwhmAj55sWLpsZ",
  "key5": "3yqBihsfY1RcYxJBM9V7DFihgw5iYNhgMnhYngWcT3QUfvv1wpo71Mrrz3EKZyGsJhuZEGFxdngeQaZDAGGpPPuM",
  "key6": "3D4hkSzisdq8rdtSoHELx39ot841bkxSJ7gRKXciZdHTrh9LWF3zxnxWE3oCTxGgGdWX6Y6etVTnmZvTBQDHF3zi",
  "key7": "4sSHbBj47y8wfwuxebAop6mjp9CLqKegt55d1njHZtGedJSu9Hb5LveP99sd9CJ2HFuoUMi4iMK5USzswHLzuPR5",
  "key8": "2ZByUCDTjJUX2zTu2wsK9gnCP2ysc4XhcMXBYxF3zbQHz8QoEiLmPUVMA5VFXVADqa2ywQ1Cf4o1XQ1v185E8SJ5",
  "key9": "5dsBDNyEZDqvKGMMGP6XPmjaeVszEXBPcBLjFDAqsiy7ZhywrMrxpLhvp8RWR4xWeJXGV5VHzGguVjvCUyq51Nku",
  "key10": "3uduKeXkcCB1dDFm7VuYhmxqtNJGfzyhj2AdBZhzgY37nt9TS9GgX9XSdpQrEo1P8DQvzjsWb6JW79aKHRTMSMPN",
  "key11": "2YU69yLqG8ZYZYxZLsHZhDZaZWAqfFgH2rSKmVo4337pZVTdxCfEXw7UTuhty8J44unUiDDK9eGjCpuWRmiEYtzv",
  "key12": "52Ly2jA4uJrYsfgSUSJcZestnTh57DCNJzen85FoZsJgQayBqVtZZNqpGMkpR5UG31KQFqMUJpzvryCo5LgqYFyV",
  "key13": "24eJNFWrzfUSUdo9LbDNp138KLcVdfwL22MBWSHTM3UXysEECCNJZC8osyrioVC1uPTjMv633zB1PbSoZygFGnSj",
  "key14": "3anTeod6cqrtSFspevFHzGaQ1bstF9vK2DdpqSt1y8XSRhmhcuUviD42MfCG4YsKA2kuxp99ghsUSKh5DAa9v49U",
  "key15": "122VMFDUJNTdYQnqi7tetyevQYUCmSLr5GzMEmCqkn6HQnW3SgbPEjdsWU4HX9okFveqFzVtisxTe5vWKtkz21fv",
  "key16": "25JduFnA5w74ATuMLog8vBXoZXJsoLPWwZdmE2KtQFbrHA6L2TvSNarQPkgEZt4cCns4WFGHxGSAJAokCiW45weh",
  "key17": "rADq6NGSao4H5eEGvm4kjJ4BkZtWgct7tBQikFh8CKhnkkPWoGSiZK3BKtWyEqU25QcADNqBv1q5YT8LrvhRfkt",
  "key18": "5sjVYoyPEkG6ieTFaR9gThippSsD6N6qEYLTHtyWTbcdpj6k15CCLEdbxQFzEQRewBHiAPqaXhQCsiNsWX9wkGUn",
  "key19": "4grCGLNqKB7zqRi7cBApsxzhXubCVL7QRZ6HxNsswKhbWEc7UiUQgjZiJTbu2Z6heYup31exmgfqbHD96oS4VKKQ",
  "key20": "5xEbcJDQMKE4VWxEHXF41XHBhAN2tQ5wZjpGLu1rLZKNtPshtK4NyX64CaC33LXFnJPtZCmNHQtDrGmW3xK6FnVZ",
  "key21": "5uhELLCjPRhMeChzTkcdv6Jtxdh2SvRAddJtoXPxgi2Z7PmUCsG6U4mBbKLEx91r9BDzJtn4jULYuFh3HmS8nYW7",
  "key22": "2xbRfnK4vXeCkDYzNWTpyYMwkDaSTBRg8qfnJxyLvevwzLiRm9cBk4wLTDTC2MWxZMSfcXdfSzJ3WTuKGcX3qnkj",
  "key23": "3Vc8qGqjVAEhpdAcbhB8jwSi6FCErQ64xXNeQGy6xxqqzJDMAytV67wtMUsYTmeS7WqExibpLLJLD4qaEss6zhZf",
  "key24": "5u5ezBXXJvfGwiEHxrcdcYQTjh9s17azYuzEe4jtY4PLh89bHnDrz6FgcatjDBPdXyrPizSTwBXUUykcutiZXmYJ",
  "key25": "5quPAvNBSf5N2VXtMHTN7QrtJT7g4L5oL9S25thjXcjKS95wxyu3tcokK24mQ8mCHLcKb2Vf7CbcMdJuqjPX8pEB",
  "key26": "54QnAmaNSVtG4Bzv9JH9DRMyswr2aWY5hj35af4mSPYeDjxKCa66UR9ahht3WbB5cJxdQH19LUaquMEntLdQWQmD",
  "key27": "2nZdLqQ1eviiFridK7vhKGy4A65KWPTG3iJxV3rNutfFFh45se3stsFbLgBaxYFdbnNcD7GCQMj94ojW3grETZ6f",
  "key28": "2kioiGNNag2S13xoJUGBpdiSSwaAnU4XcwXzyfoFni3cWcjC2NNoMbkkbS8x2M1bDKeNNJHgW5Ui17cyHoNbGaTr",
  "key29": "qdqP2VkFcMNoRwNhVZJYpEHY7vFDigorXyJmMLsRFLxMbD5Uyh636idRvLsC8x1r9wv33fE9s9fAXDd1gKDznqg",
  "key30": "3fDdfS2s3kya5oJ4XhihK1g2fvHxFu3QQXfAoLxdD3SkwjKBqB3R9yrsysMSy73ASCYkT9pRe2AqhFiiEo9VAWBc",
  "key31": "5S6LLDZNkwcsBDbqmCPWQFMGmwin8sFn42buMs3HrVNACcF6jVoDnocxpqXkmHUS57psfdRrATZEEsvsniJP1BH5",
  "key32": "3LgBRXS1z3gw3vH8w1PPbY1SaGdrrXCfk4M5EfiPU3opvmGg356zJibzEKYqzBSREXzBYpGtdpc8WBfrTX8PYA2z",
  "key33": "5e3N5jGA1Gaux9CTp9EtLPshQe82qKNHW1oT4vND42bvPY5eGM6Mdz8ihKyyZLiGAVdWiVzMftPbqiHrHzsfUphk",
  "key34": "39g9dvRR3P3ieRXpHxmSA3ZuMe4RYrXpn8arvjggBjLqbysdvdudvXerqgbuYQwDytdrapYVZCenuFwVQVnsrJvG",
  "key35": "62Gc4jPtEasUH9irBDDdMD8BC4P85GKjzg6Qxa9udU369c6uE5UzdQs46KhQsm5NLUG3NFjxHgp6o8PSVwgt3zUU",
  "key36": "5XutkeiZFair8JuofYjb1VFAimxj73QDZhzR1Kv7Q1Dryw8mtsaBmriWEW3AcbytJW9e4GMcTJMjiY5sA3LTDRAF",
  "key37": "38rbAdHYLyCApFSNXyBU9xkWh8pALjLFcycErZBywYPBT7d63XE6NAQm1a7DzKtBfbEDB9xZZyh9BiHVPmY7jMmd",
  "key38": "3EXTVX7un8aiiApmSFTn5knRPDtcqLYqVKDAwr9eLC1avPCjngXnGdgxn38tGLiPXA4VE16EsqYaaPCgfbKwH3Va",
  "key39": "4bhYSHqgVxCJDeHe3f652FinbAPpd3Q2nW9TCzLmNskjhkBTeKcbKwuC3ZG3TCq5WKngfLiZpqpcTAsVeaDfwDHo"
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
