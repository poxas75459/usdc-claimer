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
    "66QXvrSMvKY5gsvmAY6yrefM3JWpGjzy9DnAGX3C4FXw2cjMLyvREyvB5EuXtsnhhPnRcWUph8PTLjUjYZbXc79m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZTEoGS7Er7TRR8tQ9SUJZAkpjAmZf7DiyAddRxKj7eoGXyNC1LtZQxU2VggTFuNz884Wo6G6TVBmga3JQmoNVT6",
  "key1": "3hfHm2G5itGY79wSNBwFed1eDFLRG46PGr1exY3JybAP4BeeCY8jwpFM54L1s7wJpC3LGaBxJCcm6y5RpXJ7Ssab",
  "key2": "4BB2X7vFW3TrHKsyoThsrJn1JYs5a3h19w15mgozfuL7os2FpXEY3aR9jdoesWLKqvjg8rxzdbNSxx87rFS8Xm1",
  "key3": "23E2WXnkeptAEkDXBayshH8MqbJqjZvpKrXCXbV19hLdGVngSdAN1Txw3UX1i4i2jzWcVtywexW6LVc4ZDBvEjC1",
  "key4": "4MeuTiKwu76bEGoaj8PWTowWGom1fmDCjewhbaaDxnkh1dZY4GhJrasmC4hMVtgNeb624a2iXcNjyGuhzS62bvCu",
  "key5": "gbhyksjZvSwpJviGZNzirshGAz3syvtRyGket8EtGfqYx66MwyrLLJZ7TY1L7fxiSXAMEkrrhjeenWNdoSS4Qkr",
  "key6": "2tXLZ24DK4S58jBa9Hj2okNP5eWaK8gYqsohh3fP1PAMMDCrpTurgocpVKHB1YEvpVeBHcXzfRyU7MiRtZ7c2Vsp",
  "key7": "2paXpCXsRpBcE4SSNntaMzAu5hVkC7akZA4upk8uGTN3xuU4JX2wCTXcTNGbDpVXWF2YLBC9QnSCXCkx8sqK2mSD",
  "key8": "zhjA1ZJrMBVPtDEMuacfyoiE6XsTpudcDnNZ4VLQtNJCuYZFSf9fF29LW1CaWpSFUkazzth3DmTv339cSNsGcTv",
  "key9": "2S36FiVMtSTCDsPoXzCEPQvf7RSfABzSqwS8pk1Gcceev8tFghF72rf3ncuea1fpuRMeQaQQJ1jfLLaf4pKuxYuU",
  "key10": "2skF8hFCnKqmoWV5VEBSWPZUWnC31HXusHqXhmfjkhjPd23iq76ERMHeqQqFL9jYLFvxjxMQ9qyUcMsryC8KN6pC",
  "key11": "5MM49KfVSKPn2BcmzkmXEN9ZqbGhVjx8MEKBRyRzWhGUFuzmpCMDLfXu8MKCD9Y2AUiFQFuJpwY4GqWFaFjFZL1k",
  "key12": "2gY5i9TwB5NJQqDDyrEGNgkgHopJuCMEULiNSYGoGf3sbsb9zv2zPMVQ92egthnjFgzhpMZPPsawcLE8CvfuSuRM",
  "key13": "3w4N9Ga9oMpgLCSyZQEHhsRLxLexxT2NWhXWUv66qpY6bEFDtQNg7VxmbFsU9ts1ro7kYvm5sKZiAdwC11mpgRRC",
  "key14": "64RGk2LtAbvoHMW2zYSLtcDXm4XMJW6pG9T7M52bQ7tbPD9yCgyhmER3iq77X1SRvzQtePGcH8aZfHbaQQGKWY7M",
  "key15": "5Zs6rptgnRrvuQBNNVyaCuQjYpTWgx1xVhiEmroSdxwTdgbNWMZT81VfpDgbK1fDJLusp1sCyDUN4dfhnqUjxptR",
  "key16": "3vY7htX6ePRjBNpszERxgB817c7daezBX7ZdbtAxk6vE1FqHLMsbvegwoZijvaY9F5heUAfJeQ3rZo5RUNgHzBie",
  "key17": "2Pb56nwYYf349F61NAbqSYMviN63zWQCrSKYxDUjyHrEBqNDTaWCdxpZ8qEHGAvhduy2K4b4sK6GR1Sy9gtHHS5m",
  "key18": "c1ErpwXWocBVcXCfkZ3gJVFFLLY5oshC5WpRaJu1m9UoP8tPgszy6rfpSoY4VcSgENqSG1ywDtXsvH7Du1Qk6a8",
  "key19": "3zPFbYoRD5XdHPJVkYaa5S4nXv8BHs4VFfjJpCQXhbJHaBXP7uvxvDate48WHCtuRYGTGCzbEfVgYzG4uRR4ZXXE",
  "key20": "2eBveskYcHRT9jSUEMzyXYVdLK2YD81GpbHQPJUwbgB1T3E9jBdrNHT2Sp4eQqsrF2xGfbZUrqCFt6jQXPMRcDm5",
  "key21": "4ziAVk6fXuNPWDxGxE6C5tTKWns1DxBiUw2Q7ZdymvGQbQsZSZ8BZvewkFWXhsH7iVRZ3GUF93wPFK7hxVskcL8Z",
  "key22": "2pk2b59jCaAvmh4BmMXi2QM6QuKC7TbHVSt9fuqGJ1BCuZFRFdUMMLaiy8N8kxcdWUoz1dyyzpyXqMN4TTrcUowZ",
  "key23": "Qhuk3exeu3cxoTp624B6V7cxNX7o1FdmxHARzovtS2NbZ55qtuXecxzQbhtkGHuaWsGsjPzF4tSVeXdSrWSmJkJ",
  "key24": "2q2r8iBZ2aqwZX44R8Kmu6dPYj3cvshypkJNiWYtprJoc4uJ8MBw76xpMT25WFjYqFjaDHkFnoC1gQCniunrBDGf",
  "key25": "4LCoMqsX4sJzfM9Us9jPxFtgkiyhKifyW2hUZ4NjKNpqfLD8UFWeGzVH63yVpepmCKkDa44k9HeXW6QsnedzFM5p",
  "key26": "N6coW2vMZ3sPELDJxxfi92q3hTmA7Tuc4qebnpfgPUcLbuPjtVzawM81zRxQDUEy7zmtCvCVXPfa5YfvAZU117G",
  "key27": "5X2cW5w22Fb75XSFfVKSiKfrXuyYjzqrF4JT5k8zAFHwBuLJypM3uvf4JchVdKi7ztSyHg12vsnAAmJ78fRiJGdw",
  "key28": "2gB52o9jz2eFSDy9YBL95MEFEMUXEAkohkDAwEWjSirZo3hYkMDUQ6EgiHePirQckfrVw327X5ssWCtcNNZyXnhY",
  "key29": "xcyLzunGe38t1pYnCU6cy3WH87kTvNVrSszvX5Vhya4jRNeQ7C4apDTpkanHrKzf3AANnqcAMKJRTZkdVXnUriH",
  "key30": "2VcUHLN8KTWWnKhTfb1cm8cacCiC8k5V59FzxNX9hX4zwww2KZr9w2pDdYgZ4oZXDhAhtp7ZGHbgVGwA4gz5knnD",
  "key31": "2MoMfS6FHmmnPMqx3HiYPKMRiQ9szxatJgZhuuC4MJFCKHoguNDZ7V3vsjL3wHUE5SDeNbK62JgV7bgy4b1FsvVK",
  "key32": "3pLJQgHJD2oyuu4NYpxBKhGXxUxUzHPaeyoT4hQdDfwX85KiHg9xmD8KYCnPJJfkSFduBS8JaeADxT9R66kZT6bE",
  "key33": "2MMpDmWEfhZ23SC8uXkhVw3FQuJNrf2qyLkQNWACjsQqsCSZeB2mNkN9WonpFEJXgju3PNsRabydT3dSJgmMV9Pz",
  "key34": "3WJtmPEQoBhCHBR23Ts3o4nnUi6uFznWsW8KfstPrqogx8RCCXGBzPwbGKT9PJCdCT3YBuzbRQG15inwQBUrPES3",
  "key35": "3UaD7TTtZHMd67C78PzRgCcPD14Aekt5k2Q9uyf4yUzXyqSkCVK1YbsmFBqLRXXFx5gaT3eXGmg8ENmk3fMLoYVC",
  "key36": "5SCaRzWtEjKBnve6ZcThCQFrqGYkBSVeKf4fBZLWkyvtpeUjEHwU85aBCCM5MfMt1W9LQtnrcEMVXgyvPXjzYyY7",
  "key37": "qo3svSyEYU6f5siuAg2MqueL5Etzq1bT7YpFJukEmx2WYwzffhTgbCW3FujGxg4ytnKngj33J7YnqEWjAyKrAw1",
  "key38": "2pKtUBgVWrxcxyKytu7UCs9rbbaWNx8sh5FzxsFdBeUNgghSKnyk83XLaRrwcHAoErGQ66CWithtecRwgTVbggj2",
  "key39": "5xkRa8eKG99TZEpKCcc18532ty9ef4no4eEg8CBCfzKSXfQrw25XqFgW3G3rPRTteBRM1Rk7HRVZGEtdXr7fzK51",
  "key40": "v6uJsGYn3nYK7qHcxyLoFX67gKvai3FXH7c52xVWWiPs5g8on9hvAQYBNMY7CM2KTPjkke8ShwHKsk3jrW32CbX",
  "key41": "28m2E4S6oXC1qJkRbEZW8mp7R4mLbKhhB2D76gRnGsfHDvLsJfYc2LGTNEgfVYi2kygTHbjfn2BvpMw9mXUw3EwC",
  "key42": "4apCN5UjTVtGwasEQJUqsTpsbXpxHVYDmQKALDx1bJwFTEGAzDJF1UbACLTfZHYuT91c316FjnDd1CKLEtjSiqG5",
  "key43": "4JYMWSZ7PkXwFGjvNLfmYajYXeRNprNLWbNSEM9BfKAWQUoU37QoDBwH1pFXVr6eB3dMQENvtxRj2DomX8efvGNo",
  "key44": "61nDTfWULwmnGWruVxJ94tDZt3hH6Mku5y8DRGPT77wih85Wiqn96h1sSBSXAtDABxp4xRxELffbVnbtNNTwgnku",
  "key45": "5bAkNnYW8pzW78AZFigsA16ptpLD7CStF1x3zT2j63LE9ypmG4tJE9Z6jLq7aGSKXnM7oi3efWSV59keBw4pES3P"
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
