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
    "4EKje2oEwwmUetQXBv4PDdjxpUNiwJ3msBM765ppte6o2tzPmHsdytv6QyYzQ7xTf8caQ3w1bebArQe8EuzxUy5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kCMnkc5LeFmwh433kgBSDWFzf9sssSVpXDLnxf7TLMXiAKZ2MUuDv9KDrbqRTJqhkATsgdh7EHpzPy2QmEnVVzc",
  "key1": "5QwSypWX38LBZuvDtk1mu9HKu8PMat63obZq4P2YtM7sDTPXs688GtxzcFQKhF7tQWrrRatk4fXRB1GZRa72g84C",
  "key2": "4X2b6goG8EoLauU9XvBiAUYG7VV1YGp3DVhZdRZXSxLCvMpZqX1eQfGjvUfNp1a7HAwnBPC1NRxwMsXiaDBAFneV",
  "key3": "3R9CsbpLaTJReYrY19YhDCyun9RfxZgbJRd2U3wCQHhBv33Sk3XSjGwnZUyrVZUi7hHuzs3AFmyiMDGNRfcMJXzP",
  "key4": "azjQgw5nvGosrm2tszTocaXzbMXF5LLV36xNpQvdrDTSi8RcAAqDQroCWjo4Ym5YT4LgXsoDfYSE7kRjeZPzkXw",
  "key5": "Ph9AZAytj4TwFCVcofzrw23FuVJbFuSYQL9UNvdbJhjeySfjkesqCWnGkBg4Ev144GAw9FxAuWRh87Lb1fGg3yw",
  "key6": "3Q73R1sNpjq9TMPynKep6uMYR7DsPnUuffddSMs2jvAoEVnfmAi3NjeB2DrdLzGBovgedmo42w8WiYZAQP6pUgoh",
  "key7": "awoyVf222kWRmA1YtkiVCWbmvDE8LpjmazdxkmCVzRJvsp6TtiwkpFgr9E5y3AYGCXQLf5y8cA9Ktod2Gj1iWyD",
  "key8": "4PcsYbfDib7bsNRh7qavvcLGSLjHG7bnrfzk3ti28xCyxueR3J8JiQs7d3a3FY17N2mQsnQETyHBpxnUDsKVuTc3",
  "key9": "3ZXfiNKyE1G9ZwHCyEmA9fNAfqnpJRepoES3k64opxiRBKMJYxyBrxuDKUAePnMyXsazJm767PqpriWhCKF84DNR",
  "key10": "5yPbrff4gAcN15xJqBnMuy6MgAs5zhEcjdP5wbxeC2x7ovtJSUMjML751V1ifMBkoLuvv2u7vZ3AxcJgEiQWEB3r",
  "key11": "MdrNbBtTwg9joUDY52DGyzziTsrW9rANAYK8uzUUyanWjWpQJxG2h5yVZXjVkucTgNL48cQwEzdhgjXFRFUj7gu",
  "key12": "4DHMnf45cPYbZdjB91Ah3ZYJSpGJNzjVDfpGTXTkwovhJvJBEux6oWPHM4FHo47FtGGDTV8YE2m5KBqPYmTZ8PR8",
  "key13": "4GSTBSiD51TxYrZx6CqqonDoiPNjVBDuxAWadk9SsV3vrWHWPxszqyxNjCgc5PipwxtkictPqZtqW7YTviFc7fGw",
  "key14": "54ph2nmKm5bcdEACVHYoPTAjPmAo9aFsmjPS2ZA9qrguz1uwEbVoUowDATxoKkds55e2JypMPmWXpVLWknRWBML5",
  "key15": "5ov37DTz45DA5cqFC7iL6AzWs2fr4PdYCR8QpYN98D3wDA8CVGT7RRuwJMmpYta1zNMgxbQ7yfHbXkqi5Mu1ZAED",
  "key16": "3uyx9XuStye8AMCwKAommjLzLgpoZdogd44PHmyxzeDbHTHeq9AB9fXX67r26PsJmm7zdwQYGMsew7hva5XmZooT",
  "key17": "5soZB7NNmFKefbWwtQ9o4fC8KJdvoxdAxqRgoG4quyMmrzSjG6zSnmJbZSzQS2FVciRwwZgxUMnz9PxBmjjNL3YY",
  "key18": "5QxDmK9MFgHUYk6xSvLQteRp2EWPMo274doYZqrqr7ixnyLVba9dtJfoqMDMmRo1dmQ7WFbbWESyjCWjstqYMamg",
  "key19": "4fcpsQnStCvJUm1it7DdqawGPkZ4PAUkTwsMUHjyYRwzvV5THnM8nziHZ99xkXf39sGUo3Rc57XmiGC7pJiMLPaX",
  "key20": "2ZwEd1WwctQR3v3DX45k8eLTSmf7EDwkwpL6iNU2j71AenXy2HjTz2LzEsb1J3gZoYBYw3tjuq3mm4DAaGvNRQb3",
  "key21": "428dNtgJ1FeHKmvkTJtfxvv8QfzMQJd9ZPSDVALbf4Cxi8dZb9wxTN1NpGTj2XBbCG2Tw1v7HREKQ5Z1iBNWZRSf",
  "key22": "5jWshh1ZP5oLa6Ys3Rd7NAKBHtaJExoTXtvVZMQGwwShf4Rz7SFuvZHGf1C8df7etB7ugkGZuwNkvGam33yzD9ud",
  "key23": "296YDtQsbJzADCmATJopjGMJWhgnAn3sLjDCbkBjQLSyaZAjxbA4ohiW6cMBLrqzwXixT6kA5fVWT6iEYBpyJdia",
  "key24": "qcsHTfoeWky64tUU3qdtGw737ecnhN7DWEDGyAMHPGe4aHmXgsPG88EghzcfJtd389uCS5djVGXFPhA2PwLneUe",
  "key25": "5HHaAtYR3LyNz3S7Wt6A5Nvtjrvn1UsnxRX4fHEwFRfpF2hvY99nM9rw5wvLSiKZKZMzMvw69yq3i38zPMYypyrH",
  "key26": "bsYiDQBrw2oVo1SmR6aheQDLtKUX15D3NzJGitY4yvCBY2B7THiwviePAXAAGXk5nvNaPqKHqBoqjmcAKZ4w1xy",
  "key27": "4vV6Q3dcZCo7BQ9f8mJpjGqrxZEwsdD7S9KG7AqL5NAAEdAGfMcraAMBA8SmZtZVguFrGY3fTJRftr32bzEKF6ex",
  "key28": "5VY2DZSg9m528hiL7mF6fK7hCBhoUDoN9YUasiUUWwYXD4ZYYPvrebhPTC5kjPRFXMVNdPZEbByfiB5a2eGxQb87",
  "key29": "2MaKHoBSA1FVNmNg3LvxK9qA9kZqdYUzN2BkpitFaSS4qkfwHmJEhRktYuj8oCiuTiQea2JMqV5dYNgtoQXwrYXz",
  "key30": "4aLKqYcZzTBeqn6AzwqHDtmicU1gP35v9tTzQsaxBfg8JwaU9imFPxNCgehDkDKecFkFPGLwm8K4AMsA6Y4RveRT",
  "key31": "3HNUasULGkiRws36EHeP5Xavw6Zz8krPZd75eafEPXo1Zqv51woMYqvH6ZNCiedkriYuLHDkXHbDoxaKFoP6sgWZ",
  "key32": "gsZXce7XEEhFBEXEUnWwd4XDxnNHcmJtPe3auojR7i16qBxBtTdqJQ1u8bwSPhd2EsY9VhJyW43hgDSa7KGGzqG",
  "key33": "f4Jj26QWjoZEKoDrS9vrdLXaV2qfeScN5iWrBkJWenW2LAyyS4dQ85hGV67sDnjgHY5LmM7WdviTupLoE5UVWiS",
  "key34": "212PJmqJeM8hGQfGFSLJn2dDniUCy4uzwJ2Ugx1acDEG2kABw82fcmVmJBpv6TLUpvnV5a8wPop7hYf91GE71pKN",
  "key35": "4r2RaVXriBb4xHQjS5X4Zcrj3A8zLzDhrfY2EEemq9aWoh8wiPYpiXHZjFJ5htkPYuH8tGR8eYv6cpRsJ2f5C2ra",
  "key36": "316LWxrFiL3gJtuLtnZs821SPxCS3mgtd4ssd8g9cVV5fk846LBT1PxXVpsLJcwB6RxMZyYwKLGRHZjRt6N1ZsFp",
  "key37": "5NtnpzGW223w6go4P7WvJBrkFEu2ddhj2wksHniavuXQeE6uHs1p9ijv4AGpd6mzmbeosxqpYCHM986kyENwKuRS",
  "key38": "3x6Fbcq8ooq9bcqpLuWRr3PYY33EDmhdHUbhYq9td59Gj7qFjWRtuY6oC97i8v4sucSQA1Gs1oeszVCPLNYJgwC9",
  "key39": "49x3FiNTEa3iGiBs7Kpz27akeVWo71uyEkM4QAuhB6YHteKTFXdaSP5YppEyYWQUjX69soAMd4D19QpjptPtQbge",
  "key40": "4hgr3n9ixEwSktfvgt6fxodMeY89SRg1RXxj9QppfZ891gpM27EDcE6aPqfQfQsQJGRUYC7MYsbmBE2YH875nVtw"
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
