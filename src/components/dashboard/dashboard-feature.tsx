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
    "53etb4evngq3k5CAXJqxekHK6g1oce1n7hArswfvzPsDPfmRVAAW8XT6U15XtH4VE96ZzC7PwTUvTVkgp7r2dbX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hGmDjQfKLoJ2uxoCQSJfPib6C9WeizzFXC3HbsBpNmip3pwC7YkvX7Ro3XeyLwiG6peoPssEzVUmFHV8Chs4VAE",
  "key1": "XuPECDgNFHAUVheZuRWiqQadiHC4xejSDztRRPjABoGcL89fci4H4ppHLPNvXM3iDVjrJ1R5Tyb6RUeHvZ8TEin",
  "key2": "4MQhko7PZb8sYiGRbWSznindfSa8hfWAk38p2zr2gBy8LTwZFv7N4AHenB1fGPwuoZgY1QA3d5K68zVKwj1kSj6S",
  "key3": "3EZ6vkLetkJzfjTsozwdyfsGGLyfk3Wo5tKSSNLH2ZTD66LW333N9sPFqy9fv2JGBravPMwSqHHiqdSse1yjERdE",
  "key4": "5aixvsGAchxTkFz4hii9ypJ84f7ifH8EowZ3GwKMXC42YD8w3bQNZVbCKmyAfBwGPyLvE1QARSMZugaqgje98yPE",
  "key5": "4s74sbfJCByjNDnAseuPyR73DMvkZzEp1RQ8DcrMQT3wZiJaA5PyxdJknPQSjEgQkDo3izLbJyrh2LuANhCRN8sH",
  "key6": "2HfbkDM1m8Tg4paSLJRgXYTXc2AfR6osrJ53exup9MWgbYjp6wVCGHhBXbMbd8aUkf2nWAt5mrsDTB7d7fQ9qX9U",
  "key7": "2Wjgkxs4zb7MuxR2Vaf1xquJoS8jRKLJXjR3DYBPTwLYSghrL5np1JcJrPH7VU2BQDWM65SVVoEBAmNHsBYutg5R",
  "key8": "415KuKhxnSNsBDX6K77zWuiQEE1WXV28Dg2CfrDKCYfHXwQAvB4erncTcA47N4E8HPanZPuyk1xf2YbeYaRhMyeU",
  "key9": "2UFy512pewsWJ7cDYW9ar3PxYv9TyHtJgHxU5VmL2MLTQVwiZ35g57fXSUJQXGdojS2a52qLni66dAiy7uWHCu81",
  "key10": "5AMWKqtjGsPLYr1xnCk1AUGKaZijyFeJMrVKnG6fM34RpFfNnVUmKrPf2nrmJR8Rsd5YPkEtQvj2BRgebsrgKZLp",
  "key11": "TbqJ46cq8rUH1kuriFpbHMeTD93Ht3i5ZA8uYucfq1DNJ6QXCqwQw1DgWBtYztr7NK3dy7cZfUfYTn2Qjxdjj4T",
  "key12": "4z1bLr4uXoJXdfiMLzBLXUGg6Gw51owmTEcGjAnXnBZtmc8CaKNL6bzunDW6LRUt8m4EEaRjEq9Up8fD734okLGg",
  "key13": "4fA3SMC3KDsqFgm1gGQQwNfboUvV9Q69RBjUz2Rq2rHAfCKbA66eg86dx1wLb4dScFcAfUy1Edwu6ANgX8uP6mYY",
  "key14": "3DcM4FAZoeWT6VQ5SvxBcSmCsCXCvd2opcRQtstoMRFPRJ3quhCPVKZtcrjPsXKdfoYCLWKY9BrYuLieGw4TCuRi",
  "key15": "3k3vxZ8tQfhwrRQPvJ9NYXJcpzgzLhvSmzpTBZbf4DP12SGeTYZjxCKPeG7suu7voCHQEAR8QzXsuxhYDbLyoswK",
  "key16": "2axTTXKresThmc5iWSmb4MhH4tvUSpoTwdRfvV7rxZbspPFUjUgfW6nYPqqA3AmLRbGdu2e7Kgr8zYvbxndxamsW",
  "key17": "5L8WJUqBsj2B1EW62rLQWaD4wVG6V723t6XtL4Np4AJoYRYUCaeG4QwLwZjXa9UfrYrjKKpfRKviDRqjKusxsxe4",
  "key18": "31Yre32pG5tvkXyyEH3w586b1Z9NDS2amLs52cgJ4KhbAu9VybQZfKjFDbMewPKABuXZc56EYJWUSThh9zmpi4Bh",
  "key19": "PJzYVxpaP2TMd5AFuvsNNPoJzdeK7YcpW8TBHQ6Hym1u1Ycm7AzJb7v58NDS5JbSzCZWqk1rtprdjB4Ubv5JM2M",
  "key20": "CXEQKzfZQJ2cV62dWttBTJxqoECeNUz8BbLNAZHhRnMcBjs8LKCxr7onyXmdwnw6DTgLYSn13Ngy5GqgCkvq8mm",
  "key21": "5qynYmFQcdcmWFyvLR2bskp1qbnU8gLQrM2uSEmFqm6brWAcLpq7en41vBKLdtqShdiCWVoLgAajeWRrMXpbEvnL",
  "key22": "4SDd1eVWyQvX8a1X4VCT3mivg5STDazK8QkGqVWrEQsTCSCzSMYfbrmAqwSSybvJoD4w3Vn7Cvb4KihJa4cMpLTp",
  "key23": "4jatTHJ5hut9ofYwGN1q9WeFVLpaL2PvDE7Lwhh6Tetzda8sVSAA3rBmvEUrJ9NFUYSCUyXgrtLHYTajn2AKVGaR",
  "key24": "2uSatq6QhGSTcxjM6p8B8DMV7YPmFt7Go3vSBWzDMTt3ggm5v6qfT88jp6qmuKfy9ZvteQhcW5EoszLwNYX4RCyo",
  "key25": "26wahxPHqxdUSQMYzz31ssVRQg2f1UVdFQKdefz2j5AwzkbjYbhn4ZtEANnnzV6DkQNFakMnUVcBpysZEtEdEEYt",
  "key26": "3aTU4zyGxJbuRvS97oFQPbX2FGNiG1rRJesrgeNTzHiqBm1CvZ23Y4URQTxnYZxcYNFU8aDzRUidxQN2E4RJy45c",
  "key27": "5t1yxh9BDdhEgkhWC9gac66Jk6frUWz924oyQVgsUzBgRCgK5XGGq86PAck6oTJCFJ2q2fybXLMh4gTVvQHDqrvx",
  "key28": "4uqyEBQYDkNLabSNtwjwiVnSf8LjX6FotNAt4uCX3W7MTBAHecAGHJeRhwALqcM819eCkjf84aHdy4xBVWKqMhvZ"
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
