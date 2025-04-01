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
    "4QbGUHyE35vrZpt2tFLX5n55oNxCWvnvfJ5TvDsQx6kGBSnVfWneXssJFYbEH3cZnwoerC26rijk97xqqXh948oM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gwAMiBBcV7TT1nv9oU6fFdk1hsxgtbAfoPES6iu8j8DyhjbGbyLKpD2MxtFAWqSGrZthuRjTRoUDKpDQ2bqRdR5",
  "key1": "3mrnZovxjs9EW15vJu2AnWoRdWHPFqx5xQD1sPDpRksSp6G1oszzwMBrX3Cksp9BPVMecnW7eGdWhiorqMAMAab",
  "key2": "2NrG3w93vYPRtEjvruDmBYuDtoC2jeroX9q4j1rBq4b2A1CRMfgJ41efGXDgZe4teRN2PxgGY9cq4WFXPnUtx2LA",
  "key3": "34MGPtY7iX1Aahq27wejEJEWvX3X5ffyTePLR6yNndnPcoEog7NJq31WukgucueiAjg5KXwMACvpG1FoqS13shzf",
  "key4": "3n4AVGCh6qBBwXkaPjw8uUTmGE1zUH4PwiFSmP8rxQDpiYBovi9pJ9p66ZxFGTGW31AG2Yji9kWdBg5bRSvQpHdZ",
  "key5": "tpyxW6h1DMqDrxSkZ7ZX5AknvU3EbZYnSaVpew3Pek5REqXT5pSyT48amc7Lia9pVMQLUh85nwLdGcGSSNGzNr4",
  "key6": "5zbC2VGKiVz6AK7GHUoV3RNim4jusDYrsgQLoxAuxwDmuCQY6nbcBqsGmqZg4APdSb775aCcZE82K5prUsyr9VbV",
  "key7": "LcWq7kN4cGM5qzBuo7oJR9qeKCf2nJi6uVJuvkVvqnAxq4thmdr8iUmLAUb64jQ39psjj7cPehFmfaBrPXmpsvC",
  "key8": "4DpAngTXc7Y9LKQTpSN1Ae1WVUNPfS7EAU6Rt1ET91SUWG3ccE3Zih18bStWxYp8uY5dhb8sgyEUSeoxaUcvbk3N",
  "key9": "z9xuWDLmDMRAskxosdBwVZRpwNvFwZvjEoE9oLC56XEhHqWZNtSiBa4A1a3UMVA9Z11rhRW9cqRnspPVX5qDG33",
  "key10": "22B4WhWP7JAgVGBnzZq4kr6yTd3cWkpbQ8GJ1Cyn4ivqdP8TGCj7Jqn4AjRFCVKSPrDNR4Y1DAncoQ2BrrgRoLzS",
  "key11": "5qs11BW9y8EoUfN9Ho6sT51nmmeoqpFZpQw1buUR7ZzQSPXG29jwnWweYSMGBg7XTK93xESZ5F7iCVn5zjoBn2Ww",
  "key12": "5fMnqTmsgsaWRgC6jDRXV4NsibNxkHyCeQ6tGgzD3naLhZPMZRNuUkNkwaR5KbvHk5sarzCeUpgfNcjRdFzYiHye",
  "key13": "4BMwR3kP5ovn91YZpCPLCXEnrS2pxmvGGeip2fFQz7GVuLwaxFZzHVYqbiSJudycz93eKur4CeTAeqskNdqA31mD",
  "key14": "2YxNpMUVu1H3vKJ7kGFw3ka47bUAncbEyF49F46dZX4E6YWRxxCEvsF6wK6Gb4uR9pKofuScUqg9Zna2oTzvgYoZ",
  "key15": "4ZdaTqF5qR4nA3CyR9mTXVkvuLjGSNMvetBvTkNsUCddjuYXZPxTE7hfJwnSVPkbc4tVAJwrzgkeaWGxwfwdteyk",
  "key16": "5GnJRY1oR5cYsCJX5pSHrTBwesupdbE9Vr9bwrohvCiCSznNb6WHkw9XAYQG6BnYn3d3R3ApWSMcWu6YtxCzwAk5",
  "key17": "2PLrmvj42vH4eE3QEEmUPotJMb4bfTeY2Xtby7pq4mbgqmJKEaSideDM2aEsoH2fXJ3etzQkLJ1hR3YbmT1bBNsR",
  "key18": "61YKfnQgATFMm2XGiH3KqeB66PCuhZ6Fb3gxipwdEPgWDccZFWGmSVvRKgWxyAFSpcvgDb7ZTCQFXPMmEmWhiMNW",
  "key19": "5d7HHCnD46ZEi8dXofRar1aS9MwfQxsxXbKBXwT1GnxktuhRGqx1mC3UcJ5bvLRMkqaDSZXCgntG3JneBJD1Xp89",
  "key20": "3AavpM8PCuZFSZgpvmeuaj3UZmAMA4HgB9xS3fcen9Hd7s5W2NkE3tY4pe8wULBbzZkAQhXC3BxagHD8edpuYzxF",
  "key21": "44fTeGjLcJ4zmGYHpNkfPUKmNatLkYfFFsGEUaMNaUH8qSJSEqzeTrcga8fhvYcJwUB1tn9Y4zJ9Hu7cZbMBvmGc",
  "key22": "2BpPZDBCTZJ9zXvjARi4eVZQRVoF9TmYynyDWgvG68YieUUTCoMcxeyYdtn7yRG7BWrdZyqWbohWMYFYggg3mSKm",
  "key23": "2nFF26Tqx1QpgMBVen9e3Vzq5ZWoVWRtVuUYHz4B85hBAz9T2RUx3MoXj8N9fXkFQ2wVGGkwYujYQX7wFuAdUNh3",
  "key24": "3q95L3RnbyU2XqjTpFqk59CiWN1fW64tEjvba4Y1dd9N5ZCZtBZiw6DtMDjdqS8yCFRNF9Tz8p4yvMZ8oa1tAE4q",
  "key25": "2kdAiaV5XbjmXz19TPqcvaNJvgDQL71XFgbR1FmDeH9ZyZw8p2KxFfdhXjL9vfRiVtJZqtWMYcT6pGdLDkSwVFDK",
  "key26": "2UDXk8MAdHxdZquB8hFK4RkuJ1iaj2RK8766yZF5YyA7tKiZ9QaSHYiRVkbomMxzpPtJjChMiGeYcaNE6rVT86jB",
  "key27": "5EndtXYpAsdA5wc3RJxZxhg5uikhYqDhUvCsh6BPYLnxZAJkxFJAk1xkFiqZxnM1T7gNBzeqx7jy27Zp8tL4aLDv",
  "key28": "2Dahgmk9qurit5eT9kNaFR9uy8sDP5MafJj922gHEkALsi7rELDSgq17F6VZdaR6V7BitxKpUxunc8xGnnVZAE9m",
  "key29": "4ZMaPnvHbsegbtwp4dNzAaJhZut9oqwDfkZazZQeBfAji5nDVVGdwuHc18APf4oevKib3HRxdfYXgr13sBBg9vfo",
  "key30": "2VjNgEbtYjCh3x6SKSsab46g8UTQN9be7VtqKLc5EkPCGxSXRnH9ZhwgphHm94W3TtmqZwdWf8whE2Bqr1y8V14m",
  "key31": "q9xGmnndKTuePVccc594YrUK5GiZAj5Ff6VwuMbJ7nzDPVA9JTHzjgAn4eqcy7a7T4yRNGMdFGCnAq9FqDLLgKW",
  "key32": "5bDaPTi4DTKMnQocdMihM8Hft9Q2LYSgDMS7N51JsCaX4Tk5S9sVfsJjKz5q2okGpB2AnZg9J5haUXgpEMC11VNt"
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
