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
    "4cF4n679E3WFF5LXjhota5jtkZHPqKE7wshcFb5Damc8HpS8ExSfHZQeLAdQkFARwe7AYurvS63wobQdnofpC7Kt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oM3vfgznMznUDXqiKMC6dwWvgEg42fCX5hJSdD7JvbWm1dUnyfVPMsuWZPg1VYpFHL6kWzXBEdHg2bSuiEzFcbJ",
  "key1": "57ufSkDskuW8Zrdc16j3Lc5yqSpeEdiXxqRai2CndTaQzbWvVWgW3haGiAcscLDHPjuRrisYdhtjUZCt3Zf1MFRX",
  "key2": "kcpx8hvS4QNy9eyxbKxttYYK3DEpAGGzXytEbnXXW9NjUx2ndi7WkerFD1LL8gw27q7VcaxWcyd9hXG6swG96Mg",
  "key3": "4u4W4T2dB3TnFVgQ8nx4FtkjPpTpkqQqwHWYtXcaLE97mvsM4qGpM7Kvc7cCu5Lb1YYiWRcHbpQ9Qwd8F4aJcgNE",
  "key4": "36D3pXNx1wc6U9J8CCnRbB7gevjkHXR8LXAY3PPQeDQMYQqRUR139P4TbZiLpjM829XgRjKqTCEciLLcMCdA6k9m",
  "key5": "2tQqYu62qsymM7swqWtCjV6MXnLDFcUohsve7cwr8gE3sZXc4EHR9qkyzV2VLZKDhnpjZUNWvrod154dFWFYEZYA",
  "key6": "5ApxK9RDVVQf8KZwD2SxcAtDHBR1hc1WxSdC2jyxDqt8hEZN7LrU92iEwY4VYRxV6dPGiyZBLS3fpwi1UFuqQKA1",
  "key7": "NTrivrq4yo8kMBmKy6N2w3P5SCPH2PETZwgdw7CbyXEdA5gimoyeYWUMNLe5kiLDsTjmnSN92yNtHEareXmdxMi",
  "key8": "r6ppngVPFMeyPxMgspSweD9qcbaXZ4hCb2WYNk7JG93P6vLenKFHuUQZ4N44rLVMrYfTcfiKZ1UrbdCoCo9qae5",
  "key9": "5niDqtujLCaKpbmfL8PsTwZnhMdPbV2gSorZ4RDWpHdJRK6QF2c9GfZiqPRB9rb6fjnjNo4mssz91grLe8imr5aW",
  "key10": "3PqL32Zm3rd8pvCQyJ1dydSPzzrJtzCUaEoXpcay95obkMyHtbsBk1SxoBDp8QUrYJJ4dKJoUzx1rDDpSaUebEQ3",
  "key11": "2WcEsBLhqsQBMVodnvQDoDatvxxHkCwkFQhuduGx4sggYXTBsNRhxJABahsQ3RRUrVvY5Lrqexct1h9186Qusjo6",
  "key12": "2BnVJSqywX69me4CZ4dsW3iN8QnJzKPSEQbHPWXEqz3Q1h5Mhxn3vMKL7fVDUitdMi3XiXbR9CgzqDJVp7x36Vnu",
  "key13": "2pW7gKHdnPPi2rX5UWpJjBn4sNbVKiLvjhTuSHxL3cf6efDKsvHKq8nDZLimp7A8nLzggT8jczeGdVnouEky1n1J",
  "key14": "2tnkd9a1PnkmhkD6ZUGzPamj9NNcPiQY8Ynt9VPb2mmAUSuLbcseVDeDhYrcZ1CaWLpKtK9HV3tWEABzEk8ztRXG",
  "key15": "RJPRHQYqW7ckpGF4q4JTGyuQLrzKDG5vjsRyFGNELN5Qj3fvcKgewdimSiofB6P8jkGzRKqvXBDNGGA3BsuB4AE",
  "key16": "5W3guxdzUmhxeByY4PAGZFoYSZk7JCitRULahSjXhZh2Y4RB1mPLniXJp9A2J3Gpipm1Sui6Lpvzm3Sivpu1QQi3",
  "key17": "5VxivUpkmESE49e765XJH4yqteobumRJjU5oAQKrMTZFKRAQhxZQpr1hRBifMPCgUVCbK6VEH5oLV7eU9PYp914o",
  "key18": "32gAsm4RGvMWoi6VSrs7tjAYkxdCzr6pmgJjqZvHy45raNGfyPDCYrDGiVyYryVA8wUYUuuDXjvCo1gVpBk5gheC",
  "key19": "BS6VLCVUUW1eLDde1nfc3EqQFjZ6FCwLDeXgpsw15v3Tcgs5iMU1mh3dKRvdk5BBfesUQTRXQrxFAwShPxmRyBn",
  "key20": "c88MxGn8VMTeszgYWSEeiB3wDF5rm7wfcVHCCL2uiD1jroRjxEQpne3S1ccjwoB3FjirKhkeqnCMdGeXcLQHW5G",
  "key21": "3zXCgisW1h1tMTTyXCzVLRekjhVhv6pjNQjwm6BnGLzJTNJHsMgVtXJKyceveuUeDvXeKg8wBHu4YdULJMzuoF7y",
  "key22": "4AQBw38H464twUVKRV3mpR1enEBN3Ve2R1Dr98oUhg5VBfcs2kmXtxV5nyBhq8NdJHaYQRRfHFwm5hKzpXvzu7XZ",
  "key23": "2AVFgSXGW9iYHFQPa69fHkqJugiNYqs7EDmgEwdxSFqPheYmQK7FPvVNR3VQhsfvQNt4AxyDus4vo8B6chBZKMBm",
  "key24": "Zy4NifChCmGihruCumkh5ssujRwVz2dxu2SggX3oNkNaqKVfoY4yG73PCr7Yhu8gnLHji6MCFvZwwGAHzF61FHg",
  "key25": "WuhZXVJjRsYM57uW1kqSgLxkRwaSjk3NWcTspiFhs4Brwr1ijGMVUPLcZPDSAAHRvi9AWFYpDJsg3HtgNZehm3W",
  "key26": "ZiXHoL4QfbMvBpX3VTV2FkY4cmV6DJ2dvBkvdGBRJydVFZxKUVzRCsZyk9eU2zAAE2QY4QpwXFKtuDFUWnAii7j",
  "key27": "kweuCQvrD5btNVMhrp8N8pCARbW76QdR3A44SfXnX2zemgyaihEPGyPymUHoG74qZuYv8U7bv7XNzgGYL7rfTH9",
  "key28": "3sVsYhthLovf2Cxy8QrqinbB89N35eLVYDmHXTgrKajgWChzSuDz1uUquwToiMue359V1NoGVL6JuQRTERu8nMxE",
  "key29": "26SdDBHpTCezeTbufjZzdXa73r1EQVccZqArVBFGPqCkCpq8fBn13tpC3akZLDk8XapqZBqTZHVuJhWcPKPFC72e",
  "key30": "3tqoVq8Jbzt7ZgCdnpGaAWpYdEQL3z2zWZ6AxWUVsgKMBxLiTZhXbEb9wbuWmXN9b7v6FWELktcQ6GBEiUH9yhyW",
  "key31": "AbyxaLm5agVj48dycYowiAq1CREivmKdvqcfoqEBbDcx2c1zLJQY5k2EkLVSMwvq8qiUqeS8ifg8nQvUhGPwpHq",
  "key32": "3fdb2R1USsixA6FP1iKQL6b2PeYtWhHcKhoTiASkecXDyKz8TtxB51tayXzSkvTib5WpjciJyXiXNt4aN7LRnLst",
  "key33": "3sjTqEpAMcRcuteeNmAbQTYsNUiJ21irbD77MAji1e21Je48xVdtThgcL3aimxyBzhxAhFgwihYWEy9f7hJQqXYs",
  "key34": "39JsMD8515nZM78ctScpbWeRdbZVnjkmP5J3zc8bhAVC4brepze96oXqExmyC4XpLPWKnKUcKSAwWpJqzkCBYAdF",
  "key35": "pGeVmd8z2RqtsLSWZgpiLfTnBsh4GvuVS35T6FnBVJNUkWZp69iZdozekf3Cty3iPCXySW9jAd9nFk8uGzLffUt",
  "key36": "3mHQUUnkTKqQiT1u6DGT6LuSwAYFquhwRdGPGy8Ku8Tcxvu89KHtT79v3Cnp3Syh4zZ8W93tJaFNKKzJWfyAdMFj",
  "key37": "3biUQkaXRkavdcgyQUTeTfkwSgWnwMEGAqCDew2DJczwSLwztZ6Agw9kxhc6pQ42EhXYSHdTkLjEs2YvgXt4gBPt",
  "key38": "3P7j7qNCgdpJ3CiubsUixvvvymRWqGBF5NVsNSjWUsRQCQ7taUMS1Jom8prEtbpRzED6CtUV6T6oLCCgqN6vEnw7",
  "key39": "2EsYC7XJyGYBCaFbwN3QwxV5ybPjfUEVhYme7u6MsH9K9E3Lrm4QnfENdEvvsVzndu4X3d2B5qUmpFNt9vzyHWRB",
  "key40": "65YBjsw4Gw7CnLLENQuMR4z5dApgxHpAczCWuLAh4NhCzQPzubKWQ4Z8utnmfTxMS725oCgjiTR8svM4uE6nDaoa",
  "key41": "4QTByBN8fjzP1sy9FL7ShakoTKXJwZLegmrdHVNSAJP8SgAVccAVDFaedegkhmiMnEDUUmjueGas7eBsVjA6FgDL",
  "key42": "3PVVtR2q6FxMJ9xraHUwTHoyoogcWK4HMFswgjyi3yneSBgwfnM4UD22YhztdU3DLu5JyWWzKJN6kNhBxL97jkaZ",
  "key43": "5n28HLdegyz4kvPt4nLgiz6Cmgeh2TNRaQ6zge1fynoxfP2MKxhmAeZnxXctYAxNbA8KskUgQkdieQhznEfDaY99"
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
