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
    "3WSdFC5J9kyVfMVNh59c6xUeQ1ANzRSmDcxVYf3oSuz6switxkH9wwRg9ZB8rL82f7iNMfRV42dXwhE7hgNQLwAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MvmGg1Sx8heWBU7LQWB7EfkEKjNtmtCCmk3gUbtCps9r4u7PGNwbeHddkeRVB9JSTGbWy6X5YAyqGgRoNLviPe2",
  "key1": "468edSHsq34nMLva7mN1B7oSjVd9ni61n4R8PJ4pAzH98qu5UqGeyRMU75sJqiwWuQS8ivt4eApfVpaMSLvuVGvw",
  "key2": "3VasGkcQZ4VNRbjifvCmKA7cduJzDW2hWv2CrpzCKdvidyCKk8K7LXQTHSP1xogbdwbRdHdWeW9gUKyxivrEMUS4",
  "key3": "pDufJLmcyesRRXoua956bNnKhGDaCthaZN7zrJkjnY1zteHaMWyxdSE4s92GYwgd7zTaXqkg3WAjthN8ffbcwGG",
  "key4": "5PJ9HXj6XFTBDGT8K8rmTQKDrTFMAgU2PgVXGhtZZaPTjjprAVdFLrfmE9ZptSX2jyRAzyiX67mdeMjxVbWrEqJD",
  "key5": "48NpdysgfQ4GaUj4qfH28mHKoZNsWsNNTSyEnvgkUiR3NDjf6SGPevp3SHQ2914gRpt48bxm1PSgzGoqWnGj6qta",
  "key6": "3hzswrm1fLVHzjFjXFsaDfrpXAzFJSyGMaGk5yQVYNAnRYssb6MdUiGEX6jy7FSdo8fT5ZxwV6QR83aQoyPw8Xje",
  "key7": "3N9unUCTHnvGX8CRjtVoG2LB3iQboSWv4a4vgsTNarDz1fN4KCLkGJSnwCfk8sf5vrfRB6bnzNgBM6JR6JDxzjK2",
  "key8": "FgP9k8WLoK9zJefxiHmvcgyinsTQdTi7poDxmPNhmNq4T14k9WcXhnm2xmJSJeyJ3nRwmnLv8sYwJ99qHkLEvea",
  "key9": "3RzP37sKgon46S3AYSFinULGh62xZKp8zAEtrhp1tzNoddZ7JwjfSRtEa7fRPXpdnBrFJSA9WQtgrLL4YnyLXwoa",
  "key10": "3KBqWtNDCuFKona9AWq1yDAKmqqrwzTcjJsFno21LkBijsaKszvtJELqkJxH9yqn6XwwgZyw1CGYL3oM6oYQsiBN",
  "key11": "Xh6qgR8fpzuEB97ZDrbvCaJccCv9RVyqamyVbahoPkzfSbZJqS3HiWSUgYiXDfsPtD3kc6Z9i3EY1VVVRUUBBR9",
  "key12": "35EKqoc25YcEwKqUBntywcASQes14j6KaY3J7zmhbA81xS5u1ybr1tt7C1sEroXHt6UTVFzRp833UbQ2DgWrcCHT",
  "key13": "4x9LBjGoGcLpXz77T7pPQe7t9eNwYD6HNo5g8CTVMiLX2726WqRagLMkaMvAE16z2uErkyiuoHJyghAp91XyPom3",
  "key14": "jadd4kZ4LXgxx2VvBTU1HyMmKTpLRFaKjCydqEV2UdW5HgsYEEdvuB8ncrDPzGk7SeoMS8qSYuv3GZRBzk84Nwt",
  "key15": "3ZpMrRU2N73P2pGVVbJX52D2ybYoBHRW37J2ddaG1QAZ2U5BF6YNZYf6yNTgoCq9DChh7XHMv2sRZbZi1pQNXnqV",
  "key16": "5grqmSJkLg9DEgimxqkCc8Xj5M3ddBgQ72GXTDGcJX9TnDNvL372jQkoAC1ZhaxDPBDCf3rqEiDD97PyrSvGaQHs",
  "key17": "kbfFxiJahxuT3aBsvRbKw6MveyunyaxcvxGQAeRaHEcxVszvoSjzpnHEsUJZpSmj4oSp6sSieKvxetXcRuUuCSk",
  "key18": "2Gb1WcHwksJoUv7N4c2gPNSQaGxErZmFR88peqdnt2KiEfDrdLmPpGBw7S1WfDFT3kPU7awabNcShcTZ5p88LJak",
  "key19": "2QWDJxUM2SzuGvFnyU9F5qJRJWaS444JRdFrtEMmxA77D69nMcmChUvw1CvVEn8GcRga3bYX4DbBd9JmeWrqBK2Q",
  "key20": "5tFo9HqrKjQG79G7vxLH1Zq9bJ8cpd2agrY9YJzX2sGAp1WmabSnxfeXjDz7YicnkwseKfghMxMVD9JF1LE28ejM",
  "key21": "aMa58Nt19crkCsWfZiXmazv2QgQCgPFG5ncd2yr2JhLXkNwE8ckSy1fTePD4HhTXgtZM6RjKA12FuPYRtXvbW1P",
  "key22": "4EQ6r3CHs81gz7Czsi41ehFiVJB8kpuFfdFoFXDtFVFM9nQinFcohYTjFQV1ofhSQRh16aLz7SZL8edEBn7KWKpt",
  "key23": "4rc4mQCBrXVF7k6JVNmMSsfUsVuiyrN5Df3t22qhGUTVYYkPTPQpsQy4MDVmzUFUqkE3BwLGY915tchiVZHidiPU",
  "key24": "4q2uJyhFxyxkzZAdU1BCnPnyXkhmnc2JuEbodJNEbiAzJ6L8SFiCFojTd1FbZxM3osshrG7uDAzs679YpPAz8vJ6",
  "key25": "4FX9it3WXjjxYTpESytMmthL41w8prypwiMcmGc1KNTBnLx1VXY6kEs39bCHJXBkN6KTh4yvj5MGSuAycbDS4vbq",
  "key26": "3E5UuFUSwWbUb8Da9pLBkbkHbTuXY272zCeFhwWGBsespaYXEL4G5kyoX2KTo7mUXm7jtbwqYLwvcEWNC4cB1PiA",
  "key27": "37c68jWwmn3WQxHBWa8c6Ys2qbV7Xcz8buCtKR9ZJxxy5DSEmzwqrEVdNpuZnw2Tc5rurtdHenTYNx9xKGZx7Qi9",
  "key28": "5ch4Mci8ki5foPBheY7Hq1HTB1Gixq2vZbniaceRREG4qpM1euKTLa55bJo9J6b15Migipjh9VoLBnfY8heQNKn",
  "key29": "3ex4hBx5Hado1VG5uHvF2wX6k7E3nzQtwoWxvm4eRzv7Yx9YM3QyMpwqNCzAFwKAvLcfp6GXog1TL9pXUwTGYabw",
  "key30": "4GR4AA46rMUM2sj6Cd97YzbhqwXKzMfz77C4sM59ABBo2tnFsDgRkfnWSe11XpXMN1JwHfndqg21boefwujU4aAX",
  "key31": "41HcnUiyFFVfkjUcARwnKb6yAg9K7ntFqQ3VJHB83pRxF5GAzWmDcUvRQe2YkVf4W8D33ifJkhQDGYgDg9rdojxM",
  "key32": "p6JPuVaEErLBPCikLBc6EAwNStebm9ZPmnsTuGJZcEsAfe8DZPJcF8TiMt7dzyA1g3m4vaSmFjCYUVQoeDwSAeh",
  "key33": "4QFbGHs3HCvXDSwBzVZwenwY6nWBjbzWnWonU5EF252YQfn3Udt4URmzmBd14NMYv79xATHx2S37z4EBMWeoR72M",
  "key34": "2euwQnoKpbXMn3nmGdah8wYN8UvW51goUj8zCfGiUszoJhdtGaMrLbiLF65DpASzQ8nAPxibeRKnJmLwLQbiWJTk",
  "key35": "2NVVdZv9KCXk9Aa89uxzR2y2z5F7uKZ3Nk3vMUiArPd9ZJH94fBq6GMKvKv3WmaymoukcGu2V7Hde1px4139PEAr",
  "key36": "5Em3PAzoscTtpGEpE9fPm8635n9jPQ8refkJRVGtQ8QM7ZNiVa7etrPSFNAH4F65jmykNYp2JghwBcWcYvr76rSK"
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
