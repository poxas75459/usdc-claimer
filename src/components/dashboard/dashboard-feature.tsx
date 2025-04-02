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
    "3ssrcfA8BYTndaE29RibXaWnAs5WpqnH9avFFVQcLp54t3CW4k2nntLJoGmUocGPWmuQ1tJCSUNc9fC6chh8vsM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DRWvDZ1SxCDEJJBH6Qstb46NSAQfgsAspgyK54Pgvv9X8Xo6VHJbnL6n5RMqePVCjzpyWiiYDN1mBHwiq9t3QeF",
  "key1": "5K3oXaHooxXJcdKnjmhy2RWrHNtjWZru4UiPYg7g5By2FhxjpFAWAY2mvdPAyQgbzNoNisETwK3Z8K3VZxvp3JTC",
  "key2": "xyC1kpT53G2sB3jn6EnTJyu7AsMKxxVs4iqWfaQs7qDxMjb1avhQtkkKthN8ai8K3t435Rc6yM2rBAEVZxXy2xQ",
  "key3": "4vJ8krxBiT6ypCwRJE2CpbwFuRDDNQZqmTb5Hq6j63ng1TvwabTfesip1uDRikTF35tExnWqneDzEHgE88k3jYaT",
  "key4": "2tBKDhYxTzqMHc8f24kSAfYrBg12ybyARM8rytr3DvzrqErnekKN9HoCRxgdpwXUZPqBunmM5ixPL4ascpQpPNqB",
  "key5": "2KAx2qL2jhgj8cg4xgXKEG19wDNNszox7dkDdPGfCT4SsP4kak1X1Xp6UFzABC5twQ5VaXPtTULXCdekE3M23HUt",
  "key6": "33VmgApmj6fnT3w1oWcGUk5jjgvrgrZBhoqbjeE1U376efwr2FPVh5iKFNu34Up9tt9RepRRi96gcvd5M5ntatSf",
  "key7": "52X2R7RJsNqNVxSBVyqBv7fpu7Ti7hatC7NLjwGNU1dmeZPfiYs7RqXcn9qcQZek8qoLN4g2KaNuJTrVStqXmrGF",
  "key8": "5tojSnpotPEzJLRPhCNtpeiDqYuiLe9AR3pNfx7CJKst54cPiA1uyC8itAu9qRqofCQRu8acxjazEj6KhEomGQWH",
  "key9": "453HtshK9ZZ8mMnuhcWR3JJWDib7TuP2PpLhXdt5N6ac9JGZAGKgHk5AFsGXXGbLKqt45XkCRGP9KBjty5y5doPr",
  "key10": "2AFcRxH5qJgxc2fsmSkfrrAKKgV9dEtvh2kzPTbFogNU75XYDWEoqmLFatZDb6GwzGwetbVvdZzwphUvD6hgcbGY",
  "key11": "26HXy9jAEveyGcALfXFr87J9Bpo1qr3wY1ZGixFoXfZWtfNkTQnRLmLkQUnhLWC9L1jPRMbkiLug43jJn9pLGhVj",
  "key12": "3SBpGMxBnWC6g3ru16j6Qp4uhzj4X1ua9ZQWd1yFkXXqLyBiUuFnyBRm4yeZ3h9TJ5ZwCsguMJcrK2QVb7kVbQAL",
  "key13": "3fMHUBNHjdWFbiMXuPeuhp9rWz7RDYLRnbYQEHbwHBQzUxkBv8L5Q7Gyg9ZXoxNuVjXiYCDuYQhNNb89MYxKbjws",
  "key14": "432jZA1JSPKuQzNY7XBA1BBWP2eT2qE28Goy5qAp3JkzEkTzwXsSDCAf5cn4gPvRvaWMNKDdMuL6FF9LL6cnLpKi",
  "key15": "5QCV9mdjowU1gXpsR1Q3GPC9T8PCaMVnVheFanVC9ARL8acvQR9ZUYdokyCUd7MLDWXtgT2ES47P8xkHEpLY2MZg",
  "key16": "4CFsAMRmCyjwYoPcuV7f2yuiYytewmpcsa89tc469umE65S81t6SYiDxMD5gwX4DMw4NtSyadkbKR34n9LR5UGmw",
  "key17": "5tgmB85ZXnSvKeEQW8xRawikc5WmxYPdCt2Utbbyp53EEV176kW34XBrfqYdDPeaChnqJEwZ336XjYfq684QdgTX",
  "key18": "58XjknSbcLRGk6o6r1iSXs7RMhyVJgvYn131JA82v4tqyLHdXh8kUy5NN6WGbREJsKv9fEqSJzyMqqQenWpMbs6r",
  "key19": "67HR7aY1A9UUogwHKWuXic8TMmPV62UjEPpniqCVxgKgWNf1WZbzzHWdkMauehoqRcsi2nba1GUHBK4GUGxwmZtV",
  "key20": "B7BWcuhEFUaPsuHYUueNm1oEsN56YSbud141QsfvwewUGuiVwVZmhLU13zoHLKzhSg8RdsrpqqcrxyG9WQ4fFEc",
  "key21": "54DhjJgfaBUVu591bLJerCMDdSUAL9zzYnHWFKXc392orLF75srqaV1RCnRACW6FwMKRKbKREg65nV7perhhG5Us",
  "key22": "52Tj9aMsYW1pJchSUs8Gf6m3poKmxWy4CYzx1FVgzR2dAYYv9tYyARFL4taovxqvKU9SKR5Z64Wb6DpgSdh28cft",
  "key23": "3YrGVQWWdKJ1YrdZTUVXuhA5EyLJS6jvSwDeqsymu9TLDcQxKtAajKXdejZGgyUtEWB1c86AATePjJ2R8SB9dBtm",
  "key24": "22odbZACcRKQTFUAXg621BFbtJAxexd78ScQLunxiKTL1BA77UCMZ6nDg1nuiraB15EiSixvKwDuf4sR7tus7HKj",
  "key25": "44wrmfSTwf1VP2q5B3sZZMtVRbt4475AJVoQRZsdPtyaGuoqsqwcjfrbSqNaHExVrqheXE3d7cJJs84tDwoxySdT",
  "key26": "qyJ2mhLWVPL6EFz3y854qRgXBD4ywdsuE5Ddjd1yCbaXFMUbQMkLbw7D5q58Skbewgr1T8N591ECF1csE4zsLcV",
  "key27": "4WdSZ1am1FQBykjbp9UhLamb2wKQTbdoAKNn2poPmGUnHVhYrVtmj4Rw7QjzJJVwe5GwCXB5ikpWbA73XBf2rpDf",
  "key28": "45rioEhueJ81gamGy7xE8FBjrq5ENq3AUf4JkpE5yASBiwZLziRL5woNqqsCbCaVmQFpJe6iuXS6MChHDi4g4V6A",
  "key29": "4hqu6WViEF5j2itShksTBwuHDRY722YNMeTft6rWn4rhiJ4Xh5LtWv7Q9etsxQaPxR3Mxx1jJwbzBa7wyQistAFw",
  "key30": "2S2yPAooYN5CCMbtzFgsL4vLCCYH8jbtjnTwC7yJcahSvZH6vRjkCkjWwSNoMypie5ct6zpc2HtoEUZmfEsb2t35",
  "key31": "35RKSfMmh9fXsj9z823pGtiyp3rNy3pQTQC1JnsF6xvHT8xmGk98p1hD5NTBcjEEeBncvmwqFNmEkeykZRYCzRdf",
  "key32": "5YanoeLcxpbMewUJ8yLxGfsj8Zvq8833rMFdQ8UZBx7cbJtmqF5gYMEvRbuQ8499Ds6LfZra3u8bhtbUfX5LXJRD",
  "key33": "3p9X6SaDeosauaNbuL2sfQJw44zDHsUxpkikfY4ahebCENeLe4ZBkxV4GMtiC2H4ULUik1CBoKNtqh1UK9vWtGkT",
  "key34": "3DcGoHpesDLG2u5ppftgYVT6RsS7okJxPPF1LMEd2KJ7E8jka47NF6qr9yVVB5VQXaR9oxoXHM4SKSCRXjn4Y1zt",
  "key35": "65Ka1HHpvSu3LMkvMGsaDZXZw8UgFs5epEatf4fXMgNUgHMs6Xu6E1MNPegzPvA1GHGjgdRy5kZr4TRPXACDzd61",
  "key36": "5X6VNH84VKNTa6mPAqQ8NGeF3ANnSAtk7GZw2tJvCYgSG2b1kmRGUFTDbrkiqPhrGzPLhGu5dRhKPQns62exKR9d",
  "key37": "Mmac3izD3SJ3aP5XyPvuNANkzKJYctUcCcjKQZDFT9wUe5U63jYRQNpUbwjEFnGk3Jib46wySpdBd6veRpgLvUb",
  "key38": "3jWW8iZ8jSAzfXXWKnATHpu3UK4ncKtuEFhCYst24ymJqwyXkUxhozDnEHNDMet3CViJbeKoG2uDmAiKRCHWpqYs",
  "key39": "4fbyuzD2cWv7ptLjVztpThtfCpVCk8hSv1EqHyCENAnDH4HhADnDbe3WU7f8sXy1YxHPgXdpDZvccxPrSvB6fuHR"
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
