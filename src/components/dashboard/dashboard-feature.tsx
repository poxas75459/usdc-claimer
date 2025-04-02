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
    "2fw1MgNmtsQb8D6e1PfXDqLth1v2Vbb2TquyvXK3CoZ1qWasgnAbH8hZDqTZvvPmz8qh8BUTQDr4gTCdxMEthhsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SKMKg1VZXA8xo4bENbMf4Qbk3hMEE2rw74Yjr2UixDUoWa768KEj6ZRAwMudPU9MRA9bxCQTx4nsKaqGWFKnRAT",
  "key1": "3zKzCg7X9MDrDKK1tFQxtCk4oje5AaWiJDBLHrhshjSaH2GAnPp8f2WGo3qHyHuES9s9ytG9aFhTMbWmoQmocmA2",
  "key2": "61txFR4gJSfgpgJphypp582DZQZPcf8yrkqd6BG6rqKWqcK9eCy27PBc3DxcyAbr5StcQrNrnStwiVGEw3Fhta4T",
  "key3": "3ZnwtBrUoAvTqSrmRBkLEraxi6qQDUinrbkad6qVgPFGqVmwiy7EnVoQqDbfRU7Lf9eGdgPuSrmsFFKT8GWdE4wB",
  "key4": "3GFe3Dj9iPS4BGPoK8MJnP9u5G3mPRGrexDRXpdQURsmvjxvKSQLxndkWsYqzRPAgHREQfXjkdvEvGuVT7nbifEw",
  "key5": "5hsBXCwoZq6ty1ZricoGd1myyJwp9zkDFr5s9GJCgceubM2vRx4RtYbFLFtHN4UGmL11uZC8PH8nZrXaZePpcG6c",
  "key6": "39TRY481SMRyohQ64dVXpn6SVmaT6tznZ8GQui4j3ZxTTSCzs3X445ihMf6A48NNq3HnJihJ8ehCwJKRvVgUYvTA",
  "key7": "579ZT8phHUnSiQ1k67ywGSYD1tGpqozxBB78XvBaMqj1TNw64SKUcBesDFrxVjGwq5w65CM66aecTgMkZ17qgmaa",
  "key8": "3GG21v1hEXCXKC76MAfdiKaLq5sonR4MGnkEL3nGHwTnxbhidyShJVaCsjDW1NRPdkjcXBzHVjhtsxTuUxD5V6Jp",
  "key9": "51hp7rcPwYAp1MWxCDysCfnrhQriq7fGzUq7w5zuStzE8mtVSMQ3fGTBjZbF41c5QG9rKMoss1ihPhZGnHY2i7td",
  "key10": "1SNuzCxnz7yfMrMxDsMxHsoDL1LVVsjUuoEnxjsAvpnTVEQ46NJa8CELue47wzWeEq59SArQwsRbZgu1othmtxQ",
  "key11": "4Bh77g8X4XR1vg1QAHGntGbiaDVC2ZyBreK5M8XTfmQxipGiy6hsdC3Ns2k5aUmQ1m8DpZEtcUjFcCCGaBr6Xhmd",
  "key12": "4fLevGoUMGwNpBdA4gTWfU2gCC2PXYddZyK5oDmvtBktQgB8j3mtDPLAF6gA71mkbY2WzW8HurEurrBEVdFosHHH",
  "key13": "3dzZCeXekFLkPEt1Vskb52iyxdsUvhxWrCinmdEG9MbLjjkPoJ5yiA8eGgBEsEuUr93UmPAvr9o9GZ6ffmjs1m6v",
  "key14": "5jFDKCLEeoYV4YLYNUqUkAJrAJdokdHjNrMaLpmrQDDB97geumW2wz2XoBS2un2Gv3ttkZyez3qu91V5Rc67jtFZ",
  "key15": "3HjVVhAU45FiNmmMip1CcGvQFUp8iv4ya97NzcvzGNx2gpt8PXRUuGstbSQcMfShL8W7q7HYGnSJn7zaC9soa5U6",
  "key16": "H2pCEvHL1eLfCDhQMTvts5hoizqS5xz4S43PtJszzvvo6xrVN3HLCGfLmG5EvvPwHk2EFMMUhQyrTxmuMYTtiBa",
  "key17": "5vrkVUhkPjM1y9EWEkpnJNNAt8iyVToqEwwFqx4XbNFnHVeFqrnv7UEQNmRVNhLG2ghbFSp9AwS9Nywi9wtt4qbS",
  "key18": "CYaLJKFhMJczgeSsmpZnB8BvRhaNJ4NtuWeWAf8cc9UMCSacEALQ1qNNbqFYRZLBXNLEHNgqELHLsenviV7biUA",
  "key19": "5Thp4ZpZeYsVEiuS9Jvs36M7RLLNuPG26eScEk1ANoDgc5ssefzYAs1DWEqhkrdXmAEgrUeiedGXgrikcR6DyQug",
  "key20": "3dJc4Q2EEr8tnw36jngV4hSroxcZdmUL1ttGnH4FupSwSbzP28KwFfyYLTiei2t35w1dSHs7aMrqeGYFYYX1sC75",
  "key21": "44kAtXr1Z3nBLw32ZMftzTMwUvXkr32j1ny3ES3H8KWKpDTrAmkf1oDJaFhkrsdZSULT31zerfFhYahSbniAzkBW",
  "key22": "5ussh1bt4SAv4wRXXUVRdHXV43BApNpyfvgR4PWojbkoUSXY6oX7e4NGpAcV9cdQdWXmWswe7zxiZ122NzECVq96",
  "key23": "23bhr6x52xm1J7LUDmS1arh5airnfM5y47QYg6sJGeXcDUcJTZaL3bYQZocN8NZkLNuDs94sa6ZJJbZx56hfvF39",
  "key24": "5xUPVdjNG2UExfoaZq23udXiU9tbKipPYucEKG9ELycva9womRV5h9onbJKNwTbthdQ54A4zLf6aCSTJ3jGhYMxr",
  "key25": "5tTHTsy1hkDP1vuxTyH3EFzuE4JeN47Js8tsPK5AFWuuAx6gBxg1BMZy142VNd7uhWBUzx7ptNArD9n9gE4RdxaP",
  "key26": "3Ajc1vqtFvJRWXXaSB7tSpHEL8wqefYhfdVWuNYNp85m1sQ8NHxaGPsNE76tRoQM2DDAtVNE4Pkarf8RqgaYQfv8",
  "key27": "tuUutPktk1tUKxbAYPpnyHnJwzbmjGWHtjixFei6Lt82oRB9xxizyd3Frtuy11QtikoFjRfBBJ6W8TXSpVQjZjd",
  "key28": "3Xvbdw2yccA4FHtfGuZprrSZL5KwyzRaSNcDZK6HvWkHSWcx7NXMZ2RTopBHHxhC8zt9y7oMWE17mtREAZDJc2u9",
  "key29": "63hwMeciZujByp3ayfq9HLg5Fuq3jqpQWsw8Zpd37Kd5XJaqBUppYSehGniTU6zASvzcw7zzkkfeboLYkJTqtFVZ",
  "key30": "26oPTkaPmS3fio28PEWH1HRtaoN5Q5rna24YLeugJwGPdGeHF4Hy6V99G4D1oVKKLkAYBSwYz33reWBuU5gtaHf3",
  "key31": "4J3r9WYxYR5eSaXU75KAruM8NBQ6KwfinnE7ESUTc5jmbngALCh9moGJHCn2H3PBP7FeLFWX3eXVmHmmEtpyE83J",
  "key32": "4RsjADsxZaJBTntZdqZTX4FDAEShNyLaebqWKqX7QCnp8cCVuPR2L25SK71eotp1hoVoNPo5F3ssVsPm5XG19X5L",
  "key33": "3okV3NEcEtP9j3Y46d1LKVejQJo3wbpjJiw2qa44x22FEoyzvDqSB9Xav8AGaERrECQoxbXbWj1Ty2GGv2TL542i",
  "key34": "5UtiWkZin3HoFHxNjbg7yHJUfSbzRev9ru17UF1hmCYW9GC1LjEMUSk2R5XufheEDuviMyBLxVKxi7qZLPNyVePi",
  "key35": "K8hJ9SrQZJ8eWBjRpNCeekTouE3HTeB9i8PuqhBGuGoJZMWDHrbPPnHLhc1zViMoWGkCRbjjG1EA2JbL9SAPFWp",
  "key36": "4JbdGzmfMKUobaF64NfRWVjTM39d6thPZuk2gn6GjU7otBXyF1DfY2b9GmS9VU33HsdNBwKWakQ1Uw7wvRM6hCFs"
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
