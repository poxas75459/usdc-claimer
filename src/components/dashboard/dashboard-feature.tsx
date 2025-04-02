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
    "2GGKj1y6N3JhgL6swrg2jjGzz3PicLHBsyyJjcbP4UqiDRSGkdYYde687JVzun1FeBZL3YWUcjy7GhWb6BCcZi9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4311F16XfQFE3cy6LM4jwHudjEdBDngiv9ZMw3R7QSnkqZS49UjHsq7NZpWWU7CahJKKKpwBz6Vq4fTmmWCUvaDj",
  "key1": "5Jue28TsZ8HNnve3Nq2841XoxgtdPXTXSa1LQk4eeftV7J1AmUH1ujfuWFXeMKaegpFy8YjM8m84do7RRHyMaHqe",
  "key2": "2BshJeDNfU9RjqFLfpxuZfiHSuCZQvHABnyPLxjc4pnXjgKgQMQiS7pdTJL7f5LmVAmYDhzwo4Ds7WPYwMNpVr8h",
  "key3": "5qed5H4wej5LW9z11LBygHpbcLP3V88bRhoGETG4LdatNZtiCkEFwY1x84okhQfuf31ZBtjzTjrd6zdznonMyQxk",
  "key4": "5464anPWg66jxxWKuxyHEhKctrbEhkbgYXeCMM9ahA2SiVxSgQx1fwZBtWuQBnKpGvaaEK6ivbM9mYYb9a5NvaA2",
  "key5": "4aYJoYiuzZpVZkU23W1R9qESi5pmJSGvahBjXVk5CcLaPa2UNhpZuWMqXxue27czM33yviCc5h2MRgStpmP4Uh9e",
  "key6": "2Ek13HDfsHBVqm2zs8ViPN8nQDj9yHSpfPwPoKvJLQUo3UFCDNZ3vsPuDVyuTK5bKxPzN8A7KbVfxt38LkDsLZjv",
  "key7": "AFxXLd8bqJ6BDsBkLEHKzubwk3wbgDzVhyVzA8qEW5APYvQtoi9qDS9iDk3P47wrRhyt9BR3ExYqDNRXB2Ve1nX",
  "key8": "3trDCHeuAvG1a6LVXKDHvmhgVcYatjv6ZQ8AG3LgebTzDeYikAfDsFULRMBbhVJYP4o4Ea5xqyp6Dh6G2p85srG5",
  "key9": "57GLb1oTpctC7idTzkm7HUhFtqjcYEUqfmb8opvxXxrwk9Rpv5CK8kYsnrWE3XDjaCvTpERZCqxQg7411HUzkn9E",
  "key10": "5zEiTbHHbcspo4nhiHzHAgJXSTNbrVP7MR9ikrXyHWpsMiqJQdyknYJpxcbSHePMLDRZJbS1nNUj1hRHxGV5PSMR",
  "key11": "236NgEfSLRXJa5KBVcXPPUP2uJCP8fp8vbkmeXGTXA4QRLCU5YwYXMZvthoJKSUZesjxhckpj4MHbYPGSLMKEtME",
  "key12": "4X1iYYgpnvFQadgmAn2DBBadXYjDMMQDnS15yBfEYMrfgZfWmCmaRqgUnjRPbpeQUerLLq7VcemSntsGaPt2EUiT",
  "key13": "5a6JZoJoghcTEWdov6VzxX9LEzLe86L7Fkc5Agpp6ZTUHG2XjghBv4f1Tc81Ke41f6ZVSB8hLH4W1FvnF7j55kJV",
  "key14": "WRhWPt5Qn5y2eMcvy6BoTPzM8Bq4fPZCvWpcmjAFfWN6nvkcfoPV9ozqVqDRiLq8nePhMpV5oS6yPhpkHy4kxZp",
  "key15": "SfJfszUB5YYf8D5ykbJunxJAPDPgovM63bwVWw7j55RyAZmyWsaj5yBWFZy8Dgsre1bKMz52F94yMX7BzA9JKsU",
  "key16": "Jkgtt9hdRGB8dmQV5ekqfYmF3bcMsv4M8kPaMkx5WA4SXPCmr2tp4iHSTT2u9EytUxAFe6Kx2SBkhtCfpz8vW3W",
  "key17": "2hMafVXBHs2Q4mU1d6GKqiE6bkPLQfjaGRRRmo7UrmpmXX6fJm3MGbSGd6mnfYyTXi247Ek12yxoGb4fLH4pf3Wq",
  "key18": "v4ji2xe2LAGnaXy5ZZJxaJ4L2riLBFfskn9B3UFqeMt45XAP8kSabfxhW8yQnuiaaSM2eEaQCXZjhLqrQ59gJ7R",
  "key19": "27wSeBqmNFjo7dNZF8wfT125pPXLmpL7e1HzVhUy5WRexwWC8UJ99M4783nNtdpEwSQwLqrB7imUKCehoScGYYsj",
  "key20": "4q1AqCjkaqaREaVEpsoJCTiRUvEjqE1w2qS4tVBk8Hn71cHTvS7keZQNaQgvHXMPMBG2Jmf8j3FxuasmkGh6i7yE",
  "key21": "VGqQwDw54ZYKPCnPG4mQXrWUnYp6FvDx8xWjvNdwvc1JPDk5FubQyP6uio6sSL9ziG1FV9fTFsoUh8pTceRbN3C",
  "key22": "5oKHZe51E16XhP6V1JTLyFSvgb89bJo2yMeDTXoiDFqTVwquPsYKc1PJ13FsjzNTfFUUNsS5NFxBf65G1kyZXQho",
  "key23": "3FNam64v2tTYucAA4VuM4fVRpKnZ8EKVRM54MSfHZKzNnKLCsnooRNxD1cNxoVJFR2hJHRzeqFzPiscQACmxM8i3",
  "key24": "4T66pDAB2cQQzf4zXYK4z4CjN8sFG9FFaTcUohJy2GpDtRscTb327bdVTY9w8ReWAixjThzKLvyYTrRag7AJ8YHi",
  "key25": "3rRbMivnzoXEhua1QQfe22u7Q4bF1S5uyWaKuJCpxFYg59ArsPVFmswsH8Cg4kPavaUcyBae1Pgodjo3nczKEiA9",
  "key26": "3VNND7YDHVeRz6zi39j7pA9kuAnAtVi64fKvV4CL9zYTJwB6YHThRbQSLALKpSGpScvyPLJh6Q3jBpAyxSYHS5qo",
  "key27": "3FDM2yWkaCJ8Y6KDvDAyfKa3JiGiEMSQTW3R4LkSnxPToFkcCbrVtRLBSSZDVPKBWmx9PTgmLx9zDwuUg9mgxvgY",
  "key28": "3HB81UF5rssRYbcoLNZqg6gurukpSpRRJSkxSFAQVXTtuA8d6VQ5BeQbsJiEzCeWQJh9dj2JxRUJ5UnotyTJFz3N",
  "key29": "nAtfXfoe99qt623HXdcLgGG1dhk17DG7zuGbZwhVGsmqEGJk47YW88QMkKyPHJRVMJy5fUGLHb5op5fny1UWgp7",
  "key30": "45UPf16Bi4xya8F258iyAguGhaWEBRvfe1vWy1edaJzbs4t82xAtuA6623BeJKajExgSMwCB7GYeuw2mM22nNtmp",
  "key31": "452kWr64DXRJT7otkaVjrWNcTtPSUeEH26r2DimAQYxsk6FzARCtpd5kjWPwNJ47jdcKBHyLCVrumLj3TsKuy5Aj",
  "key32": "22UpQbP9w1nszrMZ1uvXsG1r6Qf92TLXgV8xg2KFnrgfpnc9pTKYZyVaMEZtUU7Gtp78A9Fy4Z7Evov7bbBdPUNn",
  "key33": "4pemss5Rexn6JEVoUruoA5kZyspY4q1SF9fwwEyAeb28YhGArfd9FZmuPJo59cPRJiweB6dZheTYbmM7YP9SwQCq",
  "key34": "4h2iUNvsjrxBCVKsqfKSc3yDHLVeQfNVPfzC3q6pguFdw4VGifLYK4sWrrLLnvmVYxfybcuyNVrxEBQFBUg5aCE1",
  "key35": "5Lu4gtgLV8e7w59TdSKBwASbLtdZHN7cvgHMrvimDzA2Ha18ALnPhm1RXTh7os78S8frUc3fPa7R9GrJK8GzuWre",
  "key36": "A3UGUJQ8KJXCo75K4gQXEskgJYEXeXJ4f9DvTokFHkfYceaQhxzxusXx7tdvKC962AqgkqLg9pzkyy1VdwZ17xA",
  "key37": "4WoyiJrWHDKENLXK6K6CAghs9BfYTzzTwaziQrzYhrfw3P9pTnxDQheohciE8a8Wbq1oxEhgspAYDcEG5ZKh3dkY",
  "key38": "W7NXsoMc45aZVakn5psePXeJnCQeANXaZM7u5NbBiG7h2FjmQLE2bMdpjf6hiF6ZKb7joeCdzEoL5koi3Xh4iNb",
  "key39": "anFTmBSNjDab7BNYEBAiZpdyMFWPZS1VRvMtjUtNm6TUXFZVzaqZ2QRcYkDuf1A5rw8meurrXz8aJZHgcCu9FPP"
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
