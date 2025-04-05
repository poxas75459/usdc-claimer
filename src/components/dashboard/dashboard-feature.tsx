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
    "3DY1qmjY2X2kDehaVe5UgcEkLDZoHjGHoekwg7kMH2o1XQuwsHBQNifBhXKqsGgwUKTrxyUco8Z6i3zcrEv7Vctk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q5ykouCGMfb19pNL6u1KdhGp2GXCCtKH22y8UYeZhJvKE7aUtFV6UDNYFZKkjiNmv9wUcP4bodXs5L42Pq7ukwF",
  "key1": "65Wtzn2L69Teooc3gTyX1emF8NVvjYQkWKwub3S28bKvfQcH48G3GNpC62rPB4UdUyC2Dv1YoAw3wmzvnVPRSD3B",
  "key2": "2K1FvaU3ZtUnLxBNvMkSeYNDQu6Ddnobe8D7iVwixPQckgXfVdhpoKkFC75rs9fwqyNa2qtVEdFutCHugXvJigGZ",
  "key3": "5ip7VVw178RWZhc7Wzy5YjRkpSSCQ8fTefje4bMpkgWRywj4m7aztzwD6SDFHwx2g8RfTrmSQvZ6Entm7TMTWemz",
  "key4": "218q1amP9x8weWYdBjENie5KrepHroA8fDUiG1kx3ebRMpF4cZ5mMFp2VobAcm2bzqtUUKHMWdhF1SJXMFk4LMcq",
  "key5": "3zApM1aYns2eYr2bo4jNziiQ2ex2q4eZg6khm518m6sF62ewviAvMoZeLSviUZJBTionWn8kpZ4mMDM8yNsB8fA8",
  "key6": "5NFniU6P4SQLZYUwdppm3yfoaQ6UUEQ8qb3rTQKCMk41sDxrZuAYr1ecVJe69NHCcivHQVb6kde1sJt8Pe6d2arc",
  "key7": "3V6UD79ehcqgEzafAJ7sF8rxqyWTKayRM6ydpsnrVK9odQPw8QwaSkKuiGaFcBUxcbEmCKjNbNwQkxSeAtQBziSz",
  "key8": "BqVHrz8M4UE9RiW4xJHmVCkbUyZz9iC4djEKqjSyQEVngZK5oDG6jQ2TqPwhhLzZ7qLBeNWjLtqNJNEWBieV46j",
  "key9": "624D3h8HkjvQfGZ9ETCZ78v57YRGZLZc55cDUQRJLkkeBtBqVkcRJtUFggChjLBjQzgPEZvb7ZQ2N35Pv16EJAf4",
  "key10": "5Crwuqb9fjdSR94mb8X12BqUismqbWMgzh582ddkUWJakZ3RU5CwP1Hm5LbjxcazaYQTfEBmL9bD1T4b584Aedwt",
  "key11": "2BoYQGWd59jnWXG67HUUayKfqAKRKtP7JVTia88WVYtpYNHpHXMrAUxYypeKfFY3Qpj2WbJrPSA5jraeagLD8tzh",
  "key12": "qAxrbD2nFqLiJRrz4G3NAHJaBwKpCB3NRYNY4q3252dzbBobtu5D3kvkshQUSXYxNguK6AkcMAa41XFhsTK6Rdf",
  "key13": "Cu5ignV3BCKj9WaW3xyj6qJgA9BinMXwwg4G5yWYKLuhxasawPM9dNgfEGgStmYJb3r6MRwYudULd752dUr9qHC",
  "key14": "MAAVYBfkUUVhrcQ6Mzs7YECYDcUoCMak3dwGjDLUMtE4wRBmTV7jSJT6x3Uisjhnw1EDZHdfrcnneDvT877Jkx1",
  "key15": "5ZgkehBFzNVU3A33D897HFfReKqpHUb2WgB74ZwCsJdewrQ6arLRct3qsSfjNF3HMmiebPgwx6Tc2uniDGhhMEvj",
  "key16": "2MhPfmyP9aQoJZ5aYXaRtZWgSghEn5xcx2UMG3MnnLXq3a76GVFTLfxLBPRbT4i9ehUTwRFoo9a8RJuc4XZ9MfYF",
  "key17": "5gCmxtTcMy92d3KbxqwrQELXVT3wVjTQfXto7AiTBJnNq1oCVsHxizh4oc3r2ZjMvEtzUXz9UTmKdN3q7Da5W5aK",
  "key18": "4JgxLdmMDndppdyuH4aJWbaDN4NKr1B2oTXh6LQE6wqPnrWQFUKS7ydbtx6vgegtJJKPxEJcszxtX49eQ89nZq2k",
  "key19": "2utnsi1fxvKPkBpUJULsrPT3MZoBA7XGMRGaxpBAfh26tJt6vKzC4qAY1zCJ81VmGNmSPDms8XiLyW5Gmdvketfi",
  "key20": "54EqYg6aFWu98xvbCMNDb4zAC5V7dcFzFFjB6LFvMsSic6Xx5q24Bo7HEzsg5KtZikhvapFPwEnqW1zuaVaZvdcT",
  "key21": "39UuYtTYZ8E14BpKa6HbLG9RAaPyu3w3iGJ6pkufmGTEv776jprodf3z3sVXzdyc5m2mBQysb9MYpMGv79fzN8Gi",
  "key22": "3sNXjTVKK3pEXfstZ439PjDWcv71xkxdQTv4dU9qbv1sKxWaK9vFXnEqYvktHegR16GUpJserNGVtF4dAqaBdmEq",
  "key23": "5gte6pTjECYEnabCynKtxnpvs7Q813rW8C1PaJjSbG6JjqD6uc3UzDapc7EfCtYdwF13nXKXLmzJcaTehNuJhCFe",
  "key24": "CLFZv1MxM1EbQ1bVrSj6ZgGzfwNFy4h5Us3dhJPVXRgkVjmRq4vXBAYvudVaEvuyiMmBKMwNhjN3uLF7t4r6jFc",
  "key25": "4huFogZuRNU9pVy4oKM4CXHiQVL1jXDjiGxaWjh9yvYf5UNYaPjUBdsmsspooAar4VgntAZJJEaQ4vXEVkCStFJF",
  "key26": "3uFU15u9KovmUkvARteMwUboJAYX4qQhyPRhkjAXArXbakUEQh1Zrz5gP1gmN5U7YtkmySecXBfizoqgK78fkpSK",
  "key27": "2SJFfyCKJvDYtht25aaLovFfQGKkLDPT3TQFmwrHwiQ99qX2o68W34pfTzamrUYg3bei5gosfKK5ZbVbGBGwWet",
  "key28": "yyXhTeUd7KMWbzCbYvYyfQuCM8ba2t4pj2YwWiNC15khCVgLoEHAu6wCy3zAMF3H5P3bmFT9sY6WVeaDAMUQkRw",
  "key29": "4LMtB7Aw4qoM4TUusyieFNikyCzR83UY2fE27wnH2AfMaxQiFXi99rc5XQGaCMSVu6qZnQgPdt8kPA5WTNhhoPfb",
  "key30": "5xdVa7ETUN9QnG8GHaUYK4kcaqVU3W6jjUsoivtss1eYpvB59JZ7T4BJj7XEaky6n85T1DaW68o4dh1BjFpJRoAF",
  "key31": "bSsMSYEi28G7CafHbexi4mVE1Ue3qtFfcdrYd5uxQ17ZJgjd3e2hpK87z64ThB6TsHnRHwF7i1HG2ywEJJSXtVM",
  "key32": "38xpxsELkc5FBH9KjA87rojDoek23ZpCdAcJ6KxdVdU7FcTKZ9J3oh3SbttwkiS91Kv68vDeqgnAGcBzyAfEcJsa",
  "key33": "5265k8L3yEuN5icSDCpK9L48SKt9vkEDuhfvLRhakGrzMqeKrmDqNF1DefZJdqUymU745Ay59VyvET4sWYZFLDCX",
  "key34": "hEL9yMcGLCPMMmUSLEhxCg1v2LxN23T2VZh4M732F34did9zwTT7eaF2Sh1Mybxu3GGA3GMQ1wAGmvqXdKQis39"
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
