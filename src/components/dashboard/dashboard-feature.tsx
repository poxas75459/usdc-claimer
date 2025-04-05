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
    "426157Xn4S2mT1411GHhYmjboMnf9QiAEDwQSRxaCVCw4f1khad2CJwMtezDQ6MV82YoBES9HLAqrkiuM7TR1tVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sf16rppetYtWkAVkhV3yC32mamAnHYWiv6JRS82MbeNQnuJqngQL4222nahAg9mhGCxRppFAJVcaF4FReJ2PrqG",
  "key1": "FqdRT1gids74Vxtc91sUu6DXRnkayY38VaB2MwPD9VgcbqxsJV6gUGqBzYRUSrArCVFPYWHDMYu8odeSbdiqDQU",
  "key2": "2tmWSH73PHsdCdPY5bLtPFy4p5HnSR3yjd73oZTxrrGHVcZRsGcxarUoURKcoUYQU96xRxTebFBsvA1KSTFpcoui",
  "key3": "4EVgHap8QX48mwS3MeUThK85gRQDbPvb5uBKoW5jRGRAL52bBTUZJss8cZYnfHy6cj7H3GCcUkegf9uoP6y5Xcuy",
  "key4": "4t7cBER5AdN4Mk5XYx4hqEPpLtTYTSZUXtXUQJ4p1fDyStMSSSidWTp1jvfa2rVzhBmieENbUs5SZ77PRWFRhJet",
  "key5": "2La2Sh1W4rp7AWZsHG5y4N3LwKByTPxTZPamEwg4EnXCPiFq1hjQQYG1uKSg9pYpctwaquoo8LFUEfGVSMaYnhVa",
  "key6": "2qdCf27J8HtN42eyxijK4fh8zLQgb581g5Vv8m1bd574U5ac2VNkv3qizr1DcqMFk4e5CwQqWwCt7Y6prU9bS2T2",
  "key7": "4BqwDRV1wZvJo58fYczfFsuzF8HBUCq4mjXXAwtePgQsDjmHPPNyVxNsFwGXPpyD92ez2CVDPdpoqtJtC1avqQUF",
  "key8": "f3FJZe5EFwwdDayQGJmnLWUdV8sBUEJRrD3fomWPp8tWyYetiPUMjhDF3i3v5dzb2LR9cecTQimo1AQ9bGQN2WT",
  "key9": "2q9mudWNdkPSSRNvgQQFvM6oEAYdJYc6ziCkz97RgZuz2u8mhg46H48yfhrDCVNFyR5FZxrFEpmx31WAxvpuXjJd",
  "key10": "Ftf66NCaDzmSCBuABRp9GqhNnZ1TS7cSusG9htJ6n7FfaxtAUprZ2HQhqmNZUfkQWf92vrk3SXTzA1NqLazKM1t",
  "key11": "urTUopdN4ktgKdqypR527AonccerPBXY4DbGN6GcA9DawWNRio2S5xKxguJgWP5MkoNiNxwXhcjLFjDsnnDFM7y",
  "key12": "5gMXZ8YmHUatK9sjaKNY7rk8Q3mDN83uk489fgXX7GzhFXLSzZ2GHTaXcgnoDQy8naxokeQ9L9aCHCRDvcAgnfS4",
  "key13": "2PcdiJfyh1sGBgubJSbBiQrFesVXPLPiAcPfd37ukWwRo4A36dHobce9sKhM7uP8FLFPjiRWmCC79Xgi3Gw4i4oR",
  "key14": "4VpdETLnMUKeWXT98wXsx9pq86deBdcoEPqTA9EDj6GBK94XGueukqeq6hkS1PdWuvaLvGXC2f6MD8FmfvhhkkJ6",
  "key15": "9pkx1oQjq4xPB4SncYeGkcdA3uaFrvqH8JdcJBXb7L3BprC3wkby9hsctfbVcSLDSoijowtHHzqq6AhBb6pkkEH",
  "key16": "2ZUUmqhmSQVEMXHofKz1qHM9Ah94bbgL1rkWd4h8zVKc65Z7zP9EGUzdLv1nPPzTYFQ3ykUfJvzfMLyiuFYL8AzT",
  "key17": "2YuuQP2VvFLMHZix3EUeWdY6Ygufoh6An7Y87VeZRWve7ACfhqVy7gqGc7myPE1ws8qqHpUunFrVhFoRba6Ri29b",
  "key18": "ZEcvUxHxVuJSYutStK37xrtyZPWPMSJcfBttuzNDxdJKaq7axSif72uiVAwk66yxXYQ7b2xBuAJJfWYxU5HCh5T",
  "key19": "RgRMyV14R42YPnXXx4cpMZEc3CfaqAUBCfTRX9ZNgszAVNiCWv1Bu3q2wqEfSgVqhpfJwvHMv4HfKLmYma6m8Fm",
  "key20": "5eAPdJ2nDy1RD1SUb54Qg7VhBKNNdU3mTxdAJqkPHgDxsMupgYR2y1QKBwGZwPcnMCCYLsjqXWi5zSaM5hqzH3yi",
  "key21": "MEdXgCTNoWzT5wyNskPAFtpk721phLdYkWqUr3DLzXWZX2UfeyaDHsRCi6w1NpizRfBe99VeWAensiYX7fyLUit",
  "key22": "TvsxJqiNXNT11BwJaqhx8q9a7ZvZZUMEcbbjmojo5SkcCVGwteGtVLqFHK2sbqChxFgW7pjhw53BwCLt6MBe5Vd",
  "key23": "2G68gGx1nrHRNA1FXcjBjmG6rXp4kF4X2xpj6NemX4sekecFMfenxfXzvJBCLAGq8hs83k3nCSDLj6UdGno7cjAf",
  "key24": "3FzzhK1BJR29ALRhXGnCaJChxj8PwX5o2RxaXvwgqc5WQNrEhBB1Rg1o9n6e3jFVso7gRvwVaXJfBk9YCyyn81mR",
  "key25": "2U9xBYTkfbNPPnFGymyKfLvskud2wy1bt6Cfpo54QGM28uPSWRmLSJLM8DJUMCVZYocF5Hf6LEkaagW2FyPfYykJ",
  "key26": "5Xc9K9v7Fdmc3H9oARJff9R6kkPvf8ToNSxKVPtYGEQ3KxYFg4aLkPVaBJBoauqJSx3XTpVdQu6dW9YGP6h6htCu",
  "key27": "4Sxdwq38CdvuwQXvC1jotmSi4x8kUWEVfaQrGrhNzdVB5wegpuM2eiBbdvJGg7Hob5dRg9QLCuwkmtVcHQppL9DV",
  "key28": "3nmnJz3kAXFVVQLeunofNq91cXTqd5LrRb17cEAyiZVrhei4a7EiJNidK6ZWLAiKhsvwhsdDRePiDZjtGgSH8brE",
  "key29": "36k5NpR53YkoNmAbRsKU7Nb6SXdLcoWNckZgVxmaXxEVoS1AnRdZ5J8gvEy3wmtKr9KNft7VUyVYG7GA8QNWiicw",
  "key30": "2UewjMdH33m3PofXKnwXSGx9JxdmV4Veb9NBcoQXKbPAbG8P8GoFrpAV97yQNkQ6oyADGpbEugoEsP5qYM5w8q2J",
  "key31": "4BFvnutyyxuQnFPuuzFx1FX65hZ4d6rgubYbcWFL5boyJkNnbZqoZdpi833ctcAGroTUzGd2w7PZnRzb48QPcmz3",
  "key32": "8NWNaKeKzSegsL7oDzjyyJDb9yxQDw95ToEPLWVTX7vdDYPunnE7zE9NxdhKJNEfJ9fCmvfN5TMP4iLCiE4cpy9",
  "key33": "5uMhutnsFYBdvbP6VCUPpBFSbxPE1zAdWQyjc8mnsWbTXULMk3yFizC6v5tMKSPbVQ1DNTdvqxqdviqL6uRDxkeC",
  "key34": "2kCQCru87Hun8Gig1wSuiJaLyTVxBEZmYQwX3VtEVBM1e76N3ZAsyG4DM6uPZX4ZA1j8RMgFBphJKfj4eTM1Ur7s",
  "key35": "TRT8xQZpqdetyqxXALABsShX3Np6gBPRhgxK8Tz3JZvYMsi5LVrt7QG1maKFAkRNCfxbbtztejGc4K9QhEJq7bC"
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
