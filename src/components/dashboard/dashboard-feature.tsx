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
    "4gybmK9fNaXKoP6sUH3JHSUox1iF2rjyzBXpwZj9G7MJE916vq1iPqvSNCyN3ae6b6Aou8ZGccG15AqULL2ogDv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C8Rf8UfkfoQHG1g6751ZiGWCPPhpUrpgnsqCD31xMUKriHA2fdyfiZEbrfN7zPNfes6UB8sBCk7ZwqAGKLJAXyg",
  "key1": "4hneZFNpiuWsiMTTMJQcZwEJcTXB1E4pdta4nooon1BacJmkjetsWmR46QE9vhaikdM7a9XfSjoKptyaKk4xMCuh",
  "key2": "4RNLrDGcvVwey5cpdV92buApAJMPxKeJsWXdkdga4o6wyusRjWSKqkL3e2XkQRRGjVCPzAwuzzAhj4WBZMvS7e7F",
  "key3": "2pbrAX6vJyaPWbdubP72CRKGfQj56kMQLEXMuR8RgFQe5dc8hHzUpGVB2CKhGzrStizJMjXgvE2RcrYkGbopQ7WF",
  "key4": "3nGgWhknRsr7qoej5hp7gFoa9vDkfdEace8pU3MHuHYvgiz6LGGZjSxMAtsKAb4tT1cQJdBpcyVmUjDs3ZyAvrUU",
  "key5": "2DoFYCrKBjSrDbb5spa9H97hDEfX7yGm1Xcoj9X6EbLEqSDkFCjmiKLqGsYj9hC8gJEBUxs9GieRTRoK4mFqE3TF",
  "key6": "2iWAxmaDzNj1BotY1ASLpeprZJnC8BfF8vwdFVFsgw3435pfMnUDm3K2uH2JpShaFimtiqQwHeFvtB6gccKVyoqB",
  "key7": "559YYvy2jKaSkFrkg2sCsneVRxZtz4yGWEL75oCXmxuUfNy5xVUsR2vgtpZvzm31fGMGKPchwCFCu8nmhHDDxYRK",
  "key8": "2zTzJnZqCCeXnGsymrRYNtSUeVW5GDir8bcF1HR8ozn8GAbzMSwrLAuVUvvYtFk2V3nZp5Yz8sUxZLbv9Ev9aURs",
  "key9": "4uR4MWHHYFa6uMtJPKww9ChL52CvygcT13uj7JFAsWo7pjSSWfhW4GpbSrRp41k4siT25RbRCG5zL3gGv6GQVem3",
  "key10": "5udZVeMaYSjXqvrJ96rfDQeVRUtS3TDSuuYAhov8dj3dP5GLGsD2U2gRYoBX4uXs7jkttRZdqd4EDjd4uG2SpbRT",
  "key11": "2cWD34HDHkvsKgJc974yq9R4jGoV3GYjATvPi5oXA8UWAEjD1ps61dH92YhuQ7ZxRafehLYbU188qcjeZnuX56k6",
  "key12": "xRffvoie3mSj4whQdJt8cDyMznZjZPSVyLi16zmYzP5zRQhGGUYM8nPDBtt4c1FF5wo8uyMKmmXd8KRM9HkK9A4",
  "key13": "3arb4DNvnKVZ42VmBx6WQq7LHjSEP94jbsnaZiYJTnenykP4PWhojprFakUnyWQDAf2Xf2EEknsj1UqXtN6k5jbo",
  "key14": "P825t8uV7tLZGX6BtLVzEe5dyNkfH8uaoMYNFUXvcnEdxvfDfaSZ2uVkS3DDMJXk6BnWv6mPdj43GEbYg5Z6nci",
  "key15": "4yvgNfX6X4c6n54tb99RnLiQQqevVwvNTMiPKbFP264UMkP86JgvnCh38JKhWx6feAfEii6fx3zfwQZqW47FecaB",
  "key16": "kRmxhAFxvDKDgyCj8jjRB5EyngRY9h87b86jrEVp3gK2j4vgfGRxV6iqGs9FKKEKPhy7FEikt6EqV9j2ie5USvN",
  "key17": "aRmDz4JjV6E3ohKJpMuuVgzZU52hzuu1b6oPU9magDQK34zaewmeRWAuJEWjXPgvNY1QhDJqvsk8BTUGFsEPTE2",
  "key18": "45LxWGLLuJNvxp9WbFcymDcyMx6mhZDRjqcSLvCxcV84a7jE76wcb4g2yjMpUjWMPKjKTY5zVLxKfYnneMqnkMGK",
  "key19": "2ng1DjjAx5p5jKC6eiBkBSZVagH6GtomEZQiAkZxP7GtqQz88BYjkmZwHHoJ7PUPHECRL17SMk3MGaWkUFY8HD6j",
  "key20": "29RHsPDfhLAd6iZHShVvyxsdTHASkFPQfN6wmqbATX3Hjq9KXgfD4NbKpM3yG3CPqXEkqh86apHTiwPJo31eED2e",
  "key21": "45Rj5X9GgUhR6BrfwLJNiVJdbqtrwTNPpGnoVnw6w1Bc2o39GdZKz9YD3cM8PBMZ8VApTTwvT7Wrf2an8tKKfn8D",
  "key22": "4cWAUn3Vv9WxcVs5p2bo11syfhLA6nqchNKGBr9pQhXhmGMgWRH3FouCHmcZnoDP2GHt9uH3sn2eoyghDNgEgzJ9",
  "key23": "3oUa4hRd7htmyHpAJJyrEvmwrtDU7wJeeCXdDQ3BufNbXaSzwoLmu6qcfKrWcHPwiMCXjoohGMUQLyNiBLt2QRMn",
  "key24": "4Ag4GehniE4SqN8bJAmFRHpnr4nD9SKitT21qB3P38oSQXzBezXqjrvUYRH4WK5BCL6S3UrBzL8aLLZXDU3Wg1Ud",
  "key25": "4GUcXiLom1pv3XfGeEwhS3uyS99FZcbftrLuHfTwtEd12Yxyc3WPVsn6y54erJ9ev9xbqFuL7YtKbDw1XxaTmKfr",
  "key26": "3Y23RnyEizEdZQCUeRJzvsBaPf6s1BdBVTByrBZ3rraRMpxhmomTgtoYgvKb6HgBTqL7uusF5mD3qJkpVGo1nziL",
  "key27": "Fs3fJGcAxJupzV8pmCMFFwYBqb3Eq7L9yQppu9n5PWNB4KZ8PowK3kbtXQTeTzEcc2uHDqgHfMEJuzJD3uxUwDL",
  "key28": "3J5MZi39kiEt9NQR9WWFsgpJkd11kbLPu4Uv4rqhevMPosjzBEbZ2sfNeo5jgQM8ggFaacpFKu6XMwshCSqkzejN",
  "key29": "2n1gcEcarGn2vee7qqWcLEF3jGeVYwo7pTHnQqoRzGqHTmtsUddmR5mqNp7eA1ntmJcqGbpTDotVZDxfn1bLEM4K",
  "key30": "3Sc4SCi9vxyMDu6xc4yT9CdC4gDEcw7qrQfHmw2RKZ3Cq8CX3rnXNJbg9E1UNm2S2wAXV3t6PH16gDzkUBFuewb7",
  "key31": "vgeFX3ErKQA66HXZa2ru1qdcCFjT8GDSi9vNN2PsAuzPUDEfUetcmgn8m5c2YvDGZi8ag87vmwshqpSELeHmRSc",
  "key32": "53CHBtenYJXwnvShwqsVdgA8B7oGSrdMTNUqFtpm2eMAWRRfDrdUJXtExP2zrPNF9cCMpCnaVYzdXLi8cQW6yatF",
  "key33": "39id2zy5Hn1FwxVLz64KCZ4WjbBaHXZVaYqY95k2X5beCNosCPc3uP4kvTdybdJ5AaDDcyrDvyHJKbzJomucazdz",
  "key34": "3vYMkNqeCMPvuwzmRzkuDDyLZZN6VSxckHKeBnraXoakU9Wi7o8z13uTuA9SU7hKvsKp9EUqUGxruasohPFL4ihJ",
  "key35": "3NeTmH2bs8BW8PJnHRMYtLqu72Xpk9KoaUopQcmKwsd6VVVXeVVkwAbKbSg1hikcRzsC8etBnRoJP1geFd8bKTCM",
  "key36": "5aTZLxrGnPGufadNXQq3EFFHh76ZnDocvPnN5BR7d8hnGGoczLFwB4xAmm2B2iYoPXYesqVrsC15hoWjnaQwjw7Y",
  "key37": "5Y4tecsb6yUcNMXEdqxUqYw7f7eZtCmedu5UGdW2wEgaRaPyR8EGpttVKTfXqMzFWxrvRrDseVagPhHLghrR5xjR",
  "key38": "3NuJmsBxBqX3ZvS8Csm9LW6dPMsmqi8o7huzu5SiNdKWbfhvw7PYQmGCuHJAjCn7kNRXTi2NUd5dAR5AY7v4ZcDo",
  "key39": "4DpEjTBVLaymyuGkMNwnZVSrKsSjRhfqNiXpVfVr3TBYt8jC9bfWFJ7d3ifBMRHtCf22Rer9A8mw4ye1qKVDDGfJ",
  "key40": "2cGmsigG6vnZKKVG598p5QZD4TEeAMDTxrpmmaLwXNugTZvhDTzjUSSZA1PRUp2PqknSsMWgSLxTFwpin8CgY3NG",
  "key41": "4T7NEaAYporzgNBznpQXZh7aGQXS5rNpjsthRfccFXstLAWVqd97BbRz2EQ4E1AHqS3Q7eeHess9AypUBX3viZmK",
  "key42": "5jA4mMHLPfeLvos94sDBTyRLoSP3Pci6qC17eJ9VQXk6GQbFu8ckbcwGVfBjQopc47rsDoPygWePVC8gsy4SxHSX"
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
