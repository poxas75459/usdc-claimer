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
    "5woWL7TWMEvHG4YTvVqEcWpgRSyNiAH59EqupE86Woy8GtKrDKANpbdYBuz8geekfjym7Bqvq37YFdB6i1ikipGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YKYAU4iQAMoKSpHanTCmY8FzZM1bGJmrvAAC4ZsgADqCmjoQyfUGjT9Wbo7KE4k7MgUPScUDuTbBYg8yUc6vPym",
  "key1": "4SmbDmJH8qpT7C8JgvdonoUyG97TfxqdP721ZgpDa67G5AdzcyHw4QmSenHE5S43gL9ZP9ci8NhsbLbmcbkpUy6a",
  "key2": "3aKxwFiqnSU5YR9NaZJXzCd53UBLud4GuLHPtYjhUY3LFNZobYzKy9pmkxeXkvf2t2y884pZaqMvdccLAe6FXJ8j",
  "key3": "5ZrjusdCeSTTEiRgmHkG3nHD3uizpfkaq76vR3ifoFW4huVWN85gXckhpmiyjZ82BaSRbMtjX91YL4tqEuhanYve",
  "key4": "Qk53TALC87SqW7tRgLWVJHnkkY5vQYGiisgbTu8QKgJ5yUcP3FuRKb7Wt3sKZiZLGuxFwh5dhdk6pLrwSyHKDQh",
  "key5": "542QH7H4qXRbZWQEk9jQK7Mt6kCQqafkhkMWD2PNgmniyaBu4ngHoSrEmsimWQxtpphE228JM8Fa4b7aTs6gqgoF",
  "key6": "TMxnmkBeRKgqTbVeDWn3EkcQ5XYQM1ENjtFjLsdgkavoKCvqycXWxa5idmZGdjjovR3EwtCHnj2F47Gdk6WEdZz",
  "key7": "45LycDPfgBcHAPB74wwCfQoGsHQ5cFW8U2qwgyBJz5jwnmuK9j7hQZjjHvPDTAkvfi3rJZvxUoJERQs5fPnAwttT",
  "key8": "2VcZmLzvrkCmBWh1VMfUepkPSCssZCUvDUvfqDtfERXdRBpAwaBoNxKxC9uDCVNqZKaoRJMCbC7DrJbeccPvyLPc",
  "key9": "4S69aQMMYtPQX2ZqDVzDKwbqbF2MH6kw2tB2xjHu34pmHiS7GcpizpA3qTEqZtR15dPkVWqpXdxX28WisteP8ccN",
  "key10": "4CcYp7AeMJ8wyvMVWTvb6weEwdeGSU2LWGDAnrnrArYtnzHCCzxVTVGbofowzVBjkTueM3qCNUns2KUqBQuwUQeJ",
  "key11": "53abUGCxq9LPaFpjrdHkXMvHj6LkhMUUeX9nc8t1tHTAXrsULsxS9Mw8ZtvSkusAQLVfv7m5tf3b1fZdrVfYF3eB",
  "key12": "2abiZTZ8VqCWt6pUAaRnZd8PbdfbQVtEx3WLwhbaYCupWhJ2biFjsN8ZehE7jG7HmG9xjqcmTVaEmAY7A4kYU9He",
  "key13": "55aVvf1baf9Yh3extGiQVMNY8t2gkbz3m8fAsc8GsWjoxjNjw4dxqfgwk9WNTSpn22fEBb5B2FMPoidHT19ZpCtG",
  "key14": "3FbRKyjn3Bno66eAXuPHYxYb6CkRgYyFpEEhrU6F9uFJSmfB6RRADh34egF4SHCZpma29Zkg5eeeYMZFAotGtw9q",
  "key15": "2SXCTUN3qLkGLM8WfXob5mGhgDGgMmR2BHEK8c9R6Y8U7NMQ8sAdak5fHfnPSgfnDxxMHPwJzCvVRTxf1ts6tANK",
  "key16": "2XWomYvX9BPSsnS567PTpoKU98ujaGtkFnEoeHwMDpk2oeME56b8GibFvmqBNAf3Vve3GPfFqSfwuC1ZszvpgwJG",
  "key17": "4CQpr1ynF38i3ts1hhSYaY1FntmNkj9ZaPziTbgksdhJLVt6zQAwTSTYmQwecR5rAxmMFUeZkfBxEYsuJvV2iYnQ",
  "key18": "yPNZL5nbHfvJ7zWXFqRnHHuwGjZ4BjsjhND2sTTCRhS6RYj2kTh4YpuW1SqNf925PArQdwKr8rcvHDCjobroia4",
  "key19": "3zxMxa9DPua6E5PSLcn7tp9LthTecEwzDJwUu4AUd8PgSQvMdiByBsgdRTxUcFyRJ8REkw3azknqXa77VDHnNuiz",
  "key20": "4iw6PGPynh5Pyvjt7DcyLbraKYEGP81QCDyDQxNhrzLNpjFshjY6b3WVYWHWkwpjHLqTfoGCCgsFxrSPm2JCJTSe",
  "key21": "5tGJTr1zoYkVZoKGZbGaSNjHefo6HiSPU83iEV7ouBQPJzwqwFxEx2b9jmh7oq2hc4cXj3Ujm84imH5SsJzh4cr3",
  "key22": "652XxciWMiQDUPeNdFVofWc1qMKQPdLz11Aaur4eWTucDoivgazCNxb2CFZK4zLYJkeK7F6rFZvcxdZ1ajc8LwuX",
  "key23": "7237gpJNXgQaw2pCyyc6vFHzB3ay9mN4kSytDd2wsDrMP4MwZSGpYxTGJuzKf35gqmWWEKCdCmchX9G1Mv4QPxb",
  "key24": "615z8TBzdtw2jwvVoKvJV3Vqx9idHj28nBgrTNPcLWvfFUw6HwqMAov7HW8Eh1NfB7YuyWaanjHqBQKdynDwLVPs",
  "key25": "jFGUhqXNW3pXjkd1e9HFCWs8tQz7YipD94aG5suzbnixJZBSiF28FGUokLCyeYwyfxBDhHFnL7DGehMv9NJ5wCF",
  "key26": "pTNGDL3wL7eFeoFtfdeto5f9MtD8j3LdTYpShzW3Y3DbsWc6wWJtzy4safoUiH3YhXDB8B6hPagTJ9YXPfFUu34",
  "key27": "23732rZ2KQ9eZsxnsTCgoKdDAr14H2j99qmEdtHoi4M6r2h69DtXsySeojK3WMZcJpE1hVy5ZKMGDxtxUU8wssDe",
  "key28": "3haZv9sVP9AcXkYYZjpieKzGziL1UC8goDhwEzMKcaMJUZaHt6g6BePneJqvXMsKfG9j7CvHT1bN1QNE3cGUBxzU",
  "key29": "45zdok4YoN3VeZtinV2n26Yxjj5H2u3LwxqDkB4hjnAMX8f8kX7WtjDVpaYfETjXZP8GZAWxERD5ZVYVGFdJch2u",
  "key30": "4yfShZQymbuRt8LszgexJnRgw4gKeCRp7kYFrRfZaznoZjv9qvauCCE5X5Zm2icxnT1NYcCZnTf8hyE3NTDsB7vw",
  "key31": "3dXQyHhEmd4jvmhvFLec8tYNv32p29H8URSe7U48UKyazbJEVUXx4y5EFW5TY13S3aEypSzYCWC5mGv28WT648qQ",
  "key32": "4Q29kpbJ8iCwXfYeVTAoWS2ZzgfGCJuP9ABa7XmtsvPjmx8KKJazaMNLEcMAHmQKJDQinfYFukq9TfH15eSpFHCB",
  "key33": "4Jubxg3B13r7Y8cShPN293q9QKvvePyyBjpkgk36ZdCbtcQhvTo6YncwRPx26WFn3Qtkjv7nqiUAtW4Jnq291xP5"
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
