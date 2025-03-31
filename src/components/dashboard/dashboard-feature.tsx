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
    "MXAhvbNi18rQvDEhgih5QDK2Ziq6L7xmtAPUUV79oGvBsy5pQkmBcYLy7ax87vQR3snzAm8fkEHk2fwPKrWRxcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ZJaWwVjeLWUk9bzeUwpcccMFSw1VeWEZjbFdPVAXsX3vLtbqyEdNw2YKARbh19bqiMLYcQE5RvuKffcny2DZCn",
  "key1": "5FSCnByYk7ppPpedUV5ak5NxUcSUqabsDVLyWGB8juSFUgqJStdvoBFnz614VGE92ae5yWPQscYSXq8xm4FYbcHf",
  "key2": "5mXCd1YLVWmEGgdqkac16ajz9Vx5DcAQQcRgBgw5VrCUpChAA9rURfpxM8pr38FM35QW9c2MR7i3i46FBAhPzWjK",
  "key3": "3MfnLnoWhZMqZYb2roFj3fyZoRsNMbsdmt2RUZz6sm9XjtVXrBUA2WVWkKU54aDCdDvGZpX6dpFJP4xHduPRKknW",
  "key4": "38fXbqyuXvjRNzkJ5QtrU1U3YuJETpMtU1yaTDejyVFbTyxaQYoSGbdQgR5gVrBzGjuUibKkthRVZVCddHm2LFWc",
  "key5": "5rfsuCg7TtpFqnzn9PeRFqkjnCGVNA6tnNeRUd18D1ScRqS6vJYwgf1WUCfPMhXtBv5xJSVmeUyc5WyoGXJNQYAP",
  "key6": "4SNP9rwaUQfNHGHQ7bW2BdwGoTNfvxA27ecvvoqgRzTCG5oQB1wN7HFMU7KN1ibPkr5wpZNmSvbEBjzrif4BeKzh",
  "key7": "4Gvx8U9rgMffgjyVa41DS1QjzaE6YusK3JMreu6AujnU7wTcjPCJzRKfYw5cCgDziJoRR8aaauyZnK66MC9VmG3T",
  "key8": "4UHrCyK2DnVKVKP681KHiFQvG1YNeV3r2ppMoRqDECJQGf2ajnh7Y7YSoynoyrKAwgw3jqCSs3TSvc9K44RdVmbN",
  "key9": "UQzD3MMaNUamU33hTnXVGDEFiEPjhboU6F1XkH3aHvVeCYcu3pB1DuwWfGwdVVXMNdGmM759THe4z8VnzkmbW7d",
  "key10": "5hNErdfqVJ97RdRrXpS4n1jyFtnjQU9VNHEGgytHw3RHE9u4QuZPbwKYmfWMbCnyg7h4aWb1ePD3aozzaottfh4f",
  "key11": "5ReNjVTg11nLa6fGWTRuKcj7eckZd3yC1xzba9gNxbXsvsGhnmRQ67Ekz277jSYNC4wnJhW7cwihb58AhNc6F4po",
  "key12": "2TuJHJXaKLgBPqNpknsBQzPDgRjsQmTqEnnBDW6HrnnWyc3MgAqgSyoYrycYHMC3Gw7VpNP25VY4H7WdVz8LhUSS",
  "key13": "59KJuKpw46aSQLayMBgdxDJ2yEeA2JDTH8d4YpgySDCiuqpRKVTwFFv3VgE1JWwR3vyByNoeTisD1464ZgEpbVGq",
  "key14": "4qyNx9M64nqRjnuDEV5iL2wipAK64ZqL9AKqgidK9wheQoZHZkKhWCk9H6YyNvoN3PUHfFMYDF7dUKa63bd4C1bF",
  "key15": "4vLNjXzR1uH7qGhjf5iFHW7XEU52G8NLLt1tC625ZWNn9NjJpPjMZMHgTqY4XGc7dTTRoeKpq4qx6eXYgVv1ZpDA",
  "key16": "57Ny4WmxYG3ZWGWp71xS6wrC4ZRtqPWjeLvVzk8aY7DYGLax3oz3V6EukvBQQb285HGX94ovY5nvGopTQpYmP8rU",
  "key17": "SQgbns8EJRC5WHqX8soJZev4fqwCdTd4iXC6CjMmp2JfTGNsdVHAAZ9gScmSGgFpxGma8vk1sbsnPwUHD317SHp",
  "key18": "2y5tsipxervvxYrZtYj9Mx1rwP3i3orfP6xgFizpxc8s9Vh4UKJtouuwXwu52tjEZ9VpBYMCvFgVMHntCHiyJLuv",
  "key19": "4yPDZXrW8RueSoRWyRhzyCDgoLxr45ccNfjdUWLraSfz3j5PJZM1BU8w8hJHMhbWxjgUwkBGigjNW94QjhbRPBue",
  "key20": "5Z6U9qPB8hY3XBht7emkYw6yywcKncaggihgA8WBa4ZBS3fq7ujwgqmoRhC14izbAG4TrAJkm8bnPymiHXohNQGp",
  "key21": "spvEnC71wLT9QzPTRf7GKVGTV86y3BLk6U8KfNbJgi4LpXcqj21s5sGAt25gS6UgAK6smX9WhVr5Ldrv5dfoxHP",
  "key22": "yU1hNw43Ywv4DSBrq6EMghzY7oyfwgqyJoxEnLUPNPF7sKLhAcYSjY5sUbib66jtRa8PENoEQNu4rxJShfSXCHY",
  "key23": "2xTKugx5qxZxfKiKN4aS9ZTsXt7h3rVEtZfyvWKmXRUgrrjAkVmbr7Ppa72FY8A8PyTkx86f61GxF2phXzj1Uqs8",
  "key24": "MuAptW26TMNji3iEK1CJ24ArjRhYUukwruwLyCHUdonLCJbhzJ6fXnsiPYHQ6zq5Ek4DvtYFMGFhF5t65a85nKU",
  "key25": "4s4cERSVT7LRUS3CK2pGDqUx9HuFxZnTisKn51eMMD2ikvwq3UQcHe3fwgE8xhdpDfTd8RFVA41YKoD9UdUd6fdp",
  "key26": "66ZdFPNwBekXD6mZiXAkn7gYQAqTbNEh2VLPYZTkLgDFGpsQCsDCqy3VQ6VEBMZf5AaeomyCGk33SVu8jSZVq5Yz",
  "key27": "5tSvyRixmcwi51kFsr84XETMpTSE3By3CnLdzD8Jzr7dLcjiz6PgS4iib5EejpaUy7dmUsJb1HiUamyhsjRcdMGF",
  "key28": "51eT1ToscGv4noLcvkLGG4ZMqengao81Rp9KgnXb8xX3ZZDyFPcy2hPeQRP3bUcuaNBscmD7Soo5ToGtSMqHyw7e",
  "key29": "oUPLDmrv6nMpQxTJL7xXTsDvhasuDBPwdSHKrPkSgBtbDdcr3yVQ6YQX6c7kFY9s2LHsJNhMaTHD5Wq7JTmXhrA",
  "key30": "4c14ddfwvYrbtHtQ1r9FtTwtuZ8JDiWHctEQhv3sekUaeEgkbzX9jr4tJdc8phrrLDM6EfPwy2odfk8xgwWPf4UK",
  "key31": "3w8eaVarRXDoRhPFSPzhBx1nFWnB26cjgoC9WgoGfJ3ojgj3R6sw7qvKPa2Jk7kYSuVfCcXmQaHQfkZD7FwyDEwq",
  "key32": "2yGLw1Ees4u419YPUctVz3fE8ZYQLqiAqEnj5SVdPWCAhzRkTCwSWpqHAbmdn5oqPEr2QPK55GyrhJ7MVLNi2QT1",
  "key33": "5bMC1Z1cuZKZ2W2SWiqC4Qg4Bpa7jLDDjaeSSzfjTxCoScBY5r5d2VcDumYn9HWm3UMZNdkVGANGgyarxhHFomGi",
  "key34": "51xsoxRDLVWZCk9VaUUaVECeVcWQBWkFSBwL5518rQBPRSZQs7uPiyJS6JJTuAVVhbgT2zK5G2Wp7bkfaU311SFd",
  "key35": "5kHW5Dn9suMGEjhSYmYDvzfcXhpKyphKKJyh8gW1bfcxLiuir3ehmHFH1PawRg6roLhNBfYrD5iL6nrkBDFJRbvK",
  "key36": "4xKP2FHDFtb1gEJi5sXgK1vWcwCyJ1jDRc1BszDA6Cavx36wTSuHoqqtsdKa2UhVdzMu6vwk1d2Cxt3myaNGTTfi",
  "key37": "4TNHMrcoRca7ahTV2vPxuGjTzANk9sq1TSZGzMBCM59nHVSn4bB5EAfcQoTW8wDzDZ2L2W5LbXoJZ6KrYjmpG68v",
  "key38": "2wutw2Evbzh9otLYfYPoxNHLp4SkdPGDcV6yDmTvUPM4hRyh5EfFi4LQwaqDeT69UqEA8rK4HPo9h1E3Yoh32FCw",
  "key39": "4xkyEyGKchCkjqxKqW6gEzyEFJsNb7EnC1VMBfhyUyQo1uXpn61gLPfHaQHAsnZbAg7bxXa8KYFYGSjahoMWrD2X",
  "key40": "2BMgXpxkKugSW7bEAVrYgEyL7qRMpGLfD3bnndsE1oK2GyLdrybRFPPzX1bo4r2511Edi5ekxVcwDT6cdcdmP1Jb",
  "key41": "Jnq3iVjqbriZRg3qzGvidkGVK2Ta5wZ5zSgAcSTaZzAKbGGgaUKuxjYSKruMcAYFeDhbAZxNcMeekkV9SHkPbJr",
  "key42": "3sgUBfgEG5r2yrpfNbZh2wZAPGWTdYKerQ9uuLXq2Ekq2G9YrXSEMs8nnvUY7S6VEApM5VfHXBjs119XDW42tgmP",
  "key43": "kpLVjfjCfjXKk7eGkgp1AJsC4TkuRkugzawLaiLbB5Tc2qT2ZDeRQaWvKvSRZ6V1zGGTpvM96YBNPHJEEFUpdXz",
  "key44": "2Mg8ejwJFH9bZYFCauQF3ze5M1PhRvguzGpqyb9LPFRzPLzJYaRhMCGy4jsyj1CijzjAsKi3d47iBYpqpL5wx8dU",
  "key45": "4FtUAGwjSkaQEV39FZhsu6nHML8u7ThxoHZ3HGpx27CmJJgKr8no1zMvwrTWLZ9N9A6ReoE3w6ZnzCikkGnByiWJ",
  "key46": "5qYVZVcpkUSGBmxsWjpxiHmuvKzkNX4TrocGiGM4A9LETCKcnJgRPQ7YeYGZH8zpqExKnxVVNYraHcDFm8ttc94R",
  "key47": "ebbfCzBQybURAQfTPkCbk4E4NfZYP3surr97ajvScusHqnQeWMRmmiZVXUcpU6JfMEXFAvUkEUf9TZPbDt613qK",
  "key48": "5DrNdum7c5Ukek4NSHJbH7r1oPV5TPSwHAh6DABjc76HEXY6Qxt2VvtwrNKXwitHMb3Xux7LWVXXPceyuavRw8qw"
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
