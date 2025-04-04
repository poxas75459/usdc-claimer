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
    "62bfgfF7FaZJkxweaBEiMwxsYJNCY1bHRQ8kd6k5sPF7Z9cpCbet6vm832qLc3Rc3ieBLTDgevyubJJzZKBRen7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xnkgm6yQd2ErSsEi74gRKSZvSeon5iYx4w3tbDpRiFE7hfDgm1yZ2cbn3BV8Z4wFywDRR5EJFWo2Hfasb599SqA",
  "key1": "3BDrCeu4TWH9nNwvJVtvMAHweszU7ytnTmduLXcXCjy1CjA7iF44pCcu1K666zDzBFRdcsdjGXJqNB54fb9RzrxJ",
  "key2": "WHuou5kiKpgveu4TaRXZEome4B9NBLLoXT1my6CnbPwfq4FAuckHosvZk6GuxUo9BmhYWMgV3rxi52Ai9d5Zkx2",
  "key3": "5166wiCpQykNfA2e66ASNJfgAJGihoNnD9qKcnXC6fd76NxJaTz83wugBJ4mSLi9az4buzNaoqs8YvqbYnuXJgGi",
  "key4": "4DTJW4Wo5wuiEvPGQPwzE9jWKNVHkintEcimK29g713Zs4VXHgHbT31rE7E44RFDJga3X45aoXkeXdsX8j2oLdcU",
  "key5": "5YnhR2urXUeKRtt7oURgxdxMQF7NcVDwEYqsiyKQWddB7RWHzSv9awEcW1AitN1mLuvjqatA5w4T119XegzjpCw",
  "key6": "3gMA6aGDw1Kpne8k8bbiWYbuCkMq4GS3yty9LnQcsrvcy42s6NNiGcNpewDKmM6RbtdpLUDi8YYEiFFmbpBYAQYY",
  "key7": "AsAwqfew93NiKRT6FQhZmPo9YoT2iHjUtHo1bqqXwMbR6h3485gxTE5X1AJ9a73s37mw4Z2WBYyWBKYL3tVGUcX",
  "key8": "3g4tbr3dceSUqb2q2Hj8tZRPccv59yLq49dZ6S4f7TmSAus9UDTire8pqU8WpmTvgx5kHLtN9esgs8QokSUbhfeR",
  "key9": "2PY14SYTB3pKf8hbTimtKcReHKFFmu3CGiQLk8sNEj6LecgjxnFZmYDDusve7pnbgtauUjmD2NPGG6TAgK5YZPcU",
  "key10": "rRrtpEZGtxwwuNgfNzns9J61Q4hwP4S7Aipt5TddvAuGa4b2LGKkRvUWcDzSBzdzSjdoKJc1kXrcXUTezR6iCKy",
  "key11": "27FLK6W8SakXoJEQgUjhffi113yqzTmXi7PmpYz4JNub29fYS18BPA71TCYWop8JMdhrYXe6UZojdCfsUYQdRdvQ",
  "key12": "9Ngj5DMWLprv8xwPw3u61RsR28FjRAZqBj7PUei8xs8tFaLvVe9uagdGNucAJafRmpSSNGrLfsLqyVP23XRVxUA",
  "key13": "2Tn4xk6SdWfHVGXSQFLmC5QVsn9AtSz2YbedBbj9992QzBAUtPA1ji8MUXRsYbUQDKN6RSj9KpFHHvQ5XHfoHs5k",
  "key14": "f3TQthrUBbH9CJY2Ys5rooRd225jq4fG3GEWxe9dfPR3WPgYjFvYnvGXzjhkUJgnpm7rBqZ4SvuMEPHTUxg9hag",
  "key15": "3MiPYv99GchjbJQqDiH76b5RnajnKbyYBi8MuhvFJPwDoReniTFQEq6jCve8BT1P88GzKRNz7HLjyNVJqzJdJ7Ry",
  "key16": "5AiRPExn4DvHBJb8j6rURfBbFx75e5HuNFacsEjE1nXmLXhJzbShfUmTc7jYprnmubyq1WUrLquwufkSvfeuSvuN",
  "key17": "5FMcpTx1YjKwk23TbULxiG35AdGgvxhS8TyeR86hDa2bssFzAqcryRVFdF1Ne5qFsXkkRsKBEgERYdUq9t7SbJ5V",
  "key18": "2w78ro4MAuEknsDwr18HfA1NXCJrUaiPBn6VHhVEJpRcS2JGMWSsAXcT8GCw91J5v1HwuN5yn19yXvKfPVsodwPz",
  "key19": "31Z66WB22e9ynRyZgs4pAQdAzGf35eUruY67w7DoAxzkb7ToV6vdJP6PqwL76NBbdNUUHyizGQrHAmxp78rhaL4o",
  "key20": "5kWkhGBQAxACWhJUymxvsWo4G6G9uLFenDWVfkZvzcy3AzBU7CwrbLaqUHiLg94PnBty5MLp6gLekqoXkyaEjMkR",
  "key21": "5w6LdiXkCHBiwd5FAHWStGCuxt9k87WF9sUg3RAGJf45iLPWSgETJo4Rh1oaWz5ZYHUNkR7nHFzDWZEiFpiszGVd",
  "key22": "2BMF3iR17aZWKeP45w66MNBXrD7abztNhF4aosN54muhM82PoGhMDdN9DoLsFDKTU53aAkxDuqE3mLNtAbznG7ET",
  "key23": "2oSrYyChdbDck5HbC9WK6Z12HMNaCTsqCrJs1JjTETDtE37mDqa3aahS4m52hUvPZSveqZ7BTjwfvwHCE9gRFpcv",
  "key24": "61hfbrvG7MPor5pnuGWu7ZoDk4jp2vgGPVyDNWWwbsYskbNuCLFLxiNTZyM82h81tUm5k88E3gv9c2FGAB6PsXNB",
  "key25": "5fLAEEtPQdu6kTjdxprMAh8CUJnRPh3BmTNv42drQaay6ebDn78B8LTdGscDZus6X8h6JXdnAEMpX9knpZubdLU7",
  "key26": "5sEVt9JLcbuCZa42SPxoes5J7bBQ8YMGL45HoM68x3HoYLWBQYX9SCpBa6uJSGeQ9CVXvWWBB1rc3GsedLK3ko91",
  "key27": "4WrUu8RvjZgk7WUqV815gB1SzQqTtjtUczoXcn65E9qDLCamK4pjg5Xs8L5wgsBTptgKycTwZu6mdmnbtpwq8WfA",
  "key28": "4obVARsG99o14Zx5hvFciN5g816gaEt6uYhiJ6NqoR19P6vuGQyEnnYWN519tzqzcnpBWdkvezPU2WAojwime1R",
  "key29": "2eWwesQPLujmt5BhmfYRjzLK1o37wte6hFuA8ByvPksNFrdbn8rZea3xosjADAAD2pq81GTfcBCy9MDWWvbsny7t",
  "key30": "3ykH5RfrvQcaZB1XXEaXd2w9KWZLzHtZg5Cq3kVx2XzHfDcmLhGRSKZshMcgh9Jt5ChqUAzab7gF2wG4jGajDGfm"
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
