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
    "3dkNE8wGpub3v5kRigRpKXGzpMg6yg84XtcHKmd7X95WEfUAWrhkn8Kwc5UW3vXPovek7RKnQxXgRiPS3yBMf44V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4msiVMYyPERLFgodsCYhVZf3uP1uiSqxAok17xccnNxkKgwFVP1NT3fTBVFH6RDw4HxFLTmHZLFKvLW42q833B6P",
  "key1": "21mttJzrarckMjEr8BYAg9pXXeyWe5Qhies4iQN7MfdhWeD2gMe7X5MpMVJqzQxfHmpugs2JMt8CDWa4pbpneL3c",
  "key2": "kdX4UphgUyn9VjVQ4FMyKcCDzpF9c9Yhy3hoTGhSUdC5gAsS1oGcLVdDMqum8ynoNfZkyLEwm9f5JqCo3pknhVf",
  "key3": "2dwk9VgF1rYAzZuxfww4KWzsP14SvfipgDAx8rrceaNwxiQ8kksEQjMHTF6EzuFfobadwT2XXkEW7Uh4DkkNXWtg",
  "key4": "qfrtoTHpGhLote1KJRMkJhxSwG3gKY2FQdpMqAnd96RiJNnvKyrgh39cnk9cGZDDRdPT2u9bf6uTirvPLcHCoiS",
  "key5": "NDSP5eQZkQ7ZvirEaJeDYQBP88rK2Z1pWSZ8APWUoeE2F15rD4LxZ4zyWgzQi6C1hhaBNk9FuxDgoUd4jZupeRH",
  "key6": "5xeQoSPvdNjQtdCqSzPwPDUytPWpfivmLjPAU6Ta11c4YPcbM6VzdoaAzAdwH6QtikDwkoWp8x6ZzZkqV4ZQZ7S8",
  "key7": "5mNqZq61dpT6cwVSNC1P5FRbvPi1Qg9VYVwdmqi8t2u7QCRytGr1kLakg6fYKzE6Qjz644xrA9uZw2R1GRgy8Kxc",
  "key8": "31ZXsud6smSCDd5jJV7msvcBamCdxjrYNbbMX54iFC9xWmWSw1rgjUn3eFnDYRunzVWJjpGgZCPDFwyWHEviy1bN",
  "key9": "5xE66csibCLQp7scTBMPKNF6xg16EBwZTWUAMcxj66AmwSGfz6xyfC7LYxp4xtGZ5KqEh37gjbH8VATDf9PW13q3",
  "key10": "5wqqVUN2w18KgvSyqB9KFamhRksdBthQM4zzggjwTDv4YtoFLhQryD1nwBJp4fM2s84skkpRh6E3uCXHFkV1Wm5x",
  "key11": "2XGcsG4EEYNfRtMnTDzovMN1M2Yn9st1NocjeJds3EXJVGchw3NY4VBSozN7gp1rhGWEqLKpet5t1xvSCpH3eWrL",
  "key12": "pfxjWnnNqGe6m4prPhRJhQzUxk65xnFWxC57EHc639yZEfiyjDamYWxXJRoZkvikKM9Dp13oZ4aHvF8q2XQdtAu",
  "key13": "4BssYVR4STwhmKyPBhoS6oPP8JQbiMmCpjDkYjz1npgAK1TDxDvdQQ16T9YmSAkQSHTTDfZfY3D8epWNDKXecHmr",
  "key14": "2ycxSzH23nBjCxvnu3po5JMrvRUHuZxMemUUxJQNDT7TSgBAuJfEiL56UtcYLR1cnT4HkZc4f8pCC2F2YqaatHP2",
  "key15": "nvfwWYkpTCcvd7iM5jNvf2oeyymXQKpxSu6BL1EsjDgv2L4np3oLZuMguhstRaGsVD1rn5gB7csMdUq92FWrtfr",
  "key16": "55kG2W5QwyYsXUAH8txxxcUbQv7wC1S7BHHvtyjyoo458NerBBVoLdknnCtd2Jqx8WQcXPZMy9QW33W3KYxNAWX1",
  "key17": "2ym5f6XTeZsoaMQgEfsS3TaD3yeVnX5h11JUAGNBKgo9HLqhPjtQMJq2B79gwmvGo9XJQgtZHsvUn7Jn7NyvXYV4",
  "key18": "2pvb7mg69FHMFKDYFTp6Yf5mDEia5zPjmmAEcbL4hrtNnY486mwnToo9rWU8fjiDxDvrPJ726QTcXtoBus7yRdG4",
  "key19": "31mYaTjpfupWcebzaX8Luu2mTzQrxxtakKAifLzqtzcpLghUKt9bBpmf9cGEPq2vWRrdQFYd3YNRh8ZksrzjkG9t",
  "key20": "3DQtnd9EW58GmPPrFHpywbisysgMniTfZaH55skpMiPKEkAkyhUJzvZKbNM7aefBjEmQQSFSA1ScMd7dwTjkX3gs",
  "key21": "4thewxWxYe4A8GQ4g7Z8Ve3JYstkcSFAgLY6rENf4HcGd6GngyruYqdoj2Na2Zs75cuoQMTd6K5XuuLNJMnzEPFA",
  "key22": "3wyRhXN4AxTki8hJXYrcbnmoM7JwWr6FWqoESMMUwKHLVzrrhyF32aRxGKh492VJjCp1YjqpyFh5gquwGLiRW3AW",
  "key23": "5isxcKXNWbxYF5ZEFMXRp9TjfNmcmhrFNccqDEsAEbFuCYcJbAzZCwpqadaTTT9F4BajfiyF3PK4yWHH5VJTHF5Q",
  "key24": "5P3eMxcHjCotPsKVB9b5jUDqSVt9dvm6dfLaySmt43oWJXgaMZCSwzEf8cZbP4mTmugvbaZPYu2eSnRmZjPr9Gu5",
  "key25": "3LR61NW4L8k4V46urxriSLakMZ4GuP2FxCvwmA8UvZxhsrZXH5PU575nMLRHSYTH8VE6XVJ1jCrkJcgqkE6T1gRq",
  "key26": "KvG1G8y39Jx7b7RhwsaBfXR3JZ6rzJ3X7FQpxb7meVCb8FW9P9KqQyhL7Kp4Z7fU1eQZxeTgoTeDY5DfxPhHYrP",
  "key27": "o5Z9fpKK88HCpDEXfLjDAy78bknMbvKHqweK1NBkXhnFKH9FXijBwPKhisdtHdY9QZgW8Vx6GwNAaXCVxBGKV3A",
  "key28": "5NhGz2ThGS3nmBHmVQYUcHzuSUXKPQYPAtv9aReqxtkEUwRTotW6TpqZkgXs8bSAwuoct7S4Qw2dVKkcsmcg5Wgu",
  "key29": "3p8YMoTyBWmza85yE4QAmHgXX24pRgcBxxVq6BxgigLaqSJGigMsABnohAzVWnzJKticjRiUkcUpLprfutEeCJsi",
  "key30": "2MLzL6YW1FPhj9aQBqDYuinxdgL6LuhjAcCERFMJuAAzmYGSTEaMD23K9CqMieFdJCMnqbJKv4n9fsFossq79MsU",
  "key31": "2kxZUDhsZ54tK7BDnrkqndTTPAfTePoCCqwM7hWHph2RdLVQtmwnKk5RarnNqR7ThNJpy3XWSVHE8ar1ZUHAZTv3",
  "key32": "4goryEBzmKvR2v7VGz2B7Vv4xSX4Jx8NDaYtH88JF9Cf8zBd9igJEPBNwy6FnFhqyzN6evvF38NtzSSqg4Q31HYp",
  "key33": "ECb12ntrDyaPiSThGUK6JQnQVUqN88c8vSwoHrRBbahevNuCrndnBLjqy2rM7nBKrRyKnxNQib33dPTVcZ21UkD",
  "key34": "3BYPkxcKryP84LQtKPtBt189ATttQ4QT5tS9hvM8oGyKBqmeJCUwUuhS8VXUPkrc4LdNz3qp1SJsHu55cheo9wvW",
  "key35": "3XXWCbZeNxqqtHLLSSwfc1YFx8p2dhK7HVpmDYHt491DozcrVhMnSHmPTNMCeQPBWvSHokru382ai12WVr3WfNKa",
  "key36": "45xGpWthq9ZhLvYyVCv5V8xEbVPMHxKDnN1ZL6BZBXh6C345bwfKmqzaUjLVS3AqzpL3y3B4d5Lvy2AnPZKDHT1N",
  "key37": "5ZaZybwNccA2e6dRzryxQfy99XZRyEsu2XrtyhHQT575uLT2XEpdbspovVAHaUcB7bt9yTEMnVKtjeagsfhBEK6d",
  "key38": "2jyCd657PbwZDSb9bCyPoNYNz21BGPZTCmtsHrFMtvPDb1YMr1b2UWdxWN7pfehG6Wzk26DRov6MMHy4ubyqYWuT",
  "key39": "ArJYPMFNuiHh2wyMZT6T3JRfKa4tswbd1ob82yvmxNGDEdS75qzZD7cZKmMekiVYtdbvQzqP3Dwj8zJFGAYREMk"
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
