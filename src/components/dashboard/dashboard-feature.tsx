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
    "kE4JfxupRyCut2jQWoF9eLfKcizMSdSDGdFhy16TPnR2pR9migmP3LjncmxdHxMrLis7szp36TTD564gTRAua41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v5rUAGLbj6bRwjaHt68kBALG7g4qQrGhCpBkduPPhfvroKgRLKUE4mnPTwka2SbQ7SaS5AebibP8PgNmavGq3TH",
  "key1": "5MFmbM8rRZpvcdhE1hbtTwrkSDx5EFAjxqrPpB1eHierEQoXktUTZYWJ31mfiURRoMUMQhzpkDx6ZyHooWVuvUBv",
  "key2": "5ggJ6EciUSm1npXLPcjp24ch7U5zUqdmuBDGigfjixqwQ6dj2RRVSMiQvDu8aveKhfrfPv5dmJaYnyG7hGJWFaM4",
  "key3": "5T4ZT9UcPeWuGrx2qghd68P7LR4PoWXgZNYvzWhvchhQ1fnCy6CqoMcEBx7yeVjgJTivo5g893nkT1maZENtk7JT",
  "key4": "2dsiY4eougoGAJfVRxna9JAfVB281rhSX4mmUxBcV4NF6Jf9B3tLMg9Nn5qQEmM3LA51FhhvD1ZYYb1oGWdBuB1X",
  "key5": "BDx5Vwr1uaKfaUiCARLheRss5yaTUrvPC6XtCSMQXyiTrUGzq1u4xQGSZkzceVhyA56yQVE1pQ5gADNFFS4LqsB",
  "key6": "3nc8z6wwgy6jFDNbeanG7iTGhrdYEt7pAYq1KMYDSGpVfaJn3Ch63x78m2LC3aptTg4xTrHNWwDtDQMT1YrH6nRt",
  "key7": "5ch8JXb53Uric7KYuYtbXsYQJUiEVB1hTgVh5XRtns9W4bS8Qc32GxMG9z6CWeKAGxFXJeASeygTma1f6ktUQM37",
  "key8": "54J7cGuHCzcKe5UeTNRRLsik5TTfrievvRLLZ4kgw6riPpddA6ANb7EmSgScMzawoco9gQnTecquvacpnHvA4KYB",
  "key9": "3qWjrGs75TgPg8it3QJYGLYBF9d2vCnaD5rCjSisaLn4m8dn7sRVoqYjeDjuKgUsmQC3LiLnvjhhJoi9Y6B2jNCE",
  "key10": "5v3TRvRvcLQF5jGGL5K5PUxcbmPUnfXucBxUgmLQ8cqZeszjPgxBAPg2R93fLnMkYy3kf1vb5Zet15BiABWkrzfP",
  "key11": "grSUXR4Udc91tcjVJ22V8SEkb2yh6E3sJ2ECtqxt73GaKpau7xefBJjrbXNAU5vjgMA6JQRTXMu3rDHqVhE61z8",
  "key12": "5vrDiHP2oX2u6nVNxzpPUv4wHBAm9rJ5MQSATgNeLiKN54ycDydnnkAih8PZA4D1RGJ2ai2EhdkXuMHpjJHyiuV6",
  "key13": "48QinNu3rbPsZ7NuqgJxEvn1HR4Fm7ThV4yHRHkGHqrNCYZLkuUbt9e715HxrEfj25rSDDqMtComEZp9SQ5x4mim",
  "key14": "2DUVbpXioBHYrJWXJ53eJ247rvuGJ9VGiGSJVA3x7cgoU8pLmaWaZJQAbzVjbDRkTpzvp81nVGiGciGjSuTgTc4C",
  "key15": "4s69tmBjrCD4VnEy7yVt4QiJDrUWDMEZGh36tt25Lgo2ynga9ZEskRAAsL5WdNuUdR5j2WicUMBysLMcPAqhPAug",
  "key16": "35EKMjbzgnmwXgC2i7EGErmwsNP7fNn2DEaiUToagksqLPmhGphSBq32Kqetq4pgvtuDg2GdeEoJbMRqwoPC4La9",
  "key17": "44UUeZ7FuT3tVTydhKcJ1MTYYRPyTc2esaoapGtgxxpieUb6xVBKQeXxJ5ARRRVr7YmeDmLp15SHpFkQj2K3RSeM",
  "key18": "3p1124tqRx9edwFHva1UqPJEP8ziYMbRfLYPX1aNvrYyJG3C4yoa6adfahVg4hCMsXWfwD7urg9z8D3vTkeJhpaG",
  "key19": "2FVZKAHQ2cH5B4yFsUgFaoEPboERNFeW2BW1ytBJ6YbaV73U5gfu1cYw59EVLjM1fPtdXr1jNZdw8tURZq798K6v",
  "key20": "5ZRbov9Z3dS8Q5M9ivQ7py9avP6nAAwjmaD6hi3z81av1tQoakgUfnZ15PPLusBEkXWFMgLf9MRWfev6hcmr4VY4",
  "key21": "3TBujX8YgT1qU281vXU5nvNkFoE2FYVQGyioa6T7KvWFn9ZXVJfQQUJx1rGmUehUvcryEyWkNrb6ksjH9c7MqVnK",
  "key22": "3S9LeLafdBnxwDoiL7FKNLm6gskHhDWruqvh69CaDn12SYvt7oTosuumueo38ZkSVfMJaEtZNup8M4q7GzJu5NQQ",
  "key23": "2Gx4i9Lbbd6Qmwxex54H99L44gmZa8GJ2Lov4NP4C76c3C7n9N8NHtF3VAD7qhsPdyyCbd624SCso14uh4JyUjMX",
  "key24": "3TUT8CEGkZGKFEXGxxCaFikXnJrqFBx2V5KZKjrP7N3uPNW1hMyBwJhjwNPeMPu43VXi2rkF15LEND3iSC6CWEHo",
  "key25": "3Sw7BBik8ZTq7NCgostTtfBoVn2oTeypT2SjbkoRNMXRZTCswHiHowqpQfpAuAYmDzraCzmXD3theqM8hhaBq4XK",
  "key26": "XJC6VDzEYiCuYAnZb3uCPYg9BmEsPe46pj6qwUp43fp3xqnAX57DxHisFuv8F8pVTMq7G2ENV1K8zF9KmHuiv2R",
  "key27": "mp93F7BK4fY7Wonj5uuxbvk7JH4RZoY1vL242BWCDBEw1bE3MJhv614AYXtZLTBzVMFqW2DQz9Tux9HgSzUwDoh",
  "key28": "5UgaQ8BL6husSNiSetNcTaX5aaFRpKsTp7FL4CNdcufmNNE2b4dCxH7FfuoCmdQSDpSjBtZdHG4uciv9nYFMVbLe",
  "key29": "28pLAy94Pd3hoJqFKvP799GA4Yx9hAav78mCkaPkAy2pv4BBr9DugsjKzNfcqtYJZkAQFZaEmtfEzVr4iddoHkHK",
  "key30": "4s2ATmcG5oFQzEfEuj4o4EnAWAK3nLBFCHT43ztagtQxadAQp5w9S6jCZbKG6kREYgnnEzBjehC3iuQK3ryrftk",
  "key31": "5oZwgWZaCqVeBVpD2f31XYnRCm4Jh3xq6fodittZAFxZaGChGCZZHB5V1SpM9yACUabMAtmKaVPmSyP11z41v9x5",
  "key32": "E7jFDQM5MtSU6wvDvEbd3fqjX4K78437fndM74k9mq8yRuv2us6hQKxRiNK4oXRmPUFLxfcmMRYZoiMmGNVApNo",
  "key33": "4jbSfw1MgC3T6uMgdu1FgYhtyiQ8UcfNXbgg71XXkYNDuAyActmpVY6P7Y2yKiNPqUVtMGy5Dbna286tM4bHoJaA",
  "key34": "63ss4iaV3sxQR5xb6PhAXooZS72REZLDDziVvnxtgC24mTLHGMqnTQgaGwF3uxdGxc4iAzaWtt4yfufaBVBTXV19",
  "key35": "2VJuM7eqgR2S8Nc4La3FbPWbgzTt4zr9s1ARLPLGEJnfj4VQshEuGSPTRwxdFXqNTCL6B5HLicRVavnjSHpCDe7W"
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
