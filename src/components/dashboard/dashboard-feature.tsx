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
    "5Gmhm7PTP9KSVeprK2ipGSSFRvc1npwj7PP34YGBRwiZWP18AYJkmV2MRTnqwDowbczB8iaxJr11WxCYizLidLig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Pap9ZzAPndHhR2CLEY1wy8K9kBrXZdDENMp6sQt1Wg91tGrpMjXpaNi583tj6hVpTTADzju7APbyufukCc8ABt",
  "key1": "4EdcdMkGhN2qfUjSrjNFrMc1nq7QFQ3ug1xG6d3WzyYkJaE6YvpMi6vEZNG2AYSPYjFtELMubzV5o9pHEny2cLNN",
  "key2": "5HYQprTyCkDkK4gVX5hfsopGCKU3vNnmQ4MQpeM8mXDzcTFNArJb8qZS3zScnfQAecbgK7cGA8A1TH3nTjMvQyA4",
  "key3": "63CGBjnBCVfBp2dCw8tkcs4ZP1M8WDN84rDnWkRy5gu7kzPCxS1SJqv1ZYRqu6aMt6gpSPacKjzy79XT6rvaLNyx",
  "key4": "4KQ688kiaRo4Uy3s2aMnWxu53McrZuWweNVtvsNcRNL8py28GZuTTpN2NmFuwjXVYhgYPv7aX4BiEApKeZ2gzUuc",
  "key5": "3S1jbUoHaCuPG5imTxuL32RojQgF1x7aDM2UumRuvbs1yuJEHr7WZcmRZD74gGZyoq6XyoZFTQPDxBm44h1Zp2MT",
  "key6": "2fwBxvj7dpEFXuXJmrcEUsqKx5WGe9JeK2LW8f2j3fDZzHgApbG4kKrqCcXALvvXTX7xPUr21UN6GPQ7fbV4UvjX",
  "key7": "5RzqkWnSZSUWaguTTbA6wJ1vDXeytWkaR4kozdrC7HL7hPAenPkhtU2srPjvcrFZRtCpGSJsu44UULvtkroqC2DH",
  "key8": "2RgavQy7J85H1dgkwcmsWVtuS9GqtJhiB7KUcaUAooTcR488m6dpv3Apx2kHM7WZBeuQB3BT3vLNy4SU8fvtsxH",
  "key9": "2b2GsFxSup2o1tg8d9AoQG1P8W52Qo5EEcFdKFRsydVDCaqNpNVzF9XiGcWKtH2yRxJsN7VuSxrzWBHDg9WDwyv7",
  "key10": "3VUheGUXnWEvVADBwFpJcVX78n6sBeUranhmQNreNCATDvGUHRgvXqzTCCp88bydgazA8bRJwPvSgMTq1puJj14o",
  "key11": "vfyc6cXBXPT6U9yuBEYg6DymEY6Qj4hQc5xUDex8Fc5dhG4mPb9VaWi6TBDukMW8Y3uMiDgXjyP8QHi7uwaGjhc",
  "key12": "Qjq9nvwrmaqmjFxjwMVRbWrVoxToQ58FqpAEwxvvKxMYvx6po9NXkjU3gV2Hb92r8rMWgbi2ukBFVpDxw2UjTmX",
  "key13": "5nYFSiArBAA3Dx34bZKtiFmw8kfnGkfT8HPLPWhe9yCbGKwfpRKoVfX7rS29cswVxToKYzugvpp4uQQYgsfrwPrP",
  "key14": "FbKHPhKp9yqmrkCzg8g6YjezVmKGYH5YnPENPadXQ9jDLjotguxDZGUbG43CNr7so3yj59yt5StFfdPmXzmgL77",
  "key15": "3gUeZGaaWoDY1ceVngoXoKWMycUy9Buraqvo4K5HSBnqn35ztSnJNLkZPZTvyxA6VHiuUPwd5fxvhg3qbFiutu53",
  "key16": "2h7RY49sdYirze3UkNjRkZe3QUd9RJksv6cdUkP314jEzp6BRZqSR269dhMvzttBPNG9326iGFVaYr6ZaPhUhsEX",
  "key17": "643Yt3cvKPPSnhCS6Kq7Diq5gJaucftJKoDFq68Ef47wifDxJGjq9bGheQFQHoDEWjFAZjVZqTgREzS6FbJMK8mB",
  "key18": "4S7GD485N78k6cwUjWRVVTnPpb5JGFdyCam9de5df3VpbUm28fH6So49MjxPfKxPHiT7NmHSovV7Er47ceXGfGA4",
  "key19": "4v47oHbFbHrVzjxN1X1a4vooPJ3EU8DUkv7xYUoCsuu88hJpvMtQWadaE9zkBjeLb5Zz6ydJEdAt4Cd5UPA6XszK",
  "key20": "5MJe8KGQNcjAUW4euA2udwjJBT9F4CX3wgegz77JLmjAoS65SgqLsSWHoW5ngCSKAUaqSPu7JZAArkECkXmxMFpW",
  "key21": "5kGuiMn1MznJkGeH3Zj2oH4G1xbGaRrTUCAig4K7QvTFskyvLFZ8Ap4eLDJ8dQw2ynaV6Q6ixn2oxqV7V7ZKpWcG",
  "key22": "6xpifFcJ985pQLeGvWUiA6Nkj6cEywKee4vHNuVCheXK3QcYtPxkC14Db4Uvva3rYrqjFSdU7zubQcCWmEwk9kg",
  "key23": "3C4j2dJmUwyzFAXfCJREVJ5MsuuVRRvogRBM2YCDQn3va28GLJ5ijC6FxrXKcucJaAmVyE2QmiGrRQjTmBHFAkhQ",
  "key24": "585vuKQCtpCbHNfbfnVfLtuT3Re6M47rtwpw5maThswi585R9wLc5pAiQRGke1jS7fHu19EvsGJXHxF5vHLWq3mu",
  "key25": "4ecSM6Tx2YyE9bxfgtXAwTiGqFKVDrgJ5Xesm5bV2UW6wtC1A9athyLREJfwcT2ueB4u95Hj7BeBBD4mi4DbYEQs",
  "key26": "5Ek6igFVT9E5buKPheb1ZvtoCkDipExLTaR3HbPP3ciMRibkhzXZ1k9sGY8Fo6fd5Y89W2Dvy1rfehDYm5Y8PBL5",
  "key27": "2i1iTuypBnmra2gjsWs7g7MAGcFRGwAdvhkoVhiCe9188EtmnT5x8AvZgi8CD2BXpynL75K4EhJfRZYPQJ2iv3MD",
  "key28": "5Hm5vP4HQRYyUwA9HRbwtDF2G7HJAQtRphGe6hiq8dashkqD6pyomJUtYwQp9F2HPpS1DQ6QqUP2dKtLaxEs8WU1",
  "key29": "4X3oNtNjYdoKh8ntkxkNSjsfSDwFuANzrjQqH46MUjipgn2Sdm4mmdKsjfLknwk92hXVLE3vkMMsKNSnBifS1uzC",
  "key30": "5He39BWnFbHyiPi7ZVeMbEUCFKv8uuFQZAFGrP4mfC9F3rxuiv4Sj1xKtHGB4ZxsGDkMWjiHUFvGGeAg85eh7Ccr",
  "key31": "rt2BsEd1LTueXzetThCDJEaeT7v5RUj1oEPnTnmmPwrrYEAkS11iMRH3zVrc4hpMoNMSZUizK3bPiRgFvkFBMqQ",
  "key32": "64F7A4ptDnFppNtZhdE4kudzFRf3uyEnj18vK2imH8Hru5ZmizsftfvofjCGKrX6Pf4VdjQxfFo2sU8ZPqr4divX",
  "key33": "626FSs8DdD3vCK3sZcghey5RFSoeoSk1718eYsGTpbKeSFG6p9UzNEaPUHTzJPoEEnGUPbfKXD5UouCVN7WbojpP",
  "key34": "4nXDs8qarQ4zf3KACwCcPKW6WDRBkcSFKNsd8RFno7NfpyEkWnwSyu6mX7V2pPzd9898b7sid27XTkAWSrKTmfbv",
  "key35": "3M37qkGsoV1y97eK8TqE51VDU8ZpqQqMaPKEH9ALA774QUnM9gziWbpNNuDCRgUgKApWCwD8DxZVThzh7EV33pr2",
  "key36": "2BW39FnnzuLetEZSWiFqh7F9n9yNL2FtM4tcFbcovesmxHd1MBRqC22y6wPtW8fFJWh49uWrzrz5ZsBdAt2sXGhT",
  "key37": "3Y3AEcfReF8bD2okfooNfwXxBbsyVtaU5SQRC2bA5H4YjEAYs7yx9hqN7GCFDLpN3qeJw8keLWmFrjFY3ov36MgR",
  "key38": "5QLZ4b8ULdovSiHt42PV6VPTka4t6z5QQBzrEgqwG7SkZ7BbEVFbkHbHZ9k9NfBY2b31XaYG3oKiQwDCnygCjGPt",
  "key39": "3Bn43sx8Z7xALLoBjzivVgEqbt5eCQsQDnC3o9htaF3bvRyBCuaAk2UHisMTCtc9BgV5QdnJsrasvyPux9Fzfn9X",
  "key40": "3dXhwv9178XCkF5zUTBUeHPDAV1CGu2aNdFHgU3ANuGcznGs7bD6FsVuoYfyC6XmHTgAd8yycdManuhfUQMdz118",
  "key41": "2noayGLj2gi7abDufPCvsiCPthpQsYJFevoXpWs9rswugRo4vY1FpHc2h5d6ecTrDLKEUAoLT5kfWbTvTLJJFM2f",
  "key42": "3pMPxnAD8LffRjVWdqfpQAg6hfK4pWRmFC38dMF2AmX698QZdak1GggwnsDjBtyukiiwTD3BdoQSvZPsXPuzGGZJ",
  "key43": "4AT4Xw4qdRMbt7JqeUKRQnJp4myGZtxiLGpgFCgZu9de41CCvLrLUfB37QJNe39QRnmRiCkVR2vsxDx8qkHqMXSv",
  "key44": "AfweYr8ZiqeHgbDSL4ZteMyKd9XnnjWVUvjWv9fT7rKgyAcX2wzqB1HPxnUGLNMkufvZ8YbvwqMsYXwk8nqqWaF"
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
