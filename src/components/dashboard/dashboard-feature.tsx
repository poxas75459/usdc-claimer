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
    "4Nf3yqBiYEnygdtKRegEFXYnxEKqNvX6VZB5cvenBTzzAS5UwEye5kyeFWP4a5cBaZTWHo3BzcGuHeJx1hMav9j7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U6iLZ5GzaArmMnxgN3RqiCRuoWvXj2X9viQ9HqKFQEXYvncQDKVu4zWCEg96W2gFAPAfrj2esS9gTSEjvz7ky5Q",
  "key1": "s5AKge2aTQfGcD4ffx6Z8VZXMBTi6NpLssGu2r5WsVvg7ktB9v9sYzDb7i6JbdXVhFw9L35h9vUbAuVUQJJVCQ9",
  "key2": "rycsXEgvKwZ77aKZ6yFbt4QpW6PANP9mGS65LrkzuecxeBxFmQ8rs42v4DTGcfSKXqck6C9Mpwchrnr74XJZ58o",
  "key3": "3LsH4mte2x6Hao9JfoQvnfDjqRkNmHRmtsSniPC75Dwii5r5WjAJWSXR61CkeUadt9gAaZDNNjesXnY7j1iXjqzL",
  "key4": "hHnXxskQoxWTVGJEXqrTd2fkQ4yCX8oEfRjypzeS81fdtGCjJQJacxfe7bPhTH7zBnb9dhN9QMRGGiQbyN8TBDq",
  "key5": "5h59HZUyKAX31TxeVe33Vd9xMnUW9R45d37wjgNSEoXSF5tvW5avy1ozZqgGzexNQRuaiFBWqnX8ZTtyvC19pv5e",
  "key6": "53ypQwYm6gZFdScfRMzwZaTrV6XJHLqsTBZNpoX1wvSSHGFdAMTZaEtBhpKq9p7mFgRVRKyguVbAPvRtjZs3CfDV",
  "key7": "M1zddMVrrrLJrT4ztFUE151GWoYdqxpsCZzeGhyhfLiitUUZBe6MCZt5ZGQVAPV1VBF5LkBfTyoVoqA2HyTMzpi",
  "key8": "5knb8w89qZC2xATZDNUaJvdL4Zh1YgZ842E4gvgJFAqFzZYxEsQBephRarMXXGBDbPfKuaAHdrBe3uA6tXKjn5bn",
  "key9": "34Jx3r4dkMdcH9VpfZAT7jkEriV3UPbsWwV8LxeNMWhyVHQbF2E9JGAYyr1MyZN72eWwT7QfD3JsudxeVKpGHtQS",
  "key10": "5HNreUvf4JQHLtMRGnJ3m9QATqXYHpVfz7CtJJdY97CSthaTuDe7w8QfisBDjGLRYDW82kAAAM7rKv753UP6M38N",
  "key11": "3zucVhayR9fKUdFVEiYbStrdtmzxyGMtn9Y9phoRmt6tPPP876C8QR5B73qVrPLF2XJkSG6WX1YMeR9LRvqJZ6E8",
  "key12": "2akRRP4yAWN3edBQHyBFRWp6tUQvimLkBHkmaF23Y9gjKRoTVAtYuCLCxju3hepH3Wv7NyeJEoDXP4Pp8kx9g4wt",
  "key13": "7hih9apLChoYJ9QQuSn4HcVB9wwv8yBzxR74RZEkbiJhGPdGG9GXNPr1Zo4zo6q1v6XikBLSRcybWxSCVwUmEwk",
  "key14": "4fC9UR1mpt5uKhFJe3RxRLeVG4tjL6au3BCAsKCNS6FdkCRWcdGzoMCXtQj1CZqqJpSg9quuao5JXbHsPD4DFgTR",
  "key15": "4e5qRFoeLc7yQSSBAZbGmgD3ShRmYRqsiXx4AXRCs6z4b5ftJAigbPT3wx5A8nvvPgPjZiodbzzF1Uo1WdovJi3b",
  "key16": "53chsVug1igPRKp7YEow9SRRArzPY9goyZ3FDReRGmbQmRm9uKBAzwtAtDquoYLxqM9UQ9fsPDNYSsGZ9axUuMty",
  "key17": "24729QP9qAsJnd9uR6L8sVts6VPwsr9c9uP1qYUKk2HLQYp5dUju2FAc4o2DXZETZ8oAmA2vKHZxAu4J6QkELJ6x",
  "key18": "2ZaWCexpCGeE7jMo5LBKmFqbDcX9PvHz7ndXcQFYzr4H2cXZ2eNRhFUa1cCWcYahCRV42wmRMsK1FeCrwKy7ojmR",
  "key19": "2D1YTCNRcqqS3eLMTmTZ7a22YMEZy2SNR8R1ARMNSKgY9RoxtSFWg31nvTcmdEosqhLLsUi5BWXiVcc1RWhFMWGU",
  "key20": "2mA31fAENpppz1G4iT5fsoJuSEtxEQ5xzyT1y3jWZDtwjLRuYTc6F2LTwjiGFxwiGD7sWpcx3SMq8gzwMKHvyP8H",
  "key21": "38T9Zvo6mYTHgyfhJWBjMZ5M1eSXMRD59S49JzeGePjFK2rExcP9qpmTDe6C7s1FJeUuGnwNyfXQfB1XcDdTDKY4",
  "key22": "3HCdtGEs67quj5EjzimcNhLNRendoX1DHQuFcBQp9Y6nkNxDNn5DDRENDSx265WzWfu2z9iyWr7bxYnZUK5KGZpF",
  "key23": "4fQ2AKQ8hzhKVgscJCGXdpG1HcHzYxH4qy3nJ1ybhqeX2KQDZwtve6R7b3y88igCQ8SordSrDkogWHD1Ug5hpPnw",
  "key24": "G8gpmjwyzv19uxmVzbx1BUip4ZcPse4fRCDJJzkkXYkShVhh25HrYhmnECe8qjxxjZDab2AJuaahMMyzVZhYLcU",
  "key25": "2Azg9Uk7D9KZvDn7HubWmVLq5uuQft4FNMbptDYMNcDGs3xJjLnAuqDX14myWv9YQ9EcQWPFjFY3RHA8JFMhNYK5",
  "key26": "warL61oBootKTkS1UBSdst4Pc8jPCfvYvsbsDP1M8uKecg2mv5m9mt3jqxJJNGuwhvWvWG75of5MgZ4Lh87ZhiL",
  "key27": "3npYf78iWo9QMUFXKAMLbc89oiGtELdxgVWDoZgJh2ZPUFNjYjAB26ZkTaGZKZJrwVcsbxpTqpD9R8hkDn88VvES"
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
