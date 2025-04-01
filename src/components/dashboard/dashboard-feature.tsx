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
    "5NguqJ2EWb2kCoHUT2mPRk1zCsGZ5zWEqLgXRV25X5rHrjXdf6E47uuXzE8VR5tLs99i7DwnwftbXRogbihReFW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S6XdxvyqAM7r2TWqec7AMnbB1LoQQ1i7RFueeWK83m22gH1ueXBK56y7bDbS2PCFQ9LKqjR3nFqivqdhqvukmuC",
  "key1": "3VDzhcQAVjp36g44XTYSeVBRSH3VvxvMEkZqys5TZbTk1GK7hdiWoYAmmyV9NjGFKWmcvv7BrojgXZoS1BjebA8w",
  "key2": "5hJbpQThy1ugRyNVYVNU6UQP2WTMi33rf3jnUVoC5fHx4W7zkRDgQvjpLLbHYQChZFisxVtpH5UpA8Wiq9kidWKU",
  "key3": "SagV6yJZkBYe85bd8v8gq5coCmDQ6heRsGrMXZuMsnBZ2GhES4KiJBF4Q4jnvYBjZ8nyBQ8ZggtYN627Y5VjkQP",
  "key4": "2efmV4sNshecAhyzuhH4DyHQEugcEmpnkyTprMxRwUfMLj7de5NFZR4iUGbpJdRbEfSpeR1v7Gk2As4pEEuemRYL",
  "key5": "wUoGzGBJpHhnTVtbzhuK2B7CNsS4kjp9CuhCYY3X4TEowJWdm6FW2o5AguJpuDfSmXL5wETscbx6n7oXzV6mnyS",
  "key6": "4r2p5Be5fRBNHGJWdQMNpfu6GtbizG4dAiGsnWgxM2g9DfRnhbiGEcXgt1d1VxU3GVo6gEWerjMFaskVxH8FJQvV",
  "key7": "5EmngVRMy3nqdsCnceWTrmwSn1gu6qY926h3nWfTb9Ca6rHenDKcBB3B7KnFDVNJctBzYT9LLUrz2KwNbdD6Hzvt",
  "key8": "4CG49J6wxwkB4vvQMbLykszTVmwEBtd1eRzjHFMf5EW4g6iCghpnfUcmnSwehHbmkBrjeaeaHMpMTcLgshDS9LTq",
  "key9": "qrKGktyGwy2T3GonqxTsybW6aFEBPxSL8e15wDoMgXq9QLwawfW72inUoAeWCRKyPqLqEtx7tUJQSM1qtxTB9Wd",
  "key10": "38SyntXXArAJxV7EsMUkdgPApiFe8dvLAY43o94bUWNSZjiEqF5pe6CXcMdgwJjyuqnW68yomauCXxnpxanBSKdB",
  "key11": "ENeT7f94rnzuSD1tmf5VPdroNBVKZwPzQvWSD7Anm5mcWe8DbcKbXFToj4Y6MJEGT43uFgjqm5NfDoWiGbfd98c",
  "key12": "Qp8w3C1r6MFEXksjpaX7Zk6j7zV1LpGSLc32fG6GSHxLM9L2wMggaJsN2eu5mbNozYMAMPNLLAmjGhmTupsXtVE",
  "key13": "2nuZcCUfx65H8Jmv6Gwr6w4HKFcMiZVnvroyCiRXg5jR6tbJqGcvaAGJveUfnThEvXP1RcECLzZcTdtdSq67Hfxj",
  "key14": "3EKg618RyK449qnHTfc9RPmFvAw2dsjmb5YYttqp2KTxVfLhPkkd6qbjbwyurv2gzQ3YEBuVrfQSnFkSkbt1hR1J",
  "key15": "5Vqo7GZ7UE6MNyCXrF7ZHiLBPr7r1MM4mW5qQgXAf3yGCbv7Di7R121MRhYPvt8FntCTSoCgezJAgsXTiRFbGEEb",
  "key16": "457UVeqR8KHmRgUYGdkE6pqaQjohXtJwFHLKHsrUTryyJf4nXMXGvd6e3pKmCnrGYWgUgsKfjJEod32bLS2rQKmQ",
  "key17": "3WqADdCJKu3qexBVwpKrTE7oNXBVqiT62p4x6wjQgHGDVr9G6Be34SUontDWxQ5swtTh75zk9ks9f9xstNXCiWZ7",
  "key18": "R61vpAiPtdVTAPb9VtBAeHxWcvCx42UyGbSKGYUokJNLDHx4APtCgtKUjd1jeZzbiXZAvKsaxxhprkTek9F2DB5",
  "key19": "4wv26oMLDnPGi5tpC3kKeUNkCQk6m9yUthB7J8K58SRTa1ShhicxLqfRqcPau4CDTJx7dagjrAT9khc7frZSTWqu",
  "key20": "4exaAe9X3LFJACghYbLB1Vd6DNQvBQBhGEoqZWA5aPnBDSvyeFSDZhhefgTidbSWCJoL4xFfxsf2eKFZNhkdwhLD",
  "key21": "5r7Z1ot4xisXBNiugmVXpEUutXPvNA4vSmz78sMEP71ThJWXEjf8GUmzDW3rsED7VnYUUhkoUfoxJS39EMN53PZ3",
  "key22": "4NZJGyGfu5By5gQP7oXC2XZhfXWFC16bKT88BS6b4vbLunCUVhzWxfm94u5MkGmJiP6JNys8a94TiXwDWC2YD853",
  "key23": "2d49Y3qstgThhFR8VpUjAujkiDdE9Mu33qQmZeRcLqy5H4xCMhCP8UKQJWeGArbNs93TzgnKb3CyRDcvcn4w9DJd",
  "key24": "2PKghCj6TiuPdNvHGu4TLrju9kPSw22ca6ARyUrZ9QsGgDrUwbQTpLhrZUh6idEsvUkYPGa5QLPdYtZhG5mUWFF3",
  "key25": "3vxMnUFWPyLqLmmw3MvPsAhoJ5FTH6zPjk5uADzxofzPEXNBjeRVAvYHuBNjVBnR3CHQcgRM1U28BTGqBamSawNo",
  "key26": "26nFP15TrB8FZP2jHrZtxhSStW4Z65mz838z2xkR9AAWKQiU9FK687UTd6oTeEGzxpgkcbjBhVpsstUhSeS8fiYX",
  "key27": "axrCu82as4m9kw8FcpTiPXjzGQGnic4AiFz1AbcdPRjH2Zf6GZjY3U6zUDCaaghhDjsD5HE7LS2DYpmNGo5LJpG",
  "key28": "kQtGG872YDo8myj8MvsnsG2pVUEvKhg3KMpKzKDdDUr6JrkADoRrWxQAA3RqgPuwabfFeSneSfJSPxwWnq7hVu9",
  "key29": "2Xkt3m6DjvvrJoTd2sbzGCR7sE2XY2VgJXvECyA7pKPyMKKdgHaG5e6ZScgTYRgEcTaCYJP2GDmob8VJtTLwc49T",
  "key30": "5oKf5PZaDNqUEhdyRYJ1c8tUDHpPbgUArzb7VrvvvnkJ377XjwL4jZ2GuZpU8j3dP22JDkPYRX3NrQUUaGqevcCy",
  "key31": "h3A1m3Mxs2TdcJZDoPZZ15CQjx9hNNHhuTnJt528xtkjTyi1ckyxQAK1jNkFan54jVcZqvgZaJKb1N66NsPdxp2",
  "key32": "5gB5yk5aRedorHGbgx2e3RyH8SAZFqLSfCsVfNFxdKkmvVykm1dtocHhHy5tztGzEyqUTLCDkKaFz21dPv33d11S",
  "key33": "42qiYEBxQEcpVB6F51nbtrK55R9Pz8TKvn1X67LLwqTCPJEmz5UD4jJSZSJp7jU5JAWH8EiAW9GrAGR4F6tkmks3",
  "key34": "64HTVUPL2QzrS3NE6xrPEAksczX1MhgFAdqTJXaTLXmR4SpPfgWeRdcjCrrg7w5WC5mEDZMgC9aXS3EEUB7ed2x1",
  "key35": "2aPr1cxs2C6vgwCb659h7YBHycHXwB47wZS8dN4jpCKkikZ7p5EBoNWf7XG5gnnaGEQgWAQr5gnTTz4n3HJmV5ko",
  "key36": "4U2YxKuNP31guTikpLKkRFn7o26w3Cf1FNNpX2N8pDsJLpE6NUQhgT6uZb9bGbVCVoMipA8gwu21qNMJgyHxkzZC"
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
