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
    "s7A1erioKCEGCKtN59SyoiGf2YG8528mbYLQAtpW1XToo61fFdDEfoNsW8q4t5D8TCiZpYzAjc65jjGMJTDHATV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58qjPPY1EDwdGcW1MU8zakTvSASHQpT7NHM8wwjPBN7dLKvKQJ3mp4MWA5itz8N8LBrLEwqmz6uKLhFR26LMWU3v",
  "key1": "X9WVcTbJsFeQbcL26Emti5WTw2DwEQHAZ1bW38xRDURNhrWKkbja1HTQezhgqFMcKhsahYNCaWYKKAgNRDGEuqT",
  "key2": "2xEPi4Ui3fn9bHqZ49kzTtLsvTY4sD2KK6iM9ihKczeY4ahWFKCfFw3Ve2PHt5YGpDPt1NotEMGCf3MdUz2uwzQm",
  "key3": "24S4Vfz3qDniquqvUc1rqCxTD7r86BgzWko786GmQsLrmwE1akGnjFQhRbw94MjybUGoZkjJDJidLg842oj6vzbT",
  "key4": "45DsG2ASVrbHS8MTpAKt15wvYbSUed4PGRHziURPFpkA72XiUZF46ugiEdRT8qJQ4yYMxjQPZWRtjuaH38297LcA",
  "key5": "3dx5uh7dZaWKmfQSggYkJTvQ4YkmMZBA5MNbFcmdiNjUtf8UBijKqm5GK7jkFbLP6BDL1PZEtyfkzZuEUtaQ7XLH",
  "key6": "3nzUmi7Zg5ajExxmJCh1DFKy4yu1mSR5N7BNtVXLiSad4rJTQLDuwiEsH23PhSnFyp4TamAgQFW4FUhorvFoCtMH",
  "key7": "3ezp4tmYEX8WcBryvtWYb9Wv63niy4UZ6obDQq49EExCSkCDWRaLUVabou8EngGtypavCBVvcKAgsyC4PX9wCWkX",
  "key8": "34Nagu1bDcwta5JRA4xeHg29pAzrf9Vs9trM2vUf9h4zvZAj1EeQUQ1YCoGkB22gYwhdW7JF2vQJMSk9QLLBNesS",
  "key9": "49nCcgFypJifQXzAnCc9R3DD9jGRDxS3RxVXBXesgsyfJiDor3e6NMxdeeipHDPModps4hj8BPEo7q9okpm6imVs",
  "key10": "5xmyNwDY7RKHn6T1FNcqyhqk26DSLWt9RzK7WRUf2tB8JWuMnsYMguS773h7BHw2aAfWpvwY4b1kGhsHGiKUsEoR",
  "key11": "TGLmvF1ifW1rUEAycaXqh8BMPNzc4hQf1iweXGoYWNxWEVV4fAdnsRmGduqoFSF72YT2BhQ1Nb8NFZT7aGQRDAs",
  "key12": "5RGDaqdD5p5oagZp4sBVBb7TkMG2snAYuquKRQ93kug6gxtjTREv9NLy63bNtqWwvwD9kSJqQ4v8WtSaejPAWKee",
  "key13": "4ccNLqNEtUiuBhYUW9Siii5xTdmGPZKwWZueL21QzHKVxvRuVB1vfLPrQadQAL2U6fYg9oze7w2x5WWG6HjdV6sF",
  "key14": "55HWC82g1dvUkZQtZf12QReqK9hUA6THVydwchC6Ai4Uo45d2AmsYorMbQJASseVVgXRrcEMrQmsSeNDX63exLiZ",
  "key15": "3FmUS18zSDg9bFKCUQoZATiw51o511KsE1oCZJEyfEWkW8HEvTr3V9jmjmcoKFzB9L2FxnJ2ii2C1W8TvKaRBZ5u",
  "key16": "2Gs5n43P8jXr4QjeRqC7BTqNSsCr9bE8oxkLyCpRSj4JQD1niNF1yxZ6QmowmdjKmpXeNgjZen8pFqbwbJhkVB6t",
  "key17": "4CpAQdT5sy6eZJFx3wJRxujBhDpKUmWySHLcX7WBR3bw4c2DkbCzBmz4ejjm7xrLtQLUnguhckPJn7Sjdc5rfbuW",
  "key18": "3XeA7xfZbg4KztswB97sNqmdo6e9GDQBBvgCceYvCdr17FHiRWrE6mhwBG3RzXVkVxR3QwetDA8BCYZAnk4rCtMg",
  "key19": "8h3MZRa7AJuFnNbFbRTNgfbKJkcTi2PosVN3rNNFmyBQJxumsYK9xZeCznrsecTDDHNDMSccnzzkhFMafskrZQT",
  "key20": "2ahCAsvWbVT5uDDvGVjx2hWz9AuXLGrqyCZyMJn6AFu8g8WKbzsL9ARsG8mgVrM6gjzZqFQ8hFnduGKpc6AmECkY",
  "key21": "4jxzXva9f6eQNNnQbwrp4re4Sp4BAqPck1CW29xnpuaq9fH9avHuosfqusZJdudKV3JykA9TSgHCaUhBbvJ9TYE8",
  "key22": "3mbvQKkbM7VBNdox4oz8wkmsH8VJSxM5NJXRyjnzdFL7Jzk8hZdnJmokWrUYu3W7TJXWrcYZW864rv9tieTg75ES",
  "key23": "6FMMDYVN7UQHw1JNSLN3zaK7StiuZhZ9cAmMna18jQtHmo9P15FgDdGLN3K3feoD5uknUukpo3u7XPaSjQ5GQAX",
  "key24": "2KGAyZxog7t2155thy7BHKd2FsZsTCYFSafYNT6V6nFZZtwGgAtQjVabo19XBhDBDSMM7T4kBN8M71pq4YLYozGT",
  "key25": "3KJxK9Sy1YcVGFT4rAw9qpxhj3HsXNskAMTieeywH6iikePN1axBHhRjiff6XAoUxHE9mAmuYKtVF3FzEv9wsCzB",
  "key26": "23VRWfLx519w2bvpYGCLimz3TywQVrQocqHjS4GWb7TYqQ5uaRLVVfSnGRwjsTkyff3nrmw6iGvQzHJhjyLEvovf",
  "key27": "4AiVrm4eR23Q9YYMXJAoeJhDz5nEaEwrEWkRpzoGU76hA4xZtQTT8N5he6DmviNyhW42vdWo7mV1BvKDCE1zAFeS",
  "key28": "kG97DiKN4GViQeJN1zgFBnMBFKxw8R9xtQZYaH2FTUzu99dA7GdzNwcSxhiX2jvuSkp9BPy78FQ9dvsbJG7HgLu",
  "key29": "BWeBkpEjbTpP3RBNxJgKXpy1EQoyVsqQuLnwJqkc4Mkz6jM1PddGYuTnT33sHxntQn1k25FAEMMRRvptZntTkXb",
  "key30": "2U1T7FoAQSVBXoEi7cLdpmiAiJSLjCAh77x2kxSG3zafu7SAZtZb851kzFSBJ371yy4gadvhYKiHaa1xsUdThS11",
  "key31": "5hhHqkt6ZSCUUAyS2YuUGnQxt7nJ49XhqbwHhnVkwgbXyKjMDwuSUfiBUSSELimKS3hNxnAztGtMi3zT1fsa7xi6"
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
