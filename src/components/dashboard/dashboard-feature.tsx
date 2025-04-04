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
    "5i9KqMP9Ae3LDUDogQnf5MBCMtqxu836J22tvdnFdVP9mvMToyrvRFvuwbdb4Kk1YCMkUqL1LF4QAZFaoucuKzCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53LqPF3KtTLxokNRUpq28jZvLTNnPLNzvBvwwptobDpMJa9TJzn5Y2Uok3MxCoBNUW6oiE2tbv3A4hWdSwv6AX8E",
  "key1": "5RQBovhxBuZVPPkwuB7i4iTZMYtqMe4AQoGe94WvNwzepx1ApKx6pmnQY7WAx9UPwn97UhTMs3GkQJabvscDRars",
  "key2": "2cVYZAqctmKy2Fe43RdGUTq7iSKjF83JRe1mVn58a5UeXwfjYuiqw7ZeXN7zERcxT5rVqbDaVe3rK6f9YDKgKRbC",
  "key3": "2DypufuB8iDCUuAxUGXBNYBQ9U1exuQuEJj7TDFmX7DjW5YTku1yzVS3JCtRTHQFNNarfJdoThN63rPkbyN7g3Ts",
  "key4": "FnZaD411FMzr2KuBxn5HvShcKaQDjJ6GXUVCbYoZyhjr3TQjcKjpAPLuhuWE7jM5wtkWRmbqxoQ5TE99DVuYUPG",
  "key5": "3KwFTeFh5ExePb5Cq3y4ovtKXd3G5NeQk4uMAXQNyr4eLFm5zkeHfqmoe2WDxu7yeb1tKSD1H3VihJk3KffzPUoE",
  "key6": "3N9mEHQH5wTJ6Q7Xi6MHDfnKtbF3Hvs8zE1dqXLd3njAG6wuUuqrA9n2TBAaVxJydBPjtFGH39aSFDCkWsGnvNHb",
  "key7": "HTG6kh2ocvUdUcyutjeGNpmhaqJuL5HsoraGSdc55Y7zSU2fwkh7XZphh6cyA6LLXd1agqyTmZoZwHo8PvbiQHd",
  "key8": "2m6D331w9hZU4vjtacYEtpRF5vvFmh8NPKbosaXBbM4LkvUp3PFLq2jnt6K6ZmobJ6qsWM9U89uTXREqTCoNFa38",
  "key9": "3ggqfh79566RdBaXWDDW7Af9u1rEmwRZrzmFkskhv6AxJDNp3DpzQGxhvNHydP3nqqGxzmgrepawmwaUNUXYZt5m",
  "key10": "4Ryh4HxiFb7JDcW9SKz2pMiZ6ei2G3y5t3maeuaWVxjy3T5NZk6UgnctmTugwTYbzs9Y8Gvi4faqb3HTPc8CYn52",
  "key11": "e8FBCeAd6kwMvUhs3mes5PcNZtZgj4G7XdGKncu28tNs9upCbumt1jxM7ArtgXiLuvRSFHF8YmSkW4RwpfvE3Cp",
  "key12": "5DKZaSfmxSJ3irBT3jD34SGFgfUGYVHrVuej8DpSduorP6e51CBegoSiqYxv1xXiJvs4oiNY3bc12hVaWWZ6Tf36",
  "key13": "2VwN4ndbBJ97WeeWaji71WRcqEprBNXe2YrDEwN3ZCdgUxdgfgfyJWkLMRhqoyScVAsnoX2fWWJ7z2dtMDdLRU1U",
  "key14": "5ZAWGYRQKwAwqRDkjhgB63XYMMbtCXSUeHKmFmT4YdVsLRFYQ1G6xYrwjsxFiGYknLmeZUDTooBZMmeNVenXreJw",
  "key15": "5yN58HMDTAgGn7hJR3rvEpzABjRUoQ26meYz33nv9fDx9m8EJXLbETAMzx6EknGHi8gJnfxAsuNjWGzkpqGTLQak",
  "key16": "2c6qs4HXC7RZEcsrFngBH3cK3BjPJmcviU5zrNzZoE5uxTJx6GNV7TCgofQqwejiHGvktjpmdCkqp7RDR4SJBzN7",
  "key17": "62WRtYDwPRYAZFcoF83hNdHPnm8nutZv2SyYvBv1gNSio8irDeN7nsxV7C4i58PVT5QFtybkZWtaDTs1NsjQUjau",
  "key18": "5Z1zmd3qXDUhKnTNrW1Tjkg9jUxWum24etUh24XaxiELzoqrQahKGueoiUXyfoPkF7oVjgSvhm15JfK4QApRgao3",
  "key19": "3PeSkstuJ7dVFLB7LWDejb3uLm9GKnJuVRnECtvNBx3aEkFd7Q737XAGK6sJun4cJjVxVXpFGNSJsLMGwkjmJAfB",
  "key20": "4w9KQRne5tUPan9MxuyR3mmZzp66hvEVV1iqzS7P4hseR2gKaKXxT6frW6iVtEF7ukdy6ggZSpv3GgCEiSMHg2xM",
  "key21": "hLQDNxABaTWLpWibgwQd5e3rsnpSW7ijhAFHcvfQz9fEtFWbzSC6VgwsPdakitmM1XbZgK3GFH7c9Yt5opL96PV",
  "key22": "5JVsLXoUbYBZWrYLmGdGaPYVhRzkE3gAb3mrXT53Y4YrzCihgLEtuaZ45PVtAyrXdGAZfWHNbbByt3JUFg6G7enZ",
  "key23": "66Gki9mCHKVAziyczHjpAdqYZom2BQ3JLpFCBwghcHVsU9tok4judjwJhiHFrTd4gmhCRGBhzkZJByhJQhNzzBhj",
  "key24": "mvDFY5YhpP5MhKcmP2zjpEvE1mZFYmJgffs9CrixvYfcpzHM4GedUQN2bUBbPPhmyThzhjxQdyuJAa7qJfGs2zm",
  "key25": "nhLpgDFJN31jkcZz5Zv3sfjAMcS8EtyxciTxUwAckvHKL4QkE6mb3qkhng6XFSpYo5m1UC26C84HvSCjkfiQwrW",
  "key26": "4wX1duhVjHPtexj1kmYMv4AGKct1xLrJcCrssgGJxdhpZErUnpXuuNGPdFKqpd62Hv1X5ouh8zYETwuo8LcgRuWG",
  "key27": "wMTnsfwNrVAqkpSBsPwRx3jnSWbvYNtwdWULvjzvnMGNpE52qZdA8gkRVM7niHLntozPGgvtENbmRVUYF51veNS",
  "key28": "G3bKM1SxHzZB1KfbmUT9VpXqgsuNz2rWRz98bsjJsqRs2U8yxLrjSo2oA9YGhvMn7z5eJWXreBRsMsn8d3AzyYj",
  "key29": "5kjFkjHNVocYn9VYeNTbUdKJh1theedJ2uBCNP2PGLDQYZNLgS2ZECAdoGzuudYcZc1knjWi6QNdE4m5ywS2k1kS",
  "key30": "5YVt6Qvj3buY3gLzFAbQbRNyzDbRaquRfBofuBqdw4iAW2tTW7UZrzwGuGtULtjsW3LypTi94NGbVh9h7zDsgfQ7",
  "key31": "5FW9v86zWikw9UXa8dhxXXZoDvHU9ngdWF2p729yMtRYqkRdcXkyviuNLvjcGA9Bu3h5zvc1bZqb8p5tUSapqWZH",
  "key32": "3EaR1zTnZV66vPzow3qKS7jYExtCvaA2BiNh938pPkT6ABU9pNujWvDRG4Mntji6wqkz6p3HePoo2MmHcrD8RS6w",
  "key33": "5Aw5CCtpD3srDXSXFdEAvQXZPNgKNCGjaECiPhaQhEe1qXZ7QgH2TcpJUpCcbf4MHuNqZN3HTW2oBhFsTkDyME4H",
  "key34": "4F1pff3ciQP9BaydE9wjhjgk1oewkWGAsLp54nMWHLxkQsg4o73aWpiCe6QRdZFEAF1FkoBccYKgZPbeaVLyCxVo",
  "key35": "4AnMYEmbUYLcoH3vG1UhMsRZuXgsRpRVwSPiZKBHqVhuyJXp4uGTqE4upne77PouYhzuPnfLfNvuacV7aAqtXK3B",
  "key36": "h1uSJCGHrNbf1HSH5T3N7VwoBBbxspfU2EypYxJ2qVhvz5rMyu4dXTaAesuV9c8TeNNETghCGRwzNkxw3Q8cTqE",
  "key37": "Fjb9jsCsfAcrmBKEkEfcjFQtVb9CjEMd7qj73598EBdpzPnm5WxnJoe4eNoC6FPbyQHJzT5paU9S9Aqnekf1TK6",
  "key38": "4e69J5aohcu1h3SAz29QZ7gCUzrKrXraiNsPUGYFFpkLoG1AjsHP2BF4rHZHjRWcxvTeg2LisYRnpsW9o9QJ8uBJ",
  "key39": "5Wmn3DAsj4FokFRCKjA175G2mJji5Q8aMan31wLTwPQift1313vJeVJJAuTJg1tGpJ5EDqRHWcDymhRE2rgikMtv",
  "key40": "3ZmcjwDnbvBRQHjb1bxDDyx14bYdFLzuFHGGK1XfJNjrT4eRXVnPK3BYghGHE69Scp9Z1Agekcp6E5sYqutmPKsB",
  "key41": "5kf42pisWiXAbJzz6Niq4sX4bbUVgZpZhQSLhgECdbMXUvBBQugZqiiFms3YTDv9vRD8FhKNYJ3DYpebpwY51xU6",
  "key42": "qHxRPDNs8svGpvWDnBVdJsVFofgiDvJ3ETNYiPAQTdTtRDVeesjhv2DNjecuUztVkMuJAZveWRWHfLXjwdSbaKB",
  "key43": "2zVpPyBpb2VoCcELbTBQrXKVA76j8XFMgWa9FNhZKVgjJmzgKJYTu5c34jV6Prpncq6p8jKxstSiGWjgK4e4FzEW",
  "key44": "4s1EshGm2G7sW5xuNbPAJmWdEuwS5cvNwgJ5FNFiExSRhkuxzW2LMDMefTDVcJBK1n1RyNa8YmAC5gqnvk55wgxK",
  "key45": "4Hy4StnbCP6cxAjy3UK7GLP4ZMrTuzHhsibYghL9cVU4emGgA5nFrGvoNzLSYUWG8J8bBQkLkFPiFaGDey6v7G46",
  "key46": "3VM6Ug1ToJVrE9Q63rbb9bHusNchAtzvGGKYUHFUUJZPQiiZTqq1mz3fN9be4P63synSTSeaFQnUBL83pT9qKBp9"
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
