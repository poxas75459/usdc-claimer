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
    "4eWChBSax3LP3JJxx4tPvA9oiDqRZvP1CRnZjcSLS7Gpj1zC9w3YAahAu5z86QKfNewbbnNUgsJ4zh7gmiqG7kpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oPxWKZWWVXDcUoCGjxuMPerHfbTZ34CJecDyjQerziupE6jmbASH62GFyCQwEh2Ypo5Loq2vfQ1Au8SDsu6Dpf3",
  "key1": "3czSZEYSAEYibtfpTqQQ6gnWHtdaKviNyuAsoSTEFAA9Jo24SvkFr3sqx1ENwpEH2v3khV9acAf7xPxFEA7DLbQ3",
  "key2": "wTByHpiQJ5TeLvTkpzidNgYTaDWYrxUgbjK4J8FeKjH4vYzY2zNbCy29DjKkgqWUmh3ahohDLr9Zc1PaNCqeGjF",
  "key3": "3N9pcYr4X9L49WZcRyWaKZkhT1AXQFWcS555uNGQM3xXisdRMfMzXJcZgzLULsiG2vW97nbmKkD3XgtKBdWQF5jy",
  "key4": "5bFt7RfgdW2f7xuShec5AR5YT9itdFQrq6zcpYHDkdrLTRN3sSQYYDzrBxm9eH3SCqtr63zR4zr8Cer7NCLNWviw",
  "key5": "5NCqeK4etMafL5bvr97U1zzmLVif7NbHFPfgaRYBBfSWqrJhPUrSRJftatuheA17YTzYjKDUgG7tmSL1ECKXgNnM",
  "key6": "mxG1wQDpwqBkiKY3ViT4Y1n6gmBFGYXc3c81gbKB2QsD5u2iX3gb4tpHEVSV1AaTAeyRptchao6kCwPMtHryCpM",
  "key7": "5U9xP97FxkT2SJ7B8JqNYaQ9boBTgxEBgNKo6Wrma3Ue2jfUGZ7F6GzSNe2SC3TDFPAeiAwqrey9k27noJALFPYx",
  "key8": "3qnKJJfq86Hjoa6baLt2aZNmfTTyEZtzsVkt2VGqmSPwKvHyReoYQ6trtph1Q36nVhx7JG9KMPXgt2euH6kNG9nB",
  "key9": "3KQTMPmPkhfMjGB9Td93Yu1fY4eNLyCh6YxuBXr5QvDiTL6s8KcEeiRB3xpQFzHAMkiAeSQ4KJMyJSBnuX7TFpGZ",
  "key10": "3Z5befDYMx734QntjMNfRSBAZDMAUzZ4rnoC1KS4STvVj4JvH8FFsMgAVXXHpXz5NvCmkVAbBz5DZHRhqBDwFehL",
  "key11": "5rwgr3ExPia2UCfHGMMWWG5LAKFvSUdtPXK89fsfwKywgT2xU25kZof4YuKjbxfSph4We6vbSEH7yq8rEAxNW2Ek",
  "key12": "51ZMa9hprEGduYvn8LmEbVJKg3rMrvXJsmaoL852YAX4MDF33grTpf1uytmk8nAtHr8tyYwzVVUC9skqz4czZJpX",
  "key13": "5vRvCriBryhBqBUQoGM6ssEXbqqxACRq7MNk1qHaMpt35ASyGTkrsufGGCz4RHArvwMzNDs8mG7uNSNesZ2S14o7",
  "key14": "4qzN2x4FJG36MnEcavtX6QVjLQhqPxee9PkBv9KExMWgys448QmfMZxW99svUMv6pguEpaLBmHKiVQAS3wMiNh8H",
  "key15": "4ggMvXXQyuWpo3m39z39vmDtVKVfsH9y4WZck8jBNfqrakLz1KJzUMTbXRutKC54XCQjvAkiaKxfzbiGrrgZRmnh",
  "key16": "5UxZ2qZvuCm735ktThP24uwhB17w9jAKP6u8gSaA2uXgWAPFoUywWpVLKJHg6XhmMhm8tTokKEsVj3EnsEqKggU8",
  "key17": "4qQcN8R8GtFUeXC84pZRWaz9jGuvk1A4XiJTSMbtYLGiCDQAFg5AiLzsxS9SeCk5EhjAtXs4tbDfRusf8zRxkNaq",
  "key18": "2d2Y48v4cKLAvET832avMjMBgfKCiiGNn9oZghpvtGijLoVEifkk1kuRcEuS81vUZajbuxnDxLqWj2kDouUE6jCd",
  "key19": "5Ej8yAcFcMoWZwsbaw4HKqGbJs8Y1sSMrcVopUNP7W8khwCdjH78J1JJSD84gaZhgr7fTDGRK4nDzUk3nvpjVZe8",
  "key20": "2VUxKFVdioxa6v4NQ5zXAim16UEZt5B2zaj75LZkB3ZTL4ZS5ZfLybhCZFe4SaLnGgRU2bLaGh8LnW7m8WvZtc2o",
  "key21": "42VDTW67AnRUMKgDL1XCA1yXDhZAGfgriEj17jupv2tHd4Dnaa5V98h54Kpqf11cyqxkx9DKEYT7S9c4gLcB6CdV",
  "key22": "46TGP4jcMPn5ZdWDTgKnNoML6WR8jWT6ZZWhdd9b3KVx2VdtZYQBpR1eFR6Lsz1aW81wBR1Dgq2wncmtHNKWkicH",
  "key23": "53F31JmKBEEb6EYi1J4JjJbCeuEtTjyRpuTYzZ4dj6n7JWbE1MKKaAHUUZUnyHNyomnNGwXaujNEeN7dwzS9Q5hS",
  "key24": "5jcNqtSiX1HVaJLFA7iCNMvEt8Z4k3iDMZmCCtsECzSx9fZJDm1JgTffzrD688zV84aRmvHGBmYrjShVX87xP6Zb",
  "key25": "2vFWFjwkyJ9GJbft1qHrVDD86pY3m6x66j7TPSz7NhvF4c2w6tvgaZiZeNEuxtbyQwYZ5AyM9PCNPykY7YjYgDwB",
  "key26": "4AhjGZFDX7LrNSfQmyBfqSNJhap7nU8e2HpnXvRcY3ZjWHEHJ7UGB1w79kX4jmYfHPdbQ7VBCYZsyGhaa8kbBW7K",
  "key27": "4cZMsaUdavekHse6PGRBJvcmKSg6FyWqNBhGV3Yz9kz12C7yipDJrhvG3nFp2y5KKecvsJSYoLcNTtMNV4eavo8u",
  "key28": "2qH9SUBGyGXsuL8hfwYmj6sHCPAPt4dWfiqcJ34AybHJpm6y1RaEpyMhgcDyucdpCtNM3MmnoU9cMfB7JNSsz5RU",
  "key29": "2Jiuf3FZnzg9B1hT5NN1xgbma4HW7sxDrkpe2ShzzdYnoX1LxrES9i12F1zsYQKQ3ezRrkbEvq7YVAvixp1H12Qr",
  "key30": "3BAkxCt7TVvt7DWrpnFvBvqh6P84HgaTNFvdX5zfv1AxLpXM4iyikAB2BRUUa9nW6nV4ygLc31gKreVqcN7nnrpL",
  "key31": "34E9HWkbh8fXJtTrXAMQNwNq5rU1whWA6cM1gevUeZcAj2iGFZ54o7CDi4yT8KT95ZGLeoYGAuKRHn3kJFev5BAd",
  "key32": "67nHWHdMkbQfehJhg8XANcQM4Vs9NxZpA3Tv2xS1gv29WryjbNCboMTBsupZSw9Uh2VY1EqAY4Sq8LZiWRXC11WK",
  "key33": "3S9nMnFC5XfHLamJTTbAfewv3v9kDHicjBvFB9txarJo4Eo8EeM8ZPhnUdy6h1HmiZJZummu8VLRKJ4C41ZiT5tL",
  "key34": "iLwzRMrinWRYdMqBr25kpZCUSueGYMS4EBggCsYRhashmjAozp777Qt87Fif1xsBXsgRNzUaY7s47w2fP7sYgRL",
  "key35": "NLvuDE14LutxQYoa52HUNc7AqYwu1zxL7yD9SkEcSB27PLvAqCBB68QUL42iXYLynh8KQkds3BJ8U9DoESc9DjF",
  "key36": "4ha9SRPqjHYTnXtgrkgt3Cou3wuuYKLiWphQ617scYCcUTVq7xNUmq31GMH3YyzZVPNT776kR7Lgr8UAaZFCzPtH",
  "key37": "3V4NTgnGbsDV5NzKipkPZiSwsvsUwtFj8k1bv4djEXt8e8GdQaRBjApEEkvAFenUT5QSEJYRJbpfLMaGrzN6x28Z"
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
