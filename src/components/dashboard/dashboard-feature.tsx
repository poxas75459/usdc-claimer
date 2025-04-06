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
    "2qP5brJDifkHVbarMDo6qEZpzTeu8HNqbD6ujMiGypkZXqNJzXXzP6qpTU9ZLTxZ8SuVAJTUt8mkcPwcUoUvtj2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v6uECnHdRZrwKEiWSZX9K1QxNdqBAf1gevV4BHWtWuBrPdF88iCXDJgw4hjmDG5Hy2MaqRnKe8HcjznEK125fv2",
  "key1": "5qnGr2C3JiUjSTzydT8v1nuriTRPnAMnJFQvHHX1fFfVfXH1MAMWUa2KCUF95EcTs9vxD9LTeN9HqbBets1geVz",
  "key2": "d2VWSxAk5NcocxZkn2TCJxKXNJzh3f55VvppiuH5fgpfiaHnnNNKS6xsfCc1K1x8mS1KgRwBDR5gG9Yv2YcQL1W",
  "key3": "2WzdM56sgzkE6poWpwRYkt4De1M8WcBUxPPVKPAG2LXFKhxQSZaUCrTXsPixZKG5M2EhfgVFunHPEMXUaJPRUctK",
  "key4": "2s8fyHmfc4BVct4JcrW7ns4qX4vfes9nrDzpfnkzQgJtNE6QsjQ9k8aJ45zHuhXLtQiphEcXvpMAVXGbJJsB7Zgs",
  "key5": "LCoN9LLFwJUQtUHxj8wvVtK3ZF2Y6wgSapmJG551mb7MQFXkGpQDPWMBRNUNHkECCMhWqWjyWUKSuS4MafciZpp",
  "key6": "62sdURk6saHVDTByQXMY3UB1eQDUo2b8bQXGoPF7znY1sD1orHh7w5Hv9vzN2w1jHXAmtrHY2CmB4Ka96CBM5kCD",
  "key7": "2xRYEJh66a5o1C7U3UWCT2dEJfor9c578V4egSp8pQ3tSFp2gHMB4bpYJNCjKViTByL2Ph8BiNf8RNePJ9Uzs9ja",
  "key8": "2MebZnjqPH6yHjAQ1yN1pat14wWozvVcSvMbUmXX36jNEJMFzWPNeqxXsR5Agjc2iGT8JT4JEWoRZ8SKRnZ8zFxg",
  "key9": "3XbC8Uhotn4hMErUvzpMZRPSjfwMAANZeri7RpaDcKrdbasE9daMrwLwGfcC4x3wn8JHv9uALJ9FM1HVnRjWr73u",
  "key10": "NCP8fspZRQdcmSXFngFG6FR84ffdRzZtNnVVQ7PVT5MGuiRCZAchRezCim7uHDbDzTkXa9Z7N8EANhvJk2fskiC",
  "key11": "4JyAYx3HVMgm8aMGagEFRjNPTKWnYf9A53wn79kQ7FuCW7N3vWPFhMJhGoGpswYJcLQihfxzjhbGix38pZdEV9Fg",
  "key12": "YXG8pUswn1KiqyHUDDf9GTBujarEu5tLqF9zJ8SNSCFrbeVeRpRHsfcGZFN8iSFiTHgUeX8hB1maTaGEsiXVuzs",
  "key13": "4axWEjm625345h7oRt7ixYwqYSrovXAws1dcHap1WudiCmfFTE58a8Dxj7t4ci7gixXJprrFpQZr8N1H3DKoBSj6",
  "key14": "27tnJUqM5dGfErpSyTPKKJ4NDW3opqg6gn2HxwA8sqhPyQrNAVmLhKRiRuedDF4hEBVTFknNgb11kx5AQsdNm4DM",
  "key15": "4ZfDVAUXSaNLGnEPDQE8tyhzqY9ZTQTGRk2y3Yco65jrKHChyZRrVePu2cYy72fiiATKzkj6DByV16bSA5Pnyv57",
  "key16": "PLqTgtLhJXuwt4D3FVgEFvnQHXcTj8vzP9zosoiVFn1qzR3XqMo7ZPV4M6vhfXy1KWfJxsvE5bFJxo6XmsbpsCt",
  "key17": "2BAbHvo6eN5Kt9o2DcMnqnRYsTRY1v3EX4ziT7dFJJE9pBw1M3FL23sWsaFTT8kxasYHJAKQRE3NXn2N9bVktJeR",
  "key18": "56Gs71UXEUqQMtAKvN6Jd6PT5kGMYNKM7UgnBjmZRMQWV559euxidQqsoh9KVogg6fMNMdSevJJvyLDWfjgxx5GS",
  "key19": "5RibwQ9H2kWXbyggHzdsxQzuQrrJNt7ckihCEJPbH5LxztUbkNBadRioApLFEt695xMnraCVQFGqGuiT2o8sfGBA",
  "key20": "4zWo9EPvkXGpLf4MokKaKQDsd7cpN8yQRRiaRjLiueeYgAdSxxfe4LXbvmaUQpoz28UgaxXvy5qPBJoeuqFdDF57",
  "key21": "XxdfDFLdokKEAUYiEcGNSRjXC8c4cp14kbbxMN3gkL4Eunp1F6RyJTrW8MAN9e7hm322DPhF9S7THoJgMF2eh9Q",
  "key22": "2SGZEJDqRWSVZR7ieyYReW2mc8ei7jxzSTdLWHEvTMLZXvhPWZVEB3x8H7bdEwzZ3d2oUpB2BeXq7wQBQ4hhmsNS",
  "key23": "3S37xEJyEwh5jg1u9FNeep7aBN5jAMpDYQ8TkCU3PFQkDPtCpmnFrVQivN2qLXkjvuH75pFBR5Lv6AYGKDUcc4R9",
  "key24": "hkVQiws5LHVJ4pbj48DjFFQW6vcFLJqCsyKPxw9pHkaZH2JA3oCM3VZTuXSAheQxdVHguErWmXCjAoHfj2FoTd9",
  "key25": "5DpqXcXfvNdZ9t3R6n9bruV1fRbX5W7zdtB6PfsXZgdTp1h2jFtsNTasHetzBkfctAgbJ6VacJgNSeH9rxg19VJZ",
  "key26": "2nMeaCFvA4ct751eN513tqm9RayTckw6oQJdRZ5Cmt9zhPrLXSNYiaHPzvzAL5BRw7G79RXih7qkdod5nJFMqPpk",
  "key27": "3qGySJJfSfwoiefx3CFyKCbM2iJBjFf3JL45eaR4fkPicNYaVha6aUnFHjqABU5TiWSiJxwaLmvuTJ4Xnsg7kzMW",
  "key28": "56JqbHnbX66XKx5od6FPprGLbCPF4JRcAUjdwnccAzyp7SbD18KVEgzx3qzQLACffkfssQYEffsCY8vNoezRo2cD",
  "key29": "3gLaprxuU7DF4514nMFEHxf1dLsV6xgyB6VrN3yZoDxjsi8jVjJDinoW2HPPUuagLRscHePrLxWaNkTsCkQkJV1H",
  "key30": "43UKuM5zYr9bD2prnNRsABLDasCYfCFAUwYdDY39py7Zt6h73BJvNhCNG3KixJKozv7iNt7ZPbiiU5dG6phJdPEE",
  "key31": "2cc1mPBPcxHyxjrgBo5EL7Rk3XhsmuboFLAybHSbFoA5vuS2dx4dHUMRMb3TQsF49B3CszpM8jRqJiLgoQqJMFR4",
  "key32": "5JZf1CuqRCShm59ic5TJymfaNvU6n7G96TZ78JcRfyE6QfeKrk88yka5q9dGWDJwFVHPjVdfneXwm4nv2CvvRcrQ",
  "key33": "DGdrL8VpYzFrYJRNFLJVERvvfq6VY2aYD1F6y73JWXtSuZvciNBVgfocuYxR22CF6eytkK5YJ9hFYtVuUJg3SgC",
  "key34": "5iNJaCGGXAQjDZvFjwnWQ4ijSBi4cf18AfJDXCSezFszsYZKDtbMfuh3ztxEj4d7nENSjSKNNX4ewzurXuSkfe1G",
  "key35": "66bApCBqnUf182BMjLY3qP7CLtnkKEe8T341idFd87fJ1T5Amos3hTvXM477xrpwjrSF6JG5n9WjKJ16z67x5Wsj",
  "key36": "4QCBubnkQ39KFkEfcn8nhjXKWmsMfX8nNA2noMAnK3SWb8yUJrQY51b5t5f7t2xTccAaTKyd4arf3tJ78pWzG98h"
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
