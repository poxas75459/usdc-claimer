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
    "5k9jZDnEaJ7bN5x1erDdG9DkcMdSvw632pNMsnaYFUH2NQcBgcmA24kPYn5XfJrvx76WC75Vvq4FAhceRPz6Eaf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cgkKXt7UMt22CVPBHy9PJwEa3qfwNuAUbGT8GvLrubRqiHhdAvMKa6DEdfjxfSKw1LWsQTE4H1U9UvPUawPtJno",
  "key1": "3tyfNPTFhyjGpLjwZkYgMySTSVnbx2e6cMrVns5YWAFYn42vB4rwbytTbMpVGNxmnZ4ADvePtfKhkCyTvYUrSHTs",
  "key2": "4KDAGyfnFnmTVAqWSzcsMVvCw2hzt9k7pbS7ScFotJ23jBdmBogXXycbzwsHVkK5TjM5cuvHRxutzhW7vReUP3d",
  "key3": "3yw7wxgLyiAfZkfdDGusWPfYguqgat4PqMecy33kDkFX1EUfoZAWj9hPahFZC2nCQ3LgYvuDYfHm3MHwpnFALLtz",
  "key4": "4hr7kQrCm4MucNmUuc5BZF59Wu92sgjJj2dK31fBuK5AJagGA95u6fVyrEnNbR9ocmfS1tt46aKnBiS95hCTVvT1",
  "key5": "4Ho3DpAy6awPKmkmX2sU8juqDprj5xET3GrJGnKEiUujXk8KopGZSFDqUjbRfrG1zwV8qg9yFYnFAgjmNAZnY7HC",
  "key6": "2disa36ctBAFjaP668KidTaRLbj6v4bEn18SR5uqYoge29mrkrgWD7UCKQ3EfFts48PiAmtx91pU9pLUtX8Nmd2P",
  "key7": "Z6bLsZfGBN1WoXdWeMMAXiqvkfSHdmSBDtntgqBPq8SAW4HKz71SKuWLcWQm9hLw2v93juCpNheDCcCLb51PhAE",
  "key8": "5ceKeRFa56yWpWNwkXtm8Kpw26GzT3nCv4uRRp1zFPhXsEoBSjaNZnUvFnVYp6tDf7KjaQcFqu1pSyEoRVKU4Rz9",
  "key9": "5pFDr1Nn5JPjUsdCLFLmJVGKeCttWDopjhXixBPfuJGQv9KQ3kNs9vnD3ofMpcQNgxjzdwoDtZsZeGpKWQJBydZB",
  "key10": "63GXy9H8infdfwW5g5CSPmYGc3XDxfxgKPZ6344XhewLBLyyaXtZUpkYdvt28b8vUDCiDUoWYRm7RNkSwbYB2aXq",
  "key11": "PH35mBtc6hsoSVzfFaDZEdLbU7AWajwb7dJ6xP36BGhHhcsmYd81xe1FixLryf5UvqHKS9DA5r4PyrhJ6veyrZf",
  "key12": "3D83Fu5HDyCocdbg2VQ4G5vADb51sDDqEH2iU4wWD6vtp6ixPPbDRhgtFDjS7YYREe7QFVPjV5bztJSDHgLwWYmM",
  "key13": "4KHoZFypFoF2G16bAcaS9jT431Zsr3uavtXSYwvgBkcSFX3QgYRkvtZbiQ1PtJ8F2vU9PffBGSv68oPnD3JmuhB6",
  "key14": "PARtNKbCTGD9GJzkbdvtrJKbj8f1ojBDniVeYzF7D48A9Fwmrz86uvSKHoWxAdoqoZvznVzCinrW3ng6UDTtgRQ",
  "key15": "25NHiyxVpGTzieTuNxGTCKJsRW7Ln4MB1p4Vc6TqFG2fvFqsUUCBB5qQWHcjVDNB99JYurwm4Q18b4pKqH37FuWt",
  "key16": "2HngegVwXTTiSPeUjKyg2sPUESGnmJnQMvTAuehP3rch9CHV3Ccjb3fsoeBCyC922ZvknacFkH7BN1z4adWfhkNh",
  "key17": "2MJ24GsfzMQuAXCJGHw5Zo2cUSWwjaqDxyQFMgijXYVVRkkBm7yTkseRT7AXSsdB6M7WaYBV24sKTv9hZGDp4aYK",
  "key18": "43SQn57sMqwgPcXW4AVpXAhq6jVz6YoscpQgMAADoNXnNhEj6XtdXGwZTjrb15peWoXqDQPe7Yt8HLcLkTH7cTr1",
  "key19": "5se2fBGVPopfzrnUEHykHA9J5xwofA8xyGvQWspZd4ePRyJ325HfFHTatD4D64b6zpZvZ6b5okr3DfbPkz6TaFgK",
  "key20": "2zzvXB5UhjXE1FZfHbr27YXZSuVCZbzAv6ky1ixurw8hCE2N5SMbyLNisWL8V4QJusYpDekX4A8DTWUxcYC9p3VN",
  "key21": "3xS1hgWiSCrb1b9pdhCMqdijpNmbzsZFj9PCxeby4DWQyBA8bcFibaT4ob7pf5eDHbhsTCfQM6tPwcaVc7ph1tyN",
  "key22": "64ceTb19pwPDPxXtJndFxcji6qQonq4mYffd8X52kZqQv4P2M4MhwDjhsYdQ9fNmWAuBKRoxCP2Park8B6Pyxzww",
  "key23": "EAPyS3BwGVjAe1ZrXccAdiYdULqh8jXMqcmvuEGvUAdY3W3UjKuWwtJ1AY6BuAmMYev14GgJHuzeTk4SfpKEpuN",
  "key24": "2iXVfzhkMkZHMhNuKjRCUJznbpjRcrEcHwfQfuA4BzdgywTwM52XoKRmftiC6mwtX3RN8qbxK4WksxKDJzVkks1N",
  "key25": "2dpZcExRBKQC6tbr2BCCK8zaL19NYQ53tVn5LGx3eXafvnihU72r4WBbo6WmDKLUXvQRzwuvoQRPG8drKR9B3UUM",
  "key26": "4t1RUX22EwU3tznPbEZs8dLLq2zMFBp1jr8Lbv5QHnVeCzmWWhVzniNGHLi8deBhd5WGgCgiy3P77XWCeK8Rea9o",
  "key27": "DfAcXKQoE3WbDjKFBbdYvNNPgq6Ao3EADbGx8hVGEwddBCsTwnysiMVXXJjsya7j35FpYG5TwNNtRLxtW7ELYxs",
  "key28": "4dyjtoubLSXC5WUwp4ZcNbseApVJvxvcx8RCbHUiw34Rn2ZVwUEuTaWdvFdxg1dQKVE86juH6hvfrxr9vqi2AjSU",
  "key29": "1sEkRX1u3541pkerfDFnn9QLLYRcPt85aUW4CJWZuUJz58tt5V1ih7vyoZU1937ZGv8aRnaxjkjigLGgjGu6wd6",
  "key30": "W59mpP4vZswBMTQkJnv1Zcf3E2BsMq2M4pwVfi3AmPNZ7WXasCuif7g1ZtFHNLHLPW9asUQautdGK9XxoFxoe8j",
  "key31": "2CEWJVux3zCaRhUP3FMnu5jyw5tuGwSKPKU4h5TJA3SCq7YyfUqZzJYcT8HFyM1jV8Yc7HYDFegUp46mYaLYGuXo",
  "key32": "RV5ycVe7diF8RbjdDp9cJLeiiveGUxiCv9rHodLCnVNrB55nrPmTeUPdi2Lka3ES8v4sJByaJedEkPQLumjNBTb",
  "key33": "4j432t7h6YzGuCycJbtR9d27vePdNkyRsGNRoBWUBgoCm2Dcg4xW2Kaw3dFrh55dWW5ohhGcAWXzJhvnRhjFcUjj",
  "key34": "5N2cqPsZy4NvMtHFLVmSPqsG9P41ZamVSh2f9dkaXFGtxPGsUbnpQUdLDHiV53Q1fCFQqNfCVke1MLqMSV9AG4fd",
  "key35": "4xxWK32wEacLdN5kQXtYLktsd2jXs7mnq8uhu5BCNTZUFFPB2kMXcHviiFmz3q4YEHvy2jzLdupowd2mf9gpTg66",
  "key36": "3WykARow5ed1djRSpVHqt6uzjvZntqhhRRkauuAiA6TikJMECnb1K7z9DdVWKUyvGUVeqfnbQT3PWCNv2k2jaqST",
  "key37": "nqohUaeLKGh2Pd1pRbxUVwREcs7zBebPnagbszD3HcxxoiJxrZNRZCpaZMYSEufRHVcb2tBXjm6WSPFC3Pq6vKe",
  "key38": "49kxBfS9BakSbRVHmvbcAsj5N7JyU6tSRKLu6J6GZARxQMstEz8hQG31xr48hei4B84ZntLA3WBS8NDteVNBVuHS",
  "key39": "2Ui3dBS4zwxSLfFzrZs56sNWVsfeLWQ5BNHw1GskaurQwAhLLxLsQAd1b51w4JPP1ksymeofYtThHDRxbiYTRp1d",
  "key40": "2ANuPs3qxQxrEcXKtg49XiZizunhmdHQUbg1pgNoHNBqAuZZ4JBr8xGxFwJw7VwKUbWhjVREgkS4ibW3uyjU2aTn",
  "key41": "3EiznXtnNPkwiaKEPY4vofxm5JNwTirU5zCC3ERGQ8qw1f3d5pWQse2HqG1BYrbt3D4ktzxdVQKerVNoq1mmtxmk",
  "key42": "43qkTBjELtMN3JNgH2JHiNTBe2qiF9XZPXQPUXLcbehT2FT4ZfkSk7yjDyLJjnMn4LKhbr4uUUxdEtX6P9aRpQ4J"
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
