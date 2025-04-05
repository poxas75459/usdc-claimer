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
    "4hX2a2KHtAJgnj5RyDh9DC1DmQVMFwBWpD3A8WMEMGc2g4kz3FZYVSpsaMdnnNZZUq4td5yyC3QC863tw7DZkGfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U7swqeXMT7Bo9Y3CGjoKRrBSPErGbbiYpW23yHCBGQLzHRE8Lan8UQeG54tLq6ozmuq3UTB4Sk93NVmuxS2YqCK",
  "key1": "42G747j1ykoYSDG6EivixAHNhQjDsbgivrU4pGzcS8heqxfTZWuLpaSTzEeBLhCmdh7SEw5yiGd5cNCKGzZx5up7",
  "key2": "3Sgfjngnmog8KvuM7onhxVnsUwv3sq7sE7NBV5vgEEWCXu5vdqkhWFJmhn1uFQ1omQA1DuoFE3K2E5cyeEnJNqPe",
  "key3": "3JL8Bj2gDMQ6wDCYPBWGqiCkBs9LM7g9ZXCtr4epAx7Qbwx9XLRF3VwyY328hLuGFuUxJWes54Eo2weKf3K5t6MM",
  "key4": "3D2vtdwijAQFymPweC5YZJLwAq3PfEx3ZcvHmxB1YBNyypdTttra4pJjcavxoUzDtgrqrg2uRwVYXf3oCiwHngBu",
  "key5": "5YkVS6hK9E3rMvd3GeFX8qT3eMieBrWChnh6e3Fe6NM7pASp1Rwx5edr3LpGdZgfayHxNs6ZbCJUJZHXLS2QdNqW",
  "key6": "3Y6puQwqPM8WgDp8LKqFv3GdSKsDqb4DGzr9nsd89L2onpHCG1BAPjZtpsp93TPcN1iAXF9ZTHYdGwDfgcWbJgSh",
  "key7": "32d7CnkfCnNKc58urZbjoEC43z7xs34HdtjYys5Am8TjDZxABnvSb38G6F6f3boK8G14TpD8vtcyba9cKWNHvW5v",
  "key8": "3VUkMZKhTFhfh8JCk4Ao3Xw2jLPDrZrnhK79i4jCuJjhaa2wrMKMoHmS8uu1U69wMA7puMoVvwLwbm41UvrFHAH2",
  "key9": "2imWV5dXZWCo5Kj3d1jxK8aF76UYYr8YZjtiJgxuX8LxQdPVciPpe35wEAtWMVZDxKoThtkfNbYp3htL1pxMUMf5",
  "key10": "enhozZ5tqa1gHLcRZgu81QRZPGtGxxTZpGu9ZFFyd4hkcWjfxmRdEeJghkegBFHNs7jM5zfRQRbLKEQpiL1YLrs",
  "key11": "2eGESAcviARiDoYzCGzPFKxVYRy5kYYY7q7pdMay38GfQmfsY5sqorPii6depRsmABcL1oez4Qh2dnuZngBP93M5",
  "key12": "hi2WTi6B38c5wbWsjYy8iL5FpNkJH8PdbC41JuKnrdwQHYrQQJaSPbnzhYtDkFVMgqH4BHEj4QiEYx4oNGZKKQ7",
  "key13": "4moTm6r2Bo8LbzJA6jpnmpJ7jrWxfUPwXWDBBpoBW6uemp4EGLxPn4qUnc7Q1gdCK4s71YETQfP2SeDZpdYrN9L",
  "key14": "2QzdFgQGkjnaBerH4FTeH66TsrvWwCCJyr8MRfVB1HX8heEmuhMGbEbHqiCnZC98ovaB4SjqnGsgFjADVDKDMPHK",
  "key15": "4duHUfB94CCVri1ZTsdRiDCEZcdosTEF65H7CkpiF62w9QdFH1kkrFdeaLxjYbBYgdExQumXcLSQcshmV2x4VMf",
  "key16": "CBjZ1oAVicPADzH2ZSc3MB4QKQ3Vx7UUm31cj4TcJgHEtL2QaHYWryE4PTuMKBN5ywZ19FqL4aYfCXNMHX6u3it",
  "key17": "ZG8Q1pS3dZFo8LCt74v9LXEyh5giHo1izS8xDxGzqhKY1r9aU23h5kv78Pm5DPWm7Z5Wc98HgZCQuvFNCnzzuaD",
  "key18": "4gU37exqYe3ttYMG5uaE2Ca7AejNSPyGvVP9NhEi5L7tdq71yzzhBcFYDbiVRxLpAJ2jbDvDvi1PbgEyj4uw13Zt",
  "key19": "3PcSYsQzGzQJMusPCj8WES2ohyXng1T5rxyVJ3WR8pWsAYwz4osW7vp1poTmiGYYkssMLNmD2ra9qRja1VXMQf3U",
  "key20": "X88gM8ugx4EZPqNsSxC3LgkAFp9sPwhSRcKLBMYL7nZPzEn5jLeChnBU5Vfd8KZ4kGkrT2c8t2g8HGSxYsX9SpC",
  "key21": "KSzrCxyj2Ck1aZmf2AN5gT8H3sk2zn9Ne94NEGbscVNCuE4vMY2d62KtAuhvR8XfDTiELnHoTAYhmh6gAVb4WXK",
  "key22": "3m6qhog3rsfX32vekkmqPhBgx1MTwHmRwKnxua28w1pTA1rMoiiLMJkjqugDh2ZmBM8sR8GsTFtuSPXUJTNamLWu",
  "key23": "3TVhTrzrbSUtAAYLv126ovHFsUaCtETFetkpLYZPD8og1KJWRbwxkEfhZjdqTBaWmDwQbYp8cYuXL9UGGSo221zc",
  "key24": "26DAFiGViGFiKmFFUfhuscsgfn9EnmTpy9cwG85gi4u5AHMkaft1tyiHqyDduhnvVLwbvvftTPz7oWUG97Y25fWE",
  "key25": "4GhyDyV8M3P7FtASjnhfRZoYD6bPpAnA5CwzNWwespYCLDxLgBY7MtQuox6G5FztaEo83ZnxsAc6wKwT2r9Gm6Ad",
  "key26": "3koyw36RxCmreumV8fnaXyVKxFeW2kUXLzAvDo7ksiQGAdn8SQb626cB4wob7VUrsSVC98Pt7sxHCdvayiv1h4uv",
  "key27": "66p4eUiv2uDr9UN9fzgNPpuTHwrfoYU4TroaRC91oMQTN5WyEZ2TH95b3BBKYLTQ6vBdNchxk3eV59qJJ8JeCgEa",
  "key28": "3zqLDqCDMSykPyP4KB4ZPjhh3VmEhdbfwa4CUBaGmQXPgYzEj325dEXGCkPNypwNpgZVzbw6tVurKQ61FSqHU1YH",
  "key29": "42xsXB37tcd4jAz57Y4vyqcrdXGcLCVGeWsdd7Nwkvo1Uyib54w5KYLyu1CvWqKR814nh1v4PsNrSHpzMKGwinwW",
  "key30": "4FsaEPWc8cRzZvktEQcBf4upjLU6F6Z9v2poc63kFqeapCjjiTtrouVj2LkwmUXJLTAediaKZ7QjGJVfEGQoynsT",
  "key31": "3h4WPpQeXaXjEwfGdaywgbCc9F5Ptco5YdiPHQaDrgfKWwypLAN3p2ynhfuzBPSCQ112tVHnvd3Y9ikMDFAQL8Vr",
  "key32": "56sqZxKUk52hxgKPoCuZTJ9T4ADBHNfMho9n6qypnnZ28sMHA4KVa2tkaCMGqLd7n3rrjh9xTxYUn8yLFFyVgs1X",
  "key33": "2cZSt8Zq7aNdrFKeLZk1dEgNmXtvz31okVLinChTiQnJCos3d6K6T7HBDQKnBo8enUESaff6fowY8xC6zA2SB9Ty",
  "key34": "33LomYubXRLwt7HGiMLR8zLUByGNs6YkPmsf4of3TRH57JnK31X41iBCPTUp7Z2sUe6mkpwdKBWpF7DbwkW33yd4",
  "key35": "qrVecsxstm2BTJKPpnhr9pi4YuKa7VGBKy9u5VniPAWBF68mTpvCDYz7WwN8qu686wiPdBpjZMKhfjmMk45GG3b",
  "key36": "5AmzAq4PVPA2A6G7f63Zmuq54rKaMd2kJjktbXRyFusE4uExaHdAustZyJtHCwmSofghLUXoMk7F8eErRBxas8D2",
  "key37": "53QZyHyxM7TzZBfQLyEvgYhDntfYGxcFDZZqYwERWQCg84XKLZjnophdEFHn7fY4aNyUMkMRWhhezafP6YaYkHX6",
  "key38": "U2buRoVtkf8CqRpt7nNuQqFXSFRQDBd94Du8c4zQggS5or8MQrR7kD7bcWxUTGLBN48JBPiY1GFsK1xaaGNM7mC",
  "key39": "DS8dSHMq2cjpBHfXtSjNpCGxh4KuBsFgtNHLxSWaJ4NnxKUH6EprUR41PPo8a5RH1UNWGSgaMJnxJsfUnwkKY2m"
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
