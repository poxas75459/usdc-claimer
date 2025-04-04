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
    "2kRwvMQ2FJ34yvgG2nCP6GyVtqm158nNSB64xNAkM3QcBvcFp5Xk4zEqKqYyxVwycmEAvbfNu37a1sQCVDbEQkBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48hZkZAo6QfxYavh2o1oWJ1pRM1mXrAxuvQZAiCbo8SSFAnkpogFqZ8GjduxBcNTuV1mvwJ8qYKuVXbYGbMhukZ2",
  "key1": "5j2T7Cb3obG2AdRi4Jn77GpUURJmFMUzDeCAiKSY2uq1QRvkiKW8jt9j94gm8iC9bzZDKB6eXEqJT9XB4mNoznuw",
  "key2": "5S1c8NukPDmL1Gqg5k8ZkGa4yFWDjbvqryegqisDTGCheFyLNDxUhS7ggWE8GD8A3AYLwo8VjqCJtMiFAz9rii5Q",
  "key3": "hfLY5WoTGNJ4fvnKQLeuXZpJsmGHk4EVyAsqXswkmRSUL5BuHhKZCkYMdng8Z9SCZiANFWFFcnu7av7xZ3bSBNy",
  "key4": "DRsaFAqkDPq3CNxNz1KyYMAxDpvLahwkkdeqhhYxnAL3o53hzj8R4jbKxzjuPHRu1UWv8cisoRNg4JjwMcbitoR",
  "key5": "SzNoBvX2syatZchwKGty7YKsspTjbhfZTukdWsC55bYXm6xnpBjMWwp7maxJBPvwnRJYMTg1U5uNts1AknYbkm4",
  "key6": "4FF4VKvbe6bVHB1FD314SZ6DrTR3GUaGRHUFwfc8e5NjoXA32pBayvJDD4xqD3fYdBC1orbrZCEvKtHNUc2deNhX",
  "key7": "65UZ7SqCuyvLbkvGzXGvNC8AY5Q6X9yQqSRFNGbn63yYJfFt2ZJ6LLp4B9gkafbeUWtdUo3eEo14aWnT5xuFdnDF",
  "key8": "51C8wdYYz5Xxa5hUp1shZc6aurxKjFotMwRy42sAZCSsEpQuk5iJek5oLMT3VS7izfWpmiv1hg1agee1zrHEtXbD",
  "key9": "59KfWVqR8RcNU3su17up2zvbsoucFmqSNMxJPn7naTMw72uMevbUhGpuRtDtctSFAymkKi1AKk6hvohajN6oW8Qh",
  "key10": "4UW3RajfwNenvzPcCGq6hZnx4vTJyvYSBAuJq2ThmAksDqgBmgPNLrkhSMMG6oapsnFqYvmDQtzZkNou7iSmQrfm",
  "key11": "5D9f6BvBAU7AhG3FXUaNzFcEuPuLTmXjyZQGHAJmWwigGuGvs8Zza6sy85okLQDDwEJSPnKtXeRzXZ31YBR2DZ5o",
  "key12": "4Anfips8pyyfYSTNBH7gszJ3UZw1nZs88joRSaoFhJXTFJn4cMGCFNp3Ccte4UMLX37ojzgJiHUGQC6UFK25xNZG",
  "key13": "5MjwJKRfx1S6T5dsqrMh2yNuicqVfoUqh5rRpqGG5ABXoSj3gY1YtbnztRerfyNYFkPqTpwMmDyhCSKR28Rou8P6",
  "key14": "4upLPdv5edbRipZdS5S5mQMhLV7HZSfe4GyJJaZVGgqy9g5nQ2ojSR9xiD4FhjhF8mHuefBbuAUoEcTtcAF9e3gr",
  "key15": "3wYM1qbt6WDxtrfhrg1P37vwqLpKjPvtKPfMACCTY8yQSDqtHy5H8WwbnHRrnxQJBi2p5iQ8RubVTDFVkERWZGbX",
  "key16": "3a92KdxQQ4T8cQJN1uj3btuGSgCHnrxucBjYTg7aWmRQgXZLXorzYY5txu2nk6RFMAiMxfNw2brkjMWwAZL6f8x9",
  "key17": "2TY3qBwJifzP1Ts3sVkEQzY9kjcuDbTprnkwKfv4Mjo3wNUFBzHcAYG4xjD5m61ZksBzTYPv61RJWU45DZAFdyTe",
  "key18": "3Jax3KYNABTYjvE4T8Rg3X9FWfhYxXr3ci12SxzJnL2Sabv3zT5HnvqDkxVVpxZUNvjMqPCtTWJYALoLstPACPYE",
  "key19": "5Z5e7ajJdVRNDfGp8vxSTAD2FUoeKev2LTBqdHUFvnP58DbpHSdM3uufTK98mLPaFtmpw4LL8zqL56fSuhrHLP3n",
  "key20": "5yY3tYmTexNaEnc1jhB7pZuyJAkUCPGVHjmEX1tTHShbEJJEKskg8hdThmfuTWXNVq7Ksn7ThVkMTMAcV7K1syqT",
  "key21": "5MajPZw9Y91c1SLfJ6GDCHYyx6vjfmLrymXZwRFtxAEH8dZkGDDAdqVo72wv15ouj1ubfbu9yXtDdfj3SVNsGUx8",
  "key22": "31AwiwsXQwiTQVsPJoqJumbrYCQ8Z7LUdUVCLDZmw7sjSh1qdUj91pscuZkh8Fyy5MzViBbTv9fHRDmDpwzxmVsE",
  "key23": "2afVnqTEWtjn7Lb226W6BES63uYUa1BMae2PP8S65HTYabo8QKLnwbdV1dLxL2rQxG7a1sZ2AGhDQrRK1zLgDwUE",
  "key24": "3YtiretXKBfX6GpyE3s3ySsWD8K8xVaysEMi56KDThcCeKxtFibYezqK3STightu93nvxS2Vcswp5x46SczXe9VB",
  "key25": "AgCipTmS7F9MEVmX3zg9Su8EkjjbwWZPAw1UBRXFijSnLefLgbtBxVZ75BNUeypEFm95y5a98Ghsm9k5yfRyxRD",
  "key26": "2se9r19ipW7EvynshCVsjDBS9WHoHihBxwJSkHC3Ch3DjXDW3e2G2horg79pHJynEXbA6E9PxyBKfnjGaigmRrCr",
  "key27": "zqPi17rpxfFMWyF8eNUgyVDuAaLqxbmWLCRLpaQ2iRNtNsUorhJrWwUpE9rpwu12y8KXgcupApADkatps6rpfNs",
  "key28": "YuzAvjH3G3KFHbUR7rLAms6ikz78ksDzLmKijnuxdScyWNhvJXezHSr6DCy4LqK8EuGaUHbPGytFxHVdv1ir2Fw",
  "key29": "2jbesDDJPGeBcRmFTJDcN42nVui65Was9Nkq8gbSroarXnHw72mHBKQoW5MDaGiSRMyHKK2yxcMKJwmjLE5CPVka",
  "key30": "3gpDRsg8bSTtiVdMGWJRgFPevy1NRAdzwKLA95QaGm5C7GkWspg9hty7Ms1fPtShUHiRKXvHgLtJErwMA7UNSq6b",
  "key31": "56MxTynS6MKbUxZGQUpvfPvX4c84oY76oheB4u2i3etAdYa9sY8epQhKbV6XDgJciE2A13HYmN2r59EoWxQqRKSo",
  "key32": "y994CuWtB4FcB3qwmEQtGwvjcXXmvriLJf5VnxCkuQYcesXqC4abupSXV4acxmgxvzD8no8U6EbwRxLUzHkT8Y4"
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
