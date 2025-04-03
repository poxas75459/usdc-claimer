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
    "2X6FRAChnWiWHyCLKTphcsTeD8ZkE2Ej4VeQWrnUmtFLWoZSHiE5J5GYMwAY7rkkCYWyNMnqqoUnATW7wKeRBiys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XEmUEKBVNQopXbQSgF5rsU8Xv2T3Hxp93gA5PDoe6Q5kENcQoDprM3F7xDk67in4qyfcvjfJTrNgigWg8bRUWoz",
  "key1": "3SvNbBSxTJsqGw8vHSj1xy3wtCjFyHBGTnw1psdU7gvwKZH7ixzTFhccCtoMYtvYiSm96nGUtEv4HhA3yeUXzCq8",
  "key2": "2BwSYgDn3Bxyt7dRPKzbZfzGVPbsfgyxLkGWNiangTgfpdVdbSh1jYohRF75PY9rkfsktRRfxwi8fAhPh3V34xS5",
  "key3": "xUaS7xohzv4KQn9DPobSeREmtHHSGSHzzyqdM6bKQLHEJKNha2Swc81TckShQcxbJjhhxRTydBQP9WknHcnibsb",
  "key4": "4LnpzTLEHh26qohbxvb8AMeDSnhQUsw83uA4AMoPJ2eSedPtg9gLS1dPYKhs2ZXaiCw9yUSuM4A85UNdud5qC256",
  "key5": "646EHi56hyqsczfo3xE1yC7fdtXWae3oWFQ7QuNsR57SGaFG9kJN4MnT2vzgSe9HfpmHyCgao8Jvd1T9LSPAzjUj",
  "key6": "2qyCfXFTVPLhv7Ss73kfDBC9nNcnKSdHrTketnhYvraCu3T8Kocs3syZFgazYhH8QZrCMU6ESFdtYWK7shPPTzam",
  "key7": "5LAsMAtYwMHV5rEPusTAWJoBMrzf4rNYxGSmhkzH1ukY6dTcMmumR37mwsxRKWFTpjT3dSrcrHCGxeqQXF1iqSjy",
  "key8": "28eDssHQtzD521sd4kTaA5XNBLU4uRExqzuFB8uoKDpkweis95frRq13cc11y2zmCoceoXYE2BLhhoUuMyzfP95L",
  "key9": "2aJiSjY9dJDsVygYKHEz8bPxZD4Z3Zji38BxmjWPM2hXBxARXA32CYZfQntHJoNFK9s4NnxCGejZVo9nCZh3nP7e",
  "key10": "66WZWNaZuJ51S5E3RdqooxNBn5248hWni8AUvWoh7bKJNpv378bp2eDgvQzVqTv9kntsfL4WHLFmQmyBNmSZfym7",
  "key11": "3B1MMYPwYKjsWAADAnb81QW4kvNiniY5u1A9qEJxLssXvLER1S3au3zeijhx1AdQgw3H14G9wFAyRr2dyN2RVYHK",
  "key12": "mwP1ZEVbAQWEYL5sjTSRWKxKSScXM1fLjyX6EjnCYtjQ515R2tDxo5RDwaFuwUrdHMEotq8GtJLoCdfAas4Pb3x",
  "key13": "2eYDjiEbNLtSRPw7pZSzeseYHXjUHnUcivnSYHveEoqpA3hBGqaBzZ26cMDF834W8vKe1SUccHkcuz1ogdknpHzD",
  "key14": "5ayFP42pCVFm3PkECLNEtdR9rEF4NdicoM27WL3icPJAJwd8DzoUYTaVrpNHKi4z2r2q6BQbxU8igSaAY5SaGjn",
  "key15": "3J5gQY3DoG2v216XPFXCGRava5ie9qhKENBDnzonccd7BFNWh73btumdFgPMcYC2oMsRwDykio9XxettWhtHdTyV",
  "key16": "56oSXWJAb1qWv7omVfgdnrz7VkScG7W5Loq7EYzgow3VrLkxBVRyaze7hhHc4Dv1ur3MKbGJdgyEj1MSPvedc8F9",
  "key17": "5rsyt63AFKM7wR43fpoeC4bDjrG3fGHDAEXGSGUPNkw56Hsy9n1oAR8c9qNFxgWyEyQ5A7T5ieLo7M3NVdS5YmN",
  "key18": "52t9ce6NZdpcP3Sg4xE5sYWhXVPgASGHSiKwTTwA6N9zE1muQsR9sRvQWipgfxtQH9V2hY4hznkYn2dYVVYJExzd",
  "key19": "5fsaT5cqeuMtmXogXto9euJ6DSRoyKowrUKANj7gQzpLYfrATJXW4auVxiQGjPy6UJBm8JMK7N8LSogpJrzWzDZK",
  "key20": "4o4LTbCnfP6x21EdbMAKR5vi6bP4ZpCvZfCHVU4anB7dN2iPr9pVNxoUuXHQCfkeuiborzJ5gkUFkmGYJjkCPjQ7",
  "key21": "5xZVmq8jncXe3H1yFKYf7CUGRtriXyT4KRS5epxtd6YxxyGDaEN3WTkRSPNKm8ZeAYZ4TrTYGLD3whGXFVwkSe1z",
  "key22": "322vaKPqbLtFmpZatxD6etARono9kffN8w9dX1AD1HwdwtHspXgxA9PtbWK6hPBk8CaujXDpUq8hZWiY7J9YJWwN",
  "key23": "dTujvkekBi7bfaV3u5L3skJQp8En4zNHLAsZpXpuEoeK8cxyD4jGBeXd6Cec4bwQ7Yga9gphFWBXpoetMoHNHJw",
  "key24": "3Sgpe49pWXV1qxyagDap7r9XgF3rTQ1XsP1DLeumtVQwWSWiuF4Lb4RDu6HQXMMH9wMZLjuBspJGPqPW6hGgwpz2",
  "key25": "4xy4hfqYxpPFjzFJewEcNLDEdoxJE8YYMWkaTEC5vjCBA83sso6nwRRVg7i8ehxQWwVARJ7yCw7gjcc39C8UF2Z3",
  "key26": "4ySv45XH1pAefLfCrAp8WMXyoz7sMpz3nhtnwU3jtpxdCUvmCSqc5742vTPvtDi1F2j1FYUMdAMHLyozzvTcKYNx",
  "key27": "5NQZZSpLxta453qJ6n2uzC8DXAF5i2Veak5RkeWU5sfC5fafVDLjNJGREPr5fyCHUrGxrnSypzqtSZVupeCo12aD"
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
