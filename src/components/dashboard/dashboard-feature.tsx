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
    "2b3VUxUXf5R9pN2Un2kEpkjwU2tV7mdBkYwserbyXtz6SmQgM2rgKBwnKEmSabcfwceSDSJZw2yzoeDUwHFpdXVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bYs5upru1TWk6VfBFEWGjRn5PRMAP1Uv6PdZbKDYmgzetHFi3d6kzStsDzdDt8Xb96zkAquvyA9qKiHFY6wu8Mz",
  "key1": "25K42haTrzUMz3ynptcVdUQtA37H2NxqCN5R7nrQdeyGj7XBkjDsRgCMoLaCeeG2PUorJqY93o332yTnCraU3sSw",
  "key2": "2q1wFTdBnrx7hBRMdTPq2zmkqa4NS34DxLY4Utr3v9emNhcC5bYmP4dYkDf7eFiARsLeKc4QLCYDEUarBx7inPcp",
  "key3": "4QvoSTP9BjYkrsDDAaGoWcb9qy937b6GFrLMb7Axe3jCmKpFbTPTqAFHvhnie5oeEs5TMxDrMKZGHPpKnEeDdgDb",
  "key4": "5es8JJ4VzDXyapx2iBSgeX5Af3dqHCqCitZB54MTjkV9Psidp2eEoxSeTbknhqzdW7KycCuj8QmrGcH6VZRCJbgr",
  "key5": "29jPnHDPs1dBDxzJ9QPKcjDdVm6f5doTMBeedgCaZonm666dnYr3QhaG8cCETado3fiagLwUsnDiJ6bnwxtJKxXY",
  "key6": "5VS9qCRfTAgrjVHAsqUunAZY6fYrXS9UmCG6XzMq4FJPuJH8QJSmk7L7tqD2qNnYN6NXX9CDPJCFoxxJQLrXhHnz",
  "key7": "3huNzDsbX7nQzUycxWHAXWQ9rsYeFmkWcpKAMMzHQXp2JciPG3cMfWzwfjM9wUt2bV2vox8NhtUGdr6hFST6EWaY",
  "key8": "FZdRDVRpRUgQLGMXZp5bUAGmY6RdriZ4t8GEhKwsNhdxAZCczz3ZX6EVZvBBpE4uk8mqJgxheEhb3W5GqVMxqpf",
  "key9": "2qSEo9tt3c4yr1UArixYNsyYk1xkzbkX24aTbyyWqQ8ZhaZYRfEb5BDpmfxtmCihvgTrAqV2AYznRBeevRY78ZNa",
  "key10": "215MYiG1cjCP6ubcPCnPrcUmb2HbYSCKu5Mbd3EKAREyJGgZqjw8VhrbcnNhioeqxGHJS3MWnqEkb3NtQcntM9GT",
  "key11": "3wD2GFVKrxPpXSksxpJ3m287qnxkiLPoTdZi3YiqqDrKfCk4FYB2UyqppDi3AoeSriuPsHNUW5hPBsnCgToDPkdU",
  "key12": "HjrkP6ERFmP19FN1CuApNRgjkwtVT2EDVK6c4bGXRcK3MS7Nd2QjCpoWcS3Z22NwJpAGGkv2MQQTzSG5UjjF4h4",
  "key13": "3HBvdGW3TX1Cpa8tCxixFS1a8Ur2JJSE7of6kPDej7Tf6wWchbyp48PknJTVoYQWW4dKoHyADRt4ZwMRbGd3gRco",
  "key14": "4FYVFnCUcRM3yfQxj9rPFSEPddhvUqr6V9t5TeoJRVzYPQmYcmQVz7yDTpN5rxaK1X41wMooK9KweNrYPzL2iwaq",
  "key15": "2ggZT9Y4Sge4sXf81xzecHucyj796R8ppQXggLJ3K1dP2Wu9Txwc6rkc7PRX255i9xPWbJS6ieTPViwuCNYoyJeE",
  "key16": "4jHttEtqjmJgmn8Dy5TWPS3yUCNz2A9Fw4kFcDnDZWJ7KMSSZCZApQWfviDNo5tqznKeNHRKmz9ujDM5X5Cfksua",
  "key17": "8oWhhoesrmDf3iHevzvdg2oGYRM1NE4pSSQC7dxvx2W4e37SZdxL7GcdK9jrnBs2eyamg1eC5U1QFPKXzyaWbk9",
  "key18": "2JW5JkFYd9QqpQZvUZhtKR1KcHvG6N6UbwBD2jxLaULjPhEzrMGNPyZo4A9C75aiBpemSQUwcX9Fx8tYmRizavgE",
  "key19": "5BxWNMGPCNJaAyLtQvWzoUWZTEUJyiySXL8So2B657tARx16A2SEFt8F1EXr941dCq6iD8tUFXRmzNjcUxzJoNex",
  "key20": "65uh8c6P3jxnMYCXpcykvDtugkVwWvYhkSUjEXHPCNKiVLsY3oBWqxhAyPdmTotCSbEct6ij5JM1WTSUGg8owJsU",
  "key21": "efgTZ9rbMfe2X4MGA6TzUSFJ6zZqFc8iv5APLgYHvDWwwd9jRGYFM2H3nqAc4V8mwisiH6kF1dShk1R1Ktjir4X",
  "key22": "3WBfNt6L3Mhzym9VKUAN8FgY5JLmQzfMpLvc9TaisxXAixvX5yhR9ZcQs1s3jvsEYLoojXTJDxsAUntVwJ2xpZya",
  "key23": "5eDBRNmtRiVFjCshBsLNsiBLwNBKLExvyG5oXUKPL2wVzUuSwUvpmxdLAHMjNtfYuBAHYt6L6JYQ5ESJG169gP7m",
  "key24": "ZS8DVvMBrrm8YPwZFRZ1SkwZYnnf8vAjS2qjxaz7daQdRhGRi7EN6NbRXnBssNEwJJ2LxqUCpgK9vUonYTKNWBY",
  "key25": "kazxm5HMRV6Kq4MW7L79cLiiLkT8urBgjzERKeEF14sVykPokkqMhffFyLaqkohYdAhmNJZnVGmcTG5GjeKwFA7",
  "key26": "5JpQfhXe7ovxPCeitF9F2pzEpRjjp72fAVRC7CNLHwjcYeuiHYvPSj7BqvyFrsp5u8LdYzXnEforCndEq2Z3a84X",
  "key27": "3tJdZgjBGTB4w6qQUHt6z4CYxPizN9R8xDGvDPhkGeo4n47Kq5vr2d4HBUq187Kv97oADp57GsBC27R7x1NouApy",
  "key28": "231G3MZmEQ3J79WRnd8VKVRpSwXEzwxFrRJPNuin4hco7ZSY11rRBXpKJeXrZE4TygWnMXXkB2W9fk9CS2yc7VM2",
  "key29": "2bfDZpYkyFB9tcNmJMj2j9xi74AhvHqcaG5zT28cxqpnm18v2e8JNmYy9r7mpdTTpCYy3jdjxmfdGn8xcKqe7M3L",
  "key30": "5fWAuntA4h7NguTP5Bic2LQpU8XWNc2T4dAybwWmc86N5aoUku7x2mMdrHw2TsQtiErp2uqpWeRwEVJmWAD5mrzJ",
  "key31": "4SdQDfmmBzk2EQu5GZKJ3uCWAR61KQgdpnGE8g91otEkQCpooZF9DcERMUpY4mbZFfc5UMh8An8Gn9egLu7S4s8m",
  "key32": "5iPyZPBwgFXZBCBhLLm9JMYKHGYDXyuYagh3q96qeoke4sXG8RiyiZrmzNEYUegVFwRjhSFL69rngr42jkKsyvNY",
  "key33": "3Nwr2YE4Ats3KCBpadRUznEVCptVRQnZX33P4UW4AUEVBNYm4bmW5sAgpoFQopYZLn6aMz9qQFKtWFqfgQEnjyVY",
  "key34": "4hryj5CDgbFksHhnwSUVoqWi7Lcd4QBwTQCS1WuxyoCbxe4jvGhYbLRFf1XMFiEnFzgyVYu3Wu8MJN639hhqh7FQ",
  "key35": "42TCMJntscVtyjxYyMiNzd4p6roF6sqDKSYUkH3zAqfcjTN59cLesBo6mVWUcxaG6h4aGnUgqcf8LHGUoFeUCHhT",
  "key36": "4KCstQaXzXGdZpxySWV4dPdXfCpnYW71Wk88HptXgyaj5FdhoBKwqybyUu4NMKoiZoaJgsFQmmhb6YQSiEZC8zmA",
  "key37": "5vMbUPksB9RpM6sxk6wafuReaFLC3QKZ6BfMMhASXVLNZnPwpXr89QtpqUELw5cDgNGMZMN5jpyG3mdCZEiycySW",
  "key38": "3B6JXKqNkEQN82ovNJj6QU3crNRZBKLAPMV2PpGU2zokE5NEarrUZCqwJxNY9MqHrnTSEfnz525po6qPfoCCrgEE",
  "key39": "WdSvgAKnRCbpUNpRTR49y3bYAdyoMNy2tAz6WvojbZm6zKCERfTFfjhgc48SVKAx7u7WxjxXm8neZPjwSHJB5Bi",
  "key40": "4eJfy3kjLb6CNvWtrJXvgFuKc3YSJ9poYgXPuHgH6WdYLj17DrDwhC99fienYo55FPXq38kaXyZmRpvYJuiJsBUD",
  "key41": "2H3GijPWngv3sk4BTFKz7D3ii5gCski6LGcPmQSHo337V2VTE91ppTE3T4fhteVaRVMoo6EHQhuJBVGFSev4R1GE",
  "key42": "4sS97d67VnEemqemyuzavGRGaNJDF2KzBK314FEJTTiyWVVrxF72XoHUfjkzaSt8j3woudCGhstse4kRTvsFg5Wj",
  "key43": "3gHdAF1XtWgRqiQLaXDij3rM1Czw1v6YmUFMBxpiiQigxfwrGN2eK9RPgBmNNS3RstyGTVDbDtZWe4mXXRHD8fFD"
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
