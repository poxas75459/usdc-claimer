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
    "2ck68vFSkqVUVHqVfXMZg4UAeJJYSxN7KF9AZSXa8DC83Hp8Y927ooUcEF6jXnXJYJ6gYkh9Cnx9rG8TzWPMctE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qGmnMH6Zxy9gMD7kshTb7MToU95tVDkgMVx1RHGYub5SCM9kksmVvbwdTz1QsqqEuqpjXJia9jWS4r1fUhJAizi",
  "key1": "26Ut4zCyGWsLLca3Bo2WYW5dXfGKwmVQhnzWx77JEnrChCzmB1gBXW5MAYzkfso9o8QTPCBVb8RaqmcvmirvPqaY",
  "key2": "3nGpK3JZWH8KXMVReqZ4duRWQKH9VYsBtKGe1jzEB2WWA2VPuR6RSrVtvcRwYqLGoonMkbkPWuiQTMu7H8z9ahNh",
  "key3": "3PfT6oNwmum8isFvUaWmnGybhgQG77b9newipBrX5ww9xaUiJGpXPkgZrDXPkTiyfpjGVSXxCd1sYHe1uV96xLGP",
  "key4": "rdPF59d9WrSdEtWBXnhw18PBRAgMNPQZj4XP112hMkKqXcyg7v6wSs5CHHw7NGzZoBZb88UNZAWccjxyiuAb4Q1",
  "key5": "5X7gaUE8W7MHCb34DUAiXMmQ9gZc2WdUYsdAM4Yqs5wPNeER8scYB1BVzSpie8SP6HeyzvAWS5GcDwFzBUD9fapn",
  "key6": "44zxAiBLwTnn9bQ8bL3wxPj1kqgLnErjjL64EVdDRrNukkfUvMvDtyvCptzs4uUaDpBJWBVVb9cmtKH4tdGKbFy3",
  "key7": "4dEcwr7xtsq4dQRp1nyMBswxDk5Eb1JCXCfVypornXQa7V7VQ3eqMSSs755mKCkhZX4Roc9urhobznayo2Q5mTP9",
  "key8": "47MZurEzgxtVcPLsQGuta5WjtFPRZJBn6Yw85BZUhcx5gR8TZoreEPQypje2hjhKJDP8CRCGfdrroHw4BSTZAUeT",
  "key9": "4z9NVB4FpYsmGfk3ekbHDPFh46ds9U5Lu5oERbjBk9hVohkFA7CyR9c36jwfTH1Gj4LR2TNcDh51YxsB64WyZytN",
  "key10": "57fuiBUppFNXD18BvCojNZw7LgSLuQDM2L9pGVNjDbk1uz8awRcjnhmjwyPNXqXHXZNTYUzDh6hp62RKktXJ4arC",
  "key11": "5BnHEG917uc3YgtkXYoroDUaUCKjMN3FvAuErj5eoUzhUe9ZN48673LAg6wSx9S3sNwfxbdfQfmbAxMWwCZMpSAo",
  "key12": "2C2MrLJ8gbawEKRpPHBFCf5DGkCXCk6MckM89Q7saNrk4QELzGVeDM4nreSuDrGS9w9W4xvWrSbYoSoCrjXRRKMB",
  "key13": "4HHeKpA4mRDT1JXetr9K83bqo8tL57GG5m9CdMJhsvrgXna8r7oMbAzyGm9P1wgPjd65BGWHbPyonziv1tCH9qiE",
  "key14": "4z37cspTdQg3tCoex5xm7eRwwHistjRJMvyjZFCa21cF64oso3j8FtNgbmDsqkPKfktdizy86qxvS7SduxYYfWUh",
  "key15": "5HXUtqnaD5VSU6xfGs5NfeFZRz6syg9XKxhHkgT5Fb1gYYGqqhLLbv5xbKrULZa5QKYfmYaWFuxB9v5Qj3eHUSBC",
  "key16": "3msWQsgg1PiNgk16ZUziN5yzBJEzLFfSXqn8XQfH5XpYQEwt2PGQzioYL4vJ2qvgNNWWeTsMJMPCSyvwWdw3RYJs",
  "key17": "5yUFiE9V6SJkk2jGVhvMcwn3EZzYmsuafRz5nttYAxF9F9zicqMRvKNo3enLmWJwqzjNfdvewzocWWLwZXNE3cZ2",
  "key18": "63yqJbugJhqvLqBHeUFkZnZJv1erR7JmMt79L13B4n1SH1JnX8E2mkAVjTcVhqPrzok7V36T3j9fxV11HH6D32tE",
  "key19": "27R4GaHjoopthwMoWmCGXkyyMuPzmok9pYfu7GMApHfDfgJUDq9L3hyeC6onP7UoFjFeZXSyq7k2iRGeKkffXTFq",
  "key20": "49MxRTCRw5ZjW6VWfGeg3XDuXjFmU3uvA9j5kLsKWTwqQuXtYvtxQdEK4nDAfsSNimgKDyBZMuEzXuZFirVVG372",
  "key21": "2mkwBWGrqNdfYhQSamBhssdXLf6srJb7ZBegyAcZSGbRq5pKfMKEqXqCBhqUMrfMuXVASFSrzMnwCaL5miuJNWgM",
  "key22": "3MeaJzJbDydYXxWPinBNBnLuF8wJCvZMGvLXwxXjfdjuNSbSjgVNtZiveYKUHa2yVHBky9BUKJSaPfPPzrTF7bT9",
  "key23": "5MqFbTy7Bgmh8mGDq43rdwddfu9VJBfac85sY92BbJs5v4zbv3izvYRarAHnLBhfoVcz6WEXSRmGYwHXAqpZSeCC",
  "key24": "5hJBNbcAsmd2KVHCUyzK1LiDv8aY7yXxr42ssV6JCqLpVWmsrJBCD5mbC2YNzjWcM1jMPSXiGQHRkdFDFtuXZymH",
  "key25": "3DLMiwYt3iFmcRKTEikDTQ5fNEtbAcTYKkuXxEqBcLthMbM5xq58qYjuSqQKDZADCF4Eq2VeJomqZzmsELY912pi",
  "key26": "VMQjMu63NdMT8ZdpcXAksJHTYHJvtPBc8VCiQaMmxWHfMmkSrE7pqoFRR5PfSZiCzLj8ubnGheLQQhXJWvq6Wmx",
  "key27": "32damuUCinni1dVPP4ePRLuzWJApmeWRa8oY7Fy3kP1yaALQh61GWkxdB8YNnPcP37MZoBTrH6g6w4x4mAV14vMF",
  "key28": "4LdkuSymbNaDB5irg811Sj1sz96fdnnA8JQFrzDnceXgfk2uV7rjHk2FJcTUL6MhcyqSZrWDEad7aNuJRCFyTbsy",
  "key29": "3DuCw8B8DurJSAvaUZDBc65kDeiybqBT1pLZ3V16dpC5jY2qtNU7Uy7XZZjpvTthCgXNSmZHyhhRdV9WfBi2uTjx",
  "key30": "4xoZnrKbfUeKsDborvfpyeZuQSgsvxuMbPrgiBLZczVGmvpscoHHAymgYtaJZdj8fpXHEVMgaRGFoAdfHJ6SzouP",
  "key31": "3V9TB8wvGc1auyFnyBkL3cSyaDEhDgjXodjBFQU9DktE3TVT56Ystq6VcepETieS34VCd8U7PHYdqLDv12niuFs4",
  "key32": "4TvcRMRAWgbYF4PaoT48fWYn2KM1HSZxz2kphdAv5UpDvSCEFrs9Rf3Vr55CpfTvAwSmgGz7VUspQYc3E1JvzMf8",
  "key33": "3pfCvMN5SRJzfMmYvc6R7ATT7vSXS1A2TViY9RKK7urx8tEayUFcu2fUVCM6nyVuiar8RiepkRHoPDpvahVXzKro"
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
