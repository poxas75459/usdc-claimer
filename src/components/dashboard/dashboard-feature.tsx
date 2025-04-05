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
    "oLN6AJbjEXiX1ZrPREZLe2BJTVmEUoeB6zfisyyYSKcqWdMNJeUDER8h4q8A6MqAgvXmRNBAMCuUJDTiboWbivQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dkXuz79K6BeocbdYFmkUNwsGrP236CZC2fqKAQYy6Sd8kwAiTFqXgn2XKAXodmsKdHnbHEWQzJkp5xd1FDiQJVs",
  "key1": "QVJph4e2dK3bJ7vkeyCtw9w2zbzJXY2syhJsFubrdb1cCttcAFEY3wVDMrgUdAqXJdJ3hdnHFTh6c2e1n8R28wv",
  "key2": "RkTvq4iNChAJWfvsyFxFCu2xSYn3y6eqVQARh3YimLuvxe1zfD9Vszs3dMbuqWZbKv6ghfhrrMoWxSQZTsPz7sD",
  "key3": "27QEmEsrViLKYdEcXw1kY6sZirXam5DF4r9hdUZUuRwBvDq5BbLe9Ba7jWywS1AVrnZ33vTg6GZQfkaRwyKHJp6C",
  "key4": "4Q3NrUPaVXezZJyVu1bzyJa6Jxg54QSgk83FADr1dzLeeRpHBSwfzknfJW2MzXFZxJ26qxHNjsPxEgYbazyXKgNz",
  "key5": "371DLo9rF7xbNUFsmEd54WYTCxeKcfEQZki7ewBpAjVyYGTW6XKtAhWYN3yzbN7f41xijexM4u4X5SZ7DAcWijnw",
  "key6": "4vH1LrH4CGzTCL6tePH92bbYTtdq3LiQQsiQMjs2KkPekyfd7erdMBjoaocDL82r4nGanPtyrPA6priuvEzPbbsG",
  "key7": "2XrdTQLjGEvKz2B9aXXFt8eyYxwBQN7XooKhLKPxyvBYrmARA7CvGC6Pwh8uBeeTUWyWwLzL6bUHkGU3S6Yz4wRt",
  "key8": "2qt3ipix4KxDJNPTd3L1Qbsu2yoAfvqvdWafkq1xkKaPHq2YTsH8cVD6Hkoi3kDBRFrwZv55AM5QXSZsdnQAUeDd",
  "key9": "GZP2c8VkoBT2TFGgPK5A9b2Pa2ouRw4GjX7hziJGny3tpR25eD5YwvNQuEj6iinVnFYeBEgXXJeMk4aVLABsTVN",
  "key10": "ndStFh7NN3oeWjvH3N33RFBU3s8ZC9JYkUCcmrYNXDJqAr4mh1zDbiMKRTw9DSwZvJwZkQmeb4eKPf9mzEiJb9r",
  "key11": "23HkPgMda3c18iGVxdjgq8nNjHVrm8ZPEegKzLBwXjLpbuNHTxJqUiwb3U9M7TRQNonMuvGWufKXbTm5k9ax1PwU",
  "key12": "4XScW8mYW9AcMF2YgnsBMHWe5WGCRw1rdEz7KC8uka8f9HdKbxBU9BQ5sQwGZHoTVjug1kJMSjVLM9ub7QVcXjsQ",
  "key13": "2fRpZeRunV8V5LKU6AjRFaD23DhV3uoNLX1nCxguWXpq7mmTSANvSuwptPNMDg7bJxUBf6ufCVxgpdSCkXPvCiVx",
  "key14": "2s7nQfoHsj5zcqRC59Fqqug3mX9iywfzyFXinKaAtTBD3BbicQchyepdVR6zDmyKqPSJHBrpt2UN1BsqVDBbEKqQ",
  "key15": "2sco2bfy1i9FGLWrS72vBnZ9PJTNceZqAMDHsgz4ujCi1Tv268GZwL8YoYgZT2Mr3nPpN92xiV6UDcHiWWDE42de",
  "key16": "2GGpEPQLhqMS2BLN13izVkFAMWuohMWvzoyUomktfGRdwCwh7dCee76SiYyUGP8idHgRLdQsbue7NQGi24fPdwC",
  "key17": "4fgWVNSJyqHaKvrron7dGvBt84zusGkVFdMEa5kDZ45wrB6NYixptQQygsCYqdBfVHBEcZ5dqDDjLfFYeLGe9vov",
  "key18": "7rnkCwo6SmcpD6y5sowJ88uHpn2TC8iWvbYaPweGUZYsShurJAEi3NJWi9VPxERQH9gAdJN6GbRCcanmG8j3GYg",
  "key19": "n3eB6Dtut7rMVZGZsYfr3rohr9JAZ4aYogQJ8jXW4KhP8Q2vJBsSFptKur8cTZ8zbMrdcAtTE5NM7x41FNbojsX",
  "key20": "3YPECRh3NPpPb4Ve5fZDwHG1TxaaWaeM2ni58eMK3soooFu7antAs9xAV38zVCjELnY6zQUoHo5uuPFTSV6sfEP4",
  "key21": "2jn2HvtYsj8FXEc5Rwua4Ms5Nx12JiJevsBRuewQwQbQN8wfXjsgng2YQLGYzK18w5y7TZjgZX4eTZ7KmyxamRCd",
  "key22": "2G24zbmcTfD845ifYm6UUzQW7EqzpdYs8rMzPK8PFwWENTy16Wo6X5p4hTwe8wH4xkBS7dt6RyY9U3k5GvY9YhYN",
  "key23": "2NgB7XKaBS6qEKUh7kM71pPRw9c2qeyzF9Exa81Y5bEWZWpZZ49Eymp1bFTjqBbF6CnRHA5cPW7oKQTY6pXoyCdm",
  "key24": "2hssnCuDemHC9NpM4ow26zxtNLpNc6Doucv7oE762gCcs59DQd5YjsN8Uk7rG8xWZMwvJpVWDkGmbBWJGbgCAFBs",
  "key25": "4LjHVHMRQXFRN661PFvQhSDDUCay34bBeU1M3ahNPJ61ZhauAK9kdte1BUEo1WUbycp6qmk1inz3XwMppEQVZnSs",
  "key26": "2UAVdMBtSsTbZcWnDkDAuEg5qsbmyJXF4FxDEHMqAAG8i7oL9EVkNbGAsE9vtQL2MvnoHTsrAA1X5SmrHhGzH4xg",
  "key27": "4JcAvkwkU5ypZrt5G1s7CoEL3T4W4Um34uVmHdHdm2vn7j3vXAR6D3PKFNRaMigHZShrgmhjUg31fQXNKcsMiAkw",
  "key28": "5dRbeojgpAUrHxSXabVGqz9PHytKPvvxTT16eT97ouMn4n7UfJq1eEc9V5yQgRfSJBcNTxEiYkFgGwmuWNpqNQQb",
  "key29": "4RFa99RAV2vFvK4HZ1tonUDM95sLL7gGdMB8dmMmZsYiDx1YRA2h2twtMnaiDAd8HpENMfDdiAnfGzwNnDHHBRdE",
  "key30": "3b1DxpS2V7zhhFMfyJ6MH8LzwmjN1y5bYrme26yaGSS6LAvDq1Y9TZVDegXq2M5eFuByF9v2vdQSyzMVA5FYhz3Q"
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
