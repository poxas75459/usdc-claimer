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
    "5GWeiDEbn27Hqprre8RZFCdZRToALCRXjiQGE4aL1SvyXcQ5cwgyAozJmrG2f4hxv9Mmq1pTZuZp64d48CkuDBWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cUxF6QRJGjpo2DwgohGiyiW8kjUtWPXb6Y8dm9XvFtmuGnZLrnru5HXK21VyeFviGrxTo4xXEUxAYoPSLhYvkN6",
  "key1": "4XtK9mHXZYSW82MtCQJrnuRGvAEABQtFPhc7C42djuhiDQuY9FhD1gWfPwnfrNdqTRpKDKojATSZWV6A2UV9FNpi",
  "key2": "2JUKWj96MYrzTQ1XhpqmruGcVLUHJeBdrKoLq77H57wwtyvdmTBd2PSUSPsmNuCeyWorx6ALcBt8CHzEQMCiKQQ8",
  "key3": "2GR7waywVC7yCFoCKqrCeGwmGqtVmPvBkApGecnc3gMoLg8VYkMmA8hYsAN9VoDHgjYh64EZxUjZeGMzkNJnk8SL",
  "key4": "5tE2wq81LCPFGT2K8cT34ekBQZNWvAqNeN3WWZSHEpXgKpQUHG1CFN1KXEtk25Wa8cLDX5Lmq8mbPDuDDtErc3jY",
  "key5": "mkyy6NR331h96wcYMeso4Su4cfi6k2ZtJaEdFnRCkwXRaZrWgR3BJBRhvsLgTG3NBhG7bSawhg31vsA3Qczuz53",
  "key6": "3wBvihSBVW7wZPQi9K1iFeEvNJsHCz7MY2TYhuQgYKAZTf8ERAVSYJz4nJZ47dSDCUEZQUcUmPBdvT5LtDdJwAdn",
  "key7": "2thJjL7iG18NAYqBADU4jb8CgPNTprf2npQRASy9KofwaRa5DhjCQoCrDTT5fEHdYPCHBwLy7FGDd2LM8pCpmTjv",
  "key8": "4bHnhjP3nsT1CFYQsvDyh6C13c2oRwP4DmZV2UvKN5swdZVxBP6qEkd4CaK8s73T3R19upwhsoMCaGjcTd3U3MmD",
  "key9": "y3J2jT2SJX8cKyoZbJKkLooXHjWcxPmKZCUWzv6h5ofkASP7xNuNeK8YbQjEMPKBoc6vJiMzE9vYrVHuZ6mhTzW",
  "key10": "x15ED6HLVKpEi3bXjH574efY89L3qPDDJ7V2bpL7WcGJJWynd1hTokD2Y13TNmgCUrtSK5hqSiHLNEsZVpeuJDg",
  "key11": "2wawcjyDEqT9FRRyJzVfy8doC9oYd8sNN2jZQGgat98dhoay6P3RntY5tbgcr12xbQ4NRU9HkDe2Zkw8K57JBqQa",
  "key12": "2PTPHL5dE87Dq17L4Qb2aMdXjQerrErFAWGFFiY9Q6VbpXPSocqZYxDsRPMaywBTUf1vB2V8GX249efbpL7dQTY4",
  "key13": "5sJ6N4PX9EDCLwaxS8whXuUyNvJaQqh4uQCeQ7paL3AckBK88QtWd6h4ACRjqs4L27UnraBF8VmeBP2HtAaz9cGh",
  "key14": "4uTuE22gKx2M8TdCyR6F9ZaMvGToGuYVxN9am5J1TNyKpYU49HBeAjEsPHPvrj88WK8Hg89hwuBJ4zSybFQ4SvAi",
  "key15": "3sc5u542sSBVkVadWZXrXqNT8YQ1x3vKTAy6duMkovFFd1a6q783oEiwn5q5RaXQawqzQszovCuT15L8QzTRFuwb",
  "key16": "3vPfhHsjCjWsybGvXuFzcmWBCKhoEvjvvwcgu11EDyPvMC62WJhH46MAz76q5mggorhDkeoTy1Eob5iQDLENtsa5",
  "key17": "5mAMU2thQwuPXkGkmGL6ihWyrcZGZDwnxd6wcWj86XScVv7R8Jz9oVYd8WUVMkARQK8jfwL3yWox8a3Nak5yS4PC",
  "key18": "3S8hX1CxPDiZFVfkdbWDEETiaQETQjvFC2R1GrHcX3AbSfgu5owKtj8FG4jHdFhCU5rHJh5mKfsMkRFmgtnaUpZ7",
  "key19": "5fbW5pnuijEwrfqhcLgPQPHp3weCvpNS9E6Go1oLD6XkEGu7y9wWm26f4qAXAqXLx5uy8wPSrhAkBw22fHnjFFKU",
  "key20": "6PX4VmvK4uRgff5bKdQ82ibHyhPPGGbD9tZQVrvnAV3kK2c421axapoWCkxYk4ADuCAyoFqC621Qb4FWvTCARac",
  "key21": "4Qaj9EMUyDeWWKhLwmJV3YAZJk7HfPyxrQ1KYwhppMtRiCNhpEyV2FWGJ7zC1bt61bqk6vgMuxQtbX3aEFAsoVSu",
  "key22": "56NYpBq7EpJGHjirwmz2WvFpLkXYsnBLyv7iSg3FPaMmr7QQqam4MkayNi8gjK3sRzPTNGLTbBsMji33wAmAUiDB",
  "key23": "23mfQ7PCx9BT9UDKLUTUEKaFCBoGWoHWRrBWXe1vxSGzZqxNPUtBBGQK56oaxFYUEGPUqr5RyrPs1EcBxE1YSDXb",
  "key24": "64dzdZkRHLFnAtiFM8Rk3Jfqnw2Q93o5yXSxgAsS6CyRfnuUmeLpcfE3Hr1JddwZhpKFEKAEFGFiS1h1xtg9NWGW",
  "key25": "3mrDuJbNWkdwNC3rmYX7oAmx1EuQdX6tVZjVfXLdwYW5T343tYQJNpks7QyusNvKMpEE4MfRRi9tRrXVa1bRrVjA"
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
