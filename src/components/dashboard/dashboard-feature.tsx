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
    "QpZ1qphac7TygJs9zetFZ2uFAHxiRtzimQzUv5hKrqcq44vh6go3XDAPuwX8ZnDa9kxqSPYrdHE2nW5gPW42u1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32C9GjAnKftuf99hvWcNLT8nuyZ4fPZ5Xt7KryBHP9fZCf3PAKLVQouUmfA7pc6LvELsQtxoXr4bCM2xAiQ2FKfe",
  "key1": "2fQHDMEAnQEMF68TWUKPkwumNmg4L9aRHUWazg4r78GgkMoZ3rhdRkCpibTd7EaXi76jnfB38soGTK5mdCunkcD7",
  "key2": "2YEchpKjcMUyfH2oKnNY4QvEaknwCxqUPM3kpFYHYwnhB4SKUez1MVf9kDt7ikDcwDaR8FjxTQLwnsjCtAmHmi6F",
  "key3": "5gKqsFa3Hzsk6fYqBzmD3vrHan7Qy1HzcexbQQmpLtM1DnMM2dfgxgmoyDiNzW4rGH2HqURgx4rJrLN36Kg59yj3",
  "key4": "5UTa3rSETbwAEFDuUveJjpxs8vFEP33otXRNTVBNAwbJ3EbqBaHCxzYULwFfgARPE2oLBDMHNz8knK63qPQMuhvo",
  "key5": "5Jruivy8p28U7zYPMpntRFmxnGNbprYSJmG4SP6svQCQyWyUJVUbUKGuF5DuBbN1GFBNkHT2MdzP9kK3zkcKnwmp",
  "key6": "4e9G5wAKBArrepN9nxEYyLEobYVku8gATYKYNKrav7NAG89RKv4NCMSCAx26HkYbUvJMdNeMbRb4KD1r7SXVhn98",
  "key7": "4xXHkekPxFyNSfCznbsASkHmrHFnhJSjsEn4WjrGmDXbNUu1ZfoyQXq539xsuxVKZcxtL9RVCHvvyY9tzaPfgdXo",
  "key8": "5NP19TDZcEUuZVnYqj6ae5iB5GH4Zkz1dL78MNZZycJGYteKuRNGk3gJ4rwg1AJDHDLiUApU9ZZX1aSgCCsvx8V7",
  "key9": "deu11Z2bBk149Ag56ZYoVaN2AgNfcdWpxJa97Jqnn5Rqy2dMD7uV5krANLXVqZRXk28vE9YWmEeeo37JH4VNqjc",
  "key10": "5fEMPtULKqDMgvGwWcK6NkPUnP99WA4Qu38kEYf5te4AeoL2AbTtZ3z63HxEyfkjwaiUbBXhTrePGhYPQT7vN2qh",
  "key11": "4C9ZKgfygcnWJ9bpbJWNkihKcS1xNm3xqsx298RNPg63FZsRyFzg2GkxYU1pSHtvrdJYmwBFufxRBSpqHkrQVzbK",
  "key12": "5fXZkp78DftT9tWzzkbbdvGJRaEL9bmtb2yd7Z8FmHG7vmhNaPgJSNBo7rGYRaBmH8HFLZXvyuLw6dyPuHdVXb4g",
  "key13": "2dbVzvSShuUyvKzmFdEnRZuGJqQfFUhUoYSL4HxN2C59bVDvmS7iSK21FMuCD5kv9go36hoHbtaMboUuEzdbW91p",
  "key14": "4wesG8Nzuv8NqP1Ps958mAnEus99NNgrvcLWpWst8ryfrJEfVFT581GE5M6VQnndAfT2HosYuw5TRMbSAqs5Dd6G",
  "key15": "4uxzZNgtrZub6dhexbsqt6LTLU558J4PjFViufzT1N5zoYTTvUWEiezsY9T2X5NYFjAAbXFXVD231UWBTaXLoSHc",
  "key16": "3zsnPuRr5EQ2cLea2j4QaGnncEXjJnHcMozE2PPeJDczYKbkDHXeTXNrafkxatRyytefyyr2hAW8Tp4Rcr2m5p5T",
  "key17": "4iXv8VxYgp9YKLvZMYMppmAZcdJayJSigCs5gvZBv2EGwff1Hp3nRPHgSoBAJ8yWK4bUDBMSQeQWqSt4CfwdwnoX",
  "key18": "2HdQo3NC2zT5HAJzSVMR9NmaodDLgsTFRLNxyjTzZWbcDMuE4Hm9A3hA1Yq1JnznbDpa2WDU9z5KFVkNwyZgS59n",
  "key19": "2NZKbhcTaFRP1M5bksShFSX2H1AcHzRJAc894nupiAoqNDbscWkmGmvPQojbeRRhn2NMGYBg4jthhcrj27kLTUPM",
  "key20": "61eXmXBJzb62UTbcA4kRuXcG1hisnrwYRHhU9kqGJC6DJ9juGaeH9wyDfaLHL91wLF3D3N6aviN3KoJM3HSnUMnc",
  "key21": "43C9A21RB6ioFeMwich9EQuYGc7cTGBU3s2PvDfiZg94CJphwgzQEcqQCmfrmwUgT9erjn8NC6o3Smm1jr6W3CzC",
  "key22": "5aJoUfgfSC8P1iNHn3SmtXavE4o5n1vqT554H8iBjrGpy3K22AiCqyQWUav8H17VvoULcKr6Kn8XqAuWdVzugHDy",
  "key23": "35MZGpDEaCUSgFa86NeunRQAb18Mnrq4dFag5ZJ2g5ocuiVwcTcoAGdmxZgDt3pkkoFiV2eaghzKRq27K51zLqB1",
  "key24": "2L6F9xND1bEhpomegRwdAWwHHTX4gbvfoDzUXD8aFccAGRF8q8E8E8dF2mbHAiCAFxgULz2QnbopGuiW944zU8bq",
  "key25": "4mkzhQ4bQiXKk8TKb3CmSoApcQ9GPNLj39oXyGzP9KFDGrfskS6Kov2dbjzKM7YFSdZFNcF1eR5Bd3DLPdfTGYcb",
  "key26": "4bBSz7MQR9AAGxmoaV1fZZdccJ8FRuSq9TtRPuzj6QhvBTdpA8RaChfrCG6Zq1b9KTif1LHRJG6T6qwSdFgMoPKE"
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
