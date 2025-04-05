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
    "4HEsBKfib9XRPhvXYvHQfZ85k68jhqG8ULkhtzCQYrfYAEfd5hszegJtTwpBhVJYwrUiReuN22qujYW3rSMmW2sB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rqVJhpARRXVzMbhvQX3HuW9JoKZaauqN9ExzCFTnJyrseTUvj3Lv8yvQkvjusNmJqDhe1SXwVg4MKSZfu8EuH1A",
  "key1": "64ADaEMQ8po4hyS3ci65RLJy2mfrYwintGyPQEJ5mQFS8WpWHU5bvwY2uJKbyf8N9GZWBDWhs1mygVwcqTwJY8MB",
  "key2": "3caVg23SQkkSGRvefCNK4TPEJnMva2mRFW3pknh3yz6aPEStLNytNqd1bBbrj4fxJUqRbtMj8J7ZD8vh21tFXTxT",
  "key3": "2dh5UyctnZAvUMvikikegHExXzV4vZkGALaKivFv6qyESCbhXu1AUHTNzxhuS5BHMS4JUTRNohWnEphe9Vuuvc1E",
  "key4": "67QPsfR2KW5V2DDi8Pr2KzDyovCDhqNdt1E8C3tdUw49JvnAG4Z4uNmNjF1LysPnpftWokV3nHCvNjg1RLqZp7hE",
  "key5": "47hPJMYTAtozawnzkUjxDHUmfZT8WFZFXpfG4USrSkY1UfsXdZyPG2Vp3xQNF1PiMb9sM3aVqbkEy3kNcaLjAEVx",
  "key6": "4MMosctjoYxMsomc3CviJeQy9WsEXNHxk969iERGWed9dzyd8dUWcAnfpQimn6yegGRo3RqLpT7SCGD4MU8HbheT",
  "key7": "2EJKBBvSWSC3uzb9vP788BDdQ58axgKYiGUmRThGQ34FjGMuvgMraBJ74x7MBsHVuX8BcSa2B9AQpjBveAiS3guc",
  "key8": "25PaUtPgfPKZm8WanM9N1SsTtr1cAkorCPFHwSJJ84xZtn5sNCKzHJwz2UThtGDteZQ88RkUuvTQZBRHqDoJbPp1",
  "key9": "2YqaqxMvc2u71psw2N1yiC2Uc899b6NjJ78dfP6Lf7KJNudUr8nbqpWArTEqZ4JxgVmxjLT6es5fykb9XVk7cuR",
  "key10": "5Msqbn9EUaiifMC6dAkaxJj7ZvG1NCASFxR2gZuDdK1Lz9VX98FcFfmykBxJ6vQJRpL4bQo1StBt48DiLFq85uaN",
  "key11": "4raKYpnWwM92wY7v8u4Hrk6erXxc3uFpXaPZPBBazLz28mEaQRP5QZjD3F6RfPSGtMo6g3ZQGPXVZBEDQFBb2RsP",
  "key12": "ZUN2UNFJcCVZxMQdZ3CXb2YwLNq7cx84gCP6pFbcSig4iU4gpWrRzx5wSLZtDJLwDov3DtFvHaWrGkGeebsvxPt",
  "key13": "3m2FWNCddUaAEJ1PzCEfhZHUErJtV72AucPuibAfhqKsXE1CjHrsr3UnaTEDqDqGBz6M5puk5jEXsMh4YwcQZ8P7",
  "key14": "kLHeTRhYXgZDXncKvzaNqYAiPWMrZd7AYbKCKpGuCzhM2RddthoakKV6ZE9is5Sc53o2SKCcaZU5dRZ9XYYBDvy",
  "key15": "41jczrfgT6bszB2WYVo7WYixMGQFjEnhZE7ojjxNg9BNG5ttEbkBmRfPtTpF82yvbkN8jPRMVYvUqfb6CeQ43dJP",
  "key16": "5htKw6XShjNLAiSt2D4m7wGpUwZKecVKWVxHo2XRoeMwWkkizCSxgskkJAQedkikUx5TzZ2DaiBPHuNU4k4yKVU6",
  "key17": "5QarmGEgqAK4oscUoVvDcJMTj1zDArLHP4XEeQ4zQxbYefqEGfXMQQAHynxpKTuJYWswp6CrhSquGQSGnpoSWsX1",
  "key18": "ZUJ3zdkB8ujdYtm2TowA5znJGLBWfkXqmXHcUkCPff5m8vTAoPDm3LT344wMa6DGjV1WJHJSheBwVHkycWTMWiX",
  "key19": "2bm1VyVKuiLZUjT9udXUU1NX8Zb9ShvQGGRuEJ4CVevEsxzZEEX78LJJ677e9DZqPAzz8ZyoHt8UJ4DwPfWzXYrj",
  "key20": "3GyTbWUgyaQ5hQGdaxBG2RMQpUjVJaE2mVUnFGV1aKVEtZ5tWF6bpUajmbRiyEu4oBq1LkS1ohSJUAxjZgxz7GCT",
  "key21": "28gzYntYnAt3bTHMF4zWDR34XBaNM1ZGguAC5b83E7mmv8XBqsqSVBoCm6UmAfstB329YedKWyeNQTCCeUJozkaL",
  "key22": "58Ao5d1aa6Ziro4HYycJPWuhCCryqNSyzyMcRRrB9nX8cuZZkJ5oKFBt7SYLumY2F6fq1LMrT2mRov2SezGRhwNc",
  "key23": "oPAepz4vPvYLGkCHHbQTuh5N4oFkrmkFgoBRru4jJFXrY34tyErPqKP8DbpBn1RfyZjEVmGoreMSMtSYNE6LUkU",
  "key24": "4EotfWdXDLZd2gxp8fjeNtM8m1AqAXaZbD84Lcc8mfhHoRACAzNxKquxkYK8HX3Eu7Pd9AD8hJHSmwWmrXnDXs8Q",
  "key25": "3ECPGVUW47ofeQNNpriSqLkEiu3sZKViZrds2jt33NTWasKqU8Xyajt3dUwR7uLSwBkpuph7cTw63CFkZGGrHFsy",
  "key26": "2iwNW19w1CaF4mhSFtZVfkwfyZznfX8b3JByB8zCfcwisdLuEZJtwLhyczbSy3LimYFSnbts6sMhhKS7umQ2EkX8",
  "key27": "3rmQKK3NgcbeVhBu2VnuEn2SSHXarzEY2mzUozq3ygpB8oMdJZYwVhn2pWhhtMUY1Mmy4PZo8aLcoedTDm5EBWxG",
  "key28": "4BMRr9qTn9ZdFw3qYv4kuRBdxsfuaHDRE33pyUfdKjeio7KYeHqnNCA9i2S79xfKdR2ztiKJk99PrnQLuAhmKsVW",
  "key29": "45WUA9ojjjXYc4qpbTzDA6cxBpJ5Bvdi8HAepv3uJaTUSYdkip2eDf9aVXtERuRqqiCS2CKAs9736xf8JcfNSNbX",
  "key30": "3errZB4qCJ6qaKyBPGBBfoK68Jc25e2ga823Hus4AAQ4sBtb2p7dw6FyDRQrTPtWykhEeAUzFjfwga6whGbsvbRr",
  "key31": "5MokYhWzyHdZP9Lh1skUgujnuz3GmtTMTGv4ws5nXQwsNkbhe6r1nJ4bZE9oG9EevxpQkAu4atsCJdiDK8o2AKPi",
  "key32": "2zSgsZ3jstxNF6WQEGh4S3R3J3VU3Epw7gTCgQRPThwcLci9MzGdJqtBscqNUyMJFX6zs82tm58wjovh8a5y4gLb",
  "key33": "5WVYhU25ZDC4HyTKNGqiX6oKT5t7jkXDZGekA6WtRgg52Bxquayj5canDY8rZxVv1VF4uJfVWRbMt6ubb7jfxnW3"
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
