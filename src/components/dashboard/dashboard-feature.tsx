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
    "5JBkBuwpDZsYkp8JZgVD7EN7u3R5zo9DtwUxxX9PJEa8ZnhPWGgt4Ds4ub1D2iNKF9XuThubToVszvF53BZiD8BY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sDJx8ysTu7kdAf8amANwrfKKTd9r5GeBifBxAzVvKJT8mpj7TrZ9gfxrRAw3QgYkDF5cAiVFUjzhvdkcWXc7GB7",
  "key1": "3tTCkewce37Fx3iwrfqvycsfC8bmwXnws5vN5QQYdYRio4FXhZnRo4hAHvqHDECdmxiGW4u344R6BXF5LmnB8TUz",
  "key2": "3ZRdyj3ZrN7ijVRtm69B5e1d6yhhRUT5tUA6R6wHGUsYbWXgefYJc4czfAG9Ytg1M48ecTohiNyCxwevwpSk8msq",
  "key3": "5Qp14Q6E1CnoqfzZPC5ghPKXxGUYQAVi4ZhVrYFEUPtAJaMES1a8h72HJi3n74v6HrBRMPAibj4k2J3Ld2UkPxex",
  "key4": "2Ei5SySmNQrYigHpYiw79wBFHKqdY6wrKuZXA6M1R5SWSVkkP5BAVSRxfAiGXqMkocQLpLs9VSCrLJE7fnNwXZD1",
  "key5": "64HhtswAgqjvfGvFEjhisqXz68bfYzpiDKFpW4MJrbMUznNiVa5zJmDRa27LtQgWnpKsryUPQphJmbSaUdVSeV4G",
  "key6": "3cBBGp42JP8d17Mdgj7C7uKZkbTi8Q1hhwyGZFSbFoAJQYxuSj58A4zDirVHuoNHK6dpErqwdHsfadecn9JYUDn4",
  "key7": "5Gpe1vh1des2PTZqAjczW1i6jGoDoHzhPUoK2fA6p5UgmLWAbBiHxd2T7bG5LDQjHa5FrnYnSJ8fy8xDEYTt32C5",
  "key8": "PrCzzpnBmKgsFUNsSVPWvX7v4mdrb67435RVnxG6G3YRJLR9UXH3tk5CC5YEDjRWtet3Z2enkPhk7c1zN31FyXv",
  "key9": "4YFBEGRgqF3b8BsnzvLUApZbPmqM6WGjaPrgdyUdJ7NNiwYhyfHg25tVQWrVMN12GRSSxNyTbdPQvRV4xqFzEypi",
  "key10": "2d1Riqt3bJ13EaFGVGcd3pSMTvjefGPAMbdjZ4D4o6p8wbvuapWDHMebK9sg9VwCoyiVznZVCAoPPcuboL1MQrkm",
  "key11": "3vApbFQ5poD137r7pcBa8qr43wG4QeJEeYbB1XzMUbNvh8bB8LPNZXKruNfM32z13zoCXgLKVgxKQygGaEveLx1a",
  "key12": "5P45VBTfaKYaRqR9RcceAKKvQ6H67KKcjsNEpJW1pgCDXbAdadoSoyGafnJCHxdLEJ6H7JB2AHoFqB7V3vzhsbGL",
  "key13": "5jMuiXEiZrewpmDrBjkYDjtRrADAcU6xY9DHFGwnVMacoeaibxK9pVt5LBmyRGXxNyRR9T7pmKrh5E72kH8CGTQC",
  "key14": "2C5gCcKgdccVyEQaJRdGoHddyHe4F8xwm1uPscrpkve4A3uBsfzw8b5NNtVgBP6CRSnzGGAGVqVjdfLWUqwxMu41",
  "key15": "aMuyvV22HaFkT8sGiMTFu7VvQZNmzgbTwoaTmfrbX36yFnL8vQFpwYNncgoxUM9bFSyu94XJDqBMGTErzMZCgcC",
  "key16": "55yxmCsT8s3RKzkagWLtqGAREJb74WympLoN8LnjeQxQKUyCX3URUv4T1GXpDCVX9tKU2E6qNYVH6VS3VUjkyXbR",
  "key17": "5Vs91fkx2po2YgE5CuLxZEGdLTqcU9GwotdxfSX2hiVSyvJtnfbNSphTv36fctaGiZ4BKzTLTBBAmaVCcoWTMZ6R",
  "key18": "x4ZTFSC5GwCT83WWTpSNaMjWRoyskL1UV2fDzAPDP4T2y4sVxM9Y3qmXHbz2HAhTqjHtGKNbeZUjM5onc4Qbm54",
  "key19": "2pnViTd6Ey6i8T3op1kL51vCpxw4dXdo49bw8r9m1jZVJwjE8TREgUfXpkYjcwbQjA1oVmL9FF3mZan46dV73RgE",
  "key20": "3CbNZYKWNQwR6Z8MVRo9cSJCqVVHBvPSQt1Fko5Ho8vAjD1JJHmSz6BVw1gk3zvcKdDJcMCuSNdCyjXeJni9vJ6Q",
  "key21": "5tWSJ34xqhhRQeMTV6M7CBKdMnQew5ydYq5i8pitfSEuMnwhGEJeMa2JZ4QKw91SN6YJgkaNdXPY1J5W12NTP7MN",
  "key22": "5xWn8s13SsyZ61z98xRcqvCEXLCdx7PTgp4oxu8w9r2LqjtEqshQAvZmgnHXeCrEXxG9RFUkqB2QdztEubCcFVEE",
  "key23": "3khouVC4pZebgPPy4UT3TC9iARE1y5UeenansnEVJWgaN9r5SJeDUgDvojj1qkKxyVTEA4bMk7CouZTGb4Mm5pg1",
  "key24": "2PXjDESsmb82s2PLLu2H6gCJ46RCYY3TFrVdqKpFun3dHE4Pj8ugYt2gYLtWo9XkLjpioSXuWSh1vnu6jr2bpid6",
  "key25": "2vuXuua4hZqpfiWMa3R1KZWRWKLZtupuiVE4L3r8jMW43TunyJY3i5wmjshnj5qzQy9os5DG48Dx1s4m1Fq7iniy",
  "key26": "3Hca1CmWxsnbuDEoM7Ytdpkk6DSmtxGwW3ggMTUxAVDov5RsfjpQ9i8CJ9QGgbRTy13LoTkfUW8LpVU7GRQmtmEk",
  "key27": "5pHjMWXBo3nPByrRdTg4RfE5zFYMcTyNqgzzUX5MjHw1WyQeyWK6ozxHbb7Abb92iH4UuNzJx7HRZJ17hLZTy9Cw",
  "key28": "2iQ7NFU1ZwA2YCpd2okKgmD3V3KHYWwnLHwryZftuVgXrAYdg7wzGrE85M1ZXn4T1JMoCsiWwnnJG7QEC563ScCJ",
  "key29": "4U7GG9jDnLAYoDyAuPSxx9etyuXzSx9H6c7wRWip7kkzfjzVn8ZxgdALrkNf6EEQYcMswULzkK48HS1HbZN2oPch",
  "key30": "45QU4wzK3DvXRSGn2q9QJrac53WNXTjteUF5i57u1dDgRu8unRPfSuXuo6dHbxJapiyGRCvoCSCZTVj6a2bkF8Nc",
  "key31": "561DPc9L3gY69PAfqpmNjUigHhWrp5wRQPBtcWpWoz7zg1ZvF99uC7sJZ29qYtpdr6Amz2gwxiDGTagcCbf3rX2S",
  "key32": "4N1JFtaemnm1Es4TVFr9c7Kf9NuoWYZo1fJqb24rtV5rXeW7s2xNYmHGAALVn1rH7PdXBQJgbb8dxvp1aFuqQVAk",
  "key33": "3otvajdCgSWbCYBVGojQDpGoUWNYxVAELj1aEGD7SrMJnhbhE94CasFgKMaoNAB1jeRD9fGNgnQpH1ZYX5hvATWH",
  "key34": "LDMy8gPdapRigeedFqwomgyfcCkbzjpsaTprP8FoxrR7mKcU2tQFLFsoZRL5Wp6MS6zPAdF9KBz7VgeTz6GQMbz",
  "key35": "5bYcH6CXHSJNsg2u3DsaNhau8igr5kWts1atHtzY8SPa9EXXu2FRFAPeVLQkC9oNg14UqJWonExwPgPi9gMBCgyK",
  "key36": "3bgpaGpYyprVVCW2ZZbwr8Eh54vvahYUUNrmCHb6tHEMoLyseea92WUc8nw9mbwXT7Kino92upfaJGtMBJntrF5B",
  "key37": "4ZzLhen3jw7zXTXLJ4ECTefDcykbZTy7ekQFAucagghL37x96Vs4i26jsSSAB7WD6GV6mCDoZKfregCwujFPkYTt",
  "key38": "2sUnKGtD17afTYL1cyb9Avd2SWsEUfzaooSq335yS8N53MXsCBiJ9W4SDuqrAwqauR7APFrPSUwcfLoFqk5EkVdK",
  "key39": "2SDYE7jZdzkYxu4LGcdZoeuUgPqxFepbko55cfiJ3orWarpkzA5XB6G9aQQr2FK4T6FwzAtka74c4Q1oG41x7rRV",
  "key40": "3B95aeUmvispEUJPJW2mHKUCiWwUfXGYz9DSgUeqgkCVuBHZk6LtWLXJJTrfujLZtrHtSRuDKbbVW9ngjpeZn91s"
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
