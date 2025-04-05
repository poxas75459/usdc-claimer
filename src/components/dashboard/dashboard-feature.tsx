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
    "4od5BxyU5mNwWpACfaWjLX8e6y7a2zZWEqMCY71xV4azFspEZTTMV8riFQGUnSA857kKweTVLcbQ14RcYYySwXo6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fh7FukrMnenxHgcq6indtBgK52fui77v9KNyqaPZfo8Dm6AD5SGnkPVz6rkdsY1M47U5USVXDP9QuU3QQMwu714",
  "key1": "41dUqNngnemogarmBKBKeUV1zEsco1NxUtXHgYCJ6S5LABwLeoPE2JqyEi4b48fvmCJDCDH4b8g8sh6Tm6RtUfyQ",
  "key2": "5Hi853qBF58VbpbuLxViiK1bufM2zE5HFSqssTcwA9DDG53E7ZVb3AXB7x56mFHt33CxWCdVJqKfX2LXzkYnHZqC",
  "key3": "37JiWgmMNxanQaLo9ShCjveouN3GuToKSSefDdFxbXCDzQAFYpua9eVb1KVhqTs25gZzM4Yf8E6q8cugLwCMgt6K",
  "key4": "4Mk969scXmhKC69zbucLMeauPhWDQAov4intXAYTeSCTcNsXBx75zRTGov38znb4BpdvwUDi7BmE9KzqmwEqCqok",
  "key5": "UsoQvHte2r38jLP1EcP3UY3WL9sBrdLB6Kfe8AVPv9mpurL96GSKmvmXvGW5RYBTrtGHoAt7dV7Bd1Noaz2rZj5",
  "key6": "2LkF2ziAnLBxrwRxfXTrATjXzXizaJoVviCKkxJ4YqwMUheFoR4DNgtFXfKaPaBJy7BN3CqZC7n7P9d6Bw5buijb",
  "key7": "2JQmUafNnFhGVM4ZBBJS68CQW3PQbBKRkLB2HF8E1mAgs875fZtZqQ1uLZgq8uCrW4TvBxWqdvzdK7A474Pc9cQG",
  "key8": "2HJCNnop3JtuT6rLcUYNHq5dMDkVxY4K67u6PVgkt626anMX6u4zAo6M3X4AzpMUcZ3f5HReAtPZX28yrvfRWCJr",
  "key9": "4B9oP91z3PbBsFzMZXx5EpTD2hp6THTVtYHbaCRJGetqPZbf7DCZM5W3JFcYdDqed77M5jwy5yxwXeJE9ciNuaGz",
  "key10": "2Ecs7SddVjDJDpNgzfCYLoFmGy9hpGrX5zsLgoRHqTVq43cQidk2jetSE7vGNffkUfAiYLYeKwowGoAmbjD8qvna",
  "key11": "2CAsZ9tm2iWwNUxRccxUKShvs5krTh8BfVdCjBp4Q6k1Ai2HetK6ckcnvL9GMBoLaHEEPdmFt21iJ4AyeFZaRwHS",
  "key12": "HgGXBiHpqUtxQhNe31DyXDBUCY7GAY9bXEWRvkeC31YCU8bGsNmjcpXkChw1RFUxnaa8aFWHiK36WrtADcV5U2W",
  "key13": "2ZkdDUo4WR6ME9rg27NG6FpAGEPACN2EZSQAD5G1gvHmcz7HWu3ok4xJmdzizpWwftFFyUamkhdtqt1UpbQGJxtT",
  "key14": "2NJUroKapQiw1k6P6CaUcnNeez46iFVDCsDkcJdGr2vPVrZRwAqbp2t61mVNaKcouyYc9Rh77GDK7EHrwr4Pa1zt",
  "key15": "3cu2tDYru8YzuvD5h2dFUG88q2a4L1eyxi5Q2SjGKY5pdkLaBUEHf8ETGXRzLzrjsYgY1mP7wKZv9mUSQb9xG3kT",
  "key16": "5Lpd84dAJTxwPVVKsH2eGcNh9UL6RKRDb2RUrYS5bkMaA4TRvCahSn9hyv45aLpeA5qhCW6HKrwhSPiYjZ2HTikR",
  "key17": "2T8XGZKGiMrsxYWvR2y8WNGaUcpyoXPtnWitApa1AWy9XzPL85C3BNsJj35jqpWST8euXLwNcvjSt7xMRr5j8GkG",
  "key18": "5XyLA7nMY4jwxuAEgNLaS24rkqzHTRdFG3A9TbNcVWEnfkMMo8NmFUviwPmQduHfjDhYa5PMoqttAfCucd2mGLnH",
  "key19": "5AgZAa6zBebbyooTUn3iG5WVpzk2LBNPGW95izGMZmPLLBJdzEnqu8aazHaQPBx5nWVvn61NUbF4C786yahviACv",
  "key20": "2yf2AjJUN2FHCBfAAbqQzg25MqdrmdpxmkMfVUuqhpUBDz2syDRAca7nuLLTcEwYPG7U5zMg7NvNEUCKPPEnEMdq",
  "key21": "5St2EcoS24FEVo7hRrwtcquTQrJ3MsD7D19cJx1n4uUR68mVBnQN8kWvJi8xRdeAgRWdcaMo5Un7CdXxsW6Em97m",
  "key22": "5kMCEvyoC6KzhHRyv2rTWQ3dndPebnmjbuBZaHZw7AgjFYBsrcx8WCntj6KtknEctLffKnLE2vPudTL39464XX7e",
  "key23": "2LA44122Mpo6fZBRCTMHgS35YLBhxc75wUdVqb12Dw4pTrqtHz9KUS4McDv9nejnGKLYEEyMNyUX278jNuQ9MxzZ",
  "key24": "4MJXhTJqHpb3ASgHBJpQFmbYBup4wZ3QrbUm9qgKnaKjhQEJnTj1eL3AogdesL1P8q6CHBW43ZKxfX23UfNDQAGW",
  "key25": "2yH5fohosExnSGnbDeFvsFG9LE9rumKF9UfmP8KWVoo3GboJz79DSUEYbx8Mmmh35SYAPXEz3BuUJrrgo6nsbMDU",
  "key26": "53sTrRZrBmZQU816GXXawEGUdLSpv6wj8edjBpTFiYChCHNQBJhkHM7MJqD99qi5hjup5Fw9zEcGzXFHVsTTE3mt",
  "key27": "5wyiodUMjkkn9wCLbc1BYSk8iRmbvgKyWp1oPHkQXkdyM7A8bnUYEeD3dYd5DGrwJwviJtK99JTspiggvvqJCEt5",
  "key28": "3KpLc9XyCwYG3AK5YTPu9V6k9ziThGNxE2maxQBmJ6Depx2QZ8KEyqig7oaiungLVJtZBkZJcgN6Sv7qgVgUS9pF",
  "key29": "5RuHCWq6XDmEubwEym2aqhR3QLkgUSLb7V4VpG5gMABWc9ouuvuzxayxkLBBA3norpNbPbPGRYVzFyEhCzqxdkrR",
  "key30": "ZKCDXw81W3b4z2bTsWHAh4gEx7WAcVU84L9uML7ahmjw5pFogGVjQGJDeGjkykvZBAQSoXWHuoUA1M3upSFSXFp",
  "key31": "3WvNJz6W9TPD2K6QxdbjxwYFxBaBbvtPKzjJ6i567qqowHEbsbjnoJbH43JTk5YdHfGJmHpwk8SnJHXewVGk12Up"
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
