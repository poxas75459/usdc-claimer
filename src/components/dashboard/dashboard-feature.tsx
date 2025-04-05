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
    "2Vj6eHgHkd2UPDfZDRuRADo4tVaD881kn5NJYzWrN4JmM8A9A33DSbsSHpgkCi6ejdqxA1PaHJAm2sZewXNN2497"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pm2ooQDr5jv8G4Qsp5YwVzqk61qr8RUTXfCaCD5UtQY7jDDVgqMMZC7Li6VqTumSRrSbspv33CsbmMbw8hZRNDr",
  "key1": "4JVRAPTfLUZTYegKBDra4fvrT2yLDiYwpoYaqBVMfrv8TsjfwNs2XPDBG1EbBnGgDhKLHb2yJX4HLcM8S3SQs6s4",
  "key2": "3FGpyQXM5EjYvZixJiUMGKRo8wzBcNNPGGdCxRbHyFTWtuLN2nUMFViihECWaqXmRNNRzV2d3V4J278T1WfWqiYx",
  "key3": "5cwgZtQEM9VDkUB8drFq9Yrw75RaMLM2rZnSuynN9iRxsUAbvJNszJXZU4D9EcpwTqH8AesQmusrJjQ8YCY2Tdu2",
  "key4": "2qdY54wxzsA8i6qPKAR33aVZK1ssaMaZvPovJij84zfsCjztZZiY82hqCZnbXnU2PwimPucJKrXXFJAjwe7x4YQs",
  "key5": "51PzUEpx61Po8L6MPaMRJYXeP85jznZULJqwpYURBgf7Jz3CTdscX7SPW5PmV7mev9oGhv5B3kHWwxtGnpqLt7FS",
  "key6": "4M3efXDZU29kZuS7GP9RYfj8hHA6QvoVod4w4nzDiqjToo4gZtKXZi4vNovwhJcqpd1R9HDtou54QHvkQ5QBpve2",
  "key7": "2iYnrNRqCmqMQAU5HAWktQnX8ZVBAQoDYxKuotfQfN9ujx7TDdMt6zX5GXN5DqpRXwcn655tsKJvvXfCJo8N6Bg6",
  "key8": "4aohKgzfyMidKjN3cNyizDL8REcNpcCmdiCHeDPqCje25ztSmrgT5VcPkAwnw3EPT6NbBqCwMNRDXDQ7DXeSb8ug",
  "key9": "bXExwmZ7VCMgyp9uXCHtgiki65i3nY1aJiZrt7m5oCitfDFqfSHSghJjnQjdu8wncwVukKh1kzixsmuvGp8doyN",
  "key10": "31QqG6QdAuqbqQ3WwUXvQveGWxd1XTwChdEMMa3fJdpthd6uHDbFF4Va9aFzAM4RDUD63CCcXmygptL58b24w9AR",
  "key11": "25hNUYZwEUaXT2fLADXS9AG14ruuH2WjwrcuVhwC7r9CqF3n96T3WLHaysjvoG1gqir5GUCu53YLe71XDnqFgNcv",
  "key12": "5QCVbAwvSYdEbz1VZ7Yz3JrSru5PUQbdqkVJ2Bi8xJqFnQWDYtHGs1hA4NeapqYhJMtPsbxhKE7Cym6UHTm1wuuS",
  "key13": "2x4nx6oCynH3WQUcVhY9KPTfThhXsdrq2PHGtyobiBsrGZEW2Vw6fMTm9o5o4pg7RM1t5mFaAbmTtBiPCm9Xom7G",
  "key14": "5apo5DkjEbP4HyxRcYGBo8JHhmhfmdSLbJsqYLNtHATby4nyFj7t6uE6LX8JEezFgHoCCA3ckqugdgizn6LYDQVS",
  "key15": "4Ju3iMHCWhbdSyGmu4XDKgHrWG7U23h1w3c4SCLUhwormG5PRN751Wpr9ayZ5ATdkQ41aeWLzNUyY6BsRgaHJvE6",
  "key16": "KgGdSDgkurE9BZt41mHLXK6yiXyqNCPUTGkLMdPnd38S7UEoPC6UatVgYKF1XeWEqv6hfCpVqMvrg9cdFp2q7qh",
  "key17": "5RQJcx3jwvHgd7RVmbiKz65U4DZeHSthqudJ7TVwes7D2WrGVa2vzbYjaPZXZW1j7LDE8Fo6rNiGcXhR3uxEYc1",
  "key18": "56Lu3Njk3Sq6zFG7LpuHP4hE4PhLrhd8MBUn9DtSjTbuC4jHm94a23VYpR2kZBsdRtkhQGM6UUhQPAT2nQfs6cP9",
  "key19": "SQSH7WnogJAxyugLtUnXTt5PdkD1FVnaVW74TeT1bVKAaK9tFjQRpBXoUJQ5qezq8X6c5DXBc1NXAHrFWTgaBcW",
  "key20": "3WvVJJXmZsRk6Jc3yvtS1u6snVZ1GStngF62G3KVWVeAiRidXwyo9JpFUKdGtQQZhVcpfyiseZUKacvst2RsHsg9",
  "key21": "kTBpj4gSLSe4wpvFSYbBb7ScjacysY6noaSDgZCq7doXnTQfec8DAS6z126D15KVQU1UFB5dXkmf78r8ChjqknL",
  "key22": "2WUmrPrZHwLcnNQQkkR9VDWoxQKkuUXGp4dmaymbPL2dBCFoEFaBpnAZVt3CdYA6QLRCFjSmja5C2yELejfECjtB",
  "key23": "3mqZ3RYp6SpNHCsnriEoqDpTmFPT9PB9eQ77XHi1nE5HD125DrWEuRFwosNpX4Cz9Cz7kBzdkuUVM2VyLDwizK9w",
  "key24": "3KG8y1T8j72kqJtUg767Nwivdj7BjzzuabswMQvBnRFjqia5AAaE3jt9C42iacGXqXxjAgyFSxKCQ5EU5e7aspBY",
  "key25": "5WyRT3aGQ6eXbxGRVGZxDA6KS4UQtnR6QyAGpJCfE9c2wjEDn2R1sMayGrtyQEKh3pzhP9j8e9NWU1zHbjyvqExX"
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
