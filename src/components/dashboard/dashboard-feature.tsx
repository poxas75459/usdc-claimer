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
    "aw5q1DQgabtF8hPHTMqYNQsbsqYjSCVjmUrkkWkv7ABn61XRi1Waqcz62nwRLc1HQB2HTDFfnouLFkg4bLLD8Jn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tqYXbh4nzbzWMqAV3yH4ja4kAWLuzcZuGyXQPG6icenuWHBb9nhDWbRdFscqW2kvp4Fkd2Est4SvEDXSwfTxo8K",
  "key1": "5ujyG7ddiN9JWdMnorxUVcP6FDKUBXuk4TzUNMG5xHxjawWWGRcwLJq9xiSxEmqQBnXMWYHFDMXmuaRVfKc8fWiY",
  "key2": "56L3bDVdm7wbQtT4GSundWMjgJpS3q8Vs6BGX3DMhhGpaWj4gNW4qUhG5tzBezoNjYVHkPgTfjG1GfwC2Rpyd8VC",
  "key3": "5ybRHZJ4QbScg74eQ5KFwbSgev7uEKi1PuHay8Qd6qbo4yFY6aMqRaxutS7kpZ64ZXuAxHV5HXeRz3rWcVpupwyu",
  "key4": "5EMGza3kPuKCCXH9jzacasjzz2nZhe97msVhRZSNQCBPAL5nAG2zeKQfxkMf2Kb5wpGpvdtWLEFsA1kFoZnZqHY3",
  "key5": "5JceuwkvA3MTDTQaWaaw2GKZjjvoTrqu7uUzECDhGpGQADRKyELdZSgthn8rrxLpzLMy8AzWskdhdBGfBUhdw6Fo",
  "key6": "XyV9UDPB3XuQxYWT5AVoSroU7f6r7y2Ht8p7FAR5H6mtrFKEHMZS44vd7tmKpvDWM369oqMZSVJUbH3ff4nWQEk",
  "key7": "3a3ctJfdFUdZGAEQt38HekUiQWxJvy81thP1AfsNBuiE1CmuGP1qVvb9mJJwCDy1jp7wXDZh3Kqep9MBmkabFoyE",
  "key8": "65s3ychJQTuA41igwRcy3EbAgmwVprANJdQgyiWGCdW2RC3nvB6gjWW75Z8H5ttWtr9BC65Vqj4VtJfMT9udeZRL",
  "key9": "5Yttdk2mBBJdsP7vHLG8orAvPJ7UD7ahNcQvuMePomzixCo2RJEWu7YruLBPuZiBpk5WtVi9trGWfH666RfZTuaM",
  "key10": "3uuttpyyPq8iwFqyDCBE6YQhoqNtU37xHsaTWPmPSpMwrA2bFwNPeBUtftmQmr3bCBBYRnkcWGLknrQzKXPR7xBK",
  "key11": "qFnxqUbNL8zqURBn1MrMHmFYGUu76Xnv1nfMNEqDeMfxx6aDZKwgAPmXfbmuMu2sZg6jsu48rT7XZi9ZLzNZo2q",
  "key12": "4Wd7Homt4f8x4YSqT21xMQXjYVXgZ6WsaGqtmwnAbjUXnyZtnZFXofvycZjmiHbg4nTXKxzqjsYJB22RKr8xz48J",
  "key13": "5QRJcyxLPdzYUbxeBpyDvBQHo685fEbopmSPjnsxwhGMLaihMcsPm8MwVazfcp6kyasaxxW6p72WbEBAt6ArLxJQ",
  "key14": "3Wj2swH4fvLvV5EX32BxRwbrvi4C2oACWyKKDvwSZozoidhc4TF7icyHEtdfZvfQTXw4C1dxVDyxX59y829a861J",
  "key15": "5N3WFC4vCoMkrKYH8e9cNg3pTP29MYSFP2qca6hxhptdzniVrCP4Y83rt67ioA4BpfSfjTtuq7LG28eb75euSxhK",
  "key16": "PPRpePF9ULJTTrKN65iHS2T2WLPeuf69i1XVGSGVaEoK36vaBYmBXdBwBmCxbHWMG74zYkUaLCH2Rg5D7mjkAvu",
  "key17": "4j2YBF1PqX6qFqHo5m5E7LxvDVRjXz7jVxbAHPXR1U9sthaTB4mTFT28hUgCivYxYZS2eSpoP76zBFGTn8dKLv3M",
  "key18": "53oMXfcCBrEtTaPtMbmrPbDZ9PhKgJpHmNpBRoyLFpqK9hTsLy5tCtje7XxBhYtf1CgYEsJ6ia8EyT6Q5uznRgn6",
  "key19": "4sembruQ7xQi2AyVgmL2Mn384VkJYYpLWzVherSkCiPQTyVNRF9T2fuocCHQ8iPFA6dUTUgKq4RjMVJ4fXZWBFu1",
  "key20": "5dBhbQc4Z9Sk6PDHDf1va73YU2HFjB5CA5n9i9HG9qMouSka6zhyxCZ4cLWa7A5Y7V3XrqRm323LxK1tTpfGSPnT",
  "key21": "4WTAQueur3xN5YqLZaQ61oRNCLjGDNBM4MSyrAgUpjpBcByw4avqk45FNbVcfkW6uhf3A3f67YCXrkeFXcZ5PFYQ",
  "key22": "3PdrJ2fCNK1NPCa4Q2Wm9eBtjSjPBTVJa3mKHCCUAqgxgLAXWwq7PREe3hokKaZNNo5ohEgvDnD1DkBezYJQwY8e",
  "key23": "29xYFqg1fahFyKNPuVspjWwPXrtMvbrCR7Er21gKwNcmfcbzreLkWLQ96W3m8A9p8h6A8QaFHfy9kiLY1fxEDBLz",
  "key24": "4CsUv78dXgTLQFPid2bWn31qWyqUVoT9NZ1SxrqQLrmEnFrv7sdnpYNkT5dSHD2ZeEo36vRQUTD8cahYnrW7KDBe",
  "key25": "3NFJAFPgneMDAULWG6GMbPPBdTHVpjQPZudhogtuj281j4PxVnMWaukEbgRAGpok1KwdiP1egpeXTTwdk9UkT5H9",
  "key26": "5G4uMQaRGiNcbftpyzVcP3FTbqpWvYDXAGk2VBph7oT4fqP3WjDYKxsXicVZBgzuDVm5ktwSj3qHNHoePSQuq6Ys",
  "key27": "34SwpMEANBz7RSEeQjzsACWHTkdvK9pHn5FGq9E3vv6Ji6jKaGPMhkJZi27THpMTH2fFQwdQ5zDDdmFMsq9SCveW"
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
