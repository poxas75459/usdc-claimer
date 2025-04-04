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
    "j9iF5cSZxMPSzvvavytnkNDgHGNEXcMUWHBxkZAmBiyWZsHbpcmj8RSPNL9xXP8aPeew7oq6cmkFo5vtQGJ5AVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vdy8JuijgUarvvumQ6KH9PLFzxy5vnPh1yU6dmHoD9xXHJebj1fGSKfLPScwUabZyAKAW9NoLXREXN5dUUo9TxT",
  "key1": "2YNMbyw9LJQ8mQQH638L2eZum7Wqfp6aN27GZyyGJymTSbGhQmHMoMrJjxTnf5Bj4iqo4NMiMBDv7xMf4tu2Lco7",
  "key2": "3Gcr1F3mWnU447SwcNcmR1dTPpmJgDK5omWnAeTCAmtpMkYpG253f1DNk7jx3ann36Zi92LaosDvABkNsFTNzusf",
  "key3": "3rFzPWkJzGJK5SSgkJb9QfbYrNPu2WaaZa5Kzu1QLiS6nVhotsctEkCuHtk3HjkwQ6d2jPfDyoMWbpArqqRtujP9",
  "key4": "34PCm2D4Ry4Zmf4MxzpgcsEccTs97Rdboe4Rs228yYMLpZGDfGcCyEP2s6yqY7A62wp995xwk5VRTBgjNarWAQeb",
  "key5": "2FRHcgGnxyhtoSJyY7swxHeVNcU6JLyaLqbxYVYVrX7snHymywXacyZdkuxkd8qLabBox5z5K8zw9sveWRrCvg8h",
  "key6": "2Xw77jrKBcjCsecxKMSn2mnFSaqn9rPYWVsMsR7mbmcvxcPHGGhB4dVAgTLZ5wDzgGKwhMxpBWXhFzGV6r44eZkf",
  "key7": "4a2psqhLfe7keLMxynKRHmiMyVxwPxWk9PLEzmgBkDq4BBx54neYLsJCYRZdnSMBKwzBFxvEqjUCWXpJu3dw9urq",
  "key8": "3SDLEtspgRu6Sm15itqMKZhTPfhxYWMTjnhxYjpV1dv3KTo1AFemqh8kYBur98qZHyb8tdqpxKU5jqCzKvQdA9k2",
  "key9": "46KTY3y3dfwFuSK6n5uyAF4Dahxggyp3evjXgLttJ4XMU9qscPw3RwCbf9RrXtRr2de49XweWpHcVCUF6Bj6Q4Hr",
  "key10": "2pxFT8MGpFpCQmvV11cnWSJkNaQVCc6D7PhZ6r8x7v3wJkfBsNgrPJ5gDNw2ZwCuYty3RkuEK9yJ6RQnEz5Q8Rpv",
  "key11": "2FwdbxQSBxz65hgeVRz7TiNMADr2iZGZj2fNi8sUL67BHFa1qmLjeq4i4VtQUuXzkVPA7kKwG1KCFWNEvWp7sxEm",
  "key12": "2hmTScH7q19V5vZdXg1YHaZbXQw2nAAp5i3CQhbWFMtvwe25EmMZCdVGTDpEh15AjbNZ4nKYD98FgHLiATt8A7UB",
  "key13": "iaV4n4bZo222mW4HWmsNj7K1V2jkSP9DR2SNUNckggVZXbcrSqepiX1SgsKv9BRhnQhKs8xADnJ6cNyL9uXEsCv",
  "key14": "6499A8VxpEbhYma6uyuWswnadffxEVrvSvJ5fy3bxmiDSaPoFA4UTVTi8KzULRv9PErY9gHZV9iFaDxzA6vC617h",
  "key15": "5YnqFqH29vhTPvATG5W1WVKuNVDQL6fFGrY8yNgvwbXb9UNMWH5jup8kYVhn3yg1AJQaNJTNb364N72pf8YDuwYH",
  "key16": "3DuSVMDQZyrro6BDhQVrfYHu8nrjKQ1VhGAPiSLpoKeAgiZ1S1xDWHq6HgKWUhurpJJLXrxCPeiGa8auas3yg6mq",
  "key17": "5ApukPAPhg2c8LDmir43WEkbGr61L9VJyqzegHMFpUS9xbYyQqAx82CUdgbwjnBEswZjem8srK2pfomBfafgmL7T",
  "key18": "5CJUWo825Rb34ZR43FrzBmhsh1uWtnWs4AeKdoVgJWe47NRubqBofqy84c5MGPkJTaugbfJ6pZu5LipJmpjsubpB",
  "key19": "4NzqoAC7F49uJ6JN2YaTTQX92ihWwDQd11N2E8d3YECTESXAXXdVzfBHYimxWRwqFHHRRV7T7SyEbwgf88PjcLLy",
  "key20": "3VmCgJBf1jcCosu4gFqwfBu8o4kaxGsGZtZxoPgdiRjvJdJz9zGuTGJu8qJkgMCFvmQ1tJMrptEitWLX6DVk6npr",
  "key21": "i9vJoMWsVYHjMQMXLjmP3ieHuPNBgzFsYisLitvvBLLi3cFsbq8FohRaqwf7Vugxe2655Rv5fpEDCmWAKwegAs6",
  "key22": "2G7Yu1GJorrxDVdshEfKjCUBhP23hB5YSK1qFT9UkbrjBQXt7JE11qo9juxsLotvLTVuYgXtTaDhqw36igr5cPS6",
  "key23": "2zmrTYp6jcGUq2CLjHr7XbUMHfxJec998qyKqYqBB2bLhCM3XiwMtT826JZzyUGdocKCnkx7MpWBZbQY3saMfPhi",
  "key24": "212dnkxMKfP7dbzk362Qj1ieBQqjHTjPhx8bUVi6Ab67BDCpx1yshTqMDBjA7t41yVTKn6j82FkgFggDL9HzQn1n",
  "key25": "4zdrfZ7TUBm3yeJVGSNi17t8svFkde7MSYJGb9ofynhgFKBuw53hTN2taKm2GQzdr3tMTgaqN2JQkPpu9CCDrL9d",
  "key26": "3p63kARBUT2e2QBHmLFcBG5PCLvRLKzQrpFSHU3kTfau7YxoLz3VVHjnByLvzuaECynzowLzo44oakdfbTCFtaV6",
  "key27": "4HrPj9FXUZrE3reDMhvfmUwTctyqaMdMGSrqmNJQwSFexBCUAmsE5W9kGHJZynMQSA7r7hJ3hg8gQE41Mjd7feA5",
  "key28": "2PVuX8yqF8JSCFt2WAFBXiAkYziEshwQdCuJaMVqR3RMyDsuiNTgzJtWZ7AZtNcXyjckrsQZtgkTccw9fLPGSzY2",
  "key29": "53tWgK6GBoUuvcoii5CvfBhk8PZfi2n8edwj2m4Zpqh2VrR1oYQCnwvQnexr9h2xBfgVCqeY9Jg8YpLcRd7MwaAf",
  "key30": "2fboJtB4zvEmbTajvFsWPg417FRzMUkk9pSaMnxrVgKFdEwX4FsAunHNxDt5Ru6SbjT4aFJM4GG4YYFcnYL1KZdK",
  "key31": "Ai86eWaHMMKwfTNRe46CHCJkNn192z8ZVz1Ca3V51ZgMbNi18DtMNB9Y3ZZuAiwqSXDV9cNxdmaMaTiENDub8nc",
  "key32": "4oRqT4Jc7Dhfp6BWRTUEnUkWsULWw4MWRRS7xsHs2Q79fSxNUzv8Kn7vcK7ucei47aFWfknA5VBHSneXbvCTf13R",
  "key33": "5xoznQD99jCbiZm74TeEb7AzpPvFSmTghvSfHQvgtK56t3NCrX2G1FyQPATpiDrEgU5aBwC1LEKXokWWUTpqjfCW"
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
