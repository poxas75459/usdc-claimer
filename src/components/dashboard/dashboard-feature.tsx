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
    "4FuxxVAV8m53hEFkCnHJHVam5SjE7SzhRa33JbfjWqEPrJ2RheaG7zuEeELH5W8kaLtnezR8KYz99faz8WMHkMUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eFBMyesiXq5pCCuW7k64gMFSQJjacAZQ6Vb3jBZMJDLAwvmuVC26r61Dm8qFC1hVkEEkuQVSRy4PGRQUb3qUTjM",
  "key1": "t6pW8fkvh64emEjDor8YSFxMjbCVpcyLnpYesJFvXBV2QrUHqLShXbXsJkvUL1G81SHAauprhbVURHwev1f23Ak",
  "key2": "4bjPKyzCRKBYpmdnAUjDNvmi3jxXSbsNDJVJs25m3zTzp31NqpKZ4HoQhXZAMfsDWRbifCi5RARQMFDJwQpPu3gq",
  "key3": "5MMNsn7d5mXh5NsEKEqAMnRM1d4rEq7LzbbFpSts9ZQyibzK9ivBFecL8RVBBeTJ99FaMLK9LSEpQQ4adkeUrYWx",
  "key4": "5usoJmv26bBtLcwDnZWKcjxUi5rxCEzUjzcUhE6aNtPiw94upuQjyDXtoZWe2jxG2tc3TSQJyRrG857HMWk3k8oK",
  "key5": "66ext36sPnqmvc3mwGc4xd6vgSjU9p5eVf9Gg1hvwXSdCxBkt215LUkBusHfRsfy8RNjpwzPstkMNwfkXRcna5tS",
  "key6": "4KnAtwUc4BabnUeTKVZj3GuV2pHD6kFmzqKtxXnAWRhD33tEQwuyuCqRV5BKbDu8iQtHytyndgag64f65Sr8ZFzT",
  "key7": "L1yvd7bLMfninz4kaZXVzYiAj6CbPzpRnqyhpAFHj7w6VmDAHHHSaJZ7K4w46Ne4vKDRBA859E2DD3om6grghjm",
  "key8": "2G6MbKjHAXYR61aBf83PBE2wKiFdrNeAvv2t155x3oFgdXNxGu7icgr1TmmwHyMrJkNkQipaFdBma36f6zzcB7Vd",
  "key9": "xM7dZ6WBkMRX5Mrmq2SSWV3twhuVfCzfy265vCP13mm41B3Vzu9EETdv7AAt7tRxwMxZLK4VPkS1YTYSV9dk4Du",
  "key10": "4CFsY2waDWnTS1LAYbMgXDrgqRKTBVnSA2HntRHZNDhEmSzKebQSHMkg3XnJVVeLpo2Z3QHQURVh6mHAB2hfAskA",
  "key11": "4EM7Xpj1UaHrjQdQN5yoaLfJ3s5F1f4kPKnkGomRnWLpJDvekrSvjjJt5EVDmtiRRBUKJHt6goRayuSXkKUDD94T",
  "key12": "5XrhRoTMs2c9emLsc2SGxT1ifP4rMyFGp16Pjvs82hFa76iQcqtcHV3k7Tgjg1qtgCVht3mPMyBptduFRHtbyFxz",
  "key13": "QcjxXtEqFfDUpfu2EYVV3c3xTYDafX68idPBcZ9Nk62a1nXZc5F19wML9XbK1LRrDWZmXoQQbGVssztUVSjJKsG",
  "key14": "3274DafVmgwFa3Yp6RaX9WYNEp8isTct8HEpmCifYg34oyycfa3Fwspgk13VRyZ41Zu7YbSM64mCN9gg6gAEmk5g",
  "key15": "2wWBymzF743uAvVUNf5nMokQ3XTW9hYqdRAV9D1DuTA9rAHeHELBJ4ssUnGVCuDrKduQKPUZPwnymM76A5APi4CU",
  "key16": "2P7wxKxLYHXKRBWokknHvByafSAgL7UiddZdpzxooT3FX4PYdz1WZMSyK6B2qwHwVsdjjWntqN9BBCcCqGFF1sLU",
  "key17": "58SyDbUN7B3oQ6csF6kkfmM5617LcdMe4EymQi5JkjNe8W8Mmyp4wWbSR4qmaB9m7qbiGpL84GdVgmeBbDJogZwd",
  "key18": "4TVBARhYtAAnzMDc4y9rzck3vDSDE3NqBB6ZKpLxx7Vko49Ytd97CZ5seRYSaUWmDJ9HLeTWgT4Gqxzq9fB9p7SV",
  "key19": "2rasKAUFKTVkZkjXytQTZPtxaq4qst4jQ8sbkCGFS1JzruCH7bNuhnBV2DqyEb7hcUXxVUCuCrBSU1J5dcLbwkPq",
  "key20": "4eSmNdTZ7Nei38QYZGLdvFXj6sqk2nA4vM1D4RqxDgZnQgRJnJNi2xHxnnBw3mCkNF7XtTu3sfZQyCsaYM2g5dri",
  "key21": "3nNZj9n4JjCkPDqac6y9k2eSh9piwM8qZ2sRt9RnsvzF1jK9bizRxS2NUWJT3nSsGUv5tNhGtLdUk7b2XjcQYjXW",
  "key22": "3zQFJSVH7AnFBpfaNrtrEvgbbT5dVaGAPkp91pMXCtUUygytFeGqHh1hvMA1EN2iN9g9gnrA8a75XtQ3tbNKqiPX",
  "key23": "2Xp3Pnk8xs2HnCDFyt1M6B7BiEeGmJY6RvC6eDV3wKafWFsVnKYhjYkyELHG6fBWqVYQhSY6VZY6MCixT3izYVYT",
  "key24": "Cm3qZjZFYEKfVPSt6zM6p5xQjr7CmYn4yvjsZ3AWqMYshFw4RCgJHi4N16fnbA8WMBQxLFKVpVY3CPPY76KXPUb",
  "key25": "4CgAvTqADAkBswDdZL9ySSk24EjaQo9VZMZ7FAXb3ohxfMEgp8HUWxUmhzeku4ZrFd5KFpYr7AnJ2wLs14SCd2Y5"
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
