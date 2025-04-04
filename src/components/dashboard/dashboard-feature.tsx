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
    "2HmYj85prQ6LW9yHnWEZVjo2Lxcx23v3Fc2KguqWKGa8qpuHj9EiRoAr3CMNuEWgKe3suBwcTgrp515gP7iCLfy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CrHueSeQZgE5CGv6VgwPcUAZZyR7yXiZxXFSxBzZkNmprY6AdQxM5c8pifF6po4oRPrBuoHP7DypqiFgZkkuPFo",
  "key1": "3wdrmcmnHEBnkSgUS4Xq4Fct34XSrUqWh1cTuF7YNMm3nU6V3fKMyjcwoAxgyJejc7b31vFzWKMHwhPV1uRbKrsH",
  "key2": "2a35pWSfAkhq4r8guqMuFvYshaKQHL2ba7cB3SGsaXqFhEVqaCXyFdGqbzMMbPjqUV1KAMEESRnmy4STh5eyWZEt",
  "key3": "377Bm5uBJYMVB8aWnJysXXMKNuxkifeCHchAjuaQ3AjADg47qGgfGcRAzMpycAjKdFgurKQcp2H5ACfQzBkWiJYR",
  "key4": "4gRo2mTfV5EgasAjMyXrN55hm9ZfBwBvvYr1aQ7Pnknv3djhvzw19pyTrf7wKZ33qc8WJFSDbjJQwJD2SMvL3KP9",
  "key5": "4zgdBA5c4KhpuZ3cT1RAvjjgoshJJQnNusTrpnhHJwufA31HxRZ1zCJ8eG1cMEu4HSLGWCghSAfkYxJWEfYTG5uz",
  "key6": "3W8BqSB2QAZMUQKej1dEf96tihP4TK7AdE1CvFSFLTTnfH7XjKGvQzpADBfsQadjaDTXEeF8YHvezhFukVizNiQM",
  "key7": "4u4eigreXzeuMcu36UmsiHhzYmZ4eBmPtSXcNqicuGfuFjpnA4tZYHsh6yU537agdUxTUcwBXiC3vPMDqZ4JCZNH",
  "key8": "aoCvFJ7u1nWrS3oa53ajETZXpYU6bupNif4tbhc2VwNvne4eaFGyyS8a9D2KWZrQPUrR7rxNsRjfr8pFdoCLQBq",
  "key9": "58YxKmzTJztKdCZy8GydcjrkiTsmNvy3fBo7r5nZVWyAbPTdRaKKmTD8HcKA2yNR61k6NwBF5BikZMm3CSc3MatS",
  "key10": "5KZGfVCrahjxtDCdEX5yAzsM4kw9qu1xDq4xHEToevXyCRZtMnmrTFj5YoGXJrM2hzaU5x8R8dYJvJWtSECLqL2d",
  "key11": "4qb19in1QCFsNn8u8gfahJzaUJCfdp3SrLCrTCQoJvbUqbH7eFmgPrkYoUnLaPmU9wRUJw3vLhsC8oLhy3eiTyE6",
  "key12": "3rHpqX9SqaURaixC7fZdbNzF16c6ecZUtsYEiaBGVmcPmM8u7h38dPT9u4Zf3fXgTaMW7ryRCepHCU4wXc2JSSef",
  "key13": "24akqWzFbyeq6eCxfjKngGWYWzuuWjbatUPp8As8pY82UZziNeupE8cRReha8eoZXnQj3Y3MxVu9BFdBXAgMjar5",
  "key14": "3MnY3LiL8mqqQ8sY89dNtyjipmYK72SA3eEJY3168rxm6QkLH6MvcJGmsmfpUCJ1SDed1Mvt8gvUpUALnLnYpyF8",
  "key15": "3SEdTGjQ25dV1gcmdz3CT9prZjys1j6g4vEb7p2Lc6fec3CJzf2pH6FagidrsRS5TGvnA3PHxvgEfUX4w9SwehLx",
  "key16": "558GzX6vXCsGKrCoHK8onrdXs9f14fAbHeqff3HNmHsLwJ22AXKNPGxdBYVNLw8WFN6hoSgMen2hmrvqVofBh9b9",
  "key17": "33jwjGW24hYSrthUQxucqN9BxZ4n3UpFPPGbYUf9dtsbBhsULbat6MGR911RoAYjJHLWRQF7z99WToEgWdpdTcke",
  "key18": "3dYkbXUzGid38WGrqptytC4vF9wbAG9FixtceUSoAvPuRRrDJfw121PjuEEKdcBt8jU9X2GYsBCHmDEwQbNcxCvM",
  "key19": "26pbhfnRijk4VVqZ6BtN1Z6syagct1CXENECkb5xnpGvQbMU4kuVEBNeCiEy5nCikKQZVT4ZrQsxuBpebgw2rQAE",
  "key20": "3L8pnxaFJC9GmqrHnXeDXeQNKCpHW4K4DvGyBysqH4CqR9BitXDGjPhpP8znAexbXnKnVbGDLmgGDQwEm5GMzbLj",
  "key21": "4icJPAirwFABi9XFh1ncSBSiUAWzckXSFzP2nmmoDziL925WiyGDkpLiF9N3a7sYUnfvJ9fx7JgmH1M6vFfnR2G1",
  "key22": "35ZK26A4RXfWTq1Q46iYHmjwYaocCww4D3HNXyBkZU4S8MqQWCTGKSbp7EfWGYn6oPL9HN3YzsXmQNZUCXTMtM85",
  "key23": "4TZ1UFF93HP8u9h7TFkVtkVxMamPbPjpreGBgrFaJj15ZzdfJ7WMpeVXxDqngPyaCb8nLjd32WHeuDihAPHQWiyN",
  "key24": "4uKM44mhCYt7WU53wJNXgvAPpvhPdwXmvaiC9YMoULf54GK5vzvTKZMWAtUDLFifXsjTpqbW1uEPfcsfctutFV1N",
  "key25": "hVfLo6bRtvAdm7Gy9Jagurwc4CSmQ7ehmCGq98bzMi3ALgBbD85LW2kbU1bt2EognsYjukxvANZLcLiLviFyLXv",
  "key26": "3ZbdF6wgKW4YP6gpmuDNauTnjgneix2i7e3vszuCezWgjiVqCNcnE5h5N4DVz1CrhySP9SirmxWZxEXhgVHiqUHf",
  "key27": "44GYxtSvKDYdwDMgrmYT84V1kLyVJ6W3f1EPjcnU1L1zPBSNBvK54KPCYHqjnWmS3j5kpAcmSMM9dnAamHqGF1qH",
  "key28": "SPEe6f45TQr95NhaeDNoQvKGPkZDVh8BTukfuxEsgj8p6RzRdtAkS7aPN4EMAiVL2S6iqPjYhVVHYdPFMaBc4eK",
  "key29": "3mN3y4KtHefwxuN1e6x7S9W8JVZuPAD1hQGG91MmpvcCNeQUUEgGGfDYyhkcG1CVW7oQA5utggwmfnQVL8iWwfN5",
  "key30": "4d5mH5Ji6p7VyYVrtVEvdzmJ2w12diUnNWkYZYeQZQyXkeuedpyhbLegmMC2bNHKiQH5Z9Aw74vK8kyjc2j85W7R",
  "key31": "3J82axTH6rpkgwsYoYcssvfCcWcjpni99uxpPoGZiFyHbU1qkL6VVz8PHRQZWCSxLVzGQkr5RY9V9sexwebHMFxH",
  "key32": "2LbogBeD4JX7AiAaPwnXNdAJE5AKpwTxgxM4ZHzECs97LkbcjQieTe3nWbnmqEnpB2cjwSCe2gdCH77bB31moPv",
  "key33": "2GpPaTQZybL1E7pjepSnVzDpALRbaZGNq6Js6oBu7iaw9N4j8KHkrAB7pdZp9AbzoTb7hdDAkRfeWLztf6XZ4cgA",
  "key34": "4TGDHHFn6sZLx6fVvn3R9G6bYAeWnhhvVH6SzPs8KEnAMfG4sVKmAFwDzUpC4xKFJbZ1VuqKd26J2Hss97Xwy4DZ",
  "key35": "25LeRdRYA5Urk76gh8HPMg1bEJZuGvjzny7owWmvG4H5Vsv2hUteV595amFDMEy62EUbfYtmJsJo8oZ877qYfb7v",
  "key36": "3A4QxfGj85YCPuduttRQW3vQY1XqZ6phBsRmN2ZmqkrTKnZj18MAwBURDaNDnZ9RJj4TqWr3VxpoMG9rZK7VfDjW",
  "key37": "2q25jyZeCVwsd49JETWaKrmjStPGCc1byMcpoCez3spJdNTMeUaFqnZRduD3QmAm9hUZgjJeJqz4CTPhNeDRHuyV",
  "key38": "4twGh4x2UjzxztRUSs9sYSbgzjBCrnaEEdS4Rdjv4fSgEEHAg3UyppJcAAQyxpQU5hyybsPHoXQodbYwRctfqUn6",
  "key39": "2xi3EMFAMVhXMSzUtGGCp9RxWfocsfyYNnufogKQW7jnrjKSFeptB2AiRSDHNe9DaxZ332NXDBHhnoMZXwfY5Gcz",
  "key40": "4QUBVMec8egdkWoYtvxeos6ZgJRR5AYsLLc8bDJ5r3X5BdJuGSnx6mDtqfmskLoFA8W23jo4gsyrbwX4AK48QsPM",
  "key41": "4vdzaAnLRN3q5nGD3ApuFppCFJbhhT35EiGD1sT7jSJXEEvFwDpyQQz6J3zBK6a16T2uc4ob1H1HiUyK3WuWUX3b",
  "key42": "3DkZ1qDmAuKSFrMYxaBPcYp6MrRt3WkPii69K3xtZfSvA9b383Dje5nDoAmVWNVWGCigkt2YmGoMobRTHuuuiXNo",
  "key43": "5pJNJ1feMoFcW6A9wrGWiTYiYSuo6cZJcphXhqAxGUY7pZjSdPqr6Ny7Pb554tszjkQX7z15VQ3kJV2tozg2cAfU",
  "key44": "4E8UzhvKrw9TbaxuFRneSpsT15hLsZyoVTw3e8aTnC6w9gU3qWNvcESW8JZUcAWD5vrYTtCjrpyWjQgcNScdrgBM",
  "key45": "5rEuMXQNQ4ZYXj2uXm5gBzy6SUG2THGCktCddDMrqxqtrnxAg1miWAMPd2GnL7Cpzeh8Ah4T8MvRyvjTnTB2xCdE"
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
