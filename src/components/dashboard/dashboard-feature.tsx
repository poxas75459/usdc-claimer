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
    "3LGVEfpvQeAQXKMMGiimpAzua39LRc4kS9HW1NtwcZRb9HXjVUbBnFea2LgZWPe9G2vgfi9e2VQyL7WtHecPbXXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PaL4CVYcNbKmUfRS9mtpnHYyEAU198rntZkeHjR4ZWA6gnFFGcLSA3W8xWpB9A5f14BcW9PgDenkW8ar2wwHeU1",
  "key1": "5TdJEXvToYjEx5M49mGMPAtfk3WDvHCXBYEXFpGJVmjwo9nopTRLjKRC7MCchWkiJtEnPKSasXrvehVjys8ixkuw",
  "key2": "3WpLG7G6VUd7WDNQPm9y2EoHBt6rMQpq7F44YkTWynLxAWuSjD45NZTze4dr5unsJjinj64kgrjnnVzMEnpBMhdo",
  "key3": "5o2KoVekcQttt9UZHQb5iBvV4CMSjsx9FTDDCS4zHvrp3yTTgKDPHCSKmPi77ew5Rm8DQSnM7xgxS5WGXMrNzNAs",
  "key4": "5uhLDfzwTG4UJnBF5NrbqwKvduBVqMP1qzmrAGLMrMXyguHzU4to5FiyrARXGmDkzwDPCU2ZVAwkaH9AYVbKUSJz",
  "key5": "56j6nYxrx7ViFMhNnRozxJUjA8QzkhiEwU9Qdg75G9NPvfoZxtZDfR5RndR6aV5BF76XWYX4p8LewQR88hPJNSAi",
  "key6": "4Neqb63Egz4mNBTxK3uTgg2TZ2uAcGUApBTvbmtcMUDaDkrNrwgj1ai5crbCTYHFaUKBKiypMpCdFFr96HsE2F8L",
  "key7": "HAKBqf8mFSx3HFZn8qacTcgM4JwnRgTRKWvfmxYc3kDjuuRzpjbboU6MnURHvCKvNTjUhm6WRiwkTjRCkWhE74b",
  "key8": "2wL5KiGLSePEmeJ3uzPZfCf1oUZ81QhUiEFXGmWEDuNrDjTuY7c2DhLgPBuVhuE6ej3k6oX7TSW7TEJC7JveTCXK",
  "key9": "32QiQFUJNhTMaMEKHU69ETYZm4A3RRUqotvfPFF3UNikvXmoRg9HueYggLb4Npc4CytUbeFR2aAFdXaJsSFoohvM",
  "key10": "36D2FVpGPG35ap2yLrkymKrLQURPJA6peBJ1myLA8WBK9rmxzEXjRQyRY4bY8dy72TJMCK1cfzSyVyS24W8iSCLp",
  "key11": "yvPxKhEvjRi8LxSdzRrBYXKdZtZSP9B5XFcCHAMBTh9zKAukQTfYbgPNXpBEV9zJGKjc7qbCnwuDRuFKYii1hof",
  "key12": "U6f18BFQXhZWASjkyFG5hN1piReYf6hDWxcM21ycXvFH4rRhoHDEcpyzEnRoWvYhbeyaGWshZiSCAou6SnQ4zNh",
  "key13": "4DaaWoYW33uKfuD6MQx5dCgzs77f4JUZZMW377wyfmts4papKDPCTQFPV93vAbMxjSQJekyUjbMzfkZUTg8fwjft",
  "key14": "wUG5NUUT1kGWrfb2xwmXzz1FJ7fFHUp8Juoy5ZBHs9iv4ojrKLYW7svVUx33hvCcqNzgvWZwHWcSYZiLUeeXLaB",
  "key15": "2KZ5J472cuHboJKgjKrjdnpmt7zX3xfqAmtLFexSNx2sDumgRszYXgrHNVvXaCnfU7GrKhj6WGxHyfYH9aWh1wgk",
  "key16": "45Lp2kATUcaeXKd1UUYmBkevWUFQaMqw9Yc2HmBPsDHGPVYVxH8ppmYDMk9NpzsZDSCkox78Z1yYYwpL4RL1iVPK",
  "key17": "W3jMmqAf5Xf43UcNqpWrbyqJTJmhkmcpmZvhSDB4uS9Bq12Kat64A9rbhjmtHNE3gpyNvbkLUCgNLB8UNESkdRC",
  "key18": "CpSpip7mbhgRnhgnbvKE9zexocmTV8w92DKfzJ2mXNnupAz51eV8h64X5hu8jJDNLCtqJ4V1Mc3RKdPsUmK2WmB",
  "key19": "5jRD8Rv2sUkrA5uiyXjwc1onGqVFxbcxZ3tyyDDibsiMuxh7RCeGT2QsiytiL9YJYZJjF7kZ1QkeMtQMScNk9rDw",
  "key20": "3LSZJSA2eyF6319MdGWRsYh6AmAaCnp17uV477Q4QeyfTcmonMVA55QztP6DMVbtakTqhLgkCEFQtAtVd4EGeU4a",
  "key21": "5iviLTgV6m5VqWT6EKkc8wtcn3vESXrEVawyy1Qdx2ALYF3kmx9UsztcThuvMsBWY1ZBJLVH8Wbgx5bwxCgyGs2",
  "key22": "3Buu9udtKYEY153kdppY78hVZnuu7hcLpfK6zNLqFyjoYgQvWBHyZ7E8qmM9d3aMMQWYTEhEMbXkZ6M1V2hCxWew",
  "key23": "5ifDLs1PNHgdzSTHXHze8FcbzkuSdqpAM7QmhgopFTKT55XRdBSAhm5S8mBWhhZeUP5k14niKwkfnbdQ6ZZp373t",
  "key24": "4ijZyzAfq8zfL66mwTndjBmJiXkAdMDM3uq917iPG1Hu4zcyauVQ1ZBU2MtycKVDobLyjEvb4zC44y5PG1G3Nt9N",
  "key25": "ko71ZNivqBThKfGBPhtxG8iMExeCtFrsEZ66dR86aWbeRDsp752oDipVpuzX5eJD1PocW6xdFaWZoqDn6DPL6FA",
  "key26": "63oj4XtRzNYZgNx9vXeDGsJ3tc3qKhLhJw7SSzXRj3QG3xVhBouHEEFGrvdUaFuY2aRvsCXgsVeYuXsQYFiaq6cD",
  "key27": "2kHCYAAeURXeb55X2tUb92yjwf3S8uK8o82Sa4DqakhWCqVhZvW5rLeWEx8iPHoTPPcBHs2UJ6qfCHmh7zNrGKw3",
  "key28": "4Xyg1pfXZKKkMgFrj6353qX3FYSL2Ucfjg55hsiRwuMEnoTb169yfnmpHkWG8xj751GhNioTfEDygFhpwyMrtaj8",
  "key29": "3jDSFk4VxhMhpM3L5J11sR2egSXD6indDUSoDZKMFe6gC1uUK41t7pVXafhGPHrzqKVe5TjS2SsCvxXS4eBPUov5",
  "key30": "4aNq5kgBvrWkda5aragxXdb4NBuSp8es9MbPfcfXzPjq1u3isAkxKYsmgvyMAb7qhQ4XMB7E6knwvQEGUYaPapQb",
  "key31": "5CAuUT67DncL6weFSraeSJfsp3rCXU8fV99eBB3s6rnTZUn1eZD1DRhAF9WAN5qVsTgYYA8DRV353CAL7ReJ3Q9r",
  "key32": "2x7iSJft7vecR6ynZtym9he6nzzJkGQVKMcRCYdSXAzrEjLCfigrpRZH2o3WEuDzkFfXyPwZ6R4DBSjwy97dm7Ui",
  "key33": "5o7dx98E4FxuJRP1DeKGvwBGgLH8LFBs2RJkToqqxMf6Ua3DzSPJLpjy13p26v8YuuZKF9Sb3U517nRVsoZVoWfs",
  "key34": "2YR8V5xmUrn1f4rAHgb7XFdBEYpVsdjhvPTJtbEG5bC2MkPXsaJvcWcpjTx6YLm1huZXhrgXhAjeVSBPPeudFDQC",
  "key35": "2jxX6uULXemLdP9Fkv2Un2rb1eKFdLyGUmfgBdBxsBanieUr2qS9w9nr1Fx62eHWroi4gtAHy2kAwQUf78re49dW",
  "key36": "5VAwP7mTwUGrdKHr17g2nv9iQ1AumfsfM1DNL3uqfQm22S3q79wbMaWGfDLcQhMik56HRGVEWdRK2jUj8Z83JLbe",
  "key37": "dY9GxZBdTsSwbVUsxae2CrbxsBWTfFzomczJfCzu1RP3ND1VpFo3fVNVhjxc2TeFEztYgKvU8BMRnRPgKQ4FX83",
  "key38": "3BiCCXEnUTNjkowQHmtHJswCpfNhHABV9dVC6bF4g4QjwKFkwKZc2duN9itxgKuMCWuGND6fJWAFfioTSus7jL5T",
  "key39": "3it5LMtQ9r28HbLhjjBggMxRK8upp9se1cEdBCvcbmqVzR4J3FReiDsYEXqoFo6AQ55ER99mtPJAv6jGfGgPN8zz",
  "key40": "662GkbZrjwcKm2baRNyoMsm64vEppXXrXiKUJij6KFVvCodhBsmSs7GC8HDZLBNUbh3vvWiUFFgkHTwcqQd21aJb",
  "key41": "2hqas8MMtwhxmL9JxsE8HC7NoFmbfSsHMxYgJ1Jo6qBS1ozGsAKbRbJZBcowLXSFu355pRaASBdnqsmhmjHdHpoC",
  "key42": "Yj4dSGNf95bY7qAbNzXqR45zctWoV7fsDmSCfwCkFp1Ss4Exi6RHnUtazGPhkzYQhXin6hAMWzWQtSkcsWVpx9B"
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
