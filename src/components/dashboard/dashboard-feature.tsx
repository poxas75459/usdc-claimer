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
    "2bAThZpaAog7YaFFddNbxWUS7qtzdFd5dfDwX7q1Q9VT6Z6NMniArQzFSq3vVvth8RmefNMXRKmidH5N6FMgKqVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cjpMsQ3MvGurGkVaJ5Ns4f4u6B7xxjcWGWeoL8SLSrNtzA6wosegDMRvYtvx8e3bAcbYN1hdSywKBtRNMFFtBLh",
  "key1": "qeAwBnzeUCVNzVrp2r87WhrqUGiGmb24BcwuW6JJJEJFNkE9shCenQE3bzaBDUPEyGvv4JpGPRuMKGLvmW7gstD",
  "key2": "52Diop6EPFj9TkPpwfYZDpz9EoHQctNfrEVbyURjzJPQw7wxUtvKBiZUrvY5c7DjxPK42666cbu8mLWJyKoJEKRL",
  "key3": "3eCiehCXnuBAdTLWZr59iAEsmVmNVFcxE8Fww2Umqtob6SJHB7yFzwEgp6Pt1aBf3Hr5CWa6it6Kg4wp7asB8zos",
  "key4": "5yRRLaedVHREjMqQpbHje6bzSL7TDtBDWvEKuDMyRA1RwgXe6LdQPwCjCbp4meQEZtdXX35Zsafq5Y7nH2rDeaLL",
  "key5": "5QciENBXb6jj5R6rhY3cZUCyJUB6F8YubavHSgDXbDrZGRypRo4bP78QZpQTQ5KzTxbQJaT5yZDc3AyRG722pBoS",
  "key6": "65C759GPMXCyvZ6JaNBXr7AcyXusB16FdLVXkLdNS1hbZsXBnVeNHqNubybXuiqgZmXxGHnSNoD1xbuJfg1Berk2",
  "key7": "5KSnazvv331GgiDqBMchYu3rv7c8bGLccs9rLZ6VB25igQBZhb1x52f45sScHwrPVHvYL7wxFb4njocqs61Q95KB",
  "key8": "3yoMnhQi8mgC61bFfsMj3vB12gxu5ATyDAHEVBMjwKE2x2CaxriXEchfUP1mxtTiYSq1rFkfsK2H2qWFX53pZKtR",
  "key9": "qDDq6S9vypiTUxQD9ZaQ8t5r5MwsGCRGMnVcfAJpmcMaNd5aBzRn9hNfMR5id29U923iZikdb8vwiKaYA97S6u2",
  "key10": "JTFRSw38XdaziokanbJYZvXNgFobrVmzguAtow1KYWXdrXH858TxcPr7yrRGDASCUBbosK6f3RXufuXWdojXF6k",
  "key11": "632oLtGCgRkN2epN78KEsHkkhUjZZbV9wAc8WKapWvnZQP7fRsL7QAWLjWRfqLqwBEjgPTFQGkyBsz5JLPEWWemN",
  "key12": "2S2fxCiP7Cuf8nfrouxymEsR23G7guJgpu9e6EyPUED1exRkRP58p3sRRbCWUxKvjhDBrLm3VtAwRhtFdD6p2ZJ3",
  "key13": "36TyM5m4RYhyPU7r4oFgEsEscqb8bPHyyMrBpiVL7Qvnn8sZgYzLbFUWKd1cSwdB5y1d9nEFu4eS8CuWE4EvG64T",
  "key14": "2v3CTmrMqPykx8Eg1rAV1YozGx8L5GFSAxajA3uiha8dR3QjTmo5z4sSDXSHofEgfQFto3Wu5RXFborYMZe5W2JR",
  "key15": "HzAMTiRaG94rUsxp2y7bkTtscp8J8tdmK7g1cze8MAaZAmnd3bYeLo7PAL4sGoGb9k98ow6AMycXjdVdejgLNVS",
  "key16": "JiQuek6QRbxW5eHBsr2yRNxT9oBEjufv9TZd9qmfVGENG6tHTv6eRMUMRz6wWiu7U9xc2VVWxesDj4sdZuyF4TF",
  "key17": "2GH1NqiWWQqMSTrZZpkQhpjNhGdqMa8f2eNdVmUayom8ZRmKg2MA5ioNHTUnozb5hpEMCJg8qQRJeezhyZmwmrYt",
  "key18": "3nVJ2L9XNBPhxGb6DYGockmUdrfxdWL2L5DBCGkE81kAcFBypq4u7Dydb3iB7pu6D6EZwh8ThE5zL3Du7Vp8EFAS",
  "key19": "2eV5oRVMNAYrzWbDWdtesHv318AKyLSE88vTrBR7ezwQtkCnPLoSXYws3Uejoe8VgPB8irxB9uE1knGnCm8Lvj9S",
  "key20": "5hyfc4ireNHtzNzqunxpckKnsmZiCNb86fCoRSEUYu6txgd3ztyUn58NU3h5cM6VPExJ1Nu9x3g5suUpDuTA9W3f",
  "key21": "2u1zcyt5ifW4KUYuci3ZZHWSYcjHr6DXdkPx1JmGj6hSuN6sjp39WwA251Cahj85S2V1XSYiEfnLHcNLvaNwbhBF",
  "key22": "2Yykf7Z1pZXwCoqNCMir5xMt1qmxDSam7Mhgae49NrRgJqWqBzfRgpb8PVztx6dZiwatD952i1EoyLLX4pteeC9M",
  "key23": "mTgaXGVRepHLApTtoHVbLVvMTERMGxwsJiHLa9sL7YGHmpXZ1dTwAstAoHoGZuBw3oCg6gvkaRogAefp2TsSD2G",
  "key24": "f9obYAR2sMrsDG5GvC9752kBnBWCZuY1sFAcF5HJnzoikSZSfh3Zp9k8CgMwn4uaz7FNcuzRoUJYdKgYaQx9NZP",
  "key25": "5Ya4BmXNAxNyq5NYuGZCTFYLAAP4B1PzvW6afvJksz8RV1x7Yb77YdV73T2vprQDsv1yRbWot2BAuNdowhBK5hia",
  "key26": "4G31Ekdfuzf8M8Ce1vnGnC9j6UAmuJqrtsJxhZj1CdfJMJjydvHmNAPWkhPZEW3rpfrWdeNf1AmLbTrDEU3CGgkT",
  "key27": "46Zdc5bN849WyqksxJoCVgSqg8HY1HtRjPgecLVFVnE8oLyZKof6cicZvn81epNoMyGyxgBY2rfiHo8adjcfZfmE",
  "key28": "b3fmnaDGAneGuHkMsCVccLgu31zcEZMWShGwfS36J8yW2fwPRGQoDvnuBAnL6S7iuNbFkRyn39RSXSNKzoh7XgW",
  "key29": "P8HSbyMzme2BZHJ89g9JPvb3KjEpXGLxrdRD8CVuLvPFvP2kLwKznPzXMQqHJpQp3JHEhc5AR5S9TF8i1mHZhJq",
  "key30": "4qMaQQYXYKe2m6dJpiTC5e8X5KxwDaZEQYhz2D8UW4F6VQxa8xioiKaL7fdX2noBxo34Q995SaWCpxGaPHfY4ake"
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
