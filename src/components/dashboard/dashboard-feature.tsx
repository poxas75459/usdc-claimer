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
    "4C9xjDyAD5d69k6swnFMPjiHVvc4aNZmvDT1ZGAo8DFCGs9jYfSmdnaVUcPDX4Hy4A8GEJoZKTTeu3PiimWnL5fu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nTe4VrThc42KJhbjMfKworECri3sb1uKiFjwUpk3gUqjiDtmW3ucqXhDdPkPnr6p1pBDHVhXUq6YUqeH7NYrPH8",
  "key1": "2sqzg3ErkJyjaDq882gRaqbE1GQJgrvGn2sbu7zfjvuoL35X87FLGKP4teUjo76EM2smrGb9w3AJ61L3CZtPLxFA",
  "key2": "3vUkPVz6eQtR3ndY55rKu8ARcLeZnL5S9R9FKs22Powvt6QBVcLPW1MX2JG1oVoWtoLRgCraqURMcxG5tjykAG19",
  "key3": "pyxqWBiQz9oRSEbtEWPaq6jQ2R732GxgPXja4Kaqjo3mNc8DnkYUmS6ETTkeYY25SPXaT5FQWg3u4iDNJ9v7G9U",
  "key4": "5itWs2X8baLZuPnuLjwBp8XZ15ajbaVEN83tmJNzXMybn26PdHhqT4Unvz4AFfD5iDrspneoyLAkVu8Eaot9c4Va",
  "key5": "52XjfpvQy1Z7nShgyM2fK6QyVFpUCzchtii7iqQueg99bKPJtpNGKBuS4z17nSGSUQgdGynDLHtfmFJymWkApPDC",
  "key6": "2sLzD5cLHXxw5m673b7pPWWRgtNJrYAeisv18bBggeSdvbDQNdpWtPj2vG5JuNwbMN7bXvSpAmUYvgndWTLtSD6q",
  "key7": "3xAKQymsakSt6pC18BE81C8vsErXyDzdZ4rvjPq1rr88Qh1xZdkgdgarXsKFvWc2SLrKeC5StsaW5kVQ5Dmfukuh",
  "key8": "64cb3hivVRhb5XRThkouAbu1tMGCvz573DLae88CPhSQ41ZgvUraMFJKvAVW9Mz1RgjBxRyKsZr9GvYKW5KfzXrN",
  "key9": "53DVL9WTxLzA3KN3a9Zg7JNuhg2FzNcVqjc3AqTKY6fV1fXNWUuuDq2ZQHfWVwvy4Zj98pJYmExcc3pvXsSTPWTu",
  "key10": "3zuvZoGg1gDGwVFwwGPm3DzCc8ifk6QYeCDTMhJwDYcYPsWzi8cUsZnrXhfwk9wwPQ3yCQKago3SSC88twqS8cCy",
  "key11": "4aqc3KfSL6pg7878PSDNVVDD157kKshi6dVwqdoxMvRGVNwbjY3yDAg6i1nSUKJkN1NV63Q6DhNKofZ98Cc1utTF",
  "key12": "4fugWbw4BG8StDvDCz4tTQzK4VDZisGdGqPW4f1CXA9FYEQAK23xVoYcn9HKkCCtmebWmgxsfzmkuJCaYyXXKAaT",
  "key13": "UmtTC5E2GKGNYJv2Sp8986mBCtv7h9WvGsrUUMyfRrHmmgZ1BFhv4HdBsjUMhBKSsDreAVMptVRKLMhoxZmFkNz",
  "key14": "4QpReTFsmjNYmxCUMzQArvxxz33T4bqCwbc5Ty2XWXLq9wdvxAy1CB2ZpCVkmEorZdpEC1KXEk1P9cLjbCRBBoC5",
  "key15": "63KGtNLvsWXCCvZLyLdouuPt3YVizPicyt1kaXybW9yQRzdhGxskgoU7Zvy5LfK9suUGiwfvnfXqN7SNMnovGUXz",
  "key16": "KGnNcCPK4TBaFXaLrbYmsCasd7aDMJ7aQ3Xv9ijciNpV5SmBs1BpDeST54S1CnK3cbk6NZyKM1mudUsbtNxqkAs",
  "key17": "5CjwvkqZAFPhVayj4Ar4yak1oYrRxQRUys3JQ85myxznew9Ntr5W11Nqtgdm9PC78bA9AKBgfCNsv6WV2DmVSDzg",
  "key18": "gSsWUYqyq4nHSEH9Dg9gkExYEAnxQCgvfHNhA95XtjdE38nzgGwzkAiNMEZe5ysGKtyEJexGd5x9CScBd8d394j",
  "key19": "3qvdbLaJ9usH5ka6Amn6ARji2PgNkWaA9fr3hRDjZ8Aim8RtBrWkDA62XQQ4bEQJG9pSX71bfmqJjiF4txNupRWf",
  "key20": "5PA9ThEBYFa2CpoMnavJW1HywqxhFYW4N2Q5TSbM8pSpxD4qzsRfgZC1vTjQunioHKVQKHPbu32bC4tWwyg52nMF",
  "key21": "2RuQ83p6QW5zvKVUcwvaNJvodk1QuywFtxzzH3bzMVQhTmyT4PVytYVWVFo3PnzjY3qNp2gfJbRn63WsGnzaXSDk",
  "key22": "3FzC4TVQKb6SCT9LsmmHCWNEREEtBFqRJUQenyVAWWKgGQjzNG6e7tAhXJSkEnroomFPQ73ro2YN1ezyZhagjnFv",
  "key23": "2ETUeCqsrfasvizHmucwMme1RLo5R8WnaQegXUDRj1N8b99MYTtLFNdDMRBfJpfqn2xuCWyJda8XsF86MzeQeNoE",
  "key24": "4FLrYYKNnNZvhYLM6kKmX8YscKt21fCzNhLGgmUftAZLjYQyDqPSQJVJoSpyoYQY7iMUnNwDR7tTLdntc7KzVFMs",
  "key25": "3dYBVeJ6o2sCkVddWGvQTRdusAhwFA4C1Dkmx7Q5WPx4KievwUsEv8gcR93kXWYJTEF5nerzpB5wBbEZXCHJbYef",
  "key26": "5VmFUhBRdBcnajiKfpXTumN3BbEP86rCvLTBZogu3hYHDSFw1yfBdHXnsMZxKnSM31Qv7JmjuJckHKAqJGV1Y1Jz",
  "key27": "4LLCHKXNy4UpcTAh4vnybVKup7CrBrB2B72oE66ATmbLnUGcWRCf8Jvv5KCjN4R8HzsdqgWhsRApnv6WpjaNipno",
  "key28": "4sNTJSrNyvDNw2fij4BeDQproVp1RF6vPxBCqMcrYtzTXRrbB23RpZgC6662qZeUVNdEzQv6bwnahGzPwqK3CtiB",
  "key29": "3j23ELicDed2fsjiX2Dpt168H9Pu1siMhcyHHf9uzm5JRx3tS8UWMSaXn6H9BQwoUihHvtcUd33qmFT2qs63Jjsy",
  "key30": "48wPYS2aPUpBNEj6nBFJoVyPQQjw1LSRkwVkXXm9u4anHCeGrhuDi3qQ8oHpAsRKLvPTu3SZHMJWTsFFL1KwubGi",
  "key31": "EjdUAAFV9EZzuNGeqxRNCRtDUAo4fxpg5K4Xy6gPHGs3MZCVtuyWMY1hWUXV78TxycL4wwzzXbyrJyPBuV4gvGS",
  "key32": "5Epw6HDJRcn6XGYWbTqkDjJY8tWaU6hh29KxMkUmcwVhPe1m6qREhBPpFs15GAm2rLgqMgCqtgBMawhi1qEyE8ew",
  "key33": "65otXMF1RVHSQESLCH1pLzGUds3ucwQfdPSAJVxC56ChfsLK1pkn1vFg7wcCo7PbSq9cnLttJEXMYqF7kefxhzqZ",
  "key34": "2F4kouDqhhQxCoubtt7JaSwAsCq3ndrye5YhnvSGk1242GbtmqdZDEkWjuXJWtyToTTj4gRkJbaTZwFyCj9JZbsw"
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
