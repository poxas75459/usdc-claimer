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
    "5UdS1b9WBqMsQgUdRevHJdwdchfNv63AKsGRZkAZFFbHUUEb1VDi2uE9Wyaaz21uNWMitW4GSrhejw57PzCtvZUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fQgVNATxbDS1rW7AsGUDXbcX7uhUAPZBJZKhFkRzw8X3wqZ3yezv1mDgrHNgexup2rdCgGQ1xgaBMh8wjniXU8s",
  "key1": "s97wyaMfrAkc7HnDauwmVscfThEVXoY3ye56SrtZjd2t7RRtDuc6V36zAbAxvQinHo4Wa9wPHZfaozuaXsEkdkj",
  "key2": "2njrRqq6WGvYWDtG7hcEsjd61uSSBV3eLrMGWdCbeyHi6UhdPE6gjBe95M4NFeDGnAHGRe9JYkpz1GaxvPo6uoc1",
  "key3": "2ef7mCwjNBii5PYXSQ2zsc8KLPHtV64EKnNbxxxDCRigCmxm2pwYARurq61EajFmCDMc9ckECExeUWKQRJd4Uwt3",
  "key4": "5oj16XZFU1wGp6yL45Yuq1kobEWzusvLnxbJNjJzJZoP6cMcPue2noX7tgHhEHdPkYtP7SZnBHtpS3DRetoHbVaj",
  "key5": "2nMnLqKbNiCyB9ffBd4dAaoh2jFBUmeQAbeFUog3HhYJz5bJjbvccYRJwqBSTrMdJ1AA9j94FDaz9H7hN8CozjPR",
  "key6": "27WN2z8auqecDtEzAgUPtU1KQT6VXYn4DRuc7yqrEZeou3iRJPfhp1ZJsQT5AXM2QUbwM3dP4wj1fWoYwc3S7399",
  "key7": "4ApnCuqHEfCAQQeptyMLd9NKJcxkBCRsxPSrAFm4j478H7FzPFBBeqXNMevVDXCrUGn8NA5kwxqhqooU6brSPeGA",
  "key8": "5c15swpASHRwym2Yt4zE5WKsqiESBc6bUTsD9ux9uneHQDUiWiAsKrzd7M4TYXfSiJQ6KJGtTM8AEeERG6ZyY73v",
  "key9": "3tc9CJYVyN183t3jzSMVD7d9ThtspxZZ19cdFzVpxeZFhHTGmqvsZTkX3cDpTVPxhNjg6yUhuP3mL5QQL2RMTNGE",
  "key10": "614M1x94XjQB1YP2p665U2j7qVbKyZbXZBE1v3cWCSriH1h6EEiaryxthfjoP5U2rywcG6gBmnNJ37uT8eijdcP1",
  "key11": "37R3wxnuEm1gk7Z4ZaYpxnrxqwUs5Q7TKWNrGj6jqojLGBFbQGtvU4rPkUqo3fpvWss4ZWqhLzkLLkjSz9MKwxuF",
  "key12": "4eartqaKm5q8rVLr54c3uRTAegjQwNFaq2xYJMfucdTfSQZK2Y2ronFmWUnYyw4CYPqqGjuGBF1CWN2YAjmM9waX",
  "key13": "2qqJ7uGEenb22pCTchR1GZpaSdfD7YALYiGVn4B7ggzn31wnQyyVHHQycZeyEmBdTzRCWbVWQUWEP74pxoNsHDmf",
  "key14": "4dCYRzr7fTCmvi79D3J9BkFgCQ8SkitmzvY7iSNHixFqLxgt3miAEBS2C1J6nRGbp8M9bmKPMuRK88a3CuBZoLLa",
  "key15": "4pVyX8P6vfkkpdasKaDVxzsZ2yVKHDvXR51tBNN6oux9p6T59JyP8HcmNCR389fvRX5sSdmyQrAAeby1HveCVavv",
  "key16": "5pdopXiDeeJc4zVd1GaFa1ACRHtZWk9HF3ZeRTGJRTn3A1eB9kWf5ef7qKAUyTeWzKuHAo8NuHwpu8XobWoatouu",
  "key17": "4HdjEk5ATGwHHfwL8XTQXs99CH4Z3YtQKWVxSgSsxZw2JJgx24q66Nz4pAgsb1HEA7ajQDo8Vd2Bn9hyZEsZaSCa",
  "key18": "2vKcSU4KK2nbqMDE4erFQoYRv59Yr17zZZaE4qPwNQ2JjxZQSxRjBggXDoitQtf17wLRsph6p1vhcmtpjcmiZkxU",
  "key19": "P9hDLpzfJd9gR8nThGZiB8eLAicipsZuhAth2F1xRkSHSBQwtgeWFD2zTCEqHRfoFMH7xfj4Q9kJ6bq4tLu8Apa",
  "key20": "27XCXnfzq36SpANDpyo1CbkyVCpz42KMYCemEJTrwxjPakgLJAgC13n988naNW42NR7RmDNnuYddEbN6mB42D2B6",
  "key21": "2bnufF1qa3eqqN3z2S1PfJfm8WyyWstnawPLWxLe6hKsWMpxoCsPbNp7VBCB3hBdMe444cL8BHidm4gCMWeW51tC",
  "key22": "5VLnvV27bZYR72Ku65JeK1RwyuXXwsQV5ifz2C8YtYY24C3HfnGUEcWjyw6SBc2oo12pY79Kj3eSPxkWENuLPYRT",
  "key23": "4GECmvaqHtg7dzgbBW212VEjKbLUQWkEcFFcDW91EL2D1DnYegtRRxdMGjUDXtq5L5eLoak4fiLp8KHwW73qhakN",
  "key24": "4PcbtrKTtpd6RP2HjmV78WQpiMCEdZfN7gr2SYZZ7tRuDc6nRKSCWAJk2xyHjH6g3QPeqkGrY9cqT3Tevjbjfmop",
  "key25": "5JYevnJQFd9uJf427rWo3L9obFBghZq6drXscditjAi6kk3CHA2SX4sAdBmNutneMHEXEJtqR1zQ1SBCedH9Brz3",
  "key26": "4ki7GnvDCqqijaJtqsiYwBB2WyfdG4YDFrYwTWKkYkUtnJLygv7b4qhJky6GT6fcbeFsEpxCrGTkgMECuzUTK2zJ",
  "key27": "2yxAH7bYR9UvhBQe1TDMoEVyRh5xcZLJ1o89F6aiDkvMwUh8rKwJGzRGgCNoJzWfYFPi3AMy9HHpeJ2cNTkZzKLR",
  "key28": "2HMGQcEHYTGCA2qLYDeujKco7DZbLdGzBequX2NNGyLFyFU3PxbuJTyiT4C6fSdVVkidRfUNXmgt96vpP1iGBHos",
  "key29": "5jsnG3xZeLESFe2W5ocurPKqHNPDEiZo13z56N46ByUPEYZmChwSoAFaSqqWquvKAcRwbvHozUsLEw2MGHpRFmYC",
  "key30": "2vGKoY7fsLUykxjDPxqaneydK3m9zs765mWPUMRc9gh1vV9uv25sXQE1oWrkqCkGDsbrYTTYDDEwYumaiSPXST2w"
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
