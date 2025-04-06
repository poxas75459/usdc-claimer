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
    "5QrcZyS2yRntM6aiBk8awq6HCmF6iBEUyvto5uANwtgMJopVj7Tdtkf8u8P9mE2bPuesuJT9LAPaB7eG2Zu1JsuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49hMhm97RsodmPQMoCf2AeYnevtunBvTgQyC6N1fWPJpHj35N86BiW3o4ZhKcT8dJMxZjvGZsJu1h8dHjG2e3ygF",
  "key1": "47F7yZRDJsWg6WeRGk6hpdsTeUUoJD9LBe6EsNLqKfaBHrG8H4YRnZsZdXEeNkbxaDam2zeEcu2tsE1LS3kau9h5",
  "key2": "2hKyTh3Y7aNHFUGAnL7e9uTGTno8dku2PoVUMR4EL98XfZJZadCUxpMXguAn1ABvbcigEhYTC4F5z18q7WVtQRQS",
  "key3": "5Dj8FseMcCG7tb8RQHRThgcYr38FtjHNFxa9NAWGMcf4tPDS43iRKn7zmUzhjHLpc5kmvpMKyBhRtHmeVxqWgwfj",
  "key4": "erAjWA7sHAivhkNzCrSBHx4UTae4U5sgSdVxQdR2UwVnWYZjeMB2enxYQh4i9poEUkhVt17LhZoQFwjSC3NcCYE",
  "key5": "3mF4BCsvjbvkQGRmUogWoPq2Rqednt56HSzjVH3SUwEgZQrsKQk7s3cBpLXSQ6gaHCJSxh5bMqjRFKvyC43VSLEL",
  "key6": "28vyNBFGXMCduM1x362rTnt1mVBFr4F8X4FSvgU422S2L6MBD2AUzL76xLJurb2cTzu3zyDj7ALui7SDCv2dvQ89",
  "key7": "3jn5oMix76uuKhuDmMLBLDyNRxkivv9EV35ddKAoQaLexwmk9c7hbK1FcpJm7LAx5Gqs7xu2K8UBoZ4ptDeUwbyU",
  "key8": "36Rk6jZ68snmwL7tSxhfqV4ikyBk9E5mp1aQqo8nmThrvqr9NHkAT672U8pKmFCGH2T1yh8nF7tay5P1yxnXyK4K",
  "key9": "Ks9QQJFw7QQYfvECDUF5wQmpvKeTFAQ3EaMiWp1nv1JnmNbGWepe9zeCxNFXVbebjELR7oV2Y8GC2XxgjaxtYxr",
  "key10": "Y8FjBwRyFxLXspuLKetcyVwK9Bry2VHE87Eu7u4V9ChXXN2f4mTzzs1ssFazKfhNpU8iZNQavDWvxK4ZKTgFDBF",
  "key11": "iFiPKkSAD5etmUao471k79294CmU586EvXJUkogZmCcY8yAc2rME5i2RNv4xh264YQozDqkQHg2GskNBxoHXUw3",
  "key12": "36CVCXknzRYTtekupNL74FVDmHay2YWS6oqzqZ6mmUsujxHn1gLU5yUio4HAKfwxrd1wW7mU4QJsuBhJqctjUZe3",
  "key13": "4umivZNfbJgzyR2M7EXfX2ArkhbjPDw6XBGdCZ5vGgF2iqmz8ikJyXcL7krLiaBycH9HwfF4jFPW579euAmoC3zr",
  "key14": "W5TnyhHCkQeT9HmLCbn4oxX7B1amUeqeqhBvJe5gmN93heVCew3Ni7wTxLDh8su3hLUHYJcEsq62EQMhJk39Sio",
  "key15": "3QweBtcApfofoD1oLqgfkzUbwS32fwFu2maedVpoJU1x5h8mfuJfu6KgoDZT39F12E6fkVjjVjk737n85d46SWRL",
  "key16": "4vBkfm6Anb4yoswoopiZspjD96EqEqexMPxZEAjTzagwwQrvioHhYBvPVvahUYv2mRWXPgB9aimhU8q5miqgVYKu",
  "key17": "4Bha65HTazwo5g6GW2KJx1qh6pyHo211akx9qUkDWH9j9gcidF4bDD2HgZYXeEmVkSXmp7qjFKHg8iEDryG7efJR",
  "key18": "2F9uSwFEddTmSDFzM96YZe64sJM91Nm32F9Vny6PaUEoPQeKsmhEnpmxb8xXUAFwvWsybMqyGCQjMQ5x5hBhuNYo",
  "key19": "2maQaCPVfKiDtoKWQx8fyM2d8fykL9RqbGHwkpKrbY5VtCYvQRoJ2VpE6Qvah3LVdk87dn6hXarnJXJ6pNDbo6gq",
  "key20": "3NqktXuaUqc2C1XjhCAgzHYJ4rrsFdpUXsGA7rvJG5j9v1W2RFxPRqB71nkAb9LqD3bQG2BNvrfx4QrN4SDKP23V",
  "key21": "3hxenM8uycNTyeAiFjWXHZQt52tpzfjfRLcRuFDqGYpgpntuNyVqrUZS4uGsiWYuJxr8848NPLnUTva4Nwunyova",
  "key22": "amUXGEfbf5xF8fDVwpNmtQsQZGAf2awuXjoSXEAgSRug9p2fDw6PjbKCrffX6v8qDFu511KNAqxBwxTYD1QNw93",
  "key23": "2L3525PUKankr8BTB2f2sLYE2ENSN5VFDPBEmdzGqdPgUuwU5i8tsgWNXAhv3oyLwqjr9NL31CWANdpj9dFgZuZR",
  "key24": "3VbZQ4JpWQrKaGLhVq9kGmh7Y8P4i9cyPBRbBUY1Ns7uXpZ556RxFnHUo2Z3gHxgG7mtoVAu5TQZ7khMZaxE3wER",
  "key25": "2YA85oBJRVo6WnCwLQx5TnFQr72JjeLQCMVD1CVJ8zwCDx2zK1cH8aMcLiPBGS2QfPf1PRuCssaP57U5uSD9teMw",
  "key26": "5ajQA39RgVKzhJQXVEmD3JALARafRWGaaYF4CVhEctquzTJA4gUzLHoCwLMdaMGbJN2W9NdxohL1st5mnh9mhvLk",
  "key27": "32x3VUgxwLi15XJpni93vVHQeL13nU39ypQMota2fhAdzg9VjEwLTi45jzy2Tryh1i82JwSiUEHkUak7AKXZt7Mo",
  "key28": "4wNdYLnQxrRfYcMGfgqG5tDaZhhMqUcaPBqLfZv3BVJUN8uq5DToKCo6kpagWSUHMG7z3YKuM5wVdk6wtQanK6MV",
  "key29": "4XrLfqPHLxMeYtxE6eSKeHAo2WDsivicwdiPNbpfscC4xuiRNnpXCh5VmgvJYY9BGDDDQDH5Psa3NXDd5bNmvZ6e",
  "key30": "NETdUR8uu1UBw7CVaQf8b815XADvfk7B7Pn7yvmd7iDHh8SuXc71kRfBFbeZRPdaSBa42SP59MVFrCxmEm8LPQZ",
  "key31": "5pdPH59CtXFAnD8mgGmm919kEJddqQ9U1c2maS8NDvJMf7m3F3z5aZEdkd6keuoWEyWtSRppZQAMVsG5cTodMLN5",
  "key32": "AMtura8zkNFzCYxKcrukRYwcUVs4Pnk4NfK3g6zXfd9vQDMtmm3ApsnY4cCXCU8LN8M3K7TZ6oqxLQcpaaxUWjL",
  "key33": "67ofaamLAEQMg47VXx8qnu22m5DrrdJPCmDNGwTA8WisTw2CvwofwifDWpLBxSbexFcmkYRjHyP7ht2TMW3JWdLT"
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
