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
    "3yH6XH543TLUAigLwX7pSpMLVmfNNh56swqu9pRNn1uxsTskgaoSxGFCyErycE4CLMMrFmGEDqJzSoMgYq2htPxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oS9g6QiVaWuozAGA9CDBfdG6sxY8MFRDSHQixbCDgWq7xLBPSfUT6STxf3JDLsmLqom9UC3zh7pXqpHUJctpfAu",
  "key1": "65PkkSCuoy7EQ4PRC5m32jHtdJ37TFQvk3qMddbkHMb6LVYDgLPV9cShiiqMNvbh6HdDWE3qHULvgbtHRzhMEvSr",
  "key2": "oXUgWY49THbLDbVUT5VgwmxSNiXxzUzKwfwNbSzhBv8tzfgqVQwW9Ldd1qDneKEZ6Y5E5cE2Mj6kqkTh7Zd3UPi",
  "key3": "2ejn4UuniYTr5HrcGaN88PhqYWMhh5JiQj7douVWjiEw9sKkVbCEeA7V8wQbFsaoUF32aqNcXxJaqX8fzUQAWBwA",
  "key4": "2VQ5g7XomVvArfXWxSTacAQT62Wj4geBT4f1YgAdpecLuu54iFdSLq8fGkGM8tTbEDTZRpGCwmUEwNf5DH4WJfYN",
  "key5": "3HWnW971pyZ7NZYFQf1g4ckCPEJEKA6y9xBwGYYkLz2Do72ycvX2nanqpYSUKrscc4vmJpP4NRUEQfnAq7TDCGuk",
  "key6": "YCSScjsvtwJa8p9VN67dBYeyBDVGjfSZM7kePoW8MLRDfmRa5D1v5cxEZUsnwYT6VbSr9EuWko7R5dnTqw9wnaj",
  "key7": "p3jenPMeMuCBxtTUPvmxmPyV3GxL8XQ3g3fC1mpiro6ovzVcXaguksepFHuFaBx29kQ7RV9BpauBTMHM95wSaGx",
  "key8": "2Gu6Ji9DU3pLDkP3R7kUpm7ds88KzaStTX3kB8BH8EKBfFU5VuN8KqLhe6RFUtLQzB23Tf8c7fPoUrGoRpujWv5U",
  "key9": "38ghLTxFa9upGcUPDZFNP2n7vDkmnRApXLqc9eHkWVKR9ui5P1xMyPqFzWjCV7qT3ciTxdjaT4msvcmqd6M3ngF8",
  "key10": "4bv4h77nMBvbS94596XmnbbzBdNvVWvWRFzNYUHHhzuFd9ts8YbtBSt8dFS9F4NbiSeuwXmDxT8oJk9WjXgDv3Ef",
  "key11": "5qu8gUHNWEtBcn4RthWAX2LdwL9Cnnnay2xFNpndbWE5UaZ75GDWvE5r2XvQhhZVDACLtnLp7anUtkpzMGzFbbkW",
  "key12": "3E6j93w5nS9b3MPAQccNzjcWERvFJPfF9JppwrBoVCeaHHtpsufT5E9rXZSgVaKcUf5zeAJJuj7TJMspggG3yi6",
  "key13": "4pFwAsMXuYDwix4SifCtehCTjrCA3WnHwcChy3jEaXTrcvVLTCq8DNTXt3dJcPb5sX1Nxc29gpQVRWJUTJ3ck2nv",
  "key14": "2zxwCxJ6JxfTdNJPeXSnaYC9AdrPe6TooP5rPM8Utch7fX6bEh1WCvfTJFuF2EaEhMpwz7SJokG3Hybg3F7Nhirz",
  "key15": "2dF2RcrRALjZGoZyEes7WDWrqBwN6jhAUqCB8TBiWsb7zZQ9mozvyK3LNTiQ3QYKpAXBoKtaaAcSdGFa2hKgEVe9",
  "key16": "5FWRMBmFYNfVmNMVcZxP5PCD4JH4eeCunfHm8j64VHP1Mu9ZJxhbHEQdvnvhfhV2urheQuA472VKsoaWQyHDbgBy",
  "key17": "5d5fNGtr586bjnxyfuoHxmM9oP8efV3716fBncmXugjFKApsfNGmAZuJ5EEEEYDKt9Tt4T96QAyMnsbyPvU42KzL",
  "key18": "5bEoA8ZyC64AtiYVkedJ3y3EHymu9ATrHy5xcsDuNVxH4z45BeqfUtCG8yTP7pLR47BxYZ3tqiBo9SWrzx1wbqJd",
  "key19": "MiBvPyKkW4PmqBSXAYkEo5s8Jq8dRrUE7nJiHzV8NnxRR2BHtdQ3Hc3UWEHeqj7nubQ1WHCX9nDhFhzy5FagpC6",
  "key20": "YJfAvLx7499LxzAnmhq4kHEtcYDvHsCotoD1hcdF1g7586URBCGFNfTp74ufZopvF6iF8zjXpiz7Z2Bpy4No5Ak",
  "key21": "3XrHHCNyuLroJ9eMFuX277SixcdpHrGDhhgggdsSScJSUxMXip9xjb5y2CB1Dcy5ujB186v9EmovsrdSbQqaq9my",
  "key22": "4J4cQE2JckFQPae44V9p4ZwujYWnBj7UUAocSxS2vjcVnTGxCs62KFQ4fPWEpTUFV8Qd4JXY7CiSwHvt97q5Fp3A",
  "key23": "NsqsRLWEx4CLSvi3yq1idWAAA3TS9K2i7fiZ8mUNj6cUfsrXSE1zr9YqjM9zcVGuhuZ1e6k64atpZVoZvFc53FN",
  "key24": "2KpR4vogsSbStTqKFVaXx147Sb8scJ9mMrLtvnzhstEiLmjSU7jNuCqsYPHLkizBuK4FKphFhazGxncFe6Aezh1D",
  "key25": "5coxnduDHuxCPker5i2LbKmPMYEJi8kF6zNRwh8PR2xLmjDuwyycjuAQ5F3xvTXHRt3eP5L2ndLNTg3yaPSEkx5p",
  "key26": "5uyzptCpTrdhacrKeYwEYjC78F9FJDwVuYgQWk1Jmp5gqV1AzApYmu9cbykUbCtTL5rxCW58Kkdwqfk65XjNmXzf",
  "key27": "VN49fyQZFj5yFiiMwVge9rhn9xNZvWYdepacjCVo4riQtV3REQfSqUsj5q3ezCApgykoMiEXCw5myGoJ4KbchX2",
  "key28": "fN9o7MW34JbcaDLfhYnYjrwEaB9YVi6bN9xWnMVkYPvMbreqbdfxFgQEhRZ3Hdrk2uPBQ9J24tfQhSmrHqVsDnY",
  "key29": "3BuXhTJyYz3yKX59UUVLvnNGZTXJ1dLMWuqY8kcUm9PCGwKzeE8He7iQgMjSGCAmyuTPTwquiTEjuAKrWvx5TMX5",
  "key30": "39TrEWfrgg1tP8H39f5kbvSYgYcoqwJMHSbdnhW5eomGAnfizRFZQth7Par5oYJ4E4bdrKEtaHBB1V44DRhTKGVR",
  "key31": "3YVFmhgWJpWusRwfYizSnM61r6Pv8Y831t4M7w9gUtHMCSy9c4MDuZgdicKFsjjV5gSQYU6iWgfSAHieEnqsGvBo",
  "key32": "27ULVRABFmKMhCqjcdnCYcCmUPgtpUEpP689XpLDuK1ywiNy5VvjZmKMmgHoqv8GZme8Reyki8ac19fnWBTMS9Hq",
  "key33": "YpZDGfT5vC6ZKiQmrH8ja9smbnFn8foAingp24itK95LqfZa1Bg2KRy26uRkTRLRabLuxwqBx4SiRq6ewatfDz6"
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
