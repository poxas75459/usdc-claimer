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
    "YYPHdZLjNz748X4Z7mfEFV1iiV2Gz49X6CT2245gU8558J4tcw1MKDtKuuYFxrnw227axnPgEMqoGZZjysPSPEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PJT9Qr9xhKis5BcroVdzsZzUuuUs3LPG8Sr7KZhesUxhzr9vZqe2sxitjUhxFed7p65wK8u1jF7A4zUchC1YbSY",
  "key1": "2JDmHaZ9cU4Yh5XUp5A1DUXayZxfyrmSi3H9cw1vvgYC8bwkEvWvxZWHv4f2pVZimEULfGi9vjgufEUSCwpgZ2wf",
  "key2": "4qVxqWQpLFgRqvb6zFRm2dDB8YavAb8tBKrxcb52PYFAsWY2tqQijuovGT5XAHv8tRvyoQ7EpTkwc4WPnoJBmbAP",
  "key3": "2hMD5v7mysc6fXsk4xVAkyjebbMVw2mQHiSFw3iX54bTpVTUQKVhEMTNscsxazxeuNKWHSSGKdF8XbUUbbAhNFgL",
  "key4": "3LPCAKAg46dYbkUFqVRHaCWyEduT6qVYC4fB8oupfzqrs47m32s1hG5mNZFW3m3BdMqmLU2zEBGqbwhboBPew6Z4",
  "key5": "5zKGKSoQFHSUr1Zw1P5VSYv1UN5yUdQn15e9fnVCE1fPNM9Tod1CS3bLpreyRKm1bqkjLXmxtxQo4tVRCTTwT5pq",
  "key6": "8DnFPRvQdfjAkmCLvzAr2eu1yvxV2e7i7MJWu5HFcyr5M9QekWncG9gXLs356Td9J9wQuXFMLkiJ2gLbMdRKpJR",
  "key7": "2ojusTezVTnZjvrsdpqV4ykrLwXyo4h39qhiCr8Xev5s3QaHHkMuP2fJ11GV6i5zGtUiDyNLGjMxvgU36t6iLnQd",
  "key8": "5z78MmwXwCgxxnMLEWVsqswd7h32mJunEKcvWcHC9Jz3Dz8Vyfq7HBMFwiwqs6AAhUxpjK4W1j9bYyNDzfomVgxo",
  "key9": "5tGxPPazTV7fTcaRGFH6uDjSic8mvNmYRrupBwmvJoY4FkW2L7qvUsS6zuyGNi4DtEQgwPGmDbJUgDfBUhtV1Q7Y",
  "key10": "274JEocszQzzRRCbFfqqhyqfdnos2tXFiitNFp26fD3E9J86kFBphQ4SqHw6G9KAefoZvyjSGbA7NRKCdVMWruhm",
  "key11": "4JKdFHvdjJ5wzKap63NYhfHzi9xPmrP13Tp6kgU97LX4BYCS8B51CBF3rM1bQe72F42VAV4XanLVi97qXtm6BRLo",
  "key12": "5y5PW1LCDs9v8dzSSgth8JTp89WnGFoUpPywZHVLhT7ej381YyTC3C4FhcUnJ7HtPJfkzkycW6E6n3dB4kNnFcrA",
  "key13": "rFYhAYnyCJuGBkkYTK7tpF3KKxzby6v7u4edDike9eGPtGHuD4QkqUL9HGZt1iSnHbjWxHzCjthWMGct77VNKcx",
  "key14": "5voZecSn9tK6UXA1bogKNADsCKevidWvFA4y82wqgggpN5uPhKy9dpmEZJbBqHPdcJhgSAGi9PSDa6qeSbjXBdLf",
  "key15": "5pvJBB5NazMRhQeckqJUNPk9J4EjckjYPw165DwgAJdjKJfjRWaYV6HmCDy1obkXj6Pa7fkoT7ZtXTowgEK794Bc",
  "key16": "3KazrmDHfzqGRukvRYqpS1B9aV3JWnVawh1SQCmodg6Mf8zjz8ynh4eZcjHYXtBQNS2wQcHXxiG5vKcsbt9oDmUU",
  "key17": "3ZgMKCmUsCeKrEBnY6Vcbhq4hxe1ba2mwUR5SXhKa6zwkUyVuXYhtVsmJuU8sxi7kvX7CkNqxxmKhzDm7rRzQi5J",
  "key18": "iNxTDcPb9yVcJoqVvgQarRxuDSNwjcyzNLqcRJp9bEi7RyNUPvfTfXhJRkVVWtwk9VngH5etTy2qQUmYBmZ9cbz",
  "key19": "25LnJ2TnHzBPzzYxwq63VC7XkxtEuVncAB4rjtNvGNSP9pt7GJDPDhfvynL2mKFzNJGv5kWN13EK1H6FziFKP7yC",
  "key20": "42NYCmmnkUfPBKVkLmmHR7DrFQ23AFz7j9NS84vaHTHgGhtai3nWDeGKqpiPU5HwEGbwiMrC6neh5H3HgTQhzN5R",
  "key21": "2Qvg8mYaEQ8jJA1zGcfPY9uJxAJ6JwGg2u7LxKHmhwEfwMKbutBHuxA4yHnfxfu429325mCLEbMKxotAveo3YSo8",
  "key22": "5CKXXBhJSXnTznWngEvXmZLYg3W7Z1hFt53MXRaPLmer3Fj561FRp2R3ChEwfaQtAh94yfY224nSxXhJTyk66X7J",
  "key23": "2xejYaoMehoYt9nm3pGTmRJ34R9HwsTmF4XufAnGhtPbvFddadHi9zLoUPkEEbELRihYdswTsShKcZeWw2uG2au",
  "key24": "4ZDZqBw72LELF6EgjqvUNcEXSAupaphtuUHezZVsKDXk7BMQPibfPxoxXRgiXYGc6AnSG7kEvSRJJq1HFW8dw21u",
  "key25": "4syAP9KxGARoaksCAyphivMmhZuNrb1Vt2S7V1PW3mQ5fMDpTLkn5bJXAMRgunCquXrRGy2vxespqfqvXkZHK9Wb",
  "key26": "5L6SnECxkKW2CNsakkTt9JYnxYQs5sUndTXEeSCvV1EFRrqnDdLoJBDSV6cv6udzrv9bzkLJT8F3LVUW4DV6UpbQ",
  "key27": "5csWaWkU26864LmoFJQsoF8GbKcfR9PBPsm4yre8njpjhZKtGRMLtEX1gGu1pJin9wtHW5ooNnewoSduk7sbE4dh",
  "key28": "2pD4V6rvS2c4qwSE2oLfVr22HumAFH5o7vgVYPa4eg2pUd9NZB97P2pkEwQPu9zr1FwQsB1UMAa5HtmDFzzxmswd",
  "key29": "36RZvxkztSznxzRMhoPW5TP3UsAcu2FTWtsoBnoCu73Due1ehe9c4PucWvC5r1kEmNTxr7hVmSg53iEGm6fjQjsq",
  "key30": "4BqtHvtZfaizjyYZdRiVeyB9U9i3C1iyfu7LCUDBBcEbYzXf11cCN7nPMaW3buew6x7A4qdLqErxGhSqoeXQT58N",
  "key31": "4ti7ZFU9Q2s4HJs1oXBHdVkgVETmeXmEAsKKHVxndCh5gfFMuUBHDjHVutcFnoZcx2Q3ihcYAPAV2QZZZ5Mr7Bub",
  "key32": "3sFsoKa6HVTyVj4k2yGPWE1akohb9uUzrSDV3DjAwYKBnM9vgAsfXMLF4b4k9obJ63jeC3wWkE5SneeD2aZ3GfPj"
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
