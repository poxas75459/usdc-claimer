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
    "3m3uwoXy87gup5B1EQXS2KCYqTuk7vPtUmQcCmuY4dLnWKdpcHcU5pkVJTpwj51YWNMvGQNa8vwfsf4MZxEfoLbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VamAiQJsoWWDe6khCCsoX2E5Mf9FtrPWtzn537qpPbha56eqRF4mdcYua9WHwzCUT9jtZdvq13tXC4bfTpymUmM",
  "key1": "HQagCfwpHqYayP3BuBUWMQRqsV7pTw1hNZYEfw7kiKmdJ4uPe6S3TcxTQggtjan5TRft3kJHZQg4UCxSurUrXFg",
  "key2": "2cnwHfEfR87JdSgjnx9TaZ3XVAC9GkQmnbgtjswuVrcUo6GA3jzmqWC5STTCdunhMEJ7HN3USYtBcszFnzvu2bin",
  "key3": "42NK17h3kepTfwL43MLrMZP3kWCzr2KJYPG2YqXWEjDRTknEW1CXrheRj75A5T3z9mP7V4pPXY5PdpEw6YoBsmCU",
  "key4": "4fSDjqjs8yk4LLCFUQqLi88NAfVebGtPABXsZhvtefRCda6pGqG7takYqWqSzv9JTV81kbQD26PbLaU7SchkHEfi",
  "key5": "7cRdQfgGzSrKtiuj7dA8Y5jcj5sPqR339iw2AUWBAt6FYVchomKF2b65kjPpGJ1LuuaNVZxkTpcrsJZfKycCkxQ",
  "key6": "5GvAPE1GHrwKSk4BCor6T4fDHSGwkQdGZpPjFj7hTf21vUjBAAxjY3Xz1A8GQwdMV7XhGHBokKVYkYDcvRfKTZaU",
  "key7": "66LE5yNNtR6mk1fmh6Vfpc1ZZegECvDxUs6LAmsf52NExmLkuF6JHZvWzsDYz4hBgXbz1RxVRqbpk5BLJmnpiGCz",
  "key8": "3C6hgfNrLZc9YZW4GTCACMpdo3JcoJzFjdpSYxsbzRvUg8xsZ1Vi3C9EC3wBaSimEvkVtSjbyediXH9z4wpBA2cN",
  "key9": "vdb8SboVdGXLeiYSQGcRKDHaDBqd5tfCFsceyAFx3BATUd3zraKaeMW356qepAz3Yz5kR1TrS5prZoyabWF28vw",
  "key10": "3ezQKWEQShon7xRgy8pRLgRXdjFP9Um7DSMJQueXnYDfJQoMc2NokueWyCi4CxTKGJ5MG1ySyLpdRAFTjYqFnYRN",
  "key11": "5omqdUrzrHJNPFq4dcthiQ5P265pX8V72hkMonmgJPna61w4dxgvNZkrxCATs5CZjm5KTKxj6D8HcH4eGQ5Xbrqk",
  "key12": "32A74D6XH5QAsvBedttmWLFpTPj9nzDExi8V7vCcHdRjiHeD8ocDssiLKQrop6a12zywC1K22ZWBW6EMUGvGWGWW",
  "key13": "58WdaCyRu1knqMEvxACPHo27JtFvsfhi8pW2pNaXM1PqCihHfGXj72nykyo4E4zPeoZmfmMtVYXh8Hw5mSsE9xDh",
  "key14": "6HixoRL4dwo2ciMjSXUhCGgm8Hm5u3Yw5Tt3LDxfvXyY26PPWQtk4Y2s2JztkF82B5buZpQBn6wnLJF8DuGD8ZR",
  "key15": "5dnJbJtdypD8QuB5gyYA4kMUExTmm3A93qz5SiQMQk2jPozKxta8C2TuTH3EEsupSa4YeezdvU5X4a2eWjgrBTVB",
  "key16": "2mU6446wkgNhd2e2jXzG3KRYAB7fpD1juwGkuTUxzLt7hD77R62PXcQcGLWacRmgVudW7Uj9iHgz1VD9TZEyA8xb",
  "key17": "4oBaH7eKmS13MhmPTK59zwoX4KpwiGvLSsk8wTaGUkezatk7SPWwYZ8CDKgytpcivLLorGWGaciyzq7R6qSyFiLQ",
  "key18": "5XEr4FbHChDStQfxoKo1fwKiBdcSieERxGw4kn59h3jTuRNhcgF6oMouWHK3j3bJphrZUHoENtDNDe9dEEFBPYqE",
  "key19": "3PbBV1kdXpQWmxigVtdT5q77QqhtBKvX2UamKyNGqBntjLUDtQHwuaFtvT5usZbxBkDbXT3rfwpCck2ESHwhDskT",
  "key20": "4HxvLqzu8s9DuAtUai5wRAtY5Vj14GECfMV1WvLBMRLTCSUHtqhkUUvsGtyPYm84wCbf1QQkKbyGZJzdWGiSCBob",
  "key21": "3aTkPeLiXhMEGeyHSebyiyworZSDBoyXmdFRUZzLitq7DXjUxySWMsvxpfHxyQQffoRejny2pqQYPEwEZm7jhRZ",
  "key22": "3Nx8juDE3dZwxeUbREntj3yYM4Hnj45P1sDuankB9dQB5z7EYsh91MqzzZeK5yBYm8GxR3tZHyVJu1g6vUpZqE75",
  "key23": "rU5ToLVYU4eQL7jWXiSvFrESVGzM3oP5XA8TuLH8tLxVmBXiWY88Y8H9pjauuN5ez6So85d9cFZFTYe4jgop9RF",
  "key24": "qv1r5rxzHVPyUPAN9bcQwoftzwriwAY88e6cWL8X8WYKyqq5hmwwS7LJ8JU3WnPW1BZUEkFSrdw2qqydPE4pFho",
  "key25": "3dSWjZcxfdFruN28NZ2Yn4ty1MTTJWMHQKyZKUkUVTDLp9gNs2qS51dLXPfF7S3kzvZwE2jg7QsjqmHV9z9jjeHX"
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
