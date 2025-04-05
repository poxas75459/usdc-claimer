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
    "4ZGmG1qhSGVZmXQjvuhw6a1HteZWH9pHo1VsBDDMv1HZnxcfA2zMKZwpgpX3kMk42pQeLn9UtB3pR5LfKuqR25PP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mTtvgVXipivJ2b2XPtENYL3epXJ39VZEXai8noEf5oMEs7Zf6v7BBCxLq2Vnc2becs1YBzKxUCwofQ3XYKVbQR4",
  "key1": "qPtY6XrAQfytckMYrTUZRuvzfuPEWWRJktmHg8nC1DRseGzBvDvYqDZtcRauSq6qEHJEdjniHd3Shmrc1Veu4BC",
  "key2": "4Kr2sizodhvTRuM1rcmgnTHe5Kkm89WzjasbdWWXSCkrYevxgRoAfuoNF3fUCw8tfkgpmGWQw64n1muiZcJf4djn",
  "key3": "F3XYaw7b1wMiTxrgsMtSDCeH4EGFMrMdccbDMwF94VganknSDze7M3sWrNge5TUH3gZ768CCbD81gLwpVKKdRzV",
  "key4": "5vDBsWG4fdSQn4L2mhc1T4vLLkVqZhV1ndRv4EpQVRF6fr6bLsHLUysRcsi21t7su55QJNk7RTui3GrAkLESr2V",
  "key5": "5HmacSSKvJEYuEY29jfHNn1oe8BzqqQcNtKZBF1cTmBaLDfZ7UQaGRZ8N2AEM9QvSFPoCF1198k3P49Ppojwe9J6",
  "key6": "2P3J3QCN4jrS7ttt2e8sJSFaMJVcyEQYzrcq5toYvJb9tfwNbo7QysQAVC66wkmEGHLoAUnEjYg1m792vPPH3NPx",
  "key7": "5qoo3LQh8YxNnzX4skofPb7tsmBwMzzGdNXUefESuVHWnMkLo5dNpxhYyVjaYe5uco8DTZLci8uCeanWWsdJ1t8y",
  "key8": "kHVeYEujjxK6WtaWpvDcuRgaCeXhKXXLMy3KgrXTcNASAdfK937VEcmodsPCB5Z2NCbCK5CCL1qgDNob9g6GJmz",
  "key9": "575qK31VYM6zu6Vy12WtUfRtF9bU7ky2PRM4ghHRjhAzuHh4VuJCkGWoybfT3drRnSy3b11AgRGQx6Eux7sYexV3",
  "key10": "5QZyvEn1DiBfiKabQHnTsJYT9vgbS2RvGCN5HthDwGzyoRMDcaqPbz1vWJ6U6PKoggyPWKorcsw3MaQcFi2yZjur",
  "key11": "3efcQXwGvJWcv4e86mxAWWU7HycYuicp8BQJAbAoSaoR5Rf4HDztZwahSsnGio7osVi7WrjFHzCvt1vJWz7YVkd8",
  "key12": "3jPKWgQcJnZRhNmf9P3Vqr4RP7g4uqxpknZz6tPsyokFV3wftVHA6qbTprLyDSu6bkkSyNh4bC4Qu1CSzRGiLgxp",
  "key13": "3bwP1txPt515VUihX1fSuHWU99d4x9PRcxMjMXKb7ZcZ2YqmgUYbRALx2VLURH1ZZXygqMLgWgr2GYqpdZgwEVnF",
  "key14": "56FmAkdtWVQhJLapJqALaPK6LxWHwejQPLtkQHcbhxSxBu1hYMNtmVaCmpzeqXGYmPn6ShE9EsJdbwGEXAMfpJPM",
  "key15": "2T1HLfm471EWWDmBJJZxUKcB4MGUve5Hz4rqbhrmJ6YstsG7kWcTq8az4XYBx4dFkry4TBUPnzn1JYucRB1GrNqG",
  "key16": "26idAErpDSvVHJMxCoY1gqerhbZSCT7cBMS4rQBhFp1fSW3fhskBavEqa8Ja7ncqcaAPbcp6jpNRzDDXEAgJtvmC",
  "key17": "4YorpJEBVbPGGxqkB3PDaFLTgzYwDPcw6oMjHzHHBNRJhTKbJcDmtfKaicE5js1XYMnoJHHBYWKaVonBUtK8HZgY",
  "key18": "2eG8P581G5uDfggyiCfeNdE66SYnrpKSohFZRryQbqd97B5kCtSs38uNuKDmMnqTs4GH9bZzQHZBeejLfpEvvrwv",
  "key19": "46pgo8vEcDCyuCDt2kcyMwKghoXdLZBmZzgkxuNKseqekj9yFKMhLZq1BLD8xAunwck9UytsnfqK7JhAT6krKD8X",
  "key20": "3d13fJjBzeZ7MFB4LVhZA3dfLAw1FVSaErbbK8PsVN6n5E6UrY1dTbUKdhyrCyEEqUPUQyN5fb3enmkpgVwaCHwv",
  "key21": "2CW5FMtSJC5zkvchEmoidN4CJWtmoeQsUShSJnRB4umY2pZoXgJKhD4wqpKB4Get29vFVtK77Se4FthFdzVgTv8T",
  "key22": "HHiwRUfwWjdpGjfQKG5BJmEFaDo35Sid3GCGBhRZXf3XRNUC87cDp4ajNpFBV4tNrwUGwozrhyZhpRqt2XLnaXj",
  "key23": "5Z2YYUERZuWQcYhsAGXsyY62nbWvHXCuKugLd43ng7Kids2wDWoBHZhLWbK4zY2QqKzdMKxePdiTtZTFG6K2ap12",
  "key24": "26g8mQFUz7V1adPwdCAnef5tR1dzQCLe4oNuAJijY7emtMBrDsf3VgqKEVmn6KFTpUL8HdtvFMpzuKDsSpCGu577",
  "key25": "2PA7tu9vKCTzmHaG6YNURBmsPskoCrP8vLM36BWS7wVqbGYtMiy7dgTxaUEdiJaG6RyfiYbAKZLopFVZ88UHfp1B",
  "key26": "5LWTEDofdkbgSsH6Bn3ziQiwRJkVWRfHz8uDx6iURg3Hy8GW8Zf8MkACnCqAVuV2H6g3odsHopXgMAdx2iroDHGz"
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
