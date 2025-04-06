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
    "5FpLJ61wvfVg9tMXE4moWmNxvxonkRW8TEdpFyf8AqLSGegVeqjP5aWm1ee4aEc7NhCt55raaEM3a2SxLUPLiFb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wmgLJGofEmUCzAEwtjL4pn2UcxaEZJ4cuvV6HehCQFk91FckJEBTXs7THXmvuGmmq6ft7Bc1n1bsttXa3g6Zo7J",
  "key1": "2sHQZ7ACrHHpD79ijHoBQ4YAxjN4HsJqNs9rEm5WKyQKypNoTj6RAkJwZNnXJJUkY1pTfMVD2ZXAkgEeCZUvX3Kq",
  "key2": "CXRJWuTGNK2Z6CwdZZg2GToTFbfhzM4BuZW9j37tGFakmukECbotKB4zTSNoK7GrBdwBuhtSiEectwayHFT8V7M",
  "key3": "5ir4nANWCbXrYabgY56ksgwDwUXAfSTPnDLdqPAExHhiN2eSRvwzC7Th1XHWSo6X6WadVfts5sro7UayEvQ2u2zN",
  "key4": "MwthiTbGdkY6tWQRNykmMvv6B1fDXmug3UcMvZ3JMKnUGk6AxkBsUGJsj3DnsBFkCtnLMKzBTEfWnpdLeDFaZcp",
  "key5": "2uLuJi6LKRKDe5rsoanUmowt3LmQYcbogzABpWNkv9NNHVc4YW94z6KJNFzBrvndhLTBLC2BviX72tnzQ87nWFFw",
  "key6": "3Ti4YPpMPMoNJqSz9K1paxtzreDDiJ2HGCFm7CpDy3MT3GRyGsMedbzMaCKR4hj3r7UuuXocNsm7sgnaTeGEDbKC",
  "key7": "2Rpeq3WWLvsxXN2YPT4vGuC8fj5mA9FC9DWv6Dh1Z5sKVBafYcydywMVShNgh1xxnEWWsNRm689ijeVrnxzzpw9J",
  "key8": "UVcxQXweb4eJrBxyaA9KCtgqdQPKmLC6a4kwgLzZBpdDzm6U1yngzkRX8gwBYq3u5XmJ7JHXn6AbsgoF7Ko6Yz9",
  "key9": "3Zggcx9mn4aMChVVvzxEtRtt9KG3cgeubCJs4nx5JCQZJrghsrok67ynqAovaoN12rfJRVSSrn3AckzNMST53NEs",
  "key10": "3asoEDjw2vCmEbSia9Kd36eoHqvFBFH7ZgRpjxTEXBRQV5nP24FBuNvgjjG5trPFExQqNcFS9qVeUrK7C4JohWT2",
  "key11": "zP6t5q95cXPQSHsrwVtnw6u6kcE7wq7EyVjBYFhTD9L6raHETBEb3Cy517fBUU8PqpMExowUUGeiK7diurJcWc9",
  "key12": "aVpWYHBZScNj1kg3Vs3dAXKhE9pMoNaywWnht9bWLdrEA2nfKgEepDKmnsr4HTHagHUtML3gtQaA8R8fscG8Qvv",
  "key13": "3nfCA6AMqbZzE6HywDmp9mQ81s4EfVdrVrfwhv6aYiPMaZugTifo7Qg46WCyneut6vBcz1Ybues4PsVYcZE1zSXQ",
  "key14": "3cfQFaii5VVmh6aUBXXAkyX2sYbuJgZe94a1R25oZsrBJFZvnBw5cw3dEoA2zu6XWsiMTRUyb1cod3Ykv6gzNYag",
  "key15": "4Rko5ng8X9e9ReLAKT6hw8miERiGbXGjRABRGbdVTbpTEmbjBsxfnpnbVjSEGdF3nG4Jz9AEz8WygWVbTYM4ZZo4",
  "key16": "2uS3wT39jqw5Kc3RosNkon1CW2q4DH2kvz8qA7VV8JC8ibxrSREvShxYrzaXJstBwHYKGszxjZD3oFZM3rKSMc3U",
  "key17": "H5x1eqxkk95ZDHfQ7hX6jnaEc94DvjcgRsbU1tNc6EbV4Yt9NrquhA6hPq25W5cixNPzL1nEXDnJ3WAnuodRknb",
  "key18": "4Hb7wYMinp9AMQ1wyMwY5WrHTJsDRSycLVAaqz6517nvSvvs4HusHabRGdKKDqxkQ1qSymTdD22Sz3sGE9Yy6xgC",
  "key19": "5PVLC7grR6d6cWHTx9BMh1hswSReL6u2AGa45kMhzaQEKkxisVZcp1fVEZc6VFm6M2qERHXj4XQcC8nZNXzBJohH",
  "key20": "5eKLcAh2nodg94XZiHJoLNc5oxwrSRACjjCECq9zmgmWEZB7mJeAhHJT5HSmUwKHJq8oFhU76ZEkUgS78xvVd9Yy",
  "key21": "2QjPh8yPRh3iTE4abaCV6NscWgGTsi2K9usadYk6U1MtgQkYvmvQGWCjU44v2rU4JR4YYTp2knckW21SvDoZTjWz",
  "key22": "2vTHh1AcDRZXAxGfx3SZHgkr5bwLtxK5MMxdJd1iYNvmzCwUX9eXHVR1t3yKTKhZwKw2pW9g9Hxy9bx4DCTuzNcP",
  "key23": "39qa74pegfwVgav3zhqTbEGjNyecUk85BYEHmVeC47wun4a8i3JfjcNFEsB2BY6nTFBAMo3CHsV1ukhG5hBxDApx",
  "key24": "LanK45WRdij1HFkjZoepmjBjgFsytY2zFdcTb9vNdCMwr36CLqCaxqGWZ7xDbMgDx4EMFoJECE6iQgdcWpGEdYz",
  "key25": "5ycMwfPfBHfC38y4cCfGpfEhQdb9qsrhAVfzipKWzmhk11HF1ZWpZ2zEPnzyZJoo1c2j67pUPHWkdEi5XNHCMqnh",
  "key26": "3YBrixcH5d48Uk6bcgJMTq7JGF29QsupfCRLa7m5ZcSeTPQix8Geb1AWTPsXfEJxZZwZq6aJ7YDLFYiZGfWzCJaq",
  "key27": "3jNsd1yeEsqFk2ucHVKpeXCJAboynofd15hX91uY4YFF7jXFYGP8fdMu6zKXAb1Bz5EY9dmzyMM6RwhcLHupsNXp",
  "key28": "3gbS6zF8SVdUZGTVbqd5yP42J2y9Njse985WXuNSbM2mPZfo5EJP6j3uHZDKQ66CvBoxNjrNMqA4unPQYR6jSEPW",
  "key29": "3Ay6d5fd2Q9GXbwtvZqpJsNp8uZmTCZLWuEYkCP9XaHmerpq1WgHTPKLFUJ3MR8pgjfjkfjMuwjwnGPuTPL89R9E",
  "key30": "EDLjee5kVy3Eu7RpG8M2LVuT6iB4GMdP1JDFw8EJUUkJepYNUBrTLBpA6X1rdVhLKTDvzPiy9TKmDzusjaUjjkP",
  "key31": "2PTbrhM1nTuryPPTym6PTvRira9KSiCMzSVmLfkaneUyvLLKGeZWqraCnZp2vBkzf7PhskaT4B2MGnBFpcvejeJy",
  "key32": "2XMbFiYisabmjBmPpeZYHX7dANDoxzK6WendexovyTMPKhyKkG5ixAXDjr7ksdeE9R4vZNynmN9WYEstgSQbJrWn",
  "key33": "5EsyEv9w5cHYoUdbx9ZagPCa4QGJmF3DRVo9vnmgBi7ByN8t3s9PdR41a4XEb7ghv1caD2ZWjyY9Eu7AoA8P4U6J"
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
