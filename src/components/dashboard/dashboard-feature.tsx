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
    "3iKaqEdsoUadGvF4bXVYPeRKQ7aANPEDKhQuo8qCUSDNvM3Q7yo4Nqw5U2PSPgGnaWYVovmA7ahAMTJdEVDhHEWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66kvNbFrKrNXuc5FuoWMRTCmKjM4UsCQwz7nLkYC7gXvEe4c9KrvxZALzneNe1PDSs4XJtdxcqWr6czFg9yTHcUj",
  "key1": "4hzXiMAmAfpCiVwbByyG2g1AgxwtCxjgXW6ptBRhrJS6AJZAmURJLj7mjbYzALsx7S8VitCd6kdo9Wpi8B6772Ss",
  "key2": "3eFM7aT6ov9eqorThmmZYqwGdYHc7MuBTJW13QwfYw8dEB1eDgNdkRUeohqW9CDxUqyxCt5dFNvXcjbboYDCvUgT",
  "key3": "385USwnvY514juXJJBNBVw3XqWdT19noLQSTg8EgyAF1ojc8SXAP3bAC7Eq5aM2XeW6HufLhxuYETBwSu2ZFaXG6",
  "key4": "46VNc2QpN4dvBsw6sD2BQLpqNnXugfaTQEA57h1TdamRNnNAHY34aXQr5wA8BfwneqPCybbPokWVG6oMHb1mqWdB",
  "key5": "5jXmRanKeqQSj3XQHacAgeqGDk9izFwxrS1yy5gMDaL9WMB9JBMmMqrmnozXMnzdrbZj7wUiovhgYVeY9DdXQJin",
  "key6": "4sYMrZ3nFtTjx2nueFjRGPrzcWK4uxbHMKZeJGVJPaYoab4xXNbPYXTqaraLi5nwvKPL9xGHXZ9cSjszo2PBDcKy",
  "key7": "4jF1VS99tQCvVcRvrYkCjNTwTdddYTQqshyXF43zUgeff6VrooarkhFhdZgnTMSZx5QnEX4Tuj9mGgxXxA8w3BeG",
  "key8": "5847Y3ViUA6KnV4dW9cjENAhEKZJEPEsj683zVmW29Q44hEUZYZfmvtkoSzVZvjDTw9jiTWDnJt8QdqsDfqyE1GA",
  "key9": "4yx4Y3iu7pwdBZ5iUn1dU5xTT8tZ4TZh5mgSuZPzLZEVbJPvjZRc4dDBDsxb6uCnNmmXkm1mRf86hC3Xn3qbtPvf",
  "key10": "UZ9ah7RVUtePMismKyTaTfUK2XpKvSPA9YE1bA7VDahWJZAR9bYnxgcH3mKBGbmbAJfyvWkzDD8PcXsLqUAwCWH",
  "key11": "4D1t8zzj7KcdezzopCLtBemYaoY9qfvj8zabJds8aUzqwch5hAr4TPuWHjahY61m4sC5u98Jb8aCQkLaS9CZu3TU",
  "key12": "3x6fiWLSdap2rQspYKtszDNiNN2PJHX5S3mCKjQUWVcsQXXGeW8BGN3rpgik8k8CdVvWu2maQ5zFyxssvRcvKEy8",
  "key13": "35GvipQAXMx5AWa8BpBDj1DxRuRKLpjtrTfLi1CWQsR8LQbhkwjy9mEhS8Ro63UNHWv9h6BJNk88D5mK8Pbjceit",
  "key14": "fqSbTfU4dpMiHBmN284RppqASoAQzDEnHZUwB9taGx2gaV7ur6wFNo8UnpEDnVo4QsHKc7WaHYPPfwyYBLAejYL",
  "key15": "62ogDsi2CtWGYWDxndTMQJ1tTwjijRFxqygZbyjVkhkLdHfVZfS81G1it5Umz8AYdxPgL7oBML9UkJfs4ffZ4TtW",
  "key16": "r3hPiEbB1fVUS7jav6uRZBxVWsZv4guQ2iQ6jUo3GDWUMhbFkwrpXyurDsTBMawtK8jDPARfcY2Fshs1b8ppUov",
  "key17": "26ZhdicxxASzyziyji9N3tsJHG2LT7iuxsyT7PvQLQY9J8bQq6A351uvSDQoyAZyRazEeJyhzqKbfPNfGiM5ytxU",
  "key18": "37D6ijosVzPs3AxhUW2BdhgJAfWUmZ3rgA5cScE6YTsp8VAxAaENXzZUuULuojoyFMXZnb4uoAU9FMAe6dxrGPrx",
  "key19": "R6etiKQL9xEraUGdLZgCq4aarnBHCdVRGkXE3SXps4aYA5yvTM5225ymsd98wtDUiMydb9d4hbRy4sQstZq9yon",
  "key20": "Q7fCMbrK6zN5fKBeyG2XkDpuuKboDV5Xd22efZ2EfSJyH6jgZDkNFV4aSqqupF15KGMS1jjcK7gxq9cX6Fsuwj8",
  "key21": "39FbKQNELVVChfwUrqHpvXChzsefpvPvaapr99R6V6joJgtxoYhQWhnCkYk6rejSMLZ7ZSGX6Z8XQQjg37hz1jTs",
  "key22": "2T3oGKjE2Lc1pyAADHGhJkuoZsy9VmiFbjUL7BKp439Dg7gNh9FrKbXhGd6MXbJ2TM4uXoJsiUmeiegyriCyyyUq",
  "key23": "oNCH5ubEURLDk7oUwroNTVZfrAt1yHruZzSGDGU9iNbkVNVGa7QUf4BJiQ5SCXreTVwkupaAN1zYtGRtfJW98MV",
  "key24": "3w2zMC4oTe14mCbKq4XZ6MvnfBX85fX1xvp5fYr8TpbbUKVqgH3HEfXZpRuLkamsKsVMnzLY6iGvDzVP5yyT7uvD",
  "key25": "4zfUfnEHNfMucjKJGbxZ62jgNTWMHZmgZ27pzT4FUKoTQSvkXgqn2afrrqFaqZ8dDQCjCUnxorJf8vKdLrpNmRtm",
  "key26": "4xMBfFpVGWjevcv1oQBLp79eogYkkeXSn7NYzk6mLPX6y2TW8PwhamND8k4NePM4uSugekcWsjJdp2r9HTbgYN2V",
  "key27": "3d2FLbodq6sF5Wuat1nzc4hfkaKLuxgjoCvjWj6UnMts7trbaYyP1P7MgqmWAa4bee3sHeM44sxpdoCay66qv5YL",
  "key28": "4mwWS5vNxGCjLw3XcKaRGFuocDYEakrprRsScKnmWMBT7sMXt4mmsghkaPmgyKUw7AHc7ypNZB68keKci4FdfbWZ",
  "key29": "5nqRm42DHgrbfZBGDXNxenKSyoGsYBoiZHVEgZCcZZEssbs12J7wHTKfauuVgmH9VoxXUJX1vJFTXSwNCKAAWaCq",
  "key30": "2VeZN74accaFSxD644iSwS1iChnkWd87iqWvtT74B2EzkS45JS9rvymG2MBQywMEoy2j2GDtGUUyq3vR4fyZNfEQ",
  "key31": "4Nz5SbR3SrNCDzM7ZrYJRGzJRCX8TM5gDY41CXX4pxwrpJ9Cw5M9Z4LVHEfDsJNwFh84zMdPnk1d4nXo7gRoB1Ho",
  "key32": "ndnD8EbHXRVzHq2qbCNaQg5QUNAyNHBAyoiD5ndZzYKq75hCbRhQesbwNHuL8TkwZZ8jEKNge1rRsVA1A8Uwyjq",
  "key33": "3JLSRtUNsUXNkohiRPvnVjHqco4CzKNKLVTG8zi74yyYaseaTFXvUTCXHzwZGZhBjtHDbFXVM7H4o45DbgCMCHo8",
  "key34": "1XfFT3KntfX4JKfFm1cETn68A92QSxnEiYmBUFu9Uje2CJbYaLBchowiqQ4cbM5Z3kNvwmMcLSNDDkk5HpkoLAN",
  "key35": "4f7s3yf8uVHFkTVLZ2aTuze3knZH1XTnh7f37HKKq4yXpCj7vFpw5kevaT1iYH8cAGFMLJbGcZXoDobRiGMcr24c",
  "key36": "63ooyxWYn1BeLPu2Yid9R8mRMKJmY6dZQYSoCNGBPQ8KiFmpMJaqvHVHHZuL2gpVEwABFmpavuqNemLADbd279E7",
  "key37": "5RVh9Z49HjKCzfMqjaq6Vafz88WL6YK9tFZGeNpuieDtB395JZDbbHqVjxxUiUBZk5Li2XJw1o5sjSKmtjL84kKx",
  "key38": "54SMARjevG5WZAAhw9nxWNC4hF67t9sxXjumuZ1RgF2tEFVTGcGHhKrJYX7m5fZpoQUB211eQFdCV5XtmjuT8FsA",
  "key39": "3AYHtH5cW7MvZnyMXqF5jxLSRy81vsXbCYpsoV6VwcDM1qkaVqL8myUB3X3bXGHQdrGdFUN6J7tkYrES5q9pjRS3",
  "key40": "4UC4tjnNVxAq3SgYYMmn8dQpKp9fsMQQXfwTNBquBhkFVXz7XoL9roYVavadrXNFfoQGhUaGvDZVJu8ZnHCGveqK",
  "key41": "3wHGU7CLYDkUJGxVs3CZZUkoapm8Eqis2HWfUXaeGGDaxLHBSWnpiqtp4DBmMpesFN9DHpvo9dP5biYHBg4m62i6",
  "key42": "4yAkUizRirqSaTZWW9dHCESKDj9eavCDYtowxfZSg1xSmw84L52cEtx2JfcMoeAitj8PcbH23oBZwtiU7SXPKFsW",
  "key43": "5MFnLXZ43watiYkE97AyWQmkW3Qh1AQBFQ1jF3t6qESwY87uHXpW3VTZahCytdBy3fBPav7pWLVanLhWoDKvKjgA",
  "key44": "5LcQcRK79mubYU1fNLeUh9UfeKXacW7iEnxv7yZXxquTJNtnBttoN1a8SXRjjynkfxonXC6if36snpN5Zu1ALnck",
  "key45": "4T81GsovXruG8Dn8tdpBxQPYJ98DgfGDLs437p8nQTZbnZG7GhgaHNS6yXZa4Mk3nfbucH4eYcj7h1HDus9zJBNe",
  "key46": "3By5eyoiMi8ek1rF8chPruXoCRkNHfP6xqgJqE3QZPRwgxj2vgcMGMmNVTrDnroRrVpnLa5PdwYeEmsmm9332pPn"
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
