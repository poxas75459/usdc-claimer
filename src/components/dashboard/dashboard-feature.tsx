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
    "2QfHGemFfQ6Gvtr3d78CsW9XGdTtEvvYXEPtkfgrGLTg22RGZv83vg6K2kZ6qbx1cDfTZr9FwSyLnguDcmv145AU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53yXnX5R263veTbH4gfGk1f5Va1uW1VCWEdMr2kzBhJ4z6MLd68acpP1sMqJvVGF4n5svfBjmZrZBrmqrrHP1nUs",
  "key1": "2TVMDd4ydkTzAmR4zFUeFpfbSkuNWWZdaJkk1sKYVzJCrHb2FLPrhJ8RzkfzkLWDTtswW4XRAt4trAsb2ee4G4Lw",
  "key2": "4KET3NMG1GyyLBHBDJ5agHZJRuvH2ATA6xK51hJ3bCpbRFAeV7YAHuoEuexEXTKmaZypNpbtgfuuZpK7Xnhffo8T",
  "key3": "4wcS8gQexT3KvNDeA6sB1XTXNNqVAMnJt6b2GyspvLw7k44T8UveYsdyTErcFsYy8oPLTt5z2x3h5QJXXBcEGFpK",
  "key4": "UVNq9ktmt7LCfAcxFQgx6JmYmsCk94RVDPzkGvS3GDTruudYaBfYCxgixUq26XGy6hfBBwYUBwGCD9r9MgoBb7o",
  "key5": "3kRFX1mNM37t9mAbXmxD1zmQFWZCpsMQXQRijk87VsC2urCwQZW3N6UcK4J3ihuhSyka6E5e7zBE12DrQre8MTGd",
  "key6": "3qpS9nBcbf5PRpTzN8cEQupj3QeUdeHv1X9TEirrBT9WMDZRKD14KL8WwKMD1sjmbtvCDL9V6kMooi8kiVk3DzZU",
  "key7": "5xhczU88CnB7g3cJhwySkJWHwFwhTew7YHmRS212JSfYSvb75tHbKCJnFbGgLVuuWS7WWZZ9yKXgi793GNBbax5F",
  "key8": "22bQJ6AHMJPFswPpbtDngc8zCDNRDwk2FwccJMt4tapopWSqMr71FDTk9UF4n4vEzZWQVZGqevesoPnrgCgUGeQT",
  "key9": "2bDzHeNZGXTb147RX9ttHo2dhRa7h3WhFV2dSqc2HRYx5NynjfMYWYjJiNbzmym45J5cqkeNofdUQ2hWyWG8NVx7",
  "key10": "4xsBT3krFsRah3zmwozxzqyEHqyBHK6EfHHQCcedSacCiUounkw22ibjM7Z3ACwEaKWYf4VnZu4bGSHcykRjj2ip",
  "key11": "3khVMRfQ5Cm985h8CMVULVcf775GBxUc1NJeQWRiwQMkjgwnQn8PUf6Saw6eDqX1PWFYvkbFdqoHb2tG554XpYbP",
  "key12": "6gmKhjiQ6GJtJYQvXupmggA2EumsAreJnUQe2pS5J5nTx1UvZ7jtSiaMSNQreKKb11LSJEpxH19hcMibY5QafJY",
  "key13": "2kt3umJHfoT2CSVaBqn4Age4BZYZg3qzPpSMxPMMLu6fP8nh8oBHTEHL229EathGgwETERB4kNRXMDDxrin1wwdu",
  "key14": "4wg3KSaTgfjGNN5AD2WYiSmxeUNSTg16nWK97MkWxsdp3BnFbzrVFWciHeavYBbsFh4Df2kmBWK3RXsJ9VrNzSn7",
  "key15": "5Z65qLeC8cgZUkameKZnTV5rzuzEyjZjngbEf2TMaoLwSjBEMovbLsPsF2dqSXFspFqRW7r3E8cpUoWw8kGVBvbx",
  "key16": "3P1BZdF45E2KUdQzopQyEj54x8QbYnKyKfwA21k2jYSEU8YksY3hpsei51V2U6GyzHkSwRcjxrCRnTycGnoHava5",
  "key17": "3kFfcB33b9piKyg9jK57JEgXenv7Sg3VZAsFdtVCRDTS7C99NLnKi4NM1EPNypLxBgnqXgEoMvMgWb1EL8mA5ACN",
  "key18": "3kcoutxeP9ttoKJvazrmkF7qqNTgUWTenL8QCz5qwKcXw7Aos27pxmVqFgoThkHs6LT1cKxsjsRMPiHQ8B9boMuB",
  "key19": "fp39g6bSSE5rgjJovS1RUc5LrBTx4gHsYMWwWCmocXz3epJDL3vHe4HKQKxndiUU7qZ1a3ANgNzcxmnBBHFkb4u",
  "key20": "4BXgRJeSJqLH1ntHu3nC7pYDa31mkb3X5UfxyEHEh3RE5DRANhS8zCVjo7nb555UmpJY9tSHpRBckAQJwUC1miCq",
  "key21": "2ibvePUAkw2N3517T7BaPj9KGr9et44NfnzfikU2mu8MsGTiUwBUeoyujZPmEqwFfoeYCL43erkE5vzxLF5BqcS7",
  "key22": "5bERaXLAFzX8r8DCFotiVPVPJVwSiFMXEemwNRpcjNSH6H1KvRrv2U5kPPkQPSZ3evCL4rWZGs2x3bZ174WygdyN",
  "key23": "4f66eyYs4vziW1HAy2ToV6mpEwTbei8AsBWKgUKXHyFiCNxcBwMBGf1xs8Xo9cPkEyKMbe3wxsZB4LDugye5s4Mw",
  "key24": "3pTnK8JqKUBunyj7sdbPyqeS9mMrL4STawURTEGGoZoe3avMj9yjrhkSMw2dfpM7y3GXw6igKkJKtRLLybytfuJ3",
  "key25": "5TwF3aUkK9eawtESbNTXkKXm2GSu9nqdJyGz5891QC5Jj5dn59Wvg59CdQdBb7yK3X8QRyRbUyJAocj8wMbSNZqB",
  "key26": "5T2pFCsxgV47kTCJxossTLdcWWnyXzMaENrsn3jR5EJs1dEzNHDAKbzcmKnMiJaBy9DegUUiJze9gnjnVuXFp4QF",
  "key27": "25CiGoaojtptBsgkc1SAmwgXpob8Haqa2hiyGqb7DRaBzR1wfp3gam7Aiph8stXcuLtKZt6U3wjcroE1Tmf93Wqr",
  "key28": "2nfmGUbdyGpKwWKN6W9pdmNTEQCApTGV3Txjh6Y8tyCEg6aqNvbKapt2mdWZa9qrZZC5J16cqzhnKMYK9LAeZnjZ",
  "key29": "349ioHxR2SsXD4c8R7QjKAZf4GFK3sosCLqdgSstw17Lh7RUW9sTwBrk69SL37s1UtiCMBhEZWomrhAEJy87FXQu",
  "key30": "3ZxVmG8zzm2YvjYSciuLqMuP44xEj28332nWXvPR455Lv3UUDnGEiZ7cdpAvDZfFyUL1Xx4RqfZbp8XRP77acAwi",
  "key31": "3uTSoKJ3pbMNzQquv917N5m1Ddus449PKaMHAxk8Jv74nCV7yXwmm8r6QWuhcg8SshzKwK83q8zu3WirLD2Nvf8C",
  "key32": "4xh1tVjB7fizXduqqepzVxifm8vSaAuKTetaEaXhNUgv4F4JvBtzKzisu2Xngxdo8cGy8oKGbfFVAKNYhhguA4BN",
  "key33": "4XLaRoHNjTUHGM8rAXtcEU6WbxWPg3i2oZADGvNxyBvykG7WvYx6xfJB4KxDDYjVH8xck58ZbCYMY595arsSMR5d"
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
