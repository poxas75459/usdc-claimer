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
    "4W4K9xedfWywF2yGmDEMPPpk716CgnfdCFYUhgxah1K8hLrSYeJGoqu136Frr7HeEbTu2HUTxof7pRrZhrHLJvwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jEe1rcgqQfw5YMw4TWLR4zw8YSFSEYvXUUdDDgY4QxKJo9o23cJEbUSxevbzG2AmQoXChtpXb5JwUqCjRkCywba",
  "key1": "2XQEgqLv3FKs6RT7ZuynY3EiT6uP2vA6mGi4TXsrqAyhGbvXCcgZFjWAgZjYsU2TDywM6RuhB84CMEis1MWe8nBJ",
  "key2": "tBWF7JgzS5L2DpRFumA5DAzdMLeXhXqa9PhQAbJuYCXFpzHB7KGtJH1HGFAohvxGLfBe3uGNEDczEkDkKLgnWuL",
  "key3": "2CBKaZxb3ZNpm87KePy9ubT9u3N64LrciKksyrNLdZm5pFieNtA6JGVuP9oSJoqk9BVCvDu8WPe39FaSASBBqZi2",
  "key4": "4Sm7jpLvUt2mqk7s3qPyaMq35aRukDRcx28xfX465XcRFRSrQYW4cd62YtJNKCvfF8hwbY838SajtFy5veNxwJBY",
  "key5": "4DEe8wwAutcWnGa3p1rBPowL5hQvGbDgdiiRPXvLQrY8pxyW2BNeJ5GZUHSth8KpD9KV2FH9u2GsLBgizBeGhMPB",
  "key6": "4wydikzaaSWQfLi1G1ovkRbvyaWsHusnwG8KnPA3FbMUzrYksDhdpAdSzTgQaCRWKax3MPYYSfD85ZoFjs5urzZ3",
  "key7": "i645ma5XNLGf8YLaLugsJo1mMqTRLqb3YRtVySqbWBiFLP2AxAAUxYy4pxG2KTQfixCxDxuESrRzvbVNw7CPv3e",
  "key8": "253bMRo9RnV5ybz27Fk3XnDpn9cHbmy3fKYepd7CyDLnJFHT5iTsMdaVQeQaqeCsaPMUufq3q3R2iKPNTyzqcVH6",
  "key9": "58SaJsgxNRRXSmu2zEsT4XLnovJDJrJxvvVWetSxHL8pD6wTKenqq5ZptoUNbsSUzp1PicKESzNaXBUesFYTP8JH",
  "key10": "2eraPnDWcDPWusNcGXq6HQbrpxxsN5i3JQMtpR3rkY9n8WhzMfNf57i3ZfPV4qFZkZ7c9PQg119p8Zt8qELcAaEe",
  "key11": "43BYp2JHk4ra9n9T2GVVqYpRNCQo1b9KxUpu5Yud9NZjp6eSGa6uiEB1picVSxNP2senpeGrGspVEE9swLEseAzD",
  "key12": "5pjZ1ABQMeBpx9cUkmXT49wm7Pp2pyiyJCWeNtQ9uHiM76f8SoVP6sZJxQdaXoJ9izLykjeUfMZb6E9wW3dHrxey",
  "key13": "3VKJaqVNaSPC22CCJW6MXipE3qJdWt7wSFbmVYPHm9ehuKGSHEmM1fvAQBjrbBWHB152VoQ8VqYAre4iwQJf6NLP",
  "key14": "JtXdd9qnQ2vgu4MvY5kU5ceT12DTT13BY9xxASxhNcmHFQ7v5PN1jF6D3fmrLAAznajZtJd52QpyWEXd8jUQ5g6",
  "key15": "2XvP8dAB3gH1u9sysLuressc3BXpsjbgMPd4zfUzDQxSryJzPx12VtYbMJrZskRF6cDXgMKUKX2hLZuB8FYh6Px2",
  "key16": "SiHjLCa9pbmu33cucr6J1ZTXLTGUwaMoRo1kU7bY2dnH1tJWfdUHjbzGcvpw1xmr9bv8yUYwkWHJz2keWyn8wZo",
  "key17": "3sHjZYiGfrpm9W2SAdRe1US9HnShJ8hyAFeS445xk3Ym5tsHQzSoWgRwT78TQQ2MrN9v2UQ32ZEENubFvj7gntEE",
  "key18": "2BdRuhhHJpkhGRht8J9nPPDKnF1R7zaHyVbD8FqBNruGCbahXGWz8NuH2nQ48h4TPvoiQx7SgcBTuonZ9F9C1ab6",
  "key19": "uJbeKT6nd8U2fZPEonXoUf2jrpZnKN5PPmjqvwok5A99rJLY4bkN8zbLhzX25YvGRSshsmFmtEULoabHFh4K1sv",
  "key20": "QcN3EgzHXJpoRkBPHLq74USWHx5QUdG9GCyXp2w854pCRNj7xWik5sB8SFscdfmN81H9yNypxd2RB62efnLstgX",
  "key21": "5pvYjk1YvQt6LduQ6S7PcD31w7k4j4S7GNXpryRpsGMRmk1EzUxq9kzL8HQ3jsdDH2MB2YKHKJhzMXhbntiRVJ3y",
  "key22": "2MYgcURuWDLWBqq3zEg5ouVVttyFr5KpX7G4TPXMK6jN2dtm5fkWnW9HEZaYCKPW5dGstAcVWpf8HRL3SSfKVXpf",
  "key23": "3sH5Pf4sBGAEXXZ4U41pTXmKarB8vRmTu3tuNiVytWDyM7trSQa5Jy2RcqnuG3tHEP1LgUmi9x6bgMMbFz5tSESu",
  "key24": "4pf8Z4GKtBNW8FCj3HEXYYphhsyErBakx39Qn1vNnfzBehJVL5GQVQU7r6XgGdiUihnXw1bUQmuuy1K8b3EbaAnE",
  "key25": "2CsaxuwHXTXzRiPzHW3pHZzsMWCwbDLvS3tRsWsALuLZPHdRXjrW3iHSMxMzRLMWn1MCFjxRaP5BZg1fuVLYawNs",
  "key26": "VcBhAHMHRmYBYmvNTQCkni2133eTfQcUAXFwywzLoF5WNzn3obwoyim38vGMX61VQmmoBEzFDz83JVupgdY5SR8",
  "key27": "2AZwk6rkhW5ABtRH9YWm3Ekr9vPBK35H5eJq7djUpsoj7BKhdoiR6MmDrPsFXTcuzdxcsftD2EPUnFbEYFXkpxvi",
  "key28": "VYW2CizfN5yXbHeEzVWth4PJykWa4r6feKqAwHeAYRSs7krPoaHvGBPEr5SENYCJDtCXnN3gCrwprfcJ6W3Qkwr",
  "key29": "2wY5SA8PhF88e8XVpbDacKfHt5RRhTAEsPTVnCJcyRsB4kwo4qPZfDYAACtpYZkgNZy3ta3T5FNSBjxeHnbFWVvu",
  "key30": "37PpiXEdpRGYkUcbrnWi2XageVz3WYTRdxDP13hugEzLRwVoUso3ecC4oPGH5SyENGwSjVTBCP2yTCbprPPrNLSD",
  "key31": "2LWV47zNeADNR49MLhBy7snapjr7obZ3RMfJy7LkDT9vhcR6zsPikaBhUSnAyKRMwhhf5CyDAnQXxnZMQtgVdUiD",
  "key32": "Uf8Eg7zQmNVYj7B3dhDjkGQbBVZrd1sgbrckfBarCTkJdqEVNybcT6iuMigENEihSGxzf8x1PdevvXE6gNhhHsC",
  "key33": "4Ek9MF8vcL1ktmLvPt28DwaizYCxU81ExvtatHbk93FjMLXmGEsmZd17ezAy8eK9T3WNJCE4Q1AkCgMniuCNdQtG",
  "key34": "3dtAxuy6WjP6X5DzNkfxVmNkg7En1hZtyhENKiBQ944m62LuPk7viewBynAxs3gwK8uTgnDNzK9V36f2vnLonxE5",
  "key35": "TAaitvFk7wVGoGFoQazbQqDcreZMef9kmnh9X7sTRABiNuXGqHMCDB3FxrXmv5Exvc59AeS94z4LYcRq4E2Fs4x",
  "key36": "22NpW5XhTLDqvxUck6EyPrt58hthV5oquu18zzScEsXuTMs9a8UgxA1tTC7iw1g8eR64FaPExrTBaQ996by1zLMd",
  "key37": "4Yw79HLy6gR8T3bpe2FYTLeTy4iqHZiKzBSY981fDoEkRRUqLRbrs7RfmVNad451vtN9C8Eui3aEUh4p7M4HGn2E",
  "key38": "TMsWdq6b1nyLAcnwWt9A6GpxznvDPUTEYqpEa5PWrQDL3vDEdRn413C7Km89aFfcCW7wA2mnxgynsDfp63xQEn4",
  "key39": "3qyPwCVSLzwC3LgqJXwtcYjXmWRxUvwZSBbFy6NQtoreCicPRnueaGGHmicUUXgeLYMa5BodyuTbuX94imEisxmg",
  "key40": "4H7vPzmGeT9VQr2UK3it6M3udAUzdKemfAK8HGKT1cFumRkRomcSnpsRpsbjtEjD9UJ6gGhCoqmHQedU9eLL48VK",
  "key41": "2uzMjfLmGzGhKMYo5PRw1HjLK9E81dZmQXYcZis1A6VNgoQZR2EpaeJLcckZnWgpmACkSHUybbvYvBjcV4isQeHe",
  "key42": "4CATpvy7RkiQbJPJWrLdWQwmxFX9fXraeEBv9Eg7iDnnvCH5XAie5hXNgamQkNrtz4XQzXFyTyjtbVkVheKopNyW",
  "key43": "5NpVrX7LemArJg1PaQFBjMZvNc8RH2LoYdM9QNRGE84Dv7Narua2uUxxwCVE6yRusAPbmNi9d7JBMYrntaCYwDtT",
  "key44": "3mFKeVNsUzXZ94AcMg2khLJ3Fa2XLet6xHhAg9zUSRNYC3Hfb8w2Zac4ppgy2q4H5zFNYMjEJH3wUzEqwh8VcXzj",
  "key45": "2GMK1bpUFDDemNWAPrSdNZThSHjHgWSW4dK7uNaugd8E2GnFiRX23ZTzzMKosR73LPHLYkwiQTMAWtz8zk3RzL5n"
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
