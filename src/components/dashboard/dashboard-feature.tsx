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
    "3zWGkQxG7RXNufihXtLuCxhNDU3oxb1tKi2EMoJwp7EkCqsGoTWjm2xPWsMRigbBCWKCiuVcbAnkmbucq5Upq5h7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28FRzmQhAXxWkuhW1jemPVAZhwcuHgPt9gmEFpKBiUCfdM8ZuVN7xKrjV9Kc4YgKBJhcyW8QXmN8biXXo2BouPAa",
  "key1": "2XAb3KZgFtFmbZj5c5xVAU5giBDssfajj5GTbPPyVupK3Z8ZAEQJYfV2FjHwJh9n6tESEgUwC32zk3JMiuM689tr",
  "key2": "5Axa21qYedUBK3GfmQgyZsTUrhu1CyURkrde2Gp53Ch6HKZZrRucVczoMJfZRsoz1Ffb82SLWXFRj9apHC3Gw4Li",
  "key3": "mztLnnHubgdBrAEAS6VBkqzHMFc5AXueqwLaMwyQ9sd6zMisvaWKEsBA3LhP9Yf3JY4Wimfu8qsESS5kBjKfZ8c",
  "key4": "5cha9a9rgErSragQ4HhAeuAMWaczaBcsx1UxGqhtpJM4tbNFeHuJeGfox8qHg9ZFfk8SyAFBhEDpeno18o1mCxnJ",
  "key5": "5o177phkBBjEpfWZrZM9cXKF4nBYoN46za7aBBM7ao5buJBdSCsDLsHHGhdxbagLje8S3tLUUHvq3EHFBGjviyTb",
  "key6": "2mUVvXvr2UAfarAthExfCVpW9gkkebNeg1UFtEw6iBdGjF2PEymZ6iF2N5WLw3UUNPKbKX1UhPFRLArAdkU7co41",
  "key7": "66LEydbtH3skNmp8SEULMBei2cgcNbHHirFxT5wqqYPTHeTxMASFevshSY6WxnDwZezNSFXhksSSMiQpGt7PWM9T",
  "key8": "4vYhDjZpUZyYykXhjixTeJuyit1JDtGxUHZReaEhN9Hs28zrCWvoBRGzNeuu9pH3z1AMCn4N96e8ChiorJVF8XXo",
  "key9": "5J4aHU9tn7HYEYLtbGigJDC5R5AijGBjReT9Wa6AboARKHAAqZnyA1xBxk39zKqNhhWtMoiFpU1dVBXhXsUb9HPo",
  "key10": "5qC29mtrSLMVSsCKmCgKxpy5RR5Ei13d5vnxDSvdahJsRMWPXtXnErUHMvSg1S3g7TsYUk5cbfWPyKicMUkj7dvk",
  "key11": "Vm2QmkD55w5Pm94muxyb3aJM5xTweo5mY5DARVhxP9avgCc8AqAHp3vFX1VnJFLWbSPrKgeXb9anoDULdW7V4TF",
  "key12": "3Lg21CchBBqsZYxjFx6ACgeYHrCGVi2hWs52tcVh2Ehxikx891yB6fTwP5aBctroRkQfS54F3xXyzFtT8kN6omVW",
  "key13": "2KngJTSrsz4DX9Xyr4uyRWyvP8xM1gXV2YHR1rvSRAdc5dQkBLdgpB2FWCX3meGRDBjYrA7ERb7GQzBciqXdCMit",
  "key14": "2ZDapmda4DH6m7MMKZTsiXCka1ArJgqfNogY7kEr6iFVyACYLMagMHTr47Z6M6sxwLHyoKGT2EvMoaxaBt9FCZ6h",
  "key15": "3ado54cM4bo9dKqmQx52jxasRrVXS2JeBjbRg8q1tHfVnaYHGT3Fa1spwD3ZF4nmtuWYpiHheUaAULGXkzXvHUPL",
  "key16": "3idhBgEXaFsAvN9resSiQGnP2Z1spcSwS9yW9R2SyQxNhXcD7CL97Z67SydWerdM8vzN9itGDwn5PVC62fbGnX8d",
  "key17": "2pf6CmF8c5tc9qNP9vzSsromYbwWoyxXXGSwUYNb7D7tTBwBWidZL6ttUA88qXHYDzCr63h373kgPhGG13waYjgN",
  "key18": "34g8XBeeVe5CRc4qQoEtSvjNiBWrdXjmh5QvaL7wbBKApaX6cGmaJrsKARW2SdHQcdmG44Y6LA9TYEgCM8atubjf",
  "key19": "3KBdh9ihoxs3fN1eV169jwCZWA64Sjk2DHhezvRoQ2n3riE9qPMkSUJJ9GL7Crage4UGp8drtPwFhGj1RgUAhpCR",
  "key20": "4RAxJu6SsgtD6jgaqGRbS1LQN94fux8C1aygEaNaUpqPK8F53kvfkTzC28wZxMWzGrirk5BpKhB2P7U1ZfY1nyXC",
  "key21": "HLvQNwGRHkxCsBxW1BCMEQ8A2RnXFbCJ7bnbAiecYsYLXdT8tkHqrtKD9hm2XrRs6b1YghFyYa9VE5cZWUWKzAY",
  "key22": "23QBgk4mFm84ojjvP56sf13sh1tFg52Wr91W6KgoTVSmMDpa71eEHsZbsNvSdCyUNuqEXCKasr2jmQVoZVXkiDnh",
  "key23": "2nWsEkxiRLeypmWpYwKV9LdP8JXnu3gEBYH83DBKsmY2PrmUZye4nkxxvjRzvvfXWAJ5snPadjFi2Wh4UsswCLRc",
  "key24": "5awWYaS5GUF8YHoyNPy8Jd2J1FGb5yskRr9Mwhr562i1noizwo3KfHGkR7uufN9nvkrXgjDDPDfYS3xnFmKhRRCR",
  "key25": "3VAwCyxRhphun9jaUTmNCnPt7EEoZHov1dyAEgUfvABAcgTw5EBuAb4wPrwz2rvcC8NLZYYAx4sS7xPoavTkkdVf",
  "key26": "271HebykFw8WedEK8BEpbsvt2Z24PaLE6wwFekyp2zdBicMEuoG3uXVGVB3tCM1PpUFthHRtwhnkDUXSru7Rx97q",
  "key27": "32rDra6bqphseSBFTQT5XMF2YXYucbpnzTPq9bRT8MXUp2UtmtLymvKGHb4Zw1aBL7nHLsi7ri85bWm8oFMGi7Gb",
  "key28": "4Vf6dYxahdrQfVzHpL9dDB1Wy2epFYuwYLP4Q3JEzsXkSma3PSiTWTkgGNCyvgCeMvgNQeeSSYsV1qogQUgsD2ZB",
  "key29": "Wkt1b5mYPrXjR5eytrW4PRdvJbWmysqczDQxfDoVVNHYSAKQ7WyP1nQ9sqrEPRLrMgchRQMG2FzAq3w68TpXjAd",
  "key30": "5Suk2SnettTbyRrFGpZ9iVaUdeCKohoXx5L3jfwsjzPasCh5e5AhugQAurVwhJDKz4UsyXRA1mAg3MgFGkFVU8RF",
  "key31": "3DtKPtCUFRTWyNiQ7Xh654uSB7xCkmiWPtZgQoVKsr2mweGkXbgQPdHjGfGa6TyFXSKJhzYqumy96SQLx88iBWJn",
  "key32": "r9dgkK2p8TqYipa2KT1ThfyoEm8CFHQKyKgkNpzqPdSKG1SfyTeirNE8NnXaKi8AJidQq3C1FLhtsHXWofXcZtK",
  "key33": "4XE7cxdUwVYocvj1bBVnWxdzXSaM8JE4cruQxzTdAhw6vQHRWQvPKUvpp7skp4rxfmd1puqGVXguwXRiw6J1Ssur",
  "key34": "37hraJtTCfbM3btvkdXHbhywzJAdVrPrrPmxTTtA8bTbhimGoiitAeArSjPkoNhsFB2amkVywHcjPaPA3PkFzby4",
  "key35": "3W4aFosuuKHaX4cEJzJ9wawzFNeCwaqakcVxqRa7JXzktXiq4EaBC94mtC6yMyEQjMFoHcphcaKx9pM3Vmakvt97",
  "key36": "4eCAh631dH13sXqfjijFhvgrALA7fakcdsWq6Vac6LSU4i4ujKo9aKNRgHDZ4cCoqy9vFhvUUNR7z5vEJxEbhQp1",
  "key37": "569RZLGLQ295bqWErcreTijv1nWATSN8wqNqUSshZ2BiTRAjaaBNEasjGbbskCFiQfywa3rDmByYz7bmx9AS41sa",
  "key38": "4vXcgSbFPHGeizoKAzTXQxpfybBXwvRX1yASTMhioSnm59ZuF96wuPwdhu1HauaFNdN6SKE2u39iPwFkYWnDPi2w",
  "key39": "jkcntvnrowHzcXbgYdcd1DQr7zmSe42gdmvnwnZz9qiD6BrgoDckuE937hgsNN4CYXdDRWaqbYutzoTQMsw6FjQ",
  "key40": "39gJjr12t9y3dqeYGvRjdm4qGc3XHyXBgEY1tywcY7Y92J4suNTyYov6RpfKPB8MFsnkdAQbHhTX8MDSNKUoAuYi"
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
