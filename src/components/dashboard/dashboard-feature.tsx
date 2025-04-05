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
    "xe5KsZTSp4JttUj6mec3tgSRMezcM4UuFq8JuYtFiWYKRV9bw2aKHudruhDL64zBNhYWYFabJMTSCXpDmGbkEku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66ZFab8ZpH1fTCVz7nzciSY2VnYebyjBTCDoEaK3CqDbQyZMRsYCkvZbwyWEcdx5SKtD4z1rYdaE2dG2jLtfhGny",
  "key1": "BdfXZbtUg9959AhJeDu1LVYhDmW2L3HNvGyDMszznPAYLzNvYzwzdwnUug7mJwKG1f3WynaqFkiGaBnqHc7bBk3",
  "key2": "5QZebB5LEFpRBvuYXD1TePzhLSJTPspxEHizFa8MMwuihKdLJj6xeofTJy28rVzbvGYymp6PTdPpsiGCxCPWZp2Y",
  "key3": "3aVE7HYfqkoK63bS1nZazFNm7e6aJFearUwxSDF2pYgYbLCaLsqfetfwubWNiUBWTx5TYrSF1zJ7gJrMwS7JnYfQ",
  "key4": "2tgKFDJrfsYVyLGW1UFefH3yRt7xaRfzsoAMidgsQsSA8y6UgHM2E4EsJVVDXsXm314rLr4YfUP4SVUB1wqgxWWo",
  "key5": "7moFDWojBmbrkXDWvJL8C78pHgU3zpJxLaFCEhz2LLW43DNcXJsuXto57W4AoBqSDKRL8hrq6wwRg6xzpk7rQwF",
  "key6": "4zyf8zz6Ui3ASuqVxi7bjCbHeh2dGALbmhrfXguhPzinNL1EwVRbsnhRncyMrpMYh6P2rkdjaCz87x7JELJbFmHQ",
  "key7": "bhrLecczqexJMiFbWcpeaQRb5Tat1n4s6ByCQn8Pj8Uib1esZq86MaiTUsJJYLaj2gYMfxJcATz7hWv2BdVBiVo",
  "key8": "TsRTGMCLs6Fr4Xpt1RKUgvgdpUPhrqmJAWDzFbrcTdWwNeau6B2KMYnrrF898RsVHLJSXSAGZcngVdrHgNsdeDF",
  "key9": "5jwqchT3Yv3ERSThgwSWYZEmHb5wSwvjWtyd8X7js7DYkfDn2WGuZCu9Wwd7vHtWEsNNTnTtXypjWYnLujwaPbkL",
  "key10": "navgWRWsYUZ1gH9QTZqa96gJjkJthGcUFFKqS1Epi1Bf7fE2CqfQWjdcNdcDCQcUTdoqVq6XxLnWeDY9WdJdQkG",
  "key11": "4zpyzmoKHRNcpCwKFSMeHg1WFP5RVeAjtNCQfX2gPFjA68omFXtbcK3tNXNXxKRRf6bFx4dsk7Nm6d7U1qwAmJAj",
  "key12": "2Xnr87hU8DkV4kwzXN6tTKE34MfzqE5Xd7RGotUc8NGUFnymCdr72y1YjDuhHGK2dW1PCEjCAyvd8drQKA3re1nE",
  "key13": "9saCAPoQWhCqhpEHV889zUpbaKdvfNGQEdoXDkwyeLWXnMYztrEc49gEMcPVLbRaaesoy4wJsRRzvjeEdsEh7b8",
  "key14": "6KAP2anyQ14H7FiCXNnSpD5QXnMwoz2NQZnQqUxDP6nw7AEq4JZKddkK5N7F5oczkH6TjeYx2Q8bwTYF1XUPYDc",
  "key15": "65ph8msj7zWnVgrDH68dTUF8Yqc9esxwFfhBejzGKoUa73q7hB1X2ppndrrY36adfHNd5tUQTm9AvjKjwyCxqUa1",
  "key16": "5bDHT5PQNFpvbCrSXo4MTkAYrJgYz3AwtrD3HHyEgAu1t71kjZPw7C9RTG5qsngyqhSgSu6rAMMABbFTDY9BohJa",
  "key17": "5vYqHV1hZYfw1dkxoMk9ozmBF8MzcXQDdoH3vh3SdNDzhrGi9KuWyNghqduyeitVM21d9ENqRLi1Npps4FCKW3mo",
  "key18": "3LDThhjef15wywhjpTsS3SuU1DaAVZk18t5yc3Pjup3bA2ozV76nstxKw7K1agPuYCsQMfyYaHdg6WzHJ9Gc142u",
  "key19": "3GjNj2Mxu5kk89ZKWSF67dVxXK3b9w1j1QqT13oepU3MoT7GmfjtsEzHxQH5Qz3naPkoZwxKvL7e4rtvpLvxZatx",
  "key20": "4PSR5KyRE4U4ZAadodQrKSaMFts4NZockcbXGfUhZi4Yv3AGr5jB6MR5KYEfqLirdj2QBqBPS7NioiXnYZD2vD9X",
  "key21": "2XFePDpJcAfWZaT1syVVQwgC6eniLgrEaxkiBWusFtPmqAhfKf6iNNuDdam9b97GDL98sSzKoiorE1Wa31JKxraS",
  "key22": "5khiRWR8rEr4WMTsVCavPHSYNcp73p23b97vncUJRza5HzzpZDJSL4aWBnSV36SRuLrzwZxiT3qZ81hcoJQFDDxW",
  "key23": "4tzjCtWBt8M48qZVdG6HHoSU8SQhj9RZwGdYGk8nhNTvkynpHsFB2uLCW8pgUzUbbZe1yd1h4S4Sgo3oQLt9uN94",
  "key24": "3QAX1QagEihqeKvuHwUEedMdkgwf7YjQgBVsfN1yWhsXrLMS8n5w4rZLDCL8EVvP7jNEiCUk1VCjzac1YpbVFyaL",
  "key25": "TyqW3t97V7f9QQayyrbVWVDWVECTnrfDUP3PBRZfbXQVRVz4DbD5g3nCGMGRBqZQsAaAoixnPWLenA5aiPGYRTG",
  "key26": "Xiipc3VJD2TG5AjfyUZEAfLDLJdupgXd5kP3Rsfbc3NB2eeNFpprcZYW5kJZBotBo5Y6KhZy5M7XzsuUNmeN7S7",
  "key27": "N6HLvHQtU2m3Dq3fCQqwmPzruUHvTr3GyH3p5FN4xZ1i7AbZqS6TzDzNQKTbALg36jrp4po92e4rrGW388yLfro",
  "key28": "5vGQFiXZS9m1i3ibJhPn7BjN2XAcHygBhq4W5ME5QSAwgyLmts3MrHg2m9gdosKfTE49HNimmwnpaMdkV1MBq6Xh",
  "key29": "3Qa2KtuEj3ewiNhHtZ3nWKQ3arJcYYr29MNAagNsawQsHyeZa14B4seKK6kPekbCap9wWjotu4JcQojhcg1FLS3W",
  "key30": "2PHHWAr7htWsjmgKiLd3QcyjaJVRUZdG5dg43paHyohnQqHQBbiGt4iFJGHpQbWGoboeQzd9JNaDWdFnoMWjr9N5"
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
