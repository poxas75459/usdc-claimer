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
    "X3JGF1VfRSGUDyZHzQnbnpnQADpULMxwRXsZThATUy1Spz2T2ZNJuEfXprxL4AKLoRsd6iyuGQLKaMKERUe8z4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iBowzwQynrZFcMRmR2MgFYXbqTbskd3S32hgWqRKHHEDfruWzRkremsr8qp86QbkpKNsaNvkw9xsh5YrFsrvkUB",
  "key1": "3KSt5DzehXCnJAR6nyjEdR61k1SQEuCnZyvqdJNDNmvY3Q8BjU8TB42bTURWMWusuhKU1dLYC5zkhHgaehgqeL2S",
  "key2": "2M4zdj82aqQZztaYDpAcfRrrgQ5gSwapkY8GaVL7niAzKosxEWyNJkW4ErxFFL5cC1NdGfidK5ztK4x62wjzBD2B",
  "key3": "2S5iH82pgqMBjVgi21qgg2tXMkVkDfbVXMe7RhDZsQ5uLVJuuhTJCuVGJ8zrQ64an1LRgkECBVmNaqeCJZgkqmTp",
  "key4": "3GFxjb5GZZEJABN1L5dueqh7ywJ5qMsaS7cPBkHapXHwRU1oFXmBbdXd8PnSvPkoRVs3KrC1J4KdXbcrTKj9Lyho",
  "key5": "3JApbcfG1xKvJQcbR78MVgqm8BtuPMEWvDkrZTeUQBsVzdY64wwyayWRX6FmYDroFwtKp56VLAWs3RWa5qNTELUc",
  "key6": "iV51QV9wttFrer8gompz5JjzLaVGRZqcS8wC5wwgUJEXJLWDqgi5n2yD2iBKqwehNun3P9agBcruyru9WfVEzd4",
  "key7": "44XTM8BvEzeAMvBRpYNdRodNpSLs9PibALF2hTL7FNe6KwDYSM3nt8uGqZRP57DWWrQBzCjErLFKvkumtkkwFsbP",
  "key8": "1QJvKuKgwFQxwBAmDRS6PH5b1wzbny5GkiBMTTFQXZL96TEgrAhqrySKcABg1geCKqW2KfatCmitGBads4g9mCb",
  "key9": "5FpyWDVMma4bKNXdmjqbRzqQeJ1mxoXzxthZJ8hFLcexrBSjzwSDc7SbSUA7YtRQZdTx4Qg5Qz5MXptGUMHwjQgj",
  "key10": "5Xsj6JMuAPhHDyJmDFicgybCr1TWvqSEDLY3aTmNQMtk5eNEMB48uWcJrxoSAUHZAzWcWX88fZ8WRZpkcR79LTas",
  "key11": "5WBHP24HJBdsSbyqGbakNSCRNktufgJ5SfoyEgGhaDK17tAazH4xhgAicXjqpyxQiDk6na1nZPd5ByX4YRLvSVP1",
  "key12": "5DEy1Ut3YX5gS9wuN56yGvywPCNqNHz2YHnYyfCxrgLsChcbHvzrr6RXNygV9oSX6CXxPWjv7AgjEDC5dRde2ZL3",
  "key13": "3MYTwdaU6CVUc3v7qVMCsCZQ6RLmm7v7MpKSHqfiPeUqbhjk11sg89xGdwuef37W4kXDUWuPw5x26U16qk2VZEjE",
  "key14": "3BgVyWv8MV7wpd5ou6Auj4wPkkSrqvrmB6MjrGjhqUrg3ZvR3gtPoV47cL8NtXf8c3KcEeDQa24UQqajkgFpaRHE",
  "key15": "5g2TJ2zZnV8Bg5QZwjLxHq5wk6nYPUrjdeHLxpiN4dcnodrhjzPY32KkzuZRwVaPE2MgVRUaw13QVKZXGUnWEGyZ",
  "key16": "2hjijBJZdND4tXYpqKzprq66Ayhx6ZWWFvKCMapfpF2hMwoG55HcLnntB4aHTY7QpinENDCVrxhNKESveBAuc5yw",
  "key17": "ceRH2rZPqNJNwfbZNg2zYiK29rXx5xDsgm45MSqPDPzeSEtPDfhX4JGFgFDKdT4GLAiVz7Vg67aj95xqii4RKEF",
  "key18": "3UtWVywaJ3dvmF2yzqWspCBZ4UJqFyGtLBSHehxAPptKxpBJyphK3MEpCddrmC6hVQkMttLRo2pyh8EJVufxeYtM",
  "key19": "4rCDY14oBD6xsf3FKi4r6L7wWpmYx16Hhc1hviCv9XGgWchUMV2UsqysA6cBoz92WzrNZPnXvPc4NSrYQUMA4PWm",
  "key20": "4AHHoFjr4MjmYEX3kuwp59atV5ucMcij1DoC5W3ALH3qUJVkcBx2q85rpFrD87KrMkyvft2sXpfVSVD1SaNTHfTb",
  "key21": "4CXCMiLRJxtMTbjxXwSP2AzWU4K2cv7Q6xHevEUiykiNAzrdB3okSGL6ChYJCysr4uEex2XrbPGYkmFerUq5akKY",
  "key22": "4uthoxKxibFgoqNBysRp4CmPwuTBWYhZYtfpcXcAdcvbSzYjPG2oXzdP5GmGE4v7bUQ7aJRz1ATWX2JWDLUmhcxq",
  "key23": "3H3o4gXhytPSnHzZxy2Bnug4Ae7CLCknyurBUk5okjQWuvn4v3tRYU2M1PkRUFy9jGMcmrT4aU7xvzHnPAoB5sWz",
  "key24": "u8zHSwu5w9ZKJaTuVKkTNHGD12ohf6xZdv7Paz8SvNsbH6P2dNzvVGUYTpozSbzEjaaxS7vrQUGLZaSHFBHnxtx",
  "key25": "4XxhK8A98Kxcp8eWRNjFeF923GxtCxJL5wr8DrZ9TYFnFzZ67PmfVkXWZ18j5iP4URbY4FndjuEboXzxGkSGZYqK",
  "key26": "26gUnH6jfakG6pmD6MGEGZNfoNc7ADYv2dNcYfQkLtcGTyVi28RuasMceCoakzmGyvxdTVQo1DXy8C4HpKQvydLT",
  "key27": "N2LUxfc7t6LUKn9AjiuCSbmJgVUpLhX6tFbhbPvFdxn5udJLunJgj51iZSPq77es4qME9LL9gRaFt4tZJ23oh5p",
  "key28": "zECbEVSvHSBfvuH1KbeGaFCcGyCK7ib4wxvkhfPFwEF2donfbDgrN6KWxyj3tDeK2G5QYCgLzsyqMHbbDujP44T",
  "key29": "4BguYmSpQXVWGivBEq6Rqaq23nNCQAsEikyZhHffW23UUzucppxb76TH2F87pNcjqeBiY2F6kkvcYdyNhJcvsfd3",
  "key30": "42ezfPQkeesCL1APbH21RR3vp2LnQNo8PWU4oN95yNmz8Dv3hAECMTvWtew5jWm1M7347BZGpCcL2nFyovSjBrFa",
  "key31": "2Qmt9yP5ANFivUiKhroNnuYR2eRoJx9WfxY4jMzbekdMn1MoNyLyiiDx3xdgzHPPzEymz1K6KWHni3mYQwTG9pLC",
  "key32": "5Lwmgs17vZdFeGDzui6WzmhxyLFHgaBb4RNiS2oigV435H4bPr9NdGQs8h1688eLhMshBGhRp4pFo93fBJ391qBm",
  "key33": "5UHm6Dh19Ecw68dcL8CporpZZLYDpoxm7rPXbb7PpgBKykTYLt7gjbkh2HjUrczDevXxFfZUKbJfWmPPtiiaPhSz",
  "key34": "3yBhtWSbnP6cQT91mJqvFv5m396uV7VaJmgzrHwHtZSoFryKs1ZSMyAKAzh5kMQtM7pszbXxK6bWaTyfGCnAUhKm",
  "key35": "3RHzyoTVhzZKomhKnkrKnQKBZLQ4MKshBWpGPNx8KrLgYKDzwC1gTRTAhfVyyqAAMwBVJwYTGcEQBzVHbC3utCXq",
  "key36": "2Ueb3PHneogy48etdLyo5YZSfhL6GQA5gUngiLi9F5W32asYTTgJ2vewo1ZjHhad4AVMdKDs3WNoAfR1au3VxDqw",
  "key37": "2pT51jBJC7SvBxwDPCfbeNziynrAaXieNQADLLLwcDF6gWTTmwh8zwxS4aBjVAstgfHMEUAt6dwHuT11nWBCXzsP"
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
