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
    "5bma8KWk6nrhg4DyTx6Gm5HVBWqCmwTNcV7n2ZnbcPsw34SLDY2bErKEpuyNbBnVJpPDAzhM7DctPoeifvjgDNF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w2Coyyo8cauZ4R3o5EVz9Svgdi2dfKTiYJnTEocnQYGQEt6XajWGwFYNRpxvzLpZnSasCK4bE9yyZobkfbRErNy",
  "key1": "GciarY8BkLuuNFCVd8fcxQ4AqmSEmFE91QfCzNTYvKTZwsog61RfecyhARhUjXeD5hvhWsH8V8PcfponHpktbHi",
  "key2": "46bRuWyrpTSxKtHu95WhXxA3ppqSE4Nn1q1oQMBH14nJuNtzRnJYGEPCMNmweTSbZ67WyN1NMrzSp9XxHmcaUY8M",
  "key3": "4tmqtwuddh7vNpCpFN13pRHAvq9FZ9MGHdE3M6uU1V4SCApiikhzUPVuDHR2gVWeSvhVbTQhSqHKsQQ2CF4GixB4",
  "key4": "3976xosn7QG48y9ZQ7bA1Z542NBqgy3iGDR8kR9SreKyUUAcKf8JijUkeCuBRCEJwSohMgcRYJuu3JoWBE5rjUGN",
  "key5": "YzVrHbW5VWXwgqVwADYisxASycDaUsxfhpe7By2f6gsNXnqy2TvUTt9Vz5mvCffrQGJGKYvTWhiM6NiGeoyGere",
  "key6": "2zHU8xb9E6kxXLwRgyJGm5P2weJDgMZoHs6W72JMrueuEaQabKfB8ECSw4VzSBz6zc1px4c3fYtoLbSHE3TGmQtf",
  "key7": "4kB2vHjDXuM7j4fVApvxf9jQHnE97epMUiS64pgW44DmU6AM9DNWcNVygRxWYRdyHr4tatQsNkbUXbZAC5VFw8Gg",
  "key8": "5YjiTmzZFTTpUBqU9h34fqxHHDRUi4g9QJwx8kCanBqLiRAg29BXqmntXwM8j5MTRDF454Gzp1qqi5oCBzjTeHYw",
  "key9": "39fmTg9MN6r7ZYFBcEZSXWNLUjuMkRNMo6Gh5V33dSpfKZkSkRjhMXccaffuGzqcBe2yY6yUzKocAnELEeiMHety",
  "key10": "4eVk8dGxMTLSdQRRHEHoSaLsv61dPjbBgTojXMMh9mzHaB5vRRNX7AtB9DRFHetN1TftHSUbuz9DPf5zRrbmR6iT",
  "key11": "HSjivcBukB1cXVtJd2bAK4HVDtiiKdCvn6vYfNDWu2vyCpQZ8pJsc9yGKLq7coHHMv5E9QaTDSaRMvzihDKmCgf",
  "key12": "1Vdz5TRRnKtrFdL7ouc1ikGpLXFmHQkhAcjd8iRKjrVMis7o5bJHXZXh8vtEokcCAGKxrQHAUeJEtRuCDNJN9mV",
  "key13": "3xGFh3cxGXSts6GhyASS8FxLZfPfjJtR2QPb6uEB2Fe5GRu9qHwEH4KPuNhXQVjeQX7RZos8T1YMsR8Hju2WZmvM",
  "key14": "2jmRyQXgkdz9mNXcnNLv8MXgeohASmk5ZNUhmeezNZNiFky2ufdaaqQ8DGEwfHzqJ4SC8iHdSm7ERc2aPEBeXyph",
  "key15": "3UygjaoM8UcCvZTYWZ28cZ27ripSvCnP5N3uu63zZDwkpckdxeFKcdEJgZEEvwDanKQbkviMrJtHJaqe8z8n3Gta",
  "key16": "5DATwrfkva3eoGviv7DsM4wxXxtFCee4ipHR6JwnkXiHtqSage3W7RCJCNcN3FHXvb48TXBkmKyajjRqjFy9ZqiS",
  "key17": "4iDzho4Gu2VhJ4Ky6p7LasjkMSUbURRv1p9U8CkxrZfBqQUcEkPn3owyyfeUNc7MTHcPX18fqirY6ABQTSKiSLWs",
  "key18": "29fbrbE16tM4T5dgSEiwjH9AV4M4MeySLk2ptTQddJCGtrbSiqAwTXMwkMJmtcxDfs6MTDEmzQKAqxCBXmZRXahS",
  "key19": "63VCckEcAkSrMxSJJ6BRCpeKbSPYGn27zMnqykKAjM62nYKiW4JErVfwaRpdFd54j7oTTronJsprg8dnvqBi1qJR",
  "key20": "YWoFuqrMiSDpkpNqz14TgazHu6PHmB6RDyTzXagnh6Rqh4yGuT3f6q5E28P6T2nRgNLyjMuV5W8peCCms2QhdMo",
  "key21": "4RhPSUxZvQGgDS3gZLgkoV9JQYZDvarhgnw9ES797LA432q2bVjv7rCUQZ3Mh1mvkTEAZ4GiEfXhuyo5HtvSs45N",
  "key22": "32uacuufhkhhC4RuXiGSNDBT67Vja4mwbB6qHAooNokPPgxRKMHfjyi4gmAWjeXLNmQWCrFjoeyLuiQyTweqXygz",
  "key23": "4nftsEj9JbucmFZpYxXSE7UHqZ35L8TeDDmwBwWEd1t3xU8LYzDjdhv4TMkKhDjNNgT6DMRTjH4h7iCnL8bViRei",
  "key24": "4snxbFbgEWVjSTRMh8eJHz33ZfuqyH9tVBQrxb68mWeyedGLfK9Mq6xhwdGdZQ77uuY3ed5VnA88b7DTHgUyuFge",
  "key25": "2MgNAxkhjT5VHTKf4fTJnB8Nic2VqqCi4KJkrTznFhPuRhdfzN2XTppdefiHqxZCPNdPbTW1evDCKs4rR4i18nvx",
  "key26": "TS7Q66B5xADUrTxz2SVmXbna7afte5mAqzs3i5xH3rmGABWEu7CYRJ5id17MPXCJN5sRtTMXygTwCkBxVCr3mEY",
  "key27": "3jU3xNzAYLGbTux8F2jcikLT85Z3d9WPSvj4rop5ZAucSNUQYZB9Ung57Q5f1jXVmS8Q6zqeuQ98aABF5ksMCdr6",
  "key28": "3bwqB5VBHG46YdqLGbwy3eFAPtohmfiSpPmuXMsu2HbBwMm35uzWigNLcraDvn2SPYBaEyJKs9eWeBNpGMDhfnaV",
  "key29": "5m67AdM5rMBTJATjovCNXecdTs2eqbZ5s1RLhRNi3iPAjyeMYSeGarXTNimQAqskDexWvydVmtVdHVHi9yvjbBoU",
  "key30": "4aHMdARVVYy9APPanFT58yNx2myfyKGrkW2eAUqjqmDpwMokwQuVvMfPfHDshB3hBbw9J2kS5xzcDv6owfDPd8Gm",
  "key31": "bDp7c9mbTJHLTwG1LBonPxcL8gM5uctKuXoMpK7SqJ6zCvV44ZMU5Rf9JHfjBzvbqoqk9CvXs1RUkDxtc4jkS1v",
  "key32": "4iYq9KAEM2Cwo4d56p53ArFSV7xtqvZysLH24Z2iZTYzLKnhrhL6k6Z7MT9XZkfZiQEyuQ2QmB1RqpFkwZrKzVuV",
  "key33": "4gUBZ7pQRamLtV9GYCKAaVuFz9xTi8v7CAHPosXGMJeEDihxFfYWEvYVvBFWwCAbyCPx2t7ZfswU29FAtFKxSK7L"
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
