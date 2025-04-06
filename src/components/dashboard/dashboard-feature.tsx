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
    "4KDMceC2VFprHXk3bq5UXBsNLqXiaHZmhHbZQGv4goQAnaosmF8PSDe32qKRCYmgRcoT5ZHPD9tYZdj4ZKD8Gnej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ij9wp554o8V3cjyen7bbxGU7WBfDw8ua58vHZsXsxHwXj4VBq3pxx4tVfK34hd6TNmNfamsecCaLRCzDGsS4gL7",
  "key1": "43RqRyu9oCJTRUSPgkKQmg7TyGQp2YQX3tRV7Gy7k5NSB3YGtp2C6CAw5zWub8hufDoPyz3LrJbe2bhom9b4YdeH",
  "key2": "mEUpRqzyUUoyGydK4BocYxayXiqWrKb7meACfDTJsbSr5nU8KvxkviPGa2MEdQRJHmnYsvDNb7pPSsFhQkWR9PR",
  "key3": "4mq2d1dPUjfLXzanyvCV8MbmPeUtq8inYpJBQwpJj6QEj7yxkdDxumd7r1WGUJe1mL54EDEKji56pbXf53x6s48Y",
  "key4": "45pFZXbf1ircYA5n3i1TQnSVwwTQZTAkyXXBXudMfqLwqCPwoNcCBRv3vS87c1JR3YBHAiaZk3Mffh36F4De9DAK",
  "key5": "3ZVGSN1Rriq5ZAEMheiNNJS9sQnunaEBbibm1ayhczgdbfjEuJVZFUh5VF6dDdG3epUHtKy6PP2vu2Qo2BqpyNuE",
  "key6": "4P1URibkmiQWC5KX8bmkGrgN7hnRYAEEuCiavpwwgTgoDrxVswWxQQcDNpuUFiEaTtF3aN7ppGwu3yUkjTvzM15R",
  "key7": "5Aen2egjv2JG2aRJ8hKdcpi11ZHTJcZkPxkMM7GugooTytZ7BGVsz1htRZFgVKqowfsWT5g436U1BZ3wKmym6MLw",
  "key8": "tG6vAScjRpj2ALXYLAwS7Bhk5PPetH6ykCPU2skwJj7ravn9fYdswWcboBKsg6wPo993sfhHmbba12bbKPDECNU",
  "key9": "2h2yQYA4pHtCKQeeDmhYnthZZ5jPL9fcVJgUYcMS8Gn8eC34JVujS7Au8Lz3xCDgpXRfDyoEzePe2fBzqdKX7hTJ",
  "key10": "5QXmajwPDvcP8pF5jKfwHF3jFtWTgBxyhGfP6GoZeTgFKr5EKkN5nndSyS6yScSLyiJ2ZZugiScEFRtJw8b9GreF",
  "key11": "5kC3R1dPMKdoV6RfSvRLUHNyLPkN9EsseGELTQ8UwT4znA4EcVCXDeapandfb4xyHA2BR5D6RnoAMiS5vynMQY6C",
  "key12": "2TR9pzoqLF4zLkukPVcp3cY9tgBMaHpGmdyUKzuoPKvXXptTMD21VC41RkYat5QqdArh2x6t9WHCCEjRPbrHktJ9",
  "key13": "4HNcFB53VfsDSZzfYjN6wNsvi6ZtWMCXFJceMzJnbCm7kSd1EG7gTVg3MAD6bTPv5iiwp6SxwstnBaQWjLMWzwv3",
  "key14": "akDA37aSgp2gZ8zptxufvJ8oXUE3MKxRFZkwQ2vSxX5dz2a6SVXd4MAZVD2n1ykG6PecsgZAEPLteGUxbvo3aLf",
  "key15": "zo44RnVueRuBanoq41mjk7DVCJMKhSZnqV1KLYPK3RUnTWhVhRzpADoPghJCXo83azTCjGXdREtKPPCtkDevyf2",
  "key16": "3MsrhZzNatmhRaViYt3R5xQw7mi2CcCFG2PgRRLzFCxa3CTn4mQtWGVmaENyuLdCoAFMfGWxBcGJbjqM8VfCyw8G",
  "key17": "5JDJ3AspsR2kqzRaoE42h9ccpkFDoqw4MjQb6hn76jYnhEvmU49EE2RKFDfpapR8XFTc43bLHXpVTomfcvB6ktY3",
  "key18": "vkrBaLyBaFjRy2HbP7YYHgy5jNLU7NT1EM7SUv8PpDic8Zt7DNKGoYCBWjLRgze3KgpahzwHrC8oN5m24kyYSRe",
  "key19": "4TmJfLLnjwDPFgzTbmzutR8qy5gYfLS4wMN86wcVdfmkDndmbkTVXzNeXntrZyDp95ohmW98xjA3pCooWnDKkRHU",
  "key20": "2WJ3DGD9E3zLiLAZ1NwmpXyQDCzG2MtKRT9Xnjts8SeAt6zHhXEHTo7g1i4JChU265sDqwqRSuBDfpVzSgYbfnva",
  "key21": "3tVmngyTn3duYrYsn2MUrY7e4mHzSCrmWrRZUvgpWM56pKpHdxEh45EW3HQ2Kviufx2ydozBaBXzRm9NkgNncQWL",
  "key22": "574Qew6WL4qMcwFCQ1Y9VRndScjGksCyfwXmheAU1HKzuQ9nGNfyS17A6GhDBxgEKWzGJBSyfDuwToKiefQFFadA",
  "key23": "56azDrW8zpcZQCw4ZAex9CdvT6cQ1RBVibCyYngaSt1NJdhAxdK7RawhPHU9u9q4drxiAN9a3kWGq2aigfayyhrZ",
  "key24": "2syQ4bGHaA4Li4dtDQ4d4DXswMbgTcFGYXwLHzZxAWqobaK7qR1EDhC5SzawpjEEvutoxZpP2qBZ9GzYjZ1cFrW7",
  "key25": "2EVFGcUtj34uH3rfSd8ihB3J8UAvwb7mxRNb2nhFRtrQ2vP7LKuwxR9KVEqbsfS3L4shr1WLRkXo86G6gSjfPHEB",
  "key26": "5zyW4f4ibiuGd6sigyAksVzob6F7wM8NpXifzFdzwaKcQVPXLL6JzbX21AvZZsVoRsALXfjgKpuZoEUTPakx1kmJ",
  "key27": "4acJJgb85nsp5yerN3abUaYJPyQvN9MJpMy4Suj58GKwfy938oHBZptZvp4Tbysa8it6zebBh14gVEx1SdxGSsSQ",
  "key28": "4PKcj9JdsQVMMyycJ92g5VUEJqMGCoL1TDnLrnM7fAQrqSvQDV7EqG1GQvXXrtKH75o9TQ59CUG9W2pv46hNvpRk",
  "key29": "3qiFn89VPe7Np3WEhX6GiVW89A2cW4YpWJVfDrmXpd6p7sP89UFxiSgykhpV9EQVa9qxzvdu26GJ6JscNRRtsX6J",
  "key30": "2GkKj4zzLXpHbARTEDmJt6je8T6SWzg1jX6Ug3Vb8RgZ1tjREd8jkgQ4AB1eysR5H9MQZuRKEB24fFUZC9WU9H6g",
  "key31": "4tySssR927NwFkrfsAvua4htisMZLVfjkH3477iuP4cefVk3EibWnTN8NnwNHUAAKgw3noqdgw7UysL3qnusWLdY",
  "key32": "PSC5wDX4R654dEuyyKGDWtrHJaadQdaWCUYDEwRvk7vR6PjmnewEayk3iQ4aXSCx9SScaHMJMAbjYxqWvFhTDQG",
  "key33": "5xnDWbdLPaJYVbomQ5kciDT3VGQ4wzjto3C4BJ4KEweYtHb4a1Mn86NwXPCiXN6fAfaVKmaMmdoYYHpE87b3pUPY",
  "key34": "2weqcWTESpNEjKVAxxyVfXBmJei4C8xzZgdQtiXmvheJW8LSQjusf1EKTpZPwjKRyuhGpVD2wcdwQbhBMDPhJmuK",
  "key35": "4YYbYpQB9AsDvV1XNSwNrFa7aJjWcBMTDNswaoJFgFmCfHihTgxhkvViERB7o2M9Ho9Dw9B8saMCJzVh6LtZVxmC",
  "key36": "3s2njodG55o3qjSTy2GnFHuhNY8uPHrGRQomKsge4Gg8cShtUpcGVwXBfqCSj6kcgoPpACBcLypvSH3jKKMN9Km5"
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
