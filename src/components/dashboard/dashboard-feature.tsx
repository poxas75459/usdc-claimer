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
    "4A6DZsGRCUQzcx2WVubS7ajbcSpUnaEvhg4CnXnKmD4aV7Q8KFMn4NyM1d7TZS2UqRduojfmBy81wKahctM7L1NT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hWrFKYTJwVrUw3N117d6E7JJDeeh4TnUL3WN6LYsUTMw3sKVXrNDovzfUgyncN4tMb1JMGf2e8G5r4Dn79vKA4M",
  "key1": "2JyPFyWbjHiz42MK2uqqSEJXjNa8uUpd7fXExQ8VcZndiU55CdSvCdLZmMXTvBFHtLHqcJUy6RqRRJtY6gDz8F5g",
  "key2": "4LK2orkMrRbPCgj1QNUWX1w8dBFUhywYnojYMrCQ92A8ekevUAURiuYs26gQR5wKfKW6RTVJSkrmou63ohWw1x2d",
  "key3": "5hmteGfERCtMS7GvsjCEVqM3EutkNsRdp3uJcXtg158wV1gC8ZXjxVrTFzsZFAffBnzwGxVB3x1Mv6rbKZX7S2Y2",
  "key4": "3eMC3VP9RjuDeXNwTtHuvzNFP86fnos5eJnFmW97BGi29yTgKr7e8kiokrUyUmdaz9g7og5Q8dnMqx3qGWNrsrao",
  "key5": "5kaXfRa5CY5pjSEbhTqYKgVjHznEDgBPCFVeDLSnHMu9nC6y5LhgtzvJxVC6c837eTxVEts35tFruQZakZU2bnfS",
  "key6": "pbYuKiBBzvc9hPHUkWAGTEyGcs6ySEmm5ZFXgdPhthyrJJxtPMf7qQ6ZX6tgb9KLbFcgLEfGAtEW7EoKigDDTU6",
  "key7": "4AaFGCGhgfYcfLmAnGFqFAUjXFii4yMSDHVFag2LvApnjVzHuU7y99k3tBt9K12NX8P5tbX6p91XLAbjW4FHMdJS",
  "key8": "59WGwxjh598czg6RZkY1JTcCnSvTkXk1nGUretHCWxxFP6Fjn3rQpU1CCK94waCETnoCjXPbbAiCkWP5ga2d671a",
  "key9": "5z82n5unoe4bqoPN8P3vZMW26gC7B3UXbLKu7EerP7hBntUEaQNDktZ6x1jurrPTtyAC5TevzqoGh4y2VGdTBjii",
  "key10": "5JBrGK8ZaGztZtuStE41t3RPpoSPjTAtNW8KCGzkeKRc2Cmo8xX1dQqWRbotTEdXxiigE3TZ3nXE36Q5jxjdz1Xn",
  "key11": "2WME369uLKciv8NBvZK6R9XhqvPHqLqA67wDtyd4GCPN8rXR58vcfnu5uGEr8j5AJra2pgE84aSRM1V7o2RjCmBa",
  "key12": "4hFxYKZevNbuv5cfQGxq1Q9Ld2v6AiCJ9FhfhoatdoESVyTyzu6YA459k6oKYEtW8ZxGSae7EfVDbfRvzpuhqKBN",
  "key13": "5caw5ofwpBWZh6garMvVL6ExSRRKsj3dBJ4A7987Dsxoym7d675BwFZ1Ahvze2e9dQbfZ5g8Sy9zamDpAQnZeiQE",
  "key14": "4573Lwysp14WaGQpvgA37Beh1y9TDQkZGHkZ8jmXNMEmss3aeDnFfVvwscEwJqy3fSmme3FYoxJR61tkMUfZhzui",
  "key15": "3AjSo6kRr9nyQM2npRYcGfy7F7zJNJnaksjBiUJtad96HaZjBEr8dX4d2t2mSSNWCL5nHgQGmtvK8oeCT1vLMty6",
  "key16": "3T6orrGRufnGXn3Mw4TA4rvF6CGuLQFAmvpURv3YArqn2USpWrawmC8JaMy8is1r7SmfnBMgyPu7ZhKyMx93FZDL",
  "key17": "WCBXpq2rgerKym7uP5kU7UvW5WAxtG6aiJsBvZUpHaeCorjDFqebHFV4TQgw3oGqT83pA9RHxWvacM4fpsmuTNp",
  "key18": "2DCBa3PDvJfYNXsjUXbsySdGTtazrWsnc4dCPpm2AnVo2LFJLaoAHPxJFUgC522qRKYxZn7wzuTs3Q2iU3GXa4Aq",
  "key19": "2coVGtc4wnHUK6ZcNFCcaAAzikPzNRtkYYCCLB8cv4TehQkE3rTiVkpPtprk2VAspHsbZT2nqfyZRwNpjhkMqXXS",
  "key20": "4aQ9ArALbRP7UUn2GskezZ7iCsNWWaKKXWTh74r9FUTNtbw3xBt7JJrJ15ygnDh4X85gy2xfJ1edz378QVauD7Ez",
  "key21": "4K3YtD4gb6CRg7RaXZYj1vE9bhJttkcYbhfn7pxGcAHsYbnbtzu1arNft1Do1wMjFBfQCgQtE9QjH2csbHkBmk3T",
  "key22": "2bdrfU52ifaLsLkq7BQYs8CHmH62vCHzAsCACARLUqP3pBsx3ggj4WTthmxuLkAJcNZsY2XvsE48cwCNLpZX3hCa",
  "key23": "XU56X72L24o44cEisCoKM3iEkJaY2xGH6mCTftVKGf8NRgWRzqGpydy1EsUFuToMaKqakekGiZdtfnqNsfMLr7Z",
  "key24": "3pEciYt7nUB7EFF5zaMYTYUpCQDvhzUJCf7GAnNuzMHRmRWeXVvzGRYrzqNHYa1xvPntCjwAzpMWmEhar34skZiz",
  "key25": "2ybQAgXaJNZgiGkfKJCrzLLz5YYUa8qcSQG4UqWusTSzqYMUR94Z7k9ceooFFPr3KU5ymKZkQxXYDwDw2JkAnRjF",
  "key26": "2n2Rm9i9oi23tGFX3SqjM4c8jUmwCqf4DwC9TT5LKHcSGprHxnv3iNnZx2z9RgTEGXNDGpcdeA4Hn25y1aCS7i2Z",
  "key27": "5E5voNkAxTPETnPHUdK4TZrsGvnEC7rSvEWKGxBLe9tkGNz5PGp6mcFRkTuGt5F9zb5Wz8hPzu4wRZ7bHScXZXhG",
  "key28": "LVx75Bc2v5HCaRkL6wz9j4xQr8p45yw4jKXCnrRafTcvD4sd9DGrz8xgRmcaJzJBycekvR1m8r5aftGxaj6oZf4",
  "key29": "CUS2boGHeDrEkPF7KLa3NXBd3SKFnmPfzzryoYtTahx8niXFi37EiXLpS1pmj93qhseUJmFFCidgXa7A6gmkWhX",
  "key30": "66fHWaprtfQiuA9zPeytMdhMS7HJUaG6JQPUMHybmBzkJexUHPJNCNxeMQtcuYfjYLWgKSaXtkyuJyHa3FjX2DAV",
  "key31": "2i9e2TqFo5qgKCmaezry8wX6db6jVYz5DJwvkKWX1G81yVuLAu1An6z1KAnLubmFqgMdfdug15WJTr9ABiKsg9qd",
  "key32": "5UN9vBQiTuKohRmKprKyEutVFnnZAcHvKgUMhUx9yFL4DMf3Kmm87x9Y1J7P8aenQ1sWJBtC3gj4pVfdwf5NWA89",
  "key33": "44dtnUANo4VKjF6iAXKC3cMiec4vJ5yBKcRGtgeM7RSq59i2jsL3yHV3pLyAH9DRF4JbaCRNzjt51sQyY1HLW7Wr",
  "key34": "9UD5LwBHosFNS1auE1ttK1wNhbecPwy1ix8WKdJukcMeK9YUxwzJUeKpEnWcahsLjM2AneUN5EkNr4726zHe85q",
  "key35": "2rB6FFaK1hFCzsi6xP2n4zurUgggHRG2vSvm4WrPbf6TBTkEJywJnqo8j4JbXmCJCGSAuc8LC4ooNvJaBvWXPRLw",
  "key36": "2GV5uFviCdYzAuWmSAbhf9tn7SptAWjiXWeySXF9u6miB1FwkXdmhzSbaGSTSe7gN3C3tDdcgchhPXanYMD3avYD",
  "key37": "4tJKGT8PnEeVJKDFftm5GZZ6eoXJXdSnhhPyyju9AM8Fje5K6tHGth7Zp8UtPcc8bqkKSzfKYqSkh8D4nj1ayoFF",
  "key38": "5Tce17baYdNE5U16pbPdQpiFqihAuX7j9AM2Hax87QkS3J7BHcaz9Yh3GvKtjD6ByvGgYRKLCe6r3pDeAn7ZFFsD",
  "key39": "38DYvAfjYk8Ce1MRKbWHqZGmQ7qVWp9shbRC3KHVwKmKZznWpwh2Hb2nzCQ91YxwbeejFKQU3XZgBjMjrvcQgeeN",
  "key40": "4qFywVrJo5EBQhqaxJpcqDPb4JwaofYtTmXwQcqKkFi96CLtbyEnputADkoGH8fkzMJ9RMXHQiqbJ5Yt1GCETrDF",
  "key41": "uqE4UcBVnGBXQB3vPuB4HRFLjbmVpzPd5PFWtURdyqbPfLNQ8iXLdcZ5yzpM7RRJPn7MAYjqK2Ctqftvjs9au3s",
  "key42": "W56cSb5v7fTMiGs3CoWTGxUb5QinxRyDKhTACxo99SVYo28eVgBTM5Rwh7n28JPStjyHpxCDHyZgNewePBVRWkQ",
  "key43": "42chKMV76m8wTqqxdwjv5szXYvX8BF31DFHErzCgzEBHWtbEDcZ3aNhevCcJnrx97kkXHbCciGCrrm7RionVBrRV",
  "key44": "4ecj6Wwk3kQvQ3QzjJyJLV4NfdzHmVeYHJA7X9BBxnbuZoaXwdwgr1eWym7Z7uwBJUpKqXKDppjk8ycZqFxHma4T",
  "key45": "2JdGKfHVgqHKikhJ1FWKzxgSKSZ2bvvAoPo3jTgRU5tb7R12z21tXnXuDBgMrisYrec6tA4Cj3R98hGqxjtLbHqX"
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
