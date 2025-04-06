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
    "2SPB8pzptKCwCvcaQ2C8BR3EDpC2CcCR3jZMto9hS35XC6RrYYroiEJXcaxTTm8hDH9f81vgQRXcmp2MP6gzCDuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n6KqUkY9jksCzCT3Aa7PQbbZhL4khoj8sMx2u13vAWSUesuKAGxxuYkibSZQ8KvqrAetJ5QkszPaeSHA3m8oV4w",
  "key1": "3uaiuJTmHQEoAKRzrRt7CPYZ4xANZ4p1XZvtPDqY9ExTeDYMhutfj9uzBcNa21kpNPfj6srqafXg3NhKAXGmYXGY",
  "key2": "UM7G7zZo7TSMzLDeCRYZyzeZM9eJNKfpzaz9Fezf5c2MP5mD4qrDvNvw5Jo2dE3DwG9u6h9fuAMthhzupZ1FysE",
  "key3": "2QYds7FPjLZpTBZGZgtJyeT5L39p38YnnWpzr5179euv68X3F7ViLx6gwuU642KHgBFFjeobcRSWaVQ35tw2Z2KP",
  "key4": "4VMdqL5DESJMy68df1PTre831ZpdVyVLVrJZZsXcYRYakyA9ZcDvaMEvZuZob51SxsXLKmkV37xk9UJpaq8VGqj8",
  "key5": "r3Dgsg4Tt6NSMtJZ2MPVUzWF1j7smjzZunJGKeXFP2epM5h1XDTsysDtCEKZSjRef7bW759NZwAbbwcauTf4YDS",
  "key6": "3Pt3bYcf8kTAgDuwhDtoYDpnV5D7BH7iPsTgzpkev3nuYYrBZ65hLB3sFTcQVYNcwMDaueschzG71cszu6jKDGMp",
  "key7": "2vGoAimXQiRUBjrLEjZyj3hUPx43nudCxuxGxuQ9vLMbex9zp2cyhkEy7deonYmEcsoaNHR8dwa7BXM1S8Fofb9n",
  "key8": "5gmA6iNiK11iLYWLAZycj7BYQCrfAeFSkHhcg9m91xqJQYrzWsJ4Ysrg1dm4UWY9zLN47NMP56GKvGQ1B6yCSmYU",
  "key9": "2mW8R3tPc9F8PkNbX4V7UVcT9GzTL37NTNjtTj8iFJY8XWDNEfJyJYRpcA6SYuBAYvd3dbUAo4n54er4CDhrtXLf",
  "key10": "4PBLqxNS5F6Fi1gs6AUAKAX9ojH2SD3HmXAB5i1oW81YYxVGhfk6uz8snbFHy52opDghUxMCFLiWAfwrEbBC44HU",
  "key11": "66XfzzVB9dXWMg6AduK2JNUqRaf2X69KHvxt7KPSmYKjz3b7c1AEn4HNFDsWnxD4wpQiuyEprtAo6YYfnNcZysxs",
  "key12": "5ivSBJhjcQnGYteBfVHG8ouVusnX6o6Qvo7STZwwmDYNWmzZJkRjicXd6btYeCdiPxCfzUomThaAAh9w8iAzqnex",
  "key13": "KZeDtwYd8Foz27LQQjgDgWJUzzyckcp4EY3kbEXHBg1XSqZvHf9htMLd1khcjMijtFkdeJJF9Dwu55xoqdyfUke",
  "key14": "4wqFuzMfQ9MGb4LGYW7GSTjdKnvCPwD5tntgT3GeFwDqWCErXYifZyqKCEJcK2bhgA1MXzYbtPvUYNRsV6AzGFAy",
  "key15": "4jfB4BgN2MoYiUsnjQSYrG7JSBmQaLuofmMWtn8qMMzYDzQcWBa3DELpeZfi4HWiXxAgj4rGciP9YiCxrKBYVkWR",
  "key16": "5tTXiFhKwrhVQeRJqNzFX7f5fQUAGEAZnJM9KuvdXDRR1YCQYXwr7obhvshJc11JqGd5Z9kWb1uhAgLwcKSEYfY3",
  "key17": "28EE9fdHw2E4K4S5P2if2mGhTqay49vp1t3otFULzhmBdHnPpDQU6S2DLBa5izz8CnnmsQjtwuMs3JL1vazCe8yi",
  "key18": "4i3uPxr4QNxgQvpFzRz89nxdeiNrs2N3MJZLBy5jdQczQysr2rk1n2DQg3tNDuKFAeGkgV53L1Rz8fjjCjLTVuLo",
  "key19": "2cZziKsQdE3CSRmP242YZcmwb5GPR86zydYMcpJKxoi1Qxir8pPuz7QUBZShTMJRp1LQAy9uDYV3iLoTKynDMNoG",
  "key20": "61mXVBBXUkUgcFr28191RZnuX8XpRMPk1rNK1LLMzciTkPNGncVdcouwPyFNRDDDpBqxe4Kgr4FDAWrHjwAhPtqR",
  "key21": "w95bcu1LYFmFen1SjyZtmmSDMTVtAcM6AowQW42bv5u7hVd9gQ9Pd6VS3uWEkMgdqKepjQbJoV5YzVd3zzAyPb5",
  "key22": "4wPLwH95peDNZQy8BXufqyNhc2JKRQwyHueCgzVwD4caFhJkfL3Nfek9KasxTWR7GCo6eU3gxogyRgox2PGFjcBV",
  "key23": "5prFJNV1852Vzb7YmVasqsi4Y1Uo2kz72ps6H9ZPzJjyfC5aJHXVwfqKCWsBLk9a3GuHWPPieGGC7aQkgyB9CGCD",
  "key24": "24vxQLSj5qdXFU6sqfGczuef16DiRrHtjM92SzvcbAUuHyCtrnn9EaoCa1Q8tigJ4Zvbfev3tm8zUZRiWZSBBuDq",
  "key25": "4Bd9GQr7uiGuP4LwueQEMKyQHvopCTpKy7CQvsjMD1JE5ZBiFaVLcZTmcD941VvEETG47Tjg19ctDWfGRyChFWFn",
  "key26": "5KE3uQE5TeqM8h6QgsAYJFRHeUTcY1A8Vbm5qP4VPLA3d2S1t7cXmbHa6kbN5mRN7HVcnmV2BtrtdHvMadEiHZ3",
  "key27": "46h2oCH8yiDSMWBbLrryPbAR3NT7Azqe83Gty5pwR4mgE5zhAAXVHoBcPYUwMdSem6JTctgi8mBspqSiP55xFBDe",
  "key28": "37aZjn7H8nA6ozLB5zt3Zir4ayMXZ44Pm2V1X3CBzvxsJ7Xi7LurAYAo53fL2yESKdvPa76f1p4rHzh8u4idQpgE",
  "key29": "4BgzErPShtbgfnKEWdtr59BboAUtbvB5oMmyr1Y3kq6KoPY5DfeMy9sGMforu4xEqHbKSuyT4xsixG67NDPvENDC",
  "key30": "5Jeb85uVpLFhB281cZQ3XT4uengDf7xeVAtJeTDYUvUp8SAE7oLoFgDpxXiLug52d6LBiFxx1LioTGdwiRMBwJn5",
  "key31": "3pcwBAz2MPH622hFT17wjMGw6tRCRM2Cc7dPHh9TNMgJiUfVqaWusyGH8a86C2kmTLCHuZtdgXu4cFQsCf2PRLMM",
  "key32": "3yJSMrtAfTVgXyTsQLm8RhYGCuJsu89fj5sbbfd2Nvy9Ayd6E4hhJBPQS4xiBWyHD9HMHB3rdpUkMefoXtqCXuLH",
  "key33": "4ZHnEkY4QKLyCyDAnga1WJpRA4C3xok3aF8855jbQEbqztujoVh9dnMt8wtKTAcGyUxu66x19zR8wHxUmprEfh2L",
  "key34": "4mMzjxaxuhDiqj1kVNgJWJRzKjpckhYh54uqiuK5JEwT2z1tif5zBCRbudbW9sTwmRKYUP4tEt4EMz867xcsyFoT",
  "key35": "Tmu6GbSiHLHFGMLqm8vD6ZLw9ZjMrXs1bFAQRnfz5THH2qL8rU7YwMcApoNfZa5cxALA9XMaJ5faMdDkMbptSgt",
  "key36": "nyXBPHrhUE8RSSttume8hRUcHFZkvRc8yoCq8G9DxkBBtDsmdhrio4QD1YxLTupSWjPVfVVR2oReajFhUxAhve1",
  "key37": "2KLGKu9LB5qE9XBujX7SXKmjNtUNeuEGNzKov9aPsX1nZRDGULquyM7Fhn9bjo3xKLcWCtWdzGPgpFxmjibPwov8",
  "key38": "39VE9RcZnqcXXRiHFVx9B9GSMmvCLtty4baDSq8pwCdjNMacRd5hkykCJLpsSMQnAB1ozAx7H9EpesGrymPfq37D",
  "key39": "4SHfYNQtmu5YhqZoMexpvB1EDPJdji4JeZsWJXEzdMXdcT1vaGMx5Gukj8u6LgB739u1AazSeB2qqQgT9vL1whfT",
  "key40": "48cUddyLH8RDFgCmyCSrQqJHrnen54omMBu9wE2bQkA8VEM3aLUfE3sb4fMKdUQMjAv7Qazgk6sK5eGpwLgP5aad",
  "key41": "2TD8jsETF7xnsZukG1HzYpGh4jcgTAaWpoYE696yJH1qFkNdjiiiA19h5fsmwqoVv3zJtpkLMeZjb9xYM4XcCkxj",
  "key42": "3e3SH7xnfzYgQjBZCf8WYxNKVkTmvMWqzKBePdjSKN1sRNimg7LN2yfgaxdsDA1w3uHRQ3hnxSXU9SABpBAiv4U3"
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
