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
    "5WghngbibbXJdrSnyovRCAeSn79ArzCJiQiai5N1twyB5N2DsZz2TG3NekzCym3V3cyWLbEEccFGXb2oVDWdvY2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25NUtTqqcKhFio2cTsW8tawvo2kF2s5V672DcYyr2NTtkUNf4UrCGgyouHCAu3yTwveDAGeN7iiwBxkK3sMgxHHQ",
  "key1": "28TeUYdQUusGuQoeRSNjZ3XLAeDB4C8rLa5DVrTA3SLmeHdUM9tDEZnvDKkYxSquZ5Nb2VLy9pqspJ17rFbpKhYT",
  "key2": "4y7wMiuNPozkhgTucFceDhHeKRMxEt2Abo3Z8q3PPztp7neC6gHKsZscY7n49AcQSf3oTDeVZbprh6g24Sn5fjzj",
  "key3": "4i7C2qCqPKt6nXM72aJBXrMELppXZ4HpWZLQQ2Q9xYTVpcd26zEdqe1nSJuD98xQnRzyMQW157mvqygcjUouHPwY",
  "key4": "52nJ8ep6hDTY9bW6166LJLYdzWLBw2VdW28jVxswya9m31CwWkZRRCFLrWwn67zhFLrW71bQZLxQBMdKXGFbS8j",
  "key5": "3LoRugm2PGY5o97TKtnowk8xcdDqq98V9vjMA8V5bd2WzGa9Cnbqrm9NuE5JCajMpuqyGJYL9QEHdXv5wpWgpjuG",
  "key6": "3CVj8A1NxUXzekCxgirBctKJxZYaQxQvUh7zwavZnK2kXEVmAUahUyPBcU4MqLHTsWJsAzDFNGEyLXLzayETRacu",
  "key7": "r2kumziZPU1qFaoq56f6fyrk22Pebg5uqcZU8rMu16ZRWiQ8Rv3DXPa8PgvchpNPuTUDcdcs9NAV3ARe96nH1Pz",
  "key8": "7dKrQTYrcvQChUCSy1efgmpgSKKbet4zfT6TByHfoKhmGWvzFBBehoQsWVjRx5hvp4JtCJ5CJshjsGGiaeCjteo",
  "key9": "3mWh6RLhf8EeZP6mwC4uxStbu9teSV6P6P6hJL4CAkieUgbm74CJMka9MiiuudZhUaddTA6F6u5ZRWPHXPazcKHK",
  "key10": "2fCJpyrfnpUGG4JucEW8F2zKYiBogRXyWb67Cr6VBaKBTh87H1XC7ikAN7dpcYD2AgRXVSS7Y5kFXrxY7FTUoDvd",
  "key11": "3RVg4oYVLmxk9wNUmDbNvFeQZk18MLyrHRQRgqfFKSKW16wW4Yto9PejEvG59tcgmNMuTheURf4qriTNNBzni7A2",
  "key12": "5R9fKj9Ag2njyVWmat3dqsLhZYiNxHH2m3nTfFVRYiMHQLaV1FFdKs3DmrPMFvDkK5TGm2Rc9WJxjQFVBXFL1zvY",
  "key13": "5zCps7NEsvQ2QKn6ch9SX7VhTEMnv3DrZXShyMWYc2RpXGogSuLYh7yCmo81ASYV5z7dzb8yrSLp5RH4m3peiXAJ",
  "key14": "5FAc46bMZHqswJHgEMSVpdQ4NzvmT6ob6xbFjyuakhTtDb6FUkvS7Qx1LZqZXZsqmpgzaEwJFfXbukvHn5Eu2jwa",
  "key15": "3dCyGmdY859gTtjonVWKvEVgfyGUfSMhe3NdrT3w72xLYuV2RECrsvifjKZLFbeLpKFba8XBoCi5h3pQQFyMgHjL",
  "key16": "4i3cjH9N8ffQQsL8GDQEfvsNw973QCqRiJvxpE3McNxCxtgQ2WDNGmKN7NHM1r69JX3LYEgDmpCaeky2yn78nEiG",
  "key17": "4hfdrG8gYyVRWs1oHSDLqNges4pHFdeVs6zoACd9bHMYStmgcoRv4BzLxZ5EjEL5sa88bnL6JZ8DwuR7myt8uAjq",
  "key18": "55W3zXT4eNxUhsrkhGhT5FWgxJ9XugY7UdTFh7TytYM5Hpy3t5CD1CfbhTFutRaRnvF2cAmPovoeFrnD7sk9JhYr",
  "key19": "3hMdUY71bndCihBdW4gksZjJuArVoLV2qzb9xcKKhLMTLnAEAtUL3J88omPVG5tJcwYbuf3scpKGP5N7aM2i7NXJ",
  "key20": "2pH42D6LATj574A5gRhdw4yZcZNskqgZutJANmKRzQZaAKc3JqnoZz45YUA8NYDqV418SucLzXfb9oKUEGz6RsFe",
  "key21": "2Hk4U5SwJdKyxgbihmqkjQJh6tQdZj8vdYPcqnL797VHcSGqvgr6Nfbz3s2a93j3nuTYob89SRBZrGWbgnQCrcqB",
  "key22": "LCBRn8fWLvLWwy5c8iRbnVv4PWycnbbCBM14NpGcAFsxnFsaN2VAHKqo5JehdRk6B51PPBdw8oyQ3krcgLbkRXu",
  "key23": "63aGgVWeGXQ55U7vsB5W2Mof21LC6xn2kFurphiueQr2aFegVgpU66R5TzuUSfXWQijrLN7oDr12nvNDddpdLw9Y",
  "key24": "3NTs4MYbzDWuPDNCJDgRCFgZDEYvucFPZ63eGiM3m4NzYxhFnZA1gBCKvoCcFrL49tAt1Ux2GjJ7rRgDB3qjsLM7",
  "key25": "4bS44C9fLAsLxw65QjHbn7CNpqLaFxVNkLuZqbXjoHUmUUDJLQEAJRLJxnVbEbX9xd7NzCwXumh4fg4gLGz4FhyH",
  "key26": "3wuaqbC6grgpzmktGHZacWuuapkom7QJsModTzhBXDSXa2dxQjQMt24gekYdM8hr5ZCn8jgNhenoy4CEjGRRGyyv",
  "key27": "5ZatzyVhYLu6RZuhBchdb2yaQAvv5q8KfjuU6PTUF466XhzBFBRFREqBmGe5DvePm57RbSeae7d1cKzAMBaJBQms",
  "key28": "5ZVKcvTd55AyXXz2U6EfbiBqtAGAaXthEkD3cdcdL646j3qm96yP7Fimyxsc7qEL7cqqUeUVia3VMVgacTYQw3XD",
  "key29": "zgA7mdaUYG8N61Z57zsR4vKs5a887pSnJg5umBBjxhr8zUPnhgzqQneEkhvgfcPLyG2FFW7RGT9hpMGXxoxK8cM",
  "key30": "4jbBSBtVVbTgsRD4JdXwYEBZ7LsCRPuANrxyjWbH5gnJ53DTPE7B4hPR1KJhQdMx3QsCVsVbG75KAvWmuH6gBMwk",
  "key31": "5na3jH9cpQGpp4vF4mstgTGZgqezrzmkT37Ak6ay5QfvLZUvzJAeS98NgdUVtnEWziMnExrQYfuqFJdDUJfKnNQs",
  "key32": "42GvLdajwBhXnwqBW38VcAJVz4cucZ2xdy9DZN8Sz7y3ZRLVpQBUhYh1Mfg7WU5ZTsJ3mWYYUaThNBcHT8ZTvCWC",
  "key33": "FdEMej1Rkr2Cc52q9HNrRQMKCzcXyY1ySRRxNjXbWzusfCGDy97iidxAhD4pfQA6FsUyhnU6s4L1TBjGVSR6R9R",
  "key34": "5ftp2vDU2N33t6tLwyKrufDFQfqGSgjueBnW578yjKMVrgb1KbKJFNRiYXedDKxm15YR6JHYmQUyMuTVGw4CfxBs",
  "key35": "z3kxUuSjnM3QtRKFZmxiBCVDg4ugsrKjQD7vUTADyuEvczKmwwKvcxLQ9JotWJ5vaZCMtShiqSvELgHJPjfWLLf",
  "key36": "55mvnv6B7sa49Gq2eXnFQZ5SAqH2uAuazQXJby7A3csLC3nfaU3yLwxSyBvPwkEDVkv6KmpWWv7pYfcM5KyaJFJY",
  "key37": "5xtjMbFaZGiErcB37y2nfJwaetKjxybBD1icUgErngmNrQKJanQvHk4bYEGbkJCgj9GEmuu3VGFFDuYsvEA9bewc",
  "key38": "2awJH3gLn2xKR3AM91NJuLKWuwKQvyLys6TcJGCZEy5tznzrcS6Cdj86DWgSrSWf5LSBPDdfc3feQKLgovr2aCx3",
  "key39": "3KZ5oixF4amw73k1mZWtdDWGSmyvyHeGgaTfCUTyKwb4kJP1YCsdevRCoQX7QbdKXLrpWQjd7MZMQTzwWnsRxmM8",
  "key40": "3VuGFDPQw7zwtXVztZ29Jwp8xH2asL1Mx44aUmuj5KRubZ6zmviZ3HzKpixYR7JCEDrD8kagiMuhTeTwsSK72YAX",
  "key41": "484qpwtb8TDfXN5D9QQnj1jHt2BMKXmHjf6ZXtsYBbHdGi4EVmxzm4MhGPGfbWrc5435kx4WhpKst3JFWxut1zRX",
  "key42": "45juYFhUPuncAFsu1LWmPinDQDZ7YP7tR7o69rsMCXYUMQR1BYuVQLADha9C5uYHDG28FmLVdyFPGcJvaMMBSdW6",
  "key43": "3GNEr5wmtPgUs6uyhFRmsCbQniP2cgeRDJJxgD7dYsDtUsZBaSQDGi4yhHXayQBBoALNQtLyxFn6J8MWAf2JPgyy",
  "key44": "2pEky8wQxjMWvck3JozKYQ5iH4mYAxUtmUr7iubpjMHdCFsZSJVXAr3Twi3yDodDe7qRY5QX3xNxuzKTbRPJ1jG4"
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
