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
    "2aBuwRBMiVVGXK3SKcu29gtM9SK1H1LqCmYHoDA2E5wSBx6yzCkVNmPrMk4iD5mvNibaMcy5BDF548wQXtjpn326"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g1ZPH9WRZMPT3fgyxyrV3re41AspMWAdw2cJXhJzbqcESsWmvSxzf3F7RKE4c3wRPXEsuVGkEGiN1QcYeyi1xEt",
  "key1": "3zKwQyHgMMgoF7WfSoJvjwCmMW1rj1zs4ksEjAniYDJcnQSFoCufoMKZy7bBsJpWehwjaMFCAxusQyQHfN1WuXmU",
  "key2": "3qpcM482suavujiNprDfQeP2P5NF7YL6gapQYBqe5b9TzGMVahQeRuNL2WpbMH4GxxwnBS5xBoKUsA26KirNBQAa",
  "key3": "2N8ZRTBRAPDvWA7VX7oUFWiiNirnGaswnaaWxvbjzJe6Hkf7atdNmxTN3oDgoAyyFp1roDHhiLTdPmTXBzA1znB2",
  "key4": "2Ly4d7TwroSUNEs1a8uFKa2t5d9esQ2Wg538Vx7KX7k1LDGzKyCkRhV1cu3WQjV6UfWvk1Y2aWrXUV1xDNYfz2J9",
  "key5": "R43xmP6A33TuQjWPW5iVUVcETPKEkUHgqF9vtjKKJ3c9AKcQcBuMzX5B3UfJwsdQY52iCULUnB856CYbFarTHCP",
  "key6": "2kb74Wrg477gZix6Pu9iXVtMrjbodTnJFu4VTZLSDmzLVEZRwvbmQkLEom4znUSkkMMN7iTqzzxUZ85CSo5mSdMN",
  "key7": "64irDMpF3yumdy515AWLFPPiint9sp3q8TPwLEbBmQ2mftbHcH62NDFJBVDwxkegVLtMc6TTU9XPY4vEbGMRfD2z",
  "key8": "u7msiP4VsEBJyWWRiH6YeuM2K3rx2Jo9Gnah2RqZG6rqBTYCN12uaFCCDkuVrSyV3hKETobEc81TTnTTf84Bs9a",
  "key9": "4y9Knz3x4T49nGATeqPYPRZfvHE1ApC5WQ83GubasentiqWY3etZ8xVVSnomzV4JCTT5sf7G33R9hPMf6Us9RLz1",
  "key10": "cTDR3bJLELfWwC51Fj7ivfcxTtvSmQx7UtLpQat8EAm5C34ZWR8dzUHhbf2idX8ZTWPgykyzt4edxQddnjhc284",
  "key11": "DKFGp5drd5gn8ectWRsXY79RAaGsNojFk2dBQ9t2ij78Z34AG8QrULvGtxurpUHEodhzuUivXriDKQa18JFJqtp",
  "key12": "3GwsgMgvq5LUUcLCAiVubPVvX1rj94GFnuwAwgjVtC9E22zh7dsq8Ri6yCbfLZjgGD9nbUCCZuZjRaGj4Z2u1xPD",
  "key13": "3iZgejxHBf3EbR2T2A6bnzfNbgKdHRdzGwaQCeh2iXmwacdpRBWoMNzg9Z4nweVy6F1ZzJBM4vgykxwCQHBgVCxt",
  "key14": "5vYXxcmypgyPnDXL1oD5bL79rkUTs63nD1gacQ5YeS6GxcMR2dtYyaUpzsZjB2M78ytV37bMH3nKJxVHf5DtmCH9",
  "key15": "4ucDbXXGGdiDrbQtvEvStjQwDHUgNGwjP72MEZvnP5JX34X3SuMoGESgJ2pp46Leq6uUQrgjdLCsqUXvFn9cBC4k",
  "key16": "4R4uMwS5yqTR75gwpESUGva8GwsJZWNPsVHg76yTvZdZvByx59A4NZQVXwaMU3LC25oSKDbeGTWLM5DwEQ8eBAJq",
  "key17": "4AsGrkeuU3Q7PcQi2QncrqrJsmaFUof6qMGHBQn8e2kg2Lg48E3ypdmw4bWmUtnwnCj2QaLHFvyFw5dy8ZDMzFuE",
  "key18": "27ZUxz6BwXGpSXr7GT5oU3XhpvJNHzqV7Ha9q4iYWN9eabRRx2mubxezAfyQQnVx9ngu2JqrwCjfuhesQk5amv5a",
  "key19": "wt4onKcoSKZzWnhVyF8MEH1ZWwZoh6P7Zv7bqaFXMj5sD3vdS1ag3jmELWVuUgh4BPhJbdrkhsjK8yqAthLV6bw",
  "key20": "2HzvW4QDvizDXr1ZxuVDfRh3nyzm5fByGzGKVXfdyYYih6ZPTAUpYdrSX6u89AarPJNTbEgS1627frgaxvJ6iiCJ",
  "key21": "2fw8LWTn9fDbZYN2PqdW81wVm36WePwWo23c68zy6XsC53NtU7K1ZDob3btWru5E9cKH7Lh6mw2ipBYNDaPz9MRd",
  "key22": "2LPBGjSvgkpoYbTEkKFd5Tkp8b7uW9NAexf25qcsHqSdAjumTspBv23DdyrMkNYWmWvBLGPUuNFUZa49Fsc5ecdJ",
  "key23": "Djd2qRW3R2fQLTeCn77bixwk8NRpnxxtzvFDqYbEtJCt4UbTi3La299HJK9WC6QtBBJUCqzjkSAp4K6Kv9EuAeS",
  "key24": "5pwa8bTz8oVAoSQed7Mot2DHYeUMxL6i3tH1AJBhiHtYgEf2zKytDtgtQtgjuDz4ePnjmvcpPiDtyk4HW3SRFvit",
  "key25": "5dgBQWzbMCEBHVB4EandY3qpJu1A62DFfZc2nzEVtMAfpsVnBTkwQuu4aJ5rTYjbbccSMiNTKxWdF6Uean2MkrRu",
  "key26": "5ixXtyxfcu9GCUA4kb6hYN23CW9BiXkQhysgT2oMvf2s6p4s8Sx1xkcrvHRkhpispCTv9B6EKyEs3VU9ZWsNdcuE",
  "key27": "4N6GQ8nq6ML5yT37VSWyasX1HgvSM5XmTuGQihAtL3RjCHzU39RTYzDeTuaoPyz58jmpgmX9GPQH15tgnbzBwWji",
  "key28": "SJnUNSLSkvUT827u4mkRdbDpPq8xqUKGxbDJDeM72go5V2r3h3txm8BZMjcRjWAj3VvZg8MJfnVo42WD3NXAaeM",
  "key29": "3SYAmDkVYtxAJnaphzeKLuqwSL9tCg91quo3C1EUQ47Vbqwo2pBrzvzrfZUgZrxp8Ek5LwXGHmMWGNVGkUBuaZEy"
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
