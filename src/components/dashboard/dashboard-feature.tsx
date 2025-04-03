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
    "5SxBz2JNXm4PcA34fLVy2vvEWErc2t8jhgJpMhjv5wsXgoMnQX3PLnHG6XHuwMC3LX5A1PrRpWPUN3DTbJKtrQ8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YECypw32LAwLu5oDiKJSU9pRs2dwzUadAM8UeitUAVrfHVi5EaLj9J97WWtthYKgoXzbWahjB6qTeRJrCsS3JM9",
  "key1": "26Sh44Npijex1PYisRa5UPKquC62FHohbHUkrUX7vdrhgaA5qXWis5S1g3KipHbdwGpHPkPNyT3AgattfMuRDsoU",
  "key2": "2TSMqGQnUb6JcTXt45UYy7mezjHeP7nJmYP8pzFyDuHCLLXaKxd4KALuVLEZmnqXenwgZ5EmeSWHghYP77Bi5hbc",
  "key3": "3f629uKnXy5QUbYgGSXY6SU6gLtYnbawEN1f7v8JP1UijRfZQWVszYz7qAMgboa3xGzPrHXjRFNDPktGs99bHa1d",
  "key4": "TZeMUwH4kADxidumdzEJEhtaoAz14iaGJhbcPWmobTsVZRzfeBqztez72WQk2wfLbNzwiRRVpcMU3XFNKLgLWpW",
  "key5": "5dJYi3t7wzP3ZLghbqRAaThgSEDR6wpBDX9mcbtsk4kbth9NyZkUyXVtJp27SonQBby2HhNb4ht8Mxkof9ARBbAQ",
  "key6": "56RKT8hMBDBi4RqkvUbYVJTauhSaQdTFXk4n1PqQ3oVNyBxKyiuRM1pFRsfYrXz9DEF8qoxGhh4p3wYvs9ZZNURs",
  "key7": "3YATftVV3RCsFPZWoP2EQymvUNHTdKwr5ZCfE8Fdhb3vWJhWENETiKuvEZ3wpxaqu5vgWNUKKcMf1tTR1sDwMf8T",
  "key8": "6LTvGasLd8jB3iztfRJTUrGpE2Gb35KN5fDhYRfJhUVkip7kAJ1prghcXvPL4meAwrQRL6hq1uLbFm5MwnghzSn",
  "key9": "3pC3FNU9FmMZv1gtfn4YMSHmJeKbTCySFQkUUvRCjdchUFKFCJwzuSoUtxRuXLgqP9HBnXtiqtfvW3GCe7fKydmU",
  "key10": "2aJEoxZbgYfep4bkUQJ44tsL7X8ARmZEyxmxRWKssCjD7Ska3hjCGncEwWmTQ1goW4r76y92PQftfPFX5sdDiQrL",
  "key11": "5s4s3oNjTapziEekGJmYJmCoaByVs5MRcK6j1aek5BMieVoSekxEp2cDvj4X1NG6T4XpZfaESCM9cctmqvGN8VLM",
  "key12": "5wjq6tgrvgLXC2wnomEJNPbFqEp6KZ5su7R385eRNowQzgv14krfLmwPTMxMT6T5CsenJCfaxxYyqa56cwnVMjFn",
  "key13": "3ucZJCWaNFXrnFbZbjqxfapQWgtAriSqikRqcAokNa932cQWDSmBxoN7FogXA2qLsdV6FPWrnXgo7fXSoPdQHLAb",
  "key14": "5xBSAXJZNB72pRCht1kvMZJwFK8WHpLn4JdxJq5GCBkouzkURKoek4uF4fTpmz7pxfRcUVV9nvzjSDk3mEJCDzuX",
  "key15": "SdcoFN1Pf3uv5JkPLfEg1ntyysqG84LFiUP7eX2frnzwaEz5ueyHJUtK3pmPyDcdEZ7gsWp7DpwZM15gJwTCNB1",
  "key16": "2Y3qSJezBisqKCotmoormAwnYKszhwPHkYRq7Xzw1hNUtf88zwSs5p5rqGYEQWJ4YLFcD1BwfJFoEHc5cyWksgji",
  "key17": "4r1Ct95yGiZ12SwSAom8i6Szpwhxihg9xgcq9Nbw2aWB8mPaZbxfhCzFFubu8P16xTQPzRFQ3oJeymr7fHFshkGg",
  "key18": "4H1QNAhq7hhr6sxLwatkLk1uyHJpQkTpX8Nm3YqVeKZVLdyrXA1tHBaf6Ldyon3XWLyyNtUpvHDwNkUagSbLWsde",
  "key19": "4pdDQh3yLM2VKyhv6JGCsfpFmqPadYEkexqvW4qf1ccR5Rut4SbpUpzWtAuytyQ7hCx2ULwVzzsNnvSKHcUB1pfK",
  "key20": "2wuNXPf8jrJbWW6sok7VgSVPy1rMLGLQWwBT2R9vaV8zxgXam48yJX9wC69KTjvCm6Jn6VyZGTVEXWQLZwMGfXqh",
  "key21": "5tG1wKTy7c5fsR5kqibxf1LttQNDz5qMvAE1EYMoyUnEY4QHJbVfKCJ5h5PamsEexFqhEpx1dSrUKhvyFrfsJqN1",
  "key22": "62EdjzDUSJNHupuaPjxvHzKnghEuhF8vDMtsmNPERTAy3hUgudss3TaX1KEBFckt8JRDsJGA5ERFnQgre11tg1c7",
  "key23": "2nEeCG3u7SNuzHKCADY34J75pzkxKJwzPFx7su9zBLb61H3V1XMaK38SX5k23F56nb9x5TG7M4HPTetsxu5uXGys",
  "key24": "2PUfazpVNBUc2fx3jgQmjUS6CB1fnWodjhEc6RXHnQSMRP8BygC4zyU4mftneCHCkvSPF5WsFJ1REqw5tJkCVaGo",
  "key25": "2wJJhezX8EDkNhc5bBVSvFRZF1Vz9SvoYfu1Uk51reZP51XKmFwBehodRDFhqs9mD8mkd8y4p3w3b28YUckevumX",
  "key26": "4DcLUdDhymUNgS2a5CwRCf4yMkdLB8rrqswmEDmnR69QH68PUxh57VxTady6D7eY4NroATDpFwdvyeedXfGmasdo",
  "key27": "DNG6zp6oaGV2uo3xoX6TKuhWoX2CkHodJXjQb4rNTPbrBvH2wTAUfXiVrcrgPDWpBXuaXgXkJ6q5mgRqMCov6SR",
  "key28": "3kydcJqSu9x7VoqBmZphkZ5Wcikfwq5cMfGhLR1KxSG8qhR9jW1y2uiWRGvxdm4Fw4Qj8CY8FKCfdzBdjDXtKzpf",
  "key29": "2f283Dpp2XDFwVgYwn3RUsD1vxptyy56qRuKi31my3Mgjgn7e8c4qrCPmqQXC7PhXMsrKD6AjhcZV57v85VcPxRY",
  "key30": "2HNDmo2aA6vRytgeRdGQrJWyBXsrFD2EAo9gHXWZKt1jEiHyBwYTDjHBPQyJWVdYQ6b8wgr1qvPLVEcQAQbDNeST",
  "key31": "5vJnDDndWTM2TzWCsx72hpiaE87YANchwuuwXad7tPVX7Xk2WEbCkgfCFvg5WZ4j2q7MjumGgMNWcw1UmQtb14Mq",
  "key32": "2CgEpDKQ3fdpuuBpgzbXQXAb8oP2bbBQ4DVPe49DW7JUD5XpCyfA6pEaDpKLJjBa6bGCyEuTrBcmPnhmg1Dbe1WQ"
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
