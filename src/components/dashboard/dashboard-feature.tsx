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
    "2KDQ9DuNKbtk7uv5zdwz8mfSM81cbiXzDYFo1HVg2mnouMPU6EpwDEwTCewafmt1sXbtLUCfC1uoGvDHeyYUhh6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ccAeWszHFwgqbWnSsWmLGesYUgRrCwmSAwfCaVdebLwyysK8jSQmUJACtXW78BNWHc2ZRJybfoYjzkuWuxygQMU",
  "key1": "48ssK2gC9EVb6np2kFU4ysPwzZrgejy9p4ySmCDNyfVKdgZm1yhfyv73UWwdBjg9HayUZgKev4xqv9TtSZj9SvDc",
  "key2": "4evnc8Lbbdp4G9PUzaitQCmEd9E2FdJhq5yfbHDNaR7VZiYQs4qoJzvYbCLcKjXSk66VnTjJb2KwQkw1Y2imgRLy",
  "key3": "5yr6pY9t1P6KPs7BNnhYQZ7WQC9gY1MXWBmgdzt1NmY9Da2eRCHMBPgVZcbYb4gredx7UxRDFCYnv9oL3BMTguzx",
  "key4": "4zVoPXPdYDq9Rc1aiy4RoZKa6v9HFZLFRmCzHVSat4DttGL2jmUgPPPiX1kQzm5uEs5X7w3nWjnSH5rjnoUsMhHG",
  "key5": "5a66bJu2z6ENKD2EBKWNcJSPcEsABgc4v28B5eXUtTgp3S8aer3nkfqrghUdjZcasiNvR2WvFw6dsYFKRLh47UPF",
  "key6": "5F2WixFRAPBYd7LPrkZmRidWpzSC1ezdsLHyeVFaKjCKdmHembuiUwjKcBKpqQG85QEohwpiPsReKRenrkp1F1zB",
  "key7": "d99cdCJ6X8Eoz3ZRoZ7XXw4hMSC2LB5hvmqeXkEaP9sqSkP8VN1rJts77iQYwF8VZKFEz8X7GWKBPAnqoQj7EmB",
  "key8": "peufbbrecNAEma4GzQtFHk8JtyxA28miPNubMY7NxFb2638XaWg3rVodsuysS8JNMf3aJ8QSidA8aRFR7FSNvqX",
  "key9": "MYk8w1xks2FPY2nQViXAKBGjrfueUnczfV4re4kQwtU36FREH5zMMfXviy3vko7mpALJCeV8HvvxFLsjG5y4n2b",
  "key10": "2NGMfZzAW3XvezVtCfgCoG11JVRS6P7RvD5TiGSwqrTz7ucHdfrQNQte6RJQvY95cii58benafwCKhwF4197TKng",
  "key11": "4dsuPpK2viZN4hJaCN7j9MSuyWj3jtNq5J7JAnPtzgxPL1M1HwMRADH1H1kVXLBNvu3Lph2sDWQJ2XHy1fPFXJGx",
  "key12": "2L1o6LPsnd2W9vzVuR7R12xUwyv8XZtHa7ykuW5vFT7YEsf1n8natDatEHbsXP29tp4VTc3CnSy3jEkyQmFsYvTf",
  "key13": "2tMYTkU9BB8hNbDeJ3yUDhchTAuPTHgVzaQrL4M4NCbADXaTU698ufEodzLTSbwZVhZETXsPMXTbtBMn1awhD74f",
  "key14": "3KTxPZjZHWWmn6wBjMwhT9U35pCEzmzhM7bRkSpDoXf47tKyt2kZbDtRwf1jwTFp1wHLBexrT7n6wieiN1hknqh8",
  "key15": "N59yuK81EUYYYzbj6x3Wi8Sk2BYeCxG9d7xrHLqJ2QP7Q9RhsSwSdg18ubbsspWSzMMNFLQGMy8unRaYwt3wPsM",
  "key16": "2JZeidSH2cZxw54x94QyunWKTZNzbtBtzzm5mVG941LWGcogXJZnWQDYErDihJUvCJEG1Wrd7gHJGQxBCDDiLYG2",
  "key17": "2go2UwSCnoM9ZjP49xoW78owBZM8YvsiWKTKe3qWXSxtCQAH2Mw5h4abdrUJUN7AiZk3woy1UW5Rnkya3gfgK76N",
  "key18": "3viAqRrqDGmGxfYY381MGE1d2QBbCAwroVd5NECvBUjFDLYrP4ad8MsHAQrc3MkJZkV7d1BHyy2mNs7dXtLo7jXK",
  "key19": "2pfAJbE7S8FgKvonQs7bmJNQXPuNwd7cSoGr4sHzGkfLp4MBp3gdEkNpyCqyZH1ADozoENsQbUC1aWrj5GcoWHxe",
  "key20": "4vVCHuP7tAvGTRLjvg3KfASmRVRbJF5BE6zhfo8d4zgyvYMU5dR4AyCuAQjkKwHVCH2tmnLSDeW5pvcoCVqFVEEU",
  "key21": "4Zq9YaGA66MecszEuuzWv1EU4vr4MMRBqeWAoD4tATCy29mm3zuLrzqUwAMkcHtSFH8bPNmGGhYS56b7SogcPhrF",
  "key22": "2mfpwPciPcakgYNgai5fRwSYHGUXcw6xSFb4Gf3S2stt9UBf2HyhuxbPPr9eaYXrcdcMGJTxDs1poN3U6zZxFuG4",
  "key23": "2DqP6xYeA3DWzrCNyW7xH7zrK149prFezKFw4WLN7QBjC8TQ4JFcgB3Ya8H3Vc9kmTKMWb1Yprtu6VYs4qdQDud3",
  "key24": "4WdKXkyNAnfMUNB8RjYUoHF4ZKmn46fU9Uot7rbEsszhoeqmYNyQmLwLWjDZjfPgrW3qppyV6bm9Hg1YRqTyVPES",
  "key25": "24ccUUWWEMgf8kCV42ZmWvvPPZWGegiLj99zojRxNL2evx2zjY9QuJsfgpzEK7gKttqf81YntS6kLEVNAABsQMtN",
  "key26": "4s7tb493DDKaEhvkt52KPdrNtiw172cxtati2CE6cpHd4HkoDR9Mx7YiRYipi4YWv39323jLSuaxxhmPn5UWvs5T",
  "key27": "4qBsc4dHFy2Dm1cMHCdGf4HmSS8wJCgRdqsqCSWv8TJUqDN4NphFjwkoKqBsCnptgqzoVixKthLzFsTH1EE6bd14",
  "key28": "4hdamyuAjFYj7yxv6mBXd5gtP3NMubJM1xVfVRKsHGGDynPisETpywNyMpdteSnaSn7XgvcXV3QU4HjwLtTH9D6a",
  "key29": "61EwL5hy5ATYs3w4MghzUrhqqwt6wd4nhKtTv8EHNLZ1Ge6etTKuwnqsFHJCq53hgbGtJVVkFJCCGDVSyaUYJEGk",
  "key30": "3a7DoJF1Kc6RX3nh6QZhYozUbg7BHZ744iNPyQB2gzwz2bw9kaJvoVtKXVPX9QLUuhqxdmft6FqFv52iXvvngpWz"
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
