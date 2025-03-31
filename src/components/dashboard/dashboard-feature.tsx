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
    "63H4uCU55TNNQ3KfzWsG822HntUniUpsPPfqoTkYfNV2dY1GZBho9i8sVKG7AjAeJXm6zoo4ucaSsxSzJgUAjBLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bkLVeHJnFAUMq3HTXPyaGwViAUHymvQNPT7irsXm4pbCqMibgmL9VePV6SvKSp2GNxAWDJghh4e1TcEbeU6Y8hf",
  "key1": "4XFpn3HZHAzuup6Z3Y7XJpKn2hVwa7gW1suX17eCw36SWFN3dFwHxp58dosAbNwrNxjX4n6f3WA9ZiMb9GNsQxua",
  "key2": "3e1B6jjRT9sA8yDKt7cWJKTeSd1hTHKkSDDbRtGNyzFPdzHtQD6LWa2QdDdp2HZvS2Fz5JTahZEwrGMJpWnzYceZ",
  "key3": "5U4HHxvo2cPDXBorAoDsjdXoF2b5qzERGXNPjjJarJ1wJhhVUtbR7hoe7CuigHFg4iZbMvmwbvFZWXDoCZJHk4jH",
  "key4": "4Bjn5zef1ZpKq4f61pmJQwu2qUBeaEC9tvEuqJUCQdffqwH3NLgbrPUsL6k97BKgaQB3WY8gavNg8jzfFWDWqg2A",
  "key5": "5ucD2jUikdUhLt2mcse2F6QEYf43SdvDXg4LRBU4pZpt1zbKCpc6w8KGCFZp8gMpvhZ1WXacmMpBTWbzSQjT257f",
  "key6": "Xe3gnMdZvDcVxXgGuFm41FDwwoeoGLoYUhx74QVDF2gjfgaRSGdsUzh5pNLEUoioEAxgSNXEPxgsVq1CKG765Ww",
  "key7": "TbmRjwF5eHpBp97iGiHFsQbFt3peecyEhFhvauWa5syMVXrdF5QZKBxevrn4epTPuBWLWJFM6qAZLt5xtRW1ZXc",
  "key8": "hLzctjf9Uj2qVeVMfE8U4pg9gX2FukbHZduwHmr5dMubxVgn2VoFfnAdFPSykmhn1gFeuYFsnWKSrBNoxxDTWYf",
  "key9": "2TjBhP9fs8mWBaPhrofXNSeHZCSyPKnoeLEZD91mZmdK8noCq5KBx6mhUN3WV7rW2CW9fPxzpA8ht9VtjyrvceP6",
  "key10": "5LsQKFn1p5Xjw6zY7ouBJhvBJjSugorS3d4dbcK8umjUuwVCTYSa4pojUEhW5yVce2wmFHXG95BXcVAtmNq28BT8",
  "key11": "2QAdjb8o2JWxsx1UjvofZ2FPAmwbvbFFE7fess1ZDJ9C4AUTK2mLgyWYrGcHhRdNACRWSMaF2hNWgKUsSZq3wqku",
  "key12": "28vkRf3CeuYepPAxDqMWfrQVGrHNucdPzygBjUcwVjrtYMXxUiGwL4EkJz1knCZVf5oNvgeNZD2jp9xxvLb6TEG3",
  "key13": "VBBy6qsTT7fZQgNHASdcTMMVxHJWtkVNQdHKgkT2zAwVmS1Uu5TTDiPsLtyzi1z9UsDwqDdaEXdDXdje4aZAihL",
  "key14": "55QeUNSuedsFAiwZwPYRjmbR2yJQnXzmaEERtXVFr4ddGThnbFj3NVHbthfDRgsqVrXnzsYcvc2HtssKXvPYNm8k",
  "key15": "bmdDC8awrhr8Fp4fe2UEkNSTc6V2ah7GouJNhYfLvXUarKTHo9prJudPPKANkSbUhNqihRFXN7HACSi5rhpR782",
  "key16": "3ePk52nUsFsdmVSi5782eyG6ezcEJnbLrTsPqBz7fQdjm6sEkYvdPnXH7aDH4WsaDi5g7BrCrhRvpbAHtVWnSZsa",
  "key17": "3AizCzBQR8VW9m81XDCQYYN5o5FhJogYhahudcmPb4BUZHLBzLWwoK1Ye7Hy5yVCCnZakJ5fcgTuoefnNW8M8mWG",
  "key18": "53WYHJgQ6iJfZAPgQJHBbn4LEyECaAwiyPD16DxiwM8C4rWUm1ejVx7SWSSSiL17xP961wu1HAxArrFadfgXmThs",
  "key19": "5YxTBqZqaysz5zbbJEsMCx4agvK2gAXz3wxBvgYG6Hvo1kdr9AqzsXoePf3QxEWmdGyYqmCxzuyPiX6jDFwjQyJa",
  "key20": "4CsQZFDpNLpR99dtnUJwraa5zuF5gJqmytEmGs7BmcK52aBBumBU77Fu6GGjvk4F9WPn3JBMbTYx92BvfNx6nbcj",
  "key21": "4LY5mV8JBpS322JphBhWKwjvUCCDWEHiLxvyi8ohYi8RaXM5dyAP8BD37yVEaNFwViUiUQAnqsmETSwKeUdKJCkU",
  "key22": "4TF1k1hvVtoSiAXiUZ5iyUpANyNePnUibvsgoZY2uSiSDZnQquYvj3DbJ56HrBAGSt8QKi4YPas2xCMvr3Hfv1M2",
  "key23": "Nh3DnRig8bPmgdopnfwYfgvSvA7X4qDknP4Jw5LLcBoKy4uD3QaRF9CjdCm4YSKYbyjcasvaM33kK7f49j2vukH",
  "key24": "3XayVnPvj94wocVT2vS2h7TCvZDzVbWZoiKCGfhdYgp4JN2CH1vSE1CEuNNUBcnXeR8fprCaERXiEXVu1pxK9zh5",
  "key25": "3H9DdCBjzuLetog35SPym7SGwRFagGVjhRKm3r8AaLtVS8vKyMUp3XH19LUhjz8kPDiHjvGDr73bpoZdk5u7SA4w",
  "key26": "27hGgVeAWnQLnE2pZGsHWfwzZHeAnHzRh9tBbUujPUrt6S7XsN4pSLSaYkvhbGK3eQxY25vqvp3uFmtoj5ooVA9G",
  "key27": "5VrvBnV6uceH6m59gEiKYePvsHomYXbRg3XVivgviBjLnpX1XGmCFHmKVPqhEPbMVBaXv4ZMi56GUy7hpvru9kK5",
  "key28": "A1QgPCkraS8aP6AYDQeEewcJXB6iiRviKr6Z4tUDKHnwXNHp9h1zD9iRWT6swDAfRvuqxmyvFgE361GaLLNpqcN",
  "key29": "2f4soko5cRbkrb6VwF3aRXxGvp31CRBrFT7eocmQRk3vn94Q9ktBHm9Lb6hFMtWzuERq5mVQzoRxS4AWknfXHBW9",
  "key30": "46n8eq25EZdSXiJB99z8SpJTpSpfS22vSp1sQBPEA4p9jay3q9MmgPjB2TZVRBPFZq4zs3np1nhTc7u8tUHqzX14",
  "key31": "adsMwkSeynQLnMpx6N9EGm4NL52ceSjkr7q9XiPiqyDdM2NdnqKnAD3WgC5vpRUWf35GwSjx67ubjqS8H25TbnJ",
  "key32": "2vtgTRCoWKdaGXmHNYPUMFaH2M3ub5DGz6h7KLwzVkaMFuwwaYiEtqva6oMQsF38pCBxQ9LWnvn2stF828JDKZ7F",
  "key33": "4fzF6EE8txq7rcuyaLo3xzhx15GP6DrcfKyNCQZVMMyLWZothVZSHotdDRmhjBFTpnch6mQSTx21TuyW1NXL6hB1",
  "key34": "4r56mQjBMSoyJpigFWrFsLooLytNzNVZJTX5NTMdqZUxg5pZKZrNCfugX71hKadQ7882GHRsqnGLnF5wXpRPCKDZ",
  "key35": "3AjuaW6VnKry9xNjgwMKznribcha4KnRGda2yp48jjREPYb9JLcZY3wsMfniELNS8PV68DkqNcafcPTpU7xAuW8f",
  "key36": "ufEEN9yDmySyy1TmH4cM1wiBo4bkwdPD2284udFPgivXZoUvcDPEN3rcxkjEK3T9wTYhfT7rpoBE8Ngt31zQh19",
  "key37": "LYjVQsqY5TLmB52dTbUdcG6NTMU4YHf5jjGaMpu8q6zq2A6m62b5387kg2NLwqSd7qc2g4oUretPUjhz8zu85hU",
  "key38": "5qUfm7xHn617jX585Ut4hj7T6Uv3c7HyqWEsdPeuGKyte2YWmJHSbR9ihdMXTD3zsadzZvsSa4LXH6owidU3cHaY",
  "key39": "4eVbkxFa9XD24coHTkwJc8F64XgWwkqfy51nUz9fUAdcZxEykCuKoAYWu9WQDo86h1eUf4NfLqf4m7xoi8os5cne",
  "key40": "4CwBURfAmZXXZnk1rDLAoFzJiHfdo1fUoSCERm5BdszdehNDgFKyRf17bgNHLfwPUToooKRxsJfQHeqKA4cdeo41",
  "key41": "5wgy71b1RZh58bngcVfHUFhT49TakTLEJd7Q6bwVCernAhHyY7N6SVv1GNkTJWDx3Zw1PSGFoNCHMAjJDCoJBtkx",
  "key42": "CWKSHUataXDYA5pvgpJoCNH3LRmjBUB4HCiZDkUBvsLFBfxm7xByKSv5jCM6APCi9Ew39QCrHsyTgGGsPMqMUY6"
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
