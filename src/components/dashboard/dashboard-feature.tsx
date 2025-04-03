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
    "3zA9K15vBdjncd12aQRPMBMbR5aZtQS9wnPBGP96V6DTyKThhZaEqfwAdVgXJnsGcp7kcBzRv5AjwshEr88bMiWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oLdvNiZ2wcR6xDQgoMgjHf89K8fKw9iicTcTCiiu7fozeQNwSrE4bY3rxF2rsoU9DgZ5R7CiFbmWVuWHGGrJQAe",
  "key1": "2Sk11izADdizJGPgq3V3XC5WzWv2ak6o6qchV9PM28BGqFhtWajBEeDciPK5euiRQfNjiGAowvTn7Mthhr2F5xVY",
  "key2": "5Aie3aJLdkzV44ScqF5iamuhVKBa5XrKSmTayLxjfm8jmWc6pvGxn6cFEYhctE3VSnGNfxvmJE6SP8wA5heQSntg",
  "key3": "65Gk8NkULYpcNrLPyi4tvdDBiJ6Gm6aTLEwi9Kvv5BiLH6NNxHavvoSW3DCRhH4PCWvpBRwwaVHAqssn47PR7qSe",
  "key4": "38uuZAzu1gWgCbP578qfxdfG5nnADu4vAc7u1ymXzUQ1TfgwMr65DuTXuaqx7ND3huCYK6EiZCFsDCS9jQQEhomT",
  "key5": "35Qb9RyiG7emNWwPaPno5FiTp8eNzZLLMuHbn4ufCYsPB6uztde2RqnWMdUi8pbxzqoqmaNGbWDTA3hgRM2Xv7cB",
  "key6": "4TrhMokUD4XbBGmNJEseBe3ktBuivhDZ5xjMjJyEt381RZrwvSXmWeYj25Z6qwSkrzNQS78LTPiDCx3VAGhiwwTQ",
  "key7": "3tJc73oBqJTCBbeY6KcZKmz2tfHrMr8Z8cMZjtcK9q972N6qo8mPhigichJ2rXX1JknHxPUFQ2zA5peoW17pHpuA",
  "key8": "3pUBMjMV9rVkqCyPQZJ6JMu2U9otPXJKAbAZWyegH7NX91YLEAe4Seh4FYvZh6MpeM2HTNasxxmfD2Wsz5HLc1NH",
  "key9": "4EtUCtswu9uEHd39Hv7VGTPchFg7v3eNDfs5DooyfYxoLNzZszWHzgpWhdqN6GU248rrFnK79ondE2UswgmyXz13",
  "key10": "4fgbaNQcZab5nPs9Vj7SMVsaPaTg41AZFVBQThGKTyB1ictTkCtYTWv7cMhwyDHuWDeuG4ZXnTkfAg9EchmVKGH7",
  "key11": "3JCcpEHhU7NuNxuGsMEPJDW8xcjZxZmuM7gJpdC1aTN9Vc3rPSsmRE69Z3o1hQUBYff1DdDgMakMAYzcHJfMLgup",
  "key12": "63Qf1xYj3VMfyqqzBxWTkhqYiXVmPnL5vhiciYhpGQ6i5YCqYFqbXC6heMxvkFe26V4PHWPy6bygNPH8pzbmo3x",
  "key13": "3NGiqnbhBUrEaUwLxUVMA5pPuiSp6mrNwan76q1z9pEwXZaa49EPU1FbPpGBxQTDcMGKJFiaYmcyZN4WDoA8NPSZ",
  "key14": "29ftzdV362qrLqhSV64z3AQhViLtRmK7e2EFkkunZZ5FFCtqxV7LfVo7xzCovRiq9Am88imJy6RVzBEmibXXhttk",
  "key15": "54wxsHwMWrc7P6wHJDfJQWfAZRWtbtnKnDAZZawHfP3xwV66ER4571deXD9sE5ooCmoeBKL5P29TAVaeqkp7TmM3",
  "key16": "j9G3phzTjfiHm949eK8z3byHb5exD1XQN3PeYGPdcS4hSzHoqKVZZZPDHa6e3JTbrKE1yEtADeHgL1oBpsGcgZ6",
  "key17": "4fG1Ac1w7gSLAKdQXnz2gYVTJ9smXL8BUoB6YPvxGSwQPbzHrNf1Ys8Ri7QoUvjmxjqzUu2ydGZpLAnPhPEVer1i",
  "key18": "4uLnsVvbmjpy5bCG9xBRMykgkPj9qciaeGBgR5fCNKN71KwN9G9wz2TQbq7vezeohnCrPd8dHdPUALxYLQyyCg1j",
  "key19": "usoGQsNrCknxxLrke6brSRJZT8Dcpnp9S4CVt2RqgmiPMLNFLdmn5sdMdvbPUvXWpMWWAmUjzvk2Afx8AFC3vBN",
  "key20": "2r6CFcaR4tk2LhAr5Rm1mnA6vCB76EdtC2Rtn3SgmNksFTpTSy5eksJfWmd3jfzwWzr9iHKn49FJrGM8PQHN6Nvt",
  "key21": "3b8R9ZRmHPLhPL77QutZXtMvo2BygBNzjHcZGLEXV7twGkK9XiUR7ajWB9q6F48WJPc1td9kFmiZjuFARbavPFkU",
  "key22": "42QthvkAjwwfHhYza7vX4geFDA5fHEPRie6HXB4DmYq3xrGtcon5W96mYin8xqvSxUDXnZjwkScjfxkgwcWHNnY5",
  "key23": "UCJUJGX142o4kkLXGNB3h9iEt6AXKAonzhZ78vTVEu8ADpELZZws6Xv8Q9toXXNYLeN9h2to86uEW11sCwJe9CN",
  "key24": "5wcE8s5uShnR8BuGgPanTCcHK32u4Cd1NUVw1B72y5oQwu2EYbHyeN8mU2b98KKZPcor2tmrTGmY8LAdGvVpK1sV",
  "key25": "kMu6zdtScA6dZDAvcjk3Jy75NYF2Gm933tL5w893hWEv1xXLfyv6MGk4v9NLwZPQcCphk5K6mWbX1P3XeZDGB44",
  "key26": "297pRpHZszxRZ2vRx7QKrjwaV5VumAwjrts4G5bDdxCY6t45b3NYAaFqfRv5aqC1oYK6XCMp2FhpejQeW9S4unNC",
  "key27": "3wF1tkU6NgEPnrfQphnUyyhy8P1Zsh3yiGU1SJ6aCN69xQfAYfv8Kb3UqxQyugwHtwMhMfyBUgoofQR6CpiweZVo",
  "key28": "GbdVd4BDagW5ViVyhbKqaMc4USKdgZj33cNzGNnTQNw3v9orntwunzzJjnCn7TdyaUaLE2gQkgNP6HRyi5The6p",
  "key29": "1HGpfxggdmKvRcvST9CRYMYtudwEgo4cYan8GWAS2PPj8Rn2qb2PpGT1rpNgAZQL2Dej6U6kvZz3LxBhz9acUdT",
  "key30": "5FGRLaxTW7X4QSSe63KeNzL5qpiw8Jr7r6Ziawh7WUZ4mkNUJqdZ237hwgsx6dDSuCcjFcnCK2GuULdoKrKiYDs8",
  "key31": "dZp66Gen5W67sWA1ETqUyX6jsRDiJTNCRGBMD3E6b1SmVbi5ntaPtaFjN4RTBCbBAxaN3Dza7epJg4KTugpodzq",
  "key32": "29uvK4zzSKeaFJqaq6y7RCsfYtL7Tdx9zcUn3A1DU8sRhzfwVnPcuvxwwfr5cqN2ygF1CMx1qkRaCBxPd7KhR2s9",
  "key33": "5n3E3UW5e9E2WZdi9XFwjkG8Jx96mYaQWdH84by4UTMqL4gbnWETnu5i5dEDX53We4j4px5ryxiwiopYb13XvH7h",
  "key34": "2JSKLnoFutNRFpRBCZqCy5utuBUpRsQAQYcx24kf3gRVYqKaMkPPkQjvXRSUnejhbLYcCspCKvKMpgRA6T5yfW3V",
  "key35": "3frZMwDswbZGv2TAgmemidi8zr2av9MuojhyUXCYDdL2cTxwNbkfCXcT3MqsxBQB55gjeySGykRVh39Vc6xYtBNx"
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
