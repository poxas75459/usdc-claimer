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
    "4KnEgo6zNWpvet4Rw5HwYu1csXgao2A8gfjHsqm9xGkgW2EM3eC48UyQ6H3NV4kLPapMqHaPqww1UoSU8GjNY69x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jjzepa1brfww2P61uM4vTHWpZ17x2eswU2ZvpZCf4TQRtsy8iH269wSqY33YNDU9wXQ9YN2rxwzhpwGhLouWi13",
  "key1": "3CehvEtvN5f1wW9gMzDNHbGUVUSrv7xX2t72YTLEkSJMJJ6CmyC4dgV6Q1kaZwJpimAVDhEBYKeXg9rbXDbuiD5Z",
  "key2": "5dwktpndNBWHCpMKxSAVuADsYdWeWHJarNmgk5pgJyf22CYX73XGgUhgngYQLzXPtQDp4fcsh6ZkRccm9p8f8fja",
  "key3": "namnS42WRdgZyzyPDMNXHQBE3vycyMSd6jg4aAbuqX3YxNAFd1HXiUu6ednz9HAtJVG8dRQJ4Ud8ZoyqSzx4bTP",
  "key4": "4q8Lu6bmfWPFz35TktThMrJGqPQXYESJmfMd4zQb54mhEjN5yL482ieBXdTQUcTrM5s8mxqMnK4Ewcatv5UuyDDx",
  "key5": "2s4rpc75nUextNt4exWFfBmuMqKuAwmfwrr3MiHam5Vqv2xTNi5dF8N6oeWbofMpZPUpXz8xBxEjaRDMnR43yDdQ",
  "key6": "3S9WyvTUsGhWmqJ9b8n1fRvchETnpiUtLrp7eLir1jygtdzys553BLDNDkZHyBye6uX4oJRBgeEZmRe7bASAgiCa",
  "key7": "5MrCyZR8fne4LmwJufXt4GS5XaEVJAvXTaDA8EqE2Nvf3cn3mq9HZmzEf4RFQQvP2ziCo9L6SnKVCSNguq3Eu8Sm",
  "key8": "3RkxqwhapgstBBoWCPZ1oTerqY8Z2SqRQATCD674HZXdkPWynrucsRYzL3zrpSnWt6pqmJo2xYcUEK3VJftJ6yLK",
  "key9": "3xrjYhawwfz894U4i8Ka2CLqgg3HpuvfG4GRmYqyNrVkNNRt6Hu4FwC8FByxnsxRV56ZNifGoFDchmcqPK3dsE1A",
  "key10": "5T4v9qRKVZx3tYtEirTC872AZi1iNNfGYBg3hg3zV8QMru8VQq4s7EHnPdHHt2pK3aYGXzRcvAmotxBm6oCgR2Wp",
  "key11": "5QrBwMUZtzY2R7ATcso6NkYVv5c6KEBuaH63DfXnE5ZiWpbsEbqMDt2c2adxfdmu627NWMneV8xMhwfY7HmPejEb",
  "key12": "5smdqLiLoQMsrnykPrbDbFec5iyMjubTv9wjduCnxX8VEMEpE7j3Py9VSRdhXhZ3YQvDouJuwyDvnxoY6aNidkog",
  "key13": "3kDLsaMxLF1TPQiQyNrfQRtp9zaWp9VXrr5Ws9i9z36MW8iB9qjssviDgryKqdmfvLxoxtetFeDTBchk4kXa19B4",
  "key14": "5qLCmkCYDzuYQDAyCegUdgyqhFG3i1Bysx4bbnzsEPQvSpbcbVgTCVqhTRhFLAv3uaczmuDYu6ZjTdaTJKFUy1xG",
  "key15": "566K4te3r6dfVUJCwWhSpgiLdNgqXkpoThGS8EZzeyqpLyrVtmT7dLvJUe85behFhpqNC4W93TgQetsdNP5rahLK",
  "key16": "2PJjMTe4gk5BG9eMV1N6XJFxq7YufNQDRaBsiDyjA4k8JA6ynwkKkMK8AHU6x6fV5fHEF7KuKNRkTjakWMkaQFqW",
  "key17": "2X3KuoD26xTop6y6QAb2UG1PoWWQjTzLgpHu2dNgJ9CQnm8xstUJM5DW4GCfQAVZt78VvgaLu1uo2HsZuVBwk4eW",
  "key18": "5yUPnqYMGt7cAVs2mBNjHDxzEbYEV1uGW4xubDCXg6yUVtcciN1TJmMdfXmD5BqwGkktNCzeVMtU4CqWuTuw3eN8",
  "key19": "5AbrujJDMapMz4Xy7qmFUsGbFHoxoYkc2aL2PThdsGsg6kCQvinH34WPaYT3SykzcyX8UZfkSzBo31ZX8MzLVavi",
  "key20": "3zR2sdNNiWQp94fzbdzSdkrmc3PmWfLeqxgnuNu8qC7o9juvacf3WjwGfe17jRXZ77cNAP3PqpQT8jqjx7pQDEC3",
  "key21": "tvoshDxrwrCYt6N7aSX4t9Mh7L5WpuZJX116M4SKLdZmjkNHAuK8JSHWziPbhyPPM6rfaT21iDmWHQee5PETpa7",
  "key22": "55X6w7TSQPS3PmAwuEA6yk14e7rvhPh3D3v8NUB9gjujaXRsBPEno2mDxGsVnj2Zxo3feD7hzd74eXEcWU1zMx3j",
  "key23": "2SztWJjAw4XhzyiBuNem7bthNnPGW9Q2s67N42kd9NSmuUzm69aSdNiR7AMAMzuWLEE71MFsN7NZa68M6ec8MgMa",
  "key24": "3LCxW9fc7JHD6DjWyqZ4aTPiCpK4cuW9HRpbKDqpmuiLiyuALgGnjyzjBkfycTU2aZo67ddbcKvpLF1uMW157eRy",
  "key25": "4SUbNQMLEjm1KzKx9Zg71JdxDVxrWMSAmPhe8qczGcmsCpy1hCZV8VjCToB4ZUiVMBJinLCLcP7aY2VtZZHMGBuS",
  "key26": "2EmLqwnKzQfsksczXGWX4uKepFpJHJuUksVYjmCSDgHCob5DmsxP8K4DC9xby3RELYnQaZDcrz8Z3Kfjm27QSVjR",
  "key27": "5TB7seZpVXYTrV5j7kKCS1ukdGdubPVfMmvTxfLUuQ7KRfnbymJgMfQ1pUFeZNnAb5VwQ2k5rCruPgL7QxfeqmuW",
  "key28": "2tt5FyDQ1qv2KpsKRfHpYjBjJ4YFnehAeDkbuNBdhdoRg1E88fBGFFK3EKJU4xKAhyQYBU3PqLRbsbieTmH79W2b",
  "key29": "2R6mzH1uq12pXQPhXFtz5eNfGU982ZZCRKHerPBJCgFeGddQeP3NQi7EF5SpzTL5gqCDeoZTeSwzTzS8oKqSDXQA",
  "key30": "2nsSjVuc1Yyfr8TxFH1rqjg78U5hPVAskedAAmapKw377vJ9LAuXkTE6CaUEgN8B6RubstMRwmdfK8k4JyJCksb5",
  "key31": "M9DKDmLYhUynUixUecUPxtCuAWB2H9vxdY79yenJhBuPMxzexyhvqgG6aqUw1ZZRbmY4pus99Bfenx6snZjcD8u",
  "key32": "3snBHqmgNjZ6AMxxeANfXQsttrdYx9cHZgagHSxGoJmZJ9VmLKHDiDEDWwcrCM8tKh5NmfrwBVDaPmVe4xzCrrUV",
  "key33": "54689eMfKsqybTE2fZFVjEqT7HRutR3tCFR3PCioknxN8wBiAuZWUkzh9cEpGctPaoYJR6SB3sekf9cj2hMsdzP5",
  "key34": "5mYBygQ4bUzRe3iBhffhswKXVjG23VfZqFnvDtDK9sT4xbX1LQ1DMW4wt2CaSZzRXUKRSdzeHwB8AU1SMkxfrGL4",
  "key35": "G4TygvNXorxFBf5KU8vodbAu4xpJ11prdp9BG44HEHC7WYimjqwGpswZVyGxuywLisSJPSSfpHFY53jRtd7Ltue",
  "key36": "5FWQhYP4vd9bzcC6g3wCaHvMjKUVUN7mk7DkHaTWevmU2oSfEBsUvpLNjic18nJ4nHjtv9hhAoFTcCLmXSerhpUG",
  "key37": "4v6K9HNw3QbWKXc7ZkQm3SYjkiH8WZxKQspiEKifxcFN1hCC5SiHu4BXaPe9YUNL7xSdsNaiwCyPbfBFXwoDsz7Z",
  "key38": "Lddyxm8PqocHvyU2ooJ99h1pAj3vnM7JTvHJEw3K2jJLrPCZVwoxBRu71zU2pUs6WtmDd1G1Tn53giExSrNugWa",
  "key39": "4n5i7YyHGQvwgCgee1RG3DeRArqjRUkMppvXButLwAtUpCL4ooXFk2eLepcNE5j1U767Uq3NdwtdwbVZqeZfVfTz",
  "key40": "3RNjqhDz36T1eEkCWH24HWzsH3sYJ2xMRTNmVBuCZCgAPzeSNS8HUFvv1NYGuDZwyF2rEmzWE7SewBhDdL8vyPMd",
  "key41": "5KZasbPRxFLfRgz1HuDq58o1RkxbjGPSVozHncG7CKS2kn3eeUegHbCQMxozqnZAZnUVBAN6GAbk3pjAno8zatLP"
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
