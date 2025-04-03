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
    "3ti6i31T2wuuhKUq5oxk5PtFUB5eVh3wu6q2vKqfDiUD7sRcHdibdQU8e7Jnbje8KBgiukieb1wsAeBaWa9MC4mt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J5qfDiAXV14S5vwpXY4nnwHWjApw59bRUKHok8q7EtKdbzrJTjSfzxxkvmxiWXvPdZTGy17YgTBH2MV664cNvke",
  "key1": "4EccMpdRFzVh5NQvQkJK2thcsaCFNkC6LPH3argdfUs2yGicuPTeTRY1GumeUfDrgdE7szzM26UxLB4E3nLXu22t",
  "key2": "2Wh7QJ4frqLj5gwKQ2pmTRJEmVJbgdPXGAcARJm45mcFtMpxRShoYaTjqrjiGCGCG2uvvz5WWBGyJXcweggYCsyB",
  "key3": "483idK3MMpQTPM2RBvHAdxSa28yGiaoxhCXFnQk6JLbCoiAP2J9kS6A7F885xfTZetGQ3Fuy3oQSnBkVDC6th3pN",
  "key4": "dvBAxc5zSELgdQEBh7cw9nGC7JJA213hUhBWD8FZQhUtzBTSobmvKAU3KR2jcT6C6ZdNruDtyjNsNQKmsG81Wc1",
  "key5": "3YEPmMTM1X9AkJ2KfgRqVKFjyePyDvf9yHPtiJCJKYVf1TyENisyPFQiMgkxbDVF1hwqkfpBjA4R69pjaygzRbiR",
  "key6": "4jTAcX1iBvqCvVh6g2x5wM3dVM3ozsjtYj13EP6bTecwoGX7o8APhWjPKmXAH29ndB3k7LjD1RJqXGXfvBFzjKVM",
  "key7": "2EfE6n8qX3NBicHudXQcLPPT9dWXvHKm181Ykwbz2e6ivgApAXu7MvcAophVzfqkDJ4WvYeqh2bTCtXViiADv4NC",
  "key8": "Fpbu46rzBkTDq4geYCfZ1iVuBsRQrw3x9GH2nS85GWrL1fxpHkS1XYUVqgVYa65cp2nu8Re9aQTx9AmAfgXx8pj",
  "key9": "3CvqjRekZDxdPFrYs88xNCgZ5bY4tUNuPFhLvtNnM5bgP5x3iH2PmSwSmiRmb5v1QfryWEecCdXq5GrEtzgCwTen",
  "key10": "4x7qrZp3VhdTr2smanfasKoBKWbWJCCTBstxAwutqDuUjx1cXYrzGPcmxTaASRxMgyFgKSCRwaoshWR4QE4M9xwb",
  "key11": "2qFDpakoqDozvozWHbr2KZLmD6YxBuKgNkZNQGtFRdzZ9mhLiNyXERhxXiYbQWhtyWATjfGR6ppTT6cntnU6VytY",
  "key12": "39A8DGZcM8D1CAFgdYZ2auPqqRda8aucPNMjtc437Frp7Lc7CbKrDmj3c4BsoMhBptz6z75JVH9jiCfpX2xePiiE",
  "key13": "637d2JAWTpr3dZfM9gtavStXGPKJvPvHHHVQkN6qbVgFhVpS7uF1vTXVRYKe6PHd7fhUVwfKkqgUyGsnvv83t9tL",
  "key14": "3Kndr62iCmNqagsN2WvJiwem3MtnZeswdES4f9oRgVppo1P7fjwozVi941cem722HFaVotKxSRWmxWZ1vLvfXSYg",
  "key15": "mFPJpbiWuosX7VbwaeUc5osKwg87bEmuCLL2TcRjuPrPgA5zRNwhf1j1PzLhL5AygASUSC7p2iZJUkeve9J36wY",
  "key16": "dSBsv72gHN3x6Ptfj2Fzi3xCBnoCJYn1oHWUFfZtbwuk69H1gETB2dJ6xM6YBKsV8tCRguBesJQTMMSxRbTC4KR",
  "key17": "48cpCjXgs8JGNMxoVXE8AgKMbBGeCG9nqW7HjB6N9k3pdUHE4Y1FNWrVJjqWke2r3nnEsV287TA78GsU4HpqSY2E",
  "key18": "1LNKXAnotgG7oDHMgbRpj4hReY57VjVWcQiLM4CSMmoqSoyfBUwmyLEpaaPsVP36WFwh9mfVkXPFnCvaHBoxGNL",
  "key19": "t7drFz4vyPizFpG5A5H4yKhFWPt4M9mBD15moVKUZQxmfbJ3hWAbsYgyiFjhSsUpfyBFZsbapWEWGYEx6BTN6Xz",
  "key20": "3uoUMQzKEJiys362mwsHaDWigBY6SsUnznnRPLK4vtYD3UwXr2FV8PyjPEvnrxWPAYGWLXhMXpCdh1WneSSUAU8A",
  "key21": "76Z34ibiRF1iY3SqakmKuTXVnNS5X31CvDRZKnbPsWhMqeZEFD4q7N8EJRh37Ya3UQB9N9Gj5mxCFAWzPjxtUMX",
  "key22": "yqdHhebVzC371GWsTz1qRGkrjd7CeGDvt4DHTtWCCYWqTf8eP8wW2yVonfdj7LkcEptqyvKDJzJcyyTri5gbrCk",
  "key23": "5k1pPfmRyRiWYyhYkWgLf7rJVn988SKLic2HYu2xATCT7QQdUNfMKWCkpmZwY1d3CULcZzpMTT6rtqWN5GCqBg3C",
  "key24": "3Vja5Ak2oRuBYrL9fHCDWxKXM2roVMYzAeh9puvsdVW5uzYLRFn2hsXHeCUetvKo7D4YBHzuSusnjBg3UgEtNNh4",
  "key25": "2XcyzYAgaFWPhKub2VV2bPnCuAcAaRu46A4qy4AVvFTt9Uubpog1DMGxjpMh93R4ETRc21DsQrhWPP9QZtP24XUk",
  "key26": "SuHMZKiiv422LL4vGAqED4fnQtGX6r57SVwRsXqXuGw984maQ5sDncGVV1DbbFpqbdig29ZPLsGAQHEgt3uG7Ap",
  "key27": "5UhUmJLzpdtFjYSVEb2tLZLA1omygE643iEFkQScdHqjpRhZ6958x73MYYeV7HrLK8m17u4vmnDj4FNN64oNVBFW",
  "key28": "3DMKnSPhDw9SAFNCTetH2DXxHtBSR1KFv7A2SvmUeC5DLc6M8UzHQUvnysYrGEMM87Tkqrqk4sd9vaaDmgRsvir5",
  "key29": "2ewBcqt5ACaCersvFLCBj28zkC5oVwtJzx9XSrmFt7E67nNAkPHnGnARnbGAqVoAfuhpWd45gdMWGu7vtDuTNaXr",
  "key30": "5kc3fA4VAVCNDMsMTTK8vrvGc9w2LgcdqTgYLXuLanvGGAvyWj1DibWzCWEGBK8rDJbBauebBgRSsB63DBRN6YsP",
  "key31": "2n7adfeYP5xqYEwF3RcvP8auNGMdqoaw4gsVmRWoHrfEeh6fxReh3GSddWVj4SUxV8TJd1AFgRWcpw97fNe3j3DK",
  "key32": "5wcVWRRQPRMkYXK8q37zDaN2tA4UMDBQSkBTvxn7bdSMC36iAzjoqifA6kFQBfz1FZfLKYYMLyFV1UtPuWp5QZuh",
  "key33": "3x5E1xnTtvzVFofddvNFiA1RbuzcuZGeBeAqkHHLWhzC4g9XBn7orw7wj8QhYYpGw8G2ThdK17QKSpNtfqUAcR5Q",
  "key34": "4TjaDrVcENNdv5zpLkwzTCqGsRZhboVhA374vFGYZnLbC5st27MYzQiPyBE7bGJ9esu4kck2HYHErTSv6M47SV95",
  "key35": "4AMNfKHSSi1yodyoFcKZehozW7NTNKfJK5Tk16kca9d1e6rSyLuzLBQ2YgWujSatg2Ka65b9ubvvqHWaoa9XBr3b",
  "key36": "2wpnWpr2u4zY8YRZVmLXTtst5mtted1ZVm6vwHTYRtutS9R9dLzdhNjFXvui59L1LnJSN6hipENzAkSLwu1HpSTv",
  "key37": "65271eE9MFHJsG2ipKSLPy8HM32FpQu4KSSJXnobx1zyhvgXUPb3WPYa91oB4F4NXLe3FCrTFkejHW5ffwa6SL3a",
  "key38": "2whnTyGweAzne5iLT3C3EYvfTFEb4ToW4kMptE4BCQXtQTgwaqPnZfWTWj57vBFgaNZLcQm2s8TKRiHjAiQSyLHr",
  "key39": "55ZrPY4YtFLad121drKUQLMzuwntFgrF9kBWRwHqfaJcDFshrL6Dv77M6hCF9m2AhYyBkrki2GHzUnbhd9fREaww",
  "key40": "3BgrwHJYjY9TvvB4kDLfzsbdW4bZ9q9sQKQvvy1qWKA3P56jVJ3ZgZSPU16fbmShBjokLKqh7XwRnrkNfBqnmpGx",
  "key41": "4YwsS7D3DRjf9PWdogYxoDn2Xcx3SHTE7xCTtueCJ56PxXUGtN9W5AxrqUHQBfkiXKHE9SzK3WSRKtB3TvAeT92H",
  "key42": "2UnERwbjkbPL7sZnwM7EH6v9G31rM7usQm4ipB9PpUDHPKaj18Pxu8Sp5xqVd7aDUsmVvg8Em1GjexWodPbEwGFZ",
  "key43": "5L1jCdPXFKXkRXLpD3Y3NwpzTmLFSVKVJ1geUunqGToFMidUBsX9H3BbfTZrZdMA1pBXuErQtmAovksATQB1hFMR",
  "key44": "32anP7X2w9uinMwNo9jAyVLR8Erb3PaGcTnLbCpQikr6aF4wMeG2nmEJgMYTQV7sXrjzJEjNREy4WB54zJc8bvmh",
  "key45": "554rWhfsgY8ZgSdwS82ymLhGDrTXLdDs1pGffJG9fstEqfDvEgtdxqGBKtM1hmXHJse7j53FjFxvqTqARXNZGpuJ",
  "key46": "4vPNiac3bLgDBPgAZtw4PTf4gsBoR8icPUNZzfgSGpgF5ntMhCW9uD3FNLdtSYGgt2gRB5P92qK6uw4xjaMoF4Ai"
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
