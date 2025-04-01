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
    "4kCJxhBvPsK23AW2E4Ns9vqG52FYaYtzGxZWgucuNh1tnVmVpRG7TSAdsXfaPdDwSmwPENpPZ2du9qQ4xr8LEbcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fvY1QrerU6v7S5EhMdLk2kKFrHywQVpw1Dpt8KMgBRyRz21b9fRTYQW2rCXLXN6D4GUp4Uh4WLZv6B5RsGm9jMG",
  "key1": "2Ce3X15XwFFZTDhk5nUi43Lt1yt35UWzQ1TySv1vk8ScqNDMb7BQeMf6RYFxhVFrkJFZ7W5s3rRyoAnS784TRhbA",
  "key2": "49kiwfH7u1JAaztvrGd4dWtqGAyumXwfsLAoYerRTDrZqchDzR33r9jVcRw8UhiTjAVdd34Z3aEJ8SaipxBtaETx",
  "key3": "3zDK6dTvKhQj4qVCskLQb7THiq54B8g8ZGEKm3BbPZbY19QWqMKU156KMtUDUbH5zg1cyfFPT5XoCffep9MEb8hg",
  "key4": "5TF6Vkfq93D4enKuL4ih6XVXZGyyWCBPizG7jeJaof7JER87j7xpHegFRJvbzHBMn1Vpi4C9FJf5ATSN1oP2JJPu",
  "key5": "261KkxTk3WHRoMXfjRjcYEAMoo7uTjqRpEerjke1Kh1grPdHoXjRQ39eMXwrF52pUqbagbJKRnd6fKMbcbTsewXP",
  "key6": "3V93TxknJdPtm32WrfuXyoszzBhaAMXLcmo2vCJQHoxaKezzmvLht3CqgmDQRsBidktDykxNLgntVB5ZyJVyvwxh",
  "key7": "2JtnyJYhXWMqcTQqjj2yvcnsGHqQVeTuQ6eePuZESdRKDvYLbxcWF1Q1c6yfAC4An4ksmUmfamG2qYiscecv5qEz",
  "key8": "A8KGo5w8RPfbxKuRTkijDTT89XmCGBHdWCcwMiP8wGcyBDMGWq3RXujsZomJpcev9C9zFASBusUZjwGnXSyEzgW",
  "key9": "3b3bgtCLY2Ge7SFVQdEaYdpb8sgU1ACyFx3nrS8zCkkUznKRwtin55dvYB6UE25kuXGpDHfeVH8DohhBUfmaxy5C",
  "key10": "5Xku7dPAr5uAoLZs816SdVmZTeYBZd45NvY3AxSpfj4PA3moPqdnfRdEdkCRrzYSg1QBCeXGyUQmBJkVBeELuBiP",
  "key11": "QFRXWD4cbVru9VNL51sTHVabdmeXh79iuevw19PzpDoqArKuMTpxMiEjkTbBDtAX5FaYe3F1vpEABK4rm5o6psw",
  "key12": "5zUQPKxRohTLpUD8DYtk8MxXNNNXTsgorFebV7uKktzmLLk6wFwXSzs5NgemwsmELdyJMiogpgz8oegTQRdhRG92",
  "key13": "37A4vSDDko719uhdTXjXag7nGL48w94kbhpaJKcJYq3z6vu3dCNbh4k1CoxsbJ97UNYBdarkfUbsRApXmEE6c6z6",
  "key14": "3UANdjnU3nWpivWE7NGwPCN9CNbdEVxhzQsT4SReWeCxDdQ75uPVzNoToRHdRhgtQsvTrPBNzfv1vz875fhe37X3",
  "key15": "5bGxsWvqzehgeM1VWh3DmTCizdigUcK2rksA1qErVkfr6vSp1DVWmHxoKn1je6GQuXpQCuLbaZ3nu8Xk32nqkaBe",
  "key16": "5rAk1o7oz4686PzbQZZzKtLwfa53H7hcdgNB2398ph57cRDU6zMeiHWusky4yQMR3DSABGjSS1QZc65FQSFfjPW9",
  "key17": "2rmsBa8xQdPvUYnmxkCMaJNwsLo14XC5V6RQ2TwWStVu2F4VrdyeLzNZQnZpn3RM6vJA3rjfHdDdnpTb24Qq8uBf",
  "key18": "4wm56NPiQnyovtvRjcPdZSMY9nuTtxayCA9Rq8v55WKoGWKFx33S4n59E13z9ZRkEhcvzacmofUyu4hvJTLbBAQi",
  "key19": "3Jd5RZ2CsVF1EuUsaDLabDDKtTJaPBPFMRGfobZY3HxmejiUR1diSn4LCiTGctkF4TzV4KUWGCuqyBBRXfrt8eqZ",
  "key20": "dqXiX7JA1fEDqiGQjXCCm8EeJtsAXJobisbVqhwiYnQRkMA8HNyN6r7HxzPXpNcGecZ6kydFAAhN8TY4qi6aRmt",
  "key21": "334XRUPqtVz7Bp2tYtfSoLLkUstq1XtkusDAdGxTgvRq2zkd5J5K8MqB5eb9XVvPpNUr4QfzSnuc6HY6P32XntU9",
  "key22": "5TRXaVMB5rQgMZoBKcK3EqpkzbFtGzPnuzjy5Kac2vHMLFNkQY7ZffnSuKD9eT3KEG3EYuVjPfUMaMn686RV6B4w",
  "key23": "58QnJd4ce2dJ8so7S5MrsK8FGH5WpzzgdCvT78q62cUDWhqM5YA3Up5k88ACSRE2P46zCv1Ktfp3PjXpkskHtgTx",
  "key24": "5yj8hqW5jdrqTxmx74tuGh9m4wvLKrZKcSF1UqvxuoN45gfW7ZddNc2SEefibANCCdniBagy5uPw98JVYMbNdRyc",
  "key25": "2T9XKdy5a7DMokQTfieiPcaQofrojtJcfkpR1mpufo4DpCe2pVYibGJYudYcz1dwdeXGn99oWsVVBqgz4JPZ1p6j",
  "key26": "4gNRX2qtJhP54X29s9kKog3i4uruEE6Rsv91c5KWijD1Ns9rK719PtANBbEsEViMSM7tgtUPTSrizG5GZFAkjLU4",
  "key27": "43KK8wqrG51zzcnJ4aSAitwakZiL3TjMJq7pMQPoPLxTuVVdKQmW8BBYRYRtGa5PnRDrnvfGEtwDViS2P5B9769u",
  "key28": "4KBHJu92KDikwTgUrohadcaenBLuU1CYGmWdZ7FVPGcT4pXALR92RcekihZDVJQ7gdX3YJfneW21Q29DjRg64yvy",
  "key29": "3Uzjkz4FnmpNAwnr9p37URUMDb4wJkA8XeBYmLFbExeeAFnui58qTy5byyQDDWTTrwxve3zyUauXm1Q4jX5GMcAw",
  "key30": "5UGyVcvZKTJ9ZszYw77tp3EzwohvkvfMFPsCUru5SaHtosCAb1FvePQHSyeAsqSpdVWn4DFLNNNpKZnrzqwxb9sC",
  "key31": "3hYaYLz6tBvPmT7gb3uTAgU27fEfgRE4uxzVn71uK2Xw8S5TB5ctndBpX2tKmUhmpApDUNwkesaf8DgnT7Lx2yyn"
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
