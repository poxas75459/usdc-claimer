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
    "3w4YKAAi9afkAiYzZGfDVbQ1Frp7qAAJaoDyT339C8wkLXkUmYWjnSyJtHeq2WYd8zsNTQjwCJqGrcxwur3UEwE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54HxqyGqoPPbw6pss4ZSBxTzfcV26URJV8B38TRrBxagHTexQwLndFhhgVVEr6GGjkmspKPK2uyPJDHzG3C944xZ",
  "key1": "23ReKUvzypXocXizJZJGjwB4hauiDoNVP1sikvdNm8nB7aCGyjmvFJdwjgFabWKeQhRjA9NQ9CcGEd5zjy53V7Fh",
  "key2": "5c2WuKbdAJqwmHtbXQhCLAVXw876Xkt2qecMQNNvUs52XgkSUT8Ak1H36B3FNsUTgr8FX9nZaAAL2dxmYCjTPVXY",
  "key3": "2dkTi1Vq87p6YmZXjKv4NaxhJzoRywqgHcvABrBsT59vxTxKVDWF24fCdZVxuLc7tVKbyUkPqgSoeiNUbhU6FGVw",
  "key4": "43hHz5yPX4ecjo5CCosAThpUJVBYGUr6pxUW6ag1JrbMM4J7kDJMFHTgq91EvB5UiGpdAyBK4eS9cYz9QgbZLNJG",
  "key5": "3pmNPp1WCZmeRjcCGfkgMg4b4cQNQHzss9DbEo77BDeGF8i9XdmCbLeqU3Ri7YKWyfhWGNp4JJ66As7G9RJtVxoN",
  "key6": "CEfbBvj5t9kkoWHccwu9ELUS9aaRWLA5Kx1Bn2NkLcsNk8Va28gdyxfx5kkWThBCoz9J8DRZutEEPRSpEdfaWK9",
  "key7": "4hCXYygpDgtaLNWU7RuZwDRULvTQBTRxPRnzJKgLPZca1waCZJscdURMDg6kWoj1h9QFJ1Rk2wwicPoX6quY6CrT",
  "key8": "5RooFmhv2d4asZVCGNpBEWwSCGzUXvzuLDZEYQdGZtiJwBVmp1wcmUiwGft2Cg4tSaFEB65SfiTUmaGBRtVusFCJ",
  "key9": "42KoytF9ifThtuFmW17KPUci2XMEcwq7xGrVSvRp3zBuyGbx4baS1Wnssy2nhfvPk8ZVzAcKbWDhppkiSzKiU2pR",
  "key10": "36CwRLRpUV2z3W9QCD42UvrhDfmvyVMV4CAU38Tzb7eEhzqXLCoV9UhDePV2xCZyA2s2zKh36fpawzVQY8ptUJsg",
  "key11": "5ExPKWpUMGvkKoacyk1hcJ8pjMBJmZmz9cxYENk1ovCvhnPz7W5MaVSZo6Uo8vKzBHMVZt5xUDY2s6UdS3CeRnFn",
  "key12": "jLvoNzALFqQXhs1cEzKpx5PTAVnaCYPd2CCSQugUw6kHZN5uxwQcNRzaZFbmxSVaszuMjsFtMdss3Bz8EPTsTWr",
  "key13": "2pC8rYZDNgTZ1M5E2HYmEkgeqcDFs9xe2EAnfoM88VLC5VAmKKaW6braEcYQVMgApEPQYJ9Fih8JYnu1z8x3DLun",
  "key14": "3LjhYK5fBiKzCnjnRzqpFVj77QGF5tziMLinAgqPBAoNySU4RsUfisFUxbyP7Gip5itKzCSZGf9ssH3TkvwVZeVJ",
  "key15": "36yS67e94PW9Rvub4a55kpZ52A6aejp4MH22zVvhzqfEPMSGXj3tM491fPdMWo9Yyu2q5PWLQ1SsCt22MeVwUKrK",
  "key16": "2owECZhXijZNpXp3vV5muaLjFrnMzMswo5N48zz66k8toaxDqzkPHxpF7LvY6WDFCXHJBYuxN7a4q3vphGpYKeQp",
  "key17": "8sysumH6cXb3bXPcyv2kuEK6YpvsMoeBzg6UBRHYv6WZ9LMDABnX1MPDdbopyMbV1Dbv7FVQyiVUpFPZJ8QYMMS",
  "key18": "4aGYoCPKFxMeTyTXhP8FZnYn6j9GFQWt8VjvojVHnk1WDpDYYSzR2aahU8Gwef18Pv5n9wGhZxkk6d25z8uZF37S",
  "key19": "4c29x93jKS4sUWQmK148h95zww6EGneiMSTKttzSEHnJrscsh9XQQufZx8egHGXiMFLGnwic6muULwvqubAqGo3g",
  "key20": "3cvT12qaYEJLMsav5YGWYNC9eEdeyTPJdY7136yy1XCN46VLHpEhigBkoUKkLH2cuGPRULdXx31hoQ1AY9vzCi9n",
  "key21": "61omrr3dAZWGdDkjQKUetBASeRpikszjSAynmKWsFDT9jPdxfrXMFjCaBVyp8ddVYYzupYQnChyW2HRSZ6g2GJeG",
  "key22": "4nmQzhAqMiHPprqNpetv9f6zqAupuxFSknfXSnZDmANNm4bTpmQwwXnJhidsi7LENWJuxtEyhuNSfAtkf9t82tYQ",
  "key23": "4eXvcMN98LPeXMEewNHjGmKEDB33e3v8FUFg9tGj8mYYMdbjbE9jmyaCUFQYTkKddZb12v3VhUqGJUQ1oK2Jek1B",
  "key24": "v9mRGWjzmkrVjLWPLmjmS5c2LjpuajYrcwKaUZZ9DvSrw63aYF4kr15aop8BxqGfY6DZp11TXb5ygEtjvpFHcFk",
  "key25": "2fUZPYkZaMRRSNojJACvJNYGVK5UQnFAYCEVunRWuuCEL13FjTeZtAJW8gZCwYBqjau1heqF5C31T1VKKhuAA7dN",
  "key26": "2v48oLe8mq9hNjkNPUmTpaidPm8s81KQty1pQtDDbDoGMs66F6mZjKfZD5wHv6Q2FHC1PRkbHdVza8mfv3MYmHAJ",
  "key27": "5zkhjb4T3LFkjAXLURV6zKY6crAqTZjeL29vzhWH8uGVypCb8RPZ73EqJFnuakG61X2uY6zxiP7C67aBg6yrkHwy",
  "key28": "4Vobb3nNVgP6U72V4K7vmf2Cq995hqnob7HpKdvJWsmLrEs1ZRdAPRNQ1Z757NZE3pYrGBAyQD11e9DaxbRMhFqy",
  "key29": "2ZRCBCTf5A5CM5yuRBbWunpBpSZGSmx47oQSiLZc1J3VHQErvUAfeVnFBptGNcFs5RXg9Z9MURUtzrKbxmqsh9Es",
  "key30": "XQ2oSn1BqDYchGaJ3RG5HBTm92A3QPFMjWrNhQd9Lcp5B5AKZzVrpNemh3Ke987XN2DjxoXD3azrcv5fsi7mbuD",
  "key31": "4LVqpofcVYbecdR2A5DETTbwuEfi8BfbvdZYsswHBXKhUpN7bn7mBHNET2RZ8yVLGqJFgTmPpbztvvvH13FVYrrv",
  "key32": "2rEEVzRRVeRPGP4A9WSP5jEA36Syq6CwNKHXR7SQoAgAU1vzPQCScTw68hDfoY5cfmdbktniitytUzZoJjsJKyAu",
  "key33": "3nFMVLtPtdZ1E2ELZSUk1QwWCzzp5p4nX5DSPYcUwumfC64mKkAQXfuiB7mq89MVcUCTx8qjKvPFRB1rwvXBrz7s",
  "key34": "4vvb6mg4ySaWkJo4QR8wsSUVTcu2rPJVrFafW3TLcEJWKToz3cExka5V3cg97FG9Zrc7md81KQQmRpNbjHRWpqkz",
  "key35": "5TcDYJJXUPa5ykDAxTfJKf3Q4nYMErPbKCHbxW4JRZqWWf2iEp9483XDGWXR3Aotrg968vczCnLnkSKLojgXKaLC",
  "key36": "SdT1RdtBZKbkpLsPvbUomCRNSABsESAfBCQqYxp5bSkDgtg1FcWExYdH9bQaobky6Nf1W3rQpRiV41G7mL6tMxU",
  "key37": "27gmpMQtAbGHsqe99GKVu2CL161EJZXrk671nTc4obfLRVGQzxjpd8DKzKbfCFewoYJXshBq8mjGXyyE66S3KWkd",
  "key38": "5LUzXvszgshWrETZVdujnjHifPErehDxtqVq4CRPjXvNsSQH7rhF3W5NkcXP5ogrr3AaRoTy1vnxCcpyqToA9fXx",
  "key39": "3z1hdyFT3aksJ55hU61J16DrD4NNjTKvZM2Uyk2MW6w317Ndjmt4ZzLSEPWKxJtPmXAjkpZZDUNDrVPMRKFuwv2i",
  "key40": "3CBsZj9bQ2bNP3giE7j7HQexzU57C8LadEZCDeEvNjxjACFofHAE4AKM47zhHPJ7LmXdhy2M89Sf6gu6QLu1wNBF",
  "key41": "2gVCb5jcc6WW8PQZj99TJAQhuFGbXgzAbvuqNgm8HTxLEYsS9sKKakLwALpXww8jSMtjmp67vGx8jSNi5Fu7JKmb",
  "key42": "29jz3E5QyfbzxaAPbsn8z5zQ5ZBSp7x4Qr5eerAzev8FkxZGBTmhkpy3dPGctuJ3LpMTvjKenHcAxZMVGk1iQzx8",
  "key43": "2ZJuTyRWymR3GZxjCgVddoHVejYEy35iK2otUB9ysSrCRUojszeD9MibrMB37FKCJ4cDPpj76pSRb4GoErHNqkoV",
  "key44": "47R1U2XHtuhnB26vgaqmku15tGjnJRNzmQYdwfjyx7zANqxK1v1ABmkJnLsazC6yAzyndXrdT8w1Ex4JG9nTqciq",
  "key45": "3UZEFM8EfAd4bUkMvYimMsWnsWdH46wGXrdN32BHywVw8GeproTx9MUSSBxqXXmzKwFrnBGegvYP9ejo44w72SBo",
  "key46": "3aPfycrsxayUQUF5458jXhu25razR6qXFmoGqm3GxhjyozJiDihYyLhDYELsFxiBC2vNZKXLkTBR4KjyCpzwQJkj"
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
