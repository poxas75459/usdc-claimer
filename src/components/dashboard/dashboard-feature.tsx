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
    "4TF2yiaqF7BuDedAC4MbvoWTYYE5AgUvL3rLonrQ3Uj1TUnhKHSUZj2QsedN5s8QGK5p2GE9uCd7m4JENziffJXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WL31ULcGD6DzGZpnj4EPJbrW66GffT7dgp1uW8kq9vsxuzkNHVSaWDjSWZAJgc5nWShg9jgTE4uAXprtSivwSj1",
  "key1": "J7NZJxp18Sy24iaTb6PQfTQm21zG4znTN3pRDcGvfAbxvehn3qDpzikUqMo45fdA19gtoo3D2wmL7fZWPMjEAPx",
  "key2": "2kn9HfjbTzZ4Gq5HY3bBbnUHdUVKJznDNnEdfPpRR4o1KCMQpnA2Qn34YCxgxAbaoDsoR1BTn3sKKNfLvrAJ9Uja",
  "key3": "UvJU4CSrkkCSawcA8bXVSRmSZNiWRuDg6httiRXsJYGVhMMnb33KbM4eaEj9B1CYijEPviob9mU85i5g18GwYvk",
  "key4": "3agh6JxUMzyrV3bD2dzHoGHVPU5VJ3gHA51km2U7opsncHNgLoXzHUUiMaPkzMiknuqyaAiCfs2jnN5svdsn2Rxv",
  "key5": "ePFFsnCchERQ8v2UQcDf6pvFffFXVQwVv732eGu2XpiRodrzd7CVfPDBSauEE61hBWxJeDVcMsTUJuP1QcQuL79",
  "key6": "584w9y1ZRRVZnCGygULzHqaXb5kqENCxaTJnrf6obrXKuKdBQm3AgWEkW4vcBHqrgQKvLy343XoDTECXVhm1G5AA",
  "key7": "Kzd3FjNkt6mPM6Vcg4kbcXZqxPHxnoDxRq9Xrm6gZqKQb1SsNvQ8FzHr23XhfY4kcb71MPiagwrogV7ikGFoRVS",
  "key8": "BJ4wP9WKhZFgQkS81KEywPNHCLkpWUd6Y52vYabWV46CovDWZG1qRXibxjftZJroxPSMhcqc33ePfkfaJKM94x7",
  "key9": "4P4jgVitEX5epiKwyGQoBuf94oW1KHCH5MdKipdsFX6wm9NXyz17GPhH2KHPE8b5bU9msjb1ChzgxCHiXDmfFCa1",
  "key10": "4R1AeowBhRwrUYVyPFcPjQEN7HU2PH54CiYsJyPokyjJXLC5HX4XyDgDBEXUiKrj2DGdoHPPGj4Pra8zZL73fs2R",
  "key11": "3vvbcdQAvchhfjwUiEpiiibYaDgpZCZwzfh4PvobYH8xHJErNJUasiYmUG9a6eKXR1KBa5WXg4BxGG6Ew5yPzNiA",
  "key12": "5e8ZaVL3b2a6BZACyAG1oMdsBZ5GCu1dAGswfVWPbwr2KMYN7pfahTRCJficqCmUNAdcVwpTeUagEBVGAFzWi48D",
  "key13": "3DoYBF6Fgh4JrFafpfGW1DGMKoWVP3x79cBkoSrs1MWgAWjxgNXAfuXtRugNqv2i7PY72d66K2dmqQHFVNUTPR1i",
  "key14": "5msg6EnxcpLsYp9LXKoQg2xZTscMsPgLsud88YwG1r1xDVJjgn79dj1RZmvnvDQFUxRFu6wMumhL6bUuieEDJQBF",
  "key15": "5ha7NAP8ionRiYKgpg7DhWv6GyjK3UK54d5GC53SmAf5dHzvzyDyiXd2hNa54xaYKHcNbtR4SM18bXtWWVe3HLYJ",
  "key16": "2pa3wzRqPkqXwZtDk5bAzNe7GWviVuEmh1BELWppfCmB7icEqeMr6ETZrrVhJEEvwBiugFcwRwy1cu4jfruwtGCf",
  "key17": "3PXpDQWznZqaxC6RaDRNFAZWqasr11io4dQkmHD2Sb6PontHfqkwvBE5sXNUYJMbgch4FBPBs7EfL9taeUHSZ44Z",
  "key18": "3ZcJoQwMVmznznpwmYgmtqXrcJrYZup1fJ4wjTaT5tSJYcH2rnLqBTnp78b1dsbndYAadwjw8ZGd2ULdv6E3FpTf",
  "key19": "57BdM4TVgTwZDsgFe8WqTftEHezYyrJDBTTYjvrYcQi6LAvRExuKnytLVTaRom1SrLQW9K4sNuz7UjyPDU4dVSbF",
  "key20": "2xmQsuiTNC4MjV3sxJMNU1wMWcmSZ49RiyscpM2fe4vVQ1G9H13VjMNof2cYKY2X4QY72jPt7qGQ2mUh2qWGPLCm",
  "key21": "67c66FPnJ1i4Qa92HJm4ttY7GhGTDkQ9f7yKSvmoBQJZZ3DU1wSEF8nsVp67B2dsSS6CNbvr2HzkKRRwD3Ab6gAJ",
  "key22": "5KgHoket35CHWYkBXYr6TQumJgAh9aCknHdxTzQUwwW4TNFMNr8YNWc2t4pfuv3HVQLLW5bzf2Nbxv4j3uC8ed8E",
  "key23": "4GvHD9wfVW4kzUV99VNymmVmCKDCRjMKBZRBewZ9CkLgitUQNrhHvEQRTUtmvfUQkSCFwbBxUjy6hsJeA8UtCsjj",
  "key24": "qrvz8JUxjJ5guieu7MAKtx13D2m7HJkPzdUJjR3eq4D6btdmfgjuqiaofGJnAmVS3ZdjChJSUw3ULHzA2KsBj2e",
  "key25": "2jtrTvWivEtWJ61bCWqCoZ1awmFGRJrdQ38NsXvXv7bqUMfh59zqVTcTBJSrccs9JwY2Mn5TNbCL8KavmhyGMATr",
  "key26": "QbtSG4kxj1jrQmSeho1mfU2dW87bnayCDXMddEBZdscqashaBavNQrJeBPxLLAY37o7cs5Wdis3dnEpfs997BtM",
  "key27": "5WAJRMzBTHjYstzsvceNBBNFXU2qL6nUJ4n4pMGFSKGemMMegvFYL1h6kjSDrRfy1iuy3daESExLQCEeQfBhPSDZ",
  "key28": "2oAh8bC4Gtbx6d5T5dCpAsDYqZk3dVZURPBDQC9XRZ1USR6J17KZwSv5PrnxvFTkkysLE2bu2VoYfgKhgfTxcgm",
  "key29": "5rXnqSdW93AJ6P3vpACvVFZegL3Q2h4zK6oY2VtVRMEycMYBkCc7rdn9AdDt8Z1fGbadqegpR18uUPyCU3YL6tvX",
  "key30": "3jKVGUwmShWY4BMZnCUNsBua6pLBoNk2Pp2yzZhHKuC6d1NrX8qERdYph1Se4DMUYUdVsyyFEwiB82jvBRAogASY",
  "key31": "5JLru2R5WbFhu1gdE1mAYhRrnryZxBNiQMzFPEuYDBwmA6pckcMbHHZYgbhGPyx4gTXeog3UwX6ZPYjegNFv9fFB",
  "key32": "4wbHm1AFxbgp49sMwc7bNcUxgHRTvZLoWFRb8Q3sWxwhovPHwSoRwToNsjfwb2PE5cbyR4amBfxrmwzwHPZPE6X9",
  "key33": "maM2sq5EynbYaT8R1XKGMPoaN31HSEARBo9e6RmKEDCssMps4KSwv8JDNMYjupN3yYcMGWN8ESGSEEBYbmS19bC",
  "key34": "5Twe7r3tEq6B7XPUkRvTxPANLhyYfsX4C8NMFUEVwybc3hpc1pokFCqP3eVuqrBCa1BvPnpdWMoGPDtroWnck8xg",
  "key35": "428zRxXzqQp4HmKpZgNB8Yc4Lwo5enX7T22duJ83qcngK7BvyGqnXLcmrRMBdhE9byoNgHZ3AgRKQRxtDnqWKwbn",
  "key36": "3cL114k59PG27EtDhdS9YZWspPwknuZz2ifrWdvaYNpWkPjFffHrTuDxgCBq7myGZNf8GEmEPVWbQZiA3HK2JFDr",
  "key37": "4uPrX5bE75EyqgiRa97jurz9Z7qWzG5NE9XYecoVRaHVhxConiuLLpxhHM9n4kQ1Xi14fPZ49qWbY85W3Vnec9Fd"
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
