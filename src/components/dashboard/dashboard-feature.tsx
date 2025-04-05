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
    "3TJKNgyZPxDVjwJFafackDbRADmU9HKzFvMfTd9wfn8rSWHogvj79BXEAMkJehHy7yK8b8dadrfvxxNxTjV8cNcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NUG63hRyLq1CBae76DkYesoKQrW6gjtMyaPrKz3WWaYzmMvv3ip7pTWJ97kuCPY4aCYGTUhQ7KJKizQtQA8wiN3",
  "key1": "5WxAbEtcTGXXVzx4n1szmZLb7bySBhEYo2GQPsnJThLnr6woHfG4kWbqcpZcF8wBFyWU6HMdL5xfXJguo43KeLU5",
  "key2": "npjQFBTGBPThxnRTm4j5w9EnWCDbiG9A8kywE33gNVWogpsDbTn61iDCibZsVmhLWqUQcfKw1zDtfJ8a9kTDLNC",
  "key3": "5Jcn75eKCgDPUGuFn1JM8T8j7hw56NqRmbztPg8YZjCVcgfXmb8H66TF8DbTeLFSNEzB8ewx3gsamjYaJTXMvxsB",
  "key4": "4bL1Arq73tZLTTRXP7oWA4jCvTNJLxPpwaEejJPXqBsqrwmZvtazmZYZUN15gTaQMLxvnZTLgqqifmKXUwFuPJhU",
  "key5": "26PD3fkMPQnzqN1Pjz4bSqqSpmnFjjXJEyuvC54a9hdFSsLN2YMCYaFXjBrRP9e5ya16cLit1MmvriRT4gR7E7uF",
  "key6": "5SU4vv2y1QSUgr29E3X3p7SFruymvV7dDcLyqbHMENK9TTFVP9L9SxArnrmg4mshcniooC5qqF8CvraKntX4VXyT",
  "key7": "rhaiTEtgRpsA9nFPt6UZYjFq35g9fDGfYfMjjRaNejVJw9tuoYiSCUzGaMYWTuktQHrwzEkpcJzMFziesMS6Dkd",
  "key8": "4YmjEgHZjAqBajShbc3TTALT5XjXGg7Jw9cNFNaAqBGmuiFh6DLmR3iqmnxzHQj4azfPmKqb5AcZWiyv6NTgFX1p",
  "key9": "2rJU4dcWZwc1xksqjhwZJyqdEaWG9KvfM78Dj2QFaY2iwXU7LyQRpyTDPXknS4kYmxSQRDjgFTtGZjU2wRjCYCyu",
  "key10": "3SBSRJyc8rNsF8j15TCK9i4cWctXW61rxYBuaJSFeN2vFKJRQMSMjwBMhtjih8cRpRr23fyPSTshXe1XjTSxnBVG",
  "key11": "4cg3eUcsm9jpXCWzRbnW1EiqSchnge2FGuUEUxTP5pLvxp5vniD1yFBCzegN6JhqvQgx3AK2H8D1kN8f1xosxyR8",
  "key12": "4UgJBVg53khP8Mpxbb5CFQ4nm7vFYZYthA25kbgrhDunCyxjUdSSDvpVRTr73aVUSNzKb6yUDoHJm7LabCGdZPtX",
  "key13": "VTDZrNCr3X87duT6Zwqg6BjU6wK2dn3vySjNoBeWxgjRr7dUGuMagdoagyvjgt1nKa6AGSHFMMzLf9EuTEvcxed",
  "key14": "qvTCJv5Zt8FWEnmvVS8PEhCHyhKGqxraPsVJ6oRhhhkmBcZ2goP8S6hL92MLxV5EeWctZwG52pCoiHFDUMAtGzd",
  "key15": "5jwVXDXbNuSftZRfy6dfuKw5MbKjcTzA1utKs4U1dbR2vCMQV2HSZv3FJcgK8BpMoABLaVRxBExn4qNRtveGLSN5",
  "key16": "4ipx37Yhvdhhgewgz2bwkhFwKctVSw4oXKeKHxNEx6vQCvRgNEcUpj7gy3Su1WCaMwyXL27EjBoK4eu4TtEZXMF7",
  "key17": "6o2jqGApqBRXxr3JGudDPhrFimjHVjSC1DmHgdvprbBDdWxeMixEF46zUMXGKnDaRaECSnHYMxeaKms1mawc2oy",
  "key18": "29owysWu8VAdxgpBcQPuVfT1A8a7kfYyzS7C6KNnPRwyALAuYtxGqzcmkGYadaqK23FKE355jh5oDQVgMD6ny4tg",
  "key19": "5f9an99T4xf36YrEjEYyHsmWriYpqxyRNzvmLz6yd4zH24FoqQNMHeYAyyAR8HBJp8NGrjybtuSWe6wZaG6PnvpL",
  "key20": "2vjHvqZnssD6CMGgfdFpwMguhjXtzPpcUNjXaYQss7YXY6vEtTXxEjibNh5ALr6H8TiGWDgDMB5hYfP91asc8jCF",
  "key21": "5ifGWCLCDzAXbX7djEkXBGdnsBGoGomSh9QGrs5CN3mD1HzFb2QGh7XBNyo3h8EMKnYHgC7rZkjwkox4T9zYNhKQ",
  "key22": "3YXmfxP3tsBgEL5cBHJkab24pRG4rnBpjoXswjjPh8gjsEcNCknuVucKvi1MWZ2nsGT6cdpTjjb8EoKvjQTaUAZn",
  "key23": "4uTJWbEoirnAf7AL6TwVKTi7uxtqokwhnJUU99FpQEMM7ZGm7vH4rFt47wR8WetyGk2wPZXrGZhoMoCBBuH7Ji3p",
  "key24": "ZfsB9HKZp2KQfP4VvjF8Umexvhxc17HWiKG7o3pBangb634CGJp1RpDa5W74R7A9tPW7suPCa1sR4iKj1UHNpKn",
  "key25": "28Q74UDK1wrzw3JxACRcfEK1cZuaYFEB3mnvWueWJ24YgvVSjc6SAtdL2TZKpi1c5XUzvUX4Wmnq8NF3WyojQz1Z",
  "key26": "2f5E1tp7ba7avKG6SM8278RzU13HsP9GB7i26CHzBKFkTdc38Ucvx4Ui7Jn6GGdMw7SoFVBYd25juPwtEcsYqFSQ",
  "key27": "2P3RMMBpnfoA9mpBM2UUUcXQ1rR8Dt99hUvutgUzt7JjJZvJKzGCL8mj2PrxbRugRcrLuUGPVHbnYBMsqHH2q9a6",
  "key28": "43i1moGBgRnFTwmd58wgpddzJtp33KNr1S5vVZX8Q7wRbpACsBY6rqPRqsLQVG7BD7Ys71MP3J3E1MEqpBor4p76",
  "key29": "4JbixVPURG5mTaxtsCEdTi5UDB85nGF2csNgJugFq5Cp9Lx5KcKj9oU7Whd2tLUeTY6xKCyUEcx7tnAqhrENFn1y",
  "key30": "Le7wALVp7aNpiMNH3AH9MAfNtSfA6A183JJFcqPpxmbszPb5C1gSR5JGWq7abvGSDGvrmHAvEgQAkVXgz5tRRcH",
  "key31": "CYLCm3JtX7L5ha5BvK64xkHiNmKVwXdeHSzWY3f15tCFMxeesHo7JSccwTbc5noPvwxUnczR4hvPwXfKCbhJ34j",
  "key32": "3R3eHqKnxYAaFzpDuCDvYaZWB5yjR1EyQT9PpZ1Rwangqod2tTNSk2sHBBZ6wC3UoUoY348F3yTp9xVfDg18gg8r",
  "key33": "kku3FcrURd9J1quZrN8MvnALpJ7ukNDs8PUjT1k4hMy9m66HJPdxBay34cuxwEMLpbd3Vj6FXFiwrUs1QwCeVyi",
  "key34": "3cMqRxQZLJ6kqTetSBA4tLRS2oVAsKnPvGzwL7BDqf27RhMuZ7rs5ZWdMap3s3VgnKdZWsJU5JiyPoKiWKqJfRWf",
  "key35": "4k1DtKzwNLYm6EGgcNkQNSANWpa3VMfMdGaphbA3RbxEw4GobbKHVypZrTzXZf9xDPkRGL8NUxcABSn2nazGcFZN",
  "key36": "5vtn6TVUPZvKedruayukr4HZF9gC4KwRE8vWfQ9p7k9npq8tWZHmKvPR9bNnmLAGLrRAHc38Yp6U8yxLGemhvX7g",
  "key37": "JcQUNwKZqjhfAgZqRjaFNyfXL7nsDhw75jn8QvnYc6MBgoKYP2QndNCwqQwCMRrq1VLE2qXmgACef3PBkGBdgnB",
  "key38": "365q5EyHQC2tzvRUShvEYfn7EUEsWoZTMGcv9XiXFJEwcJyv8uGQQ4B335cgL2t7efgnM9ES1SGiD7FKL5k1iPCm",
  "key39": "2xLHgBLMb3Ne1njZUXr4BXhWJ8a1U2Xs3N4UCGYN4onuwFzcT74ciyVyMtbYJkKueJscE9vLKPGSFbgca8CKrb76",
  "key40": "dZZ95yQoGZpJapTrmaQJw1au3hucaSdq7pxp6e583Nt1aRuGwxaqrEiVvenf6H5edHmxftZVKMWnKmX3mEQWGX1",
  "key41": "3wteJd8egv2vTijTnnzjLeDoNEc2tK5m2UmE1z17P79ywnwVY8CbqoUBCCs8wkxbwbZKsaLCMs8N4pxrEQjwBCtM",
  "key42": "soQoqHA1fZa5xFSceKskTbwuM6grKZbFC8aReUCvap3D6KUjWii1MTxFuxBzkGu8jvxtQrZjoa8pE3rKpSjD3CL",
  "key43": "3qk42U5FeyK4xp4R4B8wvxMwKnBfHLied7qXSXy8hFy3EjodXi32pEgzRMhFqQ2ftS6BFVXLhrKgtL4NmJuZSPx6",
  "key44": "5NFfimXtzKqvQcJmhYtEo9wL175iS1m81E9xBSAmuGypwMjJuNBdshVhvxuZM6x4Hc1r9jzK8CduLbfYhcCmsKAJ",
  "key45": "4PdiZedmghJiU5WzZga3xtLb7fpQbEt8wpcoLBjg6w3v91z7iYWhDseqtnLqsnPNHMVFgSnAviZoycrYH2pHpeJS",
  "key46": "36uRSNUmDpBaKQHTWgsTVodphZXSCigr279EGB8EV5xrM4VyfxN3XjGKBg4wRHDUN5cfhEvYG4rmUXcYnLjt7V79",
  "key47": "38K3LzG4yvqKbo2e8SWKCEV2PRCCYWKPVbYV447tJvAs8F1kiagzzwqRnehJwt8759XfFq6ZqngZbjKbJb869Q3z",
  "key48": "YCULyRPa2kFd3uF2hDaRYEFgWBZyRdYzhtTXfYAHaBvwrRCQYFKZV4sT1QhFUso2kSxNhmqdrFEKFd3n1D9urEM"
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
