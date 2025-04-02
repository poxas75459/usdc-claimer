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
    "4j5Vz9HYo7wL3gg66PDmabHyt6ZLL7Dg1rDjA531GiVy2J9wh7e1uBUMpdwfutQ9EKTjTLSt2YdqjRzDHEKNFu32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wAdwMbt6ncLFV9QTrPzG9my8eK7BpwkDWTB8EDk1scHZSC3ssgcZQSrQAGgwBzxUAohGbGZu5u2Zj7RRMNasia5",
  "key1": "2fWA9H92zLVv1W86GCFBBW2XhuZXPPJukvj1DrjwtZZCnMtMq6szhK8J3Cyu3C526fr96se2iJEHLNXh1tvrN9NZ",
  "key2": "3uBNf9Zb73rg4WP1EgVNKCJBCbozEPnd16Z6i1wADE12xBHcBcGcFsWqjp8EFukVWLaqmEDkvHyiEG61PbWa5TdK",
  "key3": "3Anqr4QnEVNuUzgyXxt9wtdDHsJm4gde5HUdF33aW7ErRiBr9bsKqSwAqc5FypfVjBXXbbfw6XZNSiepxjQuXizh",
  "key4": "2kDfpgV2YTbr6rL1oBfbMFonZ98jq23eA9rck4XbCKNMYY9anVHbJRWwot88EErpiA8VCrw8vCTArwtfTu4Y368w",
  "key5": "4tVQ4Ptc37dBLeTbRXrZkLG6ecDzc15f2u2vVx3VK8BYL225wZ4bDL29CoLHWUBudhCK6xSsVfiDpU1BA7kKovP4",
  "key6": "2mGWfcYjEr8Nk4bsH1y2uE6PMZLJtqrLq1ysJHZHz4ZZjcTQNix1UuEeYcsSynSadfFs3HsrNCyCk5YtU6r1otgq",
  "key7": "61WvwcZJmgUKgZziUHTC3P2W4vCtq7dzEqmAbenNNWSNEhxkA7zP2vu2hnUsrFRJQYw54P2fPhZP5ngMnix7RYGC",
  "key8": "2UsUDmu4QVhQguQzphiSD4ZFSnMsKQvuMf1ebiSiW9mq6zjDrRaowDZHQhGrqJVTpRH46wLwYzpKzMjgfiskSqSq",
  "key9": "TAyhThEqD64s8fQnEo9KyMGkmrA6Erho8xQzmvwSTHixay39Dn6RxVkmyYvpdUFCHGd3rFiYQmdZpk4feRGCDV9",
  "key10": "2aKUqrVxj7pCDcotGaMQckedJeyefuWwagFc2SmRp4u23RkbMRUjcFnELgnmKqNai1x2fQaZYRCHS85KQDx95pmz",
  "key11": "2MPdQ6NBzBRtuEVcvXxQwBKA5ra8KizsL4VWCN1VyWAQ8S9D3P1MNGPkSoCFuMuys6DqAp1SYBQDooKZeNWXo6Wa",
  "key12": "4MBRHpnciTwctnYa1JYSAqh42br5XwUTUTA7Cn72SxNyP6pwwET8T5wry2KkvuJaCkPneeEwFHGubZCkZVi7vJeQ",
  "key13": "63xyamguWrgPQkDVAWSCfLMUVyEZXfe8LGBD2svogwVoqvbaLCtjcKYSvD4Hugh5hNdkEc8RKd3HFfY58mJrKYPC",
  "key14": "4Zc394XmAnTnm1EcsGZbnXES3WtZcFqXU38ems8D7CGkHTXMFQwQnTFXawuy7tZeQQXetKmzCR3yUKkq8td6E1h9",
  "key15": "5X2pPuYp6npbXRsJYWnQQnqV2A8H1ZjMWKRJJwkQg8bSgwMY37SNKvg68zHicaG53gtHygcHeYs5RtsFw1DTVHaL",
  "key16": "4fag8NBvbJd48s1dQFQ134MSrMNJrR4tY6RNqsMKWbkT4wuz5b8ykmgjnHZr6kGxSmmPWehxGxn6MiP3GbZSj8gu",
  "key17": "2sqnDPmSxD5CzCuuJtsHHtAfzXMGySjgHkTaJhHqWAsz27GzHQdNYK4zq3vpPoKEu6bJVLndZc5JHv5Gj9fh9SnE",
  "key18": "4NTd9fkSNfufk6TTXDPPQnnNdg24yGLcdWbKhY3EFAvpBAPbsveDSZSr6pPRvgxsQsmiZpHFLJbot7iGcs5vKm7a",
  "key19": "2bXEPQqQuon9XEMemjaooYX7MFUpWC9AuXnnHXJf4UMJQHk76Sar3h1boZzW4rRyAYkiFnQ2zyr751JEcQV7mSyA",
  "key20": "2QxytSKoaq3qDiZTVmQ2kZBs1bS1FTD8DjMcPNpXSXzqVbjsF5D4MZ5X6BTpeAPCuQuwGPuBvF9fEbnHvgkd3JvW",
  "key21": "3LBAig4ektSsMppcAoGa5Dv4bA9oa3RJFwKimQsUvbh3EDx8Bxj1EUfRhYQnrjQsQpiZJkyTc6Y9pCWNpT7HSPfU",
  "key22": "4bKZRjnJrLDu4ae3EKhu1YiPNkMQrUit4h9sGrTXf1jsayFBKYc6FSfDCAHicNrf7cnrLBG2rusmHpKGDUNanEaL",
  "key23": "4RXhiZi6hQJqwgmiGsN3Gb2SaDDbpAmo8h3HHpW1P1TqV1mAptc6NH3XajBJVjU27Lwqq8misWCkfiopQgd1uT1N",
  "key24": "paZDUGN5Fwp93Ep1NVFxNAps9TZtEJbVJzLihgnUPriF21vZ4XqU5pDo244Yzbykc6sBCfwE35RJLaM4bdVLeu8",
  "key25": "22brXNmU4bPUy1kpCYGjMLRoe8GGonne5cfdwtbPD33GzM54fS6s2MiojYnyDsSVDrFcJjtxpuicR8VMmLfzPAY9",
  "key26": "4okvb19hjVGQK6rcd4m9wkyTtJEYBG8HWjVEksLPB9ZQNioxHcnncmNUbU1LZKpznYCBfGjM4xNdhNw7KC3jotDf",
  "key27": "5cQoNPn2BpqcqV7AizH8xZicxogkKN6q95PYpUhvxCKMZHtPiUNiQRhCz4fgFhAb3AtgnE8AkHqS964wkjjCnLDS",
  "key28": "4reo6uUmJA49Qb5rQLtKbF89xoFj7cVA8A2BxGJ5eqHyhntGBfLppx5tQ7ZxhASwQKWanfZ2eETyZ9sVSm77nvuJ",
  "key29": "2N5pJqNs8MgrGEQ14TJyaK8KagtZbM2v8DLK8hud8SuSqoH1eP2waydBbkyBjCBmLtrYf3bPTyA8HSyVze78xpm4"
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
