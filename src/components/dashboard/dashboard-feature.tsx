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
    "5BivxvRt5Pg23kr7TMPhqMYXcrZDeXWV6SYkcfu6CTzPcxAKb9KpqqXEPNiMeNhMhwCjUMmaj4XrtntyVDkbyWdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32TJXmiBxvUGNYMSLn9JbVeHhmWeiwhqffoMFe9xo7EYrYXo8rKi8Zv2PPXAUCBgsDsBFp26H6Zw5PJ6khWprSq7",
  "key1": "4LM4ZwmEAs4nKaBCrG1vA7kw8bm4whFX8ZxbRRcqKYMbkC9nhncEyrJGH1z4zzUwrBAmivNBFEXfxbZx6B2PLWqB",
  "key2": "2QYEuzTo3Zw4163D8mEuL2r9kDgjfYR1eCCWA2q6w6szP9AsNH6XjbPP6DM1Dzebv1gs81R6FvTfKgaYYiipfjNK",
  "key3": "5pxWZwBiaJLGZayhZxmMRJNkzPq75UtxGQApNdnDK673zMB4L4BDKC2ZiKxqzojwShS1SHsaYBhxrAeEprdrb43D",
  "key4": "5YYeMrFSdSZ73wJH5eHZMr16ZQUmFeHR1FLj2ZMf6fHVfkRx9Prr38bfCsi8XC5R56UTrrzZ6PhkL7isWxEC8gWE",
  "key5": "5KcjaJnTuGb9LYfgGiYMqos2bUwqsTV3T314LkARzcBeN5koZsHdUzHapeWdnhHPbNz3zJWkfbCM4Ag4mZ3hysmH",
  "key6": "4z7S8Jbh4QxTuop1fKnkuBoVfjVJvyoRQni22f9AK1sCTugisFyLXWvbed9WoNWXMtFXt4vpdHsmGsXXF29BEk6n",
  "key7": "ymURzgVxMuMWPgBU96BVGU8btDRLqhq74vAmEHwefdaohVJjk4KQx8K7JdKVvh1KLFR3Un9tgCFRM5yohaU1X6e",
  "key8": "tPDJhHXU85muTo5fKaTYmyB5YYGtjqmk7XB17kB5KFn473VZBqfE9zW1KgXdmkop5XM6ojtejoVCjDTwCPbKX9F",
  "key9": "2FYs6e5n1AMBcMzqv7tPnFg4sSRuHyQN4L72RXj6LSWSeCdUy64iArMub8GBDNaM11VcnM3MRAcymPQEvNVnEGhE",
  "key10": "2iGcYCEPSZRkYj62y7KGycpZf6nhAaMN29icb25zx1xfd9fEMbN565cwkB9PYzB3knuHbzq6MERuqQTEJNy3soH6",
  "key11": "64nsf97qYQnoHVZMymugXM5JxWGbhDf2rZR2AEbBpM5r36nYeAPseSRr9eWk5EQp3mSgpHVhh9K7L94t8hJ3tMpA",
  "key12": "2v4MXSirfj5VwBFowQKHnUuFArRD8ugUupkkQJsTc9yVVKWYC6fwvDJYfKpK2fdePU9LKacCAtgJ8JCFHWBpp3NX",
  "key13": "gaPq5oiMv2mCT4VNyuF28LfGBh7PR5oBZxEXpyyUGqc1Ngpeha8fhuYNw78u1QLeXa1o6Sf1yy24gcF3Zjuvv58",
  "key14": "3UBPTdTqjAPKHhySjzXF14YCVT9xdaQoQkgrmamXQFPu1go3qjv2ynfewvH3xbBvDrQ9o1LUvxT1wLbE5q8tcZPi",
  "key15": "2hSw3koWLj4w2FZ6dEgjRexRWZQjAeD5TRbhLJY1iMJ8EvQYtps12vby35XnJ7Tg1PYhUDPmkSZCaNZZuRmia84C",
  "key16": "5XNzWYejGyiMJnsrY5Um3mabLt7DEceCjo5pswUN7SKXeivz4eF6Jg9HxYkYLXZRo4cLFG8F84RfVi3LMjGjrv1C",
  "key17": "3h8MWD8KYa8pGkN3MHmEKQJQ9qNyKSL1pHRK4BvWGnFwc4NH6qSpeZjo4KbhpMgYvb4cLJVzetru7PYQA9D9Kh1F",
  "key18": "4RBsncRhsRkfMgcce6DFVPFiF5hQfn1ddAtvVZ8J9zAvVTgEcTCbAB1jWWiPiuGvpmBd3JLJVXEdpXkky56mRqk9",
  "key19": "2e6wiDFCc4yd1NbrEj46oFFQdoFwg9oNDMa5Hn87HbkNw5hfbrYKCo5js5U1aUFQLyMoRVL8YYVLUUcyaNJv8JbP",
  "key20": "5gT4qptJF5wPd9m7K6Kgw7ryDJ5jLGCfTYU84eCCquDGKy3zeFgnqobs8hBwxDJM7st6tpmdjecZA8x78zXSb9HS",
  "key21": "42C14nYx8aEW1uxUocF7pL65iDnBRBEveUJcXdz7TMT74WaKZPsS6Z9sWwJ9BuGthWrL4TaR37UQJfojjA3NcN57",
  "key22": "3Hcd5YKXuFKb8VVVMcUp57pRFsZVpYvnEJrHoKwWqjpPyefuRpPzD5GHsmpxPVXzY45V7WZZxBePxBy7iq8vH9CJ",
  "key23": "uyWpjVUnNSttqDjSfphjU69uLA546WdDf6UWrYoHEJVN4d4i1ECkT3XVWDWQmnhiufiM1mKtouNsYcDrweYnzYT",
  "key24": "2ghmop4wMZsPxgJJh2QQLH2CxDjLKRa3hdd81rwsqandEKhcWHTt8Vqewr3Kqrn4MLHF988gNhAUDEDLtx927Kzj",
  "key25": "q2JJWJDCQuGHC1q7G4Tf2Xdv9H4gbjFrUtBH94HoUSGovkmLUSrBQxSEYGzPrE22Pog4dVGJPVA3xbPX6zMy2VQ",
  "key26": "3KiTB6T8B3nbhSGycn6tZL5iNQUBXKA4feR6ez8gAnv3YHBr8iMM7oQVUMNjPSvAyfdiCKQYjLTq2GUeQYpcHB9B",
  "key27": "5AibPx9LNko29mDvHSgTzZ34Lfnw5Cugv5DEnB5SotcjnQYxsrLVVWLc4fwcDwfWvjd2ctyv63zPmJCohRQKd2J2",
  "key28": "4a1uhA1VTBNJtECRVFx4Dsj19gJLxCt1wCPeBddHL6M7hA7REKgRW2tBTpoD9UVPZ32xh1piinKRPZ22GhDxq8Wm",
  "key29": "49oAaWFtGHUfggHJVsosX5QV8LUqbbvL5qBJPV3niqmi3tZNZddF8TRTwpzRVXFc7TXER1wwLi4QzwiDQCWK6z1P",
  "key30": "5NZXNhv4VNBSHGk5EBQRXP4YFmEnTDW2v6yXazRdctZwhk7T6zUqnvyvAzpHUTwThH9S8yZAJpnF8fjpcth7H1hy",
  "key31": "2BisVrc2KzQpdycUk8wdmNcWqgxcGsfLfCCbTPs9FC2YpCTyEQi8gFB2pEEi1y8PyzNZmiHUPE2QAQVsrF8oyR4b",
  "key32": "5ui8rJQNCMxykkBrw2VW4rYV7o1fa3RPtSCxZ8CrPFnNPVitcXb2wBkYtc7tS7Qqz6DBmuqKJ8ZrfPSqivZGtwjH",
  "key33": "1JFXQjsr91zNVucwFd7GeMDE9bQVsU8nxMxfYF47cACxbr6zdxE64gEZHo16aZTC3FHnTYu7Hwmoj99KuAHyQ8S",
  "key34": "31CRJuwfemUEJg2EavyGQRadF2w46vQTKpy289ZKDo8nzYVtVESxKm5Ee3gXfNHGiqLJkHHHAvTX1pMWKTqfPfi7",
  "key35": "4sBhEbdH5BMDMNmEkeo3U72YY3majEK36J6g4v5Q36y8G6qKE9PZxgcm9HmkkJ8QZ5tis3uzSceYHCCjMWKRhc8D",
  "key36": "5QAFPbQFZv7TBr5HXqHy4ADNrJh5VZhGJhz4kdT3ZtjpFte7iufekMAcbZJ4NcB7KiuTm5atHszmG3Tr8gBSQETb"
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
