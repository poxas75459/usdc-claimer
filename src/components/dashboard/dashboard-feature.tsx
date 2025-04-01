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
    "4DtcKf3XPGPxGyBaMnM1qab3T3TD1MsNFdZfqJWbCjFjiFKEGq5Rb76A3VXeWrhCJfv92nhaiFDAa3Mth832xUX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p9zaNq9jTve1vRM3HfpgVtrCNYJ1WZXLUrgy3rbZ633mQj3PDkPMjzFNX3by4RVmeEQ8Y8ywq163K2RYidaqiM2",
  "key1": "2W2bmP5qQwRtY3zfrUHwQxWEN4p6J7dR6vXu5SfJ5z3iUPFP9NrvZV92v28q2DTeWpaJsjizMSgES8E6KWrK9ZcZ",
  "key2": "2QdX8PCWYv528vLvzHtRPzC5oLJC6HdsLCFbyZsNhJs5DWcGUx9CQbji9JrHGvVx42dcG2SBwZ8w27R8iyz2uuEL",
  "key3": "54S4eAhVnSyvtoAEw77gfAdeXakd7sk9UuPbvbMFLL4UHbF1x3JU3TJeW2hqMdseTDPErnowh3k3adb2q1r7rNwZ",
  "key4": "54FaftgjRXwcuqPYSMj4tRkVrx6J5rwAY1vrSDzoEA8U5WSiFkeNHHpfUVD9G1ssUDyeLFtNRUbxpYH1k715cx5w",
  "key5": "5R3WSCF3or7CEdUnEFCEQkn6MswRuNLcR36ZyQzRUSDr7JSJws6rRgWD9ajderSssgMinVFijRpSKYD3ox1Li4B8",
  "key6": "2YEgBNYUxREzsRNYait7gyp7WLTJYrEZVEvk4chGyjwHzGzjsM2uuvKLVrgwmC9mRwVMYpKpqKqGDYFaixTj7nbM",
  "key7": "4KRTUbzg7r1C9xp6QHpXJ5L59Zp3i9AYHrzTfKPrSmjmgrFme2w5MWHcDYZjv9qGs6RwzAB5UxTDuW1djysS8QoN",
  "key8": "5SEgskSdnWMmtikj5Qqt2jCKM2dQoF4m2YkEDAFr365ahNbkdpFHuLa3xH4usUjCWp9eZ4FEnEQ78pEasftnLScG",
  "key9": "5sJL4rUktiaRkKTStdQcyqxEPBqtqUG2xuiBYPku8K6eaJnt8MjfQxHiNRbw7jLvnibCsaqv3W8SaQosvREXJkSS",
  "key10": "3MCKVbbQ8nx6RhvM8MUmvFtXqEoqkpLVsSEf8UZdwoPwVtpubL37uJhThPNGQaaFBed1Ty4BF6bLAibWvA3XBKSA",
  "key11": "4rwQRV8xnCcCR9uwgULCMWyZbbjo5Z8xZHekqhskjmJTKpFL3W4JVwXcnhKvpMatRYCUPUXwXbPmjTxTZr4EsT1x",
  "key12": "Rgd1GRERQukPuHnj7xrBStKEAbn1xWhrvKx5ru9k1huKucQzXU2iTfTdN7mmqTiN8NoPYZo7fkkdAWftW8UAEMa",
  "key13": "sb8kiHuW89dGBdYYp5xAsFGXoSxtTKxcNt1eknWsUtnXsopGo8wbRq1r69zWWoh2W1nxoTkLSJ9bKDvm8NV2mho",
  "key14": "5w221a9WjiTmva8ew2GapxzjFtNzF4QyjZaLE1kP5vrYvc4EMVUTVyZ9qmCWYj5agxYLBepw2p8JqLBr5p3Jo2No",
  "key15": "3RFrbYi8s1Y24fQYw3SE2URzn4Qr94i4aFLziUKjcgGGvpc6gWSgRVFHX46xRhxSHHoJhFkCZTMNavTkjiHcozPL",
  "key16": "ANvPAifv8ioCDgKeYiNcQg3C5MHATnJ5gcjWPpDgdWgmADNiTiGBaYm4cUgDUUYYaNL5XVoWPH3ytxdrZ3cwiSS",
  "key17": "M2qYJVJHV7DHxt6zDMQoSWwBM726zmK88RgLes9iu7NB7pxgxjcDTiEmxbDgG33Di8kuo16bD4ZnsrRaTw75K8C",
  "key18": "5DqXps4HBG2yMnpYNbTL64qiFCe7BtDWcrXstNk6d8xDAntoxosxc6pGpoiZsC2V3SzZE2gJvHZ43D9ia4Hfu1Gk",
  "key19": "3adrNGtQ4WoA35Ng875Nska3eaCdTbLELXyQomsULz4J22jjiBjNtrEoJKgTmVSmXwW8BC44ub44EFhvXk1qHpQb",
  "key20": "4J9T82rZ8UAFdAR6nB1iFnzgBAScFzTisEAwNtL9e4WUyz1mNxDYYQ4EDhSfR5ZdxNNxKNhtP8XEagvLPnEkPraK",
  "key21": "61RzQJGF36zTWEUojy6gE65y2QVg6wb62PN7JZoBLCsXoZPRUZ6pKAHazNTc4nDcyNRDtrNnBBQgzSzAHS8VcRVr",
  "key22": "GdKVy5AbhDeRYvL3VHTdevUjRrfBxYVbYophS3P6vBJEwuTHViXyppoBYrZWbFkDqpGruoQrH3CeguHto2qqG7p",
  "key23": "ordSMYmmvpvM27gfaJ9EKwnDVtNNjhQhM5fi7xkfc75hfkbsajD3FS8zxTTtWXDXLMVQXXyi4tgkdPwLS4h4GVv",
  "key24": "5hf4bn4CkCChsckaNKHLdkfqzUgJERvqWjMcuiSjnb9yDoWDPwb4rqdfYu7kET99uzpHnbUmLj3UuvfiFCnAn9ak",
  "key25": "ss2WLp1aDag4jg8WkrnS89i5dR2XFkQEco6bUgeJZko8pdPQm6Hi8X47JQuG2fR7FhdLvosobPssXnZWWLrJ1q4",
  "key26": "rcYRkVb2n8X8FanQMvMaS32c3K4xqCKV4aCBVaY4nwCf8RVEoZ6vbbCJd5gjGmuf2cmrVRM9LBVxy35tqVx1682",
  "key27": "2af3cGT6HCtms7m1FswicfGjQzBc3NopYZ6hJbb21tAWoWwh5FKaBKdy7StZ9e5H8UJrzczUNU3jn4ABVu9HossR",
  "key28": "59GKf2Vok59iudVy13hXHJj7NPkzZKD9NJZjNz1c67auVMSRkArj1fhbhueL7sF1ojZMCQ3azF4vQgeGvGBUxnjv",
  "key29": "34yZVjYETfnY8zNARWRrkYumUiioGmtcbkvwTdenECf5FrzygGjdRZMbnPjDquU9FUQ7KuWqKB4i99JU9c3BSMgV",
  "key30": "Mk8XPUcVBbkiq686MGjAKaDWkfWXGxM2GeKBB7xove8ZBd8vsSieRRyprztbcnoEi1KxKiFKmZ1ygDta3z2d1nm",
  "key31": "3naByhUn4xmPqq9aGgQYYTy1PaRPUfwe7cufzKcRsHTZZ85kavm4HtYcc215RSMRJ8VCKLG7jPTHgtmvB2Ygh7Dq",
  "key32": "2jckQDg9xv81eW11s9HV5wtA3r3BDRc1bMUEULfuGXL5SQugBT6RC2GU38fNa4SsVbxkcfTvsv7G7Qc8TBCA9c3y",
  "key33": "3otqmMB54w4pMPCBL91gaX3hVEucEkL7p6kwgP6fT7fuiqvDxHW4SLyEyBswsw8adXSKW74J4ZvMPUrynKAxfXLX",
  "key34": "wcPHuXTvnkfrJVC4RLpUE7xWGosLzheokFt6fYKA6j4UPwrmhVfr5uzFoYgMQZbiYv1cMnBAg58kzSMY82b2unV",
  "key35": "2oM73NvKxFMdMbsmMzxfYikJh6DntCkrZzEynDtk2oUJQi2ZWkn3nCzK7nUFHg6MkM1Qq22dta55FPsb6NsV7KEz",
  "key36": "3Dfv1WSjcxtdt3FTGqbBD5RywCutRJbwq2b6sVqqCiSADZZ8ZrsECpj88DKtUpHv6tN7vDLXL3kwT5PurTasNgCp",
  "key37": "3DAZSx76QAjZ7VtQEtp4RneA2oVfhHw4DkgCAWuANhHr3vYwnCGa8LGjwye491CYDD5BoLaNEN8qcgNhQ9UBBEyw",
  "key38": "46t62ofbzo9xx3DQQMAkti7TxwGLKGNAfunMaU5uQJJzSJnkpf2qAuzAEGroZsEajDfX561iH5Ejfxdjj8YuYaAu"
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
