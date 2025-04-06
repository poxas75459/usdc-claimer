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
    "5xPz2YpTLKxGR7RXZyjYzpsSkh4u5GhDJ4bBkUQj5LFVJ579pV7riWp9M2NCfgiw72oAnkaNbKkK8bSSfkSwD2nY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZpRSaPFbjrRLEmGLBt12GNyQxmUH9myTFC3X4ErXnxe628ooKLX99h6TBYyAWjSShuQyh9HsvHb98MzFmKBP9os",
  "key1": "2Z2BNjjrUiqRDni3hQUwSadVD4jztcVxAGN4sHmwm5TU1CG6W51HVhLEKhSk6kKxx8DnhnG4Vz7vK3MzNDQc8bH7",
  "key2": "3i1rFe6eQfWQ5QxxEH9CwystbMLKfG48ujSc8LNrMkZnJy4KQSvkt7YXXWXDUz2rh41DHZFwmkoU1UiDTFaaxKqU",
  "key3": "5i22UvuxhDwoNUMnw9d1c9BN5b9xik7rvhpAkLx1QB69fPhgTov8o26YRTDhPcXLtFoYyHUudfXoE4tSVNztbP6D",
  "key4": "4au3qWcxFkoTx7dJHekLqTsDrm2u1UzfpYK7Hv6sRi1g8jVPDzaQd8XfEQcNBfdBQmgiM4W4dMKn97VJFq8sxvqi",
  "key5": "3ifx5UGGC5pwt8ekzEW9PkhbTfiV2Tkfd2vbwaDWjM29jMk4xbUaomRbQvUSBEmmrCCehxna6S1KSm6ZZjRChX86",
  "key6": "54hy82CjFVidTKvL3of7JY8TzoXSW2yodV4LZdedBFgHehs8G8mHWy6LqAg6UUsQQXfwh1uEYDfzYMqzSmLoYZQf",
  "key7": "3mV8rWbBC1dgtzkBjWYoSKpvts8pNEnKr3DAmS7MWw7jYTnEvmkC3hPdA24iAMZJc6YBtKuBiM8ZuoYbjAmtFPoM",
  "key8": "2EWhnUkCNhjvtXojNHjRQVQbciSbDhmgJtqZ4h8cFsqBq6UAR5KB3mqVJ1upLcWMvmiSzh8E6Thnyc6bmbfYKJAs",
  "key9": "2LetWiMYEAbY1yp9ma6UyFseQYvKjTpWC9pf1dW1JboMtoUWvGWARVKH12bRQ2QuimpdwthaiKNRDygMtbLzwBYD",
  "key10": "qepbqSkfXYkuj33Lpc2nABUpsWpRwWHjuS8hSpBK5ZFqpCnHQcJkhCbC591SAgufGNCRxJnXjVpfCBGN3LNhscy",
  "key11": "rQedKyMrQLY4Bo2MAVZs8fo2M28gbw1A2wc7s1CQQjY3XJXdM7UgC5v4Psxatx9mPNndZTNUznhH7cwgaadMppg",
  "key12": "2Ptw176oo3wfhPx87mCh4PvkYo81oGZ5bVe2BdWcFg9vXMyg1bAWnQSrkfri21kroVGCUeHES7ELrykHYmipPGAA",
  "key13": "3Sm4ZQGcyMvciqGkFfrJHCXcc8twyobhBQW7tRgs2uBSJHiK9Fp7jzpThQWP8Hg45auvzUt99WtNCXtqXdiX2iAV",
  "key14": "2pDj5Qqcg4b2xeKeBdBjt7ZqCxy1c1gfDgXKM2WzBiG8gA5QHgfzE8Cj2DWTsac67RmhAQmKz4gSHyJGwxywAahQ",
  "key15": "3Gx1cDL44PP33nk7tvMAxDS9yNJZBqz9kPTJtbyCGMKWV4L9e7MUYDq3uWpVq5gqpBPdzvbYAafbEjvWuScdPXX5",
  "key16": "3CTGewD58dFhYyVJ4LaGJYd6LbRhbxaFx4y8JtWa2sETKRkiA9CiJpsCHhsCaLYVqyFQz4TivjpXySBoytXqNf4K",
  "key17": "27v9z6AKQnCLLbRbVX5BFxBTBgyVRKbzwCSdMuUFx4zLAEnkRB5ryM7KSpVksupjjTgoQmteoUPvro4DiaL8KDFw",
  "key18": "2fvhzTxobpYw7SApwoWCM69ENHeGW8qCFcHedJPQkHgMYYLk9yg22SuzcFAnbryWWkxYeGFvZJiEMtQnJL75WChp",
  "key19": "5vmYGHEMw2NuqgHa9aMktrqxrqbQUPYxB71jhQzZzTMudCafRyi89FK5aP3KniVccXcx9cfC3v34TqDwWApb8nHd",
  "key20": "3qWuAGrn6E8NoKbVrHrod2H2E37qds9vMAZkehakZg3kadGiu6wGnxCpotVtMqTBoAwZ5WJ1BjFT5UUnuzVacMmr",
  "key21": "4kQU2sFbySNp8Ax2aFgM6M3fkVHVNZJ1dXdVKbaUJcWh9JMHXQoVSZiUK8quKVPyDXQDmoAKDsQcAJVwpby1mn2t",
  "key22": "j2KhhbgFdhQQgymJ6YUwrh1pgYd4mV2FhSypJuTHjmcxdUooZBrDwq7U2rvL6mZFkGdJhR8iq5gYYvySLs9xA7D",
  "key23": "4DCSEQkuY1VnNnGBZkMppsD8Z6dGPKPCcuNks9tMjRaaEfBKqVdrVCuFgRXTKX2JE8Ucp6QYnah4YsqmuRCgBW2V",
  "key24": "5HyK4yQyws9mw6FsusAQdGxZmWwjMiFPuWK8tGgVe9wWkqDtwEG7aH9Z7hPSHYEAurSvfe6hk1SaStDVWrB1rRFe",
  "key25": "3ufSyAEwdJCPuvrtZmYzxpQmZfvLns4HjRgUMyTNzJWyMp6hr6FKCjq9g7G6mXHvrsax4KFk5phzfnvARvHpZEsi",
  "key26": "T8HaJ9KEy6Wq1y8X5DSQD4DrJt7FsfgXqfzZFngVQqTEbBpBssuafQt6ofLLfAfyhjXNxCYbGHYb6BNVxq2zzEa",
  "key27": "4n6LqN8RyZft1q67xRfgoYwHXMByZmfpj1zuQDkhRjM47EopNMuzBQfQPCiPquZtF65ZATT9DWiVAaXq2bqKaCKn",
  "key28": "3Lu5NbQNh3jTimVtt8ywm1GATF3xDmEbb5DZaApRvXqGYGX1nLFfUFjhdiuPSjFyFCYM2zzrt3ZDaJupd741nsUZ",
  "key29": "5wq3ZBfP7qGVHP9aJCG978B1TZNS6vGadniyumbii8RShonGHGgSfVAVRJTZjirabCB6Fh3Xs6LbtNiz8NGQzTe9",
  "key30": "44qtPa57RZbyCfCzerPZtNu3yFmD7x1EZr7kQWz4pCHrBgTxEcVGXzoEz9z3nkx2S2My2TbNyrWBtmP7vRXrRg62",
  "key31": "3u8PwiikXK95855PNJ5mmqX7jqJwvBmB716acjmL5SYF7EwwZP4CugknChWCcN45LHrBYAnhFXBj8ECK8cgL3JeN",
  "key32": "gUrzKttEChGSGPYtVMyw3NyWyunNJZCRQQmirfGhw3jFkvm65NdED1s55k3TNQhG6JfNjx6V6cTpbka7TduqE5W",
  "key33": "4bU5uPi3rr1E5SY2src7A8QJRaZVK43SjFrxjb2gBB2ACKM9pwQyrUjLZP1YmByVPGqNUe9fh5KnW1tAdngWMZ19",
  "key34": "33ojn4YPuvakdopuAUAjiMAff4Pg4NHXjNyrQJ7Bq3rPjFw7QRkro5xQmrnFLc6YnSKWaNBScY5WwbWhuAjuLkYs",
  "key35": "LtopXXwuDD8Tp39qTCqAh1FtheyxftsFGSu4HMA4Sehx7iAsa4VwQAwF6CiXtoaTkuWFtcMwWMXGDw5PR33BbM9",
  "key36": "4VhPUFawiFbMsHsuGg3V9kCqqvZ82WoDzzLp1Cc56ex2hYuarEqb5cB45t8jfFfcWKZ1daZvz4TVCkrXhNy1RgaM",
  "key37": "2au4n2hmrH24piggThpqbRHJbYxeke3rT64DZYDBTXdh9yLd6rjfmxp6r6v1bDN3th8F5ESuHfq1sKAyE8Z2JEhc",
  "key38": "3YzVsFiLnK17qHZVsxoCFV6LcKCkDaRqyk2HoAM2smr2ttBaaTprRji8hWguhgYgRDCcnfxZUP3Wf699gH1SHSfC",
  "key39": "5GjfbiWFSmY7Tge2kubCkfdL3WZSXydXpLUExujL86auUmsn8UT6Pk6tHpX5GHTSMXeR9fgTQqgJ81ZaNMu5YRGq",
  "key40": "5tDPanSCWwmXMKLndmadH9FFfRpzmop35z4fCbwKMTdXafrLg286GuRGW2pGgpGWmGticmx2dSycgf5Z9prL6mE5",
  "key41": "g9UGK4d9XVTHuCEBoRSDfdmMHacKbBivsNaW1dvh71MwvnCpURb79zWNaStyurJBLNYmLb5naGnQ737YFZBiQWb",
  "key42": "4rUuDJdMbWtMmvsUDwhdCr9ReTSh3dpZuGp7A7239zbPw7o8qgkXpwigXQyuemfjfU6vWkbwEtqct2Le8fr4p2iy",
  "key43": "47FBnxZzCdzt5hSUrKPfH4mFbwGd4Ho3e5JNezTxCWrHk1SD2k3qto7jn2hYYW4tXjyucevogWw2q9fNHNGBYfRN",
  "key44": "JnZPoookE4jqD2Xcn7yCSd8pUc7QKtzpoGyB9nysbRi5aVb9vLL888F3X9hkebpm819V5zvHxGbqafGjfifdwog",
  "key45": "2wcy32oyU8KaYWx3Sn1LGzk6n9E8DgqzVsBHtWHDNUB2CMT3SV6dFVeg4hkprxoVeuntbspdNYHHbWMEiRkpnt6g",
  "key46": "2QD2ZUqreBYGDoBBVDt1oe8WwayFgn6p4VW7nUH7U7G3K7LnFNRCbY2qxFhY7aS3g4iiAw2647Lnhx5yzLaADWsg",
  "key47": "uE7btVGVwhQGLn7NatMDrCaMkHNe1JZGGdHsJkbzACYtAEe8rXu6B2UHB2oaTRFtwc2oieQeH7VNxMynZiCQBbG",
  "key48": "3vpJUW5AdLBbDjXWZ6xP4UkK2MAZNktNHzcWjFZpimTXyjLBWtfo6rtp2nyPWt9G78dJHzmCPVnf1CBrpA9jfWYv",
  "key49": "2Xt4sukDR8NqBCsWoAa2Zo6GDEgR1Mh3Bx7hKesqCLaMrzxEuGxFatvnvUqJuj71nucKteXR1XaMLCXSaGg3Eq48"
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
