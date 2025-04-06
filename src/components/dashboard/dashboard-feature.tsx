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
    "4jVQnG6V6SfS32xXXDWamBief18XhWcjXxXSndiv52cWyzd2MS17RUdQSQmtVWhDEygGsKXHPdqxN7HbCNb4EP6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FVKZHFsf4MLVSY9KtwmazJ9sjgQsa75FcMVmyew98y7JwYFjKWARp6uSbahKr72QytpdbdX8PYJtpKZ8ERHs2wb",
  "key1": "4gaMbz9e8Bx33mcFv1dJwaZhx3gMgCYUKEerchnbouzx3mdF1HsMUjSsvcaY2JWaesLoEgjcVVYmUYHZLxuXRZiR",
  "key2": "2pwpbwMC9ZJLKexiK56xmu1mdKjuUe4NhCcfoePJ53vecdbpXNjjJrc6aKhyP58pW9XEtFLEw4tFYtXh7tgLwPJS",
  "key3": "5D5NKjdBrgGzbdyvjv2f8QQDxSgdJBvErxw7Wj28wgUxar4pbsXw7t6zg4ERzMoWVXvUV86s9GCDRdGMCibBr2nj",
  "key4": "2VhfUhAhuj7Je2HQmrj1mEeDn6uBtRYTphF4WAAY6K2TzA8qqri7atgctZNfk75SwPLHWjBBDVTpeZwC25v8KTMJ",
  "key5": "2HYVXMuEcfs5ZmC8HBECQSs2MLDPsZLo3B6DP5J4KhdAsNNcJYPQFytcvPKBGm54TY1zTy3HK1vb2P7qhZJumoNn",
  "key6": "hYNxsgBxvoMSVPQiuj8EfA6GmdSmEHskV5zVyb7JoBTEUzWW2APbEbox4Bg8qTZwmkLytDhF3Xw2eFWQAFPzUcM",
  "key7": "5zmUp2YvyKwphXnWsuuQ5i2gfLQ8qaiLvtUaPGwyQ7UT8AktqZVN6jsXwqCqADoonTzrMcRV2ob4PwVs51zdQ9EZ",
  "key8": "fcd9RLC5VW6f5C2fPL9fkofoZmqZpsas5VFH1RekXUg34ccyfzX2amXt7CV755PqEBRTttHmcf9bUqo915kepyo",
  "key9": "5UCujLmcCt64Z9zM1y2C7fCRbi7u18ddEsRfZuoSgoAHNspteicvuVuMpBk7RtZ4LUk3hq6vJm6U5B8urNwtbBsF",
  "key10": "4F1evSJRPC7bwhRt6MmN1P5pb3Ant8ytqkWSm7WnVQ32CGvHhFSXuaDPRZtwvWjppfQp8Ct5w7rWcmXYBDCiTb5s",
  "key11": "3StZpcgs4eVtFSgCuePVEttFFNLg9nLr71jbU13cCwqx9Ma6dfaPSYzpqnFhiUA1fBUKQ2M5QTbHTTz4xFAD544W",
  "key12": "2sKTU5kW5rpskUdApUsoheF3LxKJX4jWXb53J1hNssf44NFuuZSDMRGTXU7wk488qPJ32Bwa9NCLRHQTJFXPMoQA",
  "key13": "3D4wLen8mhVMT8ijb1DQbzCeLBqLr6FegYL6JNMNJgpiC9pfx9nEDabeWzxj9m9LZYxY7QbDP9PM9Waz5apc78a7",
  "key14": "2bUDWAFxRo69z2FgVg6VvZ13R4PyHkrkNGfK8ZS4vsVpqQZr9CsYrCgK3Vy1mmNaQq75WnwNjKabrviQz9HbiDzn",
  "key15": "2GEo2NtHmgqzrHkTpaJyigiE6qZWRvQ2JfeGcbQjZwadPSsrpKKmMXQumJSj7WwzYvrhWTePbu5cTMK6QLxAD5rZ",
  "key16": "Zvh77T4BVf7JUzqSFSJDc4KTEgabpynJMSBfwyZvkmGgiBKhWRpjbdSaVGfUGQnGDMRVVF5kHmLr4N3LnAZXN52",
  "key17": "3wnsDMFmpaFbAJTYbm97tTW9g8ZfEJ3E3w6k53xhPEmAWUPjJsHkDz4r1dJbsNJz78DwnBHjBAC1v1QHCgnnGqrM",
  "key18": "4Z1jHNNgCa1jLzTjkC2XLhdDvpAxxU3eCikkL4vmPNpDznmNr2AVbzzCzgUVubbwAV4GveKw1TVQc1ZQADecTmYF",
  "key19": "4AfcSjDFYngsGvaDjnkG6TnQu92pF3ZZ6qLvjyYVnZ5rUeaKM8xoY1kNDgJP3LqbsVq2zQcPbbTdMV3DPAV9Q7Ru",
  "key20": "2vPVtpDMAcUdH51MKUe5WJefSynHjHDGywH5oBHXesfiKoetQGFt7XbkvTGMHk7mg42uC8hRpMe98SmQdSd69ijx",
  "key21": "4byXZEpu4MxFHep6vcpWBAwtt2xMtyEpXpx7SG89sNyRF5oK4Rj25DKJSDno95HErXNwsHSBgqCBRCqNmtRAvGZQ",
  "key22": "3eXADS4JyUTdgyKCcHXxZ8hBuFuPfSTeP4aogqH8eKQ51NNChjEsTBnUZ8yLHxpf1YUBNsEQUuqjzeQSibHSW5id",
  "key23": "5HxtGqpP8y2qZXRpZWR76f7ZrYt9hb5cxgL12FUN8L5kVzUP5K37wrn1LfnXYTGnWo2MnS61t9aLfDwFybZtAisu",
  "key24": "2j6QxgW4Dqe15nVJq5Yaz1M31PUHRM1o6Q7XBwnSi1pra21V1f4wUru8nSFefhVrWg68r6FFMtZtjdcVX4tnPfsU",
  "key25": "3YTaKmsxeQQbMmn54n5z9kT17jnPYdBhYP2XjJZvNRuW9T6niHNJMAxtsM3jzQF6FyruY2wuHtMUgiHhvzFWf97X",
  "key26": "4PHV7V3njei1e1cWS8zCRfrYgTd1fdX6zBg5P1Kivies5panTppH61ZZj2n1SPV6SrxUaQcEsNa3yMKTEWGeqmSE",
  "key27": "45RnpBJn8EVuCKX3adoAYjrzG9Hy9d8FCcJ3uEuYrNtaP8CegsSGPmE5sPmDFcerkVDXyStAoMVdTL6Ytoz4jegQ",
  "key28": "4bkwt8j5Y9AqgxoAtk3Aw5eNxJUFaLQr9PiKix9MCbwEEkMihT8nEwXGrv9ZHKvf4MzV6gPUXFKzvH9Hxo3Mrpo7",
  "key29": "5445Y8S6BWFCoCsy2ToH16QSDne9MSX76PhSySGh4wTgeWDyCeS4vbBTLuH9bksa2nSz23tzhgTsgbr5wUSAHSZL",
  "key30": "5TVbSihQn56R5nMqGLwqLD9xca7W87GaoY3ubNNyAd8i3Uzsi6fGgE4DHg9cqqQCzDscu8AA9CY1MsxLWNdTmQJ1",
  "key31": "2EV5FK9deGZXbfJg2zY2x9QyyyogL2c8JJotXz9rxXxXFX3d9njk7tov5VTvjCaQgAnSY3mXiujhUbHMEy6NYq7m",
  "key32": "zoK5iU31aK2bwjQHVALh55A41ZodJ7wJKvfwzvqacF5M8Jui6RyrkgVriexsZCAab91snoVG39b5rsf6u9cbKPu",
  "key33": "3XprrR69TMSv7GVC4cnQme5mNNJwKg6uxy2oMDX7Eoriasu6C5Amkf5QsCZJir873aVgX3ZNoTUawNyM5L7JRvjs",
  "key34": "4UMacs7udZzBGMr5KFLyJgArp4f8SY9XWpmgShsLW3Ly1dWWKRPjqQvXpMtNCrqFcUMhm48rx6JTYCnr5MTk1E5G",
  "key35": "5vNJa3eftRgnFrh9AuZ1FkK3G9VkcYdhmzmzLWEcmMtgCEa6LTyffmkmKGFjhk2nnLA4HkvzqfmYXfqcW1miUjHY",
  "key36": "XvdS3ke8dyFQhheTRQxUDGP8LeZWKSpjyyQ9Bhmwx26YiQNiY8LG6Vavm8TE73emaUS1GGGkt4yXtcQaDWDoEg9",
  "key37": "5uStVaPait1Rrgg4QtsUuDh8p8tn9sS8fZmymDFg2gexVYaWUrg4i8F5RePGYbUYAnVhvTnKq5ig6WFoyuWWMyga",
  "key38": "3vm5ua4wpqpo1yZv7WpinVReReVrYPgcVybsS9RiDUqoJnuURYbJyCktXtQFWMpvSXb6FPYduzKS6W7Xgs7hGJQe",
  "key39": "2NjDDfnqZRYLN5XSnzVmLJtmcHuNhC8w3bZjXd3DxkAaWZZ7iZtnWXt8jUxFQaNQGSEbbgEjx1Q5hDGHyzDZEK7t",
  "key40": "4a646T4LhiDx5GswurUVFwaNNgFpkF97gH1m67NBaUnFfbkWi4BXs7YJptC9ECi8paQ93rkqQNAoTEx8qZiyQq62",
  "key41": "2jDNsdPJxXiKy4YG95s4qagky917sAPok4hssR1F3vrm9gLX9J7TXLTwHs9XgCFaCtGPCgDnQpqnYCjEiEjcaePs",
  "key42": "2Wj4aJ6d6yemvfZ1PXen5FEFzYA1SEx8iQkEs971V8Hq8h8FQ2eHHqQbAoQXhJxdBvs3c82ZAiFPtppMEYh6Ufp9",
  "key43": "2AyfFnkcBC4a4nb9YyxjQrFQMoijzuTscp4Q7DUjY68R2SpUsYzyiC6fXKerGNCPZzSF1yiPqkV66J94g2weXbG1",
  "key44": "4YEPt5h3dtqG4K47emJt3Mg9dK3hpHonm7gnxhHrM4EFLHaimVGo28pySaFM2Qeddrpdf6TpJSsQKxfJgfeFe4J5",
  "key45": "5UHi1HMtyuUTx3MhW5ZZJSVKJDzWzeTLQ6DVEVeEg2FQN9ywRC8EcLXq37ye6T3hNGqK5EkMusQ54uZKcFqzp5kn",
  "key46": "5tAsneqURnUr6vAQfn3HAaj7iG9WU2uYMVSxNAABp6cARWVgvDLL7CG5mQELAQDDfVpdBCB3KSkDrqRJ7gbmWBkd",
  "key47": "5y6VwPLizDRhcmAkSiJrnTQRGZYofx4QWQhwv7Jzont1N717FQd9vP63k1U4fqnLv71Ttcvkjd93aWovaSKcL7ug",
  "key48": "54GTWLW3eM41u2EikwpN4jQMoAw1VMQvMQ8MTmrQU8wrw9TipRQKpRqQTWC71VQtqgMKm4fC16tbi46r5dCTmm5D"
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
