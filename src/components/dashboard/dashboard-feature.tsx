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
    "3n3GVMvhvGrkYN2XNyCiHGbhMBqAJjUx8zoQEGbeHHFHzuTUxo1KTnT7sKoxfR1K4xLWigtaFsoCzZpE9nkNZfwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LrtpQYcJUShDbZNV4igSoPqTcLqYCF6KkbEC5pgdPYnffYbrPcKxqPMY8cptbZjwx3yE21VGUyomfuVWKJtfXZB",
  "key1": "4o63jwnqzk82EL3fwQd4XDGysuDPcPiQveLRT2VTNCJGewod69WdjXCczuf9HYcuzCcFgty2sfpQXff1ywSJkVA3",
  "key2": "3gRtehboPFVbQHziaMSd8ycJPSox1S9fWgdeUh4VFwQyZpYA2c3xvEJkhaq3QsZ9E5rsaJpqdvp8xmWxtBkXUsJC",
  "key3": "d75RvCYMsMAcpXDpup7fSbiGQfcsQgUhT9UmSb4TMcXp6kps3PG3HLNqhj1HNQPVpa1WPFw8tsNQAh3gpjwyzRA",
  "key4": "2Jtd8MwHsySCiRJRUa8WcKULQLEfrwid6Ysch8H7vjkGcCWvmJLD517CQqpfTHVksGCkBh112TYyoZLti931orYj",
  "key5": "8ZeHGUXbN6z4yPUNB6SpCwqHJxAyhJ9ip5tA1UtFtsYYUaMXxRY3RAYXExHg27q6rWKdMLdE1xY1QGKamUWrNL3",
  "key6": "drXH3HP2ZqmXvwCCNdq3HvkprCfrtn8V2jP6NBGzMmaiMkLJJ18cFmY42npAauNq3tnMRtgY3V9Etd5fYqRwJye",
  "key7": "4LVSZRzmLntbLgQVQWXJam6YUNVBKMhft9SAHGTLGZdFFUTAzzbYqJmJ39cCdzK2NmpyAfAi51WBZzB3neVAGx4u",
  "key8": "2wVPprXXb2GjVw6GVV6FD95ddRybto1istfwbRJLunGjfMZwnLJipw2HbLfjR4kHVtJNWA7nBHNuPpmik81ezwcS",
  "key9": "3WP9GugjJkzoaD6dafuUBoaGFXCkfwDq8rKHAbpAGmT3kyLcXsah4r7P5FufdiBmGWQMdtLHHRxZXVt8EVvJJDZH",
  "key10": "3NnNTJCMM8cYxyDtAU6dcKC6PJUgDHtMvqY2YpMMghrqua9vfF3eJQxKUrbyZBoj9D62iitcr7axnEH8wzHe1ZsV",
  "key11": "5Z9g5Zrn3LG4TfzmDyAHna7gn9mFdWPf2C6upxeLcUQYSqkAr1zkNgD1XN2iEeFRM9uQ6sLkqa9C8SUAw2ackwNa",
  "key12": "M7UsS4WdeWJ9bm8rFdg9AN5HNRWsjttGu4hWqdDFJQxmf5FjMVN74obprVMxV9E34qyJFPfCArYatM3apTW5Dv8",
  "key13": "mRBp2UEBZJqhPVQDbTJfMed9qfPPKuNfE1zVtedUeKe4wgKQcpcocp3qwQWRuk2A9hGPFD1WMeL1AyG5gTDxLnL",
  "key14": "5DMwwy9PoyXoQWRRA5f4MTTT7MBUMG23x1BamMwkUqP9KsSSuXiG23enpb74NCtAWjVh6icvdi9Q4hRJFD5jKgUh",
  "key15": "55swMN54yjsjzM37YW3pdGXhwy5hfvBvCDnM7kps6RRZEWZMXTwrKvebaJRPGnbDR3bTyrBcKMvhFY6kh4Xw2e3z",
  "key16": "5MEgejAW7e66ZNU9mVCzoXK1L4gbZ67aVMUtL13Lufi7brsD4vJRuoAUMP7GcacxnaTFDFjWmoZgfZWy4EMBPyDM",
  "key17": "3SJFYgUSFYuksmRDofUmnEWxnUQccYPGKTEc2p3H2RUUR3cDJY8VYjPUkhxanWWtJyFVkwuJdhoMrqgweQzC82V2",
  "key18": "4omEz4uHQX44L3FbQyYaSCWF3SBn1Bq8r5sNQp7uTAvrxcWsow8ieiHxLbeLsmnpbmQYtoNEnCAAzYJh5ervGEE3",
  "key19": "zVQSiGNvmwk67E87jEReMWoJC2ybdeR2w18KC5U1AZd75wReqGu1D1jfGAq3CbEm59kdzmqfF8c5eJvnG5BzisK",
  "key20": "e9iMuJ6EhJkYtLvrszydXV3yucPq2kj5GKE1SkaceHkjTmFRagLLGdRSMp3oiHNBVaw7DWZaKDEn1xdSscQmWXm",
  "key21": "4Ug8qQ7vpn2DTdjanFqq4trbTXmdhqH2msbTdVzktf6SE3pQMcepoZRUFE36p2QCaiuefVcwmZCLMSBBCbVFtCYY",
  "key22": "GuwsRiHgRdE1MPGdcMVz3icXMQHgFSthYZ6XQN6y2hxhavHhBeLB9vNP9ZR5ZxSuYTeWZUTdaag6sEjwpStWqjN",
  "key23": "4WFGnWx9WRq3kD2wbovgn6V7QT9SbhGxWegAWnZ7cpsZACCmw5P7dFmjw64fYniuxRxGhfzckH42Hfyo1W83ZhvX",
  "key24": "2z1YbqkiJp4zpiQogzgNeFwLvGKcXYs9Vu26Ldy248QKodmB4wA47unEKZDhaVsJLuU3xmmd8nwKMADGneewsxAx",
  "key25": "3EvABCc2BD9cFPG1XpMhGr16AdJB829ZNpYNxc1NtK4fN7e8a2PG2HtC8k2jPdyxVQXZizRKDmqFMcevcr7u1Wa3",
  "key26": "46wu9M7tbkREst6q2KJ4JByEuT4CsR8P29x4wenoX5m5wJd1EZR7rSwX1TpubKLtkoDH2GDrEa15ehTNKspbrdXg",
  "key27": "52rF6piGWnieYysepFZrX7erbPZ4QKvyqU9FbYsoYCcUui8FDnjU1LZoeTaXSvMqEzm6pfgzY5Kox2wajD3z2BDt",
  "key28": "5FG3hxXqsTgEqUo5CpNKMWaqh9d56eG4Jek1FAk2PraczT26VXPaLisfjyf6oQChNtkqm53ZMgi8h2enmnvjzZ8o",
  "key29": "5wrmcCA59CenQqtZMkrMYBD2ZfAt8ubEYTADavV4cy2yt3quPRmWCTGiEjYxwokwTWqMF5EPZ1hZgBPeQ8xytSsT",
  "key30": "3y23T95hcHyFe3cRc5D247xpDxu7XTBZ7hsmhA8THNubP5jrscNRjNgPK8zntPXaRXP26LiVWimNeL1mgEdjC9XJ",
  "key31": "51WddDB6kvwsHuea27oCnzwSNDaAWNKYy8dwtrdSyMw92GWW1DRT1NUHuSB7VjDiRuqWk3kVv836xJRzSDssKQEj",
  "key32": "25fVXREcgDnxnkdfdGdfrj1TXPTgLHwHCEedEchi3vzGuhev6xsMvJZtQ1QgMTUjFevN6SmzpS39qAHu5qWrX1Dj",
  "key33": "4saqfFHpJZppZGXNziHBudiTEXquoyiWztDUiMT31jdwEX2HgUU8FnTkkkav9LUyApZFfgDhRNwD9aYzPP3MZhhM",
  "key34": "2R2p445rMCS5uJQrncufcZu6wHv9Tem4xzEB5X7ocYBbpVAYNG2SV1fMXdSsTQsiJwMbUnNdUgixwHzbgRiVTJ7V",
  "key35": "tDDrWHWwohQit6UpKo9YfN5475VFVqAEG4Qh1u51HBC2tmRjoCVwXfbvNCA8Z51N3MR7h2kiJECnLdw6AMz28Nw",
  "key36": "2L7tzNECoxCqSXXHJdFaFfo8vQgasVK38JK5d9kmJsLKbNSSZQNXZqmSc4rW1TPbbCriWRrBXqfJC3umgXJf5zRZ",
  "key37": "43qJaFHFQAbPNKuNGoVJxfZgGF7k4nFgpULS5m8gvP85HBjMtJrd1QHwbP7tis7jhupAqh5FSL8kpm3vjd4wh66c",
  "key38": "tVqAUKtJSg3MRsNfttrpThm7GMXpKYPgx5cBaCbXEJfWQzSGb4C9ocNMPDeDBgqYBSA9BatQ4E3GyUeuHByGbEG",
  "key39": "5ewNcKvDyvTHKH8QqkpzLufKaVdh1KxyEZrRpyehcFcaeNq7nZP17VpLZZUJD9jaj1yxZgQTzbA77myLoaEdorpq",
  "key40": "4sVu2zHv6ByvemsyYT8ZwVouqSxC518BJMDQSA4w5SqY1LVJNLEQWPnUvMR9kyR7hEMR2NYu7mWTVVctL2v6Awov",
  "key41": "KnHHhWif78hsDx8cktXMDkThpwYX5GyH9j4VpDurSS9iKvJmUXfGX3ypxPeQ6Zak8tkFxcobKH7qiaCK3hbWe4k",
  "key42": "5ZwGaYa2HBJhkkLWk7ZybTmEPBXGndqaDPwJtYttN4N2zohpqc79mYe7AaupTHMp863mGs5fKCBZ2UMJY5AZgNZt"
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
