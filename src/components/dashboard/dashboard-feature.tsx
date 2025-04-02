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
    "2B5SWxyoqsCCSCcH6psCH1mWumKkgaPMNgSGDs2XqrAZM1JuQq9i8VogZhGZ32pKnWnog6GbjhtinFmZdtFCf1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wYWrSLtiDzBcurxNGfp1N6546AKidebg5sKG63uHbDvCGA44Y1sqnmB8V2Q68U92AbQS8xcUGDHPddWuM1Ae3AG",
  "key1": "3fQv16mTRZ4GPBaA3MeRgQZAezh5heHtJyWZng4DJqwh8uru4Fh7sqErozYiYYwCGoHfxDgLAVAJwQXwsj1WgL3J",
  "key2": "3GFH5uB3rJZLhoQdpGPTN29E8tMjaEXXxJQk9T3feuddT7fQzmsSvuSHZyuhpiwqtBSCrs8DDemZYLcMhmsvFg43",
  "key3": "36qf8mJFicyFnqXTffyBbJgBSmcFXydEB6Rt3ynJwBX2Yq7E9HxTxvnawxGe3tMMoqdWRVU8L8rjiwkq5t4zp6sp",
  "key4": "3wy9jFXqunHnYPPp9bTQcHQjLWZJntAV1jeZaq7eQ6b1C4D23MC7aeSJ1VdojHp8UXXTiVUGFQP7iMCHdupKPcth",
  "key5": "3HxvRbeCL4MHFLVBe9Sk5CtJaVVFVyrJoQE6SZYr7d26cqQL5jkKmru14Uds8h6SYVkEYhi1vGnP37m5GCA3NdzT",
  "key6": "2QSgp2Bm6LS1pzsu6FMQGD5e7DE578UHEyXLt9NWqYUixNgfYp6M2cE3WKecPg77nYQgs2mA5bnfXohGnxnF3E4H",
  "key7": "paW6LGp2xjUQEfCHeDEFPXdm7cSLBXH4Znq2d9zQouzXobzvGhPdnVLwvapD8cENmQrC63PXiSHrW7K8ePsietW",
  "key8": "3cEWhp76s1V1HaurUSMJReBcS19nzkRFVhqTykN8d7tangMt5FpYzCos6uQKG9nRKBhVy9L6WTDnmfdUjNFoP7yY",
  "key9": "5Q8XTt1fuZx8SkdfcWfYAxvKZdcZ295CPWqVEZ8NHXok96MLCUx847TigVY3dguXPKV5u5aR3bfnBptXGAbCNxN7",
  "key10": "5wxo2NeihDXSGPauN9Q6rJtS8ZdabhjJw9hPSrC4yd6D8rMM56THfJVaDoKe74JVX6shDMwkF3Ene32nC8abwfcx",
  "key11": "3kukaoEfoxTx9iyQ4THHTEDQ68qS1EewtuVnRWMrEdhg214LNevbgxRwZ9pB44XVpqeN2quGh4B8BTssRRZDVED1",
  "key12": "5MtCZvEuMb6YADsC9SdBCHfmTF3kcXpm5KNvXPiv8M2Ud5kHXx6D65kYhQUCkS7behZ8c1WLNkiJbma9JhBudZx3",
  "key13": "34hb1LLYpjndeBAJvfm1cKQzYPCu5cYQkCe9Ke4fiWhwSXFZhKUaxgt2gj7hDaNtVE7shbBiURMiRrr1ZSQvYbdb",
  "key14": "57jSmrBVaKsLt2fpo8vcM8PU3ZLqBUMidS31wrYxbxZMMmczioUVkPLgUjyVkiHqeHrorSPZFx8ApAVNBZ13dmyx",
  "key15": "42DdcH6Z1JT9StQr291wXwv4Pv53AG99ms9Sqfj6dqkUHUUetAFMkznrg9AdCvaaf1K5nZqJUdAstzZaHpRPBkvb",
  "key16": "2wtJPAUNVnxv7abiAsGGtL1AuNbP7eg7zqQmjk3YSKPEVYWG114KRA8ovjuvMws85pbVAPKqQ2vD5XXA9bCftotq",
  "key17": "2WUoJbouNGHEW9Lgpr6c5mEfApwzrX87L8zbJhQCx8cxwABsLzWXYJVZpNkpoZE2sBBzoFh3fb2bzW7dLgYRHmXJ",
  "key18": "2kQR39QwPgX9PXkqnUy4crvvWkUq5RKVwVQ4guPgitnkzLRBKXEpRHM76DfHtMASRrVi2cRrwQRgV2AHeiKGyGPk",
  "key19": "2Ep9G9pDohDh1NoTX9pckpnMN6DtvK9GNDu8o3ryhzJoRp25TztxqvokpivF4iSkSu7hD3RZFctA6neXuWtX5H9b",
  "key20": "2H9EmpKoomQc129xZZSejQ2g8ja17vVtmxJcznzKLs95MjYotEvKzarkcd9BsjWNqtyVNrUQL1Wjfa9dBD72TRpS",
  "key21": "2VTriQnCAwMJdsqnZ31VotVWodq3PKUswma7qMEn4fNsmzAnaYV316aNVSdTGjasHWUtKuyCJnqqdFy1hFmnMimZ",
  "key22": "4YEYFGF6HUby6FsVnsCPn3ErEHkqBSY73S9ae7tTe6hfiTNzV4YYiticL1kRDmbnNczYughMKzRfNwmdMJbRALWR",
  "key23": "2dkqtNfwscjuck3jSXkQLvWGNH4fwP9ycoTSvekV3GAv8zTFjD4g5sKXUqHpYrZizzDDmYytELdDGQ8wxaWaTku9",
  "key24": "3yN1u3dKwVpTQA4d8SpCjve1nwcuaJtifBwCDfFVWA9GFrGDhbY4czaszhiufUc9JXZpX8tH8W44Z4CWjjree21f",
  "key25": "BEumEbpAVhnLSMBx1UbrZAjv98NbcKEeTrw7kZ7A8KxDwFFr1Ag4wtGtpEFc5Wz6vqdcenDcgD5v4bVYH2QourG",
  "key26": "4PzzyrexbsMSSDBHy1Ww3vpNCVsaCz1wP5zsyVUEMVTMfnJJPMMeNvCgTXXpQJBzzeS9G4R54PMS1khx4BBckUGL",
  "key27": "2XyfPy2Wn7bqCW9sHJcTSPLF7QGeQb75fTQguTJrnXTgQP56Sxx9LVVh7nrsgnpNEv1jPj9nDHqmoLWrBiBGYxXG",
  "key28": "57KfowavHhR567kfgeae9VJSakySVzJoxCfQBTRHvK5joWfuzpmu5ufg8w6D3W1zncvSmQV7HEacingETWB8wDVF",
  "key29": "5FqgBpvsKVdtn8856qFYXaTEY5vNjD9CGMT9S9eJ2iH6JurimiR3pqLr3jFdtoj3975CVsLPVv43ssUaSLKuFsad",
  "key30": "YjQMCyMHa1S9xVWyhHa9DKj9kCo38dBE6XsndZCYL4WtTkc6V9KhwrfZC2cwxvtgQftic7qaSVwwknHbkdwJ6NZ",
  "key31": "2Yq8YSnFMxRRjvejHg3KFKnYH7jnxBRUfC48wDhsvWMUs2dS2r8PdbbPszqvhFjAyqnMBsERspxa7Be8grj5FoZ3",
  "key32": "5kLCSJ5kaMwNNvda8WdBUSKbLPusqt4V2moTLp6oFoQwvq8EVfzvNf874AmMwizPrh9xXZ733MUohPwyUcRfQ6A5",
  "key33": "x8DDX1rS7K4bzE2i53EYM15MSdb4CiYYsLvFvafKLkPxX1uejPPeNWrEnRCPct8JXRjuvDkGQBxw7w2mdwnZif1",
  "key34": "3cAcxLg7h52H4sTKY5nKo8dE6paMk8vw6Uid9Tg6SukgkSRC5mqViB8Ayk7iPtpquFzwm13ET2RqApb19DTV8Uz4",
  "key35": "5F2VwxFsGerxdc8ypTVaFHgg7PGvG6PbWHvEtixwtuFzxpaiwG3N5ocovMQKSHSyQhGfUjQG9KvmsLuv9tpFnbWv",
  "key36": "65nBnuVcXiqv5gPRDSQ2wQDGuSKUb8Ygoqq7KgK2YmCW7sv5GDztYoRB2JSwDvSeTeHVKLSWirEKF1ZpVvK3N7N3",
  "key37": "5cP48zc7ifTsqt7kXm5g2ABf83LFXnHMMvY5tccxP3rpMo8dZBv574ghQfWzrjuq8rWSQwH7As3YZaoyNiteqwMi",
  "key38": "3z8RmCnYTPMSBbYh7whjQezr7MVhBghhwhYZr4wZmj6WPNo1enterQqVGNHzD9yv6VcQ9mWvoynxbqGtGKf5bSGd",
  "key39": "616heWRjfNUHNKC5nifr38oarLSKPmGXMpwUss8i3Xm7GcHKEUJz9pww5Vf6xuK73w4ncJ1KxM6L6oa7HJgvcdfa",
  "key40": "2p78mHguC65n3ntbLtooS6WnmG7F7JFf3nsohx5aXCqBeVnTg6bhZWBz9uamM9FLhCC6Gpeob1M1aQHmzxqmcM6U",
  "key41": "8VuGDxRbb8jWhicv84gJMVbEK2aPkoX45dR4EvfoqceEdJja7t1aSN1MyStGpe3WKK2HfCPdbCH47s53iwhBH1t",
  "key42": "5etEq5K4G272gGt68sFPgXW2GSGJ9d3ZbSitd7Fxaocbx6dYSx3sskxpGDaFNLJQxC65SMPP71V8X5zZsiLQ4Lj4",
  "key43": "3KzazXJWfG4Q2ocUzviXnoL2aWqz5qicc7DbVjhRqxLZpi1vpSSLcgBY5iGsT6gQEh1t138qXawhvRrpH59Umtgd",
  "key44": "vo3yXyfGBtVEURdignSXWXzGvgKM57ZQ9hy2j37WewE48e5UXhuZTwc6P5PqxMjLs5hs2TDatgHE3H2f2ZaLJae"
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
