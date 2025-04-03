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
    "4RtoUVfNdkkv2jtYJHxP6gQ67um9sgCdn4pGvXqeBUofuwmcQjo9kXatV54uJjp1ARUUjvjKoreXUjVG7dbxiC3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SnFbfWqmEhiXAjS5FHeAte9Ns8mWUMKtU1Lb1isFAtyPkVM8vNMmKeH2fjY1JCTnx5PJyMZiojxAWw5RT9SmKn1",
  "key1": "2TuBpmQ1eKNKJ59De5zTw4DhrcQUgS1ZuaXPob2XFssxrxXDL4xVSvUwjYGK5LTSVXFWTZjadou7TS2reCJCNXGv",
  "key2": "2itN7i5USzKGhniSySsWT7qQiXFXURHwShkb6DkVAk36TaPWwonpKonpqH12H54wZxYsA4Dgdhn7DhrsswBPFZ2r",
  "key3": "4T9f5ZGuRvbqFBKy8saneyu9rsufh9mGiZBYAnqp7CkEhsGLf18FbpFWW59ERqzmN4toqnqf5nfUodwArubPwco8",
  "key4": "4eDEPE96LNra1totRLyTRsFPgkht6QKYQ9mPR6AB5XBFVbQHtknLhMxKGYbdLUeKspgvUTuAHszXCmgBQMckPjKW",
  "key5": "42ykFNZPfVdKGcGy5khk8LFuPW9wQL32upnBbDzZMXZ7DicFRQTB27mmkPWJjcP7yXFoctm1GaoCRrsAnhrAZip6",
  "key6": "2JcsWtx4BsPt2nDQiWSkAocC2iAfimDsxwPus3akbt3ywkgCDc2TJ3JmWjxEJs6Aa6XwCXrAznbAWUgXRnjMvdYi",
  "key7": "4FjZXtUWjxnB2VEgS5S2rSQfa29RRu8SGnCiXx9AQxYdiebG6kwEco6km6zKjUEddUL2GEUJwLvHT4z8Deg8Zs6U",
  "key8": "5oiB2fZwreFyV2fpRHvEKCYxbAQT62pvssQyDD2W3DdskAVbKhPXMz41HYR72A4rPitZ31ncyvWxEA8jXz3jgPLH",
  "key9": "3nHy3NtgA43etRuvGbn2fHyWcgWTGeD4XT3Zuo9fBfjKNu4wNasAmVzaAezFvsMrSzU5uazwL92mQWzLJ9cmA4g2",
  "key10": "UUntBHSNVpLs2XNustgxSyW6HvczKHNeZV8v9Vq3UoY9PStv7Yrt6wevrBdhn529oysie8WSeY7CYXQ5Vj7ni4H",
  "key11": "3wFchM6vvE5Q7vodyjTDgPnJZWY8kgYb85EjgoghNwuNgCaPmmGwkMRWej78RgMEjFHfYVKsrerkaJPyUsiuux1G",
  "key12": "4H87SYa9TXYSbpT4kZMwxEUY98JZKYxig2kMaWVwAPUavYDfcFgp9rhdpm1A7T5bBKSvGojBA7XuPgCSHcVeSAE2",
  "key13": "3abAPkkSK1po6Q3uY9Co792PTgRmmLKxKESr13qc1dtMKvNfgKFiaD8GCcWFe4Wo84JzcToh46gXWEEuVeRBS1uK",
  "key14": "2SjPjqBNjVRnCnCRwMLarHoEneXTz2cZE3UVVDtyQ3pqG5ApUYvZ4XoPEUBJBYW8SPw8JcK1mAvx6GbLVbu84mLp",
  "key15": "4fkdqUAc3d2YGgDNpcD4b7HH33d4B7qs4pAw4veuPxR1vbpfFtwdnuoQKaJf2MXhjJRXdXLUjg4ATx7ZBX2qe3HK",
  "key16": "2VaZsBwp3i9LjGYWrc6VJK16CZJibMmUZGeSDAqfwv6eRf3SG1MqJ1DiiwMdCB7z6Zfcf4Xe4eNKAHyspdLB2Z7r",
  "key17": "2xWuKiJ9YZMhKGBCf1CY1WnHVDuN96zi2P9rVASgtSLzU2q2MX3EzjFT6tnxdABqgzTAUirsfPtakggApuWjtNfc",
  "key18": "27xSjdqraFr6cZ8YY6jpAdgQkA1MVuRyhQWKRuGJsgFBw9DRT49AjiH23m5HhWBFHu7h9tBZDVuZdHdNr3CTjxCo",
  "key19": "64nxz9mHTEDGYha2JZ7oktXDGBhR6VV28FpNpsXdpLddAtDyQ4cX35jd2XvHS8D4SPLnWjJN7fAaM51naB6EY79F",
  "key20": "47rN3tawqjKoEZQfzbvfsrnQYHWPw5sdYm7pUbSXJsjHPRwyd6Gq7fYg8UV9g5icS4poAgr5Wm2E6rZ1YD5JM6YR",
  "key21": "5iZpx68UVJka3fT4T7G7CuRniC89JrLmf6EFgUuepz4ww6PkwqnaVGuMeZcSagToZhofku6xAmcQtku2aiCumt2H",
  "key22": "65gezbABUjZban9TURQoSS7v12DC5Bmt1uPG37jGArfKMqYKDH1W9vXPoBBNLzYfwFZ1AFdAFxkKbFmEqVHEjmuq",
  "key23": "2PMAE1qdXaVjzt6bo1dh14tj1nKWg1m7TnLZfA3paF6aZDcD8KFPxWZoPCqMzseYTMnzZGWo6K49uUqYUP9T8n1e",
  "key24": "31yv5GxAHk5Ktbke3EV9mzV3jDavtCBngtqEu7Ur2vrWryWBe3Guq8nUK4hr4oUdNhLF49sihaWekaRbK9s1p77h",
  "key25": "2fdBhNoaV94eN9jC2fuouU9cTfKPczZhD9zjhgqH81xCgZQRATBUcm1336S7DWZTwehWMdnoBcdhTW2TLZ5stv9a",
  "key26": "4PPv3Dv88mLhFWuc13guxxa61zhDiqXQu1dzmqiT4nzhzTmrkwRtbUb9YngCPtT52tygkyeo1CFyYLQDwuDJydcY",
  "key27": "pyeBaXZTNCLzyH7iT3G8Hpg4icgHaSJkd5zn3MD7esjtB8yhivj8dkXmDD294tDYRDUKEheWHhrWQHEXyfSvHSb",
  "key28": "37qkRCGLDtq6GKnc5TaqkiCCN3dXaaDLPpfkHKF2tLEc1XuqH5axLotbteiBgQ4WKuawTVnroqzaqs7XjBRmJbAp",
  "key29": "3s3HvsyPRR5Khc6eXv19EWUaQo2XzL8JZjcVkxJx9XzDgyNf1cyM6yzKwthd8Q85pza2excAzhL2Y87gDeExYLQ7",
  "key30": "2e1fWr1j4QsoseoaLAxK4d5hw86539QMZNvDvn4p4Y5jSvf5Rd48dHBfPfvXrTgCndcBf2Uf828bHSMxoUC8KJBT",
  "key31": "4FSQXohf6cuEm1aa6YJ3NbP3VjxqGmRbrP44sjM5cWPE2sMB7Xtur1rpZqKLsvqKWHJgcSBTQgxzf8qpQry17vRu",
  "key32": "272o4rFqJuvR3nYaHpFQnMt3RhpdvqUv6BimxYVSi6snWqebz6TwGMNfmoGR1ehNPhYBcfs448h97JGpYaLjNgJm",
  "key33": "53nA5R5u1bSm6BsTVh3aXgcUg4MNjtFDyK5kEDQz5kq7JTT1EJ2jcueLkRcpCGRi6kbehKVoXgFrbNvgPLot6f4P",
  "key34": "4gjtnE1szvXpiRh6eJAgbrE9zsmutZkMufKyzousjuomSYihzu7ZnnPgcedG1sFZiKAmWdkzoovQVyvuVq6BnnqQ",
  "key35": "2ixgXfmxwA5ch5skM1DZ5C4ARQs9dzyc9SKnYStZQWrAh92J81qzC4k1Va7zZWxEce2WfBfGFWyAmrf43aqGdkAo",
  "key36": "LPYo7aru5gMDFL9dBN2hALxTGqbUg5hZwttbtnv9fiePrnfUHQxvTb2rM1f84UJDTvxeRXkmRQLR19SHyAYa3UZ",
  "key37": "n6qDNWB7gc934t18Y9uWyeTLkBNGVpVUPJN5d5zcXLqnoW2nojfdZuJQaZ4Xq5rKRyTioB5aGzxrGSNBTe6THbk",
  "key38": "3v6E2oUhypAirfwRtBhj9LuiugptdRwM1nNUp8G7Wtaq1RVpKwuDByWMAkUPpB2fqnkx7x9V1Scg4CLYFfhXV4uD",
  "key39": "2N5dxwmA4M37GZyao3hzMyxoVKyV12Eu7NwQ27iQrLoYtsJ6VqTUqrzq2HP13nNkB2GVg4xZTJhjVbKmqtsH7vyp",
  "key40": "44MmUeTgJRuDdC4RUHFDaHWcRPc9QkcCmRz9ApLyeibrdV1xBQ8Bt5cecpEzdYA4Hqywb9CwFAr2aU36uLw1tSY",
  "key41": "ioaWd9AEeDpp1fX4khWy8oKT7oH7t2oGbwMh1rXYekBekZ1kucZAGG6W7r2EAZEXbXkv8aNgaMDcXYG7pGxCL1Z"
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
