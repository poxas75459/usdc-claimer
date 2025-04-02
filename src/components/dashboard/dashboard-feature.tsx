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
    "iMbDeddzmJFJBVYyqrJqUcQWe46DbJwqi4VTsZLFPgoQpCSyCAeqZJxHUw1MW2HVedp9TdfcGNG3ipArzKTtTWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54H4YAbHxmovr1fZVbafjdyW4knLEXuypPBVKBM1XkZcKtd2MwzWHiGLCGAKYRkvgdhpZAUf46AW9mc12F34zrfZ",
  "key1": "kET9mzuaThkMiZMyF2C852a4VXsZaY18o8MsMqbWMGebRHWqccq5x44GVrkxsUGB55dttxa73dmhshYqcMmWN3t",
  "key2": "2TJTbq9UdRmZuJDSgga5pMPTsy3SPtCQbcUkF6DfW2X8Eh4djEytsvAfyrXw5dH3xyUyb4mUgmWuJDj3eeuHKspu",
  "key3": "5Y1V8thu53nQE45e4rHpzqHMHBsrFHv4LmJtJq8yrWGZSim7pDN15X9NNo3HnPkjroFs9inTpv7Mdj18vAc5WMaM",
  "key4": "yGL5ngmDPfXEKsEGep6PXmPAsCSg6AS5tAVcpckXrnv4PNhbjLcpnV8GscfWt8fY57KLDWF2pQ9zJ1795Z9nnW5",
  "key5": "Ftc7dYAUoE5ezCoo93X59HctyamwcsEALSxBVKc7bSMrEuDT2K29Ff1Rde5VfmXeTo6R8SxSEpGckK14tKtkQLP",
  "key6": "464f8gpYceQHdsLw8vnn7Evb4jVNNHT251ztrQN4efAyTPeuDrZfPB39CvcafpV81wCxGEuBuEVDYx2SX2cyvpaa",
  "key7": "sP9YHhm1Xwostyj3ZUxUW62T8WhE5ZpBjXbdsbqkwFR4YS8qLdv38a7qzkSaGRkDwPPXq6CR61eCFvRU5QjM6s7",
  "key8": "26tmyC4XPMr4PHsz4rnCEMPVX3U3ZA7tPqF3Kph7tmgBr7DDTJtAbB7ZaazmtVGVfw2oPj8FsQqcuwnXr2TrxfP9",
  "key9": "4pMa1cAaVZhwBpacua5YcfAGXtTnN3mFSAmbpNCFpsdvj5egQKKPJiddg3W3fjMQsp3mtAC88JRJdCVTAApD9HQP",
  "key10": "4GvUESCHXdijpVT1kQsqQJi88wDG6An4B6DHG9tp8LuU2Et7ZDChKRrVUx8UFuKtnSgt2DdNNgTGzjoX2erRj2n9",
  "key11": "5NaYT516k2StKK78tHLwYbFD8pgd9EN6wXfLnL1WC6JD5YXM6BSHNt4TGkPg5QjDnzUSm85Uskt1pJgjXU1eCJFU",
  "key12": "4wuCtRMxXhVw4GGjk38enFMeRJuWDV4XpCqyh8GuF3bqVqnr2wQWbcBGYFjBjy2KtSiFfsGxEq42xgBwGn7EPJ1m",
  "key13": "4RPCqX2DQxpS55mesTUfFFBAkVZHCytHk46CMwcMHcT8nfRM8KyMqC3vKbzzDRMAknFWmLhgjQxJbfZLwbjNuLEj",
  "key14": "27hVw9x8xXXpkLU8eQq3MC5GiPqvHBVUwH1yBbZPGsYTEAb2e4phcjjcWmMgcrrm4BHboAhg423Y915jF5eVgErn",
  "key15": "hHuGMRR7BZYyWWAvzygv7wuh3CeN6veubWR7W5SiWD9UnAX4ybHDqS9Uy6ZA1VfaaUS78Nc6HP4kQNgWZw33MaD",
  "key16": "ncrAmXDJPyfu8uaq8Azw7KhUJU5VuZpgeheKZPcS95v6wFePoZjSNJZnxpqYePcpofXQXXAHP3gbr23GvAyZfuf",
  "key17": "i3uDJwyUFJUG7tkEQvwxB73qQETbGm6CNgf6BpwRKnDKUgvG1dZ5PnWmNGQiPWvFY2B8rtR4vXaQX9bgY15YMaC",
  "key18": "59oDAy2YtoiWHD9fXyjm3hpBP2KKdQR5yMrvtYdXcQWis2J7FSJVfzHWJcH9cTpNHTYzuGLZsK82xdTm7ijrqTMA",
  "key19": "54Ukh8YBfnexgbNoMxRBEyxsXJR4vFsZKW6Jgj2yDjs5chsdDhudn5ndmYdncz87oAfbxSQgh1McGGo8ZsGPZBVn",
  "key20": "43jToG6iHDpkdovpaPkXVdgk89DbS6WUnCE9ue64ZZ13CaiXLrs1g1kkhuF1GV8S6WswJynV8mA6fGeYoGReX2Eq",
  "key21": "534ixNZAh3AvuhaeiDPqvF2xRs4eAvCZ5C56K8kgtpQdSV1YumwhNeGNiy2GomWHzbA12jVSGg5V6pzETmgaFX19",
  "key22": "5SKL9qfEkPoFEuvA2XS8dS7eVmwu7Le1XToBRrVHVbB93KfMdLZZbjuRo8MohTQh8oh9MPELQTWmWLA53sjZKC1E",
  "key23": "4bp1vABbau6NQeYbPZ3hVwP92LzUaCNvGR6njoFpDLktdBTBEutV1KbvbEqQZym9HZiJ1DKiwXY5jSH6i8kao1x4",
  "key24": "5Q2Sh4YgcrHMbQ26ycjbgHSp565CTMUxsL5GiXS9RzjkTeNyqEKcr2C9ERP5VU34ZuPC5enyZigQgtwD5S9jMkdr",
  "key25": "3HGnDcDBfYUqK1NcoxytDJ8snaRnC9RgsuuXRdTZNFaTJH4Rj1QsRijty4irA129hEZSo5dJgMgkhuZzShReDKxH",
  "key26": "5CL4uu2viR3x1bnVhet7Hn4y2Gkxijwi8929JYggjsP14W23P7UicxdbAFPiAhUvWxkj7zHrYV59rvL8jVfjdiBE",
  "key27": "3Bdjw7nkoDAQrsi5b5UjgzBFz4aGDo6Dij1VWxBQEta6oFNstcZvq16odBieVDNVC93J6cPp93b53cJDNyu6zgWj",
  "key28": "3sBkqsG1hSeN6d2wcS9cYKTJtRB1GDRbbvW2GPhpCwuVG4e29aZfAkoMEhtjPNCcF5d8YKRiuRY1uhrKKZMB8KnC",
  "key29": "5nQZasdAw2egDVa3reoE4ChoXD15xj1crgkpUDkoHycgktoQLKEopa3jvBWYsDL6XiHDDrWyQRYnUG5RKQLUCHYn",
  "key30": "x3yeqSxCQXb115Qa8Q5KVvCUSNrCSyznepZ4CM54HBeuysMwBbXDczmXk1cPZNJLf8B58ff3jhVmVkVMh8xoM4E",
  "key31": "4abqRiij2tSB5KWhcqmzjBvSvAfwMQ6TgyutTiYKq2hVy8Pv27m4JpBsa3C8rrpQtMq4MnGkLeieEQ4uKBMhVckX",
  "key32": "5xKNATnWwkWhc8SomhHSpYc8QFcL5RR2U1koCaGtQTGGHJue2mnaEYtVopGcwHuM4ywRs2F8u19F34kDRZ4hvEwJ",
  "key33": "4mMJ3Z2Kb14FFukqHeL3a5yp8EsGojKKDPfxLGnUNZYezC3v3Gvnr8QGKhNXUAfrw6Y7vAdG23fMFB6HymkxLhc8",
  "key34": "5btCG2Tj38nwngVxHLYvvjE5gEa2ydqWSqxqkDToETgnvU3BNqpdwGo5YM6VRg1mNSMVtCffW19VHWMM84hApCfV",
  "key35": "2sVtfvNmKxF1eC3D7nGBezMzt5fZW6Jn2T4cicWBbrf5N3MReBGHgxmeADyDxRLQk9vyuwUMtDRNEnvaTW4sLjgH",
  "key36": "9PiwzPkMTBCXmqjPcQpqXq69yrLb1anXSZi7bQgXqpuFLu7j64UhPVFqZDFfs3YXxsFsR6yo4n28o3Em5pVYn3P",
  "key37": "218NkJKgKqjd3mkN8LL9JdctTqH6mC6uwgy62FjVJ37s1XhYxBTQjZGgxm6HpqBHj9nEF5sf9ik1Zdr5Xa1PnF9L",
  "key38": "6ea2Dc38vMv4CShhiEk3SgxsCyYuxCSJGdeXhqRfxsZuyA9qGNG9UVThtZsdmp7m9nqom8n1x6eEAcjpNUC6WQc",
  "key39": "31PLStGvAt9PEepQYmNhe7YGGYM1jawMytqXYnK4GDBDBRtwkQLRE1AdBqUY1HhypgmNBeE58r1N7VS1VZG7xvZP",
  "key40": "M941CMKMb31WsuVq1HqwRkddJGC3iEDbHVF2ropAMnWeDg5oAxhnCtjhGph5XsiYVtCnM6RF86qSgDaPVCvxc9p",
  "key41": "39vb8GmB7bJW8WviHKWogRidu6xe7FWM4GmgtRC6bxCLL41U6oMLzueBYkRRQUu84VrK6VpEbefkv5FeTrHRLADj",
  "key42": "3AyYS37vvjBPtjXTEX81NxqYiRrf2b1TicDPvnHRRRbsuAWXWubSF4mAUjZ9gHtGtqVXhRSZ3sAC3intExqkpwSN",
  "key43": "1jH9JiH86ZfPBgjLDZeoC9Y6Pc6w4mdhzGg6JkWpGv5jmBuq5ff7pLLAbTSa9jnVrVhoybiLiBQYntM4GLYUydo",
  "key44": "3Wj5T2NUavVQu7Kj3TATjGbzojMXbpb4G6yWHpQY5dmUFi6fchuAdSN4bFyguXmJqUqkJvETfT7R9GALU9JeHBhu",
  "key45": "4YVDCdjoJRRDHPzeyUxZL7mx71UXK74fiU4QtSkJ5oSKKmTPwpLMjRT8e8xviaq27ggp4UrqswcnSbem1jteyCsv",
  "key46": "5zQiKEC8iwYrFDFov5xTXXsazwWYV2zXyjMfxMcsjRKWMvzVtdzXqKbuPUpk8J7ELmPFg6KDU7vLkEQtHve9sZZS",
  "key47": "4pKnKVkbjr3jdSCz3W2ywXgep3nZzuEZGE575iv2v5eu1KhU2RHWgfrg7hhrkuZpDUZoXdhswdWcZcHwfP1Z95hm",
  "key48": "3f5DwVr96G1vCsEwpw7mTwZPQdtNqfVVmALAnZvgnGMaXJhkYo758ivZwiKgsHhAqo81tRtHArruqwTkgyMJobnv",
  "key49": "4ii1oGPZDmo2xdWkNHQkm5hwpHzfCXt5PmgDEZkukG4qVgvGkH2KfguvzVMwSdMiQfe27sMRmKMmwoimyvKgkbNP"
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
