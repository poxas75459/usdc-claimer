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
    "yUHNuQkAppCRfguS8mRZEXBg6h5ouEJ6AeXZK6kLhDTCvs3WokGkdCggMdns8w9jN2Syrt2NCS1F6YXGEMUs1RG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bX5zuteYh86WDVZSGXh4d6XHcqNXEjvVovFSh3nxbKSq7y2feuAS1PwtYTwa1kuFhVxXATZXWUxWsUco8Q33XdV",
  "key1": "48ALLPDanUYUZS1cJQxFJdk41e6SbCyd9jbe3huw1Q85BeF2q94aLVbxS7n9EBmQTMg1h47uPqhn1MLwBfauE4Wo",
  "key2": "5ZMrXGDVyMoPZfJTnznP3AYVWyxz6P8ngqtnqkHdWUST8Wxc7mpgfu3EvyLvUXgskg2wcd1Pz63praYRDwPJMkPM",
  "key3": "2b3YAfvkwWWKRtkTuqH1H4y9TMDsRuPxGSpF7dYt28Quwb2ms7DGc946faGYfXEyeyjgLt8UH6CtqjyEaqBknoTM",
  "key4": "5TDBTxUft2GfFgXuxoj1jTHMULmQujTpZMRtW6ZzA9kqCcbVm5KnwEJXnj1TnnK5j16qCwCvbLk9YJedy8rCa6TH",
  "key5": "25tJ9Fsh2qv84T1PKJDAeSCj69nfavYEiDXjLPx33tpktNWdC1HbTPrEpj9xNF1Ph2XxG3Sh4uRf66cb3iwUKwmD",
  "key6": "HVzULb7ZYvuojxeHZbNA3jbf9WpU64pp4ZausfNuEECEKCHmBfn1QMJ6YsyBpn5S1YgtbmMAhmJ7PcHLMLWEJro",
  "key7": "2djAGhSuoxeA4dw2eqotSQwvznWdiobYxdaKGu1XVYv94Vbwydp8KqiY25ymMfVxUePcLHp31nW25bm8ubr564qB",
  "key8": "4NeTcHxsNuDwrVu49YLPpmdDY53WXkfaJMqj3A1m2Ncf6crWoHA7gWfHjBaNG9UVufCHoUEyqvohFBhcd4YNC4mM",
  "key9": "3bVLqWQmZAfY7ii2NKvFJ5qg6yfqH47zN1zhJr1wvZ6P1pJZBwkFTz9te5gf95Z6JgiVBRJ2SszXhAxWrLaWtjA3",
  "key10": "27rp2cNJSPCZ99DEsG8Az2vh12Epqt5Mo15ZncyreLDMq1jLMqUaLffodxuU1fkaVVEnq4gwhZynRh6PrcEkCw8C",
  "key11": "3uvVJzQeM8pdCWRojjpuRLqiAyDnkpHT4uRigX5kAvJnCarzpvGb9Vegu6KcK2qwmLLTGNTRHd382wc39bsyJpJG",
  "key12": "5ydRjBKTHV9wTT4kzbdLwJ8geBBbQ3xqBfdVQuBM7CSRbA1sAae6fgF5TtnSB9WgnQAJaZ8uJYGm7YqMWx2EK75y",
  "key13": "5sDqC2kSADpZtD3DgAxiMrcxrhd4y6X6dFDJtcPDUPeCq4oFVAp9j6N4QsfgAXbLZCd7PuhSYzUUptBeqpaEo3Mx",
  "key14": "4S3kUJYNd2t9KiGe5ssgfPMu9jNqGtiEUxmSKf7giK67rvA18jAiKqkPUrWAVxQPe4VVinjP2zgrsxDn85qWdmQT",
  "key15": "2E5f4C97bzUgD7hAnZFuZm2kQC4wVLTb1RPgMvoAa2So4SLsnrRzHt4P2hs3prerfDeN9rEWmaQgtYQ4gk6LfAZZ",
  "key16": "2jigQZ9yUxDjNPFTHzdfrSxRt9bEMo57uFNwxjDGfUJYzYUWAz3m455zPAmLzocXU9UNck5UFkCtHPA52F3JEsLn",
  "key17": "2cT7egZPeCoXcVZrKMumPsA63miTewFHBw2T1V3N9LtTCRqzcGoY8mJRnG2x1UbNHGX95Tubfh83NNzBc6zLeQg",
  "key18": "2SVyAx6aaALGZtyovXE9CxecLoYeHvsMmnAFNPRw8BCiHrk1yD9XaZ4EdUZKqKXwsR2NWr95gzDxoZbJB21rdS77",
  "key19": "3RmU2WQ3GLQEa2YZZEYHgkKtkQ4XkNCqz1UjPQHXAmK4AV8L9bGnk3dss1r6TgbNb6qDjyzky9m5WNVitBepwxSz",
  "key20": "2aUgEtPbc75vFHMKCYcL58LosQX4v3krz4owFXuChKcvnnPf9ZiXcb6pqWMYkt6Qg443jSEMfz6e8ftj9jK1DSep",
  "key21": "4wsY3BKu5YHpDjwmWnLVPEu3YTQSt7PfQKxDnMsB7q2hFDUz5jB4ugL1vtHSQQaedmWrXRehxNvBDBE7Xsy8PMGv",
  "key22": "Uu2oxNGVJSKDszoBb7VKVcinm2hMKSPwCCLb5eK8vfY8V6xLham6UPwxNQej1qocdm79iiFF2siLMGh3PjVjAwp",
  "key23": "5Fprgipm3WxS7qkTdeGz8UhTaJ56ZsSGgtVajdpqnpewxuHmXDbRTsegKWHWMJ9nJ72REh4qeGRKGfa3Uof2xr4h",
  "key24": "4Sz2Z9q3AChAofcSYBqoHXs4Mxbyr7yPdtPpZ7DA8GgGCXgd3JnM4RSxq4jkiet3ET9TjNsPi6UWHG1tmo2CUGgA",
  "key25": "4LzB4qHgaDp89ivYd1Zo7vzpEfPJEv3xNFgv4BjJwMTKnSnLkkEGY7sV7PicyGJ81RqvZqJ9ZNYLSLgTE33k4VFW",
  "key26": "4DiGkqqsCtuNWbdKAt21MPmDcMZEZ8iKs2vHrfMjwJ951WLHvxArgWnzd7UsLzNSx1ABqqsWHNpwTS3gwnW92Ux3",
  "key27": "3xVRzVMZdaWzRYgUbc9tq5AAza84HHEBd71dRHK1cytMJQAteBxcSJvZen34azSDyzGkGsgDpxJ79XYqXtaUkWzM",
  "key28": "5mwKZ3nk8k2bXQ7myQZkRw9dejvWzK76bwHWgr45f9AMf36r8t4idB6d6vucxFMpJhXM1tgfBaEH5sgF2AScfv2U",
  "key29": "5p6qYpUvHnpdKZXGz9rPrYVPqkkdpoxSFaFwPeAwVHgfLYzxBc2GkREbXCJBbERtDK38Fu6D8JRSSqSYmqo1wwg",
  "key30": "5Tfjce9moP9XFe4diRxa1Jki1J7FamZtN3GionAzoSJkNvvm7oLpV8tbBfFTqpLFf4k1kjpYNQprC4DMxLLSWLYy",
  "key31": "4mmNMnxbukF2dhAanJbShzSJB6tu7jpdGzXU5RCRbNYjr8QZBD7r3yCZhZJGeS3Y8JcfAKcWojwfLyGWCYmq3W86",
  "key32": "4QLvZ839xqqj36A23y3BgBerZour1ggWRMasME91QeipB2r6yFvkkEinSdsuxnovvahFiKeaaMgShZfsn7A3uND5",
  "key33": "28s5vs2UBs3LJUj3YiEQbxPfu44UkuY3UB9zef3AMp2DLwWtzpjNC6fQBVne96aagztWCzoSX83yUFVer5dZthq3",
  "key34": "4XdfHoVNG9P9cLDfkVGGyV1XjQED9zFC5AEVHtdqMMXnHQGx4p1JmmjkfEWWZgq1WxJ4nVw6MWDdrqaGzZMNwudw",
  "key35": "3sTBvBdBjzr7FwcSD1sju2ak9RETqovkPwgUXubEdrTZYWSyBvAf1jL3mbZBwD4gQA3bvMQwHC1gMhSDP6nL9dqv",
  "key36": "Krv8HXGnHpNDD2kP9LAzXC2aSiTdgQhdw59SR88CEp5SYTKh5ifJtUzMfrEgo3yJCpw5vouWFPff7zcdtihoiLf",
  "key37": "KLM5kdsrWGj6cVNHHdxYmkgtbnriWzrcePrL4k2dW8aVX3p4n4Dfjpn7tzQDV6NjAPQPiBVWYn3hZ9tmpnTHGzG",
  "key38": "2MjgS95FxqAYgsJG9mG7YSrVdvXbZG8BWz59pCupvhjQARqxAmMsfaRqyit1o77yAMdw9Eu4NJF4Q69d857BuKTZ",
  "key39": "5niNffgC6teDHLJz8CYDSeB2kGLFAyoHesZMamF3kU5VuF53VniKZjn2AJmavVtZKoFaBjxTmy9a1D6SWPv94sCq",
  "key40": "3BWpetS4gUqaBEueCM4XDaQQ7WPvS1DyDt9seQ9ubSyniLuyxthdxJDxhTmZxNKohLsimQKvEJJtChZvQdPbJQjU"
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
