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
    "4pzbFAh4kYk1n4aCoivzfvRBGx5LzusXxvZgLeYu3tegjtsWtPeeT4dXEXpoLDZCkQehM5xf7vP1s698osbkGW6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sGPNaYKgPCNjvNZqCy38Z7Nx5yQ8XjAUBxVghqckdceT2kEtFjS2kDJp3iC85LA4xWVD8qcYQWSsykPph3WyDNS",
  "key1": "d4LaxhGdMkAVu21xH7AEAgM8n2cJwLv8C5g9acZpry55yamFjvJtyaBihi8GNZHZ8dK4TMgihnXhcv9Fz5gUUZA",
  "key2": "5bGcriZmgo6c1NHLGCk4QLRWxfjKiBRr8WsigoZHb9SB3ZajM9q7tG5cPTy1YeDG6XKHaZTko5itknxXyhN9KKpi",
  "key3": "5HGeyGNXTTUjdvYZxRkhhAtpH1Q6EUn6T9WhYnHSdTN4zChYU4Rf4tKoPua11AthGRZ2jcuoWrdAtf38yuets9Xu",
  "key4": "44jceYWjUkkC8MmgtNwXhdFeAAaoc5UsBSoCnBJjSBK83MfCm7RQxAUzd89jxq2rDnbo8XirDDJDcdRV5gCiwxTV",
  "key5": "3Z9f2TAmGmzrgp98Zt36VpgnSv6upveEFA8GxmvQNyDxm2BMB4EnQB3RS3k5ohEEooR2KSf6iUBepShF1C6RCtfB",
  "key6": "ieysZSRrk3UBYnr7vaBUu4bPyHxV5eVb1w7PJVKL4PT5ZSc4QsQDgRY4xQSk56gZm93W1Hcp5NVL2q6YffUXaaq",
  "key7": "vJvj9eyaRgjKjnnF7TWbR2z14CgXRDhjMS6zJ1bMH7NxuDfQh9uhy9ppcwYWnmmsrWUu2v8okkAEm1bRq3wy3Pr",
  "key8": "4avy2qFCbreNK1wuDNQTiY4NirNEFA1EC2RxAtj82xib9JBgGVmQq76oFogTkgSxcXNcpMxEUM36PLkm5e116K8Y",
  "key9": "5krDntGnf4NozVAhkrYY6tKhUuuxn4PFmQJ4gQRryvwAva5hu1fRmuPd78A2hqgKgG1YZRwQ7mX7Av1R6QtLNGL5",
  "key10": "5kDG6Qnzg25VeR8wiZssNFS73CoChwFcf3y8PwHFxvwdNLYASk2MyDB1cJjUfbBkb5CTkSCYwLBDPDAwicABr9A5",
  "key11": "PLsdjq1eZ7zj2MAsaof4WYS5fjVNMzQnvxsRDc89Hd7TfMBXAoy2n4yCSYKFH844y9QhsnhbTiPVy8kDYnifrgm",
  "key12": "5CWF3wGvta31gK9F9sTeJRL9DKokRdX8dvtHZs5skyqaZaHQW53ZzCND8hAkwX5rDPNNyusUqvVUN21pjme3UPp9",
  "key13": "oCmRWYipQmYj7DpKLWHuBS1Z8H8e1xLi3XoaufE84G1cJRegQcEhK1FG5DDvvUSGcSyCMt9NzrsWDY2MTpNhCXe",
  "key14": "5q1jbxmWYHE4r8HMdVoguqgMakMnhzLeGy4iHQM1oD8QgkMTjR8rxtjN2UKmKgmMsmidfsM2X5BRPPjhRvynXBjn",
  "key15": "5kJEAXdyRvpZUmGF1xTAg7oSepDPmWVGwUeja3W1AczyAAkNFKQnPWsyTx7HSRGzmo7wtmzPqtqADvXLLJEzDJba",
  "key16": "4P9gmCNJ7FYB7JSkta4KZi6SgRm6j8HsaAhEieWkdZrEUkFDtVvixU4sedX2Kpc4Cy6ZbR98WwSFvcycJWVvUXqb",
  "key17": "4Edu6zQ9ZunjeNLtBnQPJyd9NBGR7SwDQDGEUugC34c2E3CeMzSjMHZ9fvbNXEbosCB13uDjrA9msHw6MDevbXoX",
  "key18": "2fq34WccGSubnhC6b5jK3TyUKFhym1HQgW8BGcmVzsk7FcLUgcbMncsyH5TqQjV9RHArpZspUwFagWHmZXoG6g6U",
  "key19": "9qBLGYQbUYwZLMWwHFns7mqzEYz43Nq2AkP5cFrJyzD8wUJG9DmTQM1EEabsNkVsLSrhonnbX3UbtfaYq54nwej",
  "key20": "3SBw7ppvRFfbq7qUMLEiXM6qAPt4k8bdmsihkCchsQKpqyiiaZtVgBBT11pUuwqKEsiQyhzvLatCg4L4mAn6H5by",
  "key21": "UvxCGUNFVC72o8CPZyZDPJsjVVWUp1qvp2Xcz4XEA6YLy4PatEG3MtMbMXePkvdtD51hzVzYfh5nqtWs6JrRMDA",
  "key22": "41aA4SaLoo2nDfzQ3FmN135YqPB7XyCtS2bzi9GgyuQdTj9bSh6SfMpogBRJpgm29NvRBdTJgkpM9LEVvAsidnjw",
  "key23": "561EtwcMZGPhbiRkMtTnyHBcK2Hrr9Lm9tcArfaQMvGfNiShrKbt9jtKxPsB3JdcSzsgioT1XsrDLfQVBEPVQ5AX",
  "key24": "3NP6LL36PsWJ8MK3xUa2B61wCRBz1eZftrrFV6gF2SxKHeekkftwVVmxZiDARAXYu6bDyMtvX9N9tqyGoWUrcbwB",
  "key25": "3iWjihsvtPd7tsxraKBiBfP3kYyyZVnrC4T1MNrBXNChqAJNu92vyUo3V1fqv4qKRMexS1gfgpB4uEssvTmprrL8",
  "key26": "4ZErLGrpm2DfMct1r8dKyk3zKKC83AP9JS7m7QL1pinPyMr1nSiWjPJyVfxFKnNvQDhPwuRvrfDFyLwSD5LNjshm",
  "key27": "537ZqT5jxL2DAw3XGtJm4FfA3ZQFskucj1tcXFPAsC3yoC7FUfBj1UtSX5jZvznLy1qk9QhG672QYYQ5F7rubRWv",
  "key28": "43L25MJyr85fLxZNTHZ1saqykDCP1QkmfRi7WV6H1PepcqBmiEDJQJEgw2VhqohY7rW4Z75mxo5bAKdfMs6oHnzz",
  "key29": "oLYNeSygKKJmYCzhk971n8zSerouM2UwdZ8ps6BeZewSmkH6hHAgxWE1fbqWUWfLxPjxwW5mcq2rzpN2VkTdW7H",
  "key30": "2UrMLuWJTrTXCJs2NAEH2L6fqAk5TXACPnUkGYMJDp9fVA7Y1XEfSu5gsNQnogni7UPxGsHNFPEeWSxpgsMxANZr",
  "key31": "5euxgFLiUtDVxD9w96YY4v62wq12MvXn3gfVNvVh2edpF1u28LrHmudpECtKoDwef3xPNxp4HV4u32BidWjtvZdT",
  "key32": "43tK3ZwM1rDv8ajSu2VpwPCNnhwyGr3KQZAkqdG6NPUJKunvRA8ZWS9doZiZxUeStcyni8pgvraKQgA4NwTV9g5m",
  "key33": "45Uvju2tbVq7fZSSjotvwN1bpJuBJCWKYFGqKBaBwkPCu66PtiS8FygT7Xjm7bCjn2y6xqka1xfr8Wyc5A58Ma3A",
  "key34": "64m4uwaNDCChN7LpqU2ztGqU8fg2HNCEcX8QqVgmGinY7ZRQYuMtBSc1mQbUicrzARvMtqFfSzqoLuq7Ejv5dbuD",
  "key35": "4ENp7wGFbR9YuYbEGqZTBVcVJ4fiQXRbMZ2TmVDAqmxAcQozCVsPWYbk5Gs34BBnTg8EdJGmEaMKJ4bzBbHFMeUn",
  "key36": "2Z55vnnijGPFeGozPzdQjzaZbp2z8vSiZsScyjc65zN5kKMdaHg2do1r3t7EZCju9de34ecusUPS5NnHKGMnAJaA",
  "key37": "3dHyjoz5yfcze7M5CP9qwzVxDZcYT7umBXWSNpd3KYjo4PwDLUd4SjCm98yyyPtg1mzhDobHsTK4WP5MihzFsLo8",
  "key38": "3wW7fbKyzMJpcf2KYX1QMWoXXcbxZtRxeMJUw3wbjMVwwWRkZZpkZkitkGYqTL8bwaAV4sGfdHCjc7CzPrcttgtA",
  "key39": "bPtp1T8CkkwGf8eAE7BKj36i3i1VRoYg28YWZakABJwtx3YStwLULbUrURwHwwpjFdwt4GidxibkmHVwUL89FkW",
  "key40": "4jxRbNNTE8UXjW74vpe5P4S5CkbuDX9joxRS8dvCEhxeJLY3mqNK3QgyMi4CfJhZML9JuovxPXV2vo9mhVjgySmX",
  "key41": "5UcwbVRutJ1jR869e6QVGj6HxXxrViC1Mhr3MrU47u9goxTSrTyxiDHP8cee3DPeCUXnpYd8SRgrfRJycptTzyXb",
  "key42": "43HVDqjF2nepAqFVwbuSVgTiWGEc1CYP5SrkMyFt7cjwE8F5tJ5zeH9MjCg1xn8ZF3Dn494vkL2iUBd2jNPfKQBf",
  "key43": "3hneEjgREe4aU4BWBE4f2cTHnLH3RPRpxRsfhi28W6TjUxD3uAzaZ7z7mPNsK2TyMUL9QQVMxhAHN4xstVaB7N2K",
  "key44": "3rSmmBUgAXd8GXFnQYrYxBPNvNHPQJArXVj47efEVoSoDHnrekxPHwbPDsVQpZZLKAXX8fZHDuFXsKcdo2rNU2d",
  "key45": "2PHCvQBtCWLcs5DN6N3ihbkCHy7LBKFbmhAR4WKG7ni8VXRz4bmGpFCgeqPiCQdQfkhQx6L76DaYMKoCvGDVFzR",
  "key46": "eaiX6GTqzVkrDCXBWARax92ZeANTiPT5jPogGdW8hC5FcNfKb6pMpeZbPW82LR69DdiF9zzAoxvHzyBMMWAi88Y",
  "key47": "2fLSyHU9qqAiuhAjyxWupXJEMnxY6eiU931Jk8qpguSjJrPhjkC1tWx9zKR12wBdig2KUbQwy7jrFLtHyjvw2gPD",
  "key48": "2zYp7efhyrJ5uUidv5dxsyMX9Eqkif3sdTPGyU5oGckrYhgZB16Y8JLLQwk4UeQ6iM4Sj61KPegvuVbAJL2kAXJ3",
  "key49": "pTY6YWnTLpMMRSqs6EY7edCnfHKvfNp4tNGQYV1tCg8iSMvMYfUgBmtTM8Lyb7RPbSrswEYc5mCHu3b6MKUnxwS"
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
