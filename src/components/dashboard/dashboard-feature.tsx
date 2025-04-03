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
    "mKFU4YFyykUAB81kT8Z2Fwh5cXv4sdWvN3sSy9MNGW14pCzqWWuXjk3rhwhdBC6Uujhphq3bG8VyAZxJPDoxDTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58uHYCnaHYmoH7jkpLFbkZ41p24nWbd1ZWFh6ApD4nHBs1e8WR3C64AZeygreTxFeVXZBFuxBq4nShPR8VFGBMZt",
  "key1": "kMDaM9enCUsc83zBUQNgCanFaN3Yu4pGyAnn6vMVwo5mWEmQp3CEDfJbNqsVhVPewJYwK22LRb8YwXwJrQuyD4E",
  "key2": "4cmhMheZ24YNtookc3nfmT3vRhGLBhfsh74MJSqWWoEJV1ZrQ9JBtvU7xsV5gZ3MiBD7RQH4e8XWJaH7fDnFXV4S",
  "key3": "3ppXsbdspiqZLetLpMQu6kzQagPCusZfVEMb3iaiL9JdA6y8VQ12uPxbv6jhybPhXKWr2H4wwBGwhhmbWGh4DMDd",
  "key4": "4YGjqXjasDQ3VQp4fAwzmKNtngS3iy9w2Sv8QrtsrbRAnoYKyUQaCrokLuHSvWyaPaewGP7xh8LK3ngCPTuT2t4i",
  "key5": "qRxkhJT2Kg6w1X6MkqMdpQ3njaWi4KY1YKwieQfVq3K4xB8gkPsEYVKXc6UeVAQwxCVG9hLw2GtUgJc3Ms3kYnr",
  "key6": "53uE83BPr6n31zHtfNDW9aySBfTB1QHQc2SFDewHftBqL57N3a3bXQbTHQdKxoXVmHvPERXFG6pcBPc9sMQDHkk",
  "key7": "5P45fS8SCbXsZeAeuK6fTSWH7kacND63YCvngRD89sGXM9gNbzmHCsgCtLGdE6RFtn1aaCtJd7xgbHnhRPQsEBCN",
  "key8": "5r5MCzSM4n5RpiNxgHbosccZHBBzdcn1kTdMjgTiLawoUm62b5d2tMV3oqKFqA1bQzZf31g6Fkam3G64UkMEgSTB",
  "key9": "54SeamXAUrMdGEnMJZNJddEWLDcXWR1be3gXina2oQ6U4tZ5wyWV6ryrenyLYoAiJdZjZxTvye3bxqUmiQrN6oy5",
  "key10": "5QNNuavZH6SGajhb6xmAjY4J6skcGqLQcrkXcDUD9MwsAAtcLEwnKEmhrYn1dbhLqsMtBnoAgX8pSxYMVSnAqodb",
  "key11": "i69TzHnRvrfFXBdPLuAAjSufWwSiftck4ohA7N4ZgHLguE3t9gPU2QRPg9FsCsCkL5v8M8PW1jLawq2gQsM6nMn",
  "key12": "31fXK2aQBLirmfdrHoaoayqdd1rR9McqdQF9neXEcCiforzzXBYgJFDhF6B6yK9RqTgqYHv56TdB6uFFd2isQn6c",
  "key13": "3BbjW8Tw6Mx4pSDzxUZPtjvRTSE6nLQGn3RkQfFngGgFTMfayFyEzKib3Y36AhCvco7SCDjvNtxYcrTR8oHb6AhX",
  "key14": "4uihdoHrFoV8dgm7PE8biE4VtkvQES1XFy9sp559nnvjfwCwv6cPgcHURWawJeWKt1Ncz3Wg1QfdNstmrqqfV54Z",
  "key15": "2UhEPPgAPu8FCemFoyYRBwxwLquLEExK6VRc2mcrbXu5DyeuBEX91pwMGgSsSatcrLuZJ3SUt1iFzqAh3GjjSakY",
  "key16": "5VXFeE4v8qjGGh1nM5G2A4QeMceSHuEcLidLk2hp3VkhG64eShupyo7FKYDVMhbhiGqKPganXa1ae2PAqQAL4ZLk",
  "key17": "3EJ7s6kG3t7wwD1zXgTFn1GpmfP7z6KriiF7PTcysh9n6DsE4PAFu1kegHZqgJjd34R1f4YiitHDLW5oDNShR63K",
  "key18": "53aaj3sn4PkfZAi8PY2WktzdFs8FKWSDgiSVTnD81Zj1AoPJ1dK487wGP5jo9AhRS6mJK8BgyRHWA6sR5VwMTmG4",
  "key19": "uxg2jNdaU5dm4xj42nFVRvL1G2xwRvTpSsDYjqw8eL5ZFGDXEinZs83AtchZ71TU73uFBzGRbAE6xccZenqzdEM",
  "key20": "2c5foQ2EtKvKNKboooGHFxsmh2p7RJyMEJH7guQSyQ616G5HonZ5889BiKye1zXXEKKCz8RGrAgSN9mvuRaQnrxh",
  "key21": "3T1P7xaj247ryoa66wRvjiK9hTUDLpXf85VcjgEWK4Bqugcaq1GEYmhtNQo3nS6zhbPpsfCJNZ8xM5FUHdkTnKQL",
  "key22": "2J7XLxT6pZfcD3hyXuCBgevedMnKukFUUg2yjeYSxtS1TfKF8c8CpoLrnNhJS7LNgz6auKN1Tn38vJgS8DHZSvPj",
  "key23": "2Bmj8c2TkwkSbbe8H7qjmRZ8HkHeYxEfDucboqe8hdzEtyaoNVsyCk5ZD9fCFN98bHYjfLNxSLmdACW5bTbaXEeC",
  "key24": "5eCjzprsAsBNdbAG5uTBRKYBcWr894DW1qsRHLAyMUBi7XCyEQPYiNTCXwhw9iMJg2sSkuTSWqZw5owfY1NHWWak",
  "key25": "3fUkm8hAzCGKAnJR8tgjjFbwCqB7gT3VvaZy43LEmAkkjrTwrjpXqDVHDgm7xTuPtczoGQUhaVrLKyx4QGnW3qjv",
  "key26": "55vzSNoTNKKTN5F99Umn3WsU1fqHGcqhzgGZPMNzNugypX8Tm66a3farMyH9gSHe4zH3yP4Ak8gYBSJgwbm1P5bp",
  "key27": "2oVouzCi1v7AipZWKeb7SbZQpwo2WFccWX2aFL2V47TEedyrY5FTkF4thZytrsBNs3ZbnRBxDJ72zTCFh4dgq8c6",
  "key28": "4dk2PKc7Ea3s2kuKfydPTHYCEyhyEyZzQtbPMKRnNjuKAG5Ku48znXoTQDUxKAaotkuZC7vfc7ij6Jg8fRmdpYDC",
  "key29": "4JYnT6uyH3w9dgvCChcpAJ5j7aw3Rkb4SX8syE35U8jDKRqSBFHY5WCZxGbh37t6Ub8YpPBfzNRFZpgTYLSTzxT5",
  "key30": "2q2cr1iqYvKkksUi2527tmk47jnCXRc2phGRdzYdjWkdbtVCG6vsrwHisradtZRx6cM2oFgf73PfLnd962KH95c1",
  "key31": "2xp4sHg4USncPegiCqKtw7uDdkWR2oCxmSxdQaQUzqTgxSw6igH71z7Pdg5WXm1YTf8rA2ESpztBrXWG41q7oSaY",
  "key32": "3b4sNbELoNjhjBVU6MdRUL2Bunsifh7e4ojFqYcaangBbz5VbqSbiwMkHCD8ng9XCskvbX47oitD41QS3JWjNDgg",
  "key33": "3tSqQAWJ4x4vme131oKT5qbdXkX96G3Dm84wPhBk4tP1kem5y9sgsKEBnMUjxym8oTunhytdXsBZ7bkX8TgGeSqk",
  "key34": "3wY2hdNimfiqHEmwMPBuFUCkgbV3xoATFyLkrkeWTkWjr2VUJmTxfpAxp1cVaSwsS4vmTWboLkuY7A5Pbcsz37ke",
  "key35": "4QzrdTNDbtgoCGnAR5DoDB4dPqp2GZdaFCCvuRGH79RRpoKybepFQRLYAsetujGYsJY81dctCzJD6Cfa3XWGotHT",
  "key36": "4zKXc3tFYvc6bpFFmVQAAtY1ojbxiSEL4F52hxvZzD4SLbEmQSJwiWqerpNMdtHpzajTWTvEEpbRvkbHZpbjzVqG",
  "key37": "5wKw8hYHqgWSercJT6W5XEmX9SHG1jVC6EkTn9VKKgeRRURAK4GhSosYCQ9ecUpyhduMRqoetCCiAajHhmcBdJMc",
  "key38": "4rgEBdPpL2Rc9o1yjfFnF26eZc3AMHkD2UShbhxNsxLjwmQn7hT46vrMpt8arhhvjB6CE6Sr1PnpsFpdxh8sdMBW",
  "key39": "4fW6RoJYQeLAqsuiCijmXCaEFAADezcpfPY8Tz4v2Tn3FkhGhTMQjsha49Y4aENQ2TaNHKciDADGCNV3PcazQf2R",
  "key40": "5isHEvtFLvSbNZrYwps9nsxBMRuivkjsdR9QH6nw5Bjj4F3pYqK5vQ4riBQTcFXZjCVBr2uQNcVfq3jkKD6Te3ks",
  "key41": "2U6cwcDF3NQ2pF5urSWzkoSmN54gUFTKN6ameHbVmHxFNfE89DF5W2NgCYrndUuuE1jvNRa1ozzdZULRyWTniHt2",
  "key42": "3mhnBrs48GFUjTLUvJ3ZcYAJvGSHq6MaFuFPzgjyS5EziZpTD5t2AV29uJWCsjTKKEAKTjj9r1wzpeg1efUkbjiz"
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
