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
    "4QUrL4UcQbUAPsykUBjwPD873cER9ZtxyRScLCfuP5TNNPw2dSsTWYRC9SiNRar5goiCJc2EZd1q4pSS24RgdgFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67EPoa2P3fQQS3EFP5VtQEMFXLNRNx2pw9NHaUezKYTrhGL356Lc2nvZjvLABMTsZ9NfQGutJaTxCZ6NmE4TYF7v",
  "key1": "EytDJVvfxP36W9cZ1rsg1vn3attCTwDVaPm11hyRMv1DiNuKWt2CpuyHAy8SEJV7VhNxgUC6bbtmUEMr6UU3eAa",
  "key2": "3wuZfqTvSKpNNbqBJ9dtfxK5fyVEaqPqAFoH9esGocVLKSMhDXZCaB1X92gpkSSezpMmYu51wXTFDiQ6cpJ91DZK",
  "key3": "2LwmLxqhmPdAVB6XnR8vGWQDiSaHzyYtF2ZBv8S8rYGKgg4mqWVaWX2eVUBppjQL4jytaAthApypbPAp38WfFs3M",
  "key4": "5We2rWJWDEPh2e3LTzFG8rzqXCQCbY2xddKwVcxpS4JtHpdcgjuqeFrAfhEFX8o8uhX2GVeZ1BQbUjkfDKa2Nebe",
  "key5": "5JKTrPwQpHrMVXLDNeUd6CzUWdsVeeJJLLJLVnUsEGvPSDRU4eNCm4Y5ohRDu5YZy2Ep6fRVRjqk1qjZGeDurfdD",
  "key6": "3RFpr5NSkmfvmePi1AiFgHURjNmqztKGNEzXHUMsZrHbCnrzHXpA5kYooAR74QF3mPszbLYdT6KV6rUGt5sidj6v",
  "key7": "5GQeHp2oyKS7qdrhvnVYdqx9XxLuUoWCvUQu8jkF44FhnGpvarA7iV3CG2oAeGCBSRCYCgJrKQd4nQkKEWCWkQEx",
  "key8": "rt5HoppZ3Jki8A6EBqE9t7Hp3dWtmDmC6AgJy9ozSLFkxkgYo6hqx4D8p65r8YZx12HDF7ZZNtrW2CUofhR4ahF",
  "key9": "5Sx2GkkwCT4tor4aXiZXixsVu1NdmLvnFoh7wNSwAenWEJRpdXBGRjLFJmduwoWSCSmVkhaTYhxHcx9knQ7WFWkX",
  "key10": "3VwgVf5aNbh4uwxs8WPqkgsGp4U4MFPk1WDUiJP6a1s2V3oczq4B7PCUYiuR2LX6V4VAjxW94w47LDhsxcSUfJHF",
  "key11": "5CysRr13TrV9F2YFp6wvNSKpXJcTYkegj7r1vbZBkb2uPvLZteiAcudccZCfVF6DKJDjgRgm795akYNHYFnatbEE",
  "key12": "axeEtYi3Ns3LXoEB1BzkrWEMTtMBv9KbHBurkymUtfTrwDFg6xxv9kfA9982GmcswB34xqhj8kcF246Ra9oXsG1",
  "key13": "w7jLV7v1b8eY5czKFcpLXC6cNMbcHocq1BAiubfVjA2bUN1PDbTv38648MVg5JnHGFXGEgSp4antXsuEsTwd9GL",
  "key14": "6gmbcK1MKZSMnNdrbHWZygiGjxqNf5bV56REdtCFq1iHQ653ayE5xaBeSsQExQ9E4Y12Dr1wR4XQ15Eo9YPuXof",
  "key15": "3y11PcL2GNi7N5MNmPR14BQt4XbPJoKLsj34nqzZ1ogGdEdGAsAAYxzsKTitWKVYXj4RqDmF1FUcYLiHTyRJfZAs",
  "key16": "54k4sSS7dRCnVRbKNPcVDxn8ok72ZYqqtwjgAq1h6QGqT2L4rKsC2Fx5fGUUsaRk4qC2EvRXtiuNTy3Y8LhRratT",
  "key17": "61LWbhcCTq1oYMB7zAJfQLabUUhdFb6xgpU1ShrYLCMNWRvD4rmaGYghiK8bNLiMJ9Vt8EPvxMskusLJ84TMex7x",
  "key18": "y5XZpgveAZi7D3LgxR9uyBN39Mh1Pc1Rc1sB6fggdJVUZkmJ4CPdgHxDevAGqZtZyvqZ7wqZBNZysFMSUoyRXV9",
  "key19": "652gp9XPz6X7y2yKjwLgQLv1ifTP2kZjqGe3eib8vSuxAkrb6Q8NM7eLFgZK2B4BV6gyCjq9eir1qzRUWkSrFejw",
  "key20": "33cVDr6MShSWpbLUfWnpweomyMLVUn6LeJoR2TADwgXTzCVbDTHvmK3o8pP2Uy3hFBSWoyfkkLjTw5PoqdKZrAsn",
  "key21": "5P6rhgePFfEuN6JEDLMbLfdk9NoBykHtB2d5j4u1HHuWMHAEaL66ts181SgLahkTAaEFYeWLGacNsiWK1SJLySXp",
  "key22": "43z2GaZqiTkTCPUZxWcCJsmtEWNcRC1rdXAPEFEthVBoTqQCVvsRvJAiDabHP2PE18uHPRo1fzPiS9KpP8iKqgA8",
  "key23": "44Fr7fBDPYGyToyvpbaAeN91fYRHU5RZ1MHVgyY3ad4iLmG9R6TXddZDzb5Tynuz5BNMmE8ntKdWVWbAGeEfdNMe",
  "key24": "4jgBrcN2jUEy9Lt3Bxvu2NmGXq9uVnm1MSz2ZDc3A4jdnYeyn53jtCQ31WQugNmMyLsT2B8ufj5MqAUpN4Kfmhyu",
  "key25": "3uXqUjvuzrB72p96BuB6MvhHU2xoBT2obb7Bxk1ZbZjzfVbFgwbXVySx6bRTf8yh9mUvK2KipXcQcPsQj1uXawUj",
  "key26": "53iaRJ1XvDDQQ22Arx8JNySMGctcoWjejDH6cJ1s3i5QkBo9SvfoPaMh4FWZ4wtLKsZ8SPt8Ti5PMKqy8XeuvzCh",
  "key27": "3QX3GgwGgKnHuW6zanemxR4iWfbETsqepD8yTNPd5XpCnsVKCHWgi5cWg3T1TDQT9drpL5aPbQAQmSC5gbLtvGSK"
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
