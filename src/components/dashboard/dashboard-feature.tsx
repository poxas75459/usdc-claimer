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
    "3ZmFMQMh7J8jrBc7oGE9xqC1dHa26TC4gxiJhsxDdYGBgnzboTpt8QS71teztWxJK7h8Z1dro7gVXDAa3W3wtJjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32bHqgDnWTzgcaUey2dQ8QJRc61D6mneiNu6o6VuMgwTxMd19FfhcGdkrDdGhvNhkLwUTw8Et9qJ3pZapDW4UkqF",
  "key1": "27CmrzBKjX3LknYLpSCzwJapcwmbwp3XLj7SfvSUQkZgPPSyPEPocXwEC1rdj8YXgSvh15jVKt4wT1VPvgns4JYh",
  "key2": "65NVRxjqhB5L6nKUfReF4a5Q3Q6uRDStvEDwRUCEn8bUqM34t2s2465brcuWC77GGPxfbGdWUXnEdwD7nSdjmgbs",
  "key3": "4FPqsfxpDL27AYqmQdYJPbp8Mvw1oWw58sp7cPzURcZvnqnXQTfaWRAc7i7jyiQ5VPf4eTRqQXMw31P6PtbS5HQp",
  "key4": "3GM9pU5t4DoRApv6fm7XsYQUcfC51QWXUkk9ffBzw8ekhrUGEW6Vpbx2AaFSBvmXNW54btX269D3LLR7NjdrhzMK",
  "key5": "3CKoGxn6NFw1egqW4vbbvDR2tBK4FMSTRtKjPpKeSfL5B6V95kk7hawVw1rM9uyMx19xLJVJcSVfjG2cYZ8Dpzz6",
  "key6": "5NJF37cftFi9Cb1b1ju8tBZk4q7rf6xUHCShoT1QSTSJKRznX7LQ8TGvcDDqkKLRYHtmwePRJtLZ5FPsHPAZ9YJn",
  "key7": "4L2ywDGB2JHV3ic6Jj5Jb457RE33buvg3bNQFuDzuTEJoZvWwp2tLQ5QdNSqYukFYPXPNXA1ihqCTjXbFwBnsrpZ",
  "key8": "5hgSxxCmtDZSxXoPFqygkG6sG3TTyYnQoNe9dkwaFGDCNyHEi2PB2k9u7vSb6TNyLs1bszDLSWJNnfeccuYkZCMn",
  "key9": "2odWGVzGdpmAmBtQfoAmH6N2x22hN5F4fCMUhEkG99tcTCRwmNNR334EjYwy2T9bXrRTTiSW8CDyTDkydF7sG2tt",
  "key10": "5S9yzy3myPTYdm5qmh2NMSKg14gEgSDjchHy6RsgNR138r4oH196E3bZrJ3pupqPZdyHFeTTYgMhdfMFkvarcd9B",
  "key11": "4qukr9dgBX6TcxFWrGnz6MNZbA9Afn48h4DRYe5VSvghzGvZkeeeELfXMt48LqktqWcwX9tp2pk2Lq4Cg8f8tJao",
  "key12": "3tiyPD3FsZiy8bMurEjPr2vqtXTjxdZvFwhrASiTJMBKdPksfg29hkL11oprNCYgFBnhYahyg3AKh52FBBa9W8fV",
  "key13": "4MmnYuC6AYd1Xwxecn1KgDy6AktE3Mgx4FnVZwXpXpme7XY83o7im34wTLZMfuc18Gh3E5SvSx6kVwxmkKr7rV3G",
  "key14": "2nwiCz54LptvhZKUMieaDyQbvNQtbkT7yxorvPtzAAd6MCJhJkZvjoTbrdTU7AKqZJTkv3esQ6jwxtFAXY7gzzMQ",
  "key15": "2HFfoavZpxuoU14wZmT6rgCDMHceSNQ7irSwcApWqumjiZC6rj8CszfnNKtEue79PbjFHRqjmWqSA9FvTwiCsoqg",
  "key16": "32SyTf8z4kNfZx4y1nfMmkDVdGQRB1gqWTnThALpMPwzzDH8uqnH1Sx3umdr2uVNV2EkqpMGLAv5tJEU6v7Bpp9k",
  "key17": "58scuCyaibQgbzcVuA5JGGQ7j4i7oDmSj11oNZiRJd7hQNRq3q1fcSzZGva7C7vgWCmrNTgg2QvhY91KZDcH7BQg",
  "key18": "58bCwq2CXGhRnGvtKG8P6MGY3LHuwwSPeWzLwQ7iYRJGFZdBgPtjjoChs9vJ6F4e7FvK2jt9rGMGxkaecYEWCu3N",
  "key19": "5qbnsYX6eqe3wGwer9sG8SaEAtkXQLomYhBzVA72e6fKRxcWpcz5RP2W6xwT84b2YQWJfdgEEw2yUX9RCEnPtFux",
  "key20": "2n3SJxsEmmdY4jgjQKCte2na4LaWgEk7NWNPTGQA5Vt8DqaEnBRJARuAwryTwqKGrXAtm7gzUDaFmhCDSX2Eo2rN",
  "key21": "2rARKsxtx7Z8xDsj1h1U28MPde3GPiajFLug2wMMrjSFwoyDKkvR9nZVXJe4tqAqkD8MnsGPp6GVCDnfqVVWYoV3",
  "key22": "GzHeHSScLo7FdAy9eFroQaqjWFSEdTyPtmBBWrqs718FDx5AfgSE4Kb5JHLTFakc6UJTJAgPAgmQGEuuGzyctGU",
  "key23": "5rBgn6vRT92QPi8DoLyWaBGGGG1yrshsXRHhrx4qGSh55sg4kXGd5m8c58aFdUmi4yaNHxk3Kq2Vqk2xXm7suS9",
  "key24": "RVPmiwc7SjfDuCtKh8LHuYRSoaWEJFjdP8hV1iYAzQXjbTRYTpYeh3m62HhiUuLaGA71XCk5tYxuH6VFysyAd7q",
  "key25": "4FPhxeDMESFWmJy6hjhzFUBuD2FQDhf1Vw8BNJ9mVUesZM2yB5tvK5Z5RVpVAc1bqrv3WAHcz8dy97iRXsBdid27",
  "key26": "VmH8QwiyecuD4kSzNKLAkwJGXiUL5aX5pUht9R8fLvjXxfxkTtNAtXKkqb3aA4Wmj8jUTSGSETDdYbz7bKP6eWx",
  "key27": "4b6MC8go4fmxbXjmRVVSq3GdWMsXRoUAh5MUnnBrrtpF6XUi8xuUhS4dTvPhRsi7RPULQxfNgLkvHbrNkV4maFRX",
  "key28": "oMdrqHvDWnJDvoXTjy6v8bY1fsT66AiYv6wzXJrR4kUvKEpKn6eHc7f6XszDJSu19L9o1aFxwmPCZPLmEHVJnjo",
  "key29": "vVJ8ne8n1HHhsPZajA6zHf169u5xFJrXqTMpnaA64i8oCBBpXeqHonQqaBZ7BqagPjzJWH9AbGJ5BHcbusy7M1n",
  "key30": "5iWd3QfStANn2bNiMwdKMBw1RVnd9rzYinwrJDF4TCCbUo6xjdSZiz8NdLp46v2AVBxUrSnD2aHGFN9uGpXmAMJc",
  "key31": "2MxCKXbU4xomnNoTACbkmaZF46BwuniAcpaNTdPs2R6G1tQX6GSZbjvsYRiHY2snZVAreDvQ3iQNxUXw5SHeaDJv",
  "key32": "2MYYvA5CY9wCdgdvNWEkqE3si1gJhyG3WhomT1NaZks5DxFCiXpzjy1gSsZLFDRqghG9nHv3k8S558pgUHNgq2hw",
  "key33": "5qG2G7BVrY5AoeEpPe5hZNgF7VzB5v2kMv8FF3y1wfPioVoZc5NZZpmanrrWtHvibXdBxxMAb1kcT8hDMmjKkPSP",
  "key34": "3CqKataUtmgWsb7fcNH1VG9cXPKFQh89jgWHnw3tXe4SYkuaiEz3oPTCzuX1npexGmzLpnZ6GgwmT7TgEDT6nkbL",
  "key35": "fUuBMWBuQYqqKBUgn22wxyyNo6BaQvGXAWDA3sjBRZzgJLsF78m4YFBsa1LKPBsFHxceQoCJ3M6K49Ws2W2sZEt",
  "key36": "4CkA4oJKceEukUpBCk1UB7fvEwcoSBUh9DqovQySG59euNTvuJXm6Km8CCvGRBzsG4KvWik2PHFgV69BvX9ME5cL",
  "key37": "Pie2ZH6d1dH6LFhKaZ5VuxrwYkKsrt2TiSN7tmsLNFMBFqYfJpiAmnjV1F921A9BKiPEmFv3sDWjqdYtdkhyfgr",
  "key38": "2s4cadBu7ekJdxxg9khZrDTspZDgyZfdcgCjM6ymUdmyz9SupJTXQyUKqu8tfm7wGCNvcxwfzxvcEG4E6hSxstnS",
  "key39": "NKQYqjQWT5DQR41dXMaT5eKbrxxBdTn7hzHQpHxHuAz2Rrhv4AiiW5yxSdzNajese9YwWFVJTMmA2X4643VwZAy",
  "key40": "62HP6DbMfhecV6j4VpnaTcDzKQZhdjd5MXCfGB6tzeTd2xPYRJAY33F8dddZfrnFhXBnpDYgpSVxQjUGaQnVQm3o"
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
