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
    "CftAfwjKQTv12iqpgc7msbVU8snC9UN5JcsVonmbT3LoTHGQsyT7Xr4VSsNKVyMsAhAi1qHWTQPMPwkau7onse7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DH4nsXoowzFNUQU2TMeqBX42EeVMXtWFLwexAKjKgbKJxxayoPCmzHsXuNRi1Whw3opLkyVY2n1VWzQL76mdTAo",
  "key1": "2jKgRt6PwmKcZUPdnhoCzCfpKHGxNuQBmVWxgpP4wEGdC2m6yHeo1zFPXHzBPBjmA2pcttVG8HpqbgvWWRW3qKnU",
  "key2": "2Qp9XNseZxB8cqNpfGvKgNtVb2UN7vjLMHjeEndJVkDMpJA2TpCAHNuD6BvtxrE3QpZ92ag8BPeXu3h2UQL3u1JX",
  "key3": "36dNdjyvuszNPN4UKp9EScUcxgXKkC7B2GZJM6ki41k99Aj4zCG8F1vGBYDWYUPwpQodPgWY4Cp9CsqCwu5tzpva",
  "key4": "3xuREp8pfzrdyornaut6vGPXGsj7S4nWGnuG3p1KRZCgdEnXY3doWkEZF8YD6uhWcmg5bqVpAh1FpDrhWwbMgEUv",
  "key5": "2R5AC1RvaeCHuJp4SUFSaD9wLT7rGevdVjij37uDjtsDYvwz3RsCZDwkzxgz2tWpZKhC4mv1xBjyQmf5WGN6F48e",
  "key6": "gakRmvYWjAf7a7WGUJwPBTty48Vg5DnS8sq9EC7gk7Wrp5CThwadmXCs4rNhWyrxP26cr9LJimEoUGVviCE6C49",
  "key7": "63ViPR1yv3ZCPZSrtWRwjbD2uJEgEZ33BALtkiRotcS8r7QNET5E7DyBuh6B5drcqeexRTEptAsCN2WdSqE2GvKS",
  "key8": "21pRbpaMgHR7BcigKSSAnyEHihoB5XHPFKpv1URfRwJTKFDY8CoJi2u3NzNxo23jF5MF12K9cF46wGTQ4iNY6KJY",
  "key9": "2sBEWdkKXJASV6fbYttkyB23vXJkfDVQj96ijz5GtEEMAjZGLdF8xxjV912wMaUekoRy3aCUEwHm7kNmVbUoVYGi",
  "key10": "2uWmDiXESrC4Lkvip2thY2qJ65xbWhJGLUy1fq3sig1ZJ5cY7tJ2GC5Yr9PMK6kz7WngoAWpP7WFjwAz6WyLYqJc",
  "key11": "5gDZccoaTyohQR1WfLmm6Ei3uAEnZSopnTtxWnVryGss6h78a9hUrh81VDZSfo2DTndRBAj5ChUqNW9Q2QYnYXCU",
  "key12": "2A3cAQBPDSjQDHozPd2q6rmjYiVg71ryttt1Lo22UK7Z4iMyg8MQUFGpCcNqv81ibX8GZuW572TLeVt6vVKBGNBH",
  "key13": "3D3uGtRDX1YTZwc8eEuaVjt1sFxwXV7usruuybw1hqvnY7579ypWgN8uPZdgZkAoyc1UMpe58NWtRmpMAxz5qvhS",
  "key14": "4XGvW9YnNY9Rrgvh5RPWydBbKyv2Z9WP6PCt84CHrB8N46cnFFEWaFYSQK4rqZ6rVVGjgAah1aZrv2Lrkz3me861",
  "key15": "4sgZph7dn6GVPmzB5fJ5Pwwj5q6659p9uDkYyBWGX8MBVGxznezaVzfpnL6idPXY1ETYFAmkHv5HYL3SAR7qbKbR",
  "key16": "2BWrBPcrttFGNvLdMN2snj1RyRqx9mazf8yDgA5NyGvNeNrJhDEfYCt6RrsgjnMDUYtKTBgsb1HuUqyBMT9kr34K",
  "key17": "1aSXvx1DN2DxyR5JtTXfGt6oJpXt1fCTxPksDG52R2icRLAD4HgM9ofodH7NDaueQr8tjzWoukegcN9XGEaoBf2",
  "key18": "3UkaAiG3P5eTAbof5fGehTKkZVC9aR7aAGp2ctNKDNsE6Ks9uWKjEG7oTwxkmJwkcuJ1qcMrMfyDSsgwX3frTUAa",
  "key19": "3EY274SUE6X7bJBBRQ58Qr2jsGp7Zqqjqx594Fv9xHt2m4XUhhm6XWuvuWSZ9GjYm5qwfGAmEhQHA7PCrZfMKuPV",
  "key20": "3AG5ZvngUSauyV3tKqvWuAdLMC1qY6H6RgJTh5e57CmJwwqv6ThtQLstSzPs4L7EBDds774qxeTySi3g2SjMr44V",
  "key21": "dmjQ16WwATqsCyoygFCSBN1MihBLs2zhGC72mSwPy5kU1Yb4yY9Uw3SVXXH6shS8Lcj7G2seF8PnWpguKey9cGK",
  "key22": "5KpnLrhwygt2motWhTuw3hbVZt69G9AwVwx7Zy8pi8Vtf1CyBJpz3ac8Mjbf3gWnEzQ8M4QHW1No45dDQmN2PXWu",
  "key23": "5ssUo8BZREzidbVJ7Ygi9quEXipNDaG9mbU97KZX5t9GWu5hdA4WqfwdxmupDqHXkzTQ5iMSbqap34yxviNwPWia",
  "key24": "4gSudv3hxjLqgCtgzFCRoRWeoAFgA9eBRT58VoKLGizFG7gKBvN7GzxVQUbQ6RTwCWbXiPL5sktANbKxcgVA453b",
  "key25": "5g5WmyubYEGQgM1Nr38wZakX5e6uKbqSAjshGBz2Crp2MVNVHZFHVb8LavZFRSh115hcMsEEPsUyMQ3RDwXgp5WS",
  "key26": "4H9KbjzeAoq2YzoV6Q2wowum1CYSoVeJJ49DVZXBhVhTzKpGFLybYaQqvspLoW3pkrTBwD3vi3jfZAXeQeNkxaLU",
  "key27": "2UN1GTfmiB39cSAxgNp9PxAJh9V8Fq3YRapk6xA81QzQZzENFJyWPoAUnseRwccmohosuadHaNR9PNcExcHuWK3u",
  "key28": "zXJaEUfMRUnro2f9tqiMwDyjnP3uggFzrQh4Ws7pKyb6kozq3b17rJn4z5SYP5F23pAcRDz1AmwmsjTyeNwAwe9",
  "key29": "3xsE5EdqDuJMVDDZkLZwxukb8epeHR5rM4KF96ZYda3b3db8kbWXeGdCt6QdmB9cd1R6Li9HWagcV9m3M2yp2GR5",
  "key30": "3KtWV2LeLzy8Jy1mtKsKg28V43QmjHFKMAKYtfp5wEWN9rxWDePx8Zy8BWmhx2jdBMB7Q3wCrDM5uH1QSX3QKZsH",
  "key31": "3JzjtSKLYwBPVJUSyJKhhAMgxqMxWcvDWdRmMPjNGW2Nr7SWgVEzVovCaC6BG7BYxJUckKj3Hw968Kkq92XYqZeT",
  "key32": "3JYBbiNNvxATjtdXcu6Vs2VThT6Ew1NXS87cd6vCoofnTbQ18Bf8u5j6K3bpVs7xrh9uHTgzXfxS5BamHmdhdwdj",
  "key33": "48oSef1NMWxsWtF9TU7mGrJBi6fcDE2xgN64TfN3z6jquekige91tfy6sVdRD5CUiCdx5TMFnrMTCRTV5fQdLohv",
  "key34": "5X2UawCnbtoqR2jV6eC5z9nghZpuwBV1K5Wwd1Y8bem1a4SsyZ1LvSnduq7wRnVPKabkNzFCyzXtvUtbA9N7WF8J",
  "key35": "4xyvQJMwJmTPdRRTj726gd3rNk3ys59R2XWNhs4deQvkBV1Bk1SrCHfH76ivasUENjwPAtwTydBKNWSrPYj4VZRP",
  "key36": "PZZQthTWK6VuUAfsFUwkVddvxXN1jkMPxXxSqtbxijqCSuKMUu14Hj1vCDCfVSG6U3FgVbMjW5TUrzDQ1Ycnnyn",
  "key37": "3a6SbENjmXMcBLbnP9j2YAn4NLgMfPbFE2WTPbtdMyXKYwczDSSP1ajASGsLHkW3ftkFVHDHPbPDRvVNmEY8tLi3",
  "key38": "4opc7vAcXnbn7rAxhkKA2MdrTF99yy1ebMU4JGL7Y9dW7UuTEUD4PCe8ScYhxPFu68ZYx8FMZwiibZL9ubaetMyq",
  "key39": "2vYnrwLbbmwgwPC6Svbaz5neXGuE7bvgtXZvNXUVGJp12qWTw8gZ3otpjk7hYrKFcsnhyvSd2zSQ1TzadfvtAGwe",
  "key40": "2VArub2m9p2gZiqJMpVCTXFp6J2VLJpP2VSfju5BgFc5bsbv45os56d1ZdpfaaYXpX1mPnYt3Bv4ih4pwJ4TGhgD",
  "key41": "56RT3oH4hiu6vVFG2Um98J8zGyiNvNaoHNkUJDDUP939XKRXZEskYbci8ZjAVpvfTVq15ZVbdBsc3UeiFUifQvjh",
  "key42": "5JAU4fd7FQ5T4MgHY1Poq4ruKP1j7NQCYhGQHeRrj4Gapj6dkxvPQQTmrjCrR4Nn4qHNNscNCxtbHfRSVZVNZ1Au",
  "key43": "QckEeDkDSU5YJmva4cNUSgHf1oqKatu38h5VLVt9FNvqw6FNXw1WcUv7sYkZwBw9RjaY9Z57GpWE7e25muZncb6",
  "key44": "3zA9Sjs4RvTMDF89VoTw4yXM6kEonj7e4N7V5oFDuJtRsHpJ4WGBChEScek8UgSRfrrtQZwaKwjcqnGQGgupDqjc"
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
