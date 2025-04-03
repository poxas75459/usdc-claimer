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
    "4zHzPRJF9yPn88DzX95i8SgeMcJVNMhxffZ3H8y7VabACmjra2voVmYec8rw98tZY54HrzfuinBPuXTz6F8voWd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xasf6RHwyvXzmvCvBmJRmm1xXdBXGquHExgcqZ5LJcfT7gUNMhPSS35KVQ6UYUtxk6Pse9kwhBWThUYDGJMmVpb",
  "key1": "4EFyo4AEdzzSgtozXhayZ3fQ59pAaq5QJL6cGSBeLJQYUv5NASPbL7UaUcbhrGrvqnGUjGemidko9LLSAxNtCtPx",
  "key2": "5vUr339h5Cm7cN59FoV1DxAyAcTL8L7ioM21W7wmgb82PZudXrrHWX1u6N8KqSPZYdpqwmkZ81czpTLjbM4qo81m",
  "key3": "hpDpSYL9Y5Mi51xUhoZwAxGM8vznVwn8Eu2BE5y5N6ejszkiagSR8th1jcuw8vCZTaPq4jGfNMrsZcLPB3skLM1",
  "key4": "2ht92HqUbmoCy5QSJGLiywvrKJjCTstUHbotCU6EhxLNWBMF9BASh1hTQq5TTAHxsGo1ukiwz43ASJRD2xakKi4p",
  "key5": "3TtKbaGWCKuWL29iT5DKaeqgxN8X9dty4g2ngWkYCGLh3vediRjzuywiSND3MJF2QQf1u2VyiGpMo1WkEJHb55ph",
  "key6": "kFQ3BeEQ6GdT2uRJjkhScYXgELCKTVyR28k82pmHRzVsNQhWuk1unb7eRmzdnw7NwLhbhHKYyHvoCeNZd64RaAL",
  "key7": "5GW7bHgA9Ls7NkLe8K6XAa394NjQ2DkfEsnxBpdR6nuiLE6jXw4uFi7tQJ6qgJJDU2MqdLSdWyYPPadP2MZdre5m",
  "key8": "4s7zvr6nexW9aHpxnCMVYfTPwhEpr6VXSBcuK24phonP4CXxDbByPdK9dNwHtCpPSSkuNPSnaKMBu7FFP4vLntgE",
  "key9": "3NJb4uUioHyFgJ5PhVunquLyAwbeHg8yHxYnvrV4oFHMV4NQJRaheHv3sWrnRztbtMNKBQaCWaHuneW3cHBmR4hi",
  "key10": "5VXs8GC1DApp6JULmTkFNo6KnjyNd3NAT2LzvAJZNTxAdsqbyVLEp8UhW5Qbg7Az11jk7o1uKF5rRo8649yoaKBb",
  "key11": "BnRGg1cPftg2ma6snGNkpjCMQTHnvt3aMp7r1RWVSAyjf16hk7cXVZbJRFdeVgLVD4aft2jqDzkWMoY2WHJCZGL",
  "key12": "DPokJWj1JPbm367rgjXHLpDoymLjBozo4qUYs2q1a3vDfLFSWddcHofBcPbaY1ig7mTbQWTB31Sr9M9w8AgdZbN",
  "key13": "2kfyeQ4UqvgvFoaGUPTjHjAkVr3BWmano9AvPmqoDAw9QAVzTkJEPUbNRUyuEGUk4FfMCBff3UCuUmVhJmAGXRX",
  "key14": "3a1FjRPJxNP8fsjc6vfpSDh3SGrfY9bDCUjfkEWPG9Qv3toNR4qAjnGUWhsKBU968VkzG6aP3zFdZSFzaqSFZFVj",
  "key15": "461GixA2kTCuB1aqhiqnX9KFnKBqgXdMZJjfAu27qgd6RW5hDP3V89PN253NvieJh8y3ZgcJsJnwtge415gW1M1d",
  "key16": "3YDEZ21KqBtXHydEtjhkNcRS3civhw9ybhHGu18dtASEJgz5Bo5V8YrVxr52SsAHBEik1CnAo73UvXPcn7571knW",
  "key17": "2hg2pRMzGHTRGthgTLY2K64S12Tqow1UmVbL441mdz5JgenisnGpZrbKERrSgcnLfrF4Y6tU7KHkALxiyxUPdndj",
  "key18": "4Ec59FM54LTnrMW6tkv1Aw5HjKn7M3UxUuEpr1xoPk2sbQsCXam7ULPbXsmu37vYLWwebQNU46xHrQkrJk2dJTKV",
  "key19": "2WgWryJ4ZFPL4oCrYtJSLXbwZcHY4FEcnuGaU7xjX1FDJJzLpZRF19TdzS2Jy6eLWKpe3zQvu4WPbX6Dd3c2tqu5",
  "key20": "4AB8eAouB6NcsSRGXinanLgiAxzdQFBsQMx4Dyg8Mf4Swg1FcKNLTYpF9R7UzEWeSu2hZuCXUQEftAAsMb3ESuD6",
  "key21": "5aV9eHqsvqoyXkaRWLDqYZB3rWDCW9XYgp5xGnCHwgYg4S73VjvhDf2gcMtyLA5qcyS9QmSV7KzFh186a9J6YUxL",
  "key22": "uENU6eFVJ93KUpkfNqSLjkWoKGBU5wewUn6esTTLhvdACnzLw1CmQVShx5YRHfZkYD3XyBpVddT6sR9SCfsqu1m",
  "key23": "48BuGyQRWkzzo8k6XLe6qeJDoLEcvLTpoiYLa1p9LDA5k4ZC4KEVnpSint3uQ5T2uEn3T5DsX7yCmLDeNhHCmKFv",
  "key24": "4f1pnkEc91KJLvu4wpZ8WnCAwDiYzFeEDVPJYhKVkBgCkRiMjRcgtZsRSGx2F66awfwi22zecj9Tn2NiL2M6rUeN",
  "key25": "5YRk6ZG7KVjCNnacYpK6nLz6mUmkrqZs7gBy2cMUYyt3MsGfxbU4nNaUmYzVdEU4ohvxdVKSjmwD9UkkuwhiBENz",
  "key26": "qPMR9GAVb444D7LLwL7RCEHN64QJanWWWui4jMWgE7gaxTqTjGxuSfKGEhsV6osb9X7PYC8UGVNTXZ9tnqXELAi",
  "key27": "2VNy14aA6W3FKnHQJGtNmkVKRspn3Dd4MXMhcz79LmbngGrjpEukncDg9GNsXX2HgVLgDMdKZFVHg56bAJZsQgSG",
  "key28": "3fp6FxnVTyLQ7V96uqkiPtQJZGXgbMwTCSBwYg1qaE65LgcH6JmTaSSf6m8GoaXyyxPR9raPTL6qwU1bugJme1xo",
  "key29": "552vcXGvY4wodjYtcTBjzcf3jB5Hu4YXCPfoXY94cq6SaYyHRcT1JyqiEgxuo1jqVynQjDQHWgPETMBuu6njqfFU",
  "key30": "ePW6GoaEtj7rSgS2RPBifUJtkL1bgBhVpbVskZwJut5r1dbAPdaFebqEB4FSYsZPyGGYtXgse8G1gr7K9uJKfQP",
  "key31": "258x7bEXVjgFFGX7PyQWfGbmSWZTiUBQg8sJK9WeFGCtqEi3ChqXqv5Cipo8R6HUAMhppeevUY4Q43AR5TyFJmbz",
  "key32": "2wGD4Xf6V89rGcxXkHeoPHJUxzn8FErh8YyUGez78ikRFivqmnrRZNENcCjjCx1NB7HszwEXMsyQjgpBM4USz9LW",
  "key33": "2Yoku5VhrCdDkLizivPPTcHMqSsuDvtYwtwKM6yHk32p2YA4F36VshHdSxqcFDRmwCcimc1StyNrYRR2pmVcnjP1",
  "key34": "r8vJXK5hFgVDsfgh58FTh1xEqQqHwaecVe2awCZzi27pLfNuXJmMZaALQiBR92LfxKLDx1kfVkp39gseNpTRL6z",
  "key35": "3AuCy8gaWziuApNFmSZ18GHNXhGZjnGC9bSkaKurkajsjhybVNwxh4pMcQueQgtX9EtTqV5D44MXq49VfCHzayYE",
  "key36": "3cNThBYmiAnpy2P9nhWmEwZ31ZZw3HRFYAh1pHeV5Fsu7Youht56JDCZ4x6HFYArn7tVTYYMkQNoFgojbAfc83DK",
  "key37": "4WNXjmM3f76cim5AAUp13hdo7opnJLvpLtZGtsj7bfuGvM2jBi5Km1QjMmcX1ipgHDtfnNPM7MutXZg7ys5kF9e4",
  "key38": "4xD3ne66mBSFTHPa4JLCAi6fNLg8sXBdComN86JSRaEvQWV2VeKhfsD4ZZbRjxD1598Hkn6a3p8j6QvnbDDSL7iz",
  "key39": "Vs2TKzMLAn1urFoyF6VP6A3fLciTucyG4EstfuR1VjV5B8tNMWFjGiikpq1Jybmmtv48zVCT5ymD2ShAoCnhRNe",
  "key40": "5p5ipFnevd19FUXVQY821PWftbPRdgYAATShm6P8FmxHifTPp433A7PPwU47Z6gd51ktaedqTyQ1ZJ5Nc9CDPGm1",
  "key41": "3KhWqUQeu5FsfsjeRwNGgvQoMQkvWzEHUbJnTii7UjozMjV3hxaBTmDdMuJMYATdZo53x83ENveFnqc79gqgQxXT",
  "key42": "53Bxqjso6QACeCetNQzy1DtEe2wkUnF6TcGvbhyt8fs3S2u5QDUunRT8gCmZv79jbGfPw4XMb7X3ALGZTC3tKWgo",
  "key43": "5uFso5CHncAP2UYuprz9yA3ugBEA6HEfmFrANRWMBN88GeoazUi34nedLHDadnP5Ve2xS4DcJjvPX6sTFkWjbNyX",
  "key44": "3Jqku1Va93pLrnAXthX1oy2aovkWYET9RBz1hLeTNc9TSwEWA1WAmvUFxiPskymHZu2jXSfDePT2nm4itnzSSNgd",
  "key45": "3qvEv5oR96gUjBz2Mt5bLnKCdDjBpNSThNWdqpBAvW3joeU14dy8iaqo7fVk7fnEoupFKa8vV9BBkwsPk8PCJoF6"
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
