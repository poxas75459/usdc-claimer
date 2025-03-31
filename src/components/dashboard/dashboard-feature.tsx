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
    "QCpGQLLYvo62VA6mxv9XpnSZtPBFAoKf9WJ174eNhKfHEjSxkY9h6yQ6WkwBvTiGyuisoPaJhZRU82LC7hf1wfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vaXrQoyvke32x1bKJkhJB1R49BECyCds6tcWDVQJbbjUKJ13sLB3X5w1T1RE7zEcdWTL1YGJhQqh8RYWjy9xSri",
  "key1": "61YjSCJNRBeNpqmdpnJaqFTGtEWrMgaJcLshSeHBEFizDHrTAiov8PHqeVf9idC8eDaTzDqmgJ6uagHUHRAP7e7Y",
  "key2": "5huXLUE9kCxAVKtG2mzRcton5o4p32ndUq6y1Ha3C6tj5UjgqudSVoVs7BqRWjrw1jq2WLSMXbR4xWyLG9xLh5zW",
  "key3": "3zLNZDkq7irronqUua1oV1yAREkebBj93NgfrS589EJqt2tvh3QPezsA3tqYsuh72frbgokZt5PcPYL2cATHJMth",
  "key4": "4uoaZXamsX8NYJQHcJpLq2g2Y5B85Py7NSLpX6gB1H2MjxKgzDHQAM1eFAqyzJtPW3et3Z3CkRtc135rXS5aPKRu",
  "key5": "67bshPSXdgUwuqetrVjfgRBJE2A1qQ3mP8hW1Pu5qN2VwBR75zE3V3gxbnSxNuKn3PsEYgPuuzJEugjmyj7DkVj7",
  "key6": "33itfvu6TRhF8FBf6VRJva5grRXAgWKLJftbQFnNFtocG1wdHRpVYiQvGuYXUXZgeWXT3kqDF9hoTfU3USiQAU3Z",
  "key7": "5thwkmC91X7b25nLgwS311WA3tHHXvnM5PBqx1CiAzaFBHTzeKWky1KUyYFwEzAco7bWzhciNhzcdgx8fNREQitn",
  "key8": "2HbohZM2BwPmvcVsTiKP7ptY41k9XEkC6jP5iEeYdqk8yApPtsQeXWDjjohWCsdr8SzvvxVtVMXtpGxahDNKJYqk",
  "key9": "3QyPk9t9peP3w8we944jbPehBjqXF9JYSxHrR631LXT93Edc2x6gLKEnwvNKn1FMCJhZxEqLkxXbxPV4p2kbwGNg",
  "key10": "4JSB5fZKHCEr7TEhxtopXktDeiKpeC4sM4J6YnWaSWKKDRVRsx3Cx6AgZw1JSfGyozmmnB2aqh5BwNc1LaNd3xGX",
  "key11": "n88FcC2DUGCKy8zwrhTpLoZmsmbNt1PHqd65zRtZ6g7iM7zj3hWTDByhTDCm3SDwQLr4FedXxbCGSe11gZUCyPT",
  "key12": "51bsx9mDTzYVb6ZaGAxTpYW4KZqYXyqWMXu4UDvZEwRMtE6DAzQrhgBvsMyxjYzBD4KsTGGhbq8GYxg83Wijx1vj",
  "key13": "zsq7Ptit9GMQAc56HTABGZQ38e8Wt6ibDEKszPWayWooUdoPXcbtXZBq1Pn8zGqhc8bnx3xyRr3GUBZyo2DRmjg",
  "key14": "4C4FUbr4wPtVyNL4UKNM7pUCm7hLE5ZYibhos9F4yfumPnwRFkctHhAQi8GTPNS8ehqSsEwFe5iu94xntUZaYQsa",
  "key15": "3SFjjQk6tZmhEFBMHh2qHehPFxWsTyxjuk4H9cnm9WetALTMvhDJVPE74mb2cAtP197sJL5MXMkbjfDY4PAR6BPg",
  "key16": "2EbiK8G2dJX4CCCSv4z7jqUhZfLQQkXAxXdCctH2DqSBXRV9WUpndefh6EzaD8omZ2c6JztP8dF7qCUEm1B7Jaao",
  "key17": "KB8VChcMYhj5mPPxKv6vcWroDSwNcEuM7jjVzPde6s3QoCTPwK5fubbQkKYtmrdSC575ATCk6nr54dEsgPLhYLY",
  "key18": "3M2UDj7NrG4uTK2DmDTrYshTkQjkzkpNjRrYGdd3EiCQGfq4eHdTcEkRXtL5JVcEs8pYaSmzQs9kqTvkPrR4J4bF",
  "key19": "3nLu3h1y7dRUjtVq829nEJXxHtVVYUCNg2tjX3p5sd5EuMJkhHzAhzQRS2JDnVj1C9UAVigFSWewNMoYNoW3J5AT",
  "key20": "328nf7QT7yUiX3jagV7sKhy3YSqJyUWzaTLuiiSi7egWgVbKCtMvrwYoeWFGmJQ6TjuCMtoxPYEKi9vF3EjdUD76",
  "key21": "5LiDLrFgGhsG5Rc4XDnKq1zFjAr8wvxRrCNqqFM2hks8YrNzEorZ94EVUHc9uwbqBbczAfENfcsEf1vND7hmfifz",
  "key22": "3vCedSP85faXpiF8SaPuC2PS9BU8W4jamy4g4kbQinACQnTVRYDqXgB8xQZ7SyRUodE48svTd3DbzhYysUe3WnDg",
  "key23": "PkMWBmTRmVCaoRsJrXeyKBfAvRgaKUi2hJYvKPfwJ416y93DBw6B5J2jFSgLSYXwrwvXy7yBZZaMAhVqGX2E5zT",
  "key24": "2v4U1Fje1cuYLme72RFqcrbSPhx7UBA5ca7RR3nFZQe62BP98zWeUBhwQtnVyDitRtvXG1RyMJCKizgrQ9oQrzM4",
  "key25": "4EuuZpNLZzVL51pw1pWZkRZAezRHyDZURRd5FY7z2W2Wp7FQB8vtxxGSoi5UH22SKUreRE24FLZiDh3DWc2zDKdc",
  "key26": "iT6LsZJvNdHcGoYPQJ5r9Qc8yvKUqx8c13pjrj6WSLnapc88vmVM5rrYX1VqBsC5gEdAVNLsttwD9c23KV8gfV6",
  "key27": "4b8jGLBG4wC68PYTxVWbAXDjkRoDbFwXQTaxSSF6et45az3JfaUpLFvmFobmfM3xHjGaEGgFNyCc2bopJi9mQciX",
  "key28": "5qmy8WQJjH1nsX7Emgjcc6ZgRtvPWzDJNtXYARk8jWDt4qwhMHdgA5qFH9cAapmZP9YVMizU4ab7dRi2XrYciZMC",
  "key29": "3Q4FeZV28ayEMeSqcVcyyWjs78XVfMFu5dqfecfLyLQNzwDcUAUGzFH1YLUfhr827PQfC4cvnbKSacLhYzy87VeS",
  "key30": "2mhLbrqbuo3RGs9ZuDtKCSsDqyrDAVrHm2UhMghZ1URXCWCg3hNVm6xqedim9eNyLBGXLhASce4Z9zAsi26ciFet"
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
