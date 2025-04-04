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
    "ihLSztbnKmuTHqkYNrQZg1Sw6CedaRjciFRXv2EvvKQr4j2KhxYt6MYfGSFC4mHXBv4AMXxh6jwCDSfGwDy2Hfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iXQH6amjdeCX5oUJvYzdNh8ct3CMMvtN95K9bdzZ9bAcEYGJi6Q8rFj968hBkQhd5SRn3ReisbKhobzT2EABycR",
  "key1": "a5PeuLMFbmJGdixDS287FnTh6geYmYVgtGcF1XGxvPLVczGv3n2krewgYrz3gp885mKPeq2X1keVqTSJSsxi6Ha",
  "key2": "2fajJcbxnPtC68RMvNxqTAoks95C17P5GmApHoeGoEm2MG1S422jfAPsfjtWEbeBrPSbucuGyAPEYMsHLdmRhdqr",
  "key3": "ni2eoXrKhimQNys5vnFrwD2XeEE4erkt2fVQBjSWU5BUV9X2GMEEqiCiMpsF2vXeBvm1KpG6TBm5DRqufP5yYZ3",
  "key4": "2AeiunWLoxHzi9BZKKCM4UYcWsFjY8CjvuoaPf4Svsx1oD1rpj54dg6JHGkeRG7EqMepZaWGq378WaD3DpS1L8K4",
  "key5": "2HKcyrMZ37wZwoe9xY96rCg979nuuGZX6hDn9jBEJE7Lz1RT7YyX6hKwgyoNMwHywmfpEESMde7YpxxzR9Zjoveo",
  "key6": "3FEAffT5Jahtqvc7p4jTGL1G3KNwNjxB5uA16gcGfHRgpvQ7xd5aS16uJDYKzwtRBAoxMu77ZcTd2FxzACqMfVDp",
  "key7": "4mQ5QvPzxezpk5CWty4VnkAF3yBnZWqJ3bzGJ2ubfyr53yQfsjD9D5RU2pyr6BgYg4QAn4CwcVVdwrnMZwi6VpmA",
  "key8": "2EFf1sPBHBpSj3TZ1s979St3jK2rqJchXa1GWf5mDFzfDvZMkm3SEyeEAkroEgmb6jLK5pEyfG2J8iXMoBwp6NJ8",
  "key9": "5pZJZtnQoQHrSJob5nsrVg14gqVYUvxbg6gjzi4MQsL4AVbhPc1ue7DNQVoeXMyuzrMroS63NuJqeMwkRrbQ3BH2",
  "key10": "5Z4L8EqykDv5nqJF3xauoE8Eruk3Jhq7qirFoHZ3cVz5dRXD5dJKFSffrwaN2VTFGCcQiSHBvWpTShLmDaABEm6X",
  "key11": "58gJgLq2w81YCkAFh4esCvtykxueeSst65ALgHRvtYroa5tQeuLgNfVEDZzG9VkHWYVM5Fm8MfMmt36Ax4VU1dMr",
  "key12": "3n5AtSGqTr8CJeHUotKimH2cA9m7q6HrepgZNMpQTU5Kw8cfQfE97k8SMfnqV7j9cJZTDHrDMZK4VBKuCnduPgH3",
  "key13": "4GgVz5WZRnLzPK36otnmHgBF8kMZiQUpsrSySv2gw2ki2zBkGyavoi2gSfyg2GmiwsiQB2UxKgkM5RTHcK2JaYZV",
  "key14": "2EPpjWEwi1UzAHp5e8es1HmWHuk264ZLttRnkPRNmWQYHBPb16eP7co72NR6YrhhKo2zDc1hN2WL9JxpfW7SXHuC",
  "key15": "5a5T9KQee6PJSTEqMFjRCSvqtni6Zu6YiFJFQ5QEb7p1peN3VrFgGWwaaG91eaiiWULJexpuo1kpKqXm2XFSDAL8",
  "key16": "5d7Aj2tTCuZk71HoDHnt1TKfZpo7MgHQe1CMRxMdAuJYKgdpaYMe8G3XHjhjCdEX5HUus78FT9JfT1Rozmxnyv9g",
  "key17": "2skvjgSHA9tFZobRxUR1BbUSUSyznPPQmqu9v2SzSx3o7WxiafwrQJNNRptf7FfhY9C7J947QaMsbkptaCxX8s3s",
  "key18": "rnqekw68ffrBqqx8HHJGXJhHW9KVkgW4AydTnLLXwkXxZ1GmyVtSbAfDJPVHWiLMJDoYkjASrVAvFpYxEreckXR",
  "key19": "5aNVgnpwBhtcn2Eie2NZXSGGpVu595BMSPp6CXYZPzKixPt7eHgL14sTWuJbwmgs4RnKNdmwdY6NWnX6SMLLR6QR",
  "key20": "67MgvDvPA4doJzLYBiN4zAV84u59Nmwpp5LbRfMNAunuZPbeiWsF1JmyjHQyc656KTxymFBaQXVrQCv48rqwcEMe",
  "key21": "4g4hT6CG2oXQEBMHnxbsb8mviPLi4X8HaJvuBcsn3izRyDVDMT1uFGwLKgTf9xk625r6JTFHp63eC5zMs1nS9gAP",
  "key22": "2Fd7b9Cj2yY8PvU2NsgJmKpiqf9wzePXsgwJMzPMcFrQQ26xTPoBNWJDQqYD6eKtMhDRHwQqKUu6196JcYDfoATh",
  "key23": "38sighG5nLsriW3MWVZWaLNUbK38RycSTg99AxcX3fT4ubXTZiDV2ucFh1TkTB6grbHBLPc9aK9GMaBw7YASadgK",
  "key24": "4W5kHHDe19vF6B8TSDaxb3LHU3XGCZZwY9Pc2SfYB9BoBAmq9spF8vDDPRPsJXyx3fXsxthRutbxZhJcRSLanPeo",
  "key25": "5NHnR5RecFc7or6wojp5N6FLxFvm8JxR1eKYv7NsJZ7hRd87gb5LjrBjxMKLpsqxxzbRGaAbdguJETU2kUmFiQb8",
  "key26": "4ynFVcPrrN14JoPRd2oPbgzEpTP9WHJthjETHvpQqin4gNrLFnh1beuapBj4FYr7Zb5X3McuH6hfuw69NVgGurx6",
  "key27": "2xHhA9cHjuF7F8yMEipor2w8eC3MnjfcJmdFtC6MeYS8TEj1QaUyoVY5TwPLJ2nStdGDKpwNbC8bXhtkkbrhEcmF"
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
