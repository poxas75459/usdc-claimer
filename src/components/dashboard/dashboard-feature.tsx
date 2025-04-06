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
    "3pQQsBArn35j7yiJ8EXUhdJtt1t3kXZiht1HChX4Y4yCCdut9YwUZywWCqyx6TZDxaF2tp8td3YYmVnrHPUrt8VJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45EAd6uxZfkbR15f3hdEkU6UB2RdkemgvXRRMGmUC6EQV6yMgwyF3BzLRXVKDb59vfWrovJM8qXFwjq1KhaBGorN",
  "key1": "4vv6wPfXE8VSUQjv4cXGxjqvGuEgmwFMGV1qpJk66KAAm8DtEGnXbJnnNxewE8TAWqCtbEJKPxnCa1G3iBWvw9ow",
  "key2": "5Me7Q8UqV3VX9SuiShEqSQMUQURk546vdu7rpJxbFoL6UbSVeSi9k3MZ4TCa3CqVVRvkgtsgjfsiFA3XS1CN7mBJ",
  "key3": "618C3rxswq43RnheVZeSUZqFZwtYaS77PCLMtA1tgkKCieJPjangvNwshs5PvPHUp2UgDpUbzZ93YsqH8JQYpPGh",
  "key4": "47xELxNDTkQxH928We9aqZoCqTa7Emvi6M9WDMNjWpjog4ux69717DxiMMphVVim5g5UYwLhchNhhitkCEKXaziC",
  "key5": "2NQwVFRzT5JKqiq8JJDaUfyKbTtTtNucurYuNXCu4X6N5ewFtQqKY1ZHvdJvQVgUQ1WBvs71BvvYMGh9N5hPWQMh",
  "key6": "2GRp28r5owPpHCQdLpkCzCsnvN9xfxxDdDTfn92ZKoUHrWh6HnAf3H17TKL3T9LP1K9fCPg8gSEpsEMdfk44e56x",
  "key7": "Mw2xmQxvZuP9fmv2UtsBVztcaBc48ZBPaLrkBqUhAgJ1KosRh3BDip294uhPfJuLo1Jnb95apfMLvJjiqXAtorB",
  "key8": "3PH6MLQyyuNVxDjJHBgTgTpY1EEbwqJne4cCaBdPckYkRxAGngetuxxnHFaQCQiyz1sJjgEhE13YBLhvGQuFgWnL",
  "key9": "5sh7XUQXq7TN1TxpjG5D5v68AaZ85vrguH6vw2ZeEeQVY9it25qSd4sPEb7Ys2YNjgv7zr3rSb8b1GLK36GraJzZ",
  "key10": "2wZ6PGGQppk5ivmeDi4sDTF2RhotGi19kLgFVkgjBVd4LarGzoUChNrb5qByZLpo2jSVJFkvmpJs7rEBYD7uCk7k",
  "key11": "5LUUVgLVXYhxZfFJRPH47sA4FkXXfJ2CgL5Pb7T5td5Sap1E2Edvrvgctba1X5CgvP5ku7y7kjWZnDrYdGABnam6",
  "key12": "4je8E7kGf5ncBe9jvcxGUuA99VwNPGK6z9hpQbSPpZjXi7MvyZKkb7Fxf7DR3uaj435XZp6T6716qzTYiYAK7RGn",
  "key13": "jTX4cj3mDTJVVwJvVBAD7hLsKbE6NeZeZZ2yHsNeaF4nLC3iitcw3b9LbUJkYMoLDWwkAoWjgseE4C1ox6G7MTw",
  "key14": "5GcaTkbJTk8jZvJpVHMcdjRGK33Q1AYDRDuFoqJsaHyDNRVQUick4E2tEU1FuEQ6Brxc4x8iCerVsQ7VBA93H5nG",
  "key15": "MkwFj7pE9CZtDdo9dsSmXmoqjK7RRhVCxUPY5EvSdbJCALy8KuyC8CifUQ72mk4s4pP8yxpeiWCDYVrVptLRjAW",
  "key16": "2gafKkCXfHcZJxbva5zbZH7jZUMbcatohRJpYrbnYg2CEqCiJgqnCpdkB9cyqzhU7UKgTgWiCstRRgSwA9AoctJ6",
  "key17": "2C5RUdbf1LHVAq1xbAmJU8C3c7Szt4iiqi8zuokpy6TwhPaVEkvNQrb3rfSsxX8y6DLKRmwi1ES3M3ZJh1ZVSjkP",
  "key18": "gHLfaEGRJgSmoKjkfhfBSt7r4uhHt1h5Ti2BgjBFe9taPBucAuyae8qX1qNHUED8KCSpmFrd1HWMxJtfZurnNov",
  "key19": "28WtRELs7kiDJ5ys5pwwERAHJvyQWM3rsXVza4raLoaUybwHA4xsTsn2amF4kXgcS99zsRebo38WMijvzPDmGMER",
  "key20": "5eE2DgFHMdH7mWR8azv35TuAdc9CkC18TayoSwQQX4EV43sTpx237ujbZrfcLRsjPh6aFM1NAGMZYzymjygKLgQT",
  "key21": "JZhhXhVhedUqvqAYTENkJxSP1KorRtZzdGjq8cuMpLm89Mdy9eMZzY4vjww6oYujUmSaGwyGPWJVdGx6YuqXUNf",
  "key22": "5YgTTsvVqA5KRkmmxRF1Dd33qzgCANWHae8GjiNQyxtqLuojUKeT16T4MPKbhtJ19rsncaHWBrFueQw1WSZ2NrgD",
  "key23": "iADwSFcRJqFJwY3marqdmdWbZYay3EWXzwx9w81AAzaxKPkgCxK5J7pN5HCivuN58voTiFXPSqY4TFhFQryxkkH",
  "key24": "2bxs8W3DtYWkivtvzF8BV8CdiYyHgN3j7QMptC2QwFiegfuBB96AURQrWRhwaTLAmY6Y9p26HUCXCcQg639EoanW",
  "key25": "5uCBuBTjajzjpx1N1HNq1nqAiBJyfDpRVaSfuABQLcL1dHR1CpneW2ww8rnFPKqa27DQuKn9zGq3vYFLJtdWQzW6",
  "key26": "23ejc3pfCUN8fDKfqFBbBGKSJ8JEQR9Qoa4N8fhvK6DVtN1kLELTizBRhxpvbtQdo91FZDhJDbQ7RxEqDooo8iaz",
  "key27": "s7t1rUAYypimWA9Wq8g7wCR57E65kVQoyFYTAvh6BL8JSdWwWSWaPEiVCjufzLgrYthxxGo1pmuc1Tgizq5ivik",
  "key28": "2mw7nD6ncFSPAwhAGKTE47ShEEPnfhhrDE1GJ3NEC3BxDxBrYiQEjPCX3a2F37e3eLEcxMNyzJvvYWo5NDxgX3Nq",
  "key29": "5DhfyWXYikEAT3HyGRkV5tEXezYKiMqB76pV3meaXcgUau9ZTESAeucGX6e6NdNKDKUGiCG3R8hhE1dNm8adg2YG",
  "key30": "5cQ3i5SoZn2eWWe2cQkUDqKQHn2vvezSLCs9LrSwnKtKRgmZREqZXEp9djvuvkqMsAChzSuAdLZ21DxkS4nyKLvH",
  "key31": "2JrQnqWU2UHTbgz1MxaH2EnPb8SUeqC1s1CkMxSMjPyo5HWTHw5gwdqsKt9yJrqgHEN31zXvy95XBfFDKQaoSXin",
  "key32": "5A8hyeVoK9k2158ML6SSMJUHLBTWazGBQC5z8EHRzhvbHpgVS8jEAV68WcwYmyDRecy8SdryCdP4PmvusHRJSndZ",
  "key33": "5BTzKj9jbWVP5yr9hTsZyUQtQCP7YjxNmCLMQwZH1zs9JeNXKKqvBcMaWTCRfmSbPKNxKVDYtbEZJGj9K4prnk1W",
  "key34": "kV2wfkVATVo4T5YXDgyLrgpJpqAgG4p2gQtfgkjpD8unBd1gK5tZ1ZD7ivAw99DU4tWWMjWHgjcc9n3K9g8atYW",
  "key35": "3WJ53kRyqoK9LVhXAN5qESpvTF9LteC95du3b2DT4urRByB6smtTybWsRBs2GUnmrQDvYzgwYtoDoLThvCJZcMuP",
  "key36": "5CeDDpKSjwGjthdUWjd4GeVJiuynQUMcUQ1avf7YnuURG97A3EYC4QD9XZvpDshRD81ycsb4W4g5JbTpWLvdiCRn",
  "key37": "N7tjkKW5aAvQQ9ScATqk8be3ijSEJP1worcAfhrqLdGZY3BfWvjKajLK3AxrQ2sSPY9NZ9ewKnVvxN62q67ZfxU",
  "key38": "3EgVwsDtVfmXpWCp4uBJJNsNC6QebY8QPWZDivvdHf1KNWUGntsHZtE2uFKUaSWaDHL9BHodrHGrjfQAN4m9vC5V",
  "key39": "D8WupvnegUPiRoeixWXdBDB2tNhxqoQuAGTfHFy5qoJDmjDAEaoFwDuxWKeFRiVNnTABKKZcGGMUHSpVQhT4snS",
  "key40": "3JhT6d4aJceMwfRaibQQzXdGbfj2WS1deDsMQV6UcURTjYsrMQj7gBhiXxaC9MngXJh2nVWb6Q5fG2UbZc73knUR",
  "key41": "4e6q2qWJbJuvnZhNSZYC1VwQ7qpwn2i4XM4yYPtdJtwDF1u1DZKdWfJskkD7BCk25DhbRm8WZ9GwxokmBckFs4TL",
  "key42": "5LwHGsDngbgwCoYAVTnN9e4vzjjUJWARteBV1SqKL9cna2dN5fDLTkAH3n3mazqjAejCe61UfdtFbFkmvgzMvhSE",
  "key43": "3UKGKHfuhMwrc3tubfaVJb3WDNjcAt7MhqDq6Mwz3VrGJzaSitwGeXw8bd1C22tiMS54dWg1jkxjiRKsaBN3Q7nH",
  "key44": "XhBsJg25XPBKSz666BfaLrooz5orePNdvt7n6LMfVFPX8bpcWwJ8RWKjzLfSHhqh3sPe7THznHCfPMRVqaH8wF2",
  "key45": "3ABTZRgCN7AxTg4SP1D7sng6qfyTsLSjx2iQT2HUPuftM74uRwStMUfYTd1dv1veQkupwoByQt9A8Drtmh8B9XUh",
  "key46": "4hLpVKoquwzmu3URzGr2LdcKaXXR9pW8x65s7sLr5EE2b3dhxdVGbEYZqKithXEd3yLDtT2eEj6MkRWrVTa2oPkj"
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
