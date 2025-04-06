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
    "5DhVckzSAxeSayiLjgEDL6kWJXsxtsnMYkzBPZVHnus76NfGDueaFZGbyeQNsLeni7zxuAnm2SY9pAn46N4MTmPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pBYdG6xrMDJyJZfw9yzTAttStbHr3jqH6NDVGHt9osvhPzmjBv1pZytmb4R1mhGHygcN7oVu6pfaqKg4xBguJSq",
  "key1": "yZqf3oJxb1gqFNrc9JyniRiMJWZPgf12E4EYurRULNESkYVcerM9JYbRj9BCU7eoG3FbZZy2hNQbakdYDcoErWE",
  "key2": "3hjxmYK1wxfUDeKJr6FTcG21zBsVu3847UtKjgHgpUNUkgeEMXN9RR27DeU1P3gr4ZjprU9kwnBjfznKDXRiLGbU",
  "key3": "3YrJYfXXahhDCJp8ARyvcmfH284tF2ChoHEKRSPRz5WW2nP3tAkmyPkxbfUSz81hcLhm4NyYMBhDk9xmBDsLB6Vv",
  "key4": "5gmoZXJudsNVRj9gdnLbbSiYkuWXNWQCS4cVjFpyoZU6XCrJqXgqWCcbveJjwhhEzL9hTwvVyboF86ciiUcQvfjf",
  "key5": "7Aqq31Nd7uLz34SWnamunQ4qigapUugiaRgxQNbYLjaAfr2XwA3hMWGUgDC1H3YVjZRdVHcpL7PvSSTdQL9yGmK",
  "key6": "JSC7utqqoNHS9HUkJe2hAyVq9izcuYEEXtunqNmimKipAGrbu11HdVihYVzcYn4DL3QHxw36fnB9td8WuTHgQyW",
  "key7": "2KNaV1fiUEqA9wqMb4iwk1K7wVfXtNp8uVz4acVpr1gmGEERgYMyNFMnhiP9EiBNKVEvyY3bDBkdtKkXML5vWJaN",
  "key8": "TQLQU8UCGu6zWQCzabdvTtovBoUWm2172LttKvdgXj2Ht4Nok3LErxd6f3BFCEVg1WaWPwfi7fTSsn2hr9iEM1U",
  "key9": "4YKR91PfqstGroBwgZ1ANCsMmE6TnkT5FWda3aVYh5yAkHfkyqmxrZ7YgM7Vc2iTsSv6ERBV3NWocaRsP9Jx489s",
  "key10": "57JeBWD6cdRh9sWVajzQRhMPii9PSCTmMMdfTFtEnVejiGwmDiXLrgGT6KfgiM1gZUmNWYawMsAnXSMBqDvpyE9y",
  "key11": "577aVFWBVVoxaCMM8azWoaJsnNTSDodWvJQJqfkmx4ZLaPjxCVFeYRejWpiEVWEhmn1hJSFNiT7a7qsAdVXrrh9F",
  "key12": "LjfcSMo4UEuBxbn9d24EMnMxLUiDvfS2JxfDoRzvFsufkkWMHb7whDLxcJXLddE5N1QFJ2K926xKf5QCrLD6J8E",
  "key13": "4icf4zoxLv9MmGGmpBsaZ3ojUGSvHkDp7NcfGBXd8fnp4qG6wswBtJR5iHBACB88qfJsN97acifpbEHweqBpEwk4",
  "key14": "5JAZmMNWsKrGb9XyznvkmGchqPaB6Y9b1E6kdvGjisHK2e4jDgLqCADdHiU3JHRyEtFKtBrvbRBJpsyZYonYaaJA",
  "key15": "3uAz3xmRmPdmC46Vq4MUksyFcUtR88uS9CmZygDGGuGkT1DfhxyQoYNWuCaezffbMf9Tt5PtcdVPuP1TUBuxxPgL",
  "key16": "2zKVtEmcfRc6vf6BCqEyFrciRGPThKGCz2n2Jh5FXSb5wa6GJ8iXzoNimFhJUUYzH3fSiMX8egcZAHr56w4npDxb",
  "key17": "MJmEZYJYnQRGnBhpxUA5NfC7yqJEtCGTHKijem4AsnbnYo9N9kqhWbEEk4PxZb1phdBahQQbsZoQBVcDmpYdU7j",
  "key18": "GCRTbBvyJskswGUjDLpNSLj87sfxpDT6H2yC7HCRLCqcZUyoYc9JnLdNJGvJNMGijVCYhCM5DMmas8y2MxYXE9a",
  "key19": "31Z7h4qt9SP5G7BAT5ny1zCr8Cpco6Wy34EcKaXKnM3up8FWDZbT875zCyaFPYs9ZGM8pCwJL29bGfdp4NY1biDe",
  "key20": "2jZrHF8dGnocba4UgwU7KGYqsNb8wpFBpCRfcrRTU2t8SVk8iPSP1vULSXeQ3hX6cA1mi2XPBZCjKEbTPYQEC4kh",
  "key21": "4v9WHuqBDa2wr8kw3Mtojf6tXqFpc5s43M2w9nrLSnmkf1h6t8R8rtxoSssa4ZhahoJZxmxB65xy1KLmW58FstpA",
  "key22": "Jyo3QBhfXDnA6K28CYVW4Zm5WeMDSXzKJHihsX9sHhHjXKuxjW4pdsyc8VkpXEdhg7uNaQrCGS2eM1McApPSHUG",
  "key23": "2wDpAAfbgn3RVMouFaMUiM1m4ZTKpfGKUxyCB7DH271VpCwonyRB7qDtRSbMrXS6sjdrkR7T59nSNP4s69DtSiRU",
  "key24": "4RVyNH3NwAG41e5KJzLNcCg2o5NHX41EWhHaG8MJoz7kXgbPBiW7BbvtTnkibYgxw5giTpmx36tquAS7NVftLPe3",
  "key25": "66niLt2KKchLCwpsXyMtAnmhDnjM8ph2XLr8kRuLZZpTAt9LCHteH9XBbnheF5xeSNJzAUMicXGCdUZFnJu7w89H",
  "key26": "3YHfQhJMgCLpWFadFTaEkz5BuX6uBby5GTWznJwesdEwha13wVznGgNFBcnMsbWvXZhZiEDyybK8bXCHp3LEBWdB",
  "key27": "4gUFh3fh8bHWakmFRAPE8DqXYZEE5Bj3Ww3q3roqGaC3PD8FSCdnDvDq6gjzR9J5jLdmaRUmcPNB3kh816RVasYy",
  "key28": "2zWyRjmEF5sMfQ339uEqD9p9CtRozpRoDaLKhaxNAk534sroK9gbVZFGLZ9Yene6ZYeWMCKw5RoWTt8Rat77FmNA",
  "key29": "XUkcMd5ZVZNWNfZYZQaPcwD3MvwspsN8dkaJtYvctAaBh72GQKtCCaSaDPWVUG4M3e8Rk94wZFrwKL9knRgYtWp",
  "key30": "uexrTJSQudfGDTNxqtxat4AfF5Aoxb7ERhpejb1j6PZq3SqAtTpq6KiauqT7Dm2bifx85Aca11CVTcpYJBr9dY4",
  "key31": "4cY4hSMTqvECQDqQo4DkZfauT5mZ8upMcJtMyGQzTLpujKw9PR9NTATQAKwQ2YiZcfF1sCgqKC1KrPPEFn9gG3nH",
  "key32": "4GeeQrSXJKaXSdhSrAiEmvGnUWHDrsx5Ysha7Sv8FL1oB7BCcszpEj4VueStTWFWYjNWibstYTkbd3mzRQHQL9oE",
  "key33": "2N6cxftwAgwb4NZTAb3DhGh4vkfefPBLL7c7Y2on1dDLTjnA419V9wzNSwDR2hddifx2SexLTQKTZBTtb5CfRzqh",
  "key34": "2bsitbLQFZp5Jf92NHkVLHjjVX7KTuJfrhrKZ5x3N9rVqaUrTMtjbZ5apsWyP77LAx92bto6bQWQZUwgVJs7Kcqz",
  "key35": "gLv78ThGzRdtcLqPsqwRiHxecsca7vDRPSp4kW8J1PRPxrHNHqok27UrXZDAxSbB7kf7SQEFD3bxnLEq2rH2x8E",
  "key36": "4WZyY92xaUqzbGz8Ps8h63kfVFfgRiiQ3aBbJpRELbtyeRu7PU9ofXa6EjP17PZnYp4J4ecdGgp9bceDQQm9HGzG",
  "key37": "62sZMurngrkKZTpdzhTSbqM6NocJDw5YF3bq2sgT7yrrnW4ETtxsoLPGuX5MZcuXZvpK4n2bXACHTrzgrhTjW8Mi",
  "key38": "3qZJBMxzPxHMTucUZ7tkCFzW8f6CcH9p9cmebpcFsWJ7PhaCqcKqHTigMFf8Yx568EAfnrVqzNavJd9SRXoCNs8e",
  "key39": "3zmcdRSKgNk5YXLedsXkLC369prfhvfd3kfBA4SdAuN153LjRueqnxYwaQbnjeJL2mbUEeuE8kcjLyzYdFJbn15k",
  "key40": "3D2TTWTi1MXKBxVMEoRsGKVHk4bzP6uRKym1dFbBJR38a4J8Uh15poFQsitn6dwvHfCVi1xW6Y63b4LV5WFDF76M",
  "key41": "KCE1z5MCqfaLURNy5GsFeoy9nsoGWxtDzKK4zyhqRRqCvhRyQBoNL7SaDKv56xBZf6F2HsikqopRbtCP7KSwFgg",
  "key42": "3K4hePFC7LofcG6PEpAQg5nfMAAsCsd5kcG9A1DUvcqwfjAsftGdJusLZBtuTxB9YP1BJJvHAZNCNX3ciw77ip9c",
  "key43": "39KP44adpxfnJtbBAQfyGesWVNFv3B9n1rtXyDTbmzuPQfMZiXxrnGNoY7jpwJqiQCRhagDjTi3suG5CF17Xk7LV",
  "key44": "4rjbg33n4eUoGQvfLHqv5d1QCHEMFRkGEKNe6yYKJCgS4jb9eJFqNQCe5HUNmgJgRNSsESCjebzFgPgi3Zyow3fC",
  "key45": "2esiHsfSpxuGqE7oWaw7oFDKBbJ6UrGTAdxzSnBkmd8qbq5uAsgrty2Ae56WwFrHhKHgBh1ZbQBiGLvSgvstVNSo",
  "key46": "NjUJGcdBLyYRqnoBtEcAxgkFjDNVAqe8nFBypt9aoRPcLLrWxAKfd7iY5iba8zav6Hg7sWkczu8ZndPmwmin1ni",
  "key47": "n7FQXSPVGwKfnvUHjtzjHWd8RP2uStjBwq8dDh4NLBRjhm3fQtSrzWF1Y6KvX2EYyvCjNBueY9aNUCUCTmkoFaw",
  "key48": "4ny6Gt2wMxGdj3nfPbocnvhxDLBGVFNK3Uv5QJAo3vNgs7Ajk7hH6nRMWgDkyNgpmaUaFsVkWrHtvuZbYKNCjc6y"
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
