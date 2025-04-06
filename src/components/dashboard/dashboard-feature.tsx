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
    "4muDpqMqtsd9CaLT6ovTW9BYNqrxSiKbG7xo3xvd2S1ku4JaQzDAdWnnzfiwYsXKjp7zAv4a2xSEa4MR5J4dGips"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "749XfbJHgCbjpPaQZrm8Xe2XmBzs6yoDCU91ZGKi8dKuQGKqgRzFxHn4GtziFhNrmZSa95Kt4tB6xy3pCas2Vt4",
  "key1": "24rHDnaS3WkYFUZxYGS9T63KAnK4FKUPrxfcUGHRjCun8hu9WYisFSkPyF8i6p97mTnz3Gd8zfuhx93dL3kV9xRD",
  "key2": "4QDR7BJm9tufAY1tBpvsVRoL7ayLrrnYRonRpbH2QNV2xVGpGubiUQeg8hqfzRt4WoCfVBEj6PZnD1G5aeSW5uzL",
  "key3": "4pdPMYrnkVrvs8XyKFuM4JpUcBezBUHhfnttoeMNMwMUEkFAqCzytytNTULyU7uNfB4Gj8y4jPsPRSKs393MX2xf",
  "key4": "5NCQKRaNHzKJctrciYu9vtQiSQALC5BNVaN9JyHwfBwgTNvoTtUhM4S2vxnNTyGdNA6CPsVkGWFi1kFi3AJpFxuS",
  "key5": "5Sy25kqgkZdBtKCtDGfeAwf8NNzJaLQt3JS8h5UgoaW2CzRo1ig7UutuN3Z8L8peW6NrPdNbjNuKddodHzQ4BYbw",
  "key6": "38rqKEHHFXgWri8EvVsddgWXHsTTVGCrHe7gNEf8zy4PyXh2Hkqwgbu3Q8aM6mB9oMNGvwwxSksJ395BLRyqzaXy",
  "key7": "3yTQpk9fPE3zb7Nor4BbfjRSwnfqUUhuYBEpHJvpSosFDHNH5DyFQDa59sMwQJknbY7WiWDQqySkymmyHbaMqXBM",
  "key8": "4z6aDJX9xfR7izJNDxGJhoeZ6zHRYku4S6xM14yisKbKGq64kLboCAuoDbzbytPtnut74D8DJ9VVJcR1rcrPZzuf",
  "key9": "28rUgdonZq8aULrMXmXm2nxNQfKADd33WJHQzyYGKFFpAjKCTDiKKRG4VQKkDiEBdT4opnkUXTu6gX1y9mWKL5ND",
  "key10": "3rukeZRu9Uo9PUPVEFCuCiaeMcMxPY5S6SXdb7JiGbGJuihLoxsa6sm6USCjj5tim5eYmXfdnt3wzXJBwY6E1U2t",
  "key11": "5tpEzuArEvMp59b9mKoKM7s3442kB1TenzyZwKgv5SFC6haaoTsRrfZ8Y5E3zzPdUp1cSEzippBveY5rBsDfYUbX",
  "key12": "3e9n4a3paHtJPtxTxTPhRm4fSDHvFTJQ96gACG4ctnNUVFFTQhcVgQ1YrExUaVZtufLHfWvbABoMwSMGzLjSoLWj",
  "key13": "5a7xreNZ4A9siEaLPKS6s4ca8b3FaHiLeRNc2kvwX8nB22tn73c5VJqX96zqPxWqxbuoHY2iJR69QyEaP4BdvUTq",
  "key14": "3PYL7o7rPkR2zkhcuxSSreyqtDz9623EBK5d6kQ1Co3fuHdJVP7rmxthUyBnYcaHnVXZQHai1geUnSPFuQhBaMkm",
  "key15": "2CuxMFtAWvC3LndHda6HM7bPoX4FkdpRyPR8qToZmHY2A6vj33MjMQfKrxET1HQ3xJdv9FCRzTJNs3h63eHGiVKF",
  "key16": "5BvVbUkHXYugTZFMGLk483pgWfTCktV6nuVTVbJRegtfYMKeKzFRs3PmvRnnnfcFVNnnsk8NfJEkSPvR8ipobJgw",
  "key17": "5Rj7L28yTemySzHY5p4eR4KvkbHq4trMDdw7Hc42XKSAwnHMtsw4LUEtLRbpEhsjgJ6tnjiQh2vg4agZjb73XYnq",
  "key18": "cHS7CqrPN1d6hiMTncsnw7mpJeFqBV6L5ESUXDuf2RcphGyoPsGEt84CxKwgnrGEEMNVRMrMLLzXHqhBcGHZLid",
  "key19": "61X8f2FYrdj6shUCt6bUoTqt8X9sWNnvvVgVCvNiiBZK4Wjh4ZnFgKCGwoeyziXGq6FNsPjWsUhLxWjq4eafcRiE",
  "key20": "2aAoreLWH1wDkviqrh9FJuirjvWoJ2DcpwaMc5HQthpkYRTJmjf32kLyVGgrQEawet8gTw6sPbZKu3nKAdACNnWv",
  "key21": "25PKPQ2RaZtXigJXCkX4jHNtaieUer79TqNgwzhSp6zmuPBuRx4Xq757iqC1teKuzp5GE5SoDaoDyxBKmUFSuBPx",
  "key22": "2L45CzGZzYXKwT8FuFPYdhYaFjtmzg8GD3hcYxm6iNEX4XC3qDXuJCFk7cf4rvCXgNQPTewBdhb5AF5dZ7vBNvir",
  "key23": "4jt6s9kmECZik8scEYFTvz1nZgoY8sHVdbjF8Deeh4V391brev79LrtBNceQuwk6yztFBjpu2fo1hirVQQYJAvjt",
  "key24": "3eb2S2fBsYfm96FgfFGtR1tU6e81xSe13LkhDKk4jVjbqxH9UXjxkfKPFtNh1t9VMRZSDf4rbp9tfR12Z3cV4BpJ",
  "key25": "3VGAWRwRZD5TQNv1xvffdDWDd1dS8z8GRLsi5ypCdF4PDS6MKbqjubP3nnP1SqsZJUhwSJHeWMJkHPoYBY6CaqLu",
  "key26": "4hQkMunebU8Q7gDMgRnBShAvJuXaS9uCGm9WXZZfCDoFFsNCMfQEa6WTjprpd2aDbD9gTm1n4mqrvsshTggV2W1X",
  "key27": "3bJyr1YY9xn6YzPnP3MP9EMD17g2XCYVaAJnJ6e2zqxnMsdv3kv5vWD3F4e4HitYwTb4NAURMc247GgbujfjiH2Y",
  "key28": "48gPVviSfR8hbo1NHhynQjWk2Zza34wzxdJ5fub1yzCN36Qqi9ci6Dy5iRzbfXx9kaXKoYvsx9dS3Vfd9vHYiSp",
  "key29": "rHTf46GVNwFjoC5NZHF7XVZLRVftmPYcFTwnczfBbLsbDvNzwycUYQcNUrkhvG3PNSpnhbeawjE4XBbyq2efcr4",
  "key30": "2MjoVHMjgFdQcKXAQEgaBS8on8o9ZGkvHpbn4ntjgw43M62KaCRMpsvZrEnHfLmkrk3A1bJH9GEd3bMXwjYg1pSz",
  "key31": "4zntcH16XHhGdVi4ebREsqGECgiP8zJPpGmzKrmFhCKEkNWkB35yFTJq2CLrKHLBXrAQUSjLbTV1e1C9t5aUK1zR",
  "key32": "4FDJA6iNxVw91v44FSUNNA5EZKb95dByYBLWT4xc8vFkGij7DmdK9Zyy7fSuBXpXqmKSdPHdHzG3G3sLcKj1jSqu",
  "key33": "35Gz292qRXstk4wtTgA3ydfHhoYi8Eij8WxMuD4tE82RB1tQGBxAvgiitVjU4yRsBPUjcvJGj9WiZUFTvbQLLDK3"
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
