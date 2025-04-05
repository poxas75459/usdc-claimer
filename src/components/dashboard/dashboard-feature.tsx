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
    "bJYqXP3MvpX73bR1hBWMTAc423C95pwcRUoF6UNkdpcMzbGvUNb8cXXVn6TS5pyz4MJATBQVXMB4oJKfAE9ZyKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JEJx895KKZLxsfiVkWPJbqMBEiPru8WTL3FTTNvBqwmZGXwkfk6ioK9bYoozHNrVkxVX4MuXCobz9sAqQYRsHFZ",
  "key1": "5XNntCuffNVYuBtNekhKgQToGr9v2rANQs3uZsrGDW4wZAT7nkEjMd5zz5K9hLBYLEYccPVzej1SkwTK5rRprpsy",
  "key2": "5TjaEYiTZirKhfaBgrFwQCfc9s4MJfQ5th1ciAgjiagXwS8NNkbqS5UgvWbLx2kjd7uc7E96uuhGLdCr8W8haYyc",
  "key3": "2srvTPFgqQ2qNUfU61seh7qL9Sw5etTtWjDQsxG8XvWAW6jMmGgWPyRGNPP3Ge4uUmRaf4pgnMxX5rpoKKf6aG6a",
  "key4": "4atk5nmqd7TonXvgNfQQGg6gUbMJJfNXPRwNLsZYE5sSoDeJgnwTsQhaewWQFQqApaYfB1AKJruokvLBbyii6tgs",
  "key5": "45LtmUdT5aogbtsPUwtuCZaNA2AvaomYDMzsPsZCYtVyGmFm6fmBo9Cizv2CWHjfY9XF4gfNJYA4uHm32UqdzD7u",
  "key6": "2mveJXvk1pYTD8jjkjEMx8YTGQbxXBtExVZUJN1WpjN8Lr3vxeTiyBaXB7eiWQJeDQxqwg4cytEAhicigPVUFtAn",
  "key7": "2G9h8SesgjDqBHFRTZixu27Rmud9fx5fHhom2X2FTgDnXmmXnqeuYRkcCSAmJ9nc4ypKmRtq2zUZSkPchvhhh4zz",
  "key8": "ww2SbMKUUF9HyQMn2CoqgioxvDwtAqtXMD3NJGziwS5vVxGZc3SHwRDAkCnYzQ9CWipJ93oPotBtYrXfTshb7ou",
  "key9": "47KDA7ghAexyET9zYb65FF1s8qX7TDvsZiLaUWJVcDzP9Xko2NRF3LEhYr7VXonwVSGdVAVNZuepn8uiirGJCJc4",
  "key10": "2kKFqE1SWCYLHbijEpbimDvaWaqtkRsGEuN8DNs8yFRRC5hQWuFae1YhBZaSrF6jJaaCk67656SU3cH48F4TFT6j",
  "key11": "kn46TfjMoK3eoG1KsW6iCRJMNV8ipeJVhBDeQ78Vb8rdhi2k6QrnucDvfsvXM6UJcpQNxt5E3dpCVwuxctGqc82",
  "key12": "3scSLdn9CjsvZPwDiQAd1nNMcMzYx7uh3tPPcxUj14KktxSPNZon5GM3gmd2mxvns49jMRtamTNhwzmXiov5o76D",
  "key13": "3rjVsGYNGdyxmsWyQKMmZizCxqECCVKHGEeNjBojqYErdwDFLR9oz2PYwyMMdzWZXLTEvuBSbaXDHqgULsfUTFag",
  "key14": "PB3aAEpjMuoXvTtJbvC8CpJsAEYh7dNvD6VFaKrXTPu6Kmu1QM1iKDKdhJz28C1eQaWW7qu83ZdnxwDkLZm2fqQ",
  "key15": "4qx1XnAJUmv82uPXqQ3VUMcPokdq8YdUwpEwPwBgLVQg2r4X1Wq8sc1SkkTbjJnP2uim5mYGUNupWVTWdXJiCmLP",
  "key16": "5GDDqA9caN9ixecs3EmmJunXiThrSVBu376rpciiwir3pKaFr78ALB9KqXtXxxKfQgdazFY7myYCYbCt86G7NeMF",
  "key17": "2i9akKhJtK3vb1pMieYvRD1TYRMbZD9p8MFaYgn8JPFBc55LxTtVc1SVeSU13kTDum64R5CyQq6KZr1tATuzQxrj",
  "key18": "3CUBMfmwcbH9iE7JHmWEq7Sw1bkCN66uxECfbMLffw65BRCtC1FatRGCHSKaUiNq8153pmnbqi7iZZVpSB84mECn",
  "key19": "5Dw9zpAKyfGxNnPPPkMeR4NhqVKkaYA2wBkRhM2PTp4YKEmG8vdZh8pSmnXnxB3qjp7bPpo5NthaGFxPAw26NTPP",
  "key20": "4aqWDzbhMKxogeFVF98Guo19vsJG4yXE7euQkzNaxFbr9i8BEXuSrRb1aZmUnTmojr6vWThNzA7b1QauwiDgMejp",
  "key21": "4vxkybexw92GPsd2KtfkQgU7pfNBtaKaiXjZPUbwjaH64hqFsfsBR8Ev7H9vugfaprNZbhYWXZvpmMLzEr2daRBG",
  "key22": "4Vj2Zistm1Ch36nN1CgBarww4EWFMFW9TBR2MbreR1YPe9SuHTxDd9Rstm4x8VWKoSxkeKVbaCkyXxDN1V9H6PpP",
  "key23": "JjrGCvM4vFPE1s4PqfPWBWdwtmFSY6WVWcfXrfe9LLym11UrH8VEr6mBygGWhsv74bCCRDfrQTYmrrBvVH8Wbng",
  "key24": "2UpWWKvngK9KafM7fqcJPGFFT4dm5q8bpxVhGCSxouNNtpFxxkcXFVajSHsV7NC5LQ9W9kPJuws3YBwuWYL8EvnB",
  "key25": "5uRgFLu578HCqtVm5KeXoaCkacS4dgEELquoZkAqNSo339tUypSF3dEz6HBcLNdifd3yMhEoFqUDeu4tCXU9Jbs6",
  "key26": "2wjwGxCrAP2cYsd3h1kZxJ23oua76Xex588YSDtsaYKkC2x3mrzM74rVS3dUpENZTQL3XB4BtxnTgKzPCLBz1y55",
  "key27": "4JZD54aPYikDeyUmmdX7LLPejRkSxymFGLbnTgWPX7MVWuGnv7wiEqB3NsgyAMbWPiabG3MSudN21D83D7MDWLnD",
  "key28": "5tGos463iTPXgAJGBAG7ztLcbWNV48ZUtqbthkSBReZEzo6egQoATZ5yBeNkekaMxNneS7cVzXPdnnACTsC4VFtL",
  "key29": "5npfnP8yRUor29mcuX7kFV2f1ySRkcjma5TZE59Vyfpdrh2KGk4mYKWVGoaEGPp6jq1T4zVjxQTqY715ppBE7Jqh",
  "key30": "6Wxpqcofz1bnEz4Uj83cZ6p4fMVRXNYFy1W6rwqPFftkAK9HenP1MMUknDZLw7qW8Bk44dt9s7Wro6otm3LbcQn",
  "key31": "4Pd3GdWRsLRj4FLbqGvaaHjhpmToDbrd1zqHNNd7AQSuVpawnKo6mXZf3fUNtnDNzmxNnLFPhcJRu7pH1dQk7346",
  "key32": "5zeNS5Xd7AG1VXAQYGtvejwB2YT3ZF8pVEkhhh2P2N1gJ12uRf1J8cTgKgv3fB6JwpjdQTtUudfW9rrpCT82kjdQ",
  "key33": "65apPW7CkFw4VH9zaRToSgZpyJuChkGJQPktmnzRHc7ea9a84c8QqxMuh56qrazXSonH3HXUzgD6sswgMAB5ZiMd",
  "key34": "sgeh97X6G2bXSvYVQ6HTujkPUWSzBZhxZHwCKdsM2zvCk36dfCpbFY88GoiNnr9heLj24XpJ8n8Z3Ap4BwbKFar",
  "key35": "5rcfduLuC6yjexWnqvKqBGWWYVQsUfTMemvjttjVZLmrL1Sq6ajcdyAd7dsJNeScsDn9uR1ztnD2YgFSZE5URAwu",
  "key36": "26FYkeJmW8pdzmuCqY2AVZ5trnW3xCfWHXJerc5NfS7UNrbXqMpoxiFvsRMzfngiqXRw5Wc6F1bQjLyY4M8LXfKa"
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
