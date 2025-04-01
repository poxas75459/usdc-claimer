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
    "3jpjXTZPwpy2pxhMsaEcvuPa55MHJ5csckDgP5xwt9coqgrP5MMG1NU5K3y2WZYgAkRDg43hpDkqUddzxJfEZETk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UJRGDW9HK9A6czcAUEa77CsbPvW9cxNQtWb2HXiPikGf8U93fcatnPGVW2QwSpJEXubKqP9aaJWeo8qmoCzePF9",
  "key1": "3duBPkfUf8tNwQZ5k7U3eCjTWi8F9vs9J3k3AoeRVoKyqV4EhFztg5PM2RjyDLEsJnoLWVkiaxuTHuKPDDDhVepD",
  "key2": "5HTZDmmdqazv5XQkz8jBZwHDBLULTPacvaZWsMApxGSkYfbdPmutrwR3PK1oWJw4DufWY54vYgkSju4u6WUkWobx",
  "key3": "za7TmRbq56s6UpiKkZVD8w79Pi2HfQ7rUyBZ23Wat2RJK7MHkSCR1Xe3KrwggmCYSkXuX7y6dfNXHYD5cHACzW5",
  "key4": "4KQHE6GXfau6YEA2hmDYtgdyAwz2PE6L1dfUpXwc8KozNZa8LNH4cKJ82WwT8KRRUxRxzmmLNMFwJExgK4RnatsG",
  "key5": "5s3yxhJtQ2Hj2nWhdK8BkDmZsAAp7r4tdU55rhCEwpfaDYLnFPdfJ4t6XCcW818LgyqbdiWyHEf6ishVbwTzA1kP",
  "key6": "4oQ4K5QbcobWoUG75z1NKW44FfBE5VehZe2zw9oiBDEvKbukfbsABN5XDCyhJLPwz56MRskQajCSumc98uCEiqTm",
  "key7": "EjNT3EAiA9T9jzvhUAcesWxzbW1DhbBasVRQj9EbxGr5LTioczqAGkJvA5AzvnKmAr4idrGp2EW4AKqRjcg4ChM",
  "key8": "vPmuww1xGiXSeU93nWSUB1MvfCeBpUX6JHgkMP1Pi8mZ8nXq73BPH3QH3y3xViP3AzL2nzdxJ4ffjMfFNyRf2G2",
  "key9": "3xG6yB4sty4jnDXofb9UPJdJhrZeQt7ZnMzKzDZk4RWysP4aPfTG1gaDM3Nfr1rNTDEM5jne8RFoTszcFXa284jC",
  "key10": "3uCJuPEmFgYEzc4rEK5YMJwrE1xDLwiWn4ie6e5iCGw5EJR3vv9RKbHcpSRYkjJ6fCUsR9SVRkkH94Jo6XKPZLJP",
  "key11": "5iTo5STAFPSg8kyHYRzmTr4AjrenBu9FXCQTQA42ioUEQYFmMByDkjsMQ8Zd9dhai5huYaSUAqUuvVVTAzYSoefS",
  "key12": "2TDk8DT8eaoqeePFDjrpo4KFiLznb3pkGb6uYrpNAiKP7oUkjze7gwB6RejKg8cNtA9pqdYLFaaaqMmwoNCp2oPD",
  "key13": "4t1XqqEfxYv5HjWEEbkJHj5LqgoEGBwgYSfdzgtADzxuxMEKAQkUonCcGYY4sxbkv2gbDKR9a2sYDZbm5Ttjjayz",
  "key14": "627xM7wHVgWV1soXaKbjAQ75qcsNnWqCVRZpjCryFhLKo3SAZf26WZjLvpK234irHSpFb4aeEGz8QpohArtT2JJb",
  "key15": "vuzb1iGVvFeVAcff8srMLPx2fLjiu3xUL2s4DDmrB8R995ZfU2mxg9sgcidKfANmoUevWYiicv3ceNFF1gc3zVz",
  "key16": "5DpP72Wie7fBRyPoRdo5miPa8VrNpZZpcAmSMLixcow86wGrVtLnaSmTt8tP9z3Wj6wWs27azuxZq47r8Lu3z4KB",
  "key17": "32eppjFfYj97jBNVGrTV71S99QgTsjW9DVLYQTY9WJkL9mYe6cCZzeJPFLNwqpvJt3agCZisCwNPZeywgFkMmQnV",
  "key18": "HVZCRkrAVRQHDeJSnhV5Z4jEmqHHRXkbsDjbuwnBC4Ti7hhfWbh6tYqFNM6dpdHEAjvf5KSqxfDmRoPpC8dfxUs",
  "key19": "LYym5ccqaiubaB72TByvgNLSfR2ozzeqc8jM3tyJNo2v7D9igyHgqvpzkwed8waeSkLPsjRo2RnpKLCKpdyTXr3",
  "key20": "4ocx2zzPo1e3neve8MnVGGmCGkb3NdrtgCsYhE7KH27w5GVjHEbviBqF9k24y3M4Z9VBykiyHSfgMYbkhBLpSM68",
  "key21": "4SCnBf3WkPH1Rhx9wYjcpEyg2WPmdYJGJDm1tgJy6CctiFGHMvFy5Ja3Bhv5WbT7J39NtkfkB1yQ9mRSb1XzxVKU",
  "key22": "JmMTcLNdJzJrHyTk7CUeiwLphzcC62vFs11vd84zazmCtZrZvQS8o5zZxxbFuP1d6dVKbCJLds3gZ22iSzPhSnw",
  "key23": "3UgqvMbCwF5NJqnXXwDPBENBNp8XMxDZW4V6JEygjnFynj7SVMxoUjQsCrg18ezDyiZYTTnAKWLXPQwDfyV4b7dK",
  "key24": "24NQq14NCneEBqkREktCTRnScXeAtnGKvwWvdgWjxbjgNopbXoMJJNj6CDrGaMtAirFpU4yoKwRnqz6EG3BxAdUf",
  "key25": "d4SSGcBPb9rPNPTvFNWSPruKaJ3A9KQjrxdHjcJSkp8EXXQnmZkg12GFKKTfDMCPqvxvhtDJKSNCQdfen1yD6ND",
  "key26": "4LBF1Vh5W2DBfQYYCfe7SjrkwzLxpVNwizHb7rsNnvPt3fhbBATyahm5WrbSP2JG7kMxMmgPfkmSg4X2tUvxX96k",
  "key27": "GBhFdiwTvM8qQ8LPRvYwLeBHZNCsdqDu3N4uLn2cbBFFhopSshjisWKdx4v9ZSadYcTtQTzfhEAiUiPKSBe5PU6",
  "key28": "3uENp4iUeCjdqaC3mmtJixiL3VbufnXwsD7Bd9Lgbo1FwoBp8wjs8V6ZXkcCNiDa6cc4uomeLXmdveebjHKtJLER",
  "key29": "4XPLj6wGvydnd6i4LN1LiE2yrYW6F4sGfaoLEkJWE7BL9d8thtXiKK2LLGLEBGjjGYsfY6etsfm4RqJiMpHrYSmt",
  "key30": "4dXrkbbhLFtjBaLEPLap9m9y43KU31XJFc34QnVzZv7CoaZXdwNa4TZvGEvXJhcfaxWN39N8CGnAXkBMVMCtLUpY",
  "key31": "57ScqEyNhwe61kF575jBGdxnpL46qmo8ZtJaARmtggrb3EHKkQWMECDDksVGLt7PtAK51reWY6CikgifpF1SLGU9",
  "key32": "3FApyVDEyhF8JDdnt6Xqut5MED5Bbjwr9YEe9FtJMLAWojKZexgvNYeLVWYA4veSJAjdzmrbnnVd2raMU3AULjYN",
  "key33": "2Ta1Y2VWbhn5vyM3xTxioqhfgfQk6PdqSq9LTjYZVJXw4Zm91T83De2xSjrHJK3kz8b55Lx94XpTGRFgNoxfVB9A",
  "key34": "2X1CjzUWYUvuCDAXUfPBQtgf2g4KzSbjJKi6vcWVYWQqYs3TemMLWMtjeuzuaqfJFUL9SnXHcTSf5KQD4aiqV4VK",
  "key35": "DnyZH8DmSj8gRC6TduPSFE8GQLW6zRqvyGodSK5REu95ojLBa7hrpTwBP66Pu3Yr43hJqa65oLQqtzW4s9zBv1u"
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
