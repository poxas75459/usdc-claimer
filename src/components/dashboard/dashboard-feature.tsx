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
    "46fgAnXG2NvAjTp1fN8DwHAs7KoJrEZfCC189kC5giAF3YxAeyfPEuQsmnjJndMceeErY6jRaro5pdhWQKxzQMKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HsPEtRdr9Y4yNTid51ihnV9HrnorprJxqt9xcjfXjnRx41EAbDPKgBwSP4XW3sVcJaWHdSZrsipMdZfFckHHfeH",
  "key1": "34W46LjVJQ6DXG3DAo7WV4inUgoyU9xvyBzsZLujaRgSic8Cj2a8wXCij29BBEzctYrHAGEFF6ia9STJEJcTvpDL",
  "key2": "b6FSBhKBfvKXwhdZpKkHP3Ajog53FqbPCX9ea7oPLx7ZUaU7UbpfY2GejJf8bF64g7jKdFQVH36J2y9Fdr8kgpN",
  "key3": "3fSyU78KrDeW4DyxADqoJ5zyF8mw77T9T2jVkLwf8cBPWtcpJSXvVzJdQUKa6sbPWq5A11He6eMnMRVHUjjt7hGJ",
  "key4": "4CTDMyNT9Bhu1SikEReUFuJws7ZuzvPHX4mxqR3SQQo8Pi65buuHtpDrMjjqyXzLBKVSgfKJ9p7frhEU1m9nhLDh",
  "key5": "3WHdYnW8LkiEBPG6zA77kaThNs1ujvucQExPFSQM2iRf4UL8VYnabGgewT2jGGegYKVVx4KZH6bp6dMMaxGbBWMv",
  "key6": "5119JbYh2Br6vjVZBeD8ngbZk22eqBG3TsiMpjEimg2vsKNNTcorfwsazASgQyXczKY4tJtheh8aGSLyMY6iUyEi",
  "key7": "5h1Xcmz4BXKeDAiRMSv6dgFRGSscVBnpaegYhJww9uhic2nz6ckhKfZwSyN9L7UT16muxaG8k37973byK7LhNrBW",
  "key8": "4PDkijV228Rws6wtdwMqQ5htDV526C3DLyRweyVqM9PceKxcNkSSTE9pNbKc4ZnUApNoiyWka4ivE1se4zewiyqq",
  "key9": "L5SAFUyThLgKFre1gtUqyXf8zBfCvunxzfEpQ9vScsD33LLGmkVVThYjMsGpBjAczBYnCAEHPv2aHeVxtDkaUuq",
  "key10": "1h8d9ChSu3YEEGHJY3AeUeE7HzHXbFYoquTfTJzsGjPWvDsSrSZemJqMoPH97JBDzULmzhmNFc9BzVQkW7Fqrjo",
  "key11": "2mRvys9rjoYsWFzGD7GdM2sDdCk2z2siQWGkiJuWay1556fbG9roaFxcCxwcgxvorcRUR8fBEfNoLgULRnGLVyFJ",
  "key12": "2eVanrAxdSefQCeky43ZykhDq4k4anEiMG5RwYNVMoTM99JZN7YcrZdSFHqfifs6XRWNESMeZXEqhRACovwrV1sS",
  "key13": "4zckrxJ8vgd66LKTZGNjZi8VJgNL4oCV6tHHcjWbpc3fXoJFVcsBacX8SQoQRTvtQfTwuk8PUPUg3wKdKegvmytB",
  "key14": "34MPL5sK1deoRPvwKh8AWPnRNJ1PTRPJ9nWBH1CHSArZQMat5KujBX6Mp975bWeCcgU2YHWdqaQQcWHgbRJTJ6F1",
  "key15": "4rCVL7Lr6Mhutq18kZc5brtJYtAs1iq79nmWz9cvwv5zCREBi9GRbYFTPjRZvH4QMDPEjk39ndYkWEKMXpj8pdw",
  "key16": "5j9DL5buznrP6Sa6Uvr4doyp4ewVNmcYFHyXp6j6r7ujvivCNzPoYGJu8kFHC6UAKsyUqNZPCbjgfbMR9fHptR4V",
  "key17": "2nu35w94mJmn9LW2hS8cfzqrCbELxT3x31DQA1vCLvoPEDxfaVyymoKGDuawsDmys5rhtGj3E67YruYbdfaPdz5F",
  "key18": "5uvT5BnXQ24qciyxmiFPy4NbyAxdzgUjrdgzxhW9gGPQXmD9CGU1kXqRSvt1o5DjCAik5TDnazagJSE9nds4C2kw",
  "key19": "3iU9P6aQrc819iD1ZP4gB1w47we7xzVSF1HgJqBfQqUGGEAG3WGP39iTjnGUeH53uvHSJwGH2UEkuwtM5We9Hd8d",
  "key20": "3DZS3mTc6ELMfgyzdXHtM8VdpZKgvteeR8ywp1wxr5xffMY9jnMrDQanzTGagihS4Q3f5rGBtg4iFjs5N99ceatv",
  "key21": "ErgcQ9EFCEQEfz8pY5F8DZLQCBNJZhCMhRHqgBpoydZM9srErbGKkr9KA1ECcY2X88Y3RjnEfvmreS9a6NxCTFs",
  "key22": "iSqszmksWLeu4ht9Wkxdn7FmcYJxuQpmJrdwQp5Nqe7k9jBMkFYiLx5zKUZb64edFcbTttbQ1aZZ9yiRQ1NevrU",
  "key23": "3U2LH8FiBiDTkqHNJwen3eFWrYFtNq5FRbX3vmT6rKmfBdbgomrKqfuqZYj6qPkgHzzDKnzyGRPtfMwBZJYM8waX",
  "key24": "3HXRX3Kp3UjhCWfomQjYDFgvayrTjYVRjHuLF2DjZgBK3YqrmF2NvgSnv8HoJUYTZAVGp5PXrh3fzyN5R7JoovMF",
  "key25": "5hbMoSgQxVh24YQDt49PmadSrJu7pefLM6BdvXBYwoi8PntDfwe5VQXTp8LB3KKBY6mqqopLVfAsMdzBwDP9tKmK",
  "key26": "21Q4VXKb3UVg1D3nbhhCZYpNDa7bfChngNwxBW2H9SjqQNie5u7b6PJNQGsZga3hxqpj1W93FFopQVsevRbnUJBe",
  "key27": "2GLekdNXoz3aUw6nBwkEL4C1LLyzKATGSNXnbPNBf3a5mK1gFFiEi6rt7tZpm3e7ejVjNGHz9vm3jPxNQMsZPrLU",
  "key28": "sAevvT2s43JpwamgZYFwLu4yMQdXDsUKtKd7FwFBamr1A66JPc6sLyWK3bL9ibecZGvRwGaVLJirqNtXBP2m1wR",
  "key29": "2h8dXF2nXWH8sJcfs8AuvKidKgmqkaLhGBNYheUGd7o4km4TDR1fhN34H4PhQxDb9E3h6LmHRMWdJJ6LJNVKgCcU",
  "key30": "2GVg9pGsUBHmycdnCws3rxxy9XMAhrNxvnb6847BFoRHD4yaNUaLf4Jg5jJXv7stGQrgvujg84jZvCrcCsKSCvLm",
  "key31": "3UBeQFabDqwMNGWEiM8b2hL4AxbVN1yVAY43X6FXxC9irg2xMhWaJM74AzZB6ezRT6K6ppqCzWZhtqnM6vzYVhoq",
  "key32": "35NakCKmkVq3XxErmSM5N5MmtgcXFYjCfWavDXPdd4zHY6PoXzmMKJdQC4fzQ1XMyVS2utYcm7uRut2dbzNFMGyv",
  "key33": "2QqQMy4MDpD3F2BSJn4Mh8dR1agahdPH5UeoC2DPNxB3bxNbZ5wW1EC331W7H4s8mixEfmkiCBtpeo76Xw1Tgozj",
  "key34": "qdPDGBZh1oj43NpG8hBwzKKKbQKNwdXqgr9mWS5efCnrGidF99a7x3HywDyMdzbHRjfbjYgw9GThta9ZUqHhu4H",
  "key35": "3KNLZC8wtsb5MZsaJHNNKvGJsm5QgBSM44Dkj6LmYh2WbmELEfWanATb8sUhkqrU2bkMUDwMNLFnj3VmkDhSYY65",
  "key36": "218euZ2YSZ1sdx4Ex6KE2KUYKB7FhDUaALFc7SPceVmimFHjqc5SAHiCqY4XBGge25a9rcGHiyYxGDyRLQpX2ae9",
  "key37": "4RtBBrbYvsr7R24Lg3pEsBRhHFKWAUqag8yQ17cT1oFxJ6aL4e39haKTo32K6KA4nKni7913iwCkTXbAynkDpj6K",
  "key38": "SxogjjJuiXSTCiz9xgGUAhi2CxwvmYtfKNPHaAcuMc8vWwYZFjg1dBLQDLWyRoK6dLV8dsjKMLd8SkhMg5h1bq4",
  "key39": "8wz3C8QTbUrEJVfHHtfcMk5Rr3SXLQshRGuTXCfdcwvutRmDHyDM4rxP2P8fPVmonmimwr4KkQyLL3kRCG8s18f",
  "key40": "nUuwYLfG83Ctxzd98dGmGHJyEGUfKuGbnXxJEfqFmzeV5CSwSpMV1jW9EeU6wyFZV3nWZf7GysScietGyrTrZAH",
  "key41": "g9Pkm9tdGT3zq6jtUQnVVjj6BTnMzgyuZScnXbLABuLCazmNLhq5m7Zc9mgwi2TgVtgrpcPF4i8tq8KAnu6MrnT",
  "key42": "4M6SmBgMN9HHi8wk9UJ6BC2WSMw4JroiFnhxGsXgVuLtE8k9YPE6JeTDvkydteUzZmgwvJkr49tY8B8QX9JDd2FX",
  "key43": "5izaQHidaKGEie3YLM6q32CuSKuYsuMSx8stbzn6ZnUaDkPvzJzTnEBaAA5S8ifnLXztfFvhDfLfwpoPJcFtuftM",
  "key44": "3NwwQ3ttCMsPxGTnU8py8BZKe2V7EEh4Q9k95352BXjq6UejSYX7a37LZkKbt8fXUz2z6hApBb4FunonZnqQTtkq",
  "key45": "3Cu6EW19ZzmBq6qztFrAeLBJA7bymcpR2syb4iokks9SbTXdvRaHMhYa4eHA2t4Cu6HqS58thi7egbqDWd7ZweAR"
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
