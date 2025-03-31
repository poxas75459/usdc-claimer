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
    "4AsuiGDFt3rzBzedAFgdDXpizG9RGn22UnKLhrsUvJoW7GXQqSztJ2LdFGFtJdPsmfthk9XEAuFbi5kSspauc2GN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e7D91SBhfYKMYzh7Un9sHkxxgJK1Lok2ux49aQjjjkL5UYbsAVewwBWWHpqa3S2FQw7kaSchZYojKznNfDzF1xS",
  "key1": "3GfbhjjKWcM5oCWSouj47FSAm9uSGHr1RySsNnQQuQRA4CgenT5W4zAsugousj8DRZnVhA9Fmx7dcGMwr5bS56Af",
  "key2": "4nqfCgm5vpvg86vgU41DLHj11TJmuqENQFutfJpecqpEsZzH7NZ5YZuuXPVFTUoFAVdDiYVLnGqLtf4bWq71Bkya",
  "key3": "4PfzE9HLqkxEp5k9ECWBtrjBvFjWuaZtBQDgGUErusue4To9JtQJLetQkFkDX7gU7Qogtd6pwtnnXiHLm6XFM3Zy",
  "key4": "5b2KZQWHfSkBgLCmGqyR7oGqRsu5ZZjkLfa31Xqp6vutzRKbcvrwdkBo1y2SKNZspUZhUU6Mf6pAnYszCtQdTkt",
  "key5": "3EH62gy9pAyNw57vqgjq6eHn2VE4wqUThQUYzBbkwMxt8mpRfzwSZtshwVXdVsKd1ncLeUDuSERfGDapJ2ciDQ75",
  "key6": "5G4VXeXyGNj1tXUxtYMoXJaUCHkagQLnrVpXRv1cev5P6UHmJQSoC7bghr8cwQAyL2eH69BeKogjxzPUzhictzG4",
  "key7": "2DgyTZe1atbBFauHhHDUdfLMmuL6Q1rmQXicoje2ghxTbUY3fqu64cBjQEE8AHThoV2q4MqH5kstdV5FqUX4D7PG",
  "key8": "4YVW9sdCiQSNLg9YPgyxsEB1vbVhaz9rdJMh5HTeWoYaR5S9dMYSfUM2wHY7cAsAXbPinroB5N1Z2e3fPUhZgfFL",
  "key9": "61eCati97LsZ7X6vLQsRYAJUM18R42Qpepro3YvQS7kfVsv5RabfuwPXDbf5b7y1gwQdk4dxD9viLWF1QFyu3k89",
  "key10": "EE25BVULAAjyKR9iPa8oQsn318KakgPeWfvLvWLxfFDEUX3vXCbyYwn5NCMdvff5LUewgr11QPJPQTk1fULBsGj",
  "key11": "3ten8njc9ZQB5DhD6umRTwWW3Fyuoj52XScJw86oL1EJqzdUFSb3LAGmVrU6GaXTvgzyD17ce8JSMBDNmnrVcwfc",
  "key12": "2wv88DpQ4pX9idSpAqnxT4FbXH3GiVXyYDA9xskFsUQQ6TwueAaZiQhtXeFKuH7KhMN1BpFZrV2CVHBdjt1Jcm5Z",
  "key13": "RA6MakgXsbR2h4a67YuAUNhRwnzyvVibfqBqErNAqjB7faTySc6yJowmor3KRaKowKCAV4Fqva2Sg39P9R5mmuj",
  "key14": "3N4cEuPTxkaXb1gUa3BdCdgxemMUGBBbg9QJmS4pgqNQ8vn5EYcshM6EhxfjyM7M5ZZqDxQhJDXfxa4jCC8omBcp",
  "key15": "5HXHBhWJt83FN7cHTVEA5sAS8FdcBKzToUj6vEH15S5WfKxzXeRCpWZGTQwYhzeMGvp6LYH9hJWKB6Eh3hGCVEFH",
  "key16": "4WnQon48QVrYHymzLjB77BM6epBLFYk9gSEY9kWtMqjQinAxVpAKr796yWExSgYuoHkpNTnfvp5FV8y9LM546aoe",
  "key17": "48PMxMk5vAkTW2LEh1cXjBPKxG5eGGNRkse3GnBqxQRZxUg1dQzZAEC15kXiKQybLdvyVKUa4dfoBxuf2AxPimJu",
  "key18": "45Bv7RzoGcJtyoLNhE8yTGZA1NWHGg1X48FUTFYcGD4wBCPdYX77fLys7BX5jBbFDwYNNbFs4TS3cS1TBJjQBtQ3",
  "key19": "5hN2QLY3TK8J7iadaco23pPbmAM8KTxsHmPJYXXNocCJd8inaGpWFck4zTjoBDwEL9SmXyyBQu5YoyQnooGHQBba",
  "key20": "2vEYXzAQPDntU5eJg4aogHpNCDKDyhouasoZaHGZ6BtSy3rpMv3RLWaHfQQKTUpeD82GGFmGS9p4PoasX8QTNo36",
  "key21": "3HmAGKkQSR1cGvqQEGZVHURtwCoy56sfwWUBamZ8rbPJGSAdUtNfddvR93DxqKCx8LuGSkQJL5J8fHAFhcfJMsxE",
  "key22": "jSYEaX2h8NJHLkTbxpHWGPLwc7sFy1GhseRmVH9FiQPbkvTUHMdWGcERyRReJwQG112jh5GaJTeYS6bevXk5kqL",
  "key23": "3wKEgjbM3QxenCz6CgkKd4Bp9CTZix5X9GFQovKajwANWYGKNHpyFcuC1VcMfmho6nBxU9kiXZ2gvnLX2Jx2vhRp",
  "key24": "3xnrbconNm6Bdq3jCUr4QM13FFZ8iasnm9wEZi23FXyX5XpLtrFDZTHLTDQCPNqGX3twYRnjKwv5P4vQsWduiHvv",
  "key25": "A84FHmJzXhqigjg7YgJkgc6fT8ydW3AVfdaVkddkEcacwbzkQLsCUvJZttUmdpWQyMhK8dCcjZfyfYKdusjNb71",
  "key26": "2keTGFCtMmmgG1rTQJpjegvcDctqof8GDGK8QCqvsTjUS4BpLGcLb4jba3qJfCxuE4S2Es66MU71FW6VCqzzEFd5",
  "key27": "3E1czHTLYLZmXHJwgwFygWwx1YdKtPUMurJAbzjv57tA1bqeRaEXifqxpuEpBPjZKL81Dh5qZbcwduYPQj53QpYU",
  "key28": "42XX94m97EMup5TAxZSifth1kpCrWosvZzBCUPpd2UCAeyAvpByNnd5edadQJhU3NocxGVgPrUgZxE1cba2aRirF",
  "key29": "2f1b3UscJwEvJBAfGoWd88BvWkc2SSu1XW9p37ADKLrSX781WtH5U2B6ATVe2eo6p4UpYXp44mLM3TnCTx6sJr3y",
  "key30": "9acra4MLJZfr4kXGxiWM8CQwQpFwKEsdfUEgmZun4VjzBPZ7mc7L8iQ5gy6M93g8zFtGKhimn6Mc6fLEDiEeSpB",
  "key31": "5GELcBGjtGoQobd4e3qbjqPcTPo6g8qYmPZ4yoaDcxuPy2kTtPp144caT3HJAgpXgXU4h1aZjsBYRtegoy8hJQ5K",
  "key32": "ZQpXmgtov7AsXcnfCz9ToSgLCwgK43fX888sTeXBQNabBftcVwXzxTiJKcA6iM672DekwZsyULumSVFA2Br8ECH",
  "key33": "4h837YA1SQsAcDzNnM2xP8W7ZF18f8srzNSLZmGzs8W2LSDsFnDnhXUMBgGQ3ENofj5yiKhmyoiYV4dCgBqqH3cs",
  "key34": "2T7zWpyBdjnvAoh4U3XrUPypoqNrRGYPCEeb9SNcJD9QxPh5GFF25TuYiThT7nPYQGHfDgzPntzNDsuXraPSAvBR",
  "key35": "3DhzX7doP15C1VSxbsN4DeXiXYPyz3Lb5T3RpjPBxx3PnDN7nhPgkY8pdkNrkJDDAYWMpjyeFSjZAVB7mgQBYZyT",
  "key36": "3FjYmmHJYn2whZsUMvE6MUqyLLLudcEWEAZZtamXQ61HztAczzJSyUYG6CiMEHkzE3s2zXXfMUmDJYnjMLTv6ojQ",
  "key37": "Gb4zBHxfLBb1q6XZmtDNb2ApKzG7SBFudTurVNbMaY2vBVpt68N3DiGAViXZvmstUvSEpyfu7Fi8aKeQb2bh7HF",
  "key38": "4bzhyqT5Fn65uqY63ZMY7FighoMYuTqXKrCCubwdLVREMVA2Wt4WrR4fXNZd56VhupuHAwAebMs9YWqrrEBjq8oB",
  "key39": "2webeubuC8exSsgdAUbX4GhD99DgnUcwbHM5p5cFbWDaycd3bTVCjRYC7vniJwAuHYWepTpo48mu1WgSDxUFdGKp",
  "key40": "5veE9GkDTamKdvmWMQzbNDH8FLjrjUEcM8QvH3TwMQiVZkWnTnj15QvVNNdKuBCkkvgYRVaJmkLr1d5bxT7SCKGd",
  "key41": "48Rr8frwi8T6djSxhQGvYRkcBcFUVd7XUfopo2U2veu8Fw9c7vNwGrtfyV4peE4cK1avftCbAGUAd6RYbcM1Ysfq",
  "key42": "3FQNVfKBii3qBuKH9CZWt4R8sdyF83j4Dksc4ZQt4vY7hbLCxGvLaGa8dWx3Gh9ymyNGystxqUQNBLmPHbWci1Q6",
  "key43": "4DuBCHNsQoSXMVKk5qHxRZcQWNUkBESRA7LxEiJN8XjCcw6PAz95R5S5csLCJL7LWnkQc2quFqdTia8Kv46WHW87"
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
