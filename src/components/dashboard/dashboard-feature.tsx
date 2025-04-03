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
    "31B21qeuvd82fX1Tip2ojR1qppPDAdZW26VbzDpkUDZWEQQboM9jnWpoF64g9ACN9r91ezV8FJBoLbGkLntYhhit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rhkgDguyhyDohN1fE297kfuujN6KxipuC4D4GXcBndrfBgaWTXnxHN2pfKhFGSfQckTmvuu2UncF89e4g9xfmYn",
  "key1": "22Qs9FnTm1zfwnpUaCeEweAeaSb1DtGY1FkHsKgyQTqFxcak8eRzZ4xUyhgfmUEYtmKRQ6QkzBoDvxYDb4rNtA17",
  "key2": "5M1StuvXvVF3fFdyHQLAg5kKrfSDcVb9qRKimaGcrvtAnJHBcGZ2QpbRfaR515Q2J82zUbrE5x9wkWXxixs7jjFo",
  "key3": "21a3Py68muZPHyJFxLDbixsPj7tj93vw8im7Kis5AMJ8mGSix3BeLzNWWC2QTi94FxwveyTxtxtxDvArt4trb7Tr",
  "key4": "vuEU9CUE2BtfdMuKWysYHem7FP1LPeqvzM2r6YX99aew3yJ8KTxJwq6XubLg6CNh4y2bUtpxmuKm2fMfWmhrTDh",
  "key5": "3jdspgyhQ4wgyvj9MerJWsCRScd1bZXYBLiahD6ihEVDn5m2PV4NZUGgdVLM34YSxfPozgt6yP493zAqDadjWRjY",
  "key6": "4Jhe9ZQbF4LxCGSam1kY5djQGaEN5SWU3q9Mwk4riztQKMH99yLShDi7oFQbnvV2QoPw8ECUKtSChsVehr6dd3op",
  "key7": "3twB5BfRmYyV4HcJ2kwfkPmABiMQkn5zLUB2dffTVb8xfCnjb7QQHyQaHNm8FdT3HQZNoQBgZz8PvZFyNuJ88x3p",
  "key8": "63BsF9EQosrP6bee4p1XrRE9ERPmzoE46k9uYENwhVT7yuqzvbbpZSc1qbQanYLo9c8yyCwsiB4p1A1DqKmHNdpm",
  "key9": "3EbTJXvXv3gdBRg6CS4vSQVfLQzPbXvEFzQKsL9jHHfahNpoZpAFxTSM7ddWNyBUhaSMJg9AsaQxxCLNtXFu91iD",
  "key10": "4u37Q6RyY4gXLraLoDVLbfThWik3mPQNcYnvyaXJM7mvUn8bUJzpNHyF8VmYEc5rnyUqEynji2BeR1NYobuDw2Eh",
  "key11": "3WkW4oUnMemhZQgzDsA5fAXHDQC53exTVmmvQ26EwmMitupNQqtVXoPcw3N792ZnGmX1XL65jZ3ma3QaU1F2tUsF",
  "key12": "57BfLE5rTtpG5PdtwK2t7KHMfhpZFMUbCJ5fhXhxNT8LPhMJfALophBkNDrKXoJNzTgRUSewjLEY1sHVwabJDKv4",
  "key13": "QTEKWtrBep8EiBqAvje6LPCKzE1VZgbs1BcQfZPUaaX33bXqLCADJoHED1cYZZKDnzhcgSZRzjVhHLzw8aEzwEF",
  "key14": "3pZsjMfKWZ4z5b6q1wXxJbHQWEuTr4GzU73zMfS1FzhxX3PX3DqPc44zM9GYd9Mo1xdLXYsSDkHPYQNS5te1xSGo",
  "key15": "YNQdcUK8BacqibQKqr6vccmCoAoGD7Yh99VKwc3RifmKXtpJ5UEos1hdBR7GHMag2hyoGeJS5aNRhSU8ineMANc",
  "key16": "5DDEGikZz3KHW9WbPYQz5oU5YVp8dkSCkLacMyBWEn3FE6mqyevX4AuNuHWuyT71WQYn4BqwY5XvFBBrciNjKqSx",
  "key17": "4VZdK4AfULw1wyDhL6ibKYQHtXgJkMJ1MkJCcE3MmDf4b1M2v4FfwpRWEk4T4w8nNYJyFzsGKe8CtZtZFxC1uarp",
  "key18": "py9s7N29TnWUK89k8LAqx7UqZ6HvLvkxUE37YdzA32LRdELapdLawsvkLj7G8vMaeu2XgRQ2jvqtNRz1N1EccXp",
  "key19": "3MqVtHCLUumjXXEzuU7GTZsJaLFzfQ91XSFbSHa4X4MpzaHMdFdeSDY6SD4a8zXDWZkkvbjHbNTBfmch87LmRVQw",
  "key20": "37C7AyrVkr8hKyvdswGeZqLserT6tvAYRrgQRb9AFT6KQZwiMQDjggU1m4uyhmz9aW2Xb6aXn7bU1JyebWVbmoV8",
  "key21": "33jreCUfAZnhz6MMNQJ8b87qmtS41Yg5NT4QfbckamRQvE7LpP7xQdyerLADiJjuay85bZKjFXyuSReYZDCHts6L",
  "key22": "eMuKtvfs2XUyeZqnDYsyx1oxGXrdaR1yb7Akct7dkK3nf4icQsvEW6suVCB6JGprQNseRxfpz1X2cNAxmxLbp2i",
  "key23": "2kw9nWLk9inByhKrz98vxJ5GWhoXeygYGXVofAdNqamg6pc1SDc9cbFnJuw2yg8SrVdYK9pCU1ypUBJkmdaduwzk",
  "key24": "5JbFwxt8Vw4EQ824qSFzwt5m1ZbTNN72vZPDwVnXrS3Hk4yvTYaqvkk4So9uBtyWyuNakxpDPTjVvB5Y8R58fJx4",
  "key25": "2hMhsZeFmcqEq8M9wcLgsvbmSMviWC8rbPaNd9ZdxR1ijrGNvQh7gs4VttxqKrPKk5arHrPSYYiznixbLKBQmVNj",
  "key26": "4QHbqnfMTc3NALugJfaezgj68VvJVL2yBLHfRb5Y2wZ728ngvLxdwuiM3CTJR6KFJ8jEsEZ7KCok2SBqhsoECCe8",
  "key27": "rCmd44KQmoR7QSsdY6LA4Fwehh4yjMFcb1nXJCDnAKUSnsRVzrhiKXVbeHX4mcfcumvTBDuiy3fLLbtNTVLwMtp",
  "key28": "2DNeNY86Hd7gdVgyxWEixL3WHrHFNH1r9HfaHMxpTZw8T8bq1bu9P6637SZx6QGtkvXeaJyYkGuJSBdvZB7Vudao",
  "key29": "4EZemJoji6EjCuKtA4hXXQVZoM7uXjeRHFHKZLC9ciqXxENym2gS6segcQ3wuWLTosq3jdsH9MPqsqkKxsS2GeNC",
  "key30": "5HpeP3tTp5HXfTfQxrosMsqr9etFmycF7msccHgrX8UkYR8fjWHPehyL4EuMiyygP3UYKC8EZuqYy7pbq6tUbipU",
  "key31": "2JDsapNqJgj6uhRjKKcFYFCGSssbhy2MPV7HTVWVWf2usKX1nWUWL8vcww9HPUQYdrm7LMGtpuPg49CezqcYZ5pR",
  "key32": "3MEMemu2T1CTnMtmhaHY9ZFnNSQ8Cef4nBAAJFLXQeQTTcYF9zJCBzzq17oZzJEkp1mycMNrHxD722LziLreTb7Z",
  "key33": "3GskbJyPxRqTJemAMRendeHydV81tFzHMfm5Mp1aYWZ8NRv94gFjAog7vtKzk8dGSMZbBmuGqpSfEtHqrdJipAp1",
  "key34": "4heb7abxcVVbWEehH5R8BZvseAjRTc1RpKSAZQzAsThkkhmt4Z5DppREM8i8cs6S7vRzHV1zo9oTcsYNnd1jgJg6",
  "key35": "4FxLs8zR5qFU2TJMSAqPBXkh32C3HGnVT9KahEMtMP75FjBbQbE89ZVT9fm8xeNq9CDr1Vp3us5ktsU8bzGpeZP8",
  "key36": "2rNT3nLAGJTvZcbZCL2KeSWPBUSwVR73PZFEW9nkkToSMHDBh8o4ZBbncVkXMUrsmGLSVoxRefhVUBEYQ2EYrxp4",
  "key37": "2XGp6UiRv4vTiGnj5Hx9d97A9SqE5YHEx7Kh3EvbwpWgDu9jTJ4S6T5QK5nggsX2brY7H7n7aTNthS2cXaqdTipK",
  "key38": "5mrrkBxxFNm5YAoXkC1qZuTD4aY3XkfmT3ANG8Hn5CM5K1Cy7p94g3e6YYGjKL72dbFS27uhzLaFPTdFTj4sh2oG",
  "key39": "4WQCCwSao1adcC1AKFiKEpNwHJqRH6X8zj2PoLcTNrAMyLZMZV7H8hAp5fhNH468t1S44YyiEmqA7uP8jjsoZ4fS",
  "key40": "2ZhNGXHjEw9noMPG8z2Hnq5EhhM8f26tztq26o6yaqQjEbwRLuWznkFs8mhMkXDtK94FNQFmRW4J6nWzJV4Zv6GH",
  "key41": "4b7ZGt81A4MDJUaQ9D7dtxzHtp746jGwSDLyAzi5jz8DH4q9JovbdxqTx82KyJLi3F9ds5ggmnvBBeAKMm3DAEs5",
  "key42": "4nQtmmiKTdLL6XDwjtAwFpSnRBe16vhUHnZRfQG9XeoMGbnAaDNyTFD9k6Qur2rzusUmJutY3D59GKzArKGWDcfK",
  "key43": "2R5czY8FUoTqo5HEryfHmRPoFbrpdEoWWyiPSoFLpRZEBW3Ji6jq9wMsBGwskwp1vVsp86zMBJ792RMCXJLRr17Y",
  "key44": "Wrq5ceJbpQKpR3NCLEhaDUCLbLY4CJHVzzvn21hxfxewY8j7ni13MFSMo881Ds6Bc9cJtkiNDxXX4CRtaKd9NLw",
  "key45": "4u1wX8EvXi6HCH8PutYCcE1MfnmyX1NCZXVn2vYEsh5fX6Cf94BdBxHkehGvqe7XriRxURZmvbir9h3ZozpZau6G",
  "key46": "5BbUzZoJpKvT88HEsEsamwszsp1j23HNdKDUgDdoe4Leq6RFRRQhxb19vBuRGpLK3EqYavfYYimf2yVwNVPvgBMD",
  "key47": "43CA5C6ZwtwHMkDvApMaRJMybohqhrM8KehqWqDVGjjXhMmPtkbSZwV4MmQgd5Tk6SE3wohn13zGbCuX6CWdzA4w"
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
