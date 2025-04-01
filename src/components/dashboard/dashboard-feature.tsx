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
    "4ax2ZGmvbL6iyKKhsoyrnJnYZzK37V2cT93XEXNSPyDksUb3EBu5VRj2X4VzMjKjEL8QsgGi7rRrYeAQSkL89Xic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54BcHrATjwHcitHbZ7hXrXCuJhVXtJygv3L3PMfBe4YAsPQvzb6UCL8DSyba9MrkKG7HzH4Svy56ZjjiEa4QGCqR",
  "key1": "5LonoRuGsq26CjJ95XiZu3idgwai4eQzrA81BTMLu2MyqJFu2VY6yhVKxqR152xejQi5sCKE2V7KUhFFx82wXzJV",
  "key2": "4pJJcTPDBJt5ebHbRMZL7R8NdWpYzXzU6CaZZU4KyuemAjkLnoovW2fEjp5aM8KR9FasYAyu2fqaRXSGBpYBfXrj",
  "key3": "5UgmVB7P56beEixTmjb2WhTNaSrWyWhQhvu3SNsScyktMPJVn1oxUBaiMSKi7obsqvkGEfASW6M5kZ9QnfUjREsZ",
  "key4": "5vFddn3WxkQzQPz2fJkSZX1owk4a6RVXvdbttve13V5iq8phpTRwaiWiWMrLJigmUE4UNP97caaFo5df5ZbTdxJY",
  "key5": "beJCvE3drqx2eFHTmcxeyedWjkknXjpD6UjjL4uvjrnVKFdE72ftB88mSZBqZjBqve7H3pAynD5C4YnWL98oZyf",
  "key6": "4nTpbhQEFVBTTwzw2n2NgnxS9xGXdi8MAqmZqEPKDbqw2wgyCpX5CULc2tYnYKmPjoq5Qv6mKTc6jnShzBJPC2gX",
  "key7": "QKP8MVPPhJBJYkAydbaWQWUYMxTCrJYzCNQWWnhn1iEFKPZt1KvVCtvj1ekxed45uDR2QBRWh3J6zh5VS7WUA7A",
  "key8": "58KkSnVpwZaycBwmcs1QAYvr5o5NjhRmSMA4Pzmi9PBwi32Q7LVC5zYZHGt9B3AeFfZ6Ew9ujGtrKrEsxfuPy1Uo",
  "key9": "2jjhF5RfGyb3endGjoexF2vqm2sNf85cKsi7Mf2RKBf1wjFyYHdoNFgNWnR3sU7W3GVxunwnwWNS3N4EnLAuzy66",
  "key10": "4MqLsVUACQ9F2y7MEaXggzLjjnzVgzeqJMzyCWKjEmi3npsHW8VPSgSX7bFxoqBxJk2sLHjag1jstL7doB8W9j5M",
  "key11": "5Drvfcf8j19TxctfzfGsiS6B1xkYMQAouafpRJ5KgbpzDcrps24QNw7ZZFPDNybnPXGcAUpJiKMNbiW4iGESGdpE",
  "key12": "gZU8nSpzV6GpfmDPkGUGsNUGThnUrtyQzkorQ5nFwmn6HoyhKtQqNXxp8umrXpFbAFdY9BJpCxbDcueVDsXkKvx",
  "key13": "2vLNzNWJkfZ5LdPUUt4KsD6icdGAjHSftnz9tAfJYgTzzigZZxbXdgfiwD7FXHnQqoizsQZ1neowzVHtAnuRQwGK",
  "key14": "5PUaVZw4ohUKghkSHcfmvXBxRG46y67PrwKqVTwCxikSrvdDoTebEKqXXvzn8rs7wJGFCimiDLHusm9sw8Sv2kRB",
  "key15": "4hQBfAPvJ9Jvh8d44y5Nciyi6qaEmY3W1yLdTQTeZEQMKQTQjvqYaMFuBpWu7vHEEhYbbGyqPBPNPw3pGRiLwfdL",
  "key16": "3uRK225QqHzeYV9KEcRZD8tsTEQGhki1S5RUsET9SwETAVYnDNV7LXZ4FwdiB7WzSnSt28oTWHNyieH4KyMX5dVY",
  "key17": "gmvJc71kbH4dtAtFMevUKBeARNgXXYRfy75oizprLJS7ZhvezwqDENLue8rxuDGiMEEQGyYkzwLXH5R1GuVK81f",
  "key18": "3WH8NYwP1Zy6oGqfqCU2YPe2mpGjLrEFz6ZtNriCnPgop7xg9Yov2NnMnozLhZgGGkfFwaeZyxq4jkhAC6741J1e",
  "key19": "2Ry3Y7xivtwoNSRpPjfB4DaM44SzycUSzv38R8K5zdCds578eekWn8zm7EMyNW43j5tp8t5u8ybbfmNr3vTTVdcF",
  "key20": "3qWVFsyEmDub4GZpmBeiTrhEQGB5Wbn89CdreFky6F4auPqNWQ6J8NuYHmGBn8WugCiYMCcvxFd5APYKXTWvfQf7",
  "key21": "5vLBRu6Bnf7LuNVLxysWK7GBeJBVmgPgf6n74ThmZgGoU1bpzuiJduwaeFEBBqiwN9JYDmLMJwRQddEGUCd82vjb",
  "key22": "tyBtLSVCoKoZLLmKqkuku8CuZfG92Aij7Wmdq4uej7Dk2ogFEmU4qRAB3vUN2s228FsgMMRydaxYnbuXbMhratA",
  "key23": "FSNLVriRExw1rQw9iF3qMjrSrPECPbW8PegpNzBPYGqxEDYNeG8sG9ANTpXwW6HmRZigHgMpW4Joj8YoDTiTsCD",
  "key24": "5AteVNxzQ9exoaRkZSKAuiKXBdTcgUi2ueERjwgKvBvAq6MjwmYZ3JXRznkuiNrooBFqZAkjvNDeMo3MPV2ohkjB",
  "key25": "2NEDVzjBaNnYCnSaed1WmfvEatFPuUxNzyRqGNb84eYt4ZpyL5F3NkeELx6GfHvuEW6LFRjV8RrDpLNdgLs7oe1g",
  "key26": "2pRxA7V6mdMSbJ8vsnd4N1nbaN7yKc41HYxVjw9DNAZez84MZij8whpwyxsVsmS9yd6KVXaxvqRPT3sEXzy3WCSi",
  "key27": "63qE9ZmaZM225d9xEWkP6FHaTSf6P5DFQWdWN2iBwkVkx7ojxaATezrFtX45HchGzwhm75kx5ewsFvCr96eF26fh",
  "key28": "A9fmyAiX9V4DGRAhCkXmuiQRTfD9wzRF6V92WzYa8VUtcy8boarwDM797CXpoyMuDv45DVigJZtvSg59npEtn2R",
  "key29": "3EVJe99VuXHhenUmF8Bwd1iwpaZvFUTTeD4gHRyvrhipPhSJy5FAVS53551EehAGcN11EWctrHNr1xoaojb9Byar",
  "key30": "3uT3aBWWdwYfnk9xkRPs7bHGgQCJUbD8DesiZ83MZ9jE3pNfkhNgJp8SvsDWZEYzGFKpTAsmwqfhxNw8mpUF1y51",
  "key31": "2gXHhT28vKhUPPAemBGhfqmQ4AVjoaGEMUS4JM6dWoYns8xVwwEeo8W9Kj2hRGS2hd5aWUMwtMhpmtX27VcViiVV",
  "key32": "yspjSqLvUawuHRk6Psnbn3p4sVXmqqMzbLUJjS3dftvMT8D1JazoRCGQRwXJWY11Nzktx87g2agaiindQg5UHnP",
  "key33": "2xLJHYJPRRLkoe42VodbJjEeDcrrunzqdp91pHEZkq7cVmaRYBiXcTMSbG7A3wuP7qyK3LrpkjKAWhk1MMChoL9c",
  "key34": "z6Tknr68zyrRge57zXbPCvuVCW94YKdqHJddaEWYiaq9ApipSEqkNo7ZaN9S4pXMtcA9H3WbLx5nPiSb3iJ6K6q",
  "key35": "4WPLhzgRvrNdDE7TVgBC1wjjaEnSeXvP8kG8iRTdLbPUKZ3Q5wWPc96YiV57yg54wGkwxwaLarkpnoXRXMecGx62",
  "key36": "KjL2ZackGYAagV5stycHiUydzE5E5Wpt6Z18vVoR22Wy1UZvaQ5HA8Xm5LMqHrMQo8ZgUZg3mQasKKMAjsEPEWM",
  "key37": "Kz3XZGfDYW5RQU2TCSv86Jv28QBWCLgrenqfjfPQ7gLbyARtAQ4ErbNZxiXUyAR57V81VXWtoGRNQ5mgUSXfjKQ",
  "key38": "4UgvbHYqdcXTXxu2NptmLWEhAnVkWqGHDpZk4HwpYGSx9MfoV2pS6Z369WGHyGLCgV5Ua6oqnYky6QKtZS1RybgA",
  "key39": "3dZmeXaS6fvejx5fUmKpkpzGHCq8J7KFGEQVF3HmcU6GzRt8a3Cna2hnpgFNAqDd2XfrWs8iC7fzF37yYpgp6uTR",
  "key40": "G6hTwLbogTq9CRdfGesV3x5Jr6WxouRVGZTJAtiJEEVThahhAbFtjjiFUGsFEZor68byaMPj4gUeQFpUeutbq7W"
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
