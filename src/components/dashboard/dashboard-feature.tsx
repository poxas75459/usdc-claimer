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
    "5xjVLDEuWkqKiBvzePVTRDH2Savfmg3ViTvrTJ3YC6TBr7zM7MDyzLHpXwwq2rzsR7GqDP1wP1RM3WNtxGQetUW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kN3y7jmmQDWhdxcXzq6Vx17azQdzSPPaJvKsJxBx1bkU28eRWQiHCAy9XAD6UiiaYiX3S9tfyR4UNcy2vcLVQVc",
  "key1": "4bMv6Kuxgqzq2YwdTr178aehR7WHnxqahW7yRMMZyoCCdr2VyjFC3HLuGU3CqwoZqiyfF4QiihE4w8PoDV1V1snE",
  "key2": "223NCZGZea6Tchyftby39YaS2sBqxsLhFh3PAbYKk4Tcbo4xAqPxrRPSGNifdqYVwah947HCAutmA6fsfr58hCRC",
  "key3": "4o3McfjuqKgbtKCcKTQfeY6vGy5rBTQ3mKbu77oDDBhdu69kGe4iBw9xQFfXrvPATRdQYYEiftMRQnzLJWCRjr6w",
  "key4": "5nJMX4dLP5jeyVz9QxG9t3ZUhLNPqeMfA7sP6aWA1VHyshdd5gHAAoLcrnjXHpBgmqnarTEg8ywNNDtns8LaT2zW",
  "key5": "2HYWwQDxaPZBF6X4JzHqkhhf8eeXz3KGMpQsCGt3f5EQfMyT62RaQxabCnLQJYzsrrgDtv76iGGJcEf9q97uBnrd",
  "key6": "7ETZPgi5jYQDgZS8cHT8YmmzYXtpQDaxmBgfh24qhPxc15okYPMouRwJEP6gkStUFumngzUVcxfxwbPrzhfBNRv",
  "key7": "4dwCZkMcyubpX7jFEeRprmaibCqFsVvPAMY7nPA7rcj9AVQ7TFg3mXVWCLPW7YdFSxERFwjJPRyDqmzmTs2bXssh",
  "key8": "G9LQurTBkABFG45easz89FvHq9RThi9x8ap967gqXiaUXoNFZe1DXmJXdNK4aVrE1rVKaNpu4WYkjiH1KU2pKSg",
  "key9": "2ixpAcjonGcAT7ZFhujHF8vVA8EY1esztqaXvR6hn9MYXk2FfnbBcXc2NJxLDoU3PhCgvcgv3d1YgCxrEgxVsdig",
  "key10": "5hdgSru7BHc73i2VEgi1haRTjtzv58NjHiuj63ZM1aG99ufCRhMaZVxVNCD99Po79szyb2hNXnB76EoBP49CZhGj",
  "key11": "411CabGMqWHR3Xm9R97hphWWJduv99s278xJ3ThJRXrGyzd27Yb8CBovUUfn33G2x2GL2K5Z6CKN3vSqH6imccFW",
  "key12": "5ZxTZUZ9obMWDpVn6bNZAznrwdFZcsBrSwkMabYcBGsgqpXEosiJkmQbiGpVtpdCNt5mENiEJgKu4Kwq5Y9fG14Q",
  "key13": "5hhmADh2MAtXcaKZqr6fU2BSoakgPykR7jq3x2Z7Cu19ByXS7NdRbmU5nL5kWSz6uQbstUSZ4FYtCNaTjYKmDEon",
  "key14": "49q6xhMTHp13AFbdzFb9wtT5i1Vr8KDqBXK2sxqf41FEuGHkDtpDhWevQHxUBHhrSLwBtDUk6ueC93YuSRBvkeSc",
  "key15": "o6zRKiybZTp5kyashwCjDgVTBqxx7DnSWxZd9G2codvXx3MDmqL7739WwUjansEcwCkwYhd5XhpsGS68ZomK8d9",
  "key16": "2ew5THcnmv5QKAwkPTFG4JCKAwbn4x3NTN3AW779aZwo4LYi2WBU4Jq3jM2S6VkQBMVFSYWXaiQbcWVGwLJjfG7i",
  "key17": "4SEWV4g9Jxqp1igrjUVTTkX2MitMngQqjWceKm4hTz9GcELa524d6CVBFMxaJhGdeWaHEa9t59GFazPmBWZPhyZx",
  "key18": "rFoNekqrfXS4xzqLw6J6xKTsZeBhYqCQWoMvZ4Nezyg8xD4UWP9ZY8BodiHhabhiyD8uSKsbCTCxJFVwxcocRcu",
  "key19": "67ipvHEv3WQ6it4iKS4x2uL8vq4v61b5G2iVJh7vDZ67haHK7Av1pvKqSDkWX4NyAig18uNH5A6NP7f8ttXnDts5",
  "key20": "323hXx9WVWovwUgo3ZauSkTpURzbPFmsoSBwMXxS1re3Ks84nkK2fir1x8kRULqXyR7FN364Uqnda1H5UB7qRdR",
  "key21": "4TUrTXqeyboYUhvrcWkHM6QxzGKaDCNL1ADv4aUweNwxGmzNt9dWZarVXGf975fYhUpbXsVRipmzuZ3ANf5zBBH2",
  "key22": "3po2rYAoemmHRhjEuRfi7rkGr8DbU5hgszGnUEDoLCh3PBfBrdU6jYLjNsVdcumrMvCbNYgHP5VYMXc966rxbAkB",
  "key23": "3XkJto3TCwPFD9THNjUj9qcxWqLsvbm7czWKYXt5PEPDbXFnpxecjUh67aifrjY9JnRPHBSGv1BM1efsuuhCs7aP",
  "key24": "B3egP3qmvFnexyWrJDTBzbfYhXJBGtZd4vm4SbE9icuW3ZvVngTwHeRtVg1uj7E1nYhd4qApdZGYCX8AsZiEeKj",
  "key25": "5mmKNEtZjb9J85EyAr7TVsFKND8Uu556jsnLB4J5Qem8E91uqgX8fufzrfBYvKbQ4BkdaRhmC1JKys8EhkxBgpgV",
  "key26": "2Q63Z3VwF3ot1uR18XPx4B1dgDY1f96n3gJJ8y19hdp4jGEEwmFDxn2gjQKA6WCPkcm9mn6bPvH8mQyiPcRjsyNJ",
  "key27": "5255D3rbkGXajyA4zdGWoepxNiTpcWL1fA5HCvjhMdWMUmqAV4gtiBiEChWMsPBHeiyb7MjG7J9nskSPCzxrHcEW",
  "key28": "D7fsQ23PA34G6Ru28GzRe3vt4artC2HcDbyXMCUtF5A4YrfF8FGHUcnpRHSB1s3a7DoACBnPtnN5jMh2Y12CKjT",
  "key29": "5zsaKVX7aYrPdW1hdSUr4rkxxaAvV3faLdUqEFVa8zj23xoMYZTqXUXgRuUnm4yKtYgscWZpbgms6jPrRY9PvTu1",
  "key30": "vNUYSgFN2Dv2GY7EkTsEZ4oVMAifQ9BaMjGibzhN7TBZHw95xrtwBnZ6KwZczbExfDyumxqWdLWkU4vdEs7no5w",
  "key31": "2U7aXJY2MyvgmovNr2E1Gkuvv7NZzt82v85CsH1pdagHZ3E8F7BTFEaqgxh648CdKCL1124Q6rHf1S7kjppfXbCb",
  "key32": "3ZHLJ1MfomctCCRvhkFxccBidkzsk8ceuShMz5ZrbKgXyyYsfFcFii2LA7B7YvKor6KzmFp3h9r5dwPsK79vHidV",
  "key33": "C4MhdSEinJTmDRHDkSNtE1xE2KmNtHw1k6SvkphE7VUP6BHdTJ37mAx3aPCSDxM6UbSFgMrkHqcWsgqv75hSA49",
  "key34": "34LCc4RwARhnQGrA7S3cBqBiPWGjbrrbWvyoSi3t8TPjmK8dFt2a2sbdEyB6txxnJ69T3Tt8qvxSXGyjXP5x11Ju",
  "key35": "5btu83R2rZF6t5vpAZERQuV5MGJpkAEgfmsfF9rHYeLs5a5ZZCqJaqR3caFV929f18eeZ8qArBxZbUC9w1eW3RcV",
  "key36": "449YBBMucyxwVvxNhiFZ3Ksy7hAtjfA5xvQRXBKNa4W43x7fNcrJG5pZEvJYJQHh9Z93vDuNrNGjtB5tCnbpFwqY",
  "key37": "55NmcDizAJ1YYutnfsfzuzPDj7WGpZmCs78R24Ksow1vPc3YtnYqPdPqhaLKdPKMJCLcamJSRJKFHKX6qGCpAnhY",
  "key38": "perheAVV6Z8B19PVCrydjH7XBphcsL1ZyQ9JdfwUk23GRgfav6BGukrEkRYuoT2SVKXHzPBx3KzorwGaDLa1LiA",
  "key39": "2Zs1F2Po3WC12F633QfjJWoziv7NBtjDKBhFVUMrwpikW7rRyZ527hgT4P8SNafkYvPD4Es4u7QiRHqsEpquk35a",
  "key40": "5Ek64owy3KGDtHesnw8squjto5QrueGC3ZxsUBAbueuXg5b3KEsYhX3iChVamzHaUDSCbduzJLPpe8BdWbKztT3j",
  "key41": "5GyuMEcpJGtW6s5jR18ng3jLCNKAbaB3Z6zJh8VX6Bp7EygoB2CAcigqZ1dnPr7iRXn2TEX3cVu8N8THSCDrs3nQ",
  "key42": "2UkRZXYGpwx6YE3VFyY9AouNdf8Ty79txZVKiAq5xCtdAvKzqbAuHPoeb2Eyd4TBED93TdN9RLr7H6sy6hJwaWRm",
  "key43": "54YFrqqHvp5ajUB6GiLsDcxKkXd9xBq5cd9p71Voidrs77juZX5twQ5uBFMUfo79KV5MWAjtmhnFDtnsWRk83Qzr",
  "key44": "3D3VatdJc58toHv5ByZxH8e446xhNJZJ9mSs2VT9uFN3dB2qHwENE59qhH2UzTyZBpo3J1inHuZTEFwWkc1eBwcH",
  "key45": "2p8j71WxELYTzab3Fd3fqiHwHPBYLFqTZCtTsoV52a8wC2U6VaKRe4Cjy1FR6Zca4DuehkCzBtCDZKz7gLcv4kcQ",
  "key46": "41hj8u7FB5iHkAigt2CX2oSJqM4AStEhxBy4yxM5Fm7zznGXT38sdRYAitRDMbcE92hSF1fGYGFfedpFRGsWWPWX",
  "key47": "jHQnGk9Xi1Ztd2bfuNwUCx2Ly2QXj3P2BHjTGxtrvenL7eGt1w9og7Y73c7oVPRBacfk5mg4PFuXo22ZjJRjy27"
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
