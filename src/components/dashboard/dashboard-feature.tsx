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
    "4irWUCxogZQBKiasKRXGYmxKDqdFGhJVBuQT4d4EUocPiT8imnK9TmNp6SLHu8PjXW2EUuyaTgKRfU7ijt8bRmPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xqu6JqmmEGFztinDc46eSLjFLkKxtFRGzdpy18RrHif8PBCVKLdbhhbyhp2nPz59gEpryCbmFCBfeQZdeg1kUUu",
  "key1": "5gKbftGcdgF6Bddr2qAQk1FsfMWrMk3X3HPRTZg8EeNE1CE7nDdeuapeHj5iGvi2RH7anzwJAXK56VeDRwrdsGii",
  "key2": "5Xt3bTV8HeTFd1gdgLoHQpMUU5KLW21jGGDjez6CAHK711HN2Eb3JDG2pNkJfy4F5PHPhUhpYF1L3PLmb3GxbM4h",
  "key3": "25ZTJ3o7HmYnhZKz1Qdq8QXLHXgmzA2JqC5Ct7RKaf8aWWnAmgK49J76zSEtRUnhfZFdTQk5tbrmKscttjHuQ2n6",
  "key4": "2t6FY9vj71Ax3S7SWJ8YNno3j6GY1DXjsWeVHwUB1fM94pBov2irnd6dKxvJkrKkrXVgAW3rpA3i1fM7BnndyR7i",
  "key5": "4Sut4wkAnztL88MC8qQj5RT7NZNqKsWQBLH43ofxcsZ5koQKN1yBXAcAgTsVx4DQh7Ws6ydwEETraa3qjpQZT1aJ",
  "key6": "3N7bS9A7qD7Hx65USDaRi52EHupqnQe1Mb6CqRY2PyQFHUiKpcSiiHzEJ3DtagBSAV6UdtGb89nQtAckMNJ3TzJJ",
  "key7": "2t98WCgKqiq14fYrKBpwAr4sC81V8BLrgCwyBaQxvGcqgYmx2R14wsSfKZqenJ9waxvHNDw9Fgyb2895MBrwfWa",
  "key8": "5HSkfWhF5YNPdAqgGY2iyrZEmVRiehap7U8NdAAgjjZGocdfpwhpP76vs8xSyWtK5TveaK4UULX1EqVMWt9gNUEg",
  "key9": "3VoPX16SdWcPiRPXAT86Tf83VPqf9NViCo35QYJfc1jh5PxJbSFAbwWuBXcHXzEki7kyEEQB1j8SFTpRGYBh7e2D",
  "key10": "1132PtavGcq5hbt4XSLChsLZmeLCDqzoYME3SVb2jmETvZUzButcq6cXdB4GVjQGGyobiJBSP2EyvknAiPp7tbY",
  "key11": "2JtaJZxMQ96VitVTiCjVyxumY6ifwS3tssvw6jxtKsZyfL8L1uup7s7ptZ3G76scxpDadLKpqt4rvSabaL1GuvWU",
  "key12": "4qk5dR62zNkWSR5Ln2mBpQCdfXjLqRJe7UqUQTzvvgtmD3sZL3r8XrZCzi8h4oKuCfAGBuSNmD85SLTErKxVbuTe",
  "key13": "2rH6L9rdNEB5mFZvb7619bBVqsXtHf335kM1qHvyDMdgoAh9WnDPCK8VtdLhKcgAJ2vXx3QVsKhVVqfqzAuFeoBj",
  "key14": "jLMHesBKndyTzMBPGyYt8kWSUAZyYF41zgo6swnP4L9yWRfmqPNzgJQoWRx1mFdndfsQu9nk8uYeJs5bUnrWo3q",
  "key15": "4fBJbusxtfw8k1gUyA6rtSEhBDHiHT9Fn6oUaY8z9wi47CsaVSvK3ZTKmVi1V3z6hRCtNqCXcCamhvfHcfCzixie",
  "key16": "4nf9gqQBRQSLaaffdYADfSec1GLnr1HpQQyBBZaRscMaSMTr6zkkYtThUzPmFhkF7rjPpSa2goVjpRhKrAiTkiVu",
  "key17": "5WGRUnTdcwRohWHvarDVBknhZHVzLhfBV5fL64srrpyq74nbyH6FCkRbXnqRBBnpp4LYhmmgzjjGdPdb6VcTPmd8",
  "key18": "2Gce2jS52jHjQNBwXHAKW5Yk2SixSDEChjvrSfnyPj2UGJ9fEHAxQYwnQnQWg62kn2CCUHn5Mv66RsHUjwcCwaMJ",
  "key19": "TzDmUCgtg7qocBe7iy8fyxWwB6etWcJPMFmFnD5Gfd5bKNn44hh8DEiQJRdjqcPmgw12yTngW6u3H11i6PK5osU",
  "key20": "4W1i18PvojvMCJDVVQ5bfKVPd9WmLjfxgL3QsTVG4PrykmcXVsjCRbz4BbBW17VRCnhMAszR7XzNNREv3sKmWtV",
  "key21": "29sChqcYwL8awffRjoVHSaYUd4cHvDt8vUCP3nCGJhXLf7h2TrxHqLQ8YoPxNaceQaF8oJbvLJ3rKWjXvydQ8m7c",
  "key22": "2TP6di7PZq2w6DzV2JB4cELm5SibBDcKXkTdihgZ4wQMwx4YAZeaAJDXoZbGQ2rarMGrhomXN3owmSjZVUQ5F1Gg",
  "key23": "5Wyr5r9dPPYBUMY5fne7984e6GY5U8Ca1BVuUqH6EJ5LaRysRQgVJwcd8WabP8kFW7L3PLso7qxkr4XVToumxYKL",
  "key24": "5EjuvSSXUwNMk5CekdaeyBRCur8M9ADjDEXe4naWmz9nQBnKzYDrqJRLvF7ZDVANtHkfRKTpKtTtPbUSgpPYsV3z",
  "key25": "2nTWWwkx74m5vxGFRpgUPEgGvuu6B6JuunH3HQK6bNSDwBNv4J7nCQ25qQAEScHtmvtCRrUvEmD8qRgJ1N3SMwUp",
  "key26": "2sCxUyic2Uu4f2NRvR49mbZb5WC3qV1akjrHHAJVEuNrEXXvFmyjb1SuJanzG9Z6rbv2b1KFDMzXa66f8hmxQBP3",
  "key27": "3hqyVVJmFkNkekAN4Rp4WwTq4v2MqNYTDvnPQhox52uHQPgfyqeaszLQhLeLSNHPKpm6ch9pHozBrR97Uv3ntkTx",
  "key28": "2Cv9jj24euf8XwnHZ38FUKp7avZMDPM665hT9rw83mnoLR91xtQjLEMWTBuU65iUY4UZy1pHx9Zb67ouzVguMjw3",
  "key29": "5yyQ9EYieqSohkbWdS59PNVgQda89YcvUednQKM1vNYg3DaVaJXYNYjQ1xDe5CZmmpqUC8yF2MmNjfnp3CaLHtE2",
  "key30": "5bs754mzumWF2s7RQZjmMvJP9h8fu7XGCafdPqzU8KbV3r7D6eBWkomqMFTaJesgpm8KuKvDuZoJCqWWURBvVMSZ",
  "key31": "1gX5FkhujCvoKy4bwgqGKNaAgT5LeDnERte7tJnuw2iYc4uYim5M45RnucyqLEUoMcVmPhzhoBkVWuk65nD4y6C",
  "key32": "4aRfW57LU6oHBk48mcfoY1rA6X9y1jz8QoYT4oHrHsVXD84pswb8e7zM25Titt2GGBLnTgLhickRsYKpEP5uyVu5",
  "key33": "f2ycKAo53SrHbGDYp8KcK49RhiZbMWWaBJXfZ93w8oth9NrsMRWxbjXNtxxmwLPFTw4tQGSS5tHBEtnG3vAxGEn",
  "key34": "387LrARdsugEvQACVDWUwfPDLf9Bhnujth7jYWsqrb7BCgFHqnFSqL8V3KY6RbQcwCgyyaEnxaH3QLZ82h3CTUD9",
  "key35": "2ZJiP2YHrwW3wBPnuu7Z4sYd1ZC5yShxNsZeXUi2KAhS1wJZZ32cPRndQrZgYT6m4ujUdTox5vUmduHRihkH9hWW",
  "key36": "5s6CNUJuTimhnA9shTegGeags29uNYRomLXYWDzKcsL2iwwdrCDCu7XFvSxAAEXhsXt47YZgRtYhg9Wja7esMPXT",
  "key37": "5qekaLPvG8dLHit35t5GRyaYw8CnnXL1iXCWXvtcpxcqyJo9TELkAz4a7fBTTVEu19PVkswzJwj65uJeXzjLg7y9",
  "key38": "3ZSQ6v2rorKJPyCgcaTf53oeCsqxqTd4sKD5ea7hTzpua1KFrpvobUZfYRy1NpmUUkJmUW3AX2jCp1U23SS5Kug9",
  "key39": "3xJeH4p174X36PUxKoAHZ9C1zntg5g3c5yRDn8ZeLsv9i66Tf7UL6dcWQLVmtz4qHDjeGRm3uUn4iMtgiSUpNPCx",
  "key40": "4LKmcyQk2Ptdoensqt1CMMtfKY8egWLxZNBjFZMRh66NkAXVEAETC8SmMpfpK343N1iGunzKP93PML2ZtvTQpnhy"
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
