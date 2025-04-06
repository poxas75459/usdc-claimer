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
    "2jRxZ5aixtoZvKYQJbrz4N1xbyiHvKno1VDEjmTMVh1PUYpf9wFm8wncQZoBxS7Tk8fETKaGi2gR4psaiUcBHFFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WwotgjUgFptX24TkYwy3z7BCzbu9xgQXR3EbbvoFZd2fVScSpyGjVfs1QjoPUCFc9TowhvsdVfLPgUdxkK6W8tR",
  "key1": "51tRrFzYzNtJptFoPTA4iuS3rCU8HHANtPN1gq64xNZrdFKKvE7bVnhJos1LhQp1VtRJvGXe3Be8VNNHM2nmoVGE",
  "key2": "3JQKVgxRvtqyZqTBwo6xHFPctKJHVZAPdsKAs7g8nKP7sCGVKuvmtw8VF1eRnfPEcsuwu9kTZsF2NE9T1TTmdhKK",
  "key3": "5GKpRuLsHD4pcCPxPgYvMW4CqFgsArnaKhVaeMEpwLaf5dZRMjgHaaUK7oMYxBayRAsu48U6A5ewadSYjH5yPT2D",
  "key4": "4qVnKufc5aFgjPBDBV1VLfdqytDujQzWicawLrTqJhnzfoGMsgYY3MoyW5YWcw9BEMUi1Ks48dtu1M3T7NmGzDEi",
  "key5": "e78hXhDrBniMFgYdSbFieYNdsQxnZf1pjZcsjRAk29n3qUoMqntTGBfHSejEBvN6m9ox73V6kzZVhpwA4h9ched",
  "key6": "3BFdkhcGmQzKBSkiYurGvXCjGGGeiQK7VrdvrsxhAVc4nFwgmBYWPDcbNFKMtv82WZpaTrKXR4j9wwUuyDnkoGZa",
  "key7": "66TgAztWW5j9pMdz1pQtX7sJ1Ja8kkGaRUgTYsubZJ1JfEDDoC6LQwNqM6gS6MJ2nAJgyZN7wnkEMqeNxa6WrSGL",
  "key8": "DrM58q2Qz9SfK7bn5dSrFvFJnjv2Dgg6fPDfda7NZUwLJdfwpgQLhv2FewSi9RK79tLjbHt4bakaKadaVb3Aaz5",
  "key9": "3ob4qaDwXg5QbTYYbKccc9wgP3YYb7BtmmwWcUduL9oiSXekwdokU7HRTCn5BhBq2iYBJE55FrYwkSxJ2qRGFmBU",
  "key10": "43Yjk1UC5a1avSmVBntTrgue6XHpJztYvLU87L3a1UTUYVspxVGw8CBaTXktRpKL1FZMKn6z3KvSdci3gKtPmXrt",
  "key11": "3BT8CVbjZ9kbkQnQjgwaMEuNx8myPNdfQcDJFrBxoHNtJ5xTWZLnjq3dTmpv8WEAXCqtkZ3tbV7c9CDDYxdcKGwT",
  "key12": "4Pqttigka1xusJiszfJVZGUXQskdgwLCzABivH4x9P6hHp89jfa9cZtiGoPtnJhURJoHGPW11haHmx11VPAkFWDB",
  "key13": "2eg9bbJTmm9Xd2BEVZK3vMP6isKAq5ptvZEmB3CMsXFT1cKMdZc6m64qU2ZgKrJSkyyKFhsA2Qizh17gkjSxf2ha",
  "key14": "3gJzzZaGENWPrU44QN9sVV8ePxrdSd1XkNXPY98psACLmhyvW1GdCaxAKcasD7kcKgCP6MdQBEudSDnfdmcpqhid",
  "key15": "3Fowq5jq5w9WQtpScC4LdBR1AXFvcjtckh252yqZfj8U7T7yPDGsr55E9KnmKskZVoWhTwUkhXeWLNCyffVa8r5m",
  "key16": "45nNdMNSNh6GV233qq9ACx8B8VMCrG6qBcMbDodHCgb36guCHxxM69HJ41MdGWdxcuBtpJvvkErmEko6wyqtjvV1",
  "key17": "ZHGfudiZsSnZmqSdaxXFboTfxhzjVW2jXpb5PUxuBGGyG87wyPx5fvq981zqdTymJNSanUehjd1Dfc5wfgN9eiu",
  "key18": "4dXrMqGwoQKnM1FH7hc6gR8cNFabHcQoxmQhq7krzLEoF7mrSbAGQdkH9QnBAP64W53CYuDt3kbsdJVgECjehL1u",
  "key19": "2eccjre8Tg3G6yr3T1Ej76NgXDeUCJYs5UZv3kaoMRN2sJeTWgMcuMkW6uJ5PYMBZ8msgqKSswgq7gN5eTfpmM14",
  "key20": "3yXofgeWMWP6wCVao5H2mz8SNpiW3M3g9h3jMraymBwgw9ZR4JgrBzyqM63cT5GmYRvGPpmEYYp4Kkkhx9AGfGXR",
  "key21": "gkwEg6iTddoSBu2ME62Wsv7ficmXcLTJjLkmNp5jUC2G6vUZJZBygXuWxNcwbJYgZWDb84vmy3rueXMve51rmMb",
  "key22": "2cWhhVQnBu5kNSQ7TDTy74jR9xy1QLx6MQtJSE2718vLQwuMSfeTFm392TMAGxszLnxWa1g3BY9sbExLN4TELZ59",
  "key23": "3Xk6pxD6q6C9qXWdApsaUUWfSRNe6tbYn9nB3dQtDD2u8r9ofqsUyoYvQs3DZkHhtaKuv58CUiXXGcWCnL3HDGq5",
  "key24": "43nqUQDiKFKVcrs7Vn6ab5zc6Q7noV1wPArDRidSdVM6Y1txXA1UR9b2SviP2sCqzVz1vUpTJPsS7gNhureqPPtK",
  "key25": "3xFPmZTRSBff3NNVp2Z3hvMb2QDGUJ5YJjaeJXkYHSQht3CMxDgrzPA7ZEd74urEttBoH4BUsbHnQcrtnMXeZAYb",
  "key26": "2VUUPNcHXaUE5jaxTRseH2aPwkq22CU82DdoWtHcrpq9PaXGcCx4vDRSnFk5u1ryCMX2ws4cidXoq4XqwPcic62d",
  "key27": "3WTy261JSzhisEtfBMTdFeB6ZUHrkXca2PWHKtZatCjBJKkpwrzhLszepBTc4Mnks9TCWy57V4EW88ETCNE8nU6q",
  "key28": "2j19FnJ3FbAb6iRRSz8kzTQUv2DomE2i6SdtsFEyjRTrtN8pSdNGQoYPEWmi1GMtFiJptJ6KfA4n51znwDUbQv91",
  "key29": "3YAejBAUBVLzphbWuEswM9cd4NqbhkKYBqxzL4nRMybqqTUknvXQzrei4g5NaiFmS41Wwd8xyXeUn3RomP8icBfJ",
  "key30": "hX58VhHUiUF6b8RLXjwhnKqsL9ENjAKGJo7oHGE8oAeHmbi2n9RPABn6TW1adT1TacXxBoYLFHiaujbdSDStpVg",
  "key31": "trqNhdymf279gqHEpRcoPzHDX9zmUe42xMBtzf8jXhcsfwN4FD6NAGmRUcJzu9zFB7gATrZi5fMxRCuc39n2dQ5",
  "key32": "4NFioZyshuWC8pdg76STZtM7QX5Hqdjr7j7eNkJ3SHhk6384dn4QLtm697YM4DKkHY6z5TQXDqMrcoTXyH7tjcXj",
  "key33": "2podbbCC77oSKRRNFcYXuN2HBFbVpXKhhFFfspLvArak6LmYFDwNKBwy5AR62RCfRoaF47dmULCjrWWgF1oRphSk",
  "key34": "4cUh9mRthfLG9cxt2RL8GPGToy2H25FBtKLxAKJWg8MGiPYXKjc2QZVL6jf32zxUzatcmy8ShszxfttUsxceLJP7",
  "key35": "eHaYfjArGw2CALdKGa27WNSaFkxyd9Au9h7Aw9KLj5SwiD6JdjgL6t8iQWetJ2YUuALdXnzFVEqsccCZMeSv5y9",
  "key36": "5zZCDk9w3GC9rzJtozJsjKrpaJtdCg4G46SG7D5Cd3vQSxSVUKkc18Lp5MuGEQWJmxgHEDTcNVWnDgnK43b72sJw",
  "key37": "5MU2sLpZzMDB9dfXuBjrpqRT9HqLJdtwZBWBpdMnmiS8QU4SyiUh1tNicCcXCfXM1biVA7KZYRzyjT71gPdQxSmc",
  "key38": "2FhLvcL7DYEzksNY4KMY8xQdDcaNLxDwESXrkL2wSETYaCcvgrWPQYUdi8JzHhqaw7n8AbskcSmmswr39BbLAjWA",
  "key39": "3gHzLSCvcVrsQtrnhvcsW3kVtLxA2ciUgG9EKpkjM6ynaak5mgV5dwE7bkz9ncftxso5qKAvxBFFkqpEGrmViZr3",
  "key40": "4YpfYpL7mutn49pTb92EPwdQwpxbcsyoKF7E37RZHJVV22RjkJiTvf1pGBkEs9pFgNDVDYrodwL6t4YDMbrUypKz",
  "key41": "3CCpyBwiK2yBbSu4PuR4ZdPT3vM1E32aN5A75V5h1RGqofRaff2FQQo6Hq23VgxWwqQ59iZTUMLtTABUzihA9A96",
  "key42": "2CmehjuoDSBw6nQCqQHMZLxDDbwWuorTubJG2N3mQKkivBrtwGenKoL99uGaaSicjHe5GBJjZiSBtbea5VG78UPq",
  "key43": "C5ibAikAayArbEhWpG4Z9CHV6joDzsQAhvaEHs9X68U74uD5ncjv7FHwavRqhfhxfJzmGQoNEDEY4mwkSQLe8pt",
  "key44": "k7Wg5ySeutLpRo3ephuSKxHjmKpF47J5p74QUPsnLsfRY3kEgRrMXm8okiG9dAfygmy5ZUQnJZq3Jm5Lzj2asgW",
  "key45": "3Smr6HCMNAxaEEeSbNybMi22LqmjbuyM9nNJRHsFAPcVuETc7TVpQWLtekWMoshZPZyVpm7DYnQVgUxpe5rPPxvu",
  "key46": "5sKagaAr9SJjwuvEaCr6bVxp77Hs3yLcFGxM3Ko5iGvsVGopvsmU2SmRcnja9JoADfhNfY8MkMbF5DRfqCdVddxm",
  "key47": "5cJRgRVKZHmekGxHVf85u252entjS6JFCb4RUZg9ZL4vh6zzikmKcULAHqJTaR359TEfiW4BA3qfJqGV4kKBGQ5p"
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
