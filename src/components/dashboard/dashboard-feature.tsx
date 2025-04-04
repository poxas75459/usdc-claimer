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
    "4gLUb5aevqhPc4dHTQ8jUWVESaEJs3RfMzECgUiQa3jwjKfWY1Ch9nBUwxrr1dC7RAbZ6UzLaKN2Q2BNbDqeFVML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tQ3Z8ziW3ZUjQBKA7LhD26B8QKxXM8ZX9V5Q1QTops5rPGU7ozNkSVpzL2iuTRjDCFz6J2X8Wo5QiKEvyN6JBU8",
  "key1": "5RV4vFThqhfwY6QH83H9qPEi7ADHhktYrpgUNbncfNXEc4YNpD8DqTFXJzqhtehcYWVFThAJUadpW2uZVA8djNge",
  "key2": "iKYDJhzpP73fkuXerN1DLqJeD37PEGL7HZBFzRukymv87PqctJaJtQjFbEncRKDfrhEeu4uTY2cCz8SQ7iSnrM4",
  "key3": "2bW9h13cRvsd3NJsyQJ3x7LozweSPpNbPQmFXzFGTVQM9e73twgiVNb7UU5Cn32jnnXCxNwSQ6oVT2AMxBa4KxV8",
  "key4": "5YZ7RzMcuy6qAUrJ9nhtGQ5LWAb4CkQdi6VLgerQpBiVjboUmodpLtiR6PpSwnRGqd1MQFRPhkTvULW36x3mCJGe",
  "key5": "45ZphmKvqaYTiZwdhLZoAbZCD5efiK9mmWaXMWrHDfdtJWX2bXPW2ZkG8Ap4E16VE9WmrpiMFrnCYmuPoTEME1Cr",
  "key6": "NuvbC5YRUCR2A4hFqCRvUP5qEzrSvkDNS15xwM94jQc8psCeVeCrUVmDJW6gB5NHBpt4WLQcfRPLTTCMKHyDK77",
  "key7": "MR8aJpBspE5Qv3K3i9d9GVJHEZ5HhDnXuiFSkktN8CyzY46dodag5rFQsCNx3smWL1mJi4GeL31wpYpEDY4k5Aj",
  "key8": "5JFpCY4peMnY2p6bnX2K1V2uBbhAtYjTzyNpNRYXHqpCQdvKiSVL22bjP97WT3uRBWrkUU3PHVhkzjfoAStPxCi5",
  "key9": "4Lih7jd1Df2hH7qwDkY9ePf5qTTdXXK1LZ8MoRey9atypVKkfhrL7v55FcNYiWHLpkat2Uxt6B1GKFwBoKDBbtg2",
  "key10": "3oLjPAcCe6KDnNvXCWm1MzCk1qMTDrSS9p1xbmC6mRgUNxeP5o5RWefF6EC8R5LcTUMejY1Q9zM7qLdPW8T6RtPG",
  "key11": "5T3WU4daY1noaBtXbqgMM2WijuZy57MXzk9yg8CBtqCKu6GVE3PyxiZck9NUN1hmPPQY2WQ6B6nvARM4okfZnetr",
  "key12": "4T1yYwn8rkuGLdukvMo9JiMeAiXg94z6MNuAsGhc411bSYZK5CZbcgyjXzSx2MJ77zfNcG8q5DSYujRFVJtwJ5Av",
  "key13": "VUtgwxMB94vf3Lg1M9YPdA92LVhnKicfHiFycw556wmQBZY2EASsaYPBSQN8Hh8TJntb4oNpzxy3L2sA5dhtvUu",
  "key14": "2g5stcFkdGJiqFw6K8KuhekipBB7u3noAdgour58FecpwSth9R4P4Lm462eZ33WaMkwQCBdmSR3qakDgaks2daRf",
  "key15": "ZeGUd8W1JKcuUEVGHoMcivBbJ5kgQzEFkv1cwbzjsVhJLyKGnCZ3NZaYgzDQHmPU1ekw82CtHwv8abbc1maQi8o",
  "key16": "5gV1Qee4BVBax3UX6sFMz3kWMyWKY5ATPMGYtCP86qySGQWYSvaXyVzRxJccYXFUfZJDrX1JU4bt77XXA1fbRvJU",
  "key17": "2d7VBD4JvGTN83s4oC86bvAVb328m3xyhFXCruQwbLdA7DBQXzAkAzcToPCsH1Ch2z5a41JfnAFZ5WdTN657zcfy",
  "key18": "RJNZ22N4prDYJyE91sXdJfNNqnZhbyjKG374UcC3LEiMo22ZJv7vjnU1kyQ49zYnn5JdZxHucfZhwJ6vMTo8JM3",
  "key19": "5jd951scVwKWPBb1TvoZ5MykMcaMPXyhLhSr1Hy8eLWQTV6HcRi45UrGwJXwL5uqzR5HrmmLgT8F1oPc1HW5hu3m",
  "key20": "3vWewwwWVr1TsYF196AdkoPLymYWK8Qig1d2tquuy4nhgoQBkpUuNbHFyipYaHBzdWH2wamjZH7f18DtdtH5bVP1",
  "key21": "4WJah3iEzBaAssFY6zq4rufxmxQ4Lv5g8pryJCfPGEiZx8Rf6meBGvPYf2hjRcatHrHuQRkEkuqmvyj4Wh4Agt5W",
  "key22": "2cxb5obydTGjumXx7eV9EfQjXHBtRGnxZfJXhypD6Xd9bEqKW6ekywVPB5m3MLumJ8dGRQnzijnmmjX69YJPh5rX",
  "key23": "3V21TrihQ9E2k35QcDSDgw3Ajt1dbfExe9NRBA2PvunyQfFA7s2FYZApvoyuHun7YH1i6n4xU92m3YsocYyAmYSS",
  "key24": "56cxsYLGj5mrTVitKQ6n35aPsWiNTaxV3HqAZhwwjBnWLsEna3T7ZDny5YNiVAwLMVSfGggz7rFeBviXPmF3gH4Z",
  "key25": "4zgrL72W8vu7pSgR2Rv47GbGanFKXc1GoWMumBPjRGeJ9Xg4T7E8tq51NHVXKWYTMqnUhR2U1f2bx4DZRW9dapHt",
  "key26": "624nhnBXVEKgnpLyjx2ct7nhxhkHGtCvBSBSURTzoio888JhqviwRxxSL3JEkzULLfxg1d22nUdXuerb9WrTbAwi",
  "key27": "5FwtMvgmMweYW7WQ3NSHcKyfdD84KgQQGLcsnfCkahJmPAURPkAZyqPXeQXFaUcGD8J3YPrbgZ3j2Po3YsssFY7U",
  "key28": "4ahRt4LSBs87s8tujubfFBUoHfddvegjP2mAG7VZcd8oaCBhR4Xb5B47tpD5XmdLPBVt7A9JMapmRGT8jUdNQCd1",
  "key29": "TVT2YDWCSj9XqnmKabgDvKh6tkkrjvSS52SS68pmLoybosJ5mLUVvL2qL53rMYSmPt2GM2HY2k4X51WxW9RZHH4",
  "key30": "427wmU8956v5uChSxxqr3hW7JHQVtG1QcNLMoKzR1tvq25dP1ehRLwzVs67xyU5WHGGu3xi55eLWQ211kTAnKaZX",
  "key31": "5PmWLrzy8n9oi4jPsmeigv7TB2ALs9hnWx8Mq6E6Xa4vaDexnxEJHpNzdGbeDGzKCENxGA3t8JktmAke3pVdM4Yt",
  "key32": "2deSXQ7x216fyDMekiRabSHfXHqmMVpM8vKjCJMfvmhi7q4sie7sDVVQ4VZJ9WBJCCLTwv9HCJmacK26nB9J2cgN",
  "key33": "CsWi96MFH61xcNNTNep5dzBTLjJEHGJiECjM1kwovqfeMMXEtJgtBbocTk9PhHNED4gXQbeKeNSbiZt1g8u2nmV",
  "key34": "5jyK98iSr557DYhgeCb4hxCWG5dWWujGK8q9Ng8SLhvAz4skyA9kP66jkRRTaxPzbsQdkumB7ETr6ARZPYoVh5Qh",
  "key35": "4EzEGsr3272ivz95eABg39bqd2avRJdwyc8k3DV3J6xHpz11zdiD3KPoG3WpkaEdf84PsUGixQ5vmRmXTGsKe4w4",
  "key36": "3MSjTdg1LYNjzecvNd5qLVhpVEn42EjQsRv5ZhUUDwf7jt8ibKKU2rZgabc91RPs5NAopBMmiPpuMQbKnbGThnnG",
  "key37": "4VoPd1GwLoLfujFAkzoinEGqQbY9m6MF9nBTDK93xeeTCxXd2tXy4vZscFjNFzhQbDZkd5GaGV1YCrUme9VGTmvD",
  "key38": "2fvHi6hmUubC4NRJzirXcxquYxL9arxYBkG3QJvvULYq3FT3vdjpbpGxV3WXftxf8BzkANGFavU5sDgUawszU6U9",
  "key39": "cMze11o1Kr9YoJf9mdgBcrtxymEHKEvUxwEqMwpo9jTA9zjhDyRQdv8oTzKSgzkUTdMYfymspS8YyU2eFSGhpVm"
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
