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
    "3TTLiG9pPgUkxwsieb2MVxPLDsd467Fw1q6VaucVcd32pdAz7wNEishT68EqN63whWtVwxfLoR3xP1PUfWWeH612"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qATyJdFqB3Fa53RdWuorUztxVSmPq6XGSDruVExfigRkMeiJRVCN4GwocZAf3zafoVDdUscCcNeEiiMcEXYVfbU",
  "key1": "5fuhZg74hEdLVsRdRJQMeHiep41CTLG3mM75hGutz4wu55VsEGfcgEaj7ppWEfT1fnmEKSEcuiJswwJD7trSeQ8n",
  "key2": "376ED9uZ42pBux2w3bUYXM5TuNsehwSosG3u76gazNr3tDLmTnmA1JwfM5m5EL5Kk6EenPw3Zi357WRbLvPweSaR",
  "key3": "2k3DCTpzoHWnQ6EtjbfUAQTfUvVpBpLuZyN32UbbGtPcn97BJ3ghsRnCbuZd99awdADRUjQNU1MrHck7ftrHtvxH",
  "key4": "22n438ZjfvseFhLLTuBvJ9R3RksTi76sB5GE4NKvsDYCTeXwLYBBpyrHC6k34cKiSi6d1NA6JYQcHuphtV6KBUBr",
  "key5": "4BWzdYZMc1z3GhL7EX6KuwmUMRwF4mdCGVAZ831aaGcrh96RDA6HEm9V6Ubxas1SMjnxgN6YQJCp8aULdB61uJa2",
  "key6": "2bwAgQeiqxk7JphsfpXVa4w4i4ETbWcbj9Rh11tKPDx9rjatdxsAsVRz5eayCTNTHV3xhrD7LvDKScUdSmRL9Vxf",
  "key7": "25zoa5DUx5GuUnjdkgLnkZFdN4E7gDcRsccCD5ooQXu8fxHxVrfuCZ5ASQMWC2kJX2CJsd85NV7vmKrpZHv6S3ik",
  "key8": "49wtoD1ZA9rKcs1KzW2AXBN7Q4hdtQAcipQDMLCA54aBdfyGxYZhG6X8FKj5ZbS9zQEoKSnETvSR9efDxnwSYDUw",
  "key9": "2wucRuAaoP9pTszCLJwjTZXcn528qqZHqMuNfXiGTobP5VMSKC3126RYbdFhbtBiFqXwLDUP47vrAtZu8PpgdxaM",
  "key10": "2V69Y7jTbvdWaxjHCMpNwZJ8At9QDsgvUbNwWMt1Ua2sVVq18AT9D4kpWNoLhg3ZPvsG25cbNfucAps8qZrFaheH",
  "key11": "5r6qMwDFqD6Wui9dhLX38fj26vF5uAdyGEpoBfUW6xyeYGBYso9zdBZq5FhC7YhVCKWud9dHNNkfmDCtjcDvXA6",
  "key12": "CpQSm7oNwqxuCAP4jNBfDqa9cGWZA1uiegnUwj2AxNd5MGfkEdRzDmAjRb7KB2a9omWdSi524ncKq5s8isoFq47",
  "key13": "4Y65Fje7WyCi8RgYd9TUHYAh2wgAYJYEykeYANYYQuQ442RDVkpsAdG6YV4wGTh65mdZ2hwPvBJGvMPqLQFpXPC6",
  "key14": "QNm1XQ8F5m2PZmsi8gfmB8JEydzdD4xCw22D45oxYgW88Nw7C5meWvjrMk1edi3V2fLfv8z4TimrHgGo7hSMVAZ",
  "key15": "5xvzEbEWt3rTiLMFa34abN2BmiYvJcQfc3KVkubqdNFYuwNgHyoJAmX6jr83QcfySNwfwD5QXRo1kbP5cJBk5r2d",
  "key16": "4YsfG6QryQXgDDQZCPrNU4dLBWhNKk7T4Y8yRew7q2Q3LS1fSCJ7p4nnR8AquJVX2nV4UiXqXs8x9rPz5tEJbWRJ",
  "key17": "XztsLBXuR49XobVMrxrMxMJGMm1uMQomXrA4eNexXBd9BaWKy4izcy3RJQbG3p8vcnW8bm49wdnwjDaFnWJV8cu",
  "key18": "n9r34Wn4Ash6DZRfJWcAVHBRf1pFixTJr7BMtWm7ZEKZqzEU6DdgDPE6rmwGniyG74UHrZYHKt7JSeRmBM16Svi",
  "key19": "vCMWTMCNAYjxHqgW3dCs63aGXxbjLNWg9bJL6ap2uNSSNJ6FqMF6jWyFidKvEaJEJaa2ELhEo4jgtvinYzzzy8S",
  "key20": "5PXTevbJXyAZwYhPgMZuFbnq6oRDwtB1Piw7K7rj1cJk96tZUfRpwBjXqY4PZisuKBjCm91NJHaTR7fZootioyMV",
  "key21": "5wF2V5watVbaohQakJwyYNpHAfxA6pegNVvqreWBRKgvprMuKLUFjaQDcrD9BJH2H5FPye4kGdozwTYxsyuUrLej",
  "key22": "53kW9pXkJQwWMSHLpNSWTCniyC8MAZKzQbjwmfT8YqDtrtomSgEMdt1dxDBS4tRAy8mHW7gsQBDwDMHCGAW6AQD8",
  "key23": "4LEspMpP629XxtRMV2KaR3S6NMySuYEa1nUehhg2djUw6xu9HY5g6asTxjsjUypAEdrqXaViM8wLvUW3SHv4BaXj",
  "key24": "yh3GA5eY2nPFtmxiXv41z54L9zCoETofuYELHcKsbs6Vzn1UFoZ8vbHxNpjQZqjFZNLLrdJ8XX5LEPq1UbeVo2Z",
  "key25": "5As3paoqDWcpoZv7xCuFCmMZkMpUxMbGBzxJnzmqS4CT7wVEQjCbAno5b95njbCZhwd2oEQWfas72tNjfyNruUvt",
  "key26": "3kGdtJmnWbCGFD7CKja6xw7CLZBSJxLMJAobfVzBFGGPaL6mAvRCxzEGvex2jqqZRTMZa5hpxtGKQp78f24k15vH",
  "key27": "3tgr8c6rS9KUYdLopJYaZstGVHvb1ubD2zT5SKDcSexApDALZ6yhGH9a6FyLAhUsDZQzeGSeZ1u1mZprZ1NJVgQB",
  "key28": "3EyFnrLxJQndVS8L3L9pFX3CXzPMH6A2dSx2VU1v5kyQ5rBFiv4CQW12ioTDNEYUGhKjqefE8G3PTPQ5D7QUm5Fz"
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
