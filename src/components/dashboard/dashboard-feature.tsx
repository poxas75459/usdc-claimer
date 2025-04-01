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
    "2HUnhwqNWNNvEuEPZN5AF9j5fVjxre1kBGpx9vXLXwGYvgBoWKcFUH38VesGo9qfXimBNTF6CRHqJuPcLkeTAfvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Drrzxqux1ZjnMTawvpk5mqge8hJ34uUNCgeigxssyr8Hxx7Gs9CtyHScmjN1bun4zXqNqwo8mdeGNY9XmQBXc17",
  "key1": "2zWXvx85RhzdEifWBxQLsxeqRvAMQHwZY9J97NTco7czkwFR6DeiyRkgLjaP6SN9ujhStGTkngK3TeaFzndYJdwc",
  "key2": "2nWRL9YmmjSVhUTpVK8SHcT6aXP4ZRCjPphYgHBUS1AstNdSQKCj1wJSP19NnDQoarQv5SoskUmyFrhL3XcidzXV",
  "key3": "J1Hfgv3c5QqV3AvGBt2Vt68JUXmT4uqtCEwhAwikagVUVbJUrySWQSm6Gme5Nr3Gmi6FaoBgN8WWgbMzXTU8UY9",
  "key4": "36UHkRKr13PdvDahb5nxCwEgp2wYCAeBodrK1Z2TrbTjBVzSV63GqwS5ewUfDxKvE7duVnjgZSJ13sXJngarac1t",
  "key5": "4sJCNNw1e4MN8hjut4HyxKzg4Qyy3jRgREmvhb4p3LdqSYrGAyGX1oYUMgEZU2YQGNUpJzZsEXtmmY1wbH1ePyHy",
  "key6": "3yZXv9ZAJTXcRJD3Zb4Gisj8MHYG23UFTe4iY2MFjjGUXeQ46FMqGXtgySH3ELtTntBKVCoy4ZfZteYimHGUMrH",
  "key7": "Jg8vbxqpdNnb4U7gVBP4wGYtfb12N7CyaHUeJAtXShsNkmVHGefzobr8ngtzTCLvsQ8LuqENHQJS12t3HJLsCuX",
  "key8": "5A2eSjvvCogcPNF71xncd1EV9TCbYqEcWHGiYHcQ4oTrx63iNkgo5u68AN45mBc6WG2Q1S2agYTdrR9rfEq1W2QW",
  "key9": "2wnqyMYEMAXQjFjrC9roLqjqhVFgWRoFjFaWbKsU1rzoCRCFuJddXWV4BEH5SwLwQfQvFccrsvZ2Xjb84JmSxpAF",
  "key10": "5RPxjQjVfooQpjVNs1Ms4JFoMCmARBVGR2tYovVrt1hNgHJtXFEgLwBzL4D5dcErBQHgrabKaqjXZ1NDm7vpjYPK",
  "key11": "4jn4fbxypxdMFLncy5qeu3PBQSeiiQLmPGJWtwykmbJUEawLj9XGkWZpV6XhKdNVmcszNU9QVtgpoA15Mw1Znybq",
  "key12": "2xUHkWGGFJSaeoc33H9gsi5uyyotpa21XZgiLzAFVZAEQ5E6TEAHJD74gbNtWccEaEycY1yzpxUPk3k1cmLMtLPe",
  "key13": "5G55PZzdK2SjwN95mdPv3Kb4ErhALiVgp3gH8JAco4DKoPxzsMZBaXd3XSLNtTLqMFvQ72fLNKgKn7K3BqiMbZF8",
  "key14": "49EexbGPhBu1BHiB6Q6yzXwt1ra5ApE4dLGecCr3HvJbs9BmdeY9M4uBzpUTcg8a5pxiMnveBzoD2WPabwnJAuXR",
  "key15": "2BzUByeaQXgTzPBoHmG4rnq1H5u1KC8h6rFDEQuTwHQ3GWtMCVajyfrr4cdw4SvBqWZ9zyWsoJTf9bD6AA9AFXXa",
  "key16": "4d8XmvvFskei1GgUy6ekieeFZsghaAr7mLofoo55gfKVekxEvypvyLRycdgtWSRSPcXNUJR1kxEhzE4nnzxsXoCW",
  "key17": "2U9YyKnbwnZ9WrhBhMZ64KSsf6zingXfwrpKcED2BmDsXqF9i91qdh48CFs6GPEeohJhKBmVt7rPPPLL1usw7gYD",
  "key18": "4hkkeMgf7r1x3LbFvhz2i7RpKZqNqLJs98KXP4oW2aPZAo6ywNAaj83fXLyXSyDQR8UbmoyiZPLGwTQyvRU64JRr",
  "key19": "5ksLQe8bi9gWBiZgKZFfHWquPaxxrcbzNecMEgo6HqG66LZPvydW6gQ41ALi72tmuHjTASmi3c9F39A4K4qZhocQ",
  "key20": "3WCtetUUzbzgHNgeZveqMzsUgPEZFFtjepSQNHAKTd25vQUMkqVJRQbdkN58MHJ9zVGpyvinQ4h2KyXFYkAf7raZ",
  "key21": "3Qeqkto3X2edAwgRukLUE5Kx5QYhC4ptFxtLcTCdH6cwkQi96bR6eTtEFFKFy8rCCa1juaUDDpNKaSCUp2PnQScY",
  "key22": "FLXugo5D8gbZu3pv2g9ZDsF5JLnhEjSmTZh4GWhjYRNBamKwPdMHJTxvDpwG3RhYS2GdbREcmqoHfTkZdXsyJYr",
  "key23": "BuddhVynuEYDeEAKRp35SNSxAc5WWtYS1tAagQNisTVtw5bAPZe87ssuk45cMK4oMFYHx3qidaoMpnMXvkCTjYq",
  "key24": "4r7nfxrD196FnJbi3wHvKyALMdtdc53QD5R68ith5KpMqpxUenE7oDnchhWzfap2oqjiqKQTSZBMRwBeyPW75QZL",
  "key25": "4nRXjTnSwXmzzDVnwfihmz9RHn6dMfDFgZFmgffBUiRsoDvARciA1Q8tvRSXggmLGDjXeQ22DXfYqEsWJ8ByT1HZ",
  "key26": "3MP5rNNZmVVVTk7EintCkfzhYv4vs6Z7m8f1moxQxsDWQ6VTrishMuer75bQXd5xSrRJYy3UMAep9uXeT8Bh27yP",
  "key27": "4DH59n66MK6ACLzm85PskWU3UDuQK2DhFUMfreLj2wVpkpk9ahTeojKx1CExxwBL3qPy4964oRU9ELLenf79GVW8",
  "key28": "537E589cKj6isf37MqhFhSHmgEFVmbUYts9a5LFexPmx8pBAK2zgn8jzLY4kWu8dxu2QaokRLHTyEQH3t81HZ2j5",
  "key29": "mdkgktr77uBgYapBRJUCf4K44FjwG3WDgSkjao2RNRMMF35BHFBxxkXzfT5Si1F2esPtenPSqgSq57N5uPZvAii",
  "key30": "4uTGP3DBywFdaFuKkrszZpajdfCZZz9oGz74FD1ijTkVY6S5m5PNTkeyHjx742QdGQ6rRZaFwZPKmaJvQSzVy21c",
  "key31": "44nbvRMFLZfSFjPEVMrdPhLTJo5RK1EJr73yhLDTYajE2WvYGE2ErQVMNxmKGn2fFLkgTNJgjzGQKvapMA4oMwzv",
  "key32": "2DmYLeyrob7PzN4XHDos9QQ8V1CEebWDt79pzch97mVwjHMdKprYD5JhfD51eHnCTuzg6fWJqV8Fnu1WLp2rY9km",
  "key33": "wGHmMLF2nVUMnb3vv6CksPrbCCnkRKvauVAqNAodDLsyScbkf5LyAF82TfVCRxLpTujcPMamtnQayBnQ8D6b2wL",
  "key34": "2d1r6Y9H7U3bmik7zCTzH9ng4SN5xPo2zZyeind9wLNL89SHxJo3pi5ffB3VRqRwPPAubJg1bw6dFZJ4N2kMqrXx",
  "key35": "4ZohW67E9wmpkkrnc9qsvaGJDG23JwqdK5sTPyUzHay2prg9BLmoQQzfXR9NSmn9SxQpRxZoYwdinVgzAwp2rRY5",
  "key36": "KB9ty7WpyuoHRW2vn748W5nx8hrX1ysNLGA141mHEgc6JE35L2efHqHLQsdcc52tN3GcqmewkGBs6UL4QpGpAV1",
  "key37": "2iTAuERjheY8oCn9WPGufpC3y5HpWYS92z2YW81UuArXXVrbJLLuHGHaENAANUzMw37i1o2t8AnX4DpNgPQhhofL",
  "key38": "5woCR6RjoZjkT4aH6oyigNgzhaNYfQ5vXf2rADDdGAFhdr38wqbSHWvizwfCu65Mta3yPiZmr61rPtTdvWABDNm7",
  "key39": "5nhDLdGJNMpRu5JxPm5rrxh3BVBZp8MnM74AFZQf7QB7GBDCsu12dQixAta4T9UFmWykyeZJXEdQ7YjHC8jDa7pY",
  "key40": "3iV8TYLHaUKYBuZcF11iLxueGmtFMLF1on3nrzA71fWguWdrRGzq4mqFR8PjmbzeaRory8udhXq9HZkNKjA6cp9V"
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
