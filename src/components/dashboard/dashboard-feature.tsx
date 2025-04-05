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
    "23sDkqRVNUmX72fFqxkDPLJMpMxFbcX5MWvpui8fuSYyhdnjHH5mj7rHSdn6VSc2KM8vn75QWKvYkNWQnwo5fNmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44zCiV1Hvswz1GXKLfsWDWVaQc4hNKwUQpywf4dgu3CbGwFT2APyrxD8NqicuT8mE6cXttMLR889rARGNgE3X6gP",
  "key1": "5YWFzXweeXqSovSVPh8EWCRBaZxDtpisRxuDayMMGEAyctCmHeMue7ctGvbLP9PqRAt6yCZR4xyNRHRDwUcPjetq",
  "key2": "2p7Jxq2C96G9Sby1xUbmUbJsxPQeXum7BU7GEmHVaFemfPcNYyWh1nysT4Dewe2gSvvwUuRjAtc8GHCiGEnFHGdL",
  "key3": "AEDXSz6R8RoWPmqCZ4vfZxuo8pBYudiqmcronwDEpupbfS6rLJzHv5tnET2xS46TXpYAUw2YAySqHzduUpUBs8n",
  "key4": "5qwYPgf4ZQhfGudoaBVL8WjerRo74zpvrzGjrsSMh68cdoNwCeD2huBWDFQriyKVR6XX8hhuL6SUeoLUTF6R9ucP",
  "key5": "QJqiZ2CU9pd15hU7A5WoQ1fcwuyQcahnNnV2LP9ZJRbUu8LdVD7pvsYxk8DGm1HkUMWozo8TiWTymgj1KvuBj5g",
  "key6": "4oEdyfAFKS5bzKp3Ls79xcfoEDGNdd3NcFq1RmLJWLQcWz1QpUgxjXq4Bd8iLGyXeWwo7rEoRi8eoDYJ86ciZ5xj",
  "key7": "WcLFBG3mQAXmuV24n9rFBgVHYgP1ANB8BWchHbgAuV7buzDGrVE4s5sQ99eit6X8nkZ1Eb9XnnK89yvbWuGwLNa",
  "key8": "48XeMVRhS32uiP74KnF1XxawjkfomdMqu6K5W9N7ocqMpDir9bvfPGoP3pcyk3em8gBuGsonEWVs6RET7EDQjk6b",
  "key9": "QhFbTsCQg7QwefMeg9pYGXeF6CyimoLvoEkTW4d4RaGaBVvAH9TvVqMRjy8U83MrBujKcq2yRmWm7DZoZZvi2cF",
  "key10": "2g4EFgJewHNXsk4ZBcSDr1VkhwBeJvFvCVF8cxv8T8A6JReXrCFyDDaw1KqUu7H14xKn6nMD8B9VdchBEDyFvRUZ",
  "key11": "3LqTKsEHou2gamhiwERVXiSN2LarkLvYHcP6eLUmn6y4i1qdSFvBnL3KWqxmbUWchnprVEynmNSkpCGVVFoAaFzv",
  "key12": "3TAPB5dvqiptGuMuttNbs4ny1qQB4pHrYszRzNBqxgikTTez1df9KnHtdHvwdGoyuY7jcAkfw1SYbfMfcMUFC68v",
  "key13": "21VFnSG8nBoQa3XcNDSjohD2ErGn7JBtm1FkjL91pRJ711Xt2mtL8SnX1JstwQokqkUwpYa8vBbzHuzTT6wqEu4w",
  "key14": "3muc7tjzrn4itA1BDUc5AoY7VM1QRKrx9NSYr1LX1Dg6R9RxTxyFWohG28rNzS3XsqTWMHGFZz9PGTG1FUxTSpqR",
  "key15": "4ip6k71oVkJivRk3ih1NfC8zhGGuYG84RKq87bsxsAAHj35CqhXWSBrNUgneDZiTbVgjmBVaH6SUzrQFaCry3b8n",
  "key16": "46qq4VpjLUpZfvENwNUTvHsEAoZSotZ7PKBXVVXfuTapfnuSbtXYrGcbAoachW1B1DnoM4KWA6eANWWetcY9T9XR",
  "key17": "4vL1Tr45vXeTGUu8eedi5ZaycAcCVdQXbjEZBPv6sLV5K1npfw1UB7NDGWT4p2fDZEEmLSPZkF98SNwGSQ65Shno",
  "key18": "4g6LqB93fEKsB2UL69b2eRp4PWMpyn7yBANxg3GDfiHZMVwCdBSnT7CTpLCP2Nvm4ZVUKSJUPkZ2sk7kyK59V3dN",
  "key19": "4jW5L7UFZndx26qfLXsnvQX93fqUcfKMtWsZB314rJdvFbJ6nHS1gW1ghTZBfdk4i5JbZN2gyiir92cZjkihP6sa",
  "key20": "2hn8vGXCXMgGbAvMG2Yh9w2w3TEGroZKeFJAT5pmWvW6wd3pNLHdBkhnL3BPP3hUxTb2oMVZEGyYi2syLntJVeCr",
  "key21": "z5ZqqWcvKA4XW8rXDS6pmobEcJmCSom2s1X9EDTFzcAruduHuFhQiBceh87g92rdonvJV8pa4rdenrCATZMLLjA",
  "key22": "3m24Taiap6Dw2W5ZDATJaLmcATWWb4XPRPGr54gXTmxznZ1aRhHCFxAys8pqsDnANFiVFCtCHuH4vExbDoMQLbP4",
  "key23": "2saGDqtpmPqX4jMHDCADQJymJ7utYxJyARk2sjBrUPk3nd1z5yH4neS6rCMi7deEhHGzpVSWU8sYQLHJKdfAWZLr",
  "key24": "AUcphQ3zjoGX8R3ofJm3KiH8k7TShmpA8WzRn2tFHYGpyzd6ghxE2gMQe6PErBsfEcsarebnpuMJSD9ZkgBWHMg",
  "key25": "k6MGH82fSnwoXqXEMb5GH3byWUBA27sGfP3h9VTtdNVyiTAbv6y4hiEdhqyqpdEsVJdhEXgkPyUHQiCtyTXfAop",
  "key26": "3a11S73xYm73oRUot2F8yUu45e6Hup92oECdnaMa8gGp626KB4UwE7WuXkKVsJMt1c2CPKVhnGe1WFeFMHEVhcaY",
  "key27": "4LahGggVEQu1mHMuhLnpwkMJoco1WKVBLa3aAbXSiAzLnxU12pf1xKZvmBqYr4MJcigigJpbWgb5YBioCEDUnKWV",
  "key28": "q8YdKJTVnbfNgrcWxDcBcSCF6JsFZmcGYdHXx1BCXSk5Gz9eTu6UR2zq9UuwCSYdaNFRt4oNFDskguZD22Ds9dJ",
  "key29": "2LoZN4gTEk3CBmTMXxAV9MPao8PbMvhKVa1PV6hkNc24ZPWATnWXkHjdsCZdB6ZG8QijcaUjZDLrbwfmUKiwGhUg",
  "key30": "3K1x2BkctaYmbP8oabANPU4ZT8gbQDnkCR7AR2CUaVFac2P3XPMQnQnoXz9Pn4P9JLbCL66BKjK6Ax5reS5XdfML",
  "key31": "4HpSYWhA44gNrKiUZpFVGJGgtSNT1dKMyX3XtRtgnehD4PXB4xwnYprhhvpz9u6jnwShqCz5u1WRfw2k5JCaW9GK",
  "key32": "5JMQ8wMfqKwyHvp3X2J4bVqaSgNfEJHA8bYkCv8zE6tgywbkUrxohP1CAPnzPtxpjHmuk9y2gh8Em2scmsBdFav"
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
