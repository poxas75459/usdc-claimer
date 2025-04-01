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
    "5sPVxwrkDYbvDwhaMDHSRQZNAj7YHFV7HofNcCiJoQK3Se8GT83hpqGm3tMhA4z73SxveESb8LWpRGQigD88ZaLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37pqZGDu5Nu6ysdiaAZKrPaHtz6ayhSxWJWJDJFaHY3DBEG4LMNMdVrCCvq8Z7zBxzac87tbd2u5Mwmp495zLJMJ",
  "key1": "ymQVavpnehpmtDoTubk5Tq8z4PDA9BNVTtBYPmvF1qPVRf8uSt1outDnGxZboELcgPkj3PhRAScSeasCULLkXxE",
  "key2": "4R3biJ7LJvjdPETQqCdiaUcqZYZipDN8VeRwLQ9B3qvszdHHTaqDewK1DbtitUgMnJ3dMrz5aMtXjB7JtCUBzGtu",
  "key3": "2W7o9tNpmHqd8XgtGvg1byjB5fz1PArJaebneNbBGuB38KRVSnF7qRXgLQFPoCg4YADi9qhZP9XdU7rV8TDTivfm",
  "key4": "4mgLpDqMNXrGwSX9wVtMfQddbcMygqjg3BYtLTtrmAnP9AqVsVdBiD9kKmx8tUZ48sEKNsXSg33yptrvxz2Gii9o",
  "key5": "26gUFwpRjGYtovvWevFL6pNX1HyYJek2amEe3TeqWqTB8bDSwP6T1pjiiBW8auaf3GXhBiksDjpFXZyiugAskR4x",
  "key6": "5ZLRnHaGccdGmUxnakCHn985hye5oX2XccJKRgoRUsZXFdnknd7mgFrnaiASczXpiR9GDBqLWFnezNa68PLEe8Rb",
  "key7": "4o2N7TRu4itN6c7iaT3pjWfa7opHQVm2aQeeq67C9KoVgyS5NG5g4WwinP2ZG7ky5xMDNkXWnuket4UDQdmCWuRT",
  "key8": "5FZenaqFJjw5vzGxNLSDZgdfMfq9onhtUZT9wyjGLVQhKHSYpiSZtf79HDVSzib1MD5KEDJgvhpLpMe8K4Hp7Wy9",
  "key9": "4Dy8F5g6Thm3Qy6vC4sgBUTP7Ey6pYTWzfvvRKAVUQc9SAgwb4ds2F3tqPfXQwowmtVHZYTX3iLL1uWfLey8u9Do",
  "key10": "2NjGZNwWxLZCarXtsvqsgnvpwR2bvm1yWe2idDJZuQcrhfcuK6YNfUqMrAxnB7XmYEgq9scgnQYSKMaHsMv4q2in",
  "key11": "25shsQg4qJGSXodpmwoQyCpYqq4ntkA6Fq5WCa22WJ5YMEsyeLV7HY2ZV25uQkEVWEeuKhmLHmCfZvX2MQ2ZQsUf",
  "key12": "4vgMY4zQnBCgACozQkQXB9f4yCA5qgbVcL8tD21nKHGBWceFyDF4fN8SkLkQFHFSFwSu3hG1aAsqEGJEcs3v4H6M",
  "key13": "62FVeZQCDPJV2RC1Hhft8Zto6eATfdDGxkZGHA4PNGdNxt3Ez8Z7HLSL2e9QxXTtJg249mJWkawq7DH57cwE4Cq8",
  "key14": "45oH1nWLts6rhZ1vxEDMmYMLWPHxXqyVGckEtPKuP3Gxdd8k2mWMsPGBmLQtjokv4BrG6EQuw2QX9tSMZa8NorKK",
  "key15": "u1RJJnKkLU3G66gKaGVZptmRvVzp8s1Ue2uToUkqTdPhVUQbSr7gftR8S5Rid5PZSW9fhwG5naNmhQGEPB6J8Bf",
  "key16": "3VCphWPYEX4tTGZL9YkAjgnp34nm8meGzagVHDavbCkdQ9kRKu9hKomT6NLrR5FnEBuK5bSyJmkm2VLdHnDWsVTZ",
  "key17": "2U1nSij69rxopVWrjDH7Qc9e3MgXS8ukAPpkN2SGTG2RUkbNDjCCUKuN8KcbY9nBe6MB6LkxHFmzGQwnnC7TPo7Q",
  "key18": "aKs2r4iMMXj3WXCAWCUJnJkPd1QGAUzLJBFYiLcLaeHfTYsPEskZZLDxCyBFzK9QjwJfSFLeBAC6CGXGfS9tRFb",
  "key19": "67LfxeZXG6Z48gphNEKJ4jMstfCXNV1tZKSgS2u8rDVL6ovZ61h9AAGJahWs9YV4wEFuKqZ8EYpkJpUCgFWAqD9M",
  "key20": "3NeRwUMasHXq8qCHgQfDmDxVJ2RuWEY1fs32y9pxrVRihxmbcJi5JzeD6AY9jBaGxoBPnmdVZosFfcNzhBGaUB82",
  "key21": "31LbAj3CMHZ5iUwx2JyEPUyL6SEYSMxd1jWd2pdvF4fCEt1c4dQeHKDDtUusCqK6cDko3CRF6iwjLHKfeQckhbrm",
  "key22": "2bo2bK3saEBDSN8DT2xF4fTUxaWR3Vk8qKE5HjS19EGePfmwZe1GLKiviFpZvePbx3N4bAk8CDnNvysRv5zJAZ9H",
  "key23": "2mJ11BVZn1ciRc9Ho2YDEMnbhkDWv7DxRauhTr5ZSddsU3RX34Wd2WyMdn2CPJL7Y2WQUS1qjAEw3LRoatkbhivK",
  "key24": "KA7sSpkPNdHpH8pLwBBNGTszmZeamygyGS2ENSMAXxDsaJUQArbZw3gicQTB2uKhQNWi9yxY3D4xN7JKiZ6S4jw",
  "key25": "Q5S9yrGvWZad7vzDve8APrwM2UAcwuw6N1fjJibQFHv3qJi7zdg75HwgC37YTbf2QG8T7LUGR6WAiJyfDA81Bxf",
  "key26": "4mDrczjHC5Jjs7ciRxmmRuubejuSHMgQSsE9BDBXjaUYyNeQcPDhNGui4ZdjdYZuQSstvikJkV4H2T6zMUFiH15q",
  "key27": "4xFkBAT9pTghKcrd5Mf83Exz5QUcAmd58cEghMgeJYLPEsZCweu7JeGEDNTBTyit1fKf8fh6uTcf185ZgrjwJCRC",
  "key28": "4xr71dJhibqBtakGGPgohWQekNYP6vGnBA15HcuSEG2fgUvwJqyRYsS6mLaJRDw8xCUYKcEijsU1edsBXxEWFLe7",
  "key29": "3YUX7Tjs6twWCmpeccZcoboLrbs56h7SUErpQUCt8MH6mGPoRwm7zX9RbzwMw28Ep9SrRVxxcX6NAt87oLRYNtA",
  "key30": "5QuoWXvvWCybChrMxxtPVH72pXyBFELuJz4aNSc5YVgWWSE1BwhEBmnzrEwEm1THMjcZjXaMXiEDGyfkwjr7Z1MY",
  "key31": "4Yt37efjNYWt9MyysuRkoGK21EvymYhXsGzV9b2sK1ituKLYY1rJvesoAEr5fa3mnVPfokfEUWH69h9hftKpCHtA",
  "key32": "5mkR6KyBFNLL86GQ2vh5aAXeXuxGAjJQguXyYRQG1HbWjsxM62z2LSpuD8nAxBisf5mrDiXERpjieaP5BNY4Jfxc",
  "key33": "aXyDKuFMUkKpm2Uc3rMDLq8FFq7iQZg6w7BacvsgsPUNZ6qMFCTSjrtqiz2ULQ4kWEfh7ZotW7vCkpGdQ6dqhVi",
  "key34": "26hAofED9t7bBuJvcguXA91zeTMcF8X8waT4F82Y8gKnCDU2e4LmQDo3ieyEdFMgV6TxJEohL1aydVBAjHwgUvZN",
  "key35": "2VSv3XP9pRTqWKhrcL9T1Qt8T9g31DYnbq6pocQQGuQH7itEPm4agjvX2ZXyeZbS9VBdjJE4jVSgFYCrVBkQm9eh",
  "key36": "3KokoHVLPRz2nZg6dnarQ6KJ35QFnFTCBqcuc16wJ9rRLLAMqFk3bFwEth3GrhWepnzQJfciewcVz5a8esrPHLuj",
  "key37": "3PV4tcawTx3ebzzRVj1y6CHTk6McUdxY3NHV3beBcAUPMjKECPCVePtyLoWBmMCq4T6dkHhzHdauwWySjV63nq2D",
  "key38": "mpLR9apyv5MT7QeacHBbiMJXd8M6Chjta5dG7bPMaE46adYU18vtBxTk4eBggYtu9Z2TyVKXo3rFMa3xtURne9m",
  "key39": "5Y4Bz9JnoHfnXXdgcjRYUz3tLZwNaRToUndYH3SLpaDRSdyNRLEhcwHVECpfGWCYmGwjveh8zaqHQjubKq6iznKm"
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
