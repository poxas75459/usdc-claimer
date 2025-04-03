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
    "3oW29j4GxCxHZtuYHVroH4dZWEAhDCh3wB6ZPzRZ98ndKZqHsf1nmo1xKB3z12Yse2WtrNC6GFgdkyME1jVoZABZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wAuNjdEiAJ9K9NUVWJQf6R6oPCGS1zwjLvsqeYG2EjwMsuFTAkKLwo4J3HYhCWQwp6YT7fv1wEMncHbaFCrPvUM",
  "key1": "4YfyYrFHpThK7DsnzKy9H6wwMnTFbZhjR7ShV3RfuiJDUCD2kdefp7brjyHB27AFCQQeqMpHXAMSmSKe6FRdGrZj",
  "key2": "2yVGdpbGz57AcLPpd3WvHVnzuhzR6U3jjXTAP4KAGb9EvhZNfku1tDzDQjfmkEyp42owWHzCfxB4vHPHMqgbUrSF",
  "key3": "2gyT6Ca1VQvksgExzV8ziH8uLMT396AvwZ6o8zQLgC7YoxV51zaxuPhkwWbzmEbumJWmedXeqkd6pQJrHGftmiR2",
  "key4": "2sZDwtfAMco8sVd4mB8tFaEnpvboq4RBthuQxQ8AzpajZ8w6meZafRvpcYPNArB9umWbksBB4TmazF8FXcuZfR3e",
  "key5": "4XAfUVB2iPkMW7zViHCakgzbe4GYJ4koHXDzU1vaNB2SmyReAn34M5DJHtwFmJsb4jJoYevERjRWj7YFE14Ch3nL",
  "key6": "3zYBsPX8Cb5LerQzft6Q34jUM1S9iRXTuYovW5wmKHWLDxgzBu6FV8bM2vDDPvZ3NoaFhS9jMP41LFb3F1EaVrCQ",
  "key7": "QYu5z58W149dfomNsCK2gs4E2JWWUJ8oJTdqR2Kk8SZaCUkM3ysMgmCTjTwsJdFEzcZQGp5jT7TPoveBfTRAzAU",
  "key8": "4sG5nARDrNZxNpRxREax77VWZUMpGdnkMg2Z3roVDoHqYvqeeVdGSQHEJ82TEc7hTDZvPu5J18BMpGQecqVWxnNs",
  "key9": "5SmR4HrmXo4vz8ntstyBKwh7boAxdGpp3qQrWG44ESXaSmqFStHr8K4WSCmsTVhApj7cfU7YGu62wqTrQZxya6Mp",
  "key10": "2bneCHGEeVFfiPTUr5b9PdT4t8rSaAf9572PY2oonLADS7GBnmY5XywP7q5kfrHaQWkx4JBEXMdcUVJzDKx9AGaw",
  "key11": "VrwJVjp9c9od67de6sgNw7CsrkvZqyatK6w2VXxuERVu9Vay2W4c7Bi4JP2N7354bqkKHRTWmskGmxGENzAzLCt",
  "key12": "3qv5Te7q7eyi7h3wHF8TNEF64CTYZws3aSm1S7jTRPDhBYzsXV3r6Aai9Z6wTu9wRV9s2Gw4xcbeGbhwVyVm62ih",
  "key13": "3BimFgmvzEbq17nctch8mMpv18B9hYvW1GjKeaSSDLqjnUrubn7RBQ5EKELXrFwYJrTBibDFpkii4GBfr4MGjxgw",
  "key14": "3Dpi7bqy3av8wV9SfmZArCvme4Rt4YG9PfnJV956Ziu1k9g5AtXhd9Pw6EtKTpPEtYuGVhJHXGGtmTU2QRbpHjNV",
  "key15": "5KBySX5SWSAdfxsuQnjvVGq9aPjtfkdW16YvwCFNzieuU4SBKV3Bh7tgrJjbsYC6StdTR7NFyZyp3rXVVspDamY5",
  "key16": "5RsVbLj9xXTe47ENuH2PSYskL6KYRcRD7CUGh8CWovRHhSyiAPmm2KLhbNi3wYD4dUNqjZJC7DH7yfHtXcdY6HAe",
  "key17": "34ABE7HB47esz6xXTcWD3pWvBDiETNeGL9tkpmpbWNa4wJmhN3sDRmaUXqpsx3CSxdCqJjgChV7t5kCHELwPva2h",
  "key18": "42rAaCT5F6oJofJRkxQNJQq7VGu8Uvd2wF2HhjkTq6jao1JSbngQmf4bZDyJTg3ab7f3st4dnJdLG6pB5V5x5LZE",
  "key19": "3DBB68H3VeRLytRiGrVLTRheZtXjiR2dwk26a8VbEg7Qk8g8gBk2NR8aRkusMC4hQSpds14WHDnE5ovWqaLZM2ec",
  "key20": "3JvSB7xhMBPjAD2i1k9DhJxMjkVNuUuKeudhpqxqhWVL4svRjkttfkoaeiCx4y3K8JBezNpKr19FckAtKrCRxBkQ",
  "key21": "uKoXLbzieb1umr2Wzv2YS6suduPa4hS8sHv3HGnddEzyKn24thTdyifTwonGYXjDKm1QRtRJS6dk9dDRBjX9W6n",
  "key22": "2nyV9EDBNdV7StJcZVrK7VYgMvzKxWNQxn7RNB5cfzWzjnYWNBqXRpJTBx46Bi5VByuqbdESYogJqEaWKpvhv5rz",
  "key23": "34yz8N1N2eie46HF73Yv4XS64Y3XRzsFccfpVmnaRGnMtPRGfjoq59MVBz482NTBPC8LzkJKW7PpraowMqmp1vWt",
  "key24": "5yZsEdNkbv6R8vea7uEFNasPogEvG8AXwCQTKuSD1Y7rbPUTT1D3Fa3wTxojFy7GKBCaMSihPoTdzG3vxuQi8NN3",
  "key25": "4Ey35Z7pPwLoA91efH4nNmwMSNXptKrKztAK1sSupVQmwKPgt7trq8HXJFNwtazXHufLm3rpeBRrhRvdDV3ivzxH",
  "key26": "45RaC8pg6nHDWJM984GtBvQhE7Fdx1zbyD2kWUibP4ud8C5X4pbtBhvmLjHTXztJWFjK7vkNctjHA5iEuTDyfKu6",
  "key27": "3D8pmrE6qP85H8QSqWUgiGRT1eiujPD1cphoPgiWBmoh9pNfb3qW9MJH5m8agmuCdrP8byFC24PWRX59uRxxC3yt",
  "key28": "GMG2ZqQgEjVnwYa2mpKEJzskYrqDYkgtMZBRjknz7HrevcZj2BAJ7PWZ2J849okoWAkhj2Cwj5vYUGYJ34A8XtQ",
  "key29": "3s4FDniTig5QbN93LUtBD7K8rnE7wnvW8MUxfFrtFYpGAWhwQWG7CHFWbzD4Uvv19G3R6xnuaQkykZsa1iYnUfnr",
  "key30": "1xD6Tm673jSHrQYshZiMoKfg1hZQDCeLprZatFQktSLTJCGyYLXJtYrAiRV9xBukmA7xQWuHpXHShjQxUhvPtqG",
  "key31": "5xgUdKB32HGNg62sS5QgwncVWQkQeMRh5f8zTxjcwNuSX7ox6mNqHVtVytPoTLrsC1rm1D5SsGxpe5odZLnEoZHA",
  "key32": "4GFNyKWwRdEPVUMCxQA1wH32LtvkmrvbFTRUBRZEsaJSCX7c381nSKfvXiQTbnBWBoPsqHX8eNnRo8B4CtKiKJhj",
  "key33": "4185n5cbxJJ6uZbf2UzCEwpBtwSekYxBek4xohjUNe57DEuGh8xzBiZrtMcVyLwSVvNXYoQcnFTaaHdbxf9uYMPr",
  "key34": "2myGdbvShLCmYEWki9vxKynE8Ec92ucivX9G6j5UoepNBPADcMiSt2QU21trdQnQW7WEDG5h1ojWDLE3jwsyF9Fx",
  "key35": "2rUaxH6XEuWEmeeYBsj1tg2Ayi6FvTu25cMFvzv3bdBRKf45SwqxwAfznp3UmKyWpifUGCbDrHCv6gGjkZiXtk2p"
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
