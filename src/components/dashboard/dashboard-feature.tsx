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
    "ct4dLDguj6XhdhVX8EdWPSuebZmBgcRSvhgMT4cJqgB2exZRzX5x7TwB34yoaPjryEULSV7KjKwHpRNnn2NsK5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44pGWdJEeHFtQ2fREwjbdeZgSp7rcL1nz9XqWeVnSvvxAjqbSVn1PBXmnZmX1QidYesc5hUeBLqRAbo1yykAudHv",
  "key1": "66AaHfv3dkwtJxPnUGawAoFCMHmJ2xCgS31naGFw73tzqnKP5ZxC3w7h32ZJ5SKPWDW2a8Uhd1ws6hKwBAjn7wDn",
  "key2": "3yS8AVicDcM28XcDaF3Z1tPZQPYt8xg8SeuCyo5xdoKezMkPSEdTbvdnabUR1JngNqLbWrEvKTgcp9y6P8CNwd1u",
  "key3": "A1bKDPWzFUTB3yM63bG2SKcCpbHHVRQqjWfBp9EUVheLhApKJWzdPCxWJa8UzYiEeJbu57WzLudo5b9Ln6gtSL1",
  "key4": "3MVnaEpLM1rgxgwTgu3zhmZYnpmWKxewPVLTSUars2JknjoqDhmX2xdEjovsnwYHuidR6dhdkhJ3ihSzvQMnXVpp",
  "key5": "DmeMfYL7mZC1CDpRgwdwqPx5m4VM9oDND8Yuh7LbvLAP1nuJWVsQVHuHQMN9nQTX4apymuwZDzpsb4K6KDYcqkR",
  "key6": "3mxAUyLnnecLEbRtHAMTHSuetmA1PMCgZceRcesdDfdqKoFszRuRtn77VN936r1hs8jncFgE9GRRKaw8t7hPCbNm",
  "key7": "5JnjtwizxhqsQGLdo8VRUujD9TaU18dH495aFf8JLmtXTUQ26s2Vfj2SJSqgqQVzi8sLdYxPVtN29JowdQRzG5M8",
  "key8": "2kagNiVPxe5x9J2cCvBofXikS1RFXsP9DhE5prLCmVaFScRdyXPP8J1xqjjjsNnSQJyVvUNrYdavygZEfMwXFRt2",
  "key9": "2cAtUTzJ5EQu4ijy16Se7Mtr13DntHVWywsFdVZH6SQdgMVZiQV2N7oKvJG4WAkpGLDbZqfBi44kMmHYSd6MqP85",
  "key10": "2MJDzhrr6nTJS1yWrd5gywSL9RCc1PUXyim2rC6Df6AtQe4mCNMHBdxtxvdvFFvTuneXrr4MaJzhHbjEpkNLhyeL",
  "key11": "3a7M7uY6vZXeh9KTRafrNnGUaSDNhy8qRHcyyjXi6Vtc19USw3tPHyj25ySwiMeKpQCrSVjCZFPr9ZJAZSedogwW",
  "key12": "2CFZtcvsoTGjMN8KGoKfyxqYBESLfctUUwTy31QG5KykkTmvHbiynf1uxB1jiVDuKDoh91qZVU9vJktTAxXQkFr2",
  "key13": "5XMMjr33tm7GwzzvYj8rBHitdDnotc1Q7bwzUKtgcVxPVhKqA1iJHHVX4afCCUveWrRkmtH28HaUcENBiPKPYoHS",
  "key14": "2GkhNZXnYS3UGEfMY9MwSq9XMNwGEtYCSLEU5u23yYA5joXBz5XT2Dou11hmoPx8oi5XXsGGA5eCNbHmJ88oiY6V",
  "key15": "2HMHh3Vxj5uDTLdnL4foSjHo6eftb1zJvmi2H6dLzLHgTRo1QwA1Ljv2pUD5hhPWsMgSX2ph4hB1sMszW9Nprmk3",
  "key16": "Z9VvV5VHsMFAK2dpargv5c71xtneAotZvKVzfWLuJpH1tmERpeFiok4SGchkmnW5B8ck2pDSWpygnjch9ozLC4F",
  "key17": "2mXc5JzzxJxjv862XscfVYTNPiTpzzhKZerMWreUn7LzDSARyiSCDhqfPbbYR8GDpviviAaiYdrTdTu1cM9CtZmX",
  "key18": "Xfrbjtv4B6zduj1HARvDExLQgmnBkY6TWhWMoy7yPL6VcnimVDYTDSvrTpt7jxdiJcHfVebqTZWVhP2Nf1pTBrT",
  "key19": "32QbKGE9mwjChLcLEz1RByasvuADndjce6tdrbApAqB25utdwo3AxbYy14SSqVLFn2MQcvrhRua5TVsJtcJEBXFS",
  "key20": "5SQXhtnt9fBHcYFLRRb553UJipAfcT2x9pDy4K9a3KXrJTDNjddman9g99PM7PkHKqhpiDRiaSHPki2AEhUVXV8K",
  "key21": "2mC14KaSjExe7EW9EY19p8Bu6UgFJ5H5daqodAT55iJ6AAfeUciN5UJfNTT7Y6sTr6isjGdRSgnUbZDwCnvtnTuL",
  "key22": "59FBEQf4dULwMR7GHVgux4gmYXVmbwcNeyaG35iGYK99PvY9GgEgxGbfG1ahx6wV9spYhdFxHz8b74RuTfRCGZBM",
  "key23": "3UP15Nb5DPKnQUaPMMupuczonW3z5bzKF9twvJBWuw5XAbGxJV7PrusoHFzkna86skR7RtvxJyeVX8g5mwKJaUvf",
  "key24": "5FqsN4KxCFhJXK8cSC4ovjKsCvTscZM1kGnUKxM6RRvabXeE5gMqyg74x5Pm8P2tdyZDrj8USvGFBZe85PQUUUtd",
  "key25": "4a7Hf7QQYwbeuvMqb4CvRnKtWDbrh2rWZAUpHMomkPtKidsmZFUf1nFkqbjztbLwcEw6tgvH6ixpowAJMGyGceAP",
  "key26": "2NizTsBVRG5KANUNh1D7c9NLMqQFZSpcKFV6QP3BKfkqJsr3GrRqy6vqDFi1XT6SLN9LZFytvAu2aZRVwNgPvL8D",
  "key27": "3sB7Mztcjwouw3poAU3Y7ZJ8dbtgReEiffXpDHL4Twu7EjbTtMH1HW2wLN5KZdkpekVzYmtFMK7MQya16sipqeb5",
  "key28": "BH7DvU2X62mqyVQgZuvi9ohTfS4wtd7H5ac1uCk2Z241orWSdyjnnPseZtNyEt6uuQAi72nXedQemWxwZR8JsVz",
  "key29": "EjfqkW46cKDhgM5LKFMpGQCU8Ag4RpM6T5wZKzR4yDiFaYmy4CR76MmF5zhoNEvFfMoKJdqJE3StL3WUxjRgPmn",
  "key30": "35EimHVFWqaJDYsWUdQ1UPseMA6adDePgmjaR7hfDJmN87QH9ZeiwKV9bmxiKHHDe7jT4k1gVHzQQnZvodyjXmwB",
  "key31": "341Q6KXtNSrLn1gFe466r7q2Kb2CNaf6q9pWpoDhafn1mWLTmBAXZG1vs7ijYdFHHar236GRbdwitKsCUw4grfTu",
  "key32": "4iDNtrbKzSBdmCohRTqrUUB9fEYhaTCuZ3qjbnszWXaa8CXXwCWn1vRb3KGr6B7RfZ6d6VQKEkg55dqkCiTWGsWA",
  "key33": "22cmMFQMpiY6B9KbzVbzEaTSy9MP2hmd7KeG7UoNx3sfGb3EX1t1Svb3xnAvjfMbL8mZNK9QXqUbsKm4Uo77EpEW",
  "key34": "iiA3XdGw9GB6oGv94m1iw2trE3zVmtzAHNffNGziFvmoYja8rqoTfk2VeGUvYCK6XR7hrTq5bSVT5Ev9qCpY3jL",
  "key35": "32Z9e6fF57zE4LvE8SsGDDMcoogg4iunxNwvjx9GD36B17bjXpZG2Yj1271Xxvt9JAmaZa9T1Nu6dpoVHPqsEzFj",
  "key36": "4UpBdbagesuf82fAox3JQhHa25ZeBcUvf3mgvTq7P87kM5F6oJMCKSkKaxjp6UVTkhWV6tTEkZmJ8DhJoeSxNkq1",
  "key37": "31FeNxnh6Kwt8g8VKdmj4jJsuQRJaBbejmRYkqYLSMN97BChkdMeJtV7Dn3ij5MgX4qKNgcWAAmkBmxsZg3GynPN",
  "key38": "4zsXmkePfMLYnw59VS2kz9Hu1Zko95du9WWpBXWb55HNRxMFDkQ4go1shNWyrdUq71UbofjKJhPkLFZsmLKHEXxD",
  "key39": "4wWTbTdAGyj15EWnEyBjMZPaL1JtM7oji4cMeVuVaBhJywXjX2SXUUEpz9rF2mPntcaZbzNATQqfdDm7ngPoHxiC",
  "key40": "3WYYzLaL8ftW48hZLhk3rsVuxWJ2rvsKXCx8Bn1BTyFLknejsJbQsBUNGkDMpnHPwHKfZrYBrFKxjbkG22nrFVb5"
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
