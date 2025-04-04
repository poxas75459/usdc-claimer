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
    "35FoupA2h4zki5XRA9vnXbcH2kbnjyCp9PDw8fSUnxBxjy4bGAjvPfVaFJTgnXp8spLgW9D7saByNbmx4D3fUMnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z8NEhob5jnnfR9d8UwHqo44WmzWDGnhMbqNDjwkvnUNTRPq27x6eVMjpAhXoSfHxPi5694HWyifd3fvHnX6FBuG",
  "key1": "39KtvzXGThhsQYNQjxCVf5uk8mBVX64jnZGGyyXWqtatbba1Npz5WUeZPSUouYNkMFZpzic2JWJ6Qtnpte4ytR9v",
  "key2": "2eEAkr1AmXc8tfSdtpMx8Q3SyuGVwedMctj2U6NoLcGG2LGw4GgwQq1SU3btF6MVTTWCo4cwzAbfbvoV44YSQmWC",
  "key3": "4KutwB3VnHM2ZUkehMmRdgnyqEu3TPVQ6CEu4kXBmvNSToCkZvQWYr5TGbenZN5XHmKdHfBWApB56Rbd8Q1EBPMT",
  "key4": "4VJbZZBSfjBQeLJuBVXakk1q6CTYs5T2ez3EDjHhW7RaTX1SZPjS71SGexr4wUjJnEc3YrV1XxoejdeNy81Bi6pi",
  "key5": "5zEULJGPYtbUddruuL1x9wgGypP37UCADbwRNQ59vdiTDQ5bznzW8PL6hhdAoueQRFYnHqE5dFpKV5fPFEGsgqzN",
  "key6": "4KvgSq9snT33EG8mwNhsGsnVZc7kStYkKez85yz4Ubhcn5qPJo3bxhVLfYicx2F6VNsZRH1QnWSZ4FeJEhbknsAM",
  "key7": "5QYbmcyFAm4J5dEdFmKdmuChoaUcPqti3c1dHfHkpnzEZ4XySoCphkp8LyWe3QfRCeMY2pSWJvfscM973kZPKtZG",
  "key8": "3msxAin2icP8ocgny9ftuCeMaJYcHRtBG3VBmp3REPSJxiYMC5nj6GPjvGBCSmgi8iYzUUe3joohJmd9qt5hHKXG",
  "key9": "2u1hWy81GNJL5wkY4pUABT3RCeTfe4QziQCJx3kx7SHfJ5vrtidPPRa5wfuoTCQzVnuc4X1ZsWb6ZNiiWvPoxtDn",
  "key10": "G5JdGqchnputMu5qrTFU8LVjnouMUmGG8vYYu5B9iNmGRrwCuAag9dawFLofR6SW583PMSNeHfFt7dsDt3pEy2o",
  "key11": "3wMResvEoYW2Ye52uQw78AvLRePn8UGtb2iaxf7sUC36WQBdBybnVCbUiFFLypjcC9PRTBSFDutEtZLBnYjpmG4",
  "key12": "421p4jECuaUchiHqyGnNk5uVsaaQY9fbxvQXD1AgVixdN53sTrFYm3GZ6nRno9WaTE1idc3h7JBrhjpa1E2VPkSE",
  "key13": "4d1gKnj7sxP5tBft6KRhkco3CKKwDKQdwXWB4qUnbsQF4Kgom3U4TvtUUZBYvEkanAPvMayn6shysFCG4BpWhpKF",
  "key14": "4pQxPiHm5FJzDmA6wN9UUQoihAK3bBsWMKw9B2MsYwq6UWu77hR7fanCPvSZyVvgwRq2wN9jkR9swheXXgWXFxWg",
  "key15": "2RhboQdUWJY7HSWKabU1C46uNsbAuYMyattGtbh3Bs4j8LSD42LnPwKttY7zppBgj2UyLRWeg7Us48hAw6qrRWh1",
  "key16": "3etx5JdJ6pNKKoBc1cc45McTz5KfzeRFur2NdckY6xGbEK8wCv1jEWL5upqPYwAiKxXMLoQHv4aTyQm12fzGKXWx",
  "key17": "4ffJzqAQcjc7iSZdmABsyXryDAEnnU6cHgXAPRaETjQiQKWk8HtJCEe64eQzL8ZoZyhH1XySBfVJB1dhNuD546xp",
  "key18": "45XyY5RU6SwWoZurUhfdBjJSJggAYcWRWfQGxYnv8VE1BSTdwrMaVU72TZ9U8A4FxTGSJwnzDBi9iFHerJEKNFMN",
  "key19": "2AByeWqPC85Fes1mnvMquC9jmGmxBaovd6Rcq63emQVS66wX3fp3PEG9zZBvSyZmVtHd9DtXMV6SjqukbuPCcrD9",
  "key20": "5Jgx7adGkjDe1xxTnEJuuWC4VfPmmSs61txQwPCQb6FDsXnX6DvhQSdhDGHBCKHDVBz4P6Fh2qHfeNGiRbmvnFQS",
  "key21": "5UTgdkAPMJSCeHTP45H5Q4Z1433MgJc2LXeGc8eneAwW3qHPTEjDPZZJSE2jKJzpb1gXL5ZKH5Qq9JhA9nZbwPtN",
  "key22": "4JDuZAUMY7HZqYxSBdtnCBcW2qoTF1cC1kHCeAsz3Fp2qXWBkQ5wS7EZpavZJtBnTPV19LzTmC3ZJYubebBF6TLA",
  "key23": "2TuAypYuKei5qRmqWWs373nJKbYLaJdBj8jbKj3BuSxCVTerY1NkCf6NsZEnkexD5G5DsVsTBeoB4k43qGojnW9U",
  "key24": "FuZhEuSLnHatbVUBv6cXXx25CfWs4W428qmo7BHd6Bvd5wLtteKMDQzKxcrxBneCCNhLc6TgqvAXEY5mrTDD5X7",
  "key25": "4P7FmmG6tdwV7uNvQ8BFCjjXQE8bikubTDiWL4WXY7XoucJLpMZ9rxonjxHNp3T6LeBzwsTrxKexDgZ3tGavomN8",
  "key26": "8wE6utqHeZG8Ne8g7RqmoUH8Rt21aBVH4mr9kxt1BRxbCwr3cty4kLruYDuE5oRP7Mev3TYVXnCWun5EGCJB4wf",
  "key27": "4UdqQ4waeDwa8kegQPzTah5nTnAPjJYJpxm8puvqrkqKTVA7eTqHbyAGB3vXec5hNvHY1EnAHdb3yeiBLEibDbbk",
  "key28": "5MwVJJq9291LsSVxQXq2MxYvUasAMrAx4Xvn9GpLuxrc1SaHbNxvVRFuxgZRaqx7dJ3kddSwkzMMmC1wpXP8MuHS",
  "key29": "2egbiQY2gVY1EV2spKNcsRcN9fiHm2Wkk2v6ossm4EDPnBDjZZQrMmrCAjajNoFAi4prxr2RLP5GYso3DWfe3hnD",
  "key30": "5sZ49nuBUXqASDRScbZnwzSaL15xmRTwb7h4AVsJXDk47piGfz9EafUGZqh4LaDadCNVPY9JD1sS69SXcBCxXPKn",
  "key31": "2eAjDK8Mzx3nbEy4rJhy8iVizYekQfsjZPFMRLDXmiWE89wuu8iuGv5uBs2mWH5ohLMkXVgNPbVGJXo8dvNTTdCV",
  "key32": "57L1SwkLiGGdCd835TZLfW9MeTqhfEBytUUFmtq3vJDnGjfaZgARTyuKgaMEFTxGeEMVKLM3vtuoNp9fwBMbgzro",
  "key33": "27Rxb3uMKrfMjkdVsN68q9Z1TRcGid3CAc5dGdYdL7vt7knGMDWf5cfVwFvkz4KtUUv5F9Q3bNFSx3v8jaAqXzD3",
  "key34": "3dbm1711fDRfQrvRWNekMTFZYuxMLRm2H7EXjZyy8DuXV7ipjZ7VWkhPuQVgMVB8spcM4cBJ18sm3yvUPhUmigqU",
  "key35": "4BXSBUCtF7c8Bo72wy2oSFFBkxjPJsL5kxn2EzuLiNAYvD1AE72EatoxC1bhJ1NGuk85qa3fQj9VdCn2YoLnr4hQ",
  "key36": "3F174SpaKFDLfiGCTifcDjCvJmLW7obmKHj1JmfeQMD6VepQXXMg44vc8KuvNaH2pBPucu3NRuvSjDQ845txq5Po",
  "key37": "354e4TQtHHkjkmBUYAZuCzKhq9vKnSipj2y6Pq1MnUPjsvrGDLktd3LcvK4vxE3DbvRmLwv6buaDS1zx6dvxdNc7",
  "key38": "N1YwGFhWPivmSBXMkf2cZ9wXQj4iEJszRP9JP1bjBT5zUQw1m7tySCsXd8nKP3VL8i5xv2BXVViF2SHM7g9aBAj",
  "key39": "2NcaCd1Qc3aFPv2pnve5eAhQSxrApUmvedmCd9MNunmdqV5EF4PwsPbaFRfYMcDvV9Adu5YSzB37h9PnDTiCrvmB",
  "key40": "kCQvxDoMCYyU5pPxTwBYjGU5FkZ3jQw9SviAt7LSEdnVj7NmmGXfjRYanM7FUaVQTkWxrT8SJK4ffk1b62Ns7mv",
  "key41": "5YXANk3HU3FUQwaXpPCi88FZnd4Gg1NWY7ifbUdYaNG8T5uHjWtwjXZpXjhEXs4YySGzYi5fiN7JjezZi117fwzs",
  "key42": "3Vvvibzkh91RxHkpAXe11HJ48EfbGbY2oBTH6srTG8pSkucUt9nCCEFjR9vE5WsC5AZAfqrBv8fnpZzZTiC9KfzG",
  "key43": "5P5VjnPEvWMhoeT7WcknpXBDPmnrd4WswBBktAuzGbdPwc4t6XZtTdBGbq56cQK2LfWAPZ5ECB8wbXUaPASdtLXB",
  "key44": "62PAw8yLEVeEMRNkab4ghQhXXGQ6KkvtmFTxs8CrXp7bworV4fHD7iDQH5mquKxJXVVbnrQBEjvNtfFSTpKQDYtV",
  "key45": "5pYY7vc1jMbdZNgB8X9FGi9uYXpGYJLLq1QBbJ6EinWBpB518b784vjBX9mRyG6ZW5CRpoEjHJnHGY1suJqojeCh",
  "key46": "4pPJWhAC89scA3EKqSdFJZH1xuwvLwXNY6m3KD4rnU29JTaWaHPUfKotRuEPwi4t5zWzrcvy6vBWDHvHoegWegMa",
  "key47": "4QupJqNvpbqszZmcJJhHAhZWvyHAsA2FW36o8GuQCTEr3QXp5Y3AYJBz7QZ817FJ74eseEdwZG5J9mBBqiXrJpoS"
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
