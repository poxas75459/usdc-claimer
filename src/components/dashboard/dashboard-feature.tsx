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
    "4yN9H4UWm3sFmxwsgkmdaAMqZM3eyxkzpm1gt3GVA4KsUSkocAm4j9wFArpn6PTSdW4JvhHCEx1pkujnvpwPmNpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e2QQ9wwE8FbwxiEMmJgVyHwvHAowUQ5CX4hGUe1HrgaXKvnyfJ2r2NMXuye1CT81NHWqbQSmU1UwBhP3fmZHrQz",
  "key1": "4pLTsp5sH165qpp2xmKiEZfoQMgim3escj1t9Ey5MdLE9qaxrpCH5iEUpaDVD62iAQ7mT1B71qWtjiqkAyAUf6xZ",
  "key2": "2qLatdB2j7q1ky9h6SiHZKs7yiALpsVDaVoyemBFL9sjFGTrXw4RYZchQHMF3NLUfDFwFadiEZ1A9XpLsyn8ANm8",
  "key3": "3oaUTdfTavextuE6zLsvofCw85zjaWWW99hVbNWo7GHdSNdVrViLpQccv12u8zsAPQrahm9LSnb3DmGzKnFHv5AU",
  "key4": "2PTV5jMCkZ8hJN2WrptE4hHxnfEnpL4WBuX4nZQLuuM3kWJcmFByeLrw9pJQG1iCSpbZrDfgT7N1B5aGqBnV9kMu",
  "key5": "3nCj7UHwMr9jm8Pdq6HatfiyGuHtTiPTtcScCgg7R2w8epU1L2wKoRY9Jn2DEE335At8fbxwQt7BQyJcCBqsxQ1e",
  "key6": "2aBw9izMmAtVtk4qPhXQFNpnZek8ZqzGMENwiWYKrdYfrK65puLaVtfKYNARN8Shjb2sBggFaPAGz5X8pe1vFj9W",
  "key7": "2xHWFXzNi7mrtbiofetrjYiYdtcUsZFdCnGtNr8ZWr748eqFaDVMkoWLyz17JnqFhAu2JLYhNs1tzCeepxBeAtoP",
  "key8": "3d5jaazQD688i2rG5XQxhu4x33JberDi5fWxkCkjL1NAermPwq5sYbRQhGqhx3mxjeQ2fJrKCsNF3aKdW7UuJwdZ",
  "key9": "4SAjsSEFYwbvrSTZLwcVAgH6KiV1Pu3fijqMmGFEyjGZDzqwmW7AcqJy8AYZopd8MQnwJqzgUTfyXeSnhXBjye2q",
  "key10": "rtoHXi9iJva3AQ7y2fZ3xNsdKUrTfYEMXwognbPhpkonUnRUS45eHsD2eVBA5gxGRK3PtJ1MSWa39k2BSzVbCqu",
  "key11": "3qLtae33auJEMp6dGBjYq7eYmMGwarjVJyMVdQPEPMm1JvWZWUsSHKtdWaN1AySVGV2d5AyaHXh3wsJ1JDZP2RVa",
  "key12": "2Snjp5hxHpkddjS5SusPSZxmC8HwLmkpo1SrebxaxBJoqQ5CFWcLWzLBKZbdtQKqWJ5cUFupu9qUQxqhs81pHYZa",
  "key13": "4QbGWgFSZGY1zFMCZSSTkq3CLiEKcZdTRhZ9eYU35HUuUUseDPyhQhtoBThU1rnyTR1Sk4dcxqvfpEdaHBJZVJvA",
  "key14": "2GhJRDbVpNgZjhVob6MKy7kAo2PakuV7CLPXzPvvuP9baaReTqNU4JoAfjM5ymQF57s9xSBLa4erxFyf6pTHaum2",
  "key15": "2cwwRuHWQ2S6LxZkhLLhUnmRw5pNLzhVSErSHFmWzEUtB25u5bG4M5BbMkK28z5CEhuNXGVd3fqjrU3m6CCnhkry",
  "key16": "5KUAWicTHGFWxbUk3cVkYEB8EhAU59uT2j8B5JdxYdv1PxGS7wPz1C36S1PTSpCedcx1XjgdVvUJ5EWNpNPBMH5T",
  "key17": "5GDBsVrK97MbMLy2fAnPBzZTc7JBFaXyCMD4CbwS5BgrbuwPJte3Zs2wTgXtv9AKHUT4HwqfzdubRUsVjZKnaWok",
  "key18": "3iFa4aHybxjcpAVCHDZM9VGdUd6EciCrXXQZsRWnQgRjD5pY7RjzEifsDA8hrReoxsrgPA4RJFyyGTcyFZaW1veN",
  "key19": "jmKYQRYT6SogRbETdtvXA2fiw7bBhpTy7PDUNxVdae1UaELtF6LKtyTPms2xMZzyskmCL9tvAz6SV5tAx6YvvGU",
  "key20": "56ZBu5k4mCdfXVKZ6o5StngHhg8JJ6D8o1gHxaavnYnjSFzcr9kCukBvQkav8fFwQrvqGbZXo8ceGPrzcQLTj1Tx",
  "key21": "4RZd7gEUqu9Gyn7XnCxH3Zb4dc9VecFpGqquh3q7zbKhX231t5VCY2oMZoUERpyQLbr1DixUknvkryJWGjaWPsVG",
  "key22": "2CzuE7etAoam99FRrJEEGfpdJT5n5R4MGhUST7FtHMG9a8kP69HuH5KnLMZTsUdGqZngL3DvHBVJ2DyazrpZJrLh",
  "key23": "2ogKrehCqUJuVeULtpajmr8bmjkNRV8jJBFDXYaiG9Hih6tnstjSqN1nvC9b7stMSzjoPxbaBnCVtnrJSNesJk1L",
  "key24": "BiYodoTh4Ht3CFPQmQUNKPizRDRNwHToSQAwheXp1R6mVyLNHDQQ3PVAG1pjnZaFaLFNbpsXS2oXjzFWtpPUe3h",
  "key25": "5SzSGXB24iThNmZJXFeMSN5XC2h2UnCA7DMwWwWmXiFJytvfCTjtsU2EY2Zs6wsNfQkX86kYkrPGkeKMrvKqcUCB",
  "key26": "5yQLMYPEWX1T8MRa66Q3n3KFmmrSr5fUUzo3FB9TRcfSqBaRsVTzRRReR1PY6cjstekyrynThDB1NBUFhurEcvxP",
  "key27": "UWKY8BxB5dauaxPfgsaKQ67V3WrKjNTucxqi54bD4hpPc5LNQsPLcNyBJP7jKcCSkQRJPen3Tj4GkTwTdfrimYG",
  "key28": "5MtYpuumfRuMpaFanf9rv1BBo5A3AsiAFAFMjqPaDqDYX6jpXJHYvLbGrmZD6AUzt8T1cSrKTCMnfwHTZMUm1wNr"
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
