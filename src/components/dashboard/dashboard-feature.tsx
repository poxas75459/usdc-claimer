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
    "mLVRMasxUSw2RTKgwcESSMrncvAiPxUe46N2Z3UTzNwJWG44PEAVEvQjmqWwATFv2coQVqd9Lx1532zeQaTGY3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fjyyknHmziQdTuNsWk7TXUntifZxfjgcJADVgsHurWF3s6sb3hxXrfnsB3p62wMcr46BKnt4D1Q8QpRt3D2RUnE",
  "key1": "3tCMscUasBaNSqQ3144XcfVXKrBTBvpf3MYmiNo62hd75jTpUrxntbfkHNdSMcsow9itUu127UYCkbbZkSkWdVKc",
  "key2": "4WzQ19Hk6kcCWxTvGVjAWN6q5RmTKG1UPczKfgzgoKjS1gaKUHVC8SCdgk6m5aQMNA2UiumEpeTXGrjFVTGzxVDV",
  "key3": "2MERcRiBbPjYCSSGp2i3pJhAiVWC6NGZYhk6i4mzjDWUFa9X4K6k3r8bZ5J4XjgsyRJCPfLY8rRiaeX7T9cc9LiL",
  "key4": "3GZQscsbhyB5FnhQbaYeRfsMTYQ9ZT4bzF4BR4Dy3QiyFFpL7XwhzetHusqGDu8Gw7t8EJygLXmXqCQi19nR3TLb",
  "key5": "5V3un61hWfddUk7kZHCkcvG33Unbmf5467fggLjPVscae7uNzpziSkgFR9p5CBZmnMw95JZg8zTygiMaMDgMKb7p",
  "key6": "4WYXczaRMU8kAPuxpcYvbegHmVZKpinVwvPj5jCA8b6QVSKWax1oBqMXgakqDrnpHnoFNUXyJ6oHgeymspbQosYf",
  "key7": "2cpehqrnwBVVmcTtDq4g9UgdKtJihBcbDZd4FAMgMByoBczzDXE2wsAVT8hgMPKodUYuXGK3aAhXxVjVW2WfvJA7",
  "key8": "2cziWFrrGeUbwwwnXAiFQV3Jb3FY594PQr3AwYRsGMKyoC9ZVXjhDx5PersjGoreoSwKyXFA332z823TimaJg2yW",
  "key9": "1t986Hrz6o49ji6q7gFCE8gUF26K2nNpKJzPczbFTEo1obYG5b9EDxkuEyThjTBHyn7ovy9hqr33wjK41jieZ6j",
  "key10": "feovU7BT76HXoip7xKhLpVwvhCJLLHPphLBEn4n4XY3U8yo2Tja73bRu8XrgXLRCoPMyZEy7V9jVfGaJR8hQfXk",
  "key11": "4ehqyjHLTJ6F7rbes2KXqYRscyZWFTpfq7EU2STkgXA1TyodM3RzfNAFMDWR4wWJTySQDs9mU5PhYxF6wyR8wqLZ",
  "key12": "3orPjgFd2jLdDBzrGYfW9HfgCreVtg66PxD539Rx1N5VtsLGNVZgK4xRchvsrTqNdDf2JtK7V1YL9zJbAhTsEJHe",
  "key13": "5YFjhDEKzHoe9THSgiNZgzcUBTsRRot5Mw9dVKKSv4vRHVumAhzg6Z18f5YhEiYzS2yMJJco7JnscAHDuTzs4GM4",
  "key14": "4ZGXY1msLuYymSjjcDXN2VdWcKqgNRdZ2Y7YyfcYDAk4eWo59QLPBALnFmJUCyVM436GUih9dTwcehUbNDXg1ooh",
  "key15": "2VjyxwyJ1EWwcnCiq4sxTNvGjRkQWtjLRBBBiLUFyHKvy6MXcmdX9ZZXoo9b471q9VjThL9JPPPcfXn723pw2jjN",
  "key16": "3b6ShM2UgiFgU7dAT8AusBVGuJFcEiAfknFXXwyTs5zaHgBU1AFrpwGP84e5y6jqu2Z7cvyQc6wtesTGHXhdUKia",
  "key17": "2Gzb377Z9eaSzSxPeZmD7c74RwvY8zYGoxChz361chtViR9oaq8gn78guR7rfEzULFPkNZpaSMT7sPs69QQ5KpNm",
  "key18": "3Kvgvz5bt2pF7vzTgZZ86Uun2brYJhi8DnpmJ9xkVZkkfgC9HrHwY7wRJRCtbNAdbcApdDQFWkREMViLzeKcLBbR",
  "key19": "4cx56AZk8ZUEwC26feK9CYSpdC48YEnBH3qYPuFL2WP4jxJ7xHGNz2XjjeUFgWzdrNrFYqKuo2XN6EPypPe8PaoU",
  "key20": "5QkhEmMJFYFX5jUhc3cTaCHpNyHHM4SKdSHHpT86QqbSoSNtRXY6qsdL2WLkrvVCT59MhNx7us1WcfPAZt9szaby",
  "key21": "5Eo22nMi174dRWpqwH25iihZtcXX57Q2dyLr4i2EAv1Q4uUnZMvkJnXNR4JRUQcTjkv8Runm5p1o1vRfUXxnUM4B",
  "key22": "4FZJHKSSk2xPe2Sy69UC63DjQ9gfxjmxjLHa9w65RrR6VNZWociYYFns9AAjbEra3DLQutaetKwWmDRYGX4P74ad",
  "key23": "MPS4M9ESpFcbVuXspywNE1QWXy2JTN8BzcjA3X6aFGRSMvrB4hgZWRAmJS4zN8UgdPnJqt3JTcc371fgjdk2z55",
  "key24": "5Ht2J5vw19xibtQ7EfP44Ui8TrDYRj8KHJfWXSaD1rko5zeZeL2FxVD3HUbXSqdGkTf1LEs1jTovcEz5893CUGnf",
  "key25": "5CazPZSLMMMpVzstonGmA6y3jqRdkB6Ms8xXts7rN2ZEdZ3Q99xne8e4fubTzVQveUTxLB9ukzbuvEoCpfxQU2b3",
  "key26": "63zV114WgxYgnqNQyejhpxpk9tEnutdgkAxpJ3KTJSKwFHyrqz3mqFpWP5ctaPWgfkAPj94RJkpQmc57bnfrVRgT",
  "key27": "3yocXqXktVks2C4dgBD8YkuxH4uKYqGrpdh7UeC5DeZjQeeT1zCJXnfFJ4vqPud98aU5ot5A7iD5nVHbJSer7LyY",
  "key28": "4yvrYnaoat9oS9tGJhfVVaGoq264yPykNf95CfnnJm3cesd5mt4FpGdpvEeWBxdbKoSLtTQHrWQh4Sdn2hHQegYZ",
  "key29": "2NJZtVk3j4M2GfkDBghaKxMDn7mz1yihmaCNusECZkBPmKjBBehPvcZL7gbEMsKDqZGbzBmbGBfJwSuL1Lamhajw",
  "key30": "294NqZPCh7DwYpvhd5TtpnVFpJt5wp2bYwwNQQQ8RTe6LSsmGRtJghtsrXTDrX2bpNkJTkkK5Pw5YD8QoozGGhpr",
  "key31": "4KhzLjc41ZCcyPyupcnheTZhzgprSpkty5Nqk1X726dRKopCGQa3C8hLSXm4XSs9kDGQLdyeC7WQKw4NfkrT1yrA",
  "key32": "3rk2HjZE3djvihYvKqbVtgBN7bon7ru7PrxFNMdx19oMx4JTroXSNW62XGPwkkYhnWFkEVaW78W92BpjdvLEiUMS",
  "key33": "2SHoXjKExohfEQdVMQotMSPDT8cDXBuq4mQzkUwBdWnEtmjiuXxaX53MTVtwD3Q9rR5jwcZfwZ7pzdmAk6Uxc3U2"
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
