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
    "4bTFSUj6KxJ39dJEyi6LbhSe5hiuqjjmFMnkWPRPsmjFEr9tMtfPDiMxrGfMieXNdvW3zK3rfWbDaJSiBEpag5bf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ztmvZXKsxG8m63Udb4byyZwvtsQb7n583gi1N5XQNmCYtAf81ZwrYYiLrHgAM2ZLwLcgSUsbZF5yTaxcNCawimb",
  "key1": "2LFjEysi5L4DGi1HBo61iTozKs3hQWts8KAvE5iVTXrU2ntBMYR3piT7CKsgZ2Ji7oqDMqLAvX41ZcvA6txLtkXz",
  "key2": "64PDbHaJF8uTrHgESyPF1T1geQY5HZQetx5ejncvKKLMhcBHbfy1hAdE7FVbm5h2z6dvhkwpPd3MUtfzm3AXWABN",
  "key3": "3PbroVqqeGQ76K6dVJ7fwEVwY57Ny1BgyJeKihdaGBNKZ8qQFJGkc36J1CGFDqXB4KimSUFrD3E7UNetNo1r5kD2",
  "key4": "5kWnmR49dcxhc3mRD2nRWtksTZtLd4tSgauPujBbVBDSZeh1bZF513PhxX8HyNtdzbPFNVEQdKAQ2qid2mVKPj4u",
  "key5": "3FUghCXZW6JMC7H1woVN75g6KpEoG534bFq8NmriXpfBqrkQk6ParFhUPnA8uLAKvKpSidVRdW4jMkwP22E5FSXB",
  "key6": "2Nyw1X3hKbs48Retm9zCRV5JFdPahdithnXuzwVsgv7Rk4dYoWbaZGgEXJMYj83GNdG27c2NdJHnroWmP4gTN3oj",
  "key7": "5kMnbDfWfbRywUBHydJWxXFxRAC4vkJfpo5BKpH5EzeuqqiNob2MCJGmMAeDBt3N5vPAGttWBzETaYJnjGfLij9G",
  "key8": "3AJUVzRgy19iXjpJSSoRRbUBiyAfK14nNrLeuYufxazdvJAhdNX5iTVyTiVis1tM9caPsJCTLmhmBgJ4Mhr5PHwf",
  "key9": "2qoHTLnSSrf8VUZG5PnevtdoT32f1ZV3NsNqLv9wywZgAm7Hwuy5BqRDwhdepkquoDxn3yi7Z5z6VpU626HiouZM",
  "key10": "2iwmSDkzFP75boEy8P3xZTG3k17uZvNTFccMrMryr1QKN7e1f2g5trgu8cErFgk8S5TpFhn22RiCKZ81ge95F2Nt",
  "key11": "peaRtJ6EWq94L2TxYyAXx3u5GY4SQkSGctmr27CWixC8kBnQb9J1v91YBAFM4J1XtUx1CAHDCgq3AGGL4X6bpSm",
  "key12": "3sW7kqWqfcPgteJeigKRGtA45idRMZGmgqaEtXUCr3yRtK1hWEtwPUKoTutB7G9o1Hiiq3qb3WXS3pBUktRuitU8",
  "key13": "3cBbiSGVUyJyE95MkmrgBLTXt56ywieXCChKjkUhDyFaLwgmKX6FdxGyrjNrLFqpCXgneiQzdfttaNuCFJb5YcBn",
  "key14": "5Ar12kC4MV6kzTqnjKemFCuNLyALg6u1oiVuMZJCFodBXajKH6q7ediiGPikPxYvQwwJ15bhQ3oNKozUgrJYZc2n",
  "key15": "5P9KwHRXteao3gYxHYBXePQ8DNo8E3HkXymB69NX4VQ7UVYi8HRdf9AWHQZvTvTE2ac3Br9nRSHY5mJni8JnuCTJ",
  "key16": "2MwYGwCqn9dehbEBjrVr8xgfEdZZAPW19uk3JMZnQYnZQEbzCWTf5TkiYYjXLnFeGELGjmB9Avj8Q3s3YrwipPi2",
  "key17": "2wUD58BnnEPPM6EBTW39oSkB4sFRPFrMYj8mjwjsEJFZ6Qy1NXSfr26jdg45XEpE5f71mJhTYS8oMD9baQ6B8Naj",
  "key18": "4mRxmi8KJ86DUaRnXpGAGsm33FNQxgqoSMJfWQx45LnWWu6pZHko9rigj1vCkdqRkxWUFbMvQxUN8huDQemfjCfQ",
  "key19": "3pyMEuZDCAmePzfR8bF3xwBMHMFWpUgcwo9cgTSPTiYpmHtRpbZtyg8AZSdoueMK2EHsxGgjLZb9p1yLjnJorNUe",
  "key20": "w3o9WXddm4c6bWpMgXCQa46pqsNX24kgWazUvzxH5ZcsaSt9DELGCNAGLJpxu6nr6n5KupigV7G7yS3C7RKLbp1",
  "key21": "2P7o64qPoHoHyDKtFjWWKNbzrdP1YSJCAZWzrRyRbwhNgpB8Xezd96P4UDeiPkLjXNXG2wqih1kJEabj6s3tScsN",
  "key22": "3bZoj7g9VDvmsBT7g55eBEYtJxPVUWa488nGtgen9A2WgSKFWd2xtG1WThSgDRtFwL4beXDUt3q94qfht2XaHr8N",
  "key23": "jjdDpwCM3K5frcfX6CKNgbmxYumTBoTATVE94vc31ttELoNuWER2dfVJq7qZeeReq1Jxs6diW7nXsP4VmV2DaW2",
  "key24": "KGWjnC2NjnK9hTZkCRdwDcVEack25jbGvjq8FK7nwGmHn9dSVrAfTEdQoatSYwDSRAjzeWiWjXHWwB9pwQfWnhn",
  "key25": "jinatqovgA7QnNuHFyY6as93N5wWzTAGtsNR4dPEcDEbj9jwKaow9wMiWioDjZoQNFo9jrZaqUYDj2rV7mhPmZg",
  "key26": "31M3pS4hh4WB3TkoVRSyUab4rGq7LvENbmyjZiFCyzyuFWFmYZS1uns1HFCrLQXwqPv8yF9Tmei16ebcG3RZq6mF",
  "key27": "4e7r2qxnopL9ffLvkCYsazixAsWfuanxvJgtbUwtaHUEQAgKEfY7V4UJk6iYmdmBeT6MjgvbNTMfKT2FLCvD7xM4",
  "key28": "3U6FRmSwg9S86thq542yDbK31ZLvePHNyLZwRFpRMAuebukTUaHJLkyLbLQ6rJEkoVgmxZATautGh3fLfKqitsg6",
  "key29": "4P2Cn5D3NA9H4e2mX8EqEhnnTXP5Vd81XLdh11YABRNRgHgeWEmbrjthnLLCE36xrprvV2HuhDWmMZMn59cykzHG",
  "key30": "2SEDYjsn8XpnQkFwnrbK6oBtrBYV7m8QibUiy8t7Cf4xn4SRN6F8CVqNxvxWBMKHYTthMkZ9zXkp1MwPWEqpejv3",
  "key31": "29iE3ttZXmVyTUR2koXXp3JnmtTth2FqFm2qcT7jPqRSMb7WheyFXjjGHpiXWhQy5BhiMEA4qcDCTDBqco4AcCsZ",
  "key32": "4RNZLzkgcEFGboc3FR2TAuVZQt1xdv3FxiZtBUKEprDAh5PRoddopRktyaNS4GNMSMu86qGVuexpf1tL9Z54LnBS",
  "key33": "3FtHG6NVzdUd2vadwyQbWrx5UF1NPWFS1AU9wDSTWqF1w4Pwd8GhGp9C4LrG5ZNAq35nwMuKM1kQxCRFSrNEhprh",
  "key34": "2BpwuYN3hvgDJaqxqkR97FUhF86BFhuZJKidAbvhPvm5EjKZtNePXsoZDvTTrQcA14p4pbMCdNSTXswr5AKhEE4c",
  "key35": "5QMp9uqqzdChsiffJMKZCyFCQ7HFeVqQiYVpBzhziPueJkidBY3Nya4jaWTCcjJBLZVj1v3gzBFN8cH36ZZyW7mX",
  "key36": "2P5Cp1ZsEG8fiEpUqdPAkdiLdqhtBg3wFesxtfTAdWjjUzRkMdkfVXxsmPmdkq1zsRAUucKyeRKWozC1nUKzAKm2",
  "key37": "jLDLQMnWm9gpTdvRWrzn1RzZiksHDG1hqdiCX9aKuoYS2dAK9P6xHKUnLoXWrE9mANGE6S8KkuUY1Pg7jktnk6m",
  "key38": "5EJqs2d3SQcRZQXFyDM9UJuZt62D1QAx5MoiBZUGVhRqZvMFZunyRFaQtszSd4szNrMF5PBbEFmsTBmuLs6UFtW2",
  "key39": "3A8Y7VfXUvKwLHsJd4ZNqZQAocyRJ8GppfxrSfm88K3x1YW6aJV35otYMjjTcdo8uQ1Z2LV3FQMoEKktKQnqrGwp"
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
