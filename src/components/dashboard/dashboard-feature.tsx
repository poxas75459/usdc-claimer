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
    "5n1PkVHR9HnSbVSHKmepXhEfF4pvwHGKhXWRrA4Wnp5VfxqDnqGsUxaVJDG8UETyt5Skwoh5NuwLcNHamuBnwVgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ET4GdcKTygq4F9CDrMLScAArRkPyXLRru1ECwRsViHuTEGA7NxM6sWeAAgB5qUUvNyfZLXu5dmf9SeW5xmpfwMv",
  "key1": "KbWVPooQYP2pXJaDfXYS5FPVBRs5odkKJE8R5jGQM328GH6eQGU8MTgxf148hvMRQe9Wr54vyMxqvjPPK7sJgY8",
  "key2": "4qjiAXWx8ofePxYyfWb527UNFtVFDoAmMqvNgmfexDyZKV4vkP9w6owkGGx6WyFExeapnpgHALN8xFHx5yAwPAxy",
  "key3": "2NZkQcFAA5wyxVfNJrEaqLHRaRdGk5KF7KHgJp7NVdqjUP5B29uHGm5pcKWhXCwMo3oJcJtgiNdUSaU7CrdEXByd",
  "key4": "3nMHFTqESV6nESNYLX1GgMbdPHgKczcX3i6m6DiyWRa93vZcb4o9pbGJATzEntC2eA4r9LrCqMVe2CYn8QaDFGeF",
  "key5": "5hXmEgVC8qA6Pqj25ZyGcifyYCPM7r3WmE7seUAyM5d6BmWo8eejhQQ5tJE7yWdLxmDjDn2JAf4pdirbZ4rZLPW5",
  "key6": "59Vz3qQzsxDQqbUaHzJxWa6nG31eoGynY9yovGkZenKNWHD3EpQjFg6vTj97czz1tcsSvXcHEuQAgj2b4ajCxG2o",
  "key7": "3kJWSLbPxgtFJRJmz5oRtXbBsSf9B7znrgHS95AbwFERPK7wheMRJwdCW3y8R4tjkQV2cKkSfWcSidcv8gUbmMDs",
  "key8": "4VwmtPrCkZCZY8Lgzs4dbXy5wAqVKeUFXaLRC7ZQS7CKZJnCHsKt4myGe8khC3VmK6PjRmLhKfzWPaBRH11akNx7",
  "key9": "4UtVcvqr18ZD7bLLaPgp3ejbjemifcBYxi29KSsdX8kxcrSKKnU1HCV7ngNZVPHGDVAePKb3SstaLQxkKdLfS9dK",
  "key10": "66Dp5M9jFjsf4fp24VE6pv78WoQ8jpsvDMKAAYXycf49k78PZXee945tLdfE6Sq5rU7xdLm5Ly3d735HAWRpxSzB",
  "key11": "5tqAc9mi6efnfBhUWJMkYPZnRfVQcGMSa79bLAsE2BKsnd2bbViXDAnE1BQEPCBXXRgxpuAsMPZpizYLyP9wW9wG",
  "key12": "2Yz5aK1wDyGqmp1tKEMnq9XQKiveVHTqv6WrGfJWodtsubUnMQJ3umwX52UQMfBF5CtiRif1xi142E7w1JXetbgh",
  "key13": "5CX4DGoo9dvL4nrAzp9wcbNVdm1iqsQ1PSdunqadFcWPsgmwvUznesvjaYSBUXXz1v9xzh1S997EjkDm61KxJzD1",
  "key14": "3rdpADtFkx5mAkSrKQif34kBWgByeVBNqgEhKesRihe5nhjgyTBt3yqQLnjnhDkXi4Nc7pWfGW7B296tvmCave3C",
  "key15": "4m8BMr5Sy5aS8LHMUphmR34XmWWuXE7LD2p7zEJJoXmEGFBApX8hgfiNT1Bmrm6ceXS8DZDN3gC6ayQpob7GEuQK",
  "key16": "2Jo9uFFqxW6AhGuuW4udKPSe8SVz9P12ZBgVL5gjEkW9KGTejNy8hF2LTrtYDrKn5Vbn4s5ntX6AthGnapUJqhrG",
  "key17": "uviC29aFBMftVggyBaoqd8Xx2jvHSo7mkTKmbT2N7obaRpuNYwtYk77iY5N19dt357SSG24MycoBf76tGmupG6a",
  "key18": "4ef9Lj4gBtvEpDdjbMGU6KHnQPQ8br2vtnagNyvpG8TVyRE1mSfh4t3zihuDQLTtwd7JNHGPdKq9HvAtVK59YkD2",
  "key19": "3dj87xr1hLE6YPmDhwexCyx2qjGEQfwvDeKMFmqxYTms42WtDxj73ceppLpg96HriX6dkruS2H8PiAc3NmVRxaog",
  "key20": "4ZW5nPnQuCGtVaxQRmH4CZbyWLb7rfodpMeuGfaDXKhe6maJ9L1GvAyfJjCHY2joZB1cqdSqhuMDP8R4LEfAgqWt",
  "key21": "3jhDmkQnHwBLvdqNYuB1RSK9nCwzRHFrCxqs9TgzuzuxNakkKooDYQnmRNBAwGAkYiULiuSnHKPyssUgX229rBgo",
  "key22": "2GS79RbxnPnSyxVK56jmhvkd7w87tvYS4c4gpWnKoefDVFj9iJxE4bSRaizVqkPwNuiLhAEYgEyWH4D8xYmAKNhZ",
  "key23": "d5cmfpb8tPdb1vxLoNB19uJx6RcKMnTqiyWRJzU87qipKKGoUoto7sa4ZHouzRTQScJhwDMsd24UdZNoT525KLq",
  "key24": "5yLGwyery9vnxss54LRujJm25yDcNWqC8ztfKdSBZhZAgPcUrbuZ6SmAENr9QYq48Q2kbv2HXorgNKBMABMem1qx",
  "key25": "5Qn1QKy1rutPuLyEapeUB3q1ugnZL2xq4Q35mFz4R2TJwND7xDHorpVNJbMFX3bADQH85Br5qTJeU2f7XHwFJxxD",
  "key26": "3QCzbEcpvhL9tY6ZPiF9TQ1mfJrJh6UHetGPAVXVZPWftWDHb1CK8UMSofA8Dy6r2DsSAnU3Mm6QKxZ8osgQ3v5V",
  "key27": "4GVDK2mnrDz873yEgfRoCksThPnyvPwU5zgjYNy8nhCszpyrPEqk3F1tHSjtGFE3EAq4C49XDkcDWogUCkc4z1cQ",
  "key28": "3PEWAYkecc6AABUMc9NRLnN4FJCGZkN1bgqGUvxATuTjvER5JgN4tycojB3gms5ZMHgZC1UeFZJEH77E1XeC2cbZ",
  "key29": "57ynSguibrQyjJ8f5yz4xXc6rgde6uMLq5fHjPasm3dSk2pGEDPyQrk3sNbsVppYTRLfCar3NzJZb89HwMbstEr5",
  "key30": "eVto4ocboFPivzGUHRwgDWx2PC3if4ePEvvvPsirawF74WbZn3Ug1hiV2K56kUjYtHuhDp9kkDZPawTnG52gn94",
  "key31": "oMpSRQWs843CEdXoKiTTpTeruvxcmKc8YAXSnEZgQH2T7LNcuSPGYeXK3wtDBkwufBSRZPbPvPQrL32kCg4R2jF",
  "key32": "2giWShXVMkSWtGSjZZET5a2evsZdRRzbqFD9C1gYLdYJRsjnfR8jZiqF4x5WYF4vt9FBuXaRymPWMvcRMc43LM8K",
  "key33": "23wKKCPLk5Ysriiosazc3uJuFdmge4UZxFr6SvFnZ1gaY7Yg7a7XxUWMhaqPnYGqT2yTpBGj9yqybcFd9nzNpxnw",
  "key34": "3asFWgdWg2iFEaHUH2YC7V9g17ghamTz7rDRj8GSTAyVr3nKpVjeuhGYuRx74JahJCoxZNWgz8a3QMrep8vTGR7e",
  "key35": "2i4KNgnRk1T3SvJwyZuAMrZKosJGNCUGFuKF42bhmBLg618gh21xaN4je8467GfQmgwzdGjDzk8K1eumvfnT42B4",
  "key36": "5264Xbvf2UgYJu5pb4GS9pxcAWb5yWjG6P4eJsnmcTMvkR1D4uMpV5muYZm39bjbLGSUXsVfT26SpCBuXJMe3ubq",
  "key37": "2XsShFxEayFpjYmvZAX7SFd4GBmJn1KTTzjyQX8d3BitpjqRcba8uT1Yj48H2c7M6MtnYBm83poCCe5yEEp8ayrV",
  "key38": "4s4BZseVmkS4sCJ1uGmBU2nCQ8Ppi9kp74GgNgU1WbgydpcsbcfbtETNY5Mf2wacHUhLmNEGYLCpEitAsqNaZMC6",
  "key39": "2J6LprJPfpu1jR5HkLhdWw96wdVofBPAeCMz77EoG4VxeZiBNFwTMf2TRZui3rfm4HqZpU5ZdBMCQ4fHdEtQYUu7",
  "key40": "4MLRtSTKR8PAAJHj8cY7SEnnrAdMpQEVLWwadec8W2YBUbNY1tPxwVMoFRFq88Hh6CErpWyssFWYZdKyro6H5fba",
  "key41": "aWupUqidL7QzPgUy24FTvwmJiTpySmph5BDnNBktDuigGjsvzeyqp35AWu22qYgqFCo4b558Jvpen1AdRiHapTu",
  "key42": "5vmMu2jd1a7LJFhbzh2QDr3w3FYDzTuCXfHmQGnaFZKLBVo28GzTj3LFyqLbkK12ER7htiej1xea97iZVBqWNUvQ",
  "key43": "4BYqhzkJHnAWX3jgq2259uqo8HxFRM2dSQYxqdVhGUUE7s1mq2xpojNC76CQv6vCg5q2jxZsE1DAHGmesZXg4VSC"
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
