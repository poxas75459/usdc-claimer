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
    "36cVJG6ERMVBiEfH9mvGZfp9A3irnAdVYc8LYFvgcTfHKkWUEVpAPipKPH7MDmiriEq7heRUNH3AknFaR33DyiD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u7TQCW21rPYY5gF1ixjEBEKrATF6HjjYRhfxr73LzH6svdGQWwBbW3wLDdPYsHWmcMGoPwKN6cRqdvjQb7cF21W",
  "key1": "4AzwKshe6uDg4vNZtnabU5NfoKjp8G5CdMqHq61S5xmbgCBFuXPmadXBfzcx9vkQQEQAuqdvCzXXFNZA7tHtLmKR",
  "key2": "5FEHhbUh7CjxQKwohooyHLwSRVGZiTUBDmz47t51BYAt4c5Xg2okV69CZnkVYSmWexLcmDD4krUdGG1nG8MNZ65k",
  "key3": "4hvB4uniaEZnJXRiWZ4QFb36UfLqQDQ5xFi8QQchpowJtxFaEtyvWWfkkRekTJYcdezh8EXsroFzjYEXzW5Drqj7",
  "key4": "2K6XdrWkpNZJJKRmbcYTCPm8qM7HDdQ5NvBXVL2yHeGXqnn95FKHxEoT4AEcXbq2ok5M9f2EtysGE1fvCRTPMNCV",
  "key5": "5GyDrPR9GBXDMU4wGZTfKTpR6aYEV1DaA9fczoNKWPDPX8FFWZvw8gNmeGhay26gW3TR144wkWrJXqPU7uwkRH2B",
  "key6": "5Dt6h3bG7DDkSBzDcrFt1BzERD34isbcoK8A3Tm6MnmHiR8ghgcS8sjZM93JC8K94fL4Ms2cyJ9TXgLm1u3DWzSh",
  "key7": "2UctNBjwLc3ZF84uDDQcmz6atA6qgBWBsp7uBSexcHEQKmFKzTdC1bJuNcsKzTocXmeidBes5gpuLAadYKR3GjZQ",
  "key8": "2sY9U2kPb157jDfUksENQo5Kdyq6Nm7ADbw97tX7A6A1NAjFYJmydKx3YH53KxNGKDUZHksEAjvFBRubnuHEy2Gb",
  "key9": "Cm77gqnCoYvgeYq1Hs4Tp2rxKLs54kxG9bHYon6f4qKrkR7qEMhYEgkEb1yM9rsuhsxwpgYk4GUD4hxpNgxWsV2",
  "key10": "3UBESi2EDQNmHmt6dC7B1obCpEok2WaoGei6XE8QMJB66mJt87LtYDEh72BSXkrLL5TpzZwQ8geAgewaSr22b4Ln",
  "key11": "1M3icC9vdHMYwYbCXnzBCEVmcz8ouS91e5gv852sT3549RQnRMEQG4verFnFSvTUYdieQV1uQMCBu5vNXEEyA2p",
  "key12": "32FzmtSLQD5Vc5iQY4YNyssD6wajdzWj4RKtPFb4yGQW1FActzWm6vLd98aq5sQUEpGN9eS1ee1Et2zFw8B9niyB",
  "key13": "4v2Lnh1wxyE17Jnm52jL6xJeKoNfRTVbSDMvAmZCFf7wvEGxiMWZWbtHRKz916oYU9ubf1eCdQP4TrpWRp74EKw1",
  "key14": "2HRmoL1nhrmYX2nqowzQrLE9iAio5SeMS3GbPk8pVVN7mfiprTBNfLX9bhMKEXoy32oibZxo29mZhSr9Fqa2WRye",
  "key15": "JzmHPnAx6qofpDr8BZkRYa6NnJJY9P5VuJf2ZccoNGdzXi2GMmtSx2GWdi3RvaBMgFA8kadwWL7BhRUchQKF5gz",
  "key16": "15M6vLgxWFk28LZdgKzHFYfYNoVLFFQzLSMHHbTSDHK7cN3AFKDHP8CgfiBzSia8EM2h4BYfMrzGekQcPCch1LU",
  "key17": "4Yi9ZzNGxpvFLK45Nz9cjd14wPPuk3z7Dx8ZbAuEaW6GWPVojQTB4HMQDCvL2s3ZkfiXrpqbGCeatbMFX3U4KfRM",
  "key18": "5PnCPKGUqBKgxNVfnyVUHeFrMuJfBmCF1cUuCYD9pBuurL14vZxqzAW2onvpeTZ7NwxTTve2pveZGhJYqMhAE7Wb",
  "key19": "V7iV8G3yhbchJAEknnXhA5r9QWvPZYTcNWcHE2wVVk4nMpn7MEVaTDb42kAgmx7QCzyywgy8uySJTd9XUYyrZ5U",
  "key20": "3giNM7LPYoLVhefmgwcDxFng3tUumu9d8g6DnL2tgQWhkmAwJgq7CZpjeVH6R8cFUT6YDSGwzodb9f5cZfvYjtuz",
  "key21": "42jemZ7mqSxYyPHtyJzyisnSBKa2a1NA2KBkyuxM62wFhgkjEvXRUwhCTGKLAMTbCpTzqGA8Axtpn5Hercfpzktu",
  "key22": "jsGni1B9rzz5ykP7efvNRrkjokrfNpMzJEMWXnShdXif3cT9aQekXnFB1h3fcG9RwDg8PnEzzxpm7BB1ty3aCWN",
  "key23": "4aJ5FwgvUj9U7nhTvG5n5Yj3qKxaxVHxZiof2CqTY289nfzSXnkpd1QJE1BRYDLEaDBihUXpAJLnWuE1Lo3kXpXq",
  "key24": "C2yTC4Dbdfn8kfGRkDmqC7wJWb9pyKpe2L3KsJVj7ATAoQhpgRLW7LvjfaSYCxQfdSn9jpvLNvqn1YgirHWKV4y",
  "key25": "2ePNMs5SRrB6TfcqUv9PuzF5s1B3m5bc2hHMPorzehRAWhHa6Aed5TTt5i7DY7t7krFEa959yB6C8eQXtMkJxFiG",
  "key26": "Dkm4TFRnN4hLoDsscMk6o9ZannQhTM9TXz54dMU6xwphZQSp5pfGj3HV6iumx9qCawLEbnb6GADJAWpLDWM6pwL",
  "key27": "5sYxuZtG9ZHkViVxDUt51aZYLFDYcUQhQV79ggSHCKatdDw9ewNi8AamiJtEGihduCCiYFsaDRz7CPVbTVXNXWh",
  "key28": "85wwPmYpMeX7ndG62FY5AyqDiP22DsC2vw8RZZUgg35KL4wseuP3B95Qk497sqwKdnNkJwQrG3Q6xGg5yQEJhUM",
  "key29": "mzbBFByqxmKv9mUcWUY48sm7xCodPHsqGKi65adXCSc1ghzL4uahsr3sf54Gu1K9V3ptFuLVfRdi7Rod6ECv4wh",
  "key30": "3F7tYKiBzY9ZJK5koMnYcTzSiRfwPHNa4JeVniUJ6ViSmDXonV22TtrZUzboup1QVsDdx76WFTgtccHvH2WrHdHh",
  "key31": "2SzjUz8Bmckkt3G13xAsQmnADL4KVWN7AEAYxwRP6PvL5Djdf8jwvyibUJe8KrSDbvu3ERXWvTXKMwVseQDi4MHv",
  "key32": "3qVxGCxUojkZoEEqvPh5yPKisBpKRBjz6dkcoCC5tyexDEJcQeCsmSBdqVFUDJd8zyYWYaDkQF4fR7RP7Zw4wJNR",
  "key33": "27brmoKWwx9fgUjBT4jTxrgvNGKFPVuFoXLpb3ts6d1pZCTmtMLUTYvdy7gQ1YZa9W5ZF4UzZ8uHtHTCLgErthTM",
  "key34": "4WjtauyPWVn8MvuvjFQgvixkzXhoeeMh7vcmpmev7dXW9xMnqJbBCEjthQ6KrTytfsLmjFf17NEFHi92WmmzGwXr",
  "key35": "4zuByGCBkMthbfG59rWtsfwKHRDTaiV2BipLXcxwJaXckoBJZ1GgGnUhKPd5sFx8A3Wqf3JVuiY17Spn65uCFPUy",
  "key36": "49dmoougMMpxtjnTc8UJBvq4jzwHZd89SquBrDPJHDdvbzAaXtB2ScRr4YmG2XczeUwywVRv4Stk9NSSVC7zTPTC",
  "key37": "2MfqbKuRpgaSS93dSZPmyBA6JvLbyaWYtBUBBPcd4YvnL82i4uEgBg4ZdB6KtdAQsUd43JMY164Ho9LCz7baDv66",
  "key38": "4RP8c8znA6icYZaKyAtWUJaZ95n3q6i3yoe1CwPs48R6WruMYY2vEgSVA4Uanu8DBdC6L7vf4dqBPRYEJuQMZZM9",
  "key39": "44yDymWRb3M8ofeuWoAnkf1MWN58aAGEdspTSazk7k9iyn5MCZ6a4Z1tKMToKWRpm6N3zt7PxeFxApCp36wEb9pY",
  "key40": "5EjRcBugWtqCk6nVtchqoBt9JXiLoNwjM65XmkxMjCyATcdtpjJh4sad5CnMqw7EUDRX4YXJ6AV6xF4EQTVMvfxM",
  "key41": "2Czv9HTSxJPQpxSoL37eo4GdQhMb5HR4PPdZ4YNzUoYhaASVTy9KbdJcXbtE2UMgXwAncRSRyRoTeTRdJA4cW6AU",
  "key42": "2vNhrDv5KVKycTEpMMjtCGeatNKVL5xfRQbLms1s63JpmL9uUmk1LzNxTSK4mUY29pRk2kHpBjFAV76zpvsSWX6y",
  "key43": "62c1LaBKjspJtjRTu69WUzXwBDLkfgtF6M9p6iyAsiFt4X2tF2XwAHP5bPC2Y7jnCmx39GwvU1LRSPUnJapSJPYX"
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
