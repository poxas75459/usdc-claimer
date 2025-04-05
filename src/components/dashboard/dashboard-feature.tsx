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
    "5Kyi7Mv2GJXMQYFbAc6UFb5XeXugbjbK7QUxk73Wm4ojsvk6VrVYwagQMET7Er4ZP3MnEZuEaWY8vV9onQnu5ZWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PzefG8mzzmy5TbwB8Ngy847WS8RKXCee4v45Td7bi7PcFSVr7Wz7DbdyFeYWzNhaPdEz1R7agfSCLW1pYPeqCK3",
  "key1": "sGj7XEEa94VMpx78Au2a5SufmcFxAtv6hwSgh9CEGtmJu2ZUkmLvLw119qvC5AsHeKtrSNJEcLYnUM3Gk6drCnE",
  "key2": "3ZKEThTmnRiRPpYr4h7ygXk21U71uek3AttFzfj7ZJad7BukcJFRBbqTFzFcZavjfeiAoNCwG3ypKoD1xsJKbu2H",
  "key3": "5bm9NesCJGz76Vy5jTaesWfPwKekhs7SrHTcr4NV1PnbaTytn7oE3GZSbNrCg4qtFVRvf1uz8RrLhHyQ8AQVmhSJ",
  "key4": "H9c7kZXVjPsEJrbcDQBKc7pCecVSdAVmiQWLPxTwDTAjcsDwc1Wf1aMZ64opYPhuXK9oBGnbyMENAu2wwHgqDyw",
  "key5": "zTHqk39YZzbYR7iWSHaZSiwBg7ohs7oWxdvWBMTFKVhHxBA8yGLro6aHoLad7fiUqmBdSvLcTxRuYnQQmGQTGcr",
  "key6": "4a27jPaNKXrPagdK5WcztmLuYXGHbYGkwQ1CohKafNx12t9HmHxnhQjxaADT5Ang8PG6SMiZr2gD8acPWtN2tiyP",
  "key7": "2RijZLDDZd2nLiZksZXDJfHpzz8CfLnQZTZ8sjS7CQuiCuzMQjc7STxFXoFmF6eZuQd4N2mHZpumSLUPHWbJRN68",
  "key8": "mC9mfZrVjEfYPA2MqoeXMk5AMoDNjJCyQqNvXhXcv1eAzFudSqCrbEER1EP4doyXeavMrgpFmEpEyCfTF8CJv81",
  "key9": "2qAe8ZGNCoMgCe5ayBqTfrP56ci9xxYWrpVRVoBFNvtRBg1uFWtJ4XUQp2Jk9zPhP3eqWk6FN1uHq3EXNY7vQzGW",
  "key10": "25Tgng8TLHM2TUQgbDvv6uvMHuAf4Ek9CWyWQemBJJ86dv4wPuviz24eYisy9gyG9UcVPp9733pJYzUxmwRM1BxM",
  "key11": "KNbU3UtJ5AAno6TCDTerDyHXkzJc9t2kLysxy9CMWbn5exoBFLisNQaWBCqqvx7E2CfJtd5YAMmkNKDTBJU6nAW",
  "key12": "5TQFeN7JSLTKQuTuUvdp5tzUK2pP5v3p7jexJ6NRqQATK8qXZs6vfofUezVu1Upt7Nh3rvkHouFAzNcbsPstLAtT",
  "key13": "43boKiy6S7FPK2RNY9aS2g7tfZF49JJjp1LYYKC1dFzyB4zymR1HLbRjD9iP1LgG8bb84SvucNKnLMp4WTbWNJfD",
  "key14": "42m6muTtpAMfuf9CDhGv9w9oTjaHVSwjw2GardHKo8BDY1SXYdiuWo9d2fVxfZS6F1vrR76mtnFbQsqwWKWsgLVQ",
  "key15": "ycAyjQo4WtLuCprSiSPYvqSQDwNieJxmzouzF4fe5nnisHEEMGKBQZLYYJNSu8VkMSZQ6jirVu15eaytwtaw4k2",
  "key16": "4AE4c1vTnU467o3Uy82z8genCfMhL34e8V6px132kyAp42VqLimTwiRK8aMsZ5z6uMu6zodRFVvaAKmGQesmcE1d",
  "key17": "4mDZ1dHng7F5aLVKyM8AsiDJQ3jQuvT275Vfdf2W4ZMvPpdLhXT3fP9HZW2FrUV5P8HwSJyzU7M9p9y2z3E1hy93",
  "key18": "2JUATEsQ5wnZ2tiGZF49JMw5kYxRQSBB4jB2FVHoNrWkuA9zwYPktYFLnnoYUEDn9yzZUPYugMgzRC2Ff7oaYtwR",
  "key19": "5S43psVxxP92yjZdZwod1HaL6dwmoyyobhYTvY3bjdpXixDf7iq6Hfyoq89Riwb8KsYEmfkVbnFAtw5CGhSyrGyc",
  "key20": "3cz4QEfwhTduqraBhfJt848Z9z4c2j3sLhcbZVosCxmVmK9ULh4XpvLGzMHntcuQbb4QJPcfnan4NM3Yb7BPKktu",
  "key21": "2d458fXkhN8QXepmxnQG6fg1rkcYmVLenwqxZwqbHJJc938Q6o7CtANvSvoCGF7PNDkkm14k6EbnD5GctvCzf7zP",
  "key22": "2hoWZc221VRsmizJ7EKGNJLF2xEwH5TstHcu7VmXqxpJfLH4YqmssE98xkhPYvhtZPtGbH6wk7mP97oC94WpYoqn",
  "key23": "4DNsN5ph68SCTxYFdnTqmrRYdaQJ9ptYQVVso6urvBtUwpTQ6xYcpUCiw2gRpDdSRpBZ2LPkDRT3ZJscT81udrGt",
  "key24": "t1XeHbbPPzw6g2aEMnsq2xfxUSfbz64BkqP5Vru5Tpgf3g2oURer3xjrauB9jWjVoo86KJGDcc5w76y6Q9RRSp6",
  "key25": "3Hm9eTSxbLnZfadu9NrAdXH2twTn8TzBXevsPkLg3f7GbV12U9QbMhpYMXoDVoQKnrfjuLTzAhfUqJyShnoNcaLy",
  "key26": "uqTpPFNiaBzHoKVauKaratAhrTedjUWxcmemRmwCxKjpLRJk9s1xW18nve6e6sKCBLapWuLuEt8b8izX5PiwneF",
  "key27": "5BJfd4gsFRH5mH3hikkgiM7jjQaGRPRKUQ55cr5i6WDf8PgmwC7ZZsWCmES1e77vADG5WWGZK4NXM1WaSZDEAfpC",
  "key28": "3jpKLgndE5iSvDmoq8NGmUR3L2FgJFYS8JVaHr6cf6K38G8d8AxNDyAQBpzKkcwk2xjTCyFWoFeUg7jnJz1TnRhZ",
  "key29": "oY9SymeLh63WfztyvEac4vs9N5wB2ALBUpoFuFSrvZRgBiW77RSjjEwwQxwT5KrUpxsc2UW9Aw4bNpjyH8UiS8T",
  "key30": "JshJC31DfjSujvaX9SJdF6NXMcCvLnAFXvg9TwCEqoL3sr9VM8UfL5NpVHDy5WpS57xbQsaAR7xqcYvEykgP7qa"
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
