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
    "3rEihSmwH6o2i4oHWykq2yJnkpUq2fR9dQVr7yUm8hA9WtZ38qyQG6CLuBMbQwdT2HAxJ9jNyZyG43TKPzj7ofxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QgivCamsPKDPmfu1yuuQxFSh7dhnH1AsBbj4Bb4Cw7SXh9wdNYfDPS4SPYaScXnF2NXcMBfmqGp7GAWb7qgWT5E",
  "key1": "4frhALfX3tpmcxBQe3xGYqo6Wjvy1XhZ6PTGbejhFdsPyeeXRugyCHeqUJEPU1zz2c2p5bx5zTH2V8nuvBcQrTEa",
  "key2": "4dXoEZvAAYyYGTASHSaU6YZEeN8sWGP1pZh24wpE6a3GWrqnMoDJhucyDyxoC2yJouADNTHzDbgfA4Xg3iF9SAiw",
  "key3": "84thhEZRephUqtLbjG4ad3NosaB6pTEMuguYsDiRr2vG7hJ8yqgpHkWZdmKwHQMCPJFFXQc5qe438o9QvRJLWs7",
  "key4": "3yvwskDigwiiYMgMGjBP1tSRrwcyRLfeGy8Amj1CPNfo2gyQKnyh9a19ypnXyLkAcGGCapok3JqydMpJjqGM5vd9",
  "key5": "4Qrt3tp9RKxRHXmChBXPm6JRxaUt49Syz6Mr1RddTXPhbY22EkKDuRHkkSNx8boMbVzfCzKKzhjrsG8Mbx1SsVMR",
  "key6": "3hPTHXYmBdpU6eSx6SpPmaKJ1vd9LdinaEM8LtyBXwAt8QSXUrjix7w261yoS9tBzPpcEa5tJhvUZ2ZPepftDoUg",
  "key7": "8Y6APcwMzsh2bgufrNSuGpmbYb3zeto88L1qDaf1nvZJLvcqhQQMmzHvHWFRQAm24TQuSQMqkzNUrRA1moK6Xnq",
  "key8": "4r9SBaTYAs4qxfV6WWjHVtovwjLRUNAggHEV2emvf7B9x8DoZzqzpG9h1Xv2gDzhvJGxtuwWVGSmjUxhH6n6DWdc",
  "key9": "2LXrnBUu3JpruZp2QWDnZitgNUKGy7ipcoK3u7G3yGWMvFLfZmQdjTVsR12BboYvYc8TDLL7pvX47pymL6LR7X2S",
  "key10": "3AEDG5jQHW1w8SzTQ8peg6G1WLpnpjn5GwXhpj7w1J3HiLNrsD5veMZEXgYvfssfJoyQDrJbbQe9NgvkNvKD9ZuZ",
  "key11": "2iPSi84Si2m8WTJ3pcvWxKirEKTasVyqjqMnR3K9dgoQpXWtJLxG1m7Fe1XXspseMAyPSpLsKgN63i1En5ouCa6G",
  "key12": "3V91LmoV5a3jQotcz25y1E2eHLWkwKNLCKp9k78h4Ra3qU9ReKqzHYDgSAfC8sGyTSic1rqq2iafEtFBneK5NeiK",
  "key13": "4hGd8e7VxLhWaYXPn1QD9exqkw7pnJg3mcZwe1VBgXBsxofc2HSp2t2myqrGwfaudLBdAx18fQBJCyKtSbRzYT3z",
  "key14": "3Qy795TcPH8xTAfcfgw3H2rs2rBCFfvMTdwBLgWsMg9UaZsWg3FEsPhNUYPmdUzzyZXRZtoPbxVAfzGVv1kpWAAz",
  "key15": "4y1sp7tNmZvLs6cwXmLo2XBHv4y5Ro55bVuguU2iZn296miXADt68Jg6TCUxAz862WqjZKWjQvam5BtrozvHUMa8",
  "key16": "4icFtZdMQ1BSNNNdgcfn6XaY9TKzpogYFDTmp5yL222aPzesLsaDdm1anHJHm5YWHLuVfSCJ1wtFHEwFvznqgdhT",
  "key17": "5GyDafnWm7Jr4YpDi6VQaxp8DejRhuJkmkgCbHnYzjFDPgSrywhPBrzVCSkz9QcpeUVorhiGaoujD9cSBTSYkh6T",
  "key18": "4krVCL82JE7Pd7gSWXv4n1iAprACLdRKBzsenTDF4xCWYQFZAneUNSXLjyTSzHC1behpXLgPjuQA5H9xCP8RwxiQ",
  "key19": "56zU6UBbW3hgVvybv444bA1UKLNPsb1SwevncfkWVvmjjERf1QLVyumfzDUuAVg6DZ9JqbGUXeaqj55wPCKPoeDw",
  "key20": "3rmwzTfUrTZTmToeAPwk1wHfWEeJXsWDm3vNE24BBvbuh1Fxq2c3jdD2BBJy8EStVENWto61suZ34Yr2Ao7fwPmh",
  "key21": "4drE5Ab8faPiFUmSeLdUc5K39acRxL7s33JLrUf9onptftoDxB3bD84J32z2dCnWoeAmj36vf9gtsoYZAL3LBRAT",
  "key22": "4A9EdgHNbGxu3vC6mnJkut9GWuqcLM8L51EfMXvRZXS7vKh9W1H9sgSCQN48jhGbstjL9Hk2vHbazcoxUfmdTeVW",
  "key23": "2inVSH2pS3hi7KJAjaocEVHMnpejLhT7ji9hZkSLvntrju4iyzae8F8NNfPtKPQof3MAsZEaMcjELUgUCr3hiP8b",
  "key24": "4jYEuNYRz5bTsRNVcNsePBZtsPVzPKs32YHDqG23jNiM4Tdv4NfcnmEnu1KcsfheRsDoAn9ZauARrq8xvzyGC1Am",
  "key25": "3Tvu8YatdSJXj2PVC8jFXBT2LSpis6LRGKHEkW7CW96QZtTd8Vux7tPZeK4ST8954zFESuuXvvasCpdC9sDo9L5H",
  "key26": "5cYFbpdqkiaxdzv82LTs1U7JLECpETHjGD3AYtVdvnhUCUGhQgkmRVPWkCGXDuSyrCik8HYgCfayNf4kiTMis6jz",
  "key27": "cQYSGMCfTgYNJgdgh3JJnhbnYuYsjgAJhop1Kkf3sQ4j4m2fGTGmhYCN4yiWhZwxMZdwipfPunBNWvzUVRi5yjy",
  "key28": "3reErXhKkkapjpwopPSrZXHro8uNfsARBfAUdfwK6PvscPdfubhNdeYmDCpGQaHxF4cjS9By3yBq2tnNLmVDFpRt",
  "key29": "iVAi61XXoKK3NduFDwUdiV5k6Us4n2ZaDmtAyauXjq7jJV2ratfv6g6yKY5v4pza7Y1LQkQ4ndt3vmeyhD4Ca3B",
  "key30": "7PCS25ZU76demdPm6RLVJcbAkTfTFvfPTQBLBhLfRTN1pvJEzxcXrZfq9xfYJTPKvK5LUCZpR8ATk7WPMV5Zs1a",
  "key31": "2ib7MdbHLHSF7Z9dLB4hVP2Xuh2euPRAghYTVxuaqWJBg7qJ4JEo9W8xcDBQzYqBajca2FMXWSysJ2xbmq3JiMAo",
  "key32": "fernWxbQYUaQShVrd3jsd777vpjk9QrX9rBVz5Gxca4qL2EKfVWQfTT8xW12UDq3RXkGapQfYHUT2oB3vPa7krq",
  "key33": "5ZBPYYegRwGTSTq1VjowFAbxeF2upiXvN1KZW5Z9LeGqc9MWgQ7QX8ggxu3beBve8YUBXE7MdEKCZgFFT325mm6r",
  "key34": "36APQgEpEPa1J9SVUgsUt9vdECJ89W5hNy7giGfqigu1D8Kp953gYaAVe1KXrmcKic6NoVYTp5V9EGKf9TS5bWPi",
  "key35": "29JAmxpvtW5ZFSmTbEDqjv4Weng2LVvfG7ZjicVKGS3w5ZqDesbpotY2G8et8Mgh3xGtWh8zMTDGfhKvU5Sn4j9r",
  "key36": "SHv1RDJ6vgMLVVkLvMLvd7jDPvE98VBJ69MSPYSwM494NSYnwYqdyy9Qr7TQrTjNdN5WK4hsDwEeitqPzvUPTGg",
  "key37": "5cis5a6HQJYCnUBsxcs6L2coHt5ZKT9TqZnMhNXC4GFWD17VGEbW3uwZ3TdcVUp8zrn9Qqij457Wz6kFkmADWGMC"
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
