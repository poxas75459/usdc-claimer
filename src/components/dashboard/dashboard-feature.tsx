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
    "48pbNXAaZV56mR76p8KsNCFYd7VxPXSeKsvTmSDJpEGuMLARiFvEZWq42m5CyJkKLdti35weNBTJtp1fQgovYLmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d7wuhmxf8u1k4ffvpsLz2v5dpD5wweiMdbK2zwwkBgYSpnv6Rxh8CZXwy9kXacUCVgqnYPNfaFeLxyBBG1U1vHC",
  "key1": "EncUZNtU8S1rUyv2pqV4vBeA9PyVH8VqBXWGEQJNefa3jTrvGy5RZTdYCkqerEbaB1cTWSJYms3f5zdqUj3W1nX",
  "key2": "48g63vx42GCJhxQaKD7CMKZq3foLZbhvZFKxX9roFBmnzcvguwSdNFgSPcQ9VrY6ynnBTNKvi2xEJLDtje5P6eSh",
  "key3": "irfGdGdB4Dxp1KPc6HcrL6931s9nAi3gtEmEu4w1GL4AzkTrbt1AysXDsbFCECku12M59JnRLZwUweNAb4bUm3w",
  "key4": "2nEQRAUz6m91GYnVBFr5g2Gsko3vMEBNFbqdd8LRt9tTr4rZJkitJLdZFMzaG6EaBeEjCXWCQ6FhaLNAQURb5pCh",
  "key5": "63Gkpu6HN9eRYAUk1KPsZmR9qiRY5TH1C4g1LpWU8PW12knJ8Rkevfx9bFyKn6sy4rVGwyrV7sHdY88n9Gougxr7",
  "key6": "4GWQPA2LzKxMFbCaHSfQ6GUPg6b8M3EFRm8bH46X7MdMFnC2PvbQ1BtZVUnv5mb5Yq1FU7yx6G1EYdNEbXcuB9XS",
  "key7": "4vtvnfZguEw73baFi7kA37KLMhfbjgcMrwSmbLqVnhkGdnU8UmAjSTD7ryDo9VQeEQpuZebrRdk471cxwqf71c9h",
  "key8": "2f2YKSuhLpgdtQoDpd8czMyoKHhb6hn5GH8mVtaTSyct8M1pVGSPHHXJNzhF9ARcguUb2wNms5aPTf9xvZ8MzBua",
  "key9": "2Fpz2ZTH4pCJoUw4Mpxzv2nF23eW17PqTzwabbHNmc98EgP92hGUDk7NA9gNJFF8pphx6aC2TzQPUxJQcBdCpBfS",
  "key10": "21CZfxciWKeqiUGXmprrFhRrx9iZzbeF2r5M5XR41v96fDWGcZr4gH3hn9Yo1KGVVx7NxoWArZh86oEXsUMnyNhf",
  "key11": "ubVtjEc8W4hyc6jxB73mv7mVT5ggZUiarQEH144deEvzVRdvyGVLw3Tv5poYu191nZB5CRVkRWyB3VPavJtq263",
  "key12": "4KN7cdXvWgbX7tid4dE6NUpLW2uAXjSefRjjTEkByVyVVcwdVAPiB11QTzbicpU9s1T393pF7DYM5LdTycjkgaV6",
  "key13": "33iKfD5i1jr69UfmmhJyMnJg5PcCBnswLFdcTFPhoZm2fWa8khvBwaAbXWggfo34M13eW8jyXYkHA3YGziHQfEPW",
  "key14": "5w8tjUJM5AJy1LxF7bFmvkddyMdJexwy9Bi1teRwUnpn2TTHzqbACZpSoKtSxV3G6eHzd5m3ZCPFjLgdnTfQoeVG",
  "key15": "4r9QQPSRzcx47n6hFrgxTJ3skZE5KSeBWbp1UXp9oDea6FwyZVycw7R2ojp1kweXKyH6yzJKctrBv6vxzyNJLRgD",
  "key16": "59GRFuTo4pD3kwTSGHtcBb5RNsiK4j8BQNrKsyvi9XQQDuGc1pPR1B8PyHRPcnWh6Bp7TboqiKtWTQwb8XEajRF",
  "key17": "32bR7venEUDJcZZcoU8Lohuia5uumMTYpSq1rTG58BwvNsLfpLw3Ar52WSvZm134pjAuYzDgPZwmnGedfud78Bn7",
  "key18": "2KhtUsE9AGoNGeFot5Rtr1DhqnHPyrJeHDByLz2LHmyrGjcgfTc4sBbmbxLghERCT929nPsfCjhz6Emfxzr9dEci",
  "key19": "3itKPJ3A2BEWmCNVcJ9J7nckbaasrWcfT66nprTPoU2CrWx9GrPfTVs2s6QNeND43Awf4ay1Enr9Pz4QWP7VvYth",
  "key20": "2LLGrDBgpRm86fR3fBSCt4iwKDcovJ5ooW5zEffYz3HRL9troA9jCR5nmH87YWecieJc5doAmjmEmCnsJ2p6kLX2",
  "key21": "2Y6Fs1GWnqwPc94it2t9sakWQdwHheFDdEdymBQrdGAR3sRdwuoJs1tuU9nZDR9a3n4eM6Xv522iL4AxwtKYvthC",
  "key22": "2AxZNiaRqGQ1s3s29cgQdMiidnbLh8M5N8e8ou6HFLk4mym8NhL6Gtqc7mjcGwkryki18F3LsXVmzCoQe2KJkGS5",
  "key23": "3QfaFvJ6kza3FGNSaSc7bgXMQtyztqSJox1YKtChFt6pNY1u5LecJhLAY9Rn4cMrscaTHnUCubcqqTJuEz8d89xi",
  "key24": "5RRUyg4mLypYR1oVyk4EQbKnahV6WxyiSRv6gDMcCKgQcpH55vytVA3m8hRN865bhHVb2HjR9M27qJWUaMqcSFnT",
  "key25": "2Ch89237EpmC68ZvfNcQLmYXZiBLtGhZ7q2qi5npgkeUtYPCojJzBBV8iB19mZvDPMDTZwZgRgTcWo53iTBFm5H5",
  "key26": "41smURTXTVY5QkSTrF1HquHxTSXTxoYKbpZJFjUATv6u8wpVSnDhuGTLTJseFzXcPohBoUb2j935g3kvttixrpTS",
  "key27": "bdnZT2TpNL3DPZuy2NdwnzJXw5xGh5aX9gw5FQ7Vu9JgKjoMPMbLFaXZbxRSNdWpz7Nd9AkPMew7BNgpWD2U9Jc",
  "key28": "2VVpLD4QqCDw9M6czKAhnqyrcTocPpYjqiBRaaLmB1eU9a4i5PFHzkZi2x7FVDztSVKv3bJ9ZVseapiKmUCkvU2C",
  "key29": "2oExCBxwJv571vLUqaGGcP4qdmVgbTFvT7T1FCGMuXpR8mXyJTXTj6gjEgV9pmh6cKMsFKCsYibG8UYnWzyoBLKQ",
  "key30": "2UqJJuzARRax7AYPVQjdbTmXVGBx7XpdaTiXhXz58rvm1RCNwKKj7B3LxTYV7t8bKFLypvM3p3SFBCvouAYxafjp",
  "key31": "2o9X9yrzYeNexnPuhyn6R4Cfy2DaxnrWWGujiLQg9WcFicE4sxMJoJb4TPo8G6ybBLQfVWzcLTSnBPSU7yFCEowL",
  "key32": "KjaE3T8yDFe9Ew58UXDv12WoramN3iJubDF9HVytDqquSeTyX7tbdnWq1zCHKzfFA9fGKcmFRB7saz4StspwXQT",
  "key33": "5MX68qxdo8qCXpznsxZE8NMVbAACPa5i2bMSgFeHh8wkVb79JiUt6Wp16BHVjchbPtZodfpcE1oCkiTZPxU8DrU9",
  "key34": "43RzzVHgTdYHXgUpTQpLVzRZYhs3H8De6xqV7kS43opYA46WnZwifKDSbGkjyDo1JQ62D6TRd2XYEPo7Gamvr3MD",
  "key35": "5CH5FCCjgyECiSHSpwhQLyLSvnG8vEtQnK58muMweKjx3br7p2aGT6yrr3SRhYRzxm7hnioAi5tzu3x4R9WeG5jr",
  "key36": "j5v1D7vbkFYqf4KDfND3VJtyQyJCSfdhycVBHZpBJkwdeoyck8BSDbTACNpD3GkrC8ZS4GXEEKmaQnbKmoByvEx",
  "key37": "67UDF3DLeGdNe7dQBk8KRtGWx71rjzpXh1kitUcohAj79eRykvyQxXprCRGJPCwWEacq4CbSs3KHn1d2NFhsH6VU",
  "key38": "3u1j9XZWjKTWqiSUw8H5T79KfrPFuqR5vdaGAc7pppz3AdbaFM1wmfLnSBPRFSFHhGgRSDcs5amREwya5eCvsErG",
  "key39": "3XwhivzndhRmVY6X4o2JV9j1MpefTP8E5AfpGW41CK1Xs148nLveZuncHPTLfo1XD4xs14iaWgGzBWS2DYQ5CMYr",
  "key40": "41urkex1cZYZYCUzZn2ECKBHNSzaQT9dwfzQ3fTozefUSCoU2CHNFDagdXhhFScTvGr3raNMzTn657kMEn1QRGC4",
  "key41": "5x6qgP2cNZEh7CArJ69wQeCNvo8onSmWK4Cu3ezBuNb6dGPGrSJnxQ7ijApP3ecbNXdCVWARp8LufRMw2iatBe8x",
  "key42": "2ZAaMxXSGYuta9vm26XDEurXYaH7yuFJDDWaynym3t4WrHccQNc82uAdr7uHP5FrXYEVPznYM5ZMQuzRiQezCsjr",
  "key43": "56jFWSBfTWL6bvWWaLFwtrjeWzKmPuwjbgWGkHULLESd4wttEU18sJDWEgBaX7keCBr8AYyuKbDnE2sFdNuTokJC",
  "key44": "AqiQmTD9qU4GhCYqr2cdMdKcjMt4RApZaDEfZnCwcycceA177dMUVAWdbGBchnkg5YCzfVwtjq3oQVZwBA2eDnp"
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
