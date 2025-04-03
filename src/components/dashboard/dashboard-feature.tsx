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
    "47ujZ8uh197ZjjTUwTJD7UcrLa1VYyuWgh3nHRwiuULZ9yfrov3eBxd3Vm71LnrYBwcMYXjBEsw1atKK5piZu9wj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NWrqeqk1VwH4ikg5riuQLH9J6p5v2NLLiRBgRxQQ15i8weqD9hFAnpafie4qkm9eH5GKYVF4KkgGthde4pKGQRD",
  "key1": "5eQxYAuYDRafqw4f2bH1dRXQyPdnW8FsAXBWBmWDRdQ6vAhLQYE7iVbUDV7WRkv4QWo2CtgqM975qHZvcdxDMvnd",
  "key2": "32ep3y4MbMjawCcocX5NX3dFPyUJuLLbVXQGMEwHSvmFuav1BP2av184R86Ye2qZ8kBLWWcs7mtMjvbnTDoXnSoz",
  "key3": "5PHNVeUt5JGZ5Y9BYua9yVCvDUpbqjUMfasmtYLd7uscD9feD9mebXfpgV1iMCgGzNtpvUn4iwhR65f4w6aK4Ums",
  "key4": "2n1mPuPfghqTxia3XgsdCu1agJAyPWZkz1fkGSZjdViyKwXc4Y1jo5yBbdkw8tcVKnyeXr4fDoAWCnDttERv8yyM",
  "key5": "63GpCWStk1cz4nAEvaCiZQcYBh4pjZAwKS1hkm8i5R8jAQCPMZcVswUByW8YousLDQShSyWPJomTiGzMyQ7DCA3a",
  "key6": "2JTjVZmu7ZcB7jwKUnc3VYBwyrrpLSSvG2j4GLXQaBb4ZeGf4j6wXgruoHP4oLPLsMfH6XVK9qZnaixbn6is39Uv",
  "key7": "2MacUUgWkRvdFECs4FHWCVrjLXvDCegb9WhdZtD6kJSmmvipEU1FQ3oUz4vTHiBNM8RiCFHiV27rcxZzTM3wTxoF",
  "key8": "6cj8RbNdLvZuKJeNgV4ucmyHwc1RSAsdoepojmKYrYu4kQq8iQ1Jrw3x965JbT2H6mUBZWn36mE255Pi9jQAukW",
  "key9": "3QaqFkrP6HY4jrRgHfmzUyEJVAGRvdDymXrTWGRCUgbty4fXsgsK1ccu6E2Kdts42i8jQNwYRXdoGfR9biTdty64",
  "key10": "nk2AQkqKfYm1FKRWFVKSTz3BY5Q7ha2fVzgN8weC49mzH1H6AvAXqtgaZLZRWwsmkhLnoA6Cgzujw5J2787BSNi",
  "key11": "4mDx3QzkQSAW8PqujvNFcx69fovgRta7Gqb7M8CpqsNtu8DknuYcZN6AYu1cXkYmjHqSsmibLfNiEcXRVStYbDsC",
  "key12": "2yU22waQMXwaC2WsmVHbQohk9vBmqgPAFNkhqeY3TaWYbzSW15PUiqHnuGbSa4zcQiZbRb5H7J7JNVKhcr91a3RK",
  "key13": "NZFs7bt7KUn23NmsKjksRhVazbnT4B1jjvDMdY41n9UByquPYGoL27xhxZXqtW8zRSiL3MNbYykndupb4X4NifX",
  "key14": "syY497peKV7XDcgYR7mTkhwPKdPBgsxBDQAc7vQFFuj6BdfVaM5v2Q93e6i6Js3iqGVGxFSxL6Ut2wha3iakZFi",
  "key15": "2Xj2LZKSjjFZ3n3f9WLyF4G5uRudujKVfb2N12vVjnRQMWuq5JrCssVru5aWstx16NABo7GHpcSb8ohgwUGqmvsZ",
  "key16": "2HC6Na6cHHp3HeoEeScoZdu1cyVaUn4cX56E9h8PrhnZ9LxXtxAxkxxVz4HsndSaWnVn8xjdKwWj1Comtpk72nCf",
  "key17": "3ZHYQcw2bXzubE9PB5j2ZA3mReLeMLJS4G5hANkDAjt7EZuhg1rCZ4hzj37jdjFHVVjWyfbYfR1UsDDuvTaETFYt",
  "key18": "2pJpS8Hv2t5BHdrkqTizjTSJbUVTG3sMiaJPUwjkpXkUX5PPbqtq8oWn3iYcFE7TndU5hVxXhsUF5JZpPpb5nxRW",
  "key19": "5WGSLXVETJT4WT3UXK2YfJDY4LmqFhdaSAyVrHFcjzwWW9CZvTZ5no4VRVBAUoWByDHoneeZHz49nU187YYYBSAe",
  "key20": "4BccCdggBa7ukpLZ6pwYDuvb7t6SAUQvXs4N7paa4DaUXcqkHt66U8oUkeKJbXG3UjqakNfBWBPwix1ZL4YCqn9j",
  "key21": "5FgwidUdJne8aaumr6gVDKApHrQTT223deuCboRu5TkXSejEAHBpxmJYLSfF6tZ6Z3uYhyXe8H1KRWE46VHadGo6",
  "key22": "2U17bRdp3WFeHrn7vgK66cnR22gCe92HUj1hmskzYkBkjqZj3xoxeL33uLaTUHLZUECk6FRhpQRup64c8BB32Hj2",
  "key23": "3muEkHNGUThMYnfsrrqV4dtPWDh9iwc4krCGLWmUVrcRPLXm7S685jNpHGYhdU4G6fHLHHj566dnHFJa3LP4uN7S",
  "key24": "Bw5Bib2Lt3jDSSkLywHXgnSx6a1zguU9MKVsNb3f87D9S4JGJA99egScH8UxSYa4R55tT4i5bmx5TeLJ4dyXVeR",
  "key25": "4mrsXitBgcgZjbg5SUa3grtgW4g1pDJEEn9ZiWuaVhuQZmdjrw77tfeyGtMGtw6zLBLcQ1tn1feffdYcpggGaZzn",
  "key26": "44D285fPXRbGwSe2CTTj5e8mxsxzcDejrC17pCTPtB2C8rgoqNBApwuPxF9fStUoBFwraqkx62DPEn4BFQPCbCrP",
  "key27": "39bNEJZSFBYHn2JVAwuyCrqWosLGvmk2iEyFGt7wQjxvtaAPi9zoiKDt7rn1ckjHoxKHuohvCeCeopmV9oMHZjZY",
  "key28": "2EfxhWcniekJuHBJ4TtPTBYYdctHpM7LfLcHViWv6uCG2V9N6vxmZbDTBuepegyj7Ajm1R3nprYrYZhoxnMjWJkK",
  "key29": "4N2rpZYsNBVyDhtVpA3kT9XcbnGfzfq9Rm71Hi6hPEvZYgct2SxvUpTvGeKwELK7wKrXS8dPbC318dHmW8jSETSn",
  "key30": "2DesDAjfkX3ZSJaGiv71daQyC124vtUf8JBim9B8n2PgLvHkXoK5dfANdpNNktCyGvyh1uET7pKbepW81iNVsKcF",
  "key31": "qwpi6DVvyXBHxFQQgpyv4iZ8MQy8SirJa2HDstBP9vEJbLKcscv5nbw2VRFRz4FFFABwroFKQuJuPytTSFvQuiR",
  "key32": "4dZzMhTN2Dp3nkFK7pP45SoWcunLBKE25T3zyC5CrBKZCdqjjuiEAQVvhBjziCfsLb72CAHQebd47NPTDTZZhGac",
  "key33": "3scEFafmeQsWwp6DrvjNNtWNLbFqGMpxZmsFA7174wWxkHPEKmS6LuEEQDeSrx21e5A2jJUTJsmaq493y6ehihm5",
  "key34": "4bYH1dXu9Y3rGyg6vDo7puKVG6iKbrMgxZFSvUCPKT2P8hutm4YKwQAX3PyMy8qq82NFXAmgMMMhpt83xAkgkBV9",
  "key35": "4r4Ea6Y7C5ihbCrXbyEeMPsgK9pN61qdtaRyKEBdoVZvg52gerPX2aiVtcFYugAMhYm4WSNjsVrbRUBsqk7Nw8eB",
  "key36": "4TGW3kdKcWToDy7dPLwmkCzMaseaCvzCC2jRc8MqFYJmmXxEiANpTjrRSnwyLn2pJG9dCkkenHtTMgZtBktZSCqB",
  "key37": "5x8ex7xuh7su688reHXbnamRzo1L3bWoLqPi9BHLc2HXmoyaJwFarXtW29sNYBjqAe35jaeijXw7kQNdzT6fQDC6",
  "key38": "4NHvj5gFnG3ZzNnNhrJoyjEyo2Ux7XH8WzAFiRgM4VZUwtf1hsFfRPxYFSdsUR5msMh9meqHNAxJn12j71uPJeve"
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
