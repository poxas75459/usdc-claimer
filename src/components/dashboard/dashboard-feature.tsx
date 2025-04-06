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
    "2WHVxWaL8TA5X1iWtUmaB1GTHaqApKN6AtYA2id3AS8pgNPHtXz66bmhhigm3H4W6L5oxo3Vr3LkRJYijLVbVsux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n8GEaPnfjfpxq7TBrYKhG6R5oMvkkwct3zigwVixn38j4FgwXfHXSos48ZZtpb5TtF9aR9LMpXJvXzavGdqVJ3n",
  "key1": "2s1MiAv1CxtyK253BUtZvLkvv6RTkMQyvBmKRqMbajzTj1wLWnnKsoQU7cUkqAGJTvrByj4mhBEqDXv1ArnUfb9s",
  "key2": "5nzB2XPCnX1b7WrjRTp8dzBhQDiNZf6Xc3rpQF4AFk3TA3XALgh9vE9wdY3bWCPyKpEzTqxSMJYnbcXjjbZuD1kK",
  "key3": "4PGNTYze84nmdcJKECmUo6Po9D9xGUaCadH52gkKx7nvr1fvagjfiVxEVqFwjDej2933YHLGXZAjYZgvXaskrVFo",
  "key4": "3Tp5ukidNDyNCFvfDyGmvKuD1VbyWAZCLhCQJrCjZFkhiZqTCy3L6aXWGFiTkmMQbT7hJ3FobPPCfsTSLywu4uYv",
  "key5": "hTb6ntThko36GU1FTN1DMNCwCyQZLiJ4PvzPKaBkAiiaGmVzv4FPMDsqn2FVPWvuVFyFZHG7gHr6UeL7X7MGGQG",
  "key6": "4LKUk1Qg1hgMo1Y16DmajB4DLQZ8V5ckjmj1JpwXeTz7VfdJ6x7ZgRg6gNiHvxMwDG9a1N7qbSMyiydGBxtJDGfa",
  "key7": "2DeTvhurutRWebvJhkpNqk6ooFdKt8KS4UXwpaaLL5JDdLPXoop2GSTP7wP6748TKEZFqLFBGe78aRKLfr3y16Ve",
  "key8": "533S5xMCRKE86kA924Xy9c9kUdRyUAGWobVKF6JQjrhcxWzErhNtVtMCbkxuXbr1DveNCS2rwxLXjgELCPnHbpH7",
  "key9": "5HScnVScFHNMR1EAnuCWX3tVDkT7abuJAsRnPJ6tAcuxqRrBS9gKiJRsw8HAGpcVj9mbEmQPK16N7yh3Zex4SED7",
  "key10": "2ati4gJXno77AWDoZdxdf1mGPcXeoJwJttwK6V2i86iByRUizV9tG6Ys33KH6QLpmHqggkr59n1JK5716imWBjm5",
  "key11": "4rjN9dLtzc262vRBWaeujxGvBFtFy3tbgwPi27CvDvh7ykCXiZ8UBcHh4N1rWVyucTMVA877VUDfP1xKEvm8NLhC",
  "key12": "5HWcVwuEEi9L3wn9Rmzpx9qgj9P5FBMRgLsHh6BLuv6JH1pixZ9kpr7QgHFJsKzDfG2HUncijGJRX9uEEvetqbCw",
  "key13": "2oTqrquTCvKNAQLW3yFQPCf5JVSygARbuVC82qrrBBde4ArspnBhaga1Z3JGMjo73FCoYXJJcuqUKYRRZT1rzg1F",
  "key14": "h9UsgCF3Re5vr2skk6xrTXqP5H7WWBdUjyUBSZj5vufHxJ9Y4U9bhHWBnvU9p4PiTJJqycZxWQ2jrLsux88z41Y",
  "key15": "5kK6tYpNduzT9mpTLAj2zMjiqEwCjJixTZNowue8gmX8ZhKWGNHVpay1HnUgf5nh26rjAk9neWUDy8V8QBMBgYj4",
  "key16": "4WwHPwXBYzH2ufkbE47S31Fc9oQ2gz4SPoB1yNHBAz8BQC7WtY3ofY5mvVTLi782ggd9SkuvGjgCBMj7sbP4DmbH",
  "key17": "3VF3LrkL3eQ2co2q4rTTDjKSzsUsfXrAPAva5GmCH9kUuNdgPqEj17bVNWWaLBRZgrnuohb1ozTDFoLHifaRpjXJ",
  "key18": "5nKZAHG51UkEX9a8D5bV4iftXbLE32UNyxWsAzMTcjHqk8uPw3u1FCWefRodWcbh8qK2pvDzbgAfSVFFdgqBDmfa",
  "key19": "4Ehh3SdcuGToMuxJqqcezWwRjCBkM6vCjZkevrePSm1dYBz4JoDhgoriNnfGTUedHbiegCDMdb3wEduHW8rko8wz",
  "key20": "3M4Xn7ggJhcVUaURaoMLA9hhDtPZ4mRUBdNvyiPM3rXS9u3qaQUZ1bX9E3fG9oTTzuKH8YpCPhUEtz5N64521VKS",
  "key21": "2GzWGjFdbBNrJHAC9JzssjbB2dkwWc4EpXx6av8HGEnuUYW61toajRTNkRs664q1HDoSFrsStPYNeqphYDFQNPpH",
  "key22": "36m7cciXKht9d6NjEfXFAeEv9wpKDYCrGyaVtgjC8Bcy6sff32ucCymvBAbeqr4bEtYRafrj949mEwTj4GvQ7CeY",
  "key23": "2H3Mj9eRtrrP8cMt62xBWxrEBvAMvdCA6SX8mC3fzJ2tE8neFRPAZG1NQY9ztdDxegvZ8Kz4GQQtqCZThx1qA7Qa",
  "key24": "4ah4SKf5Ysd2FqHoFoV34AeriY5fmaRaYx71kNgWTusENHa3N4L8U3bzP2mBe6VpRDsBxrV6AmvbNNG7Dcga1q6f",
  "key25": "4D1xX7XD9YfagVcQomq4vuRgdDfn2RFBBT14h1gvcowYCKJrJh9WY5eYqigaN8W5AsahhzGw2cQhWNnwGW7SXkuB",
  "key26": "32JipWk1pajd2XPL2PxikHJ1ujQg7mSGjQkDzVA3QNSQfAWAXah23zbgL3TCL953Mms2Hw1RruBarc7gMMs38uEn",
  "key27": "3GwZTSRpjVYhDJs7rihUtgcmNXjgJQtSoXw9gGmz4pe7n68aFw2BkjUmpvGTdb6393ra99TVK2GVwvLnw9oBpPEb",
  "key28": "4LqG31omxb9dNVoPZBU1Lgxetgrk4tLG6hxS6643nSgNLJQJYJJxc3FnwHFR5jhMuss7At3cDCCG3WqqjDBqJxH2",
  "key29": "4ywT8LU9WDbzwrjm8U2NEFW49fykgXaAkca5PHoAisQY7V9C1F9mgHfp4bgbkLcoqeSJHSJV4xtQnAfAefvX4Uu6",
  "key30": "4sQ34GhCsg65Zgm2sN1v1UE84RszGJtR87XXa6nxY7rLffNgvV9iGGVfqEQmsV6K3z6zbZmL6axrigHdADKQ8ZTm",
  "key31": "4SPkhhGBWcuNCvQBN3Cobhuirktv2zyjuAtomiEQxPNYrqzv6TspFEsxysyS5sJ38P9R2s2dirySpJBL4FPYphtZ",
  "key32": "2CfsojhMBct6pXZiCC2UNFsrRvpdcGqMieuYiT2DMcZhoy4yeo6wwWinrmJPNLZ2xMbJTHtiCDDJ3zjyuCQ8Fyg",
  "key33": "jwHbqaSVc5G1MLXN1Xc8mFQLe3Pcnj337dScENMXr8CiqkHbNcoTmsprUW2W6ZqN9MGmvmXRUJaAnJPSmzzPdkE",
  "key34": "5YsoeynmMvHKvJ2651GwLGLELrFAS6sCE7R1bwHiMh2XBB7VvSDZzvWgGpwBWcRHeanNchdG6dMP1LW45tjR9BS7",
  "key35": "2M53Faccym18tLhPu3tEqaqdzLB7F7ht8JZmU7prN8fv8B32qjrUSsdsKSoDvVragKtDLrWURTwjcEsjSoEkBzd7"
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
