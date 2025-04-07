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
    "5zoxZD9Un4iovJo6TLwhiBfdxc1FuiLJJvRwPEShFHuyE8ez6vRUW48xKRQndBLVuUkpKxo1Sssu41G2vDfc3iJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vFJSCiDBJ1JarXmQJM88fUcBdb5241qkoosPZBUMD7yyKBumP4PmSguzxMcDbDvt4TbXHqf2rZAsyZFvBNM2m7g",
  "key1": "3fMFrJqx8naiEZGVWzGovaY3rznQ4HJEcfke34eUWqAUFMuLDGB6FoymFwYQVcfkauqyRkdSPmHo4DuU2xaPRfWi",
  "key2": "4mKJxaHJeC58qbAm2XP8BCCNbUvdEbHmKrZX1tZrUbf3pMa3zcjVCujs4qs3zMYnsxaeuYjMDhuEumwKRSVCJcZo",
  "key3": "4bbBwz7o8MA7VwTSSqq3Eq6CNgRqmorYr6noGjj9nVoyEyMnfmp4JCosNfmvMuthU6AQcPmyTSCLrGtUEckp8xCB",
  "key4": "HetXwSNVRU8gjHJyNVM2LAfNYgPjC3FtdiknhPnEr4Z5DGVb3wGMZ6Yb7PihqpmKov87W1sejAYm2DfFw5LuwDY",
  "key5": "5m2nQPTZsyXEVwoN4iyd8DUMCezxn95qozPNNeRaFXv6fzNU6TAH3h6VpZvTvDMg4giwKTt1HdMWzoNe3hvrg6KN",
  "key6": "3qvukmLLwMGkM7cq3pD6qTRx5mrpJX3CR2Bc9BXoaxprzAAx6rCfLztSCqtVpHVEGahSXSpsNx2NoD9c3BsssVBC",
  "key7": "CqFAcTWoV8AvokVNwxDNBX9KoCHz1yuARosjBbhdwNzLZu79xeigPGDQa6cG7CRxJ7aNCvTM1oSaKMKNLPtJnNt",
  "key8": "pt2VjeKJCgHy4iShXS3Sm6VJo2B35Hm3J8irDBsjs4X23B6S8cWAtGL7JKUgNpsR9HweweK9G9wga538c92RDrj",
  "key9": "2LNnKehyr7RJ6pYZbnknYZHAXe54iP7U7SwxiVut1riFp2cC9uMGwooi4hD36vJv2tJGqPNbLuG7ntXqrxrM8YPh",
  "key10": "55gWV45Cb9jLqF9bDzvM31mM93Zx1NhJ5nm3NFKXdC2oWhL4UAhJzuWuoQzH5qtZF7itXPbDtpHryFpUkq8oij4W",
  "key11": "2C8Tkk8qPcp5JG3owmq6ixftAVrF4cV5iJMRKufNvNYSwG6UTknPuex3FbK1umGo1EMCWtY7YNku6SWHDHYiQdS3",
  "key12": "4Xpe8tVqugM27wgzr1FcPyUFXthgrhRepAiGYvb9H9sLwG79CpQfDRvs2QVn7hWUxYoZr1WuEXHsGXtd2UUtcJUD",
  "key13": "2T5NKWcKiXLSyc9MA3XUEoFseunbEXg8rtjAXZVtJCYw7WpyQYHN6sdoo149ke4ezDvFuvYEegEfKiLi7Gdsnj2v",
  "key14": "5XbSEChJ6TfMerf2HttPUQzCizmHNHQHStgr1x9MQ3uzFKRp61vnr9fYpgR16LthkjJP8hpVq7CfmVb8qUBXee5J",
  "key15": "4rEUDQnqa62AcxWUTr5NmL5ZxgtgKUHs7i2ztF5R2K3VzG6abQQhfxRWKaoHmsqGXUzfDyCfu2EfFCtyphU1iJg6",
  "key16": "QTMFgWogDkViAyZFFHpEW2YpmhMDFDeYjyNPmZ9wXVDQn8EA6sY4Kb7r9GJCYLfxJE93i9biJ7AL8FrWZxd6aLd",
  "key17": "2TkaAtYLEQftMF1xWE1hXWvs4g1egzx9HMEL8kUxAZx2z6qYWYmpqSg9kLmf1etY1hQGSQBEY9sZmqkRs1BJBGU7",
  "key18": "3k1r77GM2BefoKd3Vn2piYywC4pBeNJPhZh3SKatCwRLmpJku17j1prnykh5V6MUnB6pcC4YRsPQZk67Csu9ekdg",
  "key19": "Ln9EwAVYuGZvV8kBNfwFP3jfD6dB7YbudGG3aB4UVgdefV3JvZvYAxmR9n17KtGRD1XoPewWzfovVFL3yf7qky1",
  "key20": "3hi3bJF9cywwXn9zwPYX2jxervTtJRzfVmDBdptCxG9JQ5qQ7ihJGKhDN7TRGf16vNLYx8PowrrcxAYASZT47hAF",
  "key21": "5PqkgDDpPBLJUCaT9PEjNyhvQBhiKfYmECr1Eh8m5nfwuj5JYHmFAE2JgEq9ryBAdVyGGAY8ZYSQGxFCUZiDKV9t",
  "key22": "5GgGZu7WZGWirmNeth9ZrqpNQTt5Z9r1QqRfTj7KuoYkf2TWGrrjpTm4vvP75tZdbQkRiwYMBYJH1dH6spgNU2CU",
  "key23": "5LPfdAjLqSy7EADE3asD2z56vGCjziEvEQh5pMJ4Mz7tcfsoQvj2SqU1hvjVWgZYDv4ShSK6QX2JgXafEMv3ch3X",
  "key24": "3b4RPXwqz4m17SPZrZMdiRMktgkeQTr7a78wk1ir9SCoEcTxjUd8WiRdR7AX3G7XjGpLchvh5bKSKTZV5Dcx1TC4",
  "key25": "3h3ZaumxxmTLACswAQtJw9rJHvv9VEmUbh5NnJAk8FX55uem41zjMWGmKBAnV7jTtrURvbC4ria5WFfdGBfWZfVU",
  "key26": "rd2QkXX8CeMmfYe57mPUAQxbNv4YRYZYTJWXAU9m61vcZB2fcSQqkvBmKogVV77NsG5jrn29APdJoxwDbcXctR3",
  "key27": "4HSt78JhhTyi9ZFn9N7hZfrFBVUhYdBmLZtAv4VGgKpBNZ9bYYpcDxUkUdYK4y9xUHcZ8yomqwgqsHHats5MTfbR",
  "key28": "3h6mDwc8cJpHjtYSZsQB4YH8QSwiwDpHmrqWzHoQpEUuJ23ew3pKq8Xus86aAd4fDCJcby3RZzW7rDQcPgEKjJGK",
  "key29": "5miB9zuJmDfQf9zRqSczLfnY5mM2tW5yamKv3GYFJ3PKJsunWc5sfLMtse6itPEf14KK3ZMFHZQaCvjYGSXimhTV",
  "key30": "2VvTz5q6KVfEU3wVTtGFP8ceCqJFjLAySyyUhwCgGxDAmgi3AL4xj1Wcd5w9M5o2UL3fjdBMPSCwrrfjcpejk71Z",
  "key31": "2YXsShsSRuAFSi6ptZgBFo387oDPzrBEhjmoyVGSdD7SkJr5w3FjeEqhmVJ7DZL5hWw98g2dKLMEUdKiAtRCzJR8",
  "key32": "kRmMREJVZL6cYTe8wLxJt2nVnz9tDpJREJBsPNZopTw4Q7NTTnrtF8XVWjChkFdtzxk2BJCRc6nDxmgpCvuFc6Q",
  "key33": "4zVzeZEXeo42bVDwPvHYoLczqkSKCH86jYtttWkTShDXVcbFZaXxRQ9BMNJa57CFhy4gCGCtfJSWGkgt77BTXHop",
  "key34": "2FHtr5gu8M1orEXveQgN3S48zC58dDAtx96dmn6V9cXXGF97tyfkbccJ6xamooqzuwEFV7KadsuhHPXzMmm13gwU",
  "key35": "3QQwUh5Eiv7dBpmR4KjUJPsRAhbQUa2PH6oWbYJFgc65gszUr2UHs3eu2AqZ36ApS8Cve4zqhXosKWFYeucFafUe",
  "key36": "3Kugcb8ujx5Ukg5uxW1WRGTHohCspFZDHqaYkMvtQDwXqnSexf8ev5d2Au2fskPfQdTwWw3zt3CyN475E3iTUSD4",
  "key37": "3nhfC9Nb8JdYsaS1giGM8bCfqFs7yWMcX1qaCNWaMbbrn2wWcDSPcp2sM7RUi1ooSSKUC5JHnU8pqEQVpGpAngze",
  "key38": "2KT8E6cHqDRrgRHK6R9i4Uz6ktL28YXSxuaE5ccMtiQREfBCrTdQcC7VM9yGsZMeb4oKvUGAn2i2gixR1ZDPaiTt",
  "key39": "3KwhQ42UH9gVkRsSedFDGR1FnyyzzdcnZCGQYbA1BRNg1tYzHgp9cA9NAf4UYqXA9qeF9ANNq1tJLkjuS3UAk1yF",
  "key40": "qQdM27WzGUHq74y9iu1K3uKcjq83ndi9totr2CdR1jyLigGvSJiVy2p6gik81xQurbMkF3iQhMgjjpLznaKV2na",
  "key41": "4gyVefHuSfxGHJ9A7xZ3Y2uvgJpMwUQKPb5PD2f4qhkJ5Q7Pgyiw89mE773Ea3Lqd3KTFdsK1h4HZ4te3491fgWD",
  "key42": "3FjuEtR2j1XerGDP5ZDNZVT76GruFCcng84LF5oZ5Z523n6dX4Ri611GLNvjkRHcQm8waAMTdwq8XrjdYjUVx6o1",
  "key43": "2Kzj5baGD6TNc5tbQHxuEPBoti7guEhwV81CzNk6U2Pqh8wTsjgeQfotCF6SDNWRBb8THCbKzwVck2xXQE5BXWDw",
  "key44": "4tTEAtjJPJzGxoWEDhqdA8KfNUfZxTPaRHdTPpTriJpNoQLeqBGqbMSYwUazZPyrxC7oy89mA2m4xM7zF78yv9Na",
  "key45": "3NSwiAJqV2TCwRaYgYBo19BpLJR8wBACWwvr4m9jKEsX6n24PbYBZthgVFK4tQ1zbWxyzdNuDWabTjdnAQtnAe3c",
  "key46": "gNoA9AABcomnT8tB8YNbbsSHic5jiHURAPZChLrvM8rWmU2QJh2Ex6V9Jtmz7AiYL6HVgm7BanjdnvRU3jBMoAD",
  "key47": "2veJptUdV9UmSE42Vv3CL2bZv29PGRDXfjQPCUAJDMzd4JenwsApd6PmS1JGNTHzUQaxNGquVP261jhDY8oNhrc3"
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
