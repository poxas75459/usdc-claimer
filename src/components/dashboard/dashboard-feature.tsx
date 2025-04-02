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
    "5pDoHPXtdfnD7EXqG1sySjfERBrHqkDFNMHzqRFiiQZeRR5tJTfEFjhp3rvSBytoVvVG9rCEgDiiNeSs9XqA3m9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bxSUNNAvWwTRMsCv7nPdhoirW5MW24VRcbTVjirqvuiFQ6HvgbdsK3ELJMYUo6UD1mEw59GkFuYXMysazKn3pgr",
  "key1": "39rJsnLoJ9djEFuyc6YBiHfR1vWxygqchx4CPLbWjD1DAvu6Fted4ECq2haKcnNVxepquQX1rYbsEjykBbACBmC3",
  "key2": "DGzF2tkyMTQFdBGh76xv5fKL59FoRFdrEzcgh4t3URTqHFmptsCWoLmxKiV9J7CzB5VbN8n5wfD27FjdWM9KiKU",
  "key3": "5tjRNQJsp52AwUzVoBT7mw4QYU8WMdzFxXJsvzQx154yzp7PXRye228ZuSnCw2bYeMGTrJ1xhQftFRdKDUXYvkGR",
  "key4": "2xh4PBoLrqmW4UZnDCX32PuErkzfwufYYbsW9CH9RQXJCouaPAbBmBR1Jx8tc2SA3VQT8d7zkSUQ9dzaTMbDrMNq",
  "key5": "4NjKKoG3rdM6aaPJEtt9cD55sHTVCiZAu9oZDedQRf5HYj8DZtG2pMscPdvjc3iEPKH8RdHdCVrvDXWdMtwBWDV",
  "key6": "64eSD1hGW4bXRmQUpKLEJ7q5KvJULiiYgWhJc3kP47vWeAwxTYS5SYdjmbBiMrfVEWGkKvcs1ngkk65AzUJUfWu3",
  "key7": "49YsN1VpfAFKN1f3HvuKrUkVjdtghwZCWfrCebX2yYvM1uWHEjyrYrBg4WYWNajKFHt9sAMvaggK1ULLtm869X8n",
  "key8": "5e7SGoAENKmXrwZ75p6SovqPHAFh5MhGN3UJ27Rzvvbaz7rGsTZJ81bekarpeBNx4bJ1smU3eRiCtxQthgnGXrnz",
  "key9": "4G2D1LiTAhcT8KBSTq8vjubCwwG56vwBcTZ9P3u7HewXH2HqMhuX8btGdDRzgJoahjLFwM3hM75pfwk6ssWoufDq",
  "key10": "MM1NNmHRPVkYhR9TvGQgBh4NhhZmZybCpEXLduuxoWnfGksDw5tQxBM9xx1RXUnqAZhDA8ujYW4nKhKz7YTpr1s",
  "key11": "x4Ah7Xwnb948sGnRrtz96ZF84uFHfeT5vwL6wJF5kwTvuvq9fxnT6sT46vXn55LWvPrrDJFgcZfvJ4ZarivotLk",
  "key12": "2YWEUwZykbVga92Zh1s3zpJgqZRXSboLrdrPW6SRUSnRND7pQ6pv7cKS4R6DE1RhiqEoWYrijKc57F18DYdc61LE",
  "key13": "3Bhx18EZUuWmnqNPueJKxtG8mQ3R2uqcagQCMM4wwejBa1bEz3vFh78qeY3N1HWAzUcYT5LYBxbVPcmBXitXd1JR",
  "key14": "5H4i22hXCKw389eecQDQ6eVmQ1q4g6LrW1nkrkVcVPBQxhyBu5riaWNNMKgehNta8HNcitrtE8JBwQXbdWkJXYwG",
  "key15": "34CujkcZbX4HfnAnaqC23pubPraXSY5NeapxXtaPzCnSCn3TtzXhjsWX7ko7aJDDuL5vqky475A31JTjBAMmCYAm",
  "key16": "2XNSAwLnVy3NgmwnR42zaPamhjRm3ouGGD1LRffnceMu3gJNiWbnZM4wCzUJdm3josqUKu8SYRD7E7PcuPGw6inM",
  "key17": "4t5Hi4FTRogVU28uHBtAJvAkozFM7tsBNAttF6pEq6JdRq3fVdohNuNeC7peb2nADsiUWRS9fQ3xKQQxBZ4RRPaH",
  "key18": "67rGqXcAe3AMnEfVTzfU8kyWBbFLkSi5svnpKcexjytUifzBbYbQwxGuiWqjrAaVXCCDzgeP2Y934F8VLLhYpE7H",
  "key19": "sNpRPTpcxMbQemMZS8DeRvauAjc7zo2C31cuazS993Y8WpiUb7mhweooEigw3q7GZVko3hwv6jAFrLiwE6pVvfX",
  "key20": "4Z3qDvaRipPeRPZQ6PJymrno3rDYWMtPgr9ZeWRFJrXBKmDWz34eHu3oAnQN3kckrAW8gToPMjjsMZcc2jnZY8Q7",
  "key21": "5K4a55boFN9drdAN7huQmuKbDicWQuFggP9nSXTPWXobpTtufPLQm8Wa64qFphrHhQwmTCzmgF8Wuw6YZTHLKcQs",
  "key22": "3jswCWC1xyVe2Cq7GhzEvSkYRYk5C4mW94UmVAX4nXJREPUAb5jvyANg9YVYY2UJAXHD6r3u782gApcgfbfBMXa3",
  "key23": "5bXQsenvBxFYfYVJrWCGU9sY5cXmKYayxNPQZAs29AzkoQ68EzRBDMeNmAh3thNSH3cPZWnSEyGKshzJ6BipW2hQ",
  "key24": "4RqDsMpvCfqTkKD9AmNPe6xwYaJ96FqM2A7M13WBZuDDRi3JYYUVVaDSmU9tsSUzjCt6t4rLkMo3MtNzEjrpXppN",
  "key25": "3tXoGeEkBrqFeCgqBB1gH9GimSTfEzjAxVxMTDyiDft3Eb4xuDkBhD1rVoAx2US6pTkt1dVVRwK7syE9CsQUGV18",
  "key26": "2pNjXQYUeSr4WwBPVdAeETnveEhJRd1wyfpQuyYDqPd6ZFaMGVM2qu2pbiwPVSvUHvoQMSbYvQUPTtUG8x6vFy9z",
  "key27": "27yKG9eMrURzpQYCqh4Yx763Tbss8Z4WjFF7CkpkwUGy75YDjJB7zWsX5yqex57CcrLquVitEWz9bWw8KNU733va",
  "key28": "3v6K9RPiCap2CyP8pnpDGefBczgwLuMk8ZCAsauLBzgmTVoUVKWidqhwuoTqRaah88PpLUNg1biKAPamuaZxrkcQ",
  "key29": "xUJkMuBQWyXGFkFvvE7YHZPkqxqxnCGUYBfhCa7yVNEVQyEsQmPmPtJppRNw25nDi1qvZpRrrLAKJLWGToGTYcz",
  "key30": "3ou4qcaSG3jP9bLFa4rP47x1TMen3GZDswLpdBo7BqwtLuZzdzmEAC4CMf1j8HTH4c66J2WQJ6yXhBRJ6ofcjPY8",
  "key31": "3hgvF4kBdSCGpu5tLLEcbtb18mEzax8GptE7kmMxKcwoxVP7FEoK9ignBrsueTtPoEEQqTrQFWMjT9SRcMbmVmim"
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
