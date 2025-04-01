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
    "7zRAWReahkkexda96C8yccVQ5ATXdcQqmqr3X6a8LgGiiCKmN7fSmrMn3dHgn8Ldt7eZ5NEsotii9F87Re7TQao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LJgFJ7Jpz5eBDJwHkYrHAXUbPfjEWLvXKZVFw5H9Sjr9o7uAzgvGkSsGuySPANMD5uoktbZ4eRe8xtwMp8uGwnu",
  "key1": "4ySqQNKifrJEh7jMPcsE3nyQYFY14Fek6uF6R1DfayFCPNYdY3nMAgNrdaMgxMMPo9hGVbd43DLomFb91PLkcgWQ",
  "key2": "415Wa6w3e7T2eybkCJKkbbpZQFCknJNqhwYxiRxxC7Vp564DZb32hw4BxYyYbiw66xA43AxgNGLosYAiFUHa55NJ",
  "key3": "5uRGb5KRPr6xX2bf292giQGj8PVfJTnJcSX7KsACWH5wbk6fUeJw7AwyHgYdo9md6AtQySDC7ZkSatADzuTaGFBB",
  "key4": "2uqn6pThqxb8Wi77WW2XEBaT1Be52zGBUKB7BwCKt9Htc4ung81LSpp5u2irtt3mr2TUo6z5eTPBsF66NZB1ym1E",
  "key5": "Qri1Dew2GEXX299jnACEi1P2cmjcrm6oLULTRA3yCdYngvGAXCyRdETyZY7MFbV3uxpKVFpnKnr7L6mozRnQm2a",
  "key6": "z1BTp5gtwbAWXZXn7NxcZq6nouSQR5zV126bRSFz27WUYh6nhGjpj5SN1xfxBHCat5insUiwvZkdzGm4P2xdH5S",
  "key7": "22tuAGsGGDi4qFpLksG1tdXuL3KqPSFSea1f5wSNtaxR46UpdauBv4A6QzB9B2uuspHgj514TzfKGMZkAq6QXm9R",
  "key8": "4PpcQKju2FNCdNGT61QstFBDJA9DNusQx8C96bbnPHLxeD9SJ5ihNVeaCrTrVp2VryT1zQt6dsYdD7Zrp7H9T9gN",
  "key9": "2WgZ49GkQmSg2YMZyD29oQwwwoJNsEtiv2yTzrG8bZaudBvaW7NeH1QDvouUtJk7m6TSD991izPN85VSescHHfzs",
  "key10": "34RR3p6idwdsG4ALSoeEcnf8qZrAqjgrpfqPsSs1iDnSkNEQat4V3NyfT5iVZ554mxWBKdz4bTpr9oPNBywcMLaG",
  "key11": "2g4jiugnAEnsaTQea9qRSdL7CUoMZ5ub6x6gSkFLdsPPQJarppvcTCNQ1j79VjXwP19rTCsZHBH2QCD9GMBNFcE6",
  "key12": "58qmFp1wxzBD4jCAp9hZdkCT1JS4d6np2CwtmTzZoEDeJEieRhB4NpCJoumfprxccYuAEZghBavdk83q8VPDPRyR",
  "key13": "9fm7GKhXPZ2zCWC6C2fKA3C9JfnxVa5cnnrxDu7nr3n4HoX6HR6DsirGe4Xgx1DwMnTSsoYt9D8fcKoJ3mxNad4",
  "key14": "66t6KGcDyEcnerpsYJafqwMtPDZFaANUYhSnD7gU5qfSbd6eQi4NYqxL7XrLH5acGQU7hk3h9WKcwT8VWSisHbgq",
  "key15": "4XALgNfSDd8WtRUgEEh7zoNAMtTS9maFtK9MQCkkzmoSRkbvR7iuakw1BtBonf6wRByUZeuY33QkvJMLXYWNjBNg",
  "key16": "4nBt99p1jGte8ATKZPx7GQGK55LAQArUNXQ73LjQyUufAxtKpzkGQ5E17bKNUARDSbcAdVB5K72Bty49xdkAcyxH",
  "key17": "5LhnPCXFAX6NRsndt9rAgBNDtwWT3W6BDmcSvX6osMLSg7uea8pZ7nuZYjFrd6h95uEVYYdGGyrwf6Jvo98an6CA",
  "key18": "5sWTr1MJB9fWbwWXLXFpNwZ9ezuVP9m7DPgSUXHNJ2MsBkqMTQXxVu3KGcQ8hscafmTy4ShLnEJrDDKnNmvNzgmv",
  "key19": "62XGBBQyyRwgQGdeskkso9sca9YtqvwJ4HqfBNBBBY9avtV3ntbENF4cupWzBz36ZTRzodh2GtbruT8fTcjFPB83",
  "key20": "3xhPsr4eUqYeQkVPHjRWfNj8NF7GKEbhymP46wDhz4ntb7Jp5pZghZ1EuFgoz941DRD4B44KFyJXk8drhzuayEUi",
  "key21": "2YFSsuiJbssbQYj3f7dWHqvkWNkM7rhiGybWDVoq21CvpBTxMfnyDHwSFWnD4m6vsaZkWCaiVXU28u6cvpZRdB8k",
  "key22": "2Ge4ewrCFqEE1qNTKZvJbymkQDr3hKR41Up4KGsTDst8ycqVZ2LAwe8SUcAw1oYFQszWVL5nkhuAQpY7vFzUBvWZ",
  "key23": "ng4K1z4frmJuBdGcm3nZ5vuTvB65HxUFYk1E2qkAsLSPAcRRu74Cr9KFMgJ683UiD2zE7ecJrEbarPdTBPdieME",
  "key24": "5EZtPuUj5PC5sZ2Lqc37VARogUAZB1J8ukakbwZcoJUPGr2x7KDLB5jf8rTLx9xU5gVdFdYK8D4W6k5LjQnrgKdq",
  "key25": "5crCeUjQTTWT7qKR26owWZM26VYGTbgK4ByAXjwhVz9RFLZEDPE8SrepckUNa4UuWHLaMKkAMfGrL4EdmdQjCouH",
  "key26": "3SCoz9mAKnnCWS2hNLstzLRpQvNEqNSU5gab9TgHZCN65dQRriKeEu8z6u59qQgBJaJaFJMydZNs24EpGZRCKEiC",
  "key27": "5n9zy3DCX2yLFHvWYoLny18TNeevoYQSxwUexzurnEr581dtJZixZdMT8jewoc4Epz9yr6PiCqtihEu2hTMjTYTK",
  "key28": "4EU3NyQbxTdKQb8zoJFfZpuoQUsRGcDTGPv2DeF1cwNKvMuFQAx5AwvK3nZPQ9nfrjQ9qwKZV8GrEW7ce1aBjNck",
  "key29": "3pQBxZndkMcVGK1M6Uw1LEKmFNFqcEnHRV6JdX9QAtnG1qvKtXDDnsTjotpCKzdAGQFibs8LdHoPURAkqUXZVsbk",
  "key30": "2EwbPahK4MhpUykNBhJQYYtpEBno6bNbhmdqbhhigrwF6a6j3zGHn8d53eSVkbF9HYusSQmdpkkJySm2yR369iTZ"
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
