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
    "RMJgzCky7TcJiFy9nEscWzxsi14rSjTfRxcwFkhV4YMJYJiBgVnvvi2yM8GScejvqGadsPDpKCZbhMBB1EzNXms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56HZqC3g5zjNjaBJn2e59J2dWhc7pHtSRSHfcmrM2faRRiuAwFpt9xgByntezdtvNVgdXGQeDY3PtFNcGDe9xWbb",
  "key1": "5KWEKmmhkxfXmPFcA3YFc57imxZxtBtENc8Ksj79vWwRTWaTkuSLTufUSHTGnnXm1hGgdjFBN48rsypPiNXy5dQ3",
  "key2": "ZLW7A3Bwbha85ygcHS3qJge1AKECDWmwmciGDUReXZWStGiUCDwGdDPW12Xevvpxi4Wiu7u5zhQDW9ihs3ZhNUS",
  "key3": "fmJnJcMHQjikwEq3gDiHmt6L9d6ce94cey8JUrSw7GXF5rD8KpostP8NFmxeDfikb6QLAEBMr3soTwWF8swf3Fz",
  "key4": "4xs5WCsG3q5mjsjg5DAyxRV23spM3KAy94XUJgE2wRR6NKHRY2p6Pvc9ujnRqosZ7p8xZ7CajgGtuN5MJpyV4sQv",
  "key5": "2Cn4AUB6SkRABojy4q9bwg9ud8ikWdSM73yaPJtyR4RwvyPBX2XvX8vmq55ZP2YhLcqaJL9VZ5NPYTpA1fDFA6wG",
  "key6": "51S7AYbMN4wveMYdNmeU73gcRuHUnX1jSZRnUgp8VYqLhtTPyLWVFqTDXFiQDvYn6v4rqBki8wNMedJML9RVFrzH",
  "key7": "5YFKCfsZ5gN9ZZLHmoR4DgGggk6Tb3LJMAt5SCfCTxwQQMZfD5tmQofdvPDAMmrSAX6sqJVS2aZNR715J24Wvf69",
  "key8": "34G2eeqvGwB4JGV5kQyRcGgtFmiFG5HJjNhLX3YyEXTrZShjBaeyjiVMyyWuGAoX1FFMdAgogSg41cL2y7aui65U",
  "key9": "2ZG7KQUQPokh1WhswQ5f74oxW61sWBxHRFqT8MVvAPzdy6vqsqKT3f7rcuN7VvafcDnZmX3TvrHLNfRUsiKjZozh",
  "key10": "3HnPDGmxny9vKC6ZDfhG6CrJYoytM8dWCctjomL8L6Hw17hsEKjZz5W5PTQWnZTUzpkrPEvyrhHUdovfY1MXZqKM",
  "key11": "pTvwNnSgz6ED3s1wy4DmvY5ABHjcdJ7cjdRACNWQyy5oFNLQJMM4E5HD7wBiHwofa6YcxiBVLnw9dXpzkFN8QvF",
  "key12": "5nisFfXMSBkJy4bpWXvMopPhZqsDPngocKC3AZTTRhVPGUH95KB43kCEwS2ruiapKJfjfuTPrqybSADZHEefZupm",
  "key13": "3xg4D52NWHJXb9A5b9t9RDMzqCpwNk9uTm7KVv965m9MJYNkR2rG6PxtNhkP6vk4BN7CEoTBYWxRVZDK1Jt4kNpq",
  "key14": "5eZugd39XQyQ1oRx4VfoDW5WEmonhWjYAV1D2PFvgwtinJSmLBwavPxjHJegCVMtAxo8f82oJCNdWUweoxiDznpV",
  "key15": "3m4YS9oBQohtsKuH7r5ASMJzVvXw5xFDFvgyY45T5dNXxZ5ynWZoKcJxZtYJqhUWuKLgoiBQrEq9HspS6oQgWHEj",
  "key16": "4DBg5KCZCw3BDCQG7wEH9GC6BFeMGVKgwYPAiMHG78oxsNBHPQJN5VcNiS49rXp6ooooPYKEDXQHdV2tJwc7STiF",
  "key17": "62hqiwFGoeujQSBi9NiM624sjK227Q3pqoWzdQZQYzUtVeyoH3udaNJ5ZmDchAhbVH8cQd92RJC6PR4oxZLrEXLv",
  "key18": "62veiii9xq9LsGjTCvwzGQGSjJLsaoAQrNJ5DSjqdcpHho7XZ8Pw22fkJuB3S5sZ5devLmtDB52D79U2qGfDcUYZ",
  "key19": "4hnHVFCArEyxRjFkckfapmZ1XXkembNrWdi3B9y1FEi1Uc239HpPmqdZfXLE2oA8NQ7HtAAxYJyqqFPnvHNP8J2o",
  "key20": "6Et7kbgM25smK4B67ykmvsi4MdfQikfaHhnZBrqjD7hVJwZ4ZT59rDDUp21NeULs342z1y4NWCzbeREC8BPhmAY",
  "key21": "2MG3KZcf5gWC1oLTL9FupEDCM53hUPkwqdaHYpi5ku1tf7JsyecHQKgNhgnWSz5VKG4yANSxLEWsdPowei1UwjB4",
  "key22": "5KevLYsqvDBP898PgxdDhE5KfSZGzo34PStYLobSbucbHbjSSTFKQFLAtChgtoenQJASUudQcemEDjrqZjs6sbzP",
  "key23": "2JJWZwRprb1nZPyu3pvWBZp6swXLgs1nScYFoP1Y9gnhaTqocBsVR6fysRAN8yWmR4RHHzZ1DN5G64ezj7u3cmKd",
  "key24": "4pGiJ1zzxQjBUtH9mcgT89BDV2FTbs1xQAQ2v7vTJPr8dfVwqzTvEqSspUfbo2Yd5dTe9EmNq4QvpjjmeaxatYGb"
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
