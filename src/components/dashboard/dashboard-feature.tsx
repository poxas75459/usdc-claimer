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
    "JkQVvEWK6dabdC5SZjgQQGqsALKHmHRve8KCogNxnxgKTXUYMjzspGAHJksUGGoygLfPUrZQtg51BBmB9N7wL4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LV8vJsWjQMTCP6HM3CAMtWoRaGL9Vru7VnnnMqbAxbvydcUcGb6iZbdvg11TrNYQsGxV52NcnmoKzTbCsHEBfhr",
  "key1": "3EUnTehxRyd5tT8Pk6DzC6gdJWHiVoVmm2ReJNRdZzbvxEnAjyvs1h5dNWKR48gG2Z12ifqQ4p6wjddAPahA6R8r",
  "key2": "3GzZpiSPWFKC6Dmim7hsF6GgNAVT2oVfMMrFXuems9PutBRKGPStvHSW264ChR72Q8isHfPtiqgsgjAgVMKT845Z",
  "key3": "5LURt4QCoNkC8wYPJev8kTZQESyNCoJ85X9y289TCeeYirTtUP7qvCFp54Qyeor5jc7AX5hm8PwDHWyeX2H9vZee",
  "key4": "5KdzpTrnogLupEaYaJZy4k1yLqGCYjCwyKDbgCL6EoPjgr12SiLt91LaapN4L4CdSrNeW9uHADQJyet3vcvsaXvp",
  "key5": "6FTcepcrR7CrTXHV6x1wA3oJFTokDchf1qt3isvcPDQPXg9vUTFwtZ6Pr4CV2J6hoxM6NXSFfC3GGZ2LPm36Tzp",
  "key6": "3P2fc8yK2rDAeDqbkrQn1Fr4aDUtM27m39B3N82KnTY5MTntA1MBECsxUzvwjy3n6cizRPc1yaxLk8xmasGzRMd4",
  "key7": "WGgqBgs4wsojvngQi6ByKyVzcYMh799Lo5kCeEJj83zvpEmjysiPGEQLipUfyTYpBA4136bVw4pMDMGjbGQ1yF8",
  "key8": "5eKRVfvasdUCAug3GoFTVBbXon94APwfLtDUU3dTDPp7eq6CEGbjGgGkF7vxVTCUuguxn92ukv9tXa4wLB3bCBXN",
  "key9": "4DcNnGCe3Dr9TsRSrRt7FV46RWBk1dRLc4QNpcLHwHfwRfPuV2GvwZKc27FkrUs1wcWdK1CzoaGNZTvQ6HE3tNcz",
  "key10": "BFDpoo7BhwHNciQF7DmHgn9WML8jewHK6aiNQAtWF6c8xz9cWhb7dB7vAVzAvAPh6CLon6KmBEMYS3mGw4LiuKT",
  "key11": "dBugZPfYrBaxvTKn7gXuUMbCqZHzBY2bjiuRi56hXM3mcFEgYJ482FXNv6NBxnnhH4AXzYm88pdtyV6ccYPBZeX",
  "key12": "5n6heDFVDqR5UQVd8iN29mjJiphtKs6VkN3d8v6ZqRUBa8WDxhEJrymeBWGdHRm2Vp1FKkTNtdeVweUaipDwDGVn",
  "key13": "4c7pLtDpf5tR6SfDNkZdaHPrngEGj7pk7NMQjbKR8j4rXHMn1s3oUqMvz477sbo1YkJHPukvY4t8uTam5W38sVrn",
  "key14": "59PL2wE6pmH9yev8n2DiJgVKo2WdewXad5mupkD4HrCaigTLMBiHYPR6pMzZVjbNcwV877gCsovbSAMkdiCPpB3W",
  "key15": "4NhLqG59raxrhAKVQ52hQkcmKYyWVyastFpMchzjYDp7FHttaVVWmXn853oCPbUb81rapk8184C2fmNJsp7etFPQ",
  "key16": "4r6PykWsCMtpYfWEEjCjtwNnfZ5FF6aLXHjbitM8FnDYRsLhizD1PYAL91rE2s8WF9MAm9kS1JxxHtPtqtkXDeKA",
  "key17": "5tSPRs2NNEtxrnh5YtpkC2tF4bPDyLYMubQKUdoVcxch1XaktrFWnWpXy8MGFrnYWkbA3ocrHkeKt12ZL68fuToX",
  "key18": "38iSnuaAwXTNJiMfJH5kMPuibtUhqQjZWiG9C7TkDb9z3X9wEc6BEhgPrfFKBKyjPiUWZJuqtrZN6NJwnbmdNJjy",
  "key19": "33Pfe9nqJLBxWJyuqQm1qZYzU3AERUcsuzBRZRhAgbfSf5A4jUXv1NsW8p5EmaanRq52ts5ByycbzwbeM5zV1TeZ",
  "key20": "3ZaGTpv2ZnXMzmJuBiyqxcjoXCeKJNbukS54Py8UmiEd5wXpQD8cw74XNcTaBFyCezidQuLMhJWyScmcJnEDQKTt",
  "key21": "3hMqF81zcM43TL82PsheuNBgASYbPVX7fAAK1FyRBRgxZgsyeA9zAfozKyk4thKUCbyw5Mw1D3weBPvkrWgLZBuo",
  "key22": "4dvE2nj4SUWCt5hFYYSsLTsdMSuHTGr6P8dMaH4KdsJUaiyUuWDuNBCWoqtvURtkebGjo6vpaM5DFxfDHM2FopYT",
  "key23": "4ahdMwShGvUdGqqmSVZ4YZZNhUqw8LiExAjUPY9ucKe8LHsSdwtrC5SfVfgdGtQWMMceFxcQNhMPY9ueKPgDRMfg",
  "key24": "5ihnqnZR2FxRT4dGzmVzAanTGSPBLmSHSheERPzTdyi9NcZyGDQFCH7jWa4ziftX5oxAv27zZauBYd25Mmc4NrJD",
  "key25": "37idvXRuHk6S54ntsN3tL3R9n7gHa7euChiG5kaMuJe8f9HBCD2BQfCeEgydeGXG6gMPrPhPGBbdMZTJwLdYVPUZ",
  "key26": "7HWe4GT25S7SwJkshPp4KBxwf9xehqWUo9HhTxun3ABSAZ2a4MN8ekGuh3sVRFEnTtYoCmXxn7Zqk1zhw8DZbj5",
  "key27": "4Freim6wmzLH8qbJpA4K29QN6QGzRnBvvr6U1ytVYu6aWYB6yDRH7xrF78CMCiPa7HNNfkcD1ot9H2TdDEoXVDzV",
  "key28": "3BxVP8XXPdxvbSAkgg9w6M3Y6U8PGjtrY8UQNhae6b86H6SufjrKZ8VnyBGivdrJcFo6kJTmrPFDBKSbrZ4jiDUj",
  "key29": "5eLT6tJhDWknCsASZgGiHnuWRyifdb9rkqXs3zd3QxCr16u4CXLF8Tyej3CbTe2U39DUCEpzfq7DJ4WD3hRBxJ62",
  "key30": "4STRUaoh2Q9rJ8UhCxsVF5RyahKvwHA6FG9LiNjGqaN27iXGmCzeQn9aEpqGZvtnaEfsocPaVKy9xp9etNfbQGD9",
  "key31": "2mkzjQiSTxdQzSwZH51WhHLfGrm9aXU1CifcdVGRhUoPtLVvx1ADbLUDkcM533ekW1Ug1H4zt9JLARfhUUUkWJRR",
  "key32": "5s2zkwCiQkx1dMn9C1ACUgM5QQ42CH21JG3i8aeRvghb26pmnMjzQLSdS9mXJB6456KBSAEzdNyqVsrK5YmzBwJi",
  "key33": "4cUhY6iuH2DG8ywbKP2axnBX6R3LipDzxEdcde21ExHncnnvg2knSgU1rzFzQ38Poc4rhqDDUCA1iU5eHNpfK9tP",
  "key34": "5kepsHUMea6jNCK2QfkYvZBSPgQN2xt5Xh4twZQPHUG19w9z7iuEk775gnFQS3rvLSsijQnPw3WWTCDuPLKaTGHv",
  "key35": "5Z3vCPM2DRy2ZQaXErPY2T6xSPG3DCNn82iYKik8kqsNzSstTkk4UywomQ1kCqANsox9YYC6oCBVagaRZbrcKKJ2",
  "key36": "2aa47gZ6dARx9Gum2rYRXPBjXANCzrYkxrYYGQiYEW32SzLM91GBKi8yxL5ojbDQxJ9iEZCtTgQPnbc3o6oCZojB",
  "key37": "yMTKdq9o2jh1hLeQc4cF3HLBXbXpkPfgE14oSXNsj9AuMy3HSqBttDPxxjPqDUWp7J1XiN4pWdwVWEiwqqFG7bQ",
  "key38": "3X8WeATUeqnvjc8G8Bq5T83qGgN5mdtRPwS98Ungar11sxX3E8FYcovu3N6RqP5acw1F7wPCKcTAALppfpqJKVd",
  "key39": "2XZjFAgRYr8nnDv7JvPhrVLNourURu4aHpYRkYN7HbPCFMVVSsPPi1Ki85PGkb4YtZ1Ra9feU3cgS5csMGPLKZKw",
  "key40": "3Q8gXoBBap2ETiP47gYBgiVWs9HaayfVm36U8SbbAuSB78UHq9u9aAvpra6UpDi434nqde2ihG1RvQZLDmRp3pMw",
  "key41": "3EnuihaoTctjZAsmo75g2MUyucPkzneoFi5MG112UqZJREj7Q2cu1echYuif18yMfx4fQCY7XcoPrsc4A1fMssEi",
  "key42": "5uf8YagsmP5b9Po7CpEYNbm222s5m2neaGRfC6d4ruv26B6fGvNuvXrkmtnQLFouEgTxPR6BHP5q2eD79zHqtbZf"
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
