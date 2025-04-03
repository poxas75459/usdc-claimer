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
    "4r6Hwh4eP2XzTF6vr3aXeSAqVCoQSwNtcGa6qzJrPuVGVUXMMWt2xeQn9QT6UAjz4Njc6A5emi75N69xNZZc1MvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65JjrjpZihkXqXN898wdjurkEnXExaX6sDFtdghBQofhkbk5MnGrvEEFczLnkC5gixtAm6nhyZrU8WhAQHeU2E9n",
  "key1": "4FRQ6ivSt1GB5V7WqKWHeW1cJa5MvjBd9zpLQ5WhjKg8utCqEL2jkpVFmZmUkmtCtLHS4pu1J9UbwmgwHW6228er",
  "key2": "5E35XNMLbtSQBh1TGdFZ1XckNz39TQnkgdycLJtqzWQqLQqAr18TSgJ4qYfTxi6ifcMp4xBGryxTtQpgMNYF8jBp",
  "key3": "1254yt8V8coGzmN2dLjURq46CLvFHPkTtdr4BB86wS3z1KSZ1dmEeD986MUWvD5yFRTnVCxPwPkgPkizf9gUYaSo",
  "key4": "2Roy3ayiCtJQuMKn4xLu5wuUj6iszPzfPUGpviSF61QqEi5Dn7aaYuyBApp8gfndinyjwSF7rfpsBgF4hxhQKh5R",
  "key5": "W1z39FZxWrTkti3zjsR9WFHpp4dRrupV4Gy1WF4AyDmBy3g5qvReP1DMa1YdsucnubsnNuFjf6YDU5PBPeaTFEs",
  "key6": "vdqzrxFPPqX5ANDL17mz6f4vSW5dsgKQ6Zb6BtysjP9XmoQfWUuwPT5LpDKeNwK7zPw7y7GC7Z1F14jRTB1iVKr",
  "key7": "5D7cU8PYp2D5US1Ek2iWiMz15etLTWA4uY9FhdWMd8vNj9JDZYqDomuWoPR9p7v34Jxehycjq1s3dHob6S1dE5s5",
  "key8": "2XeiSqKneCpNcENxRpky3nZ98vdQKXHRHbPT4NsAtR7fXW6KcXsy1dvmSEgy1ve91SPRyHUt4KruqUXPAkwmgRxF",
  "key9": "tqvoBUVjCn8AmdJdRm1aKbw6RU6LUqXuCWcydCfRJSUJjrfc5u4SgPi8Z7oUdJZSLfVJZbb4fPsyAT2TsUxsnpN",
  "key10": "4eS6NnPLTgdJ5z5rWYbuDHsKv1Lq3Qa8BGCPc2aao7n3FZn3hSqpKTVFvtcE9ATSbR1ZcVodknYeDPxpMYTU8SUN",
  "key11": "2r2Mw367xrxy9SJoBY6sv3kYdXxhTsuaWrNvZzt44DaF1tH6pAGFNerSAjPRFpb2rBzsUMnSrW4kQ6WazVHxHfov",
  "key12": "469bhCr7ZDf75M6kdaZ4ie89NraPYEx87r2CrnZNjjjo5kmfMs3nVsP78KQ4tnVwWkskGSLqA1A1kVnkqFh5FDuA",
  "key13": "4tdpbUwjYbZfCuPsHxj6QcVFRiBG3eBK67cVhsWyZB11AgwkB3yc4Z6oiaipvFvVL1GUikY6XRBQsAwMheaiHQgs",
  "key14": "as4QA9EzNA29STwZ6SW7mYn3BcwL9BAjwweAFDT67RJbzUd9Y7SGt77TXLcAk51j9reF6hAim59b47HVyrcgsxY",
  "key15": "5zMqaEUffxLaKXrREkBrcyeZyHn91bZMvsBwGB3XhNHteXXfRpgigo8tNx4ceRQh59xADVvzf4F84H1c2faZn8my",
  "key16": "3Zc4ZqToVBnCkbTbzQZBqN5fkpeJwiFQbALcGLXxxt6rYs6UEuuxRPoWLRZw7Z5W5P2B3ofYLFykkgnZZVATo1BS",
  "key17": "2oHu5RW3vrU7X1u3EdP2kJyTeMdPWDM6hkbtWDEJxsRoDHaWJexiVfufZ6aix8QCdHqKUxaLUPRdi7YF8E5HmUt4",
  "key18": "5q8wbMTJ5mr4pU2sSh9NJpXdCzaatWbe88uSqLDjy1ZAdhb94SxC8Ztgu2voK8p1LCqXyizbgZikamR4Swx5dVrV",
  "key19": "4G7ZbVF18SJd9FcUkkqX3LdAKEpUcbcNYDLrzsDBW6B8XceGUiqBQCnJyUvDkVExgCNDWJ3ENuGXMWBuZnqzXk51",
  "key20": "4sqcoB1KnNmByn3apVh8R4XwjbVF75HYHasw1hfkdqyU6mdtPw5FQpPZJA7YUjy3oUkrhj47trrEbhPwRroSqao9",
  "key21": "3uXpEMw6THXtwmCAPDX3Gcd5mb38VynY2RYEdmZJEUUHuTsXtYqSBavJaqhem1MnSphw7e7dnzdMZ6UuXGJMN1EG",
  "key22": "4c6xn9N2sJcca8TiJR7Kv8LMjBMq9vVRHA9BBX5CsNxVM6RoaYYtYxjvYE7YtfqHeeJQhEEMaeBrkUEtYjK18jvf",
  "key23": "4LuMhptodvuP2MHspmf3DS5mtxfgmabtBvDmsYpDEnX9AqJ3kjvqpMDJ8zN8NcssXq4fngXdMEHiMqMvfsAia1u1",
  "key24": "4oC6nA6LcZaSqDdBgY5FE8JsAadw35tNkLb6kr5xafPG75w1eTL1L4NuDou9Wv7N5vfAFYBEzawyQyqzNSqokBG2",
  "key25": "K7abS65fVFL2ST9Cd4iz8RqoJsWHiEy8bU2Sayi3wC1MZ5mWkhCaVpRHDxG5nmaAsqXgCFqTC9NVsbLeqrbtvPi",
  "key26": "3eagfafREXmDoTg3i68gbKVt1XfGY21MNGXK4yBy9694huC8RsFqTFPqBTDHDbLWFngobpRZ7ReWYg6eerJ9ZANm",
  "key27": "3mJhnbH1HYanNBU1pBwVsV89nKgRfJuQVSTjWVyz2gGWSBXoteVgPrZ3ZehCQyGK9S1Dqp287yoJTM95qaNoqY6z",
  "key28": "66HyQUdDuZQe4M1KdU3hfDcrjJtrr2kuJKzN49hHsLSho753dbTC2YbkPNjKtpPQmLfx4UQ1ti3nXTozjquRD5Wb",
  "key29": "345Mpx2vbJdNYwZtq4ZPpmr52sbabdTvcUxo7Ust4c1ghfhwKHD8Yd81XSBKtTpjcjZrhPWQHbMZjzfALnMcQ2Cg",
  "key30": "4X7gxVBJfTsMs7nWPQ4jZSeemtonuFpkkx8XWtc941bVBjoHygFuiN3udbu6Be7YzWMT8mswg9hRVPUaimmSDcUf",
  "key31": "5zekj5f7As9LuzUCvkcwaNuZamA3pgkg9adPLgerthUjf3Zhv4odmPXRZNu1zcKWMhmXuZahkBnfySiQcP82kLDj",
  "key32": "328bF7am7vdsnaE6eEYEHxBt9rzC3meMScMaKQC8rQ1HSE2wkpEzNgqk45quVam6RjbWrpFppUwmVq2YyQg22f6Z",
  "key33": "4q367byehow348Sf7vgXFKjks7paKDLfeLxzqSownbP3wbUciBcz1mAXP8uJckNyGuVTQKhR9mBvgLKAukNzTdxS",
  "key34": "533haHHZL8MvfKnL2mYhk1udRf5TWHoWmMvStwh63iBXAHGH6qtit1Bfg5P9K1oDdeR5MKD51FSRGQG99f4xF5wf",
  "key35": "2DgeGqWPsoEEtjFMp8nBWyRkpwqU3Dj24kraXz9a2jtcbMbUjx7MWj8dtPP5qHkDSKsAUwEeR6kt4s8VQfygf21L",
  "key36": "5FHR8ac7qVuLgdQPBG3GMN81FBxxZkWMeBRH6LBmZVRghYRcyqnL9goTMZ5fE5EiEjSKtmi2SwAD9EyWSWEBhg8c",
  "key37": "3xJrDirznAbZFX3Je3fKErBeCtf8VrifL6fGNydNXUMzMx6g1LFPfqE5GXvrs1xJgm8DWVTQc4PbKgjRLoWbPkrd",
  "key38": "9nGxHQSLF3e3WiZphtfeLGEYEcvkWnz3Uk6Qbpc14BpvWLfEsrLt2xRvJes8gCcGNn2LTvGvE1m1auNxdXV5J3K",
  "key39": "2XHgQatXurvjWevzsHFA2yqcZv8xkSAgtrZP9z9S8z7ifAuJ7EUGxqDLZbKni96BAjhSa81Mox1zR7oAcTUutpx3",
  "key40": "ZihKZ626Sm3Gdsheb3NNexR1NhjDB5SCAi2a6UR8WMCPBVyLGP4myhGhBB7kH3DSXGK3RkFyJi4qievPhaCaNc5",
  "key41": "366gmKi4qN1qzQmbEDMT1LZYJuSpqPkYuvqe77pHnAb6fhc6rGLQM7dzL46FMXtNVv9wScEfjjA9bQDs7LLQEEgF",
  "key42": "3TPiCtCnLmqxiNREihrFa1VrBTqXhz1idTPrp4qXG2F6z5syX5PusEgCBHDoptLkWmDNhkUznfWJRVEFnnfGn4Rw",
  "key43": "4V8DpRJP1Z7CAafCVmfmUj2zQpNyiHp8uKikorjAfUmV3Vgy8uuLahtvx15q2XNCX6fPB7csHZ5XhD2ki9i4xQPH"
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
