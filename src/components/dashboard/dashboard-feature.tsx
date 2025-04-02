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
    "3o2R4Jtd7GpcBwrW3mEQ19RKC56UpxtqVshiToao2giPKrDwZi1AuDovXUaypWagofFqxkDpy3ox84VebkEp9a1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nqBUn2L1s48K551dsrZ2GUNxutkwZWzuJEDQKkqghpXCy2r7VQaSk1oXFYoqoHPeZBskU6EYnGbxfoUvU5YG5qk",
  "key1": "2KvzLYKKKSK5qadceYXFY7YHXtC39mR3FP3ZJUirf5xnq8mzxohESLifzJJMXtfj4QBHF7Tyy8Wjde87k9Xr9zWi",
  "key2": "4eiupx7qjShtqaM7eFeaHAcxyUrpYnRuJ6zuSQHYvcMfYATCtgGBPoCTB7Q5FtwtEFK2VgE24EgcGU5dTnpyem5k",
  "key3": "2FND5QgiG5wJ6uHm4p6xchdN2xbbrT8svc6VM4NybQQu8xAvssEuVCB5HZFitLxLe5oMtqrf1tssauh3BVkFf9qZ",
  "key4": "4zQMGwuogM6XrjbmrcJfsWe18tuM2buL4jgubA55uhunQfaNpMAnJeJCb5MDLxb7h3jUTBnRpXRwdwTqsPkNc6BG",
  "key5": "4HBEjQDwXtvYN2UJy6oaR88faoXCztWvMAGeew8eyrVs4LJT17BXCmgr3WcJxXpMC2y8uVPML8HAxDyWkFW3iMq2",
  "key6": "wNt4j7p8VLLAHzGnXvbFASpsQtVonuvdXmQFuABbHLh7hVZNr2PiL8BpVSLNJqDs5Zo9NLwBpRpib2suEt7vN9k",
  "key7": "4xxMerPtvrcHvYmKf4G8rcJTrHfwxrKWXys31Qb4dqxp7EHxmTXRgcorf5ZTBoREYFUfsNAqKHPtpxphSJ9tWY8H",
  "key8": "4HNdN6LJLCmqePei9FkQyngyaqSNYxHw2DNKH71pxu2Mrmy4WmX4jKs5UXe6yCDcoN5yYtjtUMiAvFp6uLFFT63G",
  "key9": "66m1AUZkpKWGGSZfZue7D3MxSdmkTwZyVM6u8zMG7Nxmh7eQnQW5sTFyyykuopuBGKLMJeFqWena2hjmWCTPat7N",
  "key10": "24WV74gJsGzY1u986dZ2pSuh5ctAF2ePJuw27uG7knXZZVwX84eqC3ZyB8rSsrwWWHsNMJNzpaK39KSXsefzyAfN",
  "key11": "4iYw9ZU4pc2CL3994pytxABW1HhNadcppk4o8jVVixX1zoFVze3KRENuuoovDR3D2YMsmLcD6naKqxsRTd58PAis",
  "key12": "5mFBUbgATgxhyN4uZ6ykZmEUuxiFTkppb4HpiCP6od6ajqLvCPszZgngPqgM3uDjkw1ZqFhevDsFtat411kXmoeo",
  "key13": "5ZrUNDYSB9JmoDcnQBJEPFv9Dir8q4Eps67y5TGKkm82yVhEDqXeiqX39fh95dTanynTnggCCVyK2wMPUxFchPo",
  "key14": "S7AJ8mRwR9rdSXRHtSBbPb7X4Ug7jmo3FAuiszFS7KVeWYA8j3qfFeVUcvnFJhusMWktJtA7jw3grLswQKAL13T",
  "key15": "4kDqpUTPF4YsZB8k1QRU9B6LfjmEd3oZxRoSoGryYtSPCvHXfhKk9Z2Vw6XpzPhxUeEsiNuaRcfx7QVLzV6LM4gL",
  "key16": "2BDeN18bGjK6vzr5t7BEhYsfY2k1upBSu31je8wk8b9aF54nYgRAGrdvs5T7jitHSB3tfEotim2b3PfRbWZuEYjX",
  "key17": "21d4JMkrraEXhugKLp2qMX5MkhmMg1DjzvQAU8AeS6Snfz5BCLSUVynkd1sViGqd1TVaBPkmxJSekGiU4f2a8kbC",
  "key18": "3Qypy8UvU9Ef5s4ezjmqYoMhxRWKHvCcRU5RZrmr3LjnPGsVTUsQWhji1v5x4ajm5PkJNSBnefh24rzpRudnLm1o",
  "key19": "5FK3NAXS18auMeLiWiB9GY4AQW5HbmDAeSQfcjPPSMgDcxDnHRmJRumbpnX9wtWSZVdEdmmBgjuLJfiXuzw5vwHd",
  "key20": "3ByBXHvZ24JNDoaeKkjsrSiSuLc1ESrt3cZqGKKXWRBy8VZ1qfZPq4rbnpkJqxfpWJ4YwqYUPvzSBHkfb3CoT4HF",
  "key21": "5AZTqs7SbiE5n8Ln8Kda2jrYyoKBwszWfMNfSAvJprNkfRSpJFuHSExkNVo1wzT4PEdkBcLCPpntJRohf1ATjASV",
  "key22": "4BhswToJhGP7fHSXRowe1DmqnHzzLX3TcAYBUrFJF1P1LhUKTURbTCe4omHFgB6tS3Kcej6vbZ1EiKbt4FZ4suXL",
  "key23": "58KftR3vwpUrgkdJoAxHD3uQqbiytvc9gkT6TbCZwqNuCC7PVzZAewKsQdRJMQTesYosAnxyBeLPWDte5VpZJ3vk",
  "key24": "4bxFcyfMpoWxeFis8XYGGawdvSKDoZx3dqtuk4JwfSu4wxkCfdSSa5S57L8avpP3s2ZqYpFUp1XyRn24oMuoJNFF",
  "key25": "pB7wXBthmca2FA1tikcgs7AVzvoDvGo7VeXx2rXMx1PNNRb1sVQiaWePLYzntaykTQV5DA4ZAZemUxtVcaq5Kdn",
  "key26": "3uEEQNtY4FiPk2eRvpF9eJdMNC9rmndZNc2tp6c3syS1A4tqoLbJiNYrm6TbeQGznDKwggyMzeejSZe4F8TG6ds9",
  "key27": "2SLGB1BtKCpa4mutQtsGLVdeNCCdPYAgeKxKP9zaqyBEvreMB6rkHNCs4ubLRe7AT2vd7YqcSh1tXYq4veBvgqiM",
  "key28": "3cB3cpHdhMBaEXopSTsZM4FuhvbJEhjVSr4WwJuYFCH5jqSgJWCrCTGKXLE2cnHEdd2Bcrnkd1iBf3mnanVkJp95",
  "key29": "3N4iZe42x5bKSkc3vpyW8bnMjiqef6dKH7DCtR9VkxM3uHkdqkS1exGtRtit1nKX2sNj1vrbCdJhz1toKmnzjH68",
  "key30": "5Ec3j4pwo1kgMvi4kbWxJBUJ89Sxskv4Mo8DLoQfhhxiE5zwfbS7XdLin1qSDsrzw1jhjtDeGb5SBA98gJpR5RbQ"
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
