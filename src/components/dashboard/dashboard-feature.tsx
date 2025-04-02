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
    "oAM6DCzoCV6DoXMQQgYRBB96E6bzkxkbxvGnkCZQd1aEUG31RBTnS7Lh4T1XA1ANp8NVA8HAvK1VW6MoPQ2L2fA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dzFt6Wt84Hk3TBpfA7w9bAnmWMkcfDCzkBVWJt8rFz2tNi28CZceGz4HqpZYT7okhGF1RTF7tASCpYNsc2euEpj",
  "key1": "4jR2uhk1VXKCXNEyWET8vF4LpgHBHeGJpACgCgjbmZJqBVDcizNGiPZeXFMowhzDKjfhyy7p9PDUvLKABDx4fxsp",
  "key2": "3k9raGpz9nFaKDMzxc2dCGaByuxY3bXLJZzieiS2qBx2HgVJEWrJ9PeC5L7x7Y2Wti9kg3mAijZiFDe9wzx47vEF",
  "key3": "GZppewkdS5ti9swNJ3xx7j7kQtvgtLkXmyqAz77AVhoPptd7E8Fy3VGfyDRiCztjoyiNvXqkt1E726wPvUbbG6K",
  "key4": "66C7UrceAY2svx7nP4cyc5etAjoLESpSih9bxLh1eCbiygaKxLExMD8XsPZcwR1AznnPzVuUUsDMJDX9v279NajF",
  "key5": "2WWsh5E7TJmR4QdGK1E53UiCZc1KXtRmqzajeuXbNzb7qTk1riX94uxMi7RXM11P6K89AVEVhxiHV4Eu8Mw9mUty",
  "key6": "kELvmz15pU1625g2tfiEtJzC4PFKV2cR3XkdHZrtREFwtGAVjHuPY2EgqLEmM6N8SGCzBgsJaLUBAAN8vgAtMzw",
  "key7": "59yo45zTA9yw5fGFZeuXR7GyCu5cJQp7TtsCvh77Y1fnU76CRDGbo8etsjLdc7cjqkez48C68xeRLT6c9ZpZa7hZ",
  "key8": "3FQJiVp8Yz824W3nL2ysbypfdaHcFZUcsoDchkKkNurZKTz2MsAW5Pgfsyvdo7TMG4mQzNBHKaQ56bvi1kUUK8mi",
  "key9": "24gNGzLKWKstfUKAv8Cjp9XE4MXSFoRQggJU635LagLjBiTYrKNRzqRE5UATQgoxnk7uJXriwVvFQJMDvmqPzgJV",
  "key10": "yp48CtimGHcSk2G2dNvwK8Bb32sdsg7Q5XHFzLKZWkbY6tMoghsJADCk4exf5y6dFTGXkoL2aJ3R8cyqTG8517L",
  "key11": "25meAyc314wqCauWHyuCuZEpxEb2jG4kdWahRAtdRNcaWpi2j7UGw3bYKmrXCiH5grXbd6dVRSzp9mvXDv1CrNni",
  "key12": "3GyUDypPUCFgLKCjnfC3NmkzGXgyepgdboHRqwmFaXxFiWMxaYuznLQgwzphboGSBawAPRwXDKQxCKZJzi7wDq3j",
  "key13": "5a4PRJX7w6ZeCNbvYBdLYatbdeWrWAkUm2N5PrWJwB6dbNuMcSDACQQ1tLvm757spoUMaYAqxVtgT3r3Lv2sVuxF",
  "key14": "5ZQrWmmwWipB5t7D7FBrTDfYBaWWEA7ZfuzA6NnzUKnykAjRbzbuiBqj9e2Y8jB7BE9PUxNYbWCDACfrEMyVSyPE",
  "key15": "4rUKXVb6SM7jrLoQrdsC4LZjNVB3vhJfG3ortEiNAv6MnExxdm6GM2hwCFemi7YiWST1VLwLHkaSSAxUV5L3AfAo",
  "key16": "53jhG9rP6LsB36tV9pea2cEQ2nXcBcaZkHAXQH4DQ9C8Tzs4XuwzR2XiMrzhvzJuGERe64Dzt3bxVSjZz81dsW6X",
  "key17": "3kkBLooMo6AZ8uqXen5nYFTxvS6c8b3Ac8sJqyBtPVwPhA7EYVpQWbsnudzVrn1bmp9ad5jtc2HZ1YSXLK75dLv2",
  "key18": "3Suo1aoXUBZsoz5kKrtseU5rZxMCprW3QQVwicPuKxu7hJLUgiz2stmtkxSMA4TrXbKCzJeMoUYmqvY34x4xXAAi",
  "key19": "2EUky86cyFr7EqmLv8J6tUve8ceGoCnxmj78ncDiTTgtaVR7ktVoqSLHCRZqMGbTrFDTqTXa7YwYgaUKWtg3X7Qc",
  "key20": "2xP1zJH7MDXoUxQd9ey6tLtcey2w4dW1eDHZZ4r2DEaN5uX1Y9Y1LbXE67i1e1B9hxkZJcSjh2KnEgE99DZHrB9f",
  "key21": "2y5mX3wY5HxndHWwu3kwuhApqoRK8NjRTfw9AtyhM2fGBC9VZBkJu3fxiuFUB68pqj1Br2qm5bt3XvrR1r8cHQn5",
  "key22": "3Rd5aj3t8xJzVEBgnoMegfVJ7fxAkLAa29UZmwuqwm91u4h1NZikyhgy8YzrNxr1J8Uc4WALSXH35wMUJ9uBswav",
  "key23": "AEGedNymQEPMgpxcyjEpRyVRL4b4hDuWZLv6zsUoSAEUqDo4XwPcssrNzztNUuhEEgAZTdUj6vEEbNYcXZEy2JN",
  "key24": "zrtFvYbQgVqtUktthx6CK5gDpnf33VWbK6VyoVMnur3fcSLtCAzSwWrqepMG3C4njSn8ndYEtDi5RWW2RXPKNrs",
  "key25": "4tPiRvcrtY9LUQpB5dkwUq8AiJxKJi6LogwEmvECkKbTYSHaRMrHYbDXH2Wrbo2ThTSFPur3mZKjTqit7MP58nPm",
  "key26": "5wZjqfpYygQNevBsNY5fZBhn55gCDKpZptpwvXiFkWdjGvcQTQYCLjSJpn866XYS6F2QSEEfKrdKtZeyoerkbcRy",
  "key27": "Hf2NDzdho9BzoYjSTu9Yg2vdStD4HurLXCRfwmuiVz3SUCYop6LYN2u3G4vdYDzKZf5uoWNzNa7zwsYd17tgpHj",
  "key28": "2L6XtmUuJgTMRR6eEFJeKMctMfZSJVyGovKai3t6e1fL48rDKURb2jV5u6nLYSxkzbxLGSczUAgj2idbHYFzsoEo",
  "key29": "3GRtbxTj1GQJ2whPgZqGuLWzALx1DSDnchfpAXCv5jgmW7183coDXMreBLkSRSY1jW1buPZCCvddAC2d9TXWRX12",
  "key30": "reJD6yDSxkeG84r1hsb9eEKY3Wid2niXQPZ4B2xB8Ewya6Jodu4KKMf2jHEs91YnFDRNRrtnW2FuHRUVjSNcNLb",
  "key31": "2y6PTq7zjqHUZw4rckDeCQDFDRxgpytDcyHxGzFcBYasYfq4SDEGjw9wcqDGmW7sHr87phnu23q5ZEbhdrzbw3Kd",
  "key32": "55HYUxYeeSwCYmEKeCTQ97Kut54dMuf6cVjbWRM952yuBX8wS53KCCdorEunXQoLVQH1XnzAYoYTnrUQVhsAjtHC",
  "key33": "2Th4gbHKkrrbjEmkgX6npnquqzt3DkBY981AipWeVQvMCJedGtEyRK5EyT5cvtWWQZc8Ga3PmzWHMx95nfk4Ecre",
  "key34": "5EMKuPEjyNkbcGaFtcyHVRuD3yzgjVnojFez17G77w1dJZ7M2NiNX1eScHknahApw19PexsMLURh7R3kQMtgsBTx",
  "key35": "4V77sXpoznrgYSTkT55EzCuhx8TESAXU6Fwp8YGbMbaUkE5PiwH2q16f2MQThFqcPXbzhHvPviNJe6XsPoAayBoY",
  "key36": "uGvw55FkwfU842tSi9Sn2FA71qDN4g2egDZQnow8rSPiZSGuPnbA5wtdefKdae2hxbg7YTGZCA121yzkajH3kqd",
  "key37": "312EwfMjzAWqUUtLqJcxUE68Snn4WS1cKRoJ4rd5mhvvcfyDLvXHLiTu87a3GdNkZsLGeEy7tSoTUH4iwsgSz8Gu",
  "key38": "5mob8fQ5ZBDnnECw6cm32iTxduyFvLfa6ncbiLReru2BcNVttmk36pdnApTWKepgUPvWPF1daEYZvBkPaFfQAtXj",
  "key39": "2put667mRsFjhk2z38ZT1DvMXgwbFHymj3qm4yNBMnKZatfdGW3t2WXfBnbCirzsjsBceW85NiyCbXY1zw579awr"
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
