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
    "56T4VRnvEfJNQbwXqS3psnjh9QCv6FQzjzt3FJXKwMhVtooKWUikVxcxqbWtbMPSsFdZsGw1tcmrWAyrbFwYBFr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37ExUA8Kz71gMzaug6BWPzqknsWyBebzLVSjSXTrhE5zZn8uLe7eW5SW8c9rjCx8W464x6ecmAnCNzVs26UHtYRE",
  "key1": "2bW5z2kZSzpH8PafFhyetLb3arqSmoNCCjhSTykkHmvqrWMtjHffAnK3yKy2vN5HgSStVqVpUc68gRuUSywwEW2W",
  "key2": "3JiW7M3en4knCM5mPTccQTA4qquChxMJohmDo6WCQ5UbaqQ4J8BxciLv21kzwg2gLjX28rurBTrzhrsHA8qbWV3b",
  "key3": "3tgzrpjhbzJJrPenUJvw8CUCWZSootSxF4W7Eqj8vtoCGLGiT8vPL2Y6xFyQPEDEYi5XAYUfE6mhxgYkPQYQcc9M",
  "key4": "2GWgtiGP9xG8C6Fzbj87MF5Tm2qa5C5ZTZePssptDL123RxDwRrzZeytDaJSmrecHZ6cTAUBvdqNcQENW1gznr7Y",
  "key5": "5fHjNCGgXiwMX5EQjynft4u2tCaNPTKvS8tC9mDtqSi7aAJVjpbtZFwGaSHXFL53LTJsHLPskBJ5pdsJrXhCQtpH",
  "key6": "375KbbkxAi5iHk5DDujdmi8B2DWDMbnzjgHg61KUs2UwaYe1UdLjsgPsUr4VmH5Vx9nvbGk4EySBTHZv442gYgxk",
  "key7": "TeQpYqzSJKz3r4uRupKDrf5pp1dmTM99t2dXCBiXXwR54ivTBEk2Y6Hu3kwCUivGgtNPtSPzcz1zGMqutAyc66k",
  "key8": "3iwhKyPJT7AprkXxPUDkdSyP6sjwLWMdRwwx842SAnorCPPNfEpj6dniRvXtyxEcYhfugT2wVRqGi2t4wTEVWZQt",
  "key9": "SvoSedYTikUMCLqVrRnxanJSjiyzr3fEFd5zXtkyBbZsQbNKNgWwJtpMkJDbdeB6B34dFg9SecHjLsK3wCbEa7i",
  "key10": "cC2nEdQrBFotwefv4MASfkk8gR7z9RyBf8co22PS2hvvcXFDAfbjNhFWYahRjScRz8tr8KTi21Ne8rXtimVA2id",
  "key11": "3eWTtmcHTJBEuaJDR57xZLbtLhTSgHwaixDFoNRdUF3Yf9ym9srRafm1neJ295FAHof8NUEU9EXqjSFwUxNoULJw",
  "key12": "5kECt8R26NFRFvHNhKycFjv4aYEzPFKeCG7RHG8HJF3aoksgxmpX5tcGQy6ozPGwnfG4zMUQxWPyMhaU3YXVKm33",
  "key13": "5YzdftQQe4edCageKZ2AgPrhXyDL8HHU4LWEh3ux99UUBABLq5ap8gJ4yrmBtNUe4hRGAEptDVctSwPWE41BVZSP",
  "key14": "4jPFFHy9vx6wncKWmRpw21FYBsVHD2ZPfER8e4GaPpzBXz12dFQzgNDmMm8tmHrMxhvaunqtqBng6Q6YTyE4vKQn",
  "key15": "3q37xTtk5vS9qb9yF47R3xqZJSxtqV3maGM3gdA8f9J4RbT62ty1QWgaoWwE8VJTawsXyjNrmaZe4dgVxQSzpYpY",
  "key16": "4i95mwZsQXgMPzFuWGJ21xvMySrL9RqxrdsM1RqPJC15nwWkAAXfNR2oAqfrzaeKoC7iXiY1TAbfAXNhc7tG3pTs",
  "key17": "2RSSv8kuBBR6zDW9HWcUH32RvyfoVcjoHGE8vEVjQWj412kkoQNRFTELH5eLzew6dLjoq9U8LvjEN4UMwa5oH8EC",
  "key18": "44Wa4v14D8cMfzJUXTwgyWTjC1oYbN1HjCQ52vBXezFTzjvxn4vCsQREUbf5hEmzXvdA7G4hRweueZusQVd4BBzY",
  "key19": "ER83utb9XNXUzTENk6SS2eZgZjZ7ovTszSGiQeKd5cZGiNTvzoVcGvTCFgeSmyQfMeeb4Kw7DtYhuSbXwfk6QBV",
  "key20": "3eELSD1kdmSQYd8JGrRSmZA9Vu4bs9D38AuRb9aNZ7UiNVhgpMQHNRtsTDhRrQmBFJkNjERrqiqh9rvAmxh1Vd5E",
  "key21": "4ZdD1wdH8qjrvGJ4vuX9PcnBzrJvoRvgbHqjK7ZsEBXqSQh57QPAwN9xFQFYxaDqDt7A8Pp3pfx8uemJZbLLGAMM",
  "key22": "5tCjhFcm1BFyEfuLPGb6GLn2NPDXePmyZxCXotgHnip2QGgANhaqwnHCoX9yZgWiiKCpY9xvKfpk4KJWMBXeRd1V",
  "key23": "48MQSDHEJcTVTdG8heVcDM1PU8w3PXn263VTvc3Ge7WygJ4b2VTBDWhivTKHANgaMACDAmnPrvPx21ckkMUfiHsW",
  "key24": "A3SY9qSJUai7j6PyfyUqmMDga4xJ6Mig2m2akmawa94LePsZMmTqdJ6dvfB6aimjeedCTKJgdBDbSdjSK7fmjDj",
  "key25": "4YVLD1sZwE291TmBYVavmq46DuosMVSXcwsiMo5vBGSLesRUBQ9Hjij8Pb3DgqgbT48CQwM7QTiYztdW8taC3NbX",
  "key26": "n9vfk7WsRGvou8gGMHykJXJEscA8YnYziz1af3JtD2L1eavY7DARfbHX614UBChjJnPfxh38Jp4YFzco3iaxed3",
  "key27": "2WG8eQjLds9EHRnZeeuiXaDpPi9KTnws53ayyAtdWvWXNca5AawBMx3U6nJwpAFB4akhtP2tCQxankefTzHtqhzq",
  "key28": "5qJZtqbr5x3bYURVaB72agYXtjHbBHSwv6fj1UGeQKuaq9DPpuSCfUDK1BPwgANZm657AyPzeFdvCwoEypQZVnoQ",
  "key29": "2X3cxsYXMoMwozcrbP7KvseoxfimdBcPco1g8WvcfkVs1144TaRUYwq1SFppGPRdyrpt48VbHzZ1frDHfjpHSFjF",
  "key30": "4jhm1xgV6vsLRcBj65tS7cGXCyhaNE6QXeB2UaNSs88DkCnDLkR4zFKRvEtqqubHa4J1koiGuzi4kiemt7MWnHjM",
  "key31": "46qRkWAATo7KBshLA5M5Rqt9j12i2ZTUsgz9ZiFDQn5DDe4PDjLNs77Y4p25iBuJhag4J2owTAX81Pj1rjX3g2Vm",
  "key32": "4WBz1i1j8VLGk5exL6c4jmm6JUbjvSwe6MDmMhK5S6Yiw6Jy3PVV3HcQAhs1QepYfAagnDggJjTfx7DxFKfidHb8",
  "key33": "4nECpjYS7VjnSCSZGahxt78frUxaevCi4ePyD58yQaAi86w3BB6ycHHXgdDC4v5UpfnTDaEBup2vxtMxQc24ds2n",
  "key34": "3nVy9Fky1XqmfT164VePdYuVUmLxtLNcVFTaXcERyGSg3jNS5614jZrj5k5eCD8GfxCWeky1SXqPDomeYJjDwUmb",
  "key35": "2XYfdbiFqUAChX1G6DgpyyM3PMFHPB2mNa94cY2YuMgpbdXXTDqPrKYpiwjfTViv5TNo4kXuxTfWiZPH7yggiLYm",
  "key36": "5j8X1BVYwfTJT5DtE8j2JKRAT33bDMcJW8qVL5Bi9s8eqStDWR8HnB8UKUFEEgdQ8rhqz2sTgGKtgwbTb9x4qJAH",
  "key37": "5wQ4BCMDtJf9ts3VZ7QcMLb4qAwLDfEKN5SfdK22m2acpGNr8NCCq8SUdW6yw7W1y8RsbCSpVZiXvboxKfdwH99B",
  "key38": "2xgaERvMSMNwWUMSk4hFDWcnD1Y6Lm32nRkzjs4ZLATPfhjp6K3yp98aRvc1dVRnQ2MG4KrnR3udDufsJ65vhVNW",
  "key39": "3s9U53CphxR64JNRJ8LH229d23Rok44Auw55aiHcrxRakdmtV8Qo7hVg7JfMX9KaKi2yBr8Ay4HRVNjuCivdaL6X",
  "key40": "3LiCp99A7FtsUPMLEazTrDitDTL2UY7Ep8U8wqLHGngKGwgTxiLNPvG7FvXhdu26df6swK1dPEjRJC8L8ussqP67",
  "key41": "5JF2ZSXwZUkNu1d4VHAwviVaeLGtkChmbHErxPTtZCXwwvfYVa7eARXYHq3ihirAni3mQsSqBZzSeHoWhxKGRjxH",
  "key42": "Vm1Meg5xMCQA3FPWQo57rRvz2BCLZULkXkFqvb9U3Rx6S6MgoaUF2nH3W5ZHAwuq4Bp2R6gPBkooiofPPNDCGSx",
  "key43": "3ixVh9Nc9qVgJ6UcF1yJH1jCDFCKmdnTTznkL4wr4RycWEX2C4d2VWFp3NLQKs1L7i7szsY5Q2sTsp6zwLu4FDGh",
  "key44": "5onR3qtFnER8dC23M9LoPs8vyfaMoyrwuxBDQ2pHEQpvaNHLrBtRiVBy6qENgMJjKH9DmihQ2xciY8wtAg6xTjX",
  "key45": "4Un8Tzicpba1V3i6VLAHAdQkSNazQxpwWC1XZZs6XNnyjUbaxLYj3byDfEaMg7WUkjhw2Q1VqTQi857ZxBdzhQnL"
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
