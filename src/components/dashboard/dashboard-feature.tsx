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
    "3CcyQoT4tAV3btTtY1ca69s16Shdy7ybiLaYJZmfGHr2rhnU1HJufJu9k85PrRvpmFSp69YFK51vA3RZnx6eBmZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TP3vEf8rngVxWJ78VVmoHYTZEpPDHVRkbj3Xs8aXSRKDXNumMCeWgLKw4PSPSXio5ueZzFHtsiYGjsjNVRaP9xz",
  "key1": "3qAEhzBGmDxKCYuu2PPSNRgfzeCAKrNYqJ2hDoR7Po11LyAffb1dVq3vhha6CQbhGhnjtUNvCmchT8AD7CHpoydd",
  "key2": "2gJyKVqRFug5owrZiiPyu5uMUD4YN7D1JNJxxNNK8Bu5eXqufJgTLVyshE1Xu5zgukJcUecFQJm1NV9foUZwKGo5",
  "key3": "3AHR4dUhGBWjjgJZuj2Wr1sUnWQFU8hxURJUJpK7DRqgdKvoeDjDpSZUKd6ADZG1BJnx5aLijKMfCxbf76rtKQSB",
  "key4": "26bZP7h8Bgp65yaCCShgntaJ779LZmzHr3uZ5AHnherBDzAQU7wMZgcBNUMvV68xVUtRPfB7bFNW6oze6rqhUbnT",
  "key5": "TSyVs6mojNRpVt9rAquuxgPt86aPtcmM4L5suKbJrL5QNQPimCWuCRjq7Eq2PzpNMWNA7MzroYoiLmqixWpSEBe",
  "key6": "5xNAwemrYUh4simG85JvrnkV1DFEcuyXqtyfx5pNZzHacPHJCQFPbBpe6n3ukjLzqiYYR17RzGt9GAfPZZA5YkVE",
  "key7": "5tNajPc9DKv2SjcCbeh7b71yAdp1ZTdvnZdScFoghXNZjShmQV5zDwJgotHbnxBLXtomyrCkwCUez7sxFkLo8pTC",
  "key8": "4R8myvzZPQorG37HCe9DMACLLwDE2vFw1z617m215dPWseKMbHLGBSqNFqZwq6v2zG3g2jUyepKqfuizrYJppqMC",
  "key9": "47aN3AcGGNoPMamWQBbAqSesP2e7tZ5TqSxYuciY6JxDWwqasm4E75CLgXsLtAv4PZJowvmagZ9udEPc5wPsDQhu",
  "key10": "3Q4i3LHBZCJpovgy5V61ESXjGY9rDjMnTvJUBy2sZnLTsE7QZhMogvj1aoXN9qpKXMkXmNw1m3wHxDRdD46gkve8",
  "key11": "5URDMqSxg826758KtDWBcAEQEzUGL9aHQFUmcUMv7zxkALELyeKJdcXwEzy5SdoJzu3T2jpNtfCHeyhhAzxxZgAq",
  "key12": "5rFdtFVxAxCDTgQgivJdZaWN7k37eoEPVGrCadb5VBB4MgFhuWK6U4477FL5CBTfooCppcyEq2H6jHGbGNEveF9R",
  "key13": "gs7XKEvVZ4h5Jz7XPk8rhmJZGNq1tL5EzTiHRr8nVCWeSrLsAfRpPqKMQkFAdwGuhoc7UFTZUjXwxCJhKXAMp2L",
  "key14": "5CbDHgQ89p2gDprdoXk6gqGN6ou5XBUbAp8nFsV5neiE7oZfs1U9nJWuSyuUbDJDpCuHZ5JYbeDuSRXsqTmyZAsR",
  "key15": "356hdNmro5BBNdxDeFCnMryB7t5kQxbkPkZ5WKMP5XZHKKAuvcUh9qgDDCdsDcLkJMGmVmvd62r22Qfnf2VVJ62u",
  "key16": "4TnE6qvxNYhywiiCiXUqPQLArdVFuTXFVeTBdtuFBdVYdFG3jbjQqZHg1eQvkpNpdSQbBSEjdmWKwr6Rjo4wgyGZ",
  "key17": "3kjix7hyZofBqnmNZZrU4cg2WKW5Lb2BEFbsVuHCPDDRCmpNry4QHRAMstGEFf5BK4UK1KQBpVWE1zLWj6n5FqYN",
  "key18": "2XGYhUgQxw8ZBEYi8CJrsYxUUvNLDLgx8d5hL7BoUzoj4ztg2hUaMjYzc5VHnMKmFEfCD6RuMUZTdUKEK4MX68Zg",
  "key19": "31JwY2LYNhECFj71AaTSXyxK3F6Q43498i3fKiuQHVVeJqNKisjymGWkzbEFmYbdJSiHC6bmiJuPbxBJSWCUpxyv",
  "key20": "4zyn1CsBKqFNCiopyyVfpZXyuXW2oiKhbLfgUmunfCdAnPFJWkkfRkQVi43L19c6ZoioZA9o6fvQZFq9zrxzEEVS",
  "key21": "446MEmaqn1pMRbMPg3KNgvw3DGshHQXk8bVmAuKRKSaEf8Rx9c9g4Wdxx77vMyQeKbVGQ2iLCaHpjg8LSWN6gnt6",
  "key22": "3H3RXygMzELx1fXNoeedDqwY12KZeoQH7u1w69kLyGoy2Uh5xYPQSmXV3etygi5N5CWx3ZznGTDfSqceNXd8EZjY",
  "key23": "35yBX1dqpPCT9vq4r6T67r5vDLdzZgwUPGCxYaMzGD7tDSRif1Pr5Kh98aGrG6LCNyY7A7atUipsztiEHKASzGJs",
  "key24": "3ZVAaze7fzxyi78Fe22LTPHuR66xzbe53vhHcjtKkwYJRr7ntVkihLi8fYSLTBN9iWfkr2oXpVQBdarQVvbVom6T",
  "key25": "UYJYC1GvSreXaKpAzAiM4zSBJL9mPtagTxdjb4iAWF318A8weAeUCu2tuRRfVxpoCQvac8dT1Gof3LZXeeecMNi",
  "key26": "41pY4FszgJMdCvEA5b3CqbWTNj9MSRCMCsYw3ADgGfogTVcRM1nj48P9gCh5E74PAiqBVk8x2yj5EqsuSnycYgbz",
  "key27": "26Fk9xkxxieG1bQPkhV73oeuLRm9ShQVujFfC7YXTXhbgqayZLAFdzrsLsqJggsfmwY2d9WcrvnNxWoQHDsmdXA4",
  "key28": "4DmJdgink8FosmbhsUMDzY9i5LE9DyJc4akmMDTjsMTJvVfDqLugkfnp7WTKG8EBmJnULCHExGaNQ2Jgp4RCW2wz",
  "key29": "2tF8uBb2cDoKnie1rBGG29coqZc4hYhikggzAvGyoLSC5KuTf4jKfgYBBaWcHfKb8aN3cbCwPYV3UNQf3xA25cVo",
  "key30": "2vsN4Kh8K1oDUEvG16oqma9Umb1C7V75mQH7JeRugDgxB7a2Sxku4zCkExXR5qo2iStM4Fa3uqLayjCMeqBooUhc",
  "key31": "3Avi2xRQJeF3Ti8maiDNU136nAuQi9UsQUchMvtzJaEWZ1aBdJBDpEnJAMjFzNeXTYHmteANnQLJvfDhHU2okQV4",
  "key32": "AbLyanF5akEmL5dccDEyV4WBF84fmgj7ndLuJpidST4pgtk4qBN5K5WRFjKt5J8ug1ipJnT1Aqg8jd9s8SGaMrE",
  "key33": "4UWfUujFcS4rj4DmQfbdwmaznG47Y3cDqyEKs5r87ZBX2HNM52pKCJP7to4q8EPsMVaHBUmPugUP6UqTwi8ixYDC",
  "key34": "2MCk744JVizXPbgnjaCo99FFzFSDMP6awqaFQ8y4Wnc76s3HAHgP9UUeUDdqq2oKwRiD4NGW6iuAs1xSNvpmpw1o",
  "key35": "vENkSGjiaweMMUjKAmZsPvuRk63UWez98SKAsU5gxx6fcE2qwdNeWnKTBU3qu7ggr7zGtCwXwj9s2fVotHbMNce",
  "key36": "4FZGFHnshsApDvA892BRBxBM76jx4dEs4McMM3mB4t8g46hLtad8TvRp7incocGSJVwbmb159nCuGocPv4G6qBr7",
  "key37": "2AXdaDgKarenrJEH72ht11nRT1gBTCyuGm9QQeu7kZCzEv1XKiG3ai7unCEvqzDr2BFBHrGF2LNXWGq7AVKULz7x"
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
