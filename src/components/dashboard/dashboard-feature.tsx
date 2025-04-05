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
    "5Tg1NKxThmo5YDHEwJ3uSaNoK4wm13eTNtki4c1E6AT7gRuDvfHEZu6aUNhsMySxNUxZ2pwgCq5VHDxDiLAe2iat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EifdKH2CVfvAsgae8USdGueFMLAX3bJkvVK8i3bVKXFLLkg2te3dZcLCUKKAsj4Z11nXwpfVSJ9ZqyqmTnA6BdD",
  "key1": "44Na2Eg3U8d4GCMEBR3xVq3bCDKC4SFpPL2TXR8mMneYFjUvw3yeKXFHxLpF4hPPEK2VXruTFqes974oWvi7vxva",
  "key2": "3A7PHcm5Jw8rSdjjDUBmy5kAGNiKNuKND8SooVfmvSbcvYV7FMMH9FzbTZRZDV8udoLtAQeWDmax3o6iSoEcnmWu",
  "key3": "4kjyXXYfemW326MthP3usf2kW6jiUgp2hJkAGP3xBsabZ9GypjpDg2t1UW8HhLY6ydcFBb1XPe7ciA1sfB9WPtuE",
  "key4": "5WmQyBf7Y2aes4HXWd6S7fZ9xsHHgV7GgCirCqe7HPKNq3JfZyL9joqqBbUQ3ZJhJKoz2rVpSkxHKKkGHeFUFpTc",
  "key5": "2ghdemNkfNyFvekaRMx1PsUxHS88vpBrXcpH6FXZoSh2LTewJxFZtwkBxu6Fx8ymLzJt9ipWe1QsbNywRvAsSUAZ",
  "key6": "491iBtSmYkF81f1yYKGLa99AYKRUdUZqj5fTWFijf7wEXDU5ni5ng8eM9of9bV4hPRnfk7QNKxyF4dbPjWSnHsJE",
  "key7": "2M721gNXw5UPEAZ7QrHG5BpmFXZFU3iZoqK9CSauLvahJvLpmcynuH3hXkyqqSejEBFDJHa3aAABCEq3E8RusYDf",
  "key8": "4VXknz9fBVijarRfHYQEUDAPj19mDWfWFuLZzEDYoGhPFQnxqDAGsYeebuAewWjCXRpxgy8GuE6rmyAyAymqffWg",
  "key9": "5pRLiYX33ALKDqPAS6wVUykPQxubnnAkxoaXx6LnrhXxBfkh7Yj5eEcqXS8uvpVhUqWPf2CD6gas8yi5kYPdzN8g",
  "key10": "y4A298jxCd6cggGWsfffMvPFmyUkYDzAZ1nQEL6SkzALKDc2zRj8CSnrQDcpewLwXHTKuu6rd4kNKK633zYjM9K",
  "key11": "2DoNihri78eF2ySPvMYP1hWKZs9MSbbixrsCFyEMgkx33467bnNVGCCX1WAAYka5dYg17cTHiYm12UrwiSbRrPuK",
  "key12": "dQjVGdSGVj95xpb3RsNtLSpXPUhpoHa3ij7STwXHR1jGRRLzwHt3K5JUuqj2s6cvBGxCEpMrZM9ySAUFSuMCcSW",
  "key13": "3hiREQEcwgKXb3aS5ci2LkDyFHR3JA2fZ88N8E3c4Vbw5MxWYTzfeyDriRvmchH39hWvrQ7JkEEHk5syq6ZqVGUc",
  "key14": "5upPU2KmZbrHt4HXp8NkBEo29psRf9RUFjwApgrrZ4wwn68YTgaQfXkveohn1soSGWx2T7LLTB1hG2ia4ZaJ6cN3",
  "key15": "5UZA4NRRb5wmepTs4m2Utqu5kvEUqZB1wJ9axmCgjtnzrvSgsjYTJw8tHmxrMzdNcMJfPpkD2KbPCdEnLiGhJcrK",
  "key16": "5ETFkPdYcLqUtwDrWBNQ8qt7hReMt1KWY8dpqgSHqeS1zbkQTUX6gBHnpUHUV4jBUGkHCm5xf5zuMRjU5MbQ12Wc",
  "key17": "51XTi4HRbAQZxZz9g8QYRcNDw6tCHRFZYWdY764aUhQTeGC7kMvFu1NqgEFJiWhEhpwMcJVXtXsgS5NXPZdChcKA",
  "key18": "44vr5UC1aaio2ZkbFTQJp6NwK1oj6qgzWZuktu9YD7TXDyzQ5EaiiUt9mtHxm9mWNSUjPT7XhqFoTZPFLBPgXzoh",
  "key19": "5XYLRerdcQu5ngDB4AnCfDgmXXYmCYQqsi4i4DyTeygXsN8c1yqcP5Thx7kd9xrHjTeHsex2Br43D68FerkVU52F",
  "key20": "5djwJphSwpwDFdY4FAaL8EtMvUGGQw2nrtwZKnd38MWfvZrN6CRtBZWTN3wJ3nhQR6Pppjss2x3kM6igXxY1RYFN",
  "key21": "UWWXxNoZda63PtsRAC2hdgd92zDXusyREX3JaNA7A83kM2whzpjvCtyFXSzihGN1WXN8MQXEZ5VELi1zKLAUBvm",
  "key22": "3HJHXpuNRjcpZjZkBY3M6F9dyXYVpwpkLc6RssMeSmyXmGqKwWijaPAeHYsKBJ8N4fNksEShau62vm8fuAuqcnQ6",
  "key23": "3KaAm4nRHvEdYGbmeFuSq8ZvFwtpULnHjWbrGt93fckUH58g31EWm1kZg7bFfUs8YpyE3JpATDBxgGnpoYAm3K1V",
  "key24": "3xpdjWDc2MXTt9su1swfJJGwYdRW5bMNVpbcEawoUkTV8fDEhunQGDXSRTGZf5EwTUPqjWBbc8eQGhG48urrpCrF",
  "key25": "27PHVzXvKur7iYaSS5iqjHefgaH1ebCAWPYM6ZYVdw3jpQnY5wfddHLwHw9PmuPqj6rNLeKPuUR6UhrjSWuGZXWF",
  "key26": "pbmuQU9bbYTa7EC8foJu8EikaTQCNpQdz9NrQRJDY4QHoVHzu5Rdzbocd5ABF7Rg22aayKNqpHYpcYK9t2f1UQY",
  "key27": "4dMaHHdUxDk8WL6A7uXn5jLNcQfbDGZNtXixYuL44EutXb64ZXFmUXfsnPJm2bpzerrRrpod4vEj9AC2w9pyx1VJ",
  "key28": "35EdkgGUkWsJymD9qZrHg59WYxJEgiJwe1c6zYxTBGnuhfyVdPXKB77A2MzQD7QkEV29beiuKBjvbNkBSkMN31Ty",
  "key29": "2tFYmRBDPoujRQXvggabxp72q5YaPKat6aMtwofApuEz6vbauTg6suqt6f6265ReJ3WdviohCyQC4HH9qGvJo7fE",
  "key30": "2H9Up9prZwkoK8HW5NiqTWiTwXxk5uBgn7MCtdzHR9ewx98aczavUXAwC1dqdTyjp9JFYJV9TpJkwm9YG2Wi3DLg",
  "key31": "4rXcXjEt1KFZYnawYvMDqAs33sgMstNsWRK3M4YWEooQzRqCRD3NK8dnTQY9gBYa3bCdnN3dMidKj3yZBETJCXen",
  "key32": "4oi6B5uc9a34WWees8ZygbVmF5XE7KUxDtAvfSeKSHf9bHWy9YVNGMPnouYLJH3VAad8vEiJykRLsMUZmRYRKwX7",
  "key33": "4i1eW286CRyUv1Rx5BanCtMN97sKpEkCwCfmnon1Z8MJT7hgyLHgfu9MVdX74bcqT8awQMheUHYthFbSJJpn82je",
  "key34": "5x7mrDb3PKSSVLmnpEa4N2ccdCpzE61o6t4Rrc4pdh3K9CKcb2yTL5E6UAdg7XEV2oyheA17NYHdsVJ5K5jHVeyf",
  "key35": "bHa4hPaasp5fp6SaV5Hcvq1viCA7RB9DUm7ni62NQe7rustfYGeQiCuMEvDuA5hkCmQjTtiSAztQYiAkXxuYGPa",
  "key36": "5JSBxRMBTF3yJY4sXb1Cdirg7dPMe1YghRdnmSfXzNfsBs9T15GG2ucVicTUmYfqfzwjzNGHaevrE3GztU9r2tRz",
  "key37": "qD5EkkTGEyizEejb1Vc8azUoF3FHT5ZVDpzsCPjgZAHS2ZiU3GHtqetYCN5mEgZgXUMQqdzxjqtmVBamkWZdFaN",
  "key38": "5j2Z4wogutBhE9KRxvMrKFmWchvmaYHTf8iCdVa4TPtr54jRNC71DgKv5timNAiAhPyt4PSyi3g8Miqaec66925G",
  "key39": "2dWezyLeHYEXoP8dhuVvoVeEGLcGnsB8fyEgS2ZeD49e23bXrHF6ig8nA5bVFcMEasFhnCHUcMaWPxmTJCyr2JC9",
  "key40": "9DTfjPyw7jiLjBcR5r2YTHXBNg7SEySbh7dGV1MnVaqigGgkiH9P1mpTNJk7B93D14W6HeKeAkeNjet3CbpzAPS"
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
