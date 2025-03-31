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
    "4sq51LsFCvBYW6g53wHWAfss8mkFKbhJRChjsbpt1ALDfAHzbxKgqrLS9RwSKHNAELhycvqhGeiqn9oAA6ZJeaYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E7cHQyjCe99rtZYCK3aXGHP6rPGm5VgoFmn4APoWkWhcqHjnSt9GxWkXzoeRcadwMhonF3Q2ZcWqKXWEeXQ4atR",
  "key1": "3x6ULR64ug8eKxjBKNPARfnXAL6mTJchBt9s4uoCnLhJ2vz2EVgSLfg5Hb9VqAqiLEdGAswUqAh2xHudz68tDDyh",
  "key2": "4GXnZB7SnyMLx5VC7h7AZXBreXirYQKS9efgKtZ1LQnounwtFfc2e3V76mQJJZGXjbQf5rwmvTQCab58BSMbESsS",
  "key3": "4ptgTqb7oVJTDPPaDWTmGqHryx2VYU9FPotThVCFDtCbdkRQ2Fg1epaiJ2iLfLcxr6aGLGpomerw2tkJjbZq85mX",
  "key4": "3PZWo1G5a6pcyVJjgtpm6p2DkniHP7BwAtdCiHHvSP5kLvJC9FDrY9668f293Xk9LM35UMYzKEd97sq5K3sWkm8L",
  "key5": "3hy6dB2MCmq5YgHCEXBvvPiWV5RYQCoqT7GcxVeaRvXjtSafjJDvrKjDVaJ7dbnYgKvqMdW3nhAveojE1QZDSFpr",
  "key6": "5NcbQ47UsYWXVmBWbw8KVCR9U6P5ikp8TgQx3JFEPN5SnsYXMajWCa8gmpgyeGmyHigfAxLE1P5mqjDcv5x73qae",
  "key7": "49HhQzkvAY2EYsfyuyyPe3j1ycXSvm5bALY9ehDbBrasBPVEbiwf55iD891sFeg8rqN5vwjnVMJBbxrFfbGupMuy",
  "key8": "5c6GVkeEZ4HtqYYsd1ZtgD2UspmGAmZRFewTq4m2jJ2BG7QTCYJnk7c4o5N8JUdBM1Xhy74HFcUotEWiZhNWrn9v",
  "key9": "2athGT51HmYa3WtgWoZHnE7z83f87kFM4BoNJmj6TK7mqqs1nKvT7oBf38mS6A59gggzXRvZ2WuTAXAMx3MaTVYa",
  "key10": "Snfko6KeJqq7TawMBLgcc1PFZJ7s7G7UkaiTSWkKvdr8RPWcrfranj9ExvpcgQEaRiNCus7KFtY5TXCCLDhaazq",
  "key11": "3mbPVCqAtAKbs53Qmb31PD7vXNywyHdpqYj7n5hYK9RDDYdQ17kjjMRFegrD4222yrUHWX4LFZeNyF4MQQpYvy5J",
  "key12": "5Rgjav59knFDERYvWA8aQ78rSvWHZ3i3cri4Pgvynxg5aDwhFTcHefEgoJ2v51mZyPS5FZ7rdBX3QPcvzKBhcjcV",
  "key13": "2gUhHiFpn87RMWYTVq2tpG1pzuMQxZgR8vJU225A8uMe1g3USE88zCpyzhvmxmDoSvUAtXhZkrBGNF4z1czAAm2D",
  "key14": "4uWiXyvfVJ3SKaSw49Vwj8px5S1qSpm44hzmSWWZoq1Cwtu6Zt4HozJgEnqkVYJAEmh2cNvGLui5r6Hv4U51SUZF",
  "key15": "5XyZfaegCrEPSJpbCAFbXno75yTY6f8EMXLMJ2ecG82w6encACuU6rJu1TaFpC5StdFi4UTiiPheJuhLKC2EnZVb",
  "key16": "3G4DnDsr2uHcs2kaE1KKLo8aDphhNXpDEFV4CCAUhBP7GB6xjDGNRMxDHkmwap6SbbL5B2jMfb8it94oQSbFmV7n",
  "key17": "4UBt111WNZtS2J6WpxGFu92RSHhZz4wY69s3ZsFUFJCossqrYnn58AGa7BrN2YtbNHAuNSERD2bf48i7RHa7YEGg",
  "key18": "AJAMmamr12ca5sb5qVSPSVfuq9ZdyKU1mhQWXinFhnAjs1nv8C5h7EEZm4Pa3MYaafpWi6z7y7XLjhbfRjwvZi5",
  "key19": "4ZGyYGTeTotwCQn7q8cQCVf7WQHFjmgsRTiB8sK5gKzrqP2BBRMqXZkxzeqRtjzHVcGHKwe2mGiEMLuX3EuonTky",
  "key20": "5xsFXp2uHskFQ7jkXiNN8CyguTQshhSB1hXq4w69MSikkXey4jSZT7hcjeknV4KqkeoNCRzHs1Xiyv2ZiXfcbG63",
  "key21": "26smximuPu5KbpVMifFFzZZzHsXH2hmXsmD8WY5KhK4bWmqB4zUuDKaU8fB5xtvoShoEMuckEx9TEF4CJxPLP8zr",
  "key22": "4LDzR7WaRFyDMH5qLfu9kmJGrxyFwZrbizXxN95aUy1urYPJY93DaFK1t23t5GW9qm8cEF4iHyeDTxxAzTj9FSmE",
  "key23": "4MgeSWKvTZBfNYK8dmXyfwxtmU2VmLEeQF1tzQtT4EkFw6JuHqbpBPYNZXqPUV8Wo2jCTKsAxrCu2mayWtmWg4eM",
  "key24": "3NVPaDYP2Xtdz8uKAhK9Lunr1KpkbdYfoR5KMKxUuS1zVE1VbF8KThEd435J139AMcdFDm2nYCcmmuS8wGmJpfyL",
  "key25": "3MJ4mTSbumh5UJVM9oRcfuCJHGG4tWcWDCzBjRnKjUEhTmY8XDGh4SK8K4msfbzywrhsYCJDKBG8Wf3qC6Xx1F9r",
  "key26": "2DSyzcaRvFtKri1dsoNbWHEyG9J1URFGBGyE1gVQL9Tj12UajRrL1VpkSSGiHhKKAuamHPryxuiRC6J7EVaNid9N",
  "key27": "3DW1jTZuLhpvXXsNS9yWQ8Mm9xqRZfmVhNAK5NXujnXkehwTtjLVardQD4yVBXnKQtQ8ZFUNxnV3UExa1Ey6QBoL",
  "key28": "3zpMsAkGoWT4faHdXJLm5mzW3tfhjjDbvCWWNQbZftjMMNkt8JxEiHbRu8pZAVNo3qdYGcHssgfnRNYkcPo22YSj",
  "key29": "EvtjcjWVczNQmJx4JUaQwBmbfUB4rf9Qr3xakqCqfjy7Ztv7CqPD1FyGKL21euTv1eGYxoCQqUSk3zR8aPoPpiv",
  "key30": "Qudih7sx47pi9jQjhMMAC7CemKY3TZmnBZhs5AdrnGaJr4vbow3yBMn5U9H59GWQWXX13Xu9KKi3aECLrDTXE8s",
  "key31": "53SnrVdEpTzSkgzzeiwzXXYpRufF7xgeFxYvMUYPLQBzJJqSoXPDsykXpp6KTSaGmsp9iy4sj5gtwKdqTKQvf6oU",
  "key32": "3qpQGxMeFEwEBm4A6g8rDGWMh3zJ5deq6TEUrU7EJVf4s3Bxz4PpJFSPkKPpL5EMnnvJDknW5Bx1XAjCC4qhZzoj",
  "key33": "4hBvioJTH7QtybuMFZspWUayPDDxwYiFqRmCqZi5i12xtRAodxZrmWSHPzMmeFstFmdwRJr24g8G5u9EfJxTeQu8",
  "key34": "2nwESwTEEwKFKPmRkZaXPBRxfGa95qJdv7okWqqVChdqmNVuQskHbTzV7rhRF8xYtQUH4wymKYnpQhG2xcCGb2o",
  "key35": "2xnBiKBmvZNKeaMo25px9nQ3otXgy1Q9YPLD58dq69imFYPsZuPFXu4SzvsNaZMXLLSqkoKEwLRETBGX7CDfjMWY",
  "key36": "5xGuewna3C6uBoivVxmRRALTgo1J7wExyP3VLdfk87taSRps6fvX63vTNAMxgjrxTLePeY1iVtsR9JNkbSNzzLuN",
  "key37": "2vBqHQPL2JZmSK7nfxALTYijvFWmwULT7A3jLZS2SNbRP15RQAxFonHCVUuGDcdzhEsyAjNnrCJFupvb1HkZXnTj",
  "key38": "3BQpF4sJY8tMVYPYEGwUyp5adbXZ5k2JAQVxLXXcA3bKLKmkxFF7mBjBwMzwyQFDUbG9kAhbzoYuXTQuUTVCTyKt",
  "key39": "3uVp6y53P6Wc1LvSLjiL2DjQFQXURi5a4DBRcCqWAo65F4HFJKupJUt32FJMkMCjpCqhcYFMXNCcVRv1r4ur7TCW",
  "key40": "3qTrsCNj6wHG2S5hsXoGeBqTJ8uSoCYX8QZh1RfXVnojDTNVmrgVmMAZVtptPDUf28ZG58HFKc76wjupwq2YRWZ5",
  "key41": "4YgWsRdL1mc7jLYvpzPFAAL9L49uiZvLAWEnowLLUp1oLRdpJwQiL9RWTS8UYSbEZeNRrKCvykD56jqtbfJB8WJP",
  "key42": "4NVWTvvP1uZtJxjKetYgHBHXB1vaf4xVmVVAekHXgCMuCACRUydW5weffNqqGh3idNgL14oMtbDZ1ifGRBBV1Epb",
  "key43": "2japuYMFSCKWSTmEqdNhxkvLJWbFLVswDHN4VLwgVWVLurT1PtyaTDSYVMTmpMTqouV4cnzKWaZStEu4yuJkj9t4",
  "key44": "4mreHQS5XBeYPiUsHzUAiAbHxUsPcStMX9apPe84q4Z7zWdoTexoRdHwbFE2gHiHgHJDsZWojTKt1BoiQKZiGbwb",
  "key45": "5uUfbvVybXLZmjnWcYoeLAKW6tXj7AtWVBzcFYMjKCzS4aNqGL4VtLjTicX1jdeAVnrwurzdRz53Ybe6zsYCnZSu"
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
