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
    "51upmHx7qyisaFDremetuMcLf3mfM9XFA76LMziNAN1gHp8mGDhPde8d7NyN3yn77AMTL61vxtGwNHpCXegS6iFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JGPe8RrCCkKB3vn72cBLzwvpXX4sfWtgqbN7FwPBiZigDaibtPJrWztDR5ndTwJuB4rod9kqHxLDH76J5cW9bL4",
  "key1": "59YDAM8LRWCVWSHFja7mgmUce5Xjfy36KSppAQs2gGbnXzDJWJAowWqqVdbJKHHsFdxfAd9xQS5rmSb7FqepisX1",
  "key2": "44QLqzNRZe4piuw7LGvVdUnrZRneLK5hCENDpQK3RAjyFCrg2RG1jvq3AN6Y426369RRmjNMsqbmKR3qzkerL4s5",
  "key3": "62vWRVEN1KusTP6e2sHgXZnM56N7p1UZw4Vk7gWC3c4LELrihMREERzd3tgh2QqDaMa8cqcTmdrXzYaqRgePCP8k",
  "key4": "5muMh5vYhMWuEkgw9AR1GEFvej1LEnWt3aPssgy6rcopn1swGsiE4TL4dezGULbUeppFDbUWFCiaw8d2BrTJd6vm",
  "key5": "4sjD7xERD4KnnBQu17tDJC67m6tCkuBvnodCvm4YbjWn7uU35NJQESnAQ7bPpJH1dL1VVv1oEYcDv76H52keJ6Gq",
  "key6": "2JeA2HkDk9cSLphxH4M4tsApnQWKvqJnBE4XVgFvYfCLWqcFCGcKbhoXjqLuoDMAV6WkdNan64r5H5iyY9v3NxSx",
  "key7": "5dCWBxDLDNQSpmYJ1AGXTHZPnQ6hSidndEruh5savsRrGmVbSPp5pbyY4Wz6BM8BTYxn1ZtbBPQMyCsdAg1MQ5Vj",
  "key8": "5k7JryhFhtNzDPd6i9R3DUr93G8GXBTfktxBzZ4e9yHv6BSqeqYfPjRyrRowHxmemR5Fr7ZhXyji5EPe9n4bZ5fs",
  "key9": "4zRnEYvLdUnyc7VniGivX4Kv6DMcLa4jdpKgMvKJqDNEk3uT1Vm8Mh1hRrrRqkQJSoPTeuNsnADM4oXAU72AM3tF",
  "key10": "NzsQ8UWzsJHjq9cGC2aKu147YoieutnhFWD8L1L6fZap592CA45hMQCBDMMXsYGQ6VkjxnacU5urCjEUxM3tM7G",
  "key11": "KMJbvFph5ycfDPoosaF8nhDFJCcTXWb2xVNinmXe2FRSbxKTvVh7CNRtbUq8rhAf8bDNHCynuBErYJoPz7aMxCg",
  "key12": "45iBRCHNqBBfCgzEGYo6VA8mg4qAoCPLWG5DJK2D6HDvL59wfRcz45wNHS9yaEaV3yGniWiP86nkZDRwhTuZMEva",
  "key13": "4iLBA73XafPu1PZ7uCHKrxapFfj3Wxytzyi8JwM41ouCYyYfuGP3aQvMYwRdJieoqVBxevHzPYT1qV58kmohzhTL",
  "key14": "3bpwmP3iXtaMahcgVgjaaJoNwfQt11iGfnZyjnnpnFS34MU5trj8U5cm5MFXyxeEr53hAHYRxeEmBc1AnHfjHXGS",
  "key15": "3ki3evpFw5aKjVs3PGZSCHpTGBjcPkPjsjev3ChXvsz8Jpi34gxKedrZCoVqGFuow438mHa1izdZcCLVTtaqDoLY",
  "key16": "GjAemUmSLWa92JTM3B6dPYnEmfnok727NnMA5zZxQYSfj4HrKBDAESrYtYUfkShSc4mF44d1mL7sRvqKDBz6tkc",
  "key17": "j37FGksvuNCz7RK8yKosa21FY8MGd9uzfiVcobcC124u8kjpik6Ar4qdCWiyMw52jVFX7Z4SipR4vWM4hmfYk8C",
  "key18": "3jnQxFrVjByU9ZxQJfPqaXFsyocaQZ2GNiEaFAsrGTw12XQxkojAQ5jmSVgDXUzHgDc34GRkEjJJ4YGtf1fF9CQ",
  "key19": "4V6ej9CTzVQUPLWVqbaqBNnyvFuxVUeaFg5VFYYENrrhV4qwHpEXTJTkmbZYJrJKfhEr7ZHHxQPqEHsHmZ7HSyge",
  "key20": "3wZrhjQFFsJNnMxyqM6gKDkoTpXSoQnfKrcxWQAQZvq6PrhKs1ehVbQDWsUdBJ9FYtexsSBPVyPswsAhPNviw1oK",
  "key21": "4v81ncmn9cgFjaGeBrhx26aWjZew6RA6Pu19pFB7sV8BhyTtxkNieDjWxMsmGkUFJVATrHqfeeGVQvyLeuQjguLs",
  "key22": "4BggB4XjtfabEmJFPHQQDD2CBi93Ua7dKD3LnW97Lh29y5N2edoMWQZ89sJWihJUEFSyjZsaRr1XRmj89ZPjX4fD",
  "key23": "4VAuqga5VU25nCDMrYC1AxQZwiFfuh7c4oPTFs8R36Bw1kHxtMMzz8krFzAgNJ5vJ4xC8fi91DjXidYxCzmvA6G4",
  "key24": "S3kgaoJH4TYeCsQVTomjyqXXXSzwHAS9zAjn812KJvmzTdp8oj1qoGUeyr62XDziHmNkb1R13zMbTgLBDJiVzFo",
  "key25": "ELW6CSgdfhYVBkk58t1ZtHPAuzVsPknBNPxdL7sGy7gXgW3r2z5WJi3KHNn1dzJ6ZAE32pYzeeBee5PUfZAsB4x",
  "key26": "4ruCtYtgqEtR1uYQzw84wfwLkM46EuQEFPeKPjzCUt3JUEtNvCYQvu8ESsmxHKBUMhT3dRFnH63GtwUab2ZcQjrk",
  "key27": "4AkQYddgkwn2AWt6X3dAZj7y5TAYZoJXGAd9eg1t3RHF7zXQPhhZcAaWfokpCfY4PB95cYNqTVn5BfxDHFRz3phu",
  "key28": "2d5MasZ7fJapqNG1LNJryvB8nsmg1cxJESv7ysGEa2sKBgZisfk6GHGCBZ62Rmw6AkD9xx52Y9Az8vA4hPdTpCD7",
  "key29": "HapGwsBDsSmhEyGNe6k15iYPKXEej1AkCMoLzdTmTHGSPemfd9wMNPFuQcfuySkRhaTNRixkww3w1GTba7XRD1t",
  "key30": "3apzASPWxHybPiLUJRQnuEaaPbhtJUwbbP332yDosNsUMuFTExTz4xKogT2nwrFVKeboKX8H2EVB82kUnaxot91K",
  "key31": "397Sj7xWgGEhF3MXmfV1gXNwoYkcRTjQoKoYsiqLUJrwDchL73UCpFPGXsyiyYi4TSRZw7orU5YT7GrfjeN3sMxH",
  "key32": "5jpSYRMWscrFjqpBRCfx4C91XaYJAfmHRbLtYzBKHGqvs6LLxmZWJeGtPkcKM7d6TsbjayjbBXtqG1b7Hen1qwex",
  "key33": "3ct7QWiWv24nxByGYN14Mzgj6cAVVJ4fbV8GW1hgndkqPsWuZf7PL43U74iBwsFWMRVBBSbTWkP3R3is5utqKc9K"
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
