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
    "44y3UmFR1S4Zy4Fi1bnrgjURd4RNrq64XGn2GkbTtpbcqFgk2YJkLo6PkgJHtALVqKmPFWsCHtnAVShcBaeL1f2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yGAYQtPCmA5sFnpmB9wktke8xjXB1wbk3ZzE3EjcsMEcjmfLuvv8eHjUr9vUjeUfaVZfNZVD1JdFYAyy6vTwNUC",
  "key1": "b2F4UKfCMmzPUaGarnw6rivsmZUCxPhvogwY53w7gwKkdNNqsspqkKJmWsm2TaeV7ZtxkWydHwQ7h7MxkSuhabg",
  "key2": "5Nhpdx4pTMy9rzQP8FGL9ai5XPjWiAfXUii6yeVEkN8rr25vwi4QX8qMafE8RfR7CEgKfv9MBDiDfYqFnmXYDFxT",
  "key3": "3HrVq9zm8kikEENWUrhrv6yeyseBGEPFytqZkCHLEmhkJphLEsw5ru1ZVbexBRXtZYwgHMU9tZsJyZGZU5sFdxBv",
  "key4": "5qfjvELci3MShf8WAUwRLz3km2BHBL7Uwm4SwAx9U8ZiEcRmsMgq6NSdyZi8JYWn3CY8B9cT9Px6PvCFU3F4V6t4",
  "key5": "2HCGt7oK4S6vB3VutDD8GZV4Qpa6MCHgFyea9kjnLwUMWHq6KZk2RbRrTVpiKn8NiyLRTrHecceD9614E7FVth4H",
  "key6": "4JzYMZeVygrtaMycLxkDVKthsrnosnwYsXF939dZHFEHCMQmZt8LCHjajxTrutZbEifz7oLTTrCh1j1SrweveTxs",
  "key7": "5bQ1rta1GdwQ88ZjcDbnL1zM5gvBhJatNXFiLQH34kKfvY1pEt6RRhy771RgivVrYG4Dwj8DvpTvY3iCEQK549bD",
  "key8": "5BvcoiBMrYxPTG9H7npgbJmnndorbmkA8k1TQXrMPbxpgpwmaDYNu2YT9qJZ8DAjzas5u6qmrWFmKPJrEKX9dJ4x",
  "key9": "2qeu7Z9xzxaC7bt6VySqs1fWtB2fB7ocn8KWzabzkYNc7UnGFvpMJK1PqdsaLHT5NxySEbd3bAnm8Ubm7VXSzvi5",
  "key10": "3dnpHjzYwLSGzuG49KEMceKtv1aTcawJUhcsyya1hbGxF2Jm3LHsVQnLwcZm2fa2Can1YJRJeaAbU75JCyFvoHfV",
  "key11": "3ya5GpaG5SM33x6YqsyT85jLNg1AmZNzEFes4X83siLtCowEETGDUXyczrGA5iqT7fQ6PbPnwKJDrPqUYXQZNzf",
  "key12": "3MbDvjx4qYN9CGzd5ndnJzXWTRSPiHikr6W82RXHhVVEe95iU6fN9YPfEFu4y8emv3C8NmqYznK6hHFEfnjgt2Vx",
  "key13": "eMhmzrPr8wYGjTeMSVR6YwTZMPAYTv7iG77e9uZb3J9zHBtoAB2Ld2mLZphb2MpenKn5Wzz8pDQggk25U17Kt5X",
  "key14": "2K4YohjEDfwh8LPCast79XitHAY3tBhf1TWmG3R7nEQTW7tUbg8kKENxxN9g26PBbYZBwgkbFup8YrKX7wpdJPgd",
  "key15": "5XBEsj9s6F7jLqmEEX9XuKAWWEUQb5zq4VW7Npa7hwPhZk4hU8T86X74G7E4z65WtvT4Xz44zjhhJtpv344kk3mW",
  "key16": "45XVJjY8m6HqogiZq45qg6h4xBR6oWwi6X9cxP9LsDCiS9P7XVefJikPrN5aR96Yv1gQc1ji3WHgtXJq4qNbMHoc",
  "key17": "5m5jVsyXy5JyfoGoDhoQggusiWV2v6iVwKd3eNWuehvjRWenH6gcGArvRHUiqqzJftyif432oAXdycX9PPJM4eQ",
  "key18": "5UgVh7aTJcTAxrdB1TBGktD86sA6Zvufm8cwzpadUEES2AHPinP7G8c7VbHHNEFj8ygJjsky4kqtSdtqCcvSsFEY",
  "key19": "2f9xAPvrmGrGH3ddZCY2RZjtpv8AWEawmanHzPHjHF1as3CVYn7EkfR6qGs7iBLawPgMTeVi8rgRDrDpJfEcRsSz",
  "key20": "3bnFPg8LFQpG5Vyfxuug1K7e5ranatasQPf7JFdtGztXvxQFJnp57mFmvH937KrYSuJdtmix7SU2vhjYv1348arA",
  "key21": "36gwKqRtwGL7VFG8T7SvfXqmoAfyefLdDF4ERdEiHHzNEWS2YwbmJP2LeCVvTiVohcLBz3jaqQ4BVBYpBm8pgc6",
  "key22": "82jPwHB77r4EH1PHgrr8z6j67tF7W98n1Vd1VMedK4E8WtfcpoQdzzU5RFv6BSwtNs2qkWusjgAi9omBePXzfcN",
  "key23": "RepPKrGCYWi9FyNhGPuspFwg537ohwioYY9W4JZCwwL31LNrFBeSK1qQBpoA2R148tLUjqjunf1yxmUrcbwMLGt",
  "key24": "5AScWEtx865rPvFCi94Xwn5AonqZsdW92cJMtym62SFw4d5L9Wai5FLZ5NuqVh2DPPQmrkZUQ9U4aEgyzVmGdfVo",
  "key25": "33HEZnPhGoMftFRQhoRghTVTeTydfP4hf2QUApdGQRX6aiMyVpaJLp3dDjTLWeurEAmfCLCs69v55L5HF1opa5Ja",
  "key26": "6BXgQuFto9oH1NhgURHC4nudi87RE5QoLq6QZMvXy4Qs44wh3tR2EnGs9nqhPK3cwEnbnAYSzvGv1k5DHfPsK9T",
  "key27": "4U8MEaqgyASJthbWLdpAj9JSGTGCZL89eQggfdyAfcZysVk38QDTpuHtGDStDDJ86kDHQynz2SghGEeN92Yjw9Yd",
  "key28": "5fDewBTnfFLPF3pgEZCbWGSEHGgjrRLjzp8BXZfxap6tQQqtVS2vjC26WCEoR3FsZzTFH4mgA7unRFJJrgmgN17f",
  "key29": "3m7Qv3GoVB1nBojznxrMptQFz6bQN1WwmabmzNLjTATr98CUwdP8emQkCCd3TM1mW1SRESfK6D8Np24nsjhNs8Uu",
  "key30": "9HtVfYfFu1vWEH4dRaYGpvpxjHRBAEpmoRT2ECibRqferAqeZ1UX5oKBtJ8J3TpTVdCLPTFbPdun1zHS1JtJ48J",
  "key31": "3FsoCaQEjK7cKWmmMmhEaf4ax6Yi9CSUY9Rp7EjHTGMNTWJsvNbcMg1eJ3QvUfaK2Bgy6ESedbqoR8xWbA1XTdUz",
  "key32": "4XKtdWD4whaRtfSxPzCX284ASWLy5LZuu9fYwfHGxTJ1tqaKtk9rnBoTvWP8TZYEXB7z6BVUisLk29c6m5hiM4MW",
  "key33": "wT2qaCXynHtzf8XKkNKFzkpetT88zH6sFLQJ6xywHYLxSUDEr21orGaKcm5XCEuqysh2tLjXt4CM32NYvvjqVmB",
  "key34": "21Mk54Rmq7THFoMHhWnfaXwPZRyYSsbGiYf8ZsDFpFEbdTMaEHkd1m8Gm3NNkoHkzScqNoBqG3RVR1vrQHzz8W5H",
  "key35": "2zNtC8ZtVEkT7TeUgP6xhjXDcPF8XvDPH8V1uyjRkFQTH5kABQTAsjsBSAs9iXsKYg8jsJvBn46RLixXgsbzvapT",
  "key36": "4LUXdkAasDEm45CZNxTohwZr9aF9Vndtisd9riNoBJ2Hi6dCbocnZ6gcrC1LRKdWGSjutxVxckHCxLyUUcz3xgR",
  "key37": "3NbJjKrTBRLTdeWkuS4N5QP1daquSmqVQJ9C9aicGqLbWjNFrt6s8zC6a5djYweZFGoVGoySrsHJnex3o3sLoDtq",
  "key38": "3DMTrKxF5vWC2VTCSd2ReXr14eAvKMBu4wAhSnd88PXAGfmdRj3chgAD6jafot3rNmFnEhesmKiJcHPGvN3HZuKC",
  "key39": "29tYWQttc9KA2zsapCoiSKg5KGWDNNGEQ5eno5wK9Fq9BZC2yhPehKFXY32sELCWSuaW3RN2trEJL1ABJkB2VMoV",
  "key40": "fs79Kkw1zzg1Lunoq4oDsa5ar1tMdz6upYhAL7hw1HpJm3XvTBC943g4WssH7RXhh5D1UABUnU9qgN1dXtwEoNK",
  "key41": "zqfq9HuB3ZV59gd8L3WgFX98bjm1s5dM2ZpkSoQEwDD18VGiam3Pm6dtkLCbqy3bJjycZ3F4dGEbjJRox5SrG5K",
  "key42": "DcTo5KGpYHEkuFkZNVNJSPApuViucFuXAKeG3tG7g1yozxUgodQQm6wgKUMHjWKbtpoqNJRHm1ErrpvEMw98U2K",
  "key43": "324UR6Ysa51acjRRCJTiqH7X8xuPakYE1pnCiZuhq82sV5bWZadN7WhbWwB1bnH4dNsZQqoWcET4ZdvYYmVrqJuX"
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
