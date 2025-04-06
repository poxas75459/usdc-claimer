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
    "4cv2D7KQkRyt62YmQKnroQyectgtHEWrYV4JnyDsqNtXA9mr3sg19sbWXYdZz6X7JyG8NHCV9tUKh9R81UmAVVUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33prL5f9NpzoxsKEP4qsxeLrHVyBy5bPgogaBEcRrv8wH8e1KxQBXHYJaVpRk4WFGQovRx6vnAkQRBWEhE29MoRn",
  "key1": "4Vy78BFQhJQL4yytw4xS9mdyfgmqgX4DkcxkQRGwhjjmvbjsSaaSevNgRHfRnk3XW672yS9U2ygoQjewimSpjD1z",
  "key2": "3gSZn3TpEySRoSZvJwyCaZcTzUaNcPDUf2sUELja46JvVtNVBVC8ohheNmDBfStzzbJiVB6CeR6ydipz5iSjTeVF",
  "key3": "38wgi8GQPJFfMr5Ls3hC6yFXYKfjiFNrhmnS8kgtvrDpB81UCmTnUhohiTNCtgbt5HkbUSbp2419DnGXvaeBpL6o",
  "key4": "3zrmRSbqbDikezZe7FoTBSUaRgnArGW1JHAy2aE7qXHwsFrVJWo8PHfotG91mgbiFEeet6FtMgCQux2j5EUmdsde",
  "key5": "5WGdzabk2j8P4xTNe2KunzzA5xnEBPehMF4QhuXUEY2CAuMjQNjz3PUqof7EpSbaNoep3fGWTKKgN83NbxuC6zNA",
  "key6": "26VUV9wpj2xt6WdPeKsnrJh4EkiT7GDPCuBg2rVudNFKXZrWRxDM31DXJJLUeV18yrYXGSKKW8DjpwWbr94ZGbAY",
  "key7": "4hGHKByTE94bqBeLWp1jaVsgFB1M9gGpsCHW6PDBP8G51LeYTeZPYXvSwd5JbHJdgCWqrwncQ8i8JJ5UBGReZ45C",
  "key8": "Q6GUZbih6EVmDd4j1GBdMdfTkPxNwarJtQop3DFUPz39bEh4jPEy9F1ESGadZVSYkW1o5qPcvKCEvSdeiuiXJep",
  "key9": "2gzbJ8h2mtwfEb6DZ6VmWzrBMRA9BbbrA7o2qTzLdGWx6namNGzwSkwbSKFXwmZ3kNebt5zKj5gv9f36ExKWXbr3",
  "key10": "xznuEjLkfB5qQAKx9bhmourWxQ3vbJzwj4gSFuw8k7XywJdcwzURbhXm8W4btxwUTnLXzfeWU1zshF6hZThEDFh",
  "key11": "4t74uak1qUDhyDH1spP7zexBohLdWfzykEuhLEVqtxo6MiB5cFAiWEGVWsMQqXw97iZufCK25S3LaCdpJaicK6qE",
  "key12": "iWmqWd3Lou3gpyovw9ALKmLzVfoxsGP7zq5npK9JTpkEpedXkyEYwtUTBo2pXpDp7FhQZL5MwKHDGd9qWpX5gYw",
  "key13": "3c3tMLiwu5Zqh9Fri2cDBAjYg4NHz5t9bnvRZUVBw2vU9KbfGCVuganK38781sXxD9RMcn8FT5DmeXaK8mWybTAp",
  "key14": "5CPNe7LiEjujfAnz7YH8xhNj85cW8t5iPGkLfD8gNaBoW9M9YvEnXLX9LjTGM7NB5dqDpWRrQyLTKb2GJb4epEWW",
  "key15": "2GYJu6y8xq72bqxCRUUwQgoZS9S5mXQDztthoHxDFjUiAEJgsgwPBxtBXq2euwe7BYXMKU5JzNuTtaB6fkB6hUTx",
  "key16": "36Qij5uUXWsv5J8JwGazaZMfBftgzXButzPqQspVgd5XNgBeXa2EGc2mJpjq4HpcMaVqb1BFhizHKgqfUY1Fn5Hs",
  "key17": "3Z7xFbY4hwLkzktkZZHFpYxwz2LGfu3uRadRz5aGmBPZGRg17VnLeSvzV1sxGTaRDmfnB2XByMV9ccne9sfb4cDN",
  "key18": "3ggKNaUy4YsZBFsDRce8wuqbKVcnKjFz4ACmXC8XUKL3KhUN92JaAMDKjXwJZYrvDkRkqx2hj3krYDdvvrrUvAb4",
  "key19": "B422iZnD9zFMZXGQSj9XkUmQSZ48XNQFqrvvLP9Hg33cLeTk37pSF3RWh4WfGAJ4hazeMCBcf1UmwYi3hmNPEzd",
  "key20": "4jhuETnC96dJnjy27rtoL37FfJDdYbHu2uFkthSAhhGNJ1jrmFH14CyeaWtbCsJGKEKpnEV44mdDppXvhxGjvRWU",
  "key21": "2hp7tBcR2pKY2Dvn2jajYPs66NQu9NCifW7d7wUdo7B31WJ1NbXLpnQu7G7er5L2t7CeZvDC1R2oPc7RXiwfddT5",
  "key22": "4JVtR4f2VQeCZ6CuND4AZeb3BtzN8AgJKDyPMXohybZ9rJVcmDFLTe7Dib1tW1Yc3hgtpSPEymAGBZcK1fK3BUrs",
  "key23": "5LNYku8TwsSwAtwfWn7ebscDWt1Gyh9iDeR2fsJgxuL5sZoMESoNQvimRrNygQQMnZTrfP2g6GRnqdHXCzHLHMoK",
  "key24": "3dfGJr8c14tCJLtXLY9bxWFb3SMmwRoJ8XNffBCNTWguwv61CdJFRxSDFRMt41vHyuACncMCrF6Foy5nDvFboCfh",
  "key25": "62xWDcLdk9jvzkZCaFuWHuirA4paXfNT9bcYdvPNJiUnXYpeCtofwzwivhWS9ys2FwYzyEod4XwaLq66nz4fhpt1",
  "key26": "2164BiG1KALke4VH9z4Ui1HpEYpkk1gSFF7Qt7PUY27t55FmDnz4xZLiqcdnQqhdv4d47dAKB647QqmXpxHuWbk2",
  "key27": "3mTPkY1o3jApqMCo67YrFV9GDqN5YcDBWvX1TnzMxkL1uZpyDDaAbZ5YWY5GXMQAEcVBE4wYb3JF3LV8153vbZcS"
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
