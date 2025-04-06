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
    "4vPjChNt2FcAnxHkhgZXM315gCC3kBn2hZ7twWS3domoJkShGSwusSMMUjH4BUbSewuUnCHbwRFzyXhV6XsxW7GZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vrDWQLYNQKQ2dCFovLHMghFBHx5mrEKiCzyjQ54Fo19AjbRepnniHRkyhDqWTFBTGbQmoVBDn6yxZFMfktRJb93",
  "key1": "4kfnsvpUrSPzbk6adi6UHqwFAayEbfypSxqHRB5GCCygs3NJGCok6NHLYiKhdax7jMJJUS8a9PuzxYT1CTMqaLuT",
  "key2": "4c8M6HC436HTj28eh5LiVVEXFcaW5ChRpjjfxGajiQQUSwaoXHSfiG864MVd4zXKvJ2FRTd8G8m69dxk1qsZKpap",
  "key3": "4SG9qVFBtsp5Yod3ffTfNAy7FVgyxkcRcM8wBSAtrSa4UV7QgtP9ezTxUVpFL5ZScghfqYZmpWBVtnZYbAVq7BHy",
  "key4": "2DZxw5LkB6UNwcULpAziAbcNhCV7pif3ZQpa7AfmnBnkyqrTNhaLtajndmu9wMaXf97a7wCxT7xRXJCr7Au6cSC5",
  "key5": "5n3N1AMrjRLScXDhoihdVRGUZkXnFPU2JRcEW6J3rBJ6WetkRpBrZ32aEw359wCAQNU3JzZf3xE6Ss9G8sTgXYAU",
  "key6": "jpMYqz4BDq3KKgRkwm1Ycz9TZVH1XXtfgHmz7DRvxnQuMJ6pBwa3aeqHUCUSkeXhTrg4gg2JqSgCh1NA8xDJDrv",
  "key7": "9d4RWw3RUi3zFTro1xLDzJ62z62maqH2pYinD7TZVtTY1sMe32CrZ717tpACYGMsiqHQe3D9mS1nFc3ZYhaKgwT",
  "key8": "3cLbA79dVm4Z4jDjAQVyM3uRDjy5GoQE2iaGHQ6etxPYW1oEmmECC9eUqr7KVmM6s41XSUniLdVZKoceRhrsxtvs",
  "key9": "5seuYfdsDNq4rPKwBGDiJS3h4k8BDSUS6c2ir85RWG18LmkoZEJk1MKqJpQ33GRcrz12v18LpnNK7sMNBsmHDa7J",
  "key10": "5rddc43QVsMHUa2rARjUvWpPBttTEGbvfWHe6upgd4BdFRVL9pJTJK1THHQxPUiBD8VJzAU131Bmw9R2epZbazs",
  "key11": "RXY1iGu9twjttsBNH1NPxwd7BX3YxBt92XKuYhQqH3H3GcdenG4Gs69mzbzTXyxm6MFoNAkvvFPCxrDGzvMtBNs",
  "key12": "2VSJcBPv3Xi6qRyWtLPXEhgrugMMpfb3bxMCy8cGYUqNpx21KRj9f6KnC3CY66skJko2cj8hUXAxQiS3zQqw7BfY",
  "key13": "5s2RoooZU5a6HGz7wsa6q82myFzkskuZLS2TQFfZuNDCi15MbKZGDFtBYELkyHBwL6co4j5nsHMVdhEgJqMptF1s",
  "key14": "4Ugbh3nL6hG2ibjWdnUf48z8KoJGcV2gXaiowpK6gJ5BjBKCXUJpw7EUVdf4nZYvfjeBu5dAtStUoUmS4xRQahho",
  "key15": "2qcaf8sGVDrnXfmr8RXfPk4FWBQq8EJwWsxnjpCMB18QTpzVHJ8NyVZ1zQfeVGe7KVAekZs3KPjnxPkRWfHBmhP8",
  "key16": "3HGDEqKA1K8DDKQy7jo9PfbYUQXhUjhWWj2Vkoz9A5imcR2oZiLVwAhGCcZMW1ZYYXzr3VCk2JsPVqd6ktqHw55H",
  "key17": "3Kk7PLrhZ8FWcP51W7RV6VGmm3rWMUEL6NWgdddcQx2fVEyhmRe59gDt3XD6mX3CoZUk3PeCLt7kr6GHx2AAwedB",
  "key18": "5MZV1qPiP8XdFpwJdZoaYsLweKjY1fMdBKGM8xxjEMnAdhCgER4VqahRotWFxHGGwZFu6Zcx5JzPSxExWviQ78iJ",
  "key19": "3W7Uh4VuhJQ3bPc7cbUXGeVQwmVwwhQBSGHuVT8v8hXugsmMT5tYFwnh9jWp8jLZy4UzR9kKFmXyyQUswfx3zYzv",
  "key20": "4mJJwKJmHkQqGS86gaYK7kLCDbktQYTqKN2kei9Wq637AxekJ1hBMBGMjq4rs3Hni45Me8eHNJGFNcFPq9juodpS",
  "key21": "5SL7D1WGWdbD3Jk7QJPJ3RSAt5ZstwkspigStfhXphkcC3k2qZ6p5T6TuetgSxTJ4cpjg4SbPBrATMRjfQBN19SP",
  "key22": "5KZKE7TWsktj5zjar47Nv1SVm5GbmE1sKQsdHog5Uiavhy9XCLSYN1crinUNLyJUvZYp5EiX9RS3hqDpk76SFJac",
  "key23": "479NMtFUCfFNvRwBvUL2dDBRqQ3N79mWhyTy6U2wSTCENZjx5VLAPw8VG3hvBChuzuwrXkVfvhRVyfVpjfEs2fiF",
  "key24": "4K6n9eQMhriYeZ5P8rtfXuBumw8QdTdP7x91ZVuFPctkTetiqRBYNL3XJdjpAdPyG6ZGWWBMyvfxpGafSftNEDDR",
  "key25": "5mXiwRnLkXQTqsPPcE1JksdpB6yo2zt4o9ohsmyZqzXN3FU8xBXTxdobdpPQrYngkMQyizJ7RVJ5GbqShT77VqVx",
  "key26": "WBhPjioUCgSnLvJXA2LeCK8R2USf6TbhybPXJuWqvuSpWeD4vySp3THyeA3GNzz7E5KXY4qR3foeushaqf8MaMT",
  "key27": "4EZ7kJmGwNWTk4SMshjLbUTits2ZRFwVsC7HjA5yKpyGKrWHB2wtoHDLXQaJqDgryJpfpX5NKZDwx3gVQur33tBR",
  "key28": "46QNEjHzSLE9Wp7aLQCU5maYT2fqKvP5kqKA7RyiqDT68RQx73iQGoVwpHuWpC1AnojhWhSuJPLDjT2xRkcKbw48",
  "key29": "5somhbcggx3ZCcWAkAiBLuEwRidDfiDHvq9StTquaGFaCqv7HbBYjKG69wC6MkU29RP8iZ3HHEPDtFLEojJ7h2SW",
  "key30": "5YxVHJzvBqoVfsuXHWscHLiQTxFQ9QCAMKqTbQVnAmEddiX6aQBL87kLBZozYDpdeTGPeNJ495Td6Sf16tX88DSm",
  "key31": "4eC7wa35aHsXVkLqkqXyJrPMnwwwxFvTHWDtLBKPVphfgAWJvcnospZVUE6eZADVfcKCURoNAFug9czwoUQeiE6E",
  "key32": "2CiX5uzLegDYHLjbgAND5FeHQD7YfW7kPZeRfP6uLw4kvEHzUy2Ln1SZKC9tGe74fKp2ZJkdTeM5Duwofp8S2H8Z",
  "key33": "592JqnXDrJXYxQ75MDVFLD4xiccxFkcCq3PQf959H912PgWB9zhRubT9RaoJDpXWFC13VCWSdvFUFY5TQhmjnH4M",
  "key34": "3ZFwVtc1VAiVktqHNaoNFV9X2ZuV78x7VFBjmw4nwaV77QQCi7FcRQL4mHnyx6bzqVCEQPgzZbvmZVwhdF7WrVp2",
  "key35": "34UGgSNZXdyeQWyd3z94Tt95qVWKPaWTzXBBhcn1BykisuMp5TcY7vsMMnoKVybbuou8EdULsH1RjJvxT2Q7ZSyH",
  "key36": "5Jp6v245RiPztLjTPv6rSyyz3tbbRC8yFnu2NYmsfGjwnBFeSB8mJAj1TUMWCdCJ3pt473swwG2D4BuYDQ6t9woz",
  "key37": "211H4V41wrybdM2XJAyoFsZo1KWy6Vta2fazJ27bdZqQg4Cb57FUqDWT4fQRSWntLPQuWdyE8re7V97g4sNZoqwW",
  "key38": "4tCHGqX4M5nzzSY3EkHqJSgkmNpoJ3QH4JxJe2s5PUGtXQDM4JngDiGwEhN1MBsgh5VqTgL6xRYPp9gQxQ5jC4ik",
  "key39": "5yGWwx3xWgVMJeWWUAF17bMg8mJZ2HyBUTHKPuKvZXU2hvSpwMAvCQfGi9BnS59zFP7KHmRxRLusDfSuAmm5Pqjz",
  "key40": "49255Rv8fz8dsAuzDX3Hi1nWiz6UE31fGoKReBcY9mgfwyafPb3AnpUX5duXAqgM6iG9EnnfmZZFt2TUf1m5oaPZ",
  "key41": "3CSj9MnMgnqWswuuGqVFZTDSEGoLNFo1JrJgVNqD4ay3cVvLzH97QMKYMq5P4AgdcKjAuuVDqeCfv46GxJsoudkE",
  "key42": "2y3R5PgtB1PtjBGombpsSxYTHtknpsiFycC1YwmLNKTdNSHCtHV5MbhTvRBTfEr2qk1kLywLUxkdDmrWGy9Z2ZuE",
  "key43": "MXkS684QPSfQ99n837orKgMv2yG7CXtouhtwDE3NHv2JTgNtCNuAWpEbSvtm14dGYozq1tE2WpsGfGHPYSfbT7B",
  "key44": "2iHBCxwPNbUArQWC8npthwMQLgAgAzRj477HNJ7qXeaYKibsDXgBMxPCeFfAGxAZDNhQXSmCY19roQR7RX6JaJBH",
  "key45": "33JTMcqW6EUhxffTpFzLZNDJFDqbHD3jsFiDsctXmk5jqgbVEce6PZo3u3LFsjNLuno6n1qF37YbgBzLhcnBKVGv",
  "key46": "x1atrXsphJCQiH8kp8vSiefYUTqY2LZbXZ1WeibHpUygnhgiErrgFbjX39HvrxhQiBgUKYyzSSvD1Lq5ChWkvLm",
  "key47": "3wEszCBAX3o5HQ7utBZzdSdtrG9En6M5s4anP4TQHZhW6EhK2Ru9d1Jim33yy8B1fvNane5iaZZsbg3RyQFB7qPv"
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
