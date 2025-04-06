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
    "scUw6HgznJ2VjqScVhZ2aUS5KQg3tLXQtAp1aHtspxgz6ZkLuEs14TYBdnwErkjH59tDeNypD5i1Suj42Tp3Q54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QzxFbcWkfo9CyGDRCdYZHZmDRDGGWX59vNQ9YyvKtq8K3iKuDQv4NESwcZY7yhbrNG7gyWMNeyist4ad7UGuK8w",
  "key1": "CfMejh4vxokN9QKukPa8ewyvFfHoQe4RSnkz1DKRKFL8LorJxqBvSHrXyrTXMJCo7d1BqU9QvvZaya4EWaTSKaX",
  "key2": "2oqJ9PUpFpbzVErfYAcr5UBnZvZTMJ7taCyJnterLKFzTYCorrs32vDpjBvJx9EpDu1Ybnq7a7dNNdSm78C6isBv",
  "key3": "3tBcQPoRPui49L61oExF1z4HpGHkrbbtuXkmJ4hEXnfrigr5tug3kpvRmu6caNE6T3fkByzR5wGPEjhmm7742CdQ",
  "key4": "3TxUBVgTLZ1AeMSbwZGMfoVEB5gmjqEC6sJzcJ84dBFzCQViadg7VPJHSNvKwipSfaCod1umiKeGzDA8q85kTNQn",
  "key5": "m5hrqb5fuMXDVftkVfATsb1WXzbsVTxULkxewwz6tJSps5zZsnXdMwB28uYV3pJsqXxZ4FUaqkscFphVacnFK8G",
  "key6": "2PC24haq8upPEdiPSsRy9BJAYGBtZoG3JSf7nQHGQftikeSgFwsyRAxsVrZUJa2wx3BYnndjAh3ZWWEFdKydSaDh",
  "key7": "ssZPvA9LasbpSVT9TGBwaErW9m45HSMNLbwwMqjzm1m3xK7sDNSjDWuaEcXSJrS4ZiHgN9SjX1wbgQFS5aTCKXK",
  "key8": "3toVEKZvTuLXrPXwwr82xVffvdPu9vbXq9LM5ySVRr6spG5cc8RtuUFpuhAf8rRmBRrB63XgZ3LVnM983oBmQxfh",
  "key9": "5bEjFiZCBrfAY1q3oeCYYQjnYxgnwM8jJaQjWiQvTtb5zugdxhpAv16q5N4t8LrkrqvMdia66AxLSDEE3XzFfxgK",
  "key10": "7AeququmwwfBqzp2ajXQioLdmhsUY6zRkSosau6kzBuhUq812TG1y2wHxTkRk27XzqV1rQM2QCSBhUfUxeJWfQg",
  "key11": "3e8vsY2zHPLR3h8d5n7qcdWUypYKRf3bnfVzxnn9JPJS4SbnpdJXPki1QF3go31BHzti2JqnViz5tD7QdWPt6Tid",
  "key12": "RvkStY6ttAYtkgqNM4bPAeLgJD5GWkiY6mrdrXFjMe7ue29sL27VcNdgqtoxNBwBLgYxCWthzNezQLeTUhTNUNF",
  "key13": "WGREoaHEzoPWCKWVoN538U9WMp2CinyXwgJaL55JLR74QRAeEuxa1nDAJh29Je1N2vpjjkbnUTrMPnkdwKfmJmd",
  "key14": "2gmsmuBJkxgkqgeojB7uoUZaFh4mgQFCQnpJwGLnyHoQzFz4VhKnQGNzQeeP74w6WPx3U1VRpKfEfVwBq1Z74Wmd",
  "key15": "5AcwpDmVfk5Rh6kGzN2kwU7WwQ9EKae3JErodQ6PPUSPSzgLVXt1LH3WZtHc8HWAAuXU3WCLBCzFSzBZSFSmU7A3",
  "key16": "2QXFyq8epNqnfWyWYAFjKGW6sDmnrYk6kXpVu2ajDQf7DGMmLU3PJmFbLwkQq3EpdGz11oDUGKxXPBUjuaCaky6J",
  "key17": "5mYCsHS5BKfikY1V2XGVN4JaUg31KWcqYGWZqH4MpcwrT2b45aVmML4bfvUfzo7m4US2SmTHX4UiEqPTvmD2HjXE",
  "key18": "2tK8tZoLMzkz5Yik8hckaY9XWBpUGKkeSCBbYnKE7RJ6YrXQfVmSXpisdNykiCofYnhr7sfo5UGU5JbsxMxVhQUS",
  "key19": "58hG6psLLaWH6tubf8fBoTHymBmnTXPXhDHy1MhtMunMBXfHyqfFFTmQP42jsBz9sUdmN6eVscQE7MoZTXdGwm32",
  "key20": "5f42TEs2hy8Hf7svVHgqGxJaU14Taem8acqN34fUAQqXTSTi9PxFHYz4tSGHxMpMJwx7nN594dNGixZJ4UjkraYo",
  "key21": "4PA4KtWMdfBN6G9dAt6zVakdZimmGXHasLpmmoYGEi6snubUTNP8d2pdduKLvgM5MimNcLGRek95x1E3fjqSfFhB",
  "key22": "5AcMXiLx3XxCG59ju5qEee5argCQELx2Mbx9FVoo9TMWhZJ2vYp4BfVF3i2taG6iZpWsN9yS1WigKN1sTETLBkYj",
  "key23": "2bdsDdW2RDHPv9NAsarAf9fa35e7vq5QJNGApZ87XCtvXuTL6zfidqZnFWGzUVjaCBfCCwWZLYzRRYMaGPtJD7CW",
  "key24": "3bAuiEnj3NbUwU1STLXTgESnEJJpkDznqnbZsLwQDd2xgFqwaSej5DveWSnvkCPbmpfbNW8XWB8XgYWuvzsykx5i",
  "key25": "5yw5KyvvpHs7uFQtj3TdyMPYXViZzmLTrHBFvvgdJr5WZyeYuhdZUBFR8nToHUyqZ4SGmPsHu5TeKkvSnHDg7s9N",
  "key26": "4vevBt6jva5Ze3LHHvmRSzejyqhDq4DNH3YEySAuyDPtqZaxnbMzbDML9ct6FqKxYAXhegfuo46jCRF3SpV1C6aH",
  "key27": "2A8RknpSrg8Xn3Aa7xiptnRxM5gXHQasuxwAoc1HtrwfVsAA2L41bbhJeoEQMM9k1L8tmcbQFUtNjrTC2r5TG9jL",
  "key28": "44b869DSnZXUtJgUu1WrNCk9Zte2rU7eQLXjqv54KBUyQ6g9YhbDXjn91gQvwgiFtLKDeYd3cRtPB4G9RWkpYSot",
  "key29": "HaBRvyCFN3Kq7tz9fS7JXT43HeHKLD5kwmAyt9kcZ1xzbfXRvtfrkdsVLAqBPcgdthkukyEXbRs8c9wJM8xFVd8",
  "key30": "4z1rpYVxeAJCUXBjfQquXUU95GXRsLVpmn4N9BFXz4EtCbzVLyxfFyDnkUZwQuPrANq9g347pPJy7QsxFy4xqAFE",
  "key31": "4D3KB9MkXf48XU7b9cSTcFHH7kHj4ns1p9e9MpBCX8kZJCoJxbBaGvyPEVwmVQ1azQCCi46rZ81q8fJb42WpDhoP",
  "key32": "fHSEaeTmfvQ2hKCXa9nGpnjJ3C2PuCo1SoxoL35EnPuU7fZcAbSChNPepxaU3T2DGs4RL2duWJpQ2osWth4EKHK",
  "key33": "4Td5ZixHibPpZsA86qjtjHJ1M3ZLZZkdUDv36RG2HTTUHfDidDWaF6tQvqwgxCwnEfrr3RowXHzhwrqvkUyVEuN6",
  "key34": "HUfLMw72GjuHkHd1ksb9dT86AkjDAsa8xHejWB7Dccc2yk9BnY2oxUQcaLHFzd8qtngpymMeoesKRtZYwhAnvah",
  "key35": "32B2x745LYw7chv48D3n6WKTRYaUTH7cC7bqhvUoTogNyNTzhb1TVmqfZCYaxmLddCTViQMuLMX2GVeJWarfnQXX",
  "key36": "5o22VQzzTg39QfAF98ZcMWCtxHuPPEsTyAhyNZboCvvepwBbKLbThSUJsXrw7MWLFyGVgEWdpkSL8w7Ncxi4Zsk2",
  "key37": "rukTNnaeZJBK7YgerQ3YqBTZcRtQ86tnHh4wW6QjPyKrvJJ9d9VoHAtcDTKWF99Lofuj8Aiob1Uq6AeZFXCzW5D",
  "key38": "2rrnT537qLJUwvsmJznMfm8VfdfxV2S27jVmaEZN6Cg9MpK2kVT97KbztvTKsE8qiGPjproBFeHE36EPGpm9MJmW",
  "key39": "5wBoLsqtdpdgs5QjE3WHNLzFyELQz1SDxz5yxo2DV66gr7GRJR5nYNQN7GhWeaWM9VwDKj8QEYWZ6E7h4XhoJyPS",
  "key40": "3otbCMSXiTKrQ2ANaHHZ31hwGbkc9ERFz5Wdr7tRbhjFuRTbkJjNAj9Pw1r17mPdnT8mXkVVZnvG8m8S1k1Qpr2T",
  "key41": "2PebbX4Rojs4x5QsmYgLFkWNwoyb5zVGFEkeqNzKDTzXwUiwZjiHbGJD8PrS7q2yiBSJNrDyLGK2L13xTiBk9wE8",
  "key42": "33kXGDLPRkLaBERGauTT2orrK7MZxY8vcRSgtA1kzQn3CPuwoFc5T936UZMYLcUkAXwZWoGj47CXo5cELZnXTbYt",
  "key43": "5Cj9MgbNZLbeG4CRUdvpW8jRx1DTdWb8pPJj8BiQSr6o2hqdnUjuA973ZRDHgHf5cr3eeuufHCEGx4FwVxuJJNTP",
  "key44": "357nG6oVMPxnP5nWRWQwpw3EGjyjm2RMLj7GBJx3rws9Xpih5tCKQ31ir3ZaRdWTkhZsP6ecFrzV8ThPGksh2Ci4"
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
