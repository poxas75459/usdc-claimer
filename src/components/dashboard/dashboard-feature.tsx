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
    "21JzhMyWDe3wdo2Me1CUmgGEeNyjB9D8edqiojffpbLpTYZvcejYPrLVL4jGQhyR6DLynKJYKMyisA9ZB1JMmkaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qGWcwVcnm9Grikg6NbrTUQniQmqLkn3R7tE7bpWmEMTkY1E6ocovjfhWhFbRpnTV5jxqBMnV2Zw2ticMhBjMm9Q",
  "key1": "3jMwA81NQgWYCBuJW6veFkGsXyYCUw6RgiWJ6CJURYGg3A2EgK4azccFH1A71tARYKNxq7JYUN1ng64tuWeVSpfJ",
  "key2": "sPf233pKSK5NgkBv9mmitREwmyLP17phx6y68XQUAEtJQg7RwCjeDWegHe5mS3uHJpqTgvk33pBTh7BUS53fAg4",
  "key3": "3SKscEzZQEJMNmhsJZuQS77W6NbGtB69ienaUHPZSHw9PHJGbguBy2PoquK9esPpt3mvei3LeczDqW2SPPY3VqLP",
  "key4": "57ifo8Q1p4F11nfqBzLk2SReoKTk8j9UJXRRfLe5nxQ8TndzsEG55bp2AicnTTSaT2JnHt7nshzq5AxprTCvFcpG",
  "key5": "3kaKWryyKyaYXRsdAjwxwyVC2Lxmno8w7BTGMbnpZuEGsr4CqqERsgPjM7ykcEqR4WMLrgaVERrw7Jz7FybrVqu5",
  "key6": "5eoeDvpmtMR6AUfHTYED8Pz5Tot6hdAnHhXWGGjWqj9uWiSa3uEjizk9kYzLtgKmFiPY4ygZ9cHxQvBgfCodAXGV",
  "key7": "2njwVxskW1T4cT1MhAX1aH1KW6eQfDngMsfojYdX95d48m2cN5VEMpt2ND2wukfEgGa8gUaq3hzHJLS7Neh3SRwP",
  "key8": "W87JrmZu6Su91m774LfHs1SWxD6e7sxu3eDJ4v2KNkPJ6izft6LdbKfjAdsTRpNAhPM2REPdNsdepxmmqfw3JRS",
  "key9": "4rZtvtigCMwjc7cEGaNNEa9aRCfwXb2yuqc7MhVMxhg8xmgD4kpHhUVUJxnBq7TyAKZzG3cUBqyfeA98FgN1JnSx",
  "key10": "4ifuAA8NcBtzEwnCFFPc8QQ8tASTezXR28F2Jo33UFbu6fnrddTdpq6aCivee8jYFxGTMemx9Lq24W5iBgug8hvW",
  "key11": "5uvRQpdjLxwEQV4BZzQhPJZWh3QDkzjtDitgLiZMDHuqiFV9RnvUxTGvN2YineBK1LDSRExY87yp5GYddjqx5xpH",
  "key12": "5RAgn5R4yCGYcry1Ff8mSWdWqzh1xrxXbjF5ZVZheVZSnhM7qdQUsABdtxsZQfMdkY2owAj2qsHmz1XgiAtCyrx3",
  "key13": "3aU4FyvSHuNdJfqKNcPeupiY3zMFkDEsvL1QM4YaTbHCNbh3PxQpQ9xqfLW38nX6bpUqfnHyeJrraxux7PksH7s",
  "key14": "2Wq3z3knoFUN4VCjTPTWH9rAF62u7Ag63EG4scadMgdWTuofJBRPqb5mADRyc7AwYf5XTNxSpXGSCjvx6vB4R8hz",
  "key15": "47KAFdfUDimdmhGxrxFYx7KHE7bDhuHwwx8LoeuzLej78FzCm8c9marZoU8Hnf5AzhFHB1bjYPe5K4DR8wJEC8XQ",
  "key16": "5PAz79ai82TFkPvZjMwzxjwgpc9BBhv33sDTJXdGWXEZx6b2wbq1xUgftjFkVQAjaVHbHfcM6EdfUT9ta5oaxZiQ",
  "key17": "2RQNxvWqvAFG3fkrVndY8pe62yD6mGQjyoCW3Zmo9uKc1D1WFjnZVaUKw2sGynQ5riisjB9PYF4K1vDoYxeVRB4M",
  "key18": "2wYXQDxveQjkf3c6oS71q3YH1ZGe1KdgvJpfxHCFpqjMm6LSJuUSc8Xd6EZGHw6daYXq4aktJ4zTiRozU8yETFro",
  "key19": "fq5pthq1EDWi9Eg6AMHpjLuGYtQtVKqyahn7bSXG2vB2A7eCsvbmfz3JP4eCDP2WZBjGdQK54xeeZbVdC8qJRCs",
  "key20": "3xfRYyasmZuyZaK58pDb5FqQAWCLpKz8UPwY9zs6UFVe34xHE46AWjzcJS6svCwy8YW96UZDZjyKmpbbveFkWmtU",
  "key21": "5nSd7HA65vBQ29crYz4VJcqKKst34rjg9687kW11NRwbGDLusqfw7frj9qH4DkXCHoKmgk37HG6fj1EEwhaRcu8L",
  "key22": "3amwBRUaGq4msVbQd9JHEkgWpgZ8XwafayoM7Nr47t7rSwEzeEkxRifMFBNpHeo4m77ygGxwEYaaoytQo1fjCWK9",
  "key23": "SuN4e8KGbgsRsT7seCSA6j6CGRjJ7rYZ5jqRYK6Pyo7cXZmKDkgE1yWiiYkHgEbxc5ZF8XCWQtDCUozu3zw5HdD",
  "key24": "3G6a7wN1aJhfoWi44ZjX6Tke37H18mrJNDNkcZf6Wv1sRoBZMkQDxfLF6hXpF4Q4AtPxLZxkW1ktHPyLP4tk3rjE",
  "key25": "2URuAxM7nUDkvxLb64fbvji4FvpSQQiYSGCoV8jDDYPb2DrtrNrRr1viN7HqTxAUaTBPK9BNnEmmY5fM5HAFQ7oi",
  "key26": "45Lv387EGrzMoi6nbxuMatRvpkWJ6rzuST9ocUg76bVS3KEYWrD5L9M3s7JavBnHVArioDkyHpAd4bXquSVg7bzn",
  "key27": "2SrnSJJaD2JBfv31nXwh3RaVbdXovK7ti2CkVwNd165FLE6Dn1jaosUkRvGwu17kQun1UQwDNfkCnvQhNEpp4zKR",
  "key28": "4QExxqHj85GGGBNNPY9BBG9gVGL4iEShjNJQoEN3eSTpcgd1Txk6PEZjmiBoX9rvVb46gAFP1xWT7Vv39DtGsZXS",
  "key29": "3W3aqPzPFVmsouCHrmdYStR4eVKxZuJD6vxgcTkK7XnFAEcwkhmfig1LjxvprJqm3bwuhvH6MudBSicTSb48vEU6",
  "key30": "7mYGFMJELnhQPvgRRPPVwr15DZZJQ5hSgaRkRFRkVyWjtHLYtJWvJEqyGFyJoBTfFsg9mBLQiSAdBvNFwVFB13a",
  "key31": "myB815DtqRMTBBxJbranF9BP1j24X7UQgsCvvRECnKs8zK9f5yvtVeK8p8ovJiJTje8HMeBUQrXnirCoSBFhZYm",
  "key32": "2T6z2FBfHoegYxrDCnEyeGKKA8aMHDiyG2RZx4vV9K4E3vv3NcNxU1mVvUnuVRafHeFg6HnhwJ218eJ8PF2q7Hiq",
  "key33": "HSwqV9NZH56wG8GgVVTJZFHsXBJnLRqG9wLv6bUhHaD88womMcxnSouXDwHiPK9osa19Q6sWSEEXghhoTWTVAkx",
  "key34": "WBPY253oS8oxDPVT69JK2j7uBvRyMPx9H9uyQebk2uymmeZCC2GEPir6pUdaKHqbhxEgew7CBmNiuxqjfbAEkPh",
  "key35": "2fNDX5XEGGHnedpgfAAJZKHDDegPuRBKpcMEhR4mXNRu7Nqw7rExcRxJj5yUiaVRSsrvtRWuHYScso1SMQNoQsAu",
  "key36": "2kecmDQf1PtavgsqCyHB26LH18BKxmfKBXC9o5cGTRtKuxLAf5KdDh3aj7jjVY3PzLayKWwr1XBB4ugpuyVqcFnr",
  "key37": "5onvzKpUcgZk7BPFqexoBZgK6VazGXQjeASm9NdULHSD1JmysqbKCSyoJQyy4vHxYgHqrXhDkQV533q1nofCiE7Y",
  "key38": "3NJ1TwK1Ek4qjspLz6Jz7tEixabtvMXeAYCRq8gAmCsQvD3mpRpj9mQnGp2Hij747Ab5gL4bUF3pnX1BQdYahf5Z",
  "key39": "4gdbfdZcoY9UxKzHrDLWjvJiDgvbiA14cQxognbS6Cx5gW8MBxJsedkpEKagYnZQAkv2Ba3Ckw4xtYpsNyJTnEoZ",
  "key40": "5YqD4UuhcvbtELvuipFY7LtEkMXGKyaNkq1zCGXBbnJ8ovo793vDeLMNuf2N9suUcYa3MSREmPPAfqhHDsBcXXZo",
  "key41": "2y3EAhhtp8sHY5Tf415GjCBAtbHNfgYh61twwgJwLWjA8ANoAehuqGYmgnEZeSFCRMQudJyuGt2jFmnHsm2VBhzv",
  "key42": "2x6KUaFaHp87Da24MDi1G2u3okz6U8S6vbxEGjfQ48PpeVAv8Rav6HE3RjQuduiJd3qr6ixdcw51aWAja4UVH7VW",
  "key43": "2AGFBwbeCKXhJXUQL8tFSTPcbtw28gpZHVmMCUH6u86ddfDcguN2phVH87iw9K7s2f6uBgAcufLUu5shWoh9mcnC",
  "key44": "3Mp9BNzshz2iDDnEwhKogXuFqK1N7RJi5pwAtfSX7RnyrsDpYEwPRu7KS5zJ2WKnDDrTXFdbLBuN3Ys7tp9TYEDw",
  "key45": "4GqyY9B854agLrL9RV8adZMzjf5C6FuTJYxcKgit5ucia5e2KTffG6upyLDt1XVZUAhAz3K3Z2sYFyNZ8XxRBNje",
  "key46": "ehSuUipP6xQaByQWdbaBF9wRXmKKD18Ui9sCeq6CXC99YrJPr4VuYDschMPj1GJkMtUCXQMWdQbLNAJ1wtX26Se"
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
