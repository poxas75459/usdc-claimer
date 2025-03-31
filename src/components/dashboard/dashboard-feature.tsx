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
    "pJ6s7YpnGdLUVFcHidbKWh5cXgHjerJjZ9Jni3jwczqXtfgAW9qH4VBLWiSq5iATjnLj8PycbAkj4A1MPtPgk2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xVTVAp2sQLsQ83pPmAXvaX2hkXuU5RajaorBesQkWH3qLk8EKjY8CcGEo8byW9avniimPCzw9vTsxpgB8615osu",
  "key1": "4HXFviY8Aq1QN448eaxhcLuvy9AmHBqD78xE8Uk1yP8kVFuoYVddEKh66X5pW9GAQ2BdEaCQCMEAQHsWWPYJ6S5J",
  "key2": "RHuUki1ri2jqqFfRxFKziYKJXwp5P3TiYK6W17SM3oFHuHHE4qQrRq8xWzs4FgYt2RfcZ1czWpptwd25aANHj8v",
  "key3": "5ZE5nn5zMgq38Znt7XxtJHUBkvNVu4aB9RLrCNRSqxREbJJFMugRkSh4jq11S2z1mdT3oVxFctQ7imXrsxQjXxiN",
  "key4": "zCsu4oZnJqVmHZXS8RfniB7UDjNBgYk8nuNzB7tcb5H21fs3enN4u4vRPCreXeYSxCk6qKcsZX8XUgHrvMnHr4A",
  "key5": "3fJ2BwazwHYXEx6Qy91x1BGxXuvRgbBXkpGL2GhE3eRCG96ykc9kLPB1aezedPpMJXvDFyzWyadYpFqYLKvDkhMw",
  "key6": "3G6FXuvxecGXr7raDGx8MgnTE1JbCfb2XZTxrj6LX6DGYnugtDMwQKe4b9WtC9uxauJUCMjSstCbU6gXHUzqimSk",
  "key7": "4PiY4WM9ZKTWmoCSupxtVdJt9Jeyeq1vf9LCHYH2nBHdRDq2d4kRBQ21MUdqPKMPRFmNcnW3SYDaKodP6Dhn6FJY",
  "key8": "46oFq9nNPkprrbXgxBigkbA8DcKZ3pzQ1ZxviGcrRXEd3ktuLdL33HwYGjFmpSEapQYZFRAsdwyy3DAQ1GRPrRsB",
  "key9": "3vzf38EuzpAEU74ogYN6PoKZTdsUuWbV6dRXGsR2mLsUDuReXqWDzeRL3A1rDCHPByzyEi3V8QrTWSUc3CsY1cSk",
  "key10": "2HgytzxcY55AcNEEAPxih7KgH6r1UMDQUtoJszL2AdZAzYm7BseUKaJBgDJFrG7zzbiuPiLLELMdUZtoWRz57eDL",
  "key11": "4upkLfPJ5SD2mBf6BkYpsUycYJ2TWVR9JkLjjTmp6wCmH5NDZSAE3HNAw1rJKyvUvBFZpZkF9h9xevymz3zVtqfn",
  "key12": "44ovvwGzdyDCphTAmtCPbdaig1BUpzna2CtERATnuVWvLqL5EACRYUX6yE2jcrxwLuDNiLEoWLCvqAXhsjqVg78C",
  "key13": "5Q2f2tPLUUEeE4G1cDRnV7zDxA4nxYejW8yjXACkYUGwoYve1RZbbqYzU7qbze9QyxXsmFYL5tGp6MFeDLLEyWkn",
  "key14": "2DPKWRhnMGFfoYBudstd2zLgje3fU87XG28Udtkupc62duGNfKiq9RPY3bTvSKJKvGzRck29CStb9MMYZvuKo1Bv",
  "key15": "eonDp77AbnXwXwUcGJ9pbsm95kwaHG3iTsbubz8Zey1nEkBVGhLf55gqpzmkmWn6kdEBrrrzu1oNpbSKhKH69w9",
  "key16": "5bRB8Ap5Xc8PuyFMuZHeSyRmxqjtj1sJJTZ4ZMoR78eRKnB8GCcmdeJR8GwcJ3kWpsHbjKiaU5bShwCmeRnJKBEa",
  "key17": "4yvE4jJPy64w5TtQiEBwbRQgs4rsiPAX63qUddutLGAF7Pw62RxpXAahxEnSftf52GQ4VrUKRKrfsi6C9zCTAxt5",
  "key18": "2K4yzunVC1ykfMN6cxNJXQQFAhqbjwVtWzbNQruzxzqSUuW3oGQ3xsiTr4DBKYQ61JsJqRW15k34oxJKPw26onM4",
  "key19": "4mW5n2kKA7Wa3bdnpzpkX1kfya8rfggPq87d3LQFyv4o93wbtLPMVfH2eAvBNJhvvzkYQWdfRT2HNzAotAWTC1nT",
  "key20": "3GVcpL4vPGYdp1Afps6FyAbS3b5eYEcWGb6C34m1ZBjeWPQuoMwQjkuEi2A8StA9LT8QmvH5eGadbHEpwQjcuQAf",
  "key21": "4bAsHXpFR4F2eNmB9yCiJorz1ZtsKuTQUf8crkqPox97UUYqxidSsGrgv1p6CrgYjrpfxqgMHVMab7KcXLWZiR1z",
  "key22": "4vSWKVDSfpNgdCw4eDmSXanCR8UTHryBzVXCKVyASAgpa6YR4QwikVnapaFjAJz5kRAm2SEPY5wZDe7L6ZfBkR9h",
  "key23": "5QxNv3GtKMKj63W8ubSWEeHYsY8anFPCkCX69Gd2MTopGvts1sxhsGEuav2ghh9q8VPiNjXhAX1DJPHsLRcXfchN",
  "key24": "2Vs3T2j7hxr5BrYFE2JkmDesRfRQJWZDVbBXiAaV94ZypXLmbjeYA1GGzTGreWy68aGgSQf5AGmoTbJdzJBWhw75",
  "key25": "2p9TdsH3hhRPj47BdpivLETvaCYXhcypknPScNRrB1SM425eoGpDTwjoc6SF1BUhvzXGcJ5G3X5JUVJWb8bL4hgi",
  "key26": "4KhxGDqvUqHgUmD53a2sb6gMq1g3jECPCCh8rWHM73EPTefRiuwmEsMFRfukRodXbuswCXoJdimywrdKV3j9N1yH",
  "key27": "xaXFJYDzG8oj66bQTfjntdobEPfPQyV6CFLxpCoKzGVEGJxdVWMtDiHj1SthN2f5jUhFQqSvaV8WEmR9NcbCrCT",
  "key28": "3Nbz7iXYnk2kNwQb92uRrQyrqtXhHsSVmSv8iMp7wcSGBxvoRefD5yzU9pAfbn3WfrD6BsPf7FeuoCyVs9uEfS5p",
  "key29": "3EoebHLtL4XjU13YHh79zmcfovEESM3QVjWxMaSUWdX38wXtFukPt7K2MmFxoA24XqZdsZcV8YY39qpXaM6uBk9r",
  "key30": "3raaMaxQqyhxBukiKJzsGxA7gCxd4sdFfPAxJS2hDpuVHW7czauAux2qmL4bCQksSbAcofUqLwqcVqPrHBgSh9fw",
  "key31": "4oXs9YjF1B6VK6HpShNTep853uWrKFdAuM1Z6ysEhTV9SZxFmrm7uSrVBciPptfdgomFC9LVH9R3iPTuMssoZWFH",
  "key32": "5cMDQFrHmxoNHDy7b1NmbTNoMsusLEe1JEwh8A1QBrXz3odBsB5xJe24k35nNtNPSpPWmJ9uNpNjiHMViA2uXoEY",
  "key33": "5XhE7WsCwXNpyP4uDCzfhcyxnZvn1NaSfdBEBx8Veg87UoU2tP9mMD4HRotbMaVzLK1nqPVoMGa9yy2QGSvXgjpc",
  "key34": "3xg1BS8zWY6Z16xQaaTvJ9ze4TxTKn35nvKcRPDT2JrNV8mXaz8NF28Rot2W9PGzpQ798nntUNzL9VUKnRHf1ovQ",
  "key35": "65nkSVXycyXhDGaw5aZK32FGaZjQnZeJast57ZZCqRiYA7yubH9hRe4BV2quSS4cbmXUgCbusYnXD1H74428dLxw",
  "key36": "44rTPZHdCdghtNp96kMYQfqnQ9aKgPVH7j5BQgZQEiyJBUGCyZZhk8tpdr1XsttrBex7BGwhHQqkYKWYj4ZFZ1JU",
  "key37": "iD1f5oMmkZXqWAsVFbAA3H7uHbgAP9LgPG7MDjqW9P2rL3dE3p2n6ihYqPWSnGuWSLFRVUbyPbHuJunHPoUMa5Y",
  "key38": "63s9BhD42w8jUEhFEG71WDb1FhtnbvEAjcYxh18GDqgHA8LWkQ11Y6Pf9YikUn4175GRcbrnCkiV8WmzpdVqTjV7",
  "key39": "VEk99Zcv3dBMZBGHYrecLX4iL24kKkScbQhTyWDF9jLYh6V7uwaL5Z5gBmnUxycWH6s1iYrtj5ScYvJMaqBoKFW",
  "key40": "4XRqHoB61r9z5KeVkqHH9WSZhmGyVBtGEt1K5E4dZ3kw6WRhCBQk1JnqdiU7WmFDtALejoCgxx2ukZxnhtUEazic",
  "key41": "34g4SbM2GR8ibuSxhKZpaDeCHvqeepdjpyjmme7HbcDRxD7Zp47AETVCB4cC5UZciG4NvkZyvAV1ZC9vWKT8ixRB",
  "key42": "DXhK5fd5MQ2TqhJ7bE87m7WCHhLWETXRdSSoWJDyJQSbUndCtzof77DpP3ocvLQHEHFHRsX2Am1kBbxPChdKSgs"
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
