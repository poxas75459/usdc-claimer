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
    "4ahuFMw919FkHAYE5PMY3H6i9Cfti3XHFoodSdEgMQG9d13euTX47p5SMoWUJskusdW62ejY7YNDnJJJcA31FRik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZsyERWcEZVexUXuLQMJxTyBVBjxCKW64EwcZ8JDKUJRqaZg1mAh33LDj2X2pSc8d8bnFhsfBiMcqWw4sTvQdZYo",
  "key1": "3RtceWb5AXGcKSKh9QZzcPBh86bdrn7LpnDoj3CiVMyXLeF8yjoHJAhJo4hTCd1XGjKLExhAnmTmo66qv4H3ZG1a",
  "key2": "m3pwn4srEDoWGWe1jkXtZCa6T5fsNKxTudiRLw7GaNM6Ro8JFsu5eZYd74UCqEFjzT7aWZXKZQChzf4YBgmYiQe",
  "key3": "3oWNDJyW9ixjypFpaURX2zbPNpfH8WsZuxPszWibXZPnjbrbTRsGaxrG1GP34UxB9KGtuVuahg6VPsPmCGnrbT8E",
  "key4": "j2Ab69R8tMxueQ3kHwZY7iHDrtgMtDeazrP8wx4a3ob9fKqNMLVkqbPD491HrgYdYg526CQj3Ra8pVRSk1SBaY7",
  "key5": "2Yc6QYogRXppbEnnCMTm6vXHdoeVyLxRHaU9w9ZcfUzWNQvQRkWjtcxBszZSswpjbQjLaQoYR3ndRrHVWtLWce56",
  "key6": "vVQAvKNiw2QXNHZPZ91Mf1CetoRPs9Bnc9F4FnycVq51pahMqBk8H1iZqnN86XmNdwDp71tzny7p8GNqCnwSiP8",
  "key7": "59fLPrJdAjW4zq939v6VyHU7kfQsVCq4PqpyQ87SwGSG4qAZ13FC69XUj9dYxFSQNiby5j5tpbnQzqzGhFLQ2D3u",
  "key8": "3wZMmG5SpA5zywonhw4W24w8Ui9KBvjHroASG7WQAYGgDqvSpsFWTHk8ZjoijMwmaKBNekZmcFYuqyyDYiybiHQk",
  "key9": "5eQ4q4hTkpDpX5ArAoaFufgMsJ1QRCr749Aivfi9n9PXBJGvKUtQdwC5Po5xr5JsraaVCWrgSJzmJ84yTR2DaTEK",
  "key10": "2fSrTKChKgkbXmK4b8Y3yzPGubXSAaByBcq2VpNd2fUhSxEatAeQg9BvTR9RJWpvPKupAHZavCYyXXUPt6HKWekK",
  "key11": "4R1AcaLk9jgr3xcnsruh5cuYrMMNy54YZvSUFGvboerPJF9ZFPv7NsbM5YTAUJvrJNFzWpd6yBgQAZt8RYd9dxAG",
  "key12": "3AKKx7iWKFSEPSR2f72AaR95mhKkTYtb4Ag3zR77qV9YeL1gcxH7g7MFgBKcsDfhr61tD1DMitWvpzyD4bRRDRnS",
  "key13": "dJQXjDYs48y6njH3jk5TFz14UJLjFKsKFcWsu3mHMvrLLrmJGsgj9V8vaRpFY8o5NBE75TbCE4WBQz7uPG7brgP",
  "key14": "wKV5wfHRmWmy46PCwyHE9SrsCVb1Skm28TUu4zQyDMBpbL6tfY8WaYY4kJ3NtoHJ8LEUo3o9ndv1VaRzaRzaKtC",
  "key15": "4gXX2E9CPKdsiKUcJRafx7Aa1J8BJPdiuWvCyQgLpfHdJuK7MwJuJF3r7bEmb8go3YRyD9F95urbyjuouX1Me26n",
  "key16": "23JeToDZmJ53vcDcTpSUivfBWxhWgXMFHEayprctdouB1CJVuhcc1ogtiEfbsnKdcScjVBr1uj3JtKxcunChkcit",
  "key17": "2QqAKcnhdhF81YTrLfqT75mE5GYh8P4eW34kabiCbAoWsicq2FS2F52wGLwTVhWanTDbaDs5ya75zdBRyckNWr7B",
  "key18": "3Vsqh2Tc6YeBWNFX2A1LCCMpP72uNboHYJj1EGEMvJGhDKvZioRP6qndwvuCFFCMggUpEfi9ddz6ap5gvs1e2ixo",
  "key19": "3ektioCqTdz83Sq4HY1fJJrJESv96JtkDF6kUJLoqNPpD7jV25afgXDYo2fMHXCdK6ruNdEUWEn2Kkbk543vUqry",
  "key20": "bsiKFQsBNjLbnfBxJdcpG5vdb8GwtxtghytcD7GB4QyTzdg6wK4oQ6qQeDkdoSrmvZFo4dkdKhx4dc994BU3LQt",
  "key21": "3H1wHfsQLvTW11hFXiu8za7mZSCzX3JQWx2bfYTQFWnpSfJCuXAWp1Jez8rGHKDXwJF5RpR65rsP16ywRYAW67oE",
  "key22": "5tpDe29xVqRkaW9dg5jDhxJrnrH1BemcsqD8MFAsVadcy6JSd5Za366Y3mJKMqLPivXA7Gi9Gz4seWHANaXRHWjP",
  "key23": "286cr3qHWnXUAsGJ6dsvS5PgGDfvahQzfvRUCJSrKuLGs5u5wKBTUXBauZEEE9wkK4Y81xpUrbyfRzNQfd2bSjpS",
  "key24": "5XufrbZg13xXRLj8BqtxKfUZ1tqodUzJbA2FVU2CeYvQwEiuEuiGY6tRntCXDa78mxiYrwHMmSGbmkfryRUfGQkV",
  "key25": "5nGupuX12arW7nBr6idaZxRzdTitDE65nWmu7AcjW6gnYV9HJ2DeQNY4JUpaQe6W4bpbUUQ4dsxvqPnoFKPaAg1u",
  "key26": "2erzA1qPncy8BGzTmwcri9rvYkSe4h5FUk4cW7cm3TGumR3Vo8odV4ECdqXG8i76ndK5ZoT3kpwimgpQDJdZSZd9",
  "key27": "TSY9V6cGnnk5MhZ8M89SgVeyQzEYTSife32srFxu1eLnHNL34P7TEDAV35nkGvPDmM1FcYxRLiweXRFqtcgJdpZ",
  "key28": "2F9pekyhKodKuTkaP4WTxm5Kw6Tc5nd7AdLvcwVss3rX61ThM4w4N8rfXfic2gv4nT52FKYH9B82MLqYPm7p6vvb",
  "key29": "3E1cTf73X5scJuLNbcnD2CEK3pmaTERgE9x6xWEbDQvnbGGb4bnKkYvcX5X1XbtrPbJHoRoJ1VYSXbJViMCAfBK7",
  "key30": "5V97jUCAu5ErnYnzt9FffWzoa7qfr22uwrsrwmW55Nweq8vKgHQqKAXozfcGPUaAkHXBBKgkbPvxmLuPLn3wireE",
  "key31": "umLpdfawCJFK1AZ3Zfq984BT7cui8ky5PhnLUKrzpMtTHp3eia77UWnfbk5EjNB3zp3wmFL6hD3CpgCGpM3PRJF",
  "key32": "3X14vmRZHAvFBpY5TRnRAsKMZkTxD9BbTpznn184iVDSqpdGkm8THig3brSeEMVZwyitQCFon6wrBv5PLyPqcKWh",
  "key33": "2Q3MRPZYUUrni23yVDgdXUSEvzxqxwE2koYTYSX8NjLSTQEyEtTfFbjQeY9vfvhcJGsG8STrxAnasdvrFWwaZDq6",
  "key34": "3pR7tKaQ6FjMQtF8vvUxs3Qghipo6XR1mXfD1NCchT2zpFeRVLj8NkuhqzxQekGpVQFkyX3cVYrEJYKmFMbHqeZD",
  "key35": "5g6c1ygt9T5FEpEMShyeRZ6GrAxbSqwxHVifEJfiWkYcfumFMoeREU5T9dSToejd1kRMbtqXmNEicSjKUHXN6WKB",
  "key36": "AGEzLSFWy32VUXkHP8sa4Kz4y7hEcZtx67LnzbnPRuR5fY8dSanSAZhKKweaJgxWmixkaThm8SLQsx2cZK4PtUs",
  "key37": "582iUg2fAh8VRiwS5R8GafCHrXkF3a8dZKpk73QYSW8q2cFro7dSPzSXi4SvxYepNz1w89a4dBJ4Nv2fSwWrwoUc",
  "key38": "59GFK6UXDLqF7MaHkhE9iBSFt3n8k7xsTr8EVUmiufYxkttndaqaSZV17YCY2zJCpXBzfQGjwRJLrBudoYPGquKK",
  "key39": "3QZpkYNmvke3Vv27akEJougaqVybR82NnQBxXREFU1a98Bhei7BJ9E5231KCdv5ni2aXFA38hpr5BfftUYbL4CJM",
  "key40": "3VYrFtLd8zsZSq46DhgoX7qGgPEG4kqDWnWwcUMq3XThYFRcZaYBaKc79MgJ9EN8wamobcD5iHRuQytW4dvumVkR",
  "key41": "2CUW1TqZMS12FEzRjMR9XujSS538Fxh1pLJ2C6T8VnYMCKyyzWZbMVs3JrF3noasGmvexaa9W2izBLRZunSVXwWV",
  "key42": "3LuMjoECqE59UnUuYT8YUhaBQENj7Rf5KVFGRNskP8Z5gsXy7zncPaKPAPRAUDpPCE7727S8NARRwMGET1hK7U9y",
  "key43": "8KSiVrBGd2MJpjrQARz62kZ1Daq6rvCAUKXKxwVcCPgySaW4RXZih3aXdW4BEEaoX1uFfej6XeLkhHHhcvo6iia"
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
