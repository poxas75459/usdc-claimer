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
    "5x5fSEQyy8r4rqAcp9McL4sCRqi9o5QK9ucRyeztDsK4LJD5QqD61d4WQmgiEXPQAQcVgnPbaM46UosUBQBasP65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RDmPoHYErNK549VaQNwXwg46uw8u4nQiYrmTiu2bdFJpo75SCVxFPkDWrabFWgyKmMdLmhR9yNMJhebckLcgwsj",
  "key1": "AxzEz63ivRiM9MvDxFWvK4GLAU2XHuFrXBa1qPSD1zUk8S6Fxsw1s3qbXSdbpVimLVE1t51yi5n1ucwPCq5fuiU",
  "key2": "3MvPd5JpcisGpNswfZDXMyuxKfrA6ncyWyxjM2Fkha2EpY6xojXTo4gQyEFLoueAkPxgZJmC69AEeE7GgFcUL8M",
  "key3": "3QFUZkshj4qbW34cnMjK7z2d2wKA8HhxkGAvtTSCwf8ezY1kne8Z3bLvBNScwTuPHSmABCQmVcafdtr949vgV3DR",
  "key4": "542kZMwV9UMhDP7XfEfByJ4JzKBYW36pwThY5kX54aHqs3XdweMVi296MhqAHEhCoVzs43MePic5GGUs73uiZeXd",
  "key5": "BHG5hd5y6KkynQ6raCa39VpccVSMQiyVU4BN8nG8aEhtqxiNzcergvrvABhXwL9zcExmfJ8fZHEJmAzL3sRYUw2",
  "key6": "2GPXZHMZPvpJ2kAekf5hnW6cbRz1L3dHzRb7vhKtb335Vxb9xotAChfAVbjCbJmwmvpBrK58y3WAFm15Xk9X5t7m",
  "key7": "475opu2BNB8wzWbiV4d4Ri85gxDvGiiwfsx2YjKxtd6XmtVUpeMpiScmT4XxcNoXGFLtVwgope8Dequ88EeDYaHt",
  "key8": "33HD9BkPo533QXBudPAjMUoxipmUcUj6koMtsodnVtevdvTAHu71xoeSZmw21TtuKd7o6pHW2HUX1i25ALHch6hA",
  "key9": "5BJ2qFE2XFE9LzKgyzYRU8NZ1qwUyUUSAW5hqRsQd17iPFWUG1EcoH3uY7NPZ5T4RTkxLCvW4BrsMnA59fhE1Tk1",
  "key10": "YVQ3kiUCsZ5uECcsTuej14JhLZLmCC8oTzDVbfKgYYDGJyhbqmfUmSQyya8fRWChUmFi5SEBZroKZMre5G7jV1g",
  "key11": "2cApbNRr7ozTqMNwhg4goJw8LQJDsd6geBSrjD3zPgHMQYiiUuaNQhpeQ8xfUDbHbwnKh9nPtdTyGgQBbpxHGDGU",
  "key12": "36sSjUPA3bKv1nKuGX3xx4CVTBrKq7fQFcmfBMSx1639hdUh3mL7QZgSBSjSYHawSD8gHM9UVeyRT5jRC7ooiGFg",
  "key13": "5q4cTkqoJc3PZM5SqQ9AUjugR1FVkPAs6SSPXu37etCZtEvTNWsFEHbnVrUJ7UbrReXYFpMA6fq8KG9c4At7fqD8",
  "key14": "Q5M9AUtM3A71Z28tccCLZXWX1wQkSZZjMeScPwtWJFac23zeg6a7iwQCPoaNh4q3NrqeRfxTHzv2f1hY6hkigfv",
  "key15": "4AF5CVUjbsdgwUqSBhzNSThPDXfZkHGvUiUPSsZAvnqgN3QaoaR5BS5XKWPwQuuzKJaKEetAyNxdkvuCY4RRKFZp",
  "key16": "2mmV67hMNxBv1QDXf2wA4dJyMyoT9KrE5KUQa9EVuBc4pUW4BgsPCGKwBtWJhgshtNTqQ22ty5tqvSBM34q8f3TJ",
  "key17": "3oLhbwbbCJQhNwcMTR6ByD9Es3mrsALZTNddARRR8PdGvtcmbDxz8HFnhnq3BYAZLvQ919HGcKLNksPwRgJkzV2o",
  "key18": "5QezRfgaet94RnTitU1GQWSkqEz8bBdj2PBs8QhkgJQT36nukJLg5Cazkz5r3Dap7ou9xh8zdiyhkoriwBHVMfVA",
  "key19": "64DBvWm6rJQQdsJAGdDxMraFtgyFuDV4JZDpVn4P3jjrcwKxqTmiFgrtXrLyz4r1utkjjK3Kz8vYJHmJVHAfiDag",
  "key20": "3QpVXRcZQ6UVVr6L853iHEs9ZdwxDHm88qd8MiymdegNSk6eByrcwKcXCZdZiQMBti9ue4QRvHnsohJbUxhzDdaU",
  "key21": "5fhgzpsDbLfck9bYi7Zb4kqXyZjCNFYeTSW6TDyWtCUR6qfTenF1CS2n9e3X1jDRqRr3MsBW8PsLXYEVaHGvY63a",
  "key22": "4NzxBGS8fN7EQpNnMZy2TZdJeMzDeeTPaxLqAf6u88UXWoAgyEvZAdZTdmbRowjgDUepWnB28QShYGmmYNdHQ3FP",
  "key23": "6VbcjWxjdhtBmnLfLebzoYgkswpDJHZEXGMQWpWBgK5t6ee6icPCqxfECBnCW6G1JLhWeMXKeUSjUrzoyxZ1kJk",
  "key24": "4o35KPxbFubaynjpuUbrzMG4yGAUso7Kuedg9M2W6kTQVtb1ZdJ8iErpNRpNEtxLVssZ1DPfUJQWovbEGmJydAao",
  "key25": "53yura9aM1byXu88983fLe1E6FsNQWjoGKNpq3hStxF65i2bJYaxeSBGQFWCwfHdp2nWnWpaSBzj3NE9XpV1NkPr",
  "key26": "4SKMwK3NtyN2UcntMCYjf2mCoY6vSxMjf1oSgYeaoLNWcbwmXLwWsW1UmR8Nfzsryo8bqUEhG1hRFfmxPr4R3h6o",
  "key27": "4Pt2qJXqxbBg5aeTmfySpJhBAKQX7Re6hATuGKGRFiWxEipaFzySmTWwkeiQK6JBkKFZ4yTJUpJg9dCnpE2RwYDQ"
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
