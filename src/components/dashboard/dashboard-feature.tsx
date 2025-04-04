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
    "3yzkfZhtSxEKy8npCzhuw6WqkGBC1U4UQZLZuG7YKa5XzicyGJipGBe4m9BZR2wDk2hUWoWumyZNbQ6ASusDj2zN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MyNa1UE3Ej3yDsszNG5VGrciGboqvuhmsu9rpLaPi7FF8uh7hy3aKAWNDhxmHvwdCJBgMVTmRnucYpSjbhhyxBt",
  "key1": "58To4s5cc39fUDdqvkKg5vTNkdFuEWyRyuBz1JxGHhshGeadydFXxRKg9gFJdndPALXPqyPm3r5CAW1pe98x3YKA",
  "key2": "3qHKnSwnGVRPysJ2SyWxK4zWYxJCDWU1Que9hYrs19cWFY5EbENxbK2umAdLrt69atmcTqydeAATZEfYt8NgfwkP",
  "key3": "5L7nN6rG2ce9Lx8KFwDEeCNCz3k2cvepa6ov9H1G5h6LKYxTrGjBnHVs74CQL7p42d5hYTt1URgnJUcKtoXrb6eT",
  "key4": "5CSDu7b6N8U4RdvgPyfhaW6oxUF1ixNrAu78iTYGQJSViA9KiThFKmZDrccZUFD1B37WaCvZpGok7ikAtFvXczK1",
  "key5": "5QgLsCTZcTyh1fTpFvu96HJRRxjhUAKmi1Dz6TdN9H4MT74ZKJ89QfgfJJZxKYmNMKwn5pPpJJNj2KZ9Ga6arzWh",
  "key6": "TobnYRs87tRWEd3vMysnZRQ2fRRL8DJYfS5BBAjPb53D2eEzGLVr6v9hiyURLwLwrxTHiK5QmbfokvUsGRvmRZi",
  "key7": "3UAniLSUnMzKUrN4NFGyp7B3121CqoxdExrvAUfyBij58GRr1GG5MLQQsnFzTtdkfG7rCLNRePEg67XACGmVceYm",
  "key8": "2s6PqAwVzwfxJvpnokgJft7sVduCMe2NCSYxG4rXiy4ZgH5vhax1RjXijCKe83dqpvYDbCkQWCi91KiPhD1MmtCQ",
  "key9": "Qm3SgcV5z5UdByhPrgmdfNizk9EGHet45fFCjLB9yiV4xiCTt1veX8d9gz6q1gNzH5zmY14NSa5bDEvWy6F2sbH",
  "key10": "3NrGtxL94F9fFMtkATRh3at6ALdnPyJQvLKTvFBMsxx5jW5DEazPBRDWRuorgfwDri33JG6DkfJkCCouoXoPe6Yn",
  "key11": "VaND2bXmv5dihNMgK1FXLiWCWgDWbYavU1WRCXr4YaDwQXZQJajPKsAeWuBN5CwTdCLKB5QnbB9CRbS48YLKR38",
  "key12": "5MezUebWz6Tv4hAwXBmkUXpmfuH6Jw45gairWvVSocLWfeCukgS3NRknfZacAhjdXLKNJ14wirbNctPwj1SyB9vM",
  "key13": "3wwrRsrJeMwmpc3FN6BJ9HeBoKaKntfiFzby8viiPpBSWybhpMGEGHABXC2RUakGKgrGzr8KjrmWSzyDgPewwN6h",
  "key14": "65YzcvaysBiSsbxwYUXLdxia89VDFMXthuMf8nXbcBgBYYxXi1D5aH2LBGoKtpTMHGeTV3ir6h34z6RfvGJs6J5g",
  "key15": "QCeJJ74bQL2z9zxPhh3NmdPzy6jCd81pmvL9dbP4RmdLiE5xnCcd8dxC7aaNYkRQ4gCYuy6GCq6BuHLNgAhoSUW",
  "key16": "58vnB9h6eGT7AbmhoLTEgWcA5xmCFUrNYY3SUp6rZxkgHn9Zm3hCA8xj6Ka1jgRLDCJRR7hWP63E1csyx3Knnhas",
  "key17": "3Nzenj8Fn6UpcSLEWCQ6ka1eUuu568Ss2pGDU9sayvYeyh4oavaZpqaomPairFKdAE3LEXSVGQcRRkQJDTNp7La5",
  "key18": "4AVWiSk6taa3xu7r3NVQ7FWTgz7ewxiA6VWidPn65huwJ3n9ZcQMoJVcqtQoa6k1dVtRAkN9gJe3Q1y6DbdPGEZg",
  "key19": "4PEiGgRjCAoZnAeV6GE1zC32z8uBBWgc6whyymoN8rnSQARvPVExLKviHX6sRYSVhxH9Kk8vJpi8LS3BNajUcQSN",
  "key20": "5SsovSR29C1Pwb1rzecckyZuooFgfvCEP67ExxszeEpArnaMa4oZm73suYV8XzQSJVJE552Grye8BvwdF835EJVz",
  "key21": "34ov9yot8qmZNSycq8tMQdqyafn2HjGozo7aQTVzA3nJCs4HERqszH1RbV6Wefz3LZSjWUd6JJ3jESd5fhJdGPQe",
  "key22": "5NetMZjYyuLByPJueMZMdmAXX9sSvgbY9RwPBVt4N5dLRstjrXEDddYPmATBK8163XqPpS5XjJaoJ9JbK5KbzUHU",
  "key23": "2nLSXGod6R9D5eJAsFCpQYsAsHoqqZHBjvsfFWgFw8G6oiYiQeBKvfJ7jorGEcaE6n1Bqcvq4BYop5hc7X2vT2vt",
  "key24": "2gakCZ4yp6oNRpprgKV4XVKaH3GJMxM8zNJDUrzbTnnj6bGoUg4jb9WWfR74YG64jUGo4vGYHR8hgh8yJ1DGxXii",
  "key25": "2jRXpitKyMQUQ5BGWxK4PuwXSKJLKziQGoTKw4DkKYCua1hzgqCB1bwX2Ktd9hC1JwcwC3be67i9SAtbyVU2fPq2",
  "key26": "27Bg2rveGoFdJkfENFWXLBniD2GyRKMzpG9rKhzSYhMhezUSv1HxK5W19AAm3C5MJE3VrBUTRLSULd4HjspQKt66",
  "key27": "5fsqPBCAdbzcEubLd1987AXPCk8hbRsvom2MJUMsmZvNj8BQRCPJ1TgXPAsfFb4e8ywYm6fZh2stFLsXGffz6kf",
  "key28": "3RnHwiUnEPYPwivvq9tfvogMdrmS3LGamEDDgMpqodL4uVSJPiiKio9BRA1AtSjRuV1ip8JuKZkxgz246jdcCVgv",
  "key29": "4pscenBNUxrr4hUtVuDSxKXVeLN2oEPu1N8kP8S5Hs3FzLN83X2rrcXktdteKUnLXy36xfB9daCu1T4fh1nknC1n",
  "key30": "5V17rQyyDjfGijuJCkU8saibJbDFqNAQn97LM2kE7aGTJczoZycMjnXgLQqopkJPsfQtG2vVBNwABHUiZ1ZCLbBi",
  "key31": "3dMcuu1ehnHq5aKtNsJjTZFxrMmSykxHdFTECcgammmZgnitEfK5aH8MdKxsyADtwFG1GFK41EMyLUrKmadkgULo",
  "key32": "4H5ajxuAD2qEHMsEAQSPp3ucGqfV6vkDY6gNA4ENPVGNQTivym2smFVYDHiitgHfs2s6z1irwbwDwq8Wc9e74gST",
  "key33": "4qzfZKgUf921KShQYgrRipvm42RdpxdPfZdzhQLmtGrjAEzQkYxymShVqTdLwxQVunpGh3VweXX6bep58VbnjYZ6",
  "key34": "4LNZZEwouhQssdorxbb7uqyP48fLTUoUoa7dVLiSMcCQrB58oDXtEZCWhREp3jzUbXgGVb5dpRNH5pZUXkDuzREg",
  "key35": "5GSedLABB7QQYFrTEq7KiCAJoCaHcZdnXBKDvqXgTq27S9tpqmzjfVUm9kpcuoT8x7nCNAtoo5zgL39n8bDVb28t",
  "key36": "5FifMpniucVNfekCDZ5dnv8iPRGgF6i16gAz7CRXJhsNyqcfuxk1TZ3RWtAuDjwxCcBbXpBRtbF9GTeNuMSk7cQX",
  "key37": "5gWxZakLSMiLktDtkFpfu7YagpaVQfrtMhrVG7qBigGrpjwtrVqa7Y7HD1Wk264hQtDgXkJKadb8ZHv6z5gxunuc",
  "key38": "diigWKcUV6nL4nET1MACsGSjbQCcJ43MRphqoKfQY8JGLDExsxctUBKh76akoRd7zas946KPtkxdjvXzRSDXzPb",
  "key39": "3GtUYrGCvSer6Q6LA68QgRTe85nK9isDUq1eWx1NjuroDgW1v4KGCdWrFnaqK4qBx7Qz27jua9iqBA3cpUc8i45Q",
  "key40": "2w4AnBXZKY4LoH5G9ZZNzogsDSE87i8y7jF6h2eKR7iEueCgcntGCkp2uK9AC67pm2rasKndzLEjhnTjBqU9LSLh",
  "key41": "5Tfh1VMmnm5pcpDbW462RcYJautz6ybVDyA3F1KTjSy6rrXgdvA6YakBhKV53TXLtWj8Qx6EL68dH3ij9U8KyM6J"
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
