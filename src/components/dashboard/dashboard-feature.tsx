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
    "o9mN4CLfdBTSFMbTajGFGUNi4DNNKjhynjdFwgP6xxqMzPaVPqQheXDpREaMbvA7g5DHCFUzJD8rhQZRMY6QZye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bPJcuETnWrMFuoHucCdm24WxMZXxgeT4eyrRL7oonniqS64xtdwu1gPS43zES5vNDe4ga2wifhYETUE9Bx6NAQK",
  "key1": "SwCqmRTuMyVinW9Aax8PkzAcCAppGCaoNBJKEbPK5QRwEt6afEpZ4NEzapUWVBudDSgAZSRa7iMoHPYk81Am4Yy",
  "key2": "28zojLMhE6rwGSJ8Fhi5vSfD3fTPdkNw8SaiPJi1uRAQFyEyWd5N1K4Wnp5dVSggY91T4bhS1Zfh7LKxPF1HyJXm",
  "key3": "XfRs5YgXYTDqSjH6eHLFFqwaxtiU6ugRHxJdHN7YhhatmmGxuJ2BypWX4h6CycrCEddeLhMcLxntVjMGbtXmgGE",
  "key4": "2958PQ9LBUV2Qk65DoeBXQaYBKP9KoizAVZXvXmQUDfBqWqW71Gf1QxyWLnpjZdoySLkAnMfg5vf7qpZG8kMGmFM",
  "key5": "BDbFhQsGy1mf1f6638byAxKgn8oPBM6qUPd4yhJF1qUXJwcfe3GqXQHAR7ApP2z4Da5PT4FNWCBFVHhnCU6Dxdd",
  "key6": "7piFXGAV8ojnvP1Mtkov2B5jgPuA1y9vZaJ3BKZ6aZzRMvaVMdjCdAuK9jWT7EwaHZWzFfyyBKA29zkGPzwmRCh",
  "key7": "GicBG9NzH2m36UHfdx9obaVZ1bmUEJnbHSDUPa3hGcUdc6bCBqLzbJmhWaL9ajH1Zp5XwF4Y6T9ZVyUsjmucxbs",
  "key8": "5uNtrn9ZJqspEp77axeFpLR8fVucxrzYgmHZW4fWSmd79H68qfuMocTxt9brRofAFKS8yyDFc2RKhToK6vSEosnn",
  "key9": "3F4vmgK7vYKkri6e8GXd2yNv13BQTPGUCQPaMETx6qLTU6af6dSW14DmMsRHEZ9jKEqU2n9FihYdmkmvvsP217Jv",
  "key10": "3fPjVMdzfkNNCdJH9UwLGcwxwanQtA6ZLNz6Ngvp9C24r6A8VyVNgEoJ17gBdTQYeNAiDsXnWXH5LmEzmSkYk9wv",
  "key11": "drhFEcnumA2yxKukN5JyBimLJAHnex5PMtWW9x4yzcU7K7BDLGoJfMcPS5aNeqmVKx1FhaBsTQ7QjThgAXR6B9u",
  "key12": "2s2GZ3shF6jdTbLtvQ8z6zF8UVgQzZVSAoLcpVgT5QX4mHM4dUZv15zgRGgVLsKztXwFrxgAYjbDDsRieBok81gi",
  "key13": "4YCMbdPc5bP1xZJx4r1FfQU5oJgassPUNB9opne21bnKnWFs4QqgonMwvK2fS5km9papwYAfnsjJN6uWvQrLapcU",
  "key14": "4YeTTMe42qM4fmtApAZgEE82MDL6bbh44cNo2uMytDJdnGaqY61E8rR4BNktLouWVb5nwpsz3hSQH65W3pXZzU4n",
  "key15": "dG7d3MDMjeEcRTwjWgFaaeVdhKutXTpqShaLhMvQdM2dQKBUtC4UXMPgx1bn3A2vNPnSiZK5rgV5LwNAsPRivQ5",
  "key16": "3wACbiiRfD1oCRLpdAJU8KdqosoJMsAMtiCM55y4oBqF3jsDNW5JEED4vd1hhfTRWLA4t1vaFnnxZYS4GYQRgcDZ",
  "key17": "2NrjkrHirEQYoeGR8bCgyXdEW1gbDTbqjcjTe93n26caP7ruUedeMcu6BXvYYmecSQ5Gu6kaRFVdPGK2Du6D7e9m",
  "key18": "66cJiwpz9BdSpLuNFjAS613FzzkXyz7cbo3vVcdnNajvApPpcVATzcgzdgUnZwD1KM8VkQdB9r5mYDAoTnAAHiqc",
  "key19": "33em2apDrE8XexWUcMgrjTsy6aQG42FBEhi3Gjp9xLu4pgmmk4QhUoqYjdJKRUY6TEkDNZbpvqbFLvH3t966W3LT",
  "key20": "2Mpsz9rjiuZPePCn4semAHYQE1Sgi67wjJb2fCFAew7Usdj7xgM5aPEgNmC1JWrHwBWvxDszaxExDPPQLx5mcbmS",
  "key21": "5gzHFLDYyTWEXqJ1PkMXq8TKMQCRyw8SZYv6xK93Z5c67PHLpcxi1aKEbzNoi3Qr1dRqhYUqVsWVSfZ54xCv1wZk",
  "key22": "FKMZwGYd5DzXajAckuVV8wU2dQfNAvQjSrg3r1jd8ytBRw2fenSHemu77aJyhMSz8KQzijodgb6tnXCjpQaNNy2",
  "key23": "2ByXCXJq4j5mnoVwv8b7asbEsxxVXRhRxjWhB1BsmgnZmVRuCZt985De7THyBvpcZUFPMswZYwXTjqxaWvsr8n9N",
  "key24": "5fBbyZHRqgBF16tWtdR4RbgR2cVEvmdDGnaXRScKd3yv6quMj9QBjEeioDQMsDTMcTPexNt9aDrtBY4gWPnnfqEy",
  "key25": "2TQrkjUyMdXnRf4UpviiRwjMEJGShX6VSfniVvFeTBtCzV2XraFwq82DoxMDPb3atJnQ9hXjMfCQf4sy46BoySdH",
  "key26": "exGG6vPYjgmtGUfii6WDr4tKd6RPP8xoJvPPdD1tZsapGSJKVJH79UPHo2zbq7o1VNDsocRg785NGMMRVwSamsZ",
  "key27": "3Sfjsq3tN5b9TpQM9uAmhAHPsTKLPj8RWasMRiv4pxJcYzhcviNffVTawwNuxpnY3BvA8NFj4w4gLLnn1jZr2nji",
  "key28": "K1B1Rpq61XWLEpugMjWZMKm76LswwsgGSSh2dr3fgMMxBuxJ9kjGRNT6bh2JMjLYTQLEmu3MKcBL7b249qhGAL7",
  "key29": "5YeiUwJZV9FGxUy14CXjKqV298qvGy11t6R7MtJdiF3yEaKTFHejE3pGAHgK5UKAtGp6sC9mMC1h4VCHW9gxEpQE",
  "key30": "3Vn8A1JvGJSp4tNMpg2LRTioaq61W7ehhaqYukXd1LYaukTzqumm1XPqpCPyFGnvwcajR9j6vXFqTD2TkPbTjXm8",
  "key31": "4xydui5q7CFUzeCKYkJsAWooJbi2yNYhgHYf1tsXBn42BxRADHa5174ymau8d3dJGE41XxA8frwjkQmNnfWqmWii",
  "key32": "3vYTnaznrWJu8dEwJYtvCp6Pddo5VRU5J94DvxWDTiSgj2ZaMbzU1A1ZKFb7piqpVzCAy1Zkvn9BQzRREBBRzrGx",
  "key33": "mMLDLvFfYPBmjcQzBKCjPzjVyQ8rbABz3BmhNmpuahWyY6EHZJii3ysrGgbHvxNP6rwxLpwHv5TXpqXqBhn7M73",
  "key34": "4CCcwFyvpar3cUu62NLZ85MSdVMdiJtXZCG6NgxMGLbtp91hv38GzuZWupAveCcvbfdpYMaL3yFU8iy2rgaMxDms",
  "key35": "4ooHGisRjJGzjjWuR626ALgYk5igsBahnZRu3mJugdkgAGxoFX5kAMFfce8VFHusyxjUBycK1m2R6UcFREoiVeH2",
  "key36": "mpxRCvFDgDhvBbXnPGcr4BUDovP4gff5YLHMSbbhMvYMWPQub9nvBYCtqHA4KUrFwkqDte5T8XE5skjt8TMZgph",
  "key37": "5Nioh93PDCMwLaBUYAoR5muBdffFiGqk2so9hcb7LrkZLdRKApaaNKUYGpbyXieWEsSqeE7G2UbJHpLs1qVEUS8X"
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
