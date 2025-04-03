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
    "2HP5mJ63riPK3TgUsdzDwFoi2GfLb5Sarka2Cr2oyy428f4UEJ8tahHa1UNjDcC6w2bABqDr1amj1umM8t6gr9AM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fXTvSzPYqzqupgnAxfyHigSPjcb8JoLsFwwaHfzhjhTG6SN4Gz9jRyj853ezfD2VLGsJYTbnBnNAVY75XzjkZjS",
  "key1": "4rbWjgFaENoVwiYwjN22UaMRcaVmh4cMoEufJPb8VAYg1BMJYW55E55HK1XaVqxqYFpzhBUCgonx4XbQM69f1WJS",
  "key2": "5RjwbcwqPcWZJKhJhWywAE6JJGe1aUAfUTSJoipAR9YQFMaq4Ch6AgAM7rhPeCsy77EhpSo8KR3nir5yP4HqH2FZ",
  "key3": "5Rq9NgD3iWgcLThJd4aZdPgQLXwUL56nJqvr1qG2ESVojPV6uAUcNDvjMSNwa9MekrGPXjJTyXcURya53HfHAiWo",
  "key4": "5dskpNGjK6DrWfMZBZ1qePT2vc4AChLqcEp2ierQo5NgGHxxpoT1jXtz5DF12hxrE1d4Am7cCo2ZjGB94Vc52qtc",
  "key5": "2mec1eMjCWo8rV9pRMShCJfn3HrYGXj63QYhTwjHFTrgEbFSZ3CCM5weWN8XJTRVCDuqJgxETpz9ZZevtMxnVSoK",
  "key6": "49QM13CuE6qnGV8UKFwksRDC5RNdCY6HFmPNB45eduXfFwFpdeoE5cNbJ7yLzMi1jAhcTzmwLt3xbzVDa3ZbPRqA",
  "key7": "4TtMvbgHwA64xWURQP9F5e1LfEHXBwuuup6LguN7R8WYCdeua6VFf46M4nAeFnvtqJ1nKyUTkPPuS7TmnqW4QDtM",
  "key8": "7n189wXGBhuKPpaHLv42cA49F3DNtZ2ECf77DvP7eo8XbyPDHcZSMusq4ZZtdGhueLDKVUqkzHkY4ivWFcJ1eEx",
  "key9": "4TLFAw1UgTGmoSGLtkjiA7kwe7VCQN6yhiAGSv8oNzix6urCJWVoadfVSFw9N4C5JXG1q3nborWLFfPxmXspB3wX",
  "key10": "36bJzywCEYqPjsUVvNUNmzuLP6J2tEqimZVSWpjeq5k6GqV5j7S1SaG7ZmhYQwQAgDc9zKKN8vKm1UNEasQV6kMf",
  "key11": "i4DbQJgxvQ3jQML6ZMPecHkWMthwMo1XNo7NYBmgmRB9fsfn8iegrHKCUMLCW8BiDfcAdnq4zJYEVpiac4EHwQd",
  "key12": "2pVwjeCYcJxpjWVjyw8j4Sj9znyTTGaK2v32asZuW7M8dSNZ3T5vKvfP6Hqs8YRcQePuJ6vFi559CorCFaifRtv6",
  "key13": "uD5ZBqvYno1gydzaVZXgJikapxc9gnTeKgs8PKEt313AtbXMe5J6hW78khfzjVhdesj2eJVx1Z8kX6Kk2uEZQvJ",
  "key14": "27HQDiRRxYGZ64aZKsBdMVm8SvxTe4nbtStRoxh2koUb985zGagy8TjxG6gC94zEpwhtz8ft9PGEG1sGRPxCcV5J",
  "key15": "2XbrsuiNftmosv6dqi9SJzu9c7JoDZ7mnTvF5c4BT3sqQ2LswfdHHCAWMkfGnoMMVDpZ3rBmrFJeduPRghXoo9X7",
  "key16": "2J37K16hLP7FQ6BrJ72jvpK3DYuGtSC5u4z4s4qtFfco9SJpPumFGK8LPWAfVDD2NwzheyGMvT46L3NZtoyaASof",
  "key17": "3L5ztM7hAvuhReBynWZkiH6d9sJEk7QWtNFEvF7sWmWoMxy9b9pwDnZUiyj5sdkDXyqUz5Cux4ZmzWECfLSRBHCy",
  "key18": "1iZ2nefhBmGpVwtgWdraFGgEv44Wt9DnUmrPgzR1EqPnKuiAJehd9XaVPo3PNafxy1xKmYtCedejm24986xwg41",
  "key19": "3MdJyAmog1LLG446wkFcnjhuSGEGcCePMcAfmRVfy78DGFDuLMi8YYZLnKTmUNNQzU6MURihgnebnN6jAoKPJnyg",
  "key20": "2UNrzjSshjrshuhp6BrzArSYfy7ew4EyMLa4J5bZXNg3yiAUGdgPddqHQAGHmXvMuxwwyim9ZncMQCUhZKztcbWy",
  "key21": "53d48QsFHwX7iFVGBe4SkqR9WkpVwVaAKYrmgqjhi9ptAvtQwfJYaSxUFYnWmxVEZR1sEzsxXHGDy9chPe8rHnnr",
  "key22": "3TmJDAskDTAb6XQjcDMeAqYfaK9dSqBdex6qsN45J5NSY3cRMqeHiYqZuS42fY7MmMvfZFZ8SBNnQ7C8JfDPP4ZM",
  "key23": "3CnYbYS66A5iV9hhtoXApYcXXjmckYXua1zUCdd1xd2oJfHsJ3CYHeZhdtzSHwkik72nZ8FBMthT59mq6coJSHRK",
  "key24": "hTHMHifrQ36jE1che49JrGDntR9ygVTYj5Kw7ThtynGRrBa1NrTodTwjiGb6gfbaEWKfNrNhwPmuazWBRptbZam",
  "key25": "126WV53FDDbgSDheD8wAE9jnaGCFVAx2QubWhQERvn3G9b3vdafm3GU3GWfEjAf6hUmhQR4udnjB6DUgoYWtny1P",
  "key26": "3LbZ5cZXsmpKPeMp97wHqWQfmCFEXmy9KVhT5haBR2kVG5ZSd92GF2cnyXQtK3jTMsevKvemYwdgQFWM4n8F9Vxo",
  "key27": "38DfckU2EGD342psAXMRGjWsxcXPx8Z3bBJFZqikSMmUzh6s7xw4r9wcMuVBa7R68QawVQ2A418jmv2yuq4E5i1G",
  "key28": "2zX5Smmo7xWxWiR3zJw5y33UCGjLGgEcF5MbF3tbcrtHzPJun174bmGLQ4sjyQMMiqsTTPXDm1ES8ciYSd6y6bag",
  "key29": "44ELETBKxZjAqpiVjKWzNmcu2d7LFzi9tmpP8miPh5sDSeXFRFDhBBUKL1h5bpHVEvMfnWT7xeXKwtPrshsbPDiL",
  "key30": "4JS8sp8b4vctJt4ppkPfQpZobiSCtP4pwRjPRmL4VYM2BGHVzW9rZ5bEaPqxp9A2FzWSLNkGnnBETuSCZgBLvwjS",
  "key31": "2qGcKGb1cTpJ6mGvEnzphV3LgziYrwnGXYxxVwNH1MJCj1vUp5aVjS3z9DmtFbPojsoX7Dp9fHiW3d7m4rchsWnZ",
  "key32": "vXYtexJFDC6PkMdy1aoTpFyTqfUyika8g1b66tRT3orSgURYCrpamEvGiKpyMAc6W2rMuVwhQ7ZETXkYy3GW2ym",
  "key33": "54PoAJ3jibVpLGEqP2B49acLUudCVYty6ikDaWqs9mYeEgeNEDLwUMf4QDDBvHeZUibLsXCqmMowRCBrvY8uyoYY",
  "key34": "21j5Q1Tfe5VkRdppyNLRM8ebEWE26N9Mj3pDTHHzFu4uxwJLmZefmPyLgWBc3dJQiuXo4Rx7g72K7F1GSpP12vYA",
  "key35": "rveZhaAAs5D6nZK4oFpa1zUovGeCXAqTyuQXERddSbfTprmvDkLeDr5R2BjjBZPJccFVwiiu7JxPb4R6HdWTbq1",
  "key36": "3R3YYzj3QRTg9tUL6gF6j6KtpFqC7jV8wGTKkK54jbDzHbmzpFjJk7Ld3v3Z4ETbTScFavrfV1TCsnf243RPvu2E",
  "key37": "czt3oSLtx7ANAaLwRPs8NafDGdVYhjhuTtpwQaT4JRwqrKqYfj9o2oauAnasJcYm4jBnnoAev4Q5GU7DFrq5b5j",
  "key38": "dHfM4PxcrvEPVURuTSwJQkpF2vxUXqBjc5PiWSJhzXTdSA8uFWMRJLS1vnJgDVWwAnaf7AeJfPLjvf4Cq9YuTsa",
  "key39": "3nBWcWWz3RSjGhzfc7AAerRhhZVNVg1UduYLPBScCPqXGd31k6kjLRYP2FqnWovwyNR4VneRVbfvttKy2XLyD3E3",
  "key40": "XGMXeBUHGA2rwCHnUqvBXFDCkx6aWH2d9poT7Wspn8JzzwhTFdTzyUDqn4Tb81DRRZfDtCjnLPYZF4cXeQR65Hc",
  "key41": "2QaxT8ubuz5PgDBkkobbzBs2kHJU39x4ywc1c5txDjrqdavrPrFosKGFnJGs5fwf9heNFs4MS8m3EPVfbfE6zv6G",
  "key42": "5GbtDao8LJf9u5uM6V61PZRx3xrn9qJSVGF7q5kyJwipEY7VAWJi4dVDXdcqG5AZJExWz52JPZg1Hbzt6MuzZUYJ",
  "key43": "2MGNhrohjmRR2u9jyEj9zepF2CEAxWnjRbYoE38f4bb4DNwF78yCjUZUKioCnyFr6h8Vn8PTQV4J8ShEFunF72Dj",
  "key44": "2yvEzgTTbYaMMrDEj8EBnN4jFBffCJtoSxAkJLQES5jhxB7GoEUo1VZNFgSQL2eWWH1JYxutXqKE3HNJe42jFUJq",
  "key45": "4gdyemvrb5Cmf5wDJP1DHCVtsbwPH6p5inSn92g3qbYwRgi3zu68KpadMxGVYYP4LCGnML1pCznPgcyouMyKCM4j",
  "key46": "3R9W72vDNhvB6FcKRFWKztpwWJt56CyXapa2mrMDPGSPSV8MheJvZFgCNkm1BUJiU5kUc58Lk5fWrrJeUQV8SCPU",
  "key47": "3rQHVsU6rDXyGb1Jybhp6QHhGYugHM13zpB1sKsbvCk2TEuN7XBn9r3pn3Z2HdYL5y5XrUz9JUJ1oT8ds61cdh9U",
  "key48": "3TLqKLtVabmF7EXoadmKQrEiVFaCcRyxQJfCa3A2tcMFezDAFU9NEcP83G4Y9GhEEqScaS5nVX9QR7289X6ziBdc",
  "key49": "3arXA5pt7ejc3YnR8VCuNBu76fjKXGqa6E2mb75bhgLyTUuNerZYFJCTuJfr99hYasTPHWo62TLnoRkEedgZ5M3S"
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
