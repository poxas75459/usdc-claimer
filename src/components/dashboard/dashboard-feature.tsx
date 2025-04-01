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
    "2BVgNtdMX5QrXpmCc6aJveB2eSVYgK6Nzo7YkggwHf7oS6wGDyPSPEWazzu7RQyD1Tb4QFmzuf8BYubTvk5jUNvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bNsnCqtkSZW5W1rSDzUQefF8d6tJwNJhQLa74RbPWZcmaVtcHX5S92VjwKuFwUuAcKBrPPCEV47D85xt3jzj96s",
  "key1": "4j32a7prc4wWEsEcwxvWtzM4cEPdc9udQ2nDfoX6iubsUEvvYjsPdMxHCEfUUtvm6dH1k4hxnVp7PSq5FuftiED3",
  "key2": "3CBew1bqxbD7otf4NRzdhtx2KqasZzU5WM1EfL6mAwDAJoseGmm92uWZ3WrgdUC6ajmkSAhjToPxuyptBMsZqHtX",
  "key3": "2whB7KsfuitbP2b81CTwEs7LvzK9czwZqmh7y74AE8jKzBcViQkjeHzjTfaLuVHvvtfvdE6hFQAP4x6Mae19jSdk",
  "key4": "4v3zfRE8FGbu4f4qJvJXrpXhNUszmMZULTKmuMViUBhDAXF4f9yN9KTEbJWZRDaZwQ4SQkm8ewzR5YbQzRAeWY8o",
  "key5": "2BRLURwTfgCd5X8E9JzcRKscTytemxmpod2WxW53WmGSE3StM4PDFCqmtKAYAdfjebXbR37ykoazgcWeQFq6P4HZ",
  "key6": "2BTDQ93HZoVPGkKCqEVWRhVMgpuy7DLPVjoLpG1Wt1CrDcjXxVcCbz5wWy6ULAwAC6kpEn26FyzHtzbtTx4zn63Y",
  "key7": "53CBuizU1frRbvNDM5oDA4s7tSocyWuoFwLJnKdqVgCp2Lc3ZwdrSsBp1VK2uJqAtwFQMGX8qB3RhgtkJJVNYnE5",
  "key8": "5y5MqREEaxMg64B2No1XRArKN7zgARNvACn8mzDw5cGG3wHgHiu9WaowK91uMGP6bVRgpzthQKJyVxT5hj1L76NW",
  "key9": "5rFhzcx39P6tEAUijDmnsPbCaxWTsvwoqkoPmbZQvxjPwDPZdAmdZ856Uo59TK8Tk9iMJuZQuzpd5MWGgp8wJoXw",
  "key10": "3j43cJ6G12i7ac87cDZimYbjRmk5ZLLUoyjHXsbEuhRUoxgeVhinUzxF2XrTbyJaU5cbt9CzS56KghtGPp6rRJc4",
  "key11": "4fdzuEQqkhBRJukQUCYcparHR32ps6m5icM4kztHWwnMewnr2Wedn7Xu1gf6TdHLekbq9RZauq9m4yYsDUN93TCV",
  "key12": "4mWC4eYM5ofUfewrrWgsg8V6bNPava5tDsYELQGvKk5sVVLBEG1Bo5QjMVzBo2rAsirpaXywDg5M4NSUYgok6tcq",
  "key13": "4hBe6JysBTfe5MEPN4kdT8LaXsSivjeXApjPaDJy1KecfMUSRmY51XTKJovzQ5UZ7KeSS1JwV3gdFhVkrqkpeREN",
  "key14": "4ZbQw7N4bbFcLvBvPx6Yw9j7DomsLkWnRbJyNER2BeE3eFeV6RidMqGHMUsMcAC3F5xsH2g6A8dip9wpvRXaj63f",
  "key15": "3frmw82WhgCfTK6RyikuzwczNxBdmZmrcbCg1VtxmouZpYmRA23nE6uNCtQ218WUj9Smevjd3uJQ2m3APch3Vc2y",
  "key16": "5YFU49K3MQq2UqZBGGAsaDAwUhT2W9KNkz1qytwR7qCCdRazzcGZpNcv2A3xqEJZED8wWre2q3fexk1R8G789r99",
  "key17": "5fXpG3p55CB2H3WjhaZpzLeKSWGPTaxZa64TuaiqLJgSCHpKWP89uXPk5oBDUGA3P1q522QtFAJS3JtEtrEARekJ",
  "key18": "2mhPdUWA6wX5pM5NZGLochd4m3rm4qMrAujqGFFgSYsBgiMGvCdz2ezu54vicuFfw4opGfxrnz29kwXuKuSLHawz",
  "key19": "5EUJRiKiyGD8W8QncJU2sfB3PpumCWfRUD2XzZMD6q7VS1z1ifMpG8eNqaouu2NJayAWmPaqPGchhimWw3xJcf2k",
  "key20": "5z9tkQXQiYLm6DFFFQ9QiazauywhDVnDy7vzp3wTpjFHfoEyxYu455Rg28nfPwqHPYkytWScT4asN5SrYrPm1b5s",
  "key21": "5XMGZhBzNX5cjbL5KXohf48vAsbWVTzkN4cUBPDEG6XL8SjapKZFwZ4MpKEjDxoiWciJhokw7MU8m83YSacEdDiF",
  "key22": "32Gxs33nuk7rMdZ655kwFpX1Fvs3erEwMizf13Rbjca24u87j6qT94mNsEksfKGYtRXCUqi28AsRcGA8WcAtVmed",
  "key23": "2NkwGFkobP5BATGN88ccJz6AMF3YaM7G2xT6iXUV2knM86jyu99vBZaNv9ep1sbJ9gfd9tYUPEHB4bhzyR6a9y94",
  "key24": "2zTMLe8yJVFMrqQwqRujN7fXkUzaMUp3Ud28jeeh7RYcdJf7owaZWuuobkTYaDGbSB6axhYmycY3dQZpU6YicCyk",
  "key25": "4MKWaFsGvypgJ4u89LAGbyhtmatZfAzP5H1DTzxQerpdKcJWLigjAoJD8UuQTXfSacEQry35jMPBobp9E56Q6aqL",
  "key26": "4S9JMb73x6ScMpd8j8xUMJNg383KbJELbgJKEZ4R7b3seAzgRTKJPt4PLjfALiJyUaV4ChEp7hTi7aUKV2wfEJvc",
  "key27": "2DQDJa8kUWC7Tyj2ktDEpJqUeUCYc3EG9a23JDiUhxJaR1KPS53QQaTHAhEAg5qWsRvy81gqJtBLrQy4mQQLom65",
  "key28": "4p4ey3iWGgS8fss6mTZPyzT6K4yWRBAusnszmKQi3v8sPFAZNCmWNaJjqFqQtmLp632jcxjirKZSE3XdEHMJxE5C",
  "key29": "3qNXVo3CtJdFYSaUfVeLP3kXgNhjNVCtA5CW4W8k5MYMPbCFkCzcRZM6NCpdqMQYZXvqdMen4P3T84KSJi7rgQMg",
  "key30": "46CkPezoqM1v5T4QyU4Ph4dv7LD1b5r2BUndgh4YhPiwxx9pgjdfNDs8ndzWxNkdf485Lf4kvM6v3w6ozQCmDYpi",
  "key31": "37chKmuZbWpBzTGH3d6YvcsRiVqLVYGqGfxuVDUB8ksM6MpEvzTFnrKPypxrKXkyh7X7yZPMLzzYLJBDHkvHgXvT",
  "key32": "2Ku2m2eP8Jc8Q3gii9XbpxSkd6wiuqPGYjrmSz919UfnijYZCXxrLr1BzAeJGZtkRh1mFmb3TeFj3dpKPN25GcJN",
  "key33": "3Td5poyFF3iuAGHZXqYyEvn5Pj1MGgUj5aLTd93Q8Hyzd2WYvwnCsWVZyUXMnVJwAGKY3SQVRJnHUPnzaDKNwT1f",
  "key34": "4aWVmaEyEP65Ec3GBFM3JsYK9VbnCzh5GaxjeS8yTiHqGbMbeYC6X7vetbJNdmtJ8dYKCxgToTxVtiAmEMzLK65S",
  "key35": "NAVLsmm2ovA9niY92E8SZgtWqtniZNZjznenuY1rfspx3ewWBcodEok5pQfFkGSedrQcVjmTLhfyaaxQwSncsBr",
  "key36": "5wrfqX4AvtJHZbtP4McxsAp8VFeeBnZVQGJNZc2Y84fUzPTb4BeFgttLmwt3xVx6R6AkENbDuDUqj4zdh7GojSUj",
  "key37": "4Hv98qFiuH5gwsbkZgqdU2K8aVnWvDTQvShM3g5iCrvPG8qk5EyUtsM6PszG4iKPmQMPQrDrbCEMpcxXsg5wwKkc",
  "key38": "4EbC8srP816pyhEkH67QeUNzZnWnzSRuoLfMYMnXHJnwrjsC8MX6BNFV5s5Qn1QwVYhLShPaJyxcDdcvrB99AP7h",
  "key39": "3r5uhuSMTjiB1XuXkEB7xnKNis3wN6GgxN633ejfnG7TyGsR3zWKTsHK69BQzgj11xSBASotNQYu9CWPaj8iMdND",
  "key40": "3zd1HxtgavXYQZjErpKhy7kQjDv2DaJWW37eJppj7BVmmmZ9n7sqJ9CX659GAqbFWTTxpfMBEg6sffnCiYBKqYU1"
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
