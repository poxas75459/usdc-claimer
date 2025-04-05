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
    "67DHL5pKfo5p8coW2mT3D5tYoLKdndKRXXTtENbrQT5pmKn9SiRMmoPAe1MpUhA8rpceCpqvw16eop6zU7VTK1y9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8W5mLK5z1ke58pu5tLN6McYYvtZvRwE6Q26VBzUSY8Bo4ANzprn82JoE3VgepEwin7RDHYL3RbddxkpExZRDdPc",
  "key1": "55f8E34aXtwdBnbSrrtWhwR5mKV4UeKHkEK2BakGJzr7txFyBpTRGCNgUiDwvVMspPKP34Ye4GQfsjzRJNSJyQ16",
  "key2": "2wEtu4zjcbASh2RFFxEAfEghfVwiECXSyGfzQw3L182PghLitqBgJVSAgZsX52zVeJBW6UuDUvwHo6Ek5DNy6z87",
  "key3": "gA6cZyq7pSQp335GmjnZNFqhFSQp3UfZEr1wvHVhAQL6fVhyVn48xzQqcpTHZoWUM84jQ9Jb7H4RPE6U51BFcCe",
  "key4": "3vtrozfEz4vyGaQCHUzEAzousD5TA41ARB5cvY1BGGNatxVhQpyZN5QBPf6nUT27iBtwKJcgofaeyhhHuZNTpT73",
  "key5": "4WoZuvqraeqjZG49LF52FLArv4RaTFK46PJMx6X45qwKPj9i6f2C122ehVrBT7dryy2dgj68TLa9TRwTs8A5cK5y",
  "key6": "5b9LHEgtt93XBuvuDWwZX7k51AvEbhEB9mtm5cMcC9QJL2csjzZYencZUCLzone8NEvaXrqrdZDGN1nwfoNdnZ1g",
  "key7": "572qmeLBzKwf8EDr9v2BXQ7Sgk59GMpqLXS6RqkLRUJm5AU3KVzacnFmQbqTYwrH6TzttDfmzADVp99BBcdfNSXk",
  "key8": "3eC9ADkFeSoANBw69ku5hB8Dc129gGVvDihdeiCKKwLyAgkKtE1m8UMVnoRBvTvaZBmDUzJeB3KEY9afAiw6fpJG",
  "key9": "3yXKSmq2J87FYtqNsmjayoEjC8s66sGeogEpX1AqaLj1X1W3aZZFFEg2tAAd3Kj6N5ziWGN7tJGDvNkexxhMmCXp",
  "key10": "4uc8uvxFfXSsPV2A6siz8b8ojAtnQ56bdV33YeWqjYfUz3KjNRQbbsJeKuvnbDd53wS31AGMraXnRc6N4m98YDCZ",
  "key11": "31BN1o7u5F12nzizD9ZchXxX9JEDUpU81nznuFQVSu2X6unTRrKkEWFexqtWHU7XMbY9Y1SVLbyQuDQ7Yve8CaqM",
  "key12": "3ihYvKtdaYEemvXcWVv8fZvgNpjy5RaBPzhtLPgbQNFDFgYB6L9bGUoy1W5HiiXZCJJXxb3RkKWqHvgLZBHuazxR",
  "key13": "41bG3Xbn388AqUa2BecmXsDQpdNgNHzdokN1Gc7sUuBBw7dzyJVL7aXF4WxfATwb3jpG1ejLXa8L5oCYLXeZLPP9",
  "key14": "3ALWxjhzfqJBYF4omuyyJ4hZ2UTVa97yy1FaWahGASdyn5YqWbtp3Farsfd9kp6Gq49WB7HZLEKChdCJw752rnVN",
  "key15": "3MRAcB6dbSJQ8ThMYkmmyPUeFh7FezhZnkKuDbza4Lo8QBBRfMKyiHM2TrybDDfLSgaw6DiofpB2wMXmp6oQ8TvR",
  "key16": "dvBTLECUeFCA8K1wxjDqhLjFun7kKqzhPW9zDVoamMn8YKQhkgX7Le1ZCnpYpzzzwf1PqgZZwjtQ9GjrMNRcDwM",
  "key17": "5gyRFaQjo5uCNBFMeCoKe4mMXs2LK7bDXxoyG8VFdaRpC9qNVoUH7jZ8ATm8oQou8gWjNxU1FxZYDJRPABMsmSZy",
  "key18": "tyhp3hsHtLzR7L4BYYTR5sGg2ojmRkFggMDgaGUXh9gTq5VJYEXWGBeL9gqNhSPN67AnDv4mHacPfHocVapsYnV",
  "key19": "3VFnVTjYkopPJMR8qCU7gVZAW7s5YvMjB1rU3Lp6ePLqUq2FPjGex1W8yZoiXMPZdEkdK3iNGRLC7JU4HWe8UmxF",
  "key20": "3a8ehZaqu18NezjNPSxFaVbNER2efC81kfiwmFGWk1n3pScyNwau7weS3ZpDySny3rnvoiCNVnRdZt5gbkKPqRiP",
  "key21": "xEnNKBJMPDQX3nazNxyYGQ62EBNH4Wk3TNfC1KqJRPrYaAsnyFDorGkPt86W5ZC8tgFvSSCaW95cyd1ENnbP7uL",
  "key22": "5Dg3kptoXaAbdH3pappAP9XxpkbLLuHSYr3sMDKLdbQ3iRZEvKqmmiTwWtQuskJ1fyP3Xuu7FRGH7UCu2v7VakoH",
  "key23": "iEJTfwzBYbAz1ddBcSLKUkE1uDXK8DNWMUAXEKBedCzW8VgnBFQDjGhnvhp8gUviJCDDmQ2wsMFTdHmPEorwoau",
  "key24": "4qtyUw8YjJSEJHWvdcSVQFKm6az8FWUBrp7SeDqsnyipfWXdwx2p5yfnPBK8XtySbEe1A2xGMxoER9MDgHdvQE9g",
  "key25": "tntkN2VXXYVz6vgVbEeXZuXprcM4r1PhScm4WyX54TALZyw8QyCwTS7YGHaR6e2VyKpuJyWb1ipkJt6va6MjTRP",
  "key26": "36qTWatuYp3K9P7ekexkjQomycfE3rUTp5E3SDhiQwAv33MbfNW4pCZ7JXJjxw1Qc4QM7SyyXTGPRfXxk31U9PsA",
  "key27": "Yd6Pn2wGvs1tEihifozQtJizSxz1JhCr3H3uzgJq1Fz8K8TcCotQjEzatFmMv4HoiPFzSndTQHNJSvESC1Nyqc1",
  "key28": "3Mw2rATBJ1EBAxNihv9bXQc4Az9RtKTrYP3PiLujMex1TcXHnqYcJA8MPMM7A2TZpD4a7pyEq2u6ZqwRVyVEByzs",
  "key29": "2AUREvbLk5taUmZdoNshcK9UAH4xxp8TMVTfE8muGuyP1VERLE6ELsKEbXSe1W4VZXqAkx24nR3mjXoRw1xYzMZz",
  "key30": "28cX1Fxg9KNyZz8dnt5PPqXBzuYXMkEZA4DxMgog2up4K6B1EFEbixTP9sLDq1j5MtAcFZS3TQ6HypA2VgoGDjYT",
  "key31": "22CxgTygm5tF94HPer7zjPdRMqzek7kE6NbtyydsFtNVQ4MiQVkJMVxRGuSXbLzvp9UMLj8pnj6f5McXewNCjgr8",
  "key32": "54FepGesKVVJGkKXjjUAmRzoVTDHkqDVNSZPVzUd816XzDMWszxe2aD5Ek15UydLqqe57zvTUvJ9i3fRqhvSJ9x3",
  "key33": "63ifXj12dqQwDTSfv7R8P5T5zTysoxNbpTFWGzvc3Yttu7daKrqPNrJxhk2H5VKRUMDytB5KJfihKv9uLsbGzpWz",
  "key34": "3UGPkqxtyieBYCC3NRFaMGBcDEFXS4Nk5vp6Wsx7i23pGyF79MBDfi9CDp52Y2e8WkSmT8fLUSLGmoyXogThNVfz",
  "key35": "6zmhj9Br6NqBPAMBFj1ZaZ2YyF194wKw9BcMoJu6quuh4BAxcX1r2tEQDpRedaxd9EUAiSVuaXb4Z6iaj6h9nep",
  "key36": "4Lpfy6BjmzZmapaxLcSdJEcME3mtitLXXaDdm12QKVaVz6bQv3LMuj25fwD3DCizsJnyp2abWtccpVgen5oXJk3X",
  "key37": "52tf54rTeThkWFJjYzrpCLSBjeiUjuW1LUzfoyApdJjerhRhPi9s3jXUHfuEPYdpC8gQTnxypYHaEcUxP1yrYWuT",
  "key38": "36fFzg4ZjY5Dn8SU1HdLmCexubtZxU8vVJX7Ctx2K6ug5bh6rmNTfdd6USuVFth1EXfugViX2zdBtdxANnsLvxh8"
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
