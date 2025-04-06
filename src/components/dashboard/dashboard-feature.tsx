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
    "2suV7ih1cep8XpucwBTsxgKPC86Bb6wAGsqo4npbik15wg9n9khn3nuPZdrSzz3zFY65u5X6WYypZVwPXbvnjD3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z7sxvABNvY1gDcbZAvzoNDQANBYV3RjGm8VRswPKYmWDbHBSddvG9TtRqiegmBL4NX1sdmGmLgUxpz5F9gqY6Qq",
  "key1": "4LAykXWR5gVRbfrds9jiqZNmagBzfvhLfGfb4NGxT9rVYTvzsTXu5NpmujG1GaYEotm7suWTBsWTmCoqWj99q2jP",
  "key2": "4MfRPVVnpducBP7CZhfmCAUGZEoQYH7GbvbDsL4uwfR7WYWU969KD45AKFsGeAwc8rVnVrokL1HmhJseqggMdKZG",
  "key3": "5MLWE8L96scE4C5r4dcCuCn1X6EJVQYYQReo7HAEh11stBGdWn8YeM4p9F6jgbPrR9rSVUTaf7BGCT2wZP9YuFvk",
  "key4": "5qjeWm7gfFr17SUjAQwBs5ViVj5KAgi5mWL1TTGseM55m4mF7gkeNDBebYQTLecDpv2Um6yBqPVTiWfSnyMufedW",
  "key5": "5ygJfzieqt56598QkaLMKo5FFEfKNcys2JXuzqvdUtHyX9biQpQvQLwD4nUv4fqGsfJzxkjVWUV2aG8V3g4xT8aT",
  "key6": "3ouQFn45UomHeMFvEm4cK7Lu9VKqo1X3VopuZ1jexryym7YHMdzenCzcLYPtdGFFE8DDQroTeLFQjYsHB55c39Uk",
  "key7": "4F7v9S3FRvEXWupnCz7bMENh2ojtsm3UVJc9hPUyAhef93KWi5dxLKa65tsJcMHPrQ6NBi8AmGohuHYHRah1SRuz",
  "key8": "viqYb4yYmmsuFvYYzy72NcyMh5yiMhhmCmWp7QoCadNj28vhLnwqBB3tJfaW882gXWULpr2wTtDFzVucoNf822z",
  "key9": "671tpAYZMDpsXQrK1UujgDgyrEp1d4wUAhKLr2QKjPwd8pJwPctBigAEJ5tF3tgh73fcTNCJeczKTxtzMWjJ5g9S",
  "key10": "5g1ii1cdYy3jfDNQcKxXtsCggPCfh21a4rHyuefrFD4qTFgqWNcjmYJ4TR1Jvd7xTHRVAdh7rxnYbD7QmSuqnU89",
  "key11": "dWFPnbJoMdk8wF52rCLWACPWJR8K28cPgy4gAukHM9Ff9DhwGuVEdEKPAZwf2MTT7Au6zZSbum7yN61DT58PZWW",
  "key12": "3gBZc8hxcQCp7rY4VbX4QNnPfZmMGErNJWMZeSEHs3qmju9pyV6aM5yQbPQR3GLZwctJZn1B7VapTnCBCQ9xgzey",
  "key13": "57D8nnPMfQS4si1WqRrmHE61JtAUMHEYm6ZsDoeGPdLf8B9zm3SCBArGbaqd4KCcGcX9SKvwaS9Tz7VJML9tW7Wz",
  "key14": "23rPNSp2zXSJnaggbr9YjT4JdHTthqX95gLXaCZq56He39JDVambZSWsMYPUeUSZnjX7254YiqKGdbBzrkTuFh8S",
  "key15": "3XQx6md1VbkizLDVwjcH6UQqMXUbwSnGc6xHXxk7FZiNiH96JGcq6DNUzyamxbWcbSW12B7EaqiEywxAjpojpYtQ",
  "key16": "2CJdfYGLM84Jx2p2LBtwAMjfft3EKHLE3fsPRBTrN6sci25RurngnPKRts7GxaQa4pJYKVWJNPy9Dx7Yv7vsfQZs",
  "key17": "18uZFvHtmzPEoXBwTkeisQkkvvbiS84QBqTqANy5Fi9prQhBFEtKRRAEmw9KHKtbPiwDfJdWs3wFcNe4ESVjimE",
  "key18": "4tPik3afC2XZa8GxZj8RoMTAKU6W1ng7xwJiAbSG3AMZYuQToCqTrzLRiZeAA8FvudNzYMAt8LrKBsdAQu4Cqa2F",
  "key19": "2X41HDDXRdC48SnbXcxQru3gVeNFfXBoX5mx9eGgPmRX7aePNXPWPx2oF1CsaBgcPaYb2V8656VtSMecGddCpPEP",
  "key20": "2b4MrAnrhqJXUR3hP1fjvjP7JT6YAGUKSdhUj13RTLUCbZo2HD73Nh7XovAtinqC8WqutD7tbrHzMeX15NC5cDLf",
  "key21": "4YGwX7xR7SH1JtwDH7tAJutJaaKoC5az68QFtC37Nc5pvmoL6ocRspVDroNAfLAWDpox1AsBYzobs1rNrATYcnzm",
  "key22": "T6ppJuno9evTJWydbAA7iYqrExs5jmrSAT9XZaUaowbPRXSD3Xw8GrRnPXgjB6KDBwNwdhVFtQCS654QVC2zJ84",
  "key23": "3RX5mZaAceStvsjgrxtUnJtpvhcph5iFRenAsJtKnHZMiWRuJYC4FsARbq7p3879AnrUjRNwFYZfn7DJgBjR28Cu",
  "key24": "8gh93HKSPYgtMDS2jKNojWtLnY35CAUVQyVFkuQRGLk2ap5NCn4NkmfCTLzPDTm7xjCC3bKWH4yam7Rs2fARKaN",
  "key25": "xGCZ33BgQ9CD7pbXWHVEegwn7KA8Yv5CLERTYyM5sEMJrc3XrCsVn6Xcxqe4mDZfj7QFKDdHuwp8PpQoaar873K",
  "key26": "3F1aeu3sCaDiYGKA3PaRMuecGzmQsiCmofutMpEr33c3sszRb96BH6X1BHvhFEeDbBss6Y9pjMWKWt9vEHDrwyg9",
  "key27": "3y9tVKqvcGShUHaZ2RUSv81Wd6HbcgUPwGYdTDd7A8k5DFoy5tF26TmpLs2nchR88gqwnZjdqtZYaSn64Bh2jmp8",
  "key28": "faRFaDWkqkw6wjj4keoxmgQGLgaW1SoZGDhrfybLHEzPH4VWd7mj84bnaWu2iqwZt1h4Krhbq6Joo8rWNPQ6kv5",
  "key29": "4ESyc7KBUqC9rZEGL1gJp9e4HmcBBRhKq1WxLr39kr2HiXjDJyagnyzuxYo7hkhiGhRKExuZksThAuf1JyfstWA9",
  "key30": "2YVbRMXiCuN6bfJmeZLQt5fJD9oyAHbi6AGinKqYrENZEMwVK7Ss3N4rhv2tE1NzpHQMZF4gLUbLQmNG1geR5Svd",
  "key31": "5afjxGHsYg3hyZWWFF6bCwDNZh5mySATMuZU2NFx2zSknKb6i7fyZqe8DYM86AbWCymKk526KDbN5MEWHWZCF4DW",
  "key32": "2wXRs6C7asMUsaB3ybqhGtopeke98CLwun1JvqrWhUPpgHUDpnarKx8wJ9USmv57Z9occ4azgbuVUM6BBGHpwCho",
  "key33": "qJFNFfqyGuGBjSEUiBAn1nj1GuD4HZva3SHbEWLyBVakqzhiCGyazezYPYKCRn1HgoF3MTe3gopSMzjbmCDtSLG",
  "key34": "5UXiCQwX8icwEa7DmTdszqRwS8j5JPqt4eRc8NArBfAJ4mXTu66c4hsVduuznFTU3anyYoZLij6brMMz2kBS8oLY",
  "key35": "5HH5YnWtuAT13iuf2YEXCWGAEdugLbMceTvh1KbWpxfPPPoZmHbdLSR7S5Y2oAJzugv2rJZUo42ZbEFYUR5GfSxD",
  "key36": "26GAHXWEmywUZQv7CMWTZyjtHRFadNXvHukHgs6b1B9bsRGz3PVPvyqjvd5bqCzGPHgFpSPbok9CjutgQAGHjjih",
  "key37": "dQnxbhWQ9M6xTMcJJKhnT8nHT6omSz4hQqC8i85Vkk8Hrsb7BA1hK7UPX3mcU6EUdYW2mKBThueCRxPFqMvcfL6",
  "key38": "5pAq42wxqibc2Zp3SeVVxRipajQEHZnjZZdf1226X3BpawhQzcdcBFhmn9HBnrpwpmfwZrMWYkgRviESoiAuqTo8",
  "key39": "FKgKvKwPJQq3DavYZMwvwpFkHx9wvozM4KWNwt8YAtn5au1mKZ5WVdmVsgerNfjJFUqB7uop6eDHM6Ccm3APGXT",
  "key40": "5b1M9tE9PK2RYyty2YwhssKL86Wy5Ys77qmZbPczeZ6SDCU4gmm64eesLrymxKeNAoAcDEn2G88bTxaL5a9nsLzA",
  "key41": "4VevTkTV8G81ivFXAUvXxHW4fgW5pTKq7wgsi99trYBNnRHhqProYQF4dTBwXgu5qDccrpy1Rd3PerK8HtcRgfLb",
  "key42": "2GRnNAVdhFbpVonmz79wVuzDWkPBnDTKNHKY3XhC3uGvEkUN69Fb7jaYbvnUFdEvfzbG7PxbtTd5fgu9FmAbev2d",
  "key43": "3U25iAbQnXf3TWx5TVckCArR6c576vRWpHFUY326z3mxtLUivBkWr716MBHnPXPBtbkpyLG4LmwmUk9FQucPHsG3",
  "key44": "4g1ukfeDnT8cjDTw2QoqAYoBbqezpvNp58tGBGrHncQZ478ESif2pZNe742UMSJ9hCm9w7dGCpNmjgvzf84Uq59G",
  "key45": "4PRRLCxyut9xbycZQGQj6p1wGzo6LTsnBhVYFUTDg8gCy2GEWcxXEBy8ZDmJ32nWpmKRjXhrLqxiXTcqs3Q7AmGJ",
  "key46": "5iT9vMfP6WbE27ZBYo3e31cE7VYzS5JiTChQ4ZV79vJNLSMbPZgH3V3AeWYvnbYdRMRw63zE7BZD3eYLw6P1jUAA"
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
