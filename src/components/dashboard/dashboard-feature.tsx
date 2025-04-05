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
    "5HvCX4VMs4pEX9HbCNZQZq6yS4B8kSobPnFRnoHgokAUQURrronumyPqCcf9EJVGsGJTCSw5P365TQ4SErjUCP8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LrkAqWV9G4M4UqDSQ9nyPAXgwhPRuDXRxcRDJPSa6KaXaMesQ3FdJWFV9Um21mcVtN7pCzE1PzSpe6JDzBQHDTp",
  "key1": "DfLfciYxP6vYyCqqKAncB3m1Vh2weP3krYy71CJqyGBg6fexZszWPTD2buUpvFGm1be7gF4YgniirXipT5B3y3F",
  "key2": "4TCHJxxvS8FY4Mh26Ys3rqStU59MtQ18RnbjpVQXmC1j7zs6mzohGFnCBQt3hT27RsYSzfbhusyMsrcSfna7nU57",
  "key3": "yunR9Y2dpeYkKumptBAmnMkgxaTybZ8GQ36mpookm7D7yxisfF5etf6rZ2gERE1xk76ZvC8kAKXbsqco2TthVYH",
  "key4": "5MMoL1XmohgVfiP44dfgjFYkfBA7KBYzJC5MDi5nb4ZXBCvouwj2FNpv6V4a1q6JxvD55CDPUdESJqx8DCLZEPFc",
  "key5": "4wvs1wishDQwyrwYUfsaJTJSEzUkCDhAwNUQD6QzPpB9v5Q7yzQACX9BdM86RztCpFKiFqzdvbaNySNXJtTHyfGh",
  "key6": "z53d7BnpufzbEMQAmDjDy4Ah3TYkPnzBWCkeedCsQR4WdG6v4wuS3umeJMV2kAbCjq11Zgopb3cHQ5adA6qkRFd",
  "key7": "5Xmr7f3KvBWmRd5AwTesZw3jpQ2pm7rPbeB5F4q1PkTk3MDmdkSwrXGDwUjF6RpiGvkRKoozGyVxMhGtaD28LEBH",
  "key8": "5gJopyVALw1MKJDvgVgQqY6LoArUh8wXcDQ8y8VTPyy4NhWDH4PVFMHZca9cW2VA9BhnYmwVkkgtH27yw8p9VEzH",
  "key9": "2wvfWunbtf2avoYR6ctgsUheu2MJWPrCWTi2NJ7o62ZSqVjm6ZHT52EKoeH8NEBec5YFnEuygrYTct2hDknQeC5C",
  "key10": "2Cp83YJspPZH3TNR4JwyqJ7648VAP1q2HdX9vJXnZfiKEqJkCm2w7xdZdkV9Hy94Av1q1BUQbkjB46kRLwmxy9ZG",
  "key11": "g68dDPjb2teyN7BwanSovQa2c65MxsDAmYxwq4MK1fRvEEjTwDKBMpDDpec9Lx8PeYyimy4ZBJr8C6tRGYQ6dkQ",
  "key12": "5su7p8FDzL28sDnqsn4cTCziGtdzjzQwyBr5LiqfoJjvPgzwgmpiSR1ioxfTk2CoTaHA5KH68MZsV3dgZWxVwu1t",
  "key13": "jJCHKdzdANbHjrDyFUU1YbqyNnGSDRrjtz3Y3NP99UCbjRAGoFGDeNmnzUQkMn5q4iVEcJNqxotYkd1iUpBVS5a",
  "key14": "2LDCpVRWVFR22pvZc9t6qwyhQWqtc3zMVVQbFoyG8GpyEYgRUeeyfEQt5cLbmwq8LHKKBPi8avPf7bL1swLRQHt2",
  "key15": "C8jmEP3LHgtvgjvjy2KxbaGEFzKuoKGWf3L8gyrrXxXPJ8bJd6xBXiXbYWiVkj33pz5Lba1vBZVKADHVgi7LW21",
  "key16": "46unBRXCn8beGZhP1jodddFG1C5Kf6iX57PTiz7tbpC4VzcuTM2jk3PfawovQV34oE6qvZLs2Jg6QYUJjepGFm2t",
  "key17": "3QsVsyPvTNGGPiD5v2NBSfRhXc7kwahWyAB8RfjV8FBsL2ukBYgbBR8Ph7TcoTK4EYmyw4iMhDY6YM9kKn3XW6ce",
  "key18": "itmK3afJB4dkyM15ZEGV21saGjyqN1SX5FFJpkrzuVNCEoW17vMrMfR9oAaJV3gyZa1H7s4G31F8uGpMHiLKAQx",
  "key19": "2cihBC2eJUFFocTYWcT6QdaScVWZZRHFPNacqe8A9hCXRQ47kJDDciYm93FzQ8CHw8KRXSkFDUk3pcRsZYEDzcVd",
  "key20": "4hRntNnQRsGhnH32brvL3ZvWq4Tmw8Es3NG6xiTwQouwWY3Xd4t8uU2sXmb1B6qiJxYHBy8YfwxnCG7eFpBQFd9m",
  "key21": "2vLcSLHwKx6cbDcfkranGfwoBRBzsqeMeRsXz94hi1p7AgVNPPNP1BdnP5b95wzmFcFUTjorreXGne2e6Eez5WGw",
  "key22": "4wW2DHyyaDMg554kwBYs4MDs1M4or59qvL49V6Ei3rq53yJXQVod7g3tdwHJLx6yTCZRYNrsV2zx42KccBE6UoeS",
  "key23": "3ZRrBJMzPTpEcpZzKRL7P9fvTo2KxVHspKn7zdnkaJgKDFVZfHPmtD8TQouR6SuE3GbrTr3MC7Qqx9PiBKpUjURN",
  "key24": "2Lmefsyd1jzMifARNwUvw8e3FDmsNrZMt3G6U8Zk51msTdtbELmzGy1hNUSvduM5WL7vnYT8xwSH5y4GHfayhMmU",
  "key25": "5HJkMDA2YuAPG9D2XakZZnv9esXyM2uEc5ToRrgx8ek3obxiirvVRSFuN1tH6YGuho2FerZe1jLx2uhu25Pdfs9f",
  "key26": "5aM7ik5AHLiea9TmbB2J2D4f7pcAz8vA3Vxvhw1EUBzHXvn4Tba4FuVWJYhP7UKrLq5moxZUy1UHTufM49fLDEYd",
  "key27": "37gxoCSdyjvJthn8ZYELad4KsYJaMEr9KYiCn5RXFHtKdEAABf2dvVwVxL2Wu7nNzeRVWL3w6wiudYVnke8bh7tw",
  "key28": "4rsDHPEHWZ5prvZGkMMinhifVWXXuLQj9xs3Pt6Nrz2tKefWXyfmViPubkFFdBFtQs87vs2XXiHnqEjGeZB9Ygju",
  "key29": "oK99t7oRPLzZnJu2XFv7y9H5PwmruU5SWoLowZjsJGxnmzNUvmtLoumw9mmNn2LQBMj8untRV9Sx16UUXQB6Au3",
  "key30": "BerxYsYhQeMpr6sT9mGThLFCD8rN9Hf9K1strXZ9hWbz3SnmeeA9JRpe76MmQudPSDVb7hNzbL2JJ4qYi8Dsmev",
  "key31": "2CwsGFqf5Q4HiQ1GzPSCaakj3bPfs3DFshtAJMKzHmgXZjdkxSNaGy4iDBExt9xfT5JjCK4CDVHv4nXYq6TbdPr1",
  "key32": "3SMfwhDFnjxsYiGrTcxyKJXAg91MJLkpJy4Nna6KaJkoWTQxdPGe3wbCrTuxnbQ67em8jxMAoP61wxAb8yQYuwjT"
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
