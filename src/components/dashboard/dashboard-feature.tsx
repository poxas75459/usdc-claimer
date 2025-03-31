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
    "59XtcHxwRqHMRf5ZazBAp9W2WD5WbmbFn32dfqz7Qii4fKEvzi5hHFHrNH1fpJ4xC1b8Gm9Tp44taYeCJFJU2cz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UimrnPziaPsnCwqJEmLp5utnbaFHesPBhqFkaBkPmc7adXStkncy9Cx6of1VRdADyavyh1QcRHSwsWsatwMDxnK",
  "key1": "25sBjKUoq9bq8qgFZsQyEiPwG5PZr61rxG4x18KwfLPx8kGAk71C3PCmxjncZxfEHjDYy65AbQtDbFcQGxtsBBKR",
  "key2": "2RGsrVP7ueFWxHzqri8UQEUM9fPa4TL9v9neZspkHKCj7hxenvNBvSP4TMFFqqUgPXCv9y8BGw1YwGTbYXLsocJA",
  "key3": "557SYbxAjKNdN9SjgXfsK8DjcMyRhNZDcz3fa3VuAyEqYcRWpDWm5J3zArqzNjbnwqE3TcB8C11UKRbyY7Z62BDX",
  "key4": "55Rpfc7kFMYebvrFVe1rwhbJLRdsFuK4TyCHFzsut5Msf4887zA6DVWAAoaZoT7uWfZcV2N2fwNa3HUpGfgA1VaB",
  "key5": "3HsdZVh9VdKfaQaRNuyPyqYeJXpWSwdc1boBDa8FspXbKndTBqtRabokZbpwT6pLUM3mkKb2426Ff4SYSCtNRuiQ",
  "key6": "5PH751S32sGqU3DAgT4kmnrNkb9iTJut5c9TTdZeVNrvxB3uFgDp6M9VuFxuXWqtocQSxTF4KB8WzJHeqg1ZpK8m",
  "key7": "2UDu2Tqv6io7XxgZEci15Vjk2g2PqzxZhRGYVoRcwNF88pXto5DNGJUbBTtdJ5mnw39LU1gu4UWixxasPokYfxog",
  "key8": "5J4jujjZd9sSkAtCCMRLLQ1tY7gNJDAhhHoKZaBnfXi1p4Z7NDze58jktuLUtnTK7JmXzag5S5WezjMRiBVmAoNL",
  "key9": "2tMmSpXbMzbcUQmfLbeDko1bywwxQbZn5huyVskDfzPQbVfsVPDzDbVRSvhZqbrYUKAw1UPUsiP5oB2Ad9Wsztff",
  "key10": "gkzFMqWXJdN98gf4RH8VuA7dphLDNja2NbUXtHLGJbvfrEwochR68YcaRPinre6fmvhwGiXcvtnuuyTZzLinn5a",
  "key11": "5uXBpsDP3tJkCFkMh5goLRFXZQCPQFYQ54NVfYXV7DA3oGdaPNUCPVGMdHNUD6no3wUnSL4H4TuRP7HXrvNFU4w4",
  "key12": "2btxL3hYpaSinXKKowdaCmkqGJqx2121VMhQtUAcniPCNJ4D2F2uaFSJZLN1KzFf58mjZR6Rt6wq8DAgZs9rZKbh",
  "key13": "bq1awEnZomk4ZvVWBCqsAhoFAuidrDxv2nMHKtc9hCmHykj6T69bRghh8fXs3ANp2bEhC1zPBmpttHHUgFn5Va4",
  "key14": "2Bj3stWajFRPRvtZGPZu8C2jXY8xPxrKuXDb5n9ydASzibBubYkmq4pPa1mzDj6N9A2RrzjkTD6uuiMjAUcceqAf",
  "key15": "4SKvsPVy158Uiopt1mQyZiwBX8q6QaLs5WTYo8tb2UbSGUr6fNrK2BF2UeKeNyzQaznTKxKGrrwzArZgG4d6pG1U",
  "key16": "2kZ4VL231hmnTmwo41WYu1fyVrwwrPKxYjkcdZDTpqmDHdPZFe1A4ywcwLZhtB5Vj9C4FeL748VtNy14DsLMQJRc",
  "key17": "5jAyuJxjow38SJ9WqCT1Gk4BCeH9Z4mQVTjt6e5BCpSaSjETxbrb5J6UdG8E6aF7znSX8ar8mPcvdG54WndnnHkY",
  "key18": "4nwMCKrRLfFXk8jLY1E9gcz8FqBemmVGU95XzmGqzseudqRgRNz1LJiVTBKFdrbvfGCUf8G86QFg9fK8gDP1qaqn",
  "key19": "yvEDV3C3giekQz5Ytb29AAGtdFjgXgpSk2uFa2RuJvBWh4P7czYE28V5KvVU9jwEevBPyy6veY8HX8aXtUrmXLS",
  "key20": "5UsDciEhUe798TSTzQs4PGEkgWq5a8TpoTueS8uv4uS4tKNrKKNnwSU6Myc3JCuiuoi66bfXFEvoFwhvS8n5pvdP",
  "key21": "4mMVDKBp3Qt94aqavHTkT1MHiTEjuGEY6sFnBC5bLEwR7a2QRBuoSSJcufWrsKPUe6dUhmoUPdNAdcnY5USZ6XXP",
  "key22": "3TBzXwzY2cuTUyDqnpUPbvzXLiKyeg18UjWqZWjPSC38j9M16TPYYx7mamBJEqCDsZ219AqrCmymU5C13F2vP7WB",
  "key23": "3PkrchzcxRG1eiS3NwMTFzS4rSSa7MEvHMnMae8RZ3TtcmCfGnwwkG9rvXd9JgyFSt4WrMhV1LpghL7A4dkpyJEa",
  "key24": "HE6kXihm7mDD3fbWXk2XhBYiQm5AzG7niRdinBodRdFMTLex4tFupLj6jm7mdQ1s5Rh9yE4L51EADQu3ssJukw6",
  "key25": "wWcXivZFPBMLkZ9hNDrN1W5VFWaF6UY81TN66Nnn6Py4ALPJQx57Xsfe3o9UKvqePF8JNXitxyJ3GkvKpiopAws",
  "key26": "goNpx762zpfduF3URnN5RYD8E2NiN5rKBJbknDxdXrCCRHX2jU9MidCS97xtp6jccZMjpMD67ZoU2WtCkMtBJco",
  "key27": "3CTnjTWiyxXbfAMavcBmaduovaMksmkTXh6f37qqKepEUJBknpUwH4cFCB67kAHGVfgXUozv2BQSaHgi8XL2fV6n",
  "key28": "5ahLuhdhZKGffXoauRbAnEVFMjUqr7JjuMv3zWXHkDXZrratykQcvajsAE6PbWY1bVJu9kuD8AqTQjYWZbtkVw38",
  "key29": "4geY7e5XjHYXvHk2HPrAJRdNZ5fUHKhKH9rdieyB46wT7bMkdKxGjyvwZasFxGgYLr5poKC1FtQekLeuFbpDKwjJ",
  "key30": "bAxoXQd2GXy2Hgvu83j9MGsehC422yBvTDXkLKRQocFd82BTqMU8eXU9yX9ieWRUZNqfkMH587abKd8hgBQ8diQ",
  "key31": "5perfwiDTGkZzWMf27xmXK69dswH3HAwfwiunNhbKawPMZEY7AoszkxazUhHwCJEZFGA5ZuxX261V1beqPVgYA8Q",
  "key32": "4YWkP8kURqLKzNSr9cvRYgwwGC3ULGdtUBeGek4smVxATcxTgeyiBeYwudh16KUFYGMk9WJNmZPG8KC7SoJrpUuv"
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
