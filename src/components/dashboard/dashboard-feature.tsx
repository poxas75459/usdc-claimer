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
    "urqRzV548h9jFg6qNNBbxTR3qKNAZRPAHNY1EH18JxdyaaAWQWySWBuAYEuYheBWRP5jP2VcggVjw7mVkBQ3BwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E4jB7jsCvswjuMKirp95fz13nEofJN3LsrZKey5m5Egr1SfuavTZdqvDgChniSkRaZ4LSuX8YS6hjCU5xSWWLbk",
  "key1": "5XDV4ApuynFT3CpnV3uezKaDhU5c8fwTD5eazK6drGoFmshZAVDn1AeRL1xL187zSNXfoa9ctrjFpHnyHLhfvyHF",
  "key2": "5YwYqGj4ZKg8CYEvREu2rh2C8bdzWZ3RACKg45fUGwVQZm2s1wRbmr44uBbm4kQMoXLLWtwaCLw5Ez1GwAZpMTiA",
  "key3": "byep8DTqsvnst5sRnBN2U1EkCAbESMaDZfoYrqGeftAX5mooVmRqsWD9DyTE9d6gtTXQ2SLgJsfSRLHSxLU5fPC",
  "key4": "4rk1G6tCoiTgWujRvD37Qx5Cv3Xem7YbRYW3XAVFjHhsEBncLq6bagvam36RMcLNhaGt9XPnpwe9P4QcKQ8w4Zpw",
  "key5": "P1g5p8eXHHYMJsAzotGfZrDYxvDJqfV9cZKmtFFv24pMkAq9qp3Sfzqs4Ewo8BF9hWd9ibJs2Xt34VLHA3h3ZKB",
  "key6": "5VV1EYtig5fr8mvxeGCPhSRnk7XC7iSmjY9TpwE1zZyifh2QXAhahX1GXvEz5wSYKpQNEmffaCeVpDqGmqVRE6u8",
  "key7": "4CF1qbNMKazTFYzg6H6UzpPMbBUSsr4ymNf8aUna2xeGAcGTuQit6cFTcjfhBuQCcNgv2kQHHBLfrgJtPdGCXbu8",
  "key8": "3wDfUEp4c3x1Hs8wr13Ktye9N87egcuA2vxoPRiZYEUCeyYQDJAwZQEHs9Dx57kr35KDxrPztbozzgex3AAkb3ox",
  "key9": "45ubAbgzDn3jHmVGumJnFHR34QVRaMVZkoTkSYvbzRTsHKoULEp254J9YsPX7AcvNehj1WN8YRJvCzeRKAeX3f9R",
  "key10": "3ZUq4esJaUfJioPFFGUAKJWkfYLoJFgy4hXf9Fj9mPiFoGsdxPPXN7Az98dHGZ8TUauWocaGr1augz9EhXRSKzLw",
  "key11": "3t4ZGq7U79rCcMXDcxdUTCDitohGTsYWqKAJEQzGFScvA63H1Dn74zLt2UDWpjTr6cSeLdkr4RGxKq9cWrUo63E",
  "key12": "5V8H4zn44er3nf1viJ3HMU4Sc4uLZb9XKSEDynjTpHqf2YwdGUWr1pPmDYZDnP4HFTCHm62Qb2r43mwr41yrTcVM",
  "key13": "JEmsCv3tLxmjHUQwaMUufkqPJTETXc1upBdRNp2HcqJHYvwv5whfQFNtxMCxkC3QULmnZGaJbm1Rmr7Rw4WRh6h",
  "key14": "2Yfj1t6di6H3uNnpn8oTmzKE3amrg4euvojFaGpKrH7NvMHExWL97GXDtR8hc6rf7V69RZRias6yQv6iAteRmmGz",
  "key15": "3etf2fr4wGtnkd9yomuD8CtxQYxQBiJw9Ea3ZCS4ZAZQtmKbajGmmBrV3kZBZvzNAk16P9uGpdQVj65bdPRJzG5v",
  "key16": "ahkeG83dMKL2vjQqUrJxDU1PwjUP3SrNeNm2Pk86MMsf7aFNdD1TG6kRCU6xkoZvxcHMzUSRXzknUm682SsqwGr",
  "key17": "41ydswyoAYxtpfQeaqLKztrCYcQwHwfV9h1FexGgzvipezMR5xTTyHsrxB471wHwjQykNaASu4MUMrDHd2j1dj9w",
  "key18": "3qiCqsEeDLBbVFbUeKdTaqBDyk9bYAdyd6eHJq9Ck3BVZLs5YjigknRwWHqrJa2i2KGXJ3GrFiygQxJ7RbzGeKMT",
  "key19": "63ZiKkpT4FcuRfWbZ368Mf9cYgpDA6Uy9Fsaiamau9cvJvtt7roKfJaZt7FiKV2jSDprKV9V8AvrQoZVKhgBEMSm",
  "key20": "151smfQRpYcHV4tkvQRa1QymT2vK9qvpvZJP4cAnhcdgsuX39XWYQHR7URtPrnuy4miauXSTJweQBF7jEANWmJa",
  "key21": "2pQqqzkam8d4g2pLQpdavr7aWy3gigULytizwgtGUGaHjpmtUqnE6zFGUPXx4fPbyEy16ka4gzAfcsmA24tqgxUc",
  "key22": "2nyZvzTPqANzWUaWMqW73sBv15MmcardpJ1SELNk1EiYC9aB3QVQ5TrHNmv7KNvkfiQgqhrGadCkQiSLgMQonAK",
  "key23": "5AgQiywDD4WBgHN56prLw6xHyiH58iPDonNbcJoqqF953NvuCTKV2nHsh59ux9aUGZghgBsc7vdbv34QeZuokD17",
  "key24": "2sRDTUaWTjERjiUBKK7AsrGGx73hVq2sXFiVcTXoceAeJ5o8tbmTFpXvM3M8PEsyPUutUrczUaXbEDjeYzcTEnV"
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
