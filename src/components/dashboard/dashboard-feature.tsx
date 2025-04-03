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
    "5BM7iFwHxdWHpVptkNeZ6G9hNoNfhjrbC2widXRX4qCVM3Ds4sC2Tezbbky2U43WMPAnpuMr3Hemfnoei4eqNfVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f96umwFP9iGdXXWTPvCMBByVAVdPUXqUiePgFg5jMRtXqKXEFpF2WjFQTqYZABHsyN8Xc9oBaxvoVJJjvekM7CN",
  "key1": "5vJYUFy7ukXgcwEXPKeKgpMjLqBHhS2wGieGFMQcbCNbGLDRDrB6wVWGyVjt2mNfZTSwM6Zxnw6gQB857XiXtedS",
  "key2": "4RGFwAJnHusd3Yx1yxL2uJxZoxMAP6eoNPN2ughGZhEFt62yapRPCsj1MmzaxksdV9hg7hSyURPUDNUKsooHEpv",
  "key3": "R1Y1gx2ub5VCUXv6tp3XsVbq9jm2iJ8dVkZbSgHrZSZFTunov38zKdFHcVaMj1TVro1TeEZ3iePBcfsicTwuPAf",
  "key4": "3xZpbucE62zNNrSYkFKyfhQ9ZpJrGA1NYZf5aegXBYSLeQJknGfitRidQ24op5FQkucbTwBkGwqjRqadd9MfvWpC",
  "key5": "4FjaGfvaUSngYTkA7kzuE28QN6KBn12SGjNgMy3jCpmJyKe7QeVtvLaizAirUyRTV5MBk8Ta5R37dDQsYxm57T3o",
  "key6": "2uKJRaNUZxA2muqz2cRnh6X1NudqoPbqJwTH5R2RSY7JgrHQpqt3oxKZca3GgYWsiNvoihiCryHNTJAvxD5Hh1r",
  "key7": "2GJ1mgpY2U1uQweksAX3ZQX9S5DB976VYBJALUeviSP1g8r7SAhFhvFWg7YtFNR9wXsPXzJdefxt5R3XDDXC5T2R",
  "key8": "3toHm2d3y3pbCj9VLVKS5HAoKamxLn3UrPSmaxgon66Z2ryjn465jnewGMRumcL6SuHL5kMKFgTL7gbP5vovaFeR",
  "key9": "2aaqtBCJh6meo7iScAQrt2VBHKx1hrKC9N1jULuWzPUByt2SKjvJZCtmgza9FYbHYztZUm6boJeF8NDbanFee7ND",
  "key10": "313sZvf8oh84GFPTSApN5rGMNT4BvdkiPqQ4g2FqH6cjXk69PAdVAp3FP4mzahXzB5VrPyWmqbNztJGKvFRgAyku",
  "key11": "2B7DoH59U8Gu983xJ3qK1b64iV2cpaTpEdkR2PqgKtK2ktmu3iubRfuAk7KhDVwjdfdTL1Mc1h3C4vMoyAzkr8K3",
  "key12": "4bQVcZBNWzvgLGYF5qifpWNxm9g3PaZcm1skkJ4iJv2rbXAoBzgGofLAVutBXE9U2afF6iEd7KBwKiQi8BiVQ25R",
  "key13": "4kcdRnXKc2sWW43gRVfxV3vNJEoi6aCxRE8TtDZZSsjUtUoWFHZ4TVyZyFNfKNwsvRKbXyBtPvSDorhcgtxejyXs",
  "key14": "5frmtDdN1UZidUxGjoKmy7XjzA5c6T6CDGjoCZTBVVHoGn8mqBq2xB1TksaUnoNhYgF4CZgd52eGysq1HMHXYKcY",
  "key15": "3tXtCML1FCjD2yEGbJNVjPbRp7oRREEmo6x6KzUEhXanyVMyRqGmJFGtojFvyhX9CZ7Eb5H2SyRfHd9mXmpb6xi4",
  "key16": "5DCKC6Vi8qWJt9jU8UZJA8biUTTxopyqPAmy8HexKruReJc1nPTzBQchXwypbf1USxEGYCKYmirv9Sp4ZS1LgDm1",
  "key17": "3JVGTULyh6eGSdt2gmW5G7DS5S1syn4YDqKxKKirBosdzee9LsxRvJjFaeAMkAigD6W9gPmo8E7TKawB8bMnNE4e",
  "key18": "2sLxXDWdwjF2Xxk6JuFVj8cz5RUyLJv5g7bHDUTLGUnCVDWnvB7vBBp4P1K83LiHF6WTfsdoksnvA8a8eMTHvS4x",
  "key19": "5gyfHdvqRYiKdxfzqFY9BgjpSFHoa9GmskUzopyZhRLSP9LtyaKGKFjD2vgRFY7QsseY7DLxWysrQhvQw1QTkdZL",
  "key20": "4GgHdsD8BbdP7sm4gubUR1TfXyHsSCyCESDYpSb6mYTVJchxPYYN4GCc3jmCDGn5vUqVNFnhrddpPAKX6idem8ac",
  "key21": "crUQpYGhHKHivgT8ZRXAHmWnv6rqwRD7ezudUbqLmShE2VYwTaryrP2NRWSETzPUsA9gqsiRFCaXdnvh4max4Q9",
  "key22": "4b1ymxKLu2RewFD4X1h1qtnWzSJWzz3Dorokzz5iVNZkW8Y6tnnoeaNTaA3SsDQvcNi1HyfP28rDJxR7fTvXWQRi",
  "key23": "3SNZ7nM2ocHHKNgE5HMcnaAftXoKB2tJwauuF8xcgH7FeFpYeL9P4AWb1oFLd68o5oFP6jPz4z2uRVDee8inNpnc",
  "key24": "33CRDzqXHq7NSxGjCTKGbWNhckPNh4ZEVmjUxL1cfNSL6uYLQwKVgGebN9mx73cuxDa3fuRMHhyWQL6E5ESLxsCU",
  "key25": "tE8HSLTDUPpMNYW4gnzQMhA4YkHiVo3yXHyA91FVKgRbRMEFRAPYpYJkRCKiGsYHBACqpa5E24sYftNUkxc35VS",
  "key26": "2sWnBsv3bbuvvd37RLhxZU7bL64hUxrpAeUDnQcBUKUzVkmiMcDdW7UtNWtYQeTz9bEbS7UQioocMhQDKkuff3vZ",
  "key27": "aeZpMX6R2X7V53UXQppYSwyBiy6vEhRQvcmrSL4k6kvXUvwZwvgAEpg26thWYxBFSeVuXRJBVwwU7GzSopiSLWu",
  "key28": "3Z8E62MDSBP8oRzkwDf2gdpTts6fSJchsRE6g4uzG6Qt5ntphZLLo3xEV6pgxFsuMhz4WkaNs6iVbCfVRM9AJDTE",
  "key29": "3i9Qq3wGiveoQCk6t91cvsnQg97TfU8Tvm7WSNrnKQLCVwZFfjfCXqUXDvzSZfbtSCHpYZvniDFKYULBbKpgxVc8"
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
