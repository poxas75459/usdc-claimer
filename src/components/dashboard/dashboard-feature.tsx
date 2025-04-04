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
    "5RDRGVpW2fqJuZYyBudnDjezTt5KLGhmzf7LPaSPk61bW2J4E3hAJ3Mym1empvBWspmkxTUE7VueT6352pkNw3HC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24ewBGUiXzxHx7Rbnuo8W9yxK4bAFgHCKzHcq2pzc7enYvhN9c75oBvE6gZryfa5wauMkktGpgs57hw9VH4i8U1e",
  "key1": "xz9V8dKXyRrpN4hs7rUkcVsxZRdBhcJ1fTPkiVC8XGgyCkS6Kkba1rwjNjodBTc32DWMoSn5buu2SEKSEAQipqA",
  "key2": "3kgoAobNNWXDyHaPSGmJfWcC5b5yLhLXqij4LP4dquKdCNgyDwMqrukaArUhP2vazd4ztAbeXRvcMtqnFGGeT6fw",
  "key3": "5GNFCRKsYiiijipZ8rzZfsoBz1GRsrT1TyPwvMirwj8xNAR58Bbg3DYMfj1TgvEfeUgUmKEMCoYiXGpDR6GnNcQF",
  "key4": "3CnHVisMsMwKXXyiSwVwtqT1nBxBFBpNP4G3xbuALHSPDDpFLsWXMjvwbdPDwzDCmZgZmzS1YFUq7SPNoYqEjsim",
  "key5": "KSqMh3Jc9tcfMvmqvUqr9pmLXLEmRh7TxxjZ2F2Pcd7mEn7GFK9qFpS2dMmLsrffPi1MNCqArFbsUgtn6jNHMyG",
  "key6": "2qM81p1Z2t6zPtCbNmtt9wZbNepcQCdroMAJ1aQuwnbeKhsD3MjVqt5cdUcGuLirjmLVr7EtQAoZJ77tcf51PLXj",
  "key7": "2jjrZiBEY7jtHEFqrtWhKvZyiQPYpbYuPPDvaDVY2NERYVwR8FyiNWuYptMm8zEvwp9uyEDYYhsdghXxBtvvDgWc",
  "key8": "2JiCZ2cB6Nme634ZU5evfQ4afCycAH7AosGi4QsoGYihub97UPJQ596TnzVnxVmcGoz4i1LJCf7372rhsC2qfeZ4",
  "key9": "5a6ZXCXtHFpt7j1HKdCLD9tZUuTHzRzJ1NNvi8DKJGMhgBzHcu9QY53EW6VSBFVhB3aUcw3mMDk6MtmfGvSGfxPh",
  "key10": "5yAB3vFjmVFCEA6eoe2AHx99TqAsYBUYtdVuZMUKiqBDGMvvp6aWZ9GyQQszbfYpwX94FiRyXdrPDziJJKCQxo7Q",
  "key11": "2UBWLmGCFsaFTv54s9LdqHNpGb7KXLU9QGZpBUBQrJBVFPeLGSUx7bogvetwWC1CTewBoyNgdpFWY2NiiT3mCDmr",
  "key12": "58rN7jZHEXLKoZoM7upWbH3tRS8p5KviSVwZ3MZ7T2fimvvFWEWYL98hzjgYHcJQozwT5UZqJmrfoyjPPejdEXAE",
  "key13": "36jKqDDBijXewLR6SkAgB1PNxVN63sCyLBxCQMwvbfJj7VZ1yMBiZATvmbgV9X3Gapd2jxHXY44F5aZspm6siuEK",
  "key14": "5k5zDCpyxBoXxrD8ZRvdA7u1eychWfQVx9NNCPDGZU8mqX4KC63gbom8zmFH2WiNUzPCL1Y3dtfhsR2gXTnQMd1K",
  "key15": "2BqofLdkyJGfPCfVyvnzYzqm35QH9nSSvgpurmqzdtAbxp9fY7BujNQavBUKoB25k5ntkxGJNexSXB3bRNWyGvHr",
  "key16": "4kLZEkJmNfKVWDzVFBWvB2EBW4apeRnSNAvisAENynNNWzyM1fspAPbkSheK65o8FTqGpRoy1wquq4zcS9X3K3Mw",
  "key17": "45Z4GiWeTBjKfnZpA2TnYdpU6pTZi3qYvJudaehfXcJLar3UnfBVxfZtNc5czEu7H1Lo3jUZNA5Z2sPLqUuYEDxn",
  "key18": "5dqgPiuYqeWHuGXAg9E8c1Q8CWy39hDXimwLbeVfo4dSnmDGg6yWD5nzf2bSHWX6MToV8TkqZqH3GRfpsTN4YaDF",
  "key19": "C5ofxLs7qXjiTznhzLNFk5LPXgyvSh4YMTegz2Nsakaif1tgL9mdCRzDfJdWhhfDgJ2yP2huZhApK7PErMmr11r",
  "key20": "4MF8G1WesjKyYPN5JssVbkdcGBVMoVnt5m95k4SDwYk8uawY2QLgwG8Br73yd8xNuwV5LkQQbXghgqgzWpcBMUQc",
  "key21": "2rt7WME8RnBQbKtDwXbVsQmhqPJiNPCotsUDUPhwneVdvoG7h8DnZCR9mPscZGj14a8zSMBntkeaGaPwRcJ5jZv1",
  "key22": "5kmKdvfRucTHzVPuVnsJQSR8yiBS52TasWdztFVfzvnBgtkvAH4QnMmcoc8qUDU9cwQ22RBdaMVX2seRqcaeXtq8",
  "key23": "2xTVWr8QYUTzooCBF4TQ44epEAz1iwwVjqTABMxFiF9ChDAFVoTfLG1dJSv2u34HBA8ZPLpBWCWWsDmF9BXAccmL",
  "key24": "5FLHHx1acyGRNiqP6NYvAcps2MDWkx1KRWZNyzHQvRW4PhFjrj6DARrCwfbTBqrsJUrN3tA3mE1iU1zsbytgJPA3",
  "key25": "2xRx7LXY955NVWs1V9n4orJFi8wkCAuy5QD2yXqM6HRn3Qc3a5bQFb1GmMiabDJQBjxv15JKHxShZw3VFdCX4FyP",
  "key26": "5BX2f1tscNWv5aJd635vMwKVXzk34c1QPbE4CNjAUoKJCmR7U3qey9HA4tvsrGFrm2ALTGgTRE6RuGcpVYiTYdzV",
  "key27": "N4j857d52ZUjQ5e2iCgXupQrPc6825oxCTPpQxxHzKP3kTwdMHg1f12wktciV7zmViMNbiVs138zGgxkX8Tjiwz",
  "key28": "2zRHVYV45uhgViZaJJn4tRmf4TZUon3NJmrotiHM3S3EnqawkUC72aUhfYtGZDjLL4G3pucUfvVTkkzTNbu8ygjd",
  "key29": "4s36qcEd8aoWKyZJLZ1pRo2rUGbWyjTsLqbpaZubnJ6sxfCUZpKN9mv7NMy1uNz5E8o52y8fY8fZbJ7K7by7a5xh"
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
