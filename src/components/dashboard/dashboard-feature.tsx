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
    "4cfFsHXR2Z38cVphy91RhPW7ptq9dPkhrm5dxYYSNn1n286Vaxn5oXoYniycj8bq5xXHWahwiHUfEMXQJfd34mHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V9kx5y64TRUmrQqxDrCTJrWWRdF5TrkfvQeVWXs1AymggH7tnk87dktD25rNHDdjDQ9vv96bGhdXkpAG3HzocPn",
  "key1": "XSngpXfNdQ1JDpu2vSg636biyrNcZVHHrtLgMaEgGLTYzXas9Aq7heRRemtXEXkHi5gYFmvXSUsNAmZcr2JUMrk",
  "key2": "4TrE8iwjwB1Q9rSweS6TK8o6uxjCRordSoyH3bvkJWbAg5xyP8jN1f6sWoKZpzcoZ81gfCEPCMEHe291VeRnDDDC",
  "key3": "3dJmW8xTQmosuVNy9tuJe5gAXd8JMaZpJVZbg3gdfXkpEufS952p1542sqMNKj9uFNdKsenja3N14LmA8oS6Ecoy",
  "key4": "5JGC4EUgHSCB877D4tHGfSZEsYNaoxQZyWKG2ZNmnFRNfS4Nh2s2zVsjG85mdtuJo1ghWKLLTZtNqJu4DTF5bvtX",
  "key5": "39Hi5yEf58ueKPtHaGfrUq1GK8mJFVgzxPSfJqhfMTXMLATDYYKhvvRLyijxo4bc1GsbgSAAcqwn5jQpQhjNePL6",
  "key6": "3VZBWtYpZtfHVfAsax9FCSvoGfM2XJWWCMe4v7HfGn6TEyfKK6XanYTc5pWbnGUUZ3hQgy9k9ukTBFzWQHqVivhs",
  "key7": "4SaqC47mUngayHDZkJurRwC2GWRciSmzGJqbB4VHSTk5sM4iY3UM9VAuu5wox9BQkJWSbsc1baHzMP833jzki76M",
  "key8": "2uzeUibqvNVAzzJWmiK3e2BuDHCEQ382W839ZVxTvRbWZvynArmtVoPhr7zGjJW5C7zdX8CcC1ZK49Hwn2UXNYPZ",
  "key9": "4ep2gRjaKty162HZviC7i64g6NSXnaBzXg4Fo6523eb4xdAkJXGLngqYnKo9VsrX3Zr48nJJ4AJizxsN4RoHrNpe",
  "key10": "3t6d1LFJkdtqUWmHrCey6k9XwukzM6DF3eTYdnWawgPZm2XmMeK1tnnjFxxkuVcAWmncPiWY3x84VsYF2f6ByP1q",
  "key11": "3vRX5DgfS5s9m95GnVv8swxLHBrznXwrj3dkp61yq8tNstS81zhci1nPohKTRDq1s8LjS3FibrMMLY6h9b15t8bx",
  "key12": "54nKWV3DCpg5Yuw4Lh8yLySoEddh4kb82qLTpnw3s7UxVRfw2rVSXbhjb8Y9KxscTxPwUgmegdkxnHK6Lhy52KaY",
  "key13": "22kvGFYShhea41rvy5XbmpLWfYs3KG6d9eQ1pXwEDWxratZjqAW9fgFWT2A66ZFdTUSA7tSyMvtz6enrWkrStUd9",
  "key14": "zmhZ4QytcT2Zvnzsx28yotRwwAYfixKn6bhcr2c5JUBj3s8j84at7YnvTbBhEsjnu9t9Qpj7ShWtUGtPB9zU6s9",
  "key15": "5QUbUbR9vbQc5u246S1iQwemyJU8KzE29E1LA2ZethUQF9WzdbFF3MZeacDgBKWoDWo42KgfZx5dagLiaRvLiVHn",
  "key16": "3uKpX9BVc53jGpgfBnaRRxfPd9uFBY6Xb7GG8kJnkjWHjersTFADtxr2RLcVrWDiSDrbX4NZL2CFGY3mzCsZaTLJ",
  "key17": "2wzDgcA9Z1Fr3uJETQ55uv1NyTuDFBoXkTwD9QPNcRryGExHSHA6jGTyKTiDZ5hbtTAv8GLEeC5TXboZouf58WTo",
  "key18": "2LKiQB4f3tzJqnjnmvKyKVTxjxKprCP7dFfGQdxVCWdANewAWxSPqkxig7Mn4H7QiHvxEC14k2sWFNuNkAYhrtyk",
  "key19": "21fYmC5M8tZniJrHoDaBP4k8D7KvKYRRMqLv6pR8Kkk4szZYJ6EkjLvuThLxDicuYa8eSuJ37Yw6cXF5rZYaSRfn",
  "key20": "2WK1UgoFV8HDxf1HxD2XUjS16RS9eER1aKgd3N9Tf9auQAhzDfKvS2MRqHw7cv2fxRxHcHniqZE1eUBZUoTCJVHr",
  "key21": "2yQQgC61rVCze4w3UrgV1ZC4dnhW8cVbb9dBFhoKVXcYELCNrYuBLBqXLDyTu2YMy8duungcg7R5YmggPVo89u6M",
  "key22": "38BGUWEjbB2h9io5W1JnEr31s5CuVUwcM6m7af1ohCd2Y9x6zeH8HCDagwqaPutdoytRtZzcFpvvb89Rhi8hYuve",
  "key23": "21g4C6T73FeSGBGK5SUGGaSCWEZgc6L6dCEQUR6XLkjyaFx4DQtJgknkEoKcbZMUwvpRgFtWsgTt7RdRjoqXn9hJ",
  "key24": "3FPyb53ZJtxHyspxgpuDK2awJnhUynrwBRKSiGitFHM3n8EAr6UQsn7KyCz7rcqVBQPgm8rD163KMQ8p4HHukw4k",
  "key25": "2sUBxZK2hhvCNEBJDH5MHThzcm7wkJq7vZnkXgBeJVvRQonuBRrTLayuLSE44v96dNkxq8rKYscBQw44k7wZ4Jmb",
  "key26": "35mxp2p1kLswuhJnuJS7ooaS49HeSgda4pDheYPFS7bKXRQPwwtdBNpauqRyjC8APhg26iLzGndQr6k72EsSjUx5",
  "key27": "4y4VcUowAcRbHYiauXhrLy98A2C4aLzFi6SmfFGRQJ5k36eBXhuHYQubgWMUUnVZBV9zE8Lq5brw1VGX31ticayW",
  "key28": "5Mp4yEpKmWwyAM7v38FVBhsbUSgntnV3BPezgQTiBEWpVZRmXXV7hDh72oDdHNRdvrW9N41kr8wtxoqKNBrtwBqP",
  "key29": "27pi9VsZbwi2JTdTzktRP4zGhQvHCq5TSA56AuVLhCWApqxUXhzuDQTsvD9suw7WtUHLyHvoTGEyVCoWdSmTkWcN",
  "key30": "2v4eRujLK7TVwerKvgnKN3rH4us9e4uhoEKQbqYTs2jhFuGb4M7jXPEygu1ubuzwFegjcfHF2z6wPe2D1Yq6jie",
  "key31": "ncYQXuibEEDFsm8BdHETyBNNyj2csM9qhdyixSFdv1uvT9NMzDpQzActpPpQRo5XHnayN4WBXWBGJ5uQ7F4TopM",
  "key32": "3pnNpPdUKdWEXtUHGRspis7DGZfdHTP5SwSy5zDcXvXD8ZiWs71fWJjcsdJwgUwYKEpLrjQoPptxMGJwz2HBXAxv",
  "key33": "3nX7EFjSANQk8QPGkv6JHS891XkgsDCN3mKbUnfNv5fYnjRqYVu9sv6iY54atvgckg8xNiQurSR5MBMRu8hfn56U",
  "key34": "27TuXdQye2b8MCKqvYrf1oneWdCUDaKNMYD4LgJxJ7XJuRpEhLWM5BAwCXpnhhmpoKKD3FprwTAnNRsucpxESsxp",
  "key35": "3Nfp9kTyCkvEhfp4jbhfe34j7WsN6enrSRpZmm3oHUore95hnDriyn8g63yFCL2PT1miGH76bDzy78wDY54ArTXu",
  "key36": "2UZoEKf5JRiUsGw1sEUvSLPxxRCnDFAFeS8L3cToN7uwFFDTeuHZXKd67haeYfs8nBdMgD6FnSop2cPiqoAccZKx",
  "key37": "4JZBXqwRv5sawtBXgyk4uHdLR8emcPyDMCsgTQny74eqVA4tHEeovPXXDeJBNxde5nzUpe1vGzuaUMmte3yYM5mV",
  "key38": "iApiAW3RX8X8nVEcSgkbEsDbwBpdGdN77KmgKAzWQinESywP7KoXsAALzTmAh2bRsfGTV7zyP9kzc79papBD2ab",
  "key39": "3KWEyzJM96CEJ462wWWMihETgjXgDQPHrLcZkyatFbq6FSYcrBzgxHzibJMiTeGwtP8NPYZHv4TyApvXCS5gsZ6A",
  "key40": "29sMTVQKV2jSCscLKi7sfHHgbLNZAKtvjxjsnMf58dGX9dbPp93ufue3CK8Xu7eAzLSSeH2JoPLYrsPYtqDLCxcV",
  "key41": "2Nm6xqfYPZobfx76zzRq6QEZFsYgbLNVikJ4eUmoYA4NKy7d5gH4WYkqQChBJyNCwkh6QRFaFFZ4sPyNySRmheu2",
  "key42": "4Vu5vSaacLD9EZaDRSHXUJZmkytFcQNuNiVmTaorK9Et3sTwdxruNebw6GgEkDNAmC8R1ApusfDX4k1sQTYMu2oB",
  "key43": "3DeodyGUcpGenPcNFo54gM7P3M8kXXaRDuVitrDZENwaThoznm3JECffRGXWB1xGGa1MFZMA977Fsut5NvaKbT9c",
  "key44": "TMzJLMu1VDDLfye9eoQUsFYtQaBVD9nZBBcCojSm4KwPwBV1wEYfCDvqMXZbq4JK57e4BFFuDgkRGsJBu6Jw4zJ",
  "key45": "59FaFBWodJb4d2XqxhGRWBCyttdWag4EXZYzjd8AfUyptNrxXidzcCwgFPF3wav1zvTGCSSZQFmJT2BuyyVuFVXs",
  "key46": "4LvkTwkW2HzFqwQrG22L69yn1qHYV58q6jHgZyxhPv8om3PwGF1DamVSSTwJTSTA3wVgr4FjoSjgYjkvax2HvTUi"
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
