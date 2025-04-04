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
    "kahUkusaVke5u47zzqJZZq2NKLg6cbHUa91yfKpVVSgmrrV1p5T5q9yAAc4VudGzFGUMgCLZbzkJUz4Y6Q27dRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WgXhrq2KysC7TywX4eSkBmzgfXFTbe871QQPZ7uUh7rB6fWYiWsewf3GKeoNnS2TnnJezcYPAGcU58wFPZM99HN",
  "key1": "5N2gQJf8rD2NvuEHMTUHeEsC84VMySteG3ZPBnXi7mmWUFjW5v32ErPp6gmDGyCrnzgFGKmUvBhd4N3yqzt3Zgno",
  "key2": "29dd3CmWQxM4sdt4Q1EWQJjsKdGZe7WLqHAwrDBjS26yPjREP6ZyxQrGHY1eAaQuvJkKh6PK5XTj4eCSi1RLxF4h",
  "key3": "2cMrFFyXk2rvZVjNjnBF97kXvUKeBZHAKoPV1B2FHNCrtRAzj6Ps8MNUoWSoeduwRpnoxtrQDaf1SdoUQQbGgsBn",
  "key4": "59iPSxQDcones5kJYw2GRhdjX7MWssSH7yTrfPHKLMG3cv2oVbqMik4A97G8YdskbX3BRMegZDCGEaRsdPvoAm81",
  "key5": "4LJm2xDoPWhZL7RfkJDd15fAoNKDo4WGv4snf7Gzry4npr7S9trZyhPXw7GtYGeSNypYiXoQS8fRZWGfYAZbyEge",
  "key6": "4rGdtYFAhrZs4boj7ceUPSADfSUokKEiiHyx1BWM9rnLq9Lbd3PXtb53BYyPmBZpcknXwiTed5SwhJ8E8LxHGgYh",
  "key7": "5duWMpZoEppp7K6otNdvws96XKM4wvFjZK7trr1adJEhNY92LEVt6UHjiB64WRuTGwL3jFcwfwYGg4jVLpiJUzf7",
  "key8": "25QNiWttaQKfr9VPELvodH3ZSTKRJq8xtvA1tjqNZmpJAvmWoQF95QtApGhZ2j72iwaFzFfJSLXhruoTRdSveWN4",
  "key9": "5XgQEJMU1JR8365nvy7EoMDbEZZwN7WTZCZLfWH1zMpsdaHStWVsWZHu3FkZ9a62UHWA89rvXsDGUZorWf5pbYy",
  "key10": "2bWiKpPm5WARtpYaBE8Wnw3fVeLUBQyeMQfxLwRdcBF4hm8iRrwTKXR7jXTnWoYz129GSq9PkBKKxYmicUjJjU3i",
  "key11": "5Uep2NZDXqQQr1UFYaWpyda7AtasDEyhqPfMFoN8uPjkX7cqtK8qtXNqb3zaXEQ8mxQvhQV8RC41fuYpLgaJdgbi",
  "key12": "2NfYTjFKYzfX8xX1ZUgpQQqroYV4vBXTtj5hk3xA5EDWDBaJyDxdqD9uvYK6BnJkTY2mn1egVnb3TgLkcyk72bo1",
  "key13": "67GjkCrJVn9SBdu8v5RB3E7PWtpr5EDUNKjwzqQHJjFf3QvKbLxxhUmheqWMC153QZ1upTN4r8Tznye41QT1LDDR",
  "key14": "m8bNJLRySgciCpwoErFXh6ezhkWKfqGPoojuvgZ9FAAMq43f1J8s8KtbBM17B5MysVBHavMx7BzZTTUp3JXYG3h",
  "key15": "2LcUPCN4R2NmCxbHAJgMyzeaLj7cPTL85B3aVRVj4g2bqnou5n7Vq7uYkx8sQgByEDB49i6b6rRdAmCdCGrYLZ93",
  "key16": "3nRRZxXS7UuudFfCXQRYBGmYBSmBdaL9V72zPbi1rX79vofutT1ZiKv8hcHrBfHn8ziSEnVLos1YgqhKYbMDnXAJ",
  "key17": "2c4ps1HW8UVLPM696XkxsChJF1tzFuEAHd1aHDfrdfRRx1sHsDy91qiqRAJgj3J6BxEnrDM7nkz4uv9PMsPSW2cr",
  "key18": "3CmStVy5iU5e9hBdDkmLC9jkoX4oQKenEtp32vwh9SmC449Rvg9z3QbW6w12ELydyUwayZNCPCo25nyJsLq3jjY2",
  "key19": "3TRoNhMN4HJmeptdrmx9964KAfazyyVJ6e89gdrLGC6tchLwGkNACkkQo6LctAK3H8s9CjjFdAVWHPtbu4ecU1NT",
  "key20": "vT8HqFfkWmN7XgVHvsHRnVWpwGprYdV1hs5r3Vdcy3t44dTyszMmQoidDwaKzRb9NwgNZ5jKbfqR15yyQQtxKLe",
  "key21": "dHxv5UFRefZhWvdyHMv2batvsjY6qmBVDhVf52VSUCQ528o2MoZXbjiBAGN88aJioohdCmRkr3LXjgGfTqcTMBK",
  "key22": "61wrNZQ9CumVix7MRqoetokYJeVfnXA5rGp97s1BtVjvReyFP7Q1QEYw41bhbDoVFUgx4UJxEum5AxebQDCXCsCr",
  "key23": "AzFRKVogRKA2KXj6ELL9QDgtFSsjTGGi3ZTbNdTBGcxDHnVGfhkAgkeijDCbqCTWQcy5pyABuo33o57UxeevHWd",
  "key24": "5TDzAaTW8BWxTMZHYvCrUgdbPcws9pP91fNtpoGm3sfJKtykjwe1cv16N7hhG3VNpD1wJuun8k1QtWAnQwjiLDxD",
  "key25": "GWtBaWgh8fJK1Y5igTF8o1nqVgsJobub4dZtYGTJbMTDnAAEt9TMLzzqAemkDX2xxhnmcz4nJYSLDE9134f4DEm",
  "key26": "36q9GYCbKDrQAnwVbfyP7MgW5fdz8A6MCkntGh4YpuqZfJiyR8Gje9Mp41aJXGAqR4EBfqafRoK26fMcomM3hVCD",
  "key27": "TSqUqn1ZfrnXr3G1BRhr7KEqhzohEXYyFvgUTFVxsQw5eoKV9zQj3LfehLJxDjZMrmsr1C2CmmWFwpXyEL58raH",
  "key28": "3Y6JgDKm9t2mvuBN1yTXPS7H6jpNA2tLGcUMvn2xv4S53wUMeh5ZABmc76J1UTQHM6gLatWP7thYv5qT5DgLCvLj",
  "key29": "57zVXdZDGv5YGwfwGPhHrHdEeQQ5ANCjkr8NEwbHUpeuNzLxUjuHoPLSSJuE9WJdrGoWgmQ2MfU5UHWZESa9uC2m",
  "key30": "5rdjXbnBKzsppp9ZPqxU5CEgqft3jFJsAwkjPTGsKBrtNYe6Q35v5KRUBXNhzZxG5AqUyEUkx34j59MUTNaGC4xB",
  "key31": "28sM8ZRhkKYrfBQK5cHrzhZ6tXBUuFqmrfFw9eFfkoYzyPvDHaFX1YsVKFiPTTmweAxpb5TWE2sPVUWYqCswHZxN",
  "key32": "3WYXLovJVkM2MYREmtZ5eUeuTZg6Bs8rYXChCqF856axoDwFAtaaxpzWfzcQ8q1SGAuSQrn5Fi3qK88M15QqwzQx",
  "key33": "79EFUgGs1F9dwgFW7dKzg8HqrP4PCbkucumFC1UQi8cDEVhtYQ9yTdFX8x3aesENmuXzwCNvY5dW3CLzQN3Fh7x",
  "key34": "3Vcea4WmdZeYkPFxe9fuhv7LodgXDebw7x4Xu7FmFXzkWojXkLauTyWmJxGGR3845WP7qvyv367TbUx3Xq8ofddm",
  "key35": "25bhZvhTRcV3CPCTCPBtpUq7WN6kf98XXFANFPfZLW9T45mGS2HHaMeByrMDBomP1TegbnPgFUGafpwgzfjPrB4A",
  "key36": "4mXrT42Eqy3ZwaHRV2iEv7B1ZxGJAdfRqUc4HeeJYwEN1Kq7zWr8pjHke9EcgZasgPEPPEP7f2fEjBZCDX69eJGd",
  "key37": "ZrKgiDN9CntgmUasJsjoR5y4Kx7uieguJsUEip5VHpyLBUZB7t2kjQ5kcSKXmiDgt6NMJMkiac4nNPLwBJpVsQQ",
  "key38": "67ZhDELTmCYTBhL8EAT2T4QNKD9PmQNHWPuoLoHYF6Drp5QEb6tWxCgAbBBagSwLGrPLgi6xkGQpeJEWJPMkaMzc",
  "key39": "9r5TdAKQWr3L6chJaKKoCZSN4nHM5Ne1Nc9t3JCp7UAf6dyH1scHWqQs47sHT4pxaBAmtYeJDjsUXHEc3UTDCFe",
  "key40": "3GkchMiaodgUiXorcSFvBvDmE2jq2SP2RwPm6KTH6Y21GkmEqrxStUBkahqfbiV4WFj4VhLax7aCh4L8bh2xqkfu",
  "key41": "pKxRCEAS8uGTxqrQW9QKbCkqTaNXpiQsagSwQ3wcuDW3QMjCCFGQ1rz2nQQ2RRNatduoKCMac1KRsmD7TdAPygs",
  "key42": "4zrVFWeBW1Jm7SMzqNCQAybxEmicZ7wHnWBGye4HLGeAnFKSe95SPw8ipEkkt9Sneqb8A6B7AvVa5WqkvrNvZ24Y"
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
