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
    "29xfJ8JnKXfmwiKWtr8RLUvM4LyLkH7G3gW6mgpPb2FqCT3DWbFAwQF1aRuuUsZjxKNUGS6UzwNWzvyBd21hMTfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TFuejZRt8SjgUSmwAivchPFdz3Cx7as2SV7jEZ5Cg2X1Dkac9puLaJxNDphrBt3yAPVCwHMMzBhWRow9frQNqLU",
  "key1": "5GP76GKwukfRhph1h54EBuBLadVVCtnxMCxmxmECUvoDEfYjecv9XRC2htwBgMt4bwX3HrKGathDm1kVUk9R7urw",
  "key2": "UtF5dqnuo2Z8YYcWJNvLxhuwgJxARdNeaabNYkqWCVuujrJZnuuufgVVC69CmbWNAeV8R3wLETdLsM75gyZ8atF",
  "key3": "4Lnztm1rCdTMo4BamCgFK6foNRsMPURhm2W8Rrj3effzXr5ALYKLofbnTArjLV4BPuAxR8ve6R6pAWpTKvEWZk6",
  "key4": "YXBbons4pZPV9CrMqRpbbENaRaQBrfsLTqRmgyeNPkec9Xhu8GN4BEGggjkSeuEbvY7t2CX8vwj2xyf127GU52m",
  "key5": "4npzjGwfjiPTcoULjd93vaMxT3xwTJU2A3Jz7bMzCc1NdEK4CgKwv5fT3842KdALFFUhrSYBs2wjWWqiAdoAU8dp",
  "key6": "T8H6Dm5PUHYfLQKEX39cTEiAC6GWgPmPc74ibaP8y1p722KqroJeTiiHhWh9hgPpew7ZgE1mwjPfogDPsCDqZTE",
  "key7": "2pLBGaFHapHmTAMxGvdCsGT3eiCKnf7eyYiCFS8C92rQjWDCpUzrcxU2a3WLQN2VfvCKhKiNcycntgrZKXHsXUEk",
  "key8": "4qsUycc2YoJsmtvL45HUTNTyqEqBExYMnmtLCYsdJ1tQaVsu2ySU1jEpCm6PDwmVWeAbGTFhRBDDYRjD5CLKGFve",
  "key9": "Qtod4XM9jW6TeU7UTZLwCHCPWmCeH4ytfHL4e3FQsfMNMBoPzZ2kUtYhrZZj4Sp5Jxz2wjNBDwavWG5PGhtYKWW",
  "key10": "5CDCUPdEuyApGLSBzd2ZM9SmD9TBcaQKPenqKM1sE81DX8gSgESee8ATpECuqgeQtNFAfs8HEhGBdRqaTjdrHrm5",
  "key11": "41nuLugCcWMbsvsCb4UJNRsbrAbLrFQbnn2dmnnox2ho7z7V1j8QwBtLVtjBFvNx32A4pk8fUiMxisV2BA6jZJfi",
  "key12": "4JWVDHXLtFXD87fSbvNx6t1ak6omdzQ8AQdpEXpTUowesAzYwzx3dbTqimuvCBD8qAyMf5nw457VU9MrmwHbudjT",
  "key13": "5TAjhkGzoRnFCMPEwp3KKZ2C754r24Zp5N4wkAHMb6Dp2quE69gbQo85bkExcSHuTT5avpXtLGQGz5hdpxTX1xH3",
  "key14": "3B6UE1ZVQfzYnYWYrxnHUXw2V5Qvs6LaQPacM1AxyrBf5dsEWmWsMjNfzTktLG2rKcqv8bNzDGYApAjxskmCiEXz",
  "key15": "2Tumkzwuedmgu2VwyDx58ZBZDBoF1WYEe2EviScdmXiXCHfFt412ww93KYNayB7vJ5LDGJBmqTth7P7aVESQ6a1u",
  "key16": "5YwdnS3friFpg6FisUQaDH7mqbCKLc6oz7JENN4Vo8QmUKdnTuuVyLXoyFgCpAnjRWoXqR2RsG5dkmpC8ufakbf",
  "key17": "3oR1krR7TmpDNQ91rKeSh9X9Qe7YMGcyESRbDHq1bsApt9UzriTfXG5UpDvLZxaLr8vUN6fhKmuy1S381fEXHRVi",
  "key18": "rCqXDMP29btuDi1rFrQChXw26mgwzsZoCMqv3Zw4ofMvFtBXb2M3t9JMRBHWhfDjp4fiYymL9gZR8zUzB58j8Tq",
  "key19": "4xR87hZWpEKh5AfGf2EYo8JbwmHkKV4UbRcnuS2LWoJ296AFVz6z7gpEc65TkroAmKWhfVWWyD9mSNTnxSGUMEN4",
  "key20": "BZ3yBJqSGsfpdcew6yWruVHZSna6wMNVayZZ3pk9Qns58Yi9izjhyG9yiupTCurbYjtuRsTWNMdNhZhSg2ss1np",
  "key21": "3L8ZSR8XywX9Jqw2zzSyuatcs7Yr6r6X5MZjN8Dys547qtokjiYpup9gtpii1rpTaE4Y4KUXTYH656sNCug3Fbzx",
  "key22": "ct5LqR2m1tDakJp2ij2R63CVMhKj653XntG75tW1Nm2i6cLwTjg8KpidZamnTtAmrybWEPHM9P6i9Ek2JsSWryi",
  "key23": "4cVLTJFecdfZDLWT362LtD176EG6jWPq52SeAdxEMen5xhBm1pCo6RHfMxfHkaST95gKzwsMVWMSxUyHGsismDWv",
  "key24": "kUnCFBsGNL6hbXQGbu3DGtoxsFQKkk3aTxLw2zxmh9jmVrpNwMNgMLBtnG4bYKaKRYQAam9w1eFr6hH4gRfGzeY",
  "key25": "4RecmDbMe5gvRjL52rkEcBhoEb5oAUiTRuERgAHRF4Ze1kgStsDtESuyPPwVtHEjzQZgvUyL61V7Qu8e3CnR83Yt",
  "key26": "3sXmsthy4HAzSWxmPhbfCGccNheMwhGQ4PFxpFMWg5MY9tGQpYiBaRcW2KYVQQD5oCZe7rzjiUdrp8EomMYAg2SN",
  "key27": "LzjBKAq4fKqdaDY2nYxTzhLHUYrAP6rweFi5z1EZSC5fjwoDBwXNSvDaQLrWpzBsazPBsJWDsSo4uZEACASkRj6",
  "key28": "5Zx3U4pEfnp4cVJBqwKFZYiqzb8mMpLY6CHvcAZkq4NX5FSUEUBzzvvYMkKKSJRDAwsh4ZXbmAHKqr6D6znPRZV3",
  "key29": "3kr7qpxnS3nFkjQCUbYYWijmCPNs6vUoyxLvN639gRq2SdAsmazAHUbie4ESwRi8KJx5zfq4zPrZtkhiUFMRBHjD",
  "key30": "3gbroN4EsSCyZ712BjBG8mzjoS9tvnYSBUuuuywnqYanis3VSuzCXreFMvjQj1uqYWcZL6cMHpfyDaJx15eMm18V"
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
