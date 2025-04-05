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
    "2McVDLNo62K3y1vFxwQsTiqzWXjevVjUxt3qX53pC87xrXe34hceh2YcewcgNNUaC1QZ2iVg4aHj76TjuC98RdFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rdstLBfSgBeA3iGdN87W1jTu72CBLpdhWrt8imbM3irbBnJ5rqZr81wiiDgmBZxr7PXD5it4h9pzbSdZdCv1Dp2",
  "key1": "4U2WVNouVoNdH5grkdpX2ARrrN5fsBaY2VCVUXJuoS4zAj2UPqXYNA1vZCp9tfifAc79TJU7UB76pPP4bZqt5pPY",
  "key2": "2uFsFzS6pMBLB27R1PsGDX6qXmRSwx1Ka81ze62vY6rYRsSgVkB2Fj5znUPGVJaj5MdM2XDN7aQ28Cn9tyPGPghE",
  "key3": "4UvKCmmoPMpxGaxiVQWQq2TB5x7aYH9591KF4scAFpVSUqL7DaL6DNh1XcYmu5TczVn4aYEQXAjDwZTbo1zpKMm",
  "key4": "4HX7ERc1GGCWg9uVriKySCohr9Y3GNd67K2HYqDD94N2TMopiaY7rtq2nvUqNfSF3BT2UCuVWCpRsqYb7iEMsSjA",
  "key5": "3uN5QFbR8uUiRmXWCSC1JedciJVXQLiPYt39Du14PjABDUCVM4xE83sfdHEbqtg6npCnUb47xQLYmiDzr4W5pSc4",
  "key6": "5jTV4qEVR9g68wEYZdtoyXGW76q4iStdCqyhJgHkLEtoryaDSAPXy1atExG3NtnTYebEV59cgXXExFxxgNp69ut2",
  "key7": "ymNJTKEoE4jMUm6EpGSzSt1VAdiAWNd41XPieUE9Yo71R4ZMKT7waz8WTW74GCbT5V1gTCxMZaB8Cz1BKntrDMw",
  "key8": "4jhcEoqFchwZUfkjPvDktokWtNjyoe8mekVDLjWVo3LxSAviRqVz3ZUm9yMzSAaufYcUtUeyST5qjdHCv1uHXpL8",
  "key9": "2AMtxUyxXKupjMA7hoEdcPn5ixHRzXQBv87zC3jZJp91XQNPkgMbjhi7ewkpVtLZQLywAEtshATjaykKYakpNhEF",
  "key10": "5zJLLkuU9ufyqu1Bk1Sc3oYdTWBuyWjXJLuh34PziWZ9MVitG4A5QWiSAiLFqno5XMHEBigmshfrc2BC5q9x5y88",
  "key11": "4E9fWn4Nc4TTr72y7w3J9BoEpAdJ5m9tEuZJYKTWd1uSyB14Rk31JahPTYnab1XodB9W7HPsViTh5NtKqiwecgGG",
  "key12": "2iwsreT5mit65xCU7v5bNcz4uQ2q5ucGkVEAFPZmmBR84zAG729DKY5UZ3mYeSU7Lt4TwSNHzpveHgJPbChVXsRq",
  "key13": "4cdAh1QboTGJx47QwZYxbQna8sWnyPeGHfAz5CLrgGektiGqw8GVZR9wMGSnxvxAXzqbwFod5SKoqzbthvWKughA",
  "key14": "4TH97Wi6UiLyqwBPmSfqmTM9Nf6dXpinuDNebbPAarWoBXxGz7usYdNRMtfdLeKCGkmmAT4sePsAvj12rWHfKdyT",
  "key15": "3apBLbEpt9LmDudEw1qpK4yT7F3oJ1VoJZfPLFjJy91vKLidpiDaRHTNeedi8E1jYHBt2hfLuPYsjzV5nmdVxMG2",
  "key16": "2ZiyhQNBMobQ1VtAT18iktmTt9WVwto5KK54Lxf4vxQRrcSmwgU6eTKzj2VDQDMod6a9ZypNBQ5SmNFa8D4EYfLp",
  "key17": "2u4619EqBi5kYozaRHy1SswdteZSH58Nkzv1F45G2A8PjtJACQRn9tytiio1xp1xVhCGvMbPLU2JTYcoXihoXvCr",
  "key18": "2Ch4NTtpeRMoQbaVGJ56XFubqGojPL5ZE3hknDfmPYPdCBmknzESHzrWHZ1RhGLPXUxYAXJb3jaCS4KYGTPV1fuq",
  "key19": "44iDLdRMAm1CqYs9uRcuXEVrWBWvDcd9W7vRTe83ZzNERawcwj4FMjabTEdnsc6rDWYzU8MPVEGvZGmV3YJguL4H",
  "key20": "3U8mchkjg5WW7mku29NXEMMu3YUpaWYgCzZtceSjq4iYWWRmT73oC5QuDLy94hYVouVryz58gkubdsKVxMd91YMN",
  "key21": "J8afsRqa1sACfnEe44xsuYpvEbF7gAYKoUVt1dq8zKE1wsoqFp8fqoMyomv7F8joogu2ptXj2QcJRiDnaysam7U",
  "key22": "4e3P1ihGgHFxLjgSLeGSrgiaoSzZHq5qzCpyNKTySZgRn7WcXURLarUeUQQCred1DvwN68844qTYE5SuLMbQkRLx",
  "key23": "DRYw1WYPevthNnr1zqGuK7QtBfgYJeGYCauiaLF7zTLPojJ8pWubrdq3PNxdUV3hSeFzh3E96mgXKoMUxuiq723",
  "key24": "5garXsgSV3mzU8BddzxB2fY4xGv9GzmXsjLKGMArp9nvZKS8EqJMB4qchu3JZCAnqKjPsbLdDYAZd3TvAnsrGzJY",
  "key25": "4iFndupjECmULcRzVeht2fXLcVv5pf96ZFsJntWH3jDTtoKX11646rYJ3UnhpacwEDXY562h9o66zVXW6hWRzawN",
  "key26": "5ZWaEy2mZZ3RsMd3T7wpUMvctwJDz8dwEnG6u9cTFQqbi3tcmFYygvBYBbKiyDgXF6FpCNbnCTFtsqjvBXGBk6tP",
  "key27": "5CDSEKyh6WBkBaoFTWFMpsuNb9dFzR7HpkfH4RqVCaBLyUbsy2puNDpHi9i9qSCW5GmVgBTVUhAqtBuj8inQcJac",
  "key28": "52oyroS1wsLo4gssK7sytqCTnxY8Y2SoqAMDnzknzUncbkDbMbPbiTRJnTkxh9Do843Fe4yTUCL2UjYvVDhwCG9a",
  "key29": "3F2N5aRBT9BDWSwTUGAhcfDQxF5aXsateYDG98BdGJXxzfhHJNi9RK7WVjhjhH9L4Rou438Lf6EsXq1RT93RA4gL",
  "key30": "vxjP3VPaQLeeu88hHLfx9anPhPDVqh9xoagXtcT8JcXFYSNLhcXJmaqh7bAZEetXpfqfVGn99PanVVUVwMkm7xY",
  "key31": "Rw6KBw82UN9pTxJaiLWNkBr8rv7FNi23vhaoJ5Vtn9FSqN5UtQ5Tcimdh3JJvVaBzRshqRvNrsEQznVNEumdMYX",
  "key32": "3NttmgFWMw81CLnRyek5EFMrDD1LiLQWTt8qJDEMA9Q7EDTkv741bbPtFaQaLqyB4rzEiC4rNDKsAbPpxH55MyNa",
  "key33": "KSRkZVHvsPoqQwZRi2AFVqrsv6rQN6TAi9uSGureY3q7CCQD7kofb6oSNHNKPsubCHWmYxMAfB6tiQqWrxm1FP4",
  "key34": "48zgW9iFGABetcWHLpcej6YfBcPnZSJASTvAZn9A5afLjYHvRPRNfBYhw66a2bJraT53gatmiTRvcy279Yb6PzKk",
  "key35": "4Y7z5xDDwZPMMzZCZZnFSwJDLsLcihvnZN1VvyAEWqieaccqiCaCh76Ut8XBA9aXUFTKxer38yLhDsPiY4W8mAm5",
  "key36": "4sMSBDbDSmWki1kEeuBsHwTTmZkMDFCTG1AC98QwTBEhUu5ntF6Vv2iUF1uWFKjiiPenZ8QgUzhVy9rPSbMAW7CV",
  "key37": "3CLVDraGeKKVe9QJJFsffh8F3uDXyjUmvKkH9suzNyKawwddE3VgUt4jkTVmPhk1goGBNccXRoAsnKXdSTPaYrau",
  "key38": "2PVVFvmd1F6Vrho6L5MRV3GUR8FaJTJ3WtU5DEXD8CSjxWsiG1Dec55HfdnwXxhtcYY5kzx83fkBmWfpB4C9hNYZ",
  "key39": "4ehJpyLHa58qmLoNWM6PGk8SsXjtgqLftfUcTTUDrDztJPpotqw6MV5f8254Ty34pmJA2qdzTVw2FFzvnn1zwgFw",
  "key40": "7q4fR7eoe1zf7sCsKt1FLZ9GkuoZ6uTJy6rp9dY7niuijaYyAeANngj7DhnoXCxTAr2uZuDywy78vpUynTnwRkY",
  "key41": "32WJsTDWDWc2fjMjgTxiuj4CHpECQEiK5yFkG8WMCFpN7CucT7YyPRzeTDpETCeRyM5JH5mB7SL6RrT2njixRvQG"
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
