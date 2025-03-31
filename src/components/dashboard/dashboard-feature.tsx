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
    "2oEGuxJrTh2AFgwRKR7DR7aMNLzZTjKXKKvK28kVPtbQjioizfDb9NgrmqMyXr3EhfsWaAD5y9hyiBoSSMg5x25s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45g9qfDYEeVPLvkZK8YTeXcQ5h9mCDWexzhMR6kETXUncFRzypY86j2Yo7Ugw4agkcdop3TH2tvdSkhzBBVfNDW9",
  "key1": "Dudq2VbDvev5TBtwphvbeK8qKWid2oEhwVZnATngdB9WSNWytPWc2b44DcH2pUG3eMgbRb1Ydo2uKkjt2Fb9vrr",
  "key2": "3TxNybtHWj9NtBu2PKrQG6J2Hne9g1QiaKnD2dguE2vo37iF2duLjPsZzMF43yin4c9j1ntLBpct5bLYVmCQpDob",
  "key3": "51Rt7KoSqCMq7L2VHxhuxdzFqXg9oQMYXPnmzfNg54tKRL2F4LbZUKgCN2o3xs9ED5x9ckRj9MvRQ1jtmGYU5nKS",
  "key4": "34AMX1yGjnWu41MxAvm7Jj821RLxwWvR1tyZ8bXV85SVsDuoYpiMvP4Nv2pNHFsi42GxKhs2q96R4hXzUiijbmEf",
  "key5": "4kLtgK5Mr9NYW6GQpX1tj4sSUMzoLBY6ZaP4hsimZQpgwhJadxDW4q2TTJRne2u4aW9zQqxmgPXWrvWdzVqAywE5",
  "key6": "28Ky2AKJYgtUjTjEdMyXMhdrVhxUL3R5ZPdwPR9GWADDAVcDw9wpKk4wX9cyNdszmW2tVcCUYRCq4Vc4nmed8Dgp",
  "key7": "BscC6siQWya6zy7wrFVDbBiwYb6E3hdgTj73FTUXx9MDLamo6YuwvQ5YNuxodv8SGi1Ufc1ur8xjNFj47PBUFZk",
  "key8": "45jzkeQDqX8Tz1z2AyjAvD2sBBeNJdGgSBtd3KSU24TpGnecjVTzp4ZYoNAwDioHpNcnRp6BTdX79xzvvJpVqW7M",
  "key9": "WYm6h2VJeb9bCr6WNiYtTESdVzqcW42vV6GrJVRXRuN3wmZZe1LbxbvYw24bG8F9od2y27nXsNA24Cn5gfX8bLL",
  "key10": "2pyNV6J9vSES7c5aUC9F1zqJpEBLFAQuwq14ZyqbXRfvVcc3VuegExxmufSzBmBCC7GXgvV4z6CfxBvU5uQ36cR3",
  "key11": "2VAWQrfv8PpyBPbRF6Ebm6k81LzkFKrqnZJLa16H4FNRZf8AWfjnViorGyc9qj9DtVaf6mTVaxYuaxTkMywguckr",
  "key12": "WPRDXCEwPa4YYwdwhu9XstjCCmowzUiW5n3W7yLADBDt1nXkF46BohdWqnDREeXs84UFNPUjnB6o61g5m1B8f1j",
  "key13": "2SucnkvGDvRU3FgpzF6XCLczpTQmr9KRUvWczuzXnWeYDTNMZyhfKfE2BbYkaxFUreizoorkQVThAWEF7vTnVq7c",
  "key14": "4MueqDfVwKF7tLJVJnewDfE5TK19ZMaJxzu1x2Danyv2zRikfBFZb8E37Ahzh5Puz49fBa1BrswXstbhCxVh7rwy",
  "key15": "48RZMm9rzyWAenoJfn5Ljmpb9FnWpvhnbNUKzXSWwWvDFPcsfmiPDHdXKrJ6jZV4fHmbHJuS7XvXmaBFyvMeqi44",
  "key16": "4uNgPvozRVBjCpPKiGeSesweHYh7LcYWFYWiFRauKr3A7TFRrJajsGtLKYEmacmjfCc8MtACfYrrivBPzTe4HruF",
  "key17": "2hK3j8zjPKUeWt3J6Z7rGLZXv8gDNFQp2fv1oEC1geycUwkd8tGwie6dtcXq18JrKWFcoDFXXB5ZUk528b1HWxZh",
  "key18": "Mt2jkSZe7oihW28kZagM2RSobAEC925BF4UMK3nZmrSHSfyY3QKN2yhwHZbCoyLnPv2BJ9vJts8LEHYhB1GTZ2o",
  "key19": "63W87pEzDtsnXLzYrkYocXdkUzLwVLGWWDi6AxfzUtKKNvooGegUxQqtsy1fTSi9yCyo3SNY86t1VNpZnK5nDT8e",
  "key20": "5dfdadKUvodD1S3F6f8ZyHRpz6r6vXUWCy19stFVeyu6Zo5yZsGmvo39jGvtE4Zh6JVCnAypiHWZ3JB31t991DHJ",
  "key21": "4JhxDybmFeJSMBYvbyPwGAakuR9mwzzb57j7AdDeDfxtBbjVtL5Ub7RSdrYet1JA5y5UbrLHtp8nBqek4GdqZGxP",
  "key22": "3SUUUhpXmoM7MLPMJ223HCpHrgT24khaCDW9ch3wfEfvLEmsoyPPNCYYw6LnpJN3kbNvYSTEiVcar8UEJrKpAduH",
  "key23": "3GabkAG6276wFceYLyzbDZraQezpGR8CbVz8Fp1q7HpihMuWJ5X6hRwMKRot4fmv9KURJ6AhF5Ny8ZEDKigM8uSX",
  "key24": "2XUDbgMp2ArxMoi6riYgJb9Emqr4YPXBbnL4JeBrbnai334LankREyp2vJLmg9y29mZ6DsXivEz683xoK5cspkFH",
  "key25": "2UQUSmKhpGSXnigXnQcD9D5fzxh759WrQ1zwaLqZgWTZjcgXyqcnjmKZQBSeh3EciGcK4kVpTFwpQVyfNbBKsY7P",
  "key26": "6q6ziSu5H4HNM6dMabDV4Be9sQ763RoqtwVLtuY1FoHkQTdfUwP2nCU87ZwTuFuVYXiYuQBnHMQn39T25AxZGaR",
  "key27": "3Qt5r8pPB6JvbjWX5FkrwudhF7jgCeu9YavuJPPegDhCNju2fASoDMNRTRuajxPAhBPycgRHeu5K1hJQGn1SNuYK",
  "key28": "XTtPZ3f8hpq3aZZS17qEGv1tDiw8tL14bR9cfpoayoZif5Y3d9zBTk7Ti6PaeuHyARGaii9ULUveuAEMqD4xehk",
  "key29": "5KxSrY72ZfoQK9ZKVa5pkY3FLyGabbXQZESf9HWAJCS8VVg8gdoStnYdKJDTgoijiEDcNVz4ErxNNX15B48ncgFF",
  "key30": "3FQUQGJJBYbMzdmFEHtAUuhSDHRodmT7nJYUdxAZtoNYytEafMfLS1zNVgMjsgXeTDUzaiXVr4RQ3yY8uGQjv7Nu",
  "key31": "51nceoc1rAwsCwCHWxbvCBGenyA6wZjJqiA5zPjp1aSCi46My2zKo5A4iR4GkNzph6FC3SBFeyYuMAmSQ2hcFrES"
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
