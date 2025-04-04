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
    "2rESN1aknR68Wpe3yN6ejm2rA8uMm74MgV3iWmgdKeEsYcqU1285tXjNojA1y6UrHUNEQLY677ogrRiKxt5H6Z7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3er7Gr9h3t7CZjV9v9eTSk6drj6QkLix9cKTiBidYLiATN9z32nzePidfszKFezjSxfAder8UDwjjYPYPwQYPdBL",
  "key1": "EuawDoukZ6S1MqiY9bTG2tyGexs7yQszKngmTNiomv6ELhsSh6x7CFrjPizNWMnV6YtfbnSHGpkGcvL9j7rmh8s",
  "key2": "2egm6zipdwsgneowTNSG1Rp7ayzCk3dNLSM2KuharmfvjsmeuA7zDfhyoakbztuUAAgjZ4NNBJsjvbCy5GxW3ifx",
  "key3": "5imCm1HTqeAty9A7bQX2ZzP5zYJNH1N5vPRias2Tra7dUrUpwJA36emjBfpHuLXFqJeQjAsZpUi6QdJFLMG2q4hp",
  "key4": "52TRqzXjQ8fgbb4od1bYCCrVXrd714NqD2EXM6kcjcQQDVP5GgjyTWPoZC8miMtnP1hhpMLB69DaqyXkzosS4KN3",
  "key5": "5dsS1UtJoQWUnrVwXzyTP5wCGN3mff8ugKydvLPwXRjsqq3BWF2rdd25hETt9MqrqRK1ufeMuiZ5QbywqUwuep6n",
  "key6": "uZk1hotTjgfMiqwKaHFCkDqpbaM9NFhxxwST8hwLeDJeoS9kvqx72fyC5FXxQjKLGdq5seBWtxepsoCSkeeeoo6",
  "key7": "48qkHnZhF91MhgsHDEfAQ47cjkC7mm3BQvfDX2SoGpt3b7PcWKZ7FYvYbQU4B7ueSWB1k85noS4HGenAtpgqjDcw",
  "key8": "5Y8hane5yhCegBS9aNK5425tqN4aqAsBwHzpKkTygej3ybUf6Cupjj5N28WFuZs1Rz9Ko6fJYzRGeMZnfVmYK4oS",
  "key9": "4rTmD8uJ7kZWWdtEp9qxSdwXd1FVhsme4cbRsp3nPkcNqDM3xZYcgEoCCvKQBVEa9G6jPZvhuSWV5BkDsSVa6UYK",
  "key10": "3TZRoZxHjdbfz31byx5pntjaxRVu76YgjqxBpMTDw8iWebDNnEnX1Hg4wiw5rhoyjsiedWqH1NajCkFLy2XithEo",
  "key11": "2FzYWNyJxNa8Wu2VRNdMDccdJe6Wn7Z5A5AL5pSUW895PLWLmLZNMLYiVWWZDc7GhC8aBE3VJPGJWJcL5JFzPSTL",
  "key12": "3J1C6eNZnFPk81NYP7EFBnWrG4mC2t2kNVv4EMBMnCuCbNcvaDF2Sg1K3gqATtmC9rRhdLv5TD1jVJokNj3hcDmW",
  "key13": "5ggmLnAecrSeN1z3B1zfew8fZDwA7vwc6TwJhaTFbUFQUfELCQYmYmGeWhMvn2hw9X5aqaQvgRCRE5Cd5p6R9WKg",
  "key14": "5hYEPZPirMgDqkwPQUvrYMMYLspji6PNBadtPQJsxmcySDzwpjFGAo5Y6VAmPMYNtahkkYvzc3aEXJUNFLsSiPwE",
  "key15": "622WpBfGHiSujLxZMVp3PXnRoR3asDSdJxVtavJ2fRPuGTyw4ZdJ6qDEtcaLk5SG6817Ne4oRBemhuYrKkV4EHjr",
  "key16": "5oXy1w45ppY3D2JWxPUwbX5Uo5cisvHEGjN2gSQTpBrsWh2rHaQ1WxtYpByQugS5sLzC7gNjAiLZcwUQEHxyLE9k",
  "key17": "Qfm4AJqCDQWU3SvnYT2wchbU7JH4jCLWKDar858EHPNxLzpmQDht96ZJaQptk9BRRN26ahbd5UeYYNSD3vMMy4z",
  "key18": "2cAPQqjMucVzDakpSZERLXM6FQ2VP3ty63K3SSaHtg3FkALCkEZ249iwEpSEuKwFyUk9aphAP9VoEtY3H66uvKf9",
  "key19": "4wHDExhtaYhC9wjsDRUedRsNbUkxrLQLa8D51mV6sr7BZCGrfZSSBy9DvRqiiZY2KpJ5tqM48GXjnb7qEMPrf7oy",
  "key20": "2LaZYgw9WequV5QU8i2Eu9k9Y2w5TDMAMWG2EwWL2z7Fg6svmjzANp6wM5StgtFeBThscqsmwDGKdrbcXhvvfTyS",
  "key21": "3t6xm29e9dBi7WaDWJMh967jRtAydUWJivbn1yfrrGiTH1GRcf2QWcqMsGPLsJsoCJAcu9r3ZLRripFnwUxNgZL1",
  "key22": "4KPRvaiMUSRXgfNqFYkpf8ZvRYPfkzdLwpDHcuAaaURsn4pKThPVwSXhDgdXJMw35bLXuYbSQQhEFexf1cmZuNKk",
  "key23": "3G3qMwSukQWJrZcoN7cYekXLT84W6zkRYkRwP1hqwHR8Dg8qceHzTMDgPL5FpszchZee5Jqzb6LC1q5crYceYY16",
  "key24": "4TfBtdLvZUcAK8qAWekPb7XQFWRWNipjBZknhrDYGkmtT9nbj32m3hpGNcgLSYGvqP9N2UNPr8iLoWEZnYYdpaxC",
  "key25": "2C6qUWGi9kUdCuCHHe7svFwMvspgejYNa95ZGEk5xHrtWXDqkJ27EzrhihPVTSE5x2MZa9Lyue8bB8z84BhrB79a",
  "key26": "5WoZdNW1e4WKfDHgqw63Si2cMP86u8EfXjF6PChAcuVs5WcgRZn9pCWqzRaRq8S2qeGNh6ruoCavjj1iKUhivbqP",
  "key27": "2WgmgS7zjp5LFL94JL6zKXYhjGLMPK3E2qYipoHA8Mf4VM6JXy6ZRpzpyiZf12a2ie1p7SgpVMTr3zLPYw7Xp217",
  "key28": "3dADKtwTKe6uG8wY134E7V38pGLfBvBzWEh9QfseiaSCnKHbWSZVVbDzZFjSSg7UX9ojbrZR1mhejs8ZC4htEx1a",
  "key29": "2Y7CtcmvREqD6oPwB1N231iWwaDoJQaVEmLYbahnRbtB11U6QVCxVvz6VTXQF6FGz6HgdmtsC18zqR31Un5HtQ6",
  "key30": "RuhMxzE9o529CGsJkBJ8ARK3G7Sa7gXYRYCLs8AWEnsj9nhCTBZwdDJPcwMNdKUTL1GYjqiBBR1ic74KjVH5yS8",
  "key31": "5mYQtCwrKjNjG5wjV6w9J5RhqJp7w1Ecd7Bybg5BpESB8FXhGpSYrEjXifuZ9psvQ5JuBGxgqz13MFej9gYUzGBb",
  "key32": "2eA5gEvHGekBW3rw4SZxCfGT88VozSauLi49tQ63Epug8TPVEuuP6mtGmmdZ5j2gnXCrd9pHgb1absFYv399d7fa",
  "key33": "61YNm8TPUyT47rCnJGGXYqErumCWvndawdXQvFmEdFsMDyBq6eZvHkivHPMS2S1nHigvsDJcv9fhhGvEkXBRCUx6",
  "key34": "3s2sqj1AY5JoScyJQX6LvEgs6dZnhbZBxmCgvkKbdGtW4xvnxJs1oMacN3FQmGT4KkGDj9LL4mSc2DVyXxAgw7eo",
  "key35": "2YUGCQQQreowtTHSVKJC7hyJGukvPZUTnQAxGZLyHGYF23usHKAzjkq7TnwJvhpBaWggoQAmuuqNNY3d9N6DwB4X",
  "key36": "34NVSKEvrFjbwXGnC3mu9duQLgGnLQTbXtDnjpjkD2g7th26zSK5TA2JyG7C5fLMmQLyr24AFvqcV2kjofjMdaMZ",
  "key37": "2r5AbY7CPrpijnfBLq7YFP6ihBMiHUVy2MgbLAKwA2cF5HMnmPbnQ3p1qnAQfN5ErsGJmNAcrWLnX4abYEVxwKE8",
  "key38": "sVBUiXqjni6ob2YvDwnUiPFdf9Nc3biwwmow1z2EJ1uoHBS3imeqxncahjz8hb8D8eg8cPu7yMnm7pus4ztX7Lq",
  "key39": "5AZyaZqa2mWB7ignwxTYhSFMc3oHxKLhuzTt2NSg11s1EChbU64ZNAVw9effq6JakPQYUauygjS2vR8m81ZoTryY"
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
