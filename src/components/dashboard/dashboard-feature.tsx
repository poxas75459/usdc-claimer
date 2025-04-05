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
    "5B9i6sMLQBW3tKtDWpkyz2eiXqaa14zsmJVLrj6vqy28gtWANkLLaaytFzcbByxqCsisf1cTdQta2nMzqF3LnfeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MzCuXmMXcdR9GL9etvoQveECHYUnf8KPDCc4VDU9PhgGTj3RVohaCpxLMgomi4DT1fC1cD88J5SwVg79NkyoueA",
  "key1": "P18pWKmWERjkQ6hcanH5BPMZe1rsSeenSf4q5HWH3fuKh8d2drS67NTBvTEpPvEYHG1e6Kw9qiWFPPrgiZyBzJX",
  "key2": "5LsMf1CVmPruete7X2BXHNhP6VqLvPseeryAreC6MoAiMBR1u3QiqtNjKtvXDmZ1hZvSidE5xuXDK6MfT2sfRac",
  "key3": "3Fr1NAidAxSeFJsFbNrYjhStJ63QJXx2x8zY6makhM7BTakUhPmYsvimuCYSyLYSTZPBP4U7E2VN7SgH77jAtJRN",
  "key4": "2Xsc9BBMSMeLfxKt7yMzEu2JNPwi5fjkRi6a7TLQk7NK1aV63BKmPgeUabupZBBPwR9GFXv8LaffpBbyCbX3Ud5N",
  "key5": "395VQ3gCG2h35ABwFzVzGsojcSZFRG4N85Co1FjLwd36KyiwfdWEpB1deJodB91M2Y5dG1BDnfsU3cf5M3kXWbB3",
  "key6": "44UqFr6WvJMrAeLLuoewvNiFhjR9xbAUyA8GoQby2SxMKki3TpqA9q31zQxVtuLQtXfoEefv9g16cqrtatKv1tXd",
  "key7": "5JeuZpBxQG4cF9iiZWUs6ehJXDKuofcD6kdbhTLiMaiuKaHmEhfpot86pgueQxbg7SU2pqWB5nQsY52ZviT1Z4Q2",
  "key8": "2jJuXftFrHPZbLhgkR7tdL8A7Hc9TvYipGjvNZDWM16NLTPNfU6jUtPdLTLTm2bRTyeA3biVD2GhxLFXyrsMhmuw",
  "key9": "4X6yNJFgCJn6gqZ9hF2ucazpmypFJ5ky3LpDho6YUQF4jfSv3SvY41qpTxTXGat6E5KhQamn3eC3i4HizF2sCXuJ",
  "key10": "pCiUGrSxp9eLHBDgortDQhuRueccq8tn7QpKzFW1K5h6P9VRrXtrcQzPX21oDWXnsTUnPS5HSvXyRh5wGPkCdJQ",
  "key11": "64zfJ7PiWSsGWwWigVPNPHvyTjbKTV23cdcYbD5DUEAwCcbnpbsjTZh763tKx8fHK6LqfSU1Yvam6KQLFXZLbA3h",
  "key12": "2jEeRUzJwhjqPvAbSU7qzznDFMY3SoMTnUX9Hp85ypKY9Ke1KHuzDdBJKrJc5ScAiaxDYRPCaZGdivoGH4Cu5R1n",
  "key13": "5wf2kVKUrEnxbBLb8mUYrP8qc4r3GtS7FYqpyiGoNbRoqzr2QRP9sKnu79YPfuZ33TuvZtGrF1AqhZn5DgzyWYny",
  "key14": "251WsdeqTToUHW7WMeoMdCCj45cgDsrhdzmJFLnYenyP8q4TtB9SegfkLssJW6NmiK5nYL2xGxCswW8vncXNdprz",
  "key15": "YNiC4XRtBHdCr214dUXckKiEGhZaDFKBRPb4j8a74pgfbSY5i5AwGBV9U4uxsYutuXVeyi73Jnmwr6CAwQ3yVAx",
  "key16": "5yoUJDqQcpiV9h72srN3EfPLZZGEAp3c8KbqWHfS2bHVC6jwNX3sumbL4xgaGmYHupC9CpJuPFscNtkApyj7zzxt",
  "key17": "2gcVCNEBuDAzAP8cZjjsedme8bdq2Ri2Na3Z2u1DggVwboAsjerkuZXoTncWRnX8yWBcuqs8Gh39hmaesWKvNoki",
  "key18": "39sbdJ1EncSNVhv2n1RSQJ3d9PfXGdDrNnqosa4UKrVYDqfk9bUh29DmSXJhuxRydrUpryRRyMdXsgXYQs1q6u26",
  "key19": "ZHEcnN8svsB76GqoRcDLR7wga2aYv184gvxPiMGR8pHyP3KWF1LWhPXjGQE9vy9U8KTvGijTqBX2vrEogfcXgA8",
  "key20": "4BGM7F5v6qaxKWYAqwh5ChRkBeKp4nmTHnfjhwnXAM1f1u6qsZprkKMiP8HaJuShExbxvzvAWCQna87HVpmw6fXa",
  "key21": "aop8h9seQ17Q8weAkUcm3Mab4baAT7dxMVSXrVdA33H2RPc4v2c1dqDtfJDQrcjyxnE6Gr7JJA7ge4fHd7Zpp2K",
  "key22": "GGiPCDWZcfUvXhmoRWbLN8ohuW8qHB4DjXTSx77wGyLtNB73CAAFCTqgBKpwKby57h9JkENvc9vSsakDtJuyv6a",
  "key23": "jEkXMLmEz9euR8JtoyQa7bd9d54eYe9Q9vUzZM24N8R3XiDsLEDp6uVTd6jb8SdTpHgZAfpNPmfnhY458LDeXJ8",
  "key24": "KCqba5uq86ayuud8egkYopGFY6J3WShhh6qugd7KNN1DPXrBMK9yygxYJBXRvFKZTnKK99UQmh58qyRGQn7Rokm",
  "key25": "25JFERhYWXerSU39LWAyzgWpGmoiF1JqAF7BfNuAVZq2fTrWjsyH9xiazSatYgtKztYBgB1dy3g2fZn976WE1tEe",
  "key26": "2dX7wJzpFVXdiCrWm6Cyx6o6WUbELka4hjujXh1sNtnAFjVQJEQk9VsTes5DrfCJPwM62bJwT8XArxCDGejfyihE",
  "key27": "5CXnZdL5JcFYY5NyxfzsV5DVP2h49gP2mGi6tVvHCCfBKsYLVme6KuDX27p15yrwRvYiX6e45VwmiNPoSe86DWG6",
  "key28": "m1uGwdyVGoaTJUFo7aBaVRw7m2pWYXXn4q3efsRGxciQ1ZEZ9Q6hiDTan8zCftGnX1QJFqTHBStu6swnuwjBFr8",
  "key29": "2XLTx34eRL87L4jWmXbtkdifJs3N83a3UjGRm8vf2g7YGgQPnKWZLfVvZmSKRSCJm5KGUHc6Jgw8a5nqiukoeax4",
  "key30": "5LDcxb8raUZ55fGkHKmRXEJMBRcPdS9t6Wk5m8BBLG34iVBgWfzHPdK4WQuRjpgfCP3C7ZwzwBzKn1U6gZ3viVhX",
  "key31": "47E8YVwY5gdDfa8L7kwt6vzW7UymcKmfVcmHa4VzrjUGGiB1Sd47JWKUbRu1AZt1QzrQEhMFpEhENn3KGXoyRp1",
  "key32": "3eRBu4Rfc5Y1Cq2g6RGU8RPgvUVLBUZrfzT4dyQMUFfx4X2EYgXWYKSC5VYQLkCNPerrK5HmYXiNLceDVQ4c96NJ",
  "key33": "5TMJtjubYYSBLjJiJo5hVDH9Bq5ivrXn7BZrxgbDk1SwyFRmTDa4WrvMjWpoceiz5xga8EJWyQbFVqpp6F6JP6xH",
  "key34": "4rt6PiTNYmXx5DKQfeKxTdbQj8Q5jCB1tsXAStUpqnyaU95GWsg3qmnb4DQzESHtD2tPQW81bptZbkgac4dSi3iJ",
  "key35": "3Trk45ui9NduSvt2LwMLLJhyptQjFbnZ4e5VCptPqEGTwQr7YhHQyJVWvCVPuGr4xEAa9Az9eypn4SriEExcU9iz",
  "key36": "fGFc7acLEAFik49tSneThGDXQPPZE5S2zSBLvAdLZBujB1akstoJgJRqbpiaHtuKhdDRCfmw6vk7MnsKSXst2UL",
  "key37": "4npbj7PNWHsT9iM5FnmgGEgiAkuVmsydS5uAkyUBRFof8KXUVRfGkqE5LyCLCx2SEwM5AjwF2cNVycqvHiM2F18g",
  "key38": "4Je2wNL3BW3wXE6xc8u1N52oAjsEYykekJy46wbBVoANhm496hmwWLCbJS87UnkG4dSbTFph7QLgtYNSj1GrCKVL",
  "key39": "2maxsXQQFASXaZvZYavxGFXoJkrCm6qa5exXbMsHnP5SfcvSGcbBWEUJwuGxpcq8ucPXPQt3kfW6d76p1guKZQMr"
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
