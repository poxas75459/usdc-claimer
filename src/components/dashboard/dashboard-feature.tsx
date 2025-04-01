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
    "5jfC8gVWAViPSHWgaYMKrUnec8yGXYJQHCSrwqr6oUkPs1NoiZhFpW8sGahHWUzoBa6EVFmDid5aNUZHvMe94ob4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iaVp3vDtEVCj36u5zRdgbtuCmtYXagPdJhqP8G8CyAZ7KsksdHKe5Z1fwwwt4rLBBRrbgyWEQC7qmDZtxA7sVf4",
  "key1": "2iYTUohYTPAC6NhQFBPGM4gcfK61eWvt68tr5gkk1XnLLJtZ46JpU68EqRQFzjbtBBrW4xkbPdzqVub11SCCEaWP",
  "key2": "xU9trk4VxmYLGZQZVmcPTmhCNzakiEvafL98E7cPmAaUL7FMUYATE8PyBvqNd6XvLE7eyAMaNE8oGAHZMdFLYKf",
  "key3": "3gckgfNvv6S9U3JvJZFvztK3vtjEzfhJxxbzq32Yih8hwrxdgWWUFjshNaV4nd3hJS2rBY41CkZGGwZE31EwNV16",
  "key4": "7P5PcygeXYThcyLkiKsHXH9JyJW7CSHzcgUy56aR8a8PMJWsZPqchUYy4kVZvqzT4oJ6Ur4dcJFys3oFmDVXcuK",
  "key5": "5GhCT6e1UxFXaYs8dG99XzBDW3nmsfoqdF1DHPHRbZJj9dRdfznV2bJQXRvyqvZiqdFH3wcvAgRjqXKTd9wXriYH",
  "key6": "2wQBZBS7hhcsJN3QSdVqDzQfbf9Ee2fkXgGzg97Fvncp5JbseFDGg5YQKj2DME6iAdFTKdKpDneggSazA7KkRUaP",
  "key7": "Tjw7zCic5Bg9hgcT7LAMmUwRhDCBTZXK12t4ogsqemd2GXGvoAV3vNUnP4ZAfz1CD1GvKdZa4bKr9x6Wek6yUq9",
  "key8": "iMQMUPBifc8QzyfXtG6Ybdh5Lvv5xGwojvNZ8D2PfxgnxDPPvCRgAEEEzKoeRHDgp5gbTmUr8y8SaF6Jq6mVSV3",
  "key9": "2xEanFBrUhULeC8ciJM97TSNcKGYRfdBXE1oLycXDwizrHUBmu8d71EHN1ECuPuxorxTmEsbEq8xT958uk1Qbao3",
  "key10": "4A6UgQ5Yu5iTqgdbPUTjTLffWRmiC1EPJWMpHG6xh5NF1BA1JtNcivsQb9tLWYLWLGeMDoUS9igVgdu1AZ6HKbCK",
  "key11": "3PgmefNuMX1J4oTZayLCujcAARYXTaZw9Gp2NLPND7TDXEgRCMerSXMcCRUW5Gg9mySdY7zCCUtBLBDfvqYPqKMw",
  "key12": "2nURiNT6GsrfjY6bmC7LHUG2KZh7ogTiEEsJym3S5sS7SwARDJcjMoK3P1WzpVDESbzGnmbLdNbScEwETqyvReFF",
  "key13": "3Acav3wxyvJj9qmZ8U5EC4wLyuTxZTSyxfs1WTauaZX9c3rRDFsi2HFEEwymwqeUgPmxFbjfWLakUHjzXbrZotJQ",
  "key14": "3ZgTWXedwZ1ohEqfr6prCqwmMio4sX8rgCWxF81pJmCLZyAVVaHxMANQVoJ5iBBEAHobMRE5Nj9Au8c3oeS5S9QY",
  "key15": "31qsaY8mnRYvWy3dxGurfWTPksV4EGYjtTwzj8ZTpbaCwwLAbvxyxKh2hriHFnGRkvEX4GBha1zjgGdjUH3PpDZR",
  "key16": "2D4TX9rKHhZkN3ia9DSRBCMyRKtfKZN5RLXVWxpggBG19YqJMdVeK5pABVuXVxJHoa8SCdofFm78Lt9QN1QfoubV",
  "key17": "4UDSvz4zRAaM8v78YcPoHwgKjxxTvFsJRG1jGv4hJ5ThCNrEgA7UaT3iNbvB1jB2J2Qw71Bk4UT7bTwwz77ibiLi",
  "key18": "2QnyvsqRZeqUuxynUjXUZ6UWrS7whScdEfYReQ2p5HxdJcHqY7cMbZqVDq862VcxKnVXhWxZWiyZ2vaybSKAsChx",
  "key19": "5drHw2s7RjbQ8rmvdeiEe99dE1iUCvmaHJX7H4svHtyxTb7HWK1dRvtN9DACLoMyrWwCvj2zvcuTAHwU5mRG3fRx",
  "key20": "35AQ1cTgR9AJSxcmSYi5ECcLsABrJQaLeKqUJrdUbADPGCV6acZVegTRhPjPo9zvdSopqrhZL1qBtKLZMSMnkzGk",
  "key21": "66DSBgyeQWZJjkTp6ibQFiXdGFWED9nVwhBwSMQqz6cmFioKtYHTo5FrJzFdJf9JsqNtKunAkPWv5qM3LtXJU2eQ",
  "key22": "58QHxHtQ2e2jPzQrzZ17VS8SVG5Y2WAqPjEGMVrTYKx5jkL1kMUU1p4b9PF3jqchQ4mdKvMzZqLxjqT7eKH5ogaW",
  "key23": "5Wv13ZZobxMkqgo8WPuQFeWkMLntm2J5ctsZsYzAp2b5JN9xAiCk6LQxj5Qha3H6mA6wcPcxNdz3wkEZHh56jQBp",
  "key24": "5V9c2LrNZvvp2XRV1249VCQJWuqBHsvegjhSXChgs2U7c3JjyRwLoJc3dAKGDngZ6FNyf9gRt9xF9C4TszBQqAxs",
  "key25": "4PXwAzXjuyUUJfETnJN3K6ju4FzKxLDLg5GEk1oCwgX4nSB1QwSmykzBBB7eQ5Rg4tQ8rrwJDQKajdXAddZAk9oa",
  "key26": "2dgfWQPcTMH18UX7N27Wb7h4wyNWL9mqJTfDg2AMLhXwyMo7WrgRs6jtQJZDFz8aamqxgyKNPQTY9x5n6qeiymhw",
  "key27": "4vp9B5szHR7L6c8pPCiV3F6ith9crMAgEKbXRFizCrCYpKWBVDVcFyTa8ZggHGkna7ZxvJc9nwj54NHjo4zd4N5J",
  "key28": "5xDsCQ3kvsYod419UCP7sNawVgDhYXgMHwr6UTCx7pd7eD2iAGKQM3k9WnaNKXLvADcSj2isyD6XhjZJxEa8TuBT",
  "key29": "2hBGxtds1X3GvDk33RRxFD4jFDXe2zpWvkkCpo9ktGuizcoXpcU6Rmnpq8vQSPyBwiT9CkVF8k7YGCMKFBeDhG2b",
  "key30": "5hudTjLMnF681DwArRnx3xXo99jYbWHuwSkJpeDjB99rYLSPGgiq62txitUhC6evtPtQmVzazjQRzCoRdNw1eGgy",
  "key31": "2WrTV64Kn93ua2HwqneJVqC3M4WNtTJb2AQAGdLv7UyHq3GkxgYfX3bq2Qs6QRoHRsLrDcGafJXbk1BVmcBadfJG",
  "key32": "5Q3n4RiQbeUBdJT4bp7FNn7xu4Jp65yktJGeEUpjVc1Yp87Yp2BjKTDkydNTQuGGjV3STb5P1MYcXdkF8gMRcmtd",
  "key33": "5HzQwaujBTRSJsczMvc6B4EYRh61WPSPUQ7abFkNzJvzmmPFaNvBYfCvgRQ8sTk25rwuZLDdCj8T9gMiTwAVqWqz",
  "key34": "4nLm7WWxyoTm6gFNhgg83pZb8Caw1g9W1aJJC1DBdME7awWvyHgYHx3RYMMfSPRyyuTK89LkbdpQvgkoRP73AmK1",
  "key35": "5D7TbNKZRAjeRDydCDMZgeFfSH49jVKFuEVkiUPzJz1ruqeKBQfFmM4GKfXe8FiDtmCFZ2moUExPR5qHyv8khWqw",
  "key36": "Foz1o2i39ewUw4JnLN8tYYTtcuxf9VzeMTKH13MEjK9HJNMRam4c4kz7GoFXKuHGoDd8oqjhbPaFXFYmcVuGiJN",
  "key37": "RK8Ngnr2gSoanBJfbvL3GSjG8MJDYUaGEy2eDpv1ES1hirXVqpnaY7iUr1PGfTMLU6WFGxe4j2n3PfZdizMmHTg",
  "key38": "SBhRSBtVk4xjvjVVDwNJqBiYTEUWZVMFyEM3DeSPZRgd47m4SCqnYy5kpTCQtfsb1YbrhhqpWs4mYPKi5rzRYDS",
  "key39": "2koDkm9zdo94Xdk24qy1NXxFovsGCqPJ9bAPWZB3Q8ayaDvVd4r8KwvTQevwBQgieaUEfohRGpcV1deej48c8wZE",
  "key40": "5EuRVt5zHiEHjY9N9mqbD9HCwU5heLDTPyxLJ7fyKnuM6sKhjFzFH43docUAPN27bQEFuaMLntpSGdCHmAhTA7qj",
  "key41": "34vj27TJRzXMCTov99YQmeWDcxbRwc32PpCdkpc224NPFNvpVVzLAeQGjnhJZ2bbLX8PxVdfzB5TiqfFg7oSqFwL",
  "key42": "3PaZY9iw3C7yzemnXp2UzwJJzPye8vsBmAfChfFrGDTb5NNdKFKA3EgMhe2EzKfZxY2LkaccqSkzEg3uJPtnXE5Q",
  "key43": "2rFsp6UxowL5JR5baq1zvDJ3pA5v92jUkRP3yVNQntHSBrFGjrUafA2NuG7EPNK7M2tnrxh4PHkiQdouy9AVwqyA"
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
