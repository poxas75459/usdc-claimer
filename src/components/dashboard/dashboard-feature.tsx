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
    "5LXWTxmiBdbLmxLon29HQWS2zdFQciMQPe2mMBAsE8YVYPdCoDEtEUSUHrSnxzscxPEwziD1q9ZL3jTLrfCT3H7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4crW8D7TnBtcNcP3HNfuTbv1ZdMK6DSvZYo1E4xvWr3pN8YRhs6Pby4MNmMBkPeRTtGDgVP88hHZ1vXsgn5xSpWh",
  "key1": "QQVvuzj5aCuDxH3Si4L9QVhcQmjAKd1Y3mm6kZQUEaPcb7UeahrbFbe21feh2NXE4m5djpcbYvz5RTALBUTbvAJ",
  "key2": "4uF9FNyvAFoNpqWiceVm1aU31pC1vo7ZkfNDRTRB7gnFmyHQ6hAfE4XkUhMoA68GMFaXcn8rXZnZydQmBKaGMCVE",
  "key3": "5fvuPY5zHDZUmUgv8bU1Gohv7KQqpimo4W6Vv4fYV3uH7UnZ5PiWtMtmorPLFZFUNYNTwi7bNr3kq3ppXHYNA3V8",
  "key4": "5dLf7yy8A9TfBHF3hpph321ecVi1Ja2rfh58BRBLbTPTLv9RYZQtLjpv2bmvD2Mo1jc6UG8iVyRTKZLdgwZVTXaV",
  "key5": "3g7yaZ6avAcB6YPVMkYLk1vGmgvVvQBKWupH5Juqxu621Unyq3EqbAoVTXfATA1m2Ey2AbNAcMDepvicULnrxJEE",
  "key6": "5bqXTRxQrZmy4115zZsY8nvrbc5mmv4kEK5ZxHxB3BAXkUwD4C5ycMuBPPgMfRVvFJe69nMHjiPuUo943bEx1h94",
  "key7": "32wg2tFRL9XWtwoHd3pCUX61KRSyEmhVkDkjfM5AjWnn5MUD6j9CU2FtomsCSM6GFoYS9HZSJCkdSxahYAQvRxJC",
  "key8": "fVmW7TApJgfcT5WGfyYZEb3gsYofMjEWWRjw2kUonPFMXfrakFwv17cXuyBr4ZJRLmmC7g8xBgRhzPkozsri79H",
  "key9": "4qZwwZHpDd85wpsfUxivqXEJ4PcFiK811fxoJ36BjLRHcteHXnUGnREMZDV1G3xDCNZQCKor6oP2PPxat8NxHQLs",
  "key10": "Tpd3sge3QfY7CtfrevvjXaEs9aPAJ3Dbim5w5ioyA6TerUrnet9NaV7t9XZd41xEcxQETD5wW89zvEZDUiaJ9VL",
  "key11": "4weZ3zxhCfnoFNJBaExYNN4waApAFM3UpoayBYJxyjc3Q1KcPxkxpLYDQWN7RaMVuLLCHAwkdq41evJUkvPgxAr6",
  "key12": "NuzFuCFw1NGXXaN6XC65scKKRwFRJyKKiNHGgRsESQXSpf7Y3SodePdn45CR5XNFTFqxGEJiZJYmhP6Epv5MuxD",
  "key13": "RP9fvfA39HocnF5nCfMbrsQLTutgP1v3gAHXtuUVCwdsRTmend9fF6Pv7P6JJ1pCecUy8RbPPPEXPgvqYMFr1Mi",
  "key14": "4Rgxk8xqJv24TmYZYB1ZaVjwKqJuRmGV2BQPMAdNBJQPKcjzXfN2vx2SAjFFk8zJpfzZ2AAc7TvYusByMn4tyxZS",
  "key15": "3hZdtkrEhc3TSDFBuzAQqyJ9NHd2WW6SivvifLAUKNJxuh4j3bjbyV5pb1G3qWhX8XPQQJq32AkRATmscVXac1cm",
  "key16": "xvKEw8NTvPU1vdK5f6FKr84ZoDZ5mA3gfRVLceE1SzDKfhqxb8fejfp3D9QiEvVWYMp9JxEVEoDdVbuSPaKAyjz",
  "key17": "2r2uQ1g64bEbsvjyM9rR8bQaHn8Dz2ohiC5ReYWWzseUpxgchaygHvZzk8EZmmDvPuuAfK1bGRvwZvUmiyg7eDfi",
  "key18": "64ZttBFuDWD8ww6Kq76Y7pu6agQno9qifesbdaAVgBj78FV2tViTACbQS1PXohUUtonNd8HpkjkQwYHjkLQbgfYz",
  "key19": "VpXRsssZSG4rngGMj1ZqCsHxH6oeG6dx63e57v9tqnrkjgdo3pF128R9EgJ2AoE6dVPEAs8ck2L6jWpyaXLGoHt",
  "key20": "4AZneZdtKpejuUgJmmHTfrZ2oz8bo4KQpGtdBabhJyK4gKHa31cphWFurx6scB4y237sFCezk46EVncNGLy3V8qm",
  "key21": "3auGNB9nMKVY6HowRkYanW4PPqSRDxV8YuQPfQAi3SbxShpNWc7rpdMRAR7EaRuNgfg3VzFsaaZJJa5gMKnDcmry",
  "key22": "3uWPVxvEVPMjr8PVgNLHXKoRwcNL624g2N2qFUGhRX9GzE2cdcxSC2vz15mMgwuALfNZhQaeWztvZq7XSv37o6ht",
  "key23": "5KurCmKuDcdCg5WyF8LeBthbFpbvfmFcAAUHEtNHJ62X65ZqHJumXCY5fEbFHJ4e5aVPZAGdF3WEYAsTL6U1hZMz",
  "key24": "3ZBUErsQcFrG6TNTgDviUWAm1beTyN1ryz2u6wYRRY6FxX8smMKHk6u3RnimkmocgPR2n3Df2BSUpFVL1BSPz7du",
  "key25": "28ZHapnvsknWDk9zBBr5rN8RtSzpBZz17UHc15ZC1pqcU6BkaxcUeeH8SrKthKL5K3pEiHwQLt6PWmCBRePFb8Fi",
  "key26": "5hydRs5uWzfDGdUzhJPU2xSFpB7SRqdVu12bnKsoBrxgBVK7ydXH9yNuXEeqcK54FWwYMG1ZdxxtA9DfaVyD9M8Q",
  "key27": "33bx8VpJ5Q9wjWXSXZV6f1qB83ZX6Bt9Ueyga46we1UpBq8BV3NKXKzH445iZpGbskqxgerN1A2xeFp7QdcBnx18",
  "key28": "5gjZepHpocmadVRB4CrL6Gvb8hHxAUsX7hBsRXLbbaz5P6vytMvFuYHZ4tdrxv9sVaDEZf8VHct1TG2vpFR6JwGz",
  "key29": "7BTTtYM2tnc7L5JENYGsAsRs4wR6yJv9qy5vgXnwRMWyMM8pi5xcXBJSJutwtNSSrfC847nzzBvtfX8rNfpHgjj",
  "key30": "5ro8rQUr69jHuyfnwmAvGNJxMZw7NbjFLJ9XyDHGL6ccqzEsaENzKqGypuwcBt8zwieJ4XuWxbLK2Fo5EJj5zKFv",
  "key31": "5zRdRmSwBzBMsfGZZ31b4VSCdNk8KiMSgpZkSTABVedjYGSTbJdHtXjHvq6AgRGoicdRbzcnXFrBCxEuQL6WSJkw",
  "key32": "2qSaBpc9EZczgXdA2d23uv5G3Q5CpRA6ZqFt9V78YTsVGnJMEiwBfFHfxHk9SoctaM5gTmax3rs7EWx49Xg2geSg",
  "key33": "48t7bFET1VHDukgTwx9i2Qi8FcYA8j8F1b82kexxbUq4K7oKBXUKMA7kxUwG5juHMT1AC1kvAjV7kBkNkmYcc2AX",
  "key34": "2Y5y2uhGjb16tGPEGDQ7s59czCeWgawRsoEQsEWCiADNWi84YwuduPLpqg2yWSFrpo39rYkx2sMZ9UzmnisuJpLP",
  "key35": "5DV1seDsoTaWj3TyYvx6wMdJ2VWLUywtovEamr3dKQqVh2UdLc3VhuupAmxNHjGfMm9rtP1j6KwTzbXrW5zTEKxw",
  "key36": "nEKGkoijMTWwXsFhSmZ9uSVaXAQovfuWRosJkg7XYES59WjK4v8DresySZZVVmhy6EbPqMYkneiMqavJjoJ9brp",
  "key37": "4QrkoU277gCktEMx8hbdxUSVW7keXyiqQmY2DTKm7SrnMVxdFAY2xBqiau9NCigERziHTuBUQDuqZbPnUUa39GDt",
  "key38": "2wnGuuDUjwYSLd5iLT8LpFXWV5pXLGsG6gTP9Ry2wToDZik8VVwAWsQc95y7APNDeqFz59o7AMQmnQZQzRy3ePkU",
  "key39": "iPZ97Ymf6J5PnqfeVZQyAziPGpPTGbnZJbff8WDLxTCBr2WCsvFw6enkMz3rg2wDJQodB6ZveqyBFecqk7YKTTB",
  "key40": "5pGK7K2VPm5PnJFurUYGhWS8YLzJ23nyEPLLEHXEiX7cbVzrov2PiUFBdzHq3yJnmPrTn9qMfb9y17Z7QcE7Qw4d"
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
