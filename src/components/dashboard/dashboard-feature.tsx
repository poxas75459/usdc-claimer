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
    "2ArCPRkqyP78sw4ZG5waupPns5aapfngC2towJVdh5pneM71ihtX8UKaaymXdextr8PtnzU4SQhrrxNwTZvsVPxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57REKdKMoVRKdnhcwS1MzrBHB6cEbEwAWn3LRFo2ivp9Gynj9C1mBRdHXdVWkkBvp5ddQCpk1RgKfkvVeFWoaqnZ",
  "key1": "4Mxgaj6bH7R7B2TDRSdaeNtycawAjX75an1PeuaS6Xoksj76yxqP7mt1Hq7FypgxHDcW26wuQKXQs7N2vPRdWcTd",
  "key2": "2rEE1CQUAJFekgRxuGqdKAzZiJe2y3XYo45PcsFa7pUHRtafMoPaWB2QzDHVJ4C6FLGtEoRbPdR691FEjRu58iin",
  "key3": "5wYf8Fi8R5hpc1hR3uRs47DG6SAUxJYxtZPWSJYpTwQdb3FHtiVzJEUFkvomF737ubiXLEmZQctAkM72jFzadNyV",
  "key4": "2UkNuygEtPnaw56J8mScVEUndDNjJcvdFqW22ByH9v4sDgy9wXeJdwG3TKoVjW365gYo4WgRYHr3LPBndwZxEWCc",
  "key5": "5dNL4wR3XiP7CbZi3AcDrG3UX1exH8b5bspg2kGgjtwbpBPpuR2igt9Nc93wevGajFBXVcL6Wb5dNXWj7CNx4PZC",
  "key6": "2QTnPNZ9ghuUsEqekYcUmwxyiBcVdUHYphQXZJm1bLKB8ftthG1oLiR96m3kZHUpT21Bx7DKx69NaLuEsHX3irag",
  "key7": "52G8RYve1idbPePAjmYFwTtDGcjtBot9HPYxeVpWtYMC1matuKSMfindNwWmKvsAWL6oZY2HzUCsR31AEcxP9c1K",
  "key8": "2xaYWGm7mp6mFtndBJxULquhCxZ6CxFxR3Ld36K9WhA9XoqYyUbsxpaaKRXDTBQ2fwsFeoV6FXQHGQy41bsuVvpc",
  "key9": "5bcBVAuqkx1AKbvZrTuVU1J3QwnmVMpeoPJKdpTfZTVvZKHy7MATKSUkLFGDKDLBAM4Mrax5rt9fxsnxULttGuRS",
  "key10": "2vMBDMC6sRsXTdpFwR92kKz1AsiqcHZGfWCxV1HJaXAtEhK6haL6MHrqKtB9RmszzYFkGMYfCbXFrLXj5bexrwDR",
  "key11": "3EjbFGBvaKFjLSiAAXAMtdDqVvGex1FNcTV8kR7mbmQJLevdGHFrBLYovbdZfxNsCAk3kQ7pDPWw4MdaHVNhHPZL",
  "key12": "5DxuF3xtisBKC6F8YkEy1QEr49XyszefzaYxD7Dq6pu2RRrqDbexj2TsCYKemko9AS4Sf3qRNnGg1q6rhbBmmkUS",
  "key13": "ar1wnktMmcQAxL27bEAmtT2uuCfg3CbKKBnC8RGBmRufWa2nTtQN9cY2bKAf29XKRcG6WNGuRTk9zFmaZhB4JKV",
  "key14": "5gmHK1cEuJwYWgYzp4JGk6KnDdcjoNdbupPjF9Cux3wbQeQ5DsBR29jpBJhxXAyywGhGL4HnkBgxsejbDNWscbTA",
  "key15": "4q6Fx1QzucSzk1dLZEgkYCxTNzYDQp3fJCjPE9MC7b14jaBdmgbNQtBzsHPUFCvpvUiASBnkjPS7jMEgKXJ1bPng",
  "key16": "62KppDcYVuysmsTGhcE7tw3D4AYT7UMFfXbrUNSEtGbT7ePCFgehHht9Rsz8jNcRPmP1qBf7678izaLezoEV8E3E",
  "key17": "3frsZmFbz3eRXMduvhSMm1tB6GPpngGWrnM2t8agPFFhHua5stRapQoGbxUhi4xGZgW7t45u2hMuBGyuSaiBCCUK",
  "key18": "2WSMBxisq6t2v2J5bn5RkqX1umwJbg4YZYnLYGxRVdbxoU25ttixcHzgj8Gkqt1a3fNvt53hXbTooa4JoDrL3vFT",
  "key19": "2sf63jyPbwNNvZ29uCZr2FVXhwvGRmPp6gGB8h8D6kozsDWsnWJggw4Dzxeoj4L8smPpJ9b7W5v9NHBNJq7r1RLz",
  "key20": "4iACZeqsmbS6L6qyVhQeLkw61bp4a8ZU1sbZcV1esVMdz272Sdum2R1wcg9CHTrFooy3XMyFxtPbaeLThckBbyFi",
  "key21": "5HSHY5ScwXr3jZ4p8spgEzvri6DXV37J5FxZymzifTAhnNFUUAeirnddTkSa9PTtpEJveJ3hs7yufZMKY73B4mKw",
  "key22": "5Xb3zHrE1USJZip6eooBjtVHE26oSikHAu1scumjxqjRQKGKfD7Jc2TgvVvBRtNLzKxonGmmEoKQZMPkWBVNoing",
  "key23": "3xFGiqxYiRmCyGiDemN3k7uGPrzgk3ZvRpAPerwVoCtSD5DTqUs1nrEX1FujRZE8qvYVfV9LuqYUsioEUixQDpDn",
  "key24": "3P3wtF7SjReWu4u7G638fYz8tzHiMnGQp66NTsQY1vVZQEsPJKo6GpMJ1rBFHJUmWBs1X2rwwqYQGWNEhYch6RzC",
  "key25": "2NxsGxisFDbTq1iKfizAJ3JrvDRrHkmEBpdvPmfTrQfKrwfqhjZCtE9pgiNViqouc8ekbtRNMFzrqTGGX1VyVWG9",
  "key26": "HHXhkFrJAp46W4ZDgteiWcsFTfSjAyxymUaEED8Za8qRT1Qcv63ecY7NFVZ5EQmxbBejmUiHqZRo4GHQDkeBjdz",
  "key27": "Yckecd8MumhcUVCp4rkQWf2Zm81docRynp33qfZWDPstXy1Lp1k1QwEitject4EkPKP6F4tNoWC6JgJM97DDvZt",
  "key28": "5KobLEpbcpdVtJGJ65LEyUSVZQmHVLLJtTDg8iHbg8WkjTbEqGStnenn1idwgp7W5SvYpYcQdkjpdrumf1ESWtja",
  "key29": "3RpAcRmob2hy7PBJCz2Zf9CpvyuRv7YpVg7u6RdcAcodWAC9bfjitMyHX2chRGjxqPc9QdnCtD1Cvh8qhMCtaKQQ",
  "key30": "3US4fM9qQfpMkQnRQR9WKusUNR9XkqTTARCagcCom46xB6b31ZgqLcWSSTWEsc5rtjK7NiDPtU5sEAFHvyQoqfJz",
  "key31": "4Fk9tVdx5y43WzkbHkZWn5BTiLx59c8hVKCaYxx6foxFmrHFBn5B3QBEoMM2wmXf3f2nCzwdqVgktgbPvDLUiYRj",
  "key32": "2U6Wbiq9HWu1C1Bzs1zrYxJE3dCctuMf24AajKaebDxBajdjXwj8um9Tq19Vur8zyckwxQSxLzzAdRG19FqxRaZh",
  "key33": "53C5eDFo8QoDT1rKE5wjBbHSntFdeqHjoaeY7EURLafMUs23XzbzJ6HkQonruCUfZ6QfAuKvhVn8k8pemYBFg3kX",
  "key34": "3RbTo3SJDLx3R9WXpkw1ZvkwWx4YktH9G2wgGR9gtNSFG8Bu6MNB3WNV6yFLWZVmfDb3n4irFYxiqJiQPBMQNw5r",
  "key35": "5RumEAWr3J8sNgr6j7kjUXq3tmaxjbrtn2WG2EXuCLNXqEJwEtU69pxsTuJEUsLzjd4HimqpJzvLuJuQb8ttGk95",
  "key36": "ZdDXe8pXULsjSLhUPCQY53987RmpwkYMnDJ9HLfzb1pThfHN1DdnrTvXCSUEfnG3FGY5zuhiYFHQ8sKk7t2z4F6",
  "key37": "8S9CZyucGRTRN1WEGa98RiuW5DRduSDTP6WDsUaHKsDLxGkX79Qs3cL3VBfA1uWd22JmW79yvxzNK1KZhSBHo7y",
  "key38": "SzGaUTTP5xjRHLhB7eS3a7jmxC3VcrVGNC1aVM4skrEKa3Xxff8UPCPYXanc2nM3aeu6eDzG93bQukuZz1NVJBR",
  "key39": "4fWCrncw6G8E8J4WiXjsQRnz2He6gQtyDwW3TT96B5g4Zdo9iiqGFAGszhdpX7XMrwyjFLDWZ9GYpg5PitNbobXq",
  "key40": "5euZwmWJLNXeZ3rCvcBn7WMxSHSmw3xbJ483MeyVcKBW3Px1VipG7L9iQ54BbAPWMX3hX2KQbkcJvJVDbgvJxV7P",
  "key41": "2HZzWYmtJnYNxnNSJM6SYTr5W6FQ9LRWVcXcfrjmXztoSPg4YDyrarQX4KwyvuTSL66W6E35Wpt1pqJsJrKkVbNB",
  "key42": "4h9iCK9bkqddQPTYoY4az2nx6gdR2Gk5XXTNsadVRkbmdGYGWprz8Tdw9TR2q5nXZFBh2SyVJwexsoumuYjjgtdR",
  "key43": "2kRxgpErmbJjCXEfDqurTou1P3yb7iQMNS2Xjzc2E3fVNXSj1vY2VJottXzuUV8b7kraetqUCP6w9feeZpxcosZL",
  "key44": "2opJaVUyrypfpTuG9d5B1JyYANbwub7hUuQaLD9XAj3iJ1SX1YUZvK3WN9ZqF83fqUKJUeKrNPysy9U7KwkdLHeF",
  "key45": "3JpBMm11vtzkMYNNqFAaGqigKvTXTeiomx5ujiR85nQ9ojVrtDemJK8NVSyYTA3ssAJZXTfrqUGpaMaBkuMMsCMw",
  "key46": "4DfGqtng6Hn158PNTLkNDeTbQUtGRUiPpfy841Ve3G2FESR7iahREn3EFZoiLGumshFmZHECCRP7mrcLrDsV7q1h"
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
