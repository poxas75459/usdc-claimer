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
    "4JNvQCWRxePxJxza9U81S8D7D3L77vQa5zWB6uUnV7PvJn19dHWwpcisPVqHoDvMPYP6Zbnz9YhLVSo3g2pMbT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zy7i3KGPCmJ3USnBhbRhNWV4XuWfKwpYjvGbw33JmCM4cTL3M5EWKXietswX36CarYisWmb79FzCoMNEZd3n6aP",
  "key1": "223GbGQPf6TPGzxHz2zqGUrziUtWE1L7SSwT9Wz1SpwUKGYhjj9ecvhK9tv7YM88u3TTxVEWy5VdmEeWFjrkFnKx",
  "key2": "p1W2nXjHu3LY2s5tVjt2EE6oETxnofr2ZUzrSrjo9kzzVLaGv1KpARphB9hN2xu2CKH9CdfSqBEz9dg1zmbfrqo",
  "key3": "4xKkMV5QRyvYpcVm5gkGcMnrVZsxqawevPZVnKtwuxhCxDvGV8wC2dh3JajrgT9vbCtrpA5f5Y349sbExjghwNdA",
  "key4": "4NzF6mz36Q6LGwZvi1g1Q1KTS3nVHuPZBbShKybfpjzvhA1SpfJikxnZvRq8kZxj3gFM3tXoa7iNX87ScaANA7M8",
  "key5": "39hSNed5mMvP66nhVaD4Z7YtbkJcsaWfue1WVpYGBMBvZZmaEb4rfC6ACgSZxo8pHU8BGo5nr2x1GAaiNiTcUifX",
  "key6": "5LA9YetiitM1iKM7LoPTmpgB7NxFjmfZo6hs5uiMFRKAoBnJDDa7uq5AYxvmjrdAxopXzLu6Ryanvtg2GhbyME6h",
  "key7": "2GcmjpoyXW9cmtXgwsoTC9FGQGKK13eGATTTg5TDcWVZxZqWRoHm25f5j4LeFNov8G2x8v6y3CPFY8Phu61jYfWk",
  "key8": "2AUKBh9CHhzJ4QvS7jHYA85AHxan8HNZvBoKdXFrR1NUfms3T6KKb5uvDVfEU388KF4JG3V39mi2jidimgiesPbt",
  "key9": "2EvhGtkMdY9njH6i5wi1yYaPXA9m5RcViuuPVgza5Z42shawAgegk4LwD5gXbe37ozUDDerpiDuPeLoQWFyZpGr2",
  "key10": "4H6k9k4FMqLoF1BE2Fg9vCZ1H5uGcCoJpVHFg6tbztDjxmSomtZWsmWRMMe5tt5R6mLfQ8rdMkKiFLnJjinkXwBF",
  "key11": "ozZNWufQJw5FecA5bEmfDKpjhkNtzKoxQQW9r7ebkhZJhNtRfAPtfRuVZgqyRz8TpTcGqptm47NtWcUnbC2DGZ1",
  "key12": "3djUaCrGMFkqJX4fuz9BvqMr9sCpNKcsrnKZqATko3asejZcNuRDmZQDqanY8uV4dyH12xZ7UTUGMtHTPcP5q78w",
  "key13": "2q7pjm9bdqVNhqAviPCqqZdCgAsRtvqcexsZZkrzJhSKQRXu6YreZKRacUSybJ9bCAZKrVME1BJokSF5qH39TrjW",
  "key14": "45oiuUvAciQcsbf7ymG72xoeEKAhwQGu3SS2tXH9UuQp32T3peercnZ2qwmT9okqqk5ZFR9pbEZNKFrmanYRE5nA",
  "key15": "5Ks8Y4rSAUz5nLxva8YRmteEig6gaveBLopyfGZsbMVBfDN7jnip8WD6kggvLVYgMSTfs57kn3hofmx3h8pk1hXf",
  "key16": "NA7YRatR1ch5BmCJ6i8SjjmVys19u2nADRw46e4rNcYwZBAdziTX2CJ7pqh4fuY6FH53hpNzENjuxwrXW5UdGMv",
  "key17": "2nwnUp5ewi9DB1Js49HHhwrx9XqTwZLTzN7am7TtTgbCZnMSA5y4Nkmb87Q9kFkthUApN958uwEoPqztaweNBFDf",
  "key18": "FHucAs9CJT6SRX5ZuizuCRNBbRcP7eYfUJTWnNEYm7PRssmsKU3TnLMJczMdSWNVW3MwZaXVwHkX9rcsHNt66wK",
  "key19": "3EekghD9yA4Yc6ERGYFfkNfVdaRZPvvgP7CdxHY7iLWkQXBevLt4HaP5HWmQ18yBp4RTeomMtDXa1SXvCBkMC8s7",
  "key20": "22s3A4fvxKzB4mFz8qjjxTGFTMwgJGrBEP9Uv1mTQmRKZEaT2RfasxyRQJwT44jbqAvjHxWddxaQXELdctCYDSpz",
  "key21": "4oYkWGUyy6UviBwpG4F6HtUbmPQCx19ihMHsPSrk12tHB4iXGjD2SxXbhLjgzHT5BDy2B1bz1EfsYKVSxmJZv7rH",
  "key22": "3PRxGGCYEe68D8ALGShgyg7VDZkDPfBZ819N9KCJv9jzSD1a3Rqgq26ASypvYHCm9WnLs6LD5vZVfZgY56oewEgi",
  "key23": "2qvrkCtRXpLJ9ATvC27wH4Xp1xoMQR2ewoC2qPBoWbht3eSJ4Ft7xrABPH8Y9xRUryhccGfksgJkm3gqxLB4THfp",
  "key24": "XWw72MZVsdQWAtjKWD9ud3c9ZQnvxCrc6HNThRKYVZ2adHmpFpUyeU5ty98XkddWSTbunNdWXS9jwVDuqmWQurz",
  "key25": "2mbN1LHCWw7yARggka1rPac6Z9wUjPQkQVVpoDTCYbzpF5FRbvBRHtUnTN2qyi44Wbo1rNpEGuk5fUw7kgHftQWy",
  "key26": "4SAFn4y1WbN9n54UZi5EkZYyJtuqb6iHkJnDGZVWXzSvg7XQJwGUrTWbVfXqdJEQ5ducfhFh8ufsDMZnub8ZaVeE",
  "key27": "2g24184a5vqJsxqXgik6go8mEkBt3caWAfVdUUUCgCyDXz6znVMR9xZNr59oDGckDW5NuCHZNoDFsBkNWkSgPmMt",
  "key28": "3APhpniy15topueLvDcZEnjxSwUFiMRJBAyXZXFocQa77kTCK9pTL5mEAZwwoJ51k9VZHMc5AgTe3nzFXiRJqYur",
  "key29": "4gRGpp6snZfyxTv6k2J2BWh1pM7dcYS9HjPZtr4YiRWnuu6o2jTBQ3UEpPoAwrMKSH7CJDhjKP1bngn6hxYRSQis",
  "key30": "5rKBDoSqgSTTaQocQkWNvDPenVdZVMkj2AcXxo5mTnoi6GrksW1jWxEdQMK8D2b8qjLTUvcz5JYTLrGzZVhLicTz",
  "key31": "3bM62qeuVRjwzsBEukN1Mub62oTBfTat2bLdHpmZrBPLrcTYrywWmmEJpRiP4Tr2ERKw8DUahd9w4opz1diq74jw",
  "key32": "3sAM1JgDe3FocMB2CyHTdYZERxcrFtoErBw48Fekux2HtG32DTwoTG9ZPbjpPfHpbHuCB4QGLP4mWhL3Gbz6xpam",
  "key33": "2xTLWWGSShm9Rjn57nnfikEEwwg4KWNA4RWDA41tmy4Q5H3QRGVx3sfv3vC59bimSvWgiuRe5YBXbxLeqQkpbkws"
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
