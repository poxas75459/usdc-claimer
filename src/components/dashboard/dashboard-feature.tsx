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
    "2yymMAynj25tC9yNwD2ohxYgjpiJGz5yWtjBYc57sihREzBkGK9dNb7R1qaUYkYTfYTuP6o1f4aNZH8qNyq1XL4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yiBCJrTacpSyqs1ca46ruR5m6PK4pisKfRNoDFBN6sUe2iDUCQL5NSaup2Tz1Mt678na1mAt5sUHw9Z4T8FtKYj",
  "key1": "2Bp5BekQ3jyYFkrTpvNHTy1kATQ97YLcLGsLpybzypTM52g4jhR6og7PagG7zFX9p6WiNgn2xrmocqXkhJJPwdfW",
  "key2": "3JmEwNpiM3qgmoGCDVGUXqCKEdzFokcCG8pjbQE2GvvM6BzUz4TGpyttuaaXmdXyC8FEDJzvJUv9BeB5t9hMh2E4",
  "key3": "2C3jkbuaDjUJ8YsTQyPoTEC2Pyw1xEjgBPiRyBFTfDkc7cMYXnV91x5zwHLH6NufMAX5xnvRjm5ozSCgV5z6KU2m",
  "key4": "viAUzvhX7Fm8EQwaETQBBs2fA5kcFLDT8KhreAgS86LNDDGFMB2HqsxbX7H1ZPP2PDtTYrjNiZDvTZSHWYPcCyQ",
  "key5": "2eSdoyQ7wYe2P1LgGATyt7KkDhwVZGjahgUGHjWN6sxL74whY8RgNgHcf19EF1pZ93ZaGp3ASeDT276f6je1JrUs",
  "key6": "5gcqpcUWXci9acExUByWA7xffoGCx92Vqo7ksC9JadmCmpP1b8BCMGdrfzcqdyR2rJMBn1GcnhKaayQdA1VKKvEz",
  "key7": "7d7wpXJ9mCUkXsZTHfc3CkuZSDQ4p5JqwmFKJaD4DLeDFKwk3kSdVdyMTknRCx33YZueTMg8EUQGs5XNZshYWqX",
  "key8": "67afDZ8qLvwEHrfVbhAjzdyHQGL5u7bTgHZkhDPENSostp66nbci77cCZGcfNg91BB4bRwJoirCtAAD6iN34SLLe",
  "key9": "rSVY5fD7ztfs7A3VHXwFwLC8dkXw37NusK3WDveWDLihDibQ1TzoYR2wX5XsCCqgmBwGifF8ZfmcxLLiAQbbmGT",
  "key10": "DjxTBojzo2HqAb2BoVZXjpu9Nu3kp6F28PYDzA6Muu7Gy2NUzwLFqZsifvwPfbawYRz6MsXxggD6cBYy6odw9UK",
  "key11": "3BcNHMhMUCPAr2fB8kpYU9k3p2KpCCGua6tGS7mam6VfQnMy5yUchF6KD1FVvHPRswqez4ucM1J2fPxQQ4t2NGxj",
  "key12": "5Hcp5RXcFLDX6kuzw2ADCrXcicaHFha1baesqBZP3hyf6Uk8kgMAQXCKnj7ApBkh2XG4ZbcWm1oAegFWWJ89kTiy",
  "key13": "2UXRkeAYEEP3EsepUDX12q1aeKfAPNdFoBHnFrhY1GS8awXiqaDTw1UppSixgsy6aeKdqPbEVpio5oaBFcwbPVLi",
  "key14": "4Py9BGsRq337nMmrSHVgSmcTkxDSMKoiwKpaQ1qdMURVB7MxQRB1FHE1ooH7ySXdWoZcD5yt2qTnKC2hbwFAx47B",
  "key15": "3DQurXmcNszTKtNQ5HtaCu1dQpJkinE3u1AkMvXgxCtnw4rd2jPVvk9dqdSQJnQbP6Q5rcXEuBXkForKhDYdHsDB",
  "key16": "5svYtvF9TiMWXLHV6bzWRLn6EWadBtjGT1zFaYwyJAq3Frzhy3hWooDzwGcKHV975RpUZDkCcKkFJVcY3ZjoJ5dt",
  "key17": "3DajAmhspUmUUnqpZzMgNU8TwaBMrTZMhmYzpStLarC8o3wkNAKbU9mqwKtfNorniAUM1tmYqJ9eYgn94nNiDpTs",
  "key18": "4U1p44ixjtM1BdtrL7tD5uTJCZMt6vnoKaJ3qfTnStGP6Y2Bu78rs1XMgMkvLPUm1TrqcAHbnxoPcsAJPnRchJjo",
  "key19": "3AEN8oC9w7YyWZ4xtSVBs1rWtFdo2VWQyqq8rKyAED1AitMZcfFcKqm54oPAc6E2QiFA5mUCUngTsSEdZhYhXByt",
  "key20": "isC6TxkfqrESbvmoApkrLQCeNi3SJgSnYZgWD2Lw5dPCJ67Y2zsaFEcVjYNWsMFit2cZoK28Ep2xwmvv9ey31WR",
  "key21": "3Pv29WEvMs7YyhERiChkcH8JbazckaaJbshZUXG8TQw9ZxKuBbXfzPMPmApaJ9XcALRZr64373ebzKFfMaHxffbF",
  "key22": "2PTx6HRe2iaVNY6DfWWRqkAQwuTkZq85iCFThyuDQ9ruFCAYbNmfs1D4yy2ct3ob2rJf2RLyrb5Zv1zyXrkrAdNR",
  "key23": "2Tjfv2EjVzsKGRneBxdEsufovYjCM4AeDgdWJZKUckTMSBJ2VpN2pH5zXg7neWux2k2sjTEFxRpKU7VPMv8rHWxt",
  "key24": "2fRcEsiFLJvvRrLe3s8JLW3F9BUKCHRNXPy2QrYTpfZBac4K8Vs2j6Ub2CGjpNHSV4Ku9k8ohuQ1SZv4r1X6zpww",
  "key25": "5L51eWVjnGRiHxxpehWuwU65j6GfVLbG8hRk5wMhmK2undq2oyZzVCraqmxRp6zRnzsMUCE2EToZJsBXYvmKSi28",
  "key26": "2nq49zkfAiHby1xik5K9KYgggJvb5mk53h2yuZB9ZyTdxY24F1ovjcFPVZsBfK7JKKg4DntRYhn59oMoFaPmGpCd",
  "key27": "675K5uTPJCnems5z3pHGbGVxiQCMr29KNYsAjzBL7EbkioAYVNK9ymgLWKoq5vk5Q6aqWiVqGVRrjpfPWcNWoVCJ",
  "key28": "5mMufRjG1JdTHLQ4vcrn5M2W2UUH2P3Bfus4CiFsBVKZ5N6BD3AX4o4HU15JeuuFEsY9BSkBo9R85Wcen1SsYksj",
  "key29": "k5KpwUHV3dh4zcvHxEfNZUUnK2YB7vpGkXetSB8BqbAQTezqghM3JDwuSPxpDW1nuiKgptCCGf61McKxuBagQKx",
  "key30": "R8NE2BweU3H2dzpjN3f7SC5hLZcm3SyRcnbfnxPmbCaZS4NpAcLBdtuAG87WUQZrbUx4Q63fGhH5BQuuS3WEbEP",
  "key31": "Rx9dvchQAQvek81kE6eQWV4pbSrvWp1DgzzshkVqLRxNAqKpP8BG4Nhwk6eipTJU18WiXhNBRAymuRfsQQDAopq",
  "key32": "5nTYRE5wadtifUBxh3XH3cxdwWg54Kq5rMzJU8zGwFMn32bMaSHHQFvMrMhZtiusVPz5eFTkoXbRYbZKimTcsKaD",
  "key33": "3RJ4hWCH9FfyJgCf81YPujWDEZ4Zq7VTByAVtBhWJjceo7JPEDescMr1hRK1Uc6Vw4b3Vwh18jK8fjpcZnkWhRYr",
  "key34": "7QbePUDCkpBoT2B2fC4KdhanhZpoNfTA1iQqhrJP59b9LpntCStyeGD84kaGAZdsTArPativuc91s9Dp4NRZsWc",
  "key35": "5zkbroWqXkHrWkntCHmmpy66dpgCt8xp4FgMALCk54zhuTQfA84dR5Z1XWjH3uj1a956qsCr3HeEp7sseBFqgJoG",
  "key36": "izs3omPouu53C2b6ZpRqWp3XxyVmp7Vm3JPx4wrPvT4N5FUXxyY1Jq7sTkRPgzfLzvmPEyoATUHUtZrwMnCyHXx"
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
