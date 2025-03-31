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
    "DVamA1zWgpcdin2gTjLjNxq5UziRZiVmeXrp9VTqQCu273gjdyCM8b6Kxw9Heixz7nody5aMWuw8u2Pp2GZG72j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w9RbkjSWyeJGckFpYNUVQejJadV3dB6ZuX1SEsYwagcffjjQFnTQC8nKLiFVSbESvcNEsXEBwXncZqsXkBrkfXz",
  "key1": "22qNAKxFZrofN3UwFyQdujCficyRN2gGbvj2wcsHHLZXcEy5i5h1wve6BTHyzt94izPvFAHSARrGxnL73YYhXRu9",
  "key2": "2SzSdLnx6PhgvrfCrSCdBZ3x4fEP6HsXXWLiknFKFTrxLzWeccBs78kof7rCspWRuH4VDe7h2yWK7JUHHzbQv7Zm",
  "key3": "i31gUzResHwEwtXHJTUaUs2xHy1aWZLthWfCsbz7iznmzXzSo8xepx1hg2kc4LbjRYd8T4E5BvxKSHDKPCCicuH",
  "key4": "m6JaRQ2EJtnTQyaWqykRu24qqQaE3r81dpkFaXy8BodcCMFhL3WCE9mNvL6Au2qRRrwjQJxFpbzfgqwAn6MiU47",
  "key5": "5zr43jddhnCfyBUQD5UpfCtXxc6E4TZHFx3LKfwR9SqtwwniYZPkuun9cnGCzGrng7agRSLd3Zdcr63noesUkH7k",
  "key6": "2LwMPc55mqAkg4Pfu6M8F1JhrXoCY9DNR1j3EUYhkDokdavxEm3NDyr4AtqiWWdC1i3uQzQT7DK9tF1yq9ZYqiPa",
  "key7": "48RbjkedARcFMiGwUR9w9gHiGhyezgGt5Bugxx124eLgn42GiCR5YNHdv15HdSUHPGpk31jSnQK9P7SrivocB7HA",
  "key8": "49QAqJYJXBcToAUZLzXL2VFzGBGvHeNacuxLpE4KhBE7wGAiWj1Qa8yQ4Y1gP4jdRapLy9F9ZhpGZsyyVR9CN2nn",
  "key9": "2CsegPBHSF3DZzYeHzxSw6i667pvRfhjKg2y3ibDfXnhsttnQNzUYWP7twbMigbXugESdAGVnYbBWN4TmztTkuGc",
  "key10": "3iY2Wfyaa6uimjw9n1hnavHLFtcw7tyJ8cs2SrPLrSL5j2boyBrzmnQCyNbujyhddYjGDL6s4pjnLfPh1SU1hQNM",
  "key11": "2zgwQXokrq8MQQieQXeGFnitAC6R6uRhTByLazpbCVVEyk4241u682j31mwx7GiiE3nHNJN5jTjeUyN3D44gkovo",
  "key12": "3p58VN5aiZ4UGMyq5GAKXPE6KbUqCyqYvY7rAFw4DBseq8zgUTvgcvGQiBumYB328dahDg3hth3FKn5iLmbRPjRR",
  "key13": "4aXDmnXWi8AymsLPU6iSTfU7dUg5NhJ438yNda8mzji4s1jawiZSWzpi9brfEj9KNsiEcjcg2C5Rx8QzAKbU8G1n",
  "key14": "KsxNDZfLcohafzydzMWAKHoyWVkTgZm2BmTMMzpy9wF23gDoW5GRXauh3zDjUdAh3142JfyhuT9rbw2nBimCKfr",
  "key15": "2XX2V3ugQ6eHaC6buaoUD1ZsmJ2ejEVoqEW25n8y4xQzkT3qKgxK6eMhizApgm8L746AMEKaSFmhkzGWxvebDUks",
  "key16": "66XmGWdXP7A3fwPU6RiGu6uzgYG3SD21KraaCtutMRD4MC5uW2ngNpMxcScT5ksuLrJ6mvWRUP6QLbhZazDru819",
  "key17": "3mdJC7gtvW9Dv54RxWikcMYDgre2gbEh5Hbw9bjpZNdi89jgveScpJW8RREP292xQcJLkUwJaY3fiJ8FRJvhGodq",
  "key18": "5jtn2HGD8Et59W7TjecAzcidtUXkxy1zjeRw4NRuLn8ErRPvBNyBnRTNUyAdfBiB9DzxeP8WJ4rcMUgz8r6W6Mfd",
  "key19": "3Ebt98JTh6H4ZL5n6VsVEa3sCoYLQEkbzYkrnD6B9he7YuoDtw3Tqc7W3c9DAmjhSpM5ZYVgYdrgSYZLZHd8cH8k",
  "key20": "4nyXLrEAseJYoZpdpCDM3cW55n4HrTaPUNXMLJ3evzReZBo1NcbJJvwUacVQdQXiSmrMu36ekVXzGwpEhFqWgNXn",
  "key21": "2sFxMp1FujhNvUvg7cfdofQAAYpW63tbGgREFeCw4i2DGT8DGg4QB7yaeVLGjWv3Bx6RjvgP8TBe8Z4zc8b6qh9K",
  "key22": "4yKw3akPfZk3TK5oroJVUs18RnCDbfpE3g9REjZApAHFS5NTJwpRvt5sLQnMRPPYD3UuYtdnWjwBLmDNP7NiXwh9",
  "key23": "4o3ZkNZy4hhHqicf4PcvrYCwNtUjZSkiuoHLkB8m81s9eX1qr8iupGWfu96VeC3Xv8FBhamUdeLcKFJoEzfpBZmr",
  "key24": "4mD382jum5h61VMiGSDTGVtFsAmt6QZuGvszNznXhWg2ccQBmar34ec1znCgAMbzFQPUY74GMAs7j2upce8UWVYu",
  "key25": "46uFzLZpyd2uLb9Zjn6JKE45e7ufsCZ4L9wwhx1e1x2aiuk8n1pwTtWgx7UsN6d3JGVsKageJYLF3nzvJ1do1nz",
  "key26": "5CSpQzs33nZLiEJABjSj99i35ZiFVd4djxxtGpsmhm6nrnes6L7wMjBiffgFL3r6tQp5mWkdKPBxRgyZP4e9ez3C",
  "key27": "5PHpacZoQZLH81G5jYLdjWP7KSTvo11E8Ff4tdEVVTef9av3XpNWkbDLspm95qzSRnH2qD2cX6FtshHr5zZxmnyh",
  "key28": "nWWNLWoKXRewpGjV5dTBxRzbodS4VE8oSMgsngAXhExd85kYY4BoeGS6V4s5FybKqTjpXUHzzpiVi4cBTZPC4D6",
  "key29": "3odDYv7T64AJ8xyGZgSL3SruyCHGvNMFfMeZpMpQ9kgSxndWMsWBSBECXkuuERPWwpHLv1RB2M3fxwfUKDbJhsNj",
  "key30": "2Fs8PD5em2Gnz5zdgrbE1WLM87jWu6h1kSHTMyysTWCN8TevizzY9u7NzPFNXaqN6vVvcNfvoRSMBSECAd9cVxrS",
  "key31": "4HFJq1T1Y6nLUqqFUBvXq3EqjSULoE4SMuEKupWZwnvwXRXcfr7AfW7s7VCy3SvFVQfJGux4hQKmKuWTSifU2JxK",
  "key32": "5eiYeF3eougcgZmcHSWErmAyxPkYaSpr2uviYvtoArXbmVHgQvxzEmxEb3jzxH2YWnegBhVAp54oDDFbo1ECKAgr",
  "key33": "5at3uYkrMexrmyz3NcMx7XjufmHNoRLZRBVjxHcA1VKFKvUoyC5ZnAecmHpxYbSiHoJCNxEoDgTgbG6mpqjCywQs",
  "key34": "4bA7D8Rg2KBDTf7fkJgzq8QwYctyPgTArhvRup829xDPFCgKyuKyYFEY39jgtz1VPaeBCmuHGxiU6Rftvno9K8sZ",
  "key35": "xPD9grKDhRbJ8R92PWdhofq2FDGfXwDtdFfQ9dpzmf5mzhupWM5EMQ8s1eyWaRY3vwAk71fVQwSbHjoPztzjnXW",
  "key36": "2We8n7kpq8eqmdarTBkWnbZAF3R9jQwigNe8dFFUusPV12Eaz13yR3N8UAXJYxEmh1AAQdYpfLN1jPPRm7yEmUNF",
  "key37": "3xtutUYqBGibfe26RP1zedhe5eJF1PezCKooeEP9MrKhNRL7PLMpTyC6iNzqrbBAgmxJ4r3chR7jVKPrBTDzC58R",
  "key38": "4jn8Lkydo7zRENjWjix4uhjmn7AL9r8KChoBb2i2tiuV7PXEBbFmVjvdC6BA8vtiSkofY7GeFRAsKQ4trfDyd34h",
  "key39": "2hcedC9abCEBV3ZAfahuPAY6UNkXcXVXiPKtEZeJDVDoxP557261rRAKVxMatZQHUb5mUCqJdRa3PKuT7EVV6pr8",
  "key40": "3XqBe9T9qDjkuFvn5YFriopvjGrYcU6ZATUR5iSd8HPMPeSWHXiji14SXJE3cnMiMGRpdm1i2eVwshBRbW11kQzu",
  "key41": "2BxPLREYrPT7Natscs481Fs6Js7C3Kdz64LF2cEKGjQDXL7MDc1sBzTWFZGBEnKjUhegqvURWtTJxb1K8goPKtuL",
  "key42": "jYA46D4KbSyU6AY8iPq2xwBR3caJvsymnXyN4goj9e6fDW8LHeV7hGvPV8NnuAPo4s8zAPbVkY8KS4Tpt7WETET",
  "key43": "32iLsoeuRt5JW5y5ytse7zi1ihhCRdnxYfCs6FsK31bUpU6wbBEjd5Ur1v4vGSpBL56Hks3Qo2NLsL9LeLG8dMXU",
  "key44": "47u7wtxt39qmdMYfbGpDfEv4xCn74CLhUwsiWh3hJdgMqKHDQgyqTMfA9AmBKo4PD66gDEGarEUwxiihPFSZf13Y",
  "key45": "5GoFTTxAmVHnUtojUdMiXioyBsLhb9h7HqztYix62E5JMeEaK9SRsVV3rh3pBvcgD64uqErZ7SUwdNzNRuCyYuew",
  "key46": "3zrsS1DrDgHXNw4P3t4TqBd6v9i2jdMDGmbtZ4t9EfX8TBnmBYVq1tzoBCkU9Hw8PQAV9LRSXvSQSWXEEaaBs8Kb",
  "key47": "2UQEC2E2wEzgN3yYQbYnWrGC75uPbp2537tMLctmoKhqfsWHe6TQESkibqAxNhcmLgPiJepUWPRvcZcRq8Rdpigo",
  "key48": "2KocvbCGvSPQYzXvD3q4GFfd3SrCUeZGLuP45e2zHwAXVfszB5QSA7Hmnq722h1cisUruFTz7YKJ9aH21pEcfT7n",
  "key49": "45nmLQc5LosfDdLmkVR4dYAbQHZqoqZ4axpYLrgfAo7DYYbc14jaMwXYbFVJwAT4NFaJieE5JtWajHgKoAdNmEE7"
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
