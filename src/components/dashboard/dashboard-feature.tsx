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
    "53sRHLAbRW9ax8NigdxHvoGHWUCqNT4NguWdqXU21fxAc1UTyV8FcC3jFU8W8ytaw6HfsUGQKzDPMD8yWQHGroAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FGspVanGvPRdRbnKJWTY7QGtQLLhqNhrLVAw6K49Q8H81w967WqFfbKYY2z8aRS3azzEHt3ATByvKwMGGeE4AiM",
  "key1": "wkv6J2goVUBdaatYYqBGHM3J9xwinQrAgXh2iubhsbP2aVZonybFbS5yzN5c4Y3DRMfsPA3CrNoRXureGEKfrWP",
  "key2": "2a3MzYhERQmhScBvJvadwXEKL9ToQDfehzgibjRLzUU5hYRVXyfVCpTwGxMHJLrEELiwQDTJWVULwhwPzZEAcopR",
  "key3": "3YTncHLMefexh95gvSkgrjbHJBahr9AmZE7dREhQCb9PBnN1DF219mQ9byjwiUnrU3qPtFmGSdBGX5kTBKesBf18",
  "key4": "3u63zxeq4CrCp2tRHbPY1J6PcRsxJs6UevSxhMSmwZAPXgfuW6C1xGJzq6T4qaetoTM8fPPAC9KMWuRFWhJZxBBR",
  "key5": "kM7uCddAbynCyVc1zNr51sDpj7CzuUyUfbagQRvTixzFBfthkyQqqrknxywZiXzScCLPr2BWFrKBBgCXi1nkws7",
  "key6": "3PSXVq8juiX6e12dDbNf3YMjEw3ZEvLmxdzu2bovKEHeZsD5tLsa33PMoE9zbvm9wdGkJQn97r4VsgZQDnmgPytB",
  "key7": "3XHNqzgzzxKGE7mRVKrfRqPyxdcPyt7pf8wi8JjSeiduYF1H1EbRS3gPcGkWtDg8TCMPxQv3rDSfyAHEHJewsT4Z",
  "key8": "3wuMusouYw1R8zqch9Ge7sbgPJATKN6FwGWRBfKN83fwEP95ZbXR4rcAbNqfKVyhp1Dw3zrmgHpNvAC2zUzNCVbu",
  "key9": "3p7WwvWmD7XV59aEHxwmrdtSYmvGMRKWcLiJ68WaFFUWnmcCL2L9Ax4UQrgj2qnmZG4iQLZZVau1yoQ9TQceKCqo",
  "key10": "3GgGkeJ4e5gm7gadkKL5CiFz1iuJMAaGePNnjq5aEYPZJYX76uxycBWx8pGNx8CenALZoWMPtrep57xPk2dNrm9b",
  "key11": "2QCCTPHUtkhn1p964FKAqNmiZ8K3jLGrkHzUe9aFe3hJkvnuSEJ5bxtv8cLxeUa34zARwziFBLDXcYevgzcT35n4",
  "key12": "3vNyxphuR8t51PP21aMpA7D93xjjRLcNALF6ToQAUTToAJgEWeomW3BBfgWWFQpbZxQ8Q5fMtBnokdX2vkV25rNU",
  "key13": "5FuRSK5Xn6N6UmGwzfunyN9WnaUjDuZ3fjNcXXj12m8HMqhuGcci29nYK2m82fmFdAJZzMxKdYcBzMLAARU9rtXv",
  "key14": "59PTqvfRAcpvmg69EMhTpeFAf5YcwbepMuZHg6FtVkT7BWByJTvyWQQtavLsp1k4enveTG6ZsyXcXJJJJ9LTRkyR",
  "key15": "3Nj66dFyuaAncxtinWpgKk21NV2uaE9LVnjhQEs6NcRCFi1D43K2DNnvgoN5PkSqwguaTAHmdxaBkKRd84om33wH",
  "key16": "4TuBe5JmRoHR5X554sbjWCwuvLaAvx4w3Zccom9C8t8JXWc6fcnCpFocj254sTG6tkC1F697eG5pPxAzcj5mk3zR",
  "key17": "299cr2ZcbnTohbkN3oKrVNsXAT7v4KbB4NJjW3dxWoKGbWaRbg2uBvGi8uSevz3J3AChdemXBJsujTpksv1DPjXt",
  "key18": "4QNzzvnmvSoYqiTvK2XfPABg5Mf5D4P6UXoF46xnXCGRKouVhcFyKAotL86vY5ThQUpLpwEKoddNNSdQFDjqhYi6",
  "key19": "4KpiuQSHrcxdv8DGua5ufRqC5by6f5uwsmDVtcMCLCq52XbfihMWxSdMcpX15wPN1SJdPpS5hjZnrCWdFgshcwCn",
  "key20": "4AjP5RqAT2ikVpyCTBCgD9u1popPGxTWMj5pxkPCBGgyV72UUTWwbVvfWgoKQ3ui7ag2ZRSmSQ42UtwHN1pCmeD2",
  "key21": "X9U63DBGgs8R3dNy3AQEDfJHmVXQ2JCW415xf2p3C5aoJp4LeWC7sefgQkqTWbn4yLXYxthADiJnRCoU1QGCokr",
  "key22": "2FrdksNajQbLa4pmhsmzszutnF1zdK8ipMrFhuGSUHkHfbbgC9tbXwegwFnNEhXtg77e9JjFGymqiebAPzawm5XE",
  "key23": "2nCAoYMEkdsQi1czw6cxLeMk8agaecJGvsvaWj8A1Ket4CoSe6rE1qFidCxqSf8w8tvG4VC9bKSPRwx1Ry8LpH9g",
  "key24": "67ULCesdE3puCxzp2wuJS43Wrh3Mz4Ej5e1v2PRJUZSHxhoC2n8tUDGHEQfiqo9scqTAjosvQxY3rQAGBcxpUeeN",
  "key25": "24an4bgk8yjfPTeJEhLJJ7x7DynpW7n3SqZV6wMMVrWzbnghLhWvEowq7FSNXSj7p19jo4pjnh6FySCkLA9dEDE4",
  "key26": "MrbjmUPQEcfJXJVk4y1am7ahZRCPoyGcBiVAKf4i1NqGK52uFZw9zkCVzH6hTRR28yhsZdWhEEbZ6RoRcyiMaJ5",
  "key27": "4gPhh3GUvLm1hdkbTJnL4JTcYznsrE5C7SCLdgUmG32b8PiUVmt7gGCdttsUkA3MeY3nGqz5Jx4uw1quSovSVTdc",
  "key28": "5ZG1wiqiN2T9s3dVhYuHECEHU6ie3ALimhQFi9ReXSRGoppBRyYdxdQVe9itCAQEHRCKLmbga1F8k98PgbLAjzPL",
  "key29": "5P1a3TmKde7AhC3fCo51Hwr9cSy59WZmC1USvWkNW9MVF8VkS7Fm3gaGMTbVV83JpZkXTDyLZS3VbjtFU66ZoC5K",
  "key30": "5fN9DEHXbWgpsSvyfWo7KA1yr1rWtgmRt1DWzCTGcYKkXueT5WWzgtTgTQzU9gUopWEw4KHiyq3xpGov1po1ozKq",
  "key31": "2ixEfYyy8gQZ2xsKRVQCBMrUA3HyDtDZWdCkE9X2ugLsK9tgmZzvKptx1d9QRJDF22oqdKtJdoxR5EpqaHuczj6G",
  "key32": "DT7WDE4ivwTiZU7YhojzoXo5s2H8iTBNfZe1KSzZhar5p4tuayWxn3P7QkYoNxqyy7T6xAPgwm6epnvMuHEV9kp",
  "key33": "2MFZYkczgtSybqFjA5LRv5iQqCCgAgK5LqtjPhiKs5A8ENJUyAHQeVcAyHjfS7Mr6rBJHE5vLwQeXvzZ2uHazEWW",
  "key34": "CVHtuH9ergj2QwtcPXZHzqp7Q6SReDzBw6PysStikhFzRmLXrzX3kZp8xSebNUuPkmSeoDYcj6osPbHeFZrQDdu",
  "key35": "4mTNxHpYsB7o4UkXX6u5ggG2SfACWMYa7Bv1SyRfPeu6LiGz5BHDdxuJPDrAj3sNvLPygjhShZJpSfXhjb65dHbi",
  "key36": "4n3rH1LAsovZB2XwdzLoXjKAvLut8urTdMkpQeoDHUtSAT4F79FwXiXwCLKDz5vUNmtU1jf6PBCvFPB5tgeNQL5f",
  "key37": "4MHrPscL3KzQeGrnsdALFmBYVX25PyBaR5u4t49QH7ZeHDL1dmcbKHZVTfUizyFdx7KGMWNMVUXtyFWjhQGibTJQ",
  "key38": "2xCVbMRLevXc57g9x9BXmcBiWfya6Cec37LvHV83aAGBrY7Fnx1YZ3uUrhm2BvXhUtJJr5tiAXUcnAKZhB3UW3E3",
  "key39": "3Ne9F6frYE9u4gH5K6tH2ZWGTXRgtNdnKnrgxd7rhqmhpShv3cHAj5bLABCRArXdtm6zWstCzCDa32DRqgLECkqo",
  "key40": "VDgQ3V2gjZEKV9t3h8ts8fzC6F9tNu7j6Vr8kkV9NP8HmXmShMVnmhXBCHY5xB6xNUTbELx1XGygN9Y6XnFFNas",
  "key41": "65bEe2A1AiNHV7TDeeyZv84vJtCzQQ2D3L2eEacdns77xwh7CptLJ8stRzCdBbo2pnXtEQGTBQRaPAMjck5pTQZ6",
  "key42": "3cKK6wEFNgtm3gaj9TKQHGWYNPSJNP9JvWEvDgM3HXptDzPmSuV7h5zx8jXneTB3awMLTDTguGqaLuXJkH399qnB",
  "key43": "3kigDYkyAqdPP7k3Mb8Z6ztcPEtvGytbj8jmTvUyWCHKvU6HAZNf52e3WqTaRknKiWv8jnDErC3qKiiNhBqms4FP",
  "key44": "4BoZDsfM5m8eNCoeRz5n5e4qfiwpfoP3C5Ws1trmkCpcLJTkgpty5KVYEYM1MsWNvWBH2wgjLPxbSzwEKSSNrYTg",
  "key45": "2dY5g6p6DJE2GCy1YYPLtiswevQh7VeTGwSZEe7SaKks3DLx2op3L75BmC3bEwaZ2cnLXi1rtaX9dtXrLu2z6osb",
  "key46": "63vqanaKCxx9Z6TxNj8ecL6qfdGkGpootAvGtRzgmtKCa9zRGoKUcYh8qqywGyEnzFuYxtDtDhxJvQFHsr8n5Jwq",
  "key47": "4tGDMvnWUNwhPEbjG6faDt7snPgmrKXGCU1wtWfikF789SNxqpkJ2fh33krDPbYAHNUvtKhiuKas8fUw1RSyQ8qi"
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
