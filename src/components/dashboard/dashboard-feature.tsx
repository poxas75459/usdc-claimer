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
    "2ViFVaVJzas4yBppAufPVH9t2cT2DfFhmhxU1eJL9XWwnA66M48VKVDZqr12CzQY48WrMQC5GnQysiMNA2d6XtR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "757x11iTnxc2Ho73wtM3MuM1nB1QVnapLoRusacTwbonTc5JHV71ooPaRREU71QBvwT84p7kUaz6dZufHvPs94R",
  "key1": "4AgQStcGLBmcnjdnJimWVsqDVE2QYgqdD1RA1WjEcDc9thmUYLzBqgBe51RikgEzkBvSQkzT44ZUZ3UVmmirGsYZ",
  "key2": "2vithhtv3WnhZQVv68p3ERTvYxFaxLh1RgMEXJs9TFxoNhdHHyMFDf7A6TeeyNoqXhzixYR8CXaMYGJvJiix2uCe",
  "key3": "3Nj6sCwj1zc3BqKGUbrspcERjQ9XGFGe7nPbgVuffhkHGMKsd7g5LxBPFkgErHVCFCPYXG2PNhHRgvM6288Hjk2k",
  "key4": "2hWMSrpZSnTTSyLY8eertLFd5RqTzcA7Smo9RUdru44eBnvjEqdBdn38SLz7PZhhFCWdjiJZs43DTiY3KEyf38Rb",
  "key5": "36ZipyfnGprFR2dUUu9bhsD85aezRi39YCeHfrDgcDAqikqAkGruSXEsPT3xuurv79PY6HZnqiDQPdVQYZRqp6Q6",
  "key6": "5aJcUySXZf3Aaoz2pWMKSRLnC88WSLab47NgEszWn2cmkLagGYUvZXcPpreJkmicRLy3ENFv7owEYPF2NihPwZcx",
  "key7": "4FGgNceU5MLZ9PVskFCZzgqXxz7Lma7faFrmYybzgpwNbCZE2N6zo99NAcH1EJyrjp6KwVY4yNonNNuXRWPmFrh4",
  "key8": "4wby4U7qu2zu5j5gdwiGZ1ApWk4yf2RxrhEW6ePBe9Vbdb8XwVy9gcrbGnXZkoifR5n3tJnJ5LAkRHRyGqUu7Kvb",
  "key9": "2VUTSSBMzX9xqDF1z6FPo8iUd1qcVdH5Bx31ogYeLdhEoAYkJzvFcSYzGYR3XwAPpE1gmNWNWmW5AV2J9DwmJPmk",
  "key10": "3FFdqfG7qjZmRDsvQVZ4C1YutuyqgnbonaH5evhxt8YoEMqcXwdiBGM2S6h6FHymsNhoKLyJZJXpzXgrhuq3PbgJ",
  "key11": "CBVt9BX837PJDHZnU1c12NgALwFLjGhcwd2LYAy2sZK9x3PmiTJ5Bg1e1VcHCjZLKiaRHbh8HNZMd3gZ29xMyFP",
  "key12": "67WZWNr9Dif5zVZLAufbwo298v32UXHYyWm67FvsPmiCRDb6aornESvTrqYKfXFZ4dChP7Hy7BBLhum66RqsFA3v",
  "key13": "4V7jqmCj98k94CjJJfwi4gd829uWDNEJw8VeYtwFSvLwV3CjVgi3SVGfjxWH4CgGhSHdP6kKtP6K7Gi4gJxj8Hqs",
  "key14": "3SMtVHZCVXMkv2Gw3opPWhASdjSgt3jKjnaby1pq7ejf9oFS4sAF7TrfVgks8JGwGsvyTwp5M23j1d77LnZ6Ct8S",
  "key15": "3iJoedjrxVii8tBN2c1Ft6ZChjLqfWymQSav3PjQkM3MehZimscmfdRNgcHrJtaehnNJgRNmSvoFBNr51YnzVFSD",
  "key16": "43jectMLNrcVz3F49B5DufNNTzAuzKpcgtGQPyb6rSz4qRjV678PoFECVqKDdNc2vxHKSD2aaHZ36UazNCiJmTuJ",
  "key17": "3MUyvQzFVFjRBwMANY9wXdGkwAeKY8NuJXihcVpWGVCEvTmb3Wj2bS28EtMUrQfLYF97FeyHA4froMDsg36vzBP9",
  "key18": "2bFBWbX9s7ZgJNAHsCgcNUW64SCuNX5CTyYqJnZ4n2rg7KmzL1Cqpoqyg7dSBgEAL5jE1R6knABPqUhHcQAmMMqU",
  "key19": "PPfZVHAR3SBAMo8preGC1XuyeTiWzGbYWFSnxdGhBj1WmMSSFx9JZwYqi4jFYznfyvHvMWU8F5CXxQt3WNdkgh5",
  "key20": "o5u8Hehxg5HLZoyXCKbhyxP2UncoMZeYcVQcBmwq1hoa5ommyu6PxRwTJuM6EwtWjEf2EGzvtVaA8o7eXR4yzVm",
  "key21": "2n6Q9rSUgix4r5sr1TQ5D2fseB26B34TRLd58ACEzhMjW4b6gBBUkN8N9epJf6kG9P6XaDHFBzcuHpP5JbN3PAXv",
  "key22": "2S1VkGwBdBDN9ak2z5f8gtvzuVVEroPhR5fX36rtJpnEyRyAnJ9dL3ax7ex1DkKK2rrKgViQpdzPfZ8KjzcVpScn",
  "key23": "evb1HhmBPG358NrBjvfRDprBWoFdJEnBnvKu8rNj5VFF2xb81R52Bkjk8oft5GLdd7gtUT47d83Y7Y1JSPcQocB",
  "key24": "36VCnpfgZqjB954LsD3z35tX6kDAr5vwWUZwfnLbDgewS15kyGCAq9H4kkekqxGBWRad18XMuFt3A3xLJctwN24R",
  "key25": "4hUiYPpfjRCXZMzPwRujVeGyHDkAhJD7ryh83vF1XTykbcRYUWfBZTM7eWaCGfHXjy9xbU4Biaoj4CD5mvA1N5Gb"
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
