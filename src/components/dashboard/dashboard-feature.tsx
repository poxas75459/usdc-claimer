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
    "3gJtmcMwGL4VtFuqgMNK5hQFovZRv7jcXahqAw1CzByMm2mhDg9KoHs5wN7uc5JT4rWtWrddztKBQRWQ1ghdy879"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NMBAtGvkgBZVDi9SgdB5DLJFoa86NHTLXhVrH9ZAt3ZZyEq9BrX3W1pNpqqb6JyXCsdR69Cufc5ijFWkpsqEDWf",
  "key1": "WcCPwVN8DFfhccLE3FbhngtoPLhuoacXxvMBApUVCDVF5huW6Hc27TwJ7T38RVAiDBgKAhd7HmgM1dK2zznQpfA",
  "key2": "5GPv5QetJSKhfq3xQtrMzBQdKM1144DHMuMqjuCzkSe9XuVVpshgnpXs1vYHJkxj85Qxt54v3vVUUX9fmHNYkiSv",
  "key3": "DFwNvGyf3KsSCJGCoMSZgs2g7zAeP6qv4raCNBDZY7PFLG2iPK2p4s4YNvpbGCbi9HidyiPvb8u7geCgkW8FXhP",
  "key4": "4BH7m3gfizYjoBr2GHFMYosYqQZxQ2XCPjbH9phctdgRTHo3ZRjpXR3oqhac9Z7UUNA9zteAEcd94hYMKqKPsSB3",
  "key5": "3LYEoBHDFPX5rqCDUb9SV4PFdWqeErTceNsZpMEiiLBQrW19MFmfjziSGzUSRL8Q6Gjm1LUo7sMj4DVRtGxbJfR4",
  "key6": "27u1AtcpcqLhcor5qeEmX6vt7mhWKJdjP47ixhsG7ky3YZxWeG5Hks8pmPv3or2sahp9J5XUfTM1UC4vqiqyPDxA",
  "key7": "2aYSsPqEy1Ba8VjL5Che8kigsPrkpLnA5amowy35xpRdJt6XkmsCqtScrNRjQpZXtsXrTVppi77miHtsEyCEVvY2",
  "key8": "55so6WX7eywLwhhDXoBUksNEhjEJogr5HxJgH42Efw78nZ6xbtMoHXcy9i6UxoT85J5ae3h4fQ5YNM7TqjQsdfQ3",
  "key9": "3We6zpZbXLpc4QtZFmCc7Z7LgBT9cXxpBmypLLk1sMPCJps6nVtKyvfULVKyx2FrWEfyyJnB1ga3eMmC6enYkzBM",
  "key10": "4TpGQGqmFiHBVQSYkktmK2PevJfHhENB7tqUEroP74o7BcgaotdVRfJqMFcNBgHJkJHroeNUQHArQU3gD8DZ3nCJ",
  "key11": "5uoLQQSz68bjSfCngsU1V6ooD6vdRHLnqaeHePb7oBFWRFbAu21BLZ6AFAZRu2Nx8A1e6rNRVCrMCYDghHt2zATs",
  "key12": "2nV6wsiyDxBK5mP9ShnLDgdrKWnwhDwwdGGjNsDQ9d6HDXX13KUdg3isGyhsMdcbj5PQ8htp25Ct7nB1yzqiZzV9",
  "key13": "2SHD4GZiWhKdSJGc5eZQbsVhupmks5yEAMZsD3jLfscfzpVok3zZNcGRYCRbfEBix7MqdLZjUVfea4sa5dXJMafB",
  "key14": "33LovYu1U7S8LpNmSu7SjWC8ixGNVmmngcfFgdDD3Z9ER3RobkxakX8cL2CjoYurng4U8PCGeDXeRR6kaszwvBxh",
  "key15": "FMhVnhR9gdsrH3VVdnCojmJFFToEHZ6ApHYFp6hYs1jVCTSwX7z1qMGWYG1NbUdxRzVf7Jxa7a6EqfjEwj9NY3n",
  "key16": "xkUvDQCLimCpkNHiC4kQNcbmUMbeA2GzsiKBgoa2zz6Qv567DvZMcgF81qyAVsgCwq5gxBirquDDJub5s7NWmF8",
  "key17": "25CRPGzxExPRppWp1vkHVHmjGKQvhAzKcVAzPWG6HCex1woUNm4Z5rJuJCxRcyu5wFcWUkqPQA1d1E3dFWhQ1nzV",
  "key18": "4Rn1j1xCNHWPpBMHhrb8jS7gceKWowNTRFCTD2yobWeiW5MGHtLxVgytpHdgYpo5QWN6kyRw1vjXSZLVrmUtpHF1",
  "key19": "2XCrdiDFGpEW1Juu4TJxBYEPmTXdFMnmoBrRD58G6kGf4oxow3qSpoTivxMyo8zkNPgdVR7937D6Nh2Kxx5w8tAQ",
  "key20": "SKQ2V8ZkRxZWR2fQiyJyuXqPCNrAH1CQgse1Z8GakcXxiTGjshbtVUWena5jJqmP3KNypGFxMedKuAZHJq7rTbn",
  "key21": "Ujo6GF771469BsWJBG1cLyTh67enVPPhz2cHPDXKjiKf37hKXx6Rr22grxS1iKEriBChhxtY8AsTVpZ9UEMmE92",
  "key22": "2BWKwJUHpp6UKKz6iDJ8veqK2GzSbh3mHz9aM6nPg27ea7TafDB1GZR1WeAqrgwDVeJz8oPACYW3YwZhA4qoRZ2i",
  "key23": "5DUEYQTi45KfQFbAdgJq8Dst7T9orDFuTTMU5mSb5KQyeaCvjVD4fLYLoRZzvvQKFUZWZzfDfzWirFNg3hsrozoj",
  "key24": "2QhPKHvRamoC1AzHrVVVzirHuznVUv5wRgnYVFBh4tN4WsJpDCgtcr4Pr7bGqaeZMYWAPPCpz2q3sTvsWC9cx2bK",
  "key25": "23XUtqkPR1sd6QA4zRsqWSu7hGGKRKy62bM4GroJdzxu3LiGrj8g8SavM6QfHjAjbAHuNLan7QiVZ3E8kuPLBJzH",
  "key26": "5BiGaKm8L9cxG8WQUYazQPtv6NBqncL95GdwLyMk68i1PM9xJjhmEdVU88RnNm3Wq3RrkWhkGQv1vyGte2PhWSTu",
  "key27": "35WiWWY2NnX9mcLBwAsmQdRzsJyTwGmvm6nt421YaSnhJCA41vrsCi52gWiHAUw6pkNpu8MwhW147rVKaMebKdh2",
  "key28": "3bG8MDdbizHfwGn7f9raGx55zJfenoQHan152JHnRASjepQk5sCrKZs6GkpQ595TxxrR2aKTKcrkFDNLRRUM48nd",
  "key29": "48ZQhTd5PV16ms7F3oDTPhPWU1E1Vm3JwsARmbEXtMh3wZJGzUXTMLofVRETX9L2e1gmndS72GwtBZ7EnzrbWDuS",
  "key30": "h7coW6Xju9eFHMvf9ATSMFpT7y2H1xchzEF4d25YCYSq9WSFF5ywZkGvhqpd74oCK8Ji8GQnZxgQHtkhwvkq6kS",
  "key31": "5Pt5gMzRJqHLZ6fWhCZNf6NGmJ6FRShwYLJsqHGhPykGZWJfABVewDccxPyg9PTSgm6TS5JsB34beZM99zpKsZQA",
  "key32": "2xXZDMLsPRHFKXadiJgRJM333S8gqRgJ2Jhuk2NvQWaQa1hzg4Dq3djicUZ9SMKPUsT3LM1YpHJMEcNcZsqxhrg3",
  "key33": "CDeXTPnHWBw8P4QvSnRiZkZDJxoSiYS4a6PVUEkF4iHqDJrUz26wz6Yfhk8NbhgpzsbyUsfz8p1iPdwakCjM5bN",
  "key34": "3nk5qvkj3M6nx4z6x6NBYFMM44e2w5tJ8chDpEQkc9FcAdeXEWrU7LnTDRhWngEJYzQQtUAfNA4e8E7tY6VsHGwr",
  "key35": "359WRwF4XMCtZNFwpgtkxzEdVN7geK6Cxo9ijFfV4eMMcpGsLdfXUPDS526tJ2x6AaRi8ePoEdEgazQGhgqvsh4Z",
  "key36": "3B1yaqUP6PsPoTkxmKgWXSPzTs3CuGd45gbWChZnYH5gKrH381PZjgK8hM8GPBFmFwk73U99fNZV9XykrLdUT6pb",
  "key37": "3p9C5bg5dK8dHFGiosnqgvbjDT64pxCgf7atbTNUgegzzSE139Epz4V3vC6JRLUYLF98akqFAzTV8rMJ8Zag3c51",
  "key38": "3fv2LHZj1TNgGunsZtgGHCSZQ1foEex6ECFtbR9rm6YwYM4T3FNhEBNv9z2Vezc18t82qcMRkBLXBfV4ZcA2PFPR",
  "key39": "39YMBWhD2trTUjnNpiP7QUGbj8CMo7sA4DV82jTHCycmXD7m86yEBsd2BjmNrQHPgWzzcKSNBrxzJxhfzaCBBNH2",
  "key40": "vsbSzXttV4Vtun5AHhUUMcfv8Us8NHjkByJF5QBdutAZzQSnzvFrmekuVPeoZc4UkZknGVsdNGzhpnfwoZnrstD",
  "key41": "5PstvmoSj2GH5pQBWaagWYaDou2WV2Q6jAf5kRdRdFni1fzWWbXLSudKrcH1gK3BuFEEk8v2PUkkNMCJzFJCDZbX",
  "key42": "KAubgQuvGKKMrtTuDNq6AFCNb1qNtUyf1KVLWDK7YiqnfkY9niR9X7BhsGYrrU4iEfdE2m8J6fDbGoGGiY23qXQ"
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
