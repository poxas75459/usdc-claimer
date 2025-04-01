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
    "3BHshwyzUYBCqgCJ7hrBwfQKCBz7kF7PxF15sansy66N9oz6QLpwihe5JtynzxqHVcKUSJDoZqYnsF1v4FrU2kFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39oLoc1DCH6vJsawn3NJRPf9R5tkBwsUJchBN4rSvW2jDmKsYnERVdoaFhEgfXGijcLxaqTxwExZhveFPKCLwHgA",
  "key1": "4814QWUXD1hbWjYkzsud22yup8T5J4AYoJLYryiG7x92wzcscHJuHsieMG8Tgnzn3n568HLsqTryHhxQ4iUgnss",
  "key2": "1257rQYiUvAq1FSfTYnuiF2Lj7Kr77K6xD6REcMCkBSrTxQL778xie529vRMas7QUgBYWRiwrFfWrNUPFnzeE2QD",
  "key3": "23ALMHjfWpju5oSfXZs7GFHRA8oRqqHUsSKD7GpeTJ3ELZfnCtirs2T8m9qAAqLtyjSUSnDqsiEXbFY28dKu5Hva",
  "key4": "61gCZ5sRZY3YPfT3xajZQXE1uRWsmzP2LgWVLaKkTwbWjM7tBCyRhwkyTJCBwWsLZst3PAB1jNnVfkyVr8UrvzC",
  "key5": "31bL1f2PkVDXBrafVWuNG7TKck8PUkc6LfU8frQbMV8fNHV6MKpqvJj2dMrxT4HknKBp6yjQ4LmbQkTcjJRjLkUe",
  "key6": "6Qp6gH2FtffaCYzFFx6ARkBCL7dD84dF6c5BmmwtnbSoQrXitsXU78egojZfdWZQaWpvCe57NwuzcqT2gtM5dPt",
  "key7": "2ShN2SFGHHa4cUhNtFUMw4ToQWDk36ok2cH1doHFNtYDrDM4Mij1aZw15EB41ZqwhSMr5CVoyr2kEDF6mei1vb2B",
  "key8": "2qzoQQjhfnDoWcvVzZuaK7MiUHWTPJusTx6fNepRZaX1xTcmKDmw16fFSE1dFbHwD68SzGzdTdaXT2QQNoRCdRXT",
  "key9": "3cxZ3NjAWo9WhRXbdHTfbs1PEfPkjyqeWR9PomgEotbp6NVzNck7exjMWwihdvFZ2aw9Qg5Bf1ecrh6gALHQqm75",
  "key10": "5uyx5oVTeGVjCAbNkxLxeR7KFVZoERhq8S21SK9KanyYRdziLo7aGf4xyjbTd2NwA8pTyyLg9XbT56JYQbrBSMSh",
  "key11": "2kuig7wo5TU8qLgsGwEq6f2VE6NcHS9NxdqEdKtDMfXJSJxiTH4KJXCf2jJUkBKo3wNZMafhFct7SfgguqtgUdv7",
  "key12": "athbXu7JLhzSd8J7emXg5z9P1z5GykEuxCL1SqZ3fR2qKLXcPcRyAkTZMoJe4Nh6k6DSXCMVPhyCoZj9dZ6hcbj",
  "key13": "5zpVML1VLeLK7QXjjbkTKzRKY1eKgz3qsWEuXazDPtqWhWYkfZq3aiimKNEhAQCRoKq7aK7ctoTyd45b4UehF1WJ",
  "key14": "2aRFBeui23DXve3uoDVFfBu9dZWumPGxtVHsQXUaFf9Yi4u4UJE8UkM25rJtoTmoeikFT6Xag9zuxYd9s5RaoFco",
  "key15": "5RuL6ABVpoiTFqvGgoRzGgwSV15L8bt2msfW7ygpLReV2RPrcjyKJYbWUgjFsHnwQhyqLWYyLx5U64sEc8a4AtsC",
  "key16": "38R5AWTZ7bBXxdfbPdhcQWNfzVBMMceiyUAUzA2irxnr3FyJLq1L1eYQPKsTQu6gmG8zkxTKk7oL22ANjVgBCmse",
  "key17": "UG7MQYSCecUt2gVMGgqyCxcJBGLPy8DxyBtJF14jYcn7tVfPcHSYgsJYFYfNJbXuw9jEZQPzE88DD2Jj5asVwtH",
  "key18": "5NdABkQFqz696tFjEYyQMvkjdZXQC5kQ7J8C5MwkJ7Qw7Uj5HvXmvPMLf7cWmwsRgzDCwLaT4tgZdPdzuEu7zm5q",
  "key19": "gVjqU7qdsaYyXss9AgZN7jiW8sbbEPD3pKDHzL8V3PVWBMi4mLQCK1Pn4sdPy2Eo97rfkUQTAyuZPvkKyw5J4k1",
  "key20": "5FwMCDvKXZHKs6MhGfvnrPKZPMjjW5N57eKKF61xzTizPpBpQiyBZoHhKZFML1FZzPnJXh34Vd1MAZbcA9rgTJzK",
  "key21": "qA1CnsN6fr65AzwAX4UCdDYXvF8BAjaCCVsQBY6VgaqLWLZWBc67cDADb9diH6nU4DghP5AKysXK944rpvbpU7B",
  "key22": "5Mbf1xfbXz2D7amVp1pRKLgsS1sUisaVfoWtHxFSNga2eX2xojHn8u6XgSD9Qrge78BCwqLAgUaVEtMkXHXUQcJv",
  "key23": "63szcdC36D8T1hKEkiMSJw54jEdQiAa8PakrQdAhULpminhs2h2BczuEjiMbebNVS4eXzaWXa1yRTY975URAUEVb",
  "key24": "3WxdrembsAjrSqVu3rAXn2HFxXQEGgUx6jjxE5gr71YUixcJ6uMy9bCxFDyjMRhJkRoLcwa3VxZtEWYDtkZEhxKu",
  "key25": "z69sikQZao8CVkvKyrwro9ye7nuTzihgKqWtj4yoo4fxqsixPg4w9Ynn2398nEJNXgfxJGkQVrQv7FFZbBuvjrM",
  "key26": "56iWq1sgepM2d4qH8JfVjXcHZQJn8zSStKjay2NY1Nvw2aWa9PqTbGKNfDU34UPdypNV3uWU1mfCJCmyqaMN7EmG",
  "key27": "5gNgbrzAmvvEc9JkYZvUEgJXCfiBQRAVo1NtYq7vpxf2KrE2AeqBt5b8Kc8au7zL4rhTJoe3125TSmQE5ypftjiP",
  "key28": "1Ho6B3hyt57jXwD4JkVKJMD2Wmw7X8GitWz8RmgYXtUxSGZRJEEAcLUztyDMRFsAF2ff2Rh7qtpeCzzryje7WCf",
  "key29": "KPy4mf5Ze4chGHGaQ3Ad176e7CuJ2eocGFKJcLMkA2qobnzQCS52FHjRd7xPJWpwFJpvoyErJq9WvbQZJzxqffS",
  "key30": "5tePAJCMkZc4bfqrgD4bWvRAJsiLkLQ9XaM9Gyg6BobRHfnFCEUm7CDiRu33FN1rN9EbHHfW6bs4HSUuBX5Y5y6a",
  "key31": "5Sf4AzMhkLEYh59xcN8U9KU2FCoHuHk9W8ywyufPs7gYZnC9PxpCvcGa9qo9uaWDcdHwRab1s9wFfZUnupas9kdi",
  "key32": "2y9seMeacRUGWhd2kQe37MgCfH36LuxzjwuS4GtCFZyyCnyqUYWVgZdSiveTDF26HsEVj1x57xWr7mkdPdoaTYXQ",
  "key33": "2FtfkAnbWWdQGVLqJxLR9wWnQEnAJD8GUuAXgLjLEWXSoDgS5gagCfHoiY4TapsFnTLZrt7rySHGHRn2AvE9G3cs",
  "key34": "3fLfdPBkerVaX6e4BQQN3yL6YpYHBgGHXB4Xbxb3cqMCvFtXCpKgbCvFziQ35eW2WLcou1Yb56p5A5UfYkG2tgXb",
  "key35": "4pMUGDnbPDDqpxb2kkbEdKcu4itHZD9q3w5y13mjN5ZVXWKNP3RFgCjtZtXuywt4rSjsr6HwmquLRAFNEznXVeNA",
  "key36": "5TPRUSMZqEamyqsoinhoRdoCqoVeiaMoEfur5XAsatBjfmoC9vjhRcEtZuLoV3MYy4SHNQUaKS3q8991gdZqMXJ",
  "key37": "45ggCrtkvJdro6oLMHKoiKFZbxmFjzqQFJwJCDRphowQSavY5ond2HUfMWjx4njTdmYr3jxEkuxtQeZLPiv4oB8t",
  "key38": "3t2hSyT6FdmYfWUwT97z2KxUMvhaRZmpG9DFGaws3AADZ7ZQE369joqWP4tJsiS44EWbBL5hvQ3ayk53ZADgBFC1",
  "key39": "4cREFVgrLVH3UGw5tM3EmZDs2WPRMDDm15jqByfMaynMEvnGVQQppHscAdzqJf4VQsRnAe2wZyVswKowWWHqfFjo",
  "key40": "5nUFJGJGRAVAwhKU9azMZ1R4yq1J3e6of1RFD3fs56heDSSBNstCrhdcbBTFUWr3H1UF9kcVnYjrEb2w5wnUDdd4",
  "key41": "5swkc2S8pDzatWLZBcWz3FPiVrbBa9yUUcjqzT3gYk3YdkzGDLjURqmheJC7UQhknH4znwqEwnHHsn8nL97MS3Hc",
  "key42": "66VaLUk1AJPr3Dp9KpnzjDuXdPsrWSH1RGMzVS2Qca8zcGoVX2EuSp4r4T19A78TKxCHXL1YiWdxjS5ycPgpxJ19"
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
