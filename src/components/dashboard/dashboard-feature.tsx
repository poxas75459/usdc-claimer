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
    "2iz59YFK1pqwUyz64FqFWGxCWLA6NLy24WVTZUHGndF7z4wUdSnnDThCycnNwPgG6yu4VBYSHQwuzWfPp9EhKW36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yu3fyWkohQAGUaKog2w7aGG674ELpf3UbHdRRBbSXoQqEhpSby17PU9Ry8CzJ1uLtESRQLSLTrQJkZ6EiJrjbM9",
  "key1": "66U8512Z4WtXEME9Kz17P4tMAPHruSjcaN8tuP3F1MxteqbPbWBZAGRywrDfWnsbtsadNHMEdMHta25Wq82SE4nU",
  "key2": "3nHgkQyEf2bN9bHiNgGpJWMpteYFNYoVzNj4yfSN6H2vRyAggbBQ1Aou9719XiCyUpn1WaJv9j5ff7Yfh1FuSv9H",
  "key3": "3c8wab4ahJuVRCQRqYAcbBenLoxk97HgSYXVhs8dyWwFHZgfnjFkyCfvEravu94XLtCcZqQR5GDsWz5nzfsVA8uu",
  "key4": "3ZioPX1wNr7eofm6wbNfydwPXq2bPs6YJLnabhKPcEXjPjzHWVz99EB62MtTgEGFTM7r4gvSLeYEoCefsHxwbyDk",
  "key5": "3tzS5fe4vyhf3W2wnZFZ82LLLiBUrAUohca8D2HzbnTBSsGakdiY5FtLZpnQbnJCoVVsi7pFQNjrvPcBz3ep1MR",
  "key6": "4ADRPzyEiCDmfrQTtU3uZ67FuxTrxY6V1zZKv1oNeqDtT6CaKTFMDREVFfkmkX7sYZmdjiaDnQYzuSJhR6JKYc6C",
  "key7": "5scap65hu96XwknYvQEtHPUCaKbT8cLM2RhJf17iRAzFUdCwh9hXJtg82UFpY91dyhnacstes2Lvh16jd2CVSJ7W",
  "key8": "3ZTC8nuafeCsN1cLM5F9m8YNmo5LmMUCd1bNYeiR9eDJ6kkj9s9YqwSTzHhYnBunGfTw1EkqHU11YhxnvvRmA7f6",
  "key9": "43EeRLvVSuTdn3gdUZaKrcrdpb3EmzSgrLwaEXg9VvSgsng5QtkGx58ouKghDx2CgLuKpEe4gozxHkDME5TJc1f1",
  "key10": "492QKowUR2j5GX71d9VJz716vc5cH53DSQtNefdam89SLkg72g8Mom3tc26XFwsA9g5h62dYbjUwW1BEWCnUufFU",
  "key11": "2nQEQpZ2GCXbe1k16vV5rvuqHuCQHCk1bUZLSDf4Ks2GVJVpUYLUvWB6wFa6a1KtmLRRwHwPCDAdtFntk35uNryj",
  "key12": "3Chdu7QLmw3HDxpJhaANudgF7rsBaAmhCTx2yvrxaYrFWQz5kRHEsc6kUH8v8eYL97LRKiWKSsNhbTBDRYY6vRru",
  "key13": "2rc9uVVckpirYuPL5D9PwGLnv8E3pWMsS8Tp6TrX9Uf5ioMhLxb7Px79M99Ly6BZ18HrEJh4MKtZM8KN8miQ5322",
  "key14": "2wXGYp8t7ikjs8rknhdhPb5BMXeqtiYHz86nTm63JweeAxNpBvLboHi4HLerEYWSLtVbaZraU1KkpRQ4knuR1Fbf",
  "key15": "4iszg8f45hiKaXWETCpJ7Cg1HxV9t7wyjUyvuTJxjFyMYFZ7DoaunPgT5FwpbFa2Vto3Mt5JRXzc5M7P6CkELcok",
  "key16": "vzhFjR4feDEQTL7Mqv5F9S3HTVvqf75AMMhuJbmG2GWSiqa8wQd8zag4s2HET2Xo7DVq58f3QrHJXWHcPHo73Tu",
  "key17": "rECQh8QgkoKKL4NHWBxwo5YZoQGY7ePbS1htfDWnxynU3W77fsFjMVJdemM8ctSBwSrB8KvSY4MLtnz782nkmDC",
  "key18": "3JcP5RnSzVt7nUZuV6zmsPGMNV4dzmV8svet7YT6cs1jSdhjRuy9HqopLLX23rKFAJV7E4PdAQqXvNsxnuAF61QX",
  "key19": "gLi7voSyTE3fRQhB5w8ioSW7nHFAwSJS7X5DErycF9qzE72atveiafpMwkK8MkC5E45wHs4TYy2utidsEX4HNcZ",
  "key20": "2JZQaXPN2PjFsKqswu4oei5qr2j4kSyfFogxW531zSUztGRFeMQCoUEfyHDn54aBFyuAhnKfTpDK7NBkuuQQpacd",
  "key21": "4FKrxYTw4bxCukip8LBeyB39swkur1QRX7eoVm6wVfvprJj5paFHxYiuAgbipv5kgT9oTZ27CQf5U5UUpPd1o48H",
  "key22": "17u14sRQTdesnuCuaDW9ssJ4zmUWS8kB16n4DUZviN9EQo6DfJY9Zfk61AxCmvsJFffaVwtRPHb6tyAJ3Uxjw5z",
  "key23": "5W2onSNypxdPDRh9C3YW7Q4EhwnTtKN7UZWAN2gHH1XYLqGYY8MymsWmfgnuopoAH4M1GypEUb7bxWpGWzc4Lmxi",
  "key24": "44zjzXgPWzsraB2Zs2Kuak1ENTWJG8YwGn59W4f65yZNLnsHmjRsYSTYy1M65BiXitfnkNXnsS3ovveaPguynfDw",
  "key25": "tpHHhRi3grd4t7JHe9kJJYqhNQtrRgKDZsRwFpfcjmJR7Piyab3qiyT2m9DML8YpQ5R8rBj226LQwZzacv2Zj3F",
  "key26": "3NrLtDLLWReSHgBJc2oVhk4UJTmhLXiKy5ux1QJnvDVr45MCd9WU5JQGwJEcDJPg6eM28DoSXs8ZsZqiBPCJcnpo",
  "key27": "2E9cAHyXpfWVZbxL4SoU8LEqDVv4sFyDgJPvezDRoBfbqhMJn3RQfUhnbqMV4sysz2c5igWtpMXqw2Yw6WC2iuJD",
  "key28": "rBmE2VPimLccwmhkodiGPNmD8k3oY2XkX1V1ZDmR17ssb3AFwkS6mvE2NgwgZcnCNiFNMUg5QUnXVtGCFZkFHem",
  "key29": "5uyMM1VDdWAFsJCRbL5DYZYB8RzVcP7XkHYHeXPQpwcULfBtkY1mUGtVwLpJdNUqX2nJx8PDdFsuLgjotSM323S3",
  "key30": "5sZJfM1f254amNMuBpXECRvn1XisWdzSZdHsgyUrd7PMCGGVXEXFwch7kA1YCmszWE9kNq2RfyCEfe4hs1hQSHLc",
  "key31": "67qmu5HqLpVjqXSS4DcFESupXjp6yhBgF1jc5cN1LoorqrFUYEzG4WoLHCUEyU8hQtb6RhHi6BvHsykxHdzgDFpi",
  "key32": "2hUnx2P5p85zTeKVUSAoPumnmTpn9NdGpJxaU13mUeuFgrcsgjUeUHNnYovUpoyYcdNEP9G796a2Xoi92UUgLD7P",
  "key33": "2vMqkApxtmWQs1cutJWxYcnDhbg8j2cLDKYMFDotxnoN5HQTSKPyAtkQKsLZpnDt3uvRCHHSTqkmYkDFCXS3C392",
  "key34": "DuQJHx1T7T9jv6rdt6aTVEYLu2z5Df3pXXmSPB36NmikLiXQhkuDzUAMPnReujvwt2GviUPe4KtbU635fQPjDRm",
  "key35": "3d3K3LF91QbmxqKaouYYZrXwnS3Px5UUigfp4ehKpUg4uorZp5iyRfwpULjqRRt1E6VjD5o8B6zgQ2dSsKU19tXy"
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
