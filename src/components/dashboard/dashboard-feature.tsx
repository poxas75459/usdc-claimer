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
    "5N69MgJmtG9JKZb3m1FwzuHpTmzZHtnm9Xyst2eKbAjPaUWB2d8yAztSjQvbJPRMQq33PTkJkXqndL38aK7YsZMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47hqpAS9wk2xieBdDHXcx1muMPFDnby4MxKNFuCWKoRsgNiq5rizkDs8VeyQjUbAC1vVYsZtuNFh3Eus6uDQ3Hj2",
  "key1": "5juNaJyFgsLvTWcFq1TGUDxjkGzCHJu7SeD4TYa6P1WSofSb1WsNocvpWQRNBQackzKRXnjSNuMC77mFo7xJuwQS",
  "key2": "2gjDrRLuQdpsdBNkoALUVXpyJ85Tews7q73F7K8h4AToXdaPYkZiuDRuhkW6YWHE8SnDdDszQH9KzGy42bNEqBax",
  "key3": "5cKX5qxEcMT9HVST8rvGitfGAmwMhtSWhHiHW1sEsoVUaARPVqC8Er26DydGweF77XquYjuGipVeDCPkAv7qpjxs",
  "key4": "2Z81WbWHM8mZUYLyy8kj6qRrEW3gqSmUsG3ePyegpBLPy2x8rsxiSGTizBrQHM5o9qkiKsmWoUjNrEnQbU8NE6KM",
  "key5": "3h96UpSRZFU1rJnYFuQKVZYuf6PRia9CbNvp8TH6Y9cZ3fhm6HKdsS1J1v5vDhAzDxcadsLwLzj2yLkwYE5KSEuc",
  "key6": "5fNrpaLBfgVRg52C2eCPjfbu7i8ZnK4LBjDxsXYtPTfEaCh4HZih7wShU8hoaAM4KPJqAoFTnPVbxb1Cw2bSL6rG",
  "key7": "3dYh1SQYDDJ5RsAg35bYKGgCak2KkxYh4yZD3CA5WWExdAbSPLyeDeXGQapbAgSiZVCQhjtDXifGR8nyer5VDLNa",
  "key8": "2dRewXUemEg5nHFPSyLq2FWv1HZ8NaiwsMGE2VmohhJdVLaMgFKLiHUXPqxMDqaMhwvEzHY826u5CnJJ319UKQ36",
  "key9": "5xE6AmUCXqtj2xuBgNuPxPG5iwny4z3GFhQajgezD1jiag7qwLatHSBmfPoZyoVbSt1NSB8Z81NfMURV8mU2MQw7",
  "key10": "6FWptuCGb5ZM7PSE62L7HcQ9GiLtRDumPf3aALY7ryFdRpj2AHnTmDaSuLVW1rgTGUy6HszoYTRp8knLAZEkauY",
  "key11": "QRU5SdDQbLgxTdmPMNCougPfRxWAdvzQxPFoEtqmqggPQXjXJ1s25eXqAA4dku8xGa76eo5bpMmFsNgksPGgS1h",
  "key12": "4RMBKnTgrziXnb2Cibbjsk6djwxqQoyhGHGqGPPqTsqryBzZptW2CKT8SxvcEVUfvn5Fiug4py2Fv5y9rQWVDYd6",
  "key13": "mPKS3hUEgMEsZfpCbGZVFG3mqf8VUtpgiBkour1Xn3QJFJopKTQ9Rw3RG793qmgFN9yxJBLTrSXp7cfahxkM6g3",
  "key14": "47itqdeZUfJkrEsSMFEtfnnX7iyyX4MNupY9qjedwZZXHU1kzFiGfacnVuPKqUw3qHtbonjNXsFPET28LZUUtCdp",
  "key15": "5DeN1FLkTVSbTg3jQK6NWzUnwhF6K36RdhPqGZR76Xi6AZHHbnjS4E7wLweeQJqLc7Q6tQfHtqBqrAx6nNsyKrf6",
  "key16": "eofRxoj82dYNNx98mgxEtQAXD7EqhF3GHQukCFYQQbXNitaAeKv2n3vMku4nEtMK5RFej3kbYM7XFFsck5qSRQo",
  "key17": "dYgvhjEfbxfXNhdmgaHRksVphqxMq3QNUrkP52hjQgntraeuZN17KwZcvdW9FEh35kXmuoDB2q1mBJDe1aMAeGh",
  "key18": "4nRVrgQtfYi2u9EqU5VqxgjyaUfM1rjEU4RfdQ6vQ9nB3TxTN6S3sdPc1HixzKsRhkQx6UYonecXMb3hEjoVt2zw",
  "key19": "oyaNTqKpLPaNGoRRfJfVYsw7pZMojm9vPCAhid7H9W2ZpCTCXHjV1TAxx1KLCTGbeQTSwdMGo41Bu3UQEtkSrBY",
  "key20": "4NWuWiZkdq1Gc2rLb2WrMGFgNEpddotUuU4vDbnabJLkg2doxEsKGJVXgKajsNFopXAo8zeq8qCwjjSGM13f6k2z",
  "key21": "7zXSw1SoLavSwrpb85MVnbvg6FbFEARwJWYjbaSh4EiRbFVokAo53z2JUzudCJzLyvsfdcoDT1d6PrVE9g5DRda",
  "key22": "VQXqNppRF64LDbGPwqAjwBsEzqm8SM4TiPkoSoZ9vvniubTCkZUMYmwZKBshhR614PGfoqTgaHDLKKZHfegp1QV",
  "key23": "57XSFt7HgPfdZPBXB9WGytSfWmCFpBJcManh7o1vfKVqzoVPw3LdXQb79huxiGaufVfnpuNw2ZZnEMj8jnmPk8LE",
  "key24": "3YV74A6AjqxasCLE6jXFf6XHWBHhXaahC7mbEKGBkPYCJTvwN78LC7hJPfhV2BS3JDd9pvVtADwPX9iRd7XJmSac",
  "key25": "2FZbsGm6gXCu2a3XA2BjpmY8uckQR7swp8xKGJcUukXLh5WwQ21LsPY21tYVhD69hk6yGHZvH43NEtpGwPa7EHX8",
  "key26": "5kapn9uN9bhfwDLdw8n1fR2cX9Taq3j4osxiwgtK93L91SwzYsDstBMaDtRZUU15GoM5sdQQ1YmhjipbCUfGQryA",
  "key27": "4FXdKUxAQYEYPVkMAiVQ9VMoz82BpXmcgA3WfquWjD63HEbHpn3KgPGPARE5Dag25RCX7TABLGEVDMQPyeNBUcaS",
  "key28": "5sC8LjvmjtczmMA3mZZfwmuMh3tbZ4ys95sj7XpF9DVp8s4hiLwmLpLxj1eGMq3ZYsMd96JuGCTh72RKfpxNXtih",
  "key29": "2jdzrqM4VHz4hpmCG4ramHXYiBTdpFfPRLaFDmjLQmCXidQc76z5PR8WpNJMgno5v4w6FNfLbVw89jsRLh37QG57",
  "key30": "47VWLGdXX8JCgaYcm1ghe1V2nT7ScZnDgQNWXxSCowmjgza6yZYM2nPTNkmPofwG5eQoKNBYJUDwatqy77xX9vWX",
  "key31": "2EZQyEYNnEaYu3r1oE94YUFinaF5wKTtyy3SWwebrDeh59FDmSucQtXk6CufsKkRp3tS5uCcqnfCBC3wQd552amG",
  "key32": "33xMNkC7WwGZZHJHJxRKSA9HpgSPvkqMEWpd1yxn98NxYcJsbqQGTnjMXvD26mo2i1MaHBf8n3bz6DajFvb6K5zX",
  "key33": "3mpM1LKDZtFyyFxvCDL2jkksGa1h5EpRwJkQmPu1tgGghzJZgUJeSfiReuUyuYwT2Xkfddt8qHH72QB2PqkGJ78C",
  "key34": "3W6tRD6JuT7rkannYKgJjuMuNaAWMuHf7MEDTA3Ukn2qJt2u4gZU7MQ8uWoaS7RYxkynxGTmHcJ5ED8hVRPUwE6s",
  "key35": "57gaD41wtaUtAz2X15zAdkcVh2XS8ht65B3zm1Y3Lh7VqPo2Sa2jo78h1Vvm9h7eVMQp86nk3XAZoDTzHfM4DoK1"
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
