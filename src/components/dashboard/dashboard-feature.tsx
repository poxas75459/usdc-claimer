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
    "51iLgHcoHr6evi7EoDisHvwmUZnnTeuBQT9Mv26jiALFK3WjfkcVCtAgZTjHjTWhJo11ny3BR9yM1zLqhHUU165a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wm4xeMi7mzVHvDYpMoy6LJbQLr4qSjuEwk5ksvskQjontaEZexvx5nrCQ7XbGMHiPZsbvvEwbEhN8j3iGTRbYdu",
  "key1": "jLq1SF7BvcX86E3NaqMXrgc4HiYSz5nVczXXpDaSD4hTU3co6786nHdwwpLGZ8gEYnvFqd2r4uZDkkSRkhhv1Yc",
  "key2": "4CUcdtWvwp2f6tsQMw8GtrQDrny4phQuNkYEvarwC2qwu4Rykg9eTnTgtLoaNECRVcntsWgMRKsh61wDgMrqje8m",
  "key3": "5nrNiRLM6nejhRXRe6XT4dQPEnig9bnaNNyNeEEXZRKZcETTNfUNcv2xyp2UCRfSG5Em5iBPf3QSpWE8FobfxEcZ",
  "key4": "456daZfP4rGzw5QkwBhzdkEm3KbBxbt7UENkL2W5ikse49dGQUNj6cdd8L8LDBSFkZGDXKhTJCCkA48HCaziWwAn",
  "key5": "4QRRFuDqvjUXoAqN7yxX4GChqjQoYAUXdWwXPhzAvouqVyFjoEiBfv9RZAQMwoYyNmaUXbkToJjh3awcmzk7WdUN",
  "key6": "5APkNepBZQ3dNCh3xa8VAjkjEr4GigJEya7M3FU2cviwGmDhi4E1wxCg1Wxiscf3j6mDAnzFY7RrmuG41Uh7Cv9",
  "key7": "sfoB1rvJV8h2mbmx4frCgLfwReYLy9WeApXXND8b5gRuLG3XDffiDyKxe4fPrVjJN7GnyxtpH6wHun3Nxg4Wtod",
  "key8": "2zg9m1FT5GJ83tgFhfNxf4jhXc3vN6SYptacHgvKhiwuMnz3RfMGTnwjYyJLqtriXkAVryRpdvVHbV96ocvsoE1a",
  "key9": "6zFiZftvR8ysVRDfNg7jyEAcYrrt9vAcmWF8GG2srSW7c5sfCjpeEN9V7eUbGURqyyY6BqCVVfst5GstJXB3m5A",
  "key10": "4q5w7TECpYi8ecyvU3jhPzQird8sZkDfYbrt888qnpJ4DDxGJCqLjg4hkUmKjCa2k9XSTBhbfJ3CAmvqDUbb6LNc",
  "key11": "4yAhNXoU95Q93AT1Z6jct9xuvPos7o3JB27bz61KRxCF7p8CW5tFtZA9qEVLrokoce6di2ChsuNaYGzeybujZ3yq",
  "key12": "5EuyvDJdRh94MKHgW3fJep6LnFM6wrub8XXgaowvYJ1AEQnyB6gNvWt9fbsweBooD1tsBaTGX6fRcANa62hvRLzd",
  "key13": "2sJKKv4XkUS4GaDEv5zEyH9a5oKASpzenmRmTfwLbHFq2BbpYhbqu6YPoWAQ4c4cXtuKiyedA9f5c35DrcwCTmac",
  "key14": "2AouwsRw1QJPJsFXCX9QAnEE8GiWE1eroAfpbupeTM5vfPn9pum3WcCqCGMKxvuNpsy7zHfv6QCkFkWsDNxcEMyf",
  "key15": "34V1mwDH5Cmv3xNdXLCsqXTJakPGdCG23n19ve4nPGCZpV9dVcJb67a4drrzoibTS7TBPhfsswTxHMMNJBDFS6fa",
  "key16": "4rRmnwhYVNZzSGn4pnCFU6H6ULd939TqfyKSGYFahE8uxxUSj1q52RPFCSVRXJtk12hWDrnEP5kcEc6woqWkBEpe",
  "key17": "5zkhgYZQTtDcaKENUkAYML77AAabobJ7cuhxFLKCxWdWQECH8JLSpR2U9Vfx2YChJicghfJJc1C8YDrzjXM9B9h",
  "key18": "2CkCEdBG27h1MNGmNPunMRgGp74czqwE5FSuy754erPeftHqhBhPiP2NK4cd4jsk7bFrWTwm2qsm8otopX2c3ngY",
  "key19": "2U1gyZTSnwUkZLUgaienKXKoVpbe5yxqgsshRJuBqKmPsrUBYU6krGU9u95w5cjp8FND3PWznzyHoU4SaXj4Trdc",
  "key20": "2GgiNbamozbw3bQ2JiQhQdcAFakt5w9viBnZaA7pMDtMKrBANNV2Fod4p3ebbnnG4ws2unmZtd1S6MnAzX17V8Cw",
  "key21": "2WUY7HcBe13911gV6H4fb3u2hEe8qqAzDabBMskDRhGdjPNBgNHFoNL1abtvi2XeFCsa2KUzN9cF3BG3PYHmxxeX",
  "key22": "2wWNGoNq3kK6bLuwuADFL8u4jTDzXYKBvhAC8qfsR9FvUuSmSECi54fLVQSJTHEmFEcqHsJiR2VnPzhPmXVMLpWa",
  "key23": "2NgqxUUZ7xTrV88GnrYquLadx1x143UGW5auyRkz9YZUT8dQKSpGbNh7tkiMvy3c1T5pNMdAcPkm9dUY792e1YVf",
  "key24": "3sH9QhyH3p9ecqcJ6pV4oeL5RboNFwUvFLW5pPy3mrMspg3EeJkZZiXYrpGuuUKk63px3yJR3mV7pFjHUQPTqMi9",
  "key25": "2GJmhCkL9QEN6tEEMdNdFU4Jt5583faskvf5N6r2sCeouhUHRXQevGsCjvdvS7umVcv2aLdWSmtCWfcQch29f2Yy",
  "key26": "3CfVEpCwy9q4B4Wd5XxdzvXj9TkMMmxK6yijhkAuF7UpALW6RS73hbd9joY5JYomsRUxoyWeMoKedrEXMZxBNeDX",
  "key27": "4rm964T4qJVTLyzTKctupQ6HT7bwaM9kn7YfLk2DANJ5Z3mbYLm7MLnHT4JUBkcY1mxX8fD9DRWBHn3j1qmz74iz",
  "key28": "jedSFreGu4qXe56UT8KohKVEdac1ujFseMEu2dt2UtSRF8c9XnHoTSVrsVeso5UtgxNm8XEMXdhX9ZbdmDTsKrL",
  "key29": "3MQZCeRLTEBGP74J31m2Qj5eAexhe2fDAnoekNpJddcLtMcFQwfECjxLZd7J1NrsNLkHGuiA34mmKHmC8uVXvYVq",
  "key30": "3CRVTas4uXQNPo9fs7VrHvu1YqQLBXxc4o1y7UyWzwHNnuwMfaXoKZ87QPVdSk3T6V4TLognFzuV7W4kYsCdCWH6",
  "key31": "5f2vEq8EwpBodEpHadYxrJWEKarAtjGhwxrLGbawnUWEzfcYM69E4RFAkFJ2XYk3KmsXVMb3f7VZyQYApdFZ9PHU"
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
