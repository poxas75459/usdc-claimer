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
    "opdmmjYxQJA3tLEmmMKXtMgdcmXJh11uyiTvGzTuQ3HK7eLmzQWsniG6gHMXcnJ727jSCJBhXf2Yw5CNLFWcFRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YEKpWwCnGZVfHGm6sSvygRQRe84XNjYzaynxeZiFwK3k77xpbysLcVBeV2UNYX5w9TNRrQo3BsMLzcyHUikPknA",
  "key1": "3WfJpXhCR8bj8VGk6wkKhv6KPmtZoKPjwJ8T4KJmeJEM3kUw3shMknF8Ac8VpdLbEBd7i9dt47s6WjqsbFdNSo9n",
  "key2": "ThmMRXuLN8mJoL4kdw5zTpt4YQdHaSPvaeS9h7bWi7dFdYRQXE3LRtbjHgmDsrBTS9ftjE3wkNGZcrNBD1pZiBN",
  "key3": "CGARzeHbCWRsEvmP8dd4cVsHhxB2tfB7ajLto79RVb222QEBdbkaDTBW1LTBx1NxSZKuFoXZD51qG9be67zpuZJ",
  "key4": "2P9zwcn3ocn5p2zCL3axdBcEiQfzJ7BtcdyaSBtkrjviyXFtZAZuvjLjV311xucPZE1H95Mi77ScKktHBXchTdvZ",
  "key5": "2aTXWQcwvi5g1ESCh8wB98VHDvUDozPTXCGjufGFSZ5g6ESD7ubhf6VbGBGs2x6xFh6gX9TPwteXTFaZXpMVvqCs",
  "key6": "5u8w7FAPXYcU56MyKJzZ6mx88ht8Zc66dt8f1VpgzQwFfCshwn5dwHBA4t3bN3qAGRetqFpnCGnijxQpYALkEg8f",
  "key7": "5xKRHix8Pc6zSUb4415GQhyhRHqpPcQeDrAtk3z7MRx8Cy2G7CjAv5dJUMVkTahMk3tHUqhVTLE4bDcvXMSSZtDW",
  "key8": "3FtMGC1tSLDyDabk92ZrUsN9cMBgVNZU6KmFahXya8U1gxSfXrszLbYL8AG8LxfMKPEx7EKCCKEvpz79TE7HUgb7",
  "key9": "318FSS67EACBjxckHFU4Aenn2tW4hFzeBJXjjN19V815MAxrtKYwhqxchFdvurk4wVgNS8B62KTpdaQcQpamDaWg",
  "key10": "4HdZAoBANNjmRPaJnTLm6am42FgFRv5QLTKQFGu52CgvyXyxEQo6K8b9itZtfhhSVFXJ9ApCyE6LanhvgCWrpHBA",
  "key11": "286ySiMrd7kb3XvRQfFn7HTSx5zUvGu7AwFY7fRfU383sTHxP6im6VCru9C5d3at21Eiib4zKDB1cTnwBRk4B2fZ",
  "key12": "3ziyiFHFVYdP3HEczUpCyKF9TkzvWpVefgYufeM4CjRXapXRm8EeVX8xWRt2mHJwP7MtbAkR16Qbh1cGUQQVus5e",
  "key13": "3TDChgX1c3KkEg7AjYJZhDNXo6ViiSDHJKzgkay3fvHbMENJJr6TGf7Yo669D1RAUNNTMbpQmz1HHV4qsuLqNczZ",
  "key14": "m3QxzCJB8HK9kpQXLt6nqJwXe4dPqqhbUcbDVNnoBt6esbjjL8Y5pR3M2t5hhEtzFQM3MmKKQCUsRfsLBR2EQK4",
  "key15": "4k1QsFRsBQBAhpXEpx5rn9VgLNMeC5eKG6RkFaJXTgBMcXwr6G86JAdv1EC8F3ELLbkrcRDsMdVuQrnutuyKEUBj",
  "key16": "5VSRAQpXppz4U2huVMiSznx7bkB9qVyVhZZGwFpiNkJmQpgbTFooQgUeNXe1ci8UZqxiRp4QfzMkQPETQ6dDLZZF",
  "key17": "Y5Phs5JUfJDmSoSYTurXoXpSEkWjUetMTyFAkkgxpLaJnhWbtxm8hfU1y95Xqdph2ndDLKV4nmyoWzytA6TxfJQ",
  "key18": "5jmNE2jjthdRceCmGLmr8ofHCwFmcDLTTruVEfZbPmEKzdkBf2Rs2R4VSi2os7oLKDMfD73jzMCmSYcR9YNXHUa7",
  "key19": "2Erme8FLKQ64a3Y51ZtPLP8rWr6L1Cv55dJkwo4eK4PfjyqAwDZdtczqEgAZScLkXfbgBFeKzd4w29UU1BhdPjWb",
  "key20": "5MzAoPYGLiWEmQiBpNwcZs8sDLFaXFpDimjvpvMg14uNcBq9wzoD7ajjd9SyiYZa2RCaVJsQXbwJLz1EDtVsigZk",
  "key21": "5pJ6XpYh5Ccgd9KAJx6FRBTGXRe6SWS54BaYc5ix4rDuFA2wfYbCdN4zAaD13ZkFm7jyUoLEd4U6fReuZidTx6Qj",
  "key22": "2CPrJnvC4CebvQHgx9k92ZDgbeEvdTMY9ouF8fr1AtBnC2tvSZr2VEWzrwQ2kmxA2nm53uBr8V2Memk1qNJtJr8F",
  "key23": "2nF4ysPDgS4FJzH5ib8RoCfQAS3tK976mG7VXPti83pMqX5VFFP7cY5i9W3uNPd19MUKhim61aC1ejnKAQSM5Y4v",
  "key24": "2vzdQxMVn8vzu16A4d8ni2qWTt7vzXNxuWiJoCu2DiMmryQkX3Xm2dvvquQPejVuuYmJaGh1v79hSwRuJXzVd5dy",
  "key25": "2fQQvGMaUFhoeoRUpRNcCWpC9GtGzKRmNLsvnQK3wnzu2fVUyDggQ66stoHyS9i9a6jpGitK39poGVPzB8kFTwSk",
  "key26": "23pJaWPXv1Pc9jkH7jtd4SWT5uLGCVWRwPxRyRtpCSoa8KL4cyCUDHvMcFQ5yHSq31fF95UQ1UhkkS613eZF7HC3",
  "key27": "3KHxLiKQM1VzdZickrLfJNMLu1qiGYKoVtKEDHCXn7AxZs5nVj2ZS8hjDgQbN7XHfLFCaSdiF9oQnACn7M1X4xHP",
  "key28": "2bwxYRSx5jTGZzKrpkxGbtyjc8Gjg1GLuQz8NH6no9jp4SwWSTD5cG8PxYfUQUupJhyAuw6AsWCSo6bAd94s6MAx"
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
