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
    "39AnDjSKYVWt5LcmuazUDkUu7dytQhThGcaxKRqPGziVtJiJXrbMTmCJbVW8TWpwjpF74rPEkex5h774JvQvWA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WH1wQRvdVZpb8GU7oywdAjjPsuqEXveNencUx3ppQ9HinHAxQ2gxqjdQxU2aser5Xc37A89pTYi4UT7B8TMADkt",
  "key1": "4rH4xcKYjvvcoh3CZygS2CcvwCxeLxwaPPdZefm7YjUb6gj2svU2k5tKcx5gz9zTdVeMJDq1UzS6gvbq495rSQvy",
  "key2": "PzEbf2qDBezbKzP7K8nVxc2GSoYuEuWWqjErGyWoQQVqZzNA3XBMuajuF1tSh73YngqhvfDv8Y43vNcmWgXJHQA",
  "key3": "BS1fMRQF4w5vy1c1vG9c9eJUNovh5KBQdMxD9twcYgNYezfk2Z7Ua1FwfTV4veuZ6HcLMjSCxoTUbCh3oXqLUYG",
  "key4": "2JNEaB4BZJQzeCi88mZthBojqCTGCsabsKVVczdmTeZdT37xBV3bLWhrxCDFZZVjvakpZ1EcTigqhf8o8TiB1QVR",
  "key5": "5nzHDAp2WQ7hdfiQTxEsYv5ohYhnr4R4kh2HLAucF5U1ordE3wvfThdnswuWENge12buiNxZUKVRBkXWRcVPQr9r",
  "key6": "3j22NSpZnF6zjEnkJeB4AusvmMcGStDEHZov2CNCokkYtFVNhxzCXy1d91u2SvX3tb5aDjDQKb8h9MmdrYCpGbSE",
  "key7": "51pT3jA1sQedePDkKXQjcy5rBweYYm7NqKJNYnvmxGxn2Nd9Q8kbxgrJ2NPdM4dQZSr2rfbZZrCSQUgSuqwrjm2Z",
  "key8": "5vr2NfH4B3EZD5LqppAD58Njk3fiRMXBno1gwBP9sVtowLXeP1XkfGYknGuPQKq1HXMi14wF44z3uSB2wmiyTEB5",
  "key9": "3FNzXqXDEYzJrxUBfjszhBy8q9QSMCqozTCxMMa15LHRqhgKcVG9RfCzgBmx1wfEQHohf5jfjMoM1ANRz9DEkmNk",
  "key10": "3ZyoEREkgJQ1CawB6fVNkfkWDeBxqC6XQ6UPRA5MERPr1PMfpyzg7Mkb2scxJJNgg3Ptnm5SbyFo5MAYs81B8dZj",
  "key11": "QrtdcGYffj9FXnkiFRYhnGTxj9hSVSd8bPbeE4rMwAocAHUrJnfbhDz7AVr1xNtFf7DF5WSbykTuhU8XjXdNTjL",
  "key12": "5DVXMrUx55REnJU4VzeacnoTGx9gxJiodcAp25hZWsLKqSFQs4beyoxya83GHykVru4bBnqUo8j5Kkfin4wQzVQL",
  "key13": "3ZQt3RfSqZHK2PZMaXoZXoHKtjHsKx4yEfzzdYcKVa2RmNZtdG7UJ2UMoY9rCpYqTKQmi59rZ3ug8VvTjh4UvXzL",
  "key14": "4kCgknA5MMTxtBsW78vbSqrFsjAyXYo2WuPBurHd3EmA7t9MAFuiH5NfexarugR1Df2XNgSUEE6yKmFLzHG3bXM4",
  "key15": "3ABSM9civDTgdfXM4YNFnVLqJcpSuwBHJGvy5rA33B7P3Lik3Z1HJaS9Kk5Cib1iH8xFHkDs6oMqkwWob9GqbtrF",
  "key16": "3S7sQCR2JtSuYaenUYcBWwnmhBZNuWR2TN9f3qCdzVkkrYPShxrVmLuPQ5mt4AdYHF1XNUQqCugPzAjT4ymLeGeG",
  "key17": "4nDftwVr2kJxWqZT6rEEYFu1Wdg3GsPEnysvkATZKhaeiVuYX4URUBLTKcuWBZdRj5Hu2sdAADB65K82geaUAUCy",
  "key18": "3z63wGLUEa1qWZmR4LDpE8mWvJu5jBnziBneXKTiWma97c7MCDo24PJdDipCp9wYCRdVGavtHWdHvGkTBu8cnZvy",
  "key19": "2UtnorricAoBSHTuS6sYLHuoVYg62RAnUtMvCUECZBAah5wPYtJZbRBeL7Z4BwCw7U1MyUnLjn7JKP85ry466vUB",
  "key20": "2yxSFsZaSPU82UjfoCbFb3dVKLLmSuWGVNWNovNTY1mrP86HSFiQJxnLaSoxkyx69KVyXj1DPdbfiUWRM1CBEXPN",
  "key21": "3A5vz64GA88juMvvQDPridTCdnp9orQF4sYGUBLvYXS3v4axPnEJpebXfcVne27ACxFmJ82EpYRMzgUub5u3xAEt",
  "key22": "2xunWjRH371iTTxtYxiMwVBVGNc9KQncjLJ5J9TBrecsCC5io7dEDyDKu5JS9n4urkjnA1UH2bjbYHcUfwqoPg5t",
  "key23": "46FrqRdR6aNPDy2XELxjKmGKRr7De4hJvhPnSV5WGZEHLJb3ddH31dCQkiTwqbVk2LF33rSQGwq3UM5KyjosTbEz",
  "key24": "2DUKJ9u3cTMdqmogt1Hb4fccyac2jtv2NSvn6URk8LYuG4cTm7iftwC3ZfRJ9rot7GZu9Y5gUDXWtWd83pg724hk"
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
