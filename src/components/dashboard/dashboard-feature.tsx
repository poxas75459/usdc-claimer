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
    "3NG1sh7e4khShChRt9FHxzhxLz4GhRCpMictVnnx5J2daS74q3So2jhXQYv7mmJZcsSgJMskbrWiTFQirRD4JfTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oykrC9f8GC34mMa4ri4sGH9CfUGXNPugDKNemDHyXxJdWaS53pJxaJE845YerbNh897qVX6PSRjqoXLnCAxJbhh",
  "key1": "2AxoVVvj8Jbvi9d8BQQnt6ELMWXubmkuiQdqn1yCeKfLKM76PdzEXdPwvwH17aAodDKHtaEPMTHsj5ovDP6TFgQc",
  "key2": "27Ke8rjSnkpST8WQUFTUSBrEgWn8Jh98K6ojQYfisUSM36w6GSJXvdFMhJPfbjLL8MVyVHVGcHrxprzHu2qpNpbm",
  "key3": "4iaA93NMNmpYH3uEtwMQ8yKunJyVtKqY4QZjii1RLfHfNEh84XPuxsyxzPyrnWmyLhF3jZyXabybwMu1nnPjbK6A",
  "key4": "3ws2mVfDJsRxtqEw6TiR9aQof42gyrjkRiFkPMHZxw7ix1APAdM87aDAom3GR7CtEj2QXcRsgvi4LSPYJHk85a7m",
  "key5": "4Ya5ibkkppHQrQHua5Xbzh89r6zSAVYThR1boDpySTKe9VRuu33iAw7ygMnSm3eX6cjuKZdKKkjDX6P8Jyab6Wdd",
  "key6": "28m3rNCNkUBcBnrMTnqZWzaDncNsUNFDT2EEUiyTrK5zX7MtcJ8uRxPcg3x531vUX4hP3P6qTaA2jkHKzxNuJCuh",
  "key7": "5e1LYGvkCkyLfNhZrXwdQLG1Vd1dH7B48JkPssRV8pm1J3i4xYmLjpjppBsn7p1TxGpsjszvNSfErirARoNFfUoH",
  "key8": "2uTWMkNGYdLmUu1VC8CYw6yRcULfUfvSKED7vL9vrZifSK69L9vXsnsdjtC5hRY6MHpSf8XmWU7UB9yrna2ssr4d",
  "key9": "bcCNoVyBWrBtHfyTCmGxoEcQV9PKnGGwcaPQ1fLE3eMTVBYPrsUvyC16VtAocHGZvyvev91VfD6oQUYB86PzZti",
  "key10": "5W6L5VizfKLi1hAM1BCCdufBhZjNVVGfviYXUGWkX9yJrtMsNEJsSwDAizQNKuucJgwaCKGvkyzZQH2PxWWfuJmx",
  "key11": "666fb1e1TD9dwq2KtCwGgNy6AjBjonAdebf2tq93BdzrnuhEbDCPK5qPqi2NdvHxFm3VhtM9Xq3n8Fa5fraYJTbD",
  "key12": "5gieFSFQ99kJvaSSQVkDDN2VYLR3pqLFogbYFztCgEF54yY3WwV5T6Dm6JguEd4yvRLTjBYyLDv64UTf7NesqQwx",
  "key13": "5hFLxHuerMU7A7LCyBdYU7sJuyjNpLBEcxqCieqtYmPMPR8kJnCvxgrBR6H15DesLS1TNHUHS4DimDf1mnRExrhH",
  "key14": "2donYS7MMXyoNNqV9K378x6cCZJaLHrCNKmJaD72yisGRBa8Y3jD5KnCka3Sk8PC87pBRVcVDLdZrEUV4MkqYYTB",
  "key15": "5ABT5Szh2j93xZNKNPZUt1EaXgy1ZjL2CnX5ewek1bHSEMktHtm6PJyezkGYB6hdqeKnC8DsZD4R4tKb9DkKQ2JG",
  "key16": "eAx4Bo1uyNvka6kpZf6giEPdM8XCNChe1NqNZ1AoYggakpDfsbhryoefTTvPRfT1xjrgifeWkak7aj1LbinNwAr",
  "key17": "2r267ueEAKFiQtY99Liq2HgmYSqiR8DMPomLGxBzSijUG4S6enYeMX4jNUr1Tu1Bqm1FC3SP9iPzxLRgVTB38Hm2",
  "key18": "2imijb3q9LDZwPAGRuDfYdqupqc515Zy2JguYefwBLjB3sPTpfW4n42VrSnxv5aBgZphG4LkQnTLBgBkENpK1Ve6",
  "key19": "65PrNEj74ycHMJpsSWiVoWFVqGMQsJCxb9nm2WtTHYGe9oGX3H5uJd9wzUvtv6Lcggrfk2UaYUf6utNwcJsa3NrZ",
  "key20": "5zAAiJn5WZVGUf9AifArhYJNcWFR1SB5SrKFeButrSXJipjm2SJoun3L7wCq2goPiwmbbqqPEJkDky7rZtx3eHww",
  "key21": "1Q66NsogKyLk6mNHk4Fcc6zHmDZ4drrzYbWFT1yvbYEt8J2LLsvbwFDwi6nfQZTnCYAguGeHcgqjnZKiNVVm8rc",
  "key22": "58FSHvqPeXYyUhKVJLjPiEs5pcLHnX92Tc2bwHgcXd5nG1pTB6SJG2NaHG26Xuxzc9ggxqnXfRvuJH8a9tbCUcjK",
  "key23": "2p7jzHg6Zm2YCYDubndpxiCmb4zH3SqovuWS1q8Nr3c1KTP2h4CZVsX91w7ZtBa2g1Kg1vtVdvTEAiefJ9PFKAi8",
  "key24": "5nJjPNEbe4b5qfeY2EW8Y4rgGeydfQs7FevpGs8neZ9424k3VL2ifDK9wr5WsQGr2ztHJxVraC2x8FCXvF9e1GtW",
  "key25": "2WPmzXih1dcktjiA3buH4afCUBCkWvy6M5ttubKv5nViGaDWGQMxhKLyyNCsCUQajR9HQjaYbsex8b5YHH7UWjsX",
  "key26": "61PfMTunmGXYN12HBahgPWJFM4GDkNWYDN2fQfXNTXfvRRHz8LfKJjFgJjydrHZPHpMWpJchiwvhLXpgUbep5uWX",
  "key27": "5Y9GN9BEjA15Yb59KvX8zbtATEeaoz93CmL85YK69YzAGdazqFMXC2CAL34bTDxoaWeernzhZtEC4Hx7KULXehyC",
  "key28": "5AuGqx3h7jBYgDbHrsoSSEXLJVBHWtP5FHW9jinTrk34jaExfPkvdLNrXhzx6qH9VWMrT2sCE9urUAzYj8x1cDqf"
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
