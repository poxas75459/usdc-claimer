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
    "3Ta5ADyL4Dbch5CDiu98Sr9QqMCf7v8gQJZTeRzuBJ87H7nxPmQVpJP5iYJodzYtoEW4uRVFDFAqLuyfZtWZ1Pbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sxhU6sN89U4m38cNPZnHJgTjypB3R6fWNmCo4wqCgoJh4Y2wjmcFDz4VNDAZ7EB9dHLjWF5DPKkFjvPUSWwMdYu",
  "key1": "4x9oxZQ1U4nK3TxtLy2ZB4CUf7jNLZJ4uXDGJiNXtRTggoNbQpHxLiQ2N9WRMY8twRgKqMQHDpPZy7ik4prtZSUW",
  "key2": "3Dfgz9rRzycgtK3aKgoa8M35KpESE93w1KEiDh3nNAZrb7NtJDdeoPtvexzGqzo4rNREtCEYuPL95NE1MMgkE5en",
  "key3": "3Eeyn9dwNs7o63GTTuYfVHgnX3GrMiggUgnY7aQdcTBD2YUUNzAVh3tStPVdg3RhVum4W78kvgRT5pbXN4AYXHi1",
  "key4": "wR2kSdNsr9uVFNQbAqAu2FWFDFScqbR9dwAxuGDgC3H5voGpiaa3AgoFVSxJqvwAWktajhQeN8qNnrJ1URu8qjg",
  "key5": "wGYe8bK3iNfL9EapLeHje92JifPm5JmfASiwu66wmvsgkVm4ku4UtukcGRbV34haBjpQVGarAWBNEnjcpzsK63E",
  "key6": "4azUUmiZ8999JqP9XGogPx6ggoA6fW4KEcG4by5DB6z2WcL7KcAm8uQE7U31aF1MkrneynH8qTxuBxKik9FqsfDN",
  "key7": "ug8F7risSsoQFDaRwWcCXgfBRZTGKc23riGYVL3qwK4FwoJYUMAyomy1q9QsaEkBrwkT2YbR68ZiHThsaHY7vm9",
  "key8": "67MC9r3pS8YYArDCPtU1fHM587pvk83f6PGiwNWkXRv5FYZsiZzYdfmppNVBS7uvZjqgtR1qmzgYbCE8NyzSuBv4",
  "key9": "2CQFDjjKR11mm9snAAxXCP1Gm3zmSh9ey4qj6gbDHR3w5kqSvgCSq7k6cNAGc2Z6iSLgWdzPts1Jq8JrgDSHvAWy",
  "key10": "3pNKEtiMpvU8SjzQ96RBCCCZEHu4wB5p2qzqv4ntcCBdWUuAxYZZes2xjQHCuCFDnSv5SJpgFpjXSwNDHqCmdXhb",
  "key11": "3bXH34PEoMC3A2yGgoQYp62SzXvRNtApTHW4kAvWkefWzrNgkT6LatrkfkwZdhxXAHer6HFGkLbDCi7Xk41tLMZA",
  "key12": "4BnEZMzapYMiHGKqVxpkeqNGo1CsPLnKHTVpr6YivJ5aHxC6C8KjaY1k7t5XLHxCiFsb15rjaEASojdaCUeLUpQX",
  "key13": "5gUWWFX7wi2Zw3LfWdEPcPP18843h9XM1HvEgDde2aF5AkGZqCxD6fEeH9Xh3c2Usp4KVicDeAHevFbTB7KtrPCM",
  "key14": "zgS6WeGjAwvPVtd6tebUAk5raqYXcKCGCKuEmK1eNfuiraciVD1nysvrg9ksdHkPFTCpTggVCiqgzgdtsMwXLyk",
  "key15": "5eCD8VQHo4spB1Hk2LbB3nHYxxcDDJ7VYGU8nmDcDo76U7XLrnrXsqK64uJBsXAZWqjfWh5UevkALAXGT6M6skv9",
  "key16": "3JgfpMqz8e7CCxFuCpFiNJzhQ4kwhQ3YziW56iB4kb7bPfvjcQtuzeoqRNSh12Xvo2nn99btW5ZeuFauLRUX45MW",
  "key17": "3Wvoo4k548AySuBbnMzLZitEsts1Shkqbdy6eH9Ckxt6NrU4oKyMBbpa7Uw7b7fy8PYjnC81thZuYLGfkx3SSToZ",
  "key18": "3CpTsNpCk449ENcX4NoV4PtxKdAsD4t3ad2fwA6PDeh2hiDJPNw5jee2BDu7Pj5QjQHU6H8raPSEuF2rZUC1Hm1E",
  "key19": "5DN6guxUFBWmHtoWtYjBWS1tS1Jqij29V5SWBepod7WYwjEiZNGvVBnp2MPWPfbfHkUUqHntJzxDtV6AtPcapRBH",
  "key20": "3oyACXiYoExHR9T6WUQhYc7Q7QfURxgZRVhPCpjV42aK6H3sh14DELhrGCgofEoxMzaGjKDuQVediqjjqRxvTCGv",
  "key21": "4sdbQkZw5Z4D8mVWz5o8c6bx9Ab6jnL1meF2Bx6oxRFsH9BgAsvgyLbQdqKRyr8m4mXKGVxdeEYadjGskEwvjuaf",
  "key22": "5tH1UNxFj1iYmZ9pYBXtzb1z69GM1mqbeaSxPyWpKEtac1ooWBFoWSjCXDrzGPB4AF8JLoueYf5nnkGWySQbDWQ7",
  "key23": "5WoWD3At8HCbJvqC7crLmbG2vcqsSko49z56NAk7YBrXMVKzq1Mty2y5cr8KHQR3hbcDVMSsGQyxRLybRc3F4fSt",
  "key24": "66eP53tXT5tPHwhY9rN6XijaXKH6HtRaWx5nNLA3jXt8i7VaGT84ZNmExAjoGXZHiyJDN8QBXBzrry3c3osDS7jL",
  "key25": "3d75JsHc9xygatDjp1QnQoWfszxtmpbH6WTDXkcruWxEx1AAazmQgPTUoP9rnAWmjC9uKPAnvzyu5PN3QRxPfVdw"
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
