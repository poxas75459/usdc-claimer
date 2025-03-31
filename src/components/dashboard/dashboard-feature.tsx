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
    "AHwZVisD2dMdzicdT8LtQ8bymfHwxxLbtHj5ELrV8m9BAxswbpewVjEx8aHPcMQZSERjPCPUHKVTZo1ieKhMZxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3noe17844ez2uVeKzzJMMfxuwhzSYtvuJ2xSuFafRZXhBZFJEJqeFkCiHtN9GiaFUMCpmA4qibTJ3KCEeRtPV9CC",
  "key1": "6hKdWGMARWh8yYQGC42dEJMySrumrtCuJvDsMaw4WWt4ZKg1KJ1p88N7u6sM9ojMbpL8Bx9GJnARCLNMPcQwo1K",
  "key2": "3kVrkWSYwnSXstMPWKWfZZU54jrNZSCaeKiyrFoTu8t1dReKkbHxEYW7otdN72LY41PSbijWPYsU8xgYiZXhERSr",
  "key3": "2KQAYtudNyDD6FL8Z4sxoBhxwWynrBygMRvuAKLg8ZJC4v4uEQ2SURKL7baC3STV9XUPKKwaNWm4RYMftCc8GQhx",
  "key4": "2yuUn5i1VKo2Be23JG3CSjQv7LC9oJEvnoH6oV9FSry8uNn7AfNSbQSmmCJYMovwxPRFvuCeoS5MnLbLCMwuXtA4",
  "key5": "5k8at6S8Z9sHAg8MksXDtzzQcX2QBtLdeVXAYMtARpbo24UFgq6zR4dLyUYMc8Y2giJX6okmALrkCrihyeXDpbE5",
  "key6": "TXRtcZuAv38CvtnRmyQ2mrh8LsjkgDR71mswcRDTxc4t2sg59vtPZdoqfsDtPsADw3cLKT6YkWpkRGSSP4CFMXd",
  "key7": "3a17Uh8XY7ibfG7HeVhMAwx7uEH3HTz6eeQQnE5uJHP44oTzLDaeaYsJBRpu3wrXX1scf7dw5Y5FbiYAQLFkgLiZ",
  "key8": "3tCRBHg8DUWFPqZdFVbUDjPTTEq1rKk76Fh1QSjsHuZKuVJ6w51KDzw9GWe95aQbduDCWRod28xzVCCaD3jB9aXN",
  "key9": "3GNACxTmjUe2UsS8howUMeRr8EXFmQVkbnwfHMcKhdR7L7bPqbz8xnSjJ6uJVbnWHuZs2fzJYmfFkALeX5PARzBx",
  "key10": "65NgrhdoTwFWjEUB8YPn7mvd4QsatAb4iNR7uPi7BRvYdT9Zc2PVV9a4g7shQvwGmesv4yuJrm5YksUJeLbKmb1F",
  "key11": "2V1sKebps8a7DmwfjjfYrruphjxvwAQ7RRKsvoSHEAjKkog7BWBpfpv8e86GG3evsL2R2e4gN8csvRgwPZAqQ8zA",
  "key12": "4iC6th4YRw3UfZgYM9m9RZoj6xRWp9EQVBe1fSSWumv5pmTFXXJ4hUjoA9pimgDJyrM87SSKrnkHz45Sv5h9ysxp",
  "key13": "3Hiyuq1BTukiQ2KhyziDSaq4YXuKRoPozPGv41jk6tsrN6J1Qc7B6XgWaUNWQJvAfuUQG4m1oZ1jt8ofSa1EZHcQ",
  "key14": "5qEuG2LpwcAkRS7TRn5igzpsvTDv9jx8qh12XsniLMVi3M2U4tegULx5mfQVdxWCo4HHbtzWSyK7AbgBUeBXP4RL",
  "key15": "5mbWFouUGQ3MrPdXM5uBLnht32JTNXytopxzjMrV3gppAyqBy8AK8MNJMXH32SxrMvCRWTX3BQq2DeAaJDxYpdcQ",
  "key16": "3AcBcrP8suRHtKHTCfzd95yGwcWFibscgf8FT3D4hD6XWHb3FiJGMdJCruzsNoo899kzPR9n1b1sDDCAYXLtJuKp",
  "key17": "3m3FSKrBAYdTRYdZaiJgNcziahXxNnx3LdqXbuRxQco84MqDcxWnJThbgsGJ8Kn3ED7ER6MDZMTP1nSiJNSGkF5r",
  "key18": "GM9TG2EdCEFCX1Xnuvu6WgL1YnoQuXms8kaReBKUtvyi2boCgnEsREMHb55hAXNDzwHQ6aZJ9fEpCKnh1N1vCar",
  "key19": "2sh19nkqq93sEfycjztynS2C2rbkDgbPmWJA7by7JjES5qKG29MpivjrKsimkLfCG1qJQdaPMe5E7yJ5QiBUDrG6",
  "key20": "34PtnkRPWKa6QWHif9QVHLxzR6Ns6pfbZiYq8ExEaVH9Qtxwqp4jgRmnrCH2ms9hhs5E1XZ3t2cWY3snCRp2xSrM",
  "key21": "3ntFxhRXuryLnmLpBUAoKyxYu6fTf4HfCUrpPmC1oMsSeYAL5YU2Xd5KgXodDdy7NdHF6XmpqcuEqz7kw96z4i1n",
  "key22": "3d7XMQjqU7XokXFMS8R46CSDLP6rYudgMnYf5AKgRGNkg4y8qZkHhMpLG8USrVHqgzJmr4SeUJ1JbrhBXX1gzQSB",
  "key23": "2ep9co16pDHc9VJtyeTiaLrFdXsN1HhfB8MJpEyhkYF4JaiKZRFENygPbta2hFLYhZieTEknb6kkh1oGFRZZq2UY",
  "key24": "ZJse3doQ3Nevin91VYGD5CC6ZKLNEGzvojHyzGemazE3DceXSxrRrEr5u4M9Cr4xSaou4x1Yn9FbN9TW2bp2S8f",
  "key25": "5Ny3ULZFaEmh5MFassNYM1CtndW9YuWBVn3A6xirdYusdq2935KPmSAF6v7GNooEypZQrs56mtDiaTEwzeYsd5au",
  "key26": "3hUTBA1wEvqrtyWRed7PALXpAbxeSn1Yex3DTPftyxZCe6JHoWhqNBkVP721DTYCwtEwB43RuTNPUZs74LcoZRAY",
  "key27": "4HA8E77UcM6ywvcNmHA14e7yq1nBhryYDDJ9PN5N9vUG49gx7cAcwe6dFwBDYjz6LSXxKV9BKYa7MnSjqDUi9WjN",
  "key28": "5goTRMeDpVMce142Nd4J7LHnwUCDZnfmgR1wwBKcWsUTYsdzH3s97BCNcASmYrka3X3BtNxnCgyWBVJj6zSGTT7W",
  "key29": "2hY5eZJqUDgXpkfrQzwm94gvDszJkGUYYcF24rYqNTDE8tK26GhkhL4K8ZdtUdy8GZ8TYwXY1PeC4rPi1zEGdVps",
  "key30": "4sSdU5vhDVjSs1KYmkpjCtLMjZvucymXDAMNqBzYwzSQdH6Y4E6A1gJiyDmPaWxj6GjqZuMnDCHWwyXaF7EVqv4a",
  "key31": "QRWcpN7aycSQAtyAoNLgJBXu7CLHvqBMpTHgVYMUxdnxpfQGKsnMGUKPKnp34dy9jiHrddruPgLaWdyryFBegoe",
  "key32": "5D19oTh5F5A1LU516C44bAjqMowExdGR7dcywsEfpiEJZrUMaXLp9aBogDurLNiHBumnVJxxpCJZLz9im4hR8cHG",
  "key33": "2uuFYWLiD2WkY2VwSYi5REF7SqLkYsLCscAf2f8bX1VyskfEoScXVCTLcwoTuBKa6mUe5KQ4p5R95pr9xDgju5h3",
  "key34": "4BFfTV8AC3gN82wtCQqcLq39BL64ZpLCWxAAgzzS6pTaW9BTwHHSSwJnMBmA4fvDU4emyVvsPtUuka9hC7GiDxy3",
  "key35": "2Y4Vg42nV1eoSJXXWtkSvWRa7EnUtAyKgGU9m6Qts1gYALJi4riPq3mKFgAzbtWGCzUX1pc5UFXmmSpCMsY446zJ",
  "key36": "4zZUjNUU4eijeM1Tmh1sTyqazFiUbFN7cPGUKtWcTSPZ1PzEvdWf6m6QGwVr28QVNMmnLNed9kj9GLfmPsVMeEZU",
  "key37": "297C7tD8WxADENievDS8CrY2DS71sfGd9TENLHKovyyLuCUNBVo6x8eiMXgNyqB5XwdvkJ8aiqUjpWou3WagncFa",
  "key38": "MDLz7v1HJ9LYmM1ycq1UTBQXrNLc3HpAXVRpzQyf2YsvCqGEhYFESLpioU2JRv6LU73TLUjanEGvKZw6VDrsAHP",
  "key39": "qtrdoaRnHQxCxtyZUbBuowS7ocbtnBAPZ5V9sTDkkChgtCsqFZYzPe81PxtHBtDNfFFUaX7xsEasKsS7jPnNisi",
  "key40": "3tcGGkA4m4y42sR1PnUDVws4JgQFAEq4J7oMtWYm85fwMgiksx4nwocUPqcSWVJh8Y3Nd6EnujyjKrf8LXKp98nZ",
  "key41": "vVcigdGycb9SYVd4tfkSx8HZ4Dxdk9QoeDtHjZUcFSQU9LvooFQMVoJTdwshafA3dJ7gEvw1SQb5hWiQ62Gq9KT",
  "key42": "NP79Rc8wQsMYADxr3S7t2HPSSihP5gWv8gRKqjZeYTAcXPMqLNDhPT9hW9K6jW5K14iCKMM1FPLbCb7Fxa3mtbu",
  "key43": "5LABUD8xVP7dm2cVn6PUQFfCppPCK3omD3W5rFUCbYmhGvbmkYPo4jJJCABFH8n5Q1dFZ4Pazff1LQ3yqcVekk6L",
  "key44": "3hhp7SwkfX2NEmcLwLRVekcuyYc6prApH1TcPx5sFULnyUAymVp5kPcZUGWeVshBAfaPPuh1F1b3Y3dnW8DcLCMz"
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
