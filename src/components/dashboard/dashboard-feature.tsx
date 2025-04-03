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
    "3gHrtfyeNuFWV1pj8uj5vC1RBCLhRzsHwZbdx6KisAYgJj5HJHbFTJCdDJhWzcUh4csBcMYgLdJW5aSUZySpdZGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eXcubXnbhvwD5ESB3QTdEzEpAjsMwQPSHe8VJN1fxciU55gPtD2jZZZDKowBeZTVRn3wYfFK8qyeSV77F625ES9",
  "key1": "4r4B1XxCUdmHHajS9B9wcvMfcxH8HAqL3Nvh9KNB1i4fg59CfttmYtC4xXiBobEKAxqNGXmZtYeNGpzoPQFS64kD",
  "key2": "2qjQecSLY851YxByrpvwrWi2xU5qGnNkAE4xroWr6j6FvesFAoNJzYzdxYuPzDMKjNSVcmJeuGc9eUpR28gtbHr4",
  "key3": "61wRxpQovi5j62wpdUuovWPX2FiLHCp2QyQZjgieEcdoaCMFa73vaToaCjMHfc6T15VZqaKfxArQKo2ReruiHDT5",
  "key4": "5W9BEL62BeoZWZgeeZGpzE1XABfR5D7rkivPtL8TEmYWsCTLwFc1qTDADxTMmZKFw5m7vJws1pUemCGMWzJJ2MJZ",
  "key5": "41d6smVHRonswqTJpwAY3XrSjjXQEXRKu57iXLywbj3qzWJMrfcebEDxPQwVrfkBfssZDPxS2hGpkAUUd4wbLmza",
  "key6": "4MWq75sMrSAAgm8e8SFkP41T7jTAqdx4orReaCrrz1mt8HJrRdX7aPBPFK28i84tVESeSvFRquW8oGiFJT2D7fGX",
  "key7": "4Hn2HBShQsCNXDZ3ZhycnaWB9q6r5ypm6ngkddyP9TwPfBizzh1kThRNFyrHrQxMPA9BEtNXNvLWXWKL4uijTE2D",
  "key8": "5iLimaw2hN2FQpLgH2pVQ47XbLXHyjxBLb2g5ebhSPjtcWKgzJ2MvwUkq8snntm7BrNLeooCWqsPshLXXNRLCgGJ",
  "key9": "2Y5hs1Eqhnm9K27JiAahboaMCYZg4EnXvX4YMj937REvcKagjL7qWNQH82uVbEdxxuQGbR8oZzCHJD97zS4fMLAq",
  "key10": "T2xaHY9ToiHBiNFy6WviXKoWVWiq6rpExJGCM9mwxXSroTQqWvyMtCQ1JyiNXfJom49kzeSHBYGEYpXM6rbEKHN",
  "key11": "5NfmG22veMZ4ceUvBx8jeemLWnouP2H8ttr9gUBpSXaYTPkdw1mWkXzptgq4ySWncxFgv1vZMnrvcFHxu8dg6bzj",
  "key12": "4HFCwB2KRuQAy2fCxt6a8nwnA1hdQia9szdAxtcRCyb9HnkoKa9HNiUpXFeBw8k9BY1BbMqAoCYXCuN82BZ8pPhi",
  "key13": "4qKLb4LTFAFMXa5CFb7Se7PH3xmywEqRvY8futbpKpc8W8MJhGBjcmNytVzCf7Pgq4BDSm8xZqopxTBs3XSrsbXn",
  "key14": "wok5BEvw9wXdFg2pSW7bSfawPH1EwvAYzeeDnSJxaDvpF7KapG8vrQDtMxsGmgeJeCRqhgQ7qEe6NQ2Wrrwyxwy",
  "key15": "txBjCqpcXPTJnaW5Vt5mFQcCV4yZgw2FmDVe3Mv6VNjUQj1R1L7DJQeoxvoMRBy1BvYq1WHPXz7rSrcWfNmorK8",
  "key16": "4mDbw2iApaHwHnvTf98sQGD2no1YaKFRYomvPf5MWqAAt4tG8vXfH41qXZ1nKuAwGwkjrpKzcNvNFnLxcZW7rzXR",
  "key17": "2eqGNhPPfWVM9KyoV9oh2CkMVFKi6y942QSZhXNB6tpBUuNhBLUDX78xRRGZasZzjdEDxQyYqapA7Wv3mAy2rwht",
  "key18": "3H4RHBWNkdkh7gAYSeYih6fu93K3vqAPosHMxWNgPjJGve8zgarY2d2CNNy3e9xMZHDq4XtPpYsNKf8RRLiwHyYh",
  "key19": "43MJitQKntZYiDH21SeQqkTpv5gHbirVvuCPjkFP7iqGh693HS9YU8j1gw5qfDRWSeCv2KtixPFAyMrwCZVoFn2U",
  "key20": "5z2VTVmkTdKTSNeFkkLZMkL31i9v94nw8uPWpe6zL5ERcw82m2ejHwxh5xJucLytbtd8S6J2ujgwnnLZMMNUs61z",
  "key21": "211xgLNNdWmkQUz1wHXEx9FaCaWm9Fb5G5ErLYmnAPDhGheXDwd3wC8FYCmpKchUxubJQqjk3H8z7mBksD55QgT2",
  "key22": "57zvTWx2dxYnXSRbggappNnKiMLBA7xL8pTFx2oNqgyANQgcMk5LMQENnWqf7vKDvgo5mhCJtfkBmDKKqSsqnjvY",
  "key23": "4S4QVHb9uDyEeiRDHHXX8f4vqBDJJE7kFhwpeEPpVg9wrnSdTeUYLjyqgQpiLJzZsj2Vu2zbDPimERakMPXcGPsp",
  "key24": "4W2pJHPLNwsKkueLpWzM1ngFBAdnC34EbfdUci1J1XEAHh3PKtNzCyCa2TdpPHVLyQhVwcqTeB5wwBgrtQ9wemm7",
  "key25": "33qktiFjJmut95Guj48bE9JoD4XZpLMfMt5zAQnRtsMUfr8t4Ehh5CCAqvryY1LRyMucJ7zTVajTFLV2NskS9cd1",
  "key26": "bvNr7uc22NVAZD8Pn5Li8BYrh6zeTskGXZ1vLpsmUSM2xEbcG7UgoGvjdiMpbUgU77MwfqidwNdfMbwmM1z7bsE",
  "key27": "4V9Dv91RWCH7vkB3eUG7JhVq6n8sCZ2wpNMptqJQnyqNcv4svAeTiNcNkLp8C118Cz6zq7WbfVkdfHoZdtT8sEhQ",
  "key28": "37eqRVdfXv8EJrV1WHT6UMsKLQeTCnrHbc51Cd8WWF8ABXgMKHTRUaZb3kLRX5mEgxCdEhZq4PDU2DFTmqty3XwM",
  "key29": "FMK9fJZxfydmvxWHitC49XxW18LxSXE7VpwahcXNMcADdyGnfrkyMHAgBFFa8XtyWsmu5DAgzzaUZcBX1NXykag",
  "key30": "2vnbGA1JiXmrwGaae3Yw3NXyWMk67sLfRFGNj7NiYyCu68Zt9u6MaWVmEGaT2j2hyF5EuM8D4qq84VqGTvH5KNhe",
  "key31": "5fzh4QPGoNEK8ZjCBZ5eWYDuZb7aDKrRaBhjYrHqz64G22kk7bYVtxgpBLdGGkBVeS6DVrLuEpvLsQpAGBBgYeWG",
  "key32": "2MzzVZWCtxaxqHhF5dPmGuPm2DSktmCbfwa2eZguTLBgXwrwnuoJgJ2AkKr7a8cLsnhRVU7TvdZnqBtmpfU2qBWp",
  "key33": "5rPnzneVr6psychmyiB4sWmPRoxY6zo5yPj2B8EXEWkWFH6tnFodt18XKVzdQtsYjWSxwhg1dqp2RP1ECJ5FgWe4",
  "key34": "naZWUispY8E4UV37L35zLFpZ9B1NwmbgX4Dw7b8j6eEQkBm7ikrF29Tp3fb898G6NBuRkd1VQrSj9Rp4aduBT8H",
  "key35": "Gfwd5SJno48X8v346phLYCX2VKc2VUsxxRCRQBRhagBzRBMWEoXEyVYSW9K8f5M2D6BHmfUmk4wzLn2PMMjAj6d",
  "key36": "vkW4nkynAGmVFXAp62UnSaJYCFQ24UiU3qvwfGVqXydVzpnHnTbUjJcqF6Sfz7roUACJDQ2p2uZr4cQ69SR8LKY",
  "key37": "2EbtQ61gpBuzXTd6uAYduf8n6sE6U3uopTSK8SifZCUSSDRA7iEm7oJNKbigh2BQeH4CJocFqUbDutpB2ujNG7rF",
  "key38": "2TBzH3FjJ9hT76KfrVTkkFzsZ5A4JWK3azTrAJAEwwwSZDLWzJMAKigkVV7YdbgMmotn6NwJRBw6Msu8qhTY5o1w",
  "key39": "4S7rivf1AUweFtpkYCXsHNzHTS36vqBMgNFMNGWkTWT4nzWn5fBnAacwmyyVDVaPeuDA3Ev1vRy1Poqgk5hjLmaN"
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
