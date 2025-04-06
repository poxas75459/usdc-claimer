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
    "5twwP6TNvcBFxi7EXXpgtQ6zGyYnjgeF9T1kk83vCWQexuR46ux2q8TvcWEzEb2rut5ySTaGc87RSBdjR2DtTGsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dVd11ZjNQEVWVpgEP286DtmnkLcVfJwQWkZa9G6bhExYZTUsXqVDiScxCUUKMSp17J6ykwt2FpPt3KKKsVF6U8p",
  "key1": "55BDXTjCFABM1BwHhsvG8XwwhWkzMWrXzaLRQJzs4NBq4TiZQps891xjsWKqAqtqR2jsd7iDt5xi9DdPiEknFVFd",
  "key2": "2Z9eJ3bTJdhmw1nzFipu5tK2AESKCrhKrWM1vRmyGhLVG64hXgNQNuirPBCarH12qfYy7KW9d67BUsGFyhqaaPPF",
  "key3": "4mzUpJiksaAhANihzyjhkWgujFPPpH8yVvsRMLCJotKc7xsXGcdaMhzGVxFBmKTYAQFESxKYwCKMRa6prRM7L6vt",
  "key4": "2DZiFUJTb1c4jDkaESu35PoBKb6hd2qYpnhgQgj6tVpjHj4aRjjaKyx1cwxnDqQDbbmerABav9KrgoG5L8UEgF51",
  "key5": "578hNytvbBAYHVKxkjEmUAdEP8Aw4bpcEepBPDWV8yGCfXZHM7NZWmBexxY6vwjEHXH4xubYq95TGRsZ9hBwxoDS",
  "key6": "4FJaVbemkx8Kez49wnD2e6warwy2bWBu9uP7w14wgJ4njczXbTwzsWg9WUVyjv2ukAjf186VBTaTx8omVED3G23Q",
  "key7": "5TENGt2KiB8C2PximheXqe35aczy8wBh1ABxcT7BdtiGoZbpUyT4huCY6ujXm27V9NDMbkPt6KiNy46CjgyXyyjk",
  "key8": "3iCAv6uYg9iJXEKoRG578qjfvSmksGnheq9AZ3sbXbRRfXvJaQFhmj6XtFEEZBvAfBUKQXNGzCcYXy6Y9DRmJwKT",
  "key9": "4D7N4pK2ZvU295Ud4cfHJDdWru6LPuro7vYNU3jprS9nT29AQfZJAKb9c7JgCYuwghR86eF1JiYvRom1yTvuFHHW",
  "key10": "3um7bLP1onDi3BDeXwiWbC2UvnJNxTnfiVtZdJc8U83fS5wzyPHgpvNFztH7UvDrcp8imVqG6rpeKgyU78gWUvHA",
  "key11": "54vC2LcZxXeCxPTuN3o9Re16XV4x3jwGXVshbc8anWKbeGQdhfdtWn6Qk5rLQaueN6vdoRwaLXSXiCnZteUmnoWm",
  "key12": "2fVXUfeJosh7n6CsEchXwrTGqGoBsiUZaXH1edzjU2XwppG3gBSta9iCr6MsLEoryBrhnNHqdCR7gBSo4i1wnwKY",
  "key13": "4bJMMjkXxsQuDKiVZbaJdj2rF35JerhfzPmw9VuJZ7bZn3iUMGbsBqnqWA2gJim1bMgp1MTvH4vDnv7CLQjsxjdm",
  "key14": "5ww7wrrWtVW2a86Cw7HztEkz5Eiwsgg7xfJYMvCsvh3388HwbyYk5JY32JND5QeGeNnBGYUa9i7JtKYn2tYSiWGC",
  "key15": "5iaXWhEpekMDVXzMbNa8UrLiiMb5pK5xvB42MnP5D2dn499soxzQy45Uj9MFc7YyTAbXeVBPe5ftuntDcRWuiFj5",
  "key16": "5rM4rj5aUNip8wZra146DnKt9VpMz5UXPN33vJBHDi7rXZ6mCSknNZGHuEKUNrTQ9jPsQVubRkfQkjGyubonnPXK",
  "key17": "69CQnZyBL8vqzSoXAX6jquHtRy3eKHFnocQbmdnGQ2VD2rRfJyVTy7gBixhjRoYMwNtb3TePocQCpZepsqHAGxx",
  "key18": "59hdXK5Zfvx13PreHWzTqqcJ4XiR8nTCFcRN8cnxSzACYjSAuQwSGZseBnDUaWgNGyrjEhhXNEnez3t7L5GAVsYY",
  "key19": "31sNMjV1L3RBLbLL9Dm7SFdStDbKW3zRjVs577RwPTAovYUCMYPgYaLXY1CzPnjhszrLG3BVZ7Kh5pSHdfaVYLPy",
  "key20": "3TJt8dMPL7HRWucNAUZ44Bi3jn5yrjv7DB1dDBFzouKotzq4KYLqSFLURiF1uauW1V8GFf4e5Y49sYjypqViJmtZ",
  "key21": "2U7Mwk4mx9HJvxB6eHJvrJTbksGeFKH87etaoZcnG7qo2RNYkPdg15EGaZVi4et3FrYqJE5qFDWNRPS2vNhXyMKr",
  "key22": "2YJHsEdQDQCa7gyLtyuhiDKEqEqmFvAgcMQfnvcqToL2YbGqgruyXjnWmfugX1MaNBYHsXkHdVQjbv6K68SC4XJn",
  "key23": "5QB7ezskAqZ7PBBFxukoXusm5xgTVVdNULUu9veQ4NyUtMWt4ThZrhUYHKbsgw1oqeBrDBfdNqqMXKh3MMHCjiGe",
  "key24": "5UiFqQxzG4sBENoLhZnXxKPFT2RaFqLwpHuktikrQx1nU6h5Kjr54xrGdWvKD2fQdfXUXPCgL8xkJYi5vTULenaw",
  "key25": "3RnygcaXyVNqKSVVqoTgEW8j1TLEevxm52VjEHR63pmjRqFMw44RoR6hpraWMU8Jrqnz4ZyEpnVzJqzuCo9znJ7r",
  "key26": "3mhhUd5SWNEaMvqgyYY61ysKc8YMb5w9q7NEVwcveA2tAmN9Ne8AXuEzN4iAhZp8EvRWcJcPy2HYJzuRUQFJZtNJ",
  "key27": "mqcDVfiZYXLjqNHVK4cY7LnW4WdQd7k8ENHksT55sPhLny8EkMSAxDn7sJmuvWdaHRfuVPtSUhLgpoAiKNg8qZz",
  "key28": "3mwUMYnLpt8K1hNgotzo3nVkr2ahrAS2zcU4jE1mYrM1Lm1CNmAM9zb4nHJANnDkQ1uuajVH5QKyMhY6YKWdEsE5",
  "key29": "48aYoU2xkfDUUTJ71tFE1QLJiqnwvRX5zVEh3xWjwVRW1xbJTDW7c4ktf32TFVRabNjzfGSfCxK7gB2iJootjTDA",
  "key30": "4tvDVjBNAsksmFofFENjbQg45ArckMXhP93RMzWGBSnga9zbtSY7y7eJXxmKMh8uiosZ6yTRCWpActozwqyJn31V",
  "key31": "TtKfMxBTKa9QsyCcArWMG21rfkM5XcNDy2KziTm8XvmvrjgSt1uib2kkendjGZdVm8EAHwXHgnHqQEYTzUN6T43",
  "key32": "nKLgZhwq5HwCrgLBfbNDcYCZcGzTqfNoWdhZvb5DiXbxAnvJFCU96vYSgNpn8FkdymVenBtnGNGrG9mpLhntNCe",
  "key33": "5r17HPCKhLnKKFwmJYRcXtZBrdKWsb7gv3quM4cnMhUaruLzoi5isReYFuvjGE7zmKmjFLdbtLG27CFCWs6eRpq1",
  "key34": "4wi1pxJXAiCyJweoCMraPJt9vo7LTQ7QrdbYjawfxaXR3rcLbPxP7xELeSJW2XsXLtStdFmGgx4jyjMgcWUv81ot",
  "key35": "4kHWeFsoEiSpUgXaSxtSVbPSKUo6gSSQNNwu5FVMKai1xQUpRDXXdM4wiabnZQZt5Y9xxyiNVrZTMhQMUxcsJ1LS",
  "key36": "2Xrq8setT1RCgHVZHPwsTtUywAQbA52r5g1oCVBLKjwB4XmfR5aaphiPNjVNhNSuum9UGdRsgvPSnNLiyUXKQBQb",
  "key37": "3Kz3ZZjyhk1eW2EgWA9bPXkkQgupdJAiELmxCBBMrqAVSaLE5x19F82RxRTAJxQGTjy7kaYvfEWmTZwr4oKATjbA",
  "key38": "2rGXYLm1WinhvPXFUrSJtCV9PRQ2hBFhZMuYaoxPPjKxAv57z9P8iU4w6QM4biqjfAHEV6i5No5YDtWG8jzFknq6",
  "key39": "NKZttb5uxhh268gprCmz8DvbK4q1nrRDwf1S6m13btVhNGGosWpm3PHQBTfeS8zYuBMXhCnfdoVseBxVgsLDfae"
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
