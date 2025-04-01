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
    "5YPZpX2Ype5MJ6zBa6KKf3xrJwtxfPnBKwQ7gAh6cPdJzJPXMipqMcUStA2JwAF9zV6sYYKNfkYetERxNJ1zSdnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j2kpk33Hhz25hnd7c9BpopoBQgdU2LSBdu9WLG4cadM2ij6PxMW28tsXRKmWy1i3cXPmDPs7PK9cdVzBFxf5q89",
  "key1": "34McKA4vWPf9Sa2RqsYi65BcQjNoChd2VBpBZacQfgNvmFwar8KCUKx18PWEHCZtYEm45zGzfnGXoA5woptkDzbr",
  "key2": "L9kMRuBeK3MuMjpoHYxv7Q1n4rGUTdNwHydR8oRmFQgz1rNG9M7ZUZabi3vixMZ8H8No4q1qZhRq3CiEnjbGbzK",
  "key3": "5tDDk6osT7C6TQ4zhTAtELEM5ARWrEHnjwXhKnsLk7KWzRytwQYN2xSyAFfZ4zGp4b3M3KcqHqmYMWSrYyRWV7Ka",
  "key4": "28fc6JZ8yXyesgM1dCicR7sPcd1r98amKLHBtGSHvdYABY6W3tcuaRPQMXz89uvcrwjbUJWu1trTxJNewUWQXzCv",
  "key5": "cC7XDbXrEDoqtJr6pPUZoaaz2MGy828kqH8BVncrE2bJnM7iX3neFUJtYdD9gr5TkmiyvvZSNZQWgKAbT4AkyUA",
  "key6": "4V8MCU2eM4su4XHTpdz84YAnJ6ccK47JFsdt7dRwmjiApyLpPsqjSUB3s5Qy9prBUwFi5E6zXgfR5r7Bv7MV7LBd",
  "key7": "ELcV1hjvjKfUaeED1mNuac7epJqfZPhD66MaGEfb3Zjf81s96mGuXh352JTCSHBsigaD15uvga7TPnCghqtpig6",
  "key8": "5VsYkPiR1PDx2CGssXL7oZvk3dnxZsak2yRDsADh6f8EDNFHTNoobUjntvqTQem94qwatv9rkQ3kjz83vCBxs9aK",
  "key9": "4Wad1srrHKW7betg4TjwJRb2HsQVCbL1XULQWescQQZ7Nw4rK1C2nYSjGeTXrYQKX4N25GeuHRwv77ZxofZ3TFfA",
  "key10": "3h1FjuR73x8o5rcovbPfnE9CXthpzMbJ51KauYoxNJxh7ugoqKC1EV9Kjy71sp8bKnuGNssQLkApEUTGg2wihAvL",
  "key11": "1oa7BeHVT6fadiFw233vBkAMACfT8vywUYN4TWzYJkE1bGPKHgtB5J45hRxrwgQPGzLAt2Z5BSGfcD1Zd2qV2w",
  "key12": "vBawyns57ooc82NC2xJ8hxUCnjshtAeiuDhEQvR8MNyFKZLXx7G4AhG3UFuYDLceXposfLfeKtKtvSWUDxNQkDa",
  "key13": "32tTedRNZ2FKT5oumAGX8GtTanyBe7XayA6JDCkoSYJZcczFBJtoEa6wyABALGFijEHiivypv2vAGxnheR6jQjES",
  "key14": "5SUcQBDdWUPgt92HcGVu3ZfN5ojdCdLQ64uBhDpubd789rRga7ddDYBHcdtisrrxkPHTPXWGB5rH59ea8UspmTtB",
  "key15": "52SuSAy68eXo3pMnDcdKw92cPMjT5VsQgVRV9t5TUwTemypTLqvN5Y3mSyRcW7LHQ3mttNqmKspHiC1b9h2mx6PD",
  "key16": "5Gk5TgMqKc4RWRQSHJ55Ya98TYvxNogkkKUwjsDMaueYt1quc1unaxe9GEM7jaKZWU8kduEqcEkpTQgWuKgGNjGx",
  "key17": "3BYkeTHudhZAF1PAkew6k84CU5HWRMLRgbjWpS2vpTAapUCCWUcWMpt95hENeuc1a84XvnPs2ynhBhkUY4kjmqch",
  "key18": "2foUhfXsJbDUtqwtYVTPQkzRtQHzyzPTJrpinwiRwouSg26C8hQLNeCi6KxWPqs71dRvdpZiS2BuZ3Hw74QFfbpp",
  "key19": "434zk8dCxqEsgsZ8C1kXz4gXXEQjPvrKUTQRcUWMKMKG6vnBeSNWUEqfAsGBAuk6kVUajWXRnHfJE3HoQzwS96Za",
  "key20": "2GqjWVGFDqigCBNJVFCaixYSEm2bteQW1suAUXkouE87x7b5vpSa4k9R8dyztFEtZKaoM7FYqj6ZGEnUVxdH79jN",
  "key21": "bnyZ31aSP9kCTYbiUwvpFUegcc5859na7HxaMzo5CgVgtC42A8VxqwfcXgQoRxJjWcUbcDPK2gpXbgvto2yF1gJ",
  "key22": "3HR5Uv5e6XbBixwyXCSkcnx1wek8ecVakUTsXd7mzn5mZgT4F7BJgJsvLcAe38YbY86pXw4LJgKQHfDMEeHfi3ci",
  "key23": "3CrSj98qZxNFGTQbQYCkz5Qw1yREDNFi5gYKicTbxUSKWQ2ZydFUL5jCNMY33GEijSDJNmyptcjkZa7LNLVYx3H6",
  "key24": "52JKy5VEpPWWP1raT6oEWrdyetRhhuBoqRW1maWk5b1UvVLRDNE5o1xAmdHBd2BU7CqwXNpKtTAXLUX3TNw3bQsx",
  "key25": "4tp51m9as8NedyUMsMvEfEsUZ1G9JiZEM7coq4ASqK3UBVeoLGVYQCcUqvR8dZmi2Nywo4RjfYpmDdoz1hPgVzX5",
  "key26": "3siqEkVKTDTCxDBunFH1MTPV72BMgm4FRvEdaLhdnWLWm5kXwM5bCGDC6nXDRxbENGerabUnne8TjBXinBKSoGA5",
  "key27": "4917nXfqJ8YB99QM8MWCfp6nWkvuFPkSwvkFewfvshbdhvLt46u3qqg2i67b81JYzJDvtR6TPqM5BNVfjLJXddBB",
  "key28": "3aszT4um9SzgFuKewMoWNNw5Q85vkTHKjtxM8fiJCeApitghiyAiiPyE9ZqmmpRuoqefhKpAp39oVo58PSGK1ax3",
  "key29": "5nXTnWmJHTJaAr1hf3utsRpFmYYG5V4woagkid7kesygLzDrrvEUTifCVhnDdTf4fAuKw88gG39FEZQJWGXdTSuu",
  "key30": "5J1gjL37gUCMssQhNQ9vDyf4YvcBMPVaVsQAkhupmR61Cxye7E8yiHJJyVxgo86NdiC5HYryECLTB4SHsp7NMoQq",
  "key31": "L6qfsMPU6nbEr6GsjgcxUuqudCTXSzVtQD8myLayggH7NJ3SFQuYDT2Bpr36udxaacR2rCPexVommYskM5G2tRJ",
  "key32": "5jQJfvZdMGFXmSy1JVUDLTPiF7VT8v7CqoQtMVAhFyMYVnKJLTYP3AMTQ3oQVXRzuvvNzSNpFLgPay5yq6bPmvCY",
  "key33": "2rVyuSKG7MMmaxpzYfJwpsu3UAosdPi5BhXvGru92pYyKrkT7eghXEccvbrrb24WQ9k7hAGivZKXcSMMHwQD1QpG",
  "key34": "5UB2MVfkdYqsaYDKmcQN4V3Ke2ckC8jMHKJShvjLTAZLe65ZB67kt5a2Df5EeMx5NMehViHsFi1Bxr7HXv13gwLq",
  "key35": "bsayotdHVuAHK6u4ygdfuMujgZfrTSEPg5Ae852DkWXRLYGe5S8UDG7LqERCqgeGqdAYwrE8rHsFkgzcs8Uim9F",
  "key36": "5sgjrEBkQNWq1tvi4kF8Qi2dn96zWbQ7XPDLjVdEZqmEa6wMhPofo43AwcDyGWAxX2r2GWUxrj2EVEHQiEZWvhqZ",
  "key37": "4kff16RmY8ptK7mPEFLeFTVRF7aJUVGaxHiPaBSdyZyYcbuZoZ7jHDubZw3LXW7hGgX8sTCNwr5eCQSHwSr14CLy",
  "key38": "qhQBMeW4mp1g6uRPXvaMq4ZfGksNqS8Z4zfcsHczDq1yH6FEFF8SCDnUzWFppcE1LhuhFEBooLwctxzCerpNbU9",
  "key39": "pTkktuFaKdu5tQxGUwaZo3t945b7bsbMmsTQfpApyRE6AxqHbcDcAH9zwpL7ovAttf2wef9keQheAEBVEmDverg"
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
