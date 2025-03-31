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
    "2eYif6jgEd3dASVFmcfBVccpiaYGquqcWyhewrB5p5qH8xBC6DzsaMrUGM5kuYAc9wsahX6NgLemjCqwiRKS2UjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uxzcyfZfz1Qh7mNAgGmQYYt3t5raSJFmcWJoc9mPCQ2V3GHpVJVKkJRtdXQLHjHsM8FCXnMePn8iywVoEyt9shr",
  "key1": "2hA7rsmSWgbq2jiTGWwAnHkA9iZS6VQPaLwYJrY2LB4QuZ1NpTAwMWpBkLMA8jU9XKNTJKmKpYVREJvtR7CM5kjf",
  "key2": "5e1dvtxAm1QR5yhUHZDSk4ZjutWBgGWrgqTV1c2L5n6piEUdXvDn32ceZgtcMnBdRLsY4ndNdoP5xhJXC1zqhSoR",
  "key3": "21FbzSVgoWdRjjUtorwcYQ6wRq2RzeYAT97qmVdjg3npQDj1nzyBizn3bB3tigACBigdntTg33aX366cFVXSVgaG",
  "key4": "5Q2W3aNUs6eZp59HQj5NUKYtHFoQj49mp7LAG6kEtj5Q5XeaTed77riE6c7W79qjfyhu14j29LULdhTXiqH9YKeg",
  "key5": "5Nx9vsSgPTnSVXKTU7YJth34c24hC7g2WksAMsb2QM52k1Z3mQ6RzvY4vfCGBh2h2gPuYhbLGTGULQASrfhTp8FJ",
  "key6": "4o4aBczby7KYMoTR4XvpCcJgBCWTUAMvRo54TQ6NAoSm722cF6wpavw4UCHJyayGMNm7q84rFe5RkgDoRhFjPDb2",
  "key7": "3yoUcwGb3hoLjrcMq94Uzw8L3zJ7nVHsNLET9BJaCSshWpvrwHAFL5NtHGu1L8yJD3agy2KxVCsTKnTNyb979FV1",
  "key8": "31zTYFBevLgYjKhpK2J87bm76tDm7WjPBN46pkeC7iuvSkfroJQNSbWKy5vL9vW2BtNQFHCsHqjUHrZGheJR9SFN",
  "key9": "3WxNqc1am19EFx69CmY8jyFei4aXts6c9vV33Zykh7DDcQxw8T4J64ew8xkAfQuVD5nNFFCQ7YtFnBvGYFxtjsSf",
  "key10": "64hncp6QY6QnEoDB6NzJhWZkqcekfSBM7MeuGchAf188oUV7f1Uw2xv3jRTSsAC3j6QDJRBXjRoS7QDCQEbgkdZR",
  "key11": "XffDs3RTynxZeXgFjBSuGNEsfi7ytWCs1kjoQH4GPS3mZTFVzFkM1S7h1niu1CCjiaiuVLZqeMHCvrhjZ17dEfz",
  "key12": "3Szu65NrZsLQd8sXTvLJLtEqLiVU9TSoFh4ccxCjQGwY9HxZaEagNq94VUp1S79s7s6KKaZFEww9AZCqnHLbBafp",
  "key13": "3Nx1UgXYYjt4zLGH91GNVgsn7Tfc2y1uiBUDMJup7rD1JzrQ6jCiAidSjPA3jkifBnKGGKU4ZWUNW6XsHbipqG3F",
  "key14": "5Kd3uTUnrJWom8DYZxaXf1jZurM9Fz2VWua5ayZqEs2GbvpEfQB5mYeuuHiCk4D51npSfgd8YrTBQf9A2TT7Thcv",
  "key15": "pGKqzDYinPpse8u4XZCSYMRBZ7jE1jgPaUUMsLAu7B7W92XnELbhn77MApiFLnxvR6ti27vFj9Gd2eMu1d25fqo",
  "key16": "TGdf6SrCsd4uZogpUiFpSP1LyuQrA8YQCJYHoYa5SJEPCSoj79qXQELDDNTj3dvE872T9zyWbLRAHLSavJ1yrVP",
  "key17": "4WmTCcmkk97zWjFwMKozevcVGwZbPDiJUtRnrzFX2LsB9eeAPq4C9HebFNuMWyBYi2VZ7kQtiPFrUP6LpEmsMQNA",
  "key18": "3CxC72E5NKrosXbdy7xAj9zsSYeyTguA6QKZJi8bLYMnxWy5PdibswCvR1Rg6i48sXF4DqzQq7JddsGWaTGkCKnJ",
  "key19": "3UHCyu8Zr3seeptqMQsxo5GaGek9LzXLwjohyixksX4iCXZdvisBouwyXXMCgkRvJT5FrWbGgLFbN8V92mRWYMkW",
  "key20": "5JonadQxhXHHvhExWTn1sw9uRfoRte6tPdAsC693eUHyT9z8rYJaDbMJRyR9y3exoGHVQ7Ni4ZXAtB8ZZ9t92Hu8",
  "key21": "2rHfDdQhpZ6oxB6YHiu42cimTST9tCqXkyVNhSnPBSJVnc4TBJB7JouKdV6rWHpatUh4jrK2GRMt1hNsiQBPRRGN",
  "key22": "3iyEoR3TRnwCuNkc3473huvudaCoVQBMHhjPmUtein1YzroiEaQYr6ho3ZdhWvQKwJ3GXWBDu224bj2sziDjkYwJ",
  "key23": "4eTpWYooN1S6narU6H9XZe41MGTF5gckwjsDiANRMC7BiMo8Ly4TYXeziZQy4ixcAbrCnZgtgC82Z69X5RLhRoM2",
  "key24": "4ArvjfUXMZrptY3YVKevK5qxK5SaDB3rZR3i4c3jA3VNAnravFCPeKQcbtPn1MgaikwUGan5JFt119wrhP6MjMRT",
  "key25": "4GkeqxhBAgKVrh6Nx7DGE1qByWi8gETMCxeqyF2z1HQuGNfni8aae4f5d5bAgK93uTWCjBcmFeXcQJ3ukYc4RyVs",
  "key26": "h6ATdX6aHvzKNTQWCCRh3SyU5eXwRbBnd997PTYYABwGQiP6BXpuDZ5xrjQGcppaG9PPxeLznDnvtAt6SkuhyiC",
  "key27": "4Zy5qRPUr6kTUn7si3pM8beRucN4r2NCtXA1X6bhSJK4DdjB5xUgsFKwPybTy5qYyRHpNWXbMwzFudgeXyaKoqPJ",
  "key28": "6YKbyjfYug6TBPkYv3tHS7Awip7HfgeZpxgMmPZD5txu3YeQHxbpqcqe3SVwZJ4DgEgDRSMaLFBHNSQRVs64dsR",
  "key29": "39BJbiwZoZBuEWyXZwor481MP1CocX27zAJwnXQUU1uYJkmfhqwhagkW97tJUFyhKwrSaTHAPuc2FyRBAnnEqynr",
  "key30": "5NeKdhn2mjHSWHrYoBASotjhT4gtphxN1SPcqN7b2cvfCqAeMxvYrTNtLDtxijWTabsCAJc5L8gaEVnfCKmpH1Ww",
  "key31": "q1ztgvTjePXvP4Pyhwb2c8DSwir92UoZoyZBNo5KYMijCCoPBCGeZkVGWPA8i2LFTchi4GcGoRbGEWh2JF8aKWc",
  "key32": "RNYMneATseniZxnqEaoMo3RBvG24MaCkQGuNkKbesoJSfPky5i5nDK7EQeNsk2b1HJfXFfCt6YBPUszkMKB1qXy",
  "key33": "5KxVrGeBhMK22j5AHg21TrrQa6sRVAXcpwySmF3Zg4EPcnUEc7LQq2xF87NHkarDVzsU8Qf1tyYfvtGW4w1SDhxk",
  "key34": "61WiuiPjEDuSELhnYH3DPs4PEeXr2EmPFewnN3pyFsqsFTaiACPAzpGKUrjWdigtVH9kxhTzVHWb4XeLt1EEYCNX",
  "key35": "3f7jJzGfxKjfHSaLePD5a79DLkkzcUs1MviuGexS4A2BsaiZi4may3CQu7CLR68TSCPN5s7ken9oDDb9NzRXCrTh",
  "key36": "5MASnpy7FBg7WpVNCfmwTRrtQ9grzAFHJJp6eXJVKt61uMbsoofkyfmBkod3Ra4TFgjT4DnUCwSdejYvjCRDfpbe",
  "key37": "2k5UaebEsxsZ18TKqBLxqZoF4ctT7zNhoagZUg7ydzSCRd6KGBbgNLgJeudjb36iut2Jnh6acZJKMnMxZTSCjeLg",
  "key38": "4EhTUG7bCtHSXrfaGcFnstbcKj5dpiKMfKAwzLG6rLXE4KEfch5wKmoXRAFcimmB5gFV3A35mNJxiDDQFxfrxJJB",
  "key39": "zmqYGoNRR2PQ8uYUntXiuWMzNiWVqGyshC3X9M4aVJ55Hdy8345Vcxw9Lu79P7wtUKnTKGq4shLMzUcFQQjwELw",
  "key40": "4YFyetZRHAdMKWsQ5st82MxeFjLfY5eKihPZDynhavE1sm5325QCc5tthTQiAdV5U8wFEAjzrnt41nUNhghBQqWB",
  "key41": "3n6dBoVmDg68zKyKdkCY5SfLeodyAxm2igDTaYdSp1qe7CszyKkzuZNUiuVGyN5TGFGesz6Z1GsmwyN7dWYthYfC"
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
