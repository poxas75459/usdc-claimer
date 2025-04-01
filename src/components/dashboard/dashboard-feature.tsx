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
    "4PgJrSGscfqPr75Ex2frma1jqbmDeqPNUGa9r3DqTk16un9by7k8uHNqj35JsfYUkS1zZNmApB8Nb2w424NJvCWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SVbBVnYJirMx7LpHykK1nucCtifd3zsWsVAYMhUNPKsBwD6cUPskbF23dvxqCZQboeZNStSEd722MqUJjZMHdhf",
  "key1": "3sUKjaLFT46jzExjcvEzhbT6aUrS7bg2jKzqtYMst113A7tLLWMBjXxgATABTTdmcAA9RbzZoQUYnABAda1vSHeh",
  "key2": "5L6mo8hfi1JNTnFsY4aGGKGPjaJ1X1icj9oXmtDLuWc3CWchkat5GmExDR3vh7MT7A5E3V9kfzwR8kydATwNVQfk",
  "key3": "5mrefvqWFNr5UhGTypaWQm4xa5RwsUBkUST8J62kQ8MyP5rpm9qxBP69F4r5e1JfavjLu8e1LraYKnRqA9xQM7Jd",
  "key4": "NDMdzae2u5zxczFsdzGKPtiLNoECD7G4Xgo78RZabC8uRRwmsLfoHy7bxa2qFmgrXn2svcVuDXZ95oSTZqm1T1c",
  "key5": "4wPHdkECE2AuLxtRpx3jFehfEjPeSsXk36HMYeuH48Mu8op5ajwVzbUak7PoTofammYhgCowUfjKweuU9FtHvkUF",
  "key6": "55wDoy59psB8cDX9eQ5RvA7jNVo5WGcFqHU3mqPDkmkX6r7mtN6ZwZokc9884hAscamSxsHkGmZSwC1Ygkh25ziw",
  "key7": "31nWMw8wPMxuD6p7bVC4nsjCmozc2MwW1SwErf6v6mRq35cf2KVSeS9Wqtc7CiETUPL7wpqbv6NeSSLSC8BpKiPf",
  "key8": "4pVy1dLBZTEvNgDDzb2Z7eiM92ExniLcfx4Eny2Eayvo1JpyMkeJSLSF88nFkqQ42uEi3zkJex3wxYAHdKjTJ7UE",
  "key9": "2Kq74gYewHjQFs6EivZKTZGTK23P2QM9RYzxJHMBHSTpUTZd2fBWv44rNfB5sMNQAXLfgWFdcmzR1BuLoHyF7fCs",
  "key10": "5cejWbAMR2pzpHtGpeJGdCyNUuDNtEvPG328VroKFPHkDYEyaA2AmLWd1Ffn61R7xwWVus5eVf4LXCMmDZy6epnp",
  "key11": "48huG9uTCks1BgB7KiGxjYYuaN2h53d1hGicpJf2X4tggPfTEfdFLPr7aEhtpDybzaTPQi6VVpdaynLJRvdaXG2F",
  "key12": "5j52Y1XUp5XQyhY2vAhFEvKfyJ7iT5epvnWtoT2CQi17DQ3kVWfAAPWHAL2DZTZVrZdC1yV6BKBr1Fh2jVaQFGHr",
  "key13": "5SjEPt5n7J7JXp63HTvSi6NxE5Kk3K6oe3PHw9MD3Pu6fjDBatP2ktb6RF213M6StgZLSeFYNmdjMCXSweD1z3ks",
  "key14": "5A9DPS2bVxFmJKX8jsHJn6VS2Dz9wACHWu6dygdwSL8YmZEF4pABQHSHPn93d27zppmbUGraLXgPK2skJkrWQe6K",
  "key15": "57kgiTTnmHbFBkY4pm82kr1YEDHmCDR8fBB8waSC8HLyS8mfsfi5LFzXDdUemqQUSssEwBEntGLXAmofifTQLBhF",
  "key16": "5YgfKcPFqCpocGkbQNfhkrpXjai1imvobBa6XLH9ocEQU8zRihhwdufg44SYMjvQhqiFgRfjyddgg5VhjEm37Xwq",
  "key17": "554EvsDSaTAaTUsDpd7HjfiJyCCGkZBYqTphYDwn1UUrv6cxJdKL1eo6KachEbNtkHK7fKCLAs8iy6xAEuC3UZvF",
  "key18": "54a2QJ3giqRf3giihveezBXZJLkS5dUdkArT8A69rPCdcbdX81GQLmeuWpMsnCi4PL1GdyYhGBPVz1GMduUBTGkU",
  "key19": "3pVQ8eABy9DtxM1ru1xg5bCBBubGnc4w5b6w2E5AQr5SbYdZUN5DSkqAffC98P8pbVQRRTohb29r6J6cZpX4br3d",
  "key20": "4jXFnaHgpDnGn3pUAGb8X8i7EbTMfAosrb63YogRqZiktY7ryPRcAu5fdKngHbSrvTuqVwaZkXYPRZt42FkSi3GE",
  "key21": "FYyefAuYwZmbY6D9BAin9CKBF2aT6pJCWtGiFKs4HWnmbwPsdNyPWLbmnz6aQCo13nJ7RN36w8t9fF5w965A43z",
  "key22": "2kJ7E7okf4tj89rueG36m5J4SMBNDkhsA5gBkvFUC4EfKqG9wSJdsgfajbvWzditRHD7hh11dvGfP5ppP691azt8",
  "key23": "5a6tJwAqf2SQ7kkHHsnv6122qWZwyatyCyHJqWD9Ni3rUbWZrixiyC1giNEswSgWyfd2FcQ4nHYJR9WwujycmW6u",
  "key24": "G2QenN2YW3m1QnaPwWDTuTDLEWhR8Y9pEJ4pXTExz7bbwAcnhWKobY5T1h355ZPqee7eWmpzWwupr9ura777KkZ",
  "key25": "2CgeyNiGqeKatAYUi2CHyQ1qSuvQ72WFBziVuWyqNATTdrqki5cJSJJ3JRmqtyCp6XLA27yycqh5FR8dXr8GLvZV",
  "key26": "2fqoV7SW2hFFJuJmyEwiFbHqK27F4rjddf6PYZuQxDXWgaJibDNHhWfydHe2hL7q9WKVDeby6E1MCSL89zirM3vR",
  "key27": "2mvaDKR6EKLJRX3pHdQedmQbGP8QffAdoe6cWEs7ZNAsXVp6sWqcQHrQj7BweXDUt9tNG4L9HJ7tNaEC6uVcY4pF",
  "key28": "LPL69ZP1kAoFuRqRHhYAUbEaSgLpZp3ZnwFEsoQG7Ea6pLbdogWb7GvBzSVLk2nkFcu9yw1ucq5T5J5BG5Com7f",
  "key29": "4brAMtQRRX77VNupr9pMZSQN8VzE1PbAJjYvE1K5UBco4R97E1G83oX2zMNVnc9i7XnAF7rjAaDc1guMMtuvujr7",
  "key30": "TxSuhUUcu84cga2vgRrMKWruqnaCDLEAw5Vz5offfmwcB95JsjYHZY5PyKsAzHKLG24T7Tm4B6PxDt32KgwcymA",
  "key31": "PEAi1RRDChm7vyJ34GDkmEEJ7496ypt4soukTdcBZkLHCuqcPxAUnXEK4Z4s8MGvjezvwbgr6DUro92uTuYX6SF",
  "key32": "469tFPrD2bG6fTSruQXB399KHHDvPMaKxqp9o4uHByqCm5Jt9eCFhLduQrZdAPHrbYBA2qbuSgYKaquz3CyURqoY",
  "key33": "4yhto9W8wjs98BuBiJwUQRMCJengRn1BPKTYygB2tFktbYXy3tJKEiZ7KX3K9oq7TPVwt2q2c3XgpHq9Zfn2e79T",
  "key34": "47LcqCanJxyhEeFpofJembfduRhrNDsFpALSUngiV14i5L525VnTHK5SZ69CgsRLRPGXPU2xLxz9h9JQp2HNGTWV",
  "key35": "2Fcy9y4ZCbnvamzdpwsPR4muhPx34H1hM1GwaGW1ZiCV2YogLuz5rYqryMi8izWeGTmwtnKwULKigBYk3tAZxmV6",
  "key36": "5RzdqEHVqV7c5AppAaNdtuLWTmLu3JbSKMFBgkEkGNvBojwc3NRyxSU8f7MpSBVYnZkKwRSdGvYwwBBGBhw89Srt",
  "key37": "3ZzZC2fAAubJXQH5bnAxs7KzWSgyGd4w97XKKQKBfzfygaPwovFL8VCKKJfE4fgwN7ZCHrrMU9Lhgg1S1DwFrLJT",
  "key38": "FAJPGGNKiYTjHvx2BkZav7KS6vU2vFUKj1w2SNRzbomE6eeduYy25kBLcCPkGrShoeP5npEknFG8swKiTtZKhFg"
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
