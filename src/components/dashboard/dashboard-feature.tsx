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
    "h9dY6jVQczeEbNyGmbhKv1NzxVUbxADWe25rRKp4o5LJySzkk8quw93e34aFWqkiZPU8PcW5ZcVHVhwnE5V1rCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Z7PrxyqxzXLLhiqjNNNs2VBptvA8e4cP4tTBieBn6PG6sRihdVoqhPviThhVRVsWn8vitNjfWiBoKvgeYcs8BW",
  "key1": "48wg7kibMWjay1MHMzoXv7fn8JeurSFX3XzXJKnEnWZVKnHoXMv5Gun9qGcWwt2NpbsBj7WQVJz9rykL2KEgYnpA",
  "key2": "28qM8FFcz9k8tBj8dUF7mjAA56NffFxaEu5x22xeydTsS6RLJgjPuf8TpgBqzqt1gG4XzsH8tDCTPc6fGfAvWFtq",
  "key3": "669zcNvfc3o4MjZvQC1ahAUrr8m3hEsEoVRXZacXZyjkFGTDR1yCb4GJ5SeZUj6HiHxqEWu1c1imh9u2Nui3CbXf",
  "key4": "61xJWWQRfnw6JYz1nve3ytPkK6U4hTMeQaqUZgufo7LZhZeV37GTXCkn82MXduzMTk6YTzPKYpoAC5UXfFxMqYTy",
  "key5": "2pjVaRNPBc3ahnbBqf1fZwkRHbT43mF6RPbsM39g53p3ABaSDVSMbZhwh2YK3ZYT2xzDXiDYThqdZ47fszbUNqhC",
  "key6": "5EdJpDfFZTUrSd9tmuKqFbzkrqUAw5WShVb67attLj6YwbovYUfj4Myk3VhkYbebbJ94HwkMKWR54nitJyoqRNTf",
  "key7": "3R7BKNwnhWeeniVU1gF1d7JDb3iCwAXWNm75GKtg5ARJ77UNjjx3KRWLiqoYoTQ9Xmmu2iSDACsiSSn6NnsFq2uQ",
  "key8": "2tr4qcShhZYjxGk5BGB8pxs74B5ejmLC7AdYAUXWNy3PJMxhGT1GJbopfumcyR7rrkMzUNrspc7NRtNPbAdVJXxB",
  "key9": "2t7WRPqTUVv7zuTbrRKpStf9CrgEgtu8VS79Jasim2L4C2ZjB3aYaNRN7rNqY5K1t4Gyy512f5wCJzfKXkpxCPWj",
  "key10": "Sufdec3EecCyqRY2NHnRCpUSVf5ANEvbXy7kRvGddri4TtaLhp1hzsnESvc8vq9gASGHAvufwEvcDbctEz2ZNWu",
  "key11": "3pKeC5o45Tk4gY84zWMwAKiYHTvhJDiUiRLQvV5TEcrY4dHUYukFAsmT8aQ5xh8mN5JL4wz2PtefdvZXKRCZCxA7",
  "key12": "gZdyAznJfQsHCFG1rGhK11f9ugrAuoUtFdJAoWApo7UzfczhAajBKvg46ax93Hux3BkeearriLrsPsac4pVLgPN",
  "key13": "PTLUkUSobUBPQkiVRh7d11hqjFXA1ZTBh5tfhV4KifZVSjWL5NxHjg1oNmyj5EwT4g5g7KRezd1zF2kZrDfnpzi",
  "key14": "2gnod4eY7nRHgx5ChS3vKis5HUn9w5BB84gnhxx5udP4e7E1p71NjFJfYcZaPdAtAnQc826wnZ67P3CbyEUcbxZB",
  "key15": "5ryQYe6qWL9wr21TJBBkJK8eBosDEwp7gCeN7AEGSpYBJyJP9d4Sd67LL3f5sJFBrkAst9nWiTU1dhxCyPfX9kdK",
  "key16": "5X5bxTN6bXTadRb1i71P2QWYr6iz54YZ1Ag8PyytYbsksMwK7JNP7DFRPmLzBHbsueVHHmcdamJ4Ng1uXYxNTb4W",
  "key17": "3QDdGzRq6kusTKGHKEd5kcWcAEPXZchzCRsVGGNu1otiWeMyis7QUPAk4fTBrUg6oLn2yy9TetqkmfDuaWeqs3YT",
  "key18": "3hoMghTQcqFrNKFZUTPievYBcjDuveWqxR3tyvoYM3fPRnWYiYRhsBjedCRK9hfvebH2dZFbHddiAwKXbWd7FAef",
  "key19": "34eow1jn4iTSSLhwzeLGtiw4AyLBy5ou5gByVMS2U6dmKwXEmbcigTRop9zCyQDywj1LXpbXrb7o9GJFMSKMhdrf",
  "key20": "5aYPMLwdaK6yD7S1Vp4RPK5szKbzMvYL95hNbmMiGd9f4JgJZ6qk4QSnNLSmkycpNQUdF8ijQZKSu4Hb9Veb26Wt",
  "key21": "35Xg8QbSL6Zq98kw4NCzqn5xQF2xxfMB88f2MA5E3LPcpnUWtuhuGFQdCNL2c5Xd4Hc23QZYVZA1ME6RPEhVZRBt",
  "key22": "3ugpjBpgjjRAkb5KysZH6XibcmM1WFepe6fNAJSXGG6KWsCA2WzHoGKRfLzTqZ3QhiPzmJ3DVcNNrfmc6FWsTfJL",
  "key23": "5PaGNpXhdkTAMhwRV5xAFkUJZKqWsZHwcfa1jFNY2oAAkc6LbmCEwCtd6EtHvETCXWy3VZh2zqrqNq9FQeSnYNz2",
  "key24": "gu6D5RUF5A8av4JPG4fTrVXtdTU6BUPv3n736GPh9669pg2BxU2bEUKRGnM1pgQHiiFpiXenybVsH3UgfUeakym",
  "key25": "4LZZQki6MRn7KqgYmhnUpUHfGwnrXZneSdxoe5svcahhhqdk6UbVftgyGUeqXQ53V9Rc2ALeSWu45jNSGPWD387R",
  "key26": "5ovXN3f5JdKRfmchSuDqZWwADTWz4XPVCx1JBmBp8UVM8cVzJ3fgQJq9NeTN6Nx7fxW113agnriKz5zHx2W5w3uC",
  "key27": "2EiC8CPtxWx7JoyJo8cFCQNPCAxHEVBZhjgAfUXUvmTQmgB6F1sPB2aRnzYTAw23AiQVoVV5gQtZAHzzKzut8cY2",
  "key28": "52f3tTJ7UJTYqFG6kAT1uj9bwjr3wYYVi2cpkK3kYKW4NmVqUpZKzFtpVkxyiP2n2anivrpcQjUdN6QFADAWEAnX",
  "key29": "2pjaYEFgvMcAoSrjNsen3ftLQTQVNxBbQPtXaED6dwzUbFBPSsqLeV6oSe2ea6hVSWmnzhw8dRRs8LH84Qh9a4GW",
  "key30": "5Hxb7DazhwddKS6Qj7so7Gc6dAeCTjHgGUUg6kN2p7TCjt56iRmXQmpGx2ABZB8Z9DoGuRbPCHE2HVzgZ61xd4CH",
  "key31": "YQPZQE6noD6wVPWs8ZU8cdUttkd1GsUkQoHYehRiTdfKyXznxNB5X3CL5Q43yt872bNGDnCpQRNgXSgQkxjtKWU",
  "key32": "2DmYhJXwinrrFUGVbvPLLsEvfwkUgL6MjjATPQm9BGLUfwXdjjCQZzBWpaVe2atukKhjNiEJm2z6mZiY4oYDQWpt",
  "key33": "5hzjgmjdyHLo7ziyadd89pdtabX3CE9EhB8iQB8FCqnwLjP8dTuavCXbdwgwZGXQJz3kXz5FDttHUsBwRza5VBzi",
  "key34": "cVhm8nRSMB7Xvhd8C8TaYy4vjSmNinSdLarRY1a7bH2Cep6zygU82ocxxYo7ZmLptgX6qfd8fuX5BgC1K1SbA6o",
  "key35": "4G5NY5zUvH1tq9xYMbtLWvu1Gr7KjruNtqRT8u6DHjaAouzQhwbgSesSsxVkve7Li32PCvxD7wHiZrmNSFqxAsos",
  "key36": "2bujR6rSXn74F1HXNKfxjyWNs8D6bpPTU1vFwYHM3mocJWf9syUzpCte4C3dfAV7fhqM4pcd8F1wot4guBo7RJcF",
  "key37": "28YYSWdoRuwuRZTrMBQcfjo8g4dVmpBa37bDQQfqKYoT7snQCmAgz9oK319a2onPN3sqVjiKDzLjUpeRsqCv3bvA",
  "key38": "4sCsxVPEEp6sfY9itqwTteJa1ZogqLaJVTWBAaKX7SmysTDSS5oKD4R1e6rRaWJXKaazudAw2Z3AxtiNnZ2tekMY",
  "key39": "4gw2uZmnw3bR2eHNHG19LHyiMjfqFZP8MrcnFwuTgn6uuNVm1QrMZFozYVnNFU8tqQJnWGk1dmpxytJKem4f6xHx"
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
