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
    "5VNzH3G8Nf6cERBuJxvsFYh1axjB37cwrM25LKRDfKhh1WcAvzqNJ8HUBxLFAVvnwPcUgAWjZPnUYYhyYkAWjiAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xDmsc7G3PVcTYmf95otSZ46JfUT8SaADUcUns5NP34sXsjv257MTxLjga8cdm8RcyWWoPzVz4fCfmFK7MKkokVK",
  "key1": "4roAMzzWTnvNvVnDV9J625VfRonF9rJeX2mB72SnmLHyxk599xk587NGh66GU6WCBXreFg3woJKY3AxwkWM8steG",
  "key2": "5fMJPxvrh2Q6CATZQEjCnf5dWH8ioHNis3uT8sLhj6mgraRm7tQUmZ4iZFUH78E2KUEyQGQmq9JxuZFWRFziNm3A",
  "key3": "ZoPRNZZztpspKMMWFtfMN45jVqyURupjvMT6kQTqPnyqkoZJWEWWcg3CbH8UcbcvW4kB8QQfeVXHxiPdahiAonw",
  "key4": "TEjzzMRouSoHUMPFwKX1ENtCwjAfanDGGZWghEqHYxPKzBoHqQpSSMQDb7Koudqir9dUG1QxidULvF5rN5cKoLG",
  "key5": "2nDZ2SfSyMqA7SaYFyn6cFkttMbrzaWTNJ4XdpN7dhweT3n7WxJAnTNEw8R9btTsXXUumzfEDpuGHRVkdm5QmnaK",
  "key6": "4WZQgJJ8UVcxup1v4JYA87wLru444B5WnUhsUKM3x6sw724xXVtHT7bf8PYJmHqX4cpBk7RmrSw2NHbd96VG6H8C",
  "key7": "adQ2nHCTHcJrEGMy7quxxBK7JDz4fgwHdyxpFutCzTnPbvNVj6NWJgGTKoXt2n2Z52AoXSWSCzRQXLx4K2kjDuE",
  "key8": "43QHQ9HnHLER3qmTuExD8L6BtpmKhiqZHWpNrvqCaRMsX2TbYmg32rg7c1HYQkoX5hf4a6uninzfBJYTHbaCoBWB",
  "key9": "2TsfzCt1MoDcc2DBERe244sKcXGDPrGjChEopi8NEcH4Pt3g8y2m8yEJXwvdJZ1qC85Sfa6uAbphiDoEYMKFnBFM",
  "key10": "qbqsD3p36Ve3zn4cmsxhLtcbkkuUdxNACeFv7szKiid6SRV9jDivzzU9sDtoaRc5wrv8s4F5v3LyEe4VHgh9Vbw",
  "key11": "5LXezFU1D8bSdJ3PKKR71ZR9ycRYkX6ENVBDH8UghG8TLENCHuqBaU4CocF1XqFcg7myrnDU6fAdLYwoNhCqYyWU",
  "key12": "24Sw7HSsdNpvGkZVPGRXcUEvTA2DJ4Y7XdVa87wWcx47v3Mc21naMFGM7nh4MDUgEfeYSKRooqHcpF7WgneQ1oJ3",
  "key13": "3jj4tMkiTDB6iD8Dpq5PymLPsieSAMU6YWDM7Xe24qiCtDdLUYQBRqFfC6yYnAi42G1JRCmo7NAGhjRe7gX6vhu",
  "key14": "3XeHsQyvpWBzFcna2whzCRZvx6imtiJ65Xf54BF7kQa8JiD61nomLadHGV8SRqXdkYi6zFixnrx5LooJsYLVV7Gc",
  "key15": "3PEcD3G2jTUDFmibvZyKUrbJGwgUcX9CcnsVr5e1Dw2pK3BjqyCrns3QzXW3aKMxpA1Y1nLUcwWXFVxrou6ifPiR",
  "key16": "wC5eD4TTE7deNKi85B7FbjDdVxeUMwWVAEw6zVnyTtRGee7fVhoZVR7zTGpqydq55aNqGUMsBVJiZpkPQavtis8",
  "key17": "4zWSBNiHy3zXPDd5LVfxW75Ep7af56Nk8vcnbPDEA4Rm8T4b8Ve53RFFZg4PcWrgusM8AJggam3yugKunjjUx8VK",
  "key18": "38YrAPkSAfW3VuzKYzqy5SSUScwyPegHDsgBdUB7tVBNno5QJrAjTAcHrPexRWFbqv87HBf68gWU3a9wmLhQfSS8",
  "key19": "2b6V7oTNehvhnd7c5znsoA5HHrGJYCGZcZFMT1sVgiUrXiacouLU24XTSamQBxAXL4VmqyUg9Ct5vmkSmZCkam3f",
  "key20": "5SEHq947aRUVwr1hfcK4dYE5qSNTMywMdE6XYzo6DGRMSA54759SXbwQYkpCtHFqWivc1ybJfRwYQtCx7MsK7wx3",
  "key21": "3yy6nBgt4MfCZqDuNmCJ5un8ZTdyNhqz3YqnZRVT6R3pfmTWgdh4CGjALwXc7bk8FHEPEnDw6Y5FitFYJLTzvryG",
  "key22": "ENj3VJNrNnHY64TkMRNSCVYGcGqsDbc6mjJovv6BdoW8BF77HM3SqzK7PsGbogE8fL5fro8bQtVEuK9ANh9ZwE5",
  "key23": "412U7K3nswBHkB6nY5RioFjvd44KYENcpTkoZm1gz9YNpKNNVPJ1JfSn357W24ebGjMdCXtPNAmPpAxMsX288hVu",
  "key24": "tHiPMtDbuLzuppiuDVNQkx1bNzWSC24pqV8DqhD9e6kbNCYzw6pnVYfuQDrKGeUAdaY4dDnqhvSkxoxG4QVaXka",
  "key25": "3nWhUymBGmgSmKnZ6dfdA8J1vg6xF3KdrmL95Nsv9DTztMPirnLF2GoM82fd3nguC69gxWDasfd3d7msxRdQDUHA",
  "key26": "pbdMpLweSu1c8qbyVfmMXYmVi6QMtjGBPnFckGwTKfxkG8YTB3TK1xNLy8evPnM4gXkbsDr7mNbBHKRafFXBufo",
  "key27": "436KDVvtkfVSdjXofY2Sz4yadXszgEUNDUV5F4T2C6xEAStCFuTQP1XxQCg9kXXPSDe4DWTAsbfUXSTD5XwJ6TrM",
  "key28": "5cBTgsiAXEYBHrFveEPdmmxYmvdcKTMUvFz7mJ2idb9fbc8es7tUk9Fzyxy3duuL14eZAVJruoM3qD6WSvN3LmDE",
  "key29": "3Ch9udisnNnZz1r52f6XAmkRAApSaEf5ojqXTeHBqzrBcYBQBKQLe9ZumjRr81ZXm17a8J7maqr59hoYjMzjZMu2",
  "key30": "42H51xj3rKh7LaihhrT7jVr2UKwnLMZwRqAEbviVk77nYHnBHTcH8aXKFaaWYTKtAQHfXPrS9wAeb1XpZtZzd3Bq",
  "key31": "5Emjiz48rit5hExZY5HSHyN5F75hux1HXAbnMVApDCb1o4BDJuXWzXwhENHuLPGb84vasSgYzQohVTfpg1LZVj15",
  "key32": "EEeRMiPK9iGShiR45RUiT7soyXqyuHdz6X4WoJAHnpc3CMhU6N6Ba5BvCVULq73FQVM32t1bfYWrfVtGLU12LrQ",
  "key33": "4y1nBGoUFqwViQmvzYwdvGfJPgLZvMnbnyHBJZbr7DaezcPpWSFeuYMGAze2jbf5g1xPUNMLvEgQ8CXZDZBkgcpC",
  "key34": "52CRCsEoqoJZoG5QHxkgA6DPxfmdTiWr9GZy5BaGoJMekifwSfuYkZfyeaoSnz12iwd2sjqmmSXKqjNrhFEWDMoL",
  "key35": "5W2JrFp4uNnqp1zqfnd1qExigbLDmeCSCmymBu5o8s1zfEWdn1NcWJbLM98sfXdrbw5KJLYYVuswWPEHEAVCwp2",
  "key36": "4braQpsfcQdVQ6NQ4iBuUbQhhXo3NWfFQeY3cgLBBTMoZuFYLMxMyFgBa7Yv4ngeD6VayyvomkM7B4jhK9TFRNoY",
  "key37": "5GDez1ZcR9RZ7xpCgw28x17C7rzySNJNpkcqWjgukjoEfqy7bS3NEeBeH8hch9tntJKjmX1NicH4fCfcBwWQkbu7",
  "key38": "oNd1HVB3VwaWTCDJkeSFNanpmyHpTJxJcRYF9PvSYgnk8zDuiBD28Qkfy2kyWMwM3XZnAQV4vBpCNPfevGAXkv4",
  "key39": "3uCvHF2SqYfexgEwWruJRM8cqLueqPB4yPuxK8DbNqVqRz4sN1zzXMCFcWsSGjtvZQ9ika78ELAPL6tb4xH7ik3",
  "key40": "2BVcV5YfstZ15Lkyc5x1VMhnqDDHBTkWHoUJzkJd36EvVozsoe3z5RurMaNgRe5cFxEfPUXv9c3W8CqwURH3cHZq"
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
