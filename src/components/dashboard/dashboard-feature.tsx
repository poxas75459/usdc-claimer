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
    "5FFF6c7fUTiVcDap8DTbjMYLnPMuwnCxqZ7HCLaZHz1z1n8zt51hisiofFZCtAK1mWNa3BtwSuRk45oP7K7xJ36H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zNeoLVyPJrWUqRc2douw9bZwoVCMJJ4fFb3DH4f81usdFkLuFvjG6ZomXbaKbAC1pq9eArGStkZbZiVSdirimcF",
  "key1": "2nVC1XYbj6BmfnVdMAKHVUKBfKYBMB4VfA736Mrb811TvFzUrWB3nUFrLJ5F2oCAfxacEQkXzbQNzCz6DwaRnmmP",
  "key2": "2ADrUrWHwjD8D5UP9p9M31bvmsZAQJQk8mA3pa3qk6iKhqFqPKNL6eTfRLZQWmszPNN1bwmscov3bbr8ViMJerzT",
  "key3": "3yyb9uWjoGHatscb9U1dknVr2sx3okn31GATNenuG9z2vvKotkSKuEC1F6QG7JnGMxXtdUNLBmBwyn6a2Uk4N5ns",
  "key4": "5CiXWNrqPD5rj6JSNK1e7M2NiPj4AoNVCjWhLKDVksMuosq77YrMkzB3bRTmpxaXAuxWBoCQ4df6VZCkC19voCGX",
  "key5": "4JLLRUhKBnN6acFq7HwGhj2JR8kw4YMQwyPz9gHzbREpXiaQxz1TFN3Xd9z65ig8kva4yW8HKV2tgv88KVZJYi1K",
  "key6": "3pccvHmCdaGVX74gX1D3GwLFmrdoqmyWXoE9zhwZWayYMUdJ9g4EYgG4cMScRmaHkPFsvCFx636czj1Rjs25w3Vz",
  "key7": "4s9FLBcPoenTAns8L6rsHxeMgc1FD7hbzKu5XiboTkrSvB44PtkWe4iMU4NfGYTXGtAYSRjXEUvipgicNxxhBJCn",
  "key8": "2qK4HUnc9RrqmHXjka6cw7UitNLc8Gf5NwNpYsYQDN827AtijiVJ9orLrQXGgWJuAo5w9r93LWh5x7VsM3vmzSck",
  "key9": "44NLUg9CmJQzi5zd21TyKB745NywkUBJXgvGWAoipwSwetX4TQTP2Vjr1NMAQvPdj3XpTfcBbjFRNGt7HcvqSfpz",
  "key10": "33khyP1UUcdyo2vXGAn44JaYMtPLoJKwLHxTCSd1njNTzu6kymeRVuxzYsUBJkxb3SfQgCmrJtvEpjCY1bFfEmom",
  "key11": "453JUGhVh5GFmhyLhgxbAgTk8rcMZy7TDekxUQZVFw7kT5WycLdgsoeYZWQRTrdpTjiV9RExJEhZNYJcNkhogrwq",
  "key12": "2azDXssSrqtNcnf28Avc81Pfu3Exi6usRhCfiWvJBjWXBgLotZj7p7me2qYYSWP4rd3A4PqaHTZsYP2LXrGiK2P3",
  "key13": "4if2xytTmitZux8cm39ZcWcLL59skv2GwVFuVtrMWarnM8egTFp5rEBtQuFAr2apX7Y5ideKJiB5ndQ8aAUonJ97",
  "key14": "2PspZrc7k4GQwJKV6NJGs2cUb5vsEp3tS3FTor5AAsB8GpRdiKyTrQofwUqPsmKkw8z3i2t2JDtd4sLUe5JbQhrE",
  "key15": "3NY8grKyVHLYKS6ysX63WX8mZW1k44jzRCSgTjfBcHGjb8JDjTByXhP1etuwMFgziL5iNYPsCRJeN4TwVK8SG6Mh",
  "key16": "o5NW6S7pTESJn7wqSEgdJEL1RQDYYVVtMq6ZdTgdg2eqwW4v45po3paNfC1KBoLsz8viEZ7JKnNEF3jgcz7qvke",
  "key17": "7YTGBnMhmHLH3PB8EyYf1KmiZijTyX8ycbPETMzsEfbUaGQJr2fdLHMa9tgC6Tsu7h48Bkju9YLuBKpXzGaTnww",
  "key18": "5ySqc6seNdsDu4r7m3x3NNTtmjQ5KBmRUfx44gWwvcEichoKYivawT4SR3axrZnKHKz1Tc7wxszyEZSTn1ydoAXr",
  "key19": "4rGnXRGpNHZDgUnHRzZL8ZSLgXvz1PHdE6C6W7fWRxFUcqyBfsJ22h945iAWozkuFA5STwtSSsKZbqBDxPVtKqoE",
  "key20": "3QsNWAnEr78QnL8eab259YLoqF1DaUFTboN4cQDYLF9YPea4cA1YN1VqKyqytP96FzGgcwt7448ALHueMAWzVuLz",
  "key21": "4gv3ZaTqrHLhrRNciWx2aXZNcD9ipx35FnijuUNcVozJkrD2om8cxK8QmsGn3j9L582PzeUjcz6pFiH6E6d5TurD",
  "key22": "4r6jbeeijc28T2SKryJQY3kP1i5Nd7LYqaXXXuZLGutW24SiBB6s8bBLyMQzM23FGyLVzm3W4EKGLsVMkkrpSmRz",
  "key23": "3QqDQz5MdDBjd7ffhxeMVQfJEiT1ZWpoGrp2ABS5y1DqrcK8z5LBbKfeZnFHouET21kyirbGJynSCGsX6gxTQKHv",
  "key24": "2X7A6wipPL72TgS81ZcU2GXWz7zUUFmNG2y6RzcVVehabScueX8n7PpCq6LejFoQDhocbq1wzLJ4NkJpceoxWJNq",
  "key25": "2m8W5d3pQa85VaYdGTRY6S413K7WzgcfUgP8FNJsDNtQ72aQj7moEfSfMTn32gEeLpU37HMmMHxTkrTNZrUbDfTb",
  "key26": "5945gZCp8ZePsWv5BDGBzdamdhyQwgADSsSj8qwBGKDooH71CNokAabQNKue7rNdnQm44YfFTB5AK41e3e9FurpB",
  "key27": "5E2A8qbTUUn2FzLsB8f9CH9ocSzj19XuaH8DPhMFtqPC5QWGVTNvpfrRMtM1JokBRGHd4xSEPsdwXaqAUYniaHps",
  "key28": "3ph9UCMpci2zNX6pv1ua7ctBuYo1EreAyxUt5A6onXExMVQf6WDCrxPovZTWFmCosNXqVhL1ckCyYdkypDjrHLp3",
  "key29": "X9d5pPMCsKgeqjzNxX6fN1xnjqGfmuBcsYPJuxCqdeUpXN4Pf14ehCfMUTEgoUwZgFeKuHn6fkshu8fBKhbEMrm",
  "key30": "2NGgCufGyN4ULVdGYTgWsAaSEFnXPfridWrCJKGtyeL1v4FgjoHFV7xhoFCnVEHL8eSkeGHXDitQsMeEPCd3MS9y",
  "key31": "2wbdtSriT3s19wKzYmNvvcmngAyHe2FDHoScuPKibxLWR34MN2Y5oLSEMBvLvcev64728gUsK3yH9ssdQavV8UQh",
  "key32": "4KAJqTP3kwuXh6c7rm9EFVjTYEypjLimSK6hzAGqZFKdaNbm7s1ZTFeEeL6AYnnqAgrPaZUaC9k4LAJpe3V3DCwe"
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
