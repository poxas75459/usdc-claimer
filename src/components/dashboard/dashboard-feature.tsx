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
    "2SJt5ctEm4WX3LvdjiRk4Y4HTk7KHruvu5CqFtod2xXa7urjNECJEMf2WHspCuE31HeamEPA7KcDKTndpjb29vjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yEgSMZZL4SjauyLaFZcWkTqbYKJfoDZ8aYUc87vAKovEDVrDH51kZqBZSMSRzf8ZN6zSViC3b9X2sHiBb1Q1X2a",
  "key1": "C4Jw8FtcunVX7PV4hJWJg645KpBZzMEdY6mtUYjHeNEoNDBrFA2zQ23qieS9MpMV7tb9bt71xQiucXyQ9Y6JEkb",
  "key2": "4vmTa4yJp1KFvMgHdCxoMxWJL1BTbcHbxPd4izVJMQjSnzchBtP4bRkwzLD2Y8QDRGQnxmqVbHpeaFefXiu7zjHc",
  "key3": "3UnouScu5TaeXnGifakjpcuX1arvNVgFFgDJRiSguHavDtvUEjkXh5qWXrkUQsrEY2b3jheb8zfCPEMDARxiiv5y",
  "key4": "21FMLqFonbYs97Erb4JqFa7ftNxTVWMDReGQN9RKEg5eJcBGK2LndzQQnuntQynD8cPZAPWLxE4v5Q4QvtrsC6AW",
  "key5": "2cLkLVvXViUmCRYL8ZdefFrLAarzQY13rmPiyngPYZhx91nG8PeZp3pDfA3X18NKexJSwJy2k1EFpXZ4QojsTXNp",
  "key6": "5og5YSJ5wDmqpwEtad5gfBKuCCrfQBKSQGspw3MEewwB5fVJBpaTrZFrAsEgsJ5zVNFuyNLK3t3UFMUPS7r5EqWa",
  "key7": "5qbM4NxqTfmMxNR4Emwd9dj2yaeNNR9Gmnveq1FYWV3DuXvMKidTJo5foqbvsH98KisBSepxyUXsRKvdxDw4ReoR",
  "key8": "5egj3SBqD4V7oztPcZX6s5TjjZTzmx7abV3S5bzF6uxwajT9fLfFQrNmxjKs7UtQmhggDxqZ3uadevFZWpfG2XuM",
  "key9": "64BVpT6qWLyxPuAPW3qPeNZwzN15zQoYHQyjHpuzvcNYw6J64BPdByADYY421NyrVCxyo1WaK694Foent2vRJ2EH",
  "key10": "3ZJdUNtaL7jZfVB26z7sqBzxGAZZyTWrXN42WSKtJ1BufDWAyNpfZwsJKDQdLjhdXmpQ9VCYzKzqeMeKnza4BaLC",
  "key11": "ahfSoXzKXFgUdHH87GtzUKX8kF8LD5vMWutoYWGoJoSTmxp2r1i3oVC69m621AGotGmk2jsed1FP3h5zPrSBXGo",
  "key12": "3sq2KUX5RnwwxC4vqcd7yKXYxWywXjUbnfVLMSP5jNHatd9QaLtkXbUNhjVC2WKMKHP1gZcCWXQ97S3aJiY6cN7a",
  "key13": "2GFi5ygGssVq9HWn7VaCZZocgf2FT7Wh3WXJJ4dhBBHEHP3b9kQGk5Ew9SoAxgRXBx3jvVQQMkp2n5r8VxxSS9Ut",
  "key14": "2Gj3NMMGiXDBmWg3heFCNrXZE19AHaLnocn8PjWjm7myMsCnz7JAcucitPmhSXpxoE1dyRwS6tRfJYWpu4E42yc3",
  "key15": "2ijD6t14Vg2fRSxZm6LuQT8sgPXzgoTnpmiBBvxa45aSsq67zzmcmTFzFkCeRx24nubKEcVCjSsPMrxQykSsQfLy",
  "key16": "34r44bjFibFzZ3kTFbBYVZrdFMLN5G1p9ebERY42YgVLUSkFzv1QjEVFxJDpeU8pRtnRurdwDBQ3Zc6uScdKfxYA",
  "key17": "5EocYhmpgJRuwJbxosm8x8Hn18Jy47uxebAC7MorYGo5depRLTou6QUvMkVWDWUvcL4e2VqpVmdAbGBaTCpKeGmQ",
  "key18": "5mxJMxBbQkhGhBFgh1okyZqsqtvqPsJqMqNGAXtHN4ExrYeepmrsg7o6fcTRHQxJqZ4GmBH4pDoXB6wfsnjzzNbz",
  "key19": "4BEuXEWKCHzqEjM92P3H7e92wcLvUxL2UBcgrridGXefSkXrqyHyWgAmgvfNSWrdpm2QcXNSpdQ8Zou4ktf294x7",
  "key20": "4c7xZZx2VPT2TDWMAnA85CvNc3oHpr3bzx5D3eTkvPMfrgen41eqFEAnqgf2BghmqM5b2r8gaGnz8t3E2bVyuxET",
  "key21": "5iQMHV9KyvSzj3NmC6m5TUv4bH8dc18vGkZ9sSWDEJw5jL3i4BhTXARf1cufXpexYzEvrzDfSWmw5ukiMBb8gorf",
  "key22": "DeXBSihmrJRR3T2xf2QntrgagEqBXFeWCCXdgPWGvAz2tF8ycGVTsAfKyvP7NyJpwbCw3yQqBEfbRJ2mqi7JzAD",
  "key23": "3BEAcnk9ixr4tkAGVi9QzjVrWCECYEJ9RyUELVWyxajPwvexxMFNpF5oYaWoVGSfMPB3RqVtvnZrygEj75Cwzn4i",
  "key24": "3mxtf4x1ji6PWLhmresnH4yxDZNS3eVapuRL3gZwRafCaDdPw9rxeebd8qMvjttbYo6HNxDkvHyXa26gGAJUj7Ng",
  "key25": "2hHcJjkJdCHPevmbHmqD8nxiZ7jU3JeYAdGDEBTba4oJ89XHzWn8rJcxW5eFrPNkkSXWsepqiLRUB6Y3ESRQpV2k",
  "key26": "2NoomyPgmg8ZwYofudftkbV4WzYENg1RaghgdRsdbdZyHZjK6aA9oXo5k8MZspwwyB5qdN4B54exdK4m8roC3Fs4",
  "key27": "5SUAFK34LFbi5SiNqPbzez37jswxY5XZXiCyA1xNxYL25G6cu31V8W2ZaVkqXNajnDeomAMivtrqJMWTH1ofoqp4",
  "key28": "4B6jDumMdJiv6B1LLxy8simFabYaB2cM2scS3R1SjrwYvAqLQKxKrvQMGSjinXGDJ1paPriWacdGMBPpoa12pnXM",
  "key29": "3YosToUMZtbX1zFysqVF7gumtwzVj1ovQfoJmmKqpJzy3NfZ5U7Y6BbxmuJe3wAeXRmV9MRbQ8D5KBpr2xzmKvqd",
  "key30": "4EieyRddoseuRuVY3hYxMVzjjTFZdx5EQWvv5xZryjgsGQpYhuTMV3iwp3Sp4XZs6iSVkjLbi8adA1Ei4abE2ETu",
  "key31": "2mbTDgT7GvQVc1U5w7rfSLwekuhJ5Yg5LisirvGeMqeV8mHgBcYE5vE8LvH2DKWa5zvKpQYazgy4gooC7VzkRrLw",
  "key32": "CLXwGy3aRfVy48PbfMQBxd3asZQF5HuuGGeckR2eHmmW45NEuiQTUzCYukB7txyGvhDQkGxHjnMKDBdH7dAMX1D",
  "key33": "53X3VSP4ubBo2yfoSUbgw1jzpuWnzQULeoiiichcKwBh5a1Cg1P1VcQgf6SdZwUae8GzFR9Qya3Utpmq5XRysd29",
  "key34": "4qhuV9wNdAnwEekXDB8319Y2THTXAnSkhzJUQTkzfd91DJNmRqzuE9SVCdkQ5CFK2FPqbKiWkU6v7WC4xdd4eDZU",
  "key35": "2JjaHVwUC9fu2gfWvzRe9qi7zmRCCpDmHEJv7oUAcAP1hrZPynrZZg4XiTZ4aXuDtHLrQKhT8FBCCRSsfxYkpAkU",
  "key36": "2KtUJswDdGe6euXqYsbPLfXWebEvuuMmijMMY4gyC3QeE6Kz5nENm7PypKGSDryX6q4K2TWQtq78mxQyCn9cdNGd",
  "key37": "funykKgzbbLAu9Lww9axm3ME9MTEgRByAAFrHkt2eiTXeYo7Lt995PewpjUpaAHfvZZmmwZJnpohqaWKjaDdwBZ",
  "key38": "Kue9CVwK7SyFxu1VfCijPTyWNbbZkYgmGtMiQSpJLaWNhYUjZtkLGQLWAjKvhj1Vb2BLMunP4oKTtV2HDzV1mFR",
  "key39": "4snwWXigyqW1WVx31aQkdK6PxLb7Z9EdUKyBqVME9gkHvk26oYb32w1bXL2aNFeD24taopG3humYESwU8stVwnN8",
  "key40": "2nf3gMcH66TkTfVgWKAwtd3aLpSxeYuoVt9wSnUGeeA217a6dhyt7gt4Darc4QJPx3MbUxCPWMNz3Q1c7tq4G67i",
  "key41": "24eHACbJ2K9Pz1S7xzRSABSbCp6GvuSQJmScPsckmvTGBC3oFJbhz3CGi2ABfZXgf9dqKGQtUXP4AzfccsGpUWuJ",
  "key42": "3Eas8cpSQi4vFMKWMLu77RzvZoZ3SBhZDnVdPmrfFKrst8zt5zMdXotHM9vVZpbSDfchJ82jbAtQ5xz8H3qbMcAC",
  "key43": "GxPwMoHWYM2LVGPgi2irwKeqYEgxa65tz7Ss83tdHqPfcp5Yrx3badss367YrG1cGGtxbPiaUrbAhXxqmUg818b",
  "key44": "23vsy2piRWGPU3JupgMGPYKmpWebM9oPwjufXJp2tCaYSKUCXXqF1uCc18ipTK1nA8BhinBvyWyR1PBGykqA9RaN",
  "key45": "3ErrU92LiBRSVQ4bd6FaWtbu8fCty2FxdzkWZm7vGmr7yXsPNFFRaD3LvxutZCi2AGFdq1nftrtnYYb24JEhi2hF",
  "key46": "2KuNJnk84StNgtxT5R3r86m7ERhLPojZaR4VnPf9wudFhWGBUSpKxW9Mirn7DJVrXhoBxMzf7kRmAsxzrtHHcyzL",
  "key47": "cfWLH4R2tUrr9fEZ1dp64CgF7L6xvJVZPtArRFTGExjATnxrUQnYuMj5XYVqd3CF1HSSfmMdQRiV48KxaSpQaAQ"
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
