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
    "4MeVKMBoSaZJ7rPziTEs2vaDPAqGLw3TrTtme1i45tckSEawuprKZWtsbdEu5CQZ4EvGZmycVrKiEL6JHTK6Y5DS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z74MpZxS78J3JUyjHeJzJoVqDYqpHRACVZSUHqWUoo4v732MVMkA86JQ4brcft6KKT6MF55GkRqY4W21oiKtMEc",
  "key1": "2h2WCBEh6RVdrWPsXSvWAxDRBADN1UTHEU6mbdPqAffXCrZhGCbg78rtxDisMJpMumKNxXCyiu1CDKoJKSRm9BAE",
  "key2": "2nzrtrsBxgi7uSemBVjn2NGHcFVvhVYMeXCraQtGeWpWrENQSDKRSE1tcr6QNDf3AtfVgkUcmKJ9DXHYd2FvR5eC",
  "key3": "Uo9N9djWUXtG8Gh4dYP8CakNpeq5XL5Gxugik6CPou1bbZipQfFo6fqdnN43eZnJ9HpbeX3gXVvm4Ba34CoAvzU",
  "key4": "ZkK1fp4ZANENvu6VdBH2HfwpMTTNVs6L3d2nBWUTLVFHDDdkv1cJpKwYgbZ6fUoxp7dBT99AnquSuor2XTLJg7C",
  "key5": "fSk6K3Q7rN6CTFYzgAjXv3QCD3XJu8SacadB9Zo9Dsmz9hqNUq2Q1bsuM591yNMjNQyTW9i91iH7717nK9c16Z5",
  "key6": "3q3RzdVkAGsyfTQvsrMuzs9GsLpwifVkRc2YCLjXRQ2S6gjQ3ckp3FhTVgVqwrFSTYqiZPA3wXEpBuNFf2TbBtGc",
  "key7": "2PMxnNECHk79pGNX6wHvWyg5NyQEygv5AcKvYQ5ybGKgTZNSqB6zHY1DDGMSP7NcZa4xuUDQU2YQ9fy1vP58vRXy",
  "key8": "2yGxbrBu2FtiouPZNH2zTUkopLfUGA9s1TkRMdLB1epwusnZnvkjFEnrMxjdTyDTnRWjbYobCiRqV5tToyTQKeU1",
  "key9": "yxsdpnBgpv5GUF3AMXU1emdXG4rFY9GG7S2GCVR5Dg8AQHWD4XBHQQmUxNgLeAf8Cc8gbiHHBkVFWPfdcXWnYpK",
  "key10": "2odVG7MWDGqH5zZbAn5smzj7upY6rYUQWwv86LbNtCwpPWLoUqWAcDJzL53wsYdievKQkgfKgPKCcBUYKMn8xiBG",
  "key11": "3j8L13CA5g88ShZH5U8gYJb8NqJfhM4ifHXCGXwx4RGQ9tgdgS2UosvYKci1ZnyTixFjd2vBmZABHNTqoCjgQ4oU",
  "key12": "5VRv7XZCCae2hMKGECWCHeAQbtcbFmcG5RusGsA75Nst9iFeHsMBnfa8sGsoe3uHHmW9TCdA6jn8NbEe4nVVPVfY",
  "key13": "3oaxe87gNCU7C1iZ4iBr5TE7wgmfNDfiBbNjivx3Si9QhrKEmBbpXrDkFncSLqPwJeC2S3axktwmCY696xLnVfNQ",
  "key14": "2metM5bNCLjh6guZtbWsWZRAa2gP1Zq1k6oYdy6hxEJQ6ZbqU54L6hhXk6Vg4MaD7C16vuiVcQhspEGWGBRKdY4G",
  "key15": "5qJMUKwSSiVVLYSdccK3NKtBCfqQGnR95xjR1ny7MJwS5pkVk2bjV2kYghVXEazSGbmyNdvfPZEPCQRTzP9Rioyn",
  "key16": "5fWDP5RThyAtSHmCrwewytWr2NLwKJZtzpBx3Z6r1hWJej1sBSfQ8438Zoj1PzkkyprDQe6YgZzMmK81atNg9oTo",
  "key17": "5wZntqPMV3uyAh4Q8QoycrGouWdo49dj7wRtq7asJ4knHXqCYsqjpXx9NHHEkHKVCbVpdYxJMmRsHe1tLD7xoCCQ",
  "key18": "iSM3vtVhjS6MCApTihHo1GiutHgHSudCvHtUbUDoKenoLHs7UGGFViNsYV1xW1UqHWbsG2yqy8jmUeKjrPK2mXM",
  "key19": "uMqxDzz1g3cK4fvqH1Kcw9sDf7VFXpwMpXJLyvEKuWVS7xqkr9aCygXnfQBTLqgjtZ6ArDiQNSchbKZ788L5hR5",
  "key20": "5fje97MA9LLt1wdobZKDvVq4stwVcdLSmQka6jZB7Keu8xRk7XrxsGFa2dgLLztCxkCKkurPcnRG4uPf55111YjE",
  "key21": "2MrwHV7oejQiUXM8E528GhEASYsb5oJLsvqmepGrk6ujNnBLCK8MzdDumf4zh7r556uVcFzS4a2njJLXyQt9AhRu",
  "key22": "5djnsXA1dxuVjikZMYZV6zsGxc3MhkoLu1pJEvaVyqKfQtQkQtnGcPAZJNBjrfx6CnyoqxD3mLphjRVQG5Nf8RY7",
  "key23": "5j8pL56VwSVoxFnStiy1HwrAkHiuyqTtVs7StcXo9dsTN2VRABky6kiV8zdSuDoo7YQyLnXjZZsH8axMsmhJpN5n",
  "key24": "3t3DFoJu3Jdw1PAAPtpoaGuqXf47wMp2W8Q98d1Y2Qggt8sjJbT1eg7MQsGST8pPYGBPmTJ8eGPjyzBXT2F9DYT1",
  "key25": "WZ4pJ2CJ9ThD6e1ZSXjEets4kgkUjWmEJhsDur7KCLxhfbUequxsCPDsYYp1EYBUxdRctDKKVMk4jrxBYfnNoE8",
  "key26": "5iSni7bQ8P28F2TN5QtVahR3m5FLeZ1Yg4GMF8uKNpgtsB8ASTpUMdnNtGo1SFskZb8omN8yZtzGbDPYmJGNt1gJ",
  "key27": "4EGjGc2aPKqxjx1XSYyDk14aqKTZd7Svs9649a9VhSnknkgkxSSTCeGvjJLSkMAy7yzGLoGaKdPwe8yi3absJ9yi",
  "key28": "5Hz3MrsCmcHHZh2ET9NVLMwqvowrf9s8rtzKmVsKiVUUYH1SouVY6XGGDZEEvnWUqJBu4SQVBkgQ9EScWJcePq4d",
  "key29": "2LLKkKBjZmSjsWoFoHxJUUYg2KJrhZ31brpMhVmvkLnRvmtmoAh8kMs6NFiPNG2k9wqhQEe9btcXXS3dNrwiPTmn",
  "key30": "3WYzG2UTxXcEoT37sQgLQxvwofbvaT1j9dGmo8XkuudHXAmBFGro3TUJFw2kcgDsDak5LjsTKKEo8eSqir4o9HGi",
  "key31": "5PB9PPjyGjfBEz9eRswCqXbxDFEzL1v24YNno5HnUPgzgk54bY7YZpnm17WEEUaNR6qb5E1v358Cw2jcY4wudNC3",
  "key32": "33o9vpnLCTM1MM3c92FyxN3hUYMMp2HNmHtGayfqB6SbiVEPxeUk2T6h2ThfEf43ofCCwSsFKwupvXg9MX6GGUxv",
  "key33": "5P2Bkse7kHCyc7kzqK9zLEpj7iaPAbqTLuwP8QeojeNYjYCUC2xPszSqWpjx37rK7vRjY4hRoBUi9breMAedhb13",
  "key34": "4fppXTPZ62Y66GkMAGV4APMYg4kP49AEYYWZfgfSYT6HmC1X18Yh5JD42MvoJ41sqtfFf3vamY9uCz8qedrQzB2Q",
  "key35": "qj8ExH6Qt8kC2FtnMrBw7f6Lp22mjQULBkFpXFTeGBDzCcvuh1Ao492vLejBayvjKoTvrmo1EJWhVNJxwW2AGiR",
  "key36": "4vEKugNne1FS3E7ejanUbJfudjbQfckSAV2UZH7EcHM6tRjGm4RjEqv2bcpGtEFtPR1QsoLMbt5cdyy2csWNjSf8",
  "key37": "2q8mT37kPWdYhyxYEFYVVpv4DX6Euv8Fp5MzeKUaD2FXfUsE6CYrzdp2g6ozWfnJpXXgN3qcqxwrpxmKtAwwvqcY",
  "key38": "38K41E9ra4GwR5jTbCBU1tQWzMuUfxKyUk9P1Tvy3dFEMKr4yEk5WUeNihtNXmccChUj1SQjEUDubKTm4bLX15dm",
  "key39": "2yTfFNpCEf6vcMgt5n2z68nvXo8nwPHyJhyj33P9kg5trQM71PwWqrsMgzvQvMnszJ94FEhswHU4Q8UokxZnvf7b",
  "key40": "4nHYchLizXry9XPS7oGzJTQaER5TCHENBkzsoPgg64FNUBTy8Nw3bB19iW2WZYGGojJWJzRkYF167EJkjkAe79at",
  "key41": "hvTjqoVg6XXbURTi4E6LYZGakFeqNpCJT45M4pGuWBERhqNEK8t8eXpvQqtPGXjHfymQ6vpqgjBBFMc1ZGxJmpH"
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
