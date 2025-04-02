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
    "31vLJWJnCm4Mk3ED96LFFHqoUsQYGVDYZ1GDoLf6aRcbGoVQKFvhV1nJx4nyj6GBbLhrVTSWVa457KEzSr8LNjn9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47eqmuwfHNLCsfdWfBauRU3boi9zWYajE8cLYjMsPedMUowz6tf77tAKahhtGQT2E9V7qKj1F7vHeshTNFtxrJXJ",
  "key1": "5oqN35KNTqXFdUk4urR1FcwTUC4F2HehREYdfRJvRQzxMX934JxoxD74bqLvpqntSnh17BgwagdCddicDD4Vnx2H",
  "key2": "EKRg3DMQyy3Hd3xxhoyTkoyCr2zSvMrQzBFbPmK7jPEjjjqPpeFV4hPBeMgx7vfroCsuwewTXJQ8gNMYbgSkB97",
  "key3": "x93aYa6tAkvE3cRXLdEJ88ecoPGG7BfiBNHZqnVv2S5LMbTPG4uRvBvAHWwt1raUkjdYNEfBHnTgweCAVC6S96i",
  "key4": "57SmAubC5cM4EdhAng7hnY853xXxFeRWfaV5uQmVrZfA2ukBzzfHLRzdpKj2UoCd8djcnugQDwcTKW8GWYx1A6Vq",
  "key5": "5WHjpy66LMKgiFyD3GfWUp448yVEUMQuWJ4JdY83ssvzJmTmAigd7g7t9MUjo1SD4RLUdeL7LSgQYMFF6mivy82G",
  "key6": "5hVjC48D4U4Mm5ytiDx8MfSRwnh1XjyFzbABhU8vEpFD2WZG8aFAxmPmoYMJgfgVBUWQeosiawqqG53PpfD5iJKu",
  "key7": "36a462UWdGU4mJcrAi1kSZki32iUNSSFzb31hm8ZNTDYPtAVaSFUu4cQJBtYiif8vBUaRtAW4885qc22EtbRNmra",
  "key8": "3MTKK12aLd1a4FNfsCPQdGBUFx1JfPfGQGqvCDtYzxFGCn1v6sJ6CGpRTCj1c6qScmwXzzpwRXNi7aiPtj9mhXNr",
  "key9": "5JFo1MkLZJNkX4MoTx3V2WWAXTwUo4gvCuixxBwMYDSr45wScyH28JqNqy8piigi4KpjV3Sed3k4AiE22FWwx5kW",
  "key10": "2kmsrKTtpXKRpN9XttXMAQoTpbKwVQDjyuDaaHo4iCunHnBr3xEf2S3fJrj7Tnfd4Kg1niHCnvR7eGiRmqCykDss",
  "key11": "erypFz4AXxt3rD8fp1PWaAmkrhFTLjiB2g4L19XRyZpuUXcK72H5M5E4ko9H795w3QkZwXCbdKWMCeuHmqRrAJi",
  "key12": "2RgYSw6magDTrgtV1Nj4k1KaB55vVgKkUnYWUC3VdjoCWR9aDHohMAbii47bFEYhvkBjkQ8GJYQ4DdnDodwVqkaQ",
  "key13": "2zdZ9Ls2f7ZzQX931oCi1u9Q1jxSYvbaka1mPHtprsEYv7mwkz8ipRz8i1kDTFirbyXXsov1zKep1anHdJHSQPff",
  "key14": "5fvjaziKq1m9iSBVSYyLHsPKD7tRGnBciEVZ24jPYG9G7CZSY29rcYv2HDL1fLB5Bo9ktuuSHXQ3FZDov9Jf9Qua",
  "key15": "4SJHrdxMMCFLBGuabjpaXH9UxcMNMrCXePLGUReVGqiJiwwgKD4WeZ9afmQfrg7mWTgJWK6kmNqEscwJr6hCeYZe",
  "key16": "5VgSaGzz4nUgdNZ4Vk7Cknbhv6paFYa3FCna3XBChnk9WjGzRJETRZPSh24xorbvwmbZnS1iAEbes97ps2kERGPU",
  "key17": "Ytv8ZrnQNpLaxSkujPU41twRAqKsxZ24QR5xbsfoJNRuxy7NPSaNf79aYmC9c4HcoVtkSwYMuQ3471e5sZUCdgC",
  "key18": "4WCbka5SdAQgkc34bqpvLza7TrefQHBeySZ5mGkgtK6jGpymU59ut2TpMycE2VquT6Lp5RVg4KdCRkgHcrtBxh6g",
  "key19": "3hocqQo3Y3sSdcBs1xP4yKaDmzpQZkwJwFvWH3gDceJpwP6UqgwGBJumzu67qan31RRLjZtBgqjZSFJk7yc47JtT",
  "key20": "4it1j4zTxm7aRMcub6MMC78S3dDAPYyMMHrTHrBaKhjLwNX1KRniXcRwWYpy8gLBGdD5o3dispphY7PtqtGWsKJX",
  "key21": "4najXfbb4t29CZXsiSd7YMapMZe78GCkbqeiGPhH28z7mjM2hjhm9dmr5oJFvwrhdaWc5KRvLh5KMQGrZDmA1G2x",
  "key22": "YHjyNtJP4VezpywAJHR6W3f6oRD6o5ojAejLPcLZfMrmnTHRJqbTc9moG2HFVS8uSGUpaSv4qx6ZipgBaTwnDeR",
  "key23": "3BLhnR9jTksjCDW9FydWrkANjFvLs4jM5XpLrnJxbfrGxbikP6yan1Fy6PfyxY9UKVk1TwrWbZx6etA2ixBScGae",
  "key24": "2jjpa6hagbPbixGE6DAZQZbiSxesG61TG45ec7ytPxkUTWSe5zLRNd4K91bjggyig7VRwnkkkU43SkXu6evRKsAC",
  "key25": "3BEMu21wLgUNVeZAPDQvYHrnMrjnXRpi9GqVwyCoPTJCdmsWGP6KdPBRgvNFeB1VMsBJyR3wp8TZK5fEjgGV9But",
  "key26": "3dtszXL14CYDTr9NnatuGdYzodgwE26exD94Pc64oMDAWeP5N3kSXUMKhUUGVUFvFyqVVinUBa9ztFKjagV8hxHe",
  "key27": "4f4y6UFfdYaMXJCFuCX7Fbf6fCiYAoujpeg7ww5jWs4hQGzEWJhnTqx3jQBrN3SGaPJDvf2xbpnmQUUCeebP14xE",
  "key28": "3nZQB4Zr24wFyakdskbUsve5kdY4ZZKbCWD8v5aviqKA9MzChnmTAhCGKFuctukNX2WfKBYJdsPqHPwftayxvkhK",
  "key29": "289PWzZ7GNaCSLG1afxppxYJcG5dqZ4c41iP8kktC2gUoUYyybgGcpVMXWL3bJWH4FV6hBt3ZotcSnhXy8kspPb7",
  "key30": "3TMrdDkqf5W4pRphLautoExUvKJzs93aQv6trTUW9bybcaEFST5wi7jR1q9QAYSYKZkHP1UrUPP5EJrJHCKWxxxL",
  "key31": "42cavVtqmCfL1uSZ8Xo495zCmuBn3SeojxF8JM48htWsaataKxsk4Cs1nS8E5PLLMxP5DYt52UNEnMC8AhLA5Mjz",
  "key32": "4hCwtB6epmNaip737DEZKiGxowepPiZZre6WcnTYtM1pvzHuAxdorEFuNFuG58CU1mPWieaKCb5vnyKbR3AjeBfg",
  "key33": "zGuDvgawFPRzsGKmJMpSzDmy7Jzk6pfZLPu5qtmPPoLx3jFXHRc1bb7kmZaxP2zWsmg6iiA3m5tebLnz19bKbCr",
  "key34": "2fSGRvUicUQvd6B7fibgx2iaEzgJAHBN4Y9nkjpkc7UPjzj76A3eYoPkizA1PPpCZzSzGUogaeCMqP72nz7DELUr",
  "key35": "3Rfqf19gCL7vr5muXGNxc8gSWvF8uPat1hZNegPycyiQ2eR6yF6MGZuVSvcTaAZ7ZHhbSumxhfPsWc6YLM3ZJSsf",
  "key36": "3K1BMK8yxRAqb2r6k1erHAG6GMFH9ZcMHwFeoZjkcRWxXbrkPozuxLL9ErxPDLy9t5zQkDZfrS92wm5EPNGeYnNv",
  "key37": "2yLKxmTsD1Hn9eDuirTHKut7EUi5vXTztEhXUz3JgJqcvSTiE42yY6sT6hFQg578CUAtxphWQ2nDnp4kihAV6ooN",
  "key38": "3QUBEsD1VfJMnt4vFv6hBR9ZEV3gtKHaNNPbWWoDPGZ2eeC4jaASEwws9R3F7NYjNDm9B5ekHNPyDSPmwqAU27n1",
  "key39": "3Ua2xodfFpfhc5TeJH2iQjvJqrjwSmvnMhsMu5FwAknnkzKhfrFgxVz5SuVLGaYz4q5gHBuvFxjcdi4CmYtGRn5o",
  "key40": "2dTVVUNH21oAJfnGkeBbsE9LjLbKGJJYFXXtn9ovo72EFVHJqxfXjSLPc3Lhj4nRe2MsF4uhbycGQgBEwRXTaZ5B",
  "key41": "5ivPn8TbFqhFaHq6bhjWg8WVfVPbsKSRXnRCqUETEZ2Jo2jiJR5vCzrnR6PBFyGzP2twxZpgG8bWBJmif3U7fEcB",
  "key42": "L9RHk4HwwmUx6uedgsohrYmRGEo7AdNNSwLCTLjTF8Tg7xTVc85Y7zFXADQ3oE8qUnu7QTMeYb2HpufdSgD3H3L",
  "key43": "3F9aNZsWDsWYxiLa9w43nKe9mFD1ZUm7rrCkoRuRsbYSEV1ghgCKVv3HX9NWC1RtURPcTzTgZPPrNKJPhfy2NfJR",
  "key44": "fo4f31zkNidkc6qdCbpCvjTPjT66VsnKdvNJ4ZXjd4RNpiYNLDmcjfCotJ27JQrXKMKddwYHrKDABk5qn6cZoy7",
  "key45": "3dX57mx3Gke4Vfpn2v12efHX94t2kKuymhSoXZ1x4fH7HDw9wd2zaH9aqp2VKy28NKvSq4yDb15RV6ZdgBvTL2KC",
  "key46": "4Bse1JCmnygrjF4YNswhRjoxyJPXNfe2sAAyNWZVmi3y791bNTpamfX5QY8KJQkb5pp3a87zRhqK7K3LtNXe7mes",
  "key47": "KWaqrvhXWwdooXUSFJL6kyqdurbT7C5ZJRapakmEuEYVmgw9cJaYSXPvrJ1iysm1CvjYZR4xpzXNj7C147YNtSg"
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
