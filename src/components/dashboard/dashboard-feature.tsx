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
    "4tm9ap3g5qxkDqJB9LJuMnMoTvvCoJFeXhq1PX8AnnCahLMByBd4iNK5CKoMCsVDknYsY5GBRYnswr8YiqeQYF5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45pFU6MnrvZWSrTr6miVpxSR2GMYGrvw64L6C5HvfVRdumbuik7ZbYNdUFUU3wJA8futwjusvoz8quoMQRjZmXKH",
  "key1": "4RbgwM6XZrurEuEa26mA6StHFFe6hcBCNNCfmaWHKbf6MLHNkE9ZuabZkxfvP8hZosFxfUdLhvucAJyhst2pvynA",
  "key2": "5JRtHFNyuDcQR8i7n8hJmsuXMSvfBL5vacyWTRZLS1you1u8EBJngZufLWowJ3YsAHwhMCVsN8HP5WNmKSwsbDDE",
  "key3": "5jHseKs9gxRDyvZ37TSuYvvCMUbAKaRR1QHMrvXkMkpXKREXoA2X2JZqx4V9xnYXwKm59UGggMqUJj1958FU3YB5",
  "key4": "2Dq3CaMjp9iiFWHyY6AhMmm2xYYBDf886DB2oWtZ6fitoGwhmnAANUwH3cXG3uhpkFds37USNHy7sdfTnX4KJuov",
  "key5": "3MczUPeaEcKsjywvm2su3TYoyGForFkS19tbjGzbh62vSdnMr5FiP6p4jV5SZ4FyhcBSEfveSGvpSfv5GcnFLtEC",
  "key6": "5R9v3PPwn2mzCKSNbNZY9bq68xaEtn7SFf9E7X4KEb1b4xX2fvN5YpY6CKH6U2Sg3sTSbXVT7xG5uaS2JoQUZN9D",
  "key7": "yx86XTxUWa3nwsQDWNHHkN1R9eR8vywCGAqJouSgXgNkQ7WHLKtE9JBRagRt2P2LQEBMnEm2yf36D7smvxugFEz",
  "key8": "5ddLNvU7sPK4KV7WDtk8bCSyefz4C6qpm8kZ8NqaGMmpVJ6xreKmwLMufhMEoXBeAN8uMLoZXgeYNf2gvgmfFabk",
  "key9": "48ddtg4eXKRfZvfjFhtfFGgTz1jZJmQMZrZUTDymQnahjXeVfH64o5rvvdimWmDf2rqLgN8o354mHNvbG3UGEEYu",
  "key10": "2MKCcFRV9ur4vpin8zpWBTcwP5BRoR3ibuRkJYULwRjiYPevNqT9QgVLYqX5hpM1piQQfHy9heaT9t3HGtningz2",
  "key11": "43UkEusbXxd44tb9uVzN9gJp6W4fiEHMwgV8X8czHjiPSmx6K5evmrxF3G1jESqnRtY3AGsxh8YwJPVoUcX3eMT4",
  "key12": "2asXG49BfbrrX21dLA4ntxifYXT5QiTQxXtBhdSfHHtaiAGJGYd45c4CoV6pkCi1C1JAcEfua3bGdBq2tZ5p2SWv",
  "key13": "fqidAHC78hrMBh2YbztPksLCRAfowa5y28t2QE1nwKKuvddjPKoz1LdPgCP7FFKyunnAXsfitS35tyFvtfUCRSw",
  "key14": "4MYMcafRcdDE73TKEZJASCrp1Q3FeiRwb9mjVjZLXBKr5UZqfSgSmqYMqh261CmtdiD11Bj9SZFsh3NoUbEUuuDQ",
  "key15": "TywCcFHeUUCPawSVy1icik8dvKsjGnxzRMNjp7vrGsttafzZBe4DHiAZrnUYzGR8N7f2avX3hVSG3dS5YUe2yBi",
  "key16": "3dVgiTExbwpzRCeG5EfNgz15TpX1CdS7UcpfLQBn5awBypgAFjmHGciUzg12FzASkZRM1P9TQaLc6475C2eCpydB",
  "key17": "2Vo2zBXZ4zz6bqhBTnqt5xGjA2RTT1W4bGPH6m8cFrhmM3ngaRuXnBXYsqHSdmKsVwRQLUsMYeWFAjwcp2yKKNkB",
  "key18": "57epkWdHwviHa5HJGeWe1hN8ABdPA6kQ7Eyh6zBL8raureK4BwgtYwqMygde3EfxF67mU4o8teEGebjtwTYU6F3K",
  "key19": "5sDuvXbvyCGFjSMRXMXeRmJqJXapvvzedH3hKMZNKhv8Udqfrx1mtrmNx7sLhCZcCWjaPMvAAipMkxztThCbHG7K",
  "key20": "2Nd98sfMzetYfXwxn7HRJAuuG99XjGrrBt5ncaS5kq5TWXa3VpnYDNJXdoDPmihBe9ApmcNS4vzYEXSX6EV4gAcn",
  "key21": "2ccvWhmPHhHrt2WQMzguDRrN61odwWkJTv52fvWMCnDMaS2J8E2Wek7X3ueh14QUPwSY3hBhcfMnvXdwSjKnD6YJ",
  "key22": "7vz18UxZZTvT4T7ED48pCzgLW39N72PHKrdCYLzpR4h4eeRj9VvayVXDT42rc3Mq17qW7XsaAQApF8ke4yvL2VX",
  "key23": "42ZZMViLAVY7516pFFaFZ4HnZT71Vp6w9C6hAwPs5dp8h5wN2LG8J1QkNTJQ75e4yX1qV2VrHf99bBf5Bcf16JL5",
  "key24": "2Nw8G226TxBsV1suESqJTmt3QwbVjFHWUHfyRpY11HcgG3KnfcNw4avFLZcxnyV5h1m4v4SPTWNR7o43KwKzCpds",
  "key25": "5VMhYSpdJsV3CEdH8CK61k5wS1W96Qa4ujMTbg8xJHf4RLDH9tPS9AbVYWJZYdupMMTzEuRx8e1wmF4hA2y2mFvo",
  "key26": "2f6k1SwgFFMbt7BiaXyhCQmRZL4d9q6GAVEv4uv5ZQgCBusy26PtbQSjJ95rifwaiiMdtAGYowRLTq5GJHy56hn4",
  "key27": "3fY18wwoLm4imxVSbLsRpVAeTbArseKvvkrjrADA5GQBx5MisvZMEaQdkDUyNAnNbaWkqbNmadsnoRx1mPr2YBpq",
  "key28": "5LXwaEEVtkvod7sFYsn3d9UdWo5L1shLtib6BivhZJEamtg4KpRBcKoXjwJYf23KcnEsEpW2qmjADDgLXiN498Jv",
  "key29": "5ZAkc5EGjrS5BjDZ7ek7YpR8zQuQjFSCBqpxDyQCVEyHaJ39uyYuLLAjpJ5HbjxGKQH1GAJvGw2XhgUYT1LguyVN",
  "key30": "55umBjxmvD8Ra4zDGJhH8umL27nwfTuAVA1WQg8YzCAg8rKp3uP4kdt7L2aD5j71J98RcqPAbc5nMJwUPEF7XFDx",
  "key31": "48Hr1LKUjgKnc8di6wDA9DR7F1gurxP8r1nevFF7hbYR98kVp2s5i6M3iuo2PCTNjAQStGKfAV1dFWsyWKqSnqbf",
  "key32": "4FXnGWDaDcV4vrRyFppesrF6krVZ1VypP3wFF7bp6T5cyXFFwkoMgjPMpUZBKuWGcAuRtkhhduqFcixZCRLxUxXV",
  "key33": "3tYhXeV1wfd8RszxundMbTszBxZ828zWCDofVVBbCUXpHbXz6V6SmZfh5Pi3nd8p3Ube1cM2aZKmBP61xctQM4H7",
  "key34": "2GfG2Z5D7Z1wq21bo7kakAeU2BRWdC31NL9vuF5rx58zQrBZgnvgBu3L3iM5nRL5Fbe89yFwEzHC7XnNHwLymyFB",
  "key35": "3Wnfbv39D5945ft7JZd2wbbu2JomiUBLnwpLmKhippqNbdAYnGsKB9Jb7mBnQie6gMTCHyUeKWem5tmoHZi8JX44",
  "key36": "41WwGJnzrDunLNuB7FaNYDDcc6EKCryS5HfwbkJbeEUDLMP7iT1XBMoJxhPDaXpGhZvKrL4kSgBofCn6RHbUjZYB",
  "key37": "63sU1Pg8QgcScdC5MDMmjW68kBQHrYWZ6ScMuabbhcnyYJnuA6yXP7z631FhpbnkyWywEUMXHg9qMAAJwAN4KQTk",
  "key38": "qaTgkojgAKP1zf61YuwBNaK3Mx5nRh6kKEoSBfVZri2Q6KvxJg6QXi5f2xs6zf6hjrQzQy9UCcnmBCaqo5L4Pfw",
  "key39": "3T97htcWg3YCLknGWPBnHV9AYjDN8oFPyuJbqcUZbbHTTaFChhCHWoztjiWPqhdL6iSLTk4aocGBGB5mx5C5Kdjg",
  "key40": "3njDrXb3m5gufVAvYbxnxNxztjjzkDV4bgbmGjcqqKjnAUiBBqmqFNQcPsswYtj1iigi9XE48YN7howjaoRZBPp8",
  "key41": "5Gdcyn2cFfQXvmpA7i3XynVuiAgxA96XoQ1EdrtKyd8DToBEThU6xKGgwgPAcXaTehLYyywknmXupQLxcstGCqUn",
  "key42": "dQN5DzwtSnbWi9Lwuw3G7MEL2ohHGXbJKTKqa7euHzqwi7X3RhRMp1FuPWQ1V2kYNP4S5EfeoqJH5weygNGeLs7",
  "key43": "5gTgYFGEdxwQjaCeJQkyB4VbjvnMXTbp7raUTXgTQM9JLMK7xPTs7TMX2Gv7S7EZRj3k7LmMAm5WZvPxq586A1Ku"
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
