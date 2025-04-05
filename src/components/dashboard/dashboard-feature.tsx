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
    "3fCHWVNk96qaiui3ErD9oEwWzPQ7RmP3h29JjquUmyFgvpcb9ghmcoorCsW5BSbGjUHMzQVh3U623iaYyyiJzcYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d1TgwmkEbwjmm9QwmYyBUYKYpvEPNa7p9VZtEk9BiWR3LzfMY6f46uWQfvS8A6erTF3iVjjqoapAdEsWR8ypFW8",
  "key1": "2jwVnGsHVMxvvomTFvyNZKAPuLAj1kTfMk2uEgbrbXc9PFA8zam4GuhgnMeSbYAQfCrs9sPusZewS1XyrCwcWaVT",
  "key2": "5D7TTzkvC5M6Z7d84A33Vi4n1U2GzZh9dkANTZkMnQFfDnus45YSNy34nTKpaivGS1FG3Ni7h9aBa5HwLoi2ikr9",
  "key3": "27ubWk2WSxsxxG189iNnbAJnMreCyVm9RK9bHx6TYh4RK5v7TR7QPiM7DZBok62XCzmoS8cis9n9c9ea1tyC1t58",
  "key4": "3Yzq5ZTXKpfDNF36PWhA9STogeetw3aKTLUFavMstL2f1EkDNuiKJC7E7nMVQXpMmNbgaYa2Tyuh8xQjVwNryEuu",
  "key5": "5r9xdH8UMRq7sjzgSCqM6YdH9VKEAorHG98tgdjpVUTuf6oVFQGwvyPaF1NQuKT97BfZPRwAJCUBkuuoYBqcBUXJ",
  "key6": "3rhdxKRMszQRVC7cuEQ5omkRKKYE7uT7J3EFPFvJrnjNuG6nEePTxGr4GuRd4wdWdgBVw35Uk5nCsYQNKF4uUkAe",
  "key7": "2eJrgCB5rbVky2LDNvtR6mju4bwepbhFeEkvVMRRV6acHk9LrZsCMtD8wHyUxfsr8K5U5vEQ9hRMaS1CKjG9JW1A",
  "key8": "a8tLrn3ciJXaiAdSxjK7grXKgvpcsZ2ajBA5uJYhzrTVqnYdwHjdGjKqownvwTfB4mdeAz7vSia1EFHciqUHf6B",
  "key9": "51mTWxdks5YKSX4vEytkkvEFb1knv8i3tLm4RDREknrSiFDKziMGvtdL9w98JjhyVs6JgnpLbdvbYPKZR4G5PrRg",
  "key10": "35Ci7UTugGwRQY3p9bebPa6FYs6m6oX4MeFbdQxeyCTGmWEcGxtdMDEY6XMNdA33J4NnEtVu4XiBkS1hfD3QLLK5",
  "key11": "2zFLzpAwgPjPTx7FT2AqgE2WQnvJTSpcfYdoem1AcG11NwL8bi14sFVvXEPyfJMzQgLHNW1atdnTQyM5WW6ZHnE3",
  "key12": "5LgVq4dkKBoCkhzERZd2THM3PG8C2dNcNKZS7skjo4i6MHYcX9N79bC6GZMynEJ4FSeiM2w5dDXsCT6PK83X3j13",
  "key13": "5Zs4UxJYiS5yeWDjCYLW4HT3KgKd4wMD5wq98juh3Ny4Bm5iwYpc8DoJ5MUvSjeWhpfMUxV2A9cerE7eRVcMTmx2",
  "key14": "625kUjkoxAo29hjhdrsrfD9WbZjcZ5Bk41981xojL1fR6PrmapUqqiayiBhxSRMb3rKKqU5tiyBymfHAr69Zw6Zy",
  "key15": "3pjC6usnLGPNBn7YuGpjjEH5chwWQAqXQbzzQtqVRX8Xg3xoEsjbYkw6wvpXur7utVJ653Bqi6MsBzd1XqzsKhei",
  "key16": "gMNVfXJh3oGq5mRfYSSamDqVxb2RagCQdgz9EpDJcGWdGbkE2SpoXtQ87xLJ6bZ6sKZRZYbViHW9Ks2hengeHv7",
  "key17": "4qtXKZdDDWVob54K3Wy95pHomE5cFo9f1pSNCJseFvmtg1idwpta6B391ew9HZvudvvQB8aaasWjcY92f4zwPLNH",
  "key18": "2b9xFgaPLBkVfbdPhua5qEWQeFqeDE5pYgUed7BQfjJLHKqRw3tS2hxVqU6J4AhfuF3zhpfGBX84PJMRdNZFZjN2",
  "key19": "4VcRSyrX6SBUGYai4ZzPgbhbQT8yLjYdtGqUi1mCUH8gqmSR8RW8Ne2eeaunWBsf5CoSEzEzDaDf3tzs5iRw3epz",
  "key20": "5jzGjYc9XjeroEP7kWdZqi3EViuun6u2gU2exVxviKseDoHiYS8e8UnyHbyKB1qjXfa18JTQWzzfagUKVCatCdri",
  "key21": "5XAh9Na77HDb2uyeV6V13bwHojzaQ2hDqN3aiaPJ9LQx5PByRzNMydpAgNXpp6TnParWCB86LWbuJqYGd7CzPtyh",
  "key22": "4N5aJ9eMvB4Ww7QBoJfiRi9uKFibfKYwxBwatxJfQBLKn2gLctuKYJnQZCFv15LfkDXtKUVV9w3AFTCrEfLdc3Hv",
  "key23": "5Kf3chDGbDPmsRhjw2MyuKtWUGhYsVgfMJoRxY1n53k558YPyKdJfp49R71qhGEN53sJXtsRDwE2YY8cfpVkW4oT",
  "key24": "42btfpKgY2of9R4W7XpL11TFwoDeZVuskmni3mTWeBEbtUexvMmk44HsLyFNAAdU8vYAeGDf6nLbnkUdcv1fHqG1",
  "key25": "3jzJiMaye4X6mJUsYSEsJAKKbATGQpi8H6EL8zD6DoZ3womkzWAycoKCo5vBsuBW31MSvmgiGRRYDRTcqMSoCSdL",
  "key26": "22Biq3dr3QBuGLmKYAg4p52LzCDYnmsh9toYAVFDXwTi2Q3xMcDiK8TqpEdnjmCKGvgzWqNbZY95PWXVZtNwbJrf",
  "key27": "4zcixMZTFcz2T2wQh2mJJRbnLte744KxYoENmXXW9NiqA2psF8kFZw4GPQkfQ6HqsofphRaunCqYzb31febdqa4t",
  "key28": "28up2jJSeocwf8wiyHHXS4TtWYHd8mo95No5zFZzSt5xGL84VZKSNVNcb15tLqcgipwEpy5ZMX2X7nbMVMhmAvLF",
  "key29": "5sfKgrh7UPUXZYtyrfaLTTsPc4QF7CrLxsqiBY134EiyGxyTPMWF8KZhWScQ5gYn1NXcxHdrTUQhwFpE56yQsVpM",
  "key30": "5TnFqBBsRigQmgMDizobNTCHdN4qnqwPrPKnHSfRQhh2Qx4E6vjWQRnuSp2CrZvWhGaYcZWn3CasQqcEXENbrefT",
  "key31": "3oH6teKRc4WMWonfEmz5jCdzkpYLnMMbuWKSyWWXxPeQp9E8y19mWNXBWx1vjxkkcNegXdzFxXm23iQZUFYEw63",
  "key32": "5Q6wobumL7g2Z6Xyb6VLrdqr6dquLrkgF6WtkKAbw7teRPc5Z4fLLTzwU45MpVyuHy6HLkf3GdnmpQn3gKSA1UV6",
  "key33": "eLdADFA4Yc7LN6vasquHYv7jWM1gNN5bgE6vWbRyytcxkTKdVhrAiyF53r3P7m3czMsuivn1SvfaNJnr2nn6pDM",
  "key34": "2dKZ31kon1vxX47zZFk2FpeuhVQWfxF9yDdriqx38gFpvfzyzHvmfWtVYE1xcAv72a2xF2t2gFVaxZ6Jnj8EBTJs",
  "key35": "STcSenYxi373VH3xqH9WX6hDE7TDkVAjenwpwh4tM6pDC9T9CQ2fB1SsG8Y9Qj6YhKLi6Na3QAEBuwMQvY1geXy",
  "key36": "3rY3scnezK1ucfaGi5g2iqAJ4Co3eGFBsMkZ3Qrkkz36XSN3JbNGufZQKw1EkeR6Qkf3EsXnndFuxRzgd8bwERrc",
  "key37": "2KVSrydS7qgGfcpBGh6DEJiTZ4KWTiK8JivEwZea64s2bVju5MRSJrwbRJYR2vqZmjbJUy3DpkcWf8UWTmfAGKsG",
  "key38": "4KTjzHd1LQJr55QXRLSD9vSPdduGHTTxYYBELR7D4edgAe25gC8Z7VDJVW75S9iQtGR72f2ajhM59BMogDe1VDdV",
  "key39": "eidQB6th32SY3JXBRcQWMYowCsuJjNK4qkxSZbKqEHQDtLrNpR8wgkgiDG7NfYErS95SxDjecPio57vLrg3taFE",
  "key40": "3BDz19eBQhCLCaxaV5hD6WqHoRsEPaKyb6ALW21e92fZpAren8GuPusdG6LzPKiw15zEB11E8mGNKUaaxMpfG5NK",
  "key41": "3VfLpWwGezAR4ngKWhB5sS1jXhUsjwXE9thsFzxMkvHbx6GNjGUpLYp9LpSaorwPgRd7dK6QsgmJKUtfLDt8X7Bh",
  "key42": "38X83AsiZnwioyWmyv2XKCviNMQVW4EzGCyDnpHcHFRtuTYvUyc2ctbUHAdHLZHsoCykBYmtR4WtG9DjwsnYTnhG",
  "key43": "5ePiU4rKkmHyeKFHmvM2jKqSXb2J6oM2WjovppkXRa9dEtmcHVKSTqxFnwk3Zt6957uRRm6r99LG7HnpHh456kVu",
  "key44": "4Biv54HZuYVG7F7gMW5wLkpfdRtvY5F9w8J2Cmpn2TRnfH9YdsU8xWHuHhPFYeSbS3jqbFLfUXb2bWpPmqJk2EQJ"
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
