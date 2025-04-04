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
    "5G3Drdm3zyHMMBoi1UgiAsLtRey9wodf9R5tyiSbqRSQJxtJUawzognUhwqs3s3k331a6qVY4Zvb4E7rMqM6Kpi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rZi5VXu6LzB5iS5UVav4kAiPJLkZzFZS58DwBD6cSQADD3HRRzu8ykRxt71kWRvqz9xnEw5eLjNXxrBPjiMMRSE",
  "key1": "4L2T2dJRppTaAohdr6oVrnJTLtodbm9fVQZwFmsQKvgpTom9EdFEz4Y9ERdZLyr8Qy4xy131UNJh5nJCrTuAnkfD",
  "key2": "5wEaysNyu2RVKLJ82VhBbt3Pku7sGavPnRsyFe7yr8y7eXTT391qsyNR8wzaomcrqLBpGZnYfZEJeLWAZ3VT37Pc",
  "key3": "2xi7vmMA6PqiHnRzvEsWpv3HKRTA5twUWLWbLLtT7g9ca3xoXDPaCj86gE55eDw7xG4618MGFqpn8xwKwVbXh66w",
  "key4": "2iRjhh4X55vpSpTJm2HxB82DvLKGctLxNNzLt7UZgi8NuRuT19bgciYik5piEKhd2zjj6gGt4ebdW4sVyyxtGDkd",
  "key5": "2evZ6akbra5cF73Ku4Tm2c99vC9pDZLuhe6MmWUp99L7Aq8pUEEcqbRp83dwx8xaUmp7eaP1W7dP2orWkwxZtDDb",
  "key6": "3GzNDiYqX5qcWvwiM4zKsTX6aWZ6PkT3bEmzqjBPaKsdbUk1tVkSJyaJ1REjP7msQQuLAQgP3sbfJm2TmhhQHf5N",
  "key7": "4eUigSB2R6YmTLgAWaW1eSxtT7Us6dGWcsKexpa8fh8QxifZRyQeN1Z4DnPhxiAivvvbnzTFLd4TvGRLicnHHHYr",
  "key8": "5dpEJ1rTcp5PTYeowsX6pqbvMThe3wUiFUGFLa1YW5msdPQQqRh36p3P1WZhZYwTsrvQhw9rbHGxwJXrZQq8vcXB",
  "key9": "5iqn47fbmKe1FN769M6RGJyjSaXwcH1taoDYgLx8uU2uMK9aHWrYa2J7sDgpBVJxoVBvmsimNCAX5LPUZpYmL54p",
  "key10": "9RM9Azfc1fra6uWiNsi4t36aSefrHxavKqdKRLwQ5d84pWR7ACw4fH4FKL8FET5AjhMVk5gA5uKcBHEE5JvJbfE",
  "key11": "3f13EoetbEhR8XqHbbjX2cTGDrkQ9bNSPUqwujWvvyEb86qCdHNZW6Dy5aWFzrD7ZcLn7Ct8k4dTQg9PH5Aq7sBm",
  "key12": "pLL4yW9eggnop7i1i9YagD8xY3yDomBgCVhL62zGAR8LdskGPP5YDxaKeNN1HwEGcBAKPZhP29xJZmjeKoVVtoY",
  "key13": "4c5msuatjKJPxB4D7KYFS9WitQtwBJATxn5Um1G1W6WqpAwp9DZdvE6VFwTcDJNqjmz8TDo92j34einfjxL2rXLk",
  "key14": "3o1JMYeWcFP9Xonc6vtCSeToyWRdkN5E7hanX9JzGErNvn29sAPfdXoiS8jyD6HmWdR6oJzNnEVkzKSKBLyKbUNu",
  "key15": "4Z4FkMHkr2UeA9GDHJz4dJ9wntdDnH1nbsSqHsaFwnR66sPrDksT3HZFBaAT1tKSvNeMHheQzt5jvGPsLzc4UVmf",
  "key16": "5hzqL4hv9ktjYjBAkyoSrS1ZzRoUwWAhkbJHNrPwDcdPRcnu6AMM8geJNN5TD7yNwes5uLDWNykEvftYgRD88kCy",
  "key17": "39RNN78gfxmHgGQjAn7po4gzse5fk53J15PH1FTU2fKAkUn3m6M7K5RttvaEmJ6CxLfJGamVVD3vBhFxsRUkUQ2t",
  "key18": "3iGgTJP8nh9pYMYPiCX7BAZo4jiLY4pQxMccQKnu6ZEy7z5xmuQ2aRab7jaa3iVdbfi43DCFXmqGm9bxSMDzhoR2",
  "key19": "47RW5kWSknN9hUUZAy1gx7hAK7W4zypEDTcwDcQ7gLvjodgxNeUiKdv8gmVhH7oi6foq5pfsMaAJQYp8HYbQgYan",
  "key20": "41iQoXMkhuSZ2Pr4TEcbeuRwN8QYUGjzfXZJXF4Ev5Qabe3kdGgRLs8drVreyp7aY7R9YnxY8tRCJwAy7EeJMcpb",
  "key21": "3b7zJAZfH21dTQo29TwsW4wpfMyTHYvrkHbhpqSs3kNFzLTaXqn44Uus9kaa7ziqSB2FQ9Lgy3271PAinajXWEmq",
  "key22": "5JW5tjgYgugexqF4ngbn9YdT28Z9TPLcViM7qyGGKWGrAi6eKnQRUgTkQL4rggtM9Pkdp1Nx4SqMQNQxUt8H7jR6",
  "key23": "4tfcLpxU77fsnyCpPooc5cWy4cQ6TsGBYjSHp14dA4SpYJuSpAzaR4VcwoKmBW2fuKBGicZS9RdWM2cw8yVX5DQN",
  "key24": "4EAzyvVUFYhFaynLsKULoQYUeeC66eE8vChWVBHwczWpZf561RxsGAMDDcwxvUvJi2mQqPzkob7F2iLqRueqcFoy",
  "key25": "5uyP4MgWy3L7wrbn8dWdVgABvoY8q3Vbe89ex3f7Use2TFBYcT7DkhZ6cveGxHgdgogNSHkpu1cqRQgozED5WHg8",
  "key26": "24uDQAvvcM8DY8EDaqDoPkiCGJPRyzbE8o4wJ5TETr1ooZ6DtxLbUmSHHwjFENjdHK7pVbETGsMeQyD8FGzcD1mH",
  "key27": "5HAQwya9rgpuXEJBS3tv2VWbjqvh3Xa9uLeLKbnX7WHdFr8EkwAK1sr9PB4PExgysSSkToY1rLpLGSp5Khcm9ixr",
  "key28": "2JTv3b7JfvoHSc3sRSiapdnjyXnD5Djq8aqwNu1tRWsKwBYmnHs7eBkc8ZfYSrEvRhtnE2caJBW9MruMkHdPSCtG",
  "key29": "4Qec3dW9RNma6vyzKXZZEYzLnnt85vNqbjRDHSENUJ7RKtpxbJie16UgQQbdRvo4TVnvEvLUp4EsrXoL1LFYiXkD",
  "key30": "35BpyYGAg2QdQPvjKDRQcdqNFdzQ6r2Bcstynz1wH19WsnhXJGwj83Fw1r6Cr7HayXWpvVGornwgkfsijLxiJ523",
  "key31": "3rb4w7YugjAaKpzwxQ3CEQqUBMHYTnmAhoneVrc8Nz3wmwYo7nJ3pwHbVSQ4zWr1R8YmLZHRtQfxwmfV8vUMFuqj",
  "key32": "5adBq6cEFdDENvKfqsP7YAGzYu6UDzq68BmSQJNoYgCr9VjEZ5F6UeSU6t1Cg3tNiDZPokobk34d2nBx34Nd4dSE",
  "key33": "5yFV6sRBFsiZHbSqkwQvVTYKQ19SVqLAH9xVoGaYG7qeobxVpcavAeqtaQm5wT8sw5gJAzuV2QRpeBEmUNcYZVnk",
  "key34": "2gB3XHpi132qYcGtJmb7Q3if7xkDFfkKY49iELpYt9rVeBffScrkuc5QHRYmZKjsLBpASDjgVMLrf6AJ6xnHvZT7",
  "key35": "3GXeccVEgY2PomF518pB2sbu8Q3n1hGkbZgZYcSvLPBQtwGToCW4kuqrk1j57sFxbrLZocsY1dqRTL49eM6fktQg",
  "key36": "3MrhtbAjVNSqGWc96kTee6rhCr6z5kimLuszFSFHCSaSWPnGDhJ23WKMq7gqxZRAeG88eagYT7mB78G2ugDhe2mh",
  "key37": "W888NyDFJTXvWcceYojMSNCZXy1N5czQocyBaUgmZFpm4Y4CccnJkJnDfgZ4d6x8L2uBZ8fMj1u9Px48eRqUt8a",
  "key38": "44zFbo6b4vp6nbtBz6kqk4z96eHQnjoFVkLQKAPdcdK1GLgYsNDKX8jJ6qy3pst5YgbSMjiBBgLDUttDUhJwfTpJ",
  "key39": "qro6ZBEd8QPnisX3NRgDGWbaPC8XkABKVFaDdnymo6CN4ZXozYC8yaMJJLT18NpUajQH1ZaoJ1Nmt2ioVaHEutT",
  "key40": "3MaLRT8D11dXdHwAsfcL2hr83xtEnUSGEYEpQyeW6dc2zzKpidetsHEmXxhScNxtAUKVHDtCfQfBmQkzLWdmuLwQ",
  "key41": "5X59Ge84rZoU2W1kYxvUU87z2VGADghwp5FPdhMHGwM1yCf5G6YMRtqEPf4wkZzPWX9mYj8TqEPdrChXBaUAntDY",
  "key42": "3jNwwDjBPBEadFG4a6tbVFG2LCUzSg9Y8GpDceFQaUeU3HhmvRjxcnv7oEBYDVw9ZghWkBF1toADbG5eyPNFS2zr",
  "key43": "5WW8yKhrqJTTenn12wEn77HAkenhRCTy6R9gf7M24ViWghwE9vfu6ZFHfoPqhUxgcMFhiStN7rPR34kUbUu7pqhq",
  "key44": "ehhH9hgFbavgxj9FCTxk9LSpVgazuavEQgxi5rBrM8bEpWfzk1MqJ2rPfAckrH2PoEGErArBSUooJaGZiXyYC1p"
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
