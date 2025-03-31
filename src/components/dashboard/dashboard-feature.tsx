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
    "ADvyFiXxi7FZNkiSxH8dQTb6FWDSTLpoXjpW6QESvedf25NYXDQqQeQVKi5kpBK8QuDVKdng9k3UWXLVXibpD3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qQ4BQzquEdaSyyr3AEfUcoPdws5dw7H61sZhspEYBMkveTEqyK9mqaE9oKUrF8VhPHxeqwM63NaD8H6kNRvXP5T",
  "key1": "4afZ8hP6Hdyqb85wFkBibKvtASatNaky4dVCDkJ7EvGbbHJYmNNawTD4MVzcndVrhJLyExVJXDghPtWan8wcRKtG",
  "key2": "42PdVArDPfrd9tfBGjYddJ7naPYiPfjtbr8d4189TeF8gxjhqE6qq7n1yhbe7i5AEVPvaAE8E5D1EE2iDQ8BWTKG",
  "key3": "2DPnvXJGtmBDmuuCKZKxJzssQYrye2L2mLsXVY2qYdXPVKL2ESAG1xo8ztnj9vbckwGZeDvZngGnPshxropewAXi",
  "key4": "Y5ZHnZM23SSueiBrxo6uJp9zARPpwmV7hpiDFtP6VniFRw2QoW886Vq5PRGtAKqBStNXdVGiEaXHv4YVJRstwT1",
  "key5": "54LiVsS2HEANTAjLErPU9Td4dt9kJASB3vURowbu2haTsGXUa3GJeJy98gZrR9tvjRSwThrq66WMQWxe41xK1WXh",
  "key6": "v4kUQe6o8X5oDC3xizCWfF5Jaz8Mdy7fkkvVoqCFSJp7G1BXvAvjjvbX69DsdeK7Bn8Wc9ofom5GQ2jnccnLk7r",
  "key7": "2c3H73pVVuXh9paBzeDCJz8an7xRN7HUzRxQuwaPQh8NyHJBgsA6Dar2kb7Z1jx3kkgzphpf4QSM2venFH2qsFWz",
  "key8": "5EXQpGQhcp2CpzWsGDqc3UQtZib6T7JXope9eJZ4N7WASYyAh3ZM7MMUbh6Gpk37jbVaAay5mre8iuskYkCcfVio",
  "key9": "2Cv3ajvNr744YuCDnxE92wngSF4aSoeWGxRrjnv2gz7ne23xmsGV75ADNqdr1qoHdDJs6L1Wo5o4h8C6gEMo6pWy",
  "key10": "3htaZjkED7quTzc1QuiEgbo61CctNFxEJdH2Tb9DuffsBzbgNUCWD3xhh3Bpaf5LF4s6PBZptViV1vPAVDWSZ5Ty",
  "key11": "5xpPTeQadMuakx1MvConh7D9vRc7P6rQH3Ut5H8ri3xVSXoD5dLHinE1CRe5MLM29ETVwyK2dZkTBUfZwGaGu6mn",
  "key12": "3c6NtciRv1uaQGwsjr716JsbiEJjJCcjwF6WAM6QSBKFhQNaZmKdVruWZ6rJSwrLpcm6v7U7R313sWp9QuztZx82",
  "key13": "5xJkWMkq1xTfe48FpZo2QNQxRW1o4GZqTggSvAnZNS78B5bh68bXWDi3Bg3n1nvFvsnPLZwZ8BYkLYfL31hvdFny",
  "key14": "2NEqixehuo1xQDfbg9uFGnFHgbcig8DYKnRePbvKrAAu8nU8b5tWGQPJrnkhcwW5mFKU4EVz3EMVwpuAfbhze9Nx",
  "key15": "4mvfSUSEvWuiQcbwdTHZwMbktU3eyHTYpF2Xn9cdZn4KJAv9AYwEyjZiUqbMZTKM6hUsv29uWBvgH47NWAABdDh3",
  "key16": "2zLcRwL7n2kpa3CY2JLr9Du1jhGUmb6SGUWFHqKjHQDQAvWgAYMtN98Z3v7v9vBBs1XugGqbVJHfweuEG8QfBEsP",
  "key17": "4uM2SguD9eTbviBRuD35EEGTUVX6p6Ki7dTaNd6YevfmAN7w9PqjeYusZZf4byMVVk48imuwRPy6jBky1skyWBsQ",
  "key18": "4gGg6diThrR465U1UcSVmwDEM3ovDCap6k6u6PdjjJWy6mQh1tXde6oxueHC7gaBa4foi6wQaekqDQM1WCcTntDN",
  "key19": "3eb7Y7VYLnvbsePDqT2wqW94JXXVxcYAQAFZ97vBZpSvH5zg1EkKLi2Nin17WkKMCdz7A2hg4UMyY5u3mWXeJSs1",
  "key20": "4f4aaFud5xNP3TeHPKhiK3DzSzGatkhxXut4oKoY1mKX6vxg9L4Y6x35fg9LVtgdX6RXuLsPnBiGBZPBjKcNDRxS",
  "key21": "28y6fzg4g96eZWpQqE67VzggdneQZDFP5PwcufbNFDM2eWVEJQeY96swJU1eRNqXGj9KHMjAX71QFcL2jLjJkpd2",
  "key22": "5DRFLLbnnuVbXAdTKJp2sL6NSGhc4oT8e4QU9yCg5AGzy2KPCCUaB7wshwq5gFRTVjEMW8AZ8JweuFTdeJUr5Rnp",
  "key23": "2WiEND75KNnkLtxABNNEoHFrsegFXUdgnz65Tcjb4mWj7CBBivjUJsEA32rTumVNJ2fm4tnFxguiGDy4g7ieVmKB",
  "key24": "628MDi2VMHztPRLX84RUMLqz3BfpJnWNN5yf1pBJ3HqCNX9yju8HfVAUfWLxWf3F1jBT1u1enPsKXK64PsHYrYkg",
  "key25": "3CpBgiNu9WAphK7qZXtxjXyKCa8P9kmmvDdVLrXDh9W8MkD2R3kwAYruuMTapdVHqaYeQMpa9V7H35jCNGgJdeng",
  "key26": "4WJQASqJ6bU3iLZXAPZ98iiN2YpEXcsWunb5ZUjeCHvLDTNHA4i8BXzwMX4MWLwrGsLasvkqvr9emVYkaBQe2515",
  "key27": "4CZ2qJmTYp7UccDHwvBwhVghRQCw2dSXvVdtQ1YStsKhfoTUmhyM3Y5qY3DMhe2nERyWy9Z7EUbYhkJzEwohZqKT",
  "key28": "5SDHZ2af6C2UP3yRsz8JscaYxnsSfXdnZMZZwgz6UiBAKdULDGJ4RP6W4KF2zorvPYCcY6ugYNqndT997jhV6zqS",
  "key29": "49keGheXe4qPpwN2d3m9qx1BK522JDf6vpevgfNR1XZiYAmJ2amaNkaUc6h2iwaRhVadbfvff1b9BUaDQ4Ptzuav"
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
