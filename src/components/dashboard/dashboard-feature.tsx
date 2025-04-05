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
    "3gMSH9vsaKtYDPtawtz5bcxBijvZYU44ofQk758e8cJ9aBpkdtx647AAWJFZsz371SbjRt314pmrzEBKDEMGodC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jJGQ1smnioXFVbAphHueH8vCJqEbJDQEUhQK3hbXoPpyH9Csgkd7HsGUQSPUdK2wUGChXG7PJDKXizVhHS9GwYM",
  "key1": "64bZ5FzqGVs2D9PeQtzvbAy9r4rqjHsG47KhSKfRzWCvgUU4TGKXuHpuznvvsMfHwXVZYuHxLoMnDZwWtLoiynrz",
  "key2": "42R1soo2pMi4yYHsR7oGQXCJs7dAJuhzwnUFEKmQVVv91jr8JTUbPk9YNnGSiUAkDuCCsFhCpraeNJ8f2N1n4XVQ",
  "key3": "44JNzFDuYQAbS4kWvZMCXWivGG8pfcfD4Gq8DazdsPKMpchA8amsEX6K23jaEP63CpD6jqEXkqDGN5GxF6fKixph",
  "key4": "4khgiZpsqxZKdtFc4CVVzrFftwj4hWNJZSkKtGWZ3zsBtCnsGKPnjTAdLh9ps54KaC3vDAWzM4F3JbkEEneWJg15",
  "key5": "5Xa2hzsMMhgKiXMyt8dX39yLT67m9oN2EPgofevaELD9rXdFCR1ieipAQA5ySP6zDW32814dv1icEERPtDqTGc58",
  "key6": "4RWsVT8vQ3Ph6fsz4M5HEieun54T94oUuqH4EqzSVR6Vqvd8jYv7256KLTRo6935uKBzZ7TBXiUEpqNubcwEVK6M",
  "key7": "4RfRLdjpL1x6Sv4UzXiCN2AUPfWhHvZDkW6pGzthoDjFZbuFGZy4DJF7TezWoUTP8YRhv1rp7knc5AhwArDABSP",
  "key8": "4SkAwZFqt83eGx5i2DiyTeqaCmuBvxbGxoV2CAV4WQhoerSz8NZ2x9mtHeh7HdEewZVy6noUVjdnn4fEBNebTKWo",
  "key9": "GRnuvgcUAvBhdyYpCUUFE9s9QNSm8AVGG3U6ArZJwVkAp8tkke25F2hXy7zMMA7NqdMWE7xe6awraW7Qa6E5nbM",
  "key10": "Xu7d22Kur7Nmq21pUgv281KgG7kMDiC9qfKLXzNgYCRaYFPpbKtNTxUw5iEKkFgS63gL9qYaXu7kgm1uQS1vtdP",
  "key11": "4Dv8o9xqyqVdu2P5hzV9Hh27Zi6Nz8kudfuMMaH7U5CZbVSYShnG9KpUeaSNGcJXzYupUKvnVys5dZDMAAtoo8P8",
  "key12": "QqqKuZHWWgotx94HYJwJwAbSTdg7y38gddGSKSkYbZWWaZh4DEuDtCqyQMF7aeL4Uk2bGHytixhqjLpnRMxSJbe",
  "key13": "547PbTBc6W2krpYp5hbwuyZChhr7yiPxsKmvsvLP5SvAULZCRBanqr5784it7LKabh2aLBh1nrrdMpSnnEPykaKF",
  "key14": "2ZA4Nb3Rq78q1HmVxxHEoYCcpgooPpVVD7C5GxYfAes8D8sVk87yAfQ6bsigaDhXuhRWmLYgaSbbCHmKZTHbGJxX",
  "key15": "3VgpowwxRYFSAVuCTbdAfrh2H2R3SZphVQ3JxhTtG3XUcM5qghQF3PnsqQA8DxqXSXDTv15NKgc8QSpWdKHAfZhD",
  "key16": "3hn2MXp6cADLxEYahPjns9GM8xk3j7MRKsrxaYHx3rkHaE81rfvfMmuQpk6bAbc5SqLqkgRPS85RAJxeLgbKF4Re",
  "key17": "4u33gkkZ19mEmTf9uecoZyf3hjPV29es4A1cQNNv4cAntBKsFeCXjNJTYqeBkKD53gg1d8E1Hw875FqCdh1uHoGf",
  "key18": "3t4jwV3cibcvXGGRHhMKAkaT8tUiciXGWwrnRXQvYJJ4fTHXMkk1rVm1UsnhidEvPWMfEHAnbnHS1YwNhzPtP5px",
  "key19": "maQsUCEK8PvGEZ5Juo3Ejk8QQoF6YKdjaSpQBD47yVDp9Af6p9ZBxw5Uf6yAzQGcAo2poMioSmQLxG9nqg1RRrP",
  "key20": "JsgyCpMhmmjz2kEdizm9Yv7Qtq72iMyJ6aUBuWTY8896pGn4wRvWbUkh39e6p3ue3mx14A6FkTGfS8xoppUBv4j",
  "key21": "hvegoZMX28j7Gcsh4wvr7a6kS5KFGzgFoXZqbPCd6CykFCCSH5yHTm7PCFAnmVj1MD52yBofup1YVVQtcRNRGP5",
  "key22": "5ZQV4PhD1U48ZXYuUQBWVSsp96uYLUfT7N1mbHwpRjhdCaajFRt527nSVf4czobhiEB6pYXWHsBTuAcbZzLqZh8M",
  "key23": "51jCnHEPWJnsTtXdAjCcxhMvMbHFRsDWWYDTiLFAdQaZ44WPUdmDUAypCfsGcvHNKwwALoULM8DBirudb2PFBAXf",
  "key24": "SxwUMe99HrEQAwWzQypWZBZYoiJAPQT7cHFZnTYnGx5Bu3SWzCuuoqDAgTmi8DcswpASaJi2YjxbqDw9QKaQj3D",
  "key25": "4jkzu6TTuXhqEh9GQ4HmTTHb3gB6AmGmRE8v7ANW2NFzabj3YyspzY4c3vKkZTHZutrB9QBeUd6DU7fxvG8oUxnz",
  "key26": "4cLLQ3vbJPhP7pcEAPNeAQb73nSFYLrTMQoETPTxNFnGBaT5KtdBZmpRjWKPgkdRJxZPpumLHZos6fC2GbwJiAqk",
  "key27": "2uwdE7VP6MM6eAazakekZm1doeZWDd4PMrSAguCxiBAAyZgm6KWoGg7ZikAX7FayRTLK8XHT3hVKLrKVY4etADAR",
  "key28": "ypS77MfKKdpQ6v14BaW85wqTKqRdKmLhtF9GzoiruH8nhbj8snnGp6Eh99Y41ApjrhrHdzN95gynz5rkm7nw5tj",
  "key29": "2cqWt3TUjx5bvVQKPLm2RYDSQynZm49f38dyaR6d1F3Pk4YzFdq94RrEriZ68u1tvcUc3Eyv8WWXG1QVS6k6mWu",
  "key30": "5J2UxC2obRFC4iztyUCVMyqRztUWaBsTS3Ep8gfAXQJ3iYouj35459RNGaq4KSsCAQRaEeSBZ3GYg4sDPoSwSzNG",
  "key31": "3LNpeK3K84TD8b5WcZuEBoi3BRuEAgvCq3LBgsXNnLm1kq3FEpW79FauAr19BFpugpJcSDNENXFs4nU8esJpN146",
  "key32": "3R7FnqBrruneyAehsmPq7JwKjiFKUQYR9V8uFxHjCyhvmddeqeS3JFgiEqNXMnVG7SS9HVfnTch5idxjVJe7ETyD",
  "key33": "2VJ1wqYj9UDUhEkYB68b9QtHx2f9LArZo2cLMziu4qqYGRjhy2r1AF7z8fM54W6uuaddWyc2GeavYzT31ZEwmKYi",
  "key34": "4b6WFa1BUWsCt7nuKqMQ6YExcSAzNdPhmixmVLmYW4e9MSEKcQPN4fuRB7wWGbCJquCW3Rj8Pv6QPkJ6pVudfMh3",
  "key35": "LnafA5cwSHbCMMPebg1g6jaziodmdh9kTmYcod4bstYRZtaS2t3s1P6Mbm6mL8XDyqACooR5EHKapJZkdk9V4E6",
  "key36": "2Z6bjkixxGeRLn3aKTA1hB4iGhYmUTFPKCee983odxEUGWGQokJRwkMG7tfjtyCYy2TsuFajEDjKN9riSUjbnzNV"
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
