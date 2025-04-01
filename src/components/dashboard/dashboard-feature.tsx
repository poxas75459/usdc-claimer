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
    "3pPNpj7PDYWB6VupoxgQNY3oQgyQWTunZn6RM1L7oGNgfUMq37MsW97XL6EN6G2xxm4dW3dcjmxnzbMHMxUJ1qVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MDSJRoiF12V1cTg2eZitpvUQnfn8duourq3RGDWNEL2Vt8hpeh9gkYWd5trmdegxJtgzivxMMyQcHwPZ67X6Ugo",
  "key1": "27mshhqdG1TRe2LjHagzqWTUKtgKeBKB9tTtgL13H6fuRsYNFjqc3mcgVFivR7XwofucYWsWyiC64gk4cNoKCmT5",
  "key2": "4yVJWosFxcTwGqyuLQkXZHACZKzavhJbdQoY6powaT6ifq7wucirdPVxobWTDFLxqhyEyq2BiddDN6wAMgM7ewhL",
  "key3": "3yokMKQZJSTG8uyySpV4ddfJgkefP4WtkD9vJqvMpBk7rjV29xrXSJkWuCMdtu3c88mjNMww8VCzYqVvvxoxAWyR",
  "key4": "Jb8yeEGcM1VTsHock8f2Az311bNjPCrfHpTurTVTWYaU8b8L9YfvR5SP1uYUaR9vi4MbtCuZew6hfrr7NZCB9Fh",
  "key5": "2myFvWPmc4eEmgTTawXQjvvieS7nm5z8UsAV2RcZgN79LxZhxSaewiWnmTVUWyVYAjw3Epr4S6AMBPCpZ4qknHh1",
  "key6": "VgV63di4z51G4F4MZTNyHD8GXVVjctQp7kyjr9d9sHzTkqLDUJxpLm6rTiHAmmTTt5MzmcQmU3qkarnZ9BeUTV6",
  "key7": "3mU4Nc5V6n8K8Ck83NSdA9LaV8D3dQDMkichjaswVRbLzyFYT3jmpzgVLj16THPjpUJbYfmPbP9hPQJDiuWANhWD",
  "key8": "2JY7eQUB4vyZsAeT2Huz9dQNT9W4ufNTAEXiDkktHEcBTGXWv73TmDW9hZzF3rhCywPjh2hjZvLMtaHW9QeYiHYy",
  "key9": "5cxXhdsWEosaQX3w2rp3RLY3kkH86ePXEgpcxGHG7AmgbtK6sWNhGJv7y7HxVtMuQMhrw5bVgxhpmxUs15hhabNo",
  "key10": "4cJbgRuUtTsB7L8VHbPp6qWXTAdJFcRhJ2rkriAi9YFkKVTDCH5egS7S2SonZiusbBZw2qmzhapkRPoxoiMgajXn",
  "key11": "3ATYUpobkjaj2kQGB9EZrXGCCFBwZ1buvh6HcV52vPCtFp2mqt9Zd1rnUcrHykkgs3Zrrm4HwfKBwcZuiggCPn7n",
  "key12": "2A6PHsckGkRRrUvdmJuLg2j9uv9NFHboaXFKqzgmT2Kz1oyfagVkF2NLQnncvLngx25vvmVwMz4F1zuSccqtL9Qg",
  "key13": "3HTayU3ZRUKjP4rXsHA17dneDVzCbFafdH4UkEu37KoB6x1qnLRCy6vBMLnWf8s8y4j7yzzJZNCM3zfe97gkywob",
  "key14": "zC87rEd2um5xewwsbmMGi5KzRSAjQWnGg4z2tH3GsUM5ua4V136zSecRBbFvd1cJ2QCQdU59xUnD2f47Y3QHdso",
  "key15": "3nRvRBAukiWMphtYWhpNpeSMcAkcQdm3JRnmSUejssaV5mQmqBUf4nizYDDC7YFjtbriUyy4Xv3z9BUVhTKnko5J",
  "key16": "38UoYd3VtU6ocSiojjpxbKd1LVh7WVeo7J1LpZcVWDuovH8KHGaLrp5J1jT2kmeoNrr5iGSmL9qjS3tVisZvDwSg",
  "key17": "5GVYgKt73GPExPRXNLRbdGqUkquQT85JLobEGoLGoF2mmTJZBj74XdqDPnsUGed9U2TeZ2f8Be8nEwPwFgYWtEuc",
  "key18": "37Ppog6rYKK53mBkZu3JeykoSy8ABj8CBXPYz36x4mBFa1sbofAVXnZYH86DkwsTzM2kzKjapy4X3Nkbx99VixC",
  "key19": "eDoX3q8CALGFgMUjoQpsCUZXjb6yPvisNWkT8Frvh7HixTZ64famLkZ5t9riN3qsuyAmYWtexkzFcEGeRDp2qMN",
  "key20": "vEvYF2XxW8M2fgqG9YGDKKwcsN9LnxWyU6biJC9dcZJE8JDafNnDnyoeaTuvrJycV2wEGy2PVMTDceXdN963Gn5",
  "key21": "3TiWbwC71qTmcvumyH9aWxs2W9q8C3gsAD3jFgnon3jwgxmsxtGLa4kcfRfsygFFFHthrZAtTFauw8JvsnEa1fqo",
  "key22": "3QLPutN35z7XAoeaQRoS6ydv5vbAQo4CTZ1er3iydmXieA58sbcNdfranvdAc2tX4BHq3PGwVBmWEFd7aMEQEyqx",
  "key23": "4bLjh2caSHKvWS53Su5gw43vRhwZD3VckotMAqpLxAUNG2pPSvPFSMoPto8sDeW1UG7UfWjuENXS5zbcmcbqoy8D",
  "key24": "2sha82jjCfVCoeSG9JjejcCbWKQ8og5W8kovv5UEhGSj248WHy38GDbJCFTDeYcuXA9mCiu5Qar49HZB6vbkHdpe",
  "key25": "3yn7fvB7PUxoN8emBcFTk5tMH71ntq9VqQKu3nakY1eE1RP4DCh6igz9XYuZ4x9u5Pqya6ovBqbLXQ84qrnWaxvs",
  "key26": "2tSxgqX3BFbm4UVYKaP3YNkWNMTZBpyJxzVysu3gEgfzoskccAeeBKpojwm6Yn8y8XGjpC267Tq3wbYGvHSVWPvw",
  "key27": "534pqN8qsBAwdavKbNPJByFfQbVjT31akbsMZdCQUr6sUxLcHDnfaPiHjA6FhohhQL6qUYnotfdiNAmNRzpqWuhU",
  "key28": "527xNpjoo4Sns7MhQSQvB7uPhagJUxTXo2Ktxn1KdNiJmXQNsY2TUTETQdNCBxKmFygjhsxcqsfVRN6PG6bpo2Te",
  "key29": "2pjYRoA5AYWFMmd78Z3U2bs7kBmmYbPLCRGuN1sFhhzCGKGVAZH6RKJmfFHkiJxu6iBUm1A2SzB7pQrT2AzFfDsE",
  "key30": "dfVDcbQqivTXVrkQDnEuYe9Z7PZhfyHqhcGKJkgRptSWTkyTrSQz8RUpgYPnKj28BNQUCsj4y1djJXbea75TcFf",
  "key31": "5cA2UhjNJPR3jdCfWNmqGXLPbTsfBAqMzQUQVVJc4Si4eSgCxyNyYLztmUTMRWHTHoRKz76NWvjpc5bLQe4ZoBFe",
  "key32": "2FVck3coe1M7498WAaRRG42DJfpU1ZJfXg4Yg1zvcbhaeuTb5MSQR2jXx6wdcA9wczGJxJ8CY9ksyjRdGXg43Th7",
  "key33": "4ztYFdVkoEGsr6yZDqqvY9aJUNadFTBamJTQ4Pz7EqhPZWyjqaaMbKK279ieTfrjAKnNJiGXZsmGNbrTTqsyKWeK",
  "key34": "2FZd7yfHTUGJkqpcg512LDRyVVK3PD567AEGDdeNXSuy8HeUoZVayTc1763VyjYx5bFPDpU4mEgdPxK7aKdm7jjU"
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
