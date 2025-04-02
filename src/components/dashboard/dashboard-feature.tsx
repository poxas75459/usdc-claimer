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
    "2JbZG1Dnmbj9k67hA1h8f2GaQHsobVUJHypHauMJtW9MjeDuhVGuRCh81J8xJftRNsdmgAZPNQknXiPbcM3ZtAfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46oCqRKmm1JeVV7Mke1rUTCeRdz42QXofeCtUo5GCw74nwQGEbwn8qnBahKHfyureTd6dZCpjTRSd49n17sV3Bdk",
  "key1": "Wk6YqCdyxE6BsXaJ7rpmTuKdmPTA8WjVj9euyJNop75mbQz92HxEioZFeiJKzDXGU59KbYaqbBRCxwcHXrXbY13",
  "key2": "5k18Mh6A8Rc1UsiinMaj5K5t9YVVnr2PLmzxyAPXvPpkguAd378XPzthAMKF91s5BsHPu9d5GQe5xUnqbwJjWZ2f",
  "key3": "3hDUQNyeoHDYEE6qhGiWdtvTK6E6bcz133haGbBQK9nnD1YwJK5VXDH6HeGJ4muGkVUsHjWZ64D7axJV7F7gHaR8",
  "key4": "5j9TwSXvyrjDb46nDQ9VRCX8PH2LGYCbJZ11yRho9WQFbjLzAd93Nvn9Ej4ZFLoKmgiqfTocrtCfjvvx6U3JybgY",
  "key5": "2ugCEZEfsacR69993RtyZEhTCwsevz6tzxSVRpUAos8RLqmj4XpBpLpN8noJrnxkjbRyHFnbq7nqNF2qkajqSyPJ",
  "key6": "2nLUMCnVPvNaqfSAsHmJCScNbwzP99P3eu6PDdYiq3fijnFJfLsQSDicqjhCYVunSm5H6kbVLaMTtXR4ochX54D1",
  "key7": "3aXUHbN9jNY4hSXBckNa5dH5z278geQqdiGrMWjwKftjTLcwGLPLjLR6xL5DNyrybqkqFPneFzTiJ8BxR1AwVnMK",
  "key8": "tHvhjX991T6AP5CNPj7tn8VgzkWHywsJcuezfDuxs7Dz8yGS2W2s7h74Dp4mJZn6aZLA41GYMyAGFM2ekLRAXhR",
  "key9": "2YL1YgZpNgdsYZZnL5DTWyoLkStg4PnMaC3kecZA3JuEeSAiDG5twfWSn6GirakSv6KHVvQrrh2Me2J2b2ps8NDV",
  "key10": "4PhVfbpAhbR2QN9vHWJgmmyvB52b8RhXjCff4QVS6vtbFJeBPFsUCVZcm38R4VyJaq6smpuB1fkNzi96uQDLQPEb",
  "key11": "4Kcu3WnSEdgJbXD5Gi56oqz3fh5YUvkKfuzKc2VM4BgSgSrUp2TsLvvS6ChiGng8eevxYGh1Labxna8MgZUeE748",
  "key12": "2Ge8GdbjpPNzFJ22mf5g5WHbbx32mQPXLzoxmpYNmQRfRYeKEcubaygB9VYj4zJVjmz8QTvp6GjJWMTW48Xv1RaM",
  "key13": "2ggyzwSN9SetBBMh52e2nEwWuummctepFGJtcFsLuR9qTjy4UbawMQh8DjuQXA7hmWKz2N6SQkUDpjeHofgVzbwd",
  "key14": "5ujsSjNUWJu4nB1aB6uk55QfrjuRgTr2F74D1wbzjwzfemXetjkm4k4wHfvDbRHBzFjdXprNHCREztZ4Kp9T396T",
  "key15": "2S4iBXePGbJ5ygQgsx8cRtStckP3vT7XhdGwFSd1o9fboVEB2oyeM7gme6owW1raCE238Cu517M2cgu4mtagXPCC",
  "key16": "2QtVS99xtJrX5y9oBpD5JR1LoJ5AkpQyQUomsFUvrrv4Q8kEa2cDDBrNQT5LCNZnJCtosKWoBX7bMSQhCv7Ko7Kn",
  "key17": "3Yipx6ZbRrGPkxiX2JyXei6UoinCtdFKnVGBsEJYF1NsQthcrsMqLQrK9iwx1Vr8t1tE46G3nZhQACTLBzLKKPDu",
  "key18": "4Pbx1YhkThnd9Wv2hU7UWFnTZ9nFGG3ZqA7zktVtFRGZxrUZjiHjakMAeVC98xCrfmwaUkTmRWMgV7R9CMY3fq8c",
  "key19": "4HALoyRFuyH4DiMcb5CdoM2oBhhW5gbY9DTE2TxZ8bWtx56AgBAZocFuhEmMTHDCqKehECR4fiuhW6nUWc9ibxPE",
  "key20": "VrofnBFC9sz59dUqFAuGfUB2SmqjMB5CdJEeUnnb5i6YUcd6PzQFHkqQDHQNYm4bdWJsnfpvKWS8vYLhzJNeqsY",
  "key21": "4Vq85EzGyPjsEj6iva9fX9mS6p21rAjmQnrWZHS1MNQZuiwnaoT7V4wSqAj8eshVrmtbB39N6HtpgmEFjbTnpDtM",
  "key22": "3Q59JVVtBBJuRbAxxtgsbtNtT72iWkHAa3FxB4hLhDsUuD5UQNbwzqKBPsGsnhpHkujTYSHWDf4jy7bF9exYorjk",
  "key23": "2YBRPKcSuiifZYnGm41ZVfVanEqaLE1KTFFpkSCi69fqdZBUT2VsaSfReEWvhVQDLiYCiZ7YPckmxWPkK7c9v8Yj",
  "key24": "uZ8KsDpdDwMU9BP8YpikcZvbfry5KExeHu7zKBFe7GbCm6o9noDov4heEuvZoE6HyZ9y7GidzFsqh41geg7kpfF",
  "key25": "3zakKFeGpUHzdB4yHJ2PztNyqRNYhzzry1DxFWfy437rifg1PQ9cpjV1cwobCUiwK1mSKmBBscfjrrps5xqtPJYj",
  "key26": "3Pm1RXgdRwYd5jfekPGpaWokR76EBHWRUEmvA1aywZP92KLnmh5GytkFYqT4WNHRihNV95hNBptns9anM1c3zCmf",
  "key27": "2VarMrBGZKH6PpoZVhPtEHZfngv5mVLVhLmJTPmKjXct2MFCELn7AqvvrY22SzKw4ESGJJgztgovuDudqsd8tyP7",
  "key28": "2tbTyrjAstRRyxmkMDJRSpuzEASp81AL8dehkVpwydBnrYi3PwzLi8U3rLV663SnNREC6XXscdi5S8ASbF2T5kgt",
  "key29": "5c6QEzAVNe2nUqE2xfsZmRuqk3XvjMBG4HBz4njCiPLU78FWUZpTRK2Brv7FRG9nGBVf5HhGU18oMoc9edMGQT8e",
  "key30": "2bsfQw9FzuPUedLjVVXgnG3okDs818afycZDgwQE8FXRbit8pw5QqupQyofaWnktuD4eeyDGL12f4iSNEJhD5Qod",
  "key31": "XEQh8gZwBnAcSCxTTy3gUfRviJgtc3j3PFFrHdUgafZDHBLRkGfchcrzpsT8qDNopfMigqfHXHFP6TkNNY5Maau",
  "key32": "2jiidt9tJpEeSLpnGgHrYYwsgGFt3vwzrBrSZAqZ22rSmbPApYgUEi7ML4L6WFfnJcdMQwkLLqeGCDuJNiuxr2Cj",
  "key33": "3sFwANkqE4kxMtrAP5PxnPV4fKV8bLKs9jJNvAGmrmCbvEFAK9o8WnLGUyLvTU8sgt3FHx3it1n6RnJAj8Jmf9Q7",
  "key34": "3d18fLs1w4XTAWaUrVHRo1hytA6SuvQ4JoKZ3UQUBryWFAZX2MnNxe5ooZPLEmbUpNBf5XeHsG1BCW5oudLHoAkN",
  "key35": "42W7k6trfddaGRSjSb3un2RB2DJXKhn4pLfVUC6EA2vEnYFhNzmN1quDuvkU73pEo9nqJ719CS1DnQcxyC3fd1Rj",
  "key36": "5K5Lnf8qM7EHMavxLHq1B7CpiyF82YZejmUaAPqepAHnoWgQPfiiUetgzz3zx9JCkqipxEn8ujJbVAtG8dYQxw8i",
  "key37": "jDyiHwNK6NTRkDF7wHj7fpxHjteKt4G9ZHVX5RLMagZL6KqDAhn9PWnELfTnudTimPscigxtvqZ7kW7LoTs9KLf",
  "key38": "2PvKzKRwCtuWwD8R8TjDNzw8HiYnMX2by7NscHQgaax8KHhSRebai3reuehFGmqE5aoUMRfEB93bEWYjnuTRWRAD",
  "key39": "2KNnyGtouRoXi3KoHH8W5k3xHgDyW9BtZhf32yu2bGn9HxUMRwkdxmpCVBJQLoFnT93hovMNHxJ2ijfgHjdBiG1m",
  "key40": "5MPZ245PTt8iMLhqr2n6m1XD1UjjzvLHqw76V875hztF6GhUoKHsnJJLVbXueHwwyK5DJxHaafqQyUhZomKgQS2C",
  "key41": "4A6WvEjk2CtbiJGqXNDhSzHLLLAmcspVTfWw8dUWYi8NBkjk9rvq648HMp6DoTPhg6jiUUPPJwmpVKtJ7nd3egRd",
  "key42": "4DaCkAZXfmHwwz2duHWzNHz7fCLDWb9JNX8dxHsVm2onKRbJ6ucS4YW2YYRDJWroynavhpNuFWxbWrkftECudFPg",
  "key43": "3xLcev9xXvn16mTcmjpsuVY88iaVpfoEDdEzBACY3KFSdHMHnDeqNfsSw9JbM5EE2d7gifvyDQaRHSV45Dg3VSNV",
  "key44": "WmMx52atKRBn6Au1SXBcKKZPYAzFtFzWkiQBvwSL4QsJemDJHiQAHxm3NJk3GqpY4BAjqf5Qya1vwMthqFokR5q"
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
