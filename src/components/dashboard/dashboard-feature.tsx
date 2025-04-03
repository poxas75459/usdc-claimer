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
    "2V8xaPZDXdJsLnnhTdJf1An4YvDP8BqJJDNVz68uKogrfctYmAziWkZDD6qY3aJV57dJhM8zBionjkBi8w7dSfAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zEE74eB25fcshffV6kBr3XhzBUqBMfuNAZhCzwa3FQzUQDQdW9QNmEhQeMwZUtkkVCAZ3X6jGG9UUphvrrR3TdN",
  "key1": "65RihBVkMPMEdqUbjpVFQm3reKQUndQzCQRDXzkEPhZHxefcV6pnDYdG4CywVz1dWtZQy5m1MZtvvTqqzJoBK6K2",
  "key2": "5b8rtLYzKX4zgSQW7gsa4coGoKCdPzSLaNwE8vcAVVGJTzxr4hk1WZ6gBXjrurHibjFRHLjftA8aeXgyq941HBbu",
  "key3": "24rP4DvVJ11zi3kj8vPgsoxvJVsCratkJKfwwHSHg8JUQAtxWgTKZcsnWWM9P58eqnxFUYbwtAs2PqvqePvsGuf6",
  "key4": "29TAmiSHdhmmggXKxHQQGNrCLEcRhgDWU6HzbreoFCMgZtKsGucpoh9giXkZ6pg2H1QxMhJiEx8iR6X546jdCcGV",
  "key5": "3GWg3RqKHkDQQnR2UAjbxBSqtUhsDgQf6e4UKPdPW2yh5AxZgdv8WLw9kCmbfSNqrq2DHXZhVxcuY7o1T7aF11jr",
  "key6": "3g3ZMbSnraic7vSPJWQDXz8x975LMqWFGre1oC9e6BB9ipLJKHJSS5GFWuyB3uzhJBm1HF4PD8H9q1f2vyKCJF38",
  "key7": "eqBP4et4LmyM17LkL9hVNyPW2N8iSZ2g1jqQZ7TiqBgQqUThPhRqCWsfmbguX6H9pFmM5PfEuYppDZ1MV138vXr",
  "key8": "5upyZsZNi3fAhbyxbTtr8pkqHjxKRHG9PhAqXrCcq6zPXFaYFT4SeSkCK9JzboZcEXR4wqZSyJfEzZhwNUmibsdL",
  "key9": "2JTqVV5zpAvd24y5xHMuA31b2XQQkxEvSnLnGm3YtAW62Z6PSYoh2TX4Ck4tKo7dBfLYCp3hCdwz5ZU43rE4AzJx",
  "key10": "3FumFf7Zi8vMnSxfKMwBt4E7wGKErzjuBoPiyaBa7KJym6L39VZjGW9C8btiX6Xq7xygnVepzu4y6FnRDQafuhg",
  "key11": "44m5kvhswLiYUzHPnbiuKUFnzJWo73KNMJEjBJCLGYgvjptym6h98MX2dKjLQ2Zt1LrGercTdk7ciT1r5PT5aAo2",
  "key12": "4EGKXLzrPzqaWUbjgJNAKHjZNiPCTMh5dRCqcijd8QFBUToyvwaQMaJcXSvRrdS6ogvhrnT3eEidB4zyJjvNARZ3",
  "key13": "4udxwhAdmegMuuAN2Ebq3mG29YMwXiACKmM4YEER5ZDRMoLYZhWKRU5TP8heAPrPCRhewYu5nqWHjqaCDDXhcih3",
  "key14": "5rd75qScLDKove2Ecfkn9tCLTZWJGPgtd4kXtdwbSMPK4Up8YfZRzfDEu8SvPWZkW9tVekotbjruD4mTBtuU77kn",
  "key15": "488TQc9BcZdHLwRo2YVbw3qoHJRxQnsbSaBF9H2itrkyYDH8G4jBxWL3pdux35sJmLiYh3Q22RzYyicbxS3uWkmK",
  "key16": "2VUxg4fVdkT5GKZsNoMopn4Xd3VtYGhb6JYz1xA3VA8Ppvg3iYnG4ZbG9NydhNk1NB9T8fDNQ6mJiQzGwkibQysm",
  "key17": "LbKM8vWKysGBT3t66H5x1K4sWb1GSFM9hTVVxiA7XDZESNzj6bvneD2qaM6hhQMCU5h4n4z77fykevZUCuau1FN",
  "key18": "3QckMRMYzRUjny3AkLfUxJxWtzJcrbeqBDfiTLEEGXu8tEZA9j9FaKAZt2wwFoveCkLnL9vweE9n4LsamLxMSS1o",
  "key19": "pzn7d286o86QAPYCe39RSfGF4TXW676Yc7VyGK5EF2SYVKeZpJLmFkD6V1fL7w7E8NqVJXaMpEkXMnAoB8HnuhB",
  "key20": "4r5AAqwJvbK7Pnmz2RKpnGbgGspSM9dzjMdR2t9vJZnJBzJumwPqk5zFsQi7YvdNiTXoNxTR4soj3R7nCEsXE2Zr",
  "key21": "4GhRuUjRrpRi6eGyNoMkorYor5RkdRmxXcGNWrh25FvZmVwBPZzP5JpY6Y7sVX5uMZ6hZZqLXUM4ec75p5grzTex",
  "key22": "2DLdfBJ7yGiZEZR2DW73WQrRfDyvzArxDZP29Xwn6959wiX6j2rPdi3kuyn9UkNGamnWF54jeEEevZCburWABCMy",
  "key23": "32GBG6joK6VzkrN4RfTHmfXfiR9p4C6d48e9Yya5e8KVHGP5cgfxxUFTGsj1qW2DdJ7hg2gq8rnjWFUKopacMxsX",
  "key24": "3XyjiZrVfRKUozPE9uKTsAi6aiU2V2aYY1jnqoRgQSUyG5QuhWT4A7FQqGR243eFvpZEEEtrNi9Ud11w7J2vj1Q9",
  "key25": "2VCLePEewr46unBftuRLwFvjkfMHbVbzwaWoy7YT7ogDxuQ5FZT8Wd8u8oPZAcpa3DoEhKbnTQk4UiNUWCseTJVC",
  "key26": "2a5RHC98d7E5VSA9se5NPnVVDqLABQaK78D3f1iZuMPoT1oW5NSkvfy1WdGH8ghqe5KnP6LGgdo1SedUFuUJqnfC",
  "key27": "26CGGFtBZSojBfsY1qEGsQcq9Zadp8qar3TK9WDArHsRDfBt2N9sjS3NsfAKwEDpn9jABxqwx77XP8ZJBACDYkdy",
  "key28": "GvbyhiRs3mS9LV8AM11TDXEPs43ZSH7ZTGEaxt1fdPWJH3vRqdmk6Kzb72cZbtASsrJdF2Z6kwRbyK4UTesTUUs",
  "key29": "Gem8nXNTMAtzUqkZJrVgzpwJoE1E7RVuuN7QHDU3dk26h7fcrPKpptPdH6egktVqSUpoowiK9W2hyk2CH6muptR",
  "key30": "22pkkZHPeNLpuLRwBUDAk2KKbvPyphbKNEKuCt9cmw7Z4USrgQBAt58o4pY8YsuhL3ikgKtNEcGKRBUFiokwUfZq",
  "key31": "CCuKujLRhZ9RSoipTNrJ9tZ4x85xmDpAVs9qeoHneXfsPqzML8LfdTgCWDDiv5FWR2N9Nj557eX9DYgQKPj7j1D",
  "key32": "66uqbnYgKuGtFiLbWLekeBExzZro4nfg4YhJjD1hyQGA2MNWx6PXMsX1EURAmVA6ywsLZic4nCnrkC9qPsKHeVXY",
  "key33": "51fqr6PU7f4eQ4MmjKB7F6dpXxuk4HHwyZQGvLoL1g6mBEGkGu1sGsKfMRvkw4zYZRSfX7DZZRKNWYFQaYVg35mq",
  "key34": "nUDcKt5qSTWKVZ5KZFW7aTwnJbRKN5xNNsBkyR38PzmAri4bpZy6rDQjuE6Ru1zsguRsJdxuZ2JrEsD7aF2FzCJ",
  "key35": "2gJHsgKk68K77cFtJZUwrH6hBkkR3baH7ftzZeXAz5ibLdCvetS2ju4hxKhqnWb9fyzoXGxPXBKnPctfusZGceAe",
  "key36": "3DfWYso2N9F1UVH6zWkqkRUkWUU9bPE4REgAtfzwV2vk9XJGcUSdXFcXBbmNxoXGDFusRnyrSiY5qYJwJGUa8EZb",
  "key37": "4gTcL4iwBsmdHeDWMdhdu6QPrcV9BJtYxFbBshvonCr7STgPuF7aUoaiksXsrKb9kegHieMJEUSaaFJpy28Z75aP",
  "key38": "5R9a3wDZYxFY7zME6nBBdd4bapajhePWMPmjYpqwrmHTwzQniupBrDncNbUnbv9NBmsJEC2C1JqssM16WERHMsu2",
  "key39": "5XZzh8YmVk96d8SV8nZmGeRGKwR4XqFTbiWHVDMaJt4pKgXMqKwa1pBp6XS1tNmZNUYiheku8pi1BN1BhQz9Zydp",
  "key40": "5o4ZDTvdAo1uGqGRF4GNaUrh6rDQiWGEPiD9eWiE7WB2Fhkikra5Yt1HBQBQyunApSNJSXQNBYNveAyfnMJqe33Y",
  "key41": "5JZFMiQ95ndCA6KiXNaLqGMawCT1HAgGhycLTVSGAvBCCUrU6qzZ17JcaHuyBAzK3fSPLBV4UTUrS4cv1VeKtn6j",
  "key42": "5SMeGgPErrpPC8cVJaFoKSgqh5AeBLtmTujakTzH2U38p8hQMdkbZYJmUZsRG7BEyXnTvzUbtuJnwXVRapaHRa4d",
  "key43": "2B2qw2U2DwUV3VjFvgTRf6x3hSCPiuxwzQcb112MqsoPjGEkK9NNZBNeHzA5DsWRazUSAerknxb2Cfv3pxu9oKVA",
  "key44": "5JckfVGh1SVhRtZsKZBu8AKbPU8Anptsbbn9ZdNXJEPUZTw8Knx3XeYCWuohtMCJdFxVzPViukzGiJAg39mtGWs6",
  "key45": "x7sfZ8gtLL5Zr9HnmBUSCbD7vja1KQd2kMHSnkuEdpmpwGf8S7FQEjbXPw5r4vf3ysDAvZkYZXvf584wQz2GfdT"
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
