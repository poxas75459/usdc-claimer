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
    "4hdgBCxP64j9z1UjyPaMfwZS9cVk3iBisuKgKEooLuevGx8oM2iHLak4oYtNAh9f6mRd6ekHy4AAPCjCeQjLatkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lz8KvTfuaX54vHmmMqAfVQSu2ribUcf7grhAHaFRCjGSLk97UGHN6zongzGHDNjkZbui3RFw5hQs9PovcEYJHw1",
  "key1": "3Pi2LrZzZT9SmqNBbcXt7kazHNEeoRVvnriqan3YzLPeYENZPjcU8LEcp9LthXuauwaJGD8iDzBs5PFW4LnuDvVJ",
  "key2": "2S51Hau2NMYg22ckgKqj5Jt7Az7ffu1oTd81Cj4N1GMUYBBvh2KAD6xZZzeCpGPhRM7eFD895mYAfhovxFYaAJmn",
  "key3": "5cTqWjJrdTRz6F4BtMsWbAMyAi9v36vEVknyqTmSLaQspQRxpcakSJ6opGrnqxv7G65BmoMKDxXe1MXVhYSWD8vb",
  "key4": "43Va7FtXytXZT3YeCGUKBKJC3X4kjjbRBLg4AhbRXt7EzppQxzsD58t2jXh8ah9RQGaHBaXBgWRZecPw56WuZKrs",
  "key5": "5vaYxmELpaTmJaxAFLc5VaA2CwFfpn1xdjMtsvb9YwR2WZrCdkFGWmddd9MBJrUBwamuaorYH9fKQz4HeBXKZDxE",
  "key6": "25T85i7jksUJvsWuRRh9pyLGaAEbEuZYhk1NdAedjkawe1BfNJkhibUG2s1KM9AXLoEdj2jb5y443rpnAP74ybSf",
  "key7": "2XSMBVp7KQu2fziJ1rNF7w1HNXDZLUm5KjEsWKWSA4nAB5mA6XSJFpTpkv36L2uWuZMYu2kke1frdCaXCEs7PbHk",
  "key8": "59BqxJtWLRAQtbfwLieKPJpeqQnJMGA8Qzu4YJCxTwKdJ2QdafX17P6UxYMaHm9mxru2sgSEniRVoEiRBUdXzZkt",
  "key9": "2pQpMtrfJE23PSoNUqWocpjwKqXH5BTx5QX5DeFBGgaho171arfPkHEhPvTUvhoKjNWVRmexwMYyT8jQ7Sec2cao",
  "key10": "4wnUpUfrtnRwZrTznvjH14sHcH1d2pAb2XcjRmQrXapppdwVc8t8aTf1rFCwUW5iohGNtG56c16fFZnJ2w5w2ABj",
  "key11": "msapUWmrABS76QQsq89Ks4nqAvPur3HLNLa84F39LEMiUGDgFBDdbvzawVz26TfXZe8w44KWQzZ4huHKFLtXBYF",
  "key12": "2hhbowXScZGLtDWkCNFaVVdrSUypTrHH5QMETD9eFSkv9QwiW5bDcPLuauopkJ1UTtfRVkTpSKbRVQNNLkcGw9vZ",
  "key13": "f4JfwmcTvarGESiiyCKenFAXxqXX7Sajvhm3BAyjZkThYA2T2xpmodrCEqmrmggSjGUJrxiUVFbajv5YsnrDQTM",
  "key14": "4M7uprXniG9KAkQsvQFa9hRput9P9h6kGLAKUdcEK5aauBr237N2qnMbuxtyGQYQn7HvTEWCLdqeEFNaThKEb3pN",
  "key15": "4s8TsastV4Jh2qLffeNPg6j745DRjN91mZfiGZ1SykvG7CH5ztR2FqYS7FwiyNx97Za8WxQ6Gze1yJagUZ3QNb6V",
  "key16": "41N2Fk7xZnRhhXGP47yXaQgC6TKfRj7FtNUxooKQyqboXVRxxQTz59zgrY5kAa1gNgDwmscC2KZcxXHi5ibtmQ1i",
  "key17": "guFeU45ApzFUsgnv7zRApKjYyQoJe493SHBLaHZSZqFVrY2HaprJxxvv9QpA3jPZhXWQb7EkHY5Yfg6zBasZtbg",
  "key18": "38nhPBsfFAAAZqVQaaP4rkjJAgfZc3gofyrXrY13cZEphTis9VB3GGTg76o5xVrw7kYYiRcebzA8ZwpSWyisZcqC",
  "key19": "4wgLCQefpW6KaDfZ6nVyYMgPzAY5LoN2twVS8N3c7t2wNJ82Rvpuqy6vtz8T6D6yPNvRQpRkT5S32wSyiEDcTbGr",
  "key20": "5yhqhLb2qrQqfoFcfNTe2tYeSZatCvB7yFNU6D37m9DmxLaXGNjj4zgAyLu4BX2XQ4MxsqTnXW5UsGNH4kjApd1D",
  "key21": "51QL8zKmJh8M35af2qzJ5t3W51FPyPbrhEsKFH8k3t9YuX3ZRNB877UURUshLbEkT4tBvZv9Pr8ZnXmCHMvsVBSv",
  "key22": "A1vJ9zyyQKR888cNaLVYK7qCUs2uqQarBaD3XhCBeSh3yWUBrxC7tJg7KpM98dgiHiwUWBQyv5d1FGAkSmTFDtt",
  "key23": "2nFu67uDVaraixJh8RrKPTdVWm8Vn1t262EBRcVNFTfrdSsaKvohQXAkerx493GJrzVVwXmMBuaj667Dsyg9XQPP",
  "key24": "6Dw2PyMeoygvuvKZo316ntTKLsHp9givywFPnowuEtC7GVL55h6j9QijxM7uSxQQVfxadQf1HBPUt1vrwDVVAnH",
  "key25": "2DLAkL527uggWpwmpeCmNMfiwaAttNMJNrFqwSJmnPqX6hyoXUu8gdTquuueBSqdH44PMKqmWJkjZjGqfUXFaJKb",
  "key26": "5oZSju3Tqd1Pn5eGw44H58ddMF4KJU1JmV13aFxGJ1HBvn4k7HsBuXVAby2D7wJ9QPRKtzP93gMm7fKHuD5PkHVK"
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
