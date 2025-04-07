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
    "vXVFUcScA1tX31Bq6Ba4yx2JSMU1wDJdNWFZ6BzoWvVqnYUoEieJfVTUmLHfXNceJpq8MtHeuKF4HW5ojVRtVEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jiyEs8Urq43Eao72APVTNoHE9bQvYf2iN1TMLktAeXnKGycNRr1F4sAMoyr7fqehQhBJiHa6tdb4X6W2Dj8UgxG",
  "key1": "5uw2ycTxBY4wyWV1NKJ85X8o9Bu4EdEcCPpq2jxMWAvefRmV7PvagvJBjpCsRNfYZfzGS1Wu58TCUbxpPwWJQTBb",
  "key2": "3LTfo8XdXWzAy44qeRpgS5sxyCU8DfgLg2o5H1DAVz63ymN2phYku9vSNaDqVYrQuxHtALJ1XNrr9yhMjViC7n26",
  "key3": "3h6cqTffQKFyuEkEZDWh3GvA6h4HDcXKckkFkdZe8DyCHLjrGbe8SvkrA3WHpxEUYyuTTN5iegXTaitiaaoAd1u2",
  "key4": "2DqteR4XYFqZY81PBEbmr7EFHxZH4BBWLeAdriryraWUg6FAqKzeAGBGjwAqnK4PFZSm4XYxjArgm8KVdHL67V8Y",
  "key5": "4jQQQcBimDYmAzovEbt4vJvfVg3yAHvyJmMA53PXTYzSSvVsuajp32m35GJLDAjgHavQCzCV9hG5P15HQomUpoCY",
  "key6": "3z44w57ymdt77kXdpw6wP2bdmsCufHAExE2qZpPPHYRkMj8MRUb7ucnTLzdtAdboNkciUnM4tePDWy83HD2uRP3U",
  "key7": "29ybmyvHWJ2EUv15NdzFVYyzKShP279Q3Kz65jWAV3mZedqLa1nAtDszgMsBxkPgjYmnWFhfNd4PBk9U5nCvXvpa",
  "key8": "566QpNxuCfT2M4TGUgiDtkaWBgVEzpvTkGztykCuwwHh8WPRQ7czE69DfQhVA6TE1yCvWZA62sGvaePGPwuFUA9C",
  "key9": "3cwhV874PVr8jt6MWS7TbCNi3iN2JTZsVVitfTGkBkGeVM6yGAvBLJ77yE7sirNtrMHvxk6nwqtkViscK4d8XkW9",
  "key10": "5mvgxj4uAjQNjUZNdLJ4M9EXHWMBE7WWmw2dgr6jEQmGvq7utJSGL6dDSWg14dw1cdxYFNEo5JAtEGEQM1R5FrjC",
  "key11": "4m1r8UyeJ8DBcwHCkbhrc7fNDLEn32Xz5xbXCYbyDXZPm1mKMgup3ZhUkUHW4vbDz7WPsggGcDUVyT1kV7ruywQ5",
  "key12": "3zNhfdWwS6wykfUdGwU4ooL2x9TGxFpDeifAYt5LS5p5KBbhc2cZ7SgG6Mhm5xQDkA7K3VaZX5DhXzdFHKhqwhuT",
  "key13": "53gShsYHQnoujQ2Co6RuqsUtpHEvdZcxBJaShHp2RGrncBGYRiB8xErMEfrWDKqVf3o7BiQFrgpyBGBmmEFu2rRm",
  "key14": "4Amzb7z3WYoKmnj66vNs8xrFRS2TaR7xw58YfyQWw1xYjUYW2zqcV45GiYx3Km6fJsQfL7Sbvh1eH22HYbwjrGWi",
  "key15": "4VE97rFAYwUPzHy38Qurr8bZwcJs9AbEunbXiaM3cHsXxTPLsErAfk8i9cFCxMC7wJd8ED1W3eP2Zuaheu1fEEo7",
  "key16": "3n728kD4roX7zaYnxfc9zidh1P3fL6YNQB2UF4kjDLyMvZzSmbQxpU1GuwbkHYbKWuBRbe2p4GP1F89moMLwrzPe",
  "key17": "29ZSQAGrWsTs1Ftqgs63kFrHTdy88dhvh6aPcqNUexmpnuiWC2zEqiYpKp5wHJA2gsAP9xJfGFJk1TFRS69qAMJS",
  "key18": "5N7jJemdti58vyYySbaErbzQAJGjr7ncqJC8LRtmZqyzVxTxEQFJM9CUt3adj5R1E1uAQLrGXTocNzQTQ5DKWFUa",
  "key19": "2p8CQjcRXp6meLYoKysYW23zze5dJymP9nVMwygTc2cY1L3NyyPjwjksm4zhfRf2VqkRXKaGDy7iqGRstcfXSpa4",
  "key20": "3gcKzvMMNn4U9Tk5zerFATEkeNamHPfTb6aCLs1QEr4H3Wd897h7N1BFnEEEH6zPh1EF5EuuCGEW1sMzDPevsuNW",
  "key21": "5br6UKuHguw8QUiuSM2i7v2gcxk7Ldy7A3NwFLh7gSB9HC41KXecfyTp5jG6QkLxnPq89HnZACyaT76S7yLMNzkn",
  "key22": "33jmKdr7Yj9AgRq32TvfKHL1oVBDPtHptmLMbfQ4w4DpENwR133vDNMeXbHHJmJLaWyiJpGMWSZjxzrCj9pJssPW",
  "key23": "rtk3pHWgQ51hQzXCtd5siH5PvKS35jVgaeurWCyJ37ACYPpmv3aajPSGWQ462YoKP9mi1bnkD2ygpG7AnV3QxJC",
  "key24": "Cb7YXPTGMpNn6oYhQjmZciEBws6jNwwBjExd6Dnua2aSieM4h4wCQ6braUcUfA9pSf9wXa4x9LonJdYSowLEREK",
  "key25": "31KzHnDgbdgnKH1SYCMy9CLQX2noUyE8X69SVoiqkCQXStd95iJWPsY4zqRc55F9sTB5UNjb7LN3UTpxmVb3dcrG",
  "key26": "e2UWGF3eDxpzYv2wAMGkqanwW6PQv4LzNUATfqwF4m8Zy8fJ8kPzXg9GdmgXDF5WwJGQM2JT2ThTUDxdmvLEjtR",
  "key27": "4u32AU3qigUdXvij1teMZSjnipv5yBQH2hAYjp87bGrG1uTAivivJCmw5cddHitQX44amBVe9GZMSwgJSqk69y6F",
  "key28": "5X2eWGuVtA2xXM2QQCmRjSJqvqvv1LgnoLsqzMzmavkJW2JJVm95dK9nEtUymuJVts61cV1NMD9ES92hiApgJFmq",
  "key29": "DqafxLn1ejwE6rxEGn6mKMDvPcp2Q4LjLYykbmUoPhQYEnamRf7HhD7A2VUfNXUkmixKWZme88egnZ1VvNLeBk7",
  "key30": "3U2wKhPb9WmWLa4g1THNUaLtkGLqaUdmWBNgHXE2w36W19Mq9VTcBFbiVUSk43khrAKi5DZMzmqRHnZtsNzQRYuk"
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
