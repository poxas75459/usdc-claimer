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
    "88B6SoPSpzyPheuBvGq2hMaKHtRvfxWQsvXoYT59L7ALs4UP6vi2ZG9ANhoW5K3nUin5rJGf5PeRQVP2ZPwT2mX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hPMUAgiBCvEGeiWq4eTUHmSwZh4jmH3q8nsEBaDahVBQTR5RLnKtTUXy1yduU4VUrox3pAyfVkmck1X1YW6sKfJ",
  "key1": "2Thcjqr8kHnEBnEhBjQQDTuNXE86P2GnBooBpsy5fqfNtLPgCA4HCAsagqn1chn99CyikwzHZDrh8GDk4LU4U1Np",
  "key2": "4X9pXZ2fAfpG3gyRZ8gdAdLQZG5KiGQhrnDXTQngGo3EzXFzPrFY1mhxpL8r14pRcUogkixLNL1xvZqRhnJefpqb",
  "key3": "27MfLi9PocLEZUZyhaA9qTeimXhv6W2igBWxdzEDv5H8wChCbhydu73cthKn9NwYmcjh3CHdCUp1vLVK5Di3CKQm",
  "key4": "3fwfHrpzEEFtBi2hNyDRceaBvHoWcvhFqfKREuX6v27AGt6fT8wNcLbGmAPxuYrTVrqrfb4QZvUdTndaTbk7djgS",
  "key5": "4mNANTnmGX6y9fouCEjbBN1L1Ao6kUvhwgDBazbyiTbFGA9ugHhT6ZF98HHi1utSJxbGYRCzwrC5moJmU2UFeYSk",
  "key6": "3bYSf73iAszDNcGWaZrw2T9Cmg4GNebKAaMxrdmiExUuGfaQL7XVneUAdDbaHF4wCeKE8X3vTk3LSuno1dcjTAnb",
  "key7": "35WgXnYtyNSkswD1UBatp52s4VqnEP9QRXAafzEYbRFwtLEJvYcJsWKpVmJuwLsaQPrms2ADL289PPaQ9tHyGKp7",
  "key8": "5iPMv5db21cjxfrvddvQXuA1Zdm8fMHrH7n9eDfuPdeTJeBZHSL4rnbjWmRBELbwBFfjwCzM2g6uUZkckLV4XQAc",
  "key9": "5kS6D6riyYshZjPdjrLP9coCNmH31V3WCWWbDnJKwjdNCi3UjFLxNUg6DyXiCHsmECZCoWYp8WWo7YyLRtAwMrU8",
  "key10": "39xDkGGPdCTXX4A22VEPeXKoQdjWQDx8UAi12zAWMs7i2ZgyGPgxjs5i5TrzfwTn2yEDPkxYN5RU4bSyLrnE3RwE",
  "key11": "28N5Sov3rubfAoQDEYkaBYw5yaueFLb7T7xWvtCYHHywh1845Qp1tLrXi5rLvvBRBU59XTAGtyfm7n8n23GvsJdY",
  "key12": "51oUdzcxCfkMNpdJw2owh14aCYKewpPifYP7kK2qpRQVUCgDkE5ng4hcJ4njUV6z2Dq7KJdE2hcyToFVuKd4UjBW",
  "key13": "39aVucgKw6Pup7DijDDPaZLNRpRjZ5qb3T1xke5NCr2stTkhXbBrMY3tkddcjSu8775J4pEQizArmFL3tqKD2D3g",
  "key14": "2CtG3yXi1SEZNCzzynajtS6Qvqk9TToeuDonDeEnCeosF6CGVLkErNw3X1BEsdJ6wphMgWok4EUUKN6tbzLptXhc",
  "key15": "49CgMqfDzDfXhpR1JCzf7GRFD3Z7fVj9QQh91YAMBki5pkSRMs9g4RRVas83ytYUBhaWzNd9v84pY6DE9ZEQwob1",
  "key16": "tUU6ekw268MxtuuYeCM1Vrck91vc6xpUKQ58VZvNQ1TGXqZevDMAynBSFoawnbVkv3gMNqU6ugQGkyNGQprJJUa",
  "key17": "216U4KwYX8E2PdVZtg3nt8kvP99k3s7hjbEMSrijqkvENyCRUKVXNmYDMuoGgCniiJH6KmXJLXab5GSS3SpEWWwE",
  "key18": "47VSRGgNYE36Zj2X6UQeBTjpUHzozkkPQ97jFChFxubDA2wJ7kCsB5U69fSr8e3RXSYjHZmDzXHztxBQACKmnxDU",
  "key19": "4tZH45qKFdhwo6dTfPFDkNiE7cfuoJbvvQPKWmqwNbz36SWSBNjEKUoSQTEJmpLwM3h9CKWhQddBbcJnVMfJo3ba",
  "key20": "4qtPZxrEeguoZmJxvNcRSeyhqYxdQg3PLa3ModTwCi6BDGVFtWEHvANDS8ocHk8CE9HLoHTDf4rwjVFdorvFufNV",
  "key21": "3Mx5BZnpxN3JgKVZwSXz6MNn1eVGYuVtvi7kTwnkUX9D5n6675S4ossH34cKexdRwSZPrEerRxWcLdBGRarkoXnY",
  "key22": "2A2qpKvajR1dTx9dksR7n1sRBCHG8hS6UtVk9GYrjULE9Na6W74NnssARgjPi4xsfoC8VJXaPia1mNyVA5tvzobP",
  "key23": "2dx1XouR5qMti86io9QznbtcFXABiDqiaX1tWkfPK933wUqLWkDLt7o4JcF7KP1roSbRnk6cPRktAjYWbTWCKU1r",
  "key24": "52KVoMakJbUcQYXcBSoSxP3BCYJwu7mSb4WFBhq6EX6icHhSLUk55Jkzjtfdr8xPjhBrwvfjD5KMFUSQfCFJ7UDZ",
  "key25": "nQsFVcpk7qMGdpM66Wo6vdtdFch7BRrdk1jpP7aybYqvPv3EWK9SAEVS5JEyDxMJ7CMUGVbhKfRW55Hf9cEXu7x",
  "key26": "3UhMLwLuSKDrthF4wfEh9y2oaXDzzp2b8jHJWDTyUbVCv8SN3UjE46q18NzE8SumdN221NKDpBdGaifhUarr4LTn",
  "key27": "2Q5MAFY7bUqoEjUi9Q9D9kAsuQVJtPEydC4vVWsELEjskw1g11gRRePDvimT4ED3HymauM5r3otDPyRXKs2MfCJ3",
  "key28": "BdbCfq2qFUzetNwJkLWS11pxwyzCckuFqizu46YfFYyCWA8FAV4Rcnv2FgaJqZHoaMoHXQvodXiPLCK1dXeLYXG",
  "key29": "WJd4FkJT2YXDfhA7YgNjdj4J4KAihBbPB29WcdQyNQ6raeG1XqqCFDwvaGRQeGy2NP5VMFktrLrKjCwBPNRN3d4",
  "key30": "5HTJbwogPQ8WAhW5aadS7CqJt2FgR7JyhNXQEU3imzobjRckNeh3stuqufewkAs1xUTjCJpU8W35nKM5xpzqaFrZ",
  "key31": "4AC2r3UvWX3dohv6NT8ydrw71F9FNJrXTZSfMr5Q6PNydhkd2sCnrTHyTVZGy7axPRMKPvGmUhH4zAbZgC79b16o",
  "key32": "3mi2KKzHYCiqJ9oRj72tfJjdhYup48Hiiu5Z3oYddeoXB21NJqeVw6W1q12D1sJEXob8Qi1KZiRMkWbJqcBKoyzg",
  "key33": "3kpNwY3Pd3gvbLpxbypW56F6FaXypmswdoGVcWhe335SQo8UCTHQSAgarXYZLeGrRfhPfMeskNNUDeC9n3zEyXGa",
  "key34": "5fkJezP7Kc8QLFs8erypRK8XtTsr1NzQHKpXNvDmFqYuyeby7yaTpdSBkVrUvQKjv8JwDToiWQGgS6xbThK1VfG",
  "key35": "3w46YaLZMjnDq5cnWJcQiLLznkL5mqDHrWGGbhKX31XE9ZpFixA2vim8YeSQL1Lj4z6y387XDL1cpdaxnPjFFfqw",
  "key36": "4yYSGF5mL9wsiLC1e2hwZCaipPFCMU2LovEugoLhPBmBuj5qr3aZiFYgzEZTcHQE1nMGMfKGFLyrVNCo5b2Z2jaj",
  "key37": "LxomW9G38kCfCvCJVDMUKsHK4DisLKPJQt8N7e2bHMWKFxJj4Uc3X7v2o9EH1oNyNBCNbvNAeg2X9W2E6ATZrcT",
  "key38": "u75B8FUWfkiUjdx6Sp68A3ZKRYccqJbmQDgJwh5UfnkokJ4PJ6rcaRCneXVJvYaym3oUi85dE6mNVsPSiugA5Pj",
  "key39": "5xenzdxJJGMo3tEMCA7nHXKShkHrZhf9Ze13UdiFikTqTQNPjYubpyPrLsXscJb7Ndu9Uzjj7RDhW48tPuHydPF1",
  "key40": "W9Lj7KZPSUaBsoVXKH5ijr3nvHejL72sZa2btW5wmLTqLBGUWmyprqGLPD3bbFVLACiuHKSWRA75veWj9tHzKzA",
  "key41": "3DF42H7Ndyx5CEJRJFtrMKuAHt7EmTx1SbSZNDXGH3eg7gzBU5t4d62mPtjGFs7UGrVU3yW1n1stgTFVojmrXbNi"
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
