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
    "2srG9oq2moNU2EZ1GzFvgxhtAZER5res17bkERSTt1opY6SwZU2jRQPqHgysB4freGvwnvbkoGjy2D3VoYpd7c1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26ioKPYkiGgpUxpN8Q5ZrT2utrpo31ZUzcnpJcaBtqtFaNKu8i7CzyL1Fytcyn7EPdiqfekA2u6xXFTT4dsXB9Ei",
  "key1": "5jjZzQNMYJGt2yfzAYjeidpboBgJD86CP26zBZZCGB8GwCtQkx561HyTgxwMmfx1JFgQj6LZs2ADXoWCy3HtMhps",
  "key2": "4x11V3TmMypWwYanYeGvm15ZXugSgh7fe2X96TgVHMxFQqpUABhLAi4EHpdqZETGSsa9NKUeQgLJPAq5ARXeBqoX",
  "key3": "5ZEhYuL3fYvuqAVVJZHHnyFjKC5SoZqrACDkDLbRU3RLaQwoM4SijtjW8VpX5EVWt3wBpgyDXT8E5SRrVMU4T8Wm",
  "key4": "2ZngdjmsVRwVvp8scX5dEqvCuuQCCdMssBQixcXio6Q19o9WPDhzKJgrj2V5LjP168UcZAGHhp7SaJr1m5A29DQZ",
  "key5": "R5ovWrzfLQfvfHHLPpiPu85PW3U5tAChJ5YqrBbBKEMSyuWkGC2HUpRYSuP2W2DaVXkZJahKHDZbFhH5dtzvbpX",
  "key6": "2wYGWgF9MWD46SAVyv1MA4nRPbkHcWsd3chgAWnZutdcoqr2v3kXxzZsugR49bHUNHnNQpvT1Sj1vbr9sLViX14s",
  "key7": "5qRgvHBNHfmfnfKhP4C4kJpUKzD9KzFMYJZFrYez8jkuDSWGVtpabM2rQZ8ad47pA98VceEVfQTCYhgpSPXrWaNf",
  "key8": "5efu3iZ1ZRyqyWyduTGQzYdPnNLPZBLJsm9r4a5gwJdepAX7CnYqWBnLfFuttE79srwYNhgrwMd3wcmfDod5b7nB",
  "key9": "2R9uK2wwA9ZvkFgzSULoTAmijcy7WCHmYsRvFE88nN5S45GycemZvQS4dJRcN6XKsqxXezesLR7PgW1Losihqsjv",
  "key10": "3dqm2vEz9iMZ2G86LLWXwhYhiJ6GajFtxjKEU1s4DLV7bvySKYJsA4JwEi9jyo5wucm3aeU3jM5xyf3uWrCcL4zJ",
  "key11": "2sD2frtFEGDfeqH95JZTYivn8r6wbK5YJabP2RghmTuKDKkdejssxUfpwqXACtzC9HRe3ZSZAiJrpMHuQZXH3pfa",
  "key12": "hTBSLJwWXaPu51Rx6xSMnx6iAP54KBQiNs6wnjy1WQrxLvCKo6PfSKJkXdeeCDr5aRvdXJ94QMMWhmTUDf3u4Lq",
  "key13": "4muA2eYAfiryEpQ2C6mbqdHcB76nnHc8yU4rYWs7FMguoJHF9ZoYnHTRzsgQdxXSoEahpArHM4W1NeqqACCJKsJD",
  "key14": "oy2y4k2yioq31VgVtTPVcTSqcydoPs5T8PG6KSTfV4brUbsM87hmnLu1hpG7qm49Qr8KTTmEQf4Lr1jfXNZgscb",
  "key15": "3foZDjQXw965ZH6UrfzDeHC5KCJik2j4hGbTHFhKisxvyiu8XYAvRdqUPrpK5ecsaKCJonZ5yPgNTpnskRfLBqMY",
  "key16": "5YGLyfGbjGtUGPqT2dt1hhKapjHxN7EQr1Fi2H1GoMdE1h1aKvA9CWtZxXJ9wchcL1YrPQJJgACqWbfkobEh1Jh9",
  "key17": "k7Wq8nKNvEvk6Znfrv7YdySnNnaRnb7dgEYqHMdNN78hhvkRziZmyN8EyZE4ZdgibM3LRYEJ3NFLN9KcWdXRNoG",
  "key18": "5EHd7SLSkdtPZhk8DxsbLx82aFn49DszbCYVF9PNTMkbHftYT3yWjyaA4hvitJeNJmcuidJSSyFFsXFGNikTu6DF",
  "key19": "NLsTdnUQSB4TBYhf8d9qShM4AcNVbnuYRBzYcn1ZwpmJmfbnHeFK8KYy95q1r7f5YXgjYsZtAtCghDo3kdm1E44",
  "key20": "2rwG26Z3ZUwMzBB6UK5LPUCtBPCe3Fdvx4hfki4nCDdAD8GHSKbJEsgNCwr2cgZGzCmCi5fumay5ANhz1JbVaDtw",
  "key21": "5GwLfsBRJnX7zrtrPkgdsEf2rqaWJQag4Qj11ovpFqUbym6XS7PCu6ogpR9Kp3dE6tWwEmRHmXmWSbnWkmWjdm7J",
  "key22": "2f13zumvkgYuA2JHBsXiUnk519yQ5ivCt7LzLuS9XEyjQ8c9dmY9DrEm4pfNXJKxxwQD59rutQuuL2RjxP1Uy3n1",
  "key23": "55GEidUxdyDS6RkJGKqyFESZLJ6xGZTpp7aNz38fuSSbBCCnZBNp2XpBzPw28sFqaX81rWzhNjJem4eUudNfS2Hm",
  "key24": "4spdYXWsnyuF7ZfFABUwXipMDuZHLUXuquuebUkhXB2aUAcGMy2Em5zaJNk9gcw6htnHJQzhVAj5xMDWRDMQMvc6",
  "key25": "M4T5WSsZ4nGDfDcDEEKKT2DU5dUCq1v8hW7wCM8pSE4xD1FMZ8kxx7SF7GaQX6aUe9EeXTYoTBdYNv5jqh2h5Uy",
  "key26": "5dPUCuJW9EjAz6MjEaPqHZ1pnP4apSmhJLonJEj2ZoHDQpekypMaPttqKHeEoa3AXZqH1DbYcNMRVRUjitrHPfjR",
  "key27": "4MmiH1iJE7FSQ1i3YcrhXsiWkfBd5VJR6gCc6T4VHhf31fpMGZ1h2FmssmEQphxqBVBMZDDasW27crVVXbNBHSSk",
  "key28": "4sRTeMN8JkzQXxr548hn4mpxMMYFaWS8XR4DAAFUMni1odEPREAzYPEkVhGGmx4SoZDyAude2cTvVUbYoAwZWQqe",
  "key29": "4H1SFy6HdRBZBT9bfyc16Uv7HPuCbNBdXnf6JVuD6CtvkPk2sQLXubasf6Bmeu2N6njECcK4yfbgznz1mXQnVW7V",
  "key30": "4xToNNESGRgzjSB2yo7XEtz1FgFANPhCvjaTDPPf537gFB7oXXK8R9bnN9A5KnjvjdFSoxqdL3gg7BjKt7LdC1qS",
  "key31": "5i5CdUWDJgD9JsxPqnwVphpbDWtKjbaKF8cYc6bvnSgDUbmnwyq5L2WG77kq2R1tszfVaEaNrTdW6oTVsXLE1nJq",
  "key32": "25garBqcSb25GC148HybPWKKc5VHZqFjXLoiJJrVejLRBfbpRstWim914KtKKidMMM4GYC1bphwpGiLYgaYTt8vW"
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
