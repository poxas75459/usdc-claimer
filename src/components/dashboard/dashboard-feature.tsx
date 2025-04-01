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
    "55psGdQnNyF2fg84RMsMgXHwQoxG5fNW1hFpck72bvcHqWfJwP8FtDd9s8KU73c7oiAueBbbVBYiRhG1bsg8jzfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VrPTA5yXgXVN3iFjWHTMrqcxnF9piqrPv8xyrNiZj1ueZZ66X6u7Xa7cS5CR8ya11RJEUmqeux2rHfFeAun7LME",
  "key1": "4sTgPKKv3ZBdbXRTWXNdrDGBK7gBJPPKgGpcTE9ERsatMHnpcY82MsQAmgTo36uarYGatjwR2p3snpmwF59KktAg",
  "key2": "3xL4yNJ68ishhZPY7J7wc51vT7uwmCJYkyk568cL9wMDGxerKutoDq7HX7j8QvwaYZFHp51X3GeD7TUSU17iaP7p",
  "key3": "2sRix1nWXrCxAWYkLTTe5Yzk5uDgUC15kE3g2HhaCa7tNe3BuSmQhVjroQcoPFiXk9bY9bBdSedJrjzHJViAvJQh",
  "key4": "5MTMm8EPSAXFQrCuZji4G9knHkFokvzaZq3snwjgHesNw3DnwKFWGwYVkDAiQkzrck3UuFeyoubtmDLeFzzYJJVp",
  "key5": "29kJGyo8WTz1ujL8uyaxb7wo2SoppDQj9CZ8JY5BYDopRWMgCZLqYhyhmttugMf9HMBBPnw9H8ybWZ72tvyL5bbS",
  "key6": "dUpcCFcHdR8YoxULFcZfCryxh8piKceD1eo7qu88raoEM2dkA8wnnYY83ZTNbWUQmw9HcFrmzrjZwBgz4LN2mc2",
  "key7": "3nSMregADfSx3K54xgCLaKnhzzdRT8W6DVokijWjHi5Ac7ujQTGEQGVw5Nvyvf8VFDNnqsssi6xLDFgmKRb2c34L",
  "key8": "4fqgC3Fa79HhnHZJq559DjEXVT3jz7MeU24yx1EKcusVXxJqNSb7wnN7X12yTGM8uomqQe4fPn88DXNZp3VrNV7m",
  "key9": "5PU5YQqvsAz1qx7LqM89MfpcNp36KBmk75U7CMLDRdNVbERFm293xfCVYotfsdqcooLYe7buhNVeTmLKpFjjP7V8",
  "key10": "3s1ND2A67WpVH5EizsRLLmNZoWEiiN7Jn13D4kQXsMdmkPUftYVRMDcsCrh3FURhyTkfjQrDbA7zqT3jqroezrCp",
  "key11": "658wqv7kR4ugdekqGURuhFSeVbHAJiuGykQWkKcWV63FjPjoLBPcBZBZDd73ZdHuifytrcvxHJZ8Cp5W98KFXyNm",
  "key12": "R1cEbiEpe9XZpVTLcugLcjndsLoRwNF796dLdYy277RkreHZqvW9i7cXm9ca2H8AoR6futmdawYWiZqw5kStTwT",
  "key13": "jZXhrTsgt8XwTVZ5gsQoPNurfhhK9kGJLgFw7WDVbthUvekUeoE73VdhBgrMrHDGEoYDXdC8DUFV6s9xtKgLBfk",
  "key14": "RSYkpATo7quY9zetr4VDRDRnM1uYZu6VAQ9YUFZHe9Xb9qp8CR4bXUKrPQZpDmM6nXQju8rw8pvbEwq6TvuUz6f",
  "key15": "6dUzeQLGAUxPA97WGRUoaqSySqgC3ikm2DxvsWdRzotJZmGbb4WEJ8GdJDzzrRHEuoHTuqMUBCe8qjg3NWTyPjn",
  "key16": "2n5j17yk4QxVCzmVyAtBT1q6o5m5QWVPxjJuy2qA3muGuxoNwWzVTN1p7YBnNwqsTMca1favtzhEwdNjDwEsox5C",
  "key17": "5V35JSeBDDX5EGbFLGAfLg1cY99ZuNodCbpoxD2iJ2fsux8QVEa2KqR2pUhzJnxZvsfhNgmXmHiJRjsZjpt4LEAK",
  "key18": "5Db4vBk8GVxvtuGKPaJd5Jr5kQ5hHfJsvXk3VgvhEHrtqwUN5PPrXcrbfjkbNLt1FSgYppXa4gQz29GjZfJNmehk",
  "key19": "QWqG6jpMHHScHp9pck3bmVMtBPjXeqfThmLzWxW5GsBMi5kyQ6VFqjgUDNxBpewaebDWcH4o5X9mYn1CgDxr9DY",
  "key20": "55tHfHh1mfHZveZQijXzhrRtyADbzf1cjdY9Yz3GafziecZN8SqDXDeoExjaWaRRebQBFv7DLMR3smLMWBGEMpnD",
  "key21": "aiP2b8a6qZoEX5bPMtEhjTrG361NwefuyXk3zDVmj5aBVNgxuwnceegdYdYTMff6UV1XvNgE5kdULZgmYLfwMHo",
  "key22": "4mmLfeTgK14ZRhsmA3KcVTwCjvrYK42pK1YBkrddcMMKKGLBVg9hXvyYcoQygKnv99Q1m4z98ShZJsoHzUVd37Gm",
  "key23": "2TK4h6PnRSY98cCpZCSLXHCTeyGCEC5uEzak432mK2DCiMc3ZSmbLRxvSxemeGLV73GiyAT1RqkA9VZy2336rfWc",
  "key24": "2VfzLmQ99uakyFbJ75U1KvKYcB6gnvPWhJod31WhJxDQPSGbrWJkUZ6rhcdGzqTt86UCBAEudg5oGwZXvaBe5N9q",
  "key25": "5exEAmHY6jUukT4LwADhKmwx4MgKLVnDM4JSCLNMnDBiE3K4cH7XnCpnvtwcMfYtNwrJxgW2YPTwWcYTedDkbqFG",
  "key26": "2u1og7Yzzs9GVFxzbFG48z47eYFmxBuEaT7QARusFCfSbZ9HPsHqDrUjovnN3nTRLpmYz9Mm7x8nGiVw4frQbqkF",
  "key27": "5AjZTNf4reGKmxWpbPeQY6hkZCcRfMdHqrgwjZiFCW4iEyD8PFfvzh9Av8vfm5qFgzjzDUiYMymPCUREcs9RQEga",
  "key28": "4LD5pkn7Sk3uo29oUVLDgdd6X5w3yn3319WeHSYn6wfhETmCB2Qhjx9b7u612frBwMPyzqTfn5k98PvH6vZ4k7Qa",
  "key29": "5tboZT3G2ThrhFMgyyKcAM7ji8rf7EsJ5ZjjqXLxukBRzKpuL4eLpXmQP2HACXCfTFubhGdy4eXmtJ847KzLJf7n",
  "key30": "4yVekM6oUwkTtTkJCbg1cbmn389dBEnxftttinFjBKA5CBkUesX4bcK5txMLi7LArCxhomkvbRpZ9tWT6uMDSiAS",
  "key31": "4gns6exxx6SjQ2ARu87SrFUmkuRVQ1UsS5991tC34G5MRCekwTujktaRNLNmcygrLkFL7rFEgfDCXQLZWQZUZQg3",
  "key32": "271T9wPndHSXiPJJ8ZR3xV5m1uBgVmNBFBLz7uRYHU4pGWQ4Vp7HFhbTknx6GT4WxtzfDrbrnskhwVxAuf2ezPn7",
  "key33": "3TraAChfdjmRQpUfc4b5DZovmCBtrSFFiSMRaFWGgT2yufrgg3fM9CSwW7NbFzL9EHavGueDE61LdNcM5N8vDQZf",
  "key34": "TyxKc5ocJYb8713LY7aPzL6P1C3xsV8awENpkscEkCp8yPcDHZmCKEdAYz3FJUCADxx1WsygjQT1G1GrBibNCjE",
  "key35": "3JDECbCf6kX3QYm9PHeBPSDkkrEt8RDRy6QX6ANjAHFNNH3QAxQcamxjgn2kB9Fw4g6JESogp2a2yyYBLhJPgfqm",
  "key36": "3jSvt4UDZ78633oYneUGbGXYHJaW9waLEF51BFW5dd8gWxVJomTJ4W1GEYoJTS4wZmUiYkjTJNTuKFKgrj7mjn7e",
  "key37": "4sGecJewKguJq9KEPsmTLJqSCYJ4YPG4S3akYvhjVPrsRMLibGhsvaedg4hTKQNjRVLoRQT9HdtLEbG4vgSRrssB",
  "key38": "4n18TRXSPhzRxyaoGh4gY6EgZ4A1spvFGBWJj6KRZWeYGegDzY6pXRgwgysgeraePTxWyrid6L5L4rSQgDMsy1zr",
  "key39": "24Y1q8KFM2mRzMTkE7MR6jxLYCehjbbmWDMZSC3dr9AqNpC5m7ZYqg6fEXwHaqF4UpWwcp25mt6FEEucxwyb2oz6",
  "key40": "3C6y18VjqdKPb5ZCK3dmA4iPBL5d9nMtkBADQvVESQjZtZMoD5bqPC9cvLw1NB4mnihF69ak4czxxfpsoM9r8D5z",
  "key41": "4caS23Ba1gX5fML87rEEivonmw1DG18cYxpZ9W8xmPgbNLSpaxF5VpiwPdyGrdDcrEjuJrcmAeYHmnnGYuUFxGkB",
  "key42": "2hUohySSWhWudiUUeR92MRvyVQwrRejvc9aYEciuUmrF2QxaaeK4U8d1Rg1VSatjxtD2ZaMFeHnrCzbp3pB8GXGn",
  "key43": "zvgM4qJtSujmyMMJ6yfcUoCMBYLatR1ZzTsyGjFatSu3torW9JbJKdrKD492oxcqVv3rwpvzRAL8CDEtGHsBj7z",
  "key44": "4bK9f53Kni8uY4bgC64r9DrqgCHfPEpDn9H6gvVrPWrpU9rfahPe6zGeD1REHQpSHPpfdsHXaJ5MxXnX6J33tRjN"
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
