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
    "5erV6tBe9M6uKxc21KYeo1PNfEwbqoXBkRhTeoy7Yz8kHZRGkZ3B5nDvMaknHhqdxuf2surpg867KhYuE87SaDLf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44JBxG38RgzHtNcpdsTR6tDx9MsENFhVTmkbysD8KPiSXNtZbWsJnTabsu6Z7taeUJtfvoeSEuuuVvxeGBaJkhA",
  "key1": "5FtcbvhivP2EeLRL7x7c3L36viWrcvdAcxNqPdRCq7tCE8eTPMyYq7FRxpBAkjG4HpptL9qSKaH8CHSPuYSDnd7Z",
  "key2": "2APw9ce2n7xVcK9SRKsEPEMbGaopC62nhNCgiiq7rCLdEnmC6rtyxGQ6hL4BGiKR3bSr766vuh7jESv83FRZTjHG",
  "key3": "5xJcGLTLRFMKc4SemFzitPLrQsaLzwgCn9489V9t9oVcqPEkH7pHmJVJWfGp6sNN3GMhURL3A3kSnwKpdMLxh4rU",
  "key4": "4WaBATsJR7xKKWLi5F5RzyMpw8wcwiR5q7X5GAXHXvN3EkzCvCpJC8ZRuDB7PBKbEN2VgX2SceuCjzmVbeqYBprh",
  "key5": "4peGURRMwciQDe8mpStCoAviteWmhc5JMfegicYDUAJ3yQim3Q4AQdqMoh7UqBjFwkpbqnRU2uGneeWzJrLSHKho",
  "key6": "2cqiDznAhRKMaVMo2f9b5KCuRQ4LS2TCVKvrCSqMXGpEu7HTKidwL7csstxEqSCp3DuG7Y1bkEu84YLSCeGRPRNv",
  "key7": "5548VZnfj6SPmcozWLjtw8Yj3vUR9dpnpTqFPvTAbZ7N88HYeUqQ2bUCy8qr454GJdp5brQr31TvFJQuFGWykpyj",
  "key8": "4BXvPALPQjjidUaaXSjJADzpzgmoeooUcgCnfFpa3ZRaPgXHG64vJM5xxoS99DbcRVfCKSw1v86ooyiceo7Z3ZRP",
  "key9": "316XWJU2hpomjGDDTohr3sjnac79CtNctypeypxcacyxMr1CqDSNNh72xP5uHLQpTH2igjoEgQDKqF3qjE36DLVk",
  "key10": "5mnUiMG8PPEVyCLGEiHxhmEu4JDoce8s4fHNbrQh4Fc2AoyKUwbqQKXvWbFEA23k5rJeLpjnTiWfoNTBXznZkZw7",
  "key11": "3dPBYoR9EGWsvH2iYyCzcKoofVf9ymGq78vywvqcYuB4DjHfbzs7TKXuvmMpoJL8eD6DmcNthTF3fGWRiTbqPjbq",
  "key12": "2up4ZwQbz37fWX1x9RC4STpcMdqWreprX4513kmhxKqEzfxcMG6Aqjc2qUvpSQyNDDgLimxWEMeTD1BUPFf3aZ6N",
  "key13": "2v1eXZgWQ7bY148XmzQMYopqQgqYkvPn76v27v4YTbis6nET65mn2rQXuuGSsEe6mQZfG8P2NQxvhNwE1WqCYDJP",
  "key14": "2VVDfuFPSnqXzrSMBJZeMp3QokMLcPhEgLj2CdHtgeviXH24HU3qJnHJuVUns7FqycKbsQJDF1ZnKTG6v7fY8dnd",
  "key15": "5vECWhvMUq1EwhyZ1ui3jPq5NR9mcFTPHZJBk3th8GswH2YApaMdHhCkH3XQ4vmxtg3qdPbukEUoMA2XvJ3pNQKD",
  "key16": "2pUUwcVcmBksj5CVxc7xgw5f7fzkbMaA7CUwNtZHFMLKVEACoddzEj7y66GhSrrsY3t8NeHbYXYaRG9avgNpRzZU",
  "key17": "h7uetG5ejTmjYLVJitSC4J3Px2wecLdDfCADRd7NMTEJTcw9rP8EwGywW4iTTaRqjkvwNKZXLuLfkFaNN9c3WAs",
  "key18": "5WTdPQgfSRGaifsb61mAB2BY6H63Y31mo2Dk8oVwTvmc1QXfHkzKXd7JgDmvMkozZ3ZmzFh7rr7E5r5EUnAa45Lh",
  "key19": "r63RXz19ATKvG4DwUzDmH5CiVjeQSor6RcDQx5hDFkxFZ1yd9bDYYekgL2dTXpJAR8mZv2VykV6rqMXq2JDCkEb",
  "key20": "Tzto3GvGTQGHMjMyPfrrLLurgKZcYVtNFtL9r4xZ6n9NqH6bXXRdwcdoztVHiLf6FfVwsfVgJMZGqCZCNaWgX2n",
  "key21": "2zTUprga27HnNwCptr9PuvAXyQboKYdou5t7ESNp3bD7pgSWw6r7A37oPdBLBfdc5tmENiR8uNoEVyKwQZ1mEdMY",
  "key22": "4QAcMGzi71yk2iVjtyKTN79kx75K4EchUz63sQsig3D9uhe6mBUmamL2KRSbMMYZaMJmduAu1RfEf6ZwETkm9qDg",
  "key23": "2LZcTxg7b9fxZKJB2KyUtwPQA51nv2Ficae6dCm727QxtJz1wVtCBa4B1xTRZBUe5pQxqtt795Cm8oHMiNbWTWra",
  "key24": "3V1vcCoukQf8j3qHyjcSxFsxqcdnMQpcQgTEroBjxz8MGLWvtZnPvy8bLu3opEhGHC2vG5Fr2DJe1vVLiqAkMfi9",
  "key25": "u5mX9fnNuX3YXnZib8NJSoUi3X6dqnGN3KkFFnxDjX2ePmVAmBBrDmLqVFKSpcV7kSgzvrGnXFhYsWdaLc2aJ9V",
  "key26": "2B9e5oBx6yEgkuz41X9jrF9A8SgKp1obeohrvY3Bfji8iEc2AeYF9q6LW5XUpYWNGpgWcwtc7y6j4HRdLbpeHLEN",
  "key27": "3Ja2tgKFJ6v55s36tWLUNdNX5cbxjy8GYEz2J97RyZRpyBA7G8vPe9KbCFD31rowcddmQdGiLVjP6RBBKJ1GmsNm",
  "key28": "5vLdi25NC8NnvtnYF4cJZaBogRDazPVL4Y3Qi4Eq8ufP66iTF1HoanAehPiE3sBTQagvjQCCqpMnNHsq7vSzNdpf",
  "key29": "KRjwegK8w8fynvv33yyiMuQgENd2ypnVnWWMSiXcgkxqF5DTXicVX3zgnakM6raycipPyepf1iWCriWLBqY2RHw",
  "key30": "4QXcLmA2C2zCifkK1vkwzSC2XMYpYXeSsyhHQfCZScucQ5ui4rRypKpH3d5YUozR2CsbXMDnHUXe8WHfX4nQ2PHs",
  "key31": "2aGjz8VRUAem2gAt5NEXB8gM3xo8rqoXuRbuX7KxeySYdmasn7jX9du8UbQ1Fhq89uVDVYG4nYsQvBsAAAs7ouPf",
  "key32": "529fg1GyAwdS4cSTxFhRpWp9teN5h1ngZZj5A25ZagiW7MQZXKasAse1vAvSFfxzvGjmw5hwNKpoy19q1YbqFQHx",
  "key33": "62z7vNSAfB5ahofwsa3AG482zwFgeDRTJ5VppHdQKdgmNp7Xw5GZn8F2Hh6mdXWXJxzs3jADSbbLFJxr9LpkLSSh",
  "key34": "2jbHZHidAVcF1114LAoAyptbWdYPQL4MKKDQWMRJU1phyC31fHEaz3PKegmhW126C1CvgsbC5sK4JyXEKzAEweZk",
  "key35": "2VZci2zsjyYQcXtfd3hsBSoasAzVCwm1yijpMSUcLSzqBkghk1vWxh8coGEjwbxjVnJoCvguwvDPiMbbJoboeHPe",
  "key36": "GFxgmyaRu7ZoUhviJx5gvYyrepHWVLYgCc14ZpKXnWXzgV4MUba1XpD3pxFSnLR6JCREfGjA5G5TR1z2DGNeDt1",
  "key37": "TeKwTyKnkdqZhqcP9UedhCzWwYVA9FJQxaQCYjwsRH23A2wMXxFkrwZHwPwoNxTPFvBwafAGMdwwyurCRrWDoEx",
  "key38": "2uNVyjWi8jMXNzcEsDqsSp6C3rZ8yranhLb6aLN6g1EWHdbCWp3w9reSMhHnbigiM4aCTfaqJBuNhaEmu5x5eLqM",
  "key39": "2SCGufPzrQwP4yEjhpMYZCG8DUyrniHwvaY5hZ7SakWNAwmwZzGqBtnd5xm1UwdBiZ6MB8ujaYkTWMVM7ArzZbyr",
  "key40": "4s5kH5jSSQSEPorTwYn1F9hinhKGTC3YXhS1QifwCwRawA9NtBKRQeBKqG5wP1t3BDsGPbLPHeQ6mVFpc2XZSujr",
  "key41": "29ayCR9E7qrcABpMUdp46afLCmaD4QAVKBweuJ6hsKU6bW2hcYU8pW1YkyQ2Vkt8NV3jdLvsa8dcCPdQYXotENR5",
  "key42": "35RdmAVWMajNFUVRuSgcfJyxsUjjKBgL7FfzxcDCagcjSLfCRzEPKjp1zJ49rHH89yaLW88Fp1UMGtrB3sEuG8Z6",
  "key43": "5MxTshgVhwDBsjSZEYVp5Lw2imHHrXZ3yG6mrotV8ExfQE6b2hUzpNVHmpaQ8pprVZjYqs8SUUor3cVFeAHuKLNg",
  "key44": "RDYq61YKpadaWst4P5M3j4dJF3CbFBstL5ELZgmktfSuSF57jn2vGNjCfsxtvdUWe4VJpcJxEmzHhdbD7dxRdY9",
  "key45": "5DDZrdosC56VDFd1UBss1up6XbdGDt3rcYg767MeqPgX84mteEGssQWSLP2CaQnD81CexAbq3bgMfE9LemzNTnZk"
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
