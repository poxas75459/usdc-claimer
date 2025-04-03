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
    "9zJqu3H6kfkGkY9NBWwhxxmbRCm83tLjw8UwdBwH9tYc8WKaDzLCUaubHjP3gdePFXFoXrHChxpq6EfUVR3ZtzP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D3UYrRa7ZMaKMx5JpGfSCJh383EkaGEmkqtUUr4uJ9zMwyLH93tBqJwQE4btZ3XshNM1iD3zANThQAbdhgKsTs9",
  "key1": "2HvHU3N34FsYsj4h9xbqd3znkafVALBpeYD3UwxsGxVWTf8pEvqXYWgGo3bS3PKQ24BE5JgCTQY5NXYBVYvamW1",
  "key2": "qtumz8sEYA4DvWNXjHSL9ovnjUudF7R9LbtmgE8FTZtH2AvsuqrjmvkCB25mZkgkWT9Ydkir3Sc6Pm5hnZAUguL",
  "key3": "3jqheKQwX6zcmDp4R9ovdjpyr2NhKRdX7hWAKML8rgRK1xd1LT6sTLMhnvfk9fbaoszrEqtsnrUx48U1b64ccm7Z",
  "key4": "2txfpJqsfsvmshn4h8Xnt53QGso7Pe8aawgVKb2ddLQhxq1qHbjiaV67mE1gv4UA9Mv6CJDFjBhWRavqZwVySHeB",
  "key5": "3WU4nc3y5AJhKyxm6HmxvQcoLWHAxzhrbjeQ5JVFjKXAueMouAk8sTjfdm4jh1EbMt5GZ1noejd3ZZjMX7k4nsN2",
  "key6": "2EoRpjrkVvaHsNbiAph3HN7Ufe8uinQbhuTM8jNurMBwbhLmUYrVvtoZ8DPxQfUJRXbmH14JdsmLA4Gxru1Ph7Fx",
  "key7": "5CK6hvGuFdo663rn4WYAb9K51iTX5aNfELSjHmhfu6fWoBnT41CmAogCEETNnN4W2WeAKianbwSt8khhDgnFsRya",
  "key8": "5ezumqf2WLdQ2k5DdvNd9YEuhJ4iJPFSTdBfpD9qvbPuibstBVQKJfgVArxB59ffRawLujzbGTWbSSVFQEbcSu2G",
  "key9": "2DjW7yNneyXhJgitiVF5eQ1ebsRzvJfZBxd1U8Yywu922xFzUGpopLcSphJM5NhfxPgR3shQ8wK8G3ztPSMyy3ap",
  "key10": "XLkx6EZxZ4S8yfuWprdNXBBh3nd3UFWzZZXy2cXMgsozLw6kB5Wd8zYtaR3HYRiQwwrecjTM6rzCkYFfoUXuLUd",
  "key11": "2KS892nr63NCxZgkw9ww2GkqkN17DmcHCUmcRLzuuy7qubQsj4a4zgjNR7wc7GVQJgjzJV8KJncrpzDaNhFpRCPk",
  "key12": "524MSpnL8qiHKN6m7QYDBvqLpw7Nm8GzGn1d8fxtaXrYZeZVchac1PVyNtBF4LZMHiRcdzKV1vD6P22aT7fdQVYQ",
  "key13": "3j8vukLvWSZcmnyDAuSFBJxuNWZ466GUaAmXWYbftfXpfTUNwrrK5NNJ5kcv1oPtq3joporjxX2oiGAsF4DkCKQ5",
  "key14": "4RHm7hoTL946GAVhmbeZfUUnyGCFB59XNSqPZLCHmX71c3aYCnzzsiqT4mEWeFHxk8CYezXCm19RBvVfz8toAyXZ",
  "key15": "MuUdHffetMZXmBCDLwqMaWdiRck1uf9fqSRU8uKxYChYy7sSzowYc4FUhT14BwJo1YQ4zfWZgQk1AiyjWf9shWZ",
  "key16": "uDpBhaRpnYgCsA6WcUgBAW7QueErThjNVRgLcPxqDUhQavRTcDE9gk8Axd1RuK9sJT5JZMtsJVJxyhnCYRastMJ",
  "key17": "2Ck9WaNSUqTE2Rhapg3VXCtKAVz2Yqr46PhaWHcWYwzWmbHVV1RzJFfLfXtYtMsebT9AZMdiAapq5svQE5bcYkPY",
  "key18": "4X1k9QyYK58mLqN7RAwCzo9Tric2dKXcBvqQJYumB7UjFkjwr9hEL7sgejNkE6hvKoDojYmDMrmd11ufbqKXWT9x",
  "key19": "3eojBgHfZGo6q85g1wSVN14vL41BrcwvH5TnvSjCceePpdGFQQzTbqWGXNP43wc2c1QD5V4aM7st6E1F1jJVZw7z",
  "key20": "45NswJfP7gmPbuAYJJpy1cPdLrk57sSLg7DwPKKfmGdedvcdsQgy4kjK41tWPAfSkfCxsBvW7q8yqTwi2qMESxmq",
  "key21": "4wKYeeNCDZ9nhuhLAsEdm6NXdkQAwmFDAjqLz2UUCFo596a37FRMt34Q7t2B5DQm6Qb2eny8PvwsLESvDo8gC1KK",
  "key22": "3qnSmohph4mSPjiZuwJfpSTxL68N8bFRVC7551QACQ5jz3R97Co9See2bD1911JgxFKyzTqdgR7hWDkLi6urLskT",
  "key23": "PxdkpJoEWiCPWDJ3PbVQ8sfiFyhfHJLipS19U86ymJRxop8yHdg8ytNdQkggc55K9Wycp55GVSTvhMketSKurrZ",
  "key24": "hQgqfR9UHdF9qGScEPmjZJX74qMLfXwGP8TVWugGnK8RH2tK9gpeDcffEF6gRq1VAWg7CTJKB8NLsXmM6jcf1hu",
  "key25": "26Y62Xf223J8Acb3rsGujF2T2X7GkHfUNvH5LegSNcE4TkytKJ8Rn2RnkSJZJD95E1kfJZhPNaP6f1T7ZwUUPhsU",
  "key26": "fgf8Wrnqtt7DQb9cRLsNQDo6NVCQzSFjuWKbmXQLxV3k2F91APYhvmpJmCSGKrhnBp3ccrWdFz7cShotcjSvh4b",
  "key27": "2A5eD524eYLb7o3f6isZKUnmdqZTLLhuDfzE3BMZ4QQNkcUoa8A3WytjnLCeQy4kvaEgcmJxPeQZTaUuDREh2Mke",
  "key28": "5tDHahwkDaawYZ5ooit79mDjxFy3NppL7qHFeBtRjSrUk7KDKpXFYZTBuFRecURWVpsD9ehEBnQYGZmaT6PTchEJ",
  "key29": "nXcRKqUBUrHrRodACAijn14SyNruzPZkTkbFzJhuohsnDyrzJ2SLnwFZsbn76BiwrRyeisa9bEdy55k8CeJuQXK",
  "key30": "4TEWHp9ym1ndJSuDrY4aUxCTEVKjBQDS4RBEKXLXbcf4prgZPVhMsF7erTBXnDBirkf2FT57Yt13UwdenjuHe98m",
  "key31": "4ChkDKmQzrg9fKkZQHbRwtCFW1JW817UsU8taUdPhpZdYGeuSCHFpzcmNheqx7eKigyWxMxezD6KRU8QHTXMbdQ3",
  "key32": "128FtCQHzSUxSHv5HsUr7zUGfauf5Cy1KoZ6S4PeXY1XmLKfJUrFNEUbiAgi5qB3ge5XGfCNwjskkajqtH1N1dbH",
  "key33": "3zta4D3AzzrxjLEQT7BnLQ2zBNykD4MoL1ZKWnSBgjEmWMdFZxqCvbfzf59PzwHt6WAbDddbsmR7nMK5RBa26MwW",
  "key34": "itoYzfXWdzSNYE7gWDpgz8QWMGe6UT5w2GwSYjrgVwK36zWucaRxYQ2Wvqcv5rvX4sJX8nrW7dRBgfp8csi2ZF9",
  "key35": "4Qd59p81isiSETCvgBMpyFqkQBYNNyt6uyAxaavWPmm6HuKqzm4mbXtVitLyNKE5UMbar6ArSY48Es1psH4sNGnK",
  "key36": "2o33AWAaXPQEsA8cbotXoK2dhW5yvgtYRe2yo4jRGoPQrHQZHRKgNLWrHD88tiG5wWH5QuktBRS94yRee7dGRWMB",
  "key37": "4EHj6pdAdYaRFCF7BoARVE87o8ukHhbQJgJpvzLvEfH8BHPXCkDfV42LNvfmb4JatbjMVHKgMeK9GKdYcmBSADgc",
  "key38": "55S57zPJn524oTmEVmTNyA4HHett9rW73T85asV8zdznHPupsaRSfo34EusPWktBTDCuVfcRCDu5XZDJNDS8XumW",
  "key39": "QUjM2P6Xa2ZAxa3bCDDFLhJKn16Bq2UYLkurKPWbAr5hKhT7PtFF2KUBNWSk26dVaKv9ob5zLdpinTX8dJ56N9i",
  "key40": "3LZq39gMRoL5n4xY9RwNeBMZMxyVkvFhGKoUZ91FZsKhFngjcCPtyCfT2iHUJMtsqg9yDkBagYcVSHPDJWudyLL"
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
