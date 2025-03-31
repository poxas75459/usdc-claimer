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
    "4P6jPR98GdR3d3354xvuwbDoY5a1oFZbTh7Bxg4KHg33iJ3iidkAJ3sowu2HcMVCZzMhoA6vYrkaJ3YDtqCArA3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P53ZUJnxpggnjrzdshykeHEhxoshrxTv2F5fFUHhhrxhwP9ns1MiTdtcQGDEmQYxUMLm9t3uGNp3BKCa43NSFtp",
  "key1": "5ou9eAZvGzbCm6EHVAF1N1TNszUf2WYjayVit6UBkDubcVdykJ2qMzrnp85QugC1Ai9S98PJgrweBKfdYwoxfbFc",
  "key2": "3ASiJZ5HADr67PvkhDBsG75m8AyGGFfCiKqvB97LFZKpgLkButf5zS2wngAsyi6ELgnQEWLipT5ZPuThJdgg2cUn",
  "key3": "3EACdFs1P9k8osR3ANtcce5rnRtVMspJXZ6DTVykPvLWaVCND8Vwr6ddW6BCBEa3rvDC812vg6GE1ukPCccCZJDu",
  "key4": "3wVaSBdNdAZRjpgn1gScbuKyhE361Hd5pvE83K8eJUgo62P3CKMmnMW7BAXvDDeAj5A1XxNTyMnfAZSEGH5VgRka",
  "key5": "3XXrKdKh7b8GriueEEmFjeAgyegUrTGoNtFypTyGfYTaUNFwPcGfzuvjAETqeZtZvutLDCpEh5A617TCjeNQ18Gi",
  "key6": "HMWTy8FccpeGeEMJhHsc7MYEDRYxCTH5T3bdcBVDuP921kh3hXJXkiYUME1aqmri1waYi6XU5NRQ4Z3sYiYJZrq",
  "key7": "4ejEDCGtk71iLkfbL37SaxZfdE4HfvWnD3QnKsq3eUqVuFqv5qUey4hP5fC4ViZaU6AUdVqxgqyCouEjeRKhJhH",
  "key8": "5VpRfnKwZgBvcCjaY1Y7SQ75e6mrtsm9TJTtHG8QKthHuAvdhoetGTwXGM2sMsNrLZi5KqdjeeY2CBDsJ6swVKU1",
  "key9": "4k3QRFE5ojMDz4JydEcfnyhHyPiZVUTGfLPgQmbtNRgtbHY8qrG1QaekxR2jkNwg4EJ6bgmiaSdrsFE8H29QUfxb",
  "key10": "esjJvg3cSrP9iJmE8WzrW4fk99e4b3Pdh7fe7gs2Z9Ugk5jeM7XhTFVJDEhVq1DkffS6XP5EHK38c2roZGnKN6Y",
  "key11": "a5AMLxGXvUo4PyUY3Hn7J7T3jvTAWGnvriSPg4ecNcNBYS5TvA4brgVoxQCBGwhZbcZHTP4Bh3rn1WCtKrFmvx9",
  "key12": "2cbwVjB9fbXHcvwcHtyhPcACHbg5uEvtewdUvdJ2JH69N9BwgBYnPuUugbbtzzXWvzQ6mxeVijHrEywa9WWGQma",
  "key13": "2pKmbMkAW6dcVVEN81F2xiVhqTMXKC91eRMwPXR1hyQUyfT19W2JnsmfUcnkF7qM8xr6jTFuUEm5h5usEbp6CThR",
  "key14": "2SKBmBsqFxEw7QWPv5JdRok4XPm41TAxva3AFfA4eYHZLsa9QSP7eJ6pRKes8j7FzYfPHEYaR8ih9bmCKow6CwrX",
  "key15": "3bf85GMfmzB3h9No6DVA19Vkt85v6zgP56MeVNNTrGLkBAYuSPcLQcvp7S1hk6gSJCGZvvJEvLmJT7jxihNZepUT",
  "key16": "5jaznQVTjx93xoYrUaBnYGkPSCJzjGCmz1ov5CJqmwS4H3kVE2PJFikeiB8tMT4jbtgh6uy24uDzbUCpVrvYdkFk",
  "key17": "4brWJpxtEtwsT7eUxmTnFarvzb4hFDhpAT61gW7aKrCnh3kr5EXtiWDCc9sT2e2MuZnhvL2ujPnU45hMnSkAyGn3",
  "key18": "4Cw2Tu4XJw1uhN7QnrxkkUnEYhRhZyTMTrvgmaapJ38ocCLadUkvGoLETgzHppVv9RsZA2zqtEfY6sYR5HTZM3a5",
  "key19": "3uf2dpotuoALoYfgu4SARAh9Tcva2HRKe3uW68dC3prbm8wWd84YfZVwy5PE466aMNyNr499f7m88Wn1AZ15UuNi",
  "key20": "4JGhDwaUDLH5ArfXkDgRSNtchSSvfr7XsUiM4YMZ6ofop3J8uhJ2PNjyzP1iRQg5JCenUJi1DozCPtohaZKGtKZc",
  "key21": "2mZcciSUZkLKoWaSy2vzdgHMUm3FKvPAN5faxGpzq1xj2xE9qjK49rjcKuSK43yg47dAxNK8mzgyJg92sE1zPdmV",
  "key22": "4FcK5gecBV3jPhnxDY1o7HBZVoWiiZM8kANG4bcLL2Pga2HS6GWHYCvDJsxJBwJjGSK1becstPbMyDuGBduoP4cf",
  "key23": "2QgSUhZiCAEkU2Wxi9VdMMLpZFExiXWL8XUv8mnXeiw9tgmE9bfeSTnPofQdU99FbzGL5udHaDTjCus7Yf6QHmuS",
  "key24": "qgWHv7N5TFNxmWQagKomSy3d5JF5r31L8qp6QB78HvV3ZkUobMxjtTBR37rewDig6ptVNRD4KdmstEoBvJfGnzM",
  "key25": "4MJmjKU2U2PEo4LcUBNsgSP2r7e56UJxuL1XMuNPBxyPH32xzUSP8vuKS4yUvtmyhhjXNaJu55zGx2htfzx81sKs",
  "key26": "4au2s8KA3sErRefGDBxP2PvTVvrkwWFSheKcqn2fsZ2xQzMsPs4JQwAtWjxc3FttqYLoMhRGqh1GyqYo68MZGnhk",
  "key27": "2KT5Vat6ewnV36rVcpU7oMhifN7fzLikyUeWdMY4qTQLVqKHMDE2devq9YMXXZc1NaYJhF8PLmzHJbCDPJhPv16k",
  "key28": "298Txtkuhw7bXa3yQSVP7k719VSmpSk88oqaMWte5J34LBMYaEEtU5CUtZNBQp8DPLuMNcUbz89KV7xYd3dkseZh",
  "key29": "326YJ6mvp4WmVKmTpPjc4BNhJ8u6JPehcao3DMuxbGks5xCj8rQrqHg6ftfCnYJfhF5DPBdFB4Ji2dZqh8hnGksw",
  "key30": "9H5smmKvHcqh79gnwgyUfXpDCM76bXd7LrxteifaxggVGdmbsJRGhi6Kj5aymBLZF47r8GsCfcUrMvC5phCd8qo",
  "key31": "Nmvm3jPCoFyS5b4UjgwULVFF44Kx5fhsctJdNc6rxe9JbKGWxvPuZjF91LJ1HzwZ4crjRXrocovuYKtxPzUgpyw",
  "key32": "2VRHcMXwgKxmJNadpgn9qRxSBhzKdTKzVCn8zYAaojoHPRQUfpi7du5i4ML58R7wnKsNaQfpQxnoEtC87MSvbSaB",
  "key33": "4D956vgMLveuEiFAH3Eztxhr1hpgQjw7EEqFGuo6s6bYpzAiKMFRdysDJTHCcuJrDQ2e9QGVrqpofqSh8ym25MNL",
  "key34": "3cH56WbGT9MT3Fdy4nNXDhnq7QAsgKjGoFZqtpTfcCwUwHCT4APqSwubnuAu6yh9uZGHm61cabb1jx35BB8x1QQV",
  "key35": "eJpx2sv7kYskKXqDp67JHV86H1K4X1tYE6B3SSKL9MSLphEqwmz6dXbb1r7tw6NTeeUrXWtv8qA7owtcpm8fw4b",
  "key36": "4CanE73G6d4dR12RcJ4Wxu3SkUqLUsy8cSHDProAmbQZJKYPKsLDxvNLv1iCyRttZpv2grNWkFX4SwKqdCkKLYp7",
  "key37": "2YdCbTvnaYh5yRDApJpL5kF2uqkzoVHRrPTcwKRt81kuxj9TwS1SvZiz7924sbNVotMHitho7i8M6M3Ba37LyiRQ",
  "key38": "4hnPnmuuzBim7HdMuneZSNyUYyhw1TqgkcBYMY2aB6vnfvfLq9B9k1FGzehj8pnKC2sMoGNhPzEFMphtBEVZsCnK"
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
