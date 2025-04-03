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
    "4eaVTSyaS8Uq2YS4u2pL5F2DZn1j8Mi6FHheLHq3h8eHtVHcoChvDHfaNXtWSa3mTsk4TgVvZyNYeiAG3e36975p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1RbjA835Up4a1fpr5dhk6E8Yk11H8fKVG7FQ9vjpRBACHpWw7MFGx52Dh5QjAZjFNtBwHmMRVbkhHCzTHh29xme",
  "key1": "4rcdRRbokRv558QdaMxqz36VrtJQwMSensuMTgkQHkeih7myxnT1JTC13JJdQTBKEffnjCPwQTyQNuXXuVGUjUk",
  "key2": "4VFNJpZ7zwrBuioPAKTU67sappp93RWug2Zk8SNHczPRdd1kS8LkCptvNMPxqbpRePSPsLESehXeRoDgpUZjNJCE",
  "key3": "2Bngk5GtcdseCsdAZyg17RC33fCZsUoe9aXze2XqJGYcD7CtJzpm4tLHwuTezfEyYY8gQpcxKzGQvZ2EZW9kbsRg",
  "key4": "28tg3cGkK5cZdua16EsziQV6DViUoiGEJxVydaN4DDhMxG2aN1pfTBztiSASemHYp4PzEvdziAi5AmHA8fKVfEvR",
  "key5": "3zPo926dW4wYvturAcH5yFVsRbkiSKwaS5UebWViFTrzhBC2icmQK5MHuRHDiGRRBhiNw3zZ2Ac4tsbC3PU2z9JH",
  "key6": "kKcMZqMkdZ6qkuCxu3PeUzJq2tKfEkcvVcSB7ndRWXZ4j44HiViAzJFCd1Qu7s6ZpDxwZfTM7HD8jbkvSd3LFbM",
  "key7": "4b3ZeBgPro3w4ocPy7ViPVEYaLaG9GF9oAWwpRQ2Tg3awiC1R7XjLdeNy4b5DhRRZShE8rBgYnQY5nDFENW3mU2b",
  "key8": "2fqibES98ERNiPRYf6RNJnXF1vm9WgJc8pXZuYrBnuJDYHZnsAm9UduE3PKD4Zhpxsu7oGP2w3yoyHMbzsrEHHFB",
  "key9": "5A48mB37ZSvJquJNUY14ni65jyzYkrk6oM1AzooqZovYv6uVQ2hhoHkYUQvShvD6UpMhscUbYKkyM1wzWgYtocn",
  "key10": "5EeYpKUo9CGrqjw7qEq1rjHAebvxV3s9U1EDcJnGLvz54JG2bmmoxcDpXSj351hjWgfh5AKzoZANePaDZpryDLYT",
  "key11": "96m7P1oqnDeQ1zhexkm7gjagpNeCQBLnzZ5TAUVh4TjT6JshqvZwPywEQBjAXrWzhRc3sqmDr3FPd8D76wAmBQr",
  "key12": "46uFXgndfyXSYUia7jjr9qNBWWQ2gWXmixMz1pKvPjGW6mbmVgZeSod4i4136HoT2KSjmctbW5vc5pkiUeBB5Kjw",
  "key13": "2VRSqTDx698Spk14rSAXQvbARY4rQmuCDuKa3YxHkPoSYQ6nHPNLSyiT1wzZveWZ3bLUDX36DpfqK92pN4hUwvn4",
  "key14": "4otLn1STLnoie6fG4XLf4FCnQczjCghFTnJXJL8KqjKf68mTVTjQz7pscH1MMEEJxhfmbHE7NSr64o8xen38Riep",
  "key15": "5Xjdpdc3AuBqqNMNDwXY8WAeUmEBvNGHRbiCPKhAaUBinx2YgFCyYRDD1NsnhaGv6SW4gvRn4m8gz8S71kFwBNvS",
  "key16": "T24QncVzKHc8pYPTwesLN8ckV38PnGjt7Hq1VqnyHQuSze2qiJn69iE1GtdckWJWW1DBpJaD3phJBnyRroRNnvW",
  "key17": "29VD3CsAFcQgxLXbpUVRJfGYHavwvh8gYeGnjHoRwL91j1XNb3woM8Z4UjECsiek2C8q7otTdiT3VbfS7BiVNreK",
  "key18": "2gKwex4Bu1EQKHzL11pXuxQiRFA1iaLziqQJ3KjCDLtQ3A7coJM926CZnZXLFd6kRhjAp6BKPYq916zymCRYgJHZ",
  "key19": "3pDsapj88wba1wRuQpubHzRK47ezQVNtenZpuC438qWuCiPCDcTsyAdRifzkcvxntExFQuEv6f8U8i5XV2JG8iyV",
  "key20": "498cCLab4Jdf4juSa3RdTWwFnsn8RXdKx1ZU2jksbAf8nnBv5RQpBCwidDQZqXjCUMh4oTTp3LUFBCb5Fzjkjs9m",
  "key21": "5nDpvBvFQ9hRL1bciJaJmT8VJPD3JWYDhzvA9PyBGv26GhqGNQnThdrfsV6X9vdyYXS3gz9U15ouuhRzGdyFWSHS",
  "key22": "34MmM5gFZDA78q5jW7HYgCyXjBJe4z6RnH2MfnyaNEj5HG4dz2mEfH8pUHhGYKpNF71Wn6ygZzcCAQkXEDh66SaK",
  "key23": "5xzDFT6DhkceUViUYNYT5bUH16K8WXCFC2swTLdprgNGhBahZxMz73o1suSyfnAV9LbQmCRPEG4xu16reuViX7xq",
  "key24": "5U5W1CcPPEyQFh1cre5xEn71RCwEJ55hMkJhfSVirQe3TdCPVCHTGBcRg7XwSq4JpkcEPPNSSu6bgN4yGhuDZdvB",
  "key25": "4jUyV8pSEhu1PwCT4q6f3uJht3LZMKkkF4J21yAJ4zHhyMnWDBG96j48N36fZoMg9QjfcHJmvyfQ22uS6f5ZnLev",
  "key26": "42fkSgR5z8maksmZFv8gX2ATNyeeSnXkRjxCibJ7JwmfRdoCiPE4dVomAA5Ws2Lycb1e2iXpuqSiCVwN9LCndcdA",
  "key27": "5snMtfkqPyQgZKtxDzmp57KzSyNKAMegMWZxczTFFvJgXjS1vuPGMYUJLdM9ztaYVF7bsZF78e9CzPQdSwQuvEg5",
  "key28": "2iTxwkCuTCvJsFQoFgobpddjZKTJVJDRJs2QmM5EnKXHjy5vqcXrNd8orJAsWCfC8Tu3hMFHiJvLi93Cy3wb7VWd",
  "key29": "5Mu38CKsCVK8SzTRfNPe28YmmYkJ44r1K8RXa8sgUHWQm5hmNZWbC42zZfWc7PSGHLJmopWuThTNRcLSxx4H5Q2L",
  "key30": "3SwVe1XRs7MS1sBu9JWUKSodeU1eDX8PFCiS5nsn6DATM2rKtwXjx3VDjxT5QTGTozdtevtQYNB2miJoaZFWhJ9f",
  "key31": "2cYaN6SR4VTVaJGvMwex5zJQBK7WgsQwDqCZF8194ry5CcoSebTcPHBAH9LFAciWrc7UFUnxVZsLHgBDJXpgyHb2",
  "key32": "4BNZgB3svp4RhanGH4SqvEjq1ZG9nz2PJgufMSU3s32N9F2vNM4UuAVBR5hWSPE5Py1erTo6sdYKyQynu2LhwYYV",
  "key33": "5vzBKGe73oBZ3pkDYPiKgZGgFNnzthVwx2adLcx6KHEkrL74R8wztAnbqcJVqcuYfZ2AyxBZDBsVbQ5fZ8F66xAn",
  "key34": "5YrQBK8hR54W1FBmadEhdE6FYRrJshdKD6ke18Fzg7oUkiaNkpqb7ZUhCBmdM5FkR13rvLYWG14E9LbmCf9JqagB",
  "key35": "dq1W37ChPepBdq6hbFxAyH7Cy2bU1J2seKsB52iS9tCwgfhS3enrssnGpXL9WLy8DQ7uAcPGNczW5zTXtUYyN59",
  "key36": "5Hx6M9AZHZPrvEfqiPJYwyv3HFYyzxgo7MKsFKzCryeitj4tWCwy9J22usCbghhJomt7VJMz4TVGVqEUvmf38GSp"
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
