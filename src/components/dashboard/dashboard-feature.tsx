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
    "F4XKCLJHgy5PxEMfqSZqC6AizW3xfWgFP6cVsbZUJW8neFXbDqcs4YPaf1C52yEwAn4o1j26Qo9xfH8dBX8Diez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ALrgoswURxb1dDTZeiBdBYQE4Jhi2p6rWZ16S7LXjiNN1RbcFm7GaSFdrjjtDyamy8E83TLBwvKaGBXoRAgjk4a",
  "key1": "2FPGCKPPKTAGRRyozn2JAqNpAtXedLA1Df4t2V8ELFiURHayGTYU1qqkBwy8g5GmC3opMpZAoWmQbgB5T33itvqa",
  "key2": "3vXPCpbZsLrMww1Y7TcnfHzmbpC97rhQvgrmMyunq7DrL9GCsTFsJizPagZ8f1V5Z786UuW4NsbnjWKPLBQrPqeF",
  "key3": "46VWkMNdhiSkriP8y2dvdhmN3CFY9tmxov1ZEMzoh1kK81b7s6b1NzYk8GqEzkrFEQFwHSUA79phP3smFK5ny9Kq",
  "key4": "XF2ynoMUaaxkQjcJb1j1eM3K4LhkNRyvMTzagZFgukdAy327nSenYVEshzdRFgA6TkA6tbusyuG4sFfyS4DVwDc",
  "key5": "5aFX8uitwt4CAa8A2CUpGqsgccpcn5qBZkiuCuxezWuXVKrMEDjpjVr8BxP6G2GMz4rRtf2oj7ngGYPekxeGHycj",
  "key6": "B9Vgi2FrzH6KSVx772b7bSeW82jjy4ckha3Pqo31Wi69QW7KYqgEyqK2cMS3bcvRXmiAgR9hUbZW7W9EaJ94MS5",
  "key7": "57BxvBZvtYAAxX9Lyh51r1BRMcDZXCA9s1nBkW2yjxW99uiUU7MsLzBDpph79p7diquLEDhYZ3LzqzaiYQRDpYss",
  "key8": "32onzVKyoVxCVSantsRNHkda4wspySLe5MuShsdVvGgTAdGM8q3waFmAmwnRzGBovmYioiCey6JMKDNu7i5sAkUR",
  "key9": "3aHiSuLZ2hKdohQx74rMXFNCDRFj1dMD3mpaYc6xTQsAqDuYv9fSzzNVptwue5uiKWdQD8aBfMD67AhJj6efsb9t",
  "key10": "35sWV3GzgxaRy3XKyNxH5sF6MTdWbodYHGrHbwb8QaW7QRJzraj7o3Ur5rgzVx7xSZKeTgo4hfCSDgjUiyX2BVVm",
  "key11": "5dFKnYz5cWxooZneaTU61D1tjGfi1To4FXXVJbNwuKp4K32WjgCEJ66iB74EJzkokFtJtUBgmTVnzNRzQqrgJ5v6",
  "key12": "43t5hK7d9UiPiczQAbPmkAByW72zZcyEK8JsbNKpLpBfkGsSgw8r9TaNuWq8iCtnTU6DWS4oya5TsTjRQJSba54G",
  "key13": "2YCT8pQZePapmdmUdqsBKSCmqttkNXcvpByRLUvmvZVr9V6DD6Lq6ii9exvM1ysm2X9dcBftezpVyuDUEKancWpm",
  "key14": "kF7ENGiTN5arSTELXCCJ7P6e8o6ZXB1UkN1X4SKgAuTWHFSZLjxaATnLyW7WuPAkvz7hM4RMAXCuhQhUVzefLME",
  "key15": "5o33ACy2STWzephuA4XEnnawZ8E5WVwzjSGzqpo3JKNNTsjdSidLmXddPW2MKunSAYnZraYgVi4GbjZ5eBDH3B6K",
  "key16": "3qUCCFoHmx7kf7AifLBmhbaN9CLyTAGJLX8fusitHS1wbiMLcWbXW6sW4yTdromxQ3PwMMgoNJCcpuDuHA1hfEiJ",
  "key17": "2vyC9wiFeA1P72nYuu5oBDstDr9nrdf2htCnT8sewb6cj4XqYrqZbom5Du16h8FKVh6un3AKh3sLV3qZRqrpa9mZ",
  "key18": "3dT66CpUtUAoaDhyUFcobDBh6G6iJr8m9JTtqps5Hkjfu8rTDGJ8W87E7YezuQpFW8B5z72qvx1PrVtcMpUCDLAt",
  "key19": "2ULWr5LyUdhUF3wW5Ux1HgMHibZrGNZYvkyF63bXv8LNN7MFstgEGFnVxxBj6wD4ECb2vcnE4VYvuk4Ckj7rYN6h",
  "key20": "4jgQPRxR7HJA4m1xcLANsWHf1anuFLDQBYneB3b1rH86qwdn2jeF6SBnkCuhbUXBFrjqfYTy1s8WBnwxsnPysfJv",
  "key21": "4M3us1X3pHkP155LRGSA9z6Ffx1cUTJZzxUg1apaausjd9nLk7M1fnGHocgBWwEwp4wpFFV8H1BHnum5b85qwVCR",
  "key22": "2iBWpLXk9uMeMLsrPmhCTPt6gWgCLvDtKiK6Lmdh5tBXCpnLG9YMNgMyUAJ9jB98b5azkSFSehQPE4dVqnBQuvtZ",
  "key23": "2igCQ5uLkTjrWoEsNGb8AhYW9Th8usMa8x5yBHtZBC4qWjfJ8E9NJMpwaPRuaMLRTdbUrL63JpfSTcBy2N7htkyg",
  "key24": "27hkACWJHbMyK1iEPNBR1qnNdq85fzPYjHAvGfMdJhSLb97NzTsd3TQZtxak8V1RmxhinCscaWK5vBZkVSWMWQWd",
  "key25": "2LCrf6ukLpqVDw52KXAt5DtQbSCGWsqo7uiPwfagsX71PnJUzijfRwrV5wkXSKGqoDgJGdpEz5Y8yzaoobiWbNeX",
  "key26": "5F6HB3LQPD3ZBrquVdvD8U8DSS1uMwQis6a9xRNmuqSVb5KzVRJWRaq3DhTbZJH5RakBQmTNhtbJnRqB3UnBkS6a",
  "key27": "5JBNKjzMuGYV1AT4o4cxVyYCyDqvNjhSQfWF1cDyfpwuJAgku9pZiALBLDNJrnPyXHcyNdT2Kmj1TvP2VNN4UTCh",
  "key28": "5996vesnzq3ecnwCbQ2HgWa7rta4U9ckb3jqtBeVARJyXcPHfxkFyWfqo2DwdBcX2BUEUWi7zn1nMaAEomCTqHGY",
  "key29": "e7XeJwjXUFvDV7RXqo1BgFGvbVzjmRe5vdjCCAhvSr1rU7aKJfHpUU7AuYLnX8LMG5LqTkV54CxkdNfBmKLUx3q",
  "key30": "2xTCa7GdPgBvsh6JQr9tERtyP7vfSDARs7zjSebWavjwMbysPwD8ksydxi8JaLURMtECWezhyCv2M166V8ZSC7aw",
  "key31": "376DqgGm1vzYf5QpKVu8MbH1HtDoXYvNfx4fV7h328H5fihipU44B5SDKCj7P75h85MD99FnLapk5ZiRaL8B1bzr",
  "key32": "3whzXXpeBZrT8Lb3BvtbkP1sXpKdxeJBv4zzuhfsbgkDcaXDv8i27vHCudZG65Zbtu88dN7TDknEEr1i4WSyaG1e",
  "key33": "3V3uVHM1VPpyZJ5kKTXrcUrziLiYaBhuvGgiLZBFquwprVHVErfJ3SLnTVRPcDUtVhoUAdtHfSAVYdQurDhs7Cgp",
  "key34": "35eHhULhaHKBELJoVhf9AmWkDtqjMD59U1hajPnNLDfDtn62gSBdRoix8rmdv8KCyTr63QMJVyBnHGq9yXGmveHQ",
  "key35": "3VdbGKPLZURBDLVLfasbLzPyrJWiverPaVwNjB9EFQN6Emnrnj8UcdsfcPMwmMfgeGNGGkBSEdENNWMYBiMGQo9q",
  "key36": "5vRGhbKdZnnYGGEL9yrqJSaY5BaiF1kLrkhZHkxNN59a2QgJU8TTBvoS5qcf6AnRbnx21szJDfXPDG7GrYGzJPiK",
  "key37": "2TsQLdhxpHSjbnVAFgPCsFuHTA9UugykUgWvBxwxhB4qo1zTYZMAifjp1qbfuyJVZ4qy1g9FUrdDb91XcEVPiogg",
  "key38": "4PQMX3MMoKFZEA71kWKyTHwtGLoVtqzMCqeM91Cs5ZhVAt49HNRXV95MKPXHDgyQSFQr4P3Q8UPp9v2Ac3DzMGfQ",
  "key39": "2LqWmWtSNcQ7j8sXuA64J3CEj4HshSRSM1iDr7mpEhiuFxgN6RD46c4k5DVKzPnhEGSQqvMu37vXMiSNmMsWKje",
  "key40": "zjWn5UmvqHbcMJHTWnDjMPUi96hHk71HZfiicjdJ26x5C69fyUhebrxoxJiv6gkLuaNaubhoPUSQcRgheXtex1F",
  "key41": "66J6yu1T5qpDpXdE5phwvDhVBfDEi2TE8VFbxHVKjEyGXd1pq7mZRNWrYdE8LHEZWyWs5TZZSCVDx1abx3qeXdPw",
  "key42": "4VAiYk1yrWhdHjNet7FeyYcziSw1pjudbAHeG1n7SX6rSDivZXZRN4fukJfseV1n6L8ogrq3WaThVfYeo85DzBLp",
  "key43": "57B79zHHuQJvKWebNeDBejWrRe3zwUuWsDcaZCAMhfAUrGza2xg9NGoZGad1ivqGzzHJTi1VTPisDHKVqcaS8WDE",
  "key44": "2Xp7GPawsBufg9wb7XXcuT7p3UFjAYRsz1N83SnmNQWV8HbhbgVCTc4K1Zme4Kt3d3YQFoJ1mfxWAxn8qxF6diMS",
  "key45": "4Ki6vBMVZJD3XcVb3TjRiu8brq9cKu2g36T7NMMwTzjSqCohC4ZSCjrHygfvVXiuLA2uuYoSXPbbD4X6SVNJUEed"
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
