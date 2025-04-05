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
    "4DCYL86JVweVPGr7CV71q77WZEFd1JprfeCgzLWj5ANQYtLK3N9UHybQBkjsKYU2gUVKkCAtLk88sHCEL6bJaCJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43tTdCutGXisiRixMdEFGqqCD8pLSj7vnTtyuumWQsijjyw5gtj3po7xAStPVsvJihgT8FQigKEojgvpXkWCc3x",
  "key1": "5MrgJhBhGTqfZHY9g9TvhMzQ2cYjM6heDPcnpeKGD79SNTE7NJcMLRS9tSmyvFmAP7jsjZQkavzmd6aUDkjSk5gW",
  "key2": "5V44WSGK9XMkj2Ct5cqhyQTxVnp1oJUFp2mzXhw8Tz3dTgBRoVQzy7riADLhdczb1srNS3EYNUcHtosBaCzpn468",
  "key3": "pR66rP9DyzqAS1W6wVyN42rvN2NeVVynfeSZ4Ma5r2z7nz7XEqNAnVALkoUJSowqpzX9qQaGYDeweYqqwAwM74W",
  "key4": "2fUWvQ1Va5aEtRYBpmhYLiQbmMCH3LfihMeYDUuF67yxEYLNn1Huyt7ERXSNeh5friZbKLdGX1iGWHRaLLD9eGWi",
  "key5": "2aBXNEDjohVUNuo54oCXeHBxCSDzGxfPodz5tC62Kj7SYjeqrzfGNqNWPMzN2cT6VLvHmc5uQdoLtwUS6qDFhVVL",
  "key6": "2ygbWUBHXxth4MjSMLuoKspSx3kEKk929ux7hwA6Y2J1fQSJx1Znf6HVZn6yoC1eTF2K9wPKa4YpQcrocNfQNKQm",
  "key7": "2egpc3gc2xiyg6REXEtuRFNURoCNr2mdrYfW8W1JScxDdfoDf2KfcfsVukXvwPKVketQoZgp7yqmrqQfwyK7GvWT",
  "key8": "5oMQiXZLyVmqa6jEzNAYbe8oAz2UnMJQZ3q6BbEXSwY3LM8gKEuDUR5GufSPkwNbGcJBDA8dtoqdn7czj5wQ3xqU",
  "key9": "61o7NoBuJSAquKjbSw3WFznpEy5vx9LdSF85a28fh2Lcy6MrwDvUQy9xEkNZS3Gk3f9f5c19gsS7MeYPb46hwdCo",
  "key10": "2RjZUMB7tfVBtfCrXZJRSQrjhJ5qD2NEH4kZgDCnMM8jqHp5kf3k5kafqBqTYCq7pbaVsPTtrGqGcDW8YdUu3cU6",
  "key11": "55QAdjr73iD8ANXN2KuR2idk4UVqy8wkJN46t5L2kLYZqKehBrw8yxoaFE3vCGd4g6Hscwejwf6pWbuApWrTRd6h",
  "key12": "3J3v7xNqj4KdQoTmafgCbkunorc5XydkvPK4CMmXMfcJumSqjbMpT14LujxFeZqeYDzrYLQEbdoxLoEBi7MPkwWr",
  "key13": "VsrX6NEa8ByKyWBvUZ4q3oGhT1NgPPMFfcR4CZ5ZiR1bDNt7BBr3iQcPL75wdY3AodN4bkEM3t2tGsTHUKfjQgR",
  "key14": "2J29HPVQZpd3NoJevJMAATYEsULmFGX5XFzKqw3LfsUnMdzdenidpkofaPvyZc2uG5tFThuyregH5kqzZCXV52er",
  "key15": "2Ua6eMXfmkRNwzpH2Y4nLmXgkxoSM9YqfWUCBQfY6PrGUh6cQ3SPVW8ecTPY9ANXMmZnh6bSm5XKWrahZwt6kmui",
  "key16": "M5rDeaTiY8cGHzvpJvu1YSVbC4puiXaBS2jWaxHbvPxYkpggztEx1qaKYmhkvqsVWrmeRbZ5YRxHx1xdLxKQt1C",
  "key17": "P8ZCArfiK1ZLAM3KeZ4GAATQUMFF47pGakzmvtZV6pJS8JAndVDKHz79BKrCPDQqSLEVNuaDu1Q6rZWqn8ZfzMm",
  "key18": "4TGnopdNwUzWGn3KDrD8DZEiR9HrSL2kjARN52eWpZRgrD16mpMNpWRRDdUAFK5NsqgZY2wPhdbkgRwmTkVFwRnE",
  "key19": "4zznwCkSNGVJ2AvSmXE4Ymm6SQELN6WH97ZB93WCy3CogMD7JCRsNpueFensrKHaP1GNmrrUPS3p81K56qkuRGuF",
  "key20": "SpbU1QEMQ2mxei6fGSBE4Eg51Czu5jwXEKrPYKUurYkrG7Q4UNsoAzNiJPweGN3J7swWUSMcMiNAuFDFV4cPCrP",
  "key21": "48sADMBfmPdKG8Hg92sEZBT73m5SeQCoBPLRVbUHtQX3StYfVqSPFYpReBXmMTffeJdg5w7ugFBPwDRZ8Siih4NG",
  "key22": "3iUnq8tB5naax57bQhFzPNYCiJhPATYz3tapydXLmdoRQ9uLpfTrg2QQXiEs862R1dDniC2gcbJLem2PdzBdjmjP",
  "key23": "2f7RCfoYxPTgDRMovLUJzsYmyQE9JCx9VQi6ujFDoBc7EQDCSRTBBbTJyYBVDQNZNKiFM5nYK1VbfJen7cLgC9eG",
  "key24": "5Xo5tFD26KXKALCMnujhueuSanqkdHscLvQkRP5fi1rT2tDcXUZKS5pdeLEpzdb9bFPPmoa5sNqdgL2M8wkgLDgy",
  "key25": "47o4u1Q6KB3icQ5n4QaEMzo7pjkMXLBxRkvW4XRjzA15rkwRN2EV4uRi1pHqHBLEkdxHoLVDivQA1vsWgavenVTr",
  "key26": "4Kop6NYebHG222NuNTazJPTnwWSnKM3cvgxLf8gAdtckDspK9k1ytRjBBkZs93nggvjAMHeNCh7DhTAKmqjn2iHR"
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
