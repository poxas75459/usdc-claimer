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
    "4QeVFruZR5J8EiEn9VKYfCwVNVi3W2UzqsXb1jpnWvndbjNmF5d5feaeeqyiSkPwnDffncGKuKMBbivfpzo76bAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iV3eiaU2nxgQJmsVRomP4EzDTRLuVCsteta6K92LaHTt8eCoJfQZTuSrH9BnS47DynzdBi7Zn38fpLonw5fCQ8g",
  "key1": "2HZ4iqmytkqpEpJax4bZXd7NV2tDsL3Xn1U8o54eQzLL2nC9LbgbBwmnipXQs7yQjKSJA5D3faRpK8TBNKE8MtzZ",
  "key2": "3j6k99YAVb8xnEqz56hnjW7Tp5w79cinmbWzPZBL9cgAFsAMjyFwoUqQndgeHRP38MYqHDgLDpbuk6v9orZrTfFK",
  "key3": "ox6CqdwdPV5pvVoZGNg6Hpeybox3QWQTVgo2YkimNxDSqGYhS4b6CPH27hDqohNekusHHioLkmJa7guDV7z8Ymj",
  "key4": "4yPiCfB6ojKdSaTpdzo6v4JVWsjwuz5hNMZUgKe7Y63eS22BspkvCLueHnzWoGbdKYeB5xHNjLaWBjdLhuZtqeXg",
  "key5": "5c7GTPiQpZqZ7MjX42uX2qDEyzgdnWhK2MWq3kpwy3bWm1jXHcbyRiCXWoCY2Vd96zs1TxL3HxtVxVruLw1bZxFZ",
  "key6": "5tN9nNunqWfE4EKcXsNQshQ3kfKS9HRuSoeWaU3hEWFHq284HfWsHJudbS9snddStujcTQpd9pbFpbPpBWnZxmeb",
  "key7": "49mLmN3q44BACfsL2yJD46aTNFXDWN4YqzzZKUdENupfHXq9njmr6gZts44UW8SMDNRAzaXJnbgPXxgWtYyvteq4",
  "key8": "5BAYKCBEd9LeRmwCPBLAQW97XLNTY9kTPBtgYgSpKH83rYxAjNb9FuSQiPhMtyfn7vzNphDtATeNLFBDQdVuiMmS",
  "key9": "2Wp3cviozxdn6Mzr6vxu7itFxxmHAcXdq5JHZxk5S7DcxwQR7R1sqff6Qf2XLwbAjiCgcsixQ2Y1VToDRYkUncvr",
  "key10": "swE7sjCo3D7ztmsNh6K6yzsMbX7fzdirseRescjH5iQ7ou8nA8NeUD5Do1VzDyeAchfXB85yHji1i9ht2Jm5fcf",
  "key11": "2EwtNwZrFe51H8tpFvp2ubNxGWcJX8RTXWpNPyGv9DqinJpAkFvHA6CjD8WePCzewoynSLW5ifLoy2aVftNQQEy7",
  "key12": "2fWFffGxkauWsqKp6MLZGni51Pt1viouxH7Y8Afouv5yQ1Go7YDJGTfskaNYNfPk1gAjHn8hnB7jgaRbepXr35ve",
  "key13": "5MpSfnwSGVtRRu85ryM9WTs4HsZYhsQGxqHMZbJsR38rnFzfWKs9dRK4PDwrjcSvmggySjuNqD9KZ9B6czdP7XZq",
  "key14": "2Eb8PX3zAaUaZpkEyUFaGd4bkhu2w4wvQ774zANUPWvBfDUSve3B6xdbskW61fPG6T17jjWEwNNRTaU2HxaEHQvv",
  "key15": "3mSR5yKArbvK59gjeJYhPvRo9GvZAyEigGaenZ1ufEYsCvHzrsixb5YpGHP3ZGoreLnGQAvWQW5X2P3U1s6M2xHM",
  "key16": "4WWqcQxeKaypP9NzcX9T8UkRK8L31362Gm16xfhGGdMD66YtDrSuz2gyTvuxbqmdY9tzMrBDxCQQN5BZGtZqQNwQ",
  "key17": "2uez2ryFxY6kZjqcmdU8Q7M3gqb9bXu9WJCZaKGRq4Ny2AqCgchj5oCy2FfxieVyF2utm4expCys5hJzRNAcmaku",
  "key18": "3SFSKSXmKi9xoYhSrUHH6oyJDx948HDRZ24naev9YEbduMwX91TU3pgMpKZHRaPinQdq7k32CjCyBDAscs2Yw26x",
  "key19": "5F9j7n3ye4DMf7Pdx4YD3FacS7RsdaaKgsCgT9sFmVGfN7kn1gRyyL3RyLNw34jyE5qGRUmWvydwaEZmC7s8DP53",
  "key20": "Fp6bGgKCrWUXrMi6rQvodyVNUMecKUbv454oCsYiBdSTUZp9VVmV5e4x3UtbVhRkvq2xq8EVWA5UFNei7pbxGpP",
  "key21": "3KVv7Wh2Bu6Ej29NyrarCKgdon19faYdhwoGtkjRtkS7j8rkRidrTq9kWxxUFRueANevwGosEmZ8uzLdBUDusHsj",
  "key22": "3wxrxBsDUFK5cHedxcbzeDFNs8wfPHRmcuxeSVUghFn6inJy7zbTE9qt32B3LQ54zRbhx5XuNxNkUhRBi9gD1GK2",
  "key23": "6WdxVo6Myo3bdt3T7fbfvN3QFNGmJzVq5jzg3zG8LEu7xxuq22nK5gyxucN5dxPJzJXiFanmj5UcujqqMWRHiPh",
  "key24": "5jDTELrTzra4XrTbKg1Rz26YJbNLeMAECds8RjWGTztyttXYPZWGuDYc8VJb7wBNQha34f1LNn9R5QoL5P71hzbc",
  "key25": "2pJuCRoRHfLbGgoJb7kEFtmX83dHxkV1zCgaLnUXEz5MyNAPnJS8yyESSUnPG31p96gEhd7M1XAHRgKCwfjZBfYb",
  "key26": "QNjvnwZmB6VkdAYuUhwiuvEcaRsAac692otZe1yTkT1fyiaSSWG3NP6f5ayNmrdbhXEHei2AdigxpFMKep8FTgU",
  "key27": "4t4epeb8gEX9yB4sAYqTsH8yrCJx8H31Tm6fRVZktNTWfbHBznqMiGkitNTK66QxcRKQ8M7CKCKMtUBeLkh2LE2S",
  "key28": "3RfxQdmBn7khBe6oSYZvSedJHWXSvafGx6zdvf2G6eHUmPHEjvcQk1dF2ADou12TwSafUKpvkBAzKRYDAYfjWKok",
  "key29": "5CgeYnKG9HJvEqeRtGETWQqUvZHi5y8eRYNLuWB2QKK5ZGJZ8dYRLeMbrBSKBSzRtFv3Roodkyawf66eM39AWUhL",
  "key30": "3oYosqu7SLtsh6rA7TagCoJuJuFEU5poFiPrfcG8gTPQ4KBWPMr3dXGcUqXC8856yZXuiCa33Syv1CB3pRMnqek4",
  "key31": "4ZzTVm4CvyjxBBxgxaVFBa8wDewUvLT7M4iFeh6jRU7eyYyQuZYq7HY7pQDsCH4KSVZDZ1CbutwqPsScfGZG8jSg",
  "key32": "YbcSs1uK17KEgRqC1uSWWcYC6GUf2mwu11rSAn4DhXy9yVNUvWqWwCqJB2ki9Uo4sYhsqMSRJaC3wbEjCnDryJh",
  "key33": "66FuzvrkN2d17VXaWzF8jKk3zeXgoG5YenCwJejMb6zoB8tD5YjgftqU1NAePWW6CoNz3RGDCrcENM4V1yVz6SLt",
  "key34": "4cozBFGGMBoThu2CBGkz5f9APhuRu5dS6kvYdmuhT1ceh2xSxYbnTV6HcuX1f3q9hNPo5Ut6MamT72mMjQWzGqwG",
  "key35": "4N16hWFkJsZDsG3vnRnHq9qdFvSwHxiDoZdmvgy5ch6PCFsT9QMAMYPEbjYvexUP3bd2iVvSiFKPvYf6emTdMgar",
  "key36": "52owsh7TW9AiakVZHbStodinMEfWU7sFCv8nDYA4BY7yenZV6SmnRyw3EBD2e4UBN8WbQ9pFfnzJ4i5XqnTdiRC6",
  "key37": "zw5Xto2sWLszG7cyvZSJTdLMWVW4RH5gc28pTm8CbSKGajpjCksBLCw8TBy8M8KtLhgSWtt8vg5aEkRGSatWb4C",
  "key38": "3K8vCwJgBJQs4hXWaoTiZuUB13qavtmmhKSXwZowvueA3RARKYGFLRkoJL3GHc2qJ4XrQpNZ5dRaA4i8QquPsArr",
  "key39": "YV8mFSDRKPRU1YF6bjxkZ2ZEJKQCUvhiDHzSAMv9rktBUc1Pj52xmQE3io4yX991o96t21DshsnRU5NCxbqLmXB",
  "key40": "5p4hTvUUnZauihQWhf9ukL4CNCu9xXmWCYEaBB4WBHDLZiL6tEqj2syTAra53Q3pkihq8JidzzsmY92pUtcKcTuV"
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
