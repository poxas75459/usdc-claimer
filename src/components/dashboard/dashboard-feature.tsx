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
    "2MPo3P8yPqNTRKJPdk9o4suA3xnx9KLwL3ogtgsEHd76zCXfgUKXimpRmuEXWE5wSdqajnTov82TyQ8rVG5jamkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oycJkfrKnCqVSTHng6F1A38D3jLp7p2JTNh47kp98p33C3Fy47CLXe9DPSc8sH8K4P9YSiA62CUyrJVhKszPq6y",
  "key1": "2whqV5EjGibPuhoUbPov2fPeGAbUEbiwYThV2XsKxxDT8aFpHE8fe6smGYbu7wptRwwxjQdLYWjT3m5NAzpq36rt",
  "key2": "FjSVKzxHLakbSXV5UR8qLQuBzWbcm3woadG2zkYXHqsJGpgavU14Lf2PEjgFVBfwULmzNWVhod23x6umTTKjHy8",
  "key3": "5zcWdkXoCZddRzBSkEeZ5DZPDStr8jJ6PhbJgB6K9zbVU9hYiFFtBZ2cHSbHyPqm7LD7eWz5o5EMj7D9yn9nTrM3",
  "key4": "4KzyadGqhQdXBcZTq56pcsXXC22u7i2brazAzQLVY8k5fGLte2vsL7g8jjMWEPs8jkwCJy6o81yLkVquQCMntEqM",
  "key5": "61ejyEix3PRii1eDM3J1xKdsDhGbNUWKkCzGFhvD6KiA3rVpiLPcefnZhAAsjUn7GtjeRoqs34UEmzacMkW3B67X",
  "key6": "2TfwENdfmJs8oFdN2ueffgibpZceX6MU7EGML9Cv93QCsQusCY24JS4EcGTboLgxQbe8DbctEFsTEnWtHSaD3iGU",
  "key7": "2b5tFuXP9GSrEVGLKCt1Hcw2hQeKcoobWM1Z7LN89CgsrPzxq3NyYq2BCGparCWNbZ3dwnG1nezPAPUp982NpYAf",
  "key8": "4q6MJRuBKMm6qecnE9tiXNdJ3BL5QktgWXtMYQdfTUr3ZwGZJ2AWYK7Tr6TFtUrJn1hvQ7LCftZV46MjxuKxBUdA",
  "key9": "3MZ7DqDVPkTx18XeJGJQSSePJiujDnoPbJCwPXNGgpZnU6vtaiskNzk9TAXtJA7CxsPXSGEHVaVLo5bxuPA48Fes",
  "key10": "3S2wHyfZGdveP2tfmqsHBjwhYq6UT3sC5ZsBSi8cPG7YHEjffofqywpbVJyGFR7eWmXSTogSbtYp5M8BkfF6WLhz",
  "key11": "3bHRg4qkBiLozw8EEY6hSsX9kVrHLUJSchdg6NfRoJwCYje5pA1S1NPtNWWAFLFsqWmtEk18Ay8X2xFHKqbjzoin",
  "key12": "44Mkd5xaGZRCL4yRYn5QopjVFCP42yNdQGeVCyVULwDMJP6ssQSTrBmKfDtKJNiu6F1cn9nJxESxd5mt7zY8T575",
  "key13": "WnqYkzsFuLKdAZTP35C7imykEmCm9RhP9djY2JoynnSKvNfEeci8rm3mrLucwj7MRri6ZJX7MuQtLA9za8sFx8W",
  "key14": "4anWbgDYuGfkRK8671FuoAw8q1qbFsYLFin7Kjp6vrtzDEFrb95Ddj8tfWNjBAuMEiRY7G2K6NxkpNxGEwxi2ui8",
  "key15": "4YVtk5WqwQy6trSoD149XCmLUijmA4EBiTieLnrcB5wRWVKLCWhsdzWxmxUcFaUKvG1vyS7cmhPfcdDg7MVgVHKa",
  "key16": "22iyv4vHXwpxNwHBp6njFPXjbb6FvAHmgPMb4Qt1313xJdwSiAFGGNqneu2CQ2x8nCYYiUTBTjGeUUV1pG1Th8y7",
  "key17": "3PdBoRU2qjLnUnx5cogRKUoPXPa8ZmiLH9sBNMEZCBFVTyou4qgYHqwsww2HgvrZmt5mgp5KDJKinCjorSGQc7b4",
  "key18": "4Uzi1SzRGV7SW2quiS2iUtqkEGx1kES7GVM477cRJtx8BypLSzZer674sCaYC1MvGd15NktvWzBzf112X4K6HAdq",
  "key19": "DtHNcuCVBPxA9TnFAKe1y8PgywdZbg7VqDQw6Q3jQWcBDgDVfgr5vzUyYKLS2WbtXcr3d2XwZ9juYpsvdc6DuzG",
  "key20": "35ZM2AV42HWW85xamx2qcZtVAJYBNjrEr8Sz9uAypKqdZBXfzdLM3zapHQ7bivyTAp5Bh2aeDqqWan9uZbaNiivZ",
  "key21": "QdTMeDoxsK3RdAb91wyAL58gwKJLsZnCeNpTixirK8t7wZpGQduor831j5fGaBz7sjYuMNLtV6LZawJEAoVZJvc",
  "key22": "NNXdhDNe5f1vUSGeoAthFfg6pukpvrSqLPbmxuGYdR5Ri4FHNu4nFBJchWWufr3K1FbDjRWrfT9JLGMs3PgrLQL",
  "key23": "zAPDf2puhhBoH7hUcsNqkSXUKJfiDv7CJzrn3cJpUEJSkXx5fj5HJcKwMfi7Tsg8irTJMX6HXQiwtxBuDGAzz4C",
  "key24": "53JbKX4RKeVrGt9YijYBCGdZGLJgJr2oihNpgKYztUpiZ71u99dQocvYchUYYHMfvN5dCCgWY4uCfwq86YbBq274",
  "key25": "Pmbf9avtkP2JeCRuShMVMLuQKcqRvJGzmZVAPXzGvzbV6qjLJbvRW2b8CUp46rv54GKTkWdn1dfkqMXown7TyCK",
  "key26": "e539aRxrz7BB5TQSPaRdkutktaySsL6nwoYTCxFfLZawS6iFbLwX9q9frkG4M96PbKy12GWBjJs37N7JSNE4FqN",
  "key27": "4zfSe5gsePr2eTi6dy3BUAHP4peb1HfzPwUUdSEAzfTiWkNhzoCqdctKu8nbcFoxKvTWW3Sg4eVhwJjWb1aJgBfK",
  "key28": "2RK727qGKQeA2RWunPcoph99NQuGLE4M9JubgPoQRpxi7CADHWsP6PS8g3xxrKsNWzpGN6J6cTKGoJwZVrS1pYqE",
  "key29": "tupkwer6idparWcbgH3kT1Ed6QJ6D6cn9geRu6bVmu6pLuNSb6FKiDu3hNRaZu3M9r9SCLhSZX4XUbpstMvaymH",
  "key30": "A4AYC1vgoPiLZKtj7gwuL86W76byqgvV1V34AY3s2QNjLLF2K2imubJ222mmvztwTpvQGfedRyJSGuv2TuUvY1w",
  "key31": "2MBY9ewzx5rQBKWyfNwsoTxeoRoBw8CeiSE3cAp46ikcNkZu6ZiEVn9EvaTB63CDJXN5zmnmCLZNSX9iAo5TEj5w",
  "key32": "2AxkbcnYTRyQtR9cFrX9Josvk4Joz33qpeDEXGAufcQjyxchnijkzTm9meLVVodHEyN1XP8ckP2yrb1KXntyAzkQ",
  "key33": "3XqzUvceFC6MsG9H3mMJG9vZektgYAiD56Mf6Fo5YmQrZXUNBhud9KtZQuh8jCmma9vFTThDBKFz3aGyn2Rfyvaz"
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
