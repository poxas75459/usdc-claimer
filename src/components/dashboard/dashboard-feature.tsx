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
    "2yuT1uJUE6B2hz8UjCgv32AyhvoefXknVRzkY2xLbuAW8HXK53A6V8yEqvMfAUfaf43XqiUNC1iwqYSHf44FWrAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h23dPikrCn3xWpYp83v7L9qkir5qeFTB69Ptu9Qd2jpoUfr3zPA4YWevGkGc3Z8HmPUAVbddkvqRgLT9jtLnR86",
  "key1": "4tCm6yEivKrnwASM6jMrrRtyYvMxmhNuuTdxtzk33vhsQJMNHcDoLX5uqJhh6jPY63M4LNGgC1dT11kRWBUGxcT3",
  "key2": "4JkaW8XLidixiu7zqPGPpZP3F3d5giXyT9yiEtMdf3DK3odunWfCqACZocaifDSubiegEKior4Cu6cS9NBi5gaZm",
  "key3": "5tLT6Gqr1RfGDsEU9EAHSzgJzbn5Bmo8woVMvrmcV7hXXNaSG9vvVcfiedvshAm9P6VSze5Y4AaRjaB3Gg8DTh1E",
  "key4": "dkeztSbzRF5QZJ6TgkVETwx9pywzRM4Ss39ohH13UcVyVBc2MNX44ynH6AHbSWVSk4VZ19958NHgymsof4YgxJD",
  "key5": "5C4vB1uvo39KAS4z4oP5ozMuePUY7juQAL2B1oyfdosqaFb8NQB1xNccwvw2ubaS6XTt4PREGN773ezAaF1g3wXe",
  "key6": "5pyT42DaExjDjdBG14ARArEqdYwZkmnLcX3g8hHn4jzuhvFDaqXLWuAntox4eu7tcrKxqTs1jx1h8Vgq8iiNMho6",
  "key7": "27TEddXu4jv7M12MiSAyZDaBeSJBa7wFgQuUWdn6PDtBvng7Ne9DSFKu4YG3GcyPmstAXRQWtyd5KatiKYyCHNvN",
  "key8": "5t6A41NeGoGQG9jmYbr1h5X46NR8AgRybVRUSq81v22xrogwPTs4DpFxKzw3pJgYmmB9aWZnMamujMFhauPHLV9h",
  "key9": "3haSikJ9iow42RxE4p6ZGN1XJJj32t7X7k31bUjMs2SdDfW7UDG7JtbpTcA2cyyobpmMzDGm7KhsxmR3ZpKSQfGT",
  "key10": "4RCT6paSGxweRo1YNRFgrDugLbiL9LYLvM78U8ao626L5Ruk4WB5teu6FWHpJK14W8pc7wi5vYhfF8MWx8FmDhr6",
  "key11": "2hZ2mgGoCo1dbwfihYUWw8jPFgb1Q4qUp1XJiEmhzY8AJZCtQTBMW5uZLVzRxdHsL5K8yjvXDMRboeR6AaEPMgQA",
  "key12": "2wj2RRrRnceFLVfmF3gAdrZzWE4RHNoHDn1eZPP2uS5NDBLhGbE17HtsJehcTwJyHdcdGkz5kkLyfAjRZ6CCTRFq",
  "key13": "4anHrWjKUNDgYvvmUbodiSZbAjhffz5YD4Bbky516QgDnJdWxeHjvYaKsqhLJyL3cGjcbmvWHcxkRig6uAX39sKd",
  "key14": "4hNJHrZd8CcA22jvLPi68RPExhgCDXaX9oQ8sWV2QwAGS6eCWsXqwz8obw1yCC4DaCyUj5AhnXp9pfAM85TenFbm",
  "key15": "2N5NhRs9Hgotu97Wf2QbixC2JJj88zVWscpeupoiD2b5dRwmuhGueTNndaiMzG8oWcxyU9fdCnqZ7rWxWzpNc5nA",
  "key16": "61m7NPmDMy9Jw2h3YBywFUGM5EXxYJ8FZJC2eH8eouSbFf8dCv7XLRXEaz8vNEfTJWpskDGecfLHfJ8ub2yX6b5t",
  "key17": "HdNcXa6tfVMG47DepeMhgiuRmEn9zBbcT9uYD38s4vUy8mSHP27iXMciB3EhD5bz3qGjd4RKa8wgAX4GCJ77Gdi",
  "key18": "58ueqDXRyqtYAaD2recyv92QakKPvYjJ9tgRQ8VaG1F22TuBnjcRmMGE1ArE7YNkVo1DBQVmcyFewk18EM4QB1Hb",
  "key19": "5xaBQutVYT9BJLD78nAT2BNY8HyTvFQjcmJ8RTCNJxJHKy1P1iPFnAVDCktFyJTSiQzvPmJiwKPmg4yesixWb23k",
  "key20": "3ufBivXKA6r7YQiiASivjwGJrp1TLtNu1obuMvFvZ3vmKBweQZEh2Z7Q7RZWheSKdCAYFkLG1rKRgtsVmHHh7Tbr",
  "key21": "4ks44sEb8sJu7AUU1gAgz63SHFqUhEfrKfdqvKWqKcAk6auMMNcubmYGndFV78iDDJXXezvWGFSUsMmagNk8fyk6",
  "key22": "2BRJrdEkKMyVXdJDBUSQMcPEiSHSHaYBJo7gEzYzEbsktGZUUm24D688mUDvYCQKQ9Vr82okTaWpFH36HWzDxDpu",
  "key23": "2mpHrBQ5tDiK6jmif8c3G2MvQM8aBrjAzyLw7hEvM33gB5E9Xh7LKBEmhm14vwkmENthZ5iZ2PBCUgQ7EP6TwMzT",
  "key24": "4QAcwnqykg9onM1XFHbwtRPQQHDnYEgEzbwLa62WW4ojVCVMmHy1npC6xAw8LiqV1LxWxwrn1urzrpQyZi3y4ShN",
  "key25": "3oady4zG9se4qiLJnHRjhCjvkhjJekWiBP7JXoV6bqcHq2kPKQJJ5yZaRjBZXgXtjwVdwu1vo4vJEYqWkhJDDitw",
  "key26": "22syCeib14J5ibkmnCrnMgtHjSiLuwinTSJQETCchWdDAqJXiKW4rfxu8xtgacY7GUqZUUprJEHw5ChkQuWvmaHq",
  "key27": "2qLvvJymWwginEACMSZ1rCMGr6B9zUWFP5qQfyeRZjMSRbdG9jfaSUrtzoUJ2KFMck1Mr2sVTpNCESjUZENPjPmx",
  "key28": "bdhYYkg3eaG6Tkz1dHB4S5jWGnWXn9GM2FYZ8WHWDrzp8eVY42V2Kf1v7J8VqLzuY7EHrTPixBNLxme6JZdgfud",
  "key29": "4qURR1or9dKxXv2vMQoj3tWSKGpEvkX1b21qPQn2wAXjPYbg7hdEU4ZgNiGf2rNoqhyDFTba18S1hnfLsdi6MxEh",
  "key30": "2bkDnvRNN37yqfFjnWxXMLE4dmdZdL5cNWtV7Tu7vGyGtUHPxiZFTGEsghxKaoYbkw2UMat11YKZkpqiJoGbLasL",
  "key31": "4kgBRbGGzv4Akobgjn5XVzzdvJHufNfP4V8n477SJzMmYPcHsbimehB9tJbTC7T9nBHLovLWg1JgBgJQUr9NcKKk",
  "key32": "3ZSf5hdPfVLeJJTxS24wgDZniNYpiXrveq6McJcFogyvWnZQYfa4MUYYvPFQ1W2fQU5iKYU1hTY4sD8oPe5upSzV",
  "key33": "3hKriiSJaFoUET986cJSk87yj4ZAreogXb5ernW8CN2yGAqHLeUg1ppgr6vcJ9Gapj9aAEXZVXnqPF4zGtCP72zk",
  "key34": "LXhGvrfDHhE4BEUrKGo3MVcvK2cj2BZLzYbCgGfi8pcp3DVnKYXLTNgRu6jEnij3Bfq8V2tVoJ3yEoN6rf8Ro7u",
  "key35": "5VHw2VLrqaoxWsn77Rut2xm7r5PrjekZwBdfe8voA6WkKV8NE7sJ8uPoSo4uynfQyHyTkGEg7WGy9aS6P4fFQxZ6",
  "key36": "38rg4iXZhBQMsBkuqgnqJVrMwuAjqriznhnfe8gssQUkjP65ipc7XTeQLkfqbaFjfQoV2rbQ8Jt8ku6TLcUJqcbo",
  "key37": "4gbaiUAJXxUAy78BJCpzCMb6B9GVe5WDFDSNgxQYBCdByGrz7yx4YHwXw1QwvKsb1t19g2w5Sr4wTnEguQjr94gt",
  "key38": "7zSRqQ7axyUpNtSfEgKZ2ByzSSf95BFxLpzx3GWdWraJRgWYq46EHREMn6U7jYm1JPwDuTKykYMWF6T9pFBELyM",
  "key39": "2cyuCvjzpYwp4WqJa62sU4f2zPffYaDreD8eu9nkWtBf2NPEDYepFLkJTW5a1MmFwXCgk3h1PqEyaaMs92pSweDU",
  "key40": "2aecD9MWP9psopqm6H9M5uFqZv7K86tJGy41rhHtDqrGpjgrUCrFwPn762kChTvNMLmwVmCaeFNNNWN1iqyTwTT6",
  "key41": "3VbDyJYYYbPUXkSgBipjDgjAxWRVNWpSA1h96BZxcEtv7MSpAdAyG4MDgpNzptf3cgGzta5TTX1QmUY5f4QV4o2X",
  "key42": "4oDkp5rsLbYgzF4xZVcvd4zoAusyHYePBiYf3181NPD2nuM9HEy22dERvpHqRkMeYnG1X5HoDhzugKsdiW6fjEt6"
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
