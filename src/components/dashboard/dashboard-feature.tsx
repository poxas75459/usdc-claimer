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
    "383d3RPwR3djT1ZwL1TKprehaLxKXKJuMaqQMmmfYYxn9idwXPhjk6wZZHWoSHUyHw1ctArmkziA2stYWPkZ5DQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dZXex9Y3toRRLYFB5YFKpK87qUr6Pc2chewyTwKkVqZMbaBk7AFtkXXJnYE637vZFvEBiydhd54PjSt82K8bxQf",
  "key1": "41pdU9VjecocVcpogD8yGFYUJ2s7zbcyiqXUTortRbEAPoqKzD3qv4L9FNGpaCNChZ1x3guEcegKJr7vNueMdxc9",
  "key2": "61ECWEcGnhntEvq7w94q52uaJLwgamQ75PxbNpdndCtjdLPzV1PZLUNbyCgKAPqNsfacbsThrsY42b4WzEKLkN63",
  "key3": "22X4s2h3ozn4DC531uj7Sdxk1cT1VxtYDK7qLM4A1mVB4iYpeQ1K23TqMAsG1wYtesYyPcfEvBY7Enp1UAk1Fzxi",
  "key4": "LRFWmkRbDTJjkxfe6isVCaUHHhYRuuvwfjs8jw41LJKMJGPMs7NmvANv27x7KdNZESGgkj9rnksKafo7WjvrVxY",
  "key5": "3LXtPy54L91C8Fz2sVDXzP2Dpmm3851u48GrWk2DRkQjpStKEWbHpYKyWtf4r4EAeimDp1vhGZ8VuCw68kEB4xmG",
  "key6": "FDnNq5k8UAJTMHAdK9Ly2xtDd83KuNkX8AGWFSGAogLK4e8kveaM9Sua7RtuANRdSUDwsupyPp2XYuUJ6HCYo9a",
  "key7": "3KqKL8jMxRzqaHksqZqPAzA25wSdzjHwrStuyi7HkavaMuFjGswG9ui1dajn4SarrHZmMJT59MeCn2oma1mfrMsi",
  "key8": "NzfvwWwFtXZNops4zWQ13E6naVx8RVMEkkopzXGwYA6NU5P4a2UaxbwYkW7QKuWFTp58q7hHgLpmCeRcQhK5aCM",
  "key9": "34LDMGPXVR1DhHDNzDFJy2HMPutuhSDkmdWkeCwXoE4vkBgEkkqBMjZCs3h1ww9qrppreNwxKxnWij9PQtJFJXpr",
  "key10": "2crEzEuGSxYRBRGaRyeyuejeeRBdtmVkW1wvnVp4oRpR2V9FTbbwhCiphX3oWsDXX4rtWHf7UXiSh8eFdBMUp6aV",
  "key11": "2WFqhj9WKDn9v7p6Batsg6n4oSQ4Y4FC89wU6FVqoZ8qUoU65JwqMPvQpVGuSqW36NhRNZoaGMvkWB3nfh8yJKnf",
  "key12": "4rnmLWzcpSQPAkXFjSRS9L1GAj6obF1eqyjWDab7oaEgCyVSidFWYemdyiySrwPMZ1jpUf9p8M3Cvubzt24vyxUE",
  "key13": "2pyHiKGWhSL6x9dC24sSK9vtLcW2fnvy58QgAhS8Y6VbsxAkgEz6WFrPimHnwCStWdp16rDesgfwRz2eA4srDxev",
  "key14": "3q3vcjYxwmxqP4c2juN4mGhC4Mck7BXXmoxUU4pcaXUDcJ1VZYB2jofHYYFgVFtQCukqyssHCRy3evqnwgex1tUb",
  "key15": "6cCUXQQPWJhEsrkxU4G3QNJWdQVoNiVG27FQc5FEJoftYouPp84TfzQoytoQwituEsmDkSPRdvXYdtF9DQ9qrih",
  "key16": "2ZfRVjuPaTUF6Lh7eM8q4tWQh7FnLS3Y3tR3qgdedMuFPwteSAZAxYGdK26xYQhS1xwmVKCpBJRv25kWXQFqe9xG",
  "key17": "so8JTvHNuz9wSveLKjCVZs6gcBEbVUJH5BnMT2FEAHv62fAmycc9B92ZtvavSr6r1NTTmo5YjHYNCRoLdgJZVxc",
  "key18": "4y5SEJLTcGafku2SboHwpRRpcrkga2MVtecnGAJg9FnL8DuZ6dg2LhUmPGFh2AMZsVKQg1QdBX861zUAgcLuAKam",
  "key19": "5sqyPpJmMHsnj1CTioD4v8XD1St7i4vEkNQ5ThxrF3McToqYDSbfvT8NcQ2TSbFn66LiSy4PZbtzohuFfhC95eQF",
  "key20": "58ckZ1rRnUViv3BGJZnJHgZ9Qpm8WvCpuKbDvbP5aqzHvoJgFWVnkYRQkejhtWFWtFqKSa2fXzjQmD48T4zhXSMe",
  "key21": "4mqBkSnWGJVdfbnj76wfg32WT1AQx7r6RzzmRRLy45SUBWaBK6WShSA95TkWdinaZzEkRhmN7qjaqaiMC1Xa6GA3",
  "key22": "353XvrRBg1nZ4Rs2fPsrALDpboJ27vMtLcvaYcQdTPAW4BBKvSD6FQBvYzF7PUbjS1jBh2gFs4WVooZ75diWij1D",
  "key23": "4EnmFyhJgKnexG9s7GEaQp4tokaxPVpFeHmobqD8pEczNXpygkhma4ZeEzn7BZYKSbnoh4g2Qeya3qRWE3hULMpS",
  "key24": "4yqwfTA1i2eJqwnqSYuHMVeGi27GzwRG93PsjX6qxg5jZ2GmUdDF8BwHgDThjWjg538RfmafRe5ZxyB6bK1X5Y4k",
  "key25": "3e6P2gkGUjykv5ZCoaYD8WuqhoCPaxMXU9Hz5t1wDSnx1UtP51kq2uYRbKFcdfCxTTfuSH9agu4EhcuuCzBC48Uy",
  "key26": "3UMEPzpc38mbNuou53BuUwnKqn8Zu9jwGEvhteKBxWVHrbhuNNcAyyyETbXkL74h39DmBSqTqidTpn2jCe6s4Y4L",
  "key27": "2uB431iYnFotRi9b468uRo8RiqvYNda8WE7gdm3dDeSrZ1xcCc124mg6qMFzBRkWe2C2D5FejyN3Dcs21XMyy8GT",
  "key28": "5jNNqEoXLcgzYhZzLyi1DEA2woyHypQSuMUhYgyaT2wXdenqkMkCfxuXiqDwSosqhjU6fD9iWAJzMS5YngMvukK2"
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
