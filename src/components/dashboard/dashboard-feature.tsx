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
    "6HVZMiBAK23iJGKek7X9ofh3LyyuRXtJVwUihQgJiBaFvaxNqQVN43RL4dd9uw2u2EbLB2Uiv6K946XkGFpVBzz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pJWJPQpjWS85BqWeSdudLLPC1Znt1YJqZbArruuPophPxQuiqDXZQR4EbrugcBFg6aPq9Eitt4HJNUEW2pYydrs",
  "key1": "5McgJJtgAjm19kxafoqBYSnAJxbYCXt77mjkZtfqirMdx63iCmQVUsWqPmFTwCjQL5xUKSyNM1gcW2H1F4NMFSPM",
  "key2": "3hXJVf1AGLg2awc7Zf1PhjMjcaFnSS5w8qxjmmq8Yv7Non6W1scmpyTvvofd8jsPvHqWoEMam6ZEQwLgKcm4mYCZ",
  "key3": "2JooXCPMCkWRgdUPj9QjUmvLr63YvEJwHXS58KCSjZ7VHeTdCYV7oZP6J1JSkv9SspaPMNfyXhA6A7QzNVLerwsJ",
  "key4": "3Y7mb593CWu6P4o2BHgNMQHKmBP36eP6AapktvYpmAp4uhQHTYD3kMg81yUW2uETYnax8cUCwPboGTxJfAtgmoHB",
  "key5": "4LFGdbhPYvZSdrJhV5imSrEgje31JysHU7JMWihpitoVAzAjg4dhGWAWoxx3FRRHoXfuPUQPsp56qGrGD4iR2s82",
  "key6": "3DYwtNhfum1gT6dHrMomSsW5dMLmtU7izYQvZyECoHeBbTr1oQEtU1xNr913FnKkZv5e88dSS5GiuXyhqoCD6xu1",
  "key7": "4HrDpkuKcS1ukudjoAix1yYPmaGu7w6mSiKbhboPtAwmx9RjdYhcPmm1oHLbHtoRyAgrzpE7Sk4UCSSEn6HPCGWp",
  "key8": "3gm7QCP9x8t4fdNnCme1u4xZ5o922MLrdZGPywXXY8JfRfV1KWed6TMS622eBuYtsVBkpY3ATF4pqsrWG9bH9WB9",
  "key9": "2YeAvD1RudZax1KTK7Vvw2YRduDQPZogpcxzYRs4Wi4Xa9emY9GEc5X2gEgFGtBCb2FLEcAKM39SnzXTQsrSksF4",
  "key10": "5JxFtnyk7x913Udk6QKsiiPGFALvT7hMrp9mbvqZTULN3nXYJzrwr8a3SH9XUbbyXZ9RbZy4HfMKf1B7nuBftaua",
  "key11": "55dk92paeZPUtWS5QGVQvsUNgQpkjozBEXF6AcgVhmjhnBzdMhFh6Z7CZeZevjuSsbNdFFWv3ymC1t97rt25pjMP",
  "key12": "3FuQS14RAh6WhYcgigJyqnakH5XXHYp9g1TgHShBBfh1oMcjkFUiq6mpskVwRR37roZPTKPLbduANw2za4AX2o9u",
  "key13": "3AKoAZisbDoQX19tgh51j6qL4L3nZ5jmMMkkA44dynJuBkEbsoVBigiQ9ynsP6NK4ByCejZGEsqLwCXdFf5iCrdn",
  "key14": "2cXeDMV7mncaVnu7W8ie7TU9isq6cvemY3gJK72YhRNW3ioRrEyxvTzWzfoei99FnDiSQgpfYpihUCqAGuhaqwwu",
  "key15": "52viWqCrQdS71Z59UzgUqEgdf1D3rPHiJRPVPj5YoyNNmbjpvySokPLkycRMSEerdtcdJkHQNzzbUQb8DnjPTckP",
  "key16": "3xNQ14d5TsrKwrzmEFqFiMLEcKevhmqwficHR9xCv1BTvLzYbsB6FDCF8mbvZ31jvQLjUxo5Fw1CtJVazuAArPqm",
  "key17": "2y83UDxzF74Q7pkvpj1w6XY6UPgUch8GcXxeiSAYg4gXquqND5hwgejKx81u7mpm9oR5AdeZhvXqNMBHoLrkDNDV",
  "key18": "uvo1wWszCkmAArUMnpubA2zQB2xNp1Hff3yAGJX895enzMyQHoyyZCgsqxHC9gjZHbgs2LdcxYpXiPHX6ESbKTS",
  "key19": "N9jejoXqNNwQq7hdP82tBNmj3oxjQdV5SBR3V5jSqz3ChYHxMPu8A81skHu6dxtP3nXvkNs2XWJxG6ZHvGAM28Z",
  "key20": "4saz4ZsDnacYcHsDkGrj9mbuttMSXw4j9sZe4gWEjyEFvPR9DX15MmtqR8LZzK9KPEPoyfKvsw28sFp6wSYKeyK9",
  "key21": "67eUiV46dviLP8AErjTtYqnvb7JnDoSC6CuzG1ZUvYwqo9mq2cYv3yE68mgKhq2Kisk3G2VRThppRwRqCEgHHmJq",
  "key22": "MgM3L7dP3GKsW88KsmKjXad1RB7epvKgGUs2oviaZFoVj223bizbYKi3SY4ttiXg5X9x8QSsQpx9f5TKLAGN1gj",
  "key23": "4JCv8hEyV1unyQDnxwbbheBM9nrGmAGomieXasAheGaoSU6amwbEmwPb5KUSsFwsj31kEvzUJfJo1VgtmPrt6KKw",
  "key24": "eN9iE6PGakTL4YGTtP7ouLjC9yQR34zUD4YB45iiLYMdVmLhBFZU8LvuYktggovq57AHmynxC16G33s3L3b1QvK",
  "key25": "31yMt7UkSF5CiySsSR6crT3jLT5GrJH48jKn8fCKxAzsoY5En7koHEwspjeDkpcXYk6FZeY19LT8Qof5cS1LLGqh",
  "key26": "3adjvEmCcd42danQFyoewywiwm3n1GW4pCXe439vFJpsmT5VZcdu8kyaVdVypWvYtUSHYqL53P8jjXzDqiYiYpiQ",
  "key27": "3pLJuhiJd3o8uEuPv4tWUTxLW7UEQnkfNiwQEcvZRVb2hjUmcTviHVNNJRzxV9TexvYmekJf1Gj1EPZqMurvTK4y",
  "key28": "5LbWEn8DoPuFcrYCQviJXnMfReJnoXo6ceznMUGXrLhbtpgKnBocjnwHuxCwYykGsEjgEDarhSZLnoM5vSmvNieV",
  "key29": "4qRTZDw85rBMCboTuxyysnLEqhN1eaHRXFadYrt74AaLE9zJ3iv3NS7pn473moACqHkvrTsCBrEE5zL6KWt6ZAsH",
  "key30": "2abGk2anAc1FEwdhaiRiZGzxqJwSok5MAT8dYffUMCDiBzGofn4jFTy4hncVq6jmtbXnhNTeLcXeCwaydZYf43sj",
  "key31": "vuwWxmfk2d2avPZTJLPMnCHrJwkgpjncMZR9gVxs7mD1JMvti1Apj5Nbpor7Psi7H5tAwyHmFCAriJcC9i7YzWs",
  "key32": "26gAwqyD2WLnFt3HNS76V2SWjhwxysyFsYCtFvXgHJdeXj9wSarSxhjGwE7MHAMe8dfeDwUY1Hy1J85uGwwzkD1m",
  "key33": "jVY1Wnx7SUoAsqDds99dYmnGg4f7QEvEHV7sP4iddJBvuJiH7eVd1BsaYeN2C7n6mdG6N3v3L8fQ22yuxPMLx4h",
  "key34": "4pJgPobG5mm1AiVKo5DJCNonbnjxsRRLNctpPKoHvWn9srTCf7ngocRNQcsYy5Egb7WaXrHbRyMV7sLbNENqk8s8",
  "key35": "525YmY4ZeEQLsBe8pDwX4MPqZWockYs6U2mugyp5jnQKaQhUraS2RNtkHNB96YFpLCkKCXRtKTraD3UGUys383n6"
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
