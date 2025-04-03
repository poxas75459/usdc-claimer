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
    "32LbS2HBknv64SVq1fcPTaUUTr5jWCPiSgDzkhYqnb682yJbyweNYVm92EuviVThcmE1BrmDn93WDA2niwwKCtEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ebycn4hARHwbnhuS3LEsEQSUfDZGs2dp6zNJJ4Ppwvi5GbDG7AVKLdr6zYUGexRZ2qdiup2i7zbvQAASBfFEVpr",
  "key1": "5qgq5XtCLURccoYBy8X7qjaqhn59uCgehHXCBJLTrv3cYok4mh8M9YMGtQ9Pj7GjCFogapd73E7JYrtaUmwhhtjm",
  "key2": "5HjU126bnCrnpGZCNKWiz89HJC19Jk5X2yXyeDKKyKevCrsMQMSTYVHwUhKkg8ndUR7PnqvM5dMX454U3AVHd5ft",
  "key3": "3gRxsK7AZRUkeeMMXt4dquGRtqxq72EFJA2PZ6ov48qiD6NB5otRiwa8QfKUUjdumTTcX96pbAbTSn94Rrey2Uqc",
  "key4": "4y8L9Deun37GJR9g9bpAxALvhPEbXvxP3Sp4ssFFiCPBTm1bivzeqbJM2vrLnCSLkarWiUcHSLkbzAJCPnKWrM8o",
  "key5": "vpiK3kKa6UbfPc9BTxaGcMj9vTBwer1LwGd4wUmYXUSM4xRmp2MrYS3JvZUdeByXndtZkoxachZAJbLYwgufhyy",
  "key6": "4TRfN8hrW4Sm9bieEZ99Bdwgc5TAa5D4c2i4RLhyauRF8fT8dvYeF6jLp1MWGuvfqjgXKboSrGCvcBpBRSqihWWD",
  "key7": "5AXQxkrSZ9BJgNqtxFe1DWwkFQQYC6WgPvqgcBpLsfribFPd1ruNd6VB5wamaUvdBkFbnNEGZJx1cs3wTuJMvqz4",
  "key8": "3GnobCsxkPtEMegYJfTpe9qrW6T8JLZSfd41DedFuBHup53TtdawZTmWasa4aJxyZRyNijcQ2o5TqKb1CSv75BVQ",
  "key9": "3Uobt2NNfvjGHotqcMnboao66V27SR1mQAYg8eaoDCghr7hDwBhuU7NBrsqadNB2g1feqZDjVmxkKK1vFFkDTE1n",
  "key10": "3datFyQ9RVsNAvMqy4CuKeSfdmXaitKStyYoJgmxCkzDVDLPMcCu8rv3aMu9PG3SRQJX8v1iThwEA8s68wCcz6pK",
  "key11": "TyMiw4SpJ8jbbNpuKjc3jJ4Fyp12Z1hFjtYD6rnC25k4g42GZnQM7M8oAAnbkN5G3EKXXZkZfq9Js14pJPDvwtj",
  "key12": "3WttApasHMDX8NuZp85yvvkhYs8a18YmBUvjgXDTavnwJaRFYQxi4HWa57FmapDp72BMXNptfMmNq9H8UYRwhBDP",
  "key13": "4zoGqkkdh5wkxQA639rhSsuUDiUyLK4HGdbYKghcUMc1Tb3EQYM3dngPiC6mJiJTsfK45WNWmgtqiZ5ZJApPqzdt",
  "key14": "4pUjR5b8JpBNHcDNEZWdFAcrUAp6WxuWP648tVdq24GbZMBXj4CXPGgPbz123qNJQ8zAmEMJedaPSEkDt2RPkBDk",
  "key15": "22zG9Pkk7JB25CATpUKtyFthm2Ycat1jbsheCy3cev38aCErTqCPFP9UKBZKBJwjCGcUXrWuqx8A35zWkFGvK1K1",
  "key16": "5pMgkt9YFAGiDVo18XQh62Z4D34D72SW7vcFGBjztdVj5jBqrepGsbjSbMUs2kvr9A1xjBxBUqiLKxRbHCXJHuBs",
  "key17": "3p7ajiE8ktCtqqW7anfsoWViQf1Bej88Hw1XDb6khRjiC5W96aDPx5uY7wuY7aez2Q92SFyDBnfJTmPv1d3XhMho",
  "key18": "MRRtpnkEPpqUZhm82QojehiELeCfKVjSm9go8E3fmZ4eJuCXBD5T2gsh9X8BvgbjWNJp3WM7CgtNtCSEQq98crz",
  "key19": "38JxYi5h7iqxr9XusitsbSELjL9wogWtmTXhhMbKh82T3E6BzAMc4g5pCivixiYpsKXigRqLE1iRi3BfpKDnZ89J",
  "key20": "44ymeVnwiCpzH5uSeRUnZTuaZ2NHKpaCjeVm1EaQz7at1U442UMrfNkqvy8HiPbo9Z6V9ieTdM7Sw9pg2NRHqRpd",
  "key21": "2mcvnxa94aBZuGR5MmXyhNHZJGDrqpsaxHvcop9tnoWMdKuAnx8F14aKmGG31K74rAbyUGuVYH7uDadrLrSPdXNk",
  "key22": "Rd1ZnGti6mz8uPKgqz4eqJLWuYhp4pe1X3f6ZguqTke14aRYBPJG1wDZSx2s8VQTkf9LNQLqE98gfdJR3NEejpi",
  "key23": "655LCYV7E6rDaDy7GYxx7RtrFaG6GaugaaprfJbzChkVnsUS1dTWaH6C4J6eRHFEWPiEYG9iGEqFPUZVXt7AymYw",
  "key24": "2Ym9s17EDPHKhPMvzz8PPomUcRVQuXJ8c1D5x61fb3wYLeZnwXr2Cwtef54tRTqmSF6ooSpJDK3NhHg4is92j9ds",
  "key25": "29kzd5qBymzoXzzjKuZZo16FzenGCQWNm5MsDJ9TYHMCkL5tLiFRhCQWJAb2MzGGtNkGbHgDUnw7jKdHeyJcWXNx",
  "key26": "5QduKekzsQGJhbj8u4vy8R7gEBEJXhCFpo9t7oRh9q7fL1xoE6pbtVJ4AoV6dWNxxugnMrbaFpxk3d6CFfK1PX5A",
  "key27": "251SLXPzdZdFqhpieRjZNn74s3fKcS9xWQdEVZLuDDePUFVe6G3TpsRGkjwcYMMZ2NgAQCxhGV2VJrdyg29k6Ryp",
  "key28": "3u5oG9WidFs8mcEZbHwoaanFtNXk63SuxCScqtpLNxpYKvP3Crat4LEXerEmez3UqzLcsnjYD8mq2D4C1R8fhucp",
  "key29": "53naaKMmACxfusmscCWh2Zhw1F75hmVymEVqNwLx7WrnYtzPc7VBtpMLUvAMVJgZXi5ziTFmoy1q9xMzCo6SN2mB",
  "key30": "63bzn5oByBamCPjKSA9P72vyJ7bstfnmhrDFeJVLYExrbowzbdvYxZggv1zfa594f9gR3mEHmZaRSjGzob6CvhvW",
  "key31": "2QqiXf3xVdJ2B2PbzYK4QDxgPgyHUtb4ATZhN7zPE1TYPTXhpLNedw8jSs2GMJQxLZDzCD5RY5MHjMP13aWDLfwt",
  "key32": "4KHvq434FwCzCrHrVpytwWAiReVgjzQAtct4Xi3fgVtHRsg3gtwLhRqY7f8S6MYtW8fk3jZgj51khQZMS1PzED6A",
  "key33": "8gzJpvR4tYfj1KMEzixSB3mRPuFdvKR5qQVP37juhPLCyf8Uax91uNRNFsNfa9Cq9FcngdcKhuRXiUkwVRAygce",
  "key34": "2ZHJzbAeGZmc1nXoGmsBhzmMusFAVkazUdx4zWUZVmJMKC5Uo47yYhcR4C7hzZPYFRi5sE5aXG7EFWeE2uqp72jX",
  "key35": "2RG3XjmvWKb4PmUHMpL3Jkpo6gvocvRJ9QuSPDPNamvjCJr5eDdWHS3zmHuFvrtXppuCftzaCddCSaCs9dL571b8",
  "key36": "2UVmGs8b6DBfdPyXhyrsZ4jqChimE6WU7M8kwanoPkbphQkLqZuXbXtF4T3BvK6mVpQ1Efd7mYWXgUYKvXNDUJ87",
  "key37": "3QCLeb46ixbLnH8dVdPim9amzfXH8ye4DeP3czTRr86FgHVYzsrtd1WYrCesv5mEUAjNxxMLgpsZT7AFBcDD5TkK",
  "key38": "2Hb82qAXp7UgeGsXJyv1NWsxpJA8xo1GwhheUPZwffutzyDhZgCkCirM7pEvsxsCTiLnawVqsTjZmCgmBsWuxoEY",
  "key39": "3aE8NgbToHbS6x6V2NZdWXgmAw6R4Hhfbx4FDypjjwdXQRJQTLhAxm6x7fEnfg56pgTSZNwJXX7D5yf4GFkERsAt",
  "key40": "iNGJ3KzfzqTmoKJV7UsyePQuyDymLahag5yAGXzGmYtkomHoJCnzooRFogUvdjdrPrEyZYQjwrjVmy5cDs8weio",
  "key41": "4CaJmvkyJm5EDRRMLkFhW9RiZxagYqPEDSSKNKAkiqMKsX1MazVWCjXs7covxiZMxZ7VDWtK4fYoBZzFqR91Lf1y",
  "key42": "4DsuJ3CBWBg9Z54HEDBbAkyjP8grTdC8ixbk23L1MirnbGKKr4N42dbR4ZtZySp5mNgKAJrk9YB1qeemxdufi85c",
  "key43": "5G5b4rxHoNSB2et9DYYvw2rfuBdkK2qan3TMA3TYg1TT6B5L7TnGnCx7QWMC5Gtv9QDuHAWwabRgZbh3EscWMY3u",
  "key44": "4ULpo6C9QZCpq6U6UuxDpYF9Rtqzz7b7RanAvx5gBwUTj4fTKT4SnDTSR1H7qs8yz4EhFNr6W27MCE76dH5imnQH",
  "key45": "3tcPxkP9CMHJAyM8hRGBK1zRqq2Ea8p2u7Y22aYWhXhSh2zmvuF5ux3HaiR6gAgfRcac2eramcabFSxSmodfsbs1",
  "key46": "3hDSv68761pjwaRCZ2rH8Rm5htawtY82zPFTopUK5e6TUfEPbqWsZgGEqjbU8s6eq69Pp3qNhBn56pi2X9t3gLRC"
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
