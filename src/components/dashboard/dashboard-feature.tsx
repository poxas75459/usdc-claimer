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
    "2jHW41DrwWDgJU1zF8mArVJ1ZtYo52yDujY2ZrygGKm3ZR26om2oqBPf4BgJ3Bceinm8JdeSayRHSkynSA5ZSYSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yeBGh1mttb8bR4LXsCJL25L9SUgrjczAdgasvJ85xkbcKRnLhdMxztGrnhBS1WjobdMtZbeZdA6QHx23S9mBYY1",
  "key1": "53Z3Wz3RWANkNVJuhbg4PXf13jFvgZNAQpjyPZHTFMnw6haAWv3GEgi7cnpqSpYTwqiQkxmn1EwKEz8ohgZLKsSP",
  "key2": "3gdRZ93CX4PQqoK1h87jnCWPZ1Bix3nQUnU261DmjuZpBffTMbWtkZFeFqm8J7GMsmfyD6EnAdDJ8bpBmmx3rySz",
  "key3": "1MPV9wFWc56rt7YFdRnu3zDZLrLtVtihcBVwByCUuVnyydk3JmaRnkZa49aosGQ4JWxMZaH6L3bqcJz7xfJSPzU",
  "key4": "3kCXd2GGvwruQm4N8ZkMH9ZUt1i9GQPBQrj18vuKzkxhUwQhTD2EYYvxyo5V6YDiRYJaZX6LTEgq7ddZXoGj17ZL",
  "key5": "2WKfeyUhMAhbZEg2tKLgMeVyDxrKfyHxXgVorzgCoafiDoa743xvNutDLE5EmAQu68F5enTahSaMyTzHtFP7PCk8",
  "key6": "2xL2YN8E3znPak6Fts8ALENoQ533j6w1CJT3JqxMm8fe35YeDBApxuvK1rRq1yR6K1GWPDQZw1wB3rn7NuLM7NYa",
  "key7": "ZJmQh1rsozrAUxdYtGDPEuHTdKFgidRD3HLHo4i8BpbfZoajY3oyLmtT67erKK9r2tvqHS36kNyQManDXmjJvDg",
  "key8": "4uVBcgcmxjVR8qLzfT8yLvui8gjGkD7iBFmgswuhcN7VnFLQgHBPHy95U9gkXzjRWXUiSrXKi2qzNNxsEB9qocny",
  "key9": "2C29DFoLGaEmHVa4ksaQiDzf8Vuy3BEKaGaZsSRRnCgs7EnapcaXNg1C2gnHhZr2Z5czKHfL9tbXmR83wGYJxLjG",
  "key10": "5wvzfNFeyqVKo3yqavrizjRuMw4kqpLmCcAcwqGrx69HRnMXQh9NQkUgz5RJb2NUYtdYcHX71g4m62CPMZ5M7i7V",
  "key11": "3isxnHzoRx6e7tGWUQJGhTZHNUFKQFCFMqTYDYvTaNo6GgK6PEZXWKDpi2AK5Xg7e1urLjKP63efLXysEgCp5kGm",
  "key12": "2BWJNoHjzGyvPbmTxXNtrjF5rb23fhPedxanZXXn9wwM3MYXciCXRL3hxudGwRJvR2WJZe7MKPkkHjRQHikBvKg6",
  "key13": "3Lk1pwHnMSCcBrQrBJ4kUjQfBX67f2npZLngs4JsSY2M6tzMwk2yb9EA9rNtP7DxoXKc8pjnihaFnWKtXASnm2CP",
  "key14": "2ZucKLhSqBPtAYn5iUeHu511oNF6q16KcuLbCy5V7gHuVNzUsDoru5Wshb5VsEAVehjJUaJRjmZerRHvM9cPSswU",
  "key15": "5M518fkourekqr311ykgpkrJHDkiUn2m6xCHPNfnAnA63En4gTfHSuzNmTHvw7CVPziBfQyAqQD8sRpJyWSYX4e2",
  "key16": "4ApC9X7eBwK78ePPPVKUUXGAqHj8NWS8g3pmCxxhzxM3R8BjGcxCPybbbr6eNSNtDDKUzNNbEbjiMohbs77t76Cz",
  "key17": "649Qyawhhcc8uzb6BSMrSEL8S69mkZ83xe1vYCHgbLDbdcvimfxDZ1UU1wyMQZyoi2ao8qcCPEo4wyMTsJ2zSBQu",
  "key18": "4ZzufoPCH3HrNo2JhECyuEtFXXiMs2eV9kvPMAzxoZY3Hqkf7ZgQhF9bkZi1jyRdjZFFgxbGVMeDreq3EtoAyRqj",
  "key19": "MWuRDCDRvsoZKEY2eonMac8TTbZBZbJvAtFGbYBQxPhS2K5V6xH2m2THKrB2avNvDZKQubwBXbtAEtJGU957dTk",
  "key20": "4na9HczunV6dBLQqDR8eiF6J7E6e7KV8okaNE5Liaa721RW5oKqxaMTmScvhSr3ddmszUPirRaBb76PFWs5w4JvD",
  "key21": "4wwRwU4tDFToDedNYJLw4KR8JyECAKubDw4Ua5BRdVBpbVo9VQ3fTjBR4YaaKoiKrwYGTjrz7a8CBuaPLhsotWUG",
  "key22": "4qmRGx4SPkX2qfb3YRUyNHCV9heeSBvxxAY6MV2Z1U9ATPn3tdMDoJbEdoSVkMykj4jtSbvjrNKninHCb61NmUJR",
  "key23": "nkBE6nrj7MLNn8bVaH8NXJptCD1y7Meg1Z9JFj7EYnciphVMnUv7GBxxgCtMaowkjYhXMVxDqAkBetWhGyzKV7c",
  "key24": "2jgtsxTpZeiLTpb6fS5fFz76ZPVt3Ymeehqy9sYhQ1Tv8So1M8XLUXH5exmMM7ot6YjeyyrSRbxRhH3AazctxWPr"
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
