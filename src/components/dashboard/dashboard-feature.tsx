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
    "25ZWyMff3hPnWEksQ5Wm4azdUBvCzfo2tgaDzjRYDu2w1nVWkxdaLXUkiJmW36i8nCfUsHWamuak1x7MVEb9wGtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iAVcX2dBCGohXbPTfQyvoVJG1dnme9j7QfrAN2dkuR7SiJZCSUgy4Sr5o4qh8ivfTqP1Mz3DUDsTtpCGPTvnG9g",
  "key1": "46ak5sBchUKi1hgSu2TatqbVXqMH2nj287XBYDCM1RguG2y2fUPniGVKjZnziqvzX9usJGiuxBiqnXaKx9nbD8kG",
  "key2": "2TUu7U9GNXD7sLcU7zQhAv6GnqVoYCTtcHtGCACF6djHSHf4hdmKvJGkSbHuLdZMnQV1vUtvgi2yAGxfLSbrd53o",
  "key3": "LA73dVfsJGuCpCAu68GWstepAmgFv2Pg4WVqsZ64KnvWV9oe3icJZqUXtwYsCavP431vPwirwrx4Vstn6QA8Xfq",
  "key4": "5Wr7bj8ekSAKgVALr9B99rrishuCLEwEERjRYnkafemKp5y6kvnXRKFkTyW7xHsECPZnwvuL6RKgEbZ2u9nJ3pfR",
  "key5": "52e4Tm3yYcj4jyrDZZW1TBcbUSzFRrdvXqhjBsNJb6pV3y2H2DXKNEVoBN62PeuddHbFYZjZh4touRc7PXSeagQf",
  "key6": "DZyytHH2eDnAXP4cb2FB3dP7qNaSBkFyijvTjZhyMCtTN9LKfpvGkcPmpd2BizmfWYXDUGLMPaZEew6FN6L7qhY",
  "key7": "3ZHxs2JNfHqpYXwCA2oCCqq5WFnEwNZizexn2ZWjHeqSDXojh6MvUYHio9i49msQn2JiJqimCYWvbvjuEoq44fbX",
  "key8": "WojQCc2bw2Ujpm9QPf4GPphVfYAyUfT6aFssfcD1gfX3r4oBiXUsExhQUbmmBgoETQ1ZC4obBzGnTTUnott7wgt",
  "key9": "3vG2hrzsYLtpeRortBXsP3duUjCVbpEz6DGShfx8VgYxS4uBTw1sLs5WP92DYGCkY5oSxEKHG3Bu23xDRwnXpLFJ",
  "key10": "9fNhHufYc4xmQL57gJ6d6pXJC3nusqvXaaZHrmzFpxqv4hrjmoPEzykA7d7zdU3huaWGmLy6grQ6sadg7jNULf7",
  "key11": "2UmGLMjcJzRtG69U8C8nGNwfpMdMTF9eMctpcz4FxndyNWWhgPBydpvxQHwzX7UL3CEUfM41TWG4NHSkJcLqisKm",
  "key12": "2piYj8tNSsdSapqTL6BLgYSpLceLRELpKSTg3MBjiVGWSZEyoe7kR3X3ppV2xC9iLsL7kzxTQZag64RZjXWpVCQu",
  "key13": "2UEisqiaDK3SZNDH3eSkA7TKZvUywbXFDa2ZF1Sr2N86E9L6mgtWtkvmHMWRqESK21LYE72fP8oBnR3BnFkvVKih",
  "key14": "2mXYEPy7MiBMw28WXC7n2UGoh9VXRsZ8vUjQfncX345DXBbQtk9sWjbmAv9EwY61kP2oLtt6fRGLWF3WzkLiPb4v",
  "key15": "5D9zgch6cvFPgAF7m2m5mxGo3mZmjqDBi7d7SKX8Ewfa3TMiivsZyAQivpFXqd8U6NDg7XNfWMmLBm9XMbtyrgDh",
  "key16": "47jho7fgbzNffuE8KM6FWidQvGAYinSHBM6HByFJff15GaDo3acpcnHd14mmaUkRLiy78TqtfMj5k4oNBxB2i1ZC",
  "key17": "gZffK1uRs4VbVn8shreufmL5UWfbT4b9vMBjQW2LHb9HvnqYi2bta282SAbYfaQUZJh6pa4gYqZiSTuQtMLFhV8",
  "key18": "3nF6NEd7k5a8pBsZ1jKWd2PWCu9qZty4ZxnXDV7dwrNJptLw2aUNzZbQysyFrrsiBtpszx2FSKXjn4J1YJduzcgR",
  "key19": "3N9D2YYJJZiqBQrP48C7ivicEMrVy3CLPaVdkBAFFqAgciEeUn1w6DTJjvjtYeoukvkZNqDoqA9P5e5Ts7V8Ncme",
  "key20": "4NzMRHsDYiRjzn2qeuKma3NWj3nAmr2nJrj2oGEadtKaJjpARSekHQSCio8frjeDEnAyAw3RpUUZPwq2uvM95kAr",
  "key21": "5MHL5WSMDs2KdsAswx5QfUN68MPxDCtkZvaqCFTZBvRADdafeffEcs22z7NB5hoK887pj79GrKfSMyex3HFD64i",
  "key22": "2dU7JKfrAvX8D1jkayyBE1dyw7ELNvJxwfVbtD9mukDtqJwHXCDF2LEpBVysgguwuunEeWDhzkR5iMnZqT2yP7Je",
  "key23": "3eR1CQgRT71q7ME9wfZ9Qinqotp3V9QERhfUMgsBZva5oWK1cLQKp3QSBtFZuu2YrBADPo24m6dB2eVhzoDgFwTg",
  "key24": "3HCEjWW8vGsJVT69t36nZadK4XeLVP23cB5q4vhvwWr4fLZ6CA1LBNEFsVEQhyQxfdQJmZPKS62jMWcjQrstC2DL",
  "key25": "3EvNdg9w1RQPoro8C35gHpXhA6uSQ4Dkn9McxdPKAujZaTyP2yEB3ZcGAnFNPLoYuAhb7VyRudC9qC753bM98JEL",
  "key26": "2iRfL7GAcSpg5mnd4yKb5sMN6go77iPRbTXZjuxPrkBDbTLVctBEcp3boN5STEtbekAkw7JSae3eNDfG3DuJjqyt",
  "key27": "zXtBSm675oGFgm56bA6iFZZBYLYhMngxTYfGKb5m72LZujczMoYA2peXzWrJuFE2EswyEJgfn2Xc4pAfexThQUh",
  "key28": "3DtcGqBav4sMkgDhr7GykcEaFtWWVbjR9erNeZs3t5GYJDeWvXFPGc5WyWwGLL6MZVJXDTcJV6iyPGN7fixJ3ADi",
  "key29": "APyfjdgEeix8Duiyad3V6vDLink54QyXzCZDmVp2SiU1vMQaXWzG8zSFt7Tgewrcy7n5YBr4YmAW8cq318bVhqt",
  "key30": "4UDTtUCwLysZDX6ByiqpTu2ZVtLnVWyaLXEGLPuEpVU2NP2emYUunUDDMNszwwaD37g1Uoq3pvVLfigNy9fsNTe",
  "key31": "6RE56iJ3KJEv3jPzFRhmf5cWxqWt8Y9RMwTBQdVoj4JKYdn4rrhw2DBiBHHk8vuJUdbdLwWSrDNyjpWnS8vnMpf"
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
