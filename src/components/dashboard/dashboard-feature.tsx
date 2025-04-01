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
    "27ytY8hZVqVFverh26exqJ7R1nCa1V6JTdMZD6z1s4ZDRpZHHG36MnvbUJkkbLzGrLCAyf6jZhab8WVBoK15na6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "552ReBDC6qkQpF9zmghVjgL8iZkix8SjsModcDxMTGPq6TwehgmvXMjnrmZY9aezNNtosma5RuEExGFeTXMZDzBp",
  "key1": "86ntniTFm5JGBjrK75aLQRdGXKpBeavPK8gvxJNUbBNsMMTcGxMQYqPkEqtHtNAwDZ3LKwe44rW66vgjGVNV6dk",
  "key2": "2VpbpRkkWtz9dY19aro92gNQeVmoknmesJM77dcc28gMMReUB6y3Fxjn5EzH5ujDRHFW5VfnSzqUWKksYC5SEwXy",
  "key3": "6GCdGqJXnqkn2xea7wpbFyxB2XGK6mQ1J3jsKFKsuVdK5e74vVnfJUMKdafeQzCa3ag2ea98R7h73RRfZLwEByn",
  "key4": "3rz3hBynmELty57hPMi32JoYfsbUsiLZ6ihn9wicyZi8ZRYWze9KsFLHFpU435PjygX9UTMRS982BoxjgGH5x67C",
  "key5": "4jzUJRm4Dgys7azpokwUamdvsQUZTqEuch1XJd8shAfSSxjYDZVXFEt9CQ3c7mg1NKpnDRc2uRgMPZ6pCaNXR3vj",
  "key6": "Fmx6LiTJo5o1TMHcY8XJE2u5HJPv9nkshKw9e1ayDL458pw3HbDC9habyA9hhuwaFHaJXsgmHerSo43e65GPcVf",
  "key7": "4ZCk92aXMjCiLweUJgEoPiUCoUKTxk8Apd3bAK2RdzduWdVmzBDckKefbPVuzM1HE8FNiQuQWRbtgXMgQ6u6NWHJ",
  "key8": "4G4cfRWaAMC5Ho9dfLX731MMtBQdnQU9yx6N3v4oj5N7wcUrEB1SUksXWtw2WzWuz6XAxewg9eU4UNMg8x7drq69",
  "key9": "5fHbDwryerLnd3Yd4Hvt5p9agkVZWc8nPtKTkmJNqcPsqc9KJHqYrDq8Z84K9otccFRZzf6JZAb9p1c4HXnhE7ar",
  "key10": "4PoMfdAAoTGfvD5kRWnx2kZn8dPooicYHPUP53ifiq6DU26uZiKh6mcjqPgR5TaSUBMehNqETRB6NwsAHiBC4PSY",
  "key11": "4wacnx3hoed3yw6WnqqTqTKNfHUCvHBcD4MJ2wWZWMQuCfeAZR5HkLTt8aTxi1RmQAQ5aYDUZMzghKr4pjUY4oSa",
  "key12": "5xmriwH7JB4ysBuo9vvorMkgHUTDe88MNNQeCTVRrJSKM1XkiY97vbKpkvsbVgvkMbrfWBduZ3eZPXhjEmEmti3E",
  "key13": "5bnvbMvTGbY5JDvU4WY7yH1dhsRhFCN87LB2SCpDMj9xXxXzZGMC2cgdTrTa4nvEV5ge7qsF4BXJwSLEgZ8SbCbq",
  "key14": "KUDbBYcUvjUCCJvtuLfUvjkWAgLTydBNFBTLSRT1FQpcibLL2ijLR26dQCFtLZpnh3PYqszbGM3Ydu5BsJQaKPM",
  "key15": "3tyhiztgu3AoA4nfiE5LWdyTHBjD8riZvdpbrcF9eXzCuoiPwuMNofLrpR9FQdUsbaeiurHcY9KA8Yd8YSXgsL6x",
  "key16": "35mXjZcGWGiAkcAVHsBdNuaG6zE6rE7zbEDK8U1ryHaFujuoiR7dzJc35BMuiFLb1iJEPA1BAPY9MaJxM54Eon89",
  "key17": "AbRiWZEAb76hMT8azdcWuVV6KUv9g29AfJQYrT7rkZ7oPSm1myhWDfR7iinAKYmcEymvAawxngcQukbnuCEo6xU",
  "key18": "2g8VQ2iWbtiFAnHjsy9QQsKhpepepWefd4AA3Za2F1esunHCYkNGe4bUGumdREPMHhYnBiPa9bB9ZULqcwJAnt9S",
  "key19": "5U5n9QDrsr4PXapsiLdDpzAhbDdQNkC1PWByyyJsnRSPjxHj7ztZueQs8EfrAL8XfMiMEMWqmaBW86WAaPm7ZErt",
  "key20": "5U7vMHG9MGDNx4pgdaBJVeDdtZTwuD31azL1orSSuYZXt4tabKLJS8QKkgYZftjBefJwnwuUKc5TAAgqjxaXKVKn",
  "key21": "5AXCekfsfPsQtQcrRDR1kt4XvKRG3vniAjXprSKheR5kwydE8J5G3AZqKL5NPPmPhqJHWsrwDVGoCjuxHNCq6ZTc",
  "key22": "5An1oietoGNvU9otH5zRjEJAeNzoaEU838HBJ7jULtRDbnfTdF5yXFE44E2d3zkFavRYJYKUsrwaY2kJVYuBrjbT",
  "key23": "4HQr66ExDz5q3fULK2kJKhbeiz6pnuQduYTgzqFqZb6vZVsSPRP6WQbHxMTwGm1BZvoSRcucHqYTDxx4S29nFXHT",
  "key24": "5z6z2K5xxFaQGwVqNdgogKv66fEexG6U45L2LcBDvctfVDSLfVQtsBLZZb17eJBfz82ryz7krY557ipEe6zhrCmc",
  "key25": "5dghAeHAeygMmdyswF24rttpadhmUNysXsdTiA48ipaHebvnVyHDnpNn4HaAwsRYRuuc4fje54PGY4T7qBmAQKyT"
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
