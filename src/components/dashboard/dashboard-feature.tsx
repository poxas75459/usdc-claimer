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
    "2wgD6A21DVqnLSkCjgAJZHCXy3gMc3VU66DTFzC8vnwMFFUYJkFPD2VwhraJM9ZzUYB5fPXYgf35KAxLuczCdeai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cm8Vayu1GZQ5RHMTZo6gyDGuD4xFnNSp4fst7FMe2dCnKaP75jSCgXYKRBoJWKQoV6JmidfPoBJc39xzjA8TPgP",
  "key1": "5PKC9sPangRQHNnTF1n2iqwGMZQQ8NqUjT1Fm8tRPvEPdGvU8aE4ycb8rkaw1u1xHDatEKvbm7AriCJkjPwC4YHV",
  "key2": "3jsqup9RTgF2MUBh5j9Nf4octFpBmUMMzzBhwdcEtkvt9PaE8Bv52eG55LB3TTGhZqe2y54wBbVPx8nH7h1RHfdD",
  "key3": "21gcHGvnxLqow157iJH7LntBJXTzF6TGW1jWHBVBZyu2tjZUvcXgHMexr9qMHhUKLPX1B3uD7F68e3pvhvmAMo8w",
  "key4": "3XwV7Zoh2oPJCqQH1F5E8UpKy18B2VbVxa3NDxSvEKuZ8opvWNZ3fbjypETMq4Si9UzzmndCuLdi8h1w9AZMW7hu",
  "key5": "3FqTLRzD18jD86Cr3eZLME7S7vZG38FN52iRR7sJoV54wiDGCnLaiMEizYFm2erSoqbLcicpZUns2xi3okcV5heR",
  "key6": "5QMREn6BYXMqsQL9HM472BWvQBK4BboEHEq8gMad6aQxSvmejKYJioYhmibfNVaqhwJQob9Xsbx2QEUSAkzEhMUi",
  "key7": "4ETXHjCLnKWaVYefM7SJarTc3z2gk4Lt2bQ7Fjaqu2W2tCsdf9TGXCfqhXv8o9nvYVVrJsNmetkskyZ94NRzVaGH",
  "key8": "3iChgSdDGm1y4AhyiXmXjsgSJRh4tM56w5YuHib3NHHySZ6P3sSiT3zKKjS3tAf9ozkapvExo7nagfMbpbtzDyeJ",
  "key9": "2Zfu12SfhVqYRf5SGJ8Jp5LnW65aMPmS7fqWtR1btN8fZ7De159yxkXW1TWa3QVYhg1C1J3V4BKjuzxB5DK3MXo6",
  "key10": "3hgBypc6PFEcWcrsnPCCrH6LD6Vz91AqEvw6GVgyeQBqxA7qfgNMG8cjwFaNVty1hPypiBNmdmNDHKqDnr7aoJ91",
  "key11": "5HGL7pzKRN3R9bYDPKxCNKXa7vrRJJvCXeF2zRfKw6so433PwhhNPW5chQvVYSCJ6EuWmyEFYfs559HUPrs5jALf",
  "key12": "5M42x1vbeL9Wc1hAFSvFgUmvrkaWgDzeeq4vjnekQDCT2Q9TGr14tWhbzNX3MrTtH1pBVPBP82QrHr698cbXkQsT",
  "key13": "23jkvzgwJkgF3VtBPjnWjtRPdkSt93Shq1KPnAAEiT49zfHPALSyAMcpgSKNxt4Rae3DmeAFSAJ34MR8SM57TS36",
  "key14": "42UVPgBNb8ZNukh7xuud4HzEEawJE31KoxpuR5Bb4LYLSQ8FaroQJm1uzp3ouCsGB48nfwrj34Q3djEuENcc5oet",
  "key15": "4bgmnNoKBv4i5cuakshj6QCSHZ3r6j7W2i11KtqMNpfgFRRiDPsaf3Hbwjy5GQHf7p3wQ3juS7Vx1u6cprQ4qJJ5",
  "key16": "656R5nwJoGgyEGrZt8HvLZGK5rFxK8fZ9GYsqJt5z6pLmABLovjft1HfYFABXcRgXR3MTd6v8UFJconJHLz4buJm",
  "key17": "4gjr3wjBncoY7yaSvQ2F1jpo73KVtoepURLRLzRdomb2r1MqHeA3SHj6DhsDaabQKMCg7VFG7Y51nBVFneXG2kRF",
  "key18": "YqiQKxoHaSgwnDpL2bdmRTbN8wyLEt2ncKqWXDqRrBsUzjubtUFyLJWLmiyXQn1oZDecwkPYY4J5mQ427hm8Emz",
  "key19": "4u4sWLg5nbvYv7zB51Kru8CufcvN5prdqeZGyEE55nNY61hjkXLcPRthkTa5A2NgxDAbUi9qQg61beUpHhUMNcDv",
  "key20": "5Z7JkNQhmpLQBGCNG2dXCK3Vjim1PXjvob9RXnvWFYAfgqQQXZ4N8t4q71mABgtiFvv8xyRnZG34iA4k9d54ZGNo",
  "key21": "37FWx4muwnot7LoLEYqLN58WYuJsWYCiQoaJimoNvaBvK7zSuxGGWHuTecx1UXF5rrXa6ArU1ybq7sCizoYGBK23",
  "key22": "5ufMMT6gsdGPLUxmipfJ2z5yVAmdmBrXfAg2ieHwyPYQASKoX3UXPY8We9YrRKKbQ8kafN84qvnA2q172hPWChZr",
  "key23": "2RBrJkjgJiquGu7gBaynTd6ZLb48BAP9Y3a1aWTyhiZMArA3rHsgWvf5cuAYPrNXvMajNd5FXQK5MZYQzgcnauAc",
  "key24": "PAYPxZJTeK4RsbsTdsPm1XLLwV2SRgQinycqxeDqpFpeBywDvQq1oGsC6JwkWxe5tqcE2Kt5RjqkD5rEY3hfSLw",
  "key25": "3RiPAtFN5eR3aoe41daFSyEjwKiwv3azs6HjA9tNcajx5jjHeUDje4xniqtshEy84smGTAtLDc1Lzw5EZ9CnCBPa",
  "key26": "Dk7DYFpjN8ccBSbBXnQMzPqimnGZuVPtRofsFZx4ADUs9WXwnFxUGzyw56w8LqqHhE8G277yApyTxexat2spMmT",
  "key27": "4q4BYesXQtpUageUNk7T1b5FcshvwXTaTtKSpB39XwqtUmbrdWWGiUY8tzXrPpyGD7fVak8iJW8AdZoZmH741VdQ",
  "key28": "4rXQ41yB72QiucAUyzD1VEPXW8sPXnFwG7wVSL66gPVXe5ptuC6GygJFusNkijqMLjUpN8BsAKKuuZRVGrNLCWwS",
  "key29": "5uUxK4a7vLsCBidg38uwyEVU2t1Sf6BQaVPUAJLu5Kc1ndBwV7hq15YBUcg3indH2tP7Q3SyyZ1upkPRRPtYYzbZ",
  "key30": "2mXqZZsLgnni3dEPcGPkJqbZAtaBR3HGADughPHEM6T8sjbnavNpnfBALq41gpLbBdQj9CCvnvGvBSCPmAuaeAqM",
  "key31": "2S4DPBpYU1yTJiP8Q98mTudznavWTWHtp4yVLCaozHWKQyZtsPoQ53smzpdKbfWBjJEz6Rp8FPCexM3CdUe9k8x6",
  "key32": "4gXgN16FSmrVUdNg6zizWDepzaGEjSDKVNXCG7NcbTdtw5PBBZbsiD6WegTLxPc22LkTrnEHAQgPzVsTz1AProcX",
  "key33": "3qAuLuakXhpTYb56KtXkjCfeYcMky4Xo5ZC2REZfjgbi4TKkhBH95XZA3iD8sCzdjVp2bDbaNa1GkN2KRUr5wYFd",
  "key34": "5maMrqRRB6SDf87bzhwvqbcWGkN4Q3GKPswfudMzw5ozSedDdbj8SKyMergtJrsyTDT6jGWSqwfx8AB7p1SDMRQ4",
  "key35": "2nW8nwhQtjtcbjU7onu9y6K7eA6PXwUCaQzQE8KrP1Ga3PGcnzp1YStmJVtEvu1bfub3ACwNvGMWpQfz5JSNARs6",
  "key36": "24oinqen89bbNKJj19pyvsJnm5aNe9iiAvo5935WzUVYVLCcmuuSw5rz7vvxLx13jNGMvZKeiiZ3YLo5X55EnPvS",
  "key37": "4GZkwNi7Nxtv3RSBMtcoqKNEy7ifxtd7Yp8KGUQnE7m9R87HVuZ8d3VyvJ3a1JJhc5UpKCXEARNsQboqozymAxfz",
  "key38": "5HL8rYAd47GW5mVVtUUuP3bkwczuE3B1Pc4B896neeCTWJRiNdgdCLQXPcePXyGvcyg1BazkbB3Z8Lfg1cfQbH25"
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
