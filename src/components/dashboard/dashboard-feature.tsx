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
    "5QALs4LDuAcWi3yjhNyUB5WXZ7FfGNSVSdTohLX2GGc9WZ8Z3Q5X6x6krunZZxDS1PF3H8EQVivUsft2LUtHjWYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NByTM1GPy9ZAJpB3N4P9qKYa6yTdzpJKrpJrnfEJZDGXr53kHVfNbkKEw6iYEKd6YszMXG7sC3xBbMPGrstWjCK",
  "key1": "2siRh5LX4y8fRBogcE2TqU4L2kSCtp7Arj9gytmJRdU4Tk2QR6oVaN9Jn1MKaj5DRaRpmJPdu8akdksgpSMsZQA6",
  "key2": "3D6pwQUSFMSH2MG5AgBm9ZKWLQx9QT7xzmyBX4EzS82SwegyEY6AETQoJv4X5gxPmNqjaSC75qDCaXeB46pkMJBa",
  "key3": "43mYnR6tWmQX76eqPF4LYuiG1ybL8eGLoVjYwxibkKCMrZTEzqcwuhEXjq9pq3nU5Xw2QZtwiBZBHN83VJrBLEaY",
  "key4": "N1CxaVcg3vJ4MGGqffwUNMvbcrMbN7AG5BNLN6JKZDZtiKtM7wEWsnHrnsWWjwK1vpdK4sW76F7tCL2U28tePUT",
  "key5": "4VyhShDTMoZDfuznjrrSU8dE3Lpc2iAfKpCj4vAmnKcDENPV8u3McwJWhAqK5zM7V7cxSyhtwdmP6eSzq44hQ5Z6",
  "key6": "2EPRt5AWNidqzhfekD7rgA5QaLQpQtePDGPajhFVoj9JVnfBgwTiHrZsVBrNNhwtRFAPdsyJF8PG9TKsUMgu8JwT",
  "key7": "3DMoBSq3GatujW1Sqxb27NSPAnxWBkt7zEPofm8mmnMv2QoTjYdGLxgsXSKfxkfDTg1i5JToy1XGKp1fuoyt7amW",
  "key8": "4B3rbJJErbf8iVooHKUYgjypcrFQL6UfZuirU7JCYeQDXQpDYG2TRSkS1So5Din4tWPc7DRBysRXPTbT3EgQDwcj",
  "key9": "68m2b3pdBNNpC6rKTf17XzxjpFFhxhfyzojaHF1cdsBsoVfmPLUy6mPTFLbgCvvyEVNTF7GuwqXLZDtLccH7RY8",
  "key10": "3rqcMQmPHbeZJwFay4H8z5W9ryzycbLEa7JnRhbTbFkCfRZpgkgzMoVezyZ6g7xaik6bMdYshnD7CYWoN58V5bjZ",
  "key11": "2hUukTEybvVBrFRriCrA2G3HRqJmFk26o776UzL5Roy3HyjQiMnUNCdnJ7TtgcPX864tPJqXGXzJjFfXmyPbp11a",
  "key12": "5Phg2ocYbfkFKWryj4B6NeFdbgiBUE7LrGrpH3i1aAAFVqyEx5r88yXHB39DULy7YNoJbb5W68uFdYLUhfQhE4Mu",
  "key13": "4YqURhiaeBM3vKEfy3LuiYF57dELruYWNP2YwK7DEB5gp4rKWDyPbpXttCnrPQj4GqZX7YFkA83Skv5xg9UADU8v",
  "key14": "3ZefTrS8nyk4CN1HqTDtcM3EzsEDixKYXpmW4LEYhVNAaPUnLoorEdeaShVvbZUpNuecP34kiiunC3gYy5s8pAZE",
  "key15": "ifUG24bH8zATdLRHu6gX6S8SvaUPU4wgPTBJgqBYug6epx1pG1fTRp9tk1pNm3DykVXNDDsBeFztU3FcZCkLdFC",
  "key16": "3BbUfpdB6nGF6bvCe6rRbV4GHUymNKoQHdpnKt95rgxpPCJPbnd9o2kUwuB5pvhQJvY755TDKoizwsBRbGheSDyM",
  "key17": "54U1DJHE7hq4L8wdPYn7K81JPABKak5FPN881q75RVpmGVnvbZzqXK6Z4CdY2xvAyda3FJ8mADye9M4KEAUCU51K",
  "key18": "2ELZQ7L3ubGGbo1RU81pDd99tsQ7EPuGHEAHCG1Dw4VgoejdgjDioFVecDJL4yf9SbYbkPX9ATWbLrQsGgE9vJVb",
  "key19": "5t67x9JfzZBSc8g7kFp1Q6WSNKBwGzxayiKtYifUrire9XTT1CjH7FQ6gykD6nKBoiZGm2y3niH9vKcgLwtpvJBY",
  "key20": "4w1oBo9V5bCXpwJm8EoXEAZ6Sufxvzttb5nrvWd3X4XZ5Q9kawj5MBAgmQkunzXDYifNTnihGwqJhWu9ftbkvvoJ",
  "key21": "3G8Q15ycNaCM7xdJQwydXCSAg2Lb2Y5DEByadWo5HKcpwCy8mfeKHEUEUaKhRuEaSNqE363DWb3JBE9om3q2khAb",
  "key22": "5YQHH85qLcoUqQKSTfQktS1TsfBM4wre2s4zi1aiFy6MBQHvrpaYQ6wvDpw2KdVZaLSALZt3MaDRRZgMqFFCctmn",
  "key23": "34Ynrt66hSe7eAMzjVypaBJXDfddGMkKEBnB1rW4aXzRnVE5JcMy8sdyfJwFDwUnD3pzi4nDgNqw3cyj1Rez2YKY",
  "key24": "2zpJMrdAvG8wkwWSyeMLaiaH7zoxwWmhme2fs1d6aWhUPRCpF3ScY4dhH3F8QimmaTnEwscevxQDTNDYsvfQgjqz",
  "key25": "4xXHU87JU95durfvP8Aumyv7e1pGsVNY1M2zwqt9YKssWuqSUhNYvZDX5iewDYZ6BhtCfcexXAuLLZK9Q3Tg4LaH",
  "key26": "5Ap949yJzi94bvRGH6Kes8cFKzyY14r2VfPSjTfvarK1avAQZKZa9oQcBbzTN1nxMCt8skkpdfDihLB1jGSZTn6M",
  "key27": "3T5JuvgJBJpHitv9yPbwmcDrmvwaST5mmtXu1Lbhr7nheZJdnecisFtH1qx4QYoJPY1sC8bUz3htTFMmTkNgyicF",
  "key28": "3nGNyUJDZv63NHBPST9KEc9TLV4E7Jc2Gpo2NUEEr8jDa7qPNAexF5LnCX3yrfXe9qWFPC8MZ3YWqEsvpKyFu4xR",
  "key29": "2fopEehms7BZykGMsFbjc6a76wbB2EjhykmKD376nAUvkVK29xaTn2XcmNwjjznWSjPMaNGihQD96pQK1LT8dFAf",
  "key30": "5EBKcXbQV9tEEiwKrohsJjQLY3CtcygHvN4wGrSWoeovTxEmXu43HSjmUVaTbwruazqex21UNXsy36visjaWjYwT",
  "key31": "2gwpD7dV3E6paFHGETDpzsh31aCCmnBNtjSBqfGPWPrTsvZpn5hoWxqgyXFMHrRKKweirEPnyZwd6FvgS8Nxp51V"
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
