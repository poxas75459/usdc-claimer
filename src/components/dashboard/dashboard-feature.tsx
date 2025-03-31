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
    "2tYsEsZJaJnc84pgjhRoMD9T9yrpxYhHWJsdjG6jgYQnkvvvnSkTJPVT2japosE2aYG6yNAw8ZSXLtpZgDb7xgxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pXPjgHLmQBJymn7vN531pdQULBfTMe59v2noco7h866a9iBN1JkyVWsxu3m8Kj3xUD6bdYrhyBp1EeCcobqPrbD",
  "key1": "4hcBFQaVE7pWewetT7JCh1ADyCbAznJhLCRKPEUsxwRnTS4htChPjgwtDEa7hNpwc9aWWnkrTWxQQ33q8guR9g84",
  "key2": "2cUaixasT1kVMif7mVhxfZXECtUNyvH75sDgaCthSMNmNb8ftJZzQGReYJ6paXafSwypCUoFfmdcivZ81Qx1BGsX",
  "key3": "2D5wmj2QiBdwSGseyr9g8ZExZLokn6wTZjZ3rcQ8s7zpETd4VhxxU8o34XExzRiwhwbUWskCi4ymjvmF5XeTAmnF",
  "key4": "2TC8zrZQj4Sb6quFkcYZ4m23E9UYbtdW4eSH1eCF5AY3GcDn77SEVoRHJ5oxEsD4stPeygUYuUbVKLZokhmyeV47",
  "key5": "3TzMWsnP6ryvHHt25KBs94KK4qYAkfo7FNQyoEvG4q1wBqoCCWsxdKSE8WVBSr4ZKxPxmmbfxeisxvs5Cfvmbep9",
  "key6": "3jbAAAmLJcEJLgjMuf9Q8DLT7d7yneY2RCoddsBzKki6WAYiqxiB6CyGh23DyiZnhhdFGMN6QbAfNd8RxpQv28YK",
  "key7": "5oJ7QshNnQ6L7dx9na7u3nafs41NSsnzt1kRHbfDyZPLX4D9aaB6CPwMmzcQxtNrydvUSR7hnbLc9t5mnHwwasZ8",
  "key8": "4roHNsuB8hYVoWqAdYKtHFpXZzQgJiLB6n9uwi1wZkhLYvTkRc8p1WouPPMitLz6asitd39jWivgQsprzJU63oes",
  "key9": "3LqqXfjt2vDFUbyRMUowywKvJPZXG25fV6dZLqtY4SrSV64fYqQ9oucdTbbKGh4zkMvq9fyH26JHWUcGpbVodDo9",
  "key10": "4BA8UsYfPoG1EuYcMDFqqtRUtVsaixqY5uLgMgSkmfR4A1jPMixFLc5jdBWZkv9e5K2Fw8rSvrKzjvw6hEMimMg8",
  "key11": "ysBFM8S2XJgU8j15Zx97aaUSa4tJmNAQdm9KNnLJq19KwH8STK1BHjmLN9DiNQcVwZ4mb73kWmCyXYqVc81hN8n",
  "key12": "FrTT3rYknHqpGRVsikCYjYwjgQduNRt47JwjWD7QSHrn7U7qQoEvqrwAXAuLTUxRbxWoZQQ9UJLqsSb9StBV1Qp",
  "key13": "64iN6Hw1qksmrBubzR1B1JzpYMjv6ZSNKs7W7YJ2Z4urLAb5GETmpp9Z5zxov9yKvYpTpfsSuGdD8CwBJGGihwmv",
  "key14": "gbSQJQf4CX8AiMiSWcu6SiemNPWUcvPVbSLVzdhfBWw7Mvwu573QuuZk5tn9gbrVtLFFWjFhdQbBCBbwMsbxRJL",
  "key15": "3N9pXXWnGqynoQ8JnHgKp1Vb5UZkMxGUYkYmmVAC2K2zP8op7L2nwFzfPMeQyq1HR6J8h5LyH5y4uS261UVKtNHs",
  "key16": "53szV58pHoLWKhGEUPvgRvYy8xekXxTRe8w8BKCihRNdTVyhyaWiYr8o2n1G92Dy8aYpj3XzAYHHgw7JXwVTU2bD",
  "key17": "2wnTh1tZqz33BVmQBfmkhBgdakDBsedxTV2DSKDgtmUuFFCccXWqzfZYwa2xG3aq37gAbSLPXZ7Jg1CWtH6cYy2i",
  "key18": "63gcYZ2QNde7n79tfeKaaDyDQifrNCu9kiKjaWPV4shY7pNQssK2pZoMkZV3EJe6ZbYoMTMsDzk5FMWrfD4Cwdhd",
  "key19": "5QsiJRTfj5SuqrErFxMS5X3rjZ2kQSLoqjQpnKGtXzoyYSPju4CAa9gaMESjw5tcGdAYYN3dQmfyGNjdPCxXsA95",
  "key20": "5vu4ghhbShWVDxM1S4JYUFhBjvLGNUmZ3KeAhUSxuH4FQWAsBZ7mEVg9AVUzAGomKmHWMs9h33f5Agd8STxrX2xv",
  "key21": "5duscEWRBS5nxiJeHa6dsF3iPZuwAQr58PqMCR2XLPnVGRkoTR6VNf5FBeaEuLLNy2xQt1UbrtFJJdKWXierDzqD",
  "key22": "4NF6KWhnjrRY7ksDgT3o2puf2Th6Nhra99rVqkPgJUANTdBBEZ47RoTT7djq8YWXkGmtMpujik3hr8v77aut9KzV",
  "key23": "54CtFdpjg2DvY6cwu5RShsL8FAs4hgG6HBX3keZvVw9PUyXMLC3NW9Hhnj1EJ49ouczWJwjjKh7xxtZNdUe4H1JE",
  "key24": "zcpz2tZz4Z6UCpTPEa5f4D8e8LRbUsmKp7ScH1gYnEhjwjaAhmrXpv3VnKAD8wa8wrdSbzd6cjsMn3ZSeivyCkF",
  "key25": "5NvVQGpMAD26TBpEGGZmRDTqdGAYWNVe68FdXm7kSFVDJKJtRuJm2whREesrdXv2pRA3ibfBrctUr7dXRKVoBMwa",
  "key26": "vkVULemxfCConXepEhbBWE6SxWQht4jw8HqE2QYMe8LXmRDjEEBTgewdYrXADYyS2RofRJU6pF7KnDAjDRDtLRG",
  "key27": "xpPqFpCKPwxqPFoPefhAu4jPAA1yPBsgmTshRgqta4MrBe5Hf73tsp77Gn4cM4cvepFHZXTc3bGPBLr9LbPfa6U",
  "key28": "3FcBVz1UFsoxvHUBQrXdiR87SjnPuAFD3dtK5PJNoC9tvqkKXNdnsGqz1kjyryiT5dgBRsEqgZn4PA722P53qpCu",
  "key29": "2gDvHnGT2RFFvq2qUXU8aibdUbk1qV3G5suL74EyL7B5rg8BCmpadHurXuYzsh97WM1HqMUc944VvtBNG9htvnRc",
  "key30": "4aih1Zv6Y7Ei1SzeajQnDfXYUXG8BRCX18E992TLayXvBgR1AV342LkQ6YdeekeVUDsN1csYynauUjsdASk6pLiA",
  "key31": "2kUjVej8AAR6zvLWjj3Am3TjTJLfe8RQ1ugSpJXKotgT9WwXNSQtmamA8VBkBuBKMhAGL1VCXV4RL82xzUPx4bzF",
  "key32": "3NUig4R4xK9Fx8apR649EW4kVUpDxFvFFG2WHy7cmJsgSQPC56xDy7V8rPG8UTpXNFX5KzNEaFmMGESTmHSykwKM",
  "key33": "5peLu311gc2ds2j4XouY8bUsNBW8e4zTTmqj7fHS9EJNwVJXwodCRP59cs8i37quGacvCjQy8xGpvvVZ9YPrPVZq",
  "key34": "2EX5qKt6g5Mf6zCbvAKdr4ZuWrRw4m527QfRJ5kWDQ8auSbc4YRSQbWMCuME9hrRUB4ysrxENWreKjvj6CkU6jCA",
  "key35": "4BWXuMsbmW4XuqYbU4NGtLqNzTioNWrXMbiu6e2qqpniTjiXFhhKKLiwRuyqtsUFYtizRBK57TJbPgVNow5V3xVv",
  "key36": "bKDPcaQSWCEkVaoW5vVjzJqV8eWNVBAZgDM6sdzVc6WYsTiKLRG8xfcpRFNXDJPySGDi2ErkpBfr7qmShBc2WoU",
  "key37": "5WmUGUPds9CKuu9PR7CC52kkE9TdDGVPNQM5wLoe2RB57J7tdqWRzCsdF7Ch8R3ifypmCYbdFWw2Euudv3APEKiy",
  "key38": "2EpCiWLWz54miAKqEHp9HEFXajRx3nj7WhxiqFT2fabv4dqi1sFpQb97BJkpRVg5ZLVniCHJstfCy1MdNdWBGie6",
  "key39": "8vQL1b2bXQwrQ41uKvauAUX73C857JjRen8QnDYDRHNNbSfNNvDHt3QCnFUhnNSUfDj3R7BVaJXMGQrBFFVxpyd"
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
