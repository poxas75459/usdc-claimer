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
    "3C6ab1rUwGJPJfzknXkPjvtC9SyRRT6bCfdtQJdjWFLThU5HgGpySUAgtKD6XR4KHZYFC4fcwo74EPgK5PbUVPdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kmfGrXscFyRZiBNZba1x7pNFrHPnMdVaZLeEiJJdX62kjbrruC39Ei3pC6mScP317EXdi781UaYoWJoNuaDLYKY",
  "key1": "5nm13RH2mGhLBchvxNocDQ9hef6X797zGgAc3Xd7ggHaYKGNDJLWwrKFrRPTKt5X59Uf47SdyqS9EteNvmqMJHrU",
  "key2": "66NvokvgEbNpP9BffAiQ1dzi8AS3r4zUtzAD83ZCxipcRtwB8iaLDL3Awnm5FsAD4zHthcArM7wQhxnVEny31cU",
  "key3": "22cfbPHvqHQMQ4NpgitRddkighqSUZYX1EqyywTLtbPjfcnAPdvhYxzupXRn2NVkSdPYPaKsQg4Da4ajA96v1kKJ",
  "key4": "2t142jJ16MmLniU1CoSHCBndQBUD625WLE44WaGkq9r1P1s36jdNTjiaqhY1ZojpA5F7KXWBTfhZ3JQxmnveR9nw",
  "key5": "2W4YF4EAvz5HnHafrdcf5TyjVZjvqeKpNCRhZvYjqZJx6xjcS8wDk7dzu3TiCUyV91qe1AsWvNeYud9WhQUtoHzq",
  "key6": "5h7pcGwbVZCwHQzQXr9Fazykq7S7S775DjVeHKN3eMAbMkG6ycKj6S6yK3PappQewQeGat2ud3N3wSabXXeYyTnm",
  "key7": "4hd7NM3hPF9sgdjSyoi3eebBP2i1DBS2jGP4WcTvc55rTWs9tYpj7wDCXm3LyjeMt7t4P6A5fRm2wTNjy9zuqZEk",
  "key8": "4E5e4hvv7cqsvQoHy2pc5cXhKPR39326B7snJHzXLbVrABVzSKSMzJX3hVUnBMDzxAXA7NMGeXbZ8b5aSCjxtvbB",
  "key9": "3VTTqqM9JxkycKFwUpyMXcWkjsrYWerw1Cbmxxy3QWcwSAuR4py9qTgc1QYLLHXBreUMZTMHpE5AT9GPz3q9U2gk",
  "key10": "4xPKR5Zx4C1VDzX7oxudn5FzpdHJV27bzBxYnCwFuJi4mmJEfHigianf4ty9mrqvXw6rMVTmj6XYFxHktELo1Dig",
  "key11": "4EnW5qSUEJGYXP2iQaKqwbQtHC3nXHcGYoFTC2e4ZMJa7thGA5RwHza3rTJf35S6d9tZhfD1Ykgmz6tfpkST6Xpg",
  "key12": "2CNda4T5EL2cuDsiJZzJwsktCiyAFgCZatvDgJA2YSXYHjd8sU1vcYHG2uzdcXNpTiKSFWWcEiNH7FggXSks4rMU",
  "key13": "4eshgecnfnCKCe7VMQBz2eqThPg4LUQWXoFxHpFuUu9RymwjinJKSMYmp7gPnWNF6Smv83CQiHigHakMrkgrCC76",
  "key14": "5PN3Ms99wz9E86SwsCf6xJdaw9AgwbV4ru367gaXBk2wA3bbUzY3suDY8kHWHTsrf6MU2BaTm9uCuyhgzrNumy19",
  "key15": "33uQ1Ws5GoYucsz7hHkbb8S13ZwNvciuW7Frr62gNgx3fxfaRpXBRyhp6oLrDejCV5BuVX43XfwweGdkqKqL7pYU",
  "key16": "4UYeLTigpqGAwYyjTyKDPzLTWCAeTANFujxdNf4ZPvQQgxDt4H5gWg3teeeMMRgsahHnZutBYKw2pWkEF62Eaq3u",
  "key17": "tRFmUaJ1RVxX8FAsn4u7KRw2usNQt2yZrZPEm5CXTT625g4SsmkAnaSZqdKc6esmUFyVzKcpoenyNytzuYPs7cg",
  "key18": "2zQB1L9h3zbvAEos5rbv154oWWi7S6CnVpX3mX21dJTUvZZvrPjxtgvJnNkF8mTd3NC3rQPGvKVzYsvZE1tuqtuP",
  "key19": "4TcBh9ub8ZgRJZDyjmVC3QBB2ugUD1eG3f7mQP8eMTzxZoT7i7naNUNr3E4AHKBCqRgdC1E2RfaRCn2AmkriqzJw",
  "key20": "3pVY97UhX8z1KpZ8WFVdbLUjuDFU8TAePNdE6KtjPAmgmn2FBKQi5p3HuKzqdLJ58UPSLg4srWgAiJS8sDtXBD8n",
  "key21": "2WFP6nJQqQ9YU8jozYZLQWZYoG2LDkQPm1Ne4oBLKFychGsNWr3NsXT4LWqiSMSR7nSfPZjDbGGYeQbCjfRaf8Mk",
  "key22": "5cw3Y1jqPrYiv5K1FJez8W6H6PnN9qkbe6Kng7QQ3yj4ZGSDvSyvgpNSWagexp8xXgyARTjMVkw1nhECmgnyLLuM",
  "key23": "5ppbrWj6YGSxAqAMvZ2VRjQWvzQKdJ7gSQ4oxMRFY191jSTR7M5yftw6mTfLn97m5gdWJBtzXJUR9TA5CNkH92gz",
  "key24": "56sAg27p5DWSp6TqTh921Rgmme8yPVBSBgECWTLV6ZxbWWAtGZPNvwtNsqp32fPhMHorRm2xFSTzpcVJNhc7ie2D",
  "key25": "4JUHTef1wu8v3RcsRB8ZGvzYAMPpZL2mxD5Y214yAMydTgNWjCtFSNwRBTBRQ45YESwaQNCHJ4rVKjDdGbiGX1gW",
  "key26": "4s1wXhwKWMH7GkFUz8Ma1v8PT7foWjRpv2Yg6kFrYLxegnRHB5qC98TjP6joHeiY6YNZP5HfrzMtWdHCozQaADDG",
  "key27": "3cKX4N4dyDWXx3BnzLLXWzj5R2iS3SZ8FRcswb7aiLmmgeyjB4GacsWTTxpUWqzmPuxHVRrZr4rhGpi14xT51K3m",
  "key28": "4KERkgGyv3vuqGmgmjrAED1iRJtLk3XDEw4JJM9FtcX1LDL9nX9Hx1w9TZCfzLQNXjaRxvZtHQfAPuVheiP5xZrz"
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
