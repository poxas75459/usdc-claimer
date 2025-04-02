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
    "5VbvRboXs1NRsNSDvtDypq6tBXDsNnKjPGcC72Pd4xGBk9CS7sseK2VDDZoFi4mrsuCgeSsX6A6xBbP33t6LroUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "856eV9P4WNV6MdfSQTqusDKV15mSo1Ggu7r2722FzEkrKxgPCiLthrQBRs1wZJPiBEvzDQhtQTbtsB2UGwuG58C",
  "key1": "3FAzfxS1s3ptDTtvYzzZLBL1k9zRCPPWBaDdGK7vo8fmGdGHYMfo9AXTR4Ch9AjtF45pnyaMZPcaJiK44pm8szqC",
  "key2": "3By1fZtwvfKRcWE7aKCMjXx29Z3NqjZSVAgGe2uXmo9yYRr8G88kCG4KGV8uMUST57zXKApngWrFCemESipBdvix",
  "key3": "5mndx2df8eB8KQs9X4mQbaRT6TN5MWZunFG3X1xXruKeTchJypcNyeGrmLZUNE6dbbjr437D7po1wdJHA4noFmf4",
  "key4": "4yBmRcYkQxCmLK4fzFTLiAqaUiuH4sJh5z6GAuvLewELpSN5GwKsPcsgsCEJzigXspFo86YgwdeJNgr3nDZojbhu",
  "key5": "3vvjuyLvqV8oBKaJBRELa35VW6f1NPNjMqTE1z9XEXWmMTBTDbL1U7KZD5Cxy1awdMdjcsXyuFhqDahKqeCE2fk5",
  "key6": "34EsSWzQBxiH71hTcQLYXYRoQhdXjW7xugFfvxhECQpqowiMsSAQubj4jWZaCJvAdJYXqSfeT62Nny3e9Fkk9bKY",
  "key7": "4nznv5gvdEqceZxjvXgh288pb5cpmaSowYWNAiXTJyC4ivpqDBJUR7jE2eawxw4QKw9FrbtGW4Yai5ijuz55uqCt",
  "key8": "5S25nSnpQo7fnpPZVkqRctu6k62cH4D6m6TFhThTyVzQJTSqRR1BEYSqdHvWPhsJo48LbQHXiVAr3Yzy3Cnhk8Gn",
  "key9": "2gpgSYoZ6q8V8aoxK4KQgHV4cP5nh1Yj3J5CDjmxpkSMs7Y6h5mdfkcpBmyfnpVBcqK6gbX3VdG3Ynf1d774e1fz",
  "key10": "21XcUhUbNs7Lf8NfPDNY2xGvbgrhvxX9YNsLk8PTgWNXStahvVr5e74cS2R5i15BQzrZ4ygfButk2UuqNJUuxJo1",
  "key11": "LXoGT6R7f2D1GBfuVa5gLb621F3upe4MwYyGVQSRvkaSxtvYzZL3nmhKTFBN7iQLWToFGwT7VStH3N4krTUvS3p",
  "key12": "2M6aYHvTQcaEscv3tpBPDT2sm85Q1My2cT1FGAVBgL9ou53rbrvze6jZQNiJCcWiseNaykeQMSDux9UnA4rcw6hy",
  "key13": "5myAzbdafvmnmQiHgVRDWVyyXhASqzJj3rsm2uTjiwFvHRVqzFVVibSrxUMSqNSKDnMpec3iv7rz9oZcr2VTwUks",
  "key14": "4WNDGwV9Qr5pnY4SNCM4QUs2wGvhyxy468aEjHqagRNok7AAvVoaCq44oWjsRCqwQMH7txN9doCa7XVxQ5FZ4ooU",
  "key15": "3vSAkWd4zKMBjKeQg1ZNi6TtinPyB2msqhK9WwKo3pygz2ZsLNnEvTMiLVTxWvjdcvKpQ4F5E7NhSt4K2H5XGYs1",
  "key16": "T1AQr4XAuJQHCakWTTv6UpWT7Zt9jsX42cpqJtPd71eE7zLMDNtme9XQhQgjSdwSrHNkPTFDwwVEdMSbt38ESA4",
  "key17": "4PmjS72qBtArbPxCkAfRRA41z1apW2paegw58CqBoZSvRDT3gNGhbcuu2d4z49FNLF6ctfWJq53DzvimqkBDJDwa",
  "key18": "2UzKSLaVjjmimP6qxxA1iMvVdh2LqFDUfoBXcR6yRWCi9fKhivh6vM53DPDwtyHmLCuTrvc6Lcjy6J6qTYYJnQ5y",
  "key19": "5PUjsAJA8UMdZGisA9ACA5suSpDStmnYDfGNkVETghiZpA45cBcVHtB2Ptmh5Ukqw1VggKA5ZVP5bcvGDadxpHvD",
  "key20": "4ueNQKsaaZACDM8giF7AUvp1TvYCsaKeAxLbPpAs7TUUcjgYcbD4CBF8dY3whWaA2W5kaatDTkFnguoUU8FqBH5L",
  "key21": "5h7uU3CCqY1Fv9E3Mv8XM26vaHu7zxU5hycGBwbCaAsdsTEVmFycPr97ccaNVNhjbNkynroFqv2bqatZ9UTfi7z6",
  "key22": "55JaLcCArdAPHySQj4Let5dewR6DygUw1e1oyvbFgfs45ekK7U3YazrJbfNLLME6Vz4fwxuw1jNGJ5GaufjhGELT",
  "key23": "5TD7u3Wx1RKRtb81rVvXp99kKsqZXmS82rfCdtSQgH9eB1UxRtCMSDQXPhdCbVKYVgE25HKoYymcsSe3cfdBSdpT",
  "key24": "dms8nhpoXjQSWLs5DtuRk1kCDWwF85N5fpaKasxXewT7r2RwghXd9hQ57ZsGTdxhyT8G63A9efjPVPHnqxb1aV7",
  "key25": "59kRoWVkdagtCQmp29RyrrfoC1TotbizJsDKCKqxhwVENmNiPqYmQr7VRTLt8RJVHoEgVoNr2BWLFygVReQv2Bj6",
  "key26": "4gXHgQ1R4jE3kAR75Pt81qWBbNrvddRjf7YtwtmhCiqTGBsc1CKKZT5wMYK1HNDN8RWoSqi6fMGcqCnQtyfquJeH",
  "key27": "4VuJsoe1w4oEWBobqDZgMjKKCF7SRcugBdzrj2wyqzq3moRf8RqajGXEZXNhUvQHEH3kQngfDJ3Yfrxn43GssG3m"
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
