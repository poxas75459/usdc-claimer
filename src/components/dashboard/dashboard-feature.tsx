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
    "Yu4ex4FfcArL17LXMmkC1duYo4rq83tgVWdAXHpCRr5p5ctYnVQ1TwnGoKbUuupu6pC1LdxwZvkJbze1nzD9tra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d956QpJV5MN2u6RWXNdHJDt6iiVYPHtA7okskQKMtqF8XFZSnwJUXPH4aeqtxNm1orAYnrqqMLVWVoyNyNYCiFH",
  "key1": "GeKaafkrpowncrShcYs4B1pv42u3XwWKpf1vTsFZHiynU8m1iRfPNS4byrjeqckRXfXAZbf7EL8q6v1pNm29Cqy",
  "key2": "UqF6DNGvSyakCdGpKot64NFifdXtVwnCYig3JT9YXuUG2uYQ3FnHNznxBebzDaaXpytz8TcmUCuH5mqdTeLSrnU",
  "key3": "5wrToNSMmjRuXrX5RjKYSMvrrqDndDrJL7ybEYR3MDjSfyesd6ZSKq1MpD1Xptm5ZRjMa68vq8R5K8KYZHXhnev9",
  "key4": "52yHYYgyo9iHBsQNo5VBgXj9qzvBrJqSZrd36PGUExs8YFFqF18sYw3DE1e14Vrq26V7xHyNwnAxhvPL41t9Vgyj",
  "key5": "hpXgsRT23xPQtcmgoYpuLFkuTcqbou5J5c1XPMH6UPhES3g1LVGLRfaex8iViTK6CvbJhD6spW7cEVxmkQdqdWT",
  "key6": "3x3rBFydvgUajKCAJD2JGZ3pvWMKth7xgTQqCyTW2mWRKDvgeo5eML5PP3F5Jv8RaxLxvygpBzasztavEDpMxUUP",
  "key7": "4GSSEaahC4LTMm9XFZCiars79fnGUbuhNUVvqCZ5kbGAqjxwWJmFphoTGZWaup5HoxJir6f1Kt8AoZoo3qNKMgRd",
  "key8": "2ajFF14LccVtz8tJ1n7yjinFUFXbk8uLxnehzG1Rvi5USafDtvzxFHCWJmGrQpEhLmyHZ4kkK9vDJEyCreiNNmgi",
  "key9": "27G3r3nfT6KSAkpyGJeNe55ov3tw4Bd6TDNhwynYBNQyCkPeUXNJwBwnUEYis3evzVrCH2WxkWX2aaspcKCfV25k",
  "key10": "3VmVHnN3gaKnusFgMyiw2SCGHnk28yEzTwYtFuqpJNn71dERu6WcAd23Jj8PzHmfSc4Cfy57Ev7B1kiQEXBUZLnh",
  "key11": "3nc59JUEx5Fp9F8cddJun2ECMq52Dd6rovbJT6e1o5pN7Fdgus59fsMAzFoy5dPXt1ZFHwzBMwT11ewi6Wv2pYQd",
  "key12": "VTJxkFh6s4xfL7DmbxhNVbAWWYbJPydp1qW7ZjqkENp4PY5nqXdV5VaZ1DR8PAFmsXHKN5JYvravu3WcNF6gjQE",
  "key13": "2NSQdAZG9CwfXysWkaJeEwTtKYnKc8quaGjVXUUi7xTuZit5QMT9mWxpVUHdyC6r9qQHkKtFiKozV8yq7e5p7JWo",
  "key14": "3tdiGtig4DCkXiCN1xX5bco3kNreFeMqpYMuGASQ136ksFCtXKPRyUnmjtEwoTpfE2vqTJCnT5HQY3GCWUCqRrCT",
  "key15": "3tNjXC9ejhNgfd19taD5H6cc5j4QoLEyynK2FVucgNYLPva7Azt2htHxDGBQnUXskvdbUzP4ooWLsJE7wmQWAKBU",
  "key16": "2svYeYp7jtGXw5tix1L7T9LMuoDz1X9GFV93JcK41BPsVXTweYikVNeH4R4Uy3ZXt5WsMivoYRU7ThT8fZtr68e1",
  "key17": "2TMfUJTT6rMMLBBMcv3bRMopJhPA6CLPSyDsJR8XEstmk2vZHxk12LYP1bjxVNp4ZFGZkd7Ciuw6utjvFTmg5iaD",
  "key18": "5D6hgDUMigtMDrQc2ncFUQvXACJffumgrhGGJe8VsGf68J6M1peqispsZH3mkUpE2ZZYKXCueh9WrkgR1YEet8ue",
  "key19": "2o2mNG1r5Mpwkz5Nd7un4d22gyokWftohWmR9dNZ1p5gwZDr1YLyTRshZiBp9mLXGyMKfXf5EjfkJn2yZQW2RQT",
  "key20": "41sgsmgX4fL69UH28SKPuF75fDyDfinhfHECgJU9qxhMVmKUqYZrfLGXqrY1mSFhAou5iojSFFqhHMCxf6oU9t4K",
  "key21": "3nSnvxQrHXtcLqT9Zo7yQNRLQ1JmVNLU2tJUESusbYSXK5xPrkxmS5MsV1UKdkTyo2vZ9vc12XxqCiucU8srQUh7",
  "key22": "3xCpThzq5KMzojLB4RyK2iSvmvcTj5VHWdd9u8ZtWKR3iyEsVAto6wSUq1LqjonuMfpEC6KN6GbpsXEakCTMX1Ci",
  "key23": "2D1fvV8VNho8Z53HwxXZkcWorTY2uxqmzi3ZdRh5JaVyXDNYv5CdBerJvpHk4q6Nzq26jWMM3jDShrP6tD7waYQN",
  "key24": "4Wq6ChGmXxunz1rmFqTuS1mmq2gdzLWK6h5ZYx5CRpnsKtmnpigHfjHrhnZ9EffuZ2ypUeQBMpAHuHRYLexwuDw8",
  "key25": "2cFSpM4rw48x2dq9LFruUjnTgB3RhSpNEmFtm4USyza53WvaxEfqCmNcnz1Hev2RvQkRpHEf9t1rc6pFa2naRzfE",
  "key26": "54e3dB2HtLdRHyx4gQDbyBr6pd7YUA4naRJ5eEBNFkMdtvD3BupHzgZCPtYH4oX2PfkwZsMrYHbZKSNfWE9wR8uv",
  "key27": "3NjcN4Fy5CKZ8fGmVVkwhQ8bGWyBojTFfV6dxzLiobGR7pWU7brFmUmmvJewT3jfo6egCiUJLFNPtZjfv4UUugiy",
  "key28": "2UZTf2dpiJBL9tBzyJHetQbMSTHavNGVJziUfhwhBBQuiJsMzQ1VreT1qozMQn91R8VNoXtwhj7JJqySKfSXHogJ",
  "key29": "M3DPZUhGVAbSByW46EVmTmimJpdkfcK8jgnQGuzvtqbudaTQcQZnEaxXxf4ho6AzTTpJfkC81G16KAzGfkRNnqH",
  "key30": "37k1CBwWkqWsGczTkAMjaMvgBWrN6Bp9o2xpvqxuZeoisjhFPzehtyyPmiQjD8Nnn9LfFx6p9cKS9iQAYt5GoA6k",
  "key31": "2tZ6rPNTTNpVK1PU6QiESg5KKt5LMycSUUuMytKRZiEPwiFjiWgko2yp9CBPHYFkSkYSvJ3xkS8iXAYt1K18qdgF",
  "key32": "4W8JyBxiRZUHLVia6P1bjxQ9FRQuWzLkGm4BJHJcbMR1J8Fg2QyqVywwGTgzrEUdeEnZJ4PtxgdMvdyNeC9DZgum",
  "key33": "VMP6zv37MLMkpg3y5azjQeMUXpsJe32qNFT4GmJesTB4kWA759qxcdbZVm7Vo2XdHiFzXSnjC13tRKXbYgXBFTY",
  "key34": "4EN4X23Dsw8D2ds21pEd4yXHw3A1iUKCCQhwjZTQKcyDPiYCDHnz5o5k12Kza38qXow54CEVVavdsDdFKdoeSejB",
  "key35": "2Dtfbp8BRqMsciSgTm58j8gFmTfurLs3aBwztxRhogZqni14TX4A9crR9jbQ8thZgMzvUmy4nimg2ZrQpUAsnqpR",
  "key36": "3WTZeoAZeeQyAPFB1ah3StTSwQ2Zgvr2GLhbTSBDruzCBBekmnPANKE8MR2KhnUeHA54f8aYFRVzJ8hi3fKHon9N",
  "key37": "4PpPjpbPAtkjhs3gUk39eZZhaGmMJ1nhfz4tnYsohUtf4N2cLZ6eem9NAkwDJkySDprJacWzJGELxwBYtsfUBzfQ",
  "key38": "2VhCzxuKJeFD6BsPDhf4Lqttg4mNqYKXwtkCSjTZvUtTXd9KN3LGDcp419Vo1nASZFhEe2DXcLY3uTZSZQ932xdJ",
  "key39": "612z6qtwnHutrDkPVaWnUGvNkjWSL7sKqGBNBPdQnixjRpr94j3z8KMj2M39PWE2L2azpKjevJh7EccXmoXEtTGM",
  "key40": "4x4SvQqeeqqPc2VehjovvhhH64LcWZAjvzSXP2iVJ4FNz9iPyS3dbL5nfR7JAukaYCkofFSByGqkco8yjk1HYhMz",
  "key41": "2JuEaiSCiZKwW6pFPisPTmRihDpLmPhfe1Rm2ez9xZD9xQNKeMjSfR3vfS9t1tDHqSZ5RbhTQzszXDdvgUG77gpX",
  "key42": "5tfKqgfvEFTZUtaZFaFbFtxkHJGheXubdgAU6Ac7Qi5hXBiZ6kYUX3EynVbh3fohnifk4jL3DpUF9gonsz4oBvBB",
  "key43": "3YqYEUzD7Bhf41P9fzbWASYioQLYbQ6pMx17AncAjm6gTe1696TMXx3ZbH5hRQXZSwKjAeWcuxNadN3TKJ9MSE1j",
  "key44": "2Qz6qHQsJdHcQDUTK9Fz4zLsqLPPooPk8unvwzkfVbxp3S15YBm5xaCX8zs3Nathe91o2tSTKFnLLvv2m2ymX7ZD"
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
