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
    "3oC692HNR1vETrt257mNDMpxpgs1PxCgy8wHcWRYfveweNWrUwW8aCkcne4TsixuVNJk1yxwVZL6ykkyETp3g8Qw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5edYfksqQmDYucYvRvPTraL5qgHhCY5hQiNRnC86oVgzYKRm7C2wE6J4YHfvxQsfVQAfGtkES2VYQhjZsfCX9rEo",
  "key1": "5XFCfBy3qawqRZND8YY9Z9WDyLnQiLVCUdJN3JvUzY6x6ZTufkc97PEsTtGwWRxaJVPQStGRa4gwSjy4MHA88NbN",
  "key2": "vZVgdgLd7corBTe668puKKSS88CV13E2i5dzxW9wjvDdk3CuxGdvVZcboP7V5syWgFqAMkY3UbfZNrZQK3So4jz",
  "key3": "3fnpzGV7LEwx7iV8qnasDoVXyd3qpFp857YBFj3w7xNKJ7MT86zuf6ijvjYYg7r94P2V8zByRJJcUoMFiDak3kK4",
  "key4": "5nuZLepprsKQpENbV9aC3m7bWnpeucJ9uzSnQzSWHysTeftuXoxmeGmduL5wKiZJBmxuGRMYUr2HFEKCv6ue8mkA",
  "key5": "KNnJ2UB3TjYp1GjoVUyW1UCRjMTHBnBzPNXJ1Jty6x7dTqy4yWqdosn5R7LLBuEPAjAPDx61Qqwe4afrpuKw3BJ",
  "key6": "5y4XH2juvEVsAvepcq9MVYaopWc5c8Jdex2ykZXHegi1AWNBY7LF8bgAdufhSED3G8vrfzGtASxoqa4eXoaK12rL",
  "key7": "4poq9JaBkE3ZBcrCWGFCdNgvypbkh5yQud8oP3ua3YPNjwC4jMb4qbVkfdoy3hrTQtL8iJaEqg1EfzVQ1QCuNBcJ",
  "key8": "3132YTWmnDMfQzBmVRzAd3VZvKFXxrtGkH1PoHKbYgo8vpanq2TQjf3jVQS8M7kC553gGkht96egiyUa34GeYGV1",
  "key9": "2Mq86c1mdZ7iQDx5wzVsTp1nVtkEwi9wBUeT3y8sttgsWEGxfbwNg9U5ePiB2gXY67Zq2gebtxGAQvZ9QWzjRKuf",
  "key10": "mUUddXq5X3vsYdUaeg4s3YyV3zRbDzqy2WSbVQwbNhVkxoJiVjriifmu6s17EuPM5dHGUKqhzCgVL1n4C7ZSxkZ",
  "key11": "2B5UyggeZkuAXC3aRn4t6hQq9eWj1wxQKXn1FaGLYEdimg44j3oGcpCpyXUje9UMYWZhdQA46HQwSguXXfiii6jf",
  "key12": "39zonD5KBy2XskM5jBDGRxpt66DcRnsoKWkgmfaVw6Fj8vo5mKaWvaMBYQ6dXDJ1Aodm3dfdtGJepXiVwsLpWqd4",
  "key13": "4neQ3w2cni9wyu6bzP58Uu8jBP9XpfKHMURLAGSsBXC91BT3MhvZvpiBd7wQogDRuAkkcwdjYG9UmJRTFc55H3yG",
  "key14": "2huHgDTU3c6MN3KA4e37ozQdTJnnwRApjJYp8F2AUBr1U8VCNB8HvXPGymVvr3twvtWZAzwFAYgDUiR2UP73PN1d",
  "key15": "5tigZHi3dCS8SQdrKEA3wR5dQk9Uhm6fi4wckmyc2mgx7w9BbmrFunw8zvERymcrK9FcGkRYPaeR3C2qfT15SqZn",
  "key16": "5m6kuHgqr2Vsg1vYPwv5jtCtXPUsgKP2Txx3xW6gxoGo8e2QQ5WC1EsdC5nXiDL9WH64MhrYrCGXSzPEW51J7qja",
  "key17": "Yr8x342bvomMibuwkWNRoDSGjRrsBWPmbGabDhCj4Bv7Cq3KvjQv1RR83iHxfN7Mc5UmgG1ctVZLJt9ALq6qpzc",
  "key18": "21nD9DxV3gFGDxDqNhMBfvq39W9AwU58mzJ3LsfZqjYnRdcS4ktzfJQjZcNhrCC38ZSzq4e74rfiEkmNdd8CJ6Jv",
  "key19": "6GdT4y6xK5pcYKxEqxnkoFwUsBrjS595UgiRGim2iPFRBvPtYEUkXEbDhyr3mPrfmjBA4tnaEWS54hTXKwSFiAS",
  "key20": "61tbXoF9dxA2RVoH2pKRRrx7rJkP7FRcJn3qJu9xw4pJDgTk8qPzKEWH6MaaRsKoxeg3FQQzdkRDkWaKkPBkkm9k",
  "key21": "3qHDJhi6F4BGrbp1WU7TyA5HDLGZwSEWptwtaRm7hPZ63Ua7mqoiPXmESA32k7FA6rfQHgCiSQS6aaVZUYgA6bHT",
  "key22": "2XP7Peb3dkQY5Var7wNcruoAmVvMZB3UteCZDgfjn4xNh6AMJrQRG6gxEQeMgD9XYdEbZzh8xwiTfuHXvLokxito",
  "key23": "2g7EZYdpmFF7WqqCwe8CP8icvTGS5K6F5gZZoJLCfrLPWVUtDm7Hqwin6oSs1eFpE9ubvPmif7sx3a1ePG8An2wu",
  "key24": "4FJhAta2feRQuMHKT1jLYard87PFtGoL6KbadvVx6X2Dpoi5Ny68yw2MXjXUmExrMGy45XHVyCsfMA1J3haSrsic",
  "key25": "5Pex6SVHPF3JMAXZWTrJZiQSTj4e8SFrrB269sySvtX9MwUXz6RXoJ6zaoLsZwYn4c6RwJpm8MC16UVkFQTEpVJi",
  "key26": "4dSG42GVRDH3mwcQGHfsiqmxDHfb7Z4QjWQmPybmdft1N9Rm8BftresCT9QN49UL2HYsx33weXSVETMXFnrtBvb1",
  "key27": "4xenGKN34AyMyuCiFF8sjgaSirhPMTkS1BVYYu4WRJZxHC8vaQ6KtukanexEHYgRxWy21BbqVdfM4fsQTai7UoQ7",
  "key28": "3hFtQnfAvNAF2zN9nU8kP4LbZNWyMdnsPToWLhpkPZZ77Q4R6MjCeKjS2ewVdE75bc2sMxZQtVDtFofmz1ZTaja8",
  "key29": "2e6odBJZFghSYC5pV8UJxdZ3KCUKhQxcmbfGWYPRE2bdgG1AsV4s35MTKKMKYJvwxony8c87HvwbJCehwUYKpknx",
  "key30": "2MH2BHe9CSqm4F55T3KsM51WCkQ28NZ92RKhjjNSSZQvubpMr9wioMu866iDk38chFNe2eY4oGfp89FToKZedK3q",
  "key31": "2UnKhmA8y4hNL5g4gdDeMH9ARspsQHMvuQurx96u46nfmEut2XcQyhYYEpATZX93shWYzaxyDAyj1KCoXjsNADAE",
  "key32": "4wUnyGgRxn9izfWkCGs7LzP7ZwrkY4NKCEP8iQBq8f7Ez3VxU4Wu7NbXCABaBZcohjcNp4sJYKqqmavLQnuc211F",
  "key33": "2P18jSkUuNvHUcts7EMubXvGhvsqMQM3e4rvPUPzKLdDp8MbYPpKUYSB5DE2iY8aMMguBrUgoHdsfWtqZ82JLprx",
  "key34": "4KzBGvJFMHv1a1BW3Cz1SJyHiPi12pbrdS6ZJYfmKEcnw751dzJy4LeRCnsAyKa94dDxeF93zbEh88aXreWzpbux",
  "key35": "3NYiibDyfgUs3kTsnGeDTCkAahtvDytPs26tzYFzh51d6kn92Z5jawf45z4tnLJgYnrgPsSSRRVLpUokRUer6mn7",
  "key36": "5u3U9xuNY3jB5qmDt8iG5oDaXbPWwwBYbkg4QPbE7nTQbnDADjHJmPHWYomHLJEuidvbR5MD9FpddPxcSigfxy3V",
  "key37": "2X5Hk5CBgPBMUsjEf4idfQQmnebzaiEedkegtvuRhhs5Sd1DueGSrKFoVMmXiXToc3CxPJr6xa9rd8FKeurnCsnU",
  "key38": "23tLc1P7WW6u7HD5k4HW3BtiyCqEtnYXoCFwjgq5RBfseMHJRNFpdEdj2GrrA2wWjQZ9geRttwkMP7nyM73Laqew",
  "key39": "4vezagJn73uJAS1NPRqjrRQbdDMxzXAskiUDwxbjpZmrnpW7X1pnpGhGVJTCGzFZdVrKmNCUgZzR6Kj89qiy9SdU",
  "key40": "4YVrf9ERVaVt7T2jC6Xb7rgv2mAd47iuKmcgkWA8f6KKZnKoWhfmKskJDQKsWpYDhytHkgTmGdXfSsBn84E3zbKd",
  "key41": "4h3xVhaDaJEujZVu1Ce3NQw3cr3HJfmgTnFz2Rhe8j8SJtaGg1AoR2B5KcG1HKJKwG86ux2Rh8xhR4aCY8Gzv4hu"
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
