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
    "3Bujy8JP4GdZNQyRS4Nsgn5sLabEiC4q27H8YAwXKZWWhu4bjTSrAEmpzJt3mexpvDQVrsXQQ6gbjLsg9p5knGTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xcAmJjSJ7NEeSnYth8cYnDvm9TuWnR2YSUoNYwjKs6qQE4tQUnxH26kqWFTAExxYP5mwkVMZwivPHFdkW7GAqLk",
  "key1": "3LUVjK7P6GcKedzCkMFTYHrASZx1onaKadMrT15RvYp7aGrQDjFzW1aCzbuzbVVYa8sMrK6TWgY8VhxUmmTka4mj",
  "key2": "5d38spnhEXWA5UgTYKrQbDzvzjSYEp1SpNR5jTg3jonhNUKa5FJ1SjgTwH6cpteH4N5rdoys5wSnzG9Dqymv6tVS",
  "key3": "2kfkZV7Utq21bfeYQBmavkmTHcgnyB6PV2Ara3kkVfEgkutMVGpk5EAedhHLA5FSm7LjNbvT6bKy5qF9QpKL23Um",
  "key4": "27h3UNTFjoRtwvGT13D4iBGChAMuNAQUJ94EXS2tCTgCeS7TLTrTxcdoXSMK2ZUGeivpXse9TnE2uQh7WQUgKSmH",
  "key5": "tMEns26i2ydB8QA7JPgoEEwpfS2YHk1mJxooEQ9NEzt8nYU7Ke5X3Hgn8ru8qMyEojgzjrwM9CV8teKYaTGWiNT",
  "key6": "3Rjgzs9xB7DgEhHqRJazHQATVJgLCztFn2jdqVa6Y6xf5eM71jYfCYbJsjW2E2ZFQu4EcAWURMbXKrwyPvs66YYi",
  "key7": "5ecTCCqbv788zDzespYEWjVJRsDFe3n65nyZoHccUdMy5VwmiA72gxD89FrmR2oAk98VX7wqrdgDp5j9RVazjVsA",
  "key8": "4wCL94FbmytkX27CsDBu14hLvd5nR618UVAzgh8T1mqNSbr8KUwP7K4cCqya7Kx6evKfToFL1e7W33W1hPrzYNob",
  "key9": "5o2W31kAhFLZ5Gep96rbjG5E4WDFBBnZhsyg1ZKAzZxbDTBdd8pWrxh9ve5kFu9fGR81Fwrm5zx9kgWyV3FZ4vhQ",
  "key10": "5mW14ZNmD1J7rDqwCkkNfvL2N76CtdgGRGUxey36XqqXT8SzicHV5ptskwYUBHDn1NHwT9K8WC1vrufKKc9WXbrM",
  "key11": "55xK43k4apuUTTBYKTunj42zS5CFburxpBqqAvibh1sUg7aMpYHGb5M4GwaNvNixWVETs5bZ6DvQFfitBMKZthUC",
  "key12": "5DUDuABurjmCJ6b9HmfKTnB5y4LDkrBVx5jmq3QAYPrbVMdfamFrBPuRr2Mt8S4nbhaDZXdkbyjYEFLahwiynC52",
  "key13": "25b8fWMk5ixjqcqNH1RtK2GTemophAwETyeGuP9GgGiBZomwqA3VFEDkKnMUjDs374dUb5Rw5SyRn1Nc2ZATPvda",
  "key14": "5DgaVR7XjQTUxvN5yh3B6pFccYDy7VMfbywQghAxt8HyQtSX5f7e3qMjnLaLwJ2LPnDxNhpuoUhTnctoZ9v4zJcQ",
  "key15": "4TmKkRFrbeZ11ggjJX3MbYnAt5iTCj37qfBCdwx8qMv9UaA7JALfRgMGMMjhaBuxe5Yu5q11JbpZZabheGwdxt8W",
  "key16": "2Fx7WHMfvFNFMFhmtsvfXZnt3YzHB8kLLTefGzUVjPCeXM8jWdG8rDP15KMe2fPLPcCig73zFiLt9gypBhVYb4Cf",
  "key17": "2RXM7jnV8o1pUXmfWo5hwPHyAfMdyTvAQ3t73zAPANFYadnaJcQhCGFPp7T76esgiBqGPLBUvgorxArvRcyJmajN",
  "key18": "58VGx7aJVHvwG3PS7ELtPLFzgd1Mfie5zSYvhh8YYHmt3i2pfpvibdf9yp3xLSqSZRRVYXv3PFxVwxzXtsp8byuA",
  "key19": "ZeXxVg8TEbSxHV3GbDeDpFVBEVivXjN34oHdtyVipQjhPduDSCRuuDj4NZNftW8wcnHWTTM7DsJHcWEy9i86y5r",
  "key20": "TV6k6tk9hd4gqavK5zYojqDqTT2T4fv5zh2Bx8Pjq37eAFG1uZcPC8JdF1GX8siix7X7q6Vnhw5iS2SBqxYGusy",
  "key21": "5EgXNueWwLBPPVgNZ4wBv24WRN9GSqMxkAPvGoaUkejeLG7DQWXC8piZocmcBLs7E73Amda4bWZmuTPPu9hLSMAU",
  "key22": "2Zv3DJqjkGSAvQn4oghSnjQ7Hp9ZA1V7zYUUC5kJwwWXfJhCnhTUDqscgfmoc6wGFyuvP53EhbEbQcKdDE7ZcjSm",
  "key23": "3fZnroX4hx3EqDehxngvhP9YphC6yYPtPbKyFfqt1kLnyCqy3Su5bRvdJpymFU5SVzVREiUAGTykjqT5UM9z3FiK",
  "key24": "3NSccoMuq271xFb1vF3yd6ycfhkbvP4yBEgn1p4dmhJp54bYDKxCvTrpVTCcGHPB3MtyzEJ2mMGtcuM5tBPdB1on",
  "key25": "2niVtvTYyJBxL5v7SxScCT8L8pWP1BJmCF81xt6Vg8ZLrqbqpmRYqo91wQeZzcbLC3iYBAwv6Myb9bmLPnubSewV",
  "key26": "3tE6YPiX54bBEUF7Nnzs8XnyiXaWP4ee9ibwFFDfpHt6aAAp2kCU8NwJeqV4pfhdbR1ZAWTmhajKr8rY8AYNyLwa",
  "key27": "2tLeJ6bWX6tshw72Gq2tnfTUUCUMSXjLab6iGZCLkgnMPqtZgKxpSs9vbpU7qGEypQSkZ6C4piqs2jKwhDWsFb8g",
  "key28": "2JGXr8jDiQjMcAPh2bDA3enmP1v6LWa1kvJQxrckTc1GFigyXbgfVats9ESeU6t6Vdz267iUy43obSiKfoRbdrEp",
  "key29": "3BkxEWnQZ7AXnRNy5Z8GSBYQuKco76mfVQeweTRWguFAK42HxvV3NYJrY8J3FngGjZwJamHCQAUwvqfKnEt4HNNB",
  "key30": "5sHzwW76174GhPb9uwBAibj5kBYLzNr1TpMDuVJK5uya2EQofb3HTdJVRhEVMpAHFmjdvW6DLQfGNmSvZB1gNkuc",
  "key31": "W1up23rj3dkf97vJtEm99vfiCso2zFzHJr2nbtTN7r1dv2iWhMLTDU8AYXE7zNECYTdUWrsECN8RcaJTKuWDRws",
  "key32": "5yUTUet9qqr2XYPo9zM2rPh3wR7eHNNzm4L34tinQn8NuYbQjHnP4yeRVeL8UEkiB9JNkJP4H8ydtqwxtFwusmK8",
  "key33": "5RSSdvXseNXRUBMEv1wGCP7TSqaWSj5ds9EP8WKG5GmjgCQuG5XLyFsKcuCVXXyoDZrMHY8JSotaGgLbTVpreKwq"
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
