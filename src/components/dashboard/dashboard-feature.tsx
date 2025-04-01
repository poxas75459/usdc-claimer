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
    "5EKa2mfApEvjkaejmQWpVRR1Kn4VAVd7BVW7iGoeJqCPd6NZrQvHbpJbgka1mjzMRNFNvHMH1nTiZM8QSvsTEgte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jH4C8XsNA4ZNJ6KoSpC2RcZVYW75KGiU5m3vUP4AZqrcXjYStbHjfBUrf6kExct6md23PMiR3Yr528zPB3ZZpkz",
  "key1": "54r8HYVhp9uXbBSVc2BJRLk5gfRnPSShzGycoabhuEnphwJet1VWWjPEkhS9VU95frTYu1PkyP9BHDskC6j57ZJX",
  "key2": "sLa3ovt3fUBy5bDAon2RdzgTShoX9ef6XhQSTf4dVC4DA8cPxn8LSv3bRewnQxaMJYepxHg66t3AXxTbrhrnura",
  "key3": "4jEXYW3v9KjNHxGEHjpFAFcPb6Ay78K91685ohEP5GbE3DxT6mvqt4wRnsuUn2XRtnCAvjiurpaMFYVff2g6NZZM",
  "key4": "4ST5fByoZHgebiQt6fiB78pBq1r2QTvZaeNbmwoqCK2RG1nCgt3AUSpHAgL3UQ1jX8NCpkVfJRtKM6Dw7hVJ6tSV",
  "key5": "p4yBBEzX5p2Zu1sDHMZteeMuWvo8H2HXEBowqs9RA9zfGurYCnWh4t92NJXupPw62Dd44oEHJQKR7Soy62q9w6g",
  "key6": "3i4XARUGV8EJYVB314FPPPYn4vqn6DAjaEnczAgGENKt7qJntXkyRVmTvKDbeB8pt4MnFKSSaW4sy13fWRDmnVDE",
  "key7": "rFPJ32henu9ZeGpWbhm58RPpFsMFTGXCU6Z8uVJkVkDY7rBXKxg5ptvyumXKPmi5EiGK5WNL79oraaefZbCd9qc",
  "key8": "4qvJ1xWpB2XMdmwpV8ZnPCotapDEY5t3EtxWEGrxh3sSPXNWWmJXWNBb9H5Grj9s7XrmP6H9PNh3eQnVVXaZttKc",
  "key9": "QrHMjQkFXVtYtkD4jyrUPJCfxGEDJ94VukgABW9F8si7C5YiDPUr2RhAFFaPa5YXnjZ6K7t3LhZqYTNSK79oMvZ",
  "key10": "3uF167CccG9TuHVfQL8nUszjhrAPbimHSvxvTChjpQj8X5hRjgoXDAiNUfeaWQYZtqB5RvJpb4cQxLWZSuQgeYRm",
  "key11": "3FKgFa5U6b8LbDvdDziTKxNwJ6pJFnzDLdTgqR76pZ3dy41DdfdE1a8WNw28y9fzMaDYFTLPTXcG266PJyy7ybvA",
  "key12": "3S7VNNVwGccgTJGqrkdULX4zT3bSaCVMNcv3HhzFGZBt6VJiefpiGGnpzqPGDKa5MjysGKStw33kBwuu9cbNx6A5",
  "key13": "2cYF83wwz7dPX1kMKsaMALma4DUfeq9kcD7qUBZgSs2kQSNrCTopDESwL56ce2t2xuKans45pcRiKTkMaGBLmCHv",
  "key14": "3RdwBqvwgATBew1RceipNMQuq82ygtdPqWJKJXuRMGYhZbXTE9xeUxoRqDKMSmwZVPCJ8BTQQDoLUJsM4vCwXf9x",
  "key15": "2p3ZevhFhidgi3kAJfPRXVoUyQKKaJ7dxcN9f6QRK5JcpfpYnjeC4NHccH9YcAqMBre31veEqisS8WyDNnETHPv2",
  "key16": "2HoX2xuBRtffmNxDDcHwLuG9FgAQq4BmKxACkGef2Jks2D7rMD6daXmx5cSdHmG5nifDZomTyDXFWQs7NVHPm38j",
  "key17": "34peMLgFnLSWq5q7zeVaSneqj2yf6dSqX823DL6MqjcaSFU2eTZ1fQnjkDNoAKMucoGKuoXomwAAtsmMTJNtdqgK",
  "key18": "3iKcviYR3FmuxCq2u1L9RQ8zEx2sWhu96emvdGu85FRNfax21Dm4y2B4kCxYenCqsYk7xfN2f2BvNSU5KhJq8g5A",
  "key19": "2Q3A1yp5QptP55jbnBwDFhXkDyr8QzcnUCWuZCAqtWP8i1AABGdksWD23oRtSX4n31Fv3gUR9QE1Tpwrp5sDYU9H",
  "key20": "5SUbsRZSENqCv1JzNtXnG7PjfLwvBgUPtZQNKy8zYYnG9i3ixxXM37C5nE5Qrq9fNidJjHacNE6pLPNeZitAqyiH",
  "key21": "2AGkZjEDuBTwSNjoFKgpbpeEH1YtutkSoL1XubmWJKnHVk2mpkmJpYoHHEUodJMd1RU7SdDxSgN43kZrUwisM9qD",
  "key22": "JhEjJCyqhJfswgegHG9Fd1ihJTZS1yF45m5tqAbNbJEmb72QqtWMVrBgk6gDQQCyxSejw77aHjpSkyDNe6f6enZ",
  "key23": "bDVXeWe2FpaqDHe2ycTbWwSj6teCRoy9tRVJy8c8CCurv1NWKRaDGsU6QHp9H5VKz6svdn1LJ9UJFiP61SCici6",
  "key24": "3wUM7NfzN4U4fR8c4aJmoRGTJTVYfVZLZ88ZTVVujwieudY7jqmSafvqcKQE9RquZf1pUHeCYhk7MUeJCBUJYJVg",
  "key25": "QK5pqRxxbPf2LtTseiP69bbhVb2Vs8cf5TNYSum4RPGWBL2RpDaXk1WAP9TLtUzyyWc2zJZz3zEy3PBwfrdYwkp",
  "key26": "5WDie9LWVsWMQSaa4PSfwoMLMPEZ82sXGb8SZwZxJ7SqtjuQyjXLEB6QPz7qTUU2oD3PHryCQZk5Y3NcAeYdcA4F",
  "key27": "XtVj7C7t7rRCqEecKV8QdKsXUZxwJwJEaoSx43NY6qRE6vaGJYQ5e1hVeGpadcqf8t7PzYEf6bUeP2KLUVG6xUP",
  "key28": "3frXs8szNMPKdZXGC7XH2ND88zCJR2P9C3ZetfC59gfpzBVKQVE3qP7JYVdki1iAmHkePK2AgACJthb5H4qenudy",
  "key29": "5fY7Jq11PJmkoEVvGaZTRBiXAnwfxKRb7q66iZmh9jxizgNjdsxM5ayv6kkzyE7kyxoUx65bPU64GsU6ryQsKXad",
  "key30": "2jnFVDYRLTeXqhfAChkX6APi94FgJLQxQmg6LZ3iUgNab3Q9fuqqWTRtv6tiYdWpriEhR6VmVVMdm5fitG7NtunL",
  "key31": "4r7oa4VWxHtjvVX6scFtFR4AXpD7XSchJVvTrwHPcEV6L6duJPQgDn7HFKZePdpLAqSraceqwH7enWhU76Vdk1ob",
  "key32": "4infXfNiXjS2nX6xptehpLzB1uzia4Uo28yVxzZ6MvNqr3ABh63FB5XCPEVAWHYnmcE86HWWiJoP2mpFDT6wmc82",
  "key33": "4P9FknzTg45Dk5jUvU9XXLpRcuCBvAk3xuasU1THrchiRpoKZPT76NwVN6ZNGcUxnoY5N5QELj11dmrVveaVQUro",
  "key34": "5DWyJu4TcTGoajbcniYK8e7bYpNGrKMYwsXNKZoqotQUDJDnvBm9hBq2nmtf7fg3hFN5Dks5yEVrwYoUiQJWJhxB",
  "key35": "4BEM72NzgtvTUZ4oM9umU5LhPh8T6Wnb5jme9U29LJyLkJu8fjcamWUKSKMqcd1wDLPY4GhehN4cXaJdwSoTW4A9"
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
