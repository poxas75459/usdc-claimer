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
    "3cMX1wUSbQsxpQPU4qGuQLtnvpjjFCDw4VAoH3XfimpjsuuGUnKjjp3YhY5jKb95TJ6pUo6EEq2853FwxUg2aBkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x6TumzCzaoCKmvpCCChN4be7NVCxgC9D5sAwPJC8crYRcs7PtMKNHVBkUedy71Pop5vHeFmyVVtSHo92wkuTeAE",
  "key1": "4EZpuMyti1tJ8QmhCT8fJngwvhCxgLzYRiBegmo52JDZZ3vzFoaLsG8f5qrbsU7NEyKZ42FhcmRZhSZ6onGoSzHS",
  "key2": "5RwpJSrf3qdRuk77xxGdB8r3k8thzhcS9aJMajoYjnhL1zvqF8wQL51Y2ZGHujbRAaj5jVKGsZQMDH4sQXJT8azz",
  "key3": "3PuggAw7KHHHtabbia1H5v9RfP22ioZqthbBKemTucgQuhAnfDU6qcCKhNxvjuJ74yi4zXbjrV3Ap73y6UYcFite",
  "key4": "2GE7C2LVEM6zy5bngSoyPkwhsxCE2UJVcAHcayYVn7kikFTMASSFTPt44FGgjhAN7r2n4zTWUveVhNqUS8SqYxNG",
  "key5": "3nziw3N9ErP58gJsH36uME1t1BrHCSAVzpVFiPtgv9pzf3MDoxfeHi7V4EzVWKhYYmbvwx9LuQ2KCYL1f5zSyiGH",
  "key6": "45Gv42qNxWka61FPUPHiits1BznxhSrKCzVDwCQrK6hztNYaGALsoCAq721yoNBSJm7ThMXGoHtFGwR9T3sj2jBo",
  "key7": "2FfELVLbwCwZMXTyaQe8Gpmxkk2A9iLrTMESFNswRdzef8of3rfUqoAwGXB77JZEQPPZXER9xwsVhau7zMehZgiN",
  "key8": "5ZchNF726ufEGdJeRCweK6cfCxbkAdjFkdedbgDkCFPybxjqrf8GV4tdzeLHz9fixqM4W1boY4CZnRWMgFDVFgL5",
  "key9": "4pvCGocpqEYicpcrLD5446ugbb614PKLvT7otpojzk8F2BsRxSaMeZYTSMs5HBzQAck6H2LZuYTEaeafs1gTn4kw",
  "key10": "5mCS9SM5vBHWyaW1R4FRP29wuCyutoTL7DSDJHdj1mkTcL3VWPDh7tjmMxZWHCTJHJ6Xenn7xFrdR1tKoQ9AUWbW",
  "key11": "4AxPCuC4Bya1iF9YCCuYu3un6js6kgaDNUqGeKRujepbq498zuDBvFZ4ari9VCoD3GckawEAS5mKCp6PG8VD3V2S",
  "key12": "Gwn9pLd8NN81y6oFgcMmiY3o1N5FyBmcQoZ4Qm8WkBYU6SzHUwv9W8pu4mhk3iXWqQxfBPmwNGrmkfZAyKZrirD",
  "key13": "4Tkk2mhscxTpiYsK6Ahk76iBKuZh2EHjh8Xb7FWqM5fiWLsruuaPXGKK3FiKBvZ8xq1F7BTFE2szSuTPy93MvQWd",
  "key14": "4pJTraiwyxrd9grbJhUMxXJquVTdWDXhS6sDYiQsZkbF8jA3BWBrDBfveJQuPW5tnvBE86E6UdNRdNHweUwqy5Ms",
  "key15": "5C6odU6ZWrkAAEyduCBbmHoNz222gvR7DvfLuAy8DTcejAkrvrBk1eyjY95g5dbtXwFTKs53zkLxaLKokftPZ1wA",
  "key16": "2jjXQCCjPTEBezCdjA7qFzo5XmjP6M4Re8CZdehZQ4uAacSDBVfbwjkvdt8zu7TD56sN7y6LGixsrRH6tWs1mF1V",
  "key17": "2CmcZACAYaXLU4m2xNGoRDFuaDEG1MffDnsvZGCfZ5kKRntvbx5NqPmy74dFMHXhYN8aPrTBsp12e8JyqfdKVFdg",
  "key18": "2rDJ9kF4dkCBW2HQYZMiMCiep58hU7VKb7FcBb45eyY1AAhkkQdF6dGfdb9BvgUucQT61UvN9btJ6hdQkWfkcuhr",
  "key19": "2L3LX3ELKRkH3ozwusUKWzouFxJ62U81X9piLZGmaTRCBAhpy2CmvckXFbGm7YgfPvfQMYa3w5BpeqMgZCEQG78X",
  "key20": "mbZBofTFs695ieZS6sysBhja5SAtZu7qxo2uEUJeaCP8yqXw4FCuZarGvVHdfx8s8iY9PWTvxWZhKHtYfK1q7Z2",
  "key21": "4WPt1KoZLVmfjLw92B6YRCaWw8EfY46YPByhyA93UiyCLXhYmkpUX2MTnEYpZPuZxN5nmaEEu5V9KJLh2mbKdFWg",
  "key22": "5EHdcaZDMCdcJ5WN63mX32JdLvv1GyMqtQKEXrJxqcZpjSBjeSBWfKtxmGoBeuZ6f1sS1nWHGpSLxdkP8gqv9oCX",
  "key23": "4raSKmP8H7BXAbSSWVA1DgsK2MJpcaMQmVSRH5rr2TkFXaHjhAjwPK4x5RCMvkbctKVPHFmd8KDXfFKt4bsFyvhn",
  "key24": "42LfW8P9YXDhCMhZsjm3QhMoyPfEroB4rqtJXxmn9ojmDHKi4SWsAdcu81GMUd6FbWktqK8kDcWT8rQg9g2Vf187",
  "key25": "49NuUpnuR53orkHXPHhWRqLaHEMXTqCtzcys1ZsjmbboH1kj5XQw9x87bquE1Rg2G4sk5F4hj5SLxMESHAVdV6vo",
  "key26": "3y2XbWBek4s3CAwGvuvdimnknK67AZDYcXPMYyhboLxKfTPx5eQmUYZSHbRhpzDpgQ5rwC8UYxdQdAtuqeCm9LBf",
  "key27": "542rMBfYqef9kEDwQdTm5YyTLCLwVL6qonfimBtBCJMJP7RoquchLDDx9pDaNvHmw5fZN1b8nhjC3QRvjw7v9Dwc",
  "key28": "4rnkb6LNWtpj1LtQ3L6WvuBKNg2C9FhhnvzsVtXJujFv9sKMcHgBQGQeySGsGWXFUSK3QwHk7VhCDM4QnRXZd3wy",
  "key29": "3reLV1pYvqrHyndGwQ1DgbPWRULrfh1zaGzKP6rUVi4ncA7mdNs2kkhEDJkJx6KzGSdDqUutrjgB5MtQabCDWLmM",
  "key30": "3VbHLee9rouEY8PvoruiF3EqPrkuULRC6eAZnNinJtXe4Wq8M3vse74n7cwPFVhzPfSDgjwBnf85owm9JAo9Xm8x",
  "key31": "Zu42PoWeK8M3nY58aLAiSzaKD137K48MKQZ5TMnvpoT6KiK62Mq4QDZptAYyTz8ZBY3oAKJTKrVwtbnH8xuxhFr",
  "key32": "3C4p86qdWC551S6DR7iWP2LTgwVhLkTfPExDGSv1NwWNLMvYpgQ8qtQXgiooUvJ47TGLeVQ9USFfgv7i7CXwMrYZ",
  "key33": "49EojS6WD7yHmBLXQDfAYprETsfmQh3rZy1RNB6CTZeW9icgabpX7wkU6JJgJMYCzfWx88k1b7GUTk2D4e4md2s1",
  "key34": "554skXS8vNeQMNAaeFuvUHkJzs4HVYtxzzfgRv28BS3fQAiy9Z993uaMbA6LtHj4MnXbVFv2m9tP5nK7aofSEYwQ",
  "key35": "5qFBx4aKjPoh6Ew44dSTE71xS7mp1Z9VJG93TEsJ9RQ7ToZNRn8aDU8xoMo74htvFFH7MWGM1XaRgPAEzJtsrEtn",
  "key36": "2ZN4rZs1aosPGaEmRDwp86ViChpCK9cCxRYx5obzQ9apMG4FU1LJsABduRR7d1RZkjHtLDGssUkNQxYnnH3bkQHK",
  "key37": "27wfna5qv5DPQL8QfSpYrRxcuVxuavXbV6Ap6KYLhBabfK1jgVfGEeHAYDUoMenaHpW6SbDTzC6GiGRPrDHkeJpo",
  "key38": "262CVQofHsJc9TJz3zN6X7emXgYBf8ozhwn3a25kreqwCFASKFKMYZzxQ1bVEv3WKXCTCx5RKvxnUKRGMmFJ2bNa",
  "key39": "76whuxomy3NFFAsaFWfvwwfhRexPzB4Hs4fF7syqQrciBpRjXwesKCP1VXgzy46Y9FKHPgCMY7cVQzrgwHmdRRv",
  "key40": "4h9aVTHiu9fLDzKMJZgCK5KAQKzP4CcHV7h9SzDbEhoBiy7NsM2Dhj3HjgofSf4J3fwAUw74C2y8M64UkNiCzF9Y",
  "key41": "5zXRJaHR5Rb6D74Hr6wvQLttJZV8H8UNH2bDBXiyVgQPiUU6WeLpuPDb2o3eojab6yFAZ98G4prrnkHP6FhyFWUm",
  "key42": "nnfa6dVvRKM7fiLdd313FVg4FsBUCcuAb1L94TEaypkD9fAwkWMSBRow9mj1Nupd5v57DAKMNkWEjE6kRyNvtVb",
  "key43": "422fzokKaMYg1Vk2nobr2Y1nsNEiqJUzQ2Qn5CVJJKaCQVTJkAyDBaVuaK1eCV2KFw1S6X5issbC25BDLTu26gfC",
  "key44": "5Pijo7uf7SHr5f5tqptWux98aPPLwoLc2vQ2jpPG2i8vuEXQ9eZn6JaSYEMcZa271UoUKZb2VhEEscDj3cbGyFLe",
  "key45": "4dTCoc2xbhgct7ryVTLetcm5JJJHkCYwD4KqPDZo6MVDYHrsMzkKJ6ryH9ouF3pMMieCLaFS4QSakW6DgdKduWkc",
  "key46": "5yBczhu1G38gc1xmQGHz3EzdBh1ATmCeyaBqzAJBoeqbguE57MWWYsrA47E5naSViWDsYCYfib9xXC1udQKiKatA",
  "key47": "4MTPoPJZqdD1ySX7BxuVsjptHQtk9iQmP3hKRDP4xULCRtMiwZcDSEzEFAjhkpGjNBNsgT4kdrCwCoPvn2YTjvqi"
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
