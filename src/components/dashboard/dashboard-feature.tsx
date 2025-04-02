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
    "2pQDFCCWrptZfXdNkqoBAobLqoGRwQuoaTC6MEfWaVSbxiqvHrzwP7bWcBwZzdUeFd8GuCk8Hjx6PttsUrWANKzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d8p2y3zXcViTtKkrurj4NPbLYJikkBXEzheg5DErUtSvBcgYTgiorptsVuwuzhEPfk7pDbTGAqAWsKwEKMdBCAi",
  "key1": "3GNGLp7hGQJrUaFKQ72vp4G2QZu5MDHDc4tyfGQ8RKRrGhHRKHRz6zRebJCdWQjqw2NibMcH3xtowqVQ3RXVRDdv",
  "key2": "Abc1U31zEq5rJi7iFo36etHXxULmSwHCCrmfPibaQ24oZfbqZpH1y3dnT8LkPeV4NgetcFhcByyZWNb5Rstf23j",
  "key3": "VTUYqLSRLkhwFMFtsdhziDs43hErLUL2qYbEhq8gtguiDwUF3UnHoJg16pzCs3Fsujksjp22m6fh2hXymc1fTUA",
  "key4": "4hJj7kXPyBZz972x8KEhiTDHetGVWacYpxLJFnTCBgf4e6PZUnp6cs2fnzSf8EyJwGU5eXxjuQnQntYh3gV8rQFU",
  "key5": "28HcM66EPtwNFovL1ofupmWsWAvcADtcSzQKFLqTScbqGzBE5UjDdG7VdFXpQNmcNG8eYvuLeMYx5MW7CpxSxtjM",
  "key6": "2M4QUjzYiebPzBFoKdgJ36DkAsGgxtqx3GPwQ6pfY788mzHKnbUowX2XpVUNizcPVd5XbiFEng7Y2HxtGsQkjSYY",
  "key7": "2tsKENKjeKR2MXFoidog7Qv3QhsxGpnPQkCZnzxP8dPR64wsKhy9514gSqcME7tXtyhQRxjXC1F2Wo5LdgiJincc",
  "key8": "5RfSxGFs2gYuvZ6Sh46yCBYm4DbWjCk4SwMqAfeCFUk8DwfTpikNYD47DuFjs7GLxa1Cu79y9ZJVSvMpBL65VAtn",
  "key9": "HJpk7VzvgwRP5TZ7w6PKVX3gZ4oY4uNfs5ihxez7x2347v6sFRCUoKd8oYJ6Txd4Zkhc4jv3bjq4hGTaa2wrapo",
  "key10": "65xp6pyLw8v7pcDJmcj1MzKZr3NpzLfQM35tTA48scpXr385uZSd3vEZbj6BXbrQNtFEowtSoE9xT45p7PZb1Gtj",
  "key11": "2ri92j9bjNVw9xKC3FoUzTZKuqbf7e71rAFjbhDVxuoJcLZBzbaSQ6SNmjTcbhvtRMdipobrHawXNs2wejyee3yh",
  "key12": "2FZSev1f4xP3SLa8Yf6agAQ92y1uqcvnjyMLrt7ZXeGXKvgFW83YW2Zq7JPpKeqmjgqKfwq8xZWWXcy2Dq8S54Vm",
  "key13": "5dGEYNHTr13KVdGSLdZVLT86a7pxW6qSW63DiqrNw8E1rF8zFk5mNYJp7r2Gq8UCujH1Wu3CEkmZXaa11oR8rpix",
  "key14": "2BCdscQZmiVa7EUSWmVFbpQr1hyrrTysSbiZs5SSQVCe4BisboWEqNAbnZaztFiheXBcgawLdtacbkKgFsvtf3F1",
  "key15": "2UjCNhu59tJD7Li5txFp1PhkThXg6p4UeXCDLjfj1nw2NNXki6sAX8FzPnabeapVLJvPFhk3hmGE4CskkJsEVcii",
  "key16": "j4rE9hwQ3BaSwZii5LwtFryQSvETZqEHpgNeVHLbpQQJ4fMz9sJdZdZhCxi8f2hBMrGvFTE5o88nNmNydTzARKJ",
  "key17": "3J1KphqE6ELyRN8idzQrzuUgJUm2DKLGAcARv36RuktXV56J8ghBUVUKqs7xBvWXCrBz5U1rsXSTPUENwBzCyXKu",
  "key18": "4bQmHuMCvYYBtBgEL9Dt9rvEkXpFBZr25kuyREUd43M2MDJiP6GCF1u5rxqVpRYosZxbPmV6A8myQ8x1gu9iCMrR",
  "key19": "3ZzzdfHcwoqAZ21Zt3qVtfYHP8T7zSjy6WGruRC9xR9iFaZf7hWB7gPZEb9c923CsYCG7eaGpVbKZ2j1n4nhutFk",
  "key20": "34QdoDnxResqA9wpS3GKV1ocH577TQTBni9M8QojyCYpsTsLJxyFLxVyYSfrn8S5m9kdR1HDw9CUpHdQv2D1KS7h",
  "key21": "y4zsxNy13YPqwgjR3PL4LqnFgcnQuYaWU6Uiyj3vqFpPz4hDQfE4eeuQ6kzeDUmRnAbMUdFwnHto3PNJahnZJA3",
  "key22": "2RsMLwt4RZ88o8z1M9rE7f2qMJGDyrcD1ocjgtSU3oT428nSMf53U3b4EzjY3bzNzqxXSkBFeGLv7t7J2qSy17Ah",
  "key23": "5U6sSCU1jFCV5n5SDwxFtJNV3pHQBMZL4CDAJ2C4UyeCvPSepxj7QVhYueCadH6YSXL28MFm4rTwGHEKVRHrozi2",
  "key24": "wEakWdWFom5L9RYeDvHS3e6AkUkJksknwS6Rs22RkXm8MvgqbKSooABa3KcXhd5giTcRezUPiAuHTcdDuNu4NCL",
  "key25": "4fTnk4Ny9WxDaiCHnwVSNVxeYwpFtpR7JYeWYgSQmsc825gpRJuhWsk2h33zqY7i2sJPLkeDUMLEJCXwdaA4qKVX",
  "key26": "4X9LHBeepJqcF5a4vQyqqssEXsstGPG1ZJ5tEgvZkUezLArCoT3ABqx7HxJMzLTAiQiA1rtPDcouoswruK2SsMuc",
  "key27": "XJBWPeJK1dUMg74SSB6wxek5TwcGRHM8gcGwt1ywe3kzPa97fSJwunhdmfZ2Z1QTC1obnnRuoqow12JawptSreN",
  "key28": "66evWA7QnCeLYePC64PbwmfYefC9oSgB2Bdo9PhEwa3Vdjm8ZHmt4LWGKaJP1uXiGAFzjSn6NSgHGpHEW3wGtg1c",
  "key29": "2RgGN9r9XPLW4Kos1fTaN8d11C5j4HnJNTJmsBqf7bRe5r1zXVavEweYT6odSgd1u5NmGMt5wEZmgQVSQo4KnKe9",
  "key30": "3ZAFL559ex3rqjTFCyFiDypYeYrbocuTZgoRpWnGXUWV7Eu6XU51JsaXYeGyBdMAeaL3tHf4yM7g5yn5VNJknzqT",
  "key31": "5AgXwcn7K8yPfEEbTN75cTLgNGXrSuW4F4mRm7E61DuRZkDsrwYbUeTLVyXJV44SFfZVjokD8HUDQQpHwaXybsss",
  "key32": "2LLYLvPeSCB3LRnp54JUqRV3PpWL4m2uoBBy4RYv7ZmwEDyAopGWmhcUAbT2k1nhXofH1iALvz8hhjyAUtAoZGku",
  "key33": "3FYH6pVUx1Z4Sv7DKGEvqdaX8xUABzoQhyvfYEFE5WPkXfTwF6qtRPGifvedBD1SMi6yCERH9AYknbAegFK8j55u"
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
