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
    "5Tc473RGj9utdGTc5Ka5oKZw4TiQxfBMTuTiiiM2G2VzH8bauJDgg3rhpe2WtK92k64vQ3gt6YGzRV4qLHpK9cG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U8PQV7pgHK7ySCQttF4UBTg1x6UsgTb8ji27RWQ2X3rKKLqvEJyX3b7Sn92o7fzSP5KkWpMGEQ2QijktD8rLU5T",
  "key1": "2W5ZRpX2Vw9HeczZzQTtmZR9TbaZuzhT65MBpeYSojicPGEU61MD7jNc5Vgk8avfrAj4MpFfQ8w3ojbnAJeVencf",
  "key2": "35HsAPZfEcCVykSpdbpJgrZP4FNzMoDmkh7X6r2B8GpmvKKziB7bMjatwairSmMsPeNRLocJP9KwhSJjUpVZENFK",
  "key3": "3eYcMnttpoPxKHCaui3K6bjNHjqrxs6NFuDsocZYESALPfuKoqJS7muNHWYzV2VTEquWXUGxZfymw6R6Eyu7g4c",
  "key4": "rpghzH1jxr2vYs7JgiWNRrr5fmnSDJmrhkffwU92gCVAbHHvtkx382dDBqAN4SnayL6M925bWJKf8DDkvtQz2i8",
  "key5": "56JaoNUoiGH1mfHAqHxqTsMbdC3X3G5aiaoRTBYMYaegd3xecYcLrVpEsFYLP1QFJmidv9Hyvfze7FcnYRcDLKmR",
  "key6": "4wCN79uBcou7gegBztCCryqZuDw3WMmKjFGfmaNxoDvWSfHRNkvFsDYKiz7J5WSkYWguRJLDQ6ByvGwz7zWc6n3M",
  "key7": "5RX145nSZujbsZ6UUidWE2u1mGW97AKDykT5riPqRn1MWftzdw2hDaKEaamEXiDwn9tUCJDGJkkuX3x4qcYTN6HB",
  "key8": "CqaqootrhrSfJYTNPrbzwHZQnLdKc6iKd7BH5vnw5kJhuZG1CRgNPwXc6u4AsLy9f1V3sWuis53kvRce3Pz29xt",
  "key9": "pvo7DxMHs2UXH9hXcZP7YL9fiRd1cammmRj4vZYmyMFbYjyCuza78CyysUgm11m8EQDDGUT1v2GkAgYg8mXBeJB",
  "key10": "5tDGYM6We3cwrrukbEP3hy9mDgjJMhsdv6sXjEcWazFfiajUUMnsEfKqzbo4mXFXEuwTz7UQcavubvNT5TLkZ7xp",
  "key11": "39sBKo5put9guFci1eKrwzQ3QCoYrLc2gAHN181mNYLvCdRXnRJzn3hNmmaVfUUsaq4mqhZ89bxPFZbCaRX57hmF",
  "key12": "5VWYQToS6oZVmowZxJ4UZ1fgSmt7Z2QXfsYNswFVAzMF9QM6Ybbor6YXqY9gjeDLbXf4nhindTaaDAsXehywkfBs",
  "key13": "5QEvWgVy3GL7zwiqrhAPcRMcSzfLJd7u6AJgZ15LLv6KT9jdegkhrPXTF8jeggy7Hd3BnZWQx2N1EWzxzky3AohH",
  "key14": "125XtRSnZhWSnvBJCgfSjG3NvLrq5jJpf3FFMETQ6J1k6RSd4F3N6Su2c4vDyvib28hUp72apPqPw1fUqCcz2izW",
  "key15": "32Lfjcp4SbEM3yYgUsPbdN4AcGFP3YaSiy9GCtHex9AAHCsVMKqxSrh6xGTVypKfhr4eqzViTe3xF9NGamwz3gxG",
  "key16": "3NRn92TD3t3TWUce36tNCqszVK2c68aKeCvPBQFerBGG4aswpimuTbt4WQ6S9bVJ8nD1GxKc9RsktKuTFvGY2Qgh",
  "key17": "3TGi4K44rpwbsKJCsvqiReuWE3Qh6mcUnVKgk93jSFm8fjuCPw8PqKFLRTMVtywSmVbSjkkmmGyHWa3eVzGMZ8WD",
  "key18": "5AWeKjnx6efSsNG9MFHJAD1G2pLBeWdskFADGQQAev9PmwJF1EC6NQnLtKMUdVe62NZocpdCmfjq464J7DtXMEPE",
  "key19": "5FgJ1vafLsQNUjrPtmTH2id9evU38MnLURGHPEbVpFkYDF3zY6A8eqZM77BVxt4WaT2rnvPHTaCPRFQ5VNwTjbTo",
  "key20": "qHFJv6z8rmxTZ9U7SW7dwQxCMGPsUTFre2KPpKTMperSaoMArePGpD3sRJmKDFzuontBJzKG55h1ejzr84gLiQN",
  "key21": "4g7U3A9dhs8v2dncer6kTG6smCZvMuDAUNzFu97SYaqduZpQwiV4jXWjNKiPZCLkbkNZFdA1Tu5NzYF2u8FKe6cj",
  "key22": "3m3KwqyXUrKTQ3TQbDh8K7YRpBjM7AbP3B24RyUQqXsM6czzva9j4Dye7aBQ2CFFvRs4vnAbNy1ParWYoa1ECAcN",
  "key23": "5R39L845NkNkZ1Dhp5q1YHnszBSCXbH7QjzHr9GEASXYCdYke7w6ABF2SjJNmk2yum1tHZvwrepM3d2RjLtzy4uR",
  "key24": "2gRTAnymWaYwfycRFZumirsnUEB2a5wtvTDJChSEJAFPnQHQ27m9pHNLkXx8R21YQLzg8oenhaazXhNxAr4cxpgC",
  "key25": "4iUBrFdnkCVkRX3ugxmKY8NdpkTqGBc7tM9EYbnJsLyquGYNeySgScQj6wDm1WgtaUcpT85XmrhJRsm5VC6CUHgu",
  "key26": "3VVVJhPtiwdiVBsAr1Mc7h8FJoeaA82uJQkuCw3pTc8W1VjUBcCCSTjFmXCayxJppokAqiMejdAFiQbAXjXu7SZU",
  "key27": "38LZDxUcnA8jMJ7XrEPUAuyysZA4ndjyznMgNKJYZXJghmptP8LbZzUUa6Gw3cZDrwwoRRoEuffsBsURhZg9gf8",
  "key28": "nFimLxMwGB53o5boBHekEMx2uSZ8vshh5N4M1cfhXahvzdXWwiu9YQNspPEpFdyt2cytqppFwetbGZm8akk8W7h",
  "key29": "42HqrRbb3JadELXBxhq2Z2RJf99eJYygACFW8VCPxuzycZ2YHrm9xHsQLAbXKGYdG7yA3xBUnQQwDimvwvNtDEdw",
  "key30": "4SwsvwVAh4HgA4f5dCiaqyNbN24iC3ncpPD55qN4WnJr9MuJZWVWMDPMG1n8jBYHq2FqU2V7JHzNXNPLVdH4UtX2"
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
