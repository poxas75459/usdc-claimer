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
    "42PAbh4xnoaNHLMF8NsWp8eCKwhB2TEGveJqZyrP2dxvQLhCsRc4krAg24Z1JEbTKTyFpKzrTPcUb7rUz72owDq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3en9qZEt1m4eYGMcH6tRYUtBUborDzioRXm5nuoJS4zi5mKdrSP8sN7oFjHPKYPvePAsE6mcwCVWuhYTBsrk8WR4",
  "key1": "52gchAuupsrgcPifPa71XF5RBgN9T41MwoMn9WPAKVYXF76JMr7agqjwCzkgphxyWD1atQhSRKSYCDdgAXmshJCm",
  "key2": "5erjzuSHmE7rBPvVzGbt6AgAWXVccR4r7ksLsKxGddWcfJ5DKGTCUHTZyTpcTWgNkL39nBXf23eTG5wSzWJH59mR",
  "key3": "1CBRz5H4UV3BxQ9wMrGmapKpVRZV9RP2kR1h34FVeuaFo7kjEry6FdNS6JdPmQfRcBQkaCFF5bEJAmoFWwppLB1",
  "key4": "zxoy3MNX7mHisj5V6boruUDiBiaTbhPAUNyNmiC2MweuVQSWyUdqUDJbpeFEMF1rtvxvYdap9khTgdaDrfyg1zc",
  "key5": "2nEF41Ws6uAXojoZ8fe6ep4Ug8TAdpQf97pi4P5CGh2hESX4T72tM6krzACj9Byg7wfGHXPE5HWNAiujS99h8KFv",
  "key6": "gEEYR8UAhXJWraqKSHZArQGLuAgMiBxRrwkBdW65ZXz5LTaup5eZybakFtCi6ExoPp3mpDtMfuTup8hgE5xYXLk",
  "key7": "JeyWPH2zCdiXpJadCUKKzvJqTitdEoWghzCKCBmTEXgk3cStMaVnx3ryqYNc6tQZU3k4uvA2ue8SudgEVpo5tLU",
  "key8": "4j3UYtbk13KbGhsakF51a95wKtmW446QZCMKrjRc5PB26yjiP7MdKDLMhpscGcWajiMrtRSkb1SoZTq7wdAMzQz6",
  "key9": "2sxWRfBUonU95JsGZxDs9r4oevAjPavBiNHnvya57jKk5vWqtFTFKrbuSZePKcFVdqRj2Vf945yJKAR9rVL1aM9G",
  "key10": "5e5TKCeDxkJeffhK43qK9RaywxRTD8qRSSqHM1VYxqzm6N2qw72ma18z76sPGYYdLouWkc3K8gVTrXZa7bvMYruE",
  "key11": "3sC1HMA4cXLsN4TykTG6LB4KRo8QnAbp1VNAbzaVk9njaHpJErHwsBfCj6icibrhpaeGvW8BvHoUtLtXWWPU2Y5",
  "key12": "gcP7UDwbuaQBJWEAZ2Yx7QdgFR9gG8CA2VDDxCfKqRPZDJ6QEVkwn3Ups1MxSwjYPCUvEjAbcjvpL2p7o84YKQW",
  "key13": "2QJ7JDYwgb9qtEnSbuh9RC7nsFuA3LFxjumPpNu8j7DAbUSja9P1hBL9FqT5k2N4uygWw2mYbKvJyEXY5MH53AxJ",
  "key14": "2H4FUNV5koMZLLNjXND3rtmfKwCzboKmHG3ds2AtHSCucotQcYBNKj7yYri4wKDLnwvCmXYzz7Fr4tp9EBybvbTu",
  "key15": "2ZDU5RfXdJjXssTnWBnnwNu5YHyXJDNEui9vhi5eaeQLxFKSQu5Ps6J2dLRXR6VBRaZaynPNwVp4DsgQHs86LCUq",
  "key16": "29ru2U7mmTAaGsQ8QHzEFLEYfWwtkuPWHuYZQmmVXRtSV3axXJMMZuvp2HHHzBvSz58x6kovsvFAiyFu9zv3dPUi",
  "key17": "Su2DMCHR9VVWTm2zufz1EAt3enLe2SsMaewSJaKcXDz8wXAzhjY21DfTBHteQgeTUcnKgRKaoHzV8Vf2HZophyH",
  "key18": "3Zhivts2XafamZZwimfPZnDchoVrydqYavENh1PtXfDgcfrk6kkgCdMwryKYUMxSyr2LvvmH1Gz42qD1LS8SS9z5",
  "key19": "ugUrCJyTTvyAC7CvaRU7oaAEogeDL4o9fh6rjqMdV5tATy15S2SeZ8SL6FSy1h22KCLA6QW22A2reJYSKebq38s",
  "key20": "5e6HCsiMw9Ljz6EF37j5N7is35Me6qLr9KTJdyRpqsappZGQDQyY1qXiBXfutAzzVuSanAhP46mRqkNSxVTJHU2w",
  "key21": "498YSMiepx1TVgYb4ji3ZiekbuiVs7fbrEyQndEe8AeYebWCfF5TkXvYfD8SNTcB4TSbsRASajJWXbf7CezpzAXj",
  "key22": "2bQVu9EZJhFXRauZcHT5rMowBzAgE1P74YE1znFjSY6rT2W1BNTqGnYKAkpizF21GvZfkNxxgEPEqNDm7dwpwLXR",
  "key23": "KGWdmvLBWeAHFYh8twV8mft9RffFGMxSAHq5tBBCquVSiCcnP6ME4yFeeewG68iuSvVJkPNYPzUViT9sxvNngvN",
  "key24": "2WNLQV6iToyJmzK4B91v8eaqvtnm5vd7BPy3MBxVPHBYEYkqXZDniVmBRgSFmYKZVgQKpKC1cSLgoX74QebNwy3E",
  "key25": "2r6tLkmBLsCXhYYN41HrVMK8Bjkk5iXtq4kQREsp8mCGtTUgW8pdK8UfSTdTs8P5hcYNDPcoPf3zH7K57yBEmmy4",
  "key26": "4d663naq5mVXJuMgG6fnkH14y7iVfhkJDvhQYspLVsoPoG8NBTLQn46APmYHzrq8wpwHYY6183TKjy2vM1WH899u",
  "key27": "5AkdR36JR9fVAkbKg2uDGZD6ZDWL1cRJGafK5oZqMRCxEEWqjXWXrYrnRxzjaa7qwtTCoQNHzme6A7NajsCqX3Tz",
  "key28": "msJxQj1r1uqZf98KcziAJBDievY9TDZDe5vL2H89Ms71s4mFDf3jsDSauHQBqJ53PjE9VDRoWTwJTS9qTKZTuNL",
  "key29": "2pkLGUHgGREd78HU2BtJDynLq5322eqNJQ399pFb5obiXefvC2aZ4LXUMVW9t4X85whesy91RHEJfskCyKmtDtJJ"
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
