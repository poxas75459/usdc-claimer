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
    "VV96RzFD6AtbhFKprJL6EkryELMcTedq9EK5U82NWoGL5DVNS6vCwVcKFd9z6iZQELBgbiC1R5fSMGrG6YJ4CBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UcxE8zJQCnA2sTDQkA3cxJzueHkFQA7afTRLvmTC6XPEwj3i83V52xirC1mi2zDXsj6pkmZQvenVRwxAHiqVcDa",
  "key1": "Cx5ttsPronvch13gXvNLNiuobks4QA2feP7t1bxEgkfSVzd7Chccqqg19MA5KERSv7a8YvDMVRpeFsjaGVBwUSe",
  "key2": "2inKrDcrkWJ5J2bq3JxppqoTvikzYik7HYBJktFimLVTsrUQSWPR5kz7cnDbNwYtc1MVEGELJ4g2QpxPZNqVosyz",
  "key3": "UGgrUWUFFWbZbbWyEQQmPGhQsBcSa7zomQwZgMJYuFvjtUcBdV1QqCuKXZxa4gttsoKGxkgYUHZ4pcRq3vvU7Me",
  "key4": "3cxGmvHvfHpaoEMYpJstECcevGTajtAeQaLpdPwGS8nrd8fQavtWHhk9iCYyMdRbMEU9SSbzP3W7RJDHut3j61KY",
  "key5": "4NS2nu3uTrfz8iwwewnaTNPWd8mFR7M9V5AhnR2yCrGWrDmzaQYunKBDmM8MQ4pVU6NZRyesKrePPQk3HMyouwZ1",
  "key6": "2Uc8p7K92xvne2fLj6sDnC6WgyHWn7So2Ru2U5undECW4AXPYAU4pZ6pdMHVnZa1vKGajxCQxA3z8CnJspjhHgzW",
  "key7": "5orLQwUx9Ky6aD1vB6u65SGketsqVCNLMmVpVTKJesRxxufnxigi39K8ULHc1UGLWy64yFDqsaa7V872QM5a7ADz",
  "key8": "2ZGCBMD54Fe1TXafayEJUmAgJ1FhVo4NDeUCk2GvbpPnRQ59kFamYGuYLDEwVqTfBUQn7k8Bxa1gsyg7LnzSNNsp",
  "key9": "2PfBdEHVS49475VUYMTg3qkgd2WG7sUTfnWVKTNu1ctnd9v8gwrNU2jpXRk2ugTypTih1Cj5horofBfZhGhjDP8T",
  "key10": "4QcP74Dq3aR3fzqF8mb7JHHf5FfHxph35iqwdHyFirzzBvvCMmpTU1wBRvZDiy2gb2ECfaSJ1Esk3UsuM3SQUsiH",
  "key11": "3jKL99T4vCCLakTMZq14adwi1BHXUBmr1xosd31RMhntxESwV7zSn9RZZiLFZFTR3FBf9XU86RwGU3tjpaKE2WJX",
  "key12": "2fdrLRTxbhBXqZCQz7UwZbWgHoipYNgnnr5D6kqoJL7Xjs1LQBDAWNAwBbEa8xW3cdKVjAD9MW1L7gnZt3Q7HjSj",
  "key13": "5LJsxsbG7M1hADtNEvcwTUEB2PVXq2n3C9cHYuM5QuYQbNzAJeZETDMQ1Vrtw5kRdVFgKAEMmmDcbGgbKvwviht1",
  "key14": "5TWi6T16AzHmy1F7fDdCjxGLNtCv7J5amCfHVc1Ak9Z41Bddfzk2nTDFW31EiqnbUCo4B68ukChWnfHaEREDbEGg",
  "key15": "5Qr4sPUc45MPGkXixYZu1BCRcgJQ7tZ3x9qNWmd3hiXo3UJbDPzToPx7TJZ2UNWUA7yV4qAbn7cp4kdAvhEJ1cFD",
  "key16": "2mqZxtdPsDTQ2XnQcUGwnTKzWR4DDPsLCcdDbHy9b4KXyVS2szD5BzBQCB8ANpzckv4XAWFrbk9NtScZyBjCJRjD",
  "key17": "5YLVXbPnuMkBL7EeH6BL8gFV1Se1aDiMkNWymHAWvcSZJXpP5235UovK7Um82UN8i26yatH9Kh6HRZw4Un381JCc",
  "key18": "5TJnnaM1T8n4uTQV6txj5yQwa99UKotbEWoi8LVmkdRM2a7fc57dDwM6r8LKZSkEsLgniTao3cZtkGBe9AEXDLX3",
  "key19": "5unNFVV6fXCEc4Y4hxoUJvynofguPijDMuzbJkX2mLftui1cMg5TGtnq5H6PmYgFECEWVQM6Zg3Fsyn2ndRq7y6i",
  "key20": "3FRT3ZqHSgvsy46hJmThpHvFsCnBrFtqN7x4PEDVZR3HA7nP1yw2Ntbk4R17f45B41yqz56px2353ebeuMZVtAZx",
  "key21": "Vby1DoVLV6nKLcE8McBoxXRKnYXaKQQce7ywD8YMAHa3sn7LSMtoSxHkWAove2d9JdKZXpSsJ5y44Jxvam7egBz",
  "key22": "bB9498duw4zwoExKVQZhaWmyAKr1fjQoRjEMZUiBQ3zLa8goLvKZEyM3QtrndA4RNwnenwGF5oM4eg2guBa9DWz",
  "key23": "5CisnsFWp3bDQj85BAEwQHiNaRYhuY4AQoPnio8QK3LPfVxhY7AqykkTqva1Xa6Z3AaALc8ejSwj6KHPksno6bbv",
  "key24": "66sD9i2kMd2YAhTDQXb8ez4ys76MbEyzS7fXD8oEPP3RWKsMb7PRTYug4RdtbjRyb1jRDvkx896xT9zo4BX2Ps2Z",
  "key25": "54YJknGzQwXzy3PSBs1LP8q5EMxF77xQxkYXNE514kfR5da4UWp79u9CdzHEWc19BcsFVRvkxhw9HYGvbgiXBsaH"
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
