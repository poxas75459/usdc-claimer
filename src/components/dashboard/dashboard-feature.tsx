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
    "o7qwsNtxCtkieADQz7AiQLw1LzGic6WVhdrY2GcPFUd884Fvp5UrywEyfFRhM4qgp6GGBgr93KpuEdu4PcMBFm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i7ubUCoCjQ855iqS6wQMoBnhMB8rZCzZiubTaXVpCSiBqKnGcSb3rHWJisTwabnhnkZyp86v3hd4cnbcyfnDCyR",
  "key1": "5dDtQMv7MozAn8cxEbnt5c4QibCaGL4ppZrj1Ri8Lv88nLLG2phd31nKj6xpYF1Mbhpu1vsWVPSHBPTM6ZSkABQ3",
  "key2": "53HnHMqDmzJY8pvGJRBDCsML4DdtLxd6WGC636qhuwYyzecj62c9SsP2aYQFK5oevM5pFeUgcfvzcJMaKg9oL8hj",
  "key3": "2HAyJWExxpaaWq6MuXvtf25XeehdhtEgCNph57YEz6Et4r32bpp7sWYUygTE3i5XP5KQ7b1PjfffZovNmZShYH3C",
  "key4": "YXUfZMyimJdLCTQJ6YfbRRao9XCavkdaUd4S5V17vjVPVKWpiXXRkput1BU2f2o6gEYfF4FEgNuHYfNCMqEknFw",
  "key5": "38eCkWuy3SfsWCBWeuqtVDigEjjEqHvckmNqdTT4EUK75Z4BRzbXTuboXQzq5ZjgyRax2cqPYYhRJtJyaqZr4n2g",
  "key6": "5KyYNDfGvhgU3fFUwr8m1mt54dsbPtvveejauKpsWqitVUYeG5ZhzWgPRWcpndSx9tc73BHWT9iCNvJB51EgMeGa",
  "key7": "4Aj4kRhC17NhCuShot3KNGzmfT5xJdLAG4ZcpNFuj39JH1zxwfYmzNDSXhiEWREPDmtNVE3GfcCeUD7vE9aY6c3X",
  "key8": "552FiG7xqn3xCE5xxcwq9ybh49GwxBcEDS75wzoaLeF3jaL4t2NrA5bybqTc6fjZzz4R9Xq2oDKMGWokNPLHVh9X",
  "key9": "5aWT4AESf1DmdBnMZjBJuVuiGGH8fHwPvh9EKeRwgdrAioRLm1pAztQHsxrhWgQK4QHM8trSmDcNrNZpBGP3TbYU",
  "key10": "XJHwHzmy4G4GPZQMw7zdvPKBP6oAE7fB4ce8YF8hHf8mSySNs3mwV7WrvV99yzN1sn3gxj42U8wqpMs7dYn8Nqf",
  "key11": "2w2SVfQRWmassgNM6RbdCryyux2z1k8c2FQyYGmvGga1ioDfitsBBSfhCKibdC5mt6uVUFpzkN2XaMJKf6PFrRVc",
  "key12": "3giCJa1WjJMkws4yqPoqix3ZA34rDiDpARj91K7hLUo1qxBsYkRSu3h2XswqYFMswkNfs6C4VfYS623UtZPxn44P",
  "key13": "3YPCYEufpTDtp3kNFZa1i8sxUHF8ScrAEpYiPzptqoLcnh21W4HayzL6meHQ4rqPUvtsjcXK9yLtEszdXxUtEWiu",
  "key14": "4vXJJqoz52yfArc6KM34kHxa9jXvQ73abXA7fL61pS4bQPtbDDAEJZ71LpARg8EarQXTrbVwJ1syVUZr4UEzoSF4",
  "key15": "5jjGJmfnLMrXLAwTSXbfcoNPQgemJjLtHK2NyBmgRt3dikmU5nHr4VhWEm1KUD9F6u7o4Z1Y349qnLSs5KNTN8mC",
  "key16": "5R7tPCToLbTm2SwNcQMojzJBqeSE5yvj3ewdkdA5MHjVGokpZ5McdrJA2NdkgBfgDWABfcuwrqjytkEwULucsqXi",
  "key17": "46X6p6zyE7NBW2HCMWz81zff3ukMn9bQoF9YvGH1u9CJARbzNJZrEFBENAy5HELK8mWjBiqVNEo3fXTWfEvvFiCZ",
  "key18": "2xHz4qAaNtshRrpQAT9ePkCYz2eBtLSLxJr2G5ieB25fbU9W5Gct2j1yPgbdWbqP6312dxzx9YoENzSGH9yH5Lf3",
  "key19": "3XuCATxRuQu1E3Pc3nEaUZYo18zL2gsfbys6tKwMNw83xXkR2uU651h6DY8KewKn6ffckVytuvJfq96kWKhmHxzR",
  "key20": "5H4vZeT5w1UuEGhfBitSeumHuMydrBFWaWN4aHVhN2AW6hWaYJAEyeEMr5FMbJYLQhQTUmwzENBs5mR6asFUScTZ",
  "key21": "2Xf2YjJ1tNoEQQ7YYA9uQ1gAKyxEVJU9ZPqTZNxoaqEdNkuG6aHVQJd5XJuGpaagq2vepVAKBcyowBJaNf1Me2Dj",
  "key22": "4EyjqWSgWhvsgqvVEF8JA8hMVpgvBW3H2R7BpHEVoDYp4bgpcCyowyoqofWfdwhfEShxTUbpMQVcKZCk8qdC5knx",
  "key23": "ZsujKbnibHUaYgyz5nVp76BjVoG8ZWbKTCvZmf3cL7nGpadYFupwdCVxgzXdDn8Spkv6sdfJUBrYpEAz5mJAfUE",
  "key24": "rAdN7RPWqzARQe9HTHjXu9tNQRZDc2AC4pd6VQSFJjRG1wW5we4USiCM9q5KKKjgg4zswqJfJJ6NKiPvuByaXYw",
  "key25": "mUHAr2dvWNDNwjuZa5ey8Hz81REVZ6v2ssYES8xwiiMPBrLqvJAnzSvfiEYD1PwArL3xbjAb6VWbqKvE3WAG9Xf",
  "key26": "21cspoqLruCMVjhw8gnZd3gEKkmPNk1ZkFphZQfUS5teKtA4ZMWbcaAhviMxn21vGQLW2C2Ry59GpUEakWN54g8R",
  "key27": "U6aa4c5U9RZzcMCS4EtQ8ga9HfnXrvQVrJeQKp8bTPDt3KxRU1RTmC8EY7n5Vcj7tVPSUqiciE41ZeZWSugXvbY",
  "key28": "65yhkEqnmNXyzMg3remYJMHoE46DZXwCXojcEk73bq3JPL83Gdtgd42683ubdfRuoSQRyx3rCEp1VbWu5aGdqbYK",
  "key29": "3NQR32r3Z2zv6FbgH1R66uB5u1SfdzkNah3ypWFE9AKRzLCqqCtzx8zQLhUxG4u6VHx3oXzyjeXUb6L8vwQvbR6b",
  "key30": "9VKxFwmS64Et6xVFVs4YUjDP7YZkgwDhcZnPaNdQHdksjARsAxVX1QyPCCCkZgwQe5TdPxtNQii4ATik9ScaAaj",
  "key31": "zwyHKWMy1oqUiud4vrrYNb9ZH8fp598VqMX7GfYD8dfRF8xtR8iZ5tjq5RFHQAxxh6yXv3528oMxVvjcFARWHt3",
  "key32": "2Nzf6MLNQd9WXQNeNB8eNXp8MEGb7hiEYz7L9rfdfyKcdVwetKGhjDDrprxAPG45Hm7inpFkHVpXMwYnesCognCA",
  "key33": "27Lff2CQbcFoUc54L9ugwrhFBsZ43RaucCh1fvN2czr1TbQMWeSonWRKn7dG4NqCLPXq2W3kumjba9byQsu2sUYA",
  "key34": "5G7eNfqYwbb1gtwVDaBJidEhoVat2grnhQSB966x6tGUZXJLDMZHTWRT5hqKbabrm6Fft6sXxbnkTao3yw5Guyxn",
  "key35": "5DCSqzsLZCotAjNc4ZZYkfF8DSYfK5UE3EXqvWZ6GRBrYZpfhrC6XrufWKcu3G8r7shw2V5LofCfubXAJo6TcHuL",
  "key36": "5hJYTzPxQGreRaLe2k521V8xxJpcZjhEV58C8p77MtQ8fiNrKEjbQfqModZx4fVmL4Y47y1PRi111JkaptYhh8bz"
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
