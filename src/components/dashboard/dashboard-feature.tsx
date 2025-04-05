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
    "59pDmWorrWpkhJtpU3uLwZXrY45WgMGGeuqCGUeuTdARSUzoh8bK4T1hFWVT9DWBfhp5wTyESXCf7czmYieMA6vY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LzmwzdvftuvFWC4zdiJjubKAxzEE7Xeus77YhLEghfVWW7cU7HZmGbnYuZfckeQUkcxxkktXEc7TtRUwQTyJkub",
  "key1": "FfbzaKAroxtEN3ZCSSDt2H8qvko9JnVZ6N6i1mwAxTcAKsxDPZhekPCHoUBWG8aMMd6kFjJPNcsk67une3bQuKz",
  "key2": "EUESWvpgi5v7GoSbguY8vzgW4QyiWCp8XupvuZrdD2JpH2C8jt55KheeE8rFsEtoEpUdoLJVGv8P6oPHWaQTuVt",
  "key3": "36HodRwTDf4tVJvSBp28y76qA9S3UbyEBzNhzx6jAh5NJVr5kZ6yxXg9GLCCxg2UY6hHAVRKxhky76fFBqPJ1WKv",
  "key4": "PxmJ1FJYbgcDkbapwkSZLfK7XoNg53eNdUDmDtM4ULrMsH3qNSAGXTswRTSxFGtEMMTPXjv5h5E6isJEpwGLbVj",
  "key5": "35fji1b6K3cZX6dmTGmGdJY8AokXqC8iT9sL1iXYWvdzaf2X48pHnfz5BTwvXusueWCcMGud3Ndvo55TQ6hS8kav",
  "key6": "4NtApvzJjthUWk9uzuL2GWMHd53uubxNQe1JJmNqZi9PtD8R3GUfn8jr9LvTAp1RLNHQ5U9oQFPA3HKhsppS7fT7",
  "key7": "EUf2BGRsgHciJWBgnVBczXa29b1N79VSfKaNCipdiaKrWMGJ9KkyyL3Xj2KiAc2JZBLLayTbWwyywfvoZGH7ts7",
  "key8": "Rec4TmTq4zYh9kav9y4p6AYbrDwKWN2M1XsF6ffquezq981iwPob2pZDFY9FRf1JtknEzGqjfDb9mRHHBRzdq6j",
  "key9": "3AGWpshZmuz7CewPdptWUghJGSfv3WQERddQWftJMvtgS6rTJrFYY3mkU7zxbuSoAVnHvZQY4os1wRyQofNSWj5A",
  "key10": "5LvSp4cU7w9CRwr5DCrEJvTU7Q6PzLaDviWSpJSQHTos9Cqo4riNnPGEsJqzTwsQcTadriET1ZjT7MmfhVQ7wRpb",
  "key11": "41dkTLA2bAGPsFDYGSFSr8qqRdjmt3KD86qQU2AHf84tBzahgpEUksfEcTXbBJhvzoM59NxweC8rTdkGiL4mbkN9",
  "key12": "3BBLo5gH72TYumoAKQGhknZrTWNJEK8AcykYeq3sESju2BpbahXsBEmWz9GEachJVYaeBaA7P9a97oPuZNTkMjCC",
  "key13": "ENds6hR2HCiwrjKyYbR3w2Jc8k3zkJPMUmQShq48rk2VYdNkEjSbnP3nMRKkP53A3Q7eiVxsRKwrx9NBBPc82Kq",
  "key14": "5xfDxPn8aXGFWAnMhyH7xoqjnJS2BmGAwBhCAZcFuKnrEwdB26qqsgSbCSA8SY4smcY837qPmiMTTxTRzvnFQbUS",
  "key15": "4yDUqpLBYMb9uMVj2zfmpdFd8j1xmgu3p9PsVrcjbMzzsWT8HQvC2T1uvJRpWPYtQuDjiQDGTA7UBk8suKwxFe8h",
  "key16": "5EFrGohpzELyLsKgAPhQm4pieR1amoN46EK44NECxqKEUpjVsu7ngUMeXrTqk77txxyj5hbQKHU6r3cG8Ydna8cX",
  "key17": "4qZQjpFrjiwngjtR3XtqFd6hk4QbGssiLpCw6fxHQrhxAz2WFFWpwUbdxbqfWK8L5wtFDcm5NA6eSChJF7Gn3151",
  "key18": "4y1LZcubpjYsf5hWvCgLUsBRwWn3Ewf1F5JKgQu5TbMem12q1j86iacj27WZkLPEybcHaEKmxNdnrYMEPwWxeyTY",
  "key19": "2jUvj5JxXEZ34pxei1dAzVn8kNEReVgzkB3BxLHLPAa4gekcsHLTXdZfWJYG26EAapvQJ2wgqTz6ezoRgeCh5oGE",
  "key20": "DvS4dTYNcHvxknYGrZJ9yPkrsxjL18oYn2ybadg8LjBr5f6WjWxAfgynsdptM4CmoT2LkD4iizRpJ7rXoMZZoj8",
  "key21": "2CYE8adDKU4Yk2HosepPicACcgPbcZKjwF3yHEdtqLJXFzENkGJvQhtuPH5bPYsEK9QdTGsoN7hWjSnw4MSWim8B",
  "key22": "3XzYQJKN845YtjGzQmfFriXZkFUXayN97TeQfhDF4yinBHZqxL6nsJxiWSfSuWsySA4rXgNNGWEXbCSwrJaGFQsM",
  "key23": "621xxRE5d2Ym3sEJeenZQ6HiccbuTZKNm8ru7pRtoR9JQwqajwcka5rAxvT3YUMhxhSQj5YxCEMSxZNZN4YsgRGe",
  "key24": "5vbZnz2G7atB3j7PLmNjsF11dJLhyPG5NkmanXHE7g5264M1A64jvKpDeoawhcDAHUox2rcPqWK2YFK7i1xXCdtX",
  "key25": "3BaPq3yqADrTGitZbvJS1fndvyF26jaYeTJAva7NHTde8rioLN9L4kcydEZ8uf4tG28g3VJmMPrPgzjder9eN4Es",
  "key26": "nVNdRGtqvytqv1EwvB37hQ5FXKcxj6hrCHuk1GN9JezQFBGftjkJVYLy3unX6HiwKu9w86WMsD5dnNo8xuwgCtN",
  "key27": "3qwLB29VJhX3Sg29c5C7V8XbYedF9AkiA5AsmeKxrf4JybQiaxNjoCeWQuAfnCDgwJ9xm3DDbRVBF6cThyQ3J9dD"
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
