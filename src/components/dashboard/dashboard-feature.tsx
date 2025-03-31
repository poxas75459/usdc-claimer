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
    "459Fw2XARJbFs57XqoPEGSMVbRxEQ2pwcfpznao64uoUNMpHZWj3du62QH3iBvW1cfKJzHzMC8JQvNEr6Y8B4hA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gcE5ao4ukNA6Z27ZkdtBqQmhMUy1G3c6hunAytxT8akv5Ag9KL5A5o1pcydTi8Sp9LLSEbCEvea7hqxiLUT9SnG",
  "key1": "3fSJyr5RvJQWDpG3zyYuCb7zzFWZccT3FKjcyzwd44u8GnS8uoGPFeyAEPSkPiaqsuqWV469Ct5MSLmsDHYaf3tm",
  "key2": "3PPQ1HtnsqapfucSGsNWiFbm5iozMU5xVFNznCW2217ai4MDAqZBqAcWX5jX9fBB6XLxJcwqTGUWMbgHD7qtApQD",
  "key3": "57mQUVN8tF7CHsu1sRigWj7JTWvqxwLFCLBq5rQ8cdtwnL7SL8jpZZg5P37Ak5Cqx5ozmEpDc1LaeEfbLK3vh3Cs",
  "key4": "5srR8WREbJp4UjvFRVcdCYcWsaXJiAbQdbzNRqxCgaceapSrngSkwvnWWykquSV88XYmqngTuXuyfCSG1zFQPRUu",
  "key5": "zt4QjKJ6bK7vMg6Sbzd9DbBUb8HjssEWkpy3SXYoB9xHp21dVoPLGjasydhyFLY15ePLb3TvJvxxftjGY9gSr4y",
  "key6": "2s5asWJmhwzUsP6ZMbXC9orTeEyxvazwBoRgg6Z93sdXEgC7NSQJ9mg9poWh7DyT2hw1fdYpn9gsgmmiczV624gD",
  "key7": "34HEWuSmC6qG9bj9jtq5oPpVoTgx5AQGqbDoSmuUDZbSLvs3EwDFiZTw3LWJsCnpH9uSTVnFg5WgkQYWXGD5kKff",
  "key8": "3XVAGh4kCeGR8SXwDKxaSVKyaYmBtUbrwWk9dpJaxfSbFKUQSzkfUFMRRzBRoFFqiRuh16KbU7Nx49ZaRN5C6PBh",
  "key9": "5k432WPh3fzoTtgNYf3KtbdTwtvsT1zW78hChyEzgBMziK5ZvmcRXv3c6m3eB6gZBegwnXAF9Grar8ZqG2BZCF8G",
  "key10": "2jCLSPr1nMkJXigzPgrgQLNfzQ3LTQKU1yZHVNNvEFh7vkwMBnqLiUA2PikFoggTPM331QrbSjp6EWCPeXKQF4RF",
  "key11": "5jb9Zp7X3uituSEW2LcWHMV3wrPAhvDFijaMQKyc89PzibrP6V7HniMUH6qX1fNiGk6cN688dtPJVo94t7rPyq5A",
  "key12": "661yascK6heHs43Uiy3xh911vKnrgWUnL4CHfLNNF6UYYcvFia9xGK4jUNP8tnqb9xEXf6dmsiYFj2No2Ev1R2tu",
  "key13": "2PEjWxwqWjCGDmLEvpCoozqf2Buj9e3u947JvQrZonwPCB5rAyb1Bh91PNdXUa2Ys1SJSuqvejwoGG5uxPyGfzFa",
  "key14": "5NNYBEqrbNPhirx9suA5Vy7RHfy7p1NQf6bBdVA4WEEFQQX4fUezFZjyyvvtJSiMxjBbEiUzQ47FVKypijxPA2Sn",
  "key15": "23vbn1k8DDgi4YAp8STYEBwHirzDsWRexdoxbmyarnh6pEhTKghfP73LndN6toMMMdD2vMmHVV8skf7vURiYuYiF",
  "key16": "67EnejST3TQdf4vXv91Zir577Gd14CvuGdEg96gpTv9gaSEqZSzArz3TUKJYqaMiNFZLyPCU6FdV9b7Y5r93ByKg",
  "key17": "4sFPARcA8p8kCyPKyZVFJ7aQsJQZrucNAELxn7MpjXVAtM41Kzjs6LST2yEc4cBiV7eQdMuvLgHtGCNBvdnyZr8E",
  "key18": "5zpsxW3aGtSp5EmvDoC2k3X9PSvjDNFnY7nN3Dj24V3ThWokrMnuapG9yrsoR51CgLWDqJDUx24gXVjPr1Gwr1Bx",
  "key19": "3oTZQkFJXunvE69feHgQSSXjy5RJu6x6FfLEUTLUShPfUK23muVKhNQ8qQMssd8BwScMX6cd6EQosoDDbDbZAiAc",
  "key20": "XHYXpzzi3gmUP1FH4m9q6oumCfNbkDTzYqDEJv1UpJLePhsqxfpwFNcRuPYwAbdNsjvS8aXvPidDfojtjpLmzcT",
  "key21": "129REEspqq7qa1tz34NqHR4vCr595szqcvhbbaUP7R46A2rA8YaQatfosSkv6LJaAGEuoGQoXHNonQawDWwwTBc5",
  "key22": "4oNNBgrcaQtWA3jzVE7m2NbmXWiSRBBHiMCa8w2jFiVwgSS2DaSqwHwAj45CtpdUNkyvb5Ue3rJtXjayUYjXUFYC",
  "key23": "32aQBFMZk8ZGFfKG6zeQUoTPfNK5E81p47APjoHbipzuPaDisL8h9Ma5UCBvFZYmqkoTgeFMeaLSGkp85c7XDz7Z",
  "key24": "4CcJ5u7SHSFRjuyCHEqhTXiUXH3c7BJ8YdV2F3PX3TjnoxG4tSXL8ZrB3eTi1FhXUhKQQaB2dtWZbM3b5sJMhwtV",
  "key25": "21SUSs6DcHernYZs8uT7zHUCzX57kJH5khJ6Pb66BikprTEKjaPCKpFP3WRKeyJ7wNhD48CVxUFAHcjYseWAo4wy",
  "key26": "29but78fjKuXvCuykaKZFX2ZgwnwHHA41LzCaC8nudCE9joW3VyfHrBPJK1WsCjycvL9cprNKdizvKdpc1YDNb1y",
  "key27": "5CG2Eu1TdAuUugWsctT4ccMUX5LXXBDHu9Z8v5tkkmaeWhYunN5eoZTmFJ5oXetGCSZ111JBtrkKAumBUSytHXew",
  "key28": "t4sdgQsfPedSrXXFxUp2fBwgpE3aPystmwJuVXPJDGwXZw9mb1q1wcwVvNKPcvCjnrKCjU8ai9jbuyB8yAjh5Pc",
  "key29": "5rM8EScCBZFo1uqWCSC1SrU3kFFGg4HUS9ecUXAQdFpYwhr4bAy7voVHKKk4DbsF2uncZx7cxCvJPhGfVAGG29ZR",
  "key30": "22oVtt29qDBz8ar3v3KP1sMbRpNYkNxiVrQqPeAuDdBEnU2zK225TGnes6U4fQEHHQtPvNtB9wDGbgNs7KgrGK8z",
  "key31": "5WtJ8uX6fXNZRu86Qqk3nYjbBF9RjyXd4ADMjEauxQST99zwrbfm8SAsmrkB2NG3z6dnQDjMp23RGaMs2yH2aLnE",
  "key32": "HTU6M7K3dg8KVMhwGxkYnp7Ai9SSCRL26eTyBEsKHehUrRLmEYW37kWUB6RvGEWQTEsE7yBZC6tpPs9bfmPuwJh",
  "key33": "4e3S1qs8jYy51EJegDJcbcLyMjwNomBc3rNHUtdzJVDd8Hh7HZC4EcecTqMbf7BytxLBGSjBSS5nvKuF7FydKLZf",
  "key34": "LvwdbJuwsFCUmsLmdZF9uBVtdmQt3j89efZdghjAXnDvdTDSmRaS8tBsLT9qjBewojzLsoYkffk5cgWwTyNkjvz",
  "key35": "24nB66PCVAhRug37ZR4NBjEyajsxytQJUyRZ8wTmY5ZmExea7k3bdrVfebu1rSj4D4rWS9xjwichWgDYbFaoh5qx",
  "key36": "2edK1eEAP8YnPeNRiatNantsnuWxtY4smHnLwPk7dXp7DJzJSJsLqkN6Emoa1T2bi1J9JF1xYTQV5MCLaHJkvt8s",
  "key37": "4S8CgH95WNm7kqYDXf59D5y6RdMe1ESpJSb4ZMcZorKJyEkoAWF3on4eWfyFC4HmVqPHuTCHJQvGSh98feZ8XbqP",
  "key38": "4adV7ex8GjERSk2gE5w4zvVFh6sxZexQ1j5a494RYWhLtFopncRMu9UzL3v4XpXdzGn6GxnAD3murRwCqTmLHdvr",
  "key39": "3gggXbSnX5PXWMX3S4RYFrtuMhuQZHiWH2qnVLJBUUygzM9XEUed56KH5mvHpZjBgRfbWdNypLSnd684NTyYeAJZ",
  "key40": "3H75Vjsj4gTsgyEdyUdGgY9pNL24tEFAK92y5DgPdA9dQvjsqN7v45yaaL6Gyxx6szSXWXofLh5DxDWQRMZ7vHtn",
  "key41": "382PCTJSQjXMDueTE1whbnBHFytSgqRYmem6PZ3emoxnnyHb1imWgmJSjrer4kk3mbH5rWezNNAkGZqhBHhRb1Jq",
  "key42": "cqTZR37fVHetnbob8Qxp6HpxqbRqvod1JjAZSRqxSAxxzdALo1pSgs7RR5n7gheiWjGxAGBdwKctyxKqQ26mGU8",
  "key43": "3JyPyqvPdSoRJ8cqDdyDd14XdHb6Ke8Rtx3ndM9CMVmEQUv7eNeFr91qqs9yUNm6G9xKSLXR9kjugd5GTVUhqhUb",
  "key44": "2nsyUUxoBsuDj9whVoy4M8xtwGcztEKS1WnGoEm7AFLraPkLMopea77uyyTZrxUhauofZA84t1sniqnnxnRr7XS",
  "key45": "3snrv9vGxqgE5hMWzH9mUPBbvEa7j4LUZvLa2neFARtJPjF29wQbByWFuLPtLopgsGz4QFQQZzWpacmhQ4niQtTn"
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
