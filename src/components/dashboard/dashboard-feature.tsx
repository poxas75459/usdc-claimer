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
    "4czN5heE9vRe7XJW5eZZ3DQPZ8vTVnDvFqWXbom2CQM6c7Rk64tbRafiytpDVPxZpqqmRVgczurYrBESHE6cSyYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VReaKEzYdmLtRWR6GcwhoH8YBSiFmwMMG1jU8NPygj32c9GCm4R8wQy2Xqb4oeyKvo2UsJUpYtEB5w3TtiMcvLX",
  "key1": "3GWnV8w25iRSaWVw3nbo8S39LvN1fpTmeXuwcPpMHen2VsiqR7NhZkJTGfSavyV1LpFztmgxB78HaDnSfDoVSFLR",
  "key2": "3tktAtXKrVs4zQ2dfKCjFFPRhuALxssysGsFrvVKZ2ccsNPFCcxdxFcYd9XkRutWt8aiD5dPRvbEG8sawdfSxxei",
  "key3": "y7SKgCotHvVFCka9xPFnxoxyVHu64mpipngYMD6YGJx3ZHMZaYpveaL7NrZuHCk2N5DftNXYUYdX7aTWeCqX6dj",
  "key4": "3Tc21nks9HLuhcYwhbdDaiiTTdLESNo3rWEB5CQUN9zpQdHjZZDmiq9zN4TCvLNec9jzjD9ZRKiciKfmhSdXqqKY",
  "key5": "4SQoE7ks7GxRHkQhYZJTRNAeEEUqWbwKmNUYccc5Mbio9r6zDFSTjEZAyb8aKy78Xh9mV6yuTiejN5ptndhDrvnR",
  "key6": "78cgs76MYevkmAKNt3kpoS2hTh1gcCc9ksjBgjCKiUpe1my4LPVPM8ryquJFdXkZTQ2D6AFimmT7tespbT4gTaF",
  "key7": "4uRYf1qdbFFzeMVntAXAT6nckgtH3MnP9CU345AHYA9gc6TynU5jvyDbaf5Xwp5TXUf9WoV6v8eozcgEA92kmeDA",
  "key8": "52LRFSofs5ZkTA9iGdABAggWfXsR1Ptc9a17kQQH1KdEjUYHGF4BT5PKu6nZShaNp7XtX7EpnnMaqbx86KGssWYH",
  "key9": "4YB4QCSy5KFJmv9xQqVxYiXtFwjyNke2q3s5AFYwCskZr54yDgBnB5JcWZzJ5RCLBN3PkYw3tAyicdpQt1LeFLEs",
  "key10": "3xfXBegouApQ3iudco3Mp67kbxCdDKcrERtohjvw8eizBb95YcUTcuCGmRJjNtHwUPKGoF5FxaqG8FdVqUyBVEbG",
  "key11": "4Yn51NxnzDAjWmQugANce5vA9bYHxpy9MFo2EmmBogbg3uPqKQpDgfKaubz5P8byaTE1wka4LySv215j7TAggHWR",
  "key12": "5mFVuXK6oTU9LK7eVFnFSCTGQFSXv1dfkvQF6Gan6fp3W5gqZkD5i4cyT7oLWyypGbiFg4d9XzPhT4T6to8hvGWJ",
  "key13": "2yxTWZUXaGpErQwDVJbXFo3yynXhHn315cTdyBtMHbkXCA26YjDyXNbhnLJCdUYHW5wTHPUzM1yYbdqC728psbci",
  "key14": "8bSbHERTP6UcRN6nSGvY8dDHef9waCwSqw3VLCCzCrhzbeCMDMofLqopsP79fsvUxBshkGQi3qN6VePWNBu4Uwn",
  "key15": "4RzHJmUwExCrDm1ExqHDjqpU2bKm7hkVF8zU5M4G9fSwf6p3R183WQx2cTnRsENyicraiVEQkd2s48YRMVBRt4BB",
  "key16": "3XLFUkfWorTS98nfWQ3BgtShzYMACSi6AbsCKYASusBBvFunJAzX1fpZAMtLz7aETH23128wMnwF4exP7kajw77T",
  "key17": "z5hxT95cQGh1WEHqsqzwC5hq5u7VkicvxztcmRKPnqLNxZSz3NHjnsYgUSxa13gq4ruEaNFc6NhpFuDXEHs5Gxg",
  "key18": "22jDRJV9HCg2pYLiyQ2voJ5Z4rMT71QXUvoqHiiPvoJkfD4zR1QED6ECgknAb7PZLyxUGMMV8M2KTn5xp4R9AXvm",
  "key19": "2s5RaXgu3Ncm9eebX9cAuTQBi9YgcHaYeVvBB9WXyVu6i3EUn81CSX33NXKKLXmPbGQXAvrX2dpPCP2s7axsDyLK",
  "key20": "2NSz4riH3EFiDTchdvSuPYM3yTKvGagYoZBfcFb6XYExdESQUEXWSvM3mTEMapHAhin5rUnkUnP3v2AZorCkndyV",
  "key21": "3gMKNWVLnyJ1WBJKqF8map81K4Mo1eSLHEh1rja8BnCEtwJTPJ1X83m9bUyZ7BNnvUPR8QdVPVThbtaSdvrGytL1",
  "key22": "5fZfxWGQTMAKrPYSnADSTm8CwHR29pF1582dTSVSsDCJRaRUAoH5Q82EUux6tQRsvAQ6E7cX6ZusDiqRrbsEiuFV",
  "key23": "5hsrfpEhMzzsNvDYaobXyNtQmAUdKio2Gg2oz9WjsufjPyfuUu7tetSHac8sSoDhgCC1KZw1BmoeCXMNEwmrPyNx",
  "key24": "s1Zd8REeUEp5FnhX7zaNopB6gZRBTnRfQTu4Hvd2LvEkeKhzN1Sfy7FHSYrTmGNzajtSnfKYieD112R7HxCGBNE",
  "key25": "AzUQ7MaYMaV1FrRoXCiiz2L491cQBzMM1szEP6m51DqJfQ2GnSS5hHJ52Lj36VrnEFvQud3ED8r1naLZyeRdseT",
  "key26": "4DR2PH5bZpRB1tqV1hnCh1absKZYUogUM1cFcBca8Hh6KfYjyKQEtCEvxYRP94RPSm6zSVLKyiWsF4fsAWb83Uym",
  "key27": "3LE7F88a81dbFBHUEjT1vMVyJBXSN72vDoQRHyXJsozgMiFFzx9XB3mgqErXFXpDAeynYZiZaJeQnQUYkRmM8yqy",
  "key28": "2z4M9aZj3Wsh5jUXKSDT9aY284B4dSn6NVkRbGBHBn7FqGQpjhJauS33MgxcJyJgwvipSEU6gXfTE9avXZ91hQXP",
  "key29": "2cNgQmHh85sv1fs8UhfUWG655JSLUnGtBD9EqE94axBCx4uRNupe6nLY3PVRZMy39ytb48yXWPBJQn7KRxja1nS",
  "key30": "3T1cCUBMCxsNF8AeFQ7UUxGc6WTYTYZkE68pUC89uwxGxgQ7Tsq1qNRuh3WpumW7ax2yNjtqWPM6SDkqKVNpFxi6",
  "key31": "2oaTV3v5nbmkei4Jnvcb9amdxD96pJabvByk4J9knP2rhPoou6VPyhWiNX9DBUckmGeuaauUTfC3NKaWHqyg4595",
  "key32": "GJRtUTAERWKUg2DKEVb484gWBDLnFMeZdFb7MxSjcATpgfLnckn5v1MzD5d93hqMLhVUdLnaFeX8PdNuEih4w9a",
  "key33": "4MCRQU1Rq5fLRE9nEz7yxRVWtk5zVBTyneymPwsCicmFdyuzqJSCKabBiynBHPURmTTVSzgTDLvtwyJe2gF5aj3A",
  "key34": "3zDNjxusEMfgA1m7jcVqLxKEb87exbvQTJVnHryXQUQQ8rDaSVL8Q8Ncr3yotJedzYXNbVLgorjfrUXfTzwG4KUv",
  "key35": "2AvNNegz3hx4fnS11Bas4tw4dLVS3fEd1eC53PPR2CVoHph3NzPAvtVvUYabKbaE9s5yDayopEfuq5tYezHRcw68",
  "key36": "5P3uZRtR6dJhA2fwcPVf1t8yxQyQqju9JaNJatLEF3DumKwvSPT2YV5ZqhEj6oCyhDDZRxi5gjB2sW1QtLaTYMaR",
  "key37": "S97gqxesAHRzqymwsV6baJmC2sKioDeYEjSZcWjUNnsbM7oW6ku1jTDD1wrt3F6J1gzb2V6e2evTDQstAeNdJzF",
  "key38": "3hxPw4gqUHJrTAPvGhPPaTJK4K37MyhDaRGBX16aZ9wJADx7Kjaht3SB3S7ypePWpHhg1RQJteNWBNQerxDKG51P",
  "key39": "TFGG3dBqEEcZ2C4gT8ZYywjYAj58Cbw5JztnNuxLszjDxVTiCmszQ45v7J7WUzHhpS392Nnw4REBjxHtBWmUqxR",
  "key40": "3kNjSLJTYwsMmib33G3MpRT7MUew2NGPkdMGfSD71AudntF44wcQv8YQk79RFkT9aY75FL8VJabLitQhVSZJJ63A",
  "key41": "673HWsYtQ3ULj1JvvDhd79dNqB1FTJXA74J6fg1Dft3tFtAkE9DqoNrc4zWUnyb1TgB4f4p1VA8KMwdFaZ9SVMed"
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
