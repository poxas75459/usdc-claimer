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
    "2WfHFGBjN6zoiMQ937xgVihipWSTJ3Kyntq5Qhub62h7AzNH4eqPoKakeSRAjWtx749x9fDP5h6y6caohmvuLaha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rEcajXC2WAxGLGWRkz5BLFfaVpfJKyWwZVv9WJ2pgGLWYqDiDCjpozPY5MuYd1oMGTV9XgcUsfgN35N5yNRKQUw",
  "key1": "266dBHfvuGc59fsfQFYXeYuRgZ1B7pQ2GpKTZZSygA5bUR4qWRgKebFPxWRoXxH9D2LpAVL8T9pUTRdGzroLQBzn",
  "key2": "2VZQGZ4jqatbcgH8y5DXXirjXXmXLbNbcMVRePWk9AX6FAzQo6vr3m3RkggWkzeXLgb56ygrskYDY33LPRq5J6WG",
  "key3": "3LUo3YjrzbJL1pfDvoAeFj3U7RzQNjfodgbc1hCgZ8QEtXebDXxbCvMBZmsLpZFqc42Xh12KMW4J7fuKE25MLRGf",
  "key4": "4oTFWbRXucvqUYwNbP3URz4pqf9WeEXxaob6nFfq24uQMu25qdKXnAVcmgw2mvEMmCvUR1pRcsjQTbjXXRXYvQKp",
  "key5": "3zKj9DikKFsXsKuuKaWmd7tYuwh3UuDiqTYeTrR3bqZdra4WkajmkKeK2E1LsRGZQqb5XmDfPeU9ctDdcujtwG1b",
  "key6": "3CprFMSZXppfxDXhbccrMSUyDYo5gkJkFm6tTCTFUdjCR3YqfZUyfthKeS5RzEkQyWipTSokGfacppvoBY1JXKb2",
  "key7": "31dKsQZgZxCTbs9tiJTdHxrwK6WhPjY3tc4Wh7zzrWMAFyY34vNG56Rbmq7eLvin8DvN7bHCq1KY4ffqVWkV1mdU",
  "key8": "gmYLqjB1PMK94KeTvGn6fBAGTo72J7nw5XCXUHTjSLVZ9UgLoFdpsFjnGFwa1z8dBkGaxRHCo9HAmSiwaNaPgtk",
  "key9": "4H3RoEXGv5VYauVXTJBuS21cvKHwLyC8wAtvLu7sqBRmnQggDAconkDhUt4KRqi6BC5zmCSWqft2GcS1WgyXXehN",
  "key10": "4hdf9RjENF5b5RXxNUD8iskBYJvVGPF1XTD6yyKBW3KxsCpVuEVWa3kSS3DaBxyk2WS7jpMBaYfMAvwCPtTyvk2Q",
  "key11": "MN8qsUtKM9k7Xd3xjqKqMRn9ZpAo4yuC7naUuSMxejefdacx2zA3vGeL3i5p3WhAwLKJjNPfP48jnoWrKFHTPXC",
  "key12": "2GbjXQehiKFuRgMhF2caaTfjGuZsMR7dhfR2V3iVyY5w3fEDgJPpohE75b51eRabVg8oZo3bjjDBxNuGMc3keByE",
  "key13": "dg9griimtxY4ZZ4GBGe5MNkacpQkr7g2HoX1KWPvGhZXEbwqhPTKcXPFLid8q7CufggSsBNAUu2w558wofdN553",
  "key14": "5qwYeQKgs5DiYB8AFPnVUWy97hd68e84sMf8NbrEtbjdYdh93DbWb1acqWm5nuND4ptqaaugRiPrPsn1B6k8eG4h",
  "key15": "5uxY8S4V3sHj1hrRi6pqfGMa7YkptPLLT5Zh5Z7sfwsakrg1ydXtzt7vTngC8dBmGu1wxY8mz3fdQ2cD3cnMYa6G",
  "key16": "5wwgoMVcukt4CdJubwWBxgERtLmU5Sz2fo3A1qyWi96syUCHQLCBAspQyGzgvK8jBC6SQHCPE9RtEi1U4qDUfc3T",
  "key17": "5zxrw5WHNyxxN5MtMVibjYRoJnBmKdSiJZ9goyakSu8tN6ok6siRV42aerjtnJDLsCzP7wbG3QvQePxWaovrkZts",
  "key18": "2BsKcUpuW7imEsuxHtyc6oA3tXeoDsLSe4FBjttsaETCSMWDYgGMtEjYie8EC4hjbDZPaoA1N572yqzJXJdPyKPD",
  "key19": "4TEiCnmSpiDa7TzL5SVM5TzbmA6Bk32utF3cWzBHLy5NTLFjWMQ5ekX5cHVpjX1j5aVxFjJBo9k4M8sHpWbmWLGP",
  "key20": "2pF5f9ySwMh15rxNYbpAgvWJHDERdYDwPTYvLj4Wd8qQpyPzrg3UTubx2jj9hkA7scY49cE9Tx5WxCBpVNcyg63d",
  "key21": "58iHP9LrdqFH7Vn9rQqfMen2uAgrsiSpaAyrmokbBmCAt9BdnzFqGVSAw8VCvU6kVHhWhQDZU5T55T3WKJdi38m3",
  "key22": "5nBsBwpdoHF9Vh1U95JRayif4yFaS1Y589imYFvfC9D6oDbWvfR5iQRu9WtBP6vgV3UBiAsucGrYJUjpYkdgLi9i",
  "key23": "34riYjwnM1ju65Qh1sPE9gHizpzpNSzqji9TuBXo7m46AtCq8twJtHsDg9VChEZA8uyuW65E6g1cyMyMqEcio2Wb",
  "key24": "5zHGF3n7J6DwpMhJFxKxJUNsRXkftEJRP1g81rSJyxTTf6Rswo6kgYPFn5YEZMNj8CL7CA8tpF8Ndh1manff4dja",
  "key25": "4pxrubgeJoGxMwHHppogLM5QiBVTaoZmPFkSBfCS3ND7ozPocgnDMaVryJhxZbY5UBbJWHqHLkosGmbuBFUZ5VGV",
  "key26": "3qPo9z8NVktCCbCaJtTouD8RSmK8pvNJSqH9of9MviiEUwdT9ngH5b3gUt7dACixUQUY6j7MuN8FuiwAiFjHfncB",
  "key27": "5u5P6FeWHNrnqrr7aALATzc2JKjzLRLuybZ3FW3VXBVSMYUZVm71LNhVrBLahF7vw2Mi5jzw13jwY13SGgL6CYGg",
  "key28": "23NgP4Xrg8W8W9J7SWWmsvjMPxPCpVXczUmVstX7UYftZq5GWgRm38PGbB9RyoAsKJMQGsCepcHUf4yqWtZBV96V",
  "key29": "5hTxE9YsaoRuPPSC5myF97a8Sj7wo6Gk7xyaAGwyb5cfabAD2W1uPWkyqTbGkzGRob9iwHsaty2nrHtf1CvvNo6U",
  "key30": "3QnMFwmas4QoshKQV2Q425q2eTNgdZrsXPEuiiw2kC1veSt4nQ7oz6XyR5ZAUw9Zf9UFjLKAGf369UmQkKasaM1b",
  "key31": "4hjRrbDw5Pfx5oNyG3fEFy2USzdihAnJKkjGgBat7kDucxazWxyG2LBpt6wk4uyWR74UD2mA8DMLajMKjE9GWVes",
  "key32": "3gjaeqZCU5bFgYsjXHX2sPkhTS44L7nZZ5dKMQ7YkjDBvXDep7eD74b3tK4ruZa8KhtuCtcHEqwrmb49Rsgt8dED",
  "key33": "u3UdEpdHnGWGAsJFgf3YUvjDTzH2rEcUBXWz9Z1SwCsdkFKAieDJ1fqya5n6AxPCvSMJun1yRgvwtWYx9o3igrJ",
  "key34": "49D7m1gJzsbpyUHMWfsJ1EcbDfbG2Y2w3P2SMewkADqSMQi6hcHNLU9iCoHYbTpsB9gvyphXkEHkcS9pZqRFXYFZ",
  "key35": "2kDk1gjKWx1Cd66MGXSgCA2J6EwhJrScHXVacHqmJ7rvC4P98qcsShBBCcPbC3PBuzFbMFKCWdLh1H98L2EgxDJY",
  "key36": "5219NLCK1bhpSa3CeAg78LzMVsc8HThAYuAjXTasLVkXYbTyjrFUTJJaRScj7VNVNSWGpe9pYdU8rfjEq6QXPi16",
  "key37": "3DfpyWxTiRySPR3XJVU4UAQRoz3XPKith5DqdFVQNcAqUuTixKgSmXS9epTtA4utSuDu4w2CQni45v4mqA3dX6iJ",
  "key38": "5XJ7QzpqKeMMBiXVzgtTuVUMCmVnZr6NFZeRmAQ51uNLZadGnSTM5zFzfamDUDazHmaFHXnVRCzj5uJG5v2ftasa",
  "key39": "ALmu78XcdFMEPDXeYfLJbPvoDCa6HJrqfT3VQWK3sCHZb3vuWCaG8q5cmvxqvYwgTC6c7Y4HFDYBUzqrGjQ5gNC",
  "key40": "3MwGP5X4r5sre1GVEVR44eRyyRdhUeT72UcGqWq12tYtS5F1RkKdkAH8RD3FJ34XJzCVGDkyrSQAuqbidgcMEY3C",
  "key41": "45f8A7j5WwobM8dXtTiFPTyD3tu7PsiTi44Npy7hYTzQo75GeR1YiL63jvtWe6b2QcNzfR2Sw5zddqiMwcewX1pv",
  "key42": "A51zBhpe2i3rqw3CM8PyoHgaWAYXFa6e3p7JRFgjviJc5PaMiCVojtK7PeTXSnK5pe3eUHZh563pU5EkVrtggvn",
  "key43": "5inAHpu17L7KRnQimy4beb5xHzv8kDnSDRFv4x354LfTrpRfiVx44qrbD6QiyPzeQzrNe2aSKcezBuq4MB2prMzx",
  "key44": "67GAPoD83U9jR5FtBoHgXU9sE1t1EH5i4QQ6JxKiHUdUgHRMhfHQ6SC3hTwV59mEMb2zpwRDUqwnH66n8rp8kQ31"
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
