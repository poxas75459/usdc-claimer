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
    "638QSnK3QWgcqofmTEh7i5JTbNy8KsVnLJsRHTxVkAqQVPPAKn7rKfeQp41tQA4g7A8qJzbCaSFTEX9jLPnUhmCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H4SfheU5wTscrBJpzzp69L28j1mstMuwLEiufhQ5FBgVULw41JSummQZciiPqppHp91ZgAvTJ425HtuqHaJe2ZH",
  "key1": "5oit9otF4zzDwKeUSEtVSnV7vtgi4kkBF4v4Ff6r9e9RHPEy5fqgES6gzvx8xe1gNYNVSW578t4ZpLPMNSKRrJyh",
  "key2": "5Uf2Rf4KCz5EfeE8ScAiGG7tpkWXKxjEhzz9KghaFv1Phym1PPgT3mYAy73zZLPo59HQLB5Q6A7dswotuwRKE33k",
  "key3": "8QxPknKdYtUVnXv8yx3oTvw8VDwE3WwGNJJyhUsr2bTMFkQfbJTUVkgpb2omHqQxMzGwiVTnYZ4YywUcecGLfU2",
  "key4": "UK8eQRbB8V2F8vW9Ygm9eRQeV8PEeHyJg3PYcAY4una2Df3CGr8W5UesbTXonkCLpVJU9NKM8dALHct48kBGqHA",
  "key5": "3iWkLKBt94Wvs6dgbng7Kp7ukcBWgn26TK7wyhV47j9DjGFP5F2Fotr7AxEMYcztLnVMmqQihA1mjMLhNmEeN1Pq",
  "key6": "4ubfs684uoXsQfBUaMUjqLPEh7sYq1qfETKjPhcUh5MPUZqJ1G93ZWBXaFadVoDpnSY48pKPB2fv4MUbTX7dD1VZ",
  "key7": "5QpmSXkCLNLzFohPKundxvhtbkhLov1HmGDY3mg5XZBH5RCFPw9J3Ffs8VabhrkWfxxwhG7SfGCkoJM6Utrb1MKa",
  "key8": "4p8Rr6mfPLJAFBrbNRyAic2HNLo5bS8wYAM51aMB9YudbLffXtCBVfAo4JyXCwYVXWDUAK586mgkmLGF7G9RyoMo",
  "key9": "1rBKDBJcKQSLhLDcMfUouc5WuhfYsQNWJqYi7cPpA46nDPyXYT3qwx5PcKNRZqP2Ev9f5wWCZiAiCY2FySoQVdC",
  "key10": "srKhPLZ2hW1GpinzMnV7g6su2SqK5EFdtn8TLNp77gRw8an4eYixWfrfkrQRGTBz2pk3Dva28pac1RAQojySSen",
  "key11": "3nMuMcDisZCHEpJmgY5AmG2yHE7np2shwERJ28ihmthb9FMznPLNQDFEDBZmRv2my4kefGYwFrrrBMqYBR1AXuWz",
  "key12": "5o2jK131qaWVn6osHv8J1fFs66uRbKHQgvZzKFaFi8npWVyjDvkZUebzu5VQRHBQ15pAFZcxZxRqc4aH1KHHCEQM",
  "key13": "3oMnzspAVGsLdyKWTo3kKqsX45xXjSGSVQYdNixAbkCSwxcfbcsPa2tbsUG5kwvDNT9fPWD5ETZ3587ER39gBRdn",
  "key14": "1ZY8A6PPkttGeGFrG41HN26bhvPn2QiQ8ieA2vXLs4P5vrhWePwrwwpbSZoFZFuyomXoSYNGDpZETJPkkZaU13Z",
  "key15": "32yWfWHJRXAbeweaYViwZJQJ2tczsy3d3X1qW8mFzzdH76BunPt5rqrZXPNNwKLcFNXgSk4ba2ZAT7nCXmZ6cubk",
  "key16": "5h1YoXfS8pqCwH1nq6nF8obsLiV6mhtBtBccc1mGrsZMLMfivHcaq2VL1qCbDmNLfCYvJK8iQUYzbYfbjuNfLjoS",
  "key17": "3rQBKBvxMgKFRFS5SSMud1X2qCJ2DmrtEjfsc7TGWGpFfdPtR7SpcDZ2ydSedt9ybouG5Tz83AXErUR1bizwsKtq",
  "key18": "4X1WSRmdmGx478sp5UqT7Apqe5CBovAmejgZ96fWsDnhR77bkRbTRswBbPB7JEHByMWD3h1d6hvm7hQ5wPairUqA",
  "key19": "4A1nnycmBb7nEHmGDevJq1xuwgjRjFQ41RwwHJaFiVqSVpdmQpPNmdentzQTgQM6eYY2CmFPnBLCe2GegGh7kjPm",
  "key20": "2cryySWfxCUFNPcE6yD9WyM856xg9D5ne82CUrqFbmjV8yQDX3m48D4GQ82V5fVX8rPgjEsWJA4EULKp1piTzwrm",
  "key21": "21SaM5rk3rwnoietqyKaEaY7cPBfUWKq1sTqx6VFAbrzY97AZnvseWMbGkrTEcJg8im8JAyFdytCfEPH5M9y94rW",
  "key22": "24jWVm5YeUnEMyRou89P1aec6wAGsxPBUEQuTYNEQJPiGdYCHJSvpUi8hZ5ZL49V2Q9y85BMpcC6SXGXc8YGPccZ",
  "key23": "iFY1kiCRBQbBN8pMgQg5yBuYNBkxHbnwxyh2EncGCn8TnTgYzypL986tRg3WeyC3h1ugf8kZqjsk2HsWszpgj8Y",
  "key24": "3cHT95R8s4ebKMwvzbnnYH1rbjuZscA9Qc82LTUh1uRqZcGP1Wh4tmJWydK6ZBxvKqsWTusZ58u1NJnseRxwSpp9",
  "key25": "4UrRccYpXZuEEzt6PUKdpTxmY4KAD84Jrzwd2D99PttBsycTsbgbNQJ5xMK1tBuSEp2gY6iytT6H5Zkr2mGzZggu",
  "key26": "55KY99BM9Lhk21Z4UmTKw7D4t6RPQKDjM1tYo5Yk4rtwr2x3dcARR1aRGHrojg4tCMVgpmzz3GCUY3JLgFAoDFZE",
  "key27": "5RTc79XJxi9nFDNFGroERsoZNNmXJCxqeWm1btj3mRSyiEdsS7VcyZxPJ7HKtXwKVvjtr1pDTaE2BHWMX4q1JPZp",
  "key28": "4zFxAsoSCgoRSiLT6rZshAgjfAGd46smxKpdaf499bibrZWPujE81r23a8czt2Eu2zamBQXTF9vPbtnDfp4HUD8w",
  "key29": "4FYpfRGLH3j3KA5KQVXqWvQitBVNhpu8NfvNw1GS6YWeDg2K2VVKTsWnubSeAdmicus1V4zAcoJxMYMVtgD7LZvp",
  "key30": "gY6MgFwyk8XQoCwZPYJDUrTyU3jhh7qMEwZc8STezQxFrkKFmbBpKtHyXbHbznjTJCgJHBJ5nPT3dirxincuTci",
  "key31": "4psbfp2w9SyCVjKYvsGbgB8NNPxKcLgaL63g42S2oqxsTFxmR74hFaNzB5zTV3qTVzeuvzf2yyDC2YFcoUdzNW8c",
  "key32": "2GtSUc6jceEPCGePNxMKVwNuBo6NdUk69bU8WAJAN1LSLbCVYgXAM3xTBBnUysxfXamKZDhSPQ9zee55QQyhLYug",
  "key33": "3iEcYQnXjSNcDQ6BbFLJC2iWWjSYunFEJDuXK2gKBcw46eSiceuJy2xVtQedz6mSAi5udbBTTEckAB6ue7RVn5Ri",
  "key34": "3EnTWnwiKMAM5p8FongndhQdYc9gHT91n7bwnAGNt12EGysbGow2FkiF7yAaZVrR9ErGxp2m96fn3rVcHmvk1ie4",
  "key35": "2iGn7RLLBAeQf1fhkq2iZC6LEPfRdtTkpPjhomky4Um7AqguGugYuD283LGwFmNKtQdSByrNqoHtgYXZ7v73uunk",
  "key36": "58bQ6kYLuitPGSXamzfcWfH5Lbz6CQXbpn4JTb4qj89AVmzaYHJ6hmkNPjdG3VBamFh7qRE6ReYPLSTA6fw5vpR",
  "key37": "3d1bWqnbhqDnGo79KNPBH8BLy8K92FXE6aQ2zBmCKmgg474YULE6LZEJqiY9qxsMDauvtEZVttLjwwXrQUXnMQ2q",
  "key38": "3SwMrexi3cvy2vKUd6mtUAJB13HZi8oFtSXob1vDPXZnXEm5zVF2tBbmA52Jqsw4m2jmRMqjfJCEojJhixCwHN4N",
  "key39": "2NkurVzjummSnZsAimXQcTTA2KxbW8krsfcvjLpnsVzpJ9wJDZACdJUg6Np1emBbDvEn44n8mfZbAJ9hqzz6hV62",
  "key40": "4cie5Lx4HSZS4j9BMdLjZq9VtjL6pcTRTcztjFqvZXaZTSYfd94PksYkcZYM9VhE6ARZF6aKPkFDCFkk3moYjwcA",
  "key41": "4Re48RTwpVjSfYxfW1Qm5CvrJmTW4pwYgd33kHsRrXyZiyuCF3QmZ29RFHz9UVhjE1JzSne5p2TeKqQyMUeFjW3h",
  "key42": "59KsLQFaDx6rVPvD1yFNSH3LQXFGo7S7pGts9Fb4NsnF6cM2coV6Eb9cSYNKY1m5WDHDfZGcALdtUjJ1cjpXE5AV",
  "key43": "3R9dnvfNu9yS9d71whJAXG8cdQ7dTqjnKh4N4kcYsoi6FqDUfvrEDmLZ5CYEoTNnp9S62fc5Aoe6X4mY3r2kBeZQ",
  "key44": "225WhRY2VQfPi2r5XjZVWCWuNtEoSCNnrLBbnk2Uh32924vy2hJ6K2gRH1ERVgyPWx56jVDnXLFzWoNhwpYFu2dR"
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
