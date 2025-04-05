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
    "4ym7wvXbLmyybGphWFMCd9rzC8tstjp1j4JhTBaiJTTTk5BFKcsAmPaeMeiW5rkD3r6PHqb1tWnD6rSfzKyEZ3NM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23LnkGKQyHb6eMdYJKGztfvMHSNqwLNHt2kg9KRzbu64yvo3WK55YNHwDAwMaD7TyqxCgvAStyRCVkeX9yKLQesT",
  "key1": "2qvfL46NtMcXykz3qW4JD6NbapZbTUG9qSWjcp7r4mS7A5JHPH7HkMCumpqHz3D3wPQQKGqA9mJwTi62Sg9YyJ8B",
  "key2": "5v3cP2es89xDDfaUcJQmxQ4uTYpiJbbHLGzXg6VMvhpZHRZ7ncXp4u6ATT9qZKEhKLSW3rxceMoPLtuo39FeBzuS",
  "key3": "3LMMdNP7b8BmeNsyn2bkXU9jMT9WDKKKNzSZ5emXD4Ba1LaHzQo7Nm2BZURoxGyjtcyogQCnDqEvcSoNag22nnvr",
  "key4": "4ijbiks95SktgfWhKCLR6rA1mgvQwdVtLqU9SriprCncZBWVy2jKMMXyg2uEDx13w5opn31S98UpJzWQbqDqHLSV",
  "key5": "4neWd3C5e5FJ2NKM68hJGmBwwBpzj9QQWTYqVFq9Yj6fiovDRsvUHiavKYb21dTNKwufF2NJ4kPub1UwNZNdk3Px",
  "key6": "424fcChpaKuE3ZPBZTRFkMJwXa5DwWdar1VyzrAWx7rbAjqu7xMqG2eku1RNkMzk1inTie6S8aHQLwjcLqNEwp92",
  "key7": "3RqR9VF6ek7qfGkWTEjhHvzkDucSWZZns7tsnnRmZwsUJhYPqG2ph4iaXV6R8syYuFjbX7XpcHSybCb2e5tLsx3d",
  "key8": "2R5c7FYKBuEm9BqyYvRiSoA7vS6PC6BD6KytKHsKLdEHpc1brKo4NJW3xHXYkeXeGxeD3r1JTVppnXjmSZBfZuCb",
  "key9": "5TFja24qsNotzCPDDFq49K6iFAk11aHe4XvQBUcHdScLVzKAHbUTbuyqCPiwo3Pe3sijpXkNTH2AzCUh7BcbPajx",
  "key10": "mNagiCu6hRL9YT6raS7C5TpGT1dTwyd3ij75h1CGTJNpzEJeugGm5nNHCyHCvRv6rchsNLiFcgSMPMQEYW6nZox",
  "key11": "5ecYsLRMDjWPWdazchXJozTLNPG436bSzPMwxCZ67hyEPpk1uhqFfQiSPWDSohuu5ooDyZ39hPCsDGsks2Tb8Ri4",
  "key12": "3KGaB2fJ2MWcCKb2xcekgxVo6YJRjb6LZCW5BRy6X8Eyrri4FMusH1ppLMW3fNtQPMBqeDmH86fMPLSg8UxKipm8",
  "key13": "4zh9J4RmKodNgTPQN69fR2SUBi8s8F7MXSFNgVDUcgmGHCRNhUh8jtVL2UoDt9WYkjJVgJj79TU3uVnNu1HbWW6",
  "key14": "63wJBFeXdXvFDs9w8w866AbGsRw6MSi58etr6ZvUvQiwGv7YTMko4fM97m8sRUScXx2fSLkRjrkLCVwJm4HXsqmt",
  "key15": "2p7jmbx96daqv5pUnuc2iHHm9izCfW7yMZj8nq9dP49akvapVg2jje4bNpEScGeNxAeuJkevU938uCn9cb579SWW",
  "key16": "2HtiCG2VD1EuVbkcrcdohPbSAPf1uyQ3Mgkh3qqGjph3zxe3HCpaWQwkSFPg9f9hgxdCSLbFYvKWHLCvqrtSfRZe",
  "key17": "3j7wZYcoyV6M3ph7tFrZukdvJwzZKaEvookEYjWEdGRQ5VbvS93x4rReLBHDcMXkskU6te9uFm6FKXwdUidp5Emo",
  "key18": "4tAQL37UtitSnBx6owWLQnRD1DcaCFKfhbAUaZGNVm6nAma8hzxDaBEpPqnk4iqTMLyQQb6huzfhRyHCe4FA4V8A",
  "key19": "3UzCqiq2otsW17Xsr3MmvsNEYeSFT9PdCYptP4fkGcfdKn8yhhrfkDTrGUDoYeaywyvvuCALraasVBH8twfn8H38",
  "key20": "4UEEAiptsiGxCh4drrrRsBzzgD6GGUHJ8MJV7HXjjRyhsJ2xpSqJoHkgRaWE34TiziymMJRWVBAu39VRCZ7xvC6q",
  "key21": "oWTPrTzwrbYoeb6F4p3cRfCdaac5YYWBBh4Y6GLwaqZcPgWqLGyag8BS5eMZBBV1cd2wnz9aKoFeu3cZJipRZQS",
  "key22": "5dJ5cLmhXrFDpogSCbAEWSRH83mvJZ56Dy9HqgfVqco8pL1U2LYZSveNi74L3FANji44TkT2YWftqBrqwTaW71bf",
  "key23": "5buA4mRdQvKxr8eUxpiYq9tjr2X8Ey1UuyaPRASebMnFnVzQzV9tsX9P3XVRmw5vhL5tJw5QdxejJEjeUDnXewhE",
  "key24": "2uiZq6Z3YTiDMr4x4knr4zXuKKwBJ47PGXUiW1p7DjjtQutouMnTHESVi5S4WYDQ8ybTVevguZG73sChZ9ZX2K3Q",
  "key25": "cyxFe5xmPSomXFCPY7NzSXXsnWoSn7pz8trhbaxXGBYUrprny5F1nJqoR8AgXXxhK8mwyLJhwxxcuNexCAReh1W",
  "key26": "3EPTqd33rEYYNNpuwrC2cF5Z6F5RskXVQTTm8xvLfedVx1Ywimn6sHryZCqFcDio6sdHsAM1D414bTDpaQN4GMcV",
  "key27": "5whSH64e9SB5HRdwVVSEaYPPz97ePmidpTZufXBWjK8w5evwN8SpQggpEEt5q1cjh8mLDSQ5uz1cmKatpcZTc4aL",
  "key28": "33ExzizLKdz3Mug26cCZVenEbnDyj2xW7ZEczFSEmM2iUyc68yu59g8k3BqcD12xS7p5YKBfvyCz7R3Zy53EdN6N",
  "key29": "54qyd8Rk5DuY3r4N2LAcgLhktUfJfz1gQfN3UmZt2HkGRbqiyGvJRMGF3C31rufucJA6KxNetNhCRqH2fxameR4S",
  "key30": "4vr3zHsuksq8u1SHXTKBrqQYgU6sMKVG1Bvi7ELyEC7qS4ATZJyHFpfYcUgnU9RtSYYT62q5UPLoiNaySGtstjrx",
  "key31": "5kfhtvA2JkdViZGNST5B3j7qni7cCB5a6NpidRY3aTySnR6aCBQpsd7ckon4eT9neh1AsytoKiLugieNncQPt3vu",
  "key32": "2FwkQeSMjsh7fEp3JjGh7qfaGMfEodYie4ySz7wzpxHiu8jsg6cTzVpy9gtQBKNi9ggf1zpcFMHzr4jhP9FP9jSe",
  "key33": "3TPGmuKYdRLJuLKfqVCHUzWrr65hzc5hKjHgKXEgudV3kPoAQiwqagFFd271qXrASGEAKYjfkVu6MqpsTVEJm2q9",
  "key34": "4rsuCFAoaMw5eeMMDucCRqoXrnSCZr86iVGNqbEEAPy8jXJWCaFW6FrkUfdedo8y8BLipHWVqvVe3ixWS9kBD87i",
  "key35": "2PA8h4me9tGSsHCYa5RSQ5dnjerppE712B3gYF3jvVxMzbodk2qn7WQSZUNaQ7N29a1R1VaBiLatD3pH7wGzVkSA",
  "key36": "3tTPxTD6RjRqVjz3pFkCqpBXN8SCHrMCFJDp3FW4DUNxt7XEwmUYntarHoMktAcHesfR7Yv1zumfZ9tcdZx6MLoA",
  "key37": "DHsmBkhGrRXpLDtd9aHqZbD1BRW6sueaYwxRMa9fjgvM3mo9zGduGiGjdKoWytZfHvxTMyKpqtHXDMSofBczoaJ",
  "key38": "5xEyxNSXSfyXdQpRGTMsd5UrZWwdiXudbnRWdjShCacHHUEPVKQXKNHM4CNsYAunmeq2yUMRHVZ9XdGre5SScVD",
  "key39": "4wvKtG445iyCjAKpbZphaRfsY7errGn97uDdPiJfzyjeKzzpfaxwhRSniDFdxVQY72f17H34w9ks1xC8azXkKXdg",
  "key40": "3x6iBU8dmo3UGfZVdmcpN2UWQcVpZpZbZFhy9N6tgJbb3T932oy8tQ37NsKR2fE4HJRDTbjV7gbM4vXXvcRRVY4D",
  "key41": "3Acwii85nfJiZjWSmqQux3JVjwTs2m6W787BDhYKtDoEV5Lsym6hN2CEzmvZih7UmbSVc9D8jNvcnyNjg8t4N43R"
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
