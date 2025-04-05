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
    "2HNANeZAZ6BCV1C4jEm3NJMncLV92mFLZ7KSn2UQaLXjTq57vitoxyQHb6xpCm3CgpdEVjg6EFZwcK5kkrTBKWpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ymJksZnSXdVfbR9HgprSwt7N8rHpEEAZ2YJf4mgWyzBBpR6y6bZGVFYKZBLQz6CDrxyHJNoFJnCfnZL62D6dUZs",
  "key1": "4fnskyPb3uwFBJwvxMcSkzqPL2t7tcQMyWPgbjkWWjmBGmbo8bk4eF4XWApMZT8z1iEvcDD5rqtccaZeu4LxZ6qX",
  "key2": "PV51KFefX9gQjgk1jxMZfbzyASNx5QsKJDTebEgbH1QxG1uiKAy5JLqsbnQRVPkcpgmHBpS1f2TcDS3AeATHCr5",
  "key3": "64TxapGEQnzg7wjaHiD3ZfaYDvZ9jWAEGjUCGx5RxGCQHobRhEFUgor5nRnZpjiWWii56BfB3N7X4V3gCJy6d4cD",
  "key4": "SxVtRaUS4ceY4ueU8FiGy4ytjXa8qx5bikXGyZkoJy456BeMrKKfF2Uxz1rL8uWQX2QWasnthttEswEGshxyEXz",
  "key5": "2K4WeFLLPbkdhfQJmZB9u54yGxnozBua2nWFoERzmYviwyi4z255mrjUo8WtbdcmsG6fyeitaSvebgwop41N5Pj1",
  "key6": "4NSZ5a5B7tHPGkH1EkkWUeb8PBqgmsThbg63J4hZjFTzNYtcVo4gVNac4eGLcBHaFerNLdaR4svCR2tgBwbXzqYG",
  "key7": "42S1g5xVr1e92TFFBxSACNZ4YZDKkYyAWf9g6Aqwi3MzWkCE5d94BevqxPRwYCcqnH4BgU25GzJKq1SYdy1yYF5H",
  "key8": "4bP1N5TL2jR3Ao9VHETfBfjtQoAvo8E7ncaDwPWaZHEo9ZzbqsgUgNsBQZ3WZ7bhL17Ta8PJbC2dgWqhk5D5g2v9",
  "key9": "3s4XrYK2TZW16ALhdfyXvR3d2zh5X3Kzza4Po6CVEEKs2s5Qb56WEgXn7M21McAj4JLBvp6ZkBoBtEB9sEqCvk33",
  "key10": "2yrEh1ugMgJ7YtWC2XMjhNUWKS6rWx4X7GorDJyEo3QD45ZcEPBGHKVModVqQQ4HJPnTtXhAgGKvL2xADBJTbb3P",
  "key11": "5V9ddDB2LNSua4GwbBgHNSV6dbidRMrGGJKeBXZrtLFXZYvdBeAt6d2m4d5Ur8SxeDLSk1t2pkDs1P7hKCvnj8fA",
  "key12": "df9LJh79ZLMCDmY8iiV3jENEkdT8ahvXBFuM7JqmGnLafkasgEcqM7m7HWseoZHdqFSmHHWE8Gw6cPsH12Yhs9q",
  "key13": "5zxrFJwwby3rynwFq7LUGu2jsYJSTna3AGtSsPtK9m12QKPzQvk8W9ETuLdHmst9dxSUEbfJNCDezYVTtZqHMRJt",
  "key14": "5KNmjDqeKMSAT2mrwjdh9cy4mGUZQXGRqS35RavkxgrSkxarik4RwQgtbyWTz9hk73piwq9QHYihAZw4vXXgNn8P",
  "key15": "ywzhpGK89mc2uLJGZuZ1Wqm627FD5pFewm8WkNA9KYekggHsTyDsC3vr7DMLEYPTcVkAnW8MsHva6kUz6gfmriU",
  "key16": "2q7bkVnkCQiyheXYSZ73UnyyxdmPyBKRJRzeiqefgJ5iLjdqEMK5mu5o2fFpwSnSr3W2HYjP3sTcVbGZLeX4fYH8",
  "key17": "22QLFPZmkG947oecb6AoFZ1thXcPPGBB1WxisPZfA6ziKFJoggTtQmbnDfKmTvcFY7CGmcuhJQ2KhTXqR1NxtaWk",
  "key18": "3SDWDLKM9zmwaLxQcamGkWFcdjqcJbB2G1KjiWhifzFQLZAN6ZezPk1Q2qukytpzoQBdovLP6EU6LRHKqMgRM8tX",
  "key19": "47GDh2Dh9cah4t81UFAfxwi6tJuDV1R286NHeYqD5q8mpCrSiccUjvSPAtBhvpFEi1zbbb2etHTtKm47rkepBSKP",
  "key20": "2iDXNTrXgE6rxAgrqhqqtd8GCvYa32ceDo9N4xeV4bkCFpdEARqPDhb3EbMh3qEgnz7dEDK54377TH4E43u6szpw",
  "key21": "DMmPVyFhPXDkNtESsHfwU7CNhFX6MKk5b1i2nAGLRPUhdzKDK3U7VuJM9HTkzbJ8MBke6na6ik71a3LYC4MDbBx",
  "key22": "5dUQgcMwzYYQ9UfrT3uBU3Gh9mLfMuim6hxgswprtQJquVP2AiD3hU7CBDWEJc9P5BYt68yfZiUL8yK9uWPHoArF",
  "key23": "4ML5UaberGyxm8gXK75gvpy8bE1jNms2S3zpG4r1dZc44ggTSH8978VutyPYbeSeS5Nh7BPcnumfrGvSZVVayHEV",
  "key24": "5H1vHQtfg4gXFhizhxBrbWx45FgKT2x4iqAZkxvrLLvJEiwq9ATmfhqinCyZ4i9NaFWjrumYhTZztYtfoEDebH9J",
  "key25": "3EiHFnQ6kUwuej9wJjnWYcxDyTJcQecr11QgHFDf7qPDNvpn2MijzbYFVYds8W4gC7Kp9F1nYZWedGqSHR2fsxMr",
  "key26": "3EeAqC1Mv7Q7Zki5Gp9FxFKkC7XHum41h6U2vLjSNUBUfGdZEVKYB8ijaEqNKq19GXjygoeMuDcvaeqbMmaj3NPJ",
  "key27": "5zgTuwzrQiN5PZmKqH8wqpuvPDWNWWM4Vr8q2veomRjA4aSPX8dPDeeK9wN4ZwTtv3VNuetr1yKCSv7q6oSVHQMB",
  "key28": "3pyj5ktYitt7sNsYN4Jscn4VmqCSJnHjjsnV6uauxGGMBj1BDRkkKLdUZi9EwKdDT7nsGgcTFza6YETVg9EKmgRp",
  "key29": "5t2XbYUcvPzKAYMjZtbJzJ2qjdjaU8h2kgWE8zMZrFK5tLm5sSvbajYCssp2WAvitJK2MPC5TnXjwJN8wfjfQVta",
  "key30": "2ewNuWo6jphKoVvFFEA3wm3fE6Wts7pUm5caWJT4NfdhtXViYhRCixjvt6AG7uMsbea7DdY7DpwywtBmFr8JVqHz",
  "key31": "2qLzGAg4DBSMCEkZPqcVGeyk6vLB1jBup7fRc123oox7xBNLx8RWQzCouKjp7NDgwGBJN8sTidq6THHooXxUEjzH",
  "key32": "3Am9JU8GggYpBALsMbn2K2j3wtjzVfpAxGcmGMF6sfARanYR1wop8f2mEYPDswVyvHZVuFpVdY9mEFdy4kFNFF3o",
  "key33": "Rca9aS9crMWwFGrYmctxXaP7FzvMq8hxUF5iQoGVhTzfkMEoFfcnVGfZnPYLpCqpVmQUtCZ9h9EMZ14epCQf4rW",
  "key34": "3N1cucSTcru9GKhd252Rqa8VA9T9r6NUtJTFvvQZXUS28GKpUxox9gPWBD1CAhtwYZ37ecziKeMptQ59LXhrgN4Z",
  "key35": "57zoAaE3bTn4CFDV7iQSU1KuT58XYbbe3A5LDjVWFgYHSyMahGF8d7Sx6rLhxSNz23zNQb5D7rmBfN3P9WSKsv1W",
  "key36": "3oDjjDBqcrqeN6SnrHMwySnQKstHQto1CD8AQyziT61rKkX4nuTuvbSHgbwEDefqJU7Qbk5YW83Tp5vRtADriDj4",
  "key37": "2jWjB2d169HXx5wVSHAc3HdhAWghGaxRCz6xfJ6mMvFsirGCzzXYSEyTA3WKdyHEQ7boiut3N837AmUGdjHAyVfL",
  "key38": "3HEZERSiFqJTtrWNuG1VXoTdbFyCX8KFL35sTKcPCyzj7ERntbEHJGFG2nLx5j7ES2tyrNHqDXPhApq6TwfmGcdC",
  "key39": "4ctW6eAyo3jGWxr9px2RvmcThu2yjpuzQBbAHhpf15sUyidDNnUMwH3wnNvX6scbRnhf3HrFTU3KLN8MgaTeuXLQ",
  "key40": "629RJBubNVNtXtGhQQRsXYt2y1pCwqZCTLJPWykv2p5YHEUDzs1Zo8KFcFTzpMs7REQ1gwb3GfPTcEpdHXGnJHwG",
  "key41": "2FLh49Penwv1Cz6Q9fNYs48tk19FEA8PUByHfYXY4AjNiCnNKDubASjpz1N7JdBA5XbJ4T8Nkk6ZUPEVybirons7",
  "key42": "39zeByr8mxvCGvWX4pJ315hGwkSyPgLL2aH5A4yXwFP2uLcNKSx71afp9gN8PFw3Mrb2bbG7y16rtoRcPZUr4KNV",
  "key43": "4GRXkSB37LwGUihsoit3Xxj15gdmFYamKjn7sKLnX1zd7yWYFLGmC94umUiy1TN3hYeqbMx7ThXm8cFF1K1ijvwA",
  "key44": "2tRz5cZXtbP8HtfczixXDJ36sE5iLg95qfPQ7PrSgBtfdXto2CzJHDe7pV96JEvW3BDBD9BZn5Jmx3o9n4Y47179",
  "key45": "5bo94fRgrun9GxfNRqQwUMoFyk2kaHM5QRXGFZg4dr8xgHkPTBbJmmpV72qcGNevB9TzQGe3x1R4Gtnn1mH4yZ2X"
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
