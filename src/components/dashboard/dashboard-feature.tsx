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
    "2xRaHVqUBXm7nTcyFncyeVRW8KMhAEpNcwp3nQNsXb7AqGUeNjRf8xXjCCtUhTfWB9hgid4ydr6wZxeUfPMCTSf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fbgubtutq57GB3L8YU2kQsaMcJ58HqAgL7AbbhA7nVZQxpapCQso38G7QHNhBUWjGyV1bWtP5nVNgpVmrgJpGF8",
  "key1": "4R9aRKSQxohvNnkFvoeJbuokEudfS19kZQH3sSRa9YYT42qFuHGSWCASPS3hWspdsMLZX4vMLAQ8bxoxvxeTsR66",
  "key2": "WTvuEtH9tL29okdRoWNdKEoob5gGn6jimQDwWzzjwjh9YDHh6yjYjUoWnPHVbW4QpXaZ68ZQXB9hk5JxS1hUbSX",
  "key3": "ectxPqZ49r3YA6USWPddFpzMtpAv4qxBDAsFBH4psdwe27dQtnrjLYdx4bYWAghZwVVWFGrDjnmYDiBGve6ft1v",
  "key4": "4zUZ1gv1v21ixDpgDZvhkNzsRmZhRuUjpsZSi5E1YpTjj1SZPqGFWcGsgDj1VAbshyCLawDLcWpCz2GCLBEqVSQA",
  "key5": "526VZPFr5tHy4WyHnnXs3gY68SASf8H2TVP5Fn3iwAbFb42KSGetgm9gXmdr7J25JqDQJorWhbUgG6g9LszBmCwk",
  "key6": "3K1TuvmRvQNm2A6o3XfyWxtLVB1eo6T85fAMcTDJFN9xWR7SWaW5gHdWmMaZuCmTKDqCZ9Yd2wSPM2kiGXjoujFa",
  "key7": "5QkV7X2DrWUvzap57nff8fm9gnLiAzhyHhGNP75cxtMoFz5tpXg3FqN4zGuuVP733voKy42zHY5B3UxxBhxUaMve",
  "key8": "41Suk5cHNPz49h5VcLmJbqwjJwuxN1tR4qFwXymCBMw75QyHgEaFB1uovidYKNMuwTWP1oKsDnyYNe1QyDQh7u22",
  "key9": "52iyWMCxUqfjuT9G61cfVjoetFSizw8o6ZuoCkEzLL3aC1wivHHsVyFQ3cbN17ZcQhxhqj2LRakK6B3ZM4hgC3ie",
  "key10": "4vzoRs9W7SLdB4UYZhM6xTxfG4LrUdeEuRQmGYnCN8kQsnk1k1WkCNi4okCqgjueS5Du2kp1uHphXvjhvL6aR7y8",
  "key11": "5YAm8qTJfTFrbJnq2SAmLRg9KxMhhnwJP811DxPkKsmuz8nnCsJNPc7eyK9teHtJgCmF26adkJt3ENf8cqSobTSD",
  "key12": "t6m7NiKnT5Eh6mrcjUMNr7pzPWtXbQdMZ3NgZsXcV4PNKRosRwHa4kz6S1DDnjYz1ru3k8EQEdyN4mjA8ecQtNq",
  "key13": "3KsJvMonQMCRL1YCkdnmxmcE9UCDQ3zFooU6d1P7KAn7BQuzfPVghM9SFU7jgsK6c9ny6EoozqvghxmWmN7pDc2D",
  "key14": "3jcwntYyd2Ki38wBfreyUJg3JLou99AXrghGmKXHdvYNjarDnxCsxAw6hyNfiEudXA83HUcgZnQfLfoNWFkZxHYC",
  "key15": "2oZDcR2xoxdLTBuXBLwEDJoo37zctnKxwYaxoRSMzkqLcshKJjQJ7AwNRAUE2jS1eMjGDu1HdJztt55LmDSnDdSz",
  "key16": "5mgU2yPcctBVgATKWzr94mjKDx16j8fk6FjSZTiotCqCYW2PtEh9MDEBQVc18nRRh9ij3hNKYTHewjmXBwrZL7oD",
  "key17": "4ZuhnRa69safHU4kUgAt4PvVEDkR8fVNkQFfkA9HmEY28fEKYn93UjLGRDmLDWzDnPPDhP3JYad9kDkdJ2UroK7r",
  "key18": "wiuginhBuAHasFjjAAAan7hK64H26Toyy9Tw3pDt3yEGG8GNvnxJ7GQcrjrxE1R7s4fDPEdV5RNAa84JguC4QGG",
  "key19": "xbdcZX5DnwPknS9AHA5eSbad1SpX1KSHY7YqitPajFxCb98dPuviu2VSXLqMq8mWiK7hTvgp9RdcZUsC1394WVK",
  "key20": "3GpKQbFZfwUBJC6hyrbhsZ3QvNQw53E9yexoM4ESmQoGcvs36PAaomnuW5ufCsVRjsuLqN8rCRpf9xWJGU4MbAAe",
  "key21": "vtbHoLde6odgEMAhGaZ1ZdPLx1yASMCkDxsHrsQekHSrL9kd1Sz847i7Ji9PqqM68C3TP865WTGbRmcfpeXH15R",
  "key22": "JGXhCFr85JM9ZvJ7wTT3ffZHjLDBcKQT92hC6zHnBPiDThmEXYd59xyTLzh752XNuinf5EMjzRaiQJRYQpDrPc3",
  "key23": "457HLQ6jxRhkxjnpRRfjxpyAQ4Vts9ryK7sDLR9j2dxKoKSTQqSJrczC79SgwHFHy4Wo6n2T9LUUCg6fwuVExieE",
  "key24": "27iBmDucrfwDRbWashT9CPEjNv1EL2syJina8YMJTvmMZj6TvkPLkaVp4LHLBttoAXsjMtCD1wCs6SF4S867MsHL",
  "key25": "4bWhfRnEJZmto5ZwgijfYMCBfwdCobBYWwDUmsKBCrAsRzMjBVqKR3vmjuPVNaNC4ddJHmCuFZgznTaFnfcWWPrR",
  "key26": "35DXNvFjXpuPXzQbLXvah6C1VBY2AELv5Ymppbb4aHsruVmATLZ1qDjnvot1ahkkU6HBj9C2nKgy5b2eanKyRHzb",
  "key27": "5VVyjbHtbnNJS9XfhC6Jdbtt1LE7gJMYoBWXNAePxCJY25z73hBoT8purVhP9cCG1xz69uzGj2jRq2nsemfhD6Uu",
  "key28": "3aDnnqbM9A9CVPQVeHEBCQeXXN8CQdjKwG99WpW2gvqehnXs8mDJLCaZ33bqY7nqX7ZzhKmLCr7pX4yJA1xmEGUV",
  "key29": "5zWkkELFN8ZWvk9cApNdt2fjZzGi3RThKrumKf7F43VRbQi646vYSkPD6DZ6AEkRPsufmzzDpxCJwufwWAqedWmz",
  "key30": "DrNiy5HyQifgWYXq6sRGbtLNqNmF5fJjsW8wACZGPCKhvJbSgoxHvyWpN4naYAywVo4dp9Ye5WcCgMGbYKijfHD",
  "key31": "2ftQCq4jKY9w7HW71kZsLCzVe7Y2hLWeR24SEdvgWGQRC35pkCM2re9oZkuwNsWco46LNPtm1tj9NZ47VH8EccQ",
  "key32": "2p19k82p5Vu8sZ1uu6gaopcnmtb5oMmu6qXBHECKgoGUEcbW1NVaDbLQwL5mKpHMPSRrJLFdsqdKf7TbzUnMdgi6",
  "key33": "2YFhiBkNU9WmppT9VX7NTwRUHJLagvQmzADVF2iL38x6VMfVP9huDPuFDdbCzBdskYSNMpoBzZgiXdx9fMMoMHXf",
  "key34": "2um8sSe2BZ7mpPejkN3yLD6sMav2kWToTc89jUYiMqSQWChZgNPYzQtgDvsEtDU1mM6mqDcgxxHwny5wkhy12qKh",
  "key35": "2uFiEw1cJJccp7aVTDyfMQ8Ac8c5Pc2mkxrMyLD9EEwmsn3iRPHQedaT6QxuqG8ovGU6T1zYzZModrntAAmvcYko",
  "key36": "55cDngo75gFrZaHEMNVyoDPQSE9HAmRenbt7KCJG9eyJtkrVLvwg9WQugnXJ4ZJdbKfQ5KW8g5LPgXHNBFasV1xQ",
  "key37": "h6bCjfB8oDmU7kug3sH2XBhvYZjj4QmPuxQ7HDL2yXnqaJ6K98nhz6ABudobkRgYvj3LLTUqRSJJNM5ybto2X1v",
  "key38": "47SqXUaVAKjx8XhFC7Rpg4R3akAxg8PFvgNbVxunwW5gi2CocWXYxXXSnDAYMNrL62EsvbXRfwnBWhPB1QEuFYML",
  "key39": "3dUNC1mvfJrtPQEkeL5kMa78ar7Hqi1V7KeWiDGDDUc99TUsavR4ZM2jPBkKdtKJJWEYj4Ac7MmZB6zbcrTHrG5b",
  "key40": "3PwrhtZy98MX9NRKTDMo4tzA3hSaJvDnkquVWiunETNHPUyexssHw9M9nNkjxRQiqqgi7qVDP5TKJj67CXGDhS1c",
  "key41": "bnKST8TndsJyeCSNzDRjBcDC9dNCEPhsLuJnCYPU6jSbWUqLMXTEaaGShgPXd4z41tHiCh9wdXSmWLd2k4gHyaX"
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
