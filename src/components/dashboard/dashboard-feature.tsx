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
    "2W3rfyHw9H6vuGBvoihC5hxpX25JBdZG9g8FypNmUaJuDiodTAoWKyDpkfMwSwJrfSoSagwq9YfgiuacYLMjLuDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LasE7QWi2cQgVardFpNuTgoHzPWjz2t2GF9kMnKz2yZWv7Ey8eyQrA7FTNpZCZ5Th5rtHRruKQKLQx6SEA1XFBq",
  "key1": "2pDDB2KJmSyVZzhUHUFjTi7ZQkUHe9k5sSNUxzzD52BQwSg2TRfvhXb2Hzq9jzjAZtKPpCysLBU21xtLhtciU6Df",
  "key2": "kj5UqA7dkwfVLhBTembdFHr8Xy2PNoT5PN42MQr7CY2KLnvwUPJMRB9wqyFdGhjYrySyn4gW4q96U3UYgdtM6x6",
  "key3": "BS5JZDJKf5fmgyYJfYr2r4eg5oN5PXKzezB8kmLpAMKabUVDPDoxSqNJxwqRkBhTxgeVtakWqUAXWFMzA2vWduf",
  "key4": "44CN3RdTnRU7SBW2jJdBrjPR59pBktzseBPTZsfHQw3zQAay8R8KVDBLQ2s3r3WU1H1u5X8QAqBMG2hFNTfr5jPy",
  "key5": "3Rz9vHwNAWVvGMBmAbQMCjLyFHdYHU6w7cW6QouHtLrzTMMVogHadJ3qzieXL8JoVcaVN9pU1Zy6EYMpD7mDbS4R",
  "key6": "2jpBTTqw6Mw7zNrCQCpm2KYCdyhhFyszrXut2mEmkmE98wtfk6ithkjCH7mjYTL6JRCWFLAzcYAkQcnPU3fGHVQ8",
  "key7": "5c5YxcedT1JoCy6wKKdzHvguXn7X125rR7u6WKzBMsaCNAS3DpaSozxHBCQ2CaiUPQ8bAxQMcVhvFv5bzZG3yCsg",
  "key8": "52PW6JXbhLD9KH3s4Gqi8FkNbewnkuMfVvsrByTkrMC5WqtsQr3hk8NQHZ3xEiqQ6b3RfMohsnWD5nQz7hpMgnmu",
  "key9": "zFzNVBqJSMUJ4T2BRKJSyRGc3zX63NjD3UVvbTbrgFSaHfysEo6T1tjhV5yWgdytPLd73zint7VsA5HDUtjx5te",
  "key10": "fhrwp7WUTVt8tAJjxMe5Pb1xwaDyyPHGVJ1W2E4JCuBd9jQ1wr3TMWiub5iB1oHg2QUMSjE3zsviewYpP25s5hL",
  "key11": "wP7ZTpceP4dnVTLq5defHH5L13x3CBJSpzmvLrH8GVR36DZs5cqqDHdbjt3gvkLN6AbGhTq2hdPRpQYTun69D1i",
  "key12": "ktZwTomzD9LeVq91Xpo8smcs22o1WjDEfF5qZW6oh12UoTCyVXfj5j8PFaSFskuSDFaEgFinmpzcJb6ifwTdC5p",
  "key13": "4ahd3pGzUuHdTfCZeEjuvZTG9PYpg9D6iBvcw5g3jb5eLdcz4TBhbDg6KEjuxoAwNfksrWMjcu5gazSWm2vhGsGZ",
  "key14": "4r8cU68UosB98uzQXkaDG3Hh9dvezqFMA1RkszatcnBFpsvGKne2eZXXELu983QXRtgAbLPUZwUsGT6eTY7nvy8m",
  "key15": "38t8gXoSCDvAB1sE1JwunUba9Xm3QJ5Ki6APzJvofLGUxndEus2M8qZ19nbmopJXtMnCGZVnToJXPLStmf45m7Da",
  "key16": "2FizvVSjwnkNPcvYWujpdShousbu8JMeeXghgQGC88nmXAhTYDSpyHqDuzxy7Kuoa6nBUMp1FvWTVaYVWmKrrkyv",
  "key17": "2ThmpeSKbFyUQxhEUYkSy1RJvUUSUACtRse9sg5JuWC3dVPj6K2uJ7YgiFbxA8Mhu8gg26up7rfxxQwq7dLFmqrD",
  "key18": "1cMqKA1ELrSZeLZmnXz2QtPeGUYbeowty3T4oNZe2bnSbPyX4ZatZfFByYDdfKi7WZLKJ1ewxKeLn6ERypjRCDz",
  "key19": "2DQRHTYLtu7hgnVYRNMSGtBAUkGpf7tczCruxTV5AcA1aTNXzfqrSvMMmhN2AJrpPj81ecvV7o1pgzD9dahiuSRp",
  "key20": "4NMMCbgAxRaaBBiB9SaJHcFpu9SS4Qq3VscKRUfVCnoTJP3ka5sFTEFg6q4FXATzouQKPSRJ9w6wk9C45MEszMGm",
  "key21": "5Bmf4cxceuAkmAPDvsNg8PuGRhptSRKKY14bG96ebwJjJrF1XEsbmVADNSseTUEHZMYUiB93CYRQUyAZy27WiSnq",
  "key22": "2cohRuJnRvEkoBYPRULiqPdEY6Gphg4cLPYMetmjktvPV7gsxNjZtMYzjFrRadTJCdYycpEM8fHWUEw5h7NcHaz1",
  "key23": "5DokAbUjS8M4DQc5sWxoSaWTWBCU2nvztjHGRGemXZBqnYvUdBNt2c6yZ7Bb3DfrJjF5XkAKiu5Xmyx5SiJ7jVMT",
  "key24": "3LhEzdCccGditqHy2MG9xGaGUCP1WWgyjvh1167QoRD62EtCaMUrEUXCjis4ywffYbnwoDAymJ3ZRrLRoUjfxE5Y",
  "key25": "2BjWizGXdWyAPdspQGyWu78Ev2kANqW3BuxqFzSxupX7LtZz3utoFvwC3QjZYkLxSZXod2P2TMp8ExXw8ABzE7d3",
  "key26": "tLahP5PFe6q43Eh42dVy1ZLkv34Jy2jRpqcPxgJEEo3dc5C9j95t9ynF8ERYQBDikn8rJpj32Ei3utCQgPtTPYz",
  "key27": "3GYQKVjZXoYCcp7PAdtxo2oZavjTKTUW7GWAW79ayPVT7isTvvjHkYZVKsYhWcsPqqimCKCqxKCMSWqE1hC3XFiV",
  "key28": "5SBmiMBBEQSUkW28zH2oei6NT7xha2o23XThMe1kfvAasytnERyosTJ9rtTjvoGjxXra4Tvr635Z4ftFuE8exviB",
  "key29": "3apbJmW8drAzQWJC1LZUv2eK2LH8j1VQ3YVwD3YqHonK9hQFMYCpBU6UYD8ruT7XrXw5cJ4TdQsn7HgpgMFHgDuD"
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
