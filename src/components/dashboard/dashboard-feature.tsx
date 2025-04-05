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
    "5iKYCMhr9BHey14YCA2arBMWPRmDiqUse7cdR86mZ3DpRGBsLUpm7HX3pFxL2eZyB37tAU6NTHGmr3JgxJtUAMyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RQdb6aJjtzfiGPmGqMwqGQ7ERD7X4mAgJtcjb4zdse8LazuX3rjQ2YNHcrWRgNtAh59sTg8ZhzAgmVbDfDxw1jN",
  "key1": "4i1Hu91z6eF4bzEEdvS27huKvqcCkXke3ssZZaavrHP1Q8ayQzeQArXxKh9DLuX8Tmb5jdBHNNDG9FwRNHXCjTJR",
  "key2": "25Kr4MgPUGsxgw17D8UfiiaHHDudZ7GhHnEpzrCsTBopvsKygattHGYA7jt3PayMXsNALKUpSYxKtQfFviZmtkGD",
  "key3": "55K5WiP7N8d3JYXxhnjFc8Z5V79iz9djBSo9jFmZxxwN5JWSctTPRuBM9onX96gTSPPZrkggDTcASgHKGidQDJJz",
  "key4": "3LeBwdGVf5WmBWdea7JKP3zmYb92fms6HsSpFdyBqBvbLRHPKZxPEjbaX9sHCtLGPwTxrynuZugkLytVsCMX5YpM",
  "key5": "42eUTtSMUfuKeonCeVVimSAVppBG3wWz7eM3hM2k8H63E1J3gLpgR9YMzDDLb6FTyXkFnPMYErQjoyhM2XedpdQE",
  "key6": "22saRSZnmnsugMoApckNyPBBqTgUWzN5TGMQaYUwWzNsvZ1QaR5x6ZoYsMYUAUkygtgtfioBVuaefhLp7eQ554pG",
  "key7": "3p29BkfagcrWR6KwK4W4GGU19UAKkoTDavwBV4J6hh5gx935NWB5923FqM6EnFz2adP8pK1JZG6Q3eGfqNuGpHDn",
  "key8": "ghgGS5Aca6eV4As5SrXRHnrNGaCZYComKGVuDA9oAeNrvGg2HBQ6w28hnyDEdzWfdLCFpiB5Lf87J1nCsENkqLr",
  "key9": "5fSLbWfcPVqkesZTujtgAvbZQeLEJ4f3SdWeR7FdGNfKdenRLwE3dfsvPBmE6kGfLyV3JifTy3VEPKyQt7gqoVvm",
  "key10": "5gWgXGgFLizDtmMF7i82q4ikHFpBsapCUuRv9pcNVDeY9qTWQA3iHLM6cNAGBs44LcnCAguFGKW6pZo5VjajuWS9",
  "key11": "61nUM36Hn7GiAoeZEdWj7tLDQutWyFN5A534C5qNiv6JSnC6KkaU2nf1VHLjhZ7sbM1Xq7XW8oHVtXRsgb6uj9fw",
  "key12": "4ZkHzyiD7FFuht3acoMvaABKjdSSCGygpi5h99mc5eVxS2f6fRoH7iE3XyF6aMb7tviXtCiMD74TNbyG7Jdm9YBH",
  "key13": "5YAHUvFqnrY5yxT4wtZNLbvzApgTHzUAJQXzNaq2xBfYrSzZd5BnDewAfNY9p43Lu2S3iyJ5qZAXWBgitHGze6W6",
  "key14": "54gLtmgapxyGV3yq1sNeAzD6HGRX6NFDDvBchcRf2oYczRmZqfo2ifapPH3tbr25x926gRML6UWU5NLLYGtdKaPY",
  "key15": "3dpCFncMrfcBt2SdmakCfwPJmzTEtrhyFAgSpUmoS35Vcom4LYzkjijsMi4qDaBuq9U9X1e6Rf2kPMTukLY7HFZe",
  "key16": "5PV6P7PUhZXQNK73P1nK8eDw2soPg4Fa9tSxcFfuXAuxsENjtSfrPQLu1TRWak3htmZmEjUcFZa5iQE44jxQMywV",
  "key17": "9hUVSa9xQLscjY8nU86pFyp7jRiJGJA2Vm6HVyRxs9DqCQMqfvdPP9pT5K676d1zWdQUGB1j8nPTwewu5BSwgFF",
  "key18": "5eSG4fzmN9n258ue72YFWcQzB57WEHfaG6BQpYGGcDaz2fohn1nFPeEF2FDose2iRYgDxQneCbS6zKqnEAXYPeAD",
  "key19": "6MzpJteNNVoeAQUMBGBVjRM6kPisrpcNxE3n7wJMACydC3Dcc9L71Ci6mgLL5aZZawd28gwgYFsnL2bwebRNvwX",
  "key20": "9poLkemozxecYtsqTqLff6zdT27KpqnMbhHZQ6GxwPqckDnvopxPcKCAuWBHj7kXLHShGudCTYs8k9DdQU84Qws",
  "key21": "dgCRVAwYkyEYYyvBw7azZsDJYZM3iACtcBLvT6pAex4GfM1ghD1q4ygXPt8zvdF6YuYZSTicgmRGeABsaugqvD6",
  "key22": "VBzdmFGcDXBfMCwfv6AK12NsQV1goNn3PDoym3kgLSB8vgP58ZYzUt2SeZb3fKxodsrtJW7XUmPhwapuYsXx5bS",
  "key23": "2LFMoMCj62A6WqLQZTQVrcpMmuZoqZXD3bggiebpDeVDehpwgTCqtmppXZuEENA4fu3m6pYzJHH8LgKBbzwek7ha",
  "key24": "3pHpjpx6yVHgS2ZmFkVUGCkW2UDFbgu1SjUuBoHKLA9UYm8FnEBcKXQ8wkDE92F7JjxmtSaSb9K9U86s3HfvR3ou",
  "key25": "nwa1V7BpVHZD69BhMvpgKpttQC7S2u6hxnzZWcnNVtjC326BCz25r6JZJHTMuz3mphysmnQT264bWzrNipgQns5",
  "key26": "2NuXZEBBF6bnaXzoaACMC9gjx17THW89JViGDnLMkA5W6pGheegCNmpeibYWizeuQwVafbRtXEEw4CaHpDZKhrZG",
  "key27": "35hXc8F81Wn9ceJkSsdAAvgV6rADjNVW1P4FAvSo6xwy8hCpQFHMAh3sgQoz8wCDitH4E8qSUvz3EjM1wrbebfG3",
  "key28": "2iSqHdWWyWzhJ7P9MEHPjzaAo6jdv9GM8xb4pwS2xdFFKpjLNakbeVe9b2VCstVNDcpuHQFv1xrCurdrWFQe3JMj",
  "key29": "675x3pSF5pjv3PN8D235PFSM7shBtvaNyFDzSgsjZGcqVGg9nmtJw7Ma8EjHhGurFkNZHQKZ5VKYAZ2XsobYH1iw",
  "key30": "5rF1qAZ3sFU8UiK4kdEj6arCv1aHY3rEMMr7VkkFDntyh41bi4KMfCifgT5PjsaN6gMp2AHJxZcv66pToiiCnuzS",
  "key31": "CsXRvVx1BwxoDS2WuuK5KLGhpbc9HuP2QgA9XERAhAkD66kbnear3MnDkRKZJonbnixGVP2gChkRjwMAYFJzynN",
  "key32": "3eYe6uH5fevinK5fEjq4byEu5qXtWSLFddtYHaKPzMjmK2E9cnqaPTTfChdcM87erBpP6NCE7R3zAPpxW9MJ3DUZ",
  "key33": "3a86bm7daVLdViT4uW2wMKXThVikbQqg6Sgh3wfAeNo48H1M3H9MK1eS7NGN42jueToQtL416A5ejfawjWit8fJE",
  "key34": "ncaQqvTfRrUeWw5ZjPawjD5gaW2aQ3sQaWkNVbNy2F6PuADqECYz4GubYQUUSN2sAE4D8KmxXMZLEoH8mTurRNg",
  "key35": "3sW45HKtYUcJPNqCdgftJRXDPmYprdv4KbqHmzex3rwhMJ9a7YuRHMU6ma2LWPuTef2ySRYutEsF1A1nQ7fF5nE",
  "key36": "2SDDHitW9n7NF5WZAQr4CFVmmp93pSSNXDbb9foT51qZevb22xdW3h4gJuxHzg7zWrgPRizPhRs5hgz1LgG9xPhp",
  "key37": "5D3cFbmcSsjGXEHZaMJyAGAWYQRdEsnuyZxVtSdzC6Q7hYFAtRjGU42FPYhhrrZwpwqBoor4tkPne666x54tedBG",
  "key38": "65SmRGStX8N6wpoBBZXAafpjGUwwo487yTUS1JJiyN62cWpXVnxBJ5VLcPaF2ERVz8ZbT6zvs2hxCMAKupcnxcYW",
  "key39": "2tjz5LTy5LKwto5bt3ht77Rd9eYkcmj5qaif2TgLRDYAxwrwqe6d9raCszAFYwAwEiGWiur47mFXhWsqw4DUVZBm",
  "key40": "rvVLfmcL8aNCfYkWc3qASMAWNk79WDS4mCoJsucKU2FEgfuaE7zXwXREcUkE7bsoX5CBJ7wR9qS9jetRUdRfvMh",
  "key41": "3VnaSjiBCpkbTPDzEiYV98vhmLhPzfKz9gRWmXsTU4jtny4ah2vL6hpWqB12PnmYFJg9XhmpV94M2DqQ4WC7FW28",
  "key42": "4gwuKnV9SCFnapTyCABnoWotfy7HGSCYnvrGxSHk6vsa2pztangGyV5Fs47P2ahonaWCQ2NUx22KJ4vXp8nFDCZR",
  "key43": "3U97gNfSt4V1aCCWspwhapoNRBmBhaqQtzbbLYittUCs54zZHekN6c6bo6s8CDgDtkFA4ZDPgYdEtBcS7Fitnqfh",
  "key44": "szYBNhTFo3ZjybcehSn1NhjxwJiRbnKqwZAALe4DTgJUq73EbTPyvATXtgBuCKmP877aJkZxW6QPQ24gxcaLW2D",
  "key45": "KzoSw1MvDkMwbbRP1KAMsQKCBu4rVd1RgrCaEaXRHXfWfkRTSdFgXQtrL1kE9fdLWgPhT8ZkWrr3Xpg1BQ2UXz1"
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
