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
    "44iRBAk6J5QXpBGGsGGVuqXQWxcaKJntcjntQFx8fTbhbSkTmqrNwg1zd1dXZ5JYSSBpnvQpnNJ1DUoDhpC4Ba7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UxX3eatShHyTEbCqXELCbT8KoYguQHQDkd7ivDF5NvyoHCPu5LVCKjTJoc5tUGYUpKeoLE3YmDzyZ5Y8dafowia",
  "key1": "5eXgs9kAusMWtBHFdkqmHEhcMLbanXLQrBeU4kdM19tSaSLB1f8sHDoFMCvHnqfAR8czmDF1d7Abd4aumZyFoh7X",
  "key2": "46JY199xAYZoLM8zXE5J416wnsaCZ5NwPMNRKbs2pNG2MV5vFPuNLzUFGaDVQacUE4jbng8ZGmY2U3ZDT6JAB2bV",
  "key3": "45nuP6nyLxojjiVgUQKEZLuKiMQXWMKWWGsy3EEUDYj1Ys8b586fjmkHLFHeBboWWoA6zWZrw6oLYRk7ambnKwm9",
  "key4": "5Lh8KR9RxkY2fbov5hZcuW86QomTu2JLY9KWQKJXgPhgZovNGx3LnLQBveLhX7GV9tuvDjfmw7CprgrSpWqNTVst",
  "key5": "5ftw1dUnc3zn9R69qVfuWAbG6TUuXbZQvF1uXr4G32ymNKAbkXkgG564U7UUHdDXt2paNAZAufcmxJwLuiNgG1fL",
  "key6": "3VXrqKYLdWNAqaCNzBmPRDH9ATGuBiAMPm7Y5P92ip1xhqAPMS683hfqd7Ry7cD4Tk4AHDpbxGwp8cggwozJe6ci",
  "key7": "64ksdzC7HcjVL1ev2BePxmihqVo3ZBcKrxBVpa24ucHfr8WCrxRJ7HkKZ2sxWKPUFGATjUN9NJ4mCfCGuB7SvhWw",
  "key8": "2LovrMLtFZ9ps1bQByKbd7rvoaGJ2RE5dWcYUhejqdGFSgWHNS9MjtZqEpucC5PWcR2uUGqFMiHqF3AqhuEnGtKV",
  "key9": "2HUYNVr7qsuCyjsX6AWxATLgEZDKgMzHXx6q4s4TWoim3DgxVLUtipQoPiAqvMZwakyL4JhdAvf1e9x8XmGQ9nZk",
  "key10": "2Z6y8b8KfCiUjYW1tCSYtvLzFp8NmnoFjnYBz66TGucSx4nCDr6UAat7Sho6gA1c6azsodc2F6DPbLLqAn9C9inN",
  "key11": "5LLsHSn9qnMNtanr24jfXCWMTKntkcBV3Tw3ihWj4ZmRwmxahgVSaxvBNAq93aeFPH3j2ucU63TauQ6Rr8gJv1fX",
  "key12": "5F9rBcwNtykc4CPg9mRYYSHaL8iYhmbvVd1NEdPdLaf2AFWSVmNVGDiDPN9pPZtqxo65uCPb6JYvZPkAqEdbskYC",
  "key13": "NcU24TH3kyZW2k5tBcyDkeEDTCFP2rgZYG9tUBhws7q5KFoumQUt1WNacF6QbzUjS59YLNwgrBxMxUkDRbq7ZBV",
  "key14": "V89gkNTNZG8iU84G1ML6wwpWMs1YKKUgAAfHRG7nD2KjAKkiQK8pYM44U3xGfUt8hVE6rpgMdfRmTFAj3GF79GN",
  "key15": "32LUaHFSNEFu2SpEWxAWNoJv4k1nyaRPpdyCAn4ahVSrW8vvky4sAL9cwuVaBWC9mThryRn5AECLfwvu8Gs9SKGg",
  "key16": "6VsapohC7LyF64RRUDgiNkUpMEXaJ6BNJ5BUr2WUEP88b2rW25CaWvCGAUcy88rixvduakrRkuZFSkN54x5GmAZ",
  "key17": "2HShzEm8bmuSrLoUuxQftUCkK5UUhrpRiP2nvvLjnzotovHDGxzkPMwJkxGMAGjEe4aMGUKh7Pqh1r6rjrd2VtMB",
  "key18": "nW1M5vPzSwyB8iJWyw4Vwk6nLDiLYbX3URrUZHBshuFevxpJ5yJy6rUWWudvYNJbt3Cewsi3MWg1TiBrcVy1F2W",
  "key19": "TKr6rSyes67r3PDTA9Ues3JoDLzrkeK4hBVUiQACnSE4QYY5LNFox5neBWymC2PXMVwbUw4BE3bE3nBPQiRteMd",
  "key20": "Xqjg9Zc7BwJMh99FvJH8jxMrdR8mmcB9jVx9gqfgndSa2y7Xy9y2s2nae48kgRit3ze7pg8DycS6oKm8AFH9A3q",
  "key21": "3AtRFhLSHQ25o8rNz9ZYaVrsEKYiGCLf3mZf5u4ADWwu8sBZPMUFqmz5CBw1yUUbwiP3qUDeTw1HMVygWnETNToU",
  "key22": "5Mfp5dzpRxqi7afHqQp78g3ypkW7wYSJi4JVwLr4RdAj73h3MEKk9msreFy2omi8JZ3WkKpgSoey7e2te89HWDqr",
  "key23": "4izaeYoCebCvz2qe2Pb1iJASA3kcuf5VrCBUG9gQrgGMg81eZgCJFuVb3LcQQsWonsmhxPPoDy5KcE7EdjqsKZBy",
  "key24": "5XkuyoxW2wJoxbeeCeZEeoUukTbqfSGBQNzEdxiAQx7UJVZigYsxSCHsxuV6fphPED6GYviPqeczugZgFzCoDvqt",
  "key25": "3RTZBJdYBCvz8stQiwbXsFJhsUuPokeg2E7kJxEZ2psjSCTUXac7XgGGRMrpngvXC45womEkocHRW1NPnHBaQ29D",
  "key26": "5Ngx15zvepLLGMbBcsaZKV4rDCg4pcbzV5zV7Ci2Hyiv1Fm8YnzM8CwBEA854Gp7YXeU86Bk9tvNTgFbXj7uCXUA",
  "key27": "4RJKkEWApkTjbQu9JCem6voq1bTM8t8QrKfVU4bNndyCNAFcyYrEzrMqkus4Mr7jmEV5cU2ur321EihQtQpDTAWz",
  "key28": "5oEniLpn5EHDFfMQvmVAZdApz1g11DpSQWgh3TtBcoiiERAL45MUDShZKTqECqUzh7ViGcrdGE9bfivsVH5kLK3C",
  "key29": "48ZZSLrrfPeJATBGfjE5R3upo4atUAtf5JD2MdJEcybwCKkjctTXzYF6oNMwQqeihdXwE1WAnm6cv8HPYTxqVtar",
  "key30": "Ubno2yCLZ6W8RwgoAteoTvGu5gGuHJRLygRfsjsZPCP4J5FqkZfJJ4hKYRUtnkrXTBagAvoBmR71NcBpMYdps7H",
  "key31": "3L3aGfkQBZcAUvE7ZBb1JEAj8WpF8sQUbZ98tsCCqhy1NB1vD27WYzA6AS1DFYJiyqjnQj7q7GpkkMDfqZdFKvuS",
  "key32": "3vuNH25k1JBq27TxUJKa3LMga5QtuAWG4o2HBbxwKZGJfUvbEk7rM5Ruy8pELRXykS9UExcQqDB7yYajyHRqnhCL",
  "key33": "3DsaFqeN8DqhoEAdvk2nBemvwF2R63cBzvpKkc7FvP5WwKvqcB5ajoJCF4jQz9MeuKXashyQVvKiS5RDKmYru1qD",
  "key34": "4yh7kgMyagKHCFuctixSZVrapvfDzt2mAp5G3JtjP1ygadsVbjny82a8Ni9Ppw7woQCxbxxXgK7hT2aZUigRGhuY"
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
