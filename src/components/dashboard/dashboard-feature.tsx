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
    "qv3VBRZZ2d3gSKuSAETywftULz6dnTKPYUxS8ofRH35ZNEVceuQmtsq6CfjryXMAFjVNWpp5HQzpBqsW1abCcfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pAZJQXs5Y1Sik1krF7GjuFj1DM9VvpEQxNhbCMKg9JzjrcumFLLL2PVcpSaAPjagvvPVooWpjQeEouWHhbVCJGc",
  "key1": "5ACEFq3TpSh6c1VhM6aDgs1iHocG1XgLkcjmDyEp7hevBGdWhSR2BxyjBLrd7snYFAvgBL8qQQFnUvc96Rzyatm6",
  "key2": "4KmHUEjjzxfg3C9i2PuCgYFmQFPTmLxt3JSi4xkkWXmAVSSYMQkMh2J1E1V6cd1ZDK7GWGasyJyqkBP1P6kh2i9Z",
  "key3": "5vpMjz3hBKWS4u7AuBWYjNFbZYqHrjB9XeDWoh2kWKvPoZSLeNDea7j3zp1egY46c6AgkpqvJsHnkB2ATF72LVxx",
  "key4": "22wvYoaVxAGq8Y2QoLXbefYbgFD7VY7ho5GA9RztvXAcJ7Yaz1UbkV7XSKKS4yQyGWP6R9J7PhHmyzCuTggdKW6k",
  "key5": "5Vtmyz9TAXw62LtP8jcwUa3CSDrcjGHtHsUASsBjq2S6GSFtmnL6nohfyfWWa4wBRh8e6pLpLooVcKbsqCujobZL",
  "key6": "2mJVsLz4VsxMkMRreL2rT4xo9RomMrNnRy3fL44rfvBCP7W8kFt8VxsCxRLNcjCa4Fa5WeJBP4hBcqKrRDGJcrVz",
  "key7": "2Eq8UDsgSexKHRRcKbm14XuVEorXAZkgvGY38Q4wZ9eoBdduiT9nQFaxsYXbRUFTVLHpeFjCf43gLLnVLE13zfsM",
  "key8": "4umW8wgsM3jHVgr5nCL8gdj2KQCUVW8U8SpdCoWbCycyqX4nnLejYA8FMXhKENS3mLKVLZDE1fDFJgpnWDNg5XBQ",
  "key9": "5XqAxMZd251GP6Gn57tVuv5Ae66fWphGFFC1JkyFKwnAo9SXoF8MxUvvFCGAzoT1cESiuuYfVrZHxb7TGyVPsMkN",
  "key10": "5gwBGYg3tCdvgxkr88Pb2NQGD8aaicuwGXakQQi3BxnGVPnjx2XXezgd53oQCJDAiQs6bFMNbaEDHUApNQAfQ8xH",
  "key11": "35GNrxrdeJKkhed4RYQLwQmxQqDghUZTBMDd3aYNV6BCA3xM6QBFW3uGdnLycSwvrwS2f8N1x7nChbjiRP3aSpFz",
  "key12": "2Fie4sUVWMwmVRZtWMSfwLQbniVtFtGjQN77CZVfM41UXXbhGf5pRSCGHHYmEonLUHAXY68wgoNnoVoLtx7uYmRA",
  "key13": "3cqXgSKjDV1y524hi33JMANFPCoU4XnPK7wgGjWEkoL9tQzVCt9zSGASqoYtM5NJMvgkx9vJSLVHLPKk1WwTgXEM",
  "key14": "562Nm43vcXxcJcJk9WgZTQ98jaL9NrDzFvoYD4c9RXRL1hXUUe6QTskU1Fgp6rfdXVFNn832VdSE7BqsHmScMqko",
  "key15": "4R42Vtkusgn2a49Cw5dbNGVPBsupGfHJDjupmtViKLH2nEFU8j8d3ZafnE93eDHe8RAEYRbza9aktNiGA6HVJTPn",
  "key16": "3WvRJWRJwNSETu7A8bj9AsZ3nUyj9GYAGhD6xfhSLxZxKxZ111qXci5ZASxY5jakCmB8bhxRyH8qNT8ppNkqFYzC",
  "key17": "34Znc9YE1gAVpBvgPw6Q96YXHdS1c8axFENkPdGGMAtddeJkTx2K8ejaohuY8k3ENtgB6agW3YhTXB79rBvXcLPg",
  "key18": "3FhNEN2BiYasctMd7JK2MT6mcxByapHCE5Yp3DN2SkzhBtBqEGHonSWNiMXEM6cPptkG2Ku94QYb8FNucAU3pTjj",
  "key19": "zfdAj9xJA7kNBNaGavVxJ11qkWMc1hShsc8aG1EpvRQ92YFawHHm4VjJwXKKm2YcLBmkW6dGEuc8Tf5hwoJAPjZ",
  "key20": "4MCtzzhctUVDMYcZdcTuhjjYr3i8J88jPvcRufVZMgcLLkYTymrfS1oBZsjsdzN9kJsExuuS3xXUKEszcit9jPjL",
  "key21": "45Npk7mTHtMkEMnGbCNct9rgLsVgPjjEK6sD6nZDviP7VDxaZekXgbeLxuRUdTxuqbY9vxGmkPv19VEptX1Tcb3p",
  "key22": "cR9f7BWYsR8nHQ6EXtWFCJjrHPjC6ZDdvWZEERQgowfapWbYcPLt14iezo6LfRXzwPhDqFTuJHJcKw9T6rQFDTP",
  "key23": "2XN5YyE6NZXM8SXMgARrZe5c9qnXe9PBpEBfaC9n9yCfdos9cx1E3RG48j7dHCKCKNCP3nknWD6wSiuRjBNQYCT8",
  "key24": "4V2TWLGD4Ua9RrEgVqDcjZu2z5BaWnSGSX4dJw5CEfpVZV1nMtQWFuYfyrSEgfD6Vido61sDyhgsRiPBD9JVDbGQ"
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
