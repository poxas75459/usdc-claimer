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
    "5y5RBX1cWKtmgHWWijf8oXbEGYWNfxt25LxPKXthPmigaBQPRLCw2cH61Ttu69AYDFLQ9XoKh7iUTGe7oybZdPQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RwVS7DshovLuz7GiBWSw8hjwEZ7nBDDghXELiTomQ3xVxQZk14XUmg1dT9oHVuGz7wbL9yvSK1gGZYSgFhssDiC",
  "key1": "3begqZJjpeZbRYtxvsyXdq4qgcsUBmKW7rmHuhjwcknbsajCwvMBJffAFTxTBLqvPFSoNAQmY9N76GV1nV24Y5P5",
  "key2": "49i15TCDd9oAz4zN2kUs63a78LDpc6jeicj1GXRgBKU4T7TDweKnWmitvb7miGaTXzwaHWSoUJ1NWbfsTjwBfNvk",
  "key3": "43vpao4jgWibTzXPx5LZb8iTG9p29Pg1Fquu9Pxkxdrm9UMGhcvvdc74SwKBEuXJNUQKK2Gtc7tZN6HJBgR1fVX5",
  "key4": "2udithMyHQD8bwHuZ9vyP4m6Z5daiybgSs21Dsh7eHsEKdyzojP43qGn5534758wbz8EJ2PFKspivbe6PyYYfExB",
  "key5": "3xKigtqAH8FwN5pCqgb44LcXtRb7VT9dhoj2JLYRXAvoRtTxuNMzgNQ5bziGUiuDtVS7PRrjA86gCC7rcx3rSvGw",
  "key6": "nis9EUxqxmPLUGy3Qr8LQdxqCgJvQGWVt6UtaWqHfkFKNT6wHtdtfHfv6adr6DSCubqcV13NLhNgbAS6QvvpVVF",
  "key7": "4ubbL5f7Hv9yx71y84s7dSvfD7ZpZL2h8FA6FexBy1h2qg8MjzUsKKDuaiGzg83Mz1n1TXDFwsh48uHZSVT8ZrVk",
  "key8": "ifDoAtVzckUqQRM5BokarZAQrVMTLJk2sRiYWLJJjsHrfwEMXHQotEpbqD36S6AKQd6D8z2hvk7XhP3HyE2wwCr",
  "key9": "59gghJA4GjQbV9jYLCdnjXy78F2GUfqdiv9zUDEuDGPt4sMs99BCbAw69rceyk6BvdhLWzjNfcwTAGdY8vathLnE",
  "key10": "AVYpMYZgPPV6N5HqPcEvg8tSFnqTAxEbkPWCh7tm9WvteaPjJHT2S24iRuKvCzv6A259cpDwVcjXCEKYhkfvNev",
  "key11": "2hpSZSmwdUzj9kzXY2rwc6TG74eKWsJ5HNeAFMP5jgfJy25kS5mGkjmaRKEAn4BDNem2eoEk8b8TuKsG4wxfyRi7",
  "key12": "5rasFg7roxE156s6p7wzJTYsn4v3duuzN8ZmgMP4jUb6HujahjTXMA4NQJXU8Hgs14uRYt2GED1z4Lv1XbWnH21v",
  "key13": "4aH2dMuEHo57KpGAavr1Cr8dtzmXszmiNc9xmEcjuPsrhU8Yw2PyRDzZ36azBERdEG4H9gdNrDq1nRbqCfBZwHo3",
  "key14": "5XS3gzbUVW2i4V8hHLj4iXgayCtpFPBbH7enHHZZpQ1D54c6vko7J1M6MgALb6jpa1xQ8rmAixvRWWacH7Z5pcbg",
  "key15": "5Zsv7JTxkm12UGSJdVQTQEPWdYQBoERLrqV7N6WPWX5AdZy946FVDGuQxXHa1jEorAYKLyoS9afz8V4K8UTSexbE",
  "key16": "4E1DuCiaEvS13RPzB5k2SHLdQsF9jjprmDMrpfGAtWyEMsBdomF94p9zzn3qoL7nxreR7zhqayWe8gxhEpv9asYT",
  "key17": "3haCisqdYUeyD6yUCZNS8qVDK1VJhLzNVvpvFUouMWdHyqD6o6BefqJ8uokCEJi5uZn37BaiTpZg4oCw1BijoQu6",
  "key18": "2SybzjyXPgFjRZLUu65unhfHvyT1WjYmzBAPH539BBgHcKXq4ZgAtsDFgfQ2K7hDYxRJfr9LeBRoDbJ3RDNUKskH",
  "key19": "3QiPJFudomcpTAZ2KBBBb4fF6QoKcZjRE2tyeQ1JAefLkuS5J7Vv4rodVf32z8KiPb9vA5iy88Y6pff799fT2VL7",
  "key20": "2q4CAcCtScmUquHkenLh1qjLAQ7FFjRXibGtnVUDq1NqWby1sgMKWz5qHUy9W6rC1wUqQiVwzRqiBZffaeySdEtg",
  "key21": "5CwScDmaS1XREFLTMLjSTycLkKfca6bwVcwRnnVfTywiGhCrHDEmw2sw218RSG49zDgQjjM9fYk8uZEMN6BWK1oU",
  "key22": "3YkeAsoJK4kz5QbnKxZ9Yc4234jcQkPQJNHJy7Cdy8yzT6Gw3XjSXzSkCp9cR3XnZ1aU1RHT5AYd5wWohF9LVp2Z",
  "key23": "4DEFhKXPKzTf17ihhBhdY8fH9dZcADL7oUWE9G3d2Diu3tiai7qHzCUNik9vBmG1cGLLSingAvmkJAwbHMXnxz9u",
  "key24": "46zDMhgw5igMzk16ZGjP8Dq3BjvwjpxbUC7QAQpkeF343asyWyxiXafqg2RNpSx5gFSTUTGCUJWTg4bn4TsSgukh",
  "key25": "4QqwPmhewjQy3nohArEKrvgdFFi4btEtGe1EKdnTP4XjFFprXMuHTX9XS4Z7UkSK2eLCQm6etFN5ZGJsY4FCmAC3",
  "key26": "4G66AdrtnEpLnqbsUEzmyZARr8udT18wpEG2M8MiZLBABYdHfjPNHE7PEx6xniL91XK7JjYgetvNyhZaWv9FMjx3",
  "key27": "65iTNuGXXjLU4MMrfnurpS5PavdGyvvURfNX4bKCZEBRJ1XD2tDJgA5WinXqHp6QC7fdodmD5xbEq4HmSeEY6EPG",
  "key28": "3HoWTD4ZQbxfdtWagdQndzygUrYgp7p2xmiimvwbMYBRgCvApLFtcyvHqqyuySq4VFCSv4nzaN7RRHDEghLeZNti",
  "key29": "2kjwsbSKvNpfhTjtHEZpsjhKXyV2TLftyd8E2cq1qsvZuaSa2TnnC3nftueKm6UhyFmT7U9fu7XdBNfWt59omujk",
  "key30": "56VUFTCLzXxEKU8FfUMAfytMoRvjBsdeqwmVUdKm1rh4rTk21aJooeFDgWxWiBMFMeE6ZnSEukJnbEyrLK5yqoEf",
  "key31": "4NotcDu8CpTF3WXiNrX4NNKrGLjmfwpmKKXSUCgTN3r76LeyTWLP1WfA67JFJFoQGarHegT7KjoBQVByjMxhR2Ti",
  "key32": "5pvpqJjchryeLfEEpTgFUUPVY869sFLadN9wAhLNeHCM8rEeMJLMEw16vVypM7WMHAX9xF1DLipPzmT2hDf7zHdH",
  "key33": "JPFUUW7VW1Jx1onAFknZRn74Q7K7BMQNSU8pxNCnQZrRp2Bg6uCXYTkdhAyNcN4TUzuqzSciAUGhnwDi4zsgZ2h",
  "key34": "3CLCFoxUQnvgnG1SGaBbP3d9P3fkHapzyjvbBbJdHN8hLqUf7hvqGiiESPzXjexmkhQsiZtuJBWMxvDWqamHm5zc",
  "key35": "3Cf2jayAjACthr3rSyNXrvFoc2Rfo6SKrDojQFe1tfhS5rfoEFWH6EY2HwPVVR3wiuNyWhpYnVSKsu95YRXruBAQ",
  "key36": "5xskQPwbjjWHTC24nZRwBCofZbotehYWggSoapgDijG178QBQaZcf8jFytFkcvkWuHFrPudB1nRwfn7p8aZoE2Pc",
  "key37": "2nAnJmaFFtSDDLcySbZvaK8QTCXta3BA7e1wj82STHcphKLJwT2fP9e3Pb55kX8BRgn51FXWAPDHLybpEgAf4f1J",
  "key38": "5R5QHVeUQZSpwm5SZR9tYH5UDRaco7ezW4GAaHLVjo1SeuWzdRmvHJVxjy8aByNnYXocvajU6q9so7UXe2RRwtnT",
  "key39": "67krqwi7tQZWr9AP3kZwboj2hLc4rtXU22BbnnHGdtyGe67YCUn2CaE5C7MoiE2bmTfJhUkmanTnBeHgZK8zvpmT",
  "key40": "3ZZ3r7KsjHxC75GVdw6fsoZvG1NLvQDET3na5aVrTDHZtqjXiPJu3S1nkaa4i6WoeeS9ubD28e5sRPR3oRy5Xtp9",
  "key41": "3xJffjxmXByprLovvUMMsapMTrUEQ4wMkpRcF6aJr1v314HjQG8JePy2NZAZ6N1gXZ1kmhwMpSosrB7KAV47tTeW",
  "key42": "2kMdWU9kidUN6XLNw13ESM2LytN8UiBK8bJwBd27CYBKTpRNf97vUS4uTVdEhMcRjwxo1Xb6QLx69ifBRgnnHFdo",
  "key43": "3PeJmYfEQeBBJ7ejKeabR4LnFzH9JCBTAc84A4qst5UnXxWCbfBREgb9KDk2EPKy58sTSB2J9UkE9kbfbVphWV5W",
  "key44": "4egBmT4gzMC9zGTqotofreSnr6uhVXXPqfdVnhTQaKzB6wWBeRhuK5xutcWNetWGayekQkVFveYED3rAmcuWP6Mp"
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
