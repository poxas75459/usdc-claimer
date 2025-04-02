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
    "3aJveuVvw4zbzj4DJFG1yhYgUMVziTNLiLBK6drCAKQToPQr9wpQY7KCFbiWy19LpctRnvEHYUwXJny9FgigjpWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ewM6spn9ProuGnqSkiPKAicfLW9vLtt2S85EBtujRzAQPodudsxQPUuVbemNy8S8nbhMkfA1RyotY955Egy7EFJ",
  "key1": "mNJBzYz8kVPuJYARw7JiM5p3zkCiptC9Jxgwy1BAzyphY5wUmoY4AfNRSGr8VemtaJeaoMkF1Z2TirUWSrmfUr1",
  "key2": "5QcmwGyGMkThrYZbQtDcM5KzBwehiYPp2W9M886pd5DkNVZ5rAdAoRL4rGCkN7aMFDXzajvaUx3c3Z7zowAjd64k",
  "key3": "5c2gpra8BTgQHB3XyVcRem1URE7fnYK6dDA5bFWTMVwu7rwB3z9FtZRew8kj5E783RVZjuH53t2CaNxUXDGtMeSj",
  "key4": "3TkTdnM9xyXE9ubWn1KGrZCQCr3nFywPoKMXseXE8y61uqS4ofJ9TDjMqjbTpnatrViwZ7iCjgqahao91auZdtx1",
  "key5": "4sPnNpNG5494mzST9hndAkixa3zLYnt4AUqdRAnrpkKLLFh59KtaiTWYCGd37ygLT2yLeGM6tKnshJDY8VQBL21r",
  "key6": "ui5wPkxNBu9oz8MmXswPCyu9Se9VDohA8dfgpUWaRXAfVzE6WsF3XpdgHnvmeq3pTqndnmtcSBtjC17Y6C5t3Nw",
  "key7": "3JnDZVbv35ZCAcRmUaDhyrAWvevCFpQ4SJbkFGgKzsoboa5j4nsFAUfrJVo314ymgt17Aqah63MojMVaQPh9scza",
  "key8": "3FGcNMggxh31WWk2opCy9gXWV3DtEvV4WkLRw63Wc5BbkA7ZfQLKX9a4Hvi4g9PjX9MVi3AYoiFmkyG9Y1aWofKs",
  "key9": "4ZMywco2zrabr9sNJmUdevEwZKTNUyhL4kB2Sucri52sieoHxDxEX41Xt63RUa3PgyKYkv9WEHtHYBj9yfuNEUX1",
  "key10": "5F3ERpjTEE2qENaiSt7UhEcNsorgzmWRxPPTSDca2ZJbxoDqJggYmeNyWiS1E2LY5zWkQjwXLo7dYeAYtrWetxad",
  "key11": "4Bjd1DGMEr9L2MXmKUVvRdEYLm56vhd4PTriALanANd5qBB9YcCgTUmTPxceM2tKBGvdqx4R1rw4nbJe6eC4ZCS1",
  "key12": "3L4NR9siiYT4MxmkchAPmuhzxrt482DFWUe93h3Vtnqp5XiAmiGUXBxc4y1j7UkJ16mAViTYMJJn12FzXU6RqbjK",
  "key13": "j2cLZ4L7HCVfW3TWYwXzyRN9TmCXdVLYDqAfptrwiqWgyC8FcEXb2535Bw6X2VSGiXqMBbmQJLteGiW2wtvcwbB",
  "key14": "2xGPxmhi2BfpwnMzzzioYVBZ4PHLjn21vgwg7QAqw8ULbAJT9JCYpjbqeqeKs7VYfLdgNEEPVUAhAxCjdWrg5U2N",
  "key15": "ohvnmpp5qD2kSYzFeMbSrqtXU1rtvozMffrJbvBnusRkQSL8MKm8HkLq76KdqFAbSFNnkcDX8kpwYmVqH6WmD6J",
  "key16": "2JjoEoHxuzohTGCuMW24QGetXDh4UgZw7neNoYC3ZEo2gvc9r8Rg6gpGGBx1xXr9rZHoanpSxy5ZD54D8xbAXggg",
  "key17": "zvbN1PvLpUiDZzUab9if4dJViNiUC5oZVE9JWQK4T1FFxc8XZwPAg3ae18HnhFKtdVuns3vmQ3E8MbKVjwqjic1",
  "key18": "3Rz8NFZB5qLuKjRK9W152yZ9D1fvAYK5cNpDmpXo6MwbRpRqVeYmKoDdXE6nH46QNKJGMo6cjdEvgUekXHRh2hTr",
  "key19": "3zCYMKiKFeLjLcJVLs1wjJsitqSi1kCkg73TqMGNDMLyFxotkhzpPE9qaNxj9Z2v7Gufm2XNfwJeuyX6N1DBHJR7",
  "key20": "4nfJbYTtX4oUftfivv1oYok22zTDvuJFX7F9H7HqJqFCjfqZXC2cvKxVHLKerWdp39wDNTbjDo6XEGyP9Gjo6AQe",
  "key21": "3vrGumLHkysncpJUnRWzBAHAAS7g23e5BD8c5p3tdvKvyXVXHvAvS8mKTbWx8CbpniDP8CUd7Dh2NSuYPyCaCi7F",
  "key22": "2JRmmCj56Au1GGYm12YAeah42LPZC1rA3o9h1WkeVrxTTEc69kE5QWf5whfVfUZrasJ7edLmN9eh5d516xEU2MWo",
  "key23": "5pCBuYh4uyDQpfop7PR9EYeZRpfhCTSDSFPpPymWAcoM4SAbPPfAqAvk8pxujy4N2AiN7KDU3CNY31GUVuB5zE5U",
  "key24": "WA3kwvDuuarM5rnXrLZCKKqErMYMsmNQnC3EQq7dpjEDHK1BRaYxtvecr2qYZTU1bGtC1QSBrLFhCsDkRYPDEdY",
  "key25": "32qtFPfkwESm6iBBBoB5t9iAZXFbgfbscnRAAfEphkZXvczBKwypGycvkgKU6TwDmzzu6s97nUDz5TmBSpdoRx6N",
  "key26": "5NrLBPdkLkX5xF5fiyzQSVPZMF35iFceEaGT3ByhxQxiDnRAfxPC1b2eGceG7WBHuLQ8nsTEwtYGL3ZtcBnvN4vj",
  "key27": "4FPD4w1btFivQc7cWREvvi3xNmc73KTAeKSkAutz6sgck4Lfqamk8RG3GMf7BuBUnJyMX2xNZ8tVBJwX2WBFDKvt",
  "key28": "y3EP5XZ8ntqB4qW7C3wuF5H73kxCFeRGC4a85kXuqYGGW4ihdmJYoBzoA68fbc4r6KEPJE3mmMQ1Zc1JhZ4zrP2",
  "key29": "XBtgja9agYk3v1APJMfe5ppWsbn1e5zvEaJNxSR4fsnSePxHtJmpxPypRaCVNNX5nVkYFB6FbKv9KUeDNdGHyJa",
  "key30": "3CXZ53y6cq6jFvVteGSABbZXsw674YCW6F5LE4iXveinNke8RQuJtFssFDbskXv2LFrombgx6iYiRD4GsARin4FS",
  "key31": "4S5B9SwjuBFeFUBfBN7TqBRAZKR29iBEPfHaNnu7LYkZUnNCJXKP81zxWfybJJrxfULY9a5XUyJTi9pxQvsbW8Bh",
  "key32": "2DnSx5hHnUhkL3mDFJ93h4jvpHZZ4FLpLuXWbTqRYJcjpGWBXZXPiFAJVZpk12G7Q95YxzNobCBoE2pHaSsnk3e5",
  "key33": "5i6k3ZHXrQeTFRVRXmY5iGCtgBCmFDTmGUjZJ6rhx7bWGuG9dA8acS3rein95wr8Sz3CMFacGmYX7S3BbsZEtKdX",
  "key34": "kFrgcXFfC1j98YtfS4DLrBeJNxYt2fXJ5nbW2BTXufsi83WvbexJeeLGz6zhjemefd7cA4Tur4J4JWCx7Xr2Su2",
  "key35": "4tfkatj6mHengASid3ZmcZYBUDdt9cU3s68fa11nQxNYARPd26W68aaJq1GwRTmy4onhEVVRrAreTmrdbT6o7Wzj",
  "key36": "4LfxzkxnU9EFJQphn61u6RahPrCWaQQ89UqFqX1wLZoi4g4ter7yQxeHU41f55n5emQCMZ4zET3kZahXie343cQF",
  "key37": "2fFc6jakfJa9T33dVgR5mkHpt7jVC3vEsbeuLHVo1YTAdpZ8QXo5r59PuSgZ5yhBPQ3pqrL15r4gsS3U52QQJJqS",
  "key38": "4LKiND2BDmrY1DdJsx7k5PGGqrapPS91HJ3hGy3Yc5vNAyLrAHkqhBvosBxMkbFCWk4seEz2o1zentGPXoa5HevH",
  "key39": "43Dcqv6NsG6zc4UagED2AgpvM62RHCDwdPaZkJm61uiQCPRATGadKjgoNon8RN6dTUtzTtW1kTzhAcjzkeGNvHuR",
  "key40": "4ybNNGC1AiFF2Fk8nfF8GbUMQ3JxzSYptwXEx19mfKrkqdgfUAWzw75Ts65mTjEJoCgXjXmwDwFnW7vqUyvk6GAM",
  "key41": "355VdLF1q1RfU2irhnhWqeAuojUdxvxVKC2fwwHhHkDaYifJDiktmNQtjJo7SVmBJeqbw5ddtVjcjyPntoZHHSN5",
  "key42": "bkLDzbSsXWMFcuVNPQQAaN57VmvieUmtBEksSz4jcs5LEETuzRoNWpJJyLu9zVgkr4QBv2EfhvrNAPbiTYVScwt",
  "key43": "5oBKryQSJwjJiAJLn4yrbeEGampcpqX81GKCfFnZL4MBBehxzE63oPeXP7uzesLza3Ek9hi22uk4W1dft27bMNij",
  "key44": "5F5RAT8obpWtLCD5TqkXdGPHYUTg6Q1fHWYfQrzrSV14wCyCZbCxwkGXGjs12cTaFW9jUH5YZUfjoJtH8pb5z1JP",
  "key45": "58RL8KGGvhAf2HdUzPz7VZvpajqS2N4dx62TcWCWyDWH5owKcXBy7fDFA5SZnMgdZvzP6A4Z9LtbtXE3iAqMGqvZ",
  "key46": "48KhwHMkcELYDy85SCzhfTpn7GSc8m7RfYGF84Xn26FNLjzVMLKfbcSCyLj8ENWhnTZG3ibxWXXpEVD5WK7LwkK6",
  "key47": "36npy2FFdxitHyFhczr4LTLwrAqFbWa47ok3EkTmVzmNASdP2ARsdEfmbbkrgva8S2GxS9cyo4RmgYt2jcKJgS5f",
  "key48": "5db1DzBNExSQpgZMUeohkn1i8dULbqjUyMhboqx8AVF7Vb71zq1U3GzmAqbyXZ68EBezamDjSaY2391A7DZ9SjQR",
  "key49": "56ghfLKoa3Cbbu1wb3E8GBQnHRhLTr6E5Atze55DkA5Mgr7UDgkuUQweQRSg34pZqbJUetBLVUBdg9bUhrHyJLJt"
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
