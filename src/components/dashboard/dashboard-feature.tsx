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
    "3ZQtNeBHmQNN1DGDtyhSnGXfNbfowr6uhwVNZqr32ZwNXS37YKpJJwEJfEBafJ9FsgVgSNfaMvaA3sYFJ2NYUTqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HQFmeju2HALb1QJ4ypiBDqeCivFxVckDQRSZM2PP2damrn812RQGAFNBLykRs6uMUjxGHmAWhvaXcybmZ29P5Ed",
  "key1": "66VeD3wJDW2ZXiwAEuK25bns5ZHxWDEBtBUojZwbk2EGmVqGskNR3HVyLUE5BKoY7gSVUKjDPQwARfTJbXuBkHkh",
  "key2": "2pJSKMkx8JDJUXoji2qyw6eNzeJ4UP4kL4hmkioSVwNDVjLN2Lgq38hWNsW3KJ9EhL1WW5rkqMfUWtprF6aSbDfq",
  "key3": "3ikCCt6LDwJZKWwKVhqC5CTeNq3jSgpkKcCRGCNNTjmZoHzBRrWfgVLcsQCX1Qkzpr1YC5Bram79uvg71T3wvvc",
  "key4": "3c6eZchFrqcoYRaPzgaGUNvUp9Pts4w5AX8q3E3urBJbxCPHF9nXjUQGfcxfJA6Ze1AXtgt2jWviPZBW6xEVRbuD",
  "key5": "3GzFmYYfeuo45arTteTV6ci2bj2JtTHmqaYJ2kM2aF1HQ4bziARh3RCWQpJKMNGSv7besKkMcTUbbvtzULeQV4UC",
  "key6": "5HwLY8Aquvy7nm76eswBRuLGNbPEfAtj9Mp9EpXKAeuQd5pq6paJ6MMP1T2MyCMEJnFZiQQaMHS23BBkmq6aswmE",
  "key7": "2pZq3EXoSRDShNCp8L5kcoWgxdzE8bPJrCAKjeQRgK5XWBuz8dkC76ZdG6HrFmp69jL2kt6QdwaghGryM5bjQ1FB",
  "key8": "4qahREjpVPNJ8nB8G2osu7uC4hehojGXJDXNSxgHPsXz7WayVSmC1dnQegVWeaiRMVYKDrFT2NhcfkGGQstkvJhd",
  "key9": "2nsJALVo3ggPYC7ZQxSHxZ7RvjNDGRRQR8Eo9vHQvdi2kiYfrmXXVJ7b4jGPrCssFpwn764MyCM52KGpQe7c8G7w",
  "key10": "2K7s3CQxQc4LAuXvs4aG4eSQDpUQcvqTjRaJQbdZza9TXZNDmzaM9MApbvtCqqHW5Lv1ybVhwUfPVnxkhPQfU9Vu",
  "key11": "5Kgb8U4UUFmV3EEiu4wiGayA3DUeuKT2EcyUCxH9bvcuBHw1unSTW73cUnQJiBKvDyih71wSAp2Epjf3MRZXzDju",
  "key12": "5PHe3AYHchGwKhQgfB7JXvjRQLypFK7ig3BansUXbDWicu4L5eBd3StDLmecz82MDQ6VU7C5WUUo7tC8r9tG1Zb9",
  "key13": "26yVw5sXLwCVo2JQ8mwHeJvLccyTG5tf8VKxuA1iF4zUKdw7bQuEcRTPchtQgXioYLddstEEweY8M1LXtBCDyv8F",
  "key14": "D87542ihQ5aYH9ADPxAstyEMoAMJ8FGF3MXwLjJq9Kcq9PsxjymBavDca9Q1xPKs6oJufqDY3qSwfj8uX6YTqPJ",
  "key15": "65XrKJJSoLMJGx98nyBoQ6WNDh6YvT6tCRiSQ2Tj4KbLHhkQQfNtQnUB7YujLAQy7P3VyLknYtUs1t43cdTU2pFu",
  "key16": "22ydKQvgD4TNFoBzWKK6b2XWHG9tHx8Ho7KytmTnp6FZujazFaJUbd1H9wG4uExBWRGRfUvN5Y2UErMf3ATVKt7o",
  "key17": "4qipPaxWe7z3JAkPoWQPQgFmv2CooFxrp2QVBuWG8VLUVhmRAqHu8dWtYkJSZxFQfXhLt1ACW931AFWafGPR358e",
  "key18": "iHYuA56AN6nNCFwcQoRKooE9LEwgPxG84AgUjLs3q6WYHTBQ4ko7CS4NiwtazgVXdbvHDjRo9sgPZbkk2wMf8Dz",
  "key19": "4NMqAUQRk2jxMrYnPgHEBYvQ6q5UWQy4h54azp3UiFRLZ7whXC4XcZBzrm9LDZFe1eZp5teCGSULWmRHFW5avDAd",
  "key20": "G3q13UGZbQzdnySgmgqmDPTVAHpHTSu8sDcvceKCoyvGswSDsHgda92o9E3dzkDbkFSH6bLoJu3nPdWL7BETJoq",
  "key21": "3QtAGnKpR17FBtXuuRewr3DFUZaBL9riSNALsum36yQ8ecAwJ6J1sDfEaXqV4aGMbNQy3g2SN6pbqhPTLsk1Rv5P",
  "key22": "43YzvTw6ddhZXUWuh4vCXNkZuy6jZ7Fwybk5PE6vkHor6FMMCvNUzwNgjJ5e9GeRE2DsVSvzmxCJyZh2pEqeQiYm",
  "key23": "5DzqXfks25GWJkoKSdArYGQfydvesjdCCyKXZX4fDW3siPgHLXnheHpbGGtm1addmgVgQVadVrW7DEsiTh7EmgGF",
  "key24": "5CLtJnLjWFMyKkTboG5JPYpq8YWsNWPxWTpkNCfqkKicSEFaF1kLVGN4Wq4M6X9Vwf1aDtdZ8m5xu6yMwE33GeQt",
  "key25": "61ppf8ZU1dvSsiMSawKNtJGFGAAyMWmjNYZ6NQrHESyWWjYXWxsnZS3Cmz4FgQ821vc5dxZD5D5SEDRQTk8hScs3",
  "key26": "4KuZ7nAc7fo2jqKVNuGQTMLNGuNsBmxWVKrfk8TSQc1gVujknuejGSWNG3HDnu1PpRyETWQLksjzFhNMYdBABW6v",
  "key27": "AFnVrSARRcdjYdvJqZ3z2B8emKjSxys8hrRVHucuLGincgSXzTbr9cXLMQ6DYyHLy7CAv611Nr1TQ99ZHbR11w5",
  "key28": "43mE7vYWLr18PEgUa5HPEoqtRLxnNEsF8NggG13dQgGNNZ4TMjEZSqb711rCxBYRZbE6e4M97J1SvdWrRDWjuLQg",
  "key29": "5pEso6u3Z2xmeMAoAPX8XFPvzhouBmfKGKntxmyyibA3SyXHSLdhdnUvmKL5KsVvq5TyyZ3P6E2whJ6AYC9yGX5c",
  "key30": "3vA24XJANz2T32dkcmF32138WFFdwDi6Qsa5f7xEd9Y9Zy3xMGSMNe3SPpbV7eGjSuyimuBS1puktpUiENB9fGjN",
  "key31": "Tx6d5KkjcTqG38RX7GWM5zVHHo5scax1pz1v8bAKsJLj3kd6WDm8NrN4mqj8QwLMuSUVf3i862rYTKFLe4aGDDN",
  "key32": "5AuKrPLD4UJEXo4qowB7k7ZbtwkmWsMcPxdPqaXDwVXz3yHWZjMhtz7GqabryJfecXJRS1bM764hDsUGrCqxMNSP",
  "key33": "5LLcnCMG5nsiGPB23P2DFPGsVwf7JKCj7gepfeHwx4EiZ7SupCX4HkTRKB6S8yE4LPbnUimiNA82U3hyivFPEyAw",
  "key34": "3Ys9z3YZaaD2755XnNepPpgrjRqkaSAsLMMwu9g9iUV8gYyj3sS97Hf94Li7mMQWTfHqUwEc5jWg7mhxMRqvYatk",
  "key35": "3N3zTAQoXKei5qkb4SD8teFsxW5dddHxfQ9xDMf8rcRuznbQTWXRDGKm47zimBy2GzVk37aJPCVN5gJUMpRTDZQU",
  "key36": "3nge7FW5MwgEZhNvLWGYE256oon9vLrEcwwiJHAs8M7tPQafkfdWPjkXBNwYQBKSEmKZXEgczxDao4WpAmMBXKtv",
  "key37": "hJg8Pj9bU2RVyjkuU4VHVHbajDSBG2pxdTkbonNeq6PwUuV8C5HRJBiVGbgtGsWPL1fXREo4yKvpxoR27WN7ZRK",
  "key38": "5pKXqK5Ai6K5VTec2mN1VmkqA1qZZ7WdNemyQjNUAgnvPqHGN8g45NQ5Uvm6K7q1vVTtzos1tLZtkGsdDk14q3dH",
  "key39": "4Ta5N6SXAANyz8KRTv8sYxYbdZ1bDSmm8s4RLodNizkJXsDMuqC8kCdqkZ2aTgG9AGSRThqV4R2FGm9H2mtTGpjD"
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
